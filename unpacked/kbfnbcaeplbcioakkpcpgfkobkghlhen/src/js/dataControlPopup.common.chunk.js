(self.webpackChunk = self.webpackChunk || []).push([
  [4254],
  {
    46436: (e, t, n) => {
      n.r(t), n.d(t, { DataControlPopup: () => l, DataControlPopupDefault: () => p });
      var o = n(42356),
        a = n(72154),
        r = n(27378),
        i = n(85441),
        c = n(56407);
      const p = (e) =>
        r.createElement(
          r.Fragment,
          null,
          r.createElement("div", { className: c.icon }),
          r.createElement("div", { className: c.title }, "Grammarly isn’t active yet!"),
          r.createElement(
            a.M,
            { clickHandler: e.openAcceptPage },
            r.createElement("button", { className: c.button }, r.createElement("span", { className: c.buttonText }, "Activate Grammarly"))
          )
        );
      class l extends r.Component {
        constructor() {
          super(...arguments),
            (this.openAcceptPage = () => {
              (0, i.OB)().bgRpc.api.openDataControl();
            });
        }
        render() {
          return r.createElement(
            "div",
            { className: (0, o.cs)(c.gButtonPopup, c.newDataControl, this.props.isFlipped && c.flipped) },
            r.createElement(a.M, { clickHandler: this.props.remove }, r.createElement("button", { className: c.close })),
            r.createElement(p, { openAcceptPage: this.openAcceptPage }),
            r.createElement("div", { className: (0, o.cs)(c.popupFooter, this.props.isFlipped && c.isFlipped) }, "▲")
          );
        }
      }
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
