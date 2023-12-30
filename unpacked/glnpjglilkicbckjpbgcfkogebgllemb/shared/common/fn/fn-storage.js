!(function FnStorageIIFE() {
  var t = (Okta.fn.storage = {}),
    r = JSON.stringify,
    n = JSON.parse,
    s = Okta.Q,
    e = Okta._okta,
    o = e.partial,
    i = e.keys,
    c = e.map,
    l = e.each,
    a = 90 * Okta.Constants.Time.OneDay;
  (t.wrapVal = function (e) {
    return r({ val: e });
  }),
    (t.unwrapVal = function (e) {
      return e ? n(e).val : null;
    }),
    (t.updateAcknowledgedActions = function (t, n) {
      return s.all([t.getAckTimes(), t.getTrackedFirstTimeActions()]).spread(function (e, r) {
        if (!r.suppressPasswordAck)
          return e.suppressPasswordAck
            ? Date.now() - e.suppressPasswordAck > a
              ? ((r.suppressPasswordAck = !0), t.setTrackedFirstTimeActions(r).then(o(n.updateBadge, { text: "", color: "" })))
              : void 0
            : ((e.suppressPasswordAck = Date.now()), t.setAckTimes(e));
      });
    }),
    (t.getUserPinnedOnToolbar = function (e) {
      return e.getUserPinned().fail(function (e) {
        return (
          Log.warn("fnStorage::getUserPinnedOnToolbar: failed to update user pinned on toolbar, returning false, error: " + e.errorCode), !1
        );
      });
    }),
    (t.updateUserPinnedOnToolbar = function (e, r) {
      return t.getUserPinnedOnToolbar(r).then(e.setUserPinnedOnToolbar);
    }),
    (t.apiStorage = {
      get: function (r) {
        var t = Okta.Q.defer();
        return (
          chrome.storage.local.get(r, function (e) {
            chrome.runtime.lastError && t.reject(chrome.runtime.lastError.message), t.resolve(e[r]);
          }),
          t.promise
        );
      },
      set: function (e, r) {
        var t = Okta.Q.defer(),
          n = {};
        return (
          (n[e] = r),
          chrome.storage.local.set(n, function () {
            chrome.runtime.lastError && t.reject(chrome.runtime.lastError.message), t.resolve(r);
          }),
          t.promise
        );
      },
      remove: function (e) {
        var r = Okta.Q.defer();
        return chrome.storage.local.remove(e, r.resolve), r.promise;
      },
      clear: function () {
        var e = Okta.Q.defer();
        return (
          chrome.storage.local.clear(function () {
            chrome.runtime.lastError && e.reject(chrome.runtime.lastError.message), e.resolve(!0);
          }),
          e.promise
        );
      },
      getAll: function () {
        var r = Okta.Q.defer();
        return (
          chrome.storage.local.get(null, function (e) {
            chrome.runtime.lastError && r.reject(chrome.runtime.lastError.message), r.resolve(e);
          }),
          r.promise
        );
      }
    }),
    (t.syncStorageData = function (o, r) {
      var a = i(o),
        e = c(a, function (r) {
          return t.apiStorage.get(o[r].key).then(function (e) {
            o[r].val = e;
          });
        });
      s.all(e).then(function () {
        chrome.storage.onChanged.addListener(function (t, e) {
          var n;
          "local" === e &&
            ((n = !1),
            l(a, function (e) {
              var r = o[e].key;
              t[r] !== undefined && ((o[e].val = t[r].newValue), (n = !0));
            }),
            n && r && r());
        }),
          r && r();
      });
    }),
    (t.siteFlowDataToFlow = function (e) {
      var r = { urls: {}, scripts: {}, message: e.message || "Signing in...", statusURI: e.statusURI || null, enteredFlow: !1 };
      return (
        e.flow &&
          ((r.urls = e.flow.urls.match),
          (r.annotated = e.flow.annotated),
          (r.appName = e.flow.appName),
          (r.signOnModeType = e.flow.signOnModeType),
          e.flow.scripts &&
            l(e.flow.scripts.script, function (e) {
              r.scripts[e.name] = e;
            })),
        r
      );
    });
})();
