(function n() {
  var t = (Okta.fn.cookies = {});
  var e = Okta._okta;
  var r = e.filter;
  var o = e.find;
  var i = Okta.Q;
  var u = e.partial;
  var a = Okta.fn.bg.chromeP;
  function c(t, n) {
    return r(n, function (n) {
      return t.indexOf(n.name) > -1;
    });
  }
  function f(n, t) {
    return a.cookies.getAll(t).then(u(c, n));
  }
  function k(n, t) {
    var e = { url: n };
    if (!t) {
      return i(e);
    }
    return a.tabs.get(t).then(function (n) {
      if (n && n.cookieStoreId) {
        e.storeId = n.cookieStoreId;
      }
      return e;
    });
  }
  t.getCookieWithName = function (n, t) {
    return o(n, function (n) {
      return n.name === t;
    });
  };
  t.checkSessionCookie = function (n) {
    return (!!n.sid && !!n.DT) || !!n.idx;
  };
  t.getCookies = function (n, t, e) {
    return k(n, e).then(u(f, t));
  };
})();
