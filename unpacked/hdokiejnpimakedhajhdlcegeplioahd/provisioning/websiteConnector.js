var sendBackground = LPPlatform.requestFrameworkInitializer(function (n) {
  (n.fromExtension = !0), window.postMessage(n, window.location.origin);
});
window.addEventListener("message", function (n) {
  var o = n.data && n.data.data;
  n.origin !== window.location.origin || n.data.fromExtension || (o.cmd && "Provisioning" !== o.cmd[0]) || sendBackground(n.data);
});
