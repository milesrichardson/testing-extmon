(self.webpackChunk = self.webpackChunk || []).push([
  [7485],
  {
    22803: (e, o, a) => {
      a.r(o), a.d(o, { ClaimedUserPopup: () => r });
      var t = a(27378),
        c = a(75105),
        n = a(62369),
        s = a(42726);
      const r = ({ onClose: e, onClickMoreInfo: o }) =>
        t.createElement(c.X, {
          onClose: e,
          mainContent: t.createElement(
            "div",
            { "data-grammarly-part": "claimed-user-popup-main-content", className: s.claimedUserPopup },
            t.createElement("div", { className: s.claimedUserPopupIcon }),
            t.createElement("div", { className: s.claimedUserPopupTitle }, "Action required!"),
            t.createElement(
              "div",
              { className: s.claimedUserPopupText },
              "Your organization wants to add you to their team account. You'll need to either join the team account or change the email you use for this account."
            ),
            t.createElement(n.z, { onClick: o, kind: "success", className: s.claimedUserPopupMoreInfoButton, round: !0 }, "More info")
          ),
          size: "medium"
        });
    },
    42726: (e) => {
      e.exports = {
        claimedUserPopup: "Cm9kf",
        claimedUserPopupIcon: "Lt5m8",
        claimedUserPopupTitle: "cJsXD",
        claimedUserPopupText: "wVBpn",
        claimedUserPopupMoreInfoButton: "wYdyX",
        spin: "B0yc7"
      };
    }
  }
]);
