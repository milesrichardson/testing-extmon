chrome.runtime.sendMessage("request for webAuthnOptions", function (o) {
  window.postMessage(o, window.location.protocol + "//" + window.location.host);
});
