const enableMvBackground = localStorage.getItem("enable_mv3_background");
enableMvBackground && (location.href = "https://lastpass.com/vault/vault.html"),
  document.addEventListener("DOMContentLoaded", function () {
    chrome.runtime.getBackgroundPage(function (e) {
      (window.bg = e.LPPlatform.getBackgroundInterface()), Topics.get(Topics.INITIALIZED).publish();
    });
  });
