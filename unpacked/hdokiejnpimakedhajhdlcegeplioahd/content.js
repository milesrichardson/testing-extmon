var g_url_prefix = "",
  g_lplanguage = "";
function dom_window_created(e) {
  try {
    var t, n, r, r, r;
    e.target.defaultView.frameElement &&
      (t = e.target.defaultView.frameElement.getAttribute("lpsrc")) &&
      (0 < t.indexOf("lpblankiframe.local")
        ? (e.target.defaultView.frameElement.setAttribute("lpsrc", ""),
          (e.target.location.href = g_url_prefix + "popupfilltab.html?lplanguage=" + encodeURIComponent(g_lplanguage)))
        : 0 < t.indexOf("lpblankiframeoverlay.local")
        ? -1 != (n = t.indexOf("?")) &&
          (e.target.defaultView.frameElement.setAttribute("lpsrc", ""),
          (e.target.location.href = g_url_prefix + "overlay.html" + t.substring(n) + "&lplanguage=" + encodeURIComponent(g_lplanguage)))
        : 0 === t.indexOf("contentScriptDialog.html")
        ? (e.target.defaultView.frameElement.setAttribute("lpsrc", ""),
          (r = t.indexOf("?")),
          (e.target.location.href = g_url_prefix + "contentScriptDialog.html" + (0 < r ? t.substring(r) : "")))
        : 0 === t.indexOf("betterContentScriptPopup.html")
        ? (e.target.defaultView.frameElement.setAttribute("lpsrc", ""),
          (r = t.indexOf("?")),
          (e.target.location.href = g_url_prefix + "betterContentScriptPopup.html" + (0 < r ? t.substring(r) : "")))
        : 0 === t.indexOf("contentScriptPopup.html") &&
          (e.target.defaultView.frameElement.setAttribute("lpsrc", ""),
          (r = t.indexOf("?")),
          (e.target.location.href = g_url_prefix + "contentScriptPopup.html" + (0 < r ? t.substring(r) : ""))));
  } catch (e) {}
}
function lpcontentcontainer() {
  this.receiveMessage = function (e) {
    "set_url_prefix" === e.json.messagename && ((g_url_prefix = e.json.url_prefix), (g_lplanguage = e.json.lplanguage));
  };
}
function alert(e) {
  content.alert(e);
}
addEventListener("DOMWindowCreated", dom_window_created, !1),
  (lpcontent = new lpcontentcontainer()),
  addMessageListener("lastpass:contentevent", lpcontent),
  sendAsyncMessage("lastpass:lpevent", { messagename: "frame_script_loaded" });
