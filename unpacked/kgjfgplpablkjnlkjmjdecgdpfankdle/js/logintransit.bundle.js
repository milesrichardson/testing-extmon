!(function () {
  let e = "",
    o = document.querySelector("#zm_web_domain") || document.querySelector("#zm_domain_url");
  o && (e = o.value || ""), chrome.runtime.sendMessage({ type: "passZoomExtLoginSession", info: { url: e } }, (e) => {});
})();
