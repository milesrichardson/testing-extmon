(() => {
  var e = {
      4846: (e) => {
        let o,
          n = chrome || window.chrome || browser || window.browser;
        navigator.userAgent.includes("Firefox/") && (n = browser || window.browser),
          navigator.userAgent.includes("Edge/") && (n = browser || window.browser);
        try {
          o = indexedDB || window.indexedDB;
        } catch (e) {
          (o = null), console.log(`Error initializing indexedDB: ${e.message}`);
        }
        e.exports = { chrome: n, indexedDB: o, performance: performance || window.performance, URL: URL || window.URL };
      }
    },
    o = {};
  function n(i) {
    var r = o[i];
    if (void 0 !== r) return r.exports;
    var m = (o[i] = { exports: {} });
    return e[i](m, m.exports, n), m.exports;
  }
  (n.p = "/"),
    chrome || browser || (window.chrome = chrome || window.chrome || window.browser),
    (n.p = (chrome || window.chrome).runtime.getURL("")),
    (() => {
      "use strict";
      var e = n(4846);
      e.chrome.i18n.getUILanguage().split("-")[0];
      const o = [
        { id: "welcome-title", msg: "welcomeTitle", sub: " Malwarebytes Browser Guard" },
        { id: "mbw-title", msg: "welcomeHeaderAction" },
        { id: "welcome-pin-info-1", msg: "welcomePinInfo1" },
        { id: "welcome-pin-info-2", msg: "welcomePinInfo2" },
        { id: "welcome-pin-edge-info-1", msg: "welcomePinEdgeInfo1" },
        { id: "welcome-pin-edge-info-2", msg: "welcomePinEdgeInfo2" },
        { id: "welcome-pin-info-ff-1", msg: "welcomePinInfoFirefox1" },
        { id: "welcome-pin-info-ff-2", msg: "welcomePinInfoFirefox2" },
        { id: "welcome-pin-info-ff-3", msg: "welcomePinInfoFirefox3" },
        { id: "welcome-icon-info", msg: "welcomeIconInfo" },
        { id: "welcome-done", msg: "welcomeDone" },
        { id: "welcome-chrome", msg: "welcomeChrome" },
        { id: "level-up", msg: "mv3WebsiteBlockLevelUp" },
        { id: "level-up-info", msg: "mv3WebsiteBlockLevelUpInfo" },
        { id: "level-up-info-link", msg: "mv3WebsiteBlockLevelUpInfoLink" },
        { id: "level-up-info-contd", msg: "mv3WebsiteBlockLevelUpInfoContd" },
        { id: "get-started", msg: "mv3WebsiteBlockGetStarted" },
        { id: "text-learn-more", msg: "mv3WebsiteBlockLearnMore" },
        { id: "learn-more-link", msg: "mv3WebsiteBlockLearnMoreLink" }
      ];
      document.addEventListener("DOMContentLoaded", () =>
        ((o, n = document) =>
          o.forEach(({ id: o, msg: i, sub: r = null }) => {
            const m = n.getElementById(o);
            m && (m.textContent = e.chrome.i18n.getMessage(i, r));
          }))(o)
      );
    })();
})();
