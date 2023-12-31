chrome.runtime.onMessage.addListener(function (e, t, n) {
  if ("inject-open-with-kami-button" === e) {
    var i = t.tab.id;
    return (
      chrome.tabs.insertCSS(i, { file: "notable/integrations/classroom/styles.css" }, function () {
        chrome.tabs.insertCSS(i, { file: "notable/viewer/open_with_kami.css" }, function () {
          var e = chrome.runtime.getURL("notable/viewer/open_with_kami.html"),
            t = new XMLHttpRequest();
          (t.onload = function (e) {
            4 === t.readyState && 200 === t.status && n(t.responseText.replace("Open with Kami", chrome.i18n.getMessage("OpenWithKami")));
          }),
            t.open("GET", e, !0),
            t.send(null);
        });
      }),
      !0
    );
  }
  if ("object" == typeof e && "open-with-kami" in e) {
    var o = { url: e["open-with-kami"], tabId: t.tab.id, frameId: t.frameId };
    (o.referer = getReferer(o)), (o["content-disposition"] = getContentDisposition(o));
    var r = getViewerURL(o, "extension_open_button");
    n(r);
  }
});
