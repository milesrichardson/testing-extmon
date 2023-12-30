(self.webpackChunk = self.webpackChunk || []).push([
  [9545],
  {
    5080: (e, t, n) => {
      n.r(t), n.d(t, { GrammarlyBusinessSigninPopup: () => c });
      var a = n(42356),
        s = n(27378),
        i = n(62369),
        l = n(75105),
        o = n(10171);
      const c = ({ onShow: e, onSignIn: t, onHideForToday: n, onClose: c, trackShow: r, isSimpleView: m }) => (
        s.useEffect(() => {
          r(), m || e();
        }, []),
        s.createElement(l.X, {
          onClose: c,
          includeMainContentPadding: !1,
          headerStyle: { padding: 0 },
          mainContent: s.createElement(
            "div",
            { className: o.gbPopup },
            s.createElement(
              "div",
              { className: (0, a.cs)(o.gbContent, { [o.gbSimple]: m }) },
              s.createElement("div", { className: o.gbHeader }),
              s.createElement(
                "div",
                { className: o.gbBody },
                s.createElement("div", { className: o.gbPopupTitle }, "You're signed out of Grammarly Business."),
                m
                  ? s.createElement("div", { className: o.description }, "You won't get any writing suggestions until you sign back in.")
                  : s.createElement(
                      s.Fragment,
                      null,
                      "Sign back in to get",
                      s.createElement(
                        "ul",
                        null,
                        s.createElement("li", { className: o.grammarly }, "Suggestions that help you write clear, mistake-free text."),
                        s.createElement("li", { className: o.feedback }, "Feedback that helps you align with your brand's style.")
                      )
                    ),
                s.createElement(
                  "div",
                  { className: (0, a.cs)({ [o.gbButtons]: m }) },
                  s.createElement(i.z, { onClick: t, kind: "success", className: o.gbButton }, "Sign in"),
                  !m &&
                    s.createElement(
                      i.z,
                      { onClick: n, kind: "transparent", className: (0, a.cs)(o.gbButton, o.gbDismiss) },
                      "Don't show this again today."
                    )
                )
              )
            )
          )
        })
      );
    },
    10171: (e) => {
      e.exports = {
        gbPopup: "Q2aqX",
        gbContent: "DC02T",
        gbSimple: "SEdIr",
        gbBody: "pwExq",
        grammarly: "pr6KO",
        feedback: "mmSZZ",
        gbHeader: "JYPij",
        gbPopupIcon: "HrLmU",
        gbPopupTitle: "NTPnY",
        description: "fPjSQ",
        gbButton: "e8j3L",
        gbDismiss: "dk9U8",
        gbButtons: "zsGp9",
        spin: "R3uJi"
      };
    }
  }
]);
