(function o() {
  var e = (Okta.fn.action = {});
  e.updateBadge = function (o) {
    if (!o) {
      return;
    }
    chrome.action.setBadgeText({ text: o.text });
    if (o.color !== "") {
      chrome.action.setBadgeBackgroundColor({ color: o.color });
    }
  };
  e.getUserPinned = function () {
    return chrome.action
      .getUserSettings()
      .then(function (o) {
        return o.isOnToolbar;
      })
      .catch(function (o) {
        return { errorCode: o.message || o };
      });
  };
  e.openPopup = function (o) {
    chrome.action.openPopup(o);
  };
})();
