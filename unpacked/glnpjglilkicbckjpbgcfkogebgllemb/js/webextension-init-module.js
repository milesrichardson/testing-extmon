(function () {
  var n = chrome.runtime.connect(),
    e = Okta.ModuleExport,
    t = e.port;
  t.post = function (e) {
    n.postMessage(e);
  };
  n.onMessage.addListener(function (e) {
    t.trigger("message", e);
  });
  e.main(t);
})();
