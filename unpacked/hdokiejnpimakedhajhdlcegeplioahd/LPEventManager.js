LPEventManager = (function () {
  var n;
  return function () {
    var r = this,
      i = {};
    (r.getListeners = function (n) {
      var n = i[n];
      return n ? [].concat(n) : [];
    }),
      (r.addEventListener = function (n, e) {
        var t, t;
        (t = (t = i[n]) || (i[n] = [])).push(e);
      }),
      (r.removeEventListener = function (n, e) {
        var t = i[n];
        if (t) for (var r = 0; r < t.length; ++r) if (t[r] === e) return void t.splice(r, 1);
      }),
      (r.addEventListenerOnce = function (n, e) {
        var t = function () {
          r.removeEventListener(n, t), e.apply(this, arguments);
        };
        r.addEventListener(n, t);
      }),
      (r.publishEvent = function (n, e) {
        var t = i[n];
        if (t)
          for (var r = 0; r < t.length; ++r)
            try {
              t[r](e);
            } catch (n) {
              Raven.captureException(n);
            }
      });
  };
})();
