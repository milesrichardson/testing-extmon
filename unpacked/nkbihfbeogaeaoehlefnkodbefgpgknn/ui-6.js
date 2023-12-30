LavaPack.loadBundle(
  [
    [
      4739,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../box": 4607,
        "../button": 4611,
        "../definition-list/definition-list": 4628,
        "../popover": 4699,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = f);
                var n = e("lodash"),
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = p(e("prop-types")),
                  o = e("../../../helpers/constants/design-system"),
                  i = p(e("../box")),
                  c = p(e("../button")),
                  u = p(e("../definition-list/definition-list")),
                  l = p(e("../popover")),
                  d = e("../../../hooks/useI18nContext");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function f({ dictionary: e, tooltips: t, warnings: a, prefaceKeys: r, title: p }) {
                  const [m, f] = (0, s.useState)(!1),
                    g = (0, d.useI18nContext)();
                  return s.default.createElement(
                    s.default.Fragment,
                    null,
                    s.default.createElement(
                      i.default,
                      { margin: 6, padding: 4, paddingBottom: 3, borderRadius: o.Size.LG, borderColor: o.BorderColor.borderMuted },
                      s.default.createElement(u.default, { dictionary: (0, n.pick)(e, r), warnings: a, tooltips: t }),
                      s.default.createElement(
                        c.default,
                        { className: "truncated-definition-list__view-more", type: "link", onClick: () => f(!0) },
                        g("viewAllDetails")
                      )
                    ),
                    m &&
                      s.default.createElement(
                        l.default,
                        {
                          title: p,
                          open: m,
                          onClose: () => f(!1),
                          footer: s.default.createElement(
                            s.default.Fragment,
                            null,
                            s.default.createElement("div", null),
                            s.default.createElement(c.default, { type: "primary", style: { width: "50%" }, onClick: () => f(!1) }, "Close")
                          )
                        },
                        s.default.createElement(
                          i.default,
                          { padding: 6, paddingTop: 0 },
                          s.default.createElement(u.default, { gap: o.Size.MD, tooltips: t, warnings: a, dictionary: e })
                        )
                      )
                  );
                }
                f.propTypes = {
                  dictionary: u.default.propTypes.dictionary,
                  tooltips: u.default.propTypes.dictionary,
                  warnings: u.default.propTypes.dictionary,
                  title: r.default.string,
                  prefaceKeys: r.default.arrayOf(r.default.string)
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/truncated-definition-list/truncated-definition-list.js" }
    ],
    [
      4740,
      { "./typography": 4741 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./typography")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/typography/index.js" }
    ],
    [
      4741,
      { "../../../helpers/constants/design-system": 4771, "../box": 4607, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.ValidTags = a.ValidColors = void 0), (a.default = h);
                var n = u(e("react")),
                  s = u(e("classnames")),
                  r = u(e("prop-types")),
                  o = e("../../../helpers/constants/design-system"),
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = c(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("../box"));
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (c = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                const { H6: d, H7: p, H8: m, H9: f } = o.TypographyVariant,
                  g = (a.ValidColors = [
                    o.Color.textDefault,
                    o.Color.textAlternative,
                    o.Color.textMuted,
                    o.Color.overlayInverse,
                    o.Color.primaryDefault,
                    o.Color.primaryInverse,
                    o.Color.errorDefault,
                    o.Color.errorInverse,
                    o.Color.successDefault,
                    o.Color.successInverse,
                    o.Color.sepoliaInverse,
                    o.Color.warningDefault,
                    o.Color.warningInverse,
                    o.Color.infoDefault,
                    o.Color.infoInverse,
                    o.Color.goerli,
                    o.Color.sepolia,
                    o.Color.goerliInverse,
                    o.Color.sepoliaInverse,
                    o.Color.lineaGoerli,
                    o.Color.lineaGoerliInverse,
                    o.Color.lineaMainnet,
                    o.Color.lineaMainnetInverse
                  ]),
                  T = (a.ValidTags = [
                    "dd",
                    "div",
                    "dt",
                    "em",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "li",
                    "p",
                    "span",
                    "strong",
                    "ul",
                    "label"
                  ]);
                function h({
                  variant: e = o.TypographyVariant.paragraph,
                  color: t = o.Color.textDefault,
                  fontWeight: a = "normal",
                  fontStyle: r = "normal",
                  align: c,
                  overflowWrap: u,
                  title: g,
                  as: T,
                  margin: h,
                  marginTop: v = 1,
                  marginRight: y,
                  marginBottom: _ = 1,
                  marginLeft: E,
                  boxProps: S = {},
                  className: k,
                  testId: w,
                  children: A
                }) {
                  let I,
                    b = T ?? e;
                  "strong" === b && (I = o.FONT_WEIGHT.BOLD);
                  const P = (0, s.default)("typography", k, `typography--${e}`, `typography--weight-${I || a}`, `typography--style-${r}`, {
                    [`typography--align-${c}`]: Boolean(c),
                    [`typography--color-${t}`]: Boolean(t),
                    [`typography--overflowwrap-${u}`]: Boolean(u)
                  });
                  return (
                    b === o.TypographyVariant.paragraph ? (b = "p") : [p, m, f].includes(b) && (b = d),
                    n.default.createElement(
                      i.default,
                      l({ margin: h, marginTop: v, marginRight: y, marginBottom: _, marginLeft: E }, S),
                      (e) => n.default.createElement(b, { className: (0, s.default)(e, P), title: g, "data-testid": w }, A)
                    )
                  );
                }
                h.propTypes = {
                  variant: r.default.oneOf(Object.values(o.TypographyVariant)),
                  color: r.default.oneOf(g),
                  fontWeight: r.default.oneOf(Object.values(o.FONT_WEIGHT)),
                  fontStyle: r.default.oneOf(Object.values(o.FONT_STYLE)),
                  align: r.default.oneOf(Object.values(o.TextAlign)),
                  overflowWrap: r.default.oneOf(Object.values(o.OVERFLOW_WRAP)),
                  as: r.default.oneOf(T),
                  margin: i.MultipleSizesAndAuto,
                  marginTop: i.MultipleSizesAndAuto,
                  marginBottom: i.MultipleSizesAndAuto,
                  marginRight: i.MultipleSizesAndAuto,
                  marginLeft: i.MultipleSizesAndAuto,
                  boxProps: r.default.shape({ ...i.default.propTypes }),
                  className: r.default.string,
                  title: r.default.string,
                  testId: r.default.string,
                  children: r.default.node.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/typography/typography.js" }
    ],
    [
      4742,
      { "./unit-input.component": 4743 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./unit-input.component")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/unit-input/index.js" }
    ],
    [
      4743,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = i(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = o(e("prop-types")),
                  r = o(e("classnames"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (i = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function c(e, t, a) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (a !== undefined) {
                          var n = a.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = a),
                    e
                  );
                }
                class u extends n.PureComponent {
                  constructor(...e) {
                    super(...e),
                      c(this, "state", { value: this.props.value }),
                      c(this, "handleFocus", () => {
                        this.unitInput.focus();
                      }),
                      c(this, "handleInputFocus", ({ target: { value: e } }) => {
                        "0" === e && this.setState({ value: "" });
                      }),
                      c(this, "handleInputBlur", ({ target: { value: e } }) => {
                        "" === e && this.setState({ value: "0" }), this.props.onBlur && this.props.onBlur(e);
                      }),
                      c(this, "handleChange", (e) => {
                        const { value: t } = e.target;
                        let a = t;
                        t.length && t.length > 1 && (a = t.replace(/^0*(?=\d)/u, "")), this.setState({ value: a }), this.props.onChange(a);
                      });
                  }
                  componentDidUpdate(e) {
                    const { value: t } = e,
                      { value: a } = this.props,
                      { value: n } = this.state;
                    t !== a && Number(a) !== Number(n) && this.setState({ value: a });
                  }
                  getInputWidth(e) {
                    const t = String(e);
                    return `${(t.length || 1) + (t.match(/\./u) ? -0.5 : 0) + 0.5}ch`;
                  }
                  render() {
                    const {
                        className: e,
                        error: t,
                        placeholder: a,
                        suffix: s,
                        actionComponent: o,
                        children: i,
                        dataTestId: c
                      } = this.props,
                      { value: u } = this.state;
                    return n.default.createElement(
                      "div",
                      { className: (0, r.default)("unit-input", { "unit-input--error": t }, e), onClick: this.handleFocus },
                      n.default.createElement(
                        "div",
                        { className: "unit-input__inputs" },
                        n.default.createElement(
                          "div",
                          { className: "unit-input__input-container" },
                          n.default.createElement("input", {
                            "data-testid": c,
                            type: "number",
                            dir: "ltr",
                            className: (0, r.default)("unit-input__input"),
                            value: u,
                            placeholder: a,
                            onChange: this.handleChange,
                            onBlur: this.handleInputBlur,
                            onFocus: this.handleInputFocus,
                            style: { width: this.getInputWidth(u) },
                            ref: (e) => {
                              this.unitInput = e;
                            },
                            autoFocus: !0
                          }),
                          s ? n.default.createElement("div", { className: "unit-input__suffix" }, s) : null
                        ),
                        i
                      ),
                      o
                    );
                  }
                }
                (a.default = u),
                  c(u, "propTypes", {
                    className: s.default.string,
                    dataTestId: s.default.string,
                    children: s.default.node,
                    actionComponent: s.default.node,
                    error: s.default.bool,
                    onChange: s.default.func,
                    onBlur: s.default.func,
                    placeholder: s.default.string,
                    suffix: s.default.string,
                    value: s.default.oneOfType([s.default.string, s.default.number])
                  }),
                  c(u, "defaultProps", { value: "", placeholder: "0" });
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/unit-input/unit-input.component.js" }
    ],
    [
      4744,
      {
        "../../../contexts/i18n": 4748,
        "../../../selectors": 5197,
        "../button": 4611,
        "../identicon": 4664,
        "../popover": 4699,
        "../text-field": 4725,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = f);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = e("react-redux"),
                  r = p(e("prop-types")),
                  o = p(e("../popover")),
                  i = p(e("../button")),
                  c = p(e("../text-field")),
                  u = e("../../../contexts/i18n"),
                  l = p(e("../identicon")),
                  d = e("../../../selectors");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function f({ address: e, nickname: t = "", memo: a = "", onAdd: r, onClose: p }) {
                  var m;
                  const f = (0, n.useContext)(u.I18nContext),
                    [g, T] = (0, n.useState)(null === t ? "" : t),
                    [h, v] = (0, n.useState)(null === a ? "" : a),
                    y = (0, n.useCallback)(() => {
                      p();
                    }, [p]),
                    _ = (0, s.useSelector)(d.getTokenList);
                  return n.default.createElement(
                    o.default,
                    {
                      title: f(t ? "editAddressNickname" : "addANickname"),
                      onClose: y,
                      className: "update-nickname__wrapper",
                      footer: n.default.createElement(
                        n.default.Fragment,
                        null,
                        n.default.createElement(
                          i.default,
                          {
                            className: "update-nickname__cancel",
                            type: "secondary",
                            onClick: () => {
                              p();
                            }
                          },
                          f("cancel")
                        ),
                        n.default.createElement(
                          i.default,
                          {
                            className: "update-nickname__save",
                            type: "primary",
                            onClick: () => {
                              r(e, g, h), p();
                            },
                            disabled: !g
                          },
                          f("save")
                        )
                      )
                    },
                    n.default.createElement(
                      "div",
                      { className: "update-nickname__content" },
                      n.default.createElement(l.default, {
                        className: "update-nickname__content__indenticon",
                        address: e,
                        diameter: 36,
                        image: null === (m = _[e.toLowerCase()]) || void 0 === m ? void 0 : m.iconUrl
                      }),
                      n.default.createElement("label", { className: "update-nickname__content__label--capitalized" }, f("address")),
                      n.default.createElement("div", { className: "update-nickname__content__address" }, e),
                      n.default.createElement("div", { className: "update-nickname__content__nickname-label" }, f("nickname")),
                      n.default.createElement(c.default, {
                        className: "update-nickname__content__text-field",
                        value: g,
                        onChange: (e) => {
                          T(e.target.value);
                        },
                        placeholder: f("addANickname"),
                        fullWidth: !0
                      }),
                      n.default.createElement("div", { className: "update-nickname__content__label--capitalized" }, f("memo")),
                      n.default.createElement(c.default, {
                        type: "text",
                        id: "memo",
                        value: h,
                        onChange: (e) => {
                          v(e.target.value);
                        },
                        placeholder: f("addMemo"),
                        fullWidth: !0,
                        margin: "dense",
                        multiline: !0,
                        rows: 3,
                        classes: {
                          inputMultiline: "update-nickname__content__text-area",
                          inputRoot: "update-nickname__content__text-area-wrapper"
                        }
                      })
                    )
                  );
                }
                f.propTypes = {
                  nickname: r.default.string,
                  address: r.default.string,
                  memo: r.default.string,
                  onAdd: r.default.func,
                  onClose: r.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/update-nickname-popover/update-nickname-popover.js" }
    ],
    [
      4745,
      { "./url-icon": 4746 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./url-icon")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/url-icon/index.js" }
    ],
    [
      4746,
      { "../icon-with-fallback": 4652, classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = c);
                var n = i(e("react")),
                  s = i(e("prop-types")),
                  r = i(e("classnames")),
                  o = i(e("../icon-with-fallback"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({ url: e, className: t, name: a, fallbackClassName: s }) {
                  return n.default.createElement(o.default, {
                    className: (0, r.default)("url-icon", t),
                    icon: e,
                    name: a,
                    fallbackClassName: (0, r.default)("url-icon__fallback", s)
                  });
                }
                c.propTypes = {
                  url: s.default.string,
                  className: s.default.string,
                  name: s.default.string,
                  fallbackClassName: s.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/ui/url-icon/url-icon.js" }
    ],
    [
      4747,
      { "../hooks/gasFeeInput/useGasFeeInputs": 4818, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.GasFeeContextProvider = a.GasFeeContext = void 0),
                  (a.useGasFeeContext = function () {
                    return (0, s.useContext)(c);
                  });
                var n,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = i(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = (n = e("prop-types")) && n.__esModule ? n : { default: n },
                  o = e("../hooks/gasFeeInput/useGasFeeInputs");
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (i = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const c = (a.GasFeeContext = (0, s.createContext)({})),
                  u = ({ children: e, defaultEstimateToUse: t, transaction: a, minimumGasLimit: n, editGasMode: r }) => {
                    const i = (0, o.useGasFeeInputs)(t, a, n, r);
                    return s.default.createElement(c.Provider, { value: i }, e);
                  };
                (a.GasFeeContextProvider = u),
                  (u.propTypes = {
                    children: r.default.node.isRequired,
                    defaultEstimateToUse: r.default.string,
                    transaction: r.default.object,
                    minimumGasLimit: r.default.string,
                    editGasMode: r.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/contexts/gasFee.js" }
    ],
    [
      4748,
      { "../ducks/locale/locale": 4762, "../helpers/utils/i18n-helper": 4799, "prop-types": 3450, react: 3690, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.LegacyI18nProvider = a.I18nProvider = a.I18nContext = void 0);
                var n,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = u(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = (n = e("prop-types")) && n.__esModule ? n : { default: n },
                  o = e("react-redux"),
                  i = e("../ducks/locale/locale"),
                  c = e("../helpers/utils/i18n-helper");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (u = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function l(e, t, a) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (a !== undefined) {
                          var n = a.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = a),
                    e
                  );
                }
                const d = (a.I18nContext = (0, s.createContext)((e) => `[${e}]`)),
                  p = (e) => {
                    const t = (0, o.useSelector)(i.getCurrentLocale),
                      a = (0, o.useSelector)(i.getCurrentLocaleMessages),
                      n = (0, o.useSelector)(i.getEnLocaleMessages),
                      r = (0, s.useMemo)(
                        () =>
                          (e, ...s) =>
                            (0, c.getMessage)(t, a, e, ...s) || (0, c.getMessage)(t, n, e, ...s),
                        [t, a, n]
                      );
                    return s.default.createElement(d.Provider, { value: r }, e.children);
                  };
                (a.I18nProvider = p), (p.propTypes = { children: r.default.node }), (p.defaultProps = { children: undefined });
                class m extends s.Component {
                  getChildContext() {
                    return { t: this.context };
                  }
                  render() {
                    return this.props.children;
                  }
                }
                (a.LegacyI18nProvider = m),
                  l(m, "propTypes", { children: r.default.node }),
                  l(m, "defaultProps", { children: undefined }),
                  l(m, "contextType", d),
                  l(m, "childContextTypes", { t: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/contexts/i18n.js" }
    ],
    [
      4749,
      {
        "../../app/scripts/lib/util": 82,
        "../../shared/constants/metametrics": 3962,
        "../helpers/constants/routes": 4776,
        "../hooks/useSegmentContext": 4850,
        "../store/actions": 5204,
        "@sentry/browser": 1982,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.MetaMetricsContext = a.LegacyMetaMetricsProvider = void 0),
                  (a.MetaMetricsProvider = v);
                var n,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = (n = e("prop-types")) && n.__esModule ? n : { default: n },
                  o = e("react-router-dom"),
                  i = e("@sentry/browser"),
                  c = e("lodash"),
                  u = e("../../app/scripts/lib/util"),
                  l = e("../helpers/constants/routes"),
                  d = e("../../shared/constants/metametrics"),
                  p = e("../hooks/useSegmentContext"),
                  m = e("../store/actions");
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (f = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function g(e, t, a) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var a = e[Symbol.toPrimitive];
                        if (a !== undefined) {
                          var n = a.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = a),
                    e
                  );
                }
                const T = (a.MetaMetricsContext = (0, s.createContext)(() => {
                    (0, i.captureException)(
                      Error(
                        "MetaMetrics context function was called from a react node that is not a descendant of a MetaMetrics context provider"
                      )
                    );
                  })),
                  h = Object.keys(l.PATH_NAME_MAP);
                function v({ children: e }) {
                  var t;
                  const a = (0, o.useLocation)(),
                    n = (0, p.useSegmentContext)(),
                    r = (0, s.useCallback)(
                      (e, t) => {
                        const a = null == t ? void 0 : t.contextPropsIntoEventProperties;
                        var s;
                        a &&
                          0 !== a.length &&
                          (e.properties || (e.properties = {}),
                          a.includes(d.MetaMetricsContextProp.PageTitle) &&
                            (e.properties[d.MetaMetricsContextProp.PageTitle] = null === (s = n.page) || void 0 === s ? void 0 : s.title));
                      },
                      [null === (t = n.page) || void 0 === t ? void 0 : t.title]
                    ),
                    f = (0, s.useCallback)(
                      (e, t) => {
                        r(e, t), (0, m.trackMetaMetricsEvent)({ ...e, environmentType: (0, u.getEnvironmentType)(), ...n }, t);
                      },
                      [r, n]
                    ),
                    g = (0, s.useRef)();
                  return (
                    (0, s.useEffect)(() => {
                      const e = (0, u.getEnvironmentType)(),
                        t = (0, o.matchPath)(a.pathname, { path: h, exact: !0, strict: !0 });
                      if (t) {
                        if (g.current !== t.path && ("notification" !== e || "/" !== t.path || g.current !== undefined)) {
                          const { path: s, params: r } = t,
                            o = l.PATH_NAME_MAP[s];
                          (0, m.trackMetaMetricsPage)(
                            {
                              name: o,
                              params: (0, c.omit)(r, ["account", "address"]),
                              environmentType: e,
                              page: n.page,
                              referrer: n.referrer
                            },
                            { isOptInPath: a.pathname.startsWith("/initialize") }
                          );
                        }
                      } else
                        (0, i.captureMessage)("Segment page tracking found unmatched route", {
                          extra: { previousMatch: g, currentPath: a.pathname }
                        });
                      g.current = null == t ? void 0 : t.path;
                    }, [a, n]),
                    s.default.createElement(T.Provider, { value: f }, e)
                  );
                }
                v.propTypes = { children: r.default.node };
                class y extends s.Component {
                  getChildContext() {
                    return { trackEvent: this.context };
                  }
                  render() {
                    return this.props.children;
                  }
                }
                (a.LegacyMetaMetricsProvider = y),
                  g(y, "propTypes", { children: r.default.node }),
                  g(y, "defaultProps", { children: undefined }),
                  g(y, "contextType", T),
                  g(y, "childContextTypes", { trackEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/contexts/metametrics.js" }
    ],
    [
      4750,
      { "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.TransactionModalContextProvider = a.TransactionModalContext = void 0),
                  (a.useTransactionModalContext = function () {
                    return (0, s.useContext)(i);
                  });
                var n,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = o(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var i = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, r, i) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = (n = e("prop-types")) && n.__esModule ? n : { default: n };
                function o(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (o = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const i = (a.TransactionModalContext = (0, s.createContext)({})),
                  c = ({ children: e }) => {
                    const [t, a] = (0, s.useState)([]);
                    return s.default.createElement(
                      i.Provider,
                      {
                        value: {
                          closeModal: (e) => {
                            if (t < 0) return;
                            const n = [...t];
                            e.forEach((e) => {
                              const a = t.indexOf(e);
                              n.splice(a, 1);
                            }),
                              a(n);
                          },
                          closeAllModals: () => {
                            a([]);
                          },
                          currentModal: t[t.length - 1],
                          openModal: (e) => {
                            if (t.includes(e)) return;
                            const n = [...t];
                            n.push(e), a(n);
                          },
                          openModalCount: t.length
                        }
                      },
                      e
                    );
                  };
                (a.TransactionModalContextProvider = c), (c.propTypes = { children: r.default.node.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/contexts/transaction-modal.js" }
    ],
    [
      4751,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.ALERT_STATE = void 0);
                a.ALERT_STATE = { CLOSED: "CLOSED", ERROR: "ERROR", LOADING: "LOADING", OPEN: "OPEN" };
              };
            };
      },
      { package: "$root$", file: "ui/ducks/alerts/enums.js" }
    ],
    [
      4752,
      { "./enums": 4751, "./invalid-custom-network": 4753, "./unconnected-account": 4754 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "ALERT_STATE", {
                    enumerable: !0,
                    get: function () {
                      return r.ALERT_STATE;
                    }
                  }),
                  Object.defineProperty(a, "invalidCustomNetwork", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  }),
                  Object.defineProperty(a, "unconnectedAccount", {
                    enumerable: !0,
                    get: function () {
                      return n.default;
                    }
                  });
                var n = o(e("./unconnected-account")),
                  s = o(e("./invalid-custom-network")),
                  r = e("./enums");
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/ducks/alerts/index.js" }
    ],
    [
      4753,
      { "../../../shared/constants/alerts": 3952, "./enums": 4751, "@reduxjs/toolkit": 1944 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.openAlert = a.getNetworkName = a.getAlertState = a.dismissAlert = a.default = a.alertIsOpen = void 0);
                var n = e("@reduxjs/toolkit"),
                  s = e("../../../shared/constants/alerts"),
                  r = e("./enums");
                const o = s.AlertTypes.invalidCustomNetwork,
                  i = { state: r.ALERT_STATE.CLOSED, networkName: "" },
                  c = (0, n.createSlice)({
                    name: o,
                    initialState: i,
                    reducers: {
                      openAlert: (e, t) => {
                        (e.state = r.ALERT_STATE.OPEN), (e.networkName = t.payload);
                      },
                      dismissAlert: (e) => {
                        (e.state = r.ALERT_STATE.CLOSED), (e.networkName = "");
                      }
                    }
                  }),
                  { actions: u, reducer: l } = c;
                a.default = l;
                a.getAlertState = (e) => e[o].state;
                a.getNetworkName = (e) => e[o].networkName;
                a.alertIsOpen = (e) => e[o].state !== r.ALERT_STATE.CLOSED;
                const { openAlert: d, dismissAlert: p } = u;
                (a.dismissAlert = p), (a.openAlert = d);
              };
            };
      },
      { package: "$root$", file: "ui/ducks/alerts/invalid-custom-network.js" }
    ],
    [
      4754,
      {
        "../../../shared/constants/alerts": 3952,
        "../../selectors": 5197,
        "../../store/actionConstants": 5203,
        "../../store/actions": 5204,
        "./enums": 4751,
        "@reduxjs/toolkit": 1944,
        "@sentry/browser": 1982
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.switchedToUnconnectedAccount =
                    a.switchToAccount =
                    a.getAlertState =
                    a.dismissAndDisableAlert =
                    a.dismissAlert =
                    a.default =
                    a.connectAccount =
                    a.alertIsOpen =
                      void 0);
                var n = e("@reduxjs/toolkit"),
                  s = e("@sentry/browser"),
                  r = e("../../../shared/constants/alerts"),
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = l(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("../../store/actionConstants")),
                  i = e("../../store/actions"),
                  c = e("../../selectors"),
                  u = e("./enums");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (l = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const d = r.AlertTypes.unconnectedAccount,
                  p = { state: u.ALERT_STATE.CLOSED },
                  m = (0, n.createSlice)({
                    name: d,
                    initialState: p,
                    reducers: {
                      connectAccountFailed: (e) => {
                        e.state = u.ALERT_STATE.ERROR;
                      },
                      connectAccountRequested: (e) => {
                        e.state = u.ALERT_STATE.LOADING;
                      },
                      connectAccountSucceeded: (e) => {
                        e.state = u.ALERT_STATE.CLOSED;
                      },
                      disableAlertFailed: (e) => {
                        e.state = u.ALERT_STATE.ERROR;
                      },
                      disableAlertRequested: (e) => {
                        e.state = u.ALERT_STATE.LOADING;
                      },
                      disableAlertSucceeded: (e) => {
                        e.state = u.ALERT_STATE.CLOSED;
                      },
                      dismissAlert: (e) => {
                        e.state = u.ALERT_STATE.CLOSED;
                      },
                      switchAccountFailed: (e) => {
                        e.state = u.ALERT_STATE.ERROR;
                      },
                      switchAccountRequested: (e) => {
                        e.state = u.ALERT_STATE.LOADING;
                      },
                      switchAccountSucceeded: (e) => {
                        e.state = u.ALERT_STATE.CLOSED;
                      },
                      switchedToUnconnectedAccount: (e) => {
                        e.state = u.ALERT_STATE.OPEN;
                      }
                    },
                    extraReducers: {
                      [o.SELECTED_ADDRESS_CHANGED]: (e) => {
                        e.state === u.ALERT_STATE.OPEN && (e.state = u.ALERT_STATE.CLOSED);
                      }
                    }
                  }),
                  { actions: f, reducer: g } = m;
                a.default = g;
                a.getAlertState = (e) => e[d].state;
                a.alertIsOpen = (e) => e[d].state !== u.ALERT_STATE.CLOSED;
                const {
                  connectAccountFailed: T,
                  connectAccountRequested: h,
                  connectAccountSucceeded: v,
                  disableAlertFailed: y,
                  disableAlertRequested: _,
                  disableAlertSucceeded: E,
                  dismissAlert: S,
                  switchAccountFailed: k,
                  switchAccountRequested: w,
                  switchAccountSucceeded: A,
                  switchedToUnconnectedAccount: I
                } = f;
                (a.switchedToUnconnectedAccount = I), (a.dismissAlert = S);
                a.dismissAndDisableAlert = () => async (e) => {
                  try {
                    await e(_()), await (0, i.setAlertEnabledness)(d, !1), await e(E());
                  } catch (t) {
                    console.error(t), (0, s.captureException)(t), await e(y());
                  }
                };
                a.switchToAccount = (e) => async (t) => {
                  try {
                    await t(w()), await t((0, i.setSelectedAddress)(e)), await t(A());
                  } catch (e) {
                    console.error(e), (0, s.captureException)(e), await t(k());
                  }
                };
                a.connectAccount = () => async (e, t) => {
                  const a = t(),
                    n = (0, c.getSelectedAddress)(a),
                    r = (0, c.getOriginOfCurrentTab)(a);
                  try {
                    await e(h()), await e((0, i.addPermittedAccount)(r, n)), await e(v());
                  } catch (t) {
                    console.error(t), (0, s.captureException)(t), await e(T());
                  }
                };
              };
            };
      },
      { package: "$root$", file: "ui/ducks/alerts/unconnected-account.js" }
    ],
    [
      4755,
      { "../../../shared/constants/hardware-wallets": 3958, "../../store/actionConstants": 5203 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function (e, t) {
                    const a = { ...o, ...e };
                    switch (t.type) {
                      case s.NETWORK_DROPDOWN_OPEN:
                        return { ...a, networkDropdownOpen: !0 };
                      case s.NETWORK_DROPDOWN_CLOSE:
                        return { ...a, networkDropdownOpen: !1 };
                      case s.IMPORT_NFTS_MODAL_OPEN:
                        return { ...a, importNftsModal: { open: !0, ...t.payload } };
                      case s.IMPORT_NFTS_MODAL_CLOSE:
                        return { ...a, importNftsModal: { open: !1 } };
                      case s.SHOW_IPFS_MODAL_OPEN:
                        return { ...a, showIpfsModalOpen: !0 };
                      case s.SHOW_IPFS_MODAL_CLOSE:
                        return { ...a, showIpfsModalOpen: !1 };
                      case s.IMPORT_TOKENS_POPOVER_OPEN:
                        return { ...a, importTokensModalOpen: !0 };
                      case s.IMPORT_TOKENS_POPOVER_CLOSE:
                        return { ...a, importTokensModalOpen: !1 };
                      case s.SELECT_ACTION_MODAL_OPEN:
                        return { ...a, showSelectActionModal: !0 };
                      case s.SELECT_ACTION_MODAL_CLOSE:
                        return { ...a, showSelectActionModal: !1 };
                      case s.ALERT_OPEN:
                        return { ...a, alertOpen: !0, alertMessage: t.payload };
                      case s.ALERT_CLOSE:
                        return { ...a, alertOpen: !1, alertMessage: null };
                      case s.SET_ACCOUNT_DETAILS_ADDRESS:
                        return { ...a, accountDetailsAddress: t.payload };
                      case s.QR_CODE_DETECTED:
                        return { ...a, qrCodeData: t.value };
                      case s.SET_SMART_TRANSACTIONS_ERROR:
                        return { ...a, smartTransactionsError: t.payload };
                      case s.DISMISS_SMART_TRANSACTIONS_ERROR_MESSAGE:
                        return { ...a, smartTransactionsErrorMessageDismissed: !0 };
                      case s.MODAL_OPEN: {
                        const { name: e, ...n } = t.payload;
                        return {
                          ...a,
                          modal: { open: !0, modalState: { name: e, props: { ...n } }, previousModalState: { ...a.modal.modalState } }
                        };
                      }
                      case s.MODAL_CLOSE:
                        return {
                          ...a,
                          modal: Object.assign(
                            a.modal,
                            { open: !1 },
                            { modalState: { name: null, props: {} } },
                            { previousModalState: a.modal.modalState }
                          )
                        };
                      case s.CLEAR_ACCOUNT_DETAILS:
                        return { ...a, accountDetail: { privateKey: "" } };
                      case s.SHOW_SEND_TOKEN_PAGE:
                      case s.LOCK_METAMASK:
                        return { ...a, warning: null };
                      case s.GO_HOME:
                        return { ...a, accountDetail: { privateKey: "" }, warning: null };
                      case s.SHOW_ACCOUNTS_PAGE:
                        return { ...a, isLoading: !1, warning: null, scrollToBottom: !1 };
                      case s.SHOW_CONF_TX_PAGE:
                        return { ...a, txId: t.id, warning: null, isLoading: !1 };
                      case s.COMPLETED_TX:
                        return { ...a, warning: null, txId: null };
                      case s.UNLOCK_FAILED:
                        return { ...a, warning: t.value || "Incorrect password. Try again." };
                      case s.UNLOCK_SUCCEEDED:
                        return { ...a, warning: "" };
                      case s.SET_HARDWARE_WALLET_DEFAULT_HD_PATH: {
                        const { device: e, path: n } = t.payload,
                          s = { ...a.defaultHdPaths };
                        return (s[e] = n), { ...a, defaultHdPaths: s };
                      }
                      case s.SHOW_LOADING:
                        return { ...a, isLoading: !0, loadingMessage: t.payload };
                      case s.HIDE_LOADING:
                        return { ...a, isLoading: !1 };
                      case s.DISPLAY_WARNING:
                        return { ...a, warning: t.payload, isLoading: !1 };
                      case s.HIDE_WARNING:
                        return { ...a, warning: undefined };
                      case s.SHOW_PRIVATE_KEY:
                        return { ...a, accountDetail: { privateKey: t.payload } };
                      case s.SET_SELECTED_NETWORK_CONFIGURATION_ID:
                        return { ...a, selectedNetworkConfigurationId: t.payload };
                      case s.SET_NEW_NETWORK_ADDED: {
                        const { networkConfigurationId: e, nickname: n } = t.payload;
                        return { ...a, newNetworkAddedName: n, newNetworkAddedConfigurationId: e };
                      }
                      case s.SET_NEW_TOKENS_IMPORTED:
                        return { ...a, newTokensImported: t.payload };
                      case s.SET_NEW_NFT_ADDED_MESSAGE:
                        return { ...a, newNftAddedMessage: t.payload };
                      case s.SET_REMOVE_NFT_MESSAGE:
                        return { ...a, removeNftMessage: t.payload };
                      case s.SET_REQUEST_ACCOUNT_TABS:
                        return { ...a, requestAccountTabs: t.value };
                      case s.SET_OPEN_METAMASK_TAB_IDS:
                        return { ...a, openMetaMaskTabs: t.payload };
                      case s.HIDE_WHATS_NEW_POPUP:
                        return { ...a, showWhatsNewPopup: !1 };
                      case s.CAPTURE_SINGLE_EXCEPTION:
                        return { ...a, singleExceptions: { ...a.singleExceptions, [t.value]: null } };
                      case s.TOGGLE_GAS_LOADING_ANIMATION:
                        return { ...a, gasLoadingAnimationIsShowing: t.payload };
                      case s.SET_WEBHID_CONNECTED_STATUS:
                        return { ...a, ledgerWebHidConnectedStatus: t.payload };
                      case s.SET_LEDGER_TRANSPORT_STATUS:
                        return { ...a, ledgerTransportStatus: t.payload };
                      case s.TOGGLE_CURRENCY_INPUT_SWITCH:
                        return { ...a, sendInputCurrencySwitched: !a.sendInputCurrencySwitched };
                      case s.ONBOARDED_IN_THIS_UI_SESSION:
                        return { ...a, onboardedInThisUISession: t.payload };
                      case s.SET_CUSTOM_TOKEN_AMOUNT:
                        return { ...a, customTokenAmount: t.payload };
                      case s.SHOW_KEYRING_SNAP_REMOVAL_RESULT:
                        return { ...a, showKeyringRemovalSnapModal: !0, keyringRemovalSnapModal: { ...t.payload } };
                      case s.HIDE_KEYRING_SNAP_REMOVAL_RESULT:
                        return { ...a, showKeyringRemovalSnapModal: !1, keyringRemovalSnapModal: { snapName: "", result: "none" } };
                      default:
                        return a;
                    }
                  }),
                  (a.getGasLoadingAnimationIsShowing = function (e) {
                    return e.appState.gasLoadingAnimationIsShowing;
                  }),
                  (a.getLedgerTransportStatus = function (e) {
                    return e.appState.ledgerTransportStatus;
                  }),
                  (a.getLedgerWebHidConnectedStatus = function (e) {
                    return e.appState.ledgerWebHidConnectedStatus;
                  }),
                  (a.getQrCodeData = function (e) {
                    return e.appState.qrCodeData;
                  }),
                  (a.hideWhatsNewPopup = function () {
                    return { type: s.HIDE_WHATS_NEW_POPUP };
                  }),
                  (a.setCustomTokenAmount = function (e) {
                    return { type: s.SET_CUSTOM_TOKEN_AMOUNT, payload: e };
                  }),
                  (a.setLedgerTransportStatus = function (e) {
                    return { type: s.SET_LEDGER_TRANSPORT_STATUS, payload: e };
                  }),
                  (a.setLedgerWebHidConnectedStatus = function (e) {
                    return { type: s.SET_WEBHID_CONNECTED_STATUS, payload: e };
                  }),
                  (a.setOnBoardedInThisUISession = function (e) {
                    return { type: s.ONBOARDED_IN_THIS_UI_SESSION, payload: e };
                  }),
                  (a.toggleCurrencySwitch = function () {
                    return { type: s.TOGGLE_CURRENCY_INPUT_SWITCH };
                  }),
                  (a.toggleGasLoadingAnimation = function (e) {
                    return { type: s.TOGGLE_GAS_LOADING_ANIMATION, payload: e };
                  });
                var n = e("../../../shared/constants/hardware-wallets"),
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = r(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = s ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("../../store/actionConstants"));
                function r(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (r = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const o = {
                  shouldClose: !1,
                  menuOpen: !1,
                  modal: { open: !1, modalState: { name: null, props: {} }, previousModalState: { name: null } },
                  alertOpen: !1,
                  alertMessage: null,
                  qrCodeData: null,
                  networkDropdownOpen: !1,
                  importNftsModal: { open: !1 },
                  showIpfsModalOpen: !1,
                  keyringRemovalSnapModal: { snapName: "", result: "none" },
                  showKeyringRemovalSnapModal: !1,
                  importTokensModalOpen: !1,
                  showSelectActionModal: !1,
                  accountDetail: { privateKey: "" },
                  isLoading: !1,
                  loadingMessage: null,
                  warning: null,
                  buyView: {},
                  defaultHdPaths: { trezor: "m/44'/60'/0'/0", ledger: "m/44'/60'/0'/0/0", lattice: "m/44'/60'/0'/0" },
                  networksTabSelectedRpcUrl: "",
                  requestAccountTabs: {},
                  openMetaMaskTabs: {},
                  currentWindowTab: {},
                  showWhatsNewPopup: !0,
                  showTermsOfUsePopup: !0,
                  singleExceptions: { testKey: null },
                  gasLoadingAnimationIsShowing: !1,
                  smartTransactionsError: null,
                  smartTransactionsErrorMessageDismissed: !1,
                  ledgerWebHidConnectedStatus: n.WebHIDConnectedStatuses.unknown,
                  ledgerTransportStatus: n.HardwareTransportStates.none,
                  newNftAddedMessage: "",
                  removeNftMessage: "",
                  newNetworkAddedName: "",
                  newNetworkAddedConfigurationId: "",
                  selectedNetworkConfigurationId: "",
                  sendInputCurrencySwitched: !1,
                  newTokensImported: "",
                  onboardedInThisUISession: !1,
                  customTokenAmount: "",
                  scrollToBottom: !0,
                  txId: null,
                  accountDetailsAddress: "",
                  snapsInstallPrivacyWarningShown: !1
                };
              };
            };
      },
      { package: "$root$", file: "ui/ducks/app/app.ts" }
    ],
    [
      4756,
      {
        "../../../shared/modules/conversion.utils": 3988,
        "../../../shared/modules/string-utils": 4002,
        "../../../shared/modules/transaction.utils": 4004,
        "../../helpers/utils/confirm-tx.util": 4794,
        "../../selectors": 5197,
        "../../selectors/custom-gas": 5195,
        "../metamask/metamask": 4763
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.clearConfirmTransaction = function () {
                    return { type: f };
                  }),
                  (a.default = function (e = y, t = {}) {
                    switch (t.type) {
                      case d:
                        return { ...e, txData: { ...t.payload } };
                      case p:
                        return { ...e, tokenData: { ...t.payload } };
                      case m:
                        return { ...e, tokenProps: { ...t.payload } };
                      case g: {
                        const { fiatTransactionAmount: a, ethTransactionAmount: n, hexTransactionAmount: s } = t.payload;
                        return {
                          ...e,
                          fiatTransactionAmount: a || e.fiatTransactionAmount,
                          ethTransactionAmount: n || e.ethTransactionAmount,
                          hexTransactionAmount: s || e.hexTransactionAmount
                        };
                      }
                      case T: {
                        const { fiatTransactionFee: a, ethTransactionFee: n, hexTransactionFee: s } = t.payload;
                        return {
                          ...e,
                          fiatTransactionFee: a || e.fiatTransactionFee,
                          ethTransactionFee: n || e.ethTransactionFee,
                          hexTransactionFee: s || e.hexTransactionFee
                        };
                      }
                      case h: {
                        const { fiatTransactionTotal: a, ethTransactionTotal: n, hexTransactionTotal: s } = t.payload;
                        return {
                          ...e,
                          fiatTransactionTotal: a || e.fiatTransactionTotal,
                          ethTransactionTotal: n || e.ethTransactionTotal,
                          hexTransactionTotal: s || e.hexTransactionTotal
                        };
                      }
                      case v:
                        return { ...e, nonce: t.payload };
                      case f:
                        return y;
                      default:
                        return e;
                    }
                  }),
                  (a.setTransactionToConfirm = function (e) {
                    return (t, a) => {
                      const r = a(),
                        i = (0, n.unconfirmedTransactionsHashSelector)(r)[e];
                      if (i)
                        if (i.txParams) {
                          t(b(i));
                          const { txParams: e } = i;
                          if (e.data) {
                            const { to: a, data: n } = e,
                              o = (0, u.parseStandardTokenTransactionData)(n),
                              i = (0, s.getTokens)(r),
                              l = null == i ? void 0 : i.find(({ address: e }) => (0, c.isEqualCaseInsensitive)(a, e));
                            t(S({ decimals: null == l ? void 0 : l.decimals, symbol: null == l ? void 0 : l.symbol })), t(E(o));
                          }
                          if (e.nonce) {
                            t(I((0, o.hexToDecimal)(e.nonce)));
                          }
                        } else t(_(i));
                      else console.error(`Transaction with id ${e} not found`);
                    };
                  }),
                  (a.updateNonce = I),
                  (a.updateTokenData = E),
                  (a.updateTokenProps = S),
                  (a.updateTransactionAmounts = k),
                  (a.updateTransactionFees = w),
                  (a.updateTransactionTotals = A),
                  (a.updateTxData = _),
                  (a.updateTxDataAndCalculate = b);
                var n = e("../../selectors"),
                  s = e("../metamask/metamask"),
                  r = e("../../helpers/utils/confirm-tx.util"),
                  o = e("../../../shared/modules/conversion.utils"),
                  i = e("../../selectors/custom-gas"),
                  c = e("../../../shared/modules/string-utils"),
                  u = e("../../../shared/modules/transaction.utils");
                const l = (e) => `metamask/confirm-transaction/${e}`,
                  d = l("UPDATE_TX_DATA"),
                  p = l("UPDATE_TOKEN_DATA"),
                  m = l("UPDATE_TOKEN_PROPS"),
                  f = l("CLEAR_CONFIRM_TRANSACTION"),
                  g = l("UPDATE_TRANSACTION_AMOUNTS"),
                  T = l("UPDATE_TRANSACTION_FEES"),
                  h = l("UPDATE_TRANSACTION_TOTALS"),
                  v = l("UPDATE_NONCE"),
                  y = {
                    txData: {},
                    tokenData: {},
                    tokenProps: {},
                    fiatTransactionAmount: "",
                    fiatTransactionFee: "",
                    fiatTransactionTotal: "",
                    ethTransactionAmount: "",
                    ethTransactionFee: "",
                    ethTransactionTotal: "",
                    hexTransactionAmount: "",
                    hexTransactionFee: "",
                    hexTransactionTotal: "",
                    nonce: ""
                  };
                function _(e) {
                  return { type: d, payload: e };
                }
                function E(e) {
                  return { type: p, payload: e };
                }
                function S(e) {
                  return { type: m, payload: e };
                }
                function k(e) {
                  return { type: g, payload: e };
                }
                function w(e) {
                  return { type: T, payload: e };
                }
                function A(e) {
                  return { type: h, payload: e };
                }
                function I(e) {
                  return { type: v, payload: e };
                }
                function b(e) {
                  return (t, a) => {
                    const c = a(),
                      u = (0, n.currentCurrencySelector)(c),
                      l = (0, n.conversionRateSelector)(c),
                      d = (0, s.getNativeCurrency)(c);
                    t(_(e));
                    const { txParams: { value: p = "0x0", gas: m = "0x0" } = {} } = e;
                    let { txParams: { gasPrice: f } = {} } = e;
                    f || (f = (0, i.getAveragePriceEstimateInHexWEI)(c) || "0x0");
                    const g = (0, o.getValueFromWeiHex)({
                        value: p,
                        fromCurrency: d,
                        toCurrency: u,
                        conversionRate: l,
                        numberOfDecimals: 2
                      }),
                      T = (0, o.getValueFromWeiHex)({ value: p, fromCurrency: d, toCurrency: d, conversionRate: l, numberOfDecimals: 6 });
                    t(k({ fiatTransactionAmount: g, ethTransactionAmount: T, hexTransactionAmount: p }));
                    const h = (0, r.getHexGasTotal)({ gasLimit: m, gasPrice: f }),
                      v = (0, r.getTransactionFee)({ value: h, fromCurrency: d, toCurrency: u, numberOfDecimals: 2, conversionRate: l }),
                      y = (0, r.getTransactionFee)({ value: h, fromCurrency: d, toCurrency: d, numberOfDecimals: 6, conversionRate: l });
                    t(w({ fiatTransactionFee: v, ethTransactionFee: y, hexTransactionFee: h }));
                    t(
                      A({
                        fiatTransactionTotal: (0, r.addFiat)(v, g),
                        ethTransactionTotal: (0, r.addEth)(y, T),
                        hexTransactionTotal: (0, o.sumHexes)(p, h)
                      })
                    );
                  };
                }
              };
            };
      },
      { package: "$root$", file: "ui/ducks/confirm-transaction/confirm-transaction.duck.js" }
    ],
    [
      4757,
      {
        "../../shared/constants/network": 3963,
        "../../shared/modules/hexstring-utils": 3993,
        "../helpers/utils/util": 4812,
        "../pages/send/send.constants": 5046,
        "../selectors": 5197,
        "../store/actionConstants": 5203,
        "../store/actions": 5204,
        "@ethersproject/providers": 469,
        "@reduxjs/toolkit": 1944,
        "ethereum-ens-network-map": 2668,
        "ethereumjs-util": 2693,
        loglevel: 3322,
        "unicode-confusables": 3867
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.domainInitialState = a.default = void 0),
                  (a.fetchResolutions = M),
                  (a.getDomainError = function (e) {
                    return e[y].error;
                  }),
                  (a.getDomainResolution = function (e) {
                    return e[y].resolution;
                  }),
                  (a.getDomainType = function (e) {
                    return e[y].domainType;
                  }),
                  (a.getDomainWarning = function (e) {
                    return e[y].warning;
                  }),
                  (a.getResolvingSnap = function (e) {
                    return e[y].resolvingSnap;
                  }),
                  (a.initializeDomainSlice = P),
                  (a.lookupDomainName = function (e) {
                    return async (t, a) => {
                      const n = e.trim();
                      let r = a();
                      if (
                        ("UNINITIALIZED" === r[y].stage && (await t(P())),
                        (r = a()),
                        "NO_NETWORK_SUPPORT" !== r[y].stage ||
                          (!1 === (0, g.isBurnAddress)(n) && (0, g.isValidHexAddress)(n, { mixedCaseUseChecksum: !0 })) ||
                          (0, i.isHexString)(n))
                      ) {
                        let e, a;
                        s.default.info(`Resolvers attempting to resolve name: ${n}`);
                        let i,
                          l = !1;
                        try {
                          var o;
                          e = await (null === (o = _) || void 0 === o ? void 0 : o.resolveName(n));
                        } catch (e) {
                          i = e;
                        }
                        const d = (0, u.getCurrentChainId)(r),
                          p = parseInt(d, 16);
                        if (!e) {
                          var c;
                          a = await M({ domain: n, chainId: `eip155:${p}`, state: r });
                          const t = null === (c = a[0]) || void 0 === c ? void 0 : c.resolvedAddress;
                          (l = Boolean(t)), l && (e = t);
                        }
                        await t(
                          w({
                            address: e,
                            error: i,
                            chainId: d,
                            network: p,
                            domainType: l ? "Other" : h,
                            domainName: n,
                            ...(l ? { resolvingSnap: (0, m.getSnapName)(a[0].snapId) } : {})
                          })
                        );
                      } else await t(I());
                    };
                  }),
                  (a.resetDomainResolution = void 0);
                var n = e("@reduxjs/toolkit"),
                  s = T(e("loglevel")),
                  r = T(e("ethereum-ens-network-map")),
                  o = e("unicode-confusables"),
                  i = e("ethereumjs-util"),
                  c = e("@ethersproject/providers"),
                  u = e("../selectors"),
                  l = e("../store/actions"),
                  d = e("../../shared/constants/network"),
                  p = e("../pages/send/send.constants"),
                  m = e("../helpers/utils/util"),
                  f = e("../store/actionConstants"),
                  g = e("../../shared/modules/hexstring-utils");
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const h = "ENS",
                  v = {
                    stage: "UNINITIALIZED",
                    resolution: null,
                    error: null,
                    warning: null,
                    chainId: null,
                    domainType: null,
                    domainName: null,
                    resolvingSnap: null
                  },
                  y = ((a.domainInitialState = v), "DNS");
                let _ = null;
                const E = (0, n.createSlice)({
                    name: y,
                    initialState: v,
                    reducers: {
                      domainLookup: (e, t) => {
                        (e.resolution = null), (e.error = null), (e.warning = null), (e.domainType = null), (e.domainName = null);
                        const { address: a, error: n, chainId: r, domainType: i, domainName: c, resolvingSnap: u } = t.payload;
                        (e.domainType = i),
                          e.domainType === h
                            ? n
                              ? (0, m.isValidDomainName)(c) && "ENS name not defined." === n.message
                                ? (e.error = r === d.CHAIN_IDS.MAINNET ? p.ENS_NO_ADDRESS_FOR_NAME : p.ENS_NOT_FOUND_ON_NETWORK)
                                : "Illegal character for ENS." === n.message
                                ? (e.error = p.ENS_ILLEGAL_CHARACTER)
                                : (s.default.error(n), (e.error = p.ENS_UNKNOWN_ERROR))
                              : a
                              ? (a === g.BURN_ADDRESS
                                  ? (e.error = p.ENS_NO_ADDRESS_FOR_NAME)
                                  : "0x" === a
                                  ? (e.error = p.ENS_REGISTRATION_ERROR)
                                  : (e.resolution = a),
                                (0, m.isValidDomainName)(a) && (0, o.isConfusing)(a) && (e.warning = p.CONFUSING_ENS_ERROR))
                              : (e.error = p.ENS_NO_ADDRESS_FOR_NAME)
                            : (a || (e.error = "No resolution for domain provided."), a && ((e.resolution = a), (e.resolvingSnap = u)));
                      },
                      enableDomainLookup: (e, t) => {
                        (e.stage = "INITIALIZED"), (e.error = null), (e.resolution = null), (e.warning = null), (e.chainId = t.payload);
                      },
                      disableDomainLookup: (e) => {
                        (e.stage = "NO_NETWORK_SUPPORT"), (e.error = null), (e.warning = null), (e.resolution = null), (e.chainId = null);
                      },
                      domainNotSupported: (e) => {
                        (e.resolution = null), (e.warning = null), (e.error = p.DOMAIN_NOT_SUPPORTED_ON_NETWORK);
                      },
                      resetDomainResolution: (e) => {
                        (e.resolution = null), (e.warning = null), (e.error = null);
                      }
                    },
                    extraReducers: (e) => {
                      e.addCase(f.CHAIN_CHANGED, (e, t) => {
                        t.payload !== e.chainId && ((e.stage = "UNINITIALIZED"), (_ = null));
                      });
                    }
                  }),
                  { reducer: S, actions: k } = E;
                a.default = S;
                const { domainLookup: w, enableDomainLookup: A, domainNotSupported: I, resetDomainResolution: b } = k;
                function P() {
                  return (e, t) => {
                    const a = t(),
                      n = (0, u.getCurrentChainId)(a),
                      s = d.CHAIN_ID_TO_ETHERS_NETWORK_NAME_MAP[n],
                      o = parseInt(n, 16),
                      i = r.default[o.toString()],
                      l = Boolean(i);
                    (_ = l ? new c.Web3Provider(global.ethereumProvider, { chainId: o, name: s, ensAddress: i }) : null), e(A(n));
                  };
                }
                async function M({ domain: e, address: t, chainId: a, state: n }) {
                  const s = (0, u.getPermissionSubjects)(n),
                    r = (0, u.getNameLookupSnapsIds)(n).filter((e) => {
                      var t;
                      return (
                        null === (t = s[e]) || void 0 === t ? void 0 : t.permissions["endowment:name-lookup"]
                      ).caveats[0].value.includes(a);
                    }),
                    o = e ? { domain: e, chainId: a } : { address: t, chainId: a };
                  return (
                    await Promise.allSettled(
                      r.map((e) =>
                        (0, l.handleSnapRequest)({
                          snapId: e,
                          origin: "",
                          handler: "onNameLookup",
                          request: { jsonrpc: "2.0", method: " ", params: o }
                        })
                      )
                    )
                  ).reduce((e, t, a) => ("rejected" !== t.status && null !== t.value && e.push({ ...t.value, snapId: r[a] }), e), []);
                }
                a.resetDomainResolution = b;
              };
            };
      },
      { package: "$root$", file: "ui/ducks/domains.js" }
    ],
    [
      4758,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.SET_CUSTOM_GAS_PRICE = a.SET_CUSTOM_GAS_LIMIT = a.RESET_CUSTOM_DATA = void 0);
                (a.RESET_CUSTOM_DATA = "metamask/gas/RESET_CUSTOM_DATA"),
                  (a.SET_CUSTOM_GAS_LIMIT = "metamask/gas/SET_CUSTOM_GAS_LIMIT"),
                  (a.SET_CUSTOM_GAS_PRICE = "metamask/gas/SET_CUSTOM_GAS_PRICE");
              };
            };
      },
      { package: "$root$", file: "ui/ducks/gas/gas-action-constants.ts" }
    ],
    [
      4759,
      { "./gas-action-constants": 4758, lodash: 3312 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function (e = r, t) {
                    switch (t.type) {
                      case s.SET_CUSTOM_GAS_PRICE:
                        return { ...e, customData: { ...e.customData, price: t.value } };
                      case s.SET_CUSTOM_GAS_LIMIT:
                        return { ...e, customData: { ...e.customData, limit: t.value } };
                      case s.RESET_CUSTOM_DATA:
                        return { ...e, customData: (0, n.cloneDeep)(r.customData) };
                      default:
                        return e;
                    }
                  }),
                  (a.setCustomGasLimit = function (e) {
                    return { type: s.SET_CUSTOM_GAS_LIMIT, value: e };
                  }),
                  (a.setCustomGasPrice = function (e) {
                    return { type: s.SET_CUSTOM_GAS_PRICE, value: e };
                  });
                var n = e("lodash"),
                  s = e("./gas-action-constants");
                const r = { customData: { price: null, limit: null } };
              };
            };
      },
      { package: "$root$", file: "ui/ducks/gas/gas.duck.js" }
    ],
    [
      4760,
      { "../../helpers/constants/routes": 4776, "@reduxjs/toolkit": 1944 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.pageChanged = a.getMostRecentOverviewPage = a.default = void 0);
                var n = e("@reduxjs/toolkit"),
                  s = e("../../helpers/constants/routes");
                const r = { mostRecentOverviewPage: s.DEFAULT_ROUTE },
                  o = "history",
                  i = (0, n.createSlice)({
                    name: o,
                    initialState: r,
                    reducers: {
                      pageChanged: (e, t) => {
                        const a = t.payload;
                        (a === s.DEFAULT_ROUTE || a.startsWith(s.ASSET_ROUTE)) && (e.mostRecentOverviewPage = a);
                      }
                    }
                  }),
                  { actions: c, reducer: u } = i;
                a.default = u;
                a.getMostRecentOverviewPage = (e) => e[o].mostRecentOverviewPage;
                const { pageChanged: l } = c;
                a.pageChanged = l;
              };
            };
      },
      { package: "$root$", file: "ui/ducks/history/history.js" }
    ],
    [
      4761,
      {
        "../../shared/constants/alerts": 3952,
        "./alerts": 4752,
        "./app/app": 4755,
        "./confirm-transaction/confirm-transaction.duck": 4756,
        "./domains": 4757,
        "./gas/gas.duck": 4759,
        "./history/history": 4760,
        "./locale/locale": 4762,
        "./metamask/metamask": 4763,
        "./send/send": 4766,
        "./swaps/swaps": 4767,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("redux"),
                  s = e("../../shared/constants/alerts"),
                  r = g(e("./metamask/metamask")),
                  o = g(e("./locale/locale")),
                  i = g(e("./send/send")),
                  c = g(e("./domains")),
                  u = g(e("./app/app")),
                  l = g(e("./confirm-transaction/confirm-transaction.duck")),
                  d = g(e("./gas/gas.duck")),
                  p = e("./alerts"),
                  m = g(e("./swaps/swaps")),
                  f = g(e("./history/history"));
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                a.default = (0, n.combineReducers)({
                  [s.AlertTypes.invalidCustomNetwork]: p.invalidCustomNetwork,
                  [s.AlertTypes.unconnectedAccount]: p.unconnectedAccount,
                  activeTab: (e) => (e === undefined ? null : e),
                  metamask: r.default,
                  appState: u.default,
                  DNS: c.default,
                  history: f.default,
                  send: i.default,
                  confirmTransaction: l.default,
                  swaps: m.default,
                  gas: d.default,
                  localeMessages: o.default
                });
              };
            };
      },
      { package: "$root$", file: "ui/ducks/index.js" }
    ],
    [
      4762,
      { "../../store/actionConstants": 5203 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function (e = {}, { type: t, payload: a }) {
                    if (t === n.SET_CURRENT_LOCALE) return { ...e, current: a.messages, currentLocale: a.locale };
                    return e;
                  }),
                  (a.getEnLocaleMessages = a.getCurrentLocaleMessages = a.getCurrentLocale = void 0);
                var n = (function (e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var a = s(t);
                  if (a && a.has(e)) return a.get(e);
                  var n = { __proto__: null },
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                      var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                      i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                    }
                  return (n.default = e), a && a.set(e, n), n;
                })(e("../../store/actionConstants"));
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (s = function (e) {
                    return e ? a : t;
                  })(e);
                }
                a.getCurrentLocale = (e) => e.localeMessages.currentLocale;
                a.getCurrentLocaleMessages = (e) => e.localeMessages.current;
                a.getEnLocaleMessages = (e) => e.localeMessages.en;
              };
            };
      },
      { package: "$root$", file: "ui/ducks/locale/locale.js" }
    ],
    [
      4763,
      {
        "../../../shared/constants/alerts": 3952,
        "../../../shared/constants/gas": 3957,
        "../../../shared/constants/keyring": 3959,
        "../../../shared/constants/preferences": 3965,
        "../../../shared/modules/conversion.utils": 3988,
        "../../../shared/modules/hexstring-utils": 3993,
        "../../../shared/modules/string-utils": 4002,
        "../../selectors": 5197,
        "../../store/actionConstants": 5203,
        "../../store/actions": 5204,
        "../gas/gas.duck": 4759,
        "ethereumjs-util": 2693
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function (e = T, t) {
                    const a = { ...T, ...e };
                    switch (t.type) {
                      case p.UPDATE_METAMASK_STATE:
                        return { ...a, ...t.value };
                      case p.LOCK_METAMASK:
                        return { ...a, isUnlocked: !1 };
                      case p.SET_ACCOUNT_LABEL: {
                        const { account: e } = t.value,
                          n = t.value.label,
                          s = {};
                        s[e] = { ...a.identities[e], name: n };
                        const r = { ...a.identities, ...s };
                        return Object.assign(a, { identities: r });
                      }
                      case p.UPDATE_CUSTOM_NONCE:
                        return { ...a, customNonceValue: t.value };
                      case p.TOGGLE_ACCOUNT_MENU:
                        return { ...a, isAccountMenuOpen: !a.isAccountMenuOpen };
                      case p.TOGGLE_NETWORK_MENU:
                        return { ...a, isNetworkMenuOpen: !a.isNetworkMenuOpen };
                      case p.UPDATE_TRANSACTION_PARAMS: {
                        const { id: e, value: n } = t;
                        let { transactions: s } = a;
                        return (
                          (s = s.map((t) => {
                            if (t.id === e) {
                              const e = { ...t };
                              return (e.txParams = n), e;
                            }
                            return t;
                          })),
                          { ...a, transactions: s }
                        );
                      }
                      case p.SET_PARTICIPATE_IN_METAMETRICS:
                        return { ...a, participateInMetaMetrics: t.value };
                      case p.CLOSE_WELCOME_SCREEN:
                        return { ...a, welcomeScreenSeen: !0 };
                      case p.SET_PENDING_TOKENS:
                        return { ...a, pendingTokens: { ...t.payload } };
                      case p.CLEAR_PENDING_TOKENS:
                        return { ...a, pendingTokens: {} };
                      case p.COMPLETE_ONBOARDING:
                        return { ...a, completedOnboarding: !0 };
                      case p.SET_FIRST_TIME_FLOW_TYPE:
                        return { ...a, firstTimeFlowType: t.value };
                      case p.SET_NEXT_NONCE:
                        return { ...a, nextNonce: t.payload };
                      default:
                        return a;
                    }
                  }),
                  (a.doesUserHaveALedgerAccount = function (e) {
                    return e.metamask.keyrings.some((e) => e.type === o.KeyringType.ledger);
                  }),
                  (a.findKeyringForAddress = S),
                  (a.getAlertEnabledness = void 0),
                  (a.getBlockGasLimit = function (e) {
                    return e.metamask.currentBlockGasLimit;
                  }),
                  (a.getCompletedOnboarding = function (e) {
                    return e.metamask.completedOnboarding;
                  }),
                  (a.getConversionRate = function (e) {
                    var t;
                    return null === (t = e.metamask.currencyRates[y(e).ticker]) || void 0 === t ? void 0 : t.conversionRate;
                  }),
                  (a.getEstimatedGasFeeTimeBounds = function (e) {
                    return e.metamask.estimatedGasFeeTimeBounds;
                  }),
                  (a.getGasEstimateType = _),
                  (a.getGasFeeEstimates = E),
                  (a.getIsGasEstimatesLoading = function (e) {
                    const t = (0, d.checkNetworkAndAccountSupports1559)(e),
                      a = _(e),
                      n = a === r.GasEstimateTypes.feeMarket || a === r.GasEstimateTypes.ethGasPrice;
                    return a === r.GasEstimateTypes.none || (t && !n) || (!t && a === r.GasEstimateTypes.feeMarket);
                  }),
                  (a.getIsInitialized = function (e) {
                    return e.metamask.isInitialized;
                  }),
                  (a.getIsNetworkBusy = function (e) {
                    const t = E(e);
                    return (null == t ? void 0 : t.networkCongestion) >= r.NetworkCongestionThresholds.busy;
                  }),
                  (a.getIsUnlocked = function (e) {
                    return e.metamask.isUnlocked;
                  }),
                  (a.getLedgerTransportType = function (e) {
                    return e.metamask.ledgerTransportType;
                  }),
                  (a.getNativeCurrency = function (e) {
                    return y(e).ticker;
                  }),
                  (a.getNfts = a.getNftContracts = void 0),
                  (a.getNftsDropdownState = function (e) {
                    return e.metamask.nftsDropdownState;
                  }),
                  (a.getPendingTokens = void 0),
                  (a.getProviderConfig = y),
                  (a.getSeedPhraseBackedUp = function (e) {
                    return e.metamask.seedPhraseBackedUp;
                  }),
                  (a.getSendHexDataFeatureFlagState = function (e) {
                    return e.metamask.featureFlags.sendHexData;
                  }),
                  (a.getSendToAccounts = function (e) {
                    const t = (0, d.accountsWithSendEtherInfoSelector)(e),
                      a = (0, d.getAddressBook)(e);
                    return [...t, ...a];
                  }),
                  (a.getWeb3ShimUsageAlertEnabledness =
                    a.getUnconnectedAccountAlertShown =
                    a.getUnconnectedAccountAlertEnabledness =
                    a.getTokens =
                      void 0),
                  (a.isAddressLedger = function (e, t) {
                    const a = S(e, t);
                    return (null == a ? void 0 : a.type) === o.KeyringType.ledger;
                  }),
                  (a.isEIP1559Network = function (e) {
                    var t;
                    const a = (0, d.getSelectedNetworkClientId)(e);
                    return !0 === (null === (t = e.metamask.networksMetadata) || void 0 === t ? void 0 : t[a].EIPS[1559]);
                  }),
                  (a.isLineaMainnetNetworkReleased = function (e) {
                    return e.metamask.isLineaMainnetReleased;
                  }),
                  (a.isNotEIP1559Network = function (e) {
                    const t = (0, d.getSelectedNetworkClientId)(e);
                    return !1 === e.metamask.networksMetadata[t].EIPS[1559];
                  }),
                  (a.updateGasFees = function ({
                    gasPrice: e,
                    gasLimit: t,
                    maxPriorityFeePerGas: a,
                    maxFeePerGas: s,
                    transaction: r,
                    expectHexWei: o = !1
                  }) {
                    return async (i) => {
                      const u = { ...r.txParams, gas: t };
                      e
                        ? (i((0, f.setCustomGasPrice)(h(u.gasPrice, o))), (u.gasPrice = h(e, o)))
                        : s && a && ((u.maxFeePerGas = h(s, o)), (u.maxPriorityFeePerGas = (0, n.addHexPrefix)((0, c.decGWEIToHexWEI)(a))));
                      const l = { ...r, txParams: u },
                        d = (0, n.isHexString)((0, n.addHexPrefix)(t)) ? (0, n.addHexPrefix)(t) : (0, n.addHexPrefix)(t.toString(16));
                      i((0, f.setCustomGasLimit)(d)), await i((0, m.updateTransactionGasFees)(l.id, l));
                    };
                  });
                var n = e("ethereumjs-util"),
                  s = e("../../../shared/constants/alerts"),
                  r = e("../../../shared/constants/gas"),
                  o = e("../../../shared/constants/keyring"),
                  i = e("../../../shared/constants/preferences"),
                  c = e("../../../shared/modules/conversion.utils"),
                  u = e("../../../shared/modules/hexstring-utils"),
                  l = e("../../../shared/modules/string-utils"),
                  d = e("../../selectors"),
                  p = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = g(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("../../store/actionConstants")),
                  m = e("../../store/actions"),
                  f = e("../gas/gas.duck");
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (g = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const T = {
                  isInitialized: !1,
                  isUnlocked: !1,
                  isAccountMenuOpen: !1,
                  isNetworkMenuOpen: !1,
                  identities: {},
                  transactions: [],
                  networkConfigurations: {},
                  addressBook: [],
                  contractExchangeRates: {},
                  pendingTokens: {},
                  customNonceValue: "",
                  useBlockie: !1,
                  featureFlags: {},
                  welcomeScreenSeen: !1,
                  currentLocale: "",
                  currentBlockGasLimit: "",
                  preferences: {
                    autoLockTimeLimit: i.DEFAULT_AUTO_LOCK_TIME_LIMIT,
                    showFiatInTestnets: !1,
                    showTestNetworks: !1,
                    useNativeCurrencyAsPrimaryCurrency: !0
                  },
                  firstTimeFlowType: null,
                  completedOnboarding: !1,
                  knownMethodData: {},
                  use4ByteResolution: !0,
                  participateInMetaMetrics: null,
                  nextNonce: null,
                  currencyRates: { ETH: { conversionRate: null } },
                  providerConfig: { ticker: "ETH" }
                };
                const h = (e, t) => (0, n.addHexPrefix)(t ? e : (0, c.decGWEIToHexWEI)(e));
                const v = (e) => e.metamask.alertEnabledness;
                function y(e) {
                  return e.metamask.providerConfig;
                }
                a.getAlertEnabledness = v;
                a.getUnconnectedAccountAlertEnabledness = (e) => v(e)[s.AlertTypes.unconnectedAccount];
                a.getWeb3ShimUsageAlertEnabledness = (e) => v(e)[s.AlertTypes.web3ShimUsage];
                a.getUnconnectedAccountAlertShown = (e) => e.metamask.unconnectedAccountAlertShownOrigins;
                a.getPendingTokens = (e) => e.metamask.pendingTokens;
                a.getTokens = (e) => e.metamask.tokens;
                a.getNfts = (e) => {
                  var t;
                  const {
                      metamask: { allNfts: a, selectedAddress: n }
                    } = e,
                    { chainId: s } = y(e);
                  return (null == a || null === (t = a[n]) || void 0 === t ? void 0 : t[s]) ?? [];
                };
                function _(e) {
                  return e.metamask.gasEstimateType;
                }
                function E(e) {
                  return e.metamask.gasFeeEstimates;
                }
                function S(e, t) {
                  return e.metamask.keyrings.find((e) =>
                    e.accounts.some(
                      (e) =>
                        (0, l.isEqualCaseInsensitive)(e, (0, n.addHexPrefix)(t)) ||
                        (0, l.isEqualCaseInsensitive)(e, (0, u.stripHexPrefix)(t))
                    )
                  );
                }
                a.getNftContracts = (e) => {
                  var t;
                  const {
                      metamask: { allNftContracts: a, selectedAddress: n }
                    } = e,
                    { chainId: s } = y(e);
                  return (null == a || null === (t = a[n]) || void 0 === t ? void 0 : t[s]) ?? [];
                };
              };
            };
      },
      { package: "$root$", file: "ui/ducks/metamask/metamask.js" }
    ],
    [
      4764,
      {
        "../../../shared/constants/gas": 3957,
        "../../../shared/constants/network": 3963,
        "../../../shared/constants/transaction": 3974,
        "../../../shared/lib/transactions-controller-utils": 3982,
        "../../../shared/modules/Numeric": 3984,
        "../../../shared/modules/contract-utils": 3987,
        "../../pages/send/send.utils": 5048,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        "@metamask/transaction-controller": 1835,
        "bignumber.js": 2283,
        "ethereumjs-util": 2693,
        "human-standard-token-abi": 3064
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.estimateGasLimitForSend = async function ({
                    selectedAddress: e,
                    value: t,
                    gasPrice: a,
                    sendToken: s,
                    to: o,
                    data: c,
                    isNonStandardEthChain: l,
                    chainId: m,
                    gasLimit: T,
                    ...h
                  }) {
                    let v = !1,
                      y = i.MIN_GAS_LIMIT_HEX;
                    h.blockGasLimit ? (y = h.blockGasLimit) : s && (y = i.GAS_LIMITS.BASE_TOKEN_ESTIMATE);
                    const _ = { from: e, value: t, gasPrice: a };
                    if (s) {
                      if (!o) return i.GAS_LIMITS.BASE_TOKEN_ESTIMATE;
                      (_.value = "0x0"),
                        (_.data = (0, p.getAssetTransferData)({ sendToken: s, fromAddress: e, toAddress: o, amount: t })),
                        (_.to = s.address);
                    } else {
                      if (!c) {
                        const { isContractAddress: e } = o ? await (0, d.readAddressAsContract)(global.eth, o) : {};
                        if (!e && !l) return i.GAS_LIMITS.SIMPLE;
                        !e && l && (v = !0);
                      }
                      (_.data = c), o && (_.to = o), (t && "0" !== t) || (_.value = "0xff");
                    }
                    v || (_.gas = new g.Numeric(y, 16).times(new g.Numeric(0.95, 10)).round(0, r.default.ROUND_DOWN).toPrefixedHexString());
                    let E = 1.5;
                    v ? (E = 1) : u.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[m] && (E = u.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[m]);
                    try {
                      const e = await (0, f.estimateGas)(_),
                        t = (0, p.addGasBuffer)(e, y, E);
                      return (0, n.addHexPrefix)(t);
                    } catch (e) {
                      if (
                        e.message.includes("Transaction execution error.") ||
                        e.message.includes("gas required exceeds allowance or always failing transaction") ||
                        (u.CHAIN_ID_TO_GAS_LIMIT_BUFFER_MAP[m] && e.message.includes("gas required exceeds allowance"))
                      ) {
                        const e = (0, p.addGasBuffer)((null == _ ? void 0 : _.gas) ?? T, y, E);
                        return (0, n.addHexPrefix)(e);
                      }
                      throw e;
                    }
                  }),
                  (a.generateTransactionParams = function (e) {
                    var t, a;
                    const n = e.draftTransactions[e.currentTransactionUUID],
                      s = {
                        from: (null === (t = n.fromAccount) || void 0 === t ? void 0 : t.address) || e.selectedAccount.address,
                        gas: n.gas.gasLimit
                      };
                    switch (n.asset.type) {
                      case l.AssetType.token:
                        (s.to = n.asset.details.address),
                          (s.value = "0x0"),
                          (s.data = (0, p.generateERC20TransferData)({
                            toAddress: n.recipient.address,
                            amount: n.amount.value,
                            sendToken: n.asset.details
                          }));
                        break;
                      case l.AssetType.NFT:
                        (s.to = n.asset.details.address),
                          (s.value = "0x0"),
                          (s.data = (0, p.generateERC721TransferData)({
                            toAddress: n.recipient.address,
                            fromAddress: (null === (a = n.fromAccount) || void 0 === a ? void 0 : a.address) ?? e.selectedAccount.address,
                            tokenId: n.asset.details.tokenId
                          }));
                        break;
                      case l.AssetType.native:
                      default:
                        (s.to = n.recipient.address), (s.value = n.amount.value), (s.data = n.userInputHexData ?? undefined);
                    }
                    e.eip1559support
                      ? ((s.type = o.TransactionEnvelopeType.feeMarket),
                        (s.maxFeePerGas = n.gas.maxFeePerGas),
                        (s.maxPriorityFeePerGas = n.gas.maxPriorityFeePerGas),
                        (s.maxFeePerGas && "0x0" !== s.maxFeePerGas) || (s.maxFeePerGas = n.gas.gasPrice),
                        (s.maxPriorityFeePerGas && "0x0" !== s.maxPriorityFeePerGas) || (s.maxPriorityFeePerGas = s.maxFeePerGas))
                      : ((s.gasPrice = n.gas.gasPrice), (s.type = o.TransactionEnvelopeType.legacy));
                    return s;
                  }),
                  (a.getERC20Balance = async function (e, t) {
                    const a = global.eth.contract(s.default).at(e.address),
                      r = (await a.balanceOf(t)) ?? null;
                    if (!r) return "0x0";
                    const o = (0, c.calcTokenAmount)(r.balance.toString(), e.decimals).toString(16);
                    return (0, n.addHexPrefix)(o);
                  }),
                  (a.getRoundedGasPrice = function (e) {
                    const t = new g.Numeric(e, 10).round(9).toString(),
                      a = Number(t);
                    return (0, m.getGasPriceInHexWei)(a);
                  });
                var n = e("ethereumjs-util"),
                  s = T(e("human-standard-token-abi")),
                  r = T(e("bignumber.js")),
                  o = e("@metamask/transaction-controller"),
                  i = e("../../../shared/constants/gas"),
                  c = e("../../../shared/lib/transactions-controller-utils"),
                  u = e("../../../shared/constants/network"),
                  l = e("../../../shared/constants/transaction"),
                  d = e("../../../shared/modules/contract-utils"),
                  p = e("../../pages/send/send.utils"),
                  m = e("../../selectors"),
                  f = e("../../store/actions"),
                  g = e("../../../shared/modules/Numeric");
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/ducks/send/helpers.js" }
    ],
    [
      4765,
      { "./send": 4766 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 });
                var n = e("./send");
                Object.keys(n).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === n[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return n[e];
                        }
                      }));
                });
              };
            };
      },
      { package: "$root$", file: "ui/ducks/send/index.js" }
    ],
    [
      4766,
      {
        "../../../shared/constants/common": 3955,
        "../../../shared/constants/gas": 3957,
        "../../../shared/constants/transaction": 3974,
        "../../../shared/lib/metamask-controller-utils": 3977,
        "../../../shared/lib/transactions-controller-utils": 3982,
        "../../../shared/modules/Numeric": 3984,
        "../../../shared/modules/conversion.utils": 3988,
        "../../../shared/modules/hexstring-utils": 3993,
        "../../../shared/modules/string-utils": 4002,
        "../../../shared/modules/transaction.utils": 4004,
        "../../helpers/constants/error-keys": 4772,
        "../../helpers/utils/optimism/fetchEstimatedL1Fee": 4805,
        "../../helpers/utils/token-util": 4809,
        "../../helpers/utils/transactions.util": 4810,
        "../../helpers/utils/util": 4812,
        "../../pages/send/send.constants": 5046,
        "../../pages/send/send.utils": 5048,
        "../../selectors": 5197,
        "../../store/actionConstants": 5203,
        "../../store/actions": 5204,
        "../domains": 4757,
        "../gas/gas.duck": 4759,
        "../metamask/metamask": 4763,
        "./helpers": 4764,
        "@metamask/transaction-controller": 1835,
        "@reduxjs/toolkit": 1944,
        "bignumber.js": 2283,
        "ethereumjs-util": 2693,
        lodash: 3312,
        uuid: 3902
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.draftTransactionInitialState =
                    a.default =
                    a.computeEstimatedGasLimit =
                    a.addHistoryEntry =
                    a.acknowledgeRecipientWarning =
                    a.SEND_STATUSES =
                    a.SEND_STAGES =
                    a.RECIPIENT_SEARCH_MODES =
                    a.GAS_INPUT_MODES =
                    a.AMOUNT_MODES =
                      void 0),
                  (a.editExistingTransaction = function (e, t) {
                    return async (a, n) => {
                      await a(V.clearPreviousDrafts());
                      const s = n(),
                        o = (0, m.getUnapprovedTransactions)(s)[t],
                        i = (0, m.getTargetAccount)(s, o.txParams.from);
                      if (e === w.AssetType.native)
                        await a(
                          V.addNewDraft({
                            ...U,
                            id: t,
                            fromAccount: i,
                            gas: { ...U.gas, gasLimit: o.txParams.gas, gasPrice: o.txParams.gasPrice },
                            userInputHexData: o.txParams.data,
                            recipient: {
                              ...U.recipient,
                              address: o.txParams.to,
                              nickname: (0, m.getAddressBookEntryOrAccountName)(s, o.txParams.to) ?? ""
                            },
                            amount: { ...U.amount, value: o.txParams.value },
                            history: [`sendFlow - user clicked edit on transaction with id ${t}`]
                          })
                        ),
                          await a(ne({ type: w.AssetType.native }, { initialAssetSet: !0 }));
                      else {
                        const n = (0, b.parseStandardTokenTransactionData)(o.txParams.data),
                          c = e === w.AssetType.token ? (0, P.getTokenValueParam)(n) : "1",
                          l = (0, h.getTokenAddressParam)(n),
                          d = (0, m.getAddressBookEntryOrAccountName)(s, l) ?? "",
                          p = (0, r.addHexPrefix)((0, u.decimalToHex)(c));
                        await a(
                          V.addNewDraft({
                            ...U,
                            id: t,
                            fromAccount: i,
                            gas: { ...U.gas, gasLimit: o.txParams.gas, gasPrice: o.txParams.gasPrice },
                            userInputHexData: o.txParams.data,
                            recipient: { ...U.recipient, address: l, nickname: d },
                            amount: { ...U.amount, value: p },
                            history: [`sendFlow - user clicked edit on transaction with id ${t}`]
                          })
                        ),
                          await a(
                            ne(
                              {
                                type: e,
                                details: {
                                  address: o.txParams.to,
                                  ...(e === w.AssetType.NFT ? { tokenId: (0, h.getTokenIdParam)(n) ?? (0, P.getTokenValueParam)(n) } : {})
                                }
                              },
                              { initialAssetSet: !0 }
                            )
                          );
                      }
                      await a(H());
                    };
                  }),
                  (a.gasFeeIsInError = function (e) {
                    var t;
                    return Boolean(null === (t = re(e).gas) || void 0 === t ? void 0 : t.error);
                  }),
                  (a.getAssetError = function (e) {
                    return oe(e).error;
                  }),
                  (a.getCurrentDraftTransaction = re),
                  (a.getCurrentTransactionUUID = se),
                  (a.getDraftTransactionExists = function (e) {
                    const t = re(e);
                    if (0 === Object.keys(t).length) return !1;
                    return !0;
                  }),
                  (a.getDraftTransactionID = function (e) {
                    return re(e).id;
                  }),
                  (a.getGasInputMode = function (e) {
                    const t = (0, m.getIsMainnet)(e),
                      a = (0, y.getGasEstimateType)(e),
                      n = (0, m.getAdvancedInlineGasShown)(e);
                    if (e[$].gasIsSetInModal) return D.CUSTOM;
                    if (!t || n) return D.INLINE;
                    if (t && a === l.GasEstimateTypes.ethGasPrice) return D.INLINE;
                    return D.BASIC;
                  }),
                  (a.getGasLimit = function (e) {
                    var t;
                    return null === (t = re(e).gas) || void 0 === t ? void 0 : t.gasLimit;
                  }),
                  (a.getGasPrice = function (e) {
                    var t;
                    return null === (t = re(e).gas) || void 0 === t ? void 0 : t.gasPrice;
                  }),
                  (a.getGasTotal = function (e) {
                    var t;
                    return null === (t = re(e).gas) || void 0 === t ? void 0 : t.gasTotal;
                  }),
                  (a.getIsAssetSendable = function (e) {
                    var t, a;
                    if ((null === (t = oe(e)) || void 0 === t ? void 0 : t.type) === w.AssetType.native) return !0;
                    return !1 === (null === (a = oe(e)) || void 0 === a || null === (a = a.details) || void 0 === a ? void 0 : a.isERC721);
                  }),
                  (a.getIsBalanceInsufficient = function (e) {
                    var t;
                    return (null === (t = re(e).gas) || void 0 === t ? void 0 : t.error) === d.INSUFFICIENT_FUNDS_ERROR;
                  }),
                  (a.getIsUsingMyAccountForRecipientSearch = function (e) {
                    return e[$].recipientMode === G.MY_ACCOUNTS;
                  }),
                  (a.getMinimumGasLimitForSend = function (e) {
                    return e[$].gasLimitMinimum;
                  }),
                  (a.getRecipient = ie),
                  (a.getRecipientUserInput = function (e) {
                    return e[$].recipientInput;
                  }),
                  (a.getRecipientWarningAcknowledgement = function (e) {
                    var t;
                    return (null === (t = re(e).recipient) || void 0 === t ? void 0 : t.recipientWarningAcknowledged) ?? !1;
                  }),
                  (a.getSendAmount = function (e) {
                    var t;
                    return null === (t = re(e).amount) || void 0 === t ? void 0 : t.value;
                  }),
                  (a.getSendAsset = oe),
                  (a.getSendAssetAddress = function (e) {
                    var t;
                    return null === (t = oe(e)) || void 0 === t || null === (t = t.details) || void 0 === t ? void 0 : t.address;
                  }),
                  (a.getSendErrors = function (e) {
                    var t, a;
                    return {
                      gasFee: null === (t = re(e).gas) || void 0 === t ? void 0 : t.error,
                      amount: null === (a = re(e).amount) || void 0 === a ? void 0 : a.error
                    };
                  }),
                  (a.getSendHexData = function (e) {
                    return re(e).userInputHexData;
                  }),
                  (a.getSendMaxModeState = function (e) {
                    return e[$].amountMode === L.MAX;
                  }),
                  (a.getSendStage = function (e) {
                    return e[$].stage;
                  }),
                  (a.getSendTo = function (e) {
                    var t;
                    return null === (t = ie(e)) || void 0 === t ? void 0 : t.address;
                  }),
                  (a.initializeSendState = a.initialState = void 0),
                  (a.isSendFormInvalid = function (e) {
                    const t = re(e);
                    if (!t) return !0;
                    return t.status === F.INVALID;
                  }),
                  (a.isSendStateInitialized = function (e) {
                    return e[$].stage !== R.INACTIVE;
                  }),
                  (a.resetRecipientInput = function () {
                    return async (e, t) => {
                      const a = t(),
                        n = (0, m.getCurrentChainId)(a);
                      await e(Z("sendFlow - user cleared recipient input")),
                        await e(ae("")),
                        await e(te({ address: "", nickname: "" })),
                        await e((0, _.resetDomainResolution)()),
                        await e(X({ chainId: n }));
                    };
                  }),
                  (a.resetSendState = function () {
                    return async (e, t) => {
                      const a = t();
                      e(V.resetSendState()),
                        a[$].gasEstimatePollToken &&
                          (await (0, f.disconnectGasFeeEstimatePoller)(a[$].gasEstimatePollToken),
                          (0, f.removePollingTokenFromAppState)(a[$].gasEstimatePollToken));
                    };
                  }),
                  (a.sendAmountIsInError = function (e) {
                    var t;
                    return Boolean(null === (t = re(e).amount) || void 0 === t ? void 0 : t.error);
                  }),
                  (a.signTransaction = function () {
                    return async (e, t) => {
                      const a = t(),
                        { stage: n, eip1559support: s } = a[$],
                        r = (0, N.generateTransactionParams)(a[$]),
                        i = a[$].draftTransactions[a[$].currentTransactionUUID];
                      if (n === R.EDIT) {
                        var u;
                        const t = (0, m.getUnapprovedTransactions)(a),
                          n = (0, o.cloneDeep)(t[i.id]),
                          c = { data: r.data, from: r.from, to: r.to, value: r.value, gas: n.userEditedGasLimit ? n.txParams.gas : r.gas };
                        n.originalGasEstimate = c.gas;
                        const l = { ...n, txParams: Object.assign(n.txParams, s ? c : r) };
                        await e(Z("sendFlow - user clicked next and transaction should be updated in controller")),
                          await e(
                            (0, f.updateTransactionSendFlowHistory)(
                              i.id,
                              (null === (u = n.sendFlowHistory) || void 0 === u ? void 0 : u.length) || 0,
                              i.history
                            )
                          ),
                          await e((0, f.updateEditableParams)(i.id, l.txParams)),
                          await e((0, f.updateTransactionGasFees)(i.id, l.txParams));
                      } else {
                        let t =
                          i.recipient.type === d.RECIPIENT_TYPES.SMART_CONTRACT
                            ? c.TransactionType.contractInteraction
                            : c.TransactionType.simpleSend;
                        i.asset.type !== w.AssetType.native &&
                          (t =
                            i.asset.type === w.AssetType.NFT
                              ? c.TransactionType.tokenMethodTransferFrom
                              : c.TransactionType.tokenMethodTransfer),
                          await e(Z("sendFlow - user clicked next and transaction should be added to controller")),
                          e((0, f.addTransactionAndRouteToConfirmationPage)(r, { sendFlowHistory: i.history, type: t }));
                      }
                    };
                  }),
                  (a.startNewDraftTransaction = function (e) {
                    return async (t) => {
                      await t(V.clearPreviousDrafts()),
                        await t(V.addNewDraft({ ...U, history: ["sendFlow - User started new draft transaction"] })),
                        await t(ne({ type: e.type ?? w.AssetType.native, details: e.details, skipComputeEstimatedGasLimit: !0 })),
                        await t(H());
                    };
                  }),
                  (a.toggleSendMaxMode = function () {
                    return async (e, t) => {
                      t()[$].amountMode === L.MAX
                        ? (await e(V.updateAmountMode(L.INPUT)),
                          await e(V.updateSendAmount("0x0")),
                          await e(Z("sendFlow - user toggled max mode off")))
                        : (await e(V.updateAmountMode(L.MAX)),
                          await e(V.updateAmountToMax()),
                          await e(Z("sendFlow - user toggled max mode on"))),
                        await e(W());
                    };
                  }),
                  (a.updateGasLimit = void 0),
                  (a.updateGasPrice = function (e) {
                    return (t) => {
                      t(Z(`sendFlow - user set legacy gasPrice to ${e}`)),
                        t(V.updateGasFees({ gasPrice: e, transactionType: c.TransactionEnvelopeType.legacy, manuallyEdited: !0 }));
                    };
                  }),
                  (a.updateRecipient = te),
                  (a.updateRecipientUserInput = ae),
                  (a.updateSendAmount = function (e) {
                    return async (t, a) => {
                      const n = a(),
                        { ticker: s } = (0, y.getProviderConfig)(n),
                        o = n[$].draftTransactions[n[$].currentTransactionUUID];
                      let i = e;
                      if (o.asset.type === w.AssetType.token) {
                        var c, l, d;
                        const t = Math.pow(10, Number((null === (c = o.asset.details) || void 0 === c ? void 0 : c.decimals) || 0)),
                          a = new O.Numeric((0, r.addHexPrefix)(e), 16)
                            .toBase(10)
                            .applyConversionRate(null !== (l = o.asset.details) && void 0 !== l && l.symbol ? t : 1, !0)
                            .toString();
                        i = `${Number(a) ? a : ""} ${null === (d = o.asset.details) || void 0 === d ? void 0 : d.symbol}`;
                      } else {
                        i = `${(0, u.getValueFromWeiHex)({ value: e, toCurrency: C.EtherDenomination.ETH, numberOfDecimals: 8 })} ${
                          s || C.EtherDenomination.ETH
                        }`;
                      }
                      await t(Z(`sendFlow - user set amount to ${i}`)),
                        await t(V.updateSendAmount(e)),
                        n[$].amountMode === L.MAX && (await t(V.updateAmountMode(L.INPUT))),
                        await t(W());
                    };
                  }),
                  (a.updateSendAsset = ne),
                  (a.updateSendHexData = function (e) {
                    return async (t, a) => {
                      await t(Z(`sendFlow - user added custom hexData ${e}`)), await t(V.updateUserInputHexData(e));
                      const n = a();
                      n[$].draftTransactions[n[$].currentTransactionUUID].asset.type === w.AssetType.native && (await t(W()));
                    };
                  }),
                  (a.useContactListForRecipientSearch = function () {
                    return (e) => {
                      e(Z("sendFlow - user selected back to all on recipient screen")), e(Q(G.CONTACT_LIST));
                    };
                  }),
                  (a.useDefaultGas = a.useCustomGas = void 0),
                  (a.useMyAccountsForRecipientSearch = function () {
                    return (e) => {
                      e(Z("sendFlow - user selected transfer to my accounts on recipient screen")), e(Q(G.MY_ACCOUNTS));
                    };
                  });
                var n = e("@reduxjs/toolkit"),
                  s = x(e("bignumber.js")),
                  r = e("ethereumjs-util"),
                  o = e("lodash"),
                  i = e("uuid"),
                  c = e("@metamask/transaction-controller"),
                  u = e("../../../shared/modules/conversion.utils"),
                  l = e("../../../shared/constants/gas"),
                  d = e("../../pages/send/send.constants"),
                  p = e("../../pages/send/send.utils"),
                  m = e("../../selectors"),
                  f = e("../../store/actions"),
                  g = e("../gas/gas.duck"),
                  T = e("../../store/actionConstants"),
                  h = e("../../helpers/utils/token-util"),
                  v = e("../../helpers/utils/util"),
                  y = e("../metamask/metamask"),
                  _ = e("../domains"),
                  E = e("../../../shared/modules/hexstring-utils"),
                  S = e("../../helpers/utils/transactions.util"),
                  k = x(e("../../helpers/utils/optimism/fetchEstimatedL1Fee")),
                  w = e("../../../shared/constants/transaction"),
                  A = e("../../helpers/constants/error-keys"),
                  I = e("../../../shared/modules/string-utils"),
                  b = e("../../../shared/modules/transaction.utils"),
                  P = e("../../../shared/lib/metamask-controller-utils"),
                  M = e("../../../shared/lib/transactions-controller-utils"),
                  O = e("../../../shared/modules/Numeric"),
                  C = e("../../../shared/constants/common"),
                  N = e("./helpers");
                function x(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const R = (a.SEND_STAGES = { ADD_RECIPIENT: "ADD_RECIPIENT", DRAFT: "DRAFT", EDIT: "EDIT", INACTIVE: "INACTIVE" }),
                  F = (a.SEND_STATUSES = { INVALID: "INVALID", VALID: "VALID" }),
                  D = (a.GAS_INPUT_MODES = { BASIC: "BASIC", CUSTOM: "CUSTOM", INLINE: "INLINE" }),
                  L = (a.AMOUNT_MODES = { INPUT: "INPUT", MAX: "MAX" }),
                  G = (a.RECIPIENT_SEARCH_MODES = { CONTACT_LIST: "CONTACT_LIST", MY_ACCOUNTS: "MY_ACCOUNTS" }),
                  U = (a.draftTransactionInitialState = {
                    amount: { error: null, value: "0x0" },
                    asset: { balance: "0x0", details: null, error: null, type: w.AssetType.native },
                    fromAccount: null,
                    gas: {
                      error: null,
                      gasLimit: "0x0",
                      gasPrice: "0x0",
                      gasTotal: "0x0",
                      maxFeePerGas: "0x0",
                      maxPriorityFeePerGas: "0x0",
                      wasManuallyEdited: !1
                    },
                    history: [],
                    id: null,
                    recipient: { address: "", error: null, nickname: "", warning: null, type: "", recipientWarningAcknowledged: !1 },
                    status: F.VALID,
                    transactionType: c.TransactionEnvelopeType.legacy,
                    userInputHexData: null
                  }),
                  j = (a.initialState = {
                    amountMode: L.INPUT,
                    currentTransactionUUID: null,
                    draftTransactions: {},
                    eip1559support: !1,
                    gasEstimateIsLoading: !0,
                    gasEstimatePollToken: null,
                    gasIsSetInModal: !1,
                    gasPriceEstimate: "0x0",
                    gasLimitMinimum: l.GAS_LIMITS.SIMPLE,
                    gasTotalForLayer1: "0x0",
                    recipientMode: G.CONTACT_LIST,
                    recipientInput: "",
                    selectedAccount: { address: null, balance: "0x0" },
                    stage: R.INACTIVE
                  }),
                  $ = "send",
                  W = (a.computeEstimatedGasLimit = (0, n.createAsyncThunk)("send/computeEstimatedGasLimit", async (e, t) => {
                    var a;
                    const n = t.getState(),
                      { send: s, metamask: r } = n,
                      o = s.draftTransactions[s.currentTransactionUUID],
                      i = (0, m.getUnapprovedTransactions)(n),
                      c = (0, m.getIsMultiLayerFeeNetwork)(n),
                      u = i[o.id],
                      l = (0, m.getIsNonStandardEthChain)(n),
                      d = (0, m.getCurrentChainId)(n);
                    let p;
                    var f;
                    c &&
                      (p = await (0, k.default)(d, {
                        txParams: {
                          gasPrice: o.gas.gasPrice,
                          gas: o.gas.gasLimit,
                          to: null === (f = o.recipient.address) || void 0 === f ? void 0 : f.toLowerCase(),
                          value: s.amountMode === L.MAX ? s.selectedAccount.balance : o.amount.value,
                          from: s.selectedAccount.address,
                          data: o.userInputHexData,
                          type: "0x0"
                        }
                      }));
                    if (s.stage !== R.EDIT || null === (a = u.dappSuggestedGasFees) || void 0 === a || !a.gas || !u.userEditedGasLimit) {
                      var T;
                      const e = await (0, N.estimateGasLimitForSend)({
                        gasPrice: o.gas.gasPrice,
                        blockGasLimit: r.currentBlockGasLimit,
                        selectedAddress: r.selectedAddress,
                        sendToken: o.asset.details,
                        to: null === (T = o.recipient.address) || void 0 === T ? void 0 : T.toLowerCase(),
                        value: o.amount.value,
                        data: o.userInputHexData,
                        isNonStandardEthChain: l,
                        chainId: d,
                        gasLimit: o.gas.gasLimit
                      });
                      return await t.dispatch((0, g.setCustomGasLimit)(e)), { gasLimit: e, gasTotalForLayer1: p };
                    }
                    return null;
                  })),
                  H = (a.initializeSendState = (0, n.createAsyncThunk)(
                    "send/initializeSendState",
                    async ({ chainHasChanged: e = !1 } = {}, t) => {
                      const a = t.getState(),
                        n = (0, m.getIsNonStandardEthChain)(a),
                        s = (0, m.getCurrentChainId)(a);
                      let o = (0, m.checkNetworkAndAccountSupports1559)(a);
                      o === undefined && (o = await (0, f.getCurrentNetworkEIP1559Compatibility)());
                      const i = (0, m.getSelectedAccount)(a),
                        { send: c, metamask: u } = a,
                        d = c.draftTransactions[c.currentTransactionUUID];
                      if (!d) return t.rejectWithValue("draftTransaction not found, possibly not on send flow");
                      let p = c.stage === R.EDIT ? d.gas.gasPrice : "0x1",
                        T = null;
                      (T = await (0, f.getGasFeeEstimatesAndStartPolling)()), (0, f.addPollingTokenToAppState)(T);
                      const {
                        metamask: { gasFeeEstimates: h, gasEstimateType: v }
                      } = t.getState();
                      c.stage !== R.EDIT &&
                        (p =
                          v === l.GasEstimateTypes.legacy
                            ? (0, m.getGasPriceInHexWei)(h.medium)
                            : v === l.GasEstimateTypes.ethGasPrice
                            ? (0, N.getRoundedGasPrice)(h.gasPrice)
                            : v === l.GasEstimateTypes.feeMarket
                            ? (0, m.getGasPriceInHexWei)(h.medium.suggestedMaxFeePerGas)
                            : h.gasPrice
                            ? (0, N.getRoundedGasPrice)(h.gasPrice)
                            : "0x0");
                      let { gasLimit: _ } = d.gas;
                      if (v !== l.GasEstimateTypes.none && c.stage !== R.EDIT && d.recipient.address) {
                        var E;
                        _ =
                          d.asset.type === w.AssetType.token || d.asset.type === w.AssetType.NFT
                            ? l.GAS_LIMITS.BASE_TOKEN_ESTIMATE
                            : l.GAS_LIMITS.SIMPLE;
                        _ =
                          (await (0, N.estimateGasLimitForSend)({
                            gasPrice: p,
                            blockGasLimit: u.currentBlockGasLimit,
                            selectedAddress:
                              (null === (E = d.fromAccount) || void 0 === E ? void 0 : E.address) ?? c.selectedAccount.address,
                            sendToken: d.asset.details,
                            to: d.recipient.address.toLowerCase(),
                            value: d.amount.value,
                            data: d.userInputHexData,
                            isNonStandardEthChain: n,
                            chainId: s
                          })) || _;
                      }
                      await t.dispatch((0, g.setCustomGasLimit)(_));
                      return t.getState().send.currentTransactionUUID !== c.currentTransactionUUID
                        ? t.rejectWithValue(
                            "draftTransaction changed during initialization.\n        A new initializeSendState action must be dispatched."
                          )
                        : {
                            account: i,
                            chainId: (0, m.getCurrentChainId)(a),
                            tokens: (0, y.getTokens)(a),
                            chainHasChanged: e,
                            gasFeeEstimates: h,
                            gasEstimateType: v,
                            gasLimit: _,
                            gasTotal: (0, r.addHexPrefix)((0, M.calcGasTotal)(_, p)),
                            gasEstimatePollToken: T,
                            eip1559support: o,
                            useTokenDetection: (0, m.getUseTokenDetection)(a),
                            tokenAddressList: Object.keys((0, m.getTokenList)(a))
                          };
                    }
                  )),
                  B = (0, n.createSlice)({
                    name: $,
                    initialState: j,
                    reducers: {
                      addNewDraft: (e, t) => {
                        (e.currentTransactionUUID = (0, i.v4)()),
                          (e.draftTransactions[e.currentTransactionUUID] = t.payload),
                          t.payload.id ? (e.stage = R.EDIT) : (e.stage = R.ADD_RECIPIENT);
                      },
                      addHistoryEntry: (e, t) => {
                        const a = e.draftTransactions[e.currentTransactionUUID];
                        a && a.history.push({ entry: t.payload, timestamp: Date.now() });
                      },
                      calculateGasTotal: (e) => {
                        const t = e.draftTransactions[e.currentTransactionUUID];
                        t.transactionType === c.TransactionEnvelopeType.feeMarket
                          ? (t.gas.gasTotal = (0, r.addHexPrefix)((0, M.calcGasTotal)(t.gas.gasLimit, t.gas.maxFeePerGas)))
                          : (t.gas.gasTotal = (0, r.addHexPrefix)((0, M.calcGasTotal)(t.gas.gasLimit, t.gas.gasPrice))),
                          e.amountMode === L.MAX && t.asset.type === w.AssetType.native && B.caseReducers.updateAmountToMax(e),
                          B.caseReducers.validateAmountField(e),
                          B.caseReducers.validateGasField(e),
                          B.caseReducers.validateSendState(e);
                      },
                      clearPreviousDrafts: (e) => {
                        (e.currentTransactionUUID = null), (e.draftTransactions = {});
                      },
                      resetSendState: () => j,
                      updateAmountMode: (e, t) => {
                        Object.values(L).includes(t.payload) && (e.amountMode = t.payload);
                      },
                      updateAmountToMax: (e) => {
                        const t = e.draftTransactions[e.currentTransactionUUID];
                        let a = "0x0";
                        if (t.asset.type === w.AssetType.token) {
                          var n;
                          const e = (null === (n = t.asset.details) || void 0 === n ? void 0 : n.decimals) ?? 0,
                            s = Math.pow(10, Number(e));
                          a = new O.Numeric(t.asset.balance, 16).times(s, 10).toString();
                        } else {
                          const n = new O.Numeric(t.gas.gasTotal || "0x0", 16).add(new O.Numeric(e.gasTotalForLayer1 || "0x0", 16));
                          a = new O.Numeric(t.asset.balance, 16).minus(n).toString();
                        }
                        B.caseReducers.updateSendAmount(e, { payload: a });
                      },
                      updateAsset: (e, t) => {
                        const { asset: a, initialAssetSet: n } = t.payload,
                          s = e.draftTransactions[e.currentTransactionUUID];
                        (s.asset.type = a.type),
                          (s.asset.balance = a.balance),
                          (s.asset.error = a.error),
                          s.asset.type === w.AssetType.token || s.asset.type === w.AssetType.NFT
                            ? (s.asset.details = a.details)
                            : ((s.asset.details = null), s.recipient.error === d.CONTRACT_ADDRESS_ERROR && (s.recipient.error = null)),
                          e.amountMode === L.MAX
                            ? B.caseReducers.updateAmountToMax(e)
                            : !1 === n &&
                              (B.caseReducers.updateSendAmount(e, { payload: "0x0" }),
                              B.caseReducers.updateUserInputHexData(e, { payload: "" })),
                          B.caseReducers.validateSendState(e);
                      },
                      updateGasFeeEstimates: (e, t) => {
                        const { gasFeeEstimates: a, gasEstimateType: n } = t.payload;
                        let s = "0x0";
                        switch (n) {
                          case l.GasEstimateTypes.feeMarket:
                            B.caseReducers.updateGasFees(e, {
                              payload: {
                                transactionType: c.TransactionEnvelopeType.feeMarket,
                                maxFeePerGas: (0, m.getGasPriceInHexWei)(a.medium.suggestedMaxFeePerGas),
                                maxPriorityFeePerGas: (0, m.getGasPriceInHexWei)(a.medium.suggestedMaxPriorityFeePerGas)
                              }
                            });
                            break;
                          case l.GasEstimateTypes.legacy:
                            (s = (0, N.getRoundedGasPrice)(a.medium)),
                              B.caseReducers.updateGasFees(e, {
                                payload: { gasPrice: s, type: c.TransactionEnvelopeType.legacy, isAutomaticUpdate: !0 }
                              });
                            break;
                          case l.GasEstimateTypes.ethGasPrice:
                            (s = (0, N.getRoundedGasPrice)(a.gasPrice)),
                              B.caseReducers.updateGasFees(e, {
                                payload: {
                                  gasPrice: (0, N.getRoundedGasPrice)(a.gasPrice),
                                  type: c.TransactionEnvelopeType.legacy,
                                  isAutomaticUpdate: !0
                                }
                              });
                          case l.GasEstimateTypes.none:
                        }
                        e.gasPriceEstimate = (0, r.addHexPrefix)(s);
                      },
                      updateGasFees: (e, t) => {
                        const a = e.draftTransactions[e.currentTransactionUUID];
                        a &&
                          (t.payload.transactionType === c.TransactionEnvelopeType.feeMarket
                            ? ((a.gas.maxFeePerGas = (0, r.addHexPrefix)(t.payload.maxFeePerGas)),
                              (a.gas.maxPriorityFeePerGas = (0, r.addHexPrefix)(t.payload.maxPriorityFeePerGas)),
                              (a.transactionType = c.TransactionEnvelopeType.feeMarket))
                            : (t.payload.manuallyEdited && (a.gas.wasManuallyEdited = !0),
                              (a.gas.wasManuallyEdited && !t.payload.manuallyEdited) ||
                                (a.gas.gasPrice = (0, r.addHexPrefix)(t.payload.gasPrice)),
                              (a.transactionType = c.TransactionEnvelopeType.legacy)),
                          B.caseReducers.calculateGasTotal(e));
                      },
                      updateGasLimit: (e, t) => {
                        const a = e.draftTransactions[e.currentTransactionUUID];
                        a && ((a.gas.gasLimit = (0, r.addHexPrefix)(t.payload)), B.caseReducers.calculateGasTotal(e));
                      },
                      updateLayer1Fees: (e, t) => {
                        const a = e.draftTransactions[e.currentTransactionUUID];
                        (e.gasTotalForLayer1 = t.payload),
                          e.amountMode === L.MAX && a.asset.type === w.AssetType.native && B.caseReducers.updateAmountToMax(e);
                      },
                      updateRecipient: (e, t) => {
                        const a = e.draftTransactions[e.currentTransactionUUID];
                        (a.recipient.error = null),
                          (e.recipientInput = ""),
                          (a.recipient.address = t.payload.address ?? ""),
                          (a.recipient.nickname = t.payload.nickname ?? ""),
                          "" === a.recipient.address
                            ? (e.stage = R.ADD_RECIPIENT)
                            : ((e.stage = null === a.id ? R.DRAFT : R.EDIT), (e.recipientMode = G.CONTACT_LIST)),
                          B.caseReducers.validateSendState(e);
                      },
                      updateRecipientSearchMode: (e, t) => {
                        (e.recipientInput = ""), (e.recipientMode = t.payload);
                      },
                      updateRecipientWarning: (e, t) => {
                        e.draftTransactions[e.currentTransactionUUID].recipient.warning = t.payload;
                      },
                      updateRecipientType: (e, t) => {
                        e.draftTransactions[e.currentTransactionUUID].recipient.type = t.payload;
                      },
                      updateDraftTransactionStatus: (e, t) => {
                        e.draftTransactions[e.currentTransactionUUID].status = t.payload;
                      },
                      acknowledgeRecipientWarning: (e) => {
                        (e.draftTransactions[e.currentTransactionUUID].recipient.recipientWarningAcknowledged = !0),
                          B.caseReducers.validateSendState(e);
                      },
                      updateRecipientUserInput: (e, t) => {
                        e.recipientInput = t.payload;
                      },
                      updateSendAmount: (e, t) => {
                        const a = e.draftTransactions[e.currentTransactionUUID];
                        (a.amount.value = (0, r.addHexPrefix)(t.payload)),
                          B.caseReducers.validateAmountField(e),
                          a.asset.type === w.AssetType.native && B.caseReducers.validateGasField(e),
                          B.caseReducers.validateSendState(e);
                      },
                      updateUserInputHexData: (e, t) => {
                        e.draftTransactions[e.currentTransactionUUID].userInputHexData = t.payload;
                      },
                      useCustomGas: (e) => {
                        e.gasIsSetInModal = !0;
                      },
                      useDefaultGas: (e) => {
                        e.gasIsSetInModal = !1;
                      },
                      validateAmountField: (e) => {
                        const t = e.draftTransactions[e.currentTransactionUUID],
                          a = new O.Numeric(t.amount.value, 16);
                        switch (!0) {
                          case t.asset.type === w.AssetType.native &&
                            !(0, p.isBalanceSufficient)({
                              amount: t.amount.value,
                              balance: t.asset.balance,
                              gasTotal: t.gas.gasTotal ?? "0x0"
                            }):
                            t.amount.error = d.INSUFFICIENT_FUNDS_FOR_GAS_ERROR;
                            break;
                          case t.asset.type === w.AssetType.token &&
                            !(0, p.isTokenBalanceSufficient)({
                              tokenBalance: t.asset.balance ?? "0x0",
                              amount: t.amount.value,
                              decimals: t.asset.details.decimals
                            }):
                            t.amount.error = d.INSUFFICIENT_TOKENS_ERROR;
                            break;
                          case a.isNegative():
                            t.amount.error = d.NEGATIVE_ETH_ERROR;
                            break;
                          default:
                            t.amount.error = null;
                        }
                      },
                      validateGasField: (e) => {
                        var t;
                        const a = e.draftTransactions[e.currentTransactionUUID],
                          n = !(0, p.isBalanceSufficient)({
                            amount: a.asset.type === w.AssetType.native ? a.amount.value : "0x0",
                            balance: (null === (t = a.fromAccount) || void 0 === t ? void 0 : t.balance) ?? e.selectedAccount.balance,
                            gasTotal: a.gas.gasTotal ?? "0x0"
                          });
                        a.gas.error = n ? d.INSUFFICIENT_FUNDS_ERROR : null;
                      },
                      validateRecipientUserInput: (e, t) => {
                        const a = e.draftTransactions[e.currentTransactionUUID];
                        if (a)
                          if (e.recipientMode === G.MY_ACCOUNTS || "" === e.recipientInput || null === e.recipientInput)
                            (a.recipient.error = null), (a.recipient.warning = null);
                          else {
                            var n;
                            const { chainId: s, tokens: r, tokenAddressList: o, isProbablyAnAssetContract: i } = t.payload;
                            (0, E.isBurnAddress)(e.recipientInput) ||
                            (!(0, E.isValidHexAddress)(e.recipientInput, { mixedCaseUseChecksum: !0 }) &&
                              !(0, v.isValidDomainName)(e.recipientInput))
                              ? (a.recipient.error = (0, v.isDefaultMetaMaskChain)(s)
                                  ? d.INVALID_RECIPIENT_ADDRESS_ERROR
                                  : d.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR)
                              : (0, v.isOriginContractAddress)(
                                  e.recipientInput,
                                  null === (n = a.asset) || void 0 === n || null === (n = n.details) || void 0 === n ? void 0 : n.address
                                )
                              ? (a.recipient.error = d.CONTRACT_ADDRESS_ERROR)
                              : (a.recipient.error = null),
                              ((0, E.isValidHexAddress)(e.recipientInput) &&
                                (o.find((t) => (0, I.isEqualCaseInsensitive)(t, e.recipientInput)) ||
                                  (0, v.checkExistingAddresses)(e.recipientInput, r))) ||
                              i
                                ? (a.recipient.warning = d.KNOWN_RECIPIENT_ADDRESS_WARNING)
                                : (a.recipient.warning = null);
                          }
                        B.caseReducers.validateSendState(e);
                      },
                      validateSendState: (e) => {
                        const t = e.draftTransactions[e.currentTransactionUUID];
                        if ((B.caseReducers.addHistoryEntry(e, { payload: "Begin validating send state" }), t))
                          switch (!0) {
                            case Boolean(t.amount.error):
                              B.caseReducers.addHistoryEntry(e, { payload: `Amount is in error ${t.amount.error}` }),
                                (t.status = F.INVALID);
                              break;
                            case Boolean(t.gas.error):
                              B.caseReducers.addHistoryEntry(e, { payload: `Gas is in error ${t.gas.error}` }), (t.status = F.INVALID);
                              break;
                            case Boolean(t.asset.error):
                              B.caseReducers.addHistoryEntry(e, { payload: `Asset is in error ${t.asset.error}` }), (t.status = F.INVALID);
                              break;
                            case t.asset.type === w.AssetType.token && null === t.asset.details:
                              B.caseReducers.addHistoryEntry(e, { payload: "Asset is TOKEN and token details is null" }),
                                (t.status = F.INVALID);
                              break;
                            case e.stage === R.ADD_RECIPIENT:
                              B.caseReducers.addHistoryEntry(e, { payload: "Form is invalid because stage is ADD_RECIPIENT" }),
                                (t.status = F.INVALID);
                              break;
                            case e.stage === R.INACTIVE:
                              B.caseReducers.addHistoryEntry(e, { payload: "Form is invalid because stage is INACTIVE" }),
                                (t.status = F.INVALID);
                              break;
                            case e.gasEstimateIsLoading:
                              B.caseReducers.addHistoryEntry(e, { payload: "Form is invalid because gasEstimateIsLoading" }),
                                (t.status = F.INVALID);
                              break;
                            case new s.default(t.gas.gasLimit, 16).lessThan(new s.default(e.gasLimitMinimum)):
                              B.caseReducers.addHistoryEntry(e, {
                                payload: `Form is invalid because ${t.gas.gasLimit} is lessThan ${e.gasLimitMinimum}`
                              }),
                                (t.status = F.INVALID);
                              break;
                            case "loading" === t.recipient.warning:
                              B.caseReducers.addHistoryEntry(e, { payload: "Form is invalid because recipient warning is loading" }),
                                (t.status = F.INVALID);
                              break;
                            case t.recipient.warning === d.KNOWN_RECIPIENT_ADDRESS_WARNING &&
                              !1 === t.recipient.recipientWarningAcknowledged:
                              B.caseReducers.addHistoryEntry(e, { payload: "Form is invalid because recipient warning not acknolwedged" }),
                                (t.status = F.INVALID);
                              break;
                            default:
                              B.caseReducers.addHistoryEntry(e, { payload: "Form is valid" }), (t.status = F.VALID);
                          }
                      }
                    },
                    extraReducers: (e) => {
                      e.addCase(T.ACCOUNT_CHANGED, (e, t) => {
                        if (e.stage === R.EDIT && t.payload.account) {
                          const a = e.draftTransactions[e.currentTransactionUUID];
                          a &&
                            a.fromAccount &&
                            a.fromAccount.address === t.payload.account.address &&
                            ((a.fromAccount.balance = t.payload.account.balance),
                            a.asset.type === w.AssetType.native && (a.asset.balance = t.payload.account.balance),
                            B.caseReducers.validateAmountField(e),
                            B.caseReducers.validateGasField(e),
                            B.caseReducers.validateSendState(e));
                        }
                      })
                        .addCase(T.ADDRESS_BOOK_UPDATED, (e, t) => {
                          var a;
                          const { addressBook: n } = t.payload,
                            s = e.draftTransactions[e.currentTransactionUUID];
                          s &&
                            null !== (a = n[s.recipient.address]) &&
                            void 0 !== a &&
                            a.name &&
                            (s.recipient.nickname = n[s.recipient.address].name);
                        })
                        .addCase(W.pending, (e) => {
                          e.gasEstimateIsLoading = !0;
                        })
                        .addCase(W.fulfilled, (e, t) => {
                          var a, n;
                          (e.gasEstimateIsLoading = !1),
                            null !== (a = t.payload) &&
                              void 0 !== a &&
                              a.gasLimit &&
                              B.caseReducers.updateGasLimit(e, { payload: t.payload.gasLimit }),
                            null !== (n = t.payload) &&
                              void 0 !== n &&
                              n.gasTotalForLayer1 &&
                              B.caseReducers.updateLayer1Fees(e, { payload: t.payload.gasTotalForLayer1 });
                        })
                        .addCase(W.rejected, (e) => {
                          e.gasEstimateIsLoading = !1;
                        })
                        .addCase(T.GAS_FEE_ESTIMATES_UPDATED, (e, t) => {
                          B.caseReducers.updateGasFeeEstimates(e, { payload: t.payload });
                        })
                        .addCase(H.pending, (e) => {
                          e.gasEstimateIsLoading = !0;
                        })
                        .addCase(H.fulfilled, (e, t) => {
                          (e.eip1559support = t.payload.eip1559support),
                            (e.selectedAccount.address = t.payload.account.address),
                            (e.selectedAccount.balance = t.payload.account.balance);
                          const a = e.draftTransactions[e.currentTransactionUUID];
                          var n;
                          a &&
                            ((a.gas.gasLimit = t.payload.gasLimit),
                            (a.gas.gasTotal = t.payload.gasTotal),
                            t.payload.chainHasChanged &&
                              ((a.asset.type = w.AssetType.native),
                              (a.asset.balance =
                                (null === (n = a.fromAccount) || void 0 === n ? void 0 : n.balance) ?? e.selectedAccount.balance),
                              (a.asset.details = null)));
                          B.caseReducers.updateGasFeeEstimates(e, {
                            payload: { gasFeeEstimates: t.payload.gasFeeEstimates, gasEstimateType: t.payload.gasEstimateType }
                          }),
                            (e.gasEstimatePollToken = t.payload.gasEstimatePollToken),
                            t.payload.gasEstimatePollToken && (e.gasEstimateIsLoading = !1),
                            e.stage !== R.INACTIVE &&
                              B.caseReducers.validateRecipientUserInput(e, {
                                payload: {
                                  chainId: t.payload.chainId,
                                  tokens: t.payload.tokens,
                                  useTokenDetection: t.payload.useTokenDetection,
                                  tokenAddressList: t.payload.tokenAddressList
                                }
                              }),
                            e.amountMode === L.MAX && B.caseReducers.updateAmountToMax(e),
                            B.caseReducers.validateAmountField(e),
                            B.caseReducers.validateGasField(e),
                            B.caseReducers.validateSendState(e);
                        })
                        .addCase(T.SELECTED_ACCOUNT_CHANGED, (e, t) => {
                          if (e.stage !== R.EDIT && t.payload.account) {
                            (e.selectedAccount.balance = t.payload.account.balance),
                              (e.selectedAccount.address = t.payload.account.address);
                            const a = e.draftTransactions[e.currentTransactionUUID];
                            a &&
                              ((null == a ? void 0 : a.asset.type) === w.AssetType.native && (a.asset.balance = t.payload.account.balance),
                              (null == a ? void 0 : a.asset.type) === w.AssetType.token &&
                                ((a.asset.type = U.asset.type),
                                (a.asset.error = U.asset.error),
                                (a.asset.details = U.asset.details),
                                (a.asset.balance = t.payload.account.balance)),
                              B.caseReducers.validateAmountField(e),
                              B.caseReducers.validateGasField(e),
                              B.caseReducers.validateSendState(e));
                          }
                        })
                        .addCase(T.QR_CODE_DETECTED, (e, t) => {
                          const a = t.value,
                            n = e.draftTransactions[e.currentTransactionUUID];
                          if (a && n && "address" === a.type) {
                            const t = a.values.address.toLowerCase();
                            (0, E.isValidHexAddress)(t, { allowNonPrefixed: !1 })
                              ? n.recipient.address !== t && B.caseReducers.updateRecipient(e, { payload: { address: t } })
                              : (n.recipient.error = d.INVALID_RECIPIENT_ADDRESS_ERROR);
                          }
                        });
                    }
                  }),
                  { actions: V, reducer: K } = B;
                a.default = K;
                const {
                  useDefaultGas: q,
                  useCustomGas: Y,
                  updateGasLimit: z,
                  validateRecipientUserInput: X,
                  updateRecipientSearchMode: Q,
                  addHistoryEntry: Z,
                  acknowledgeRecipientWarning: J
                } = V;
                (a.acknowledgeRecipientWarning = J),
                  (a.addHistoryEntry = Z),
                  (a.updateGasLimit = z),
                  (a.useCustomGas = Y),
                  (a.useDefaultGas = q);
                const ee = (0, o.debounce)((e, t, a) => {
                  e(Z(`sendFlow - user typed ${t.userInput} into recipient input field`)), e(X(t)), a();
                }, 300);
                function te({ address: e, nickname: t }) {
                  return async (a, n) => {
                    const s = n(),
                      r = (0, m.getAddressBookEntryOrAccountName)(s, e) ?? "";
                    await a(V.updateRecipient({ address: e, nickname: t || r })), await a(W());
                  };
                }
                function ae(e) {
                  return async (t, a) => {
                    var n;
                    t(V.updateRecipientWarning("loading")),
                      t(V.updateDraftTransactionStatus(F.INVALID)),
                      await t(V.updateRecipientUserInput(e));
                    const s = a(),
                      r =
                        (null === (n = s[$].draftTransactions[s[$].currentTransactionUUID].fromAccount) || void 0 === n
                          ? void 0
                          : n.address) ??
                        s[$].selectedAccount.address ??
                        (0, m.getSelectedAddress)(s),
                      o = (0, m.getCurrentChainId)(s),
                      i = (0, y.getTokens)(s),
                      c = (0, m.getUseTokenDetection)(s),
                      u = (0, m.getTokenList)(s),
                      l = Object.keys(u),
                      p = (0, E.isValidHexAddress)(e);
                    let g = !1;
                    if (p) {
                      if (await (0, S.isSmartContractAddress)(e)) {
                        t(V.updateRecipientType(d.RECIPIENT_TYPES.SMART_CONTRACT));
                        const { symbol: a, decimals: n } = (0, h.getTokenMetadata)(e, u) || {};
                        if (((g = a && n !== undefined), !g))
                          try {
                            const { standard: t } = await (0, f.getTokenStandardAndDetails)(e, r);
                            g = Boolean(t);
                          } catch (e) {
                            console.log(e);
                          }
                      }
                    }
                    return new Promise((a) => {
                      ee(
                        t,
                        { userInput: e, chainId: o, tokens: i, useTokenDetection: c, tokenAddressList: l, isProbablyAnAssetContract: g },
                        a
                      );
                    });
                  };
                }
                function ne({ type: e, details: t, skipComputeEstimatedGasLimit: a }, { initialAssetSet: n = !1 } = {}) {
                  return async (s, o) => {
                    var i;
                    const u = o(),
                      { ticker: l } = (0, y.getProviderConfig)(u),
                      d = u[$].draftTransactions[u[$].currentTransactionUUID],
                      p =
                        (null === (i = d.fromAccount) || void 0 === i ? void 0 : i.address) ??
                        u[$].selectedAccount.address ??
                        (0, m.getSelectedAddress)(u),
                      g = (0, m.getTargetAccount)(u, p);
                    if (e === w.AssetType.native) {
                      const t = (0, m.getUnapprovedTransactions)(u),
                        a = null == t ? void 0 : t[d.id];
                      await s(Z(`sendFlow - user set asset of type ${w.AssetType.native} with symbol ${l ?? C.EtherDenomination.ETH}`)),
                        await s(V.updateAsset({ asset: { type: e, details: null, balance: g.balance, error: null }, initialAssetSet: n })),
                        ((null == a ? void 0 : a.type) !== c.TransactionType.tokenMethodTransferFrom &&
                          (null == a ? void 0 : a.type) !== c.TransactionType.tokenMethodTransfer &&
                          (null == a ? void 0 : a.type) !== c.TransactionType.tokenMethodSafeTransferFrom) ||
                          (await s(V.updateUserInputHexData("")));
                    } else {
                      await s((0, f.showLoadingIndication)());
                      const a = { ...t, ...(await (0, f.getTokenStandardAndDetails)(t.address, p, t.tokenId)) };
                      await s((0, f.hideLoadingIndication)());
                      const o = { type: e, details: a, error: null };
                      if (a.standard === w.TokenStandard.ERC20)
                        (o.balance = (0, r.addHexPrefix)((0, M.calcTokenAmount)(a.balance, a.decimals).toString(16))),
                          await s(Z(`sendFlow - user set asset to ERC20 token with symbol ${a.symbol} and address ${a.address}`));
                      else {
                        if (a.standard === w.TokenStandard.ERC1155 && e === w.AssetType.NFT)
                          throw new Error("Sends of ERC1155 tokens are not currently supported");
                        if (a.standard === w.TokenStandard.ERC1155 || a.standard === w.TokenStandard.ERC721) {
                          if (e === w.AssetType.token)
                            throw (
                              (s((0, f.showModal)({ name: "CONVERT_TOKEN_TO_NFT", tokenAddress: a.address })),
                              (o.error = A.INVALID_ASSET_TYPE),
                              new Error(A.INVALID_ASSET_TYPE))
                            );
                          {
                            let e = !0;
                            try {
                              e = await (0, f.isNftOwner)(p, a.address, a.tokenId);
                            } catch (e) {
                              e.message.includes("Unable to verify ownership.") || s((0, f.displayWarning)(e.message));
                            }
                            if (!e)
                              throw new Error("Send slice initialized as NFT send with an NFT not currently owned by the select account");
                            (o.error = null),
                              (o.balance = "0x1"),
                              await s(Z(`sendFlow - user set asset to NFT with tokenId ${a.tokenId} and address ${a.address}`));
                          }
                        }
                      }
                      await s(V.updateAsset({ asset: o, initialAssetSet: n }));
                    }
                    !1 !== n || a || (await s(W()));
                  };
                }
                function se(e) {
                  return e[$].currentTransactionUUID;
                }
                function re(e) {
                  return e[$].draftTransactions[se(e)] ?? {};
                }
                function oe(e) {
                  return re(e).asset;
                }
                function ie(e) {
                  const t = re(e);
                  if (!t.recipient) return { address: "", nickname: "", error: null, warning: null };
                  const a = (0, E.toChecksumHexAddress)(t.recipient.address);
                  return e.metamask.ensResolutionsByAddress
                    ? { ...t.recipient, nickname: t.recipient.nickname || (0, m.getEnsResolutionByAddress)(e, a) }
                    : t.recipient;
                }
              };
            };
      },
      { package: "$root$", file: "ui/ducks/send/send.js" }
    ],
    [
      4767,
      {
        "../../../shared/constants/app": 3953,
        "../../../shared/constants/common": 3955,
        "../../../shared/constants/metametrics": 3962,
        "../../../shared/constants/swaps": 3970,
        "../../../shared/constants/transaction": 3974,
        "../../../shared/lib/transactions-controller-utils": 3982,
        "../../../shared/modules/Numeric": 3984,
        "../../../shared/modules/conversion.utils": 3988,
        "../../helpers/constants/routes": 4776,
        "../../pages/swaps/swaps.util": 5179,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        "../metamask/metamask": 4763,
        "@metamask/transaction-controller": 1835,
        "@reduxjs/toolkit": 1944,
        "@sentry/browser": 1982,
        "bignumber.js": 2283,
        loglevel: 3322
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.GAS_PRICES_LOADING_STATES = a.FALLBACK_GAS_MULTIPLIER = void 0),
                  (a.cancelSwapsSmartTransaction = function (e) {
                    return async (t, a) => {
                      try {
                        await t((0, c.cancelSmartTransaction)(e));
                      } catch (e) {
                        const {
                          swaps: { isFeatureFlagLoaded: n }
                        } = a();
                        if (e.message.startsWith("Fetch error:") && n) {
                          const a = (0, l.parseSmartTransactionsError)(e.message);
                          t(ke(null == a ? void 0 : a.error));
                        }
                      }
                    };
                  }),
                  (a.fetchAndSetSwapsGasPriceInfo = a.default = a.clearSwapsState = void 0),
                  (a.fetchMetaSwapsGasPriceEstimates = be),
                  (a.fetchSwapsLivenessAndFeatureFlags = a.fetchQuotesAndSetQuoteState = void 0),
                  (a.fetchSwapsSmartTransactionFees = Pe),
                  (a.setTransactionSettingsOpened =
                    a.setTopAssets =
                    a.setSwapsFromToken =
                    a.setSwapToToken =
                    a.setSwapQuotesFetchStartTime =
                    a.setReviewSwapClickedTimestamp =
                    a.setMaxSlippage =
                    a.setLatestAddedTokenTo =
                    a.setIsFeatureFlagLoaded =
                    a.setFromTokenInputValue =
                    a.setFromTokenError =
                    a.setFetchingQuotes =
                    a.setBalanceError =
                    a.setAggregatorMetadata =
                    a.prepareToLeaveSwaps =
                    a.prepareForRetryGetQuotes =
                    a.navigateBackToBuildQuote =
                    a.getUsedSwapsGasPrice =
                    a.getUsedQuote =
                    a.getTransactionSettingsOpened =
                    a.getTradeTxId =
                    a.getTopQuote =
                    a.getTopAssets =
                    a.getToToken =
                    a.getSwapsWelcomeMessageSeenStatus =
                    a.getSwapsUserFeeLevel =
                    a.getSwapsTokens =
                    a.getSwapsSTXLoading =
                    a.getSwapsQuoteRefreshTime =
                    a.getSwapsQuotePrefetchingRefreshTime =
                    a.getSwapsNetworkConfig =
                    a.getSwapsFeatureIsLive =
                    a.getSwapsFallbackGasPrice =
                    a.getSwapsErrorKey =
                    a.getSwapsCustomizationModalPrice =
                    a.getSwapsCustomizationModalLimit =
                    a.getSwapRedesignEnabled =
                    a.getSwapGasPriceEstimateData =
                    a.getSmartTransactionsOptInStatus =
                    a.getSmartTransactionsErrorMessageDismissed =
                    a.getSmartTransactionsError =
                    a.getSmartTransactionsEnabled =
                    a.getSmartTransactionFees =
                    a.getSmartTransactionEstimatedGas =
                    a.getShowQuoteLoadingScreen =
                    a.getSelectedQuote =
                    a.getReviewSwapClickedTimestamp =
                    a.getQuotesLastFetched =
                    a.getQuotesFetchStartTime =
                    a.getQuotes =
                    a.getPendingSmartTransactions =
                    a.getMaxSlippage =
                    a.getLatestAddedTokenTo =
                    a.getIsFeatureFlagLoaded =
                    a.getFromTokenInputValue =
                    a.getFromTokenError =
                    a.getFromToken =
                    a.getFetchingQuotes =
                    a.getFetchParams =
                    a.getDestinationTokenInfo =
                    a.getCustomSwapsGasPrice =
                    a.getCustomSwapsGas =
                    a.getCustomMaxPriorityFeePerGas =
                    a.getCustomMaxFeePerGas =
                    a.getCurrentSmartTransactionsError =
                    a.getCurrentSmartTransactionsEnabled =
                    a.getCurrentSmartTransactions =
                    a.getBalanceError =
                    a.getBackgroundSwapRouteState =
                    a.getApproveTxParams =
                    a.getApproveTxId =
                    a.getAggregatorMetadata =
                      void 0),
                  (a.shouldShowCustomPriceTooLowWarning = function (e) {
                    const { average: t } = x(e),
                      a = N(e);
                    if (!a || t === undefined) return !1;
                    return new _.Numeric(a, 16, y.EtherDenomination.WEI).toDenomination(y.EtherDenomination.GWEI).greaterThan(t, 10);
                  }),
                  (a.swapsQuoteSelected =
                    a.swapGasPriceEstimateIsLoading =
                    a.swapGasEstimateLoadingHasFailed =
                    a.swapCustomGasModalPriceEdited =
                    a.swapCustomGasModalLimitEdited =
                    a.swapCustomGasModalClosed =
                    a.signAndSendTransactions =
                    a.signAndSendSwapsSmartTransaction =
                      void 0);
                var n = e("@reduxjs/toolkit"),
                  s = E(e("bignumber.js")),
                  r = E(e("loglevel")),
                  o = e("@sentry/browser"),
                  i = e("@metamask/transaction-controller"),
                  c = e("../../store/actions"),
                  u = e("../../helpers/constants/routes"),
                  l = e("../../pages/swaps/swaps.util"),
                  d = e("../../../shared/modules/conversion.utils"),
                  p = e("../../selectors"),
                  m = e("../../../shared/constants/metametrics"),
                  f = e("../../../shared/constants/swaps"),
                  g = e("../../../shared/constants/transaction"),
                  T = e("../metamask/metamask"),
                  h = e("../../../shared/constants/app"),
                  v = e("../../../shared/lib/transactions-controller-utils"),
                  y = e("../../../shared/constants/common"),
                  _ = e("../../../shared/modules/Numeric");
                function E(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const S = (a.GAS_PRICES_LOADING_STATES = {
                    INITIAL: "INITIAL",
                    LOADING: "LOADING",
                    FAILED: "FAILED",
                    COMPLETED: "COMPLETED"
                  }),
                  k = (a.FALLBACK_GAS_MULTIPLIER = 1.5),
                  w = {
                    aggregatorMetadata: null,
                    approveTxId: null,
                    tradeTxId: null,
                    balanceError: !1,
                    fetchingQuotes: !1,
                    fromToken: null,
                    fromTokenInputValue: "",
                    fromTokenError: null,
                    isFeatureFlagLoaded: !1,
                    maxSlippage: f.Slippage.default,
                    quotesFetchStartTime: null,
                    reviewSwapClickedTimestamp: null,
                    topAssets: {},
                    toToken: null,
                    customGas: { price: null, limit: null, loading: S.INITIAL, priceEstimates: {}, fallBackPrice: null },
                    currentSmartTransactionsError: "",
                    swapsSTXLoading: !1,
                    transactionSettingsOpened: !1,
                    latestAddedTokenTo: ""
                  },
                  A = (0, n.createSlice)({
                    name: "swaps",
                    initialState: w,
                    reducers: {
                      clearSwapsState: () => w,
                      navigatedBackToBuildQuote: (e) => {
                        (e.approveTxId = null),
                          (e.tradeTxId = null),
                          (e.balanceError = !1),
                          (e.fetchingQuotes = !1),
                          (e.customGas.limit = null),
                          (e.customGas.price = null);
                      },
                      retriedGetQuotes: (e) => {
                        (e.approveTxId = null), (e.balanceError = !1), (e.fetchingQuotes = !1);
                      },
                      setAggregatorMetadata: (e, t) => {
                        e.aggregatorMetadata = t.payload;
                      },
                      setBalanceError: (e, t) => {
                        e.balanceError = t.payload;
                      },
                      setFetchingQuotes: (e, t) => {
                        e.fetchingQuotes = t.payload;
                      },
                      setLatestAddedTokenTo: (e, t) => {
                        e.latestAddedTokenTo = t.payload;
                      },
                      setFromToken: (e, t) => {
                        e.fromToken = t.payload;
                      },
                      setFromTokenInputValue: (e, t) => {
                        e.fromTokenInputValue = t.payload;
                      },
                      setFromTokenError: (e, t) => {
                        e.fromTokenError = t.payload;
                      },
                      setIsFeatureFlagLoaded: (e, t) => {
                        e.isFeatureFlagLoaded = t.payload;
                      },
                      setMaxSlippage: (e, t) => {
                        e.maxSlippage = t.payload;
                      },
                      setQuotesFetchStartTime: (e, t) => {
                        e.quotesFetchStartTime = t.payload;
                      },
                      setReviewSwapClickedTimestamp: (e, t) => {
                        e.reviewSwapClickedTimestamp = t.payload;
                      },
                      setTopAssets: (e, t) => {
                        e.topAssets = t.payload;
                      },
                      setToToken: (e, t) => {
                        e.toToken = t.payload;
                      },
                      swapCustomGasModalClosed: (e) => {
                        (e.customGas.price = null), (e.customGas.limit = null);
                      },
                      swapCustomGasModalPriceEdited: (e, t) => {
                        e.customGas.price = t.payload;
                      },
                      swapCustomGasModalLimitEdited: (e, t) => {
                        e.customGas.limit = t.payload;
                      },
                      swapGasPriceEstimatesFetchStarted: (e) => {
                        e.customGas.loading = S.LOADING;
                      },
                      swapGasPriceEstimatesFetchFailed: (e) => {
                        e.customGas.loading = S.FAILED;
                      },
                      swapGasPriceEstimatesFetchCompleted: (e, t) => {
                        (e.customGas.priceEstimates = t.payload.priceEstimates), (e.customGas.loading = S.COMPLETED);
                      },
                      retrievedFallbackSwapsGasPrice: (e, t) => {
                        e.customGas.fallBackPrice = t.payload;
                      },
                      setCurrentSmartTransactionsError: (e, t) => {
                        const a =
                          Object.values(l.StxErrorTypes).includes(t.payload) || t.payload === undefined
                            ? t.payload
                            : l.StxErrorTypes.unavailable;
                        e.currentSmartTransactionsError = a;
                      },
                      setSwapsSTXSubmitLoading: (e, t) => {
                        e.swapsSTXLoading = t.payload || !1;
                      },
                      setTransactionSettingsOpened: (e, t) => {
                        e.transactionSettingsOpened = Boolean(t.payload);
                      }
                    }
                  }),
                  { actions: I, reducer: b } = A;
                a.default = b;
                a.getAggregatorMetadata = (e) => e.swaps.aggregatorMetadata;
                const P = (e) => e.swaps.balanceError;
                a.getBalanceError = P;
                const M = (e) => e.swaps.fromToken;
                a.getFromToken = M;
                a.getFromTokenError = (e) => e.swaps.fromTokenError;
                a.getFromTokenInputValue = (e) => e.swaps.fromTokenInputValue;
                a.getIsFeatureFlagLoaded = (e) => e.swaps.isFeatureFlagLoaded;
                a.getSwapsSTXLoading = (e) => e.swaps.swapsSTXLoading;
                a.getMaxSlippage = (e) => e.swaps.maxSlippage;
                a.getTopAssets = (e) => e.swaps.topAssets;
                const O = (e) => e.swaps.toToken;
                a.getToToken = O;
                a.getFetchingQuotes = (e) => e.swaps.fetchingQuotes;
                const C = (e) => e.swaps.latestAddedTokenTo;
                a.getLatestAddedTokenTo = C;
                a.getQuotesFetchStartTime = (e) => e.swaps.quotesFetchStartTime;
                a.getReviewSwapClickedTimestamp = (e) => e.swaps.reviewSwapClickedTimestamp;
                const N = (e) => e.swaps.customGas.price;
                a.getSwapsCustomizationModalPrice = N;
                a.getSwapsCustomizationModalLimit = (e) => e.swaps.customGas.limit;
                a.swapGasPriceEstimateIsLoading = (e) => e.swaps.customGas.loading === S.LOADING;
                a.swapGasEstimateLoadingHasFailed = (e) => e.swaps.customGas.loading === S.INITIAL;
                const x = (e) => e.swaps.customGas.priceEstimates;
                a.getSwapGasPriceEstimateData = x;
                const R = (e) => e.swaps.customGas.fallBackPrice;
                a.getSwapsFallbackGasPrice = R;
                const F = (e) => e.swaps.currentSmartTransactionsError;
                a.getCurrentSmartTransactionsError = F;
                a.getTransactionSettingsOpened = (e) => e.swaps.transactionSettingsOpened;
                const D = (e) => e.metamask.swapsState;
                a.getSwapsFeatureIsLive = (e) => e.metamask.swapsState.swapsFeatureIsLive;
                a.getSmartTransactionsError = (e) => e.appState.smartTransactionsError;
                a.getSmartTransactionsErrorMessageDismissed = (e) => e.appState.smartTransactionsErrorMessageDismissed;
                const L = (e) => {
                  var t, a;
                  const n = (0, p.isHardwareWallet)(e),
                    s = (0, p.getCurrentChainId)(e),
                    r = f.ALLOWED_SMART_TRANSACTIONS_CHAIN_IDS.includes(s),
                    o =
                      null === (t = e.metamask.swapsState) ||
                      void 0 === t ||
                      null === (t = t.swapsFeatureFlags) ||
                      void 0 === t ||
                      null === (t = t.smartTransactions) ||
                      void 0 === t
                        ? void 0
                        : t.extensionActive,
                    i = null === (a = e.metamask.smartTransactionsState) || void 0 === a ? void 0 : a.liveness;
                  return Boolean(r && !n && o && i);
                };
                a.getSmartTransactionsEnabled = L;
                const G = (e) => {
                  const t = L(e),
                    a = F(e);
                  return t && !a;
                };
                a.getCurrentSmartTransactionsEnabled = G;
                a.getSwapRedesignEnabled = (e) => {
                  var t;
                  const a =
                    null === (t = e.metamask.swapsState) || void 0 === t || null === (t = t.swapsFeatureFlags) || void 0 === t
                      ? void 0
                      : t.swapRedesign;
                  return a === undefined || a.extensionActive;
                };
                a.getSwapsQuoteRefreshTime = (e) => e.metamask.swapsState.swapsQuoteRefreshTime;
                a.getSwapsQuotePrefetchingRefreshTime = (e) => e.metamask.swapsState.swapsQuotePrefetchingRefreshTime;
                a.getBackgroundSwapRouteState = (e) => e.metamask.swapsState.routeState;
                const U = (e) => e.metamask.swapsState.customMaxGas;
                a.getCustomSwapsGas = U;
                const j = (e) => e.metamask.swapsState.customGasPrice;
                a.getCustomSwapsGasPrice = j;
                const $ = (e) => e.metamask.swapsState.customMaxFeePerGas;
                a.getCustomMaxFeePerGas = $;
                const W = (e) => e.metamask.swapsState.customMaxPriorityFeePerGas;
                a.getCustomMaxPriorityFeePerGas = W;
                a.getSwapsUserFeeLevel = (e) => e.metamask.swapsState.swapsUserFeeLevel;
                const H = (e) => e.metamask.swapsState.fetchParams;
                a.getFetchParams = H;
                const B = (e) => e.metamask.swapsState.quotes;
                a.getQuotes = B;
                a.getQuotesLastFetched = (e) => e.metamask.swapsState.quotesLastFetched;
                const V = (e) => {
                  const { selectedAggId: t, quotes: a } = D(e);
                  return a[t];
                };
                a.getSelectedQuote = V;
                a.getSwapsErrorKey = (e) => {
                  var t;
                  return null === (t = D(e)) || void 0 === t ? void 0 : t.errorKey;
                };
                a.getShowQuoteLoadingScreen = (e) => e.swaps.showQuoteLoadingScreen;
                const K = (e) => e.metamask.swapsState.tokens;
                a.getSwapsTokens = K;
                a.getSwapsWelcomeMessageSeenStatus = (e) => e.metamask.swapsWelcomeMessageHasBeenShown;
                const q = (e) => {
                  const { topAggId: t, quotes: a } = D(e);
                  return a[t];
                };
                a.getTopQuote = q;
                a.getApproveTxId = (e) => e.metamask.swapsState.approveTxId;
                a.getTradeTxId = (e) => e.metamask.swapsState.tradeTxId;
                const Y = (e) => V(e) || q(e);
                a.getUsedQuote = Y;
                a.getDestinationTokenInfo = (e) => {
                  var t;
                  return null === (t = H(e)) || void 0 === t || null === (t = t.metaData) || void 0 === t ? void 0 : t.destinationTokenInfo;
                };
                const z = (e) => j(e) || R(e);
                a.getUsedSwapsGasPrice = z;
                const X = (e) => {
                  var t;
                  const { approvalNeeded: a } = V(e) || q(e) || {};
                  if (!a) return null;
                  const n = (null === (t = D(e)) || void 0 === t ? void 0 : t.customApproveTxData) || a.data,
                    s = z(e);
                  return { ...a, gasPrice: s, data: n };
                };
                a.getApproveTxParams = X;
                const Q = (e) => {
                  var t;
                  return null === (t = e.metamask.smartTransactionsState) || void 0 === t ? void 0 : t.userOptInV2;
                };
                a.getSmartTransactionsOptInStatus = Q;
                const Z = (e) => {
                  var t;
                  return null === (t = e.metamask.smartTransactionsState) ||
                    void 0 === t ||
                    null === (t = t.smartTransactions) ||
                    void 0 === t
                    ? void 0
                    : t[(0, p.getCurrentChainId)(e)];
                };
                a.getCurrentSmartTransactions = Z;
                a.getPendingSmartTransactions = (e) => {
                  const t = Z(e);
                  return t && 0 !== t.length ? t.filter((e) => e.status === g.SmartTransactionStatus.pending) : [];
                };
                a.getSmartTransactionFees = (e) => {
                  var t;
                  return null === (t = e.metamask.smartTransactionsState) || void 0 === t ? void 0 : t.fees;
                };
                a.getSmartTransactionEstimatedGas = (e) => {
                  var t;
                  return null === (t = e.metamask.smartTransactionsState) || void 0 === t ? void 0 : t.estimatedGas;
                };
                const J = (e) => {
                  const {
                    swapsQuoteRefreshTime: t,
                    swapsQuotePrefetchingRefreshTime: a,
                    swapsStxGetTransactionsRefreshTime: n,
                    swapsStxBatchStatusRefreshTime: s,
                    swapsStxStatusDeadline: r,
                    swapsStxMaxFeeMultiplier: o
                  } = e.metamask.swapsState;
                  return {
                    quoteRefreshTime: t,
                    quotePrefetchingRefreshTime: a,
                    stxGetTransactionsRefreshTime: n,
                    stxBatchStatusRefreshTime: s,
                    stxStatusDeadline: r,
                    stxMaxFeeMultiplier: o
                  };
                };
                a.getSwapsNetworkConfig = J;
                const {
                  clearSwapsState: ee,
                  navigatedBackToBuildQuote: te,
                  retriedGetQuotes: ae,
                  swapGasPriceEstimatesFetchCompleted: ne,
                  swapGasPriceEstimatesFetchStarted: se,
                  swapGasPriceEstimatesFetchFailed: re,
                  setAggregatorMetadata: oe,
                  setBalanceError: ie,
                  setFetchingQuotes: ce,
                  setLatestAddedTokenTo: ue,
                  setFromToken: le,
                  setFromTokenError: de,
                  setFromTokenInputValue: pe,
                  setIsFeatureFlagLoaded: me,
                  setMaxSlippage: fe,
                  setQuotesFetchStartTime: ge,
                  setReviewSwapClickedTimestamp: Te,
                  setTopAssets: he,
                  setToToken: ve,
                  swapCustomGasModalPriceEdited: ye,
                  swapCustomGasModalLimitEdited: _e,
                  retrievedFallbackSwapsGasPrice: Ee,
                  swapCustomGasModalClosed: Se,
                  setCurrentSmartTransactionsError: ke,
                  setSwapsSTXSubmitLoading: we,
                  setTransactionSettingsOpened: Ae
                } = I;
                (a.setTransactionSettingsOpened = Ae),
                  (a.swapCustomGasModalClosed = Se),
                  (a.swapCustomGasModalLimitEdited = _e),
                  (a.swapCustomGasModalPriceEdited = ye),
                  (a.setSwapToToken = ve),
                  (a.setTopAssets = he),
                  (a.setReviewSwapClickedTimestamp = Te),
                  (a.setSwapQuotesFetchStartTime = ge),
                  (a.setMaxSlippage = fe),
                  (a.setIsFeatureFlagLoaded = me),
                  (a.setFromTokenInputValue = pe),
                  (a.setFromTokenError = de),
                  (a.setSwapsFromToken = le),
                  (a.setLatestAddedTokenTo = ue),
                  (a.setFetchingQuotes = ce),
                  (a.setBalanceError = ie),
                  (a.setAggregatorMetadata = oe),
                  (a.clearSwapsState = ee);
                a.navigateBackToBuildQuote = (e) => async (t) => {
                  await t((0, c.setBackgroundSwapRouteState)("")), t(te()), e.push(u.BUILD_QUOTE_ROUTE);
                };
                a.prepareForRetryGetQuotes = () => async (e) => {
                  await e((0, c.resetSwapsPostFetchState)()), e(ae());
                };
                a.prepareToLeaveSwaps = () => async (e) => {
                  e(ee()), await e((0, c.resetBackgroundSwapsState)());
                };
                a.swapsQuoteSelected = (e) => (t) => {
                  t(_e(null)), t((0, c.setSelectedQuoteAggId)(e)), t((0, c.setSwapsTxGasLimit)(""));
                };
                const Ie = () => async (e) => {
                  const t = await e(be());
                  null != t && t.fast && e((0, c.setSwapsTxGasPrice)((0, d.decGWEIToHexWEI)(t.fast)));
                };
                a.fetchAndSetSwapsGasPriceInfo = Ie;
                a.fetchSwapsLivenessAndFeatureFlags = () => async (e, t) => {
                  let a = { swapsFeatureIsLive: !1 };
                  const n = t(),
                    s = (0, p.getCurrentChainId)(n);
                  try {
                    const t = await (0, l.fetchSwapsFeatureFlags)();
                    if ((await e((0, c.setSwapsFeatureFlags)(t)), f.ALLOWED_SMART_TRANSACTIONS_CHAIN_IDS.includes(s))) {
                      var o;
                      await e(ke(undefined)), await e((0, c.fetchSmartTransactionsLiveness)());
                      ((e, t) => {
                        if (!((null == t ? void 0 : t.length) <= 0))
                          for (const a of t)
                            if (g.IN_PROGRESS_TRANSACTION_STATUSES.includes(a.status)) {
                              e(ke(l.StxErrorTypes.regularTxPending));
                              break;
                            }
                      })(
                        e,
                        await (0, c.getTransactions)({
                          searchCriteria: { from: null === (o = n.metamask) || void 0 === o ? void 0 : o.selectedAddress }
                        })
                      );
                    }
                    a = (0, l.getSwapsLivenessForNetwork)(s, t);
                  } catch (e) {
                    r.default.error("Failed to fetch Swaps feature flags and Swaps liveness, defaulting to false.", e);
                  }
                  return await e((0, c.setSwapsLiveness)(a)), e(me(!0)), a;
                };
                a.fetchQuotesAndSetQuoteState = (e, t, a, n, o) => async (i, d) => {
                  var g, h, y;
                  const _ = d(),
                    E = (0, p.getCurrentChainId)(_);
                  let S = { swapsFeatureIsLive: !1 };
                  try {
                    const e = await (0, l.fetchSwapsFeatureFlags)();
                    S = (0, l.getSwapsLivenessForNetwork)(E, e);
                  } catch (e) {
                    r.default.error("Failed to fetch Swaps liveness, defaulting to false.", e);
                  }
                  if ((await i((0, c.setSwapsLiveness)(S)), !S.swapsFeatureIsLive)) return void (await e.push(u.SWAPS_MAINTENANCE_ROUTE));
                  const k = H(_),
                    w = (0, p.getSelectedAccount)(_),
                    A = (0, p.getSelectedNetworkClientId)(_),
                    I = P(_),
                    b = (0, p.getSwapsDefaultToken)(_),
                    N =
                      (null == k || null === (g = k.metaData) || void 0 === g || null === (g = g.sourceTokenInfo) || void 0 === g
                        ? void 0
                        : g.symbol) === b.symbol
                        ? b
                        : null == k || null === (h = k.metaData) || void 0 === h
                        ? void 0
                        : h.sourceTokenInfo,
                    x = M(_) || N || {},
                    R = O(_) || (null == k || null === (y = k.metaData) || void 0 === y ? void 0 : y.destinationTokenInfo) || {},
                    { address: F, symbol: D, decimals: U, iconUrl: j, balance: $ } = x,
                    { address: W, symbol: B, decimals: V, iconUrl: q } = R;
                  o || (await i((0, c.setBackgroundSwapRouteState)("loading")), e.push(u.LOADING_QUOTES_ROUTE)), i(ce(!0));
                  const Y = (0, p.getTokenExchangeRates)(_);
                  if (
                    !W ||
                    B === b.symbol ||
                    Y[W] !== undefined ||
                    ((z = W), (X = (0, T.getTokens)(_)), Array.isArray(X) && X.find((e) => e.address.toLowerCase() === z.toLowerCase()))
                  ) {
                    C(_) !== W && (await i(ue("")));
                  } else await i((0, c.addToken)({ address: W, symbol: B, decimals: V, image: q, networkClientId: A }, !0)), await i(ue(W));
                  var z, X;
                  F &&
                    D !== b.symbol &&
                    !Y[F] &&
                    $ &&
                    new s.default($, 16).gt(0) &&
                    i((0, c.addToken)({ address: F, symbol: D, decimals: U, image: j, networkClientId: A }, !0));
                  const Z = K(_),
                    J = (null == Z ? void 0 : Z.find(({ address: e }) => e === F)) || x,
                    ee = (null == Z ? void 0 : Z.find(({ address: e }) => e === W)) || R;
                  i(le(x));
                  const te = (0, p.isHardwareWallet)(_),
                    ae = (0, p.getHardwareWalletType)(_),
                    ne = (0, p.checkNetworkAndAccountSupports1559)(_),
                    se = Q(_),
                    re = L(_),
                    oe = G(_);
                  n({
                    event: "Quotes Requested",
                    category: m.MetaMetricsEventCategory.Swaps,
                    sensitiveProperties: {
                      token_from: D,
                      token_from_amount: String(t),
                      token_to: B,
                      request_type: I ? "Quote" : "Order",
                      slippage: a,
                      custom_slippage: a !== f.Slippage.default,
                      is_hardware_wallet: te,
                      hardware_wallet_type: ae,
                      stx_enabled: re,
                      current_stx_enabled: oe,
                      stx_user_opt_in: se,
                      anonymizedData: !0
                    }
                  });
                  try {
                    var ie;
                    const e = Date.now();
                    i(ge(e));
                    const s = i(
                        (0, c.fetchAndSetQuotes)(
                          {
                            slippage: a,
                            sourceToken: F,
                            destinationToken: W,
                            value: t,
                            fromAddress: w.address,
                            balanceError: I,
                            sourceDecimals: U
                          },
                          { sourceTokenInfo: J, destinationTokenInfo: ee, accountBalance: w.balance, chainId: E }
                        )
                      ),
                      r = ne ? null : i(Ie()),
                      [[o, u]] = await Promise.all([s, r]);
                    if (0 === (null === (ie = Object.values(o)) || void 0 === ie ? void 0 : ie.length))
                      n({
                        event: "No Quotes Available",
                        category: m.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          token_from: D,
                          token_from_amount: String(t),
                          token_to: B,
                          request_type: I ? "Quote" : "Order",
                          slippage: a,
                          custom_slippage: a !== f.Slippage.default,
                          is_hardware_wallet: te,
                          hardware_wallet_type: ae,
                          stx_enabled: re,
                          current_stx_enabled: oe,
                          stx_user_opt_in: se
                        }
                      }),
                        i((0, c.setSwapsErrorKey)(f.QUOTES_NOT_AVAILABLE_ERROR));
                    else {
                      var de;
                      const s = o[u],
                        r = (0, v.calcTokenAmount)(s.destinationAmount, s.decimals || 18).toString(10);
                      n({
                        event: "Quotes Received",
                        category: m.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          token_from: D,
                          token_from_amount: String(t),
                          token_to: B,
                          token_to_amount: r,
                          request_type: I ? "Quote" : "Order",
                          slippage: a,
                          custom_slippage: a !== f.Slippage.default,
                          response_time: Date.now() - e,
                          best_quote_source: s.aggregator,
                          available_quotes: null === (de = Object.values(o)) || void 0 === de ? void 0 : de.length,
                          is_hardware_wallet: te,
                          hardware_wallet_type: ae,
                          stx_enabled: re,
                          current_stx_enabled: oe,
                          stx_user_opt_in: se,
                          anonymizedData: !0
                        }
                      }),
                        i((0, c.setInitialGasEstimate)(u));
                    }
                  } catch (e) {
                    if (e.message === f.SWAPS_FETCH_ORDER_CONFLICT)
                      return void r.default.debug("Swap fetch order conflict detected; ignoring older request");
                    r.default.error("Error fetching quotes: ", e), i((0, c.setSwapsErrorKey)(f.ERROR_FETCHING_QUOTES));
                  }
                  i(ce(!1));
                };
                a.signAndSendSwapsSmartTransaction =
                  ({ unsignedTransaction: e, trackEvent: t, history: a, additionalTrackingParams: n }) =>
                  async (s, g) => {
                    var T, y, _, E, S, k, w, A;
                    s(we(!0));
                    const I = g(),
                      b = H(I),
                      { metaData: P, value: M, slippage: O } = b,
                      { sourceTokenInfo: C = {}, destinationTokenInfo: N = {} } = P,
                      x = Y(I),
                      R = J(I),
                      F = (0, p.getCurrentChainId)(I);
                    s((0, c.setSmartTransactionsRefreshInterval)(null == R ? void 0 : R.stxBatchStatusRefreshTime));
                    const D = x.trade,
                      U = (0, v.calcTokenAmount)(x.destinationAmount, N.decimals || 18).toPrecision(8),
                      j = Q(I),
                      $ = L(I),
                      W = G(I),
                      V = {
                        token_from: C.symbol,
                        token_from_amount: String(M),
                        token_to: N.symbol,
                        token_to_amount: U,
                        slippage: O,
                        custom_slippage: 2 !== O,
                        best_quote_source: null === (T = q(I)) || void 0 === T ? void 0 : T.aggregator,
                        available_quotes: null === (y = B(I)) || void 0 === y ? void 0 : y.length,
                        other_quote_selected: x.aggregator !== (null === (_ = q(I)) || void 0 === _ ? void 0 : _.aggregator),
                        other_quote_selected_source:
                          x.aggregator === (null === (E = q(I)) || void 0 === E ? void 0 : E.aggregator) ? "" : x.aggregator,
                        average_savings: null === (S = x.savings) || void 0 === S ? void 0 : S.total,
                        performance_savings: null === (k = x.savings) || void 0 === k ? void 0 : k.performance,
                        fee_savings: null === (w = x.savings) || void 0 === w ? void 0 : w.fee,
                        median_metamask_fee: null === (A = x.savings) || void 0 === A ? void 0 : A.medianMetaMaskFee,
                        stx_enabled: $,
                        current_stx_enabled: W,
                        stx_user_opt_in: j,
                        ...n
                      };
                    if (
                      (t({ event: "STX Swap Started", category: m.MetaMetricsEventCategory.Swaps, sensitiveProperties: V }),
                      !(0, l.isContractAddressValid)(D.to, F))
                    )
                      return (
                        (0, o.captureMessage)("Invalid contract address", {
                          extra: { token_from: V.token_from, token_to: V.token_to, contract_address: D.to }
                        }),
                        await s((0, c.setSwapsErrorKey)(f.SWAP_FAILED_ERROR)),
                        void a.push(u.SWAPS_ERROR_ROUTE)
                      );
                    const K = X(I);
                    let z, Z;
                    try {
                      var ee;
                      K && (Z = { ...K, value: "0x0" });
                      const t = await s(Pe({ unsignedTransaction: e, approveTxParams: Z, fallbackOnNotEnoughFunds: !0 }));
                      if (!t)
                        return (
                          r.default.error('"fetchSwapsSmartTransactionFees" failed'), s(we(!1)), void s(ke(l.StxErrorTypes.unavailable))
                        );
                      var te;
                      if (K)
                        (Z.gas = `0x${(0, d.decimalToHex)(
                          (null === (te = t.approvalTxFees) || void 0 === te ? void 0 : te.gasLimit) || 0
                        )}`),
                          (z = await s(
                            (0, c.signAndSendSmartTransaction)({ unsignedTransaction: Z, smartTransactionFees: t.approvalTxFees })
                          ));
                      e.gas = `0x${(0, d.decimalToHex)((null === (ee = t.tradeTxFees) || void 0 === ee ? void 0 : ee.gasLimit) || 0)}`;
                      const n = await s(
                          (0, c.signAndSendSmartTransaction)({ unsignedTransaction: e, smartTransactionFees: t.tradeTxFees })
                        ),
                        o = N.address,
                        p = N.decimals,
                        m = N.symbol,
                        f = C.symbol;
                      await s(
                        (0, c.updateSmartTransaction)(n, {
                          origin: h.ORIGIN_METAMASK,
                          destinationTokenAddress: o,
                          destinationTokenDecimals: p,
                          destinationTokenSymbol: m,
                          sourceTokenSymbol: f,
                          swapMetaData: V,
                          swapTokenValue: M,
                          type: i.TransactionType.swap
                        })
                      ),
                        z &&
                          (await s(
                            (0, c.updateSmartTransaction)(z, {
                              origin: h.ORIGIN_METAMASK,
                              type: i.TransactionType.swapApproval,
                              sourceTokenSymbol: f
                            })
                          )),
                        a.push(u.SMART_TRANSACTION_STATUS_ROUTE),
                        s(we(!1));
                    } catch (e) {
                      console.log("signAndSendSwapsSmartTransaction error", e);
                      const {
                        swaps: { isFeatureFlagLoaded: t }
                      } = g();
                      if (e.message.startsWith("Fetch error:") && t) {
                        const t = (0, l.parseSmartTransactionsError)(e.message);
                        s(ke(null == t ? void 0 : t.error));
                      }
                    }
                  };
                function be() {
                  return async (e, t) => {
                    const a = t(),
                      n = (0, p.getCurrentChainId)(a);
                    let s;
                    e(se());
                    try {
                      s = await (0, l.fetchSwapsGasPrices)(n);
                    } catch (t) {
                      var o;
                      if (
                        (r.default.warn("Fetching swaps gas prices failed:", t),
                        null === (o = t.message) || void 0 === o || !o.match(/NetworkError|Fetch failed with status:/u))
                      )
                        throw t;
                      e(re());
                      try {
                        const t = await global.ethQuery.gasPrice(),
                          a = (0, d.hexWEIToDecGWEI)(t.toString(10));
                        return e(Ee(a)), null;
                      } catch (e) {
                        return console.error("Failed to retrieve fallback gas price: ", e), null;
                      }
                    }
                    return e(ne({ priceEstimates: s })), s;
                  };
                }
                function Pe({ unsignedTransaction: e, approveTxParams: t, fallbackOnNotEnoughFunds: a = !1 }) {
                  return async (n, s) => {
                    const {
                      swaps: { isFeatureFlagLoaded: r }
                    } = s();
                    try {
                      return await n((0, c.fetchSmartTransactionFees)(e, t));
                    } catch (e) {
                      if (e.message.startsWith("Fetch error:") && r) {
                        const t = (0, l.parseSmartTransactionsError)(e.message);
                        (a || (null == t ? void 0 : t.error) !== l.StxErrorTypes.notEnoughFunds) && n(ke(null == t ? void 0 : t.error));
                      }
                    }
                    return null;
                  };
                }
                a.signAndSendTransactions = (e, t, a) => async (n, g) => {
                  var h, y, _, E, S, w, A, I, b;
                  const P = g(),
                    M = (0, p.getCurrentChainId)(P),
                    O = (0, p.isHardwareWallet)(P),
                    C = (0, p.checkNetworkAndAccountSupports1559)(P);
                  let N = { swapsFeatureIsLive: !1 };
                  try {
                    const e = await (0, l.fetchSwapsFeatureFlags)();
                    N = (0, l.getSwapsLivenessForNetwork)(M, e);
                  } catch (e) {
                    r.default.error("Failed to fetch Swaps liveness, defaulting to false.", e);
                  }
                  if ((await n((0, c.setSwapsLiveness)(N)), !N.swapsFeatureIsLive)) return void (await e.push(u.SWAPS_MAINTENANCE_ROUTE));
                  const R = U(P),
                    F = $(P),
                    D = W(P),
                    j = H(P),
                    { metaData: V, value: K, slippage: Z } = j,
                    { sourceTokenInfo: J = {}, destinationTokenInfo: ee = {} } = V;
                  await n((0, c.setBackgroundSwapRouteState)("awaiting")),
                    await n((0, c.stopPollingForQuotes)()),
                    O || e.push(u.AWAITING_SWAP_ROUTE);
                  const { fast: te } = x(P);
                  let ae, ne, se, re;
                  if (C) {
                    const {
                      high: { suggestedMaxFeePerGas: e, suggestedMaxPriorityFeePerGas: t },
                      estimatedBaseFee: a = "0"
                    } = (0, T.getGasFeeEstimates)(P);
                    (re = (0, d.decGWEIToHexWEI)(a)),
                      (ae = F || (0, d.decGWEIToHexWEI)(e)),
                      (ne = D || (0, d.decGWEIToHexWEI)(t)),
                      (se = (0, d.addHexes)(re, ne));
                  }
                  const oe = Y(P),
                    ie = oe.trade,
                    ce = new s.default((null == oe ? void 0 : oe.gasEstimate) || "0x0", 16),
                    ue = ce
                      .times((null == oe ? void 0 : oe.gasMultiplier) || k, 10)
                      .round(0)
                      .toString(16),
                    le = R || (null != oe && oe.gasEstimate ? ue : `0x${(0, d.decimalToHex)((null == oe ? void 0 : oe.maxGas) || 0)}`),
                    de = z(P);
                  (ie.gas = le), C ? ((ie.maxFeePerGas = ae), (ie.maxPriorityFeePerGas = ne), delete ie.gasPrice) : (ie.gasPrice = de);
                  const pe = (0, p.getUSDConversionRate)(P),
                    me = (0, v.calcTokenAmount)(oe.destinationAmount, ee.decimals || 18).toPrecision(8),
                    fe =
                      (null == oe ? void 0 : oe.gasEstimateWithRefund) ||
                      `0x${(0, d.decimalToHex)((null == oe ? void 0 : oe.averageGas) || 0)}`,
                    ge = new s.default(fe, 16)
                      .plus((null === (h = oe.approvalNeeded) || void 0 === h ? void 0 : h.gas) || "0x0", 16)
                      .toString(16),
                    Te = (0, d.getValueFromWeiHex)({
                      value: (0, v.calcGasTotal)(ge, C ? se : de),
                      toCurrency: "usd",
                      conversionRate: pe,
                      numberOfDecimals: 6
                    }),
                    he = Q(P),
                    ve = L(P),
                    ye = G(P),
                    _e = {
                      token_from: J.symbol,
                      token_from_amount: String(K),
                      token_to: ee.symbol,
                      token_to_amount: me,
                      slippage: Z,
                      custom_slippage: 2 !== Z,
                      best_quote_source: null === (y = q(P)) || void 0 === y ? void 0 : y.aggregator,
                      available_quotes: null === (_ = B(P)) || void 0 === _ ? void 0 : _.length,
                      other_quote_selected: oe.aggregator !== (null === (E = q(P)) || void 0 === E ? void 0 : E.aggregator),
                      other_quote_selected_source:
                        oe.aggregator === (null === (S = q(P)) || void 0 === S ? void 0 : S.aggregator) ? "" : oe.aggregator,
                      gas_fees: Te,
                      estimated_gas: ce.toString(10),
                      suggested_gas_price: te,
                      used_gas_price: (0, d.hexWEIToDecGWEI)(de),
                      average_savings: null === (w = oe.savings) || void 0 === w ? void 0 : w.total,
                      performance_savings: null === (A = oe.savings) || void 0 === A ? void 0 : A.performance,
                      fee_savings: null === (I = oe.savings) || void 0 === I ? void 0 : I.fee,
                      median_metamask_fee: null === (b = oe.savings) || void 0 === b ? void 0 : b.medianMetaMaskFee,
                      is_hardware_wallet: O,
                      hardware_wallet_type: (0, p.getHardwareWalletType)(P),
                      stx_enabled: ve,
                      current_stx_enabled: ye,
                      stx_user_opt_in: he,
                      ...a
                    };
                  if (
                    (C && ((_e.max_fee_per_gas = ae), (_e.max_priority_fee_per_gas = ne), (_e.base_and_priority_fee_per_gas = se)),
                    t({ event: m.MetaMetricsEventName.SwapStarted, category: m.MetaMetricsEventCategory.Swaps, sensitiveProperties: _e }),
                    !(0, l.isContractAddressValid)(ie.to, M))
                  )
                    return (
                      (0, o.captureMessage)("Invalid contract address", {
                        extra: { token_from: _e.token_from, token_to: _e.token_to, contract_address: ie.to }
                      }),
                      await n((0, c.setSwapsErrorKey)(f.SWAP_FAILED_ERROR)),
                      void e.push(u.SWAPS_ERROR_ROUTE)
                    );
                  let Ee;
                  const Se = X(P);
                  if ((O && e.push(u.AWAITING_SIGNATURES_ROUTE), Se)) {
                    C && ((Se.maxFeePerGas = ae), (Se.maxPriorityFeePerGas = ne), delete Se.gasPrice);
                    try {
                      Ee = await (0, c.addTransactionAndWaitForPublish)(
                        { ...Se, amount: "0x0" },
                        {
                          requireApproval: !1,
                          type: i.TransactionType.swapApproval,
                          swaps: { hasApproveTx: !0, meta: { type: i.TransactionType.swapApproval, sourceTokenSymbol: J.symbol } }
                        }
                      );
                    } catch (t) {
                      return await n((0, c.setSwapsErrorKey)(f.SWAP_FAILED_ERROR)), void e.push(u.SWAPS_ERROR_ROUTE);
                    }
                  }
                  try {
                    var ke;
                    await (0, c.addTransactionAndWaitForPublish)(ie, {
                      requireApproval: !1,
                      type: i.TransactionType.swap,
                      swaps: {
                        hasApproveTx: Boolean(Se),
                        meta: {
                          estimatedBaseFee: re,
                          sourceTokenSymbol: J.symbol,
                          destinationTokenSymbol: ee.symbol,
                          type: i.TransactionType.swap,
                          destinationTokenDecimals: ee.decimals,
                          destinationTokenAddress: ee.address,
                          swapMetaData: _e,
                          swapTokenValue: K,
                          approvalTxId: null === (ke = Ee) || void 0 === ke ? void 0 : ke.id
                        }
                      }
                    });
                  } catch (t) {
                    const a = t.message.includes("EthAppPleaseEnableContractData") ? f.CONTRACT_DATA_DISABLED_ERROR : f.SWAP_FAILED_ERROR;
                    return console.error(t), await n((0, c.setSwapsErrorKey)(a)), void e.push(u.SWAPS_ERROR_ROUTE);
                  }
                  O && e.push(u.AWAITING_SWAP_ROUTE), await (0, c.forceUpdateMetamaskState)(n);
                };
              };
            };
      },
      { package: "$root$", file: "ui/ducks/swaps/swaps.js" }
    ],
    [
      4768,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                t.exports = [
                  { code: "aud", name: "Australian Dollar" },
                  { code: "hkd", name: "Hong Kong Dollar" },
                  { code: "sgd", name: "Singapore Dollar" },
                  { code: "idr", name: "Indonesian Rupiah" },
                  { code: "inr", name: "Indian Rupee" },
                  { code: "nzd", name: "New Zealand Dollar" },
                  { code: "php", name: "Philippine Peso" },
                  { code: "adt", name: "adToken" },
                  { code: "adx", name: "AdEx" },
                  { code: "ant", name: "Aragon" },
                  { code: "bat", name: "Basic Attention Token" },
                  { code: "bnt", name: "Bancor" },
                  { code: "btc", name: "Bitcoin" },
                  { code: "cad", name: "Canadian Dollar" },
                  { code: "crb", name: "CreditBit" },
                  { code: "cvc", name: "Civic" },
                  { code: "dash", name: "Dash" },
                  { code: "dgd", name: "DigixDAO" },
                  { code: "etc", name: "Ethereum Classic" },
                  { code: "eur", name: "Euro" },
                  { code: "fun", name: "FunFair" },
                  { code: "gbp", name: "Pound Sterling" },
                  { code: "gno", name: "Gnosis" },
                  { code: "gnt", name: "Golem" },
                  { code: "hmq", name: "Humaniq" },
                  { code: "jpy", name: "Japanese Yen" },
                  { code: "lsk", name: "Lisk" },
                  { code: "ltc", name: "Litecoin" },
                  { code: "lun", name: "Lunyr" },
                  { code: "mco", name: "Monaco" },
                  { code: "mtl", name: "Metal" },
                  { code: "myst", name: "Mysterium" },
                  { code: "nmr", name: "Numeraire" },
                  { code: "omg", name: "OmiseGO" },
                  { code: "pay", name: "TenX" },
                  { code: "ptoy", name: "Patientory" },
                  { code: "qrl", name: "Quantum-Resistant Ledger" },
                  { code: "qtum", name: "Qtum" },
                  { code: "rep", name: "Augur" },
                  { code: "rlc", name: "iEx.ec" },
                  { code: "rub", name: "Russian Ruble" },
                  { code: "sc", name: "Siacoin" },
                  { code: "sngls", name: "SingularDTV" },
                  { code: "snt", name: "Status" },
                  { code: "steem", name: "Steem" },
                  { code: "storj", name: "Storj" },
                  { code: "time", name: "ChronoBank" },
                  { code: "tkn", name: "TokenCard" },
                  { code: "uah", name: "Ukrainian Hryvnia" },
                  { code: "usd", name: "United States Dollar" },
                  { code: "wings", name: "Wings" },
                  { code: "xem", name: "NEM" },
                  { code: "xlm", name: "Stellar Lumen" },
                  { code: "xmr", name: "Monero" },
                  { code: "xrp", name: "Ripple" },
                  { code: "zec", name: "Zcash" },
                  { code: "dai", name: "DAI" },
                  { code: "sek", name: "Swedish Krona" }
                ];
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/available-conversions.json" }
    ],
    [
      4770,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.STATUS_NOT_CONNECTED =
                    a.STATUS_CONNECTED_TO_SNAP =
                    a.STATUS_CONNECTED_TO_ANOTHER_ACCOUNT =
                    a.STATUS_CONNECTED =
                      void 0);
                (a.STATUS_CONNECTED = "STATUS_CONNECTED"),
                  (a.STATUS_CONNECTED_TO_ANOTHER_ACCOUNT = "STATUS_CONNECTED_TO_ANOTHER_ACCOUNT"),
                  (a.STATUS_NOT_CONNECTED = "STATUS_NOT_CONNECTED"),
                  (a.STATUS_CONNECTED_TO_SNAP = "STATUS_CONNECTED_TO_SNAP");
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/connected-sites.js" }
    ],
    [
      4771,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.TypographyVariant =
                    a.TextVariant =
                    a.TextTransform =
                    a.TextColor =
                    a.TextAlign =
                    a.TEXT_TRANSFORM =
                    a.TEXT_ALIGN =
                    a.Size =
                    a.Severity =
                    a.SEVERITIES =
                    a.OverflowWrap =
                    a.OVERFLOW_WRAP =
                    a.JustifyContent =
                    a.IconColor =
                    a.FontWeight =
                    a.FontStyle =
                    a.FlexWrap =
                    a.FlexDirection =
                    a.FRACTIONS =
                    a.FONT_WEIGHT =
                    a.FONT_STYLE =
                    a.FLEX_WRAP =
                    a.FLEX_DIRECTION =
                    a.Display =
                    a.DISPLAY =
                    a.Color =
                    a.BorderStyle =
                    a.BorderRadius =
                    a.BorderColor =
                    a.BlockSize =
                    a.BackgroundColor =
                    a.BREAKPOINTS =
                    a.BLOCK_SIZES =
                    a.AlignItems =
                      void 0);
                (a.Color = (function (e) {
                  return (
                    (e.backgroundDefault = "background-default"),
                    (e.backgroundAlternative = "background-alternative"),
                    (e.textDefault = "text-default"),
                    (e.textAlternative = "text-alternative"),
                    (e.textMuted = "text-muted"),
                    (e.iconDefault = "icon-default"),
                    (e.iconAlternative = "icon-alternative"),
                    (e.iconMuted = "icon-muted"),
                    (e.borderDefault = "border-default"),
                    (e.borderMuted = "border-muted"),
                    (e.overlayDefault = "overlay-default"),
                    (e.overlayInverse = "overlay-inverse"),
                    (e.primaryDefault = "primary-default"),
                    (e.primaryAlternative = "primary-alternative"),
                    (e.primaryMuted = "primary-muted"),
                    (e.primaryInverse = "primary-inverse"),
                    (e.primaryDisabled = "primary-disabled"),
                    (e.errorDefault = "error-default"),
                    (e.errorAlternative = "error-alternative"),
                    (e.errorMuted = "error-muted"),
                    (e.errorInverse = "error-inverse"),
                    (e.errorDisabled = "error-disabled"),
                    (e.warningDefault = "warning-default"),
                    (e.warningAlternative = "warning-alternative"),
                    (e.warningMuted = "warning-muted"),
                    (e.warningInverse = "warning-inverse"),
                    (e.warningDisabled = "warning-disabled"),
                    (e.successDefault = "success-default"),
                    (e.successAlternative = "success-alternative"),
                    (e.successMuted = "success-muted"),
                    (e.successInverse = "success-inverse"),
                    (e.successDisabled = "success-disabled"),
                    (e.infoDefault = "info-default"),
                    (e.infoAlternative = "info-alternative"),
                    (e.infoMuted = "info-muted"),
                    (e.infoInverse = "info-inverse"),
                    (e.infoDisabled = "info-disabled"),
                    (e.mainnet = "mainnet"),
                    (e.goerli = "goerli"),
                    (e.sepolia = "sepolia"),
                    (e.lineaGoerli = "linea-goerli"),
                    (e.lineaGoerliInverse = "linea-goerli-inverse"),
                    (e.lineaMainnet = "linea-mainnet"),
                    (e.lineaMainnetInverse = "linea-mainnet-inverse"),
                    (e.transparent = "transparent"),
                    (e.localhost = "localhost"),
                    (e.inherit = "inherit"),
                    (e.goerliInverse = "goerli-inverse"),
                    (e.sepoliaInverse = "sepolia-inverse"),
                    e
                  );
                })({})),
                  (a.BackgroundColor = (function (e) {
                    return (
                      (e.backgroundDefault = "background-default"),
                      (e.backgroundAlternative = "background-alternative"),
                      (e.overlayDefault = "overlay-default"),
                      (e.primaryDefault = "primary-default"),
                      (e.primaryAlternative = "primary-alternative"),
                      (e.primaryMuted = "primary-muted"),
                      (e.errorDefault = "error-default"),
                      (e.errorAlternative = "error-alternative"),
                      (e.errorMuted = "error-muted"),
                      (e.warningDefault = "warning-default"),
                      (e.warningAlternative = "warning-alternative"),
                      (e.warningMuted = "warning-muted"),
                      (e.successDefault = "success-default"),
                      (e.successAlternative = "success-alternative"),
                      (e.successMuted = "success-muted"),
                      (e.infoDefault = "info-default"),
                      (e.infoAlternative = "info-alternative"),
                      (e.infoMuted = "info-muted"),
                      (e.mainnet = "mainnet"),
                      (e.goerli = "goerli"),
                      (e.sepolia = "sepolia"),
                      (e.lineaGoerli = "linea-goerli"),
                      (e.lineaMainnet = "linea-mainnet"),
                      (e.transparent = "transparent"),
                      (e.localhost = "localhost"),
                      e
                    );
                  })({})),
                  (a.BorderColor = (function (e) {
                    return (
                      (e.borderDefault = "border-default"),
                      (e.borderMuted = "border-muted"),
                      (e.primaryDefault = "primary-default"),
                      (e.primaryAlternative = "primary-alternative"),
                      (e.primaryMuted = "primary-muted"),
                      (e.errorDefault = "error-default"),
                      (e.errorAlternative = "error-alternative"),
                      (e.errorMuted = "error-muted"),
                      (e.warningDefault = "warning-default"),
                      (e.warningAlternative = "warning-alternative"),
                      (e.warningMuted = "warning-muted"),
                      (e.successDefault = "success-default"),
                      (e.successAlternative = "success-alternative"),
                      (e.successMuted = "success-muted"),
                      (e.infoDefault = "info-default"),
                      (e.infoAlternative = "info-alternative"),
                      (e.infoMuted = "info-muted"),
                      (e.mainnet = "mainnet"),
                      (e.goerli = "goerli"),
                      (e.sepolia = "sepolia"),
                      (e.lineaGoerli = "linea-goerli"),
                      (e.lineaMainnet = "linea-mainnet"),
                      (e.transparent = "transparent"),
                      (e.localhost = "localhost"),
                      (e.backgroundDefault = "background-default"),
                      e
                    );
                  })({})),
                  (a.TextColor = (function (e) {
                    return (
                      (e.textDefault = "text-default"),
                      (e.textAlternative = "text-alternative"),
                      (e.textMuted = "text-muted"),
                      (e.overlayInverse = "overlay-inverse"),
                      (e.primaryDefault = "primary-default"),
                      (e.primaryInverse = "primary-inverse"),
                      (e.errorDefault = "error-default"),
                      (e.errorInverse = "error-inverse"),
                      (e.successDefault = "success-default"),
                      (e.successInverse = "success-inverse"),
                      (e.warningDefault = "warning-default"),
                      (e.warningInverse = "warning-inverse"),
                      (e.infoDefault = "info-default"),
                      (e.infoInverse = "info-inverse"),
                      (e.inherit = "inherit"),
                      (e.goerli = "goerli"),
                      (e.sepolia = "sepolia"),
                      (e.lineaGoerli = "linea-goerli"),
                      (e.lineaGoerliInverse = "linea-goerli-inverse"),
                      (e.lineaMainnet = "linea-mainnet"),
                      (e.lineaMainnetInverse = "linea-mainnet-inverse"),
                      (e.goerliInverse = "goerli-inverse"),
                      (e.sepoliaInverse = "sepolia-inverse"),
                      (e.transparent = "transparent"),
                      e
                    );
                  })({})),
                  (a.IconColor = (function (e) {
                    return (
                      (e.iconDefault = "icon-default"),
                      (e.iconAlternative = "icon-alternative"),
                      (e.iconMuted = "icon-muted"),
                      (e.overlayInverse = "overlay-inverse"),
                      (e.primaryDefault = "primary-default"),
                      (e.primaryInverse = "primary-inverse"),
                      (e.errorDefault = "error-default"),
                      (e.errorInverse = "error-inverse"),
                      (e.successDefault = "success-default"),
                      (e.successInverse = "success-inverse"),
                      (e.warningDefault = "warning-default"),
                      (e.warningInverse = "warning-inverse"),
                      (e.infoDefault = "info-default"),
                      (e.infoInverse = "info-inverse"),
                      (e.inherit = "inherit"),
                      (e.goerli = "goerli"),
                      (e.sepolia = "sepolia"),
                      (e.lineaGoerli = "linea-goerli"),
                      (e.lineaGoerliInverse = "linea-goerli-inverse"),
                      (e.lineaMainnet = "linea-mainnet"),
                      (e.lineaMainnetInverse = "linea-mainnet-inverse"),
                      (e.goerliInverse = "goerli-inverse"),
                      (e.sepoliaInverse = "sepolia-inverse"),
                      (e.transparent = "transparent"),
                      e
                    );
                  })({})),
                  (a.TypographyVariant = (function (e) {
                    return (
                      (e.H1 = "h1"),
                      (e.H2 = "h2"),
                      (e.H3 = "h3"),
                      (e.H4 = "h4"),
                      (e.H5 = "h5"),
                      (e.H6 = "h6"),
                      (e.H7 = "h7"),
                      (e.H8 = "h8"),
                      (e.H9 = "h9"),
                      (e.paragraph = "p"),
                      (e.span = "span"),
                      e
                    );
                  })({})),
                  (a.TextVariant = (function (e) {
                    return (
                      (e.displayMd = "display-md"),
                      (e.headingLg = "heading-lg"),
                      (e.headingMd = "heading-md"),
                      (e.headingSm = "heading-sm"),
                      (e.bodyLgMedium = "body-lg-medium"),
                      (e.bodyMd = "body-md"),
                      (e.bodyMdMedium = "body-md-medium"),
                      (e.bodyMdBold = "body-md-bold"),
                      (e.bodySm = "body-sm"),
                      (e.bodySmMedium = "body-sm-medium"),
                      (e.bodySmBold = "body-sm-bold"),
                      (e.bodyXs = "body-xs"),
                      (e.bodyXsMedium = "body-xs-medium"),
                      (e.inherit = "inherit"),
                      e
                    );
                  })({})),
                  (a.Size = (function (e) {
                    return (
                      (e.XXS = "xxs"),
                      (e.XS = "xs"),
                      (e.SM = "sm"),
                      (e.MD = "md"),
                      (e.LG = "lg"),
                      (e.XL = "xl"),
                      (e.inherit = "inherit"),
                      (e.auto = "auto"),
                      e
                    );
                  })({})),
                  (a.BorderStyle = (function (e) {
                    return (e.dashed = "dashed"), (e.solid = "solid"), (e.dotted = "dotted"), (e.double = "double"), (e.none = "none"), e;
                  })({})),
                  (a.BorderRadius = (function (e) {
                    return (
                      (e.XS = "xs"),
                      (e.SM = "sm"),
                      (e.MD = "md"),
                      (e.LG = "lg"),
                      (e.XL = "xl"),
                      (e.none = "none"),
                      (e.pill = "pill"),
                      (e.full = "full"),
                      e
                    );
                  })({})),
                  (a.AlignItems = (function (e) {
                    return (
                      (e.flexStart = "flex-start"),
                      (e.flexEnd = "flex-end"),
                      (e.center = "center"),
                      (e.baseline = "baseline"),
                      (e.stretch = "stretch"),
                      e
                    );
                  })({})),
                  (a.JustifyContent = (function (e) {
                    return (
                      (e.flexStart = "flex-start"),
                      (e.flexEnd = "flex-end"),
                      (e.center = "center"),
                      (e.spaceAround = "space-around"),
                      (e.spaceBetween = "space-between"),
                      (e.spaceEvenly = "space-evenly"),
                      e
                    );
                  })({})),
                  (a.FlexDirection = (function (e) {
                    return (e.Row = "row"), (e.RowReverse = "row-reverse"), (e.Column = "column"), (e.ColumnReverse = "column-reverse"), e;
                  })({}));
                a.FLEX_DIRECTION = { ROW: "row", ROW_REVERSE: "row-reverse", COLUMN: "column", COLUMN_REVERSE: "column-reverse" };
                a.FlexWrap = (function (e) {
                  return (e.Wrap = "wrap"), (e.WrapReverse = "wrap-reverse"), (e.NoWrap = "nowrap"), e;
                })({});
                a.FLEX_WRAP = { WRAP: "wrap", WRAP_REVERSE: "wrap-reverse", NO_WRAP: "nowrap" };
                a.Display = (function (e) {
                  return (
                    (e.Block = "block"),
                    (e.Flex = "flex"),
                    (e.Grid = "grid"),
                    (e.InlineBlock = "inline-block"),
                    (e.Inline = "inline"),
                    (e.InlineFlex = "inline-flex"),
                    (e.InlineGrid = "inline-grid"),
                    (e.ListItem = "list-item"),
                    (e.None = "none"),
                    e
                  );
                })({});
                a.DISPLAY = {
                  BLOCK: "block",
                  FLEX: "flex",
                  GRID: "grid",
                  INLINE_BLOCK: "inline-block",
                  INLINE: "inline",
                  INLINE_FLEX: "inline-flex",
                  INLINE_GRID: "inline-grid",
                  LIST_ITEM: "list-item",
                  NONE: "none"
                };
                const n = (a.FRACTIONS = {
                  HALF: "1/2",
                  ONE_THIRD: "1/3",
                  TWO_THIRDS: "2/3",
                  ONE_FOURTH: "1/4",
                  TWO_FOURTHS: "2/4",
                  THREE_FOURTHS: "3/4",
                  ONE_FIFTH: "1/5",
                  TWO_FIFTHS: "2/5",
                  THREE_FIFTHS: "3/5",
                  FOUR_FIFTHS: "4/5",
                  ONE_SIXTH: "1/6",
                  TWO_SIXTHS: "2/6",
                  THREE_SIXTHS: "3/6",
                  FOUR_SIXTHS: "4/6",
                  FIVE_SIXTHS: "5/6",
                  ONE_TWELFTH: "1/12",
                  TWO_TWELFTHS: "2/12",
                  THREE_TWELFTHS: "3/12",
                  FOUR_TWELFTHS: "4/12",
                  FIVE_TWELFTHS: "5/12",
                  SIX_TWELFTHS: "6/12",
                  SEVEN_TWELFTHS: "7/12",
                  EIGHT_TWELFTHS: "8/12",
                  NINE_TWELFTHS: "9/12",
                  TEN_TWELFTHS: "10/12",
                  ELEVEN_TWELFTHS: "11/12"
                });
                a.BlockSize = (function (e) {
                  return (
                    (e.Zero = "0"),
                    (e.Half = "1/2"),
                    (e.OneThird = "1/3"),
                    (e.TwoThirds = "2/3"),
                    (e.OneFourth = "1/4"),
                    (e.TwoFourths = "2/4"),
                    (e.ThreeFourths = "3/4"),
                    (e.OneFifth = "1/5"),
                    (e.TwoFifths = "2/5"),
                    (e.ThreeFifths = "3/5"),
                    (e.FourFifths = "4/5"),
                    (e.OneSixth = "1/6"),
                    (e.TwoSixths = "2/6"),
                    (e.ThreeSixths = "3/6"),
                    (e.FourSixths = "4/6"),
                    (e.FiveSixths = "5/6"),
                    (e.OneTwelfth = "1/12"),
                    (e.TwoTwelfths = "2/12"),
                    (e.ThreeTwelfths = "3/12"),
                    (e.FourTwelfths = "4/12"),
                    (e.FiveTwelfths = "5/12"),
                    (e.SixTwelfths = "6/12"),
                    (e.SevenTwelfths = "7/12"),
                    (e.EightTwelfths = "8/12"),
                    (e.NineTwelfths = "9/12"),
                    (e.TenTwelfths = "10/12"),
                    (e.ElevenTwelfths = "11/12"),
                    (e.Screen = "screen"),
                    (e.Max = "max"),
                    (e.Min = "min"),
                    (e.Full = "full"),
                    e
                  );
                })({});
                a.BLOCK_SIZES = { ...n, SCREEN: "screen", MAX: "max", MIN: "min", FULL: "full" };
                a.TextAlign = (function (e) {
                  return (
                    (e.Left = "left"),
                    (e.Center = "center"),
                    (e.Right = "right"),
                    (e.Justify = "justify"),
                    (e.End = "end"),
                    (e.Start = "start"),
                    e
                  );
                })({});
                a.TEXT_ALIGN = { LEFT: "left", CENTER: "center", RIGHT: "right", JUSTIFY: "justify", END: "end", START: "start" };
                a.TextTransform = (function (e) {
                  return (e.Uppercase = "uppercase"), (e.Lowercase = "lowercase"), (e.Capitalize = "capitalize"), e;
                })({});
                a.TEXT_TRANSFORM = { UPPERCASE: "uppercase", LOWERCASE: "lowercase", CAPITALIZE: "capitalize" };
                a.FontWeight = (function (e) {
                  return (e.Bold = "bold"), (e.Medium = "medium"), (e.Normal = "normal"), e;
                })({});
                a.FONT_WEIGHT = { BOLD: "bold", MEDIUM: "medium", NORMAL: "normal" };
                a.OverflowWrap = (function (e) {
                  return (e.BreakWord = "break-word"), (e.Anywhere = "anywhere"), (e.Normal = "normal"), e;
                })({});
                a.OVERFLOW_WRAP = { BREAK_WORD: "break-word", ANYWHERE: "anywhere", NORMAL: "normal" };
                a.FontStyle = (function (e) {
                  return (e.Italic = "italic"), (e.Normal = "normal"), e;
                })({});
                a.FONT_STYLE = { ITALIC: "italic", NORMAL: "normal" };
                a.Severity = (function (e) {
                  return (e.Danger = "danger"), (e.Warning = "warning"), (e.Info = "info"), (e.Success = "success"), e;
                })({});
                (a.SEVERITIES = { DANGER: "danger", WARNING: "warning", INFO: "info", SUCCESS: "success" }),
                  (a.BREAKPOINTS = ["base", "sm", "md", "lg"]);
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/design-system.ts" }
    ],
    [
      4772,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.UNSENDABLE_ASSET_ERROR_KEY =
                    a.TRANSACTION_ERROR_KEY =
                    a.INVALID_ASSET_TYPE =
                    a.INSUFFICIENT_FUNDS_FOR_GAS_ERROR_KEY =
                    a.INSUFFICIENT_FUNDS_ERROR_KEY =
                    a.GAS_PRICE_FETCH_FAILURE_ERROR_KEY =
                    a.GAS_PRICE_EXCESSIVE_ERROR_KEY =
                    a.GAS_LIMIT_TOO_LOW_ERROR_KEY =
                    a.ETH_GAS_PRICE_FETCH_WARNING_KEY =
                      void 0);
                (a.INSUFFICIENT_FUNDS_ERROR_KEY = "insufficientFunds"),
                  (a.GAS_LIMIT_TOO_LOW_ERROR_KEY = "gasLimitTooLow"),
                  (a.TRANSACTION_ERROR_KEY = "transactionError"),
                  (a.ETH_GAS_PRICE_FETCH_WARNING_KEY = "ethGasPriceFetchWarning"),
                  (a.GAS_PRICE_FETCH_FAILURE_ERROR_KEY = "gasPriceFetchFailed"),
                  (a.GAS_PRICE_EXCESSIVE_ERROR_KEY = "gasPriceExcessive"),
                  (a.UNSENDABLE_ASSET_ERROR_KEY = "unsendableAsset"),
                  (a.INSUFFICIENT_FUNDS_FOR_GAS_ERROR_KEY = "insufficientFundsForGas"),
                  (a.INVALID_ASSET_TYPE = "invalidAssetType");
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/error-keys.js" }
    ],
    [
      4773,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.PRIORITY_LEVEL_ICON_MAP = a.GAS_FORM_ERRORS = void 0),
                  (a.getGasFormErrorText = function (e, t, { minimumGasLimit: a } = {}) {
                    switch (e) {
                      case n.GAS_LIMIT_OUT_OF_BOUNDS:
                        return t("editGasLimitOutOfBounds", [a]);
                      case n.MAX_PRIORITY_FEE_TOO_LOW:
                        return t("editGasMaxPriorityFeeLow");
                      case n.MAX_FEE_TOO_LOW:
                        return t("editGasMaxFeeLow");
                      case n.MAX_PRIORITY_FEE_BELOW_MINIMUM:
                        return t("editGasMaxPriorityFeeBelowMinimum");
                      case n.MAX_PRIORITY_FEE_HIGH_WARNING:
                        return t("editGasMaxPriorityFeeHigh");
                      case n.MAX_FEE_HIGH_WARNING:
                        return t("editGasMaxFeeHigh");
                      case n.MAX_FEE_IMBALANCE:
                        return t("editGasMaxFeePriorityImbalance");
                      case n.GAS_PRICE_TOO_LOW:
                        return t("editGasPriceTooLow");
                      default:
                        return "";
                    }
                  });
                const n = (a.GAS_FORM_ERRORS = {
                  GAS_LIMIT_OUT_OF_BOUNDS: "editGasLimitOutOfBounds",
                  MAX_PRIORITY_FEE_TOO_LOW: "editGasMaxPriorityFeeLow",
                  MAX_FEE_TOO_LOW: "editGasMaxFeeLow",
                  MAX_PRIORITY_FEE_BELOW_MINIMUM: "editGasMaxPriorityFeeBelowMinimum",
                  MAX_PRIORITY_FEE_HIGH_WARNING: "editGasMaxPriorityFeeHigh",
                  MAX_FEE_HIGH_WARNING: "editGasMaxFeeHigh",
                  MAX_FEE_IMBALANCE: "editGasMaxFeeImbalance",
                  GAS_PRICE_TOO_LOW: "editGasPriceTooLow"
                });
                a.PRIORITY_LEVEL_ICON_MAP = {
                  low: "🐢",
                  medium: "🦊",
                  high: "🦍",
                  dappSuggested: "🌐",
                  dappSuggestedHigh: "🌐",
                  swapSuggested: "🔄",
                  custom: "⚙️"
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/gas.js" }
    ],
    [
      4774,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.NOTIFICATIONS_EXPIRATION_DELAY = void 0);
                a.NOTIFICATIONS_EXPIRATION_DELAY = 1e4;
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/notifications.ts" }
    ],
    [
      4775,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.FIRST_TIME_FLOW_TYPES = void 0);
                a.FIRST_TIME_FLOW_TYPES = { IMPORT: "import", CREATE: "create" };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/onboarding.js" }
    ],
    [
      4777,
      { "../../components/component-library": 4453, "./routes": 4776 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.SETTINGS_CONSTANTS = void 0);
                var n = e("../../components/component-library"),
                  s = e("./routes");
                a.SETTINGS_CONSTANTS = [
                  {
                    tabMessage: (e) => e("general"),
                    sectionMessage: (e) => e("currencyConversion"),
                    descriptionMessage: (e) => e("currencyConversion"),
                    route: `${s.GENERAL_ROUTE}#currency-conversion`,
                    iconName: n.IconName.Setting
                  },
                  {
                    tabMessage: (e) => e("general"),
                    sectionMessage: (e) => e("primaryCurrencySetting"),
                    descriptionMessage: (e) => e("primaryCurrencySettingDescription"),
                    route: `${s.GENERAL_ROUTE}#primary-currency`,
                    iconName: n.IconName.Setting
                  },
                  {
                    tabMessage: (e) => e("general"),
                    sectionMessage: (e) => e("currentLanguage"),
                    descriptionMessage: (e) => e("currentLanguage"),
                    route: `${s.GENERAL_ROUTE}#current-language`,
                    iconName: n.IconName.Setting
                  },
                  {
                    tabMessage: (e) => e("general"),
                    sectionMessage: (e) => e("theme"),
                    descriptionMessage: (e) => e("themeDescription"),
                    route: `${s.GENERAL_ROUTE}#theme`,
                    icon: "fa fa-flask"
                  },
                  {
                    tabMessage: (e) => e("general"),
                    sectionMessage: (e) => e("accountIdenticon"),
                    descriptionMessage: (e) => e("accountIdenticon"),
                    route: `${s.GENERAL_ROUTE}#account-identicon`,
                    iconName: n.IconName.Setting
                  },
                  {
                    tabMessage: (e) => e("general"),
                    sectionMessage: (e) => e("hideZeroBalanceTokens"),
                    descriptionMessage: (e) => e("hideZeroBalanceTokens"),
                    route: `${s.GENERAL_ROUTE}#zero-balancetokens`,
                    iconName: n.IconName.Setting
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("stateLogs"),
                    descriptionMessage: (e) => e("stateLogsDescription"),
                    route: `${s.ADVANCED_ROUTE}#state-logs`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("clearActivity"),
                    descriptionMessage: (e) => e("clearActivityDescription"),
                    route: `${s.ADVANCED_ROUTE}#clear-activity`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("showHexData"),
                    descriptionMessage: (e) => e("showHexDataDescription"),
                    route: `${s.ADVANCED_ROUTE}#show-hexdata`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("showFiatConversionInTestnets"),
                    descriptionMessage: (e) => e("showFiatConversionInTestnetsDescription"),
                    route: `${s.ADVANCED_ROUTE}#conversion-testnetworks`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("showTestnetNetworks"),
                    descriptionMessage: (e) => e("showTestnetNetworksDescription"),
                    route: `${s.ADVANCED_ROUTE}#show-testnets`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("nonceField"),
                    descriptionMessage: (e) => e("nonceFieldDescription"),
                    route: `${s.ADVANCED_ROUTE}#customize-nonce`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("autoLockTimeLimit"),
                    descriptionMessage: (e) => e("autoLockTimeLimitDescription"),
                    route: `${s.ADVANCED_ROUTE}#autolock-timer`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("preferredLedgerConnectionType"),
                    descriptionMessage: (e) => e("preferredLedgerConnectionType"),
                    route: `${s.ADVANCED_ROUTE}#ledger-connection`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("dismissReminderField"),
                    descriptionMessage: (e) => e("dismissReminderDescriptionField"),
                    route: `${s.ADVANCED_ROUTE}#dismiss-secretrecovery`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("toggleEthSignField"),
                    descriptionMessage: (e) => e("toggleEthSignDescriptionField"),
                    route: `${s.ADVANCED_ROUTE}#toggle-ethsign`,
                    icon: "fas fa-sliders-h"
                  },
                  {
                    tabMessage: (e) => e("contacts"),
                    sectionMessage: (e) => e("contacts"),
                    descriptionMessage: (e) => e("contacts"),
                    route: s.CONTACT_LIST_ROUTE,
                    iconName: n.IconName.Book
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("revealSeedWords"),
                    descriptionMessage: (e) => e("revealSeedWords"),
                    route: `${s.SECURITY_ROUTE}#reveal-secretrecovery`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("showIncomingTransactions"),
                    descriptionMessage: (e) => e("showIncomingTransactionsDescription"),
                    route: `${s.SECURITY_ROUTE}#incoming-transaction`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("usePhishingDetection"),
                    descriptionMessage: (e) => e("usePhishingDetectionDescription"),
                    route: `${s.SECURITY_ROUTE}#phishing-detection`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("use4ByteResolution"),
                    descriptionMessage: (e) => e("use4ByteResolutionDescription"),
                    route: `${s.SECURITY_ROUTE}#decode-smart-contracts`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("participateInMetaMetrics"),
                    descriptionMessage: (e) => e("participateInMetaMetricsDescription"),
                    route: `${s.SECURITY_ROUTE}#metametrics`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("chooseYourNetwork"),
                    descriptionMessage: (e) => e("chooseYourNetworkDescription"),
                    route: `${s.SECURITY_ROUTE}#choose-your-network`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("ipfsGateway"),
                    descriptionMessage: (e) => e("ipfsGatewayDescription"),
                    route: `${s.SECURITY_ROUTE}#add-custom-ipfs-gateway`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("autoDetectTokens"),
                    descriptionMessage: (e) => e("autoDetectTokensDescription"),
                    route: `${s.SECURITY_ROUTE}#auto-detect-tokens`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("useMultiAccountBalanceChecker"),
                    descriptionMessage: (e) => e("useMultiAccountBalanceCheckerSettingDescription"),
                    route: `${s.SECURITY_ROUTE}#use-multi-account-balance-checker`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("currencyRateCheckToggle"),
                    descriptionMessage: (e) => e("currencyRateCheckToggleDescription"),
                    route: `${s.SECURITY_ROUTE}#price-checker`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("ensDomainsSettingTitle"),
                    descriptionMessage: (e) => e("ensDomainsSettingDescriptionIntroduction"),
                    route: `${s.SECURITY_ROUTE}#ens-domains`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("displayNftMedia"),
                    descriptionMessage: (e) => e("displayNftMediaDescription"),
                    route: `${s.SECURITY_ROUTE}#display-nft-media`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("securityAndPrivacy"),
                    sectionMessage: (e) => e("useNftDetection"),
                    descriptionMessage: (e) => e("useNftDetectionDescriptionText"),
                    route: `${s.SECURITY_ROUTE}#autodetect-nfts`,
                    icon: "fa fa-lock"
                  },
                  {
                    tabMessage: (e) => e("alerts"),
                    sectionMessage: (e) => e("alertSettingsUnconnectedAccount"),
                    descriptionMessage: (e) => e("alertSettingsUnconnectedAccount"),
                    route: `${s.ALERTS_ROUTE}#unconnected-account`,
                    iconName: n.IconName.Notification
                  },
                  {
                    tabMessage: (e) => e("alerts"),
                    sectionMessage: (e) => e("alertSettingsWeb3ShimUsage"),
                    descriptionMessage: (e) => e("alertSettingsWeb3ShimUsage"),
                    route: `${s.ALERTS_ROUTE}#web3-shimusage`,
                    icon: "fa fa-bell"
                  },
                  {
                    tabMessage: (e) => e("networks"),
                    sectionMessage: (e) => e("mainnet"),
                    descriptionMessage: (e) => e("mainnet"),
                    route: `${s.NETWORKS_ROUTE}#networks-mainnet`,
                    icon: "fa fa-plug"
                  },
                  {
                    tabMessage: (e) => e("networks"),
                    sectionMessage: (e) => e("lineaMainnet"),
                    descriptionMessage: (e) => e("lineaMainnet"),
                    route: `${s.NETWORKS_ROUTE}#networks-linea-mainnet`,
                    icon: "fa fa-plug"
                  },
                  {
                    tabMessage: (e) => e("networks"),
                    sectionMessage: (e) => e("goerli"),
                    descriptionMessage: (e) => e("goerli"),
                    route: `${s.NETWORKS_ROUTE}#networks-goerli`,
                    icon: "fa fa-plug"
                  },
                  {
                    tabMessage: (e) => e("networks"),
                    sectionMessage: (e) => e("sepolia"),
                    descriptionMessage: (e) => e("sepolia"),
                    route: `${s.NETWORKS_ROUTE}#networks-sepolia`,
                    icon: "fa fa-plug"
                  },
                  {
                    tabMessage: (e) => e("networks"),
                    sectionMessage: (e) => e("lineaGoerli"),
                    descriptionMessage: (e) => e("lineaGoerli"),
                    route: `${s.NETWORKS_ROUTE}#networks-linea-goerli`,
                    icon: "fa fa-plug"
                  },
                  {
                    tabMessage: (e) => e("networks"),
                    sectionMessage: (e) => e("localhost"),
                    descriptionMessage: (e) => e("localhost"),
                    route: `${s.NETWORKS_ROUTE}#networks-localhost`,
                    icon: "fa fa-plug"
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("metamaskVersion"),
                    descriptionMessage: (e) => e("builtAroundTheWorld"),
                    route: `${s.ABOUT_US_ROUTE}#version`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("links"),
                    descriptionMessage: (e) => e("links"),
                    route: `${s.ABOUT_US_ROUTE}#links`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("privacyMsg"),
                    descriptionMessage: (e) => e("privacyMsg"),
                    route: `${s.ABOUT_US_ROUTE}#privacy-policy`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("terms"),
                    descriptionMessage: (e) => e("terms"),
                    route: `${s.ABOUT_US_ROUTE}#terms`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("attributions"),
                    descriptionMessage: (e) => e("attributions"),
                    route: `${s.ABOUT_US_ROUTE}#attributions`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("supportCenter"),
                    descriptionMessage: (e) => e("supportCenter"),
                    route: `${s.ABOUT_US_ROUTE}#supportcenter`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("visitWebSite"),
                    descriptionMessage: (e) => e("visitWebSite"),
                    route: `${s.ABOUT_US_ROUTE}#visitwebsite`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("contactUs"),
                    descriptionMessage: (e) => e("contactUs"),
                    route: `${s.ABOUT_US_ROUTE}#contactus`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("about"),
                    sectionMessage: (e) => e("betaTerms"),
                    descriptionMessage: (e) => e("betaTerms"),
                    route: `${s.ABOUT_US_ROUTE}#beta-terms`,
                    iconName: n.IconName.Info
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("backupUserData"),
                    descriptionMessage: (e) => e("backupUserDataDescription"),
                    route: `${s.ADVANCED_ROUTE}#backup-userdata`,
                    icon: "fas fa-download"
                  },
                  {
                    tabMessage: (e) => e("advanced"),
                    sectionMessage: (e) => e("restoreUserData"),
                    descriptionMessage: (e) => e("restoreUserDataDescription"),
                    route: `${s.ADVANCED_ROUTE}#restore-userdata`,
                    icon: "fas fa-upload"
                  },
                  {
                    tabMessage: (e) => e("experimental"),
                    sectionMessage: (e) => e("securityAlerts"),
                    descriptionMessage: (e) => e("securityAlertsDescription"),
                    route: `${s.EXPERIMENTAL_ROUTE}#security-alerts`,
                    icon: "fa fa-flask"
                  }
                ];
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/settings.js" }
    ],
    [
      4778,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.getDelineatorTitle = a.DelineatorType = void 0);
                let n = (a.DelineatorType = (function (e) {
                  return (e.Content = "content"), (e.Error = "error"), (e.Insights = "insights"), (e.Description = "description"), e;
                })({}));
                a.getDelineatorTitle = (e) => {
                  switch (e) {
                    case n.Error:
                      return "errorWithSnap";
                    case n.Insights:
                      return "insightsFromSnap";
                    case n.Description:
                      return "descriptionFromSnap";
                    default:
                      return "contentFromSnap";
                  }
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/snaps/delineator.ts" }
    ],
    [
      4779,
      { "./delineator": 4778 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 });
                var n = e("./delineator");
                Object.keys(n).forEach(function (e) {
                  "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === n[e]) ||
                      Object.defineProperty(a, e, {
                        enumerable: !0,
                        get: function () {
                          return n[e];
                        }
                      }));
                });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/snaps/index.js" }
    ],
    [
      4780,
      { "@metamask/transaction-controller": 1835 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.TOKEN_CATEGORY_HASH = a.PRIORITY_STATUS_HASH = a.PENDING_STATUS_HASH = void 0);
                var n = e("@metamask/transaction-controller");
                const s = (a.PENDING_STATUS_HASH = {
                  [n.TransactionStatus.unapproved]: !0,
                  [n.TransactionStatus.approved]: !0,
                  [n.TransactionStatus.submitted]: !0
                });
                (a.PRIORITY_STATUS_HASH = { ...s, [n.TransactionStatus.confirmed]: !0 }),
                  (a.TOKEN_CATEGORY_HASH = {
                    [n.TransactionType.tokenMethodApprove]: !0,
                    [n.TransactionType.tokenMethodSetApprovalForAll]: !0,
                    [n.TransactionType.tokenMethodTransfer]: !0,
                    [n.TransactionType.tokenMethodTransferFrom]: !0
                  });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/transactions.js" }
    ],
    [
      4781,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                a.default = {
                  ADD_CUSTOM_TOKENS: "https://metamask.zendesk.com/hc/en-us/articles/360015489031",
                  ADD_MISSING_ACCOUNTS: "https://metamask.zendesk.com/hc/en-us/articles/360015489271",
                  BASIC_SAFETY: "https://metamask.zendesk.com/hc/en-us/articles/360015489591-Basic-Safety-Tips",
                  CUSTOMIZE_NONCE: "https://metamask.zendesk.com/hc/en-us/articles/7417499333531-How-to-customize-a-transaction-nonce",
                  HARDWARE_CONNECTION:
                    "https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet",
                  IMPORT_ACCOUNTS: "https://metamask.zendesk.com/hc/en-us/articles/360015489331",
                  IMPORTED_ACCOUNTS: "https://metamask.zendesk.com/hc/en-us/articles/360015289932",
                  INFURA_BLOCKAGE: "https://metamask.zendesk.com/hc/en-us/articles/360059386712",
                  LEDGER_FIREFOX_U2F_GUIDE:
                    "https://support.ledger.com/hc/en-us/articles/10371387758493-MetaMask-Firefox-Ledger-Integration-Issue?support=true",
                  LEGACY_WEB3: "https://metamask.zendesk.com/hc/en-us/articles/360053147012",
                  NFT_TOKENS: "https://metamask.zendesk.com/hc/en-us/articles/360058238591-NFT-tokens-in-MetaMask-wallet",
                  PASSWORD_AND_SRP_ARTICLE: "https://metamask.zendesk.com/hc/en-us/articles/4404722782107",
                  SECRET_RECOVERY_PHRASE:
                    "https://metamask.zendesk.com/hc/en-us/articles/360060826432-What-is-a-Secret-Recovery-Phrase-and-how-to-keep-your-crypto-wallet-secure",
                  NON_CUSTODIAL_WALLET: "https://metamask.zendesk.com/hc/en-us/articles/360059952212-MetaMask-is-a-non-custodial-wallet",
                  SPEEDUP_CANCEL:
                    "https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-speed-up-or-cancel-a-pending-transaction",
                  SUPPORT_URL: "https://support.metamask.io/hc/en-us",
                  TOKEN_ALLOWANCE_WITH_SPENDING_CAP:
                    "https://support.metamask.io/hc/en-us/articles/6055177143579-How-to-customize-token-approvals-with-a-spending-cap",
                  TOKEN_SAFETY_PRACTICES: "https://metamask.zendesk.com/hc/en-us/articles/4403988839451",
                  UNKNOWN_NETWORK: "https://metamask.zendesk.com/hc/en-us/articles/4417500466971",
                  USER_GUIDE_CUSTOM_NETWORKS: "https://metamask.zendesk.com/hc/en-us/articles/4404424659995",
                  USER_GUIDE_DAPPS: "https://metamask.zendesk.com/hc/en-us/articles/4405506066331-User-guide-Dapps",
                  USER_GUIDE_GAS: "https://metamask.zendesk.com/hc/en-us/articles/4404600179227-User-Guide-Gas",
                  VERIFY_CUSTOM_NETWORK: "https://metamask.zendesk.com/hc/en-us/articles/360057142392"
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/constants/zendesk-url.js" }
    ],
    [
      4782,
      { "../../constants/routes": 4776, "prop-types": 3450, react: 3690, "react-router-dom": 3675 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = c);
                var n = i(e("react")),
                  s = i(e("prop-types")),
                  r = e("react-router-dom"),
                  o = e("../../constants/routes");
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  const { isUnlocked: t, completedOnboarding: a } = e;
                  switch (!0) {
                    case t && a:
                      return n.default.createElement(r.Route, e);
                    case !a:
                      return n.default.createElement(r.Redirect, { to: { pathname: o.ONBOARDING_ROUTE } });
                    default:
                      return n.default.createElement(r.Redirect, { to: { pathname: o.UNLOCK_ROUTE } });
                  }
                }
                c.propTypes = { isUnlocked: s.default.bool, completedOnboarding: s.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/authenticated/authenticated.component.js" }
    ],
    [
      4783,
      { "./authenticated.component": 4782, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  s = e("react-redux"),
                  r = (n = e("./authenticated.component")) && n.__esModule ? n : { default: n };
                a.default = (0, s.connect)((e) => {
                  const {
                    metamask: { isUnlocked: t, completedOnboarding: a }
                  } = e;
                  return { isUnlocked: t, completedOnboarding: a };
                })(r.default);
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/authenticated/authenticated.container.js" }
    ],
    [
      4784,
      { "./authenticated.container": 4783 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./authenticated.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/authenticated/index.js" }
    ],
    [
      4785,
      { "prop-types": 3450, react: 3690, "react-router-dom": 3675 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = i);
                var n = o(e("react")),
                  s = o(e("prop-types")),
                  r = e("react-router-dom");
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i({ flag: e, redirectRoute: t, ...a }) {
                  return e ? n.default.createElement(r.Route, a) : n.default.createElement(r.Redirect, { to: { pathname: t } });
                }
                i.propTypes = { flag: s.default.bool.isRequired, redirectRoute: s.default.string.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/feature-toggled-route.js" }
    ],
    [
      4786,
      { "./initialized.container": 4788 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./initialized.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/initialized/index.js" }
    ],
    [
      4787,
      { "../../constants/routes": 4776, "prop-types": 3450, react: 3690, "react-router-dom": 3675 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = c);
                var n = i(e("react")),
                  s = i(e("prop-types")),
                  r = e("react-router-dom"),
                  o = e("../../constants/routes");
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  return e.completedOnboarding
                    ? n.default.createElement(r.Route, e)
                    : n.default.createElement(r.Redirect, { to: { pathname: o.ONBOARDING_ROUTE } });
                }
                c.propTypes = { completedOnboarding: s.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/initialized/initialized.component.js" }
    ],
    [
      4788,
      { "./initialized.component": 4787, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  s = e("react-redux"),
                  r = (n = e("./initialized.component")) && n.__esModule ? n : { default: n };
                a.default = (0, s.connect)((e) => {
                  const {
                    metamask: { completedOnboarding: t }
                  } = e;
                  return { completedOnboarding: t };
                })(r.default);
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/initialized/initialized.container.js" }
    ],
    [
      4789,
      { "./with-modal-props": 4790 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./with-modal-props")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/with-modal-props/index.js" }
    ],
    [
      4790,
      { "../../../store/actions": 5204, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function (e) {
                    return (0, n.connect)(r, o)(e);
                  });
                var n = e("react-redux"),
                  s = e("../../../store/actions");
                const r = (e) => {
                    const { appState: t } = e,
                      { props: a } = t.modal.modalState;
                    return { ...a };
                  },
                  o = (e) => ({ hideModal: () => e((0, s.hideModal)()) });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/higher-order-components/with-modal-props/with-modal-props.js" }
    ],
    [
      4791,
      { "../../../shared/constants/network": 3963, "../../components/component-library": 4453, "../constants/design-system": 4771 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getAccountNameErrorMessage = function (e, t, a, s) {
                    const r = e.some((e) => e.name.toLowerCase() === a.toLowerCase()),
                      o = "" === a,
                      i = t.t("newAccountNumberName").replace(" $1", ""),
                      c = new RegExp(`^\\s*${i} \\d+\\s*$`, "iu").test(a),
                      u = a.toLowerCase() === s.toLowerCase() || (!r && !c && !o);
                    let l;
                    u
                      ? (l = n.InvisibleCharacter)
                      : r
                      ? (l = t.t("accountNameDuplicate"))
                      : c
                      ? (l = t.t("accountNameReserved"))
                      : o && (l = t.t("required"));
                    return { isValidAccountName: u, errorMessage: l };
                  }),
                  (a.getAvatarNetworkColor = function (e) {
                    switch (e) {
                      case s.GOERLI_DISPLAY_NAME:
                        return r.BackgroundColor.goerli;
                      case s.LINEA_GOERLI_DISPLAY_NAME:
                        return r.BackgroundColor.lineaGoerli;
                      case s.SEPOLIA_DISPLAY_NAME:
                        return r.BackgroundColor.sepolia;
                      default:
                        return undefined;
                    }
                  });
                var n = e("../../components/component-library"),
                  s = e("../../../shared/constants/network"),
                  r = e("../constants/design-system");
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/accounts.js" }
    ],
    [
      4793,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.camelCaseToCapitalize = function (e = "") {
                    return e.replace(/([A-Z])/gu, " $1").replace(/^./u, (e) => e.toUpperCase());
                  });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/common.util.js" }
    ],
    [
      4794,
      {
        "../../../shared/constants/common": 3955,
        "../../../shared/modules/Numeric": 3984,
        "bignumber.js": 2283,
        "currency-formatter": 2551,
        "currency-formatter/currencies": 2550
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.addEth = function (e, ...t) {
                    return t.reduce((e, t) => e.add(new o.Numeric(t, 10)).round(6), new o.Numeric(e, 10)).toString();
                  }),
                  (a.addFiat = function (e, ...t) {
                    return t.reduce((e, t) => e.add(new o.Numeric(t, 10)).round(2), new o.Numeric(e, 10)).toString();
                  }),
                  (a.areDappSuggestedAndTxParamGasFeesTheSame = function (e) {
                    const { txParams: t, dappSuggestedGasFees: a } = e ?? {},
                      { gasPrice: n, maxFeePerGas: s, maxPriorityFeePerGas: r } = t || {},
                      { gasPrice: o, maxFeePerGas: i, maxPriorityFeePerGas: c } = a || {},
                      u = !o && !i && !c;
                    if ((!n && !s && !r) || u) return !1;
                    const l = n && n === o,
                      d = [s, r].every((e) => e === o),
                      p = s && s === i && r === c;
                    return Boolean(l || d || p);
                  }),
                  (a.convertTokenToFiat = function ({
                    value: e,
                    fromCurrency: t = i.EtherDenomination.ETH,
                    toCurrency: a,
                    conversionRate: n,
                    contractExchangeRate: s
                  }) {
                    const r = n * s;
                    let c = new o.Numeric(e, 10);
                    t !== a && r && (c = c.applyConversionRate(r));
                    return c.round(2).toString();
                  }),
                  (a.formatCurrency = function (e, t) {
                    const a = t.toUpperCase();
                    return s.default.find((e) => e.code === a) ? n.default.format(Number(e), { code: a }) : e;
                  }),
                  (a.getHexGasTotal = function ({ gasLimit: e = "0x0", gasPrice: t = "0x0" }) {
                    return new o.Numeric(e, 16).times(new o.Numeric(t, 16)).toPrefixedHexString();
                  }),
                  (a.getTransactionFee = function ({
                    value: e,
                    fromCurrency: t = i.EtherDenomination.ETH,
                    toCurrency: a,
                    conversionRate: n,
                    numberOfDecimals: s
                  }) {
                    let r = new o.Numeric(e, 16, i.EtherDenomination.WEI).toDenomination(i.EtherDenomination.ETH).toBase(10);
                    t !== a && n && (r = r.applyConversionRate(n));
                    return r.round(s).toString();
                  }),
                  (a.roundExponential = function (e) {
                    const t = new r.BigNumber(e);
                    return t.e > 20 ? t.toPrecision(4) : e;
                  });
                var n = c(e("currency-formatter")),
                  s = c(e("currency-formatter/currencies")),
                  r = e("bignumber.js"),
                  o = e("../../../shared/modules/Numeric"),
                  i = e("../../../shared/constants/common");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/confirm-tx.util.ts" }
    ],
    [
      4795,
      { buffer: 2392 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                (function (e) {
                  (function () {
                    Object.defineProperty(a, "__esModule", { value: !0 }),
                      (a.ExportableContentType = void 0),
                      (a.exportAsFile = async function (t, a, s) {
                        if (!n[s]) throw new Error(`Unsupported file type: ${s}`);
                        "undefined" != typeof window && void 0 !== window.showSaveFilePicker && void 0 !== window.Blob
                          ? await (async function (e, t, a) {
                              const s = new window.Blob([t], { contentType: a }),
                                r = n[a],
                                o = await window.showSaveFilePicker({
                                  suggestedName: e,
                                  types: [{ description: e, accept: { [a]: [r] } }]
                                }),
                                i = await o.createWritable();
                              await i.write(s), await i.close();
                            })(t, a, s)
                          : (function (t, a, n) {
                              const s = e.from(a, "utf8").toString("base64"),
                                r = document.createElement("a");
                              (r.href = `data:${n};Base64,${s}`),
                                (r.download = t),
                                document.body.appendChild(r),
                                r.click(),
                                document.body.removeChild(r);
                            })(t, a, s);
                      });
                    const t = (a.ExportableContentType = { JSON: "application/json", TXT: "text/plain" }),
                      n = { [t.JSON]: ".json", [t.TXT]: ".txt" };
                  }).call(this);
                }).call(this, e("buffer").Buffer);
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/export-utils.js" }
    ],
    [
      4796,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.formatETHFee = function (e, t = "ETH") {
                    return `${e} ${t}`;
                  });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/formatters.js" }
    ],
    [
      4797,
      {
        "../../../shared/constants/gas": 3957,
        "../../../shared/modules/Numeric": 3984,
        "../../../shared/modules/conversion.utils": 3988,
        "./util": 4812,
        "bignumber.js": 2283,
        lodash: 3312
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.addTenPercentAndRound = d),
                  (a.editGasModeIsSpeedUpOrCancel = function (e) {
                    return e === o.EditGasModes.cancel || e === o.EditGasModes.speedUp;
                  }),
                  (a.formatGasFeeOrFeeRange = function (e, { precision: t = 2 } = {}) {
                    if ((0, u.isNullish)(e) || (Array.isArray(e) && 0 === e.length)) return null;
                    const a = Array.isArray(e) ? e.slice(0, 2) : [e],
                      n = Array.isArray(t) ? t.slice(0, 2) : (0, s.times)(a.length, (0, s.constant)(t));
                    return `${(0, s.uniq)(
                      (0, s.zip)(a, n).map(([e, t]) => (t === undefined ? e : (0, u.roundToDecimalPlacesRemovingExtraZeroes)(e, t)))
                    ).join(" - ")} GWEI`;
                  }),
                  (a.gasEstimateGreaterThanGasUsedPlusTenPercent = void 0),
                  (a.isMetamaskSuggestedGasEstimate = function (e) {
                    return [o.GasRecommendations.high, o.GasRecommendations.medium, o.GasRecommendations.low].includes(e);
                  });
                var n,
                  s = e("lodash"),
                  r = (n = e("bignumber.js")) && n.__esModule ? n : { default: n },
                  o = e("../../../shared/constants/gas"),
                  i = e("../../../shared/modules/conversion.utils"),
                  c = e("../../../shared/modules/Numeric"),
                  u = e("./util");
                const l = new c.Numeric(1.1, 10);
                function d(e) {
                  return e === undefined ? undefined : new c.Numeric(e, 16).times(l).round(0).toPrefixedHexString();
                }
                a.gasEstimateGreaterThanGasUsedPlusTenPercent = (e, t, a) => {
                  var n;
                  let { maxFeePerGas: s } = e;
                  s = new r.default((0, i.hexWEIToDecGWEI)(d(s)));
                  const o = null === (n = t[a]) || void 0 === n ? void 0 : n.suggestedMaxFeePerGas;
                  return (0, u.bnGreaterThan)(o, s);
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/gas.js" }
    ],
    [
      4798,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.isHardwareKeyring = function (e = "") {
                    return e.includes("Hardware");
                  });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/hardware.js" }
    ],
    [
      4799,
      { "../../../shared/constants/network": 3963, "../../../shared/modules/i18n": 3994, "@sentry/browser": 1982, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getMessage = void 0),
                  (a.getNetworkLabelKey = function (e) {
                    if (e === i.NETWORK_TYPES.LINEA_GOERLI) return "lineaGoerli";
                    if (e === i.NETWORK_TYPES.LINEA_MAINNET) return "lineaMainnet";
                    return e;
                  });
                var n,
                  s = (n = e("react")) && n.__esModule ? n : { default: n },
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = c(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("@sentry/browser")),
                  o = e("../../../shared/modules/i18n"),
                  i = e("../../../shared/constants/network");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (c = function (e) {
                    return e ? a : t;
                  })(e);
                }
                a.getMessage = (e, t, a, n) => {
                  const i = (null == n ? void 0 : n.some((e) => null !== e && ("function" == typeof e || "object" == typeof e)))
                    ? (e) => s.default.createElement("span", null, " ", e, " ")
                    : undefined;
                  return (0, o.getMessage)(
                    e,
                    t,
                    a,
                    n,
                    (e) => {
                      r.captureException(e);
                    },
                    i
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/i18n-helper.tsx" }
    ],
    [
      4800,
      { "../../../shared/modules/hexstring-utils": 3993 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function (e) {
                    s || (s = new r(e));
                    return s;
                  });
                var n = e("../../../shared/modules/hexstring-utils");
                let s;
                function r(e) {
                  (this.jazzicon = e), (this.cache = {});
                }
                (r.prototype.iconForAddress = function (e, t, a) {
                  return (function (e, t) {
                    return (0, n.isValidHexAddress)(e, { allowNonPrefixed: !1 }) && t && t.iconUrl;
                  })(e, a)
                    ? (function (e = {}) {
                        const t = document.createElement("img");
                        return (t.src = null == e ? void 0 : e.iconUrl), (t.style.width = "100%"), t;
                      })(a)
                    : this.generateIdenticonSvg(e, t);
                }),
                  (r.prototype.generateIdenticonSvg = function (e, t) {
                    const a = `${e}:${t}`;
                    return (this.cache[a] || (this.cache[a] = this.generateNewIdenticon(e, t))).cloneNode(!0);
                  }),
                  (r.prototype.generateNewIdenticon = function (e, t) {
                    const a = (function (e) {
                      const t = e.slice(2, 10);
                      return parseInt(t, 16);
                    })(e);
                    return this.jazzicon(t, a);
                  });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/icon-factory.js" }
    ],
    [
      4801,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                a.default = () => window.matchMedia("screen and (max-width: 575px)").matches;
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/is-mobile-view.js" }
    ],
    [
      4803,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.getNftImageAlt = void 0);
                a.getNftImageAlt = ({ name: e, tokenId: t, description: a }) => a ?? `${e} ${t}`;
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/nfts.js" }
    ],
    [
      4806,
      {
        "../../../shared/constants/permissions": 3964,
        "../../components/component-library": 4453,
        "../../components/ui/tooltip": 4736,
        "../constants/design-system": 4771,
        "./util": 4812,
        "@metamask/controller-utils": 1056,
        "@metamask/snaps-controllers": 1622,
        "@metamask/snaps-utils": 1795,
        classnames: 2414,
        "deep-freeze-strict": 2559,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getPermissionDescription = a.PERMISSION_DESCRIPTIONS = void 0),
                  (a.getRightIcon = function ({ rightIcon: e, description: t, weight: a }) {
                    if (e && t)
                      return s.default.createElement(
                        l.default,
                        {
                          wrapperClassName: (0, c.default)("permission__tooltip-icon", 1 === a && "permission__tooltip-icon__warning"),
                          html: s.default.createElement("div", null, t),
                          position: "bottom"
                        },
                        "string" == typeof e ? s.default.createElement("i", { className: e }) : e
                      );
                    if (e)
                      return "string" == typeof e
                        ? s.default.createElement("i", { className: (0, c.default)(e, "permission__tooltip-icon") })
                        : e;
                    return null;
                  }),
                  (a.getWeightedPermissions = function (e, t, a) {
                    return Object.entries(t)
                      .reduce((t, [n, s]) => t.concat(_({ t: e, permissionName: n, permissionValue: s, targetSubjectMetadata: a })), [])
                      .sort((e, t) => e.weight - t.weight);
                  });
                var n = f(e("deep-freeze-strict")),
                  s = f(e("react")),
                  r = e("@metamask/snaps-controllers"),
                  o = e("@metamask/snaps-utils"),
                  i = e("@metamask/controller-utils"),
                  c = f(e("classnames")),
                  u = e("../../../shared/constants/permissions"),
                  l = f(e("../../components/ui/tooltip")),
                  d = e("../../components/component-library"),
                  p = e("../constants/design-system"),
                  m = e("./util");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const g = Symbol("unknown"),
                  T = s.default.createElement(d.Icon, { name: d.IconName.Info, size: d.IconSize.Sm, color: p.IconColor.iconMuted });
                function h(e) {
                  return s.default.createElement(d.AvatarIcon, {
                    iconName: e,
                    size: d.AvatarIconSize.Sm,
                    iconProps: { size: d.IconSize.Xs }
                  });
                }
                function v(e) {
                  return s.default.createElement(
                    d.Text,
                    { fontWeight: p.FontWeight.Medium, variant: p.TextVariant.inherit, color: p.TextColor.inherit },
                    (0, m.getSnapName)(null == e ? void 0 : e.origin, e)
                  );
                }
                const y = (a.PERMISSION_DESCRIPTIONS = (0, n.default)({
                    [u.RestrictedMethods.eth_accounts]: ({ t: e }) => ({
                      label: e("permission_ethereumAccounts"),
                      leftIcon: h(d.IconName.Eye),
                      rightIcon: null,
                      weight: 2
                    }),
                    [u.RestrictedMethods.snap_dialog]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_dialog"),
                      description: e("permission_dialogDescription", [v(t)]),
                      leftIcon: d.IconName.Messages,
                      weight: 3
                    }),
                    [u.RestrictedMethods.snap_notify]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_notifications"),
                      description: e("permission_notificationsDescription", [v(t)]),
                      leftIcon: d.IconName.Notification,
                      weight: 3
                    }),
                    [u.RestrictedMethods.snap_getBip32PublicKey]: ({ t: e, permissionValue: t, targetSubjectMetadata: a }) =>
                      t.caveats[0].value.map(({ path: t, curve: n }, r) => {
                        var o;
                        const i = {
                            leftIcon: d.IconName.SecuritySearch,
                            weight: 1,
                            id: `public-key-access-bip32-${
                              null === (o = t.join("-")) || void 0 === o ? void 0 : o.replace(/'/gu, "h")
                            }-${n}-${r}`,
                            warningMessageSubject:
                              (0, m.getSnapDerivationPathName)(t, n) ?? `${e("unknownNetworkForKeyEntropy")}  ${t.join("/")} (${n})`
                          },
                          c = (0, m.getSnapDerivationPathName)(t, n);
                        return c
                          ? {
                              ...i,
                              label: e("permission_viewNamedBip32PublicKeys", [
                                s.default.createElement(
                                  d.Text,
                                  {
                                    color: p.TextColor.inherit,
                                    variant: p.TextVariant.inherit,
                                    fontWeight: p.FontWeight.Medium,
                                    key: t.join("/")
                                  },
                                  c
                                )
                              ]),
                              description: e("permission_viewBip32PublicKeysDescription", [
                                s.default.createElement(
                                  d.Text,
                                  {
                                    color: p.TextColor.inherit,
                                    variant: p.TextVariant.inherit,
                                    fontWeight: p.FontWeight.Medium,
                                    key: `description-${t.join("/")}`
                                  },
                                  c
                                )
                              ])
                            }
                          : {
                              ...i,
                              label: e("permission_viewBip32PublicKeys", [
                                s.default.createElement(
                                  d.Text,
                                  {
                                    color: p.TextColor.inherit,
                                    variant: p.TextVariant.inherit,
                                    fontWeight: p.FontWeight.Medium,
                                    key: t.join("/")
                                  },
                                  `${e("unknownNetworkForKeyEntropy")} `,
                                  " ",
                                  t.join("/")
                                ),
                                n
                              ]),
                              description: e("permission_viewBip32PublicKeysDescription", [
                                s.default.createElement(
                                  d.Text,
                                  {
                                    color: p.TextColor.inherit,
                                    variant: p.TextVariant.inherit,
                                    fontWeight: p.FontWeight.Medium,
                                    key: `description-${t.join("/")}`
                                  },
                                  t.join("/")
                                ),
                                v(a)
                              ])
                            };
                      }),
                    [u.RestrictedMethods.snap_getBip32Entropy]: ({ t: e, permissionValue: t, targetSubjectMetadata: a }) =>
                      t.caveats[0].value.map(({ path: t, curve: n }, r) => {
                        var o;
                        const i = {
                            leftIcon: d.IconName.Key,
                            weight: 1,
                            id: `key-access-bip32-${null === (o = t.join("-")) || void 0 === o ? void 0 : o.replace(/'/gu, "h")}-${n}-${r}`,
                            warningMessageSubject:
                              (0, m.getSnapDerivationPathName)(t, n) || `${e("unknownNetworkForKeyEntropy")} ${t.join("/")} (${n})`
                          },
                          c = (0, m.getSnapDerivationPathName)(t, n);
                        return c
                          ? {
                              ...i,
                              label: e("permission_manageBip32Keys", [
                                s.default.createElement(
                                  d.Text,
                                  {
                                    color: p.TextColor.inherit,
                                    variant: p.TextVariant.inherit,
                                    fontWeight: p.FontWeight.Medium,
                                    key: t.join("/")
                                  },
                                  c
                                )
                              ]),
                              description: e("permission_manageBip44AndBip32KeysDescription", [v(a)])
                            }
                          : {
                              ...i,
                              label: e("permission_manageBip32Keys", [
                                s.default.createElement(
                                  d.Text,
                                  {
                                    color: p.TextColor.inherit,
                                    variant: p.TextVariant.inherit,
                                    fontWeight: p.FontWeight.Medium,
                                    key: t.join("/")
                                  },
                                  `${e("unknownNetworkForKeyEntropy")} ${t.join("/")} (${n})`
                                )
                              ]),
                              description: e("permission_manageBip44AndBip32KeysDescription", [v(a)])
                            };
                      }),
                    [u.RestrictedMethods.snap_getBip44Entropy]: ({ t: e, permissionValue: t, targetSubjectMetadata: a }) =>
                      t.caveats[0].value.map(({ coinType: t }, n) => ({
                        label: e("permission_manageBip44Keys", [
                          s.default.createElement(
                            d.Text,
                            {
                              color: p.TextColor.inherit,
                              variant: p.TextVariant.inherit,
                              fontWeight: p.FontWeight.Medium,
                              key: `coin-type-${t}`
                            },
                            (0, m.coinTypeToProtocolName)(t) || `${e("unknownNetworkForKeyEntropy")} m/44'/${t}'`
                          )
                        ]),
                        description: e("permission_manageBip44AndBip32KeysDescription", [v(a)]),
                        leftIcon: d.IconName.Key,
                        weight: 1,
                        id: `key-access-bip44-${t}-${n}`,
                        warningMessageSubject: (0, m.coinTypeToProtocolName)(t) || `${e("unknownNetworkForKeyEntropy")} m/44'/${t}'`
                      })),
                    [u.RestrictedMethods.snap_getEntropy]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_getEntropy", [v(t)]),
                      description: e("permission_getEntropyDescription", [v(t)]),
                      leftIcon: d.IconName.SecurityKey,
                      weight: 3
                    }),
                    [u.RestrictedMethods.snap_manageState]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_manageState"),
                      description: e("permission_manageStateDescription", [v(t)]),
                      leftIcon: d.IconName.AddSquare,
                      weight: 3
                    }),
                    [u.RestrictedMethods.snap_getLocale]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_getLocale"),
                      description: e("permission_getLocaleDescription", [v(t)]),
                      leftIcon: d.IconName.Global,
                      weight: 3
                    }),
                    [u.RestrictedMethods.wallet_snap]: ({ t: e, permissionValue: t, targetSubjectMetadata: a }) => {
                      const n = t.caveats[0].value,
                        r = { leftIcon: h(d.IconName.Flash), rightIcon: T };
                      return Object.keys(n).map((t) => {
                        const n = (0, m.getSnapName)(t, a);
                        return n
                          ? {
                              ...r,
                              label: e("permission_accessNamedSnap", [
                                s.default.createElement(
                                  d.Text,
                                  { color: p.TextColor.inherit, variant: p.TextVariant.inherit, fontWeight: p.FontWeight.Medium, key: t },
                                  n
                                )
                              ]),
                              description: e("permission_accessSnapDescription", [n])
                            }
                          : { ...r, label: e("permission_accessSnap", [t]), description: e("permission_accessSnapDescription", [t]) };
                      });
                    },
                    [u.EndowmentPermissions["endowment:network-access"]]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_accessNetwork"),
                      description: e("permission_accessNetworkDescription", [v(t)]),
                      leftIcon: d.IconName.Wifi,
                      weight: 2
                    }),
                    [u.EndowmentPermissions["endowment:webassembly"]]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_webAssembly"),
                      description: e("permission_webAssemblyDescription", [v(t)]),
                      leftIcon: d.IconName.DocumentCode,
                      rightIcon: null,
                      weight: 2
                    }),
                    [u.EndowmentPermissions["endowment:transaction-insight"]]: ({ t: e, permissionValue: t, targetSubjectMetadata: a }) => {
                      const n = { leftIcon: d.IconName.Speedometer, weight: 3 },
                        s = [
                          {
                            ...n,
                            label: e("permission_transactionInsight"),
                            description: e("permission_transactionInsightDescription", [v(a)])
                          }
                        ];
                      return (
                        (0, i.isNonEmptyArray)(t.caveats) &&
                          t.caveats[0].type === o.SnapCaveatType.TransactionOrigin &&
                          t.caveats[0].value &&
                          s.push({
                            ...n,
                            label: e("permission_transactionInsightOrigin"),
                            description: e("permission_transactionInsightOriginDescription", [v(a)]),
                            leftIcon: d.IconName.Explore
                          }),
                        s
                      );
                    },
                    [u.EndowmentPermissions["endowment:cronjob"]]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_cronjob"),
                      description: e("permission_cronjobDescription", [v(t)]),
                      leftIcon: d.IconName.Clock,
                      weight: 2
                    }),
                    [u.EndowmentPermissions["endowment:ethereum-provider"]]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_ethereumProvider"),
                      description: e("permission_ethereumProviderDescription", [v(t)]),
                      leftIcon: d.IconName.Ethereum,
                      weight: 2,
                      id: "ethereum-provider-access",
                      message: e("ethereumProviderAccess", [v(t)])
                    }),
                    [u.EndowmentPermissions["endowment:rpc"]]: ({ t: e, permissionValue: t, targetSubjectMetadata: a }) => {
                      const n = { leftIcon: d.IconName.Hierarchy, weight: 2 },
                        { snaps: o, dapps: i, allowedOrigins: c } = (0, r.getRpcCaveatOrigins)(t),
                        u = [];
                      if (
                        (o &&
                          u.push({
                            ...n,
                            label: e("permission_rpc", [e("otherSnaps"), v(a)]),
                            description: e("permission_rpcDescription", [e("otherSnaps"), v(a)])
                          }),
                        i &&
                          u.push({
                            ...n,
                            label: e("permission_rpc", [e("websites"), v(a)]),
                            description: e("permission_rpcDescription", [e("websites"), v(a)])
                          }),
                        (null == c ? void 0 : c.length) > 0)
                      ) {
                        let t;
                        if (1 === c.length)
                          t = s.default.createElement(
                            d.Text,
                            { color: p.TextColor.inherit, variant: p.TextVariant.inherit, fontWeight: p.FontWeight.Medium },
                            c[0]
                          );
                        else {
                          const a = c.slice(-1);
                          t = e("permission_rpcDescriptionOriginList", [
                            c
                              .slice(0, -1)
                              .map((e) =>
                                s.default.createElement(
                                  s.default.Fragment,
                                  null,
                                  s.default.createElement(
                                    d.Text,
                                    { color: p.TextColor.inherit, variant: p.TextVariant.inherit, fontWeight: p.FontWeight.Medium },
                                    e
                                  ),
                                  ", "
                                )
                              ),
                            s.default.createElement(
                              d.Text,
                              { color: p.TextColor.inherit, variant: p.TextVariant.inherit, fontWeight: p.FontWeight.Medium, key: "2" },
                              a
                            )
                          ]);
                        }
                        u.push({ ...n, label: e("permission_rpc", [t, v(a)]), description: e("permission_rpcDescription", [t, v(a)]) });
                      }
                      return u;
                    },
                    [u.EndowmentPermissions["endowment:lifecycle-hooks"]]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_lifecycleHooks"),
                      description: e("permission_lifecycleHooksDescription", [v(t)]),
                      leftIcon: d.IconName.Hierarchy,
                      weight: 3
                    }),
                    [u.EndowmentPermissions["endowment:page-home"]]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_homePage"),
                      description: e("permission_homePageDescription", [v(t)]),
                      leftIcon: d.IconName.Home,
                      weight: 3
                    }),
                    [u.RestrictedMethods.snap_manageAccounts]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_manageAccounts"),
                      description: e("permission_manageAccountsDescription", [v(t)]),
                      leftIcon: h(d.IconName.UserCircleAdd),
                      rightIcon: null,
                      weight: 2
                    }),
                    [u.EndowmentPermissions["endowment:keyring"]]: ({ t: e, targetSubjectMetadata: t }) => ({
                      label: e("permission_keyring"),
                      description: e("permission_keyringDescription", [v(t)]),
                      leftIcon: h(d.IconName.UserCircleAdd),
                      rightIcon: null,
                      weight: 2
                    }),
                    [g]: ({ t: e, permissionName: t }) => ({
                      label: e("permission_unknown", [t ?? "undefined"]),
                      leftIcon: h(d.IconName.Question),
                      rightIcon: null,
                      weight: 4
                    })
                  })),
                  _ = ({ t: e, permissionName: t, permissionValue: a, targetSubjectMetadata: n }) => {
                    let s = y[g];
                    Object.hasOwnProperty.call(y, t) && (s = y[t]);
                    const r = s({ t: e, permissionName: t, permissionValue: a, targetSubjectMetadata: n });
                    return Array.isArray(r)
                      ? r.map((e) => ({ ...e, permissionName: t, permissionValue: a }))
                      : [{ ...r, permissionName: t, permissionValue: a }];
                  };
                a.getPermissionDescription = _;
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/permission.js" }
    ],
    [
      4807,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getPortfolioUrl = function (e = "", t = "", a = "") {
                    return `https://portfolio.metamask.io/${e}?metamaskEntry=${t}&metametricsId=${a}`;
                  });
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/portfolio.js" }
    ],
    [
      4808,
      { "../constants/settings": 4777, _process: 3445 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                (function (t) {
                  (function () {
                    Object.defineProperty(a, "__esModule", { value: !0 }),
                      (a.getNumberOfSettingsInSection = function (e, t) {
                        return o(e, t).length;
                      }),
                      (a.getSettingsRoutes = r),
                      (a.handleSettingsRefs = function (e, t, a) {
                        const n = o(e, t),
                          s = n.findIndex((e) => e.route.substring(1) === window.location.hash.substring(1));
                        if (-1 === s) return;
                        const r = 1 === n.length ? a : a[s];
                        if (null != r && r.current) {
                          r.current.scrollIntoView({ behavior: "smooth" }), r.current.focus();
                          const e = window.location.hash.split("#")[1];
                          window.location.hash = e;
                        }
                      }),
                      (a.highlightSearchedText = function () {
                        const e = document.getElementById("search-settings"),
                          t = new RegExp(e.value, "gi");
                        [...document.querySelectorAll(".settings-page__header__search__list__item")].forEach((e) => {
                          const a = e.querySelector(".settings-page__header__search__list__item__tab"),
                            n = e.querySelector(".settings-page__header__search__list__item__section");
                          i(a, t), i(n, t);
                        });
                      });
                    var n = e("../constants/settings");
                    let s;
                    function r() {
                      return s || ((s = n.SETTINGS_CONSTANTS.filter((e) => !e.featureFlag || t.env[e.featureFlag])), s);
                    }
                    function o(e, t) {
                      return r().filter((a) => a.tabMessage(e) === t);
                    }
                    function i(e, t) {
                      if (null !== e) {
                        let a = e.innerHTML;
                        (a = a.replace("&amp;", "&")),
                          (a = a.replace(/(<span style="background:#ffd33d">|<\/span>)/gim, "")),
                          (e.innerHTML = a.replace(t, '<span style="background:#ffd33d">$&</span>'));
                      }
                    }
                  }).call(this);
                }).call(this, e("_process"));
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/settings-search.js" }
    ],
    [
      4809,
      {
        "../../../shared/constants/transaction": 3974,
        "../../../shared/lib/metamask-controller-utils": 3977,
        "../../../shared/lib/transactions-controller-utils": 3982,
        "../../../shared/modules/Numeric": 3984,
        "../../../shared/modules/string-utils": 4002,
        "../../../shared/modules/transaction.utils": 4004,
        "../../store/actions": 5204,
        "./confirm-tx.util": 4794,
        "./util": 4812,
        loglevel: 3322
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getAssetDetails = async function (e, t, a, n) {
                    var d, p, m;
                    const f = (0, i.parseStandardTokenTransactionData)(a);
                    if (!f) throw new Error("Unable to detect valid token data");
                    let g = (null === (d = E(f)) || void 0 === d ? void 0 : d.toString()) ?? (0, u.getTokenValueParam)(f);
                    const T = _(f);
                    let h;
                    if (null != n && n.length && g) {
                      const t = n.find(({ address: t, tokenId: a }) => (0, o.isEqualCaseInsensitive)(e, t) && a === g);
                      if (t && (t.name || t.symbol)) return { toAddress: T, ...t };
                    }
                    try {
                      h = await (0, r.getTokenStandardAndDetails)(e, t, g);
                    } catch (e) {
                      return s.default.warn(e), { toAddress: T, tokenId: g };
                    }
                    const v = (0, u.getTokenValueParam)(f),
                      y = null === (p = h) || void 0 === p ? void 0 : p.decimals,
                      S = f && v && y && (0, l.calcTokenAmount)(v, y).toString(10),
                      k = y && Number(null == y ? void 0 : y.toString(10));
                    (null === (m = h) || void 0 === m ? void 0 : m.standard) === c.TokenStandard.ERC20 && (g = undefined);
                    return { tokenAmount: S, toAddress: T, decimals: k, tokenId: g, ...h };
                  }),
                  (a.getSymbolAndDecimals = y),
                  (a.getTokenAddressParam = _),
                  (a.getTokenApprovedParam = function (e = {}) {
                    var t;
                    return null == e || null === (t = e.args) || void 0 === t ? void 0 : t._approved;
                  }),
                  (a.getTokenFiatAmount = function (e, t, a, n, s, r = !0, o = !1) {
                    if (t <= 0 || !e || n === undefined) return undefined;
                    const i = new d.Numeric(e, 10).times(new d.Numeric(t, 10)).toString();
                    let c,
                      u = new d.Numeric(n, 10);
                    s !== a.toUpperCase() && i && (u = u.applyConversionRate(i));
                    (u = u.round(2).toString()),
                      (c = o ? (0, m.formatCurrency)(u, a) : r ? `${(0, m.formatCurrency)(u, a)} ${a.toUpperCase()}` : u);
                    return c;
                  }),
                  (a.getTokenIdParam = E),
                  (a.getTokenMetadata = T),
                  (a.tokenInfoGetter = function () {
                    const e = {};
                    return async (t, a) => (e[t] || (e[t] = await y(t, a)), e[t]);
                  });
                var n,
                  s = (n = e("loglevel")) && n.__esModule ? n : { default: n },
                  r = e("../../store/actions"),
                  o = e("../../../shared/modules/string-utils"),
                  i = e("../../../shared/modules/transaction.utils"),
                  c = e("../../../shared/constants/transaction"),
                  u = e("../../../shared/lib/metamask-controller-utils"),
                  l = e("../../../shared/lib/transactions-controller-utils"),
                  d = e("../../../shared/modules/Numeric"),
                  p = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("./util")),
                  m = e("./confirm-tx.util");
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (f = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const g = "";
                function T(e, t) {
                  return e && t[e.toLowerCase()];
                }
                async function h(e, t) {
                  let a = await (async function (e) {
                    const t = p.getContractAtAddress(e);
                    try {
                      return (await t.symbol())[0];
                    } catch (t) {
                      return s.default.warn(`symbol() call for token at address ${e} resulted in error:`, t), undefined;
                    }
                  })(e);
                  if (!a) {
                    const n = T(e, t);
                    n && (a = n.symbol);
                  }
                  return a;
                }
                async function v(e, t) {
                  let a = await (async function (e) {
                    const t = p.getContractAtAddress(e);
                    try {
                      const e = (await t.decimals())[0];
                      return null == e ? void 0 : e.toString();
                    } catch (t) {
                      return s.default.warn(`decimals() call for token at address ${e} resulted in error:`, t), undefined;
                    }
                  })(e);
                  if (!a || "0" === a) {
                    const s = T(e, t);
                    var n;
                    if (s) a = null === (n = s.decimals) || void 0 === n ? void 0 : n.toString();
                  }
                  return a;
                }
                async function y(e, t) {
                  let a, n;
                  try {
                    (a = await h(e, t)), (n = await v(e, t));
                  } catch (t) {
                    s.default.warn(`symbol() and decimal() calls for token at address ${e} resulted in error:`, t);
                  }
                  return { symbol: a || g, decimals: n };
                }
                function _(e = {}) {
                  var t, a, n;
                  const s =
                    (null == e || null === (t = e.args) || void 0 === t ? void 0 : t._to) ||
                    (null == e || null === (a = e.args) || void 0 === a ? void 0 : a.to) ||
                    (null == e || null === (n = e.args) || void 0 === n ? void 0 : n[0]);
                  return null == s ? void 0 : s.toString().toLowerCase();
                }
                function E(e = {}) {
                  var t, a;
                  return (
                    (null == e || null === (t = e.args) || void 0 === t || null === (t = t._tokenId) || void 0 === t
                      ? void 0
                      : t.toString()) ??
                    (null == e || null === (a = e.args) || void 0 === a || null === (a = a.id) || void 0 === a ? void 0 : a.toString())
                  );
                }
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/token-util.js" }
    ],
    [
      4810,
      {
        "../../../app/scripts/lib/util": 82,
        "../../../shared/constants/transaction": 3974,
        "../../../shared/lib/fetch-with-cache": 3976,
        "../../../shared/modules/contract-utils": 3987,
        "@metamask/controller-utils": 1056,
        "@metamask/transaction-controller": 1835,
        "eth-method-registry": 2641,
        loglevel: 3322
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getFourBytePrefix = function (e = "") {
                    const t = (0, i.addHexPrefix)(e);
                    return t.slice(0, 10);
                  }),
                  (a.getLatestSubmittedTxWithNonce = function (e = [], t = "0x0") {
                    if (!e.length) return {};
                    return e.reduce((e, a) => {
                      const { submittedTime: n, txParams: { nonce: s } = {} } = a;
                      return s === t ? (e.submittedTime ? (n > e.submittedTime ? a : e) : a) : e;
                    }, {});
                  }),
                  (a.getMethodDataAsync = async function (e, t) {
                    try {
                      let a = null;
                      if (
                        (t &&
                          (a = await (async function (e) {
                            const t = await (0, l.default)({
                              url: `https://www.4byte.directory/api/v1/signatures/?hex_signature=${e}`,
                              fetchOptions: { referrerPolicy: "no-referrer-when-downgrade", body: null, method: "GET", mode: "cors" },
                              functionName: "getMethodFrom4Byte"
                            });
                            return (
                              t.results.sort((e, t) => (new Date(e.created_at).getTime() < new Date(t.created_at).getTime() ? -1 : 1)),
                              t.results[0].text_signature
                            );
                          })(e).catch((e) => (s.default.error(e), null))),
                        p || (p = new n.MethodRegistry({ provider: global.ethereumProvider })),
                        !a)
                      )
                        return {};
                      const r = p.parse(a);
                      return { name: r.name, params: r.args };
                    } catch (e) {
                      return s.default.error(e), {};
                    }
                  }),
                  (a.getStatusKey = function (e) {
                    const { txReceipt: { status: t } = {}, type: a, status: n } = e;
                    if ("0x0" === t) return o.TransactionStatus.failed;
                    if (n === o.TransactionStatus.confirmed && a === o.TransactionType.cancel) return c.TransactionGroupStatus.cancelled;
                    return e.status;
                  }),
                  (a.getTransactionTypeTitle = function (e, t, a = "ETH") {
                    switch (t) {
                      case o.TransactionType.tokenMethodTransfer:
                        return e("transfer");
                      case o.TransactionType.tokenMethodTransferFrom:
                        return e("transferFrom");
                      case o.TransactionType.tokenMethodSafeTransferFrom:
                        return e("safeTransferFrom");
                      case o.TransactionType.tokenMethodApprove:
                        return e("approve");
                      case o.TransactionType.tokenMethodSetApprovalForAll:
                        return e("setApprovalForAll");
                      case o.TransactionType.simpleSend:
                        return e("sendingNativeAsset", [a]);
                      case o.TransactionType.contractInteraction:
                        return e("contractInteraction");
                      case o.TransactionType.deployContract:
                        return e("contractDeployment");
                      case o.TransactionType.swap:
                        return e("swap");
                      case o.TransactionType.swapApproval:
                        return e("swapApproval");
                      default:
                        throw new Error(`Unrecognized transaction type: ${t}`);
                    }
                  }),
                  (a.isLegacyTransaction = function (e) {
                    return (null == e ? void 0 : e.type) === o.TransactionEnvelopeType.legacy;
                  }),
                  (a.isNFTAssetStandard = void 0),
                  (a.isSmartContractAddress = async function (e) {
                    const { isContractAddress: t } = await (0, u.readAddressAsContract)(global.eth, e);
                    return t;
                  }),
                  (a.isTokenMethodAction = function (e) {
                    return [
                      o.TransactionType.tokenMethodTransfer,
                      o.TransactionType.tokenMethodApprove,
                      o.TransactionType.tokenMethodSetApprovalForAll,
                      o.TransactionType.tokenMethodTransferFrom,
                      o.TransactionType.tokenMethodSafeTransferFrom
                    ].includes(e);
                  });
                var n = e("eth-method-registry"),
                  s = d(e("loglevel")),
                  r = e("@metamask/controller-utils"),
                  o = e("@metamask/transaction-controller"),
                  i = e("../../../app/scripts/lib/util"),
                  c = e("../../../shared/constants/transaction"),
                  u = e("../../../shared/modules/contract-utils"),
                  l = d(e("../../../shared/lib/fetch-with-cache"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                let p;
                a.isNFTAssetStandard = (e) => e === r.ERC1155 || e === r.ERC721;
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/transactions.util.js" }
    ],
    [
      4811,
      { "./util": 4812, loglevel: 3322 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function (e, t, a, n, o, i, c) {
                    s.default.debug("tx-helper called with params:"),
                      s.default.debug({
                        unapprovedTxs: e,
                        unapprovedMsgs: t,
                        personalMsgs: a,
                        decryptMsgs: n,
                        encryptionPublicKeyMsgs: o,
                        typedMessages: i,
                        chainId: c
                      });
                    const u = c ? (0, r.valuesFor)(e).filter((e) => e.chainId === c) : (0, r.valuesFor)(e),
                      l = (0, r.valuesFor)(t),
                      d = (0, r.valuesFor)(a),
                      p = (0, r.valuesFor)(n),
                      m = (0, r.valuesFor)(o),
                      f = (0, r.valuesFor)(i),
                      g = u
                        .concat(l)
                        .concat(d)
                        .concat(p)
                        .concat(m)
                        .concat(f)
                        .sort((e, t) => e.time - t.time);
                    return (
                      s.default.debug(`tx helper found ${u.length} unapproved txs`),
                      s.default.debug(`tx helper found ${l.length} unsigned messages`),
                      s.default.debug(`tx helper found ${d.length} unsigned personal messages`),
                      s.default.debug(`tx helper found ${p.length} decrypt requests`),
                      s.default.debug(`tx helper found ${m.length} encryptionPublicKey requests`),
                      s.default.debug(`tx helper found ${f.length} unsigned typed messages`),
                      g
                    );
                  });
                var n,
                  s = (n = e("loglevel")) && n.__esModule ? n : { default: n },
                  r = e("./util");
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/tx-helper.ts" }
    ],
    [
      4813,
      { "../../../app/scripts/lib/util": 82, "../../../shared/constants/app": 3953 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("../../../shared/constants/app"),
                  s = e("../../../app/scripts/lib/util");
                a.default = class {
                  static async checkStatus() {
                    const e = (0, s.getEnvironmentType)() === n.ENVIRONMENT_TYPE_POPUP,
                      t = (0, s.getPlatform)() === (n.PLATFORM_FIREFOX || n.PLATFORM_BRAVE),
                      a = (await window.navigator.mediaDevices.enumerateDevices()).filter((e) => "videoinput" === e.kind),
                      r = a.length > 0,
                      o = a.some((e) => e.label && e.label.length > 0);
                    if (r) {
                      let a = !0;
                      return ((t && e) || (e && !o)) && (a = !1), { permissions: o, environmentReady: a };
                    }
                    const i = new Error("No webcam found");
                    throw ((i.type = "NO_WEBCAM_FOUND"), i);
                  }
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/webcam-utils.js" }
    ],
    [
      4814,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.openWindow = void 0);
                a.openWindow = (e, t) => {
                  window.open(e, t || "_blank", "noopener");
                };
              };
            };
      },
      { package: "$root$", file: "ui/helpers/utils/window.ts" }
    ],
    [
      4815,
      { "../../selectors": 5197, react: 3690, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("../../selectors");
                a.default = () => {
                  const e = (0, s.useSelector)(r.getCurrentChainId),
                    t = (0, s.useSelector)(r.getMetaMetricsId),
                    a = (0, n.useCallback)(
                      (e) => {
                        const a = new URLSearchParams();
                        return (
                          a.set("metamaskEntry", "ext_buy_sell_button"),
                          t && a.set("metametricsId", t),
                          `https://portfolio.metamask.io/buy?${a.toString()}`
                        );
                      },
                      [t]
                    );
                  return {
                    openBuyCryptoInPdapp: (0, n.useCallback)(() => {
                      const t = a(e);
                      global.platform.openTab({ url: t });
                    }, [e]),
                    getBuyURI: a
                  };
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/experiences/useRamps.ts" }
    ],
    [
      4816,
      {
        "../../../shared/constants/gas": 3957,
        "../../../shared/modules/conversion.utils": 3988,
        "../../../shared/modules/gas.utils": 3992,
        "../../helpers/constants/common": 4769,
        "../../helpers/utils/transactions.util": 4810,
        "../../selectors": 5197,
        "../useCurrencyDisplay": 4831,
        "../useUserPreferencedCurrency": 4866,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useGasEstimates = function ({
                    editGasMode: e,
                    gasEstimateType: t,
                    gasFeeEstimates: a,
                    gasLimit: p,
                    gasPrice: m,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: g,
                    minimumGasLimit: T,
                    transaction: h
                  }) {
                    const v =
                        (0, n.useSelector)(i.checkNetworkAndAccountSupports1559) &&
                        !(0, c.isLegacyTransaction)(null == h ? void 0 : h.txParams),
                      { currency: y, numberOfDecimals: _ } = (0, l.useUserPreferencedCurrency)(o.PRIMARY);
                    let E = { gasLimit: (0, d.decimalToHex)(p) };
                    E = v
                      ? {
                          ...E,
                          maxFeePerGas: (0, d.decGWEIToHexWEI)(f || m || "0"),
                          maxPriorityFeePerGas: (0, d.decGWEIToHexWEI)(g || f || m || "0"),
                          baseFeePerGas: (0, d.decGWEIToHexWEI)(a.estimatedBaseFee ?? "0")
                        }
                      : { ...E, gasPrice: t === s.GasEstimateTypes.none ? "0x0" : (0, d.decGWEIToHexWEI)(m) };
                    const S = (0, r.getMaximumGasTotalInHexWei)(E);
                    e === s.EditGasModes.swaps && (E = { ...E, gasLimit: T });
                    const k = (0, r.getMinimumGasTotalInHexWei)(E),
                      [w] = (0, u.useCurrencyDisplay)(k, { numberOfDecimals: _, currency: y });
                    return { estimatedMinimumNative: w, maximumCostInHexWei: S, minimumCostInHexWei: k };
                  });
                var n = e("react-redux"),
                  s = e("../../../shared/constants/gas"),
                  r = e("../../../shared/modules/gas.utils"),
                  o = e("../../helpers/constants/common"),
                  i = e("../../selectors"),
                  c = e("../../helpers/utils/transactions.util"),
                  u = e("../useCurrencyDisplay"),
                  l = e("../useUserPreferencedCurrency"),
                  d = e("../../../shared/modules/conversion.utils");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/gasFeeInput/useGasEstimates.js" }
    ],
    [
      4817,
      {
        "../../../shared/constants/gas": 3957,
        "../../../shared/modules/Numeric": 3984,
        "../../helpers/constants/gas": 4773,
        "../../helpers/constants/transactions": 4780,
        "../../helpers/utils/transactions.util": 4810,
        "../../helpers/utils/util": 4812,
        "../../selectors": 5197,
        "@metamask/transaction-controller": 1835,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useGasFeeErrors = function ({
                    gasEstimateType: e,
                    gasFeeEstimates: t,
                    isGasEstimatesLoading: a,
                    gasLimit: u,
                    gasPrice: l,
                    maxPriorityFeePerGas: d,
                    maxFeePerGas: _,
                    minimumCostInHexWei: E,
                    minimumGasLimit: S,
                    transaction: k
                  }) {
                    const w =
                        (0, s.useSelector)(i.checkNetworkAndAccountSupports1559) &&
                        !(0, c.isLegacyTransaction)(null == k ? void 0 : k.txParams),
                      A = e === o.GasEstimateTypes.feeMarket,
                      I = m(u, S),
                      b = f(d, w),
                      P = g(_, b, d, w),
                      M = T(A, l, w, k),
                      O = h(t, A, a, d, w),
                      C = v(t, a, A, P, b, _, w),
                      N = (0, n.useMemo)(() => {
                        const e = {};
                        return I && (e.gasLimit = I), b && (e.maxPriorityFee = b), P && (e.maxFee = P), M && (e.gasPrice = M), e;
                      }, [I, b, P, M]),
                      x = (0, n.useMemo)(() => {
                        const e = {};
                        return O && (e.maxPriorityFee = O), C && (e.maxFee = C), e;
                      }, [O, C]),
                      R = Boolean(Object.keys(N).length),
                      F = (0, n.useMemo)(() => ({ ...x, ...N }), [N, x]),
                      D = (0, s.useSelector)((e) => {
                        var t;
                        return (0, i.getTargetAccount)(e, null == k || null === (t = k.txParams) || void 0 === t ? void 0 : t.from);
                      }, s.shallowEqual),
                      L =
                        D !== undefined &&
                        (null == k ? void 0 : k.type) !== r.TransactionType.incoming &&
                        (null == k ? void 0 : k.status) in p.PENDING_STATUS_HASH &&
                        y(E, k, D.balance);
                    return {
                      gasErrors: F,
                      hasGasErrors: R,
                      balanceError: L,
                      hasSimulationError: Boolean(null == k ? void 0 : k.simulationFails)
                    };
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("@metamask/transaction-controller"),
                  o = e("../../../shared/constants/gas"),
                  i = e("../../selectors"),
                  c = e("../../helpers/utils/transactions.util"),
                  u = e("../../helpers/utils/util"),
                  l = e("../../helpers/constants/gas"),
                  d = e("../../../shared/modules/Numeric"),
                  p = e("../../helpers/constants/transactions");
                const m = (e, t) =>
                    new d.Numeric(e, 10).lessThan(new d.Numeric(t || o.GAS_LIMITS.SIMPLE, 16))
                      ? l.GAS_FORM_ERRORS.GAS_LIMIT_OUT_OF_BOUNDS
                      : undefined,
                  f = (e, t) => (t && (0, u.bnLessThan)(e, 0) ? l.GAS_FORM_ERRORS.MAX_PRIORITY_FEE_BELOW_MINIMUM : undefined),
                  g = (e, t, a, n) => (t || !n ? undefined : (0, u.bnGreaterThan)(a, e) ? l.GAS_FORM_ERRORS.MAX_FEE_IMBALANCE : undefined),
                  T = (e, t, a, n) => {
                    var s;
                    return a && e
                      ? undefined
                      : (!a || (null != n && null !== (s = n.txParams) && void 0 !== s && s.gasPrice)) && (0, u.bnLessThan)(t, 0)
                      ? l.GAS_FORM_ERRORS.GAS_PRICE_TOO_LOW
                      : undefined;
                  },
                  h = (e, t, a, n, s) => {
                    var r;
                    return s && t && !a
                      ? (0, u.bnLessThan)(n, null == e || null === (r = e.low) || void 0 === r ? void 0 : r.suggestedMaxPriorityFeePerGas)
                        ? l.GAS_FORM_ERRORS.MAX_PRIORITY_FEE_TOO_LOW
                        : null != e && e.high && (0, u.bnGreaterThan)(n, 1.5 * e.high.suggestedMaxPriorityFeePerGas)
                        ? l.GAS_FORM_ERRORS.MAX_PRIORITY_FEE_HIGH_WARNING
                        : undefined
                      : undefined;
                  },
                  v = (e, t, a, n, s, r, o) => {
                    var i;
                    return s || n || !a || !o || t
                      ? undefined
                      : (0, u.bnLessThan)(r, null == e || null === (i = e.low) || void 0 === i ? void 0 : i.suggestedMaxFeePerGas)
                      ? l.GAS_FORM_ERRORS.MAX_FEE_TOO_LOW
                      : null != e && e.high && (0, u.bnGreaterThan)(r, 1.5 * e.high.suggestedMaxFeePerGas)
                      ? l.GAS_FORM_ERRORS.MAX_FEE_HIGH_WARNING
                      : undefined;
                  },
                  y = (e, t, a) => {
                    var n;
                    if (e === undefined || a === undefined) return !1;
                    const s = new d.Numeric(e, 16).add(
                        new d.Numeric((null == t || null === (n = t.txParams) || void 0 === n ? void 0 : n.value) || "0x0", 16)
                      ),
                      r = new d.Numeric(a, 16);
                    return s.greaterThan(r);
                  };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/gasFeeInput/useGasFeeErrors.js" }
    ],
    [
      4818,
      {
        "../../../shared/constants/common": 3955,
        "../../../shared/constants/gas": 3957,
        "../../../shared/modules/Numeric": 3984,
        "../../../shared/modules/conversion.utils": 3988,
        "../../helpers/constants/gas": 4773,
        "../../helpers/utils/gas": 4797,
        "../../helpers/utils/transactions.util": 4810,
        "../../selectors": 5197,
        "../useGasFeeEstimates": 4836,
        "./useGasEstimates": 4816,
        "./useGasFeeErrors": 4817,
        "./useGasPriceInput": 4819,
        "./useMaxFeePerGasInput": 4820,
        "./useMaxPriorityFeePerGasInput": 4821,
        "./useTransactionFunctions": 4822,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useGasFeeInputs = function (e = r.GasRecommendations.medium, t, a = "0x5208", E = r.EditGasModes.modifyInPlace) {
                    const S = {
                      txParams: null == t ? void 0 : t.txParams,
                      id: null == t ? void 0 : t.id,
                      userFeeLevel: null == t ? void 0 : t.userFeeLevel,
                      originalGasEstimate: null == t ? void 0 : t.originalGasEstimate,
                      userEditedGasLimit: null == t ? void 0 : t.userEditedGasLimit
                    };
                    null != t && t.previousGas && (S.previousGas = null == t ? void 0 : t.previousGas);
                    const [k, w] = (0, n.useState)(S),
                      A = (0, l.editGasModeIsSpeedUpOrCancel)(E) ? k : t,
                      I =
                        (0, s.useSelector)(i.checkNetworkAndAccountSupports1559) &&
                        !(0, c.isLegacyTransaction)(null == A ? void 0 : A.txParams),
                      { gasEstimateType: b, gasFeeEstimates: P, isGasEstimatesLoading: M, isNetworkBusy: O } = (0, u.useGasFeeEstimates)(),
                      C = (0, s.useSelector)(i.getAdvancedInlineGasShown),
                      [N, x] = (0, n.useState)(() => {
                        var t, a;
                        return C &&
                          null != A &&
                          null !== (t = A.txParams) &&
                          void 0 !== t &&
                          t.maxPriorityFeePerGas &&
                          null != A &&
                          null !== (a = A.txParams) &&
                          void 0 !== a &&
                          a.maxFeePerGas
                          ? null
                          : A
                          ? (null == A ? void 0 : A.userFeeLevel) || null
                          : e;
                      }),
                      [R, F] = (0, n.useState)(() => N || r.PriorityLevels.custom),
                      [D, L] = (0, n.useState)(() => {
                        var e;
                        return Number(
                          (0, d.hexToDecimal)((null == A || null === (e = A.txParams) || void 0 === e ? void 0 : e.gas) ?? "0x0")
                        );
                      }),
                      G = Number((0, d.hexToDecimal)(null == A ? void 0 : A.originalGasEstimate));
                    (0, n.useEffect)(() => {
                      if (I) {
                        var e, t, a;
                        null != A && A.userFeeLevel && x(null == A ? void 0 : A.userFeeLevel);
                        const n = new p.Numeric((null == A || null === (e = A.txParams) || void 0 === e ? void 0 : e.gas) ?? "0x0", 16)
                            .times(
                              new p.Numeric((null == A || null === (t = A.txParams) || void 0 === t ? void 0 : t.maxFeePerGas) ?? "0x0", 16)
                            )
                            .toPrefixedHexString(),
                          s = new p.Numeric(n, 16, m.EtherDenomination.WEI).toDenomination(m.EtherDenomination.ETH).toBase(10).toString();
                        Number(s) > Number(_)
                          ? F(r.PriorityLevels.dappSuggestedHigh)
                          : null != A && A.userFeeLevel && F(null == A ? void 0 : A.userFeeLevel),
                          L(
                            Number((0, d.hexToDecimal)((null == A || null === (a = A.txParams) || void 0 === a ? void 0 : a.gas) ?? "0x0"))
                          );
                      }
                    }, [F, L, x, I, A]);
                    const {
                        gasPrice: U,
                        setGasPrice: j,
                        setGasPriceHasBeenManuallySet: $
                      } = (0, g.useGasPriceInput)({ estimateToUse: N, gasEstimateType: b, gasFeeEstimates: P, transaction: A }),
                      { maxFeePerGas: W, setMaxFeePerGas: H } = (0, T.useMaxFeePerGasInput)({
                        estimateToUse: N,
                        gasEstimateType: b,
                        gasFeeEstimates: P,
                        transaction: A
                      }),
                      { maxPriorityFeePerGas: B, setMaxPriorityFeePerGas: V } = (0, h.useMaxPriorityFeePerGasInput)({
                        estimateToUse: N,
                        gasEstimateType: b,
                        gasFeeEstimates: P,
                        transaction: A
                      }),
                      {
                        estimatedMinimumNative: K,
                        maximumCostInHexWei: q,
                        minimumCostInHexWei: Y
                      } = (0, v.useGasEstimates)({
                        editGasMode: E,
                        gasEstimateType: b,
                        gasFeeEstimates: P,
                        gasLimit: D,
                        gasPrice: U,
                        maxFeePerGas: W,
                        maxPriorityFeePerGas: B,
                        minimumGasLimit: a,
                        transaction: A
                      }),
                      {
                        balanceError: z,
                        gasErrors: X,
                        hasGasErrors: Q,
                        hasSimulationError: Z
                      } = (0, f.useGasFeeErrors)({
                        gasEstimateType: b,
                        gasFeeEstimates: P,
                        isGasEstimatesLoading: M,
                        gasLimit: D,
                        gasPrice: U,
                        maxPriorityFeePerGas: B,
                        maxFeePerGas: W,
                        minimumCostInHexWei: Y,
                        minimumGasLimit: a,
                        transaction: A
                      }),
                      J = (0, n.useCallback)(() => {
                        if (X.gasLimit === o.GAS_FORM_ERRORS.GAS_LIMIT_OUT_OF_BOUNDS) {
                          var e;
                          const t = (0, d.hexToDecimal)(null == A || null === (e = A.txParams) || void 0 === e ? void 0 : e.gas),
                            n = (0, d.hexToDecimal)(a);
                          L(t > n ? t : n);
                        }
                      }, [a, X.gasLimit, A]),
                      {
                        cancelTransaction: ee,
                        speedUpTransaction: te,
                        updateTransaction: ae,
                        updateTransactionToTenPercentIncreasedGasFee: ne,
                        updateTransactionUsingDAPPSuggestedValues: se,
                        updateTransactionUsingEstimate: re
                      } = (0, y.useTransactionFunctions)({
                        defaultEstimateToUse: e,
                        editGasMode: E,
                        gasFeeEstimates: P,
                        gasLimit: D,
                        maxPriorityFeePerGas: B,
                        minimumGasLimit: a,
                        transaction: A,
                        setRetryTxMeta: w
                      }),
                      oe = (0, n.useCallback)(() => {
                        x(r.CUSTOM_GAS_ESTIMATE), J(), j(U), L(D), H(W), V(B), $(!0), F("custom");
                      }, [x, J, j, U, L, D, H, W, V, B, $]);
                    return {
                      transaction: A,
                      maxFeePerGas: W,
                      maxPriorityFeePerGas: B,
                      gasPrice: U,
                      setGasPrice: j,
                      gasLimit: D,
                      setGasLimit: L,
                      properGasLimit: G,
                      editGasMode: E,
                      estimateToUse: N,
                      estimatedMinimumNative: K,
                      maximumCostInHexWei: q,
                      minimumCostInHexWei: Y,
                      estimateUsed: R,
                      gasFeeEstimates: P,
                      isNetworkBusy: O,
                      onManualChange: oe,
                      balanceError: z,
                      gasErrors: X,
                      hasGasErrors: Q,
                      hasSimulationError: Z,
                      minimumGasLimitDec: (0, d.hexToDecimal)(a),
                      supportsEIP1559: I,
                      cancelTransaction: ee,
                      speedUpTransaction: te,
                      updateTransaction: ae,
                      updateTransactionToTenPercentIncreasedGasFee: ne,
                      updateTransactionUsingDAPPSuggestedValues: se,
                      updateTransactionUsingEstimate: re
                    };
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("../../../shared/constants/gas"),
                  o = e("../../helpers/constants/gas"),
                  i = e("../../selectors"),
                  c = e("../../helpers/utils/transactions.util"),
                  u = e("../useGasFeeEstimates"),
                  l = e("../../helpers/utils/gas"),
                  d = e("../../../shared/modules/conversion.utils"),
                  p = e("../../../shared/modules/Numeric"),
                  m = e("../../../shared/constants/common"),
                  f = e("./useGasFeeErrors"),
                  g = e("./useGasPriceInput"),
                  T = e("./useMaxFeePerGasInput"),
                  h = e("./useMaxPriorityFeePerGasInput"),
                  v = e("./useGasEstimates"),
                  y = e("./useTransactionFunctions");
                const _ = "1";
              };
            };
      },
      { package: "$root$", file: "ui/hooks/gasFeeInput/useGasFeeInputs.js" }
    ],
    [
      4819,
      {
        "../../../shared/constants/gas": 3957,
        "../../../shared/modules/conversion.utils": 3988,
        "../../helpers/utils/transactions.util": 4810,
        "./utils": 4823,
        lodash: 3312,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useGasPriceInput = function ({ estimateToUse: e, gasEstimateType: t, gasFeeEstimates: a, transaction: l }) {
                    const [d, p] = (0, n.useState)((null == l ? void 0 : l.userFeeLevel) === r.CUSTOM_GAS_ESTIMATE),
                      [m, f] = (0, n.useState)(() => {
                        const { gasPrice: e } = (null == l ? void 0 : l.txParams) || {};
                        return e && (0, c.feeParamsAreCustom)(l) ? Number((0, i.hexWEIToDecGWEI)(e)) : null;
                      }),
                      [g] = (0, n.useState)(a),
                      T = (0, s.isEqual)(g, a);
                    return {
                      gasPrice: null !== m && (d || T || (0, o.isLegacyTransaction)(null == l ? void 0 : l.txParams)) ? m : u(a, t, e),
                      setGasPrice: f,
                      setGasPriceHasBeenManuallySet: p
                    };
                  });
                var n = e("react"),
                  s = e("lodash"),
                  r = e("../../../shared/constants/gas"),
                  o = e("../../helpers/utils/transactions.util"),
                  i = e("../../../shared/modules/conversion.utils"),
                  c = e("./utils");
                function u(e, t, a) {
                  return t === r.GasEstimateTypes.legacy
                    ? (null == e ? void 0 : e[a]) ?? "0"
                    : t === r.GasEstimateTypes.ethGasPrice
                    ? (null == e ? void 0 : e.gasPrice) ?? "0"
                    : "0";
                }
              };
            };
      },
      { package: "$root$", file: "ui/hooks/gasFeeInput/useGasPriceInput.js" }
    ],
    [
      4820,
      {
        "../../../shared/modules/conversion.utils": 3988,
        "../../helpers/utils/transactions.util": 4810,
        "../../selectors": 5197,
        "./utils": 4823,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useMaxFeePerGasInput = function ({ estimateToUse: e, gasEstimateType: t, gasFeeEstimates: a, transaction: i }) {
                    const l =
                        (0, s.useSelector)(r.checkNetworkAndAccountSupports1559) &&
                        !(0, o.isLegacyTransaction)(null == i ? void 0 : i.txParams),
                      d = l ? u(i, a) : 0,
                      [p, m] = (0, n.useState)(() => (d && (0, c.feeParamsAreCustom)(i) ? d : null));
                    (0, n.useEffect)(() => {
                      l && d && m(d);
                    }, [d, m, l]);
                    return { maxFeePerGas: p ?? (0, c.getGasFeeEstimate)("suggestedMaxFeePerGas", a, t, e, d || 0), setMaxFeePerGas: m };
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("../../selectors"),
                  o = e("../../helpers/utils/transactions.util"),
                  i = e("../../../shared/modules/conversion.utils"),
                  c = e("./utils");
                const u = (e, t) => {
                  if (null != t && t[null == e ? void 0 : e.userFeeLevel]) return t[e.userFeeLevel].suggestedMaxFeePerGas;
                  const { maxFeePerGas: a, gasPrice: n } = (null == e ? void 0 : e.txParams) || {};
                  return Number((0, i.hexWEIToDecGWEI)(a || n));
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/gasFeeInput/useMaxFeePerGasInput.js" }
    ],
    [
      4821,
      {
        "../../../shared/modules/conversion.utils": 3988,
        "../../helpers/utils/transactions.util": 4810,
        "../../selectors": 5197,
        "./utils": 4823,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useMaxPriorityFeePerGasInput = function ({
                    estimateToUse: e,
                    gasEstimateType: t,
                    gasFeeEstimates: a,
                    transaction: i
                  }) {
                    const d =
                        (0, n.useSelector)(r.checkNetworkAndAccountSupports1559) &&
                        !(0, o.isLegacyTransaction)(null == i ? void 0 : i.txParams),
                      p = d ? l(i, a) : null,
                      [m, f] = (0, s.useState)(() => (!u(p) && (0, c.feeParamsAreCustom)(i) ? p : null));
                    (0, s.useEffect)(() => {
                      d && !u(p) && f(p);
                    }, [p, f, d]);
                    return {
                      maxPriorityFeePerGas: m ?? (0, c.getGasFeeEstimate)("suggestedMaxPriorityFeePerGas", a, t, e, p || 0),
                      setMaxPriorityFeePerGas: f
                    };
                  });
                var n = e("react-redux"),
                  s = e("react"),
                  r = e("../../selectors"),
                  o = e("../../helpers/utils/transactions.util"),
                  i = e("../../../shared/modules/conversion.utils"),
                  c = e("./utils");
                const u = (e) => null === e || e === undefined,
                  l = (e, t) => {
                    if (null != t && t[null == e ? void 0 : e.userFeeLevel]) return t[e.userFeeLevel].suggestedMaxPriorityFeePerGas;
                    const { maxPriorityFeePerGas: a, maxFeePerGas: n, gasPrice: s } = (null == e ? void 0 : e.txParams) || {},
                      r = a || n || s;
                    return r ? Number((0, i.hexWEIToDecGWEI)(r)) : null;
                  };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/gasFeeInput/useMaxPriorityFeePerGasInput.js" }
    ],
    [
      4822,
      {
        "../../../shared/constants/gas": 3957,
        "../../../shared/modules/conversion.utils": 3988,
        "../../helpers/utils/gas": 4797,
        "../../store/actions": 5204,
        "bignumber.js": 2283,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.useTransactionFunctions = void 0);
                var n,
                  s = e("react"),
                  r = e("react-redux"),
                  o = (n = e("bignumber.js")) && n.__esModule ? n : { default: n },
                  i = e("../../../shared/constants/gas"),
                  c = e("../../helpers/utils/gas"),
                  u = e("../../store/actions"),
                  l = e("../../../shared/modules/conversion.utils");
                a.useTransactionFunctions = ({
                  defaultEstimateToUse: e,
                  editGasMode: t,
                  estimatedBaseFee: a,
                  gasFeeEstimates: n,
                  gasLimit: d,
                  maxPriorityFeePerGas: p,
                  transaction: m,
                  setRetryTxMeta: f
                }) => {
                  const g = (0, r.useDispatch)(),
                    T = (0, s.useCallback)(() => {
                      if ((t !== i.EditGasModes.cancel && t !== i.EditGasModes.speedUp) || m.previousGas) return {};
                      const { maxFeePerGas: e, maxPriorityFeePerGas: a, gasLimit: n } = (null == m ? void 0 : m.txParams) ?? {};
                      return { previousGas: { maxFeePerGas: e, maxPriorityFeePerGas: a, gasLimit: n } };
                    }, [t, null == m ? void 0 : m.previousGas, null == m ? void 0 : m.txParams]),
                    h = (0, s.useCallback)(
                      async ({ estimateUsed: a, gasLimit: n, maxFeePerGas: s, maxPriorityFeePerGas: r, estimateSuggested: o }) => {
                        const h = {
                          gas: (0, l.decimalToHex)(n || d),
                          gasLimit: (0, l.decimalToHex)(n || d),
                          estimateSuggested: o || e,
                          estimateUsed: a
                        };
                        s && (h.maxFeePerGas = s), r && (h.maxPriorityFeePerGas = r || (0, l.decGWEIToHexWEI)(p));
                        const v = T(),
                          y = { ...m, userFeeLevel: a || i.PriorityLevels.custom, txParams: { ...m.txParams, ...h }, ...v };
                        t === i.EditGasModes.swaps
                          ? (g((0, u.updateSwapsUserFeeLevel)(a || i.PriorityLevels.custom)),
                            g((0, u.updateCustomSwapsEIP1559GasParams)(h)))
                          : (0, c.editGasModeIsSpeedUpOrCancel)(t)
                          ? f(y)
                          : ((h.userEditedGasLimit = y.userEditedGasLimit),
                            (h.userFeeLevel = y.userFeeLevel),
                            v && v.previousGas && (await g((0, u.updatePreviousGasParams)(y.id, v.previousGas))),
                            await g((0, u.updateTransactionGasFees)(y.id, h)));
                      },
                      [e, g, t, d, T, p, m, f]
                    ),
                    v = (0, s.useCallback)(() => {
                      g((0, u.createCancelTransaction)(m.id, m.txParams, { estimatedBaseFee: a }));
                    }, [g, a, m]),
                    y = (0, s.useCallback)(() => {
                      g((0, u.createSpeedUpTransaction)(m.id, m.txParams, { estimatedBaseFee: a }));
                    }, [g, a, m]),
                    _ = (0, s.useCallback)(
                      (t = !1) => {
                        const { gas: a, maxFeePerGas: s, maxPriorityFeePerGas: r } = m.previousGas || m.txParams,
                          u = new o.default(r, 16).isZero() ? (0, l.decGWEIToHexWEI)(n[e].suggestedMaxPriorityFeePerGas) : r,
                          d = "0x0" === r ? i.CUSTOM_GAS_ESTIMATE : i.PriorityLevels.tenPercentIncreased;
                        h({
                          estimateSuggested: t ? e : i.PriorityLevels.tenPercentIncreased,
                          estimateUsed: d,
                          gasLimit: a,
                          maxFeePerGas: (0, c.addTenPercentAndRound)(s),
                          maxPriorityFeePerGas: (0, c.addTenPercentAndRound)(u)
                        });
                      },
                      [e, n, m, h]
                    ),
                    E = (0, s.useCallback)(
                      (e) => {
                        if (!n[e]) return;
                        const { suggestedMaxFeePerGas: t, suggestedMaxPriorityFeePerGas: a } = n[e];
                        h({ estimateUsed: e, maxFeePerGas: (0, l.decGWEIToHexWEI)(t), maxPriorityFeePerGas: (0, l.decGWEIToHexWEI)(a) });
                      },
                      [n, h]
                    ),
                    S = (0, s.useCallback)(() => {
                      const { maxFeePerGas: e, maxPriorityFeePerGas: t } = (null == m ? void 0 : m.dappSuggestedGasFees) ?? {};
                      h({ estimateUsed: i.PriorityLevels.dAppSuggested, maxFeePerGas: e, maxPriorityFeePerGas: t });
                    }, [m, h]);
                  return {
                    cancelTransaction: v,
                    speedUpTransaction: y,
                    updateTransaction: h,
                    updateTransactionToTenPercentIncreasedGasFee: _,
                    updateTransactionUsingDAPPSuggestedValues: S,
                    updateTransactionUsingEstimate: E
                  };
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/gasFeeInput/useTransactionFunctions.js" }
    ],
    [
      4823,
      { "../../../shared/constants/gas": 3957 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.feeParamsAreCustom = void 0),
                  (a.getGasFeeEstimate = function (e, t, a, s, r = "0") {
                    var o;
                    return a === n.GasEstimateTypes.feeMarket
                      ? (null == t || null === (o = t[s]) || void 0 === o ? void 0 : o[e]) ?? String(r)
                      : String(r);
                  });
                var n = e("../../../shared/constants/gas");
                a.feeParamsAreCustom = (e) =>
                  !(null != e && e.userFeeLevel) || (null == e ? void 0 : e.userFeeLevel) === n.CUSTOM_GAS_ESTIMATE;
              };
            };
      },
      { package: "$root$", file: "ui/hooks/gasFeeInput/utils.js" }
    ],
    [
      4824,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("react");
                a.default = () => {
                  const e = (0, n.useRef)(null),
                    [t, a] = (0, n.useState)(!1);
                  return (
                    (0, n.useEffect)(() => {
                      a(e.current && e.current.offsetHeight < e.current.scrollHeight);
                    }, [e]),
                    { contentRef: e, isOverflowing: t }
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/snaps/useIsOverflowing.js" }
    ],
    [
      4825,
      { "../../selectors": 5197, "../../store/actions": 5204, "@metamask/snaps-controllers": 1622, react: 3690, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useTransactionInsightSnaps = function ({
                    transaction: e,
                    chainId: t,
                    origin: a,
                    insightSnaps: u,
                    eagerFetching: l = !0,
                    insightSnapId: d = ""
                  }) {
                    const p = (0, s.useSelector)(i.getPermissionSubjectsDeepEqual),
                      [m, f] = (0, n.useState)(!0),
                      [g, T] = (0, n.useState)(undefined);
                    return (
                      (0, n.useEffect)(() => {
                        let n = !1;
                        return (
                          e &&
                            (async function () {
                              if (!l) return void f(!1);
                              f(!0);
                              const s = d.length > 0 ? [d] : u,
                                i = (
                                  await Promise.allSettled(
                                    s.map((n) => {
                                      var s;
                                      const i = null === (s = p[n]) || void 0 === s ? void 0 : s.permissions[c];
                                      if (!i)
                                        return Promise.reject(new Error("This Snap does not have the transaction insight endowment."));
                                      const u = (0, r.getTransactionOriginCaveat)(i) ? a : null;
                                      return (0, o.handleSnapRequest)({
                                        snapId: n,
                                        origin: "",
                                        handler: "onTransaction",
                                        request: {
                                          jsonrpc: "2.0",
                                          method: "",
                                          params: { transaction: e, chainId: t, transactionOrigin: u }
                                        }
                                      });
                                    })
                                  )
                                ).map((e, t) => {
                                  const a = s[t];
                                  return "rejected" === e.status ? { error: e.reason, snapId: a } : { snapId: a, response: e.value };
                                });
                              n || (T(i), f(!1));
                            })(),
                          () => {
                            n = !0;
                          }
                        );
                      }, [e, l, t, a, p, JSON.stringify(u), d]),
                      { data: g, loading: m }
                    );
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("@metamask/snaps-controllers"),
                  o = e("../../store/actions"),
                  i = e("../../selectors");
                const c = "endowment:transaction-insight";
              };
            };
      },
      { package: "$root$", file: "ui/hooks/snaps/useTransactionInsightSnaps.js" }
    ],
    [
      4826,
      {
        "../../shared/modules/conversion.utils": 3988,
        "../../shared/modules/string-utils": 4002,
        "../ducks/metamask/metamask": 4763,
        "../helpers/utils/confirm-tx.util": 4794,
        "../helpers/utils/token-util": 4809,
        "../selectors": 5197,
        "./useTokenTracker": 4859,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.useAccountTotalFiatBalance = void 0);
                var n = e("react-redux"),
                  s = e("../selectors"),
                  r = e("../../shared/modules/conversion.utils"),
                  o = e("../ducks/metamask/metamask"),
                  i = e("../helpers/utils/confirm-tx.util"),
                  c = e("../helpers/utils/token-util"),
                  u = e("../../shared/modules/string-utils"),
                  l = e("./useTokenTracker");
                a.useAccountTotalFiatBalance = (e, t) => {
                  var a;
                  const d = (0, n.useSelector)(s.getCurrentChainId),
                    p = (0, n.useSelector)(o.getConversionRate),
                    m = (0, n.useSelector)(s.getCurrentCurrency),
                    f = (0, n.useSelector)(s.getTokenExchangeRates, n.shallowEqual),
                    g = (0, n.useSelector)(s.getMetaMaskCachedBalances),
                    T = (null == g ? void 0 : g[e]) ?? 0,
                    h = (0, r.getValueFromWeiHex)({ value: T, toCurrency: m, conversionRate: p, numberOfDecimals: 2 }),
                    v = (0, n.useSelector)(s.getAllTokens),
                    y = (null == v || null === (a = v[d]) || void 0 === a ? void 0 : a[e]) ?? [],
                    _ = (0, n.useSelector)(s.getTokenList),
                    E = Object.values(_),
                    S = (0, n.useSelector)(s.getNativeCurrencyImage),
                    k = (0, n.useSelector)(o.getNativeCurrency),
                    { loading: w, tokensWithBalances: A } = (0, l.useTokenTracker)({
                      tokens: y,
                      address: e,
                      includeFailedTokens: !0,
                      hideZeroBalanceTokens: t
                    }),
                    I = A.map((e) => {
                      const t = Object.keys(f).find((t) => (0, u.isEqualCaseInsensitive)(t, e.address)),
                        a = (t && f[t]) ?? 0;
                      return (0, c.getTokenFiatAmount)(a, p, m, e.string, e.symbol, !1, !1);
                    }),
                    b = {};
                  (b.iconUrl = S), (b.symbol = k), (b.fiatBalance = h);
                  const P = [
                      b,
                      ...((e, t) => {
                        const a = [];
                        return (
                          t.forEach((t) => {
                            const n = e.find((e) => e.symbol === t.symbol);
                            n && a.push({ ...n, balance: t.balance, string: t.string, balanceError: t.balanceError });
                          }),
                          a
                        );
                      })(E, A).map((e, t) => ({ ...e, fiatBalance: I[t] }))
                    ].sort((e, t) => parseFloat(t.fiatBalance) - parseFloat(e.fiatBalance)),
                    M = (0, r.sumDecimals)(h, ...I).toString(10),
                    O = (0, i.formatCurrency)(M, m);
                  let C = (0, r.getWeiHexFromDecimalValue)({ value: M, fromCurrency: m, conversionRate: p, invertConversionRate: !0 });
                  return (
                    "NaN" === C && (C = "0x0"),
                    { formattedFiat: O, totalWeiBalance: C, totalFiatBalance: M, tokensWithBalances: A, loading: w, orderedTokenList: P }
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useAccountTotalFiatBalance.js" }
    ],
    [
      4827,
      { "../../shared/modules/hexstring-utils": 3993, "../helpers/utils/util": 4812, "../selectors": 5197, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("react-redux"),
                  s = e("../../shared/modules/hexstring-utils"),
                  r = e("../selectors"),
                  o = e("../helpers/utils/util");
                a.default = (e) => {
                  var t, a;
                  const i = (0, n.useSelector)(r.getAddressBook),
                    c = (0, n.useSelector)(r.getMetaMaskIdentities),
                    u = (0, n.useSelector)(r.getTokenList),
                    l = (0, s.toChecksumHexAddress)(e);
                  if (!e) return {};
                  const d = i.find((e) => e.address === l);
                  return null != d && d.name
                    ? { toName: d.name, isTrusted: !0 }
                    : null !== (t = c[e]) && void 0 !== t && t.name
                    ? { toName: c[e].name, isTrusted: !0 }
                    : null !== (a = u[null == e ? void 0 : e.toLowerCase()]) && void 0 !== a && a.name
                    ? { toName: u[null == e ? void 0 : e.toLowerCase()].name, isTrusted: !0 }
                    : { toName: (0, o.shortenAddress)(l), isTrusted: !1 };
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useAddressDetails.js" }
    ],
    [
      4828,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useApproveTransaction = function () {
                    const [e, t] = (0, n.useState)(!1);
                    return {
                      approveTransaction: (0, n.useCallback)(() => t(!0), []),
                      showCustomizeGasPopover: e,
                      closeCustomizeGasPopover: () => t(!1)
                    };
                  });
                var n = e("react");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useApproveTransaction.js" }
    ],
    [
      4829,
      {
        "../../shared/modules/string-utils": 4002,
        "../ducks/metamask/metamask": 4763,
        "../helpers/utils/token-util": 4809,
        "../store/actions": 5204,
        "./usePrevious": 4845,
        "./useTokenTracker": 4859,
        lodash: 3312,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useAssetDetails = function (e, t, a) {
                    const p = (0, r.useDispatch)(),
                      m = (0, r.useSelector)(o.getNfts),
                      f = (0, r.useSelector)(o.getTokens, n.isEqual).find((t) => (0, u.isEqualCaseInsensitive)(t.address, e)),
                      [g, T] = (0, s.useState)(null),
                      { tokensWithBalances: h } = (0, d.useTokenTracker)({ tokens: f ? [f] : [] }),
                      v = (0, l.usePrevious)(e),
                      y = (0, l.usePrevious)(t),
                      _ = (0, l.usePrevious)(a),
                      E = (0, l.usePrevious)(h);
                    if (
                      ((0, s.useEffect)(() => {
                        (e !== v || t !== y || a !== _ || (E && E !== h)) &&
                          (async function () {
                            p((0, c.showLoadingIndication)());
                            const n = await (0, i.getAssetDetails)(e, t, a, m);
                            T(n), p((0, c.hideLoadingIndication)());
                          })();
                      }, [p, v, _, y, e, t, a, m, h, E]),
                      g)
                    ) {
                      const {
                        standard: t,
                        symbol: a,
                        image: n,
                        name: s,
                        balance: r,
                        tokenId: o,
                        toAddress: i,
                        tokenAmount: c,
                        decimals: u
                      } = g;
                      return {
                        toAddress: i,
                        tokenId: o,
                        decimals: u,
                        tokenAmount: c,
                        assetAddress: e,
                        assetStandard: t,
                        tokenSymbol: a ?? "",
                        tokenImage: n,
                        userBalance: r,
                        assetName: s
                      };
                    }
                    return {};
                  });
                var n = e("lodash"),
                  s = e("react"),
                  r = e("react-redux"),
                  o = e("../ducks/metamask/metamask"),
                  i = e("../helpers/utils/token-util"),
                  c = e("../store/actions"),
                  u = e("../../shared/modules/string-utils"),
                  l = e("./usePrevious"),
                  d = e("./useTokenTracker");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useAssetDetails.js" }
    ],
    [
      4830,
      {
        "../../shared/constants/copy": 3956,
        "../../shared/constants/time": 3972,
        "./useTimeout": 4855,
        "copy-to-clipboard": 2428,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useCopyToClipboard = function (e = u) {
                    const [t, a] = (0, s.useState)(!1),
                      n = (0, c.useTimeout)(
                        () => {
                          (0, r.default)(" ", i.COPY_OPTIONS), a(!1);
                        },
                        e,
                        !1
                      ),
                      o = (0, s.useCallback)(
                        (e) => {
                          a(!0), n(), (0, r.default)(e, i.COPY_OPTIONS);
                        },
                        [n]
                      );
                    return [t, o];
                  });
                var n,
                  s = e("react"),
                  r = (n = e("copy-to-clipboard")) && n.__esModule ? n : { default: n },
                  o = e("../../shared/constants/time"),
                  i = e("../../shared/constants/copy"),
                  c = e("./useTimeout");
                const u = o.MINUTE;
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useCopyToClipboard.js" }
    ],
    [
      4831,
      {
        "../../shared/constants/common": 3955,
        "../../shared/constants/network": 3963,
        "../../shared/modules/Numeric": 3984,
        "../../shared/modules/conversion.utils": 3988,
        "../ducks/metamask/metamask": 4763,
        "../helpers/utils/confirm-tx.util": 4794,
        "../selectors": 5197,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useCurrencyDisplay = function (
                    e,
                    { displayValue: t, prefix: a, numberOfDecimals: p, denomination: m, currency: f, ...g }
                  ) {
                    const T = (0, s.useSelector)(o.getCurrentCurrency),
                      h = (0, s.useSelector)(i.getNativeCurrency),
                      v = (0, s.useSelector)(i.getConversionRate),
                      y = f === T,
                      _ = (0, n.useMemo)(
                        () =>
                          t ||
                          (f === h || (!y && !h)
                            ? new l.Numeric(e, 16, d.EtherDenomination.WEI)
                                .toDenomination(m || d.EtherDenomination.ETH)
                                .round(p || 2)
                                .toBase(10)
                                .toString()
                            : y && v
                            ? (0, r.formatCurrency)(
                                (0, c.getValueFromWeiHex)({
                                  value: e,
                                  fromCurrency: h,
                                  toCurrency: f,
                                  conversionRate: v,
                                  numberOfDecimals: p || 2,
                                  toDenomination: m
                                }),
                                f
                              )
                            : null),
                        [e, h, v, t, p, m, f, y]
                      );
                    let E;
                    if (!g.hideLabel) {
                      const e = Object.values(u.TEST_NETWORK_TICKER_MAP).includes(f) ? f : null == f ? void 0 : f.toUpperCase();
                      E = g.suffix || e;
                    }
                    return [`${a || ""}${_}${E ? ` ${E}` : ""}`, { prefix: a, value: _, suffix: E }];
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("../helpers/utils/confirm-tx.util"),
                  o = e("../selectors"),
                  i = e("../ducks/metamask/metamask"),
                  c = e("../../shared/modules/conversion.utils"),
                  u = e("../../shared/constants/network"),
                  l = e("../../shared/modules/Numeric"),
                  d = e("../../shared/constants/common");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useCurrencyDisplay.js" }
    ],
    [
      4832,
      {
        "../../shared/constants/swaps": 3970,
        "../../shared/modules/string-utils": 4002,
        "../ducks/metamask/metamask": 4763,
        "../helpers/constants/routes": 4776,
        "../selectors": 5197,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useCurrentAsset = function () {
                    var e;
                    const t = (0, s.useRouteMatch)({ path: `${i.ASSET_ROUTE}/:asset`, exact: !0, strict: !0 }),
                      a = null == t || null === (e = t.params) || void 0 === e ? void 0 : e.asset,
                      l = (0, n.useSelector)(r.getTokens),
                      d = a && l.find(({ address: e }) => (0, u.isEqualCaseInsensitive)(e, a)),
                      p = (0, n.useSelector)(o.getCurrentChainId);
                    return d ?? (c.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[p] || c.ETH_SWAPS_TOKEN_OBJECT);
                  });
                var n = e("react-redux"),
                  s = e("react-router-dom"),
                  r = e("../ducks/metamask/metamask"),
                  o = e("../selectors"),
                  i = e("../helpers/constants/routes"),
                  c = e("../../shared/constants/swaps"),
                  u = e("../../shared/modules/string-utils");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useCurrentAsset.js" }
    ],
    [
      4833,
      { "../ducks/send": 4765, "../selectors": 5197, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.useDraftTransactionWithTxParams = void 0);
                var n = e("react-redux"),
                  s = e("../ducks/send"),
                  r = e("../selectors");
                a.useDraftTransactionWithTxParams = () => {
                  const e = (0, n.useSelector)(s.getCurrentDraftTransaction),
                    t = (0, n.useSelector)(r.getUnapprovedTransactions);
                  let a = {};
                  if (0 !== Object.keys(e).length) {
                    var o, i, c, u, l, d, p, m, f, g;
                    const n = t[e.id];
                    a = {
                      txParams: {
                        gasPrice: null === (o = e.gas) || void 0 === o ? void 0 : o.gasPrice,
                        gas:
                          null != n && n.userEditedGasLimit
                            ? null == n || null === (i = n.txParams) || void 0 === i
                              ? void 0
                              : i.gas
                            : null === (c = e.gas) || void 0 === c
                            ? void 0
                            : c.gasLimit,
                        maxFeePerGas:
                          null != n && null !== (u = n.txParams) && void 0 !== u && u.maxFeePerGas
                            ? null == n || null === (l = n.txParams) || void 0 === l
                              ? void 0
                              : l.maxFeePerGas
                            : null === (d = e.gas) || void 0 === d
                            ? void 0
                            : d.maxFeePerGas,
                        maxPriorityFeePerGas:
                          null != n && null !== (p = n.txParams) && void 0 !== p && p.maxPriorityFeePerGas
                            ? null == n || null === (m = n.txParams) || void 0 === m
                              ? void 0
                              : m.maxPriorityFeePerGas
                            : null === (f = e.gas) || void 0 === f
                            ? void 0
                            : f.maxPriorityFeePerGas,
                        value: null === (g = e.amount) || void 0 === g ? void 0 : g.value,
                        type: e.transactionType
                      },
                      userFeeLevel: null == n ? void 0 : n.userFeeLevel
                    };
                  }
                  return a;
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useDraftTransactionWithTxParams.js" }
    ],
    [
      4834,
      { lodash: 3312, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useEqualityCheck = function (e, t = s.isEqual) {
                    const [a, r] = (0, n.useState)(e);
                    return (
                      (0, n.useLayoutEffect)(() => {
                        t(e, a) || r(e);
                      }, [e, t, a]),
                      a
                    );
                  });
                var n = e("react"),
                  s = e("lodash");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useEqualityCheck.js" }
    ],
    [
      4835,
      {
        "../../shared/modules/conversion.utils": 3988,
        "../ducks/metamask/metamask": 4763,
        "../helpers/utils/confirm-tx.util": 4794,
        "../selectors": 5197,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useEthFiatAmount = function (e, t = {}, a) {
                    const u = (0, s.useSelector)(i.getConversionRate),
                      l = (0, s.useSelector)(r.getCurrentCurrency),
                      d = (0, s.useSelector)(r.getShouldShowFiat),
                      p = t.showFiat ?? d,
                      m = (0, n.useMemo)(() => (0, c.decEthToConvertedCurrency)(e, l, u), [u, l, e]);
                    if (!p || "ETH" === l.toUpperCase() || u <= 0 || e === undefined) return undefined;
                    return a ? (0, o.formatCurrency)(m, l) : `${(0, o.formatCurrency)(m, l)} ${l.toUpperCase()}`;
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("../selectors"),
                  o = e("../helpers/utils/confirm-tx.util"),
                  i = e("../ducks/metamask/metamask"),
                  c = e("../../shared/modules/conversion.utils");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useEthFiatAmount.js" }
    ],
    [
      4836,
      { "../ducks/metamask/metamask": 4763, "./useSafeGasEstimatePolling": 4848, "lodash/isEqual": 3300, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useGasFeeEstimates = function () {
                    const e = (0, r.useSelector)(o.getGasEstimateType),
                      t = (0, r.useSelector)(o.getGasFeeEstimates, s.default),
                      a = (0, r.useSelector)(o.getIsGasEstimatesLoading),
                      n = (0, r.useSelector)(o.getIsNetworkBusy);
                    return (
                      (0, i.useSafeGasEstimatePolling)(),
                      { gasFeeEstimates: t, gasEstimateType: e, isGasEstimatesLoading: a, isNetworkBusy: n }
                    );
                  });
                var n,
                  s = (n = e("lodash/isEqual")) && n.__esModule ? n : { default: n },
                  r = e("react-redux"),
                  o = e("../ducks/metamask/metamask"),
                  i = e("./useSafeGasEstimatePolling");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useGasFeeEstimates.js" }
    ],
    [
      4837,
      { "../contexts/i18n": 4748, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useI18nContext = function () {
                    return (0, n.useContext)(s.I18nContext);
                  });
                var n = e("react"),
                  s = e("../contexts/i18n");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useI18nContext.js" }
    ],
    [
      4838,
      {
        "../../shared/modules/conversion.utils": 3988,
        "../../shared/modules/transaction.utils": 4004,
        "../helpers/utils/gas": 4797,
        "./useGasFeeEstimates": 4836,
        "bignumber.js": 2283,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useIncrementedGasFees = function (e) {
                    const { gasFeeEstimates: t = {} } = (0, u.useGasFeeEstimates)();
                    return (0, r.useMemo)(() => {
                      var a, n, s, r;
                      const o = {
                          gasLimit: null === (a = e.txParams) || void 0 === a ? void 0 : a.gas,
                          gas: null === (n = e.txParams) || void 0 === n ? void 0 : n.gas
                        },
                        c = (null == t || null === (s = t.medium) || void 0 === s ? void 0 : s.suggestedMaxFeePerGas) ?? "0",
                        u = (null == t || null === (r = t.medium) || void 0 === r ? void 0 : r.suggestedMaxPriorityFeePerGas) ?? "0";
                      if ((0, i.isEIP1559Transaction)(e)) {
                        var d, p;
                        const t = null === (d = e.txParams) || void 0 === d ? void 0 : d.maxFeePerGas,
                          a = null === (p = e.txParams) || void 0 === p ? void 0 : p.maxPriorityFeePerGas;
                        (o.maxFeePerGas = t === undefined || t.startsWith("-") ? "0x0" : l(t, c)),
                          (o.maxPriorityFeePerGas = a === undefined || a.startsWith("-") ? "0x0" : l(a, u));
                      } else {
                        var m;
                        const t = null === (m = e.txParams) || void 0 === m ? void 0 : m.gasPrice;
                        o.gasPrice = t === undefined || t.startsWith("-") ? "0x0" : l(t, c);
                      }
                      return o;
                    }, [e, t]);
                  });
                var n,
                  s = (n = e("bignumber.js")) && n.__esModule ? n : { default: n },
                  r = e("react"),
                  o = e("../../shared/modules/conversion.utils"),
                  i = e("../../shared/modules/transaction.utils"),
                  c = e("../helpers/utils/gas"),
                  u = e("./useGasFeeEstimates");
                function l(e, t) {
                  const a = (0, c.addTenPercentAndRound)(e),
                    n = (0, o.decGWEIToHexWEI)(t);
                  return new s.default(a, 16).greaterThan(new s.default(n, 16)) ? a : n;
                }
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useIncrementedGasFees.js" }
    ],
    [
      4839,
      {
        "../../shared/constants/network": 3963,
        "../../shared/constants/time": 3972,
        "../../shared/lib/fetch-with-cache": 3976,
        "../selectors": 5197,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useIsOriginalNativeTokenSymbol = function (e, t, a) {
                    const [n, l] = (0, s.useState)(null),
                      d = (0, r.useSelector)(u.useSafeChainsListValidationSelector);
                    return (
                      (0, s.useEffect)(() => {
                        !(async function (a) {
                          try {
                            var n;
                            if (!d) return void l(!0);
                            const s = i.CHAIN_ID_TO_CURRENCY_SYMBOL_MAP[e];
                            if (s) return void l(s === t);
                            const r = (
                                await (0, o.default)({
                                  url: "https://chainid.network/chains.json",
                                  cacheOptions: { cacheRefreshTime: c.DAY },
                                  functionName: "getSafeChainsList"
                                })
                              ).find((e) => e.chainId === parseInt(a, 16)),
                              u = (null == r || null === (n = r.nativeCurrency) || void 0 === n ? void 0 : n.symbol) ?? null;
                            return void l(u === t);
                          } catch (e) {
                            l(!1);
                          }
                        })(e);
                      }, [n, e, t, a, d]),
                      n
                    );
                  });
                var n,
                  s = e("react"),
                  r = e("react-redux"),
                  o = (n = e("../../shared/lib/fetch-with-cache")) && n.__esModule ? n : { default: n },
                  i = e("../../shared/constants/network"),
                  c = e("../../shared/constants/time"),
                  u = e("../selectors");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useIsOriginalNativeTokenSymbol.js" }
    ],
    [
      4840,
      { "../store/actions": 5204, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useIsOriginalTokenSymbol = function (e, t) {
                    const [a, r] = (0, n.useState)(null);
                    return (
                      (0, n.useEffect)(() => {
                        !(async function (e) {
                          const a = await (0, s.getTokenSymbol)(e);
                          r(a === t);
                        })(e);
                      }, [a, e, t]),
                      a
                    );
                  });
                var n = e("react"),
                  s = e("../store/actions");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useIsOriginalTokenSymbol.js" }
    ],
    [
      4841,
      { "../selectors": 5197, "@metamask/name-controller": 1406, lodash: 3312, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useName = function (e, t, a) {
                    var i;
                    const c = (0, s.useSelector)(o.getNames, r.isEqual),
                      u = (0, s.useSelector)(o.getCurrentChainId),
                      l = (function (e, t) {
                        if (t === n.NameType.ETHEREUM_ADDRESS) return e.toLowerCase();
                        return e;
                      })(e, t),
                      d = (function (e, t) {
                        if (e === n.NameType.ETHEREUM_ADDRESS) return t;
                        return "";
                      })(t, u),
                      p = a ?? d,
                      m = null === (i = c[t]) || void 0 === i || null === (i = i[l]) || void 0 === i ? void 0 : i[p];
                    return {
                      name: (null == m ? void 0 : m.name) ?? null,
                      sourceId: (null == m ? void 0 : m.sourceId) ?? null,
                      proposedNames: (null == m ? void 0 : m.proposedNames) ?? {}
                    };
                  });
                var n = e("@metamask/name-controller"),
                  s = e("react-redux"),
                  r = e("lodash"),
                  o = e("../selectors");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useName.ts" }
    ],
    [
      4842,
      {
        "../ducks/metamask/metamask": 4763,
        "../selectors": 5197,
        "./useI18nContext": 4837,
        "./usePrevious": 4845,
        lodash: 3312,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useNftsCollections = function () {
                    const e = (0, u.useI18nContext)(),
                      t = e("nftsPreviouslyOwned"),
                      a = e("unknownCollection"),
                      [l, d] = (0, n.useState)({}),
                      [p, m] = (0, n.useState)({ collectionName: t, nfts: [] }),
                      f = (0, s.useSelector)(o.getNfts),
                      [g, T] = (0, n.useState)(() => (null == f ? void 0 : f.length) >= 0),
                      h = (0, s.useSelector)(i.getSelectedAddress),
                      v = (0, s.useSelector)(i.getCurrentChainId),
                      y = (0, s.useSelector)(o.getNftContracts),
                      _ = (0, c.usePrevious)(f),
                      E = (0, c.usePrevious)(v),
                      S = (0, c.usePrevious)(h);
                    return (
                      (0, n.useEffect)(() => {
                        ((0, r.isEqual)(_, f) && (0, r.isEqual)(S, h) && (0, r.isEqual)(E, v)) ||
                          (() => {
                            if ((T(!0), h === undefined || v === undefined)) return;
                            const e = {},
                              n = { collectionName: t, nfts: [] };
                            f.forEach((t) => {
                              if (!1 === (null == t ? void 0 : t.isCurrentlyOwned)) n.nfts.push(t);
                              else if (e[t.address]) e[t.address].nfts.push(t);
                              else {
                                const n = y.find(({ address: e }) => e === t.address);
                                e[t.address] = {
                                  collectionName: (null == n ? void 0 : n.name) || a,
                                  collectionImage: (null == n ? void 0 : n.logo) || t.image,
                                  nfts: [t]
                                };
                              }
                            }),
                              d(e),
                              m(n),
                              T(!1);
                          })();
                      }, [f, _, y, T, v, E, h, S]),
                      { nftsLoading: g, collections: l, previouslyOwnedCollection: p }
                    );
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("lodash"),
                  o = e("../ducks/metamask/metamask"),
                  i = e("../selectors"),
                  c = e("./usePrevious"),
                  u = e("./useI18nContext");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useNftsCollections.js" }
    ],
    [
      4843,
      { "../selectors": 5197, "@metamask/permission-controller": 1491, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useOriginMetadata = function (e) {
                    const t = (0, s.useSelector)((t) => (0, r.getTargetSubjectMetadata)(t, e));
                    if (!e) return null;
                    let a = null;
                    try {
                      const t = new URL(e);
                      a = { host: t.host, hostname: t.hostname, origin: e, subjectType: n.SubjectType.Unknown };
                    } catch (e) {}
                    if (t && a) return { ...a, ...t };
                    if (t) return t;
                    return a;
                  });
                var n = e("@metamask/permission-controller"),
                  s = e("react-redux"),
                  r = e("../selectors");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useOriginMetadata.js" }
    ],
    [
      4844,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.usePetnamesEnabled = function () {
                    return !1;
                  });
              };
            };
      },
      { package: "$root$", file: "ui/hooks/usePetnamesEnabled.ts" }
    ],
    [
      4845,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.usePrevious = function (e) {
                    const t = (0, n.useRef)();
                    return (
                      (0, n.useEffect)(() => {
                        t.current = e;
                      }, [e]),
                      t.current
                    );
                  });
                var n = e("react");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/usePrevious.js" }
    ],
    [
      4846,
      {
        "../ducks/confirm-transaction/confirm-transaction.duck": 4756,
        "../ducks/history/history": 4760,
        "../helpers/utils/util": 4812,
        "../selectors": 5197,
        "../store/actions": 5204,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useRejectTransactionModal = function () {
                    const e = (0, n.useDispatch)(),
                      t = (0, s.useHistory)(),
                      a = (0, n.useSelector)(c.getMostRecentOverviewPage),
                      l = (0, n.useSelector)(u.getTotalUnapprovedMessagesCount),
                      d = (0, n.useSelector)(u.unconfirmedMessagesHashSelector);
                    return {
                      handleCancelAll: () => {
                        e(
                          (0, o.showModal)({
                            name: "REJECT_TRANSACTIONS",
                            onSubmit: async () => {
                              await e((0, o.rejectAllMessages)((0, r.valuesFor)(d))), e((0, i.clearConfirmTransaction)()), t.push(a);
                            },
                            unapprovedTxCount: l,
                            isRequestType: !0
                          })
                        );
                      }
                    };
                  });
                var n = e("react-redux"),
                  s = e("react-router-dom"),
                  r = e("../helpers/utils/util"),
                  o = e("../store/actions"),
                  i = e("../ducks/confirm-transaction/confirm-transaction.duck"),
                  c = e("../ducks/history/history"),
                  u = e("../selectors");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useRejectTransactionModal.js" }
    ],
    [
      4847,
      { "../ducks/history/history": 4760, react: 3690, "react-redux": 3655, "react-router-dom": 3675 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useRouting = function () {
                    const e = (0, s.useHistory)(),
                      t = (0, r.useSelector)(o.getMostRecentOverviewPage);
                    return {
                      navigateToMostRecentOverviewPage: (0, n.useCallback)(() => {
                        e.push(t);
                      }, [e, t])
                    };
                  });
                var n = e("react"),
                  s = e("react-router-dom"),
                  r = e("react-redux"),
                  o = e("../ducks/history/history");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useRouting.js" }
    ],
    [
      4848,
      { "../store/actions": 5204, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useSafeGasEstimatePolling = function () {
                    (0, n.useEffect)(() => {
                      let e,
                        t = !0;
                      const a = () => {
                        (t = !1), e && ((0, s.disconnectGasFeeEstimatePoller)(e), (0, s.removePollingTokenFromAppState)(e));
                      };
                      return (
                        (0, s.getGasFeeEstimatesAndStartPolling)().then((a) => {
                          t
                            ? ((e = a), (0, s.addPollingTokenToAppState)(e))
                            : ((0, s.disconnectGasFeeEstimatePoller)(a), (0, s.removePollingTokenFromAppState)(e));
                        }),
                        window.addEventListener("beforeunload", a),
                        () => {
                          a(), window.removeEventListener("beforeunload", a);
                        }
                      );
                    }, []);
                  });
                var n = e("react"),
                  s = e("../store/actions");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useSafeGasEstimatePolling.js" }
    ],
    [
      4849,
      { lodash: 3312, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.useScrollRequired = void 0);
                var n = e("react"),
                  s = e("lodash");
                a.useScrollRequired = (e = []) => {
                  const t = (0, n.useRef)(),
                    [a, r] = (0, n.useState)(!1),
                    [o, i] = (0, n.useState)(!1),
                    c = () => {
                      if (!t.current) return;
                      const e = t.current && t.current.scrollHeight > t.current.clientHeight,
                        a = e && Math.round(t.current.scrollTop) + t.current.offsetHeight + 16 >= t.current.scrollHeight;
                      r(e), (e && !a) || i(!0);
                    };
                  (0, n.useEffect)(c, [t, ...e]);
                  return {
                    isScrollable: a,
                    isScrolledToBottom: o,
                    scrollToBottom: () => {
                      i(!0), t.current && t.current.scrollTo(0, t.current.scrollHeight);
                    },
                    ref: t,
                    onScroll: (0, s.debounce)(c, 25)
                  };
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useScrollRequired.js" }
    ],
    [
      4850,
      { "../helpers/constants/routes": 4776, "../selectors": 5197, "react-redux": 3655, "react-router-dom": 3675 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useSegmentContext = function () {
                    const e = (0, s.useRouteMatch)({ path: i, exact: !0, strict: !0 }),
                      t = ((0, n.useSelector)(o.txDataSelector) || {}).origin,
                      a = t ? { url: t } : undefined;
                    return { page: e ? { path: e.path, title: r.PATH_NAME_MAP[e.path], url: e.path } : undefined, referrer: a };
                  });
                var n = e("react-redux"),
                  s = e("react-router-dom"),
                  r = e("../helpers/constants/routes"),
                  o = e("../selectors");
                const i = Object.keys(r.PATH_NAME_MAP);
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useSegmentContext.js" }
    ],
    [
      4851,
      { "../ducks/app/app": 4755, "./useGasFeeEstimates": 4836, lodash: 3312, react: 3690, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useShouldAnimateGasEstimations = function () {
                    const { isGasEstimatesLoading: e, gasFeeEstimates: t } = (0, i.useGasFeeEstimates)(),
                      a = (0, s.useDispatch)(),
                      c = (0, s.useSelector)(o.getGasLoadingAnimationIsShowing),
                      u = (0, n.useRef)(t),
                      l = !(0, r.isEqual)(u.current, t),
                      d = (0, r.isEqual)(u.current, {});
                    l && (u.current = t);
                    const p = e || (l && !d);
                    (0, n.useEffect)(() => {
                      !1 === c && !0 === p && a((0, o.toggleGasLoadingAnimation)(!0));
                    }, [a, c, p]),
                      (0, n.useEffect)(() => {
                        let e;
                        return (
                          c &&
                            !p &&
                            (e = setTimeout(() => {
                              a((0, o.toggleGasLoadingAnimation)(!1));
                            }, 2e3)),
                          () => {
                            e && clearTimeout(e);
                          }
                        );
                      }, [a, c, p]);
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("lodash"),
                  o = e("../ducks/app/app"),
                  i = e("./useGasFeeEstimates");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useShouldAnimateGasEstimations.js" }
    ],
    [
      4852,
      { "../../shared/constants/time": 3972, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useShouldShowSpeedUp = function (e, t) {
                    const { transactions: a, hasRetried: r } = e,
                      [o = {}] = a,
                      { submittedTime: i } = o,
                      [c, u] = (0, n.useState)(() => Date.now() - i > 5e3 && t && !r);
                    return (
                      (0, n.useEffect)(() => {
                        let e;
                        return (
                          r ||
                            !t ||
                            c ||
                            (Date.now() - i > 5 * s.SECOND
                              ? u(!0)
                              : (e = setTimeout(
                                  () => {
                                    u(!0), clearTimeout(e);
                                  },
                                  5001 - (Date.now() - i)
                                ))),
                          () => {
                            e && clearTimeout(e);
                          }
                        );
                      }, [i, c, r, t]),
                      c
                    );
                  });
                var n = e("react"),
                  s = e("../../shared/constants/time");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useShouldShowSpeedUp.js" }
    ],
    [
      4853,
      { "../selectors": 5197, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useSimulationFailureWarning = function (e) {
                    const t = (0, n.useSelector)(s.txDataSelector) || {},
                      a = Boolean(t.simulationFails);
                    return a && !e;
                  });
                var n = e("react-redux"),
                  s = e("../selectors");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useSimulationFailureWarning.js" }
    ],
    [
      4854,
      {
        "../../shared/lib/transactions-controller-utils": 3982,
        "../../shared/modules/swaps.utils": 4003,
        "../selectors": 5197,
        "./useTokenFiatAmount": 4858,
        "@metamask/transaction-controller": 1835,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useSwappedTokenValue = function (e, t) {
                    const { symbol: a, decimals: u, address: l } = t,
                      { primaryTransaction: d, initialTransaction: p } = e,
                      { type: m } = p,
                      { from: f } = p.txParams || {},
                      g = (0, n.useSelector)(i.getCurrentChainId),
                      T =
                        (null == t ? void 0 : t.symbol) === d.destinationTokenSymbol ||
                        ((0, o.isSwapsDefaultTokenAddress)(t.address, g) && (0, o.isSwapsDefaultTokenSymbol)(d.destinationTokenSymbol, g)),
                      h =
                        m === s.TransactionType.swap && T
                          ? (0, r.getSwapsTokensReceivedFromTxMeta)(d.destinationTokenSymbol, p, l, f, u, null, g)
                          : m === s.TransactionType.swap && d.swapTokenValue,
                      v = "string" == typeof h && -1 === Math.sign(h),
                      y = (0, c.useTokenFiatAmount)(l, h || "", a);
                    return { swapTokenValue: h, swapTokenFiatAmount: h && T && y, isViewingReceivedTokenFromSwap: T, isNegative: v };
                  });
                var n = e("react-redux"),
                  s = e("@metamask/transaction-controller"),
                  r = e("../../shared/lib/transactions-controller-utils"),
                  o = e("../../shared/modules/swaps.utils"),
                  i = e("../selectors"),
                  c = e("./useTokenFiatAmount");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useSwappedTokenValue.js" }
    ],
    [
      4855,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useTimeout = function (e, t, a = !0) {
                    const s = (0, n.useRef)(),
                      [r, o] = (0, n.useState)(null);
                    (0, n.useEffect)(() => {
                      s.current = e;
                    }, [e]),
                      (0, n.useEffect)(() => {
                        if ("start" !== r) return undefined;
                        const e = setTimeout(() => {
                          s.current();
                        }, t);
                        return (
                          o(e),
                          () => {
                            clearTimeout(r);
                          }
                        );
                      }, [t, r]);
                    const i = (0, n.useCallback)(() => {
                      clearTimeout(r), o("start");
                    }, [r]);
                    a && i();
                    return i;
                  });
                var n = e("react");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTimeout.js" }
    ],
    [
      4856,
      { "../../shared/modules/transaction.utils": 4004, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useTokenData = function (e, t = !0) {
                    return (0, n.useMemo)(() => (t && e ? (0, s.parseStandardTokenTransactionData)(e) : null), [t, e]);
                  });
                var n = e("react"),
                  s = e("../../shared/modules/transaction.utils");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTokenData.js" }
    ],
    [
      4857,
      {
        "../../shared/lib/metamask-controller-utils": 3977,
        "../../shared/lib/transactions-controller-utils": 3982,
        "./useTokenData": 4856,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useTokenDisplayValue = function (e, t, a = !0) {
                    const i = (0, o.useTokenData)(e, a),
                      c = (0, s.getTokenValueParam)(i),
                      u = Boolean(a && e && t && null !== t.decimals && t.decimals !== undefined && c);
                    return (0, n.useMemo)(() => (u ? (0, r.calcTokenAmount)(c, t.decimals).toString(10) : null), [u, c, t]);
                  });
                var n = e("react"),
                  s = e("../../shared/lib/metamask-controller-utils"),
                  r = e("../../shared/lib/transactions-controller-utils"),
                  o = e("./useTokenData");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTokenDisplayValue.js" }
    ],
    [
      4858,
      {
        "../../shared/modules/string-utils": 4002,
        "../ducks/metamask/metamask": 4763,
        "../helpers/utils/token-util": 4809,
        "../selectors": 5197,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useTokenFiatAmount = function (e, t, a, u = {}, l) {
                    const d = (0, s.useSelector)(r.getTokenExchangeRates, s.shallowEqual),
                      p = (0, s.useSelector)(i.getConversionRate),
                      m = (0, s.useSelector)(r.getCurrentCurrency),
                      f = (0, s.useSelector)(r.getShouldShowFiat),
                      g = u.showFiat ?? f,
                      T = Object.keys(d).find((t) => (0, c.isEqualCaseInsensitive)(t, e)),
                      h = u.exchangeRate ?? (T && d[T]),
                      v = (0, n.useMemo)(() => (0, o.getTokenFiatAmount)(h, p, m, t, a, !0, l), [h, p, m, t, a, l]);
                    if (!g || m.toUpperCase() === a) return undefined;
                    return v;
                  });
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("../selectors"),
                  o = e("../helpers/utils/token-util"),
                  i = e("../ducks/metamask/metamask"),
                  c = e("../../shared/modules/string-utils");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTokenFiatAmount.js" }
    ],
    [
      4859,
      {
        "../../shared/constants/time": 3972,
        "../../shared/modules/string-utils": 4002,
        "../selectors": 5197,
        "./useEqualityCheck": 4834,
        "@metamask/eth-token-tracker": 1224,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useTokenTracker = function ({ tokens: e, address: t, includeFailedTokens: a = !1, hideZeroBalanceTokens: n = !1 }) {
                    const d = (0, o.useSelector)(i.getCurrentChainId),
                      p = (0, o.useSelector)(i.getSelectedAddress, o.shallowEqual),
                      m = t ?? p,
                      [f, g] = (0, s.useState)(() => (null == e ? void 0 : e.length) >= 0),
                      [T, h] = (0, s.useState)([]),
                      [v, y] = (0, s.useState)(null),
                      _ = (0, s.useRef)(null),
                      E = (0, l.useEqualityCheck)(e),
                      S = (0, s.useCallback)(
                        (e) => {
                          const t = (n ? e.filter((e) => Number(e.balance) > 0) : e).map((e) => {
                            const t = E.find((t) => (0, u.isEqualCaseInsensitive)(t.address, e.address));
                            return { ...e, isERC721: null == t ? void 0 : t.isERC721, image: null == t ? void 0 : t.image };
                          });
                          h(t), g(!1), y(null);
                        },
                        [n, E]
                      ),
                      k = (0, s.useCallback)((e) => {
                        y(e), g(!1);
                      }, []),
                      w = (0, s.useCallback)(() => {
                        _.current &&
                          (_.current.stop(),
                          _.current.removeAllListeners("update"),
                          _.current.removeAllListeners("error"),
                          (_.current = null));
                      }, []),
                      A = (0, s.useCallback)(
                        (e, t) => {
                          w(),
                            (_.current = new r.default({
                              userAddress: e,
                              provider: global.ethereumProvider,
                              tokens: t,
                              includeFailedTokens: a,
                              pollingInterval: 8 * c.SECOND,
                              balanceDecimals: 5
                            })),
                            _.current.on("update", S),
                            _.current.on("error", k),
                            _.current.updateBalances();
                        },
                        [S, a, k, w]
                      );
                    return (
                      (0, s.useEffect)(() => w, [w]),
                      (0, s.useEffect)(() => {
                        g(!0), m && d !== undefined && global.ethereumProvider ? (0 === E.length && S([]), A(m, E)) : w();
                      }, [m, w, d, E, S, A]),
                      { loading: f, tokensWithBalances: T, error: v }
                    );
                  });
                var n,
                  s = e("react"),
                  r = (n = e("@metamask/eth-token-tracker")) && n.__esModule ? n : { default: n },
                  o = e("react-redux"),
                  i = e("../selectors"),
                  c = e("../../shared/constants/time"),
                  u = e("../../shared/modules/string-utils"),
                  l = e("./useEqualityCheck");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTokenTracker.js" }
    ],
    [
      4860,
      {
        "../../shared/constants/network": 3963,
        "../../shared/constants/swaps": 3970,
        "../../shared/modules/hexstring-utils": 3993,
        "../../shared/modules/swaps.utils": 4003,
        "../ducks/metamask/metamask": 4763,
        "../ducks/swaps/swaps": 4767,
        "../helpers/utils/token-util": 4809,
        "../selectors": 5197,
        "./useEqualityCheck": 4834,
        "@metamask/assets-controllers": 1046,
        "bignumber.js": 2283,
        lodash: 3312,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getRenderableTokenData = v),
                  (a.useTokensToSearch = function ({
                    usersTokens: e = [],
                    topTokens: t = {},
                    shuffledTokensList: a,
                    tokenBucketPriority: n = g.TokenBucketPriority.owned
                  }) {
                    const c = (0, r.useSelector)(l.getCurrentChainId),
                      u = (0, r.useSelector)(l.getTokenExchangeRates, i.isEqual),
                      f = (0, r.useSelector)(d.getConversionRate),
                      T = (0, r.useSelector)(l.getCurrentCurrency),
                      y = (0, r.useSelector)(l.getSwapsDefaultToken, r.shallowEqual),
                      _ = (0, r.useSelector)(l.getTokenList, i.isEqual),
                      E = (0, h.useEqualityCheck)(t),
                      S = (0, h.useEqualityCheck)(e),
                      k = v(y, u, f, T, c, _),
                      w = (0, h.useEqualityCheck)(k),
                      A = (0, r.useSelector)(p.getSwapsTokens, i.isEqual) || [],
                      I = A.length ? A : [w, ...a.filter((e) => e.symbol !== w.symbol)],
                      b = (0, h.useEqualityCheck)(I);
                    return (0, s.useMemo)(() => {
                      const e = S.reduce((e, t) => ({ ...e, [t.address.toLowerCase()]: t }), {}),
                        t = { owned: [], top: [], others: [] };
                      return (
                        (0, i.uniqBy)([w, ...b, ...S], (e) => e.address.toLowerCase()).forEach((a) => {
                          const s = v({ ...e[a.address.toLowerCase()], ...a }, u, f, T, c, _);
                          n === g.TokenBucketPriority.owned
                            ? (0, m.isSwapsDefaultTokenSymbol)(s.symbol, c) || e[a.address.toLowerCase()]
                              ? t.owned.push(s)
                              : E[a.address.toLowerCase()]
                              ? (t.top[E[a.address.toLowerCase()].index] = s)
                              : t.others.push(s)
                            : E[a.address.toLowerCase()]
                            ? (t.top[E[a.address.toLowerCase()].index] = s)
                            : (0, m.isSwapsDefaultTokenSymbol)(s.symbol, c) || e[a.address.toLowerCase()]
                            ? t.owned.push(s)
                            : t.others.push(s);
                        }),
                        (t.owned = t.owned.sort(({ rawFiat: e }, { rawFiat: t }) => (new o.default(e || 0).gt(t || 0) ? -1 : 1))),
                        (t.top = t.top.filter(Boolean)),
                        n === g.TokenBucketPriority.owned ? [...t.owned, ...t.top, ...t.others] : [...t.top, ...t.owned, ...t.others]
                      );
                    }, [b, S, E, u, f, T, w, c, _, n]);
                  });
                var n,
                  s = e("react"),
                  r = e("react-redux"),
                  o = (n = e("bignumber.js")) && n.__esModule ? n : { default: n },
                  i = e("lodash"),
                  c = e("@metamask/assets-controllers"),
                  u = e("../helpers/utils/token-util"),
                  l = e("../selectors"),
                  d = e("../ducks/metamask/metamask"),
                  p = e("../ducks/swaps/swaps"),
                  m = e("../../shared/modules/swaps.utils"),
                  f = e("../../shared/modules/hexstring-utils"),
                  g = e("../../shared/constants/swaps"),
                  T = e("../../shared/constants/network"),
                  h = e("./useEqualityCheck");
                function v(e, t, a, n, s, r) {
                  var i, l;
                  const { symbol: d, name: p, address: g, iconUrl: h, string: v, balance: y, decimals: _ } = e;
                  let E;
                  (0, m.isSwapsDefaultTokenSymbol)(d, s) ? (E = 1) : v && a > 0 && (E = t[(0, f.toChecksumHexAddress)(g)]);
                  const S = (0, u.getTokenFiatAmount)(E, a, n, v, d, !0) || "",
                    k = S ? (0, u.getTokenFiatAmount)(E, a, n, v, d, !1) : "",
                    w = s === T.CHAIN_IDS.GOERLI ? T.CHAIN_IDS.MAINNET : s,
                    A =
                      ((d === T.CURRENCY_SYMBOLS.ETH && s === T.CHAIN_IDS.MAINNET) ||
                      (d === T.CURRENCY_SYMBOLS.ETH && s === T.CHAIN_IDS.GOERLI) ||
                      (d === T.CURRENCY_SYMBOLS.BNB && s === T.CHAIN_IDS.BSC) ||
                      (d === T.CURRENCY_SYMBOLS.MATIC && s === T.CHAIN_IDS.POLYGON) ||
                      (d === T.CURRENCY_SYMBOLS.AVALANCHE && s === T.CHAIN_IDS.AVALANCHE) ||
                      (d === T.CURRENCY_SYMBOLS.ETH && s === T.CHAIN_IDS.OPTIMISM) ||
                      (d === T.CURRENCY_SYMBOLS.ETH && s === T.CHAIN_IDS.AURORA) ||
                      (d === T.CURRENCY_SYMBOLS.ETH && s === T.CHAIN_IDS.ARBITRUM) ||
                      (d === T.CURRENCY_SYMBOLS.ETH && s === T.CHAIN_IDS.LINEA_MAINNET) ||
                      (d === T.CURRENCY_SYMBOLS.ETH && s === T.CHAIN_IDS.ZKSYNC_ERA)
                        ? h
                        : (0, c.formatIconUrlWithProxy)({ chainId: w, tokenAddress: g || "" })) || (null == e ? void 0 : e.image);
                  return {
                    ...e,
                    primaryLabel: d,
                    secondaryLabel: p || (null === (i = r[null == g ? void 0 : g.toLowerCase()]) || void 0 === i ? void 0 : i.name),
                    rightPrimaryLabel: v && `${new o.default(v).round(6).toString()} ${d}`,
                    rightSecondaryLabel: S,
                    iconUrl: A,
                    identiconAddress: A ? null : g,
                    balance: y,
                    decimals: _,
                    name: p || (null === (l = r[null == g ? void 0 : g.toLowerCase()]) || void 0 === l ? void 0 : l.name),
                    rawFiat: k
                  };
                }
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTokensToSearch.js" }
    ],
    [
      4861,
      {
        "../../shared/constants/transaction": 3974,
        "../../shared/lib/metamask-controller-utils": 3977,
        "../../shared/modules/string-utils": 4002,
        "../ducks/metamask/metamask": 4763,
        "../helpers/constants/common": 4769,
        "../helpers/constants/transactions": 4780,
        "../helpers/utils/common.util": 4793,
        "../helpers/utils/token-util": 4809,
        "../helpers/utils/transactions.util": 4810,
        "../helpers/utils/util": 4812,
        "../selectors/selectors": 5200,
        "../store/actions": 5204,
        "./useCurrencyDisplay": 4831,
        "./useCurrentAsset": 4832,
        "./useI18nContext": 4837,
        "./useSwappedTokenValue": 4854,
        "./useTokenData": 4856,
        "./useTokenDisplayValue": 4857,
        "./useTokenFiatAmount": 4858,
        "./useUserPreferencedCurrency": 4866,
        "@metamask/transaction-controller": 1835,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useTransactionDisplayData = function (e) {
                    var t, a, b, P, M, O, C, N;
                    const x = (0, n.useDispatch)(),
                      R = (0, A.useCurrentAsset)(),
                      F = (0, n.useSelector)(m.getTokens),
                      D = (0, n.useSelector)(m.getNfts),
                      L = (0, n.useSelector)(o.getDetectedTokensInCurrentNetwork) || [],
                      G = (0, n.useSelector)(o.getTokenList),
                      U = (0, v.useI18nContext)(),
                      { initialTransaction: j, primaryTransaction: $ } = e,
                      { type: W } = j,
                      { from: H, to: B } = j.txParams || {},
                      V =
                        (0, n.useSelector)((e) => {
                          var t;
                          return (0, o.getKnownMethodData)(e, null == j || null === (t = j.txParams) || void 0 === t ? void 0 : t.data);
                        }) || {},
                      K = (0, i.getStatusKey)($),
                      q = K in p.PENDING_STATUS_HASH,
                      Y = K === r.TransactionStatus.submitted,
                      z = null === (t = $.txParams) || void 0 === t ? void 0 : t.value,
                      X = (0, d.formatDateWithYearContext)(j.time);
                    let Q,
                      Z = "-",
                      J = !1,
                      ee = B;
                    const te = p.TOKEN_CATEGORY_HASH[W];
                    let ae = null;
                    const [ne, se] = (0, s.useState)(null);
                    te &&
                      (ae =
                        F.find(({ address: e }) => (0, T.isEqualCaseInsensitive)(e, ee)) ||
                        L.find(({ address: e }) => (0, T.isEqualCaseInsensitive)(e, ee)) ||
                        G[ee.toLowerCase()]);
                    (0, s.useEffect)(() => {
                      !(async function () {
                        if (te && !ae) {
                          var e;
                          const t = await (0, l.getAssetDetails)(
                            B,
                            H,
                            null == j || null === (e = j.txParams) || void 0 === e ? void 0 : e.data,
                            D
                          );
                          se(t);
                        }
                      })();
                    }, [te, ae, ee, H, null == j || null === (a = j.txParams) || void 0 === a ? void 0 : a.data, D, B]),
                      ne && (ae = { address: ne.toAddress, symbol: ne.symbol, decimals: ne.decimals });
                    const re = (0, k.useTokenData)(null == j || null === (b = j.txParams) || void 0 === b ? void 0 : b.data, te),
                      oe = (0, l.getTokenIdParam)(re) ?? (0, h.getTokenValueParam)(re),
                      ie = te && D.find(({ address: e, tokenId: t }) => (0, T.isEqualCaseInsensitive)(e, ee) && t === oe),
                      ce = (0, S.useTokenDisplayValue)(null == $ || null === (P = $.txParams) || void 0 === P ? void 0 : P.data, ae, te),
                      ue = (0, y.useTokenFiatAmount)(
                        null === (M = ae) || void 0 === M ? void 0 : M.address,
                        ce,
                        null === (O = ae) || void 0 === O ? void 0 : O.symbol
                      ),
                      le = (0, d.stripHttpSchemes)(j.origin || (null === (C = j.msgParams) || void 0 === C ? void 0 : C.origin) || "");
                    let de,
                      pe,
                      me = te ? (null === (N = ae) || void 0 === N ? void 0 : N.symbol) : undefined,
                      fe = te ? ce : undefined,
                      ge = te ? ue : undefined;
                    const {
                      swapTokenValue: Te,
                      isNegative: he,
                      swapTokenFiatAmount: ve,
                      isViewingReceivedTokenFromSwap: ye
                    } = (0, w.useSwappedTokenValue)(e, R);
                    if (I.includes(W)) (de = f.TransactionGroupCategory.signatureRequest), (pe = U("signatureRequest")), (Q = le), (J = !0);
                    else if (W === r.TransactionType.swap)
                      (de = f.TransactionGroupCategory.swap),
                        (pe = U("swapTokenToToken", [j.sourceTokenSymbol, j.destinationTokenSymbol])),
                        (Q = le),
                        (J = !0),
                        (me = ye ? R.symbol : j.sourceTokenSymbol),
                        (fe = Te),
                        (ge = ve),
                        (Z = he ? "" : ye ? "+" : "-");
                    else if (W === r.TransactionType.swapApproval)
                      (de = f.TransactionGroupCategory.approval),
                        (pe = U("swapApproval", [$.sourceTokenSymbol])),
                        (Q = le),
                        (J = !0),
                        (me = $.sourceTokenSymbol);
                    else if (W === r.TransactionType.tokenMethodApprove) {
                      var _e;
                      (de = f.TransactionGroupCategory.approval),
                        (Z = ""),
                        (pe = U("approveSpendingCap", [
                          (null === (_e = ae) || void 0 === _e ? void 0 : _e.symbol) || U("token").toLowerCase()
                        ])),
                        (Q = le),
                        (J = !0);
                    } else if (W === r.TransactionType.tokenMethodSetApprovalForAll) {
                      var Ee;
                      (de = f.TransactionGroupCategory.approval),
                        (Z = ""),
                        (pe = U("setApprovalForAllTitle", [(null === (Ee = ae) || void 0 === Ee ? void 0 : Ee.symbol) || U("token")])),
                        (Q = le),
                        (J = !0);
                    } else if (W === r.TransactionType.contractInteraction) {
                      de = f.TransactionGroupCategory.interaction;
                      const e = (0, i.getTransactionTypeTitle)(U, W);
                      (pe = ((null == V ? void 0 : V.name) && (0, c.camelCaseToCapitalize)(V.name)) || e), (Q = le), (J = !0);
                    } else if (W === r.TransactionType.deployContract)
                      (de = f.TransactionGroupCategory.interaction), (pe = (0, i.getTransactionTypeTitle)(U, W)), (Q = le), (J = !0);
                    else if (W === r.TransactionType.incoming)
                      (de = f.TransactionGroupCategory.receive),
                        (pe = U("receive")),
                        (Z = ""),
                        (Q = U("fromAddress", [(0, d.shortenAddress)(H)]));
                    else if (W === r.TransactionType.tokenMethodTransferFrom || W === r.TransactionType.tokenMethodTransfer) {
                      var Se;
                      (de = f.TransactionGroupCategory.send),
                        (pe = U("sendSpecifiedTokens", [
                          (null === (Se = ae) || void 0 === Se ? void 0 : Se.symbol) || (null == ie ? void 0 : ie.name) || U("token")
                        ])),
                        (ee = (0, l.getTokenAddressParam)(re)),
                        (Q = U("toAddress", [(0, d.shortenAddress)(ee)]));
                    } else
                      W === r.TransactionType.tokenMethodSafeTransferFrom
                        ? ((de = f.TransactionGroupCategory.send),
                          (pe = U("safeTransferFrom")),
                          (ee = (0, l.getTokenAddressParam)(re)),
                          (Q = U("toAddress", [(0, d.shortenAddress)(ee)])))
                        : W === r.TransactionType.simpleSend
                        ? ((de = f.TransactionGroupCategory.send), (pe = U("send")), (Q = U("toAddress", [(0, d.shortenAddress)(ee)])))
                        : x(
                            (0, g.captureSingleException)(
                              `useTransactionDisplayData does not recognize transaction type. Type received is: ${W}`
                            )
                          );
                    const ke = (0, _.useUserPreferencedCurrency)(u.PRIMARY),
                      we = (0, _.useUserPreferencedCurrency)(u.SECONDARY),
                      [Ae] = (0, E.useCurrencyDisplay)(z, { prefix: Z, displayValue: fe, suffix: me, ...ke }),
                      [Ie] = (0, E.useCurrencyDisplay)(z, { prefix: Z, displayValue: ge, hideLabel: te || Boolean(Te), ...we });
                    return {
                      title: pe,
                      category: de,
                      date: X,
                      subtitle: Q,
                      subtitleContainsOrigin: J,
                      primaryCurrency: W === r.TransactionType.swap && q ? "" : Ae,
                      senderAddress: H,
                      recipientAddress: ee,
                      secondaryCurrency: (te && !ue) || (W === r.TransactionType.swap && !ve) ? undefined : Ie,
                      displayedStatusKey: K,
                      isPending: q,
                      isSubmitted: Y
                    };
                  });
                var n = e("react-redux"),
                  s = e("react"),
                  r = e("@metamask/transaction-controller"),
                  o = e("../selectors/selectors"),
                  i = e("../helpers/utils/transactions.util"),
                  c = e("../helpers/utils/common.util"),
                  u = e("../helpers/constants/common"),
                  l = e("../helpers/utils/token-util"),
                  d = e("../helpers/utils/util"),
                  p = e("../helpers/constants/transactions"),
                  m = e("../ducks/metamask/metamask"),
                  f = e("../../shared/constants/transaction"),
                  g = e("../store/actions"),
                  T = e("../../shared/modules/string-utils"),
                  h = e("../../shared/lib/metamask-controller-utils"),
                  v = e("./useI18nContext"),
                  y = e("./useTokenFiatAmount"),
                  _ = e("./useUserPreferencedCurrency"),
                  E = e("./useCurrencyDisplay"),
                  S = e("./useTokenDisplayValue"),
                  k = e("./useTokenData"),
                  w = e("./useSwappedTokenValue"),
                  A = e("./useCurrentAsset");
                const I = [
                  null,
                  undefined,
                  r.TransactionType.sign,
                  r.TransactionType.personalSign,
                  r.TransactionType.signTypedData,
                  r.TransactionType.ethDecrypt,
                  r.TransactionType.ethGetEncryptionPublicKey
                ];
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTransactionDisplayData.js" }
    ],
    [
      4862,
      { "../contexts/gasFee": 4747, "../selectors": 5197, "../store/actions": 5204, react: 3690, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.useTransactionEventFragment = void 0);
                var n = e("react"),
                  s = e("react-redux"),
                  r = e("../contexts/gasFee"),
                  o = e("../store/actions"),
                  i = e("../selectors");
                a.useTransactionEventFragment = () => {
                  const { transaction: e } = (0, r.useGasFeeContext)(),
                    t = (0, s.useSelector)((t) =>
                      (0, i.selectMatchingFragment)(t, {
                        fragmentOptions: {},
                        existingId: `transaction-added-${null == e ? void 0 : e.id}`
                      })
                    );
                  return {
                    updateTransactionEventFragment: (0, n.useCallback)(
                      async (a) => {
                        e &&
                          e.id &&
                          (t || (await (0, o.createTransactionEventFragment)(e.id)),
                          (0, o.updateEventFragment)(`transaction-added-${e.id}`, a));
                      },
                      [t, e]
                    )
                  };
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTransactionEventFragment.js" }
    ],
    [
      4863,
      {
        "../../shared/constants/app": 3953,
        "../ducks/metamask/metamask": 4763,
        "../helpers/utils/metrics": 4802,
        "../helpers/utils/transactions.util": 4810,
        "../selectors": 5197,
        "./useI18nContext": 4837,
        "@metamask/transaction-controller": 1835,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.useTransactionFunctionType = void 0);
                var n = e("react-redux"),
                  s = e("@metamask/transaction-controller"),
                  r = e("../../shared/constants/app"),
                  o = e("../selectors"),
                  i = e("../ducks/metamask/metamask"),
                  c = e("../helpers/utils/transactions.util"),
                  u = e("../helpers/utils/metrics"),
                  l = e("./useI18nContext");
                a.useTransactionFunctionType = (e = {}) => {
                  const t = (0, l.useI18nContext)(),
                    a = (0, n.useSelector)(i.getNativeCurrency),
                    { txParams: d } = e,
                    p = (0, n.useSelector)((e) => (0, o.getKnownMethodData)(e, null == d ? void 0 : d.data) || {});
                  if (!d) return {};
                  const m = e.type === s.TransactionType.tokenMethodSetApprovalForAll || e.type === s.TransactionType.tokenMethodApprove,
                    f = e.type === s.TransactionType.contractInteraction;
                  let g = (m || f) && e.origin !== r.ORIGIN_METAMASK ? (0, u.getMethodName)(null == p ? void 0 : p.name) : undefined;
                  return g || (g = e.type ? (0, c.getTransactionTypeTitle)(t, e.type, a) : t("contractInteraction")), { functionType: g };
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTransactionFunctionType.js" }
    ],
    [
      4864,
      { "../../shared/modules/string-utils": 4002, "../ducks/metamask/metamask": 4763, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.useTransactionInfo = void 0);
                var n = e("react-redux"),
                  s = e("../ducks/metamask/metamask"),
                  r = e("../../shared/modules/string-utils");
                a.useTransactionInfo = (e = {}) => {
                  var t;
                  const { allNftContracts: a, selectedAddress: o } = (0, n.useSelector)((e) => e.metamask),
                    { chainId: i } = (0, n.useSelector)(s.getProviderConfig);
                  return {
                    isNftTransfer: Boolean(
                      null == a || null === (t = a[o]) || void 0 === t || null === (t = t[i]) || void 0 === t
                        ? void 0
                        : t.find((t) => (0, r.isEqualCaseInsensitive)(t.address, e.txParams.to))
                    )
                  };
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTransactionInfo.js" }
    ],
    [
      4865,
      {
        "../../shared/modules/hexstring-utils": 3993,
        "../components/app/confirm-page-container/snaps/snap-insight": 4069,
        "../components/ui/tabs": 4719,
        "../components/ui/tabs/snaps/dropdown-tab": 4721,
        "../helpers/utils/util": 4812,
        "../selectors": 5197,
        "./snaps/useTransactionInsightSnaps": 4825,
        "@metamask/snaps-sdk": 1732,
        "@metamask/transaction-controller": 1835,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = g(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("@metamask/snaps-sdk"),
                  i = e("@metamask/transaction-controller"),
                  c = e("../../shared/modules/hexstring-utils"),
                  u = e("../components/ui/tabs"),
                  l = (n = e("../components/ui/tabs/snaps/dropdown-tab")) && n.__esModule ? n : { default: n },
                  d = e("../components/app/confirm-page-container/snaps/snap-insight"),
                  p = e("../selectors"),
                  m = e("../helpers/utils/util"),
                  f = e("./snaps/useTransactionInsightSnaps");
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (g = function (e) {
                    return e ? a : t;
                  })(e);
                }
                a.default = ({ txData: e }) => {
                  var t;
                  const { txParams: a, chainId: n, origin: g } = e,
                    T = `eip155:${(0, c.stripHexPrefix)(n)}`,
                    h = (0, r.useSelector)(p.getInsightSnaps),
                    v = (0, r.useSelector)(p.getSubjectMetadataDeepEqual),
                    y = (0, r.useSelector)(p.getInsightSnapIds),
                    [_, E] = (0, s.useState)(null === (t = h[0]) || void 0 === t ? void 0 : t.id),
                    S = { transaction: a, chainId: T, origin: g, insightSnaps: y, insightSnapId: _ },
                    { data: k, loading: w } = (0, f.useTransactionInsightSnaps)({ ...S, eagerFetching: !1 });
                  if (
                    ((0, s.useEffect)(() => {
                      y.length > 0 && !_ && E(y[0]);
                    }, [y, _, E]),
                    ((A = e.type) !== i.TransactionType.contractInteraction &&
                      A !== i.TransactionType.simpleSend &&
                      A !== i.TransactionType.tokenMethodSafeTransferFrom &&
                      A !== i.TransactionType.tokenMethodTransferFrom &&
                      A !== i.TransactionType.tokenMethodTransfer) ||
                      !h.length)
                  )
                    return null;
                  var A;
                  const I = h.find(({ id: e }) => e === _);
                  let b;
                  if (1 === h.length)
                    b = s.default.createElement(
                      u.Tab,
                      {
                        className: "confirm-page-container-content__tab",
                        name: (0, m.getSnapName)(null == I ? void 0 : I.id, v[null == I ? void 0 : I.id])
                      },
                      s.default.createElement(d.SnapInsight, { snapId: _, loading: w, insightHookParams: S })
                    );
                  else if (h.length > 1) {
                    const e = null == h ? void 0 : h.map(({ id: e }) => ({ value: e, name: (0, m.getSnapName)(e, v[e]) }));
                    b = s.default.createElement(
                      l.default,
                      { className: "confirm-page-container-content__tab", options: e, selectedOption: _, onChange: (e) => E(e) },
                      s.default.createElement(d.SnapInsight, { snapId: _, loading: w, insightHookParams: S })
                    );
                  }
                  return {
                    insightComponent: b,
                    warnings:
                      null == k
                        ? void 0
                        : k.reduce((e, t) => {
                            var a;
                            if ((null === (a = t.response) || void 0 === a ? void 0 : a.severity) === o.SeverityLevel.Critical) {
                              const {
                                snapId: a,
                                response: { content: n }
                              } = t;
                              e.push({ snapId: a, content: n });
                            }
                            return e;
                          }, [])
                  };
                };
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useTransactionInsights.js" }
    ],
    [
      4866,
      {
        "../../shared/constants/common": 3955,
        "../ducks/metamask/metamask": 4763,
        "../helpers/constants/common": 4769,
        "../selectors": 5197,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.useUserPreferencedCurrency = function (e, t = {}) {
                    const a = (0, n.useSelector)(r.getNativeCurrency),
                      { useNativeCurrencyAsPrimaryCurrency: c } = (0, n.useSelector)(s.getPreferences, n.shallowEqual),
                      u = (0, n.useSelector)(s.getShouldShowFiat) || t.showFiatOverride,
                      l = (0, n.useSelector)(s.getCurrentCurrency);
                    let d, p;
                    !u || (e === o.PRIMARY && c) || (e === o.SECONDARY && !c)
                      ? ((d = a || i.EtherDenomination.ETH), (p = t.numberOfDecimals || t.ethNumberOfDecimals || 8))
                      : ((e === o.SECONDARY && c) || (e === o.PRIMARY && !c)) &&
                        ((d = l), (p = t.numberOfDecimals || t.fiatNumberOfDecimals || 2));
                    return { currency: d, numberOfDecimals: p };
                  });
                var n = e("react-redux"),
                  s = e("../selectors"),
                  r = e("../ducks/metamask/metamask"),
                  o = e("../helpers/constants/common"),
                  i = e("../../shared/constants/common");
              };
            };
      },
      { package: "$root$", file: "ui/hooks/useUserPreferencedCurrency.js" }
    ],
    [
      4867,
      {
        "../app/scripts/lib/setupSentry": 75,
        "../app/scripts/lib/util": 82,
        "../shared/constants/alerts": 3952,
        "../shared/constants/app": 3953,
        "../shared/constants/copy": 3956,
        "../shared/lib/error-utils": 3975,
        "../shared/lib/switch-direction": 3980,
        "../shared/modules/object.utils": 3997,
        "./ducks/alerts": 4752,
        "./ducks/metamask/metamask": 4763,
        "./helpers/utils/tx-helper": 4811,
        "./pages": 4948,
        "./selectors": 5197,
        "./store/actions": 5204,
        "./store/background-connection": 5205,
        "./store/store": 5206,
        "copy-to-clipboard": 2428,
        lodash: 3312,
        loglevel: 3322,
        react: 3690,
        "react-dom": 3532,
        "webextension-polyfill": 3937
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function (e, t) {
                    const { backgroundConnection: a } = e;
                    a.getState(function (n, s) {
                      n
                        ? t(n, { ...s }, a)
                        : (async function (e, t, a) {
                            e.featureFlags || (e.featureFlags = {});
                            const { currentLocaleMessages: n, enLocaleMessages: s } = await (0, T.setupLocale)(e.currentLocale);
                            "rtl" === e.textDirection && (await (0, g.default)("rtl"));
                            const r = {
                              activeTab: a.activeTab,
                              metamask: e,
                              appState: {},
                              localeMessages: { currentLocale: e.currentLocale, current: n, en: s }
                            };
                            if ((P(t), (0, u.getEnvironmentType)() === m.ENVIRONMENT_TYPE_POPUP)) {
                              const { origin: e } = r.activeTab,
                                t = (0, y.getPermittedAccountsForCurrentTab)(r),
                                a = (0, y.getSelectedAddress)(r),
                                n = (0, E.getUnconnectedAccountAlertShown)(r),
                                s = (0, E.getUnconnectedAccountAlertEnabledness)(r);
                              e &&
                                s &&
                                !n[e] &&
                                t.length > 0 &&
                                !t.includes(a) &&
                                ((r[l.AlertTypes.unconnectedAccount] = { state: _.ALERT_STATE.OPEN }),
                                h.setUnconnectedAccountAlertShown(e));
                            }
                            const c = (0, v.default)(r);
                            b = c;
                            const d = (0, y.getUnapprovedTransactions)(e),
                              p = (0, k.default)(
                                d,
                                e.unapprovedMsgs,
                                e.unapprovedPersonalMsgs,
                                e.unapprovedDecryptMsgs,
                                e.unapprovedEncryptionPublicKeyMsgs,
                                e.unapprovedTypedMessages,
                                e.providerConfig.chainId
                              );
                            p.length > 0 && c.dispatch(h.showConfTxPage({ id: p[0].id }));
                            return (
                              (global.metamask = {
                                updateCurrentLocale: (e) => {
                                  c.dispatch(h.updateCurrentLocale(e));
                                },
                                setProviderType: (e) => {
                                  c.dispatch(h.setProviderType(e));
                                },
                                setFeatureFlag: (e, t) => {
                                  c.dispatch(h.setFeatureFlag(e, t));
                                }
                              }),
                              (0, i.render)(o.default.createElement(S.default, { store: c }), a.container),
                              c
                            );
                          })(s, a, e).then((e) => {
                            !(function (e) {
                              0;
                              (window.stateHooks.getCleanAppState = async function () {
                                const t = (0, r.clone)(e.getState());
                                return (
                                  (t.version = global.platform.getVersion()),
                                  (t.browser = window.navigator.userAgent),
                                  (t.completeTxList = await h.getTransactions({ filterToCurrentNetwork: !1 })),
                                  t
                                );
                              }),
                                (window.stateHooks.getSentryAppState = function () {
                                  const t = e.getState();
                                  return (0, d.maskObject)(t, p.SENTRY_UI_STATE);
                                }),
                                (window.stateHooks.getLogs = function () {
                                  const t = e.getState(),
                                    { logs: a } = t.metamask;
                                  return Object.values(a).sort((e, t) => e.timestamp - t.timestamp);
                                });
                            })(e),
                              t(null, e);
                          });
                    });
                  }),
                  (a.updateBackgroundConnection = void 0);
                var n = I(e("copy-to-clipboard")),
                  s = I(e("loglevel")),
                  r = e("lodash"),
                  o = I(e("react")),
                  i = e("react-dom"),
                  c = I(e("webextension-polyfill")),
                  u = e("../app/scripts/lib/util"),
                  l = e("../shared/constants/alerts"),
                  d = e("../shared/modules/object.utils"),
                  p = e("../app/scripts/lib/setupSentry"),
                  m = e("../shared/constants/app"),
                  f = e("../shared/constants/copy"),
                  g = I(e("../shared/lib/switch-direction")),
                  T = e("../shared/lib/error-utils"),
                  h = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = A(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("./store/actions")),
                  v = I(e("./store/store")),
                  y = e("./selectors"),
                  _ = e("./ducks/alerts"),
                  E = e("./ducks/metamask/metamask"),
                  S = I(e("./pages")),
                  k = I(e("./helpers/utils/tx-helper")),
                  w = e("./store/background-connection");
                function A(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (A = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function I(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                let b;
                s.default.setLevel(global.METAMASK_DEBUG ? "debug" : "warn", !1);
                const P = (e) => {
                  (0, w.setBackgroundConnection)(e),
                    e.onNotification((e) => {
                      if ("sendUpdate" !== e.method)
                        throw new Error(`Internal JSON-RPC Notification Not Handled:\n\n ${JSON.stringify(e)}`);
                      b.dispatch(h.updateMetamaskState(e.params[0]));
                    });
                };
                (a.updateBackgroundConnection = P),
                  (window.logStateString = async function (e) {
                    const t = await window.stateHooks.getCleanAppState(),
                      a = window.stateHooks.getLogs();
                    c.default.runtime
                      .getPlatformInfo()
                      .then((n) => {
                        (t.platform = n), (t.logs = a);
                        const s = JSON.stringify(t, null, 2);
                        e(null, s);
                      })
                      .catch((t) => {
                        e(t);
                      });
                  }),
                  (window.logState = function (e) {
                    return window.logStateString((t, a) => {
                      t
                        ? console.error(t.message)
                        : e
                        ? ((0, n.default)(a, f.COPY_OPTIONS), console.log("State log copied"))
                        : console.log(a);
                    });
                  });
              };
            };
      },
      { package: "$root$", file: "ui/index.js" }
    ],
    [
      4868,
      {
        "../../../shared/modules/string-utils": 4002,
        "../../components/app/nft-details/nft-details": 4216,
        "../../ducks/metamask/metamask": 4763,
        "../../helpers/constants/routes": 4776,
        "./components/native-asset": 4872,
        "./components/token-asset": 4873,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = e("react-redux"),
                  r = e("react-router-dom"),
                  o = e("../../../shared/modules/string-utils"),
                  i = p(e("../../components/app/nft-details/nft-details")),
                  c = e("../../ducks/metamask/metamask"),
                  u = e("../../helpers/constants/routes"),
                  l = p(e("./components/native-asset")),
                  d = p(e("./components/token-asset"));
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                a.default = () => {
                  const e = (0, s.useSelector)(c.getNativeCurrency),
                    t = (0, s.useSelector)(c.getTokens),
                    a = (0, s.useSelector)(c.getNfts),
                    { asset: p, id: m } = (0, r.useParams)(),
                    f = t.find(({ address: e }) => (0, o.isEqualCaseInsensitive)(e, p)),
                    g = a.find(({ address: e, tokenId: t }) => (0, o.isEqualCaseInsensitive)(e, p) && m === t.toString());
                  let T;
                  return (
                    (0, n.useEffect)(() => {
                      document.querySelector(".app").scroll(0, 0);
                    }, []),
                    (T = g
                      ? n.default.createElement(i.default, { nft: g })
                      : f
                      ? n.default.createElement(d.default, { token: f })
                      : p === e
                      ? n.default.createElement(l.default, { nativeCurrency: e })
                      : n.default.createElement(r.Redirect, { to: { pathname: u.DEFAULT_ROUTE } })),
                    n.default.createElement("div", { className: "main-container asset__container" }, T)
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/asset/asset.js" }
    ],
    [
      4869,
      { "../../../components/component-library": 4453, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = o(e("react")),
                  s = o(e("prop-types")),
                  r = e("../../../components/component-library");
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ accountName: e, assetName: t, onBack: a }) =>
                  n.default.createElement(
                    "button",
                    { className: "asset-breadcrumb", onClick: a },
                    n.default.createElement(r.Icon, {
                      name: r.IconName.ArrowLeft,
                      "data-testid": "asset__back",
                      marginInlineEnd: 3,
                      size: r.IconSize.Xs
                    }),
                    n.default.createElement("span", null, e),
                    " / ",
                    n.default.createElement("span", { className: "asset-breadcrumb__asset" }, t)
                  );
                i.propTypes = {
                  accountName: s.default.string.isRequired,
                  assetName: s.default.string.isRequired,
                  onBack: s.default.func.isRequired
                };
                a.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/pages/asset/components/asset-breadcrumb.js" }
    ],
    [
      4870,
      { "./asset-breadcrumb": 4869, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = o(e("react")),
                  s = o(e("prop-types")),
                  r = o(e("./asset-breadcrumb"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const i = ({ accountName: e, assetName: t, onBack: a, optionsButton: s }) =>
                  n.default.createElement(
                    "div",
                    { className: "asset-navigation" },
                    n.default.createElement(r.default, { accountName: e, assetName: t, onBack: a }),
                    s
                  );
                i.propTypes = {
                  accountName: s.default.string.isRequired,
                  assetName: s.default.string.isRequired,
                  onBack: s.default.func.isRequired,
                  optionsButton: s.default.element
                };
                a.default = i;
              };
            };
      },
      { package: "$root$", file: "ui/pages/asset/components/asset-navigation.js" }
    ],
    [
      4871,
      {
        "../../../components/component-library": 4453,
        "../../../components/ui/menu": 4681,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../selectors": 5197,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = (n = e("prop-types")) && n.__esModule ? n : { default: n },
                  o = e("react-router-dom"),
                  i = e("react-redux"),
                  c = e("../../../contexts/i18n"),
                  u = e("../../../components/ui/menu"),
                  l = e("../../../selectors"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../components/component-library"),
                  m = e("../../../helpers/constants/design-system");
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (f = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const g = ({ onRemove: e, onClickBlockExplorer: t, onViewTokenDetails: a, tokenSymbol: n, isNativeAsset: r }) => {
                    const f = (0, s.useContext)(c.I18nContext),
                      [g, T] = (0, s.useState)(!1),
                      h = (0, o.useHistory)(),
                      v = (0, i.useSelector)(l.getBlockExplorerLinkText),
                      y = (0, s.useRef)(!1);
                    return s.default.createElement(
                      "div",
                      { ref: y },
                      s.default.createElement(p.ButtonIcon, {
                        className: "asset-options__button",
                        "data-testid": "asset-options__button",
                        onClick: () => T(!0),
                        ariaLabel: f("assetOptions"),
                        iconName: p.IconName.MoreVertical,
                        color: m.Color.textDefault,
                        size: p.ButtonIconSize.Sm
                      }),
                      g
                        ? s.default.createElement(
                            u.Menu,
                            { anchorElement: y.current, onHide: () => T(!1) },
                            s.default.createElement(
                              u.MenuItem,
                              {
                                iconName: p.IconName.Export,
                                "data-testid": "asset-options__etherscan",
                                onClick:
                                  "addBlockExplorer" === v.firstPart
                                    ? () => {
                                        h.push(`${d.NETWORKS_ROUTE}#blockExplorerUrl`);
                                      }
                                    : () => {
                                        T(!1), t();
                                      }
                              },
                              f(v.firstPart, "" === v.secondPart ? null : [f("blockExplorerAssetAction")])
                            ),
                            r
                              ? null
                              : s.default.createElement(
                                  u.MenuItem,
                                  {
                                    iconName: p.IconName.Trash,
                                    "data-testid": "asset-options__hide",
                                    onClick: () => {
                                      T(!1), e();
                                    }
                                  },
                                  f("hideTokenSymbol", [n])
                                ),
                            r
                              ? null
                              : s.default.createElement(
                                  u.MenuItem,
                                  {
                                    iconName: p.IconName.Info,
                                    "data-testid": "asset-options__token-details",
                                    onClick: () => {
                                      T(!1), a();
                                    }
                                  },
                                  f("tokenDetails")
                                )
                          )
                        : null
                    );
                  },
                  T = (e) => "function" != typeof e;
                g.propTypes = {
                  isNativeAsset: r.default.bool,
                  onClickBlockExplorer: r.default.func.isRequired,
                  onRemove: (e) => {
                    if (!1 === e.isNativeAsset && T(e.onRemove)) throw new Error("When isNativeAsset is true, onRemove is a required prop");
                  },
                  onViewTokenDetails: (e) => {
                    if (!1 === e.isNativeAsset && T(e.onViewTokenDetails))
                      throw new Error("When isNativeAsset is true, onViewTokenDetails is a required prop");
                  },
                  tokenSymbol: (e) => {
                    if (!1 === e.isNativeAsset && "string" != typeof e.tokenSymbol)
                      throw new Error("When isNativeAsset is true, tokenSymbol is a required prop");
                  }
                };
                a.default = g;
              };
            };
      },
      { package: "$root$", file: "ui/pages/asset/components/asset-options.js" }
    ],
    [
      4872,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/app/transaction-list": 4375,
        "../../../components/app/wallet-overview": 4387,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../../selectors/selectors": 5200,
        "./asset-navigation": 4870,
        "./asset-options": 4871,
        "@metamask/etherscan-link": 1255,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = y);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = h(e("prop-types")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("@metamask/etherscan-link"),
                  c = h(e("../../../components/app/transaction-list")),
                  u = e("../../../components/app/wallet-overview"),
                  l = e("../../../selectors/selectors"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../helpers/utils/util"),
                  m = e("../../../contexts/metametrics"),
                  f = e("../../../../shared/constants/metametrics"),
                  g = h(e("./asset-navigation")),
                  T = h(e("./asset-options"));
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (v = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function y({ nativeCurrency: e }) {
                  const t = (0, r.useSelector)((e) => (0, l.getSelectedIdentity)(e).name),
                    a = (0, r.useSelector)(l.getCurrentChainId),
                    s = (0, r.useSelector)(l.getRpcPrefsForCurrentProvider),
                    h = (0, r.useSelector)(l.getSelectedAddress),
                    v = (0, o.useHistory)(),
                    y = (0, i.getAccountLink)(h, a, s),
                    _ = (0, n.useContext)(m.MetaMetricsContext),
                    E = (0, r.useSelector)(l.getIsCustomNetwork);
                  return n.default.createElement(
                    n.default.Fragment,
                    null,
                    n.default.createElement(g.default, {
                      accountName: t,
                      assetName: e,
                      onBack: () => v.push(d.DEFAULT_ROUTE),
                      optionsButton: n.default.createElement(T.default, {
                        isNativeAsset: !0,
                        onClickBlockExplorer: () => {
                          _({
                            event: "Clicked Block Explorer Link",
                            category: f.MetaMetricsEventCategory.Navigation,
                            properties: {
                              link_type: "Account Tracker",
                              action: "Asset Options",
                              block_explorer_domain: (0, p.getURLHostName)(y)
                            }
                          }),
                            global.platform.openTab({ url: y });
                        },
                        isCustomNetwork: E
                      })
                    }),
                    n.default.createElement(u.EthOverview, { className: "asset__overview", showAddress: !1 }),
                    n.default.createElement(c.default, { hideTokenTransactions: !0 })
                  );
                }
                y.propTypes = { nativeCurrency: s.default.string.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/pages/asset/components/native-asset.js" }
    ],
    [
      4873,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/app/transaction-list": 4375,
        "../../../components/app/wallet-overview": 4387,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../../selectors/selectors": 5200,
        "../../../store/actions": 5204,
        "./asset-navigation": 4870,
        "./asset-options": 4871,
        "@metamask/etherscan-link": 1255,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = _);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = v(e("prop-types")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("@metamask/etherscan-link"),
                  c = v(e("../../../components/app/transaction-list")),
                  u = e("../../../components/app/wallet-overview"),
                  l = e("../../../selectors/selectors"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../helpers/utils/util"),
                  m = e("../../../store/actions"),
                  f = e("../../../contexts/metametrics"),
                  g = e("../../../../shared/constants/metametrics"),
                  T = v(e("./asset-navigation")),
                  h = v(e("./asset-options"));
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (y = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function _({ token: e }) {
                  const t = (0, r.useDispatch)(),
                    a = (0, r.useSelector)(l.getCurrentChainId),
                    s = (0, r.useSelector)(l.getRpcPrefsForCurrentProvider),
                    v = (0, r.useSelector)(l.getSelectedIdentity),
                    y = v.name,
                    _ = v.address,
                    E = (0, o.useHistory)(),
                    S = (0, i.getTokenTrackerLink)(e.address, a, null, _, s),
                    k = (0, n.useContext)(f.MetaMetricsContext),
                    w = (0, r.useSelector)(l.getIsCustomNetwork);
                  return n.default.createElement(
                    n.default.Fragment,
                    null,
                    n.default.createElement(T.default, {
                      accountName: y,
                      assetName: e.symbol,
                      onBack: () => E.push(d.DEFAULT_ROUTE),
                      optionsButton: n.default.createElement(h.default, {
                        onRemove: () => t((0, m.showModal)({ name: "HIDE_TOKEN_CONFIRMATION", token: e, history: E })),
                        isCustomNetwork: w,
                        onClickBlockExplorer: () => {
                          k({
                            event: "Clicked Block Explorer Link",
                            category: g.MetaMetricsEventCategory.Navigation,
                            properties: {
                              link_type: "Token Tracker",
                              action: "Token Options",
                              block_explorer_domain: (0, p.getURLHostName)(S)
                            }
                          }),
                            global.platform.openTab({ url: S });
                        },
                        onViewTokenDetails: () => {
                          E.push(`${d.TOKEN_DETAILS}/${e.address}`);
                        },
                        tokenSymbol: e.symbol
                      })
                    }),
                    n.default.createElement(u.TokenOverview, { className: "asset__overview", token: e }),
                    n.default.createElement(c.default, { tokenAddress: e.address })
                  );
                }
                _.propTypes = {
                  token: s.default.shape({ address: s.default.string.isRequired, decimals: s.default.number, symbol: s.default.string })
                    .isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/asset/components/token-asset.js" }
    ],
    [
      4874,
      { "./asset": 4868 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./asset")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/asset/index.js" }
    ],
    [
      4875,
      {
        "../../../shared/constants/metametrics": 3962,
        "../../../shared/constants/network": 3963,
        "../../../shared/constants/transaction": 3974,
        "../../components/app/network-account-balance-header/network-account-balance-header": 4211,
        "../../components/app/nft-default-image/nft-default-image": 4214,
        "../../components/component-library": 4453,
        "../../components/ui/page-container": 4692,
        "../../components/ui/site-origin/site-origin": 4716,
        "../../contexts/i18n": 4748,
        "../../contexts/metametrics": 4749,
        "../../ducks/history/history": 4760,
        "../../helpers/constants/common": 4769,
        "../../helpers/constants/design-system": 4771,
        "../../helpers/utils/util": 4812,
        "../../hooks/useCurrencyDisplay": 4831,
        "../../hooks/useOriginMetadata": 4843,
        "../../hooks/useUserPreferencedCurrency": 4866,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        "@metamask/etherscan-link": 1255,
        classnames: 2414,
        "eth-rpc-errors": 2648,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = M(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = e("react-redux"),
                  r = e("react-router-dom"),
                  o = e("eth-rpc-errors"),
                  i = e("@metamask/etherscan-link"),
                  c = P(e("classnames")),
                  u = e("../../components/ui/page-container"),
                  l = e("../../contexts/i18n"),
                  d = e("../../contexts/metametrics"),
                  p = e("../../ducks/history/history"),
                  m = e("../../store/actions"),
                  f = e("../../../shared/constants/metametrics"),
                  g = e("../../../shared/constants/transaction"),
                  T = e("../../components/component-library"),
                  h = e("../../selectors"),
                  v = P(e("../../components/app/nft-default-image/nft-default-image")),
                  y = e("../../helpers/utils/util"),
                  _ = e("../../helpers/constants/design-system"),
                  E = P(e("../../components/app/network-account-balance-header/network-account-balance-header")),
                  S = e("../../../shared/constants/network"),
                  k = P(e("../../components/ui/site-origin/site-origin")),
                  w = e("../../helpers/constants/common"),
                  A = e("../../hooks/useUserPreferencedCurrency"),
                  I = e("../../hooks/useCurrencyDisplay"),
                  b = e("../../hooks/useOriginMetadata");
                function P(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function M(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (M = function (e) {
                    return e ? a : t;
                  })(e);
                }
                a.default = () => {
                  var e;
                  const t = (0, n.useContext)(l.I18nContext),
                    a = (0, s.useDispatch)(),
                    P = (0, r.useHistory)(),
                    M = (0, s.useSelector)(p.getMostRecentOverviewPage),
                    O = (0, s.useSelector)(h.getSuggestedNfts).sort((e, t) => e.requestData.asset.tokenId - t.requestData.asset.tokenId),
                    C = (0, s.useSelector)(h.getRpcPrefsForCurrentProvider),
                    N = (0, s.useSelector)(h.getCurrentChainId),
                    x = (0, s.useSelector)(h.getIpfsGateway),
                    R = (0, n.useContext)(d.MetaMetricsContext),
                    F = (0, s.useSelector)(h.getNetworkIdentifier),
                    D = (0, s.useSelector)(h.getSelectedAddress),
                    L = (0, s.useSelector)(h.getSelectedAccountCachedBalance),
                    G = (0, s.useSelector)((e) => (0, h.getAddressBookEntryOrAccountName)(e, D)),
                    U = S.NETWORK_TO_NAME_MAP[N] || F,
                    { currency: j, numberOfDecimals: $ } = (0, A.useUserPreferencedCurrency)(w.PRIMARY, { ethNumberOfDecimals: 4 }),
                    [W] = (0, I.useCurrencyDisplay)(L, { numberOfDecimals: $, currency: j }),
                    H = (0, b.useOriginMetadata)(null === (e = O[0]) || void 0 === e ? void 0 : e.origin) || {},
                    B = (0, n.useCallback)(async () => {
                      await Promise.all(
                        O.map(async ({ requestData: { asset: e }, id: t }) => {
                          await a((0, m.resolvePendingApproval)(t, null)),
                            R({
                              event: f.MetaMetricsEventName.NftAdded,
                              category: f.MetaMetricsEventCategory.Wallet,
                              sensitiveProperties: {
                                token_contract_address: e.address,
                                token_symbol: e.symbol,
                                token_id: e.tokenId,
                                token_standard: e.standard,
                                asset_type: g.AssetType.NFT,
                                source: f.MetaMetricsTokenEventSource.Dapp
                              }
                            });
                        })
                      ),
                        P.push(M);
                    }, [a, P, R, M, O]),
                    V = (0, n.useCallback)(async () => {
                      await Promise.all(
                        O.map(async ({ id: e }) =>
                          a((0, m.rejectPendingApproval)(e, (0, o.serializeError)(o.ethErrors.provider.userRejectedRequest())))
                        )
                      ),
                        P.push(M);
                    }, [a, P, M, O]);
                  let K, q;
                  if (
                    ((0, n.useEffect)(() => {
                      O.length || P.push(M);
                    }, [P, M, O]),
                    O.length)
                  )
                    try {
                      const e = new URL(O[0].origin);
                      (K = e.host), (q = e.href);
                    } catch {
                      K = "dapp";
                    }
                  return n.default.createElement(
                    T.Box,
                    { height: _.BlockSize.Full, width: _.BlockSize.Full, display: _.Display.Flex, flexDirection: _.FlexDirection.Column },
                    n.default.createElement(
                      T.Box,
                      { paddingBottom: 2, className: "confirm-add-suggested-nft__header" },
                      n.default.createElement(E.default, {
                        accountName: G,
                        accountBalance: W,
                        accountAddress: D,
                        networkName: U,
                        chainId: N
                      }),
                      n.default.createElement(
                        T.Box,
                        {
                          paddingTop: 4,
                          paddingRight: 4,
                          paddingLeft: 4,
                          display: _.Display.Flex,
                          justifyContent: _.JustifyContent.center
                        },
                        n.default.createElement(k.default, {
                          chip: !0,
                          siteOrigin: H.origin,
                          title: H.origin,
                          iconSrc: H.iconUrl,
                          iconName: H.hostname
                        })
                      ),
                      n.default.createElement(
                        T.Text,
                        { variant: _.TextVariant.headingLg, textAlign: _.TextAlign.Center, margin: 2 },
                        t("addSuggestedNFTs")
                      ),
                      n.default.createElement(
                        T.Text,
                        { variant: _.TextVariant.bodyMd, textAlign: _.TextAlign.Center },
                        t("wantsToAddThisAsset", [
                          "dapp" === K
                            ? n.default.createElement(T.Text, { key: K, variant: _.TextVariant.bodyMd, fontWeight: "bold" }, K)
                            : n.default.createElement(T.ButtonLink, { key: K, size: T.BUTTON_SIZES.INHERIT, href: q, target: "_blank" }, K)
                        ])
                      )
                    ),
                    n.default.createElement(
                      T.Box,
                      { className: "confirm-add-suggested-nft__content" },
                      n.default.createElement(
                        T.Box,
                        { className: "confirm-add-suggested-nft__card", padding: 2, borderRadius: _.BorderRadius.MD },
                        n.default.createElement(
                          T.Box,
                          { className: (0, c.default)({ "confirm-add-suggested-nft__nft-list": O.length > 1 }) },
                          O.map(
                            ({
                              id: e,
                              requestData: {
                                asset: { address: t, tokenId: s, symbol: r, image: c, name: u }
                              }
                            }) => {
                              const l = (0, y.getAssetImageURL)(c, x),
                                d = (0, i.getTokenTrackerLink)(t, N, null, null, {
                                  blockExplorerUrl: (null == C ? void 0 : C.blockExplorerUrl) ?? null
                                });
                              return 1 === O.length
                                ? n.default.createElement(
                                    T.Box,
                                    {
                                      className: "confirm-add-suggested-nft__nft-single",
                                      key: `confirm-add-suggested-nft__nft-single-${e}`,
                                      borderRadius: _.BorderRadius.MD,
                                      margin: 0,
                                      padding: 0
                                    },
                                    l
                                      ? n.default.createElement("img", {
                                          className: "confirm-add-suggested-nft__nft-single-image",
                                          src: l,
                                          alt: u || s
                                        })
                                      : n.default.createElement(v.default, {
                                          className: "confirm-add-suggested-nft__nft-single-image-default",
                                          tokenId: s,
                                          name: u || r || (0, y.shortenAddress)(t)
                                        }),
                                    n.default.createElement(
                                      T.Box,
                                      {
                                        padding: 1,
                                        display: _.Display.Flex,
                                        flexDirection: _.FlexDirection.Row,
                                        justifyContent: _.JustifyContent.spaceBetween,
                                        alignItems: _.AlignItems.Center
                                      },
                                      n.default.createElement(
                                        T.Box,
                                        {
                                          display: _.Display.Flex,
                                          flexDirection: _.FlexDirection.Column,
                                          justifyContent: _.JustifyContent.spaceEvenly,
                                          flexWrap: _.FlexWrap.NoWrap,
                                          width: _.BlockSize.Full,
                                          className: "confirm-add-suggested-nft__nft-single-sub-details"
                                        },
                                        C.blockExplorerUrl
                                          ? n.default.createElement(
                                              T.ButtonLink,
                                              {
                                                className: "confirm-add-suggested-nft__nft-name",
                                                href: d,
                                                title: t,
                                                target: "_blank",
                                                size: T.BUTTON_SIZES.INHERIT
                                              },
                                              u || r || (0, y.shortenAddress)(t)
                                            )
                                          : n.default.createElement(
                                              T.Text,
                                              { variant: _.TextVariant.bodyMd, className: "confirm-add-suggested-nft__nft-name", title: t },
                                              u || r || (0, y.shortenAddress)(t)
                                            ),
                                        n.default.createElement(
                                          T.Text,
                                          { variant: _.TextVariant.bodyMd, className: "confirm-add-suggested-nft__nft-tokenId" },
                                          "#",
                                          s
                                        )
                                      )
                                    )
                                  )
                                : n.default.createElement(
                                    T.Box,
                                    {
                                      display: _.Display.Flex,
                                      flexDirection: _.FlexDirection.Row,
                                      flexWrap: _.FlexWrap.NoWrap,
                                      alignItems: _.AlignItems.Center,
                                      justifyContent: _.JustifyContent.spaceBetween,
                                      marginBottom: 4,
                                      className: "confirm-add-suggested-nft__nft-list-item",
                                      key: `${t}-${s}`
                                    },
                                    n.default.createElement(
                                      T.Box,
                                      {
                                        display: _.Display.Flex,
                                        flexDirection: _.FlexDirection.Row,
                                        flexWrap: _.FlexWrap.NoWrap,
                                        alignItems: _.AlignItems.Center,
                                        justifyContent: _.JustifyContent.spaceBetween
                                      },
                                      l
                                        ? n.default.createElement("img", {
                                            className: "confirm-add-suggested-nft__nft-image",
                                            src: l,
                                            alt: u || s
                                          })
                                        : n.default.createElement(v.default, { className: "confirm-add-suggested-nft__nft-image-default" }),
                                      n.default.createElement(
                                        T.Box,
                                        {
                                          display: _.Display.Flex,
                                          flexDirection: _.FlexDirection.Column,
                                          justifyContent: _.JustifyContent.spaceEvenly,
                                          flexWrap: _.FlexWrap.NoWrap,
                                          width: _.BlockSize.Full,
                                          className: "confirm-add-suggested-nft__nft-sub-details"
                                        },
                                        C.blockExplorerUrl
                                          ? n.default.createElement(
                                              T.ButtonLink,
                                              {
                                                className: "confirm-add-suggested-nft__nft-name",
                                                href: d,
                                                title: t,
                                                target: "_blank",
                                                size: T.BUTTON_SIZES.INHERIT
                                              },
                                              u || r || (0, y.shortenAddress)(t)
                                            )
                                          : n.default.createElement(
                                              T.Text,
                                              { variant: _.TextVariant.bodySm, className: "confirm-add-suggested-nft__nft-name", title: t },
                                              u || r || (0, y.shortenAddress)(t)
                                            ),
                                        n.default.createElement(
                                          T.Text,
                                          { variant: _.TextVariant.bodySm, className: "confirm-add-suggested-nft__nft-tokenId" },
                                          "#",
                                          s
                                        )
                                      )
                                    ),
                                    n.default.createElement(T.ButtonIcon, {
                                      className: "confirm-add-suggested-nft__nft-remove",
                                      "data-testid": `confirm-add-suggested-nft__nft-remove-${e}`,
                                      iconName: T.IconName.Close,
                                      size: T.ButtonIconSize.Sm,
                                      color: _.IconColor.iconMuted,
                                      onClick: (t) => {
                                        t.preventDefault(),
                                          t.stopPropagation(),
                                          a(
                                            (0, m.rejectPendingApproval)(
                                              e,
                                              (0, o.serializeError)(o.ethErrors.provider.userRejectedRequest())
                                            )
                                          );
                                      }
                                    })
                                  );
                            }
                          )
                        )
                      )
                    ),
                    n.default.createElement(u.PageContainerFooter, {
                      cancelText: t("cancel"),
                      submitText: 1 === O.length ? t("addNft") : t("addNfts"),
                      onCancel: V,
                      onSubmit: B
                    })
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-add-suggested-nft/confirm-add-suggested-nft.js" }
    ],
    [
      4876,
      { "./confirm-add-suggested-nft": 4875 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./confirm-add-suggested-nft")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-add-suggested-nft/index.js" }
    ],
    [
      4877,
      {
        "../../../shared/constants/metametrics": 3962,
        "../../../shared/constants/transaction": 3974,
        "../../../shared/modules/string-utils": 4002,
        "../../components/ui/actionable-message/actionable-message": 4603,
        "../../components/ui/button": 4611,
        "../../components/ui/identicon": 4664,
        "../../components/ui/page-container": 4692,
        "../../components/ui/token-balance": 4731,
        "../../contexts/i18n": 4748,
        "../../contexts/metametrics": 4749,
        "../../ducks/history/history": 4760,
        "../../ducks/metamask/metamask": 4763,
        "../../helpers/constants/zendesk-url": 4781,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        "eth-rpc-errors": 2648,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = k(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                      if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : (n[r] = e[r]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  s = e("react-redux"),
                  r = e("react-router-dom"),
                  o = e("eth-rpc-errors"),
                  i = S(e("../../components/ui/actionable-message/actionable-message")),
                  c = S(e("../../components/ui/button")),
                  u = S(e("../../components/ui/identicon")),
                  l = S(e("../../components/ui/token-balance")),
                  d = e("../../components/ui/page-container"),
                  p = e("../../contexts/i18n"),
                  m = e("../../contexts/metametrics"),
                  f = e("../../ducks/history/history"),
                  g = e("../../ducks/metamask/metamask"),
                  T = S(e("../../helpers/constants/zendesk-url")),
                  h = e("../../../shared/modules/string-utils"),
                  v = e("../../store/actions"),
                  y = e("../../../shared/constants/metametrics"),
                  _ = e("../../../shared/constants/transaction"),
                  E = e("../../selectors");
                function S(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function k(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (k = function (e) {
                    return e ? a : t;
                  })(e);
                }
                a.default = () => {
                  const e = (0, n.useContext)(p.I18nContext),
                    t = (0, s.useDispatch)(),
                    a = (0, r.useHistory)(),
                    S = (0, s.useSelector)(f.getMostRecentOverviewPage),
                    k = (0, s.useSelector)(E.getSuggestedTokens),
                    w = (0, s.useSelector)(g.getTokens),
                    A = (0, n.useContext)(m.MetaMetricsContext),
                    I = (0, n.useMemo)(
                      () =>
                        (function (e, t) {
                          const a = e.find(({ requestData: { asset: e } }) => {
                            const a = t.find(({ address: t }) => (0, h.isEqualCaseInsensitive)(t, null == e ? void 0 : e.address));
                            return Boolean(a);
                          });
                          return Boolean(a);
                        })(k, w) &&
                        n.default.createElement(i.default, {
                          message: e("knownTokenWarning", [
                            n.default.createElement(
                              c.default,
                              {
                                type: "link",
                                key: "confirm-add-suggested-token-duplicate-warning",
                                className: "confirm-add-suggested-token__link",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                href: T.default.TOKEN_SAFETY_PRACTICES
                              },
                              e("learnScamRisk")
                            )
                          ]),
                          type: "warning",
                          withRightButton: !0,
                          useIcon: !0,
                          iconFillColor: "#f8c000"
                        }),
                      [k, w, e]
                    ),
                    b = (0, n.useMemo)(
                      () =>
                        (function (e, t) {
                          const a = e.find(({ requestData: { asset: e } }) => {
                            const a = t.find(
                              (t) =>
                                (0, h.isEqualCaseInsensitive)(t.symbol, null == e ? void 0 : e.symbol) &&
                                !(0, h.isEqualCaseInsensitive)(t.address, null == e ? void 0 : e.address)
                            );
                            return Boolean(a);
                          });
                          return Boolean(a);
                        })(k, w) &&
                        n.default.createElement(i.default, {
                          message: e("reusedTokenNameWarning"),
                          type: "warning",
                          withRightButton: !0,
                          useIcon: !0,
                          iconFillColor: "#f8c000"
                        }),
                      [k, w, e]
                    ),
                    P = (0, n.useCallback)(async () => {
                      await Promise.all(
                        k.map(async ({ requestData: { asset: e }, id: a }) => {
                          await t((0, v.resolvePendingApproval)(a, null)),
                            A({
                              event: y.MetaMetricsEventName.TokenAdded,
                              category: y.MetaMetricsEventCategory.Wallet,
                              sensitiveProperties: {
                                token_symbol: e.symbol,
                                token_contract_address: e.address,
                                token_decimal_precision: e.decimals,
                                unlisted: e.unlisted,
                                source: y.MetaMetricsTokenEventSource.Dapp,
                                token_standard: _.TokenStandard.ERC20,
                                asset_type: _.AssetType.token
                              }
                            });
                        })
                      ),
                        a.push(S);
                    }, [t, a, A, S, k]),
                    M = (0, n.useCallback)(async () => {
                      await Promise.all(
                        k.map(({ id: e }) =>
                          t((0, v.rejectPendingApproval)(e, (0, o.serializeError)(o.ethErrors.provider.userRejectedRequest())))
                        )
                      ),
                        a.push(S);
                    }, [t, a, S, k]);
                  return (
                    (0, n.useEffect)(() => {
                      k.length || a.push(S);
                    }, []),
                    n.default.createElement(
                      "div",
                      { className: "page-container" },
                      n.default.createElement(
                        "div",
                        { className: "page-container__header" },
                        n.default.createElement("div", { className: "page-container__title" }, e("addSuggestedTokens")),
                        n.default.createElement("div", { className: "page-container__subtitle" }, e("likeToImportTokens")),
                        I,
                        b
                      ),
                      n.default.createElement(
                        "div",
                        { className: "page-container__content" },
                        n.default.createElement(
                          "div",
                          { className: "confirm-add-suggested-token" },
                          n.default.createElement(
                            "div",
                            { className: "confirm-add-suggested-token__header" },
                            n.default.createElement("div", { className: "confirm-add-suggested-token__token" }, e("token")),
                            n.default.createElement("div", { className: "confirm-add-suggested-token__balance" }, e("balance"))
                          ),
                          n.default.createElement(
                            "div",
                            { className: "confirm-add-suggested-token__token-list" },
                            k.map(({ requestData: { asset: e } }) => {
                              return n.default.createElement(
                                "div",
                                { className: "confirm-add-suggested-token__token-list-item", key: e.address },
                                n.default.createElement(
                                  "div",
                                  { className: "confirm-add-suggested-token__token confirm-add-suggested-token__data" },
                                  n.default.createElement(u.default, {
                                    className: "confirm-add-suggested-token__token-icon",
                                    diameter: 48,
                                    address: e.address,
                                    image: e.image
                                  }),
                                  n.default.createElement(
                                    "div",
                                    { className: "confirm-add-suggested-token__name" },
                                    ((t = e.name), (a = e.symbol), t === undefined ? a : `${t} (${a})`)
                                  )
                                ),
                                n.default.createElement(
                                  "div",
                                  { className: "confirm-add-suggested-token__balance" },
                                  n.default.createElement(l.default, { token: e })
                                )
                              );
                              var t, a;
                            })
                          )
                        )
                      ),
                      n.default.createElement(d.PageContainerFooter, {
                        cancelText: e("cancel"),
                        submitText: e("addToken"),
                        onCancel: M,
                        onSubmit: P,
                        disabled: 0 === k.length
                      })
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-add-suggested-token/confirm-add-suggested-token.js" }
    ],
    [
      4878,
      { "./confirm-add-suggested-token": 4877 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    get: function () {
                      return s.default;
                    }
                  });
                var n,
                  s = (n = e("./confirm-add-suggested-token")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/confirm-add-suggested-token/index.js" }
    ]
  ],
  [],
  {}
);
