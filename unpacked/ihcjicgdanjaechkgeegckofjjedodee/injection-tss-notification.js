(() => {
  var e = new URLSearchParams(document.currentScript.src.split("?")[1]).get("nonce");
  let i = window.Notification.requestPermission;
  console.debug("MBTSS_NOTIFICATION: Nonce: ", e),
    (window.Notification.requestPermission = function () {
      console.debug("TSS: Detected a suspicious permission request");
      let s = [].slice.call(arguments);
      return (
        window.top.postMessage(JSON.parse(JSON.stringify({ type: "scam", subtype: "notificationLoop", parameters: s, nonce: e })), "*"),
        i.apply(this, s)
      );
    });
})();
