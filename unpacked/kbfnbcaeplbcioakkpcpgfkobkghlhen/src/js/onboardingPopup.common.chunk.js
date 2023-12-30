(self.webpackChunk = self.webpackChunk || []).push([
  [7026],
  {
    36558: (t, e, n) => {
      n.r(e), n.d(e, { OnboardingPopup: () => p });
      var o = n(42356),
        a = n(26559),
        r = n(72154),
        i = n(27378),
        s = n(56407);
      class p extends i.Component {
        componentDidMount() {
          this.props.onShow();
        }
        render() {
          return i.createElement(
            "div",
            { className: (0, o.cs)(s.gButtonPopup, s.onboarding, this.props.isFlipped && s.flipped) },
            i.createElement("p", { className: s.title }, "Grammarly is Now Active"),
            i.createElement("p", { className: s.text }, "Want to see how it works?"),
            i.createElement(a.z, {
              dataGrammarlyPart: "btnTakeOnboardingTour",
              cls: "onboarding",
              styles: { width: "180px" },
              text: this.props.acceptButtonLabel || "take a quick tour",
              onClick: () => this.props.onStart()
            }),
            i.createElement(
              r.M,
              { dataGrammarlyPart: "btnCancelOnboarding", clickHandler: () => this.props.onRemove() },
              i.createElement("button", { className: s.link }, "No, thanks")
            ),
            i.createElement("div", { className: (0, o.cs)(s.popupFooter, this.props.isFlipped && s.isFlipped) }, "▲")
          );
        }
      }
    },
    26559: (t, e, n) => {
      n.d(e, { z: () => p });
      var o = n(42356),
        a = n(72154),
        r = n(27378),
        i = n(85908);
      n(9102);
      const s = ({ className: t }) =>
        r.createElement(
          "div",
          { className: `gr_-spinner ${t}` },
          r.createElement("div", { className: "gr_-bounce1" }),
          r.createElement("div", { className: "gr_-bounce2" }),
          r.createElement("div", { className: "gr_-bounce3" })
        );
      class p extends r.Component {
        constructor() {
          super(...arguments),
            (this.onClick = (t) => {
              t.preventDefault(), this.props.loading || (this.props.onClick && this.props.onClick(t));
            });
        }
        render() {
          const { loading: t, cls: e } = this.props,
            n = t ? "" : this.props.text,
            p = this.props.styles || { width: 290 },
            c = (0, o.cs)({ [i.buttonContainer]: !0, [i[e]]: void 0 !== e, [i.loading]: t });
          return r.createElement(
            "div",
            { className: c, style: p },
            t && r.createElement(s, { className: i.buttonSpinner }),
            r.createElement(
              a.M,
              { clickHandler: this.onClick, dataGrammarlyPart: this.props.dataGrammarlyPart },
              r.createElement("button", { type: "button", style: p, className: i.button }, n)
            )
          );
        }
      }
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
    },
    85908: (t) => {
      t.exports = {
        buttonContainer: "eNNNu",
        form: "MbfZN",
        buttonSpinner: "qvCG5",
        button: "jFVJS",
        loading: "k2H0g",
        onboarding: "ph6fU",
        disable: "XW_PA"
      };
    },
    9102: (t) => {
      t.exports = {};
    }
  }
]);
