LavaPack.loadBundle(
  [
    [
      4977,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/component-library": 4453,
        "../../../components/ui/button": 4611,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/onboarding": 4775,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./pin-billboard": 4976,
        react: 3690,
        "react-redux": 3655,
        "react-responsive-carousel": 3670,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    const e = (0, l.useI18nContext)(),
                      t = (0, r.useHistory)(),
                      [a, v] = (0, n.useState)(0),
                      T = (0, o.useDispatch)(),
                      y = (0, n.useContext)(f.MetaMetricsContext),
                      _ = (0, o.useSelector)(g.getFirstTimeFlowType);
                    return n.default.createElement(
                      "div",
                      { className: "onboarding-pin-extension", "data-testid": "onboarding-pin-extension" },
                      n.default.createElement(
                        n.default.Fragment,
                        null,
                        n.default.createElement(
                          p.Text,
                          { variant: u.TextVariant.headingLg, as: "h2", align: u.TextAlign.Center, fontWeight: u.FontWeight.Bold },
                          e("onboardingPinExtensionTitle")
                        ),
                        n.default.createElement(
                          i.Carousel,
                          { selectedItem: a, showThumbs: !1, showStatus: !1, showArrows: !1, onChange: (e) => v(e) },
                          n.default.createElement(
                            "div",
                            null,
                            n.default.createElement(p.Text, { align: u.TextAlign.Center }, e("onboardingPinExtensionDescription")),
                            n.default.createElement(
                              "div",
                              { className: "onboarding-pin-extension__diagram" },
                              n.default.createElement(b.default, null)
                            )
                          ),
                          n.default.createElement(
                            "div",
                            null,
                            n.default.createElement(p.Text, { align: u.TextAlign.Center }, e("onboardingPinExtensionDescription2")),
                            n.default.createElement(p.Text, { align: u.TextAlign.Center }, e("onboardingPinExtensionDescription3")),
                            n.default.createElement("img", {
                              src: "/images/onboarding-pin-browser.svg",
                              width: "799",
                              height: "320",
                              alt: ""
                            })
                          )
                        ),
                        n.default.createElement(
                          "div",
                          { className: "onboarding-pin-extension__buttons" },
                          n.default.createElement(
                            c.default,
                            {
                              "data-testid": 0 === a ? "pin-extension-next" : "pin-extension-done",
                              type: "primary",
                              onClick: async () => {
                                0 === a
                                  ? v(1)
                                  : (await T((0, s.setCompletedOnboarding)()),
                                    y({
                                      category: h.MetaMetricsEventCategory.Onboarding,
                                      event: h.MetaMetricsEventName.OnboardingWalletSetupComplete,
                                      properties: {
                                        wallet_setup_type: _ === m.FIRST_TIME_FLOW_TYPES.IMPORT ? "import" : "new",
                                        new_wallet: _ === m.FIRST_TIME_FLOW_TYPES.CREATE
                                      }
                                    }),
                                    t.push(d.DEFAULT_ROUTE));
                              }
                            },
                            e(0 === a ? "next" : "done")
                          )
                        )
                      )
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = T(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  i = e("react-responsive-carousel"),
                  s = e("../../../store/actions"),
                  l = e("../../../hooks/useI18nContext"),
                  c = v(e("../../../components/ui/button")),
                  u = e("../../../helpers/constants/design-system"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../components/component-library"),
                  f = e("../../../contexts/metametrics"),
                  m = e("../../../helpers/constants/onboarding"),
                  g = e("../../../selectors"),
                  h = e("../../../../shared/constants/metametrics"),
                  b = v(e("./pin-billboard"));
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (T = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/pin-extension/pin-extension.js" }
    ],
    [
      4978,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/lib/ui-utils": 3983,
        "../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle": 4146,
        "../../../components/component-library": 4453,
        "../../../components/component-library/text-field/deprecated": 4492,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./setting": 4979,
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
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    var e;
                    const t = (0, g.useI18nContext)(),
                      a = (0, o.useDispatch)(),
                      n = (0, i.useHistory)(),
                      y = (0, o.useSelector)((e) => e.metamask),
                      {
                        incomingTransactionsPreferences: _,
                        usePhishDetect: E,
                        use4ByteResolution: S,
                        useTokenDetection: C,
                        useCurrencyRateCheck: k,
                        useMultiAccountBalanceChecker: A,
                        ipfsGateway: M,
                        useAddressBarEnsResolution: O
                      } = y,
                      [w, P] = (0, r.useState)(E),
                      [R, N] = (0, r.useState)(S),
                      [D, F] = (0, r.useState)(C),
                      [L, x] = (0, r.useState)(k),
                      [B, I] = (0, r.useState)(A),
                      [J, j] = (0, r.useState)(M),
                      [U, X] = (0, r.useState)(null),
                      [H, G] = (0, r.useState)(O),
                      V = (0, r.useContext)(p.MetaMetricsContext),
                      z = (0, o.useSelector)(h.getCurrentNetwork),
                      W = (0, o.useSelector)(h.getAllNetworks);
                    return r.default.createElement(
                      r.default.Fragment,
                      null,
                      r.default.createElement(
                        "div",
                        { className: "privacy-settings", "data-testid": "privacy-settings" },
                        r.default.createElement(
                          "div",
                          { className: "privacy-settings__header" },
                          r.default.createElement(u.Text, { variant: f.TextVariant.headingLg, as: "h2" }, t("advancedConfiguration")),
                          r.default.createElement(
                            u.Text,
                            { variant: f.TextVariant.headingSm, as: "h4" },
                            t("setAdvancedPrivacySettingsDetails")
                          )
                        ),
                        r.default.createElement(
                          "div",
                          { className: "privacy-settings__settings", "data-testid": "privacy-settings-settings" },
                          r.default.createElement(v.default, {
                            allNetworks: W,
                            setIncomingTransactionsPreferences: (e, t) => a((0, b.setIncomingTransactionsPreferences)(e, t)),
                            incomingTransactionsPreferences: _
                          }),
                          r.default.createElement(T.Setting, {
                            value: w,
                            setValue: P,
                            title: t("usePhishingDetection"),
                            description: t("onboardingUsePhishingDetectionDescription", [
                              r.default.createElement(
                                "a",
                                { href: "https://www.jsdelivr.com", target: "_blank", rel: "noreferrer", key: "jsDeliver" },
                                t("jsDeliver")
                              ),
                              r.default.createElement(
                                "a",
                                {
                                  href: "https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-com",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  key: "privacyMsg"
                                },
                                t("privacyMsg")
                              )
                            ])
                          }),
                          r.default.createElement(T.Setting, {
                            value: R,
                            setValue: N,
                            title: t("use4ByteResolution"),
                            description: t("use4ByteResolutionDescription")
                          }),
                          r.default.createElement(T.Setting, {
                            value: D,
                            setValue: F,
                            title: t("turnOnTokenDetection"),
                            description: t("useTokenDetectionPrivacyDesc")
                          }),
                          r.default.createElement(T.Setting, {
                            value: B,
                            setValue: I,
                            title: t("useMultiAccountBalanceChecker"),
                            description: t("useMultiAccountBalanceCheckerSettingDescription")
                          }),
                          r.default.createElement(T.Setting, {
                            title: t("onboardingAdvancedPrivacyNetworkTitle"),
                            showToggle: !1,
                            description: r.default.createElement(
                              r.default.Fragment,
                              null,
                              t("onboardingAdvancedPrivacyNetworkDescription", [
                                r.default.createElement(
                                  "a",
                                  {
                                    href: "https://consensys.net/privacy-policy/",
                                    key: "link",
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  },
                                  t("privacyMsg")
                                )
                              ]),
                              r.default.createElement(
                                u.Box,
                                { paddingTop: 2 },
                                z
                                  ? r.default.createElement(
                                      "div",
                                      { className: "privacy-settings__network" },
                                      r.default.createElement(
                                        r.default.Fragment,
                                        null,
                                        r.default.createElement(u.PickerNetwork, {
                                          label: null == z ? void 0 : z.nickname,
                                          src: null == z || null === (e = z.rpcPrefs) || void 0 === e ? void 0 : e.imageUrl,
                                          onClick: () => a((0, b.toggleNetworkMenu)())
                                        })
                                      )
                                    )
                                  : r.default.createElement(
                                      u.ButtonSecondary,
                                      {
                                        size: u.ButtonSecondarySize.Lg,
                                        onClick: (e) => {
                                          e.preventDefault(), a((0, b.showModal)({ name: "ONBOARDING_ADD_NETWORK" }));
                                        }
                                      },
                                      t("onboardingAdvancedPrivacyNetworkButton")
                                    )
                              )
                            )
                          }),
                          r.default.createElement(T.Setting, {
                            title: t("onboardingAdvancedPrivacyIPFSTitle"),
                            showToggle: !1,
                            description: r.default.createElement(
                              r.default.Fragment,
                              null,
                              t("onboardingAdvancedPrivacyIPFSDescription"),
                              r.default.createElement(
                                u.Box,
                                { paddingTop: 2 },
                                r.default.createElement(d.TextField, {
                                  value: J,
                                  style: { width: "100%" },
                                  inputProps: { "data-testid": "ipfs-input" },
                                  onChange: (e) => {
                                    ((e) => {
                                      j(e);
                                      try {
                                        const { host: t } = new URL((0, s.addUrlProtocolPrefix)(e));
                                        if (!t || "gateway.ipfs.io" === t) throw new Error();
                                        X(null);
                                      } catch (e) {
                                        X(t("onboardingAdvancedPrivacyIPFSInvalid"));
                                      }
                                    })(e.target.value);
                                  }
                                }),
                                J
                                  ? r.default.createElement(
                                      u.Text,
                                      { variant: f.TextVariant.bodySm, color: U ? f.TextColor.errorDefault : f.TextColor.successDefault },
                                      U || t("onboardingAdvancedPrivacyIPFSValid")
                                    )
                                  : null
                              )
                            )
                          }),
                          r.default.createElement(T.Setting, {
                            value: H,
                            setValue: G,
                            title: t("ensDomainsSettingTitle"),
                            description: r.default.createElement(
                              r.default.Fragment,
                              null,
                              r.default.createElement(
                                u.Text,
                                { variant: f.TextVariant.inherit },
                                t("ensDomainsSettingDescriptionIntroduction")
                              ),
                              r.default.createElement(
                                u.Box,
                                { as: "ul", marginTop: 4, marginBottom: 4, paddingInlineStart: 4, style: { listStyleType: "circle" } },
                                r.default.createElement(
                                  u.Text,
                                  { variant: f.TextVariant.inherit, as: "li" },
                                  t("ensDomainsSettingDescriptionPart1")
                                ),
                                r.default.createElement(
                                  u.Text,
                                  { variant: f.TextVariant.inherit, as: "li" },
                                  t("ensDomainsSettingDescriptionPart2")
                                )
                              ),
                              r.default.createElement(
                                u.Text,
                                { variant: f.TextVariant.inherit },
                                t("ensDomainsSettingDescriptionOutroduction")
                              )
                            )
                          }),
                          r.default.createElement(T.Setting, {
                            value: L,
                            setValue: x,
                            title: t("currencyRateCheckToggle"),
                            description: t("currencyRateCheckToggleDescription", [
                              r.default.createElement(
                                "a",
                                { key: "coingecko_link", href: c.COINGECKO_LINK, rel: "noreferrer", target: "_blank" },
                                t("coingecko")
                              ),
                              r.default.createElement(
                                "a",
                                { key: "cryptocompare_link", href: c.CRYPTOCOMPARE_LINK, rel: "noreferrer", target: "_blank" },
                                t("cryptoCompare")
                              ),
                              r.default.createElement(
                                "a",
                                { key: "privacy_policy_link", href: c.PRIVACY_POLICY_LINK, rel: "noreferrer", target: "_blank" },
                                t("privacyMsg")
                              )
                            ])
                          }),
                          r.default.createElement(
                            u.ButtonPrimary,
                            {
                              size: u.ButtonPrimarySize.Lg,
                              onClick: () => {
                                if (
                                  (a((0, b.setUsePhishDetect)(w)),
                                  a((0, b.setUse4ByteResolution)(R)),
                                  a((0, b.setUseTokenDetection)(D)),
                                  a((0, b.setUseMultiAccountBalanceChecker)(B)),
                                  a((0, b.setUseCurrencyRateCheck)(L)),
                                  a((0, b.setCompletedOnboarding)()),
                                  a((0, b.setUseAddressBarEnsResolution)(H)),
                                  J && !U)
                                ) {
                                  const { host: e } = new URL((0, s.addUrlProtocolPrefix)(J));
                                  a((0, b.setIpfsGateway)(e));
                                }
                                V({
                                  category: l.MetaMetricsEventCategory.Onboarding,
                                  event: l.MetaMetricsEventName.OnboardingWalletAdvancedSettings,
                                  properties: { show_incoming_tx: _, use_phising_detection: w, turnon_token_detection: D }
                                }),
                                  n.push(m.ONBOARDING_PIN_EXTENSION_ROUTE);
                              },
                              block: !0,
                              marginTop: 6
                            },
                            t("done")
                          )
                        )
                      )
                    );
                  });
                var n,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("../../../../app/scripts/lib/util"),
                  l = e("../../../../shared/constants/metametrics"),
                  c = e("../../../../shared/lib/ui-utils"),
                  u = e("../../../components/component-library"),
                  d = e("../../../components/component-library/text-field/deprecated"),
                  p = e("../../../contexts/metametrics"),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../../helpers/constants/routes"),
                  g = e("../../../hooks/useI18nContext"),
                  h = e("../../../selectors"),
                  b = e("../../../store/actions"),
                  v =
                    (n = e("../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle")) && n.__esModule
                      ? n
                      : { default: n },
                  T = e("./setting");
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (y = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/privacy-settings/privacy-settings.js" }
    ],
    [
      4979,
      {
        "../../../components/component-library": 4453,
        "../../../components/ui/toggle-button": 4729,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.Setting = void 0);
                var n = c(e("react")),
                  r = c(e("prop-types")),
                  o = e("../../../components/component-library"),
                  i = c(e("../../../components/ui/toggle-button")),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../hooks/useI18nContext");
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ value: e, setValue: t, title: a, description: r, showToggle: c = !0 }) => {
                  const u = (0, l.useI18nContext)();
                  return n.default.createElement(
                    o.Box,
                    {
                      display: s.Display.Flex,
                      justifyContent: s.JustifyContent.spaceBetween,
                      alignItems: s.AlignItems.center,
                      marginTop: 3,
                      marginBottom: 3,
                      className: "privacy-settings__setting__wrapper"
                    },
                    n.default.createElement(
                      "div",
                      { className: "privacy-settings__setting" },
                      n.default.createElement(o.Text, { variant: s.TextVariant.bodyMdMedium }, a),
                      n.default.createElement(o.Text, { variant: s.TextVariant.bodySm, as: "div" }, r)
                    ),
                    c
                      ? n.default.createElement(
                          "div",
                          { className: "privacy-settings__setting__toggle" },
                          n.default.createElement(i.default, { value: e, onToggle: (e) => t(!e), offLabel: u("off"), onLabel: u("on") })
                        )
                      : null
                  );
                };
                (a.Setting = u),
                  (u.propTypes = {
                    value: r.default.bool,
                    setValue: r.default.func,
                    title: r.default.string,
                    description: r.default.oneOfType([r.default.object, r.default.string]),
                    showToggle: r.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/privacy-settings/setting.js" }
    ],
    [
      4980,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/app/step-progress-bar": 4333,
        "../../../components/ui/box": 4607,
        "../../../components/ui/button": 4611,
        "../../../components/ui/typography": 4740,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
        "./recovery-phrase-chips": 4981,
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
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = _);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  i = e("lodash"),
                  s = T(e("prop-types")),
                  l = T(e("../../../components/ui/box")),
                  c = T(e("../../../components/ui/button")),
                  u = T(e("../../../components/ui/typography")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../components/app/step-progress-bar"),
                  f = e("../../../helpers/constants/routes"),
                  m = e("../../../hooks/useI18nContext"),
                  g = e("../../../store/actions"),
                  h = e("../../../contexts/metametrics"),
                  b = e("../../../../shared/constants/metametrics"),
                  v = T(e("./recovery-phrase-chips"));
                function T(e) {
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
                function _({ secretRecoveryPhrase: e = "" }) {
                  const t = (0, r.useHistory)(),
                    a = (0, m.useI18nContext)(),
                    s = (0, o.useDispatch)(),
                    T = e.split(" "),
                    y = [2, 3, 7],
                    [_, E] = (0, n.useState)(!1),
                    S = (0, n.useContext)(h.MetaMetricsContext),
                    [C, k] = (0, n.useState)(
                      (() => {
                        const e = { ...T };
                        return (
                          y.forEach((t) => {
                            e[t] = "";
                          }),
                          e
                        );
                      })()
                    ),
                    A = (0, n.useMemo)(
                      () =>
                        (0, i.debounce)((t) => {
                          E(Object.values(t).join(" ") === e);
                        }, 500),
                      [E, e]
                    );
                  return n.default.createElement(
                    "div",
                    { className: "recovery-phrase__confirm", "data-testid": "confirm-recovery-phrase" },
                    n.default.createElement(p.ThreeStepProgressBar, { stage: p.threeStepStages.RECOVERY_PHRASE_CONFIRM, marginBottom: 4 }),
                    n.default.createElement(
                      l.default,
                      { justifyContent: d.JustifyContent.center, textAlign: d.TEXT_ALIGN.CENTER, marginBottom: 4 },
                      n.default.createElement(
                        u.default,
                        { variant: d.TypographyVariant.H2, fontWeight: d.FONT_WEIGHT.BOLD },
                        a("seedPhraseConfirm")
                      )
                    ),
                    n.default.createElement(
                      l.default,
                      { justifyContent: d.JustifyContent.center, textAlign: d.TEXT_ALIGN.CENTER, marginBottom: 4 },
                      n.default.createElement(u.default, { variant: d.TypographyVariant.H4 }, a("seedPhraseEnterMissingWords"))
                    ),
                    n.default.createElement(v.default, {
                      secretRecoveryPhrase: T,
                      confirmPhase: !0,
                      setInputValue: (e) => {
                        k(e), A(e);
                      },
                      inputValue: C,
                      indicesToCheck: y
                    }),
                    n.default.createElement(
                      "div",
                      { className: "recovery-phrase__footer__confirm" },
                      n.default.createElement(
                        c.default,
                        {
                          "data-testid": "recovery-phrase-confirm",
                          type: "primary",
                          large: !0,
                          className: "recovery-phrase__footer__confirm--button",
                          onClick: async () => {
                            await s((0, g.setSeedPhraseBackedUp)(!0)),
                              S({
                                category: b.MetaMetricsEventCategory.Onboarding,
                                event: b.MetaMetricsEventName.OnboardingWalletSecurityPhraseConfirmed
                              }),
                              t.push(f.ONBOARDING_COMPLETION_ROUTE);
                          },
                          disabled: !_
                        },
                        a("confirm")
                      )
                    )
                  );
                }
                _.propTypes = { secretRecoveryPhrase: s.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/recovery-phrase/confirm-recovery-phrase.js" }
    ],
    [
      4981,
      {
        "../../../components/ui/box": 4607,
        "../../../components/ui/chip": 4620,
        "../../../components/ui/chip/chip-with-input": 4618,
        "../../../components/ui/typography": 4740,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        classnames: 2414,
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
                var n = p(e("react")),
                  r = p(e("classnames")),
                  o = p(e("prop-types")),
                  i = p(e("../../../components/ui/chip")),
                  s = p(e("../../../components/ui/box")),
                  l = p(e("../../../components/ui/typography")),
                  c = e("../../../components/ui/chip/chip-with-input"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/constants/design-system");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f({
                  secretRecoveryPhrase: e,
                  phraseRevealed: t,
                  confirmPhase: a,
                  setInputValue: o,
                  inputValue: p,
                  indicesToCheck: f,
                  hiddenPhrase: m
                }) {
                  const g = (0, u.useI18nContext)(),
                    h = !1 === t;
                  return n.default.createElement(
                    s.default,
                    {
                      borderColor: d.BorderColor.borderMuted,
                      borderStyle: d.BorderStyle.solid,
                      padding: 4,
                      borderWidth: 1,
                      borderRadius: d.Size.MD,
                      display: d.DISPLAY.GRID,
                      marginBottom: 4,
                      className: "recovery-phrase__secret"
                    },
                    n.default.createElement(
                      "div",
                      {
                        "data-testid": "recovery-phrase-chips",
                        className: (0, r.default)("recovery-phrase__chips", { "recovery-phrase__chips--hidden": h })
                      },
                      e.map((e, t) =>
                        a && f && f.includes(t)
                          ? n.default.createElement(
                              "div",
                              { className: "recovery-phrase__chip-item", key: t },
                              n.default.createElement("div", { className: "recovery-phrase__chip-item__number" }, `${t + 1}.`),
                              n.default.createElement(c.ChipWithInput, {
                                dataTestId: `recovery-phrase-input-${t}`,
                                borderColor: d.BorderColor.primaryDefault,
                                className: "recovery-phrase__chip--with-input",
                                inputValue: p[t],
                                setInputValue: (e) => {
                                  o({ ...p, [t]: e });
                                }
                              })
                            )
                          : n.default.createElement(
                              "div",
                              { className: "recovery-phrase__chip-item", key: t },
                              n.default.createElement("div", { className: "recovery-phrase__chip-item__number" }, `${t + 1}.`),
                              n.default.createElement(
                                i.default,
                                {
                                  dataTestId: `recovery-phrase-chip-${t}`,
                                  className: "recovery-phrase__chip",
                                  borderColor: d.BorderColor.borderDefault
                                },
                                e
                              )
                            )
                      )
                    ),
                    h &&
                      n.default.createElement(
                        "div",
                        { className: "recovery-phrase__secret-blocker" },
                        !m &&
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            n.default.createElement("i", { className: "far fa-eye", color: "white" }),
                            n.default.createElement(
                              l.default,
                              {
                                variant: d.TypographyVariant.H6,
                                color: d.Color.overlayInverse,
                                className: "recovery-phrase__secret-blocker--text"
                              },
                              g("makeSureNoOneWatching")
                            )
                          )
                      )
                  );
                }
                f.propTypes = {
                  secretRecoveryPhrase: o.default.array,
                  phraseRevealed: o.default.bool,
                  confirmPhase: o.default.bool,
                  setInputValue: o.default.func,
                  inputValue: o.default.object,
                  indicesToCheck: o.default.array,
                  hiddenPhrase: o.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/recovery-phrase/recovery-phrase-chips.js" }
    ],
    [
      4982,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/app/step-progress-bar": 4333,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/button": 4611,
        "../../../components/ui/typography": 4740,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useCopyToClipboard": 4830,
        "../../../hooks/useI18nContext": 4837,
        "./recovery-phrase-chips": 4981,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = y);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = T(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = v(e("prop-types")),
                  i = v(e("../../../components/ui/box")),
                  s = v(e("../../../components/ui/button")),
                  l = v(e("../../../components/ui/typography")),
                  c = e("../../../hooks/useCopyToClipboard"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../components/app/step-progress-bar"),
                  m = e("../../../../shared/constants/metametrics"),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../components/component-library"),
                  b = v(e("./recovery-phrase-chips"));
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (T = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function y({ secretRecoveryPhrase: e }) {
                  const t = (0, r.useHistory)(),
                    a = (0, u.useI18nContext)(),
                    { search: o } = (0, r.useLocation)(),
                    [v, T] = (0, c.useCopyToClipboard)(),
                    [y, _] = (0, n.useState)(!1),
                    [E, S] = (0, n.useState)(!1),
                    C = new URLSearchParams(o).get("isFromReminder") ? "/?isFromReminder=true" : "",
                    k = (0, n.useContext)(g.MetaMetricsContext);
                  return n.default.createElement(
                    "div",
                    { className: "recovery-phrase", "data-testid": "recovery-phrase" },
                    n.default.createElement(f.ThreeStepProgressBar, { stage: f.threeStepStages.RECOVERY_PHRASE_REVIEW }),
                    n.default.createElement(
                      i.default,
                      { justifyContent: p.JustifyContent.center, textAlign: p.TEXT_ALIGN.CENTER, marginBottom: 4 },
                      n.default.createElement(
                        l.default,
                        { variant: p.TypographyVariant.H2, fontWeight: p.FONT_WEIGHT.BOLD, className: "recovery-phrase__header" },
                        a("seedPhraseWriteDownHeader")
                      )
                    ),
                    n.default.createElement(
                      i.default,
                      { justifyContent: p.JustifyContent.center, textAlign: p.TEXT_ALIGN.CENTER, marginBottom: 4 },
                      n.default.createElement(l.default, { variant: p.TypographyVariant.H4 }, a("seedPhraseWriteDownDetails"))
                    ),
                    n.default.createElement(
                      i.default,
                      { textAlign: p.TEXT_ALIGN.LEFT, marginBottom: 4, className: "recovery-phrase__tips" },
                      n.default.createElement(
                        l.default,
                        { variant: p.TypographyVariant.H4, fontWeight: p.FONT_WEIGHT.BOLD },
                        a("tips"),
                        ":"
                      ),
                      n.default.createElement(
                        "ul",
                        null,
                        n.default.createElement(
                          "li",
                          null,
                          n.default.createElement(l.default, { variant: p.TypographyVariant.H4 }, a("seedPhraseIntroSidebarBulletOne"))
                        ),
                        n.default.createElement(
                          "li",
                          null,
                          n.default.createElement(l.default, { variant: p.TypographyVariant.H4 }, a("seedPhraseIntroSidebarBulletThree"))
                        ),
                        n.default.createElement(
                          "li",
                          null,
                          n.default.createElement(l.default, { variant: p.TypographyVariant.H4 }, a("seedPhraseIntroSidebarBulletFour"))
                        )
                      )
                    ),
                    n.default.createElement(b.default, { secretRecoveryPhrase: e.split(" "), phraseRevealed: y && !E, hiddenPhrase: E }),
                    n.default.createElement(
                      "div",
                      { className: "recovery-phrase__footer" },
                      y
                        ? n.default.createElement(
                            "div",
                            { className: "recovery-phrase__footer__copy-and-hide" },
                            n.default.createElement(
                              "div",
                              { className: "recovery-phrase__footer__copy-and-hide__area" },
                              n.default.createElement(
                                s.default,
                                {
                                  type: "link",
                                  icon: n.default.createElement("i", {
                                    className: "far fa-eye" + (E ? "" : "-slash"),
                                    color: "var(--color-primary-default)"
                                  }),
                                  className:
                                    "recovery-phrase__footer__copy-and-hide__button recovery-phrase__footer__copy-and-hide__button__hide-seed",
                                  onClick: () => {
                                    S(!E);
                                  }
                                },
                                a(E ? "revealTheSeedPhrase" : "hideSeedPhrase")
                              ),
                              n.default.createElement(
                                s.default,
                                {
                                  onClick: () => {
                                    T(e);
                                  },
                                  icon: n.default.createElement(h.Icon, {
                                    name: v ? h.IconName.CopySuccess : h.IconName.Copy,
                                    color: p.IconColor.primaryDefault
                                  }),
                                  className:
                                    "recovery-phrase__footer__copy-and-hide__button recovery-phrase__footer__copy-and-hide__button__copy-to-clipboard",
                                  type: "link"
                                },
                                a(v ? "copiedExclamation" : "copyToClipboard")
                              )
                            ),
                            n.default.createElement(
                              s.default,
                              {
                                "data-testid": "recovery-phrase-next",
                                type: "primary",
                                className: "recovery-phrase__footer--button",
                                onClick: () => {
                                  k({
                                    category: m.MetaMetricsEventCategory.Onboarding,
                                    event: m.MetaMetricsEventName.OnboardingWalletSecurityPhraseWrittenDown
                                  }),
                                    t.push(`${d.ONBOARDING_CONFIRM_SRP_ROUTE}${C}`);
                                }
                              },
                              a("next")
                            )
                          )
                        : n.default.createElement(
                            s.default,
                            {
                              "data-testid": "recovery-phrase-reveal",
                              type: "primary",
                              className: "recovery-phrase__footer--button",
                              onClick: () => {
                                k({
                                  category: m.MetaMetricsEventCategory.Onboarding,
                                  event: m.MetaMetricsEventName.OnboardingWalletSecurityPhraseRevealed
                                }),
                                  _(!0);
                              }
                            },
                            a("revealSeedWords")
                          )
                    )
                  );
                }
                y.propTypes = { secretRecoveryPhrase: o.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/recovery-phrase/review-recovery-phrase.js" }
    ],
    [
      4983,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/app/step-progress-bar": 4333,
        "../../../components/component-library": 4453,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/locale/locale": 4762,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "./skip-srp-backup-popover": 4984,
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
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    const e = (0, o.useHistory)(),
                      t = (0, c.useI18nContext)(),
                      { search: a } = (0, o.useLocation)(),
                      n = (0, i.useSelector)(p.getCurrentLocale),
                      [h, b] = (0, r.useState)(!1),
                      v = new URLSearchParams(a).get("isFromReminder") ? "/?isFromReminder=true" : "",
                      T = (0, r.useContext)(u.MetaMetricsContext),
                      y = {
                        en: "English",
                        es: "Spanish",
                        hi: "Hindi",
                        id: "Indonesian",
                        ja: "Japanese",
                        ko: "Korean",
                        pt: "Portuguese",
                        ru: "Russian",
                        tl: "Tagalog",
                        vi: "Vietnamese",
                        de: "German",
                        el: "Greek",
                        fr: "French",
                        tr: "Turkish",
                        zh: "Chinese - China"
                      },
                      _ = y[n] ? n : "en";
                    return r.default.createElement(
                      m.Box,
                      {
                        display: s.Display.Flex,
                        justifyContent: s.JustifyContent.center,
                        alignItems: s.AlignItems.center,
                        flexDirection: s.FlexDirection.Column,
                        className: "secure-your-wallet",
                        "data-testid": "secure-your-wallet"
                      },
                      h && r.default.createElement(g.default, { handleClose: () => b(!1) }),
                      r.default.createElement(l.ThreeStepProgressBar, { stage: l.threeStepStages.RECOVERY_PHRASE_VIDEO, marginBottom: 4 }),
                      r.default.createElement(
                        m.Text,
                        { variant: s.TextVariant.headingLg, as: "h2", marginBottom: 4, textAlign: s.TextAlign.Center },
                        t("seedPhraseIntroTitle")
                      ),
                      r.default.createElement(
                        m.Text,
                        { variant: s.TextVariant.bodyLgMedium, marginBottom: 6, className: "secure-your-wallet__details" },
                        t("seedPhraseIntroTitleCopy")
                      ),
                      r.default.createElement(
                        m.Box,
                        {
                          as: "video",
                          borderRadius: s.BorderRadius.LG,
                          marginBottom: 8,
                          className: "secure-your-wallet__video",
                          onPlay: () => {
                            T({ category: f.MetaMetricsEventCategory.Onboarding, event: f.MetaMetricsEventName.OnboardingWalletVideoPlay });
                          },
                          controls: !0
                        },
                        r.default.createElement("source", { type: "video/webm", src: "./images/videos/recovery-onboarding/video.webm" }),
                        Object.keys(y).map((e) =>
                          r.default.createElement("track", {
                            default: Boolean(e === _),
                            srcLang: e,
                            label: y[e],
                            key: `${e}-subtitles`,
                            kind: "subtitles",
                            src: `./images/videos/recovery-onboarding/subtitles/${e}.vtt`
                          })
                        )
                      ),
                      r.default.createElement(
                        m.Box,
                        {
                          className: "secure-your-wallet__actions",
                          marginBottom: 8,
                          width: s.BlockSize.Full,
                          display: s.Display.Flex,
                          flexDirection: [s.FlexDirection.Column, s.FlexDirection.Row],
                          justifyContent: s.JustifyContent.spaceBetween,
                          gap: 4
                        },
                        r.default.createElement(
                          m.Button,
                          {
                            "data-testid": "secure-wallet-later",
                            variant: m.BUTTON_VARIANT.SECONDARY,
                            size: m.BUTTON_SIZES.LG,
                            block: !0,
                            onClick: () => {
                              T({
                                category: f.MetaMetricsEventCategory.Onboarding,
                                event: f.MetaMetricsEventName.OnboardingWalletSecuritySkipInitiated
                              }),
                                b(!0);
                            }
                          },
                          t("seedPhraseIntroNotRecommendedButtonCopy")
                        ),
                        r.default.createElement(
                          m.Button,
                          {
                            "data-testid": "secure-wallet-recommended",
                            size: m.BUTTON_SIZES.LG,
                            block: !0,
                            onClick: () => {
                              T({
                                category: f.MetaMetricsEventCategory.Onboarding,
                                event: f.MetaMetricsEventName.OnboardingWalletSecurityStarted
                              }),
                                e.push(`${d.ONBOARDING_REVIEW_SRP_ROUTE}${v}`);
                            }
                          },
                          t("seedPhraseIntroRecommendedButtonCopy")
                        )
                      ),
                      r.default.createElement(
                        m.Box,
                        { className: "secure-your-wallet__desc" },
                        r.default.createElement(
                          m.Text,
                          { as: "h3", variant: s.TextVariant.headingSm },
                          t("seedPhraseIntroSidebarTitleOne")
                        ),
                        r.default.createElement(m.Text, { marginBottom: 4 }, t("seedPhraseIntroSidebarCopyOne")),
                        r.default.createElement(
                          m.Text,
                          { as: "h3", variant: s.TextVariant.headingSm },
                          t("seedPhraseIntroSidebarTitleTwo")
                        ),
                        r.default.createElement(
                          m.Box,
                          { as: "ul", className: "secure-your-wallet__list", marginBottom: 4 },
                          r.default.createElement(m.Text, { as: "li" }, t("seedPhraseIntroSidebarBulletOne")),
                          r.default.createElement(m.Text, { as: "li" }, t("seedPhraseIntroSidebarBulletThree")),
                          r.default.createElement(m.Text, { as: "li" }, t("seedPhraseIntroSidebarBulletFour"))
                        ),
                        r.default.createElement(
                          m.Text,
                          { as: "h3", variant: s.TextVariant.headingSm },
                          t("seedPhraseIntroSidebarTitleThree")
                        ),
                        r.default.createElement(m.Text, { as: "p", marginBottom: 4 }, t("seedPhraseIntroSidebarCopyTwo")),
                        r.default.createElement(
                          m.Text,
                          {
                            as: "h3",
                            variant: s.TextVariant.headingSm,
                            backgroundColor: s.BackgroundColor.primaryMuted,
                            padding: 4,
                            borderRadius: s.BorderRadius.LG
                          },
                          t("seedPhraseIntroSidebarCopyThree")
                        )
                      )
                    );
                  });
                var n,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("react-router-dom"),
                  i = e("react-redux"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../components/app/step-progress-bar"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../contexts/metametrics"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../ducks/locale/locale"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../components/component-library"),
                  g = (n = e("./skip-srp-backup-popover")) && n.__esModule ? n : { default: n };
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (h = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/secure-your-wallet/secure-your-wallet.js" }
    ],
    [
      4984,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/button": 4611,
        "../../../components/ui/check-box": 4617,
        "../../../components/ui/popover": 4699,
        "../../../components/ui/typography": 4740,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
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
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = T(e("prop-types")),
                  o = e("react-router-dom"),
                  i = e("react-redux"),
                  s = e("../../../hooks/useI18nContext"),
                  l = T(e("../../../components/ui/button")),
                  c = T(e("../../../components/ui/popover")),
                  u = T(e("../../../components/ui/box")),
                  d = T(e("../../../components/ui/typography")),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../store/actions"),
                  m = T(e("../../../components/ui/check-box")),
                  g = e("../../../helpers/constants/routes"),
                  h = e("../../../../shared/constants/metametrics"),
                  b = e("../../../contexts/metametrics"),
                  v = e("../../../components/component-library");
                function T(e) {
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
                function _({ handleClose: e }) {
                  const [t, a] = (0, n.useState)(!1),
                    r = (0, s.useI18nContext)(),
                    T = (0, o.useHistory)(),
                    y = (0, i.useDispatch)(),
                    _ = (0, n.useContext)(b.MetaMetricsContext);
                  return n.default.createElement(
                    c.default,
                    {
                      className: "skip-srp-backup-popover",
                      footer: n.default.createElement(
                        u.default,
                        {
                          className: "skip-srp-backup-popover__footer",
                          justifyContent: p.JustifyContent.center,
                          alignItems: p.AlignItems.center
                        },
                        n.default.createElement(
                          l.default,
                          {
                            onClick: () => {
                              _({
                                category: h.MetaMetricsEventCategory.Onboarding,
                                event: h.MetaMetricsEventName.OnboardingWalletSecuritySkipCanceled
                              }),
                                e();
                            },
                            type: "secondary",
                            rounded: !0
                          },
                          r("goBack")
                        ),
                        n.default.createElement(
                          l.default,
                          {
                            "data-testid": "skip-srp-backup",
                            disabled: !t,
                            type: "primary",
                            rounded: !0,
                            onClick: async () => {
                              await y((0, f.setSeedPhraseBackedUp)(!1)),
                                _({
                                  category: h.MetaMetricsEventCategory.Onboarding,
                                  event: h.MetaMetricsEventName.OnboardingWalletSecuritySkipConfirmed
                                }),
                                T.push(g.ONBOARDING_COMPLETION_ROUTE);
                            }
                          },
                          r("skip")
                        )
                      )
                    },
                    n.default.createElement(
                      u.default,
                      {
                        flexDirection: p.FLEX_DIRECTION.COLUMN,
                        alignItems: p.AlignItems.center,
                        justifyContent: p.JustifyContent.center,
                        margin: 4
                      },
                      n.default.createElement(v.Icon, {
                        name: v.IconName.Danger,
                        size: v.IconSize.Xl,
                        className: "skip-srp-backup-popover__icon",
                        color: p.IconColor.errorDefault
                      }),
                      n.default.createElement(
                        d.default,
                        { variant: p.TypographyVariant.H3, fontWeight: p.FONT_WEIGHT.BOLD },
                        r("skipAccountSecurity")
                      ),
                      n.default.createElement(
                        u.default,
                        { justifyContent: p.JustifyContent.center, margin: 3 },
                        n.default.createElement(
                          "label",
                          { className: "skip-srp-backup-popover__label" },
                          n.default.createElement(m.default, {
                            className: "skip-srp-backup-popover__checkbox",
                            onClick: () => a(!t),
                            checked: t,
                            dataTestId: "skip-srp-backup-popover-checkbox"
                          }),
                          n.default.createElement(
                            d.default,
                            { className: "skip-srp-backup-popover__details", variant: p.TypographyVariant.H7 },
                            r("skipAccountSecurityDetails")
                          )
                        )
                      )
                    )
                  );
                }
                _.propTypes = { handleClose: r.default.func };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/secure-your-wallet/skip-srp-backup-popover.js" }
    ],
    [
      4985,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/button": 4611,
        "../../../components/ui/check-box": 4617,
        "../../../components/ui/mascot": 4679,
        "../../../contexts/metametrics": 4749,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/onboarding": 4775,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        events: 2745,
        react: 3690,
        "react-redux": 3655,
        "react-responsive-carousel": 3670,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    const e = (0, m.useI18nContext)(),
                      t = (0, o.useDispatch)(),
                      a = (0, i.useHistory)(),
                      [_] = (0, r.useState)(new n.default()),
                      E = (0, o.useSelector)(y.getCurrentKeyring),
                      S = (0, o.useSelector)(y.getFirstTimeFlowType),
                      [C, k] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                      E &&
                        (S === T.FIRST_TIME_FLOW_TYPES.IMPORT
                          ? a.replace(v.ONBOARDING_COMPLETION_ROUTE)
                          : a.replace(v.ONBOARDING_SECURE_YOUR_WALLET_ROUTE));
                    }, [E, a, S]);
                    const A = (0, r.useContext)(g.MetaMetricsContext),
                      M = e("agreeTermsOfUse", [
                        r.default.createElement(
                          "a",
                          {
                            className: "create-new-vault__terms-link",
                            key: "create-new-vault__link-text",
                            href: "https://metamask.io/terms.html",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          },
                          e("terms")
                        )
                      ]);
                    return r.default.createElement(
                      "div",
                      { className: "onboarding-welcome", "data-testid": "onboarding-welcome" },
                      r.default.createElement(
                        s.Carousel,
                        { showThumbs: !1, showStatus: !1, showArrows: !0 },
                        r.default.createElement(
                          "div",
                          null,
                          r.default.createElement(
                            u.Text,
                            { variant: f.TextVariant.headingLg, as: "h2", textAlign: f.TextAlign.Center, fontWeight: f.FontWeight.Bold },
                            e("welcomeToMetaMask")
                          ),
                          r.default.createElement(
                            u.Text,
                            { textAlign: f.TextAlign.Center, marginLeft: 6, marginRight: 6 },
                            e("welcomeToMetaMaskIntro")
                          ),
                          r.default.createElement(
                            "div",
                            { className: "onboarding-welcome__mascot" },
                            r.default.createElement(l.default, { animationEventEmitter: _, width: "250", height: "250" })
                          )
                        ),
                        r.default.createElement(
                          "div",
                          null,
                          r.default.createElement(
                            u.Text,
                            { variant: f.TextVariant.headingLg, as: "h2", textAlign: f.TextAlign.Center, fontWeight: f.FontWeight.Bold },
                            e("welcomeExploreTitle")
                          ),
                          r.default.createElement(u.Text, { textAlign: f.TextAlign.Center }, e("welcomeExploreDescription")),
                          r.default.createElement(
                            "div",
                            { className: "onboarding-welcome__image" },
                            r.default.createElement("img", {
                              src: "/images/onboarding-welcome-say-hello.svg",
                              width: "169",
                              height: "237",
                              alt: ""
                            })
                          )
                        ),
                        r.default.createElement(
                          "div",
                          null,
                          r.default.createElement(
                            u.Text,
                            { variant: f.TextVariant.headingLg, as: "h2", textAlign: f.TextAlign.Center, fontWeight: f.FontWeight.Bold },
                            e("welcomeLoginTitle")
                          ),
                          r.default.createElement(u.Text, { textAlign: f.TextAlign.Center }, e("welcomeLoginDescription")),
                          r.default.createElement(
                            "div",
                            { className: "onboarding-welcome__image" },
                            r.default.createElement("img", {
                              src: "/images/onboarding-welcome-decentralised-apps.svg",
                              width: "327",
                              height: "256",
                              alt: ""
                            })
                          )
                        )
                      ),
                      r.default.createElement(
                        "ul",
                        { className: "onboarding-welcome__buttons" },
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            p.default,
                            { alignItems: f.AlignItems.center, className: "onboarding__terms-of-use" },
                            r.default.createElement(d.default, {
                              id: "onboarding__terms-checkbox",
                              className: "onboarding__terms-checkbox",
                              dataTestId: "onboarding-terms-checkbox",
                              checked: C,
                              onClick: () => {
                                k((e) => !e);
                              }
                            }),
                            r.default.createElement(
                              "label",
                              { className: "onboarding__terms-label", htmlFor: "onboarding__terms-checkbox" },
                              r.default.createElement(u.Text, { variant: f.TextVariant.bodyMd, marginLeft: 2, as: "span" }, M)
                            )
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            c.default,
                            {
                              "data-testid": "onboarding-create-wallet",
                              type: "primary",
                              onClick: async () => {
                                t((0, b.setFirstTimeFlowType)("create")),
                                  A({
                                    category: h.MetaMetricsEventCategory.Onboarding,
                                    event: h.MetaMetricsEventName.OnboardingWalletCreationStarted,
                                    properties: { account_type: "metamask" }
                                  }),
                                  t((0, b.setTermsOfUseLastAgreed)(new Date().getTime())),
                                  a.push(v.ONBOARDING_METAMETRICS);
                              },
                              disabled: !C
                            },
                            e("onboardingCreateWallet")
                          )
                        ),
                        r.default.createElement(
                          "li",
                          null,
                          r.default.createElement(
                            c.default,
                            {
                              "data-testid": "onboarding-import-wallet",
                              type: "secondary",
                              onClick: async () => {
                                t((0, b.setFirstTimeFlowType)("import")),
                                  A({
                                    category: h.MetaMetricsEventCategory.Onboarding,
                                    event: h.MetaMetricsEventName.OnboardingWalletImportStarted,
                                    properties: { account_type: "imported" }
                                  }),
                                  t((0, b.setTermsOfUseLastAgreed)(new Date().getTime())),
                                  a.push(v.ONBOARDING_METAMETRICS);
                              },
                              disabled: !C
                            },
                            e("onboardingImportWallet")
                          )
                        )
                      )
                    );
                  });
                var n = E(e("events")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("react-responsive-carousel"),
                  l = E(e("../../../components/ui/mascot")),
                  c = E(e("../../../components/ui/button")),
                  u = e("../../../components/component-library"),
                  d = E(e("../../../components/ui/check-box")),
                  p = E(e("../../../components/ui/box")),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../../hooks/useI18nContext"),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../../shared/constants/metametrics"),
                  b = e("../../../store/actions"),
                  v = e("../../../helpers/constants/routes"),
                  T = e("../../../helpers/constants/onboarding"),
                  y = e("../../../selectors");
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (_ = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function E(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/welcome/welcome.js" }
    ],
    [
      4986,
      {
        "../../../components/app/permissions-connect-footer": 4232,
        "../../../components/app/permissions-connect-header": 4234,
        "../../../components/ui/account-list": 4601,
        "../../../components/ui/page-container": 4692,
        "../../../hooks/useI18nContext": 4837,
        "@metamask/permission-controller": 1491,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = p(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("@metamask/permission-controller"),
                  i = e("../../../hooks/useI18nContext"),
                  s = p(e("../../../components/app/permissions-connect-header")),
                  l = p(e("../../../components/app/permissions-connect-footer")),
                  c = p(e("../../../components/ui/account-list")),
                  u = e("../../../components/ui/page-container");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = ({
                  selectedAccountAddresses: e,
                  addressLastConnectedMap: t = {},
                  accounts: a,
                  selectAccounts: n,
                  selectNewAccountViaModal: d,
                  cancelPermissionsRequest: p,
                  permissionsRequestId: f,
                  targetSubjectMetadata: m,
                  nativeCurrency: g
                }) => {
                  const [h, b] = (0, r.useState)(e),
                    v = (0, i.useI18nContext)(),
                    T =
                      0 === a.length
                        ? v("connectAccountOrCreate")
                        : (null == m ? void 0 : m.subjectType) === o.SubjectType.Snap
                        ? v("selectAccountsForSnap")
                        : v("selectAccounts");
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      "div",
                      { className: "permissions-connect-choose-account__content" },
                      r.default.createElement(s.default, {
                        iconUrl: null == m ? void 0 : m.iconUrl,
                        iconName: null == m ? void 0 : m.name,
                        headerTitle: v("connectWithMetaMask"),
                        headerText: T,
                        siteOrigin: null == m ? void 0 : m.origin,
                        subjectType: null == m ? void 0 : m.subjectType
                      }),
                      r.default.createElement(c.default, {
                        accounts: a,
                        selectNewAccountViaModal: d,
                        addressLastConnectedMap: t,
                        nativeCurrency: g,
                        selectedAccounts: h,
                        allAreSelected: () => a.length === h.size,
                        deselectAll: () => {
                          b(new Set());
                        },
                        selectAll: () => {
                          const e = new Set(a.map((e) => e.address));
                          b(e);
                        },
                        handleAccountClick: (e) => {
                          const t = new Set(h);
                          t.has(e) ? t.delete(e) : t.add(e), b(t);
                        }
                      })
                    ),
                    r.default.createElement(
                      "div",
                      { className: "permissions-connect-choose-account__footer-container" },
                      (null == m ? void 0 : m.subjectType) !== o.SubjectType.Snap && r.default.createElement(l.default, null),
                      r.default.createElement(u.PageContainerFooter, {
                        cancelButtonType: "default",
                        onCancel: () => p(f),
                        cancelText: v("cancel"),
                        onSubmit: () => n(h),
                        submitText: v("next"),
                        disabled: 0 === h.size
                      })
                    )
                  );
                };
                f.propTypes = {
                  accounts: n.default.arrayOf(
                    n.default.shape({
                      address: n.default.string,
                      addressLabel: n.default.string,
                      lastConnectedDate: n.default.string,
                      balance: n.default.string
                    })
                  ).isRequired,
                  selectAccounts: n.default.func.isRequired,
                  selectNewAccountViaModal: n.default.func.isRequired,
                  nativeCurrency: n.default.string.isRequired,
                  addressLastConnectedMap: n.default.object,
                  cancelPermissionsRequest: n.default.func.isRequired,
                  permissionsRequestId: n.default.string.isRequired,
                  selectedAccountAddresses: n.default.object.isRequired,
                  targetSubjectMetadata: n.default.shape({
                    extensionId: n.default.string,
                    iconUrl: n.default.string,
                    name: n.default.string,
                    origin: n.default.string.isRequired,
                    subjectType: n.default.string
                  })
                };
                a.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/choose-account/choose-account.js" }
    ],
    [
      4987,
      { "./choose-account": 4986 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./choose-account")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/choose-account/index.js" }
    ],
    [
      4988,
      { "./permissions-connect.container": 4990 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./permissions-connect.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/index.js" }
    ],
    [
      4989,
      {
        "../../../app/scripts/lib/util": 82,
        "../../../shared/constants/app": 3953,
        "../../../shared/constants/time": 3972,
        "../../components/app/permission-page-container": 4227,
        "../../components/app/snaps/snap-authorship-header/snap-authorship-header": 4292,
        "../../components/component-library": 4453,
        "../../helpers/constants/routes": 4776,
        "./choose-account": 4987,
        "./redirect": 4991,
        "./snaps/snap-install": 4993,
        "./snaps/snap-result": 4995,
        "./snaps/snap-update": 4997,
        "./snaps/snaps-connect": 4999,
        "@metamask/permission-controller": 1491,
        "eth-rpc-errors": 2648,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = E(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("react-router-dom"),
                  i = e("eth-rpc-errors"),
                  s = e("@metamask/permission-controller"),
                  l = e("../../../app/scripts/lib/util"),
                  c = e("../../../shared/constants/app"),
                  u = e("../../../shared/constants/time"),
                  d = e("../../helpers/constants/routes"),
                  p = E(e("../../components/app/permission-page-container")),
                  f = e("../../components/component-library"),
                  m = E(e("../../components/app/snaps/snap-authorship-header/snap-authorship-header")),
                  g = E(e("./choose-account")),
                  h = E(e("./redirect")),
                  b = E(e("./snaps/snaps-connect")),
                  v = E(e("./snaps/snap-install")),
                  T = E(e("./snaps/snap-update")),
                  y = E(e("./snaps/snap-result"));
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (_ = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function E(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function S(e, t, a) {
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
                const C = 1200 * u.MILLISECOND;
                class k extends r.Component {
                  constructor(...e) {
                    super(...e),
                      S(this, "state", {
                        redirecting: !1,
                        selectedAccountAddresses: new Set([this.props.currentAddress]),
                        permissionsApproved: null,
                        origin: this.props.origin,
                        targetSubjectMetadata: this.props.targetSubjectMetadata || {},
                        snapsInstallPrivacyWarningShown: this.props.snapsInstallPrivacyWarningShown
                      }),
                      S(this, "beforeUnload", () => {
                        const { permissionsRequestId: e, rejectPermissionsRequest: t } = this.props,
                          { permissionsApproved: a } = this.state;
                        null === a && e && t(e);
                      }),
                      S(this, "removeBeforeUnload", () => {
                        (0, l.getEnvironmentType)() === c.ENVIRONMENT_TYPE_NOTIFICATION &&
                          window.removeEventListener("beforeunload", this.beforeUnload);
                      }),
                      S(this, "selectAccounts", (e) => {
                        const {
                          confirmPermissionPath: t,
                          requestType: a,
                          snapsConnectPath: n,
                          snapInstallPath: r,
                          snapUpdatePath: o,
                          snapResultPath: i
                        } = this.props;
                        this.setState({ selectedAccountAddresses: e }, () => {
                          switch (a) {
                            case "wallet_installSnap":
                              this.props.history.push(r);
                              break;
                            case "wallet_updateSnap":
                              this.props.history.push(o);
                              break;
                            case "wallet_installSnapResult":
                              this.props.history.push(i);
                              break;
                            case "wallet_connectSnaps":
                              this.props.history.replace(n);
                              break;
                            default:
                              this.props.history.push(t);
                          }
                        });
                      }),
                      S(this, "cancelPermissionsRequest", async (e) => {
                        const { rejectPermissionsRequest: t } = this.props;
                        e && (await t(e), this.redirect(!1));
                      });
                  }
                  componentDidMount() {
                    const {
                      connectPath: e,
                      confirmPermissionPath: t,
                      snapsConnectPath: a,
                      snapInstallPath: n,
                      snapUpdatePath: r,
                      snapResultPath: o,
                      requestType: i,
                      getRequestAccountTabIds: s,
                      permissionsRequest: u,
                      history: p,
                      isRequestingAccounts: f
                    } = this.props;
                    if ((s(), !u)) return void p.replace(d.DEFAULT_ROUTE);
                    if (
                      ((0, l.getEnvironmentType)() === c.ENVIRONMENT_TYPE_NOTIFICATION &&
                        window.addEventListener("beforeunload", this.beforeUnload),
                      p.location.pathname === e && !f)
                    )
                      switch (i) {
                        case "wallet_installSnap":
                          p.replace(n);
                          break;
                        case "wallet_updateSnap":
                          p.replace(r);
                          break;
                        case "wallet_installSnapResult":
                          p.replace(o);
                          break;
                        case "wallet_connectSnaps":
                          p.replace(a);
                          break;
                        default:
                          p.replace(t);
                      }
                  }
                  componentDidUpdate(e) {
                    const { permissionsRequest: t, lastConnectedInfo: a } = this.props,
                      { redirecting: n, origin: r } = this.state;
                    if (!t && e.permissionsRequest && !n) {
                      var o, i;
                      const t =
                        ((null === (o = a[r]) || void 0 === o ? void 0 : o.lastApproved) || 0) >
                        ((null === (i = e.lastConnectedInfo[r]) || void 0 === i ? void 0 : i.lastApproved) || 0);
                      this.redirect(t);
                    }
                  }
                  redirect(e) {
                    const { history: t, permissionsRequest: a } = this.props;
                    let n = !0;
                    (n = !((null == a ? void 0 : a.permissions) && Object.keys(a.permissions).includes("wallet_snap"))),
                      this.setState({ redirecting: n, permissionsApproved: e }),
                      this.removeBeforeUnload(),
                      n && e ? setTimeout(() => t.push(d.DEFAULT_ROUTE), C) : t.push(d.DEFAULT_ROUTE);
                  }
                  goBack() {
                    const { history: e, connectPath: t } = this.props;
                    e.push(t);
                  }
                  renderTopBar() {
                    const { redirecting: e, targetSubjectMetadata: t } = this.state,
                      { page: a, isRequestingAccounts: n, totalPages: o } = this.props,
                      { t: i } = this.context;
                    return e
                      ? null
                      : r.default.createElement(
                          f.Box,
                          {
                            style: {
                              marginBottom: t.subjectType === s.SubjectType.Snap && "14px",
                              boxShadow: t.subjectType === s.SubjectType.Snap && "var(--shadow-size-lg) var(--color-shadow-default)"
                            }
                          },
                          r.default.createElement(
                            "div",
                            { className: "permissions-connect__top-bar" },
                            "2" === a && n
                              ? r.default.createElement(
                                  "div",
                                  { className: "permissions-connect__back", onClick: () => this.goBack() },
                                  r.default.createElement(f.Icon, { name: f.IconName.ArrowLeft, marginInlineEnd: 1, size: f.IconSize.Xs }),
                                  i("back")
                                )
                              : null,
                            n ? r.default.createElement("div", { className: "permissions-connect__page-count" }, i("xOfY", [a, o])) : null
                          ),
                          t.subjectType === s.SubjectType.Snap &&
                            r.default.createElement(m.default, { snapId: t.origin, boxShadow: "none" })
                        );
                  }
                  render() {
                    const {
                        approvePermissionsRequest: e,
                        accounts: t,
                        showNewAccountModal: a,
                        newAccountNumber: n,
                        nativeCurrency: s,
                        permissionsRequest: l,
                        addressLastConnectedMap: c,
                        permissionsRequestId: u,
                        connectPath: d,
                        confirmPermissionPath: f,
                        hideTopBar: m,
                        targetSubjectMetadata: _,
                        snapsConnectPath: E,
                        snapInstallPath: S,
                        snapUpdatePath: C,
                        snapResultPath: k,
                        requestState: A,
                        approvePendingApproval: M,
                        rejectPendingApproval: O,
                        setSnapsInstallPrivacyWarningShownStatus: w
                      } = this.props,
                      {
                        selectedAccountAddresses: P,
                        permissionsApproved: R,
                        redirecting: N,
                        snapsInstallPrivacyWarningShown: D
                      } = this.state;
                    return r.default.createElement(
                      "div",
                      { className: "permissions-connect" },
                      !m && this.renderTopBar(),
                      N && R
                        ? r.default.createElement(h.default, { subjectMetadata: _ })
                        : r.default.createElement(
                            o.Switch,
                            null,
                            r.default.createElement(o.Route, {
                              path: d,
                              exact: !0,
                              render: () =>
                                r.default.createElement(g.default, {
                                  accounts: t,
                                  nativeCurrency: s,
                                  selectAccounts: (e) => this.selectAccounts(e),
                                  selectNewAccountViaModal: (e) => {
                                    a({ onCreateNewAccount: (t) => e(t), newAccountNumber: n });
                                  },
                                  addressLastConnectedMap: c,
                                  cancelPermissionsRequest: (e) => this.cancelPermissionsRequest(e),
                                  permissionsRequestId: u,
                                  selectedAccountAddresses: P,
                                  targetSubjectMetadata: _
                                })
                            }),
                            r.default.createElement(o.Route, {
                              path: f,
                              exact: !0,
                              render: () =>
                                r.default.createElement(p.default, {
                                  request: l || {},
                                  approvePermissionsRequest: (...t) => {
                                    e(...t), this.redirect(!0);
                                  },
                                  rejectPermissionsRequest: (e) => this.cancelPermissionsRequest(e),
                                  selectedIdentities: t.filter((e) => P.has(e.address)),
                                  targetSubjectMetadata: _,
                                  snapsInstallPrivacyWarningShown: D,
                                  setSnapsInstallPrivacyWarningShownStatus: w
                                })
                            }),
                            r.default.createElement(o.Route, {
                              path: E,
                              exact: !0,
                              render: () =>
                                r.default.createElement(b.default, {
                                  request: l || {},
                                  approveConnection: (...t) => {
                                    e(...t), this.redirect(!0);
                                  },
                                  rejectConnection: (e) => this.cancelPermissionsRequest(e),
                                  targetSubjectMetadata: _,
                                  snapsInstallPrivacyWarningShown: D,
                                  setSnapsInstallPrivacyWarningShownStatus: w
                                })
                            }),
                            r.default.createElement(o.Route, {
                              path: S,
                              exact: !0,
                              render: () =>
                                r.default.createElement(v.default, {
                                  request: l || {},
                                  requestState: A || {},
                                  approveSnapInstall: (e) => {
                                    M(e, { ...l, permissions: A.permissions, approvedAccounts: [...P] }),
                                      this.setState({ permissionsApproved: !0 });
                                  },
                                  rejectSnapInstall: (e) => {
                                    O(e, (0, i.serializeError)(i.ethErrors.provider.userRejectedRequest())),
                                      this.setState({ permissionsApproved: !0 }),
                                      this.removeBeforeUnload();
                                  },
                                  targetSubjectMetadata: _
                                })
                            }),
                            r.default.createElement(o.Route, {
                              path: C,
                              exact: !0,
                              render: () =>
                                r.default.createElement(T.default, {
                                  request: l || {},
                                  requestState: A || {},
                                  approveSnapUpdate: (e) => {
                                    M(e, { ...l, permissions: A.permissions, approvedAccounts: [...P] }),
                                      this.setState({ permissionsApproved: !0 });
                                  },
                                  rejectSnapUpdate: (e) => {
                                    O(e, (0, i.serializeError)(i.ethErrors.provider.userRejectedRequest())),
                                      this.setState({ permissionsApproved: !1 }),
                                      this.removeBeforeUnload();
                                  },
                                  targetSubjectMetadata: _
                                })
                            }),
                            r.default.createElement(o.Route, {
                              path: k,
                              exact: !0,
                              render: () =>
                                r.default.createElement(y.default, {
                                  request: l || {},
                                  requestState: A || {},
                                  approveSnapResult: (e) => {
                                    M(e), this.setState({ permissionsApproved: !0 }), this.removeBeforeUnload();
                                  },
                                  targetSubjectMetadata: _
                                })
                            })
                          )
                    );
                  }
                }
                (a.default = k),
                  S(k, "propTypes", {
                    approvePermissionsRequest: n.default.func.isRequired,
                    rejectPermissionsRequest: n.default.func.isRequired,
                    getRequestAccountTabIds: n.default.func.isRequired,
                    accounts: n.default.array.isRequired,
                    currentAddress: n.default.string.isRequired,
                    origin: n.default.string,
                    showNewAccountModal: n.default.func.isRequired,
                    newAccountNumber: n.default.number.isRequired,
                    nativeCurrency: n.default.string,
                    permissionsRequest: n.default.object,
                    addressLastConnectedMap: n.default.object.isRequired,
                    lastConnectedInfo: n.default.object.isRequired,
                    permissionsRequestId: n.default.string,
                    history: n.default.object.isRequired,
                    connectPath: n.default.string.isRequired,
                    confirmPermissionPath: n.default.string.isRequired,
                    requestType: n.default.string.isRequired,
                    snapsConnectPath: n.default.string.isRequired,
                    snapInstallPath: n.default.string.isRequired,
                    snapUpdatePath: n.default.string.isRequired,
                    snapResultPath: n.default.string.isRequired,
                    requestState: n.default.object.isRequired,
                    approvePendingApproval: n.default.func.isRequired,
                    rejectPendingApproval: n.default.func.isRequired,
                    setSnapsInstallPrivacyWarningShownStatus: n.default.func.isRequired,
                    snapsInstallPrivacyWarningShown: n.default.bool.isRequired,
                    hideTopBar: n.default.bool,
                    totalPages: n.default.string.isRequired,
                    page: n.default.string.isRequired,
                    targetSubjectMetadata: n.default.shape({
                      extensionId: n.default.string,
                      iconUrl: n.default.string,
                      name: n.default.string,
                      origin: n.default.string,
                      subjectType: n.default.string
                    }),
                    isRequestingAccounts: n.default.bool.isRequired
                  }),
                  S(k, "defaultProps", { origin: "", nativeCurrency: "", permissionsRequest: undefined, permissionsRequestId: "" }),
                  S(k, "contextTypes", { t: n.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/permissions-connect.component.js" }
    ],
    [
      4990,
      {
        "../../ducks/metamask/metamask": 4763,
        "../../helpers/constants/routes": 4776,
        "../../helpers/utils/util": 4812,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        "./permissions-connect.component": 4989,
        "@metamask/permission-controller": 1491,
        "@metamask/snaps-rpc-methods": 1692,
        "prop-types": 3450,
        "react-redux": 3655
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("@metamask/permission-controller"),
                  r = e("@metamask/snaps-rpc-methods"),
                  o = e("react-redux"),
                  i = f(e("prop-types")),
                  s = e("../../selectors"),
                  l = e("../../ducks/metamask/metamask"),
                  c = e("../../helpers/utils/util"),
                  u = e("../../store/actions"),
                  d = e("../../helpers/constants/routes"),
                  p = f(e("./permissions-connect.component"));
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const m = (0, o.connect)(
                  (e, t) => {
                    var a, o, i;
                    const {
                      match: {
                        params: { id: u }
                      },
                      location: { pathname: p }
                    } = t;
                    let f = (0, s.getPermissionsRequests)(e);
                    f = [...f, ...(0, s.getSnapInstallOrUpdateRequests)(e)];
                    const m = (0, s.getSelectedAddress)(e),
                      g = f.find((e) => e.metadata.id === u),
                      h = Boolean(null == g || null === (a = g.permissions) || void 0 === a ? void 0 : a.eth_accounts),
                      { metadata: b = {} } = g || {},
                      { origin: v } = b,
                      T = (0, l.getNativeCurrency)(e),
                      y = (0, s.getTargetSubjectMetadata)(e, v) ?? {
                        name: (0, c.getURLHostName)(v) || v,
                        origin: v,
                        iconUrl: null,
                        extensionId: null,
                        subjectType: n.SubjectType.Unknown
                      };
                    let _ = (0, s.getRequestType)(e, u);
                    g &&
                      1 === Object.keys(g.permissions || {}).length &&
                      null !== (o = g.permissions) &&
                      void 0 !== o &&
                      o[r.WALLET_SNAP_PERMISSION_KEY] &&
                      (_ = "wallet_connectSnaps");
                    const E = (0, s.getRequestState)(e, u) || {},
                      S = (0, s.getAccountsWithLabels)(e),
                      C = (0, s.getLastConnectedInfo)(e) || {},
                      k = (null === (i = C[v]) || void 0 === i ? void 0 : i.accounts) || {};
                    Object.keys(k).forEach((e) => {
                      k[e] = (0, c.formatDate)(k[e], "yyyy-MM-dd");
                    });
                    const A = `${d.CONNECT_ROUTE}/${u}`,
                      M = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_CONFIRM_PERMISSIONS_ROUTE}`,
                      O = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_SNAPS_CONNECT_ROUTE}`,
                      w = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_SNAP_INSTALL_ROUTE}`,
                      P = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_SNAP_UPDATE_ROUTE}`,
                      R = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_SNAP_RESULT_ROUTE}`,
                      N = p === w || p === P || p === R;
                    let D = 1 + h;
                    (D += N), (D = D.toString());
                    let F = "";
                    if (p === A) F = "1";
                    else if (p === M) F = h ? "2" : "1";
                    else if (N) F = h ? "3" : "2";
                    else {
                      if (p !== O) throw new Error("Incorrect path for permissions-connect component");
                      F = 1;
                    }
                    return {
                      isRequestingAccounts: h,
                      requestType: _,
                      snapsConnectPath: O,
                      snapInstallPath: w,
                      snapUpdatePath: P,
                      snapResultPath: R,
                      requestState: E,
                      hideTopBar: N,
                      snapsInstallPrivacyWarningShown: (0, s.getSnapsInstallPrivacyWarningShown)(e),
                      permissionsRequest: g,
                      permissionsRequestId: u,
                      accounts: S,
                      currentAddress: m,
                      origin: v,
                      newAccountNumber: S.length + 1,
                      nativeCurrency: T,
                      addressLastConnectedMap: k,
                      lastConnectedInfo: C,
                      connectPath: A,
                      confirmPermissionPath: M,
                      totalPages: D,
                      page: F,
                      targetSubjectMetadata: y
                    };
                  },
                  (e) => ({
                    approvePermissionsRequest: (t) => e((0, u.approvePermissionsRequest)(t)),
                    rejectPermissionsRequest: (t) => e((0, u.rejectPermissionsRequest)(t)),
                    approvePendingApproval: (t, a) => e((0, u.resolvePendingApproval)(t, a)),
                    rejectPendingApproval: (t, a) => e((0, u.rejectPendingApproval)(t, a)),
                    setSnapsInstallPrivacyWarningShownStatus: (t) => {
                      e((0, u.setSnapsInstallPrivacyWarningShownStatus)(t));
                    },
                    showNewAccountModal: ({ onCreateNewAccount: t, newAccountNumber: a }) =>
                      e((0, u.showModal)({ name: "NEW_ACCOUNT", onCreateNewAccount: t, newAccountNumber: a })),
                    getRequestAccountTabIds: () => e((0, u.getRequestAccountTabIds)())
                  })
                )(p.default);
                m.propTypes = {
                  history: i.default.object.isRequired,
                  match: i.default.shape({ params: i.default.shape({ id: i.default.string }).isRequired }).isRequired
                };
                a.default = m;
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/permissions-connect.container.js" }
    ],
    [
      4991,
      { "./permissions-redirect.component": 4992 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./permissions-redirect.component")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/redirect/index.js" }
    ],
    [
      4992,
      {
        "../../../components/component-library": 4453,
        "../../../components/ui/box": 4607,
        "../../../components/ui/site-icon": 4713,
        "../../../components/ui/typography/typography": 4741,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
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
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = d(e("prop-types")),
                  o = d(e("../../../components/ui/site-icon")),
                  i = d(e("../../../components/ui/box")),
                  s = d(e("../../../components/ui/typography/typography")),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../contexts/i18n"),
                  u = e("../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (p = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function f({ subjectMetadata: e }) {
                  const t = (0, n.useContext)(c.I18nContext);
                  return n.default.createElement(
                    "div",
                    { className: "permissions-redirect" },
                    n.default.createElement(
                      "div",
                      { className: "permissions-redirect__result" },
                      n.default.createElement(
                        s.default,
                        { boxProps: { marginBottom: 4 }, variant: l.TypographyVariant.H3 },
                        t("connecting")
                      ),
                      n.default.createElement(
                        "div",
                        { className: "permissions-redirect__icons" },
                        n.default.createElement(o.default, {
                          icon: e.iconUrl,
                          name: e.name,
                          size: 64,
                          className: "permissions-redirect__site-icon"
                        }),
                        n.default.createElement(
                          i.default,
                          {
                            className: "permissions-redirect__center-icon",
                            display: l.DISPLAY.FLEX,
                            alignItems: l.AlignItems.center,
                            justifyContent: l.JustifyContent.center
                          },
                          n.default.createElement(u.Icon, {
                            name: u.IconName.Check,
                            size: u.IconSize.Lg,
                            className: "permissions-redirect__check"
                          }),
                          n.default.createElement("div", { className: "permissions-redirect__dashed-line" })
                        ),
                        n.default.createElement(o.default, {
                          icon: "/images/logo/metamask-fox.svg",
                          size: 64,
                          className: "permissions-redirect__site-icon"
                        })
                      )
                    )
                  );
                }
                f.propTypes = {
                  subjectMetadata: r.default.shape({
                    extensionId: r.default.string,
                    iconUrl: r.default.string,
                    subjectType: r.default.string,
                    name: r.default.string.isRequired,
                    origin: r.default.string.isRequired
                  })
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/redirect/permissions-redirect.component.js" }
    ],
    [
      4993,
      { "./snap-install": 4994 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./snap-install")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-install/index.js" }
    ],
    [
      4994,
      {
        "../../../../components/app/snaps/install-error/install-error": 4283,
        "../../../../components/app/snaps/snap-authorship-header": 4291,
        "../../../../components/app/snaps/snap-install-warning": 4300,
        "../../../../components/app/snaps/snap-permissions-list": 4308,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/box/box": 4606,
        "../../../../components/ui/page-container": 4692,
        "../../../../components/ui/pulse-loader/pulse-loader": 4702,
        "../../../../components/ui/site-origin/site-origin": 4716,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/useOriginMetadata": 4843,
        "../../../../hooks/useScrollRequired": 4849,
        "../util": 5001,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = E);
                var n = _(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("../../../../components/ui/page-container"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = _(e("../../../../components/app/snaps/snap-install-warning")),
                  l = _(e("../../../../components/ui/box/box")),
                  c = e("../../../../helpers/constants/design-system"),
                  u = e("../util"),
                  d = _(e("../../../../components/ui/pulse-loader/pulse-loader")),
                  p = _(e("../../../../components/app/snaps/snap-authorship-header")),
                  f = e("../../../../components/component-library"),
                  m = e("../../../../helpers/utils/util"),
                  g = _(e("../../../../components/app/snaps/snap-permissions-list")),
                  h = e("../../../../hooks/useScrollRequired"),
                  b = _(e("../../../../components/ui/site-origin/site-origin")),
                  v = _(e("../../../../components/app/snaps/install-error/install-error")),
                  T = e("../../../../hooks/useOriginMetadata");
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (y = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function _(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E({ request: e, requestState: t, approveSnapInstall: a, rejectSnapInstall: n, targetSubjectMetadata: y }) {
                  var _;
                  const E = (0, i.useI18nContext)(),
                    S = (0, T.useOriginMetadata)(null == e || null === (_ = e.metadata) || void 0 === _ ? void 0 : _.dappOrigin) || {},
                    { origin: C, iconUrl: k, name: A } = S,
                    [M, O] = (0, r.useState)(!1),
                    { isScrollable: w, isScrolledToBottom: P, scrollToBottom: R, ref: N, onScroll: D } = (0, h.useScrollRequired)([t]),
                    F = (0, r.useCallback)(() => n(e.metadata.id), [e, n]),
                    L = (0, r.useCallback)(() => a(e.metadata.id), [e, a]),
                    x = !t.loading && t.error,
                    B = t.loading,
                    I = (0, u.getSnapInstallWarnings)((null == t ? void 0 : t.permissions) ?? {}, y, E),
                    J = I.length > 0,
                    j = (0, m.getSnapName)(y.origin, y);
                  return r.default.createElement(
                    l.default,
                    {
                      className: "page-container snap-install",
                      justifyContent: c.JustifyContent.spaceBetween,
                      height: c.BLOCK_SIZES.FULL,
                      borderStyle: c.BorderStyle.none,
                      flexDirection: c.FLEX_DIRECTION.COLUMN
                    },
                    B || x
                      ? r.default.createElement(
                          l.default,
                          { width: "full", alignItems: c.AlignItems.center, justifyContent: c.JustifyContent.center, paddingTop: 4 },
                          r.default.createElement(b.default, { chip: !0, siteOrigin: C, title: C, iconSrc: k, iconName: A })
                        )
                      : r.default.createElement(p.default, { snapId: y.origin }),
                    r.default.createElement(
                      l.default,
                      {
                        ref: B || x ? undefined : N,
                        onScroll: D,
                        className: "snap-install__content",
                        style: { overflowY: "auto", flex: !B && !x && "1" }
                      },
                      B &&
                        r.default.createElement(
                          l.default,
                          {
                            className: "snap-install__content__loader-container",
                            flexDirection: c.FLEX_DIRECTION.COLUMN,
                            alignItems: c.AlignItems.center,
                            justifyContent: c.JustifyContent.center
                          },
                          r.default.createElement(d.default, null)
                        ),
                      x &&
                        r.default.createElement(v.default, {
                          iconName: f.IconName.Warning,
                          title: E("connectionFailed"),
                          description: E("connectionFailedDescription", [
                            r.default.createElement(f.Text, { as: f.ValidTag.Span, key: "1", fontWeight: c.FontWeight.Medium }, j)
                          ]),
                          error: t.error
                        }),
                      !x &&
                        !B &&
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            f.Text,
                            { variant: c.TextVariant.headingLg, paddingTop: 4, paddingBottom: 2, textAlign: "center" },
                            E("installRequest")
                          ),
                          r.default.createElement(
                            f.Text,
                            {
                              className: "snap-install__content__permission-description",
                              paddingBottom: 4,
                              paddingLeft: 4,
                              paddingRight: 4,
                              textAlign: c.TEXT_ALIGN.CENTER
                            },
                            E("snapInstallRequest", [
                              r.default.createElement(
                                f.Text,
                                { as: f.ValidTag.Span, key: "2", variant: c.TextVariant.bodyMd, fontWeight: c.FontWeight.Medium },
                                j
                              )
                            ])
                          ),
                          r.default.createElement(g.default, {
                            snapId: y.origin,
                            permissions: t.permissions || {},
                            targetSubjectMetadata: y
                          }),
                          w && !P
                            ? r.default.createElement(f.AvatarIcon, {
                                className: "snap-install__scroll-button",
                                "data-testid": "snap-install-scroll",
                                iconName: f.IconName.Arrow2Down,
                                backgroundColor: c.BackgroundColor.infoDefault,
                                color: c.IconColor.primaryInverse,
                                onClick: R,
                                style: { cursor: "pointer" }
                              })
                            : null
                        )
                    ),
                    r.default.createElement(
                      l.default,
                      {
                        className: "snap-install__footer",
                        alignItems: c.AlignItems.center,
                        flexDirection: c.FLEX_DIRECTION.COLUMN,
                        style: { boxShadow: "var(--shadow-size-lg) var(--color-shadow-default)" }
                      },
                      r.default.createElement(o.PageContainerFooter, {
                        cancelButtonType: "default",
                        hideCancel: x,
                        disabled: B || (!x && w && !P),
                        onCancel: F,
                        cancelText: E("cancel"),
                        onSubmit: () => {
                          !x && J ? O(!0) : x ? F() : L();
                        },
                        submitText: E(x ? "ok" : B ? "connect" : "install")
                      })
                    ),
                    M && r.default.createElement(s.default, { onCancel: () => O(!1), onSubmit: L, warnings: I, snapName: j })
                  );
                }
                E.propTypes = {
                  request: n.default.object.isRequired,
                  requestState: n.default.object.isRequired,
                  approveSnapInstall: n.default.func.isRequired,
                  rejectSnapInstall: n.default.func.isRequired,
                  targetSubjectMetadata: n.default.shape({
                    iconUrl: n.default.string,
                    name: n.default.string,
                    origin: n.default.string.isRequired,
                    sourceCode: n.default.string,
                    version: n.default.string
                  }).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-install/snap-install.js" }
    ],
    [
      4995,
      { "./snap-result": 4996 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./snap-result")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-result/index.js" }
    ],
    [
      4996,
      {
        "../../../../components/app/snaps/install-error/install-error": 4283,
        "../../../../components/app/snaps/snap-authorship-header": 4291,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/box/box": 4606,
        "../../../../components/ui/page-container": 4692,
        "../../../../components/ui/pulse-loader/pulse-loader": 4702,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = h);
                var n = g(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("../../../../components/ui/page-container"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = g(e("../../../../components/ui/box/box")),
                  l = e("../../../../helpers/constants/design-system"),
                  c = e("../../../../components/component-library"),
                  u = g(e("../../../../components/ui/pulse-loader/pulse-loader")),
                  d = g(e("../../../../components/app/snaps/install-error/install-error")),
                  p = g(e("../../../../components/app/snaps/snap-authorship-header")),
                  f = e("../../../../helpers/utils/util");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h({ request: e, requestState: t, approveSnapResult: a, targetSubjectMetadata: n }) {
                  const m = (0, i.useI18nContext)(),
                    g = (0, r.useCallback)(() => a(e.metadata.id), [e, a]),
                    h = !t.loading && t.error,
                    b = t.loading,
                    v = (0, f.getSnapName)(n.origin, n);
                  return r.default.createElement(
                    s.default,
                    {
                      className: "page-container snap-result",
                      justifyContent: l.JustifyContent.spaceBetween,
                      height: l.BlockSize.Full,
                      borderStyle: l.BorderStyle.none,
                      flexDirection: l.FlexDirection.Column
                    },
                    r.default.createElement(p.default, { snapId: n.origin }),
                    r.default.createElement(
                      s.default,
                      {
                        className: "snap-result__content",
                        paddingLeft: 4,
                        paddingRight: 4,
                        alignItems: l.AlignItems.center,
                        flexDirection: l.FlexDirection.Column,
                        style: { overflowY: "auto" }
                      },
                      b &&
                        r.default.createElement(
                          s.default,
                          {
                            className: "snap-result__content__loader-container",
                            flexDirection: l.FlexDirection.Column,
                            alignItems: l.AlignItems.center,
                            justifyContent: l.JustifyContent.center
                          },
                          r.default.createElement(u.default, null)
                        ),
                      !b &&
                        !h &&
                        (function (e, t) {
                          let a;
                          switch (e) {
                            case "wallet_installSnap":
                              a = m("snapInstallSuccess");
                              break;
                            case "wallet_updateSnap":
                              a = m("snapUpdateSuccess");
                              break;
                            default:
                              a = m("snapResultSuccess");
                          }
                          return r.default.createElement(
                            s.default,
                            {
                              flexDirection: l.FlexDirection.Column,
                              alignItems: l.AlignItems.center,
                              justifyContent: l.JustifyContent.center,
                              height: l.BlockSize.Full,
                              paddingTop: 2,
                              paddingBottom: 2
                            },
                            r.default.createElement(c.AvatarIcon, {
                              className: "snap-result__header__icon",
                              iconName: c.IconName.Confirmation,
                              size: c.AvatarIconSize.Xl,
                              color: l.IconColor.successDefault,
                              backgroundColor: l.BackgroundColor.successMuted
                            }),
                            r.default.createElement(
                              c.Text,
                              { fontWeight: l.FontWeight.Bold, variant: l.TextVariant.headingLg, paddingBottom: 2, marginTop: 4 },
                              a
                            ),
                            r.default.createElement(
                              c.Text,
                              { textAlign: l.TextAlign.Center },
                              m("snapResultSuccessDescription", [
                                r.default.createElement(c.Text, { as: "span", key: "1", fontWeight: l.FontWeight.Medium }, t)
                              ])
                            )
                          );
                        })(t.type, v),
                      h &&
                        (function (e, a) {
                          let n, o;
                          switch (e) {
                            case "wallet_installSnap":
                              (n = m("snapInstallationErrorTitle")),
                                (o = m("snapInstallationErrorDescription", [
                                  r.default.createElement(c.Text, { as: "span", key: "1", fontWeight: l.FontWeight.Medium }, a)
                                ]));
                              break;
                            case "wallet_updateSnap":
                              (n = m("snapUpdateErrorTitle")),
                                (o = m("snapUpdateErrorDescription", [
                                  r.default.createElement(c.Text, { as: "span", key: "1", fontWeight: l.FontWeight.Medium }, a)
                                ]));
                              break;
                            default:
                              n = m("snapResultError");
                          }
                          return r.default.createElement(d.default, {
                            error: t.error,
                            title: n,
                            description: o,
                            iconName: c.IconName.Warning
                          });
                        })(t.type, v)
                    ),
                    r.default.createElement(
                      s.default,
                      {
                        className: "snap-result__footer",
                        alignItems: l.AlignItems.center,
                        flexDirection: l.FlexDirection.Column,
                        style: { boxShadow: "var(--shadow-size-lg) var(--color-shadow-default)" }
                      },
                      r.default.createElement(o.PageContainerFooter, {
                        hideCancel: !0,
                        disabled: b,
                        onSubmit: g,
                        submitText: m("ok").toUpperCase()
                      })
                    )
                  );
                }
                h.propTypes = {
                  request: n.default.object.isRequired,
                  requestState: n.default.object.isRequired,
                  approveSnapResult: n.default.func.isRequired,
                  targetSubjectMetadata: n.default.shape({
                    iconUrl: n.default.string,
                    name: n.default.string,
                    origin: n.default.string.isRequired,
                    sourceCode: n.default.string,
                    version: n.default.string
                  }).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-result/snap-result.js" }
    ],
    [
      4997,
      { "./snap-update": 4998 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./snap-update")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-update/index.js" }
    ],
    [
      4998,
      {
        "../../../../components/app/snaps/install-error/install-error": 4283,
        "../../../../components/app/snaps/snap-authorship-header": 4291,
        "../../../../components/app/snaps/snap-install-warning": 4300,
        "../../../../components/app/snaps/update-snap-permission-list": 4323,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/box/box": 4606,
        "../../../../components/ui/page-container": 4692,
        "../../../../components/ui/pulse-loader/pulse-loader": 4702,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/useScrollRequired": 4849,
        "../util": 5001,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = y);
                var n = T(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("../../../../components/ui/page-container"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = T(e("../../../../components/app/snaps/snap-install-warning")),
                  l = T(e("../../../../components/ui/box/box")),
                  c = e("../../../../helpers/constants/design-system"),
                  u = T(e("../../../../components/app/snaps/update-snap-permission-list")),
                  d = e("../util"),
                  p = T(e("../../../../components/ui/pulse-loader/pulse-loader")),
                  f = T(e("../../../../components/app/snaps/install-error/install-error")),
                  m = T(e("../../../../components/app/snaps/snap-authorship-header")),
                  g = e("../../../../components/component-library"),
                  h = e("../../../../helpers/utils/util"),
                  b = e("../../../../hooks/useScrollRequired");
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (v = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function T(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y({ request: e, requestState: t, approveSnapUpdate: a, rejectSnapUpdate: n, targetSubjectMetadata: v }) {
                  const T = (0, i.useI18nContext)(),
                    [y, _] = (0, r.useState)(!1),
                    { isScrollable: E, isScrolledToBottom: S, scrollToBottom: C, ref: k, onScroll: A } = (0, b.useScrollRequired)([t]),
                    M = (0, r.useCallback)(() => n(e.metadata.id), [e, n]),
                    O = (0, r.useCallback)(() => a(e.metadata.id), [e, a]),
                    w = t.approvedPermissions ?? {},
                    P = t.unusedPermissions ?? {},
                    R = t.newPermissions ?? {},
                    { newVersion: N } = t,
                    D = t.loading,
                    F = !D && t.error,
                    L = (0, d.getSnapInstallWarnings)(R, v, T),
                    x = L.length > 0,
                    B = (0, h.getSnapName)(v.origin, v);
                  return r.default.createElement(
                    l.default,
                    {
                      className: "page-container snap-update",
                      justifyContent: c.JustifyContent.spaceBetween,
                      height: c.BLOCK_SIZES.FULL,
                      borderStyle: c.BorderStyle.none,
                      flexDirection: c.FLEX_DIRECTION.COLUMN
                    },
                    r.default.createElement(m.default, { snapId: v.origin }),
                    r.default.createElement(
                      l.default,
                      { ref: k, onScroll: A, className: "snap-update__content", style: { overflowY: "auto", flex: !D && "1" } },
                      !D &&
                        !F &&
                        r.default.createElement(
                          g.Text,
                          { paddingBottom: 4, paddingTop: 4, variant: c.TextVariant.headingLg, textAlign: "center" },
                          T("updateRequest")
                        ),
                      D &&
                        r.default.createElement(
                          l.default,
                          {
                            className: "snap-update__content__loader-container",
                            flexDirection: c.FLEX_DIRECTION.COLUMN,
                            alignItems: c.AlignItems.center,
                            justifyContent: c.JustifyContent.center
                          },
                          r.default.createElement(p.default, null)
                        ),
                      F &&
                        r.default.createElement(f.default, {
                          iconName: g.IconName.Warning,
                          error: t.error,
                          title: T("snapUpdateErrorTitle"),
                          description: T("snapUpdateErrorDescription", [
                            r.default.createElement(g.Text, { as: g.ValidTag.Span, key: "1", fontWeight: c.FontWeight.Medium }, B)
                          ])
                        }),
                      !F &&
                        !D &&
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            g.Text,
                            {
                              className: "snap-update__content__permission-description",
                              paddingBottom: 4,
                              paddingLeft: 4,
                              paddingRight: 4,
                              textAlign: c.TEXT_ALIGN.CENTER
                            },
                            T("snapUpdateRequest", [
                              r.default.createElement(
                                g.Text,
                                { as: g.ValidTag.Span, key: "2", variant: c.TextVariant.bodyMd, fontWeight: c.FontWeight.Medium },
                                B
                              ),
                              r.default.createElement(
                                g.Text,
                                { as: g.ValidTag.Span, key: "3", variant: c.TextVariant.bodyMd, fontWeight: c.FontWeight.Medium },
                                N
                              )
                            ])
                          ),
                          r.default.createElement(u.default, {
                            approvedPermissions: w,
                            revokedPermissions: P,
                            newPermissions: R,
                            targetSubjectMetadata: v
                          }),
                          E && !S
                            ? r.default.createElement(g.AvatarIcon, {
                                className: "snap-install__scroll-button",
                                "data-testid": "snap-update-scroll",
                                iconName: g.IconName.Arrow2Down,
                                backgroundColor: c.BackgroundColor.infoDefault,
                                color: c.IconColor.primaryInverse,
                                onClick: C,
                                style: { cursor: "pointer" }
                              })
                            : null
                        )
                    ),
                    r.default.createElement(
                      l.default,
                      {
                        className: "snap-update__footer",
                        alignItems: c.AlignItems.center,
                        flexDirection: c.FLEX_DIRECTION.COLUMN,
                        style: { boxShadow: "var(--shadow-size-lg) var(--color-shadow-default)" }
                      },
                      r.default.createElement(o.PageContainerFooter, {
                        cancelButtonType: "default",
                        hideCancel: F,
                        disabled: D || (!F && E && !S),
                        onCancel: M,
                        cancelText: T("cancel"),
                        onSubmit: () => {
                          !F && x ? _(!0) : F ? M() : O();
                        },
                        submitText: T(F ? "ok" : "update")
                      })
                    ),
                    y && r.default.createElement(s.default, { onCancel: () => _(!1), onSubmit: O, snapName: B, warnings: L })
                  );
                }
                y.propTypes = {
                  request: n.default.object.isRequired,
                  requestState: n.default.object.isRequired,
                  approveSnapUpdate: n.default.func.isRequired,
                  rejectSnapUpdate: n.default.func.isRequired,
                  targetSubjectMetadata: n.default.shape({
                    iconUrl: n.default.string,
                    name: n.default.string,
                    origin: n.default.string.isRequired,
                    sourceCode: n.default.string,
                    version: n.default.string
                  }).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-update/snap-update.js" }
    ],
    [
      4999,
      { "./snaps-connect": 5e3 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./snaps-connect")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snaps-connect/index.js" }
    ],
    [
      5e3,
      {
        "../../../../components/app/snaps/snap-avatar/snap-avatar": 4294,
        "../../../../components/app/snaps/snap-connect-cell/snap-connect-cell": 4295,
        "../../../../components/app/snaps/snap-privacy-warning/snap-privacy-warning": 4311,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/box": 4607,
        "../../../../components/ui/page-container": 4692,
        "../../../../components/ui/pulse-loader/pulse-loader": 4702,
        "../../../../components/ui/site-origin": 4715,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/useOriginMetadata": 4843,
        "../../../../selectors": 5197,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = _);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = y(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = T(e("prop-types")),
                  i = e("../../../../hooks/useI18nContext"),
                  s = T(e("../../../../components/ui/box")),
                  l = T(e("../../../../components/ui/site-origin")),
                  c = e("../../../../components/component-library"),
                  u = e("../../../../helpers/constants/design-system"),
                  d = e("../../../../components/ui/page-container"),
                  p = T(e("../../../../components/app/snaps/snap-connect-cell/snap-connect-cell")),
                  f = e("../../../../helpers/utils/util"),
                  m = T(e("../../../../components/ui/pulse-loader/pulse-loader")),
                  g = T(e("../../../../components/app/snaps/snap-privacy-warning/snap-privacy-warning")),
                  h = e("../../../../selectors"),
                  b = T(e("../../../../components/app/snaps/snap-avatar/snap-avatar")),
                  v = e("../../../../hooks/useOriginMetadata");
                function T(e) {
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
                function _({
                  request: e,
                  approveConnection: t,
                  rejectConnection: a,
                  targetSubjectMetadata: o,
                  snapsInstallPrivacyWarningShown: T,
                  setSnapsInstallPrivacyWarningShownStatus: y
                }) {
                  const _ = (0, i.useI18nContext)(),
                    { origin: E, iconUrl: S, name: C } = o,
                    [k, A] = (0, n.useState)(!1),
                    [M, O] = (0, n.useState)(!T),
                    w = (0, r.useSelector)((t) => {
                      var a;
                      return (0, h.getPermissions)(t, null == e || null === (a = e.metadata) || void 0 === a ? void 0 : a.origin);
                    }),
                    P = (0, n.useCallback)(() => {
                      a(e.metadata.id);
                    }, [e, a]),
                    R = (0, n.useCallback)(() => {
                      try {
                        A(!0), t(e);
                      } finally {
                        A(!1);
                      }
                    }, [e, t]),
                    N = (0, f.getDedupedSnaps)(e, w),
                    D = (0, r.useSelector)((e) => (0, h.getTargetSubjectMetadata)(e, null == N ? void 0 : N[0])),
                    F = () => {
                      const { hostname: e } = (0, v.useOriginMetadata)(E) || {};
                      if (k)
                        return n.default.createElement(
                          s.default,
                          {
                            className: "snap-connect__loader-container",
                            flexDirection: u.FlexDirection.Column,
                            alignItems: u.AlignItems.center,
                            justifyContent: u.JustifyContent.center
                          },
                          n.default.createElement(m.default, null)
                        );
                      if ((null == N ? void 0 : N.length) > 1)
                        return n.default.createElement(
                          s.default,
                          {
                            className: "snaps-connect__content",
                            flexDirection: u.FlexDirection.Column,
                            justifyContent: u.JustifyContent.center,
                            alignItems: u.AlignItems.center,
                            paddingLeft: 4,
                            paddingRight: 4,
                            paddingTop: 8,
                            width: u.BlockSize.Full,
                            style: { overflowY: "hidden" }
                          },
                          n.default.createElement(c.Text, { paddingBottom: 2, variant: u.TextVariant.headingLg }, _("connectionRequest")),
                          n.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, textAlign: u.TextAlign.Center },
                            _("multipleSnapConnectionWarning", [
                              n.default.createElement(
                                c.Text,
                                { as: c.ValidTag.Span, key: "1", variant: u.TextVariant.bodyMd, fontWeight: u.FontWeight.Medium },
                                e
                              ),
                              n.default.createElement(
                                c.Text,
                                { as: c.ValidTag.Span, key: "2", variant: u.TextVariant.bodyMd, fontWeight: u.FontWeight.Medium },
                                null == N ? void 0 : N.length
                              )
                            ])
                          ),
                          n.default.createElement(
                            s.default,
                            {
                              className: "snaps-connect__content__snaps-list",
                              flexDirection: u.FlexDirection.Column,
                              display: u.Display.Flex,
                              marginTop: 4,
                              width: u.BlockSize.Full,
                              style: { overflowY: "auto", flex: 1 }
                            },
                            N.map((t) => n.default.createElement(p.default, { key: `snaps-connect-${t}`, snapId: t, origin: e }))
                          )
                        );
                      if (1 === (null == N ? void 0 : N.length)) {
                        const t = N[0],
                          a = (0, f.getSnapName)(t, D);
                        return n.default.createElement(
                          s.default,
                          {
                            className: "snaps-connect__content",
                            flexDirection: u.FlexDirection.Column,
                            justifyContent: u.JustifyContent.center,
                            alignItems: u.AlignItems.center,
                            height: u.BlockSize.Full,
                            paddingLeft: 4,
                            paddingRight: 4
                          },
                          n.default.createElement(
                            s.default,
                            { paddingBottom: 2 },
                            n.default.createElement(b.default, {
                              snapId: N[0],
                              badgeSize: c.IconSize.Md,
                              avatarSize: c.IconSize.Xl,
                              borderWidth: 3
                            })
                          ),
                          n.default.createElement(c.Text, { paddingBottom: 2, variant: u.TextVariant.headingLg }, _("connectionRequest")),
                          n.default.createElement(
                            c.Text,
                            {
                              variant: u.TextVariant.bodyMd,
                              textAlign: u.TextAlign.Center,
                              padding: [0, 4],
                              overflowWrap: u.OverflowWrap.Anywhere
                            },
                            _("snapConnectionWarning", [
                              n.default.createElement(
                                c.Text,
                                { as: c.ValidTag.Span, key: "1", variant: u.TextVariant.bodyMd, fontWeight: u.FontWeight.Medium },
                                e
                              ),
                              n.default.createElement(
                                c.Text,
                                { as: c.ValidTag.Span, key: "2", variant: u.TextVariant.bodyMd, fontWeight: u.FontWeight.Medium },
                                a
                              )
                            ])
                          )
                        );
                      }
                      return null;
                    };
                  return n.default.createElement(
                    s.default,
                    { className: "page-container snaps-connect", flexDirection: u.FlexDirection.Column, alignItems: u.AlignItems.center },
                    M &&
                      n.default.createElement(g.default, {
                        onAccepted: () => {
                          O(!1), y(!0);
                        },
                        onCanceled: P
                      }),
                    n.default.createElement(
                      s.default,
                      {
                        className: "snaps-connect__header",
                        flexDirection: u.FlexDirection.Column,
                        alignItems: u.AlignItems.center,
                        paddingLeft: 4,
                        paddingRight: 4
                      },
                      n.default.createElement(l.default, { chip: !0, siteOrigin: E, title: E, iconSrc: S, iconName: C })
                    ),
                    n.default.createElement(F, null),
                    n.default.createElement(d.PageContainerFooter, {
                      footerClassName: "snaps-connect__footer",
                      cancelButtonType: "default",
                      hideCancel: !1,
                      disabled: k,
                      onCancel: P,
                      cancelText: _("cancel"),
                      onSubmit: R,
                      submitText: _("connect")
                    })
                  );
                }
                _.propTypes = {
                  request: o.default.object.isRequired,
                  approveConnection: o.default.func.isRequired,
                  rejectConnection: o.default.func.isRequired,
                  targetSubjectMetadata: o.default.shape({
                    extensionId: o.default.string,
                    iconUrl: o.default.string,
                    name: o.default.string,
                    origin: o.default.string,
                    subjectType: o.default.string
                  }),
                  snapsInstallPrivacyWarningShown: o.default.bool.isRequired,
                  setSnapsInstallPrivacyWarningShownStatus: o.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snaps-connect/snaps-connect.js" }
    ],
    [
      5001,
      { "../../../helpers/utils/permission": 4806 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.getSnapInstallWarnings = function (e, t, a) {
                    return Object.entries(e).reduce((e, [r, o]) => {
                      const i = (0, n.getPermissionDescription)({ t: a, permissionName: r, permissionValue: o, targetSubjectMetadata: t });
                      return e.concat(i.filter((e) => 1 === e.weight));
                    }, []);
                  });
                var n = e("../../../helpers/utils/permission");
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/util.js" }
    ],
    [
      5002,
      { "./remove-snap-account-content": 5003 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "RemoveSnapAccountContent", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./remove-snap-account-content")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/components/index.ts" }
    ],
    [
      5003,
      {
        "../../../components/app/snaps/snap-avatar": 4293,
        "../../../components/component-library": 4453,
        "../../../components/ui/card": 4615,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "./view-account-on-block-explorer": 5004,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = u(e("react")),
                  r = e("../../../components/component-library"),
                  o = e("../../../helpers/constants/design-system"),
                  i = u(e("../../../components/app/snaps/snap-avatar")),
                  s = e("../../../hooks/useI18nContext"),
                  l = u(e("../../../components/ui/card")),
                  c = u(e("./view-account-on-block-explorer"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                a.default = ({ snapName: e, snapId: t, publicAddress: a }) => {
                  const u = (0, s.useI18nContext)();
                  return n.default.createElement(
                    r.Box,
                    { display: o.Display.Flex, flexDirection: o.FlexDirection.Row, justifyContent: o.JustifyContent.spaceBetween },
                    n.default.createElement(
                      r.Box,
                      {
                        paddingLeft: 4,
                        paddingRight: 4,
                        display: o.Display.Flex,
                        flexDirection: o.FlexDirection.Column,
                        alignItems: o.AlignItems.center
                      },
                      n.default.createElement(
                        r.Box,
                        { paddingBottom: 2 },
                        n.default.createElement(i.default, {
                          snapId: t,
                          badgeSize: r.IconSize.Md,
                          avatarSize: r.IconSize.Xl,
                          borderWidth: 3
                        })
                      ),
                      n.default.createElement(
                        r.Text,
                        { textAlign: o.TextAlign.Center, variant: o.TextVariant.headingLg },
                        u("removeSnapAccountTitle")
                      ),
                      n.default.createElement(
                        r.Text,
                        { variant: o.TextVariant.bodyMd, textAlign: o.TextAlign.Center, overflowWrap: o.OverflowWrap.Anywhere },
                        u("removeSnapAccountDescription", [e])
                      ),
                      n.default.createElement(
                        r.Box,
                        { paddingTop: 4, paddingBottom: 4 },
                        n.default.createElement(r.BannerAlert, {
                          severity: r.BannerAlertSeverity.Warning,
                          description: u("removeSnapAccountBannerDescription")
                        })
                      ),
                      n.default.createElement(
                        l.default,
                        { display: o.Display.Flex, gap: 4 },
                        n.default.createElement(
                          r.Box,
                          { display: o.Display.Flex, flexDirection: o.FlexDirection.Column, justifyContent: o.JustifyContent.spaceBetween },
                          n.default.createElement(
                            r.Text,
                            { color: o.TextColor.textMuted, variant: o.TextVariant.bodySm },
                            u("publicAddress")
                          ),
                          n.default.createElement(r.Text, { variant: o.TextVariant.bodyXs }, a)
                        ),
                        n.default.createElement(
                          r.Box,
                          { display: o.Display.Flex, marginLeft: "auto", alignItems: o.AlignItems.center },
                          n.default.createElement(c.default, { publicAddress: a })
                        )
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/components/remove-snap-account-content.tsx" }
    ],
    [
      5004,
      {
        "../../../components/component-library": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../../../selectors": 5197,
        "@metamask/etherscan-link": 1255,
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
                  r = (n = e("react")) && n.__esModule ? n : { default: n },
                  o = e("@metamask/etherscan-link"),
                  i = e("react-redux"),
                  s = e("../../../components/component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../selectors");
                const u = ({ publicAddress: e }) => {
                  const t = (0, i.useSelector)(c.getCurrentChainId),
                    a = (0, i.useSelector)(c.getRpcPrefsForCurrentProvider, i.shallowEqual),
                    n = (0, o.getAccountLink)(e, t, a);
                  return r.default.createElement(s.Icon, {
                    onClick: () => {
                      global.platform.openTab({ url: n });
                    },
                    name: s.IconName.Share,
                    color: l.IconColor.primaryDefault,
                    size: s.IconSize.Sm
                  });
                };
                a.default = r.default.memo(u);
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/components/view-account-on-block-explorer.tsx" }
    ],
    [
      5005,
      { "./remove-snap-account": 5006 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "RemoveSnapAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./remove-snap-account")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/index.ts" }
    ],
    [
      5006,
      {
        "../../../shared/modules/hexstring-utils": 3993,
        "../../components/component-library": 4453,
        "../../helpers/constants/design-system": 4771,
        "./components": 5002,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n },
                  o = e("../../components/component-library"),
                  i = e("../../helpers/constants/design-system"),
                  s = e("../../../shared/modules/hexstring-utils"),
                  l = e("./components");
                a.default = ({ snapId: e, snapName: t, publicAddress: a }) =>
                  r.default.createElement(
                    o.Box,
                    {
                      className: "remove-snap-account-page",
                      height: i.BlockSize.Full,
                      width: i.BlockSize.Full,
                      backgroundColor: i.BackgroundColor.backgroundDefault,
                      borderStyle: i.BorderStyle.none,
                      flexDirection: i.FlexDirection.Column,
                      alignItems: i.AlignItems.center,
                      paddingBottom: 2,
                      paddingTop: 2
                    },
                    r.default.createElement(
                      o.Box,
                      {
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        alignItems: i.AlignItems.center,
                        height: i.BlockSize.Full
                      },
                      r.default.createElement(l.RemoveSnapAccountContent, {
                        snapName: t,
                        snapId: e,
                        publicAddress: (0, s.toChecksumHexAddress)(a)
                      })
                    )
                  );
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/remove-snap-account.tsx" }
    ],
    [
      5007,
      { "./routes.container": 5009 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./routes.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/routes/index.js" }
    ],
    [
      5008,
      {
        "../../../app/scripts/lib/util": 82,
        "../../../shared/constants/app": 3953,
        "../../../shared/constants/network": 3963,
        "../../../shared/constants/preferences": 3965,
        "../../components/app/alerts": 4033,
        "../../components/app/loading-network-screen": 4150,
        "../../components/app/modals": 4185,
        "../../components/app/modals/keyring-snap-removal-modal": 4186,
        "../../components/app/nft-default-image/toggle-ipfs-modal": 4215,
        "../../components/app/qr-hardware-popover": 4240,
        "../../components/component-library": 4453,
        "../../components/multichain": 4555,
        "../../components/multichain/pages": 4569,
        "../../components/multichain/pages/send": 4588,
        "../../components/ui/alert": 4605,
        "../../components/ui/deprecated-test-networks/deprecated-test-networks": 4630,
        "../../components/ui/loading-screen": 4673,
        "../../components/ui/new-network-info/new-network-info": 4687,
        "../../ducks/send": 4765,
        "../../helpers/constants/routes": 4776,
        "../../helpers/higher-order-components/authenticated": 4784,
        "../../helpers/higher-order-components/initialized": 4786,
        "../asset": 4874,
        "../confirm-add-suggested-nft": 4876,
        "../confirm-add-suggested-token": 4878,
        "../confirm-transaction": 4910,
        "../confirmation": 4916,
        "../create-account/create-account.component": 4938,
        "../home": 4947,
        "../keychains/restore-vault": 4949,
        "../keychains/reveal-seed": 4950,
        "../keyring-snaps/add-snap-account": 4953,
        "../lock": 4963,
        "../notifications": 4966,
        "../onboarding-flow/onboarding-app-header/onboarding-app-header": 4973,
        "../onboarding-flow/onboarding-flow": 4975,
        "../permissions-connect": 4988,
        "../send": 5012,
        "../settings": 5069,
        "../snaps/snap-view": 5107,
        "../snaps/snaps-list": 5111,
        "../swaps": 5137,
        "../token-details": 5187,
        "../unlock-page": 5189,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690,
        "react-idle-timer": 3547,
        "react-router-dom": 3675
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = Q(e("classnames")),
                  r = Q(e("prop-types")),
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = q(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  i = e("react-router-dom"),
                  s = Q(e("react-idle-timer")),
                  l = Q(e("../send")),
                  c = Q(e("../swaps")),
                  u = Q(e("../confirm-transaction")),
                  d = Q(e("../home")),
                  p = (e("../../components/multichain/pages"), Q(e("../settings"))),
                  f = Q(e("../../helpers/higher-order-components/authenticated")),
                  m = Q(e("../../helpers/higher-order-components/initialized")),
                  g = Q(e("../lock")),
                  h = Q(e("../permissions-connect")),
                  b = Q(e("../keychains/restore-vault")),
                  v = Q(e("../keychains/reveal-seed")),
                  T = Q(e("../confirm-add-suggested-token")),
                  y = Q(e("../create-account/create-account.component")),
                  _ = Q(e("../confirm-add-suggested-nft")),
                  E = Q(e("../../components/ui/loading-screen")),
                  S = Q(e("../../components/app/loading-network-screen")),
                  C = e("../../components/app/modals"),
                  k = Q(e("../../components/ui/alert")),
                  A = e("../../components/multichain"),
                  M = Q(e("../unlock-page")),
                  O = Q(e("../../components/app/alerts")),
                  w = Q(e("../asset")),
                  P = Q(e("../onboarding-flow/onboarding-app-header/onboarding-app-header")),
                  R = Q(e("../token-details")),
                  N = Q(e("../notifications")),
                  D = Q(e("../snaps/snaps-list")),
                  F = Q(e("../snaps/snap-view")),
                  L = Q(e("../keyring-snaps/add-snap-account")),
                  x = e("../../helpers/constants/routes"),
                  B = e("../../../shared/constants/app"),
                  I = e("../../../shared/constants/network"),
                  J = e("../../../app/scripts/lib/util"),
                  j = Q(e("../confirmation")),
                  U = Q(e("../onboarding-flow/onboarding-flow")),
                  X = Q(e("../../components/app/qr-hardware-popover")),
                  H = e("../../ducks/send"),
                  G = Q(e("../../components/ui/deprecated-test-networks/deprecated-test-networks")),
                  V = Q(e("../../components/ui/new-network-info/new-network-info")),
                  z = e("../../../shared/constants/preferences"),
                  W = e("../../components/component-library"),
                  Z = e("../../components/app/nft-default-image/toggle-ipfs-modal"),
                  K = Q(e("../../components/app/modals/keyring-snap-removal-modal"));
                e("../../components/multichain/pages/send");
                function q(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (q = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function Q(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function Y(e, t, a) {
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
                class $ extends o.Component {
                  constructor(...e) {
                    super(...e),
                      Y(this, "onAppHeaderClick", async () => {
                        const { prepareToLeaveSwaps: e } = this.props;
                        this.onSwapsPage() && (await e());
                      });
                  }
                  handleOsTheme() {
                    var e;
                    const t =
                      null !== (e = window) &&
                      void 0 !== e &&
                      null !== (e = e.matchMedia("(prefers-color-scheme: dark)")) &&
                      void 0 !== e &&
                      e.matches
                        ? z.ThemeType.dark
                        : z.ThemeType.light;
                    document.documentElement.setAttribute("data-theme", t);
                  }
                  componentDidUpdate(e) {
                    const { theme: t } = this.props;
                    t !== e.theme && (t === z.ThemeType.os ? this.handleOsTheme() : document.documentElement.setAttribute("data-theme", t));
                  }
                  UNSAFE_componentWillMount() {
                    const { currentCurrency: e, pageChanged: t, setCurrentCurrencyToUSD: a, history: n, theme: r } = this.props;
                    e || a(),
                      n.listen((e, a) => {
                        "PUSH" === a && t(e.pathname);
                      }),
                      r === z.ThemeType.os ? this.handleOsTheme() : document.documentElement.setAttribute("data-theme", r);
                  }
                  renderRoutes() {
                    const { autoLockTimeLimit: e, setLastActiveTime: t, forgottenPassword: a } = this.props,
                      n = a ? i.Route : m.default,
                      r = o.default.createElement(
                        i.Switch,
                        null,
                        o.default.createElement(i.Route, { path: x.ONBOARDING_ROUTE, component: U.default }),
                        o.default.createElement(i.Route, { path: x.LOCK_ROUTE, component: g.default, exact: !0 }),
                        o.default.createElement(m.default, { path: x.UNLOCK_ROUTE, component: M.default, exact: !0 }),
                        o.default.createElement(n, { path: x.RESTORE_VAULT_ROUTE, component: b.default, exact: !0 }),
                        o.default.createElement(f.default, { path: x.REVEAL_SEED_ROUTE, component: v.default, exact: !0 }),
                        o.default.createElement(f.default, { path: x.SETTINGS_ROUTE, component: p.default }),
                        o.default.createElement(f.default, { path: x.NOTIFICATIONS_ROUTE, component: N.default }),
                        o.default.createElement(f.default, { exact: !0, path: x.SNAPS_ROUTE, component: D.default }),
                        o.default.createElement(f.default, { path: x.SNAPS_VIEW_ROUTE, component: F.default }),
                        o.default.createElement(f.default, { path: `${x.CONFIRM_TRANSACTION_ROUTE}/:id?`, component: u.default }),
                        o.default.createElement(f.default, { path: x.SEND_ROUTE, component: l.default, exact: !0 }),
                        o.default.createElement(f.default, { path: `${x.TOKEN_DETAILS}/:address/`, component: R.default, exact: !0 }),
                        o.default.createElement(f.default, { path: x.SWAPS_ROUTE, component: c.default }),
                        o.default.createElement(f.default, { path: x.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE, component: T.default, exact: !0 }),
                        o.default.createElement(f.default, { path: x.CONFIRM_ADD_SUGGESTED_NFT_ROUTE, component: _.default, exact: !0 }),
                        o.default.createElement(f.default, { path: x.CONFIRMATION_V_NEXT_ROUTE, component: j.default }),
                        o.default.createElement(f.default, { path: x.NEW_ACCOUNT_ROUTE, component: y.default }),
                        o.default.createElement(f.default, { path: x.ADD_SNAP_ACCOUNT_ROUTE, component: L.default }),
                        o.default.createElement(f.default, { path: `${x.CONNECT_ROUTE}/:id`, component: h.default }),
                        o.default.createElement(f.default, { path: `${x.ASSET_ROUTE}/:asset/:id`, component: w.default }),
                        o.default.createElement(f.default, { path: `${x.ASSET_ROUTE}/:asset/`, component: w.default }),
                        "",
                        "",
                        o.default.createElement(f.default, { path: x.DEFAULT_ROUTE, component: d.default })
                      );
                    return e > 0 ? o.default.createElement(s.default, { onAction: t, throttle: 1e3 }, r) : r;
                  }
                  onInitializationUnlockPage() {
                    const { location: e } = this.props;
                    return Boolean((0, i.matchPath)(e.pathname, { path: x.ONBOARDING_UNLOCK_ROUTE, exact: !0 }));
                  }
                  onConfirmPage() {
                    const { location: e } = this.props;
                    return Boolean((0, i.matchPath)(e.pathname, { path: x.CONFIRM_TRANSACTION_ROUTE, exact: !1 }));
                  }
                  onEditTransactionPage() {
                    return (
                      this.props.sendStage === H.SEND_STAGES.EDIT ||
                      this.props.sendStage === H.SEND_STAGES.DRAFT ||
                      this.props.sendStage === H.SEND_STAGES.ADD_RECIPIENT
                    );
                  }
                  onSwapsPage() {
                    const { location: e } = this.props;
                    return Boolean((0, i.matchPath)(e.pathname, { path: x.SWAPS_ROUTE, exact: !1 }));
                  }
                  onSwapsBuildQuotePage() {
                    const { location: e } = this.props;
                    return Boolean((0, i.matchPath)(e.pathname, { path: x.BUILD_QUOTE_ROUTE, exact: !1 }));
                  }
                  hideAppHeader() {
                    const { location: e } = this.props;
                    if (
                      Boolean((0, i.matchPath)(e.pathname, { path: x.ONBOARDING_ROUTE, exact: !1 })) &&
                      !this.onInitializationUnlockPage()
                    )
                      return !0;
                    const t = (0, J.getEnvironmentType)();
                    if (t === B.ENVIRONMENT_TYPE_NOTIFICATION) return !0;
                    if (Boolean((0, i.matchPath)(e.pathname, { path: x.ALL_CONNECTIONS, exact: !1 }))) return !0;
                    if (t === B.ENVIRONMENT_TYPE_POPUP && this.onConfirmPage()) return !0;
                    const a = Boolean((0, i.matchPath)(e.pathname, { path: x.CONNECT_ROUTE, exact: !1 }));
                    Boolean((0, i.matchPath)(e.pathname, { path: x.SEND_ROUTE, exact: !1 }));
                    const n = Boolean((0, i.matchPath)(e.pathname, { path: x.CONFIRMATION_V_NEXT_ROUTE, exact: !1 }));
                    return a || n;
                  }
                  showFooter() {
                    if (!1 === Boolean("")) return !1;
                    const { location: e } = this.props,
                      t = Boolean((0, i.matchPath)(e.pathname, { path: x.DEFAULT_ROUTE, exact: !0 })),
                      a = Boolean((0, i.matchPath)(e.pathname, { path: x.CONNECTIONS, exact: !0 }));
                    return Boolean((0, i.matchPath)(e.pathname, { path: x.ASSET_ROUTE, exact: !1 })) || t || a;
                  }
                  showOnboardingHeader() {
                    const { location: e } = this.props;
                    return Boolean((0, i.matchPath)(e.pathname, { path: x.ONBOARDING_ROUTE, exact: !1 }));
                  }
                  render() {
                    const {
                        isLoading: e,
                        isUnlocked: t,
                        alertMessage: a,
                        textDirection: r,
                        loadingMessage: i,
                        isNetworkLoading: s,
                        browserEnvironmentOs: l,
                        browserEnvironmentBrowser: c,
                        isNetworkUsed: u,
                        allAccountsOnNetworkAreEmpty: d,
                        isTestNet: p,
                        currentChainId: f,
                        shouldShowSeedPhraseReminder: m,
                        isCurrentProviderCustom: g,
                        completedOnboarding: h,
                        isAccountMenuOpen: b,
                        toggleAccountMenu: v,
                        isNetworkMenuOpen: T,
                        toggleNetworkMenu: y,
                        accountDetailsAddress: _,
                        isImportTokensModalOpen: M,
                        isSelectActionModalOpen: w,
                        location: R,
                        isImportNftsModalOpen: N,
                        hideImportNftsModal: D,
                        isIpfsModalOpen: F,
                        hideIpfsModal: L,
                        hideImportTokensModal: x,
                        hideSelectActionModal: I,
                        isShowKeyringSnapRemovalResultModal: j,
                        hideShowKeyringSnapRemovalResultModal: U,
                        pendingConfirmations: H
                      } = this.props,
                      z = i || s ? this.getConnectingLabel(i) : null,
                      q = t && f && !p && !u && !g && h && d,
                      Q = (0, J.getEnvironmentType)() !== B.ENVIRONMENT_TYPE_NOTIFICATION && t && !m;
                    let Y = e;
                    return (
                      (Y = e && !H.some((e) => e.type === B.SNAP_MANAGE_ACCOUNTS_CONFIRMATION_TYPES.showSnapAccountRedirect)),
                      o.default.createElement(
                        "div",
                        { className: (0, n.default)("app", { [`os-${l}`]: l, [`browser-${c}`]: c }), dir: r },
                        Q && o.default.createElement(G.default, null),
                        q && o.default.createElement(V.default, null),
                        o.default.createElement(X.default, null),
                        o.default.createElement(C.Modal, null),
                        o.default.createElement(k.default, { visible: this.props.alertOpen, msg: a }),
                        !this.hideAppHeader() && o.default.createElement(A.AppHeader, { location: R }),
                        this.showOnboardingHeader() && o.default.createElement(P.default, null),
                        b ? o.default.createElement(A.AccountListMenu, { onClose: () => v() }) : null,
                        T ? o.default.createElement(A.NetworkListMenu, { onClose: () => y() }) : null,
                        _ ? o.default.createElement(A.AccountDetails, { address: _ }) : null,
                        N ? o.default.createElement(A.ImportNftsModal, { onClose: () => D() }) : null,
                        F ? o.default.createElement(Z.ToggleIpfsModal, { onClose: () => L() }) : null,
                        M ? o.default.createElement(A.ImportTokensModal, { onClose: () => x() }) : null,
                        w ? o.default.createElement(A.SelectActionModal, { onClose: () => I() }) : null,
                        j && o.default.createElement(K.default, { isOpen: j, onClose: () => U() }),
                        o.default.createElement(
                          W.Box,
                          { className: "main-container-wrapper" },
                          Y ? o.default.createElement(E.default, { loadingMessage: z }) : null,
                          !e && s ? o.default.createElement(S.default, null) : null,
                          this.renderRoutes()
                        ),
                        this.showFooter() && o.default.createElement(A.AppFooter, { location: R }),
                        t ? o.default.createElement(O.default, { history: this.props.history }) : null
                      )
                    );
                  }
                  toggleMetamaskActive() {
                    if (this.props.isUnlocked) this.props.lockMetaMask();
                    else {
                      const e = document.querySelector("input[type=password]");
                      if (!e) return;
                      e.focus();
                    }
                  }
                  getConnectingLabel(e) {
                    if (e) return e;
                    const { providerType: t, providerId: a } = this.props,
                      { t: n } = this.context;
                    switch (t) {
                      case I.NETWORK_TYPES.MAINNET:
                        return n("connectingToMainnet");
                      case I.NETWORK_TYPES.GOERLI:
                        return n("connectingToGoerli");
                      case I.NETWORK_TYPES.SEPOLIA:
                        return n("connectingToSepolia");
                      case I.NETWORK_TYPES.LINEA_GOERLI:
                        return n("connectingToLineaGoerli");
                      case I.NETWORK_TYPES.LINEA_MAINNET:
                        return n("connectingToLineaMainnet");
                      default:
                        return n("connectingTo", [a]);
                    }
                  }
                }
                (a.default = $),
                  Y($, "propTypes", {
                    currentCurrency: r.default.string,
                    setCurrentCurrencyToUSD: r.default.func,
                    isLoading: r.default.bool,
                    loadingMessage: r.default.string,
                    alertMessage: r.default.string,
                    textDirection: r.default.string,
                    isNetworkLoading: r.default.bool,
                    alertOpen: r.default.bool,
                    isUnlocked: r.default.bool,
                    setLastActiveTime: r.default.func,
                    history: r.default.object,
                    location: r.default.object,
                    lockMetaMask: r.default.func,
                    providerId: r.default.string,
                    providerType: r.default.string,
                    autoLockTimeLimit: r.default.number,
                    pageChanged: r.default.func.isRequired,
                    prepareToLeaveSwaps: r.default.func,
                    browserEnvironmentOs: r.default.string,
                    browserEnvironmentBrowser: r.default.string,
                    theme: r.default.string,
                    sendStage: r.default.string,
                    isNetworkUsed: r.default.bool,
                    allAccountsOnNetworkAreEmpty: r.default.bool,
                    isTestNet: r.default.bool,
                    currentChainId: r.default.string,
                    shouldShowSeedPhraseReminder: r.default.bool,
                    forgottenPassword: r.default.bool,
                    isCurrentProviderCustom: r.default.bool,
                    completedOnboarding: r.default.bool,
                    isAccountMenuOpen: r.default.bool,
                    toggleAccountMenu: r.default.func,
                    isNetworkMenuOpen: r.default.bool,
                    toggleNetworkMenu: r.default.func,
                    accountDetailsAddress: r.default.string,
                    isImportNftsModalOpen: r.default.bool.isRequired,
                    hideImportNftsModal: r.default.func.isRequired,
                    isIpfsModalOpen: r.default.bool.isRequired,
                    hideIpfsModal: r.default.func.isRequired,
                    isImportTokensModalOpen: r.default.bool.isRequired,
                    hideImportTokensModal: r.default.func.isRequired,
                    isSelectActionModalOpen: r.default.bool.isRequired,
                    hideSelectActionModal: r.default.func.isRequired,
                    isShowKeyringSnapRemovalResultModal: r.default.bool.isRequired,
                    hideShowKeyringSnapRemovalResultModal: r.default.func.isRequired,
                    pendingConfirmations: r.default.array.isRequired
                  }),
                  Y($, "contextTypes", { t: r.default.func, metricsEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/routes/routes.component.js" }
    ],
    [
      5009,
      {
        "../../../shared/constants/preferences": 3965,
        "../../components/multichain/app-footer/app-footer-actions": 4520,
        "../../ducks/history/history": 4760,
        "../../ducks/metamask/metamask": 4763,
        "../../ducks/send": 4765,
        "../../ducks/swaps/swaps": 4767,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        "./routes.component": 5008,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("redux"),
                  s = e("../../selectors"),
                  l = e("../../store/actions"),
                  c = e("../../components/multichain/app-footer/app-footer-actions"),
                  u = e("../../ducks/history/history"),
                  d = e("../../ducks/swaps/swaps"),
                  p = e("../../ducks/send"),
                  f = e("../../ducks/metamask/metamask"),
                  m = e("../../../shared/constants/preferences"),
                  g = (n = e("./routes.component")) && n.__esModule ? n : { default: n };
                a.default = (0, i.compose)(
                  o.withRouter,
                  (0, r.connect)(
                    function (e) {
                      var t, a;
                      const { appState: n } = e,
                        { alertOpen: r, alertMessage: o, isLoading: i, loadingMessage: l } = n,
                        { autoLockTimeLimit: c = m.DEFAULT_AUTO_LOCK_TIME_LIMIT } = (0, s.getPreferences)(e),
                        { completedOnboarding: u } = e.metamask;
                      return {
                        alertOpen: r,
                        alertMessage: o,
                        textDirection: e.metamask.textDirection,
                        isLoading: i,
                        loadingMessage: l,
                        isUnlocked: (0, f.getIsUnlocked)(e),
                        isNetworkLoading: (0, s.isNetworkLoading)(e),
                        currentCurrency: e.metamask.currentCurrency,
                        autoLockTimeLimit: c,
                        browserEnvironmentOs: null === (t = e.metamask.browserEnvironment) || void 0 === t ? void 0 : t.os,
                        browserEnvironmentContainter: null === (a = e.metamask.browserEnvironment) || void 0 === a ? void 0 : a.browser,
                        providerId: (0, s.getNetworkIdentifier)(e),
                        providerType: (0, f.getProviderConfig)(e).type,
                        theme: (0, s.getTheme)(e),
                        sendStage: (0, p.getSendStage)(e),
                        isNetworkUsed: (0, s.getIsNetworkUsed)(e),
                        allAccountsOnNetworkAreEmpty: (0, s.getAllAccountsOnNetworkAreEmpty)(e),
                        isTestNet: (0, s.getIsTestnet)(e),
                        currentChainId: (0, s.getCurrentChainId)(e),
                        shouldShowSeedPhraseReminder: (0, s.getShouldShowSeedPhraseReminder)(e),
                        forgottenPassword: e.metamask.forgottenPassword,
                        isCurrentProviderCustom: (0, s.isCurrentProviderCustom)(e),
                        completedOnboarding: u,
                        isAccountMenuOpen: e.metamask.isAccountMenuOpen,
                        isNetworkMenuOpen: e.metamask.isNetworkMenuOpen,
                        isImportTokensModalOpen: e.appState.importTokensModalOpen,
                        accountDetailsAddress: e.appState.accountDetailsAddress,
                        isImportNftsModalOpen: e.appState.importNftsModal.open,
                        isIpfsModalOpen: e.appState.showIpfsModalOpen,
                        isSelectActionModalOpen: e.appState.showSelectActionModal,
                        isShowKeyringSnapRemovalResultModal: e.appState.showKeyringRemovalSnapModal,
                        pendingConfirmations: (0, s.getUnapprovedConfirmations)(e)
                      };
                    },
                    function (e) {
                      return {
                        lockMetaMask: () => e((0, l.lockMetamask)(!1)),
                        setCurrentCurrencyToUSD: () => e((0, l.setCurrentCurrency)("usd")),
                        setLastActiveTime: () => e((0, l.setLastActiveTime)()),
                        pageChanged: (t) => e((0, u.pageChanged)(t)),
                        prepareToLeaveSwaps: () => e((0, d.prepareToLeaveSwaps)()),
                        toggleAccountMenu: () => e((0, l.toggleAccountMenu)()),
                        toggleNetworkMenu: () => e((0, l.toggleNetworkMenu)()),
                        hideImportNftsModal: () => e((0, l.hideImportNftsModal)()),
                        hideIpfsModal: () => e((0, l.hideIpfsModal)()),
                        hideImportTokensModal: () => e((0, l.hideImportTokensModal)()),
                        hideSelectActionModal: () => e((0, c.hideSelectActionModal)()),
                        hideShowKeyringSnapRemovalResultModal: () => e((0, l.hideKeyringRemovalResultModal)())
                      };
                    }
                  )
                )(g.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/routes/routes.container.js" }
    ],
    [
      5010,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/network": 3963,
        "../../../../shared/constants/transaction": 3974,
        "../../../../shared/modules/conversion.utils": 3988,
        "../../../components/app/confirm-gas-display": 4052,
        "../../../components/app/transaction-detail": 4365,
        "../../../components/app/transaction-detail-item": 4363,
        "../../../components/app/user-preferenced-currency-display": 4378,
        "../../../components/ui/actionable-message": 4604,
        "../../../components/ui/box": 4607,
        "../../../components/ui/button": 4611,
        "../../../components/ui/loading-heartbeat": 4670,
        "../../../components/ui/typography": 4740,
        "../../../contexts/gasFee": 4747,
        "../../../contexts/i18n": 4748,
        "../../../contexts/metametrics": 4749,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/send": 4765,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/experiences/useRamps": 4815,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "../send.constants": 5046,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = N);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = R(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = P(e("prop-types")),
                  i = e("../../../contexts/i18n"),
                  s = e("../../../contexts/gasFee"),
                  l = e("../../../helpers/constants/common"),
                  c = P(e("../../../components/app/user-preferenced-currency-display")),
                  u = P(e("../../../components/ui/typography")),
                  d = P(e("../../../components/ui/button")),
                  p = P(e("../../../components/ui/box")),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../../../shared/constants/transaction"),
                  g = P(e("../../../components/ui/loading-heartbeat")),
                  h = P(e("../../../components/app/transaction-detail-item")),
                  b = e("../../../components/app/confirm-gas-display"),
                  v = e("../../../../shared/constants/network"),
                  T = P(e("../../../components/app/transaction-detail")),
                  y = P(e("../../../components/ui/actionable-message")),
                  _ = e("../../../selectors"),
                  E = e("../send.constants"),
                  S = e("../../../ducks/send"),
                  C = e("../../../ducks/metamask/metamask"),
                  k = e("../../../store/actions"),
                  A = e("../../../../shared/modules/conversion.utils"),
                  M = e("../../../../shared/constants/metametrics"),
                  O = e("../../../contexts/metametrics"),
                  w = P(e("../../../hooks/experiences/useRamps"));
                function P(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function R(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (R = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function N({ gasError: e }) {
                  var t, a, o, P, R, N, D, F, L, x, B, I, J, j;
                  const U = (0, n.useContext)(i.I18nContext),
                    X = (0, r.useDispatch)(),
                    { estimateUsed: H } = (0, s.useGasFeeContext)(),
                    G = (0, n.useContext)(O.MetaMetricsContext),
                    { openBuyCryptoInPdapp: V } = (0, w.default)(),
                    z = (0, r.useSelector)(C.getProviderConfig),
                    W = (0, r.useSelector)(_.getIsTestnet),
                    Z = (0, r.useSelector)(_.getIsBuyableChain),
                    K = (0, r.useSelector)(S.getCurrentDraftTransaction),
                    q = (0, r.useSelector)(_.getUseCurrencyRateCheck),
                    { showFiatInTestnets: Q, useNativeCurrencyAsPrimaryCurrency: Y } = (0, r.useSelector)(_.getPreferences),
                    $ = (0, r.useSelector)(_.getUnapprovedTransactions),
                    ee = (0, r.useSelector)(C.getNativeCurrency),
                    { chainId: te } = z,
                    ae = v.NETWORK_TO_NAME_MAP[te],
                    ne = (null == K || null === (t = K.amount) || void 0 === t ? void 0 : t.error) === E.INSUFFICIENT_TOKENS_ERROR,
                    re = $[K.id],
                    oe = ae || z.nickname,
                    ie = {
                      txParams: {
                        gasPrice: null === (a = K.gas) || void 0 === a ? void 0 : a.gasPrice,
                        gas:
                          null != re && re.userEditedGasLimit
                            ? null == re || null === (o = re.txParams) || void 0 === o
                              ? void 0
                              : o.gas
                            : null === (P = K.gas) || void 0 === P
                            ? void 0
                            : P.gasLimit,
                        maxFeePerGas:
                          null != re && null !== (R = re.txParams) && void 0 !== R && R.maxFeePerGas
                            ? null == re || null === (N = re.txParams) || void 0 === N
                              ? void 0
                              : N.maxFeePerGas
                            : null === (D = K.gas) || void 0 === D
                            ? void 0
                            : D.maxFeePerGas,
                        maxPriorityFeePerGas:
                          null != re && null !== (F = re.txParams) && void 0 !== F && F.maxPriorityFeePerGas
                            ? null == re || null === (L = re.txParams) || void 0 === L
                              ? void 0
                              : L.maxPriorityFeePerGas
                            : null === (x = K.gas) || void 0 === x
                            ? void 0
                            : x.maxPriorityFeePerGas,
                        value: null === (B = K.amount) || void 0 === B ? void 0 : B.value,
                        type: K.transactionType
                      },
                      userFeeLevel: null == re ? void 0 : re.userFeeLevel
                    },
                    { hexMaximumTransactionFee: se, hexTransactionTotal: le } = (0, r.useSelector)((e) =>
                      (0, _.transactionFeeSelector)(e, ie)
                    );
                  let ce;
                  var ue;
                  if (
                    (null == K || null === (I = K.asset.details) || void 0 === I ? void 0 : I.standard) === m.TokenStandard.ERC721 ||
                    (null == K || null === (J = K.asset.details) || void 0 === J ? void 0 : J.standard) === m.TokenStandard.ERC1155
                  )
                    ce = null == K || null === (ue = K.asset.details) || void 0 === ue ? void 0 : ue.name;
                  else if ((null == K || null === (j = K.asset.details) || void 0 === j ? void 0 : j.standard) === m.TokenStandard.ERC20) {
                    var de;
                    ce = `${(0, A.hexWEIToDecETH)(K.amount.value)} ${
                      null == K || null === (de = K.asset.details) || void 0 === de ? void 0 : de.symbol
                    }`;
                  }
                  const pe = `${ce} + ${Number((0, A.hexWEIToDecETH)(se))} ${ee}`,
                    fe = q && (!W || Q);
                  let me, ge;
                  return (
                    "NATIVE" === (null == K ? void 0 : K.asset.type)
                      ? ((me = n.default.createElement(
                          p.default,
                          {
                            height: f.BLOCK_SIZES.MAX,
                            display: f.DISPLAY.FLEX,
                            flexDirection: f.FLEX_DIRECTION.COLUMN,
                            className: "gas-display__total-value"
                          },
                          n.default.createElement(g.default, { estimateUsed: null == ie ? void 0 : ie.userFeeLevel }),
                          n.default.createElement(c.default, { type: l.PRIMARY, key: "total-detail-value", value: le, hideLabel: !Y })
                        )),
                        (ge = n.default.createElement(c.default, {
                          type: l.PRIMARY,
                          key: "total-max-amount",
                          value: (0, A.addHexes)(K.amount.value, se),
                          hideLabel: !Y
                        })))
                      : Y && ((me = pe), (ge = pe)),
                    n.default.createElement(
                      n.default.Fragment,
                      null,
                      n.default.createElement(
                        p.default,
                        { className: "gas-display" },
                        n.default.createElement(T.default, {
                          userAcknowledgedGasMissing: !1,
                          rows: [
                            n.default.createElement(b.ConfirmGasDisplay, { key: "gas-display" }),
                            (e || ne) &&
                              n.default.createElement(h.default, {
                                key: "gas-display-total-item",
                                detailTitle: U("total"),
                                detailText:
                                  fe &&
                                  n.default.createElement(
                                    p.default,
                                    {
                                      height: f.BLOCK_SIZES.MAX,
                                      display: f.DISPLAY.FLEX,
                                      flexDirection: f.FLEX_DIRECTION.COLUMN,
                                      className: "gas-display__total-value"
                                    },
                                    n.default.createElement(g.default, { estimateUsed: null == ie ? void 0 : ie.userFeeLevel }),
                                    n.default.createElement(c.default, {
                                      type: l.SECONDARY,
                                      key: "total-detail-text",
                                      value: le,
                                      hideLabel: Boolean(Y)
                                    })
                                  ),
                                detailTotal: me,
                                subTitle: U("transactionDetailGasTotalSubtitle"),
                                subText: n.default.createElement(
                                  p.default,
                                  {
                                    height: f.BLOCK_SIZES.MAX,
                                    display: f.DISPLAY.FLEX,
                                    flexDirection: f.FLEX_DIRECTION.COLUMN,
                                    className: "gas-display__total-amount"
                                  },
                                  n.default.createElement(g.default, { estimateUsed: (null == ie ? void 0 : ie.userFeeLevel) ?? H }),
                                  n.default.createElement("strong", { key: "editGasSubTextAmountLabel" }, U("editGasSubTextAmountLabel")),
                                  " ",
                                  ge
                                )
                              })
                          ]
                        })
                      ),
                      (e || ne) &&
                        oe &&
                        n.default.createElement(
                          p.default,
                          { className: "gas-display__warning-message", "data-testid": "gas-warning-message" },
                          n.default.createElement(
                            p.default,
                            {
                              paddingTop: 0,
                              paddingRight: 4,
                              paddingBottom: 4,
                              paddingLeft: 4,
                              className: "gas-display__confirm-approve-content__warning"
                            },
                            n.default.createElement(y.default, {
                              message:
                                Z && "NATIVE" === K.asset.type
                                  ? n.default.createElement(
                                      u.default,
                                      { variant: f.TypographyVariant.H7, align: "left" },
                                      U("insufficientCurrencyBuyOrReceive", [
                                        ee,
                                        oe,
                                        n.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className: "confirm-page-container-content__link",
                                            onClick: () => {
                                              V(),
                                                G({
                                                  event: M.MetaMetricsEventName.NavBuyButtonClicked,
                                                  category: M.MetaMetricsEventCategory.Navigation,
                                                  properties: { location: "Gas Warning Insufficient Funds", text: "Buy" }
                                                });
                                            },
                                            key: `${ee}-buy-button`
                                          },
                                          U("buyAsset", [ee])
                                        ),
                                        n.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className: "gas-display__link",
                                            onClick: () => X((0, k.showModal)({ name: "ACCOUNT_DETAILS" })),
                                            key: "receive-button"
                                          },
                                          U("deposit")
                                        )
                                      ])
                                    )
                                  : n.default.createElement(
                                      u.default,
                                      { variant: f.TypographyVariant.H7, align: "left" },
                                      U("insufficientCurrencyBuyOrReceive", [
                                        ee,
                                        oe,
                                        `${U("buyAsset", [ee])}`,
                                        n.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className: "gas-display__link",
                                            onClick: () => X((0, k.showModal)({ name: "ACCOUNT_DETAILS" })),
                                            key: "receive-button"
                                          },
                                          U("deposit")
                                        )
                                      ])
                                    ),
                              useIcon: !0,
                              iconFillColor: "var(--color-error-default)",
                              type: "danger"
                            })
                          )
                        )
                    )
                  );
                }
                N.propTypes = { gasError: o.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/gas-display/gas-display.js" }
    ],
    [
      5011,
      { "./gas-display": 5010 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./gas-display")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/gas-display/index.js" }
    ],
    [
      5012,
      { "./send": 5047 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/index.js" }
    ],
    [
      5013,
      {
        "../../../../components/app/contact-list": 4095,
        "../../../../components/app/contact-list/recipient-group/recipient-group.component": 4096,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/box": 4607,
        "../../../../components/ui/confusable": 4624,
        "../../../../components/ui/dialog": 4631,
        "../../../../components/ui/identicon": 4664,
        "../../../../helpers/constants/design-system": 4771,
        "../../send.utils": 5048,
        "fuse.js": 2821,
        "prop-types": 3450,
        react: 3690
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
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = g(e("prop-types")),
                  o = g(e("fuse.js")),
                  i = g(e("../../../../components/ui/identicon")),
                  s = g(e("../../../../components/ui/dialog")),
                  l = g(e("../../../../components/app/contact-list")),
                  c = g(e("../../../../components/app/contact-list/recipient-group/recipient-group.component")),
                  u = e("../../send.utils"),
                  d = g(e("../../../../components/ui/confusable")),
                  p = e("../../../../components/component-library"),
                  f = g(e("../../../../components/ui/box")),
                  m = e("../../../../helpers/constants/design-system");
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (h = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function b(e, t, a) {
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
                class v extends n.Component {
                  constructor(e) {
                    super(e),
                      b(this, "selectRecipient", (e, t = "", a = "user input") => {
                        this.props.addHistoryEntry(`sendFlow - User clicked recipient from ${a}. address: ${e}, nickname ${t}`),
                          this.props.updateRecipient({ address: e, nickname: t }),
                          this.props.updateRecipientUserInput(e);
                      }),
                      b(this, "searchForContacts", () => {
                        const { userInput: e, contacts: t } = this.props;
                        let a = t;
                        return e && (this.contactFuse.setCollection(t), (a = this.contactFuse.search(e))), a;
                      }),
                      b(this, "searchForRecents", () => {
                        const { userInput: e, nonContacts: t } = this.props;
                        let a = t;
                        return e && (this.recentFuse.setCollection(t), (a = this.recentFuse.search(e))), a;
                      }),
                      (this.recentFuse = new o.default(e.nonContacts, {
                        shouldSort: !0,
                        threshold: 0.45,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: [{ name: "address", weight: 0.5 }]
                      })),
                      (this.contactFuse = new o.default(e.contacts, {
                        shouldSort: !0,
                        threshold: 0.45,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: [
                          { name: "name", weight: 0.5 },
                          { name: "address", weight: 0.5 }
                        ]
                      }));
                  }
                  render() {
                    const { domainResolution: e, recipient: t, userInput: a, addressBookEntryName: r, ownedAccounts: o = [] } = this.props;
                    let i;
                    return (
                      t.address
                        ? (i = this.renderExplicitAddress(t.address, t.nickname, "validated user input"))
                        : e && !t.error && (i = this.renderExplicitAddress(e, r || a, "Domain resolution")),
                      n.default.createElement(
                        f.default,
                        { className: "send__select-recipient-wrapper" },
                        o && o.length > 1 && !a && this.renderTransfer(),
                        this.renderDialogs(),
                        i || this.renderMain()
                      )
                    );
                  }
                  renderExplicitAddress(e, t, a) {
                    return n.default.createElement(
                      "div",
                      { key: e, className: "send__select-recipient-wrapper__group-item", onClick: () => this.selectRecipient(e, t, a) },
                      n.default.createElement(i.default, { address: e, diameter: 28 }),
                      n.default.createElement(
                        "div",
                        { className: "send__select-recipient-wrapper__group-item__content" },
                        n.default.createElement(
                          "div",
                          { className: "send__select-recipient-wrapper__group-item__title" },
                          t ? n.default.createElement(d.default, { input: t }) : (0, u.ellipsify)(e)
                        ),
                        t &&
                          n.default.createElement(
                            "div",
                            { className: "send__select-recipient-wrapper__group-item__subtitle" },
                            (0, u.ellipsify)(e)
                          )
                      )
                    );
                  }
                  renderTransfer() {
                    const { t: e } = this.context;
                    let { ownedAccounts: t } = this.props;
                    const { userInput: a } = this.props;
                    return (
                      a &&
                        (t = t.filter(
                          (e) => e.name.toLowerCase().indexOf(a.toLowerCase()) > -1 || e.address.toLowerCase().indexOf(a.toLowerCase()) > -1
                        )),
                      n.default.createElement(
                        n.default.Fragment,
                        null,
                        n.default.createElement(
                          f.default,
                          { marginLeft: 4, marginRight: 4, marginTop: 2, marginBottom: 2 },
                          n.default.createElement(
                            p.Text,
                            { variant: m.TextVariant.bodyLgMedium, color: m.TextColor.textAlternative },
                            e("yourAccounts")
                          )
                        ),
                        n.default.createElement(
                          "div",
                          { className: "send__select-recipient-wrapper__list" },
                          n.default.createElement(c.default, { items: t, onSelect: (e, t) => this.selectRecipient(e, t, "my accounts") })
                        )
                      )
                    );
                  }
                  renderMain() {
                    const { t: e } = this.context,
                      { addressBook: t, userInput: a } = this.props;
                    return n.default.createElement(
                      "div",
                      { className: "send__select-recipient-wrapper__list" },
                      t.length > 0 && !a
                        ? n.default.createElement(
                            f.default,
                            { marginLeft: 4, marginRight: 4, marginTop: 2, marginBottom: 2 },
                            n.default.createElement(
                              p.Text,
                              { variant: m.TextVariant.bodyLgMedium, color: m.TextColor.textAlternative },
                              e("contacts")
                            )
                          )
                        : null,
                      n.default.createElement(l.default, {
                        addressBook: t,
                        searchForContacts: this.searchForContacts.bind(this),
                        searchForRecents: this.searchForRecents.bind(this),
                        selectRecipient: (e, t) => {
                          this.selectRecipient(e, t, (t ? "contact" : "recent") + " list");
                        }
                      })
                    );
                  }
                  renderDialogs() {
                    const { domainError: e, recipient: t, domainWarning: a } = this.props,
                      { t: r } = this.context;
                    return e || (t.error && "required" !== t.error)
                      ? n.default.createElement(s.default, { type: "error", className: "send__error-dialog" }, r(e ?? t.error))
                      : a || t.warning
                      ? n.default.createElement(s.default, { type: "warning", className: "send__error-dialog" }, r(a ?? t.warning))
                      : null;
                  }
                }
                (a.default = v),
                  b(v, "propTypes", {
                    userInput: r.default.string,
                    ownedAccounts: r.default.array,
                    addressBook: r.default.array,
                    updateRecipient: r.default.func,
                    domainResolution: r.default.string,
                    domainError: r.default.string,
                    domainWarning: r.default.string,
                    addressBookEntryName: r.default.string,
                    contacts: r.default.array,
                    nonContacts: r.default.array,
                    addHistoryEntry: r.default.func,
                    recipient: r.default.shape({
                      address: r.default.string,
                      nickname: r.default.string,
                      error: r.default.string,
                      warning: r.default.string
                    }),
                    updateRecipientUserInput: r.default.func
                  }),
                  b(v, "contextTypes", { t: r.default.func, metricsEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/add-recipient.component.js" }
    ],
    [
      5014,
      {
        "../../../../ducks/domains": 4757,
        "../../../../ducks/send": 4765,
        "../../../../selectors": 5197,
        "./add-recipient.component": 5013,
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
                  r = e("react-redux"),
                  o = e("../../../../selectors"),
                  i = e("../../../../ducks/send"),
                  s = e("../../../../ducks/domains"),
                  l = (n = e("./add-recipient.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(
                  function (e) {
                    const t = (0, s.getDomainResolution)(e);
                    let a = "";
                    if (t) {
                      a = ((0, o.getAddressBookEntry)(e, t) || {}).name;
                    }
                    const n = (0, o.getAddressBook)(e),
                      r = [...(0, o.getCurrentNetworkTransactions)(e)].reverse(),
                      l = n
                        .filter(({ name: e }) => !e)
                        .map((e) => {
                          const t = r.find((t) => t.txParams.to === e.address.toLowerCase());
                          return { ...e, timestamp: null == t ? void 0 : t.time };
                        });
                    l.sort((e, t) => t.timestamp - e.timestamp);
                    const c = (0, o.getMetaMaskAccountsOrdered)(e);
                    return {
                      addressBook: n,
                      addressBookEntryName: a,
                      contacts: n.filter(({ name: e }) => Boolean(e)),
                      domainResolution: t,
                      domainError: (0, s.getDomainError)(e),
                      domainWarning: (0, s.getDomainWarning)(e),
                      nonContacts: l,
                      ownedAccounts: c,
                      userInput: (0, i.getRecipientUserInput)(e),
                      recipient: (0, i.getRecipient)(e)
                    };
                  },
                  function (e) {
                    return {
                      addHistoryEntry: (t) => e((0, i.addHistoryEntry)(t)),
                      updateRecipient: ({ address: t, nickname: a }) => e((0, i.updateRecipient)({ address: t, nickname: a })),
                      updateRecipientUserInput: (t) => e((0, i.updateRecipientUserInput)(t)),
                      useMyAccountsForRecipientSearch: () => e((0, i.useMyAccountsForRecipientSearch)()),
                      useContactListForRecipientSearch: () => e((0, i.useContactListForRecipientSearch)())
                    };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/add-recipient.container.js" }
    ],
    [
      5015,
      {
        "../../../../../app/scripts/lib/util": 82,
        "../../../../../shared/modules/hexstring-utils": 3993,
        "../../../../components/component-library": 4453,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/util": 4812,
        "@metamask/utils": 1893,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
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
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = (e("@metamask/utils"), e("../../../../../app/scripts/lib/util")),
                  s = e("../../../../helpers/utils/util"),
                  l = e("../../../../../shared/modules/hexstring-utils"),
                  c = e("../../../../components/component-library"),
                  u = e("../../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (p = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function f(e, t, a) {
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
                class m extends n.Component {
                  constructor(...e) {
                    super(...e),
                      f(this, "onPaste", (e) => {
                        var t;
                        if (null !== (t = e.clipboardData.items) && void 0 !== t && t.length) {
                          const t = e.clipboardData.items[0];
                          null == t ||
                            t.getAsString((e) => {
                              const t = e.trim();
                              !(0, l.isBurnAddress)(t) &&
                                (0, l.isValidHexAddress)(t, { mixedCaseUseChecksum: !0 }) &&
                                this.props.onPaste((0, i.addHexPrefix)(t));
                            });
                        }
                      }),
                      f(this, "onChange", ({ target: { value: e } }) => {
                        const {
                            onValidAddressTyped: t,
                            internalSearch: a,
                            onChange: n,
                            lookupDomainName: r,
                            resetDomainResolution: o
                          } = this.props,
                          c = e.trim();
                        if ((n(c), a)) return null;
                        return (
                          (0, s.isValidDomainName)(c)
                            ? r(c)
                            : (o(),
                              t &&
                                !(0, l.isBurnAddress)(c) &&
                                (0, l.isValidHexAddress)(c, { mixedCaseUseChecksum: !0 }) &&
                                t((0, i.addHexPrefix)(c))),
                          null
                        );
                      });
                  }
                  componentDidMount() {
                    this.props.initializeDomainSlice();
                  }
                  render() {
                    const { t: e } = this.context,
                      { className: t, selectedAddress: a, selectedName: r, userInput: i } = this.props,
                      s = Boolean(a);
                    return n.default.createElement(
                      "div",
                      { className: (0, o.default)("ens-input", t) },
                      n.default.createElement(
                        "div",
                        {
                          className: (0, o.default)("ens-input__wrapper", {
                            "ens-input__wrapper__status-icon--error": !1,
                            "ens-input__wrapper__status-icon--valid": !1,
                            "ens-input__wrapper--valid": s
                          })
                        },
                        s
                          ? n.default.createElement(
                              n.default.Fragment,
                              null,
                              n.default.createElement(
                                "div",
                                { className: "ens-input__wrapper__input ens-input__wrapper__input--selected" },
                                n.default.createElement("div", { className: "ens-input__selected-input__title" }, r || a),
                                r !== a && n.default.createElement("div", { className: "ens-input__selected-input__subtitle" }, a)
                              ),
                              n.default.createElement(c.ButtonIcon, {
                                iconName: c.IconName.Close,
                                ariaLabel: e("close"),
                                onClick: this.props.onReset,
                                className: "ens-input__wrapper__action-icon-button",
                                size: c.IconSize.Sm
                              })
                            )
                          : n.default.createElement(
                              n.default.Fragment,
                              null,
                              n.default.createElement("input", {
                                className: "ens-input__wrapper__input",
                                type: "text",
                                dir: "auto",
                                placeholder: e("recipientAddressPlaceholder"),
                                onChange: this.onChange,
                                onPaste: this.onPaste,
                                spellCheck: "false",
                                value: a || i,
                                autoFocus: !0,
                                "data-testid": "ens-input"
                              }),
                              n.default.createElement(c.ButtonIcon, {
                                className: "ens-input__wrapper__action-icon-button",
                                onClick: () => {
                                  i ? this.props.onReset() : this.props.scanQrCode();
                                },
                                iconName: i ? c.IconName.Close : c.IconName.Scan,
                                ariaLabel: e(i ? "close" : "scanQrCode"),
                                color: i ? u.IconColor.iconDefault : u.IconColor.primaryDefault
                              })
                            )
                      )
                    );
                  }
                }
                (a.default = m),
                  f(m, "contextTypes", { t: r.default.func, metricsEvent: r.default.func }),
                  f(m, "propTypes", {
                    className: r.default.string,
                    selectedAddress: r.default.string,
                    selectedName: r.default.string,
                    scanQrCode: r.default.func,
                    onPaste: r.default.func,
                    onValidAddressTyped: r.default.func,
                    internalSearch: r.default.bool,
                    userInput: r.default.string,
                    onChange: r.default.func.isRequired,
                    onReset: r.default.func.isRequired,
                    lookupDomainName: r.default.func.isRequired,
                    initializeDomainSlice: r.default.func.isRequired,
                    resetDomainResolution: r.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/domain-input.component.js" }
    ],
    [
      5016,
      { "../../../../ducks/domains": 4757, "./domain-input.component": 5015, lodash: 3312, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("lodash"),
                  o = e("react-redux"),
                  i = e("../../../../ducks/domains"),
                  s = (n = e("./domain-input.component")) && n.__esModule ? n : { default: n };
                a.default = (0, o.connect)(null, function (e) {
                  return {
                    lookupDomainName: (0, r.debounce)((t) => e((0, i.lookupDomainName)(t)), 150),
                    initializeDomainSlice: () => e((0, i.initializeDomainSlice)()),
                    resetDomainResolution: (0, r.debounce)(() => e((0, i.resetDomainResolution)()), 300)
                  };
                })(s.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/domain-input.container.js" }
    ],
    [
      5017,
      { "./domain-input.container": 5016 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./domain-input.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/domain-input.js" }
    ],
    [
      5018,
      { "./add-recipient.container": 5014 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./add-recipient.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/index.js" }
    ],
    [
      5019,
      { "./send-content.container": 5029 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-content.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/index.js" }
    ],
    [
      502,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.version = void 0), (a.version = "wordlists/5.7.0");
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/_version.js" }
    ],
    [
      5020,
      {
        "../../../../../../shared/constants/metametrics": 3962,
        "../../../../../contexts/metametrics": 4749,
        "../../../../../ducks/send": 4765,
        "../../../../../hooks/useI18nContext": 4837,
        classnames: 2414,
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
                  (a.default = function () {
                    const e = (0, i.useSelector)(s.isSendFormInvalid),
                      t = (0, i.useSelector)(s.getSendMaxModeState),
                      a = (0, i.useDispatch)(),
                      n = (0, r.useContext)(c.MetaMetricsContext),
                      d = (0, l.useI18nContext)(),
                      p = e;
                    return r.default.createElement(
                      "button",
                      {
                        className: "send-v2__amount-max",
                        disabled: p,
                        onClick: () => {
                          n({
                            event: 'Clicked "Amount Max"',
                            category: u.MetaMetricsEventCategory.Transactions,
                            properties: { action: "Edit Screen", legacy_event: !0 }
                          }),
                            a((0, s.toggleSendMaxMode)());
                        }
                      },
                      r.default.createElement("input", { type: "checkbox", checked: t, readOnly: !0 }),
                      r.default.createElement(
                        "div",
                        { className: (0, o.default)("send-v2__amount-max__button", { "send-v2__amount-max__button__disabled": p }) },
                        d("max")
                      )
                    );
                  });
                var n,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = (n = e("classnames")) && n.__esModule ? n : { default: n },
                  i = e("react-redux"),
                  s = e("../../../../../ducks/send"),
                  l = e("../../../../../hooks/useI18nContext"),
                  c = e("../../../../../contexts/metametrics"),
                  u = e("../../../../../../shared/constants/metametrics");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/amount-max-button/amount-max-button.js" }
    ],
    [
      5021,
      { "./amount-max-button": 5020 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./amount-max-button")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/amount-max-button/index.js" }
    ],
    [
      5022,
      { "./send-amount-row.container": 5024 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-amount-row.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/index.js" }
    ],
    [
      5023,
      {
        "../../../../../shared/constants/transaction": 3974,
        "../../../../components/app/user-preferenced-currency-input": 4380,
        "../../../../components/app/user-preferenced-token-input": 4383,
        "../send-row-wrapper": 5036,
        "./amount-max-button": 5021,
        "prop-types": 3450,
        react: 3690
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
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = u(e("prop-types")),
                  o = u(e("../send-row-wrapper")),
                  i = u(e("../../../../components/app/user-preferenced-currency-input")),
                  s = u(e("../../../../components/app/user-preferenced-token-input")),
                  l = e("../../../../../shared/constants/transaction"),
                  c = u(e("./amount-max-button"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function p(e, t, a) {
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
                class f extends n.Component {
                  constructor(...e) {
                    super(...e),
                      p(this, "handleChange", (e) => {
                        this.props.updateSendAmount(e);
                      });
                  }
                  renderInput() {
                    const { amount: e, inError: t, asset: a } = this.props;
                    return a.type === l.AssetType.token
                      ? n.default.createElement(s.default, { error: t, onChange: this.handleChange, token: a.details, value: e })
                      : n.default.createElement(i.default, { error: t, onChange: this.handleChange, hexValue: e });
                  }
                  render() {
                    const { inError: e, asset: t } = this.props;
                    return t.type === l.AssetType.NFT
                      ? null
                      : n.default.createElement(
                          o.default,
                          { label: `${this.context.t("amount")}:`, showError: e, errorType: "amount" },
                          n.default.createElement(c.default, { inError: e }),
                          this.renderInput()
                        );
                  }
                }
                (a.default = f),
                  p(f, "propTypes", {
                    amount: r.default.string,
                    inError: r.default.bool,
                    asset: r.default.object,
                    updateSendAmount: r.default.func
                  }),
                  p(f, "contextTypes", { t: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/send-amount-row.component.js" }
    ],
    [
      5024,
      { "../../../../ducks/send": 4765, "./send-amount-row.component": 5023, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("react-redux"),
                  o = e("../../../../ducks/send"),
                  i = (n = e("./send-amount-row.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(
                  function (e) {
                    return { amount: (0, o.getSendAmount)(e), inError: (0, o.sendAmountIsInError)(e), asset: (0, o.getSendAsset)(e) };
                  },
                  function (e) {
                    return { updateSendAmount: (t) => e((0, o.updateSendAmount)(t)) };
                  }
                )(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/send-amount-row.container.js" }
    ],
    [
      5025,
      { "./send-asset-row.container": 5027 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-asset-row.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-asset-row/index.js" }
    ],
    [
      5026,
      {
        "../../../../../shared/constants/metametrics": 3962,
        "../../../../../shared/constants/transaction": 3974,
        "../../../../../shared/modules/string-utils": 4002,
        "../../../../components/app/token-list-display": 4341,
        "../../../../components/app/user-preferenced-currency-display": 4378,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/identicon": 4664,
        "../../../../components/ui/token-balance": 4731,
        "../../../../helpers/constants/common": 4769,
        "../../../../helpers/constants/design-system": 4771,
        "../send-row-wrapper": 5036,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = b(e("prop-types")),
                  o = e("lodash"),
                  i = b(e("../send-row-wrapper")),
                  s = b(e("../../../../components/ui/identicon")),
                  l = b(e("../../../../components/ui/token-balance")),
                  c = b(e("../../../../components/app/token-list-display")),
                  u = b(e("../../../../components/app/user-preferenced-currency-display")),
                  d = e("../../../../helpers/constants/common"),
                  p = e("../../../../../shared/modules/string-utils"),
                  f = e("../../../../../shared/constants/metametrics"),
                  m = e("../../../../../shared/constants/transaction"),
                  g = e("../../../../components/component-library"),
                  h = e("../../../../helpers/constants/design-system");
                function b(e) {
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
                function T(e, t, a) {
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
                class y extends n.Component {
                  constructor(...e) {
                    super(...e),
                      T(this, "state", { isShowingDropdown: !1, sendableTokens: [], sendableNfts: [] }),
                      T(this, "openDropdown", () => this.setState({ isShowingDropdown: !0 })),
                      T(this, "closeDropdown", () => this.setState({ isShowingDropdown: !1 })),
                      T(this, "getAssetSelected", (e, t) => {
                        switch (e) {
                          case m.AssetType.native:
                            return this.props.nativeCurrency;
                          case m.AssetType.token:
                            return m.TokenStandard.ERC20;
                          case m.AssetType.NFT:
                            return null == t ? void 0 : t.standard;
                          default:
                            return null;
                        }
                      }),
                      T(this, "selectToken", (e, t) => {
                        this.setState({ isShowingDropdown: !1 }, () => {
                          this.context.trackEvent({
                            category: f.MetaMetricsEventCategory.Transactions,
                            event: 'User clicks "Assets" dropdown',
                            properties: { action: "Send Screen", legacy_event: !0, assetSelected: this.getAssetSelected(e, t) }
                          }),
                            this.props.updateSendAsset({ type: e, details: e === m.AssetType.native ? null : t });
                        });
                      });
                  }
                  async componentDidMount() {
                    const e = this.props.tokens.filter((e) => !e.isERC721),
                      t = this.props.nfts.filter((e) => e.isCurrentlyOwned && e.standard === m.TokenStandard.ERC721),
                      a = (0, o.chain)(t)
                        .groupBy("address")
                        .mapValues((e) => e.sort((e, t) => e.tokenId - t.tokenId))
                        .values()
                        .flatten()
                        .value();
                    this.setState({ sendableTokens: e, sendableNfts: a });
                  }
                  render() {
                    const { t: e } = this.context;
                    return n.default.createElement(
                      i.default,
                      { label: `${e("asset")}:` },
                      n.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown" },
                        n.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__input-wrapper", onClick: this.openDropdown },
                          this.renderSendAsset()
                        ),
                        [...this.state.sendableTokens, ...this.state.sendableNfts].length > 0 ? this.renderAssetDropdown() : null
                      )
                    );
                  }
                  renderSendAsset() {
                    const {
                      sendAsset: { details: e, type: t },
                      tokens: a,
                      nfts: n
                    } = this.props;
                    if (t === m.AssetType.token) {
                      const t = a.find(({ address: t }) => (0, p.isEqualCaseInsensitive)(t, e.address));
                      return t ? this.renderToken(t) : this.renderToken(e);
                    }
                    if (t === m.AssetType.NFT) {
                      const t = n.find(({ address: t, tokenId: a }) => (0, p.isEqualCaseInsensitive)(t, e.address) && a === e.tokenId);
                      if (t || e) return this.renderNft(t ?? e);
                    }
                    return this.renderNativeCurrency();
                  }
                  renderAssetDropdown() {
                    return (
                      this.state.isShowingDropdown &&
                      n.default.createElement(
                        "div",
                        null,
                        n.default.createElement("div", { className: "send-v2__asset-dropdown__close-area", onClick: this.closeDropdown }),
                        n.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__list" },
                          this.renderNativeCurrency(!0),
                          n.default.createElement(c.default, { clickHandler: (e) => this.selectToken(m.AssetType.token, e) }),
                          this.state.sendableNfts.map((e) => this.renderNft(e, !0))
                        )
                      )
                    );
                  }
                  renderNativeCurrency(e = !1) {
                    const { t: t } = this.context,
                      { accounts: a, selectedAddress: r, nativeCurrency: o, nativeCurrencyImage: i } = this.props,
                      { sendableTokens: l, sendableNfts: c } = this.state,
                      p = a[r] ? a[r].balance : "",
                      f = [...l, ...c];
                    return n.default.createElement(
                      "div",
                      {
                        className: f.length > 0 ? "send-v2__asset-dropdown__asset" : "send-v2__asset-dropdown__single-asset",
                        onClick: () => this.selectToken(m.AssetType.native)
                      },
                      n.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        n.default.createElement(s.default, { diameter: 36, image: i, address: o })
                      ),
                      n.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        n.default.createElement("div", { className: "send-v2__asset-dropdown__symbol" }, o),
                        n.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__name" },
                          n.default.createElement("span", { className: "send-v2__asset-dropdown__name__label" }, `${t("balance")}:`),
                          n.default.createElement(u.default, { value: p, type: d.PRIMARY })
                        )
                      ),
                      !e &&
                        f.length > 0 &&
                        n.default.createElement("i", { className: "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret" })
                    );
                  }
                  renderToken(e, t = !1) {
                    const { address: a, symbol: r, image: o } = e,
                      { t: i } = this.context;
                    return n.default.createElement(
                      "div",
                      { key: a, className: "send-v2__asset-dropdown__asset", onClick: () => this.selectToken(m.AssetType.token, e) },
                      n.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        n.default.createElement(s.default, { address: a, diameter: 36, image: o })
                      ),
                      n.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        n.default.createElement("div", { className: "send-v2__asset-dropdown__symbol" }, r),
                        n.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__name" },
                          n.default.createElement("span", { className: "send-v2__asset-dropdown__name__label" }, `${i("balance")}:`),
                          n.default.createElement(l.default, { token: e })
                        )
                      ),
                      !t && n.default.createElement("i", { className: "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret" })
                    );
                  }
                  renderNft(e, t = !1) {
                    const { address: a, name: r, image: o, tokenId: i } = e,
                      { t: l } = this.context,
                      c = this.props.collections.find((e) => e.address === a),
                      u = (null == c ? void 0 : c.name) || r;
                    return n.default.createElement(
                      "div",
                      { key: a, className: "send-v2__asset-dropdown__asset", onClick: () => this.selectToken(m.AssetType.NFT, e) },
                      n.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        n.default.createElement(s.default, { address: a, diameter: 36, image: o })
                      ),
                      n.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        n.default.createElement("div", { className: "send-v2__asset-dropdown__symbol", title: u }, u),
                        n.default.createElement(g.Text, { variant: h.TextVariant.bodyXs, ellipsis: !0, title: i }, `${l("tokenId")}: ${i}`)
                      ),
                      !t && n.default.createElement("i", { className: "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret" })
                    );
                  }
                }
                (a.default = y),
                  T(y, "propTypes", {
                    tokens: r.default.arrayOf(
                      r.default.shape({
                        address: r.default.string,
                        decimals: r.default.oneOfType([r.default.string, r.default.number]),
                        symbol: r.default.string,
                        image: r.default.string
                      })
                    ).isRequired,
                    accounts: r.default.object.isRequired,
                    selectedAddress: r.default.string.isRequired,
                    sendAsset: r.default.object,
                    updateSendAsset: r.default.func.isRequired,
                    nativeCurrency: r.default.string,
                    nativeCurrencyImage: r.default.string,
                    nfts: r.default.arrayOf(
                      r.default.shape({
                        address: r.default.string.isRequired,
                        tokenId: r.default.string.isRequired,
                        name: r.default.string,
                        description: r.default.string,
                        image: r.default.string,
                        standard: r.default.string,
                        imageThumbnail: r.default.string,
                        imagePreview: r.default.string,
                        creator: r.default.shape({ address: r.default.string, config: r.default.string, profile_img_url: r.default.string })
                      })
                    ),
                    collections: r.default.arrayOf(r.default.shape({ address: r.default.string.isRequired, name: r.default.string }))
                  }),
                  T(y, "contextTypes", { t: r.default.func, trackEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-asset-row/send-asset-row.component.js" }
    ],
    [
      5027,
      {
        "../../../../ducks/metamask/metamask": 4763,
        "../../../../ducks/send": 4765,
        "../../../../selectors": 5197,
        "./send-asset-row.component": 5026,
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
                  r = e("react-redux"),
                  o = e("../../../../ducks/metamask/metamask"),
                  i = e("../../../../selectors"),
                  s = e("../../../../ducks/send"),
                  l = (n = e("./send-asset-row.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(
                  function (e) {
                    return {
                      tokens: e.metamask.tokens,
                      selectedAddress: e.metamask.selectedAddress,
                      nfts: (0, o.getNfts)(e),
                      collections: (0, o.getNftContracts)(e),
                      sendAsset: (0, s.getSendAsset)(e),
                      accounts: (0, i.getMetaMaskAccounts)(e),
                      nativeCurrency: (0, o.getNativeCurrency)(e),
                      nativeCurrencyImage: (0, i.getNativeCurrencyImage)(e)
                    };
                  },
                  function (e) {
                    return { updateSendAsset: ({ type: t, details: a }) => e((0, s.updateSendAsset)({ type: t, details: a })) };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-asset-row/send-asset-row.container.js" }
    ],
    [
      5028,
      {
        "../../../../shared/constants/transaction": 3974,
        "../../../components/ui/actionable-message": 4604,
        "../../../components/ui/dialog": 4631,
        "../../../components/ui/page-container/page-container-content.component": 4693,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/constants/error-keys": 4772,
        "../gas-display": 5011,
        "./send-amount-row": 5022,
        "./send-asset-row": 5025,
        "./send-gas-row": 5030,
        "./send-hex-data-row": 5033,
        "prop-types": 3450,
        react: 3690
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
                    var a = b(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = h(e("prop-types")),
                  o = h(e("../../../components/ui/page-container/page-container-content.component")),
                  i = h(e("../../../components/ui/dialog")),
                  s = h(e("../../../components/ui/actionable-message")),
                  l = e("../../../helpers/constants/error-keys"),
                  c = e("../../../../shared/constants/transaction"),
                  u = e("../../../helpers/constants/common"),
                  d = h(e("../gas-display")),
                  p = h(e("./send-amount-row")),
                  f = h(e("./send-hex-data-row")),
                  m = h(e("./send-asset-row")),
                  g = h(e("./send-gas-row"));
                function h(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (b = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function v(e, t, a) {
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
                class T extends n.Component {
                  render() {
                    const {
                      warning: e,
                      error: t,
                      gasIsExcessive: a,
                      isEthGasPrice: r,
                      noGasPrice: i,
                      networkOrAccountNotSupports1559: s,
                      asset: u,
                      assetError: h,
                      recipient: b,
                      recipientWarningAcknowledged: v,
                      isMultiLayerFeeNetwork: T
                    } = this.props;
                    let y;
                    a ? (y = l.GAS_PRICE_EXCESSIVE_ERROR_KEY) : i && (y = l.GAS_PRICE_FETCH_FAILURE_ERROR_KEY);
                    const _ = this.props.showHexData && u.type !== c.AssetType.token && u.type !== c.AssetType.NFT,
                      E = "knownAddressRecipient" === b.warning;
                    return n.default.createElement(
                      o.default,
                      null,
                      n.default.createElement(
                        "div",
                        { className: "send-v2__form" },
                        h ? this.renderError(h) : null,
                        r ? this.renderWarning(l.ETH_GAS_PRICE_FETCH_WARNING_KEY) : null,
                        t ? this.renderError(t) : null,
                        e ? this.renderWarning() : null,
                        E && !v ? this.renderRecipientWarning() : null,
                        n.default.createElement(m.default, null),
                        n.default.createElement(p.default, null),
                        s ? n.default.createElement(g.default, null) : null,
                        _ ? n.default.createElement(f.default, null) : null,
                        !T && n.default.createElement(d.default, { gasError: y })
                      )
                    );
                  }
                  renderWarning(e = "") {
                    const { t: t } = this.context,
                      { warning: a } = this.props;
                    return n.default.createElement(i.default, { type: "warning", className: "send__error-dialog" }, t("" === e ? a : e));
                  }
                  renderRecipientWarning() {
                    const { acknowledgeRecipientWarning: e } = this.props,
                      { t: t } = this.context;
                    return n.default.createElement(
                      "div",
                      { className: "send__warning-container", "data-testid": "send-warning" },
                      n.default.createElement(s.default, {
                        type: "danger",
                        useIcon: !0,
                        iconFillColor: "var(--color-error-default)",
                        primaryActionV2: { label: t("tooltipApproveButton"), onClick: e },
                        message: t("sendingToTokenContractWarning", [
                          n.default.createElement(
                            "a",
                            {
                              key: "contractWarningSupport",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "send__warning-container__link",
                              href: u.CONTRACT_ADDRESS_LINK
                            },
                            t("learnMoreUpperCase")
                          )
                        ]),
                        roundedButtons: !0
                      })
                    );
                  }
                  renderError(e) {
                    const { t: t } = this.context;
                    return n.default.createElement(i.default, { type: "error", className: "send__error-dialog" }, t(e));
                  }
                }
                (a.default = T),
                  v(T, "contextTypes", { t: r.default.func }),
                  v(T, "propTypes", {
                    showHexData: r.default.bool,
                    warning: r.default.string,
                    error: r.default.string,
                    gasIsExcessive: r.default.bool.isRequired,
                    isEthGasPrice: r.default.bool,
                    noGasPrice: r.default.bool,
                    networkOrAccountNotSupports1559: r.default.bool,
                    asset: r.default.object,
                    assetError: r.default.string,
                    recipient: r.default.object,
                    acknowledgeRecipientWarning: r.default.func,
                    recipientWarningAcknowledged: r.default.bool,
                    isMultiLayerFeeNetwork: r.default.bool
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-content.component.js" }
    ],
    [
      5029,
      { "../../../ducks/send": 4765, "../../../selectors": 5197, "./send-content.component": 5028, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("react-redux"),
                  o = e("../../../selectors"),
                  i = e("../../../ducks/send"),
                  s = (n = e("./send-content.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(
                  function (e) {
                    const t = (0, i.getRecipient)(e),
                      a = (0, i.getRecipientWarningAcknowledgement)(e);
                    return {
                      isEthGasPrice: (0, o.getIsEthGasPriceFetched)(e),
                      noGasPrice: (0, o.getNoGasPriceFetched)(e),
                      networkOrAccountNotSupports1559: (0, o.checkNetworkOrAccountNotSupports1559)(e),
                      getIsBalanceInsufficient: (0, i.getIsBalanceInsufficient)(e),
                      asset: (0, i.getSendAsset)(e),
                      assetError: (0, i.getAssetError)(e),
                      recipient: t,
                      recipientWarningAcknowledged: a,
                      isMultiLayerFeeNetwork: (0, o.getIsMultiLayerFeeNetwork)(e)
                    };
                  },
                  function (e) {
                    return { acknowledgeRecipientWarning: () => e((0, i.acknowledgeRecipientWarning)()) };
                  }
                )(s.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-content.container.js" }
    ],
    [
      503,
      { "./wordlist": 512, "./wordlists": 513 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.wordlists = a.Wordlist = a.logger = void 0);
                var n = e("./wordlist");
                Object.defineProperty(a, "logger", {
                  enumerable: !0,
                  get: function () {
                    return n.logger;
                  }
                }),
                  Object.defineProperty(a, "Wordlist", {
                    enumerable: !0,
                    get: function () {
                      return n.Wordlist;
                    }
                  });
                var r = e("./wordlists");
                Object.defineProperty(a, "wordlists", {
                  enumerable: !0,
                  get: function () {
                    return r.wordlists;
                  }
                });
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/index.js" }
    ],
    [
      5030,
      { "./send-gas-row.container": 5032 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-gas-row.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-gas-row/index.js" }
    ],
    [
      5031,
      {
        "../../../../components/app/advanced-gas-inputs": 4031,
        "../../../../ducks/send": 4765,
        "../send-row-wrapper": 5036,
        "prop-types": 3450,
        react: 3690
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
                    var a = c(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = l(e("prop-types")),
                  o = l(e("../send-row-wrapper")),
                  i = l(e("../../../../components/app/advanced-gas-inputs")),
                  s = e("../../../../ducks/send");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (c = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function u(e, t, a) {
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
                class d extends n.Component {
                  render() {
                    const {
                      updateGasPrice: e,
                      updateGasLimit: t,
                      gasPrice: a,
                      gasLimit: r,
                      insufficientBalance: l,
                      minimumGasLimit: c,
                      gasInputMode: u
                    } = this.props;
                    return u !== s.GAS_INPUT_MODES.INLINE
                      ? null
                      : n.default.createElement(
                          o.default,
                          null,
                          n.default.createElement(i.default, {
                            updateCustomGasPrice: e,
                            updateCustomGasLimit: t,
                            customGasPrice: a,
                            customGasLimit: r,
                            insufficientBalance: l,
                            minimumGasLimit: c,
                            customPriceIsSafe: !0,
                            isSpeedUp: !1
                          })
                        );
                  }
                }
                (a.default = d),
                  u(d, "propTypes", {
                    updateGasPrice: r.default.func,
                    updateGasLimit: r.default.func,
                    gasInputMode: r.default.oneOf(Object.values(s.GAS_INPUT_MODES)),
                    gasPrice: r.default.string,
                    gasLimit: r.default.string,
                    insufficientBalance: r.default.bool,
                    minimumGasLimit: r.default.string
                  }),
                  u(d, "contextTypes", { t: r.default.func, trackEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-gas-row/send-gas-row.component.js" }
    ],
    [
      5032,
      {
        "../../../../../shared/modules/conversion.utils": 3988,
        "../../../../ducks/gas/gas.duck": 4759,
        "../../../../ducks/send": 4765,
        "./send-gas-row.component": 5031,
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
                  r = e("react-redux"),
                  o = e("../../../../ducks/send"),
                  i = e("../../../../ducks/gas/gas.duck"),
                  s = e("../../../../../shared/modules/conversion.utils"),
                  l = (n = e("./send-gas-row.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(
                  function (e) {
                    const t = (0, o.getGasPrice)(e),
                      a = (0, o.getGasLimit)(e),
                      n = (0, o.getMinimumGasLimitForSend)(e);
                    return {
                      minimumGasLimit: (0, s.hexToDecimal)(n),
                      gasFeeError: (0, o.gasFeeIsInError)(e),
                      gasLoadingError: (0, o.isSendStateInitialized)(e),
                      gasInputMode: (0, o.getGasInputMode)(e),
                      gasPrice: t,
                      gasLimit: a,
                      insufficientBalance: (0, o.getIsBalanceInsufficient)(e)
                    };
                  },
                  function (e) {
                    return {
                      updateGasPrice: (t) => {
                        e((0, o.updateGasPrice)(t)), e((0, i.setCustomGasPrice)(t));
                      },
                      updateGasLimit: (t) => {
                        e((0, o.updateGasLimit)(t)), e((0, i.setCustomGasLimit)(t));
                      }
                    };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-gas-row/send-gas-row.container.js" }
    ],
    [
      5033,
      { "./send-hex-data-row.container": 5035 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-hex-data-row.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-hex-data-row/index.js" }
    ],
    [
      5034,
      { "../send-row-wrapper": 5036, "prop-types": 3450, react: 3690 },
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
                  })(e("react")),
                  r = i(e("prop-types")),
                  o = i(e("../send-row-wrapper"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (s = function (e) {
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
                class c extends n.Component {
                  constructor(...e) {
                    super(...e),
                      l(this, "onInput", (e) => {
                        const { updateSendHexData: t } = this.props;
                        t(e.target.value.replace(/\n/gu, "") || null);
                      });
                  }
                  render() {
                    const { inError: e, data: t } = this.props,
                      { t: a } = this.context;
                    return n.default.createElement(
                      o.default,
                      { label: `${a("hexData")}:`, showError: e, errorType: "amount" },
                      n.default.createElement("textarea", {
                        onInput: this.onInput,
                        placeholder: a("optional"),
                        className: "send-v2__hex-data__input",
                        defaultValue: t || ""
                      })
                    );
                  }
                }
                (a.default = c),
                  l(c, "propTypes", { inError: r.default.bool, data: r.default.string, updateSendHexData: r.default.func.isRequired }),
                  l(c, "contextTypes", { t: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-hex-data-row/send-hex-data-row.component.js" }
    ],
    [
      5035,
      { "../../../../ducks/send": 4765, "./send-hex-data-row.component": 5034, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("react-redux"),
                  o = e("../../../../ducks/send"),
                  i = (n = e("./send-hex-data-row.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(
                  function (e) {
                    return { data: (0, o.getSendHexData)(e) };
                  },
                  function (e) {
                    return { updateSendHexData: (t) => e((0, o.updateSendHexData)(t)) };
                  }
                )(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-hex-data-row/send-hex-data-row.container.js" }
    ],
    [
      5036,
      { "./send-row-wrapper.component": 5040 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-row-wrapper.component")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/index.js" }
    ],
    [
      5037,
      { "./send-row-error-message.container": 5039 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-row-error-message.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/index.js" }
    ],
    [
      5038,
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
                  })(e("react")),
                  r = i(e("prop-types")),
                  o = i(e("classnames"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (s = function (e) {
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
                class c extends n.Component {
                  render() {
                    const { errors: e, errorType: t } = this.props,
                      a = e[t];
                    return a
                      ? n.default.createElement(
                          "div",
                          { className: (0, o.default)("send-v2__error", { "send-v2__error-amount": "amount" === t }) },
                          this.context.t(a)
                        )
                      : null;
                  }
                }
                (a.default = c),
                  l(c, "propTypes", { errors: r.default.object, errorType: r.default.string }),
                  l(c, "contextTypes", { t: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/send-row-error-message.component.js" }
    ],
    [
      5039,
      { "../../../../../ducks/send": 4765, "./send-row-error-message.component": 5038, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("react-redux"),
                  o = e("../../../../../ducks/send"),
                  i = (n = e("./send-row-error-message.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(function (e, t) {
                  return { errors: (0, o.getSendErrors)(e), errorType: t.errorType };
                })(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/send-row-error-message.container.js" }
    ],
    [
      504,
      { "./wordlist": 512 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n,
                  r =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function a() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
                    });
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.langCz = void 0);
                var o = e("./wordlist"),
                  i = null;
                function s(e) {
                  if (
                    null == i &&
                    ((i =
                      "AbdikaceAbecedaAdresaAgreseAkceAktovkaAlejAlkoholAmputaceAnanasAndulkaAnekdotaAnketaAntikaAnulovatArchaAroganceAsfaltAsistentAspiraceAstmaAstronomAtlasAtletikaAtolAutobusAzylBabkaBachorBacilBaculkaBadatelBagetaBagrBahnoBakterieBaladaBaletkaBalkonBalonekBalvanBalzaBambusBankomatBarbarBaretBarmanBarokoBarvaBaterkaBatohBavlnaBazalkaBazilikaBazukaBednaBeranBesedaBestieBetonBezinkaBezmocBeztakBicyklBidloBiftekBikinyBilanceBiografBiologBitvaBizonBlahobytBlatouchBlechaBleduleBleskBlikatBliznaBlokovatBlouditBludBobekBobrBodlinaBodnoutBohatostBojkotBojovatBokorysBolestBorecBoroviceBotaBoubelBouchatBoudaBouleBouratBoxerBradavkaBramboraBrankaBratrBreptaBriketaBrkoBrlohBronzBroskevBrunetkaBrusinkaBrzdaBrzyBublinaBubnovatBuchtaBuditelBudkaBudovaBufetBujarostBukviceBuldokBulvaBundaBunkrBurzaButikBuvolBuzolaBydletBylinaBytovkaBzukotCapartCarevnaCedrCeduleCejchCejnCelaCelerCelkemCelniceCeninaCennostCenovkaCentrumCenzorCestopisCetkaChalupaChapadloCharitaChataChechtatChemieChichotChirurgChladChlebaChlubitChmelChmuraChobotChocholChodbaCholeraChomoutChopitChorobaChovChrapotChrlitChrtChrupChtivostChudinaChutnatChvatChvilkaChvostChybaChystatChytitCibuleCigaretaCihelnaCihlaCinkotCirkusCisternaCitaceCitrusCizinecCizostClonaCokolivCouvatCtitelCtnostCudnostCuketaCukrCupotCvaknoutCvalCvikCvrkotCyklistaDalekoDarebaDatelDatumDceraDebataDechovkaDecibelDeficitDeflaceDeklDekretDemokratDepreseDerbyDeskaDetektivDikobrazDiktovatDiodaDiplomDiskDisplejDivadloDivochDlahaDlouhoDluhopisDnesDobroDobytekDocentDochutitDodnesDohledDohodaDohraDojemDojniceDokladDokolaDoktorDokumentDolarDolevaDolinaDomaDominantDomluvitDomovDonutitDopadDopisDoplnitDoposudDoprovodDopustitDorazitDorostDortDosahDoslovDostatekDosudDosytaDotazDotekDotknoutDoufatDoutnatDovozceDozaduDoznatDozorceDrahotaDrakDramatikDravecDrazeDrdolDrobnostDrogerieDrozdDrsnostDrtitDrzostDubenDuchovnoDudekDuhaDuhovkaDusitDusnoDutostDvojiceDvorecDynamitEkologEkonomieElektronElipsaEmailEmiseEmoceEmpatieEpizodaEpochaEpopejEposEsejEsenceEskortaEskymoEtiketaEuforieEvoluceExekuceExkurzeExpediceExplozeExportExtraktFackaFajfkaFakultaFanatikFantazieFarmacieFavoritFazoleFederaceFejetonFenkaFialkaFigurantFilozofFiltrFinanceFintaFixaceFjordFlanelFlirtFlotilaFondFosforFotbalFotkaFotonFrakceFreskaFrontaFukarFunkceFyzikaGalejeGarantGenetikaGeologGilotinaGlazuraGlejtGolemGolfistaGotikaGrafGramofonGranuleGrepGrilGrogGroteskaGumaHadiceHadrHalaHalenkaHanbaHanopisHarfaHarpunaHavranHebkostHejkalHejnoHejtmanHektarHelmaHematomHerecHernaHesloHezkyHistorikHladovkaHlasivkyHlavaHledatHlenHlodavecHlohHloupostHltatHlubinaHluchotaHmatHmotaHmyzHnisHnojivoHnoutHoblinaHobojHochHodinyHodlatHodnotaHodovatHojnostHokejHolinkaHolkaHolubHomoleHonitbaHonoraceHoralHordaHorizontHorkoHorlivecHormonHorninaHoroskopHorstvoHospodaHostinaHotovostHoubaHoufHoupatHouskaHovorHradbaHraniceHravostHrazdaHrbolekHrdinaHrdloHrdostHrnekHrobkaHromadaHrotHroudaHrozenHrstkaHrubostHryzatHubenostHubnoutHudbaHukotHumrHusitaHustotaHvozdHybnostHydrantHygienaHymnaHysterikIdylkaIhnedIkonaIluzeImunitaInfekceInflaceInkasoInovaceInspekceInternetInvalidaInvestorInzerceIronieJablkoJachtaJahodaJakmileJakostJalovecJantarJarmarkJaroJasanJasnoJatkaJavorJazykJedinecJedleJednatelJehlanJekotJelenJelitoJemnostJenomJepiceJeseterJevitJezdecJezeroJinakJindyJinochJiskraJistotaJitrniceJizvaJmenovatJogurtJurtaKabaretKabelKabinetKachnaKadetKadidloKahanKajakKajutaKakaoKaktusKalamitaKalhotyKalibrKalnostKameraKamkolivKamnaKanibalKanoeKantorKapalinaKapelaKapitolaKapkaKapleKapotaKaprKapustaKapybaraKaramelKarotkaKartonKasaKatalogKatedraKauceKauzaKavalecKazajkaKazetaKazivostKdekolivKdesiKedlubenKempKeramikaKinoKlacekKladivoKlamKlapotKlasikaKlaunKlecKlenbaKlepatKlesnoutKlidKlimaKlisnaKloboukKlokanKlopaKloubKlubovnaKlusatKluzkostKmenKmitatKmotrKnihaKnotKoaliceKoberecKobkaKoblihaKobylaKocourKohoutKojenecKokosKoktejlKolapsKoledaKolizeKoloKomandoKometaKomikKomnataKomoraKompasKomunitaKonatKonceptKondiceKonecKonfeseKongresKoninaKonkursKontaktKonzervaKopanecKopieKopnoutKoprovkaKorbelKorektorKormidloKoroptevKorpusKorunaKorytoKorzetKosatecKostkaKotelKotletaKotoulKoukatKoupelnaKousekKouzloKovbojKozaKozorohKrabiceKrachKrajinaKralovatKrasopisKravataKreditKrejcarKresbaKrevetaKriketKritikKrizeKrkavecKrmelecKrmivoKrocanKrokKronikaKropitKroupaKrovkaKrtekKruhadloKrupiceKrutostKrvinkaKrychleKryptaKrystalKrytKudlankaKufrKujnostKuklaKulajdaKulichKulkaKulometKulturaKunaKupodivuKurtKurzorKutilKvalitaKvasinkaKvestorKynologKyselinaKytaraKyticeKytkaKytovecKyvadloLabradorLachtanLadnostLaikLakomecLamelaLampaLanovkaLasiceLasoLasturaLatinkaLavinaLebkaLeckdyLedenLedniceLedovkaLedvinaLegendaLegieLegraceLehceLehkostLehnoutLektvarLenochodLentilkaLepenkaLepidloLetadloLetecLetmoLetokruhLevhartLevitaceLevobokLibraLichotkaLidojedLidskostLihovinaLijavecLilekLimetkaLinieLinkaLinoleumListopadLitinaLitovatLobistaLodivodLogikaLogopedLokalitaLoketLomcovatLopataLopuchLordLososLotrLoudalLouhLoukaLouskatLovecLstivostLucernaLuciferLumpLuskLustraceLviceLyraLyrikaLysinaMadamMadloMagistrMahagonMajetekMajitelMajoritaMakakMakoviceMakrelaMalbaMalinaMalovatMalviceMaminkaMandleMankoMarnostMasakrMaskotMasopustMaticeMatrikaMaturitaMazanecMazivoMazlitMazurkaMdlobaMechanikMeditaceMedovinaMelasaMelounMentolkaMetlaMetodaMetrMezeraMigraceMihnoutMihuleMikinaMikrofonMilenecMilimetrMilostMimikaMincovnaMinibarMinometMinulostMiskaMistrMixovatMladostMlhaMlhovinaMlokMlsatMluvitMnichMnohemMobilMocnostModelkaModlitbaMohylaMokroMolekulaMomentkaMonarchaMonoklMonstrumMontovatMonzunMosazMoskytMostMotivaceMotorkaMotykaMouchaMoudrostMozaikaMozekMozolMramorMravenecMrkevMrtvolaMrzetMrzutostMstitelMudrcMuflonMulatMumieMuniceMusetMutaceMuzeumMuzikantMyslivecMzdaNabouratNachytatNadaceNadbytekNadhozNadobroNadpisNahlasNahnatNahodileNahraditNaivitaNajednouNajistoNajmoutNaklonitNakonecNakrmitNalevoNamazatNamluvitNanometrNaokoNaopakNaostroNapadatNapevnoNaplnitNapnoutNaposledNaprostoNaroditNarubyNarychloNasaditNasekatNaslepoNastatNatolikNavenekNavrchNavzdoryNazvatNebeNechatNeckyNedalekoNedbatNeduhNegaceNehetNehodaNejenNejprveNeklidNelibostNemilostNemocNeochotaNeonkaNepokojNerostNervNesmyslNesouladNetvorNeuronNevinaNezvykleNicotaNijakNikamNikdyNiklNikterakNitroNoclehNohaviceNominaceNoraNorekNositelNosnostNouzeNovinyNovotaNozdraNudaNudleNugetNutitNutnostNutrieNymfaObalObarvitObavaObdivObecObehnatObejmoutObezitaObhajobaObilniceObjasnitObjektObklopitOblastOblekOblibaOblohaObludaObnosObohatitObojekOboutObrazecObrnaObrubaObrysObsahObsluhaObstaratObuvObvazObvinitObvodObvykleObyvatelObzorOcasOcelOcenitOchladitOchotaOchranaOcitnoutOdbojOdbytOdchodOdcizitOdebratOdeslatOdevzdatOdezvaOdhadceOdhoditOdjetOdjinudOdkazOdkoupitOdlivOdlukaOdmlkaOdolnostOdpadOdpisOdploutOdporOdpustitOdpykatOdrazkaOdsouditOdstupOdsunOdtokOdtudOdvahaOdvetaOdvolatOdvracetOdznakOfinaOfsajdOhlasOhniskoOhradaOhrozitOhryzekOkapOkeniceOklikaOknoOkouzlitOkovyOkrasaOkresOkrsekOkruhOkupantOkurkaOkusitOlejninaOlizovatOmakOmeletaOmezitOmladinaOmlouvatOmluvaOmylOnehdyOpakovatOpasekOperaceOpiceOpilostOpisovatOporaOpoziceOpravduOprotiOrbitalOrchestrOrgieOrliceOrlojOrtelOsadaOschnoutOsikaOsivoOslavaOslepitOslnitOslovitOsnovaOsobaOsolitOspalecOstenOstrahaOstudaOstychOsvojitOteplitOtiskOtopOtrhatOtrlostOtrokOtrubyOtvorOvanoutOvarOvesOvlivnitOvoceOxidOzdobaPachatelPacientPadouchPahorekPaktPalandaPalecPalivoPalubaPamfletPamlsekPanenkaPanikaPannaPanovatPanstvoPantoflePaprikaParketaParodiePartaParukaParybaPasekaPasivitaPastelkaPatentPatronaPavoukPaznehtPazourekPeckaPedagogPejsekPekloPelotonPenaltaPendrekPenzePeriskopPeroPestrostPetardaPeticePetrolejPevninaPexesoPianistaPihaPijavicePiklePiknikPilinaPilnostPilulkaPinzetaPipetaPisatelPistolePitevnaPivnicePivovarPlacentaPlakatPlamenPlanetaPlastikaPlatitPlavidloPlazPlechPlemenoPlentaPlesPletivoPlevelPlivatPlnitPlnoPlochaPlodinaPlombaPloutPlukPlynPobavitPobytPochodPocitPoctivecPodatPodcenitPodepsatPodhledPodivitPodkladPodmanitPodnikPodobaPodporaPodrazPodstataPodvodPodzimPoeziePohankaPohnutkaPohovorPohromaPohybPointaPojistkaPojmoutPokazitPoklesPokojPokrokPokutaPokynPolednePolibekPolknoutPolohaPolynomPomaluPominoutPomlkaPomocPomstaPomysletPonechatPonorkaPonurostPopadatPopelPopisekPoplachPoprositPopsatPopudPoradcePorcePorodPoruchaPoryvPosaditPosedPosilaPoskokPoslanecPosouditPospoluPostavaPosudekPosypPotahPotkanPotleskPotomekPotravaPotupaPotvoraPoukazPoutoPouzdroPovahaPovidlaPovlakPovozPovrchPovstatPovykPovzdechPozdravPozemekPoznatekPozorPozvatPracovatPrahoryPraktikaPralesPraotecPraporekPrasePravdaPrincipPrknoProbuditProcentoProdejProfeseProhraProjektProlomitPromilePronikatPropadProrokProsbaProtonProutekProvazPrskavkaPrstenPrudkostPrutPrvekPrvohoryPsanecPsovodPstruhPtactvoPubertaPuchPudlPukavecPuklinaPukrlePultPumpaPuncPupenPusaPusinkaPustinaPutovatPutykaPyramidaPyskPytelRacekRachotRadiaceRadniceRadonRaftRagbyRaketaRakovinaRamenoRampouchRandeRarachRaritaRasovnaRastrRatolestRazanceRazidloReagovatReakceReceptRedaktorReferentReflexRejnokReklamaRekordRekrutRektorReputaceRevizeRevmaRevolverRezervaRiskovatRizikoRobotikaRodokmenRohovkaRokleRokokoRomanetoRopovodRopuchaRorejsRosolRostlinaRotmistrRotopedRotundaRoubenkaRouchoRoupRouraRovinaRovniceRozborRozchodRozdatRozeznatRozhodceRozinkaRozjezdRozkazRozlohaRozmarRozpadRozruchRozsahRoztokRozumRozvodRubrikaRuchadloRukaviceRukopisRybaRybolovRychlostRydloRypadloRytinaRyzostSadistaSahatSakoSamecSamizdatSamotaSanitkaSardinkaSasankaSatelitSazbaSazeniceSborSchovatSebrankaSeceseSedadloSedimentSedloSehnatSejmoutSekeraSektaSekundaSekvojeSemenoSenoServisSesaditSeshoraSeskokSeslatSestraSesuvSesypatSetbaSetinaSetkatSetnoutSetrvatSeverSeznamShodaShrnoutSifonSilniceSirkaSirotekSirupSituaceSkafandrSkaliskoSkanzenSkautSkeptikSkicaSkladbaSkleniceSkloSkluzSkobaSkokanSkoroSkriptaSkrzSkupinaSkvostSkvrnaSlabikaSladidloSlaninaSlastSlavnostSledovatSlepecSlevaSlezinaSlibSlinaSlizniceSlonSloupekSlovoSluchSluhaSlunceSlupkaSlzaSmaragdSmetanaSmilstvoSmlouvaSmogSmradSmrkSmrtkaSmutekSmyslSnadSnahaSnobSobotaSochaSodovkaSokolSopkaSotvaSoubojSoucitSoudceSouhlasSouladSoumrakSoupravaSousedSoutokSouvisetSpalovnaSpasitelSpisSplavSpodekSpojenecSpoluSponzorSpornostSpoustaSprchaSpustitSrandaSrazSrdceSrnaSrnecSrovnatSrpenSrstSrubStaniceStarostaStatikaStavbaStehnoStezkaStodolaStolekStopaStornoStoupatStrachStresStrhnoutStromStrunaStudnaStupniceStvolStykSubjektSubtropySucharSudostSuknoSundatSunoutSurikataSurovinaSvahSvalstvoSvetrSvatbaSvazekSvisleSvitekSvobodaSvodidloSvorkaSvrabSykavkaSykotSynekSynovecSypatSypkostSyrovostSyselSytostTabletkaTabuleTahounTajemnoTajfunTajgaTajitTajnostTaktikaTamhleTamponTancovatTanecTankerTapetaTaveninaTazatelTechnikaTehdyTekutinaTelefonTemnotaTendenceTenistaTenorTeplotaTepnaTeprveTerapieTermoskaTextilTichoTiskopisTitulekTkadlecTkaninaTlapkaTleskatTlukotTlupaTmelToaletaTopinkaTopolTorzoTouhaToulecTradiceTraktorTrampTrasaTraverzaTrefitTrestTrezorTrhavinaTrhlinaTrochuTrojiceTroskaTroubaTrpceTrpitelTrpkostTrubecTruchlitTruhliceTrusTrvatTudyTuhnoutTuhostTundraTuristaTurnajTuzemskoTvarohTvorbaTvrdostTvrzTygrTykevUbohostUbozeUbratUbrousekUbrusUbytovnaUchoUctivostUdivitUhraditUjednatUjistitUjmoutUkazatelUklidnitUklonitUkotvitUkrojitUliceUlitaUlovitUmyvadloUnavitUniformaUniknoutUpadnoutUplatnitUplynoutUpoutatUpravitUranUrazitUsednoutUsilovatUsmrtitUsnadnitUsnoutUsouditUstlatUstrnoutUtahovatUtkatUtlumitUtonoutUtopenecUtrousitUvalitUvolnitUvozovkaUzdravitUzelUzeninaUzlinaUznatVagonValchaValounVanaVandalVanilkaVaranVarhanyVarovatVcelkuVchodVdovaVedroVegetaceVejceVelbloudVeletrhVelitelVelmocVelrybaVenkovVerandaVerzeVeselkaVeskrzeVesniceVespoduVestaVeterinaVeverkaVibraceVichrVideohraVidinaVidleVilaViniceVisetVitalitaVizeVizitkaVjezdVkladVkusVlajkaVlakVlasecVlevoVlhkostVlivVlnovkaVloupatVnucovatVnukVodaVodivostVodoznakVodstvoVojenskyVojnaVojskoVolantVolbaVolitVolnoVoskovkaVozidloVozovnaVpravoVrabecVracetVrahVrataVrbaVrcholekVrhatVrstvaVrtuleVsaditVstoupitVstupVtipVybavitVybratVychovatVydatVydraVyfotitVyhledatVyhnoutVyhoditVyhraditVyhubitVyjasnitVyjetVyjmoutVyklopitVykonatVylekatVymazatVymezitVymizetVymysletVynechatVynikatVynutitVypadatVyplatitVypravitVypustitVyrazitVyrovnatVyrvatVyslovitVysokoVystavitVysunoutVysypatVytasitVytesatVytratitVyvinoutVyvolatVyvrhelVyzdobitVyznatVzaduVzbuditVzchopitVzdorVzduchVzdychatVzestupVzhledemVzkazVzlykatVznikVzorekVzpouraVztahVztekXylofonZabratZabydletZachovatZadarmoZadusitZafoukatZahltitZahoditZahradaZahynoutZajatecZajetZajistitZaklepatZakoupitZalepitZamezitZamotatZamysletZanechatZanikatZaplatitZapojitZapsatZarazitZastavitZasunoutZatajitZatemnitZatknoutZaujmoutZavalitZaveletZavinitZavolatZavrtatZazvonitZbavitZbrusuZbudovatZbytekZdalekaZdarmaZdatnostZdivoZdobitZdrojZdvihZdymadloZeleninaZemanZeminaZeptatZezaduZezdolaZhatitZhltnoutZhlubokaZhotovitZhrubaZimaZimniceZjemnitZklamatZkoumatZkratkaZkumavkaZlatoZlehkaZlobaZlomZlostZlozvykZmapovatZmarZmatekZmijeZmizetZmocnitZmodratZmrzlinaZmutovatZnakZnalostZnamenatZnovuZobrazitZotavitZoubekZoufaleZploditZpomalitZpravaZprostitZprudkaZprvuZradaZranitZrcadloZrnitostZrnoZrovnaZrychlitZrzavostZtichaZtratitZubovinaZubrZvednoutZvenkuZveselaZvonZvratZvukovodZvyk"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")),
                    "0x25f44555f4af25b51a711136e1c7d6e50ce9f8917d39d6b1f076b2bb4d2fac1a" !== o.Wordlist.check(e))
                  )
                    throw ((i = null), new Error("BIP39 Wordlist for en (English) FAILED"));
                }
                var l = new ((function (e) {
                  function t() {
                    return e.call(this, "cz") || this;
                  }
                  return (
                    r(t, e),
                    (t.prototype.getWord = function (e) {
                      return s(this), i[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return s(this), i.indexOf(e);
                    }),
                    t
                  );
                })(o.Wordlist))();
                (a.langCz = l), o.Wordlist.register(l);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-cz.js" }
    ],
    [
      5040,
      { "./send-row-error-message": 5037, "prop-types": 3450, react: 3690 },
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
                  })(e("react")),
                  r = i(e("prop-types")),
                  o = i(e("./send-row-error-message"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (s = function (e) {
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
                class c extends n.Component {
                  renderAmountFormRow() {
                    const { children: e, errorType: t = "", label: a, showError: r = !1 } = this.props,
                      i = Array.isArray(e) ? e[1] || e[0] : e,
                      s = e.length > 1 ? e[0] : null;
                    return n.default.createElement(
                      "div",
                      { className: "send-v2__form-row" },
                      n.default.createElement("div", { className: "send-v2__form-label" }, a, s),
                      n.default.createElement(
                        "div",
                        { className: "send-v2__form-field-container" },
                        n.default.createElement("div", { className: "send-v2__form-field" }, i),
                        n.default.createElement("div", null, r ? n.default.createElement(o.default, { errorType: t }) : null)
                      )
                    );
                  }
                  renderFormRow() {
                    const { children: e, errorType: t = "", label: a, showError: r = !1 } = this.props,
                      i = Array.isArray(e) ? e[1] || e[0] : e,
                      s = (Array.isArray(e) && e.length) > 1 ? e[0] : null;
                    return n.default.createElement(
                      "div",
                      { className: "send-v2__form-row" },
                      n.default.createElement(
                        "div",
                        { className: "send-v2__form-label" },
                        a,
                        r ? n.default.createElement(o.default, { errorType: t }) : null,
                        s
                      ),
                      n.default.createElement("div", { className: "send-v2__form-field" }, i)
                    );
                  }
                  render() {
                    const { errorType: e = "" } = this.props;
                    return "amount" === e ? this.renderAmountFormRow() : this.renderFormRow();
                  }
                }
                (a.default = c),
                  l(c, "propTypes", {
                    children: r.default.node,
                    errorType: r.default.string,
                    label: r.default.string,
                    showError: r.default.bool
                  }),
                  l(c, "contextTypes", { t: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/send-row-wrapper.component.js" }
    ],
    [
      5041,
      { "./send-footer.container": 5043 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-footer.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-footer/index.js" }
    ],
    [
      5042,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../components/ui/page-container/page-container-footer": 4694,
        "../../../ducks/send": 4765,
        "../../../helpers/constants/routes": 4776,
        "../send.constants": 5046,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = d(e("prop-types")),
                  o = e("lodash"),
                  i = d(e("../../../components/ui/page-container/page-container-footer")),
                  s = e("../../../helpers/constants/routes"),
                  l = e("../../../../shared/constants/metametrics"),
                  c = e("../../../ducks/send"),
                  u = e("../send.constants");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (p = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function f(e, t, a) {
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
                class m extends n.Component {
                  onCancel() {
                    const {
                      cancelTx: e,
                      draftTransactionID: t,
                      history: a,
                      mostRecentOverviewPage: n,
                      resetSendState: r,
                      sendStage: o
                    } = this.props;
                    t && e({ id: t }), r();
                    const i = o === c.SEND_STAGES.EDIT ? s.DEFAULT_ROUTE : n;
                    a.push(i);
                  }
                  async onSubmit(e) {
                    e.preventDefault();
                    const { sign: t, history: a } = this.props,
                      { trackEvent: n } = this.context,
                      r = t();
                    Promise.resolve(r).then(() => {
                      n({
                        category: l.MetaMetricsEventCategory.Transactions,
                        event: "Complete",
                        properties: { action: "Edit Screen", legacy_event: !0 }
                      }),
                        a.push(s.CONFIRM_TRANSACTION_ROUTE);
                    });
                  }
                  componentDidUpdate(e) {
                    const { sendErrors: t } = this.props,
                      { trackEvent: a } = this.context;
                    if (Object.keys(t).length > 0 && !1 === (0, o.isEqual)(t, e.sendErrors)) {
                      const e = Object.keys(t).find((e) => t[e]),
                        n = t[e];
                      a({
                        category: l.MetaMetricsEventCategory.Transactions,
                        event: "Error",
                        properties: { action: "Edit Screen", legacy_event: !0, errorField: e, errorMessage: n }
                      });
                    }
                  }
                  render() {
                    const { t: e } = this.context,
                      { sendStage: t, sendErrors: a } = this.props;
                    return n.default.createElement(i.default, {
                      onCancel: () => this.onCancel(),
                      onSubmit: (e) => this.onSubmit(e),
                      disabled: this.props.disabled && a.gasFee !== u.INSUFFICIENT_FUNDS_ERROR,
                      cancelText: t === c.SEND_STAGES.EDIT ? e("reject") : e("cancel")
                    });
                  }
                }
                (a.default = m),
                  f(m, "propTypes", {
                    resetSendState: r.default.func,
                    disabled: r.default.bool.isRequired,
                    history: r.default.object,
                    sign: r.default.func,
                    sendStage: r.default.string,
                    sendErrors: r.default.object,
                    mostRecentOverviewPage: r.default.string.isRequired,
                    cancelTx: r.default.func,
                    draftTransactionID: r.default.string
                  }),
                  f(m, "contextTypes", { t: r.default.func, trackEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-footer/send-footer.component.js" }
    ],
    [
      5043,
      {
        "../../../ducks/history/history": 4760,
        "../../../ducks/metamask/metamask": 4763,
        "../../../ducks/send": 4765,
        "../../../store/actions": 5204,
        "./send-footer.component": 5042,
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
                  r = e("react-redux"),
                  o = e("../../../store/actions"),
                  i = e("../../../ducks/send"),
                  s = e("../../../ducks/history/history"),
                  l = e("../../../ducks/metamask/metamask"),
                  c = (n = e("./send-footer.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(
                  function (e) {
                    return {
                      disabled: (0, i.isSendFormInvalid)(e),
                      to: (0, i.getSendTo)(e),
                      toAccounts: (0, l.getSendToAccounts)(e),
                      sendStage: (0, i.getSendStage)(e),
                      sendErrors: (0, i.getSendErrors)(e),
                      draftTransactionID: (0, i.getDraftTransactionID)(e),
                      mostRecentOverviewPage: (0, s.getMostRecentOverviewPage)(e)
                    };
                  },
                  function (e) {
                    return {
                      resetSendState: () => e((0, i.resetSendState)()),
                      cancelTx: (t) => e((0, o.cancelTx)(t)),
                      sign: () => e((0, i.signTransaction)())
                    };
                  }
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-footer/send-footer.container.js" }
    ],
    [
      5044,
      { "./send-header.component": 5045 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./send-header.component")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-header/index.js" }
    ],
    [
      5045,
      {
        "../../../../shared/constants/transaction": 3974,
        "../../../components/ui/page-container/page-container-header": 4696,
        "../../../ducks/history/history": 4760,
        "../../../ducks/send": 4765,
        "../../../hooks/useI18nContext": 4837,
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
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    const e = (0, r.useHistory)(),
                      t = (0, o.useSelector)(s.getMostRecentOverviewPage),
                      a = (0, o.useDispatch)(),
                      d = (0, o.useSelector)(c.getSendStage),
                      p = (0, o.useSelector)(c.getSendAsset),
                      f = (0, l.useI18nContext)(),
                      m = (0, o.useSelector)(c.getDraftTransactionExists);
                    let g = (null == p ? void 0 : p.type) === u.AssetType.native ? f("send") : f("sendTokens");
                    !1 === m || [c.SEND_STAGES.ADD_RECIPIENT, c.SEND_STAGES.INACTIVE].includes(d)
                      ? (g = f("sendTo"))
                      : d === c.SEND_STAGES.EDIT && (g = f("edit"));
                    return n.default.createElement(i.default, {
                      className: "send__header",
                      onClose: () => {
                        a((0, c.resetSendState)()), e.push(t);
                      },
                      title: g,
                      headerCloseText: d === c.SEND_STAGES.EDIT ? f("cancelEdit") : f("cancel"),
                      hideClose: d === c.SEND_STAGES.DRAFT
                    });
                  });
                var n = d(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  i = d(e("../../../components/ui/page-container/page-container-header")),
                  s = e("../../../ducks/history/history"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../ducks/send"),
                  u = e("../../../../shared/constants/transaction");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-header/send-header.component.js" }
    ],
    [
      5046,
      { "../../../shared/constants/common": 3955, "../../../shared/constants/gas": 3957, "../../../shared/modules/Numeric": 3984 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.TOKEN_TRANSFER_FUNCTION_SIGNATURE =
                    a.REQUIRED_ERROR =
                    a.RECIPIENT_TYPES =
                    a.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE =
                    a.NEGATIVE_ETH_ERROR =
                    a.MIN_GAS_TOTAL =
                    a.MIN_GAS_PRICE_HEX =
                    a.MIN_GAS_PRICE_GWEI =
                    a.MIN_GAS_PRICE_DEC =
                    a.MIN_GAS_LIMIT_DEC =
                    a.MAX_GAS_LIMIT_DEC =
                    a.KNOWN_RECIPIENT_ADDRESS_WARNING =
                    a.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR =
                    a.INVALID_RECIPIENT_ADDRESS_ERROR =
                    a.INSUFFICIENT_TOKENS_ERROR =
                    a.INSUFFICIENT_FUNDS_FOR_GAS_ERROR =
                    a.INSUFFICIENT_FUNDS_ERROR =
                    a.HIGH_FEE_WARNING_MULTIPLIER =
                    a.ENS_UNKNOWN_ERROR =
                    a.ENS_REGISTRATION_ERROR =
                    a.ENS_NO_ADDRESS_FOR_NAME =
                    a.ENS_NOT_FOUND_ON_NETWORK =
                    a.ENS_ILLEGAL_CHARACTER =
                    a.DOMAIN_NOT_SUPPORTED_ON_NETWORK =
                    a.CONTRACT_ADDRESS_ERROR =
                    a.CONFUSING_ENS_ERROR =
                      void 0);
                var n = e("../../../shared/constants/gas"),
                  r = e("../../../shared/modules/Numeric"),
                  o = e("../../../shared/constants/common");
                const i = (a.MIN_GAS_PRICE_DEC = "0"),
                  s = (a.MIN_GAS_PRICE_HEX = parseInt(i, 10).toString(16));
                (a.MIN_GAS_LIMIT_DEC = new r.Numeric("21000", 10)),
                  (a.MAX_GAS_LIMIT_DEC = "7920027"),
                  (a.HIGH_FEE_WARNING_MULTIPLIER = 1.5),
                  (a.MIN_GAS_PRICE_GWEI = new r.Numeric(s, 16, o.EtherDenomination.WEI)
                    .toDenomination(o.EtherDenomination.GWEI)
                    .round(1)
                    .toPrefixedHexString()),
                  (a.MIN_GAS_TOTAL = new r.Numeric(n.MIN_GAS_LIMIT_HEX, 16)
                    .times(new r.Numeric(s, 16, o.EtherDenomination.WEI))
                    .toPrefixedHexString()),
                  (a.TOKEN_TRANSFER_FUNCTION_SIGNATURE = "0xa9059cbb"),
                  (a.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE = "0x23b872dd"),
                  (a.INSUFFICIENT_FUNDS_ERROR = "insufficientFunds"),
                  (a.INSUFFICIENT_FUNDS_FOR_GAS_ERROR = "insufficientFundsForGas"),
                  (a.INSUFFICIENT_TOKENS_ERROR = "insufficientTokens"),
                  (a.NEGATIVE_ETH_ERROR = "negativeETH"),
                  (a.INVALID_RECIPIENT_ADDRESS_ERROR = "invalidAddressRecipient"),
                  (a.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR = "invalidAddressRecipientNotEthNetwork"),
                  (a.REQUIRED_ERROR = "required"),
                  (a.KNOWN_RECIPIENT_ADDRESS_WARNING = "knownAddressRecipient"),
                  (a.CONTRACT_ADDRESS_ERROR = "contractAddressError"),
                  (a.CONFUSING_ENS_ERROR = "confusingEnsDomain"),
                  (a.ENS_NO_ADDRESS_FOR_NAME = "noAddressForName"),
                  (a.ENS_NOT_FOUND_ON_NETWORK = "ensNotFoundOnCurrentNetwork"),
                  (a.ENS_ILLEGAL_CHARACTER = "ensIllegalCharacter"),
                  (a.ENS_UNKNOWN_ERROR = "ensUnknownError"),
                  (a.ENS_REGISTRATION_ERROR = "ensRegistrationError"),
                  (a.DOMAIN_NOT_SUPPORTED_ON_NETWORK = "domainNotSupportedOnNetwork"),
                  (a.RECIPIENT_TYPES = { SMART_CONTRACT: "SMART_CONTRACT", NON_CONTRACT: "NON_CONTRACT" });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send.constants.js" }
    ],
    [
      5047,
      {
        "../../../shared/constants/metametrics": 3962,
        "../../../shared/constants/transaction": 3974,
        "../../contexts/metametrics": 4749,
        "../../ducks/metamask/metamask": 4763,
        "../../ducks/send": 4765,
        "../../selectors": 5197,
        "../../store/actions": 5204,
        "./send-content": 5019,
        "./send-content/add-recipient": 5018,
        "./send-content/add-recipient/domain-input": 5017,
        "./send-footer": 5041,
        "./send-header": 5044,
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
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.default = function () {
                    const e = (0, o.useHistory)(),
                      t = (0, n.useRef)(!1),
                      a = (0, r.useSelector)(i.getSendStage),
                      s = (0, r.useSelector)(y),
                      v = (0, r.useSelector)(i.getIsUsingMyAccountForRecipientSearch),
                      T = (0, r.useSelector)(i.getRecipient),
                      _ = (0, r.useSelector)(l.getSendHexDataFeatureFlagState),
                      E = (0, r.useSelector)(i.getRecipientUserInput),
                      S = (0, r.useSelector)(i.getDraftTransactionExists),
                      C = (0, o.useLocation)(),
                      k = (0, n.useContext)(u.MetaMetricsContext),
                      A = (0, r.useDispatch)(),
                      M = (0, n.useCallback)(() => {
                        A((0, i.resetSendState)());
                      }, [A]);
                    let O;
                    (0, n.useEffect)(() => {
                      !1 === S && !1 === t.current && ((t.current = !0), A((0, i.startNewDraftTransaction)({ type: p.AssetType.native })));
                    }, [S, A]),
                      (0, n.useEffect)(() => {
                        window.addEventListener("beforeunload", M);
                      }, [M]),
                      (0, n.useEffect)(() => {
                        if ("?scan=true" === C.search) {
                          A((0, c.showQrScanner)());
                          const e = window.location.href.split("?")[0];
                          window.history.pushState({}, null, `${e}`), (window.location.hash = "#send");
                        }
                      }, [C, A]),
                      (0, n.useEffect)(
                        () => () => {
                          A((0, i.resetSendState)()), window.removeEventListener("beforeunload", M);
                        },
                        [A, M]
                      ),
                      (O =
                        S && [i.SEND_STAGES.EDIT, i.SEND_STAGES.DRAFT].includes(a)
                          ? n.default.createElement(
                              n.default.Fragment,
                              null,
                              n.default.createElement(g.default, { showHexData: _, gasIsExcessive: s }),
                              n.default.createElement(h.default, { key: "send-footer", history: e })
                            )
                          : n.default.createElement(m.default, null));
                    return n.default.createElement(
                      "div",
                      { className: "page-container" },
                      n.default.createElement(f.default, { history: e }),
                      n.default.createElement(b.default, {
                        userInput: E,
                        className: "send__to-row",
                        onChange: (e) => A((0, i.updateRecipientUserInput)(e)),
                        onValidAddressTyped: async (e) => {
                          A((0, i.addHistoryEntry)(`sendFlow - Valid address typed ${e}`)),
                            await A((0, i.updateRecipientUserInput)(e)),
                            A((0, i.updateRecipient)({ address: e, nickname: "" }));
                        },
                        internalSearch: v,
                        selectedAddress: T.address,
                        selectedName: T.nickname,
                        onPaste: (e) => {
                          A((0, i.addHistoryEntry)(`sendFlow - User pasted ${e} into address field`));
                        },
                        onReset: () => A((0, i.resetRecipientInput)()),
                        scanQrCode: () => {
                          k({
                            event: "Used QR scanner",
                            category: d.MetaMetricsEventCategory.Transactions,
                            properties: { action: "Edit Screen", legacy_event: !0 }
                          }),
                            A((0, c.showQrScanner)());
                        }
                      }),
                      O
                    );
                  });
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = T(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../ducks/send"),
                  s = e("../../selectors"),
                  l = e("../../ducks/metamask/metamask"),
                  c = e("../../store/actions"),
                  u = e("../../contexts/metametrics"),
                  d = e("../../../shared/constants/metametrics"),
                  p = e("../../../shared/constants/transaction"),
                  f = v(e("./send-header")),
                  m = v(e("./send-content/add-recipient")),
                  g = v(e("./send-content")),
                  h = v(e("./send-footer")),
                  b = v(e("./send-content/add-recipient/domain-input"));
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (T = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const y = (e) => (0, s.isCustomPriceExcessive)(e, !0);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send.js" }
    ],
    [
      5048,
      {
        "../../../app/scripts/lib/util": 82,
        "../../../shared/constants/transaction": 3974,
        "../../../shared/modules/Numeric": 3984,
        "./send.constants": 5046,
        "ethereumjs-abi": 2669
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  (a.addGasBuffer = function (e, t, a = 1.5) {
                    const n = new s.Numeric(e, 16),
                      r = new s.Numeric(t, 16).times(new s.Numeric(0.9, 10)).round(0),
                      o = n.times(new s.Numeric(a, 10)).round(0);
                    if (n.greaterThanOrEqualTo(r)) return e;
                    if (o.lessThan(r)) return o.toString();
                    return r.toString();
                  }),
                  (a.ellipsify = function (e, t = 6, a = 4) {
                    if (!e) return "";
                    return `${e.slice(0, t)}...${e.slice(-a)}`;
                  }),
                  (a.generateERC20TransferData = c),
                  (a.generateERC721TransferData = u),
                  (a.getAssetTransferData = function ({ sendToken: e, fromAddress: t, toAddress: a, amount: n }) {
                    switch (e.standard) {
                      case i.TokenStandard.ERC721:
                        return u({ toAddress: a, fromAddress: t, tokenId: e.tokenId });
                      case i.TokenStandard.ERC20:
                      default:
                        return c({ toAddress: a, amount: n, sendToken: e });
                    }
                  }),
                  (a.isBalanceSufficient = function ({
                    amount: e = "0x0",
                    balance: t = "0x0",
                    conversionRate: a = 1,
                    gasTotal: n = "0x0",
                    primaryCurrency: r
                  }) {
                    let o = new s.Numeric(e, 16).add(new s.Numeric(n, 16)),
                      i = new s.Numeric(t, 16);
                    null != r && ((o = o.applyConversionRate(a)), (i = i.applyConversionRate(a)));
                    return i.greaterThanOrEqualTo(o);
                  }),
                  (a.isTokenBalanceSufficient = function ({ amount: e = "0x0", tokenBalance: t, decimals: a }) {
                    const n = new s.Numeric(e, 16).shiftedBy(a);
                    return new s.Numeric(t, 16).greaterThanOrEqualTo(n);
                  });
                var n,
                  r = (n = e("ethereumjs-abi")) && n.__esModule ? n : { default: n },
                  o = e("../../../app/scripts/lib/util"),
                  i = e("../../../shared/constants/transaction"),
                  s = e("../../../shared/modules/Numeric"),
                  l = e("./send.constants");
                function c({ toAddress: e = "0x0", amount: t = "0x0", sendToken: a }) {
                  return a
                    ? l.TOKEN_TRANSFER_FUNCTION_SIGNATURE +
                        Array.prototype.map
                          .call(r.default.rawEncode(["address", "uint256"], [(0, o.addHexPrefix)(e), (0, o.addHexPrefix)(t)]), (e) =>
                            `00${e.toString(16)}`.slice(-2)
                          )
                          .join("")
                    : undefined;
                }
                function u({ toAddress: e = "0x0", fromAddress: t = "0x0", tokenId: a }) {
                  return a
                    ? l.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE +
                        Array.prototype.map
                          .call(
                            r.default.rawEncode(["address", "address", "uint256"], [(0, o.addHexPrefix)(t), (0, o.addHexPrefix)(e), a]),
                            (e) => `00${e.toString(16)}`.slice(-2)
                          )
                          .join("")
                    : undefined;
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send.utils.js" }
    ],
    [
      5049,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/preferences": 3965,
        "../../../components/component-library": 4453,
        "../../../components/ui/button": 4611,
        "../../../components/ui/text-field": 4725,
        "../../../components/ui/toggle-button": 4729,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/export-utils": 4795,
        "../../../helpers/utils/settings-search": 4808,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = g(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("../../../../shared/constants/metametrics"),
                  i = e("../../../../shared/constants/preferences"),
                  s = e("../../../components/component-library"),
                  l = g(e("../../../components/ui/button")),
                  c = g(e("../../../components/ui/text-field")),
                  u = g(e("../../../components/ui/toggle-button")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../helpers/utils/export-utils"),
                  f = e("../../../helpers/utils/settings-search");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (m = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e, t, a) {
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
                const b = "CORRUPT_JSON_FILE";
                class v extends r.PureComponent {
                  constructor(...e) {
                    super(...e),
                      h(this, "state", {
                        autoLockTimeLimit: this.props.autoLockTimeLimit,
                        autoLockTimeLimitBeforeNormalization: this.props.autoLockTimeLimit,
                        lockTimeError: "",
                        showResultMessage: !1,
                        restoreSuccessful: !0,
                        restoreMessage: null
                      }),
                      h(
                        this,
                        "settingsRefs",
                        Array((0, f.getNumberOfSettingsInSection)(this.context.t, this.context.t("advanced")))
                          .fill(undefined)
                          .map(() => r.default.createRef())
                      ),
                      h(this, "backupUserData", async () => {
                        const { fileName: e, data: t } = await this.props.backupUserData();
                        (0, p.exportAsFile)(e, t, p.ExportableContentType.JSON),
                          this.context.trackEvent({ event: "User Data Exported", category: "Backup", properties: {} });
                      });
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, f.handleSettingsRefs)(e, e("advanced"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, f.handleSettingsRefs)(e, e("advanced"), this.settingsRefs);
                  }
                  async getTextFromFile(e) {
                    return new Promise((t, a) => {
                      const n = new window.FileReader();
                      (n.onload = (e) => {
                        const a = e.target.result;
                        t(a);
                      }),
                        (n.onerror = (e) => {
                          a(e);
                        }),
                        n.readAsText(e);
                    });
                  }
                  async handleFileUpload(e) {
                    e.persist();
                    const t = e.target.files[0],
                      a = await this.getTextFromFile(t);
                    e.target.value = "";
                    try {
                      const e = await this.props.restoreUserData(a);
                      this.setState({ showResultMessage: !0, restoreSuccessful: e, restoreMessage: null });
                    } catch (e) {
                      e.message.match(/Unexpected.+JSON/iu) &&
                        this.setState({ showResultMessage: !0, restoreSuccessful: !1, restoreMessage: b });
                    }
                  }
                  renderStateLogs() {
                    const { t: e } = this.context,
                      { displayWarning: t } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        className: "settings-page__content-row",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column,
                        ref: this.settingsRefs[0],
                        "data-testid": "advanced-setting-state-logs"
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("stateLogs")),
                        r.default.createElement("span", { className: "settings-page__content-description" }, e("stateLogsDescription"))
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(
                            l.default,
                            {
                              type: "secondary",
                              large: !0,
                              onClick: () => {
                                window.logStateString((a, n) => {
                                  a
                                    ? t(e("stateLogError"))
                                    : (0, p.exportAsFile)(`${e("stateLogFileName")}.json`, n, p.ExportableContentType.JSON);
                                });
                              }
                            },
                            e("downloadStateLogs")
                          )
                        )
                      )
                    );
                  }
                  renderResetAccount() {
                    const { t: e } = this.context,
                      { showResetAccountConfirmationModal: t } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[1],
                        className: "settings-page__content-row",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column,
                        "data-testid": "advanced-setting-reset-account"
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("clearActivity")),
                        r.default.createElement("span", { className: "settings-page__content-description" }, e("clearActivityDescription"))
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(
                            l.default,
                            {
                              type: "danger",
                              large: !0,
                              className: "settings-tab__button--red",
                              onClick: (e) => {
                                e.preventDefault(),
                                  this.context.trackEvent({
                                    category: o.MetaMetricsEventCategory.Settings,
                                    event: o.MetaMetricsEventName.AccountReset,
                                    properties: {}
                                  }),
                                  t();
                              }
                            },
                            e("clearActivityButton")
                          )
                        )
                      )
                    );
                  }
                  renderHexDataOptIn() {
                    const { t: e } = this.context,
                      { sendHexData: t, setHexDataFeatureFlag: a } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[2],
                        className: "settings-page__content-row",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Row,
                        justifyContent: d.JustifyContent.spaceBetween,
                        gap: 4,
                        "data-testid": "advanced-setting-hex-data"
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("showHexData")),
                        r.default.createElement("div", { className: "settings-page__content-description" }, e("showHexDataDescription"))
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        r.default.createElement(u.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderShowConversionInTestnets() {
                    const { t: e } = this.context,
                      { showFiatInTestnets: t, setShowFiatConversionOnTestnetsPreference: a } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[3],
                        className: "settings-page__content-row",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Row,
                        justifyContent: d.JustifyContent.spaceBetween,
                        gap: 4,
                        "data-testid": "advanced-setting-show-testnet-conversion"
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("showFiatConversionInTestnets")),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("showFiatConversionInTestnetsDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        r.default.createElement(u.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderToggleTestNetworks() {
                    const { t: e } = this.context,
                      { showTestNetworks: t, setShowTestNetworks: a } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[4],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-show-testnet-conversion",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Row,
                        justifyContent: d.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("showTestnetNetworks")),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("showTestnetNetworksDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        r.default.createElement(u.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderUseNonceOptIn() {
                    const { t: e } = this.context,
                      { useNonceField: t, setUseNonceField: a } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[5],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-custom-nonce",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Row,
                        justifyContent: d.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("nonceField")),
                        r.default.createElement("div", { className: "settings-page__content-description" }, e("nonceFieldDescription"))
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        r.default.createElement(u.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderAutoLockTimeLimit() {
                    const { t: e } = this.context,
                      { lockTimeError: t } = this.state,
                      { setAutoLockTimeLimit: a } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[6],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-auto-lock",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("autoLockTimeLimit")),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("autoLockTimeLimitDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(c.default, {
                            id: "autoTimeout",
                            "data-testid": "auto-lockout-time",
                            placeholder: "0",
                            value: this.state.autoLockTimeLimitBeforeNormalization,
                            onChange: (e) => this.handleLockChange(e.target.value),
                            error: t,
                            fullWidth: !0,
                            margin: "dense",
                            min: 0
                          }),
                          r.default.createElement(
                            l.default,
                            {
                              type: "primary",
                              "data-testid": "auto-lockout-button",
                              className: "settings-tab__rpc-save-button",
                              disabled: "" !== t,
                              onClick: () => {
                                a(this.state.autoLockTimeLimit);
                              }
                            },
                            e("save")
                          )
                        )
                      )
                    );
                  }
                  renderDismissSeedBackupReminderControl() {
                    const { t: e } = this.context,
                      { dismissSeedBackUpReminder: t, setDismissSeedBackUpReminder: a } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[8],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-dismiss-reminder",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Row,
                        justifyContent: d.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("dismissReminderField")),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("dismissReminderDescriptionField")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        r.default.createElement(u.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderToggleEthSignControl() {
                    const { t: e, trackEvent: t } = this.context,
                      { disabledRpcMethodPreferences: a, showEthSignModal: n, setDisabledRpcMethodPreference: i } = this.props;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[9],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-toggle-ethsign",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("toggleEthSignField")),
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("toggleEthSignDescriptionField")
                        )
                      ),
                      null != a && a.eth_sign
                        ? r.default.createElement(
                            s.BannerAlert,
                            {
                              severity: d.Severity.Danger,
                              marginTop: 3,
                              marginBottom: 4,
                              descriptionProps: { variant: d.TextVariant.bodyMd }
                            },
                            e("toggleEthSignBannerDescription")
                          )
                        : null,
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        r.default.createElement(u.default, {
                          className: "eth-sign-toggle",
                          value: (null == a ? void 0 : a.eth_sign) || !1,
                          onToggle: (e) => {
                            e
                              ? ((e) => {
                                  i("eth_sign", !e),
                                    t({
                                      category: o.MetaMetricsEventCategory.Settings,
                                      event: o.MetaMetricsEventName.OnboardingWalletAdvancedSettings,
                                      properties: { location: "Settings", enable_eth_sign: !1 }
                                    });
                                })(e)
                              : n();
                          },
                          offLabel: e("toggleEthSignOff"),
                          onLabel: e("toggleEthSignOn")
                        })
                      )
                    );
                  }
                  handleLockChange(e) {
                    const { t: t } = this.context;
                    if ("" === e)
                      return void this.setState({
                        autoLockTimeLimitBeforeNormalization: e,
                        autoLockTimeLimit: i.DEFAULT_AUTO_LOCK_TIME_LIMIT.toString(),
                        lockTimeError: ""
                      });
                    const a = Number(e);
                    if (Number.isNaN(a) || a < 0 || a > 10080)
                      return void this.setState({
                        autoLockTimeLimitBeforeNormalization: e,
                        autoLockTimeLimit: null,
                        lockTimeError: t("lockTimeInvalid")
                      });
                    const n = a;
                    this.setState({ autoLockTimeLimitBeforeNormalization: e, autoLockTimeLimit: n, lockTimeError: "" });
                  }
                  renderUserDataBackup() {
                    const { t: e } = this.context;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[10],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-data-backup",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("backupUserData")),
                        r.default.createElement("span", { className: "settings-page__content-description" }, e("backupUserDataDescription"))
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(
                            l.default,
                            { "data-testid": "backup-button", type: "secondary", large: !0, onClick: () => this.backupUserData() },
                            e("backup")
                          )
                        )
                      )
                    );
                  }
                  renderRestoreUserData() {
                    const { t: e } = this.context,
                      { showResultMessage: t, restoreSuccessful: a, restoreMessage: n } = this.state,
                      o = e(a ? "restoreSuccessful" : "restoreFailed"),
                      i = n === b ? e("dataBackupSeemsCorrupt") : o;
                    return r.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[11],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-data-restore",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement("span", null, e("restoreUserData")),
                        r.default.createElement(
                          "span",
                          { className: "settings-page__content-description" },
                          e("restoreUserDataDescription")
                        )
                      ),
                      r.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        r.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          r.default.createElement(
                            "label",
                            {
                              htmlFor: "restore-file",
                              className: "button btn btn--rounded btn-secondary btn--large settings-page__button"
                            },
                            e("restore")
                          ),
                          r.default.createElement("input", {
                            id: "restore-file",
                            "data-testid": "restore-file",
                            style: { visibility: "hidden" },
                            type: "file",
                            accept: ".json",
                            onChange: (e) => this.handleFileUpload(e)
                          })
                        ),
                        t &&
                          r.default.createElement(s.BannerAlert, {
                            severity: a ? s.BannerAlertSeverity.Success : s.BannerAlertSeverity.Danger,
                            description: i,
                            descriptionProps: { "data-testid": "restore-user-data-banner-alert-description" },
                            actionButtonLabel: e("dismiss"),
                            actionButtonOnClick: () => {
                              this.setState({ showResultMessage: !1, restoreSuccessful: !0, restoreMessage: null });
                            }
                          })
                      )
                    );
                  }
                  render() {
                    const { warning: e } = this.props;
                    return r.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      e ? r.default.createElement("div", { className: "settings-tab__error" }, e) : null,
                      this.renderStateLogs(),
                      this.renderResetAccount(),
                      this.renderHexDataOptIn(),
                      this.renderShowConversionInTestnets(),
                      this.renderToggleTestNetworks(),
                      this.renderUseNonceOptIn(),
                      this.renderAutoLockTimeLimit(),
                      this.renderUserDataBackup(),
                      this.renderRestoreUserData(),
                      this.renderDismissSeedBackupReminderControl(),
                      this.renderToggleEthSignControl()
                    );
                  }
                }
                (a.default = v),
                  h(v, "contextTypes", { t: n.default.func, trackEvent: n.default.func }),
                  h(v, "propTypes", {
                    setUseNonceField: n.default.func,
                    useNonceField: n.default.bool,
                    setHexDataFeatureFlag: n.default.func,
                    displayWarning: n.default.func,
                    showResetAccountConfirmationModal: n.default.func,
                    showEthSignModal: n.default.func,
                    warning: n.default.string,
                    sendHexData: n.default.bool,
                    showFiatInTestnets: n.default.bool,
                    showTestNetworks: n.default.bool,
                    autoLockTimeLimit: n.default.number,
                    setAutoLockTimeLimit: n.default.func.isRequired,
                    setShowFiatConversionOnTestnetsPreference: n.default.func.isRequired,
                    setShowTestNetworks: n.default.func.isRequired,
                    setDismissSeedBackUpReminder: n.default.func.isRequired,
                    dismissSeedBackUpReminder: n.default.bool.isRequired,
                    backupUserData: n.default.func.isRequired,
                    restoreUserData: n.default.func.isRequired,
                    setDisabledRpcMethodPreference: n.default.func.isRequired,
                    disabledRpcMethodPreferences: n.default.shape({ eth_sign: n.default.bool.isRequired })
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/advanced-tab/advanced-tab.component.js" }
    ],
    [
      505,
      { "./wordlist": 512 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n,
                  r =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function a() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
                    });
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.langEn = void 0);
                var o = e("./wordlist"),
                  i = null;
                function s(e) {
                  if (
                    null == i &&
                    ((i =
                      "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")),
                    "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== o.Wordlist.check(e))
                  )
                    throw ((i = null), new Error("BIP39 Wordlist for en (English) FAILED"));
                }
                var l = new ((function (e) {
                  function t() {
                    return e.call(this, "en") || this;
                  }
                  return (
                    r(t, e),
                    (t.prototype.getWord = function (e) {
                      return s(this), i[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return s(this), i.indexOf(e);
                    }),
                    t
                  );
                })(o.Wordlist))();
                (a.langEn = l), o.Wordlist.register(l);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-en.js" }
    ],
    [
      5050,
      {
        "../../../../shared/constants/preferences": 3965,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./advanced-tab.component": 5049,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.mapStateToProps = a.mapDispatchToProps = a.default = void 0);
                var n,
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("redux"),
                  s = e("../../../../shared/constants/preferences"),
                  l = e("../../../selectors"),
                  c = e("../../../store/actions"),
                  u = (n = e("./advanced-tab.component")) && n.__esModule ? n : { default: n };
                const d = (e) => {
                  const {
                      appState: { warning: t },
                      metamask: a
                    } = e,
                    {
                      featureFlags: { sendHexData: n } = {},
                      disabledRpcMethodPreferences: r,
                      useNonceField: o,
                      dismissSeedBackUpReminder: i
                    } = a,
                    {
                      showFiatInTestnets: c,
                      showTestNetworks: u,
                      autoLockTimeLimit: d = s.DEFAULT_AUTO_LOCK_TIME_LIMIT
                    } = (0, l.getPreferences)(e);
                  return {
                    warning: t,
                    sendHexData: n,
                    showFiatInTestnets: c,
                    showTestNetworks: u,
                    autoLockTimeLimit: d,
                    useNonceField: o,
                    dismissSeedBackUpReminder: i,
                    disabledRpcMethodPreferences: r
                  };
                };
                a.mapStateToProps = d;
                const p = (e) => ({
                  backupUserData: () => (0, c.backupUserData)(),
                  restoreUserData: (e) => (0, c.restoreUserData)(e),
                  setHexDataFeatureFlag: (t) => e((0, c.setFeatureFlag)("sendHexData", t)),
                  displayWarning: (t) => e((0, c.displayWarning)(t)),
                  showResetAccountConfirmationModal: () => e((0, c.showModal)({ name: "CONFIRM_RESET_ACCOUNT" })),
                  showEthSignModal: () => e((0, c.showModal)({ name: "ETH_SIGN" })),
                  setUseNonceField: (t) => e((0, c.setUseNonceField)(t)),
                  setShowFiatConversionOnTestnetsPreference: (t) => e((0, c.setShowFiatConversionOnTestnetsPreference)(t)),
                  setShowTestNetworks: (t) => e((0, c.setShowTestNetworks)(t)),
                  setAutoLockTimeLimit: (t) => e((0, c.setAutoLockTimeLimit)(t)),
                  setDismissSeedBackUpReminder: (t) => e((0, c.setDismissSeedBackUpReminder)(t)),
                  setDisabledRpcMethodPreference: (t, a) => e((0, c.setDisabledRpcMethodPreference)(t, a))
                });
                a.mapDispatchToProps = p;
                a.default = (0, i.compose)(o.withRouter, (0, r.connect)(d, p))(u.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/advanced-tab/advanced-tab.container.js" }
    ],
    [
      5051,
      { "./advanced-tab.container": 5050 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./advanced-tab.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/advanced-tab/index.js" }
    ],
    [
      5052,
      {
        "../../../../shared/constants/alerts": 3952,
        "../../../components/component-library": 4453,
        "../../../components/ui/toggle-button": 4729,
        "../../../components/ui/tooltip": 4736,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/utils/settings-search": 4808,
        "../../../hooks/useI18nContext": 4837,
        "../../../store/actions": 5204,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = g(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = m(e("prop-types")),
                  o = e("react-redux"),
                  i = e("../../../../shared/constants/alerts"),
                  s = m(e("../../../components/ui/tooltip")),
                  l = m(e("../../../components/ui/toggle-button")),
                  c = e("../../../store/actions"),
                  u = e("../../../ducks/metamask/metamask"),
                  d = e("../../../hooks/useI18nContext"),
                  p = e("../../../helpers/utils/settings-search"),
                  f = e("../../../components/component-library");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (g = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const h = ({ alertId: e, description: t, title: a }) => {
                  const r = (0, d.useI18nContext)(),
                    i = (0, n.useRef)();
                  (0, n.useEffect)(() => {
                    (0, p.handleSettingsRefs)(r, r("alerts"), i);
                  }, [i, r]);
                  const m = (0, o.useSelector)((t) => (0, u.getAlertEnabledness)(t)[e]);
                  return n.default.createElement(
                    n.default.Fragment,
                    null,
                    n.default.createElement(
                      "div",
                      { ref: i, className: "alerts-tab__item" },
                      n.default.createElement("span", null, a),
                      n.default.createElement(
                        "div",
                        { className: "alerts-tab__description-container" },
                        n.default.createElement(
                          s.default,
                          { position: "top", title: t, wrapperClassName: "alerts-tab__description" },
                          n.default.createElement(f.Icon, { name: f.IconName.Info, className: "alerts-tab__description__icon" })
                        ),
                        n.default.createElement(l.default, {
                          offLabel: r("off"),
                          onLabel: r("on"),
                          onToggle: () => (0, c.setAlertEnabledness)(e, !m),
                          value: m
                        })
                      )
                    )
                  );
                };
                h.propTypes = {
                  alertId: r.default.string.isRequired,
                  description: r.default.string.isRequired,
                  title: r.default.string.isRequired
                };
                a.default = () => {
                  const e = (0, d.useI18nContext)(),
                    t = {
                      [i.AlertTypes.unconnectedAccount]: {
                        title: e("alertSettingsUnconnectedAccount"),
                        description: e("alertSettingsUnconnectedAccountDescription")
                      },
                      [i.AlertTypes.web3ShimUsage]: {
                        title: e("alertSettingsWeb3ShimUsage"),
                        description: e("alertSettingsWeb3ShimUsageDescription")
                      }
                    };
                  return n.default.createElement(
                    "div",
                    { className: "alerts-tab__body" },
                    Object.entries(t).map(([e, { title: t, description: a }], r) =>
                      n.default.createElement(h, { alertId: e, description: a, key: e, title: t })
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/alerts-tab/alerts-tab.js" }
    ],
    [
      5053,
      { "./alerts-tab": 5052 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./alerts-tab")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/alerts-tab/index.js" }
    ],
    [
      5054,
      {
        "../../../../../shared/modules/hexstring-utils": 3993,
        "../../../../components/ui/identicon": 4664,
        "../../../../components/ui/page-container/page-container-footer": 4694,
        "../../../../components/ui/text-field": 4725,
        "../../../../helpers/constants/routes": 4776,
        "../../../../helpers/utils/util": 4812,
        "../../../send/send-content/add-recipient/domain-input": 5017,
        "../../../send/send.constants": 5046,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = g(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = m(e("prop-types")),
                  o = e("lodash"),
                  i = m(e("../../../../components/ui/identicon")),
                  s = m(e("../../../../components/ui/text-field")),
                  l = e("../../../../helpers/constants/routes"),
                  c = e("../../../../helpers/utils/util"),
                  u = m(e("../../../send/send-content/add-recipient/domain-input")),
                  d = m(e("../../../../components/ui/page-container/page-container-footer")),
                  p = e("../../../../../shared/modules/hexstring-utils"),
                  f = e("../../../send/send.constants");
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (g = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function h(e, t, a) {
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
                class b extends n.PureComponent {
                  constructor(e) {
                    super(e),
                      h(this, "state", { newName: "", ethAddress: "", error: "", input: "" }),
                      h(this, "validate", (e) => {
                        const t = !(0, p.isBurnAddress)(e) && (0, p.isValidHexAddress)(e, { mixedCaseUseChecksum: !0 }),
                          a = (0, c.isValidDomainName)(e);
                        t || a || "" === e
                          ? this.setState({ error: "", ethAddress: e })
                          : this.setState({ error: f.INVALID_RECIPIENT_ADDRESS_ERROR });
                      }),
                      h(this, "onChange", (e) => {
                        this.setState({ input: e }), this.dValidate(e);
                      }),
                      (this.dValidate = (0, o.debounce)(this.validate, 500));
                  }
                  UNSAFE_componentWillReceiveProps(e) {
                    if (e.qrCodeData && "address" === e.qrCodeData.type) {
                      const { domainResolution: t } = this.props,
                        a = e.qrCodeData.values.address.toLowerCase();
                      (t || this.state.ethAddress).toLowerCase() !== a &&
                        (this.setState({ input: a }), this.validate(a), this.props.qrCodeDetected(null));
                    }
                  }
                  renderInput() {
                    return n.default.createElement(u.default, {
                      scanQrCode: (e) => {
                        this.props.scanQrCode();
                      },
                      onChange: this.onChange,
                      onPaste: (e) => {
                        this.setState({ input: e }), this.validate(e);
                      },
                      onReset: () => {
                        this.props.resetDomainResolution(), this.setState({ ethAddress: "", input: "" });
                      },
                      userInput: this.state.input
                    });
                  }
                  render() {
                    const { t: e } = this.context,
                      { history: t, addToAddressBook: a, domainError: r, domainResolution: o } = this.props,
                      c = r || this.state.error;
                    return n.default.createElement(
                      "div",
                      { className: "settings-page__content-row address-book__add-contact" },
                      o &&
                        n.default.createElement(
                          "div",
                          { className: "address-book__view-contact__group" },
                          n.default.createElement(i.default, { address: o, diameter: 60 }),
                          n.default.createElement("div", { className: "address-book__view-contact__group__value" }, o)
                        ),
                      n.default.createElement(
                        "div",
                        { className: "address-book__add-contact__content" },
                        n.default.createElement(
                          "div",
                          { className: "address-book__view-contact__group address-book__add-contact__content__username" },
                          n.default.createElement("div", { className: "address-book__view-contact__group__label" }, e("userName")),
                          n.default.createElement(s.default, {
                            type: "text",
                            id: "nickname",
                            value: this.state.newName,
                            onChange: (e) => this.setState({ newName: e.target.value }),
                            fullWidth: !0,
                            margin: "dense"
                          })
                        ),
                        n.default.createElement(
                          "div",
                          { className: "address-book__view-contact__group" },
                          n.default.createElement(
                            "div",
                            { className: "address-book__view-contact__group__label" },
                            e("ethereumPublicAddress")
                          ),
                          this.renderInput(),
                          c && n.default.createElement("div", { className: "address-book__add-contact__error" }, e(c))
                        )
                      ),
                      n.default.createElement(d.default, {
                        cancelText: this.context.t("cancel"),
                        disabled: Boolean(this.state.error || !this.state.ethAddress || !this.state.newName.trim()),
                        onSubmit: async () => {
                          await a(o || this.state.ethAddress, this.state.newName), t.push(l.CONTACT_LIST_ROUTE);
                        },
                        onCancel: () => {
                          t.push(l.CONTACT_LIST_ROUTE);
                        },
                        submitText: this.context.t("save")
                      })
                    );
                  }
                }
                (a.default = b),
                  h(b, "contextTypes", { t: r.default.func }),
                  h(b, "propTypes", {
                    addToAddressBook: r.default.func,
                    history: r.default.object,
                    scanQrCode: r.default.func,
                    qrCodeData: r.default.object,
                    qrCodeDetected: r.default.func,
                    domainResolution: r.default.string,
                    domainError: r.default.string,
                    resetDomainResolution: r.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/add-contact/add-contact.component.js" }
    ],
    [
      5055,
      {
        "../../../../ducks/app/app": 4755,
        "../../../../ducks/domains": 4757,
        "../../../../store/actions": 5204,
        "./add-contact.component": 5054,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("redux"),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("../../../../store/actions"),
                  l = e("../../../../ducks/app/app"),
                  c = e("../../../../ducks/domains"),
                  u = (n = e("./add-contact.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.compose)(
                  i.withRouter,
                  (0, o.connect)(
                    (e) => ({
                      qrCodeData: (0, l.getQrCodeData)(e),
                      domainError: (0, c.getDomainError)(e),
                      domainResolution: (0, c.getDomainResolution)(e)
                    }),
                    (e) => ({
                      addToAddressBook: (t, a) => e((0, s.addToAddressBook)(t, a)),
                      scanQrCode: () => e((0, s.showQrScanner)()),
                      qrCodeDetected: (t) => e((0, s.qrCodeDetected)(t)),
                      resetDomainResolution: () => e((0, c.resetDomainResolution)())
                    })
                  )
                )(u.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/add-contact/add-contact.container.js" }
    ],
    [
      5056,
      { "./add-contact.container": 5055 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./add-contact.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/add-contact/index.js" }
    ],
    [
      5057,
      {
        "../../../components/app/contact-list": 4095,
        "../../../components/component-library": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/settings-search": 4808,
        "./add-contact": 5056,
        "./edit-contact": 5061,
        "./view-contact": 5063,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
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
                    var a = g(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = m(e("prop-types")),
                  o = m(e("classnames")),
                  i = m(e("../../../components/app/contact-list")),
                  s = e("../../../helpers/constants/routes"),
                  l = e("../../../helpers/utils/settings-search"),
                  c = e("../../../components/component-library"),
                  u = e("../../../helpers/constants/design-system"),
                  d = m(e("./edit-contact")),
                  p = m(e("./add-contact")),
                  f = m(e("./view-contact"));
                function m(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function g(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (g = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function h(e, t, a) {
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
                class b extends n.Component {
                  constructor(...e) {
                    super(...e),
                      h(
                        this,
                        "settingsRefs",
                        Array((0, l.getNumberOfSettingsInSection)(this.context.t, this.context.t("contacts")))
                          .fill(undefined)
                          .map(() => n.default.createRef())
                      );
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, l.handleSettingsRefs)(e, e("contacts"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, l.handleSettingsRefs)(e, e("contacts"), this.settingsRefs);
                  }
                  renderAddresses() {
                    const { addressBook: e, history: t, selectedAddress: a } = this.props,
                      r = e.filter(({ name: e }) => Boolean(e)),
                      o = e.filter(({ name: e }) => !e),
                      { t: l } = this.context;
                    return e.length
                      ? n.default.createElement(
                          "div",
                          null,
                          n.default.createElement(i.default, {
                            searchForContacts: () => r,
                            searchForRecents: () => o,
                            selectRecipient: (e) => {
                              t.push(`${s.CONTACT_VIEW_ROUTE}/${e}`);
                            },
                            selectedAddress: a
                          })
                        )
                      : n.default.createElement(
                          "div",
                          { className: "address-book__container" },
                          n.default.createElement(
                            "div",
                            null,
                            n.default.createElement(c.Icon, {
                              name: c.IconName.Book,
                              color: u.IconColor.iconMuted,
                              className: "address-book__icon",
                              size: c.IconSize.Xl
                            }),
                            n.default.createElement("h4", { className: "address-book__title" }, l("buildContactList")),
                            n.default.createElement("p", { className: "address-book__sub-title" }, l("addFriendsAndAddresses")),
                            n.default.createElement(
                              "button",
                              {
                                className: "address-book__link",
                                onClick: () => {
                                  t.push(s.CONTACT_ADD_ROUTE);
                                }
                              },
                              "+ ",
                              l("addContact")
                            )
                          )
                        );
                  }
                  renderAddButton() {
                    const { history: e, viewingContact: t, editingContact: a } = this.props;
                    return n.default.createElement(
                      c.ButtonPrimary,
                      {
                        className: (0, o.default)("address-book-add-button__button", { "address-book-add-button__button--hidden": t || a }),
                        onClick: () => {
                          e.push(s.CONTACT_ADD_ROUTE);
                        },
                        margin: 4,
                        size: u.Size.LG
                      },
                      this.context.t("addContact")
                    );
                  }
                  renderContactContent() {
                    const { viewingContact: e, editingContact: t, addingContact: a } = this.props;
                    let r = null;
                    return (
                      e ? (r = f.default) : t ? (r = d.default) : a && (r = p.default),
                      r && n.default.createElement("div", { className: "address-book-contact-content" }, n.default.createElement(r, null))
                    );
                  }
                  renderAddressBookContent() {
                    const { hideAddressBook: e } = this.props;
                    return e
                      ? null
                      : n.default.createElement("div", { ref: this.settingsRefs[0], className: "address-book" }, this.renderAddresses());
                  }
                  render() {
                    const { addingContact: e, addressBook: t, currentPath: a } = this.props;
                    return n.default.createElement(
                      "div",
                      { className: "address-book-wrapper" },
                      this.renderAddressBookContent(),
                      this.renderContactContent(),
                      a === s.CONTACT_LIST_ROUTE && !e && t.length > 0 ? this.renderAddButton() : null
                    );
                  }
                }
                (a.default = b),
                  h(b, "contextTypes", { t: r.default.func }),
                  h(b, "propTypes", {
                    addressBook: r.default.array,
                    history: r.default.object,
                    selectedAddress: r.default.string,
                    viewingContact: r.default.bool,
                    editingContact: r.default.bool,
                    addingContact: r.default.bool,
                    hideAddressBook: r.default.bool,
                    currentPath: r.default.string
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/contact-list-tab.component.js" }
    ],
    [
      5058,
      {
        "../../../helpers/constants/routes": 4776,
        "../../../selectors": 5197,
        "./contact-list-tab.component": 5057,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("redux"),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("../../../selectors"),
                  l = e("../../../helpers/constants/routes"),
                  c = (n = e("./contact-list-tab.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.compose)(
                  i.withRouter,
                  (0, o.connect)((e, t) => {
                    const { location: a } = t,
                      { pathname: n } = a,
                      r = n.match(/[^/]+$/u)[0],
                      o = r.includes("0x"),
                      i = Boolean(n.match(l.CONTACT_VIEW_ROUTE)),
                      c = Boolean(n.match(l.CONTACT_EDIT_ROUTE)),
                      u = Boolean(n.match(l.CONTACT_ADD_ROUTE)),
                      d = i || c || u;
                    return {
                      viewingContact: i,
                      editingContact: c,
                      addingContact: u,
                      addressBook: (0, s.getAddressBook)(e),
                      selectedAddress: o ? r : "",
                      hideAddressBook: d,
                      currentPath: n
                    };
                  })
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/contact-list-tab.container.js" }
    ],
    [
      5059,
      {
        "../../../../../shared/modules/hexstring-utils": 3993,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/button/button.component": 4610,
        "../../../../components/ui/page-container/page-container-footer": 4694,
        "../../../../components/ui/text-field": 4725,
        "../../../../helpers/constants/design-system": 4771,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = p(e("prop-types")),
                  o = e("react-router-dom"),
                  i = p(e("../../../../components/ui/button/button.component")),
                  s = p(e("../../../../components/ui/text-field")),
                  l = p(e("../../../../components/ui/page-container/page-container-footer")),
                  c = e("../../../../../shared/modules/hexstring-utils"),
                  u = e("../../../../components/component-library"),
                  d = e("../../../../helpers/constants/design-system");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (f = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function m(e, t, a) {
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
                class g extends n.PureComponent {
                  constructor(...e) {
                    super(...e),
                      m(this, "state", { newName: this.props.name, newAddress: this.props.address, newMemo: this.props.memo, error: "" });
                  }
                  render() {
                    const { t: e } = this.context,
                      {
                        address: t,
                        addToAddressBook: a,
                        chainId: r,
                        history: p,
                        listRoute: f,
                        memo: m,
                        name: g,
                        removeFromAddressBook: h,
                        viewRoute: b
                      } = this.props;
                    return t
                      ? n.default.createElement(
                          "div",
                          { className: "settings-page__content-row address-book__edit-contact" },
                          n.default.createElement(
                            u.Box,
                            { className: "settings-page__header address-book__header--edit", paddingLeft: 6, paddingRight: 6 },
                            n.default.createElement(
                              u.Box,
                              { display: d.Display.Flex, alignItems: d.AlignItems.center },
                              n.default.createElement(u.AvatarAccount, { size: u.AvatarAccountSize.Lg, address: t }),
                              n.default.createElement(
                                u.Text,
                                { className: "address-book__header__name", variant: d.TextVariant.bodyLgMedium, marginInlineStart: 4 },
                                g || t
                              )
                            ),
                            n.default.createElement(
                              i.default,
                              {
                                type: "link",
                                className: "settings-page__address-book-button",
                                onClick: async () => {
                                  await h(r, t), p.push(f);
                                }
                              },
                              e("deleteContact")
                            )
                          ),
                          n.default.createElement(
                            "div",
                            { className: "address-book__edit-contact__content" },
                            n.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group" },
                              n.default.createElement("div", { className: "address-book__view-contact__group__label" }, e("userName")),
                              n.default.createElement(s.default, {
                                type: "text",
                                id: "nickname",
                                placeholder: this.context.t("addAlias"),
                                value: this.state.newName,
                                onChange: (e) => this.setState({ newName: e.target.value }),
                                fullWidth: !0,
                                margin: "dense"
                              })
                            ),
                            n.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group" },
                              n.default.createElement(
                                "div",
                                { className: "address-book__view-contact__group__label" },
                                e("ethereumPublicAddress")
                              ),
                              n.default.createElement(s.default, {
                                type: "text",
                                id: "address",
                                value: this.state.newAddress,
                                error: this.state.error,
                                onChange: (e) => this.setState({ newAddress: e.target.value }),
                                fullWidth: !0,
                                multiline: !0,
                                rows: 4,
                                margin: "dense",
                                classes: {
                                  inputMultiline: "address-book__view-contact__address__text-area",
                                  inputRoot: "address-book__view-contact__address"
                                }
                              })
                            ),
                            n.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group" },
                              n.default.createElement(
                                "div",
                                { className: "address-book__view-contact__group__label--capitalized" },
                                e("memo")
                              ),
                              n.default.createElement(s.default, {
                                type: "text",
                                id: "memo",
                                placeholder: m,
                                value: this.state.newMemo,
                                onChange: (e) => this.setState({ newMemo: e.target.value }),
                                fullWidth: !0,
                                margin: "dense",
                                multiline: !0,
                                rows: 3,
                                classes: {
                                  inputMultiline: "address-book__view-contact__text-area",
                                  inputRoot: "address-book__view-contact__text-area-wrapper"
                                }
                              })
                            )
                          ),
                          n.default.createElement(l.default, {
                            cancelText: this.context.t("cancel"),
                            onSubmit: async () => {
                              "" !== this.state.newAddress && this.state.newAddress !== t
                                ? !(0, c.isBurnAddress)(this.state.newAddress) &&
                                  (0, c.isValidHexAddress)(this.state.newAddress, { mixedCaseUseChecksum: !0 })
                                  ? (await h(r, t),
                                    await a(this.state.newAddress, this.state.newName || g, this.state.newMemo || m),
                                    p.push(f))
                                  : this.setState({ error: this.context.t("invalidAddress") })
                                : (await a(t, this.state.newName || g, this.state.newMemo || m), p.push(f));
                            },
                            onCancel: () => {
                              p.push(`${b}/${t}`);
                            },
                            submitText: this.context.t("save"),
                            disabled:
                              (this.state.newName === g && this.state.newAddress === t && this.state.newMemo === m) ||
                              !this.state.newName.trim()
                          })
                        )
                      : n.default.createElement(o.Redirect, { to: { pathname: f } });
                  }
                }
                (a.default = g),
                  m(g, "contextTypes", { t: r.default.func }),
                  m(g, "propTypes", {
                    addToAddressBook: r.default.func,
                    removeFromAddressBook: r.default.func,
                    history: r.default.object,
                    name: r.default.string,
                    address: r.default.string,
                    chainId: r.default.string,
                    memo: r.default.string,
                    viewRoute: r.default.string,
                    listRoute: r.default.string
                  }),
                  m(g, "defaultProps", { name: "", memo: "" });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/edit-contact/edit-contact.component.js" }
    ],
    [
      506,
      { "./wordlist": 512, "@ethersproject/strings": 495 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n,
                  r =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function a() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
                    });
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.langEs = void 0);
                var o = e("@ethersproject/strings"),
                  i = e("./wordlist"),
                  s = {},
                  l = null;
                function c(e) {
                  return (
                    i.logger.checkNormalize(),
                    (0, o.toUtf8String)(
                      Array.prototype.filter.call((0, o.toUtf8Bytes)(e.normalize("NFD").toLowerCase()), function (e) {
                        return (e >= 65 && e <= 90) || (e >= 97 && e <= 123);
                      })
                    )
                  );
                }
                function u(e) {
                  if (
                    null == l &&
                    ((l =
                      "A/bacoAbdomenAbejaAbiertoAbogadoAbonoAbortoAbrazoAbrirAbueloAbusoAcabarAcademiaAccesoAccio/nAceiteAcelgaAcentoAceptarA/cidoAclararAcne/AcogerAcosoActivoActoActrizActuarAcudirAcuerdoAcusarAdictoAdmitirAdoptarAdornoAduanaAdultoAe/reoAfectarAficio/nAfinarAfirmarA/gilAgitarAgoni/aAgostoAgotarAgregarAgrioAguaAgudoA/guilaAgujaAhogoAhorroAireAislarAjedrezAjenoAjusteAlacra/nAlambreAlarmaAlbaA/lbumAlcaldeAldeaAlegreAlejarAlertaAletaAlfilerAlgaAlgodo/nAliadoAlientoAlivioAlmaAlmejaAlmi/barAltarAltezaAltivoAltoAlturaAlumnoAlzarAmableAmanteAmapolaAmargoAmasarA/mbarA/mbitoAmenoAmigoAmistadAmorAmparoAmplioAnchoAncianoAnclaAndarAnde/nAnemiaA/nguloAnilloA/nimoAni/sAnotarAntenaAntiguoAntojoAnualAnularAnuncioA~adirA~ejoA~oApagarAparatoApetitoApioAplicarApodoAporteApoyoAprenderAprobarApuestaApuroAradoAra~aArarA/rbitroA/rbolArbustoArchivoArcoArderArdillaArduoA/reaA/ridoAriesArmoni/aArne/sAromaArpaArpo/nArregloArrozArrugaArteArtistaAsaAsadoAsaltoAscensoAsegurarAseoAsesorAsientoAsiloAsistirAsnoAsombroA/speroAstillaAstroAstutoAsumirAsuntoAtajoAtaqueAtarAtentoAteoA/ticoAtletaA/tomoAtraerAtrozAtu/nAudazAudioAugeAulaAumentoAusenteAutorAvalAvanceAvaroAveAvellanaAvenaAvestruzAvio/nAvisoAyerAyudaAyunoAzafra/nAzarAzoteAzu/carAzufreAzulBabaBaborBacheBahi/aBaileBajarBalanzaBalco/nBaldeBambu/BancoBandaBa~oBarbaBarcoBarnizBarroBa/sculaBasto/nBasuraBatallaBateri/aBatirBatutaBau/lBazarBebe/BebidaBelloBesarBesoBestiaBichoBienBingoBlancoBloqueBlusaBoaBobinaBoboBocaBocinaBodaBodegaBoinaBolaBoleroBolsaBombaBondadBonitoBonoBonsa/iBordeBorrarBosqueBoteBoti/nBo/vedaBozalBravoBrazoBrechaBreveBrilloBrincoBrisaBrocaBromaBronceBroteBrujaBruscoBrutoBuceoBucleBuenoBueyBufandaBufo/nBu/hoBuitreBultoBurbujaBurlaBurroBuscarButacaBuzo/nCaballoCabezaCabinaCabraCacaoCada/verCadenaCaerCafe/Cai/daCaima/nCajaCajo/nCalCalamarCalcioCaldoCalidadCalleCalmaCalorCalvoCamaCambioCamelloCaminoCampoCa/ncerCandilCanelaCanguroCanicaCantoCa~aCa~o/nCaobaCaosCapazCapita/nCapoteCaptarCapuchaCaraCarbo/nCa/rcelCaretaCargaCari~oCarneCarpetaCarroCartaCasaCascoCaseroCaspaCastorCatorceCatreCaudalCausaCazoCebollaCederCedroCeldaCe/lebreCelosoCe/lulaCementoCenizaCentroCercaCerdoCerezaCeroCerrarCertezaCe/spedCetroChacalChalecoChampu/ChanclaChapaCharlaChicoChisteChivoChoqueChozaChuletaChuparCiclo/nCiegoCieloCienCiertoCifraCigarroCimaCincoCineCintaCipre/sCircoCiruelaCisneCitaCiudadClamorClanClaroClaseClaveClienteClimaCli/nicaCobreCoccio/nCochinoCocinaCocoCo/digoCodoCofreCogerCoheteCoji/nCojoColaColchaColegioColgarColinaCollarColmoColumnaCombateComerComidaCo/modoCompraCondeConejoCongaConocerConsejoContarCopaCopiaCorazo/nCorbataCorchoCordo/nCoronaCorrerCoserCosmosCostaCra/neoCra/terCrearCrecerCrei/doCremaCri/aCrimenCriptaCrisisCromoCro/nicaCroquetaCrudoCruzCuadroCuartoCuatroCuboCubrirCucharaCuelloCuentoCuerdaCuestaCuevaCuidarCulebraCulpaCultoCumbreCumplirCunaCunetaCuotaCupo/nCu/pulaCurarCuriosoCursoCurvaCutisDamaDanzaDarDardoDa/tilDeberDe/bilDe/cadaDecirDedoDefensaDefinirDejarDelfi/nDelgadoDelitoDemoraDensoDentalDeporteDerechoDerrotaDesayunoDeseoDesfileDesnudoDestinoDesvi/oDetalleDetenerDeudaDi/aDiabloDiademaDiamanteDianaDiarioDibujoDictarDienteDietaDiezDifi/cilDignoDilemaDiluirDineroDirectoDirigirDiscoDise~oDisfrazDivaDivinoDobleDoceDolorDomingoDonDonarDoradoDormirDorsoDosDosisDrago/nDrogaDuchaDudaDueloDue~oDulceDu/oDuqueDurarDurezaDuroE/banoEbrioEcharEcoEcuadorEdadEdicio/nEdificioEditorEducarEfectoEficazEjeEjemploElefanteElegirElementoElevarElipseE/liteElixirElogioEludirEmbudoEmitirEmocio/nEmpateEmpe~oEmpleoEmpresaEnanoEncargoEnchufeEnci/aEnemigoEneroEnfadoEnfermoEnga~oEnigmaEnlaceEnormeEnredoEnsayoEnse~arEnteroEntrarEnvaseEnvi/oE/pocaEquipoErizoEscalaEscenaEscolarEscribirEscudoEsenciaEsferaEsfuerzoEspadaEspejoEspi/aEsposaEspumaEsqui/EstarEsteEstiloEstufaEtapaEternoE/ticaEtniaEvadirEvaluarEventoEvitarExactoExamenExcesoExcusaExentoExigirExilioExistirE/xitoExpertoExplicarExponerExtremoFa/bricaFa/bulaFachadaFa/cilFactorFaenaFajaFaldaFalloFalsoFaltarFamaFamiliaFamosoFarao/nFarmaciaFarolFarsaFaseFatigaFaunaFavorFaxFebreroFechaFelizFeoFeriaFerozFe/rtilFervorFesti/nFiableFianzaFiarFibraFiccio/nFichaFideoFiebreFielFieraFiestaFiguraFijarFijoFilaFileteFilialFiltroFinFincaFingirFinitoFirmaFlacoFlautaFlechaFlorFlotaFluirFlujoFlu/orFobiaFocaFogataFogo/nFolioFolletoFondoFormaForroFortunaForzarFosaFotoFracasoFra/gilFranjaFraseFraudeFrei/rFrenoFresaFri/oFritoFrutaFuegoFuenteFuerzaFugaFumarFuncio/nFundaFurgo/nFuriaFusilFu/tbolFuturoGacelaGafasGaitaGajoGalaGaleri/aGalloGambaGanarGanchoGangaGansoGarajeGarzaGasolinaGastarGatoGavila/nGemeloGemirGenGe/neroGenioGenteGeranioGerenteGermenGestoGiganteGimnasioGirarGiroGlaciarGloboGloriaGolGolfoGolosoGolpeGomaGordoGorilaGorraGotaGoteoGozarGradaGra/ficoGranoGrasaGratisGraveGrietaGrilloGripeGrisGritoGrosorGru/aGruesoGrumoGrupoGuanteGuapoGuardiaGuerraGui/aGui~oGuionGuisoGuitarraGusanoGustarHaberHa/bilHablarHacerHachaHadaHallarHamacaHarinaHazHaza~aHebillaHebraHechoHeladoHelioHembraHerirHermanoHe/roeHervirHieloHierroHi/gadoHigieneHijoHimnoHistoriaHocicoHogarHogueraHojaHombreHongoHonorHonraHoraHormigaHornoHostilHoyoHuecoHuelgaHuertaHuesoHuevoHuidaHuirHumanoHu/medoHumildeHumoHundirHuraca/nHurtoIconoIdealIdiomaI/doloIglesiaIglu/IgualIlegalIlusio/nImagenIma/nImitarImparImperioImponerImpulsoIncapazI/ndiceInerteInfielInformeIngenioInicioInmensoInmuneInnatoInsectoInstanteIntere/sI/ntimoIntuirInu/tilInviernoIraIrisIroni/aIslaIsloteJabali/Jabo/nJamo/nJarabeJardi/nJarraJaulaJazmi/nJefeJeringaJineteJornadaJorobaJovenJoyaJuergaJuevesJuezJugadorJugoJugueteJuicioJuncoJunglaJunioJuntarJu/piterJurarJustoJuvenilJuzgarKiloKoalaLabioLacioLacraLadoLadro/nLagartoLa/grimaLagunaLaicoLamerLa/minaLa/mparaLanaLanchaLangostaLanzaLa/pizLargoLarvaLa/stimaLataLa/texLatirLaurelLavarLazoLealLeccio/nLecheLectorLeerLegio/nLegumbreLejanoLenguaLentoLe~aLeo/nLeopardoLesio/nLetalLetraLeveLeyendaLibertadLibroLicorLi/derLidiarLienzoLigaLigeroLimaLi/miteLimo/nLimpioLinceLindoLi/neaLingoteLinoLinternaLi/quidoLisoListaLiteraLitioLitroLlagaLlamaLlantoLlaveLlegarLlenarLlevarLlorarLloverLluviaLoboLocio/nLocoLocuraLo/gicaLogroLombrizLomoLonjaLoteLuchaLucirLugarLujoLunaLunesLupaLustroLutoLuzMacetaMachoMaderaMadreMaduroMaestroMafiaMagiaMagoMai/zMaldadMaletaMallaMaloMama/MamboMamutMancoMandoManejarMangaManiqui/ManjarManoMansoMantaMa~anaMapaMa/quinaMarMarcoMareaMarfilMargenMaridoMa/rmolMarro/nMartesMarzoMasaMa/scaraMasivoMatarMateriaMatizMatrizMa/ximoMayorMazorcaMechaMedallaMedioMe/dulaMejillaMejorMelenaMelo/nMemoriaMenorMensajeMenteMenu/MercadoMerengueMe/ritoMesMeso/nMetaMeterMe/todoMetroMezclaMiedoMielMiembroMigaMilMilagroMilitarMillo/nMimoMinaMineroMi/nimoMinutoMiopeMirarMisaMiseriaMisilMismoMitadMitoMochilaMocio/nModaModeloMohoMojarMoldeMolerMolinoMomentoMomiaMonarcaMonedaMonjaMontoMo~oMoradaMorderMorenoMorirMorroMorsaMortalMoscaMostrarMotivoMoverMo/vilMozoMuchoMudarMuebleMuelaMuerteMuestraMugreMujerMulaMuletaMultaMundoMu~ecaMuralMuroMu/sculoMuseoMusgoMu/sicaMusloNa/carNacio/nNadarNaipeNaranjaNarizNarrarNasalNatalNativoNaturalNa/useaNavalNaveNavidadNecioNe/ctarNegarNegocioNegroNeo/nNervioNetoNeutroNevarNeveraNichoNidoNieblaNietoNi~ezNi~oNi/tidoNivelNoblezaNocheNo/minaNoriaNormaNorteNotaNoticiaNovatoNovelaNovioNubeNucaNu/cleoNudilloNudoNueraNueveNuezNuloNu/meroNutriaOasisObesoObispoObjetoObraObreroObservarObtenerObvioOcaOcasoOce/anoOchentaOchoOcioOcreOctavoOctubreOcultoOcuparOcurrirOdiarOdioOdiseaOesteOfensaOfertaOficioOfrecerOgroOi/doOi/rOjoOlaOleadaOlfatoOlivoOllaOlmoOlorOlvidoOmbligoOndaOnzaOpacoOpcio/nO/peraOpinarOponerOptarO/pticaOpuestoOracio/nOradorOralO/rbitaOrcaOrdenOrejaO/rganoOrgi/aOrgulloOrienteOrigenOrillaOroOrquestaOrugaOsadi/aOscuroOseznoOsoOstraOto~oOtroOvejaO/vuloO/xidoOxi/genoOyenteOzonoPactoPadrePaellaPa/ginaPagoPai/sPa/jaroPalabraPalcoPaletaPa/lidoPalmaPalomaPalparPanPanalPa/nicoPanteraPa~ueloPapa/PapelPapillaPaquetePararParcelaParedParirParoPa/rpadoParquePa/rrafoPartePasarPaseoPasio/nPasoPastaPataPatioPatriaPausaPautaPavoPayasoPeato/nPecadoPeceraPechoPedalPedirPegarPeinePelarPelda~oPeleaPeligroPellejoPeloPelucaPenaPensarPe~o/nPeo/nPeorPepinoPeque~oPeraPerchaPerderPerezaPerfilPericoPerlaPermisoPerroPersonaPesaPescaPe/simoPesta~aPe/taloPetro/leoPezPezu~aPicarPicho/nPiePiedraPiernaPiezaPijamaPilarPilotoPimientaPinoPintorPinzaPi~aPiojoPipaPirataPisarPiscinaPisoPistaPito/nPizcaPlacaPlanPlataPlayaPlazaPleitoPlenoPlomoPlumaPluralPobrePocoPoderPodioPoemaPoesi/aPoetaPolenPolici/aPolloPolvoPomadaPomeloPomoPompaPonerPorcio/nPortalPosadaPoseerPosiblePostePotenciaPotroPozoPradoPrecozPreguntaPremioPrensaPresoPrevioPrimoPri/ncipePrisio/nPrivarProaProbarProcesoProductoProezaProfesorProgramaProlePromesaProntoPropioPro/ximoPruebaPu/blicoPucheroPudorPuebloPuertaPuestoPulgaPulirPulmo/nPulpoPulsoPumaPuntoPu~alPu~oPupaPupilaPure/QuedarQuejaQuemarQuererQuesoQuietoQui/micaQuinceQuitarRa/banoRabiaRaboRacio/nRadicalRai/zRamaRampaRanchoRangoRapazRa/pidoRaptoRasgoRaspaRatoRayoRazaRazo/nReaccio/nRealidadReba~oReboteRecaerRecetaRechazoRecogerRecreoRectoRecursoRedRedondoReducirReflejoReformaRefra/nRefugioRegaloRegirReglaRegresoRehe/nReinoRei/rRejaRelatoRelevoRelieveRellenoRelojRemarRemedioRemoRencorRendirRentaRepartoRepetirReposoReptilResRescateResinaRespetoRestoResumenRetiroRetornoRetratoReunirReve/sRevistaReyRezarRicoRiegoRiendaRiesgoRifaRi/gidoRigorRinco/nRi~o/nRi/oRiquezaRisaRitmoRitoRizoRobleRoceRociarRodarRodeoRodillaRoerRojizoRojoRomeroRomperRonRoncoRondaRopaRoperoRosaRoscaRostroRotarRubi/RuborRudoRuedaRugirRuidoRuinaRuletaRuloRumboRumorRupturaRutaRutinaSa/badoSaberSabioSableSacarSagazSagradoSalaSaldoSaleroSalirSalmo/nSalo/nSalsaSaltoSaludSalvarSambaSancio/nSandi/aSanearSangreSanidadSanoSantoSapoSaqueSardinaSarte/nSastreSata/nSaunaSaxofo/nSeccio/nSecoSecretoSectaSedSeguirSeisSelloSelvaSemanaSemillaSendaSensorSe~alSe~orSepararSepiaSequi/aSerSerieSermo/nServirSesentaSesio/nSetaSetentaSeveroSexoSextoSidraSiestaSieteSigloSignoSi/labaSilbarSilencioSillaSi/mboloSimioSirenaSistemaSitioSituarSobreSocioSodioSolSolapaSoldadoSoledadSo/lidoSoltarSolucio/nSombraSondeoSonidoSonoroSonrisaSopaSoplarSoporteSordoSorpresaSorteoSoste/nSo/tanoSuaveSubirSucesoSudorSuegraSueloSue~oSuerteSufrirSujetoSulta/nSumarSuperarSuplirSuponerSupremoSurSurcoSure~oSurgirSustoSutilTabacoTabiqueTablaTabu/TacoTactoTajoTalarTalcoTalentoTallaTalo/nTama~oTamborTangoTanqueTapaTapeteTapiaTapo/nTaquillaTardeTareaTarifaTarjetaTarotTarroTartaTatuajeTauroTazaTazo/nTeatroTechoTeclaTe/cnicaTejadoTejerTejidoTelaTele/fonoTemaTemorTemploTenazTenderTenerTenisTensoTeori/aTerapiaTercoTe/rminoTernuraTerrorTesisTesoroTestigoTeteraTextoTezTibioTiburo/nTiempoTiendaTierraTiesoTigreTijeraTildeTimbreTi/midoTimoTintaTi/oTi/picoTipoTiraTiro/nTita/nTi/tereTi/tuloTizaToallaTobilloTocarTocinoTodoTogaToldoTomarTonoTontoToparTopeToqueTo/raxToreroTormentaTorneoToroTorpedoTorreTorsoTortugaTosToscoToserTo/xicoTrabajoTractorTraerTra/ficoTragoTrajeTramoTranceTratoTraumaTrazarTre/bolTreguaTreintaTrenTreparTresTribuTrigoTripaTristeTriunfoTrofeoTrompaTroncoTropaTroteTrozoTrucoTruenoTrufaTuberi/aTuboTuertoTumbaTumorTu/nelTu/nicaTurbinaTurismoTurnoTutorUbicarU/lceraUmbralUnidadUnirUniversoUnoUntarU~aUrbanoUrbeUrgenteUrnaUsarUsuarioU/tilUtopi/aUvaVacaVaci/oVacunaVagarVagoVainaVajillaValeVa/lidoValleValorVa/lvulaVampiroVaraVariarVaro/nVasoVecinoVectorVehi/culoVeinteVejezVelaVeleroVelozVenaVencerVendaVenenoVengarVenirVentaVenusVerVeranoVerboVerdeVeredaVerjaVersoVerterVi/aViajeVibrarVicioVi/ctimaVidaVi/deoVidrioViejoViernesVigorVilVillaVinagreVinoVi~edoVioli/nViralVirgoVirtudVisorVi/speraVistaVitaminaViudoVivazViveroVivirVivoVolca/nVolumenVolverVorazVotarVotoVozVueloVulgarYacerYateYeguaYemaYernoYesoYodoYogaYogurZafiroZanjaZapatoZarzaZonaZorroZumoZurdo"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")
                        .map(function (e) {
                          return (
                            (t = e),
                            (a = []),
                            Array.prototype.forEach.call((0, o.toUtf8Bytes)(t), function (e) {
                              47 === e ? (a.push(204), a.push(129)) : 126 === e ? (a.push(110), a.push(204), a.push(131)) : a.push(e);
                            }),
                            (0, o.toUtf8String)(a)
                          );
                          var t, a;
                        })).forEach(function (e, t) {
                      s[c(e)] = t;
                    }),
                    "0xf74fb7092aeacdfbf8959557de22098da512207fb9f109cb526994938cf40300" !== i.Wordlist.check(e))
                  )
                    throw ((l = null), new Error("BIP39 Wordlist for es (Spanish) FAILED"));
                }
                var d = new ((function (e) {
                  function t() {
                    return e.call(this, "es") || this;
                  }
                  return (
                    r(t, e),
                    (t.prototype.getWord = function (e) {
                      return u(this), l[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return u(this), s[c(e)];
                    }),
                    t
                  );
                })(i.Wordlist))();
                (a.langEs = d), i.Wordlist.register(d);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-es.js" }
    ],
    [
      5060,
      {
        "../../../../ducks/metamask/metamask": 4763,
        "../../../../helpers/constants/routes": 4776,
        "../../../../selectors": 5197,
        "../../../../store/actions": 5204,
        "./edit-contact.component": 5059,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("redux"),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("../../../../selectors"),
                  l = e("../../../../ducks/metamask/metamask"),
                  c = e("../../../../helpers/constants/routes"),
                  u = e("../../../../store/actions"),
                  d = (n = e("./edit-contact.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.compose)(
                  i.withRouter,
                  (0, o.connect)(
                    (e, t) => {
                      const { location: a } = t,
                        { pathname: n } = a,
                        r = n.match(/[^/]+$/u)[0],
                        o = r.includes("0x") ? r.toLowerCase() : t.match.params.id,
                        i = (0, s.getAddressBookEntry)(e, o) || e.metamask.identities[o],
                        { memo: u, name: d } = i || {},
                        { chainId: p } = (0, l.getProviderConfig)(e);
                      return {
                        address: i ? o : null,
                        chainId: p,
                        name: d,
                        memo: u,
                        viewRoute: c.CONTACT_VIEW_ROUTE,
                        listRoute: c.CONTACT_LIST_ROUTE
                      };
                    },
                    (e) => ({
                      addToAddressBook: (t, a, n) => e((0, u.addToAddressBook)(t, a, n)),
                      removeFromAddressBook: (t, a) => e((0, u.removeFromAddressBook)(t, a))
                    })
                  )
                )(d.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/edit-contact/edit-contact.container.js" }
    ],
    [
      5061,
      { "./edit-contact.container": 5060 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./edit-contact.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/edit-contact/index.js" }
    ],
    [
      5062,
      { "./contact-list-tab.container": 5058 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./contact-list-tab.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/index.js" }
    ],
    [
      5063,
      { "./view-contact.container": 5065 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./view-contact.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/view-contact/index.js" }
    ],
    [
      5064,
      {
        "../../../../components/component-library": 4453,
        "../../../../components/ui/button/button.component": 4610,
        "../../../../components/ui/tooltip": 4736,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useCopyToClipboard": 4830,
        "../../../../hooks/useI18nContext": 4837,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = p(e("react")),
                  r = p(e("prop-types")),
                  o = e("react-router-dom"),
                  i = p(e("../../../../components/ui/button/button.component")),
                  s = e("../../../../components/component-library"),
                  l = p(e("../../../../components/ui/tooltip")),
                  c = e("../../../../hooks/useI18nContext"),
                  u = e("../../../../hooks/useCopyToClipboard"),
                  d = e("../../../../helpers/constants/design-system");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f({ history: e, name: t, address: a, checkSummedAddress: r, memo: p, editRoute: f, listRoute: m }) {
                  const g = (0, c.useI18nContext)(),
                    [h, b] = (0, u.useCopyToClipboard)();
                  return a
                    ? n.default.createElement(
                        "div",
                        { className: "settings-page__content-row" },
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          n.default.createElement(
                            s.Box,
                            { className: "settings-page__header address-book__header", paddingLeft: 6 },
                            n.default.createElement(s.AvatarAccount, { size: s.AvatarAccountSize.Lg, address: a }),
                            n.default.createElement(
                              s.Text,
                              { className: "address-book__header__name", variant: d.TextVariant.bodyLgMedium, marginInlineStart: 4 },
                              t || a
                            )
                          ),
                          n.default.createElement(
                            "div",
                            { className: "address-book__view-contact__group" },
                            n.default.createElement(
                              i.default,
                              {
                                type: "secondary",
                                onClick: () => {
                                  e.push(`${f}/${a}`);
                                }
                              },
                              g("edit")
                            )
                          ),
                          n.default.createElement(
                            "div",
                            { className: "address-book__view-contact__group" },
                            n.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group__label" },
                              g("ethereumPublicAddress")
                            ),
                            n.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group__value" },
                              n.default.createElement(
                                "div",
                                { className: "address-book__view-contact__group__static-address" },
                                (function (e) {
                                  return `0x${e
                                    .slice(2)
                                    .match(/.{1,4}/gu)
                                    .join("")}`;
                                })(r)
                              ),
                              n.default.createElement(
                                l.default,
                                { position: "bottom", title: g(h ? "copiedExclamation" : "copyToClipboard") },
                                n.default.createElement(s.ButtonIcon, {
                                  ariaLabel: "copy",
                                  className: "address-book__view-contact__group__static-address--copy-icon",
                                  onClick: () => {
                                    b(r);
                                  },
                                  iconName: h ? s.IconName.CopySuccess : s.IconName.Copy,
                                  size: s.ButtonIconSize.Lg,
                                  color: d.IconColor.primaryDefault
                                })
                              )
                            )
                          ),
                          p.length > 0
                            ? n.default.createElement(
                                "div",
                                { className: "address-book__view-contact__group" },
                                n.default.createElement(
                                  "div",
                                  { className: "address-book__view-contact__group__label--capitalized" },
                                  g("memo")
                                ),
                                n.default.createElement("div", { className: "address-book__view-contact__group__static-address" }, p)
                              )
                            : null
                        )
                      )
                    : n.default.createElement(o.Redirect, { to: { pathname: m } });
                }
                f.propTypes = {
                  name: r.default.string,
                  address: r.default.string,
                  history: r.default.object,
                  checkSummedAddress: r.default.string,
                  memo: r.default.string,
                  editRoute: r.default.string,
                  listRoute: r.default.string.isRequired
                };
                a.default = n.default.memo(f);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/view-contact/view-contact.component.js" }
    ],
    [
      5065,
      {
        "../../../../../shared/modules/hexstring-utils": 3993,
        "../../../../helpers/constants/routes": 4776,
        "../../../../selectors": 5197,
        "./view-contact.component": 5064,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("redux"),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("../../../../selectors"),
                  l = e("../../../../helpers/constants/routes"),
                  c = e("../../../../../shared/modules/hexstring-utils"),
                  u = (n = e("./view-contact.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.compose)(
                  i.withRouter,
                  (0, o.connect)((e, t) => {
                    const { location: a } = t,
                      { pathname: n } = a,
                      r = n.match(/[^/]+$/u)[0],
                      o = r.includes("0x") ? r.toLowerCase() : t.match.params.id,
                      i = (0, s.getAddressBookEntry)(e, o) || e.metamask.identities[o],
                      { memo: u, name: d } = i || {};
                    return {
                      name: d,
                      address: i ? o : null,
                      checkSummedAddress: (0, c.toChecksumHexAddress)(o),
                      memo: u,
                      editRoute: l.CONTACT_EDIT_ROUTE,
                      listRoute: l.CONTACT_LIST_ROUTE
                    };
                  })
                )(u.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/view-contact/view-contact.container.js" }
    ],
    [
      5066,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/lib/ui-utils": 3983,
        "../../../components/component-library": 4453,
        "../../../components/ui/toggle-button": 4729,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/settings-search": 4808,
        "prop-types": 3450,
        react: 3690
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
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = d(e("prop-types")),
                  o = d(e("../../../components/ui/toggle-button")),
                  i = e("../../../helpers/utils/settings-search"),
                  s = e("../../../../shared/constants/metametrics"),
                  l = e("../../../components/component-library"),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../../../shared/lib/ui-utils");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (p = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function f(e, t, a) {
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
                class m extends n.PureComponent {
                  constructor(...e) {
                    super(...e),
                      f(
                        this,
                        "settingsRefs",
                        Array((0, i.getNumberOfSettingsInSection)(this.context.t, this.context.t("experimental")))
                          .fill(undefined)
                          .map(() => n.default.createRef())
                      );
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, i.handleSettingsRefs)(e, e("experimental"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, i.handleSettingsRefs)(e, e("experimental"), this.settingsRefs);
                  }
                  toggleSecurityAlert(e) {
                    const t = !e,
                      { setSecurityAlertsEnabled: a, transactionSecurityCheckEnabled: n } = this.props;
                    this.context.trackEvent({
                      category: s.MetaMetricsEventCategory.Settings,
                      event: s.MetaMetricsEventName.SettingsUpdated,
                      properties: { blockaid_alerts_enabled: t }
                    }),
                      a(t),
                      t && n && this.toggleTransactionSecurityCheck(!0);
                  }
                  toggleTransactionSecurityCheck(e) {
                    const t = !e,
                      { securityAlertsEnabled: a, setTransactionSecurityCheckEnabled: n } = this.props;
                    this.context.trackEvent({
                      category: s.MetaMetricsEventCategory.Settings,
                      event: s.MetaMetricsEventName.SettingsUpdated,
                      properties: { opensea_alerts_enabled: t }
                    }),
                      n(t),
                      t && a && this.toggleSecurityAlert && this.toggleSecurityAlert(!0);
                  }
                  renderSecurityAlertsToggle() {
                    const { t: e } = this.context,
                      { securityAlertsEnabled: t, transactionSecurityCheckEnabled: a } = this.props;
                    return n.default.createElement(
                      n.default.Fragment,
                      null,
                      n.default.createElement(
                        l.Text,
                        { variant: c.TextVariant.headingSm, color: c.TextColor.textAlternative, marginBottom: 2 },
                        e("security")
                      ),
                      n.default.createElement(
                        "div",
                        { ref: this.settingsRefs[1], className: "settings-page__content-row settings-page__content-row-experimental" },
                        n.default.createElement(
                          l.Text,
                          { variant: c.TextVariant.inherit, color: c.TextColor.textAlternative },
                          e("securityAlerts")
                        ),
                        n.default.createElement(l.Text, { variant: c.TextVariant.bodySm }, e("securityAlertsDescription")),
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          n.default.createElement(
                            n.default.Fragment,
                            null,
                            n.default.createElement(
                              l.Text,
                              { variant: c.TextVariant.bodySmBold, color: c.TextColor.textAlternative, marginTop: 4 },
                              e("preferredProvider")
                            ),
                            n.default.createElement(
                              l.Box,
                              {
                                display: c.Display.Flex,
                                flexDirection: c.FlexDirection.Row,
                                justifyContent: c.JustifyContent.spaceBetween,
                                gap: 4,
                                marginTop: 3,
                                marginBottom: 3,
                                "data-testid": "settings-toggle-security-alert-blockaid"
                              },
                              n.default.createElement(
                                "div",
                                null,
                                n.default.createElement(
                                  l.Box,
                                  { display: c.Display.Flex },
                                  n.default.createElement(
                                    l.Text,
                                    { variant: c.TextVariant.bodyMd, color: c.TextColor.textDefault },
                                    e("blockaid")
                                  ),
                                  n.default.createElement(l.Tag, { marginLeft: 2, label: "Recommended" })
                                ),
                                n.default.createElement(
                                  l.Text,
                                  {
                                    variant: c.TextVariant.bodySm,
                                    as: "h6",
                                    color: c.TextColor.textAlternative,
                                    marginTop: 0,
                                    marginRight: 1
                                  },
                                  e("blockaidMessage")
                                )
                              ),
                              n.default.createElement(o.default, { value: t, onToggle: this.toggleSecurityAlert.bind(this) })
                            )
                          ),
                          n.default.createElement(
                            l.Box,
                            {
                              display: c.Display.Flex,
                              flexDirection: c.FlexDirection.Row,
                              justifyContent: c.JustifyContent.spaceBetween,
                              gap: 4,
                              marginTop: 3,
                              marginBottom: 3
                            },
                            n.default.createElement(
                              "div",
                              null,
                              n.default.createElement(
                                l.Box,
                                { display: c.Display.Flex },
                                n.default.createElement(
                                  l.Text,
                                  { variant: c.TextVariant.bodyMd, color: c.TextColor.textDefault },
                                  e("openSeaLabel")
                                ),
                                n.default.createElement(l.Tag, { marginLeft: 2, label: "Beta" })
                              ),
                              n.default.createElement(
                                l.Text,
                                {
                                  variant: c.TextVariant.bodySm,
                                  as: "h6",
                                  color: c.TextColor.textAlternative,
                                  marginTop: 0,
                                  marginRight: 1
                                },
                                e("openSeaMessage", [
                                  n.default.createElement(
                                    l.ButtonLink,
                                    { variant: "bodyMd", href: u.OPENSEA_TERMS_OF_USE, externalLink: !0, key: "opensea-terms-of-use" },
                                    e("terms")
                                  )
                                ])
                              )
                            ),
                            n.default.createElement(o.default, { value: a, onToggle: this.toggleTransactionSecurityCheck.bind(this) })
                          )
                        )
                      )
                    );
                  }
                  renderToggleRequestQueue() {
                    const { t: e } = this.context,
                      { useRequestQueue: t, setUseRequestQueue: a } = this.props;
                    return n.default.createElement(
                      l.Box,
                      {
                        ref: this.settingsRefs[7],
                        className: "settings-page__content-row settings-page__content-row-experimental",
                        "data-testid": "experimental-setting-toggle-request-queue"
                      },
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement("span", null, e("toggleRequestQueueField")),
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("toggleRequestQueueDescription")
                        )
                      ),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        n.default.createElement(o.default, {
                          className: "request-queue-toggle",
                          value: t || !1,
                          onToggle: (e) => a(!e),
                          offLabel: e("toggleRequestQueueOff"),
                          onLabel: e("toggleRequestQueueOn")
                        })
                      )
                    );
                  }
                  render() {
                    return n.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      this.renderSecurityAlertsToggle(),
                      this.renderToggleRequestQueue()
                    );
                  }
                }
                (a.default = m),
                  f(m, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  f(m, "propTypes", {
                    transactionSecurityCheckEnabled: r.default.bool,
                    setTransactionSecurityCheckEnabled: r.default.func,
                    securityAlertsEnabled: r.default.bool,
                    setSecurityAlertsEnabled: r.default.func,
                    useRequestQueue: r.default.bool,
                    setUseRequestQueue: r.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/experimental-tab/experimental-tab.component.js" }
    ],
    [
      5067,
      {
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./experimental-tab.component": 5066,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("redux"),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c = (n = e("./experimental-tab.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.compose)(
                  i.withRouter,
                  (0, o.connect)(
                    (e) => ({
                      transactionSecurityCheckEnabled: (0, l.getIsTransactionSecurityCheckEnabled)(e),
                      securityAlertsEnabled: (0, l.getIsSecurityAlertsEnabled)(e),
                      addSnapAccountEnabled: (0, l.getIsAddSnapAccountEnabled)(e),
                      useRequestQueue: (0, l.getUseRequestQueue)(e)
                    }),
                    (e) => ({
                      setTransactionSecurityCheckEnabled: (t) => e((0, s.setTransactionSecurityCheckEnabled)(t)),
                      setSecurityAlertsEnabled: (e) => (0, s.setSecurityAlertsEnabled)(e),
                      setAddSnapAccountEnabled: (e) => (0, s.setAddSnapAccountEnabled)(e),
                      setUseRequestQueue: (t) => e((0, s.setUseRequestQueue)(t))
                    })
                  )
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/experimental-tab/experimental-tab.container.js" }
    ],
    [
      5068,
      { "./experimental-tab.container": 5067 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./experimental-tab.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/experimental-tab/index.js" }
    ],
    [
      5069,
      { "./settings.container": 5098 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./settings.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/index.js" }
    ],
    [
      507,
      { "./wordlist": 512, "@ethersproject/strings": 495 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n,
                  r =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function a() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
                    });
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.langFr = void 0);
                var o = e("@ethersproject/strings"),
                  i = e("./wordlist"),
                  s = null,
                  l = {};
                function c(e) {
                  return (
                    i.logger.checkNormalize(),
                    (0, o.toUtf8String)(
                      Array.prototype.filter.call((0, o.toUtf8Bytes)(e.normalize("NFD").toLowerCase()), function (e) {
                        return (e >= 65 && e <= 90) || (e >= 97 && e <= 123);
                      })
                    )
                  );
                }
                function u(e) {
                  if (
                    null == s &&
                    ((s =
                      "AbaisserAbandonAbdiquerAbeilleAbolirAborderAboutirAboyerAbrasifAbreuverAbriterAbrogerAbruptAbsenceAbsoluAbsurdeAbusifAbyssalAcade/mieAcajouAcarienAccablerAccepterAcclamerAccoladeAccrocheAccuserAcerbeAchatAcheterAcidulerAcierAcompteAcque/rirAcronymeActeurActifActuelAdepteAde/quatAdhe/sifAdjectifAdjugerAdmettreAdmirerAdopterAdorerAdoucirAdresseAdroitAdulteAdverbeAe/rerAe/ronefAffaireAffecterAfficheAffreuxAffublerAgacerAgencerAgileAgiterAgraferAgre/ableAgrumeAiderAiguilleAilierAimableAisanceAjouterAjusterAlarmerAlchimieAlerteAlge-breAlgueAlie/nerAlimentAlle/gerAlliageAllouerAllumerAlourdirAlpagaAltesseAlve/oleAmateurAmbiguAmbreAme/nagerAmertumeAmidonAmiralAmorcerAmourAmovibleAmphibieAmpleurAmusantAnalyseAnaphoreAnarchieAnatomieAncienAne/antirAngleAngoisseAnguleuxAnimalAnnexerAnnonceAnnuelAnodinAnomalieAnonymeAnormalAntenneAntidoteAnxieuxApaiserApe/ritifAplanirApologieAppareilAppelerApporterAppuyerAquariumAqueducArbitreArbusteArdeurArdoiseArgentArlequinArmatureArmementArmoireArmureArpenterArracherArriverArroserArsenicArte/rielArticleAspectAsphalteAspirerAssautAsservirAssietteAssocierAssurerAsticotAstreAstuceAtelierAtomeAtriumAtroceAttaqueAttentifAttirerAttraperAubaineAubergeAudaceAudibleAugurerAuroreAutomneAutrucheAvalerAvancerAvariceAvenirAverseAveugleAviateurAvideAvionAviserAvoineAvouerAvrilAxialAxiomeBadgeBafouerBagageBaguetteBaignadeBalancerBalconBaleineBalisageBambinBancaireBandageBanlieueBannie-reBanquierBarbierBarilBaronBarqueBarrageBassinBastionBatailleBateauBatterieBaudrierBavarderBeletteBe/lierBeloteBe/ne/ficeBerceauBergerBerlineBermudaBesaceBesogneBe/tailBeurreBiberonBicycleBiduleBijouBilanBilingueBillardBinaireBiologieBiopsieBiotypeBiscuitBisonBistouriBitumeBizarreBlafardBlagueBlanchirBlessantBlinderBlondBloquerBlousonBobardBobineBoireBoiserBolideBonbonBondirBonheurBonifierBonusBordureBorneBotteBoucleBoueuxBougieBoulonBouquinBourseBoussoleBoutiqueBoxeurBrancheBrasierBraveBrebisBre-cheBreuvageBricolerBrigadeBrillantBriocheBriqueBrochureBroderBronzerBrousseBroyeurBrumeBrusqueBrutalBruyantBuffleBuissonBulletinBureauBurinBustierButinerButoirBuvableBuvetteCabanonCabineCachetteCadeauCadreCafe/ineCaillouCaissonCalculerCalepinCalibreCalmerCalomnieCalvaireCamaradeCame/raCamionCampagneCanalCanetonCanonCantineCanularCapableCaporalCapriceCapsuleCapterCapucheCarabineCarboneCaresserCaribouCarnageCarotteCarreauCartonCascadeCasierCasqueCassureCauserCautionCavalierCaverneCaviarCe/dilleCeintureCe/lesteCelluleCendrierCensurerCentralCercleCe/re/bralCeriseCernerCerveauCesserChagrinChaiseChaleurChambreChanceChapitreCharbonChasseurChatonChaussonChavirerChemiseChenilleChe/quierChercherChevalChienChiffreChignonChime-reChiotChlorureChocolatChoisirChoseChouetteChromeChuteCigareCigogneCimenterCine/maCintrerCirculerCirerCirqueCiterneCitoyenCitronCivilClaironClameurClaquerClasseClavierClientClignerClimatClivageClocheClonageCloporteCobaltCobraCocasseCocotierCoderCodifierCoffreCognerCohe/sionCoifferCoincerCole-reColibriCollineColmaterColonelCombatCome/dieCommandeCompactConcertConduireConfierCongelerConnoterConsonneContactConvexeCopainCopieCorailCorbeauCordageCornicheCorpusCorrectCorte-geCosmiqueCostumeCotonCoudeCoupureCourageCouteauCouvrirCoyoteCrabeCrainteCravateCrayonCre/atureCre/diterCre/meuxCreuserCrevetteCriblerCrierCristalCrite-reCroireCroquerCrotaleCrucialCruelCrypterCubiqueCueillirCuille-reCuisineCuivreCulminerCultiverCumulerCupideCuratifCurseurCyanureCycleCylindreCyniqueDaignerDamierDangerDanseurDauphinDe/battreDe/biterDe/borderDe/briderDe/butantDe/calerDe/cembreDe/chirerDe/ciderDe/clarerDe/corerDe/crireDe/cuplerDe/daleDe/ductifDe/esseDe/fensifDe/filerDe/frayerDe/gagerDe/givrerDe/glutirDe/graferDe/jeunerDe/liceDe/logerDemanderDemeurerDe/molirDe/nicherDe/nouerDentelleDe/nuderDe/partDe/penserDe/phaserDe/placerDe/poserDe/rangerDe/roberDe/sastreDescenteDe/sertDe/signerDe/sobe/irDessinerDestrierDe/tacherDe/testerDe/tourerDe/tresseDevancerDevenirDevinerDevoirDiableDialogueDiamantDicterDiffe/rerDige/rerDigitalDigneDiluerDimancheDiminuerDioxydeDirectifDirigerDiscuterDisposerDissiperDistanceDivertirDiviserDocileDocteurDogmeDoigtDomaineDomicileDompterDonateurDonjonDonnerDopamineDortoirDorureDosageDoseurDossierDotationDouanierDoubleDouceurDouterDoyenDragonDraperDresserDribblerDroitureDuperieDuplexeDurableDurcirDynastieE/blouirE/carterE/charpeE/chelleE/clairerE/clipseE/cloreE/cluseE/coleE/conomieE/corceE/couterE/craserE/cre/merE/crivainE/crouE/cumeE/cureuilE/difierE/duquerEffacerEffectifEffigieEffortEffrayerEffusionE/galiserE/garerE/jecterE/laborerE/largirE/lectronE/le/gantE/le/phantE/le-veE/ligibleE/litismeE/logeE/luciderE/luderEmballerEmbellirEmbryonE/meraudeE/missionEmmenerE/motionE/mouvoirEmpereurEmployerEmporterEmpriseE/mulsionEncadrerEnche-reEnclaveEncocheEndiguerEndosserEndroitEnduireE/nergieEnfanceEnfermerEnfouirEngagerEnginEngloberE/nigmeEnjamberEnjeuEnleverEnnemiEnnuyeuxEnrichirEnrobageEnseigneEntasserEntendreEntierEntourerEntraverE/nume/rerEnvahirEnviableEnvoyerEnzymeE/olienE/paissirE/pargneE/patantE/pauleE/picerieE/pide/mieE/pierE/pilogueE/pineE/pisodeE/pitapheE/poqueE/preuveE/prouverE/puisantE/querreE/quipeE/rigerE/rosionErreurE/ruptionEscalierEspadonEspe-ceEspie-gleEspoirEspritEsquiverEssayerEssenceEssieuEssorerEstimeEstomacEstradeE/tage-reE/talerE/tancheE/tatiqueE/teindreE/tendoirE/ternelE/thanolE/thiqueEthnieE/tirerE/tofferE/toileE/tonnantE/tourdirE/trangeE/troitE/tudeEuphorieE/valuerE/vasionE/ventailE/videnceE/viterE/volutifE/voquerExactExage/rerExaucerExcellerExcitantExclusifExcuseExe/cuterExempleExercerExhalerExhorterExigenceExilerExisterExotiqueExpe/dierExplorerExposerExprimerExquisExtensifExtraireExulterFableFabuleuxFacetteFacileFactureFaiblirFalaiseFameuxFamilleFarceurFarfeluFarineFaroucheFascinerFatalFatigueFauconFautifFaveurFavoriFe/brileFe/conderFe/de/rerFe/linFemmeFe/murFendoirFe/odalFermerFe/roceFerveurFestivalFeuilleFeutreFe/vrierFiascoFicelerFictifFide-leFigureFilatureFiletageFilie-reFilleulFilmerFilouFiltrerFinancerFinirFioleFirmeFissureFixerFlairerFlammeFlasqueFlatteurFle/auFle-cheFleurFlexionFloconFloreFluctuerFluideFluvialFolieFonderieFongibleFontaineForcerForgeronFormulerFortuneFossileFoudreFouge-reFouillerFoulureFourmiFragileFraiseFranchirFrapperFrayeurFre/gateFreinerFrelonFre/mirFre/ne/sieFre-reFriableFrictionFrissonFrivoleFroidFromageFrontalFrotterFruitFugitifFuiteFureurFurieuxFurtifFusionFuturGagnerGalaxieGalerieGambaderGarantirGardienGarnirGarrigueGazelleGazonGe/antGe/latineGe/luleGendarmeGe/ne/ralGe/nieGenouGentilGe/ologieGe/ome-treGe/raniumGermeGestuelGeyserGibierGiclerGirafeGivreGlaceGlaiveGlisserGlobeGloireGlorieuxGolfeurGommeGonflerGorgeGorilleGoudronGouffreGoulotGoupilleGourmandGoutteGraduelGraffitiGraineGrandGrappinGratuitGravirGrenatGriffureGrillerGrimperGrognerGronderGrotteGroupeGrugerGrutierGruye-reGue/pardGuerrierGuideGuimauveGuitareGustatifGymnasteGyrostatHabitudeHachoirHalteHameauHangarHannetonHaricotHarmonieHarponHasardHe/liumHe/matomeHerbeHe/rissonHermineHe/ronHe/siterHeureuxHibernerHibouHilarantHistoireHiverHomardHommageHomoge-neHonneurHonorerHonteuxHordeHorizonHorlogeHormoneHorribleHouleuxHousseHublotHuileuxHumainHumbleHumideHumourHurlerHydromelHygie-neHymneHypnoseIdylleIgnorerIguaneIlliciteIllusionImageImbiberImiterImmenseImmobileImmuableImpactImpe/rialImplorerImposerImprimerImputerIncarnerIncendieIncidentInclinerIncoloreIndexerIndiceInductifIne/ditIneptieInexactInfiniInfligerInformerInfusionInge/rerInhalerInhiberInjecterInjureInnocentInoculerInonderInscrireInsecteInsigneInsoliteInspirerInstinctInsulterIntactIntenseIntimeIntrigueIntuitifInutileInvasionInventerInviterInvoquerIroniqueIrradierIrre/elIrriterIsolerIvoireIvresseJaguarJaillirJambeJanvierJardinJaugerJauneJavelotJetableJetonJeudiJeunesseJoindreJoncherJonglerJoueurJouissifJournalJovialJoyauJoyeuxJubilerJugementJuniorJuponJuristeJusticeJuteuxJuve/nileKayakKimonoKiosqueLabelLabialLabourerLace/rerLactoseLaguneLaineLaisserLaitierLambeauLamelleLampeLanceurLangageLanterneLapinLargeurLarmeLaurierLavaboLavoirLectureLe/galLe/gerLe/gumeLessiveLettreLevierLexiqueLe/zardLiasseLibe/rerLibreLicenceLicorneLie-geLie-vreLigatureLigoterLigueLimerLimiteLimonadeLimpideLine/aireLingotLionceauLiquideLisie-reListerLithiumLitigeLittoralLivreurLogiqueLointainLoisirLombricLoterieLouerLourdLoutreLouveLoyalLubieLucideLucratifLueurLugubreLuisantLumie-reLunaireLundiLuronLutterLuxueuxMachineMagasinMagentaMagiqueMaigreMaillonMaintienMairieMaisonMajorerMalaxerMale/ficeMalheurMaliceMalletteMammouthMandaterManiableManquantManteauManuelMarathonMarbreMarchandMardiMaritimeMarqueurMarronMartelerMascotteMassifMate/rielMatie-reMatraqueMaudireMaussadeMauveMaximalMe/chantMe/connuMe/dailleMe/decinMe/diterMe/duseMeilleurMe/langeMe/lodieMembreMe/moireMenacerMenerMenhirMensongeMentorMercrediMe/riteMerleMessagerMesureMe/talMe/te/oreMe/thodeMe/tierMeubleMiaulerMicrobeMietteMignonMigrerMilieuMillionMimiqueMinceMine/ralMinimalMinorerMinuteMiracleMiroiterMissileMixteMobileModerneMoelleuxMondialMoniteurMonnaieMonotoneMonstreMontagneMonumentMoqueurMorceauMorsureMortierMoteurMotifMoucheMoufleMoulinMoussonMoutonMouvantMultipleMunitionMurailleMure-neMurmureMuscleMuse/umMusicienMutationMuterMutuelMyriadeMyrtilleMyste-reMythiqueNageurNappeNarquoisNarrerNatationNationNatureNaufrageNautiqueNavireNe/buleuxNectarNe/fasteNe/gationNe/gligerNe/gocierNeigeNerveuxNettoyerNeuroneNeutronNeveuNicheNickelNitrateNiveauNobleNocifNocturneNoirceurNoisetteNomadeNombreuxNommerNormatifNotableNotifierNotoireNourrirNouveauNovateurNovembreNoviceNuageNuancerNuireNuisibleNume/roNuptialNuqueNutritifObe/irObjectifObligerObscurObserverObstacleObtenirObturerOccasionOccuperOce/anOctobreOctroyerOctuplerOculaireOdeurOdorantOffenserOfficierOffrirOgiveOiseauOisillonOlfactifOlivierOmbrageOmettreOnctueuxOndulerOne/reuxOniriqueOpaleOpaqueOpe/rerOpinionOpportunOpprimerOpterOptiqueOrageuxOrangeOrbiteOrdonnerOreilleOrganeOrgueilOrificeOrnementOrqueOrtieOscillerOsmoseOssatureOtarieOuraganOursonOutilOutragerOuvrageOvationOxydeOxyge-neOzonePaisiblePalacePalmare-sPalourdePalperPanachePandaPangolinPaniquerPanneauPanoramaPantalonPapayePapierPapoterPapyrusParadoxeParcelleParesseParfumerParlerParoleParrainParsemerPartagerParureParvenirPassionPaste-quePaternelPatiencePatronPavillonPavoiserPayerPaysagePeignePeintrePelagePe/licanPellePelousePeluchePendulePe/ne/trerPe/niblePensifPe/nuriePe/pitePe/plumPerdrixPerforerPe/riodePermuterPerplexePersilPertePeserPe/talePetitPe/trirPeuplePharaonPhobiePhoquePhotonPhrasePhysiquePianoPicturalPie-cePierrePieuvrePilotePinceauPipettePiquerPiroguePiscinePistonPivoterPixelPizzaPlacardPlafondPlaisirPlanerPlaquePlastronPlateauPleurerPlexusPliagePlombPlongerPluiePlumagePochettePoe/siePoe-tePointePoirierPoissonPoivrePolairePolicierPollenPolygonePommadePompierPonctuelPonde/rerPoneyPortiquePositionPosse/derPosturePotagerPoteauPotionPoucePoulainPoumonPourprePoussinPouvoirPrairiePratiquePre/cieuxPre/direPre/fixePre/ludePre/nomPre/sencePre/textePre/voirPrimitifPrincePrisonPriverProble-meProce/derProdigeProfondProgre-sProieProjeterProloguePromenerPropreProspe-reProte/gerProuesseProverbePrudencePruneauPsychosePublicPuceronPuiserPulpePulsarPunaisePunitifPupitrePurifierPuzzlePyramideQuasarQuerelleQuestionQuie/tudeQuitterQuotientRacineRaconterRadieuxRagondinRaideurRaisinRalentirRallongeRamasserRapideRasageRatisserRavagerRavinRayonnerRe/actifRe/agirRe/aliserRe/animerRecevoirRe/citerRe/clamerRe/colterRecruterReculerRecyclerRe/digerRedouterRefaireRe/flexeRe/formerRefrainRefugeRe/galienRe/gionRe/glageRe/gulierRe/ite/rerRejeterRejouerRelatifReleverReliefRemarqueReme-deRemiseRemonterRemplirRemuerRenardRenfortReniflerRenoncerRentrerRenvoiReplierReporterRepriseReptileRequinRe/serveRe/sineuxRe/soudreRespectResterRe/sultatRe/tablirRetenirRe/ticuleRetomberRetracerRe/unionRe/ussirRevancheRevivreRe/volteRe/vulsifRichesseRideauRieurRigideRigolerRincerRiposterRisibleRisqueRituelRivalRivie-reRocheuxRomanceRompreRonceRondinRoseauRosierRotatifRotorRotuleRougeRouilleRouleauRoutineRoyaumeRubanRubisRucheRuelleRugueuxRuinerRuisseauRuserRustiqueRythmeSablerSaboterSabreSacocheSafariSagesseSaisirSaladeSaliveSalonSaluerSamediSanctionSanglierSarcasmeSardineSaturerSaugrenuSaumonSauterSauvageSavantSavonnerScalpelScandaleSce/le/ratSce/narioSceptreSche/maScienceScinderScoreScrutinSculpterSe/anceSe/cableSe/cherSecouerSe/cre/terSe/datifSe/duireSeigneurSe/jourSe/lectifSemaineSemblerSemenceSe/minalSe/nateurSensibleSentenceSe/parerSe/quenceSereinSergentSe/rieuxSerrureSe/rumServiceSe/sameSe/virSevrageSextupleSide/ralSie-cleSie/gerSifflerSigleSignalSilenceSiliciumSimpleSince-reSinistreSiphonSiropSismiqueSituerSkierSocialSocleSodiumSoigneuxSoldatSoleilSolitudeSolubleSombreSommeilSomnolerSondeSongeurSonnetteSonoreSorcierSortirSosieSottiseSoucieuxSoudureSouffleSouleverSoupapeSourceSoutirerSouvenirSpacieuxSpatialSpe/cialSphe-reSpiralStableStationSternumStimulusStipulerStrictStudieuxStupeurStylisteSublimeSubstratSubtilSubvenirSucce-sSucreSuffixeSugge/rerSuiveurSulfateSuperbeSupplierSurfaceSuricateSurmenerSurpriseSursautSurvieSuspectSyllabeSymboleSyme/trieSynapseSyntaxeSyste-meTabacTablierTactileTaillerTalentTalismanTalonnerTambourTamiserTangibleTapisTaquinerTarderTarifTartineTasseTatamiTatouageTaupeTaureauTaxerTe/moinTemporelTenailleTendreTeneurTenirTensionTerminerTerneTerribleTe/tineTexteThe-meThe/orieThe/rapieThoraxTibiaTie-deTimideTirelireTiroirTissuTitaneTitreTituberTobogganTole/rantTomateToniqueTonneauToponymeTorcheTordreTornadeTorpilleTorrentTorseTortueTotemToucherTournageTousserToxineTractionTraficTragiqueTrahirTrainTrancherTravailTre-fleTremperTre/sorTreuilTriageTribunalTricoterTrilogieTriompheTriplerTriturerTrivialTromboneTroncTropicalTroupeauTuileTulipeTumulteTunnelTurbineTuteurTutoyerTuyauTympanTyphonTypiqueTyranUbuesqueUltimeUltrasonUnanimeUnifierUnionUniqueUnitaireUniversUraniumUrbainUrticantUsageUsineUsuelUsureUtileUtopieVacarmeVaccinVagabondVagueVaillantVaincreVaisseauValableValiseVallonValveVampireVanilleVapeurVarierVaseuxVassalVasteVecteurVedetteVe/ge/talVe/hiculeVeinardVe/loceVendrediVe/ne/rerVengerVenimeuxVentouseVerdureVe/rinVernirVerrouVerserVertuVestonVe/te/ranVe/tusteVexantVexerViaducViandeVictoireVidangeVide/oVignetteVigueurVilainVillageVinaigreViolonVipe-reVirementVirtuoseVirusVisageViseurVisionVisqueuxVisuelVitalVitesseViticoleVitrineVivaceVivipareVocationVoguerVoileVoisinVoitureVolailleVolcanVoltigerVolumeVoraceVortexVoterVouloirVoyageVoyelleWagonXe/nonYachtZe-breZe/nithZesteZoologie"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")
                        .map(function (e) {
                          return (
                            (t = e),
                            (a = []),
                            Array.prototype.forEach.call((0, o.toUtf8Bytes)(t), function (e) {
                              47 === e ? (a.push(204), a.push(129)) : 45 === e ? (a.push(204), a.push(128)) : a.push(e);
                            }),
                            (0, o.toUtf8String)(a)
                          );
                          var t, a;
                        })).forEach(function (e, t) {
                      l[c(e)] = t;
                    }),
                    "0x51deb7ae009149dc61a6bd18a918eb7ac78d2775726c68e598b92d002519b045" !== i.Wordlist.check(e))
                  )
                    throw ((s = null), new Error("BIP39 Wordlist for fr (French) FAILED"));
                }
                var d = new ((function (e) {
                  function t() {
                    return e.call(this, "fr") || this;
                  }
                  return (
                    r(t, e),
                    (t.prototype.getWord = function (e) {
                      return u(this), s[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return u(this), l[c(e)];
                    }),
                    t
                  );
                })(i.Wordlist))();
                (a.langFr = d), i.Wordlist.register(d);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-fr.js" }
    ],
    [
      5070,
      { "./info-tab.component": 5071 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./info-tab.component")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/info-tab/index.js" }
    ],
    [
      5071,
      {
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/lib/ui-utils": 3983,
        "../../../components/component-library": 4453,
        "../../../components/ui/button": 4611,
        "../../../helpers/constants/common": 4769,
        "../../../helpers/utils/build-types": 4792,
        "../../../helpers/utils/settings-search": 4808,
        "prop-types": 3450,
        react: 3690
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
                    var a = f(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = p(e("prop-types")),
                  o = p(e("../../../components/ui/button")),
                  i = e("../../../components/component-library"),
                  s = e("../../../helpers/constants/common"),
                  l = e("../../../helpers/utils/build-types"),
                  c = e("../../../helpers/utils/settings-search"),
                  u = e("../../../../shared/constants/metametrics"),
                  d = e("../../../../shared/lib/ui-utils");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (f = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function m(e, t, a) {
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
                class g extends n.PureComponent {
                  constructor(...e) {
                    var t;
                    super(...e),
                      m(this, "state", {
                        version: (null === (t = global.platform) || void 0 === t ? void 0 : t.getVersion()) ?? "<unknown>"
                      }),
                      m(
                        this,
                        "settingsRefs",
                        Array((0, c.getNumberOfSettingsInSection)(this.context.t, this.context.t("about")))
                          .fill(undefined)
                          .map(() => n.default.createRef())
                      );
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, c.handleSettingsRefs)(e, e("about"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, c.handleSettingsRefs)(e, e("about"), this.settingsRefs);
                  }
                  renderInfoLinks() {
                    const { t: e } = this.context;
                    let t, a;
                    return (
                      (t = "https://metamask.io/privacy.html"),
                      (a = "https://metamask.io/"),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item settings-page__content-item--without-height" },
                        n.default.createElement("div", { ref: this.settingsRefs[1], className: "info-tab__link-header" }, e("links")),
                        n.default.createElement(
                          "div",
                          { ref: this.settingsRefs[2], className: "info-tab__link-item" },
                          n.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: "https://metamask.io/privacy.html",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text"
                            },
                            e("privacyMsg")
                          )
                        ),
                        n.default.createElement(
                          "div",
                          { ref: this.settingsRefs[3], className: "info-tab__link-item" },
                          n.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: "https://metamask.io/terms.html",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text"
                            },
                            e("terms")
                          )
                        ),
                        (0, l.isBeta)()
                          ? n.default.createElement(
                              "div",
                              { ref: this.settingsRefs[8], className: "info-tab__link-item" },
                              n.default.createElement(
                                o.default,
                                {
                                  type: "link",
                                  href: "https://metamask.io/beta-terms.html",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "info-tab__link-text"
                                },
                                e("betaTerms"),
                                n.default.createElement(i.Tag, { label: e("new"), className: "info-tab__tag" })
                              )
                            )
                          : null,
                        n.default.createElement(
                          "div",
                          { ref: this.settingsRefs[4], className: "info-tab__link-item" },
                          n.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: "https://metamask.io/attributions.html",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text"
                            },
                            e("attributions")
                          )
                        ),
                        n.default.createElement("hr", { className: "info-tab__separator" }),
                        n.default.createElement(
                          "div",
                          { ref: this.settingsRefs[5], className: "info-tab__link-item" },
                          n.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: d.SUPPORT_LINK,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                              onClick: () => {
                                this.context.trackEvent(
                                  {
                                    category: u.MetaMetricsEventCategory.Settings,
                                    event: u.MetaMetricsEventName.SupportLinkClicked,
                                    properties: { url: d.SUPPORT_LINK }
                                  },
                                  { contextPropsIntoEventProperties: [u.MetaMetricsContextProp.PageTitle] }
                                );
                              }
                            },
                            e("supportCenter")
                          )
                        ),
                        n.default.createElement(
                          "div",
                          { ref: this.settingsRefs[6], className: "info-tab__link-item" },
                          n.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: "https://metamask.io/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text"
                            },
                            e("visitWebSite")
                          )
                        ),
                        n.default.createElement(
                          "div",
                          { ref: this.settingsRefs[7], className: "info-tab__link-item" },
                          n.default.createElement(
                            o.default,
                            {
                              type: "link",
                              href: s.SUPPORT_REQUEST_LINK,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                              onClick: () => {
                                this.context.trackEvent(
                                  {
                                    category: u.MetaMetricsEventCategory.Settings,
                                    event: u.MetaMetricsEventName.SupportLinkClicked,
                                    properties: { url: s.SUPPORT_REQUEST_LINK }
                                  },
                                  { contextPropsIntoEventProperties: [u.MetaMetricsContextProp.PageTitle] }
                                );
                              }
                            },
                            e("contactUs")
                          )
                        )
                      )
                    );
                  }
                  render() {
                    const { t: e } = this.context;
                    return n.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-row" },
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-item settings-page__content-item--without-height" },
                          n.default.createElement(
                            "div",
                            { className: "info-tab__item" },
                            n.default.createElement(
                              "div",
                              { ref: this.settingsRefs[0], className: "info-tab__version-header" },
                              (0, l.isBeta)() ? e("betaMetamaskVersion") : e("metamaskVersion")
                            ),
                            n.default.createElement("div", { className: "info-tab__version-number" }, this.state.version)
                          ),
                          n.default.createElement(
                            "div",
                            { className: "info-tab__item" },
                            n.default.createElement("div", { className: "info-tab__about" }, e("builtAroundTheWorld"))
                          )
                        ),
                        this.renderInfoLinks()
                      ),
                      n.default.createElement(
                        "div",
                        { className: "info-tab__logo-wrapper" },
                        n.default.createElement("img", {
                          src: "./images/logo/metamask-fox.svg",
                          className: "info-tab__logo",
                          alt: "MetaMask Logo"
                        })
                      )
                    );
                  }
                }
                (a.default = g), m(g, "contextTypes", { t: r.default.func, trackEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/info-tab/info-tab.component.js" }
    ],
    [
      5072,
      {
        "../../../../components/component-library": 4453,
        "../../../../components/ui/icon/search-icon": 4658,
        "../../../../components/ui/text-field": 4725,
        "../../../../contexts/i18n": 4748,
        "@material-ui/core/InputAdornment": 677,
        "fuse.js": 2821,
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
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = d(e("prop-types")),
                  o = d(e("fuse.js")),
                  i = d(e("@material-ui/core/InputAdornment")),
                  s = d(e("../../../../components/ui/text-field")),
                  l = e("../../../../contexts/i18n"),
                  c = d(e("../../../../components/ui/icon/search-icon")),
                  u = e("../../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (p = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function f({ onSearch: e, error: t, networksList: a, searchQueryInput: r }) {
                  const d = (0, n.useContext)(l.I18nContext),
                    [p, f] = (0, n.useState)("var(--color-icon-muted)"),
                    m = Object.values(a),
                    g = new o.default(m, {
                      shouldSort: !0,
                      threshold: 0.2,
                      location: 0,
                      distance: 100,
                      maxPatternLength: 32,
                      minMatchCharLength: 1,
                      keys: ["label", "labelKey"]
                    }),
                    h = async (t) => {
                      f("" === t ? "var(--color-icon-muted)" : "var(--color-icon-alternative)");
                      const a = g.search(t),
                        n = t ? [...a] : m;
                      await e({ searchQuery: t, results: n });
                    };
                  return n.default.createElement(s.default, {
                    id: "search-networks",
                    "data-testid": "search-networks",
                    placeholder: d("customContentSearch"),
                    type: "text",
                    value: r,
                    onChange: (e) => h(e.target.value),
                    error: t,
                    fullWidth: !0,
                    autoFocus: !0,
                    autoComplete: "off",
                    classes: { inputRoot: "networks-tab__networks-list__custom-search-network" },
                    startAdornment: n.default.createElement(
                      i.default,
                      { position: "start" },
                      n.default.createElement(c.default, { color: p })
                    ),
                    endAdornment: n.default.createElement(
                      n.default.Fragment,
                      null,
                      r &&
                        n.default.createElement(
                          i.default,
                          { className: "imageclosectn", position: "end", onClick: () => h("") },
                          n.default.createElement(u.Icon, { name: u.IconName.Close, className: "networks-tab__imageclose" })
                        )
                    )
                  });
                }
                f.propTypes = {
                  onSearch: r.default.func,
                  error: r.default.string,
                  networksList: r.default.array,
                  searchQueryInput: r.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/custom-content-search/custom-content-search.js" }
    ],
    [
      5073,
      { "./custom-content-search": 5072 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./custom-content-search")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/custom-content-search/index.js" }
    ],
    [
      5074,
      { "./networks-tab": 5086 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./networks-tab")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/index.js" }
    ],
    [
      5075,
      { "./networks-form": 5076 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./networks-form")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-form/index.js" }
    ],
    [
      5076,
      {
        "../../../../../app/scripts/lib/util": 82,
        "../../../../../shared/constants/metametrics": 3962,
        "../../../../../shared/constants/network": 3963,
        "../../../../../shared/lib/fetch-with-cache": 3976,
        "../../../../../shared/modules/conversion.utils": 3988,
        "../../../../../shared/modules/network.utils": 3996,
        "../../../../../shared/modules/rpc.utils": 3999,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/actionable-message": 4604,
        "../../../../components/ui/button": 4611,
        "../../../../components/ui/form-field": 4644,
        "../../../../contexts/metametrics": 4749,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/utils/i18n-helper": 4799,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../hooks/usePrevious": 4845,
        "../../../../selectors": 5197,
        "../../../../store/actions": 5204,
        classnames: 2414,
        lodash: 3312,
        loglevel: 3322,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = O(e("classnames")),
                  r = e("lodash"),
                  o = O(e("loglevel")),
                  i = O(e("prop-types")),
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = M(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  l = e("react-redux"),
                  c = e("../../../../../app/scripts/lib/util"),
                  u = e("../../../../../shared/constants/metametrics"),
                  d = e("../../../../../shared/constants/network"),
                  p = O(e("../../../../../shared/lib/fetch-with-cache")),
                  f = e("../../../../../shared/modules/conversion.utils"),
                  m = e("../../../../../shared/modules/network.utils"),
                  g = e("../../../../../shared/modules/rpc.utils"),
                  h = O(e("../../../../components/ui/actionable-message")),
                  b = O(e("../../../../components/ui/button")),
                  v = O(e("../../../../components/ui/form-field")),
                  T = e("../../../../contexts/metametrics"),
                  y = e("../../../../helpers/utils/i18n-helper"),
                  _ = e("../../../../hooks/useI18nContext"),
                  E = e("../../../../hooks/usePrevious"),
                  S = e("../../../../selectors"),
                  C = e("../../../../store/actions"),
                  k = e("../../../../components/component-library"),
                  A = e("../../../../helpers/constants/design-system");
                function M(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (M = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function O(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const w = (e) => (e && "string" == typeof e && e.startsWith("0x") ? parseInt(e, 16).toString(10) : e),
                  P = ({
                    addNewNetwork: e,
                    restrictHeight: t,
                    isCurrentRpcTarget: a,
                    networksToRender: i,
                    selectedNetwork: M,
                    cancelCallback: O,
                    submitCallback: P
                  }) => {
                    var R, N, D, F, L, x;
                    const B = (0, _.useI18nContext)(),
                      I = (0, l.useDispatch)(),
                      { label: J, labelKey: j, viewOnly: U, rpcPrefs: X } = M,
                      H = J || (j && B((0, y.getNetworkLabelKey)(j))),
                      [G, V] = (0, s.useState)(H || ""),
                      [z, W] = (0, s.useState)((null == M ? void 0 : M.rpcUrl) || ""),
                      [Z, K] = (0, s.useState)((null == M ? void 0 : M.chainId) || ""),
                      [q, Q] = (0, s.useState)((null == M ? void 0 : M.ticker) || ""),
                      [Y, $] = (0, s.useState)(""),
                      [ee, te] = (0, s.useState)((null == M ? void 0 : M.blockExplorerUrl) || ""),
                      [ae, ne] = (0, s.useState)({}),
                      [re, oe] = (0, s.useState)({}),
                      [ie, se] = (0, s.useState)(!1),
                      le = d.FEATURED_RPCS.some((e) => Number(e.chainId) === Number(Z)),
                      [ce, ue] = (0, s.useState)(Boolean(e)),
                      [de, pe] = (0, s.useState)(M),
                      fe = (0, s.useContext)(T.MetaMetricsContext),
                      me = (0, l.useSelector)(S.useSafeChainsListValidationSelector),
                      ge = (0, s.useRef)([]);
                    (0, s.useEffect)(() => {
                      me &&
                        (async function () {
                          try {
                            const e = await (0, p.default)({
                              url: "https://chainid.network/chains.json",
                              functionName: "getSafeChainsList"
                            });
                            Object.values(d.BUILT_IN_NETWORKS).forEach((t) => {
                              const a = e.findIndex((e) => e.chainId.toString() === w(t.chainId));
                              t.ticker && -1 !== a && (e[a].nativeCurrency.symbol = t.ticker);
                            }),
                              (ge.current = e);
                          } catch (e) {
                            o.default.warn("Failed to fetch chainList from chainid.network", e);
                          }
                        })();
                    }, [me]);
                    const he = (0, s.useCallback)(() => {
                        V(H || ""),
                          W(M.rpcUrl),
                          K(w(M.chainId)),
                          Q(null == M ? void 0 : M.ticker),
                          te(null == M ? void 0 : M.blockExplorerUrl),
                          ne({}),
                          oe({}),
                          $(""),
                          se(!1),
                          ue(!1),
                          pe(M);
                      }, [M, H]),
                      be = (0, s.useRef)(),
                      ve = (0, s.useRef)(),
                      Te = (0, s.useRef)(),
                      ye = (0, s.useRef)(),
                      _e = (0, s.useRef)(),
                      Ee = (0, s.useRef)();
                    (0, s.useEffect)(() => {
                      if (!be.current && e) V(""), W(""), K(""), Q(""), te(""), ne({}), se(!1);
                      else {
                        const e = ve.current !== H,
                          t = ye.current !== M.rpcUrl,
                          a = Te.current !== M.chainId,
                          n = _e.current !== M.ticker,
                          o = Ee.current !== M.blockExplorerUrl;
                        !(e || t || a || n || o) || (ce && (0, r.isEqual)(M, de)) || he(M);
                      }
                      (be.current = e),
                        (ve.current = H),
                        (ye.current = M.rpcUrl),
                        (Te.current = M.chainId),
                        (_e.current = M.ticker),
                        (Ee.current = M.blockExplorerUrl);
                    }, [M, H, e, de, he, ce]),
                      (0, s.useEffect)(
                        () => () => {
                          V(""), W(""), K(""), Q(""), te(""), ne({}), I((0, C.setSelectedNetworkConfigurationId)(""));
                        },
                        [V, W, K, Q, te, ne, I]
                      );
                    const Se = (0, s.useCallback)((e) => {
                        var t, a;
                        const n = w(e);
                        if ("" === n.trim() || 0 === ge.current.length) return void $("");
                        const r = null === (t = ge.current) || void 0 === t ? void 0 : t.find((e) => e.chainId.toString() === n);
                        if (r === undefined) return void $("");
                        const o = null === (a = r.nativeCurrency) || void 0 === a ? void 0 : a.symbol;
                        $(o);
                      }, []),
                      Ce = (0, s.useCallback)(
                        (e) =>
                          (null == e ? void 0 : e.length) > 0 && !(0, c.isWebUrl)(e)
                            ? (0, c.isWebUrl)(`https://${e}`)
                              ? { key: "urlErrorMsg", msg: B("urlErrorMsg") }
                              : { key: "invalidBlockExplorerURL", msg: B("invalidBlockExplorerURL") }
                            : null,
                        [B]
                      ),
                      ke = (0, s.useCallback)(
                        async (e = "") => {
                          const t = e.trim();
                          let a = "",
                            n = "",
                            r = "",
                            s = "",
                            l = 10,
                            c = t;
                          if (!c.startsWith("0x"))
                            try {
                              c = `0x${(0, f.decimalToHex)(c)}`;
                            } catch (e) {
                              return { error: { key: "invalidHexNumber", msg: B("invalidHexNumber") } };
                            }
                          const [u] = i.filter((e) => e.chainId === c && e.rpcUrl !== z);
                          if ("" === t) return null;
                          let d, p;
                          u
                            ? ((r = "chainIdExistsErrorMsg"), (s = B("chainIdExistsErrorMsg", [u.label ?? u.labelKey])))
                            : t.startsWith("0x")
                            ? ((l = 16),
                              /^0x[0-9a-f]+$/iu.test(t)
                                ? (0, m.isPrefixedFormattedHexString)(t) || (n = B("invalidHexNumberLeadingZeros"))
                                : ((a = "invalidHexNumber"), (n = B("invalidHexNumber"))))
                            : /^[0-9]+$/u.test(t)
                            ? t.startsWith("0")
                              ? ((a = "invalidNumberLeadingZeros"), (n = B("invalidNumberLeadingZeros")))
                              : (0, m.isSafeChainId)(parseInt(t, l)) || ((a = "invalidChainIdTooBig"), (n = B("invalidChainIdTooBig")))
                            : ((a = "invalidNumber"), (n = B("invalidNumber")));
                          try {
                            d = await (0, g.jsonRpcRequest)(z, "eth_chainId");
                          } catch (e) {
                            o.default.warn("Failed to fetch the chainId from the endpoint.", e), (p = e);
                          }
                          if (z && t)
                            if (p || "string" != typeof d) (a = "failedToFetchChainId"), (n = B("failedToFetchChainId"));
                            else if (c !== d) {
                              if (!t.startsWith("0x"))
                                try {
                                  d = parseInt(d, 16).toString(10);
                                } catch (e) {
                                  o.default.warn("Failed to convert endpoint chain ID to decimal", d);
                                }
                              (a = "endpointReturnedDifferentChainId"),
                                (n = B("endpointReturnedDifferentChainId", [d.length <= 12 ? d : `${d.slice(0, 9)}...`]));
                            }
                          return a ? { error: { key: a, msg: n } } : r ? { warning: { key: r, msg: s } } : (Se(t), null);
                        },
                        [z, i, B]
                      ),
                      Ae = (0, s.useCallback)(
                        async (e, t) => {
                          let a, n;
                          const r = w(e);
                          if (!r || !t) return null;
                          if (0 === ge.current.length) (a = "failedToFetchTickerSymbolData"), (n = B("failedToFetchTickerSymbolData"));
                          else {
                            var o;
                            const e = null === (o = ge.current) || void 0 === o ? void 0 : o.find((e) => e.chainId.toString() === r);
                            if (e === undefined) (a = "failedToFetchTickerSymbolData"), (n = B("failedToFetchTickerSymbolData"));
                            else {
                              var i;
                              const r = null === (i = e.nativeCurrency) || void 0 === i ? void 0 : i.symbol;
                              r.toLowerCase() !== t.toLowerCase() &&
                                ((a = "chainListReturnedDifferentTickerSymbol"),
                                (n = B("chainListReturnedDifferentTickerSymbol", [r])),
                                $(r));
                            }
                          }
                          return a ? { key: a, msg: n } : null;
                        },
                        [B]
                      ),
                      Me = (0, s.useCallback)(
                        (e) => {
                          const [{ rpcUrl: t = null, label: a, labelKey: n } = {}] = i.filter((t) => t.rpcUrl === e),
                            { rpcUrl: r } = M;
                          return (null == e ? void 0 : e.length) > 0 && !(0, c.isWebUrl)(e)
                            ? (0, c.isWebUrl)(`https://${e}`)
                              ? { key: "urlErrorMsg", msg: B("urlErrorMsg") }
                              : { key: "invalidRPC", msg: B("invalidRPC") }
                            : t && t !== r
                            ? { key: "urlExistsErrorMsg", msg: B("urlExistsErrorMsg", [a ?? n]) }
                            : null;
                        },
                        [M, i, B]
                      ),
                      Oe = (0, E.usePrevious)(z),
                      we = (0, E.usePrevious)(Z),
                      Pe = (0, E.usePrevious)(q),
                      Re = (0, E.usePrevious)(ee);
                    (0, s.useEffect)(() => {
                      U ||
                        (Oe === z && we === Z && Pe === q && Re === ee) ||
                        (async function () {
                          const { error: e, warning: t } = (await ke(Z)) || {},
                            a = await Ae(Z, q),
                            n = Ce(ee),
                            r = Me(z);
                          ne({ ...ae, blockExplorerUrl: n, rpcUrl: r, chainId: e }), oe({ ...re, chainId: t, ticker: a });
                        })();
                    }, [ae, re, z, Z, q, ee, U, J, Oe, we, Pe, Re, Ce, ke, Ae, Me]);
                    const Ne = !a && !U && !e,
                      De = (() => {
                        const e = "string" == typeof M.chainId && M.chainId.toLowerCase().startsWith("0x") && Z === w(M.chainId);
                        return z === M.rpcUrl && e && q === M.ticker && G === H && ee === M.blockExplorerUrl;
                      })(),
                      Fe = (null == M ? void 0 : M.rpcUrl) && ae.chainId && le,
                      Le =
                        Object.keys(ae).some((e) => {
                          const t = ae[e];
                          return (
                            ("chainId" !== e || "chainIdExistsErrorMsg" !== (null == t ? void 0 : t.key)) &&
                            (null == t ? void 0 : t.key) &&
                            (null == t ? void 0 : t.msg)
                          );
                        }) ||
                        ie ||
                        De ||
                        Fe ||
                        !z ||
                        !Z ||
                        !q;
                    return s.default.createElement(
                      "div",
                      {
                        className: (0, n.default)({
                          "networks-tab__network-form": !e,
                          "networks-tab__add-network-form": e,
                          "networks-tab__restrict-height": t
                        })
                      },
                      e
                        ? s.default.createElement(h.default, {
                            type: "warning",
                            message: B("onlyAddTrustedNetworks"),
                            iconFillColor: "var(--color-warning-default)",
                            useIcon: !0,
                            withRightButton: !0,
                            className: "networks-tab__add-network-form__alert"
                          })
                        : null,
                      s.default.createElement(
                        "div",
                        {
                          className: (0, n.default)({
                            "networks-tab__network-form-body": !e,
                            "networks-tab__network-form-body__view-only": U,
                            "networks-tab__add-network-form-body": e
                          })
                        },
                        s.default.createElement(v.default, {
                          autoFocus: !0,
                          error: (null === (R = ae.networkName) || void 0 === R ? void 0 : R.msg) || "",
                          onChange: (e) => {
                            ue(!0), V(e);
                          },
                          titleText: B("networkName"),
                          value: G,
                          disabled: U
                        }),
                        s.default.createElement(v.default, {
                          error: (null === (N = ae.rpcUrl) || void 0 === N ? void 0 : N.msg) || "",
                          onChange: (e) => {
                            ue(!0), W(e);
                          },
                          titleText: B("rpcUrl"),
                          value: null != z && z.includes(`/v3/${d.infuraProjectId}`) ? z.replace(`/v3/${d.infuraProjectId}`, "") : z,
                          disabled: U
                        }),
                        s.default.createElement(v.default, {
                          warning: (null === (D = re.chainId) || void 0 === D ? void 0 : D.msg) || "",
                          error: (null === (F = ae.chainId) || void 0 === F ? void 0 : F.msg) || "",
                          onChange: (e) => {
                            ue(!0), K(e), Se(e);
                          },
                          titleText: B("chainId"),
                          value: Z,
                          disabled: U,
                          tooltipText: U ? null : B("networkSettingsChainIdDescription")
                        }),
                        s.default.createElement(k.FormTextField, {
                          "data-testid": "network-form-ticker",
                          helpText: Y
                            ? s.default.createElement(
                                k.Text,
                                { as: "span", variant: A.TextVariant.bodySm, color: A.TextColor.textDefault },
                                B("suggestedTokenSymbol"),
                                s.default.createElement(
                                  k.ButtonLink,
                                  {
                                    as: "button",
                                    variant: A.TextVariant.bodySm,
                                    color: A.TextColor.primaryDefault,
                                    onClick: () => {
                                      Q(Y);
                                    },
                                    paddingLeft: 1,
                                    paddingRight: 1,
                                    style: { verticalAlign: "baseline" }
                                  },
                                  Y
                                )
                              )
                            : null,
                          onChange: (e) => {
                            ue(!0), Q(e.target.value);
                          },
                          label: B("currencySymbol"),
                          labelProps: { variant: A.TextVariant.bodySm, fontWeight: A.FontWeight.Bold, paddingBottom: 1, paddingTop: 1 },
                          inputProps: { paddingLeft: 2, variant: A.TextVariant.bodySm, "data-testid": "network-form-ticker-input" },
                          value: q,
                          disabled: U
                        }),
                        null !== (L = re.ticker) && void 0 !== L && L.msg
                          ? s.default.createElement(
                              k.HelpText,
                              { severity: k.HelpTextSeverity.Warning, marginTop: 1, "data-testid": "network-form-ticker-warning" },
                              re.ticker.msg
                            )
                          : null,
                        s.default.createElement(v.default, {
                          error: (null === (x = ae.blockExplorerUrl) || void 0 === x ? void 0 : x.msg) || "",
                          onChange: (e) => {
                            ue(!0), te(e);
                          },
                          titleText: B("blockExplorerUrl"),
                          titleUnit: B("optionalWithParanthesis"),
                          value: ee,
                          disabled: U,
                          autoFocus: "blockExplorerUrl" === window.location.hash.split("#")[2]
                        })
                      ),
                      s.default.createElement(
                        "div",
                        {
                          className: (0, n.default)({ "networks-tab__network-form-footer": !e, "networks-tab__add-network-form-footer": e })
                        },
                        !U &&
                          s.default.createElement(
                            s.default.Fragment,
                            null,
                            Ne &&
                              s.default.createElement(
                                b.default,
                                {
                                  type: "danger",
                                  onClick: () => {
                                    I(
                                      (0, C.showModal)({
                                        name: "CONFIRM_DELETE_NETWORK",
                                        target: M.networkConfigurationId,
                                        onConfirm: () => {
                                          he(), I((0, C.setSelectedNetworkConfigurationId)(""));
                                        }
                                      })
                                    );
                                  }
                                },
                                B("delete")
                              ),
                            s.default.createElement(
                              b.default,
                              {
                                type: "secondary",
                                onClick: () => {
                                  e ? (I((0, C.setSelectedNetworkConfigurationId)("")), null == O || O()) : he();
                                },
                                disabled: De
                              },
                              B("cancel")
                            ),
                            s.default.createElement(
                              b.default,
                              {
                                type: "primary",
                                disabled: Le,
                                onClick: async () => {
                                  se(!0);
                                  try {
                                    const t = ((e) => {
                                      let t = e;
                                      return e.startsWith("0x") || (t = `0x${parseInt(e, 10).toString(16)}`), t;
                                    })(Z.trim().toLowerCase());
                                    let a;
                                    M.rpcUrl && z !== M.rpcUrl
                                      ? await I(
                                          (0, C.editAndSetNetworkConfiguration)(
                                            {
                                              rpcUrl: z,
                                              ticker: q,
                                              networkConfigurationId: M.networkConfigurationId,
                                              chainId: t,
                                              nickname: G,
                                              rpcPrefs: { ...X, blockExplorerUrl: ee || (null == X ? void 0 : X.blockExplorerUrl) }
                                            },
                                            { source: u.MetaMetricsNetworkEventSource.CustomNetworkForm }
                                          )
                                        )
                                      : (a = await I(
                                          (0, C.upsertNetworkConfiguration)(
                                            {
                                              rpcUrl: z,
                                              ticker: q,
                                              chainId: t,
                                              nickname: G,
                                              rpcPrefs: { ...X, blockExplorerUrl: ee || (null == X ? void 0 : X.blockExplorerUrl) }
                                            },
                                            { setActive: !0, source: u.MetaMetricsNetworkEventSource.CustomNetworkForm }
                                          )
                                        )),
                                      e &&
                                        (I((0, C.setNewNetworkAdded)({ nickname: G, networkConfigurationId: a })),
                                        fe({
                                          event: u.MetaMetricsEventName.CustomNetworkAdded,
                                          category: u.MetaMetricsEventCategory.Network,
                                          properties: {
                                            block_explorer_url: ee,
                                            chain_id: t,
                                            network_name: G,
                                            source_connection_method: u.MetaMetricsNetworkEventSource.CustomNetworkForm,
                                            token_symbol: q
                                          }
                                        }),
                                        null == P || P());
                                  } catch (e) {
                                    throw (se(!1), e);
                                  }
                                }
                              },
                              B("save")
                            )
                          )
                      )
                    );
                  };
                (P.propTypes = {
                  addNewNetwork: i.default.bool,
                  isCurrentRpcTarget: i.default.bool,
                  networksToRender: i.default.array.isRequired,
                  selectedNetwork: i.default.object,
                  cancelCallback: i.default.func,
                  submitCallback: i.default.func,
                  restrictHeight: i.default.bool
                }),
                  (P.defaultProps = { selectedNetwork: {} });
                a.default = P;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-form/networks-form.js" }
    ],
    [
      5077,
      { "./networks-list-item": 5078 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./networks-list-item")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-list-item/index.js" }
    ],
    [
      5078,
      {
        "../../../../../app/scripts/lib/util": 82,
        "../../../../../shared/constants/app": 3953,
        "../../../../../shared/constants/network": 3963,
        "../../../../components/component-library": 4453,
        "../../../../components/ui/identicon": 4664,
        "../../../../components/ui/url-icon": 4745,
        "../../../../ducks/metamask/metamask": 4763,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../helpers/constants/routes": 4776,
        "../../../../helpers/utils/i18n-helper": 4799,
        "../../../../helpers/utils/settings-search": 4808,
        "../../../../hooks/useI18nContext": 4837,
        "../../../../store/actions": 5204,
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
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = _(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = y(e("prop-types")),
                  o = y(e("classnames")),
                  i = e("react-redux"),
                  s = e("../../../../hooks/useI18nContext"),
                  l = e("../../../../../shared/constants/network"),
                  c = e("../../../../helpers/constants/routes"),
                  u = e("../../../../store/actions"),
                  d = e("../../../../../app/scripts/lib/util"),
                  p = e("../../../../../shared/constants/app"),
                  f = e("../../../../ducks/metamask/metamask"),
                  m = y(e("../../../../components/ui/identicon")),
                  g = y(e("../../../../components/ui/url-icon")),
                  h = e("../../../../helpers/utils/settings-search"),
                  b = e("../../../../components/component-library"),
                  v = e("../../../../helpers/constants/design-system"),
                  T = e("../../../../helpers/utils/i18n-helper");
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (_ = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const E = ({
                  network: e,
                  networkIsSelected: t,
                  selectedNetworkConfigurationId: a,
                  setSearchQuery: r,
                  setSearchedNetworks: y
                }) => {
                  const _ = (0, s.useI18nContext)(),
                    E = (0, i.useDispatch)(),
                    S = (0, d.getEnvironmentType)() === p.ENVIRONMENT_TYPE_FULLSCREEN,
                    C = (0, i.useSelector)(f.getProviderConfig),
                    { label: k, labelKey: A, networkConfigurationId: M, rpcUrl: O, providerType: w } = e,
                    P = a && a === M,
                    R = O === C.rpcUrl,
                    N = C.type !== l.NETWORK_TYPES.RPC && w === C.type,
                    D = P || (!t && (R || N)),
                    F = R || N,
                    L = (0, n.useRef)();
                  return (
                    (0, n.useEffect)(() => {
                      (0, h.handleSettingsRefs)(_, _("networks"), L);
                    }, [L, _]),
                    n.default.createElement(
                      "div",
                      {
                        ref: L,
                        key: `settings-network-list-item:${M}`,
                        className: "networks-tab__networks-list-item",
                        onClick: () => {
                          r(""),
                            y([]),
                            E((0, u.setSelectedNetworkConfigurationId)(M)),
                            S || global.platform.openExtensionInBrowser(c.NETWORKS_ROUTE);
                        }
                      },
                      F
                        ? n.default.createElement(b.Icon, { name: b.IconName.Check, color: v.IconColor.successDefault })
                        : n.default.createElement(b.Icon, { name: b.IconName.Check, color: v.IconColor.transparent }),
                      e.chainId in l.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP
                        ? n.default.createElement(m.default, {
                            className: "networks-tab__content__custom-image",
                            diameter: 24,
                            image: l.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[e.chainId],
                            imageBorder: !0
                          })
                        : !e.isATestNetwork &&
                            n.default.createElement(g.default, {
                              className: "networks-tab__content__icon-with-fallback",
                              fallbackClassName: "networks-tab__content__icon-with-fallback",
                              name: k || (0, T.getNetworkLabelKey)(A)
                            }),
                      e.isATestNetwork &&
                        e.chainId !== l.CHAIN_IDS.LINEA_GOERLI &&
                        n.default.createElement(g.default, {
                          name: k || (0, T.getNetworkLabelKey)(A),
                          fallbackClassName: (0, o.default)("networks-tab__content__icon-with-fallback", {
                            [`networks-tab__content__icon-with-fallback--color-${A}`]: !0
                          })
                        }),
                      n.default.createElement(
                        "div",
                        {
                          className: (0, o.default)("networks-tab__networks-list-name", {
                            "networks-tab__networks-list-name--selected": D,
                            "networks-tab__networks-list-name--disabled": w !== l.NETWORK_TYPES.RPC && !D
                          })
                        },
                        k || _((0, T.getNetworkLabelKey)(A)),
                        w !== l.NETWORK_TYPES.RPC &&
                          n.default.createElement(b.Icon, {
                            name: b.IconName.Lock,
                            color: v.IconColor.iconMuted,
                            size: b.IconSize.Inherit,
                            marginInlineStart: 2
                          })
                      )
                    )
                  );
                };
                E.propTypes = {
                  network: r.default.object.isRequired,
                  networkIsSelected: r.default.bool,
                  selectedNetworkConfigurationId: r.default.string,
                  setSearchQuery: r.default.func,
                  setSearchedNetworks: r.default.func
                };
                a.default = E;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-list-item/networks-list-item.js" }
    ],
    [
      5079,
      { "./networks-list": 5080 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./networks-list")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-list/index.js" }
    ],
    [
      508,
      { "./wordlist": 512 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n,
                  r =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function a() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
                    });
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.langIt = void 0);
                var o = e("./wordlist"),
                  i = null;
                function s(e) {
                  if (
                    null == i &&
                    ((i =
                      "AbacoAbbaglioAbbinatoAbeteAbissoAbolireAbrasivoAbrogatoAccadereAccennoAccusatoAcetoneAchilleAcidoAcquaAcreAcrilicoAcrobataAcutoAdagioAddebitoAddomeAdeguatoAderireAdipeAdottareAdulareAffabileAffettoAffissoAffrantoAforismaAfosoAfricanoAgaveAgenteAgevoleAggancioAgireAgitareAgonismoAgricoloAgrumetoAguzzoAlabardaAlatoAlbatroAlberatoAlboAlbumeAlceAlcolicoAlettoneAlfaAlgebraAlianteAlibiAlimentoAllagatoAllegroAllievoAllodolaAllusivoAlmenoAlogenoAlpacaAlpestreAltalenaAlternoAlticcioAltroveAlunnoAlveoloAlzareAmalgamaAmanitaAmarenaAmbitoAmbratoAmebaAmericaAmetistaAmicoAmmassoAmmendaAmmirareAmmonitoAmoreAmpioAmpliareAmuletoAnacardoAnagrafeAnalistaAnarchiaAnatraAncaAncellaAncoraAndareAndreaAnelloAngeloAngolareAngustoAnimaAnnegareAnnidatoAnnoAnnuncioAnonimoAnticipoAnziApaticoAperturaApodeApparireAppetitoAppoggioApprodoAppuntoAprileArabicaArachideAragostaAraldicaArancioAraturaArazzoArbitroArchivioArditoArenileArgentoArgineArgutoAriaArmoniaArneseArredatoArringaArrostoArsenicoArsoArteficeArzilloAsciuttoAscoltoAsepsiAsetticoAsfaltoAsinoAsolaAspiratoAsproAssaggioAsseAssolutoAssurdoAstaAstenutoAsticeAstrattoAtavicoAteismoAtomicoAtonoAttesaAttivareAttornoAttritoAttualeAusilioAustriaAutistaAutonomoAutunnoAvanzatoAvereAvvenireAvvisoAvvolgereAzioneAzotoAzzimoAzzurroBabeleBaccanoBacinoBacoBadessaBadilataBagnatoBaitaBalconeBaldoBalenaBallataBalzanoBambinoBandireBaraondaBarbaroBarcaBaritonoBarlumeBaroccoBasilicoBassoBatostaBattutoBauleBavaBavosaBeccoBeffaBelgioBelvaBendaBenevoleBenignoBenzinaBereBerlinaBetaBibitaBiciBidoneBifidoBigaBilanciaBimboBinocoloBiologoBipedeBipolareBirbanteBirraBiscottoBisestoBisnonnoBisonteBisturiBizzarroBlandoBlattaBollitoBonificoBordoBoscoBotanicoBottinoBozzoloBraccioBradipoBramaBrancaBravuraBretellaBrevettoBrezzaBrigliaBrillanteBrindareBroccoloBrodoBronzinaBrulloBrunoBubboneBucaBudinoBuffoneBuioBulboBuonoBurloneBurrascaBussolaBustaCadettoCaducoCalamaroCalcoloCalesseCalibroCalmoCaloriaCambusaCamerataCamiciaCamminoCamolaCampaleCanapaCandelaCaneCaninoCanottoCantinaCapaceCapelloCapitoloCapogiroCapperoCapraCapsulaCarapaceCarcassaCardoCarismaCarovanaCarrettoCartolinaCasaccioCascataCasermaCasoCassoneCastelloCasualeCatastaCatenaCatrameCautoCavilloCedibileCedrataCefaloCelebreCellulareCenaCenoneCentesimoCeramicaCercareCertoCerumeCervelloCesoiaCespoCetoChelaChiaroChiccaChiedereChimeraChinaChirurgoChitarraCiaoCiclismoCifrareCignoCilindroCiottoloCircaCirrosiCitricoCittadinoCiuffoCivettaCivileClassicoClinicaCloroCoccoCodardoCodiceCoerenteCognomeCollareColmatoColoreColposoColtivatoColzaComaCometaCommandoComodoComputerComuneConcisoCondurreConfermaCongelareConiugeConnessoConoscereConsumoContinuoConvegnoCopertoCopioneCoppiaCopricapoCorazzaCordataCoricatoCorniceCorollaCorpoCorredoCorsiaCorteseCosmicoCostanteCotturaCovatoCratereCravattaCreatoCredereCremosoCrescitaCretaCricetoCrinaleCrisiCriticoCroceCronacaCrostataCrucialeCruscaCucireCuculoCuginoCullatoCupolaCuratoreCursoreCurvoCuscinoCustodeDadoDainoDalmataDamerinoDanielaDannosoDanzareDatatoDavantiDavveroDebuttoDecennioDecisoDeclinoDecolloDecretoDedicatoDefinitoDeformeDegnoDelegareDelfinoDelirioDeltaDemenzaDenotatoDentroDepositoDerapataDerivareDerogaDescrittoDesertoDesiderioDesumereDetersivoDevotoDiametroDicembreDiedroDifesoDiffusoDigerireDigitaleDiluvioDinamicoDinnanziDipintoDiplomaDipoloDiradareDireDirottoDirupoDisagioDiscretoDisfareDisgeloDispostoDistanzaDisumanoDitoDivanoDiveltoDividereDivoratoDobloneDocenteDoganaleDogmaDolceDomatoDomenicaDominareDondoloDonoDormireDoteDottoreDovutoDozzinaDragoDruidoDubbioDubitareDucaleDunaDuomoDupliceDuraturoEbanoEccessoEccoEclissiEconomiaEderaEdicolaEdileEditoriaEducareEgemoniaEgliEgoismoEgregioElaboratoElargireEleganteElencatoElettoElevareElficoElicaElmoElsaElusoEmanatoEmblemaEmessoEmiroEmotivoEmozioneEmpiricoEmuloEndemicoEnduroEnergiaEnfasiEnotecaEntrareEnzimaEpatiteEpilogoEpisodioEpocaleEppureEquatoreErarioErbaErbosoEredeEremitaErigereErmeticoEroeErosivoErranteEsagonoEsameEsanimeEsaudireEscaEsempioEsercitoEsibitoEsigenteEsistereEsitoEsofagoEsortatoEsosoEspansoEspressoEssenzaEssoEstesoEstimareEstoniaEstrosoEsultareEtilicoEtnicoEtruscoEttoEuclideoEuropaEvasoEvidenzaEvitatoEvolutoEvvivaFabbricaFaccendaFachiroFalcoFamigliaFanaleFanfaraFangoFantasmaFareFarfallaFarinosoFarmacoFasciaFastosoFasulloFaticareFatoFavolosoFebbreFecolaFedeFegatoFelpaFeltroFemminaFendereFenomenoFermentoFerroFertileFessuraFestivoFettaFeudoFiabaFiduciaFifaFiguratoFiloFinanzaFinestraFinireFioreFiscaleFisicoFiumeFlaconeFlamencoFleboFlemmaFloridoFluenteFluoroFobicoFocacciaFocosoFoderatoFoglioFolataFolcloreFolgoreFondenteFoneticoFoniaFontanaForbitoForchettaForestaFormicaFornaioForoFortezzaForzareFosfatoFossoFracassoFranaFrassinoFratelloFreccettaFrenataFrescoFrigoFrollinoFrondeFrugaleFruttaFucilataFucsiaFuggenteFulmineFulvoFumanteFumettoFumosoFuneFunzioneFuocoFurboFurgoneFuroreFusoFutileGabbianoGaffeGalateoGallinaGaloppoGamberoGammaGaranziaGarboGarofanoGarzoneGasdottoGasolioGastricoGattoGaudioGazeboGazzellaGecoGelatinaGelsoGemelloGemmatoGeneGenitoreGennaioGenotipoGergoGhepardoGhiaccioGhisaGialloGildaGineproGiocareGioielloGiornoGioveGiratoGironeGittataGiudizioGiuratoGiustoGlobuloGlutineGnomoGobbaGolfGomitoGommoneGonfioGonnaGovernoGracileGradoGraficoGrammoGrandeGrattareGravosoGraziaGrecaGreggeGrifoneGrigioGrinzaGrottaGruppoGuadagnoGuaioGuantoGuardareGufoGuidareIbernatoIconaIdenticoIdillioIdoloIdraIdricoIdrogenoIgieneIgnaroIgnoratoIlareIllesoIllogicoIlludereImballoImbevutoImboccoImbutoImmaneImmersoImmolatoImpaccoImpetoImpiegoImportoImprontaInalareInarcareInattivoIncantoIncendioInchinoIncisivoInclusoIncontroIncrocioIncuboIndagineIndiaIndoleIneditoInfattiInfilareInflittoIngaggioIngegnoIngleseIngordoIngrossoInnescoInodoreInoltrareInondatoInsanoInsettoInsiemeInsonniaInsulinaIntasatoInteroIntonacoIntuitoInumidireInvalidoInveceInvitoIperboleIpnoticoIpotesiIppicaIrideIrlandaIronicoIrrigatoIrrorareIsolatoIsotopoIstericoIstitutoIstriceItaliaIterareLabbroLabirintoLaccaLaceratoLacrimaLacunaLaddoveLagoLampoLancettaLanternaLardosoLargaLaringeLastraLatenzaLatinoLattugaLavagnaLavoroLegaleLeggeroLemboLentezzaLenzaLeoneLepreLesivoLessatoLestoLetteraleLevaLevigatoLiberoLidoLievitoLillaLimaturaLimitareLimpidoLineareLinguaLiquidoLiraLiricaLiscaLiteLitigioLivreaLocandaLodeLogicaLombareLondraLongevoLoquaceLorenzoLotoLotteriaLuceLucidatoLumacaLuminosoLungoLupoLuppoloLusingaLussoLuttoMacabroMacchinaMaceroMacinatoMadamaMagicoMagliaMagneteMagroMaiolicaMalafedeMalgradoMalintesoMalsanoMaltoMalumoreManaManciaMandorlaMangiareManifestoMannaroManovraMansardaMantideManubrioMappaMaratonaMarcireMarettaMarmoMarsupioMascheraMassaiaMastinoMaterassoMatricolaMattoneMaturoMazurcaMeandroMeccanicoMecenateMedesimoMeditareMegaMelassaMelisMelodiaMeningeMenoMensolaMercurioMerendaMerloMeschinoMeseMessereMestoloMetalloMetodoMettereMiagolareMicaMicelioMicheleMicroboMidolloMieleMiglioreMilanoMiliteMimosaMineraleMiniMinoreMirinoMirtilloMiscelaMissivaMistoMisurareMitezzaMitigareMitraMittenteMnemonicoModelloModificaModuloMoganoMogioMoleMolossoMonasteroMoncoMondinaMonetarioMonileMonotonoMonsoneMontatoMonvisoMoraMordereMorsicatoMostroMotivatoMotosegaMottoMovenzaMovimentoMozzoMuccaMucosaMuffaMughettoMugnaioMulattoMulinelloMultiploMummiaMuntoMuovereMuraleMusaMuscoloMusicaMutevoleMutoNababboNaftaNanometroNarcisoNariceNarratoNascereNastrareNaturaleNauticaNaviglioNebulosaNecrosiNegativoNegozioNemmenoNeofitaNerettoNervoNessunoNettunoNeutraleNeveNevroticoNicchiaNinfaNitidoNobileNocivoNodoNomeNominaNordicoNormaleNorvegeseNostranoNotareNotiziaNotturnoNovellaNucleoNullaNumeroNuovoNutrireNuvolaNuzialeOasiObbedireObbligoObeliscoOblioOboloObsoletoOccasioneOcchioOccidenteOccorrereOccultareOcraOculatoOdiernoOdorareOffertaOffrireOffuscatoOggettoOggiOgnunoOlandeseOlfattoOliatoOlivaOlogrammaOltreOmaggioOmbelicoOmbraOmegaOmissioneOndosoOnereOniceOnnivoroOnorevoleOntaOperatoOpinioneOppostoOracoloOrafoOrdineOrecchinoOreficeOrfanoOrganicoOrigineOrizzonteOrmaOrmeggioOrnativoOrologioOrrendoOrribileOrtensiaOrticaOrzataOrzoOsareOscurareOsmosiOspedaleOspiteOssaOssidareOstacoloOsteOtiteOtreOttagonoOttimoOttobreOvaleOvestOvinoOviparoOvocitoOvunqueOvviareOzioPacchettoPacePacificoPadellaPadronePaesePagaPaginaPalazzinaPalesarePallidoPaloPaludePandoroPannelloPaoloPaonazzoPapricaParabolaParcellaParerePargoloPariParlatoParolaPartireParvenzaParzialePassivoPasticcaPataccaPatologiaPattumePavonePeccatoPedalarePedonalePeggioPelosoPenarePendicePenisolaPennutoPenombraPensarePentolaPepePepitaPerbenePercorsoPerdonatoPerforarePergamenaPeriodoPermessoPernoPerplessoPersuasoPertugioPervasoPesatorePesistaPesoPestiferoPetaloPettinePetulantePezzoPiacerePiantaPiattinoPiccinoPicozzaPiegaPietraPifferoPigiamaPigolioPigroPilaPiliferoPillolaPilotaPimpantePinetaPinnaPinoloPioggiaPiomboPiramidePireticoPiritePirolisiPitonePizzicoPlaceboPlanarePlasmaPlatanoPlenarioPochezzaPoderosoPodismoPoesiaPoggiarePolentaPoligonoPollicePolmonitePolpettaPolsoPoltronaPolverePomicePomodoroPontePopolosoPorfidoPorosoPorporaPorrePortataPosaPositivoPossessoPostulatoPotassioPoterePranzoPrassiPraticaPreclusoPredicaPrefissoPregiatoPrelievoPremerePrenotarePreparatoPresenzaPretestoPrevalsoPrimaPrincipePrivatoProblemaProcuraProdurreProfumoProgettoProlungaPromessaPronomePropostaProrogaProtesoProvaPrudentePrugnaPruritoPsichePubblicoPudicaPugilatoPugnoPulcePulitoPulsantePuntarePupazzoPupillaPuroQuadroQualcosaQuasiQuerelaQuotaRaccoltoRaddoppioRadicaleRadunatoRafficaRagazzoRagioneRagnoRamarroRamingoRamoRandagioRantolareRapatoRapinaRappresoRasaturaRaschiatoRasenteRassegnaRastrelloRataRavvedutoRealeRecepireRecintoReclutaReconditoRecuperoRedditoRedimereRegalatoRegistroRegolaRegressoRelazioneRemareRemotoRennaReplicaReprimereReputareResaResidenteResponsoRestauroReteRetinaRetoricaRettificaRevocatoRiassuntoRibadireRibelleRibrezzoRicaricaRiccoRicevereRiciclatoRicordoRicredutoRidicoloRidurreRifasareRiflessoRiformaRifugioRigareRigettatoRighelloRilassatoRilevatoRimanereRimbalzoRimedioRimorchioRinascitaRincaroRinforzoRinnovoRinomatoRinsavitoRintoccoRinunciaRinvenireRiparatoRipetutoRipienoRiportareRipresaRipulireRisataRischioRiservaRisibileRisoRispettoRistoroRisultatoRisvoltoRitardoRitegnoRitmicoRitrovoRiunioneRivaRiversoRivincitaRivoltoRizomaRobaRoboticoRobustoRocciaRocoRodaggioRodereRoditoreRogitoRollioRomanticoRompereRonzioRosolareRospoRotanteRotondoRotulaRovescioRubizzoRubricaRugaRullinoRumineRumorosoRuoloRupeRussareRusticoSabatoSabbiareSabotatoSagomaSalassoSaldaturaSalgemmaSalivareSalmoneSaloneSaltareSalutoSalvoSapereSapidoSaporitoSaracenoSarcasmoSartoSassosoSatelliteSatiraSatolloSaturnoSavanaSavioSaziatoSbadiglioSbalzoSbancatoSbarraSbattereSbavareSbendareSbirciareSbloccatoSbocciatoSbrinareSbruffoneSbuffareScabrosoScadenzaScalaScambiareScandaloScapolaScarsoScatenareScavatoSceltoScenicoScettroSchedaSchienaSciarpaScienzaScindereScippoSciroppoScivoloSclerareScodellaScolpitoScompartoSconfortoScoprireScortaScossoneScozzeseScribaScrollareScrutinioScuderiaScultoreScuolaScuroScusareSdebitareSdoganareSeccaturaSecondoSedanoSeggiolaSegnalatoSegregatoSeguitoSelciatoSelettivoSellaSelvaggioSemaforoSembrareSemeSeminatoSempreSensoSentireSepoltoSequenzaSerataSerbatoSerenoSerioSerpenteSerraglioServireSestinaSetolaSettimanaSfaceloSfaldareSfamatoSfarzosoSfaticatoSferaSfidaSfilatoSfingeSfocatoSfoderareSfogoSfoltireSforzatoSfrattoSfruttatoSfuggitoSfumareSfusoSgabelloSgarbatoSgonfiareSgorbioSgrassatoSguardoSibiloSiccomeSierraSiglaSignoreSilenzioSillabaSimboloSimpaticoSimulatoSinfoniaSingoloSinistroSinoSintesiSinusoideSiparioSismaSistoleSituatoSlittaSlogaturaSlovenoSmarritoSmemoratoSmentitoSmeraldoSmilzoSmontareSmottatoSmussatoSnellireSnervatoSnodoSobbalzoSobrioSoccorsoSocialeSodaleSoffittoSognoSoldatoSolenneSolidoSollazzoSoloSolubileSolventeSomaticoSommaSondaSonettoSonniferoSopireSoppesoSopraSorgereSorpassoSorrisoSorsoSorteggioSorvolatoSospiroSostaSottileSpadaSpallaSpargereSpatolaSpaventoSpazzolaSpecieSpedireSpegnereSpelaturaSperanzaSpessoreSpettraleSpezzatoSpiaSpigolosoSpillatoSpinosoSpiraleSplendidoSportivoSposoSprangaSprecareSpronatoSpruzzoSpuntinoSquilloSradicareSrotolatoStabileStaccoStaffaStagnareStampatoStantioStarnutoStaseraStatutoSteloSteppaSterzoStilettoStimaStirpeStivaleStizzosoStonatoStoricoStrappoStregatoStriduloStrozzareStruttoStuccareStufoStupendoSubentroSuccosoSudoreSuggeritoSugoSultanoSuonareSuperboSupportoSurgelatoSurrogatoSussurroSuturaSvagareSvedeseSveglioSvelareSvenutoSveziaSviluppoSvistaSvizzeraSvoltaSvuotareTabaccoTabulatoTacciareTaciturnoTaleTalismanoTamponeTanninoTaraTardivoTargatoTariffaTarpareTartarugaTastoTatticoTavernaTavolataTazzaTecaTecnicoTelefonoTemerarioTempoTemutoTendoneTeneroTensioneTentacoloTeoremaTermeTerrazzoTerzettoTesiTesseratoTestatoTetroTettoiaTifareTigellaTimbroTintoTipicoTipografoTiraggioTiroTitanioTitoloTitubanteTizioTizzoneToccareTollerareToltoTombolaTomoTonfoTonsillaTopazioTopologiaToppaTorbaTornareTorroneTortoraToscanoTossireTostaturaTotanoTraboccoTracheaTrafilaTragediaTralcioTramontoTransitoTrapanoTrarreTraslocoTrattatoTraveTrecciaTremolioTrespoloTributoTrichecoTrifoglioTrilloTrinceaTrioTristezzaTrituratoTrivellaTrombaTronoTroppoTrottolaTrovareTruccatoTubaturaTuffatoTulipanoTumultoTunisiaTurbareTurchinoTutaTutelaUbicatoUccelloUccisoreUdireUditivoUffaUfficioUgualeUlisseUltimatoUmanoUmileUmorismoUncinettoUngereUnghereseUnicornoUnificatoUnisonoUnitarioUnteUovoUpupaUraganoUrgenzaUrloUsanzaUsatoUscitoUsignoloUsuraioUtensileUtilizzoUtopiaVacanteVaccinatoVagabondoVagliatoValangaValgoValicoVallettaValorosoValutareValvolaVampataVangareVanitosoVanoVantaggioVanveraVaporeVaranoVarcatoVarianteVascaVedettaVedovaVedutoVegetaleVeicoloVelcroVelinaVellutoVeloceVenatoVendemmiaVentoVeraceVerbaleVergognaVerificaVeroVerrucaVerticaleVescicaVessilloVestaleVeteranoVetrinaVetustoViandanteVibranteVicendaVichingoVicinanzaVidimareVigiliaVignetoVigoreVileVillanoViminiVincitoreViolaViperaVirgolaVirologoVirulentoViscosoVisioneVispoVissutoVisuraVitaVitelloVittimaVivandaVividoViziareVoceVogaVolatileVolereVolpeVoragineVulcanoZampognaZannaZappatoZatteraZavorraZefiroZelanteZeloZenzeroZerbinoZibettoZincoZirconeZittoZollaZoticoZuccheroZufoloZuluZuppa"
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()
                        .substring(1)
                        .split(" ")),
                    "0x5c1362d88fd4cf614a96f3234941d29f7d37c08c5292fde03bf62c2db6ff7620" !== o.Wordlist.check(e))
                  )
                    throw ((i = null), new Error("BIP39 Wordlist for it (Italian) FAILED"));
                }
                var l = new ((function (e) {
                  function t() {
                    return e.call(this, "it") || this;
                  }
                  return (
                    r(t, e),
                    (t.prototype.getWord = function (e) {
                      return s(this), i[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return s(this), i.indexOf(e);
                    }),
                    t
                  );
                })(o.Wordlist))();
                (a.langIt = l), o.Wordlist.register(l);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-it.js" }
    ],
    [
      5080,
      {
        "../../../../components/component-library": 4453,
        "../../../../helpers/constants/design-system": 4771,
        "../../../../hooks/useI18nContext": 4837,
        "../custom-content-search": 5073,
        "../networks-list-item": 5077,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
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
                    var a = p(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = d(e("prop-types")),
                  o = d(e("classnames")),
                  i = e("../../../../hooks/useI18nContext"),
                  s = d(e("../custom-content-search")),
                  l = e("../../../../helpers/constants/design-system"),
                  c = d(e("../networks-list-item")),
                  u = e("../../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (p = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const f = ({
                  networkIsSelected: e,
                  networksToRender: t,
                  networkDefaultedToProvider: a,
                  selectedNetworkConfigurationId: r
                }) => {
                  const d = (0, i.useI18nContext)(),
                    [p, f] = (0, n.useState)([]),
                    [m, g] = (0, n.useState)(""),
                    h = 0 === p.length && "" === m ? t : p,
                    b = h.filter((e) => !e.isATestNetwork),
                    v = h.filter((e) => e.isATestNetwork);
                  return n.default.createElement(
                    "div",
                    { className: (0, o.default)("networks-tab__networks-list", { "networks-tab__networks-list--selection": e && !a }) },
                    n.default.createElement(s.default, {
                      onSearch: ({ searchQuery: e = "", results: t = [] }) => {
                        f(t), g(e);
                      },
                      error: 0 === h.length ? d("settingsSearchMatchingNotFound") : null,
                      networksList: t,
                      searchQueryInput: m
                    }),
                    b.map((t, a) =>
                      n.default.createElement(c.default, {
                        key: `settings-network-list:${t.rpcUrl}`,
                        network: t,
                        networkIsSelected: e,
                        selectedNetworkConfigurationId: r,
                        setSearchQuery: g,
                        setSearchedNetworks: f
                      })
                    ),
                    "" === m &&
                      n.default.createElement(
                        u.Text,
                        {
                          variant: l.TextVariant.bodySm,
                          as: "h6",
                          marginTop: 4,
                          color: l.Color.textAlternative,
                          className: "networks-tab__networks-list__label"
                        },
                        d("testNetworks")
                      ),
                    v.map((t, a) =>
                      n.default.createElement(c.default, {
                        key: `settings-network-list:${t.rpcUrl}`,
                        network: t,
                        networkIsSelected: e,
                        selectedNetworkConfigurationId: r,
                        setSearchQuery: g,
                        setSearchedNetworks: f
                      })
                    )
                  );
                };
                f.propTypes = {
                  networkDefaultedToProvider: r.default.bool,
                  networkIsSelected: r.default.bool,
                  networksToRender: r.default.arrayOf(r.default.object).isRequired,
                  selectedNetworkConfigurationId: r.default.string
                };
                a.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-list/networks-list.js" }
    ],
    [
      5081,
      { "./networks-tab-content": 5082 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./networks-tab-content")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab-content/index.js" }
    ],
    [
      5082,
      {
        "../../../../ducks/metamask/metamask": 4763,
        "../../../../helpers/constants/routes": 4776,
        "../networks-form": 5075,
        "../networks-list": 5079,
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
                var n = d(e("react")),
                  r = d(e("prop-types")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = d(e("../networks-form")),
                  l = d(e("../networks-list")),
                  c = e("../../../../ducks/metamask/metamask"),
                  u = e("../../../../helpers/constants/routes");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({
                  networkDefaultedToProvider: e,
                  networkIsSelected: t,
                  networksToRender: a,
                  selectedNetwork: r,
                  shouldRenderNetworkForm: d
                }) => {
                  const p = (0, o.useSelector)(c.getProviderConfig),
                    f = (0, i.useHistory)();
                  return n.default.createElement(
                    n.default.Fragment,
                    null,
                    n.default.createElement(l.default, {
                      networkDefaultedToProvider: e,
                      networkIsSelected: t,
                      networksToRender: a,
                      selectedNetworkConfigurationId: r.networkConfigurationId
                    }),
                    d
                      ? n.default.createElement(s.default, {
                          isCurrentRpcTarget: p.rpcUrl === r.rpcUrl,
                          networksToRender: a,
                          selectedNetwork: r,
                          submitCallback: () => f.push(u.DEFAULT_ROUTE),
                          cancelCallback: () => f.push(u.NETWORKS_ROUTE)
                        })
                      : null
                  );
                };
                p.propTypes = {
                  networkDefaultedToProvider: r.default.bool,
                  networkIsSelected: r.default.bool,
                  networksToRender: r.default.arrayOf(r.default.object).isRequired,
                  selectedNetwork: r.default.object,
                  shouldRenderNetworkForm: r.default.bool.isRequired
                };
                a.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab-content/networks-tab-content.js" }
    ],
    [
      5083,
      { "./networks-tab-subheader": 5084 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./networks-tab-subheader")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab-subheader/index.js" }
    ],
    [
      5084,
      {
        "../../../../components/ui/button": 4611,
        "../../../../helpers/constants/routes": 4776,
        "../../../../hooks/useI18nContext": 4837,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = c(e("react")),
                  r = c(e("prop-types")),
                  o = e("react-router-dom"),
                  i = e("../../../../hooks/useI18nContext"),
                  s = e("../../../../helpers/constants/routes"),
                  l = c(e("../../../../components/ui/button"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ addNewNetwork: e }) => {
                  const t = (0, i.useI18nContext)(),
                    a = (0, o.useHistory)();
                  return e
                    ? n.default.createElement(
                        "div",
                        { className: "networks-tab__subheader" },
                        n.default.createElement("span", { className: "networks-tab__sub-header-text" }, t("networks")),
                        n.default.createElement("span", { className: "networks-tab__sub-header-text" }, "  >  "),
                        n.default.createElement("div", { className: "networks-tab__sub-header-text" }, t("addANetwork")),
                        n.default.createElement("span", null, "  >  "),
                        n.default.createElement("div", { className: "networks-tab__subheader--break" }, t("addANetworkManually"))
                      )
                    : n.default.createElement(
                        "div",
                        { className: "settings-page__sub-header" },
                        n.default.createElement("span", { className: "settings-page__sub-header-text" }, t("networks")),
                        n.default.createElement(
                          "div",
                          { className: "networks-tab__add-network-header-button-wrapper" },
                          n.default.createElement(
                            l.default,
                            {
                              type: "primary",
                              onClick: (e) => {
                                e.preventDefault(), a.push(s.ADD_POPULAR_CUSTOM_NETWORK);
                              }
                            },
                            t("addANetwork")
                          )
                        )
                      );
                };
                u.propTypes = { addNewNetwork: r.default.bool.isRequired };
                a.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab-subheader/networks-tab-subheader.js" }
    ],
    [
      5085,
      { "../../../../shared/constants/network": 3963 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.defaultNetworksData = void 0);
                var n = e("../../../../shared/constants/network");
                a.defaultNetworksData = [
                  {
                    labelKey: n.NETWORK_TYPES.MAINNET,
                    iconColor: "#29B6AF",
                    providerType: n.NETWORK_TYPES.MAINNET,
                    rpcUrl: (0, n.getRpcUrl)({ network: n.NETWORK_TYPES.MAINNET, excludeProjectId: !0 }),
                    chainId: n.CHAIN_IDS.MAINNET,
                    ticker: n.CURRENCY_SYMBOLS.ETH,
                    blockExplorerUrl: "https://etherscan.io"
                  },
                  {
                    labelKey: n.NETWORK_TYPES.GOERLI,
                    iconColor: "#3099f2",
                    providerType: n.NETWORK_TYPES.GOERLI,
                    rpcUrl: (0, n.getRpcUrl)({ network: n.NETWORK_TYPES.GOERLI, excludeProjectId: !0 }),
                    chainId: n.CHAIN_IDS.GOERLI,
                    ticker: n.TEST_NETWORK_TICKER_MAP[n.NETWORK_TYPES.GOERLI],
                    blockExplorerUrl: "https://goerli.etherscan.io"
                  },
                  {
                    labelKey: n.NETWORK_TYPES.SEPOLIA,
                    iconColor: "#CFB5F0",
                    providerType: n.NETWORK_TYPES.SEPOLIA,
                    rpcUrl: (0, n.getRpcUrl)({ network: n.NETWORK_TYPES.SEPOLIA, excludeProjectId: !0 }),
                    chainId: n.CHAIN_IDS.SEPOLIA,
                    ticker: n.TEST_NETWORK_TICKER_MAP[n.NETWORK_TYPES.SEPOLIA],
                    blockExplorerUrl: "https://sepolia.etherscan.io"
                  },
                  {
                    labelKey: n.NETWORK_TYPES.LINEA_GOERLI,
                    iconColor: "#61dfff",
                    providerType: n.NETWORK_TYPES.LINEA_GOERLI,
                    rpcUrl: (0, n.getRpcUrl)({ network: n.NETWORK_TYPES.LINEA_GOERLI, excludeProjectId: !0 }),
                    chainId: n.CHAIN_IDS.LINEA_GOERLI,
                    ticker: n.TEST_NETWORK_TICKER_MAP[n.NETWORK_TYPES.LINEA_GOERLI],
                    blockExplorerUrl: "https://goerli.lineascan.build"
                  },
                  {
                    labelKey: n.NETWORK_TYPES.LINEA_MAINNET,
                    iconColor: "#121212",
                    providerType: n.NETWORK_TYPES.LINEA_MAINNET,
                    rpcUrl: (0, n.getRpcUrl)({ network: n.NETWORK_TYPES.LINEA_MAINNET, excludeProjectId: !0 }),
                    chainId: n.CHAIN_IDS.LINEA_MAINNET,
                    ticker: n.CURRENCY_SYMBOLS.ETH,
                    blockExplorerUrl: "https://lineascan.build"
                  }
                ];
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab.constants.js" }
    ],
    [
      5086,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/network": 3963,
        "../../../components/ui/button": 4611,
        "../../../ducks/metamask/metamask": 4763,
        "../../../helpers/constants/routes": 4776,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./networks-form": 5075,
        "./networks-tab-content": 5081,
        "./networks-tab-subheader": 5083,
        "./networks-tab.constants": 5085,
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
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = E(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = _(e("prop-types")),
                  o = _(e("classnames")),
                  i = e("react-router-dom"),
                  s = e("react-redux"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/constants/routes"),
                  u = e("../../../store/actions"),
                  d = _(e("../../../components/ui/button")),
                  p = e("../../../../app/scripts/lib/util"),
                  f = e("../../../../shared/constants/app"),
                  m = e("../../../selectors"),
                  g = e("../../../ducks/metamask/metamask"),
                  h = e("../../../../shared/constants/network"),
                  b = e("./networks-tab.constants"),
                  v = _(e("./networks-tab-content")),
                  T = _(e("./networks-form")),
                  y = _(e("./networks-tab-subheader"));
                function _(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (E = function (e) {
                    return e ? a : t;
                  })(e);
                }
                const S = b.defaultNetworksData.map((e) => ({ ...e, viewOnly: !0, isATestNetwork: h.TEST_CHAINS.includes(e.chainId) })),
                  C = ({ addNewNetwork: e }) => {
                    const t = (0, l.useI18nContext)(),
                      a = (0, s.useDispatch)(),
                      { pathname: r } = (0, i.useLocation)(),
                      b = (0, i.useHistory)(),
                      _ = (0, p.getEnvironmentType)() === f.ENVIRONMENT_TYPE_FULLSCREEN,
                      E = _ || Boolean(r.match(c.NETWORKS_FORM_ROUTE)) || "blockExplorerUrl" === window.location.hash.split("#")[2],
                      C = (0, s.useSelector)(m.getNetworkConfigurations),
                      k = (0, s.useSelector)(g.getProviderConfig),
                      A = (0, s.useSelector)(m.getNetworksTabSelectedNetworkConfigurationId),
                      M = (0, s.useSelector)(g.isLineaMainnetNetworkReleased),
                      O = Object.entries(C).map(([e, t]) => {
                        var a;
                        return {
                          label: t.nickname,
                          iconColor: "var(--color-icon-alternative)",
                          providerType: h.NETWORK_TYPES.RPC,
                          rpcUrl: t.rpcUrl,
                          chainId: t.chainId,
                          ticker: t.ticker,
                          blockExplorerUrl: (null === (a = t.rpcPrefs) || void 0 === a ? void 0 : a.blockExplorerUrl) || "",
                          isATestNetwork: h.TEST_CHAINS.includes(t.chainId),
                          networkConfigurationId: e
                        };
                      });
                    let w = [...S, ...O];
                    M || (w = w.filter((e) => e.chainId !== h.BUILT_IN_NETWORKS[h.NETWORK_TYPES.LINEA_MAINNET].chainId));
                    let P = w.find((e) => e.networkConfigurationId === A) || {};
                    const R = Boolean(P.rpcUrl);
                    let N = !1;
                    return (
                      R ||
                        ((P =
                          w.find((e) => e.rpcUrl === k.rpcUrl || (e.providerType !== h.NETWORK_TYPES.RPC && e.providerType === k.type)) ||
                          {}),
                        (N = !0)),
                      (0, n.useEffect)(
                        () => () => {
                          a((0, u.setSelectedNetworkConfigurationId)(""));
                        },
                        [a]
                      ),
                      n.default.createElement(
                        "div",
                        { className: "networks-tab__body" },
                        _ ? n.default.createElement(y.default, { addNewNetwork: e }) : null,
                        n.default.createElement(
                          "div",
                          {
                            className: (0, o.default)("networks-tab__content", {
                              "networks-tab__content--with-networks-list-popup-footer": !_ && !E
                            })
                          },
                          e
                            ? n.default.createElement(T.default, {
                                networksToRender: w,
                                addNewNetwork: e,
                                submitCallback: () => b.push(c.DEFAULT_ROUTE),
                                cancelCallback: () => b.push(c.NETWORKS_ROUTE)
                              })
                            : n.default.createElement(
                                n.default.Fragment,
                                null,
                                n.default.createElement(v.default, {
                                  networkDefaultedToProvider: N,
                                  networkIsSelected: R,
                                  networksToRender: w,
                                  providerUrl: k.rpcUrl,
                                  selectedNetwork: P,
                                  shouldRenderNetworkForm: E
                                }),
                                _ || E
                                  ? null
                                  : n.default.createElement(
                                      "div",
                                      { className: "networks-tab__networks-list-popup-footer" },
                                      n.default.createElement(
                                        d.default,
                                        {
                                          type: "primary",
                                          onClick: () => {
                                            _
                                              ? b.push(c.ADD_POPULAR_CUSTOM_NETWORK)
                                              : global.platform.openExtensionInBrowser(c.ADD_POPULAR_CUSTOM_NETWORK);
                                          }
                                        },
                                        t("addNetwork")
                                      )
                                    )
                              )
                        )
                      )
                    );
                  };
                C.propTypes = { addNewNetwork: r.default.bool };
                a.default = C;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab.js" }
    ],
    [
      5087,
      { "./security-tab.container": 5089 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./security-tab.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/security-tab/index.js" }
    ],
    [
      5088,
      {
        "../../../../app/scripts/lib/util": 82,
        "../../../../shared/constants/app": 3953,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/network": 3963,
        "../../../../shared/lib/ui-utils": 3983,
        "../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle": 4146,
        "../../../components/app/srp-quiz-modal/SRPQuiz": 4331,
        "../../../components/component-library": 4453,
        "../../../components/ui/text-field": 4725,
        "../../../components/ui/toggle-button": 4729,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/settings-search": 4808,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("lodash"),
                  r = y(e("prop-types")),
                  o = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = T(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  i = e("../../../../app/scripts/lib/util"),
                  s = e("../../../../shared/constants/app"),
                  l = e("../../../../shared/constants/metametrics"),
                  c = e("../../../../shared/constants/network"),
                  u = e("../../../../shared/lib/ui-utils"),
                  d = y(e("../../../components/app/srp-quiz-modal/SRPQuiz")),
                  p = e("../../../components/component-library"),
                  f = y(e("../../../components/ui/text-field")),
                  m = y(e("../../../components/ui/toggle-button")),
                  g = e("../../../helpers/constants/design-system"),
                  h = e("../../../helpers/constants/routes"),
                  b = e("../../../helpers/utils/settings-search"),
                  v = y(e("../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle"));
                function T(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (T = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function _(e, t, a) {
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
                class E extends o.PureComponent {
                  constructor(...e) {
                    super(...e),
                      _(this, "state", {
                        ipfsGateway: this.props.ipfsGateway || c.IPFS_DEFAULT_GATEWAY_URL,
                        ipfsGatewayError: "",
                        srpQuizModalVisible: !1,
                        ipfsToggle: this.props.ipfsGateway.length > 0
                      }),
                      _(this, "settingsRefCounter", 0),
                      _(
                        this,
                        "settingsRefs",
                        Array((0, b.getNumberOfSettingsInSection)(this.context.t, this.context.t("securityAndPrivacy")))
                          .fill(undefined)
                          .map(() => o.default.createRef())
                      ),
                      _(this, "hideSrpQuizModal", () => this.setState({ srpQuizModalVisible: !1 }));
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, b.handleSettingsRefs)(e, e("securityAndPrivacy"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, b.handleSettingsRefs)(e, e("securityAndPrivacy"), this.settingsRefs);
                  }
                  toggleSetting(e, t, a, n) {
                    this.context.trackEvent({
                      category: l.MetaMetricsEventCategory.Settings,
                      event: t,
                      properties: { action: a, legacy_event: !0 }
                    }),
                      n(!e);
                  }
                  renderSeedWords() {
                    const { t: e } = this.context;
                    return o.default.createElement(
                      o.default.Fragment,
                      null,
                      o.default.createElement(
                        "div",
                        { ref: this.settingsRefs[0], className: "settings-page__security-tab-sub-header" },
                        e("secretRecoveryPhrase")
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-padded" },
                        o.default.createElement(
                          p.Button,
                          {
                            "data-testid": "reveal-seed-words",
                            type: "danger",
                            size: p.BUTTON_SIZES.LG,
                            onClick: (e) => {
                              e.preventDefault(),
                                this.context.trackEvent({
                                  category: l.MetaMetricsEventCategory.Settings,
                                  event: l.MetaMetricsEventName.KeyExportSelected,
                                  properties: { key_type: l.MetaMetricsEventKeyType.Srp, location: "Settings" }
                                }),
                                this.context.trackEvent({
                                  category: l.MetaMetricsEventCategory.Settings,
                                  event: l.MetaMetricsEventName.SrpRevealClicked,
                                  properties: { key_type: l.MetaMetricsEventKeyType.Srp, location: "Settings" }
                                }),
                                this.setState({ srpQuizModalVisible: !0 });
                            }
                          },
                          e("revealSeedWords")
                        ),
                        this.state.srpQuizModalVisible &&
                          o.default.createElement(d.default, { isOpen: this.state.srpQuizModalVisible, onClose: this.hideSrpQuizModal })
                      )
                    );
                  }
                  renderIncomingTransactionsOptIn() {
                    const { incomingTransactionsPreferences: e, allNetworks: t, setIncomingTransactionsPreferences: a } = this.props;
                    return o.default.createElement(v.default, {
                      wrapperRef: this.settingsRefs[1],
                      allNetworks: t,
                      setIncomingTransactionsPreferences: a,
                      incomingTransactionsPreferences: e
                    });
                  }
                  renderPhishingDetectionToggle() {
                    const { t: e } = this.context,
                      { usePhishDetect: t, setUsePhishDetect: a } = this.props;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[2],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("usePhishingDetection")),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("usePhishingDetectionDescription")
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "usePhishingDetection" },
                        o.default.createElement(m.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderUse4ByteResolutionToggle() {
                    const { t: e } = this.context,
                      { use4ByteResolution: t, setUse4ByteResolution: a } = this.props;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[3],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("use4ByteResolution")),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("use4ByteResolutionDescription")
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "4byte-resolution-container" },
                        o.default.createElement(m.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderMetaMetricsOptIn() {
                    const { t: e } = this.context,
                      { participateInMetaMetrics: t, setParticipateInMetaMetrics: a } = this.props;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[4],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("participateInMetaMetrics")),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          o.default.createElement("span", null, e("participateInMetaMetricsDescription"))
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "participateInMetaMetrics" },
                        o.default.createElement(m.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderChooseYourNetworkButton() {
                    const { t: e } = this.context;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[5],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-choose-your-network",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Column,
                        gap: 4
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("chooseYourNetwork")),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("chooseYourNetworkDescription", [
                            o.default.createElement(
                              "a",
                              {
                                href: u.CONSENSYS_PRIVACY_LINK,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                key: "cyn-consensys-privacy-link"
                              },
                              e("privacyMsg")
                            )
                          ])
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        o.default.createElement(
                          p.Button,
                          {
                            type: "secondary",
                            className: "settings-page__button",
                            onClick: () => {
                              (0, i.getEnvironmentType)() === s.ENVIRONMENT_TYPE_POPUP
                                ? global.platform.openExtensionInBrowser(h.ADD_POPULAR_CUSTOM_NETWORK)
                                : this.props.history.push(h.ADD_POPULAR_CUSTOM_NETWORK);
                            }
                          },
                          e("addCustomNetwork")
                        )
                      )
                    );
                  }
                  renderSafeChainsListValidationToggle() {
                    const { t: e } = this.context,
                      { useSafeChainsListValidation: t, setUseSafeChainsListValidation: a } = this.props,
                      n = e("useSafeChainsListValidationWebsite");
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[2],
                        className: "settings-page__content-row",
                        "data-testid": "setting-safe-chains-validation",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Column,
                        gap: 4
                      },
                      o.default.createElement(
                        p.Box,
                        {
                          className: "settings-page__content-row",
                          gap: 4,
                          display: g.Display.Flex,
                          flexDirection: g.FlexDirection.Row,
                          justifyContent: g.JustifyContent.spaceBetween
                        },
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          o.default.createElement("span", null, e("useSafeChainsListValidation")),
                          o.default.createElement(
                            "div",
                            { className: "settings-page__content-description" },
                            e("useSafeChainsListValidationDescription", [
                              o.default.createElement("b", { key: "safechain-list-validation-website" }, n)
                            ])
                          )
                        ),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col", "data-testid": "useSafeChainsListValidation" },
                          o.default.createElement(m.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                        )
                      )
                    );
                  }
                  renderIpfsGatewayControl() {
                    const { t: e } = this.context;
                    let t = "";
                    const a = (a) => {
                      if (a.length > 0)
                        try {
                          const n = (0, i.addUrlProtocolPrefix)(a);
                          n || (t = e("invalidIpfsGateway"));
                          const r = new URL(n);
                          "gateway.ipfs.io" === r.host && (t = e("forbiddenIpfsGateway")),
                            0 === t.length && this.props.setIpfsGateway(r.host);
                        } catch (a) {
                          t = e("invalidIpfsGateway");
                        }
                      else t = e("invalidIpfsGateway");
                      this.setState({ ipfsGateway: a, ipfsGatewayError: t });
                    };
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[6],
                        className: "settings-page__content-row",
                        "data-testid": "setting-ipfs-gateway",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Column,
                        gap: 4
                      },
                      o.default.createElement(
                        p.Box,
                        {
                          className: "settings-page__content-row",
                          gap: 4,
                          display: g.Display.Flex,
                          flexDirection: g.FlexDirection.Row,
                          justifyContent: g.JustifyContent.spaceBetween
                        },
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          o.default.createElement("span", null, e("ipfsGateway")),
                          o.default.createElement("div", { className: "settings-page__content-description" }, e("ipfsGatewayDescription"))
                        ),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col", "data-testid": "ipfsToggle" },
                          o.default.createElement(m.default, {
                            value: this.state.ipfsToggle,
                            onToggle: (e) => {
                              e ? this.props.setIpfsGateway("") : a(this.state.ipfsGateway), this.setState({ ipfsToggle: !e });
                            },
                            offLabel: e("off"),
                            onLabel: e("on")
                          })
                        )
                      ),
                      this.state.ipfsToggle &&
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          o.default.createElement("span", null, e("addIPFSGateway")),
                          o.default.createElement(
                            "div",
                            { className: "settings-page__content-item-col" },
                            o.default.createElement(f.default, {
                              type: "text",
                              value: this.state.ipfsGateway,
                              onChange: (e) => a(e.target.value),
                              error: this.state.ipfsGatewayError,
                              fullWidth: !0,
                              margin: "dense"
                            })
                          )
                        ),
                      o.default.createElement(
                        p.Box,
                        {
                          className: "settings-page__content-row",
                          display: g.Display.Flex,
                          flexDirection: g.FlexDirection.Row,
                          justifyContent: g.JustifyContent.spaceBetween,
                          gap: 4,
                          ref: this.settingsRefs[10],
                          marginTop: 3,
                          id: "ens-domains"
                        },
                        o.default.createElement(
                          "div",
                          null,
                          e("ensDomainsSettingTitle"),
                          o.default.createElement(
                            "div",
                            { className: "settings-page__content-description" },
                            o.default.createElement(
                              p.Text,
                              { color: g.TextColor.inherit, variant: g.TextVariant.inherit },
                              e("ensDomainsSettingDescriptionIntroduction")
                            ),
                            o.default.createElement(
                              p.Box,
                              { as: "ul", marginTop: 4, marginBottom: 4, paddingInlineStart: 4, style: { listStyleType: "circle" } },
                              o.default.createElement(
                                p.Text,
                                { as: "li", color: g.TextColor.inherit, variant: g.TextVariant.inherit },
                                e("ensDomainsSettingDescriptionPart1")
                              ),
                              o.default.createElement(
                                p.Text,
                                { as: "li", color: g.TextColor.inherit, variant: g.TextVariant.inherit },
                                e("ensDomainsSettingDescriptionPart2")
                              )
                            ),
                            o.default.createElement(
                              p.Text,
                              { color: g.TextColor.inherit, variant: g.TextVariant.inherit },
                              e("ensDomainsSettingDescriptionOutroduction")
                            )
                          )
                        ),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col", "data-testid": "ipfs-gateway-resolution-container" },
                          o.default.createElement(m.default, {
                            value: this.props.useAddressBarEnsResolution,
                            onToggle: (e) => this.props.setUseAddressBarEnsResolution(!e),
                            offLabel: e("off"),
                            onLabel: e("on")
                          })
                        )
                      )
                    );
                  }
                  renderAutoDetectTokensToggle() {
                    const { t: e } = this.context,
                      { useTokenDetection: t, setUseTokenDetection: a } = this.props;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[7],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-gas-fee-estimation",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4,
                        id: "advanced-settings-autodetect-tokens"
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("autoDetectTokens")),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("autoDetectTokensDescription", [
                            o.default.createElement(
                              "a",
                              {
                                href: u.AUTO_DETECT_TOKEN_LEARN_MORE_LINK,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                key: "cyn-consensys-privacy-link"
                              },
                              (0, n.startCase)(e("learnMore"))
                            )
                          ])
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "autoDetectTokens" },
                        o.default.createElement(m.default, {
                          value: t,
                          onToggle: (e) => {
                            this.toggleSetting(
                              e,
                              l.MetaMetricsEventName.KeyAutoDetectTokens,
                              l.MetaMetricsEventName.KeyAutoDetectTokens,
                              a
                            );
                          },
                          offLabel: e("off"),
                          onLabel: e("on")
                        })
                      )
                    );
                  }
                  renderBatchAccountBalanceRequestsToggle() {
                    const { t: e } = this.context,
                      { useMultiAccountBalanceChecker: t, setUseMultiAccountBalanceChecker: a } = this.props;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[8],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("useMultiAccountBalanceChecker")),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("useMultiAccountBalanceCheckerSettingDescription")
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "useMultiAccountBalanceChecker" },
                        o.default.createElement(m.default, {
                          value: t,
                          onToggle: (e) => {
                            this.toggleSetting(
                              e,
                              l.MetaMetricsEventName.KeyBatchAccountBalanceRequests,
                              l.MetaMetricsEventName.KeyBatchAccountBalanceRequests,
                              a
                            );
                          },
                          offLabel: e("off"),
                          onLabel: e("on")
                        })
                      )
                    );
                  }
                  renderCurrencyRateCheckToggle() {
                    const { t: e } = this.context,
                      { useCurrencyRateCheck: t, setUseCurrencyRateCheck: a } = this.props;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[9],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("currencyRateCheckToggle")),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("currencyRateCheckToggleDescription", [
                            o.default.createElement(
                              "a",
                              { key: "coingecko_link", href: u.COINGECKO_LINK, rel: "noreferrer", target: "_blank" },
                              e("coingecko")
                            ),
                            o.default.createElement(
                              "a",
                              { key: "cryptocompare_link", href: u.CRYPTOCOMPARE_LINK, rel: "noreferrer", target: "_blank" },
                              e("cryptoCompare")
                            ),
                            o.default.createElement(
                              "a",
                              { key: "privacy_policy_link", href: u.PRIVACY_POLICY_LINK, rel: "noreferrer", target: "_blank" },
                              e("privacyMsg")
                            )
                          ])
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "currencyRateCheckToggle" },
                        o.default.createElement(m.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderDisplayNftMediaToggle() {
                    const { t: e } = this.context,
                      { openSeaEnabled: t, setOpenSeaEnabled: a, useNftDetection: n, setUseNftDetection: r } = this.props;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[11],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4,
                        id: "display-nft-media"
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("displayNftMedia")),
                        o.default.createElement("div", { className: "settings-page__content-description" }, e("displayNftMediaDescription"))
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "displayNftMedia" },
                        o.default.createElement(m.default, {
                          value: t,
                          onToggle: (e) => {
                            this.context.trackEvent({
                              category: l.MetaMetricsEventCategory.Settings,
                              event: "Enabled/Disable OpenSea",
                              properties: { action: "Enabled/Disable OpenSea", legacy_event: !0 }
                            }),
                              e && n && r(!1),
                              a(!e);
                          },
                          offLabel: e("off"),
                          onLabel: e("on")
                        })
                      )
                    );
                  }
                  renderNftDetectionToggle() {
                    const { t: e } = this.context,
                      { openSeaEnabled: t, setOpenSeaEnabled: a, useNftDetection: n, setUseNftDetection: r } = this.props;
                    return o.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[12],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        o.default.createElement("span", null, e("useNftDetection")),
                        o.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("useNftDetectionDescriptionText")
                        )
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "useNftDetection" },
                        o.default.createElement(m.default, {
                          value: n,
                          onToggle: (e) => {
                            this.context.trackEvent({
                              category: l.MetaMetricsEventCategory.Settings,
                              event: "NFT Detected",
                              properties: { action: "NFT Detected", legacy_event: !0 }
                            }),
                              e || t || a(!e),
                              r(!e);
                          },
                          offLabel: e("off"),
                          onLabel: e("on")
                        })
                      )
                    );
                  }
                  render() {
                    const { warning: e } = this.props;
                    return o.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      e && o.default.createElement("div", { className: "settings-tab__error" }, e),
                      o.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header__bold" },
                        this.context.t("security")
                      ),
                      this.renderSeedWords(),
                      o.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header__bold" },
                        this.context.t("privacy")
                      ),
                      o.default.createElement(
                        "div",
                        null,
                        o.default.createElement("span", { className: "settings-page__security-tab-sub-header" }, this.context.t("alerts"))
                      ),
                      o.default.createElement("div", { className: "settings-page__content-padded" }, this.renderPhishingDetectionToggle()),
                      o.default.createElement(
                        "div",
                        null,
                        o.default.createElement(
                          "span",
                          { className: "settings-page__security-tab-sub-header" },
                          this.context.t("smartContracts")
                        )
                      ),
                      o.default.createElement("div", { className: "settings-page__content-padded" }, this.renderUse4ByteResolutionToggle()),
                      o.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header" },
                        this.context.t("transactions")
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-padded" },
                        this.renderCurrencyRateCheckToggle(),
                        this.renderIncomingTransactionsOptIn()
                      ),
                      o.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header" },
                        this.context.t("networkProvider")
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-padded" },
                        this.renderChooseYourNetworkButton(),
                        this.renderSafeChainsListValidationToggle(),
                        this.renderIpfsGatewayControl()
                      ),
                      o.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header" },
                        this.context.t("tokenAutoDetection")
                      ),
                      o.default.createElement(
                        "div",
                        { className: "settings-page__content-padded" },
                        this.renderAutoDetectTokensToggle(),
                        this.renderBatchAccountBalanceRequestsToggle(),
                        this.renderDisplayNftMediaToggle(),
                        this.renderNftDetectionToggle()
                      ),
                      o.default.createElement("span", { className: "settings-page__security-tab-sub-header" }, this.context.t("metrics")),
                      o.default.createElement("div", { className: "settings-page__content-padded" }, this.renderMetaMetricsOptIn())
                    );
                  }
                }
                (a.default = E),
                  _(E, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  _(E, "propTypes", {
                    warning: r.default.string,
                    history: r.default.object,
                    openSeaEnabled: r.default.bool,
                    setOpenSeaEnabled: r.default.func,
                    useNftDetection: r.default.bool,
                    setUseNftDetection: r.default.func,
                    participateInMetaMetrics: r.default.bool.isRequired,
                    setParticipateInMetaMetrics: r.default.func.isRequired,
                    incomingTransactionsPreferences: r.default.object.isRequired,
                    allNetworks: r.default.array.isRequired,
                    setIncomingTransactionsPreferences: r.default.func.isRequired,
                    setUsePhishDetect: r.default.func.isRequired,
                    usePhishDetect: r.default.bool.isRequired,
                    setUse4ByteResolution: r.default.func.isRequired,
                    use4ByteResolution: r.default.bool.isRequired,
                    useTokenDetection: r.default.bool.isRequired,
                    setUseTokenDetection: r.default.func.isRequired,
                    setIpfsGateway: r.default.func.isRequired,
                    ipfsGateway: r.default.string.isRequired,
                    useMultiAccountBalanceChecker: r.default.bool.isRequired,
                    setUseMultiAccountBalanceChecker: r.default.func.isRequired,
                    useSafeChainsListValidation: r.default.bool.isRequired,
                    setUseSafeChainsListValidation: r.default.func.isRequired,
                    useCurrencyRateCheck: r.default.bool.isRequired,
                    setUseCurrencyRateCheck: r.default.func.isRequired,
                    useAddressBarEnsResolution: r.default.bool.isRequired,
                    setUseAddressBarEnsResolution: r.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/security-tab/security-tab.component.js" }
    ],
    [
      5089,
      {
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./security-tab.component": 5088,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("redux"),
                  s = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c = (n = e("./security-tab.component")) && n.__esModule ? n : { default: n };
                a.default = (0, i.compose)(
                  o.withRouter,
                  (0, r.connect)(
                    (e) => {
                      const {
                          appState: { warning: t },
                          metamask: a
                        } = e,
                        {
                          incomingTransactionsPreferences: n,
                          participateInMetaMetrics: r,
                          usePhishDetect: o,
                          useTokenDetection: i,
                          ipfsGateway: s,
                          useMultiAccountBalanceChecker: c,
                          useSafeChainsListValidation: u,
                          useCurrencyRateCheck: d,
                          useAddressBarEnsResolution: p,
                          openSeaEnabled: f,
                          useNftDetection: m,
                          use4ByteResolution: g
                        } = a;
                      return {
                        warning: t,
                        incomingTransactionsPreferences: n,
                        allNetworks: (0, l.getAllNetworks)(e),
                        participateInMetaMetrics: r,
                        usePhishDetect: o,
                        useTokenDetection: i,
                        ipfsGateway: s,
                        useMultiAccountBalanceChecker: c,
                        useSafeChainsListValidation: u,
                        useCurrencyRateCheck: d,
                        useAddressBarEnsResolution: p,
                        openSeaEnabled: f,
                        useNftDetection: m,
                        use4ByteResolution: g
                      };
                    },
                    (e) => ({
                      setIncomingTransactionsPreferences: (t, a) => e((0, s.setIncomingTransactionsPreferences)(t, a)),
                      setParticipateInMetaMetrics: (t) => e((0, s.setParticipateInMetaMetrics)(t)),
                      setUsePhishDetect: (t) => e((0, s.setUsePhishDetect)(t)),
                      setUseCurrencyRateCheck: (t) => e((0, s.setUseCurrencyRateCheck)(t)),
                      setUseTokenDetection: (t) => e((0, s.setUseTokenDetection)(t)),
                      setIpfsGateway: (t) => e((0, s.setIpfsGateway)(t)),
                      setUseMultiAccountBalanceChecker: (t) => e((0, s.setUseMultiAccountBalanceChecker)(t)),
                      setUseAddressBarEnsResolution: (t) => e((0, s.setUseAddressBarEnsResolution)(t)),
                      setUseSafeChainsListValidation: (t) => e((0, s.setUseSafeChainsListValidation)(t)),
                      setOpenSeaEnabled: (t) => e((0, s.setOpenSeaEnabled)(t)),
                      setUseNftDetection: (t) => e((0, s.setUseNftDetection)(t)),
                      setUse4ByteResolution: (t) => e((0, s.setUse4ByteResolution)(t))
                    })
                  )
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/security-tab/security-tab.container.js" }
    ],
    [
      509,
      { "./wordlist": 512, "@ethersproject/bytes": 430, "@ethersproject/strings": 495 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n,
                  r =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function a() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
                    });
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.langJa = void 0);
                var o = e("@ethersproject/bytes"),
                  i = e("@ethersproject/strings"),
                  s = e("./wordlist"),
                  l = [
                    "AQRASRAGBAGUAIRAHBAghAURAdBAdcAnoAMEAFBAFCBKFBQRBSFBCXBCDBCHBGFBEQBpBBpQBIkBHNBeOBgFBVCBhBBhNBmOBmRBiHBiFBUFBZDBvFBsXBkFBlcBjYBwDBMBBTBBTRBWBBWXXaQXaRXQWXSRXCFXYBXpHXOQXHRXhRXuRXmXXbRXlXXwDXTRXrCXWQXWGaBWaKcaYgasFadQalmaMBacAKaRKKBKKXKKjKQRKDRKCYKCRKIDKeVKHcKlXKjHKrYNAHNBWNaRNKcNIBNIONmXNsXNdXNnBNMBNRBNrXNWDNWMNFOQABQAHQBrQXBQXFQaRQKXQKDQKOQKFQNBQNDQQgQCXQCDQGBQGDQGdQYXQpBQpQQpHQLXQHuQgBQhBQhCQuFQmXQiDQUFQZDQsFQdRQkHQbRQlOQlmQPDQjDQwXQMBQMDQcFQTBQTHQrDDXQDNFDGBDGQDGRDpFDhFDmXDZXDbRDMYDRdDTRDrXSAhSBCSBrSGQSEQSHBSVRShYShkSyQSuFSiBSdcSoESocSlmSMBSFBSFKSFNSFdSFcCByCaRCKcCSBCSRCCrCGbCEHCYXCpBCpQCIBCIHCeNCgBCgFCVECVcCmkCmwCZXCZFCdRClOClmClFCjDCjdCnXCwBCwXCcRCFQCFjGXhGNhGDEGDMGCDGCHGIFGgBGVXGVEGVRGmXGsXGdYGoSGbRGnXGwXGwDGWRGFNGFLGFOGFdGFkEABEBDEBFEXOEaBEKSENBENDEYXEIgEIkEgBEgQEgHEhFEudEuFEiBEiHEiFEZDEvBEsXEsFEdXEdREkFEbBEbRElFEPCEfkEFNYAEYAhYBNYQdYDXYSRYCEYYoYgQYgRYuRYmCYZTYdBYbEYlXYjQYRbYWRpKXpQopQnpSFpCXpIBpISphNpdBpdRpbRpcZpFBpFNpFDpFopFrLADLBuLXQLXcLaFLCXLEhLpBLpFLHXLeVLhILdHLdRLoDLbRLrXIABIBQIBCIBsIBoIBMIBRIXaIaRIKYIKRINBINuICDIGBIIDIIkIgRIxFIyQIiHIdRIbYIbRIlHIwRIMYIcRIRVITRIFBIFNIFQOABOAFOBQOaFONBONMOQFOSFOCDOGBOEQOpBOLXOIBOIFOgQOgFOyQOycOmXOsXOdIOkHOMEOMkOWWHBNHXNHXWHNXHDuHDRHSuHSRHHoHhkHmRHdRHkQHlcHlRHwBHWcgAEgAggAkgBNgBQgBEgXOgYcgLXgHjgyQgiBgsFgdagMYgWSgFQgFEVBTVXEVKBVKNVKDVKYVKRVNBVNYVDBVDxVSBVSRVCjVGNVLXVIFVhBVhcVsXVdRVbRVlRhBYhKYhDYhGShxWhmNhdahdkhbRhjohMXhTRxAXxXSxKBxNBxEQxeNxeQxhXxsFxdbxlHxjcxFBxFNxFQxFOxFoyNYyYoybcyMYuBQuBRuBruDMuCouHBudQukkuoBulVuMXuFEmCYmCRmpRmeDmiMmjdmTFmFQiADiBOiaRiKRiNBiNRiSFiGkiGFiERipRiLFiIFihYibHijBijEiMXiWBiFBiFCUBQUXFUaRUNDUNcUNRUNFUDBUSHUCDUGBUGFUEqULNULoUIRUeEUeYUgBUhFUuRUiFUsXUdFUkHUbBUjSUjYUwXUMDUcHURdUTBUrBUrXUrQZAFZXZZaRZKFZNBZQFZCXZGBZYdZpBZLDZIFZHXZHNZeQZVRZVFZmXZiBZvFZdFZkFZbHZbFZwXZcCZcRZRBvBQvBGvBLvBWvCovMYsAFsBDsaRsKFsNFsDrsSHsSFsCXsCRsEBsEHsEfspBsLBsLDsIgsIRseGsbRsFBsFQsFSdNBdSRdCVdGHdYDdHcdVbdySduDdsXdlRdwXdWYdWcdWRkBMkXOkaRkNIkNFkSFkCFkYBkpRkeNkgBkhVkmXksFklVkMBkWDkFNoBNoaQoaFoNBoNXoNaoNEoSRoEroYXoYCoYbopRopFomXojkowXorFbBEbEIbdBbjYlaRlDElMXlFDjKjjSRjGBjYBjYkjpRjLXjIBjOFjeVjbRjwBnXQnSHnpFnLXnINnMBnTRwXBwXNwXYwNFwQFwSBwGFwLXwLDweNwgBwuHwjDwnXMBXMpFMIBMeNMTHcaQcNBcDHcSFcCXcpBcLXcLDcgFcuFcnXcwXccDcTQcrFTQErXNrCHrpFrgFrbFrTHrFcWNYWNbWEHWMXWTR",
                    "ABGHABIJAEAVAYJQALZJAIaRAHNXAHdcAHbRAZJMAZJRAZTRAdVJAklmAbcNAjdRAMnRAMWYAWpRAWgRAFgBAFhBAFdcBNJBBNJDBQKBBQhcBQlmBDEJBYJkBYJTBpNBBpJFBIJBBIJDBIcABOKXBOEJBOVJBOiJBOZJBepBBeLXBeIFBegBBgGJBVJXBuocBiJRBUJQBlXVBlITBwNFBMYVBcqXBTlmBWNFBWiJBWnRBFGHBFwXXKGJXNJBXNZJXDTTXSHSXSVRXSlHXCJDXGQJXEhXXYQJXYbRXOfXXeNcXVJFXhQJXhEJXdTRXjdXXMhBXcQTXRGBXTEBXTnQXFCXXFOFXFgFaBaFaBNJaBCJaBpBaBwXaNJKaNJDaQIBaDpRaEPDaHMFamDJalEJaMZJaFaFaFNBaFQJaFLDaFVHKBCYKBEBKBHDKXaFKXGdKXEJKXpHKXIBKXZDKXwXKKwLKNacKNYJKNJoKNWcKDGdKDTRKChXKGaRKGhBKGbRKEBTKEaRKEPTKLMDKLWRKOHDKVJcKdBcKlIBKlOPKFSBKFEPKFpFNBNJNJBQNBGHNBEPNBHXNBgFNBVXNBZDNBsXNBwXNNaRNNJDNNJENNJkNDCJNDVDNGJRNJiDNZJNNsCJNJFNNFSBNFCXNFEPNFLXNFIFQJBFQCaRQJEQQLJDQLJFQIaRQOqXQHaFQHHQQVJXQVJDQhNJQmEIQZJFQsJXQJrFQWbRDJABDBYJDXNFDXCXDXLXDXZDDXsJDQqXDSJFDJCXDEPkDEqXDYmQDpSJDOCkDOGQDHEIDVJDDuDuDWEBDJFgSBNDSBSFSBGHSBIBSBTQSKVYSJQNSJQiSJCXSEqXSJYVSIiJSOMYSHAHSHaQSeCFSepQSegBSHdHSHrFShSJSJuHSJUFSkNRSrSrSWEBSFaHSJFQSFCXSFGDSFYXSFODSFgBSFVXSFhBSFxFSFkFSFbBSFMFCADdCJXBCXaFCXKFCXNFCXCXCXGBCXEJCXYBCXLDCXIBCXOPCXHXCXgBCXhBCXiBCXlDCXcHCJNBCJNFCDCJCDGBCDVXCDhBCDiDCDJdCCmNCpJFCIaRCOqXCHCHCHZJCViJCuCuCmddCJiFCdNBCdHhClEJCnUJCreSCWlgCWTRCFBFCFNBCFYBCFVFCFhFCFdSCFTBCFWDGBNBGBQFGJBCGBEqGBpBGBgQGNBEGNJYGNkOGNJRGDUFGJpQGHaBGJeNGJeEGVBlGVKjGiJDGvJHGsVJGkEBGMIJGWjNGFBFGFCXGFGBGFYXGFpBGFMFEASJEAWpEJNFECJVEIXSEIQJEOqXEOcFEeNcEHEJEHlFEJgFEhlmEmDJEmZJEiMBEUqXEoSREPBFEPXFEPKFEPSFEPEFEPpFEPLXEPIBEJPdEPcFEPTBEJnXEqlHEMpREFCXEFODEFcFYASJYJAFYBaBYBVXYXpFYDhBYCJBYJGFYYbRYeNcYJeVYiIJYZJcYvJgYvJRYJsXYsJFYMYMYreVpBNHpBEJpBwXpQxFpYEJpeNDpJeDpeSFpeCHpHUJpHbBpHcHpmUJpiiJpUJrpsJuplITpFaBpFQqpFGBpFEfpFYBpFpBpFLJpFIDpFgBpFVXpFyQpFuFpFlFpFjDpFnXpFwXpJFMpFTBLXCJLXEFLXhFLXUJLXbFLalmLNJBLSJQLCLCLGJBLLDJLHaFLeNFLeSHLeCXLepFLhaRLZsJLsJDLsJrLocaLlLlLMdbLFNBLFSBLFEHLFkFIBBFIBXFIBaQIBKXIBSFIBpHIBLXIBgBIBhBIBuHIBmXIBiFIBZXIBvFIBbFIBjQIBwXIBWFIKTRIQUJIDGFICjQIYSRIINXIJeCIVaRImEkIZJFIvJRIsJXIdCJIJoRIbBQIjYBIcqXITFVIreVIFKFIFSFIFCJIFGFIFLDIFIBIJFOIFgBIFVXIJFhIFxFIFmXIFdHIFbBIJFrIJFWOBGBOQfXOOKjOUqXOfXBOqXEOcqXORVJOFIBOFlDHBIOHXiFHNTRHCJXHIaRHHJDHHEJHVbRHZJYHbIBHRsJHRkDHWlmgBKFgBSBgBCDgBGHgBpBgBIBgBVJgBuBgBvFgKDTgQVXgDUJgGSJgOqXgmUMgZIJgTUJgWIEgFBFgFNBgFDJgFSFgFGBgFYXgJFOgFgQgFVXgFhBgFbHgJFWVJABVQKcVDgFVOfXVeDFVhaRVmGdViJYVMaRVFNHhBNDhBCXhBEqhBpFhBLXhNJBhSJRheVXhhKEhxlmhZIJhdBQhkIJhbMNhMUJhMZJxNJgxQUJxDEkxDdFxSJRxplmxeSBxeCXxeGFxeYXxepQxegBxWVcxFEQxFLXxFIBxFgBxFxDxFZtxFdcxFbBxFwXyDJXyDlcuASJuDJpuDIBuCpJuGSJuIJFueEFuZIJusJXudWEuoIBuWGJuFBcuFKEuFNFuFQFuFDJuFGJuFVJuFUtuFdHuFTBmBYJmNJYmQhkmLJDmLJomIdXmiJYmvJRmsJRmklmmMBymMuCmclmmcnQiJABiJBNiJBDiBSFiBCJiBEFiBYBiBpFiBLXiBTHiJNciDEfiCZJiECJiJEqiOkHiHKFieNDiHJQieQcieDHieSFieCXieGFieEFieIHiegFihUJixNoioNXiFaBiFKFiFNDiFEPiFYXitFOitFHiFgBiFVEiFmXiFitiFbBiFMFiFrFUCXQUIoQUIJcUHQJUeCEUHwXUUJDUUqXUdWcUcqXUrnQUFNDUFSHUFCFUFEfUFLXUtFOZBXOZXSBZXpFZXVXZEQJZEJkZpDJZOqXZeNHZeCDZUqXZFBQZFEHZFLXvBAFvBKFvBCXvBEPvBpHvBIDvBgFvBuHvQNJvFNFvFGBvFIBvJFcsXCDsXLXsXsXsXlFsXcHsQqXsJQFsEqXseIFsFEHsFjDdBxOdNpRdNJRdEJbdpJRdhZJdnSJdrjNdFNJdFQHdFhNkNJDkYaRkHNRkHSRkVbRkuMRkjSJkcqDoSJFoEiJoYZJoOfXohEBoMGQocqXbBAFbBXFbBaFbBNDbBGBbBLXbBTBbBWDbGJYbIJHbFQqbFpQlDgQlOrFlVJRjGEBjZJRnXvJnXbBnEfHnOPDngJRnxfXnUJWwXEJwNpJwDpBwEfXwrEBMDCJMDGHMDIJMLJDcQGDcQpHcqXccqNFcqCXcFCJRBSBRBGBRBEJRBpQTBNFTBQJTBpBTBVXTFABTFSBTFCFTFGBTFMDrXCJrXLDrDNJrEfHrFQJrFitWNjdWNTR",
                    "AKLJMANOPFASNJIAEJWXAYJNRAIIbRAIcdaAeEfDAgidRAdjNYAMYEJAMIbRAFNJBAFpJFBBIJYBDZJFBSiJhBGdEBBEJfXBEJqXBEJWRBpaUJBLXrXBIYJMBOcfXBeEfFBestXBjNJRBcDJOBFEqXXNvJRXDMBhXCJNYXOAWpXONJWXHDEBXeIaRXhYJDXZJSJXMDJOXcASJXFVJXaBQqXaBZJFasXdQaFSJQaFEfXaFpJHaFOqXKBNSRKXvJBKQJhXKEJQJKEJGFKINJBKIJjNKgJNSKVElmKVhEBKiJGFKlBgJKjnUJKwsJYKMFIJKFNJDKFIJFKFOfXNJBSFNJBCXNBpJFNJBvQNJBMBNJLJXNJOqXNJeCXNJeGFNdsJCNbTKFNwXUJQNFEPQDiJcQDMSJQSFpBQGMQJQJeOcQyCJEQUJEBQJFBrQFEJqDXDJFDJXpBDJXIMDGiJhDIJGRDJeYcDHrDJDVXgFDkAWpDkIgRDjDEqDMvJRDJFNFDJFIBSKclmSJQOFSJQVHSJQjDSJGJBSJGJFSECJoSHEJqSJHTBSJVJDSViJYSZJNBSJsJDSFSJFSFEfXSJFLXCBUJVCJXSBCJXpBCXVJXCJXsXCJXdFCJNJHCLIJgCHiJFCVNJMChCJhCUHEJCsJTRCJdYcCoQJCCFEfXCFIJgCFUJxCFstFGJBaQGJBIDGQJqXGYJNRGJHKFGeQqDGHEJFGJeLXGHIiJGHdBlGUJEBGkIJTGFQPDGJFEqEAGegEJIJBEJVJXEhQJTEiJNcEJZJFEJoEqEjDEqEPDsXEPGJBEPOqXEPeQFEfDiDEJfEFEfepQEfMiJEqXNBEqDIDEqeSFEqVJXEMvJRYXNJDYXEJHYKVJcYYJEBYJeEcYJUqXYFpJFYFstXpAZJMpBSJFpNBNFpeQPDpHLJDpHIJFpHgJFpeitFpHZJFpJFADpFSJFpJFCJpFOqXpFitBpJFZJLXIJFLIJgRLVNJWLVHJMLwNpJLFGJBLFLJDLFOqXLJFUJIBDJXIBGJBIJBYQIJBIBIBOqXIBcqDIEGJFILNJTIIJEBIOiJhIJeNBIJeIBIhiJIIWoTRIJFAHIJFpBIJFuHIFUtFIJFTHOSBYJOEcqXOHEJqOvBpFOkVJrObBVJOncqDOcNJkHhNJRHuHJuHdMhBgBUqXgBsJXgONJBgHNJDgHHJQgJeitgHsJXgJyNagyDJBgZJDrgsVJQgkEJNgkjSJgJFAHgFCJDgFZtMVJXNFVXQfXVJXDJVXoQJVQVJQVDEfXVDvJHVEqNFVeQfXVHpJFVHxfXVVJSRVVmaRVlIJOhCXVJhHjYkhxCJVhWVUJhWiJcxBNJIxeEqDxfXBFxcFEPxFSJFxFYJXyBDQJydaUJyFOPDuYCJYuLvJRuHLJXuZJLDuFOPDuFZJHuFcqXmKHJdmCQJcmOsVJiJAGFitLCFieOfXiestXiZJMEikNJQirXzFiFQqXiFIJFiFZJFiFvtFUHpJFUteIcUteOcUVCJkUhdHcUbEJEUJqXQUMNJhURjYkUFitFZDGJHZJIxDZJVJXZJFDJZJFpQvBNJBvBSJFvJxBrseQqDsVFVJdFLJDkEJNBkmNJYkFLJDoQJOPoGsJRoEAHBoEJfFbBQqDbBZJHbFVJXlFIJBjYIrXjeitcjjCEBjWMNBwXQfXwXOaFwDsJXwCJTRwrCZJMDNJQcDDJFcqDOPRYiJFTBsJXTQIJBTFEfXTFLJDrXEJFrEJXMrFZJFWEJdEWYTlm",
                    "ABCDEFACNJTRAMBDJdAcNJVXBLNJEBXSIdWRXErNJkXYDJMBXZJCJaXMNJaYKKVJKcKDEJqXKDcNJhKVJrNYKbgJVXKFVJSBNBYBwDNJeQfXNJeEqXNhGJWENJFiJRQlIJbEQJfXxDQqXcfXQFNDEJQFwXUJDYcnUJDJIBgQDIUJTRDJFEqDSJQSJFSJQIJFSOPeZtSJFZJHCJXQfXCTDEqFGJBSJFGJBOfXGJBcqXGJHNJDGJRLiJEJfXEqEJFEJPEFpBEJYJBZJFYBwXUJYiJMEBYJZJyTYTONJXpQMFXFpeGIDdpJFstXpJFcPDLBVSJRLHQJqXLJFZJFIJBNJDIJBUqXIBkFDJIJEJPTIYJGWRIJeQPDIJeEfHIJFsJXOqGDSFHXEJqXgJCsJCgGQJqXgdQYJEgFMFNBgJFcqDVJwXUJVJFZJchIgJCCxOEJqXxOwXUJyDJBVRuscisciJBiJBieUtqXiJFDJkiFsJXQUGEZJcUJFsJXZtXIrXZDZJDrZJFNJDZJFstXvJFQqXvJFCJEsJXQJqkhkNGBbDJdTRbYJMEBlDwXUJMEFiJFcfXNJDRcNJWMTBLJXC",
                    "BraFUtHBFSJFdbNBLJXVJQoYJNEBSJBEJfHSJHwXUJCJdAZJMGjaFVJXEJPNJBlEJfFiJFpFbFEJqIJBVJCrIBdHiJhOPFChvJVJZJNJWxGFNIFLueIBQJqUHEJfUFstOZJDrlXEASJRlXVJXSFwVJNJWD",
                    "QJEJNNJDQJEJIBSFQJEJxegBQJEJfHEPSJBmXEJFSJCDEJqXLXNJFQqXIcQsFNJFIFEJqXUJgFsJXIJBUJEJfHNFvJxEqXNJnXUJFQqD",
                    "IJBEJqXZJ"
                  ],
                  c = null;
                function u(e) {
                  return (0, o.hexlify)((0, i.toUtf8Bytes)(e));
                }
                function d(e) {
                  if (null === c) {
                    c = [];
                    var t = {};
                    (t[(0, i.toUtf8String)([227, 130, 154])] = !1),
                      (t[(0, i.toUtf8String)([227, 130, 153])] = !1),
                      (t[(0, i.toUtf8String)([227, 130, 133])] = (0, i.toUtf8String)([227, 130, 134])),
                      (t[(0, i.toUtf8String)([227, 129, 163])] = (0, i.toUtf8String)([227, 129, 164])),
                      (t[(0, i.toUtf8String)([227, 130, 131])] = (0, i.toUtf8String)([227, 130, 132])),
                      (t[(0, i.toUtf8String)([227, 130, 135])] = (0, i.toUtf8String)([227, 130, 136]));
                    for (var a = 3; a <= 9; a++)
                      for (var n = l[a - 3], r = 0; r < n.length; r += a) {
                        for (var o = [], d = 0; d < a; d++) {
                          var p = "~~AzB~X~a~KN~Q~D~S~C~G~E~Y~p~L~I~O~eH~g~V~hxyumi~~U~~Z~~v~~s~~dkoblPjfnqwMcRTr~W~~~F~~~~~Jt".indexOf(
                            n[r + d]
                          );
                          o.push(227), o.push(64 & p ? 130 : 129), o.push(128 + (63 & p));
                        }
                        c.push((0, i.toUtf8String)(o));
                      }
                    if (
                      (c.sort(function (e, t) {
                        return (e = m(e)) < (t = m(t)) ? -1 : e > t ? 1 : 0;
                      }),
                      "0xe3818de38284e3818f" === u(c[442]) && "0xe3818de38283e3818f" === u(c[443]))
                    ) {
                      var f = c[442];
                      (c[442] = c[443]), (c[443] = f);
                    }
                    if ("0xcb36b09e6baa935787fd762ce65e80b0c6a8dabdfbc3a7f86ac0e2c4fd111600" !== s.Wordlist.check(e))
                      throw ((c = null), new Error("BIP39 Wordlist for ja (Japanese) FAILED"));
                  }
                  function m(e) {
                    for (var a = "", n = 0; n < e.length; n++) {
                      var r = e[n],
                        o = t[r];
                      !1 !== o && (o && (r = o), (a += r));
                    }
                    return a;
                  }
                }
                var p = new ((function (e) {
                  function t() {
                    return e.call(this, "ja") || this;
                  }
                  return (
                    r(t, e),
                    (t.prototype.getWord = function (e) {
                      return d(this), c[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return d(this), c.indexOf(e);
                    }),
                    (t.prototype.split = function (e) {
                      return s.logger.checkNormalize(), e.split(/(?:\u3000| )+/g);
                    }),
                    (t.prototype.join = function (e) {
                      return e.join("　");
                    }),
                    t
                  );
                })(s.Wordlist))();
                (a.langJa = p), s.Wordlist.register(p);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-ja.js" }
    ],
    [
      5090,
      { "./settings-search-list": 5091 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = (n = e("./settings-search-list")) && n.__esModule ? n : { default: n };
                a.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-search-list/index.js" }
    ],
    [
      5091,
      {
        "../../../components/component-library": 4453,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/settings-search": 4808,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = p);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = d(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = u(e("prop-types")),
                  o = u(e("classnames")),
                  i = e("../../../helpers/utils/settings-search"),
                  s = e("../../../contexts/i18n"),
                  l = e("../../../components/component-library"),
                  c = e("../../../helpers/constants/design-system");
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (d = function (e) {
                    return e ? a : t;
                  })(e);
                }
                function p({ results: e, onClickSetting: t }) {
                  const a = (0, n.useContext)(s.I18nContext);
                  return (
                    (0, n.useEffect)(i.highlightSearchedText, [e]),
                    n.default.createElement(
                      "div",
                      { className: "settings-page__header__search__list" },
                      e.slice(0, 5).map((e) => {
                        const { icon: r, iconName: i, tabMessage: s, sectionMessage: u, route: d } = e;
                        return (
                          Boolean(r || s || u) &&
                          n.default.createElement(
                            "div",
                            { key: `settings_${d}` },
                            n.default.createElement(
                              "div",
                              { className: "settings-page__header__search__list__item", onClick: () => t(e) },
                              i
                                ? n.default.createElement(l.Icon, { name: i })
                                : n.default.createElement("i", {
                                    className: (0, o.default)("settings-page__header__search__list__item__icon", r)
                                  }),
                              n.default.createElement(
                                "span",
                                {
                                  id: `menu-tab_${d}`,
                                  className: (0, o.default)("settings-page__header__search__list__item__tab", {
                                    "settings-page__header__search__list__item__tab-multiple-lines": s(a) === a("securityAndPrivacy")
                                  })
                                },
                                s(a)
                              ),
                              n.default.createElement(l.Icon, {
                                name: l.IconName.ArrowRight,
                                size: c.Size.SM,
                                className: "settings-page__header__search__list__item__caret"
                              }),
                              n.default.createElement(
                                "span",
                                {
                                  id: `menu-section_${d}`,
                                  className: (0, o.default)("settings-page__header__search__list__item__section", {
                                    "settings-page__header__search__list__item__section-multiple-lines":
                                      s(a) === a("securityAndPrivacy") || s(a) === a("alerts")
                                  })
                                },
                                u(a)
                              )
                            )
                          )
                        );
                      }),
                      0 === e.length &&
                        n.default.createElement(
                          "div",
                          { className: "settings-page__header__search__list__item", style: { cursor: "auto", display: "flex" } },
                          n.default.createElement(
                            "span",
                            { className: "settings-page__header__search__list__item__no-matching" },
                            a("settingsSearchMatchingNotFound")
                          )
                        ),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__header__search__list__item", style: { cursor: "auto", display: "flex" } },
                        n.default.createElement(
                          "span",
                          { className: "settings-page__header__search__list__item__request" },
                          a("missingSetting")
                        ),
                        n.default.createElement(
                          "a",
                          {
                            href: "https://community.metamask.io/c/feature-requests-ideas/13",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            key: "need-help-link",
                            className: "settings-page__header__search__list__item__link"
                          },
                          a("missingSettingRequest")
                        )
                      )
                    )
                  );
                }
                p.propTypes = { results: r.default.array, onClickSetting: r.default.func };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-search-list/settings-search-list.js" }
    ],
    [
      5092,
      { "./settings-search": 5093 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = (n = e("./settings-search")) && n.__esModule ? n : { default: n };
                a.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-search/index.js" }
    ],
    [
      5093,
      {
        "../../../../shared/modules/string-utils": 4002,
        "../../../components/component-library": 4453,
        "../../../components/ui/icon/search-icon": 4658,
        "../../../components/ui/text-field": 4725,
        "../../../contexts/i18n": 4748,
        "../../../helpers/constants/design-system": 4771,
        "@material-ui/core/InputAdornment": 677,
        "fuse.js": 2821,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = g);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = f(e("prop-types")),
                  o = f(e("fuse.js")),
                  i = f(e("@material-ui/core/InputAdornment")),
                  s = f(e("../../../components/ui/text-field")),
                  l = e("../../../contexts/i18n"),
                  c = f(e("../../../components/ui/icon/search-icon")),
                  u = e("../../../../shared/modules/string-utils"),
                  d = e("../../../components/component-library"),
                  p = e("../../../helpers/constants/design-system");
                function f(e) {
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
                function g({ onSearch: e, error: t, settingsRoutesList: a }) {
                  const r = (0, n.useContext)(l.I18nContext),
                    [f, m] = (0, n.useState)(""),
                    [g, h] = (0, n.useState)("var(--color-icon-muted)"),
                    b = Object.values(a),
                    v = new o.default(b, {
                      shouldSort: !0,
                      threshold: 0.3,
                      location: 0,
                      distance: 100,
                      maxPatternLength: 32,
                      minMatchCharLength: 1,
                      keys: ["tabMessage", "sectionMessage", "descriptionMessage"],
                      getFn: (e, t) => e[t](r)
                    }),
                    T = (t) => {
                      const a = t.replace(/[^A-Za-z0-9\s&_]/gu, "").trimStart();
                      m(a), h("" === a ? "var(--color-icon-muted)" : "var(--color-icon-default)");
                      const n = v.search(a),
                        r = [...b.filter((e) => e.tabMessage && a && (0, u.isEqualCaseInsensitive)(e.tab, a)), ...n];
                      e({ searchQuery: a, results: r });
                    };
                  return n.default.createElement(s.default, {
                    id: "search-settings",
                    placeholder: r("search"),
                    type: "text",
                    value: f,
                    onChange: (e) => T(e.target.value),
                    error: t,
                    fullWidth: !0,
                    autoFocus: !0,
                    autoComplete: "off",
                    startAdornment: n.default.createElement(
                      i.default,
                      { position: "start", style: { marginRight: "12px" } },
                      n.default.createElement(c.default, { color: g })
                    ),
                    endAdornment: n.default.createElement(
                      n.default.Fragment,
                      null,
                      f &&
                        n.default.createElement(
                          i.default,
                          { className: "imageclosectn", position: "end", onClick: () => T(""), style: { cursor: "pointer" } },
                          n.default.createElement(d.Icon, { name: d.IconName.Close, color: p.IconColor.iconDefault })
                        )
                    )
                  });
                }
                g.propTypes = { onSearch: r.default.func, error: r.default.string, settingsRoutesList: r.default.array };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-search/settings-search.js" }
    ],
    [
      5094,
      { "./settings-tab.container": 5096 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./settings-tab.container")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-tab/index.js" }
    ],
    [
      5095,
      {
        "../../../../app/_locales/index.json": 3,
        "../../../../shared/constants/metametrics": 3962,
        "../../../../shared/constants/preferences": 3965,
        "../../../components/component-library": 4453,
        "../../../components/ui/dropdown": 4636,
        "../../../components/ui/identicon/blockieIdenticon": 4661,
        "../../../components/ui/jazzicon": 4668,
        "../../../components/ui/toggle-button": 4729,
        "../../../helpers/constants/available-conversions.json": 4768,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/utils/settings-search": 4808,
        classnames: 2414,
        "prop-types": 3450,
        react: 3690
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
                    var a = v(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = b(e("prop-types")),
                  o = b(e("classnames")),
                  i = b(e("../../../helpers/constants/available-conversions.json")),
                  s = e("../../../helpers/constants/design-system"),
                  l = b(e("../../../components/ui/dropdown")),
                  c = b(e("../../../components/ui/toggle-button")),
                  u = b(e("../../../../app/_locales/index.json")),
                  d = b(e("../../../components/ui/jazzicon")),
                  p = b(e("../../../components/ui/identicon/blockieIdenticon")),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../helpers/utils/settings-search"),
                  g = e("../../../../shared/constants/preferences"),
                  h = e("../../../components/component-library");
                function b(e) {
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
                function T(e, t, a) {
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
                const y = i.default
                    .sort((e, t) => e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase()))
                    .map(({ code: e, name: t }) => ({ name: `${e.toUpperCase()} - ${t}`, value: e })),
                  _ = u.default.map((e) => ({ name: `${e.name}`, value: e.code }));
                class E extends n.PureComponent {
                  constructor(...e) {
                    super(...e),
                      T(
                        this,
                        "settingsRefs",
                        Array((0, m.getNumberOfSettingsInSection)(this.context.t, this.context.t("general")))
                          .fill(undefined)
                          .map(() => n.default.createRef())
                      );
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, m.handleSettingsRefs)(e, e("general"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, m.handleSettingsRefs)(e, e("general"), this.settingsRefs);
                  }
                  renderCurrentConversion() {
                    const { t: e } = this.context,
                      { currentCurrency: t, setCurrentCurrency: a, lastFetchedConversionDate: r } = this.props;
                    return n.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[0],
                        className: "settings-page__content-row",
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column
                      },
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement("span", null, e("currencyConversion")),
                        n.default.createElement(
                          "span",
                          { className: "settings-page__content-description" },
                          r ? e("updatedWithDate", [new Date(1e3 * r).toString()]) : e("noConversionDateAvailable")
                        )
                      ),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          n.default.createElement(l.default, {
                            "data-testid": "currency-select",
                            id: "select-currency",
                            options: y,
                            selectedOption: t,
                            onChange: (e) => a(e)
                          })
                        )
                      )
                    );
                  }
                  renderCurrentLocale() {
                    const { t: e } = this.context,
                      { updateCurrentLocale: t, currentLocale: a } = this.props,
                      r = u.default.find((e) => e.code === a),
                      o = r ? r.name : "";
                    return n.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[2],
                        className: "settings-page__content-row",
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column
                      },
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement("span", { className: "settings-page__content-label" }, e("currentLanguage")),
                        n.default.createElement("span", { className: "settings-page__content-description" }, o)
                      ),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          n.default.createElement(l.default, {
                            "data-testid": "locale-select",
                            id: "select-locale",
                            options: _,
                            selectedOption: a,
                            onChange: async (e) => t(e)
                          })
                        )
                      )
                    );
                  }
                  renderHideZeroBalanceTokensOptIn() {
                    const { t: e } = this.context,
                      { hideZeroBalanceTokens: t, setHideZeroBalanceTokens: a } = this.props;
                    return n.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[5],
                        className: "settings-page__content-row",
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Row,
                        justifyContent: s.JustifyContent.spaceBetween,
                        alignItems: s.AlignItems.center,
                        id: "toggle-zero-balance"
                      },
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement("span", null, e("hideZeroBalanceTokens"))
                      ),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        n.default.createElement(c.default, { value: t, onToggle: (e) => a(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderBlockieOptIn() {
                    const { t: e } = this.context,
                      { useBlockie: t, setUseBlockie: a, selectedAddress: r, tokenList: i } = this.props;
                    return n.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[4],
                        className: "settings-page__content-row",
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column,
                        id: "blockie-optin"
                      },
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement(
                          h.Text,
                          { variant: s.TextVariant.bodyMd, as: "h5", color: s.TextColor.textDefault },
                          e("accountIdenticon")
                        ),
                        n.default.createElement("span", { className: "settings-page__content-item__description" }, e("jazzAndBlockies")),
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-item__identicon" },
                          n.default.createElement(
                            "button",
                            { "data-testid": "jazz_icon", onClick: () => a(!1), className: "settings-page__content-item__identicon__item" },
                            n.default.createElement(
                              "div",
                              {
                                className: (0, o.default)("settings-page__content-item__identicon__item__icon", {
                                  "settings-page__content-item__identicon__item__icon--active": !t
                                })
                              },
                              n.default.createElement(d.default, {
                                id: "jazzicon",
                                address: r,
                                diameter: 32,
                                tokenList: i,
                                style: { display: "block", borderRadius: "16px", width: "32px", height: "32px" }
                              })
                            ),
                            n.default.createElement(
                              h.Text,
                              {
                                color: s.TextColor.textDefault,
                                variant: s.TextVariant.bodySm,
                                as: "h6",
                                marginTop: 0,
                                marginRight: 12,
                                marginBottom: 0,
                                marginLeft: 3
                              },
                              e("jazzicons")
                            )
                          ),
                          n.default.createElement(
                            "button",
                            {
                              "data-testid": "blockie_icon",
                              onClick: () => a(!0),
                              className: "settings-page__content-item__identicon__item"
                            },
                            n.default.createElement(
                              "div",
                              {
                                className: (0, o.default)("settings-page__content-item__identicon__item__icon", {
                                  "settings-page__content-item__identicon__item__icon--active": t
                                })
                              },
                              n.default.createElement(p.default, { id: "blockies", address: r, diameter: 32, borderRadius: "50%" })
                            ),
                            n.default.createElement(
                              h.Text,
                              {
                                color: s.TextColor.textDefault,
                                variant: s.TextVariant.bodySm,
                                as: "h6",
                                marginTop: 3,
                                marginRight: 0,
                                marginBottom: 3,
                                marginLeft: 3
                              },
                              e("blockies")
                            )
                          )
                        )
                      )
                    );
                  }
                  renderUsePrimaryCurrencyOptions() {
                    const { t: e } = this.context,
                      {
                        nativeCurrency: t,
                        setUseNativeCurrencyAsPrimaryCurrencyPreference: a,
                        useNativeCurrencyAsPrimaryCurrency: r
                      } = this.props;
                    return n.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[1],
                        className: "settings-page__content-row",
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column
                      },
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement("span", null, e("primaryCurrencySetting")),
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("primaryCurrencySettingDescription")
                        )
                      ),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          n.default.createElement(
                            "div",
                            { className: "settings-tab__radio-buttons" },
                            n.default.createElement(
                              "div",
                              { className: "settings-tab__radio-button" },
                              n.default.createElement("input", {
                                type: "radio",
                                "data-testid": "toggle-native-currency",
                                id: "native-primary-currency",
                                onChange: () => a(!0),
                                checked: Boolean(r)
                              }),
                              n.default.createElement(
                                "label",
                                { htmlFor: "native-primary-currency", className: "settings-tab__radio-label" },
                                t
                              )
                            ),
                            n.default.createElement(
                              "div",
                              { className: "settings-tab__radio-button" },
                              n.default.createElement("input", {
                                type: "radio",
                                "data-testid": "toggle-fiat-currency",
                                id: "fiat-primary-currency",
                                onChange: () => a(!1),
                                checked: !r
                              }),
                              n.default.createElement(
                                "label",
                                { htmlFor: "fiat-primary-currency", className: "settings-tab__radio-label" },
                                e("fiat")
                              )
                            )
                          )
                        )
                      )
                    );
                  }
                  renderTheme() {
                    const { t: e } = this.context,
                      { theme: t, setTheme: a } = this.props,
                      r = [
                        { name: e("lightTheme"), value: g.ThemeType.light },
                        { name: e("darkTheme"), value: g.ThemeType.dark },
                        { name: e("osTheme"), value: g.ThemeType.os }
                      ];
                    return n.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[3],
                        className: "settings-page__content-row",
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column
                      },
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement("span", null, this.context.t("theme")),
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          this.context.t("themeDescription")
                        )
                      ),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          n.default.createElement(l.default, {
                            id: "select-theme",
                            options: r,
                            selectedOption: t,
                            onChange: (e) => {
                              this.context.trackEvent({
                                category: f.MetaMetricsEventCategory.Settings,
                                event: "Theme Changed",
                                properties: { theme_selected: e }
                              }),
                                a(e);
                            }
                          })
                        )
                      )
                    );
                  }
                  render() {
                    const { warning: e } = this.props;
                    return n.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      e ? n.default.createElement("div", { className: "settings-tab__error" }, e) : null,
                      this.renderCurrentConversion(),
                      this.renderUsePrimaryCurrencyOptions(),
                      this.renderCurrentLocale(),
                      this.renderTheme(),
                      this.renderBlockieOptIn(),
                      this.renderHideZeroBalanceTokensOptIn()
                    );
                  }
                }
                (a.default = E),
                  T(E, "contextTypes", { t: r.default.func, metricsEvent: r.default.func, trackEvent: r.default.func }),
                  T(E, "propTypes", {
                    setUseBlockie: r.default.func,
                    setCurrentCurrency: r.default.func,
                    warning: r.default.string,
                    updateCurrentLocale: r.default.func,
                    currentLocale: r.default.string,
                    useBlockie: r.default.bool,
                    currentCurrency: r.default.string,
                    nativeCurrency: r.default.string,
                    useNativeCurrencyAsPrimaryCurrency: r.default.bool,
                    setUseNativeCurrencyAsPrimaryCurrencyPreference: r.default.func,
                    hideZeroBalanceTokens: r.default.bool,
                    setHideZeroBalanceTokens: r.default.func,
                    lastFetchedConversionDate: r.default.number,
                    selectedAddress: r.default.string,
                    tokenList: r.default.object,
                    theme: r.default.string,
                    setTheme: r.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-tab/settings-tab.component.js" }
    ],
    [
      5096,
      { "../../../selectors": 5197, "../../../store/actions": 5204, "./settings-tab.component": 5095, "react-redux": 3655 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("react-redux"),
                  o = e("../../../store/actions"),
                  i = e("../../../selectors"),
                  s = (n = e("./settings-tab.component")) && n.__esModule ? n : { default: n };
                a.default = (0, r.connect)(
                  (e, t) => {
                    const {
                        appState: { warning: a },
                        metamask: n
                      } = e,
                      {
                        currentCurrency: r,
                        providerConfig: { ticker: o },
                        useBlockie: s,
                        currentLocale: l,
                        selectedAddress: c
                      } = n,
                      { useNativeCurrencyAsPrimaryCurrency: u, hideZeroBalanceTokens: d } = (0, i.getPreferences)(e),
                      { lastFetchedConversionDate: p } = t;
                    return {
                      warning: a,
                      currentLocale: l,
                      currentCurrency: r,
                      nativeCurrency: o,
                      useBlockie: s,
                      useNativeCurrencyAsPrimaryCurrency: u,
                      hideZeroBalanceTokens: d,
                      lastFetchedConversionDate: p,
                      selectedAddress: c,
                      tokenList: (0, i.getTokenList)(e),
                      theme: (0, i.getTheme)(e)
                    };
                  },
                  (e) => ({
                    setCurrentCurrency: (t) => e((0, o.setCurrentCurrency)(t)),
                    setUseBlockie: (t) => e((0, o.setUseBlockie)(t)),
                    updateCurrentLocale: (t) => e((0, o.updateCurrentLocale)(t)),
                    setUseNativeCurrencyAsPrimaryCurrencyPreference: (t) => e((0, o.setUseNativeCurrencyAsPrimaryCurrencyPreference)(t)),
                    setParticipateInMetaMetrics: (t) => e((0, o.setParticipateInMetaMetrics)(t)),
                    setHideZeroBalanceTokens: (t) => e((0, o.setHideZeroBalanceTokens)(t)),
                    setTheme: (t) => e((0, o.setTheme)(t))
                  })
                )(s.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-tab/settings-tab.container.js" }
    ],
    [
      5097,
      {
        "../../../app/scripts/lib/util": 82,
        "../../../shared/constants/app": 3953,
        "../../components/app/add-network/add-network": 4009,
        "../../components/app/tab-bar": 4335,
        "../../components/component-library": 4453,
        "../../components/ui/metafox-logo": 4685,
        "../../helpers/constants/design-system": 4771,
        "../../helpers/constants/routes": 4776,
        "../../helpers/utils/settings-search": 4808,
        "./advanced-tab": 5051,
        "./alerts-tab": 5053,
        "./contact-list-tab": 5062,
        "./experimental-tab": 5068,
        "./info-tab": 5070,
        "./networks-tab": 5074,
        "./security-tab": 5087,
        "./settings-search": 5092,
        "./settings-search-list": 5090,
        "./settings-tab": 5094,
        classnames: 2414,
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
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = M(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = A(e("prop-types")),
                  o = e("react-router-dom"),
                  i = A(e("classnames")),
                  s = A(e("../../components/app/tab-bar")),
                  l = e("../../helpers/constants/routes"),
                  c = e("../../helpers/utils/settings-search"),
                  u = A(e("../../components/app/add-network/add-network")),
                  d = e("../../components/component-library"),
                  p = e("../../helpers/constants/design-system"),
                  f = A(e("../../components/ui/metafox-logo")),
                  m = e("../../../app/scripts/lib/util"),
                  g = e("../../../shared/constants/app"),
                  h = A(e("./settings-tab")),
                  b = A(e("./alerts-tab")),
                  v = A(e("./networks-tab")),
                  T = A(e("./advanced-tab")),
                  y = A(e("./info-tab")),
                  _ = A(e("./security-tab")),
                  E = A(e("./contact-list-tab")),
                  S = A(e("./experimental-tab")),
                  C = A(e("./settings-search")),
                  k = A(e("./settings-search-list"));
                function A(e) {
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
                function O() {
                  return (
                    (O = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                        }),
                    O.apply(this, arguments)
                  );
                }
                function w(e, t, a) {
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
                class P extends n.PureComponent {
                  constructor(...e) {
                    super(...e), w(this, "state", { isSearchList: !1, lastFetchedConversionDate: null, searchResults: [], searchText: "" });
                  }
                  componentDidMount() {
                    this.handleConversionDate();
                  }
                  componentDidUpdate() {
                    this.handleConversionDate();
                  }
                  handleConversionDate() {
                    const { conversionDate: e } = this.props;
                    null !== e && this.setState({ lastFetchedConversionDate: e });
                  }
                  handleClickSetting(e) {
                    const { history: t } = this.props;
                    t.push(e.route), this.setState({ isSearchList: "", searchResults: "" });
                  }
                  render() {
                    const { history: e, backRoute: t, currentPath: a, mostRecentOverviewPage: r, addNewNetwork: o } = this.props,
                      { searchResults: s, isSearchList: u, searchText: h } = this.state,
                      { t: b } = this.context,
                      v = (0, m.getEnvironmentType)() === g.ENVIRONMENT_TYPE_POPUP;
                    return n.default.createElement(
                      "div",
                      { className: (0, i.default)("main-container settings-page", { "settings-page--selected": a !== l.SETTINGS_ROUTE }) },
                      n.default.createElement(
                        d.Box,
                        { className: "settings-page__header", padding: 4, paddingBottom: [2, 4] },
                        n.default.createElement(
                          "div",
                          { className: "settings-page__header__title-container" },
                          v &&
                            n.default.createElement(
                              n.default.Fragment,
                              null,
                              a === l.SETTINGS_ROUTE
                                ? n.default.createElement(f.default, {
                                    className: "settings-page__header__title-container__metamask-logo",
                                    unsetIconHeight: !0,
                                    onClick: async () => e.push(l.DEFAULT_ROUTE),
                                    display: [p.Display.Flex, p.Display.None]
                                  })
                                : n.default.createElement(d.ButtonIcon, {
                                    ariaLabel: b("back"),
                                    iconName: d.IconName.ArrowLeft,
                                    className: "settings-page__header__title-container__back-button",
                                    color: p.Color.iconDefault,
                                    onClick: () => e.push(t),
                                    display: [p.Display.Flex, p.Display.None],
                                    size: d.ButtonIconSize.Sm
                                  })
                            ),
                          this.renderTitle(),
                          n.default.createElement(
                            d.Box,
                            { className: "settings-page__header__title-container__search", display: [p.Display.Block] },
                            n.default.createElement(C.default, {
                              onSearch: ({ searchQuery: e = "", results: t = [] }) => {
                                this.setState({ isSearchList: "" !== e, searchResults: t, searchText: e });
                              },
                              settingsRoutesList: (0, c.getSettingsRoutes)()
                            }),
                            u &&
                              h.length >= 3 &&
                              n.default.createElement(k.default, { results: s, onClickSetting: (e) => this.handleClickSetting(e) })
                          ),
                          n.default.createElement(d.ButtonIcon, {
                            className: "settings-page__header__title-container__close-button",
                            iconName: d.IconName.Close,
                            ariaLabel: b("close"),
                            onClick: () => {
                              o ? e.push(l.NETWORKS_ROUTE) : e.push(r);
                            },
                            size: d.ButtonIconSize.Sm,
                            marginLeft: "auto"
                          })
                        )
                      ),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__content" },
                        n.default.createElement("div", { className: "settings-page__content__tabs" }, this.renderTabs()),
                        n.default.createElement(
                          "div",
                          { className: "settings-page__content__modules" },
                          this.renderSubHeader(),
                          this.renderContent()
                        )
                      )
                    );
                  }
                  renderTitle() {
                    const { t: e } = this.context,
                      { isPopup: t, pathnameI18nKey: a, addressName: r } = this.props;
                    let o;
                    return (
                      (o = e(t && r ? "details" : a && t ? a : "settings")),
                      n.default.createElement(
                        "div",
                        { className: "settings-page__header__title-container__title" },
                        n.default.createElement(d.Text, { variant: p.TextVariant.headingMd }, o)
                      )
                    );
                  }
                  renderSubHeader() {
                    const { t: e } = this.context,
                      {
                        currentPath: t,
                        isPopup: a,
                        isAddressEntryPage: r,
                        pathnameI18nKey: o,
                        addressName: s,
                        initialBreadCrumbRoute: c,
                        breadCrumbTextKey: u,
                        history: f,
                        initialBreadCrumbKey: m
                      } = this.props;
                    let g;
                    return (
                      (g = e(a && r ? "settings" : r ? "contacts" : m || o || "general")),
                      !t.startsWith(l.NETWORKS_ROUTE) &&
                        n.default.createElement(
                          d.Box,
                          {
                            className: "settings-page__subheader",
                            padding: 4,
                            paddingLeft: 6,
                            paddingRight: 6,
                            display: p.Display.Flex,
                            flexDirection: p.FlexDirection.Row,
                            alignItems: p.AlignItems.center
                          },
                          n.default.createElement(
                            d.Text,
                            {
                              className: (0, i.default)({ "settings-page__subheader--link": c }),
                              variant: p.TextVariant.headingSm,
                              onClick: () => c && f.push(c)
                            },
                            g
                          ),
                          u &&
                            n.default.createElement(
                              "div",
                              { className: "settings-page__subheader--break" },
                              n.default.createElement("span", null, " > "),
                              e(u)
                            ),
                          r &&
                            n.default.createElement(
                              "div",
                              { className: "settings-page__subheader--break" },
                              n.default.createElement("span", null, " > "),
                              s
                            )
                        )
                    );
                  }
                  renderTabs() {
                    const { history: e, currentPath: t } = this.props,
                      { t: a } = this.context,
                      r = [
                        {
                          content: a("general"),
                          icon: n.default.createElement(d.Icon, { name: d.IconName.Setting }),
                          key: l.GENERAL_ROUTE
                        },
                        {
                          content: a("advanced"),
                          icon: n.default.createElement("i", { className: "fas fa-sliders-h" }),
                          key: l.ADVANCED_ROUTE
                        },
                        {
                          content: a("contacts"),
                          icon: n.default.createElement(d.Icon, { name: d.IconName.Book }),
                          key: l.CONTACT_LIST_ROUTE
                        },
                        {
                          content: a("securityAndPrivacy"),
                          icon: n.default.createElement("i", { className: "fa fa-lock" }),
                          key: l.SECURITY_ROUTE
                        },
                        {
                          content: a("alerts"),
                          icon: n.default.createElement(d.Icon, { name: d.IconName.Notification }),
                          key: l.ALERTS_ROUTE
                        },
                        { content: a("networks"), icon: n.default.createElement(d.Icon, { name: d.IconName.Plug }), key: l.NETWORKS_ROUTE },
                        {
                          content: a("experimental"),
                          icon: n.default.createElement(d.Icon, { name: d.IconName.Flask }),
                          key: l.EXPERIMENTAL_ROUTE
                        },
                        { content: a("about"), icon: n.default.createElement(d.Icon, { name: d.IconName.Info }), key: l.ABOUT_US_ROUTE }
                      ];
                    return n.default.createElement(s.default, {
                      tabs: r,
                      isActive: (e) =>
                        (e === l.GENERAL_ROUTE && t === l.SETTINGS_ROUTE) ||
                        !(e !== l.CONTACT_LIST_ROUTE || !t.includes(l.CONTACT_LIST_ROUTE)) ||
                        (0, o.matchPath)(t, { exact: !0, path: e }),
                      onSelect: (t) => e.push(t)
                    });
                  }
                  renderContent() {
                    return n.default.createElement(
                      o.Switch,
                      null,
                      n.default.createElement(o.Route, {
                        exact: !0,
                        path: l.GENERAL_ROUTE,
                        render: (e) =>
                          n.default.createElement(h.default, O({}, e, { lastFetchedConversionDate: this.state.lastFetchedConversionDate }))
                      }),
                      n.default.createElement(o.Route, { exact: !0, path: l.ABOUT_US_ROUTE, component: y.default }),
                      n.default.createElement(o.Route, { exact: !0, path: l.ADVANCED_ROUTE, component: T.default }),
                      n.default.createElement(o.Route, { exact: !0, path: l.ALERTS_ROUTE, component: b.default }),
                      n.default.createElement(o.Route, {
                        exact: !0,
                        path: l.ADD_NETWORK_ROUTE,
                        render: () => n.default.createElement(v.default, { addNewNetwork: !0 })
                      }),
                      n.default.createElement(o.Route, {
                        exact: !0,
                        path: l.NETWORKS_ROUTE,
                        render: () => n.default.createElement(v.default, { addNewNetwork: !1 })
                      }),
                      n.default.createElement(o.Route, {
                        exact: !0,
                        path: l.ADD_POPULAR_CUSTOM_NETWORK,
                        render: () => n.default.createElement(u.default, null)
                      }),
                      n.default.createElement(o.Route, { exact: !0, path: l.SECURITY_ROUTE, component: _.default }),
                      n.default.createElement(o.Route, { exact: !0, path: l.EXPERIMENTAL_ROUTE, component: S.default }),
                      n.default.createElement(o.Route, { exact: !0, path: l.CONTACT_LIST_ROUTE, component: E.default }),
                      n.default.createElement(o.Route, { exact: !0, path: l.CONTACT_ADD_ROUTE, component: E.default }),
                      n.default.createElement(o.Route, { exact: !0, path: `${l.CONTACT_EDIT_ROUTE}/:id`, component: E.default }),
                      n.default.createElement(o.Route, { exact: !0, path: `${l.CONTACT_VIEW_ROUTE}/:id`, component: E.default }),
                      n.default.createElement(o.Route, {
                        render: (e) =>
                          n.default.createElement(h.default, O({}, e, { lastFetchedConversionDate: this.state.lastFetchedConversionDate }))
                      })
                    );
                  }
                }
                w(P, "propTypes", {
                  addNewNetwork: r.default.bool,
                  addressName: r.default.string,
                  backRoute: r.default.string,
                  breadCrumbTextKey: r.default.string,
                  conversionDate: r.default.number,
                  currentPath: r.default.string,
                  history: r.default.object,
                  initialBreadCrumbKey: r.default.string,
                  initialBreadCrumbRoute: r.default.string,
                  isAddressEntryPage: r.default.bool,
                  isPopup: r.default.bool,
                  mostRecentOverviewPage: r.default.string.isRequired,
                  pathnameI18nKey: r.default.string
                }),
                  w(P, "contextTypes", { t: r.default.func });
                a.default = P;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings.component.js" }
    ],
    [
      5098,
      {
        "../../../app/scripts/lib/util": 82,
        "../../../shared/constants/app": 3953,
        "../../../shared/modules/hexstring-utils": 3993,
        "../../ducks/history/history": 4760,
        "../../helpers/constants/routes": 4776,
        "../../selectors": 5197,
        "./settings.component": 5097,
        "react-redux": 3655,
        "react-router-dom": 3675,
        redux: 3720
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = e("redux"),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = e("../../selectors"),
                  l = e("../../../shared/constants/app"),
                  c = e("../../../app/scripts/lib/util"),
                  u = e("../../ducks/history/history"),
                  d = e("../../../shared/modules/hexstring-utils"),
                  p = e("../../helpers/constants/routes"),
                  f = (n = e("./settings.component")) && n.__esModule ? n : { default: n };
                const m = {
                  [p.ABOUT_US_ROUTE]: "about",
                  [p.ADD_NETWORK_ROUTE]: "networks",
                  [p.ADD_POPULAR_CUSTOM_NETWORK]: "addNetwork",
                  [p.ADVANCED_ROUTE]: "advanced",
                  [p.ALERTS_ROUTE]: "alerts",
                  [p.CONTACT_ADD_ROUTE]: "newContact",
                  [p.CONTACT_EDIT_ROUTE]: "editContact",
                  [p.CONTACT_LIST_ROUTE]: "contacts",
                  [p.CONTACT_VIEW_ROUTE]: "viewContact",
                  [p.EXPERIMENTAL_ROUTE]: "experimental",
                  [p.GENERAL_ROUTE]: "general",
                  [p.NETWORKS_FORM_ROUTE]: "networks",
                  [p.NETWORKS_ROUTE]: "networks",
                  [p.SECURITY_ROUTE]: "securityAndPrivacy"
                };
                a.default = (0, r.compose)(
                  i.withRouter,
                  (0, o.connect)((e, t) => {
                    var a;
                    const { location: n } = t,
                      { pathname: r } = n,
                      {
                        metamask: {
                          providerConfig: { ticker: o },
                          currencyRates: i
                        }
                      } = e,
                      f = null === (a = i[o]) || void 0 === a ? void 0 : a.conversionDate,
                      g = r.match(/[^/]+$/u)[0],
                      h = g.includes("0x"),
                      b = Boolean(r.match(p.CONTACT_ADD_ROUTE)),
                      v = Boolean(r.match(p.CONTACT_EDIT_ROUTE)),
                      T = Boolean(r.match(p.NETWORKS_FORM_ROUTE)) || Boolean(r.match(p.ADD_NETWORK_ROUTE)),
                      y = Boolean(r.match(p.ADD_NETWORK_ROUTE)),
                      _ = Boolean(r.match(p.ADD_POPULAR_CUSTOM_NETWORK)),
                      E = (0, c.getEnvironmentType)() === l.ENVIRONMENT_TYPE_POPUP,
                      S = m[r];
                    let C = p.SETTINGS_ROUTE;
                    v ? (C = `${p.CONTACT_VIEW_ROUTE}/${g}`) : h || b ? (C = p.CONTACT_LIST_ROUTE) : (T || _) && (C = p.NETWORKS_ROUTE);
                    return {
                      addNewNetwork: y,
                      addressName: (0, s.getAddressBookEntryOrAccountName)(
                        e,
                        !(0, d.isBurnAddress)(g) && (0, d.isValidHexAddress)(g, { mixedCaseUseChecksum: !0 }) ? g : ""
                      ),
                      backRoute: C,
                      conversionDate: f,
                      currentPath: r,
                      initialBreadCrumbKey: undefined,
                      initialBreadCrumbRoute: undefined,
                      isAddressEntryPage: h,
                      isPopup: E,
                      mostRecentOverviewPage: (0, u.getMostRecentOverviewPage)(e),
                      pathnameI18nKey: S
                    };
                  })
                )(f.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings.container.js" }
    ],
    [
      5099,
      { "./snap-account-redirect-context": 5101 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "SnapAccountRedirectContent", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./snap-account-redirect-context")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/index.ts" }
    ],
    [
      51,
      {
        "../../../shared/lib/transactions-controller-utils": 3982,
        "../../../shared/modules/random-id": 3998,
        "@metamask/safe-event-emitter": 1594,
        "eth-rpc-errors": 2648
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = e("eth-rpc-errors"),
                  r = s(e("@metamask/safe-event-emitter")),
                  o = s(e("../../../shared/modules/random-id")),
                  i = e("../../../shared/lib/transactions-controller-utils");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                class l extends Error {}
                class c {
                  constructor(e) {
                    (this.connectionStream = e),
                      (this.notificationChannel = new r.default()),
                      (this.uncaughtErrorChannel = new r.default()),
                      (this.requests = new Map()),
                      this.connectionStream.on("data", this.handleResponse.bind(this)),
                      this.connectionStream.on("end", this.close.bind(this)),
                      (this.responseHandled = {}),
                      (this.DisconnectError = l);
                  }
                  send(e, t, a) {
                    this.requests.set(e, a),
                      this.connectionStream.write(t),
                      (this.responseHandled[e] = !1),
                      "getState" === t.method &&
                        setTimeout(
                          () =>
                            !this.responseHandled[e] && a
                              ? (delete this.responseHandled[e], a(new Error("No response from RPC"), null))
                              : (delete this.responseHandled[e], !0),
                          i.TEN_SECONDS_IN_MILLISECONDS
                        );
                  }
                  onNotification(e) {
                    this.notificationChannel.addListener("notification", (t) => {
                      e(t);
                    });
                  }
                  onUncaughtError(e) {
                    this.uncaughtErrorChannel.addListener("error", (t) => {
                      e(t);
                    });
                  }
                  close() {
                    this.notificationChannel.removeAllListeners(), this.uncaughtErrorChannel.removeAllListeners();
                    for (const [e, t] of this.requests)
                      this.responseHandled[e] || ((this.responseHandled[e] = !0), t(new l("disconnected")));
                  }
                  handleResponse(e) {
                    const { id: t, result: a, error: r, method: o, params: i } = e,
                      s = t === undefined && r === undefined,
                      l = this.requests.get(t);
                    if (((this.responseHandled[t] = !0), !o || !i || s))
                      if (o && i && s) this.notificationChannel.emit("notification", e);
                      else {
                        if (r) {
                          const e = new n.EthereumRpcError(r.code, r.message, r.data);
                          return (
                            (e.stack = r.stack), l ? (this.requests.delete(t), void l(e)) : void this.uncaughtErrorChannel.emit("error", e)
                          );
                        }
                        l && (this.requests.delete(t), l(null, a));
                      }
                  }
                }
                a.default = (e) => {
                  const t = new c(e);
                  return new Proxy(t, {
                    get: (e, t) =>
                      e[t]
                        ? e[t]
                        : (...a) => {
                            const n = a[a.length - 1],
                              r = a.slice(0, -1),
                              i = (0, o.default)(),
                              s = { jsonrpc: "2.0", method: t, params: r, id: i };
                            e.send(i, s, n);
                          }
                  });
                };
              };
            };
      },
      { package: "$root$", file: "app/scripts/lib/metaRPCClientFactory.js" }
    ],
    [
      510,
      { "./wordlist": 512, "@ethersproject/strings": 495 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n,
                  r =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function a() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
                    });
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.langKo = void 0);
                var o = e("@ethersproject/strings"),
                  i = e("./wordlist"),
                  s = [
                    "OYAa",
                    "ATAZoATBl3ATCTrATCl8ATDloATGg3ATHT8ATJT8ATJl3ATLlvATLn4ATMT8ATMX8ATMboATMgoAToLbAToMTATrHgATvHnAT3AnAT3JbAT3MTAT8DbAT8JTAT8LmAT8MYAT8MbAT#LnAUHT8AUHZvAUJXrAUJX8AULnrAXJnvAXLUoAXLgvAXMn6AXRg3AXrMbAX3JTAX3QbAYLn3AZLgvAZrSUAZvAcAZ8AaAZ8AbAZ8AnAZ8HnAZ8LgAZ8MYAZ8MgAZ8OnAaAboAaDTrAaFTrAaJTrAaJboAaLVoAaMXvAaOl8AaSeoAbAUoAbAg8AbAl4AbGnrAbMT8AbMXrAbMn4AbQb8AbSV8AbvRlAb8AUAb8AnAb8HgAb8JTAb8NTAb8RbAcGboAcLnvAcMT8AcMX8AcSToAcrAaAcrFnAc8AbAc8MgAfGgrAfHboAfJnvAfLV8AfLkoAfMT8AfMnoAfQb8AfScrAfSgrAgAZ8AgFl3AgGX8AgHZvAgHgrAgJXoAgJX8AgJboAgLZoAgLn4AgOX8AgoATAgoAnAgoCUAgoJgAgoLXAgoMYAgoSeAgrDUAgrJTAhrFnAhrLjAhrQgAjAgoAjJnrAkMX8AkOnoAlCTvAlCV8AlClvAlFg4AlFl6AlFn3AloSnAlrAXAlrAfAlrFUAlrFbAlrGgAlrOXAlvKnAlvMTAl3AbAl3MnAnATrAnAcrAnCZ3AnCl8AnDg8AnFboAnFl3AnHX4AnHbrAnHgrAnIl3AnJgvAnLXoAnLX4AnLbrAnLgrAnLhrAnMXoAnMgrAnOn3AnSbrAnSeoAnvLnAn3OnCTGgvCTSlvCTvAUCTvKnCTvNTCT3CZCT3GUCT3MTCT8HnCUCZrCULf8CULnvCU3HnCU3JUCY6NUCbDb8CbFZoCbLnrCboOTCboScCbrFnCbvLnCb8AgCb8HgCb$LnCkLfoClBn3CloDUDTHT8DTLl3DTSU8DTrAaDTrLXDTrLjDTrOYDTrOgDTvFXDTvFnDT3HUDT3LfDUCT9DUDT4DUFVoDUFV8DUFkoDUGgrDUJnrDULl8DUMT8DUMXrDUMX4DUMg8DUOUoDUOgvDUOg8DUSToDUSZ8DbDXoDbDgoDbGT8DbJn3DbLg3DbLn4DbMXrDbMg8DbOToDboJXGTClvGTDT8GTFZrGTLVoGTLlvGTLl3GTMg8GTOTvGTSlrGToCUGTrDgGTrJYGTrScGTtLnGTvAnGTvQgGUCZrGUDTvGUFZoGUHXrGULnvGUMT8GUoMgGXoLnGXrMXGXrMnGXvFnGYLnvGZOnvGZvOnGZ8LaGZ8LmGbAl3GbDYvGbDlrGbHX3GbJl4GbLV8GbLn3GbMn4GboJTGboRfGbvFUGb3GUGb4JnGgDX3GgFl$GgJlrGgLX6GgLZoGgLf8GgOXoGgrAgGgrJXGgrMYGgrScGgvATGgvOYGnAgoGnJgvGnLZoGnLg3GnLnrGnQn8GnSbrGnrMgHTClvHTDToHTFT3HTQT8HToJTHToJgHTrDUHTrMnHTvFYHTvRfHT8MnHT8SUHUAZ8HUBb4HUDTvHUoMYHXFl6HXJX6HXQlrHXrAUHXrMnHXrSbHXvFYHXvKXHX3LjHX3MeHYvQlHZrScHZvDbHbAcrHbFT3HbFl3HbJT8HbLTrHbMT8HbMXrHbMbrHbQb8HbSX3HboDbHboJTHbrFUHbrHgHbrJTHb8JTHb8MnHb8QgHgAlrHgDT3HgGgrHgHgrHgJTrHgJT8HgLX@HgLnrHgMT8HgMX8HgMboHgOnrHgQToHgRg3HgoHgHgrCbHgrFnHgrLVHgvAcHgvAfHnAloHnCTrHnCnvHnGTrHnGZ8HnGnvHnJT8HnLf8HnLkvHnMg8HnRTrITvFUITvFnJTAXrJTCV8JTFT3JTFT8JTFn4JTGgvJTHT8JTJT8JTJXvJTJl3JTJnvJTLX4JTLf8JTLhvJTMT8JTMXrJTMnrJTObrJTQT8JTSlvJT8DUJT8FkJT8MTJT8OXJT8OgJT8QUJT8RfJUHZoJXFT4JXFlrJXGZ8JXGnrJXLV8JXLgvJXMXoJXMX3JXNboJXPlvJXoJTJXoLkJXrAXJXrHUJXrJgJXvJTJXvOnJX4KnJYAl3JYJT8JYLhvJYQToJYrQXJY6NUJbAl3JbCZrJbDloJbGT8JbGgrJbJXvJbJboJbLf8JbLhrJbLl3JbMnvJbRg8JbSZ8JboDbJbrCZJbrSUJb3KnJb8LnJfRn8JgAXrJgCZrJgDTrJgGZrJgGZ8JgHToJgJT8JgJXoJgJgvJgLX4JgLZ3JgLZ8JgLn4JgMgrJgMn4JgOgvJgPX6JgRnvJgSToJgoCZJgoJbJgoMYJgrJXJgrJgJgrLjJg6MTJlCn3JlGgvJlJl8Jl4AnJl8FnJl8HgJnAToJnATrJnAbvJnDUoJnGnrJnJXrJnJXvJnLhvJnLnrJnLnvJnMToJnMT8JnMXvJnMX3JnMg8JnMlrJnMn4JnOX8JnST4JnSX3JnoAgJnoAnJnoJTJnoObJnrAbJnrAkJnrHnJnrJTJnrJYJnrOYJnrScJnvCUJnvFaJnvJgJnvJnJnvOYJnvQUJnvRUJn3FnJn3JTKnFl3KnLT6LTDlvLTMnoLTOn3LTRl3LTSb4LTSlrLToAnLToJgLTrAULTrAcLTrCULTrHgLTrMgLT3JnLULnrLUMX8LUoJgLVATrLVDTrLVLb8LVoJgLV8MgLV8RTLXDg3LXFlrLXrCnLXrLXLX3GTLX4GgLX4OYLZAXrLZAcrLZAgrLZAhrLZDXyLZDlrLZFbrLZFl3LZJX6LZJX8LZLc8LZLnrLZSU8LZoJTLZoJnLZrAgLZrAnLZrJYLZrLULZrMgLZrSkLZvAnLZvGULZvJeLZvOTLZ3FZLZ4JXLZ8STLZ8ScLaAT3LaAl3LaHT8LaJTrLaJT8LaJXrLaJgvLaJl4LaLVoLaMXrLaMXvLaMX8LbClvLbFToLbHlrLbJn4LbLZ3LbLhvLbMXrLbMnoLbvSULcLnrLc8HnLc8MTLdrMnLeAgoLeOgvLeOn3LfAl3LfLnvLfMl3LfOX8Lf8AnLf8JXLf8LXLgJTrLgJXrLgJl8LgMX8LgRZrLhCToLhrAbLhrFULhrJXLhvJYLjHTrLjHX4LjJX8LjLhrLjSX3LjSZ4LkFX4LkGZ8LkGgvLkJTrLkMXoLkSToLkSU8LkSZ8LkoOYLl3FfLl3MgLmAZrLmCbrLmGgrLmHboLmJnoLmJn3LmLfoLmLhrLmSToLnAX6LnAb6LnCZ3LnCb3LnDTvLnDb8LnFl3LnGnrLnHZvLnHgvLnITvLnJT8LnJX8LnJlvLnLf8LnLg6LnLhvLnLnoLnMXrLnMg8LnQlvLnSbrLnrAgLnrAnLnrDbLnrFkLnrJdLnrMULnrOYLnrSTLnvAnLnvDULnvHgLnvOYLnvOnLn3GgLn4DULn4JTLn4JnMTAZoMTAloMTDb8MTFT8MTJnoMTJnrMTLZrMTLhrMTLkvMTMX8MTRTrMToATMTrDnMTrOnMT3JnMT4MnMT8FUMT8FaMT8FlMT8GTMT8GbMT8GnMT8HnMT8JTMT8JbMT8OTMUCl8MUJTrMUJU8MUMX8MURTrMUSToMXAX6MXAb6MXCZoMXFXrMXHXrMXLgvMXOgoMXrAUMXrAnMXrHgMXrJYMXrJnMXrMTMXrMgMXrOYMXrSZMXrSgMXvDUMXvOTMX3JgMX3OTMX4JnMX8DbMX8FnMX8HbMX8HgMX8HnMX8LbMX8MnMX8OnMYAb8MYGboMYHTvMYHX4MYLTrMYLnvMYMToMYOgvMYRg3MYSTrMbAToMbAXrMbAl3MbAn8MbGZ8MbJT8MbJXrMbMXvMbMX8MbMnoMbrMUMb8AfMb8FbMb8FkMcJXoMeLnrMgFl3MgGTvMgGXoMgGgrMgGnrMgHT8MgHZrMgJnoMgLnrMgLnvMgMT8MgQUoMgrHnMgvAnMg8HgMg8JYMg8LfMloJnMl8ATMl8AXMl8JYMnAToMnAT4MnAZ8MnAl3MnAl4MnCl8MnHT8MnHg8MnJnoMnLZoMnLhrMnMXoMnMX3MnMnrMnOgvMnrFbMnrFfMnrFnMnrNTMnvJXNTMl8OTCT3OTFV8OTFn3OTHZvOTJXrOTOl3OT3ATOT3JUOT3LZOT3LeOT3MbOT8ATOT8AbOT8AgOT8MbOUCXvOUMX3OXHXvOXLl3OXrMUOXvDbOX6NUOX8JbOYFZoOYLbrOYLkoOYMg8OYSX3ObHTrObHT4ObJgrObLhrObMX3ObOX8Ob8FnOeAlrOeJT8OeJXrOeJnrOeLToOeMb8OgJXoOgLXoOgMnrOgOXrOgOloOgoAgOgoJbOgoMYOgoSTOg8AbOjLX4OjMnoOjSV8OnLVoOnrAgOn3DUPXQlrPXvFXPbvFTPdAT3PlFn3PnvFbQTLn4QToAgQToMTQULV8QURg8QUoJnQXCXvQbFbrQb8AaQb8AcQb8FbQb8MYQb8ScQeAlrQeLhrQjAn3QlFXoQloJgQloSnRTLnvRTrGURTrJTRUJZrRUoJlRUrQnRZrLmRZrMnRZrSnRZ8ATRZ8JbRZ8ScRbMT8RbST3RfGZrRfMX8RfMgrRfSZrRnAbrRnGT8RnvJgRnvLfRnvMTRn8AaSTClvSTJgrSTOXrSTRg3STRnvSToAcSToAfSToAnSToHnSToLjSToMTSTrAaSTrEUST3BYST8AgST8LmSUAZvSUAgrSUDT4SUDT8SUGgvSUJXoSUJXvSULTrSU8JTSU8LjSV8AnSV8JgSXFToSXLf8SYvAnSZrDUSZrMUSZrMnSZ8HgSZ8JTSZ8JgSZ8MYSZ8QUSaQUoSbCT3SbHToSbQYvSbSl4SboJnSbvFbSb8HbSb8JgSb8OTScGZrScHgrScJTvScMT8ScSToScoHbScrMTScvAnSeAZrSeAcrSeHboSeJUoSeLhrSeMT8SeMXrSe6JgSgHTrSkJnoSkLnvSk8CUSlFl3SlrSnSl8GnSmAboSmGT8SmJU8",
                    "ATLnDlATrAZoATrJX4ATrMT8ATrMX4ATrRTrATvDl8ATvJUoATvMl8AT3AToAT3MX8AT8CT3AT8DT8AT8HZrAT8HgoAUAgFnAUCTFnAXoMX8AXrAT8AXrGgvAXrJXvAXrOgoAXvLl3AZvAgoAZvFbrAZvJXoAZvJl8AZvJn3AZvMX8AZvSbrAZ8FZoAZ8LZ8AZ8MU8AZ8OTvAZ8SV8AZ8SX3AbAgFZAboJnoAbvGboAb8ATrAb8AZoAb8AgrAb8Al4Ab8Db8Ab8JnoAb8LX4Ab8LZrAb8LhrAb8MT8Ab8OUoAb8Qb8Ab8ST8AcrAUoAcrAc8AcrCZ3AcrFT3AcrFZrAcrJl4AcrJn3AcrMX3AcrOTvAc8AZ8Ac8MT8AfAcJXAgoFn4AgoGgvAgoGnrAgoLc8AgoMXoAgrLnrAkrSZ8AlFXCTAloHboAlrHbrAlrLhrAlrLkoAl3CZrAl3LUoAl3LZrAnrAl4AnrMT8An3HT4BT3IToBX4MnvBb!Ln$CTGXMnCToLZ4CTrHT8CT3JTrCT3RZrCT#GTvCU6GgvCU8Db8CU8GZrCU8HT8CboLl3CbrGgrCbrMU8Cb8DT3Cb8GnrCb8LX4Cb8MT8Cb8ObrCgrGgvCgrKX4Cl8FZoDTrAbvDTrDboDTrGT6DTrJgrDTrMX3DTrRZrDTrRg8DTvAVvDTvFZoDT3DT8DT3Ln3DT4HZrDT4MT8DT8AlrDT8MT8DUAkGbDUDbJnDYLnQlDbDUOYDbMTAnDbMXSnDboAT3DboFn4DboLnvDj6JTrGTCgFTGTGgFnGTJTMnGTLnPlGToJT8GTrCT3GTrLVoGTrLnvGTrMX3GTrMboGTvKl3GZClFnGZrDT3GZ8DTrGZ8FZ8GZ8MXvGZ8On8GZ8ST3GbCnQXGbMbFnGboFboGboJg3GboMXoGb3JTvGb3JboGb3Mn6Gb3Qb8GgDXLjGgMnAUGgrDloGgrHX4GgrSToGgvAXrGgvAZvGgvFbrGgvLl3GgvMnvGnDnLXGnrATrGnrMboGnuLl3HTATMnHTAgCnHTCTCTHTrGTvHTrHTvHTrJX8HTrLl8HTrMT8HTrMgoHTrOTrHTuOn3HTvAZrHTvDTvHTvGboHTvJU8HTvLl3HTvMXrHTvQb4HT4GT6HT4JT8HT4Jb#HT8Al3HT8GZrHT8GgrHT8HX4HT8Jb8HT8JnoHT8LTrHT8LgvHT8SToHT8SV8HUoJUoHUoJX8HUoLnrHXrLZoHXvAl3HX3LnrHX4FkvHX4LhrHX4MXoHX4OnoHZrAZ8HZrDb8HZrGZ8HZrJnrHZvGZ8HZvLnvHZ8JnvHZ8LhrHbCXJlHbMTAnHboJl4HbpLl3HbrJX8HbrLnrHbrMnvHbvRYrHgoSTrHgrFV8HgrGZ8HgrJXoHgrRnvHgvBb!HgvGTrHgvHX4HgvHn!HgvLTrHgvSU8HnDnLbHnFbJbHnvDn8Hn6GgvHn!BTvJTCTLnJTQgFnJTrAnvJTrLX4JTrOUoJTvFn3JTvLnrJTvNToJT3AgoJT3Jn4JT3LhvJT3ObrJT8AcrJT8Al3JT8JT8JT8JnoJT8LX4JT8LnrJT8MX3JT8Rg3JT8Sc8JUoBTvJU8AToJU8GZ8JU8GgvJU8JTrJU8JXrJU8JnrJU8LnvJU8ScvJXHnJlJXrGgvJXrJU8JXrLhrJXrMT8JXrMXrJXrQUoJXvCTvJXvGZ8JXvGgrJXvQT8JX8Ab8JX8DT8JX8GZ8JX8HZvJX8LnrJX8MT8JX8MXoJX8MnvJX8ST3JYGnCTJbAkGbJbCTAnJbLTAcJboDT3JboLb6JbrAnvJbrCn3JbrDl8JbrGboJbrIZoJbrJnvJbrMnvJbrQb4Jb8RZrJeAbAnJgJnFbJgScAnJgrATrJgvHZ8JgvMn4JlJlFbJlLiQXJlLjOnJlRbOlJlvNXoJlvRl3Jl4AcrJl8AUoJl8MnrJnFnMlJnHgGbJnoDT8JnoFV8JnoGgvJnoIT8JnoQToJnoRg3JnrCZ3JnrGgrJnrHTvJnrLf8JnrOX8JnvAT3JnvFZoJnvGT8JnvJl4JnvMT8JnvMX8JnvOXrJnvPX6JnvSX3JnvSZrJn3MT8Jn3MX8Jn3RTrLTATKnLTJnLTLTMXKnLTRTQlLToGb8LTrAZ8LTrCZ8LTrDb8LTrHT8LT3PX6LT4FZoLT$CTvLT$GgrLUvHX3LVoATrLVoAgoLVoJboLVoMX3LVoRg3LV8CZ3LV8FZoLV8GTvLXrDXoLXrFbrLXvAgvLXvFlrLXvLl3LXvRn6LX4Mb8LX8GT8LYCXMnLYrMnrLZoSTvLZrAZvLZrAloLZrFToLZrJXvLZrJboLZrJl4LZrLnrLZrMT8LZrOgvLZrRnvLZrST4LZvMX8LZvSlvLZ8AgoLZ8CT3LZ8JT8LZ8LV8LZ8LZoLZ8Lg8LZ8SV8LZ8SbrLZ$HT8LZ$Mn4La6CTvLbFbMnLbRYFTLbSnFZLboJT8LbrAT9LbrGb3LbrQb8LcrJX8LcrMXrLerHTvLerJbrLerNboLgrDb8LgrGZ8LgrHTrLgrMXrLgrSU8LgvJTrLgvLl3Lg6Ll3LhrLnrLhrMT8LhvAl4LiLnQXLkoAgrLkoJT8LkoJn4LlrSU8Ll3FZoLl3HTrLl3JX8Ll3JnoLl3LToLmLeFbLnDUFbLnLVAnLnrATrLnrAZoLnrAb8LnrAlrLnrGgvLnrJU8LnrLZrLnrLhrLnrMb8LnrOXrLnrSZ8LnvAb4LnvDTrLnvDl8LnvHTrLnvHbrLnvJT8LnvJU8LnvJbrLnvLhvLnvMX8LnvMb8LnvNnoLnvSU8Ln3Al3Ln4FZoLn4GT6Ln4JgvLn4LhrLn4MT8Ln4SToMToCZrMToJX8MToLX4MToLf8MToRg3MTrEloMTvGb6MT3BTrMT3Lb6MT8AcrMT8AgrMT8GZrMT8JnoMT8LnrMT8MX3MUOUAnMXAbFnMXoAloMXoJX8MXoLf8MXoLl8MXrAb8MXrDTvMXrGT8MXrGgrMXrHTrMXrLf8MXrMU8MXrOXvMXrQb8MXvGT8MXvHTrMXvLVoMX3AX3MX3Jn3MX3LhrMX3MX3MX4AlrMX4OboMX8GTvMX8GZrMX8GgrMX8JT8MX8JX8MX8LhrMX8MT8MYDUFbMYMgDbMbGnFfMbvLX4MbvLl3Mb8Mb8Mb8ST4MgGXCnMg8ATrMg8AgoMg8CZrMg8DTrMg8DboMg8HTrMg8JgrMg8LT8MloJXoMl8AhrMl8JT8MnLgAUMnoJXrMnoLX4MnoLhrMnoMT8MnrAl4MnrDb8MnrOTvMnrOgvMnrQb8MnrSU8MnvGgrMnvHZ8Mn3MToMn4DTrMn4LTrMn4Mg8NnBXAnOTFTFnOToAToOTrGgvOTrJX8OT3JXoOT6MTrOT8GgrOT8HTpOT8MToOUoHT8OUoJT8OUoLn3OXrAgoOXrDg8OXrMT8OXvSToOX6CTvOX8CZrOX8OgrOb6HgvOb8AToOb8MT8OcvLZ8OgvAlrOgvHTvOgvJTrOgvJnrOgvLZrOgvLn4OgvMT8OgvRTrOg8AZoOg8DbvOnrOXoOnvJn4OnvLhvOnvRTrOn3GgoOn3JnvOn6JbvOn8OTrPTGYFTPbBnFnPbGnDnPgDYQTPlrAnvPlrETvPlrLnvPlrMXvPlvFX4QTMTAnQTrJU8QYCnJlQYJlQlQbGTQbQb8JnrQb8LZoQb8LnvQb8MT8Qb8Ml8Qb8ST4QloAl4QloHZvQloJX8QloMn8QnJZOlRTrAZvRTrDTrRTvJn4RTvLhvRT4Jb8RZrAZrRZ8AkrRZ8JU8RZ8LV8RZ8LnvRbJlQXRg3GboRg3MnvRg8AZ8Rg8JboRg8Jl4RnLTCbRnvFl3RnvQb8SToAl4SToCZrSToFZoSToHXrSToJU8SToJgvSToJl4SToLhrSToMX3STrAlvSTrCT9STrCgrSTrGgrSTrHXrSTrHboSTrJnoSTrNboSTvLnrST4AZoST8Ab8ST8JT8SUoJn3SU6HZ#SU6JTvSU8Db8SU8HboSU8LgrSV8JT8SZrAcrSZrAl3SZrJT8SZrJnvSZrMT8SZvLUoSZ4FZoSZ8JnoSZ8RZrScoLnrScoMT8ScoMX8ScrAT4ScrAZ8ScrLZ8ScrLkvScvDb8ScvLf8ScvNToSgrFZrShvKnrSloHUoSloLnrSlrMXoSl8HgrSmrJUoSn3BX6",
                    "ATFlOn3ATLgrDYAT4MTAnAT8LTMnAYJnRTrAbGgJnrAbLV8LnAbvNTAnAeFbLg3AgOYMXoAlQbFboAnDboAfAnJgoJTBToDgAnBUJbAl3BboDUAnCTDlvLnCTFTrSnCYoQTLnDTwAbAnDUDTrSnDUHgHgrDX8LXFnDbJXAcrETvLTLnGTFTQbrGTMnGToGT3DUFbGUJlPX3GbQg8LnGboJbFnGb3GgAYGgAg8ScGgMbAXrGgvAbAnGnJTLnvGnvATFgHTDT6ATHTrDlJnHYLnMn8HZrSbJTHZ8LTFnHbFTJUoHgSeMT8HgrLjAnHgvAbAnHlFUrDlHnDgvAnHnHTFT3HnQTGnrJTAaMXvJTGbCn3JTOgrAnJXvAXMnJbMg8SnJbMnRg3Jb8LTMnJnAl3OnJnGYrQlJnJlQY3LTDlCn3LTJjLg3LTLgvFXLTMg3GTLV8HUOgLXFZLg3LXNXrMnLX8QXFnLX9AlMYLYLXPXrLZAbJU8LZDUJU8LZMXrSnLZ$AgFnLaPXrDULbFYrMnLbMn8LXLboJgJgLeFbLg3LgLZrSnLgOYAgoLhrRnJlLkCTrSnLkOnLhrLnFX%AYLnFZoJXLnHTvJbLnLloAbMTATLf8MTHgJn3MTMXrAXMT3MTFnMUITvFnMXFX%AYMXMXvFbMXrFTDbMYAcMX3MbLf8SnMb8JbFnMgMXrMTMgvAXFnMgvGgCmMnAloSnMnFnJTrOXvMXSnOX8HTMnObJT8ScObLZFl3ObMXCZoPTLgrQXPUFnoQXPU3RXJlPX3RkQXPbrJXQlPlrJbFnQUAhrDbQXGnCXvQYLnHlvQbLfLnvRTOgvJbRXJYrQlRYLnrQlRbLnrQlRlFT8JlRlFnrQXSTClCn3STHTrAnSTLZQlrSTMnGTrSToHgGbSTrGTDnSTvGXCnST3HgFbSU3HXAXSbAnJn3SbFT8LnScLfLnv",
                    "AT3JgJX8AT8FZoSnAT8JgFV8AT8LhrDbAZ8JT8DbAb8GgLhrAb8SkLnvAe8MT8SnAlMYJXLVAl3GYDTvAl3LfLnvBUDTvLl3CTOn3HTrCT3DUGgrCU8MT8AbCbFTrJUoCgrDb8MTDTLV8JX8DTLnLXQlDT8LZrSnDUQb8FZ8DUST4JnvDb8ScOUoDj6GbJl4GTLfCYMlGToAXvFnGboAXvLnGgAcrJn3GgvFnSToGnLf8JnvGn#HTDToHTLnFXJlHTvATFToHTvHTDToHTvMTAgoHT3STClvHT4AlFl6HT8HTDToHUoDgJTrHUoScMX3HbRZrMXoHboJg8LTHgDb8JTrHgMToLf8HgvLnLnoHnHn3HT4Hn6MgvAnJTJU8ScvJT3AaQT8JT8HTrAnJXrRg8AnJbAloMXoJbrATFToJbvMnoSnJgDb6GgvJgDb8MXoJgSX3JU8JguATFToJlPYLnQlJlQkDnLbJlQlFYJlJl8Lf8OTJnCTFnLbJnLTHXMnJnLXGXCnJnoFfRg3JnrMYRg3Jn3HgFl3KT8Dg8LnLTRlFnPTLTvPbLbvLVoSbrCZLXMY6HT3LXNU7DlrLXNXDTATLX8DX8LnLZDb8JU8LZMnoLhrLZSToJU8LZrLaLnrLZvJn3SnLZ8LhrSnLaJnoMT8LbFlrHTvLbrFTLnrLbvATLlvLb6OTFn3LcLnJZOlLeAT6Mn4LeJT3ObrLg6LXFlrLhrJg8LnLhvDlPX4LhvLfLnvLj6JTFT3LnFbrMXoLnQluCTvLnrQXCY6LnvLfLnvLnvMgLnvLnvSeLf8MTMbrJn3MT3JgST3MT8AnATrMT8LULnrMUMToCZrMUScvLf8MXoDT8SnMX6ATFToMX8AXMT8MX8FkMT8MX8HTrDUMX8ScoSnMYJT6CTvMgAcrMXoMg8SToAfMlvAXLg3MnFl3AnvOT3AnFl3OUoATHT8OU3RnLXrOXrOXrSnObPbvFn6Og8HgrSnOg8OX8DbPTvAgoJgPU3RYLnrPXrDnJZrPb8CTGgvPlrLTDlvPlvFUJnoQUvFXrQlQeMnoAl3QlrQlrSnRTFTrJUoSTDlLiLXSTFg6HT3STJgoMn4STrFTJTrSTrLZFl3ST4FnMXoSUrDlHUoScvHTvSnSfLkvMXo",
                    "AUoAcrMXoAZ8HboAg8AbOg6ATFgAg8AloMXoAl3AT8JTrAl8MX8MXoCT3SToJU8Cl8Db8MXoDT8HgrATrDboOT8MXoGTOTrATMnGT8LhrAZ8GnvFnGnQXHToGgvAcrHTvAXvLl3HbrAZoMXoHgBlFXLg3HgMnFXrSnHgrSb8JUoHn6HT8LgvITvATrJUoJUoLZrRnvJU8HT8Jb8JXvFX8QT8JXvLToJTrJYrQnGnQXJgrJnoATrJnoJU8ScvJnvMnvMXoLTCTLgrJXLTJlRTvQlLbRnJlQYvLbrMb8LnvLbvFn3RnoLdCVSTGZrLeSTvGXCnLg3MnoLn3MToLlrETvMT8SToAl3MbrDU6GTvMb8LX4LhrPlrLXGXCnSToLf8Rg3STrDb8LTrSTvLTHXMnSb3RYLnMnSgOg6ATFg",
                    "HUDlGnrQXrJTrHgLnrAcJYMb8DULc8LTvFgGnCk3Mg8JbAnLX4QYvFYHnMXrRUoJnGnvFnRlvFTJlQnoSTrBXHXrLYSUJgLfoMT8Se8DTrHbDb",
                    "AbDl8SToJU8An3RbAb8ST8DUSTrGnrAgoLbFU6Db8LTrMg8AaHT8Jb8ObDl8SToJU8Pb3RlvFYoJl"
                  ];
                var l = null;
                function c(e) {
                  if (
                    null == l &&
                    ((l = []),
                    s.forEach(function (e, t) {
                      t += 4;
                      for (var a = 0; a < e.length; a += t) {
                        for (var n = "", r = 0; r < t; r++)
                          n +=
                            ((i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*".indexOf(e[a + r])) >= 40
                              ? (i = i + 168 - 40)
                              : i >= 19 && (i = i + 97 - 19),
                            (0, o.toUtf8String)([225, 132 + (i >> 6), 128 + (63 & i)]));
                        l.push(n);
                      }
                      var i;
                    }),
                    l.sort(),
                    "0xf9eddeace9c5d3da9c93cf7d3cd38f6a13ed3affb933259ae865714e8a3ae71a" !== i.Wordlist.check(e))
                  )
                    throw ((l = null), new Error("BIP39 Wordlist for ko (Korean) FAILED"));
                }
                var u = new ((function (e) {
                  function t() {
                    return e.call(this, "ko") || this;
                  }
                  return (
                    r(t, e),
                    (t.prototype.getWord = function (e) {
                      return c(this), l[e];
                    }),
                    (t.prototype.getWordIndex = function (e) {
                      return c(this), l.indexOf(e);
                    }),
                    t
                  );
                })(i.Wordlist))();
                (a.langKo = u), i.Wordlist.register(u);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-ko.js" }
    ],
    [
      5100,
      { "../../../components/component-library": 4453, "../../../helpers/constants/design-system": 4771, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n },
                  o = e("../../../components/component-library"),
                  i = e("../../../helpers/constants/design-system");
                const s = ({ url: e }) =>
                  r.default.createElement(o.ButtonIcon, {
                    onClick: () => {
                      global.platform.openTab({ url: e });
                    },
                    iconName: o.IconName.Export,
                    color: i.IconColor.primaryDefault,
                    size: o.ButtonIconSize.Sm,
                    ariaLabel: ""
                  });
                a.default = r.default.memo(s);
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/redirect-url-icon.tsx" }
    ],
    [
      5101,
      {
        "../../../components/component-library": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../../../hooks/useI18nContext": 4837,
        "./snap-account-redirect-message": 5102,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = l(e("react")),
                  r = e("../../../components/component-library"),
                  o = e("../../../helpers/constants/design-system"),
                  i = e("../../../hooks/useI18nContext"),
                  s = l(e("./snap-account-redirect-message"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                a.default = ({ url: e, snapName: t, isBlockedUrl: a, message: l }) => {
                  const c = (0, i.useI18nContext)();
                  return n.default.createElement(
                    r.Box,
                    {
                      display: o.Display.Flex,
                      flexDirection: o.FlexDirection.Row,
                      justifyContent: o.JustifyContent.spaceBetween,
                      paddingTop: 4
                    },
                    n.default.createElement(
                      r.Box,
                      { gap: 4, display: o.Display.Flex, flexDirection: o.FlexDirection.Column, alignItems: o.AlignItems.center },
                      n.default.createElement(
                        r.Text,
                        {
                          "data-testid": "snap-account-redirect-content-title",
                          textAlign: o.TextAlign.Center,
                          variant: o.TextVariant.headingLg
                        },
                        c("snapAccountRedirectFinishSigningTitle")
                      ),
                      a
                        ? n.default.createElement(
                            r.Box,
                            { display: o.Display.Flex, paddingLeft: 4, paddingRight: 4 },
                            n.default.createElement(
                              r.BannerAlert,
                              { severity: r.BannerAlertSeverity.Danger, "data-testid": "snap-account-redirect-content-blocked-url-banner" },
                              n.default.createElement(
                                r.Text,
                                null,
                                c("snapUrlIsBlocked", [
                                  n.default.createElement(
                                    r.Button,
                                    {
                                      variant: r.ButtonVariant.Link,
                                      size: r.ButtonSize.Inherit,
                                      onClick: () =>
                                        global.platform.openTab({
                                          url: "https://support.metamask.io/hc/en-us/articles/4428045875483--Deceptive-site-ahead-when-trying-to-connect-to-a-site"
                                        }),
                                      key: "snap-url-is-blocked-learn-more-button"
                                    },
                                    c("learnMore")
                                  )
                                ])
                              )
                            )
                          )
                        : null,
                      !1 === a
                        ? n.default.createElement(
                            r.Text,
                            {
                              "data-testid": "snap-account-redirect-content-description",
                              textAlign: o.TextAlign.Center,
                              variant: o.TextVariant.bodyMd
                            },
                            c("snapAccountRedirectSiteDescription", [t])
                          )
                        : null,
                      (e.length > 0 || l.length > 0) && !1 === a
                        ? n.default.createElement(s.default, { snapName: t, url: e, message: l })
                        : null
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/snap-account-redirect-context.tsx" }
    ],
    [
      5102,
      {
        "../../../components/app/snaps/snap-delineator": 4296,
        "../../../components/component-library": 4453,
        "../../../helpers/constants/design-system": 4771,
        "./url-display-box": 5103,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = l(e("react")),
                  r = e("../../../helpers/constants/design-system"),
                  o = e("../../../components/component-library"),
                  i = e("../../../components/app/snaps/snap-delineator"),
                  s = l(e("./url-display-box"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = ({ snapName: e, url: t, message: a }) =>
                  n.default.createElement(
                    i.SnapDelineator,
                    { "data-testid": "snap-account-redirect-message-container", snapName: e },
                    "" !== a
                      ? n.default.createElement(
                          o.Text,
                          { variant: r.TextVariant.bodyMd, "data-testid": "snap-account-redirect-message" },
                          a
                        )
                      : null,
                    t.length > 0
                      ? n.default.createElement(
                          o.Box,
                          { paddingTop: 2, display: r.Display.Flex },
                          n.default.createElement(s.default, { url: t })
                        )
                      : null
                  );
                a.default = n.default.memo(c);
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/snap-account-redirect-message.tsx" }
    ],
    [
      5103,
      {
        "../../../components/component-library": 4453,
        "../../../helpers/constants/design-system": 4771,
        "./redirect-url-icon": 5100,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = s(e("react")),
                  r = e("../../../helpers/constants/design-system"),
                  o = e("../../../components/component-library"),
                  i = s(e("./redirect-url-icon"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const l = ({ url: e }) =>
                  n.default.createElement(
                    o.Box,
                    {
                      display: r.Display.InlineFlex,
                      backgroundColor: r.BackgroundColor.backgroundDefault,
                      alignItems: r.AlignItems.center,
                      borderWidth: 1,
                      borderRadius: r.BorderRadius.SM,
                      borderColor: r.BorderColor.borderDefault,
                      paddingRight: 4
                    },
                    n.default.createElement(
                      o.Text,
                      {
                        "data-testid": "snap-account-redirect-url-display-box",
                        padding: 2,
                        variant: r.TextVariant.bodyMd,
                        color: r.TextColor.primaryDefault
                      },
                      e
                    ),
                    n.default.createElement(i.default, { url: e })
                  );
                a.default = n.default.memo(l);
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/url-display-box.tsx" }
    ],
    [
      5104,
      { "./snap-account-redirect": 5105 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                  Object.defineProperty(a, "SnapAccountRedirect", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./snap-account-redirect")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/index.ts" }
    ],
    [
      5105,
      { "../../components/component-library": 4453, "../../helpers/constants/design-system": 4771, "./components": 5099, react: 3690 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n,
                  r = (n = e("react")) && n.__esModule ? n : { default: n },
                  o = e("../../components/component-library"),
                  i = e("../../helpers/constants/design-system"),
                  s = e("./components");
                a.default = ({ url: e, snapName: t, isBlockedUrl: a, message: n }) =>
                  r.default.createElement(
                    o.Box,
                    {
                      className: "create-snap-account-page",
                      height: i.BlockSize.Full,
                      width: i.BlockSize.Full,
                      borderStyle: i.BorderStyle.none,
                      flexDirection: i.FlexDirection.Column,
                      alignItems: i.AlignItems.center,
                      paddingLeft: 4,
                      paddingRight: 4
                    },
                    r.default.createElement(
                      o.Box,
                      {
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        alignItems: i.AlignItems.center,
                        height: i.BlockSize.Full
                      },
                      r.default.createElement(s.SnapAccountRedirectContent, { url: e, snapName: t, isBlockedUrl: a, message: n })
                    )
                  );
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/snap-account-redirect.tsx" }
    ],
    [
      5106,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.KeyringSnapRemovalResultStatus = void 0);
                a.KeyringSnapRemovalResultStatus = { Success: "success", Failed: "failed", None: "none" };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snap-view/constants.ts" }
    ],
    [
      5107,
      { "./snap-view": 5110 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./snap-view")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snap-view/index.js" }
    ],
    [
      5108,
      {
        "../../../components/app/snaps/snap-home-page/snap-home-renderer": 4298,
        "../../../components/component-library": 4453,
        "prop-types": 3450,
        react: 3690
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = void 0);
                var n = s(e("react")),
                  r = s(e("prop-types")),
                  o = e("../../../components/app/snaps/snap-home-page/snap-home-renderer"),
                  i = e("../../../components/component-library");
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function l({ snapId: e }) {
                  return n.default.createElement(i.Box, null, n.default.createElement(o.SnapHomeRenderer, { snapId: e }));
                }
                l.propTypes = { snapId: r.default.string.isRequired };
                a.default = l;
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snap-view/snap-home.js" }
    ],
    [
      5109,
      {
        "../../../components/app/connected-sites-list": 4091,
        "../../../components/app/snaps/keyring-snap-removal-warning": 4284,
        "../../../components/app/snaps/show-more": 4287,
        "../../../components/app/snaps/snap-authorship-expanded": 4289,
        "../../../components/app/snaps/snap-delineator": 4296,
        "../../../components/app/snaps/snap-permissions-list": 4308,
        "../../../components/app/snaps/snap-remove-warning": 4312,
        "../../../components/app/snaps/snap-update-alert": 4320,
        "../../../components/component-library": 4453,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/constants/snaps": 4779,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
        "../../../store/actions": 5204,
        "./constants": 5106,
        "@metamask/snaps-rpc-methods": 1692,
        "prop-types": 3450,
        react: 3690,
        "react-redux": 3655,
        "react-router-dom": 3675,
        semver: 3776
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
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-redux"),
                  o = A(e("prop-types")),
                  i = e("@metamask/snaps-rpc-methods"),
                  s = e("react-router-dom"),
                  l = A(e("semver")),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../helpers/constants/design-system"),
                  d = A(e("../../../components/app/snaps/snap-authorship-expanded")),
                  p = A(e("../../../components/app/snaps/snap-remove-warning")),
                  f = A(e("../../../components/app/connected-sites-list")),
                  m = A(e("../../../components/app/snaps/keyring-snap-removal-warning")),
                  g = e("../../../store/actions"),
                  h = e("../../../selectors"),
                  b = e("../../../helpers/utils/util"),
                  v = e("../../../components/component-library"),
                  T = A(e("../../../components/app/snaps/snap-permissions-list")),
                  y = e("../../../components/app/snaps/snap-delineator"),
                  _ = e("../../../helpers/constants/snaps"),
                  E = A(e("../../../components/app/snaps/snap-update-alert")),
                  S = e("../../../helpers/constants/routes"),
                  C = e("../../../components/app/snaps/show-more"),
                  k = e("./constants");
                function A(e) {
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
                function O({ snapId: e }) {
                  var t;
                  const a = (0, s.useHistory)(),
                    o = (0, c.useI18nContext)(),
                    A = (0, r.useSelector)(h.getSnaps),
                    M = (0, r.useDispatch)(),
                    O = Object.entries(A)
                      .map(([e, t]) => t)
                      .find((t) => t.id === e),
                    [w, P] = (0, n.useState)(!1),
                    [R, N] = (0, n.useState)(!1),
                    [D, F] = (0, n.useState)([]),
                    L = (0, r.useSelector)(h.getMemoizedMetaMaskIdentities),
                    x = (0, r.useSelector)((e) => (0, h.getSubjectsWithSnapPermission)(e, null == O ? void 0 : O.id)),
                    B = (0, r.useSelector)((e) => O && (0, h.getPermissions)(e, O.id)),
                    I = (0, r.useSelector)((e) => (0, h.getPermissionSubjects)(e)),
                    J = (0, r.useSelector)((e) => (0, h.getTargetSubjectMetadata)(e, null == O ? void 0 : O.id));
                  let j = !1;
                  (j = Boolean(
                    null === (t = I[null == O ? void 0 : O.id]) || void 0 === t || null === (t = t.permissions) || void 0 === t
                      ? void 0
                      : t.snap_manageAccounts
                  )),
                    (0, n.useEffect)(() => {
                      j &&
                        (async () => {
                          const e = await (0, g.getSnapAccountsById)(O.id),
                            t = Object.values(L).filter((t) => e.includes(t.address.toLowerCase()));
                          F(t);
                        })();
                    }, [null == O ? void 0 : O.id, L, j]);
                  const U = (0, b.getSnapName)(O.id, J),
                    X = (0, r.useSelector)((e) => (O ? (0, h.getSnapLatestVersion)(e, null == O ? void 0 : O.id) : null)),
                    H = !!X && l.default.gt(X, O.version);
                  return n.default.createElement(
                    v.Box,
                    null,
                    H &&
                      n.default.createElement(E.default, {
                        snapName: U,
                        onUpdateClick: async () => {
                          const e = { [O.id]: { version: X } },
                            t = await M((0, g.updateSnap)("MetaMask", e));
                          t && a.push(`${S.CONNECT_ROUTE}/${t}`);
                        },
                        bannerAlertProps: { marginBottom: 4 }
                      }),
                    n.default.createElement(d.default, { snapId: O.id, snap: O }),
                    n.default.createElement(
                      v.Box,
                      { className: "snap-view__content__description", marginTop: [4, 7] },
                      n.default.createElement(
                        y.SnapDelineator,
                        { type: _.DelineatorType.Description, snapName: U },
                        n.default.createElement(
                          C.ShowMore,
                          { buttonBackground: u.BackgroundColor.backgroundDefault },
                          n.default.createElement(v.Text, null, null == O ? void 0 : O.manifest.description)
                        )
                      )
                    ),
                    n.default.createElement(
                      v.Box,
                      { className: "snap-view__content__permissions", marginTop: 12 },
                      n.default.createElement(v.Text, { variant: u.TextVariant.bodyLgMedium }, o("permissions")),
                      n.default.createElement(T.default, { snapId: e, permissions: B ?? {}, targetSubjectMetadata: J, showOptions: !0 })
                    ),
                    n.default.createElement(
                      v.Box,
                      { className: "snap-view__content__connected-sites", marginTop: 12 },
                      n.default.createElement(v.Text, { variant: u.TextVariant.bodyLgMedium, marginBottom: 2 }, o("connectedSites")),
                      n.default.createElement(f.default, {
                        connectedSubjects: x,
                        onDisconnect: (t) => {
                          ((t) => {
                            const a = { ...I[t].permissions[i.WALLET_SNAP_PERMISSION_KEY].caveats[0].value };
                            delete a[e],
                              Object.keys(a).length > 0
                                ? M((0, g.updateCaveat)(t, i.WALLET_SNAP_PERMISSION_KEY, i.SnapCaveatType.SnapIds, a))
                                : M((0, g.removePermissionsFor)({ [t]: [i.WALLET_SNAP_PERMISSION_KEY] }));
                          })(t, O.id);
                        }
                      })
                    ),
                    n.default.createElement(
                      v.Box,
                      { className: "snap-view__content__remove", marginTop: 12 },
                      n.default.createElement(
                        v.Text,
                        { variant: u.TextVariant.bodyLgMedium, color: u.TextColor.textDefault },
                        o("removeSnap")
                      ),
                      n.default.createElement(
                        v.Text,
                        { variant: u.TextVariant.bodyMd, color: u.TextColor.textDefault },
                        o("removeSnapDescription")
                      ),
                      n.default.createElement(
                        v.Box,
                        { marginTop: 4, display: u.Display.Flex, justifyContent: u.JustifyContent.center },
                        n.default.createElement(
                          v.Button,
                          {
                            className: "snap-view__content__remove-button",
                            danger: "true",
                            variant: v.ButtonVariant.Secondary,
                            width: u.BlockSize.Full,
                            size: v.ButtonSize.Lg,
                            onClick: () => P(!0),
                            "data-testid": "remove-snap-button"
                          },
                          n.default.createElement(
                            v.Text,
                            {
                              color: u.TextColor.inherit,
                              variant: u.TextVariant.bodyMd,
                              flexWrap: u.FlexWrap.NoWrap,
                              ellipsis: !0,
                              style: { overflow: "hidden" },
                              paddingTop: 3,
                              paddingBottom: 3
                            },
                            `${o("remove")} ${U}`
                          )
                        ),
                        n.default.createElement(p.default, {
                          isOpen: w && (!j || 0 === D.length) && !R,
                          onCancel: () => P(!1),
                          onSubmit: async () => {
                            await M((0, g.removeSnap)(O.id));
                          },
                          snapName: U
                        }),
                        n.default.createElement(
                          n.default.Fragment,
                          null,
                          n.default.createElement(m.default, {
                            snap: O,
                            keyringAccounts: D,
                            snapUrl: O.url,
                            onCancel: () => P(!1),
                            onClose: () => P(!1),
                            onBack: () => P(!1),
                            onSubmit: async () => {
                              try {
                                N(!0),
                                  await M((0, g.removeSnap)(O.id)),
                                  P(!1),
                                  M((0, g.showKeyringSnapRemovalModal)({ snapName: U, result: k.KeyringSnapRemovalResultStatus.Success }));
                              } catch {
                                P(!1),
                                  M((0, g.showKeyringSnapRemovalModal)({ snapName: U, result: k.KeyringSnapRemovalResultStatus.Failed }));
                              } finally {
                                N(!1);
                              }
                            },
                            isOpen: w && j && D.length > 0
                          })
                        )
                      )
                    )
                  );
                }
                O.propTypes = { snapId: o.default.string.isRequired };
                a.default = O;
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snap-view/snap-settings.js" }
    ],
    [
      511,
      { "./wordlist": 512, "@ethersproject/strings": 495 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, a) {
                var n,
                  r =
                    (this && this.__extends) ||
                    ((n = function (e, t) {
                      return (
                        (n =
                          Object.setPrototypeOf ||
                          ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                              e.__proto__ = t;
                            }) ||
                          function (e, t) {
                            for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                          }),
                        n(e, t)
                      );
                    }),
                    function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                      function a() {
                        this.constructor = e;
                      }
                      n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
                    });
                Object.defineProperty(a, "__esModule", { value: !0 }), (a.langZhTw = a.langZhCn = void 0);
                var o = e("@ethersproject/strings"),
                  i = e("./wordlist"),
                  s =
                    "}aE#4A=Yv&co#4N#6G=cJ&SM#66|/Z#4t&kn~46#4K~4q%b9=IR#7l,mB#7W_X2*dl}Uo~7s}Uf&Iw#9c&cw~6O&H6&wx&IG%v5=IQ~8a&Pv#47$PR&50%Ko&QM&3l#5f,D9#4L|/H&tQ;v0~6n]nN<di,AM=W5%QO&ka&ua,hM^tm=zV=JA=wR&+X]7P&NB#4J#5L|/b[dA}tJ<Do&6m&u2[U1&Kb.HM&mC=w0&MW<rY,Hq#6M}QG,13&wP}Jp]Ow%ue&Kg<HP<D9~4k~9T&I2_c6$9T#9/[C5~7O~4a=cs&O7=KK=An&l9$6U$8A&uD&QI|/Y&bg}Ux&F2#6b}E2&JN&kW&kp=U/&bb=Xl<Cj}k+~5J#6L&5z&9i}b4&Fo,ho(X0_g3~4O$Fz&QE<HN=Ww]6/%GF-Vw=tj&/D&PN#9g=YO}cL&Of&PI~5I&Ip=vU=IW#9G;0o-wU}ss&QR<BT&R9=tk$PY_dh&Pq-yh]7T,nj.Xu=EP&76=cI&Fs*Xg}z7$Gb&+I=DF,AF=cA}rL#7j=Dz&3y<Aa$52=PQ}b0(iY$Fa}oL&xV#6U=ec=WZ,xh%RY<dp#9N&Fl&44=WH*A7=sh&TB&8P=07;u+&PK}uh}J5#72)V/=xC,AB$k0&f6;1E|+5=1B,3v]6n&wR%b+&xx]7f=Ol}fl;+D^wG]7E;nB;uh^Ir&l5=JL,nS=cf=g5;u6|/Q$Gc=MH%Hg#5d%M6^86=U+$Gz,l/,ir^5y&Ba&/F-IY&FI&be%IZ#77&PW_Nu$kE(Yf&NX]7Z,Jy&FJ(Xo&Nz#/d=y7&MX<Ag}Z+;nE]Dt(iG#4D=13&Pj~4c%v8&Zo%OL&/X#4W<HR&ie~6J_1O(Y2=y5=Ad*cv_eB#6k&PX:BU#7A;uk&Ft&Fx_dD=U2;vB=U5=4F}+O&GN.HH:9s=b0%NV(jO&IH=JT}Z9=VZ<Af,Kx^4m&uJ%c6,6r;9m#+L}cf%Kh&F3~4H=vP}bu,Hz|++,1w]nv}k6;uu$jw*Kl*WX&uM[x7&Fr[m7$NO&QN]hu=JN}nR^8g#/h(ps|KC;vd}xz=V0}p6&FD$G1#7K<bG_4p~8g&cf;u4=tl}+k%5/}fz;uw<cA=u1}gU}VM=LJ=eX&+L&Pr#4U}p2:nC,2K]7H:jF&9x}uX#9O=MB<fz~8X~5m&4D&kN&u5%E/(h7(ZF&VG<de(qM|/e-Wt=3x(a+,/R]f/&ND$Ro&nU}0g=KA%kH&NK$Ke<dS}cB&IX~5g$TN]6m=Uv,Is&Py=Ef%Kz#+/%bi&+A<F4$OG&4C&FL#9V<Zk=2I_eE&6c]nw&kq$HG}y+&A8$P3}OH=XP]70%IS(AJ_gH%GZ&tY&AZ=vb~6y&/r=VI=Wv<Zi=fl=xf&eL}c8}OL=MJ=g8$F7=YT}9u=0+^xC}JH&nL^N0~4T]K2,Cy%OC#6s;vG(AC^xe^cG&MF}Br#9P;wD-7h$O/&xA}Fn^PC]6i]7G&8V$Qs;vl(TB~73~4l<mW&6V=2y&uY&+3)aP}XF;LP&kx$wU=t7;uy<FN&lz)7E=Oo*Y+;wI}9q}le;J6&Ri&4t&Qr#8B=cb&vG=J5|Ql(h5<Yy~4+}QD,Lx=wn%K/&RK=dO&Pw,Q9=co%4u;9u}g0@6a^4I%b0=zo|/c&tX=dQ=OS#+b=yz_AB&wB&Pm=W9$HP_gR=62=AO=ti=hI,oA&jr&dH=tm&b6$P2(x8=zi;nG~7F;05]0n[Ix&3m}rg=Xp=cd&uz]7t;97=cN;vV<jf&FF&F1=6Q&Ik*Kk&P4,2z=fQ]7D&3u,H0=d/}Uw<ZN<7R}Kv;0f$H7,MD]7n$F0#88~9Z%da=by;+T#/u=VF&fO&kr^kf<AB]sU,I5$Ng&Pz;0i&QD&vM=Yl:BM;nJ_xJ]U7&Kf&30,3f|Z9*dC)je_jA&Q4&Kp$NH(Yz#6S&Id%Ib=KX,AD=KV%dP}tW&Pk^+E_Ni=cq,3R}VZ(Si=b+}rv;0j}rZ]uA,/w(Sx&Jv$w9&4d&wE,NJ$Gy=J/]Ls#7k<ZQ<Y/&uj]Ov$PM;v3,2F&+u:up=On&3e,Jv;90=J+&Qm]6q}bK#+d~8Y(h2]hA;99&AS=I/}qB&dQ}yJ-VM}Vl&ui,iB&G3|Dc]7d=eQ%dX%JC_1L~4d^NP;vJ&/1)ZI#7N]9X[bQ&PL=0L(UZ,Lm&kc&IR}n7(iR<AQ<dg=33=vN}ft}au]7I,Ba=x9=dR~6R&Tq=Xi,3d$Nr&Bc}DI&ku&vf]Dn,/F&iD,Ll&Nw=0y&I7=Ls=/A&tU=Qe}Ua&uk&+F=g4=gh=Vj#+1&Qn}Uy*44#5F,Pc&Rz*Xn=oh=5W;0n_Nf(iE<Y7=vr=Zu]oz#5Z%mI=kN=Bv_Jp(T2;vt_Ml<FS&uI=L/&6P]64$M7}86<bo%QX(SI%IY&VK=Al&Ux;vv;ut*E/%uh<ZE|O3,M2(yc]yu=Wk&tp:Ex}hr,Cl&WE)+Z=8U}I2_4Q,hA_si=iw=OM=tM=yZ%Ia=U7;wT}b+;uo=Za}yS!5x}HD}fb#5O_dA;Nv%uB(yB;01(Sf}Fk;v7}Pt#8v<mZ#7L,/r&Pl~4w&f5=Ph$Fw_LF&8m,bL=yJ&BH}p/*Jn}tU~5Q;wB(h6]Df]8p^+B;E4&Wc=d+;Ea&bw$8C&FN,DM=Yf}mP~5w=fT#6V=mC=Fi=AV}jB&AN}lW}aH#/D)dZ;hl;vE}/7,CJ;31&w8,hj%u9_Js=jJ&4M~8k=TN&eC}nL&uc-wi&lX}dj=Mv=e2#6u=cr$uq$6G]8W}Jb:nm=Yg<b3(UA;vX&6n&xF=KT,jC,De&R8&oY=Zv&oB]7/=Z2&Oa}bf,hh(4h^tZ&72&Nx;D2&xL~5h~40)ZG)h+=OJ&RA]Bv$yB=Oq=df,AQ%Jn}OJ;11,3z&Tl&tj;v+^Hv,Dh(id=s+]7N&N3)9Q~8f,S4=uW=w4&uX,LX&3d]CJ&yp&8x<b2_do&lP=y/<cy_dG=Oi=7R(VH(lt_1T,Iq_AA;12^6T%k6#8K[B1{oO<AU[Bt;1b$9S&Ps<8T=St{bY,jB(Zp&63&Uv$9V,PM]6v&Af}zW[bW_oq}sm}nB&Kq&gC&ff_eq_2m&5F&TI}rf}Gf;Zr_z9;ER&jk}iz_sn<BN~+n&vo=Vi%97|ZR=Wc,WE&6t]6z%85(ly#84=KY)6m_5/=aX,N3}Tm&he&6K]tR_B2-I3;u/&hU&lH<AP=iB&IA=XL;/5&Nh=wv<BH#79=vS=zl<AA=0X_RG}Bw&9p$NW,AX&kP_Lp&/Z(Tc]Mu}hs#6I}5B&cI<bq&H9#6m=K9}vH(Y1(Y0#4B&w6,/9&gG<bE,/O=zb}I4_l8<B/;wL%Qo<HO[Mq=XX}0v&BP&F4(mG}0i}nm,EC=9u{I3,xG&/9=JY*DK&hR)BX=EI=cx=b/{6k}yX%A+&wa}Xb=la;wi^lL;0t}jo&Qb=xg=XB}iO<qo{bR=NV&8f=a0&Jy;0v=uK)HK;vN#6h&jB(h/%ud&NI%wY.X7=Pt}Cu-uL&Gs_hl%mH,tm]78=Lb^Q0#7Y=1u<Bt&+Q=Co_RH,w3;1e}ux<aU;ui}U3&Q5%bt]63&UQ|0l&uL}O7&3o,AV&dm|Nj(Xt*5+(Uu&Hh(p7(UF=VR=Bp^Jl&Hd[ix)9/=Iq]C8<67]66}mB%6f}bb}JI]8T$HA}db=YM&pa=2J}tS&Y0=PS&y4=cX$6E,hX,XP&nR;04,FQ&l0&Vm_Dv#5Y~8Z=Bi%MA]6x=JO:+p,Az&9q,Hj~6/}SD=K1:EJ}nA;Qo#/E]9R,Ie&6X%W3]61&v4=xX_MC=0q;06(Xq=fs}IG}Dv=0l}o7$iZ;9v&LH&DP-7a&OY,SZ,Kz,Cv&dh=fx|Nh,F/~7q=XF&w+;9n&Gw;0h}Z7<7O&JK(S7&LS<AD<ac=wo<Dt&zw%4B=4v#8P;9o~6p*vV=Tm,Or&I6=1q}nY=P0=gq&Bl&Uu,Ch%yb}UY=zh}dh}rl(T4_xk(YA#8R*xH,IN}Jn]7V}C4&Ty}j3]7p=cL=3h&wW%Qv<Z3=f0&RI&+S(ic_zq}oN&/Y=z1;Td=LW=0e=OI(Vc,+b^ju(UL;0r:Za%8v=Rp=zw&58&73&wK}qX]6y&8E)a2}WR=wP^ur&nQ<cH}Re=Aq&wk}Q0&+q=PP,Gc|/d^k5,Fw]8Y}Pg]p3=ju=ed}r5_yf&Cs]7z$/G<Cm&Jp&54_1G_gP_Ll}JZ;0u]k8_7k(Sg]65{9i=LN&Sx&WK,iW&fD&Lk{9a}Em-9c#8N&io=sy]8d&nT&IK(lx#7/$lW(Td<s8~49,3o<7Y=MW(T+_Jr&Wd,iL}Ct=xh&5V;v4&8n%Kx=iF&l2_0B{B+,If(J0,Lv;u8=Kx-vB=HC&vS=Z6&fU&vE^xK;3D=4h=MR#45:Jw;0d}iw=LU}I5=I0]gB*im,K9}GU,1k_4U&Tt=Vs(iX&lU(TF#7y,ZO}oA&m5#5P}PN}Uz=hM<B1&FB<aG,e6~7T<tP(UQ_ZT=wu&F8)aQ]iN,1r_Lo&/g:CD}84{J1_Ki&Na&3n$jz&FE=dc;uv;va}in}ll=fv(h1&3h}fp=Cy}BM(+E~8m}lo%v7=hC(T6$cj=BQ=Bw(DR,2j=Ks,NS|F+;00=fU=70}Mb(YU;+G&m7&hr=Sk%Co]t+(X5_Jw}0r}gC(AS-IP&QK<Z2#8Q$WC]WX}T2&pG_Ka,HC=R4&/N;Z+;ch(C7,D4$3p_Mk&B2$8D=n9%Ky#5z(CT&QJ#7B]DC]gW}nf~5M;Iw#80}Tc_1F#4Z-aC}Hl=ph=fz,/3=aW}JM}nn;DG;vm}wn,4P}T3;wx&RG$u+}zK=0b;+J_Ek{re<aZ=AS}yY#5D]7q,Cp}xN=VP*2C}GZ}aG~+m_Cs=OY#6r]6g<GS}LC(UB=3A=Bo}Jy<c4}Is;1P<AG}Op<Z1}ld}nS=1Z,yM&95&98=CJ(4t:2L$Hk=Zo}Vc;+I}np&N1}9y=iv}CO*7p=jL)px]tb^zh&GS&Vl%v/;vR=14=zJ&49|/f]hF}WG;03=8P}o/&Gg&rp;DB,Kv}Ji&Pb;aA^ll(4j%yt}+K$Ht#4y&hY]7Y<F1,eN}bG(Uh%6Z]t5%G7;+F_RE;it}tL=LS&Da=Xx(S+(4f=8G=yI}cJ}WP=37=jS}pX}hd)fp<A8=Jt~+o$HJ=M6}iX=g9}CS=dv=Cj(mP%Kd,xq|+9&LD(4/=Xm&QP=Lc}LX&fL;+K=Op(lu=Qs.qC:+e&L+=Jj#8w;SL]7S(b+#4I=c1&nG_Lf&uH;+R)ZV<bV%B/,TE&0H&Jq&Ah%OF&Ss(p2,Wv&I3=Wl}Vq;1L&lJ#9b_1H=8r=b8=JH(SZ=hD=J2#7U,/U#/X~6P,FU<eL=jx,mG=hG=CE&PU=Se(qX&LY=X6=y4&tk&QQ&tf=4g&xI}W+&mZ=Dc#7w}Lg;DA;wQ_Kb(cJ=hR%yX&Yb,hw{bX_4X;EP;1W_2M}Uc=b5(YF,CM&Tp^OJ{DD]6s=vF=Yo~8q}XH}Fu%P5(SJ=Qt;MO]s8<F3&B3&8T(Ul-BS*dw&dR<87}/8]62$PZ]Lx<Au}9Q]7c=ja=KR,Go,Us&v6(qk}pG&G2=ev^GM%w4&H4]7F&dv]J6}Ew:9w=sj-ZL}Ym$+h(Ut(Um~4n=Xs(U7%eE=Qc_JR<CA#6t<Fv|/I,IS,EG<F2(Xy$/n<Fa(h9}+9_2o&N4#7X<Zq|+f_Dp=dt&na,Ca=NJ)jY=8C=YG=s6&Q+<DO}D3=xB&R1(lw;Qn<bF(Cu|/B}HV=SS&n7,10&u0]Dm%A6^4Q=WR(TD=Xo<GH,Rj(l8)bP&n/=LM&CF,F5&ml=PJ;0k=LG=tq,Rh,D6@4i=1p&+9=YC%er_Mh;nI;0q=Fw]80=xq=FM$Gv;v6&nc;wK%H2&Kj;vs,AA=YP,66}bI(qR~5U=6q~4b$Ni=K5.X3$So&Iu(p+]8G=Cf=RY(TS_O3(iH&57=fE=Dg_Do#9z#7H;FK{qd_2k%JR}en&gh_z8;Rx}9p<cN_Ne,DO;LN_7o~/p=NF=5Y}gN<ce<C1,QE]Wv=3u<BC}GK]yq}DY&u/_hj=II(pz&rC,jV&+Z}ut=NQ;Cg-SR_ZS,+o=u/;Oy_RK_QF(Fx&xP}Wr&TA,Uh&g1=yr{ax[VF$Pg(YB;Ox=Vy;+W(Sp}XV%dd&33(l/]l4#4Y}OE=6c=bw(A7&9t%wd&N/&mo,JH&Qe)fm=Ao}fu=tH",
                  l = { zh_cn: null, zh_tw: null },
                  c = {
                    zh_cn: "0x17bcc4d8547e5a7135e365d1ab443aaae95e76d8230c2782c67305d4f21497a1",
                    zh_tw: "0x51e720e90c7b87bec1d70eb6e74a21a449bd3ec9c020b01d3a40ed991b60ce5d"
                  },
                  u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                function d(e) {
                  if (null === l[e.locale]) {
                    l[e.locale] = [];
                    for (var t = 0, a = 0; a < 2048; a++) {
                      var n = "~!@#$%^&*_-=[]{}|;:,.()<>?".indexOf(s[3 * a]),
                        r = [228 + (n >> 2), 128 + u.indexOf(s[3 * a + 1]), 128 + u.indexOf(s[3 * a + 2])];
                      if ("zh_tw" === e.locale)
                        for (var d = n % 4; d < 3; d++)
                          r[d] =
                            u.indexOf(
                              "FAZDC6BALcLZCA+GBARCW8wNCcDDZ8LVFBOqqDUiou+M42TFAyERXFb7EjhP+vmBFpFrUpfDV2F7eB+eCltCHJFWLFCED+pWTojEIHFXc3aFn4F68zqjEuKidS1QBVPDEhE7NA4mhMF7oThD49ot3FgtzHFCK0acW1x8DH1EmLoIlrWFBLE+y5+NA3Cx65wJHTaEZVaK1mWAmPGxgYCdxwOjTDIt/faOEhTl1vqNsKtJCOhJWuio2g07KLZEQsFBUpNtwEByBgxFslFheFbiEPvi61msDvApxCzB6rBCzox7joYA5UdDc+Cb4FSgIabpXFAj3bjkmFAxCZE+mD/SFf/0ELecYCt3nLoxC6WEZf2tKDB4oZvrEmqFkKk7BwILA7gtYBpsTq//D4jD0F0wEB9pyQ1BD5Ba0oYHDI+sbDFhvrHXdDHfgFEIJLi5r8qercNFBgFLC4bo5ERJtamWBDFy73KCEb6M8VpmEt330ygCTK58EIIFkYgF84gtGA9Uyh3m68iVrFbWFbcbqiCYHZ9J1jeRPbL8yswhMiDbhEhdNoSwFbZrLT740ABEqgCkO8J1BLd1VhKKR4sD1yUo0z+FF59Mvg71CFbyEhbHSFBKEIKyoQNgQppq9T0KAqePu0ZFGrXOHdKJqkoTFhYvpDNyuuznrN84thJbsCoO6Cu6Xlvntvy0QYuAExQEYtTUBf3CoCqwgGFZ4u1HJFzDVwEy3cjcpV4QvsPaBC3rCGyCF23o4K3pp2gberGgFEJEHo4nHICtyKH2ZqyxhN05KBBJIQlKh/Oujv/DH32VrlqFdIFC7Fz9Ct4kaqFME0UETLprnN9kfy+kFmtQBB0+5CFu0N9Ij8l/VvJDh2oq3hT6EzjTHKFN7ZjZwoTsAZ4Exsko6Fpa6WC+sduz8jyrLpegTv2h1EBeYpLpm2czQW0KoCcS0bCVXCmuWJDBjN1nQNLdF58SFJ0h7i3pC3oEOKy/FjBklL70XvBEEIWp2yZ04xObzAWDDJG7f+DbqBEA7LyiR95j7MDVdDViz2RE5vWlBMv5e4+VfhP3aXNPhvLSynb9O2x4uFBV+3jqu6d5pCG28/sETByvmu/+IJ0L3wb4rj9DNOLBF6XPIODr4L19U9RRofAG6Nxydi8Bki8BhGJbBAJKzbJxkZSlF9Q2Cu8oKqggB9hBArwLLqEBWEtFowy8XK8bEyw9snT+BeyFk1ZCSrdmgfEwFePTgCjELBEnIbjaDDPJm36rG9pztcEzT8dGk23SBhXBB1H4z+OWze0ooFzz8pDBYFvp9j9tvFByf9y4EFdVnz026CGR5qMr7fxMHN8UUdlyJAzlTBDRC28k+L4FB8078ljyD91tUj1ocnTs8vdEf7znbzm+GIjEZnoZE5rnLL700Xc7yHfz05nWxy03vBB9YGHYOWxgMQGBCR24CVYNE1hpfKxN0zKnfJDmmMgMmBWqNbjfSyFCBWSCGCgR8yFXiHyEj+VtD1FB3FpC1zI0kFbzifiKTLm9yq5zFmur+q8FHqjoOBWsBPiDbnCC2ErunV6cJ6TygXFYHYp7MKN9RUlSIS8/xBAGYLzeqUnBF4QbsTuUkUqGs6CaiDWKWjQK9EJkjpkTmNCPYXL"[
                                t++
                              ]
                            ) + (0 == d ? 228 : 128);
                      l[e.locale].push((0, o.toUtf8String)(r));
                    }
                    if (i.Wordlist.check(e) !== c[e.locale])
                      throw ((l[e.locale] = null), new Error("BIP39 Wordlist for " + e.locale + " (Chinese) FAILED"));
                  }
                }
                var p = (function (e) {
                    function t(t) {
                      return e.call(this, "zh_" + t) || this;
                    }
                    return (
                      r(t, e),
                      (t.prototype.getWord = function (e) {
                        return d(this), l[this.locale][e];
                      }),
                      (t.prototype.getWordIndex = function (e) {
                        return d(this), l[this.locale].indexOf(e);
                      }),
                      (t.prototype.split = function (e) {
                        return (e = e.replace(/(?:\u3000| )+/g, "")).split("");
                      }),
                      t
                    );
                  })(i.Wordlist),
                  f = new p("cn");
                (a.langZhCn = f), i.Wordlist.register(f), i.Wordlist.register(f, "zh");
                var m = new p("tw");
                (a.langZhTw = m), i.Wordlist.register(m);
              };
            };
      },
      { package: "@ethersproject/hdnode>@ethersproject/wordlists", file: "node_modules/@ethersproject/wordlists/lib/lang-zh.js" }
    ],
    [
      5110,
      {
        "../../../components/component-library": 4453,
        "../../../components/multichain/pages/page": 4576,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/util": 4812,
        "../../../selectors": 5197,
        "./snap-home": 5108,
        "./snap-settings": 5109,
        "@metamask/utils": 1893,
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
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  r = e("react-router-dom"),
                  o = e("react-redux"),
                  i = e("@metamask/utils"),
                  s = e("../../../helpers/constants/design-system"),
                  l = e("../../../helpers/constants/routes"),
                  c = e("../../../selectors"),
                  u = e("../../../helpers/utils/util"),
                  d = e("../../../components/component-library"),
                  p = e("../../../components/multichain/pages/page"),
                  f = g(e("./snap-settings")),
                  m = g(e("./snap-home"));
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (h = function (e) {
                    return e ? a : t;
                  })(e);
                }
                a.default = function () {
                  const e = (0, r.useHistory)(),
                    t = (0, r.useLocation)(),
                    { pathname: a } = t,
                    g = decodeURIComponent(a.match(/[^/]+$/u)[0]),
                    h = (0, o.useSelector)(c.getSnaps),
                    b = Object.entries(h)
                      .map(([e, t]) => t)
                      .find((e) => e.id === g);
                  (0, n.useEffect)(() => {
                    b || e.push(l.SNAPS_ROUTE);
                  }, [e, b]);
                  const v = (0, o.useSelector)((e) => b && (0, c.getPermissions)(e, b.id)),
                    T = (0, o.useSelector)((e) => (0, c.getTargetSubjectMetadata)(e, null == b ? void 0 : b.id)),
                    y = v && (0, i.hasProperty)(v, "endowment:page-home"),
                    [_, E] = (0, n.useState)(!y);
                  if (!b) return null;
                  const S = (0, u.getSnapName)(b.id, T);
                  return n.default.createElement(
                    "div",
                    { className: "snap-view" },
                    n.default.createElement(
                      p.Page,
                      { backgroundColor: s.BackgroundColor.backgroundDefault },
                      n.default.createElement(
                        p.Header,
                        {
                          backgroundColor: s.BackgroundColor.backgroundDefault,
                          startAccessory: n.default.createElement(d.ButtonIcon, {
                            ariaLabel: "Back",
                            iconName: "arrow-left",
                            size: "sm",
                            onClick: () => {
                              _ && y ? E(!1) : e.push(l.SNAPS_ROUTE);
                            }
                          }),
                          endAccessory:
                            !_ &&
                            n.default.createElement(d.ButtonIcon, {
                              ariaLabel: "Settings",
                              iconName: "setting",
                              size: "sm",
                              onClick: () => {
                                E(!0);
                              }
                            })
                        },
                        S
                      ),
                      n.default.createElement(
                        p.Content,
                        { backgroundColor: s.BackgroundColor.backgroundDefault, className: "snap-view__content", paddingTop: 0 },
                        _ ? n.default.createElement(f.default, { snapId: g }) : n.default.createElement(m.default, { snapId: g })
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snap-view/snap-view.js" }
    ],
    [
      5111,
      { "./snap-list": 5112 },
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
                      return r.default;
                    }
                  });
                var n,
                  r = (n = e("./snap-list")) && n.__esModule ? n : { default: n };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snaps-list/index.js" }
    ],
    [
      5112,
      {
        "../../../components/app/snaps/snap-list-item": 4306,
        "../../../components/component-library": 4453,
        "../../../components/multichain/pages/page": 4576,
        "../../../helpers/constants/design-system": 4771,
        "../../../helpers/constants/routes": 4776,
        "../../../helpers/utils/settings-search": 4808,
        "../../../helpers/utils/util": 4812,
        "../../../hooks/useI18nContext": 4837,
        "../../../selectors": 5197,
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
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var a = h(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                      if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = e[o]);
                      }
                    return (n.default = e), a && a.set(e, n), n;
                  })(e("react")),
                  o = e("react-redux"),
                  i = e("react-router-dom"),
                  s = (n = e("../../../components/app/snaps/snap-list-item")) && n.__esModule ? n : { default: n },
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../../helpers/constants/routes"),
                  d = e("../../../selectors"),
                  p = e("../../../helpers/utils/settings-search"),
                  f = e("../../../components/component-library"),
                  m = e("../../../components/multichain/pages/page"),
                  g = e("../../../helpers/utils/util");
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    a = new WeakMap();
                  return (h = function (e) {
                    return e ? a : t;
                  })(e);
                }
                a.default = () => {
                  const e = (0, l.useI18nContext)(),
                    t = (0, i.useHistory)(),
                    a = (0, r.useRef)();
                  (0, r.useEffect)(() => {
                    (0, p.handleSettingsRefs)(e, e("snaps"), a);
                  }, [a, e]);
                  const n = (0, o.useSelector)(d.getSnapsList),
                    h = (0, o.useSelector)(d.getAllSnapAvailableUpdates);
                  return r.default.createElement(
                    "div",
                    { className: "snaps" },
                    r.default.createElement(
                      m.Page,
                      { backgroundColor: c.BackgroundColor.backgroundDefault },
                      r.default.createElement(
                        m.Header,
                        {
                          backgroundColor: c.BackgroundColor.backgroundDefault,
                          startAccessory: r.default.createElement(f.ButtonIcon, {
                            ariaLabel: "Back",
                            iconName: "arrow-left",
                            size: "sm",
                            onClick: () => t.push(u.DEFAULT_ROUTE)
                          })
                        },
                        e("snaps")
                      ),
                      r.default.createElement(
                        m.Content,
                        { backgroundColor: c.BackgroundColor.backgroundDefault, className: "snaps__content" },
                        r.default.createElement(
                          f.Box,
                          {
                            className: "snaps__content__list",
                            display: c.Display.Flex,
                            flexDirection: c.FlexDirection.Column,
                            height: c.BlockSize.Full
                          },
                          n.length > 0 &&
                            r.default.createElement(
                              "div",
                              { className: "snaps__content__list__body" },
                              r.default.createElement(
                                "div",
                                { className: "snaps__content__list__wrapper" },
                                n.map((e) =>
                                  r.default.createElement(s.default, {
                                    className: "snaps__content__list-item",
                                    key: e.key,
                                    packageName: e.packageName,
                                    name: e.name,
                                    onClick: () => {
                                      ((e) => {
                                        t.push((0, g.getSnapRoute)(e.id));
                                      })(e);
                                    },
                                    snapId: e.id,
                                    showUpdateDot: h.get(e.id)
                                  })
                                )
                              )
                            ),
                          n.length <= 5 &&
                            r.default.createElement(
                              f.Box,
                              {
                                display: c.Display.Flex,
                                height: c.BlockSize.Full,
                                flexDirection: c.FlexDirection.Row,
                                flexWrap: c.FlexWrap.Wrap,
                                justifyContent: c.JustifyContent.center,
                                className: "snaps__content__list__container--snaps-info-content"
                              },
                              n.length < 1 &&
                                r.default.createElement(
                                  f.Box,
                                  {
                                    className: "snaps__content__list__container--no-snaps_inner",
                                    display: c.Display.Flex,
                                    flexDirection: c.FlexDirection.Column,
                                    justifyContent: c.JustifyContent.center,
                                    alignItems: c.AlignItems.center
                                  },
                                  r.default.createElement(f.Icon, {
                                    name: f.IconName.Snaps,
                                    color: c.IconColor.iconMuted,
                                    className: "snaps__content__list__no-snaps_icon",
                                    size: f.IconSize.Inherit
                                  }),
                                  r.default.createElement(
                                    f.Text,
                                    { color: c.Color.textMuted, align: c.TextAlign.Center, marginTop: 4 },
                                    e("noSnaps")
                                  )
                                ),
                              r.default.createElement(f.Box, { display: c.Display.Flex, width: c.BlockSize.Full, height: c.BlockSize.Min }),
                              r.default.createElement(
                                f.Box,
                                {
                                  className: "snaps__content__list__container--no-snaps_banner-tip",
                                  display: c.Display.Flex,
                                  flexDirection: c.FlexDirection.Column,
                                  justifyContent: c.JustifyContent.flexEnd,
                                  paddingLeft: 4,
                                  paddingRight: 4,
                                  paddingBottom: 4
                                },
                                r.default.createElement(
                                  f.BannerTip,
                                  {
                                    logoType: f.BannerTipLogoType.Greeting,
                                    description: e("extendWalletWithSnaps"),
                                    descriptionProps: { variant: c.TextVariant.bodyMd }
                                  },
                                  r.default.createElement(
                                    f.ButtonLink,
                                    {
                                      size: c.Size.auto,
                                      href: n.length > 0 ? "https://snaps.metamask.io/" : "https://metamask.io/snaps/",
                                      target: "_blank",
                                      endIconName: f.IconName.Export
                                    },
                                    `${e("discoverSnaps")}`
                                  )
                                )
                              )
                            )
                        )
                      )
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snaps-list/snap-list.js" }
    ]
  ],
  [],
  {}
);
