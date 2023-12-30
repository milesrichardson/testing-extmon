(function t() {
  var n = (Okta.fn.script = {}),
    e = "/shared/shared.js",
    r = "/shared/preload-content.js",
    c = Okta.fn.bg.chromeP.scripting.executeScript;
  function i(t, n, e) {
    chrome.scripting.executeScript({ target: { tabId: t, frameIds: [n] }, files: [e] }, function () {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
      }
    });
  }
  n.injectPreloadScript = function (t, n) {
    i(t, n, r);
  };
  n.injectContentScript = function (t, n) {
    i(t, n, e);
  };
  n.injectOnboardingScript = function (t) {
    return c({
      target: { tabId: t },
      func: function () {
        return localStorage.getItem("okta_accounts");
      }
    }).then(function (t) {
      return t.length ? t[0].result : null;
    });
  };
})();
