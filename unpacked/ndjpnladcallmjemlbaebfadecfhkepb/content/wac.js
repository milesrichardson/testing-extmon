(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    try {
      window.localStorage.setItem("ChromeExtensionBarDismiss", "true"),
        window.localStorage.setItem("IsOfficeOnlineExtensionInstalled", "true"),
        window.localStorage.setItem("IsCopyPasteSupported", "true");
    } catch (e) {}
  });
})();
