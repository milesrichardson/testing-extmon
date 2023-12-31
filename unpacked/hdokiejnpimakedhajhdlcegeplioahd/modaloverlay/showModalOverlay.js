!(function showModalOverlay() {
  var OVERLAY_ID_BASE = "lpiframeoverlay",
    body = document.body;
  if (body) {
    var overlayID = OVERLAY_ID_BASE + "modal";
    if (!document.getElementById(overlayID)) {
      var overlayElement = document.createElement("div");
      with (((overlayElement.id = overlayID), overlayElement.style))
        (backgroundColor = "#22313B"),
          (height = "100%"),
          (opacity = 0.5),
          (position = "fixed"),
          (right = 0),
          (top = 0),
          (width = "100%"),
          (zIndex = "1000000099");
      overlayElement.addEventListener("click", function (e) {
        this.parentNode.removeChild(this);
      }),
        overlayElement.addEventListener("contextmenu", function (e) {
          this.parentNode.removeChild(this);
        }),
        body.appendChild(overlayElement);
    }
  }
})();
