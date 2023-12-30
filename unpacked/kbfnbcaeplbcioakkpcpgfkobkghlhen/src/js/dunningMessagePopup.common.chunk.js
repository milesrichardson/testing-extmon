(self.webpackChunk = self.webpackChunk || []).push([
  [2064],
  {
    80727: (e, t, n) => {
      n.r(t), n.d(t, { DunningMessagePopup: () => r });
      var o = n(27378),
        a = n(29183);
      const r = ({ funnel: e, updatePayment: t, close: n }) =>
        o.createElement(a.l, {
          onClose: n,
          onCtaClick: t,
          title: `Don’t lose your ${e} features`,
          body: `Please update your billing information to avoid losing access to ${e} features.`,
          ctaText: "Update payment information",
          dataGrammarlyPart: "btnDunningMessageClose"
        });
    },
    29183: (e, t, n) => {
      n.d(t, { l: () => l });
      var o = n(27378),
        a = n(62369),
        r = n(54001),
        i = n(56407);
      const l = ({ title: e, body: t, ctaText: n, closeText: l = "Later", dataGrammarlyPart: c, onCtaClick: s, onClose: p }) =>
        o.createElement(
          "section",
          { ...(0, r.Sh)(i.gButtonPopup, i.warningPopup) },
          o.createElement("button", { ...(0, r.Sh)(i.btn, i.close), onClick: p, "data-grammarly-part": c }),
          o.createElement("div", { className: i.warning }),
          o.createElement(
            "section",
            null,
            e && o.createElement("div", { className: i.title }, e),
            t && o.createElement("div", { className: i.text }, t),
            o.createElement(
              "section",
              { className: i.ctaBtnGroup },
              o.createElement(a.z, { kind: "primary", onClick: s, className: i.ctaButton }, n),
              o.createElement(a.z, { kind: "link", onClick: p, className: i.later }, l)
            )
          )
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
    }
  }
]);
