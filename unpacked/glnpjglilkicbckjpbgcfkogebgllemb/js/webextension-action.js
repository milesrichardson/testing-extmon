(function o() {
  var t = (Okta.fn.action = {});
  t.updateBadge = function (o) {
    if (!o) {
      return;
    }
    chrome.browserAction.setBadgeText({ text: o.text });
    if (o.color !== "") {
      chrome.browserAction.setBadgeBackgroundColor({ color: o.color });
    }
  };
})();
