(self.webpackChunk = self.webpackChunk || []).push([
  [5835],
  {
    95772: (e, t, n) => {
      n.r(t), n.d(t, { ChipmunkPopup: () => g });
      var a = n(27378),
        o = n(22484);
      class s extends a.Component {
        constructor() {
          super(...arguments), (this.state = { acknowledgementDone: !1, isAcknowledging: !1 });
        }
        acknowledgeMessageOnMount() {
          !this.state ||
            this.state.isAcknowledging ||
            this.state.acknowledgementDone ||
            (this.setState({ isAcknowledging: !0 }), this.acknowledgeMessage(), this.setState({ acknowledgementDone: !0 }));
        }
        acknowledgeMessage() {
          this.props.acknowledge(this.messageId, this.props.docId), o.J.chipmunkMessageDisplayed(this.campaignName, this.messageId);
        }
        onSoftDismiss() {
          this.props.softDismiss(), o.J.chipmunkMessageSoftDismissed(this.campaignName, this.messageId);
        }
        onHardDismiss() {
          this.props.hardDismiss(this.messageId), o.J.chipmunkMessageHardDismissed(this.campaignName, this.messageId);
        }
        onCTAClick() {
          o.J.chipmunkMessageCTAClick(this.campaignName, this.messageId);
        }
        get message() {
          return this.props.messageRecord.message;
        }
        get messageId() {
          return this.props.messageRecord.messageId;
        }
        get messagePlacement() {
          return this.props.messageRecord.message.placement;
        }
        get campaignName() {
          return this.props.messageRecord.campaignName;
        }
        get theme() {
          var e;
          return null !== (e = this.props.messageRecord.message.theme) && void 0 !== e ? e : "dark";
        }
      }
      var i = n(56407),
        r = n(42356),
        l = n(96309),
        c = n(15738),
        m = n(72154);
      class u extends s {
        constructor() {
          super(...arguments),
            (this._getContainerHeader = (e) => {
              var t;
              switch (null === (t = e.arguments) || void 0 === t ? void 0 : t.headerType) {
                case c.n0.Default:
                  return a.createElement("div", { className: `${i.containerHeaderDefault} ${i.container}` });
                case c.n0.ImageBlock:
                  return this._getContainerImageBlock(e);
                default:
                  return null;
              }
            }),
            (this._getContainerImageBlock = (e) => {
              var t;
              const n = null === (t = e.arguments) || void 0 === t ? void 0 : t.imageUrl;
              if (void 0 === n) return null;
              const o = "keyboard-qrcode.png" === n,
                s = "brand-tone-ipm-header.png" === n,
                l = "snippet-ipm-header.gif" === n,
                c = "llama-adoption.png" === n,
                m = "owner-activation-ipm-header.gif" === n,
                u = "graduation-campaign-ipm.svg" === n,
                d = "writing-progress-ipm-header.gif" === n,
                g = "gb-dunning.svg" === n,
                p = "gb-downgraded.svg" === n,
                h = o || s || l || c || m || u || d || g || p;
              return a.createElement(
                "div",
                {
                  className: (0, r.cs)(i.container, {
                    [i.containerKeyboardQRCodeImageBlock]: o,
                    [i.containerBrandToneImageBlock]: s,
                    [i.containerSnippetImageBlock]: l,
                    [i.containerLlamaAdoptionImageBlock]: c,
                    [i.containerOwnerActivationImageBlock]: m,
                    [i.containerGraduationImageBlock]: u,
                    [i.containerWritingProgressImageBlock]: d,
                    [i.containerDunningImageBlock]: g || p,
                    [i.containerHeaderImageBlock]: !h
                  })
                },
                h
                  ? a.createElement("div", { className: (0, r.cs)({ [i.qrcode]: o, [i.img]: !o, [i.downgraded]: p }) })
                  : a.createElement("img", { src: n })
              );
            }),
            (this._getContainerTitle = (e) => {
              var t;
              return a.createElement(
                "div",
                { className: `${i.containerTitle} ${i.container}` },
                a.createElement("h3", null, null === (t = e.arguments) || void 0 === t ? void 0 : t.text)
              );
            }),
            (this._getContainerText = (e) => {
              var t, n;
              return a.createElement(
                "div",
                { className: `${i.containerText} ${i.container}` },
                a.createElement("p", {
                  dangerouslySetInnerHTML: {
                    __html: null !== (n = null === (t = e.arguments) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
                  }
                })
              );
            });
        }
        render() {
          var e, t, n, o;
          const s = this.message,
            m = this.message.containerContent[0],
            u =
              (null == m ? void 0 : m.containerType) === c.lS.Header &&
              (null === (e = null == m ? void 0 : m.arguments) || void 0 === e ? void 0 : e.headerType) === c.n0.ImageBlock,
            d = ["snippet-ipm-header.gif", "llama-adoption.png", "owner-activation-ipm-header.gif"].includes(
              null !== (n = null === (t = null == m ? void 0 : m.arguments) || void 0 === t ? void 0 : t.imageUrl) && void 0 !== n ? n : ""
            ),
            g = u && (d || "light-x-button" === (null === (o = null == m ? void 0 : m.arguments) || void 0 === o ? void 0 : o.exitButton));
          return a.createElement(
            "div",
            { className: (0, r.cs)(i.gButtonPopup, i.gdocsBeta, i.chipmunkGButtonCalloutPopup) },
            a.createElement(
              "div",
              { className: i.closeWrapper },
              a.createElement(l.P, { onClick: () => this.onSoftDismiss(), color: g ? "white" : "dark" })
            ),
            a.createElement(
              "div",
              { className: i.containerContents },
              s.containerContent.map((e, t) => a.createElement(a.Fragment, { key: t }, this._getContainer(e)))
            )
          );
        }
        _getContainer(e) {
          switch (null == e ? void 0 : e.containerType) {
            case c.lS.Header:
              return this._getContainerHeader(e);
            case c.lS.Title:
              return this._getContainerTitle(e);
            case c.lS.Text:
              return this._getContainerText(e);
            case c.lS.Buttons:
              return this._getContainerButton(e);
            default:
              return null;
          }
        }
        _getContainerButton(e) {
          var t, n;
          return a.createElement(
            "div",
            { className: `${i.containerButton} ${i.container}` },
            null === (n = null === (t = e.arguments) || void 0 === t ? void 0 : t.buttons) || void 0 === n
              ? void 0
              : n.map((e, t) => a.createElement(a.Fragment, { key: t }, this._getButton(e)))
          );
        }
        _getButton(e) {
          switch (e.buttonType) {
            case c.nt.Link:
              return a.createElement(
                m.M,
                { clickHandler: () => this.onCTAClick() },
                a.createElement("a", { href: e.linkUrl, target: "_blank", rel: "noreferrer", className: i.button }, e.text)
              );
            case c.nt.SoftDismiss:
              return a.createElement(
                m.M,
                { clickHandler: () => this.onSoftDismiss() },
                a.createElement("button", { className: i.dismiss }, e.text)
              );
            case c.nt.HardDismiss:
              return a.createElement(
                m.M,
                { clickHandler: () => this.onHardDismiss() },
                a.createElement("button", { className: i.dismiss }, e.text)
              );
            default:
              return null;
          }
        }
      }
      class d extends s {
        constructor() {
          super(...arguments),
            (this._getContainerText = (e) => {
              var t, n;
              return a.createElement(
                "div",
                { className: `${i.containerText}` },
                a.createElement("p", {
                  dangerouslySetInnerHTML: {
                    __html: null !== (n = null === (t = e.arguments) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
                  }
                })
              );
            });
        }
        render() {
          const e = this.message;
          return a.createElement(
            "div",
            {
              className: (0, r.cs)(
                i.gButtonPopup,
                i.gdocsBeta,
                i.chipmunkGButtonToastPopup,
                "light" === this.theme ? i.chipmunkGButtonToastPopupLight : i.chipmunkGButtonToastPopupDark
              )
            },
            a.createElement(
              "div",
              { className: i.containerContents },
              e.containerContent.map((e, t) => a.createElement(a.Fragment, { key: t }, this._getContainer(e))),
              a.createElement(l.P, { onClick: () => this.onSoftDismiss() })
            )
          );
        }
        _getContainer(e) {
          switch (null == e ? void 0 : e.containerType) {
            case c.lS.Text:
              return this._getContainerText(e);
            case c.lS.Buttons:
              return this._getContainerButton(e);
            case c.lS.Header:
            case c.lS.InputRadio:
            case c.lS.InputDropdown:
            case c.lS.InputLongText:
            case c.lS.InputCheckbox:
            case c.lS.Title:
            default:
              return null;
          }
        }
        _getContainerButton(e) {
          var t, n;
          return null === (n = null === (t = e.arguments) || void 0 === t ? void 0 : t.buttons) || void 0 === n
            ? void 0
            : n.map((e, t) => a.createElement(a.Fragment, { key: t }, this._getButton(e)));
        }
        _getButton(e) {
          switch (e.buttonType) {
            case c.nt.Link:
              return a.createElement(
                m.M,
                { clickHandler: () => this.onCTAClick() },
                a.createElement("a", { href: e.linkUrl, target: "_blank", rel: "noreferrer", className: i.button }, e.text)
              );
            case c.nt.SoftDismiss:
            case c.nt.HardDismiss:
            default:
              return null;
          }
        }
      }
      class g extends s {
        componentDidMount() {
          this.acknowledgeMessageOnMount();
        }
        render() {
          switch (this.messagePlacement) {
            case "GButtonCallout":
              return a.createElement(u, { ...this.props });
            case "GButtonToast":
              return a.createElement(d, { ...this.props });
            default:
              return null;
          }
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
