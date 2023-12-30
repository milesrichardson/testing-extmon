(function t() {
  var e = (Okta.fn.script = {}),
    n = "/shared/shared.js",
    r = "/shared/preload-content.js",
    c = Okta.fn.bg.chromeP.tabs.executeScript;
  function o(t, e, n) {
    chrome.tabs.executeScript(t, { file: n, frameId: e, runAt: "document_idle" }, function () {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
      }
    });
  }
  e.injectPreloadScript = function (t, e) {
    o(t, e, r);
  };
  e.injectContentScript = function (t, e) {
    o(t, e, n);
  };
  e.injectOnboardingScript = function (t) {
    return c(t, { code: "localStorage.getItem('okta_accounts');" });
  };
})();
