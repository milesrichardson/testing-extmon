(function r() {
  var i = (Okta.fn.browserType = {});
  i.isFirefox = function (r) {
    return r === "firefox";
  };
  i.isSafari = function (r) {
    return r === "safari";
  };
  i.isSafariWebExt = function (r) {
    return r === "safari-webext";
  };
  i.isChrome = function (r) {
    return r === "chrome";
  };
  i.isChromiumEdge = function (r) {
    return r === "edge-chromium";
  };
})();
