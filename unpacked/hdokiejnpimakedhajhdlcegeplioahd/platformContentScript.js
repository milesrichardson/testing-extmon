!(function (t) {
  var e = function (t) {
    var e = document.createElement("iframe"),
      n =
        ((e.src = t),
        LPContentScriptTools.setCSS(e, {
          border: "none",
          position: "relative",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          height: "100%",
          width: "100%",
          visibility: "visible",
          display: "block",
          "z-index": "2147483648",
          opacity: "100%",
          transform: "none",
          clip: "auto",
          "clip-path": "none",
          filter: "none",
          mask: "none"
        }),
        e.setAttribute("scrolling", "no"),
        e.setAttribute("name", "LPFrame"),
        document.createElement("div"));
    LPContentScriptTools.setCSS(n, {
      position: "fixed",
      "z-index": "2147483647",
      display: "none",
      width: "100%",
      height: "100%",
      opacity: "100%",
      visibility: "visible",
      transform: "none",
      clip: "auto",
      "clip-path": "none",
      filter: "none",
      mask: "none"
    }),
      n.appendChild(e),
      document.body.appendChild(n),
      (this.css = function (t) {
        LPContentScriptTools.setCSS(n, t);
      }),
      (this.close = function () {
        n.parentElement.removeChild(n);
      });
  };
  (t.newFrameContainer = function (t) {
    return new e(t);
  }),
    (t.onLoad = function (t, e) {
      "loading" === t.document.readyState ? t.addEventListener("DOMContentLoaded", e) : e();
    });
})((LPPlatform = "undefined" == typeof LPPlatform ? {} : LPPlatform));
