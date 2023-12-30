function updatePopup(e) {
  var t = document.getElementById("downloadPage"),
    n = document.getElementById("signinPage");
  switch (e) {
    case 0:
      n && (n.style.display = "none"), t && (t.style.display = "block");
      break;
    case 1:
      if ((t && (t.style.display = "none"), n))
        (n.style.display = "block"),
          (o = document.getElementById("signinMessage")) && (o.textContent = chrome.i18n.getMessage("enableBookmarksMessage"));
      break;
    case 2:
    default:
      var o;
      if ((t && (t.style.display = "none"), n))
        (n.style.display = "block"),
          (o = document.getElementById("signinMessage")) && (o.textContent = chrome.i18n.getMessage("syncedMessage"));
  }
}
function loadPopup() {
  var e,
    t,
    n = document.getElementById("downloadPage"),
    o = document.getElementById("signinPage");
  n &&
    ((e = document.getElementById("downloadMessage")) && (e.textContent = chrome.i18n.getMessage("downloadMessage")),
    (t = document.getElementById("downloadButton")) &&
      ((t.textContent = chrome.i18n.getMessage("downloadButton")),
      t.addEventListener("click", function (e) {
        var t = this.href;
        chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
          e && e[0] && chrome.tabs.update(e[0].id, { url: t }), window.close();
        });
      })));
  o &&
    ((e = document.getElementById("signinMessage")) && (e.textContent = chrome.i18n.getMessage("enableBookmarksMessage")),
    (t = document.getElementById("signinButton")) &&
      ((t.textContent = chrome.i18n.getMessage("signinButton")),
      t.addEventListener("click", function (e) {
        try {
          chrome.runtime.sendMessage({ cmd: "LaunchiCP" });
        } catch (e) {}
        window.close();
      })));
  var s = document.getElementById("dismiss");
  s &&
    s.addEventListener("click", function () {
      window.close();
    }),
    chrome.runtime.sendMessage({ cmd: "IsSupportedOS" }, function (e) {
      e.isSupportedOS
        ? chrome.runtime.sendMessage({ cmd: "GetiCPState" }, function (e) {
            updatePopup(e.iCPState);
          })
        : ((document.body.style.width = "450px"),
          n && (n.style.display = "none"),
          o && (o.style.display = "none"),
          (metroPage.style.display = "block"));
    }),
    document.body.classList.remove("loading");
}
chrome.runtime.onMessage.addListener(function (e, t, n) {
  "UpdatePopup" === e.cmd && updatePopup(e.iCPState);
}),
  window.addEventListener("load", function () {
    loadPopup();
  });
