!(function () {
  var r = null,
    i,
    o = LPPlatform.requestFrameworkInitializer(function (i) {
      (i.fromExtension = !0), r && r.target.postMessage(i, r.origin);
    }),
    e;
  window.addEventListener(
    "message",
    function (i) {
      var e = i.data,
        n = e && e.data;
      !e.type ||
        !(r =
          null === r && (i.origin === window.origin || ("undefined" != typeof bg && bg.get("base_url") === i.origin + "/"))
            ? { target: i.source, origin: i.origin }
            : r) ||
        r.target !== i.source ||
        r.origin !== i.origin ||
        e.fromExtension ||
        (n && n.cmd && "FederatedLogin" !== n.cmd[0] && "getVersion" !== n.cmd) ||
        o(e);
    },
    !0
  );
})();
