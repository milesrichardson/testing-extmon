!(function (n) {
  window.bg = n.LPPlatform.getBackgroundInterface();
})(chrome.extension.getBackgroundPage()),
  window.addEventListener("DOMContentLoaded", function () {
    Topics.get(Topics.INITIALIZED).publish(), ExtensionDropdown.open();
  });
