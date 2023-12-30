//! BuildVersion: devBuildNumber-133e5c16
//! ContentScriptVersion: 73.110.0
var Okta = { fn: {}, Page: {}, Config: {}, Modal: { Mixins: {}, Views: {} }, loc: { strings: {} } };
Okta.window = this;
var ENV = {
  getCss: function (n) {
    return this._domain + "/plugin/css/" + n;
  },
  getImg: function (n) {
    return this._domain + "/plugin/img/" + n;
  },
  DefaultTimeout: 25e3,
  DefaultWaitDelay: 250
};
(Okta.Config = {
  enabledLogging: !1,
  allowOktaHttp: !1,
  buildType: "prodBuild",
  startrecordingLogs: !1,
  onboardingLaunchNewTab: !0,
  NTEFlag: !1,
  allowLocalHostOrServer: !1
}),
  (Okta.WindowUtil = (function (e) {
    var n = {};
    return (
      e &&
        ((n.setTimeout = function (n, t) {
          return e.setTimeout(n, t);
        }),
        (n.setInterval = function (n, t) {
          return e.setInterval(n, t);
        })),
      n
    );
  })(Okta.window));
var _okta = {
  debounce: function (t, e, o) {
    var i,
      r,
      a,
      s,
      u,
      c = function () {
        var n;
        Okta &&
          ((n = Date.now() - s) < e && 0 <= n
            ? (i = Okta.WindowUtil.setTimeout(c, e - n))
            : ((i = null), o || ((u = t.apply(a, r)), i || (a = r = null))));
      };
    return function () {
      if (Okta) {
        (a = this), (r = arguments), (s = Date.now());
        var n = o && !i;
        return (i = i || Okta.WindowUtil.setTimeout(c, e)), n && ((u = t.apply(a, r)), (a = r = null)), u;
      }
    };
  }
};
Okta._okta = _okta;
var Log = (function (n) {
  var t = n;
  if ("undefined" != typeof window) {
    var e = ["debug", "info", "warn", "error"];
    window.console || (window.console = {}), window.console.log || (window.console.log = function () {});
    for (var o = 0; o < e.length; ++o) window.console[e[o]] || (window.console[e[o]] = window.console.log);
  }
  function i(n) {
    return function () {
      t && n && (arguments.length && (arguments[0] = "Preload script: " + arguments[0]), n.apply(console, arguments));
    };
  }
  return {
    debug: i(console.debug),
    info: i(console.log),
    warn: i(console.warn),
    error: i(console.error),
    enableLogging: function (n) {
      t = n;
    }
  };
})(Okta.Config.enabledLogging);
!(function () {
  var n = (Okta.fn.url = {}),
    o = [
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
      "okta.mil",
      "okta-miltest.com",
      "okta-gov.com",
      "trex-gov.com"
    ],
    e = ["/app/UserHome", "/plugin/bookmark", "/home/plugin", "/enduser/app-settings"];
  function i(n, t) {
    return n === t || 0 === n.indexOf(t + "/");
  }
  (n.isOktaPage = function (n) {
    if (Okta.Config.allowLocalHostOrServer && "localhost" === n) return !0;
    var t = (function (n) {
      if (n) {
        n = n.split(".");
        if (!(n.length < 2)) return n[n.length - 2] + "." + n[n.length - 1];
      }
    })(n);
    if (!t) return !1;
    for (var e = 0; e < o.length; ++e) if (o[e] === t) return !0;
    return !1;
  }),
    (n.isCustomDomain = function (n, t) {
      if (!t) return !1;
      n = n.protocol + "//" + n.hostname;
      return t === n || 0 === t.indexOf(n + ":");
    }),
    (n.isPotentialCustomDomain = function (n) {
      for (var t = 0; t < e.length; ++t) if (i(n, e[t])) return !0;
      return i(n, "/plugin/servePopover");
    });
})(),
  (function () {
    var i = (Okta.fn.checks = {}),
      r = "DBG_PLUGIN_SETTINGS",
      a = String.fromCharCode.apply(null, [79, 75, 84, 65, 95, 65, 67, 67, 79, 85, 78, 84, 95, 87, 72, 73, 84, 69, 95, 76, 73, 83, 84]);
    function t(n) {
      return new Promise(function (t, e) {
        chrome.storage.local.get(n, function (n) {
          chrome.runtime.lastError ? e(chrome.runtime.lastError.message) : t(n);
        });
      });
    }
    (i.chainChecks = function (t, e) {
      var o;
      t &&
        t.length &&
        (o = t.shift()).fn &&
        o.fn(function (n) {
          return n
            ? (Log.info(o.name + " - starting content script."), void (e && e()))
            : (Log.info(o.name + " - skipped."), void i.chainChecks(t, e));
        });
    }),
      (i.checkMessage = function (n, e, o) {
        return function (t) {
          n.postMessage(e, function (n) {
            t && t(o(n));
          });
        };
      }),
      (i.getCurrentAccountIndex = function (n) {
        if (!Array.isArray(n)) return -1;
        n = n.find(function (n) {
          return n.isCurrentAccount;
        });
        return n ? n.index : -1;
      }),
      (i.getAccStorageByKeys = function (o) {
        return t([r, a])
          .then(function (n) {
            var t = n[r];
            if (!t || !t.multiAccountAwarePlugin) return o;
            var n = n[a],
              e = i.getCurrentAccountIndex(n);
            return -1 < e
              ? o.map(function (n) {
                  return n + "_" + e;
                })
              : o;
          })
          .then(function (n) {
            return t(n).then(function (t) {
              return n.map(function (n) {
                return t[n];
              });
            });
          });
      }),
      (i.checkFunction = function (t) {
        return function (n) {
          n && n(t());
        };
      }),
      (i.hasFormSitesOnTop = function (e) {
        if (window.self == window.top)
          return i
            .getAccStorageByKeys(["PLUGIN_SETTINGS", "FORM_SITES_NO_PW"])
            .then(function (n) {
              var t = n[0] || {},
                n = n[1] || [];
              t && t.orgSettings && t.orgSettings.pluginEnhancedHeuristicsEnabled && Array.isArray(n)
                ? ((n = n.find(function (n) {
                    return new RegExp(n.urlRegex).test(document.URL);
                  })),
                  e(!!n))
                : e(!1);
            })
            ["catch"](function () {
              e(!1);
            });
        e(!1);
      });
  })(),
  (function FnVisibilityCheck() {
    var t = (Okta.fn.visibilityCheck = {});
    function o(n, t) {
      var e = n.ownerDocument.defaultView;
      return (e = !e || !e.opener ? window : e).getComputedStyle(n).getPropertyValue(t);
    }
    (t.isVisibleInForm = function (n) {
      return (
        t.isVisibleInPage(n) &&
        !(function (n) {
          for (; n && 9 !== n.nodeType; ) {
            if (1 === n.nodeType && o(n, "z-index") < 0) return 1;
            n = n.parentNode;
          }
        })(n)
      );
    }),
      (t.isVisibleInPage = function (n) {
        var t,
          e = n.getBoundingClientRect();
        return (
          0 <= (t = e).left + window.scrollX && 0 <= t.top + window.screenY && "hidden" != o(n, "visibility") && 1 < e.width && 1 < e.height
        );
      });
  })(),
  (function () {
    var e = (Okta.fn.dom = {}),
      n = Okta._okta.debounce,
      o = 2e3,
      d = 1e3;
    (e.getTimedNotification = function () {
      var t = {},
        e = 0;
      return (
        (t.startMonitoring = function (n) {
          e && t.stopMonitoring(), (e = setInterval(n, o));
        }),
        (t.stopMonitoring = function () {
          e && (clearInterval(e), (e = 0));
        }),
        t
      );
    }),
      (e.setTimedNotificationInterval = function (n) {
        o = n;
      }),
      (e.setMutationObserverNotificationInterval = function (n) {
        d = n;
      }),
      (e.getMutationObserver = function (o) {
        var i = {},
          r = {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["class", "style"],
            attributeOldValue: !1,
            characterDataOldValue: !1
          },
          t = new MutationObserver(function (n, t) {
            var e;
            i.onChange &&
              (500 < (e = Date.now()) - g ? ((g = e), (f = n.length)) : (f += n.length),
              3e3 < f
                ? (Log.info("Too many mutation events, fallback to timer for 8 seconds"),
                  t.disconnect(),
                  u.startMonitoring(l),
                  (c = setTimeout(function () {
                    t.observe(o, r), (f = 0), (g = Date.now()), u.stopMonitoring();
                  }, 8e3)))
                : (1e4 < e - a ? l : s)());
          }),
          a = 0,
          s = n(l, d),
          u = e.getTimedNotification(),
          c = 0,
          f = 0,
          g = 0;
        function l() {
          i.onChange && i.onChange(), (a = Date.now());
        }
        return (
          (i.startMonitoring = function (n) {
            (i.onChange = n), t.observe(o, r);
            n = Date.now();
            return (f = 0), (g = a = n), t;
          }),
          (i.stopMonitoring = function () {
            t.disconnect(), c && clearTimeout(c), (i.onChange = null);
          }),
          i
        );
      }),
      (e.getDomObserver = function (n) {
        return "function" == typeof window.MutationObserver ? e.getMutationObserver(n) : e.getTimedNotification();
      });
  })(),
  (function () {
    var e = (Okta.fn.scan = {}),
      r = /^password$/i;
    function t(n, t) {
      var e = n.getElementsByTagName(t);
      if (20 < e.length) return Log.info("Too many inputs. Assuming there is a username tag."), !0;
      for (var o, i, r = 0; r < e.length; ++r)
        if (
          ((o = e[r]),
          (i = void 0),
          ("text" === (i = o.getAttribute("type")) || "email" === i || "tel" === i) && Okta.fn.visibilityCheck.isVisibleInForm(o))
        )
          return !0;
      return !1;
    }
    function o(n, t) {
      var e = n.getElementsByTagName(t);
      if (20 < e.length) return Log.info("Too many inputs. Assuming there is a password tag."), !0;
      for (var o, i = 0; i < e.length; ++i)
        if ("password" === (o = e[i]).getAttribute("type") || r.test(o.getAttribute("id")) || r.test(o.getAttribute("placeholder")))
          return !0;
      return !1;
    }
    (e.onDomUpdate = function (n, t) {
      (e.searchPasswordField(document) || e.searchUsernameField(document)) && (n.stopMonitoring(), t(!0));
    }),
      (e.searchUsernameField = function (n) {
        return 25 < n.forms.length ? (Log.info("Too many forms. Assuming there is a username tag."), !0) : t(n, "input");
      }),
      (e.searchPasswordField = function (n) {
        return 25 < n.forms.length
          ? (Log.info("Too many forms. Assuming there is a password tag."), !0)
          : o(n, "input") || o(n, "textarea");
      }),
      (e.startObserver = function (n, t) {
        Log.info("Starting observer"),
          n.startMonitoring(function () {
            e.onDomUpdate(n, t);
          }),
          e.onDomUpdate(n, t);
      });
  })(),
  (Okta.Port = function (n) {
    if (!n.runtime) throw new Error("Failed to initialize port. No runtime property found on WebExtension object.");
    var t = {},
      o = {},
      i = n.runtime.connect();
    return (
      i.onMessage.addListener(function (n) {
        (n.id && "undefined" !== o[n.id]) || Log.info("Unknown message: " + JSON.stringify(n)), o[n.id] && o[n.id](n), delete o[n.id];
      }),
      (t.postMessage = function (n, t) {
        if (((o[n.id] = t || null), !i.isDisconnected))
          try {
            i.postMessage(n);
          } catch (e) {
            Log.warn(e);
          }
      }),
      (t.disconnect = function () {
        i.disconnect();
      }),
      i.onDisconnect.addListener(function () {
        i.isDisconnected = !0;
      }),
      t
    );
  }),
  (function StartContentScriptIIFE() {
    var n = Okta.Port(chrome),
      t = Okta.fn.url.isOktaPage,
      e = Okta.fn.url.isCustomDomain,
      o = Okta.fn.url.isPotentialCustomDomain,
      i = Okta.fn.scan.startObserver,
      r = Okta.fn.dom.getDomObserver,
      a = Okta.fn.checks.chainChecks,
      s = Okta.fn.checks.checkMessage,
      u = Okta.fn.checks.checkFunction,
      c = Okta.fn.checks.hasFormSitesOnTop,
      f = !1;
    function g(n) {
      return !!n.data && !!JSON.parse(n.data).val;
    }
    var l = u(function () {
        return t(window.location.hostname);
      }),
      d = u(function () {
        return o(window.location.pathname);
      }),
      m = s(n, { type: "getSessionTabState", id: "savePassword", data: { key: "PROMPT_SAVE_PASSWORD" } }, g),
      p = s(n, { type: "getSessionTabState", id: "currentFastIdPApp", data: { key: "CURRENT_FAST_IDP_APP" } }, g),
      h = s(n, { type: "getSessionTabState", id: "siteFlow", data: { key: "CURRENT_FLOW" } }, g),
      w = s(n, { type: "getSessionTabState", id: "selfServiceSite", data: { key: "CURRENT_SELF_SERVICE_APP_CREDENTIALS" } }, g),
      u = s(n, { type: "getPersistentState", id: "domains", data: { key: "DOMAINS" } }, function (n) {
        return (n = n.data) && e(window.location, n.customDomain);
      });
    a(
      [
        {
          name: "Set logging",
          fn: s(n, { type: "getPersistentState", id: "dbgPluginSettings", data: { key: "DBG_PLUGIN_SETTINGS" } }, function (n) {
            var t = !1;
            return n.data && (t = (n = n.data) && n.loggingEnabled), Log.enableLogging(t), Log.info(window.location.href), !1;
          })
        },
        { name: "Okta page", fn: l },
        { name: "Potential custom page", fn: d },
        { name: "Save password", fn: m },
        { name: "Fast IdP app", fn: p },
        { name: "Site flow", fn: h },
        { name: "SAML Tester page", fn: s(n, { type: "getSessionTabState", id: "samlTester", data: { key: "SAML_TESTER" } }, g) },
        { name: "Self service site", fn: w },
        { name: "Custom okta page", fn: u },
        { name: "Form Sites No PW", fn: c },
        {
          name: "Dom observer",
          fn: function (n) {
            i(r(document), n);
          }
        }
      ],
      function () {
        f ||
          ((f = !0),
          (Okta = undefined),
          n.postMessage({ type: "injectContentScript", id: "inject" }, function () {
            n.disconnect();
          }),
          Log.info("<--------------------------------------------------------\x3e"));
      }
    );
  })();
