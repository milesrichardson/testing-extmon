Okta.Request = function (i, s, o) {
  var a = Okta.Q,
    t = Okta._okta,
    r = Okta.fn.storage.wrapVal,
    u = t.omit,
    t = {
      ajax: function (t) {
        var n,
          e = t.storeResponse,
          t = u(t, "storeResponse");
        if (!e)
          return i(t).fail(function (t) {
            return t;
          });
        if ("persistent" !== e.destination && "session" !== e.destination) throw "StoreResponse destination is invalid: " + e.destination;
        return (
          (n = "session" === e.destination ? s : o).set(e.key, e.pendingVal),
          i(t)
            .then(function (t) {
              n.set(e.key, r(t));
            })
            .fail(function () {
              n.set(e.key, null);
            }),
          a(!0)
        );
      }
    };
  return t;
};
