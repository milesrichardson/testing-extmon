!(function FnUrlIIFE() {
  var a = Okta.parseUri,
    t = Okta._okta,
    r = t.any,
    o = t.compose,
    n = t.contains,
    e = t.partial,
    s = t.each,
    i = t.find,
    u = t.flatten,
    c = t.last,
    l = t.min,
    p = t.reduce,
    h = t.isMatch,
    m = t.some,
    k = Okta.fn.other.string.endsWith,
    f = t.pick,
    g = (Okta.fn.url = {}),
    P = ["okta.mil", "okta-miltest.com", "okta-gov.com", "trex-gov.com"],
    O = u([
      "cloudareanet.com",
      "clouditude.com",
      "hioktane.com",
      "lowoktane.com",
      "openalloy.com",
      "okta.com",
      "okta1.com",
      "okta-emea.com",
      "oktapreview.com",
      "perfcloud.org",
      "primeapp.com",
      "trexcloud.com",
      "widerock.com",
      "okta.ninja",
      P
    ]),
    d = "-admin",
    w = ["/app/UserHome", "/app/Home", "/enduser"],
    U = ["/app/UserHome", "/plugin/bookmark", "/home/plugin", "/enduser/app-settings"],
    v = [
      { path: "/oauth2/v1/authorize", queryKey: { client_id: Okta.Constants.AuthOptions.PLUGIN_CLIENT_ID } },
      { path: "/discovery/iframe.html" },
      { path: "/login/token/redirect" }
    ],
    T = [
      "www.okta.com",
      "trust.okta.com",
      "system.okta.com",
      "static.okta.com",
      "support.okta.com",
      "developer.okta.com",
      "login.okta.com",
      "help.okta.com",
      "trustro.okta.com",
      "investor.okta.com",
      "oanmanager.okta.com",
      "oinmanager.okta.com",
      "devforum.okta.com",
      "store.okta.com",
      "status.okta.com",
      "survey.okta.com",
      "infra.okta.com",
      "workflow.okta.com",
      "productfeedback.okta.com",
      "productfeedbacksandbox.okta.com",
      "regionalevents.okta.com",
      "workflows.okta.com",
      "ideas.okta.com",
      "rewards.okta.com",
      "pages.okta.com",
      "sec.okta.com",
      "personal.okta.com",
      "profile.okta.com",
      "partner.okta.com",
      "id.okta.com"
    ],
    H = ["/app/*/*/sso/saml*", "/app/office365/*/*"],
    D = ["/sso/wsfed/signout"],
    y = [
      "www.amazon.com",
      "accounts.google.com",
      "www.paypal.com",
      "login.xfinity.com",
      "account.t-mobile.com",
      "twitter.com",
      "login.yahoo.com",
      "www.walmart.com",
      "www.cvs.com",
      "accounts.intuit.com"
    ],
    A = "/app/UserHome",
    S = "/enduser/addapp",
    b = "/enduser/personal/askpin";
  function W(o) {
    var a = [];
    return (
      s(O, function (t) {
        t += o;
        a.push("https://*." + t), Okta.Config.allowOktaHttp && a.push("http://*." + t);
      }),
      a
    );
  }
  function C(t, o) {
    o = o.split(".");
    if (o.length < 2) return !1;
    var a = o[o.length - 2] + "." + o[o.length - 1];
    return r(t, function (t) {
      return t === a;
    });
  }
  (g.isHomepageIframePath = function (o) {
    return !!i(v, function (t) {
      return g.isUrlPathStartsWith(o, t.path) && (!t.queryKey || h(o.queryKey, t.queryKey));
    });
  }),
    (g.isUrlPathStartsWith = function (t, o) {
      return t.path === o || 0 === t.path.indexOf(o + "/");
    }),
    (g.hrefToUrlParts = function (t) {
      var o = a(t);
      return (o.href = t), f(o, "anchor", "path", "port", "host", "protocol", "href", "queryKey");
    }),
    (g.locationToUrlParts = function (t) {
      return {
        anchor: t.hash.replace("#", ""),
        path: t.pathname,
        port: t.port,
        host: t.hostname,
        protocol: t.protocol.replace(":", ""),
        href: t.href,
        queryKey: a(t.search).queryKey
      };
    }),
    (g.urlPartsToHref = function (t) {
      return t.href;
    }),
    (g.urlPartsToDomain = function (t) {
      var o = t.protocol + "://" + t.host;
      return "" !== t.port && (o += ":" + t.port), o;
    }),
    (g.urlPartsToDomainWithoutPort = function (t) {
      return t.protocol + "://" + t.host;
    }),
    (g.urlPartsToDomainAndPath = function (t) {
      return g.urlPartsToDomain(t) + t.path;
    }),
    (g.replaceUrlPartsPath = function (t, o) {
      return g.hrefToUrlParts(g.urlPartsToDomain(t) + o);
    }),
    (g.removeTrailingSlash = function (t) {
      if (t) return t.replace(/^\s+|\s+$/gm, "").replace(/\/+$/, "");
    }),
    (g.getOktaDomains = function () {
      return O;
    }),
    (g.isOktaPage = function (t, o) {
      return (
        !(!Okta.Config.allowOktaHttp && "https" !== t.protocol) &&
        !(o && !g.isUrlPathStartsWith(t, o)) &&
        (!(!Okta.Config.allowLocalHostOrServer || "localhost" !== t.host) || C(O, t.host))
      );
    }),
    (g.isOktaLoginAccounts = function (t) {
      return g.isOktaPage(t) && "login.okta.com" === t.host;
    }),
    (g.isOktaHref = o(g.isOktaPage, g.hrefToUrlParts)),
    (g.isOktaAdminPage = function (t) {
      var o = t.host.split(".");
      return g.isOktaPage(t) && k(o[0], d);
    }),
    (g.isOktaEndUserHomePage = function (t) {
      return g.isOktaHref(t.href) && !g.isOktaAdminPage(t) && g.isOktaEndUserHomePagePath(t);
    }),
    (g.isOktaEndUserHomePagePath = function (t) {
      return !!i(w, e(g.isUrlPathStartsWith, t));
    }),
    (g.isOktaPluginHomePagePath = function (t) {
      return !!i(U, e(g.isUrlPathStartsWith, t));
    }),
    (g.isOktaPluginHomePage = function (o) {
      return !!i(U, function (t) {
        return g.isOktaPage(o, t);
      });
    }),
    (g.isOktaPersonalOnboardingPage = function (t) {
      var o = g.urlPartsToDomain(t);
      return (
        g.isOktaPersonalAccount(o) &&
        (g.isOktaPage(t, "/enduser/personal/onboarding/welcome") || g.isOktaPage(t, "/enduser/personal/onboarding/pin"))
      );
    }),
    (g.isOktaPersonalLandingPage = function (t) {
      var o = g.urlPartsToDomain(t);
      return g.isOktaPersonalAccount(o) && g.isOktaPage(t, S);
    }),
    (g.isOktaPersonalAllowListedUrlChange = function (t, o) {
      return (
        (t.path.startsWith(S) && o.path.startsWith(A)) ||
        (t.path.startsWith("/enduser/importapps") && o.path.startsWith(A)) ||
        (t.path.startsWith("/enduser/app-settings") && o.path.startsWith(A)) ||
        (!t.path.startsWith(b) && o.path.startsWith(b))
      );
    }),
    (g.isAskPin = function (t) {
      var o = g.urlPartsToDomain(t);
      return g.isOktaPersonalAccount(o) && g.isOktaPage(t, b);
    }),
    (g.isOktaPersonalBootstrapPage = function (t) {
      var o = g.urlPartsToDomain(t);
      return g.isOktaPersonalAccount(o) && (g.isOktaPersonalLandingPage(t) || g.isAskPin(t));
    }),
    (g.isOktaPersonalPasswordlessOnboardingPage = function (t) {
      var o = g.urlPartsToDomain(t);
      return g.isOktaPersonalAccount(o) && g.isOktaPage(t, "/enduser/personal/onboarding/passwordless/plugin");
    }),
    (g.isOktaEndUserHomeHref = o(g.isOktaEndUserHomePage, g.hrefToUrlParts)),
    (g.isCustomEndUserHomeHref = function (t, o) {
      if (!t || !o) return !1;
      (t = g.hrefToUrlParts(t)), (o = g.hrefToUrlParts(o));
      return g.isOktaEndUserHomePagePath(t) && t.protocol === o.protocol && t.host === o.host && t.port === o.port;
    }),
    (g.isOktaAppSSOPath = function (t) {
      if (!g.isOktaPage(t)) return !1;
      t = t.path.split("/");
      return 5 == t.length && "app" === t[1] && 0 < t[2].length && 0 < t[3].length && 0 < t[4].length;
    }),
    (g.normalizeOktaSubdomain = function (t) {
      var o;
      return g.isOktaAdminPage(t) && (((o = t.host.split("."))[0] = o[0].substr(0, o[0].length - d.length)), (t.host = o.join("."))), t;
    }),
    (g.isOktaTrustedFQDN = function (t) {
      return n(T, t.host);
    }),
    (g.matchesHref = function (t) {
      var o = new Okta.Url(g.urlPartsToHref(t));
      return function (t) {
        return o.matches(t);
      };
    }),
    (g.matchesDomains = function (t, o) {
      return g.urlPartsToDomain(t) === g.urlPartsToDomain(o);
    }),
    (g.matchesSubDomains = function (t, o) {
      if (t.protocol != o.protocol || t.port != o.port) return !1;
      var a = t.host,
        t = o.host;
      if (!a || !t) return !1;
      (o = a.split(".")), (a = t.split(".")), (t = l([o.length, 2]));
      return c(o, t).join(".").toLowerCase() === c(a, t).join(".").toLowerCase();
    }),
    (g.getOktaFederatedRequestMatchPatterns = function () {
      return p(
        H,
        function (t, o) {
          return t.concat(W(o));
        },
        []
      );
    }),
    (g.isAllowedOktaRequestForAuthMonitoring = function (o) {
      return (
        !!o &&
        !!g.isOktaPage(g.hrefToUrlParts(o)) &&
        !i(D, function (t) {
          return -1 < o.indexOf(t);
        })
      );
    }),
    (g.getMonitoredSitesApiMatchPatterns = function () {
      return W("/api/plugin/2/sites*");
    }),
    (g.getAppInfoFromSiteUrl = function (t) {
      t = g.hrefToUrlParts(t).path.split("/");
      return "app" === t[1] && t[2] && t[3] ? { appName: t[2], instanceId: t[3] } : null;
    }),
    (g.getOktaDomainsRegexp = function (t) {
      if (!t.length) return null;
      var o = "^";
      return (
        (o += Okta.Config.allowOktaHttp ? "http[s]?" : "https"),
        (o += "://[^/]+\\.("),
        s(t, function (t) {
          o += t.replace(".", "\\.") + "|";
        }),
        (o = o.slice(0, -1)),
        (o += ")"),
        (o += Okta.Config.allowOktaHttp ? "(:[0-9]+)?" : ""),
        (o += "("),
        s(w, function (t) {
          o += t + "|";
        }),
        (o = o.slice(0, -1)),
        (o += ")")
      );
    }),
    (g.getSubDomain = function (t) {
      var o = t.lastIndexOf(".");
      if (o <= 0) return null;
      var a = t.lastIndexOf(".", --o);
      return -1 == a || a == o ? null : t.substring(a + 1);
    }),
    (g.isOktaPersonalAccount = function (t) {
      var o = ["https://personal.okta.com", "https://personal.trexcloud.com", "https://personal.clouditude.com"];
      return (
        Okta.Config.allowLocalHostOrServer &&
          (o.push("http://localhost"), o.push("https://rain.okta1.com"), o.push("https://personal.okta1.com")),
        n(o, t)
      );
    }),
    (g.isOktaFederalDomain = function (t) {
      t = g.hrefToUrlParts(t);
      return "https" === t.protocol && C(P, t.host);
    }),
    (g.isMultiStepsAppLoginHost = function (o, t) {
      return (
        !(!t || !t.useNAPDomain || "nap-fake-swa.com" !== o.host) ||
        ("https" == o.protocol &&
          m(y, function (t) {
            return t === o.host;
          }))
      );
    }),
    (g.hrefToDomain = function (t) {
      t = g.hrefToUrlParts(t);
      return t.host && t.protocol ? g.urlPartsToDomain(t) : "";
    });
})();
