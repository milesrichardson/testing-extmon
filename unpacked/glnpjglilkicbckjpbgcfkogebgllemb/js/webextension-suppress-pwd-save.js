Okta.SuppressPwdSave = function () {
  var o = {},
    t = Okta.Q,
    e = 2e3,
    r = Okta.fn.storage.wrapVal,
    s = 0,
    n = 0,
    i = {},
    a = Okta.fn.bg.chromeP;
  function u() {
    ++n;
    Log.info("Saving password is turned off temporarily. Restore requests: " + n);
    setTimeout(function () {
      --n;
      o.restoreSavePassword();
    }, e);
  }
  function c(e) {
    o.checkSuppressTabOnActivate(e.tabId);
  }
  function f(e) {
    o.deleteSuppressTab(e);
  }
  function p(e, r) {
    o.deleteSuppressTab(r);
  }
  function d(e) {
    o.checkSuppressTabOnWindowFocusChange(e);
  }
  o.restoreSavePassword = function () {
    if (!chrome.privacy || !chrome.privacy.services) {
      Log.info("Plugin doesn't have privacy permissions");
      return t();
    }
    if (n != 0) {
      Log.info("Restore postponed by SSO. Shared count: " + n);
      return t();
    }
    if (i[s]) {
      Log.info("Restore postponed by tab " + s);
      return t();
    }
    return a.privacy.services.passwordSavingEnabled.get({}).then(function (e) {
      if (e.levelOfControl === "controlled_by_this_extension") {
        Log.info("Reset password to user defaults.");
        chrome.privacy.services.passwordSavingEnabled.clear({});
      }
    });
  };
  o.turnOffSuppressPassword = function () {
    return a.privacy.services.passwordSavingEnabled.get({}).then(function (e) {
      if (!e.value) {
        Log.info("Saving password is already turned off.");
      }
      if (e.levelOfControl !== "controllable_by_this_extension" && e.levelOfControl !== "controlled_by_this_extension") {
        Log.error("Plugin has no access to password saving: " + e.levelOfControl);
        return false;
      }
      return a.privacy.services.passwordSavingEnabled.set({ value: false }).then(function () {
        if (!!chrome.runtime.lastError) {
          Log.error("Failed to turn off pwd manager: " + chrome.runtime.lastError);
          return false;
        }
        return true;
      });
    });
  };
  o.turnOffByTab = function (e) {
    Log.info("Saving password is turned off by tab " + e + ", will restore later");
    o.setSuppressTab(e);
    if (e != s) {
      return t();
    }
    return o.turnOffSuppressPassword();
  };
  o.turnOffBySSO = function () {
    return o.turnOffSuppressPassword().then(function (e) {
      if (!e) {
        return;
      }
      Log.info("Saving password is turned off by SSO, will restore later");
      u();
    });
  };
  o.turnOffSavePasswordFeature = function (e, r) {
    if (!chrome.privacy || !chrome.privacy.services) {
      var n = "Plugin doesn't have privacy permissions";
      Log.info(n);
      return t({ errorCode: n });
    }
    var s = !!r && !!r.byTab;
    return s ? o.turnOffByTab(e) : o.turnOffBySSO();
  };
  o.hasPrivacyPermissions = function () {
    if (!chrome.privacy || !chrome.privacy.services) {
      return t(r(false));
    }
    return a.permissions.contains({ permissions: ["privacy"] }).then(function (e) {
      return r(!!e);
    });
  };
  o.setSuppressTab = function (e) {
    i[e] = true;
  };
  o.deleteSuppressTab = function (e, r) {
    var n = false;
    if (e === s) {
      if (!r) {
        s = 0;
      }
      n = true;
    }
    if (!i[e]) {
      return;
    }
    delete i[e];
    n && o.restoreSavePassword();
  };
  o.checkSuppressTabOnActivate = function (e) {
    var r = !!i[s];
    var n = !!i[e];
    s = e;
    if (r === n) {
      return;
    }
    i[e] ? o.turnOffSavePasswordFeature(e, { byTab: true }) : o.restoreSavePassword();
  };
  o.checkSuppressTabOnWindowFocusChange = function (e) {
    if (e === chrome.windows.WINDOW_ID_NONE) {
      return;
    }
    chrome.tabs.query({ active: true, windowId: chrome.windows.WINDOW_ID_CURRENT }, function (e) {
      if (chrome.runtime.lastError) {
        console.log("checkSuppressTabOnWindowFocusChange: " + chrome.runtime.lastError.message);
        return;
      }
      if (e.length > 0) {
        o.checkSuppressTabOnActivate(e[0].id);
      }
    });
  };
  o.getPasswordSavingDetails = function () {
    if (!chrome.privacy || !chrome.privacy.services) {
      return t({ levelOfControl: "does_not_have_privacy_permissions" });
    }
    return a.privacy.services.passwordSavingEnabled.get({});
  };
  o.requestPrivacyPermissions = function () {
    return a.permissions.request({ permissions: ["privacy"] });
  };
  o.initialize = function () {
    chrome.tabs.onActivated.addListener(c);
    chrome.tabs.onRemoved.addListener(f);
    chrome.tabs.onReplaced.addListener(p);
    chrome.windows.onFocusChanged.addListener(d);
    o.restoreSavePassword();
  };
  return o;
};
