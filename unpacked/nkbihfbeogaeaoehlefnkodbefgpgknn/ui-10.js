LavaPack.loadBundle(
  [
    [
      5745,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/app/step-progress-bar": 5116,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/typography": 5506,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useCopyToClipboard": 5595,
        "../../../hooks/useI18nContext": 5602,
        "./recovery-phrase-chips": 5744,
        "prop-types": 4219,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = v);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-router-dom"),
                  s = y(e("prop-types")),
                  o = y(e("../../../components/ui/box")),
                  i = y(e("../../../components/ui/button")),
                  l = y(e("../../../components/ui/typography")),
                  c = e("../../../hooks/useCopyToClipboard"),
                  u = e("../../../hooks/useI18nContext"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../components/app/step-progress-bar"),
                  m = e("../../../../shared/constants/metametrics"),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../components/component-library"),
                  _ = y(e("./recovery-phrase-chips"));
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function v({ secretRecoveryPhrase: e }) {
                  const t = (0, r.useHistory)(),
                    n = (0, u.useI18nContext)(),
                    { search: s } = (0, r.useLocation)(),
                    [y, b] = (0, c.useCopyToClipboard)(),
                    [v, E] = (0, a.useState)(!1),
                    [w, T] = (0, a.useState)(!1),
                    k = new URLSearchParams(s).get("isFromReminder") ? "/?isFromReminder=true" : "",
                    N = (0, a.useContext)(g.MetaMetricsContext);
                  return a.default.createElement(
                    "div",
                    { className: "recovery-phrase", "data-testid": "recovery-phrase" },
                    a.default.createElement(f.ThreeStepProgressBar, { stage: f.threeStepStages.RECOVERY_PHRASE_REVIEW }),
                    a.default.createElement(
                      o.default,
                      { justifyContent: p.JustifyContent.center, textAlign: p.TEXT_ALIGN.CENTER, marginBottom: 4 },
                      a.default.createElement(
                        l.default,
                        { variant: p.TypographyVariant.H2, fontWeight: p.FONT_WEIGHT.BOLD, className: "recovery-phrase__header" },
                        n("seedPhraseWriteDownHeader")
                      )
                    ),
                    a.default.createElement(
                      o.default,
                      { justifyContent: p.JustifyContent.center, textAlign: p.TEXT_ALIGN.CENTER, marginBottom: 4 },
                      a.default.createElement(l.default, { variant: p.TypographyVariant.H4 }, n("seedPhraseWriteDownDetails"))
                    ),
                    a.default.createElement(
                      o.default,
                      { textAlign: p.TEXT_ALIGN.LEFT, marginBottom: 4, className: "recovery-phrase__tips" },
                      a.default.createElement(
                        l.default,
                        { variant: p.TypographyVariant.H4, fontWeight: p.FONT_WEIGHT.BOLD },
                        n("tips"),
                        ":"
                      ),
                      a.default.createElement(
                        "ul",
                        null,
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(l.default, { variant: p.TypographyVariant.H4 }, n("seedPhraseIntroSidebarBulletOne"))
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(l.default, { variant: p.TypographyVariant.H4 }, n("seedPhraseIntroSidebarBulletThree"))
                        ),
                        a.default.createElement(
                          "li",
                          null,
                          a.default.createElement(l.default, { variant: p.TypographyVariant.H4 }, n("seedPhraseIntroSidebarBulletFour"))
                        )
                      )
                    ),
                    a.default.createElement(_.default, { secretRecoveryPhrase: e.split(" "), phraseRevealed: v && !w, hiddenPhrase: w }),
                    a.default.createElement(
                      "div",
                      { className: "recovery-phrase__footer" },
                      v
                        ? a.default.createElement(
                            "div",
                            { className: "recovery-phrase__footer__copy-and-hide" },
                            a.default.createElement(
                              "div",
                              { className: "recovery-phrase__footer__copy-and-hide__area" },
                              a.default.createElement(
                                i.default,
                                {
                                  type: "link",
                                  icon: a.default.createElement("i", {
                                    className: "far fa-eye" + (w ? "" : "-slash"),
                                    color: "var(--color-primary-default)"
                                  }),
                                  className:
                                    "recovery-phrase__footer__copy-and-hide__button recovery-phrase__footer__copy-and-hide__button__hide-seed",
                                  onClick: () => {
                                    T(!w);
                                  }
                                },
                                n(w ? "revealTheSeedPhrase" : "hideSeedPhrase")
                              ),
                              a.default.createElement(
                                i.default,
                                {
                                  onClick: () => {
                                    b(e);
                                  },
                                  icon: a.default.createElement(h.Icon, {
                                    name: y ? h.IconName.CopySuccess : h.IconName.Copy,
                                    color: p.IconColor.primaryDefault
                                  }),
                                  className:
                                    "recovery-phrase__footer__copy-and-hide__button recovery-phrase__footer__copy-and-hide__button__copy-to-clipboard",
                                  type: "link"
                                },
                                n(y ? "copiedExclamation" : "copyToClipboard")
                              )
                            ),
                            a.default.createElement(
                              i.default,
                              {
                                "data-testid": "recovery-phrase-next",
                                type: "primary",
                                className: "recovery-phrase__footer--button",
                                onClick: () => {
                                  N({
                                    category: m.MetaMetricsEventCategory.Onboarding,
                                    event: m.MetaMetricsEventName.OnboardingWalletSecurityPhraseWrittenDown
                                  }),
                                    t.push(`${d.ONBOARDING_CONFIRM_SRP_ROUTE}${k}`);
                                }
                              },
                              n("next")
                            )
                          )
                        : a.default.createElement(
                            i.default,
                            {
                              "data-testid": "recovery-phrase-reveal",
                              type: "primary",
                              className: "recovery-phrase__footer--button",
                              onClick: () => {
                                N({
                                  category: m.MetaMetricsEventCategory.Onboarding,
                                  event: m.MetaMetricsEventName.OnboardingWalletSecurityPhraseRevealed
                                }),
                                  E(!0);
                              }
                            },
                            n("revealSeedWords")
                          )
                    )
                  );
                }
                v.propTypes = { secretRecoveryPhrase: s.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/recovery-phrase/review-recovery-phrase.js" }
    ],
    [
      5746,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/app/step-progress-bar": 5116,
        "../../../components/component-library": 5242,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/locale/locale": 5528,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "./skip-srp-backup-popover": 5747,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, s.useHistory)(),
                      t = (0, c.useI18nContext)(),
                      { search: n } = (0, s.useLocation)(),
                      a = (0, o.useSelector)(p.getCurrentLocale),
                      [h, _] = (0, r.useState)(!1),
                      y = new URLSearchParams(n).get("isFromReminder") ? "/?isFromReminder=true" : "",
                      b = (0, r.useContext)(u.MetaMetricsContext),
                      v = {
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
                      E = v[a] ? a : "en";
                    return r.default.createElement(
                      m.Box,
                      {
                        display: i.Display.Flex,
                        justifyContent: i.JustifyContent.center,
                        alignItems: i.AlignItems.center,
                        flexDirection: i.FlexDirection.Column,
                        className: "secure-your-wallet",
                        "data-testid": "secure-your-wallet"
                      },
                      h && r.default.createElement(g.default, { handleClose: () => _(!1) }),
                      r.default.createElement(l.ThreeStepProgressBar, { stage: l.threeStepStages.RECOVERY_PHRASE_VIDEO, marginBottom: 4 }),
                      r.default.createElement(
                        m.Text,
                        { variant: i.TextVariant.headingLg, as: "h2", marginBottom: 4, textAlign: i.TextAlign.Center },
                        t("seedPhraseIntroTitle")
                      ),
                      r.default.createElement(
                        m.Text,
                        { variant: i.TextVariant.bodyLgMedium, marginBottom: 6, className: "secure-your-wallet__details" },
                        t("seedPhraseIntroTitleCopy")
                      ),
                      r.default.createElement(
                        m.Box,
                        {
                          as: "video",
                          borderRadius: i.BorderRadius.LG,
                          marginBottom: 8,
                          className: "secure-your-wallet__video",
                          onPlay: () => {
                            b({ category: f.MetaMetricsEventCategory.Onboarding, event: f.MetaMetricsEventName.OnboardingWalletVideoPlay });
                          },
                          controls: !0
                        },
                        r.default.createElement("source", { type: "video/webm", src: "./images/videos/recovery-onboarding/video.webm" }),
                        Object.keys(v).map((e) =>
                          r.default.createElement("track", {
                            default: Boolean(e === E),
                            srcLang: e,
                            label: v[e],
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
                          width: i.BlockSize.Full,
                          display: i.Display.Flex,
                          flexDirection: [i.FlexDirection.Column, i.FlexDirection.Row],
                          justifyContent: i.JustifyContent.spaceBetween,
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
                              b({
                                category: f.MetaMetricsEventCategory.Onboarding,
                                event: f.MetaMetricsEventName.OnboardingWalletSecuritySkipInitiated
                              }),
                                _(!0);
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
                              b({
                                category: f.MetaMetricsEventCategory.Onboarding,
                                event: f.MetaMetricsEventName.OnboardingWalletSecurityStarted
                              }),
                                e.push(`${d.ONBOARDING_REVIEW_SRP_ROUTE}${y}`);
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
                          { as: "h3", variant: i.TextVariant.headingSm },
                          t("seedPhraseIntroSidebarTitleOne")
                        ),
                        r.default.createElement(m.Text, { marginBottom: 4 }, t("seedPhraseIntroSidebarCopyOne")),
                        r.default.createElement(
                          m.Text,
                          { as: "h3", variant: i.TextVariant.headingSm },
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
                          { as: "h3", variant: i.TextVariant.headingSm },
                          t("seedPhraseIntroSidebarTitleThree")
                        ),
                        r.default.createElement(m.Text, { as: "p", marginBottom: 4 }, t("seedPhraseIntroSidebarCopyTwo")),
                        r.default.createElement(
                          m.Text,
                          {
                            as: "h3",
                            variant: i.TextVariant.headingSm,
                            backgroundColor: i.BackgroundColor.primaryMuted,
                            padding: 4,
                            borderRadius: i.BorderRadius.LG
                          },
                          t("seedPhraseIntroSidebarCopyThree")
                        )
                      )
                    );
                  });
                var a,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("react-router-dom"),
                  o = e("react-redux"),
                  i = e("../../../helpers/constants/design-system"),
                  l = e("../../../components/app/step-progress-bar"),
                  c = e("../../../hooks/useI18nContext"),
                  u = e("../../../contexts/metametrics"),
                  d = e("../../../helpers/constants/routes"),
                  p = e("../../../ducks/locale/locale"),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../components/component-library"),
                  g = (a = e("./skip-srp-backup-popover")) && a.__esModule ? a : { default: a };
                function h(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/secure-your-wallet/secure-your-wallet.js" }
    ],
    [
      5747,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/check-box": 5383,
        "../../../components/ui/popover": 5465,
        "../../../components/ui/typography": 5506,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../store/actions": 5965,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = E);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = b(e("prop-types")),
                  s = e("react-router-dom"),
                  o = e("react-redux"),
                  i = e("../../../hooks/useI18nContext"),
                  l = b(e("../../../components/ui/button")),
                  c = b(e("../../../components/ui/popover")),
                  u = b(e("../../../components/ui/box")),
                  d = b(e("../../../components/ui/typography")),
                  p = e("../../../helpers/constants/design-system"),
                  f = e("../../../store/actions"),
                  m = b(e("../../../components/ui/check-box")),
                  g = e("../../../helpers/constants/routes"),
                  h = e("../../../../shared/constants/metametrics"),
                  _ = e("../../../contexts/metametrics"),
                  y = e("../../../components/component-library");
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
                function E({ handleClose: e }) {
                  const [t, n] = (0, a.useState)(!1),
                    r = (0, i.useI18nContext)(),
                    b = (0, s.useHistory)(),
                    v = (0, o.useDispatch)(),
                    E = (0, a.useContext)(_.MetaMetricsContext);
                  return a.default.createElement(
                    c.default,
                    {
                      className: "skip-srp-backup-popover",
                      footer: a.default.createElement(
                        u.default,
                        {
                          className: "skip-srp-backup-popover__footer",
                          justifyContent: p.JustifyContent.center,
                          alignItems: p.AlignItems.center
                        },
                        a.default.createElement(
                          l.default,
                          {
                            onClick: () => {
                              E({
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
                        a.default.createElement(
                          l.default,
                          {
                            "data-testid": "skip-srp-backup",
                            disabled: !t,
                            type: "primary",
                            rounded: !0,
                            onClick: async () => {
                              await v((0, f.setSeedPhraseBackedUp)(!1)),
                                E({
                                  category: h.MetaMetricsEventCategory.Onboarding,
                                  event: h.MetaMetricsEventName.OnboardingWalletSecuritySkipConfirmed
                                }),
                                b.push(g.ONBOARDING_COMPLETION_ROUTE);
                            }
                          },
                          r("skip")
                        )
                      )
                    },
                    a.default.createElement(
                      u.default,
                      {
                        flexDirection: p.FLEX_DIRECTION.COLUMN,
                        alignItems: p.AlignItems.center,
                        justifyContent: p.JustifyContent.center,
                        margin: 4
                      },
                      a.default.createElement(y.Icon, {
                        name: y.IconName.Danger,
                        size: y.IconSize.Xl,
                        className: "skip-srp-backup-popover__icon",
                        color: p.IconColor.errorDefault
                      }),
                      a.default.createElement(
                        d.default,
                        { variant: p.TypographyVariant.H3, fontWeight: p.FONT_WEIGHT.BOLD },
                        r("skipAccountSecurity")
                      ),
                      a.default.createElement(
                        u.default,
                        { justifyContent: p.JustifyContent.center, margin: 3 },
                        a.default.createElement(
                          "label",
                          { className: "skip-srp-backup-popover__label" },
                          a.default.createElement(m.default, {
                            className: "skip-srp-backup-popover__checkbox",
                            onClick: () => n(!t),
                            checked: t,
                            dataTestId: "skip-srp-backup-popover-checkbox"
                          }),
                          a.default.createElement(
                            d.default,
                            { className: "skip-srp-backup-popover__details", variant: p.TypographyVariant.H7 },
                            r("skipAccountSecurityDetails")
                          )
                        )
                      )
                    )
                  );
                }
                E.propTypes = { handleClose: r.default.func };
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/secure-your-wallet/skip-srp-backup-popover.js" }
    ],
    [
      5748,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/check-box": 5383,
        "../../../components/ui/mascot": 5445,
        "../../../contexts/metametrics": 5515,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/onboarding": 5541,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        events: 3331,
        react: 4475,
        "react-redux": 4440,
        "react-responsive-carousel": 4455,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, m.useI18nContext)(),
                      t = (0, s.useDispatch)(),
                      n = (0, o.useHistory)(),
                      [E] = (0, r.useState)(new a.default()),
                      w = (0, s.useSelector)(v.getCurrentKeyring),
                      T = (0, s.useSelector)(v.getFirstTimeFlowType),
                      [k, N] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                      w &&
                        (T === b.FIRST_TIME_FLOW_TYPES.IMPORT
                          ? n.replace(y.ONBOARDING_COMPLETION_ROUTE)
                          : n.replace(y.ONBOARDING_SECURE_YOUR_WALLET_ROUTE));
                    }, [w, n, T]);
                    const S = (0, r.useContext)(g.MetaMetricsContext),
                      x = e("agreeTermsOfUse", [
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
                        i.Carousel,
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
                            r.default.createElement(l.default, { animationEventEmitter: E, width: "250", height: "250" })
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
                              checked: k,
                              onClick: () => {
                                N((e) => !e);
                              }
                            }),
                            r.default.createElement(
                              "label",
                              { className: "onboarding__terms-label", htmlFor: "onboarding__terms-checkbox" },
                              r.default.createElement(u.Text, { variant: f.TextVariant.bodyMd, marginLeft: 2, as: "span" }, x)
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
                                t((0, _.setFirstTimeFlowType)("create")),
                                  S({
                                    category: h.MetaMetricsEventCategory.Onboarding,
                                    event: h.MetaMetricsEventName.OnboardingWalletCreationStarted,
                                    properties: { account_type: "metamask" }
                                  }),
                                  t((0, _.setTermsOfUseLastAgreed)(new Date().getTime())),
                                  n.push(y.ONBOARDING_METAMETRICS);
                              },
                              disabled: !k
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
                                t((0, _.setFirstTimeFlowType)("import")),
                                  S({
                                    category: h.MetaMetricsEventCategory.Onboarding,
                                    event: h.MetaMetricsEventName.OnboardingWalletImportStarted,
                                    properties: { account_type: "imported" }
                                  }),
                                  t((0, _.setTermsOfUseLastAgreed)(new Date().getTime())),
                                  n.push(y.ONBOARDING_METAMETRICS);
                              },
                              disabled: !k
                            },
                            e("onboardingImportWallet")
                          )
                        )
                      )
                    );
                  });
                var a = w(e("events")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("react-responsive-carousel"),
                  l = w(e("../../../components/ui/mascot")),
                  c = w(e("../../../components/ui/button")),
                  u = e("../../../components/component-library"),
                  d = w(e("../../../components/ui/check-box")),
                  p = w(e("../../../components/ui/box")),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../../hooks/useI18nContext"),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../../shared/constants/metametrics"),
                  _ = e("../../../store/actions"),
                  y = e("../../../helpers/constants/routes"),
                  b = e("../../../helpers/constants/onboarding"),
                  v = e("../../../selectors");
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function w(e) {
                  return e && e.__esModule ? e : { default: e };
                }
              };
            };
      },
      { package: "$root$", file: "ui/pages/onboarding-flow/welcome/welcome.js" }
    ],
    [
      5749,
      {
        "../../../components/app/permissions-connect-footer": 5025,
        "../../../components/app/permissions-connect-header": 5027,
        "../../../components/ui/account-list": 5367,
        "../../../components/ui/page-container": 5458,
        "../../../hooks/useI18nContext": 5602,
        "@metamask/permission-controller": 1667,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = p(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("@metamask/permission-controller"),
                  o = e("../../../hooks/useI18nContext"),
                  i = p(e("../../../components/app/permissions-connect-header")),
                  l = p(e("../../../components/app/permissions-connect-footer")),
                  c = p(e("../../../components/ui/account-list")),
                  u = e("../../../components/ui/page-container");
                function d(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (d = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const f = ({
                  selectedAccountAddresses: e,
                  addressLastConnectedMap: t = {},
                  accounts: n,
                  selectAccounts: a,
                  selectNewAccountViaModal: d,
                  cancelPermissionsRequest: p,
                  permissionsRequestId: f,
                  targetSubjectMetadata: m,
                  nativeCurrency: g
                }) => {
                  const [h, _] = (0, r.useState)(e),
                    y = (0, o.useI18nContext)(),
                    b =
                      0 === n.length
                        ? y("connectAccountOrCreate")
                        : (null == m ? void 0 : m.subjectType) === s.SubjectType.Snap
                        ? y("selectAccountsForSnap")
                        : y("selectAccounts");
                  return r.default.createElement(
                    r.default.Fragment,
                    null,
                    r.default.createElement(
                      "div",
                      { className: "permissions-connect-choose-account__content" },
                      r.default.createElement(i.default, {
                        iconUrl: null == m ? void 0 : m.iconUrl,
                        iconName: null == m ? void 0 : m.name,
                        headerTitle: y("connectWithMetaMask"),
                        headerText: b,
                        siteOrigin: null == m ? void 0 : m.origin,
                        subjectType: null == m ? void 0 : m.subjectType
                      }),
                      r.default.createElement(c.default, {
                        accounts: n,
                        selectNewAccountViaModal: d,
                        addressLastConnectedMap: t,
                        nativeCurrency: g,
                        selectedAccounts: h,
                        allAreSelected: () => n.length === h.size,
                        deselectAll: () => {
                          _(new Set());
                        },
                        selectAll: () => {
                          const e = new Set(n.map((e) => e.address));
                          _(e);
                        },
                        handleAccountClick: (e) => {
                          const t = new Set(h);
                          t.has(e) ? t.delete(e) : t.add(e), _(t);
                        }
                      })
                    ),
                    r.default.createElement(
                      "div",
                      { className: "permissions-connect-choose-account__footer-container" },
                      (null == m ? void 0 : m.subjectType) !== s.SubjectType.Snap && r.default.createElement(l.default, null),
                      r.default.createElement(u.PageContainerFooter, {
                        cancelButtonType: "default",
                        onCancel: () => p(f),
                        cancelText: y("cancel"),
                        onSubmit: () => a(h),
                        submitText: y("next"),
                        disabled: 0 === h.size
                      })
                    )
                  );
                };
                f.propTypes = {
                  accounts: a.default.arrayOf(
                    a.default.shape({
                      address: a.default.string,
                      addressLabel: a.default.string,
                      lastConnectedDate: a.default.string,
                      balance: a.default.string
                    })
                  ).isRequired,
                  selectAccounts: a.default.func.isRequired,
                  selectNewAccountViaModal: a.default.func.isRequired,
                  nativeCurrency: a.default.string.isRequired,
                  addressLastConnectedMap: a.default.object,
                  cancelPermissionsRequest: a.default.func.isRequired,
                  permissionsRequestId: a.default.string.isRequired,
                  selectedAccountAddresses: a.default.object.isRequired,
                  targetSubjectMetadata: a.default.shape({
                    extensionId: a.default.string,
                    iconUrl: a.default.string,
                    name: a.default.string,
                    origin: a.default.string.isRequired,
                    subjectType: a.default.string
                  })
                };
                n.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/choose-account/choose-account.js" }
    ],
    [
      5750,
      { "./choose-account": 5749 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./choose-account")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/choose-account/index.js" }
    ],
    [
      5751,
      { "./permissions-connect.container": 5753 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./permissions-connect.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/index.js" }
    ],
    [
      5752,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/app": 4749,
        "../../../shared/constants/time": 4768,
        "../../components/app/permission-page-container": 5020,
        "../../components/app/snaps/snap-authorship-header/snap-authorship-header": 5081,
        "../../components/component-library": 5242,
        "../../helpers/constants/routes": 5542,
        "./choose-account": 5750,
        "./redirect": 5754,
        "./snaps/snap-install": 5756,
        "./snaps/snap-result": 5758,
        "./snaps/snap-update": 5760,
        "./snaps/snaps-connect": 5762,
        "@metamask/permission-controller": 1667,
        "eth-rpc-errors": 3226,
        "prop-types": 4219,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = w(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("react-router-dom"),
                  o = e("eth-rpc-errors"),
                  i = e("@metamask/permission-controller"),
                  l = e("../../../app/scripts/lib/util"),
                  c = e("../../../shared/constants/app"),
                  u = e("../../../shared/constants/time"),
                  d = e("../../helpers/constants/routes"),
                  p = w(e("../../components/app/permission-page-container")),
                  f = e("../../components/component-library"),
                  m = w(e("../../components/app/snaps/snap-authorship-header/snap-authorship-header")),
                  g = w(e("./choose-account")),
                  h = w(e("./redirect")),
                  _ = w(e("./snaps/snaps-connect")),
                  y = w(e("./snaps/snap-install")),
                  b = w(e("./snaps/snap-update")),
                  v = w(e("./snaps/snap-result"));
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function w(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function T(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                const k = 1200 * u.MILLISECOND;
                class N extends r.Component {
                  constructor(...e) {
                    super(...e),
                      T(this, "state", {
                        redirecting: !1,
                        selectedAccountAddresses: new Set([this.props.currentAddress]),
                        permissionsApproved: null,
                        origin: this.props.origin,
                        targetSubjectMetadata: this.props.targetSubjectMetadata || {},
                        snapsInstallPrivacyWarningShown: this.props.snapsInstallPrivacyWarningShown
                      }),
                      T(this, "beforeUnload", () => {
                        const { permissionsRequestId: e, rejectPermissionsRequest: t } = this.props,
                          { permissionsApproved: n } = this.state;
                        null === n && e && t(e);
                      }),
                      T(this, "removeBeforeUnload", () => {
                        (0, l.getEnvironmentType)() === c.ENVIRONMENT_TYPE_NOTIFICATION &&
                          window.removeEventListener("beforeunload", this.beforeUnload);
                      }),
                      T(this, "selectAccounts", (e) => {
                        const {
                          confirmPermissionPath: t,
                          requestType: n,
                          snapsConnectPath: a,
                          snapInstallPath: r,
                          snapUpdatePath: s,
                          snapResultPath: o
                        } = this.props;
                        this.setState({ selectedAccountAddresses: e }, () => {
                          switch (n) {
                            case "wallet_installSnap":
                              this.props.history.push(r);
                              break;
                            case "wallet_updateSnap":
                              this.props.history.push(s);
                              break;
                            case "wallet_installSnapResult":
                              this.props.history.push(o);
                              break;
                            case "wallet_connectSnaps":
                              this.props.history.replace(a);
                              break;
                            default:
                              this.props.history.push(t);
                          }
                        });
                      }),
                      T(this, "cancelPermissionsRequest", async (e) => {
                        const { rejectPermissionsRequest: t } = this.props;
                        e && (await t(e), this.redirect(!1));
                      });
                  }
                  componentDidMount() {
                    const {
                      connectPath: e,
                      confirmPermissionPath: t,
                      snapsConnectPath: n,
                      snapInstallPath: a,
                      snapUpdatePath: r,
                      snapResultPath: s,
                      requestType: o,
                      getRequestAccountTabIds: i,
                      permissionsRequest: u,
                      history: p,
                      isRequestingAccounts: f
                    } = this.props;
                    if ((i(), !u)) return void p.replace(d.DEFAULT_ROUTE);
                    if (
                      ((0, l.getEnvironmentType)() === c.ENVIRONMENT_TYPE_NOTIFICATION &&
                        window.addEventListener("beforeunload", this.beforeUnload),
                      p.location.pathname === e && !f)
                    )
                      switch (o) {
                        case "wallet_installSnap":
                          p.replace(a);
                          break;
                        case "wallet_updateSnap":
                          p.replace(r);
                          break;
                        case "wallet_installSnapResult":
                          p.replace(s);
                          break;
                        case "wallet_connectSnaps":
                          p.replace(n);
                          break;
                        default:
                          p.replace(t);
                      }
                  }
                  static getDerivedStateFromProps(e, t) {
                    const { permissionsRequest: n, targetSubjectMetadata: a } = e,
                      { targetSubjectMetadata: r } = t;
                    return n && r.origin !== (null == a ? void 0 : a.origin) ? { targetSubjectMetadata: a } : null;
                  }
                  componentDidUpdate(e) {
                    const { permissionsRequest: t, lastConnectedInfo: n } = this.props,
                      { redirecting: a, origin: r } = this.state;
                    if (!t && e.permissionsRequest && !a) {
                      var s, o;
                      const t =
                        ((null === (s = n[r]) || void 0 === s ? void 0 : s.lastApproved) || 0) >
                        ((null === (o = e.lastConnectedInfo[r]) || void 0 === o ? void 0 : o.lastApproved) || 0);
                      this.redirect(t);
                    }
                  }
                  redirect(e) {
                    const { history: t, permissionsRequest: n } = this.props;
                    let a = !0;
                    (a = !((null == n ? void 0 : n.permissions) && Object.keys(n.permissions).includes("wallet_snap"))),
                      this.setState({ redirecting: a, permissionsApproved: e }),
                      this.removeBeforeUnload(),
                      a && e ? setTimeout(() => t.push(d.DEFAULT_ROUTE), k) : t.push(d.DEFAULT_ROUTE);
                  }
                  goBack() {
                    const { history: e, connectPath: t } = this.props;
                    e.push(t);
                  }
                  renderTopBar() {
                    const { redirecting: e, targetSubjectMetadata: t } = this.state,
                      { page: n, isRequestingAccounts: a, totalPages: s } = this.props,
                      { t: o } = this.context;
                    return e
                      ? null
                      : r.default.createElement(
                          f.Box,
                          {
                            style: {
                              marginBottom: t.subjectType === i.SubjectType.Snap && "14px",
                              boxShadow: t.subjectType === i.SubjectType.Snap && "var(--shadow-size-lg) var(--color-shadow-default)"
                            }
                          },
                          r.default.createElement(
                            "div",
                            { className: "permissions-connect__top-bar" },
                            "2" === n && a
                              ? r.default.createElement(
                                  "div",
                                  { className: "permissions-connect__back", onClick: () => this.goBack() },
                                  r.default.createElement(f.Icon, { name: f.IconName.ArrowLeft, marginInlineEnd: 1, size: f.IconSize.Xs }),
                                  o("back")
                                )
                              : null,
                            a ? r.default.createElement("div", { className: "permissions-connect__page-count" }, o("xOfY", [n, s])) : null
                          ),
                          t.subjectType === i.SubjectType.Snap &&
                            r.default.createElement(m.default, { snapId: t.origin, boxShadow: "none" })
                        );
                  }
                  render() {
                    const {
                        approvePermissionsRequest: e,
                        accounts: t,
                        showNewAccountModal: n,
                        newAccountNumber: a,
                        nativeCurrency: i,
                        permissionsRequest: l,
                        addressLastConnectedMap: c,
                        permissionsRequestId: u,
                        connectPath: d,
                        confirmPermissionPath: f,
                        hideTopBar: m,
                        snapsConnectPath: E,
                        snapInstallPath: w,
                        snapUpdatePath: T,
                        snapResultPath: k,
                        requestState: N,
                        approvePendingApproval: S,
                        rejectPendingApproval: x,
                        setSnapsInstallPrivacyWarningShownStatus: C
                      } = this.props,
                      {
                        selectedAccountAddresses: O,
                        permissionsApproved: R,
                        redirecting: M,
                        targetSubjectMetadata: P,
                        snapsInstallPrivacyWarningShown: I
                      } = this.state;
                    return r.default.createElement(
                      "div",
                      { className: "permissions-connect" },
                      !m && this.renderTopBar(),
                      M && R
                        ? r.default.createElement(h.default, { subjectMetadata: P })
                        : r.default.createElement(
                            s.Switch,
                            null,
                            r.default.createElement(s.Route, {
                              path: d,
                              exact: !0,
                              render: () =>
                                r.default.createElement(g.default, {
                                  accounts: t,
                                  nativeCurrency: i,
                                  selectAccounts: (e) => this.selectAccounts(e),
                                  selectNewAccountViaModal: (e) => {
                                    n({ onCreateNewAccount: (t) => e(t), newAccountNumber: a });
                                  },
                                  addressLastConnectedMap: c,
                                  cancelPermissionsRequest: (e) => this.cancelPermissionsRequest(e),
                                  permissionsRequestId: u,
                                  selectedAccountAddresses: O,
                                  targetSubjectMetadata: P
                                })
                            }),
                            r.default.createElement(s.Route, {
                              path: f,
                              exact: !0,
                              render: () =>
                                r.default.createElement(p.default, {
                                  request: l || {},
                                  approvePermissionsRequest: (...t) => {
                                    e(...t), this.redirect(!0);
                                  },
                                  rejectPermissionsRequest: (e) => this.cancelPermissionsRequest(e),
                                  selectedIdentities: t.filter((e) => O.has(e.address)),
                                  targetSubjectMetadata: P,
                                  snapsInstallPrivacyWarningShown: I,
                                  setSnapsInstallPrivacyWarningShownStatus: C
                                })
                            }),
                            r.default.createElement(s.Route, {
                              path: E,
                              exact: !0,
                              render: () =>
                                r.default.createElement(_.default, {
                                  request: l || {},
                                  approveConnection: (...t) => {
                                    e(...t), this.redirect(!0);
                                  },
                                  rejectConnection: (e) => this.cancelPermissionsRequest(e),
                                  targetSubjectMetadata: P,
                                  snapsInstallPrivacyWarningShown: I,
                                  setSnapsInstallPrivacyWarningShownStatus: C
                                })
                            }),
                            r.default.createElement(s.Route, {
                              path: w,
                              exact: !0,
                              render: () =>
                                r.default.createElement(y.default, {
                                  request: l || {},
                                  requestState: N || {},
                                  approveSnapInstall: (e) => {
                                    S(e, { ...l, permissions: N.permissions, approvedAccounts: [...O] }),
                                      this.setState({ permissionsApproved: !0 });
                                  },
                                  rejectSnapInstall: (e) => {
                                    x(e, (0, o.serializeError)(o.ethErrors.provider.userRejectedRequest())),
                                      this.setState({ permissionsApproved: !0 }),
                                      this.removeBeforeUnload();
                                  },
                                  targetSubjectMetadata: P
                                })
                            }),
                            r.default.createElement(s.Route, {
                              path: T,
                              exact: !0,
                              render: () =>
                                r.default.createElement(b.default, {
                                  request: l || {},
                                  requestState: N || {},
                                  approveSnapUpdate: (e) => {
                                    S(e, { ...l, permissions: N.permissions, approvedAccounts: [...O] }),
                                      this.setState({ permissionsApproved: !0 });
                                  },
                                  rejectSnapUpdate: (e) => {
                                    x(e, (0, o.serializeError)(o.ethErrors.provider.userRejectedRequest())),
                                      this.setState({ permissionsApproved: !1 }),
                                      this.removeBeforeUnload();
                                  },
                                  targetSubjectMetadata: P
                                })
                            }),
                            r.default.createElement(s.Route, {
                              path: k,
                              exact: !0,
                              render: () =>
                                r.default.createElement(v.default, {
                                  request: l || {},
                                  requestState: N || {},
                                  approveSnapResult: (e) => {
                                    S(e), this.setState({ permissionsApproved: !0 }), this.removeBeforeUnload();
                                  },
                                  targetSubjectMetadata: P
                                })
                            })
                          )
                    );
                  }
                }
                (n.default = N),
                  T(N, "propTypes", {
                    approvePermissionsRequest: a.default.func.isRequired,
                    rejectPermissionsRequest: a.default.func.isRequired,
                    getRequestAccountTabIds: a.default.func.isRequired,
                    accounts: a.default.array.isRequired,
                    currentAddress: a.default.string.isRequired,
                    origin: a.default.string,
                    showNewAccountModal: a.default.func.isRequired,
                    newAccountNumber: a.default.number.isRequired,
                    nativeCurrency: a.default.string,
                    permissionsRequest: a.default.object,
                    addressLastConnectedMap: a.default.object.isRequired,
                    lastConnectedInfo: a.default.object.isRequired,
                    permissionsRequestId: a.default.string,
                    history: a.default.object.isRequired,
                    connectPath: a.default.string.isRequired,
                    confirmPermissionPath: a.default.string.isRequired,
                    requestType: a.default.string.isRequired,
                    snapsConnectPath: a.default.string.isRequired,
                    snapInstallPath: a.default.string.isRequired,
                    snapUpdatePath: a.default.string.isRequired,
                    snapResultPath: a.default.string.isRequired,
                    requestState: a.default.object.isRequired,
                    approvePendingApproval: a.default.func.isRequired,
                    rejectPendingApproval: a.default.func.isRequired,
                    setSnapsInstallPrivacyWarningShownStatus: a.default.func.isRequired,
                    snapsInstallPrivacyWarningShown: a.default.bool.isRequired,
                    hideTopBar: a.default.bool,
                    totalPages: a.default.string.isRequired,
                    page: a.default.string.isRequired,
                    targetSubjectMetadata: a.default.shape({
                      extensionId: a.default.string,
                      iconUrl: a.default.string,
                      name: a.default.string,
                      origin: a.default.string,
                      subjectType: a.default.string
                    }),
                    isRequestingAccounts: a.default.bool.isRequired
                  }),
                  T(N, "defaultProps", { origin: "", nativeCurrency: "", permissionsRequest: undefined, permissionsRequestId: "" }),
                  T(N, "contextTypes", { t: a.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/permissions-connect.component.js" }
    ],
    [
      5753,
      {
        "../../ducks/metamask/metamask": 5529,
        "../../helpers/constants/routes": 5542,
        "../../helpers/utils/util": 5578,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "./permissions-connect.component": 5752,
        "@metamask/permission-controller": 1667,
        "@metamask/snaps-rpc-methods": 1953,
        "prop-types": 4219,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("@metamask/permission-controller"),
                  r = e("@metamask/snaps-rpc-methods"),
                  s = e("react-redux"),
                  o = f(e("prop-types")),
                  i = e("../../selectors"),
                  l = e("../../ducks/metamask/metamask"),
                  c = e("../../helpers/utils/util"),
                  u = e("../../store/actions"),
                  d = e("../../helpers/constants/routes"),
                  p = f(e("./permissions-connect.component"));
                function f(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const m = (0, s.connect)(
                  (e, t) => {
                    var n, s, o;
                    const {
                      match: {
                        params: { id: u }
                      },
                      location: { pathname: p }
                    } = t;
                    let f = (0, i.getPermissionsRequests)(e);
                    f = [...f, ...(0, i.getSnapInstallOrUpdateRequests)(e)];
                    const m = (0, i.getSelectedAddress)(e),
                      g = f.find((e) => e.metadata.id === u),
                      h = Boolean(null == g || null === (n = g.permissions) || void 0 === n ? void 0 : n.eth_accounts),
                      { metadata: _ = {} } = g || {},
                      { origin: y } = _,
                      b = (0, l.getNativeCurrency)(e),
                      v = (0, i.getTargetSubjectMetadata)(e, y) ?? {
                        name: (0, c.getURLHostName)(y) || y,
                        origin: y,
                        iconUrl: null,
                        extensionId: null,
                        subjectType: a.SubjectType.Unknown
                      };
                    let E = (0, i.getRequestType)(e, u);
                    g &&
                      1 === Object.keys(g.permissions || {}).length &&
                      null !== (s = g.permissions) &&
                      void 0 !== s &&
                      s[r.WALLET_SNAP_PERMISSION_KEY] &&
                      (E = "wallet_connectSnaps");
                    const w = (0, i.getRequestState)(e, u) || {},
                      T = (0, i.getAccountsWithLabels)(e),
                      k = (0, i.getLastConnectedInfo)(e) || {},
                      N = (null === (o = k[y]) || void 0 === o ? void 0 : o.accounts) || {};
                    Object.keys(N).forEach((e) => {
                      N[e] = (0, c.formatDate)(N[e], "yyyy-MM-dd");
                    });
                    const S = `${d.CONNECT_ROUTE}/${u}`,
                      x = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_CONFIRM_PERMISSIONS_ROUTE}`,
                      C = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_SNAPS_CONNECT_ROUTE}`,
                      O = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_SNAP_INSTALL_ROUTE}`,
                      R = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_SNAP_UPDATE_ROUTE}`,
                      M = `${d.CONNECT_ROUTE}/${u}${d.CONNECT_SNAP_RESULT_ROUTE}`,
                      P = p === O || p === R || p === M;
                    let I = 1 + h;
                    (I += P), (I = I.toString());
                    let A = "";
                    if (p === S) A = "1";
                    else if (p === x) A = h ? "2" : "1";
                    else if (P) A = h ? "3" : "2";
                    else {
                      if (p !== C) throw new Error("Incorrect path for permissions-connect component");
                      A = 1;
                    }
                    return {
                      isRequestingAccounts: h,
                      requestType: E,
                      snapsConnectPath: C,
                      snapInstallPath: O,
                      snapUpdatePath: R,
                      snapResultPath: M,
                      requestState: w,
                      hideTopBar: P,
                      snapsInstallPrivacyWarningShown: (0, i.getSnapsInstallPrivacyWarningShown)(e),
                      permissionsRequest: g,
                      permissionsRequestId: u,
                      accounts: T,
                      currentAddress: m,
                      origin: y,
                      newAccountNumber: T.length + 1,
                      nativeCurrency: b,
                      addressLastConnectedMap: N,
                      lastConnectedInfo: k,
                      connectPath: S,
                      confirmPermissionPath: x,
                      totalPages: I,
                      page: A,
                      targetSubjectMetadata: v
                    };
                  },
                  (e) => ({
                    approvePermissionsRequest: (t) => e((0, u.approvePermissionsRequest)(t)),
                    rejectPermissionsRequest: (t) => e((0, u.rejectPermissionsRequest)(t)),
                    approvePendingApproval: (t, n) => e((0, u.resolvePendingApproval)(t, n)),
                    rejectPendingApproval: (t, n) => e((0, u.rejectPendingApproval)(t, n)),
                    setSnapsInstallPrivacyWarningShownStatus: (t) => {
                      e((0, u.setSnapsInstallPrivacyWarningShownStatus)(t));
                    },
                    showNewAccountModal: ({ onCreateNewAccount: t, newAccountNumber: n }) =>
                      e((0, u.showModal)({ name: "NEW_ACCOUNT", onCreateNewAccount: t, newAccountNumber: n })),
                    getRequestAccountTabIds: () => e((0, u.getRequestAccountTabIds)())
                  })
                )(p.default);
                m.propTypes = {
                  history: o.default.object.isRequired,
                  match: o.default.shape({ params: o.default.shape({ id: o.default.string }).isRequired }).isRequired
                };
                n.default = m;
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/permissions-connect.container.js" }
    ],
    [
      5754,
      { "./permissions-redirect.component": 5755 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./permissions-redirect.component")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/redirect/index.js" }
    ],
    [
      5755,
      {
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/site-icon": 5479,
        "../../../components/ui/typography/typography": 5507,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = f);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = d(e("prop-types")),
                  s = d(e("../../../components/ui/site-icon")),
                  o = d(e("../../../components/ui/box")),
                  i = d(e("../../../components/ui/typography/typography")),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../contexts/i18n"),
                  u = e("../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f({ subjectMetadata: e }) {
                  const t = (0, a.useContext)(c.I18nContext);
                  return a.default.createElement(
                    "div",
                    { className: "permissions-redirect" },
                    a.default.createElement(
                      "div",
                      { className: "permissions-redirect__result" },
                      a.default.createElement(
                        i.default,
                        { boxProps: { marginBottom: 4 }, variant: l.TypographyVariant.H3 },
                        t("connecting")
                      ),
                      a.default.createElement(
                        "div",
                        { className: "permissions-redirect__icons" },
                        a.default.createElement(s.default, {
                          icon: e.iconUrl,
                          name: e.name,
                          size: 64,
                          className: "permissions-redirect__site-icon"
                        }),
                        a.default.createElement(
                          o.default,
                          {
                            className: "permissions-redirect__center-icon",
                            display: l.DISPLAY.FLEX,
                            alignItems: l.AlignItems.center,
                            justifyContent: l.JustifyContent.center
                          },
                          a.default.createElement(u.Icon, {
                            name: u.IconName.Check,
                            size: u.IconSize.Lg,
                            className: "permissions-redirect__check"
                          }),
                          a.default.createElement("div", { className: "permissions-redirect__dashed-line" })
                        ),
                        a.default.createElement(s.default, {
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
      5756,
      { "./snap-install": 5757 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snap-install")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-install/index.js" }
    ],
    [
      5757,
      {
        "../../../../components/app/snaps/install-error/install-error": 5074,
        "../../../../components/app/snaps/snap-authorship-header": 5080,
        "../../../../components/app/snaps/snap-install-warning": 5087,
        "../../../../components/app/snaps/snap-permissions-list": 5093,
        "../../../../components/component-library": 5242,
        "../../../../components/ui/box/box": 5372,
        "../../../../components/ui/page-container": 5458,
        "../../../../components/ui/pulse-loader/pulse-loader": 5468,
        "../../../../components/ui/site-origin/site-origin": 5482,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/utils/util": 5578,
        "../../../../hooks/useI18nContext": 5602,
        "../../../../hooks/useOriginMetadata": 5606,
        "../../../../hooks/useScrollRequired": 5612,
        "../util": 5764,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = w);
                var a = E(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("../../../../components/ui/page-container"),
                  o = e("../../../../hooks/useI18nContext"),
                  i = E(e("../../../../components/app/snaps/snap-install-warning")),
                  l = E(e("../../../../components/ui/box/box")),
                  c = e("../../../../helpers/constants/design-system"),
                  u = e("../util"),
                  d = E(e("../../../../components/ui/pulse-loader/pulse-loader")),
                  p = E(e("../../../../components/app/snaps/snap-authorship-header")),
                  f = e("../../../../components/component-library"),
                  m = e("../../../../helpers/utils/util"),
                  g = E(e("../../../../components/app/snaps/snap-permissions-list")),
                  h = e("../../../../hooks/useScrollRequired"),
                  _ = E(e("../../../../components/ui/site-origin/site-origin")),
                  y = E(e("../../../../components/app/snaps/install-error/install-error")),
                  b = e("../../../../hooks/useOriginMetadata");
                function v(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (v = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function E(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function w({ request: e, requestState: t, approveSnapInstall: n, rejectSnapInstall: a, targetSubjectMetadata: v }) {
                  var E;
                  const w = (0, o.useI18nContext)(),
                    T = (0, b.useOriginMetadata)(null == e || null === (E = e.metadata) || void 0 === E ? void 0 : E.dappOrigin) || {},
                    { origin: k, iconUrl: N, name: S } = T,
                    [x, C] = (0, r.useState)(!1),
                    { isScrollable: O, isScrolledToBottom: R, scrollToBottom: M, ref: P, onScroll: I } = (0, h.useScrollRequired)([t]),
                    A = (0, r.useCallback)(() => a(e.metadata.id), [e, a]),
                    D = (0, r.useCallback)(() => n(e.metadata.id), [e, n]),
                    j = !t.loading && t.error,
                    L = t.loading,
                    U = (0, u.getSnapInstallWarnings)((null == t ? void 0 : t.permissions) ?? {}, v, w),
                    F = U.length > 0,
                    B = (0, m.getSnapName)(v.origin, v);
                  return r.default.createElement(
                    l.default,
                    {
                      className: "page-container snap-install",
                      justifyContent: c.JustifyContent.spaceBetween,
                      height: c.BLOCK_SIZES.FULL,
                      borderStyle: c.BorderStyle.none,
                      flexDirection: c.FLEX_DIRECTION.COLUMN
                    },
                    L || j
                      ? r.default.createElement(
                          l.default,
                          { width: "full", alignItems: c.AlignItems.center, justifyContent: c.JustifyContent.center, paddingTop: 4 },
                          r.default.createElement(_.default, { chip: !0, siteOrigin: k, title: k, iconSrc: N, iconName: S })
                        )
                      : r.default.createElement(p.default, { snapId: v.origin }),
                    r.default.createElement(
                      l.default,
                      {
                        ref: L || j ? undefined : P,
                        onScroll: I,
                        className: "snap-install__content",
                        style: { overflowY: "auto", flex: !L && !j && "1" }
                      },
                      L &&
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
                      j &&
                        r.default.createElement(y.default, {
                          iconName: f.IconName.Warning,
                          title: w("connectionFailed"),
                          description: w("connectionFailedDescription", [
                            r.default.createElement(f.Text, { as: f.ValidTag.Span, key: "1", fontWeight: c.FontWeight.Medium }, B)
                          ]),
                          error: t.error
                        }),
                      !j &&
                        !L &&
                        r.default.createElement(
                          r.default.Fragment,
                          null,
                          r.default.createElement(
                            f.Text,
                            { variant: c.TextVariant.headingLg, paddingTop: 4, paddingBottom: 2, textAlign: "center" },
                            w("installRequest")
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
                            w("snapInstallRequest", [
                              r.default.createElement(
                                f.Text,
                                { as: f.ValidTag.Span, key: "2", variant: c.TextVariant.bodyMd, fontWeight: c.FontWeight.Medium },
                                B
                              )
                            ])
                          ),
                          r.default.createElement(g.default, {
                            snapId: v.origin,
                            permissions: t.permissions || {},
                            targetSubjectMetadata: v
                          }),
                          O && !R
                            ? r.default.createElement(f.AvatarIcon, {
                                className: "snap-install__scroll-button",
                                "data-testid": "snap-install-scroll",
                                iconName: f.IconName.Arrow2Down,
                                backgroundColor: c.BackgroundColor.infoDefault,
                                color: c.IconColor.primaryInverse,
                                onClick: M,
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
                      r.default.createElement(s.PageContainerFooter, {
                        cancelButtonType: "default",
                        hideCancel: j,
                        disabled: L || (!j && O && !R),
                        onCancel: A,
                        cancelText: w("cancel"),
                        onSubmit: () => {
                          !j && F ? C(!0) : j ? A() : D();
                        },
                        submitText: w(j ? "ok" : L ? "connect" : "install")
                      })
                    ),
                    x && r.default.createElement(i.default, { onCancel: () => C(!1), onSubmit: D, warnings: U, snapName: B })
                  );
                }
                w.propTypes = {
                  request: a.default.object.isRequired,
                  requestState: a.default.object.isRequired,
                  approveSnapInstall: a.default.func.isRequired,
                  rejectSnapInstall: a.default.func.isRequired,
                  targetSubjectMetadata: a.default.shape({
                    iconUrl: a.default.string,
                    name: a.default.string,
                    origin: a.default.string.isRequired,
                    sourceCode: a.default.string,
                    version: a.default.string
                  }).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-install/snap-install.js" }
    ],
    [
      5758,
      { "./snap-result": 5759 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snap-result")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-result/index.js" }
    ],
    [
      5759,
      {
        "../../../../components/app/snaps/install-error/install-error": 5074,
        "../../../../components/app/snaps/snap-authorship-header": 5080,
        "../../../../components/component-library": 5242,
        "../../../../components/ui/box/box": 5372,
        "../../../../components/ui/page-container": 5458,
        "../../../../components/ui/pulse-loader/pulse-loader": 5468,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/utils/util": 5578,
        "../../../../hooks/useI18nContext": 5602,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = h);
                var a = g(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("../../../../components/ui/page-container"),
                  o = e("../../../../hooks/useI18nContext"),
                  i = g(e("../../../../components/ui/box/box")),
                  l = e("../../../../helpers/constants/design-system"),
                  c = e("../../../../components/component-library"),
                  u = g(e("../../../../components/ui/pulse-loader/pulse-loader")),
                  d = g(e("../../../../components/app/snaps/install-error/install-error")),
                  p = g(e("../../../../components/app/snaps/snap-authorship-header")),
                  f = e("../../../../helpers/utils/util");
                function m(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function g(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function h({ request: e, requestState: t, approveSnapResult: n, targetSubjectMetadata: a }) {
                  const m = (0, o.useI18nContext)(),
                    g = (0, r.useCallback)(() => n(e.metadata.id), [e, n]),
                    h = !t.loading && t.error,
                    _ = t.loading,
                    y = (0, f.getSnapName)(a.origin, a);
                  return r.default.createElement(
                    i.default,
                    {
                      className: "page-container snap-result",
                      justifyContent: l.JustifyContent.spaceBetween,
                      height: l.BlockSize.Full,
                      borderStyle: l.BorderStyle.none,
                      flexDirection: l.FlexDirection.Column
                    },
                    r.default.createElement(p.default, { snapId: a.origin }),
                    r.default.createElement(
                      i.default,
                      {
                        className: "snap-result__content",
                        paddingLeft: 4,
                        paddingRight: 4,
                        alignItems: l.AlignItems.center,
                        flexDirection: l.FlexDirection.Column,
                        style: { overflowY: "auto" }
                      },
                      _ &&
                        r.default.createElement(
                          i.default,
                          {
                            className: "snap-result__content__loader-container",
                            flexDirection: l.FlexDirection.Column,
                            alignItems: l.AlignItems.center,
                            justifyContent: l.JustifyContent.center
                          },
                          r.default.createElement(u.default, null)
                        ),
                      !_ &&
                        !h &&
                        (function (e, t) {
                          let n;
                          switch (e) {
                            case "wallet_installSnap":
                              n = m("snapInstallSuccess");
                              break;
                            case "wallet_updateSnap":
                              n = m("snapUpdateSuccess");
                              break;
                            default:
                              n = m("snapResultSuccess");
                          }
                          return r.default.createElement(
                            i.default,
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
                              n
                            ),
                            r.default.createElement(
                              c.Text,
                              { textAlign: l.TextAlign.Center },
                              m("snapResultSuccessDescription", [
                                r.default.createElement(c.Text, { as: "span", key: "1", fontWeight: l.FontWeight.Medium }, t)
                              ])
                            )
                          );
                        })(t.type, y),
                      h &&
                        (function (e, n) {
                          let a, s;
                          switch (e) {
                            case "wallet_installSnap":
                              (a = m("snapInstallationErrorTitle")),
                                (s = m("snapInstallationErrorDescription", [
                                  r.default.createElement(c.Text, { as: "span", key: "1", fontWeight: l.FontWeight.Medium }, n)
                                ]));
                              break;
                            case "wallet_updateSnap":
                              (a = m("snapUpdateErrorTitle")),
                                (s = m("snapUpdateErrorDescription", [
                                  r.default.createElement(c.Text, { as: "span", key: "1", fontWeight: l.FontWeight.Medium }, n)
                                ]));
                              break;
                            default:
                              a = m("snapResultError");
                          }
                          return r.default.createElement(d.default, {
                            error: t.error,
                            title: a,
                            description: s,
                            iconName: c.IconName.Warning
                          });
                        })(t.type, y)
                    ),
                    r.default.createElement(
                      i.default,
                      {
                        className: "snap-result__footer",
                        alignItems: l.AlignItems.center,
                        flexDirection: l.FlexDirection.Column,
                        style: { boxShadow: "var(--shadow-size-lg) var(--color-shadow-default)" }
                      },
                      r.default.createElement(s.PageContainerFooter, {
                        hideCancel: !0,
                        disabled: _,
                        onSubmit: g,
                        submitText: m("ok").toUpperCase()
                      })
                    )
                  );
                }
                h.propTypes = {
                  request: a.default.object.isRequired,
                  requestState: a.default.object.isRequired,
                  approveSnapResult: a.default.func.isRequired,
                  targetSubjectMetadata: a.default.shape({
                    iconUrl: a.default.string,
                    name: a.default.string,
                    origin: a.default.string.isRequired,
                    sourceCode: a.default.string,
                    version: a.default.string
                  }).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-result/snap-result.js" }
    ],
    [
      5760,
      { "./snap-update": 5761 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snap-update")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-update/index.js" }
    ],
    [
      5761,
      {
        "../../../../components/app/snaps/install-error/install-error": 5074,
        "../../../../components/app/snaps/snap-authorship-header": 5080,
        "../../../../components/app/snaps/snap-install-warning": 5087,
        "../../../../components/app/snaps/update-snap-permission-list": 5106,
        "../../../../components/component-library": 5242,
        "../../../../components/ui/box/box": 5372,
        "../../../../components/ui/page-container": 5458,
        "../../../../components/ui/pulse-loader/pulse-loader": 5468,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/utils/util": 5578,
        "../../../../hooks/useI18nContext": 5602,
        "../../../../hooks/useOriginMetadata": 5606,
        "../../../../hooks/useScrollRequired": 5612,
        "../util": 5764,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = E);
                var a = v(e("prop-types")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("../../../../components/ui/page-container"),
                  o = e("../../../../hooks/useI18nContext"),
                  i = v(e("../../../../components/app/snaps/snap-install-warning")),
                  l = v(e("../../../../components/ui/box/box")),
                  c = e("../../../../helpers/constants/design-system"),
                  u = v(e("../../../../components/app/snaps/update-snap-permission-list")),
                  d = e("../util"),
                  p = v(e("../../../../components/ui/pulse-loader/pulse-loader")),
                  f = v(e("../../../../components/app/snaps/install-error/install-error")),
                  m = v(e("../../../../components/app/snaps/snap-authorship-header")),
                  g = e("../../../../components/component-library"),
                  h = e("../../../../hooks/useOriginMetadata"),
                  _ = e("../../../../helpers/utils/util"),
                  y = e("../../../../hooks/useScrollRequired");
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
                function E({ request: e, requestState: t, approveSnapUpdate: n, rejectSnapUpdate: a, targetSubjectMetadata: b }) {
                  var v;
                  const E = (0, o.useI18nContext)(),
                    [w, T] = (0, r.useState)(!1),
                    k = (0, h.useOriginMetadata)(null === (v = e.metadata) || void 0 === v ? void 0 : v.dappOrigin) || {},
                    { isScrollable: N, isScrolledToBottom: S, scrollToBottom: x, ref: C, onScroll: O } = (0, y.useScrollRequired)([t]),
                    R = (0, r.useCallback)(() => a(e.metadata.id), [e, a]),
                    M = (0, r.useCallback)(() => n(e.metadata.id), [e, n]),
                    P = t.approvedPermissions ?? {},
                    I = t.unusedPermissions ?? {},
                    A = t.newPermissions ?? {},
                    { newVersion: D } = t,
                    j = t.loading,
                    L = !j && t.error,
                    U = (0, d.getSnapInstallWarnings)(A, b, E),
                    F = U.length > 0,
                    B = (0, _.getSnapName)(b.origin, b);
                  return r.default.createElement(
                    l.default,
                    {
                      className: "page-container snap-update",
                      justifyContent: c.JustifyContent.spaceBetween,
                      height: c.BLOCK_SIZES.FULL,
                      borderStyle: c.BorderStyle.none,
                      flexDirection: c.FLEX_DIRECTION.COLUMN
                    },
                    r.default.createElement(m.default, { snapId: b.origin }),
                    r.default.createElement(
                      l.default,
                      { ref: C, onScroll: O, className: "snap-update__content", style: { overflowY: "auto", flex: !j && "1" } },
                      !j &&
                        !L &&
                        r.default.createElement(
                          g.Text,
                          { paddingBottom: 4, paddingTop: 4, variant: c.TextVariant.headingLg, textAlign: "center" },
                          E("updateRequest")
                        ),
                      j &&
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
                      L &&
                        r.default.createElement(f.default, {
                          iconName: g.IconName.Warning,
                          error: t.error,
                          title: E("snapUpdateErrorTitle"),
                          description: E("snapUpdateErrorDescription", [
                            r.default.createElement(g.Text, { as: g.ValidTag.Span, key: "1", fontWeight: c.FontWeight.Medium }, B)
                          ])
                        }),
                      !L &&
                        !j &&
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
                            E("snapUpdateRequest", [
                              r.default.createElement(
                                g.Text,
                                { as: g.ValidTag.Span, key: "1", variant: c.TextVariant.bodyMd, fontWeight: c.FontWeight.Medium },
                                null == k ? void 0 : k.hostname
                              ),
                              r.default.createElement(
                                g.Text,
                                { as: g.ValidTag.Span, key: "2", variant: c.TextVariant.bodyMd, fontWeight: c.FontWeight.Medium },
                                B
                              ),
                              r.default.createElement(
                                g.Text,
                                { as: g.ValidTag.Span, key: "3", variant: c.TextVariant.bodyMd, fontWeight: c.FontWeight.Medium },
                                D
                              )
                            ])
                          ),
                          r.default.createElement(u.default, {
                            approvedPermissions: P,
                            revokedPermissions: I,
                            newPermissions: A,
                            targetSubjectMetadata: b
                          }),
                          N && !S
                            ? r.default.createElement(g.AvatarIcon, {
                                className: "snap-install__scroll-button",
                                "data-testid": "snap-update-scroll",
                                iconName: g.IconName.Arrow2Down,
                                backgroundColor: c.BackgroundColor.infoDefault,
                                color: c.IconColor.primaryInverse,
                                onClick: x,
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
                      r.default.createElement(s.PageContainerFooter, {
                        cancelButtonType: "default",
                        hideCancel: L,
                        disabled: j || (!L && N && !S),
                        onCancel: R,
                        cancelText: E("cancel"),
                        onSubmit: () => {
                          !L && F ? T(!0) : L ? R() : M();
                        },
                        submitText: E(L ? "ok" : "update")
                      })
                    ),
                    w && r.default.createElement(i.default, { onCancel: () => T(!1), onSubmit: M, snapName: B, warnings: U })
                  );
                }
                E.propTypes = {
                  request: a.default.object.isRequired,
                  requestState: a.default.object.isRequired,
                  approveSnapUpdate: a.default.func.isRequired,
                  rejectSnapUpdate: a.default.func.isRequired,
                  targetSubjectMetadata: a.default.shape({
                    iconUrl: a.default.string,
                    name: a.default.string,
                    origin: a.default.string.isRequired,
                    sourceCode: a.default.string,
                    version: a.default.string
                  }).isRequired
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snap-update/snap-update.js" }
    ],
    [
      5762,
      { "./snaps-connect": 5763 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snaps-connect")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snaps-connect/index.js" }
    ],
    [
      5763,
      {
        "../../../../components/app/snaps/snap-avatar/snap-avatar": 5083,
        "../../../../components/app/snaps/snap-connect-cell/snap-connect-cell": 5084,
        "../../../../components/app/snaps/snap-privacy-warning/snap-privacy-warning": 5096,
        "../../../../components/component-library": 5242,
        "../../../../components/ui/box": 5373,
        "../../../../components/ui/page-container": 5458,
        "../../../../components/ui/pulse-loader/pulse-loader": 5468,
        "../../../../components/ui/site-origin": 5481,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/utils/util": 5578,
        "../../../../hooks/useI18nContext": 5602,
        "../../../../hooks/useOriginMetadata": 5606,
        "../../../../selectors": 5958,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = E);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  s = b(e("prop-types")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = b(e("../../../../components/ui/box")),
                  l = b(e("../../../../components/ui/site-origin")),
                  c = e("../../../../components/component-library"),
                  u = e("../../../../helpers/constants/design-system"),
                  d = e("../../../../components/ui/page-container"),
                  p = b(e("../../../../components/app/snaps/snap-connect-cell/snap-connect-cell")),
                  f = e("../../../../helpers/utils/util"),
                  m = b(e("../../../../components/ui/pulse-loader/pulse-loader")),
                  g = b(e("../../../../components/app/snaps/snap-privacy-warning/snap-privacy-warning")),
                  h = e("../../../../selectors"),
                  _ = b(e("../../../../components/app/snaps/snap-avatar/snap-avatar")),
                  y = e("../../../../hooks/useOriginMetadata");
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
                function E({
                  request: e,
                  approveConnection: t,
                  rejectConnection: n,
                  targetSubjectMetadata: s,
                  snapsInstallPrivacyWarningShown: b,
                  setSnapsInstallPrivacyWarningShownStatus: v
                }) {
                  const E = (0, o.useI18nContext)(),
                    { origin: w, iconUrl: T, name: k } = s,
                    [N, S] = (0, a.useState)(!1),
                    [x, C] = (0, a.useState)(!b),
                    O = (0, r.useSelector)((t) => {
                      var n;
                      return (0, h.getPermissions)(t, null == e || null === (n = e.metadata) || void 0 === n ? void 0 : n.origin);
                    }),
                    R = (0, a.useCallback)(() => {
                      n(e.metadata.id);
                    }, [e, n]),
                    M = (0, a.useCallback)(() => {
                      try {
                        S(!0), t(e);
                      } finally {
                        S(!1);
                      }
                    }, [e, t]),
                    P = (0, f.getDedupedSnaps)(e, O),
                    I = (0, r.useSelector)((e) => (0, h.getTargetSubjectMetadata)(e, null == P ? void 0 : P[0])),
                    A = () => {
                      const { hostname: e } = (0, y.useOriginMetadata)(w) || {};
                      if (N)
                        return a.default.createElement(
                          i.default,
                          {
                            className: "snap-connect__loader-container",
                            flexDirection: u.FlexDirection.Column,
                            alignItems: u.AlignItems.center,
                            justifyContent: u.JustifyContent.center
                          },
                          a.default.createElement(m.default, null)
                        );
                      if ((null == P ? void 0 : P.length) > 1)
                        return a.default.createElement(
                          i.default,
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
                          a.default.createElement(c.Text, { paddingBottom: 2, variant: u.TextVariant.headingLg }, E("connectionRequest")),
                          a.default.createElement(
                            c.Text,
                            { variant: u.TextVariant.bodyMd, textAlign: u.TextAlign.Center },
                            E("multipleSnapConnectionWarning", [
                              a.default.createElement(
                                c.Text,
                                { as: c.ValidTag.Span, key: "1", variant: u.TextVariant.bodyMd, fontWeight: u.FontWeight.Medium },
                                e
                              ),
                              a.default.createElement(
                                c.Text,
                                { as: c.ValidTag.Span, key: "2", variant: u.TextVariant.bodyMd, fontWeight: u.FontWeight.Medium },
                                null == P ? void 0 : P.length
                              )
                            ])
                          ),
                          a.default.createElement(
                            i.default,
                            {
                              className: "snaps-connect__content__snaps-list",
                              flexDirection: u.FlexDirection.Column,
                              display: u.Display.Flex,
                              marginTop: 4,
                              width: u.BlockSize.Full,
                              style: { overflowY: "auto", flex: 1 }
                            },
                            P.map((t) => a.default.createElement(p.default, { key: `snaps-connect-${t}`, snapId: t, origin: e }))
                          )
                        );
                      if (1 === (null == P ? void 0 : P.length)) {
                        const t = P[0],
                          n = (0, f.getSnapName)(t, I);
                        return a.default.createElement(
                          i.default,
                          {
                            className: "snaps-connect__content",
                            flexDirection: u.FlexDirection.Column,
                            justifyContent: u.JustifyContent.center,
                            alignItems: u.AlignItems.center,
                            height: u.BlockSize.Full,
                            paddingLeft: 4,
                            paddingRight: 4
                          },
                          a.default.createElement(
                            i.default,
                            { paddingBottom: 2 },
                            a.default.createElement(_.default, {
                              snapId: P[0],
                              badgeSize: c.IconSize.Md,
                              avatarSize: c.IconSize.Xl,
                              borderWidth: 3
                            })
                          ),
                          a.default.createElement(c.Text, { paddingBottom: 2, variant: u.TextVariant.headingLg }, E("connectionRequest")),
                          a.default.createElement(
                            c.Text,
                            {
                              variant: u.TextVariant.bodyMd,
                              textAlign: u.TextAlign.Center,
                              padding: [0, 4],
                              overflowWrap: u.OverflowWrap.Anywhere
                            },
                            E("snapConnectionWarning", [
                              a.default.createElement(
                                c.Text,
                                { as: c.ValidTag.Span, key: "1", variant: u.TextVariant.bodyMd, fontWeight: u.FontWeight.Medium },
                                e
                              ),
                              a.default.createElement(
                                c.Text,
                                { as: c.ValidTag.Span, key: "2", variant: u.TextVariant.bodyMd, fontWeight: u.FontWeight.Medium },
                                n
                              )
                            ])
                          )
                        );
                      }
                      return null;
                    };
                  return a.default.createElement(
                    i.default,
                    { className: "page-container snaps-connect", flexDirection: u.FlexDirection.Column, alignItems: u.AlignItems.center },
                    x &&
                      a.default.createElement(g.default, {
                        onAccepted: () => {
                          C(!1), v(!0);
                        },
                        onCanceled: R
                      }),
                    a.default.createElement(
                      i.default,
                      {
                        className: "snaps-connect__header",
                        flexDirection: u.FlexDirection.Column,
                        alignItems: u.AlignItems.center,
                        paddingLeft: 4,
                        paddingRight: 4
                      },
                      a.default.createElement(l.default, { chip: !0, siteOrigin: w, title: w, iconSrc: T, iconName: k })
                    ),
                    a.default.createElement(A, null),
                    a.default.createElement(d.PageContainerFooter, {
                      footerClassName: "snaps-connect__footer",
                      cancelButtonType: "default",
                      hideCancel: !1,
                      disabled: N,
                      onCancel: R,
                      cancelText: E("cancel"),
                      onSubmit: M,
                      submitText: E("connect")
                    })
                  );
                }
                E.propTypes = {
                  request: s.default.object.isRequired,
                  approveConnection: s.default.func.isRequired,
                  rejectConnection: s.default.func.isRequired,
                  targetSubjectMetadata: s.default.shape({
                    extensionId: s.default.string,
                    iconUrl: s.default.string,
                    name: s.default.string,
                    origin: s.default.string,
                    subjectType: s.default.string
                  }),
                  snapsInstallPrivacyWarningShown: s.default.bool.isRequired,
                  setSnapsInstallPrivacyWarningShownStatus: s.default.func
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/snaps-connect/snaps-connect.js" }
    ],
    [
      5764,
      { "../../../helpers/utils/permission": 5572 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.getSnapInstallWarnings = function (e, t, n) {
                    return Object.entries(e).reduce((e, [r, s]) => {
                      const o = (0, a.getPermissionDescription)({ t: n, permissionName: r, permissionValue: s, targetSubjectMetadata: t });
                      return e.concat(o.filter((e) => 1 === e.weight));
                    }, []);
                  });
                var a = e("../../../helpers/utils/permission");
              };
            };
      },
      { package: "$root$", file: "ui/pages/permissions-connect/snaps/util.js" }
    ],
    [
      5765,
      { "./remove-snap-account-content": 5766 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "RemoveSnapAccountContent", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./remove-snap-account-content")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/components/index.ts" }
    ],
    [
      5766,
      {
        "../../../components/app/snaps/snap-avatar": 5082,
        "../../../components/component-library": 5242,
        "../../../components/ui/card": 5381,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "./view-account-on-block-explorer": 5767,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = u(e("react")),
                  r = e("../../../components/component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  o = u(e("../../../components/app/snaps/snap-avatar")),
                  i = e("../../../hooks/useI18nContext"),
                  l = u(e("../../../components/ui/card")),
                  c = u(e("./view-account-on-block-explorer"));
                function u(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = ({ snapName: e, snapId: t, publicAddress: n }) => {
                  const u = (0, i.useI18nContext)();
                  return a.default.createElement(
                    r.Box,
                    { display: s.Display.Flex, flexDirection: s.FlexDirection.Row, justifyContent: s.JustifyContent.spaceBetween },
                    a.default.createElement(
                      r.Box,
                      {
                        paddingLeft: 4,
                        paddingRight: 4,
                        display: s.Display.Flex,
                        flexDirection: s.FlexDirection.Column,
                        alignItems: s.AlignItems.center
                      },
                      a.default.createElement(
                        r.Box,
                        { paddingBottom: 2 },
                        a.default.createElement(o.default, {
                          snapId: t,
                          badgeSize: r.IconSize.Md,
                          avatarSize: r.IconSize.Xl,
                          borderWidth: 3
                        })
                      ),
                      a.default.createElement(
                        r.Text,
                        { textAlign: s.TextAlign.Center, variant: s.TextVariant.headingLg },
                        u("removeSnapAccountTitle")
                      ),
                      a.default.createElement(
                        r.Text,
                        { variant: s.TextVariant.bodyMd, textAlign: s.TextAlign.Center, overflowWrap: s.OverflowWrap.Anywhere },
                        u("removeSnapAccountDescription", [e])
                      ),
                      a.default.createElement(
                        r.Box,
                        { paddingTop: 4, paddingBottom: 4 },
                        a.default.createElement(r.BannerAlert, {
                          severity: r.BannerAlertSeverity.Warning,
                          description: u("removeSnapAccountBannerDescription")
                        })
                      ),
                      a.default.createElement(
                        l.default,
                        { display: s.Display.Flex, gap: 4 },
                        a.default.createElement(
                          r.Box,
                          { display: s.Display.Flex, flexDirection: s.FlexDirection.Column, justifyContent: s.JustifyContent.spaceBetween },
                          a.default.createElement(
                            r.Text,
                            { color: s.TextColor.textMuted, variant: s.TextVariant.bodySm },
                            u("publicAddress")
                          ),
                          a.default.createElement(r.Text, { variant: s.TextVariant.bodyXs }, n)
                        ),
                        a.default.createElement(
                          r.Box,
                          { display: s.Display.Flex, marginLeft: "auto", alignItems: s.AlignItems.center },
                          a.default.createElement(c.default, { publicAddress: n })
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
      5767,
      {
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../selectors": 5958,
        "@metamask/etherscan-link": 1370,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  s = e("@metamask/etherscan-link"),
                  o = e("react-redux"),
                  i = e("../../../components/component-library"),
                  l = e("../../../helpers/constants/design-system"),
                  c = e("../../../selectors");
                const u = ({ publicAddress: e }) => {
                  const t = (0, o.useSelector)(c.getCurrentChainId),
                    n = (0, o.useSelector)(c.getRpcPrefsForCurrentProvider, o.shallowEqual),
                    a = (0, s.getAccountLink)(e, t, n);
                  return r.default.createElement(i.Icon, {
                    onClick: () => {
                      global.platform.openTab({ url: a });
                    },
                    name: i.IconName.Share,
                    color: l.IconColor.primaryDefault,
                    size: i.IconSize.Sm
                  });
                };
                n.default = r.default.memo(u);
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/components/view-account-on-block-explorer.tsx" }
    ],
    [
      5768,
      { "./remove-snap-account": 5769 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "RemoveSnapAccount", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./remove-snap-account")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/index.ts" }
    ],
    [
      5769,
      {
        "../../../shared/modules/hexstring-utils": 4788,
        "../../components/component-library": 5242,
        "../../helpers/constants/design-system": 5537,
        "./components": 5765,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  s = e("../../components/component-library"),
                  o = e("../../helpers/constants/design-system"),
                  i = e("../../../shared/modules/hexstring-utils"),
                  l = e("./components");
                n.default = ({ snapId: e, snapName: t, publicAddress: n }) =>
                  r.default.createElement(
                    s.Box,
                    {
                      className: "remove-snap-account-page",
                      height: o.BlockSize.Full,
                      width: o.BlockSize.Full,
                      backgroundColor: o.BackgroundColor.backgroundDefault,
                      borderStyle: o.BorderStyle.none,
                      flexDirection: o.FlexDirection.Column,
                      alignItems: o.AlignItems.center,
                      paddingBottom: 2,
                      paddingTop: 2
                    },
                    r.default.createElement(
                      s.Box,
                      {
                        display: o.Display.Flex,
                        flexDirection: o.FlexDirection.Column,
                        alignItems: o.AlignItems.center,
                        height: o.BlockSize.Full
                      },
                      r.default.createElement(l.RemoveSnapAccountContent, {
                        snapName: t,
                        snapId: e,
                        publicAddress: (0, i.toChecksumHexAddress)(n)
                      })
                    )
                  );
              };
            };
      },
      { package: "$root$", file: "ui/pages/remove-snap-account/remove-snap-account.tsx" }
    ],
    [
      5770,
      { "./routes.container": 5772 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./routes.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/routes/index.js" }
    ],
    [
      5771,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/app": 4749,
        "../../../shared/constants/network": 4759,
        "../../../shared/constants/preferences": 4761,
        "../../components/app/alerts": 4828,
        "../../components/app/loading-network-screen": 4943,
        "../../components/app/modals": 4978,
        "../../components/app/modals/keyring-snap-removal-modal": 4979,
        "../../components/app/nft-default-image/toggle-ipfs-modal": 5008,
        "../../components/app/qr-hardware-popover": 5033,
        "../../components/component-library": 5242,
        "../../components/multichain": 5327,
        "../../components/multichain/pages": 5339,
        "../../components/multichain/pages/send": 5354,
        "../../components/ui/alert": 5371,
        "../../components/ui/deprecated-test-networks/deprecated-test-networks": 5396,
        "../../components/ui/loading-screen": 5439,
        "../../components/ui/new-network-info/new-network-info": 5453,
        "../../ducks/send": 5531,
        "../../helpers/constants/routes": 5542,
        "../../helpers/higher-order-components/authenticated": 5550,
        "../../helpers/higher-order-components/initialized": 5552,
        "../asset": 5637,
        "../confirm-add-suggested-nft": 5639,
        "../confirm-add-suggested-token": 5641,
        "../confirm-transaction": 5673,
        "../confirmation": 5679,
        "../create-account/create-account.component": 5701,
        "../home": 5710,
        "../keychains/restore-vault": 5712,
        "../keychains/reveal-seed": 5713,
        "../keyring-snaps/add-snap-account": 5716,
        "../lock": 5726,
        "../notifications": 5729,
        "../onboarding-flow/onboarding-app-header/onboarding-app-header": 5736,
        "../onboarding-flow/onboarding-flow": 5738,
        "../permissions-connect": 5751,
        "../send": 5775,
        "../settings": 5832,
        "../snaps/snap-view": 5870,
        "../snaps/snaps-list": 5872,
        "../swaps": 5898,
        "../token-details": 5948,
        "../unlock-page": 5950,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-idle-timer": 4332,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = X(e("classnames")),
                  r = X(e("prop-types")),
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = Q(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  o = e("react-router-dom"),
                  i = X(e("react-idle-timer")),
                  l = X(e("../send")),
                  c = X(e("../swaps")),
                  u = X(e("../confirm-transaction")),
                  d = X(e("../home")),
                  p = (e("../../components/multichain/pages"), X(e("../settings"))),
                  f = X(e("../../helpers/higher-order-components/authenticated")),
                  m = X(e("../../helpers/higher-order-components/initialized")),
                  g = X(e("../lock")),
                  h = X(e("../permissions-connect")),
                  _ = X(e("../keychains/restore-vault")),
                  y = X(e("../keychains/reveal-seed")),
                  b = X(e("../confirm-add-suggested-token")),
                  v = X(e("../create-account/create-account.component")),
                  E = X(e("../confirm-add-suggested-nft")),
                  w = X(e("../../components/ui/loading-screen")),
                  T = X(e("../../components/app/loading-network-screen")),
                  k = e("../../components/app/modals"),
                  N = X(e("../../components/ui/alert")),
                  S = e("../../components/multichain"),
                  x = X(e("../unlock-page")),
                  C = X(e("../../components/app/alerts")),
                  O = X(e("../asset")),
                  R = X(e("../onboarding-flow/onboarding-app-header/onboarding-app-header")),
                  M = X(e("../token-details")),
                  P = X(e("../notifications")),
                  I = X(e("../snaps/snaps-list")),
                  A = X(e("../snaps/snap-view")),
                  D = X(e("../keyring-snaps/add-snap-account")),
                  j = e("../../helpers/constants/routes"),
                  L = e("../../../shared/constants/app"),
                  U = e("../../../shared/constants/network"),
                  F = e("../../../app/scripts/lib/util"),
                  B = X(e("../confirmation")),
                  W = X(e("../onboarding-flow/onboarding-flow")),
                  $ = X(e("../../components/app/qr-hardware-popover")),
                  q = e("../../ducks/send"),
                  V = X(e("../../components/ui/deprecated-test-networks/deprecated-test-networks")),
                  G = X(e("../../components/ui/new-network-info/new-network-info")),
                  H = e("../../../shared/constants/preferences"),
                  K = e("../../components/component-library"),
                  z = e("../../components/app/nft-default-image/toggle-ipfs-modal"),
                  Y = X(e("../../components/app/modals/keyring-snap-removal-modal"));
                e("../../components/multichain/pages/send");
                function Q(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (Q = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function X(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function J(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class Z extends s.Component {
                  constructor(...e) {
                    super(...e),
                      J(this, "onAppHeaderClick", async () => {
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
                        ? H.ThemeType.dark
                        : H.ThemeType.light;
                    document.documentElement.setAttribute("data-theme", t);
                  }
                  componentDidUpdate(e) {
                    const { theme: t } = this.props;
                    t !== e.theme && (t === H.ThemeType.os ? this.handleOsTheme() : document.documentElement.setAttribute("data-theme", t));
                  }
                  UNSAFE_componentWillMount() {
                    const { currentCurrency: e, pageChanged: t, setCurrentCurrencyToUSD: n, history: a, theme: r } = this.props;
                    e || n(),
                      a.listen((e, n) => {
                        "PUSH" === n && t(e.pathname);
                      }),
                      r === H.ThemeType.os ? this.handleOsTheme() : document.documentElement.setAttribute("data-theme", r);
                  }
                  renderRoutes() {
                    const { autoLockTimeLimit: e, setLastActiveTime: t, forgottenPassword: n } = this.props,
                      a = n ? o.Route : m.default,
                      r = s.default.createElement(
                        o.Switch,
                        null,
                        s.default.createElement(o.Route, { path: j.ONBOARDING_ROUTE, component: W.default }),
                        s.default.createElement(o.Route, { path: j.LOCK_ROUTE, component: g.default, exact: !0 }),
                        s.default.createElement(m.default, { path: j.UNLOCK_ROUTE, component: x.default, exact: !0 }),
                        s.default.createElement(a, { path: j.RESTORE_VAULT_ROUTE, component: _.default, exact: !0 }),
                        s.default.createElement(f.default, { path: j.REVEAL_SEED_ROUTE, component: y.default, exact: !0 }),
                        s.default.createElement(f.default, { path: j.SETTINGS_ROUTE, component: p.default }),
                        s.default.createElement(f.default, { path: j.NOTIFICATIONS_ROUTE, component: P.default }),
                        s.default.createElement(f.default, { exact: !0, path: j.SNAPS_ROUTE, component: I.default }),
                        s.default.createElement(f.default, { path: j.SNAPS_VIEW_ROUTE, component: A.default }),
                        s.default.createElement(f.default, { path: `${j.CONFIRM_TRANSACTION_ROUTE}/:id?`, component: u.default }),
                        s.default.createElement(f.default, { path: j.SEND_ROUTE, component: l.default, exact: !0 }),
                        s.default.createElement(f.default, { path: `${j.TOKEN_DETAILS}/:address/`, component: M.default, exact: !0 }),
                        s.default.createElement(f.default, { path: j.SWAPS_ROUTE, component: c.default }),
                        s.default.createElement(f.default, { path: j.CONFIRM_ADD_SUGGESTED_TOKEN_ROUTE, component: b.default, exact: !0 }),
                        s.default.createElement(f.default, { path: j.CONFIRM_ADD_SUGGESTED_NFT_ROUTE, component: E.default, exact: !0 }),
                        s.default.createElement(f.default, { path: j.CONFIRMATION_V_NEXT_ROUTE, component: B.default }),
                        s.default.createElement(f.default, { path: j.NEW_ACCOUNT_ROUTE, component: v.default }),
                        s.default.createElement(f.default, { path: j.ADD_SNAP_ACCOUNT_ROUTE, component: D.default }),
                        s.default.createElement(f.default, { path: `${j.CONNECT_ROUTE}/:id`, component: h.default }),
                        s.default.createElement(f.default, { path: `${j.ASSET_ROUTE}/:asset/:id`, component: O.default }),
                        s.default.createElement(f.default, { path: `${j.ASSET_ROUTE}/:asset/`, component: O.default }),
                        "",
                        s.default.createElement(f.default, { path: j.DEFAULT_ROUTE, component: d.default })
                      );
                    return e > 0 ? s.default.createElement(i.default, { onAction: t, throttle: 1e3 }, r) : r;
                  }
                  onInitializationUnlockPage() {
                    const { location: e } = this.props;
                    return Boolean((0, o.matchPath)(e.pathname, { path: j.ONBOARDING_UNLOCK_ROUTE, exact: !0 }));
                  }
                  onConfirmPage() {
                    const { location: e } = this.props;
                    return Boolean((0, o.matchPath)(e.pathname, { path: j.CONFIRM_TRANSACTION_ROUTE, exact: !1 }));
                  }
                  onEditTransactionPage() {
                    return (
                      this.props.sendStage === q.SEND_STAGES.EDIT ||
                      this.props.sendStage === q.SEND_STAGES.DRAFT ||
                      this.props.sendStage === q.SEND_STAGES.ADD_RECIPIENT
                    );
                  }
                  onSwapsPage() {
                    const { location: e } = this.props;
                    return Boolean((0, o.matchPath)(e.pathname, { path: j.SWAPS_ROUTE, exact: !1 }));
                  }
                  onSwapsBuildQuotePage() {
                    const { location: e } = this.props;
                    return Boolean((0, o.matchPath)(e.pathname, { path: j.BUILD_QUOTE_ROUTE, exact: !1 }));
                  }
                  hideAppHeader() {
                    const { location: e } = this.props;
                    if (
                      Boolean((0, o.matchPath)(e.pathname, { path: j.ONBOARDING_ROUTE, exact: !1 })) &&
                      !this.onInitializationUnlockPage()
                    )
                      return !0;
                    const t = (0, F.getEnvironmentType)();
                    if (t === L.ENVIRONMENT_TYPE_NOTIFICATION) return !0;
                    if (t === L.ENVIRONMENT_TYPE_POPUP && this.onConfirmPage()) return !0;
                    const n = Boolean((0, o.matchPath)(e.pathname, { path: j.CONNECT_ROUTE, exact: !1 }));
                    Boolean((0, o.matchPath)(e.pathname, { path: j.SEND_ROUTE, exact: !1 }));
                    const a = Boolean((0, o.matchPath)(e.pathname, { path: j.CONFIRMATION_V_NEXT_ROUTE, exact: !1 }));
                    return n || a;
                  }
                  showFooter() {
                    if (!1 === Boolean("")) return !1;
                    const { location: e } = this.props,
                      t = Boolean((0, o.matchPath)(e.pathname, { path: j.DEFAULT_ROUTE, exact: !0 })),
                      n = Boolean((0, o.matchPath)(e.pathname, { path: j.CONNECTIONS, exact: !0 }));
                    return Boolean((0, o.matchPath)(e.pathname, { path: j.ASSET_ROUTE, exact: !1 })) || t || n;
                  }
                  showOnboardingHeader() {
                    const { location: e } = this.props;
                    return Boolean((0, o.matchPath)(e.pathname, { path: j.ONBOARDING_ROUTE, exact: !1 }));
                  }
                  render() {
                    const {
                        isLoading: e,
                        isUnlocked: t,
                        alertMessage: n,
                        textDirection: r,
                        loadingMessage: o,
                        isNetworkLoading: i,
                        browserEnvironmentOs: l,
                        browserEnvironmentBrowser: c,
                        isNetworkUsed: u,
                        allAccountsOnNetworkAreEmpty: d,
                        isTestNet: p,
                        currentChainId: f,
                        shouldShowSeedPhraseReminder: m,
                        isCurrentProviderCustom: g,
                        completedOnboarding: h,
                        isAccountMenuOpen: _,
                        toggleAccountMenu: y,
                        isNetworkMenuOpen: b,
                        toggleNetworkMenu: v,
                        accountDetailsAddress: E,
                        isImportTokensModalOpen: x,
                        isSelectActionModalOpen: O,
                        location: M,
                        isImportNftsModalOpen: P,
                        hideImportNftsModal: I,
                        isIpfsModalOpen: A,
                        hideIpfsModal: D,
                        hideImportTokensModal: j,
                        hideSelectActionModal: U,
                        isShowKeyringSnapRemovalResultModal: B,
                        hideShowKeyringSnapRemovalResultModal: W
                      } = this.props,
                      q = o || i ? this.getConnectingLabel(o) : null,
                      H = t && f && !p && !u && !g && h && d,
                      Q = (0, F.getEnvironmentType)() !== L.ENVIRONMENT_TYPE_NOTIFICATION && t && !m;
                    return s.default.createElement(
                      "div",
                      { className: (0, a.default)("app", { [`os-${l}`]: l, [`browser-${c}`]: c }), dir: r },
                      Q && s.default.createElement(V.default, null),
                      H && s.default.createElement(G.default, null),
                      s.default.createElement($.default, null),
                      s.default.createElement(k.Modal, null),
                      s.default.createElement(N.default, { visible: this.props.alertOpen, msg: n }),
                      !this.hideAppHeader() && s.default.createElement(S.AppHeader, { location: M }),
                      this.showOnboardingHeader() && s.default.createElement(R.default, null),
                      _ ? s.default.createElement(S.AccountListMenu, { onClose: () => y() }) : null,
                      b ? s.default.createElement(S.NetworkListMenu, { onClose: () => v() }) : null,
                      E ? s.default.createElement(S.AccountDetails, { address: E }) : null,
                      P ? s.default.createElement(S.ImportNftsModal, { onClose: () => I() }) : null,
                      A ? s.default.createElement(z.ToggleIpfsModal, { onClose: () => D() }) : null,
                      x ? s.default.createElement(S.ImportTokensModal, { onClose: () => j() }) : null,
                      O ? s.default.createElement(S.SelectActionModal, { onClose: () => U() }) : null,
                      B && s.default.createElement(Y.default, { isOpen: B, onClose: () => W() }),
                      s.default.createElement(
                        K.Box,
                        { className: "main-container-wrapper" },
                        e ? s.default.createElement(w.default, { loadingMessage: q }) : null,
                        !e && i ? s.default.createElement(T.default, null) : null,
                        this.renderRoutes()
                      ),
                      this.showFooter() && s.default.createElement(S.AppFooter, { location: M }),
                      t ? s.default.createElement(C.default, { history: this.props.history }) : null
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
                    const { providerType: t, providerId: n } = this.props,
                      { t: a } = this.context;
                    switch (t) {
                      case U.NETWORK_TYPES.MAINNET:
                        return a("connectingToMainnet");
                      case U.NETWORK_TYPES.GOERLI:
                        return a("connectingToGoerli");
                      case U.NETWORK_TYPES.SEPOLIA:
                        return a("connectingToSepolia");
                      case U.NETWORK_TYPES.LINEA_GOERLI:
                        return a("connectingToLineaGoerli");
                      case U.NETWORK_TYPES.LINEA_MAINNET:
                        return a("connectingToLineaMainnet");
                      default:
                        return a("connectingTo", [n]);
                    }
                  }
                }
                (n.default = Z),
                  J(Z, "propTypes", {
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
                    hideShowKeyringSnapRemovalResultModal: r.default.func.isRequired
                  }),
                  J(Z, "contextTypes", { t: r.default.func, metricsEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/routes/routes.component.js" }
    ],
    [
      5772,
      {
        "../../../shared/constants/preferences": 4761,
        "../../components/multichain/app-footer/app-footer-actions": 5296,
        "../../ducks/history/history": 5526,
        "../../ducks/metamask/metamask": 5529,
        "../../ducks/send": 5531,
        "../../ducks/swaps/swaps": 5533,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "./routes.component": 5771,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = e("redux"),
                  i = e("../../selectors"),
                  l = e("../../store/actions"),
                  c = e("../../components/multichain/app-footer/app-footer-actions"),
                  u = e("../../ducks/history/history"),
                  d = e("../../ducks/swaps/swaps"),
                  p = e("../../ducks/send"),
                  f = e("../../ducks/metamask/metamask"),
                  m = e("../../../shared/constants/preferences"),
                  g = (a = e("./routes.component")) && a.__esModule ? a : { default: a };
                n.default = (0, o.compose)(
                  s.withRouter,
                  (0, r.connect)(
                    function (e) {
                      var t, n;
                      const { appState: a } = e,
                        { alertOpen: r, alertMessage: s, isLoading: o, loadingMessage: l } = a,
                        { autoLockTimeLimit: c = m.DEFAULT_AUTO_LOCK_TIME_LIMIT } = (0, i.getPreferences)(e),
                        { completedOnboarding: u } = e.metamask;
                      return {
                        alertOpen: r,
                        alertMessage: s,
                        textDirection: e.metamask.textDirection,
                        isLoading: o,
                        loadingMessage: l,
                        isUnlocked: (0, f.getIsUnlocked)(e),
                        isNetworkLoading: (0, i.isNetworkLoading)(e),
                        currentCurrency: e.metamask.currentCurrency,
                        autoLockTimeLimit: c,
                        browserEnvironmentOs: null === (t = e.metamask.browserEnvironment) || void 0 === t ? void 0 : t.os,
                        browserEnvironmentContainter: null === (n = e.metamask.browserEnvironment) || void 0 === n ? void 0 : n.browser,
                        providerId: (0, i.getNetworkIdentifier)(e),
                        providerType: (0, f.getProviderConfig)(e).type,
                        theme: (0, i.getTheme)(e),
                        sendStage: (0, p.getSendStage)(e),
                        isNetworkUsed: (0, i.getIsNetworkUsed)(e),
                        allAccountsOnNetworkAreEmpty: (0, i.getAllAccountsOnNetworkAreEmpty)(e),
                        isTestNet: (0, i.getIsTestnet)(e),
                        currentChainId: (0, i.getCurrentChainId)(e),
                        shouldShowSeedPhraseReminder: (0, i.getShouldShowSeedPhraseReminder)(e),
                        forgottenPassword: e.metamask.forgottenPassword,
                        isCurrentProviderCustom: (0, i.isCurrentProviderCustom)(e),
                        completedOnboarding: u,
                        isAccountMenuOpen: e.metamask.isAccountMenuOpen,
                        isNetworkMenuOpen: e.metamask.isNetworkMenuOpen,
                        isImportTokensModalOpen: e.appState.importTokensModalOpen,
                        accountDetailsAddress: e.appState.accountDetailsAddress,
                        isImportNftsModalOpen: e.appState.importNftsModal.open,
                        isIpfsModalOpen: e.appState.showIpfsModalOpen,
                        isSelectActionModalOpen: e.appState.showSelectActionModal,
                        isShowKeyringSnapRemovalResultModal: e.appState.showKeyringRemovalSnapModal
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
      5773,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/network": 4759,
        "../../../../shared/constants/transaction": 4770,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../components/app/confirm-gas-display": 4850,
        "../../../components/app/transaction-detail": 5154,
        "../../../components/app/transaction-detail-item": 5152,
        "../../../components/app/user-preferenced-currency-display": 5167,
        "../../../components/ui/actionable-message": 5370,
        "../../../components/ui/box": 5373,
        "../../../components/ui/button": 5377,
        "../../../components/ui/loading-heartbeat": 5436,
        "../../../components/ui/typography": 5506,
        "../../../contexts/gasFee": 5513,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../ducks/send": 5531,
        "../../../helpers/constants/common": 5535,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/experiences/useRamps": 5581,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../send.constants": 5809,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = P);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = M(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  s = R(e("prop-types")),
                  o = e("../../../contexts/i18n"),
                  i = e("../../../contexts/gasFee"),
                  l = e("../../../helpers/constants/common"),
                  c = R(e("../../../components/app/user-preferenced-currency-display")),
                  u = R(e("../../../components/ui/typography")),
                  d = R(e("../../../components/ui/button")),
                  p = R(e("../../../components/ui/box")),
                  f = e("../../../helpers/constants/design-system"),
                  m = e("../../../../shared/constants/transaction"),
                  g = R(e("../../../components/ui/loading-heartbeat")),
                  h = R(e("../../../components/app/transaction-detail-item")),
                  _ = e("../../../components/app/confirm-gas-display"),
                  y = e("../../../../shared/constants/network"),
                  b = R(e("../../../components/app/transaction-detail")),
                  v = R(e("../../../components/ui/actionable-message")),
                  E = e("../../../selectors"),
                  w = e("../send.constants"),
                  T = e("../../../ducks/send"),
                  k = e("../../../ducks/metamask/metamask"),
                  N = e("../../../store/actions"),
                  S = e("../../../../shared/modules/conversion.utils"),
                  x = e("../../../../shared/constants/metametrics"),
                  C = e("../../../contexts/metametrics"),
                  O = R(e("../../../hooks/experiences/useRamps"));
                function R(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function M(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (M = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function P({ gasError: e }) {
                  var t, n, s, R, M, P, I, A, D, j, L, U, F, B;
                  const W = (0, a.useContext)(o.I18nContext),
                    $ = (0, r.useDispatch)(),
                    { estimateUsed: q } = (0, i.useGasFeeContext)(),
                    V = (0, a.useContext)(C.MetaMetricsContext),
                    { openBuyCryptoInPdapp: G } = (0, O.default)(),
                    H = (0, r.useSelector)(k.getProviderConfig),
                    K = (0, r.useSelector)(E.getIsTestnet),
                    z = (0, r.useSelector)(E.getIsBuyableChain),
                    Y = (0, r.useSelector)(T.getCurrentDraftTransaction),
                    Q = (0, r.useSelector)(E.getUseCurrencyRateCheck),
                    { showFiatInTestnets: X, useNativeCurrencyAsPrimaryCurrency: J } = (0, r.useSelector)(E.getPreferences),
                    Z = (0, r.useSelector)(E.getUnapprovedTransactions),
                    ee = (0, r.useSelector)(k.getNativeCurrency),
                    { chainId: te } = H,
                    ne = y.NETWORK_TO_NAME_MAP[te],
                    ae = (null == Y || null === (t = Y.amount) || void 0 === t ? void 0 : t.error) === w.INSUFFICIENT_TOKENS_ERROR,
                    re = Z[Y.id],
                    se = ne || H.nickname,
                    oe = {
                      txParams: {
                        gasPrice: null === (n = Y.gas) || void 0 === n ? void 0 : n.gasPrice,
                        gas:
                          null != re && re.userEditedGasLimit
                            ? null == re || null === (s = re.txParams) || void 0 === s
                              ? void 0
                              : s.gas
                            : null === (R = Y.gas) || void 0 === R
                            ? void 0
                            : R.gasLimit,
                        maxFeePerGas:
                          null != re && null !== (M = re.txParams) && void 0 !== M && M.maxFeePerGas
                            ? null == re || null === (P = re.txParams) || void 0 === P
                              ? void 0
                              : P.maxFeePerGas
                            : null === (I = Y.gas) || void 0 === I
                            ? void 0
                            : I.maxFeePerGas,
                        maxPriorityFeePerGas:
                          null != re && null !== (A = re.txParams) && void 0 !== A && A.maxPriorityFeePerGas
                            ? null == re || null === (D = re.txParams) || void 0 === D
                              ? void 0
                              : D.maxPriorityFeePerGas
                            : null === (j = Y.gas) || void 0 === j
                            ? void 0
                            : j.maxPriorityFeePerGas,
                        value: null === (L = Y.amount) || void 0 === L ? void 0 : L.value,
                        type: Y.transactionType
                      },
                      userFeeLevel: null == re ? void 0 : re.userFeeLevel
                    },
                    { hexMaximumTransactionFee: ie, hexTransactionTotal: le } = (0, r.useSelector)((e) =>
                      (0, E.transactionFeeSelector)(e, oe)
                    );
                  let ce;
                  var ue;
                  if (
                    (null == Y || null === (U = Y.asset.details) || void 0 === U ? void 0 : U.standard) === m.TokenStandard.ERC721 ||
                    (null == Y || null === (F = Y.asset.details) || void 0 === F ? void 0 : F.standard) === m.TokenStandard.ERC1155
                  )
                    ce = null == Y || null === (ue = Y.asset.details) || void 0 === ue ? void 0 : ue.name;
                  else if ((null == Y || null === (B = Y.asset.details) || void 0 === B ? void 0 : B.standard) === m.TokenStandard.ERC20) {
                    var de;
                    ce = `${(0, S.hexWEIToDecETH)(Y.amount.value)} ${
                      null == Y || null === (de = Y.asset.details) || void 0 === de ? void 0 : de.symbol
                    }`;
                  }
                  const pe = `${ce} + ${Number((0, S.hexWEIToDecETH)(ie))} ${ee}`,
                    fe = Q && (!K || X);
                  let me, ge;
                  return (
                    "NATIVE" === (null == Y ? void 0 : Y.asset.type)
                      ? ((me = a.default.createElement(
                          p.default,
                          {
                            height: f.BLOCK_SIZES.MAX,
                            display: f.DISPLAY.FLEX,
                            flexDirection: f.FLEX_DIRECTION.COLUMN,
                            className: "gas-display__total-value"
                          },
                          a.default.createElement(g.default, { estimateUsed: null == oe ? void 0 : oe.userFeeLevel }),
                          a.default.createElement(c.default, { type: l.PRIMARY, key: "total-detail-value", value: le, hideLabel: !J })
                        )),
                        (ge = a.default.createElement(c.default, {
                          type: l.PRIMARY,
                          key: "total-max-amount",
                          value: (0, S.addHexes)(Y.amount.value, ie),
                          hideLabel: !J
                        })))
                      : J && ((me = pe), (ge = pe)),
                    a.default.createElement(
                      a.default.Fragment,
                      null,
                      a.default.createElement(
                        p.default,
                        { className: "gas-display" },
                        a.default.createElement(b.default, {
                          userAcknowledgedGasMissing: !1,
                          rows: [
                            a.default.createElement(_.ConfirmGasDisplay, { key: "gas-display" }),
                            (e || ae) &&
                              a.default.createElement(h.default, {
                                key: "gas-display-total-item",
                                detailTitle: W("total"),
                                detailText:
                                  fe &&
                                  a.default.createElement(
                                    p.default,
                                    {
                                      height: f.BLOCK_SIZES.MAX,
                                      display: f.DISPLAY.FLEX,
                                      flexDirection: f.FLEX_DIRECTION.COLUMN,
                                      className: "gas-display__total-value"
                                    },
                                    a.default.createElement(g.default, { estimateUsed: null == oe ? void 0 : oe.userFeeLevel }),
                                    a.default.createElement(c.default, {
                                      type: l.SECONDARY,
                                      key: "total-detail-text",
                                      value: le,
                                      hideLabel: Boolean(J)
                                    })
                                  ),
                                detailTotal: me,
                                subTitle: W("transactionDetailGasTotalSubtitle"),
                                subText: a.default.createElement(
                                  p.default,
                                  {
                                    height: f.BLOCK_SIZES.MAX,
                                    display: f.DISPLAY.FLEX,
                                    flexDirection: f.FLEX_DIRECTION.COLUMN,
                                    className: "gas-display__total-amount"
                                  },
                                  a.default.createElement(g.default, { estimateUsed: (null == oe ? void 0 : oe.userFeeLevel) ?? q }),
                                  a.default.createElement("strong", { key: "editGasSubTextAmountLabel" }, W("editGasSubTextAmountLabel")),
                                  " ",
                                  ge
                                )
                              })
                          ]
                        })
                      ),
                      (e || ae) &&
                        se &&
                        a.default.createElement(
                          p.default,
                          { className: "gas-display__warning-message", "data-testid": "gas-warning-message" },
                          a.default.createElement(
                            p.default,
                            {
                              paddingTop: 0,
                              paddingRight: 4,
                              paddingBottom: 4,
                              paddingLeft: 4,
                              className: "gas-display__confirm-approve-content__warning"
                            },
                            a.default.createElement(v.default, {
                              message:
                                z && "NATIVE" === Y.asset.type
                                  ? a.default.createElement(
                                      u.default,
                                      { variant: f.TypographyVariant.H7, align: "left" },
                                      W("insufficientCurrencyBuyOrReceive", [
                                        ee,
                                        se,
                                        a.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className: "confirm-page-container-content__link",
                                            onClick: () => {
                                              G(),
                                                V({
                                                  event: x.MetaMetricsEventName.NavBuyButtonClicked,
                                                  category: x.MetaMetricsEventCategory.Navigation,
                                                  properties: { location: "Gas Warning Insufficient Funds", text: "Buy" }
                                                });
                                            },
                                            key: `${ee}-buy-button`
                                          },
                                          W("buyAsset", [ee])
                                        ),
                                        a.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className: "gas-display__link",
                                            onClick: () => $((0, N.showModal)({ name: "ACCOUNT_DETAILS" })),
                                            key: "receive-button"
                                          },
                                          W("deposit")
                                        )
                                      ])
                                    )
                                  : a.default.createElement(
                                      u.default,
                                      { variant: f.TypographyVariant.H7, align: "left" },
                                      W("insufficientCurrencyBuyOrReceive", [
                                        ee,
                                        se,
                                        `${W("buyAsset", [ee])}`,
                                        a.default.createElement(
                                          d.default,
                                          {
                                            type: "inline",
                                            className: "gas-display__link",
                                            onClick: () => $((0, N.showModal)({ name: "ACCOUNT_DETAILS" })),
                                            key: "receive-button"
                                          },
                                          W("deposit")
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
                P.propTypes = { gasError: s.default.string };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/gas-display/gas-display.js" }
    ],
    [
      5774,
      { "./gas-display": 5773 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./gas-display")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/gas-display/index.js" }
    ],
    [
      5775,
      { "./send": 5810 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/index.js" }
    ],
    [
      5776,
      {
        "../../../../components/app/contact-list": 4888,
        "../../../../components/app/contact-list/recipient-group/recipient-group.component": 4889,
        "../../../../components/component-library": 5242,
        "../../../../components/ui/box": 5373,
        "../../../../components/ui/confusable": 5390,
        "../../../../components/ui/dialog": 5397,
        "../../../../components/ui/identicon": 5430,
        "../../../../helpers/constants/design-system": 5537,
        "../../send.utils": 5811,
        "fuse.js": 3582,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = g(e("prop-types")),
                  s = g(e("fuse.js")),
                  o = g(e("../../../../components/ui/identicon")),
                  i = g(e("../../../../components/ui/dialog")),
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
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function _(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class y extends a.Component {
                  constructor(e) {
                    super(e),
                      _(this, "selectRecipient", (e, t = "", n = "user input") => {
                        this.props.addHistoryEntry(`sendFlow - User clicked recipient from ${n}. address: ${e}, nickname ${t}`),
                          this.props.updateRecipient({ address: e, nickname: t }),
                          this.props.updateRecipientUserInput(e);
                      }),
                      _(this, "searchForContacts", () => {
                        const { userInput: e, contacts: t } = this.props;
                        let n = t;
                        return e && (this.contactFuse.setCollection(t), (n = this.contactFuse.search(e))), n;
                      }),
                      _(this, "searchForRecents", () => {
                        const { userInput: e, nonContacts: t } = this.props;
                        let n = t;
                        return e && (this.recentFuse.setCollection(t), (n = this.recentFuse.search(e))), n;
                      }),
                      (this.recentFuse = new s.default(e.nonContacts, {
                        shouldSort: !0,
                        threshold: 0.45,
                        location: 0,
                        distance: 100,
                        maxPatternLength: 32,
                        minMatchCharLength: 1,
                        keys: [{ name: "address", weight: 0.5 }]
                      })),
                      (this.contactFuse = new s.default(e.contacts, {
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
                    const { domainResolution: e, recipient: t, userInput: n, addressBookEntryName: r, ownedAccounts: s = [] } = this.props;
                    let o;
                    return (
                      t.address
                        ? (o = this.renderExplicitAddress(t.address, t.nickname, "validated user input"))
                        : e && !t.error && (o = this.renderExplicitAddress(e, r || n, "ENS resolution")),
                      a.default.createElement(
                        f.default,
                        { className: "send__select-recipient-wrapper" },
                        s && s.length > 1 && !n && this.renderTransfer(),
                        this.renderDialogs(),
                        o || this.renderMain()
                      )
                    );
                  }
                  renderExplicitAddress(e, t, n) {
                    return a.default.createElement(
                      "div",
                      { key: e, className: "send__select-recipient-wrapper__group-item", onClick: () => this.selectRecipient(e, t, n) },
                      a.default.createElement(o.default, { address: e, diameter: 28 }),
                      a.default.createElement(
                        "div",
                        { className: "send__select-recipient-wrapper__group-item__content" },
                        a.default.createElement(
                          "div",
                          { className: "send__select-recipient-wrapper__group-item__title" },
                          t ? a.default.createElement(d.default, { input: t }) : (0, u.ellipsify)(e)
                        ),
                        t &&
                          a.default.createElement(
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
                    const { userInput: n } = this.props;
                    return (
                      n &&
                        (t = t.filter(
                          (e) => e.name.toLowerCase().indexOf(n.toLowerCase()) > -1 || e.address.toLowerCase().indexOf(n.toLowerCase()) > -1
                        )),
                      a.default.createElement(
                        a.default.Fragment,
                        null,
                        a.default.createElement(
                          f.default,
                          { marginLeft: 4, marginRight: 4, marginTop: 2, marginBottom: 2 },
                          a.default.createElement(
                            p.Text,
                            { variant: m.TextVariant.bodyLgMedium, color: m.TextColor.textAlternative },
                            e("yourAccounts")
                          )
                        ),
                        a.default.createElement(
                          "div",
                          { className: "send__select-recipient-wrapper__list" },
                          a.default.createElement(c.default, { items: t, onSelect: (e, t) => this.selectRecipient(e, t, "my accounts") })
                        )
                      )
                    );
                  }
                  renderMain() {
                    const { t: e } = this.context,
                      { addressBook: t, userInput: n } = this.props;
                    return a.default.createElement(
                      "div",
                      { className: "send__select-recipient-wrapper__list" },
                      t.length > 0 && !n
                        ? a.default.createElement(
                            f.default,
                            { marginLeft: 4, marginRight: 4, marginTop: 2, marginBottom: 2 },
                            a.default.createElement(
                              p.Text,
                              { variant: m.TextVariant.bodyLgMedium, color: m.TextColor.textAlternative },
                              e("contacts")
                            )
                          )
                        : null,
                      a.default.createElement(l.default, {
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
                    const { domainError: e, recipient: t, domainWarning: n } = this.props,
                      { t: r } = this.context;
                    return e || (t.error && "required" !== t.error)
                      ? a.default.createElement(i.default, { type: "error", className: "send__error-dialog" }, r(e ?? t.error))
                      : n || t.warning
                      ? a.default.createElement(i.default, { type: "warning", className: "send__error-dialog" }, r(n ?? t.warning))
                      : null;
                  }
                }
                (n.default = y),
                  _(y, "propTypes", {
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
                  _(y, "contextTypes", { t: r.default.func, metricsEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/add-recipient.component.js" }
    ],
    [
      5777,
      {
        "../../../../ducks/domains": 5523,
        "../../../../ducks/send": 5531,
        "../../../../selectors": 5958,
        "./add-recipient.component": 5776,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../../selectors"),
                  o = e("../../../../ducks/send"),
                  i = e("../../../../ducks/domains"),
                  l = (a = e("./add-recipient.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  function (e) {
                    const t = (0, i.getDomainResolution)(e);
                    let n = "";
                    if (t) {
                      n = ((0, s.getAddressBookEntry)(e, t) || {}).name;
                    }
                    const a = (0, s.getAddressBook)(e),
                      r = [...(0, s.getCurrentNetworkTransactions)(e)].reverse(),
                      l = a
                        .filter(({ name: e }) => !e)
                        .map((e) => {
                          const t = r.find((t) => t.txParams.to === e.address.toLowerCase());
                          return { ...e, timestamp: null == t ? void 0 : t.time };
                        });
                    l.sort((e, t) => t.timestamp - e.timestamp);
                    const c = (0, s.getMetaMaskAccountsOrdered)(e);
                    return {
                      addressBook: a,
                      addressBookEntryName: n,
                      contacts: a.filter(({ name: e }) => Boolean(e)),
                      domainResolution: t,
                      domainError: (0, i.getDomainError)(e),
                      domainWarning: (0, i.getDomainWarning)(e),
                      nonContacts: l,
                      ownedAccounts: c,
                      userInput: (0, o.getRecipientUserInput)(e),
                      recipient: (0, o.getRecipient)(e)
                    };
                  },
                  function (e) {
                    return {
                      addHistoryEntry: (t) => e((0, o.addHistoryEntry)(t)),
                      updateRecipient: ({ address: t, nickname: n }) => e((0, o.updateRecipient)({ address: t, nickname: n })),
                      updateRecipientUserInput: (t) => e((0, o.updateRecipientUserInput)(t)),
                      useMyAccountsForRecipientSearch: () => e((0, o.useMyAccountsForRecipientSearch)()),
                      useContactListForRecipientSearch: () => e((0, o.useContactListForRecipientSearch)())
                    };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/add-recipient.container.js" }
    ],
    [
      5778,
      {
        "../../../../../app/scripts/lib/util": 91,
        "../../../../../shared/modules/hexstring-utils": 4788,
        "../../../../components/component-library": 5242,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/utils/util": 5578,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = d(e("prop-types")),
                  s = d(e("classnames")),
                  o = e("../../../../../app/scripts/lib/util"),
                  i = e("../../../../helpers/utils/util"),
                  l = e("../../../../../shared/modules/hexstring-utils"),
                  c = e("../../../../components/component-library"),
                  u = e("../../../../helpers/constants/design-system");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class m extends a.Component {
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
                                this.props.onPaste((0, o.addHexPrefix)(t));
                            });
                        }
                      }),
                      f(this, "onChange", ({ target: { value: e } }) => {
                        const {
                            onValidAddressTyped: t,
                            internalSearch: n,
                            onChange: a,
                            lookupEnsName: r,
                            resetDomainResolution: s
                          } = this.props,
                          c = e.trim();
                        return (
                          a(c),
                          n ||
                            ((0, i.isValidDomainName)(c)
                              ? r(c)
                              : (s(),
                                t &&
                                  !(0, l.isBurnAddress)(c) &&
                                  (0, l.isValidHexAddress)(c, { mixedCaseUseChecksum: !0 }) &&
                                  t((0, o.addHexPrefix)(c)))),
                          null
                        );
                      });
                  }
                  componentDidMount() {
                    this.props.initializeDomainSlice();
                  }
                  render() {
                    const { t: e } = this.context,
                      { className: t, selectedAddress: n, selectedName: r, userInput: o } = this.props,
                      i = Boolean(n);
                    return a.default.createElement(
                      "div",
                      { className: (0, s.default)("ens-input", t) },
                      a.default.createElement(
                        "div",
                        {
                          className: (0, s.default)("ens-input__wrapper", {
                            "ens-input__wrapper__status-icon--error": !1,
                            "ens-input__wrapper__status-icon--valid": !1,
                            "ens-input__wrapper--valid": i
                          })
                        },
                        i
                          ? a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement(
                                "div",
                                { className: "ens-input__wrapper__input ens-input__wrapper__input--selected" },
                                a.default.createElement("div", { className: "ens-input__selected-input__title" }, r || n),
                                r !== n && a.default.createElement("div", { className: "ens-input__selected-input__subtitle" }, n)
                              ),
                              a.default.createElement(c.ButtonIcon, {
                                iconName: c.IconName.Close,
                                ariaLabel: e("close"),
                                onClick: this.props.onReset,
                                className: "ens-input__wrapper__action-icon-button",
                                size: c.IconSize.Sm
                              })
                            )
                          : a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement("input", {
                                className: "ens-input__wrapper__input",
                                type: "text",
                                dir: "auto",
                                placeholder: e("recipientAddressPlaceholder"),
                                onChange: this.onChange,
                                onPaste: this.onPaste,
                                spellCheck: "false",
                                value: n || o,
                                autoFocus: !0,
                                "data-testid": "ens-input"
                              }),
                              a.default.createElement(c.ButtonIcon, {
                                className: "ens-input__wrapper__action-icon-button",
                                onClick: () => {
                                  o ? this.props.onReset() : this.props.scanQrCode();
                                },
                                iconName: o ? c.IconName.Close : c.IconName.Scan,
                                ariaLabel: e(o ? "close" : "scanQrCode"),
                                color: o ? u.IconColor.iconDefault : u.IconColor.primaryDefault
                              })
                            )
                      )
                    );
                  }
                }
                (n.default = m),
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
                    lookupEnsName: r.default.func.isRequired,
                    initializeDomainSlice: r.default.func.isRequired,
                    resetDomainResolution: r.default.func.isRequired
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/domain-input.component.js" }
    ],
    [
      5779,
      { "../../../../ducks/domains": 5523, "./domain-input.component": 5778, lodash: 4071, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("lodash"),
                  s = e("react-redux"),
                  o = e("../../../../ducks/domains"),
                  i = (a = e("./domain-input.component")) && a.__esModule ? a : { default: a };
                n.default = (0, s.connect)(null, function (e) {
                  return {
                    lookupEnsName: (0, r.debounce)((t) => e((0, o.lookupEnsName)(t)), 150),
                    initializeDomainSlice: () => e((0, o.initializeDomainSlice)()),
                    resetDomainResolution: (0, r.debounce)(() => e((0, o.resetDomainResolution)()), 300)
                  };
                })(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/domain-input.container.js" }
    ],
    [
      5780,
      { "./domain-input.container": 5779 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./domain-input.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/domain-input.js" }
    ],
    [
      5781,
      { "./add-recipient.container": 5777 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./add-recipient.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/add-recipient/index.js" }
    ],
    [
      5782,
      { "./send-content.container": 5792 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-content.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/index.js" }
    ],
    [
      5783,
      {
        "../../../../../../shared/constants/metametrics": 4758,
        "../../../../../contexts/metametrics": 5515,
        "../../../../../ducks/send": 5531,
        "../../../../../hooks/useI18nContext": 5602,
        classnames: 2952,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, o.useSelector)(i.isSendFormInvalid),
                      t = (0, o.useSelector)(i.getSendMaxModeState),
                      n = (0, o.useDispatch)(),
                      a = (0, r.useContext)(c.MetaMetricsContext),
                      d = (0, l.useI18nContext)(),
                      p = e;
                    return r.default.createElement(
                      "button",
                      {
                        className: "send-v2__amount-max",
                        disabled: p,
                        onClick: () => {
                          a({
                            event: 'Clicked "Amount Max"',
                            category: u.MetaMetricsEventCategory.Transactions,
                            properties: { action: "Edit Screen", legacy_event: !0 }
                          }),
                            n((0, i.toggleSendMaxMode)());
                        }
                      },
                      r.default.createElement("input", { type: "checkbox", checked: t, readOnly: !0 }),
                      r.default.createElement(
                        "div",
                        { className: (0, s.default)("send-v2__amount-max__button", { "send-v2__amount-max__button__disabled": p }) },
                        d("max")
                      )
                    );
                  });
                var a,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = (a = e("classnames")) && a.__esModule ? a : { default: a },
                  o = e("react-redux"),
                  i = e("../../../../../ducks/send"),
                  l = e("../../../../../hooks/useI18nContext"),
                  c = e("../../../../../contexts/metametrics"),
                  u = e("../../../../../../shared/constants/metametrics");
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
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/amount-max-button/amount-max-button.js" }
    ],
    [
      5784,
      { "./amount-max-button": 5783 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./amount-max-button")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/amount-max-button/index.js" }
    ],
    [
      5785,
      { "./send-amount-row.container": 5787 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-amount-row.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/index.js" }
    ],
    [
      5786,
      {
        "../../../../../shared/constants/transaction": 4770,
        "../../../../components/app/user-preferenced-currency-input": 5169,
        "../../../../components/app/user-preferenced-token-input": 5172,
        "../send-row-wrapper": 5799,
        "./amount-max-button": 5784,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = u(e("prop-types")),
                  s = u(e("../send-row-wrapper")),
                  o = u(e("../../../../components/app/user-preferenced-currency-input")),
                  i = u(e("../../../../components/app/user-preferenced-token-input")),
                  l = e("../../../../../shared/constants/transaction"),
                  c = u(e("./amount-max-button"));
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
                function p(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class f extends a.Component {
                  constructor(...e) {
                    super(...e),
                      p(this, "handleChange", (e) => {
                        this.props.updateSendAmount(e);
                      });
                  }
                  renderInput() {
                    const { amount: e, inError: t, asset: n } = this.props;
                    return n.type === l.AssetType.token
                      ? a.default.createElement(i.default, { error: t, onChange: this.handleChange, token: n.details, value: e })
                      : a.default.createElement(o.default, { error: t, onChange: this.handleChange, hexValue: e });
                  }
                  render() {
                    const { inError: e, asset: t } = this.props;
                    return t.type === l.AssetType.NFT
                      ? null
                      : a.default.createElement(
                          s.default,
                          { label: `${this.context.t("amount")}:`, showError: e, errorType: "amount" },
                          a.default.createElement(c.default, { inError: e }),
                          this.renderInput()
                        );
                  }
                }
                (n.default = f),
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
      5787,
      { "../../../../ducks/send": 5531, "./send-amount-row.component": 5786, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../../ducks/send"),
                  o = (a = e("./send-amount-row.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  function (e) {
                    return { amount: (0, s.getSendAmount)(e), inError: (0, s.sendAmountIsInError)(e), asset: (0, s.getSendAsset)(e) };
                  },
                  function (e) {
                    return { updateSendAmount: (t) => e((0, s.updateSendAmount)(t)) };
                  }
                )(o.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-amount-row/send-amount-row.container.js" }
    ],
    [
      5788,
      { "./send-asset-row.container": 5790 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-asset-row.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-asset-row/index.js" }
    ],
    [
      5789,
      {
        "../../../../../shared/constants/metametrics": 4758,
        "../../../../../shared/constants/transaction": 4770,
        "../../../../../shared/modules/string-utils": 4797,
        "../../../../components/app/token-list-display": 5124,
        "../../../../components/app/user-preferenced-currency-display": 5167,
        "../../../../components/component-library": 5242,
        "../../../../components/ui/identicon": 5430,
        "../../../../components/ui/token-balance": 5497,
        "../../../../helpers/constants/common": 5535,
        "../../../../helpers/constants/design-system": 5537,
        "../send-row-wrapper": 5799,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = _(e("prop-types")),
                  s = e("lodash"),
                  o = _(e("../send-row-wrapper")),
                  i = _(e("../../../../components/ui/identicon")),
                  l = _(e("../../../../components/ui/token-balance")),
                  c = _(e("../../../../components/app/token-list-display")),
                  u = _(e("../../../../components/app/user-preferenced-currency-display")),
                  d = e("../../../../helpers/constants/common"),
                  p = e("../../../../../shared/modules/string-utils"),
                  f = e("../../../../../shared/constants/metametrics"),
                  m = e("../../../../../shared/constants/transaction"),
                  g = e("../../../../components/component-library"),
                  h = e("../../../../helpers/constants/design-system");
                function _(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (y = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function b(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class v extends a.Component {
                  constructor(...e) {
                    super(...e),
                      b(this, "state", { isShowingDropdown: !1, sendableTokens: [], sendableNfts: [] }),
                      b(this, "openDropdown", () => this.setState({ isShowingDropdown: !0 })),
                      b(this, "closeDropdown", () => this.setState({ isShowingDropdown: !1 })),
                      b(this, "getAssetSelected", (e, t) => {
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
                      b(this, "selectToken", (e, t) => {
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
                      n = (0, s.chain)(t)
                        .groupBy("address")
                        .mapValues((e) => e.sort((e, t) => e.tokenId - t.tokenId))
                        .values()
                        .flatten()
                        .value();
                    this.setState({ sendableTokens: e, sendableNfts: n });
                  }
                  render() {
                    const { t: e } = this.context;
                    return a.default.createElement(
                      o.default,
                      { label: `${e("asset")}:` },
                      a.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown" },
                        a.default.createElement(
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
                      tokens: n,
                      nfts: a
                    } = this.props;
                    if (t === m.AssetType.token) {
                      const t = n.find(({ address: t }) => (0, p.isEqualCaseInsensitive)(t, e.address));
                      return t ? this.renderToken(t) : this.renderToken(e);
                    }
                    if (t === m.AssetType.NFT) {
                      const t = a.find(({ address: t, tokenId: n }) => (0, p.isEqualCaseInsensitive)(t, e.address) && n === e.tokenId);
                      if (t || e) return this.renderNft(t ?? e);
                    }
                    return this.renderNativeCurrency();
                  }
                  renderAssetDropdown() {
                    return (
                      this.state.isShowingDropdown &&
                      a.default.createElement(
                        "div",
                        null,
                        a.default.createElement("div", { className: "send-v2__asset-dropdown__close-area", onClick: this.closeDropdown }),
                        a.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__list" },
                          this.renderNativeCurrency(!0),
                          a.default.createElement(c.default, { clickHandler: (e) => this.selectToken(m.AssetType.token, e) }),
                          this.state.sendableNfts.map((e) => this.renderNft(e, !0))
                        )
                      )
                    );
                  }
                  renderNativeCurrency(e = !1) {
                    const { t: t } = this.context,
                      { accounts: n, selectedAddress: r, nativeCurrency: s, nativeCurrencyImage: o } = this.props,
                      { sendableTokens: l, sendableNfts: c } = this.state,
                      p = n[r] ? n[r].balance : "",
                      f = [...l, ...c];
                    return a.default.createElement(
                      "div",
                      {
                        className: f.length > 0 ? "send-v2__asset-dropdown__asset" : "send-v2__asset-dropdown__single-asset",
                        onClick: () => this.selectToken(m.AssetType.native)
                      },
                      a.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        a.default.createElement(i.default, { diameter: 36, image: o, address: s })
                      ),
                      a.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        a.default.createElement("div", { className: "send-v2__asset-dropdown__symbol" }, s),
                        a.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__name" },
                          a.default.createElement("span", { className: "send-v2__asset-dropdown__name__label" }, `${t("balance")}:`),
                          a.default.createElement(u.default, { value: p, type: d.PRIMARY })
                        )
                      ),
                      !e &&
                        f.length > 0 &&
                        a.default.createElement("i", { className: "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret" })
                    );
                  }
                  renderToken(e, t = !1) {
                    const { address: n, symbol: r, image: s } = e,
                      { t: o } = this.context;
                    return a.default.createElement(
                      "div",
                      { key: n, className: "send-v2__asset-dropdown__asset", onClick: () => this.selectToken(m.AssetType.token, e) },
                      a.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        a.default.createElement(i.default, { address: n, diameter: 36, image: s })
                      ),
                      a.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        a.default.createElement("div", { className: "send-v2__asset-dropdown__symbol" }, r),
                        a.default.createElement(
                          "div",
                          { className: "send-v2__asset-dropdown__name" },
                          a.default.createElement("span", { className: "send-v2__asset-dropdown__name__label" }, `${o("balance")}:`),
                          a.default.createElement(l.default, { token: e })
                        )
                      ),
                      !t && a.default.createElement("i", { className: "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret" })
                    );
                  }
                  renderNft(e, t = !1) {
                    const { address: n, name: r, image: s, tokenId: o } = e,
                      { t: l } = this.context,
                      c = this.props.collections.find((e) => e.address === n),
                      u = (null == c ? void 0 : c.name) || r;
                    return a.default.createElement(
                      "div",
                      { key: n, className: "send-v2__asset-dropdown__asset", onClick: () => this.selectToken(m.AssetType.NFT, e) },
                      a.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-icon" },
                        a.default.createElement(i.default, { address: n, diameter: 36, image: s })
                      ),
                      a.default.createElement(
                        "div",
                        { className: "send-v2__asset-dropdown__asset-data" },
                        a.default.createElement("div", { className: "send-v2__asset-dropdown__symbol", title: u }, u),
                        a.default.createElement(g.Text, { variant: h.TextVariant.bodyXs, ellipsis: !0, title: o }, `${l("tokenId")}: ${o}`)
                      ),
                      !t && a.default.createElement("i", { className: "fa fa-caret-down fa-lg send-v2__asset-dropdown__caret" })
                    );
                  }
                }
                (n.default = v),
                  b(v, "propTypes", {
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
                  b(v, "contextTypes", { t: r.default.func, trackEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-asset-row/send-asset-row.component.js" }
    ],
    [
      5790,
      {
        "../../../../ducks/metamask/metamask": 5529,
        "../../../../ducks/send": 5531,
        "../../../../selectors": 5958,
        "./send-asset-row.component": 5789,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../../ducks/metamask/metamask"),
                  o = e("../../../../selectors"),
                  i = e("../../../../ducks/send"),
                  l = (a = e("./send-asset-row.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  function (e) {
                    return {
                      tokens: e.metamask.tokens,
                      selectedAddress: e.metamask.selectedAddress,
                      nfts: (0, s.getNfts)(e),
                      collections: (0, s.getNftContracts)(e),
                      sendAsset: (0, i.getSendAsset)(e),
                      accounts: (0, o.getMetaMaskAccounts)(e),
                      nativeCurrency: (0, s.getNativeCurrency)(e),
                      nativeCurrencyImage: (0, o.getNativeCurrencyImage)(e)
                    };
                  },
                  function (e) {
                    return { updateSendAsset: ({ type: t, details: n }) => e((0, i.updateSendAsset)({ type: t, details: n })) };
                  }
                )(l.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-asset-row/send-asset-row.container.js" }
    ],
    [
      5791,
      {
        "../../../../shared/constants/transaction": 4770,
        "../../../components/ui/actionable-message": 5370,
        "../../../components/ui/dialog": 5397,
        "../../../components/ui/page-container/page-container-content.component": 5459,
        "../../../helpers/constants/common": 5535,
        "../../../helpers/constants/error-keys": 5538,
        "../gas-display": 5774,
        "./send-amount-row": 5785,
        "./send-asset-row": 5788,
        "./send-gas-row": 5793,
        "./send-hex-data-row": 5796,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = _(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = h(e("prop-types")),
                  s = h(e("../../../components/ui/page-container/page-container-content.component")),
                  o = h(e("../../../components/ui/dialog")),
                  i = h(e("../../../components/ui/actionable-message")),
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
                function _(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (_ = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function y(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class b extends a.Component {
                  render() {
                    const {
                      warning: e,
                      error: t,
                      gasIsExcessive: n,
                      isEthGasPrice: r,
                      noGasPrice: o,
                      networkOrAccountNotSupports1559: i,
                      asset: u,
                      assetError: h,
                      recipient: _,
                      recipientWarningAcknowledged: y,
                      isMultiLayerFeeNetwork: b
                    } = this.props;
                    let v;
                    n ? (v = l.GAS_PRICE_EXCESSIVE_ERROR_KEY) : o && (v = l.GAS_PRICE_FETCH_FAILURE_ERROR_KEY);
                    const E = this.props.showHexData && u.type !== c.AssetType.token && u.type !== c.AssetType.NFT,
                      w = "knownAddressRecipient" === _.warning;
                    return a.default.createElement(
                      s.default,
                      null,
                      a.default.createElement(
                        "div",
                        { className: "send-v2__form" },
                        h ? this.renderError(h) : null,
                        r ? this.renderWarning(l.ETH_GAS_PRICE_FETCH_WARNING_KEY) : null,
                        t ? this.renderError(t) : null,
                        e ? this.renderWarning() : null,
                        w && !y ? this.renderRecipientWarning() : null,
                        a.default.createElement(m.default, null),
                        a.default.createElement(p.default, null),
                        i ? a.default.createElement(g.default, null) : null,
                        E ? a.default.createElement(f.default, null) : null,
                        !b && a.default.createElement(d.default, { gasError: v })
                      )
                    );
                  }
                  renderWarning(e = "") {
                    const { t: t } = this.context,
                      { warning: n } = this.props;
                    return a.default.createElement(o.default, { type: "warning", className: "send__error-dialog" }, t("" === e ? n : e));
                  }
                  renderRecipientWarning() {
                    const { acknowledgeRecipientWarning: e } = this.props,
                      { t: t } = this.context;
                    return a.default.createElement(
                      "div",
                      { className: "send__warning-container", "data-testid": "send-warning" },
                      a.default.createElement(i.default, {
                        type: "danger",
                        useIcon: !0,
                        iconFillColor: "var(--color-error-default)",
                        primaryActionV2: { label: t("tooltipApproveButton"), onClick: e },
                        message: t("sendingToTokenContractWarning", [
                          a.default.createElement(
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
                    return a.default.createElement(o.default, { type: "error", className: "send__error-dialog" }, t(e));
                  }
                }
                (n.default = b),
                  y(b, "contextTypes", { t: r.default.func }),
                  y(b, "propTypes", {
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
      5792,
      { "../../../ducks/send": 5531, "../../../selectors": 5958, "./send-content.component": 5791, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../selectors"),
                  o = e("../../../ducks/send"),
                  i = (a = e("./send-content.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  function (e) {
                    const t = (0, o.getRecipient)(e),
                      n = (0, o.getRecipientWarningAcknowledgement)(e);
                    return {
                      isEthGasPrice: (0, s.getIsEthGasPriceFetched)(e),
                      noGasPrice: (0, s.getNoGasPriceFetched)(e),
                      networkOrAccountNotSupports1559: (0, s.checkNetworkOrAccountNotSupports1559)(e),
                      getIsBalanceInsufficient: (0, o.getIsBalanceInsufficient)(e),
                      asset: (0, o.getSendAsset)(e),
                      assetError: (0, o.getAssetError)(e),
                      recipient: t,
                      recipientWarningAcknowledged: n,
                      isMultiLayerFeeNetwork: (0, s.getIsMultiLayerFeeNetwork)(e)
                    };
                  },
                  function (e) {
                    return { acknowledgeRecipientWarning: () => e((0, o.acknowledgeRecipientWarning)()) };
                  }
                )(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-content.container.js" }
    ],
    [
      5793,
      { "./send-gas-row.container": 5795 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-gas-row.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-gas-row/index.js" }
    ],
    [
      5794,
      {
        "../../../../components/app/advanced-gas-inputs": 4826,
        "../../../../ducks/send": 5531,
        "../send-row-wrapper": 5799,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = l(e("prop-types")),
                  s = l(e("../send-row-wrapper")),
                  o = l(e("../../../../components/app/advanced-gas-inputs")),
                  i = e("../../../../ducks/send");
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function u(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class d extends a.Component {
                  render() {
                    const {
                      updateGasPrice: e,
                      updateGasLimit: t,
                      gasPrice: n,
                      gasLimit: r,
                      insufficientBalance: l,
                      minimumGasLimit: c,
                      gasInputMode: u
                    } = this.props;
                    return u !== i.GAS_INPUT_MODES.INLINE
                      ? null
                      : a.default.createElement(
                          s.default,
                          null,
                          a.default.createElement(o.default, {
                            updateCustomGasPrice: e,
                            updateCustomGasLimit: t,
                            customGasPrice: n,
                            customGasLimit: r,
                            insufficientBalance: l,
                            minimumGasLimit: c,
                            customPriceIsSafe: !0,
                            isSpeedUp: !1
                          })
                        );
                  }
                }
                (n.default = d),
                  u(d, "propTypes", {
                    updateGasPrice: r.default.func,
                    updateGasLimit: r.default.func,
                    gasInputMode: r.default.oneOf(Object.values(i.GAS_INPUT_MODES)),
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
      5795,
      {
        "../../../../../shared/modules/conversion.utils": 4784,
        "../../../../ducks/gas/gas.duck": 5525,
        "../../../../ducks/send": 5531,
        "./send-gas-row.component": 5794,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../../ducks/send"),
                  o = e("../../../../ducks/gas/gas.duck"),
                  i = e("../../../../../shared/modules/conversion.utils"),
                  l = (a = e("./send-gas-row.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  function (e) {
                    const t = (0, s.getGasPrice)(e),
                      n = (0, s.getGasLimit)(e),
                      a = (0, s.getMinimumGasLimitForSend)(e);
                    return {
                      minimumGasLimit: (0, i.hexToDecimal)(a),
                      gasFeeError: (0, s.gasFeeIsInError)(e),
                      gasLoadingError: (0, s.isSendStateInitialized)(e),
                      gasInputMode: (0, s.getGasInputMode)(e),
                      gasPrice: t,
                      gasLimit: n,
                      insufficientBalance: (0, s.getIsBalanceInsufficient)(e)
                    };
                  },
                  function (e) {
                    return {
                      updateGasPrice: (t) => {
                        e((0, s.updateGasPrice)(t)), e((0, o.setCustomGasPrice)(t));
                      },
                      updateGasLimit: (t) => {
                        e((0, s.updateGasLimit)(t)), e((0, o.setCustomGasLimit)(t));
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
      5796,
      { "./send-hex-data-row.container": 5798 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-hex-data-row.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-hex-data-row/index.js" }
    ],
    [
      5797,
      { "../send-row-wrapper": 5799, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = o(e("prop-types")),
                  s = o(e("../send-row-wrapper"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class c extends a.Component {
                  constructor(...e) {
                    super(...e),
                      l(this, "onInput", (e) => {
                        const { updateSendHexData: t } = this.props;
                        t(e.target.value.replace(/\n/gu, "") || null);
                      });
                  }
                  render() {
                    const { inError: e, data: t } = this.props,
                      { t: n } = this.context;
                    return a.default.createElement(
                      s.default,
                      { label: `${n("hexData")}:`, showError: e, errorType: "amount" },
                      a.default.createElement("textarea", {
                        onInput: this.onInput,
                        placeholder: n("optional"),
                        className: "send-v2__hex-data__input",
                        defaultValue: t || ""
                      })
                    );
                  }
                }
                (n.default = c),
                  l(c, "propTypes", { inError: r.default.bool, data: r.default.string, updateSendHexData: r.default.func.isRequired }),
                  l(c, "contextTypes", { t: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-hex-data-row/send-hex-data-row.component.js" }
    ],
    [
      5798,
      { "../../../../ducks/send": 5531, "./send-hex-data-row.component": 5797, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../../ducks/send"),
                  o = (a = e("./send-hex-data-row.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  function (e) {
                    return { data: (0, s.getSendHexData)(e) };
                  },
                  function (e) {
                    return { updateSendHexData: (t) => e((0, s.updateSendHexData)(t)) };
                  }
                )(o.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-hex-data-row/send-hex-data-row.container.js" }
    ],
    [
      5799,
      { "./send-row-wrapper.component": 5803 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-row-wrapper.component")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/index.js" }
    ],
    [
      5800,
      { "./send-row-error-message.container": 5802 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-row-error-message.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/index.js" }
    ],
    [
      5801,
      { classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = o(e("prop-types")),
                  s = o(e("classnames"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class c extends a.Component {
                  render() {
                    const { errors: e, errorType: t } = this.props,
                      n = e[t];
                    return n
                      ? a.default.createElement(
                          "div",
                          { className: (0, s.default)("send-v2__error", { "send-v2__error-amount": "amount" === t }) },
                          this.context.t(n)
                        )
                      : null;
                  }
                }
                (n.default = c),
                  l(c, "propTypes", { errors: r.default.object, errorType: r.default.string }),
                  l(c, "contextTypes", { t: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/send-row-error-message.component.js" }
    ],
    [
      5802,
      { "../../../../../ducks/send": 5531, "./send-row-error-message.component": 5801, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../../../ducks/send"),
                  o = (a = e("./send-row-error-message.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(function (e, t) {
                  return { errors: (0, s.getSendErrors)(e), errorType: t.errorType };
                })(o.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-content/send-row-wrapper/send-row-error-message/send-row-error-message.container.js" }
    ],
    [
      5803,
      { "./send-row-error-message": 5800, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = i(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = o(e("prop-types")),
                  s = o(e("./send-row-error-message"));
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function i(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (i = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function l(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class c extends a.Component {
                  renderAmountFormRow() {
                    const { children: e, errorType: t = "", label: n, showError: r = !1 } = this.props,
                      o = Array.isArray(e) ? e[1] || e[0] : e,
                      i = e.length > 1 ? e[0] : null;
                    return a.default.createElement(
                      "div",
                      { className: "send-v2__form-row" },
                      a.default.createElement("div", { className: "send-v2__form-label" }, n, i),
                      a.default.createElement(
                        "div",
                        { className: "send-v2__form-field-container" },
                        a.default.createElement("div", { className: "send-v2__form-field" }, o),
                        a.default.createElement("div", null, r ? a.default.createElement(s.default, { errorType: t }) : null)
                      )
                    );
                  }
                  renderFormRow() {
                    const { children: e, errorType: t = "", label: n, showError: r = !1 } = this.props,
                      o = Array.isArray(e) ? e[1] || e[0] : e,
                      i = (Array.isArray(e) && e.length) > 1 ? e[0] : null;
                    return a.default.createElement(
                      "div",
                      { className: "send-v2__form-row" },
                      a.default.createElement(
                        "div",
                        { className: "send-v2__form-label" },
                        n,
                        r ? a.default.createElement(s.default, { errorType: t }) : null,
                        i
                      ),
                      a.default.createElement("div", { className: "send-v2__form-field" }, o)
                    );
                  }
                  render() {
                    const { errorType: e = "" } = this.props;
                    return "amount" === e ? this.renderAmountFormRow() : this.renderFormRow();
                  }
                }
                (n.default = c),
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
      5804,
      { "./send-footer.container": 5806 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-footer.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-footer/index.js" }
    ],
    [
      5805,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/ui/page-container/page-container-footer": 5460,
        "../../../ducks/send": 5531,
        "../../../helpers/constants/routes": 5542,
        "../send.constants": 5809,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = d(e("prop-types")),
                  s = e("lodash"),
                  o = d(e("../../../components/ui/page-container/page-container-footer")),
                  i = e("../../../helpers/constants/routes"),
                  l = e("../../../../shared/constants/metametrics"),
                  c = e("../../../ducks/send"),
                  u = e("../send.constants");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class m extends a.Component {
                  onCancel() {
                    const {
                      cancelTx: e,
                      draftTransactionID: t,
                      history: n,
                      mostRecentOverviewPage: a,
                      resetSendState: r,
                      sendStage: s
                    } = this.props;
                    t && e({ id: t }), r();
                    const o = s === c.SEND_STAGES.EDIT ? i.DEFAULT_ROUTE : a;
                    n.push(o);
                  }
                  async onSubmit(e) {
                    e.preventDefault();
                    const { sign: t, history: n } = this.props,
                      { trackEvent: a } = this.context,
                      r = t();
                    Promise.resolve(r).then(() => {
                      a({
                        category: l.MetaMetricsEventCategory.Transactions,
                        event: "Complete",
                        properties: { action: "Edit Screen", legacy_event: !0 }
                      }),
                        n.push(i.CONFIRM_TRANSACTION_ROUTE);
                    });
                  }
                  componentDidUpdate(e) {
                    const { sendErrors: t } = this.props,
                      { trackEvent: n } = this.context;
                    if (Object.keys(t).length > 0 && !1 === (0, s.isEqual)(t, e.sendErrors)) {
                      const e = Object.keys(t).find((e) => t[e]),
                        a = t[e];
                      n({
                        category: l.MetaMetricsEventCategory.Transactions,
                        event: "Error",
                        properties: { action: "Edit Screen", legacy_event: !0, errorField: e, errorMessage: a }
                      });
                    }
                  }
                  render() {
                    const { t: e } = this.context,
                      { sendStage: t, sendErrors: n } = this.props;
                    return a.default.createElement(o.default, {
                      onCancel: () => this.onCancel(),
                      onSubmit: (e) => this.onSubmit(e),
                      disabled: this.props.disabled && n.gasFee !== u.INSUFFICIENT_FUNDS_ERROR,
                      cancelText: t === c.SEND_STAGES.EDIT ? e("reject") : e("cancel")
                    });
                  }
                }
                (n.default = m),
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
      5806,
      {
        "../../../ducks/history/history": 5526,
        "../../../ducks/metamask/metamask": 5529,
        "../../../ducks/send": 5531,
        "../../../store/actions": 5965,
        "./send-footer.component": 5805,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../store/actions"),
                  o = e("../../../ducks/send"),
                  i = e("../../../ducks/history/history"),
                  l = e("../../../ducks/metamask/metamask"),
                  c = (a = e("./send-footer.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  function (e) {
                    return {
                      disabled: (0, o.isSendFormInvalid)(e),
                      to: (0, o.getSendTo)(e),
                      toAccounts: (0, l.getSendToAccounts)(e),
                      sendStage: (0, o.getSendStage)(e),
                      sendErrors: (0, o.getSendErrors)(e),
                      draftTransactionID: (0, o.getDraftTransactionID)(e),
                      mostRecentOverviewPage: (0, i.getMostRecentOverviewPage)(e)
                    };
                  },
                  function (e) {
                    return {
                      resetSendState: () => e((0, o.resetSendState)()),
                      cancelTx: (t) => e((0, s.cancelTx)(t)),
                      sign: () => e((0, o.signTransaction)())
                    };
                  }
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-footer/send-footer.container.js" }
    ],
    [
      5807,
      { "./send-header.component": 5808 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./send-header.component")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send-header/index.js" }
    ],
    [
      5808,
      {
        "../../../../shared/constants/transaction": 4770,
        "../../../components/ui/page-container/page-container-header": 5462,
        "../../../ducks/history/history": 5526,
        "../../../ducks/send": 5531,
        "../../../hooks/useI18nContext": 5602,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, r.useHistory)(),
                      t = (0, s.useSelector)(i.getMostRecentOverviewPage),
                      n = (0, s.useDispatch)(),
                      d = (0, s.useSelector)(c.getSendStage),
                      p = (0, s.useSelector)(c.getSendAsset),
                      f = (0, l.useI18nContext)(),
                      m = (0, s.useSelector)(c.getDraftTransactionExists);
                    let g = (null == p ? void 0 : p.type) === u.AssetType.native ? f("send") : f("sendTokens");
                    !1 === m || [c.SEND_STAGES.ADD_RECIPIENT, c.SEND_STAGES.INACTIVE].includes(d)
                      ? (g = f("sendTo"))
                      : d === c.SEND_STAGES.EDIT && (g = f("edit"));
                    return a.default.createElement(o.default, {
                      className: "send__header",
                      onClose: () => {
                        n((0, c.resetSendState)()), e.push(t);
                      },
                      title: g,
                      headerCloseText: d === c.SEND_STAGES.EDIT ? f("cancelEdit") : f("cancel"),
                      hideClose: d === c.SEND_STAGES.DRAFT
                    });
                  });
                var a = d(e("react")),
                  r = e("react-router-dom"),
                  s = e("react-redux"),
                  o = d(e("../../../components/ui/page-container/page-container-header")),
                  i = e("../../../ducks/history/history"),
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
      5809,
      { "../../../shared/constants/common": 4751, "../../../shared/constants/gas": 4753, "../../../shared/modules/Numeric": 4780 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.TOKEN_TRANSFER_FUNCTION_SIGNATURE =
                    n.REQUIRED_ERROR =
                    n.RECIPIENT_TYPES =
                    n.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE =
                    n.NEGATIVE_ETH_ERROR =
                    n.MIN_GAS_TOTAL =
                    n.MIN_GAS_PRICE_HEX =
                    n.MIN_GAS_PRICE_GWEI =
                    n.MIN_GAS_PRICE_DEC =
                    n.MIN_GAS_LIMIT_DEC =
                    n.MAX_GAS_LIMIT_DEC =
                    n.KNOWN_RECIPIENT_ADDRESS_WARNING =
                    n.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR =
                    n.INVALID_RECIPIENT_ADDRESS_ERROR =
                    n.INSUFFICIENT_TOKENS_ERROR =
                    n.INSUFFICIENT_FUNDS_FOR_GAS_ERROR =
                    n.INSUFFICIENT_FUNDS_ERROR =
                    n.HIGH_FEE_WARNING_MULTIPLIER =
                    n.ENS_UNKNOWN_ERROR =
                    n.ENS_REGISTRATION_ERROR =
                    n.ENS_NO_ADDRESS_FOR_NAME =
                    n.ENS_NOT_SUPPORTED_ON_NETWORK =
                    n.ENS_NOT_FOUND_ON_NETWORK =
                    n.ENS_ILLEGAL_CHARACTER =
                    n.CONTRACT_ADDRESS_ERROR =
                    n.CONFUSING_ENS_ERROR =
                      void 0);
                var a = e("../../../shared/constants/gas"),
                  r = e("../../../shared/modules/Numeric"),
                  s = e("../../../shared/constants/common");
                const o = (n.MIN_GAS_PRICE_DEC = "0"),
                  i = (n.MIN_GAS_PRICE_HEX = parseInt(o, 10).toString(16));
                (n.MIN_GAS_LIMIT_DEC = new r.Numeric("21000", 10)),
                  (n.MAX_GAS_LIMIT_DEC = "7920027"),
                  (n.HIGH_FEE_WARNING_MULTIPLIER = 1.5),
                  (n.MIN_GAS_PRICE_GWEI = new r.Numeric(i, 16, s.EtherDenomination.WEI)
                    .toDenomination(s.EtherDenomination.GWEI)
                    .round(1)
                    .toPrefixedHexString()),
                  (n.MIN_GAS_TOTAL = new r.Numeric(a.MIN_GAS_LIMIT_HEX, 16)
                    .times(new r.Numeric(i, 16, s.EtherDenomination.WEI))
                    .toPrefixedHexString()),
                  (n.TOKEN_TRANSFER_FUNCTION_SIGNATURE = "0xa9059cbb"),
                  (n.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE = "0x23b872dd"),
                  (n.INSUFFICIENT_FUNDS_ERROR = "insufficientFunds"),
                  (n.INSUFFICIENT_FUNDS_FOR_GAS_ERROR = "insufficientFundsForGas"),
                  (n.INSUFFICIENT_TOKENS_ERROR = "insufficientTokens"),
                  (n.NEGATIVE_ETH_ERROR = "negativeETH"),
                  (n.INVALID_RECIPIENT_ADDRESS_ERROR = "invalidAddressRecipient"),
                  (n.INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR = "invalidAddressRecipientNotEthNetwork"),
                  (n.REQUIRED_ERROR = "required"),
                  (n.KNOWN_RECIPIENT_ADDRESS_WARNING = "knownAddressRecipient"),
                  (n.CONTRACT_ADDRESS_ERROR = "contractAddressError"),
                  (n.CONFUSING_ENS_ERROR = "confusingEnsDomain"),
                  (n.ENS_NO_ADDRESS_FOR_NAME = "noAddressForName"),
                  (n.ENS_NOT_FOUND_ON_NETWORK = "ensNotFoundOnCurrentNetwork"),
                  (n.ENS_NOT_SUPPORTED_ON_NETWORK = "ensNotSupportedOnNetwork"),
                  (n.ENS_ILLEGAL_CHARACTER = "ensIllegalCharacter"),
                  (n.ENS_UNKNOWN_ERROR = "ensUnknownError"),
                  (n.ENS_REGISTRATION_ERROR = "ensRegistrationError"),
                  (n.RECIPIENT_TYPES = { SMART_CONTRACT: "SMART_CONTRACT", NON_CONTRACT: "NON_CONTRACT" });
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send.constants.js" }
    ],
    [
      5810,
      {
        "../../../shared/constants/metametrics": 4758,
        "../../../shared/constants/transaction": 4770,
        "../../contexts/metametrics": 5515,
        "../../ducks/metamask/metamask": 5529,
        "../../ducks/send": 5531,
        "../../selectors": 5958,
        "../../store/actions": 5965,
        "./send-content": 5782,
        "./send-content/add-recipient": 5781,
        "./send-content/add-recipient/domain-input": 5780,
        "./send-footer": 5804,
        "./send-header": 5807,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, s.useHistory)(),
                      t = (0, a.useRef)(!1),
                      n = (0, r.useSelector)(o.getSendStage),
                      i = (0, r.useSelector)(v),
                      y = (0, r.useSelector)(o.getIsUsingMyAccountForRecipientSearch),
                      b = (0, r.useSelector)(o.getRecipient),
                      E = (0, r.useSelector)(l.getSendHexDataFeatureFlagState),
                      w = (0, r.useSelector)(o.getRecipientUserInput),
                      T = (0, r.useSelector)(o.getDraftTransactionExists),
                      k = (0, s.useLocation)(),
                      N = (0, a.useContext)(u.MetaMetricsContext),
                      S = (0, r.useDispatch)(),
                      x = (0, a.useCallback)(() => {
                        S((0, o.resetSendState)());
                      }, [S]);
                    let C;
                    (0, a.useEffect)(() => {
                      !1 === T && !1 === t.current && ((t.current = !0), S((0, o.startNewDraftTransaction)({ type: p.AssetType.native })));
                    }, [T, S]),
                      (0, a.useEffect)(() => {
                        window.addEventListener("beforeunload", x);
                      }, [x]),
                      (0, a.useEffect)(() => {
                        if ("?scan=true" === k.search) {
                          S((0, c.showQrScanner)());
                          const e = window.location.href.split("?")[0];
                          window.history.pushState({}, null, `${e}`), (window.location.hash = "#send");
                        }
                      }, [k, S]),
                      (0, a.useEffect)(
                        () => () => {
                          S((0, o.resetSendState)()), window.removeEventListener("beforeunload", x);
                        },
                        [S, x]
                      ),
                      (C =
                        T && [o.SEND_STAGES.EDIT, o.SEND_STAGES.DRAFT].includes(n)
                          ? a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement(g.default, { showHexData: E, gasIsExcessive: i }),
                              a.default.createElement(h.default, { key: "send-footer", history: e })
                            )
                          : a.default.createElement(m.default, null));
                    return a.default.createElement(
                      "div",
                      { className: "page-container" },
                      a.default.createElement(f.default, { history: e }),
                      a.default.createElement(_.default, {
                        userInput: w,
                        className: "send__to-row",
                        onChange: (e) => S((0, o.updateRecipientUserInput)(e)),
                        onValidAddressTyped: async (e) => {
                          S((0, o.addHistoryEntry)(`sendFlow - Valid address typed ${e}`)),
                            await S((0, o.updateRecipientUserInput)(e)),
                            S((0, o.updateRecipient)({ address: e, nickname: "" }));
                        },
                        internalSearch: y,
                        selectedAddress: b.address,
                        selectedName: b.nickname,
                        onPaste: (e) => {
                          S((0, o.addHistoryEntry)(`sendFlow - User pasted ${e} into address field`));
                        },
                        onReset: () => S((0, o.resetRecipientInput)()),
                        scanQrCode: () => {
                          N({
                            event: "Used QR scanner",
                            category: d.MetaMetricsEventCategory.Transactions,
                            properties: { action: "Edit Screen", legacy_event: !0 }
                          }),
                            S((0, c.showQrScanner)());
                        }
                      }),
                      C
                    );
                  });
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = e("../../ducks/send"),
                  i = e("../../selectors"),
                  l = e("../../ducks/metamask/metamask"),
                  c = e("../../store/actions"),
                  u = e("../../contexts/metametrics"),
                  d = e("../../../shared/constants/metametrics"),
                  p = e("../../../shared/constants/transaction"),
                  f = y(e("./send-header")),
                  m = y(e("./send-content/add-recipient")),
                  g = y(e("./send-content")),
                  h = y(e("./send-footer")),
                  _ = y(e("./send-content/add-recipient/domain-input"));
                function y(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function b(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (b = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const v = (e) => (0, i.isCustomPriceExcessive)(e, !0);
              };
            };
      },
      { package: "$root$", file: "ui/pages/send/send.js" }
    ],
    [
      5811,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/transaction": 4770,
        "../../../shared/modules/Numeric": 4780,
        "./send.constants": 5809,
        "ethereumjs-abi": 3249
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.addGasBuffer = function (e, t, n = 1.5) {
                    const a = new i.Numeric(e, 16),
                      r = new i.Numeric(t, 16).times(new i.Numeric(0.9, 10)).round(0),
                      s = a.times(new i.Numeric(n, 10)).round(0);
                    if (a.greaterThanOrEqualTo(r)) return e;
                    if (s.lessThan(r)) return s.toString();
                    return r.toString();
                  }),
                  (n.ellipsify = function (e, t = 6, n = 4) {
                    if (!e) return "";
                    return `${e.slice(0, t)}...${e.slice(-n)}`;
                  }),
                  (n.generateERC20TransferData = c),
                  (n.generateERC721TransferData = u),
                  (n.getAssetTransferData = function ({ sendToken: e, fromAddress: t, toAddress: n, amount: a }) {
                    switch (e.standard) {
                      case o.TokenStandard.ERC721:
                        return u({ toAddress: n, fromAddress: t, tokenId: e.tokenId });
                      case o.TokenStandard.ERC20:
                      default:
                        return c({ toAddress: n, amount: a, sendToken: e });
                    }
                  }),
                  (n.isBalanceSufficient = function ({
                    amount: e = "0x0",
                    balance: t = "0x0",
                    conversionRate: n = 1,
                    gasTotal: a = "0x0",
                    primaryCurrency: r
                  }) {
                    let s = new i.Numeric(e, 16).add(new i.Numeric(a, 16)),
                      o = new i.Numeric(t, 16);
                    null != r && ((s = s.applyConversionRate(n)), (o = o.applyConversionRate(n)));
                    return o.greaterThanOrEqualTo(s);
                  }),
                  (n.isTokenBalanceSufficient = function ({ amount: e = "0x0", tokenBalance: t, decimals: n }) {
                    const a = new i.Numeric(e, 16).shiftedBy(n);
                    return new i.Numeric(t, 16).greaterThanOrEqualTo(a);
                  });
                var a,
                  r = (a = e("ethereumjs-abi")) && a.__esModule ? a : { default: a },
                  s = e("../../../app/scripts/lib/util"),
                  o = e("../../../shared/constants/transaction"),
                  i = e("../../../shared/modules/Numeric"),
                  l = e("./send.constants");
                function c({ toAddress: e = "0x0", amount: t = "0x0", sendToken: n }) {
                  return n
                    ? l.TOKEN_TRANSFER_FUNCTION_SIGNATURE +
                        Array.prototype.map
                          .call(r.default.rawEncode(["address", "uint256"], [(0, s.addHexPrefix)(e), (0, s.addHexPrefix)(t)]), (e) =>
                            `00${e.toString(16)}`.slice(-2)
                          )
                          .join("")
                    : undefined;
                }
                function u({ toAddress: e = "0x0", fromAddress: t = "0x0", tokenId: n }) {
                  return n
                    ? l.NFT_TRANSFER_FROM_FUNCTION_SIGNATURE +
                        Array.prototype.map
                          .call(
                            r.default.rawEncode(["address", "address", "uint256"], [(0, s.addHexPrefix)(t), (0, s.addHexPrefix)(e), n]),
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
      5812,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/app": 4749,
        "../../../../shared/constants/hardware-wallets": 4754,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/preferences": 4761,
        "../../../components/component-library": 5242,
        "../../../components/ui/button": 5377,
        "../../../components/ui/dialog": 5397,
        "../../../components/ui/dropdown": 5402,
        "../../../components/ui/text-field": 5491,
        "../../../components/ui/toggle-button": 5495,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/zendesk-url": 5547,
        "../../../helpers/utils/export-utils": 5561,
        "../../../helpers/utils/settings-search": 5574,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = v(e("prop-types")),
                  s = e("../../../components/component-library"),
                  o = v(e("../../../components/ui/toggle-button")),
                  i = v(e("../../../components/ui/text-field")),
                  l = v(e("../../../components/ui/button")),
                  c = v(e("../../../components/ui/dropdown")),
                  u = v(e("../../../components/ui/dialog")),
                  d = e("../../../helpers/constants/design-system"),
                  p = e("../../../../app/scripts/lib/util"),
                  f = e("../../../../shared/constants/app"),
                  m = e("../../../helpers/utils/settings-search"),
                  g = e("../../../../shared/constants/hardware-wallets"),
                  h = e("../../../../shared/constants/metametrics"),
                  _ = e("../../../../shared/constants/preferences"),
                  y = e("../../../helpers/utils/export-utils"),
                  b = v(e("../../../helpers/constants/zendesk-url"));
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function w(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                const T = "CORRUPT_JSON_FILE";
                class k extends a.PureComponent {
                  constructor(...e) {
                    super(...e),
                      w(this, "state", {
                        autoLockTimeLimit: this.props.autoLockTimeLimit,
                        autoLockTimeLimitBeforeNormalization: this.props.autoLockTimeLimit,
                        lockTimeError: "",
                        showLedgerTransportWarning: !1,
                        showResultMessage: !1,
                        restoreSuccessful: !0,
                        restoreMessage: null
                      }),
                      w(
                        this,
                        "settingsRefs",
                        Array((0, m.getNumberOfSettingsInSection)(this.context.t, this.context.t("advanced")))
                          .fill(undefined)
                          .map(() => a.default.createRef())
                      ),
                      w(this, "backupUserData", async () => {
                        const { fileName: e, data: t } = await this.props.backupUserData();
                        (0, y.exportAsFile)(e, t, y.ExportableContentType.JSON),
                          this.context.trackEvent({ event: "User Data Exported", category: "Backup", properties: {} });
                      });
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, m.handleSettingsRefs)(e, e("advanced"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, m.handleSettingsRefs)(e, e("advanced"), this.settingsRefs);
                  }
                  async getTextFromFile(e) {
                    return new Promise((t, n) => {
                      const a = new window.FileReader();
                      (a.onload = (e) => {
                        const n = e.target.result;
                        t(n);
                      }),
                        (a.onerror = (e) => {
                          n(e);
                        }),
                        a.readAsText(e);
                    });
                  }
                  async handleFileUpload(e) {
                    e.persist();
                    const t = e.target.files[0],
                      n = await this.getTextFromFile(t);
                    e.target.value = "";
                    try {
                      const e = await this.props.restoreUserData(n);
                      this.setState({ showResultMessage: !0, restoreSuccessful: e, restoreMessage: null });
                    } catch (e) {
                      e.message.match(/Unexpected.+JSON/iu) &&
                        this.setState({ showResultMessage: !0, restoreSuccessful: !1, restoreMessage: T });
                    }
                  }
                  renderStateLogs() {
                    const { t: e } = this.context,
                      { displayWarning: t } = this.props;
                    return a.default.createElement(
                      s.Box,
                      {
                        className: "settings-page__content-row",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column,
                        ref: this.settingsRefs[0],
                        "data-testid": "advanced-setting-state-logs"
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("stateLogs")),
                        a.default.createElement("span", { className: "settings-page__content-description" }, e("stateLogsDescription"))
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(
                            l.default,
                            {
                              type: "secondary",
                              large: !0,
                              onClick: () => {
                                window.logStateString((n, a) => {
                                  n
                                    ? t(e("stateLogError"))
                                    : (0, y.exportAsFile)(`${e("stateLogFileName")}.json`, a, y.ExportableContentType.JSON);
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
                    return a.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[1],
                        className: "settings-page__content-row",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column,
                        "data-testid": "advanced-setting-reset-account"
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("clearActivity")),
                        a.default.createElement("span", { className: "settings-page__content-description" }, e("clearActivityDescription"))
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(
                            l.default,
                            {
                              type: "danger",
                              large: !0,
                              className: "settings-tab__button--red",
                              onClick: (e) => {
                                e.preventDefault(),
                                  this.context.trackEvent({
                                    category: h.MetaMetricsEventCategory.Settings,
                                    event: h.MetaMetricsEventName.AccountReset,
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
                      { sendHexData: t, setHexDataFeatureFlag: n } = this.props;
                    return a.default.createElement(
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
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("showHexData")),
                        a.default.createElement("div", { className: "settings-page__content-description" }, e("showHexDataDescription"))
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        a.default.createElement(o.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderShowConversionInTestnets() {
                    const { t: e } = this.context,
                      { showFiatInTestnets: t, setShowFiatConversionOnTestnetsPreference: n } = this.props;
                    return a.default.createElement(
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
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("showFiatConversionInTestnets")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("showFiatConversionInTestnetsDescription")
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        a.default.createElement(o.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderToggleTestNetworks() {
                    const { t: e } = this.context,
                      { showTestNetworks: t, setShowTestNetworks: n } = this.props;
                    return a.default.createElement(
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
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("showTestnetNetworks")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("showTestnetNetworksDescription")
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        a.default.createElement(o.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderUseNonceOptIn() {
                    const { t: e } = this.context,
                      { useNonceField: t, setUseNonceField: n } = this.props;
                    return a.default.createElement(
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
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("nonceField")),
                        a.default.createElement("div", { className: "settings-page__content-description" }, e("nonceFieldDescription"))
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        a.default.createElement(o.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderAutoLockTimeLimit() {
                    const { t: e } = this.context,
                      { lockTimeError: t } = this.state,
                      { setAutoLockTimeLimit: n } = this.props;
                    return a.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[6],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-auto-lock",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("autoLockTimeLimit")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("autoLockTimeLimitDescription")
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(i.default, {
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
                          a.default.createElement(
                            l.default,
                            {
                              type: "primary",
                              "data-testid": "auto-lockout-button",
                              className: "settings-tab__rpc-save-button",
                              disabled: "" !== t,
                              onClick: () => {
                                n(this.state.autoLockTimeLimit);
                              }
                            },
                            e("save")
                          )
                        )
                      )
                    );
                  }
                  renderLedgerLiveControl() {
                    const { t: e } = this.context,
                      { ledgerTransportType: t, setLedgerTransportPreference: n, userHasALedgerAccount: r } = this.props,
                      o = { LIVE: e("ledgerLive"), WEBHID: e("webhid"), U2F: e("u2f") },
                      i = [
                        { name: o.LIVE, value: g.LedgerTransportTypes.live },
                        { name: o.U2F, value: g.LedgerTransportTypes.u2f }
                      ];
                    window.navigator.hid && i.push({ name: o.WEBHID, value: g.LedgerTransportTypes.webhid });
                    const p = window.navigator.hid ? o.WEBHID : o.U2F;
                    return a.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[7],
                        className: "settings-page__content-row",
                        "data-testid": "ledger-live-control",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("preferredLedgerConnectionType")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("ledgerConnectionPreferenceDescription", [
                            p,
                            a.default.createElement(
                              l.default,
                              {
                                key: "ledger-connection-settings-learn-more",
                                type: "link",
                                href: b.default.HARDWARE_CONNECTION,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "settings-page__inline-link"
                              },
                              e("learnMore")
                            )
                          ])
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(c.default, {
                            id: "select-ledger-transport-type",
                            options: i,
                            selectedOption: t,
                            onChange: async (e) => {
                              t === g.LedgerTransportTypes.live &&
                                e === g.LedgerTransportTypes.webhid &&
                                this.setState({ showLedgerTransportWarning: !0 }),
                                n(e),
                                e === g.LedgerTransportTypes.webhid &&
                                  r &&
                                  (await window.navigator.hid.requestDevice({ filters: [{ vendorId: g.LEDGER_USB_VENDOR_ID }] }));
                            }
                          }),
                          this.state.showLedgerTransportWarning
                            ? a.default.createElement(
                                u.default,
                                { type: "message" },
                                a.default.createElement(
                                  "div",
                                  { className: "settings-page__content-item-dialog" },
                                  e("ledgerTransportChangeWarning")
                                )
                              )
                            : null
                        )
                      )
                    );
                  }
                  renderDismissSeedBackupReminderControl() {
                    const { t: e } = this.context,
                      { dismissSeedBackUpReminder: t, setDismissSeedBackUpReminder: n } = this.props;
                    return a.default.createElement(
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
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("dismissReminderField")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("dismissReminderDescriptionField")
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        a.default.createElement(o.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderToggleEthSignControl() {
                    const { t: e, trackEvent: t } = this.context,
                      { disabledRpcMethodPreferences: n, showEthSignModal: r, setDisabledRpcMethodPreference: i } = this.props;
                    return a.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[9],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-toggle-ethsign",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("toggleEthSignField")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("toggleEthSignDescriptionField")
                        )
                      ),
                      null != n && n.eth_sign
                        ? a.default.createElement(
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
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        a.default.createElement(o.default, {
                          className: "eth-sign-toggle",
                          value: (null == n ? void 0 : n.eth_sign) || !1,
                          onToggle: (e) => {
                            e
                              ? ((e) => {
                                  i("eth_sign", !e),
                                    t({
                                      category: h.MetaMetricsEventCategory.Settings,
                                      event: h.MetaMetricsEventName.OnboardingWalletAdvancedSettings,
                                      properties: { location: "Settings", enable_eth_sign: !1 }
                                    });
                                })(e)
                              : r();
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
                        autoLockTimeLimit: _.DEFAULT_AUTO_LOCK_TIME_LIMIT.toString(),
                        lockTimeError: ""
                      });
                    const n = Number(e);
                    if (Number.isNaN(n) || n < 0 || n > 10080)
                      return void this.setState({
                        autoLockTimeLimitBeforeNormalization: e,
                        autoLockTimeLimit: null,
                        lockTimeError: t("lockTimeInvalid")
                      });
                    const a = n;
                    this.setState({ autoLockTimeLimitBeforeNormalization: e, autoLockTimeLimit: a, lockTimeError: "" });
                  }
                  renderUserDataBackup() {
                    const { t: e } = this.context;
                    return a.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[10],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-data-backup",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("backupUserData")),
                        a.default.createElement("span", { className: "settings-page__content-description" }, e("backupUserDataDescription"))
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(
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
                      { showResultMessage: t, restoreSuccessful: n, restoreMessage: r } = this.state,
                      o = e(n ? "restoreSuccessful" : "restoreFailed"),
                      i = r === T ? e("dataBackupSeemsCorrupt") : o;
                    return a.default.createElement(
                      s.Box,
                      {
                        ref: this.settingsRefs[11],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-data-restore",
                        display: d.Display.Flex,
                        flexDirection: d.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("restoreUserData")),
                        a.default.createElement(
                          "span",
                          { className: "settings-page__content-description" },
                          e("restoreUserDataDescription")
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(
                            "label",
                            {
                              htmlFor: "restore-file",
                              className: "button btn btn--rounded btn-secondary btn--large settings-page__button"
                            },
                            e("restore")
                          ),
                          a.default.createElement("input", {
                            id: "restore-file",
                            "data-testid": "restore-file",
                            style: { visibility: "hidden" },
                            type: "file",
                            accept: ".json",
                            onChange: (e) => this.handleFileUpload(e)
                          })
                        ),
                        t &&
                          a.default.createElement(s.BannerAlert, {
                            severity: n ? s.BannerAlertSeverity.Success : s.BannerAlertSeverity.Danger,
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
                    const { warning: e } = this.props,
                      t = (0, p.getPlatform)() !== f.PLATFORM_FIREFOX;
                    return a.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      e ? a.default.createElement("div", { className: "settings-tab__error" }, e) : null,
                      this.renderStateLogs(),
                      this.renderResetAccount(),
                      this.renderHexDataOptIn(),
                      this.renderShowConversionInTestnets(),
                      this.renderToggleTestNetworks(),
                      this.renderUseNonceOptIn(),
                      this.renderAutoLockTimeLimit(),
                      this.renderUserDataBackup(),
                      this.renderRestoreUserData(),
                      t ? this.renderLedgerLiveControl() : null,
                      this.renderDismissSeedBackupReminderControl(),
                      this.renderToggleEthSignControl()
                    );
                  }
                }
                (n.default = k),
                  w(k, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  w(k, "propTypes", {
                    setUseNonceField: r.default.func,
                    useNonceField: r.default.bool,
                    setHexDataFeatureFlag: r.default.func,
                    displayWarning: r.default.func,
                    showResetAccountConfirmationModal: r.default.func,
                    showEthSignModal: r.default.func,
                    warning: r.default.string,
                    sendHexData: r.default.bool,
                    showFiatInTestnets: r.default.bool,
                    showTestNetworks: r.default.bool,
                    autoLockTimeLimit: r.default.number,
                    setAutoLockTimeLimit: r.default.func.isRequired,
                    setShowFiatConversionOnTestnetsPreference: r.default.func.isRequired,
                    setShowTestNetworks: r.default.func.isRequired,
                    ledgerTransportType: r.default.oneOf(Object.values(g.LedgerTransportTypes)),
                    setLedgerTransportPreference: r.default.func.isRequired,
                    setDismissSeedBackUpReminder: r.default.func.isRequired,
                    dismissSeedBackUpReminder: r.default.bool.isRequired,
                    userHasALedgerAccount: r.default.bool.isRequired,
                    backupUserData: r.default.func.isRequired,
                    restoreUserData: r.default.func.isRequired,
                    setDisabledRpcMethodPreference: r.default.func.isRequired,
                    disabledRpcMethodPreferences: r.default.shape({ eth_sign: r.default.bool.isRequired })
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/advanced-tab/advanced-tab.component.js" }
    ],
    [
      5813,
      {
        "../../../../shared/constants/preferences": 4761,
        "../../../ducks/metamask/metamask": 5529,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./advanced-tab.component": 5812,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.mapStateToProps = n.mapDispatchToProps = n.default = void 0);
                var a,
                  r = e("redux"),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c = e("../../../ducks/metamask/metamask"),
                  u = e("../../../../shared/constants/preferences"),
                  d = (a = e("./advanced-tab.component")) && a.__esModule ? a : { default: a };
                const p = (e) => {
                  const {
                      appState: { warning: t },
                      metamask: n
                    } = e,
                    {
                      featureFlags: { sendHexData: a } = {},
                      disabledRpcMethodPreferences: r,
                      useNonceField: s,
                      ledgerTransportType: o,
                      dismissSeedBackUpReminder: i
                    } = n,
                    {
                      showFiatInTestnets: d,
                      showTestNetworks: p,
                      autoLockTimeLimit: f = u.DEFAULT_AUTO_LOCK_TIME_LIMIT
                    } = (0, l.getPreferences)(e);
                  return {
                    warning: t,
                    sendHexData: a,
                    showFiatInTestnets: d,
                    showTestNetworks: p,
                    autoLockTimeLimit: f,
                    useNonceField: s,
                    ledgerTransportType: o,
                    dismissSeedBackUpReminder: i,
                    userHasALedgerAccount: (0, c.doesUserHaveALedgerAccount)(e),
                    disabledRpcMethodPreferences: r
                  };
                };
                n.mapStateToProps = p;
                const f = (e) => ({
                  backupUserData: () => (0, i.backupUserData)(),
                  restoreUserData: (e) => (0, i.restoreUserData)(e),
                  setHexDataFeatureFlag: (t) => e((0, i.setFeatureFlag)("sendHexData", t)),
                  displayWarning: (t) => e((0, i.displayWarning)(t)),
                  showResetAccountConfirmationModal: () => e((0, i.showModal)({ name: "CONFIRM_RESET_ACCOUNT" })),
                  showEthSignModal: () => e((0, i.showModal)({ name: "ETH_SIGN" })),
                  setUseNonceField: (t) => e((0, i.setUseNonceField)(t)),
                  setShowFiatConversionOnTestnetsPreference: (t) => e((0, i.setShowFiatConversionOnTestnetsPreference)(t)),
                  setShowTestNetworks: (t) => e((0, i.setShowTestNetworks)(t)),
                  setAutoLockTimeLimit: (t) => e((0, i.setAutoLockTimeLimit)(t)),
                  setLedgerTransportPreference: (t) => e((0, i.setLedgerTransportPreference)(t)),
                  setDismissSeedBackUpReminder: (t) => e((0, i.setDismissSeedBackUpReminder)(t)),
                  setDisabledRpcMethodPreference: (t, n) => e((0, i.setDisabledRpcMethodPreference)(t, n))
                });
                n.mapDispatchToProps = f;
                n.default = (0, r.compose)(o.withRouter, (0, s.connect)(p, f))(d.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/advanced-tab/advanced-tab.container.js" }
    ],
    [
      5814,
      { "./advanced-tab.container": 5813 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./advanced-tab.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/advanced-tab/index.js" }
    ],
    [
      5815,
      {
        "../../../../shared/constants/alerts": 4748,
        "../../../components/component-library": 5242,
        "../../../components/ui/toggle-button": 5495,
        "../../../components/ui/tooltip": 5502,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/utils/settings-search": 5574,
        "../../../hooks/useI18nContext": 5602,
        "../../../store/actions": 5965,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = m(e("prop-types")),
                  s = e("react-redux"),
                  o = e("../../../../shared/constants/alerts"),
                  i = m(e("../../../components/ui/tooltip")),
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
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const h = ({ alertId: e, description: t, title: n }) => {
                  const r = (0, d.useI18nContext)(),
                    o = (0, a.useRef)();
                  (0, a.useEffect)(() => {
                    (0, p.handleSettingsRefs)(r, r("alerts"), o);
                  }, [o, r]);
                  const m = (0, s.useSelector)((t) => (0, u.getAlertEnabledness)(t)[e]);
                  return a.default.createElement(
                    a.default.Fragment,
                    null,
                    a.default.createElement(
                      "div",
                      { ref: o, className: "alerts-tab__item" },
                      a.default.createElement("span", null, n),
                      a.default.createElement(
                        "div",
                        { className: "alerts-tab__description-container" },
                        a.default.createElement(
                          i.default,
                          { position: "top", title: t, wrapperClassName: "alerts-tab__description" },
                          a.default.createElement(f.Icon, { name: f.IconName.Info, className: "alerts-tab__description__icon" })
                        ),
                        a.default.createElement(l.default, {
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
                n.default = () => {
                  const e = (0, d.useI18nContext)(),
                    t = {
                      [o.AlertTypes.unconnectedAccount]: {
                        title: e("alertSettingsUnconnectedAccount"),
                        description: e("alertSettingsUnconnectedAccountDescription")
                      },
                      [o.AlertTypes.web3ShimUsage]: {
                        title: e("alertSettingsWeb3ShimUsage"),
                        description: e("alertSettingsWeb3ShimUsageDescription")
                      }
                    };
                  return a.default.createElement(
                    "div",
                    { className: "alerts-tab__body" },
                    Object.entries(t).map(([e, { title: t, description: n }], r) =>
                      a.default.createElement(h, { alertId: e, description: n, key: e, title: t })
                    )
                  );
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/alerts-tab/alerts-tab.js" }
    ],
    [
      5816,
      { "./alerts-tab": 5815 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./alerts-tab")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/alerts-tab/index.js" }
    ],
    [
      5817,
      {
        "../../../../../shared/modules/hexstring-utils": 4788,
        "../../../../components/ui/identicon": 5430,
        "../../../../components/ui/page-container/page-container-footer": 5460,
        "../../../../components/ui/text-field": 5491,
        "../../../../helpers/constants/routes": 5542,
        "../../../../helpers/utils/util": 5578,
        "../../../send/send-content/add-recipient/domain-input": 5780,
        "../../../send/send.constants": 5809,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = m(e("prop-types")),
                  s = e("lodash"),
                  o = m(e("../../../../components/ui/identicon")),
                  i = m(e("../../../../components/ui/text-field")),
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
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function h(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class _ extends a.PureComponent {
                  constructor(e) {
                    super(e),
                      h(this, "state", { newName: "", ethAddress: "", error: "", input: "" }),
                      h(this, "validate", (e) => {
                        const t = !(0, p.isBurnAddress)(e) && (0, p.isValidHexAddress)(e, { mixedCaseUseChecksum: !0 }),
                          n = (0, c.isValidDomainName)(e);
                        t || n || "" === e
                          ? this.setState({ error: "", ethAddress: e })
                          : this.setState({ error: f.INVALID_RECIPIENT_ADDRESS_ERROR });
                      }),
                      h(this, "onChange", (e) => {
                        this.setState({ input: e }), this.dValidate(e);
                      }),
                      (this.dValidate = (0, s.debounce)(this.validate, 500));
                  }
                  UNSAFE_componentWillReceiveProps(e) {
                    if (e.qrCodeData && "address" === e.qrCodeData.type) {
                      const { domainResolution: t } = this.props,
                        n = e.qrCodeData.values.address.toLowerCase();
                      (t || this.state.ethAddress).toLowerCase() !== n &&
                        (this.setState({ input: n }), this.validate(n), this.props.qrCodeDetected(null));
                    }
                  }
                  renderInput() {
                    return a.default.createElement(u.default, {
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
                      { history: t, addToAddressBook: n, domainError: r, domainResolution: s } = this.props,
                      c = r || this.state.error;
                    return a.default.createElement(
                      "div",
                      { className: "settings-page__content-row address-book__add-contact" },
                      s &&
                        a.default.createElement(
                          "div",
                          { className: "address-book__view-contact__group" },
                          a.default.createElement(o.default, { address: s, diameter: 60 }),
                          a.default.createElement("div", { className: "address-book__view-contact__group__value" }, s)
                        ),
                      a.default.createElement(
                        "div",
                        { className: "address-book__add-contact__content" },
                        a.default.createElement(
                          "div",
                          { className: "address-book__view-contact__group address-book__add-contact__content__username" },
                          a.default.createElement("div", { className: "address-book__view-contact__group__label" }, e("userName")),
                          a.default.createElement(i.default, {
                            type: "text",
                            id: "nickname",
                            value: this.state.newName,
                            onChange: (e) => this.setState({ newName: e.target.value }),
                            fullWidth: !0,
                            margin: "dense"
                          })
                        ),
                        a.default.createElement(
                          "div",
                          { className: "address-book__view-contact__group" },
                          a.default.createElement(
                            "div",
                            { className: "address-book__view-contact__group__label" },
                            e("ethereumPublicAddress")
                          ),
                          this.renderInput(),
                          c && a.default.createElement("div", { className: "address-book__add-contact__error" }, e(c))
                        )
                      ),
                      a.default.createElement(d.default, {
                        cancelText: this.context.t("cancel"),
                        disabled: Boolean(this.state.error || !this.state.ethAddress || !this.state.newName.trim()),
                        onSubmit: async () => {
                          await n(s || this.state.ethAddress, this.state.newName), t.push(l.CONTACT_LIST_ROUTE);
                        },
                        onCancel: () => {
                          t.push(l.CONTACT_LIST_ROUTE);
                        },
                        submitText: this.context.t("save")
                      })
                    );
                  }
                }
                (n.default = _),
                  h(_, "contextTypes", { t: r.default.func }),
                  h(_, "propTypes", {
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
      5818,
      {
        "../../../../ducks/app/app": 5521,
        "../../../../ducks/domains": 5523,
        "../../../../store/actions": 5965,
        "./add-contact.component": 5817,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("redux"),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../../../store/actions"),
                  l = e("../../../../ducks/app/app"),
                  c = e("../../../../ducks/domains"),
                  u = (a = e("./add-contact.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.compose)(
                  o.withRouter,
                  (0, s.connect)(
                    (e) => ({
                      qrCodeData: (0, l.getQrCodeData)(e),
                      domainError: (0, c.getDomainError)(e),
                      domainResolution: (0, c.getDomainResolution)(e)
                    }),
                    (e) => ({
                      addToAddressBook: (t, n) => e((0, i.addToAddressBook)(t, n)),
                      scanQrCode: () => e((0, i.showQrScanner)()),
                      qrCodeDetected: (t) => e((0, i.qrCodeDetected)(t)),
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
      5819,
      { "./add-contact.container": 5818 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./add-contact.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/add-contact/index.js" }
    ],
    [
      5820,
      {
        "../../../components/app/contact-list": 4888,
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/settings-search": 5574,
        "./add-contact": 5819,
        "./edit-contact": 5824,
        "./view-contact": 5826,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = g(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = m(e("prop-types")),
                  s = m(e("classnames")),
                  o = m(e("../../../components/app/contact-list")),
                  i = e("../../../helpers/constants/routes"),
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
                    n = new WeakMap();
                  return (g = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function h(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class _ extends a.Component {
                  constructor(...e) {
                    super(...e),
                      h(
                        this,
                        "settingsRefs",
                        Array((0, l.getNumberOfSettingsInSection)(this.context.t, this.context.t("contacts")))
                          .fill(undefined)
                          .map(() => a.default.createRef())
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
                    const { addressBook: e, history: t, selectedAddress: n } = this.props,
                      r = e.filter(({ name: e }) => Boolean(e)),
                      s = e.filter(({ name: e }) => !e),
                      { t: l } = this.context;
                    return e.length
                      ? a.default.createElement(
                          "div",
                          null,
                          a.default.createElement(o.default, {
                            searchForContacts: () => r,
                            searchForRecents: () => s,
                            selectRecipient: (e) => {
                              t.push(`${i.CONTACT_VIEW_ROUTE}/${e}`);
                            },
                            selectedAddress: n
                          })
                        )
                      : a.default.createElement(
                          "div",
                          { className: "address-book__container" },
                          a.default.createElement(
                            "div",
                            null,
                            a.default.createElement(c.Icon, {
                              name: c.IconName.Book,
                              color: u.IconColor.iconMuted,
                              className: "address-book__icon",
                              size: c.IconSize.Xl
                            }),
                            a.default.createElement("h4", { className: "address-book__title" }, l("buildContactList")),
                            a.default.createElement("p", { className: "address-book__sub-title" }, l("addFriendsAndAddresses")),
                            a.default.createElement(
                              "button",
                              {
                                className: "address-book__link",
                                onClick: () => {
                                  t.push(i.CONTACT_ADD_ROUTE);
                                }
                              },
                              "+ ",
                              l("addContact")
                            )
                          )
                        );
                  }
                  renderAddButton() {
                    const { history: e, viewingContact: t, editingContact: n } = this.props;
                    return a.default.createElement(
                      c.ButtonPrimary,
                      {
                        className: (0, s.default)("address-book-add-button__button", { "address-book-add-button__button--hidden": t || n }),
                        onClick: () => {
                          e.push(i.CONTACT_ADD_ROUTE);
                        },
                        margin: 4,
                        size: u.Size.LG
                      },
                      this.context.t("addContact")
                    );
                  }
                  renderContactContent() {
                    const { viewingContact: e, editingContact: t, addingContact: n } = this.props;
                    let r = null;
                    return (
                      e ? (r = f.default) : t ? (r = d.default) : n && (r = p.default),
                      r && a.default.createElement("div", { className: "address-book-contact-content" }, a.default.createElement(r, null))
                    );
                  }
                  renderAddressBookContent() {
                    const { hideAddressBook: e } = this.props;
                    return e
                      ? null
                      : a.default.createElement("div", { ref: this.settingsRefs[0], className: "address-book" }, this.renderAddresses());
                  }
                  render() {
                    const { addingContact: e, addressBook: t, currentPath: n } = this.props;
                    return a.default.createElement(
                      "div",
                      { className: "address-book-wrapper" },
                      this.renderAddressBookContent(),
                      this.renderContactContent(),
                      n === i.CONTACT_LIST_ROUTE && !e && t.length > 0 ? this.renderAddButton() : null
                    );
                  }
                }
                (n.default = _),
                  h(_, "contextTypes", { t: r.default.func }),
                  h(_, "propTypes", {
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
      5821,
      {
        "../../../helpers/constants/routes": 5542,
        "../../../selectors": 5958,
        "./contact-list-tab.component": 5820,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("redux"),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../../selectors"),
                  l = e("../../../helpers/constants/routes"),
                  c = (a = e("./contact-list-tab.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.compose)(
                  o.withRouter,
                  (0, s.connect)((e, t) => {
                    const { location: n } = t,
                      { pathname: a } = n,
                      r = a.match(/[^/]+$/u)[0],
                      s = r.includes("0x"),
                      o = Boolean(a.match(l.CONTACT_VIEW_ROUTE)),
                      c = Boolean(a.match(l.CONTACT_EDIT_ROUTE)),
                      u = Boolean(a.match(l.CONTACT_ADD_ROUTE)),
                      d = o || c || u;
                    return {
                      viewingContact: o,
                      editingContact: c,
                      addingContact: u,
                      addressBook: (0, i.getAddressBook)(e),
                      selectedAddress: s ? r : "",
                      hideAddressBook: d,
                      currentPath: a
                    };
                  })
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/contact-list-tab.container.js" }
    ],
    [
      5822,
      {
        "../../../../../shared/modules/hexstring-utils": 4788,
        "../../../../components/component-library": 5242,
        "../../../../components/ui/button/button.component": 5376,
        "../../../../components/ui/page-container/page-container-footer": 5460,
        "../../../../components/ui/text-field": 5491,
        "../../../../helpers/constants/design-system": 5537,
        "prop-types": 4219,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = p(e("prop-types")),
                  s = e("react-router-dom"),
                  o = p(e("../../../../components/ui/button/button.component")),
                  i = p(e("../../../../components/ui/text-field")),
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
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class g extends a.PureComponent {
                  constructor(...e) {
                    super(...e),
                      m(this, "state", { newName: this.props.name, newAddress: this.props.address, newMemo: this.props.memo, error: "" });
                  }
                  render() {
                    const { t: e } = this.context,
                      {
                        address: t,
                        addToAddressBook: n,
                        chainId: r,
                        history: p,
                        listRoute: f,
                        memo: m,
                        name: g,
                        removeFromAddressBook: h,
                        viewRoute: _
                      } = this.props;
                    return t
                      ? a.default.createElement(
                          "div",
                          { className: "settings-page__content-row address-book__edit-contact" },
                          a.default.createElement(
                            u.Box,
                            { className: "settings-page__header address-book__header--edit", paddingLeft: 6, paddingRight: 6 },
                            a.default.createElement(
                              u.Box,
                              { display: d.Display.Flex, alignItems: d.AlignItems.center },
                              a.default.createElement(u.AvatarAccount, { size: u.AvatarAccountSize.Lg, address: t }),
                              a.default.createElement(
                                u.Text,
                                { className: "address-book__header__name", variant: d.TextVariant.bodyLgMedium, marginInlineStart: 4 },
                                g || t
                              )
                            ),
                            a.default.createElement(
                              o.default,
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
                          a.default.createElement(
                            "div",
                            { className: "address-book__edit-contact__content" },
                            a.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group" },
                              a.default.createElement("div", { className: "address-book__view-contact__group__label" }, e("userName")),
                              a.default.createElement(i.default, {
                                type: "text",
                                id: "nickname",
                                placeholder: this.context.t("addAlias"),
                                value: this.state.newName,
                                onChange: (e) => this.setState({ newName: e.target.value }),
                                fullWidth: !0,
                                margin: "dense"
                              })
                            ),
                            a.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group" },
                              a.default.createElement(
                                "div",
                                { className: "address-book__view-contact__group__label" },
                                e("ethereumPublicAddress")
                              ),
                              a.default.createElement(i.default, {
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
                            a.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group" },
                              a.default.createElement(
                                "div",
                                { className: "address-book__view-contact__group__label--capitalized" },
                                e("memo")
                              ),
                              a.default.createElement(i.default, {
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
                          a.default.createElement(l.default, {
                            cancelText: this.context.t("cancel"),
                            onSubmit: async () => {
                              "" !== this.state.newAddress && this.state.newAddress !== t
                                ? !(0, c.isBurnAddress)(this.state.newAddress) &&
                                  (0, c.isValidHexAddress)(this.state.newAddress, { mixedCaseUseChecksum: !0 })
                                  ? (await h(r, t),
                                    await n(this.state.newAddress, this.state.newName || g, this.state.newMemo || m),
                                    p.push(f))
                                  : this.setState({ error: this.context.t("invalidAddress") })
                                : (await n(t, this.state.newName || g, this.state.newMemo || m), p.push(f));
                            },
                            onCancel: () => {
                              p.push(`${_}/${t}`);
                            },
                            submitText: this.context.t("save"),
                            disabled:
                              (this.state.newName === g && this.state.newAddress === t && this.state.newMemo === m) ||
                              !this.state.newName.trim()
                          })
                        )
                      : a.default.createElement(s.Redirect, { to: { pathname: f } });
                  }
                }
                (n.default = g),
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
      5823,
      {
        "../../../../ducks/metamask/metamask": 5529,
        "../../../../helpers/constants/routes": 5542,
        "../../../../selectors": 5958,
        "../../../../store/actions": 5965,
        "./edit-contact.component": 5822,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("redux"),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../../../selectors"),
                  l = e("../../../../ducks/metamask/metamask"),
                  c = e("../../../../helpers/constants/routes"),
                  u = e("../../../../store/actions"),
                  d = (a = e("./edit-contact.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.compose)(
                  o.withRouter,
                  (0, s.connect)(
                    (e, t) => {
                      const { location: n } = t,
                        { pathname: a } = n,
                        r = a.match(/[^/]+$/u)[0],
                        s = r.includes("0x") ? r.toLowerCase() : t.match.params.id,
                        o = (0, i.getAddressBookEntry)(e, s) || e.metamask.identities[s],
                        { memo: u, name: d } = o || {},
                        { chainId: p } = (0, l.getProviderConfig)(e);
                      return {
                        address: o ? s : null,
                        chainId: p,
                        name: d,
                        memo: u,
                        viewRoute: c.CONTACT_VIEW_ROUTE,
                        listRoute: c.CONTACT_LIST_ROUTE
                      };
                    },
                    (e) => ({
                      addToAddressBook: (t, n, a) => e((0, u.addToAddressBook)(t, n, a)),
                      removeFromAddressBook: (t, n) => e((0, u.removeFromAddressBook)(t, n))
                    })
                  )
                )(d.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/edit-contact/edit-contact.container.js" }
    ],
    [
      5824,
      { "./edit-contact.container": 5823 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./edit-contact.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/edit-contact/index.js" }
    ],
    [
      5825,
      { "./contact-list-tab.container": 5821 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./contact-list-tab.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/index.js" }
    ],
    [
      5826,
      { "./view-contact.container": 5828 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./view-contact.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/view-contact/index.js" }
    ],
    [
      5827,
      {
        "../../../../components/component-library": 5242,
        "../../../../components/ui/button/button.component": 5376,
        "../../../../components/ui/tooltip": 5502,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../hooks/useCopyToClipboard": 5595,
        "../../../../hooks/useI18nContext": 5602,
        "prop-types": 4219,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = p(e("react")),
                  r = p(e("prop-types")),
                  s = e("react-router-dom"),
                  o = p(e("../../../../components/ui/button/button.component")),
                  i = e("../../../../components/component-library"),
                  l = p(e("../../../../components/ui/tooltip")),
                  c = e("../../../../hooks/useI18nContext"),
                  u = e("../../../../hooks/useCopyToClipboard"),
                  d = e("../../../../helpers/constants/design-system");
                function p(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function f({ history: e, name: t, address: n, checkSummedAddress: r, memo: p, editRoute: f, listRoute: m }) {
                  const g = (0, c.useI18nContext)(),
                    [h, _] = (0, u.useCopyToClipboard)();
                  return n
                    ? a.default.createElement(
                        "div",
                        { className: "settings-page__content-row" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          a.default.createElement(
                            i.Box,
                            { className: "settings-page__header address-book__header", paddingLeft: 6 },
                            a.default.createElement(i.AvatarAccount, { size: i.AvatarAccountSize.Lg, address: n }),
                            a.default.createElement(
                              i.Text,
                              { className: "address-book__header__name", variant: d.TextVariant.bodyLgMedium, marginInlineStart: 4 },
                              t || n
                            )
                          ),
                          a.default.createElement(
                            "div",
                            { className: "address-book__view-contact__group" },
                            a.default.createElement(
                              o.default,
                              {
                                type: "secondary",
                                onClick: () => {
                                  e.push(`${f}/${n}`);
                                }
                              },
                              g("edit")
                            )
                          ),
                          a.default.createElement(
                            "div",
                            { className: "address-book__view-contact__group" },
                            a.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group__label" },
                              g("ethereumPublicAddress")
                            ),
                            a.default.createElement(
                              "div",
                              { className: "address-book__view-contact__group__value" },
                              a.default.createElement(
                                "div",
                                { className: "address-book__view-contact__group__static-address" },
                                (function (e) {
                                  return `0x${e
                                    .slice(2)
                                    .match(/.{1,4}/gu)
                                    .join("")}`;
                                })(r)
                              ),
                              a.default.createElement(
                                l.default,
                                { position: "bottom", title: g(h ? "copiedExclamation" : "copyToClipboard") },
                                a.default.createElement(i.ButtonIcon, {
                                  ariaLabel: "copy",
                                  className: "address-book__view-contact__group__static-address--copy-icon",
                                  onClick: () => {
                                    _(r);
                                  },
                                  iconName: h ? i.IconName.CopySuccess : i.IconName.Copy,
                                  size: i.ButtonIconSize.Lg,
                                  color: d.IconColor.primaryDefault
                                })
                              )
                            )
                          ),
                          p.length > 0
                            ? a.default.createElement(
                                "div",
                                { className: "address-book__view-contact__group" },
                                a.default.createElement(
                                  "div",
                                  { className: "address-book__view-contact__group__label--capitalized" },
                                  g("memo")
                                ),
                                a.default.createElement("div", { className: "address-book__view-contact__group__static-address" }, p)
                              )
                            : null
                        )
                      )
                    : a.default.createElement(s.Redirect, { to: { pathname: m } });
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
                n.default = a.default.memo(f);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/contact-list-tab/view-contact/view-contact.component.js" }
    ],
    [
      5828,
      {
        "../../../../../shared/modules/hexstring-utils": 4788,
        "../../../../helpers/constants/routes": 5542,
        "../../../../selectors": 5958,
        "./view-contact.component": 5827,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("redux"),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../../../selectors"),
                  l = e("../../../../helpers/constants/routes"),
                  c = e("../../../../../shared/modules/hexstring-utils"),
                  u = (a = e("./view-contact.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.compose)(
                  o.withRouter,
                  (0, s.connect)((e, t) => {
                    const { location: n } = t,
                      { pathname: a } = n,
                      r = a.match(/[^/]+$/u)[0],
                      s = r.includes("0x") ? r.toLowerCase() : t.match.params.id,
                      o = (0, i.getAddressBookEntry)(e, s) || e.metamask.identities[s],
                      { memo: u, name: d } = o || {};
                    return {
                      name: d,
                      address: o ? s : null,
                      checkSummedAddress: (0, c.toChecksumHexAddress)(s),
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
      5829,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/lib/ui-utils": 4779,
        "../../../components/component-library": 5242,
        "../../../components/ui/toggle-button": 5495,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/settings-search": 5574,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = d(e("prop-types")),
                  s = d(e("../../../components/ui/toggle-button")),
                  o = e("../../../helpers/utils/settings-search"),
                  i = e("../../../../shared/constants/metametrics"),
                  l = e("../../../components/component-library"),
                  c = e("../../../helpers/constants/design-system"),
                  u = e("../../../../shared/lib/ui-utils");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class m extends a.PureComponent {
                  constructor(...e) {
                    super(...e),
                      f(
                        this,
                        "settingsRefs",
                        Array((0, o.getNumberOfSettingsInSection)(this.context.t, this.context.t("experimental")))
                          .fill(undefined)
                          .map(() => a.default.createRef())
                      );
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, o.handleSettingsRefs)(e, e("experimental"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, o.handleSettingsRefs)(e, e("experimental"), this.settingsRefs);
                  }
                  toggleSecurityAlert(e) {
                    const t = !e,
                      { setSecurityAlertsEnabled: n, transactionSecurityCheckEnabled: a } = this.props;
                    this.context.trackEvent({
                      category: i.MetaMetricsEventCategory.Settings,
                      event: i.MetaMetricsEventName.SettingsUpdated,
                      properties: { blockaid_alerts_enabled: t }
                    }),
                      n(t),
                      t && a && this.toggleTransactionSecurityCheck(!0);
                  }
                  toggleTransactionSecurityCheck(e) {
                    const t = !e,
                      { securityAlertsEnabled: n, setTransactionSecurityCheckEnabled: a } = this.props;
                    this.context.trackEvent({
                      category: i.MetaMetricsEventCategory.Settings,
                      event: i.MetaMetricsEventName.SettingsUpdated,
                      properties: { opensea_alerts_enabled: t }
                    }),
                      a(t),
                      t && n && this.toggleSecurityAlert && this.toggleSecurityAlert(!0);
                  }
                  renderSecurityAlertsToggle() {
                    const { t: e } = this.context,
                      { securityAlertsEnabled: t, transactionSecurityCheckEnabled: n } = this.props;
                    return a.default.createElement(
                      a.default.Fragment,
                      null,
                      a.default.createElement(
                        l.Text,
                        { variant: c.TextVariant.headingSm, color: c.TextColor.textAlternative, marginBottom: 2 },
                        e("security")
                      ),
                      a.default.createElement(
                        "div",
                        { ref: this.settingsRefs[1], className: "settings-page__content-row settings-page__content-row-experimental" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          a.default.createElement(
                            l.Text,
                            { variant: c.TextVariant.inherit, color: c.TextColor.textAlternative },
                            e("securityAlerts")
                          ),
                          a.default.createElement(
                            "div",
                            { className: "settings-page__content-description" },
                            a.default.createElement(l.Text, { variant: c.TextVariant.bodySm }, e("securityAlertsDescription")),
                            a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement(
                                l.Text,
                                { variant: c.TextVariant.bodySmBold, color: c.TextColor.textAlternative, marginTop: 4 },
                                e("preferredProvider")
                              ),
                              a.default.createElement(
                                "div",
                                {
                                  "data-testid": "settings-toggle-security-alert-blockaid",
                                  className: "settings-page__content-item-col settings-page__content-item-col__security-toggle-option"
                                },
                                a.default.createElement(
                                  "div",
                                  null,
                                  a.default.createElement(
                                    l.Box,
                                    { display: c.Display.Flex },
                                    a.default.createElement(
                                      l.Text,
                                      { variant: c.TextVariant.bodyMd, color: c.TextColor.textDefault },
                                      e("blockaid")
                                    ),
                                    a.default.createElement(l.Tag, { marginLeft: 2, label: "Recommended" })
                                  ),
                                  a.default.createElement(
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
                                a.default.createElement(s.default, { value: t, onToggle: this.toggleSecurityAlert.bind(this) })
                              )
                            ),
                            a.default.createElement(
                              "div",
                              { className: "settings-page__content-item-col settings-page__content-item-col__security-toggle-option" },
                              a.default.createElement(
                                "div",
                                null,
                                a.default.createElement(
                                  l.Box,
                                  { display: c.Display.Flex },
                                  a.default.createElement(
                                    l.Text,
                                    { variant: c.TextVariant.bodyMd, color: c.TextColor.textDefault },
                                    e("openSeaLabel")
                                  ),
                                  a.default.createElement(l.Tag, { marginLeft: 2, label: "Beta" })
                                ),
                                a.default.createElement(
                                  l.Text,
                                  {
                                    variant: c.TextVariant.bodySm,
                                    as: "h6",
                                    color: c.TextColor.textAlternative,
                                    marginTop: 0,
                                    marginRight: 1
                                  },
                                  e("openSeaMessage", [
                                    a.default.createElement(
                                      l.ButtonLink,
                                      { variant: "bodyMd", href: u.OPENSEA_TERMS_OF_USE, externalLink: !0, key: "opensea-terms-of-use" },
                                      e("terms")
                                    )
                                  ])
                                )
                              ),
                              a.default.createElement(s.default, { value: n, onToggle: this.toggleTransactionSecurityCheck.bind(this) })
                            )
                          )
                        )
                      )
                    );
                  }
                  render() {
                    return a.default.createElement("div", { className: "settings-page__body" }, this.renderSecurityAlertsToggle());
                  }
                }
                (n.default = m),
                  f(m, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  f(m, "propTypes", {
                    transactionSecurityCheckEnabled: r.default.bool,
                    setTransactionSecurityCheckEnabled: r.default.func,
                    securityAlertsEnabled: r.default.bool,
                    setSecurityAlertsEnabled: r.default.func
                  });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/experimental-tab/experimental-tab.component.js" }
    ],
    [
      5830,
      {
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./experimental-tab.component": 5829,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("redux"),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c = (a = e("./experimental-tab.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.compose)(
                  o.withRouter,
                  (0, s.connect)(
                    (e) => ({
                      transactionSecurityCheckEnabled: (0, l.getIsTransactionSecurityCheckEnabled)(e),
                      securityAlertsEnabled: (0, l.getIsSecurityAlertsEnabled)(e),
                      addSnapAccountEnabled: (0, l.getIsAddSnapAccountEnabled)(e)
                    }),
                    (e) => ({
                      setTransactionSecurityCheckEnabled: (t) => e((0, i.setTransactionSecurityCheckEnabled)(t)),
                      setSecurityAlertsEnabled: (e) => (0, i.setSecurityAlertsEnabled)(e),
                      setAddSnapAccountEnabled: (e) => (0, i.setAddSnapAccountEnabled)(e)
                    })
                  )
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/experimental-tab/experimental-tab.container.js" }
    ],
    [
      5831,
      { "./experimental-tab.container": 5830 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./experimental-tab.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/experimental-tab/index.js" }
    ],
    [
      5832,
      { "./settings.container": 5861 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./settings.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/index.js" }
    ],
    [
      5833,
      { "./info-tab.component": 5834 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./info-tab.component")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/info-tab/index.js" }
    ],
    [
      5834,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/lib/ui-utils": 4779,
        "../../../components/component-library": 5242,
        "../../../components/ui/button": 5377,
        "../../../helpers/constants/common": 5535,
        "../../../helpers/utils/build-types": 5558,
        "../../../helpers/utils/settings-search": 5574,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = p(e("prop-types")),
                  s = p(e("../../../components/ui/button")),
                  o = e("../../../components/component-library"),
                  i = e("../../../helpers/constants/common"),
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
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class g extends a.PureComponent {
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
                          .map(() => a.default.createRef())
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
                    let t, n;
                    return (
                      (t = "https://metamask.io/privacy.html"),
                      (n = "https://metamask.io/"),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item settings-page__content-item--without-height" },
                        a.default.createElement("div", { ref: this.settingsRefs[1], className: "info-tab__link-header" }, e("links")),
                        a.default.createElement(
                          "div",
                          { ref: this.settingsRefs[2], className: "info-tab__link-item" },
                          a.default.createElement(
                            s.default,
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
                        a.default.createElement(
                          "div",
                          { ref: this.settingsRefs[3], className: "info-tab__link-item" },
                          a.default.createElement(
                            s.default,
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
                          ? a.default.createElement(
                              "div",
                              { ref: this.settingsRefs[8], className: "info-tab__link-item" },
                              a.default.createElement(
                                s.default,
                                {
                                  type: "link",
                                  href: "https://metamask.io/beta-terms.html",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "info-tab__link-text"
                                },
                                e("betaTerms"),
                                a.default.createElement(o.Tag, { label: e("new"), className: "info-tab__tag" })
                              )
                            )
                          : null,
                        a.default.createElement(
                          "div",
                          { ref: this.settingsRefs[4], className: "info-tab__link-item" },
                          a.default.createElement(
                            s.default,
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
                        a.default.createElement("hr", { className: "info-tab__separator" }),
                        a.default.createElement(
                          "div",
                          { ref: this.settingsRefs[5], className: "info-tab__link-item" },
                          a.default.createElement(
                            s.default,
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
                        a.default.createElement(
                          "div",
                          { ref: this.settingsRefs[6], className: "info-tab__link-item" },
                          a.default.createElement(
                            s.default,
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
                        a.default.createElement(
                          "div",
                          { ref: this.settingsRefs[7], className: "info-tab__link-item" },
                          a.default.createElement(
                            s.default,
                            {
                              type: "link",
                              href: i.SUPPORT_REQUEST_LINK,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "info-tab__link-text",
                              onClick: () => {
                                this.context.trackEvent(
                                  {
                                    category: u.MetaMetricsEventCategory.Settings,
                                    event: u.MetaMetricsEventName.SupportLinkClicked,
                                    properties: { url: i.SUPPORT_REQUEST_LINK }
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
                    return a.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-row" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item settings-page__content-item--without-height" },
                          a.default.createElement(
                            "div",
                            { className: "info-tab__item" },
                            a.default.createElement(
                              "div",
                              { ref: this.settingsRefs[0], className: "info-tab__version-header" },
                              (0, l.isBeta)() ? e("betaMetamaskVersion") : e("metamaskVersion")
                            ),
                            a.default.createElement("div", { className: "info-tab__version-number" }, this.state.version)
                          ),
                          a.default.createElement(
                            "div",
                            { className: "info-tab__item" },
                            a.default.createElement("div", { className: "info-tab__about" }, e("builtAroundTheWorld"))
                          )
                        ),
                        this.renderInfoLinks()
                      ),
                      a.default.createElement(
                        "div",
                        { className: "info-tab__logo-wrapper" },
                        a.default.createElement("img", {
                          src: "./images/logo/metamask-fox.svg",
                          className: "info-tab__logo",
                          alt: "MetaMask Logo"
                        })
                      )
                    );
                  }
                }
                (n.default = g), m(g, "contextTypes", { t: r.default.func, trackEvent: r.default.func });
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/info-tab/info-tab.component.js" }
    ],
    [
      5835,
      {
        "../../../../components/component-library": 5242,
        "../../../../components/ui/icon/search-icon": 5424,
        "../../../../components/ui/text-field": 5491,
        "../../../../contexts/i18n": 5514,
        "@material-ui/core/InputAdornment": 707,
        "fuse.js": 3582,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = f);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = d(e("prop-types")),
                  s = d(e("fuse.js")),
                  o = d(e("@material-ui/core/InputAdornment")),
                  i = d(e("../../../../components/ui/text-field")),
                  l = e("../../../../contexts/i18n"),
                  c = d(e("../../../../components/ui/icon/search-icon")),
                  u = e("../../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function f({ onSearch: e, error: t, networksList: n, searchQueryInput: r }) {
                  const d = (0, a.useContext)(l.I18nContext),
                    [p, f] = (0, a.useState)("var(--color-icon-muted)"),
                    m = Object.values(n),
                    g = new s.default(m, {
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
                      const n = g.search(t),
                        a = t ? [...n] : m;
                      await e({ searchQuery: t, results: a });
                    };
                  return a.default.createElement(i.default, {
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
                    startAdornment: a.default.createElement(
                      o.default,
                      { position: "start" },
                      a.default.createElement(c.default, { color: p })
                    ),
                    endAdornment: a.default.createElement(
                      a.default.Fragment,
                      null,
                      r &&
                        a.default.createElement(
                          o.default,
                          { className: "imageclosectn", position: "end", onClick: () => h("") },
                          a.default.createElement(u.Icon, { name: u.IconName.Close, className: "networks-tab__imageclose" })
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
      5836,
      { "./custom-content-search": 5835 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./custom-content-search")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/custom-content-search/index.js" }
    ],
    [
      5837,
      { "./networks-tab": 5849 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./networks-tab")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/index.js" }
    ],
    [
      5838,
      { "./networks-form": 5839 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./networks-form")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-form/index.js" }
    ],
    [
      5839,
      {
        "../../../../../app/scripts/lib/util": 91,
        "../../../../../shared/constants/metametrics": 4758,
        "../../../../../shared/constants/network": 4759,
        "../../../../../shared/lib/fetch-with-cache": 4772,
        "../../../../../shared/modules/conversion.utils": 4784,
        "../../../../../shared/modules/network.utils": 4791,
        "../../../../../shared/modules/rpc.utils": 4794,
        "../../../../components/ui/actionable-message": 5370,
        "../../../../components/ui/button": 5377,
        "../../../../components/ui/form-field": 5410,
        "../../../../contexts/metametrics": 5515,
        "../../../../helpers/utils/i18n-helper": 5565,
        "../../../../hooks/useI18nContext": 5602,
        "../../../../hooks/usePrevious": 5608,
        "../../../../selectors": 5958,
        "../../../../store/actions": 5965,
        classnames: 2952,
        lodash: 4071,
        loglevel: 4083,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = S(e("classnames")),
                  r = e("lodash"),
                  s = S(e("loglevel")),
                  o = S(e("prop-types")),
                  i = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = N(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  l = e("react-redux"),
                  c = e("../../../../../app/scripts/lib/util"),
                  u = e("../../../../../shared/constants/metametrics"),
                  d = e("../../../../../shared/constants/network"),
                  p = S(e("../../../../../shared/lib/fetch-with-cache")),
                  f = e("../../../../../shared/modules/conversion.utils"),
                  m = e("../../../../../shared/modules/network.utils"),
                  g = e("../../../../../shared/modules/rpc.utils"),
                  h = S(e("../../../../components/ui/actionable-message")),
                  _ = S(e("../../../../components/ui/button")),
                  y = S(e("../../../../components/ui/form-field")),
                  b = e("../../../../contexts/metametrics"),
                  v = e("../../../../helpers/utils/i18n-helper"),
                  E = e("../../../../hooks/useI18nContext"),
                  w = e("../../../../hooks/usePrevious"),
                  T = e("../../../../selectors"),
                  k = e("../../../../store/actions");
                function N(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (N = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function S(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const x = (e) => (e && "string" == typeof e && e.startsWith("0x") ? parseInt(e, 16).toString(10) : e),
                  C = ({
                    addNewNetwork: e,
                    restrictHeight: t,
                    isCurrentRpcTarget: n,
                    networksToRender: o,
                    selectedNetwork: N,
                    cancelCallback: S,
                    submitCallback: C
                  }) => {
                    var O, R, M, P, I, A;
                    const D = (0, E.useI18nContext)(),
                      j = (0, l.useDispatch)(),
                      { label: L, labelKey: U, viewOnly: F, rpcPrefs: B } = N,
                      W = L || (U && D((0, v.getNetworkLabelKey)(U))),
                      [$, q] = (0, i.useState)(W || ""),
                      [V, G] = (0, i.useState)((null == N ? void 0 : N.rpcUrl) || ""),
                      [H, K] = (0, i.useState)((null == N ? void 0 : N.chainId) || ""),
                      [z, Y] = (0, i.useState)((null == N ? void 0 : N.ticker) || ""),
                      [Q, X] = (0, i.useState)((null == N ? void 0 : N.blockExplorerUrl) || ""),
                      [J, Z] = (0, i.useState)({}),
                      [ee, te] = (0, i.useState)({}),
                      [ne, ae] = (0, i.useState)(!1),
                      re = d.FEATURED_RPCS.some((e) => Number(e.chainId) === Number(H)),
                      [se, oe] = (0, i.useState)(Boolean(e)),
                      [ie, le] = (0, i.useState)(N),
                      ce = (0, i.useContext)(b.MetaMetricsContext),
                      ue = (0, l.useSelector)(T.useSafeChainsListValidationSelector),
                      de = (0, i.useCallback)(() => {
                        q(W || ""),
                          G(N.rpcUrl),
                          K(x(N.chainId)),
                          Y(null == N ? void 0 : N.ticker),
                          X(null == N ? void 0 : N.blockExplorerUrl),
                          Z({}),
                          te({}),
                          ae(!1),
                          oe(!1),
                          le(N);
                      }, [N, W]),
                      pe = (0, i.useRef)(),
                      fe = (0, i.useRef)(),
                      me = (0, i.useRef)(),
                      ge = (0, i.useRef)(),
                      he = (0, i.useRef)(),
                      _e = (0, i.useRef)();
                    (0, i.useEffect)(() => {
                      !pe.current && e
                        ? (q(""), G(""), K(""), Y(""), X(""), Z({}), ae(!1))
                        : (fe.current === W &&
                            ge.current === N.rpcUrl &&
                            me.current === N.chainId &&
                            he.current === N.ticker &&
                            _e.current === N.blockExplorerUrl) ||
                          (se && (0, r.isEqual)(N, ie)) ||
                          de(N);
                    }, [N, W, e, ie, de, se]),
                      (0, i.useEffect)(
                        () => () => {
                          q(""), G(""), K(""), Y(""), X(""), Z({}), j((0, k.setSelectedNetworkConfigurationId)(""));
                        },
                        [q, G, K, Y, X, Z, j]
                      );
                    const ye = (0, i.useCallback)(
                        (e) =>
                          e.length > 0 && !(0, c.isWebUrl)(e)
                            ? (0, c.isWebUrl)(`https://${e}`)
                              ? { key: "urlErrorMsg", msg: D("urlErrorMsg") }
                              : { key: "invalidBlockExplorerURL", msg: D("invalidBlockExplorerURL") }
                            : null,
                        [D]
                      ),
                      be = (0, i.useCallback)(
                        async (e = "") => {
                          const t = e.trim();
                          let n = "",
                            a = "",
                            r = "",
                            i = "",
                            l = 10,
                            c = t;
                          if (!c.startsWith("0x"))
                            try {
                              c = `0x${(0, f.decimalToHex)(c)}`;
                            } catch (e) {
                              return { error: { key: "invalidHexNumber", msg: D("invalidHexNumber") } };
                            }
                          const [u] = o.filter((e) => e.chainId === c && e.rpcUrl !== V);
                          if ("" === t) return null;
                          let d, p;
                          u
                            ? ((r = "chainIdExistsErrorMsg"), (i = D("chainIdExistsErrorMsg", [u.label ?? u.labelKey])))
                            : t.startsWith("0x")
                            ? ((l = 16),
                              /^0x[0-9a-f]+$/iu.test(t)
                                ? (0, m.isPrefixedFormattedHexString)(t) || (a = D("invalidHexNumberLeadingZeros"))
                                : ((n = "invalidHexNumber"), (a = D("invalidHexNumber"))))
                            : /^[0-9]+$/u.test(t)
                            ? t.startsWith("0")
                              ? ((n = "invalidNumberLeadingZeros"), (a = D("invalidNumberLeadingZeros")))
                              : (0, m.isSafeChainId)(parseInt(t, l)) || ((n = "invalidChainIdTooBig"), (a = D("invalidChainIdTooBig")))
                            : ((n = "invalidNumber"), (a = D("invalidNumber")));
                          try {
                            d = await (0, g.jsonRpcRequest)(V, "eth_chainId");
                          } catch (e) {
                            s.default.warn("Failed to fetch the chainId from the endpoint.", e), (p = e);
                          }
                          if (V && t)
                            if (p || "string" != typeof d) (n = "failedToFetchChainId"), (a = D("failedToFetchChainId"));
                            else if (c !== d) {
                              if (!t.startsWith("0x"))
                                try {
                                  d = parseInt(d, 16).toString(10);
                                } catch (e) {
                                  s.default.warn("Failed to convert endpoint chain ID to decimal", d);
                                }
                              (n = "endpointReturnedDifferentChainId"),
                                (a = D("endpointReturnedDifferentChainId", [d.length <= 12 ? d : `${d.slice(0, 9)}...`]));
                            }
                          return n ? { error: { key: n, msg: a } } : r ? { warning: { key: r, msg: i } } : null;
                        },
                        [V, o, D]
                      ),
                      ve = (0, i.useCallback)(
                        async (e, t) => {
                          let n, a, r;
                          if (!e || !t) return null;
                          let o = [];
                          if (ue)
                            try {
                              o = await (0, p.default)({ url: "https://chainid.network/chains.json", functionName: "getSafeChainsList" });
                            } catch (e) {
                              s.default.warn("Failed to fetch the chainList from chainid.network", e), (r = e);
                            }
                          if (r) (n = "failedToFetchTickerSymbolData"), (a = D("failedToFetchTickerSymbolData"));
                          else {
                            var i;
                            const r = null === (i = o) || void 0 === i ? void 0 : i.find((t) => t.chainId.toString() === e);
                            if (r === undefined) (n = "failedToFetchTickerSymbolData"), (a = D("failedToFetchTickerSymbolData"));
                            else {
                              var l;
                              const s = null === (l = r.nativeCurrency) || void 0 === l ? void 0 : l.symbol;
                              s !== t &&
                                ((n = "chainListReturnedDifferentTickerSymbol"), (a = D("chainListReturnedDifferentTickerSymbol", [e, s])));
                            }
                          }
                          return n ? { key: n, msg: a } : null;
                        },
                        [D]
                      ),
                      Ee = (0, i.useCallback)(
                        (e) => {
                          const [{ rpcUrl: t = null, label: n, labelKey: a } = {}] = o.filter((t) => t.rpcUrl === e),
                            { rpcUrl: r } = N;
                          return e.length > 0 && !(0, c.isWebUrl)(e)
                            ? (0, c.isWebUrl)(`https://${e}`)
                              ? { key: "urlErrorMsg", msg: D("urlErrorMsg") }
                              : { key: "invalidRPC", msg: D("invalidRPC") }
                            : t && t !== r
                            ? { key: "urlExistsErrorMsg", msg: D("urlExistsErrorMsg", [n ?? a]) }
                            : null;
                        },
                        [N, o, D]
                      ),
                      we = (0, w.usePrevious)(V),
                      Te = (0, w.usePrevious)(H),
                      ke = (0, w.usePrevious)(z),
                      Ne = (0, w.usePrevious)(Q);
                    (0, i.useEffect)(() => {
                      F ||
                        (we === V && Te === H && ke === z && Ne === Q) ||
                        (async function () {
                          const { error: e, warning: t } = (await be(H)) || {},
                            n = await ve(H, z),
                            a = ye(Q),
                            r = Ee(V);
                          Z({ ...J, blockExplorerUrl: a, rpcUrl: r, chainId: e }), te({ ...ee, chainId: t, ticker: n });
                        })();
                    }, [J, ee, V, H, z, Q, F, L, we, Te, ke, Ne, ye, be, ve, Ee]);
                    const Se = !n && !F && !e,
                      xe = (() => {
                        const e = "string" == typeof N.chainId && N.chainId.toLowerCase().startsWith("0x") && H === x(N.chainId);
                        return V === N.rpcUrl && e && z === N.ticker && $ === W && Q === N.blockExplorerUrl;
                      })(),
                      Ce = (null == N ? void 0 : N.rpcUrl) && J.chainId && re,
                      Oe =
                        Object.keys(J).some((e) => {
                          const t = J[e];
                          return (
                            ("chainId" !== e || "chainIdExistsErrorMsg" !== (null == t ? void 0 : t.key)) &&
                            (null == t ? void 0 : t.key) &&
                            (null == t ? void 0 : t.msg)
                          );
                        }) ||
                        ne ||
                        xe ||
                        Ce ||
                        !V ||
                        !H ||
                        !z;
                    return i.default.createElement(
                      "div",
                      {
                        className: (0, a.default)({
                          "networks-tab__network-form": !e,
                          "networks-tab__add-network-form": e,
                          "networks-tab__restrict-height": t
                        })
                      },
                      e
                        ? i.default.createElement(h.default, {
                            type: "warning",
                            message: D("onlyAddTrustedNetworks"),
                            iconFillColor: "var(--color-warning-default)",
                            useIcon: !0,
                            withRightButton: !0,
                            className: "networks-tab__add-network-form__alert"
                          })
                        : null,
                      i.default.createElement(
                        "div",
                        {
                          className: (0, a.default)({
                            "networks-tab__network-form-body": !e,
                            "networks-tab__network-form-body__view-only": F,
                            "networks-tab__add-network-form-body": e
                          })
                        },
                        i.default.createElement(y.default, {
                          autoFocus: !0,
                          error: (null === (O = J.networkName) || void 0 === O ? void 0 : O.msg) || "",
                          onChange: (e) => {
                            oe(!0), q(e);
                          },
                          titleText: D("networkName"),
                          value: $,
                          disabled: F
                        }),
                        i.default.createElement(y.default, {
                          error: (null === (R = J.rpcUrl) || void 0 === R ? void 0 : R.msg) || "",
                          onChange: (e) => {
                            oe(!0), G(e);
                          },
                          titleText: D("rpcUrl"),
                          value: null != V && V.includes(`/v3/${d.infuraProjectId}`) ? V.replace(`/v3/${d.infuraProjectId}`, "") : V,
                          disabled: F
                        }),
                        i.default.createElement(y.default, {
                          warning: (null === (M = ee.chainId) || void 0 === M ? void 0 : M.msg) || "",
                          error: (null === (P = J.chainId) || void 0 === P ? void 0 : P.msg) || "",
                          onChange: (e) => {
                            oe(!0), K(e);
                          },
                          titleText: D("chainId"),
                          value: H,
                          disabled: F,
                          tooltipText: F ? null : D("networkSettingsChainIdDescription")
                        }),
                        i.default.createElement(y.default, {
                          warning: (null === (I = ee.ticker) || void 0 === I ? void 0 : I.msg) || "",
                          onChange: (e) => {
                            oe(!0), Y(e);
                          },
                          titleText: D("currencySymbol"),
                          value: z,
                          disabled: F
                        }),
                        i.default.createElement(y.default, {
                          error: (null === (A = J.blockExplorerUrl) || void 0 === A ? void 0 : A.msg) || "",
                          onChange: (e) => {
                            oe(!0), X(e);
                          },
                          titleText: D("blockExplorerUrl"),
                          titleUnit: D("optionalWithParanthesis"),
                          value: Q,
                          disabled: F,
                          autoFocus: "blockExplorerUrl" === window.location.hash.split("#")[2]
                        })
                      ),
                      i.default.createElement(
                        "div",
                        {
                          className: (0, a.default)({ "networks-tab__network-form-footer": !e, "networks-tab__add-network-form-footer": e })
                        },
                        !F &&
                          i.default.createElement(
                            i.default.Fragment,
                            null,
                            Se &&
                              i.default.createElement(
                                _.default,
                                {
                                  type: "danger",
                                  onClick: () => {
                                    j(
                                      (0, k.showModal)({
                                        name: "CONFIRM_DELETE_NETWORK",
                                        target: N.networkConfigurationId,
                                        onConfirm: () => {
                                          de(), j((0, k.setSelectedNetworkConfigurationId)(""));
                                        }
                                      })
                                    );
                                  }
                                },
                                D("delete")
                              ),
                            i.default.createElement(
                              _.default,
                              {
                                type: "secondary",
                                onClick: () => {
                                  e ? (j((0, k.setSelectedNetworkConfigurationId)("")), null == S || S()) : de();
                                },
                                disabled: xe
                              },
                              D("cancel")
                            ),
                            i.default.createElement(
                              _.default,
                              {
                                type: "primary",
                                disabled: Oe,
                                onClick: async () => {
                                  ae(!0);
                                  try {
                                    const t = ((e) => {
                                      let t = e;
                                      return e.startsWith("0x") || (t = `0x${parseInt(e, 10).toString(16)}`), t;
                                    })(H.trim().toLowerCase());
                                    let n;
                                    N.rpcUrl && V !== N.rpcUrl
                                      ? await j(
                                          (0, k.editAndSetNetworkConfiguration)(
                                            {
                                              rpcUrl: V,
                                              ticker: z,
                                              networkConfigurationId: N.networkConfigurationId,
                                              chainId: t,
                                              nickname: $,
                                              rpcPrefs: { ...B, blockExplorerUrl: Q || (null == B ? void 0 : B.blockExplorerUrl) }
                                            },
                                            { source: u.MetaMetricsNetworkEventSource.CustomNetworkForm }
                                          )
                                        )
                                      : (n = await j(
                                          (0, k.upsertNetworkConfiguration)(
                                            {
                                              rpcUrl: V,
                                              ticker: z,
                                              chainId: t,
                                              nickname: $,
                                              rpcPrefs: { ...B, blockExplorerUrl: Q || (null == B ? void 0 : B.blockExplorerUrl) }
                                            },
                                            { setActive: !0, source: u.MetaMetricsNetworkEventSource.CustomNetworkForm }
                                          )
                                        )),
                                      e &&
                                        (j((0, k.setNewNetworkAdded)({ nickname: $, networkConfigurationId: n })),
                                        ce({
                                          event: u.MetaMetricsEventName.CustomNetworkAdded,
                                          category: u.MetaMetricsEventCategory.Network,
                                          properties: {
                                            block_explorer_url: Q,
                                            chain_id: t,
                                            network_name: $,
                                            source_connection_method: u.MetaMetricsNetworkEventSource.CustomNetworkForm,
                                            token_symbol: z
                                          }
                                        }),
                                        null == C || C());
                                  } catch (e) {
                                    throw (ae(!1), e);
                                  }
                                }
                              },
                              D("save")
                            )
                          )
                      )
                    );
                  };
                (C.propTypes = {
                  addNewNetwork: o.default.bool,
                  isCurrentRpcTarget: o.default.bool,
                  networksToRender: o.default.array.isRequired,
                  selectedNetwork: o.default.object,
                  cancelCallback: o.default.func,
                  submitCallback: o.default.func,
                  restrictHeight: o.default.bool
                }),
                  (C.defaultProps = { selectedNetwork: {} });
                n.default = C;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-form/networks-form.js" }
    ],
    [
      584,
      {
        "../Collapse": 639,
        "../Paper": 753,
        "../styles/withStyles": 913,
        "../utils/useControlled": 936,
        "./AccordionContext": 585,
        "@babel/runtime/helpers/extends": 216,
        "@babel/runtime/helpers/interopRequireDefault": 220,
        "@babel/runtime/helpers/interopRequireWildcard": 221,
        "@babel/runtime/helpers/objectWithoutProperties": 227,
        "@babel/runtime/helpers/slicedToArray": 232,
        "@babel/runtime/helpers/toArray": 233,
        "@material-ui/utils": 1004,
        clsx: 2954,
        "prop-types": 4219,
        react: 4475,
        "react-is": 4336
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                  r = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                var s = r(e("@babel/runtime/helpers/extends")),
                  o = r(e("@babel/runtime/helpers/toArray")),
                  i = r(e("@babel/runtime/helpers/slicedToArray")),
                  l = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                  c = a(e("react")),
                  u = (e("react-is"), r(e("prop-types")), r(e("clsx"))),
                  d = (e("@material-ui/utils"), r(e("../Collapse"))),
                  p = r(e("../Paper")),
                  f = r(e("../styles/withStyles")),
                  m = r(e("./AccordionContext")),
                  g = r(e("../utils/useControlled")),
                  h = function (e) {
                    var t = { duration: e.transitions.duration.shortest };
                    return {
                      root: {
                        position: "relative",
                        transition: e.transitions.create(["margin"], t),
                        "&:before": {
                          position: "absolute",
                          left: 0,
                          top: -1,
                          right: 0,
                          height: 1,
                          content: '""',
                          opacity: 1,
                          backgroundColor: e.palette.divider,
                          transition: e.transitions.create(["opacity", "background-color"], t)
                        },
                        "&:first-child": { "&:before": { display: "none" } },
                        "&$expanded": {
                          margin: "16px 0",
                          "&:first-child": { marginTop: 0 },
                          "&:last-child": { marginBottom: 0 },
                          "&:before": { opacity: 0 }
                        },
                        "&$expanded + &": { "&:before": { display: "none" } },
                        "&$disabled": { backgroundColor: e.palette.action.disabledBackground }
                      },
                      rounded: {
                        borderRadius: 0,
                        "&:first-child": { borderTopLeftRadius: e.shape.borderRadius, borderTopRightRadius: e.shape.borderRadius },
                        "&:last-child": {
                          borderBottomLeftRadius: e.shape.borderRadius,
                          borderBottomRightRadius: e.shape.borderRadius,
                          "@supports (-ms-ime-align: auto)": { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
                        }
                      },
                      expanded: {},
                      disabled: {}
                    };
                  };
                n.styles = h;
                var _ = c.forwardRef(function (e, t) {
                    var n = e.children,
                      a = e.classes,
                      r = e.className,
                      f = e.defaultExpanded,
                      h = void 0 !== f && f,
                      _ = e.disabled,
                      y = void 0 !== _ && _,
                      b = e.expanded,
                      v = e.onChange,
                      E = e.square,
                      w = void 0 !== E && E,
                      T = e.TransitionComponent,
                      k = void 0 === T ? d.default : T,
                      N = e.TransitionProps,
                      S = (0, l.default)(e, [
                        "children",
                        "classes",
                        "className",
                        "defaultExpanded",
                        "disabled",
                        "expanded",
                        "onChange",
                        "square",
                        "TransitionComponent",
                        "TransitionProps"
                      ]),
                      x = (0, g.default)({ controlled: b, default: h, name: "Accordion", state: "expanded" }),
                      C = (0, i.default)(x, 2),
                      O = C[0],
                      R = C[1],
                      M = c.useCallback(
                        function (e) {
                          R(!O), v && v(e, !O);
                        },
                        [O, v, R]
                      ),
                      P = c.Children.toArray(n),
                      I = (0, o.default)(P),
                      A = I[0],
                      D = I.slice(1),
                      j = c.useMemo(
                        function () {
                          return { expanded: O, disabled: y, toggle: M };
                        },
                        [O, y, M]
                      );
                    return c.createElement(
                      p.default,
                      (0, s.default)(
                        { className: (0, u.default)(a.root, r, O && a.expanded, y && a.disabled, !w && a.rounded), ref: t, square: w },
                        S
                      ),
                      c.createElement(m.default.Provider, { value: j }, A),
                      c.createElement(
                        k,
                        (0, s.default)({ in: O, timeout: "auto" }, N),
                        c.createElement("div", { "aria-labelledby": A.props.id, id: A.props["aria-controls"], role: "region" }, D)
                      )
                    );
                  }),
                  y = (0, f.default)(h, { name: "MuiAccordion" })(_);
                n.default = y;
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/Accordion/Accordion.js" }
    ],
    [
      5840,
      { "./networks-list-item": 5841 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./networks-list-item")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-list-item/index.js" }
    ],
    [
      5841,
      {
        "../../../../../app/scripts/lib/util": 91,
        "../../../../../shared/constants/app": 4749,
        "../../../../../shared/constants/network": 4759,
        "../../../../components/component-library": 5242,
        "../../../../components/ui/identicon": 5430,
        "../../../../components/ui/url-icon": 5511,
        "../../../../ducks/metamask/metamask": 5529,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../helpers/constants/routes": 5542,
        "../../../../helpers/utils/i18n-helper": 5565,
        "../../../../helpers/utils/settings-search": 5574,
        "../../../../hooks/useI18nContext": 5602,
        "../../../../store/actions": 5965,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = E(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = v(e("prop-types")),
                  s = v(e("classnames")),
                  o = e("react-redux"),
                  i = e("../../../../hooks/useI18nContext"),
                  l = e("../../../../../shared/constants/network"),
                  c = e("../../../../helpers/constants/routes"),
                  u = e("../../../../store/actions"),
                  d = e("../../../../../app/scripts/lib/util"),
                  p = e("../../../../../shared/constants/app"),
                  f = e("../../../../ducks/metamask/metamask"),
                  m = v(e("../../../../components/ui/identicon")),
                  g = v(e("../../../../components/ui/url-icon")),
                  h = e("../../../../helpers/utils/settings-search"),
                  _ = e("../../../../components/component-library"),
                  y = e("../../../../helpers/constants/design-system"),
                  b = e("../../../../helpers/utils/i18n-helper");
                function v(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function E(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (E = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const w = ({
                  network: e,
                  networkIsSelected: t,
                  selectedNetworkConfigurationId: n,
                  setSearchQuery: r,
                  setSearchedNetworks: v
                }) => {
                  const E = (0, i.useI18nContext)(),
                    w = (0, o.useDispatch)(),
                    T = (0, d.getEnvironmentType)() === p.ENVIRONMENT_TYPE_FULLSCREEN,
                    k = (0, o.useSelector)(f.getProviderConfig),
                    { label: N, labelKey: S, networkConfigurationId: x, rpcUrl: C, providerType: O } = e,
                    R = n && n === x,
                    M = C === k.rpcUrl,
                    P = k.type !== l.NETWORK_TYPES.RPC && O === k.type,
                    I = R || (!t && (M || P)),
                    A = M || P,
                    D = (0, a.useRef)();
                  return (
                    (0, a.useEffect)(() => {
                      (0, h.handleSettingsRefs)(E, E("networks"), D);
                    }, [D, E]),
                    a.default.createElement(
                      "div",
                      {
                        ref: D,
                        key: `settings-network-list-item:${x}`,
                        className: "networks-tab__networks-list-item",
                        onClick: () => {
                          r(""),
                            v([]),
                            w((0, u.setSelectedNetworkConfigurationId)(x)),
                            T || global.platform.openExtensionInBrowser(c.NETWORKS_ROUTE);
                        }
                      },
                      A
                        ? a.default.createElement(_.Icon, { name: _.IconName.Check, color: y.IconColor.successDefault })
                        : a.default.createElement(_.Icon, { name: _.IconName.Check, color: y.IconColor.transparent }),
                      e.chainId in l.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP
                        ? a.default.createElement(m.default, {
                            className: "networks-tab__content__custom-image",
                            diameter: 24,
                            image: l.CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[e.chainId],
                            imageBorder: !0
                          })
                        : !e.isATestNetwork &&
                            a.default.createElement(g.default, {
                              className: "networks-tab__content__icon-with-fallback",
                              fallbackClassName: "networks-tab__content__icon-with-fallback",
                              name: N || (0, b.getNetworkLabelKey)(S)
                            }),
                      e.isATestNetwork &&
                        e.chainId !== l.CHAIN_IDS.LINEA_GOERLI &&
                        a.default.createElement(g.default, {
                          name: N || (0, b.getNetworkLabelKey)(S),
                          fallbackClassName: (0, s.default)("networks-tab__content__icon-with-fallback", {
                            [`networks-tab__content__icon-with-fallback--color-${S}`]: !0
                          })
                        }),
                      a.default.createElement(
                        "div",
                        {
                          className: (0, s.default)("networks-tab__networks-list-name", {
                            "networks-tab__networks-list-name--selected": I,
                            "networks-tab__networks-list-name--disabled": O !== l.NETWORK_TYPES.RPC && !I
                          })
                        },
                        N || E((0, b.getNetworkLabelKey)(S)),
                        O !== l.NETWORK_TYPES.RPC &&
                          a.default.createElement(_.Icon, {
                            name: _.IconName.Lock,
                            color: y.IconColor.iconMuted,
                            size: _.IconSize.Inherit,
                            marginInlineStart: 2
                          })
                      )
                    )
                  );
                };
                w.propTypes = {
                  network: r.default.object.isRequired,
                  networkIsSelected: r.default.bool,
                  selectedNetworkConfigurationId: r.default.string,
                  setSearchQuery: r.default.func,
                  setSearchedNetworks: r.default.func
                };
                n.default = w;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-list-item/networks-list-item.js" }
    ],
    [
      5842,
      { "./networks-list": 5843 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./networks-list")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-list/index.js" }
    ],
    [
      5843,
      {
        "../../../../components/component-library": 5242,
        "../../../../helpers/constants/design-system": 5537,
        "../../../../hooks/useI18nContext": 5602,
        "../custom-content-search": 5836,
        "../networks-list-item": 5840,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = p(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = d(e("prop-types")),
                  s = d(e("classnames")),
                  o = e("../../../../hooks/useI18nContext"),
                  i = d(e("../custom-content-search")),
                  l = e("../../../../helpers/constants/design-system"),
                  c = d(e("../networks-list-item")),
                  u = e("../../../../components/component-library");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function p(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (p = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const f = ({
                  networkIsSelected: e,
                  networksToRender: t,
                  networkDefaultedToProvider: n,
                  selectedNetworkConfigurationId: r
                }) => {
                  const d = (0, o.useI18nContext)(),
                    [p, f] = (0, a.useState)([]),
                    [m, g] = (0, a.useState)(""),
                    h = 0 === p.length && "" === m ? t : p,
                    _ = h.filter((e) => !e.isATestNetwork),
                    y = h.filter((e) => e.isATestNetwork);
                  return a.default.createElement(
                    "div",
                    { className: (0, s.default)("networks-tab__networks-list", { "networks-tab__networks-list--selection": e && !n }) },
                    a.default.createElement(i.default, {
                      onSearch: ({ searchQuery: e = "", results: t = [] }) => {
                        f(t), g(e);
                      },
                      error: 0 === h.length ? d("settingsSearchMatchingNotFound") : null,
                      networksList: t,
                      searchQueryInput: m
                    }),
                    _.map((t, n) =>
                      a.default.createElement(c.default, {
                        key: `settings-network-list:${t.rpcUrl}`,
                        network: t,
                        networkIsSelected: e,
                        selectedNetworkConfigurationId: r,
                        setSearchQuery: g,
                        setSearchedNetworks: f
                      })
                    ),
                    "" === m &&
                      a.default.createElement(
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
                    y.map((t, n) =>
                      a.default.createElement(c.default, {
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
                n.default = f;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-list/networks-list.js" }
    ],
    [
      5844,
      { "./networks-tab-content": 5845 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./networks-tab-content")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab-content/index.js" }
    ],
    [
      5845,
      {
        "../../../../ducks/metamask/metamask": 5529,
        "../../../../helpers/constants/routes": 5542,
        "../networks-form": 5838,
        "../networks-list": 5842,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = d(e("react")),
                  r = d(e("prop-types")),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = d(e("../networks-form")),
                  l = d(e("../networks-list")),
                  c = e("../../../../ducks/metamask/metamask"),
                  u = e("../../../../helpers/constants/routes");
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const p = ({
                  networkDefaultedToProvider: e,
                  networkIsSelected: t,
                  networksToRender: n,
                  selectedNetwork: r,
                  shouldRenderNetworkForm: d
                }) => {
                  const p = (0, s.useSelector)(c.getProviderConfig),
                    f = (0, o.useHistory)();
                  return a.default.createElement(
                    a.default.Fragment,
                    null,
                    a.default.createElement(l.default, {
                      networkDefaultedToProvider: e,
                      networkIsSelected: t,
                      networksToRender: n,
                      selectedNetworkConfigurationId: r.networkConfigurationId
                    }),
                    d
                      ? a.default.createElement(i.default, {
                          isCurrentRpcTarget: p.rpcUrl === r.rpcUrl,
                          networksToRender: n,
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
                n.default = p;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab-content/networks-tab-content.js" }
    ],
    [
      5846,
      { "./networks-tab-subheader": 5847 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./networks-tab-subheader")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab-subheader/index.js" }
    ],
    [
      5847,
      {
        "../../../../components/ui/button": 5377,
        "../../../../helpers/constants/routes": 5542,
        "../../../../hooks/useI18nContext": 5602,
        "prop-types": 4219,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = c(e("react")),
                  r = c(e("prop-types")),
                  s = e("react-router-dom"),
                  o = e("../../../../hooks/useI18nContext"),
                  i = e("../../../../helpers/constants/routes"),
                  l = c(e("../../../../components/ui/button"));
                function c(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const u = ({ addNewNetwork: e }) => {
                  const t = (0, o.useI18nContext)(),
                    n = (0, s.useHistory)();
                  return e
                    ? a.default.createElement(
                        "div",
                        { className: "networks-tab__subheader" },
                        a.default.createElement("span", { className: "networks-tab__sub-header-text" }, t("networks")),
                        a.default.createElement("span", { className: "networks-tab__sub-header-text" }, "  >  "),
                        a.default.createElement("div", { className: "networks-tab__sub-header-text" }, t("addANetwork")),
                        a.default.createElement("span", null, "  >  "),
                        a.default.createElement("div", { className: "networks-tab__subheader--break" }, t("addANetworkManually"))
                      )
                    : a.default.createElement(
                        "div",
                        { className: "settings-page__sub-header" },
                        a.default.createElement("span", { className: "settings-page__sub-header-text" }, t("networks")),
                        a.default.createElement(
                          "div",
                          { className: "networks-tab__add-network-header-button-wrapper" },
                          a.default.createElement(
                            l.default,
                            {
                              type: "primary",
                              onClick: (e) => {
                                e.preventDefault(), n.push(i.ADD_POPULAR_CUSTOM_NETWORK);
                              }
                            },
                            t("addANetwork")
                          )
                        )
                      );
                };
                u.propTypes = { addNewNetwork: r.default.bool.isRequired };
                n.default = u;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab-subheader/networks-tab-subheader.js" }
    ],
    [
      5848,
      { "../../../../shared/constants/network": 4759 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.defaultNetworksData = void 0);
                var a = e("../../../../shared/constants/network");
                n.defaultNetworksData = [
                  {
                    labelKey: a.NETWORK_TYPES.MAINNET,
                    iconColor: "#29B6AF",
                    providerType: a.NETWORK_TYPES.MAINNET,
                    rpcUrl: (0, a.getRpcUrl)({ network: a.NETWORK_TYPES.MAINNET, excludeProjectId: !0 }),
                    chainId: a.CHAIN_IDS.MAINNET,
                    ticker: a.CURRENCY_SYMBOLS.ETH,
                    blockExplorerUrl: "https://etherscan.io"
                  },
                  {
                    labelKey: a.NETWORK_TYPES.GOERLI,
                    iconColor: "#3099f2",
                    providerType: a.NETWORK_TYPES.GOERLI,
                    rpcUrl: (0, a.getRpcUrl)({ network: a.NETWORK_TYPES.GOERLI, excludeProjectId: !0 }),
                    chainId: a.CHAIN_IDS.GOERLI,
                    ticker: a.TEST_NETWORK_TICKER_MAP[a.NETWORK_TYPES.GOERLI],
                    blockExplorerUrl: "https://goerli.etherscan.io"
                  },
                  {
                    labelKey: a.NETWORK_TYPES.SEPOLIA,
                    iconColor: "#CFB5F0",
                    providerType: a.NETWORK_TYPES.SEPOLIA,
                    rpcUrl: (0, a.getRpcUrl)({ network: a.NETWORK_TYPES.SEPOLIA, excludeProjectId: !0 }),
                    chainId: a.CHAIN_IDS.SEPOLIA,
                    ticker: a.TEST_NETWORK_TICKER_MAP[a.NETWORK_TYPES.SEPOLIA],
                    blockExplorerUrl: "https://sepolia.etherscan.io"
                  },
                  {
                    labelKey: a.NETWORK_TYPES.LINEA_GOERLI,
                    iconColor: "#61dfff",
                    providerType: a.NETWORK_TYPES.LINEA_GOERLI,
                    rpcUrl: (0, a.getRpcUrl)({ network: a.NETWORK_TYPES.LINEA_GOERLI, excludeProjectId: !0 }),
                    chainId: a.CHAIN_IDS.LINEA_GOERLI,
                    ticker: a.TEST_NETWORK_TICKER_MAP[a.NETWORK_TYPES.LINEA_GOERLI],
                    blockExplorerUrl: "https://goerli.lineascan.build"
                  },
                  {
                    labelKey: a.NETWORK_TYPES.LINEA_MAINNET,
                    iconColor: "#121212",
                    providerType: a.NETWORK_TYPES.LINEA_MAINNET,
                    rpcUrl: (0, a.getRpcUrl)({ network: a.NETWORK_TYPES.LINEA_MAINNET, excludeProjectId: !0 }),
                    chainId: a.CHAIN_IDS.LINEA_MAINNET,
                    ticker: a.CURRENCY_SYMBOLS.ETH,
                    blockExplorerUrl: "https://lineascan.build"
                  }
                ];
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab.constants.js" }
    ],
    [
      5849,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/app": 4749,
        "../../../../shared/constants/network": 4759,
        "../../../components/ui/button": 5377,
        "../../../ducks/metamask/metamask": 5529,
        "../../../helpers/constants/routes": 5542,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./networks-form": 5838,
        "./networks-tab-content": 5844,
        "./networks-tab-subheader": 5846,
        "./networks-tab.constants": 5848,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = w(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = E(e("prop-types")),
                  s = E(e("classnames")),
                  o = e("react-router-dom"),
                  i = e("react-redux"),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/constants/routes"),
                  u = e("../../../store/actions"),
                  d = E(e("../../../components/ui/button")),
                  p = e("../../../../app/scripts/lib/util"),
                  f = e("../../../../shared/constants/app"),
                  m = e("../../../selectors"),
                  g = e("../../../ducks/metamask/metamask"),
                  h = e("../../../../shared/constants/network"),
                  _ = e("./networks-tab.constants"),
                  y = E(e("./networks-tab-content")),
                  b = E(e("./networks-form")),
                  v = E(e("./networks-tab-subheader"));
                function E(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function w(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (w = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const T = _.defaultNetworksData.map((e) => ({ ...e, viewOnly: !0, isATestNetwork: h.TEST_CHAINS.includes(e.chainId) })),
                  k = ({ addNewNetwork: e }) => {
                    const t = (0, l.useI18nContext)(),
                      n = (0, i.useDispatch)(),
                      { pathname: r } = (0, o.useLocation)(),
                      _ = (0, o.useHistory)(),
                      E = (0, p.getEnvironmentType)() === f.ENVIRONMENT_TYPE_FULLSCREEN,
                      w = E || Boolean(r.match(c.NETWORKS_FORM_ROUTE)) || "blockExplorerUrl" === window.location.hash.split("#")[2],
                      k = (0, i.useSelector)(m.getNetworkConfigurations),
                      N = (0, i.useSelector)(g.getProviderConfig),
                      S = (0, i.useSelector)(m.getNetworksTabSelectedNetworkConfigurationId),
                      x = (0, i.useSelector)(g.isLineaMainnetNetworkReleased),
                      C = Object.entries(k).map(([e, t]) => {
                        var n;
                        return {
                          label: t.nickname,
                          iconColor: "var(--color-icon-alternative)",
                          providerType: h.NETWORK_TYPES.RPC,
                          rpcUrl: t.rpcUrl,
                          chainId: t.chainId,
                          ticker: t.ticker,
                          blockExplorerUrl: (null === (n = t.rpcPrefs) || void 0 === n ? void 0 : n.blockExplorerUrl) || "",
                          isATestNetwork: h.TEST_CHAINS.includes(t.chainId),
                          networkConfigurationId: e
                        };
                      });
                    let O = [...T, ...C];
                    x || (O = O.filter((e) => e.chainId !== h.BUILT_IN_NETWORKS[h.NETWORK_TYPES.LINEA_MAINNET].chainId));
                    let R = O.find((e) => e.networkConfigurationId === S) || {};
                    const M = Boolean(R.rpcUrl);
                    let P = !1;
                    return (
                      M ||
                        ((R =
                          O.find((e) => e.rpcUrl === N.rpcUrl || (e.providerType !== h.NETWORK_TYPES.RPC && e.providerType === N.type)) ||
                          {}),
                        (P = !0)),
                      (0, a.useEffect)(
                        () => () => {
                          n((0, u.setSelectedNetworkConfigurationId)(""));
                        },
                        [n]
                      ),
                      a.default.createElement(
                        "div",
                        { className: "networks-tab__body" },
                        E ? a.default.createElement(v.default, { addNewNetwork: e }) : null,
                        a.default.createElement(
                          "div",
                          {
                            className: (0, s.default)("networks-tab__content", {
                              "networks-tab__content--with-networks-list-popup-footer": !E && !w
                            })
                          },
                          e
                            ? a.default.createElement(b.default, {
                                networksToRender: O,
                                addNewNetwork: e,
                                submitCallback: () => _.push(c.DEFAULT_ROUTE),
                                cancelCallback: () => _.push(c.NETWORKS_ROUTE)
                              })
                            : a.default.createElement(
                                a.default.Fragment,
                                null,
                                a.default.createElement(y.default, {
                                  networkDefaultedToProvider: P,
                                  networkIsSelected: M,
                                  networksToRender: O,
                                  providerUrl: N.rpcUrl,
                                  selectedNetwork: R,
                                  shouldRenderNetworkForm: w
                                }),
                                E || w
                                  ? null
                                  : a.default.createElement(
                                      "div",
                                      { className: "networks-tab__networks-list-popup-footer" },
                                      a.default.createElement(
                                        d.default,
                                        {
                                          type: "primary",
                                          onClick: () => {
                                            E
                                              ? _.push(c.ADD_POPULAR_CUSTOM_NETWORK)
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
                k.propTypes = { addNewNetwork: r.default.bool };
                n.default = k;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/networks-tab/networks-tab.js" }
    ],
    [
      585,
      { "@babel/runtime/helpers/interopRequireWildcard": 221, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var a = e("@babel/runtime/helpers/interopRequireWildcard");
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var r = a(e("react")).createContext({});
                var s = r;
                n.default = s;
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/Accordion/AccordionContext.js" }
    ],
    [
      5850,
      { "./security-tab.container": 5852 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./security-tab.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/security-tab/index.js" }
    ],
    [
      5851,
      {
        "../../../../app/scripts/lib/util": 91,
        "../../../../shared/constants/app": 4749,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/network": 4759,
        "../../../../shared/lib/ui-utils": 4779,
        "../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle": 4939,
        "../../../components/app/srp-quiz-modal/SRPQuiz": 5114,
        "../../../components/component-library": 5242,
        "../../../components/ui/text-field": 5491,
        "../../../components/ui/toggle-button": 5495,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/settings-search": 5574,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = e("lodash"),
                  r = v(e("prop-types")),
                  s = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = b(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  o = e("../../../../app/scripts/lib/util"),
                  i = e("../../../../shared/constants/app"),
                  l = e("../../../../shared/constants/metametrics"),
                  c = e("../../../../shared/constants/network"),
                  u = e("../../../../shared/lib/ui-utils"),
                  d = v(e("../../../components/app/srp-quiz-modal/SRPQuiz")),
                  p = e("../../../components/component-library"),
                  f = v(e("../../../components/ui/text-field")),
                  m = v(e("../../../components/ui/toggle-button")),
                  g = e("../../../helpers/constants/design-system"),
                  h = e("../../../helpers/constants/routes"),
                  _ = e("../../../helpers/utils/settings-search"),
                  y = v(e("../../../components/app/incoming-trasaction-toggle/incoming-transaction-toggle"));
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
                function E(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class w extends s.PureComponent {
                  constructor(...e) {
                    super(...e),
                      E(this, "state", {
                        ipfsGateway: this.props.ipfsGateway || c.IPFS_DEFAULT_GATEWAY_URL,
                        ipfsGatewayError: "",
                        srpQuizModalVisible: !1,
                        ipfsToggle: this.props.ipfsGateway.length > 0
                      }),
                      E(this, "settingsRefCounter", 0),
                      E(
                        this,
                        "settingsRefs",
                        Array((0, _.getNumberOfSettingsInSection)(this.context.t, this.context.t("securityAndPrivacy")))
                          .fill(undefined)
                          .map(() => s.default.createRef())
                      ),
                      E(this, "hideSrpQuizModal", () => this.setState({ srpQuizModalVisible: !1 }));
                  }
                  componentDidUpdate() {
                    const { t: e } = this.context;
                    (0, _.handleSettingsRefs)(e, e("securityAndPrivacy"), this.settingsRefs);
                  }
                  componentDidMount() {
                    const { t: e } = this.context;
                    (0, _.handleSettingsRefs)(e, e("securityAndPrivacy"), this.settingsRefs);
                  }
                  toggleSetting(e, t, n, a) {
                    this.context.trackEvent({
                      category: l.MetaMetricsEventCategory.Settings,
                      event: t,
                      properties: { action: n, legacy_event: !0 }
                    }),
                      a(!e);
                  }
                  renderSeedWords() {
                    const { t: e } = this.context;
                    return s.default.createElement(
                      s.default.Fragment,
                      null,
                      s.default.createElement(
                        "div",
                        { ref: this.settingsRefs[0], className: "settings-page__security-tab-sub-header" },
                        e("secretRecoveryPhrase")
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-padded" },
                        s.default.createElement(
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
                          s.default.createElement(d.default, { isOpen: this.state.srpQuizModalVisible, onClose: this.hideSrpQuizModal })
                      )
                    );
                  }
                  renderIncomingTransactionsOptIn() {
                    const { incomingTransactionsPreferences: e, allNetworks: t, setIncomingTransactionsPreferences: n } = this.props;
                    return s.default.createElement(y.default, {
                      wrapperRef: this.settingsRefs[1],
                      allNetworks: t,
                      setIncomingTransactionsPreferences: n,
                      incomingTransactionsPreferences: e
                    });
                  }
                  renderPhishingDetectionToggle() {
                    const { t: e } = this.context,
                      { usePhishDetect: t, setUsePhishDetect: n } = this.props;
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[2],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("usePhishingDetection")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("usePhishingDetectionDescription")
                        )
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "usePhishingDetection" },
                        s.default.createElement(m.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderUse4ByteResolutionToggle() {
                    const { t: e } = this.context,
                      { use4ByteResolution: t, setUse4ByteResolution: n } = this.props;
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[3],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("use4ByteResolution")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("use4ByteResolutionDescription")
                        )
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "4byte-resolution-container" },
                        s.default.createElement(m.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderMetaMetricsOptIn() {
                    const { t: e } = this.context,
                      { participateInMetaMetrics: t, setParticipateInMetaMetrics: n } = this.props;
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[4],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("participateInMetaMetrics")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          s.default.createElement("span", null, e("participateInMetaMetricsDescription"))
                        )
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "participateInMetaMetrics" },
                        s.default.createElement(m.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderChooseYourNetworkButton() {
                    const { t: e } = this.context;
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[5],
                        className: "settings-page__content-row",
                        "data-testid": "advanced-setting-choose-your-network",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Column,
                        gap: 4
                      },
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("chooseYourNetwork")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("chooseYourNetworkDescription", [
                            s.default.createElement(
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
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        s.default.createElement(
                          p.Button,
                          {
                            type: "secondary",
                            className: "settings-page__button",
                            onClick: () => {
                              (0, o.getEnvironmentType)() === i.ENVIRONMENT_TYPE_POPUP
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
                      { useSafeChainsListValidation: t, setUseSafeChainsListValidation: n } = this.props,
                      a = e("useSafeChainsListValidationWebsite");
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[2],
                        className: "settings-page__content-row",
                        "data-testid": "setting-safe-chains-validation",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Column,
                        gap: 4
                      },
                      s.default.createElement(
                        p.Box,
                        {
                          className: "settings-page__content-row",
                          gap: 4,
                          display: g.Display.Flex,
                          flexDirection: g.FlexDirection.Row,
                          justifyContent: g.JustifyContent.spaceBetween
                        },
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          s.default.createElement("span", null, e("useSafeChainsListValidation")),
                          s.default.createElement(
                            "div",
                            { className: "settings-page__content-description" },
                            e("useSafeChainsListValidationDescription", [
                              s.default.createElement("b", { key: "safechain-list-validation-website" }, a)
                            ])
                          )
                        ),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col", "data-testid": "useSafeChainsListValidation" },
                          s.default.createElement(m.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                        )
                      )
                    );
                  }
                  renderIpfsGatewayControl() {
                    const { t: e } = this.context;
                    let t = "";
                    const n = (n) => {
                      if (n.length > 0)
                        try {
                          const a = (0, o.addUrlProtocolPrefix)(n);
                          a || (t = e("invalidIpfsGateway"));
                          const r = new URL(a);
                          "gateway.ipfs.io" === r.host && (t = e("forbiddenIpfsGateway")),
                            0 === t.length && this.props.setIpfsGateway(r.host);
                        } catch (n) {
                          t = e("invalidIpfsGateway");
                        }
                      else t = e("invalidIpfsGateway");
                      this.setState({ ipfsGateway: n, ipfsGatewayError: t });
                    };
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[6],
                        className: "settings-page__content-row",
                        "data-testid": "setting-ipfs-gateway",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Column,
                        gap: 4
                      },
                      s.default.createElement(
                        p.Box,
                        {
                          className: "settings-page__content-row",
                          gap: 4,
                          display: g.Display.Flex,
                          flexDirection: g.FlexDirection.Row,
                          justifyContent: g.JustifyContent.spaceBetween
                        },
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          s.default.createElement("span", null, e("ipfsGateway")),
                          s.default.createElement("div", { className: "settings-page__content-description" }, e("ipfsGatewayDescription"))
                        ),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col", "data-testid": "ipfsToggle" },
                          s.default.createElement(m.default, {
                            value: this.state.ipfsToggle,
                            onToggle: (e) => {
                              e ? this.props.setIpfsGateway("") : n(this.state.ipfsGateway), this.setState({ ipfsToggle: !e });
                            },
                            offLabel: e("off"),
                            onLabel: e("on")
                          })
                        )
                      ),
                      this.state.ipfsToggle &&
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-item" },
                          s.default.createElement("span", null, e("addIPFSGateway")),
                          s.default.createElement(
                            "div",
                            { className: "settings-page__content-item-col" },
                            s.default.createElement(f.default, {
                              type: "text",
                              value: this.state.ipfsGateway,
                              onChange: (e) => n(e.target.value),
                              error: this.state.ipfsGatewayError,
                              fullWidth: !0,
                              margin: "dense"
                            })
                          )
                        ),
                      s.default.createElement(
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
                        s.default.createElement(
                          "div",
                          null,
                          e("ensDomainsSettingTitle"),
                          s.default.createElement(
                            "div",
                            { className: "settings-page__content-description" },
                            s.default.createElement(
                              p.Text,
                              { color: g.TextColor.inherit, variant: g.TextVariant.inherit },
                              e("ensDomainsSettingDescriptionIntroduction")
                            ),
                            s.default.createElement(
                              p.Box,
                              { as: "ul", marginTop: 4, marginBottom: 4, paddingInlineStart: 4, style: { listStyleType: "circle" } },
                              s.default.createElement(
                                p.Text,
                                { as: "li", color: g.TextColor.inherit, variant: g.TextVariant.inherit },
                                e("ensDomainsSettingDescriptionPart1")
                              ),
                              s.default.createElement(
                                p.Text,
                                { as: "li", color: g.TextColor.inherit, variant: g.TextVariant.inherit },
                                e("ensDomainsSettingDescriptionPart2")
                              )
                            ),
                            s.default.createElement(
                              p.Text,
                              { color: g.TextColor.inherit, variant: g.TextVariant.inherit },
                              e("ensDomainsSettingDescriptionOutroduction")
                            )
                          )
                        ),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col", "data-testid": "ipfs-gateway-resolution-container" },
                          s.default.createElement(m.default, {
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
                      { useTokenDetection: t, setUseTokenDetection: n } = this.props;
                    return s.default.createElement(
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
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("autoDetectTokens")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("autoDetectTokensDescription", [
                            s.default.createElement(
                              "a",
                              {
                                href: u.AUTO_DETECT_TOKEN_LEARN_MORE_LINK,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                key: "cyn-consensys-privacy-link"
                              },
                              (0, a.startCase)(e("learnMore"))
                            )
                          ])
                        )
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "autoDetectTokens" },
                        s.default.createElement(m.default, {
                          value: t,
                          onToggle: (e) => {
                            this.toggleSetting(
                              e,
                              l.MetaMetricsEventName.KeyAutoDetectTokens,
                              l.MetaMetricsEventName.KeyAutoDetectTokens,
                              n
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
                      { useMultiAccountBalanceChecker: t, setUseMultiAccountBalanceChecker: n } = this.props;
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[8],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("useMultiAccountBalanceChecker")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("useMultiAccountBalanceCheckerSettingDescription")
                        )
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "useMultiAccountBalanceChecker" },
                        s.default.createElement(m.default, {
                          value: t,
                          onToggle: (e) => {
                            this.toggleSetting(
                              e,
                              l.MetaMetricsEventName.KeyBatchAccountBalanceRequests,
                              l.MetaMetricsEventName.KeyBatchAccountBalanceRequests,
                              n
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
                      { useCurrencyRateCheck: t, setUseCurrencyRateCheck: n } = this.props;
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[9],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("currencyRateCheckToggle")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("currencyRateCheckToggleDescription", [
                            s.default.createElement(
                              "a",
                              { key: "coingecko_link", href: u.COINGECKO_LINK, rel: "noreferrer", target: "_blank" },
                              e("coingecko")
                            ),
                            s.default.createElement(
                              "a",
                              { key: "cryptocompare_link", href: u.CRYPTOCOMPARE_LINK, rel: "noreferrer", target: "_blank" },
                              e("cryptoCompare")
                            ),
                            s.default.createElement(
                              "a",
                              { key: "privacy_policy_link", href: u.PRIVACY_POLICY_LINK, rel: "noreferrer", target: "_blank" },
                              e("privacyMsg")
                            )
                          ])
                        )
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "currencyRateCheckToggle" },
                        s.default.createElement(m.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderDisplayNftMediaToggle() {
                    const { t: e } = this.context,
                      { openSeaEnabled: t, setOpenSeaEnabled: n, useNftDetection: a, setUseNftDetection: r } = this.props;
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[11],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("enableOpenSeaAPI")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("enableOpenSeaAPIDescription")
                        )
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "enableOpenSeaAPI" },
                        s.default.createElement(m.default, {
                          value: t,
                          onToggle: (e) => {
                            this.context.trackEvent({
                              category: l.MetaMetricsEventCategory.Settings,
                              event: "Enabled/Disable OpenSea",
                              properties: { action: "Enabled/Disable OpenSea", legacy_event: !0 }
                            }),
                              e && a && r(!1),
                              n(!e);
                          },
                          offLabel: e("off"),
                          onLabel: e("on")
                        })
                      )
                    );
                  }
                  renderNftDetectionToggle() {
                    const { t: e } = this.context,
                      { openSeaEnabled: t, setOpenSeaEnabled: n, useNftDetection: a, setUseNftDetection: r } = this.props;
                    return s.default.createElement(
                      p.Box,
                      {
                        ref: this.settingsRefs[12],
                        className: "settings-page__content-row",
                        display: g.Display.Flex,
                        flexDirection: g.FlexDirection.Row,
                        justifyContent: g.JustifyContent.spaceBetween,
                        gap: 4
                      },
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        s.default.createElement("span", null, e("useNftDetection")),
                        s.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("useNftDetectionDescriptionText")
                        )
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col", "data-testid": "useNftDetection" },
                        s.default.createElement(m.default, {
                          value: a,
                          onToggle: (e) => {
                            this.context.trackEvent({
                              category: l.MetaMetricsEventCategory.Settings,
                              event: "NFT Detected",
                              properties: { action: "NFT Detected", legacy_event: !0 }
                            }),
                              e || t || n(!e),
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
                    return s.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      e && s.default.createElement("div", { className: "settings-tab__error" }, e),
                      s.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header__bold" },
                        this.context.t("security")
                      ),
                      this.renderSeedWords(),
                      s.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header__bold" },
                        this.context.t("privacy")
                      ),
                      s.default.createElement(
                        "div",
                        null,
                        s.default.createElement("span", { className: "settings-page__security-tab-sub-header" }, this.context.t("alerts"))
                      ),
                      s.default.createElement("div", { className: "settings-page__content-padded" }, this.renderPhishingDetectionToggle()),
                      s.default.createElement(
                        "div",
                        null,
                        s.default.createElement(
                          "span",
                          { className: "settings-page__security-tab-sub-header" },
                          this.context.t("smartContracts")
                        )
                      ),
                      s.default.createElement("div", { className: "settings-page__content-padded" }, this.renderUse4ByteResolutionToggle()),
                      s.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header" },
                        this.context.t("transactions")
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-padded" },
                        this.renderCurrencyRateCheckToggle(),
                        this.renderIncomingTransactionsOptIn()
                      ),
                      s.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header" },
                        this.context.t("networkProvider")
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-padded" },
                        this.renderChooseYourNetworkButton(),
                        this.renderSafeChainsListValidationToggle(),
                        this.renderIpfsGatewayControl()
                      ),
                      s.default.createElement(
                        "span",
                        { className: "settings-page__security-tab-sub-header" },
                        this.context.t("tokenAutoDetection")
                      ),
                      s.default.createElement(
                        "div",
                        { className: "settings-page__content-padded" },
                        this.renderAutoDetectTokensToggle(),
                        this.renderBatchAccountBalanceRequestsToggle(),
                        this.renderDisplayNftMediaToggle(),
                        this.renderNftDetectionToggle()
                      ),
                      s.default.createElement("span", { className: "settings-page__security-tab-sub-header" }, this.context.t("metrics")),
                      s.default.createElement("div", { className: "settings-page__content-padded" }, this.renderMetaMetricsOptIn())
                    );
                  }
                }
                (n.default = w),
                  E(w, "contextTypes", { t: r.default.func, trackEvent: r.default.func }),
                  E(w, "propTypes", {
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
      5852,
      {
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./security-tab.component": 5851,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = e("redux"),
                  i = e("../../../store/actions"),
                  l = e("../../../selectors"),
                  c = (a = e("./security-tab.component")) && a.__esModule ? a : { default: a };
                n.default = (0, o.compose)(
                  s.withRouter,
                  (0, r.connect)(
                    (e) => {
                      const {
                          appState: { warning: t },
                          metamask: n
                        } = e,
                        {
                          incomingTransactionsPreferences: a,
                          participateInMetaMetrics: r,
                          usePhishDetect: s,
                          useTokenDetection: o,
                          ipfsGateway: i,
                          useMultiAccountBalanceChecker: c,
                          useSafeChainsListValidation: u,
                          useCurrencyRateCheck: d,
                          useAddressBarEnsResolution: p,
                          openSeaEnabled: f,
                          useNftDetection: m,
                          use4ByteResolution: g
                        } = n;
                      return {
                        warning: t,
                        incomingTransactionsPreferences: a,
                        allNetworks: (0, l.getAllNetworks)(e),
                        participateInMetaMetrics: r,
                        usePhishDetect: s,
                        useTokenDetection: o,
                        ipfsGateway: i,
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
                      setIncomingTransactionsPreferences: (t, n) => e((0, i.setIncomingTransactionsPreferences)(t, n)),
                      setParticipateInMetaMetrics: (t) => e((0, i.setParticipateInMetaMetrics)(t)),
                      setUsePhishDetect: (t) => e((0, i.setUsePhishDetect)(t)),
                      setUseCurrencyRateCheck: (t) => e((0, i.setUseCurrencyRateCheck)(t)),
                      setUseTokenDetection: (t) => e((0, i.setUseTokenDetection)(t)),
                      setIpfsGateway: (t) => e((0, i.setIpfsGateway)(t)),
                      setUseMultiAccountBalanceChecker: (t) => e((0, i.setUseMultiAccountBalanceChecker)(t)),
                      setUseAddressBarEnsResolution: (t) => e((0, i.setUseAddressBarEnsResolution)(t)),
                      setUseSafeChainsListValidation: (t) => e((0, i.setUseSafeChainsListValidation)(t)),
                      setOpenSeaEnabled: (t) => e((0, i.setOpenSeaEnabled)(t)),
                      setUseNftDetection: (t) => e((0, i.setUseNftDetection)(t)),
                      setUse4ByteResolution: (t) => e((0, i.setUse4ByteResolution)(t))
                    })
                  )
                )(c.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/security-tab/security-tab.container.js" }
    ],
    [
      5853,
      { "./settings-search-list": 5854 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("./settings-search-list")) && a.__esModule ? a : { default: a };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-search-list/index.js" }
    ],
    [
      5854,
      {
        "../../../components/component-library": 5242,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/settings-search": 5574,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = u(e("prop-types")),
                  s = u(e("classnames")),
                  o = e("../../../helpers/utils/settings-search"),
                  i = e("../../../contexts/i18n"),
                  l = e("../../../components/component-library"),
                  c = e("../../../helpers/constants/design-system");
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
                function p({ results: e, onClickSetting: t }) {
                  const n = (0, a.useContext)(i.I18nContext);
                  return (
                    (0, a.useEffect)(o.highlightSearchedText, [e]),
                    a.default.createElement(
                      "div",
                      { className: "settings-page__header__search__list" },
                      e.slice(0, 5).map((e) => {
                        const { icon: r, iconName: o, tabMessage: i, sectionMessage: u, route: d } = e;
                        return (
                          Boolean(r || i || u) &&
                          a.default.createElement(
                            "div",
                            { key: `settings_${d}` },
                            a.default.createElement(
                              "div",
                              { className: "settings-page__header__search__list__item", onClick: () => t(e) },
                              o
                                ? a.default.createElement(l.Icon, { name: o })
                                : a.default.createElement("i", {
                                    className: (0, s.default)("settings-page__header__search__list__item__icon", r)
                                  }),
                              a.default.createElement(
                                "span",
                                {
                                  id: `menu-tab_${d}`,
                                  className: (0, s.default)("settings-page__header__search__list__item__tab", {
                                    "settings-page__header__search__list__item__tab-multiple-lines": i(n) === n("securityAndPrivacy")
                                  })
                                },
                                i(n)
                              ),
                              a.default.createElement(l.Icon, {
                                name: l.IconName.ArrowRight,
                                size: c.Size.SM,
                                className: "settings-page__header__search__list__item__caret"
                              }),
                              a.default.createElement(
                                "span",
                                {
                                  id: `menu-section_${d}`,
                                  className: (0, s.default)("settings-page__header__search__list__item__section", {
                                    "settings-page__header__search__list__item__section-multiple-lines":
                                      i(n) === n("securityAndPrivacy") || i(n) === n("alerts")
                                  })
                                },
                                u(n)
                              )
                            )
                          )
                        );
                      }),
                      0 === e.length &&
                        a.default.createElement(
                          "div",
                          { className: "settings-page__header__search__list__item", style: { cursor: "auto", display: "flex" } },
                          a.default.createElement(
                            "span",
                            { className: "settings-page__header__search__list__item__no-matching" },
                            n("settingsSearchMatchingNotFound")
                          )
                        ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__header__search__list__item", style: { cursor: "auto", display: "flex" } },
                        a.default.createElement(
                          "span",
                          { className: "settings-page__header__search__list__item__request" },
                          n("missingSetting")
                        ),
                        a.default.createElement(
                          "a",
                          {
                            href: "https://community.metamask.io/c/feature-requests-ideas/13",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            key: "need-help-link",
                            className: "settings-page__header__search__list__item__link"
                          },
                          n("missingSettingRequest")
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
      5855,
      { "./settings-search": 5856 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("./settings-search")) && a.__esModule ? a : { default: a };
                n.default = r.default;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-search/index.js" }
    ],
    [
      5856,
      {
        "../../../../shared/modules/string-utils": 4797,
        "../../../components/component-library": 5242,
        "../../../components/ui/icon/search-icon": 5424,
        "../../../components/ui/text-field": 5491,
        "../../../contexts/i18n": 5514,
        "../../../helpers/constants/design-system": 5537,
        "@material-ui/core/InputAdornment": 707,
        "fuse.js": 3582,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = g);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = m(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = f(e("prop-types")),
                  s = f(e("fuse.js")),
                  o = f(e("@material-ui/core/InputAdornment")),
                  i = f(e("../../../components/ui/text-field")),
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
                    n = new WeakMap();
                  return (m = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function g({ onSearch: e, error: t, settingsRoutesList: n }) {
                  const r = (0, a.useContext)(l.I18nContext),
                    [f, m] = (0, a.useState)(""),
                    [g, h] = (0, a.useState)("var(--color-icon-muted)"),
                    _ = Object.values(n),
                    y = new s.default(_, {
                      shouldSort: !0,
                      threshold: 0.3,
                      location: 0,
                      distance: 100,
                      maxPatternLength: 32,
                      minMatchCharLength: 1,
                      keys: ["tabMessage", "sectionMessage", "descriptionMessage"],
                      getFn: (e, t) => e[t](r)
                    }),
                    b = (t) => {
                      const n = t.replace(/[^A-Za-z0-9\s&_]/gu, "").trimStart();
                      m(n), h("" === n ? "var(--color-icon-muted)" : "var(--color-icon-default)");
                      const a = y.search(n),
                        r = [..._.filter((e) => e.tabMessage && n && (0, u.isEqualCaseInsensitive)(e.tab, n)), ...a];
                      e({ searchQuery: n, results: r });
                    };
                  return a.default.createElement(i.default, {
                    id: "search-settings",
                    placeholder: r("search"),
                    type: "text",
                    value: f,
                    onChange: (e) => b(e.target.value),
                    error: t,
                    fullWidth: !0,
                    autoFocus: !0,
                    autoComplete: "off",
                    startAdornment: a.default.createElement(
                      o.default,
                      { position: "start", style: { marginRight: "12px" } },
                      a.default.createElement(c.default, { color: g })
                    ),
                    endAdornment: a.default.createElement(
                      a.default.Fragment,
                      null,
                      f &&
                        a.default.createElement(
                          o.default,
                          { className: "imageclosectn", position: "end", onClick: () => b(""), style: { cursor: "pointer" } },
                          a.default.createElement(d.Icon, { name: d.IconName.Close, color: p.IconColor.iconDefault })
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
      5857,
      { "./settings-tab.container": 5859 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./settings-tab.container")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-tab/index.js" }
    ],
    [
      5858,
      {
        "../../../../app/_locales/index.json": 3,
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/preferences": 4761,
        "../../../components/component-library": 5242,
        "../../../components/ui/dropdown": 5402,
        "../../../components/ui/identicon/blockieIdenticon": 5427,
        "../../../components/ui/jazzicon": 5434,
        "../../../components/ui/toggle-button": 5495,
        "../../../helpers/constants/available-conversions.json": 5534,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/utils/settings-search": 5574,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = y(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = _(e("prop-types")),
                  s = _(e("classnames")),
                  o = _(e("../../../helpers/constants/available-conversions.json")),
                  i = e("../../../helpers/constants/design-system"),
                  l = _(e("../../../components/ui/dropdown")),
                  c = _(e("../../../components/ui/toggle-button")),
                  u = _(e("../../../../app/_locales/index.json")),
                  d = _(e("../../../components/ui/jazzicon")),
                  p = _(e("../../../components/ui/identicon/blockieIdenticon")),
                  f = e("../../../../shared/constants/metametrics"),
                  m = e("../../../helpers/utils/settings-search"),
                  g = e("../../../../shared/constants/preferences"),
                  h = e("../../../components/component-library");
                function _(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function y(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (y = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function b(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                const v = o.default
                    .sort((e, t) => e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase()))
                    .map(({ code: e, name: t }) => ({ name: `${e.toUpperCase()} - ${t}`, value: e })),
                  E = u.default.map((e) => ({ name: `${e.name}`, value: e.code }));
                class w extends a.PureComponent {
                  constructor(...e) {
                    super(...e),
                      b(
                        this,
                        "settingsRefs",
                        Array((0, m.getNumberOfSettingsInSection)(this.context.t, this.context.t("general")))
                          .fill(undefined)
                          .map(() => a.default.createRef())
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
                      { currentCurrency: t, setCurrentCurrency: n, lastFetchedConversionDate: r } = this.props;
                    return a.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[0],
                        className: "settings-page__content-row",
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("currencyConversion")),
                        a.default.createElement(
                          "span",
                          { className: "settings-page__content-description" },
                          r ? e("updatedWithDate", [new Date(1e3 * r).toString()]) : e("noConversionDateAvailable")
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(l.default, {
                            "data-testid": "currency-select",
                            id: "select-currency",
                            options: v,
                            selectedOption: t,
                            onChange: (e) => n(e)
                          })
                        )
                      )
                    );
                  }
                  renderCurrentLocale() {
                    const { t: e } = this.context,
                      { updateCurrentLocale: t, currentLocale: n } = this.props,
                      r = u.default.find((e) => e.code === n),
                      s = r ? r.name : "";
                    return a.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[2],
                        className: "settings-page__content-row",
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", { className: "settings-page__content-label" }, e("currentLanguage")),
                        a.default.createElement("span", { className: "settings-page__content-description" }, s)
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(l.default, {
                            "data-testid": "locale-select",
                            id: "select-locale",
                            options: E,
                            selectedOption: n,
                            onChange: async (e) => t(e)
                          })
                        )
                      )
                    );
                  }
                  renderHideZeroBalanceTokensOptIn() {
                    const { t: e } = this.context,
                      { hideZeroBalanceTokens: t, setHideZeroBalanceTokens: n } = this.props;
                    return a.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[5],
                        className: "settings-page__content-row",
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Row,
                        justifyContent: i.JustifyContent.spaceBetween,
                        alignItems: i.AlignItems.center,
                        id: "toggle-zero-balance"
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("hideZeroBalanceTokens"))
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item-col" },
                        a.default.createElement(c.default, { value: t, onToggle: (e) => n(!e), offLabel: e("off"), onLabel: e("on") })
                      )
                    );
                  }
                  renderBlockieOptIn() {
                    const { t: e } = this.context,
                      { useBlockie: t, setUseBlockie: n, selectedAddress: r, tokenList: o } = this.props;
                    return a.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[4],
                        className: "settings-page__content-row",
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column,
                        id: "blockie-optin"
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          h.Text,
                          { variant: i.TextVariant.bodyMd, as: "h5", color: i.TextColor.textDefault },
                          e("accountIdenticon")
                        ),
                        a.default.createElement("span", { className: "settings-page__content-item__description" }, e("jazzAndBlockies")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item__identicon" },
                          a.default.createElement(
                            "button",
                            { "data-testid": "jazz_icon", onClick: () => n(!1), className: "settings-page__content-item__identicon__item" },
                            a.default.createElement(
                              "div",
                              {
                                className: (0, s.default)("settings-page__content-item__identicon__item__icon", {
                                  "settings-page__content-item__identicon__item__icon--active": !t
                                })
                              },
                              a.default.createElement(d.default, {
                                id: "jazzicon",
                                address: r,
                                diameter: 32,
                                tokenList: o,
                                style: { display: "block", borderRadius: "16px", width: "32px", height: "32px" }
                              })
                            ),
                            a.default.createElement(
                              h.Text,
                              {
                                color: i.TextColor.textDefault,
                                variant: i.TextVariant.bodySm,
                                as: "h6",
                                marginTop: 0,
                                marginRight: 12,
                                marginBottom: 0,
                                marginLeft: 3
                              },
                              e("jazzicons")
                            )
                          ),
                          a.default.createElement(
                            "button",
                            {
                              "data-testid": "blockie_icon",
                              onClick: () => n(!0),
                              className: "settings-page__content-item__identicon__item"
                            },
                            a.default.createElement(
                              "div",
                              {
                                className: (0, s.default)("settings-page__content-item__identicon__item__icon", {
                                  "settings-page__content-item__identicon__item__icon--active": t
                                })
                              },
                              a.default.createElement(p.default, { id: "blockies", address: r, diameter: 32, borderRadius: "50%" })
                            ),
                            a.default.createElement(
                              h.Text,
                              {
                                color: i.TextColor.textDefault,
                                variant: i.TextVariant.bodySm,
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
                        setUseNativeCurrencyAsPrimaryCurrencyPreference: n,
                        useNativeCurrencyAsPrimaryCurrency: r
                      } = this.props;
                    return a.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[1],
                        className: "settings-page__content-row",
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, e("primaryCurrencySetting")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          e("primaryCurrencySettingDescription")
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(
                            "div",
                            { className: "settings-tab__radio-buttons" },
                            a.default.createElement(
                              "div",
                              { className: "settings-tab__radio-button" },
                              a.default.createElement("input", {
                                type: "radio",
                                "data-testid": "toggle-native-currency",
                                id: "native-primary-currency",
                                onChange: () => n(!0),
                                checked: Boolean(r)
                              }),
                              a.default.createElement(
                                "label",
                                { htmlFor: "native-primary-currency", className: "settings-tab__radio-label" },
                                t
                              )
                            ),
                            a.default.createElement(
                              "div",
                              { className: "settings-tab__radio-button" },
                              a.default.createElement("input", {
                                type: "radio",
                                "data-testid": "toggle-fiat-currency",
                                id: "fiat-primary-currency",
                                onChange: () => n(!1),
                                checked: !r
                              }),
                              a.default.createElement(
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
                      { theme: t, setTheme: n } = this.props,
                      r = [
                        { name: e("lightTheme"), value: g.ThemeType.light },
                        { name: e("darkTheme"), value: g.ThemeType.dark },
                        { name: e("osTheme"), value: g.ThemeType.os }
                      ];
                    return a.default.createElement(
                      h.Box,
                      {
                        ref: this.settingsRefs[3],
                        className: "settings-page__content-row",
                        display: i.Display.Flex,
                        flexDirection: i.FlexDirection.Column
                      },
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement("span", null, this.context.t("theme")),
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-description" },
                          this.context.t("themeDescription")
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content-item" },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__content-item-col" },
                          a.default.createElement(l.default, {
                            id: "select-theme",
                            options: r,
                            selectedOption: t,
                            onChange: (e) => {
                              this.context.trackEvent({
                                category: f.MetaMetricsEventCategory.Settings,
                                event: "Theme Changed",
                                properties: { theme_selected: e }
                              }),
                                n(e);
                            }
                          })
                        )
                      )
                    );
                  }
                  render() {
                    const { warning: e } = this.props;
                    return a.default.createElement(
                      "div",
                      { className: "settings-page__body" },
                      e ? a.default.createElement("div", { className: "settings-tab__error" }, e) : null,
                      this.renderCurrentConversion(),
                      this.renderUsePrimaryCurrencyOptions(),
                      this.renderCurrentLocale(),
                      this.renderTheme(),
                      this.renderBlockieOptIn(),
                      this.renderHideZeroBalanceTokensOptIn()
                    );
                  }
                }
                (n.default = w),
                  b(w, "contextTypes", { t: r.default.func, metricsEvent: r.default.func, trackEvent: r.default.func }),
                  b(w, "propTypes", {
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
      5859,
      { "../../../selectors": 5958, "../../../store/actions": 5965, "./settings-tab.component": 5858, "react-redux": 4440 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("react-redux"),
                  s = e("../../../store/actions"),
                  o = e("../../../selectors"),
                  i = (a = e("./settings-tab.component")) && a.__esModule ? a : { default: a };
                n.default = (0, r.connect)(
                  (e, t) => {
                    const {
                        appState: { warning: n },
                        metamask: a
                      } = e,
                      { currentCurrency: r, nativeCurrency: s, useBlockie: i, currentLocale: l, selectedAddress: c } = a,
                      { useNativeCurrencyAsPrimaryCurrency: u, hideZeroBalanceTokens: d } = (0, o.getPreferences)(e),
                      { lastFetchedConversionDate: p } = t;
                    return {
                      warning: n,
                      currentLocale: l,
                      currentCurrency: r,
                      nativeCurrency: s,
                      useBlockie: i,
                      useNativeCurrencyAsPrimaryCurrency: u,
                      hideZeroBalanceTokens: d,
                      lastFetchedConversionDate: p,
                      selectedAddress: c,
                      tokenList: (0, o.getTokenList)(e),
                      theme: (0, o.getTheme)(e)
                    };
                  },
                  (e) => ({
                    setCurrentCurrency: (t) => e((0, s.setCurrentCurrency)(t)),
                    setUseBlockie: (t) => e((0, s.setUseBlockie)(t)),
                    updateCurrentLocale: (t) => e((0, s.updateCurrentLocale)(t)),
                    setUseNativeCurrencyAsPrimaryCurrencyPreference: (t) => e((0, s.setUseNativeCurrencyAsPrimaryCurrencyPreference)(t)),
                    setParticipateInMetaMetrics: (t) => e((0, s.setParticipateInMetaMetrics)(t)),
                    setHideZeroBalanceTokens: (t) => e((0, s.setHideZeroBalanceTokens)(t)),
                    setTheme: (t) => e((0, s.setTheme)(t))
                  })
                )(i.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings-tab/settings-tab.container.js" }
    ],
    [
      586,
      { "./Accordion": 584, "@babel/runtime/helpers/interopRequireDefault": 220 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var a = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = a(e("./Accordion"));
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/Accordion/index.js" }
    ],
    [
      5860,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/app": 4749,
        "../../components/app/add-network/add-network": 4804,
        "../../components/app/tab-bar": 5118,
        "../../components/component-library": 5242,
        "../../components/ui/metafox-logo": 5451,
        "../../helpers/constants/design-system": 5537,
        "../../helpers/constants/routes": 5542,
        "../../helpers/utils/settings-search": 5574,
        "./advanced-tab": 5814,
        "./alerts-tab": 5816,
        "./contact-list-tab": 5825,
        "./experimental-tab": 5831,
        "./info-tab": 5833,
        "./networks-tab": 5837,
        "./security-tab": 5850,
        "./settings-search": 5855,
        "./settings-search-list": 5853,
        "./settings-tab": 5857,
        classnames: 2952,
        "prop-types": 4219,
        react: 4475,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = x(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = S(e("prop-types")),
                  s = e("react-router-dom"),
                  o = S(e("classnames")),
                  i = S(e("../../components/app/tab-bar")),
                  l = e("../../helpers/constants/routes"),
                  c = e("../../helpers/utils/settings-search"),
                  u = S(e("../../components/app/add-network/add-network")),
                  d = e("../../components/component-library"),
                  p = e("../../helpers/constants/design-system"),
                  f = S(e("../../components/ui/metafox-logo")),
                  m = e("../../../app/scripts/lib/util"),
                  g = e("../../../shared/constants/app"),
                  h = S(e("./settings-tab")),
                  _ = S(e("./alerts-tab")),
                  y = S(e("./networks-tab")),
                  b = S(e("./advanced-tab")),
                  v = S(e("./info-tab")),
                  E = S(e("./security-tab")),
                  w = S(e("./contact-list-tab")),
                  T = S(e("./experimental-tab")),
                  k = S(e("./settings-search")),
                  N = S(e("./settings-search-list"));
                function S(e) {
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
                function C() {
                  return (
                    (C = Object.assign
                      ? Object.assign.bind()
                      : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                          }
                          return e;
                        }),
                    C.apply(this, arguments)
                  );
                }
                function O(e, t, n) {
                  return (
                    (t = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (n !== undefined) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
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
                class R extends a.PureComponent {
                  constructor(...e) {
                    super(...e), O(this, "state", { isSearchList: !1, lastFetchedConversionDate: null, searchResults: [], searchText: "" });
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
                    const { history: e, backRoute: t, currentPath: n, mostRecentOverviewPage: r, addNewNetwork: s } = this.props,
                      { searchResults: i, isSearchList: u, searchText: h } = this.state,
                      { t: _ } = this.context,
                      y = (0, m.getEnvironmentType)() === g.ENVIRONMENT_TYPE_POPUP;
                    return a.default.createElement(
                      "div",
                      { className: (0, o.default)("main-container settings-page", { "settings-page--selected": n !== l.SETTINGS_ROUTE }) },
                      a.default.createElement(
                        d.Box,
                        { className: "settings-page__header", padding: 4, paddingBottom: [2, 4] },
                        a.default.createElement(
                          "div",
                          { className: "settings-page__header__title-container" },
                          y &&
                            a.default.createElement(
                              a.default.Fragment,
                              null,
                              n === l.SETTINGS_ROUTE
                                ? a.default.createElement(f.default, {
                                    className: "settings-page__header__title-container__metamask-logo",
                                    unsetIconHeight: !0,
                                    onClick: async () => e.push(l.DEFAULT_ROUTE),
                                    display: [p.Display.Flex, p.Display.None]
                                  })
                                : a.default.createElement(d.ButtonIcon, {
                                    ariaLabel: _("back"),
                                    iconName: d.IconName.ArrowLeft,
                                    className: "settings-page__header__title-container__back-button",
                                    color: p.Color.iconDefault,
                                    onClick: () => e.push(t),
                                    display: [p.Display.Flex, p.Display.None],
                                    size: d.ButtonIconSize.Sm
                                  })
                            ),
                          this.renderTitle(),
                          a.default.createElement(
                            d.Box,
                            { className: "settings-page__header__title-container__search", display: [p.Display.Block] },
                            a.default.createElement(k.default, {
                              onSearch: ({ searchQuery: e = "", results: t = [] }) => {
                                this.setState({ isSearchList: "" !== e, searchResults: t, searchText: e });
                              },
                              settingsRoutesList: (0, c.getSettingsRoutes)()
                            }),
                            u &&
                              h.length >= 3 &&
                              a.default.createElement(N.default, { results: i, onClickSetting: (e) => this.handleClickSetting(e) })
                          ),
                          a.default.createElement(d.ButtonIcon, {
                            className: "settings-page__header__title-container__close-button",
                            iconName: d.IconName.Close,
                            ariaLabel: _("close"),
                            onClick: () => {
                              s ? e.push(l.NETWORKS_ROUTE) : e.push(r);
                            },
                            size: d.ButtonIconSize.Sm,
                            marginLeft: "auto"
                          })
                        )
                      ),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__content" },
                        a.default.createElement("div", { className: "settings-page__content__tabs" }, this.renderTabs()),
                        a.default.createElement(
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
                      { isPopup: t, pathnameI18nKey: n, addressName: r } = this.props;
                    let s;
                    return (
                      (s = e(t && r ? "details" : n && t ? n : "settings")),
                      a.default.createElement(
                        "div",
                        { className: "settings-page__header__title-container__title" },
                        a.default.createElement(d.Text, { variant: p.TextVariant.headingMd }, s)
                      )
                    );
                  }
                  renderSubHeader() {
                    const { t: e } = this.context,
                      {
                        currentPath: t,
                        isPopup: n,
                        isAddressEntryPage: r,
                        pathnameI18nKey: s,
                        addressName: i,
                        initialBreadCrumbRoute: c,
                        breadCrumbTextKey: u,
                        history: f,
                        initialBreadCrumbKey: m
                      } = this.props;
                    let g;
                    return (
                      (g = e(n && r ? "settings" : r ? "contacts" : m || s || "general")),
                      !t.startsWith(l.NETWORKS_ROUTE) &&
                        a.default.createElement(
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
                          a.default.createElement(
                            d.Text,
                            {
                              className: (0, o.default)({ "settings-page__subheader--link": c }),
                              variant: p.TextVariant.headingSm,
                              onClick: () => c && f.push(c)
                            },
                            g
                          ),
                          u &&
                            a.default.createElement(
                              "div",
                              { className: "settings-page__subheader--break" },
                              a.default.createElement("span", null, " > "),
                              e(u)
                            ),
                          r &&
                            a.default.createElement(
                              "div",
                              { className: "settings-page__subheader--break" },
                              a.default.createElement("span", null, " > "),
                              i
                            )
                        )
                    );
                  }
                  renderTabs() {
                    const { history: e, currentPath: t } = this.props,
                      { t: n } = this.context,
                      r = [
                        {
                          content: n("general"),
                          icon: a.default.createElement(d.Icon, { name: d.IconName.Setting }),
                          key: l.GENERAL_ROUTE
                        },
                        {
                          content: n("advanced"),
                          icon: a.default.createElement("i", { className: "fas fa-sliders-h" }),
                          key: l.ADVANCED_ROUTE
                        },
                        {
                          content: n("contacts"),
                          icon: a.default.createElement(d.Icon, { name: d.IconName.Book }),
                          key: l.CONTACT_LIST_ROUTE
                        },
                        {
                          content: n("securityAndPrivacy"),
                          icon: a.default.createElement("i", { className: "fa fa-lock" }),
                          key: l.SECURITY_ROUTE
                        },
                        {
                          content: n("alerts"),
                          icon: a.default.createElement(d.Icon, { name: d.IconName.Notification }),
                          key: l.ALERTS_ROUTE
                        },
                        { content: n("networks"), icon: a.default.createElement(d.Icon, { name: d.IconName.Plug }), key: l.NETWORKS_ROUTE },
                        {
                          content: n("experimental"),
                          icon: a.default.createElement(d.Icon, { name: d.IconName.Flask }),
                          key: l.EXPERIMENTAL_ROUTE
                        },
                        { content: n("about"), icon: a.default.createElement(d.Icon, { name: d.IconName.Info }), key: l.ABOUT_US_ROUTE }
                      ];
                    return a.default.createElement(i.default, {
                      tabs: r,
                      isActive: (e) =>
                        (e === l.GENERAL_ROUTE && t === l.SETTINGS_ROUTE) ||
                        !(e !== l.CONTACT_LIST_ROUTE || !t.includes(l.CONTACT_LIST_ROUTE)) ||
                        (0, s.matchPath)(t, { exact: !0, path: e }),
                      onSelect: (t) => e.push(t)
                    });
                  }
                  renderContent() {
                    return a.default.createElement(
                      s.Switch,
                      null,
                      a.default.createElement(s.Route, {
                        exact: !0,
                        path: l.GENERAL_ROUTE,
                        render: (e) =>
                          a.default.createElement(h.default, C({}, e, { lastFetchedConversionDate: this.state.lastFetchedConversionDate }))
                      }),
                      a.default.createElement(s.Route, { exact: !0, path: l.ABOUT_US_ROUTE, component: v.default }),
                      a.default.createElement(s.Route, { exact: !0, path: l.ADVANCED_ROUTE, component: b.default }),
                      a.default.createElement(s.Route, { exact: !0, path: l.ALERTS_ROUTE, component: _.default }),
                      a.default.createElement(s.Route, {
                        exact: !0,
                        path: l.ADD_NETWORK_ROUTE,
                        render: () => a.default.createElement(y.default, { addNewNetwork: !0 })
                      }),
                      a.default.createElement(s.Route, {
                        exact: !0,
                        path: l.NETWORKS_ROUTE,
                        render: () => a.default.createElement(y.default, { addNewNetwork: !1 })
                      }),
                      a.default.createElement(s.Route, {
                        exact: !0,
                        path: l.ADD_POPULAR_CUSTOM_NETWORK,
                        render: () => a.default.createElement(u.default, null)
                      }),
                      a.default.createElement(s.Route, { exact: !0, path: l.SECURITY_ROUTE, component: E.default }),
                      a.default.createElement(s.Route, { exact: !0, path: l.EXPERIMENTAL_ROUTE, component: T.default }),
                      a.default.createElement(s.Route, { exact: !0, path: l.CONTACT_LIST_ROUTE, component: w.default }),
                      a.default.createElement(s.Route, { exact: !0, path: l.CONTACT_ADD_ROUTE, component: w.default }),
                      a.default.createElement(s.Route, { exact: !0, path: `${l.CONTACT_EDIT_ROUTE}/:id`, component: w.default }),
                      a.default.createElement(s.Route, { exact: !0, path: `${l.CONTACT_VIEW_ROUTE}/:id`, component: w.default }),
                      a.default.createElement(s.Route, {
                        render: (e) =>
                          a.default.createElement(h.default, C({}, e, { lastFetchedConversionDate: this.state.lastFetchedConversionDate }))
                      })
                    );
                  }
                }
                O(R, "propTypes", {
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
                  O(R, "contextTypes", { t: r.default.func });
                n.default = R;
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings.component.js" }
    ],
    [
      5861,
      {
        "../../../app/scripts/lib/util": 91,
        "../../../shared/constants/app": 4749,
        "../../../shared/modules/hexstring-utils": 4788,
        "../../ducks/history/history": 5526,
        "../../helpers/constants/routes": 5542,
        "../../selectors": 5958,
        "./settings.component": 5860,
        "react-redux": 4440,
        "react-router-dom": 4460,
        redux: 4505
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = e("redux"),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = e("../../selectors"),
                  l = e("../../../shared/constants/app"),
                  c = e("../../../app/scripts/lib/util"),
                  u = e("../../ducks/history/history"),
                  d = e("../../../shared/modules/hexstring-utils"),
                  p = e("../../helpers/constants/routes"),
                  f = (a = e("./settings.component")) && a.__esModule ? a : { default: a };
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
                n.default = (0, r.compose)(
                  o.withRouter,
                  (0, s.connect)((e, t) => {
                    const { location: n } = t,
                      { pathname: a } = n,
                      {
                        metamask: { conversionDate: r }
                      } = e,
                      s = a.match(/[^/]+$/u)[0],
                      o = s.includes("0x"),
                      f = Boolean(a.match(p.CONTACT_ADD_ROUTE)),
                      g = Boolean(a.match(p.CONTACT_EDIT_ROUTE)),
                      h = Boolean(a.match(p.NETWORKS_FORM_ROUTE)) || Boolean(a.match(p.ADD_NETWORK_ROUTE)),
                      _ = Boolean(a.match(p.ADD_NETWORK_ROUTE)),
                      y = Boolean(a.match(p.ADD_POPULAR_CUSTOM_NETWORK)),
                      b = (0, c.getEnvironmentType)() === l.ENVIRONMENT_TYPE_POPUP,
                      v = m[a];
                    let E = p.SETTINGS_ROUTE;
                    g ? (E = `${p.CONTACT_VIEW_ROUTE}/${s}`) : o || f ? (E = p.CONTACT_LIST_ROUTE) : (h || y) && (E = p.NETWORKS_ROUTE);
                    return {
                      addNewNetwork: _,
                      addressName: (0, i.getAddressBookEntryOrAccountName)(
                        e,
                        !(0, d.isBurnAddress)(s) && (0, d.isValidHexAddress)(s, { mixedCaseUseChecksum: !0 }) ? s : ""
                      ),
                      backRoute: E,
                      conversionDate: r,
                      currentPath: a,
                      initialBreadCrumbKey: undefined,
                      initialBreadCrumbRoute: undefined,
                      isAddressEntryPage: o,
                      isPopup: b,
                      mostRecentOverviewPage: (0, u.getMostRecentOverviewPage)(e),
                      pathnameI18nKey: v
                    };
                  })
                )(f.default);
              };
            };
      },
      { package: "$root$", file: "ui/pages/settings/settings.container.js" }
    ],
    [
      5862,
      { "./snap-account-redirect-context": 5864 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SnapAccountRedirectContent", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snap-account-redirect-context")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/index.ts" }
    ],
    [
      5863,
      { "../../../components/component-library": 5242, "../../../helpers/constants/design-system": 5537, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  s = e("../../../components/component-library"),
                  o = e("../../../helpers/constants/design-system");
                const i = ({ url: e }) =>
                  r.default.createElement(s.ButtonIcon, {
                    onClick: () => {
                      global.platform.openTab({ url: e });
                    },
                    iconName: s.IconName.Export,
                    color: o.IconColor.primaryDefault,
                    size: s.ButtonIconSize.Sm,
                    ariaLabel: ""
                  });
                n.default = r.default.memo(i);
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/redirect-url-icon.tsx" }
    ],
    [
      5864,
      {
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "../../../hooks/useI18nContext": 5602,
        "./snap-account-redirect-message": 5865,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = l(e("react")),
                  r = e("../../../components/component-library"),
                  s = e("../../../helpers/constants/design-system"),
                  o = e("../../../hooks/useI18nContext"),
                  i = l(e("./snap-account-redirect-message"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                n.default = ({ url: e, snapName: t, isBlockedUrl: n, message: l }) => {
                  const c = (0, o.useI18nContext)();
                  return a.default.createElement(
                    r.Box,
                    {
                      display: s.Display.Flex,
                      flexDirection: s.FlexDirection.Row,
                      justifyContent: s.JustifyContent.spaceBetween,
                      paddingTop: 4
                    },
                    a.default.createElement(
                      r.Box,
                      { gap: 4, display: s.Display.Flex, flexDirection: s.FlexDirection.Column, alignItems: s.AlignItems.center },
                      a.default.createElement(
                        r.Text,
                        {
                          "data-testid": "snap-account-redirect-content-title",
                          textAlign: s.TextAlign.Center,
                          variant: s.TextVariant.headingLg
                        },
                        c("snapAccountRedirectFinishSigningTitle")
                      ),
                      n
                        ? a.default.createElement(
                            r.Box,
                            { display: s.Display.Flex, paddingLeft: 4, paddingRight: 4 },
                            a.default.createElement(
                              r.BannerAlert,
                              { severity: r.BannerAlertSeverity.Danger, "data-testid": "snap-account-redirect-content-blocked-url-banner" },
                              a.default.createElement(
                                r.Text,
                                null,
                                c("snapUrlIsBlocked", [
                                  a.default.createElement(
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
                      !1 === n
                        ? a.default.createElement(
                            r.Text,
                            {
                              "data-testid": "snap-account-redirect-content-description",
                              textAlign: s.TextAlign.Center,
                              variant: s.TextVariant.bodyMd
                            },
                            c("snapAccountRedirectSiteDescription", [t])
                          )
                        : null,
                      (e.length > 0 || l.length > 0) && !1 === n
                        ? a.default.createElement(i.default, { snapName: t, url: e, message: l })
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
      5865,
      {
        "../../../components/app/snaps/snap-delineator": 5085,
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "./url-display-box": 5866,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = l(e("react")),
                  r = e("../../../helpers/constants/design-system"),
                  s = e("../../../components/component-library"),
                  o = e("../../../components/app/snaps/snap-delineator"),
                  i = l(e("./url-display-box"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const c = ({ snapName: e, url: t, message: n }) =>
                  a.default.createElement(
                    o.SnapDelineator,
                    { "data-testid": "snap-account-redirect-message-container", snapName: e },
                    "" !== n
                      ? a.default.createElement(
                          s.Text,
                          { variant: r.TextVariant.bodyMd, "data-testid": "snap-account-redirect-message" },
                          n
                        )
                      : null,
                    t.length > 0
                      ? a.default.createElement(
                          s.Box,
                          { paddingTop: 2, display: r.Display.Flex },
                          a.default.createElement(i.default, { url: t })
                        )
                      : null
                  );
                n.default = a.default.memo(c);
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/snap-account-redirect-message.tsx" }
    ],
    [
      5866,
      {
        "../../../components/component-library": 5242,
        "../../../helpers/constants/design-system": 5537,
        "./redirect-url-icon": 5863,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = i(e("react")),
                  r = e("../../../helpers/constants/design-system"),
                  s = e("../../../components/component-library"),
                  o = i(e("./redirect-url-icon"));
                function i(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                const l = ({ url: e }) =>
                  a.default.createElement(
                    s.Box,
                    {
                      display: r.Display.InlineFlex,
                      backgroundColor: r.BackgroundColor.backgroundDefault,
                      alignItems: r.AlignItems.center,
                      borderWidth: 1,
                      borderRadius: r.BorderRadius.SM,
                      borderColor: r.BorderColor.borderDefault,
                      paddingRight: 4
                    },
                    a.default.createElement(
                      s.Text,
                      {
                        "data-testid": "snap-account-redirect-url-display-box",
                        padding: 2,
                        variant: r.TextVariant.bodyMd,
                        color: r.TextColor.primaryDefault
                      },
                      e
                    ),
                    a.default.createElement(o.default, { url: e })
                  );
                n.default = a.default.memo(l);
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/components/url-display-box.tsx" }
    ],
    [
      5867,
      { "./snap-account-redirect": 5868 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "SnapAccountRedirect", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snap-account-redirect")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/index.ts" }
    ],
    [
      5868,
      { "../../components/component-library": 5242, "../../helpers/constants/design-system": 5537, "./components": 5862, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a },
                  s = e("../../components/component-library"),
                  o = e("../../helpers/constants/design-system"),
                  i = e("./components");
                n.default = ({ url: e, snapName: t, isBlockedUrl: n, message: a }) =>
                  r.default.createElement(
                    s.Box,
                    {
                      className: "create-snap-account-page",
                      height: o.BlockSize.Full,
                      width: o.BlockSize.Full,
                      borderStyle: o.BorderStyle.none,
                      flexDirection: o.FlexDirection.Column,
                      alignItems: o.AlignItems.center,
                      paddingLeft: 4,
                      paddingRight: 4
                    },
                    r.default.createElement(
                      s.Box,
                      {
                        display: o.Display.Flex,
                        flexDirection: o.FlexDirection.Column,
                        alignItems: o.AlignItems.center,
                        height: o.BlockSize.Full
                      },
                      r.default.createElement(i.SnapAccountRedirectContent, { url: e, snapName: t, isBlockedUrl: n, message: a })
                    )
                  );
              };
            };
      },
      { package: "$root$", file: "ui/pages/snap-account-redirect/snap-account-redirect.tsx" }
    ],
    [
      5869,
      {},
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.KeyringSnapRemovalResultStatus = void 0);
                n.KeyringSnapRemovalResultStatus = { Success: "success", Failed: "failed", None: "none" };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snap-view/constants.ts" }
    ],
    [
      587,
      {
        "../styles/withStyles": 913,
        "@babel/runtime/helpers/extends": 216,
        "@babel/runtime/helpers/interopRequireDefault": 220,
        "@babel/runtime/helpers/interopRequireWildcard": 221,
        "@babel/runtime/helpers/objectWithoutProperties": 227,
        clsx: 2954,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                  r = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                var s = r(e("@babel/runtime/helpers/extends")),
                  o = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                  i = a(e("react")),
                  l = (r(e("prop-types")), r(e("clsx"))),
                  c = r(e("../styles/withStyles")),
                  u = {
                    root: { display: "flex", alignItems: "center", padding: 8, justifyContent: "flex-end" },
                    spacing: { "& > :not(:first-child)": { marginLeft: 8 } }
                  };
                n.styles = u;
                var d = i.forwardRef(function (e, t) {
                    var n = e.classes,
                      a = e.className,
                      r = e.disableSpacing,
                      c = void 0 !== r && r,
                      u = (0, o.default)(e, ["classes", "className", "disableSpacing"]);
                    return i.createElement("div", (0, s.default)({ className: (0, l.default)(n.root, a, !c && n.spacing), ref: t }, u));
                  }),
                  p = (0, c.default)(u, { name: "MuiAccordionActions" })(d);
                n.default = p;
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/AccordionActions/AccordionActions.js" }
    ],
    [
      5870,
      { "./snap-view": 5871 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snap-view")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snap-view/index.js" }
    ],
    [
      5871,
      {
        "../../../components/app/connected-sites-list": 4884,
        "../../../components/app/snaps/keyring-snap-removal-warning": 5075,
        "../../../components/app/snaps/snap-authorship-expanded": 5078,
        "../../../components/app/snaps/snap-delineator": 5085,
        "../../../components/app/snaps/snap-permissions-list": 5093,
        "../../../components/app/snaps/snap-remove-warning": 5097,
        "../../../components/component-library": 5242,
        "../../../components/multichain/pages/page": 5346,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/constants/snaps": 5545,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "./constants": 5869,
        "@metamask/snaps-rpc-methods": 1953,
        classnames: 2952,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = N(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-router-dom"),
                  s = e("react-redux"),
                  o = e("@metamask/snaps-rpc-methods"),
                  i = k(e("classnames")),
                  l = e("../../../hooks/useI18nContext"),
                  c = e("../../../helpers/constants/design-system"),
                  u = k(e("../../../components/app/snaps/snap-authorship-expanded")),
                  d = k(e("../../../components/app/snaps/snap-remove-warning")),
                  p = k(e("../../../components/app/connected-sites-list")),
                  f = k(e("../../../components/app/snaps/keyring-snap-removal-warning")),
                  m = e("../../../helpers/constants/routes"),
                  g = e("../../../store/actions"),
                  h = e("../../../selectors"),
                  _ = e("../../../helpers/utils/util"),
                  y = e("../../../components/component-library"),
                  b = k(e("../../../components/app/snaps/snap-permissions-list")),
                  v = e("../../../components/app/snaps/snap-delineator"),
                  E = e("../../../helpers/constants/snaps"),
                  w = e("../../../components/multichain/pages/page"),
                  T = e("./constants");
                function k(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function N(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (N = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.default = function () {
                  var e;
                  const t = (0, l.useI18nContext)(),
                    n = (0, r.useHistory)(),
                    k = (0, r.useLocation)(),
                    N = (0, a.useRef)(null),
                    { pathname: S } = k,
                    x = decodeURIComponent(S.match(/[^/]+$/u)[0]),
                    C = (0, s.useSelector)(h.getSnaps),
                    O = Object.entries(C)
                      .map(([e, t]) => t)
                      .find((e) => e.id === x),
                    [R, M] = (0, a.useState)(!1),
                    [P, I] = (0, a.useState)(!1),
                    [A, D] = (0, a.useState)(!1),
                    [j, L] = (0, a.useState)(!1),
                    [U, F] = (0, a.useState)([]),
                    B = (0, s.useSelector)(h.getMemoizedMetaMaskIdentities);
                  (0, a.useEffect)(() => {
                    O || n.push(m.SNAPS_ROUTE);
                  }, [n, O]),
                    (0, a.useEffect)(() => {
                      D(N.current && N.current.offsetHeight < N.current.scrollHeight);
                    }, [N]);
                  const W = (0, s.useSelector)((e) => (0, h.getSubjectsWithSnapPermission)(e, null == O ? void 0 : O.id)),
                    $ = (0, s.useSelector)((e) => O && (0, h.getPermissions)(e, O.id)),
                    q = (0, s.useSelector)((e) => (0, h.getPermissionSubjects)(e)),
                    V = (0, s.useSelector)((e) => (0, h.getTargetSubjectMetadata)(e, null == O ? void 0 : O.id));
                  let G = !1;
                  (G = Boolean(
                    null === (e = q[null == O ? void 0 : O.id]) || void 0 === e || null === (e = e.permissions) || void 0 === e
                      ? void 0
                      : e.snap_manageAccounts
                  )),
                    (0, a.useEffect)(() => {
                      G &&
                        (async () => {
                          const e = await (0, g.getSnapAccountsById)(O.id),
                            t = Object.values(B).filter((t) => e.includes(t.address.toLowerCase()));
                          F(t);
                        })();
                    }, [null == O ? void 0 : O.id, B, G]);
                  const H = (0, s.useDispatch)();
                  if (!O) return null;
                  const K = (0, _.getSnapName)(O.id, V),
                    z = A && !P;
                  return a.default.createElement(
                    "div",
                    { className: "snap-view" },
                    a.default.createElement(
                      w.Page,
                      { backgroundColor: c.BackgroundColor.backgroundDefault },
                      a.default.createElement(
                        w.Header,
                        {
                          backgroundColor: c.BackgroundColor.backgroundDefault,
                          startAccessory: a.default.createElement(y.ButtonIcon, {
                            ariaLabel: "Back",
                            iconName: "arrow-left",
                            size: "sm",
                            onClick: () => n.push(m.SNAPS_ROUTE)
                          })
                        },
                        K
                      ),
                      a.default.createElement(
                        w.Content,
                        { backgroundColor: c.BackgroundColor.backgroundDefault, className: "snap-view__content" },
                        a.default.createElement(
                          y.Box,
                          null,
                          a.default.createElement(u.default, { snapId: O.id, snap: O }),
                          a.default.createElement(
                            y.Box,
                            { className: "snap-view__content__description", marginTop: [4, 7] },
                            a.default.createElement(
                              v.SnapDelineator,
                              { type: E.DelineatorType.Description, snapName: K },
                              a.default.createElement(
                                y.Box,
                                { className: (0, i.default)("snap-view__content__description__wrapper", { open: P }), ref: N },
                                a.default.createElement(y.Text, null, null == O ? void 0 : O.manifest.description),
                                z &&
                                  a.default.createElement(
                                    y.Button,
                                    {
                                      className: "snap-view__content__description__more-button",
                                      type: "link",
                                      onClick: () => {
                                        I(!0);
                                      }
                                    },
                                    a.default.createElement(y.Text, { color: c.Color.infoDefault }, t("more"))
                                  )
                              )
                            )
                          ),
                          a.default.createElement(
                            y.Box,
                            { className: "snap-view__content__permissions", marginTop: 12 },
                            a.default.createElement(y.Text, { variant: c.TextVariant.bodyLgMedium }, t("permissions")),
                            a.default.createElement(b.default, {
                              snapId: x,
                              permissions: $ ?? {},
                              targetSubjectMetadata: V,
                              showOptions: !0
                            })
                          ),
                          a.default.createElement(
                            y.Box,
                            { className: "snap-view__content__connected-sites", marginTop: 12 },
                            a.default.createElement(y.Text, { variant: c.TextVariant.bodyLgMedium, marginBottom: 2 }, t("connectedSites")),
                            a.default.createElement(p.default, {
                              connectedSubjects: W,
                              onDisconnect: (e) => {
                                ((e, t) => {
                                  const n = { ...q[e].permissions[o.WALLET_SNAP_PERMISSION_KEY].caveats[0].value };
                                  delete n[t],
                                    Object.keys(n).length > 0
                                      ? H((0, g.updateCaveat)(e, o.WALLET_SNAP_PERMISSION_KEY, o.SnapCaveatType.SnapIds, n))
                                      : H((0, g.removePermissionsFor)({ [e]: [o.WALLET_SNAP_PERMISSION_KEY] }));
                                })(e, O.id);
                              }
                            })
                          ),
                          a.default.createElement(
                            y.Box,
                            { className: "snap-view__content__remove", marginTop: 12 },
                            a.default.createElement(
                              y.Text,
                              { variant: c.TextVariant.bodyLgMedium, color: c.TextColor.textDefault },
                              t("removeSnap")
                            ),
                            a.default.createElement(
                              y.Text,
                              { variant: c.TextVariant.bodyMd, color: c.TextColor.textDefault },
                              t("removeSnapDescription")
                            ),
                            a.default.createElement(
                              y.Box,
                              { marginTop: 4, display: c.Display.Flex, justifyContent: c.JustifyContent.center },
                              a.default.createElement(
                                y.Button,
                                {
                                  className: "snap-view__content__remove-button",
                                  danger: "true",
                                  variant: y.ButtonVariant.Secondary,
                                  width: c.BlockSize.Full,
                                  size: y.ButtonSize.Lg,
                                  onClick: () => M(!0),
                                  "data-testid": "remove-snap-button"
                                },
                                a.default.createElement(
                                  y.Text,
                                  {
                                    color: c.TextColor.inherit,
                                    variant: c.TextVariant.bodyMd,
                                    flexWrap: c.FlexWrap.NoWrap,
                                    ellipsis: !0,
                                    style: { overflow: "hidden" },
                                    paddingTop: 3,
                                    paddingBottom: 3
                                  },
                                  `${t("remove")} ${K}`
                                )
                              ),
                              a.default.createElement(d.default, {
                                isOpen: R && (!G || 0 === U.length) && !j,
                                onCancel: () => M(!1),
                                onSubmit: async () => {
                                  await H((0, g.removeSnap)(O.id));
                                },
                                snapName: K
                              }),
                              a.default.createElement(
                                a.default.Fragment,
                                null,
                                a.default.createElement(f.default, {
                                  snap: O,
                                  keyringAccounts: U,
                                  snapUrl: O.url,
                                  onCancel: () => M(!1),
                                  onClose: () => M(!1),
                                  onBack: () => M(!1),
                                  onSubmit: async () => {
                                    try {
                                      L(!0),
                                        await H((0, g.removeSnap)(O.id)),
                                        M(!1),
                                        H(
                                          (0, g.showKeyringSnapRemovalModal)({
                                            snapName: K,
                                            result: T.KeyringSnapRemovalResultStatus.Success
                                          })
                                        );
                                    } catch {
                                      M(!1),
                                        H(
                                          (0, g.showKeyringSnapRemovalModal)({
                                            snapName: K,
                                            result: T.KeyringSnapRemovalResultStatus.Failed
                                          })
                                        );
                                    } finally {
                                      L(!1);
                                    }
                                  },
                                  isOpen: R && G && U.length > 0
                                })
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
      { package: "$root$", file: "ui/pages/snaps/snap-view/snap-view.js" }
    ],
    [
      5872,
      { "./snap-list": 5873 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./snap-list")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/snaps/snaps-list/index.js" }
    ],
    [
      5873,
      {
        "../../../components/app/snaps/snap-list-item": 5091,
        "../../../components/component-library": 5242,
        "../../../components/multichain/pages/page": 5346,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/settings-search": 5574,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useI18nContext": 5602,
        "../../../selectors": 5958,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
                var a,
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("react-redux"),
                  o = e("react-router-dom"),
                  i = (a = e("../../../components/app/snaps/snap-list-item")) && a.__esModule ? a : { default: a },
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
                    n = new WeakMap();
                  return (h = function (e) {
                    return e ? n : t;
                  })(e);
                }
                n.default = () => {
                  const e = (0, l.useI18nContext)(),
                    t = (0, o.useHistory)(),
                    n = (0, r.useRef)();
                  (0, r.useEffect)(() => {
                    (0, p.handleSettingsRefs)(e, e("snaps"), n);
                  }, [n, e]);
                  const a = (0, s.useSelector)((e) => (0, d.getSnapsList)(e));
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
                          a.length > 0 &&
                            r.default.createElement(
                              "div",
                              { className: "snaps__content__list__body" },
                              r.default.createElement(
                                "div",
                                { className: "snaps__content__list__wrapper" },
                                a.map((e) =>
                                  r.default.createElement(i.default, {
                                    className: "snaps__content__list-item",
                                    key: e.key,
                                    packageName: e.packageName,
                                    name: e.name,
                                    onClick: () => {
                                      ((e) => {
                                        t.push((0, g.getSnapRoute)(e.id));
                                      })(e);
                                    },
                                    snapId: e.id
                                  })
                                )
                              )
                            ),
                          a.length <= 5 &&
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
                              a.length < 1 &&
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
                                      href: a.length > 0 ? "https://snaps.metamask.io/" : "https://metamask.io/snaps/",
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
    ],
    [
      5874,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/component-library": 5242,
        "../../../components/ui/box": 5373,
        "../../../components/ui/pulse-loader": 5467,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/design-system": 5537,
        "../../../helpers/constants/routes": 5542,
        "../../../selectors/selectors": 5961,
        "../swaps-footer": 5938,
        "./swap-step-icon": 5876,
        "lodash/isEqual": 4057,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    const e = (0, a.useContext)(i.I18nContext),
                      t = (0, s.useHistory)(),
                      n = (0, r.useDispatch)(),
                      b = (0, r.useSelector)(l.getFetchParams, o.default),
                      { destinationTokenInfo: v, sourceTokenInfo: E } = (null == b ? void 0 : b.metaData) || {},
                      w = (0, r.useSelector)(l.getApproveTxParams, r.shallowEqual),
                      T = (0, r.useSelector)(c.isHardwareWallet),
                      k = (0, r.useSelector)(c.getHardwareWalletType),
                      N = (0, r.useSelector)(l.getSmartTransactionsOptInStatus),
                      S = (0, r.useSelector)(l.getSmartTransactionsEnabled),
                      x = (0, r.useSelector)(l.getCurrentSmartTransactionsEnabled),
                      C = Boolean(w),
                      O = (0, a.useContext)(g.MetaMetricsContext);
                    (0, a.useEffect)(() => {
                      O({
                        event: "Awaiting Signature(s) on a HW wallet",
                        category: h.MetaMetricsEventCategory.Swaps,
                        sensitiveProperties: {
                          needs_two_confirmations: C,
                          token_from: null == E ? void 0 : E.symbol,
                          token_from_amount: null == b ? void 0 : b.value,
                          token_to: null == v ? void 0 : v.symbol,
                          request_type: null != b && b.balanceError ? "Quote" : "Order",
                          slippage: null == b ? void 0 : b.slippage,
                          custom_slippage: 2 === (null == b ? void 0 : b.slippage),
                          is_hardware_wallet: T,
                          hardware_wallet_type: k,
                          stx_enabled: S,
                          current_stx_enabled: x,
                          stx_user_opt_in: N
                        }
                      });
                    }, []);
                    const R = e(C ? "swapTwoTransactions" : "swapConfirmWithHwWallet");
                    return a.default.createElement(
                      "div",
                      { className: "awaiting-signatures" },
                      a.default.createElement(
                        p.default,
                        {
                          paddingLeft: 8,
                          paddingRight: 8,
                          height: f.BLOCK_SIZES.FULL,
                          justifyContent: f.JustifyContent.center,
                          display: f.DISPLAY.FLEX,
                          className: "awaiting-signatures__content"
                        },
                        a.default.createElement(p.default, { marginTop: 3, marginBottom: 4 }, a.default.createElement(d.default, null)),
                        a.default.createElement(_.Text, { color: f.TextColor.textDefault, variant: f.TextVariant.headingMd, as: "h3" }, R),
                        C &&
                          a.default.createElement(
                            a.default.Fragment,
                            null,
                            a.default.createElement(
                              _.Text,
                              { variant: f.TextVariant.bodyMdBold, marginTop: 2 },
                              e("swapToConfirmWithHwWallet")
                            ),
                            a.default.createElement(
                              "ul",
                              { className: "awaiting-signatures__steps" },
                              a.default.createElement(
                                "li",
                                null,
                                a.default.createElement(y.default, { stepNumber: 1 }),
                                e("swapAllowSwappingOf", [
                                  a.default.createElement(
                                    _.Text,
                                    { as: "span", variant: f.TextVariant.bodyMdBold, key: "allowToken" },
                                    null == v ? void 0 : v.symbol
                                  )
                                ])
                              ),
                              a.default.createElement(
                                "li",
                                null,
                                a.default.createElement(y.default, { stepNumber: 2 }),
                                e("swapFromTo", [
                                  a.default.createElement(
                                    _.Text,
                                    { as: "span", variant: f.TextVariant.bodyMdBold, key: "tokenFrom" },
                                    null == E ? void 0 : E.symbol
                                  ),
                                  a.default.createElement(
                                    _.Text,
                                    { as: "span", variation: f.TextVariant.bodyMdBold, key: "tokenTo" },
                                    null == v ? void 0 : v.symbol
                                  )
                                ])
                              )
                            ),
                            a.default.createElement(_.Text, { variant: f.TextVariant.bodyMd }, e("swapGasFeesSplit"))
                          )
                      ),
                      a.default.createElement(m.default, {
                        onSubmit: async () => {
                          await n((0, l.prepareToLeaveSwaps)()), t.push(u.DEFAULT_ROUTE), t.push(u.BUILD_QUOTE_ROUTE);
                        },
                        submitText: e("cancel"),
                        hideCancel: !0
                      })
                    );
                  });
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = v(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  s = e("react-router-dom"),
                  o = b(e("lodash/isEqual")),
                  i = e("../../../contexts/i18n"),
                  l = e("../../../ducks/swaps/swaps"),
                  c = e("../../../selectors/selectors"),
                  u = e("../../../helpers/constants/routes"),
                  d = b(e("../../../components/ui/pulse-loader")),
                  p = b(e("../../../components/ui/box")),
                  f = e("../../../helpers/constants/design-system"),
                  m = b(e("../swaps-footer")),
                  g = e("../../../contexts/metametrics"),
                  h = e("../../../../shared/constants/metametrics"),
                  _ = e("../../../components/component-library"),
                  y = b(e("./swap-step-icon"));
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
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-signatures/awaiting-signatures.js" }
    ],
    [
      5875,
      { "./awaiting-signatures": 5874 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./awaiting-signatures")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-signatures/index.js" }
    ],
    [
      5876,
      { "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = o);
                var a = s(e("react")),
                  r = s(e("prop-types"));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function o({ stepNumber: e = 1 }) {
                  switch (e) {
                    case 1:
                      return a.default.createElement(
                        "svg",
                        { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        a.default.createElement("circle", {
                          cx: "7",
                          cy: "7",
                          r: "6.25",
                          stroke: "var(--color-primary-default)",
                          strokeWidth: "1.5"
                        }),
                        a.default.createElement("path", {
                          d: "M6.50983 5.192H5.27783L6.14183 4H7.71783V9.68H6.50983V5.192Z",
                          fill: "var(--color-primary-default)"
                        })
                      );
                    case 2:
                      return a.default.createElement(
                        "svg",
                        { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        a.default.createElement("circle", {
                          cx: "7",
                          cy: "7",
                          r: "6.25",
                          stroke: "var(--color-primary-default)",
                          strokeWidth: "1.5"
                        }),
                        a.default.createElement("path", {
                          d: "M8.92 9.776H5V9.368C5 9.048 5.056 8.77067 5.168 8.536C5.28 8.296 5.42133 8.08533 5.592 7.904C5.768 7.71733 5.96267 7.54933 6.176 7.4C6.39467 7.25067 6.608 7.10133 6.816 6.952C6.928 6.872 7.03467 6.78933 7.136 6.704C7.24267 6.61867 7.33333 6.53067 7.408 6.44C7.488 6.34933 7.552 6.256 7.6 6.16C7.648 6.064 7.672 5.96533 7.672 5.864C7.672 5.67733 7.616 5.52 7.504 5.392C7.39733 5.25867 7.22933 5.192 7 5.192C6.88267 5.192 6.776 5.21333 6.68 5.256C6.584 5.29333 6.50133 5.344 6.432 5.408C6.368 5.472 6.31733 5.54667 6.28 5.632C6.248 5.71733 6.232 5.808 6.232 5.904H5.024C5.024 5.62667 5.07467 5.37067 5.176 5.136C5.27733 4.90133 5.41867 4.70133 5.6 4.536C5.78133 4.36533 5.99467 4.23467 6.24 4.144C6.48533 4.048 6.752 4 7.04 4C7.28 4 7.50933 4.03733 7.728 4.112C7.952 4.18667 8.14933 4.29867 8.32 4.448C8.49067 4.59733 8.62667 4.784 8.728 5.008C8.82933 5.22667 8.88 5.48267 8.88 5.776C8.88 6.032 8.85067 6.25867 8.792 6.456C8.73333 6.648 8.65067 6.824 8.544 6.984C8.44267 7.13867 8.32 7.28 8.176 7.408C8.032 7.536 7.87733 7.66133 7.712 7.784C7.64267 7.832 7.55733 7.888 7.456 7.952C7.36 8.016 7.26133 8.08267 7.16 8.152C7.064 8.22133 6.97333 8.29333 6.888 8.368C6.80267 8.44267 6.74133 8.51467 6.704 8.584H8.92V9.776Z",
                          fill: "var(--color-primary-default)"
                        })
                      );
                    default:
                      return undefined;
                  }
                }
                o.propTypes = { stepNumber: r.default.number };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-signatures/swap-step-icon.js" }
    ],
    [
      5877,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/swaps": 4766,
        "../../../../shared/lib/ui-utils": 4779,
        "../../../../shared/modules/swaps.utils": 4798,
        "../../../components/ui/mascot": 5445,
        "../../../components/ui/pulse-loader": 5467,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/routes": 5542,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../create-new-swap": 5887,
        "../swaps-footer": 5938,
        "../swaps.util": 5940,
        "../view-on-block-explorer": 5942,
        "./quotes-timeout-icon": 5879,
        "./swap-failure-icon": 5880,
        "./swap-success-icon": 5881,
        "@metamask/etherscan-link": 1370,
        events: 3331,
        "lodash/isEqual": 4057,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = M);
                var a = R(e("events")),
                  r = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = O(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  s = e("react-redux"),
                  o = R(e("prop-types")),
                  i = e("react-router-dom"),
                  l = R(e("lodash/isEqual")),
                  c = e("@metamask/etherscan-link"),
                  u = e("../../../contexts/i18n"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../../shared/constants/metametrics"),
                  f = e("../../../selectors"),
                  m = e("../../../ducks/swaps/swaps"),
                  g = R(e("../../../components/ui/mascot")),
                  h = e("../../../../shared/constants/swaps"),
                  _ = e("../../../../shared/modules/swaps.utils"),
                  y = R(e("../../../components/ui/pulse-loader")),
                  b = e("../../../helpers/constants/routes"),
                  v = e("../../../store/actions"),
                  E = e("../swaps.util"),
                  w = R(e("../swaps-footer")),
                  T = R(e("../create-new-swap")),
                  k = R(e("../view-on-block-explorer")),
                  N = e("../../../../shared/lib/ui-utils"),
                  S = R(e("./swap-failure-icon")),
                  x = R(e("./swap-success-icon")),
                  C = R(e("./quotes-timeout-icon"));
                function O(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (O = function (e) {
                    return e ? n : t;
                  })(e);
                }
                function R(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function M({ swapComplete: e, errorKey: t, txHash: n, tokensReceived: o, submittingSwap: O, txId: R }) {
                  const M = (0, r.useContext)(u.I18nContext),
                    P = (0, r.useContext)(d.MetaMetricsContext),
                    I = (0, i.useHistory)(),
                    A = (0, s.useDispatch)(),
                    D = (0, r.useRef)(new a.default()),
                    { swapMetaData: j } = (0, s.useSelector)((e) => (0, f.getFullTxData)(e, R)) || {},
                    L = (0, s.useSelector)(m.getFetchParams, l.default),
                    U = (0, s.useSelector)(m.getFromTokenInputValue),
                    F = (0, s.useSelector)(m.getMaxSlippage),
                    B = (0, s.useSelector)(m.getUsedQuote, l.default),
                    W = (0, s.useSelector)(m.getApproveTxParams, s.shallowEqual),
                    $ = (0, s.useSelector)(m.getUsedSwapsGasPrice),
                    q = (0, s.useSelector)(f.getCurrentCurrency),
                    V = (0, s.useSelector)(f.getUSDConversionRate),
                    G = (0, s.useSelector)(f.getCurrentChainId),
                    H = (0, s.useSelector)(f.getRpcPrefsForCurrentProvider, s.shallowEqual),
                    [K, z] = (0, r.useState)(!1);
                  let Y;
                  if (B && $) {
                    var Q;
                    Y = (0, E.getRenderableNetworkFeesForQuote)({
                      tradeGas: B.gasEstimateWithRefund || B.averageGas,
                      approveGas: (null == W ? void 0 : W.gas) || "0x0",
                      gasPrice: $,
                      currentCurrency: q,
                      conversionRate: V,
                      tradeValue: null == B || null === (Q = B.trade) || void 0 === Q ? void 0 : Q.value,
                      sourceSymbol: null == j ? void 0 : j.token_from,
                      sourceAmount: B.sourceAmount,
                      chainId: G
                    }).rawNetworkFees;
                  }
                  const X = (0, s.useSelector)(f.isHardwareWallet),
                    J = (0, s.useSelector)(f.getHardwareWalletType),
                    Z = (0, s.useSelector)(m.getSmartTransactionsOptInStatus),
                    ee = (0, s.useSelector)(m.getSmartTransactionsEnabled),
                    te = (0, s.useSelector)(m.getCurrentSmartTransactionsEnabled),
                    ne = {
                      token_from: null == j ? void 0 : j.token_from,
                      token_from_amount: null == j ? void 0 : j.token_from_amount,
                      token_to: null == j ? void 0 : j.token_to,
                      request_type: null != L && L.balanceError ? "Quote" : "Order",
                      slippage: null == j ? void 0 : j.slippage,
                      custom_slippage: 2 === (null == j ? void 0 : j.slippage),
                      gas_fees: Y,
                      is_hardware_wallet: X,
                      hardware_wallet_type: J,
                      stx_enabled: ee,
                      current_stx_enabled: te,
                      stx_user_opt_in: Z
                    },
                    ae = H.blockExplorerUrl ?? h.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[G] ?? null,
                    re = (0, c.getBlockExplorerLink)({ hash: n, chainId: G }, { blockExplorerUrl: ae });
                  let se, oe, ie, le, ce;
                  return (
                    t === h.OFFLINE_FOR_MAINTENANCE
                      ? ((se = M("offlineForMaintenance")),
                        (ie = M("metamaskSwapsOfflineDescription")),
                        (le = M("close")),
                        (oe = r.default.createElement(S.default, null)))
                      : t === h.SWAP_FAILED_ERROR
                      ? ((se = M("swapFailedErrorTitle")),
                        (ie = M("swapFailedErrorDescriptionWithSupportLink", [
                          r.default.createElement(
                            "a",
                            {
                              className: "awaiting-swap__support-link",
                              key: "awaiting-swap-support-link",
                              href: N.SUPPORT_LINK,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              onClick: () => {
                                P(
                                  {
                                    category: p.MetaMetricsEventCategory.Swaps,
                                    event: p.MetaMetricsEventName.SupportLinkClicked,
                                    properties: { url: N.SUPPORT_LINK }
                                  },
                                  { contextPropsIntoEventProperties: [p.MetaMetricsContextProp.PageTitle] }
                                );
                              }
                            },
                            new URL(N.SUPPORT_LINK).hostname
                          )
                        ])),
                        (le = M("tryAgain")),
                        (oe = r.default.createElement(S.default, null)),
                        (ce = re && r.default.createElement(k.default, { blockExplorerUrl: re, sensitiveTrackingProperties: ne })))
                      : t === h.QUOTES_EXPIRED_ERROR
                      ? ((se = M("swapQuotesExpiredErrorTitle")),
                        (ie = M("swapQuotesExpiredErrorDescription")),
                        (le = M("tryAgain")),
                        (oe = r.default.createElement(C.default, null)),
                        K || (z(!0), P({ event: "Quotes Timed Out", category: p.MetaMetricsEventCategory.Swaps, sensitiveProperties: ne })))
                      : t === h.ERROR_FETCHING_QUOTES
                      ? ((se = M("swapFetchingQuotesErrorTitle")),
                        (ie = M("swapFetchingQuotesErrorDescription")),
                        (le = M("back")),
                        (oe = r.default.createElement(S.default, null)))
                      : t === h.QUOTES_NOT_AVAILABLE_ERROR
                      ? ((se = M("swapQuotesNotAvailableErrorTitle")),
                        (ie = M("swapQuotesNotAvailableErrorDescription")),
                        (le = M("tryAgain")),
                        (oe = r.default.createElement(S.default, null)))
                      : t === h.CONTRACT_DATA_DISABLED_ERROR
                      ? ((se = M("swapContractDataDisabledErrorTitle")),
                        (ie = M("swapContractDataDisabledErrorDescription")),
                        (le = M("tryAgain")),
                        (oe = r.default.createElement(S.default, null)))
                      : t || e
                      ? !t &&
                        e &&
                        ((se = M("swapTransactionComplete")),
                        (oe = r.default.createElement(x.default, null)),
                        (le = M("close")),
                        (ie = M("swapTokenAvailable", [
                          r.default.createElement(
                            "span",
                            { key: "swapTokenAvailable-2", className: "awaiting-swap__amount-and-symbol" },
                            `${o || ""} ${null == j ? void 0 : j.token_to}`
                          )
                        ])),
                        (ce = re && r.default.createElement(k.default, { blockExplorerUrl: re, sensitiveTrackingProperties: ne })))
                      : ((se = M("swapProcessing")),
                        (oe = r.default.createElement(y.default, null)),
                        (le = M("swapsViewInActivity")),
                        (ie = M("swapOnceTransactionHasProcess", [
                          r.default.createElement(
                            "span",
                            {
                              key: "swapOnceTransactionHasProcess-1",
                              className: "awaiting-swap__amount-and-symbol",
                              "data-testid": "awaiting-swap-amount-and-symbol"
                            },
                            null == j ? void 0 : j.token_to
                          )
                        ])),
                        (ce = re && r.default.createElement(k.default, { blockExplorerUrl: re, sensitiveTrackingProperties: ne }))),
                    (0, r.useEffect)(() => {
                      t && A((0, v.stopPollingForQuotes)());
                    }, [A, t]),
                    r.default.createElement(
                      "div",
                      { className: "awaiting-swap" },
                      r.default.createElement(
                        "div",
                        { className: "awaiting-swap__content" },
                        !(e || t) && r.default.createElement(g.default, { animationEventEmitter: D.current, width: "90", height: "90" }),
                        r.default.createElement("div", { className: "awaiting-swap__status-image" }, oe),
                        r.default.createElement("div", { className: "awaiting-swap__header", "data-testid": "awaiting-swap-header" }, se),
                        r.default.createElement(
                          "div",
                          { className: "awaiting-swap__main-description", "data-testid": "awaiting-swap-main-description" },
                          ie
                        ),
                        ce
                      ),
                      !t && e ? r.default.createElement(T.default, { sensitiveTrackingProperties: ne }) : null,
                      r.default.createElement(w.default, {
                        onSubmit: async () => {
                          t === h.OFFLINE_FOR_MAINTENANCE
                            ? (await A((0, m.prepareToLeaveSwaps)()), I.push(b.DEFAULT_ROUTE))
                            : t === h.QUOTES_EXPIRED_ERROR
                            ? (A((0, m.prepareForRetryGetQuotes)()), await A((0, m.fetchQuotesAndSetQuoteState)(I, U, F, P)))
                            : t
                            ? await A((0, m.navigateBackToBuildQuote)(I))
                            : ((0, _.isSwapsDefaultTokenSymbol)(null == j ? void 0 : j.token_to, G) ||
                                e ||
                                (await A((0, v.setDefaultHomeActiveTabName)("activity"))),
                              I.push(b.DEFAULT_ROUTE));
                        },
                        onCancel: async () => await A((0, m.navigateBackToBuildQuote)(I)),
                        submitText: le,
                        disabled: O,
                        hideCancel: t !== h.QUOTES_EXPIRED_ERROR
                      })
                    )
                  );
                }
                M.propTypes = {
                  swapComplete: o.default.bool,
                  txHash: o.default.string,
                  tokensReceived: o.default.string,
                  errorKey: o.default.oneOf([
                    h.QUOTES_EXPIRED_ERROR,
                    h.SWAP_FAILED_ERROR,
                    h.ERROR_FETCHING_QUOTES,
                    h.QUOTES_NOT_AVAILABLE_ERROR,
                    h.OFFLINE_FOR_MAINTENANCE,
                    h.CONTRACT_DATA_DISABLED_ERROR
                  ]),
                  submittingSwap: o.default.bool,
                  txId: o.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/awaiting-swap.js" }
    ],
    [
      5878,
      { "./awaiting-swap": 5877 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./awaiting-swap")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/index.js" }
    ],
    [
      5879,
      { react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "44", height: "44", viewBox: "0 0 44 44", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M22 0C9.96768 0 0.178406 9.78928 0.178406 21.8216C0.178406 33.8539 9.96768 43.6432 22 43.6432C34.0323 43.6432 43.8216 33.8539 43.8216 21.8216C43.8216 9.78929 34.0323 0 22 0ZM22 3.27324C32.2633 3.27324 40.5484 11.5583 40.5484 21.8216C40.5484 32.0849 32.2633 40.3699 22 40.3699C11.7367 40.3699 3.45164 32.0849 3.45164 21.8216C3.45164 11.5583 11.7367 3.27324 22 3.27324ZM22 6.00094C21.0961 6.00094 20.3634 6.73371 20.3634 7.63756V21.8216C20.3634 22.4269 20.6932 22.9534 21.1817 23.2366L32.5187 29.783C33.3014 30.235 34.3001 29.9692 34.752 29.1864C35.2039 28.4036 34.938 27.405 34.1553 26.953L23.6366 20.8839V7.63756C23.6366 6.73371 22.9039 6.00094 22 6.00094Z",
                        fill: "var(--color-primary-default)"
                      })
                    );
                  });
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/quotes-timeout-icon.js" }
    ],
    [
      588,
      { "./AccordionActions": 587, "@babel/runtime/helpers/interopRequireDefault": 220 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var a = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  Object.defineProperty(n, "default", {
                    enumerable: !0,
                    get: function () {
                      return r.default;
                    }
                  });
                var r = a(e("./AccordionActions"));
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/AccordionActions/index.js" }
    ],
    [
      5880,
      { react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "45", height: "39", viewBox: "0 0 45 39", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M22.203 0.424438L0.285706 38.2816H44.1203L22.203 0.424438ZM22.203 8.39436L37.2064 34.2966H7.19961L22.203 8.39436ZM20.2105 16.3643V24.3342H24.1955V16.3643H20.2105ZM20.2105 28.3192V32.3041H24.1955V28.3192",
                        fill: "var(--color-error-default)"
                      })
                    );
                  });
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/swap-failure-icon.js" }
    ],
    [
      5881,
      { react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }),
                  (n.default = function () {
                    return r.default.createElement(
                      "svg",
                      { width: "38", height: "38", viewBox: "0 0 38 38", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                      r.default.createElement("path", {
                        d: "M34.1429 19C34.1429 23.0161 32.5474 26.8678 29.7076 29.7076C26.8678 32.5474 23.0161 34.1428 19 34.1428C14.9839 34.1428 11.1322 32.5474 8.29238 29.7076C5.45254 26.8678 3.85714 23.0161 3.85714 19C3.85714 14.9838 5.45254 11.1322 8.29238 8.29237C11.1322 5.45253 14.9839 3.85713 19 3.85713C20.4386 3.85713 21.8393 4.06534 23.1643 4.44391L26.1361 1.47213C23.9404 0.563554 21.5364 0.0714111 19 0.0714111C16.5143 0.0714111 14.0529 0.561013 11.7563 1.51226C9.45983 2.46351 7.37316 3.85778 5.61548 5.61546C2.06568 9.16526 0.0714264 13.9798 0.0714264 19C0.0714264 24.0201 2.06568 28.8347 5.61548 32.3845C7.37316 34.1422 9.45983 35.5364 11.7563 36.4877C14.0529 37.4389 16.5143 37.9286 19 37.9286C24.0202 37.9286 28.8347 35.9343 32.3845 32.3845C35.9343 28.8347 37.9286 24.0201 37.9286 19H34.1429ZM11.2582 15.3657L8.58928 18.0536L17.1071 26.5714L36.0357 7.64284L33.3668 4.95498L17.1071 21.2146L11.2582 15.3657Z",
                        fill: "var(--color-success-default)"
                      })
                    );
                  });
                var a,
                  r = (a = e("react")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/awaiting-swap/swap-success-icon.js" }
    ],
    [
      5882,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../../shared/constants/swaps": 4766,
        "../../../../shared/lib/swaps-utils": 4775,
        "../../../../shared/lib/token-util.ts": 4777,
        "../../../../shared/lib/transactions-controller-utils": 4778,
        "../../../../shared/modules/conversion.utils": 4784,
        "../../../../shared/modules/string-utils": 4797,
        "../../../../shared/modules/swaps.utils": 4798,
        "../../../components/ui/actionable-message/actionable-message": 5369,
        "../../../components/ui/info-tooltip": 5431,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/metamask/metamask": 5529,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/routes": 5542,
        "../../../helpers/utils/util": 5578,
        "../../../hooks/useEqualityCheck": 5599,
        "../../../hooks/useEthFiatAmount": 5600,
        "../../../hooks/usePrevious": 5608,
        "../../../hooks/useTokenFiatAmount": 5621,
        "../../../hooks/useTokenTracker": 5622,
        "../../../hooks/useTokensToSearch": 5623,
        "../../../selectors": 5958,
        "../../../store/actions": 5965,
        "../dropdown-input-pair": 5889,
        "../dropdown-search-list": 5891,
        "../prepare-swap-page/smart-transactions-popover": 5911,
        "../slippage-buttons": 5927,
        "../swaps-footer": 5938,
        "../swaps.util": 5940,
        "@metamask/etherscan-link": 1370,
        "bignumber.js": 2804,
        classnames: 2952,
        lodash: 4071,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = G);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = $(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = W(e("bignumber.js")),
                  s = W(e("prop-types")),
                  o = e("react-redux"),
                  i = W(e("classnames")),
                  l = e("lodash"),
                  c = e("react-router-dom"),
                  u = e("@metamask/etherscan-link"),
                  d = e("../../../contexts/metametrics"),
                  p = e("../../../hooks/useTokensToSearch"),
                  f = e("../../../hooks/useEqualityCheck"),
                  m = e("../../../contexts/i18n"),
                  g = W(e("../dropdown-input-pair")),
                  h = W(e("../dropdown-search-list")),
                  _ = W(e("../slippage-buttons")),
                  y = e("../../../ducks/metamask/metamask"),
                  b = W(e("../../../components/ui/info-tooltip")),
                  v = W(e("../../../components/ui/actionable-message/actionable-message")),
                  E = e("../../../helpers/constants/routes"),
                  w = e("../../../ducks/swaps/swaps"),
                  T = e("../../../selectors"),
                  k = e("../../../helpers/utils/util"),
                  N = e("../../../hooks/usePrevious"),
                  S = e("../../../hooks/useTokenTracker"),
                  x = e("../../../hooks/useTokenFiatAmount"),
                  C = e("../../../hooks/useEthFiatAmount"),
                  O = e("../../../../shared/modules/swaps.utils"),
                  R = e("../../../../shared/constants/metametrics"),
                  M = e("../../../../shared/constants/swaps"),
                  P = e("../../../store/actions"),
                  I = e("../swaps.util"),
                  A = W(e("../swaps-footer")),
                  D = e("../../../../shared/modules/string-utils"),
                  j = e("../../../../shared/lib/transactions-controller-utils"),
                  L = e("../../../../shared/lib/token-util.ts"),
                  U = e("../../../../shared/lib/swaps-utils"),
                  F = e("../../../../shared/modules/conversion.utils"),
                  B = W(e("../prepare-swap-page/smart-transactions-popover"));
                function W(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function $(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return ($ = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const q = [
                  { name: "name", weight: 0.499 },
                  { name: "symbol", weight: 0.499 },
                  { name: "address", weight: 0.002 }
                ];
                let V;
                function G({ ethBalance: e, selectedAccountAddress: t, shuffledTokensList: n }) {
                  var s;
                  const W = (0, a.useContext)(m.I18nContext),
                    $ = (0, o.useDispatch)(),
                    G = (0, c.useHistory)(),
                    H = (0, a.useContext)(d.MetaMetricsContext),
                    [K, z] = (0, a.useState)(undefined),
                    [Y, Q] = (0, a.useState)(!1),
                    X = (0, o.useSelector)(w.getIsFeatureFlagLoaded),
                    J = (0, o.useSelector)(w.getBalanceError),
                    Z = (0, o.useSelector)(w.getFetchParams, l.isEqual),
                    { sourceTokenInfo: ee = {}, destinationTokenInfo: te = {} } = (null == Z ? void 0 : Z.metaData) || {},
                    ne = (0, o.useSelector)(y.getTokens, l.isEqual),
                    ae = (0, o.useSelector)(w.getTopAssets, l.isEqual),
                    re = (0, o.useSelector)(w.getFromToken, l.isEqual),
                    se = (0, o.useSelector)(w.getFromTokenInputValue),
                    oe = (0, o.useSelector)(w.getFromTokenError),
                    ie = (0, o.useSelector)(w.getMaxSlippage),
                    le = (0, o.useSelector)(w.getToToken, l.isEqual) || te,
                    ce = (0, o.useSelector)(T.getSwapsDefaultToken, l.isEqual),
                    ue = (0, o.useSelector)(T.getCurrentChainId),
                    de = (0, o.useSelector)(T.getRpcPrefsForCurrentProvider, o.shallowEqual),
                    pe = (0, o.useSelector)(T.getTokenList, l.isEqual),
                    fe = (0, o.useSelector)(w.getQuotes, l.isEqual),
                    me = Object.keys(fe).length > 0,
                    ge = (0, o.useSelector)(w.getLatestAddedTokenTo, l.isEqual),
                    he = (0, o.useSelector)(T.getTokenExchangeRates, l.isEqual),
                    _e = (0, o.useSelector)(y.getConversionRate),
                    ye = (0, o.useSelector)(T.getUseCurrencyRateCheck),
                    be = (0, o.useSelector)(T.isHardwareWallet),
                    ve = (0, o.useSelector)(T.getHardwareWalletType),
                    Ee = (0, o.useSelector)(w.getSmartTransactionsOptInStatus),
                    we = (0, o.useSelector)(w.getSmartTransactionsEnabled),
                    Te = (0, o.useSelector)(w.getCurrentSmartTransactionsEnabled),
                    ke = (0, o.useSelector)(w.getSmartTransactionFees),
                    Ne = Ee !== undefined,
                    Se = (0, o.useSelector)(w.getCurrentSmartTransactionsError),
                    xe = (0, o.useSelector)(T.getCurrentCurrency),
                    Ce = we && !Ne,
                    Oe = (0, O.isSwapsDefaultTokenSymbol)(null == ee ? void 0 : ee.symbol, ue) ? ce : ee,
                    { loading: Re, tokensWithBalances: Me } = (0, S.useTokenTracker)({ tokens: ne }),
                    Pe = !(0, O.isSwapsDefaultTokenSymbol)(null == re ? void 0 : re.symbol, ue) && null != re && re.balance ? [re] : [],
                    Ie = (0, l.uniqBy)([...Me, ...ne, ...Pe], "address"),
                    Ae = (0, f.useEqualityCheck)(Ie),
                    De = (0, p.getRenderableTokenData)(re || Oe, he, _e, xe, ue, pe),
                    je = (0, p.useTokensToSearch)({
                      usersTokens: Ae,
                      topTokens: ae,
                      shuffledTokensList: n,
                      tokenBucketPriority: M.TokenBucketPriority.owned
                    }),
                    Le = (0, p.useTokensToSearch)({
                      usersTokens: Ae,
                      topTokens: ae,
                      shuffledTokensList: n,
                      tokenBucketPriority: M.TokenBucketPriority.top
                    }),
                    Ue = je.find(({ address: e }) => (0, D.isEqualCaseInsensitive)(e, null == le ? void 0 : le.address)) || le,
                    Fe = (null == Ue ? void 0 : Ue.address) && !(0, O.isSwapsDefaultTokenAddress)(null == Ue ? void 0 : Ue.address, ue),
                    Be = Number((null == Ue ? void 0 : Ue.occurances) || (null == Ue ? void 0 : Ue.occurrences) || 0),
                    { address: We, symbol: $e, string: qe, decimals: Ve, balance: Ge } = De || {},
                    { address: He } = Ue || {},
                    Ke = Ge && (0, j.calcTokenAmount)(Ge, Ve).toString(10),
                    ze = (0, N.usePrevious)(Ke),
                    Ye = (0, x.useTokenFiatAmount)(We, se || 0, $e, { showFiat: ye }, !0),
                    Qe = (0, C.useEthFiatAmount)(se || 0, { showFiat: ye }, !0),
                    Xe = (0, O.isSwapsDefaultTokenSymbol)($e, ue) ? Qe : Ye,
                    Je = (0, a.useCallback)(
                      (e, t) => {
                        $((0, w.setFromTokenInputValue)(e));
                        const n = new r.default(e || 0).gt(t || 0);
                        J !== n && $((0, w.setBalanceError)(n)),
                          $((0, w.setFromTokenError)(re && (0, I.countDecimals)(e) > re.decimals ? "tooManyDecimals" : null));
                      },
                      [$, re, J]
                    ),
                    Ze = (e) => {
                      null != e && e.address && !Xe && null !== K
                        ? (0, I.fetchTokenPrice)(e.address).then((e) => {
                            null !== e && e !== undefined && z(e);
                          })
                        : z(null),
                        null != e &&
                          e.address &&
                          !Ae.find((t) => (0, D.isEqualCaseInsensitive)(t.address, e.address)) &&
                          (0, L.fetchTokenBalance)(e.address, t, global.ethereumProvider).then((t) => {
                            if (null != t && t.balance) {
                              const n = t.balance.toString(10),
                                a = (0, j.calcTokenAmount)(n, e.decimals);
                              $((0, w.setSwapsFromToken)({ ...e, string: a.toString(10), balance: n }));
                            }
                          }),
                        $((0, w.setSwapsFromToken)(e)),
                        Je(null != e && e.address ? se : "", e.string, e.decimals);
                    },
                    et = (0, u.getTokenTrackerLink)(Ue.address, ue, null, null, {
                      blockExplorerUrl: M.SWAPS_CHAINID_DEFAULT_BLOCK_EXPLORER_URL_MAP[ue] ?? null
                    }),
                    tt = de.blockExplorerUrl ? (0, k.getURLHostName)(et) : W("etherscan"),
                    { address: nt } = le || {},
                    at = (0, a.useCallback)(
                      (e) => {
                        ge && e.address !== nt && $((0, P.ignoreTokens)({ tokensToIgnore: nt, dontShowLoadingIndicator: !0 })),
                          $((0, w.setSwapToToken)(e)),
                          Q(!1);
                      },
                      [$, ge, nt]
                    ),
                    rt = (0, a.useCallback)((e) => (0, D.isEqualCaseInsensitive)(e.address, We), [We]),
                    st = Me.find((e) => (0, D.isEqualCaseInsensitive)(e.address, null == re ? void 0 : re.address)),
                    ot = (0, N.usePrevious)(st);
                  (0, a.useEffect)(() => {
                    const e = !(0, O.isSwapsDefaultTokenAddress)(null == st ? void 0 : st.address, ue),
                      t = (0, D.isEqualCaseInsensitive)(null == st ? void 0 : st.address, null == ot ? void 0 : ot.address),
                      n = (null == st ? void 0 : st.balance) !== (null == ot ? void 0 : ot.balance);
                    e &&
                      t &&
                      n &&
                      $(
                        (0, w.setSwapsFromToken)({
                          ...re,
                          balance: null == st ? void 0 : st.balance,
                          string: null == st ? void 0 : st.string
                        })
                      );
                  }, [$, st, ot, re, ue]),
                    (0, a.useEffect)(() => {
                      (0, O.isSwapsDefaultTokenAddress)(null == re ? void 0 : re.address, ue) &&
                        (null == re ? void 0 : re.balance) !== (0, F.hexToDecimal)(e) &&
                        $(
                          (0, w.setSwapsFromToken)({
                            ...re,
                            balance: (0, F.hexToDecimal)(e),
                            string: (0, F.getValueFromWeiHex)({ value: e, numberOfDecimals: 4, toDenomination: "ETH" })
                          })
                        );
                    }, [$, re, e, ue]),
                    (0, a.useEffect)(() => {
                      ze !== Ke && Je(se, Ke);
                    }, [Je, ze, se, Ke]);
                  const it = (0, a.useCallback)(() => {
                    H({
                      event: "Build Quote Page Loaded",
                      category: R.MetaMetricsEventCategory.Swaps,
                      sensitiveProperties: {
                        is_hardware_wallet: be,
                        hardware_wallet_type: ve,
                        stx_enabled: we,
                        current_stx_enabled: Te,
                        stx_user_opt_in: Ee
                      }
                    });
                  }, [H, be, ve, we, Te, Ee]);
                  (0, a.useEffect)(() => {
                    $((0, P.resetSwapsPostFetchState)()), $((0, w.setReviewSwapClickedTimestamp)()), it();
                  }, [$, it]),
                    (0, a.useEffect)(() => {
                      we && null != ke && ke.tradeTxFees && (0, P.clearSmartTransactionFees)();
                    }, [we, ke]);
                  const lt = () =>
                    a.default.createElement(
                      "a",
                      {
                        className: "build-quote__token-etherscan-link build-quote__underline",
                        key: "build-quote-etherscan-link",
                        onClick: () => {
                          H({
                            event: R.MetaMetricsEventName.ExternalLinkClicked,
                            category: R.MetaMetricsEventCategory.Swaps,
                            properties: {
                              link_type: R.MetaMetricsEventLinkType.TokenTracker,
                              location: "Swaps Confirmation",
                              url_domain: (0, k.getURLHostName)(et)
                            }
                          }),
                            global.platform.openTab({ url: et });
                        },
                        target: "_blank",
                        rel: "noopener noreferrer"
                      },
                      tt
                    );
                  let ct = "";
                  et &&
                    (1 === Be
                      ? (ct = W("verifyThisTokenOn", [a.default.createElement(lt, { key: "block-explorer-link" })]))
                      : 0 === Be &&
                        (ct = W("verifyThisUnconfirmedTokenOn", [a.default.createElement(lt, { key: "block-explorer-link" })])));
                  const ut = W("swapYourTokenBalance", [
                      qe || "0",
                      $e || (null === (s = M.SWAPS_CHAINID_DEFAULT_TOKEN_MAP[ue]) || void 0 === s ? void 0 : s.symbol) || ""
                    ]),
                    dt = (0, U.shouldEnableDirectWrapping)(ue, We, Ue.address),
                    pt =
                      oe ||
                      !X ||
                      !Number(se) ||
                      !(null != Ue && Ue.address) ||
                      !We ||
                      Number(ie) < 0 ||
                      Number(ie) > M.MAX_ALLOWED_SLIPPAGE ||
                      (Fe && Be < 2 && !Y);
                  return (
                    (0, a.useEffect)(() => {
                      $((0, P.clearSwapsQuotes)()), $((0, P.stopPollingForQuotes)());
                      return (
                        (V = setTimeout(() => {
                          (V = null),
                            pt ||
                              (async () => {
                                await $((0, w.fetchQuotesAndSetQuoteState)(G, se, ie, H, !0));
                              })();
                        }, 1e3)),
                        () => clearTimeout(V)
                      );
                    }, [$, G, ie, H, pt, se, We, He, Ee]),
                    a.default.createElement(
                      "div",
                      { className: "build-quote" },
                      a.default.createElement(
                        "div",
                        { className: "build-quote__content" },
                        a.default.createElement(B.default, {
                          onEnableSmartTransactionsClick: () => (0, P.setSmartTransactionsOptInStatus)(!0, Ee),
                          onCloseSmartTransactionsOptInPopover: (e) => {
                            null == e || e.preventDefault(), (0, P.setSmartTransactionsOptInStatus)(!1, Ee);
                          },
                          isOpen: Ce
                        }),
                        a.default.createElement(
                          "div",
                          { className: "build-quote__dropdown-input-pair-header" },
                          a.default.createElement("div", { className: "build-quote__input-label" }, W("swapSwapFrom")),
                          !(0, O.isSwapsDefaultTokenSymbol)($e, ue) &&
                            a.default.createElement(
                              "div",
                              {
                                className: "build-quote__max-button",
                                "data-testid": "build-quote__max-button",
                                onClick: () => Je(Ke || "0", Ke)
                              },
                              W("max")
                            )
                        ),
                        a.default.createElement(g.default, {
                          onSelect: Ze,
                          itemsToSearch: je,
                          onInputChange: (e) => {
                            Je(e, Ke);
                          },
                          inputValue: se,
                          leftValue: se && Xe,
                          selectedItem: De,
                          maxListItems: 30,
                          loading: Re && (!(null != je && je.length) || !ae || !Object.keys(ae).length),
                          selectPlaceHolderText: W("swapSelect"),
                          hideItemIf: (e) => (0, D.isEqualCaseInsensitive)(e.address, null == Ue ? void 0 : Ue.address),
                          listContainerClassName: "build-quote__open-dropdown",
                          autoFocus: !0
                        }),
                        a.default.createElement(
                          "div",
                          { className: (0, i.default)("build-quote__balance-message", { "build-quote__balance-message--error": J || oe }) },
                          !oe && !J && $e && ut,
                          !oe &&
                            J &&
                            $e &&
                            a.default.createElement(
                              "div",
                              { className: "build-quite__insufficient-funds" },
                              a.default.createElement(
                                "div",
                                { className: "build-quite__insufficient-funds-first" },
                                W("swapsNotEnoughForTx", [$e])
                              ),
                              a.default.createElement("div", { className: "build-quite__insufficient-funds-second" }, ut)
                            ),
                          oe &&
                            a.default.createElement(
                              a.default.Fragment,
                              null,
                              a.default.createElement(
                                "div",
                                { className: "build-quote__form-error" },
                                W("swapTooManyDecimalsError", [$e, Ve])
                              ),
                              a.default.createElement("div", null, ut)
                            )
                        ),
                        a.default.createElement(
                          "div",
                          { className: "build-quote__swap-arrows-row" },
                          a.default.createElement(
                            "button",
                            {
                              className: "build-quote__swap-arrows",
                              "data-testid": "build-quote__swap-arrows",
                              onClick: () => {
                                at(De), Ze(Ue);
                              }
                            },
                            a.default.createElement("i", { className: "fa fa-arrow-up", title: W("swapSwapSwitch") }),
                            a.default.createElement("i", { className: "fa fa-arrow-down", title: W("swapSwapSwitch") })
                          )
                        ),
                        a.default.createElement(
                          "div",
                          { className: "build-quote__dropdown-swap-to-header" },
                          a.default.createElement("div", { className: "build-quote__input-label" }, W("swapSwapTo"))
                        ),
                        a.default.createElement(
                          "div",
                          { className: "dropdown-input-pair dropdown-input-pair__to" },
                          a.default.createElement(h.default, {
                            startingItem: Ue,
                            itemsToSearch: Le,
                            fuseSearchKeys: q,
                            selectPlaceHolderText: W("swapSelectAToken"),
                            maxListItems: 30,
                            onSelect: at,
                            loading: Re && (!(null != Le && Le.length) || !ae || !Object.keys(ae).length),
                            externallySelectedItem: Ue,
                            hideItemIf: rt,
                            listContainerClassName: "build-quote__open-to-dropdown",
                            hideRightLabels: !0,
                            defaultToAll: !0,
                            shouldSearchForImports: !0
                          })
                        ),
                        Fe &&
                          (Be < 2
                            ? a.default.createElement(v.default, {
                                type: 1 === Be ? "warning" : "danger",
                                message: a.default.createElement(
                                  "div",
                                  { className: "build-quote__token-verification-warning-message" },
                                  a.default.createElement(
                                    "div",
                                    { className: "build-quote__bold" },
                                    W(1 === Be ? "swapTokenVerificationOnlyOneSource" : "swapTokenVerificationAddedManually")
                                  ),
                                  a.default.createElement("div", null, ct)
                                ),
                                primaryAction: Y ? null : { label: W("continue"), onClick: () => Q(!0) },
                                withRightButton: !0,
                                infoTooltipText: et && W("swapVerifyTokenExplanation", [tt])
                              })
                            : a.default.createElement(
                                "div",
                                { className: "build-quote__token-message" },
                                a.default.createElement(
                                  "span",
                                  { className: "build-quote__bold", key: "token-verification-bold-text" },
                                  W("swapTokenVerificationSources", [Be])
                                ),
                                et &&
                                  a.default.createElement(
                                    a.default.Fragment,
                                    null,
                                    W("swapTokenVerificationMessage", [
                                      a.default.createElement(
                                        "a",
                                        {
                                          className: "build-quote__token-etherscan-link",
                                          key: "build-quote-etherscan-link",
                                          onClick: () => {
                                            H({
                                              event: "Clicked Block Explorer Link",
                                              category: R.MetaMetricsEventCategory.Swaps,
                                              properties: {
                                                link_type: "Token Tracker",
                                                action: "Swaps Confirmation",
                                                block_explorer_domain: (0, k.getURLHostName)(et)
                                              }
                                            }),
                                              global.platform.openTab({ url: et });
                                          },
                                          target: "_blank",
                                          rel: "noopener noreferrer"
                                        },
                                        tt
                                      )
                                    ]),
                                    a.default.createElement(b.default, {
                                      position: "top",
                                      contentText: W("swapVerifyTokenExplanation", [tt]),
                                      containerClassName: "build-quote__token-tooltip-container",
                                      key: "token-verification-info-tooltip"
                                    })
                                  )
                              )),
                        (we || (!we && !dt)) &&
                          a.default.createElement(
                            "div",
                            { className: "build-quote__slippage-buttons-container" },
                            a.default.createElement(_.default, {
                              onSelect: (e) => {
                                $((0, w.setMaxSlippage)(e));
                              },
                              maxAllowedSlippage: M.MAX_ALLOWED_SLIPPAGE,
                              currentSlippage: ie,
                              smartTransactionsEnabled: we,
                              smartTransactionsOptInStatus: Ee,
                              setSmartTransactionsOptInStatus: P.setSmartTransactionsOptInStatus,
                              currentSmartTransactionsError: Se,
                              isDirectWrappingEnabled: dt
                            })
                          )
                      ),
                      a.default.createElement(A.default, {
                        onSubmit: async () => {
                          $((0, w.setReviewSwapClickedTimestamp)(Date.now())),
                            V
                              ? (clearTimeout(V), $((0, w.fetchQuotesAndSetQuoteState)(G, se, ie, H)))
                              : me
                              ? G.push(E.VIEW_QUOTE_ROUTE)
                              : (await $((0, P.setBackgroundSwapRouteState)("loading")), G.push(E.LOADING_QUOTES_ROUTE));
                        },
                        submitText: W("swapReviewSwap"),
                        disabled: pt,
                        hideCancel: !0,
                        showTermsOfService: !0
                      })
                    )
                  );
                }
                G.propTypes = {
                  ethBalance: s.default.string,
                  selectedAccountAddress: s.default.string,
                  shuffledTokensList: s.default.array
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/build-quote/build-quote.js" }
    ],
    [
      5883,
      { "./build-quote": 5882 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./build-quote")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/build-quote/index.js" }
    ],
    [
      5884,
      {
        "../../../../shared/constants/time": 4768,
        "../../../components/ui/info-tooltip": 5431,
        "../../../contexts/i18n": 5514,
        "../../../ducks/swaps/swaps": 5533,
        classnames: 2952,
        luxon: 4087,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = _);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  s = p(e("prop-types")),
                  o = p(e("classnames")),
                  i = e("luxon"),
                  l = e("../../../contexts/i18n"),
                  c = p(e("../../../components/ui/info-tooltip")),
                  u = e("../../../ducks/swaps/swaps"),
                  d = e("../../../../shared/constants/time");
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
                  return n - (e - t);
                }
                function g(e) {
                  return Math.max(e - d.SECOND, 0);
                }
                function h(e, t) {
                  const [n, a] = t.split(":");
                  return e <= (60 * Number(n) + Number(a)) * d.SECOND;
                }
                function _({ timeStarted: e, timeOnly: t, timerBase: n, warningTime: s, labelKey: p, infoTooltipLabelKey: f }) {
                  const _ = (0, a.useContext)(l.I18nContext),
                    y = (0, a.useRef)(),
                    b = (0, a.useRef)(),
                    v = (0, r.useSelector)(u.getSwapsQuoteRefreshTime),
                    E = (0, r.useSelector)(u.getSwapsQuotePrefetchingRefreshTime),
                    w = b.current ? v : E,
                    T = Number(n) || w,
                    [k, N] = (0, a.useState)(() => Date.now()),
                    [S, x] = (0, a.useState)(() => m(k, e, T));
                  (0, a.useEffect)(
                    () => (
                      y.current === undefined &&
                        (y.current = setInterval(() => {
                          x(g);
                        }, d.SECOND)),
                      function () {
                        clearInterval(y.current);
                      }
                    ),
                    []
                  ),
                    (0, a.useEffect)(() => {
                      if ((b.current || (b.current = e || Date.now()), 0 === S && e !== b.current)) {
                        b.current = e;
                        const t = Date.now();
                        N(t),
                          x(m(t, e, T)),
                          clearInterval(y.current),
                          (y.current = setInterval(() => {
                            x(g);
                          }, d.SECOND));
                      }
                    }, [e, S, T]);
                  const C = i.Duration.fromMillis(S).toFormat("m:ss");
                  let O;
                  return (
                    t
                      ? (O = a.default.createElement("div", { className: "countdown-timer__time" }, C))
                      : p &&
                        (O = _(p, [a.default.createElement("div", { key: "countdown-time-1", className: "countdown-timer__time" }, C)])),
                    a.default.createElement(
                      "div",
                      { className: "countdown-timer" },
                      a.default.createElement(
                        "div",
                        {
                          "data-testid": "countdown-timer__timer-container",
                          className: (0, o.default)("countdown-timer__timer-container", {
                            "countdown-timer__timer-container--warning": s && h(S, s)
                          })
                        },
                        O
                      ),
                      !t && f ? a.default.createElement(c.default, { position: "bottom", contentText: _(f) }) : null
                    )
                  );
                }
                _.propTypes = {
                  timeStarted: s.default.number,
                  timeOnly: s.default.bool,
                  timerBase: s.default.number,
                  warningTime: s.default.string,
                  labelKey: s.default.string,
                  infoTooltipLabelKey: s.default.string
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/countdown-timer/countdown-timer.js" }
    ],
    [
      5885,
      { "./countdown-timer": 5884 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./countdown-timer")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/countdown-timer/index.js" }
    ],
    [
      5886,
      {
        "../../../../shared/constants/metametrics": 4758,
        "../../../components/ui/box": 5373,
        "../../../contexts/i18n": 5514,
        "../../../contexts/metametrics": 5515,
        "../../../ducks/swaps/swaps": 5533,
        "../../../helpers/constants/routes": 5542,
        "../../../selectors": 5958,
        "lodash/isEqual": 4057,
        "prop-types": 4219,
        react: 4475,
        "react-redux": 4440,
        "react-router-dom": 4460
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = _);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = h(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = e("react-redux"),
                  s = g(e("prop-types")),
                  o = e("react-router-dom"),
                  i = g(e("lodash/isEqual")),
                  l = g(e("../../../components/ui/box")),
                  c = e("../../../contexts/i18n"),
                  u = e("../../../contexts/metametrics"),
                  d = e("../../../../shared/constants/metametrics"),
                  p = e("../../../ducks/swaps/swaps"),
                  f = e("../../../helpers/constants/routes"),
                  m = e("../../../selectors");
                function g(e) {
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
                function _({ sensitiveTrackingProperties: e }) {
                  const t = (0, a.useContext)(c.I18nContext),
                    n = (0, a.useContext)(u.MetaMetricsContext),
                    s = (0, r.useDispatch)(),
                    g = (0, o.useHistory)(),
                    h = (0, r.useSelector)(m.getSwapsDefaultToken, i.default);
                  return a.default.createElement(
                    l.default,
                    { marginBottom: 3, className: "create-new-swap" },
                    a.default.createElement(
                      "button",
                      {
                        onClick: async () => {
                          n({ event: "Make Another Swap", category: d.MetaMetricsEventCategory.Swaps, sensitiveProperties: e }),
                            g.push(f.DEFAULT_ROUTE),
                            await s((0, p.navigateBackToBuildQuote)(g)),
                            s((0, p.setSwapsFromToken)(h));
                        }
                      },
                      t("makeAnotherSwap")
                    )
                  );
                }
                _.propTypes = { sensitiveTrackingProperties: s.default.object.isRequired };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/create-new-swap/create-new-swap.js" }
    ],
    [
      5887,
      { "./create-new-swap": 5886 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./create-new-swap")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/create-new-swap/index.js" }
    ],
    [
      5888,
      { "../../../components/ui/text-field": 5491, "../dropdown-search-list": 5891, classnames: 2952, "prop-types": 4219, react: 4475 },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = p);
                var a = (function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
                    var n = c(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = { __proto__: null },
                      r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var s in e)
                      if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, s, o) : (a[s] = e[s]);
                      }
                    return (a.default = e), n && n.set(e, a), a;
                  })(e("react")),
                  r = l(e("prop-types")),
                  s = l(e("classnames")),
                  o = l(e("../dropdown-search-list")),
                  i = l(e("../../../components/ui/text-field"));
                function l(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e) {
                  if ("function" != typeof WeakMap) return null;
                  var t = new WeakMap(),
                    n = new WeakMap();
                  return (c = function (e) {
                    return e ? n : t;
                  })(e);
                }
                const u = { 1: 5.86, 2: 10.05, 3: 10.45, 4: 11.1, 5: 10, 6: 10.06, 7: 9.17, 8: 10.28, 9: 10.06, 0: 11.22, ".": 4.55 },
                  d = (e) =>
                    String(e)
                      .split("")
                      .reduce((e, t) => e + u[t], 12);
                function p({
                  itemsToSearch: e = [],
                  onInputChange: t,
                  inputValue: n = "",
                  onSelect: r,
                  leftValue: l,
                  selectedItem: c,
                  SearchListPlaceholder: u,
                  maxListItems: p,
                  selectPlaceHolderText: f,
                  loading: m,
                  hideItemIf: g,
                  listContainerClassName: h,
                  autoFocus: _
                }) {
                  const [y, b] = (0, a.useState)(!1),
                    v = (0, a.useRef)(),
                    [E, w] = (0, a.useState)(null);
                  return (
                    (0, a.useEffect)(() => {
                      var e;
                      w(
                        ((null == v || null === (e = v.current) || void 0 === e || null === (e = e.getBoundingClientRect()) || void 0 === e
                          ? void 0
                          : e.width) || 0) +
                          d(n || "") >
                          137
                      );
                    }, [n, v]),
                    a.default.createElement(
                      "div",
                      { className: "dropdown-input-pair" },
                      a.default.createElement(o.default, {
                        itemsToSearch: e,
                        SearchListPlaceholder: u,
                        fuseSearchKeys: [
                          { name: "name", weight: 0.499 },
                          { name: "symbol", weight: 0.499 },
                          { name: "address", weight: 0.002 }
                        ],
                        maxListItems: p,
                        onOpen: () => b(!0),
                        onClose: () => b(!1),
                        onSelect: r,
                        className: y ? "dropdown-input-pair__list--full-width" : "",
                        externallySelectedItem: c,
                        selectPlaceHolderText: f,
                        selectorClosedClassName: "dropdown-input-pair__selector--closed",
                        listContainerClassName: h,
                        loading: m,
                        hideItemIf: g,
                        defaultToAll: !0
                      }),
                      !y &&
                        a.default.createElement(i.default, {
                          className: (0, s.default)("dropdown-input-pair__input", { "dropdown-input-pair__two-line-input": E }),
                          type: "text",
                          placeholder: "0",
                          onChange: (e) => {
                            e.stopPropagation();
                            const a = "." === e.target.value ? "0." : e.target.value;
                            "" === a || /^(\.\d+|\d+(\.\d+)?|\d+\.)$/u.test(a) ? t(a) : t(n || "");
                          },
                          fullWidth: !0,
                          margin: "dense",
                          value: n,
                          autoFocus: _
                        }),
                      !y &&
                        l &&
                        a.default.createElement(
                          "div",
                          {
                            className: (0, s.default)("dropdown-input-pair__left-value", {
                              "dropdown-input-pair__left-value--two-lines": E
                            }),
                            ref: v
                          },
                          "≈ ",
                          l
                        )
                    )
                  );
                }
                p.propTypes = {
                  itemsToSearch: r.default.array,
                  onInputChange: r.default.func,
                  inputValue: r.default.oneOfType([r.default.number, r.default.string]),
                  onSelect: r.default.func,
                  leftValue: r.default.string,
                  selectedItem: r.default.object,
                  SearchListPlaceholder: r.default.func,
                  maxListItems: r.default.number,
                  selectPlaceHolderText: r.default.string,
                  loading: r.default.bool,
                  hideItemIf: r.default.func,
                  listContainerClassName: r.default.string,
                  autoFocus: r.default.bool
                };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/dropdown-input-pair/dropdown-input-pair.js" }
    ],
    [
      5889,
      { "./dropdown-input-pair": 5888 },
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
                      return r.default;
                    }
                  });
                var a,
                  r = (a = e("./dropdown-input-pair")) && a.__esModule ? a : { default: a };
              };
            };
      },
      { package: "$root$", file: "ui/pages/swaps/dropdown-input-pair/index.js" }
    ],
    [
      589,
      {
        "../styles/withStyles": 913,
        "@babel/runtime/helpers/extends": 216,
        "@babel/runtime/helpers/interopRequireDefault": 220,
        "@babel/runtime/helpers/interopRequireWildcard": 221,
        "@babel/runtime/helpers/objectWithoutProperties": 227,
        clsx: 2954,
        "prop-types": 4219,
        react: 4475
      },
      function () {
        with (this.scopeTerminator)
          with (this.globalThis)
            return function () {
              "use strict";
              return function (e, t, n) {
                var a = e("@babel/runtime/helpers/interopRequireWildcard"),
                  r = e("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = n.styles = void 0);
                var s = r(e("@babel/runtime/helpers/extends")),
                  o = r(e("@babel/runtime/helpers/objectWithoutProperties")),
                  i = a(e("react")),
                  l = (r(e("prop-types")), r(e("clsx"))),
                  c = r(e("../styles/withStyles")),
                  u = function (e) {
                    return { root: { display: "flex", padding: e.spacing(1, 2, 2) } };
                  };
                n.styles = u;
                var d = i.forwardRef(function (e, t) {
                    var n = e.classes,
                      a = e.className,
                      r = (0, o.default)(e, ["classes", "className"]);
                    return i.createElement("div", (0, s.default)({ className: (0, l.default)(n.root, a), ref: t }, r));
                  }),
                  p = (0, c.default)(u, { name: "MuiAccordionDetails" })(d);
                n.default = p;
              };
            };
      },
      { package: "@material-ui/core", file: "node_modules/@material-ui/core/AccordionDetails/AccordionDetails.js" }
    ]
  ],
  [],
  {}
);