(self.webpackChunk = self.webpackChunk || []).push([
  [5519],
  {
    90041: (e, t, n) => {
      n.r(t), n.d(t, { LoginSSOPopup: () => p });
      var o = n(42356),
        a = n(72154),
        r = n(27378),
        i = n(49405);
      class s extends r.Component {
        render() {
          const { institutionName: e, ssoId: t } = this.props,
            n = "GrammarlyEnrollmentToken: " + t;
          return r.createElement("div", { className: (0, o.cs)(i.edc_stripe) }, "Managed by ", r.createElement("b", { title: n }, e));
        }
      }
      var c = n(56407);
      class l extends r.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const { institutionName: e, ssoUrl: t } = this.props;
          return r.createElement(
            "div",
            { className: (0, o.cs)(c.managedSSOControl, c.settings) },
            r.createElement("div", { className: c.illustration }),
            r.createElement("p", { className: c.title }, "Grammarly isn’t active yet!"),
            r.createElement(
              "p",
              { className: c.text },
              "To begin using Grammarly, you need to sign in with SSO under the ",
              r.createElement("b", null, e),
              " ",
              "organization."
            ),
            r.createElement(
              "div",
              { className: c.signInWithSSO },
              r.createElement("a", { tabIndex: -1, target: "__blank", href: t }, "SIGN IN WITH SSO")
            )
          );
        }
      }
      const p = ({ institutionName: e, ssoId: t, ssoUrl: n, remove: i }) =>
        r.createElement(
          "div",
          { className: (0, o.cs)(c.gButtonPopup, c.loginSSOPopup) },
          r.createElement(a.M, { clickHandler: i }, r.createElement("button", { className: c.close })),
          r.createElement(l, { institutionName: e, ssoUrl: n }),
          r.createElement(s, { ssoId: t, institutionName: e })
        );
    },
    56407: (e) => {
      e.exports = {
        gButtonPopup: "diNpB",
        newDataControl: "kwuQj",
        showWrapper: "UUYhD",
        flipped: "iGBQj",
        title: "pQCa0",
        icon: "ylCbI",
        button: "TufcJ",
        buttonText: "oE1vN",
        popupFooter: "rA9f6",
        isFlipped: "hSt1p",
        settings: "H5xEt",
        loginSSOPopup: "dGc8e",
        text: "jfR06",
        bold: "K4CWO",
        link: "UAmjO",
        secondary: "EXtIt",
        firstTime: "JpYft",
        close: "OUiPJ",
        disable: "_1jcw8",
        gdocs: "TQdVK",
        gdocsBeta: "iOLvJ",
        header: "DsYvE",
        headerUnavailable: "ewgfQ",
        cardsIcon: "pNxPP",
        bubbleArrow: "UUhBD",
        unavailablePopup: "Lc8St",
        loginReminder: "H1d0B",
        permission: "RPuBs",
        buttonsContainer: "oNYLG",
        mainButton: "vJMgg",
        secondaryButton: "yRqtR",
        onboarding: "QrVo6",
        onboardingWithReminder: "njXr2",
        onboardingClose: "G0tug",
        dropdownContainer: "WJP1a",
        arrowhead: "HI72s",
        dropdownList: "Rog_Q",
        chipmunkGButtonCalloutPopup: "wmSgc",
        closeWrapper: "zd8Dn",
        containerContents: "_OFkc",
        container: "A9Cva",
        containerHeaderDefault: "p2BMe",
        containerKeyboardQRCodeImageBlock: "z7o3z",
        qrcode: "byUvC",
        containerBrandToneImageBlock: "u2hm1",
        img: "FWo6L",
        containerSnippetImageBlock: "C4IQI",
        containerLlamaAdoptionImageBlock: "DQV9Q",
        containerOwnerActivationImageBlock: "Vw5tG",
        containerGraduationImageBlock: "pFkGw",
        containerWritingProgressImageBlock: "phgXA",
        containerDunningImageBlock: "AW1D4",
        downgraded: "GNTdE",
        containerHeaderImageBlock: "VXd7r",
        containerTitle: "VF3Bz",
        containerText: "mR_zr",
        containerButton: "Al3lo",
        dismiss: "r5cHp",
        chipmunkGButtonToastPopup: "eJ4pl",
        chipmunkGButtonToastPopupDark: "dotB_",
        chipmunkGButtonToastPopupLight: "xBRlb",
        warningPopup: "HFaC5",
        btn: "Qq9h5",
        warning: "DVh7b",
        ctaBtnGroup: "_FPqK",
        ctaButton: "u6LqV",
        later: "ZFbyQ",
        managedSSOControl: "L1Rzm",
        illustration: "qESn3",
        signInWithSSO: "rq8co",
        signInWithSSO2: "wE0K3"
      };
    },
    49405: (e) => {
      e.exports = {
        windows: "ScRGR",
        setting_item: "byTue",
        fixing: "tGQgu",
        thin_text: "Zw2iF",
        footer: "VarAw",
        gr_popup_settings: "sCOqq",
        iOS: "xw90P",
        footer_btn: "dFcxY",
        short_border: "GPdi3",
        top: "a8_HB",
        content: "eJi6K",
        upgraded: "fPnHa",
        since: "KcwUv",
        business: "HH96k",
        edu: "C_xJH",
        my_grammarly: "TPdm3",
        new_document: "b5rRu",
        unsupported_site: "FV6cP",
        unsupported_item: "kI6Es",
        unsupported_title: "TvJkj",
        domain: "mbOuw",
        domain_in_details: "HyZRA",
        unsupported_temporary: "aeiHl",
        unsupported_permanently: "e63AG",
        unsupported_grammarly: "SK755",
        diamond: "z0724",
        userPanel: "bG2GY",
        email: "U4qfE",
        link: "Vrj67",
        blue: "Dstaa",
        edc_stripe: "GEFvM",
        line: "_o71L",
        not_supported: "Z9hzt",
        site_switcher: "LXeMc",
        upgrade: "BAl_v",
        def_switcher: "aVnnG",
        on: "CcnIo",
        off: "LZuFk",
        cheetahToggle: "YHW25",
        favicon: "L5Hrq",
        centered: "T0qTK",
        summary: "tuG8u",
        upgrade_title: "KRcNq",
        settingsContentWrapper: "OeKpx",
        settingsContent: "AwQr3",
        withBackground: "JRZMC",
        llamaTitle: "WnzAW",
        llamaDescription: "dDIsV",
        cheetahLabelAndButton: "WwKRI",
        cheetahLabel: "aMCQq",
        cheetahManageButton: "hfCbo",
        nobr: "wae8U"
      };
    }
  }
]);
