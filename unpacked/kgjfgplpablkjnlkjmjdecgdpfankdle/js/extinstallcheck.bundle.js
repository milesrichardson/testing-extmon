!(function () {
  let e = document.createElement("div");
  (e.id = "zoom-extension-installed-dom-mark"),
    (e.style.display = "none"),
    e.setAttribute("version", chrome.runtime.getManifest().version),
    document.body.appendChild(e);
})();
