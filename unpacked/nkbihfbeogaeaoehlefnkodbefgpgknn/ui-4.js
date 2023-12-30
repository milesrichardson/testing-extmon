LavaPack.loadBundle(
  [
    [
      4319,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/snaps": 4779,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "../../metamask-template-renderer/metamask-template-renderer": 4154,
        "../copyable": 4282,
        "../snap-delineator": 4296,
        "@metamask/snaps-sdk": 1732,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.mapToTemplate = n.UI_MAPPING = n.SnapUIRenderer = void 0);
                var r = g(e("react")),
                  a = g(e("prop-types")),
                  o = e("@metamask/snaps-sdk"),
                  i = e("react-redux"),
                  s = g(e("../../metamask-template-renderer/metamask-template-renderer")),
                  l = e("../../../../helpers/constants/design-system"),
                  c = e("../snap-delineator"),
                  u = e("../../../../hooks/useI18nContext"),
                  d = g(e("../../../ui/box")),
                  p = e("../../../../helpers/utils/util"),
                  f = e("../../../../selectors"),
                  m = e("../../../component-library"),
                  h = e("../copyable"),
                  y = e("../../../../helpers/constants/snaps");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const b = (n.UI_MAPPING = {
                    panel: (e, t) => ({
                      element: "Box",
                      children: e.children.map((e) => v(e, t)),
                      props: {
                        display: l.DISPLAY.FLEX,
                        flexDirection: l.FLEX_DIRECTION.COLUMN,
                        className: "snap-ui-renderer__panel",
                        color: l.TextColor.textDefault
                      }
                    }),
                    heading: (e) => ({
                      element: "Typography",
                      children: e.value,
                      props: { variant: l.TypographyVariant.H4, fontWeight: l.FontWeight.Bold, overflowWrap: l.OverflowWrap.BreakWord }
                    }),
                    text: (e) => ({ element: "SnapUIMarkdown", children: e.value, props: { markdown: e.markdown } }),
                    spinner: () => ({ element: "Spinner", props: { className: "snap-ui-renderer__spinner" } }),
                    divider: () => ({
                      element: "Box",
                      props: {
                        className: "snap-ui-renderer__divider",
                        backgroundColor: l.BorderColor.borderDefault,
                        marginTop: 2,
                        marginBottom: 2
                      }
                    }),
                    copyable: (e) => ({ element: "Copyable", props: { text: e.value, sensitive: e.sensitive } }),
                    image: (e) => ({ element: "SnapUIImage", props: { value: e.value } }),
                    row: (e, t) => ({
                      element: "ConfirmInfoRow",
                      children: [v(e.value, t)],
                      props: { label: e.label, variant: e.variant, style: { marginLeft: "-8px", marginRight: "-8px" } }
                    }),
                    address: (e) => ({ element: "ConfirmInfoRowAddress", props: { address: e.value } })
                  }),
                  v = (e, t) => {
                    const { type: n } = e;
                    t.value += 1;
                    const r = `snap_ui_element_${n}__${t.value}`;
                    return { ...b[n](e, t), key: r };
                  };
                n.mapToTemplate = v;
                const T = ({
                  snapId: e,
                  delineatorType: t = y.DelineatorType.Content,
                  isCollapsable: n = !1,
                  isCollapsed: a = !1,
                  isLoading: g = !1,
                  data: b,
                  onClick: T,
                  boxProps: E
                }) => {
                  const w = (0, u.useI18nContext)(),
                    O = (0, i.useSelector)((t) => (0, f.getTargetSubjectMetadata)(t, e)),
                    x = (0, p.getSnapName)(e, O);
                  if (g)
                    return r.default.createElement(c.SnapDelineator, {
                      snapName: x,
                      type: t,
                      isCollapsable: n,
                      isCollapsed: a,
                      onClick: T,
                      boxProps: E,
                      isLoading: g
                    });
                  if (!(0, o.isComponent)(b))
                    return r.default.createElement(
                      c.SnapDelineator,
                      { isCollapsable: n, isCollapsed: a, snapName: x, type: y.DelineatorType.Error, onClick: T, boxProps: E },
                      r.default.createElement(
                        m.Text,
                        { variant: l.TextVariant.bodySm, marginBottom: 4 },
                        w("snapsUIError", [r.default.createElement("b", { key: "0" }, x)])
                      ),
                      r.default.createElement(h.Copyable, { text: w("snapsInvalidUIError") })
                    );
                  const S = v(b, { value: 0 });
                  return r.default.createElement(
                    c.SnapDelineator,
                    { snapName: x, type: t, isCollapsable: n, isCollapsed: a, onClick: T, boxProps: E },
                    r.default.createElement(
                      d.default,
                      { className: "snap-ui-renderer__content" },
                      r.default.createElement(s.default, { sections: S })
                    )
                  );
                };
                (n.SnapUIRenderer = T),
                  (T.propTypes = {
                    snapId: a.default.string,
                    delineatorType: a.default.string,
                    data: a.default.object,
                    isCollapsable: a.default.bool,
                    isCollapsed: a.default.bool,
                    isLoading: a.default.bool,
                    onClick: a.default.func,
                    boxProps: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-ui-renderer/snap-ui-renderer.js" }
    ],
    [
      4320,
      { "./snap-update-alert": 4321 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./snap-update-alert")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-update-alert/index.js" }
    ],
    [
      4321,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../../component-library"),
                  i = e("../../../../helpers/constants/design-system"),
                  s = e("../../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                const u = ({ snapName: e, onUpdateClick: t, bannerAlertProps: n }) => {
                  const a = (0, s.useI18nContext)();
                  return r.default.createElement(
                    o.BannerAlert,
                    c(
                      {
                        title: a("snapUpdateAvailable"),
                        actionButtonLabel: a("update"),
                        actionButtonOnClick: t,
                        actionButtonProps: { endIconName: o.IconName.Download, color: i.TextColor.primaryDefault }
                      },
                      n
                    ),
                    r.default.createElement(o.Text, null, a("snapUpdateAlertDescription", [e]))
                  );
                };
                u.propTypes = {
                  snapName: a.default.string.isRequired,
                  onUpdateClick: a.default.func.isRequired,
                  bannerAlertProps: a.default.object
                };
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-update-alert/snap-update-alert.js" }
    ],
    [
      4322,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../../../ui/box": 4607,
        "../../../ui/icon/preloader/preloader-icon.component": 4657,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../../../helpers/constants/design-system"),
                  i = c(e("../../../ui/box")),
                  s = e("../../../component-library"),
                  l = c(e("../../../ui/icon/preloader/preloader-icon.component"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ version: e, url: t }) =>
                  r.default.createElement(
                    s.Button,
                    { variant: s.BUTTON_VARIANT.LINK, href: t, target: "_blank", className: "snap-version" },
                    r.default.createElement(
                      i.default,
                      {
                        className: "snap-version__wrapper",
                        flexDirection: o.FLEX_DIRECTION.ROW,
                        alignItems: o.AlignItems.center,
                        backgroundColor: o.BackgroundColor.backgroundAlternative,
                        borderRadius: o.BorderRadius.pill,
                        paddingTop: 1,
                        paddingBottom: 1,
                        paddingLeft: 2,
                        paddingRight: 2
                      },
                      e
                        ? r.default.createElement(s.Text, { color: o.Color.textAlternative, variant: o.TextVariant.bodyMd }, e)
                        : r.default.createElement(l.default, { size: 18 }),
                      r.default.createElement(s.Icon, {
                        name: s.IconName.Export,
                        color: o.Color.textAlternative,
                        size: s.IconSize.Sm,
                        marginLeft: 1
                      })
                    )
                  );
                u.propTypes = { version: a.default.string, url: a.default.string };
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/snap-version/snap-version.js" }
    ],
    [
      4323,
      { "./update-snap-permission-list": 4324 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./update-snap-permission-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/update-snap-permission-list/index.js" }
    ],
    [
      4324,
      {
        "../../../../helpers/utils/permission": 4806,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../../permission-cell": 4224,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = u);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../../../helpers/utils/permission"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = c(e("../../permission-cell")),
                  l = e("../../../component-library");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u({ approvedPermissions: e, revokedPermissions: t, newPermissions: n, targetSubjectMetadata: a }) {
                  const c = (0, i.useI18nContext)();
                  return r.default.createElement(
                    l.Box,
                    { paddingTop: 1 },
                    (0, o.getWeightedPermissions)(c, n, a).map((e, t) => {
                      var n;
                      return r.default.createElement(s.default, {
                        permissionName: e.permissionName,
                        title: e.label,
                        description: e.description,
                        weight: e.weight,
                        avatarIcon: e.leftIcon,
                        dateApproved: null == e || null === (n = e.permissionValue) || void 0 === n ? void 0 : n.date,
                        key: `${e.permissionName}-${t}`
                      });
                    }),
                    (0, o.getWeightedPermissions)(c, t, a).map((e, t) => {
                      var n;
                      return r.default.createElement(s.default, {
                        permissionName: e.permissionName,
                        title: e.label,
                        description: e.description,
                        weight: e.weight,
                        avatarIcon: e.leftIcon,
                        dateApproved: null == e || null === (n = e.permissionValue) || void 0 === n ? void 0 : n.date,
                        key: `${e.permissionName}-${t}`,
                        revoked: !0
                      });
                    }),
                    (0, o.getWeightedPermissions)(c, e, a).map((e, t) => {
                      var n;
                      return r.default.createElement(s.default, {
                        permissionName: e.permissionName,
                        title: e.label,
                        description: e.description,
                        weight: e.weight,
                        avatarIcon: e.leftIcon,
                        dateApproved: null == e || null === (n = e.permissionValue) || void 0 === n ? void 0 : n.date,
                        key: `${e.permissionName}-${t}`
                      });
                    })
                  );
                }
                u.propTypes = {
                  approvedPermissions: a.default.object.isRequired,
                  revokedPermissions: a.default.object.isRequired,
                  newPermissions: a.default.object.isRequired,
                  targetSubjectMetadata: a.default.object.isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/snaps/update-snap-permission-list/update-snap-permission-list.js" }
    ],
    [
      4325,
      { "./srp-input": 4327 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./srp-input")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-input/index.js" }
    ],
    [
      4326,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.parseSecretRecoveryPhrase = void 0);
                n.parseSecretRecoveryPhrase = (e) => {
                  var t;
                  return (null === (t = (e || "").trim().toLowerCase().match(/\w+/gu)) || void 0 === t ? void 0 : t.join(" ")) || "";
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-input/parse-secret-recovery-phrase.js" }
    ],
    [
      4327,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/dropdown": 4636,
        "../../ui/show-hide-toggle": 4709,
        "../../ui/text-field": 4725,
        "./parse-secret-recovery-phrase": 4326,
        "@ethersproject/hdnode": 448,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = b);
                var r = e("@ethersproject/hdnode"),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = m(e("prop-types")),
                  i = e("../../../hooks/useI18nContext"),
                  s = m(e("../../ui/text-field")),
                  l = e("../../../helpers/utils/util"),
                  c = e("../../component-library"),
                  u = m(e("../../ui/dropdown")),
                  d = m(e("../../ui/show-hide-toggle")),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("./parse-secret-recovery-phrase");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const y = 12,
                  g = (e) => e !== e.toLowerCase();
                function b({ onChange: e, srpText: t }) {
                  const [n, o] = (0, a.useState)(""),
                    [m, h] = (0, a.useState)(!1),
                    [b, v] = (0, a.useState)(new Array(y).fill("")),
                    [T, E] = (0, a.useState)(new Array(y).fill(!1)),
                    [w, O] = (0, a.useState)(y),
                    x = (0, i.useI18nContext)(),
                    S = (0, a.useCallback)(
                      (t) => {
                        let n = "";
                        const a = t.join(" ").trim();
                        t.some((e) => "" !== e) &&
                          (t.some((e) => "" === e)
                            ? (n = x("seedPhraseReq"))
                            : g(a)
                            ? (n = x("invalidSeedPhraseCaseSensitive"))
                            : (0, r.isValidMnemonic)(a) || (n = x("invalidSeedPhrase"))),
                          v(t),
                          o(n),
                          e(n ? "" : a);
                      },
                      [v, o, x, e]
                    ),
                    _ = (0, a.useCallback)((e) => {
                      E((t) => {
                        const n = t.slice();
                        return n[e] ? (n[e] = !1) : (n.fill(!1), (n[e] = !0)), n;
                      });
                    }, []),
                    k = (0, a.useCallback)(
                      (e, t) => {
                        m && h(!1);
                        const n = b.slice();
                        (n[e] = t.trim()), S(n);
                      },
                      [b, S, m]
                    ),
                    C = (0, a.useCallback)(
                      (e) => {
                        let t = (0, f.parseSecretRecoveryPhrase)(e).split(" ");
                        if (t.length > 24) return void h(!0);
                        m && h(!1);
                        let n = w;
                        t.length !== w && ((n = t.length < 12 ? 12 : t.length % 3 == 0 ? t.length : t.length + (3 - (t.length % 3))), O(n)),
                          t.length < n && (t = t.concat(new Array(n - t.length).fill(""))),
                          E(new Array(n).fill(!1)),
                          S(t),
                          (0, l.clearClipboard)();
                      },
                      [w, S, m, h]
                    ),
                    A = [];
                  for (let e = 12; e <= 24; e += 3) A.push({ name: x("srpInputNumberOfWords", [`${e}`]), value: `${e}` });
                  return a.default.createElement(
                    "div",
                    { className: "import-srp__container" },
                    a.default.createElement(
                      "label",
                      { className: "import-srp__srp-label" },
                      a.default.createElement(c.Text, { align: p.TextAlign.Left, variant: p.TextVariant.headingSm, as: "h4" }, t)
                    ),
                    a.default.createElement(c.BannerAlert, {
                      className: "import-srp__paste-tip",
                      severity: p.Severity.Info,
                      description: x("srpPasteTip"),
                      descriptionProps: { className: "import-srp__banner-alert-text" }
                    }),
                    a.default.createElement(u.default, {
                      className: "import-srp__number-of-words-dropdown",
                      onChange: (e) => {
                        const t = parseInt(e, 10);
                        if (Number.isNaN(t)) throw new Error("Unable to parse option as integer");
                        let n = b.slice(0, t);
                        n.length < t && (n = n.concat(new Array(t - n.length).fill(""))), O(t), E(new Array(t).fill(!1)), S(n);
                      },
                      options: A,
                      selectedOption: `${w}`
                    }),
                    a.default.createElement(
                      "div",
                      { className: "import-srp__srp" },
                      [...Array(w).keys()].map((e) => {
                        const t = `import-srp__srp-word-${e}`;
                        return a.default.createElement(
                          "div",
                          { key: e, className: "import-srp__srp-word" },
                          a.default.createElement(
                            "label",
                            { htmlFor: t, className: "import-srp__srp-word-label" },
                            a.default.createElement(c.Text, null, `${e + 1}.`)
                          ),
                          a.default.createElement(s.default, {
                            id: t,
                            "data-testid": t,
                            type: T[e] ? "text" : "password",
                            onChange: (t) => {
                              t.preventDefault(), k(e, t.target.value);
                            },
                            value: b[e],
                            autoComplete: "off",
                            onPaste: (e) => {
                              const t = e.clipboardData.getData("text");
                              t.trim().match(/\s/u) && (e.preventDefault(), C(t));
                            }
                          }),
                          a.default.createElement(d.default, {
                            id: `${t}-checkbox`,
                            ariaLabelHidden: x("srpWordHidden"),
                            ariaLabelShown: x("srpWordShown"),
                            shown: T[e],
                            "data-testid": `${t}-checkbox`,
                            onChange: () => _(e),
                            title: x("srpToggleShow")
                          })
                        );
                      })
                    ),
                    n
                      ? a.default.createElement(c.BannerAlert, {
                          className: "import-srp__srp-error",
                          severity: p.Severity.Danger,
                          description: n,
                          descriptionProps: { className: "import-srp__banner-alert-text" }
                        })
                      : null,
                    m
                      ? a.default.createElement(c.BannerAlert, {
                          className: "import-srp__srp-too-many-words-error",
                          severity: p.Severity.Danger,
                          actionButtonLabel: x("dismiss"),
                          actionButtonOnClick: () => h(!1),
                          description: x("srpPasteFailedTooManyWords"),
                          descriptionProps: { className: "import-srp__banner-alert-text" }
                        })
                      : null
                  );
                }
                b.propTypes = { onChange: o.default.func.isRequired, srpText: o.default.string.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-input/srp-input.js" }
    ],
    [
      4328,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({ icon: e, image: t, content: n, moreContent: r, buttons: l }) {
                    const c = (0, i.useI18nContext)();
                    return a.default.createElement(
                      a.default.Fragment,
                      null,
                      e &&
                        a.default.createElement(
                          s.Box,
                          {
                            display: o.Display.Flex,
                            flexDirection: o.FlexDirection.Row,
                            alignItems: o.AlignItems.center,
                            justifyContent: o.JustifyContent.center
                          },
                          e
                        ),
                      t &&
                        a.default.createElement(
                          s.Box,
                          { display: o.Display.Flex, margin: "auto", textAlign: o.TextAlign.Center },
                          a.default.createElement("img", {
                            src: t,
                            alt: c("srpSecurityQuizImgAlt"),
                            width: "300",
                            style: { maxWidth: "100%" }
                          })
                        ),
                      a.default.createElement(
                        s.Text,
                        { variant: o.TextVariant.bodyLgMedium, textAlign: o.TextAlign.Center, color: null == e ? void 0 : e.props.color },
                        n
                      ),
                      r && a.default.createElement(s.Text, { variant: o.TextVariant.bodyMd, textAlign: o.TextAlign.Center }, r),
                      l.map((e, t) =>
                        a.default.createElement(
                          s.Button,
                          {
                            key: t,
                            size: e.size,
                            onClick: e.onClick,
                            variant: e.variant,
                            width: o.BlockSize.Full,
                            "data-testid": e["data-testid"]
                          },
                          e.label
                        )
                      )
                    );
                  });
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("../../../../helpers/constants/design-system"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = e("../../../component-library");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/QuizContent/QuizContent.tsx" }
    ],
    [
      4329,
      { "./QuizContent": 4328 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./QuizContent")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/QuizContent/index.ts" }
    ],
    [
      4330,
      {
        "../../../../../shared/constants/metametrics": 3962,
        "../../../../contexts/metametrics": 4749,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/routes": 4776,
        "../../../../helpers/constants/zendesk-url": 4781,
        "../../../../hooks/useI18nContext": 4837,
        "../../../component-library": 4453,
        "../QuizContent": 4329,
        "../types": 4332,
        react: 3690,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function (e) {
                    const [t, n] = (0, r.useState)(f.QuizStage.introduction),
                      c = (0, r.useContext)(i.MetaMetricsContext),
                      m = (0, a.useHistory)(),
                      h = (0, u.useI18nContext)();
                    let v = "";
                    const T = {};
                    (T[f.QuizStage.introduction] = () => (
                      (v = h("srpSecurityQuizTitle")),
                      r.default.createElement(p.default, {
                        image: "images/reveal-srp.png",
                        content: h("srpSecurityQuizIntroduction"),
                        buttons: [
                          {
                            label: h("srpSecurityQuizGetStarted"),
                            onClick: () => n(f.QuizStage.questionOne),
                            variant: d.ButtonVariant.Primary,
                            size: d.ButtonSize.Lg,
                            "data-testid": "srp-quiz-get-started"
                          },
                          {
                            label: h("learnMoreUpperCase"),
                            onClick: b,
                            variant: d.ButtonVariant.Link,
                            "data-testid": "srp-quiz-learn-more"
                          }
                        ]
                      })
                    )),
                      (T[f.QuizStage.questionOne] = () => (
                        (v = `1 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          content: h("srpSecurityQuizQuestionOneQuestion"),
                          buttons: [
                            {
                              label: h("srpSecurityQuizQuestionOneWrongAnswer"),
                              onClick: () => n(f.QuizStage.wrongAnswerQuestionOne),
                              variant: d.ButtonVariant.Secondary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-wrong-answer"
                            },
                            {
                              label: h("srpSecurityQuizQuestionOneRightAnswer"),
                              onClick: () => n(f.QuizStage.rightAnswerQuestionOne),
                              variant: d.ButtonVariant.Secondary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-right-answer"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.rightAnswerQuestionOne] = () => (
                        (v = `1 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          icon: g,
                          content: h("srpSecurityQuizQuestionOneRightAnswerTitle"),
                          moreContent: h("srpSecurityQuizQuestionOneRightAnswerDescription"),
                          buttons: [
                            {
                              label: h("continue"),
                              onClick: () => n(f.QuizStage.questionTwo),
                              variant: d.ButtonVariant.Primary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-continue"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.wrongAnswerQuestionOne] = () => (
                        (v = `1 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          icon: y,
                          content: h("srpSecurityQuizQuestionOneWrongAnswerTitle"),
                          moreContent: h("srpSecurityQuizQuestionOneWrongAnswerDescription"),
                          buttons: [
                            {
                              label: h("tryAgain"),
                              onClick: () => n(f.QuizStage.questionOne),
                              variant: d.ButtonVariant.Primary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-try-again"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.questionTwo] = () => (
                        (v = `2 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          content: h("srpSecurityQuizQuestionTwoQuestion"),
                          buttons: [
                            {
                              label: h("srpSecurityQuizQuestionTwoRightAnswer"),
                              onClick: () => n(f.QuizStage.rightAnswerQuestionTwo),
                              variant: d.ButtonVariant.Secondary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-right-answer"
                            },
                            {
                              label: h("srpSecurityQuizQuestionTwoWrongAnswer"),
                              onClick: () => n(f.QuizStage.wrongAnswerQuestionTwo),
                              variant: d.ButtonVariant.Secondary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-wrong-answer"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.rightAnswerQuestionTwo] = () => (
                        (v = `2 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          icon: g,
                          content: h("srpSecurityQuizQuestionTwoRightAnswerTitle"),
                          moreContent: h("srpSecurityQuizQuestionTwoRightAnswerDescription"),
                          buttons: [
                            {
                              label: h("continue"),
                              onClick: () => m.push(l.REVEAL_SEED_ROUTE),
                              variant: d.ButtonVariant.Primary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-continue"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      )),
                      (T[f.QuizStage.wrongAnswerQuestionTwo] = () => (
                        (v = `2 ${h("ofTextNofM")} 2`),
                        r.default.createElement(p.default, {
                          icon: y,
                          content: h("srpSecurityQuizQuestionTwoWrongAnswerTitle"),
                          moreContent: h("srpSecurityQuizQuestionTwoWrongAnswerDescription"),
                          buttons: [
                            {
                              label: h("tryAgain"),
                              onClick: () => n(f.QuizStage.questionTwo),
                              variant: d.ButtonVariant.Primary,
                              size: d.ButtonSize.Lg,
                              "data-testid": "srp-quiz-try-again"
                            },
                            { label: h("learnMoreUpperCase"), onClick: b, variant: d.ButtonVariant.Link }
                          ]
                        })
                      ));
                    const E = (0, r.useCallback)((e) => {
                      c(
                        {
                          category: o.MetaMetricsEventCategory.Keys,
                          event: o.MetaMetricsEventName.KeyExportSelected,
                          properties: { key_type: o.MetaMetricsEventKeyType.Srp, location: e }
                        },
                        {}
                      );
                    }, []);
                    (0, r.useEffect)(() => {
                      E(`stage_${t}`);
                    }, [t]);
                    const w = T[t]();
                    return r.default.createElement(
                      d.Modal,
                      { isOpen: e.isOpen, onClose: e.onClose },
                      r.default.createElement(d.ModalOverlay, null),
                      r.default.createElement(
                        d.ModalContent,
                        { modalDialogProps: { display: s.Display.Flex, flexDirection: s.FlexDirection.Column, gap: 4 } },
                        r.default.createElement(d.ModalHeader, { onClose: e.onClose, "data-testid": "srp-quiz-header" }, v),
                        r.default.createElement("span", { "data-testid": `srp_stage_${t}` }),
                        w
                      )
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-router-dom"),
                  o = e("../../../../../shared/constants/metametrics"),
                  i = e("../../../../contexts/metametrics"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../helpers/constants/routes"),
                  c = m(e("../../../../helpers/constants/zendesk-url")),
                  u = e("../../../../hooks/useI18nContext"),
                  d = e("../../../component-library"),
                  p = m(e("../QuizContent")),
                  f = e("../types");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const y = r.default.createElement(d.Icon, {
                    size: d.IconSize.Xl,
                    name: d.IconName.Warning,
                    color: s.IconColor.errorDefault,
                    textAlign: s.TextAlign.Center,
                    width: s.BlockSize.OneTwelfth
                  }),
                  g = r.default.createElement(d.Icon, {
                    size: d.IconSize.Xl,
                    name: d.IconName.Confirmation,
                    color: s.IconColor.successDefault,
                    textAlign: s.TextAlign.Center,
                    width: s.BlockSize.OneTwelfth
                  }),
                  b = () => {
                    global.platform.openTab({ url: c.default.PASSWORD_AND_SRP_ARTICLE });
                  };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/SRPQuiz/SRPQuiz.tsx" }
    ],
    [
      4331,
      { "./SRPQuiz": 4330 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./SRPQuiz")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/SRPQuiz/index.ts" }
    ],
    [
      4332,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.QuizStage = void 0);
                n.QuizStage = (function (e) {
                  return (
                    (e.introduction = "introduction"),
                    (e.questionOne = "question_one"),
                    (e.wrongAnswerQuestionOne = "wrong_answer_question_one"),
                    (e.rightAnswerQuestionOne = "right_answer_question_one"),
                    (e.questionTwo = "question_two"),
                    (e.wrongAnswerQuestionTwo = "wrong_answer_question_two"),
                    (e.rightAnswerQuestionTwo = "right_answer_question_two"),
                    e
                  );
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/app/srp-quiz-modal/types.ts" }
    ],
    [
      4333,
      { "./step-progress-bar": 4334 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ThreeStepProgressBar", {
                    enumerable: !0,
                    get: function () {
                      return r.ThreeStepProgressBar;
                    }
                  }),
                  Object.defineProperty(n, "TwoStepProgressBar", {
                    enumerable: !0,
                    get: function () {
                      return r.TwoStepProgressBar;
                    }
                  }),
                  Object.defineProperty(n, "threeStepStages", {
                    enumerable: !0,
                    get: function () {
                      return r.threeStepStages;
                    }
                  }),
                  Object.defineProperty(n, "twoStepStages", {
                    enumerable: !0,
                    get: function () {
                      return r.twoStepStages;
                    }
                  });
                var r = e("./step-progress-bar");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/step-progress-bar/index.js" }
    ],
    [
      4334,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../ui/box": 4607,
        classnames: 2414,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.ThreeStepProgressBar = p),
                  (n.TwoStepProgressBar = f),
                  (n.twoStepStages = n.threeStepStages = void 0);
                var r = u(e("react")),
                  a = u(e("classnames")),
                  o = u(e("prop-types")),
                  i = e("lodash"),
                  s = e("../../../hooks/useI18nContext"),
                  l = u(e("../../ui/box")),
                  c = e("../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                (n.threeStepStages = {
                  PASSWORD_CREATE: 1,
                  RECOVERY_PHRASE_VIDEO: 2,
                  RECOVERY_PHRASE_REVIEW: 3,
                  RECOVERY_PHRASE_CONFIRM: 4,
                  ONBOARDING_COMPLETE: 5
                }),
                  (n.twoStepStages = { RECOVERY_PHRASE_CONFIRM: 1, PASSWORD_CREATE: 2 });
                function p({ stage: e, ...t }) {
                  const n = (0, s.useI18nContext)();
                  return r.default.createElement(
                    l.default,
                    t,
                    r.default.createElement(
                      "ul",
                      { className: "progressbar" },
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)({ active: e >= 1, complete: e > 1 }) },
                        (0, i.capitalize)(n("createPassword"))
                      ),
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)({ active: e >= 2, complete: e > 3 }) },
                        (0, i.capitalize)(n("secureWallet"))
                      ),
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)({ active: e >= 4, complete: e > 5 }) },
                        (0, i.capitalize)(n("confirmRecoveryPhrase"))
                      )
                    )
                  );
                }
                function f({ stage: e, ...t }) {
                  const n = (0, s.useI18nContext)();
                  return r.default.createElement(
                    l.default,
                    d({ width: c.BLOCK_SIZES.FULL }, t),
                    r.default.createElement(
                      "ul",
                      { className: "progressbar two-steps" },
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)({ active: e >= 1, complete: e > 1 }) },
                        (0, i.capitalize)(n("confirmRecoveryPhrase"))
                      ),
                      r.default.createElement(
                        "li",
                        { className: (0, a.default)("two-steps", { active: e >= 2, complete: e > 2 }) },
                        (0, i.capitalize)(n("createPassword"))
                      )
                    )
                  );
                }
                (p.propTypes = { stage: o.default.number, ...l.default.propTypes }),
                  (f.propTypes = { stage: o.default.number, ...l.default.propTypes });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/step-progress-bar/step-progress-bar.js" }
    ],
    [
      4335,
      { "./tab-bar": 4336 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./tab-bar")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/tab-bar/index.js" }
    ],
    [
      4336,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("classnames")),
                  i = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = (e) => {
                  const { tabs: t = [], onSelect: n, isActive: a } = e;
                  return r.default.createElement(
                    "div",
                    { className: "tab-bar" },
                    t.map(({ key: e, content: t, icon: l }) =>
                      r.default.createElement(
                        i.Box,
                        {
                          as: "button",
                          key: e,
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingLeft: 4,
                          paddingRight: 4,
                          className: (0, o.default)("tab-bar__tab pointer", { "tab-bar__tab--active": a(e, t) }),
                          onClick: () => n(e)
                        },
                        a(e, t) &&
                          r.default.createElement(i.Box, {
                            className: "tab-bar__tab__selected-indicator",
                            borderRadius: s.BorderRadius.pill,
                            backgroundColor: s.Color.primaryDefault,
                            display: [s.Display.None, s.Display.Block]
                          }),
                        r.default.createElement(
                          "div",
                          { className: "tab-bar__tab__content" },
                          r.default.createElement("div", { className: "tab-bar__tab__content__icon" }, l),
                          r.default.createElement("div", { className: "tab-bar__tab__content__title" }, t)
                        ),
                        r.default.createElement(i.Icon, {
                          name: i.IconName.ArrowRight,
                          size: i.IconSize.Sm,
                          className: "tab-bar__tab__caret"
                        })
                      )
                    )
                  );
                };
                c.propTypes = { isActive: a.default.func.isRequired, tabs: a.default.array, onSelect: a.default.func };
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/tab-bar/tab-bar.js" }
    ],
    [
      4337,
      { "./terms-of-use-popup": 4338 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./terms-of-use-popup")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/terms-of-use-popup/index.js" }
    ],
    [
      4338,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        "../../ui/box": 4607,
        "../../ui/check-box/check-box.component": 4616,
        "../../ui/popover": 4699,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = y);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = m(e("prop-types")),
                  o = e("lodash"),
                  i = e("../../../contexts/i18n"),
                  s = m(e("../../ui/popover")),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../component-library"),
                  u = m(e("../../ui/box")),
                  d = m(e("../../ui/check-box/check-box.component")),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../contexts/metametrics");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function y({ onAccept: e }) {
                  const t = (0, r.useContext)(i.I18nContext),
                    n = (0, r.useContext)(f.MetaMetricsContext),
                    [a, m] = (0, r.useState)(!1),
                    [h, y] = (0, r.useState)(!0),
                    g = (0, r.useRef)(),
                    b = r.default.createRef(),
                    v = (0, o.debounce)((e) => {
                      y(e.scrollHeight - e.scrollTop !== e.clientHeight);
                    }, 100);
                  return (
                    (0, r.useEffect)(() => {
                      n({
                        category: p.MetaMetricsEventCategory.Onboarding,
                        event: p.MetaMetricsEventName.TermsOfUseShown,
                        properties: { location: "Terms Of Use Popover" }
                      });
                    }, []),
                    r.default.createElement(
                      s.default,
                      {
                        className: "terms-of-use__popover",
                        popoverRef: g,
                        onScroll: (e) => {
                          v(e.target);
                        },
                        showScrollDown: h,
                        title: t("termsOfUseTitle"),
                        onScrollDownButtonClick: (e) => {
                          e.stopPropagation(), b.current.scrollIntoView({ behavior: "smooth" });
                        },
                        footerProps: { justifyContent: l.AlignItems.center, flexDirection: l.FLEX_DIRECTION.COLUMN },
                        footer: r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            c.Button,
                            {
                              variant: c.BUTTON_VARIANT.PRIMARY,
                              className: "terms-of-use__button",
                              onClick: e,
                              disabled: !a,
                              "data-testid": "terms-of-use-accept-button"
                            },
                            t("accept")
                          ),
                          r.default.createElement(
                            c.Text,
                            { as: "p", marginTop: 4, className: "terms-of-use__footer-text", color: l.TextColor.textAlternative },
                            t("termsOfUseFooterText")
                          )
                        )
                      },
                      r.default.createElement(
                        u.default,
                        { className: "terms-of-use" },
                        r.default.createElement(
                          u.default,
                          { className: "terms-of-use__content", marginBottom: 4, marginLeft: 4, marginRight: 4 },
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "IMPORTANT NOTICE: THIS AGREEMENT IS SUBJECT TO BINDING ARBITRATION AND A WAIVER OF CLASS ACTION RIGHTS AS DETAILED IN SECTION 11. PLEASE READ THE AGREEMENT CAREFULLY."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "ConsenSys Software Inc. (“ConsenSys,” “we,” “us,” or “our”) is the leading blockchain software development company. With a focus on utilizing decentralized technologies, such as Ethereum, our software is powering a revolution in commerce and finance and helping to optimize business processes. ConsenSys hosts a top level domain website, www.consensys.net, that serves information regarding ConsenSys and our Offerings, as defined below, as well as sub-domains for our products or services (the top level domain with the sub-domains collectively referred to as the “Site”), which include text, images, audio, code and other materials or third party information. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "These Terms of Use (the “Terms,” “Terms of Use” or “Agreement”) contain the terms and conditions that govern your access to and use of the Site and Offerings provided by us and is an agreement between us and you or the entity you represent (“you” or “your”). Please read these Terms of Use carefully before using the Site or Offerings. By using the Site, clicking a button or checkbox to accept or agree to these Terms where that option is made available, clicking a button to use or access any of the Offerings, completing an Order, or,  if earlier, using or otherwise accessing the Offerings (the date on which any of the events listed above occur being the “Effective Date”), you (1) accept and agree to these Terms and any additional terms, rules and conditions of participation issued by ConsenSys from time to time and (2) consent to the collection, use, disclosure and other handling of information as described in our",
                            " ",
                            r.default.createElement(
                              c.ButtonLink,
                              {
                                href: "https://consensys.net/privacy-policy/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                color: l.Color.primaryDefault,
                                variant: l.TextVariant.bodySm
                              },
                              "Privacy Policy."
                            ),
                            " ",
                            "If you do not agree to the Terms or perform any and all obligations you accept under the Terms, then you may not access or use the Offerings. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "You represent to us that you are lawfully able to enter into contracts. If you are entering into this Agreement for an entity, such as the company you work for, you represent to us that you have legal authority to bind that entity. Please see Section 13 for definitions of certain capitalized terms used in this Agreement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "In addition, you represent to us that you and your financial institutions, or any party that owns or controls you or your financial institutions, are (1) not subject to sanctions or otherwise designated on any list of prohibited or restricted parties, including but not limited to the lists maintained by the United Nations Security Council, the U.S. Government (i.e., the Specially Designated Nationals List and Foreign Sanctions Evaders List of the U.S. Department of Treasury and the Entity List of the U.S. Department of Commerce), the European Union or its Member States, or other applicable government authority and (2) not located in any country subject to a comprehensive sanctions program implemented by the United States."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "1. The Offerings."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "1.1 Generally. You may access and use the Offerings in accordance with this Agreement. You agree to comply with the terms of this Agreement and all laws, rules and regulations applicable to your use of the Offerings."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "1.2 Offerings and Access. ConsenSys offers a number of products and services, each an “Offering”, under the ConsenSys brand or brands owned by us. These include Codefi, Quorum, Infura, MetaMask and others. Offerings are generally accessed through the Site or through a third party provider of which we approved, such as the Google Play or Apple App Store, unless otherwise agreed in writing. Some Offerings may require you to create an account, enter a valid form of payment, and select a paid plan (a “Paid Plan”), or initiate an Order. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "1.3 Third-Party Content. In certain Offerings, Third-Party Content may be used by you at your election. Third-Party Content is governed by this Agreement and, if applicable, separate terms and conditions accompanying such Third-Party Content, which terms and conditions may include separate fees and charges."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "1.4 Third-Party Offerings. When you use our Offerings, you may also be using the products or services of one or more third parties. Your use of these third party offerings may be subject to the separate policies, terms of use, and fees of these third parties."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "2. Changes."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "2.1 To the Offerings. We may change or discontinue any or all of the Offerings or change or remove functionality of any or all of the Offerings from time to time. We will use commercially reasonable efforts to communicate to you any material change or discontinuation of an Offering through the Site or public communication channels.  If you are on a Paid Plan, we will use commercially reasonable efforts to communicate to you  any material changes to or discontinuation of the Offering at least 30 days in advance of such change, and we will use commercially reasonable efforts to continue supporting the previous version of the Offering for up to three months after the change or discontinuation, except if doing so (a) would pose an information security or intellectual property issue, (b) is economically or technically burdensome, or (c) would create undue risk of us violating the law."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "2.2 To this Agreement. We reserve the right, at our sole discretion, to modify or replace any part of this Agreement or any Policies at any time. It is your responsibility to check this Agreement periodically for changes, but we will also use commercially reasonable efforts to communicate any material changes to this Agreement through the Site or other public channels. Your continued use of or access to the Offerings following the posting of any changes to this Agreement constitutes acceptance of those changes."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "3. Your Responsibilities."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.1 Your Accounts.  For those Offerings that require an account, and except to the extent caused by our breach of this Agreement, (a) you are responsible for all activities that occur under your account, regardless of whether the activities are authorized by you or undertaken by you, your employees or a third party (including your contractors, agents or other End Users), and (b) we and our affiliates are not responsible for unauthorized access to your account, including any access that occurred as a result of fraud, phishing, or other criminal activity perpetrated by third parties.  "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.2 Your Use. You are responsible for all activities that occur through your use of those Offerings that do not require an account, except to the extent caused by our breach of this Agreement, regardless of whether the activities are authorized by you or undertaken by you, your employees or a third party (including your contractors, agents or other End Users).  We and our affiliates are not responsible for unauthorized access that may occur during your use of the Offerings, including any access that occurred as a result of fraud, phishing, or other criminal activity perpetrated by third parties.  You will ensure that your use of the Offerings does not violate any applicable law.  "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.3 Your Security and Backup. You are solely responsible for properly configuring and using the Offerings and otherwise taking appropriate action to secure, protect and backup your accounts and/or Your Content in a manner that will provide appropriate security and protection, which might include use of encryption.  This includes your obligation under this Agreement to record and securely maintain any passwords or backup security phrases (i.e. “seed” phrases) that relate to your use of the Offerings. You acknowledge that you will not share with us nor any other third party any password or backup/seed phrase that relates to your use of the Offerings, and that we will not be held responsible if you do share any such phrase or password."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.4 Log-In Credentials and API Authentication. To the extent we provide you with log-in credentials and API authentication generated by the Offerings, such log-in credentials and API authentication are for your use only and you will not sell, transfer or sublicense them to any other entity or person, except that you may disclose your password or private key to your agents and subcontractors performing work on your behalf."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "3.5 Applicability to MetaMask Offerings. For the avoidance of doubt, the terms of this Section 3 are applicable to all Offerings, including MetaMask and any accounts you create through MetaMask with Third Party Offerings, such as decentralized applications, or blockchain-based accounts themselves."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "4. Fees and Payment."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "4.1 Publicly Available Offerings. Some Offerings may be offered to the public and licensed on a royalty free basis, including Offerings that require a Paid Plan for software licensing fees above a certain threshold of use. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "4.2 Offering Fees.  If your use of an Offering does not require an Order or Paid Plan but software licensing fees are charged contemporaneously with your use of the Offering, those fees will be charged as described on the Site or in the user interface of the Offering.  Such fees may be calculated by combining a fee charged by us and a fee charged by a Third Party Offering that provides certain functionality related to the Offering.  For those Offerings which entail an Order or Paid Plan, we calculate and bill fees and charges according to your Order or Paid Plan. For such Offerings, on the first day of each billing period, you will pay us the applicable fees (the “Base Fees”) and any applicable taxes based on the Offerings in the Paid Plan. In addition, we may, for particular Orders, issue an invoice to you for all charges above the applicable threshold for your Paid Plan which constitute overage fees for the previous billing period. If you make any other changes to the Offerings during a billing period (e.g. upgrading or downgrading your Paid Plan), we will apply any additional charges or credits to the next billing period. We may bill you more frequently for fees accrued at our discretion upon notice to you.  You will pay all fees in U.S. dollars unless the particular Offering specifies a different form of payment or otherwise agreed to in writing. All amounts payable by you under this Agreement will be paid to us without setoff or counterclaim, and without any deduction or withholding. Fees and charges for any new Offering or new feature of an Offering will be effective when we use commercially reasonable efforts to communicate updated fees and charges through our Site or other public channels or, if you are on a Paid Plan, upon commercially reasonable efforts to notify you, unless we expressly state otherwise in a notice. We may increase or add new fees and charges for any existing Offerings you are using by using commercially reasonable efforts to notify users of the Offerings through our Site or other public channels or, if you are on a Paid Plan, by giving you at least 30 days’ prior notice.  Unless otherwise specified in an Order, if you are on a Paid Plan, all amounts due under this Agreement are payable within thirty (30) days following receipt of your invoice.  We may elect to charge you interest at the rate of 1.5% per month (or the highest rate permitted by law, if less) on all late payments."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "4.3 Taxes. Each party will be responsible, as required under applicable law, for identifying and paying all taxes and other governmental fees and charges (and any penalties, interest, and other additions thereto) that are imposed on that party upon or with respect to the transactions and payments under this Agreement. All fees payable by you are exclusive taxes unless otherwise noted. We reserve the right to withhold taxes where required."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "5. Temporary Suspension; Limiting API Requests."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "5.1 Generally. We may suspend your right to access or use any portion or all of the Offerings immediately if we determine:"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) your use of the Offerings (i) poses a security risk to the Offerings or any third party, (ii) could adversely impact our systems, the Offerings or the systems of any other user, (iii) could subject us, our affiliates, or any third party to liability, or (iv) could be unlawful;"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) you are, or any End User is, in breach of this Agreement;"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(c) you are in breach of your payment obligations under Section 4 and such breach continues for 30 days or longer; or"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(d) for entities, you have ceased to operate in the ordinary course, made an assignment for the benefit of creditors or similar disposition of your assets, or become the subject of any bankruptcy, reorganization, liquidation, dissolution or similar proceeding."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "5.2 Effect of Suspension. If we suspend your right to access or use any portion or all of the Offerings:"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) you remain responsible for all fees and charges you incur during the period of suspension; and"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) you will not be entitled to any fee credits for any period of suspension."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "5.3 Limiting API Requests. If applicable to a particular Offering, we retain sole discretion to limit your usage of the Offerings (including without limitation by limiting the number of API requests you may submit (“API Requests”)) at any time if your usage of the Offerings exceeds the usage threshold specified in your Paid Plan.   "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "6. Term; Termination."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "6.1 Term. For Offerings subject to a Paid Plan, the term of this Agreement will commence on the Effective Date and will remain in effect until terminated under this Section 6. Any notice of termination of this Agreement by either party to the other must include a Termination Date that complies with the notice periods in Section 6.2.  For Offerings that are not subject to a Paid Plan, the term of this Agreement will commence on the Effective Date and will remain in effect until you stop accessing or using the Offerings. "
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "6.2 Termination."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) Termination for Convenience. If you are not on a Paid Plan, you may terminate this Agreement for any reason by ceasing use of the Offering. If you are on a Paid Plan, each party may terminate this Agreement for any reason by giving the other party at least 30 days’ written notice, subject to the provisions in Section 6.2(b)."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "(b) Termination for Cause."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(i) By Either Party. Either party may terminate this Agreement for cause if the other party is in material breach of this Agreement and the material breach remains uncured for a period of 30 days from receipt of notice by the other party. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(ii) By Us. We may also terminate this Agreement immediately (A) for cause if we have the right to suspend under Section 5, (B) if our relationship with a third-party partner who provides software or other technology we use to provide the Offerings expires, terminates or requires us to change the way we provide the software or other technology as part of the Offerings, or (C) in order to avoid undue risk of violating the law."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "6.3 Effect of Termination. Upon the Termination Date:"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(i) all your rights under this Agreement immediately terminate; and"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(ii) each party remains responsible for all fees and charges it has incurred through the Termination Date and are responsible for any fees and charges it incurs during the post-termination period;"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(iii) the terms and conditions of this Agreement shall survive the expiration or termination of this Agreement to the full extent necessary for their enforcement and for the protection of the party in whose favor they operate.  For instance, despite this Agreement between you and us terminating, any dispute raised after you stop accessing or using the Offerings will be subject to the applicable provisions of this Agreement if that dispute relates to your prior access or use."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "For any use of the Offerings after the Termination Date, the terms of this Agreement will again apply and, if your use is under a Paid Plan, you will pay the applicable fees at the rates under Section 4."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "7. Proprietary Rights."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.1 Your Content. Depending on the Offering, you may share Content with us. Except as provided in this Section 7, we obtain no rights under this Agreement from you (or your licensors) to Your Content. You consent to our use of Your Content to provide the Offerings to you."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.2 Offerings License. We or our licensors own all right, title, and interest in and to the Offerings, and all related technology and intellectual property rights. Subject to the terms of this Agreement, we grant you a limited, revocable, non-exclusive, non-sublicensable, non-transferable license to do the following: (a) access and use the Offerings solely in accordance with this Agreement; and (b) copy and use Our Content solely in connection with your permitted use of the Offerings. Except as provided in this Section 7.2, you obtain no rights under this Agreement from us, our affiliates or our licensors to the Offerings, including any related intellectual property rights. Some of Our Content and Third-Party Content may be provided to you under a separate license, such as the Apache License, Version 2.0, or other open source license. In the event of a conflict between this Agreement and any separate license, the separate license will prevail with respect to Our Content or Third-Party Content that is the subject of such separate license."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.3 License Restrictions. Neither you nor any End User will use the Offerings in any manner or for any purpose other than as expressly permitted by this Agreement. Except for as authorized, neither you nor any End User will, or will attempt to (a) modify, distribute, alter, tamper with, repair, or otherwise create derivative works of any Content included in the Offerings (except to the extent Content included in the Offerings is provided to you under a separate license that expressly permits the creation of derivative works), (b) reverse engineer, disassemble, or decompile the Offerings or apply any other process or procedure to derive the source code of any software included in the Offerings (except to the extent applicable law doesn’t allow this restriction), (c) access or use the Offerings in a way intended to avoid incurring fees or exceeding usage limits or quotas, (d) use scraping techniques to mine or otherwise scrape data except as permitted by a Plan, or (e) resell or sublicense the Offerings unless otherwise agreed in writing. You will not use Our Marks unless you obtain our prior written consent. You will not misrepresent or embellish the relationship between us and you (including by expressing or implying that we support, sponsor, endorse, or contribute to you or your business endeavors). You will not imply any relationship or affiliation between us and you except as expressly permitted by this Agreement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.4 Suggestions. If you provide any Suggestions to us or our affiliates, we and our affiliates will be entitled to use the Suggestions without restriction. You hereby irrevocably assign to us all right, title, and interest in and to the Suggestions and agree to provide us any assistance we require to document, perfect, and maintain our rights in the Suggestions."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "7.5 U.S. Government Users. If you are a U.S. Government End User, we are licensing the Offerings to you as a “Commercial Item” as that term is defined in the U.S. Code of Federal Regulations (see 48 C.F.R. § 2.101), and the rights we grant you to the Offerings are the same as the rights we grant to all others under these Terms of Use."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "8. Indemnification."),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "8.1 General. "),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) You will defend, indemnify, and hold harmless us, our affiliates and licensors, and each of their respective employees, officers, directors, and representatives from and against any Losses arising out of or relating to any claim concerning: (a) breach of this Agreement or violation of applicable law by you; and (b) a dispute between you and any of your customers or users. You will reimburse us for reasonable attorneys’ fees and expenses, associated with claims described in (a) and (b) above."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) We will defend, indemnify, and hold harmless you and your employees, officers, directors, and representatives from and against any Losses arising out of or relating to any claim concerning our material and intentional breach of this Agreement.  We will reimburse you for reasonable attorneys’ fees and expenses associated with the claims described in this paragraph."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "8.2 Intellectual Property."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) Subject to the limitations in this Section 8, you will defend ConsenSys, its affiliates, and their respective employees, officers, and directors against any third-party claim alleging that any of Your Content infringes or misappropriates that third party’s intellectual property rights, and will pay the amount of any adverse final judgment or settlement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) Subject to the limitations in this Section 8 and the limitations in Section 10, we will defend you and your employees, officers, and directors against any third-party claim alleging that the Offerings infringe or misappropriate that third party’s intellectual property rights, and will pay the amount of any adverse final judgment or settlement.  However, we will not be required to spend more than $200,000 pursuant to this Section 8, including without limitation attorneys’ fees, court costs, settlements, judgments, and reimbursement costs."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(c) Neither party will have obligations or liability under this Section 8.2 arising from infringement by you combining the Offerings with any other product, service, software, data, content or method. In addition, we will have no obligations or liability arising from your use of the Offerings after we have notified you to discontinue such use. The remedies provided in this Section 8.2 are the sole and exclusive remedies for any third-party claims of infringement or misappropriation of intellectual property rights by the Offerings or by Your Content."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "8.3 Process. In no event will a party agree to any settlement of any claim that involves any commitment, other than the payment of money, without the written consent of the other party."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "9. Disclaimers; Risk."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "9.1 DISCLAIMER. THE OFFERINGS ARE PROVIDED “AS IS.” EXCEPT TO THE EXTENT PROHIBITED BY LAW, OR TO THE EXTENT ANY STATUTORY RIGHTS APPLY THAT CANNOT BE EXCLUDED, LIMITED OR WAIVED, WE AND OUR AFFILIATES AND LICENSORS (A) MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE REGARDING THE OFFERINGS OR THE THIRD-PARTY CONTENT, AND (B) DISCLAIM ALL WARRANTIES, INCLUDING ANY IMPLIED OR EXPRESS WARRANTIES (I) OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR QUIET ENJOYMENT, (II) ARISING OUT OF ANY COURSE OF DEALING OR USAGE OF TRADE, (III) THAT THE OFFERINGS OR THIRD-PARTY CONTENT WILL BE UNINTERRUPTED, ERROR FREE OR FREE OF HARMFUL COMPONENTS, AND (IV) THAT ANY CONTENT WILL BE SECURE OR NOT OTHERWISE LOST OR ALTERED."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "9.2 RISKS. OUR OFFERINGS RELY ON EMERGING TECHNOLOGIES, SUCH AS ETHEREUM. SOME OFFERINGS ARE SUBJECT TO INCREASED RISK THROUGH YOUR POTENTIAL MISUSE OF THINGS SUCH AS PUBLIC/PRIVATE KEY CRYPTOGRAPHY, OR FAILING TO PROPERLY UPDATE OR RUN SOFTWARE TO ACCOMMODATE PROTOCOL UPGRADES, LIKE THE TRANSITION TO PROOF OF STAKE CONSENSUS. BY USING THE OFFERINGS YOU EXPLICITLY ACKNOWLEDGE AND ACCEPT THESE HEIGHTENED RISKS.  YOU REPRESENT THAT YOU ARE FINANCIALLY AND TECHNICALLY SOPHISTICATED ENOUGH TO UNDERSTAND THE INHERENT RISKS ASSOCIATED WITH USING CRYPTOGRAPHIC AND BLOCKCHAIN-BASED SYSTEMS AND UPGRADING YOUR SOFTWARE AND PROCESSES TO ACCOMMODATE PROTOCOL UPGRADES, AND THAT YOU HAVE A WORKING KNOWLEDGE OF THE USAGE AND INTRICACIES OF DIGITAL ASSETS SUCH AS ETHER (ETH) AND OTHER DIGITAL TOKENS, SUCH AS THOSE FOLLOWING THE ERC-20 TOKEN STANDARD.  IN PARTICULAR, YOU UNDERSTAND THAT WE DO NOT OPERATE THE ETHEREUM PROTOCOL OR ANY OTHER BLOCKCHAIN PROTOCOL, COMMUNICATE OR EXECUTE PROTOCOL UPGRADES, OR APPROVE OR PROCESS BLOCKCHAIN TRANSACTIONS ON BEHALF OF YOU.  YOU FURTHER UNDERSTAND THAT BLOCKCHAIN PROTOCOLS PRESENT THEIR OWN RISKS OF USE, THAT SUPPORTING OR PARTICIPATING IN THE PROTOCOL MAY RESULT IN LOSSES IF YOUR PARTICIPATION VIOLATES CERTAIN PROTOCOL RULES, THAT  BLOCKCHAIN-BASED TRANSACTIONS ARE IRREVERSIBLE, THAT YOUR PRIVATE KEY AND BACKUP SEED PHRASE MUST BE KEPT SECRET AT ALL TIMES, THAT CONSENSYS WILL NOT STORE A BACKUP OF, NOR WILL BE ABLE TO DISCOVER OR RECOVER, YOUR PRIVATE KEY OR BACKUP SEED PHRASE, AND THAT YOU ARE SOLELY RESPONSIBLE FOR ANY APPROVALS OR PERMISSIONS YOU PROVIDE BY CRYPTOGRAPHICALLY SIGNING BLOCKCHAIN MESSAGES OR TRANSACTIONS."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "YOU FURTHER UNDERSTAND AND ACCEPT THAT DIGITAL TOKENS PRESENT MARKET VOLATILITY RISK, TECHNICAL SOFTWARE RISKS, REGULATORY RISKS, AND CYBERSECURITY RISKS.  YOU UNDERSTAND THAT THE COST AND SPEED OF A BLOCKCHAIN-BASED SYSTEM IS VARIABLE, THAT COST MAY INCREASE DRAMATICALLY AT ANY TIME, AND THAT COST AND SPEED IS NOT WITHIN THE CAPABILITY OF CONSENSYS TO CONTROL.  YOU UNDERSTAND THAT PROTOCOL UPGRADES MAY INADVERTENTLY CONTAIN BUGS OR SECURITY VULNERABILITIES THAT MAY RESULT IN LOSS OF FUNCTIONALITY AND ULTIMATELY FUNDS."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "YOU UNDERSTAND AND ACCEPT THAT CONSENSYS DOES NOT CONTROL ANY BLOCKCHAIN PROTOCOL, NOR DOES CONSENSYS CONTROL ANY SMART CONTRACT THAT IS NOT OTHERWISE OFFERED BY CONSENSYS AS PART OF THE OFFERINGS.  YOU UNDERSTAND AND ACCEPT THAT CONSENSYS DOES NOT CONTROL AND IS NOT RESPONSIBLE FOR THE TRANSITION OF ANY BLOCKCHAIN PROTOCOL FROM PROOF OF WORK TO PROOF OF STAKE CONSENSUS.  YOU AGREE THAT YOU ALONE, AND NOT CONSENSYS, IS RESPONSIBLE FOR ANY TRANSACTIONS THAT YOU ENGAGE IN WITH REGARD TO SUPPORTING ANY BLOCKCHAIN PROTOCOL WHETHER THROUGH TRANSACTION VALIDATION OR OTHERWISE, OR ANY TRANSACTIONS THAT YOU ENGAGE IN WITHANY THIRD-PARTY-DEVELOPED SMART CONTRACT OR TOKEN, INCLUDING TOKENS THAT WERE CREATED BY A THIRD PARTY FOR THE PURPOSE OF FRAUDULENTLY MISREPRESENTING AFFILIATION WITH ANY BLOCKCHAIN PROJECT.  YOU AGREE THAT CONSENSYS IS NOT RESPONSIBLE FOR THE REGULATORY STATUS OR TREATMENT OF ANY DIGITAL ASSETS THAT YOU MAY ACCESS OR TRANSACT WITH USING CONSENSYS OFFERINGS.  YOU EXPRESSLY ASSUME FULL RESPONSIBILITY FOR ALL OF THE RISKS OF ACCESSING AND USING THE OFFERINGS TO INTERACT WITH BLOCKCHAIN PROTOCOLS. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "10. Limitations of Liability."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "10.1 Limitation of Liability. WITH THE EXCEPTION OF CLAIMS RELATING TO A BREACH OF OUR PROPRIETARY RIGHTS AS GOVERNED BY SECTION 7 AND INTELLECTUAL PROPERTY CLAIMS AS GOVERNED BY SECTION 8, IN NO EVENT SHALL THE AGGREGATE LIABILITY OF EACH PARTY TOGETHER WITH ALL OF ITS AFFILIATES ARISING OUT OF OR RELATED TO THIS AGREEMENT EXCEED THE TOTAL AMOUNT PAID BY YOU HEREUNDER FOR THE OFFERINGS GIVING RISE TO THE LIABILITY IN THE TWELVE MONTHS PRECEDING THE FIRST INCIDENT OUT OF WHICH THE LIABILITY AROSE, OR, IF NO FEES HAVE BEEN PAID, $25,000. THE FOREGOING LIMITATION WILL APPLY WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY, BUT WILL NOT LIMIT YOUR PAYMENT OBLIGATIONS UNDER SECTION 4. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "10.2 Exclusion of Consequential and Related Damages. IN NO EVENT WILL EITHER PARTY OR ITS AFFILIATES HAVE ANY LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT FOR ANY LOST PROFITS, REVENUES, GOODWILL, OR INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER, BUSINESS INTERRUPTION OR PUNITIVE DAMAGES, WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY, EVEN IF A PARTY OR ITS AFFILIATES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR IF A PARTY’S OR ITS AFFILIATES’ REMEDY OTHERWISE FAILS OF ITS ESSENTIAL PURPOSE. THE FOREGOING DISCLAIMER WILL NOT APPLY TO THE EXTENT PROHIBITED BY LAW."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 },
                            "11. Binding Arbitration and Class Action Waiver."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.1 Binding Arbitration. Any dispute, claim or controversy (“Claim”) relating in any way to this Agreement, the Site, or your use of the Offerings will be resolved by binding arbitration as provided in this Section 11, rather than in court, except that you may assert claims in small claims court if your claims qualify."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.1.1 If you are located in the United States: This agreement and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the laws of the State of New York. The Federal Arbitration Act and federal arbitration law apply to this Agreement. There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including injunctive and declaratory relief or statutory damages), and must follow the terms of this Agreement as a court would. The arbitration will be conducted in accordance with the expedited procedures set forth in the JAMS Comprehensive Arbitration Rules and Procedures (the “Rules”) as those Rules exist on the effective date of this Agreement, including Rules 16.1 and 16.2 of those Rules. The arbitrator’s decision shall be final, binding, and non-appealable. Judgment upon the award may be entered and enforced in any court having jurisdiction. Neither party shall sue the other party other than as provided herein or for enforcement of this clause or of the arbitrator’s award; any such suit may be brought only in a Federal District Court or a New York state court located in New York County, New York. The arbitrator, and not any federal, state, or local court, shall have exclusive authority to resolve any dispute relating to the interpretation, applicability, unconscionability, arbitrability, enforceability, or formation of this Agreement including any claim that all or any part of the Agreement is void or voidable.  If for any reason a claim proceeds in court rather than in arbitration we and you waive any right to a jury trial. Notwithstanding the foregoing we and you both agree that you or we may bring suit in court to enjoin infringement or other misuse of intellectual property rights. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.1.2 If you are located in the United Kingdom: This agreement and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the law of England and Wales. Any dispute, claim or controversy relating in any way to this Agreement, the Offerings, your use of the Offerings, or to any products or services licensed or distributed by us will be resolved by binding arbitration as provided in this clause. Prior to commencing any formal arbitration proceedings, parties shall first seek settlement of any claim by mediation in accordance with the LCIA Mediation Rules, which Rules are deemed to be incorporated by reference into this clause. If the dispute is not settled by mediation within 14 days of the commencement of the mediation, or such further period as the parties shall agree in writing, the dispute shall be referred to and finally resolved by arbitration under the LCIA Rules, which are deemed to be incorporated by reference into this clause. The language to be used in the mediation and in the arbitration shall be English. The seat or legal place of arbitration shall be London."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.1.3 If you are located in any territory that is not specifically enumerated in Sections 11.1.1 or 11.1.2, you may elect for either of Section 11.1.1 or 11.1.2 to apply to you, otherwise this Agreement and any Claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the law of Ireland. Any Claim relating in any way to this Agreement, the Offerings, your use of the Offerings, or to any products or services licensed or distributed by us will be resolved by binding arbitration as provided in this clause. Prior to commencing any formal arbitration proceedings, parties shall first seek settlement of any claim by mediation in accordance with the LCIA Mediation Rules, which Rules are deemed to be incorporated by reference into this clause. If the dispute is not settled by mediation within 14 days of the commencement of the mediation, or such further period as the parties shall agree in writing, the Claim shall be referred to and finally resolved by arbitration under the LCIA Rules, which are deemed to be incorporated by reference into this clause. The language to be used in the mediation and in the arbitration shall be English. The seat or legal place of arbitration shall be Dublin, Ireland."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.2 Class Action Waiver. YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. YOU AND WE EXPRESSLY WAIVE ANY RIGHT TO FILE A CLASS ACTION OR SEEK RELIEF ON A CLASS BASIS. Unless both you and we agree, no arbitrator or judge may consolidate more than one person’s claims or otherwise preside over any form of a representative or class proceeding. The arbitrator may award injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party’s individual claim. If a court decides that applicable law precludes enforcement of any of this paragraph’s limitations as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and may be brought in court. If any court or arbitrator determines that the class action waiver set forth in this paragraph is void or unenforceable for any reason or that an arbitration can proceed on a class basis, then the arbitration provision set forth above shall be deemed null and void in its entirety and the parties shall be deemed to have not agreed to arbitrate disputes."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "11.3 30-Day Right to Opt Out. You have the right to opt-out and not be bound by the arbitration and class action waiver provisions set forth above by sending written notice of your decision to opt-out to the email address notices@consensys.net with subject line LEGAL OPT OUT. The notice must be sent within 30 days of your first use of the Offerings, otherwise you shall be bound to arbitrate disputes and will be deemed to have agreed to waive any right to pursue a class action in accordance with the terms of those paragraphs. If you opt-out of these provisions, we will also not be bound by them."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "12. Miscellaneous."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.1 Assignment. You will not assign or otherwise transfer this Agreement or any of your rights and obligations under this Agreement, without our prior written consent. Any assignment or transfer in violation of this Section 12.1 will be void. We may assign this Agreement without your consent (a) in connection with a merger, acquisition or sale of all or substantially all of our assets, or (b) to any Affiliate or as part of a corporate reorganization; and effective upon such assignment, the assignee is deemed substituted for us as a party to this Agreement and we are fully released from all of our obligations and duties to perform under this Agreement. Subject to the foregoing, this Agreement will be binding upon, and inure to the benefit of the parties and their respective permitted successors and assigns."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.2 DAOs. As a blockchain native company, we may interact with and provide certain Offerings to DAOs. Due to the unique nature of DAOs, to the extent the DAO votes in favor of and/or accepts such Offerings from ConsenSys, the DAO has acknowledged and agreed to these Terms in their entirety."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.2 Entire Agreement and Modifications. This Agreement incorporates the Policies by reference and is the entire agreement between you and us regarding the subject matter of this Agreement. If the terms of this document are inconsistent with the terms contained in any Policy, the terms contained in this document will control. Any modification to the terms of this Agreement may only be made in writing."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.3 Force Majeure. Neither party nor their respective affiliates will be liable for any delay or failure to perform any obligation under this Agreement where the delay or failure results from any cause beyond such party’s reasonable control, including but not limited to acts of God, utilities or other telecommunications failures, cyber attacks, earthquake, storms or other elements of nature, pandemics, blockages, embargoes, riots, acts or orders of government, acts of terrorism, or war."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.4 Export and Sanctions Compliance. In connection with this Agreement, you will comply with all applicable import, re-import, sanctions, anti-boycott, export, and re-export control laws and regulations, including all such laws and regulations that may apply. For clarity, you are solely responsible for compliance related to the manner in which you choose to use the Offerings. You may not use any Offering if you are the subject of U.S. sanctions or of sanctions consistent with U.S. law imposed by the governments of the country where you are using the Offering. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.5 Independent Contractors; Non-Exclusive Rights. We and you are independent contractors, and this Agreement will not be construed to create a partnership, joint venture, agency, or employment relationship. Neither party, nor any of their respective affiliates, is an agent of the other for any purpose or has the authority to bind the other. Both parties reserve the right (a) to develop or have developed for it products, services, concepts, systems, or techniques that are similar to or compete with the products, services, concepts, systems, or techniques developed or contemplated by the other party, and (b) to assist third party developers or systems integrators who may offer products or services which compete with the other party’s products or services."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.6 Eligibility. If you are under the age of majority in your jurisdiction of residence, you may use the Site or Offerings only with the consent of or under the supervision of your parent or legal guardian."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "NOTICE TO PARENTS AND GUARDIANS: By granting your minor permission to access the Site or Offerings, you agree to these Terms of Use on behalf of your minor. You are responsible for exercising supervision over your minor’s online activities. If you do not agree to these Terms of Use, do not let your minor use the Site or Offerings."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.7 Language. All communications and notices made or given pursuant to this Agreement must be in the English language. If we provide a translation of the English language version of this Agreement, the English language version of the Agreement will control if there is any conflict."
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "12.8 Notice."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(a) To You. We may provide any notice to you under this Agreement using commercially reasonable means, including: (i) posting a notice on the Site; (ii) sending a message to the email address then associated with your account; or (iii) using public communication channels . Notices we provide by posting on the Site or using public communication channels will be effective upon posting, and notices we provide by email will be effective when we send the email. It is your responsibility to keep your email address current to the extent you have an account. You will be deemed to have received any email sent to the email address then associated with your account when we send the email, whether or not you actually receive the email."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "(b) To Us. To give us notice under this Agreement, you must contact us by email at notices@consensys.net. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.9 No Third-Party Beneficiaries. Except as otherwise set forth herein, this Agreement does not create any third-party beneficiary rights in any individual or entity that is not a party to this Agreement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.10 No Waivers. The failure by us to enforce any provision of this Agreement will not constitute a present or future waiver of such provision nor limit our right to enforce such provision at a later time. All waivers by us must be in writing to be effective."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.11 Severability. If any portion of this Agreement is held to be invalid or unenforceable, the remaining portions of this Agreement will remain in full force and effect. Any invalid or unenforceable portions will be interpreted to effect and intent of the original portion. If such construction is not possible, the invalid or unenforceable portion will be severed from this Agreement but the rest of the Agreement will remain in full force and effect."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "12.12 Notice and Procedure for Making Claims of Copyright Infringement. If you are a copyright owner or agent of the owner, and you believe that your copyright or the copyright of a person on whose behalf you are authorized to act has been infringed, please provide us a written notice at the address below with the following information:"
                          ),
                          r.default.createElement(
                            u.default,
                            { as: "ol", marginLeft: 4, className: "terms-of-use__terms-list" },
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "a description of the copyrighted work or other intellectual property that you claim has been infringed;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "a description of where the material that you claim is infringing is located with respect to the Offerings;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "your address, telephone number, and email address;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner’s behalf."
                            )
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "You can reach us at:"),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "Email: notices@consensys.net"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "Subject Line: Copyright Notification Mail"
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "Attention: Copyright ℅"),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodySm, marginBottom: 4 }, "ConsenSys Software Inc. "),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "49 Bogart Street Suite 22 Brooklyn, NY 11206"
                          ),
                          r.default.createElement(c.Text, { variant: l.TextVariant.bodyLgMedium, marginBottom: 4 }, "13. Definitions."),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Acceptable Use Policy” means the policy set forth below, as it may be updated by us from time to time. You agree not to, and not to allow third parties to, use the Offerings:"
                          ),
                          r.default.createElement(
                            u.default,
                            { as: "ol", marginLeft: 4, className: "terms-of-use__terms-list" },
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to violate, or encourage the violation of, the legal rights of others (for example, this may include allowing End Users to infringe or misappropriate the intellectual property rights of others in violation of the Digital Millennium Copyright Act);"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to engage in, promote or encourage any illegal or infringing content;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "for any unlawful, invasive, infringing, defamatory or fraudulent purpose (for example, this may include phishing, creating a pyramid scheme or mirroring a website);"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to intentionally distribute viruses, worms, Trojan horses, corrupted files, hoaxes, or other items of a destructive or deceptive nature;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to interfere with the use of the Offerings, or the equipment used to provide the Offerings, by customers, authorized resellers, or other authorized users;"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to disable, interfere with or circumvent any aspect of the Offerings (for example, any thresholds or limits);"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to generate, distribute, publish or facilitate unsolicited mass email, promotions, advertising or other solicitation; or"
                            ),
                            r.default.createElement(
                              c.Text,
                              { as: "li", variant: l.TextVariant.bodySm, marginBottom: 2 },
                              "to use the Offerings, or any interfaces provided with the Offerings, to access any other product or service in a manner that violates the terms of service of such other product or service."
                            )
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“API” means an application program interface."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“API Requests” has the meaning set forth in Section 5.3."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Applicable Threshold” has the meaning set forth in Section 4.2."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Base Fees” has the meaning set forth in Section 4.2."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Content” means any data, text, audio, video or images, software (including machine images), and any documentation."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“DAO” means Decentralized Autonomous Organization."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“End User” means any individual or entity that directly or indirectly through another user: (a) accesses or uses Your Content; or (b) otherwise accesses or uses the Offerings under your account. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Fees” has the meaning set forth in Section 4.2."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Losses” means any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys’ fees).’"
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Our Content” means any software (including machine images), data, text, audio, video, images, or documentation that we offer in connection with the Offerings. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Our Marks” means any trademarks, service marks, service or trade names, logos, and other designations of ConsenSys Software Inc. and their affiliates or licensors that we may make available to you in connection with this Agreement."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Order” means an order for Offerings executed through an order form directly with ConsenSys, or through a cloud vendor, such as Amazon Web Services, Microsoft Azure, or Google Cloud."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Offerings” means each of the products and services, including but not limited to Codefi, Infura, MetaMask, Quorum and any other features, tools, materials, or services offered from time to time, by us or our affiliates. "
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Policies” means the Acceptable Use Policy, Privacy Policy, any supplemental policies or addendums applicable to any Service as provided to you, and any other policy or terms referenced in or incorporated into this Agreement, each as may be updated by us from time to time."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Privacy Policy” means the privacy policy located at",
                            " ",
                            r.default.createElement(
                              c.ButtonLink,
                              {
                                href: "https://consensys.net/privacy-policy",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                color: l.Color.primaryDefault,
                                variant: l.TextVariant.bodySm
                              },
                              "https://consensys.net/privacy-policy"
                            ),
                            " ",
                            "(and any successor or related locations designated by us), as it may be updated by us from time to time."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Service Offerings” means the Services (including associated APIs), Our Content, Our Marks, and any other product or service provided by us under this Agreement. Service Offerings do not include Third-Party Content or Third-Party Services."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Suggestions” means all suggested improvements to the Service Offerings that you provide to us.."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Term” means the term of this Agreement described in Section 6.1."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Termination Date” means the effective date of termination provided in accordance with Section 6, in a notice from one party to the other."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Third-Party Content” means Content made available to you by any third party on the Site or in conjunction with the Offerings."
                          ),
                          r.default.createElement(
                            c.Text,
                            { variant: l.TextVariant.bodySm, marginBottom: 4 },
                            "“Your Content” means content that you or any End User transfers to us, storage or hosting by the Offerings in connection with account and any computational results that you or any End User derive from the foregoing through their use of the Offerings, excluding however any information submitted to a blockchain protocol for processing. "
                          ),
                          r.default.createElement(
                            u.default,
                            {
                              flexDirection: l.FLEX_DIRECTION.ROW,
                              alignItems: l.AlignItems.flexStart,
                              marginLeft: 3,
                              marginRight: 3,
                              gap: 2
                            },
                            r.default.createElement(d.default, {
                              id: "terms-of-use__checkbox",
                              className: "terms-of-use__checkbox",
                              dataTestId: "terms-of-use-checkbox",
                              checked: a,
                              onClick: () => {
                                m(!a);
                              }
                            }),
                            r.default.createElement(
                              c.Label,
                              { htmlFor: "terms-of-use__checkbox" },
                              r.default.createElement(
                                c.Text,
                                { variant: l.TextVariant.bodyMdBold, as: "span", ref: b },
                                t("termsOfUseAgreeText")
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                }
                y.propTypes = { onAccept: a.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/terms-of-use-popup/terms-of-use-popup.js" }
    ],
    [
      4339,
      { "./token-cell": 4340 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./token-cell")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-cell/index.js" }
    ],
    [
      4340,
      {
        "../../../../shared/modules/string-utils": 4002,
        "../../../hooks/useIsOriginalTokenSymbol": 4840,
        "../../../hooks/useTokenFiatAmount": 4858,
        "../../../selectors": 5197,
        "../../multichain": 4555,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var r = d(e("prop-types")),
                  a = d(e("react")),
                  o = e("react-redux"),
                  i = e("../../../selectors"),
                  s = e("../../../hooks/useTokenFiatAmount"),
                  l = e("../../multichain"),
                  c = e("../../../../shared/modules/string-utils"),
                  u = e("../../../hooks/useIsOriginalTokenSymbol");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p({ address: e, image: t, symbol: n, string: r, onClick: d }) {
                  const p = (0, o.useSelector)(i.getTokenList),
                    f = Object.values(p).find((t) => t.symbol === n && (0, c.isEqualCaseInsensitive)(t.address, e)),
                    m = (null == f ? void 0 : f.name) || n,
                    h = (null == f ? void 0 : f.iconUrl) || t,
                    y = (0, s.useTokenFiatAmount)(e, r, n),
                    g = (0, u.useIsOriginalTokenSymbol)(e, n);
                  return a.default.createElement(l.TokenListItem, {
                    onClick: () => d(e),
                    tokenSymbol: n,
                    tokenImage: h,
                    primary: `${r || 0}`,
                    secondary: g ? y : null,
                    title: m,
                    isOriginalTokenSymbol: g
                  });
                }
                p.propTypes = {
                  address: r.default.string,
                  symbol: r.default.string,
                  string: r.default.string,
                  onClick: r.default.func.isRequired,
                  image: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-cell/token-cell.js" }
    ],
    [
      4341,
      { "./token-list-display": 4342 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./token-list-display")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-list-display/index.js" }
    ],
    [
      4342,
      {
        "../../../ducks/metamask/metamask": 4763,
        "../../../hooks/useI18nContext": 4837,
        "../../../hooks/useTokenTracker": 4859,
        "../../../selectors": 5197,
        "../../ui/identicon": 4664,
        "../../ui/token-balance": 4731,
        lodash: 3312,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = m);
                var r = f(e("react")),
                  a = f(e("prop-types")),
                  o = e("react-redux"),
                  i = e("lodash"),
                  s = e("../../../selectors"),
                  l = e("../../../hooks/useTokenTracker"),
                  c = f(e("../../ui/identicon")),
                  u = f(e("../../ui/token-balance")),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../ducks/metamask/metamask");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m({ clickHandler: e }) {
                  const t = (0, d.useI18nContext)(),
                    n = (0, o.useSelector)(s.getShouldHideZeroBalanceTokens),
                    a = (0, o.useSelector)(p.getTokens, i.isEqual),
                    { loading: f, tokensWithBalances: m } = (0, l.useTokenTracker)({
                      tokens: a,
                      includeFailedTokens: !0,
                      hideZeroBalanceTokens: n
                    });
                  if (f) return r.default.createElement("div", { className: "loading-span" }, t("loadingTokens"));
                  const h = m.filter((e) => !e.isERC721);
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    h.map((n) => {
                      const { address: a, symbol: o, image: i } = n;
                      return r.default.createElement(
                        "div",
                        { key: a, className: "token-list-item", onClick: () => e(n) },
                        r.default.createElement(c.default, { address: a, diameter: 36, image: i }),
                        r.default.createElement(
                          "div",
                          { className: "token-list-item__data" },
                          r.default.createElement("div", { className: "token-list-item__symbol" }, o),
                          r.default.createElement(
                            "div",
                            { className: "token-list-item__balance" },
                            r.default.createElement("span", { className: "token-list-item__balance__label" }, `${t("balance")}:`),
                            r.default.createElement(u.default, { token: n })
                          )
                        )
                      );
                    })
                  );
                }
                m.propTypes = { clickHandler: a.default.func };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-list-display/token-list-display.js" }
    ],
    [
      4343,
      { "./token-list": 4344 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./token-list")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-list/index.js" }
    ],
    [
      4344,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../token-cell": 4339,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = c(e("../token-cell")),
                  i = e("../../../hooks/useI18nContext"),
                  s = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                function d({ onTokenClick: e, tokens: t, loading: n = !1 }) {
                  const a = (0, i.useI18nContext)();
                  return n
                    ? r.default.createElement(
                        s.Box,
                        {
                          display: l.Display.Flex,
                          alignItems: l.AlignItems.center,
                          justifyContent: l.JustifyContent.center,
                          padding: 7,
                          "data-testid": "token-list-loading-message"
                        },
                        a("loadingTokens")
                      )
                    : r.default.createElement(
                        "div",
                        null,
                        t.map((t, n) => r.default.createElement(o.default, u({ key: n }, t, { onClick: e })))
                      );
                }
                d.propTypes = { onTokenClick: a.default.func.isRequired, tokens: a.default.array.isRequired, loading: a.default.bool };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/token-list/token-list.js" }
    ],
    [
      4345,
      { "./transaction-activity-log.container": 4350 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-activity-log.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/index.js" }
    ],
    [
      4346,
      { "./transaction-activity-log-icon.component": 4347 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-activity-log-icon.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log-icon/index.js" }
    ],
    [
      4347,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../component-library": 4453,
        "../transaction-activity-log.constants": 4349,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.ACTIVITY_ICONS = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = c(e("prop-types")),
                  o = c(e("classnames")),
                  i = e("../transaction-activity-log.constants"),
                  s = e("../../../component-library"),
                  l = e("../../../../helpers/constants/design-system");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = n),
                    e
                  );
                }
                const p = (n.ACTIVITY_ICONS = {
                  [i.TRANSACTION_CREATED_EVENT]: s.IconName.Add,
                  [i.TRANSACTION_SUBMITTED_EVENT]: s.IconName.ArrowUp,
                  [i.TRANSACTION_RESUBMITTED_EVENT]: s.IconName.ProgrammingArrows,
                  [i.TRANSACTION_CONFIRMED_EVENT]: s.IconName.Check,
                  [i.TRANSACTION_DROPPED_EVENT]: s.IconName.Close,
                  [i.TRANSACTION_ERRORED_EVENT]: s.IconName.Danger,
                  [i.TRANSACTION_CANCEL_ATTEMPTED_EVENT]: s.IconName.Close,
                  [i.TRANSACTION_CANCEL_SUCCESS_EVENT]: s.IconName.Close
                });
                class f extends r.PureComponent {
                  render() {
                    const { className: e, eventKey: t } = this.props,
                      n = p[t];
                    return r.default.createElement(
                      "div",
                      { className: (0, o.default)("transaction-activity-log-icon", e) },
                      n ? r.default.createElement(s.Icon, { name: n, color: l.Color.iconDefault, size: s.IconSize.Sm }) : null
                    );
                  }
                }
                (n.default = f),
                  d(f, "contextTypes", { t: a.default.func }),
                  d(f, "propTypes", { className: a.default.string, eventKey: a.default.oneOf(Object.keys(p)) });
              };
            };
      },
      {
        package: "$root$",
        file: "ui/components/app/transaction-activity-log/transaction-activity-log-icon/transaction-activity-log-icon.component.js"
      }
    ],
    [
      4348,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../helpers/utils/util": 4812,
        "./transaction-activity-log-icon": 4346,
        "./transaction-activity-log.constants": 4349,
        "@metamask/etherscan-link": 1255,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("classnames")),
                  i = e("@metamask/etherscan-link"),
                  s = e("../../../helpers/utils/util"),
                  l = e("../../../../shared/constants/metametrics"),
                  c = e("../../../../shared/modules/conversion.utils"),
                  u = p(e("./transaction-activity-log-icon")),
                  d = e("./transaction-activity-log.constants");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = n),
                    e
                  );
                }
                class h extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      m(this, "handleActivityClick", (e) => {
                        const { rpcPrefs: t } = this.props,
                          n = (0, i.getBlockExplorerLink)(e, t);
                        this.context.trackEvent({
                          category: l.MetaMetricsEventCategory.Transactions,
                          event: "Clicked Block Explorer Link",
                          properties: {
                            link_type: "Transaction Block Explorer",
                            action: "Activity Details",
                            block_explorer_domain: (0, s.getURLHostName)(n)
                          }
                        }),
                          global.platform.openTab({ url: n });
                      });
                  }
                  renderInlineRetry(e) {
                    const { t: t } = this.context,
                      { inlineRetryIndex: n, primaryTransaction: a = {}, onRetry: o, isEarliestNonce: i } = this.props,
                      { status: s } = a;
                    return i && s !== d.CONFIRMED_STATUS && e === n
                      ? r.default.createElement(
                          "div",
                          { className: "transaction-activity-log__action-link", onClick: o },
                          t("speedUpTransaction")
                        )
                      : null;
                  }
                  renderInlineCancel(e) {
                    const { t: t } = this.context,
                      { inlineCancelIndex: n, primaryTransaction: a = {}, onCancel: o, isEarliestNonce: i } = this.props,
                      { status: s } = a;
                    return i && s !== d.CONFIRMED_STATUS && e === n
                      ? r.default.createElement(
                          "div",
                          { className: "transaction-activity-log__action-link", onClick: o },
                          t("speedUpCancellation")
                        )
                      : null;
                  }
                  renderActivity(e, t) {
                    const { conversionRate: n, nativeCurrency: a } = this.props,
                      { eventKey: o, value: i, timestamp: l } = e,
                      d = `${(0, c.getValueFromWeiHex)({
                        value: i,
                        fromCurrency: "ETH",
                        toCurrency: "ETH",
                        conversionRate: n,
                        numberOfDecimals: 6
                      })} ${a}`,
                      p = (0, s.formatDate)(l, "T 'on' M/d/y"),
                      f = this.context.t(o, [d, p]);
                    return r.default.createElement(
                      "div",
                      { key: t, className: "transaction-activity-log__activity" },
                      r.default.createElement(u.default, { className: "transaction-activity-log__activity-icon", eventKey: o }),
                      r.default.createElement(
                        "div",
                        { className: "transaction-activity-log__entry-container" },
                        r.default.createElement(
                          "div",
                          { className: "transaction-activity-log__activity-text", title: f, onClick: () => this.handleActivityClick(e) },
                          f
                        ),
                        this.renderInlineRetry(t),
                        this.renderInlineCancel(t)
                      )
                    );
                  }
                  render() {
                    const { t: e } = this.context,
                      { className: t, activities: n } = this.props;
                    return 0 === n.length
                      ? null
                      : r.default.createElement(
                          "div",
                          { className: (0, o.default)("transaction-activity-log", t) },
                          r.default.createElement("div", { className: "transaction-activity-log__title" }, e("activityLog")),
                          r.default.createElement(
                            "div",
                            { className: "transaction-activity-log__activities-container" },
                            n.map((e, t) => this.renderActivity(e, t))
                          )
                        );
                  }
                }
                (n.default = h),
                  m(h, "contextTypes", { t: a.default.func, trackEvent: a.default.func }),
                  m(h, "propTypes", {
                    activities: a.default.array,
                    className: a.default.string,
                    conversionRate: a.default.number,
                    inlineRetryIndex: a.default.number,
                    inlineCancelIndex: a.default.number,
                    nativeCurrency: a.default.string,
                    onCancel: a.default.func,
                    onRetry: a.default.func,
                    primaryTransaction: a.default.object,
                    isEarliestNonce: a.default.bool,
                    rpcPrefs: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log.component.js" }
    ],
    [
      4349,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.TRANSACTION_UPDATED_EVENT =
                    n.TRANSACTION_SUBMITTED_EVENT =
                    n.TRANSACTION_RESUBMITTED_EVENT =
                    n.TRANSACTION_ERRORED_EVENT =
                    n.TRANSACTION_DROPPED_EVENT =
                    n.TRANSACTION_CREATED_EVENT =
                    n.TRANSACTION_CONFIRMED_EVENT =
                    n.TRANSACTION_CANCEL_SUCCESS_EVENT =
                    n.TRANSACTION_CANCEL_ATTEMPTED_EVENT =
                    n.SUBMITTED_STATUS =
                    n.DROPPED_STATUS =
                    n.CONFIRMED_STATUS =
                      void 0);
                (n.TRANSACTION_CREATED_EVENT = "transactionCreated"),
                  (n.TRANSACTION_SUBMITTED_EVENT = "transactionSubmitted"),
                  (n.TRANSACTION_RESUBMITTED_EVENT = "transactionResubmitted"),
                  (n.TRANSACTION_CONFIRMED_EVENT = "transactionConfirmed"),
                  (n.TRANSACTION_DROPPED_EVENT = "transactionDropped"),
                  (n.TRANSACTION_UPDATED_EVENT = "transactionUpdated"),
                  (n.TRANSACTION_ERRORED_EVENT = "transactionErrored"),
                  (n.TRANSACTION_CANCEL_ATTEMPTED_EVENT = "transactionCancelAttempted"),
                  (n.TRANSACTION_CANCEL_SUCCESS_EVENT = "transactionCancelSuccess"),
                  (n.SUBMITTED_STATUS = "submitted"),
                  (n.CONFIRMED_STATUS = "confirmed"),
                  (n.DROPPED_STATUS = "dropped");
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log.constants.js" }
    ],
    [
      4350,
      {
        "../../../ducks/metamask/metamask": 4763,
        "../../../selectors": 5197,
        "./transaction-activity-log.component": 4348,
        "./transaction-activity-log.constants": 4349,
        "./transaction-activity-log.util": 4351,
        lodash: 3312,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("lodash"),
                  i = e("../../../selectors"),
                  s = e("../../../ducks/metamask/metamask"),
                  l = (r = e("./transaction-activity-log.component")) && r.__esModule ? r : { default: r },
                  c = e("./transaction-activity-log.util"),
                  u = e("./transaction-activity-log.constants");
                const d =
                  (e) =>
                  ({ eventKey: t }) =>
                    t === e;
                n.default = (0, a.connect)(
                  (e) => ({
                    conversionRate: (0, i.conversionRateSelector)(e),
                    nativeCurrency: (0, s.getNativeCurrency)(e),
                    rpcPrefs: (0, i.getRpcPrefsForCurrentProvider)(e)
                  }),
                  null,
                  (e, t, n) => {
                    const { transactionGroup: { transactions: r = [], primaryTransaction: a } = {}, ...i } = n,
                      s = (0, c.combineTransactionHistories)(r);
                    return {
                      ...e,
                      ...t,
                      ...i,
                      activities: s,
                      inlineRetryIndex: (0, o.findLastIndex)(s, d(u.TRANSACTION_RESUBMITTED_EVENT)),
                      inlineCancelIndex: (0, o.findLastIndex)(s, d(u.TRANSACTION_CANCEL_ATTEMPTED_EVENT)),
                      primaryTransaction: a
                    };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log.container.js" }
    ],
    [
      4351,
      {
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../helpers/utils/confirm-tx.util": 4794,
        "./transaction-activity-log.constants": 4349,
        "@metamask/transaction-controller": 1835
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.combineTransactionHistories = function (e = []) {
                    if (!e.length) return [];
                    const t = [];
                    e.forEach((e, n) => {
                      const r = h(e, 0 === n);
                      t.push(...r);
                    });
                    return (function (e) {
                      const t = [],
                        n = Boolean(
                          e.find(({ eventKey: e }) => e === i.TRANSACTION_CONFIRMED_EVENT || e === i.TRANSACTION_CANCEL_SUCCESS_EVENT)
                        );
                      let r = !1;
                      return (
                        e.forEach((e) => {
                          e.eventKey === i.TRANSACTION_DROPPED_EVENT ? n || r || (t.push(e), (r = !0)) : t.push(e);
                        }),
                        t
                      );
                    })(t.sort((e, t) => e.timestamp - t.timestamp));
                  }),
                  (n.getActivities = h);
                var r = e("@metamask/transaction-controller"),
                  a = e("../../../../shared/modules/conversion.utils"),
                  o = e("../../../helpers/utils/confirm-tx.util"),
                  i = e("./transaction-activity-log.constants");
                const s = "/status",
                  l = "/txParams/gasPrice",
                  c = "/txParams/gas",
                  u = "/estimatedBaseFee",
                  d = "/blockTimestamp",
                  p = "replace",
                  f = { [s]: !0, [l]: !0, [c]: !0, [d]: !0 },
                  m = {
                    [i.SUBMITTED_STATUS]: i.TRANSACTION_SUBMITTED_EVENT,
                    [i.CONFIRMED_STATUS]: i.TRANSACTION_CONFIRMED_EVENT,
                    [i.DROPPED_STATUS]: i.TRANSACTION_DROPPED_EVENT
                  };
                function h(e, t = !1) {
                  const {
                      id: n,
                      chainId: h,
                      hash: y,
                      history: g = [],
                      txParams: { gas: b, gasPrice: v, maxPriorityFeePerGas: T },
                      txReceipt: { status: E } = {},
                      type: w,
                      estimatedBaseFee: O
                    } = e,
                    x = O && T && (0, a.sumHexes)(O, T);
                  let S = "0x0",
                    _ = "0x0";
                  const k = g.reduce((e, g, T) => {
                    if (0 === T && !Array.isArray(g) && g.txParams) {
                      const {
                          time: r,
                          estimatedBaseFee: o,
                          txParams: { value: s, gas: l = "0x0", gasPrice: c, maxPriorityFeePerGas: u } = {}
                        } = g,
                        d = o && u && (0, a.sumHexes)(o, u);
                      if (((S = l), (_ = d || c || v || "0x0"), t))
                        return e.concat({ id: n, hash: y, chainId: h, eventKey: i.TRANSACTION_CREATED_EVENT, timestamp: r, value: s });
                    } else if (Array.isArray(g)) {
                      const t = [];
                      return (
                        g.forEach((a) => {
                          const { op: T, path: E, value: O, timestamp: k } = a,
                            C = k || (g[0] && g[0].timestamp);
                          if ((E in f && T === p) || (E === u && "add" === T))
                            switch (E) {
                              case s: {
                                const e =
                                  "0x0" === S && "0x0" === _
                                    ? (0, o.getHexGasTotal)({ gasLimit: b, gasPrice: x || v })
                                    : (0, o.getHexGasTotal)({ gasLimit: S, gasPrice: _ });
                                if (O in m) {
                                  let a = m[O];
                                  O === i.SUBMITTED_STATUS
                                    ? w === r.TransactionType.retry
                                      ? (a = i.TRANSACTION_RESUBMITTED_EVENT)
                                      : w === r.TransactionType.cancel && (a = i.TRANSACTION_CANCEL_ATTEMPTED_EVENT)
                                    : O === i.CONFIRMED_STATUS &&
                                      w === r.TransactionType.cancel &&
                                      (a = i.TRANSACTION_CANCEL_SUCCESS_EVENT),
                                    t.push({ id: n, hash: y, eventKey: a, timestamp: C, chainId: h, value: e });
                                }
                                break;
                              }
                              case l:
                              case c:
                              case u: {
                                const e = t[t.length - 1] || {},
                                  { lastEventKey: n } = e;
                                if (E === c) S = O;
                                else if (E === l) _ = O;
                                else if (E === u) {
                                  var A;
                                  (_ = x || (null == g || null === (A = g.txParams) || void 0 === A ? void 0 : A.gasPrice)),
                                    (e.value = (0, o.getHexGasTotal)({ gasLimit: b, gasPrice: _ }));
                                }
                                (n !== i.TRANSACTION_SUBMITTED_EVENT && n !== i.TRANSACTION_RESUBMITTED_EVENT) ||
                                  (e.value = (0, o.getHexGasTotal)({ gasLimit: S, gasPrice: _ }));
                                break;
                              }
                              case d: {
                                const t = e.find((e) => e.eventKey === i.TRANSACTION_CONFIRMED_EVENT);
                                t !== undefined && (t.timestamp = new Date(1e3 * parseInt(a.value, 16)).getTime());
                                break;
                              }
                              default:
                                t.push({ id: n, hash: y, chainId: h, eventKey: i.TRANSACTION_UPDATED_EVENT, timestamp: C });
                            }
                        }),
                        e.concat(t)
                      );
                    }
                    return e;
                  }, []);
                  return "0x0" === E ? k.concat({ id: n, hash: y, chainId: h, eventKey: i.TRANSACTION_ERRORED_EVENT }) : k;
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-activity-log/transaction-activity-log.util.js" }
    ],
    [
      4352,
      { "./transaction-alerts": 4353 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-alerts")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-alerts/index.js" }
    ],
    [
      4353,
      {
        "../../../../shared/constants/gas": 3957,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/lib/metamask-controller-utils": 3977,
        "../../../../shared/modules/security-provider.utils": 4e3,
        "../../../../shared/modules/transaction.utils": 4004,
        "../../../contexts/gasFee": 4747,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/zendesk-url": 4781,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../ui/simulation-error-message": 4711,
        "../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert": 4252,
        "../security-provider-banner-message/security-provider-banner-message": 4255,
        "@metamask/transaction-controller": 1835,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = x(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = O(e("prop-types")),
                  o = e("react-redux"),
                  i = e("@metamask/transaction-controller"),
                  s = e("../../../../shared/constants/gas"),
                  l = e("../../../selectors"),
                  c = e("../../../contexts/gasFee"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../component-library"),
                  p = O(e("../../ui/simulation-error-message")),
                  f = e("../../../helpers/constants/design-system"),
                  m = O(e("../../../helpers/constants/zendesk-url")),
                  h = e("../../../contexts/metametrics"),
                  y = e("../../../../shared/modules/security-provider.utils"),
                  g = O(e("../security-provider-banner-alert/blockaid-banner-alert/blockaid-banner-alert")),
                  b = O(e("../security-provider-banner-message/security-provider-banner-message")),
                  v = e("../../../ducks/metamask/metamask"),
                  T = e("../../../../shared/modules/transaction.utils"),
                  E = e("../../../../shared/lib/metamask-controller-utils"),
                  w = e("../../../../shared/constants/metametrics");
                function O(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (x = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const S = ({ userAcknowledgedGasMissing: e, setUserAcknowledgedGasMissing: t, tokenSymbol: n, txData: a }) => {
                  const { estimateUsed: O, hasSimulationError: x, supportsEIP1559: S, isNetworkBusy: _ } = (0, c.useGasFeeContext)(),
                    k = (0, o.useSelector)(l.submittedPendingTransactionsSelector),
                    C = (0, u.useI18nContext)(),
                    A = (0, o.useSelector)(v.getNativeCurrency),
                    N = a.txParams.data,
                    P = n || A;
                  let I;
                  if (
                    (a.type === i.TransactionType.simpleSend && (I = a.txParams.value), a.type === i.TransactionType.tokenMethodTransfer)
                  ) {
                    const e = (0, T.parseStandardTokenTransactionData)(N);
                    I = (0, E.getTokenValueParam)(e);
                  }
                  const M =
                      (a.type === i.TransactionType.simpleSend || a.type === i.TransactionType.tokenMethodTransfer) &&
                      ("0x0" === I || "0" === I),
                    j = (0, r.useContext)(h.MetaMetricsContext),
                    B = (0, r.useCallback)(() => {
                      j({
                        category: w.MetaMetricsEventCategory.Transactions,
                        event: w.MetaMetricsEventName.ExternalLinkClicked,
                        properties: {
                          action: "Confirm Screen",
                          origin: null == a ? void 0 : a.origin,
                          external_link_clicked: "security_alert_support_link"
                        }
                      });
                    }, []);
                  return r.default.createElement(
                    "div",
                    { className: "transaction-alerts" },
                    r.default.createElement(g.default, {
                      onClickSupportLink: B,
                      securityAlertResponse: null == a ? void 0 : a.securityAlertResponse
                    }),
                    (0, y.isSuspiciousResponse)(null == a ? void 0 : a.securityProviderResponse) &&
                      r.default.createElement(b.default, { securityProviderResponse: a.securityProviderResponse }),
                    S && x && r.default.createElement(p.default, { userAcknowledgedGasMissing: e, setUserAcknowledgedGasMissing: t }),
                    S &&
                      (null == k ? void 0 : k.length) > 0 &&
                      r.default.createElement(
                        d.BannerAlert,
                        { severity: f.SEVERITIES.WARNING },
                        r.default.createElement(
                          d.Text,
                          { as: "p" },
                          r.default.createElement(
                            "strong",
                            null,
                            1 === (null == k ? void 0 : k.length)
                              ? C("pendingTransactionSingle", [null == k ? void 0 : k.length])
                              : C("pendingTransactionMultiple", [null == k ? void 0 : k.length])
                          ),
                          " ",
                          C("pendingTransactionInfo"),
                          C("learnCancelSpeeedup", [
                            r.default.createElement(
                              d.ButtonLink,
                              { key: "cancelSpeedUpInfo", href: m.default.SPEEDUP_CANCEL, rel: "noopener noreferrer", target: "_blank" },
                              C("cancelSpeedUp")
                            )
                          ])
                        )
                      ),
                    O === s.PriorityLevels.low &&
                      r.default.createElement(
                        d.BannerAlert,
                        { "data-testid": "low-gas-fee-alert", severity: f.SEVERITIES.WARNING },
                        C("lowPriorityMessage")
                      ),
                    S && _ ? r.default.createElement(d.BannerAlert, { severity: f.SEVERITIES.WARNING }, C("networkIsBusy")) : null,
                    M && r.default.createElement(d.BannerAlert, { severity: f.SEVERITIES.WARNING }, C("sendingZeroAmount", [P]))
                  );
                };
                S.propTypes = {
                  userAcknowledgedGasMissing: a.default.bool,
                  setUserAcknowledgedGasMissing: a.default.func,
                  tokenSymbol: a.default.string,
                  txData: a.default.object
                };
                n.default = S;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-alerts/transaction-alerts.js" }
    ],
    [
      4354,
      { "./transaction-breakdown.container": 4358 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-breakdown.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-breakdown/index.js" }
    ],
    [
      4355,
      { "./transaction-breakdown-row.component": 4356 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-breakdown-row.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-breakdown/transaction-breakdown-row/index.js" }
    ],
    [
      4356,
      { classnames: 2414, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a,
                  o,
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  s = c(e("prop-types")),
                  l = c(e("classnames"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                class d extends i.PureComponent {
                  render() {
                    const { title: e, children: t, className: n, divider: r = !1 } = this.props;
                    return i.default.createElement(
                      "div",
                      {
                        className: (0, l.default)("transaction-breakdown-row", r ? "transaction-breakdown-row--with-bottom-border" : "", n),
                        "data-testid": "transaction-breakdown-row"
                      },
                      i.default.createElement(
                        "div",
                        { className: "transaction-breakdown-row__title", "data-testid": "transaction-breakdown-row-title" },
                        e
                      ),
                      i.default.createElement(
                        "div",
                        { className: "transaction-breakdown-row__value", "data-testid": "transaction-breakdown-row-value" },
                        t
                      )
                    );
                  }
                }
                (n.default = d),
                  (r = d),
                  (a = "propTypes"),
                  (o = { title: s.default.string, children: s.default.node, className: s.default.string, divider: s.default.bool }),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (n !== undefined) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(a)) in r
                    ? Object.defineProperty(r, a, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                    : (r[a] = o);
              };
            };
      },
      {
        package: "$root$",
        file: "ui/components/app/transaction-breakdown/transaction-breakdown-row/transaction-breakdown-row.component.js"
      }
    ],
    [
      4357,
      {
        "../../../../shared/constants/common": 3955,
        "../../../helpers/constants/common": 4769,
        "../../ui/currency-display": 4627,
        "../../ui/hex-to-decimal": 4646,
        "../user-preferenced-currency-display": 4378,
        "./transaction-breakdown-row": 4355,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("classnames")),
                  i = p(e("../../ui/currency-display")),
                  s = p(e("../user-preferenced-currency-display")),
                  l = p(e("../../ui/hex-to-decimal")),
                  c = e("../../../helpers/constants/common"),
                  u = e("../../../../shared/constants/common"),
                  d = p(e("./transaction-breakdown-row"));
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = n),
                    e
                  );
                }
                class h extends r.PureComponent {
                  render() {
                    const { t: e } = this.context,
                      {
                        gas: t,
                        gasPrice: n,
                        maxFeePerGas: a,
                        primaryCurrency: p,
                        className: f,
                        nonce: m,
                        nativeCurrency: h,
                        showFiat: y,
                        totalInHex: g,
                        gasUsed: b,
                        isTokenApprove: v,
                        baseFee: T,
                        priorityFee: E,
                        hexGasTotal: w,
                        isEIP1559Transaction: O,
                        isMultiLayerFeeNetwork: x,
                        l1HexGasTotal: S
                      } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: (0, o.default)("transaction-breakdown", f) },
                      r.default.createElement("div", { className: "transaction-breakdown__title" }, e("transaction")),
                      r.default.createElement(
                        d.default,
                        { divider: !0, title: e("nonce") },
                        void 0 === m ? null : r.default.createElement(l.default, { className: "transaction-breakdown__value", value: m })
                      ),
                      r.default.createElement(
                        d.default,
                        { title: e(v ? "spendingCap" : "amount") },
                        r.default.createElement(
                          "span",
                          {
                            className: "transaction-breakdown__value transaction-breakdown__value--amount",
                            "data-testid": "transaction-breakdown-value-amount"
                          },
                          p
                        )
                      ),
                      r.default.createElement(
                        d.default,
                        {
                          title: x ? e("transactionHistoryL2GasLimitLabel") : `${e("gasLimit")} (${e("units")})`,
                          className: "transaction-breakdown__row-title"
                        },
                        void 0 === t ? "?" : r.default.createElement(l.default, { className: "transaction-breakdown__value", value: t })
                      ),
                      "string" == typeof b &&
                        r.default.createElement(
                          d.default,
                          { title: `${e("gasUsed")} (${e("units")})`, className: "transaction-breakdown__row-title" },
                          r.default.createElement(l.default, { className: "transaction-breakdown__value", value: b })
                        ),
                      O && void 0 !== T
                        ? r.default.createElement(
                            d.default,
                            { title: e("transactionHistoryBaseFee") },
                            r.default.createElement(i.default, {
                              className: "transaction-breakdown__value",
                              "data-testid": "transaction-breakdown__base-fee",
                              currency: h,
                              denomination: u.EtherDenomination.GWEI,
                              value: T,
                              numberOfDecimals: 10,
                              hideLabel: !0
                            })
                          )
                        : null,
                      O && void 0 !== E
                        ? r.default.createElement(
                            d.default,
                            { title: e("transactionHistoryPriorityFee") },
                            r.default.createElement(i.default, {
                              className: "transaction-breakdown__value",
                              "data-testid": "transaction-breakdown__priority-fee",
                              currency: h,
                              denomination: u.EtherDenomination.GWEI,
                              value: E,
                              numberOfDecimals: 10,
                              hideLabel: !0
                            })
                          )
                        : null,
                      !O &&
                        r.default.createElement(
                          d.default,
                          { title: e(x ? "transactionHistoryL2GasPriceLabel" : "advancedGasPriceTitle") },
                          void 0 === n
                            ? "?"
                            : r.default.createElement(i.default, {
                                className: "transaction-breakdown__value",
                                "data-testid": "transaction-breakdown__gas-price",
                                currency: h,
                                denomination: u.EtherDenomination.GWEI,
                                value: n,
                                numberOfDecimals: 9,
                                hideLabel: !0
                              })
                        ),
                      O &&
                        r.default.createElement(
                          d.default,
                          { title: e("transactionHistoryTotalGasFee") },
                          r.default.createElement(s.default, {
                            className: "transaction-breakdown__value",
                            "data-testid": "transaction-breakdown__effective-gas-price",
                            currency: h,
                            denomination: u.EtherDenomination.ETH,
                            numberOfDecimals: 6,
                            value: w,
                            type: c.PRIMARY
                          }),
                          y &&
                            r.default.createElement(s.default, { className: "transaction-breakdown__value", type: c.SECONDARY, value: w })
                        ),
                      O &&
                        r.default.createElement(
                          d.default,
                          { divider: !0, title: e("transactionHistoryMaxFeePerGas") },
                          r.default.createElement(s.default, {
                            className: "transaction-breakdown__value",
                            currency: h,
                            denomination: u.EtherDenomination.ETH,
                            numberOfDecimals: 9,
                            value: a,
                            type: c.PRIMARY
                          }),
                          y &&
                            r.default.createElement(s.default, { className: "transaction-breakdown__value", type: c.SECONDARY, value: a })
                        ),
                      x &&
                        r.default.createElement(
                          d.default,
                          { title: e("transactionHistoryL1GasLabel") },
                          r.default.createElement(s.default, {
                            className: "transaction-breakdown__value",
                            "data-testid": "transaction-breakdown__l1-gas-total",
                            numberOfDecimals: 18,
                            value: S,
                            type: c.PRIMARY
                          }),
                          y &&
                            r.default.createElement(s.default, { className: "transaction-breakdown__value", type: c.SECONDARY, value: S })
                        ),
                      r.default.createElement(
                        d.default,
                        { title: e("total") },
                        r.default.createElement(s.default, {
                          className: "transaction-breakdown__value transaction-breakdown__value--eth-total",
                          type: c.PRIMARY,
                          value: g,
                          numberOfDecimals: x ? 18 : null
                        }),
                        y && r.default.createElement(s.default, { className: "transaction-breakdown__value", type: c.SECONDARY, value: g })
                      )
                    );
                  }
                }
                (n.default = h),
                  m(h, "contextTypes", { t: a.default.func }),
                  m(h, "propTypes", {
                    className: a.default.string,
                    nativeCurrency: a.default.string,
                    showFiat: a.default.bool,
                    nonce: a.default.string,
                    primaryCurrency: a.default.string,
                    isTokenApprove: a.default.bool,
                    gas: a.default.oneOfType([a.default.string, a.default.number]),
                    gasPrice: a.default.oneOfType([a.default.string, a.default.number]),
                    maxFeePerGas: a.default.oneOfType([a.default.string, a.default.number]),
                    gasUsed: a.default.oneOfType([a.default.string, a.default.number]),
                    totalInHex: a.default.oneOfType([a.default.string, a.default.number]),
                    baseFee: a.default.oneOfType([a.default.string, a.default.number]),
                    priorityFee: a.default.oneOfType([a.default.string, a.default.number]),
                    hexGasTotal: a.default.string,
                    isEIP1559Transaction: a.default.bool,
                    isMultiLayerFeeNetwork: a.default.bool,
                    l1HexGasTotal: a.default.string
                  }),
                  m(h, "defaultProps", { showFiat: !0 });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-breakdown/transaction-breakdown.component.js" }
    ],
    [
      4358,
      {
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../../shared/modules/transaction.utils": 4004,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/utils/confirm-tx.util": 4794,
        "../../../selectors": 5197,
        "./transaction-breakdown.component": 4357,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../selectors"),
                  i = e("../../../ducks/metamask/metamask"),
                  s = e("../../../helpers/utils/confirm-tx.util"),
                  l = e("../../../../shared/modules/transaction.utils"),
                  c = e("../../../../shared/modules/conversion.utils"),
                  u = (r = e("./transaction-breakdown.component")) && r.__esModule ? r : { default: r };
                n.default = (0, a.connect)((e, t) => {
                  const { transaction: n, isTokenApprove: r } = t,
                    {
                      txParams: { gas: a, gasPrice: u, maxFeePerGas: d, value: p } = {},
                      txReceipt: { gasUsed: f, effectiveGasPrice: m, l1Fee: h } = {},
                      baseFeePerGas: y
                    } = n,
                    g = "string" == typeof f ? f : a,
                    b = m && y && (0, c.subtractHexes)(m, y),
                    v = u || m,
                    T = (g && v && (0, s.getHexGasTotal)({ gasLimit: g, gasPrice: v })) || "0x0";
                  let E = (0, c.sumHexes)(T, p);
                  const w = (0, o.getIsMultiLayerFeeNetwork)(e) && h !== undefined;
                  return (
                    w && (E = (0, c.sumHexes)(E, h)),
                    {
                      nativeCurrency: (0, i.getNativeCurrency)(e),
                      showFiat: (0, o.getShouldShowFiat)(e),
                      totalInHex: E,
                      gas: a,
                      gasPrice: u,
                      maxFeePerGas: d,
                      gasUsed: f,
                      isTokenApprove: r,
                      hexGasTotal: T,
                      priorityFee: b,
                      baseFee: y,
                      isEIP1559Transaction: (0, l.isEIP1559Transaction)(n),
                      isMultiLayerFeeNetwork: w,
                      l1HexGasTotal: h
                    }
                  );
                })(u.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-breakdown/transaction-breakdown.container.js" }
    ],
    [
      4359,
      {
        "../../../../../../../shared/constants/copy": 3956,
        "../../../../../../helpers/utils/util": 4812,
        "../../../../../../hooks/useI18nContext": 4837,
        "../../../../../../selectors": 5197,
        "../../../../../ui/identicon": 4664,
        "../../../../modals/nickname-popovers": 4192,
        "copy-to-clipboard": 2428,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = f(e("prop-types")),
                  i = f(e("copy-to-clipboard")),
                  s = e("../../../../../../helpers/utils/util"),
                  l = f(e("../../../../../ui/identicon")),
                  c = e("../../../../../../hooks/useI18nContext"),
                  u = e("../../../../../../selectors"),
                  d = f(e("../../../../modals/nickname-popovers")),
                  p = e("../../../../../../../shared/constants/copy");
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const h = ({ checksummedRecipientAddress: e, onRecipientClick: t, addressOnly: n, recipientEns: o, recipientName: f }) => {
                  const m = (0, c.useI18nContext)(),
                    [h, y] = (0, r.useState)(!1),
                    g = (0, a.useSelector)(u.getMemoizedAddressBook).find((t) => t.address.toLowerCase() === e.toLowerCase()),
                    b = null == g ? void 0 : g.name,
                    v = (0, a.useSelector)((t) => (0, u.getMemoizedMetadataContractName)(t, e)),
                    T = n ? f || b || v || o || (0, s.shortenAddress)(e) : f || b || v || o || m("newContract");
                  return r.default.createElement(
                    "div",
                    {
                      className: "tx-insight tx-insight-component tx-insight-component-address",
                      onClick: () => {
                        (0, i.default)(e, p.COPY_OPTIONS), t && t();
                      }
                    },
                    r.default.createElement(
                      "div",
                      { className: "tx-insight-component-address__sender-icon" },
                      r.default.createElement(l.default, { address: e, diameter: 18 })
                    ),
                    r.default.createElement("div", { className: "tx-insight-component-address__name", onClick: () => y(!0) }, T),
                    h ? r.default.createElement(d.default, { onClose: () => y(!1), address: e }) : null
                  );
                };
                h.propTypes = {
                  checksummedRecipientAddress: o.default.string,
                  recipientName: o.default.string,
                  recipientEns: o.default.string,
                  addressOnly: o.default.bool,
                  onRecipientClick: o.default.func
                };
                n.default = h;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/decoding/address/address.component.js" }
    ],
    [
      4360,
      { "./address.component": 4359 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./address.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/decoding/address/index.js" }
    ],
    [
      4361,
      {
        "../../../../../../contexts/i18n": 4748,
        "../../../../../../helpers/constants/design-system": 4771,
        "../../../../../../hooks/useCopyToClipboard": 4830,
        "../../../../../component-library": 4453,
        "../../../../../ui/tooltip/tooltip": 4737,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = u(e("prop-types")),
                  o = u(e("../../../../../ui/tooltip/tooltip")),
                  i = e("../../../../../../contexts/i18n"),
                  s = e("../../../../../../hooks/useCopyToClipboard"),
                  l = e("../../../../../component-library"),
                  c = e("../../../../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const p = ({ data: e }) => {
                  const t = (0, r.useContext)(i.I18nContext),
                    [n, a] = (0, s.useCopyToClipboard)();
                  return r.default.createElement(
                    "div",
                    { className: "copy-raw-data" },
                    r.default.createElement(
                      o.default,
                      { position: "right", title: n ? t("copiedExclamation") : "" },
                      r.default.createElement(
                        "button",
                        {
                          onClick: () => {
                            a(e);
                          },
                          className: "copy-raw-data__button"
                        },
                        r.default.createElement(
                          "div",
                          { className: "copy-raw-data__icon" },
                          r.default.createElement(l.Icon, {
                            name: n ? l.IconName.CopySuccess : l.IconName.Copy,
                            color: c.IconColor.iconDefault
                          })
                        ),
                        r.default.createElement("div", { className: "copy-raw-data__label" }, t("copyRawTransactionData"))
                      )
                    )
                  );
                };
                p.propTypes = { data: a.default.string.isRequired };
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/ui/copy-raw-data/copy-raw-data.component.js" }
    ],
    [
      4362,
      { "./copy-raw-data.component": 4361 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./copy-raw-data.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-decoding/components/ui/copy-raw-data/index.js" }
    ],
    [
      4363,
      { "./transaction-detail-item.component": 4364 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-detail-item.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-detail-item/index.js" }
    ],
    [
      4364,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = c);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../component-library");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c({
                  "data-testid": e,
                  detailTitle: t = "",
                  detailText: n,
                  detailTitleColor: a = i.Color.textDefault,
                  detailTotal: l = "",
                  subTitle: c = "",
                  subText: u = "",
                  boldHeadings: d = !0,
                  flexWidthValues: p = !1
                }) {
                  return r.default.createElement(
                    "div",
                    { className: "transaction-detail-item", "data-testid": e },
                    r.default.createElement(
                      "div",
                      { className: "transaction-detail-item__row" },
                      r.default.createElement(
                        s.Text,
                        {
                          as: "h6",
                          color: a,
                          fontWeight: d ? i.FontWeight.Bold : i.FontWeight.Normal,
                          display: i.Display.Flex,
                          flexWrap: i.FlexWrap.NoWrap,
                          alignItems: i.AlignItems.center
                        },
                        t
                      ),
                      r.default.createElement(
                        "div",
                        {
                          className: (0, o.default)("transaction-detail-item__detail-values", {
                            "transaction-detail-item__detail-values--flex-width": p
                          })
                        },
                        n && r.default.createElement(s.Text, { as: "h6", color: i.Color.textAlternative }, n),
                        r.default.createElement(
                          s.Text,
                          {
                            as: "h6",
                            color: i.Color.textDefault,
                            fontWeight: d ? i.FontWeight.Bold : i.FontWeight.Normal,
                            marginLeft: 1,
                            textAlign: i.TextAlign.Right
                          },
                          l
                        )
                      )
                    ),
                    r.default.createElement(
                      "div",
                      { className: "transaction-detail-item__row" },
                      r.default.isValidElement(c)
                        ? r.default.createElement("div", null, c)
                        : r.default.createElement(s.Text, { as: "h6", variant: i.TextVariant.bodySm, color: i.Color.textAlternative }, c),
                      r.default.createElement(
                        s.Text,
                        {
                          as: "h6",
                          variant: i.TextVariant.bodySm,
                          color: i.Color.textAlternative,
                          textAlign: i.TextAlign.End,
                          className: "transaction-detail-item__row-subText"
                        },
                        u
                      )
                    )
                  );
                }
                c.propTypes = {
                  "data-testid": a.default.string,
                  detailTitle: a.default.oneOfType([a.default.string, a.default.node]),
                  detailTitleColor: a.default.string,
                  detailText: a.default.oneOfType([a.default.string, a.default.node]),
                  detailTotal: a.default.oneOfType([a.default.string, a.default.node]),
                  subTitle: a.default.oneOfType([a.default.string, a.default.node]),
                  subText: a.default.oneOfType([a.default.string, a.default.node]),
                  boldHeadings: a.default.bool,
                  flexWidthValues: a.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-detail-item/transaction-detail-item.component.js" }
    ],
    [
      4365,
      { "./transaction-detail.component": 4366 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-detail.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-detail/index.js" }
    ],
    [
      4366,
      {
        "../../../contexts/gasFee": 4747,
        "../../../hooks/useI18nContext": 4837,
        "../../ui/box": 4607,
        "../edit-gas-fee-button": 4115,
        "../transaction-detail-item/transaction-detail-item.component": 4364,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = d);
                var r = u(e("react")),
                  a = u(e("prop-types")),
                  o = e("../../../contexts/gasFee"),
                  i = e("../../../hooks/useI18nContext"),
                  s = u(e("../../ui/box")),
                  l = u(e("../edit-gas-fee-button")),
                  c = u(e("../transaction-detail-item/transaction-detail-item.component"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d({ rows: e = [], onEdit: t, userAcknowledgedGasMissing: n = !1, disableEditGasFeeButton: a = !1 }) {
                  const c = (0, i.useI18nContext)(),
                    { supportsEIP1559: u } = (0, o.useGasFeeContext)();
                  return r.default.createElement(
                    "div",
                    { className: "transaction-detail" },
                    u &&
                      !a &&
                      r.default.createElement(
                        s.default,
                        { display: "flex", justifyContent: "flex-end", paddingTop: 5 },
                        r.default.createElement(l.default, { userAcknowledgedGasMissing: n })
                      ),
                    !u &&
                      t &&
                      r.default.createElement(
                        "div",
                        { className: "transaction-detail-edit" },
                        r.default.createElement("button", { onClick: t }, c("edit"))
                      ),
                    r.default.createElement("div", { className: "transaction-detail-rows" }, e)
                  );
                }
                d.propTypes = {
                  rows: a.default.arrayOf(c.default).isRequired,
                  onEdit: a.default.func,
                  userAcknowledgedGasMissing: a.default.bool,
                  disableEditGasFeeButton: a.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-detail/transaction-detail.component.js" }
    ],
    [
      4367,
      { "./transaction-icon": 4368 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-icon")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-icon/index.js" }
    ],
    [
      4368,
      {
        "../../../../shared/constants/transaction": 3974,
        "../../../helpers/constants/design-system": 4771,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "@metamask/transaction-controller": 1835,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = h);
                var r = d(e("react")),
                  a = e("react-redux"),
                  o = d(e("prop-types")),
                  i = e("@metamask/transaction-controller"),
                  s = e("../../../../shared/constants/transaction"),
                  l = e("../../../store/actions"),
                  c = e("../../component-library"),
                  u = e("../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = {
                    [s.TransactionGroupCategory.approval]: c.IconName.Check,
                    [s.TransactionGroupCategory.interaction]: c.IconName.ProgrammingArrows,
                    [s.TransactionGroupCategory.receive]: c.IconName.Received,
                    [s.TransactionGroupCategory.send]: c.IconName.Arrow2UpRight,
                    [s.TransactionGroupCategory.signatureRequest]: c.IconName.SecurityTick,
                    [s.TransactionGroupCategory.swap]: c.IconName.SwapHorizontal
                  },
                  f = {
                    [s.TransactionGroupStatus.pending]: u.IconColor.primaryDefault,
                    [s.TransactionGroupStatus.cancelled]: u.IconColor.errorDefault,
                    [i.TransactionStatus.approved]: u.IconColor.primaryDefault,
                    [i.TransactionStatus.dropped]: u.IconColor.errorDefault,
                    [i.TransactionStatus.failed]: u.IconColor.errorDefault,
                    [i.TransactionStatus.rejected]: u.IconColor.errorDefault,
                    [i.TransactionStatus.submitted]: u.IconColor.primaryDefault,
                    [i.TransactionStatus.unapproved]: u.IconColor.primaryDefault
                  },
                  m = {
                    [s.TransactionGroupStatus.pending]: u.BackgroundColor.primaryMuted,
                    [s.TransactionGroupStatus.cancelled]: u.BackgroundColor.errorMuted,
                    [i.TransactionStatus.approved]: u.BackgroundColor.primaryMuted,
                    [i.TransactionStatus.dropped]: u.BackgroundColor.errorMuted,
                    [i.TransactionStatus.failed]: u.BackgroundColor.errorMuted,
                    [i.TransactionStatus.rejected]: u.BackgroundColor.errorMuted,
                    [i.TransactionStatus.submitted]: u.BackgroundColor.primaryMuted,
                    [i.TransactionStatus.unapproved]: u.BackgroundColor.primaryMuted
                  };
                function h({ status: e, category: t }) {
                  const n = (0, a.useDispatch)(),
                    o = f[e] || u.IconColor.primaryDefault,
                    i = m[e] || u.BackgroundColor.primaryMuted,
                    s = p[t];
                  return s
                    ? r.default.createElement(c.AvatarIcon, { backgroundColor: i, iconName: s, size: c.AvatarIconSize.Md, color: o })
                    : (n((0, l.captureSingleException)(`The category prop passed to TransactionIcon is not supported. The prop is: ${t}`)),
                      r.default.createElement(c.AvatarIcon, {
                        backgroundColor: u.BackgroundColor.backgroundAlternative,
                        size: c.AvatarIconSize.Md
                      }));
                }
                h.propTypes = {
                  status: o.default.oneOf([
                    s.TransactionGroupStatus.cancelled,
                    s.TransactionGroupStatus.pending,
                    i.TransactionStatus.approved,
                    i.TransactionStatus.confirmed,
                    i.TransactionStatus.dropped,
                    i.TransactionStatus.failed,
                    i.TransactionStatus.rejected,
                    i.TransactionStatus.submitted,
                    i.TransactionStatus.unapproved
                  ]).isRequired,
                  category: o.default.oneOf([
                    s.TransactionGroupCategory.approval,
                    s.TransactionGroupCategory.interaction,
                    s.TransactionGroupCategory.receive,
                    s.TransactionGroupCategory.send,
                    s.TransactionGroupCategory.signatureRequest,
                    s.TransactionGroupCategory.swap
                  ]).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-icon/transaction-icon.js" }
    ],
    [
      4369,
      { "./transaction-list-item-details.container": 4371 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-list-item-details.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item-details/index.js" }
    ],
    [
      4370,
      {
        "../../../../shared/constants/copy": 3956,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/time": 3972,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../ui/button": 4611,
        "../../ui/disclosure": 4634,
        "../../ui/popover": 4699,
        "../../ui/sender-to-recipient": 4706,
        "../../ui/sender-to-recipient/sender-to-recipient.constants": 4708,
        "../../ui/tooltip": 4736,
        "../cancel-button": 4044,
        "../transaction-activity-log": 4345,
        "../transaction-breakdown": 4354,
        "@metamask/etherscan-link": 1255,
        "@metamask/transaction-controller": 1835,
        "copy-to-clipboard": 2428,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = O(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = w(e("prop-types")),
                  o = w(e("copy-to-clipboard")),
                  i = e("@metamask/etherscan-link"),
                  s = e("@metamask/transaction-controller"),
                  l = w(e("../../ui/sender-to-recipient")),
                  c = e("../../ui/sender-to-recipient/sender-to-recipient.constants"),
                  u = w(e("../../ui/disclosure")),
                  d = w(e("../transaction-activity-log")),
                  p = w(e("../transaction-breakdown")),
                  f = w(e("../../ui/button")),
                  m = w(e("../../ui/tooltip")),
                  h = w(e("../cancel-button")),
                  y = w(e("../../ui/popover")),
                  g = e("../../../../shared/constants/time"),
                  b = e("../../../../shared/constants/metametrics"),
                  v = e("../../../helpers/utils/util"),
                  T = e("../../../helpers/constants/routes"),
                  E = e("../../../../shared/constants/copy");
                function w(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function O(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (O = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function x(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = n),
                    e
                  );
                }
                class S extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      x(this, "state", { justCopied: !1 }),
                      x(this, "handleBlockExplorerClick", () => {
                        const {
                            transactionGroup: { primaryTransaction: e },
                            rpcPrefs: t,
                            isCustomNetwork: n,
                            history: r,
                            onClose: a
                          } = this.props,
                          o = (0, i.getBlockExplorerLink)(e, t);
                        !t.blockExplorerUrl && n
                          ? (a(), r.push(`${T.NETWORKS_ROUTE}#blockExplorerUrl`))
                          : (this.context.trackEvent({
                              category: b.MetaMetricsEventCategory.Transactions,
                              event: "Clicked Block Explorer Link",
                              properties: {
                                link_type: "Transaction Block Explorer",
                                action: "Transaction Details",
                                block_explorer_domain: (0, v.getURLHostName)(o)
                              }
                            }),
                            global.platform.openTab({ url: o }));
                      }),
                      x(this, "handleCancel", (e) => {
                        const { onCancel: t, onClose: n } = this.props;
                        t(e), n();
                      }),
                      x(this, "handleRetry", (e) => {
                        const { onClose: t, onRetry: n } = this.props;
                        n(e), t();
                      }),
                      x(this, "handleCopyTxId", () => {
                        const { transactionGroup: e } = this.props,
                          { primaryTransaction: t } = e,
                          { hash: n } = t;
                        this.context.trackEvent({
                          category: b.MetaMetricsEventCategory.Navigation,
                          event: "Copied Transaction ID",
                          properties: { action: "Activity Log", legacy_event: !0 }
                        }),
                          this.setState({ justCopied: !0 }, () => {
                            (0, o.default)(n, E.COPY_OPTIONS), setTimeout(() => this.setState({ justCopied: !1 }), g.SECOND);
                          });
                      });
                  }
                  componentDidMount() {
                    const { recipientAddress: e, tryReverseResolveAddress: t } = this.props;
                    e && t(e);
                  }
                  render() {
                    const { t: e } = this.context,
                      { justCopied: t } = this.state,
                      {
                        transactionGroup: n,
                        primaryCurrency: a,
                        showSpeedUp: o,
                        showRetry: i,
                        recipientEns: g,
                        recipientAddress: v,
                        recipientName: T,
                        recipientMetadataName: E,
                        senderAddress: w,
                        isEarliestNonce: O,
                        senderNickname: x,
                        title: S,
                        onClose: _,
                        recipientNickname: k,
                        showCancel: C,
                        transactionStatus: A,
                        blockExplorerLinkText: N
                      } = this.props,
                      {
                        primaryTransaction: P,
                        initialTransaction: { type: I }
                      } = n,
                      { hash: M } = P;
                    return r.default.createElement(
                      y.default,
                      { title: S, onClose: _ },
                      r.default.createElement(
                        "div",
                        { className: "transaction-list-item-details" },
                        r.default.createElement(
                          "div",
                          { className: "transaction-list-item-details__operations" },
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__header-buttons" },
                            o &&
                              r.default.createElement(
                                f.default,
                                {
                                  type: "primary",
                                  onClick: this.handleRetry,
                                  className: "transaction-list-item-details__header-button-rounded-button",
                                  "data-testid": "speedup-button"
                                },
                                e("speedUp")
                              ),
                            C &&
                              r.default.createElement(h.default, {
                                transaction: P,
                                cancelTransaction: this.handleCancel,
                                detailsModal: !0
                              }),
                            i &&
                              r.default.createElement(
                                m.default,
                                { title: e("retryTransaction") },
                                r.default.createElement(
                                  f.default,
                                  {
                                    type: "raised",
                                    onClick: this.handleRetry,
                                    className: "transaction-list-item-details__header-button",
                                    "data-testid": "rety-button"
                                  },
                                  r.default.createElement("i", { className: "fa fa-sync" })
                                )
                              )
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "transaction-list-item-details__header" },
                          r.default.createElement(
                            "div",
                            {
                              className: "transaction-list-item-details__tx-status",
                              "data-testid": "transaction-list-item-details-tx-status"
                            },
                            r.default.createElement("div", null, e("status")),
                            r.default.createElement("div", null, r.default.createElement(A, null))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__tx-hash" },
                            r.default.createElement(
                              "div",
                              null,
                              r.default.createElement(
                                f.default,
                                { type: "link", onClick: this.handleBlockExplorerClick, disabled: !M },
                                "addBlockExplorer" === N.firstPart ? e("addBlockExplorer") : e("viewOnBlockExplorer")
                              )
                            ),
                            r.default.createElement(
                              "div",
                              null,
                              r.default.createElement(
                                m.default,
                                {
                                  wrapperClassName: "transaction-list-item-details__header-button",
                                  containerClassName: "transaction-list-item-details__header-button-tooltip-container",
                                  title: t ? e("copiedExclamation") : null
                                },
                                r.default.createElement(
                                  f.default,
                                  { type: "link", onClick: this.handleCopyTxId, disabled: !M },
                                  e("copyTransactionId")
                                )
                              )
                            )
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "transaction-list-item-details__body" },
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__sender-to-recipient-header" },
                            r.default.createElement("div", null, e("from")),
                            r.default.createElement("div", null, e("to"))
                          ),
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__sender-to-recipient-container" },
                            r.default.createElement(l.default, {
                              warnUserOnAccountMismatch: !1,
                              variant: c.DEFAULT_VARIANT,
                              addressOnly: !0,
                              recipientEns: g,
                              recipientAddress: v,
                              recipientNickname: k,
                              recipientName: T,
                              recipientMetadataName: E,
                              senderName: x,
                              senderAddress: w,
                              onRecipientClick: () => {
                                this.context.trackEvent({
                                  category: b.MetaMetricsEventCategory.Navigation,
                                  event: 'Copied "To" Address',
                                  properties: { action: "Activity Log", legacy_event: !0 }
                                });
                              },
                              onSenderClick: () => {
                                this.context.trackEvent({
                                  category: b.MetaMetricsEventCategory.Navigation,
                                  event: 'Copied "From" Address',
                                  properties: { action: "Activity Log", legacy_event: !0 }
                                });
                              }
                            })
                          ),
                          r.default.createElement(
                            "div",
                            { className: "transaction-list-item-details__cards-container" },
                            r.default.createElement(p.default, {
                              nonce: n.initialTransaction.txParams.nonce,
                              isTokenApprove:
                                I === s.TransactionType.tokenMethodApprove || I === s.TransactionType.tokenMethodSetApprovalForAll,
                              transaction: P,
                              primaryCurrency: a,
                              className: "transaction-list-item-details__transaction-breakdown"
                            }),
                            n.initialTransaction.type !== s.TransactionType.incoming &&
                              r.default.createElement(
                                u.default,
                                { title: e("activityLog"), size: "small" },
                                r.default.createElement(d.default, {
                                  transactionGroup: n,
                                  className: "transaction-list-item-details__transaction-activity-log",
                                  onCancel: this.handleCancel,
                                  onRetry: this.handleRetry,
                                  isEarliestNonce: O
                                })
                              )
                          )
                        )
                      )
                    );
                  }
                }
                (n.default = S),
                  x(S, "contextTypes", { t: a.default.func, trackEvent: a.default.func }),
                  x(S, "defaultProps", { recipientEns: null }),
                  x(S, "propTypes", {
                    onCancel: a.default.func,
                    onRetry: a.default.func,
                    showCancel: a.default.bool,
                    showSpeedUp: a.default.bool,
                    showRetry: a.default.bool,
                    isEarliestNonce: a.default.bool,
                    primaryCurrency: a.default.string,
                    transactionGroup: a.default.object,
                    title: a.default.string.isRequired,
                    onClose: a.default.func.isRequired,
                    recipientEns: a.default.string,
                    recipientAddress: a.default.string,
                    recipientName: a.default.string,
                    recipientMetadataName: a.default.string,
                    rpcPrefs: a.default.object,
                    senderAddress: a.default.string.isRequired,
                    tryReverseResolveAddress: a.default.func.isRequired,
                    senderNickname: a.default.string.isRequired,
                    recipientNickname: a.default.string,
                    transactionStatus: a.default.func,
                    isCustomNetwork: a.default.bool,
                    history: a.default.object,
                    blockExplorerLinkText: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item-details/transaction-list-item-details.component.js" }
    ],
    [
      4371,
      {
        "../../../../shared/modules/hexstring-utils": 3993,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./transaction-list-item-details.component": 4370,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("redux"),
                  i = e("react-router-dom"),
                  s = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c = e("../../../../shared/modules/hexstring-utils"),
                  u = (r = e("./transaction-list-item-details.component")) && r.__esModule ? r : { default: r };
                n.default = (0, o.compose)(
                  i.withRouter,
                  (0, a.connect)(
                    (e, t) => {
                      const { recipientAddress: n, senderAddress: r } = t;
                      let a;
                      if (n) {
                        const t = (0, c.toChecksumHexAddress)(n);
                        a = (0, l.getEnsResolutionByAddress)(e, t);
                      }
                      const o = (0, l.getAddressBook)(e),
                        i = (0, l.getMetaMaskIdentities)(e),
                        s = (0, l.getAccountName)(i, n),
                        u = (0, l.getMetadataContractName)(e, n),
                        d = (e) => {
                          const t = o.find((t) => e.toLowerCase() === t.address.toLowerCase());
                          return (t && t.name) || "";
                        },
                        p = (0, l.getRpcPrefsForCurrentProvider)(e),
                        f = (0, l.getIsCustomNetwork)(e);
                      return {
                        rpcPrefs: p,
                        recipientEns: a,
                        senderNickname: d(r),
                        recipientNickname: n ? d(n) : null,
                        isCustomNetwork: f,
                        blockExplorerLinkText: (0, l.getBlockExplorerLinkText)(e),
                        recipientName: s,
                        recipientMetadataName: u
                      };
                    },
                    (e) => ({ tryReverseResolveAddress: (t) => e((0, s.tryReverseResolveAddress)(t)) })
                  )
                )(u.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item-details/transaction-list-item-details.container.js" }
    ],
    [
      4372,
      { "./transaction-list-item.component": 4374 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-list-item.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item/index.js" }
    ],
    [
      4373,
      {
        "../../../../shared/constants/transaction": 3974,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../hooks/useTransactionDisplayData": 4861,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../multichain": 4555,
        "../cancel-button": 4044,
        "../transaction-icon": 4367,
        "../transaction-list-item-details": 4369,
        "../transaction-status-label/transaction-status-label": 4377,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = E);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = T(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = v(e("prop-types")),
                  o = e("react-redux"),
                  i = v(e("../transaction-status-label/transaction-status-label")),
                  s = v(e("../transaction-icon")),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../hooks/useTransactionDisplayData"),
                  u = e("../../../helpers/utils/util"),
                  d = e("../../../../shared/constants/transaction"),
                  p = v(e("../cancel-button")),
                  f = e("../../../ducks/swaps/swaps"),
                  m = v(e("../transaction-list-item-details")),
                  h = e("../../multichain"),
                  y = e("../../component-library"),
                  g = e("../../../helpers/constants/design-system"),
                  b = e("../../../selectors");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (T = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function E({ smartTransaction: e, transactionGroup: t, isEarliestNonce: n = !1 }) {
                  var a;
                  const v = (0, o.useDispatch)(),
                    T = (0, l.useI18nContext)(),
                    [E, w] = (0, r.useState)(!1),
                    [O, x] = (0, r.useState)(!1),
                    { primaryCurrency: S, recipientAddress: _, isPending: k, senderAddress: C } = (0, c.useTransactionDisplayData)(t),
                    A = (0, o.useSelector)(b.getCurrentNetwork),
                    { sourceTokenSymbol: N, destinationTokenSymbol: P, time: I, status: M } = e,
                    j = d.TransactionGroupCategory.swap,
                    B = T("swapTokenToToken", [N, P]),
                    R = (0, u.formatDateWithYearContext)(I, "MMM d, y", "MMM d");
                  let D;
                  M === d.SmartTransactionStatus.pending
                    ? (D = d.TransactionGroupStatus.pending)
                    : null != M && M.startsWith(d.SmartTransactionStatus.cancelled) && (D = d.TransactionGroupStatus.cancelled);
                  const L = e.cancellable && !E,
                    F = (0, r.useCallback)(() => {
                      x((e) => !e);
                    }, []);
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      h.ActivityListItem,
                      {
                        className: "transaction-list-item transaction-list-item--unconfirmed",
                        title: B,
                        onClick: F,
                        icon: r.default.createElement(
                          y.BadgeWrapper,
                          {
                            anchorElementShape: y.BadgeWrapperAnchorElementShape.circular,
                            positionObj: { top: -4, right: -4 },
                            display: g.Display.Block,
                            badge: r.default.createElement(y.AvatarNetwork, {
                              className: "activity-tx__network-badge",
                              "data-testid": "activity-tx-network-badge",
                              size: y.AvatarNetworkSize.Xs,
                              name: null == A ? void 0 : A.nickname,
                              src: null == A || null === (a = A.rpcPrefs) || void 0 === a ? void 0 : a.imageUrl,
                              borderWidth: 1,
                              borderColor: g.BackgroundColor.backgroundDefault
                            })
                          },
                          r.default.createElement(s.default, { category: j, status: D })
                        ),
                        subtitle: r.default.createElement(i.default, { isPending: !0, isEarliestNonce: n, date: R, status: D })
                      },
                      D === d.TransactionGroupStatus.pending &&
                        L &&
                        r.default.createElement(
                          y.Box,
                          { paddingTop: 4, className: "transaction-list-item__pending-actions" },
                          r.default.createElement(p.default, {
                            transaction: e.uuid,
                            cancelTransaction: (t) => {
                              null == t || t.preventDefault(), v((0, f.cancelSwapsSmartTransaction)(e.uuid)), w(!0);
                            }
                          })
                        )
                    ),
                    O &&
                      r.default.createElement(m.default, {
                        title: B,
                        onClose: F,
                        senderAddress: C,
                        recipientAddress: _,
                        primaryCurrency: S,
                        isEarliestNonce: n,
                        transactionGroup: t,
                        transactionStatus: () =>
                          r.default.createElement(i.default, { isPending: k, isEarliestNonce: n, date: R, status: D, statusOnly: !0 })
                      })
                  );
                }
                E.propTypes = {
                  smartTransaction: a.default.object.isRequired,
                  isEarliestNonce: a.default.bool,
                  transactionGroup: a.default.object
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item/smart-transaction-list-item.component.js" }
    ],
    [
      4374,
      {
        "../../../../shared/constants/gas": 3957,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/transaction": 3974,
        "../../../contexts/gasFee": 4747,
        "../../../contexts/metametrics": 4749,
        "../../../contexts/transaction-modal": 4750,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/transactions.util": 4810,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../hooks/useShouldShowSpeedUp": 4852,
        "../../../hooks/useTransactionDisplayData": 4861,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../multichain": 4555,
        "../../ui/button": 4611,
        "../advanced-gas-fee-popover": 4028,
        "../cancel-button": 4044,
        "../cancel-speedup-popover": 4046,
        "../edit-gas-fee-popover": 4122,
        "../edit-gas-popover": 4129,
        "../transaction-icon": 4367,
        "../transaction-list-item-details": 4369,
        "../transaction-status-label/transaction-status-label": 4377,
        "@metamask/transaction-controller": 1835,
        classnames: 2414,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = B(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = j(e("prop-types")),
                  o = j(e("classnames")),
                  i = e("react-router-dom"),
                  s = e("react-redux"),
                  l = e("@metamask/transaction-controller"),
                  c = e("../../../hooks/useTransactionDisplayData"),
                  u = e("../../../hooks/useI18nContext"),
                  d = j(e("../transaction-list-item-details")),
                  p = e("../../../helpers/constants/routes"),
                  f = e("../../../hooks/useShouldShowSpeedUp"),
                  m = j(e("../transaction-status-label/transaction-status-label")),
                  h = j(e("../transaction-icon")),
                  y = e("../../../helpers/constants/design-system"),
                  g = e("../../component-library"),
                  b = e("../../../../shared/constants/metametrics"),
                  v = e("../../../../shared/constants/transaction"),
                  T = e("../../../../shared/constants/gas"),
                  E = e("../../../contexts/gasFee"),
                  w = e("../../../contexts/transaction-modal"),
                  O = e("../../../selectors"),
                  x = e("../../../helpers/utils/transactions.util"),
                  S = e("../../../helpers/utils/util"),
                  _ = j(e("../../ui/button")),
                  k = j(e("../advanced-gas-fee-popover")),
                  C = j(e("../cancel-button")),
                  A = j(e("../cancel-speedup-popover")),
                  N = j(e("../edit-gas-fee-popover")),
                  P = j(e("../edit-gas-popover")),
                  I = e("../../../contexts/metametrics"),
                  M = e("../../multichain");
                function j(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function B(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (B = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function R() {
                  return (
                    (R = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    R.apply(this, arguments)
                  );
                }
                function D({ transactionGroup: e, setEditGasMode: t, isEarliestNonce: n = !1 }) {
                  var a;
                  const x = (0, u.useI18nContext)(),
                    k = (0, i.useHistory)(),
                    { hasCancelled: A } = e,
                    [N, j] = (0, r.useState)(!1),
                    [B, R] = (0, r.useState)(!1),
                    [D, L] = (0, r.useState)(!1),
                    { supportsEIP1559: F } = (0, E.useGasFeeContext)(),
                    { openModal: $ } = (0, w.useTransactionModalContext)(),
                    z = (0, s.useSelector)(O.getTestNetworkBackgroundColor),
                    {
                      initialTransaction: { id: V },
                      primaryTransaction: { error: U, status: W }
                    } = e,
                    H = (0, r.useContext)(I.MetaMetricsContext),
                    G = (0, r.useCallback)(
                      async (e) => {
                        e.stopPropagation(),
                          H({
                            event: 'Clicked "Speed Up"',
                            category: b.MetaMetricsEventCategory.Navigation,
                            properties: { action: "Activity Log", legacy_event: !0 }
                          }),
                          F ? (t(T.EditGasModes.speedUp), $("cancelSpeedUpTransaction")) : L(!0);
                      },
                      [$, t, H, F]
                    ),
                    Y = (0, r.useCallback)(
                      (e) => {
                        e.stopPropagation(),
                          H({
                            event: 'Clicked "Cancel"',
                            category: b.MetaMetricsEventCategory.Navigation,
                            properties: { action: "Activity Log", legacy_event: !0 }
                          }),
                          F ? (t(T.EditGasModes.cancel), $("cancelSpeedUpTransaction")) : R(!0);
                      },
                      [H, $, t, F]
                    ),
                    q = (0, f.useShouldShowSpeedUp)(e, n),
                    {
                      title: K,
                      category: Q,
                      primaryCurrency: X,
                      recipientAddress: J,
                      secondaryCurrency: Z,
                      displayedStatusKey: ee,
                      isPending: te,
                      senderAddress: ne
                    } = (0, c.useTransactionDisplayData)(e),
                    re = (0, S.formatDateWithYearContext)(e.primaryTransaction.time, "MMM d, y", "MMM d"),
                    ae = Q === v.TransactionGroupCategory.signatureRequest,
                    oe = Q === v.TransactionGroupCategory.approval,
                    ie = W === l.TransactionStatus.unapproved,
                    se = Q === v.TransactionGroupCategory.swap,
                    le = (0, o.default)("transaction-list-item", {
                      "transaction-list-item--unconfirmed":
                        te || [l.TransactionStatus.failed, l.TransactionStatus.dropped, l.TransactionStatus.rejected].includes(ee)
                    }),
                    ce = (0, r.useCallback)(() => {
                      ie
                        ? k.push(`${p.CONFIRM_TRANSACTION_ROUTE}/${V}`)
                        : j(
                            (e) => (
                              H({
                                event: e ? b.MetaMetricsEventName.ActivityDetailsClosed : b.MetaMetricsEventName.ActivityDetailsOpened,
                                category: b.MetaMetricsEventCategory.Navigation,
                                properties: { activity_type: Q }
                              }),
                              !e
                            )
                          );
                    }, [ie, k, V, H, Q]),
                    ue = (0, r.useMemo)(
                      () =>
                        q && te && !ie
                          ? r.default.createElement(
                              _.default,
                              { type: "primary", onClick: A ? Y : G, style: A ? { width: "auto" } : null },
                              x(A ? "speedUpCancellation" : "speedUp")
                            )
                          : null,
                      [q, ie, x, te, A, G, Y]
                    ),
                    de = (0, s.useSelector)(O.getCurrentNetwork);
                  let pe = !A && te && !ie;
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      M.ActivityListItem,
                      {
                        "data-testid": "activity-list-item",
                        onClick: ce,
                        className: le,
                        title: K,
                        icon: r.default.createElement(
                          g.BadgeWrapper,
                          {
                            anchorElementShape: g.BadgeWrapperAnchorElementShape.circular,
                            positionObj: { top: -4, right: -4 },
                            display: y.Display.Block,
                            badge: r.default.createElement(g.AvatarNetwork, {
                              className: "activity-tx__network-badge",
                              "data-testid": "activity-tx-network-badge",
                              size: g.AvatarNetworkSize.Xs,
                              name: null == de ? void 0 : de.nickname,
                              src: null == de || null === (a = de.rpcPrefs) || void 0 === a ? void 0 : a.imageUrl,
                              borderWidth: 1,
                              borderColor: y.BackgroundColor.backgroundDefault,
                              backgroundColor: z
                            })
                          },
                          r.default.createElement(h.default, { category: Q, status: ee })
                        ),
                        subtitle: r.default.createElement(m.default, {
                          statusOnly: !0,
                          isPending: te,
                          isEarliestNonce: n,
                          error: U,
                          date: re,
                          status: ee
                        }),
                        rightContent:
                          !ae &&
                          !oe &&
                          r.default.createElement(
                            r.default.Fragment,
                            null,
                            r.default.createElement(
                              g.Text,
                              {
                                variant: y.TextVariant.bodyLgMedium,
                                fontWeight: y.FontWeight.Medium,
                                color: y.Color.textDefault,
                                title: X,
                                textAlign: y.TextAlign.Right,
                                "data-testid": "transaction-list-item-primary-currency",
                                className: "activity-list-item__primary-currency",
                                ellipsis: !0
                              },
                              X
                            ),
                            r.default.createElement(
                              g.Text,
                              {
                                variant: y.TextVariant.bodyMd,
                                color: y.Color.textAlternative,
                                textAlign: y.TextAlign.Right,
                                "data-testid": "transaction-list-item-secondary-currency"
                              },
                              Z
                            )
                          )
                      },
                      r.default.createElement(
                        g.Box,
                        { paddingTop: 4, className: "transaction-list-item__pending-actions" },
                        pe && r.default.createElement(C.default, { transaction: e.primaryTransaction, cancelTransaction: Y }),
                        ue
                      )
                    ),
                    N &&
                      r.default.createElement(d.default, {
                        title: K,
                        onClose: ce,
                        transactionGroup: e,
                        primaryCurrency: X,
                        senderAddress: ne,
                        recipientAddress: J,
                        onRetry: G,
                        showRetry: W === l.TransactionStatus.failed && !se,
                        showSpeedUp: q,
                        isEarliestNonce: n,
                        onCancel: Y,
                        showCancel: te && !A,
                        transactionStatus: () =>
                          r.default.createElement(m.default, {
                            isPending: te,
                            isEarliestNonce: n,
                            error: U,
                            date: re,
                            status: ee,
                            statusOnly: !0
                          })
                      }),
                    !F &&
                      D &&
                      r.default.createElement(P.default, {
                        onClose: () => L(!1),
                        mode: T.EditGasModes.speedUp,
                        transaction: e.primaryTransaction
                      }),
                    !F &&
                      B &&
                      r.default.createElement(P.default, {
                        onClose: () => R(!1),
                        mode: T.EditGasModes.cancel,
                        transaction: e.primaryTransaction
                      })
                  );
                }
                D.propTypes = {
                  transactionGroup: a.default.object.isRequired,
                  isEarliestNonce: a.default.bool,
                  setEditGasMode: a.default.func
                };
                const L = (e) => {
                  const { transactionGroup: t } = e,
                    [n, a] = (0, r.useState)(),
                    o = t.primaryTransaction,
                    i =
                      (0, s.useSelector)(O.checkNetworkAndAccountSupports1559) &&
                      !(0, x.isLegacyTransaction)(null == o ? void 0 : o.txParams);
                  return r.default.createElement(
                    E.GasFeeContextProvider,
                    { transaction: t.primaryTransaction, editGasMode: n },
                    r.default.createElement(
                      w.TransactionModalContextProvider,
                      null,
                      r.default.createElement(D, R({}, e, { setEditGasMode: a })),
                      i &&
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(A.default, null),
                          r.default.createElement(N.default, null),
                          r.default.createElement(k.default, null)
                        )
                    )
                  );
                };
                L.propTypes = { transactionGroup: a.default.object.isRequired };
                n.default = L;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list-item/transaction-list-item.component.js" }
    ],
    [
      4375,
      { "./transaction-list.component": 4376 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./transaction-list.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list/index.js" }
    ],
    [
      4376,
      {
        "../../../../shared/constants/swaps": 3970,
        "../../../../shared/modules/string-utils": 4002,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/transactions": 4780,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../selectors/transactions": 5201,
        "../../component-library": 4453,
        "../../ui/button": 4611,
        "../transaction-list-item": 4372,
        "../transaction-list-item/smart-transaction-list-item.component": 4373,
        "@metamask/transaction-controller": 1835,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = S);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = T(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = v(e("prop-types")),
                  o = e("react-redux"),
                  i = e("@metamask/transaction-controller"),
                  s = e("../../../selectors/transactions"),
                  l = e("../../../selectors"),
                  c = e("../../../hooks/useI18nContext"),
                  u = v(e("../transaction-list-item")),
                  d = v(e("../transaction-list-item/smart-transaction-list-item.component")),
                  p = v(e("../../ui/button")),
                  f = e("../../../helpers/constants/transactions"),
                  m = e("../../../../shared/constants/swaps"),
                  h = e("../../../../shared/modules/string-utils"),
                  y = e("../../component-library"),
                  g = e("../../../helpers/constants/design-system"),
                  b = e("../../../helpers/utils/util");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (T = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const E = 10,
                  w = ({ initialTransaction: { type: e, destinationTokenSymbol: t, sourceTokenSymbol: n } }) =>
                    !f.TOKEN_CATEGORY_HASH[e] && (e !== i.TransactionType.swap || "ETH" === t || "ETH" === n),
                  O = (e, t, n, r) =>
                    t
                      ? e.filter(w)
                      : n
                      ? e.filter(
                          (
                            (e, t) =>
                            ({ initialTransaction: { txParams: n } }) =>
                              (0, h.isEqualCaseInsensitive)(null == n ? void 0 : n.to, e) ||
                              ((null == n ? void 0 : n.to) === m.SWAPS_CHAINID_CONTRACT_ADDRESS_MAP[t] && n.data.match(e.slice(2)))
                          )(n, r)
                        )
                      : e,
                  x = (e) => {
                    const t = [];
                    return (
                      e.forEach((e) => {
                        const n = (0, b.formatDateWithYearContext)(e.primaryTransaction.time, "MMM d, y", "MMM d"),
                          r = t.find((e) => e.date === n);
                        r
                          ? r.transactionGroups.push(e)
                          : t.push({ date: n, dateMillis: e.primaryTransaction.time, transactionGroups: [e] }),
                          t.sort((e, t) => t.dateMillis - e.dateMillis);
                      }),
                      t
                    );
                  };
                function S({ hideTokenTransactions: e, tokenAddress: t }) {
                  const [n, a] = (0, r.useState)(E),
                    f = (0, c.useI18nContext)(),
                    m = (0, o.useSelector)(s.nonceSortedPendingTransactionsSelector),
                    h = (0, o.useSelector)(s.nonceSortedCompletedTransactionsSelector),
                    b = (0, o.useSelector)(l.getCurrentChainId),
                    v = (0, o.useSelector)(l.getSelectedAddress),
                    T = (e, t) =>
                      0 === e
                        ? r.default.createElement(
                            y.Text,
                            {
                              paddingTop: 4,
                              paddingInline: 4,
                              variant: g.TextVariant.bodyMd,
                              color: g.TextColor.textDefault,
                              key: t.dateMillis
                            },
                            t.date
                          )
                        : null,
                    w = (0, r.useMemo)(() => x(O(m, e, t, b)), [e, t, m, b]),
                    S = (0, r.useMemo)(() => x(O(h, e, t, b)), [e, t, h, b]),
                    _ = (0, r.useCallback)(() => a((e) => e + E), []);
                  return r.default.createElement(
                    y.Box,
                    { className: "transaction-list", paddingTop: 4 },
                    r.default.createElement(
                      y.Box,
                      { className: "transaction-list__transactions" },
                      w.length > 0 &&
                        r.default.createElement(
                          y.Box,
                          { className: "transaction-list__pending-transactions" },
                          w.map((e) =>
                            e.transactionGroups.map((t, n) =>
                              t.initialTransaction.transactionType === i.TransactionType.smart
                                ? r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    T(n, e),
                                    r.default.createElement(d.default, {
                                      isEarliestNonce: 0 === n,
                                      smartTransaction: t.initialTransaction,
                                      transactionGroup: t,
                                      key: `${t.nonce}:${n}`
                                    })
                                  )
                                : r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    T(n, e),
                                    r.default.createElement(u.default, {
                                      isEarliestNonce: 0 === n,
                                      transactionGroup: t,
                                      key: `${t.nonce}:${n}`
                                    })
                                  )
                            )
                          )
                        ),
                      r.default.createElement(
                        y.Box,
                        { className: "transaction-list__completed-transactions" },
                        S.length > 0
                          ? S.map(
                              (e) => (
                                (e.transactionGroups = e.transactionGroups.map(
                                  (e) => (
                                    (e.transactions = e.transactions.filter(
                                      (e) =>
                                        !((e) => e.type === i.TransactionType.incoming && e.txParams.to.toLowerCase() !== v.toLowerCase())(
                                          e
                                        )
                                    )),
                                    e
                                  )
                                )),
                                e
                              )
                            )
                              .map((e) => ((e.transactionGroups = e.transactionGroups.filter((e) => e.transactions.length > 0)), e))
                              .filter((e) => e.transactionGroups.length > 0)
                              .slice(0, n)
                              .map((e) =>
                                e.transactionGroups.map((t, a) => {
                                  var o;
                                  return r.default.createElement(
                                    r.default.Fragment,
                                    null,
                                    T(a, e),
                                    (null === (o = t.initialTransaction) || void 0 === o ? void 0 : o.transactionType) ===
                                      i.TransactionType.smart
                                      ? r.default.createElement(d.default, {
                                          transactionGroup: t,
                                          smartTransaction: t.initialTransaction,
                                          key: `${t.nonce}:${a}`
                                        })
                                      : r.default.createElement(u.default, { transactionGroup: t, key: `${t.nonce}:${n + a - 10}` })
                                  );
                                })
                              )
                          : r.default.createElement(
                              y.Box,
                              { className: "transaction-list__empty" },
                              r.default.createElement(y.Box, { className: "transaction-list__empty-text" }, f("noTransactions"))
                            ),
                        S.length > n &&
                          r.default.createElement(
                            p.default,
                            { className: "transaction-list__view-more", type: "secondary", onClick: _ },
                            f("viewMore")
                          )
                      )
                    )
                  );
                }
                (S.propTypes = { hideTokenTransactions: a.default.bool, tokenAddress: a.default.string }),
                  (S.defaultProps = { hideTokenTransactions: !1, tokenAddress: undefined });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-list/transaction-list.component.js" }
    ],
    [
      4377,
      {
        "../../../../shared/constants/transaction": 3974,
        "../../../hooks/useI18nContext": 4837,
        "../../ui/tooltip": 4736,
        "@metamask/transaction-controller": 1835,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = m);
                var r = u(e("react")),
                  a = u(e("prop-types")),
                  o = u(e("classnames")),
                  i = e("@metamask/transaction-controller"),
                  s = u(e("../../ui/tooltip")),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../../shared/constants/transaction");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const d = "queued",
                  p = {
                    [i.TransactionStatus.submitted]: c.TransactionGroupStatus.pending,
                    [i.TransactionStatus.approved]: c.TransactionGroupStatus.pending,
                    [i.TransactionStatus.signed]: c.TransactionGroupStatus.pending
                  },
                  f = {
                    [i.TransactionStatus.unapproved]: "transaction-status-label--unapproved",
                    [i.TransactionStatus.rejected]: "transaction-status-label--rejected",
                    [i.TransactionStatus.failed]: "transaction-status-label--failed",
                    [i.TransactionStatus.dropped]: "transaction-status-label--dropped",
                    [c.TransactionGroupStatus.cancelled]: "transaction-status-label--cancelled",
                    [d]: "transaction-status-label--queued",
                    [c.TransactionGroupStatus.pending]: "transaction-status-label--pending"
                  };
                function m({ status: e, date: t, error: n, isEarliestNonce: a, className: u, statusOnly: m }) {
                  var h;
                  const y = (0, l.useI18nContext)();
                  let g = (null == n || null === (h = n.rpc) || void 0 === h ? void 0 : h.message) || (null == n ? void 0 : n.message),
                    b = e;
                  p[e] && (b = a ? c.TransactionGroupStatus.pending : d);
                  let v = b && y(b);
                  return (
                    b !== i.TransactionStatus.confirmed || m || (v = t),
                    r.default.createElement(
                      s.default,
                      {
                        position: "top",
                        title: g,
                        wrapperClassName: (0, o.default)("transaction-status-label", `transaction-status-label--${b}`, u, f[b])
                      },
                      v
                    )
                  );
                }
                m.propTypes = {
                  status: a.default.string,
                  className: a.default.string,
                  date: a.default.string,
                  error: a.default.object,
                  isEarliestNonce: a.default.bool,
                  statusOnly: a.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/transaction-status-label/transaction-status-label.js" }
    ],
    [
      4378,
      { "./user-preferenced-currency-display.component": 4379 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./user-preferenced-currency-display.component")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-display/index.js" }
    ],
    [
      4379,
      {
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/common": 4769,
        "../../../hooks/useUserPreferencedCurrency": 4866,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../ui/currency-display": 4627,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = h);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = p(e("prop-types")),
                  o = e("react-redux"),
                  i = e("../../../helpers/constants/common"),
                  s = p(e("../../ui/currency-display")),
                  l = e("../../../hooks/useUserPreferencedCurrency"),
                  c = e("../../component-library"),
                  u = e("../../../selectors"),
                  d = e("../../../ducks/metamask/metamask");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (f = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function m() {
                  return (
                    (m = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    m.apply(this, arguments)
                  );
                }
                function h({
                  "data-testid": e,
                  ethNumberOfDecimals: t,
                  fiatNumberOfDecimals: n,
                  numberOfDecimals: a,
                  showEthLogo: i,
                  type: p,
                  showFiat: f,
                  showCurrencySuffix: h,
                  ...y
                }) {
                  var g;
                  const b = (0, o.useSelector)(u.getCurrentNetwork),
                    v = (0, o.useSelector)(d.getNativeCurrency),
                    { currency: T, numberOfDecimals: E } = (0, l.useUserPreferencedCurrency)(p, {
                      ethNumberOfDecimals: t,
                      fiatNumberOfDecimals: n,
                      numberOfDecimals: a,
                      showFiatOverride: f
                    }),
                    w = (0, r.useMemo)(() => {
                      var e;
                      return (
                        i &&
                        T === v &&
                        r.default.createElement(c.AvatarNetwork, {
                          size: c.AvatarNetworkSize.Xs,
                          name: null == b ? void 0 : b.nickname,
                          src: null == b || null === (e = b.rpcPrefs) || void 0 === e ? void 0 : e.imageUrl
                        })
                      );
                    }, [
                      T,
                      i,
                      v,
                      null == b ? void 0 : b.nickname,
                      null == b || null === (g = b.rpcPrefs) || void 0 === g ? void 0 : g.imageUrl
                    ]);
                  return r.default.createElement(
                    s.default,
                    m({}, y, { currency: T, "data-testid": e, numberOfDecimals: E, prefixComponent: w, suffix: h && !i && T })
                  );
                }
                h.propTypes = {
                  className: a.default.string,
                  "data-testid": a.default.string,
                  prefix: a.default.string,
                  value: a.default.string,
                  numberOfDecimals: a.default.oneOfType([a.default.string, a.default.number]),
                  hideLabel: a.default.bool,
                  hideTitle: a.default.bool,
                  style: a.default.object,
                  showEthLogo: a.default.bool,
                  ethLogoHeight: a.default.number,
                  type: a.default.oneOf([i.PRIMARY, i.SECONDARY]),
                  ethNumberOfDecimals: a.default.oneOfType([a.default.string, a.default.number]),
                  fiatNumberOfDecimals: a.default.oneOfType([a.default.string, a.default.number]),
                  showFiat: a.default.bool,
                  showCurrencySuffix: a.default.bool,
                  ...s.default.propTypes
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-display/user-preferenced-currency-display.component.js" }
    ],
    [
      4380,
      { "./user-preferenced-currency-input.container": 4382 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./user-preferenced-currency-input.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-input/index.js" }
    ],
    [
      4381,
      { "../currency-input": 4100, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a,
                  o,
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  s = c(e("prop-types")),
                  l = c(e("../currency-input"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                class p extends i.PureComponent {
                  render() {
                    const { useNativeCurrencyAsPrimaryCurrency: e, sendInputCurrencySwitched: t, ...n } = this.props;
                    return i.default.createElement(l.default, d({}, n, { featureSecondary: Boolean((e && t) || (!e && !t)) }));
                  }
                }
                (n.default = p),
                  (r = p),
                  (a = "propTypes"),
                  (o = { useNativeCurrencyAsPrimaryCurrency: s.default.bool, sendInputCurrencySwitched: s.default.bool }),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (n !== undefined) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : String(t);
                  })(a)) in r
                    ? Object.defineProperty(r, a, { value: o, enumerable: !0, configurable: !0, writable: !0 })
                    : (r[a] = o);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-input/user-preferenced-currency-input.component.js" }
    ],
    [
      4382,
      {
        "../../../ducks/app/app": 4755,
        "../../../selectors": 5197,
        "./user-preferenced-currency-input.component": 4381,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r,
                  a = e("react-redux"),
                  o = e("../../../ducks/app/app"),
                  i = e("../../../selectors"),
                  s = (r = e("./user-preferenced-currency-input.component")) && r.__esModule ? r : { default: r };
                n.default = (0, a.connect)(
                  (e) => {
                    const { useNativeCurrencyAsPrimaryCurrency: t } = (0, i.getPreferences)(e);
                    return { useNativeCurrencyAsPrimaryCurrency: t, sendInputCurrencySwitched: e.appState.sendInputCurrencySwitched };
                  },
                  (e) => ({ onPreferenceToggle: () => e((0, o.toggleCurrencySwitch)()) })
                )(s.default);
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-currency-input/user-preferenced-currency-input.container.js" }
    ],
    [
      4383,
      { "./user-preferenced-token-input.container": 4385 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./user-preferenced-token-input.container")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-token-input/index.js" }
    ],
    [
      4384,
      { "../../../store/actions": 5204, "../../ui/token-input": 4733, "prop-types": 3450, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = s(e("prop-types")),
                  o = s(e("../../ui/token-input")),
                  i = e("../../../store/actions");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                function u(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(t)) in e
                      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                      : (e[t] = n),
                    e
                  );
                }
                class d extends r.PureComponent {
                  constructor(...e) {
                    super(...e), u(this, "state", { isOriginalTokenSymbol: !0 });
                  }
                  componentDidMount() {
                    const {
                      token: { address: e, symbol: t }
                    } = this.props;
                    (0, i.getTokenSymbol)(e).then((e) => {
                      this.setState({ isOriginalTokenSymbol: e === t });
                    });
                  }
                  render() {
                    const { useNativeCurrencyAsPrimaryCurrency: e, ...t } = this.props;
                    return r.default.createElement(o.default, c({}, t, { showFiat: !e && this.state.isOriginalTokenSymbol }));
                  }
                }
                (n.default = d),
                  u(d, "propTypes", {
                    token: a.default.shape({ address: a.default.string.isRequired, decimals: a.default.number, symbol: a.default.string })
                      .isRequired,
                    useNativeCurrencyAsPrimaryCurrency: a.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-token-input/user-preferenced-token-input.component.js" }
    ],
    [
      4385,
      { "../../../selectors": 5197, "./user-preferenced-token-input.component": 4384, "prop-types": 3450, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = e("react-redux"),
                  a = s(e("prop-types")),
                  o = e("../../../selectors"),
                  i = s(e("./user-preferenced-token-input.component"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const l = (0, r.connect)((e) => {
                  const { useNativeCurrencyAsPrimaryCurrency: t } = (0, o.getPreferences)(e);
                  return { useNativeCurrencyAsPrimaryCurrency: t };
                })(i.default);
                l.propTypes = {
                  token: a.default.shape({ address: a.default.string.isRequired, decimals: a.default.number, symbol: a.default.string })
                    .isRequired
                };
                n.default = l;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/user-preferenced-token-input/user-preferenced-token-input.container.js" }
    ],
    [
      4386,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/transaction": 3974,
        "../../../../shared/modules/currency-display.utils": 3989,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/send": 4765,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/hardware": 4798,
        "../../../helpers/utils/portfolio": 4807,
        "../../../hooks/experiences/useRamps": 4815,
        "../../../hooks/useIsOriginalNativeTokenSymbol": 4839,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../ui/icon-button": 4650,
        "../../ui/spinner": 4717,
        "../../ui/tooltip": 4736,
        "../user-preferenced-currency-display": 4378,
        "./wallet-overview": 4389,
        classnames: 2414,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = P(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = N(e("prop-types")),
                  o = e("react-redux"),
                  i = N(e("classnames")),
                  s = e("react-router-dom"),
                  l = e("../../../contexts/i18n"),
                  c = e("../../../helpers/constants/routes"),
                  u = N(e("../../ui/tooltip")),
                  d = N(e("../user-preferenced-currency-display")),
                  p = e("../../../helpers/constants/common"),
                  f = e("../../../selectors"),
                  m = e("../../../ducks/swaps/swaps"),
                  h = e("../../../helpers/utils/hardware"),
                  y = N(e("../../ui/icon-button")),
                  g = e("../../../contexts/metametrics"),
                  b = e("../../../../shared/constants/metametrics"),
                  v = N(e("../../ui/spinner")),
                  T = e("../../../ducks/send"),
                  E = e("../../../../shared/constants/transaction"),
                  w = e("../../component-library"),
                  O = e("../../../helpers/constants/design-system"),
                  x = N(e("../../../hooks/experiences/useRamps")),
                  S = e("../../../helpers/utils/portfolio"),
                  _ = e("../../../hooks/useIsOriginalNativeTokenSymbol"),
                  k = e("../../../ducks/metamask/metamask"),
                  C = e("../../../../shared/modules/currency-display.utils"),
                  A = N(e("./wallet-overview"));
                function N(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function P(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (P = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const I = ({ className: e, showAddress: t }) => {
                  const n = (0, o.useDispatch)(),
                    a = (0, r.useContext)(l.I18nContext),
                    N = (0, r.useContext)(g.MetaMetricsContext),
                    P = (0, s.useHistory)(),
                    I = (0, s.useLocation)(),
                    M = (0, o.useSelector)(f.getIsBridgeChain),
                    j = (0, o.useSelector)(f.getIsBuyableChain),
                    B = (0, o.useSelector)(f.getMetaMetricsId),
                    R = (0, o.useSelector)(f.getCurrentKeyring),
                    D = (0, h.isHardwareKeyring)(null == R ? void 0 : R.type),
                    L = (0, o.useSelector)(f.getSwapsDefaultToken),
                    F = (0, o.useSelector)(f.isBalanceCached),
                    $ = (0, o.useSelector)(f.getShouldShowFiat),
                    { useNativeCurrencyAsPrimaryCurrency: z } = (0, o.useSelector)(f.getPreferences),
                    V = (0, o.useSelector)(f.getCurrentChainId),
                    { ticker: U, type: W } = (0, o.useSelector)(k.getProviderConfig),
                    H = (0, _.useIsOriginalNativeTokenSymbol)(V, U, W),
                    G = (0, o.useSelector)(f.getSelectedAccountCachedBalance),
                    Y = (0, o.useSelector)(f.getIsSwapsChain),
                    { openBuyCryptoInPdapp: q } = (0, x.default)();
                  return r.default.createElement(A.default, {
                    showAddress: t,
                    balance: r.default.createElement(
                      u.default,
                      { position: "top", title: a("balanceOutdated"), disabled: !F },
                      r.default.createElement(
                        "div",
                        { className: "eth-overview__balance" },
                        r.default.createElement(
                          "div",
                          { className: "eth-overview__primary-container" },
                          G
                            ? r.default.createElement(d.default, {
                                style: { display: "contents" },
                                className: (0, i.default)("eth-overview__primary-balance", { "eth-overview__cached-balance": F }),
                                "data-testid": "eth-overview__primary-currency",
                                value: G,
                                type: (0, C.showPrimaryCurrency)(H, z) ? p.PRIMARY : p.SECONDARY,
                                ethNumberOfDecimals: 4,
                                hideTitle: !0
                              })
                            : r.default.createElement(v.default, {
                                color: "var(--color-secondary-default)",
                                className: "loading-overlay__spinner"
                              }),
                          F ? r.default.createElement("span", { className: "eth-overview__cached-star" }, "*") : null
                        ),
                        $ &&
                          H &&
                          G &&
                          r.default.createElement(d.default, {
                            className: (0, i.default)({
                              "eth-overview__cached-secondary-balance": F,
                              "eth-overview__secondary-balance": !F
                            }),
                            "data-testid": "eth-overview__secondary-currency",
                            value: G,
                            type: p.SECONDARY,
                            ethNumberOfDecimals: 4,
                            hideTitle: !0
                          })
                      )
                    ),
                    buttons: r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.PlusMinus, color: O.IconColor.primaryInverse }),
                        disabled: !j,
                        "data-testid": "eth-overview-buy",
                        label: a("buyAndSell"),
                        onClick: () => {
                          q(),
                            N({
                              event: b.MetaMetricsEventName.NavBuyButtonClicked,
                              category: b.MetaMetricsEventCategory.Navigation,
                              properties: { location: "Home", text: "Buy", chain_id: V, token_symbol: L }
                            });
                        }
                      }),
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        "data-testid": "eth-overview-send",
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.Arrow2UpRight, color: O.IconColor.primaryInverse }),
                        label: a("send"),
                        onClick: () => {
                          N({
                            event: b.MetaMetricsEventName.NavSendButtonClicked,
                            category: b.MetaMetricsEventCategory.Navigation,
                            properties: { token_symbol: "ETH", location: "Home", text: "Send", chain_id: V }
                          }),
                            n((0, T.startNewDraftTransaction)({ type: E.AssetType.native })).then(() => {
                              P.push(c.SEND_ROUTE);
                            });
                        }
                      }),
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        disabled: !Y,
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.SwapHorizontal, color: O.IconColor.primaryInverse }),
                        onClick: () => {
                          Y &&
                            (N({
                              event: b.MetaMetricsEventName.NavSwapButtonClicked,
                              category: b.MetaMetricsEventCategory.Swaps,
                              properties: {
                                token_symbol: "ETH",
                                location: b.MetaMetricsSwapsEventSource.MainView,
                                text: "Swap",
                                chain_id: V
                              }
                            }),
                            n((0, m.setSwapsFromToken)(L)),
                            D ? global.platform.openExtensionInBrowser(c.BUILD_QUOTE_ROUTE) : P.push(c.BUILD_QUOTE_ROUTE));
                        },
                        label: a("swap"),
                        "data-testid": "token-overview-button-swap",
                        tooltipRender: Y
                          ? null
                          : (e) => r.default.createElement(u.default, { title: a("currentlyUnavailable"), position: "bottom" }, e)
                      }),
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        disabled: !M,
                        "data-testid": "eth-overview-bridge",
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.Bridge, color: O.IconColor.primaryInverse }),
                        label: a("bridge"),
                        onClick: () => {
                          if (M) {
                            const e = (0, S.getPortfolioUrl)("bridge", "ext_bridge_button", B);
                            global.platform.openTab({ url: `${e}${I.pathname.includes("asset") ? "&token=native" : ""}` }),
                              N({
                                category: b.MetaMetricsEventCategory.Navigation,
                                event: b.MetaMetricsEventName.BridgeLinkClicked,
                                properties: { location: "Home", text: "Bridge", chain_id: V, token_symbol: "ETH" }
                              });
                          }
                        },
                        tooltipRender: M
                          ? null
                          : (e) => r.default.createElement(u.default, { title: a("currentlyUnavailable"), position: "bottom" }, e)
                      }),
                      r.default.createElement(y.default, {
                        className: "eth-overview__button",
                        "data-testid": "eth-overview-portfolio",
                        Icon: r.default.createElement(w.Icon, { name: w.IconName.Diagram, color: O.IconColor.primaryInverse }),
                        label: a("portfolio"),
                        onClick: () => {
                          const e = (0, S.getPortfolioUrl)("", "ext_portfolio_button", B);
                          global.platform.openTab({ url: e }),
                            N({
                              category: b.MetaMetricsEventCategory.Navigation,
                              event: b.MetaMetricsEventName.PortfolioLinkClicked,
                              properties: { location: "Home", text: "Portfolio", chain_id: V, token_symbol: "ETH" }
                            });
                        }
                      })
                    ),
                    className: e
                  });
                };
                I.propTypes = { className: a.default.string, showAddress: a.default.bool };
                n.default = I;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/wallet-overview/eth-overview.js" }
    ],
    [
      4387,
      { "./eth-overview": 4386, "./token-overview": 4388 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "EthOverview", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  }),
                  Object.defineProperty(n, "TokenOverview", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r = o(e("./eth-overview")),
                  a = o(e("./token-overview"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/app/wallet-overview/index.js" }
    ],
    [
      4388,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/transaction": 3974,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/send": 4765,
        "../../../ducks/swaps/swaps": 4767,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/error-keys": 4772,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/hardware": 4798,
        "../../../helpers/utils/portfolio": 4807,
        "../../../hooks/experiences/useRamps": 4815,
        "../../../hooks/useIsOriginalTokenSymbol": 4840,
        "../../../hooks/useTokenFiatAmount": 4858,
        "../../../hooks/useTokenTracker": 4859,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/currency-display": 4627,
        "../../ui/icon-button": 4650,
        "./wallet-overview": 4389,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = A(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = C(e("prop-types")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = C(e("../../ui/currency-display")),
                  l = e("../../../contexts/i18n"),
                  c = e("../../../helpers/constants/routes"),
                  u = e("../../../hooks/useTokenTracker"),
                  d = e("../../../hooks/useTokenFiatAmount"),
                  p = e("../../../ducks/send"),
                  f = e("../../../helpers/utils/hardware"),
                  m = e("../../../ducks/swaps/swaps"),
                  h = C(e("../../../hooks/experiences/useRamps")),
                  y = e("../../../helpers/utils/portfolio"),
                  g = e("../../../selectors"),
                  b = C(e("../../ui/icon-button")),
                  v = e("../../../helpers/constants/error-keys"),
                  T = e("../../../store/actions"),
                  E = e("../../../contexts/metametrics"),
                  w = e("../../../../shared/constants/metametrics"),
                  O = e("../../../../shared/constants/transaction"),
                  x = e("../../component-library"),
                  S = e("../../../helpers/constants/design-system"),
                  _ = e("../../../hooks/useIsOriginalTokenSymbol"),
                  k = C(e("./wallet-overview"));
                function C(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function A(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (A = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const N = ({ className: e, token: t }) => {
                  var n, a;
                  const C = (0, o.useDispatch)(),
                    A = (0, r.useContext)(l.I18nContext),
                    N = (0, r.useContext)(E.MetaMetricsContext),
                    P = (0, i.useHistory)(),
                    { tokensWithBalances: I } = (0, u.useTokenTracker)({ tokens: [t] }),
                    M = (0, o.useSelector)(g.getCurrentKeyring),
                    j = (0, f.isHardwareKeyring)(M.type),
                    B = null === (n = I[0]) || void 0 === n ? void 0 : n.balance,
                    R = null === (a = I[0]) || void 0 === a ? void 0 : a.string,
                    D = (0, d.useTokenFiatAmount)(t.address, R, t.symbol),
                    L = (0, _.useIsOriginalTokenSymbol)(t.address, t.symbol),
                    F = (0, o.useSelector)(g.getCurrentChainId),
                    $ = (0, o.useSelector)(g.getIsSwapsChain),
                    z = (0, o.useSelector)(g.getIsBridgeChain),
                    V = (0, o.useSelector)(g.getIsBuyableChain),
                    U = (0, o.useSelector)(g.getMetaMetricsId),
                    { openBuyCryptoInPdapp: W } = (0, h.default)();
                  return (
                    (0, r.useEffect)(() => {
                      t.isERC721 && C((0, T.showModal)({ name: "CONVERT_TOKEN_TO_NFT", tokenAddress: t.address }));
                    }, [t.isERC721, t.address, C]),
                    r.default.createElement(k.default, {
                      showAddress: !1,
                      balance: r.default.createElement(
                        "div",
                        { className: "token-overview__balance" },
                        r.default.createElement(
                          "div",
                          { className: "token-overview__primary-container" },
                          r.default.createElement(s.default, {
                            style: { display: "contents" },
                            className: "token-overview__primary-balance",
                            displayValue: R,
                            suffix: t.symbol
                          })
                        ),
                        D && L
                          ? r.default.createElement(s.default, {
                              className: "token-overview__secondary-balance",
                              displayValue: D,
                              hideLabel: !0
                            })
                          : null
                      ),
                      buttons: r.default.createElement(
                        r.default.Fragment,
                        null,
                        r.default.createElement(b.default, {
                          className: "token-overview__button",
                          Icon: r.default.createElement(x.Icon, { name: x.IconName.PlusMinus, color: S.IconColor.primaryInverse }),
                          label: A("buyAndSell"),
                          "data-testid": "token-overview-buy",
                          onClick: () => {
                            W(),
                              N({
                                event: w.MetaMetricsEventName.NavBuyButtonClicked,
                                category: w.MetaMetricsEventCategory.Navigation,
                                properties: { location: "Token Overview", text: "Buy", chain_id: F, token_symbol: t.symbol }
                              });
                          },
                          disabled: t.isERC721 || !V
                        }),
                        r.default.createElement(b.default, {
                          className: "token-overview__button",
                          onClick: async () => {
                            N({
                              event: w.MetaMetricsEventName.NavSendButtonClicked,
                              category: w.MetaMetricsEventCategory.Navigation,
                              properties: {
                                token_symbol: t.symbol,
                                location: w.MetaMetricsSwapsEventSource.TokenView,
                                text: "Send",
                                chain_id: F
                              }
                            });
                            try {
                              await C((0, p.startNewDraftTransaction)({ type: O.AssetType.token, details: t })), P.push(c.SEND_ROUTE);
                            } catch (e) {
                              if (!e.message.includes(v.INVALID_ASSET_TYPE)) throw e;
                            }
                          },
                          Icon: r.default.createElement(x.Icon, { name: x.IconName.Arrow2UpRight, color: S.IconColor.primaryInverse }),
                          label: A("send"),
                          "data-testid": "eth-overview-send",
                          disabled: t.isERC721
                        }),
                        $ &&
                          r.default.createElement(b.default, {
                            className: "token-overview__button",
                            Icon: r.default.createElement(x.Icon, { name: x.IconName.SwapHorizontal, color: S.IconColor.primaryInverse }),
                            onClick: () => {
                              N({
                                event: w.MetaMetricsEventName.NavSwapButtonClicked,
                                category: w.MetaMetricsEventCategory.Swaps,
                                properties: {
                                  token_symbol: t.symbol,
                                  location: w.MetaMetricsSwapsEventSource.TokenView,
                                  text: "Swap",
                                  chain_id: F
                                }
                              }),
                                C(
                                  (0, m.setSwapsFromToken)({
                                    ...t,
                                    address: t.address.toLowerCase(),
                                    iconUrl: t.image,
                                    balance: B,
                                    string: R
                                  })
                                ),
                                j ? global.platform.openExtensionInBrowser(c.BUILD_QUOTE_ROUTE) : P.push(c.BUILD_QUOTE_ROUTE);
                            },
                            label: A("swap"),
                            tooltipRender: null
                          }),
                        z &&
                          r.default.createElement(b.default, {
                            className: "token-overview__button",
                            "data-testid": "token-overview-bridge",
                            Icon: r.default.createElement(x.Icon, { name: x.IconName.Bridge, color: S.IconColor.primaryInverse }),
                            label: A("bridge"),
                            onClick: () => {
                              const e = (0, y.getPortfolioUrl)("bridge", "ext_bridge_button", U);
                              global.platform.openTab({ url: `${e}&token=${t.address}` }),
                                N({
                                  category: w.MetaMetricsEventCategory.Navigation,
                                  event: w.MetaMetricsEventName.BridgeLinkClicked,
                                  properties: { location: "Token Overview", text: "Bridge", url: e, chain_id: F, token_symbol: t.symbol }
                                });
                            },
                            tooltipRender: null
                          })
                      ),
                      className: e
                    })
                  );
                };
                (N.propTypes = {
                  className: a.default.string,
                  token: a.default.shape({
                    address: a.default.string.isRequired,
                    decimals: a.default.number,
                    symbol: a.default.string,
                    image: a.default.string,
                    isERC721: a.default.bool
                  }).isRequired
                }),
                  (N.defaultProps = { className: undefined });
                n.default = N;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/wallet-overview/token-overview.js" }
    ],
    [
      4389,
      {
        "../../../../shared/modules/hexstring-utils": 3993,
        "../../../selectors": 5197,
        "../../multichain": 4555,
        "../../ui/box/box": 4606,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../../shared/modules/hexstring-utils"),
                  l = e("../../../selectors"),
                  c = e("../../multichain"),
                  u = d(e("../../ui/box/box"));
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({ balance: e, buttons: t, className: n, showAddress: a = !1 }) => {
                  const d = (0, i.useSelector)(l.getSelectedIdentity),
                    p = (0, s.toChecksumHexAddress)(null == d ? void 0 : d.address);
                  return r.default.createElement(
                    "div",
                    { className: (0, o.default)("wallet-overview", n) },
                    r.default.createElement(
                      "div",
                      { className: "wallet-overview__balance" },
                      a
                        ? r.default.createElement(
                            u.default,
                            { marginTop: 2 },
                            r.default.createElement(c.AddressCopyButton, { address: p, shorten: !0 })
                          )
                        : null,
                      e
                    ),
                    r.default.createElement("div", { className: "wallet-overview__buttons" }, t)
                  );
                };
                p.propTypes = {
                  balance: a.default.element.isRequired,
                  buttons: a.default.element.isRequired,
                  className: a.default.string,
                  showAddress: a.default.bool
                };
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/components/app/wallet-overview/wallet-overview.js" }
    ],
    [
      4390,
      { "./whats-new-popup": 4391 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return a.default;
                    }
                  });
                var r,
                  a = (r = e("./whats-new-popup")) && r.__esModule ? r : { default: r };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/whats-new-popup/index.js" }
    ],
    [
      4391,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/notifications": 4006,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/locale/locale": 4762,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/constants/zendesk-url": 4781,
        "../../../hooks/useEqualityCheck": 4834,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/popover": 4699,
        classnames: 2414,
        lodash: 3312,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = C);
                var r = O(e("classnames")),
                  a = e("lodash"),
                  o = O(e("prop-types")),
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = w(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  s = e("react-redux"),
                  l = e("react-router-dom"),
                  c = e("../../../../shared/constants/metametrics"),
                  u = e("../../../../shared/notifications"),
                  d = e("../../../contexts/i18n"),
                  p = e("../../../contexts/metametrics"),
                  f = e("../../../ducks/locale/locale"),
                  m = e("../../../helpers/constants/design-system"),
                  h = e("../../../helpers/constants/routes"),
                  y = O(e("../../../helpers/constants/zendesk-url")),
                  g = e("../../../hooks/useEqualityCheck"),
                  b = e("../../../selectors"),
                  v = e("../../../store/actions"),
                  T = e("../../component-library"),
                  E = O(e("../../ui/popover"));
                function w(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (w = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function O(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e, t) {
                  return {
                    2: () => {
                      global.platform.openTab({ url: "https://survey.alchemer.com/s3/6173069/MetaMask-Extension-NPS-January-2021" });
                    },
                    3: () => {
                      global.platform.openTab({ url: "https://community.metamask.io/t/about-the-security-category/72" });
                    },
                    4: () => {
                      (0, v.updateViewedNotifications)({ 4: !0 }), t.push(h.BUILD_QUOTE_ROUTE);
                    },
                    5: () => {
                      (0, v.updateViewedNotifications)({ 5: !0 }), global.platform.openTab({ url: y.default.SECRET_RECOVERY_PHRASE });
                    },
                    8: () => {
                      (0, v.updateViewedNotifications)({ 8: !0 }), t.push(h.ADVANCED_ROUTE);
                    },
                    10: () => {
                      (0, v.updateViewedNotifications)({ 10: !0 }), t.push(`${h.SECURITY_ROUTE}#token-description`);
                    },
                    12: () => {
                      (0, v.updateViewedNotifications)({ 12: !0 }), t.push(h.EXPERIMENTAL_ROUTE);
                    },
                    14: () => {
                      (0, v.updateViewedNotifications)({ 14: !0 }), t.push(`${h.ADVANCED_ROUTE}#backup-userdata`);
                    },
                    16: () => {
                      (0, v.updateViewedNotifications)({ 16: !0 });
                    },
                    17: () => {
                      (0, v.updateViewedNotifications)({ 17: !0 });
                    },
                    18: () => {
                      (0, v.updateViewedNotifications)({ 18: !0 }), t.push(`${h.EXPERIMENTAL_ROUTE}#security-alerts`);
                    },
                    19: () => {
                      (0, v.updateViewedNotifications)({ 19: !0 }), t.push(`${h.EXPERIMENTAL_ROUTE}#autodetect-nfts`);
                    },
                    20: () => {
                      (0, v.updateViewedNotifications)({ 20: !0 }), global.platform.openTab({ url: y.default.LEDGER_FIREFOX_U2F_GUIDE });
                    },
                    21: () => {
                      (0, v.updateViewedNotifications)({ 21: !0 }), t.push(h.PREPARE_SWAP_ROUTE);
                    },
                    22: () => {
                      (0, v.updateViewedNotifications)({ 22: !0 });
                    },
                    23: () => {
                      (0, v.updateViewedNotifications)({ 23: !0 }), t.push(`${h.EXPERIMENTAL_ROUTE}#security-alerts`);
                    },
                    24: () => {
                      (0, v.updateViewedNotifications)({ 24: !0 });
                    },
                    [u.NOTIFICATION_DROP_LEDGER_FIREFOX]: () => {
                      (0, v.updateViewedNotifications)({ [u.NOTIFICATION_DROP_LEDGER_FIREFOX]: !0 });
                    },
                    [u.NOTIFICATION_OPEN_BETA_SNAPS]: () => {
                      (0, v.updateViewedNotifications)({ [u.NOTIFICATION_OPEN_BETA_SNAPS]: !0 }),
                        global.platform.openTab({ url: "https://metamask.io/snaps/" });
                    },
                    [u.NOTIFICATION_BUY_SELL_BUTTON]: () => {
                      (0, v.updateViewedNotifications)({ [u.NOTIFICATION_BUY_SELL_BUTTON]: !0 }),
                        global.platform.openTab({ url: "https://portfolio.metamask.io/sell/build-quote" });
                    },
                    [u.NOTIFICATION_U2F_LEDGER_LIVE]: () => {
                      (0, v.updateViewedNotifications)({ [u.NOTIFICATION_U2F_LEDGER_LIVE]: !0 });
                    }
                  }[e];
                }
                const S = (e) =>
                    Array.isArray(e)
                      ? i.default.createElement(
                          i.default.Fragment,
                          null,
                          e.map((t, n) => {
                            const r = n === e.length - 1;
                            return i.default.createElement(
                              T.Text,
                              {
                                "data-testid": `whats-new-description-item-${n}`,
                                key: `item-${n}`,
                                variant: m.TextVariant.bodyMd,
                                marginBottom: r ? 0 : 4
                              },
                              t
                            );
                          })
                        )
                      : i.default.createElement(T.Text, { variant: m.TextVariant.bodyMd }, e),
                  _ = ({ notification: e, idRefMap: t, history: n, isLast: a, trackEvent: o }) => {
                    const { id: s, date: l, title: u, description: d, image: p, actionText: f } = e,
                      h = x(s, n),
                      y =
                        p &&
                        i.default.createElement("img", {
                          className: "whats-new-popup__notification-image",
                          src: p.src,
                          height: p.height,
                          width: p.width
                        }),
                      g = null == p ? void 0 : p.placeImageBelowDescription;
                    return i.default.createElement(
                      "div",
                      {
                        className: (0, r.default)("whats-new-popup__notification whats-new-popup__first-notification", {
                          "whats-new-popup__last-notification": a
                        }),
                        key: `whats-new-popop-notification-${s}`
                      },
                      i.default.createElement(T.Text, { variant: m.TextVariant.bodyLgMedium, marginBottom: 2 }, u),
                      !g && y,
                      i.default.createElement(
                        "div",
                        { className: "whats-new-popup__description-and-date" },
                        i.default.createElement("div", { className: "whats-new-popup__notification-description" }, S(d)),
                        i.default.createElement("div", { className: "whats-new-popup__notification-date" }, l)
                      ),
                      g && y,
                      f &&
                        i.default.createElement(
                          T.ButtonPrimary,
                          {
                            className: "whats-new-popup__button",
                            onClick: () => {
                              h(), o({ category: c.MetaMetricsEventCategory.Home, event: c.MetaMetricsEventName.WhatsNewClicked });
                            },
                            block: !0
                          },
                          f
                        ),
                      i.default.createElement("div", { className: "whats-new-popup__intersection-observable", ref: t[s] })
                    );
                  },
                  k = ({ notification: e, idRefMap: t, history: n, isLast: a }) => {
                    const { id: o, date: s, title: l, description: c, actionText: u } = e,
                      d = x(o, n);
                    return i.default.createElement(
                      "div",
                      {
                        className: (0, r.default)("whats-new-popup__notification", { "whats-new-popup__last-notification": a }),
                        key: `whats-new-popop-notification-${o}`
                      },
                      i.default.createElement("div", { className: "whats-new-popup__notification-title" }, l),
                      i.default.createElement(
                        "div",
                        { className: "whats-new-popup__description-and-date" },
                        i.default.createElement("div", { className: "whats-new-popup__notification-description" }, S(c)),
                        i.default.createElement("div", { className: "whats-new-popup__notification-date" }, s)
                      ),
                      u && i.default.createElement("div", { className: "whats-new-popup__link", onClick: d }, `${u} >`),
                      i.default.createElement("div", { className: "whats-new-popup__intersection-observable", ref: t[o] })
                    );
                  };
                function C({ onClose: e }) {
                  const t = (0, i.useContext)(d.I18nContext),
                    n = (0, l.useHistory)(),
                    r = (0, s.useSelector)(b.getSortedAnnouncementsToShow),
                    o = (0, s.useSelector)(f.getCurrentLocale),
                    [m, h] = (0, i.useState)({}),
                    [y, T] = (0, i.useState)(!0),
                    w = (0, i.useRef)(),
                    O = (0, g.useEqualityCheck)(r),
                    x = (0, i.useMemo)(() => O.reduce((e, t) => ({ ...e, [t.id]: i.default.createRef() }), {}), [O]),
                    S = (0, i.useContext)(p.MetaMetricsContext),
                    C = (0, a.debounce)((e) => {
                      T(e.scrollHeight - e.scrollTop !== e.clientHeight);
                    }, 100);
                  (0, i.useEffect)(() => {
                    const e = new window.IntersectionObserver(
                      (e, t) => {
                        e.forEach((e) => {
                          if (e.isIntersecting) {
                            const [n, r] = Object.entries(x).find(([t, n]) => n.current.isSameNode(e.target));
                            h((e) => ({ ...e, [n]: !0 })), t.unobserve(r.current);
                          }
                        });
                      },
                      { root: w.current, threshold: 1 }
                    );
                    return (
                      Object.values(x).forEach((t) => {
                        e.observe(t.current);
                      }),
                      () => {
                        e.disconnect();
                      }
                    );
                  }, [x, h]);
                  const A = {
                    0: _,
                    1: _,
                    18: _,
                    19: _,
                    21: _,
                    22: _,
                    23: _,
                    24: _,
                    [u.NOTIFICATION_DROP_LEDGER_FIREFOX]: _,
                    [u.NOTIFICATION_OPEN_BETA_SNAPS]: _,
                    [u.NOTIFICATION_BUY_SELL_BUTTON]: _,
                    [u.NOTIFICATION_U2F_LEDGER_LIVE]: _
                  };
                  return i.default.createElement(
                    E.default,
                    {
                      title: t("whatsNew"),
                      headerProps: { padding: [4, 4, 4] },
                      className: "whats-new-popup__popover",
                      onClose: () => {
                        (0, v.updateViewedNotifications)(m),
                          S({
                            category: c.MetaMetricsEventCategory.Home,
                            event: c.MetaMetricsEventName.WhatsNewViewed,
                            properties: { number_viewed: Object.keys(m).pop(), completed_all: !0 }
                          }),
                          e();
                      },
                      popoverRef: w,
                      showScrollDown: y && r.length > 1,
                      onScrollDownButtonClick: (e) => {
                        e.stopPropagation(), x[r[r.length - 1].id].current.scrollIntoView({ behavior: "smooth" });
                      },
                      onScroll: (e) => {
                        C(e.target);
                      }
                    },
                    i.default.createElement(
                      "div",
                      { className: "whats-new-popup__notifications" },
                      r.map(({ id: e }, a) => {
                        const i = (0, u.getTranslatedUINotifications)(t, o)[e],
                          s = a === r.length - 1;
                        return (A[e] || k)({ notification: i, idRefMap: x, history: n, isLast: s, trackEvent: S });
                      })
                    )
                  );
                }
                C.propTypes = { onClose: o.default.func.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/components/app/whats-new-popup/whats-new-popup.js" }
    ],
    [
      4392,
      {
        "../../ui/identicon/blockieIdenticon/blockieIdenticon.component": 4660,
        "../../ui/jazzicon/jazzicon.component": 4669,
        "../avatar-base": 4397,
        "./avatar-account.types": 4393,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarAccount = void 0);
                var r = c(e("react")),
                  a = c(e("classnames")),
                  o = c(e("../../ui/jazzicon/jazzicon.component")),
                  i = c(e("../../ui/identicon/blockieIdenticon/blockieIdenticon.component")),
                  s = e("../avatar-base"),
                  l = e("./avatar-account.types");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.AvatarAccount = r.default.forwardRef(
                  (
                    { size: e = l.AvatarAccountSize.Md, address: t, className: n = "", variant: c = l.AvatarAccountVariant.Jazzicon, ...d },
                    p
                  ) =>
                    r.default.createElement(
                      s.AvatarBase,
                      u({ ref: p, size: e, className: (0, a.default)("mm-avatar-account", n) }, d),
                      c === l.AvatarAccountVariant.Jazzicon
                        ? r.default.createElement(o.default, {
                            className: (0, a.default)("mm-avatar-account__jazzicon"),
                            address: t,
                            diameter: l.AvatarAccountDiameter[e]
                          })
                        : r.default.createElement(i.default, { address: t, diameter: l.AvatarAccountDiameter[e], borderRadius: "50%" })
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-account/avatar-account.tsx" }
    ],
    [
      4393,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.AvatarAccountVariant = n.AvatarAccountSize = n.AvatarAccountDiameter = void 0);
                n.AvatarAccountVariant = (function (e) {
                  return (e.Jazzicon = "jazzicon"), (e.Blockies = "blockies"), e;
                })({});
                let r = (n.AvatarAccountSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({}));
                n.AvatarAccountDiameter = { [r.Xs]: 16, [r.Sm]: 24, [r.Md]: 32, [r.Lg]: 40, [r.Xl]: 48 };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-account/avatar-account.types.ts" }
    ],
    [
      4394,
      { "./avatar-account": 4392, "./avatar-account.types": 4393 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccount;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountDiameter", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarAccountDiameter;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarAccountSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountVariant", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarAccountVariant;
                    }
                  });
                var r = e("./avatar-account"),
                  a = e("./avatar-account.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-account/index.ts" }
    ],
    [
      4395,
      { "../../../helpers/constants/design-system": 4771, "../text": 4498, "./avatar-base.types": 4396, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarBase = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../text"),
                  s = e("./avatar-base.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.AvatarBase = r.default.forwardRef(
                  (
                    {
                      size: e = s.AvatarBaseSize.Md,
                      children: t,
                      backgroundColor: n = o.BackgroundColor.backgroundAlternative,
                      borderColor: l = o.BorderColor.borderDefault,
                      color: u = o.TextColor.textDefault,
                      className: d = "",
                      ...p
                    },
                    f
                  ) => {
                    let m;
                    return (
                      (m =
                        e === s.AvatarBaseSize.Lg || e === s.AvatarBaseSize.Xl
                          ? o.TextVariant.bodyLgMedium
                          : e === s.AvatarBaseSize.Sm || e === s.AvatarBaseSize.Md
                          ? o.TextVariant.bodySm
                          : o.TextVariant.bodyXs),
                      r.default.createElement(
                        i.Text,
                        c(
                          {
                            className: (0, a.default)("mm-avatar-base", `mm-avatar-base--size-${e}`, d),
                            ref: f,
                            as: "div",
                            display: o.Display.Flex,
                            justifyContent: o.JustifyContent.center,
                            alignItems: o.AlignItems.center,
                            borderRadius: o.BorderRadius.full,
                            variant: m,
                            textTransform: o.TextTransform.Uppercase,
                            backgroundColor: n,
                            borderColor: l,
                            color: u
                          },
                          p
                        ),
                        t
                      )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-base/avatar-base.tsx" }
    ],
    [
      4396,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarBaseSize = void 0);
                n.AvatarBaseSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-base/avatar-base.types.ts" }
    ],
    [
      4397,
      { "./avatar-base": 4395, "./avatar-base.types": 4396 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarBase", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarBase;
                    }
                  }),
                  Object.defineProperty(n, "AvatarBaseSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarBaseSize;
                    }
                  });
                var r = e("./avatar-base"),
                  a = e("./avatar-base.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-base/index.ts" }
    ],
    [
      4398,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../avatar-base": 4397,
        "../icon": 4452,
        "./avatar-favicon.types": 4399,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarFavicon = void 0);
                var r = u(e("react")),
                  a = u(e("classnames")),
                  o = e("../avatar-base"),
                  i = e("../icon"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("./avatar-favicon.types");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                n.AvatarFavicon = r.default.forwardRef(
                  (
                    {
                      size: e = c.AvatarFaviconSize.Md,
                      src: t,
                      name: n = "avatar-favicon",
                      className: u = "",
                      fallbackIconProps: p,
                      borderColor: f = s.BorderColor.transparent,
                      ...m
                    },
                    h
                  ) => {
                    const y = (0, l.useI18nContext)();
                    return r.default.createElement(
                      o.AvatarBase,
                      d(
                        {
                          ref: h,
                          size: e,
                          display: s.Display.Flex,
                          alignItems: s.AlignItems.center,
                          justifyContent: s.JustifyContent.center,
                          className: (0, a.default)("mm-avatar-favicon", u),
                          borderColor: f
                        },
                        m
                      ),
                      t
                        ? r.default.createElement("img", { className: "mm-avatar-favicon__image", src: t, alt: y("logo", [n]) })
                        : r.default.createElement(
                            i.Icon,
                            d({ name: i.IconName.Global, color: s.IconColor.iconDefault, size: i.IconSize.Md }, p)
                          )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-favicon/avatar-favicon.tsx" }
    ],
    [
      4399,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarFaviconSize = void 0);
                n.AvatarFaviconSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-favicon/avatar-favicon.types.ts" }
    ],
    [
      4400,
      { "./avatar-favicon": 4398, "./avatar-favicon.types": 4399 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarFavicon", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarFavicon;
                    }
                  }),
                  Object.defineProperty(n, "AvatarFaviconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarFaviconSize;
                    }
                  });
                var r = e("./avatar-favicon"),
                  a = e("./avatar-favicon.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-favicon/index.ts" }
    ],
    [
      4401,
      {
        "../../../helpers/constants/design-system": 4771,
        "../avatar-base": 4397,
        "../icon": 4452,
        "./avatar-icon.types": 4402,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarIcon = void 0);
                var r = c(e("react")),
                  a = c(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../icon"),
                  s = e("../avatar-base"),
                  l = e("./avatar-icon.types");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.AvatarIcon = r.default.forwardRef(
                  (
                    {
                      size: e = l.AvatarIconSize.Md,
                      color: t = o.TextColor.primaryDefault,
                      backgroundColor: n = o.BackgroundColor.primaryMuted,
                      className: c = "",
                      iconProps: d,
                      iconName: p,
                      ...f
                    },
                    m
                  ) => {
                    const h = l.avatarIconSizeToIconSize[e];
                    return r.default.createElement(
                      s.AvatarBase,
                      u(
                        {
                          ref: m,
                          size: e,
                          display: o.Display.Flex,
                          alignItems: o.AlignItems.center,
                          justifyContent: o.JustifyContent.center,
                          color: t,
                          backgroundColor: n,
                          borderColor: o.BorderColor.transparent,
                          className: (0, a.default)("mm-avatar-icon", c)
                        },
                        f
                      ),
                      r.default.createElement(i.Icon, u({ color: o.IconColor.inherit, name: p, size: h }, d))
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-icon/avatar-icon.tsx" }
    ],
    [
      4402,
      { "../icon": 4452 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.avatarIconSizeToIconSize = n.AvatarIconSize = void 0);
                var r = e("../icon");
                let a = (n.AvatarIconSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({}));
                n.avatarIconSizeToIconSize = {
                  [a.Xs]: r.IconSize.Xs,
                  [a.Sm]: r.IconSize.Sm,
                  [a.Md]: r.IconSize.Md,
                  [a.Lg]: r.IconSize.Lg,
                  [a.Xl]: r.IconSize.Xl
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-icon/avatar-icon.types.ts" }
    ],
    [
      4403,
      { "./avatar-icon": 4401, "./avatar-icon.types": 4402 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarIcon", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarIcon;
                    }
                  }),
                  Object.defineProperty(n, "AvatarIconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarIconSize;
                    }
                  });
                var r = e("./avatar-icon"),
                  a = e("./avatar-icon.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-icon/index.ts" }
    ],
    [
      4404,
      {
        "../../../helpers/constants/design-system": 4771,
        "../avatar-base": 4397,
        "./avatar-network.types": 4405,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarNetwork = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../avatar-base"),
                  l = e("./avatar-network.types");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.AvatarNetwork = a.default.forwardRef(
                  (
                    {
                      size: e = l.AvatarNetworkSize.Md,
                      name: t,
                      src: n,
                      showHalo: r,
                      color: c = i.TextColor.textDefault,
                      backgroundColor: d = i.BackgroundColor.backgroundAlternative,
                      borderColor: p = i.BorderColor.transparent,
                      className: f = "",
                      ...m
                    },
                    h
                  ) => {
                    const [y, g] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => {
                      g(!n);
                    }, [n]);
                    const b = (null == t ? void 0 : t[0]) ?? "?";
                    return a.default.createElement(
                      s.AvatarBase,
                      u(
                        {
                          ref: h,
                          size: e,
                          display: i.Display.Flex,
                          alignItems: i.AlignItems.center,
                          justifyContent: i.JustifyContent.center,
                          className: (0, o.default)("mm-avatar-network", r ? "mm-avatar-network--with-halo" : "", f),
                          backgroundColor: d,
                          borderColor: p,
                          color: c
                        },
                        m
                      ),
                      y
                        ? b
                        : a.default.createElement(
                            a.default.Fragment,
                            null,
                            r &&
                              a.default.createElement("img", {
                                src: n,
                                className: r ? "mm-avatar-network__network-image--blurred" : "",
                                "aria-hidden": "true"
                              }),
                            a.default.createElement("img", {
                              className: r ? "mm-avatar-network__network-image--size-reduced" : "mm-avatar-network__network-image",
                              onError: () => {
                                g(!0);
                              },
                              src: n,
                              alt: `${t} logo` || "network logo"
                            })
                          )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-network/avatar-network.tsx" }
    ],
    [
      4405,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarNetworkSize = void 0);
                n.AvatarNetworkSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-network/avatar-network.types.ts" }
    ],
    [
      4406,
      { "./avatar-network": 4404, "./avatar-network.types": 4405 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarNetwork", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarNetwork;
                    }
                  }),
                  Object.defineProperty(n, "AvatarNetworkSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarNetworkSize;
                    }
                  });
                var r = e("./avatar-network"),
                  a = e("./avatar-network.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-network/index.ts" }
    ],
    [
      4407,
      {
        "../../../helpers/constants/design-system": 4771,
        "../avatar-base": 4397,
        "./avatar-token.types": 4408,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarToken = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../avatar-base"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("./avatar-token.types");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.AvatarToken = a.default.forwardRef(
                  (
                    {
                      size: e = l.AvatarTokenSize.Md,
                      name: t,
                      src: n,
                      showHalo: r,
                      color: c = s.TextColor.textDefault,
                      backgroundColor: d = s.BackgroundColor.backgroundAlternative,
                      borderColor: p = s.BorderColor.transparent,
                      className: f = "",
                      ...m
                    },
                    h
                  ) => {
                    const [y, g] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => {
                      g(!n);
                    }, [n]);
                    const b = (null == t ? void 0 : t[0]) ?? "?";
                    return a.default.createElement(
                      i.AvatarBase,
                      u(
                        {
                          ref: h,
                          size: e,
                          display: s.Display.Flex,
                          alignItems: s.AlignItems.center,
                          justifyContent: s.JustifyContent.center,
                          className: (0, o.default)("mm-avatar-token", r ? "mm-avatar-token--with-halo" : "", f),
                          backgroundColor: d,
                          borderColor: p,
                          color: c
                        },
                        m
                      ),
                      y
                        ? b
                        : a.default.createElement(
                            a.default.Fragment,
                            null,
                            r &&
                              a.default.createElement("img", {
                                src: n,
                                className: r ? "mm-avatar-token__token-image--blurred" : "",
                                "aria-hidden": "true"
                              }),
                            a.default.createElement("img", {
                              className: r ? "mm-avatar-token__token-image--size-reduced" : "mm-avatar-token__token-image",
                              onError: () => {
                                g(!0);
                              },
                              src: n,
                              alt: `${t} logo` || "token logo"
                            })
                          )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-token/avatar-token.tsx" }
    ],
    [
      4408,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarTokenSize = void 0);
                n.AvatarTokenSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-token/avatar-token.types.ts" }
    ],
    [
      4409,
      { "./avatar-token": 4407, "./avatar-token.types": 4408 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarToken", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarToken;
                    }
                  }),
                  Object.defineProperty(n, "AvatarTokenSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarTokenSize;
                    }
                  });
                var r = e("./avatar-token"),
                  a = e("./avatar-token.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/avatar-token/index.ts" }
    ],
    [
      4410,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, "./badge-wrapper.types": 4411, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BadgeWrapper = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e(".."),
                  s = e("./badge-wrapper.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.BadgeWrapper = r.default.forwardRef(
                  (
                    {
                      children: e,
                      badge: t,
                      badgeContainerProps: n,
                      position: l = s.BadgeWrapperPosition.topRight,
                      positionObj: u,
                      anchorElementShape: d = s.BadgeWrapperAnchorElementShape.circular,
                      className: p = "",
                      ...f
                    },
                    m
                  ) =>
                    r.default.createElement(
                      i.Box,
                      c({ className: (0, a.default)("mm-badge-wrapper", p), ref: m, display: o.Display.InlineBlock }, f),
                      e,
                      r.default.createElement(
                        i.Box,
                        c(
                          {
                            className: (0, a.default)("mm-badge-wrapper__badge-container", {
                              [`mm-badge-wrapper__badge-container--${d}-${l}`]: !u
                            }),
                            style: { ...u }
                          },
                          n
                        ),
                        t
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/badge-wrapper/badge-wrapper.tsx" }
    ],
    [
      4411,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BadgeWrapperPosition = n.BadgeWrapperAnchorElementShape = void 0);
                (n.BadgeWrapperPosition = (function (e) {
                  return (
                    (e.topRight = "top-right"),
                    (e.bottomRight = "bottom-right"),
                    (e.topLeft = "top-left"),
                    (e.bottomLeft = "bottom-left"),
                    e
                  );
                })({})),
                  (n.BadgeWrapperAnchorElementShape = (function (e) {
                    return (e.rectangular = "rectangular"), (e.circular = "circular"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/badge-wrapper/badge-wrapper.types.ts" }
    ],
    [
      4412,
      { "./badge-wrapper": 4410, "./badge-wrapper.types": 4411 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BadgeWrapper", {
                    enumerable: !0,
                    get: function () {
                      return r.BadgeWrapper;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapperAnchorElementShape", {
                    enumerable: !0,
                    get: function () {
                      return a.BadgeWrapperAnchorElementShape;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapperPosition", {
                    enumerable: !0,
                    get: function () {
                      return a.BadgeWrapperPosition;
                    }
                  });
                var r = e("./badge-wrapper"),
                  a = e("./badge-wrapper.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/badge-wrapper/index.ts" }
    ],
    [
      4413,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, "./banner-alert.types": 4414, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerAlert = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./banner-alert.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.BannerAlert = r.default.forwardRef(
                  ({ children: e, className: t = "", severity: n = s.BannerAlertSeverity.Info, ...l }, u) =>
                    r.default.createElement(
                      o.BannerBase,
                      c(
                        {
                          ref: u,
                          startAccessory: r.default.createElement(
                            o.Icon,
                            c(
                              { size: o.IconSize.Lg },
                              (() => {
                                switch (n) {
                                  case s.BannerAlertSeverity.Danger:
                                    return { name: o.IconName.Danger, color: i.IconColor.errorDefault };
                                  case s.BannerAlertSeverity.Warning:
                                    return { name: o.IconName.Danger, color: i.IconColor.warningDefault };
                                  case s.BannerAlertSeverity.Success:
                                    return { name: o.IconName.Confirmation, color: i.IconColor.successDefault };
                                  default:
                                    return { name: o.IconName.Info, color: i.IconColor.primaryDefault };
                                }
                              })()
                            )
                          ),
                          backgroundColor: (() => {
                            switch (n) {
                              case s.BannerAlertSeverity.Danger:
                                return i.BackgroundColor.errorMuted;
                              case s.BannerAlertSeverity.Warning:
                                return i.BackgroundColor.warningMuted;
                              case s.BannerAlertSeverity.Success:
                                return i.BackgroundColor.successMuted;
                              default:
                                return i.BackgroundColor.primaryMuted;
                            }
                          })(),
                          paddingLeft: 2,
                          className: (0, a.default)(
                            "mm-banner-alert",
                            { [`mm-banner-alert--severity-${n}`]: Object.values(s.BannerAlertSeverity).includes(n) },
                            t
                          )
                        },
                        l
                      ),
                      e
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-alert/banner-alert.tsx" }
    ],
    [
      4414,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerAlertSeverity = void 0);
                n.BannerAlertSeverity = (function (e) {
                  return (e.Danger = "danger"), (e.Info = "info"), (e.Success = "success"), (e.Warning = "warning"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-alert/banner-alert.types.ts" }
    ],
    [
      4415,
      { "./banner-alert": 4413, "./banner-alert.types": 4414 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BannerAlert", {
                    enumerable: !0,
                    get: function () {
                      return r.BannerAlert;
                    }
                  }),
                  Object.defineProperty(n, "BannerAlertSeverity", {
                    enumerable: !0,
                    get: function () {
                      return a.BannerAlertSeverity;
                    }
                  });
                var r = e("./banner-alert"),
                  a = e("./banner-alert.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-alert/index.ts" }
    ],
    [
      4416,
      {
        "..": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerBase = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../hooks/useI18nContext"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("..");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.BannerBase = r.default.forwardRef(
                  (
                    {
                      className: e = "",
                      title: t,
                      titleProps: n,
                      description: l,
                      descriptionProps: u,
                      children: d,
                      childrenWrapperProps: p,
                      actionButtonLabel: f,
                      actionButtonOnClick: m,
                      actionButtonProps: h,
                      startAccessory: y,
                      onClose: g,
                      closeButtonProps: b,
                      ...v
                    },
                    T
                  ) => {
                    const E = (0, o.useI18nContext)();
                    return r.default.createElement(
                      s.Box,
                      c(
                        {
                          className: (0, a.default)("mm-banner-base", e),
                          ref: T,
                          display: i.Display.Flex,
                          gap: 2,
                          backgroundColor: i.BackgroundColor.backgroundDefault,
                          borderRadius: i.BorderRadius.SM,
                          padding: 3
                        },
                        v
                      ),
                      y && r.default.createElement(r.default.Fragment, null, y),
                      r.default.createElement(
                        s.Box,
                        { minWidth: i.BlockSize.Zero },
                        t && r.default.createElement(s.Text, c({ variant: i.TextVariant.bodyLgMedium }, n), t),
                        l && r.default.createElement(s.Text, u, l),
                        d && "object" == typeof d ? d : r.default.createElement(s.Text, p, d),
                        f && r.default.createElement(s.ButtonLink, c({ size: s.ButtonLinkSize.Auto, onClick: m }, h), f)
                      ),
                      g &&
                        r.default.createElement(
                          s.ButtonIcon,
                          c(
                            {
                              className: "mm-banner-base__close-button",
                              marginLeft: "auto",
                              iconName: s.IconName.Close,
                              size: s.ButtonIconSize.Sm,
                              ariaLabel: E("close"),
                              onClick: g
                            },
                            b
                          )
                        )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-base/banner-base.tsx" }
    ],
    [
      4417,
      { "./banner-base": 4416 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BannerBase", {
                    enumerable: !0,
                    get: function () {
                      return r.BannerBase;
                    }
                  });
                var r = e("./banner-base");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-base/index.ts" }
    ],
    [
      4418,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, "./banner-tip.types": 4419, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerTip = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e(".."),
                  s = e("./banner-tip.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.BannerTip = r.default.forwardRef(
                  (
                    {
                      children: e,
                      className: t = "",
                      logoType: n = s.BannerTipLogoType.Greeting,
                      logoWrapperProps: l,
                      logoProps: u,
                      startAccessory: d,
                      ...p
                    },
                    f
                  ) =>
                    r.default.createElement(
                      i.BannerBase,
                      c(
                        {
                          ref: f,
                          startAccessory:
                            d ||
                            r.default.createElement(
                              i.Box,
                              c({ display: o.Display.Flex, alignItems: o.AlignItems.center }, l),
                              r.default.createElement(
                                i.Box,
                                c({ as: "img", src: `images/fox-${n}.png`, alt: n }, u, {
                                  className: (0, a.default)("mm-banner-tip--logo", (null == u ? void 0 : u.className) ?? "")
                                })
                              )
                            ),
                          borderColor: o.BorderColor.borderDefault,
                          className: (0, a.default)("mm-banner-tip", t)
                        },
                        p
                      ),
                      e
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-tip/banner-tip.tsx" }
    ],
    [
      4419,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BannerTipLogoType = void 0);
                n.BannerTipLogoType = (function (e) {
                  return (e.Greeting = "greeting"), (e.Chat = "chat"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-tip/banner-tip.types.ts" }
    ],
    [
      4420,
      { "./banner-tip": 4418, "./banner-tip.types": 4419 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BannerTip", {
                    enumerable: !0,
                    get: function () {
                      return r.BannerTip;
                    }
                  }),
                  Object.defineProperty(n, "BannerTipLogoType", {
                    enumerable: !0,
                    get: function () {
                      return a.BannerTipLogoType;
                    }
                  });
                var r = e("./banner-tip"),
                  a = e("./banner-tip.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/banner-tip/index.ts" }
    ],
    [
      4421,
      { "../../../helpers/constants/design-system": 4771, classnames: 2414, lodash: 3312, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Box = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("lodash"),
                  i = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                const c = "mm-box";
                function u(e, t) {
                  return (
                    "number" == typeof t ||
                    (("margin" === e ||
                      "margin-top" === e ||
                      "margin-right" === e ||
                      "margin-bottom" === e ||
                      "margin-left" === e ||
                      "margin-inline" === e ||
                      "margin-inline-start" === e ||
                      "margin-inline-end" === e) &&
                      "auto" === t)
                  );
                }
                function d(e, t) {
                  return "string" == typeof e && "string" == typeof t;
                }
                const p = (0, o.memoize)(
                  (e, t, n) => {
                    if (!t && "number" != typeof t) return {};
                    const r = {},
                      a = Array.isArray(t) && 1 === t.length ? t[0] : undefined,
                      o = (!Array.isArray(t) && "string" == typeof t) || "number" == typeof t ? t : undefined;
                    let s;
                    if (((o || 0 === o) && (s = o), (a || 0 === a) && (s = a), s || 0 === s)) r[`${c}--${e}-${s}`] = n(e, s);
                    else if (Array.isArray(t))
                      switch (t.length) {
                        case 4:
                          (r[`${c}--${e}-${t[0]}`] = n(e, t[0])),
                            (r[`${c}--${i.BREAKPOINTS[1]}:${e}-${t[1]}`] = n(e, t[1])),
                            (r[`${c}--${i.BREAKPOINTS[2]}:${e}-${t[2]}`] = n(e, t[2])),
                            (r[`${c}--${i.BREAKPOINTS[3]}:${e}-${t[3]}`] = n(e, t[3]));
                          break;
                        case 3:
                          (r[`${c}--${e}-${t[0]}`] = n(e, t[0])),
                            (r[`${c}--${i.BREAKPOINTS[1]}:${e}-${t[1]}`] = n(e, t[1])),
                            (r[`${c}--${i.BREAKPOINTS[2]}:${e}-${t[2]}`] = n(e, t[2]));
                          break;
                        case 2:
                          (r[`${c}--${e}-${t[0]}`] = n(e, t[0])), (r[`${c}--${i.BREAKPOINTS[1]}:${e}-${t[1]}`] = n(e, t[1]));
                          break;
                        default:
                          console.log(`Invalid array prop length: ${t.length}`);
                      }
                    return r;
                  },
                  (e, t) => `${e}${t}`
                );
                n.Box = r.default.forwardRef(
                  (
                    {
                      as: e,
                      padding: t,
                      paddingTop: n,
                      paddingRight: o,
                      paddingBottom: i,
                      paddingLeft: s,
                      paddingInline: f,
                      paddingInlineStart: m,
                      paddingInlineEnd: h,
                      margin: y,
                      marginTop: g,
                      marginRight: b,
                      marginBottom: v,
                      marginLeft: T,
                      marginInline: E,
                      marginInlineStart: w,
                      marginInlineEnd: O,
                      borderColor: x,
                      borderWidth: S,
                      borderRadius: _,
                      borderStyle: k,
                      alignItems: C,
                      justifyContent: A,
                      textAlign: N,
                      flexDirection: P,
                      flexWrap: I,
                      gap: M,
                      display: j,
                      width: B,
                      minWidth: R,
                      height: D,
                      children: L,
                      className: F = "",
                      backgroundColor: $,
                      color: z,
                      ...V
                    },
                    U
                  ) => {
                    const W = e || "div",
                      H = (0, a.default)(
                        c,
                        F,
                        p("margin", y, u),
                        p("margin-top", g, u),
                        p("margin-right", b, u),
                        p("margin-bottom", v, u),
                        p("margin-left", T, u),
                        p("margin-inline", E, u),
                        p("margin-inline-start", w, u),
                        p("margin-inline-end", O, u),
                        p("padding", t, u),
                        p("padding-top", n, u),
                        p("padding-right", o, u),
                        p("padding-bottom", i, u),
                        p("padding-left", s, u),
                        p("padding-inline", f, u),
                        p("padding-inline-start", m, u),
                        p("padding-inline-end", h, u),
                        p("display", j, d),
                        p("gap", M, u),
                        p("flex-direction", P, d),
                        p("flex-wrap", I, d),
                        p("justify-content", A, d),
                        p("align-items", C, d),
                        p("text-align", N, d),
                        p("width", B, d),
                        p("min-width", R, d),
                        p("height", D, d),
                        p("color", z, d),
                        p("background-color", $, d),
                        p("rounded", _, d),
                        p("border-style", k, d),
                        p("border-color", x, d),
                        p("border-width", S, u),
                        { "box--border-style-solid": !k && (Boolean(S) || Boolean(x)), "box--border-width-1": !S && Boolean(x) }
                      );
                    return r.default.createElement(W, l({ className: H, ref: U }, V), L);
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/box/box.tsx" }
    ],
    [
      4422,
      { "./box": 4421 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Box", {
                    enumerable: !0,
                    get: function () {
                      return r.Box;
                    }
                  });
                var r = e("./box");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/box/index.ts" }
    ],
    [
      4423,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, "./button-base.types": 4424, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonBase = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./button-base.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ButtonBase = r.default.forwardRef(
                  (
                    {
                      as: e,
                      block: t,
                      children: n,
                      className: l = "",
                      href: u,
                      ellipsis: d = !1,
                      externalLink: p,
                      size: f = s.ButtonBaseSize.Md,
                      startIconName: m,
                      startIconProps: h,
                      endIconName: y,
                      endIconProps: g,
                      loading: b,
                      disabled: v,
                      iconLoadingProps: T,
                      textProps: E,
                      color: w = i.TextColor.textDefault,
                      iconColor: O = i.IconColor.iconDefault,
                      ...x
                    },
                    S
                  ) => {
                    const _ = u ? "a" : e || "button",
                      k = u && "a" === _ ? { href: u, ...x } : x;
                    return r.default.createElement(
                      o.Text,
                      c(
                        {
                          as: _,
                          backgroundColor: i.BackgroundColor.backgroundAlternative,
                          variant: i.TextVariant.bodyMdMedium,
                          color: b ? i.TextColor.transparent : w,
                          ref: S
                        },
                        "button" === _ ? { disabled: v } : {},
                        u && p ? { target: "_blank", rel: "noopener noreferrer" } : {},
                        {
                          padding: 0,
                          paddingLeft: 4,
                          paddingRight: 4,
                          ellipsis: d,
                          className: (0, a.default)(
                            "mm-button-base",
                            {
                              [`mm-button-base--size-${f}`]: Object.values(s.ButtonBaseSize).includes(f),
                              "mm-button-base--loading": b || !1,
                              "mm-button-base--disabled": v || !1,
                              "mm-button-base--block": t || !1,
                              "mm-button-base--ellipsis": d
                            },
                            l
                          ),
                          display: i.Display.InlineFlex,
                          justifyContent: i.JustifyContent.center,
                          alignItems: i.AlignItems.center,
                          borderRadius: i.BorderRadius.pill
                        },
                        k
                      ),
                      m &&
                        r.default.createElement(
                          o.Icon,
                          c({ name: m, size: o.IconSize.Sm, marginInlineEnd: 1 }, h, {
                            color: b ? i.IconColor.transparent : null == h ? void 0 : h.color
                          })
                        ),
                      "string" != typeof n || d || b
                        ? r.default.createElement(
                            o.Text,
                            c({ as: "span", ellipsis: d, variant: i.TextVariant.inherit, color: b ? i.TextColor.transparent : w }, E),
                            n
                          )
                        : n,
                      y &&
                        r.default.createElement(
                          o.Icon,
                          c({ name: y, size: o.IconSize.Sm, marginInlineStart: 1 }, g, {
                            color: b ? i.IconColor.transparent : null == g ? void 0 : g.color
                          })
                        ),
                      b &&
                        r.default.createElement(
                          o.Icon,
                          c({ className: "mm-button-base__icon-loading", name: o.IconName.Loading, color: O, size: o.IconSize.Md }, T)
                        )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-base/button-base.tsx" }
    ],
    [
      4424,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonBaseSize = void 0);
                n.ButtonBaseSize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-base/button-base.types.ts" }
    ],
    [
      4425,
      { "./button-base": 4423, "./button-base.types": 4424 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonBase", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonBase;
                    }
                  }),
                  Object.defineProperty(n, "ButtonBaseSize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonBaseSize;
                    }
                  });
                var r = e("./button-base"),
                  a = e("./button-base.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-base/index.ts" }
    ],
    [
      4426,
      {
        "..": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../icon": 4452,
        "./button-icon.types": 4427,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonIcon = void 0);
                var r = c(e("react")),
                  a = c(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e(".."),
                  s = e("../icon"),
                  l = e("./button-icon.types");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const d = {
                  [l.ButtonIconSize.Sm]: s.IconSize.Sm,
                  [l.ButtonIconSize.Md]: s.IconSize.Md,
                  [l.ButtonIconSize.Lg]: s.IconSize.Lg
                };
                n.ButtonIcon = r.default.forwardRef(
                  (
                    {
                      ariaLabel: e,
                      as: t,
                      className: n = "",
                      color: s = o.IconColor.iconDefault,
                      href: c,
                      size: p = l.ButtonIconSize.Lg,
                      iconName: f,
                      disabled: m,
                      iconProps: h,
                      ...y
                    },
                    g
                  ) => {
                    const b = c ? "a" : t || "button",
                      v = m && "button" === b;
                    return r.default.createElement(
                      i.Box,
                      u(
                        {
                          "aria-label": e,
                          as: b,
                          className: (0, a.default)(
                            "mm-button-icon",
                            `mm-button-icon--size-${String(p)}`,
                            { "mm-button-icon--disabled": Boolean(m) },
                            n
                          ),
                          color: s
                        },
                        v ? { disabled: !0 } : {},
                        {
                          display: o.Display.InlineFlex,
                          justifyContent: o.JustifyContent.center,
                          alignItems: o.AlignItems.center,
                          borderRadius: o.BorderRadius.LG,
                          backgroundColor: o.BackgroundColor.transparent
                        },
                        c ? { href: c } : {},
                        { ref: g },
                        y
                      ),
                      r.default.createElement(i.Icon, u({ name: f, size: d[p] }, h))
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-icon/button-icon.tsx" }
    ],
    [
      4427,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonIconSize = void 0);
                n.ButtonIconSize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-icon/button-icon.types.ts" }
    ],
    [
      4428,
      { "./button-icon": 4426, "./button-icon.types": 4427 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonIcon", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonIcon;
                    }
                  }),
                  Object.defineProperty(n, "ButtonIconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonIconSize;
                    }
                  });
                var r = e("./button-icon"),
                  a = e("./button-icon.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-icon/index.ts" }
    ],
    [
      4429,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, "./button-link.types": 4430, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonLink = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./button-link.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ButtonLink = r.default.forwardRef(
                  (
                    {
                      className: e = "",
                      color: t,
                      danger: n = !1,
                      disabled: l = !1,
                      loading: u = !1,
                      size: d = s.ButtonLinkSize.Auto,
                      ...p
                    },
                    f
                  ) =>
                    r.default.createElement(
                      o.ButtonBase,
                      c(
                        {
                          className: (0, a.default)(e, "mm-button-link", {
                            "mm-button-link--type-danger": n,
                            "mm-button-link--disabled": l,
                            "mm-button-link--loading": u,
                            "mm-button-link--size-inherit": d === s.ButtonLinkSize.Inherit,
                            "mm-button-link--size-auto": d === s.ButtonLinkSize.Auto
                          }),
                          paddingLeft: 0,
                          paddingRight: 0,
                          size: d === s.ButtonLinkSize.Inherit ? null : d,
                          backgroundColor: i.BackgroundColor.transparent,
                          color: t || (n ? i.Color.errorDefault : i.Color.primaryDefault),
                          borderRadius: null,
                          startIconProps: { size: d === s.ButtonLinkSize.Inherit ? o.IconSize.Inherit : o.IconSize.Sm },
                          endIconProps: { size: d === s.ButtonLinkSize.Inherit ? o.IconSize.Inherit : o.IconSize.Sm },
                          iconLoadingProps: {
                            size: d === s.ButtonLinkSize.Inherit ? o.IconSize.Inherit : o.IconSize.Md,
                            color: t || (n ? i.Color.errorDefault : i.Color.primaryDefault)
                          },
                          ref: f,
                          disabled: l,
                          loading: u
                        },
                        p
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-link/button-link.tsx" }
    ],
    [
      4430,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonLinkSize = void 0);
                n.ButtonLinkSize = (function (e) {
                  return (e.Auto = "auto"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Inherit = "inherit"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-link/button-link.types.ts" }
    ],
    [
      4431,
      { "./button-link": 4429, "./button-link.types": 4430 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonLink", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonLink;
                    }
                  }),
                  Object.defineProperty(n, "ButtonLinkSize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonLinkSize;
                    }
                  });
                var r = e("./button-link"),
                  a = e("./button-link.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-link/index.ts" }
    ],
    [
      4432,
      {
        "../../../helpers/constants/design-system": 4771,
        "../button-base": 4425,
        "./button-primary.types": 4433,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonPrimary = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../button-base"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./button-primary.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ButtonPrimary = r.default.forwardRef(
                  ({ className: e = "", danger: t = !1, disabled: n = !1, size: l = s.ButtonPrimarySize.Md, ...u }, d) =>
                    r.default.createElement(
                      o.ButtonBase,
                      c(
                        {
                          backgroundColor: t ? i.BackgroundColor.errorDefault : i.BackgroundColor.primaryDefault,
                          color: t ? i.TextColor.errorInverse : i.TextColor.primaryInverse,
                          className: (0, a.default)(e, "mm-button-primary", {
                            "mm-button-primary--type-danger": t,
                            "mm-button-primary--disabled": n
                          }),
                          iconLoadingProps: { color: t ? i.IconColor.errorInverse : i.IconColor.primaryInverse },
                          size: l,
                          ref: d,
                          disabled: n
                        },
                        u
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-primary/button-primary.tsx" }
    ],
    [
      4433,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonPrimarySize = void 0);
                n.ButtonPrimarySize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-primary/button-primary.types.ts" }
    ],
    [
      4434,
      { "./button-primary": 4432, "./button-primary.types": 4433 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonPrimary", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonPrimary;
                    }
                  }),
                  Object.defineProperty(n, "ButtonPrimarySize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonPrimarySize;
                    }
                  });
                var r = e("./button-primary"),
                  a = e("./button-primary.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-primary/index.ts" }
    ],
    [
      4435,
      {
        "../../../helpers/constants/design-system": 4771,
        "../button-base": 4425,
        "./button-secondary.types": 4436,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonSecondary = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../button-base"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("./button-secondary.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ButtonSecondary = r.default.forwardRef(
                  ({ className: e = "", danger: t = !1, disabled: n = !1, size: l = s.ButtonSecondarySize.Md, ...u }, d) => {
                    const p = t ? i.Color.errorDefault : i.Color.primaryDefault;
                    return r.default.createElement(
                      o.ButtonBase,
                      c(
                        {
                          backgroundColor: i.Color.transparent,
                          borderColor: p,
                          color: p,
                          className: (0, a.default)(e, "mm-button-secondary", {
                            "mm-button-secondary--type-danger": t,
                            "mm-button-secondary--disabled": n
                          }),
                          size: l,
                          ref: d,
                          disabled: n
                        },
                        u
                      )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-secondary/button-secondary.tsx" }
    ],
    [
      4436,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonSecondarySize = void 0);
                n.ButtonSecondarySize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-secondary/button-secondary.types.ts" }
    ],
    [
      4437,
      { "./button-secondary": 4435, "./button-secondary.types": 4436 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ButtonSecondary", {
                    enumerable: !0,
                    get: function () {
                      return r.ButtonSecondary;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSecondarySize", {
                    enumerable: !0,
                    get: function () {
                      return a.ButtonSecondarySize;
                    }
                  });
                var r = e("./button-secondary"),
                  a = e("./button-secondary.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button-secondary/index.ts" }
    ],
    [
      4438,
      { "../button-link": 4431, "../button-primary": 4434, "../button-secondary": 4437, "./button.types": 4439, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Button = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("../button-primary"),
                  i = e("../button-secondary"),
                  s = e("../button-link"),
                  l = e("./button.types");
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.Button = a.default.forwardRef(({ variant: e, ...t }, n) => {
                  switch (e) {
                    case l.ButtonVariant.Primary:
                      return a.default.createElement(o.ButtonPrimary, c({ ref: n }, t));
                    case l.ButtonVariant.Secondary:
                      return a.default.createElement(i.ButtonSecondary, c({ ref: n }, t));
                    case l.ButtonVariant.Link:
                      return a.default.createElement(s.ButtonLink, c({ ref: n }, t));
                    default:
                      return a.default.createElement(o.ButtonPrimary, c({ ref: n }, t));
                  }
                });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button/button.tsx" }
    ],
    [
      4439,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ButtonVariant = n.ButtonSize = void 0);
                (n.ButtonSize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Inherit = "inherit"), (e.Auto = "auto"), e;
                })({})),
                  (n.ButtonVariant = (function (e) {
                    return (e.Primary = "primary"), (e.Secondary = "secondary"), (e.Link = "link"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button/button.types.ts" }
    ],
    [
      4440,
      { "../../../helpers/constants/design-system": 4771, "./button": 4438, "./button.types": 4439 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.BUTTON_VARIANT = n.BUTTON_SIZES = void 0),
                  Object.defineProperty(n, "Button", {
                    enumerable: !0,
                    get: function () {
                      return a.Button;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSize", {
                    enumerable: !0,
                    get: function () {
                      return o.ButtonSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonVariant", {
                    enumerable: !0,
                    get: function () {
                      return o.ButtonVariant;
                    }
                  });
                var r = e("../../../helpers/constants/design-system"),
                  a = e("./button"),
                  o = e("./button.types");
                (n.BUTTON_SIZES = { SM: r.Size.SM, MD: r.Size.MD, LG: r.Size.LG, INHERIT: r.Size.inherit, AUTO: r.Size.auto }),
                  (n.BUTTON_VARIANT = { PRIMARY: "primary", SECONDARY: "secondary", LINK: "link" });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/button/index.ts" }
    ],
    [
      4441,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Checkbox = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("..");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                n.Checkbox = r.default.forwardRef(
                  (
                    {
                      id: e,
                      isChecked: t,
                      isIndeterminate: n,
                      isDisabled: s,
                      isReadOnly: c,
                      isRequired: u,
                      onChange: d,
                      className: p = "",
                      iconProps: f,
                      inputProps: m,
                      inputRef: h,
                      title: y,
                      name: g,
                      label: b,
                      ...v
                    },
                    T
                  ) => {
                    const E = y || "string" != typeof b ? y || e : b;
                    return r.default.createElement(
                      i.Text,
                      l(
                        {
                          className: (0, a.default)("mm-checkbox", p, { "mm-checkbox--disabled": Boolean(s) }),
                          as: "label",
                          display: o.Display.InlineFlex,
                          alignItems: o.AlignItems.center,
                          ref: T,
                          htmlFor: e
                        },
                        v
                      ),
                      r.default.createElement(
                        "span",
                        { className: "mm-checkbox__input-wrapper" },
                        r.default.createElement(
                          i.Box,
                          l(
                            {
                              as: "input",
                              type: "checkbox",
                              title: E,
                              name: g,
                              id: e,
                              checked: t,
                              disabled: s,
                              readOnly: c,
                              required: u,
                              "data-indeterminate": n,
                              onChange: (e) => {
                                c ? e.preventDefault() : null == d || d(e);
                              },
                              onKeyDown: (e) => {
                                "Enter" === e.key && (null == d || d(e));
                              },
                              margin: 0,
                              marginRight: b ? 2 : 0,
                              backgroundColor: t || n ? o.BackgroundColor.primaryDefault : o.BackgroundColor.transparent,
                              borderColor: t || n ? o.BorderColor.primaryDefault : o.BorderColor.borderDefault,
                              borderRadius: o.BorderRadius.SM,
                              borderWidth: 2,
                              display: o.Display.Flex,
                              ref: h
                            },
                            m,
                            {
                              className: (0, a.default)("mm-checkbox__input", (null == m ? void 0 : m.className) ?? "", {
                                "mm-checkbox__input--checked": Boolean(t),
                                "mm-checkbox__input--indeterminate": Boolean(n),
                                "mm-checkbox__input--readonly": Boolean(c)
                              })
                            }
                          )
                        ),
                        (t || n) &&
                          r.default.createElement(
                            i.Icon,
                            l(
                              {
                                color: o.IconColor.primaryInverse,
                                name: t ? i.IconName.CheckBold : i.IconName.MinusBold,
                                className: (0, a.default)("mm-checkbox__icon", (null == f ? void 0 : f.className) ?? "")
                              },
                              f
                            )
                          )
                      ),
                      b ? r.default.createElement("span", null, b) : null
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/checkbox/checkbox.tsx" }
    ],
    [
      4442,
      { "./checkbox": 4441 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Checkbox", {
                    enumerable: !0,
                    get: function () {
                      return r.Checkbox;
                    }
                  });
                var r = e("./checkbox");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/checkbox/index.ts" }
    ],
    [
      4443,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../ui/box/box": 4606,
        "../help-text": 4449,
        "../label": 4457,
        "../text-field/deprecated": 4492,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.FormTextField = void 0);
                var r = d(e("react")),
                  a = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  s = d(e("../../ui/box/box")),
                  l = e("../text-field/deprecated"),
                  c = e("../help-text"),
                  u = e("../label");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p() {
                  return (
                    (p = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    p.apply(this, arguments)
                  );
                }
                const f = ({
                  autoComplete: e,
                  autoFocus: t,
                  className: n,
                  defaultValue: a,
                  disabled: d,
                  error: f,
                  helpText: m,
                  helpTextProps: h,
                  id: y,
                  inputProps: g,
                  inputRef: b,
                  label: v,
                  labelProps: T,
                  startAccessory: E,
                  maxLength: w,
                  name: O,
                  onBlur: x,
                  onChange: S,
                  onFocus: _,
                  placeholder: k,
                  readOnly: C,
                  required: A,
                  endAccessory: N,
                  size: P = i.Size.MD,
                  textFieldProps: I,
                  truncate: M,
                  type: j = "text",
                  value: B,
                  ...R
                }) =>
                  r.default.createElement(
                    s.default,
                    p(
                      {
                        className: (0, o.default)("mm-form-text-field", { "mm-form-text-field--disabled": d }, n),
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column
                      },
                      R
                    ),
                    v &&
                      r.default.createElement(
                        u.Label,
                        p({ htmlFor: y }, T, { className: (0, o.default)("mm-form-text-field__label", null == T ? void 0 : T.className) }),
                        v
                      ),
                    r.default.createElement(
                      l.TextField,
                      p(
                        {
                          className: (0, o.default)("mm-form-text-field__text-field", null == I ? void 0 : I.className),
                          id: y,
                          autoComplete: e,
                          autoFocus: t,
                          defaultValue: a,
                          disabled: d,
                          error: f,
                          id: y,
                          inputProps: g,
                          inputRef: b,
                          startAccessory: E,
                          maxLength: w,
                          name: O,
                          onBlur: x,
                          onChange: S,
                          onFocus: _,
                          placeholder: k,
                          readOnly: C,
                          required: A,
                          endAccessory: N,
                          size: P,
                          truncate: M,
                          type: j,
                          value: B
                        },
                        I
                      )
                    ),
                    m &&
                      r.default.createElement(
                        c.HelpText,
                        p({ severity: f && c.HelpTextSeverity.Danger, marginTop: 1 }, h, {
                          className: (0, o.default)("mm-form-text-field__help-text", null == h ? void 0 : h.className)
                        }),
                        m
                      )
                  );
                (n.FormTextField = f),
                  (f.propTypes = {
                    className: a.default.string,
                    id: (e, t, n) =>
                      e.label && !e[t]
                        ? new Error(
                            `If a label prop exists you must provide an ${t} prop for the label's htmlFor attribute for accessibility. Warning coming from ${n} ui/components/component-library/form-text-field/form-text-field.js`
                          )
                        : null,
                    label: a.default.string,
                    labelProps: a.default.object,
                    helpText: a.default.oneOfType([a.default.node, a.default.string]),
                    helpTextProps: a.default.object,
                    textFieldProps: a.default.object,
                    ...l.TextField.propTypes
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/form-text-field/form-text-field.js" }
    ],
    [
      4444,
      { "./form-text-field": 4443 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "FormTextField", {
                    enumerable: !0,
                    get: function () {
                      return r.FormTextField;
                    }
                  });
                var r = e("./form-text-field");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/form-text-field/index.js" }
    ],
    [
      4445,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.HeaderBase = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e("..");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.HeaderBase = a.default.forwardRef(
                  (
                    {
                      startAccessory: e,
                      endAccessory: t,
                      className: n = "",
                      children: r,
                      childrenWrapperProps: l,
                      startAccessoryWrapperProps: u,
                      endAccessoryWrapperProps: d,
                      ...p
                    },
                    f
                  ) => {
                    const m = (0, a.useRef)(null),
                      h = (0, a.useRef)(null),
                      [y, g] = (0, a.useState)();
                    (0, a.useEffect)(() => {
                      function e() {
                        if (m.current && h.current) {
                          const e = Math.max(m.current.scrollWidth, h.current.scrollWidth);
                          g(e);
                        } else
                          m.current && !h.current ? g(m.current.scrollWidth) : !m.current && h.current ? g(h.current.scrollWidth) : g(0);
                      }
                      return (
                        e(),
                        window.addEventListener("resize", e),
                        () => {
                          window.removeEventListener("resize", e);
                        }
                      );
                    }, [m, h, r]);
                    const b = (0, a.useMemo)(
                      () =>
                        e && !t && y
                          ? { marginRight: `${y}px`, width: `calc(100% - ${2 * y}px)` }
                          : !e && t && y
                          ? { marginLeft: `${y}px`, width: `calc(100% - ${2 * y}px)` }
                          : e && t && y
                          ? { width: `calc(100% - ${2 * y}px)` }
                          : {},
                      [y, e, t]
                    );
                    return a.default.createElement(
                      s.Box,
                      c(
                        {
                          className: (0, o.default)("mm-header-base", n),
                          ref: f,
                          display: i.Display.Flex,
                          justifyContent: i.JustifyContent.spaceBetween
                        },
                        p
                      ),
                      e && a.default.createElement(s.Box, c({ ref: m, style: r ? { minWidth: `${y}px` } : undefined }, u), e),
                      r && a.default.createElement(s.Box, c({ style: b }, l), r),
                      t &&
                        a.default.createElement(
                          s.Box,
                          c(
                            {
                              display: i.Display.Flex,
                              justifyContent: i.JustifyContent.flexEnd,
                              ref: h,
                              style: r ? { minWidth: `${y}px` } : undefined
                            },
                            d
                          ),
                          t
                        )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/header-base/header-base.tsx" }
    ],
    [
      4446,
      { "./header-base": 4445 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "HeaderBase", {
                    enumerable: !0,
                    get: function () {
                      return r.HeaderBase;
                    }
                  });
                var r = e("./header-base");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/header-base/index.ts" }
    ],
    [
      4447,
      { ".": 4449, "../../../helpers/constants/design-system": 4771, "../text": 4498, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.HelpText = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../text"),
                  l = e(".");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.HelpText = (0, a.forwardRef)(({ severity: e, color: t = i.TextColor.textDefault, className: n, children: r, ...c }, d) =>
                  a.default.createElement(
                    s.Text,
                    u(
                      {
                        className: (0, o.default)("mm-help-text", n ?? ""),
                        ref: d,
                        as: r && "object" == typeof r ? "div" : "p",
                        variant: i.TextVariant.bodyXs,
                        color: e
                          ? (() => {
                              switch (e) {
                                case l.HelpTextSeverity.Danger:
                                  return i.TextColor.errorDefault;
                                case l.HelpTextSeverity.Warning:
                                  return i.TextColor.warningDefault;
                                case l.HelpTextSeverity.Success:
                                  return i.TextColor.successDefault;
                                case l.HelpTextSeverity.Info:
                                  return i.TextColor.infoDefault;
                                default:
                                  return i.TextColor.textDefault;
                              }
                            })()
                          : t
                      },
                      c
                    ),
                    r
                  )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/help-text/help-text.tsx" }
    ],
    [
      4448,
      { "../../../helpers/constants/design-system": 4771 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.HelpTextSeverity = void 0);
                var r = e("../../../helpers/constants/design-system");
                n.HelpTextSeverity = (function (e) {
                  return (
                    (e[(e.Danger = r.Severity.Danger)] = "Danger"),
                    (e[(e.Warning = r.Severity.Warning)] = "Warning"),
                    (e[(e.Success = r.Severity.Success)] = "Success"),
                    (e[(e.Info = r.Severity.Info)] = "Info"),
                    e
                  );
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/help-text/help-text.types.ts" }
    ],
    [
      4449,
      { "./help-text": 4447, "./help-text.types": 4448 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "HelpText", {
                    enumerable: !0,
                    get: function () {
                      return r.HelpText;
                    }
                  }),
                  Object.defineProperty(n, "HelpTextSeverity", {
                    enumerable: !0,
                    get: function () {
                      return a.HelpTextSeverity;
                    }
                  });
                var r = e("./help-text"),
                  a = e("./help-text.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/help-text/index.ts" }
    ],
    [
      4450,
      { "../../../helpers/constants/design-system": 4771, "../box": 4422, "./icon.types": 4451, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Icon = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../box"),
                  s = e("./icon.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.Icon = r.default.forwardRef(
                  ({ name: e, size: t = s.IconSize.Md, color: n = o.IconColor.inherit, className: l = "", style: u, ...d }, p) =>
                    r.default.createElement(
                      i.Box,
                      c(
                        {
                          className: (0, a.default)(l, "mm-icon", `mm-icon--size-${t}`),
                          ref: p,
                          as: "span",
                          display: o.Display.InlineBlock,
                          color: n,
                          style: {
                            maskImage: `url('./images/icons/${String(e)}.svg')`,
                            WebkitMaskImage: `url('./images/icons/${String(e)}.svg')`,
                            ...u
                          }
                        },
                        d
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/icon/icon.tsx" }
    ],
    [
      4451,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.IconSize = n.IconName = void 0);
                (n.IconSize = (function (e) {
                  return (e.Xs = "xs"), (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), (e.Xl = "xl"), (e.Inherit = "inherit"), e;
                })({})),
                  (n.IconName = (function (e) {
                    return (
                      (e.AddSquare = "add-square"),
                      (e.Add = "add"),
                      (e.Arrow2Down = "arrow-2-down"),
                      (e.Arrow2Left = "arrow-2-left"),
                      (e.Arrow2Right = "arrow-2-right"),
                      (e.Arrow2Up = "arrow-2-up"),
                      (e.Arrow2UpRight = "arrow-2-up-right"),
                      (e.ArrowDoubleLeft = "arrow-double-left"),
                      (e.ArrowDoubleRight = "arrow-double-right"),
                      (e.ArrowDown = "arrow-down"),
                      (e.ArrowLeft = "arrow-left"),
                      (e.ArrowRight = "arrow-right"),
                      (e.ArrowUp = "arrow-up"),
                      (e.BankToken = "bank-token"),
                      (e.Bank = "bank"),
                      (e.Book = "book"),
                      (e.Bookmark = "bookmark"),
                      (e.Bridge = "bridge"),
                      (e.Calculator = "calculator"),
                      (e.CardPos = "card-pos"),
                      (e.CardToken = "card-token"),
                      (e.Card = "card"),
                      (e.Category = "category"),
                      (e.Chart = "chart"),
                      (e.CheckBold = "check-bold"),
                      (e.Check = "check"),
                      (e.Clock = "clock"),
                      (e.Close = "close"),
                      (e.CodeCircle = "code-circle"),
                      (e.Coin = "coin"),
                      (e.Confirmation = "confirmation"),
                      (e.Connect = "connect"),
                      (e.CopySuccess = "copy-success"),
                      (e.Copy = "copy"),
                      (e.Danger = "danger"),
                      (e.Dark = "dark"),
                      (e.Data = "data"),
                      (e.Diagram = "diagram"),
                      (e.DocumentCode = "document-code"),
                      (e.Edit = "edit"),
                      (e.Eraser = "eraser"),
                      (e.Ethereum = "ethereum"),
                      (e.Expand = "expand"),
                      (e.Explore = "explore"),
                      (e.Export = "export"),
                      (e.EyeSlash = "eye-slash"),
                      (e.Eye = "eye"),
                      (e.Filter = "filter"),
                      (e.Flag = "flag"),
                      (e.FlashSlash = "flash-slash"),
                      (e.Flash = "flash"),
                      (e.FullCircle = "full-circle"),
                      (e.Gas = "gas"),
                      (e.GlobalSearch = "global-search"),
                      (e.Global = "global"),
                      (e.Graph = "graph"),
                      (e.Hardware = "hardware"),
                      (e.Heart = "heart"),
                      (e.Hierarchy = "hierarchy"),
                      (e.Home = "home"),
                      (e.Import = "import"),
                      (e.Info = "info"),
                      (e.Key = "key"),
                      (e.Light = "light"),
                      (e.Link = "link"),
                      (e.Loading = "loading"),
                      (e.LockCircle = "lock-circle"),
                      (e.LockSlash = "lock-slash"),
                      (e.Lock = "lock"),
                      (e.Login = "login"),
                      (e.Logout = "logout"),
                      (e.Menu = "menu"),
                      (e.MessageQuestion = "message-question"),
                      (e.Messages = "messages"),
                      (e.MinusBold = "minus-bold"),
                      (e.MinusSquare = "minus-square"),
                      (e.Minus = "minus"),
                      (e.Mobile = "mobile"),
                      (e.Money = "money"),
                      (e.Monitor = "monitor"),
                      (e.MoreHorizontal = "more-horizontal"),
                      (e.MoreVertical = "more-vertical"),
                      (e.NotificationCircle = "notification-circle"),
                      (e.Notification = "notification"),
                      (e.PasswordCheck = "password-check"),
                      (e.People = "people"),
                      (e.ProgrammingArrows = "programming-arrows"),
                      (e.Custody = "custody"),
                      (e.Question = "question"),
                      (e.Received = "received"),
                      (e.Refresh = "refresh"),
                      (e.Save = "save"),
                      (e.ScanBarcode = "scan-barcode"),
                      (e.ScanFocus = "scan-focus"),
                      (e.Scan = "scan"),
                      (e.Scroll = "scroll"),
                      (e.Search = "search"),
                      (e.SecurityCard = "security-card"),
                      (e.SecurityCross = "security-cross"),
                      (e.SecurityKey = "security-key"),
                      (e.SecuritySearch = "security-search"),
                      (e.SecuritySlash = "security-slash"),
                      (e.SecurityTick = "security-tick"),
                      (e.SecurityTime = "security-time"),
                      (e.SecurityUser = "security-user"),
                      (e.Security = "security"),
                      (e.Send1 = "send-1"),
                      (e.Send2 = "send-2"),
                      (e.Setting = "setting"),
                      (e.Slash = "slash"),
                      (e.SnapsMobile = "snaps-mobile"),
                      (e.SnapsPlus = "snaps-plus"),
                      (e.Snaps = "snaps"),
                      (e.Speedometer = "speedometer"),
                      (e.Star = "star"),
                      (e.Stake = "stake"),
                      (e.Student = "student"),
                      (e.SwapHorizontal = "swap-horizontal"),
                      (e.SwapVertical = "swap-vertical"),
                      (e.Tag = "tag"),
                      (e.Tilde = "tilde"),
                      (e.Timer = "timer"),
                      (e.Trash = "trash"),
                      (e.TrendDown = "trend-down"),
                      (e.TrendUp = "trend-up"),
                      (e.UserCircleAdd = "user-circle-add"),
                      (e.UserCircle = "user-circle"),
                      (e.User = "user"),
                      (e.WalletCard = "wallet-card"),
                      (e.WalletMoney = "wallet-money"),
                      (e.Wallet = "wallet"),
                      (e.Warning = "warning"),
                      (e.Twitter = "twitter"),
                      (e.QrCode = "qr-code"),
                      (e.UserCheck = "user-check"),
                      (e.Ban = "ban"),
                      (e.Bold = "bold"),
                      (e.CircleX = "circle-x"),
                      (e.Download = "download"),
                      (e.File = "file"),
                      (e.Flask = "flask"),
                      (e.Plug = "plug"),
                      (e.Share = "share"),
                      (e.Square = "square"),
                      (e.Tint = "tint"),
                      (e.Upload = "upload"),
                      (e.Usb = "usb"),
                      (e.Wifi = "wifi"),
                      (e.PlusMinus = "plus-minus"),
                      e
                    );
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/icon/icon.types.ts" }
    ],
    [
      4452,
      { "./icon": 4450, "./icon.types": 4451 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Icon", {
                    enumerable: !0,
                    get: function () {
                      return r.Icon;
                    }
                  }),
                  Object.defineProperty(n, "IconName", {
                    enumerable: !0,
                    get: function () {
                      return a.IconName;
                    }
                  }),
                  Object.defineProperty(n, "IconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.IconSize;
                    }
                  });
                var r = e("./icon"),
                  a = e("./icon.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/icon/index.ts" }
    ],
    [
      4453,
      {
        "./avatar-account": 4394,
        "./avatar-base": 4397,
        "./avatar-favicon": 4400,
        "./avatar-icon": 4403,
        "./avatar-network": 4406,
        "./avatar-token": 4409,
        "./badge-wrapper": 4412,
        "./banner-alert": 4415,
        "./banner-base": 4417,
        "./banner-tip": 4420,
        "./box": 4422,
        "./button": 4440,
        "./button-base": 4425,
        "./button-icon": 4428,
        "./button-link": 4431,
        "./button-primary": 4434,
        "./button-secondary": 4437,
        "./checkbox": 4442,
        "./form-text-field": 4444,
        "./header-base": 4446,
        "./help-text": 4449,
        "./icon": 4452,
        "./input": 4454,
        "./label": 4457,
        "./modal": 4468,
        "./modal-content": 4459,
        "./modal-focus": 4462,
        "./modal-header": 4464,
        "./modal-overlay": 4466,
        "./picker-network": 4471,
        "./popover": 4475,
        "./popover-header": 4473,
        "./select-button": 4478,
        "./select-option": 4481,
        "./select-wrapper": 4483,
        "./tag": 4488,
        "./tag-url": 4486,
        "./text": 4498,
        "./text-field": 4495,
        "./text-field-search": 4490,
        "./text-field/deprecated": 4492
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccount;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountDiameter", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccountDiameter;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountSize", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccountSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarAccountVariant", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarAccountVariant;
                    }
                  }),
                  Object.defineProperty(n, "AvatarBase", {
                    enumerable: !0,
                    get: function () {
                      return l.AvatarBase;
                    }
                  }),
                  Object.defineProperty(n, "AvatarBaseSize", {
                    enumerable: !0,
                    get: function () {
                      return l.AvatarBaseSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarFavicon", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarFavicon;
                    }
                  }),
                  Object.defineProperty(n, "AvatarFaviconSize", {
                    enumerable: !0,
                    get: function () {
                      return a.AvatarFaviconSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarIcon", {
                    enumerable: !0,
                    get: function () {
                      return o.AvatarIcon;
                    }
                  }),
                  Object.defineProperty(n, "AvatarIconSize", {
                    enumerable: !0,
                    get: function () {
                      return o.AvatarIconSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarNetwork", {
                    enumerable: !0,
                    get: function () {
                      return i.AvatarNetwork;
                    }
                  }),
                  Object.defineProperty(n, "AvatarNetworkSize", {
                    enumerable: !0,
                    get: function () {
                      return i.AvatarNetworkSize;
                    }
                  }),
                  Object.defineProperty(n, "AvatarToken", {
                    enumerable: !0,
                    get: function () {
                      return s.AvatarToken;
                    }
                  }),
                  Object.defineProperty(n, "AvatarTokenSize", {
                    enumerable: !0,
                    get: function () {
                      return s.AvatarTokenSize;
                    }
                  }),
                  Object.defineProperty(n, "BUTTON_SIZES", {
                    enumerable: !0,
                    get: function () {
                      return d.BUTTON_SIZES;
                    }
                  }),
                  Object.defineProperty(n, "BUTTON_VARIANT", {
                    enumerable: !0,
                    get: function () {
                      return d.BUTTON_VARIANT;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapper", {
                    enumerable: !0,
                    get: function () {
                      return c.BadgeWrapper;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapperAnchorElementShape", {
                    enumerable: !0,
                    get: function () {
                      return c.BadgeWrapperAnchorElementShape;
                    }
                  }),
                  Object.defineProperty(n, "BadgeWrapperPosition", {
                    enumerable: !0,
                    get: function () {
                      return c.BadgeWrapperPosition;
                    }
                  }),
                  Object.defineProperty(n, "BannerAlert", {
                    enumerable: !0,
                    get: function () {
                      return R.BannerAlert;
                    }
                  }),
                  Object.defineProperty(n, "BannerAlertSeverity", {
                    enumerable: !0,
                    get: function () {
                      return R.BannerAlertSeverity;
                    }
                  }),
                  Object.defineProperty(n, "BannerBase", {
                    enumerable: !0,
                    get: function () {
                      return B.BannerBase;
                    }
                  }),
                  Object.defineProperty(n, "BannerTip", {
                    enumerable: !0,
                    get: function () {
                      return D.BannerTip;
                    }
                  }),
                  Object.defineProperty(n, "BannerTipLogoType", {
                    enumerable: !0,
                    get: function () {
                      return D.BannerTipLogoType;
                    }
                  }),
                  Object.defineProperty(n, "Box", {
                    enumerable: !0,
                    get: function () {
                      return u.Box;
                    }
                  }),
                  Object.defineProperty(n, "Button", {
                    enumerable: !0,
                    get: function () {
                      return d.Button;
                    }
                  }),
                  Object.defineProperty(n, "ButtonBase", {
                    enumerable: !0,
                    get: function () {
                      return p.ButtonBase;
                    }
                  }),
                  Object.defineProperty(n, "ButtonBaseSize", {
                    enumerable: !0,
                    get: function () {
                      return p.ButtonBaseSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonIcon", {
                    enumerable: !0,
                    get: function () {
                      return f.ButtonIcon;
                    }
                  }),
                  Object.defineProperty(n, "ButtonIconSize", {
                    enumerable: !0,
                    get: function () {
                      return f.ButtonIconSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonLink", {
                    enumerable: !0,
                    get: function () {
                      return m.ButtonLink;
                    }
                  }),
                  Object.defineProperty(n, "ButtonLinkSize", {
                    enumerable: !0,
                    get: function () {
                      return m.ButtonLinkSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonPrimary", {
                    enumerable: !0,
                    get: function () {
                      return h.ButtonPrimary;
                    }
                  }),
                  Object.defineProperty(n, "ButtonPrimarySize", {
                    enumerable: !0,
                    get: function () {
                      return h.ButtonPrimarySize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSecondary", {
                    enumerable: !0,
                    get: function () {
                      return y.ButtonSecondary;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSecondarySize", {
                    enumerable: !0,
                    get: function () {
                      return y.ButtonSecondarySize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonSize", {
                    enumerable: !0,
                    get: function () {
                      return d.ButtonSize;
                    }
                  }),
                  Object.defineProperty(n, "ButtonVariant", {
                    enumerable: !0,
                    get: function () {
                      return d.ButtonVariant;
                    }
                  }),
                  Object.defineProperty(n, "Checkbox", {
                    enumerable: !0,
                    get: function () {
                      return g.Checkbox;
                    }
                  }),
                  Object.defineProperty(n, "FormTextField", {
                    enumerable: !0,
                    get: function () {
                      return b.FormTextField;
                    }
                  }),
                  Object.defineProperty(n, "HeaderBase", {
                    enumerable: !0,
                    get: function () {
                      return v.HeaderBase;
                    }
                  }),
                  Object.defineProperty(n, "HelpText", {
                    enumerable: !0,
                    get: function () {
                      return T.HelpText;
                    }
                  }),
                  Object.defineProperty(n, "HelpTextSeverity", {
                    enumerable: !0,
                    get: function () {
                      return T.HelpTextSeverity;
                    }
                  }),
                  Object.defineProperty(n, "Icon", {
                    enumerable: !0,
                    get: function () {
                      return E.Icon;
                    }
                  }),
                  Object.defineProperty(n, "IconName", {
                    enumerable: !0,
                    get: function () {
                      return E.IconName;
                    }
                  }),
                  Object.defineProperty(n, "IconSize", {
                    enumerable: !0,
                    get: function () {
                      return E.IconSize;
                    }
                  }),
                  Object.defineProperty(n, "Input", {
                    enumerable: !0,
                    get: function () {
                      return k.Input;
                    }
                  }),
                  Object.defineProperty(n, "InputType", {
                    enumerable: !0,
                    get: function () {
                      return k.InputType;
                    }
                  }),
                  Object.defineProperty(n, "InvisibleCharacter", {
                    enumerable: !0,
                    get: function () {
                      return _.InvisibleCharacter;
                    }
                  }),
                  Object.defineProperty(n, "Label", {
                    enumerable: !0,
                    get: function () {
                      return w.Label;
                    }
                  }),
                  Object.defineProperty(n, "Modal", {
                    enumerable: !0,
                    get: function () {
                      return j.Modal;
                    }
                  }),
                  Object.defineProperty(n, "ModalContent", {
                    enumerable: !0,
                    get: function () {
                      return P.ModalContent;
                    }
                  }),
                  Object.defineProperty(n, "ModalContentSize", {
                    enumerable: !0,
                    get: function () {
                      return P.ModalContentSize;
                    }
                  }),
                  Object.defineProperty(n, "ModalFocus", {
                    enumerable: !0,
                    get: function () {
                      return M.ModalFocus;
                    }
                  }),
                  Object.defineProperty(n, "ModalHeader", {
                    enumerable: !0,
                    get: function () {
                      return $.ModalHeader;
                    }
                  }),
                  Object.defineProperty(n, "ModalOverlay", {
                    enumerable: !0,
                    get: function () {
                      return I.ModalOverlay;
                    }
                  }),
                  Object.defineProperty(n, "PickerNetwork", {
                    enumerable: !0,
                    get: function () {
                      return O.PickerNetwork;
                    }
                  }),
                  Object.defineProperty(n, "Popover", {
                    enumerable: !0,
                    get: function () {
                      return F.Popover;
                    }
                  }),
                  Object.defineProperty(n, "PopoverHeader", {
                    enumerable: !0,
                    get: function () {
                      return L.PopoverHeader;
                    }
                  }),
                  Object.defineProperty(n, "PopoverPosition", {
                    enumerable: !0,
                    get: function () {
                      return F.PopoverPosition;
                    }
                  }),
                  Object.defineProperty(n, "PopoverRole", {
                    enumerable: !0,
                    get: function () {
                      return F.PopoverRole;
                    }
                  }),
                  Object.defineProperty(n, "SelectButton", {
                    enumerable: !0,
                    get: function () {
                      return z.SelectButton;
                    }
                  }),
                  Object.defineProperty(n, "SelectContext", {
                    enumerable: !0,
                    get: function () {
                      return U.SelectContext;
                    }
                  }),
                  Object.defineProperty(n, "SelectOption", {
                    enumerable: !0,
                    get: function () {
                      return V.SelectOption;
                    }
                  }),
                  Object.defineProperty(n, "SelectWrapper", {
                    enumerable: !0,
                    get: function () {
                      return U.SelectWrapper;
                    }
                  }),
                  Object.defineProperty(n, "TEXT_FIELD_SIZES", {
                    enumerable: !0,
                    get: function () {
                      return A.TEXT_FIELD_SIZES;
                    }
                  }),
                  Object.defineProperty(n, "TEXT_FIELD_TYPES", {
                    enumerable: !0,
                    get: function () {
                      return A.TEXT_FIELD_TYPES;
                    }
                  }),
                  Object.defineProperty(n, "Tag", {
                    enumerable: !0,
                    get: function () {
                      return x.Tag;
                    }
                  }),
                  Object.defineProperty(n, "TagUrl", {
                    enumerable: !0,
                    get: function () {
                      return S.TagUrl;
                    }
                  }),
                  Object.defineProperty(n, "Text", {
                    enumerable: !0,
                    get: function () {
                      return _.Text;
                    }
                  }),
                  Object.defineProperty(n, "TextDirection", {
                    enumerable: !0,
                    get: function () {
                      return _.TextDirection;
                    }
                  }),
                  Object.defineProperty(n, "TextField", {
                    enumerable: !0,
                    get: function () {
                      return C.TextField;
                    }
                  }),
                  Object.defineProperty(n, "TextFieldSearch", {
                    enumerable: !0,
                    get: function () {
                      return N.TextFieldSearch;
                    }
                  }),
                  Object.defineProperty(n, "TextFieldSize", {
                    enumerable: !0,
                    get: function () {
                      return C.TextFieldSize;
                    }
                  }),
                  Object.defineProperty(n, "TextFieldType", {
                    enumerable: !0,
                    get: function () {
                      return C.TextFieldType;
                    }
                  }),
                  Object.defineProperty(n, "ValidTag", {
                    enumerable: !0,
                    get: function () {
                      return _.ValidTag;
                    }
                  }),
                  Object.defineProperty(n, "useModalContext", {
                    enumerable: !0,
                    get: function () {
                      return j.useModalContext;
                    }
                  }),
                  Object.defineProperty(n, "useSelectContext", {
                    enumerable: !0,
                    get: function () {
                      return U.useSelectContext;
                    }
                  });
                var r = e("./avatar-account"),
                  a = e("./avatar-favicon"),
                  o = e("./avatar-icon"),
                  i = e("./avatar-network"),
                  s = e("./avatar-token"),
                  l = e("./avatar-base"),
                  c = e("./badge-wrapper"),
                  u = e("./box"),
                  d = e("./button"),
                  p = e("./button-base"),
                  f = e("./button-icon"),
                  m = e("./button-link"),
                  h = e("./button-primary"),
                  y = e("./button-secondary"),
                  g = e("./checkbox"),
                  b = e("./form-text-field"),
                  v = e("./header-base"),
                  T = e("./help-text"),
                  E = e("./icon"),
                  w = e("./label"),
                  O = e("./picker-network"),
                  x = e("./tag"),
                  S = e("./tag-url"),
                  _ = e("./text"),
                  k = e("./input"),
                  C = e("./text-field"),
                  A = e("./text-field/deprecated"),
                  N = e("./text-field-search"),
                  P = e("./modal-content"),
                  I = e("./modal-overlay"),
                  M = e("./modal-focus"),
                  j = e("./modal"),
                  B = e("./banner-base"),
                  R = e("./banner-alert"),
                  D = e("./banner-tip"),
                  L = e("./popover-header"),
                  F = e("./popover"),
                  $ = e("./modal-header"),
                  z = e("./select-button"),
                  V = e("./select-option"),
                  U = e("./select-wrapper");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/index.js" }
    ],
    [
      4454,
      { "./input": 4455, "./input.types": 4456 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Input", {
                    enumerable: !0,
                    get: function () {
                      return r.Input;
                    }
                  }),
                  Object.defineProperty(n, "InputType", {
                    enumerable: !0,
                    get: function () {
                      return a.InputType;
                    }
                  });
                var r = e("./input"),
                  a = e("./input.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/input/index.ts" }
    ],
    [
      4455,
      { "../../../helpers/constants/design-system": 4771, "../text": 4498, "./input.types": 4456, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Input = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../text"),
                  s = e("./input.types");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.Input = r.default.forwardRef(
                  (
                    {
                      autoComplete: e,
                      autoFocus: t,
                      className: n = "",
                      defaultValue: l,
                      disabled: u,
                      error: d,
                      id: p,
                      maxLength: f,
                      name: m,
                      onBlur: h,
                      onChange: y,
                      onFocus: g,
                      placeholder: b,
                      readOnly: v,
                      required: T,
                      type: E = s.InputType.Text,
                      value: w,
                      textVariant: O = o.TextVariant.bodyMd,
                      disableStateStyles: x,
                      ...S
                    },
                    _
                  ) =>
                    r.default.createElement(
                      i.Text,
                      c(
                        {
                          className: (0, a.default)(
                            "mm-input",
                            { "mm-input--disable-state-styles": Boolean(x), "mm-input--disabled": Boolean(u) && Boolean(x) },
                            n
                          )
                        },
                        d && { "aria-invalid": d },
                        {
                          as: "input",
                          autoComplete: e ? "on" : "off",
                          autoFocus: t,
                          backgroundColor: o.BackgroundColor.transparent,
                          borderStyle: o.BorderStyle.none,
                          defaultValue: l,
                          disabled: u,
                          id: p,
                          margin: 0,
                          maxLength: f,
                          name: m,
                          onBlur: h,
                          onChange: y,
                          onFocus: g,
                          padding: 0,
                          placeholder: b,
                          readOnly: v,
                          ref: _,
                          required: T,
                          value: w,
                          variant: O,
                          type: E
                        },
                        S
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/input/input.tsx" }
    ],
    [
      4456,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.InputType = void 0);
                n.InputType = (function (e) {
                  return (e.Text = "text"), (e.Number = "number"), (e.Password = "password"), (e.Search = "search"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/input/input.types.ts" }
    ],
    [
      4457,
      { "./label": 4458 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Label", {
                    enumerable: !0,
                    get: function () {
                      return r.Label;
                    }
                  });
                var r = e("./label");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/label/index.ts" }
    ],
    [
      4458,
      { "../../../helpers/constants/design-system": 4771, "../text": 4498, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Label = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../text"),
                  i = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                n.Label = r.default.forwardRef(({ htmlFor: e, className: t, children: n, ...s }, c) =>
                  r.default.createElement(
                    o.Text,
                    l(
                      {
                        className: (0, a.default)("mm-label", { "mm-label--html-for": Boolean(e) }, t ?? ""),
                        as: "label",
                        htmlFor: e,
                        variant: i.TextVariant.bodyMd,
                        fontWeight: i.FontWeight.Medium,
                        display: i.Display.InlineFlex,
                        alignItems: i.AlignItems.center,
                        ref: c
                      },
                      s
                    ),
                    n
                  )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/label/label.tsx" }
    ],
    [
      4459,
      { "./modal-content": 4460, "./modal-content.types": 4461 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ModalContent", {
                    enumerable: !0,
                    get: function () {
                      return r.ModalContent;
                    }
                  }),
                  Object.defineProperty(n, "ModalContentSize", {
                    enumerable: !0,
                    get: function () {
                      return a.ModalContentSize;
                    }
                  });
                var r = e("./modal-content"),
                  a = e("./modal-content.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-content/index.ts" }
    ],
    [
      4460,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, "./modal-content.types": 4461, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ModalContent = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e(".."),
                  l = e("./modal-content.types");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.ModalContent = a.default.forwardRef(
                  ({ className: e = "", children: t, size: n = l.ModalContentSize.Sm, modalDialogProps: r, ...c }, d) => {
                    const {
                        onClose: p,
                        isClosedOnEscapeKey: f,
                        isClosedOnOutsideClick: m,
                        initialFocusRef: h,
                        finalFocusRef: y,
                        restoreFocus: g,
                        autoFocus: b
                      } = (0, s.useModalContext)(),
                      v = (0, a.useRef)(null),
                      T = (e) => {
                        f && "Escape" === e.key && p();
                      },
                      E = (e) => {
                        (m && e.target.closest(".mm-popover")) || (m && null != v && v.current && !v.current.contains(e.target) && p());
                      };
                    return (
                      (0, a.useEffect)(
                        () => (
                          document.addEventListener("keydown", T),
                          document.addEventListener("mousedown", E),
                          () => {
                            document.removeEventListener("keydown", T), document.removeEventListener("mousedown", E);
                          }
                        ),
                        []
                      ),
                      a.default.createElement(
                        s.ModalFocus,
                        { initialFocusRef: h, finalFocusRef: y, restoreFocus: g, autoFocus: b },
                        a.default.createElement(
                          s.Box,
                          u(
                            {
                              className: (0, o.default)("mm-modal-content", e),
                              ref: d,
                              display: i.Display.Flex,
                              width: i.BlockSize.Screen,
                              height: i.BlockSize.Screen,
                              justifyContent: i.JustifyContent.center,
                              alignItems: i.AlignItems.flexStart,
                              paddingRight: 4,
                              paddingLeft: 4,
                              paddingTop: [4, 8, 12],
                              paddingBottom: [4, 8, 12]
                            },
                            c
                          ),
                          a.default.createElement(
                            s.Box,
                            u(
                              {
                                as: "section",
                                role: "dialog",
                                "aria-modal": "true",
                                backgroundColor: i.BackgroundColor.backgroundDefault,
                                borderRadius: i.BorderRadius.LG,
                                width: i.BlockSize.Full,
                                padding: 4,
                                ref: v
                              },
                              r,
                              {
                                className: (0, o.default)(
                                  "mm-modal-content__dialog",
                                  `mm-modal-content__dialog--size-${n}`,
                                  null == r ? void 0 : r.className
                                )
                              }
                            ),
                            t
                          )
                        )
                      )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-content/modal-content.tsx" }
    ],
    [
      4461,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ModalContentSize = void 0);
                n.ModalContentSize = (function (e) {
                  return (e.Sm = "sm"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-content/modal-content.types.ts" }
    ],
    [
      4462,
      { "./modal-focus": 4463 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ModalFocus", {
                    enumerable: !0,
                    get: function () {
                      return r.ModalFocus;
                    }
                  });
                var r = e("./modal-focus");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-focus/index.ts" }
    ],
    [
      4463,
      { react: 3690, "react-focus-lock": 3544 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ModalFocus = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("react-focus-lock")) && r.__esModule ? r : { default: r };
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function s() {
                  return (
                    (s = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    s.apply(this, arguments)
                  );
                }
                const l = o.default.default ?? o.default,
                  c = ({ initialFocusRef: e, finalFocusRef: t, restoreFocus: n, children: r, autoFocus: o, ...i }) => {
                    const c = (0, a.useCallback)(() => {
                        null != e && e.current && e.current.focus();
                      }, [e]),
                      u = (0, a.useCallback)(() => {
                        var e;
                        null == t || null === (e = t.current) || void 0 === e || e.focus();
                      }, [t]),
                      d = n && !t;
                    return a.default.createElement(l, s({ autoFocus: o, onActivation: c, onDeactivation: u, returnFocus: d }, i), r);
                  };
                (n.ModalFocus = c), (c.displayName = "ModalFocus");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-focus/modal-focus.tsx" }
    ],
    [
      4464,
      { "./modal-header": 4465 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ModalHeader", {
                    enumerable: !0,
                    get: function () {
                      return r.ModalHeader;
                    }
                  });
                var r = e("./modal-header");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-header/index.ts" }
    ],
    [
      4465,
      {
        "..": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ModalHeader = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.ModalHeader = ({
                  children: e,
                  className: t = "",
                  startAccessory: n,
                  endAccessory: l,
                  onClose: u,
                  closeButtonProps: d,
                  onBack: p,
                  backButtonProps: f,
                  ...m
                }) => {
                  const h = (0, s.useI18nContext)();
                  return r.default.createElement(
                    o.HeaderBase,
                    c(
                      {
                        className: (0, a.default)("mm-modal-header", t),
                        startAccessory:
                          n ||
                          (p &&
                            r.default.createElement(
                              o.ButtonIcon,
                              c({ iconName: o.IconName.ArrowLeft, ariaLabel: h("back"), size: o.ButtonIconSize.Sm, onClick: p }, f)
                            )),
                        endAccessory:
                          l ||
                          (u &&
                            r.default.createElement(
                              o.ButtonIcon,
                              c({ iconName: o.IconName.Close, ariaLabel: h("close"), size: o.ButtonIconSize.Sm, onClick: u }, d)
                            ))
                      },
                      m
                    ),
                    "string" == typeof e
                      ? r.default.createElement(
                          o.Text,
                          { as: "header", variant: i.TextVariant.headingSm, textAlign: i.TextAlign.Center },
                          e
                        )
                      : e
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-header/modal-header.tsx" }
    ],
    [
      4466,
      { "./modal-overlay": 4467 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ModalOverlay", {
                    enumerable: !0,
                    get: function () {
                      return r.ModalOverlay;
                    }
                  });
                var r = e("./modal-overlay");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-overlay/index.ts" }
    ],
    [
      4467,
      { "../../../helpers/constants/design-system": 4771, "../box": 4422, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.ModalOverlay = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../box");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                const c = (n.ModalOverlay = r.default.forwardRef(({ onClick: e, className: t = "", ...n }, s) =>
                  r.default.createElement(
                    i.Box,
                    l(
                      {
                        className: (0, a.default)("mm-modal-overlay", t),
                        ref: s,
                        backgroundColor: o.BackgroundColor.overlayDefault,
                        width: o.BlockSize.Full,
                        height: o.BlockSize.Full,
                        onClick: e,
                        "aria-hidden": "true"
                      },
                      n
                    )
                  )
                ));
                n.default = c;
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal-overlay/modal-overlay.tsx" }
    ],
    [
      4468,
      { "./modal": 4470, "./modal.context": 4469 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Modal", {
                    enumerable: !0,
                    get: function () {
                      return r.Modal;
                    }
                  }),
                  Object.defineProperty(n, "useModalContext", {
                    enumerable: !0,
                    get: function () {
                      return a.useModalContext;
                    }
                  });
                var r = e("./modal"),
                  a = e("./modal.context");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal/index.ts" }
    ],
    [
      4469,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.useModalContext = n.ModalContext = void 0);
                var r = e("react");
                const a = (n.ModalContext = (0, r.createContext)(undefined));
                n.useModalContext = () => {
                  const e = (0, r.useContext)(a);
                  if (!e)
                    throw new Error(
                      'useModalContext must be used within a ModalProvider, Seems you forgot to wrap the components in "<Modal />"'
                    );
                  return e;
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal/modal.context.ts" }
    ],
    [
      447,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.version = void 0), (n.version = "hdnode/5.7.0");
              };
            };
      },
      { package: "@ethersproject/hdnode", file: "node_modules/@ethersproject/hdnode/lib/_version.js" }
    ],
    [
      4470,
      { "./modal.context": 4469, classnames: 2414, react: 3690, "react-dom": 3532 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.Modal = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = s(e("react-dom")),
                  o = s(e("classnames")),
                  i = e("./modal.context");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                const u = (n.Modal = (0, r.forwardRef)(
                  (
                    {
                      className: e = "",
                      isOpen: t,
                      onClose: n,
                      children: s,
                      isClosedOnOutsideClick: l = !0,
                      isClosedOnEscapeKey: u = !0,
                      autoFocus: d = !0,
                      initialFocusRef: p,
                      finalFocusRef: f,
                      restoreFocus: m,
                      ...h
                    },
                    y
                  ) => {
                    const g = {
                      isOpen: t,
                      onClose: n,
                      isClosedOnOutsideClick: l,
                      isClosedOnEscapeKey: u,
                      autoFocus: d,
                      initialFocusRef: p,
                      finalFocusRef: f,
                      restoreFocus: m
                    };
                    return t
                      ? a.default.createPortal(
                          r.default.createElement(
                            i.ModalContext.Provider,
                            { value: g },
                            r.default.createElement("div", c({ className: (0, o.default)("mm-modal", e), ref: y }, h), s)
                          ),
                          document.body
                        )
                      : null;
                  }
                ));
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/modal/modal.tsx" }
    ],
    [
      4471,
      { "./picker-network": 4472 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "PickerNetwork", {
                    enumerable: !0,
                    get: function () {
                      return r.PickerNetwork;
                    }
                  });
                var r = e("./picker-network");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/picker-network/index.ts" }
    ],
    [
      4472,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.PickerNetwork = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("..");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                n.PickerNetwork = r.default.forwardRef(
                  ({ className: e = "", avatarNetworkProps: t, iconProps: n, label: s, labelProps: c, src: u, ...d }, p) =>
                    r.default.createElement(
                      i.Box,
                      l(
                        {
                          className: (0, a.default)("mm-picker-network", e),
                          ref: p,
                          as: "button",
                          backgroundColor: o.BackgroundColor.backgroundAlternative,
                          alignItems: o.AlignItems.center,
                          paddingLeft: 2,
                          paddingRight: 4,
                          gap: 2,
                          borderRadius: o.BorderRadius.pill,
                          display: o.Display.Flex
                        },
                        d
                      ),
                      r.default.createElement(
                        i.AvatarNetwork,
                        l({ className: "mm-picker-network__avatar-network", src: u, name: s, size: i.AvatarNetworkSize.Xs }, t)
                      ),
                      r.default.createElement(i.Text, l({ as: "span", ellipsis: !0, variant: o.TextVariant.bodySm }, c), s),
                      r.default.createElement(
                        i.Icon,
                        l(
                          {
                            className: "mm-picker-network__arrow-down-icon",
                            name: i.IconName.ArrowDown,
                            color: o.IconColor.iconDefault,
                            size: i.IconSize.Xs,
                            marginLeft: "auto"
                          },
                          n
                        )
                      )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/picker-network/picker-network.tsx" }
    ],
    [
      4473,
      { "./popover-header": 4474 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "PopoverHeader", {
                    enumerable: !0,
                    get: function () {
                      return r.PopoverHeader;
                    }
                  });
                var r = e("./popover-header");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover-header/index.ts" }
    ],
    [
      4474,
      {
        "..": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.PopoverHeader = void 0);
                var r = l(e("react")),
                  a = l(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.PopoverHeader = ({
                  children: e,
                  className: t = "",
                  startAccessory: n,
                  endAccessory: l,
                  onClose: u,
                  closeButtonProps: d,
                  onBack: p,
                  backButtonProps: f,
                  ...m
                }) => {
                  const h = (0, s.useI18nContext)();
                  return r.default.createElement(
                    o.HeaderBase,
                    c(
                      {
                        className: (0, a.default)("mm-popover-header", t),
                        startAccessory:
                          n ||
                          (p &&
                            r.default.createElement(
                              o.ButtonIcon,
                              c(
                                {
                                  iconName: o.IconName.ArrowLeft,
                                  color: i.IconColor.inherit,
                                  ariaLabel: h("back"),
                                  size: o.ButtonIconSize.Sm,
                                  onClick: p
                                },
                                f
                              )
                            )),
                        endAccessory:
                          l ||
                          (u &&
                            r.default.createElement(
                              o.ButtonIcon,
                              c(
                                {
                                  iconName: o.IconName.Close,
                                  color: i.IconColor.inherit,
                                  ariaLabel: h("close"),
                                  size: o.ButtonIconSize.Sm,
                                  onClick: u
                                },
                                d
                              )
                            ))
                      },
                      m
                    ),
                    "string" == typeof e
                      ? r.default.createElement(
                          o.Text,
                          { variant: i.TextVariant.headingSm, textAlign: i.TextAlign.Center, color: i.TextColor.inherit },
                          e
                        )
                      : e
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover-header/popover-header.tsx" }
    ],
    [
      4475,
      { "./popover": 4476, "./popover.types": 4477 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Popover", {
                    enumerable: !0,
                    get: function () {
                      return r.Popover;
                    }
                  }),
                  Object.defineProperty(n, "PopoverPosition", {
                    enumerable: !0,
                    get: function () {
                      return a.PopoverPosition;
                    }
                  }),
                  Object.defineProperty(n, "PopoverRole", {
                    enumerable: !0,
                    get: function () {
                      return a.PopoverRole;
                    }
                  });
                var r = e("./popover"),
                  a = e("./popover.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover/index.ts" }
    ],
    [
      4476,
      {
        "..": 4453,
        "../../../helpers/constants/design-system": 4771,
        "./popover.types": 4477,
        classnames: 2414,
        react: 3690,
        "react-dom": 3532,
        "react-popper": 3638
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Popover = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = e("react-dom"),
                  i = e("react-popper"),
                  s = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  l = e("../../../helpers/constants/design-system"),
                  c = e(".."),
                  u = e("./popover.types");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p() {
                  return (
                    (p = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    p.apply(this, arguments)
                  );
                }
                n.Popover = a.default.forwardRef(
                  (
                    {
                      children: e,
                      className: t = "",
                      position: n = u.PopoverPosition.Auto,
                      role: r = u.PopoverRole.Tooltip,
                      hasArrow: d = !1,
                      matchWidth: f,
                      preventOverflow: m = !1,
                      offset: h = [0, 8],
                      flip: y = !1,
                      referenceHidden: g = !0,
                      referenceElement: b,
                      isOpen: v,
                      title: T,
                      isPortal: E = !1,
                      arrowProps: w,
                      onClickOutside: O,
                      onPressEscKey: x,
                      ...S
                    },
                    _
                  ) => {
                    const [k, C] = (0, a.useState)(null),
                      [A, N] = (0, a.useState)(null),
                      P = a.default.useRef(null),
                      { styles: I, attributes: M } = (0, i.usePopper)(b, k, {
                        placement: n,
                        modifiers: [
                          { name: "preventOverflow", enabled: n === u.PopoverPosition.Auto || m },
                          { name: "flip", enabled: n === u.PopoverPosition.Auto || y },
                          { name: "arrow", enabled: d, options: { element: A } },
                          { name: "offset", options: { offset: h } }
                        ]
                      }),
                      j = { width: f ? (null == b ? void 0 : b.clientWidth) : "auto" },
                      B = (e) => {
                        "Escape" === e.key && x && x();
                      },
                      R = (e) => {
                        v && P.current && !P.current.contains(e.target) && O && O();
                      };
                    (0, a.useEffect)(
                      () => (
                        document.addEventListener("keydown", B),
                        v ? document.addEventListener("click", R) : document.removeEventListener("click", R),
                        () => {
                          document.removeEventListener("keydown", B), document.removeEventListener("click", R);
                        }
                      ),
                      [x, v, O]
                    );
                    const D = a.default.createElement(
                      c.Box,
                      p(
                        {
                          borderColor: l.BorderColor.borderMuted,
                          borderRadius: l.BorderRadius.LG,
                          backgroundColor: l.BackgroundColor.backgroundDefault,
                          padding: 4,
                          role: r,
                          className: (0, s.default)(
                            "mm-popover",
                            { "mm-popover--open": Boolean(v), "mm-popover--reference-hidden": Boolean(g) },
                            t
                          ),
                          ref: (e) => {
                            _ && ("function" == typeof _ ? _(e) : (_.current = e)), C(e), (P.current = e);
                          }
                        },
                        M.popper,
                        S,
                        { style: { ...I.popper, ...j, ...S.style } }
                      ),
                      e,
                      d &&
                        a.default.createElement(
                          c.Box,
                          p(
                            {
                              borderColor: l.BorderColor.borderMuted,
                              className: (0, s.default)("mm-popover__arrow"),
                              ref: N,
                              display: l.Display.Flex,
                              justifyContent: l.JustifyContent.center,
                              alignItems: l.AlignItems.center,
                              style: I.arrow
                            },
                            M.arrow,
                            w
                          )
                        )
                    );
                    return a.default.createElement(a.default.Fragment, null, E ? v && (0, o.createPortal)(D, document.body) : v && D);
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover/popover.tsx" }
    ],
    [
      4477,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.PopoverRole = n.PopoverPosition = void 0);
                (n.PopoverPosition = (function (e) {
                  return (
                    (e.Auto = "auto"),
                    (e.Top = "top"),
                    (e.TopStart = "top-start"),
                    (e.TopEnd = "top-end"),
                    (e.Right = "right"),
                    (e.RightStart = "right-start"),
                    (e.RightEnd = "right-end"),
                    (e.Bottom = "bottom"),
                    (e.BottomStart = "bottom-start"),
                    (e.BottomEnd = "bottom-end"),
                    (e.Left = "left"),
                    (e.LeftStart = "left-start"),
                    (e.LeftEnd = "left-end"),
                    e
                  );
                })({})),
                  (n.PopoverRole = (function (e) {
                    return (e.Tooltip = "tooltip"), (e.Dialog = "dialog"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/popover/popover.types.ts" }
    ],
    [
      4478,
      { "./select-button": 4479 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SelectButton", {
                    enumerable: !0,
                    get: function () {
                      return r.SelectButton;
                    }
                  });
                var r = e("./select-button");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/select-button/index.ts" }
    ],
    [
      4479,
      {
        "..": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../select-wrapper": 4483,
        "./select-button.types": 4480,
        classnames: 2414,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SelectButton = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../select-wrapper"),
                  s = e(".."),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("./select-button.types");
                function u(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (u = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function d() {
                  return (
                    (d = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    d.apply(this, arguments)
                  );
                }
                n.SelectButton = a.default.forwardRef(
                  ({ className: e = "", placeholder: t, children: n, size: r = c.SelectButtonSize.Md, onClick: u, ...p }, f) => {
                    const m = (0, a.useContext)(i.SelectContext);
                    if (!m) throw new Error("SelectButton must be used within a SelectWrapper.");
                    const {
                        isOpen: h,
                        isUncontrolledOpen: y,
                        toggleUncontrolledOpen: g,
                        isDanger: b,
                        isDisabled: v,
                        value: T,
                        uncontrolledValue: E,
                        defaultValue: w,
                        placeholder: O
                      } = m,
                      x = T || E || w || t || O || n,
                      S = () => {
                        switch (r) {
                          case c.SelectButtonSize.Sm:
                            return 1;
                          case c.SelectButtonSize.Md:
                            return 2;
                          case c.SelectButtonSize.Lg:
                            return 3;
                          default:
                            return 1;
                        }
                      };
                    return a.default.createElement(
                      s.Text,
                      d(
                        {
                          className: (0, o.default)(
                            "mm-select-button",
                            {
                              "mm-select-button--type-danger": b,
                              "mm-select-button--disabled": v,
                              "mm-select-button--open": h || y,
                              [`mm-select-button--size-${r}`]: Object.values(c.SelectButtonSize).includes(r)
                            },
                            e
                          ),
                          ref: f,
                          disabled: v,
                          as: "button",
                          onClick: u || g,
                          borderColor: b ? l.BorderColor.errorDefault : l.BorderColor.borderDefault,
                          borderRadius: l.BorderRadius.MD,
                          backgroundColor: l.BackgroundColor.backgroundDefault,
                          paddingTop: S(),
                          paddingBottom: S(),
                          paddingLeft: 4,
                          paddingRight: 4,
                          display: l.Display.Flex,
                          height: l.BlockSize.Full,
                          alignItems: l.AlignItems.center,
                          justifyContent: l.JustifyContent.spaceBetween,
                          gap: 2
                        },
                        p
                      ),
                      a.default.createElement("span", null, x),
                      a.default.createElement(s.Icon, { name: s.IconName.ArrowDown, size: s.IconSize.Sm })
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/select-button/select-button.tsx" }
    ],
    [
      448,
      {
        "./_version": 447,
        "@ethersproject/basex": 424,
        "@ethersproject/bignumber": 428,
        "@ethersproject/bytes": 430,
        "@ethersproject/logger": 452,
        "@ethersproject/pbkdf2": 456,
        "@ethersproject/properties": 458,
        "@ethersproject/sha2": 487,
        "@ethersproject/signing-key": 491,
        "@ethersproject/strings": 495,
        "@ethersproject/transactions": 498,
        "@ethersproject/wordlists": 503
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.getAccountPath =
                    n.isValidMnemonic =
                    n.entropyToMnemonic =
                    n.mnemonicToEntropy =
                    n.mnemonicToSeed =
                    n.HDNode =
                    n.defaultPath =
                      void 0);
                var r = e("@ethersproject/basex"),
                  a = e("@ethersproject/bytes"),
                  o = e("@ethersproject/bignumber"),
                  i = e("@ethersproject/strings"),
                  s = e("@ethersproject/pbkdf2"),
                  l = e("@ethersproject/properties"),
                  c = e("@ethersproject/signing-key"),
                  u = e("@ethersproject/sha2"),
                  d = e("@ethersproject/transactions"),
                  p = e("@ethersproject/wordlists"),
                  f = e("@ethersproject/logger"),
                  m = e("./_version"),
                  h = new f.Logger(m.version),
                  y = o.BigNumber.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                  g = (0, i.toUtf8Bytes)("Bitcoin seed"),
                  b = 2147483648;
                function v(e) {
                  return ((1 << e) - 1) << (8 - e);
                }
                function T(e) {
                  return (0, a.hexZeroPad)((0, a.hexlify)(e), 32);
                }
                function E(e) {
                  return r.Base58.encode((0, a.concat)([e, (0, a.hexDataSlice)((0, u.sha256)((0, u.sha256)(e)), 0, 4)]));
                }
                function w(e) {
                  if (null == e) return p.wordlists.en;
                  if ("string" == typeof e) {
                    var t = p.wordlists[e];
                    return null == t && h.throwArgumentError("unknown locale", "wordlist", e), t;
                  }
                  return e;
                }
                var O = {};
                n.defaultPath = "m/44'/60'/0'/0/0";
                var x = (function () {
                  function e(e, t, n, r, o, i, s, p) {
                    if (e !== O) throw new Error("HDNode constructor cannot be called directly");
                    if (t) {
                      var f = new c.SigningKey(t);
                      (0, l.defineReadOnly)(this, "privateKey", f.privateKey),
                        (0, l.defineReadOnly)(this, "publicKey", f.compressedPublicKey);
                    } else (0, l.defineReadOnly)(this, "privateKey", null), (0, l.defineReadOnly)(this, "publicKey", (0, a.hexlify)(n));
                    (0, l.defineReadOnly)(this, "parentFingerprint", r),
                      (0, l.defineReadOnly)(
                        this,
                        "fingerprint",
                        (0, a.hexDataSlice)((0, u.ripemd160)((0, u.sha256)(this.publicKey)), 0, 4)
                      ),
                      (0, l.defineReadOnly)(this, "address", (0, d.computeAddress)(this.publicKey)),
                      (0, l.defineReadOnly)(this, "chainCode", o),
                      (0, l.defineReadOnly)(this, "index", i),
                      (0, l.defineReadOnly)(this, "depth", s),
                      null == p
                        ? ((0, l.defineReadOnly)(this, "mnemonic", null), (0, l.defineReadOnly)(this, "path", null))
                        : "string" == typeof p
                        ? ((0, l.defineReadOnly)(this, "mnemonic", null), (0, l.defineReadOnly)(this, "path", p))
                        : ((0, l.defineReadOnly)(this, "mnemonic", p), (0, l.defineReadOnly)(this, "path", p.path));
                  }
                  return (
                    Object.defineProperty(e.prototype, "extendedKey", {
                      get: function () {
                        if (this.depth >= 256) throw new Error("Depth too large!");
                        return E(
                          (0, a.concat)([
                            null != this.privateKey ? "0x0488ADE4" : "0x0488B21E",
                            (0, a.hexlify)(this.depth),
                            this.parentFingerprint,
                            (0, a.hexZeroPad)((0, a.hexlify)(this.index), 4),
                            this.chainCode,
                            null != this.privateKey ? (0, a.concat)(["0x00", this.privateKey]) : this.publicKey
                          ])
                        );
                      },
                      enumerable: !1,
                      configurable: !0
                    }),
                    (e.prototype.neuter = function () {
                      return new e(O, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path);
                    }),
                    (e.prototype._derive = function (t) {
                      if (t > 4294967295) throw new Error("invalid index - " + String(t));
                      var n = this.path;
                      n && (n += "/" + (2147483647 & t));
                      var r = new Uint8Array(37);
                      if (t & b) {
                        if (!this.privateKey) throw new Error("cannot derive child of neutered node");
                        r.set((0, a.arrayify)(this.privateKey), 1), n && (n += "'");
                      } else r.set((0, a.arrayify)(this.publicKey));
                      for (var i = 24; i >= 0; i -= 8) r[33 + (i >> 3)] = (t >> (24 - i)) & 255;
                      var s = (0, a.arrayify)((0, u.computeHmac)(u.SupportedAlgorithm.sha512, this.chainCode, r)),
                        l = s.slice(0, 32),
                        d = s.slice(32),
                        p = null,
                        f = null;
                      this.privateKey
                        ? (p = T(o.BigNumber.from(l).add(this.privateKey).mod(y)))
                        : (f = new c.SigningKey((0, a.hexlify)(l))._addPoint(this.publicKey));
                      var m = n,
                        h = this.mnemonic;
                      return (
                        h && (m = Object.freeze({ phrase: h.phrase, path: n, locale: h.locale || "en" })),
                        new e(O, p, f, this.fingerprint, T(d), t, this.depth + 1, m)
                      );
                    }),
                    (e.prototype.derivePath = function (e) {
                      var t = e.split("/");
                      if (0 === t.length || ("m" === t[0] && 0 !== this.depth)) throw new Error("invalid path - " + e);
                      "m" === t[0] && t.shift();
                      for (var n = this, r = 0; r < t.length; r++) {
                        var a = t[r];
                        if (a.match(/^[0-9]+'$/)) {
                          if ((o = parseInt(a.substring(0, a.length - 1))) >= b) throw new Error("invalid path index - " + a);
                          n = n._derive(b + o);
                        } else {
                          if (!a.match(/^[0-9]+$/)) throw new Error("invalid path component - " + a);
                          var o;
                          if ((o = parseInt(a)) >= b) throw new Error("invalid path index - " + a);
                          n = n._derive(o);
                        }
                      }
                      return n;
                    }),
                    (e._fromSeed = function (t, n) {
                      var r = (0, a.arrayify)(t);
                      if (r.length < 16 || r.length > 64) throw new Error("invalid seed");
                      var o = (0, a.arrayify)((0, u.computeHmac)(u.SupportedAlgorithm.sha512, g, r));
                      return new e(O, T(o.slice(0, 32)), null, "0x00000000", T(o.slice(32)), 0, 0, n);
                    }),
                    (e.fromMnemonic = function (t, n, r) {
                      return (t = k(_(t, (r = w(r))), r)), e._fromSeed(S(t, n), { phrase: t, path: "m", locale: r.locale });
                    }),
                    (e.fromSeed = function (t) {
                      return e._fromSeed(t, null);
                    }),
                    (e.fromExtendedKey = function (t) {
                      var n = r.Base58.decode(t);
                      (82 === n.length && E(n.slice(0, 78)) === t) ||
                        h.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
                      var o = n[4],
                        i = (0, a.hexlify)(n.slice(5, 9)),
                        s = parseInt((0, a.hexlify)(n.slice(9, 13)).substring(2), 16),
                        l = (0, a.hexlify)(n.slice(13, 45)),
                        c = n.slice(45, 78);
                      switch ((0, a.hexlify)(n.slice(0, 4))) {
                        case "0x0488b21e":
                        case "0x043587cf":
                          return new e(O, null, (0, a.hexlify)(c), i, l, s, o, null);
                        case "0x0488ade4":
                        case "0x04358394 ":
                          if (0 !== c[0]) break;
                          return new e(O, (0, a.hexlify)(c.slice(1)), null, i, l, s, o, null);
                      }
                      return h.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
                    }),
                    e
                  );
                })();
                function S(e, t) {
                  t || (t = "");
                  var n = (0, i.toUtf8Bytes)("mnemonic" + t, i.UnicodeNormalizationForm.NFKD);
                  return (0, s.pbkdf2)((0, i.toUtf8Bytes)(e, i.UnicodeNormalizationForm.NFKD), n, 2048, 64, "sha512");
                }
                function _(e, t) {
                  (t = w(t)), h.checkNormalize();
                  var n = t.split(e);
                  if (n.length % 3 != 0) throw new Error("invalid mnemonic");
                  for (var r = (0, a.arrayify)(new Uint8Array(Math.ceil((11 * n.length) / 8))), o = 0, i = 0; i < n.length; i++) {
                    var s = t.getWordIndex(n[i].normalize("NFKD"));
                    if (-1 === s) throw new Error("invalid mnemonic");
                    for (var l = 0; l < 11; l++) s & (1 << (10 - l)) && (r[o >> 3] |= 1 << (7 - (o % 8))), o++;
                  }
                  var c = (32 * n.length) / 3,
                    d = v(n.length / 3);
                  if (((0, a.arrayify)((0, u.sha256)(r.slice(0, c / 8)))[0] & d) !== (r[r.length - 1] & d))
                    throw new Error("invalid checksum");
                  return (0, a.hexlify)(r.slice(0, c / 8));
                }
                function k(e, t) {
                  if (((t = w(t)), (e = (0, a.arrayify)(e)).length % 4 != 0 || e.length < 16 || e.length > 32))
                    throw new Error("invalid entropy");
                  for (var n = [0], r = 11, o = 0; o < e.length; o++)
                    r > 8
                      ? ((n[n.length - 1] <<= 8), (n[n.length - 1] |= e[o]), (r -= 8))
                      : ((n[n.length - 1] <<= r), (n[n.length - 1] |= e[o] >> (8 - r)), n.push(e[o] & ((1 << (8 - r)) - 1)), (r += 3));
                  var i = e.length / 4,
                    s = (0, a.arrayify)((0, u.sha256)(e))[0] & v(i);
                  return (
                    (n[n.length - 1] <<= i),
                    (n[n.length - 1] |= s >> (8 - i)),
                    t.join(
                      n.map(function (e) {
                        return t.getWord(e);
                      })
                    )
                  );
                }
                (n.HDNode = x),
                  (n.mnemonicToSeed = S),
                  (n.mnemonicToEntropy = _),
                  (n.entropyToMnemonic = k),
                  (n.isValidMnemonic = function (e, t) {
                    try {
                      return _(e, t), !0;
                    } catch (e) {}
                    return !1;
                  }),
                  (n.getAccountPath = function (e) {
                    return (
                      ("number" != typeof e || e < 0 || e >= b || e % 1) && h.throwArgumentError("invalid account index", "index", e),
                      "m/44'/60'/" + e + "'/0/0"
                    );
                  });
              };
            };
      },
      { package: "@ethersproject/hdnode", file: "node_modules/@ethersproject/hdnode/lib/index.js" }
    ],
    [
      4480,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SelectButtonSize = void 0);
                n.SelectButtonSize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/select-button/select-button.types.ts" }
    ],
    [
      4481,
      { "./select-option": 4482 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SelectOption", {
                    enumerable: !0,
                    get: function () {
                      return r.SelectOption;
                    }
                  });
                var r = e("./select-option");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/select-option/index.ts" }
    ],
    [
      4482,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, "../select-wrapper": 4483, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SelectOption = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e(".."),
                  s = e("../select-wrapper"),
                  l = e("../../../helpers/constants/design-system");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.SelectOption = a.default.forwardRef(({ className: e = "", value: t, children: n, ...r }, c) => {
                  const d = (0, a.useContext)(s.SelectContext);
                  if (!d) throw new Error("SelectOption must be used within a SelectWrapper.");
                  const {
                    setUncontrolledValue: p,
                    onValueChange: f,
                    isMultiSelect: m,
                    isOpen: h,
                    onOpenChange: y,
                    toggleUncontrolledOpen: g
                  } = d;
                  return a.default.createElement(
                    i.Box,
                    u(
                      {
                        className: (0, o.default)("mm-select-option", e),
                        ref: c,
                        onClick: () => {
                          f ? f(t) : p(t), !m && h ? y(!h) : m || g();
                        },
                        as: "button",
                        display: l.Display.Block
                      },
                      r
                    ),
                    n
                  );
                });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/select-option/select-option.tsx" }
    ],
    [
      4483,
      { "./select-wrapper": 4485, "./select-wrapper.context": 4484 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SelectContext", {
                    enumerable: !0,
                    get: function () {
                      return a.SelectContext;
                    }
                  }),
                  Object.defineProperty(n, "SelectWrapper", {
                    enumerable: !0,
                    get: function () {
                      return r.SelectWrapper;
                    }
                  }),
                  Object.defineProperty(n, "useSelectContext", {
                    enumerable: !0,
                    get: function () {
                      return a.useSelectContext;
                    }
                  });
                var r = e("./select-wrapper"),
                  a = e("./select-wrapper.context");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/select-wrapper/index.ts" }
    ],
    [
      4484,
      { react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.useSelectContext = n.SelectContext = void 0);
                var r = e("react");
                const a = (n.SelectContext = (0, r.createContext)(undefined));
                n.useSelectContext = () => {
                  const e = (0, r.useContext)(a);
                  if (!e) throw new Error("useSelectContext must be used within a SelectWrapper");
                  return e;
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/select-wrapper/select-wrapper.context.ts" }
    ],
    [
      4485,
      { "..": 4453, "./select-wrapper.context": 4484, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.SelectWrapper = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e(".."),
                  s = e("./select-wrapper.context");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function c() {
                  return (
                    (c = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    c.apply(this, arguments)
                  );
                }
                n.SelectWrapper = a.default.forwardRef(
                  (
                    {
                      className: e = "",
                      defaultValue: t,
                      value: n,
                      onValueChange: r,
                      placeholder: l,
                      isDanger: u,
                      isDisabled: d,
                      isOpen: p,
                      onOpenChange: f,
                      isMultiSelect: m,
                      triggerComponent: h,
                      popoverProps: y,
                      children: g,
                      onBlur: b,
                      ...v
                    },
                    T
                  ) => {
                    const [E, w] = (0, a.useState)(),
                      [O, x] = (0, a.useState)(!1),
                      [S, _] = (0, a.useState)(),
                      k = (0, a.useRef)(null),
                      C = (0, a.useRef)(null);
                    return a.default.createElement(
                      s.SelectContext.Provider,
                      {
                        value: {
                          isOpen: p,
                          onOpenChange: f,
                          isUncontrolledOpen: O,
                          setIsUncontrolledOpen: x,
                          toggleUncontrolledOpen: () => {
                            O && b && b(), x(!O);
                          },
                          isDisabled: d,
                          isDanger: u,
                          defaultValue: t,
                          value: n,
                          onValueChange: r,
                          uncontrolledValue: E,
                          setUncontrolledValue: w,
                          placeholder: l,
                          isMultiSelect: m
                        }
                      },
                      a.default.createElement(
                        i.Box,
                        c({ className: (0, o.default)("mm-select-wrapper", e), ref: C && T }, v),
                        h &&
                          a.default.cloneElement(h, {
                            ref: (e) => {
                              _(e);
                            }
                          }),
                        a.default.createElement(
                          i.Popover,
                          c(
                            {
                              isOpen: p || O,
                              position: i.PopoverPosition.Bottom,
                              onClickOutside: () => {
                                x(!1), f && f(!1), b && b();
                              },
                              matchWidth: !0,
                              referenceElement: S,
                              padding: 0,
                              ref: k
                            },
                            y,
                            { className: (0, o.default)("mm-select-wrapper__popover", (null == y ? void 0 : y.className) || "") }
                          ),
                          g
                        )
                      )
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/select-wrapper/select-wrapper.tsx" }
    ],
    [
      4486,
      { "./tag-url": 4487 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "TagUrl", {
                    enumerable: !0,
                    get: function () {
                      return r.TagUrl;
                    }
                  });
                var r = e("./tag-url");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/tag-url/index.ts" }
    ],
    [
      4487,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TagUrl = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("..");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                n.TagUrl = r.default.forwardRef(
                  (
                    {
                      label: e,
                      labelProps: t,
                      actionButtonLabel: n,
                      actionButtonProps: s,
                      src: c,
                      showLockIcon: u,
                      avatarFaviconProps: d,
                      lockIconProps: p,
                      className: f = "",
                      ...m
                    },
                    h
                  ) =>
                    r.default.createElement(
                      i.Box,
                      l(
                        {
                          className: (0, a.default)("mm-tag-url", f),
                          ref: h,
                          backgroundColor: o.BackgroundColor.backgroundDefault,
                          borderColor: o.BorderColor.borderDefault,
                          borderWidth: 1,
                          alignItems: o.AlignItems.center,
                          paddingLeft: 2,
                          paddingRight: 4,
                          gap: 2,
                          borderRadius: o.BorderRadius.pill,
                          display: o.Display.Flex
                        },
                        m
                      ),
                      r.default.createElement(i.AvatarFavicon, l({ src: c, name: e }, d)),
                      u &&
                        r.default.createElement(
                          i.Icon,
                          l(
                            {
                              className: "mm-tag-url__lock-icon",
                              name: i.IconName.Lock,
                              color: o.IconColor.iconAlternative,
                              size: i.IconSize.Sm,
                              "aria-label": "https://",
                              role: "img"
                            },
                            p
                          )
                        ),
                      r.default.createElement(i.Text, l({ variant: o.TextVariant.bodyMd, ellipsis: !0 }, t), e),
                      n &&
                        r.default.createElement(
                          i.ButtonLink,
                          l({ as: "a", size: i.ButtonLinkSize.Sm, paddingLeft: 0, paddingRight: 0, marginLeft: 2, marginRight: 2 }, s),
                          n
                        )
                    )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/tag-url/tag-url.tsx" }
    ],
    [
      4488,
      { "./tag": 4489 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "Tag", {
                    enumerable: !0,
                    get: function () {
                      return r.Tag;
                    }
                  });
                var r = e("./tag");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/tag/index.ts" }
    ],
    [
      4489,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Tag = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e(".."),
                  i = e("../../../helpers/constants/design-system");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                n.Tag = r.default.forwardRef(({ label: e, className: t = "", labelProps: n, ...s }, c) =>
                  r.default.createElement(
                    o.Box,
                    l(
                      {
                        ref: c,
                        className: (0, a.default)("mm-tag", t),
                        backgroundColor: i.BackgroundColor.backgroundDefault,
                        borderColor: i.BorderColor.borderDefault,
                        borderWidth: 1,
                        justifyContent: i.JustifyContent.center,
                        alignItems: i.AlignItems.center,
                        paddingLeft: 1,
                        paddingRight: 1,
                        borderRadius: i.BorderRadius.pill,
                        display: i.Display.InlineBlock
                      },
                      s
                    ),
                    r.default.createElement(o.Text, l({ variant: i.TextVariant.bodySm }, n), e)
                  )
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/tag/tag.tsx" }
    ],
    [
      4490,
      { "./text-field-search": 4491 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "TextFieldSearch", {
                    enumerable: !0,
                    get: function () {
                      return r.TextFieldSearch;
                    }
                  });
                var r = e("./text-field-search");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field-search/index.js" }
    ],
    [
      4491,
      {
        "..": 4453,
        "../../../hooks/useI18nContext": 4837,
        "../text-field/deprecated": 4492,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TextFieldSearch = void 0);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = c(e("classnames")),
                  i = e(".."),
                  s = e("../text-field/deprecated"),
                  l = e("../../../hooks/useI18nContext");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                const d = ({
                  className: e,
                  showClearButton: t = !0,
                  clearButtonOnClick: n,
                  clearButtonProps: a,
                  endAccessory: c,
                  inputProps: d,
                  value: p,
                  onChange: f,
                  ...m
                }) => {
                  const h = (0, l.useI18nContext)();
                  return r.default.createElement(
                    s.TextField,
                    u(
                      {
                        className: (0, o.default)("mm-text-field-search", e),
                        value: p,
                        onChange: f,
                        type: s.TEXT_FIELD_TYPES.SEARCH,
                        endAccessory:
                          p && t
                            ? r.default.createElement(
                                r.default.Fragment,
                                null,
                                r.default.createElement(
                                  i.ButtonIcon,
                                  u(
                                    {
                                      className: "mm-text-field__button-clear",
                                      ariaLabel: h("clear"),
                                      iconName: i.IconName.Close,
                                      size: i.ButtonIconSize.Sm,
                                      onClick: n
                                    },
                                    a
                                  )
                                ),
                                c
                              )
                            : c,
                        startAccessory: r.default.createElement(i.Icon, { name: i.IconName.Search, size: i.IconSize.Sm }),
                        inputProps: { marginRight: t ? 6 : 0, ...d }
                      },
                      m
                    )
                  );
                };
                (n.TextFieldSearch = d),
                  (d.propTypes = {
                    value: a.default.oneOfType([a.default.string, a.default.number]),
                    onChange: a.default.func,
                    showClearButton: a.default.bool,
                    clearButtonOnClick: (e, t, n) => {
                      var r;
                      return !e.showClearButton || (e[t] && null !== (r = e.clearButtonProps) && void 0 !== r && r.onClick)
                        ? null
                        : new Error(
                            `${t} is required unless showClearButton is false. Warning coming from ${n} ui/components/component-library/text-field-search/text-field-search.js`
                          );
                    },
                    clearButtonProps: a.default.object,
                    className: a.default.string,
                    endAccessory: a.default.node,
                    inputProps: a.default.object
                  }),
                  (d.displayName = "TextFieldSearch");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field-search/text-field-search.js" }
    ],
    [
      4492,
      { "./text-field": 4494, "./text-field.constants": 4493 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "TEXT_FIELD_SIZES", {
                    enumerable: !0,
                    get: function () {
                      return a.TEXT_FIELD_SIZES;
                    }
                  }),
                  Object.defineProperty(n, "TEXT_FIELD_TYPES", {
                    enumerable: !0,
                    get: function () {
                      return a.TEXT_FIELD_TYPES;
                    }
                  }),
                  Object.defineProperty(n, "TextField", {
                    enumerable: !0,
                    get: function () {
                      return r.TextField;
                    }
                  });
                var r = e("./text-field"),
                  a = e("./text-field.constants");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/deprecated/index.js" }
    ],
    [
      4493,
      { "../../../../helpers/constants/design-system": 4771 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TEXT_FIELD_TYPES = n.TEXT_FIELD_SIZES = void 0);
                var r = e("../../../../helpers/constants/design-system");
                (n.TEXT_FIELD_SIZES = { SM: r.Size.SM, MD: r.Size.MD, LG: r.Size.LG }),
                  (n.TEXT_FIELD_TYPES = { TEXT: "text", NUMBER: "number", PASSWORD: "password", SEARCH: "search" });
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/deprecated/text-field.constants.js" }
    ],
    [
      4494,
      {
        "../../../../helpers/constants/design-system": 4771,
        "../../../ui/box": 4607,
        "../../input": 4454,
        "./text-field.constants": 4493,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TextField = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = u(e("prop-types")),
                  o = u(e("classnames")),
                  i = e("../../../../helpers/constants/design-system"),
                  s = u(e("../../../ui/box")),
                  l = e("../../input"),
                  c = e("./text-field.constants");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p() {
                  return (
                    (p = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    p.apply(this, arguments)
                  );
                }
                const f = ({
                  autoComplete: e,
                  autoFocus: t,
                  className: n,
                  defaultValue: a,
                  disabled: c,
                  error: u,
                  id: d,
                  inputProps: f,
                  inputRef: m,
                  startAccessory: h,
                  endAccessory: y,
                  maxLength: g,
                  name: b,
                  onBlur: v,
                  onChange: T,
                  onClick: E,
                  onFocus: w,
                  placeholder: O,
                  readOnly: x,
                  required: S,
                  size: _ = i.Size.MD,
                  testId: k,
                  type: C = "text",
                  truncate: A = !0,
                  value: N,
                  InputComponent: P = l.Input,
                  ...I
                }) => {
                  const M = (0, r.useRef)(null),
                    [j, B] = (0, r.useState)(!1);
                  (0, r.useEffect)(() => {
                    c && B(!1);
                  }, [c]);
                  return r.default.createElement(
                    s.default,
                    p(
                      {
                        className: (0, o.default)(
                          "mm-text-field",
                          `mm-text-field--size-${_}`,
                          {
                            "mm-text-field--focused": j && !c,
                            "mm-text-field--error": u,
                            "mm-text-field--disabled": c,
                            "mm-text-field--truncate": A
                          },
                          n
                        ),
                        display: i.DISPLAY.INLINE_FLEX,
                        backgroundColor: i.BackgroundColor.backgroundDefault,
                        alignItems: i.AlignItems.center,
                        borderWidth: 1,
                        borderRadius: i.BorderRadius.SM,
                        paddingLeft: h ? 4 : 0,
                        paddingRight: y ? 4 : 0,
                        onClick: (e) => {
                          const { current: t } = M;
                          t && (t.focus(), B(!0)), E && !c && E(e);
                        }
                      },
                      I
                    ),
                    h,
                    r.default.createElement(
                      P,
                      p(
                        {},
                        u && { "aria-invalid": u },
                        {
                          autoComplete: e,
                          autoFocus: t,
                          backgroundColor: i.BackgroundColor.transparent,
                          "data-testid": k,
                          defaultValue: a,
                          disabled: c,
                          focused: j.toString(),
                          id: d,
                          margin: 0,
                          maxLength: g,
                          name: b,
                          onBlur: (e) => {
                            B(!1), v && v(e);
                          },
                          onChange: T,
                          onFocus: (e) => {
                            B(!0), w && w(e);
                          },
                          padding: 0,
                          paddingLeft: h ? 2 : 4,
                          paddingRight: y ? 2 : 4,
                          placeholder: O,
                          readOnly: x,
                          ref: (e) => {
                            (M.current = e), m && m.current !== undefined ? (m.current = e) : "function" == typeof m && m(e);
                          },
                          required: S,
                          value: N,
                          type: C,
                          disableStateStyles: !0
                        },
                        f,
                        { className: (0, o.default)("mm-text-field__input", null == f ? void 0 : f.className) }
                      )
                    ),
                    y
                  );
                };
                (n.TextField = f),
                  (f.propTypes = {
                    autoComplete: a.default.bool,
                    autoFocus: a.default.bool,
                    className: a.default.string,
                    defaultValue: a.default.oneOfType([a.default.string, a.default.number]),
                    disabled: a.default.bool,
                    error: a.default.bool,
                    id: a.default.string,
                    InputComponent: a.default.elementType,
                    inputProps: a.default.object,
                    startAccessory: a.default.node,
                    endAccessory: a.default.node,
                    inputRef: a.default.oneOfType([a.default.func, a.default.object]),
                    maxLength: a.default.number,
                    name: a.default.string,
                    onBlur: a.default.func,
                    onChange: a.default.func,
                    onClick: a.default.func,
                    onFocus: a.default.func,
                    placeholder: a.default.string,
                    readOnly: a.default.bool,
                    required: a.default.bool,
                    size: a.default.oneOf(Object.values(c.TEXT_FIELD_SIZES)),
                    type: a.default.oneOf(Object.values(c.TEXT_FIELD_TYPES)),
                    truncate: a.default.bool,
                    value: a.default.oneOfType([a.default.string, a.default.number]),
                    testId: a.default.string,
                    ...s.default.propTypes
                  }),
                  (f.displayName = "TextField");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/deprecated/text-field.js" }
    ],
    [
      4495,
      { "./text-field": 4496, "./text-field.types": 4497 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "TextField", {
                    enumerable: !0,
                    get: function () {
                      return r.TextField;
                    }
                  }),
                  Object.defineProperty(n, "TextFieldSize", {
                    enumerable: !0,
                    get: function () {
                      return a.TextFieldSize;
                    }
                  }),
                  Object.defineProperty(n, "TextFieldType", {
                    enumerable: !0,
                    get: function () {
                      return a.TextFieldType;
                    }
                  });
                var r = e("./text-field"),
                  a = e("./text-field.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/index.ts" }
    ],
    [
      4496,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, "./text-field.types": 4497, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TextField = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../../helpers/constants/design-system"),
                  s = e(".."),
                  l = e("./text-field.types");
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u() {
                  return (
                    (u = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    u.apply(this, arguments)
                  );
                }
                n.TextField = a.default.forwardRef(
                  (
                    {
                      autoComplete: e,
                      autoFocus: t,
                      className: n = "",
                      defaultValue: r,
                      disabled: c,
                      error: d,
                      id: p,
                      inputProps: f,
                      inputRef: m,
                      startAccessory: h,
                      endAccessory: y,
                      maxLength: g,
                      name: b,
                      onBlur: v,
                      onChange: T,
                      onClick: E,
                      onFocus: w,
                      placeholder: O,
                      readOnly: x,
                      required: S,
                      size: _ = l.TextFieldSize.Md,
                      testId: k,
                      type: C = l.TextFieldType.Text,
                      truncate: A = !0,
                      value: N,
                      InputComponent: P = s.Input,
                      ...I
                    },
                    M
                  ) => {
                    const j = (0, a.useRef)(null),
                      [B, R] = (0, a.useState)(!1);
                    (0, a.useEffect)(() => {
                      c && R(!1);
                    }, [c]);
                    return a.default.createElement(
                      s.Box,
                      u(
                        {
                          ref: M,
                          className: (0, o.default)(
                            "mm-text-field",
                            `mm-text-field--size-${_}`,
                            {
                              "mm-text-field--focused": B && !c,
                              "mm-text-field--error": Boolean(d),
                              "mm-text-field--disabled": Boolean(c),
                              "mm-text-field--truncate": A
                            },
                            n
                          ),
                          display: i.Display.InlineFlex,
                          backgroundColor: i.BackgroundColor.backgroundDefault,
                          alignItems: i.AlignItems.center,
                          borderWidth: 1,
                          borderRadius: i.BorderRadius.SM,
                          paddingLeft: h ? 4 : 0,
                          paddingRight: y ? 4 : 0,
                          onClick: (e) => {
                            const { current: t } = j;
                            t && (t.focus(), R(!0)), E && !c && (null == E || E(e));
                          }
                        },
                        I
                      ),
                      h,
                      a.default.createElement(
                        P,
                        u(
                          {},
                          d && { "aria-invalid": d },
                          {
                            autoComplete: e,
                            autoFocus: t,
                            backgroundColor: i.BackgroundColor.transparent,
                            "data-testid": k,
                            defaultValue: r,
                            disabled: c,
                            focused: B.toString(),
                            id: p,
                            margin: 0,
                            maxLength: g,
                            name: b,
                            onBlur: (e) => {
                              R(!1), null == v || v(e);
                            },
                            onChange: T,
                            onFocus: (e) => {
                              R(!0), null == w || w(e);
                            },
                            padding: 0,
                            paddingLeft: h ? 2 : 4,
                            paddingRight: y ? 2 : 4,
                            placeholder: O,
                            readOnly: x,
                            ref: (e) => {
                              (j.current = e), m && "current" in m ? (m.current = e) : "function" == typeof m && m(e);
                            },
                            required: S,
                            value: N,
                            type: C,
                            disableStateStyles: !0
                          },
                          f,
                          { className: (0, o.default)("mm-text-field__input", (null == f ? void 0 : f.className) ?? "") }
                        )
                      ),
                      y
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/text-field.tsx" }
    ],
    [
      4497,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.TextFieldType = n.TextFieldSize = void 0);
                (n.TextFieldSize = (function (e) {
                  return (e.Sm = "sm"), (e.Md = "md"), (e.Lg = "lg"), e;
                })({})),
                  (n.TextFieldType = (function (e) {
                    return (e.Text = "text"), (e.Number = "number"), (e.Password = "password"), (e.Search = "search"), e;
                  })({}));
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text-field/text-field.types.ts" }
    ],
    [
      4498,
      { "./text": 4499, "./text.types": 4500 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "InvisibleCharacter", {
                    enumerable: !0,
                    get: function () {
                      return a.InvisibleCharacter;
                    }
                  }),
                  Object.defineProperty(n, "Text", {
                    enumerable: !0,
                    get: function () {
                      return r.Text;
                    }
                  }),
                  Object.defineProperty(n, "TextDirection", {
                    enumerable: !0,
                    get: function () {
                      return a.TextDirection;
                    }
                  }),
                  Object.defineProperty(n, "ValidTag", {
                    enumerable: !0,
                    get: function () {
                      return a.ValidTag;
                    }
                  });
                var r = e("./text"),
                  a = e("./text.types");
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text/index.ts" }
    ],
    [
      4499,
      { "..": 4453, "../../../helpers/constants/design-system": 4771, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.Text = void 0);
                var r = s(e("react")),
                  a = s(e("classnames")),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("..");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l() {
                  return (
                    (l = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    l.apply(this, arguments)
                  );
                }
                n.Text = r.default.forwardRef(
                  (
                    {
                      variant: e = o.TextVariant.bodyMd,
                      fontWeight: t,
                      fontStyle: n,
                      textTransform: s,
                      textAlign: c,
                      textDirection: u,
                      overflowWrap: d,
                      ellipsis: p,
                      className: f = "",
                      children: m,
                      ...h
                    },
                    y
                  ) => {
                    const g = ((e) => {
                        switch (e) {
                          case o.TextVariant.displayMd:
                            return "h1";
                          case o.TextVariant.headingLg:
                            return "h2";
                          case o.TextVariant.headingMd:
                            return "h3";
                          case o.TextVariant.headingSm:
                            return "h4";
                          case o.TextVariant.inherit:
                            return "span";
                          default:
                            return "p";
                        }
                      })(e),
                      b = (0, a.default)("mm-text", f, `mm-text--${e}`, {
                        [`mm-text--font-weight-${t}`]: Boolean(t),
                        [`mm-text--font-style-${n}`]: Boolean(n),
                        "mm-text--ellipsis": Boolean(p),
                        [`mm-text--text-transform-${s}`]: Boolean(s),
                        [`mm-text--text-align-${c}`]: Boolean(c),
                        [`mm-text--overflow-wrap-${d}`]: Boolean(d)
                      });
                    return r.default.createElement(
                      i.Box,
                      l({ className: (0, a.default)(b), as: g, dir: u, ref: y, color: o.TextColor.textDefault }, h),
                      m
                    );
                  }
                );
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text/text.tsx" }
    ],
    [
      4500,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ValidTag = n.TextDirection = n.InvisibleCharacter = void 0);
                n.TextDirection = (function (e) {
                  return (e.LeftToRight = "ltr"), (e.RightToLeft = "rtl"), (e.Auto = "auto"), e;
                })({});
                n.InvisibleCharacter = "​";
                n.ValidTag = (function (e) {
                  return (
                    (e.Dd = "dd"),
                    (e.Div = "div"),
                    (e.Dt = "dt"),
                    (e.Em = "em"),
                    (e.H1 = "h1"),
                    (e.H2 = "h2"),
                    (e.H3 = "h3"),
                    (e.H4 = "h4"),
                    (e.H5 = "h5"),
                    (e.H6 = "h6"),
                    (e.Li = "li"),
                    (e.P = "p"),
                    (e.Span = "span"),
                    (e.Strong = "strong"),
                    (e.Ul = "ul"),
                    (e.Label = "label"),
                    (e.Input = "input"),
                    (e.Header = "header"),
                    e
                  );
                })({});
              };
            };
      },
      { package: "$root$", file: "ui/components/component-library/text/text.types.ts" }
    ],
    [
      4501,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetailsAuthenticate = void 0);
                var r,
                  a = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  i = e("react-redux"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../store/actions"),
                  u = e("../../component-library");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const p = ({ address: e, onCancel: t, setPrivateKey: n, setShowHoldToReveal: r }) => {
                  const a = (0, l.useI18nContext)(),
                    d = (0, i.useDispatch)(),
                    [p, f] = (0, o.useState)(""),
                    m = (0, i.useSelector)((e) => e.appState.warning),
                    h = (0, o.useCallback)(() => {
                      d((0, c.exportAccount)(p, e, n, r))
                        .then((e) => (d((0, c.hideWarning)()), e))
                        .catch(() => {});
                    }, [d, p, e, n, r]),
                    y = (0, o.useCallback)(
                      (e) => {
                        "Enter" === e.key && h();
                      },
                      [h]
                    );
                  return o.default.createElement(
                    o.default.Fragment,
                    null,
                    o.default.createElement(u.FormTextField, {
                      marginTop: 6,
                      id: "account-details-authenticate",
                      label: a("enterYourPassword"),
                      placeholder: a("password"),
                      error: Boolean(m),
                      helpText: m,
                      onChange: (e) => f(e.target.value),
                      value: p,
                      variant: s.TextVariant.bodySm,
                      type: "password",
                      inputProps: { onKeyPress: y },
                      labelProps: { fontWeight: s.FontWeight.Medium },
                      autoFocus: !0
                    }),
                    o.default.createElement(u.BannerAlert, {
                      marginTop: 6,
                      severity: s.Severity.Danger,
                      description: a("privateKeyWarning")
                    }),
                    o.default.createElement(
                      u.Box,
                      { display: s.Display.Flex, marginTop: 6, gap: 2 },
                      o.default.createElement(u.ButtonSecondary, { onClick: t, block: !0 }, a("cancel")),
                      o.default.createElement(u.ButtonPrimary, { onClick: h, disabled: "" === p, block: !0 }, a("confirm"))
                    )
                  );
                };
                (n.AccountDetailsAuthenticate = p),
                  (p.propTypes = {
                    address: a.default.string.isRequired,
                    onCancel: a.default.func.isRequired,
                    setPrivateKey: a.default.func.isRequired,
                    setShowHoldToReveal: a.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/account-details-authenticate.js" }
    ],
    [
      4502,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/editable-label/editable-label": 4637,
        "../../ui/qr-code": 4703,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetailsDisplay = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = y(e("prop-types")),
                  o = e("react-redux"),
                  i = y(e("../../ui/qr-code")),
                  s = y(e("../../ui/editable-label/editable-label")),
                  l = e("../../../store/actions"),
                  c = e("../../../selectors"),
                  u = e("../../../helpers/utils/util"),
                  d = e("../../component-library"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../../shared/constants/metametrics"),
                  h = e("../../../hooks/useI18nContext");
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const b = ({ accounts: e, accountName: t, address: n, onExportClick: a }) => {
                  const y = (0, o.useDispatch)(),
                    g = (0, r.useContext)(f.MetaMetricsContext),
                    b = (0, h.useI18nContext)(),
                    v = (0, o.useSelector)(c.getMetaMaskKeyrings).find((e) => e.accounts.includes(n)),
                    T = (0, u.isAbleToExportAccount)(null == v ? void 0 : v.type),
                    E = (0, o.useSelector)(c.getCurrentChainId),
                    w = (0, o.useSelector)(c.getHardwareWalletType);
                  return r.default.createElement(
                    d.Box,
                    { display: p.Display.Flex, alignItems: p.AlignItems.center, flexDirection: p.FlexDirection.Column },
                    r.default.createElement(s.default, {
                      defaultValue: t,
                      onSubmit: (e) => {
                        y((0, l.setAccountLabel)(n, e)),
                          g({
                            category: m.MetaMetricsEventCategory.Accounts,
                            event: m.MetaMetricsEventName.AccountRenamed,
                            properties: { location: "Account Details Modal", chain_id: E, account_hardware_type: w }
                          });
                      },
                      accounts: e
                    }),
                    r.default.createElement(i.default, { Qr: { data: n } }),
                    T
                      ? r.default.createElement(
                          d.ButtonSecondary,
                          {
                            block: !0,
                            size: d.ButtonSecondarySize.Lg,
                            variant: p.TextVariant.bodyMd,
                            onClick: () => {
                              g({
                                category: m.MetaMetricsEventCategory.Accounts,
                                event: m.MetaMetricsEventName.KeyExportSelected,
                                properties: { key_type: m.MetaMetricsEventKeyType.Pkey, location: "Account Details Modal" }
                              }),
                                a();
                            }
                          },
                          b("showPrivateKey")
                        )
                      : null
                  );
                };
                (n.AccountDetailsDisplay = b),
                  (b.propTypes = {
                    accounts: a.default.array.isRequired,
                    accountName: a.default.string.isRequired,
                    address: a.default.string.isRequired,
                    onExportClick: a.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/account-details-display.js" }
    ],
    [
      4503,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useCopyToClipboard": 4830,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetailsKey = void 0);
                var r = c(e("react")),
                  a = c(e("prop-types")),
                  o = e("../../component-library"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../hooks/useCopyToClipboard");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ accountName: e, onClose: t, privateKey: n }) => {
                  const a = (0, s.useI18nContext)(),
                    [c, u] = (0, l.useCopyToClipboard)();
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      o.Text,
                      { marginTop: 6, variant: i.TextVariant.bodySm, style: { wordBreak: "break-word" } },
                      a("privateKeyCopyWarning", [e])
                    ),
                    r.default.createElement(
                      o.Box,
                      {
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Row,
                        alignItems: i.AlignItems.center,
                        borderRadius: i.BorderRadius.SM,
                        borderWidth: 1,
                        borderColor: i.BorderColor.default,
                        padding: 4,
                        gap: 4
                      },
                      r.default.createElement(
                        o.Text,
                        { "data-testid": "account-details-key", variant: i.TextVariant.bodySm, style: { wordBreak: "break-word" } },
                        n
                      ),
                      r.default.createElement(o.ButtonIcon, { onClick: () => u(n), iconName: c ? o.IconName.CopySuccess : o.IconName.Copy })
                    ),
                    r.default.createElement(
                      o.BannerAlert,
                      { severity: i.Severity.Danger, marginTop: 4 },
                      r.default.createElement(o.Text, { variant: i.TextVariant.bodySm }, a("privateKeyWarning"))
                    ),
                    r.default.createElement(o.ButtonPrimary, { marginTop: 6, onClick: t, block: !0 }, a("done"))
                  );
                };
                (n.AccountDetailsKey = u),
                  (u.propTypes = {
                    accountName: a.default.string.isRequired,
                    onClose: a.default.func.isRequired,
                    privateKey: a.default.string.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/account-details-key.js" }
    ],
    [
      4504,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../app/modals/hold-to-reveal-modal/hold-to-reveal-modal": 4184,
        "../../component-library": 4453,
        "../address-copy-button": 4517,
        "./account-details-authenticate": 4501,
        "./account-details-display": 4502,
        "./account-details-key": 4503,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountDetails = void 0);
                var r = v(e("prop-types")),
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = e("react-redux"),
                  i = e("../../../../shared/constants/metametrics"),
                  s = e("../../../contexts/metametrics"),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../selectors"),
                  d = e("../../../store/actions"),
                  p = v(e("../../app/modals/hold-to-reveal-modal/hold-to-reveal-modal")),
                  f = e("../../component-library"),
                  m = e("../address-copy-button"),
                  h = e("./account-details-authenticate"),
                  y = e("./account-details-display"),
                  g = e("./account-details-key");
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const T = ({ address: e }) => {
                  const t = (0, o.useDispatch)(),
                    n = (0, c.useI18nContext)(),
                    r = (0, a.useContext)(s.MetaMetricsContext),
                    b = (0, o.useSelector)(u.getUseBlockie),
                    v = (0, o.useSelector)(u.getMetaMaskAccountsOrdered),
                    { name: T } = v.find((t) => t.address === e),
                    [E, w] = (0, a.useState)(!1),
                    [O, x] = (0, a.useState)(!1),
                    [S, _] = (0, a.useState)(""),
                    k = (0, a.useCallback)(() => {
                      t((0, d.setAccountDetailsAddress)("")), t((0, d.clearAccountDetails)()), t((0, d.hideWarning)());
                    }, [t]),
                    C = a.default.createElement(f.AvatarAccount, {
                      variant: b ? f.AvatarAccountVariant.Blockies : f.AvatarAccountVariant.Jazzicon,
                      address: e,
                      size: f.AvatarAccountSize.Lg,
                      style: { margin: "0 auto" }
                    });
                  return a.default.createElement(
                    a.default.Fragment,
                    null,
                    a.default.createElement(
                      f.Modal,
                      { isOpen: !E, onClose: k },
                      a.default.createElement(f.ModalOverlay, null),
                      a.default.createElement(
                        f.ModalContent,
                        null,
                        a.default.createElement(
                          f.ModalHeader,
                          {
                            onClose: k,
                            onBack:
                              O &&
                              (() => {
                                t((0, d.hideWarning)()), x(!1);
                              })
                          },
                          O ? n("showPrivateKey") : C
                        ),
                        O
                          ? a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement(
                                f.Box,
                                { display: l.Display.Flex, alignItems: l.AlignItems.center, flexDirection: l.FlexDirection.Column },
                                C,
                                a.default.createElement(
                                  f.Text,
                                  {
                                    marginTop: 2,
                                    marginBottom: 2,
                                    variant: l.TextVariant.bodyLgMedium,
                                    style: { wordBreak: "break-word" }
                                  },
                                  T
                                ),
                                a.default.createElement(m.AddressCopyButton, { address: e, shorten: !0 })
                              ),
                              S
                                ? a.default.createElement(g.AccountDetailsKey, { accountName: T, onClose: k, privateKey: S })
                                : a.default.createElement(h.AccountDetailsAuthenticate, {
                                    address: e,
                                    onCancel: k,
                                    setPrivateKey: _,
                                    setShowHoldToReveal: w
                                  })
                            )
                          : a.default.createElement(y.AccountDetailsDisplay, {
                              accounts: v,
                              accountName: T,
                              address: e,
                              onExportClick: () => x(!0)
                            })
                      )
                    ),
                    a.default.createElement(p.default, {
                      isOpen: E,
                      onClose: () => {
                        r({
                          category: i.MetaMetricsEventCategory.Keys,
                          event: i.MetaMetricsEventName.KeyExportCanceled,
                          properties: { key_type: i.MetaMetricsEventKeyType.Pkey }
                        }),
                          _(""),
                          w(!1);
                      },
                      onLongPressed: () => {
                        w(!1);
                      },
                      holdToRevealType: "PrivateKey"
                    })
                  );
                };
                (n.AccountDetails = T), (T.propTypes = { address: r.default.string });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/account-details.js" }
    ],
    [
      4505,
      { "./account-details": 4504 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountDetails", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountDetails;
                    }
                  });
                var r = e("./account-details");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-details/index.js" }
    ],
    [
      4506,
      {
        "..": 4555,
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/metrics": 4802,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "../../ui/menu": 4681,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountListItemMenu = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = e("react-redux"),
                  i = (r = e("prop-types")) && r.__esModule ? r : { default: r },
                  s = e("../../../contexts/metametrics"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../selectors"),
                  u = e("../../../ducks/metamask/metamask"),
                  d = e("../../ui/menu"),
                  p = e("../../component-library"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../store/actions"),
                  h = e("../../../helpers/constants/design-system"),
                  y = e("../../../helpers/utils/metrics"),
                  g = e("..");
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const v = "Account Options",
                  T = ({ anchorElement: e, onClose: t, closeMenu: n, isRemovable: r, identity: i, isOpen: b }) => {
                    const T = (0, l.useI18nContext)(),
                      E = (0, a.useContext)(s.MetaMetricsContext),
                      w = (0, o.useDispatch)(),
                      O = (0, o.useSelector)(c.getCurrentChainId),
                      x = (0, o.useSelector)(c.getHardwareWalletType),
                      S = (0, o.useSelector)((e) => (0, u.findKeyringForAddress)(e, i.address)),
                      _ = (0, y.formatAccountType)((0, c.getAccountTypeForKeyring)(S)),
                      k = (0, a.useRef)(null),
                      C = (0, a.useRef)(null),
                      A = (0, a.useRef)(null),
                      N = (0, a.useRef)(null);
                    (0, a.useEffect)(() => {
                      N.current ? (k.current = N.current) : A.current ? (k.current = A.current) : (k.current = C.current);
                    }, [N.current, A.current, C.current]);
                    const P = (0, a.useCallback)(
                        (e) => {
                          "Tab" === e.key && e.target === k.current && t();
                        },
                        [t]
                      ),
                      I = (0, a.useRef)(null),
                      M = (0, a.useCallback)(
                        (e) => {
                          null != I && I.current && !I.current.contains(e.target) && t();
                        },
                        [t]
                      );
                    return (
                      (0, a.useEffect)(
                        () => (
                          document.addEventListener("mousedown", M),
                          () => {
                            document.removeEventListener("mousedown", M);
                          }
                        ),
                        [M]
                      ),
                      a.default.createElement(
                        p.Popover,
                        {
                          className: "multichain-account-list-item-menu__popover",
                          referenceElement: e,
                          role: p.PopoverRole.Dialog,
                          position: p.PopoverPosition.Bottom,
                          offset: [0, 0],
                          padding: 0,
                          isOpen: b,
                          isPortal: !0,
                          preventOverflow: !0
                        },
                        a.default.createElement(
                          p.ModalFocus,
                          { restoreFocus: !0, initialFocusRef: e },
                          a.default.createElement(
                            "div",
                            { onKeyDown: P, ref: I },
                            a.default.createElement(g.AccountDetailsMenuItem, {
                              metricsLocation: v,
                              closeMenu: n,
                              address: i.address,
                              textProps: { variant: h.TextVariant.bodySm }
                            }),
                            a.default.createElement(g.ViewExplorerMenuItem, {
                              metricsLocation: v,
                              closeMenu: n,
                              textProps: { variant: h.TextVariant.bodySm },
                              address: i.address
                            }),
                            r
                              ? a.default.createElement(
                                  d.MenuItem,
                                  {
                                    ref: A,
                                    "data-testid": "account-list-menu-remove",
                                    onClick: () => {
                                      w((0, m.showModal)({ name: "CONFIRM_REMOVE_ACCOUNT", identity: i })),
                                        E({
                                          event: f.MetaMetricsEventName.AccountRemoved,
                                          category: f.MetaMetricsEventCategory.Accounts,
                                          properties: { account_hardware_type: x, chain_id: O, account_type: _ }
                                        }),
                                        t(),
                                        null == n || n();
                                    },
                                    iconName: p.IconName.Trash
                                  },
                                  a.default.createElement(p.Text, { variant: h.TextVariant.bodySm }, T("removeAccount"))
                                )
                              : null
                          )
                        )
                      )
                    );
                  };
                (n.AccountListItemMenu = T),
                  (T.propTypes = {
                    anchorElement: i.default.instanceOf(window.Element),
                    onClose: i.default.func.isRequired,
                    isOpen: i.default.bool.isRequired,
                    closeMenu: i.default.func,
                    isRemovable: i.default.bool.isRequired,
                    identity: i.default.shape({
                      name: i.default.string.isRequired,
                      address: i.default.string.isRequired,
                      balance: i.default.string.isRequired
                    }).isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-item-menu/account-list-item-menu.js" }
    ],
    [
      4507,
      { "./account-list-item-menu": 4506 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountListItemMenu", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountListItemMenu;
                    }
                  });
                var r = e("./account-list-item-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-item-menu/index.js" }
    ],
    [
      4508,
      {
        "..": 4555,
        "../../../../shared/constants/hardware-wallets": 3958,
        "../../../../shared/constants/keyring": 3959,
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useAccountTotalFiatBalance": 4826,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../app/user-preferenced-currency-display/user-preferenced-currency-display.component": 4379,
        "../../component-library": 4453,
        "../../ui/tooltip/tooltip": 4737,
        "@metamask/controller-utils": 1056,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountListItem = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = x(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = O(e("prop-types")),
                  o = O(e("classnames")),
                  i = e("react-redux"),
                  s = e("@metamask/controller-utils"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/utils/util"),
                  u = e(".."),
                  d = e("../../component-library"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../../shared/constants/hardware-wallets"),
                  m = e("../../../../shared/constants/keyring"),
                  h = O(e("../../app/user-preferenced-currency-display/user-preferenced-currency-display.component")),
                  y = e("../../../helpers/constants/common"),
                  g = e("../../../ducks/metamask/metamask"),
                  b = O(e("../../ui/tooltip/tooltip")),
                  v = e("../../../../shared/constants/metametrics"),
                  T = e("../../../contexts/metametrics"),
                  E = e("../../../selectors"),
                  w = e("../../../hooks/useAccountTotalFiatBalance");
                function O(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function x(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (x = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const S = ({
                  identity: e,
                  selected: t = !1,
                  onClick: n,
                  closeMenu: a,
                  connectedAvatar: O,
                  connectedAvatarName: x,
                  showOptions: S = !1
                }) => {
                  const _ = (0, l.useI18nContext)(),
                    [k, C] = (0, r.useState)(!1),
                    [A, N] = (0, r.useState)(),
                    P = (0, i.useSelector)(E.getUseBlockie),
                    { totalWeiBalance: I, orderedTokenList: M } = (0, w.useAccountTotalFiatBalance)(e.address),
                    j = e.balance,
                    B = (0, r.useRef)(null);
                  (0, r.useEffect)(() => {
                    var e, n;
                    t && (null === (e = B.current) || void 0 === e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e));
                  }, [B, t]);
                  const R = (0, i.useSelector)((t) => (0, g.findKeyringForAddress)(t, e.address)),
                    D = (function (e, { type: t }) {
                      switch (t) {
                        case m.KeyringType.qr:
                          return f.HardwareKeyringNames.qr;
                        case m.KeyringType.imported:
                          return e("imported");
                        case m.KeyringType.trezor:
                          return f.HardwareKeyringNames.trezor;
                        case m.KeyringType.ledger:
                          return f.HardwareKeyringNames.ledger;
                        case m.KeyringType.lattice:
                          return f.HardwareKeyringNames.lattice;
                        case m.KeyringType.snap:
                          return `${e("snaps")} (${e("beta")})`;
                        default:
                          return null;
                      }
                    })(_, R),
                    L = (0, r.useContext)(T.MetaMetricsContext);
                  (0, i.useSelector)(E.getNativeCurrencyImage), (0, i.useSelector)(g.getNativeCurrency);
                  return r.default.createElement(
                    d.Box,
                    {
                      display: p.Display.Flex,
                      padding: 4,
                      backgroundColor: t ? p.Color.primaryMuted : p.Color.transparent,
                      className: (0, o.default)("multichain-account-list-item", {
                        "multichain-account-list-item--selected": t,
                        "multichain-account-list-item--connected": Boolean(O)
                      }),
                      ref: B,
                      onClick: () => {
                        k || n();
                      }
                    },
                    t &&
                      r.default.createElement(d.Box, {
                        className: "multichain-account-list-item__selected-indicator",
                        borderRadius: p.BorderRadius.pill,
                        backgroundColor: p.Color.primaryDefault
                      }),
                    r.default.createElement(d.AvatarAccount, {
                      borderColor: p.BorderColor.transparent,
                      size: p.Size.SM,
                      address: e.address,
                      variant: P ? d.AvatarAccountVariant.Blockies : d.AvatarAccountVariant.Jazzicon,
                      marginInlineEnd: 2
                    }),
                    r.default.createElement(
                      d.Box,
                      {
                        display: p.Display.Flex,
                        flexDirection: p.FlexDirection.Column,
                        className: "multichain-account-list-item__content"
                      },
                      r.default.createElement(
                        d.Box,
                        { display: p.Display.Flex, flexDirection: p.FlexDirection.Column },
                        r.default.createElement(
                          d.Box,
                          { display: p.Display.Flex, justifyContent: p.JustifyContent.spaceBetween },
                          r.default.createElement(
                            d.Box,
                            { className: "multichain-account-list-item__account-name", marginInlineEnd: 2 },
                            r.default.createElement(
                              d.Text,
                              {
                                as: "button",
                                onClick: (e) => {
                                  e.stopPropagation(), n();
                                },
                                variant: p.TextVariant.bodyMdMedium,
                                className: "multichain-account-list-item__account-name__button",
                                padding: 0,
                                backgroundColor: p.BackgroundColor.transparent,
                                width: p.BlockSize.Full,
                                textAlign: p.TextAlign.Left,
                                ellipsis: !0
                              },
                              e.name.length > 17
                                ? r.default.createElement(
                                    b.default,
                                    { title: e.name, position: "bottom", wrapperClassName: "multichain-account-list-item__tooltip" },
                                    e.name
                                  )
                                : e.name
                            )
                          ),
                          r.default.createElement(
                            d.Text,
                            {
                              as: "div",
                              className: "multichain-account-list-item__asset",
                              display: p.Display.Flex,
                              flexDirection: p.FlexDirection.Row,
                              alignItems: p.AlignItems.center,
                              justifyContent: p.JustifyContent.flexEnd,
                              ellipsis: !0,
                              textAlign: p.TextAlign.End
                            },
                            r.default.createElement(h.default, { ethNumberOfDecimals: 3, value: j, type: y.PRIMARY })
                          )
                        )
                      ),
                      r.default.createElement(
                        d.Box,
                        { display: p.Display.Flex, justifyContent: p.JustifyContent.spaceBetween },
                        r.default.createElement(
                          d.Box,
                          { display: p.Display.Flex, alignItems: p.AlignItems.center },
                          O
                            ? r.default.createElement(d.AvatarFavicon, {
                                size: p.Size.XS,
                                src: O,
                                name: x,
                                className: "multichain-account-list-item__avatar"
                              })
                            : null,
                          r.default.createElement(
                            d.Text,
                            { variant: p.TextVariant.bodySm, color: p.Color.textAlternative },
                            (0, c.shortenAddress)((0, s.toChecksumHexAddress)(e.address))
                          )
                        ),
                        r.default.createElement(
                          d.Text,
                          { variant: p.TextVariant.bodySm, color: p.Color.textAlternative, textAlign: p.TextAlign.End, as: "div" },
                          r.default.createElement(h.default, { ethNumberOfDecimals: 3, value: j, type: y.SECONDARY })
                        )
                      ),
                      D
                        ? r.default.createElement(d.Tag, {
                            label: D,
                            labelProps: { variant: p.TextVariant.bodyXs, color: p.Color.textAlternative }
                          })
                        : null
                    ),
                    S
                      ? r.default.createElement(d.ButtonIcon, {
                          ariaLabel: `${e.name} ${_("options")}`,
                          iconName: d.IconName.MoreVertical,
                          size: d.IconSize.Sm,
                          ref: (e) => {
                            N(e);
                          },
                          onClick: (e) => {
                            e.stopPropagation(),
                              k ||
                                L({
                                  event: v.MetaMetricsEventName.AccountDetailMenuOpened,
                                  category: v.MetaMetricsEventCategory.Navigation,
                                  properties: { location: "Account Options" }
                                }),
                              C(!k);
                          },
                          "data-testid": "account-list-item-menu-button"
                        })
                      : null,
                    S
                      ? r.default.createElement(u.AccountListItemMenu, {
                          anchorElement: A,
                          identity: e,
                          onClose: () => C(!1),
                          isOpen: k,
                          isRemovable: (null == R ? void 0 : R.type) !== m.KeyringType.hdKeyTree,
                          closeMenu: a
                        })
                      : null
                  );
                };
                (n.AccountListItem = S),
                  (S.propTypes = {
                    identity: a.default.shape({
                      name: a.default.string.isRequired,
                      address: a.default.string.isRequired,
                      balance: a.default.string.isRequired
                    }).isRequired,
                    selected: a.default.bool,
                    onClick: a.default.func.isRequired,
                    closeMenu: a.default.func,
                    connectedAvatar: a.default.string,
                    connectedAvatarName: a.default.string,
                    showOptions: a.default.bool
                  }),
                  (S.displayName = "AccountListItem");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-item/account-list-item.js" }
    ],
    [
      4509,
      { "./account-list-item": 4508 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountListItem", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountListItem;
                    }
                  });
                var r = e("./account-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-item/index.js" }
    ],
    [
      4510,
      {
        "..": 4555,
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../component-library": 4453,
        "fuse.js": 2821,
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
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountListMenu = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = T(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = v(e("prop-types")),
                  o = e("react-router-dom"),
                  i = v(e("fuse.js")),
                  s = e("react-redux"),
                  l = e("../../component-library"),
                  c = e(".."),
                  u = e("../../../helpers/constants/design-system"),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../contexts/metametrics"),
                  f = e("../../../selectors"),
                  m = e("../../../store/actions"),
                  h = e("../../../../shared/constants/metametrics"),
                  y = e("../../../helpers/constants/routes"),
                  g = e("../../../../app/scripts/lib/util"),
                  b = e("../../../../shared/constants/app");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (T = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function E() {
                  return (
                    (E = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    E.apply(this, arguments)
                  );
                }
                const w = "",
                  O = "menu",
                  x = "add",
                  S = "import",
                  _ = ({ onClose: e, showAccountCreation: t = !0, accountListItemProps: n = {} }) => {
                    const a = (0, d.useI18nContext)(),
                      v = (0, r.useContext)(p.MetaMetricsContext),
                      T = (0, s.useSelector)(f.getMetaMaskAccountsOrdered),
                      _ = (0, s.useSelector)(f.getSelectedAccount),
                      k = (0, s.useSelector)(f.getConnectedSubjectsForAllAddresses),
                      C = (0, s.useSelector)(f.getOriginOfCurrentTab),
                      A = (0, o.useHistory)(),
                      N = (0, s.useDispatch)(),
                      P = (0, s.useSelector)(f.getIsAddSnapAccountEnabled),
                      [I, M] = (0, r.useState)(""),
                      [j, B] = (0, r.useState)(w);
                    let R = T;
                    if (I) {
                      const e = new i.default(T, {
                        threshold: 0.2,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: ["name", "address"]
                      });
                      e.setCollection(T), (R = e.search(I));
                    }
                    let D = a("selectAnAccount");
                    j === x || j === O ? (D = a("addAccount")) : j === S && (D = a("importAccount"));
                    let L = null;
                    return (
                      j !== w && (L = j === O ? () => B(w) : () => B(O)),
                      r.default.createElement(
                        l.Modal,
                        { isOpen: !0, onClose: e },
                        r.default.createElement(l.ModalOverlay, null),
                        r.default.createElement(
                          l.ModalContent,
                          {
                            className: "multichain-account-menu-popover",
                            modalDialogProps: {
                              className: "multichain-account-menu-popover__dialog",
                              padding: 0,
                              display: u.Display.Flex,
                              flexDirection: u.FlexDirection.Column
                            }
                          },
                          r.default.createElement(l.ModalHeader, { padding: 4, onClose: e, onBack: L }, D),
                          j === x
                            ? r.default.createElement(
                                l.Box,
                                { paddingLeft: 4, paddingRight: 4, paddingBottom: 4 },
                                r.default.createElement(c.CreateAccount, {
                                  onActionComplete: (t) => {
                                    t ? e() : B(w);
                                  }
                                })
                              )
                            : null,
                          j === S
                            ? r.default.createElement(
                                l.Box,
                                { paddingLeft: 4, paddingRight: 4, paddingBottom: 4, paddingTop: 0 },
                                r.default.createElement(c.ImportAccount, {
                                  onActionComplete: (t) => {
                                    t ? e() : B(w);
                                  }
                                })
                              )
                            : null,
                          j === O
                            ? r.default.createElement(
                                l.Box,
                                { padding: 4 },
                                r.default.createElement(
                                  l.Box,
                                  null,
                                  r.default.createElement(
                                    l.ButtonLink,
                                    {
                                      size: u.Size.SM,
                                      startIconName: l.IconName.Add,
                                      onClick: () => {
                                        v({
                                          category: h.MetaMetricsEventCategory.Navigation,
                                          event: h.MetaMetricsEventName.AccountAddSelected,
                                          properties: { account_type: h.MetaMetricsEventAccountType.Default, location: "Main Menu" }
                                        }),
                                          B(x);
                                      },
                                      "data-testid": "multichain-account-menu-popover-add-account"
                                    },
                                    a("addNewAccount")
                                  )
                                ),
                                r.default.createElement(
                                  l.Box,
                                  { marginTop: 4 },
                                  r.default.createElement(
                                    l.ButtonLink,
                                    {
                                      size: u.Size.SM,
                                      startIconName: l.IconName.Import,
                                      onClick: () => {
                                        v({
                                          category: h.MetaMetricsEventCategory.Navigation,
                                          event: h.MetaMetricsEventName.AccountAddSelected,
                                          properties: { account_type: h.MetaMetricsEventAccountType.Imported, location: "Main Menu" }
                                        }),
                                          B(S);
                                      }
                                    },
                                    a("importAccount")
                                  )
                                ),
                                r.default.createElement(
                                  l.Box,
                                  { marginTop: 4 },
                                  r.default.createElement(
                                    l.ButtonLink,
                                    {
                                      size: u.Size.SM,
                                      startIconName: l.IconName.Hardware,
                                      onClick: () => {
                                        e(),
                                          v({
                                            category: h.MetaMetricsEventCategory.Navigation,
                                            event: h.MetaMetricsEventName.AccountAddSelected,
                                            properties: { account_type: h.MetaMetricsEventAccountType.Hardware, location: "Main Menu" }
                                          }),
                                          (0, g.getEnvironmentType)() === b.ENVIRONMENT_TYPE_POPUP
                                            ? global.platform.openExtensionInBrowser(y.CONNECT_HARDWARE_ROUTE)
                                            : A.push(y.CONNECT_HARDWARE_ROUTE);
                                      }
                                    },
                                    a("addHardwareWallet")
                                  )
                                ),
                                P
                                  ? r.default.createElement(
                                      l.Box,
                                      { marginTop: 4 },
                                      r.default.createElement(
                                        l.ButtonLink,
                                        {
                                          size: u.Size.SM,
                                          startIconName: l.IconName.Snaps,
                                          onClick: () => {
                                            e(),
                                              (0, g.getEnvironmentType)() === b.ENVIRONMENT_TYPE_POPUP
                                                ? global.platform.openExtensionInBrowser(y.ADD_SNAP_ACCOUNT_ROUTE, null, !0)
                                                : A.push(y.ADD_SNAP_ACCOUNT_ROUTE);
                                          }
                                        },
                                        a("settingAddSnapAccount")
                                      )
                                    )
                                  : null
                              )
                            : null,
                          j === w
                            ? r.default.createElement(
                                r.default.Fragment,
                                null,
                                T.length > 1
                                  ? r.default.createElement(
                                      l.Box,
                                      { paddingLeft: 4, paddingRight: 4, paddingBottom: 4, paddingTop: 0 },
                                      r.default.createElement(l.TextFieldSearch, {
                                        size: u.Size.SM,
                                        width: u.BlockSize.Full,
                                        placeholder: a("searchAccounts"),
                                        value: I,
                                        onChange: (e) => M(e.target.value),
                                        clearButtonOnClick: () => M(""),
                                        clearButtonProps: { size: u.Size.SM },
                                        inputProps: { autoFocus: !0 }
                                      })
                                    )
                                  : null,
                                r.default.createElement(
                                  l.Box,
                                  { className: "multichain-account-menu-popover__list" },
                                  0 === R.length && "" !== I
                                    ? r.default.createElement(
                                        l.Text,
                                        {
                                          paddingLeft: 4,
                                          paddingRight: 4,
                                          color: u.TextColor.textMuted,
                                          "data-testid": "multichain-account-menu-popover-no-results"
                                        },
                                        a("noAccountsFound")
                                      )
                                    : null,
                                  R.map((t) => {
                                    var a;
                                    const o = null === (a = k[t.address]) || void 0 === a ? void 0 : a.find(({ origin: e }) => e === C);
                                    return r.default.createElement(
                                      c.AccountListItem,
                                      E(
                                        {
                                          onClick: () => {
                                            e(),
                                              v({
                                                category: h.MetaMetricsEventCategory.Navigation,
                                                event: h.MetaMetricsEventName.NavAccountSwitched,
                                                properties: { location: "Main Menu" }
                                              }),
                                              N((0, m.setSelectedAccount)(t.address));
                                          },
                                          identity: t,
                                          key: t.address,
                                          selected: _.address === t.address,
                                          closeMenu: e,
                                          connectedAvatar: null == o ? void 0 : o.iconUrl,
                                          connectedAvatarName: null == o ? void 0 : o.name,
                                          showOptions: !0
                                        },
                                        n
                                      )
                                    );
                                  })
                                ),
                                t
                                  ? r.default.createElement(
                                      l.Box,
                                      {
                                        paddingTop: 2,
                                        paddingBottom: 4,
                                        paddingLeft: 4,
                                        paddingRight: 4,
                                        alignItems: u.AlignItems.center,
                                        display: u.Display.Flex
                                      },
                                      r.default.createElement(
                                        l.ButtonSecondary,
                                        {
                                          startIconName: l.IconName.Add,
                                          variant: l.ButtonVariant.Secondary,
                                          size: l.ButtonSecondarySize.Lg,
                                          block: !0,
                                          onClick: () => B(O),
                                          "data-testid": "multichain-account-menu-popover-action-button"
                                        },
                                        a("addImportAccount")
                                      )
                                    )
                                  : null
                              )
                            : null
                        )
                      )
                    );
                  };
                (n.AccountListMenu = _),
                  (_.propTypes = {
                    onClose: a.default.func.isRequired,
                    showAccountCreation: a.default.bool,
                    accountListItemProps: a.default.object
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-menu/account-list-menu.js" }
    ],
    [
      4511,
      { "./account-list-menu": 4510 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountListMenu", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountListMenu;
                    }
                  });
                var r = e("./account-list-menu");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-list-menu/index.js" }
    ],
    [
      4512,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "@metamask/controller-utils": 1056,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AccountPicker = void 0);
                var r = p(e("react")),
                  a = p(e("prop-types")),
                  o = p(e("classnames")),
                  i = e("react-redux"),
                  s = e("@metamask/controller-utils"),
                  l = e("../../component-library"),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../../selectors"),
                  d = e("../../../helpers/utils/util");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f() {
                  return (
                    (f = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                        }),
                    f.apply(this, arguments)
                  );
                }
                const m = ({
                  address: e,
                  name: t,
                  onClick: n,
                  disabled: a = !1,
                  showAddress: p = !1,
                  addressProps: m = {},
                  labelProps: h = {},
                  textProps: y = {},
                  className: g = "",
                  ...b
                }) => {
                  const v = (0, i.useSelector)(u.getUseBlockie),
                    T = (0, d.shortenAddress)((0, s.toChecksumHexAddress)(e));
                  return r.default.createElement(
                    l.ButtonBase,
                    f(
                      {
                        className: (0, o.default)("multichain-account-picker", g),
                        "data-testid": "account-menu-icon",
                        onClick: n,
                        backgroundColor: c.BackgroundColor.transparent,
                        borderRadius: c.BorderRadius.LG,
                        ellipsis: !0,
                        textProps: { display: c.Display.Flex, alignItems: c.AlignItems.center, gap: 1, ...y },
                        size: p ? l.ButtonBaseSize.Lg : l.ButtonBaseSize.Md,
                        disabled: a,
                        endIconName: l.IconName.ArrowDown,
                        endIconProps: { color: c.IconColor.iconDefault, size: c.Size.SM }
                      },
                      b
                    ),
                    r.default.createElement(l.AvatarAccount, {
                      variant: v ? l.AvatarAccountVariant.Blockies : l.AvatarAccountVariant.Jazzicon,
                      address: e,
                      size: c.Size.SM,
                      borderColor: c.BackgroundColor.backgroundDefault
                    }),
                    r.default.createElement(
                      l.Text,
                      f({ as: "span", ellipsis: !0 }, h, {
                        className: (0, o.default)("multichain-account-picker__label", h.className ?? "")
                      }),
                      t,
                      p
                        ? r.default.createElement(
                            l.Text,
                            f({ color: c.TextColor.textAlternative, variant: c.TextVariant.bodySm, ellipsis: !0 }, m),
                            T
                          )
                        : null
                    )
                  );
                };
                (n.AccountPicker = m),
                  (m.propTypes = {
                    name: a.default.string.isRequired,
                    address: a.default.string.isRequired,
                    onClick: a.default.func.isRequired,
                    disabled: a.default.bool,
                    showAddress: a.default.bool,
                    block: a.default.bool,
                    addressProps: a.default.object,
                    labelProps: a.default.object,
                    textProps: a.default.object,
                    className: a.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-picker/account-picker.js" }
    ],
    [
      4513,
      { "./account-picker": 4512 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AccountPicker", {
                    enumerable: !0,
                    get: function () {
                      return r.AccountPicker;
                    }
                  });
                var r = e("./account-picker");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/account-picker/index.js" }
    ],
    [
      4514,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../component-library": 4453,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ActivityListItem = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = l(e("classnames")),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../component-library");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = ({
                  topContent: e,
                  icon: t,
                  title: n,
                  subtitle: a,
                  midContent: l,
                  children: c,
                  rightContent: u,
                  onClick: d,
                  className: p,
                  "data-testid": f
                }) => {
                  const m = (0, o.default)("activity-list-item", p, { "activity-list-item--single-content-row": !(a || c) });
                  return r.default.createElement(
                    s.Box,
                    {
                      tabIndex: 0,
                      backgroundColor: i.BackgroundColor.backgroundDefault,
                      className: m,
                      onClick: d,
                      onKeyPress: (e) => {
                        "Enter" === e.key && d();
                      },
                      "data-testid": f,
                      padding: 4,
                      display: i.Display.Flex,
                      width: i.BlockSize.Full,
                      flexWrap: i.FlexWrap.Wrap,
                      gap: 4
                    },
                    e &&
                      r.default.createElement(
                        s.Text,
                        { variant: i.TextVariant.bodyMd, color: i.TextColor.textDefault, display: i.Display.Flex, width: i.BlockSize.Full },
                        e
                      ),
                    r.default.createElement(
                      s.Box,
                      { display: i.Display.Flex, width: i.BlockSize.Full, flexDirection: i.FlexDirection.Row, gap: 4 },
                      t && r.default.createElement(s.Box, { display: i.Display.InlineFlex }, t),
                      r.default.createElement(
                        s.Box,
                        { display: i.Display.InlineFlex, width: i.BlockSize.Full, className: "activity-list-item__content-container" },
                        r.default.createElement(
                          s.Box,
                          {
                            display: i.Display.InlineFlex,
                            width: [i.BlockSize.OneThird, i.BlockSize.SevenTwelfths],
                            flexDirection: i.FlexDirection.Column,
                            className: "activity-list-item__detail-container"
                          },
                          r.default.createElement(
                            s.Text,
                            {
                              ellipsis: !0,
                              textAlign: i.TextAlign.Left,
                              variant: i.TextVariant.bodyLgMedium,
                              fontWeight: i.FontWeight.Medium,
                              "data-testid": "activity-list-item-action"
                            },
                            n
                          ),
                          a &&
                            r.default.createElement(
                              s.Text,
                              {
                                as: "div",
                                ellipsis: !0,
                                textAlign: i.TextAlign.Left,
                                variant: i.TextVariant.bodyMd,
                                fontWeight: i.FontWeight.Normal
                              },
                              a
                            ),
                          c && r.default.createElement(s.Box, { className: "activity-list-item__children" }, c)
                        ),
                        l &&
                          r.default.createElement(
                            s.Box,
                            { display: i.Display.InlineFlex, className: "activity-list-item__mid-content" },
                            l
                          ),
                        u &&
                          r.default.createElement(
                            s.Box,
                            {
                              display: i.Display.InlineFlex,
                              width: i.BlockSize.Full,
                              height: i.BlockSize.Min,
                              flexDirection: i.FlexDirection.Column,
                              alignItems: i.AlignItems.flexEnd,
                              className: "activity-list-item__right-content"
                            },
                            u
                          )
                      )
                    )
                  );
                };
                (n.ActivityListItem = c),
                  (c.propTypes = {
                    topContent: a.default.node,
                    icon: a.default.node,
                    title: a.default.oneOfType([a.default.string, a.default.node]),
                    subtitle: a.default.node,
                    midContent: a.default.node,
                    children: a.default.node,
                    rightContent: a.default.node,
                    onClick: a.default.func,
                    className: a.default.string,
                    "data-testid": a.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/activity-list-item/activity-list-item.js" }
    ],
    [
      4515,
      { "./activity-list-item": 4514 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "ActivityListItem", {
                    enumerable: !0,
                    get: function () {
                      return r.ActivityListItem;
                    }
                  });
                var r = e("./activity-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/activity-list-item/index.js" }
    ],
    [
      4516,
      {
        "../../../../shared/constants/time": 3972,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useCopyToClipboard": 4830,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "../../ui/tooltip/tooltip": 4737,
        "@metamask/controller-utils": 1056,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AddressCopyButton = void 0);
                var r = m(e("react")),
                  a = m(e("prop-types")),
                  o = m(e("classnames")),
                  i = e("@metamask/controller-utils"),
                  s = e("../../component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../hooks/useCopyToClipboard"),
                  u = e("../../../helpers/utils/util"),
                  d = m(e("../../ui/tooltip/tooltip")),
                  p = e("../../../hooks/useI18nContext"),
                  f = e("../../../../shared/constants/time");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const h = ({ address: e, shorten: t = !1, wrap: n = !1, onClick: a }) => {
                  const m = (0, i.toChecksumHexAddress)(e),
                    h = t ? (0, u.shortenAddress)(m) : m,
                    [y, g] = (0, c.useCopyToClipboard)(f.MINUTE),
                    b = (0, p.useI18nContext)();
                  let v = b(y ? "copiedExclamation" : "copyToClipboard");
                  return r.default.createElement(
                    d.default,
                    { position: "bottom", title: v },
                    r.default.createElement(
                      s.ButtonBase,
                      {
                        backgroundColor: l.BackgroundColor.primaryMuted,
                        onClick: () => {
                          g(m), null == a || a();
                        },
                        paddingRight: 4,
                        paddingLeft: 4,
                        size: l.Size.SM,
                        variant: l.TextVariant.bodySm,
                        color: l.TextColor.primaryDefault,
                        endIconName: y ? s.IconName.CopySuccess : s.IconName.Copy,
                        className: (0, o.default)("multichain-address-copy-button", { "multichain-address-copy-button__address--wrap": n }),
                        borderRadius: l.BorderRadius.pill,
                        alignItems: l.AlignItems.center,
                        "data-testid": "address-copy-button-text"
                      },
                      r.default.createElement(s.Box, { display: l.Display.Flex }, h)
                    )
                  );
                };
                (n.AddressCopyButton = h),
                  (h.propTypes = {
                    address: a.default.string.isRequired,
                    shorten: a.default.bool,
                    wrap: a.default.bool,
                    onClick: a.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/address-copy-button/address-copy-button.js" }
    ],
    [
      4517,
      { "./address-copy-button": 4516 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AddressCopyButton", {
                    enumerable: !0,
                    get: function () {
                      return r.AddressCopyButton;
                    }
                  });
                var r = e("./address-copy-button");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/address-copy-button/index.js" }
    ],
    [
      4518,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/util": 4812,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "../../ui/tooltip": 4736,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AddressListItem = void 0);
                var r = u(e("react")),
                  a = e("react-redux"),
                  o = e("../../component-library"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../selectors"),
                  l = e("../../../helpers/utils/util"),
                  c = u(e("../../ui/tooltip"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.AddressListItem = ({ label: e, address: t, onClick: n }) => {
                  const u = (0, a.useSelector)(s.getUseBlockie);
                  return r.default.createElement(
                    o.Box,
                    {
                      display: i.Display.Flex,
                      padding: 4,
                      as: "button",
                      onClick: (e) => {
                        e.stopPropagation(), n();
                      },
                      width: i.BlockSize.Full,
                      backgroundColor: i.BackgroundColor.transparent,
                      className: "address-list-item"
                    },
                    r.default.createElement(o.AvatarAccount, {
                      borderColor: i.BorderColor.transparent,
                      size: o.AvatarAccountSize.Sm,
                      address: t,
                      variant: u ? o.AvatarAccountVariant.Blockies : o.AvatarAccountVariant.Jazzicon,
                      marginInlineEnd: 2
                    }),
                    r.default.createElement(
                      o.Box,
                      { display: i.Display.Flex, flexDirection: i.FlexDirection.Column, style: { overflow: "hidden" } },
                      r.default.createElement(
                        o.Text,
                        {
                          variant: i.TextVariant.bodyMdMedium,
                          padding: 0,
                          width: i.BlockSize.Full,
                          textAlign: i.TextAlign.Left,
                          ellipsis: !0,
                          className: "address-list-item__label"
                        },
                        e
                      ),
                      r.default.createElement(
                        o.Text,
                        {
                          variant: i.TextVariant.bodySm,
                          color: i.TextColor.textAlternative,
                          ellipsis: !0,
                          "data-testid": "address-list-item-address",
                          as: "div"
                        },
                        r.default.createElement(c.default, { title: t, position: "bottom" }, (0, l.shortenAddress)(t))
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/address-list-item/address-list-item.tsx" }
    ],
    [
      4519,
      { "./address-list-item": 4518 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AddressListItem", {
                    enumerable: !0,
                    get: function () {
                      return r.AddressListItem;
                    }
                  });
                var r = e("./address-list-item");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/address-list-item/index.ts" }
    ],
    [
      4520,
      { "../../../store/actionConstants": 5203 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.hideSelectActionModal = function () {
                    return { type: r.SELECT_ACTION_MODAL_CLOSE };
                  }),
                  (n.showSelectActionModal = function () {
                    return { type: r.SELECT_ACTION_MODAL_OPEN };
                  });
                var r = (function (e, t) {
                  if (!t && e && e.__esModule) return e;
                  if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                  var n = a(t);
                  if (n && n.has(e)) return n.get(e);
                  var r = { __proto__: null },
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                  for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
                    }
                  return (r.default = e), n && n.set(e, r), r;
                })(e("../../../store/actionConstants"));
                function a(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (a = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-footer/app-footer-actions.tsx" }
    ],
    [
      4521,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../component-library": 4453,
        "./app-footer-actions": 4520,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AppFooter = void 0);
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("react-router-dom"),
                  i = e("react-redux"),
                  s = e("../../../helpers/constants/routes"),
                  l = e("../../component-library"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../helpers/constants/design-system"),
                  d = e("../../../selectors"),
                  p = e("../../../../app/scripts/lib/util"),
                  f = e("../../../../shared/constants/app"),
                  m = e("./app-footer-actions");
                n.AppFooter = () => {
                  var e, t;
                  const n = (0, c.useI18nContext)(),
                    r = (0, o.useLocation)(),
                    h = (0, i.useDispatch)(),
                    y = (0, o.useHistory)(),
                    g = r.pathname === s.DEFAULT_ROUTE,
                    b = r.pathname === s.CONNECTIONS,
                    v = (0, i.useSelector)((e) => e.metamask.isUnlocked),
                    T = (0, p.getEnvironmentType)() === f.ENVIRONMENT_TYPE_FULLSCREEN,
                    E = (0, i.useSelector)(d.getSelectedAddress),
                    w = (0, i.useSelector)(d.getOriginOfCurrentTab),
                    O =
                      null === (e = (0, i.useSelector)(d.getConnectedSubjectsForAllAddresses)[E]) || void 0 === e
                        ? void 0
                        : e.find(({ origin: e }) => e === w),
                    x = null == O ? void 0 : O.iconUrl,
                    S = null == O ? void 0 : O.name,
                    _ = (0, i.useSelector)(d.getTestNetworkBackgroundColor),
                    k = (0, i.useSelector)(d.getCurrentNetwork);
                  return a.default.createElement(
                    a.default.Fragment,
                    null,
                    v
                      ? a.default.createElement(
                          a.default.Fragment,
                          null,
                          a.default.createElement(
                            l.Box,
                            {
                              className: "app-footer",
                              "data-test-id": "app-footer",
                              width: u.BlockSize.Full,
                              backgroundColor: u.BackgroundColor.backgroundAlternative,
                              display: u.Display.Flex,
                              flexDirection: u.FlexDirection.Row,
                              alignItems: u.AlignItems.center
                            },
                            a.default.createElement(
                              l.Box,
                              {
                                className: "app-footer__contents",
                                width: u.BlockSize.Full,
                                display: u.Display.Flex,
                                alignItems: u.AlignItems.center,
                                justifyContent: u.JustifyContent.spaceBetween,
                                backgroundColor: u.BackgroundColor.backgroundDefault,
                                flexDirection: u.FlexDirection.Row,
                                padding: 2,
                                paddingLeft: 4,
                                paddingRight: 4,
                                gap: 2
                              },
                              a.default.createElement(
                                l.Box,
                                {
                                  as: "a",
                                  href: "#",
                                  onClick: (e) => {
                                    e.preventDefault(), y.push(s.DEFAULT_ROUTE);
                                  },
                                  className: "app-footer__button",
                                  width: u.BlockSize.OneThird,
                                  padding: 2,
                                  display: u.Display.Flex,
                                  flexDirection: u.FlexDirection.Column,
                                  alignItems: u.AlignItems.center,
                                  tabIndex: 0
                                },
                                a.default.createElement(l.Icon, {
                                  "data-testid": "app-footer-wallet-button",
                                  color: g ? u.IconColor.primaryDefault : u.IconColor.iconAlternative,
                                  name: l.IconName.Wallet,
                                  size: l.IconSize.Lg
                                }),
                                a.default.createElement(
                                  l.Text,
                                  { color: g ? u.TextColor.primaryDefault : u.TextColor.textAlternative, variant: u.TextVariant.bodyMd },
                                  n("wallet")
                                )
                              ),
                              a.default.createElement(
                                l.Box,
                                {
                                  width: u.BlockSize.OneThird,
                                  padding: 2,
                                  display: u.Display.Flex,
                                  flexDirection: u.FlexDirection.Column,
                                  alignItems: u.AlignItems.center,
                                  justifyContent: u.JustifyContent.center,
                                  backgroundColor: u.BackgroundColor.backgroundDefault,
                                  tabIndex: 0
                                },
                                a.default.createElement(l.ButtonIcon, {
                                  className: "app-footer__actions-button",
                                  "data-testid": "app-footer-actions-button",
                                  iconName: l.IconName.SwapVertical,
                                  color: u.IconColor.primaryInverse,
                                  backgroundColor: u.BackgroundColor.primaryDefault,
                                  borderRadius: u.BorderRadius.full,
                                  size: l.ButtonIconSize.Lg,
                                  onClick: () => h((0, m.showSelectActionModal)()),
                                  ariaLabel: n("selectActionButton")
                                })
                              ),
                              a.default.createElement(
                                l.Box,
                                {
                                  as: "a",
                                  href: "#",
                                  onClick: (e) => {
                                    e.preventDefault(), y.push(T ? s.ALL_CONNECTIONS : s.CONNECTIONS);
                                  },
                                  className: "app-footer__button",
                                  width: u.BlockSize.OneThird,
                                  padding: 2,
                                  display: u.Display.Flex,
                                  flexDirection: u.FlexDirection.Column,
                                  alignItems: u.AlignItems.center,
                                  tabIndex: 0
                                },
                                O
                                  ? a.default.createElement(
                                      l.Box,
                                      { alignItems: u.AlignItems.center },
                                      a.default.createElement(
                                        l.BadgeWrapper,
                                        {
                                          display: u.Display.Flex,
                                          className: "app-footer__connected-badge",
                                          badge: a.default.createElement(l.AvatarNetwork, {
                                            backgroundColor: _,
                                            size: l.AvatarNetworkSize.Xs,
                                            name: k.nickname,
                                            src: null === (t = k.rpcPrefs) || void 0 === t ? void 0 : t.imageUrl,
                                            borderWidth: 2,
                                            borderColor: u.BorderColor.borderDefault
                                          })
                                        },
                                        a.default.createElement(l.AvatarFavicon, { size: u.Size.SM, src: x, name: S })
                                      )
                                    )
                                  : a.default.createElement(l.Icon, {
                                      color: b ? u.IconColor.primaryDefault : u.IconColor.iconAlternative,
                                      name: l.IconName.Global,
                                      size: l.IconSize.Lg
                                    }),
                                a.default.createElement(
                                  l.Text,
                                  { color: b ? u.TextColor.primaryDefault : u.TextColor.textAlternative, variant: u.TextVariant.bodyMd },
                                  n("connections")
                                )
                              )
                            )
                          )
                        )
                      : null
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-footer/app-footer.js" }
    ],
    [
      4522,
      { "./app-footer": 4521 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AppFooter", {
                    enumerable: !0,
                    get: function () {
                      return r.AppFooter;
                    }
                  });
                var r = e("./app-footer");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-footer/index.js" }
    ],
    [
      4523,
      {
        "..": 4555,
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/time": 3972,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/send": 4765,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useCopyToClipboard": 4830,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../../app/connected-status-indicator": 4093,
        "../../component-library": 4453,
        "../../ui/metafox-logo": 4685,
        "../../ui/tooltip": 4736,
        "@metamask/controller-utils": 1056,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675,
        "webextension-polyfill": 3937
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AppHeader = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = A(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = C(e("classnames")),
                  o = C(e("prop-types")),
                  i = C(e("webextension-polyfill")),
                  s = e("react-redux"),
                  l = e("react-router-dom"),
                  c = e("@metamask/controller-utils"),
                  u = e("../../../contexts/metametrics"),
                  d = e("../../../../shared/constants/metametrics"),
                  p = e("../../../helpers/constants/routes"),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../component-library"),
                  h = e("../../../selectors"),
                  y = e(".."),
                  g = e("../../../store/actions"),
                  b = C(e("../../ui/metafox-logo")),
                  v = e("../../../../app/scripts/lib/util"),
                  T = e("../../../../shared/constants/app"),
                  E = C(e("../../app/connected-status-indicator")),
                  w = e("../../../hooks/useI18nContext"),
                  O = e("../../../ducks/metamask/metamask"),
                  x = e("../../../ducks/send"),
                  S = C(e("../../ui/tooltip")),
                  _ = e("../../../hooks/useCopyToClipboard"),
                  k = e("../../../../shared/constants/time");
                function C(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function A(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (A = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const N = ({ location: e }) => {
                  var t, n, o, C;
                  const A = (0, r.useContext)(u.MetaMetricsContext),
                    [N, P] = (0, r.useState)(!1),
                    [I, M] = (0, r.useState)(1),
                    j = (0, r.useRef)(!1),
                    B = (0, s.useSelector)(h.getOriginOfCurrentTab),
                    R = (0, l.useHistory)(),
                    D = e.pathname === p.DEFAULT_ROUTE,
                    L = (0, s.useSelector)(O.getIsUnlocked),
                    F = (0, w.useI18nContext)(),
                    $ = (0, s.useSelector)(h.getCurrentChainId),
                    z = (0, s.useSelector)(h.getSelectedIdentity),
                    V = (0, s.useDispatch)(),
                    U = (0, s.useSelector)(O.getCompletedOnboarding),
                    W = (0, s.useSelector)(h.getOnboardedInThisUISession),
                    H = (0, s.useSelector)(h.getShowProductTour),
                    G = (0, s.useSelector)(h.getCurrentNetwork),
                    Y = (0, s.useSelector)(h.getTestNetworkBackgroundColor),
                    q = (0, s.useSelector)(h.getSelectedAddress),
                    [K, Q] = ((0, c.toChecksumHexAddress)(q), (0, _.useCopyToClipboard)(k.MINUTE)),
                    X = (0, v.getEnvironmentType)() === T.ENVIRONMENT_TYPE_POPUP,
                    J = (0, v.getEnvironmentType)() === T.ENVIRONMENT_TYPE_POPUP && B && B !== i.default.runtime.id,
                    Z = U && !W && H,
                    ee = null === (t = document.querySelector("[dir]")) || void 0 === t ? void 0 : t.getAttribute("dir"),
                    te = (0, s.useSelector)(x.getSendStage),
                    ne = [x.SEND_STAGES.EDIT, x.SEND_STAGES.DRAFT, x.SEND_STAGES.ADD_RECIPIENT].includes(te),
                    re = Boolean((0, l.matchPath)(e.pathname, { path: p.CONFIRM_TRANSACTION_ROUTE, exact: !1 })),
                    ae = Boolean((0, l.matchPath)(e.pathname, { path: p.SWAPS_ROUTE, exact: !1 })),
                    oe = Boolean((0, l.matchPath)(e.pathname, { path: p.BUILD_QUOTE_ROUTE, exact: !1 })),
                    ie = (0, s.useSelector)(h.getUnapprovedTransactions),
                    se = Object.keys(ie).length > 0,
                    le = re || (ae && !oe),
                    ce = ae || ne || re || se,
                    ue = (0, r.useCallback)(() => {
                      V((0, g.toggleNetworkMenu)()),
                        A({
                          event: d.MetaMetricsEventName.NavNetworkMenuOpened,
                          category: d.MetaMetricsEventCategory.Navigation,
                          properties: { location: "App header", chain_id: $ }
                        });
                    }, [$, V, A]),
                    de = !X && ce ? 4 : 0;
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    L && !X
                      ? r.default.createElement(
                          m.Box,
                          {
                            display: [f.Display.None, f.Display.Flex],
                            alignItems: f.AlignItems.center,
                            margin: 2,
                            className: "multichain-app-header-logo",
                            "data-testid": "app-header-logo",
                            justifyContent: f.JustifyContent.center
                          },
                          r.default.createElement(b.default, { unsetIconHeight: !0, onClick: async () => R.push(p.DEFAULT_ROUTE) })
                        )
                      : null,
                    r.default.createElement(
                      m.Box,
                      {
                        display: f.Display.Flex,
                        className: (0, a.default)("multichain-app-header", { "multichain-app-header-shadow": !L || X }),
                        marginBottom: de,
                        alignItems: f.AlignItems.center,
                        width: f.BlockSize.Full,
                        backgroundColor: !L || X ? f.BackgroundColor.backgroundDefault : f.BackgroundColor.backgroundAlternative
                      },
                      r.default.createElement(
                        r.default.Fragment,
                        null,
                        L
                          ? r.default.createElement(
                              m.Box,
                              {
                                className: (0, a.default)("multichain-app-header__contents", { "multichain-app-header-shadow": L && !X }),
                                alignItems: f.AlignItems.center,
                                width: f.BlockSize.Full,
                                backgroundColor: f.BackgroundColor.backgroundDefault,
                                padding: 2,
                                paddingLeft: 4,
                                paddingRight: 4,
                                gap: 2
                              },
                              X
                                ? r.default.createElement(
                                    m.Box,
                                    { className: "multichain-app-header__contents__container" },
                                    r.default.createElement(
                                      S.default,
                                      { title: null == G ? void 0 : G.nickname, position: "right" },
                                      r.default.createElement(m.PickerNetwork, {
                                        avatarNetworkProps: { backgroundColor: Y },
                                        className: "multichain-app-header__contents--avatar-network",
                                        ref: j,
                                        as: "button",
                                        src: null == G || null === (n = G.rpcPrefs) || void 0 === n ? void 0 : n.imageUrl,
                                        label: null == G ? void 0 : G.nickname,
                                        "aria-label": F("networkMenu"),
                                        labelProps: { display: f.Display.None },
                                        onClick: (e) => {
                                          e.stopPropagation(), e.preventDefault(), ue();
                                        },
                                        display: [f.Display.Flex, f.Display.None],
                                        disabled: ce
                                      })
                                    )
                                  )
                                : r.default.createElement(
                                    "div",
                                    null,
                                    r.default.createElement(m.PickerNetwork, {
                                      avatarNetworkProps: { backgroundColor: Y },
                                      margin: 2,
                                      label: null == G ? void 0 : G.nickname,
                                      src: null == G || null === (o = G.rpcPrefs) || void 0 === o ? void 0 : o.imageUrl,
                                      onClick: (e) => {
                                        e.stopPropagation(), e.preventDefault(), ue();
                                      },
                                      display: [f.Display.None, f.Display.Flex],
                                      className: "multichain-app-header__contents__network-picker",
                                      disabled: ce,
                                      "data-testid": "network-display"
                                    })
                                  ),
                              Z && X && D && 1 === I
                                ? r.default.createElement(y.ProductTour, {
                                    className: "multichain-app-header__product-tour",
                                    anchorElement: j.current,
                                    title: F("switcherTitle"),
                                    description: F("switcherTourDescription"),
                                    currentStep: "1",
                                    totalSteps: "3",
                                    onClick: () => M(I + 1),
                                    positionObj: "rtl" === ee ? "0%" : "88%",
                                    productTourDirection: ee
                                  })
                                : null,
                              z
                                ? r.default.createElement(y.AccountPicker, {
                                    address: z.address,
                                    name: z.name,
                                    onClick: () => {
                                      V((0, g.toggleAccountMenu)()),
                                        A({
                                          event: d.MetaMetricsEventName.NavAccountMenuOpened,
                                          category: d.MetaMetricsEventCategory.Navigation,
                                          properties: { location: "Home" }
                                        });
                                    },
                                    disabled: le,
                                    showAddress: Boolean(""),
                                    labelProps: { fontWeight: f.FontWeight.Bold }
                                  })
                                : null,
                              r.default.createElement(
                                m.Box,
                                { display: f.Display.Flex, alignItems: f.AlignItems.center, justifyContent: f.JustifyContent.flexEnd },
                                r.default.createElement(
                                  m.Box,
                                  { display: f.Display.Flex, gap: 4 },
                                  J &&
                                    r.default.createElement(
                                      m.Box,
                                      { ref: j },
                                      r.default.createElement(E.default, {
                                        onClick: () => {
                                          R.push(p.CONNECTED_ACCOUNTS_ROUTE),
                                            A({
                                              event: d.MetaMetricsEventName.NavConnectedSitesOpened,
                                              category: d.MetaMetricsEventCategory.Navigation
                                            });
                                        }
                                      })
                                    ),
                                  " ",
                                  X && 2 === I
                                    ? r.default.createElement(y.ProductTour, {
                                        className: "multichain-app-header__product-tour",
                                        anchorElement: j.current,
                                        closeMenu: () => P(!1),
                                        prevIcon: !0,
                                        title: F("permissionsTitle"),
                                        description: F("permissionsTourDescription"),
                                        currentStep: "2",
                                        totalSteps: "3",
                                        prevClick: () => M(I - 1),
                                        onClick: () => M(I + 1),
                                        positionObj: "rtl" === ee ? "76%" : "12%",
                                        productTourDirection: ee
                                      })
                                    : null,
                                  r.default.createElement(
                                    m.Box,
                                    { ref: j, display: f.Display.Flex, justifyContent: f.JustifyContent.flexEnd, width: f.BlockSize.Full },
                                    r.default.createElement(m.ButtonIcon, {
                                      iconName: m.IconName.MoreVertical,
                                      "data-testid": "account-options-menu-button",
                                      ariaLabel: F("accountOptions"),
                                      onClick: () => {
                                        A({
                                          event: d.MetaMetricsEventName.NavMainMenuOpened,
                                          category: d.MetaMetricsEventCategory.Navigation,
                                          properties: { location: "Home" }
                                        }),
                                          P(!0);
                                      },
                                      size: m.ButtonIconSize.Sm
                                    })
                                  )
                                ),
                                N ? r.default.createElement(y.GlobalMenu, { anchorElement: j.current, closeMenu: () => P(!1) }) : null,
                                Z && X && 3 === I
                                  ? r.default.createElement(y.ProductTour, {
                                      className: "multichain-app-header__product-tour",
                                      anchorElement: j.current,
                                      closeMenu: () => P(!1),
                                      prevIcon: !0,
                                      title: F("globalTitle"),
                                      description: F("globalTourDescription"),
                                      currentStep: "3",
                                      totalSteps: "3",
                                      prevClick: () => M(I - 1),
                                      onClick: () => {
                                        (0, g.hideProductTour)();
                                      },
                                      positionObj: "rtl" === ee ? "88%" : "0%",
                                      productTourDirection: ee
                                    })
                                  : null
                              )
                            )
                          : r.default.createElement(
                              m.Box,
                              {
                                display: f.Display.Flex,
                                className: (0, a.default)("multichain-app-header__lock-contents", {
                                  "multichain-app-header-shadow": L && !X
                                }),
                                alignItems: f.AlignItems.center,
                                width: f.BlockSize.Full,
                                justifyContent: f.JustifyContent.spaceBetween,
                                backgroundColor: f.BackgroundColor.backgroundDefault,
                                padding: 2,
                                gap: 2
                              },
                              r.default.createElement(
                                "div",
                                null,
                                r.default.createElement(m.PickerNetwork, {
                                  avatarNetworkProps: { backgroundColor: Y },
                                  label: null == G ? void 0 : G.nickname,
                                  src: null == G || null === (C = G.rpcPrefs) || void 0 === C ? void 0 : C.imageUrl,
                                  onClick: (e) => {
                                    e.stopPropagation(), e.preventDefault(), ue();
                                  },
                                  className: "multichain-app-header__contents__network-picker",
                                  "data-testid": "network-display"
                                })
                              ),
                              r.default.createElement(b.default, {
                                unsetIconHeight: !0,
                                onClick: async () => {
                                  R.push(p.DEFAULT_ROUTE);
                                }
                              })
                            )
                      )
                    )
                  );
                };
                (n.AppHeader = N), (N.propTypes = { location: o.default.object });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-header/app-header.js" }
    ],
    [
      4524,
      { "./app-header": 4523 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AppHeader", {
                    enumerable: !0,
                    get: function () {
                      return r.AppHeader;
                    }
                  });
                var r = e("./app-header");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/app-header/index.js" }
    ],
    [
      4525,
      {
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.AssetListConversionButton = n.ASSET_LIST_CONVERSION_BUTTON_VARIANT_TYPES = void 0);
                var r = l(e("react")),
                  a = l(e("prop-types")),
                  o = e("../../component-library"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../hooks/useI18nContext");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = (n.ASSET_LIST_CONVERSION_BUTTON_VARIANT_TYPES = { BUY: "buy", RECEIVE: "receive", NFT: "nft" }),
                  u = {
                    [c.BUY]: {
                      color: "var(--color-info-default)",
                      backgroundImage: "url(/images/token-list-buy-background.png)",
                      text: "buy",
                      icon: o.IconName.Add
                    },
                    [c.RECEIVE]: {
                      color: "var(--color-flask-default)",
                      backgroundImage: "url(/images/token-list-receive-background.png)",
                      text: "receive",
                      icon: o.IconName.Arrow2Down
                    },
                    [c.NFT]: {
                      color: "var(--color-error-alternative)",
                      backgroundImage: "url(/images/token-list-nfts-background.png)",
                      text: "nftLearnMore",
                      icon: o.IconName.Book
                    }
                  },
                  d = ({ onClick: e, variant: t }) => {
                    const n = (0, s.useI18nContext)(),
                      { color: a, backgroundImage: l, text: c, icon: d } = u[t];
                    return r.default.createElement(
                      o.Box,
                      {
                        as: "button",
                        onClick: e,
                        className: "asset-list-conversion-button",
                        display: i.Display.Flex,
                        alignItems: i.AlignItems.center,
                        borderRadius: i.BorderRadius.LG,
                        style: { backgroundImage: l, backgroundColor: a }
                      },
                      r.default.createElement(
                        o.Box,
                        { display: i.Display.Flex, className: "asset-list-conversion-button__contents" },
                        r.default.createElement(
                          o.Box,
                          {
                            display: i.Display.Flex,
                            className: "asset-list-conversion-button__contents__button-wrapper",
                            borderRadius: i.BorderRadius.full
                          },
                          r.default.createElement(
                            o.Box,
                            { paddingTop: 1, paddingInlineStart: 1 },
                            r.default.createElement(o.Icon, { name: d, size: o.IconSize.Sm, style: { color: a } })
                          )
                        ),
                        r.default.createElement(
                          o.Text,
                          { className: "asset-list-conversion-button__contents__text", paddingInlineStart: 2 },
                          n(c)
                        )
                      )
                    );
                  };
                (n.AssetListConversionButton = d),
                  (d.propTypes = { onClick: a.default.func.isRequired, variant: a.default.oneOf(Object.values(c)) });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/asset-list-conversion-button/asset-list-conversion-button.js" }
    ],
    [
      4526,
      { "./asset-list-conversion-button": 4525 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AssetListConversionButton", {
                    enumerable: !0,
                    get: function () {
                      return r.AssetListConversionButton;
                    }
                  });
                var r = e("./asset-list-conversion-button");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/asset-list-conversion-button/index.js" }
    ],
    [
      4527,
      {
        "../../../../shared/constants/transaction": 3974,
        "../../../ducks/send": 4765,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../app/user-preferenced-currency-display": 4378,
        "../../app/user-preferenced-currency-input/user-preferenced-currency-input.container": 4382,
        "../../app/user-preferenced-token-input/user-preferenced-token-input.component": 4384,
        "../../component-library": 4453,
        "../../ui/token-balance": 4731,
        "./asset-picker/asset-picker": 4528,
        "./max-clear-button": 4530,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AssetPickerAmount = void 0);
                var r = g(e("react")),
                  a = e("react-redux"),
                  o = e("../../component-library"),
                  i = e("../../../helpers/constants/design-system"),
                  s = e("../../../../shared/constants/transaction"),
                  l = g(e("../../app/user-preferenced-currency-input/user-preferenced-currency-input.container")),
                  c = g(e("../../app/user-preferenced-token-input/user-preferenced-token-input.component")),
                  u = e("../../../ducks/send"),
                  d = e("../../../hooks/useI18nContext"),
                  p = g(e("../../app/user-preferenced-currency-display")),
                  f = e("../../../helpers/constants/common"),
                  m = g(e("../../ui/token-balance")),
                  h = g(e("./max-clear-button")),
                  y = g(e("./asset-picker/asset-picker"));
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.AssetPickerAmount = () => {
                  const e = (0, a.useDispatch)(),
                    t = (0, d.useI18nContext)(),
                    { asset: n, amount: g } = (0, a.useSelector)(u.getCurrentDraftTransaction),
                    { error: b } = g;
                  if (!n) throw new Error("No asset is drafted for sending");
                  const v = b ? i.TextColor.errorDefault : i.TextColor.textAlternative;
                  return r.default.createElement(
                    o.Box,
                    { className: "asset-picker-amount" },
                    r.default.createElement(
                      o.Box,
                      { display: i.Display.Flex },
                      r.default.createElement(o.Label, null, t("amount")),
                      r.default.createElement(h.default, null)
                    ),
                    r.default.createElement(
                      o.Box,
                      {
                        display: i.Display.Flex,
                        alignItems: i.AlignItems.center,
                        backgroundColor: i.BackgroundColor.backgroundDefault,
                        paddingLeft: 3,
                        paddingRight: 3,
                        borderRadius: i.BorderRadius.LG,
                        borderColor: g.error ? i.BorderColor.errorDefault : i.BorderColor.primaryDefault,
                        borderStyle: i.BorderStyle.solid,
                        borderWidth: 2
                      },
                      r.default.createElement(y.default, { asset: n }),
                      n.type === s.AssetType.native
                        ? r.default.createElement(l.default, {
                            onChange: (t) => e((0, u.updateSendAmount)(t)),
                            hexValue: g.value,
                            className: "asset-picker-amount__input",
                            swapIcon: (e) =>
                              r.default.createElement(o.ButtonIcon, {
                                backgroundColor: i.BackgroundColor.transparent,
                                iconName: o.IconName.SwapVertical,
                                ariaLabel: t("switchInputCurrency"),
                                size: o.ButtonIconSize.Sm,
                                color: i.IconColor.primaryDefault,
                                onClick: e
                              })
                          })
                        : r.default.createElement(c.default, {
                            onChange: (t) => e((0, u.updateSendAmount)(t)),
                            token: n.details,
                            value: g.value,
                            className: "asset-picker-amount__input"
                          })
                    ),
                    r.default.createElement(
                      o.Box,
                      { display: i.Display.Flex },
                      r.default.createElement(o.Text, { color: v, marginRight: 1, variant: i.TextVariant.bodySm }, t("balance"), ":"),
                      n.type === s.AssetType.native
                        ? r.default.createElement(p.default, {
                            value: n.balance,
                            type: f.PRIMARY,
                            textProps: { color: v, variant: i.TextVariant.bodySm },
                            suffixProps: { color: v, variant: i.TextVariant.bodySm }
                          })
                        : r.default.createElement(m.default, { token: n.details, textProps: { color: v }, suffixProps: { color: v } }),
                      b
                        ? r.default.createElement(o.Text, { variant: i.TextVariant.bodySm, color: i.TextColor.errorDefault }, ". ", t(b))
                        : null
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/asset-picker-amount/asset-picker-amount.tsx" }
    ],
    [
      4528,
      {
        "../../../../../shared/constants/transaction": 3974,
        "../../../../ducks/metamask/metamask": 4763,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../selectors": 5197,
        "../../../component-library": 4453,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function ({ asset: e }) {
                    var t, n, r;
                    const d = (0, o.useSelector)(u.getNativeCurrency),
                      p = (0, o.useSelector)(c.getNativeCurrencyImage),
                      f = (0, o.useSelector)(c.getTokenList),
                      m =
                        e.type === l.AssetType.native
                          ? p
                          : null == f ||
                            null ===
                              (t =
                                f[
                                  null === (n = e.details) || void 0 === n || null === (n = n.address) || void 0 === n
                                    ? void 0
                                    : n.toLowerCase()
                                ]) ||
                            void 0 === t
                          ? void 0
                          : t.iconUrl,
                      h = e.type === l.AssetType.native ? d : null === (r = e.details) || void 0 === r ? void 0 : r.symbol;
                    return a.default.createElement(
                      i.Box,
                      {
                        className: "asset-picker",
                        display: s.Display.Flex,
                        alignItems: s.AlignItems.center,
                        padding: 2,
                        backgroundColor: s.BackgroundColor.backgroundAlternative,
                        borderRadius: s.BorderRadius.pill
                      },
                      a.default.createElement(i.AvatarToken, { src: m, size: i.AvatarTokenSize.Xs }),
                      a.default.createElement(i.Text, { variant: s.TextVariant.bodyXs, marginLeft: "auto", marginRight: "auto" }, h),
                      a.default.createElement(i.Icon, { name: i.IconName.ArrowDown, size: i.IconSize.Xs })
                    );
                  });
                var r,
                  a = (r = e("react")) && r.__esModule ? r : { default: r },
                  o = e("react-redux"),
                  i = e("../../../component-library"),
                  s = e("../../../../helpers/constants/design-system"),
                  l = e("../../../../../shared/constants/transaction"),
                  c = e("../../../../selectors"),
                  u = e("../../../../ducks/metamask/metamask");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/asset-picker-amount/asset-picker/asset-picker.tsx" }
    ],
    [
      4529,
      { "./asset-picker-amount": 4527 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AssetPickerAmount", {
                    enumerable: !0,
                    get: function () {
                      return r.AssetPickerAmount;
                    }
                  });
                var r = e("./asset-picker-amount");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/asset-picker-amount/index.js" }
    ],
    [
      4530,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/send": 4765,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "../../component-library": 4453,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, c.useI18nContext)(),
                      t = (0, a.useSelector)(o.getSendMaxModeState),
                      n = (0, a.useDispatch)(),
                      d = (0, r.useContext)(i.MetaMetricsContext);
                    return r.default.createElement(
                      l.ButtonLink,
                      {
                        onClick: () => {
                          d({
                            event: 'Clicked "Amount Max"',
                            category: s.MetaMetricsEventCategory.Transactions,
                            properties: { action: "Edit Screen", legacy_event: !0 }
                          }),
                            n((0, o.toggleSendMaxMode)());
                        },
                        marginLeft: "auto",
                        textProps: { variant: u.TextVariant.bodySm }
                      },
                      e(t ? "clear" : "max")
                    );
                  });
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = e("../../../ducks/send"),
                  i = e("../../../contexts/metametrics"),
                  s = e("../../../../shared/constants/metametrics"),
                  l = e("../../component-library"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../helpers/constants/design-system");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/asset-picker-amount/max-clear-button.tsx" }
    ],
    [
      4531,
      { "../../../helpers/constants/design-system": 4771, "../../component-library": 4453, classnames: 2414, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.AvatarGroup = void 0);
                var r,
                  a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = l(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  o = (r = e("classnames")) && r.__esModule ? r : { default: r },
                  i = e("../../component-library"),
                  s = e("../../../helpers/constants/design-system");
                function l(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (l = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.AvatarGroup = ({
                  className: e = "",
                  limit: t = 4,
                  members: n = [],
                  size: r = i.AvatarTokenSize.Xs,
                  borderColor: l = s.BorderColor.borderDefault
                }) => {
                  const c = n.length,
                    u = n.slice(0, t).reverse(),
                    d = c > t;
                  let p = "";
                  p = i.AvatarTokenSize.Xs ? "-8px" : i.AvatarTokenSize.Sm ? "-12px" : "-16px";
                  const f = `+${(c - t).toLocaleString()}`;
                  return a.createElement(
                    i.Box,
                    {
                      alignItems: s.AlignItems.center,
                      display: s.Display.Flex,
                      className: (0, o.default)("multichain-avatar-group", e),
                      "data-testid": "avatar-group",
                      gap: 1
                    },
                    a.createElement(
                      i.Box,
                      { display: s.Display.Flex },
                      u.map((e, t) =>
                        a.createElement(
                          i.Box,
                          { borderRadius: s.BorderRadius.full, key: e.symbol, style: 0 === t ? { marginLeft: "0" } : { marginLeft: p } },
                          a.createElement(i.AvatarToken, { src: e.iconUrl, name: e.symbol, size: r, borderColor: l })
                        )
                      )
                    ),
                    d
                      ? a.createElement(
                          i.Box,
                          null,
                          a.createElement(i.Text, { variant: s.TextVariant.bodySm, color: s.TextColor.textAlternative }, f)
                        )
                      : null
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/avatar-group/avatar-group.tsx" }
    ],
    [
      4532,
      { "./avatar-group": 4531 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "AvatarGroup", {
                    enumerable: !0,
                    get: function () {
                      return r.AvatarGroup;
                    }
                  });
                var r = e("./avatar-group");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/avatar-group/index.ts" }
    ],
    [
      4533,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/network": 3963,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/portfolio": 4807,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../app/user-preferenced-currency-display": 4378,
        "../../component-library": 4453,
        "../../ui/spinner": 4717,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.BalanceOverview = void 0);
                var r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = { __proto__: null },
                      a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
                      }
                    return (r.default = e), n && n.set(e, r), r;
                  })(e("react")),
                  a = e("react-redux"),
                  o = b(e("classnames")),
                  i = b(e("prop-types")),
                  s = e("../../../hooks/useI18nContext"),
                  l = e("../../../contexts/metametrics"),
                  c = e("../../../../shared/constants/metametrics"),
                  u = e("../../component-library"),
                  d = e("../../../helpers/utils/portfolio"),
                  p = e("../../../selectors"),
                  f = b(e("../../ui/spinner")),
                  m = e("../../../helpers/constants/design-system"),
                  h = e("../../../../shared/constants/network"),
                  y = b(e("../../app/user-preferenced-currency-display")),
                  g = e("../../../helpers/constants/common");
                function b(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (v = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const T = ({ balance: e, loading: t }) => {
                  const n = (0, r.useContext)(l.MetaMetricsContext),
                    i = (0, s.useI18nContext)(),
                    b = (0, a.useSelector)(p.getMetaMetricsId),
                    v = (0, a.useSelector)(p.getCurrentChainId),
                    T = (0, a.useSelector)(p.isBalanceCached);
                  return r.default.createElement(
                    u.Box,
                    {
                      className: "token-balance-overview",
                      display: m.Display.Flex,
                      justifyContent: m.JustifyContent.spaceBetween,
                      alignItems: m.AlignItems.center,
                      padding: 4
                    },
                    r.default.createElement(
                      u.Box,
                      { className: "token-balance-overview__balance" },
                      e
                        ? r.default.createElement(
                            u.Text,
                            {
                              variant: m.TextVariant.headingLg,
                              color: m.TextColor.textDefault,
                              className: (0, o.default)({ "token-balance-overview__secondary-balance": !T })
                            },
                            t
                              ? ""
                              : r.default.createElement(y.default, {
                                  ethNumberOfDecimals: 4,
                                  value: e,
                                  type: g.PRIMARY,
                                  "data-testid": "token-balance-overview-currency-display"
                                })
                          )
                        : r.default.createElement(f.default, {
                            color: "var(--color-secondary-default)",
                            className: "loading-overlay__spinner"
                          }),
                      T ? r.default.createElement("span", { className: "token-balance-overview__cached-star" }, "*") : null
                    ),
                    r.default.createElement(
                      u.ButtonSecondary,
                      {
                        className: "token-balance-portfolio",
                        "data-testid": "token-balance-portfolio",
                        endIconName: u.IconName.Export,
                        onClick: () => {
                          const e = (0, d.getPortfolioUrl)("", "ext_portfolio_button", b);
                          global.platform.openTab({ url: e }),
                            n({
                              category: c.MetaMetricsEventCategory.Navigation,
                              event: c.MetaMetricsEventName.PortfolioLinkClicked,
                              properties: { location: "Home", text: "Portfolio", chain_id: v, token_symbol: h.CURRENCY_SYMBOLS.ETH }
                            });
                        }
                      },
                      i("portfolio")
                    )
                  );
                };
                (n.BalanceOverview = T), (T.propTypes = { balance: i.default.string.isRequired, loading: i.default.bool.isRequired });
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/balance-overview/balance-overview.js" }
    ],
    [
      4534,
      { "./balance-overview": 4533 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "BalanceOverview", {
                    enumerable: !0,
                    get: function () {
                      return r.BalanceOverview;
                    }
                  });
                var r = e("./balance-overview");
              };
            };
      },
      { package: "$root$", file: "ui/components/multichain/balance-overview/index.js" }
    ]
  ],
  [],
  {}
);
