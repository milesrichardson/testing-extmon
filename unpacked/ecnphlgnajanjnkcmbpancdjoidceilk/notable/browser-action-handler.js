chrome.browserAction.onClicked.addListener(function (e) {
  chrome.tabs.create({ url: getViewerURL() + "?browser_action=true" }, function (e) {});
});
