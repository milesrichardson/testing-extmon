Okta.WindowUtil = (function (e) {
  var t = {};
  return (
    e &&
      ((t.setTimeout = function (t, n) {
        return e.setTimeout(t, n);
      }),
      (t.setInterval = function (t, n) {
        return e.setInterval(t, n);
      })),
    t
  );
})(Okta.window);
