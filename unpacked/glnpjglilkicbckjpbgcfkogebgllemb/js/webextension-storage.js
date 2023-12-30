Okta.Storage = function (n, t) {
  var o = Okta.Q;
  var e = Okta._okta;
  var a = e.each;
  var s = e.keys;
  var g = Okta.fn.storage.wrapVal;
  var u = Okta.fn.storage.unwrapVal;
  var r = {
    setPersistentState: t.set,
    getPersistentState: t.get,
    setSessionState: function (t, e) {
      n.set(t, g(e));
      return o(e);
    },
    getSessionState: function (t) {
      return o(u(n.get(t)));
    },
    setTabState: function (t, e, r) {
      var a = t + "_" + e;
      n.set(a, g(r));
      return o(r);
    },
    getTabState: function (t, e, r) {
      var a = t + "_" + r;
      return o(u(n.get(a)));
    }
  };
  var i = Okta.StorageBase(r, Okta.Constants.Storage);
  i.getStorageUsage = function () {
    return t.getAll().then(function (e) {
      try {
        var r = 0;
        var t = s(e);
        a(t, function (t) {
          r += t.length;
          r += JSON.stringify(e[t]).length;
        });
        return r;
      } catch (t) {
        Log.error("WebExtension::getLocalStorageUsage Error: {0}", t);
        return o.reject(t);
      }
    });
  };
  return i;
};
