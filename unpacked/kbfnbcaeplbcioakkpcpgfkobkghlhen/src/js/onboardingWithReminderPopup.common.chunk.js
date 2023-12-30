(self.webpackChunk = self.webpackChunk || []).push([
  [7690],
  {
    64757: (e, t, n) => {
      n.d(t, { L_: () => h, RZ: () => g, zx: () => p });
      var o = n(50858),
        a = n(55818),
        r = n(27378),
        i = n(8543),
        l = n(54001),
        c = n(31278),
        d = n(86732),
        s = n(1509),
        m = n(26215),
        u = n(94632);
      function p(e) {
        return r.createElement(m.Y, h(e, u.LI));
      }
      function h(e, t) {
        var n = (0, l.Sh)(e.className, t).className;
        return (0, a._)((0, o._)({}, e), { className: n });
      }
      !(function (e) {
        var t = (e.Animated = function (e) {
          return r.createElement(
            m.Y,
            (0, a._)((0, o._)({}, e), { animationMode: Boolean(e.animationMode) ? e.animationMode : d.m.FromClickPoint })
          );
        });
        (e.Primary = function (e) {
          return r.createElement(t, (0, o._)({ styleType: s.Z.Type.Button }, h(e, u.T$)));
        }),
          (e.Secondary = function (e) {
            return r.createElement(t, (0, o._)({ styleType: s.Z.Type.Button }, h(e, u.BD)));
          }),
          (e.Ghost = function (e) {
            return r.createElement(t, (0, o._)({ styleType: s.Z.Type.Button }, h(e, u.fk)));
          }),
          (e.Tertiary = function (e) {
            return r.createElement(t, (0, o._)({ styleType: s.Z.Type.Base }, h(e, u.UF)));
          }),
          (e.Flat = function (e) {
            return r.createElement(t, h(e, u.$H));
          }),
          (e.White = function (e) {
            return r.createElement(t, h(e, u.ix));
          }),
          (e.SidebarFlat = function (e) {
            return r.createElement(m.Y, (0, o._)({ styleType: s.Z.Type.H3Legacy }, h(e, u.HN)));
          }),
          (e.Caps = function (e) {
            return r.createElement(m.Y, (0, o._)({ styleType: s.Z.Type.H3Legacy }, h(e, u.Mp)));
          }),
          (e.Group = function (e) {
            var t = e.children,
              n = e.className,
              c = e.align,
              d = void 0 === c ? "horizontal" : c,
              s = e.sticky,
              m = e.name;
            return r.createElement(
              i.F.div,
              (0, a._)((0, o._)({ role: "group" }, (0, l.Sh)(n, "horizontal" === d ? (!0 === s ? u.vD : u.ru) : u.oc)), { "data-name": m }),
              t
            );
          });
      })(p || (p = {}));
      var g = function (e) {
        var t = e.title,
          n = e.titleAlign,
          o = e.buttonClass,
          a = e.iconClass,
          d = e.iconWidth,
          s = e.tooltipClass;
        return r.createElement(
          p,
          {
            name: "info-button",
            "aria-label": t,
            tag: m.X.div,
            title: r.createElement(i.F.div, (0, l.Sh)(u.bC, s), r.createElement("p", null, t)),
            titleAlign: n,
            className: o
          },
          r.createElement(c.JO.Info, { width: d, className: a })
        );
      };
    },
    82730: (e, t, n) => {
      n.d(t, { o: () => o });
      var o,
        a = n(27378),
        r = n(64757),
        i = n(54001),
        l = n(52102);
      !(function (e) {
        (e.Primary = ({ className: e, theme: t, compact: n, children: o, ...c }) =>
          a.createElement(r.zx.Primary, { ...(0, i.Sh)(l.button, e, "dark" === t ? l.dark : void 0, n ? l.noPadding : void 0), ...c }, o)),
          (e.Secondary = ({ className: e, theme: t, compact: n, children: o, ...c }) =>
            a.createElement(
              r.zx.Ghost,
              { ...(0, i.Sh)(l.button, l.secondary, e, "dark" === t ? l.dark : void 0, n ? l.noPadding : void 0), ...c },
              o
            )),
          (e.Tertiary = ({ className: e, theme: t, compact: n, children: o, ...c }) =>
            a.createElement(
              r.zx.Tertiary,
              { ...(0, i.Sh)(l.button, l.tertiary, e, "dark" === t ? l.dark : void 0, n ? l.noPadding : void 0), ...c },
              o
            ));
      })(o || (o = {}));
    },
    27983: (e, t, n) => {
      n.r(t), n.d(t, { OnboardingPopupWithReminder: () => g });
      var o,
        a = n(27378),
        r = n(90845),
        i = n(33678),
        l = n(31278),
        c = n(18813),
        d = n(64757),
        s = n(42356),
        m = n(82730),
        u = n(37522);
      !(function (e) {
        e.Flag = i.a.Flag;
      })(o || (o = {}));
      class p {
        constructor() {
          (this._flags = new Set()),
            (this.actions = {
              openUrl: () => {
                throw new Error("Not implemented");
              },
              openPopup: () => {
                throw new Error("Not implemented");
              }
            });
        }
        has(e) {
          return this._flags.has(e);
        }
      }
      var h = n(56407);
      const g = ({ isFlipped: e, onShow: t, onStart: n, onRemind: o, onRemove: g }) => {
        r.P.useEffectOnDidMount(t);
        const y = new p();
        return a.createElement(
          i.a.Context.Provider,
          { value: y },
          a.createElement(
            "div",
            { className: (0, s.cs)(h.gButtonPopup, h.onboardingWithReminder, e && h.flipped) },
            a.createElement(u.h, { className: h.onboardingClose, onClick: g, title: "" }, a.createElement(l.JO.Close, null)),
            a.createElement("p", { className: h.title }, "Let us show you around"),
            a.createElement("p", { className: h.text }, "Get a quick introduction to how Grammarly works."),
            a.createElement(m.o.Primary, { onClick: n }, "Take a tour"),
            a.createElement(
              c.L,
              {
                name: "remind-me-later",
                appearanceBehavior: "mouseClick",
                label: a.createElement(
                  m.o.Secondary,
                  null,
                  "Remind me later ",
                  a.createElement(l.JO.Arrow, { width: "12", className: h.arrowhead })
                ),
                align: "left",
                showDelay: 0,
                theme: { dropdownContainer: h.dropdownContainer, dropdownList: h.dropdownList }
              },
              a.createElement(d.zx.Flat, { onClick: () => o("hour") }, "In an hour"),
              a.createElement(d.zx.Flat, { onClick: () => o("tomorrow") }, "Tomorrow"),
              a.createElement(d.zx.Flat, { onClick: () => o("never") }, "Don’t show this again")
            ),
            a.createElement("div", { className: (0, s.cs)(h.popupFooter, e && h.isFlipped) }, "▲")
          )
        );
      };
    },
    52102: (e) => {
      e.exports = { button: "BfiSw", noPadding: "rqbz4", dark: "lwLJZ", secondary: "HB_J3", tertiary: "Yv5q6" };
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
