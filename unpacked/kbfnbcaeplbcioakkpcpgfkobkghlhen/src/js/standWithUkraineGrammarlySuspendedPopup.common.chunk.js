(self.webpackChunk = self.webpackChunk || []).push([
  [751],
  {
    44926: (e, n, t) => {
      t.d(n, { Zz: () => l, h4: () => i, uT: () => s });
      var a = t(27378),
        o = t(75105),
        r = t(86581);
      const i = ({ sanitizedTitle: e }) =>
          a.createElement(
            "div",
            { className: r.header },
            a.createElement(
              "div",
              { className: r.flag },
              a.createElement("div", { className: r.flagTop }),
              a.createElement("div", { className: r.flagBottom })
            ),
            a.createElement("div", { className: r.title, dangerouslySetInnerHTML: { __html: e } })
          ),
        s = ({ sanitizedBody: e }) =>
          a.createElement(
            a.Fragment,
            null,
            e.map((e) => a.createElement("p", { key: e, className: r.paragraph, dangerouslySetInnerHTML: { __html: e } }))
          ),
        l = (e) =>
          a.createElement(o.X, {
            style: { width: 280 },
            onClose: e.onClose,
            includeMainContentPadding: !1,
            mainContent: a.createElement(
              "div",
              { className: r.content, "data-has-footer": e.popupFooter ? "true" : "false" },
              a.createElement(i, { sanitizedTitle: e.sanitizedPopupTitle }),
              a.createElement(s, { sanitizedBody: e.sanitizedPopupBody }),
              e.popupFooter ? e.popupFooter : null
            )
          });
    },
    44523: (e, n, t) => {
      t.d(n, { c: () => a });
      var a,
        o = t(31699);
      !(function (e) {
        (e.sanitizeSuspendTitle = function (e) {
          return e ? (0, o.sanitize)(e) : "Grammarly is unavailable in your country";
        }),
          (e.sanitizeSuspendBody = function (e) {
            return e
              ? e.map(o.sanitize)
              : ["In response to Russia’s invasion of Ukraine, we have suspended service to accounts in Russia and Belarus."];
          }),
          (e.sanitizeSuspendLearnMoreLabel = function (e) {
            return e ? (0, o.sanitize)(e) : "Learn more";
          });
      })(a || (a = {}));
    },
    11554: (e, n, t) => {
      t.r(n), t.d(n, { StandWithUkraineGrammarlySuspendedPopup: () => p, StandWithUkraineSuspendFooter: () => u });
      var a = t(27378),
        o = t(44523),
        r = t(22484),
        i = t(62369),
        s = t(44926),
        l = t(19610);
      const p = (e) => (
          a.useEffect(() => {
            r.J.standWithUkraineSuspendPopupShow();
          }, []),
          a.createElement(s.Zz, {
            onClose: () => {
              e.onClose(), r.J.standWithUkraineSuspendCloseButtonClick();
            },
            sanitizedPopupTitle: o.c.sanitizeSuspendTitle(e.popupTitleHTML),
            sanitizedPopupBody: o.c.sanitizeSuspendBody(e.popupBodyHTML),
            popupFooter: a.createElement(u, {
              onLearnMore: () => {
                e.onLearnMore(), r.J.standWithUkraineSuspendLearnMoreButtonClick();
              },
              sanitizedLearnMoreButtonLabelHTML: o.c.sanitizeSuspendLearnMoreLabel(e.popupLearnMoreButtonLabelHTML)
            })
          })
        ),
        u = (e) =>
          a.createElement(
            i.z,
            { className: l.learnMoreButton, onClick: e.onLearnMore },
            a.createElement("span", { dangerouslySetInnerHTML: { __html: e.sanitizedLearnMoreButtonLabelHTML } })
          );
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
    },
    19610: (e) => {
      e.exports = { learnMoreButton: "nUL6q" };
    }
  }
]);
