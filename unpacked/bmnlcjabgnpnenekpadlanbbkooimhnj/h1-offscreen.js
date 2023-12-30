chrome.runtime.onMessage.addListener(function (e) {
  if ("offscreen:tag" === e.type) {
    var t = document.createElement("iframe");
    (t.style.display = "none"),
      (t.sandbox = "allow-forms allow-same-origin allow-scripts"),
      (t.src = e.affUrl),
      (t.id = "myFrame"),
      document.body.appendChild(t),
      setTimeout(function () {
        t.remove();
      }, 9e4);
    var a = document.getElementById("myFrame");
    chrome.runtime.sendMessage({
      type: "offscreen:tag:success",
      msg: "tagged wtih ".concat(e.affUrl, " ").concat(e.storeId, " ").concat(a.id)
    });
  }
});
