(self.webpackChunk = self.webpackChunk || []).push([
  [6332],
  {
    85448: (t, n, e) => {
      e.r(n), e.d(n, { AccountMigrationNotificationPopup: () => i });
      var o = e(27378),
        a = e(29183);
      const i = ({ message: t, addPaymentInfo: n, close: e }) =>
        o.createElement(a.l, {
          onClose: e,
          onCtaClick: n,
          title: "Action required: Update your subscription",
          body: t,
          ctaText: "Add Billing Information",
          dataGrammarlyPart: "btnAccountMigrationNotificationClose"
        });
    },
    29183: (t, n, e) => {
      e.d(n, { l: () => c });
      var o = e(27378),
        a = e(62369),
        i = e(54001),
        r = e(56407);
      const c = ({ title: t, body: n, ctaText: e, closeText: c = "Later", dataGrammarlyPart: l, onCtaClick: s, onClose: p }) =>
        o.createElement(
          "section",
          { ...(0, i.Sh)(r.gButtonPopup, r.warningPopup) },
          o.createElement("button", { ...(0, i.Sh)(r.btn, r.close), onClick: p, "data-grammarly-part": l }),
          o.createElement("div", { className: r.warning }),
          o.createElement(
            "section",
            null,
            t && o.createElement("div", { className: r.title }, t),
            n && o.createElement("div", { className: r.text }, n),
            o.createElement(
              "section",
              { className: r.ctaBtnGroup },
              o.createElement(a.z, { kind: "primary", onClick: s, className: r.ctaButton }, e),
              o.createElement(a.z, { kind: "link", onClick: p, className: r.later }, c)
            )
          )
        );
    },
    56407: (t) => {
      t.exports = {
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
