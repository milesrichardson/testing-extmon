Okta.RequestHeaders = function (e, a, r, t) {
  var n = {};
  var i = Okta._okta;
  var o = i.noop;
  var s = Okta.RequestHeadersBase(e, a, r, t);
  var u = Okta.fn.url.getOktaDomains;
  var l = Okta.fn.url.getSubDomain;
  var d = Okta.fn.url.getOktaDomainsRegexp;
  var v = Okta.fn.storage.syncStorageData;
  var c = Okta.fn.bg.getPendingConsentAccount;
  var f = 5;
  var g = "USER_PINNED_ON_TOOLBAR";
  var m = "X-Okta-Plugin-Options";
  var p = s.HeaderConstants;
  var O = s.getStorageCache();
  O.userPinnedOnToolbar = { key: g, val: false };
  function _(e) {
    var a = c(O.dbgPluginSettings.val, O.allowListedAccounts.val, e ? O.domains.val : null);
    return { header: p.EXTENDED_PLUGIN_ACCOUNTS_USER_AGENT_KEY, value: a, operation: "set" };
  }
  function E() {
    return { header: p.EXTENDED_USER_AGENT_KEY, value: p.PLUGIN_USER_AGENT_VALUE, operation: "set" };
  }
  function R() {
    var e = { pinned: !!O.userPinnedOnToolbar.val };
    return { header: m, value: JSON.stringify(e), operation: "set" };
  }
  function h() {
    var e = u().slice(),
      a = O.domains.val && l(O.domains.val.customDomain),
      r = 1,
      t = [],
      n = 1,
      i = [n];
    function o(e, a) {
      ++r;
      a || i.push(r);
      t.push({
        id: a ? n : r,
        action: { type: "modifyHeaders", requestHeaders: [E(), _(a), R()] },
        condition: { regexFilter: e, resourceTypes: ["main_frame"] }
      });
    }
    while (e.length) {
      o(d(e.splice(0, f)));
    }
    if (a) {
      o(d([a]), true);
    }
    chrome.declarativeNetRequest.updateSessionRules({ removeRuleIds: i, addRules: t });
  }
  function k() {
    var e = 1;
    var a = {
      id: e,
      priority: 1,
      action: { type: "redirect", redirect: { extensionPath: "/SigningIn.html" } },
      condition: { urlFilter: "okta-personal-app/*/launch", resourceTypes: ["main_frame"] }
    };
    chrome.declarativeNetRequest.updateDynamicRules({ addRules: [a], removeRuleIds: [e] });
  }
  n.initialize = function () {
    v(O, h);
    s.initialize();
    k();
    chrome.webRequest.onBeforeSendHeaders.addListener(o, { urls: ["<all_urls>"] }, ["requestHeaders", "extraHeaders"]);
  };
  return n;
};
