(self.webpackChunk = self.webpackChunk || []).push([
  [2378],
  {
    95258: (e, s, l) => {
      l.r(s), l.d(s, { SimpleMessagePopup: () => i });
      var a = l(27378),
        p = l(72154),
        t = l(43651);
      const i = ({ title: e, text: s, onSimpleMessageClose: l, onNotificationClick: i }) =>
        a.createElement(
          "div",
          { className: t.simpleMessagePopup, onClick: i },
          a.createElement("p", { className: t.simpleMessageTitle }, e),
          a.createElement("p", { className: t.simpleMessageText }, s),
          a.createElement(p.M, { className: t.simpleMessageCloseButton, clickHandler: l })
        );
    },
    43651: (e) => {
      e.exports = {
        simpleMessagePopup: "Zyfcb",
        showWrapper: "SxseB",
        flipped: "zT7AF",
        simpleMessageText: "kAiYD",
        simpleMessageTitle: "ZuyHN",
        simpleMessageCloseButton: "F3rmk"
      };
    }
  }
]);
