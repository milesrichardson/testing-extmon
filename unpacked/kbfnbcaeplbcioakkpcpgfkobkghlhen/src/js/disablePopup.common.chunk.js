(self.webpackChunk = self.webpackChunk || []).push([
  [9822],
  {
    37660: (e, t, n) => {
      n.r(t), n.d(t, { DisablePopup: () => l });
      var o = n(42356),
        a = n(26559),
        r = n(72154),
        s = n(27378),
        i = n(56407);
      class l extends s.Component {
        constructor() {
          super(...arguments), (this.cancel = () => this.props.remove());
        }
        render() {
          return s.createElement(
            "div",
            { className: (0, o.cs)(i.gButtonPopup, i.disable, { [i.gdocs]: this.props.gdocsView }, this.props.isFlipped && i.flipped) },
            s.createElement(
              "p",
              { className: i.text },
              "Turn off Grammarly ",
              s.createElement("br", null),
              " for ",
              s.createElement("span", { className: i.bold }, this.props.domain),
              "?"
            ),
            this.props.gdocsView
              ? s.createElement(
                  () =>
                    s.createElement(
                      s.Fragment,
                      null,
                      s.createElement(a.z, {
                        cls: "disable",
                        styles: { width: 208 },
                        text: "yes, disable",
                        onClick: () => this.props.disableSite()
                      }),
                      s.createElement(
                        r.M,
                        { clickHandler: () => this.cancel() },
                        s.createElement("button", { className: i.link }, "No, don’t turn it off.")
                      )
                    ),
                  null
                )
              : s.createElement(
                  () =>
                    s.createElement(
                      s.Fragment,
                      null,
                      s.createElement(a.z, {
                        cls: "disable",
                        styles: { width: 208 },
                        text: "Yes, for this session.",
                        onClick: () => this.props.disableOnTab()
                      }),
                      s.createElement(a.z, {
                        cls: "disable",
                        styles: { width: 208 },
                        text: "Yes, from now on.",
                        onClick: () => this.props.disableSite()
                      }),
                      s.createElement(
                        r.M,
                        { clickHandler: () => this.cancel() },
                        s.createElement("button", { className: i.link }, "No, don’t turn it off.")
                      )
                    ),
                  null
                ),
            s.createElement(r.M, { clickHandler: () => this.cancel() }, s.createElement("button", { className: i.close }))
          );
        }
      }
    },
    26559: (e, t, n) => {
      n.d(t, { z: () => l });
      var o = n(42356),
        a = n(72154),
        r = n(27378),
        s = n(85908);
      n(9102);
      const i = ({ className: e }) =>
        r.createElement(
          "div",
          { className: `gr_-spinner ${e}` },
          r.createElement("div", { className: "gr_-bounce1" }),
          r.createElement("div", { className: "gr_-bounce2" }),
          r.createElement("div", { className: "gr_-bounce3" })
        );
      class l extends r.Component {
        constructor() {
          super(...arguments),
            (this.onClick = (e) => {
              e.preventDefault(), this.props.loading || (this.props.onClick && this.props.onClick(e));
            });
        }
        render() {
          const { loading: e, cls: t } = this.props,
            n = e ? "" : this.props.text,
            l = this.props.styles || { width: 290 },
            c = (0, o.cs)({ [s.buttonContainer]: !0, [s[t]]: void 0 !== t, [s.loading]: e });
          return r.createElement(
            "div",
            { className: c, style: l },
            e && r.createElement(i, { className: s.buttonSpinner }),
            r.createElement(
              a.M,
              { clickHandler: this.onClick, dataGrammarlyPart: this.props.dataGrammarlyPart },
              r.createElement("button", { type: "button", style: l, className: s.button }, n)
            )
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
    },
    85908: (e) => {
      e.exports = {
        buttonContainer: "eNNNu",
        form: "MbfZN",
        buttonSpinner: "qvCG5",
        button: "jFVJS",
        loading: "k2H0g",
        onboarding: "ph6fU",
        disable: "XW_PA"
      };
    },
    9102: (e) => {
      e.exports = {};
    }
  }
]);
