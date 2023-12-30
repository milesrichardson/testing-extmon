"use strict";
function setupDocumentObserver() {
  new MutationObserver(function (e) {
    for (const t of e)
      for (const e of t.addedNodes)
        e instanceof HTMLIFrameElement &&
          (e.src.match(/^https:\/\/(kami\.app|kamitest\.shortcm\.li)\//) || e.src.startsWith("https://web.kamihq.com")) &&
          (e.setAttribute(
            "allow",
            "accelerometer *; ambient-light-sensor *; autoplay *; camera *;     encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *;     microphone *; midi *; payment *; picture-in-picture *; speaker *; usb *; vr *;     clipboard-read *; clipboard-write *; display-capture *;"
          ),
          (e.src = e.src));
  }).observe(document.body, { childList: !0, subtree: !0, attributes: !1, characterData: !1 });
}
setupDocumentObserver();
