Okta.extensionPage = function () {
  var n = {},
    t = "ENABLE_SUPPRESS_PASSWORD",
    o = "PLUGIN_SETTINGS",
    a = "OKTA_DOMAIN";
  n.hasPrivacyPermissions = function (e) {
    chrome.permissions.contains({ permissions: ["privacy"] }, e);
  };
  n.getPasswordSavingDetails = function (e) {
    chrome.privacy.services.passwordSavingEnabled.get({}, e);
  };
  n.applySetting = function () {
    n.getPasswordSavingDetails(function (e) {
      if (e.levelOfControl === "controllable_by_this_extension" || e.levelOfControl === "controlled_by_this_extension") {
        localStorage.setItem(t, '{"val":true}');
      }
    });
  };
  n.requestPrivacyPermissions = function (t) {
    chrome.permissions.request({ permissions: ["privacy"] }, function (e) {
      t(e);
      e && n.applySetting();
    });
  };
  n.getLocale = function () {
    var e = JSON.parse(localStorage.getItem(o));
    return (e && e.val && e.val.orgSettings && e.val.orgSettings.pluginLocale) || "en";
  };
  n.openPrivacy = function () {
    var e = JSON.parse(localStorage.getItem(a));
    if (e && e.val) {
      chrome.tabs.create({ url: e.val + "/privacy" });
    }
  };
  n.openOkta = function () {
    chrome.tabs.create({ url: "https://www.okta.com" });
  };
  return n;
};
