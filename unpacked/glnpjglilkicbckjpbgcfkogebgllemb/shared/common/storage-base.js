Okta.StorageBase = function (t, e) {
  var u = {},
    s = Okta.StorageMultiAccount(u),
    a = Okta._okta,
    r = a.partial,
    a = a.each,
    i = Okta.fn.base.keyToCamelCase,
    l = Okta.fn.base.orDefault,
    A = Okta.fn.promises.composeP,
    g = {
      Session: { get: t.getSessionState, set: t.setSessionState },
      Persistent: { get: t.getPersistentState, set: t.setPersistentState, remove: t.removePersistentState },
      Tab: { get: t.getTabState, set: t.setTabState, update: t.updateTabState }
    };
  a(e, function (t) {
    var e, a, n, c, o;
    (o = g[(e = t).type])
      ? ((a = e.name || i(e.key)),
        (n = o.set),
        (c = o.get),
        (t = o.update),
        n &&
          c &&
          (e.multiAccount && (s.addMultiAccountMethods(o, a, e), (n = s.makeMultiAccountKey(o.set)), (c = s.makeMultiAccountKey(o.get))),
          (u["get" + a] = A(l(e.def), r(c, e.key, undefined))),
          (u["set" + a] = r(n, e.key)),
          (u["clear" + a] = r(n, e.key, e.def)),
          t && (u["update" + a] = r(t, e.key))))
      : Log.warn("StorageBase::not supported storage type: " + e.type);
  });
  var n = u.setAllowListedOktaAccounts;
  return (
    (u.setAllowListedOktaAccounts = function (t) {
      return s.setAllowListedOktaAccounts(t), n && n(t);
    }),
    (u.readMultiAccount = s.readMultiAccount),
    (u.getCurrentAccountIndex = s.getCurrentAccountIndex),
    (u.setCurrentAccountIndex = s.setCurrentAccountIndex),
    (u.clearAccountData = s.clearAccountData),
    (u.copyMultiAccountData = s.copyMultiAccountData),
    (u.migrateToMultiAccount = s.migrateToMultiAccount),
    (u.migrateToSingleAccount = s.migrateToSingleAccount),
    u
  );
};
