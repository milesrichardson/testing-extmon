Okta.WebExtensionBackgroundInit = function (t) {
  var a = Okta.sessionStorage,
    e = Okta.fn.storage.apiStorage,
    n = Okta.fetch(fetch),
    k = Okta.Request(n, a, e),
    o = Okta.Storage(a, e),
    r = Okta.WebExtension(o, k, t),
    s = Okta.startBackgroundScript;
  s(r, a, e, k);
};
