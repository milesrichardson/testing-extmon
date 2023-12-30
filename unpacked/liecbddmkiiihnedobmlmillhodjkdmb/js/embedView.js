!(function () {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = new Error().stack;
    n && ((e._sentryDebugIds = e._sentryDebugIds || {}), (e._sentryDebugIds[n] = "7e00228b-c530-5f24-a65d-a8a9c0c1109c"));
  } catch (e) {}
})();
(() => {
  "use strict";
  chrome.runtime.id;
  const e = document.createElement("style");
  e.append(
    "\n  html,\n  body {\n    overflow: hidden;\n  \n    margin: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n  \n    background: transparent;\n  }\n  \n  iframe {\n    border: none;\n    width: 100%;\n    height: 100%;\n  }\n  "
  ),
    document.head.append(e);
  const n = document.createElement("iframe"),
    t = ((e, n) => {
      e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
      const t = document.createElement("a");
      t.href = n;
      const r = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t.search);
      return null === r ? "" : r[1].replace(/\+/g, " ");
    })("session_id", window.location.href);
  (n.allowFullscreen = !0),
    (n.frameBorder = "0"),
    (n.src = `https://www.loom.com/embed/${t}?from_link_expand=true&${window.location.search}`),
    document.body.appendChild(n);
})();
//# sourceMappingURL=embedView.js.map
//# debugId=7e00228b-c530-5f24-a65d-a8a9c0c1109c
