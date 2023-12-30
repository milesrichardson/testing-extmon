Okta.startBackgroundScript = function (i, u, p, d) {
  var g = 1e3,
    o = Okta.Q.when,
    c = Okta.fn.storage.wrapVal,
    l = Okta.fn.base.timestamp,
    r = Okta.fn.api.getToSettings,
    s = Okta.fn.api.prependPath,
    a = Okta.fn.api.setSessionData,
    P = Okta.fn.url.isOktaPersonalAccount,
    e = Okta._okta,
    k = e.first,
    f = e.filter,
    T = e.isUndefined,
    y = Okta.Q;
  function h(e) {
    return "_lock_" + e;
  }
  function b() {
    return T(i.isInstalledByUser) ? y(!0) : i.isInstalledByUser();
  }
  function v(e, t, n, o) {
    switch (e) {
      case "getSessionState":
        return u.get(n.key);
      case "setSessionState":
        return u.set(n.key, n.val);
      case "getPersistentState":
        return p.get(n.key);
      case "setPersistentState":
        return p.set(n.key, n.val);
      case "clearPersistentState":
        return p.clear && p.clear(), (n.result = !0), (n.browserType = i.getType()), n;
      case "requestPrivacyPermissions":
        return T(i.requestPrivacyPermissions)
          ? y({ errorCode: "requestPrivacyPermissions is not supported on " + i.getType() })
          : i.requestPrivacyPermissions();
      case "getTabId":
        return t;
      case "getTabInfo":
        return T(i.getTabInfo) ? y({ errorCode: "not supported by this version of the plugin" }) : i.getTabInfo(t);
      case "documentLoaded":
        return T(i.documentLoaded) ? y({ errorCode: "not supported by this version of the plugin" }) : i.documentLoaded(t, o);
      case "getBrowserType":
        return i.getType();
      case "getBackgroundVersion":
        return i.getBackgroundVersion();
      case "unlockSessionKey":
        return (a = n.key), u.set(h(a), null), !0;
      case "lockSessionKey":
        return (r = n.key), (s = l()), (a = h(r)), (!(r = u.get(a)) || s > r.lockTime + g) && (u.set(a, { lockTime: s }), !0);
      case "request":
        return d.ajax(n);
      case "openTab":
        return i.openTab(n.url);
      case "hasPrivacyPermissions":
        return i.hasPrivacyPermissions ? i.hasPrivacyPermissions() : y(c(!0));
      case "openPermissionsPage":
        return i.openPermissionsPage ? i.openPermissionsPage() : y({ errorCode: "openPermissionsPage is not supported on " + i.getType() });
      case "openSettingsPage":
        return i.openSettingsPage ? i.openSettingsPage() : y({ errorCode: "openSettingsPage is not supported on " + i.getType() });
      case "openOktaNewtab":
        return i.openOktaNewtab ? i.openOktaNewtab() : y({ errorCode: "openOktaNewtab is not supported on " + i.getType() });
      case "servePopover":
        return i.servePopover ? i.servePopover() : y({ errorCode: "servePopover is not supported on " + i.getType() });
      case "suppressSavePassword":
        return i.suppressSavePassword
          ? i.suppressSavePassword(t, n)
          : y({ errorCode: "suppressSavePassword is not supported on " + i.getType() });
      case "getPasswordSavingDetails":
        return i.getPasswordSavingDetails
          ? i.getPasswordSavingDetails()
          : y({ errorCode: "getPasswordSavingDetails is not supported on " + i.getType() });
      case "openTabForAccountChooser":
        return T(i.openTabForAccountChooser)
          ? y({ errorCode: "not supported by this version of the plugin", url: n.url })
          : i.openTabForAccountChooser(n.url);
      case "closeTab":
        return i.closeTab(t);
      case "getCookies":
        return T(i.getCookies)
          ? y({ errorCode: "not supported by this version of the plugin" })
          : i.getCookies(n.key.hostUrl, n.key.cookieNames, t);
      case "getLocalStorageUsage":
        return T(i.getLocalStorageUsage)
          ? y({ errorCode: "not supported by this version of the plugin" })
          : i.getLocalStorageUsage().fail(function (e) {
              return y({ errorCode: "failed to get the local storage usage: " + e });
            });
      case "updateBadge":
        return T(i.updateBadge) ? y.resolve() : i.updateBadge(n.key);
      case "downloadExtensionLogs":
        return T(i.downloadExtensionLogs) ? y.resolve() : i.downloadExtensionLogs(n.key);
      case "setUninstallURL":
        return T(i.setUninstallURL) ? y.resolve() : i.setUninstallURL(n.url || "");
      case "isInstalledByUser":
        return b();
      case "injectContentScript":
        return i.injectContentScript && i.injectContentScript(t, o), y();
      case "getSessionTabState":
        return u.get(n.key + "_" + t);
      case "sendMsgToCurrentTab":
        return T(i.sendMsgToCurrentTab)
          ? y({ errorCode: "sendMsgToCurrentTab not supported on " + i.getType() })
          : i.sendMsgToCurrentTab(n);
      case "getUserPinned":
        return T(i.getUserPinned) ? y({ errorCode: "getUserPinned not supported on " + i.getType() }) : i.getUserPinned();
      case "openPopup":
        return T(i.openPopup) ? y({ errorCode: "openPopup not supported on " + i.getType() }) : i.openPopup(n.key);
      default:
        return y({ errorCode: "Unknown msg type: " + e });
    }
    var r, s, a;
  }
  function S(e) {
    p.set("PENDO_ONBOARDING_DATA", { sentTo: e, timestamp: l() });
  }
  i.on("injectReady", function (e) {
    i.injectScript(e, null);
  }),
    i.on("messageFromContent", function (t) {
      var n = t.msg,
        e = v(n.type, t.tabId, n.data, t.frameId);
      o(e, function (e) {
        i.post({ msg: { id: n.id, type: n.type, data: e }, tabId: t.tabId, portInfo: t.portInfo });
      }).done();
    }),
    i.on("postInstall", function () {
      return (
        p.set("ONBOARDING_FLOW", !0),
        b()
          .then(function (n) {
            return i.tryOktaPersonalPasswordlessPostInstall().then(function (e) {
              if (e && 0 < e.length) {
                var t = k(e),
                  e = t.url || null,
                  e = e ? new URL(e).origin : null;
                if (e && P(e))
                  return (
                    Okta.window.setTimeout(function () {
                      i.highlightAndRefreshTab(t.id);
                    }, 500),
                    y(null)
                  );
              }
              return Okta.Config.onboardingLaunchNewTab && n ? i.getOrgsWithSessionCookies() : y(null);
            });
          })
          .then(function (e) {
            if (e)
              if (e.oktaAccounts && 0 !== e.oktaAccounts.length) {
                var t = 1 === e.oktaAccounts.length;
                if (!e.sessions || 0 === e.sessions.length)
                  return (
                    i.openTab(t ? k(e.oktaAccounts).origin + "/login/login.htm" : "https://login.okta.com"),
                    void S(t ? "orgLogin" : "oktaLogin")
                  );
                var n = f(e.sessions, function (e) {
                  return e.tabId !== undefined;
                });
                if (!t && 0 === n.length) return i.openTab("https://login.okta.com"), void S("oktaLogin");
                var o = k(t ? e.sessions : n),
                  n = r(o.domain + s("/settings"), { backgroundVersion: i.getBackgroundVersion(), contentVersion: "" });
                a({ sid: o.sid, DT: o.dt, idx: o.idx }, n.headers),
                  d.ajax(n).then(function (e) {
                    e
                      ? (p.set("PLUGIN_SETTINGS", { override: {}, orgSettings: e }),
                        e.pluginOnboardingEnabled
                          ? o.tabId !== undefined && o.isDashboardTab
                            ? (i.highlightAndRefreshTab(o.tabId), S("refreshDashboard"))
                            : (i.openTab(o.domain + "/app/UserHome"), S("openDashboard"))
                          : S("none"))
                      : S("none");
                  });
              } else S("zeroOrgs");
          })
      );
    });
};
