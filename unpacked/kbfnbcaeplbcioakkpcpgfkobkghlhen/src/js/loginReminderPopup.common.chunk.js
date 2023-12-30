(self.webpackChunk = self.webpackChunk || []).push([
  [8600],
  {
    48594: (e, n, t) => {
      t.d(n, { o: () => s });
      var o = t(85441),
        r = t(27378);
      const i = async () => {
          var e;
          return null === (e = await (0, o.OB)().bgRpc.api.checkAuthPermissions()) || void 0 === e || e;
        },
        a = async () => {
          var e;
          return null === (e = await (0, o.OB)().bgRpc.api.requestAuthPermissions()) || void 0 === e || e;
        };
      function s({ checkPermissions: e = i, requestPermissions: n = a } = {}) {
        return (function ({ checkPermissions: e, requestPermissions: n }) {
          const [t, o] = (0, r.useState)(),
            i = Boolean(t),
            [a, s] = (0, r.useState)(!1);
          return {
            needPermissions: i,
            requestingPermissions: a,
            bindSignIn: (n) => () => {
              i ||
                a ||
                e().then((e) => {
                  e ? (o(void 0), n()) : o((e) => n);
                });
            },
            onRequestPermissions: () => {
              a ||
                (s(!0),
                n().then((e) => {
                  s(!1), e && (o(void 0), null == t || t());
                }));
            }
          };
        })({ checkPermissions: e, requestPermissions: n });
      }
    },
    85252: (e, n, t) => {
      t.r(n), t.d(n, { LoginReminderPopup: () => d, LoginReminderPopupView: () => g });
      var o = t(42356),
        r = t(72154),
        i = t(20641),
        a = t(27378),
        s = t(22484),
        l = t(48594),
        c = t(62369),
        u = t(56407);
      const m = a.createElement(
          a.Fragment,
          null,
          a.createElement("h1", null, "Looks like you got signed out!"),
          a.createElement("p", null, "In order to continue receiving your personalized Grammarly suggestions, please sign back in.")
        ),
        p = a.createElement(
          a.Fragment,
          null,
          a.createElement("h1", null, "You’re missing out on your Grammarly Premium features."),
          a.createElement("h2", null, "Sign back in to receive"),
          a.createElement(
            "ul",
            null,
            a.createElement("li", null, "Advanced grammar checks"),
            a.createElement("li", null, "Vocabulary enhancements")
          )
        ),
        d = ({ openSignInDialogFromLoginReminder: e, ...n }) => {
          a.useEffect(() => {
            s.J.loginReminderPopupShow(), (0, i.Tb)().loginReminderPopupShow();
          }, []);
          const { bindSignIn: t, ...o } = (0, l.o)(),
            r = t(e);
          return a.createElement(g, { ...o, onSignIn: r, ...n });
        },
        g = ({
          isFlipped: e,
          reminderType: n,
          remove: t,
          disableLoginReminder: i,
          closeLoginReminder: s,
          onSignIn: l,
          needPermissions: d,
          requestingPermissions: g,
          onRequestPermissions: h
        }) => {
          const k = (0, o.cs)(u.gButtonPopup, u.loginReminder, d && u.permission, u[n], e && u.isFlipped, e && u.flipped);
          return a.createElement(
            "div",
            { className: k },
            a.createElement("div", { className: (0, o.cs)(u.popupFooter, e && u.isFlipped) }, "▲"),
            a.createElement(
              r.M,
              {
                clickHandler: () => {
                  s(), t();
                }
              },
              a.createElement("button", { className: u.close })
            ),
            d
              ? a.createElement(
                  a.Fragment,
                  null,
                  a.createElement("h1", null, "Chrome requires your permission to let Grammarly sign you in"),
                  a.createElement("p", null, "Please follow your browser′s prompts to allow Grammarly to read grammarly.com site data."),
                  a.createElement(
                    "div",
                    null,
                    a.createElement(c.z, { kind: "success", onClick: h }, "Allow ", a.createElement(c.g, null, "and continue to sign in"))
                  ),
                  a.createElement(
                    "footer",
                    null,
                    g
                      ? a.createElement(a.Fragment, null, "We are requesting your browser to grant permission.")
                      : a.createElement(a.Fragment, null, "Next, your browser will ask you to grant permission.")
                  )
                )
              : a.createElement(
                  a.Fragment,
                  null,
                  "free" === n ? m : p,
                  a.createElement(
                    "div",
                    { className: u.buttonsContainer },
                    a.createElement(c.z, { kind: "success", onClick: l, className: u.mainButton }, "Sign back in"),
                    a.createElement(c.z, { kind: "link", onClick: i, className: u.secondaryButton }, "Don’t show this again")
                  )
                )
          );
        };
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
