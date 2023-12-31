!(function () {
  "use strict";
  function e(t, n) {
    if (n.length) {
      var o = n.shift().toURL();
      (o = o.replace(/^filesystem:chrome-extension:\/\/[a-p]{32}\/external\//, "drive:")),
        (o = getViewerURL(o)),
        t
          ? chrome.tabs.create({ windowId: t, active: !0, url: o }, function () {
              e(t, n);
            })
          : chrome.windows.create({ type: "normal", focused: !0, url: o }, function (t) {
              e(t.id, n);
            });
    }
  }
  chrome.fileBrowserHandler &&
    chrome.fileBrowserHandler.onExecute.addListener(function (t, n) {
      if ("open-as-notable" !== t) return;
      var o = n.entries,
        r = n.tab_id || n.tabId;
      r > 0
        ? chrome.tabs.get(r, function (t) {
            e(t && t.windowId, o);
          })
        : chrome.windows.getLastFocused(function (t) {
            var n = t && t.id;
            n && chrome.windows.update(n, { focused: !0 }), e(n, o);
          });
    });
})();
