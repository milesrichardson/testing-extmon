(bg = parent.bg),
  (LPPlatform = parent.LPPlatform),
  (goTo = function (e, t) {
    var a;
    0 === e.indexOf(bg.get("base_url")) &&
      (((a = document.createElement("iframe")).src = e),
      document.body.appendChild(a),
      LPPlatform.addEventListener(a, "load", function () {
        a.setAttribute("class", "loaded"), t && t();
      }));
  }),
  LPPlatform.addEventListener(window, "message", function (e) {
    var t;
    0 === (e.origin + "/").indexOf(bg.get("base_url")) && processAcctsIframeMessage(e);
  });
