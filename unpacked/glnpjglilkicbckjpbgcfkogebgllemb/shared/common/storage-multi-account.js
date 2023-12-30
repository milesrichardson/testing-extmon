Okta.StorageMultiAccount = function (r) {
  var t = {},
    c = Okta.Q,
    o = Okta._okta,
    n = o.find,
    i = o.partial,
    a = o.map,
    f = Okta.fn.base.orDefault,
    l = Okta.fn.promises.composeP,
    u = !1,
    e = -1,
    A = [];
  function d(t) {
    return "setAcc" + t;
  }
  function s(t) {
    return "getAcc" + t;
  }
  function g(t) {
    return "removeAcc" + t;
  }
  function k(t, n) {
    return 0 <= n ? t + "_" + n : t;
  }
  function m(t, n, u, e) {
    return t(k(n, u), e);
  }
  function p(t) {
    if (!u) return -1;
    t = n(t, function (t) {
      return t.isCurrentAccount;
    });
    return t ? t.index : -1;
  }
  function y(u, e) {
    return r.getAllowListedOktaAccounts().then(function (t) {
      t = a(t, function (n) {
        return n.index < 0
          ? c()
          : u(k(e, n.index)).then(function (t) {
              return { data: t, account: n };
            });
      });
      return c.all(t);
    });
  }
  return (
    (t.makeMultiAccountKey = function (u) {
      return function (t, n) {
        return u(k(t, e), n);
      };
    }),
    (t.addMultiAccountMethods = function (t, n, u) {
      var e = t.set,
        c = t.get,
        t = t.remove;
      A.push(n),
        (r[s(n)] = l(f(u.def), i(m, c, u.key))),
        (r[d(n)] = i(m, e, u.key)),
        (r["getAll" + n] = i(y, c, u.key)),
        (r[g(n)] = t ? i(m, t, u.key) : i(m, e, u.key, o, u.def === undefined ? null : u.def));
    }),
    (t.getCurrentAccountIndex = function () {
      return e;
    }),
    (t.setCurrentAccountIndex = function (t) {
      e = t;
    }),
    (t.setAllowListedOktaAccounts = function (t) {
      e = p(t);
    }),
    (t.readMultiAccount = function () {
      return c.all([r.getDBGPluginSettings(), r.getAllowListedOktaAccounts()]).spread(function (t, n) {
        (u = t && t.multiAccountAwarePlugin), (e = p(n));
      });
    }),
    (t.clearAccountData = function (n) {
      return c.all(
        a(A, function (t) {
          return r[g(t)](n);
        })
      );
    }),
    (t.copyMultiAccountData = function (u, e) {
      return c.all(
        a(A, function (t) {
          return (n = e), r[s((t = t))](u).then(i(r[d(t)], n));
          var n;
        })
      );
    }),
    (t.migrateToMultiAccount = function () {
      return t.copyMultiAccountData(-1, t.getCurrentAccountIndex()).then(i(t.clearAccountData, -1));
    }),
    (t.migrateToSingleAccount = function () {
      return t.copyMultiAccountData(t.getCurrentAccountIndex(), -1).then(i(t.clearAccountData, t.getCurrentAccountIndex()));
    }),
    t
  );
};
