!(function fnApiIIFE() {
  var i = Okta.Q,
    s = Okta.Constants,
    a = Okta.BrowserUtil,
    e = Okta._okta,
    t = e.chain,
    o = e.contains,
    u = e.flatten,
    c = e.omit,
    E = e.reduce,
    p = Okta.fn.base.timestamp,
    n = (Okta.fn.api = {}),
    e = "/enduser/api/v1",
    r = {
      ENDUSER_HOME: "/api/internal/enduser/home",
      ENDUSER_HOME_V1: e + "/home",
      TABS: "/api/v1/users/me/home/tabs?expand=items%2Citems.resource",
      ENDUSER_SECTIONS_V1: e + "/sections?expand=items%2Citems.resource",
      ENDUSER_RECENTLY_USED_APPS: "/api/internal/enduser/recently-used-apps",
      ENDUSER_RECENTLY_USED_APPS_V1: e + "/recently-used-apps",
      ENDUSER: "/api/enduser/v1",
      ENDUSER_VAULT: "/api/internal/enduser/vault",
      PERSONAL_ENDUSER: "/okta-personal/api/v1",
      OKTA_PERSONAL_CORE_SERVICE_ROOT_URL: "/okta-personal/api/v2/core"
    };
  (n.prependPath = function (e) {
    return "/api/plugin/2" + e;
  }),
    (n.prependEndUserPath = function (e) {
      return r.ENDUSER + e;
    }),
    (n.prependPersonalEndUserPath = function (e) {
      return r.PERSONAL_ENDUSER + e;
    }),
    (n.getEndUserHomeUri = function (e) {
      return e && e.orgSettings && e.orgSettings.pluginNewEndUserInternalAPIsEnabled ? r.ENDUSER_HOME_V1 : r.ENDUSER_HOME;
    }),
    (n.getEndUserHomeUriAppendPluginSettings = function (e) {
      return [n.getEndUserHomeUri(e), e];
    }),
    (n.getRecentlyUsedAppsUri = function (e) {
      return e && e.orgSettings && e.orgSettings.pluginNewEndUserInternalAPIsEnabled
        ? r.ENDUSER_RECENTLY_USED_APPS_V1
        : r.ENDUSER_RECENTLY_USED_APPS;
    }),
    (n.getRecentlyUsedAppsPersonalUri = function (e) {
      return function () {
        return r.OKTA_PERSONAL_CORE_SERVICE_ROOT_URL + "/recently_used_app/" + e;
      };
    }),
    (n.getEndUserVaultUri = function (e) {
      return e && e.orgSettings && e.orgSettings.pluginOktaPersonalCoreServiceEnabled
        ? r.OKTA_PERSONAL_CORE_SERVICE_ROOT_URL + "/me"
        : r.ENDUSER_VAULT;
    }),
    (n.getPOktaMonolithEndUserVaultUri = function () {
      return r.ENDUSER_VAULT;
    }),
    (n.getSelfServiceSiteInfo = function (e) {
      return e && e.orgSettings && e.orgSettings.pluginRunOnAppSignupEnabled ? "/self-service-site-maps" : "/hashed-self-service-sites";
    }),
    (n.getCheckPluginFirstPartyAppUri = function () {
      return n.prependPath("/check-plugin-session?check_fpa=true");
    }),
    (n.getToSettings = function (e, t) {
      var n = -1 == e.indexOf("?") ? "?" : "&";
      return {
        type: "get",
        url: e + n + "plugin_version=" + (t.backgroundVersion + "-" + t.contentVersion),
        headers: { Accept: "application/json;charset=utf-8" }
      };
    }),
    (n.postToSettings = function (e, t) {
      return { type: "post", url: e, data: t, headers: { Accept: "application/json;charset=utf-8" } };
    }),
    (n.patchToSettings = function (e, t) {
      return { type: "PATCH", url: e, data: t, headers: { Accept: "application/json;charset=utf-8" } };
    }),
    (n.getTabsPathInfo = function (e) {
      if (e && e.orgSettings && e.orgSettings.pluginOktaPersonalCoreServiceEnabled)
        return r.OKTA_PERSONAL_CORE_SERVICE_ROOT_URL + "/me/tabs";
      var t = e.orgSettings && e.orgSettings.pluginNewEndUserSectionsAPIsEnabled ? r.ENDUSER_SECTIONS_V1 : r.TABS;
      return e.orgSettings && e.orgSettings.pluginPopoverQuickAccessAppsEnabled ? t + "&type=all" : t;
    }),
    (n.getOktaPersonalCoreServiceTabsUri = function () {
      return r.OKTA_PERSONAL_CORE_SERVICE_ROOT_URL + "/tabs";
    }),
    (n.isEnduserHomeValid = function (e) {
      return !!e && !!e.userId && !!e.orgId;
    }),
    (n.postToPendoTrackEventSettings = function (e, t, n, r) {
      var i = t.timestamp || p(),
        t = c(t, "timestamp"),
        t = {
          type: "track",
          event: e,
          visitorId: n.userId,
          accountId: n.orgId,
          timestamp: i,
          properties: t,
          context: { userAgent: a.getUserAgent(), title: "okta-plugin" }
        },
        n = o(s.OktaPersonalOrgIds, n.orgId) ? "d962b3a3-fb4e-4fe6-507a-39e016bb3fb4" : "cc0bda8c-c34a-4b91-5719-634058959cf0";
      return {
        type: "post",
        url: r ? s.PendoEventTrackUrlDebug : s.PendoEventTrackUrl,
        data: JSON.stringify(t),
        headers: { "content-type": "application/json", "x-pendo-integration-key": n }
      };
    }),
    (n.setSessionData = function (e, t) {
      return e && (e.idx ? (t["X-Okta-Idx-Session-Jwe"] = e.idx) : ((t["X-Session-Id"] = e.sid), (t["X-Device-Token"] = e.DT))), t;
    }),
    (n.setAuthData = function (e, t) {
      return e && e.access_token && (t.Authorization = "Bearer " + e.access_token.accessToken), t;
    }),
    (n.createApiForAccount = function (e, t) {
      var n = new Okta.Storage(e),
        r = new Okta.CryptoManager(window);
      return n.readMultiAccount().then(function () {
        return n.setCurrentAccountIndex(t), new Okta.Api(e, n, r);
      });
    }),
    (n.paginateRequest = function (r, e, n) {
      e = t(e)
        .groupBy(function (e, t) {
          return Math.floor(t / n);
        })
        .toArray()
        .value();
      return E(
        e,
        function (e, n) {
          return e.then(function (t) {
            return r(n).then(function (e) {
              return t.push(e), i(t);
            });
          });
        },
        i([])
      ).then(function (e) {
        return u(e, 1);
      });
    });
})();
