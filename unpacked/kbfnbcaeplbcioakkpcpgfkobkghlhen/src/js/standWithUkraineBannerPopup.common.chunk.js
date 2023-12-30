(self.webpackChunk = self.webpackChunk || []).push([
  [9910],
  {
    64757: (e, t, n) => {
      n.d(t, { L_: () => y, RZ: () => h, zx: () => d });
      var a = n(50858),
        o = n(55818),
        l = n(27378),
        r = n(8543),
        i = n(54001),
        p = n(31278),
        c = n(86732),
        s = n(1509),
        u = n(26215),
        m = n(94632);
      function d(e) {
        return l.createElement(u.Y, y(e, m.LI));
      }
      function y(e, t) {
        var n = (0, i.Sh)(e.className, t).className;
        return (0, o._)((0, a._)({}, e), { className: n });
      }
      !(function (e) {
        var t = (e.Animated = function (e) {
          return l.createElement(
            u.Y,
            (0, o._)((0, a._)({}, e), { animationMode: Boolean(e.animationMode) ? e.animationMode : c.m.FromClickPoint })
          );
        });
        (e.Primary = function (e) {
          return l.createElement(t, (0, a._)({ styleType: s.Z.Type.Button }, y(e, m.T$)));
        }),
          (e.Secondary = function (e) {
            return l.createElement(t, (0, a._)({ styleType: s.Z.Type.Button }, y(e, m.BD)));
          }),
          (e.Ghost = function (e) {
            return l.createElement(t, (0, a._)({ styleType: s.Z.Type.Button }, y(e, m.fk)));
          }),
          (e.Tertiary = function (e) {
            return l.createElement(t, (0, a._)({ styleType: s.Z.Type.Base }, y(e, m.UF)));
          }),
          (e.Flat = function (e) {
            return l.createElement(t, y(e, m.$H));
          }),
          (e.White = function (e) {
            return l.createElement(t, y(e, m.ix));
          }),
          (e.SidebarFlat = function (e) {
            return l.createElement(u.Y, (0, a._)({ styleType: s.Z.Type.H3Legacy }, y(e, m.HN)));
          }),
          (e.Caps = function (e) {
            return l.createElement(u.Y, (0, a._)({ styleType: s.Z.Type.H3Legacy }, y(e, m.Mp)));
          }),
          (e.Group = function (e) {
            var t = e.children,
              n = e.className,
              p = e.align,
              c = void 0 === p ? "horizontal" : p,
              s = e.sticky,
              u = e.name;
            return l.createElement(
              r.F.div,
              (0, o._)((0, a._)({ role: "group" }, (0, i.Sh)(n, "horizontal" === c ? (!0 === s ? m.vD : m.ru) : m.oc)), { "data-name": u }),
              t
            );
          });
      })(d || (d = {}));
      var h = function (e) {
        var t = e.title,
          n = e.titleAlign,
          a = e.buttonClass,
          o = e.iconClass,
          c = e.iconWidth,
          s = e.tooltipClass;
        return l.createElement(
          d,
          {
            name: "info-button",
            "aria-label": t,
            tag: u.X.div,
            title: l.createElement(r.F.div, (0, i.Sh)(m.bC, s), l.createElement("p", null, t)),
            titleAlign: n,
            className: a
          },
          l.createElement(p.JO.Info, { width: c, className: o })
        );
      };
    },
    79502: (e, t, n) => {
      n.r(t), n.d(t, { StandWithUkraineBannerPopup: () => c });
      var a = n(31699),
        o = n(27378),
        l = n(62369),
        r = n(64757),
        i = n(44926),
        p = n(94174);
      const c = (e) => {
        const t = e.popupHelpButtonLabelHTML ? (0, a.sanitize)(e.popupHelpButtonLabelHTML) : "How to help",
          n = e.popupIconResetButtonLabelHTML ? (0, a.sanitize)(e.popupIconResetButtonLabelHTML) : "Use default colors",
          c = e.popupTitleHTML ? (0, a.sanitize)(e.popupTitleHTML) : "Why did my Grammarly icon change to blue and yellow?",
          s = e.popupBodyHTML
            ? e.popupBodyHTML.map(a.sanitize)
            : [
                "As a company with a deep connection to Ukraine, we've updated our icon to reflect the colors in the Ukrainian flag to show our support for the people of Ukraine. We invite you to do the same."
              ];
        return o.createElement(i.Zz, {
          onClose: e.onClose,
          sanitizedPopupTitle: c,
          sanitizedPopupBody: s,
          popupFooter: o.createElement(
            o.Fragment,
            null,
            o.createElement(
              l.z,
              { kind: "primary", className: p.helpButton, onClick: e.onHelpUkraine },
              o.createElement("span", { dangerouslySetInnerHTML: { __html: t } })
            ),
            o.createElement(
              r.zx.Tertiary,
              { name: "reset-grammarly-icon", className: p.iconResetButton, onClick: e.onIconReset },
              o.createElement("span", { dangerouslySetInnerHTML: { __html: n } })
            )
          )
        });
      };
    },
    44926: (e, t, n) => {
      n.d(t, { Zz: () => p, h4: () => r, uT: () => i });
      var a = n(27378),
        o = n(75105),
        l = n(86581);
      const r = ({ sanitizedTitle: e }) =>
          a.createElement(
            "div",
            { className: l.header },
            a.createElement(
              "div",
              { className: l.flag },
              a.createElement("div", { className: l.flagTop }),
              a.createElement("div", { className: l.flagBottom })
            ),
            a.createElement("div", { className: l.title, dangerouslySetInnerHTML: { __html: e } })
          ),
        i = ({ sanitizedBody: e }) =>
          a.createElement(
            a.Fragment,
            null,
            e.map((e) => a.createElement("p", { key: e, className: l.paragraph, dangerouslySetInnerHTML: { __html: e } }))
          ),
        p = (e) =>
          a.createElement(o.X, {
            style: { width: 280 },
            onClose: e.onClose,
            includeMainContentPadding: !1,
            mainContent: a.createElement(
              "div",
              { className: l.content, "data-has-footer": e.popupFooter ? "true" : "false" },
              a.createElement(r, { sanitizedTitle: e.sanitizedPopupTitle }),
              a.createElement(i, { sanitizedBody: e.sanitizedPopupBody }),
              e.popupFooter ? e.popupFooter : null
            )
          });
    },
    94174: (e) => {
      e.exports = { helpButton: "D75kt", iconResetButton: "r4S4i" };
    },
    86581: (e) => {
      e.exports = {
        content: "L0IlD",
        paragraph: "Orx96",
        header: "XpiGS",
        flag: "hYeJR",
        flagTop: "Te_me",
        flagBottom: "pHlXZ",
        title: "ruQOD"
      };
    }
  }
]);
