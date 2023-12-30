(() => {
  "use strict";
  try {
    window.addEventListener(
      "message",
      function (e) {
        if (e.source != window || "NUCLEUS_FORCE_REFRESH" !== e.data.type) return;
        /^https:\/\/[^\/\.]+\.(sharepoint|sharepoint\-df)\.com$/gm.test(e.origin) &&
          (e.data.messageData
            ? chrome.runtime.sendMessage({ activity: "nucleusMessage", body: e.data.messageData }, function (s) {
                !0 === s || window.postMessage({ type: "NUCLEUS_REFRESH_COMPLETE", messageData: s }, e.origin);
              })
            : window.postMessage({ type: "NUCLEUS_REFRESH_COMPLETE", messageData: void 0 }, e.origin));
      },
      !0
    ),
      window && window.sessionStorage && window.sessionStorage.setItem("nucleus.installed", "true");
  } catch (e) {}
})();
