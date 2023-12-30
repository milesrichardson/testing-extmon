Okta.RequestHeaders = function (e, r, a, s) {
  var t = {};
  var n = Okta.RequestHeadersBase(e, r, a, s);
  var u = Okta.fn.url.isOktaEndUserHomeHref;
  var o = Okta._okta;
  var i = o.find;
  var d = Okta.fn.storage.syncStorageData;
  var v = Okta.fn.bg.getPendingConsentAccount;
  var l = Okta.fn.url.isCustomEndUserHomeHref;
  var f = n.HeaderConstants;
  var E = f.EXTENDED_USER_AGENT_KEY;
  var H = f.PLUGIN_USER_AGENT_VALUE;
  var c = f.EXTENDED_PLUGIN_ACCOUNTS_USER_AGENT_KEY;
  var m = n.getStorageCache();
  var g = "WebExtension::onBeforeSendHeaders Error: ";
  t.onBeforeSendHeaders = function (e) {
    var r = { requestHeaders: [] };
    if (e.requestHeaders) {
      r.requestHeaders = e.requestHeaders;
    }
    try {
      var a = m.domains.val;
      var s = false;
      var t = u && u(e.url);
      if (!t && l) {
        if (a && a.customDomain && a.oktaDomain) {
          s = l(e.url, a.customDomain);
        }
      }
      if (t || s) {
        var n = i(r.requestHeaders, function (e) {
          return e.name.toLowerCase() === E.toLowerCase();
        });
        var o = v(m.dbgPluginSettings.val, m.allowListedAccounts.val, s ? a : null);
        if (n) {
          n.value += " " + H;
        } else {
          r.requestHeaders.push({ name: E, value: H });
          r.requestHeaders.push({ name: c, value: o });
        }
      }
    } catch (e) {
      Log.error(g + e.message);
    }
    return r;
  };
  t.initialize = function () {
    d(m);
    var e = { urls: ["<all_urls>"] };
    chrome.webRequest.onBeforeSendHeaders.addListener(t.onBeforeSendHeaders, e, ["requestHeaders", "blocking"]);
    n.initialize();
  };
  return t;
};
