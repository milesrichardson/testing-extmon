/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, n, r) {
  function a(i, s) {
    if (!n[i]) {
      if (!t[i]) {
        var $ = "function" == typeof require && require;
        if (!s && $) return $(i, !0);
        if (o) return o(i, !0);
        var u = new Error("Cannot find module '" + i + "'");
        throw ((u.code = "MODULE_NOT_FOUND"), u);
      }
      var c = (n[i] = { exports: {} });
      t[i][0].call(
        c.exports,
        function (e) {
          return a(t[i][1][e] || e);
        },
        c,
        c.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[i].exports;
  }
  for (var o = "function" == typeof require && require, i = 0; i < r.length; i++) a(r[i]);
  return a;
})(
  {
    1: [
      function (e, t, n) {
        "use strict";
        const r = e("config"),
          a = e("background/localStorage").getInstance(),
          o = "installationSource",
          i = "installationSubSource";
        t.exports = {
          isBeta: () => Boolean(r.beta && chrome.runtime.id === r.beta.gc_id),
          isNightly: () => Boolean(r.nightly && chrome.runtime.id === r.nightly.gc_id),
          isWebExt: () => !1,
          getProduct: () => "Browser Safety",
          getInstallationSource() {
            const e = a.getItem(o);
            return e
              ? Promise.resolve({ Source: e, SubSource: "null" !== a.getItem(i) ? a.getItem(i) : null })
              : new Promise((e) => {
                  chrome.management.getSelf((t) => {
                    const { NORMAL: n, SIDELOAD: r } = chrome.management.ExtensionInstallType;
                    t.installType === r
                      ? e({ Source: "Connect Client", SubSource: null })
                      : t.installType === n
                      ? this._getInstallationSourceFromActiveTab().then(e)
                      : e({ Source: "Other", SubSource: null });
                  });
                }).then((e) => (a.setItem(o, e.Source), a.setItem(i, e.SubSource), e));
          },
          _getInstallationSourceFromActiveTab: () =>
            new Promise((e) => {
              chrome.tabs.query({ active: !0, currentWindow: !0 }, (t) => {
                const n = (t && t[0] && t[0].url) || "",
                  r = new URLSearchParams(new URL(n).search),
                  a = r.get("subSource") || r.get("src") || null;
                !(function (e) {
                  return (
                    0 === e.indexOf("https://microsoftedge.microsoft.com/addons/detail/avira-safe-shopping") ||
                    0 === e.indexOf("https://chrome.google.com/webstore/detail/avira-browser-safety") ||
                    0 === e.indexOf("https://chrome.google.com/webstore/detail/avira-safe-shopping") ||
                    0 === e.indexOf("https://addons.mozilla.org/\\w\\w(-\\w\\w)?/firefox/addon/avira-browser-safety") ||
                    0 === e.indexOf("https://addons.opera.com/\\w\\w(-\\w\\w)?/extensions/details/avira-browser-safety")
                  );
                })(n)
                  ? /^https?:\/\/www.avira.com\/.*\/avira-(browser-safety|safe-shopping)/.test(n)
                    ? e({ Source: "Avira Website", SubSource: "Product Page" })
                    : /https?:\/\/my.avira.com/.test(n)
                    ? e({ Source: "Connect Dashboard", SubSource: null })
                    : e({ Source: "Other", SubSource: null })
                  : e({ Source: "Store", SubSource: a });
              });
            })
        };
      },
      { "background/localStorage": 2, config: 188 }
    ],
    2: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        t.exports = class {
          constructor() {
            (this._initialized = !1),
              (this._initializationPromise = null),
              (this._storage = {}),
              (this._persistentStorage = chrome.storage.local),
              (this._keys = []),
              (this.length = 0);
          }
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
          initialize() {
            return (
              this._initializationPromise ||
                (this._initializationPromise = new Promise((e) =>
                  this._persistentStorage.get(
                    null,
                    (t) => ((this._storage = t), (this._keys = Object.keys(t)), this._updateLength(), (this._initialized = !0), e())
                  )
                )),
              this._initializationPromise
            );
          }
          getItem(e) {
            this._checkInitialization();
            let t = this._storage[e];
            return void 0 === t && (t = null), t;
          }
          setItem(e, t) {
            if ((this._checkInitialization(), "string" != typeof e)) throw new TypeError(`item must be a string ${JSON.stringify(e)}`);
            const n = `${t}`;
            this._storage[e] !== n &&
              (Array.from(this._keys).includes(e) || (this._keys.push(e), this._updateLength()),
              (this._storage[e] = n),
              this._persistentStorage.set({ [e]: n }));
          }
          removeItem(e) {
            this._checkInitialization(),
              this._storage[e] &&
                (delete this._storage[e],
                this._persistentStorage.remove(e),
                this._keys.splice(this._keys.indexOf(e), 1),
                this._updateLength());
          }
          key(e) {
            return this._checkInitialization(), this._keys[e];
          }
          _updateLength() {
            this.length = this._keys.length;
          }
          _checkInitialization() {
            if (!this._initialized) throw new Error("LocalStorage accessed before initialization was completed");
          }
        };
      },
      { "core-js/modules/es6.array.iterator.js": 123, "core-js/modules/web.dom.iterable.js": 125 }
    ],
    3: [
      function (e, t, n) {
        "use strict";
        const r = e("background/localStorage").getInstance(),
          a = ["mixpanel_install"],
          o = "storageMigrated";
        t.exports = {
          run() {
            try {
              if (localStorage.length > 0 && !r.getItem(o)) {
                for (let e = localStorage.length - 1; e >= 0; e--) {
                  const t = localStorage.key(e);
                  r.setItem(t, localStorage.getItem(t)), -1 === a.indexOf(t) && localStorage.removeItem(t);
                }
                r.setItem(o, !0);
              }
            } catch (e) {}
          }
        };
      },
      { "background/localStorage": 2 }
    ],
    4: [
      function (e, t, n) {
        "use strict";
        const r = e("messenger/Background").getInstance();
        t.exports = class {
          constructor() {
            (this._onTabCreated = this._onTabCreated.bind(this)),
              (this._onTabReplaced = this._onTabReplaced.bind(this)),
              (this._onTabRemoved = this._onTabRemoved.bind(this)),
              (this._onTabActivated = this._onTabActivated.bind(this)),
              (this._incognitoTabs = {}),
              this._checkOpenTabs(),
              chrome.tabs.onCreated.addListener(this._onTabCreated),
              chrome.tabs.onReplaced.addListener(this._onTabReplaced),
              chrome.tabs.onRemoved.addListener(this._onTabRemoved),
              chrome.tabs.onUpdated.addListener(this._onTabUpdated),
              chrome.tabs.onActivated.addListener(this._onTabActivated);
          }
          getCurrentTabId(e) {
            return this._getCurrentTab((t) => e(null != t ? t.id : void 0));
          }
          getCurrentTabUrl(e) {
            return this._getCurrentTab((t) => e(null != t ? t.url : void 0));
          }
          navigate(e, t, n, r) {
            return (
              null == t && (t = !1),
              null == e && (e = "chrome://newtab/#noredirect"),
              t
                ? chrome.windows.getCurrent(null, (t) =>
                    chrome.tabs.create({ windowId: t.id, url: e }, (e) => {
                      r && r(e.id);
                    })
                  )
                : chrome.tabs.update(n, { url: e })
            );
          }
          close(e) {
            return chrome.tabs.remove(e);
          }
          reload(e) {
            return chrome.tabs.reload(e);
          }
          _getCurrentTab(e) {
            return chrome.tabs.query({ currentWindow: !0, active: !0 }, (t) => e(t[0]));
          }
          _getTabById(e, t) {
            return chrome.tabs.get(e, t);
          }
          isIncognitoTab(e) {
            return !1 !== this._incognitoTabs[e];
          }
          _checkOpenTabs() {
            return chrome.tabs.query({}, (e) => e.forEach(this._onTabCreated));
          }
          _onTabCreated(e) {
            return (this._incognitoTabs[e.id] = e.incognito && e.id > 0), this._incognitoTabs[e.id];
          }
          _onTabReplaced(e, t) {
            return (this._incognitoTabs[e] = this._incognitoTabs[t]), delete this._incognitoTabs[t];
          }
          _onTabRemoved(e) {
            return delete this._incognitoTabs[e];
          }
          _onTabUpdated(e, t, n) {
            return r.publish("tabAccessor:updated", { tabId: e, changeInfo: t, tab: n });
          }
          _onTabActivated(e) {
            return this._getTabById(e.tabId, (e) => {
              !chrome.runtime.lastError && e && r.publish("tabAccessor:select", { tab: e });
            });
          }
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
        };
      },
      { "messenger/Background": 126 }
    ],
    5: [
      function (e, t, n) {
        "use strict";
        t.exports = {
          get: (e, t, n) => chrome.cookies.get({ url: e, name: t }, n),
          remove: (e, t, n) => chrome.cookies.remove({ url: e, name: t }, n)
        };
      },
      {}
    ],
    6: [
      function (e, t, n) {
        "use strict";
        const r = { getManifest: () => chrome.runtime.getManifest(), getURL: (e) => chrome.runtime.getURL(e) };
        t.exports = r;
      },
      {}
    ],
    7: [
      function (e, t, n) {
        "use strict";
        const r = e("ms"),
          a = e("background/jsonStorage"),
          o = e("background/offersSupport"),
          i = e("modules/offers/background/Offers"),
          s = e("modules/offers/background/OffersPromo").default,
          $ = e("config"),
          u = e("background/ErrorCollector"),
          c = e("messenger/Background").getInstance();
        async function l() {
          let e = await new Promise((e) => {
            c.publish("Settings:get", "offers", (t) => {
              e(!0 === t.offers);
            });
          });
          c.subscribe("Settings:change", (t) => {
            void 0 !== t.offers && (e = t.offers);
          }),
            c.subscribe("inject-content", (t, n, i) => {
              (e ||
                (o.isPromoEligible() &&
                  (function () {
                    const e = a.getItem("promo_last_display"),
                      t = r($.ao.promo_display_interval);
                    return Date.now() > e + t;
                  })())) &&
                d(i.tab.id, "/js/content/content-offers.js");
            });
        }
        function d(e, t) {
          return new Promise((n) => {
            chrome.tabs.executeScript(e, { file: t }, () => {
              chrome.runtime.lastError, n(null);
            });
          });
        }
        function h() {
          chrome.tabs.query({ currentWindow: !0 }, async (e) => {
            for (let t = 0; t < e.length; t++) {
              const n = e[t];
              if (
                n.active &&
                "https://chrome.google.com/webstore/detail/avira-safe-shopping/ccbpbkebodcjkknkfkpmfeciinhidaeh?subSource=abspromo" ===
                  n.url
              ) {
                const n = e[t - 1];
                n &&
                  n.id &&
                  (await d(n.id, "js/content/common.js"), await d(n.id, "js/content/content.js"), chrome.tabs.update(n.id, { active: !0 }));
              }
            }
          });
        }
        t.exports = async function ({ aims: e, distributionPartner: t, mixpanel: n, extensionOnboarding: r }) {
          const a = o.isSupported(),
            d = o.isPromoEligible();
          if (
            (c.subscribe("offersSupported", (e, t) => {
              t(a);
            }),
            !a && !d)
          )
            return;
          if (
            await (async function (e) {
              return (await e.discoverExtensions()).some((e) => "sse" === e.name && e.installed);
            })(r)
          )
            return;
          const p = await new Promise((e) => t.getPartnerId(e)),
            f = new u(n),
            m = d ? $.ao.api_client_promo : $.ao.api_client,
            g = d ? $.ao.api_key_promo : $.ao.api_key;
          new (d ? s : i)($.ao.api_url, m, g, e.getUserId(), p, f).init(), l(), setTimeout(h, 1e3);
        };
      },
      {
        "background/ErrorCollector": 172,
        "background/jsonStorage": 183,
        "background/offersSupport": 184,
        config: 188,
        "messenger/Background": 126,
        "modules/offers/background/Offers": 189,
        "modules/offers/background/OffersPromo": 190,
        ms: 137
      }
    ],
    8: [
      function (e, t, n) {
        t.exports = {
          barTransitionDelay: 200,
          default_language: "en-US",
          languages: ["en-US", "de-DE", "es-ES", "fr-FR", "it-IT", "ja-JP", "nl-NL", "pt-BR", "ru-RU", "tr-TR", "zh-CN", "zh-TW"],
          language_fallbacks: { de: "de-DE", es: "es-ES", fr: "fr-FR", it: "it-IT", ru: "ru-RU", pt: "pt-BR" },
          auc: {
            server: "https://v2.auc.avira.com/api",
            api_key: "2216cc6964aa79fa09205dd4b08fb808",
            product: "avira-browser-safety",
            product_version: "0.0.0",
            lang: "en-US",
            locale: "en-US",
            sync: !0
          },
          avira_dnt: { update_url: "https://download.avira.com/update/donottrack/rules.json", update_cycle: 86400 },
          aims: { productid: 199 },
          ao: {
            api_url: "https://offers.avira.com/aviraoffers/api/v2",
            api_client: "ass",
            api_key: "HXBzevxRAqvWRppPXnGRYKRZEUcrCHGT",
            coupons_domain: "offers.avira.com",
            dnt_disable_timeout: 72e5
          },
          adguard: {
            filtersMetadataUrl: "https://download.avira.com/update/adguard/filters.json",
            filterRulesUrl: "https://download.avira.com/update/adguard/filters/{filter_id}.txt",
            offers_whitelist: "https://download.avira.com/update/donottrack/offers_wl.json",
            rules: []
          },
          mixpanel: { token: "c34a8016e04ab4b4b232b1e71cc12d66", active_cycle: 21600 },
          sentry_dsn: "https://de51468527964eda8ca3e52ac844db69@sentry.avira.net/20",
          update_bridge: { api_url: "https://dispatch.avira-update.com/", product_id: 199 },
          beta: { gc_id: "biegckbcmgljgabmpjcpmkbheikknfch" },
          nightly: { gc_id: "enhedicmkidpahjffkbmhgiacbodpcbo" },
          chrome: { id: "flliilndjeohchalpbbcdekjklbdgfkk" },
          nophish: { whitelist_url: "https://download.avira.com/update/nophishwhitelist/common/int/NophishWhitelist.json" },
          avira: { base_url: "https://www.avira.com/" },
          supportedSettings: {
            dark_mode: !0,
            offers: !0,
            dnt_header: !0,
            inAppTracking: !1,
            adguard: !0,
            adguard_social_media: !0,
            adguard_useful_ads: !0,
            extension_scan: !0
          },
          extensionOnboarding: {
            extensions: {
              abs: ["flliilndjeohchalpbbcdekjklbdgfkk", "abs@avira.com"],
              pwm: [
                "caljgklbbfbcjjanaijlacgncafpegll",
                "pedpfpedmgmbfnplmhbkodnfbfelgdbc",
                "kfbldoladabfjgedblncjojgmcplnbac",
                "passwordmanager@avira.com",
                "passwordmanager-beta@avira.com",
                "ngohaaocccbohaffogpbgfpmpgbcgccg",
                "emgfgdclgfeldebanedpihppahgngnle"
              ],
              sse: ["ccbpbkebodcjkknkfkpmfeciinhidaeh", "caiblelclndcckfafdaggpephhgfpoip", "dalelnnofafalcmkmnhdbigbjjkloabo"]
            },
            onboardingWebsite: "https://extensions.avira.com",
            rollout: 0.03
          },
          storeURLs: {
            abs_firefox: "https://addons.mozilla.org/firefox/addon/avira-browser-safety/",
            abs_chrome: "https://chrome.google.com/webstore/detail/avira-browser-safety/flliilndjeohchalpbbcdekjklbdgfkk",
            ss_chrome: "https://chrome.google.com/webstore/detail/avira-safe-shopping/ccbpbkebodcjkknkfkpmfeciinhidaeh",
            ss_edge: "https://microsoftedge.microsoft.com/addons/detail/avira-safe-shopping/caiblelclndcckfafdaggpephhgfpoip",
            ss_opera: "https://addons.opera.com/extensions/details/avira-browser-safety/",
            uninstall: { abs: "https://extensions.avira.com/abs/uninstall", sse: "https://extensions.avira.com/sse/uninstall" }
          }
        };
      },
      {}
    ],
    9: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore"),
          a = e("background/base/appInfo");
        t.exports = r.extend(a, { getProduct: () => "Safe Shopping" });
      },
      { "background/base/appInfo": 1, underscore: 155 }
    ],
    10: [
      function (e, t, n) {
        "use strict";
        const r = e("config"),
          a = e("background/NewInstallCheck"),
          o = e("background/jsonStorage"),
          i = e("../../../offers/js/background/offersInit"),
          s = "SAFE_SHOPPING_OFFERS_MIGRATION";
        t.exports = async function (e) {
          await i(e);
          const t = o.getItem(s),
            n = a.isUpdated(e.installReason);
          a.isNewInstall(e.installReason)
            ? o.setItem(s, !0)
            : !t && n && (chrome.tabs.create({ url: `${r.extensionOnboarding.onboardingWebsite}/get-abs` }), o.setItem(s, !0));
        };
      },
      { "../../../offers/js/background/offersInit": 7, "background/NewInstallCheck": 177, "background/jsonStorage": 183, config: 188 }
    ],
    11: [
      function (e, t, n) {
        (t.exports = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    12: [
      function (e, t, n) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    13: [
      function (e, t, n) {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        (t.exports = function (e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    14: [
      function (e, t, n) {
        (t.exports = function (e, t, n) {
          return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    15: [
      function (e, t, n) {
        function r(e) {
          return (
            (t.exports = r =
              Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            r(e)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    16: [
      function (e, t, n) {
        var r = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && r(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 19 }
    ],
    17: [
      function (e, t, n) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    18: [
      function (e, t, n) {
        var r = e("@babel/runtime/helpers/typeof").default,
          a = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== r(t) && "function" != typeof t) ? a(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 11, "@babel/runtime/helpers/typeof": 20 }
    ],
    19: [
      function (e, t, n) {
        function r(e, n) {
          return (
            (t.exports = r =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            r(e, n)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    20: [
      function (e, t, n) {
        function r(e) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? ((t.exports = r =
                  function (e) {
                    return typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0))
              : ((t.exports = r =
                  function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0)),
            r(e)
          );
        }
        (t.exports = r), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    21: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/core"),
          o = e("@sentry/types"),
          i = e("@sentry/utils"),
          s = e("./eventbuilder"),
          $ = e("./transports"),
          u = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              r.__extends(t, e),
              (t.prototype._setupTransport = function () {
                if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                var t = r.__assign({}, this._options.transportOptions, { dsn: this._options.dsn });
                return this._options.transport
                  ? new this._options.transport(t)
                  : i.supportsFetch()
                  ? new $.FetchTransport(t)
                  : new $.XHRTransport(t);
              }),
              (t.prototype.eventFromException = function (e, t) {
                var n = (t && t.syntheticException) || void 0,
                  r = s.eventFromUnknownInput(e, n, { attachStacktrace: this._options.attachStacktrace });
                return (
                  i.addExceptionMechanism(r, { handled: !0, type: "generic" }),
                  (r.level = o.Severity.Error),
                  t && t.event_id && (r.event_id = t.event_id),
                  i.SyncPromise.resolve(r)
                );
              }),
              (t.prototype.eventFromMessage = function (e, t, n) {
                void 0 === t && (t = o.Severity.Info);
                var r = (n && n.syntheticException) || void 0,
                  a = s.eventFromString(e, r, { attachStacktrace: this._options.attachStacktrace });
                return (a.level = t), n && n.event_id && (a.event_id = n.event_id), i.SyncPromise.resolve(a);
              }),
              t
            );
          })(a.BaseBackend);
        n.BrowserBackend = u;
      },
      { "./eventbuilder": 23, "./transports": 37, "@sentry/core": 43, "@sentry/types": 54, "@sentry/utils": 62, tslib: 154 }
    ],
    22: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/core"),
          o = e("@sentry/utils"),
          i = e("./backend"),
          s = e("./version"),
          $ = (function (e) {
            function t(t) {
              return void 0 === t && (t = {}), e.call(this, i.BrowserBackend, t) || this;
            }
            return (
              r.__extends(t, e),
              (t.prototype._prepareEvent = function (t, n, a) {
                return (
                  (t.platform = t.platform || "javascript"),
                  (t.sdk = r.__assign({}, t.sdk, {
                    name: s.SDK_NAME,
                    packages: r.__spread((t.sdk && t.sdk.packages) || [], [{ name: "npm:@sentry/browser", version: s.SDK_VERSION }]),
                    version: s.SDK_VERSION
                  })),
                  e.prototype._prepareEvent.call(this, t, n, a)
                );
              }),
              (t.prototype.showReportDialog = function (e) {
                void 0 === e && (e = {});
                var t = o.getGlobalObject().document;
                if (t)
                  if (this._isEnabled()) {
                    var n = e.dsn || this.getDsn();
                    if (e.eventId)
                      if (n) {
                        var r = t.createElement("script");
                        (r.async = !0),
                          (r.src = new a.API(n).getReportDialogEndpoint(e)),
                          e.onLoad && (r.onload = e.onLoad),
                          (t.head || t.body).appendChild(r);
                      } else o.logger.error("Missing `Dsn` option in showReportDialog call");
                    else o.logger.error("Missing `eventId` option in showReportDialog call");
                  } else o.logger.error("Trying to call showReportDialog with Sentry Client is disabled");
              }),
              t
            );
          })(a.BaseClient);
        n.BrowserClient = $;
      },
      { "./backend": 21, "./version": 39, "@sentry/core": 43, "@sentry/utils": 62, tslib: 154 }
    ],
    23: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/utils"),
          a = e("./parsers"),
          o = e("./tracekit");
        function i(e, t, n) {
          void 0 === n && (n = {});
          var r = { message: e };
          if (n.attachStacktrace && t) {
            var i = o.computeStackTrace(t),
              s = a.prepareFramesForEvent(i.stack);
            r.stacktrace = { frames: s };
          }
          return r;
        }
        (n.eventFromUnknownInput = function (e, t, n) {
          var s;
          if ((void 0 === n && (n = {}), r.isErrorEvent(e) && e.error))
            return (e = e.error), (s = a.eventFromStacktrace(o.computeStackTrace(e)));
          if (r.isDOMError(e) || r.isDOMException(e)) {
            var $ = e,
              u = $.name || (r.isDOMError($) ? "DOMError" : "DOMException"),
              c = $.message ? u + ": " + $.message : u;
            return (s = i(c, t, n)), r.addExceptionTypeValue(s, c), s;
          }
          if (r.isError(e)) return (s = a.eventFromStacktrace(o.computeStackTrace(e)));
          if (r.isPlainObject(e) || r.isEvent(e)) {
            var l = e;
            return (s = a.eventFromPlainObject(l, t, n.rejection)), r.addExceptionMechanism(s, { synthetic: !0 }), s;
          }
          return (s = i(e, t, n)), r.addExceptionTypeValue(s, "" + e, void 0), r.addExceptionMechanism(s, { synthetic: !0 }), s;
        }),
          (n.eventFromString = i);
      },
      { "./parsers": 32, "./tracekit": 34, "@sentry/utils": 62 }
    ],
    24: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/core"),
          o = e("@sentry/utils"),
          i = 0;
        function s() {
          (i += 1),
            setTimeout(function () {
              i -= 1;
            });
        }
        (n.shouldIgnoreOnError = function () {
          return i > 0;
        }),
          (n.ignoreNextOnError = s),
          (n.wrap = function e(t, n, i) {
            if ((void 0 === n && (n = {}), "function" != typeof t)) return t;
            try {
              if (t.__sentry__) return t;
              if (t.__sentry_wrapped__) return t.__sentry_wrapped__;
            } catch (e) {
              return t;
            }
            var $ = function () {
              var $ = Array.prototype.slice.call(arguments);
              try {
                i && "function" == typeof i && i.apply(this, arguments);
                var u = $.map(function (t) {
                  return e(t, n);
                });
                return t.handleEvent ? t.handleEvent.apply(this, u) : t.apply(this, u);
              } catch (e) {
                throw (
                  (s(),
                  a.withScope(function (t) {
                    t.addEventProcessor(function (e) {
                      var t = r.__assign({}, e);
                      return (
                        n.mechanism && (o.addExceptionTypeValue(t, void 0, void 0), o.addExceptionMechanism(t, n.mechanism)),
                        (t.extra = r.__assign({}, t.extra, { arguments: o.normalize($, 3) })),
                        t
                      );
                    }),
                      a.captureException(e);
                  }),
                  e)
                );
              }
            };
            try {
              for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && ($[u] = t[u]);
            } catch (e) {}
            (t.prototype = t.prototype || {}),
              ($.prototype = t.prototype),
              Object.defineProperty(t, "__sentry_wrapped__", { enumerable: !1, value: $ }),
              Object.defineProperties($, { __sentry__: { enumerable: !1, value: !0 }, __sentry_original__: { enumerable: !1, value: t } });
            try {
              Object.getOwnPropertyDescriptor($, "name").configurable &&
                Object.defineProperty($, "name", {
                  get: function () {
                    return t.name;
                  }
                });
            } catch (e) {}
            return $;
          });
      },
      { "@sentry/core": 43, "@sentry/utils": 62, tslib: 154 }
    ],
    25: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/types");
        (n.Severity = a.Severity), (n.Status = a.Status);
        var o = e("@sentry/core");
        (n.addGlobalEventProcessor = o.addGlobalEventProcessor),
          (n.addBreadcrumb = o.addBreadcrumb),
          (n.captureException = o.captureException),
          (n.captureEvent = o.captureEvent),
          (n.captureMessage = o.captureMessage),
          (n.configureScope = o.configureScope),
          (n.getHubFromCarrier = o.getHubFromCarrier),
          (n.getCurrentHub = o.getCurrentHub),
          (n.Hub = o.Hub),
          (n.Scope = o.Scope),
          (n.setContext = o.setContext),
          (n.setExtra = o.setExtra),
          (n.setExtras = o.setExtras),
          (n.setTag = o.setTag),
          (n.setTags = o.setTags),
          (n.setUser = o.setUser),
          (n.withScope = o.withScope);
        var i = e("./client");
        n.BrowserClient = i.BrowserClient;
        var s = e("./sdk");
        (n.defaultIntegrations = s.defaultIntegrations),
          (n.forceLoad = s.forceLoad),
          (n.init = s.init),
          (n.lastEventId = s.lastEventId),
          (n.onLoad = s.onLoad),
          (n.showReportDialog = s.showReportDialog),
          (n.flush = s.flush),
          (n.close = s.close),
          (n.wrap = s.wrap);
        var $ = e("./version");
        (n.SDK_NAME = $.SDK_NAME), (n.SDK_VERSION = $.SDK_VERSION);
        var u = e("@sentry/core"),
          c = e("@sentry/utils"),
          l = e("./integrations"),
          d = e("./transports");
        n.Transports = d;
        var h = {},
          p = c.getGlobalObject();
        p.Sentry && p.Sentry.Integrations && (h = p.Sentry.Integrations);
        var f = r.__assign({}, h, u.Integrations, l);
        n.Integrations = f;
      },
      {
        "./client": 22,
        "./integrations": 28,
        "./sdk": 33,
        "./transports": 37,
        "./version": 39,
        "@sentry/core": 43,
        "@sentry/types": 54,
        "@sentry/utils": 62,
        tslib: 154
      }
    ],
    26: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/core"),
          o = e("@sentry/types"),
          i = e("@sentry/utils"),
          s = (function () {
            function e(t) {
              (this.name = e.id), (this._options = r.__assign({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }, t));
            }
            return (
              (e.prototype._consoleBreadcrumb = function (e) {
                var t = {
                  category: "console",
                  data: { extra: { arguments: i.normalize(e.args, 3) }, logger: "console" },
                  level: o.Severity.fromString(e.level),
                  message: i.safeJoin(e.args, " ")
                };
                if ("assert" === e.level) {
                  if (!1 !== e.args[0]) return;
                  (t.message = "Assertion failed: " + (i.safeJoin(e.args.slice(1), " ") || "console.assert")),
                    (t.data.extra.arguments = i.normalize(e.args.slice(1), 3));
                }
                a.getCurrentHub().addBreadcrumb(t, { input: e.args, level: e.level });
              }),
              (e.prototype._domBreadcrumb = function (e) {
                var t;
                try {
                  t = e.event.target ? i.htmlTreeAsString(e.event.target) : i.htmlTreeAsString(e.event);
                } catch (e) {
                  t = "<unknown>";
                }
                0 !== t.length && a.getCurrentHub().addBreadcrumb({ category: "ui." + e.name, message: t }, { event: event, name: e.name });
              }),
              (e.prototype._xhrBreadcrumb = function (e) {
                if (e.endTimestamp) {
                  if (e.xhr.__sentry_own_request__) return;
                  a.getCurrentHub().addBreadcrumb({ category: "xhr", data: e.xhr.__sentry_xhr__, type: "http" }, { xhr: e.xhr });
                } else e.xhr.__sentry_own_request__ && $(e.args[0]);
              }),
              (e.prototype._fetchBreadcrumb = function (e) {
                if (e.endTimestamp) {
                  var t = a.getCurrentHub().getClient(),
                    n = t && t.getDsn();
                  if (n) {
                    var i = new a.API(n).getStoreEndpoint();
                    if (i && -1 !== e.fetchData.url.indexOf(i) && "POST" === e.fetchData.method && e.args[1] && e.args[1].body)
                      return void $(e.args[1].body);
                  }
                  e.error
                    ? a
                        .getCurrentHub()
                        .addBreadcrumb(
                          {
                            category: "fetch",
                            data: r.__assign({}, e.fetchData, { status_code: e.response.status }),
                            level: o.Severity.Error,
                            type: "http"
                          },
                          { data: e.error, input: e.args }
                        )
                    : a
                        .getCurrentHub()
                        .addBreadcrumb(
                          { category: "fetch", data: r.__assign({}, e.fetchData, { status_code: e.response.status }), type: "http" },
                          { input: e.args, response: e.response }
                        );
                }
              }),
              (e.prototype._historyBreadcrumb = function (e) {
                var t = i.getGlobalObject(),
                  n = e.from,
                  r = e.to,
                  o = i.parseUrl(t.location.href),
                  s = i.parseUrl(n),
                  $ = i.parseUrl(r);
                s.path || (s = o),
                  o.protocol === $.protocol && o.host === $.host && (r = $.relative),
                  o.protocol === s.protocol && o.host === s.host && (n = s.relative),
                  a.getCurrentHub().addBreadcrumb({ category: "navigation", data: { from: n, to: r } });
              }),
              (e.prototype.setupOnce = function () {
                var e = this;
                this._options.console &&
                  i.addInstrumentationHandler({
                    callback: function () {
                      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                      e._consoleBreadcrumb.apply(e, r.__spread(t));
                    },
                    type: "console"
                  }),
                  this._options.dom &&
                    i.addInstrumentationHandler({
                      callback: function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._domBreadcrumb.apply(e, r.__spread(t));
                      },
                      type: "dom"
                    }),
                  this._options.xhr &&
                    i.addInstrumentationHandler({
                      callback: function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._xhrBreadcrumb.apply(e, r.__spread(t));
                      },
                      type: "xhr"
                    }),
                  this._options.fetch &&
                    i.addInstrumentationHandler({
                      callback: function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._fetchBreadcrumb.apply(e, r.__spread(t));
                      },
                      type: "fetch"
                    }),
                  this._options.history &&
                    i.addInstrumentationHandler({
                      callback: function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        e._historyBreadcrumb.apply(e, r.__spread(t));
                      },
                      type: "history"
                    });
              }),
              (e.id = "Breadcrumbs"),
              e
            );
          })();
        function $(e) {
          try {
            var t = JSON.parse(e);
            a.getCurrentHub().addBreadcrumb(
              {
                category: "sentry",
                event_id: t.event_id,
                level: t.level || o.Severity.fromString("error"),
                message: i.getEventDescription(t)
              },
              { event: t }
            );
          } catch (e) {
            i.logger.error("Error while adding sentry type breadcrumb");
          }
        }
        n.Breadcrumbs = s;
      },
      { "@sentry/core": 43, "@sentry/types": 54, "@sentry/utils": 62, tslib: 154 }
    ],
    27: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/core"),
          o = e("@sentry/types"),
          i = e("@sentry/utils"),
          s = e("../eventbuilder"),
          $ = e("../helpers"),
          u = (function () {
            function e(t) {
              (this.name = e.id),
                (this._global = i.getGlobalObject()),
                (this._oldOnErrorHandler = null),
                (this._oldOnUnhandledRejectionHandler = null),
                (this._onErrorHandlerInstalled = !1),
                (this._onUnhandledRejectionHandlerInstalled = !1),
                (this._options = r.__assign({ onerror: !0, onunhandledrejection: !0 }, t));
            }
            return (
              (e.prototype.setupOnce = function () {
                (Error.stackTraceLimit = 50),
                  this._options.onerror && (i.logger.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()),
                  this._options.onunhandledrejection &&
                    (i.logger.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler());
              }),
              (e.prototype._installGlobalOnErrorHandler = function () {
                if (!this._onErrorHandlerInstalled) {
                  var t = this;
                  (this._oldOnErrorHandler = this._global.onerror),
                    (this._global.onerror = function (n, r, o, u, c) {
                      var l = a.getCurrentHub(),
                        d = l.getIntegration(e),
                        h = c && !0 === c.__sentry_own_request__;
                      if (!d || $.shouldIgnoreOnError() || h) return !!t._oldOnErrorHandler && t._oldOnErrorHandler.apply(this, arguments);
                      var p = l.getClient(),
                        f = i.isPrimitive(c)
                          ? t._eventFromIncompleteOnError(n, r, o, u)
                          : t._enhanceEventWithInitialFrame(
                              s.eventFromUnknownInput(c, void 0, { attachStacktrace: p && p.getOptions().attachStacktrace, rejection: !1 }),
                              r,
                              o,
                              u
                            );
                      return (
                        i.addExceptionMechanism(f, { handled: !1, type: "onerror" }),
                        l.captureEvent(f, { originalException: c }),
                        !!t._oldOnErrorHandler && t._oldOnErrorHandler.apply(this, arguments)
                      );
                    }),
                    (this._onErrorHandlerInstalled = !0);
                }
              }),
              (e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
                if (!this._onUnhandledRejectionHandlerInstalled) {
                  var t = this;
                  (this._oldOnUnhandledRejectionHandler = this._global.onunhandledrejection),
                    (this._global.onunhandledrejection = function (n) {
                      var r = n;
                      try {
                        r = n && "reason" in n ? n.reason : n;
                      } catch (e) {}
                      var u = a.getCurrentHub(),
                        c = u.getIntegration(e),
                        l = r && !0 === r.__sentry_own_request__;
                      if (!c || $.shouldIgnoreOnError() || l)
                        return !t._oldOnUnhandledRejectionHandler || t._oldOnUnhandledRejectionHandler.apply(this, arguments);
                      var d = u.getClient(),
                        h = i.isPrimitive(r)
                          ? t._eventFromIncompleteRejection(r)
                          : s.eventFromUnknownInput(r, void 0, { attachStacktrace: d && d.getOptions().attachStacktrace, rejection: !0 });
                      return (
                        (h.level = o.Severity.Error),
                        i.addExceptionMechanism(h, { handled: !1, type: "onunhandledrejection" }),
                        u.captureEvent(h, { originalException: r }),
                        !t._oldOnUnhandledRejectionHandler || t._oldOnUnhandledRejectionHandler.apply(this, arguments)
                      );
                    }),
                    (this._onUnhandledRejectionHandlerInstalled = !0);
                }
              }),
              (e.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
                var a,
                  o = i.isErrorEvent(e) ? e.message : e;
                if (i.isString(o)) {
                  var s = o.match(
                    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                  );
                  s && ((a = s[1]), (o = s[2]));
                }
                var $ = { exception: { values: [{ type: a || "Error", value: o }] } };
                return this._enhanceEventWithInitialFrame($, t, n, r);
              }),
              (e.prototype._eventFromIncompleteRejection = function (e) {
                return {
                  exception: { values: [{ type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + e }] }
                };
              }),
              (e.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
                (e.exception = e.exception || {}),
                  (e.exception.values = e.exception.values || []),
                  (e.exception.values[0] = e.exception.values[0] || {}),
                  (e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}),
                  (e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || []);
                var a = isNaN(parseInt(r, 10)) ? void 0 : r,
                  o = isNaN(parseInt(n, 10)) ? void 0 : n,
                  s = i.isString(t) && t.length > 0 ? t : i.getLocationHref();
                return (
                  0 === e.exception.values[0].stacktrace.frames.length &&
                    e.exception.values[0].stacktrace.frames.push({ colno: a, filename: s, function: "?", in_app: !0, lineno: o }),
                  e
                );
              }),
              (e.id = "GlobalHandlers"),
              e
            );
          })();
        n.GlobalHandlers = u;
      },
      { "../eventbuilder": 23, "../helpers": 24, "@sentry/core": 43, "@sentry/types": 54, "@sentry/utils": 62, tslib: 154 }
    ],
    28: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./globalhandlers");
        n.GlobalHandlers = r.GlobalHandlers;
        var a = e("./trycatch");
        n.TryCatch = a.TryCatch;
        var o = e("./breadcrumbs");
        n.Breadcrumbs = o.Breadcrumbs;
        var i = e("./linkederrors");
        n.LinkedErrors = i.LinkedErrors;
        var s = e("./useragent");
        n.UserAgent = s.UserAgent;
      },
      { "./breadcrumbs": 26, "./globalhandlers": 27, "./linkederrors": 29, "./trycatch": 30, "./useragent": 31 }
    ],
    29: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/core"),
          o = e("@sentry/utils"),
          i = e("../parsers"),
          s = e("../tracekit"),
          $ = (function () {
            function e(t) {
              void 0 === t && (t = {}), (this.name = e.id), (this._key = t.key || "cause"), (this._limit = t.limit || 5);
            }
            return (
              (e.prototype.setupOnce = function () {
                a.addGlobalEventProcessor(function (t, n) {
                  var r = a.getCurrentHub().getIntegration(e);
                  return r ? r._handler(t, n) : t;
                });
              }),
              (e.prototype._handler = function (e, t) {
                if (!(e.exception && e.exception.values && t && o.isInstanceOf(t.originalException, Error))) return e;
                var n = this._walkErrorTree(t.originalException, this._key);
                return (e.exception.values = r.__spread(n, e.exception.values)), e;
              }),
              (e.prototype._walkErrorTree = function (e, t, n) {
                if ((void 0 === n && (n = []), !o.isInstanceOf(e[t], Error) || n.length + 1 >= this._limit)) return n;
                var a = s.computeStackTrace(e[t]),
                  $ = i.exceptionFromStacktrace(a);
                return this._walkErrorTree(e[t], t, r.__spread([$], n));
              }),
              (e.id = "LinkedErrors"),
              e
            );
          })();
        n.LinkedErrors = $;
      },
      { "../parsers": 32, "../tracekit": 34, "@sentry/core": 43, "@sentry/utils": 62, tslib: 154 }
    ],
    30: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/utils"),
          a = e("../helpers"),
          o = (function () {
            function e() {
              (this._ignoreOnError = 0), (this.name = e.id);
            }
            return (
              (e.prototype._wrapTimeFunction = function (e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  var o = t[0];
                  return (
                    (t[0] = a.wrap(o, { mechanism: { data: { function: r.getFunctionName(e) }, handled: !0, type: "instrument" } })),
                    e.apply(this, t)
                  );
                };
              }),
              (e.prototype._wrapRAF = function (e) {
                return function (t) {
                  return e(
                    a.wrap(t, {
                      mechanism: {
                        data: { function: "requestAnimationFrame", handler: r.getFunctionName(e) },
                        handled: !0,
                        type: "instrument"
                      }
                    })
                  );
                };
              }),
              (e.prototype._wrapEventTarget = function (e) {
                var t = r.getGlobalObject(),
                  n = t[e] && t[e].prototype;
                n &&
                  n.hasOwnProperty &&
                  n.hasOwnProperty("addEventListener") &&
                  (r.fill(n, "addEventListener", function (t) {
                    return function (n, o, i) {
                      try {
                        "function" == typeof o.handleEvent &&
                          (o.handleEvent = a.wrap(o.handleEvent.bind(o), {
                            mechanism: {
                              data: { function: "handleEvent", handler: r.getFunctionName(o), target: e },
                              handled: !0,
                              type: "instrument"
                            }
                          }));
                      } catch (e) {}
                      return t.call(
                        this,
                        n,
                        a.wrap(o, {
                          mechanism: {
                            data: { function: "addEventListener", handler: r.getFunctionName(o), target: e },
                            handled: !0,
                            type: "instrument"
                          }
                        }),
                        i
                      );
                    };
                  }),
                  r.fill(n, "removeEventListener", function (e) {
                    return function (t, n, r) {
                      var a = n;
                      try {
                        a = a && (a.__sentry_wrapped__ || a);
                      } catch (e) {}
                      return e.call(this, t, a, r);
                    };
                  }));
              }),
              (e.prototype._wrapXHR = function (e) {
                return function () {
                  for (var t = this, n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                  var i = this,
                    s = ["onload", "onerror", "onprogress"];
                  return (
                    s.forEach(function (e) {
                      e in t &&
                        "function" == typeof t[e] &&
                        r.fill(t, e, function (t) {
                          return a.wrap(t, {
                            mechanism: { data: { function: e, handler: r.getFunctionName(t) }, handled: !0, type: "instrument" }
                          });
                        });
                    }),
                    "onreadystatechange" in i &&
                      "function" == typeof i.onreadystatechange &&
                      r.fill(i, "onreadystatechange", function (e) {
                        var t = {
                          mechanism: {
                            data: { function: "onreadystatechange", handler: r.getFunctionName(e) },
                            handled: !0,
                            type: "instrument"
                          }
                        };
                        return e.__sentry_original__ && (t.mechanism.data.handler = r.getFunctionName(e.__sentry_original__)), a.wrap(e, t);
                      }),
                    e.apply(this, n)
                  );
                };
              }),
              (e.prototype.setupOnce = function () {
                this._ignoreOnError = this._ignoreOnError;
                var e = r.getGlobalObject();
                r.fill(e, "setTimeout", this._wrapTimeFunction.bind(this)),
                  r.fill(e, "setInterval", this._wrapTimeFunction.bind(this)),
                  r.fill(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
                  "XMLHttpRequest" in e && r.fill(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
                  [
                    "EventTarget",
                    "Window",
                    "Node",
                    "ApplicationCache",
                    "AudioTrackList",
                    "ChannelMergerNode",
                    "CryptoOperation",
                    "EventSource",
                    "FileReader",
                    "HTMLUnknownElement",
                    "IDBDatabase",
                    "IDBRequest",
                    "IDBTransaction",
                    "KeyOperation",
                    "MediaController",
                    "MessagePort",
                    "ModalWindow",
                    "Notification",
                    "SVGElementInstance",
                    "Screen",
                    "TextTrack",
                    "TextTrackCue",
                    "TextTrackList",
                    "WebSocket",
                    "WebSocketWorker",
                    "Worker",
                    "XMLHttpRequest",
                    "XMLHttpRequestEventTarget",
                    "XMLHttpRequestUpload"
                  ].forEach(this._wrapEventTarget.bind(this));
              }),
              (e.id = "TryCatch"),
              e
            );
          })();
        n.TryCatch = o;
      },
      { "../helpers": 24, "@sentry/utils": 62 }
    ],
    31: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/core"),
          o = e("@sentry/utils").getGlobalObject(),
          i = (function () {
            function e() {
              this.name = e.id;
            }
            return (
              (e.prototype.setupOnce = function () {
                a.addGlobalEventProcessor(function (t) {
                  if (a.getCurrentHub().getIntegration(e)) {
                    if (!o.navigator || !o.location) return t;
                    var n = t.request || {};
                    return (
                      (n.url = n.url || o.location.href),
                      (n.headers = n.headers || {}),
                      (n.headers["User-Agent"] = o.navigator.userAgent),
                      r.__assign({}, t, { request: n })
                    );
                  }
                  return t;
                });
              }),
              (e.id = "UserAgent"),
              e
            );
          })();
        n.UserAgent = i;
      },
      { "@sentry/core": 43, "@sentry/utils": 62, tslib: 154 }
    ],
    32: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/utils"),
          a = e("./tracekit");
        function o(e) {
          var t = i(e.stack),
            n = { type: e.name, value: e.message };
          return (
            t && t.length && (n.stacktrace = { frames: t }),
            void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
            n
          );
        }
        function i(e) {
          if (!e || !e.length) return [];
          var t = e,
            n = t[0].func || "",
            r = t[t.length - 1].func || "";
          return (
            (-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException")) || (t = t.slice(1)),
            -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
            t
              .map(function (e) {
                return {
                  colno: null === e.column ? void 0 : e.column,
                  filename: e.url || t[0].url,
                  function: e.func || "?",
                  in_app: !0,
                  lineno: null === e.line ? void 0 : e.line
                };
              })
              .slice(0, 50)
              .reverse()
          );
        }
        (n.exceptionFromStacktrace = o),
          (n.eventFromPlainObject = function (e, t, n) {
            var o = {
              exception: {
                values: [
                  {
                    type: r.isEvent(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                    value:
                      "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + r.extractExceptionKeysForMessage(e)
                  }
                ]
              },
              extra: { __serialized__: r.normalizeToSize(e) }
            };
            if (t) {
              var s = i(a.computeStackTrace(t).stack);
              o.stacktrace = { frames: s };
            }
            return o;
          }),
          (n.eventFromStacktrace = function (e) {
            return { exception: { values: [o(e)] } };
          }),
          (n.prepareFramesForEvent = i);
      },
      { "./tracekit": 34, "@sentry/utils": 62 }
    ],
    33: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/core"),
          a = e("@sentry/utils"),
          o = e("./client"),
          i = e("./helpers"),
          s = e("./integrations");
        (n.defaultIntegrations = [
          new r.Integrations.InboundFilters(),
          new r.Integrations.FunctionToString(),
          new s.TryCatch(),
          new s.Breadcrumbs(),
          new s.GlobalHandlers(),
          new s.LinkedErrors(),
          new s.UserAgent()
        ]),
          (n.init = function (e) {
            if (
              (void 0 === e && (e = {}),
              void 0 === e.defaultIntegrations && (e.defaultIntegrations = n.defaultIntegrations),
              void 0 === e.release)
            ) {
              var t = a.getGlobalObject();
              t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id);
            }
            r.initAndBind(o.BrowserClient, e);
          }),
          (n.showReportDialog = function (e) {
            void 0 === e && (e = {}), e.eventId || (e.eventId = r.getCurrentHub().lastEventId());
            var t = r.getCurrentHub().getClient();
            t && t.showReportDialog(e);
          }),
          (n.lastEventId = function () {
            return r.getCurrentHub().lastEventId();
          }),
          (n.forceLoad = function () {}),
          (n.onLoad = function (e) {
            e();
          }),
          (n.flush = function (e) {
            var t = r.getCurrentHub().getClient();
            return t ? t.flush(e) : a.SyncPromise.reject(!1);
          }),
          (n.close = function (e) {
            var t = r.getCurrentHub().getClient();
            return t ? t.close(e) : a.SyncPromise.reject(!1);
          }),
          (n.wrap = function (e) {
            return i.wrap(e)();
          });
      },
      { "./client": 22, "./helpers": 24, "./integrations": 28, "@sentry/core": 43, "@sentry/utils": 62 }
    ],
    34: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = "?",
          o =
            /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[-a-z]+:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
          i =
            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
          s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
          $ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
          u = /\((\S*)(?::(\d+))(?::(\d+))\)/;
        function c(e, t) {
          try {
            return r.__assign({}, e, { stack: e.stack.slice(t) });
          } catch (t) {
            return e;
          }
        }
        function l(e) {
          var t = e && e.message;
          return t ? (t.error && "string" == typeof t.error.message ? t.error.message : t) : "No error message";
        }
        n.computeStackTrace = function (e) {
          var t = null,
            n = e && e.framesToPop;
          try {
            if (
              ((t = (function (e) {
                if (!e || !e.stacktrace) return null;
                for (
                  var t,
                    n = e.stacktrace,
                    r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                    o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
                    i = n.split("\n"),
                    s = [],
                    $ = 0;
                  $ < i.length;
                  $ += 2
                ) {
                  var u = null;
                  (t = r.exec(i[$]))
                    ? (u = { url: t[2], func: t[3], args: [], line: +t[1], column: null })
                    : (t = o.exec(i[$])) &&
                      (u = { url: t[6], func: t[3] || t[4], args: t[5] ? t[5].split(",") : [], line: +t[1], column: +t[2] }),
                    u && (!u.func && u.line && (u.func = a), s.push(u));
                }
                if (!s.length) return null;
                return { message: l(e), name: e.name, stack: s };
              })(e)),
              t)
            )
              return c(t, n);
          } catch (e) {}
          try {
            if (
              ((t = (function (e) {
                if (!e || !e.stack) return null;
                for (var t, n, r, c = [], d = e.stack.split("\n"), h = 0; h < d.length; ++h) {
                  if ((n = o.exec(d[h]))) {
                    var p = n[2] && 0 === n[2].indexOf("native");
                    n[2] && 0 === n[2].indexOf("eval") && (t = u.exec(n[2])) && ((n[2] = t[1]), (n[3] = t[2]), (n[4] = t[3])),
                      (r = { url: n[2], func: n[1] || a, args: p ? [n[2]] : [], line: n[3] ? +n[3] : null, column: n[4] ? +n[4] : null });
                  } else if ((n = s.exec(d[h]))) r = { url: n[2], func: n[1] || a, args: [], line: +n[3], column: n[4] ? +n[4] : null };
                  else {
                    if (!(n = i.exec(d[h]))) continue;
                    n[3] && n[3].indexOf(" > eval") > -1 && (t = $.exec(n[3]))
                      ? ((n[1] = n[1] || "eval"), (n[3] = t[1]), (n[4] = t[2]), (n[5] = ""))
                      : 0 !== h || n[5] || void 0 === e.columnNumber || (c[0].column = e.columnNumber + 1),
                      (r = {
                        url: n[3],
                        func: n[1] || a,
                        args: n[2] ? n[2].split(",") : [],
                        line: n[4] ? +n[4] : null,
                        column: n[5] ? +n[5] : null
                      });
                  }
                  !r.func && r.line && (r.func = a), c.push(r);
                }
                if (!c.length) return null;
                return { message: l(e), name: e.name, stack: c };
              })(e)),
              t)
            )
              return c(t, n);
          } catch (e) {}
          return { message: l(e), name: e && e.name, stack: [], failed: !0 };
        };
      },
      { tslib: 154 }
    ],
    35: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/core"),
          a = e("@sentry/utils"),
          o = (function () {
            function e(e) {
              (this.options = e),
                (this._buffer = new a.PromiseBuffer(30)),
                (this.url = new r.API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth());
            }
            return (
              (e.prototype.sendEvent = function (e) {
                throw new a.SentryError("Transport Class has to implement `sendEvent` method");
              }),
              (e.prototype.close = function (e) {
                return this._buffer.drain(e);
              }),
              e
            );
          })();
        n.BaseTransport = o;
      },
      { "@sentry/core": 43, "@sentry/utils": 62 }
    ],
    36: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/types"),
          o = e("@sentry/utils"),
          i = e("./base"),
          s = o.getGlobalObject(),
          $ = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t._disabledUntil = new Date(Date.now())), t;
            }
            return (
              r.__extends(t, e),
              (t.prototype.sendEvent = function (e) {
                var t = this;
                if (new Date(Date.now()) < this._disabledUntil)
                  return Promise.reject({
                    event: e,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                  });
                var n = { body: JSON.stringify(e), method: "POST", referrerPolicy: o.supportsReferrerPolicy() ? "origin" : "" };
                return this._buffer.add(
                  new o.SyncPromise(function (e, r) {
                    s.fetch(t.url, n)
                      .then(function (n) {
                        var i = a.Status.fromHttpCode(n.status);
                        if (i !== a.Status.Success) {
                          if (i === a.Status.RateLimit) {
                            var s = Date.now();
                            (t._disabledUntil = new Date(s + o.parseRetryAfterHeader(s, n.headers.get("Retry-After")))),
                              o.logger.warn("Too many requests, backing off till: " + t._disabledUntil);
                          }
                          r(n);
                        } else e({ status: i });
                      })
                      .catch(r);
                  })
                );
              }),
              t
            );
          })(i.BaseTransport);
        n.FetchTransport = $;
      },
      { "./base": 35, "@sentry/types": 54, "@sentry/utils": 62, tslib: 154 }
    ],
    37: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./base");
        n.BaseTransport = r.BaseTransport;
        var a = e("./fetch");
        n.FetchTransport = a.FetchTransport;
        var o = e("./xhr");
        n.XHRTransport = o.XHRTransport;
      },
      { "./base": 35, "./fetch": 36, "./xhr": 38 }
    ],
    38: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/types"),
          o = e("@sentry/utils"),
          i = (function (e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (t._disabledUntil = new Date(Date.now())), t;
            }
            return (
              r.__extends(t, e),
              (t.prototype.sendEvent = function (e) {
                var t = this;
                return new Date(Date.now()) < this._disabledUntil
                  ? Promise.reject({
                      event: e,
                      reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                      status: 429
                    })
                  : this._buffer.add(
                      new o.SyncPromise(function (n, r) {
                        var i = new XMLHttpRequest();
                        (i.onreadystatechange = function () {
                          if (4 === i.readyState) {
                            var e = a.Status.fromHttpCode(i.status);
                            if (e !== a.Status.Success) {
                              if (e === a.Status.RateLimit) {
                                var s = Date.now();
                                (t._disabledUntil = new Date(s + o.parseRetryAfterHeader(s, i.getResponseHeader("Retry-After")))),
                                  o.logger.warn("Too many requests, backing off till: " + t._disabledUntil);
                              }
                              r(i);
                            } else n({ status: e });
                          }
                        }),
                          i.open("POST", t.url),
                          i.send(JSON.stringify(e));
                      })
                    );
              }),
              t
            );
          })(e("./base").BaseTransport);
        n.XHRTransport = i;
      },
      { "./base": 35, "@sentry/types": 54, "@sentry/utils": 62, tslib: 154 }
    ],
    39: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 }), (n.SDK_NAME = "sentry.javascript.browser"), (n.SDK_VERSION = "5.10.2");
      },
      {}
    ],
    40: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/utils"),
          a = (function () {
            function e(e) {
              (this.dsn = e), (this._dsnObject = new r.Dsn(e));
            }
            return (
              (e.prototype.getDsn = function () {
                return this._dsnObject;
              }),
              (e.prototype.getStoreEndpoint = function () {
                return "" + this._getBaseUrl() + this.getStoreEndpointPath();
              }),
              (e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
                var e = { sentry_key: this._dsnObject.user, sentry_version: "7" };
                return this.getStoreEndpoint() + "?" + r.urlEncode(e);
              }),
              (e.prototype._getBaseUrl = function () {
                var e = this._dsnObject,
                  t = e.protocol ? e.protocol + ":" : "",
                  n = e.port ? ":" + e.port : "";
                return t + "//" + e.host + n;
              }),
              (e.prototype.getStoreEndpointPath = function () {
                var e = this._dsnObject;
                return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/";
              }),
              (e.prototype.getRequestHeaders = function (e, t) {
                var n = this._dsnObject,
                  a = ["Sentry sentry_version=7"];
                return (
                  a.push("sentry_timestamp=" + r.timestampWithMs()),
                  a.push("sentry_client=" + e + "/" + t),
                  a.push("sentry_key=" + n.user),
                  n.pass && a.push("sentry_secret=" + n.pass),
                  { "Content-Type": "application/json", "X-Sentry-Auth": a.join(", ") }
                );
              }),
              (e.prototype.getReportDialogEndpoint = function (e) {
                void 0 === e && (e = {});
                var t = this._dsnObject,
                  n = this._getBaseUrl() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/",
                  r = [];
                for (var a in (r.push("dsn=" + t.toString()), e))
                  if ("user" === a) {
                    if (!e.user) continue;
                    e.user.name && r.push("name=" + encodeURIComponent(e.user.name)),
                      e.user.email && r.push("email=" + encodeURIComponent(e.user.email));
                  } else r.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
                return r.length ? n + "?" + r.join("&") : n;
              }),
              e
            );
          })();
        n.API = a;
      },
      { "@sentry/utils": 62 }
    ],
    41: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/utils"),
          a = e("./transports/noop"),
          o = (function () {
            function e(e) {
              (this._options = e),
                this._options.dsn || r.logger.warn("No DSN provided, backend will not do anything."),
                (this._transport = this._setupTransport());
            }
            return (
              (e.prototype._setupTransport = function () {
                return new a.NoopTransport();
              }),
              (e.prototype.eventFromException = function (e, t) {
                throw new r.SentryError("Backend has to implement `eventFromException` method");
              }),
              (e.prototype.eventFromMessage = function (e, t, n) {
                throw new r.SentryError("Backend has to implement `eventFromMessage` method");
              }),
              (e.prototype.sendEvent = function (e) {
                this._transport.sendEvent(e).then(null, function (e) {
                  r.logger.error("Error while sending event: " + e);
                });
              }),
              (e.prototype.getTransport = function () {
                return this._transport;
              }),
              e
            );
          })();
        n.BaseBackend = o;
      },
      { "./transports/noop": 49, "@sentry/utils": 62 }
    ],
    42: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/utils"),
          o = e("./integration"),
          i = (function () {
            function e(e, t) {
              (this._integrations = {}),
                (this._processing = !1),
                (this._backend = new e(t)),
                (this._options = t),
                t.dsn && (this._dsn = new a.Dsn(t.dsn)),
                this._isEnabled() && (this._integrations = o.setupIntegrations(this._options));
            }
            return (
              (e.prototype.captureException = function (e, t, n) {
                var r = this,
                  o = t && t.event_id;
                return (
                  (this._processing = !0),
                  this._getBackend()
                    .eventFromException(e, t)
                    .then(function (e) {
                      return r._processEvent(e, t, n);
                    })
                    .then(function (e) {
                      (o = e && e.event_id), (r._processing = !1);
                    })
                    .then(null, function (e) {
                      a.logger.error(e), (r._processing = !1);
                    }),
                  o
                );
              }),
              (e.prototype.captureMessage = function (e, t, n, r) {
                var o = this,
                  i = n && n.event_id;
                return (
                  (this._processing = !0),
                  (a.isPrimitive(e) ? this._getBackend().eventFromMessage("" + e, t, n) : this._getBackend().eventFromException(e, n))
                    .then(function (e) {
                      return o._processEvent(e, n, r);
                    })
                    .then(function (e) {
                      (i = e && e.event_id), (o._processing = !1);
                    })
                    .then(null, function (e) {
                      a.logger.error(e), (o._processing = !1);
                    }),
                  i
                );
              }),
              (e.prototype.captureEvent = function (e, t, n) {
                var r = this,
                  o = t && t.event_id;
                return (
                  (this._processing = !0),
                  this._processEvent(e, t, n)
                    .then(function (e) {
                      (o = e && e.event_id), (r._processing = !1);
                    })
                    .then(null, function (e) {
                      a.logger.error(e), (r._processing = !1);
                    }),
                  o
                );
              }),
              (e.prototype.getDsn = function () {
                return this._dsn;
              }),
              (e.prototype.getOptions = function () {
                return this._options;
              }),
              (e.prototype.flush = function (e) {
                var t = this;
                return this._isClientProcessing(e).then(function (n) {
                  return (
                    clearInterval(n.interval),
                    t
                      ._getBackend()
                      .getTransport()
                      .close(e)
                      .then(function (e) {
                        return n.ready && e;
                      })
                  );
                });
              }),
              (e.prototype.close = function (e) {
                var t = this;
                return this.flush(e).then(function (e) {
                  return (t.getOptions().enabled = !1), e;
                });
              }),
              (e.prototype.getIntegrations = function () {
                return this._integrations || {};
              }),
              (e.prototype.getIntegration = function (e) {
                try {
                  return this._integrations[e.id] || null;
                } catch (t) {
                  return a.logger.warn("Cannot retrieve integration " + e.id + " from the current Client"), null;
                }
              }),
              (e.prototype._isClientProcessing = function (e) {
                var t = this;
                return new a.SyncPromise(function (n) {
                  var r = 0,
                    a = 0;
                  clearInterval(a),
                    (a = setInterval(function () {
                      t._processing ? ((r += 1), e && r >= e && n({ interval: a, ready: !1 })) : n({ interval: a, ready: !0 });
                    }, 1));
                });
              }),
              (e.prototype._getBackend = function () {
                return this._backend;
              }),
              (e.prototype._isEnabled = function () {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
              }),
              (e.prototype._prepareEvent = function (e, t, n) {
                var o = this.getOptions(),
                  i = o.environment,
                  s = o.release,
                  $ = o.dist,
                  u = o.maxValueLength,
                  c = void 0 === u ? 250 : u,
                  l = r.__assign({}, e);
                void 0 === l.environment && void 0 !== i && (l.environment = i),
                  void 0 === l.release && void 0 !== s && (l.release = s),
                  void 0 === l.dist && void 0 !== $ && (l.dist = $),
                  l.message && (l.message = a.truncate(l.message, c));
                var d = l.exception && l.exception.values && l.exception.values[0];
                d && d.value && (d.value = a.truncate(d.value, c));
                var h = l.request;
                h && h.url && (h.url = a.truncate(h.url, c)),
                  void 0 === l.event_id && (l.event_id = a.uuid4()),
                  this._addIntegrations(l.sdk);
                var p = a.SyncPromise.resolve(l);
                return t && (p = t.applyToEvent(l, n)), p;
              }),
              (e.prototype._addIntegrations = function (e) {
                var t = Object.keys(this._integrations);
                e && t.length > 0 && (e.integrations = t);
              }),
              (e.prototype._processEvent = function (e, t, n) {
                var r = this,
                  o = this.getOptions(),
                  i = o.beforeSend,
                  s = o.sampleRate;
                return this._isEnabled()
                  ? "number" == typeof s && Math.random() > s
                    ? a.SyncPromise.reject("This event has been sampled, will not send event.")
                    : new a.SyncPromise(function (o, s) {
                        r._prepareEvent(e, n, t)
                          .then(function (e) {
                            if (null !== e) {
                              var n = e;
                              try {
                                if ((t && t.data && !0 === t.data.__sentry__) || !i) return r._getBackend().sendEvent(n), void o(n);
                                var $ = i(e, t);
                                if (void 0 === $) a.logger.error("`beforeSend` method has to return `null` or a valid event.");
                                else if (a.isThenable($)) r._handleAsyncBeforeSend($, o, s);
                                else {
                                  if (null === (n = $))
                                    return a.logger.log("`beforeSend` returned `null`, will not send event."), void o(null);
                                  r._getBackend().sendEvent(n), o(n);
                                }
                              } catch (e) {
                                r.captureException(e, { data: { __sentry__: !0 }, originalException: e }),
                                  s("`beforeSend` threw an error, will not send event.");
                              }
                            } else s("An event processor returned null, will not send event.");
                          })
                          .then(null, function () {
                            s("`beforeSend` threw an error, will not send event.");
                          });
                      })
                  : a.SyncPromise.reject("SDK not enabled, will not send event.");
              }),
              (e.prototype._handleAsyncBeforeSend = function (e, t, n) {
                var r = this;
                e.then(function (e) {
                  null !== e ? (r._getBackend().sendEvent(e), t(e)) : n("`beforeSend` returned `null`, will not send event.");
                }).then(null, function (e) {
                  n("beforeSend rejected with " + e);
                });
              }),
              e
            );
          })();
        n.BaseClient = i;
      },
      { "./integration": 44, "@sentry/utils": 62, tslib: 154 }
    ],
    43: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/minimal");
        (n.addBreadcrumb = r.addBreadcrumb),
          (n.captureException = r.captureException),
          (n.captureEvent = r.captureEvent),
          (n.captureMessage = r.captureMessage),
          (n.configureScope = r.configureScope),
          (n.setContext = r.setContext),
          (n.setExtra = r.setExtra),
          (n.setExtras = r.setExtras),
          (n.setTag = r.setTag),
          (n.setTags = r.setTags),
          (n.setUser = r.setUser),
          (n.withScope = r.withScope);
        var a = e("@sentry/hub");
        (n.addGlobalEventProcessor = a.addGlobalEventProcessor),
          (n.getCurrentHub = a.getCurrentHub),
          (n.getHubFromCarrier = a.getHubFromCarrier),
          (n.Hub = a.Hub),
          (n.Scope = a.Scope);
        var o = e("./api");
        n.API = o.API;
        var i = e("./baseclient");
        n.BaseClient = i.BaseClient;
        var s = e("./basebackend");
        n.BaseBackend = s.BaseBackend;
        var $ = e("./sdk");
        n.initAndBind = $.initAndBind;
        var u = e("./transports/noop");
        n.NoopTransport = u.NoopTransport;
        var c = e("./integrations");
        n.Integrations = c;
      },
      {
        "./api": 40,
        "./basebackend": 41,
        "./baseclient": 42,
        "./integrations": 47,
        "./sdk": 48,
        "./transports/noop": 49,
        "@sentry/hub": 51,
        "@sentry/minimal": 53
      }
    ],
    44: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/hub"),
          o = e("@sentry/utils");
        function i(e) {
          var t = (e.defaultIntegrations && r.__spread(e.defaultIntegrations)) || [],
            n = e.integrations,
            a = [];
          if (Array.isArray(n)) {
            var o = n.map(function (e) {
                return e.name;
              }),
              i = [];
            t.forEach(function (e) {
              -1 === o.indexOf(e.name) && -1 === i.indexOf(e.name) && (a.push(e), i.push(e.name));
            }),
              n.forEach(function (e) {
                -1 === i.indexOf(e.name) && (a.push(e), i.push(e.name));
              });
          } else "function" == typeof n ? ((a = n(t)), (a = Array.isArray(a) ? a : [a])) : (a = r.__spread(t));
          var s = a.map(function (e) {
              return e.name;
            }),
            $ = "Debug";
          return -1 !== s.indexOf($) && a.push.apply(a, r.__spread(a.splice(s.indexOf($), 1))), a;
        }
        function s(e) {
          -1 === n.installedIntegrations.indexOf(e.name) &&
            (e.setupOnce(a.addGlobalEventProcessor, a.getCurrentHub),
            n.installedIntegrations.push(e.name),
            o.logger.log("Integration installed: " + e.name));
        }
        (n.installedIntegrations = []),
          (n.getIntegrationsToSetup = i),
          (n.setupIntegration = s),
          (n.setupIntegrations = function (e) {
            var t = {};
            return (
              i(e).forEach(function (e) {
                (t[e.name] = e), s(e);
              }),
              t
            );
          });
      },
      { "@sentry/hub": 51, "@sentry/utils": 62, tslib: 154 }
    ],
    45: [
      function (e, t, n) {
        var r;
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = (function () {
          function e() {
            this.name = e.id;
          }
          return (
            (e.prototype.setupOnce = function () {
              (r = Function.prototype.toString),
                (Function.prototype.toString = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  var n = this.__sentry_original__ || this;
                  return r.apply(n, e);
                });
            }),
            (e.id = "FunctionToString"),
            e
          );
        })();
        n.FunctionToString = a;
      },
      {}
    ],
    46: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/hub"),
          o = e("@sentry/utils"),
          i = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
          s = (function () {
            function e(t) {
              void 0 === t && (t = {}), (this._options = t), (this.name = e.id);
            }
            return (
              (e.prototype.setupOnce = function () {
                a.addGlobalEventProcessor(function (t) {
                  var n = a.getCurrentHub();
                  if (!n) return t;
                  var r = n.getIntegration(e);
                  if (r) {
                    var o = n.getClient(),
                      i = o ? o.getOptions() : {},
                      s = r._mergeOptions(i);
                    if (r._shouldDropEvent(t, s)) return null;
                  }
                  return t;
                });
              }),
              (e.prototype._shouldDropEvent = function (e, t) {
                return this._isSentryError(e, t)
                  ? (o.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + o.getEventDescription(e)), !0)
                  : this._isIgnoredError(e, t)
                  ? (o.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + o.getEventDescription(e)), !0)
                  : this._isBlacklistedUrl(e, t)
                  ? (o.logger.warn(
                      "Event dropped due to being matched by `blacklistUrls` option.\nEvent: " +
                        o.getEventDescription(e) +
                        ".\nUrl: " +
                        this._getEventFilterUrl(e)
                    ),
                    !0)
                  : !this._isWhitelistedUrl(e, t) &&
                    (o.logger.warn(
                      "Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " +
                        o.getEventDescription(e) +
                        ".\nUrl: " +
                        this._getEventFilterUrl(e)
                    ),
                    !0);
              }),
              (e.prototype._isSentryError = function (e, t) {
                if ((void 0 === t && (t = {}), !t.ignoreInternal)) return !1;
                try {
                  return (
                    (e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type) || !1
                  );
                } catch (e) {
                  return !1;
                }
              }),
              (e.prototype._isIgnoredError = function (e, t) {
                return (
                  void 0 === t && (t = {}),
                  !(!t.ignoreErrors || !t.ignoreErrors.length) &&
                    this._getPossibleEventMessages(e).some(function (e) {
                      return t.ignoreErrors.some(function (t) {
                        return o.isMatchingPattern(e, t);
                      });
                    })
                );
              }),
              (e.prototype._isBlacklistedUrl = function (e, t) {
                if ((void 0 === t && (t = {}), !t.blacklistUrls || !t.blacklistUrls.length)) return !1;
                var n = this._getEventFilterUrl(e);
                return (
                  !!n &&
                  t.blacklistUrls.some(function (e) {
                    return o.isMatchingPattern(n, e);
                  })
                );
              }),
              (e.prototype._isWhitelistedUrl = function (e, t) {
                if ((void 0 === t && (t = {}), !t.whitelistUrls || !t.whitelistUrls.length)) return !0;
                var n = this._getEventFilterUrl(e);
                return (
                  !n ||
                  t.whitelistUrls.some(function (e) {
                    return o.isMatchingPattern(n, e);
                  })
                );
              }),
              (e.prototype._mergeOptions = function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    blacklistUrls: r.__spread(this._options.blacklistUrls || [], e.blacklistUrls || []),
                    ignoreErrors: r.__spread(this._options.ignoreErrors || [], e.ignoreErrors || [], i),
                    ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal,
                    whitelistUrls: r.__spread(this._options.whitelistUrls || [], e.whitelistUrls || [])
                  }
                );
              }),
              (e.prototype._getPossibleEventMessages = function (e) {
                if (e.message) return [e.message];
                if (e.exception)
                  try {
                    var t = (e.exception.values && e.exception.values[0]) || {},
                      n = t.type,
                      r = void 0 === n ? "" : n,
                      a = t.value,
                      i = void 0 === a ? "" : a;
                    return ["" + i, r + ": " + i];
                  } catch (t) {
                    return o.logger.error("Cannot extract message for event " + o.getEventDescription(e)), [];
                  }
                return [];
              }),
              (e.prototype._getEventFilterUrl = function (e) {
                try {
                  if (e.stacktrace) {
                    var t = e.stacktrace.frames;
                    return (t && t[t.length - 1].filename) || null;
                  }
                  if (e.exception) {
                    var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                    return (n && n[n.length - 1].filename) || null;
                  }
                  return null;
                } catch (t) {
                  return o.logger.error("Cannot extract url for event " + o.getEventDescription(e)), null;
                }
              }),
              (e.id = "InboundFilters"),
              e
            );
          })();
        n.InboundFilters = s;
      },
      { "@sentry/hub": 51, "@sentry/utils": 62, tslib: 154 }
    ],
    47: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./functiontostring");
        n.FunctionToString = r.FunctionToString;
        var a = e("./inboundfilters");
        n.InboundFilters = a.InboundFilters;
      },
      { "./functiontostring": 45, "./inboundfilters": 46 }
    ],
    48: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/hub"),
          a = e("@sentry/utils");
        n.initAndBind = function (e, t) {
          !0 === t.debug && a.logger.enable(), r.getCurrentHub().bindClient(new e(t));
        };
      },
      { "@sentry/hub": 51, "@sentry/utils": 62 }
    ],
    49: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("@sentry/types"),
          a = e("@sentry/utils"),
          o = (function () {
            function e() {}
            return (
              (e.prototype.sendEvent = function (e) {
                return a.SyncPromise.resolve({
                  reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                  status: r.Status.Skipped
                });
              }),
              (e.prototype.close = function (e) {
                return a.SyncPromise.resolve(!0);
              }),
              e
            );
          })();
        n.NoopTransport = o;
      },
      { "@sentry/types": 54, "@sentry/utils": 62 }
    ],
    50: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/utils"),
          o = e("./scope");
        n.API_VERSION = 3;
        var i = (function () {
          function e(e, t, r) {
            void 0 === t && (t = new o.Scope()),
              void 0 === r && (r = n.API_VERSION),
              (this._version = r),
              (this._stack = []),
              this._stack.push({ client: e, scope: t });
          }
          return (
            (e.prototype._invokeClient = function (e) {
              for (var t, n = [], a = 1; a < arguments.length; a++) n[a - 1] = arguments[a];
              var o = this.getStackTop();
              o && o.client && o.client[e] && (t = o.client)[e].apply(t, r.__spread(n, [o.scope]));
            }),
            (e.prototype.isOlderThan = function (e) {
              return this._version < e;
            }),
            (e.prototype.bindClient = function (e) {
              this.getStackTop().client = e;
            }),
            (e.prototype.pushScope = function () {
              var e = this.getStack(),
                t = e.length > 0 ? e[e.length - 1].scope : void 0,
                n = o.Scope.clone(t);
              return this.getStack().push({ client: this.getClient(), scope: n }), n;
            }),
            (e.prototype.popScope = function () {
              return void 0 !== this.getStack().pop();
            }),
            (e.prototype.withScope = function (e) {
              var t = this.pushScope();
              try {
                e(t);
              } finally {
                this.popScope();
              }
            }),
            (e.prototype.getClient = function () {
              return this.getStackTop().client;
            }),
            (e.prototype.getScope = function () {
              return this.getStackTop().scope;
            }),
            (e.prototype.getStack = function () {
              return this._stack;
            }),
            (e.prototype.getStackTop = function () {
              return this._stack[this._stack.length - 1];
            }),
            (e.prototype.captureException = function (e, t) {
              var n = (this._lastEventId = a.uuid4()),
                o = t;
              if (!t) {
                var i = void 0;
                try {
                  throw new Error("Sentry syntheticException");
                } catch (e) {
                  i = e;
                }
                o = { originalException: e, syntheticException: i };
              }
              return this._invokeClient("captureException", e, r.__assign({}, o, { event_id: n })), n;
            }),
            (e.prototype.captureMessage = function (e, t, n) {
              var o = (this._lastEventId = a.uuid4()),
                i = n;
              if (!n) {
                var s = void 0;
                try {
                  throw new Error(e);
                } catch (e) {
                  s = e;
                }
                i = { originalException: e, syntheticException: s };
              }
              return this._invokeClient("captureMessage", e, t, r.__assign({}, i, { event_id: o })), o;
            }),
            (e.prototype.captureEvent = function (e, t) {
              var n = (this._lastEventId = a.uuid4());
              return this._invokeClient("captureEvent", e, r.__assign({}, t, { event_id: n })), n;
            }),
            (e.prototype.lastEventId = function () {
              return this._lastEventId;
            }),
            (e.prototype.addBreadcrumb = function (e, t) {
              var n = this.getStackTop();
              if (n.scope && n.client) {
                var o = (n.client.getOptions && n.client.getOptions()) || {},
                  i = o.beforeBreadcrumb,
                  s = void 0 === i ? null : i,
                  $ = o.maxBreadcrumbs,
                  u = void 0 === $ ? 30 : $;
                if (!(u <= 0)) {
                  var c = a.timestampWithMs(),
                    l = r.__assign({ timestamp: c }, e),
                    d = s
                      ? a.consoleSandbox(function () {
                          return s(l, t);
                        })
                      : l;
                  null !== d && n.scope.addBreadcrumb(d, Math.min(u, 100));
                }
              }
            }),
            (e.prototype.setUser = function (e) {
              var t = this.getStackTop();
              t.scope && t.scope.setUser(e);
            }),
            (e.prototype.setTags = function (e) {
              var t = this.getStackTop();
              t.scope && t.scope.setTags(e);
            }),
            (e.prototype.setExtras = function (e) {
              var t = this.getStackTop();
              t.scope && t.scope.setExtras(e);
            }),
            (e.prototype.setTag = function (e, t) {
              var n = this.getStackTop();
              n.scope && n.scope.setTag(e, t);
            }),
            (e.prototype.setExtra = function (e, t) {
              var n = this.getStackTop();
              n.scope && n.scope.setExtra(e, t);
            }),
            (e.prototype.setContext = function (e, t) {
              var n = this.getStackTop();
              n.scope && n.scope.setContext(e, t);
            }),
            (e.prototype.configureScope = function (e) {
              var t = this.getStackTop();
              t.scope && t.client && e(t.scope);
            }),
            (e.prototype.run = function (e) {
              var t = $(this);
              try {
                e(this);
              } finally {
                $(t);
              }
            }),
            (e.prototype.getIntegration = function (e) {
              var t = this.getClient();
              if (!t) return null;
              try {
                return t.getIntegration(e);
              } catch (t) {
                return a.logger.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null;
              }
            }),
            (e.prototype.startSpan = function (e, t) {
              return void 0 === t && (t = !1), this._callExtensionMethod("startSpan", e, t);
            }),
            (e.prototype.traceHeaders = function () {
              return this._callExtensionMethod("traceHeaders");
            }),
            (e.prototype._callExtensionMethod = function (e) {
              for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
              var r = s(),
                o = r.__SENTRY__;
              if (o && o.extensions && "function" == typeof o.extensions[e]) return o.extensions[e].apply(this, t);
              a.logger.warn("Extension method " + e + " couldn't be found, doing nothing.");
            }),
            e
          );
        })();
        function s() {
          var e = a.getGlobalObject();
          return (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e;
        }
        function $(e) {
          var t = s(),
            n = c(t);
          return l(t, e), n;
        }
        function u(e) {
          return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
        }
        function c(e) {
          return (
            (e && e.__SENTRY__ && e.__SENTRY__.hub) || ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new i())), e.__SENTRY__.hub
          );
        }
        function l(e, t) {
          return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0);
        }
        (n.Hub = i),
          (n.getMainCarrier = s),
          (n.makeMain = $),
          (n.getCurrentHub = function () {
            var e = s();
            return (
              (u(e) && !c(e).isOlderThan(n.API_VERSION)) || l(e, new i()),
              a.isNodeEnv()
                ? (function (e) {
                    try {
                      var r = a.dynamicRequire(t, "domain").active;
                      if (!r) return c(e);
                      if (!u(r) || c(r).isOlderThan(n.API_VERSION)) {
                        var s = c(e).getStackTop();
                        l(r, new i(s.client, o.Scope.clone(s.scope)));
                      }
                      return c(r);
                    } catch (t) {
                      return c(e);
                    }
                  })(e)
                : c(e)
            );
          }),
          (n.getHubFromCarrier = c),
          (n.setHubOnCarrier = l);
      },
      { "./scope": 52, "@sentry/utils": 62, tslib: 154 }
    ],
    51: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./scope");
        (n.addGlobalEventProcessor = r.addGlobalEventProcessor), (n.Scope = r.Scope);
        var a = e("./hub");
        (n.getCurrentHub = a.getCurrentHub),
          (n.getHubFromCarrier = a.getHubFromCarrier),
          (n.getMainCarrier = a.getMainCarrier),
          (n.Hub = a.Hub),
          (n.makeMain = a.makeMain),
          (n.setHubOnCarrier = a.setHubOnCarrier);
      },
      { "./hub": 50, "./scope": 52 }
    ],
    52: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/utils"),
          o = (function () {
            function e() {
              (this._notifyingListeners = !1),
                (this._scopeListeners = []),
                (this._eventProcessors = []),
                (this._breadcrumbs = []),
                (this._user = {}),
                (this._tags = {}),
                (this._extra = {}),
                (this._context = {});
            }
            return (
              (e.prototype.addScopeListener = function (e) {
                this._scopeListeners.push(e);
              }),
              (e.prototype.addEventProcessor = function (e) {
                return this._eventProcessors.push(e), this;
              }),
              (e.prototype._notifyScopeListeners = function () {
                var e = this;
                this._notifyingListeners ||
                  ((this._notifyingListeners = !0),
                  setTimeout(function () {
                    e._scopeListeners.forEach(function (t) {
                      t(e);
                    }),
                      (e._notifyingListeners = !1);
                  }));
              }),
              (e.prototype._notifyEventProcessors = function (e, t, n, o) {
                var i = this;
                return (
                  void 0 === o && (o = 0),
                  new a.SyncPromise(function (s, $) {
                    var u = e[o];
                    if (null === t || "function" != typeof u) s(t);
                    else {
                      var c = u(r.__assign({}, t), n);
                      a.isThenable(c)
                        ? c
                            .then(function (t) {
                              return i._notifyEventProcessors(e, t, n, o + 1).then(s);
                            })
                            .then(null, $)
                        : i
                            ._notifyEventProcessors(e, c, n, o + 1)
                            .then(s)
                            .then(null, $);
                    }
                  })
                );
              }),
              (e.prototype.setUser = function (e) {
                return (this._user = a.normalize(e)), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setTags = function (e) {
                return (this._tags = r.__assign({}, this._tags, a.normalize(e))), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setTag = function (e, t) {
                var n;
                return (this._tags = r.__assign({}, this._tags, (((n = {})[e] = a.normalize(t)), n))), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setExtras = function (e) {
                return (this._extra = r.__assign({}, this._extra, a.normalize(e))), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setExtra = function (e, t) {
                var n;
                return (this._extra = r.__assign({}, this._extra, (((n = {})[e] = a.normalize(t)), n))), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setFingerprint = function (e) {
                return (this._fingerprint = a.normalize(e)), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setLevel = function (e) {
                return (this._level = a.normalize(e)), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setTransaction = function (e) {
                return (this._transaction = e), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setContext = function (e, t) {
                return (this._context[e] = t ? a.normalize(t) : void 0), this._notifyScopeListeners(), this;
              }),
              (e.prototype.setSpan = function (e) {
                return (this._span = e), this._notifyScopeListeners(), this;
              }),
              (e.prototype.getSpan = function () {
                return this._span;
              }),
              (e.clone = function (t) {
                var n = new e();
                return (
                  t &&
                    ((n._breadcrumbs = r.__spread(t._breadcrumbs)),
                    (n._tags = r.__assign({}, t._tags)),
                    (n._extra = r.__assign({}, t._extra)),
                    (n._context = r.__assign({}, t._context)),
                    (n._user = t._user),
                    (n._level = t._level),
                    (n._span = t._span),
                    (n._transaction = t._transaction),
                    (n._fingerprint = t._fingerprint),
                    (n._eventProcessors = r.__spread(t._eventProcessors))),
                  n
                );
              }),
              (e.prototype.clear = function () {
                return (
                  (this._breadcrumbs = []),
                  (this._tags = {}),
                  (this._extra = {}),
                  (this._user = {}),
                  (this._context = {}),
                  (this._level = void 0),
                  (this._transaction = void 0),
                  (this._fingerprint = void 0),
                  (this._span = void 0),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (e.prototype.addBreadcrumb = function (e, t) {
                var n = a.timestampWithMs(),
                  o = r.__assign({ timestamp: n }, e);
                return (
                  (this._breadcrumbs =
                    void 0 !== t && t >= 0
                      ? r.__spread(this._breadcrumbs, [a.normalize(o)]).slice(-t)
                      : r.__spread(this._breadcrumbs, [a.normalize(o)])),
                  this._notifyScopeListeners(),
                  this
                );
              }),
              (e.prototype.clearBreadcrumbs = function () {
                return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
              }),
              (e.prototype._applyFingerprint = function (e) {
                (e.fingerprint = e.fingerprint ? (Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint]) : []),
                  this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
                  e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
              }),
              (e.prototype.applyToEvent = function (e, t) {
                return (
                  this._extra && Object.keys(this._extra).length && (e.extra = r.__assign({}, this._extra, e.extra)),
                  this._tags && Object.keys(this._tags).length && (e.tags = r.__assign({}, this._tags, e.tags)),
                  this._user && Object.keys(this._user).length && (e.user = r.__assign({}, this._user, e.user)),
                  this._context && Object.keys(this._context).length && (e.contexts = r.__assign({}, this._context, e.contexts)),
                  this._level && (e.level = this._level),
                  this._transaction && (e.transaction = this._transaction),
                  this._span && ((e.contexts = e.contexts || {}), (e.contexts.trace = this._span.getTraceContext())),
                  this._applyFingerprint(e),
                  (e.breadcrumbs = r.__spread(e.breadcrumbs || [], this._breadcrumbs)),
                  (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
                  this._notifyEventProcessors(r.__spread(i(), this._eventProcessors), e, t)
                );
              }),
              e
            );
          })();
        function i() {
          var e = a.getGlobalObject();
          return (
            (e.__SENTRY__ = e.__SENTRY__ || {}),
            (e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []),
            e.__SENTRY__.globalEventProcessors
          );
        }
        (n.Scope = o),
          (n.addGlobalEventProcessor = function (e) {
            i().push(e);
          });
      },
      { "@sentry/utils": 62, tslib: 154 }
    ],
    53: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("@sentry/hub");
        function o(e) {
          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          var o = a.getCurrentHub();
          if (o && o[e]) return o[e].apply(o, r.__spread(t));
          throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.");
        }
        (n.captureException = function (e) {
          var t;
          try {
            throw new Error("Sentry syntheticException");
          } catch (e) {
            t = e;
          }
          return o("captureException", e, { originalException: e, syntheticException: t });
        }),
          (n.captureMessage = function (e, t) {
            var n;
            try {
              throw new Error(e);
            } catch (e) {
              n = e;
            }
            return o("captureMessage", e, t, { originalException: e, syntheticException: n });
          }),
          (n.captureEvent = function (e) {
            return o("captureEvent", e);
          }),
          (n.configureScope = function (e) {
            o("configureScope", e);
          }),
          (n.addBreadcrumb = function (e) {
            o("addBreadcrumb", e);
          }),
          (n.setContext = function (e, t) {
            o("setContext", e, t);
          }),
          (n.setExtras = function (e) {
            o("setExtras", e);
          }),
          (n.setTags = function (e) {
            o("setTags", e);
          }),
          (n.setExtra = function (e, t) {
            o("setExtra", e, t);
          }),
          (n.setTag = function (e, t) {
            o("setTag", e, t);
          }),
          (n.setUser = function (e) {
            o("setUser", e);
          }),
          (n.withScope = function (e) {
            o("withScope", e);
          }),
          (n._callOnClient = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            o.apply(void 0, r.__spread(["_invokeClient", e], t));
          });
      },
      { "@sentry/hub": 51, tslib: 154 }
    ],
    54: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./loglevel");
        n.LogLevel = r.LogLevel;
        var a = e("./severity");
        n.Severity = a.Severity;
        var o = e("./span");
        n.SpanStatus = o.SpanStatus;
        var i = e("./status");
        n.Status = i.Status;
      },
      { "./loglevel": 55, "./severity": 56, "./span": 57, "./status": 58 }
    ],
    55: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Error = 1)] = "Error"), (e[(e.Debug = 2)] = "Debug"), (e[(e.Verbose = 3)] = "Verbose");
          })(n.LogLevel || (n.LogLevel = {}));
      },
      {}
    ],
    56: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (function (e) {
            (e.Fatal = "fatal"),
              (e.Error = "error"),
              (e.Warning = "warning"),
              (e.Log = "log"),
              (e.Info = "info"),
              (e.Debug = "debug"),
              (e.Critical = "critical");
          })(n.Severity || (n.Severity = {})),
          (function (e) {
            e.fromString = function (t) {
              switch (t) {
                case "debug":
                  return e.Debug;
                case "info":
                  return e.Info;
                case "warn":
                case "warning":
                  return e.Warning;
                case "error":
                  return e.Error;
                case "fatal":
                  return e.Fatal;
                case "critical":
                  return e.Critical;
                default:
                  return e.Log;
              }
            };
          })(n.Severity || (n.Severity = {}));
      },
      {}
    ],
    57: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (function (e) {
            (e.Ok = "ok"),
              (e.DealineExceeded = "deadline_exceeded"),
              (e.Unauthenticated = "unauthenticated"),
              (e.PermissionDenied = "permission_denied"),
              (e.NotFound = "not_found"),
              (e.ResourceExhausted = "resource_exhausted"),
              (e.InvalidArgument = "invalid_argument"),
              (e.Unimplemented = "unimplemented"),
              (e.Unavailable = "unavailable"),
              (e.InternalError = "internal_error"),
              (e.UnknownError = "unknown_error"),
              (e.Cancelled = "cancelled"),
              (e.AlreadyExists = "already_exists"),
              (e.FailedPrecondition = "failed_precondition"),
              (e.Aborted = "aborted"),
              (e.OutOfRange = "out_of_range"),
              (e.DataLoss = "data_loss");
          })(n.SpanStatus || (n.SpanStatus = {})),
          (function (e) {
            e.fromHttpCode = function (t) {
              if (t < 400) return e.Ok;
              if (t >= 400 && t < 500)
                switch (t) {
                  case 401:
                    return e.Unauthenticated;
                  case 403:
                    return e.PermissionDenied;
                  case 404:
                    return e.NotFound;
                  case 409:
                    return e.AlreadyExists;
                  case 413:
                    return e.FailedPrecondition;
                  case 429:
                    return e.ResourceExhausted;
                  default:
                    return e.InvalidArgument;
                }
              if (t >= 500 && t < 600)
                switch (t) {
                  case 501:
                    return e.Unimplemented;
                  case 503:
                    return e.Unavailable;
                  case 504:
                    return e.DealineExceeded;
                  default:
                    return e.InternalError;
                }
              return e.UnknownError;
            };
          })(n.SpanStatus || (n.SpanStatus = {}));
      },
      {}
    ],
    58: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (function (e) {
            (e.Unknown = "unknown"),
              (e.Skipped = "skipped"),
              (e.Success = "success"),
              (e.RateLimit = "rate_limit"),
              (e.Invalid = "invalid"),
              (e.Failed = "failed");
          })(n.Status || (n.Status = {})),
          (function (e) {
            e.fromHttpCode = function (t) {
              return t >= 200 && t < 300
                ? e.Success
                : 429 === t
                ? e.RateLimit
                : t >= 400 && t < 500
                ? e.Invalid
                : t >= 500
                ? e.Failed
                : e.Unknown;
            };
          })(n.Status || (n.Status = {}));
      },
      {}
    ],
    59: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.forget = function (e) {
            e.then(null, function (e) {
              console.error(e);
            });
          });
      },
      {}
    ],
    60: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("./error"),
          o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
          i = "Invalid Dsn",
          s = (function () {
            function e(e) {
              "string" == typeof e ? this._fromString(e) : this._fromComponents(e), this._validate();
            }
            return (
              (e.prototype.toString = function (e) {
                void 0 === e && (e = !1);
                var t = this,
                  n = t.host,
                  r = t.path,
                  a = t.pass,
                  o = t.port,
                  i = t.projectId;
                return t.protocol + "://" + t.user + (e && a ? ":" + a : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + i;
              }),
              (e.prototype._fromString = function (e) {
                var t = o.exec(e);
                if (!t) throw new a.SentryError(i);
                var n = r.__read(t.slice(1), 6),
                  s = n[0],
                  $ = n[1],
                  u = n[2],
                  c = void 0 === u ? "" : u,
                  l = n[3],
                  d = n[4],
                  h = void 0 === d ? "" : d,
                  p = "",
                  f = n[5],
                  m = f.split("/");
                m.length > 1 && ((p = m.slice(0, -1).join("/")), (f = m.pop())),
                  this._fromComponents({ host: l, pass: c, path: p, projectId: f, port: h, protocol: s, user: $ });
              }),
              (e.prototype._fromComponents = function (e) {
                (this.protocol = e.protocol),
                  (this.user = e.user),
                  (this.pass = e.pass || ""),
                  (this.host = e.host),
                  (this.port = e.port || ""),
                  (this.path = e.path || ""),
                  (this.projectId = e.projectId);
              }),
              (e.prototype._validate = function () {
                var e = this;
                if (
                  (["protocol", "user", "host", "projectId"].forEach(function (t) {
                    if (!e[t]) throw new a.SentryError(i);
                  }),
                  "http" !== this.protocol && "https" !== this.protocol)
                )
                  throw new a.SentryError(i);
                if (this.port && isNaN(parseInt(this.port, 10))) throw new a.SentryError(i);
              }),
              e
            );
          })();
        n.Dsn = s;
      },
      { "./error": 61, tslib: 154 }
    ],
    61: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib"),
          a = e("./polyfill"),
          o = (function (e) {
            function t(t) {
              var n = this.constructor,
                r = e.call(this, t) || this;
              return (r.message = t), (r.name = n.prototype.constructor.name), a.setPrototypeOf(r, n.prototype), r;
            }
            return r.__extends(t, e), t;
          })(Error);
        n.SentryError = o;
      },
      { "./polyfill": 70, tslib: 154 }
    ],
    62: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("tslib");
        r.__exportStar(e("./async"), n),
          r.__exportStar(e("./error"), n),
          r.__exportStar(e("./is"), n),
          r.__exportStar(e("./logger"), n),
          r.__exportStar(e("./memo"), n),
          r.__exportStar(e("./misc"), n),
          r.__exportStar(e("./object"), n),
          r.__exportStar(e("./path"), n),
          r.__exportStar(e("./promisebuffer"), n),
          r.__exportStar(e("./string"), n),
          r.__exportStar(e("./supports"), n),
          r.__exportStar(e("./syncpromise"), n),
          r.__exportStar(e("./instrument"), n),
          r.__exportStar(e("./dsn"), n);
      },
      {
        "./async": 59,
        "./dsn": 60,
        "./error": 61,
        "./instrument": 63,
        "./is": 64,
        "./logger": 65,
        "./memo": 66,
        "./misc": 67,
        "./object": 68,
        "./path": 69,
        "./promisebuffer": 71,
        "./string": 72,
        "./supports": 73,
        "./syncpromise": 74,
        tslib: 154
      }
    ],
    63: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r,
          a = e("tslib"),
          o = e("./is"),
          i = e("./logger"),
          s = e("./misc"),
          $ = e("./object"),
          u = e("./supports"),
          c = s.getGlobalObject(),
          l = {},
          d = {};
        function h(e) {
          if (!d[e])
            switch (((d[e] = !0), e)) {
              case "console":
                !(function () {
                  if (!("console" in c)) return;
                  ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
                    e in c.console &&
                      $.fill(c.console, e, function (t) {
                        return function () {
                          for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                          p("console", { args: n, level: e }), t && Function.prototype.apply.call(t, c.console, n);
                        };
                      });
                  });
                })();
                break;
              case "dom":
                !(function () {
                  if (!("document" in c)) return;
                  c.document.addEventListener("click", v("click", p.bind(null, "dom")), !1),
                    c.document.addEventListener("keypress", k(p.bind(null, "dom")), !1),
                    ["EventTarget", "Node"].forEach(function (e) {
                      var t = c[e] && c[e].prototype;
                      t &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty("addEventListener") &&
                        ($.fill(t, "addEventListener", function (e) {
                          return function (t, n, r) {
                            return (
                              n && n.handleEvent
                                ? ("click" === t &&
                                    $.fill(n, "handleEvent", function (e) {
                                      return function (t) {
                                        return v("click", p.bind(null, "dom"))(t), e.call(this, t);
                                      };
                                    }),
                                  "keypress" === t &&
                                    $.fill(n, "handleEvent", function (e) {
                                      return function (t) {
                                        return k(p.bind(null, "dom"))(t), e.call(this, t);
                                      };
                                    }))
                                : ("click" === t && v("click", p.bind(null, "dom"), !0)(this),
                                  "keypress" === t && k(p.bind(null, "dom"))(this)),
                              e.call(this, t, n, r)
                            );
                          };
                        }),
                        $.fill(t, "removeEventListener", function (e) {
                          return function (t, n, r) {
                            var a = n;
                            try {
                              a = a && (a.__sentry_wrapped__ || a);
                            } catch (e) {}
                            return e.call(this, t, a, r);
                          };
                        }));
                    });
                })();
                break;
              case "xhr":
                !(function () {
                  if (!("XMLHttpRequest" in c)) return;
                  var e = XMLHttpRequest.prototype;
                  $.fill(e, "open", function (e) {
                    return function () {
                      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                      var r = t[1];
                      return (
                        (this.__sentry_xhr__ = { method: o.isString(t[0]) ? t[0].toUpperCase() : t[0], url: t[1] }),
                        o.isString(r) &&
                          "POST" === this.__sentry_xhr__.method &&
                          r.match(/sentry_key/) &&
                          (this.__sentry_own_request__ = !0),
                        e.apply(this, t)
                      );
                    };
                  }),
                    $.fill(e, "send", function (e) {
                      return function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = this,
                          o = { args: t, startTimestamp: Date.now(), xhr: r };
                        function i() {
                          if (4 === r.readyState) {
                            try {
                              r.__sentry_xhr__ && (r.__sentry_xhr__.status_code = r.status);
                            } catch (e) {}
                            p("xhr", a.__assign({}, o, { endTimestamp: Date.now() }));
                          }
                        }
                        return (
                          p("xhr", a.__assign({}, o)),
                          "onreadystatechange" in r && "function" == typeof r.onreadystatechange
                            ? $.fill(r, "onreadystatechange", function (e) {
                                return function () {
                                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                  return i(), e.apply(r, t);
                                };
                              })
                            : (r.onreadystatechange = i),
                          e.apply(this, t)
                        );
                      };
                    });
                })();
                break;
              case "fetch":
                !(function () {
                  if (!u.supportsNativeFetch()) return;
                  $.fill(c, "fetch", function (e) {
                    return function () {
                      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                      var r = { args: t, fetchData: { method: f(t), url: m(t) }, startTimestamp: Date.now() };
                      return (
                        p("fetch", a.__assign({}, r)),
                        e.apply(c, t).then(
                          function (e) {
                            return p("fetch", a.__assign({}, r, { endTimestamp: Date.now(), response: e })), e;
                          },
                          function (e) {
                            throw (p("fetch", a.__assign({}, r, { endTimestamp: Date.now(), error: e })), e);
                          }
                        )
                      );
                    };
                  });
                })();
                break;
              case "history":
                !(function () {
                  if (!u.supportsHistory()) return;
                  var e = c.onpopstate;
                  function t(e) {
                    return function () {
                      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                      var a = t.length > 2 ? t[2] : void 0;
                      if (a) {
                        var o = r,
                          i = String(a);
                        (r = i), p("history", { from: o, to: i });
                      }
                      return e.apply(this, t);
                    };
                  }
                  (c.onpopstate = function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var a = c.location.href,
                      o = r;
                    if (((r = a), p("history", { from: o, to: a }), e)) return e.apply(this, t);
                  }),
                    $.fill(c.history, "pushState", t),
                    $.fill(c.history, "replaceState", t);
                })();
                break;
              default:
                i.logger.warn("unknown instrumentation type:", e);
            }
        }
        function p(e, t) {
          var n, r;
          if (e && l[e])
            try {
              for (var o = a.__values(l[e] || []), $ = o.next(); !$.done; $ = o.next()) {
                var u = $.value;
                try {
                  u(t);
                } catch (t) {
                  i.logger.error(
                    "Error while triggering instrumentation handler.\nType: " + e + "\nName: " + s.getFunctionName(u) + "\nError: " + t
                  );
                }
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                $ && !$.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
        }
        function f(e) {
          return (
            void 0 === e && (e = []),
            "Request" in c && o.isInstanceOf(e[0], Request) && e[0].method
              ? String(e[0].method).toUpperCase()
              : e[1] && e[1].method
              ? String(e[1].method).toUpperCase()
              : "GET"
          );
        }
        function m(e) {
          return (
            void 0 === e && (e = []),
            "string" == typeof e[0] ? e[0] : "Request" in c && o.isInstanceOf(e[0], Request) ? e[0].url : String(e[0])
          );
        }
        n.addInstrumentationHandler = function (e) {
          e &&
            "string" == typeof e.type &&
            "function" == typeof e.callback &&
            ((l[e.type] = l[e.type] || []), l[e.type].push(e.callback), h(e.type));
        };
        var g,
          b,
          y = 0;
        function v(e, t, n) {
          return (
            void 0 === n && (n = !1),
            function (r) {
              (g = void 0),
                r &&
                  b !== r &&
                  ((b = r),
                  y && clearTimeout(y),
                  n
                    ? (y = setTimeout(function () {
                        t({ event: r, name: e });
                      }))
                    : t({ event: r, name: e }));
            }
          );
        }
        function k(e) {
          return function (t) {
            var n;
            try {
              n = t.target;
            } catch (e) {
              return;
            }
            var r = n && n.tagName;
            r &&
              ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) &&
              (g || v("input", e)(t),
              clearTimeout(g),
              (g = setTimeout(function () {
                g = void 0;
              }, 1e3)));
          };
        }
      },
      { "./is": 64, "./logger": 65, "./misc": 67, "./object": 68, "./supports": 73, tslib: 154 }
    ],
    64: [
      function (e, t, n) {
        function r(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }
        function a(e, t) {
          try {
            return e instanceof t;
          } catch (e) {
            return !1;
          }
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.isError = function (e) {
            switch (Object.prototype.toString.call(e)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;
              default:
                return a(e, Error);
            }
          }),
          (n.isErrorEvent = function (e) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(e);
          }),
          (n.isDOMError = function (e) {
            return "[object DOMError]" === Object.prototype.toString.call(e);
          }),
          (n.isDOMException = function (e) {
            return "[object DOMException]" === Object.prototype.toString.call(e);
          }),
          (n.isString = function (e) {
            return "[object String]" === Object.prototype.toString.call(e);
          }),
          (n.isPrimitive = function (e) {
            return null === e || ("object" != typeof e && "function" != typeof e);
          }),
          (n.isPlainObject = r),
          (n.isEvent = function (e) {
            return "undefined" != typeof Event && a(e, Event);
          }),
          (n.isElement = function (e) {
            return "undefined" != typeof Element && a(e, Element);
          }),
          (n.isRegExp = function (e) {
            return "[object RegExp]" === Object.prototype.toString.call(e);
          }),
          (n.isThenable = function (e) {
            return Boolean(e && e.then && "function" == typeof e.then);
          }),
          (n.isSyntheticEvent = function (e) {
            return r(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
          }),
          (n.isInstanceOf = a);
      },
      {}
    ],
    65: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./misc"),
          a = r.getGlobalObject(),
          o = "Sentry Logger ",
          i = (function () {
            function e() {
              this._enabled = !1;
            }
            return (
              (e.prototype.disable = function () {
                this._enabled = !1;
              }),
              (e.prototype.enable = function () {
                this._enabled = !0;
              }),
              (e.prototype.log = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled &&
                  r.consoleSandbox(function () {
                    a.console.log(o + "[Log]: " + e.join(" "));
                  });
              }),
              (e.prototype.warn = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled &&
                  r.consoleSandbox(function () {
                    a.console.warn(o + "[Warn]: " + e.join(" "));
                  });
              }),
              (e.prototype.error = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._enabled &&
                  r.consoleSandbox(function () {
                    a.console.error(o + "[Error]: " + e.join(" "));
                  });
              }),
              e
            );
          })();
        a.__SENTRY__ = a.__SENTRY__ || {};
        var s = a.__SENTRY__.logger || (a.__SENTRY__.logger = new i());
        n.logger = s;
      },
      { "./misc": 67 }
    ],
    66: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = (function () {
          function e() {
            (this._hasWeakSet = "function" == typeof WeakSet), (this._inner = this._hasWeakSet ? new WeakSet() : []);
          }
          return (
            (e.prototype.memoize = function (e) {
              if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
              for (var t = 0; t < this._inner.length; t++) {
                if (this._inner[t] === e) return !0;
              }
              return this._inner.push(e), !1;
            }),
            (e.prototype.unmemoize = function (e) {
              if (this._hasWeakSet) this._inner.delete(e);
              else
                for (var t = 0; t < this._inner.length; t++)
                  if (this._inner[t] === e) {
                    this._inner.splice(t, 1);
                    break;
                  }
            }),
            e
          );
        })();
        n.Memo = r;
      },
      {}
    ],
    67: [
      function (e, t, n) {
        (function (t, r) {
          (function () {
            Object.defineProperty(n, "__esModule", { value: !0 });
            var a = e("./is");
            function o() {
              return "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0);
            }
            (n.dynamicRequire = function (e, t) {
              return e.require(t);
            }),
              (n.isNodeEnv = o);
            var i = {};
            function s() {
              return o() ? r : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i;
            }
            function $(e) {
              var t,
                n,
                r,
                o,
                i,
                s = e,
                $ = [];
              if (!s || !s.tagName) return "";
              if (($.push(s.tagName.toLowerCase()), s.id && $.push("#" + s.id), (t = s.className) && a.isString(t)))
                for (n = t.split(/\s+/), i = 0; i < n.length; i++) $.push("." + n[i]);
              var u = ["type", "name", "title", "alt"];
              for (i = 0; i < u.length; i++) (r = u[i]), (o = s.getAttribute(r)) && $.push("[" + r + '="' + o + '"]');
              return $.join("");
            }
            (n.getGlobalObject = s),
              (n.uuid4 = function () {
                var e = s(),
                  t = e.crypto || e.msCrypto;
                if (void 0 !== t && t.getRandomValues) {
                  var n = new Uint16Array(8);
                  t.getRandomValues(n), (n[3] = (4095 & n[3]) | 16384), (n[4] = (16383 & n[4]) | 32768);
                  var r = function (e) {
                    for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
                    return t;
                  };
                  return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7]);
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" === e ? t : (3 & t) | 8).toString(16);
                });
              }),
              (n.parseUrl = function (e) {
                if (!e) return {};
                var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                var n = t[6] || "",
                  r = t[8] || "";
                return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + r };
              }),
              (n.getEventDescription = function (e) {
                if (e.message) return e.message;
                if (e.exception && e.exception.values && e.exception.values[0]) {
                  var t = e.exception.values[0];
                  return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>";
                }
                return e.event_id || "<unknown>";
              }),
              (n.consoleSandbox = function (e) {
                var t = s();
                if (!("console" in t)) return e();
                var n = t.console,
                  r = {};
                ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
                  e in t.console && n[e].__sentry_original__ && ((r[e] = n[e]), (n[e] = n[e].__sentry_original__));
                });
                var a = e();
                return (
                  Object.keys(r).forEach(function (e) {
                    n[e] = r[e];
                  }),
                  a
                );
              }),
              (n.addExceptionTypeValue = function (e, t, n) {
                (e.exception = e.exception || {}),
                  (e.exception.values = e.exception.values || []),
                  (e.exception.values[0] = e.exception.values[0] || {}),
                  (e.exception.values[0].value = e.exception.values[0].value || t || ""),
                  (e.exception.values[0].type = e.exception.values[0].type || n || "Error");
              }),
              (n.addExceptionMechanism = function (e, t) {
                void 0 === t && (t = {});
                try {
                  (e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}),
                    Object.keys(t).forEach(function (n) {
                      e.exception.values[0].mechanism[n] = t[n];
                    });
                } catch (e) {}
              }),
              (n.getLocationHref = function () {
                try {
                  return document.location.href;
                } catch (e) {
                  return "";
                }
              }),
              (n.htmlTreeAsString = function (e) {
                try {
                  for (
                    var t = e, n = [], r = 0, a = 0, o = " > ".length, i = void 0;
                    t && r++ < 5 && !("html" === (i = $(t)) || (r > 1 && a + n.length * o + i.length >= 80));

                  )
                    n.push(i), (a += i.length), (t = t.parentNode);
                  return n.reverse().join(" > ");
                } catch (e) {
                  return "<unknown>";
                }
              }),
              (n.timestampWithMs = function () {
                return new Date().getTime() / 1e3;
              });
            var u =
              /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
            n.parseSemver = function (e) {
              var t = e.match(u) || [],
                n = parseInt(t[1], 10),
                r = parseInt(t[2], 10),
                a = parseInt(t[3], 10);
              return {
                buildmetadata: t[5],
                major: isNaN(n) ? void 0 : n,
                minor: isNaN(r) ? void 0 : r,
                patch: isNaN(a) ? void 0 : a,
                prerelease: t[4]
              };
            };
            n.parseRetryAfterHeader = function (e, t) {
              if (!t) return 6e4;
              var n = parseInt("" + t, 10);
              if (!isNaN(n)) return 1e3 * n;
              var r = Date.parse("" + t);
              return isNaN(r) ? 6e4 : r - e;
            };
            var c = "<anonymous>";
            n.getFunctionName = function (e) {
              try {
                return (e && "function" == typeof e && e.name) || c;
              } catch (e) {
                return c;
              }
            };
          }).call(this);
        }).call(
          this,
          e("_process"),
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      { "./is": 64, _process: 138 }
    ],
    68: [
      function (e, t, n) {
        (function (t) {
          (function () {
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r = e("./is"),
              a = e("./memo"),
              o = e("./misc"),
              i = e("./string");
            function s(e) {
              if (r.isError(e)) {
                var t = e,
                  n = { message: t.message, name: t.name, stack: t.stack };
                for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[a] = t[a]);
                return n;
              }
              if (r.isEvent(e)) {
                var i = e,
                  s = {};
                s.type = i.type;
                try {
                  s.target = r.isElement(i.target) ? o.htmlTreeAsString(i.target) : Object.prototype.toString.call(i.target);
                } catch (e) {
                  s.target = "<unknown>";
                }
                try {
                  s.currentTarget = r.isElement(i.currentTarget)
                    ? o.htmlTreeAsString(i.currentTarget)
                    : Object.prototype.toString.call(i.currentTarget);
                } catch (e) {
                  s.currentTarget = "<unknown>";
                }
                for (var a in ("undefined" != typeof CustomEvent && r.isInstanceOf(e, CustomEvent) && (s.detail = i.detail), i))
                  Object.prototype.hasOwnProperty.call(i, a) && (s[a] = i);
                return s;
              }
              return e;
            }
            function $(e) {
              return (function (e) {
                return ~-encodeURI(e).split(/%..|./).length;
              })(JSON.stringify(e));
            }
            function u(e, n) {
              return "domain" === n && e && "object" == typeof e && e._events
                ? "[Domain]"
                : "domainEmitter" === n
                ? "[DomainEmitter]"
                : void 0 !== t && e === t
                ? "[Global]"
                : "undefined" != typeof window && e === window
                ? "[Window]"
                : "undefined" != typeof document && e === document
                ? "[Document]"
                : r.isSyntheticEvent(e)
                ? "[SyntheticEvent]"
                : "number" == typeof e && e != e
                ? "[NaN]"
                : void 0 === e
                ? "[undefined]"
                : "function" == typeof e
                ? "[Function: " + o.getFunctionName(e) + "]"
                : e;
            }
            function c(e, t, n, o) {
              if ((void 0 === n && (n = 1 / 0), void 0 === o && (o = new a.Memo()), 0 === n))
                return (function (e) {
                  var t = Object.prototype.toString.call(e);
                  if ("string" == typeof e) return e;
                  if ("[object Object]" === t) return "[Object]";
                  if ("[object Array]" === t) return "[Array]";
                  var n = u(e);
                  return r.isPrimitive(n) ? n : t;
                })(t);
              if (null != t && "function" == typeof t.toJSON) return t.toJSON();
              var i = u(t, e);
              if (r.isPrimitive(i)) return i;
              var $ = s(t),
                l = Array.isArray(t) ? [] : {};
              if (o.memoize(t)) return "[Circular ~]";
              for (var d in $) Object.prototype.hasOwnProperty.call($, d) && (l[d] = c(d, $[d], n - 1, o));
              return o.unmemoize(t), l;
            }
            function l(e, t) {
              try {
                return JSON.parse(
                  JSON.stringify(e, function (e, n) {
                    return c(e, n, t);
                  })
                );
              } catch (e) {
                return "**non-serializable**";
              }
            }
            (n.fill = function (e, t, n) {
              if (t in e) {
                var r = e[t],
                  a = n(r);
                if ("function" == typeof a)
                  try {
                    (a.prototype = a.prototype || {}), Object.defineProperties(a, { __sentry_original__: { enumerable: !1, value: r } });
                  } catch (e) {}
                e[t] = a;
              }
            }),
              (n.urlEncode = function (e) {
                return Object.keys(e)
                  .map(function (t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                  })
                  .join("&");
              }),
              (n.normalizeToSize = function e(t, n, r) {
                void 0 === n && (n = 3), void 0 === r && (r = 102400);
                var a = l(t, n);
                return $(a) > r ? e(t, n - 1, r) : a;
              }),
              (n.walk = c),
              (n.normalize = l),
              (n.extractExceptionKeysForMessage = function (e, t) {
                void 0 === t && (t = 40);
                var n = Object.keys(s(e));
                if ((n.sort(), !n.length)) return "[object has no keys]";
                if (n[0].length >= t) return i.truncate(n[0], t);
                for (var r = n.length; r > 0; r--) {
                  var a = n.slice(0, r).join(", ");
                  if (!(a.length > t)) return r === n.length ? a : i.truncate(a, t);
                }
                return "";
              });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      { "./is": 64, "./memo": 66, "./misc": 67, "./string": 72 }
    ],
    69: [
      function (e, t, n) {
        function r(e, t) {
          for (var n = 0, r = e.length - 1; r >= 0; r--) {
            var a = e[r];
            "." === a ? e.splice(r, 1) : ".." === a ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
          }
          if (t) for (; n--; n) e.unshift("..");
          return e;
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        function o(e) {
          var t = a.exec(e);
          return t ? t.slice(1) : [];
        }
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n = "", a = !1, o = e.length - 1; o >= -1 && !a; o--) {
            var i = o >= 0 ? e[o] : "/";
            i && ((n = i + "/" + n), (a = "/" === i.charAt(0)));
          }
          return (
            (a ? "/" : "") +
              (n = r(
                n.split("/").filter(function (e) {
                  return !!e;
                }),
                !a
              ).join("/")) || "."
          );
        }
        function s(e) {
          for (var t = 0; t < e.length && "" === e[t]; t++);
          for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
          return t > n ? [] : e.slice(t, n - t + 1);
        }
        function $(e) {
          var t = u(e),
            n = "/" === e.substr(-1),
            a = r(
              e.split("/").filter(function (e) {
                return !!e;
              }),
              !t
            ).join("/");
          return a || t || (a = "."), a && n && (a += "/"), (t ? "/" : "") + a;
        }
        function u(e) {
          return "/" === e.charAt(0);
        }
        (n.resolve = i),
          (n.relative = function (e, t) {
            (e = i(e).substr(1)), (t = i(t).substr(1));
            for (var n = s(e.split("/")), r = s(t.split("/")), a = Math.min(n.length, r.length), o = a, $ = 0; $ < a; $++)
              if (n[$] !== r[$]) {
                o = $;
                break;
              }
            var u = [];
            for ($ = o; $ < n.length; $++) u.push("..");
            return (u = u.concat(r.slice(o))).join("/");
          }),
          (n.normalizePath = $),
          (n.isAbsolute = u),
          (n.join = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return $(e.join("/"));
          }),
          (n.dirname = function (e) {
            var t = o(e),
              n = t[0],
              r = t[1];
            return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
          }),
          (n.basename = function (e, t) {
            var n = o(e)[2];
            return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
          });
      },
      {}
    ],
    70: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.setPrototypeOf =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array
              ? function (e, t) {
                  return (e.__proto__ = t), e;
                }
              : function (e, t) {
                  for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                  return e;
                }));
      },
      {}
    ],
    71: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./error"),
          a = e("./syncpromise"),
          o = (function () {
            function e(e) {
              (this._limit = e), (this._buffer = []);
            }
            return (
              (e.prototype.isReady = function () {
                return void 0 === this._limit || this.length() < this._limit;
              }),
              (e.prototype.add = function (e) {
                var t = this;
                return this.isReady()
                  ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e),
                    e
                      .then(function () {
                        return t.remove(e);
                      })
                      .then(null, function () {
                        return t.remove(e).then(null, function () {});
                      }),
                    e)
                  : a.SyncPromise.reject(new r.SentryError("Not adding Promise due to buffer limit reached."));
              }),
              (e.prototype.remove = function (e) {
                return this._buffer.splice(this._buffer.indexOf(e), 1)[0];
              }),
              (e.prototype.length = function () {
                return this._buffer.length;
              }),
              (e.prototype.drain = function (e) {
                var t = this;
                return new a.SyncPromise(function (n) {
                  var r = setTimeout(function () {
                    e && e > 0 && n(!1);
                  }, e);
                  a.SyncPromise.all(t._buffer)
                    .then(function () {
                      clearTimeout(r), n(!0);
                    })
                    .then(null, function () {
                      n(!0);
                    });
                });
              }),
              e
            );
          })();
        n.PromiseBuffer = o;
      },
      { "./error": 61, "./syncpromise": 74 }
    ],
    72: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./is");
        (n.truncate = function (e, t) {
          return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "...";
        }),
          (n.snipLine = function (e, t) {
            var n = e,
              r = n.length;
            if (r <= 150) return n;
            t > r && (t = r);
            var a = Math.max(t - 60, 0);
            a < 5 && (a = 0);
            var o = Math.min(a + 140, r);
            return (
              o > r - 5 && (o = r),
              o === r && (a = Math.max(o - 140, 0)),
              (n = n.slice(a, o)),
              a > 0 && (n = "'{snip} " + n),
              o < r && (n += " {snip}"),
              n
            );
          }),
          (n.safeJoin = function (e, t) {
            if (!Array.isArray(e)) return "";
            for (var n = [], r = 0; r < e.length; r++) {
              var a = e[r];
              try {
                n.push(String(a));
              } catch (e) {
                n.push("[value cannot be serialized]");
              }
            }
            return n.join(t);
          }),
          (n.isMatchingPattern = function (e, t) {
            return r.isRegExp(t) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t);
          });
      },
      { "./is": 64 }
    ],
    73: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = e("./logger"),
          a = e("./misc");
        function o() {
          if (!("fetch" in a.getGlobalObject())) return !1;
          try {
            return new Headers(), new Request(""), new Response(), !0;
          } catch (e) {
            return !1;
          }
        }
        function i(e) {
          return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
        }
        (n.supportsErrorEvent = function () {
          try {
            return new ErrorEvent(""), !0;
          } catch (e) {
            return !1;
          }
        }),
          (n.supportsDOMError = function () {
            try {
              return new DOMError(""), !0;
            } catch (e) {
              return !1;
            }
          }),
          (n.supportsDOMException = function () {
            try {
              return new DOMException(""), !0;
            } catch (e) {
              return !1;
            }
          }),
          (n.supportsFetch = o),
          (n.supportsNativeFetch = function () {
            if (!o()) return !1;
            var e = a.getGlobalObject();
            if (i(e.fetch)) return !0;
            var t = !1,
              n = e.document;
            if (n) {
              var s = n.createElement("iframe");
              s.hidden = !0;
              try {
                n.head.appendChild(s), s.contentWindow && s.contentWindow.fetch && (t = i(s.contentWindow.fetch)), n.head.removeChild(s);
              } catch (e) {
                r.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
              }
            }
            return t;
          }),
          (n.supportsReportingObserver = function () {
            return "ReportingObserver" in a.getGlobalObject();
          }),
          (n.supportsReferrerPolicy = function () {
            if (!o()) return !1;
            try {
              return new Request("_", { referrerPolicy: "origin" }), !0;
            } catch (e) {
              return !1;
            }
          }),
          (n.supportsHistory = function () {
            var e = a.getGlobalObject(),
              t = e.chrome,
              n = t && t.app && t.app.runtime,
              r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
            return !n && r;
          });
      },
      { "./logger": 65, "./misc": 67 }
    ],
    74: [
      function (e, t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r,
          a = e("./is");
        !(function (e) {
          (e.PENDING = "PENDING"), (e.RESOLVED = "RESOLVED"), (e.REJECTED = "REJECTED");
        })(r || (r = {}));
        var o = (function () {
          function e(e) {
            var t = this;
            (this._state = r.PENDING),
              (this._handlers = []),
              (this._resolve = function (e) {
                t._setResult(r.RESOLVED, e);
              }),
              (this._reject = function (e) {
                t._setResult(r.REJECTED, e);
              }),
              (this._setResult = function (e, n) {
                t._state === r.PENDING &&
                  (a.isThenable(n) ? n.then(t._resolve, t._reject) : ((t._state = e), (t._value = n), t._executeHandlers()));
              }),
              (this._attachHandler = function (e) {
                (t._handlers = t._handlers.concat(e)), t._executeHandlers();
              }),
              (this._executeHandlers = function () {
                t._state !== r.PENDING &&
                  (t._state === r.REJECTED
                    ? t._handlers.forEach(function (e) {
                        e.onrejected && e.onrejected(t._value);
                      })
                    : t._handlers.forEach(function (e) {
                        e.onfulfilled && e.onfulfilled(t._value);
                      }),
                  (t._handlers = []));
              });
            try {
              e(this._resolve, this._reject);
            } catch (e) {
              this._reject(e);
            }
          }
          return (
            (e.prototype.toString = function () {
              return "[object SyncPromise]";
            }),
            (e.resolve = function (t) {
              return new e(function (e) {
                e(t);
              });
            }),
            (e.reject = function (t) {
              return new e(function (e, n) {
                n(t);
              });
            }),
            (e.all = function (t) {
              return new e(function (n, r) {
                if (Array.isArray(t))
                  if (0 !== t.length) {
                    var a = t.length,
                      o = [];
                    t.forEach(function (t, i) {
                      e.resolve(t)
                        .then(function (e) {
                          (o[i] = e), 0 === (a -= 1) && n(o);
                        })
                        .then(null, r);
                    });
                  } else n([]);
                else r(new TypeError("Promise.all requires an array as input."));
              });
            }),
            (e.prototype.then = function (t, n) {
              var r = this;
              return new e(function (e, a) {
                r._attachHandler({
                  onfulfilled: function (n) {
                    if (t)
                      try {
                        return void e(t(n));
                      } catch (e) {
                        return void a(e);
                      }
                    else e(n);
                  },
                  onrejected: function (t) {
                    if (n)
                      try {
                        return void e(n(t));
                      } catch (e) {
                        return void a(e);
                      }
                    else a(t);
                  }
                });
              });
            }),
            (e.prototype.catch = function (e) {
              return this.then(function (e) {
                return e;
              }, e);
            }),
            (e.prototype.finally = function (t) {
              var n = this;
              return new e(function (e, r) {
                var a, o;
                return n
                  .then(
                    function (e) {
                      (o = !1), (a = e), t && t();
                    },
                    function (e) {
                      (o = !0), (a = e), t && t();
                    }
                  )
                  .then(function () {
                    o ? r(a) : e(a);
                  });
              });
            }),
            e
          );
        })();
        n.SyncPromise = o;
      },
      { "./is": 64 }
    ],
    75: [
      function (e, t, n) {
        (function (e) {
          (function () {
            !(function (r) {
              var a = "object" == typeof n && n,
                o = "object" == typeof t && t && t.exports == a && t,
                i = "object" == typeof e && e;
              (i.global !== i && i.window !== i) || (r = i);
              var s = function (e) {
                this.message = e;
              };
              (s.prototype = new Error()).name = "InvalidCharacterError";
              var $ = function (e) {
                  throw new s(e);
                },
                u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                c = /[\t\n\f\r ]/g,
                l = {
                  encode: function (e) {
                    (e = String(e)), /[^\0-\xFF]/.test(e) && $("The string to be encoded contains characters outside of the Latin1 range.");
                    for (var t, n, r, a, o = e.length % 3, i = "", s = -1, c = e.length - o; ++s < c; )
                      (t = e.charCodeAt(s) << 16),
                        (n = e.charCodeAt(++s) << 8),
                        (r = e.charCodeAt(++s)),
                        (i +=
                          u.charAt(((a = t + n + r) >> 18) & 63) + u.charAt((a >> 12) & 63) + u.charAt((a >> 6) & 63) + u.charAt(63 & a));
                    return (
                      2 == o
                        ? ((t = e.charCodeAt(s) << 8),
                          (n = e.charCodeAt(++s)),
                          (i += u.charAt((a = t + n) >> 10) + u.charAt((a >> 4) & 63) + u.charAt((a << 2) & 63) + "="))
                        : 1 == o && ((a = e.charCodeAt(s)), (i += u.charAt(a >> 2) + u.charAt((a << 4) & 63) + "==")),
                      i
                    );
                  },
                  decode: function (e) {
                    var t = (e = String(e).replace(c, "")).length;
                    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                      (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) &&
                        $("Invalid character: the string to be decoded is not correctly encoded.");
                    for (var n, r, a = 0, o = "", i = -1; ++i < t; )
                      (r = u.indexOf(e.charAt(i))),
                        (n = a % 4 ? 64 * n + r : r),
                        a++ % 4 && (o += String.fromCharCode(255 & (n >> ((-2 * a) & 6))));
                    return o;
                  },
                  version: "0.1.0"
                };
              if ("function" == typeof define && "object" == typeof define.amd && define.amd)
                define(function () {
                  return l;
                });
              else if (a && !a.nodeType)
                if (o) o.exports = l;
                else for (var d in l) l.hasOwnProperty(d) && (a[d] = l[d]);
              else r.base64 = l;
            })(this);
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    76: [
      function (e, t, n) {
        var r, a;
        t.exports =
          ((r = 36e5),
          ((a = function (e, t) {
            (this.pastEvents = {}),
              (this.listeners = []),
              (this.blockref = e || [
                new RegExp(".*&afsrc=1|\\?afsrc=1"),
                new RegExp("7eer.net"),
                new RegExp("ad.zanox.com"),
                new RegExp("affiliate.buy.com"),
                new RegExp("affiliates.market-ace.com"),
                new RegExp("awin1.com"),
                new RegExp("click.linksynergy.com"),
                new RegExp("clickserve.cc-dt.com"),
                new RegExp("clkde.tradedoubler.com"),
                new RegExp("clk.tradedoubler.com"),
                new RegExp("clkuk.tradedoubler.com"),
                new RegExp("dtrk4.com"),
                new RegExp("evyy.net"),
                new RegExp("gan.doubleclick.net"),
                new RegExp("linksynergy.onlineshoes.com"),
                new RegExp("linksynergy.walmart.com"),
                new RegExp("ojrq.net"),
                new RegExp("operator.savings.int"),
                new RegExp("partners.webmasterplan.com"),
                new RegExp("prf.hn"),
                new RegExp("rover.ebay.com"),
                new RegExp("scripts.affiliatefuture.com"),
                new RegExp("send.onenetworkdirect.net"),
                new RegExp("tc.tradetracker.net"),
                new RegExp("track.moreniche.com"),
                new RegExp("track.webgains.com"),
                new RegExp(".*.belboon.de"),
                new RegExp(".*.savoocompare.co.uk"),
                new RegExp(".*.anrdoezrs.net"),
                new RegExp(".*.avantlink.com"),
                new RegExp(".*.awin1.com"),
                new RegExp(".*.clixGalore.com"),
                new RegExp(".*.dpbolvw.net"),
                new RegExp(".*.gopjn.com"),
                new RegExp(".*.jdoqocy.com"),
                new RegExp(".*.kqzyfj.com"),
                new RegExp(".*.linkconnector.com"),
                new RegExp(".*.mysupermarket.co.uk"),
                new RegExp(".*.paidonresults.net"),
                new RegExp(".*.pjatr.com"),
                new RegExp(".*.pjtra.com"),
                new RegExp(".*.pntrac.com"),
                new RegExp(".*.pntra.com"),
                new RegExp(".*.pntrs.com"),
                new RegExp(".*.rent.com"),
                new RegExp(".*.shareasale.com"),
                new RegExp(".*.tkqlhce.com"),
                new RegExp(".*.zanox-affiliate.de"),
                new RegExp(".*savings.com"),
                new RegExp(".*affiliate.rakuten.com")
              ]),
              (this.timing_threshold = t || 1800),
              (this.ciuvo_rex = [new RegExp(".*ciuvo.com"), new RegExp(".*localhost:8002")]);
          }).prototype = {
            onNavigationEvent: function (e, t, n, r, a) {
              r = r || Date.now();
              var o = this.getLastEvent(e),
                i = this.isNewEvent(o, t, n, r, a);
              return (
                (o.timestamp = r),
                (o.hostname = this.hostnameFromUrl(t)),
                (!i && o.isFromCiuvo) || (o.isFromCiuvo = this.isCiuvoEvent(t)),
                o.isFromCiuvo ? (o.isAfsrc = !1) : o.isAfsrc || (o.isAfsrc = this.ifAfsrcEvent(t)),
                o.isAfsrc
              );
            },
            isCiuvoEvent: function (e) {
              for (var t = 0; t < this.ciuvo_rex.length; ++t) if (this.ciuvo_rex[t].exec(e)) return !0;
              return !1;
            },
            ifAfsrcEvent: function (e) {
              for (var t = 0; t < this.blockref.length; t++) if (this.blockref[t].exec(e)) return !0;
              return !1;
            },
            getSessionBlockList: function () {
              var e = window.localStorage.getItem("__ciuvo__afsrc__sbl");
              return (
                e && "string" == typeof e && (e = JSON.parse(e)),
                (e && "object" == typeof e) || ((e = {}), this.storeSessionBlockList(e)),
                e
              );
            },
            storeSessionBlockList: function (e) {
              window.localStorage.setItem("__ciuvo__afsrc__sbl", JSON.stringify(e));
            },
            addToSessionBlockList: function (e) {
              var t = this.getSessionBlockList();
              (t[e] = Date.now()), this.storeSessionBlockList(t);
            },
            isOnSessionBlockList: function (e) {
              var t = this.getSessionBlockList(),
                n = t[e];
              if (!n) return !1;
              var a = Date.now();
              return n + r > a || (delete t[e], this.storeSessionBlockList(t), !1);
            },
            isNewEvent: function (e, t, n, r, a) {
              if (void 0 !== n && n == e.requestId) return !1;
              if (r - e.timestamp < this.timing_threshold) return !1;
              if (e.isAfsrc)
                if (void 0 !== a) {
                  if (!a) return !1;
                } else if (this.hostnameFromUrl(t) === e.hostname) return !1;
              return (e.isAfsrc = !1), (e.isFromCiuvo = !1), (e.requestId = n), !0;
            },
            cleanupExpiredTabs: function () {
              for (var e in ((now = Date.now()), this.pastEvents))
                if (this.pastEvents.hasOwnProperty(e)) {
                  var t = this.pastEvents[e];
                  now - t.timestamp > 361e4 && delete this.pastEvents[e];
                }
            },
            getLastEvent: function (e) {
              var t = this.pastEvents[e];
              return (
                void 0 === t &&
                  ((t = { isAfsrc: !1, requestId: void 0, isFromCiuvo: !1, timestamp: 0, hostname: void 0 }), (this.pastEvents[e] = t)),
                t
              );
            },
            isAffiliateSource: function (e, t) {
              var n = this.getLastEvent(e),
                r = n.isAfsrc;
              return (
                this.isOnSessionBlockList(n.hostname) ? (r = !0) : r && this.addToSessionBlockList(n.hostname),
                t && this.cleanupExpiredTabs(),
                r
              );
            },
            hostnameFromUrl: function (e) {
              return new URL(e).hostname.match(/([^.]+.\w+)$/)[0];
            }
          }),
          a);
      },
      {}
    ],
    77: [
      function (e, t, n) {
        t.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
        };
      },
      {}
    ],
    78: [
      function (e, t, n) {
        var r = e("./_wks")("unscopables"),
          a = Array.prototype;
        null == a[r] && e("./_hide")(a, r, {}),
          (t.exports = function (e) {
            a[r][e] = !0;
          });
      },
      { "./_hide": 93, "./_wks": 122 }
    ],
    79: [
      function (e, t, n) {
        var r = e("./_is-object");
        t.exports = function (e) {
          if (!r(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      { "./_is-object": 97 }
    ],
    80: [
      function (e, t, n) {
        var r = e("./_to-iobject"),
          a = e("./_to-length"),
          o = e("./_to-absolute-index");
        t.exports = function (e) {
          return function (t, n, i) {
            var s,
              $ = r(t),
              u = a($.length),
              c = o(i, u);
            if (e && n != n) {
              for (; u > c; ) if ((s = $[c++]) != s) return !0;
            } else for (; u > c; c++) if ((e || c in $) && $[c] === n) return e || c || 0;
            return !e && -1;
          };
        };
      },
      { "./_to-absolute-index": 115, "./_to-iobject": 117, "./_to-length": 118 }
    ],
    81: [
      function (e, t, n) {
        var r = {}.toString;
        t.exports = function (e) {
          return r.call(e).slice(8, -1);
        };
      },
      {}
    ],
    82: [
      function (e, t, n) {
        var r = (t.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = r);
      },
      {}
    ],
    83: [
      function (e, t, n) {
        var r = e("./_a-function");
        t.exports = function (e, t, n) {
          if ((r(e), void 0 === t)) return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, r) {
                return e.call(t, n, r);
              };
            case 3:
              return function (n, r, a) {
                return e.call(t, n, r, a);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      { "./_a-function": 77 }
    ],
    84: [
      function (e, t, n) {
        t.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      {}
    ],
    85: [
      function (e, t, n) {
        t.exports = !e("./_fails")(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              }
            }).a
          );
        });
      },
      { "./_fails": 89 }
    ],
    86: [
      function (e, t, n) {
        var r = e("./_is-object"),
          a = e("./_global").document,
          o = r(a) && r(a.createElement);
        t.exports = function (e) {
          return o ? a.createElement(e) : {};
        };
      },
      { "./_global": 91, "./_is-object": 97 }
    ],
    87: [
      function (e, t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      {}
    ],
    88: [
      function (e, t, n) {
        var r = e("./_global"),
          a = e("./_core"),
          o = e("./_hide"),
          i = e("./_redefine"),
          s = e("./_ctx"),
          $ = function (e, t, n) {
            var u,
              c,
              l,
              d,
              h = e & $.F,
              p = e & $.G,
              f = e & $.S,
              m = e & $.P,
              g = e & $.B,
              b = p ? r : f ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
              y = p ? a : a[t] || (a[t] = {}),
              v = y.prototype || (y.prototype = {});
            for (u in (p && (n = t), n))
              (l = ((c = !h && b && void 0 !== b[u]) ? b : n)[u]),
                (d = g && c ? s(l, r) : m && "function" == typeof l ? s(Function.call, l) : l),
                b && i(b, u, l, e & $.U),
                y[u] != l && o(y, u, d),
                m && v[u] != l && (v[u] = l);
          };
        (r.core = a), ($.F = 1), ($.G = 2), ($.S = 4), ($.P = 8), ($.B = 16), ($.W = 32), ($.U = 64), ($.R = 128), (t.exports = $);
      },
      { "./_core": 82, "./_ctx": 83, "./_global": 91, "./_hide": 93, "./_redefine": 110 }
    ],
    89: [
      function (e, t, n) {
        t.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      {}
    ],
    90: [
      function (e, t, n) {
        t.exports = e("./_shared")("native-function-to-string", Function.toString);
      },
      { "./_shared": 113 }
    ],
    91: [
      function (e, t, n) {
        var r = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = r);
      },
      {}
    ],
    92: [
      function (e, t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function (e, t) {
          return r.call(e, t);
        };
      },
      {}
    ],
    93: [
      function (e, t, n) {
        var r = e("./_object-dp"),
          a = e("./_property-desc");
        t.exports = e("./_descriptors")
          ? function (e, t, n) {
              return r.f(e, t, a(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      { "./_descriptors": 85, "./_object-dp": 104, "./_property-desc": 109 }
    ],
    94: [
      function (e, t, n) {
        var r = e("./_global").document;
        t.exports = r && r.documentElement;
      },
      { "./_global": 91 }
    ],
    95: [
      function (e, t, n) {
        t.exports =
          !e("./_descriptors") &&
          !e("./_fails")(function () {
            return (
              7 !=
              Object.defineProperty(e("./_dom-create")("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a
            );
          });
      },
      { "./_descriptors": 85, "./_dom-create": 86, "./_fails": 89 }
    ],
    96: [
      function (e, t, n) {
        var r = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == r(e) ? e.split("") : Object(e);
            };
      },
      { "./_cof": 81 }
    ],
    97: [
      function (e, t, n) {
        t.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      {}
    ],
    98: [
      function (e, t, n) {
        "use strict";
        var r = e("./_object-create"),
          a = e("./_property-desc"),
          o = e("./_set-to-string-tag"),
          i = {};
        e("./_hide")(i, e("./_wks")("iterator"), function () {
          return this;
        }),
          (t.exports = function (e, t, n) {
            (e.prototype = r(i, { next: a(1, n) })), o(e, t + " Iterator");
          });
      },
      { "./_hide": 93, "./_object-create": 103, "./_property-desc": 109, "./_set-to-string-tag": 111, "./_wks": 122 }
    ],
    99: [
      function (e, t, n) {
        "use strict";
        var r = e("./_library"),
          a = e("./_export"),
          o = e("./_redefine"),
          i = e("./_hide"),
          s = e("./_iterators"),
          $ = e("./_iter-create"),
          u = e("./_set-to-string-tag"),
          c = e("./_object-gpo"),
          l = e("./_wks")("iterator"),
          d = !([].keys && "next" in [].keys()),
          h = "keys",
          p = "values",
          f = function () {
            return this;
          };
        t.exports = function (e, t, n, m, g, b, y) {
          $(n, t, m);
          var v,
            k,
            _,
            w = function (e) {
              if (!d && e in E) return E[e];
              switch (e) {
                case h:
                case p:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this, e);
              };
            },
            x = t + " Iterator",
            j = g == p,
            S = !1,
            E = e.prototype,
            O = E[l] || E["@@iterator"] || (g && E[g]),
            T = O || w(g),
            I = g ? (j ? w("entries") : T) : void 0,
            z = ("Array" == t && E.entries) || O;
          if (
            (z && (_ = c(z.call(new e()))) !== Object.prototype && _.next && (u(_, x, !0), r || "function" == typeof _[l] || i(_, l, f)),
            j &&
              O &&
              O.name !== p &&
              ((S = !0),
              (T = function () {
                return O.call(this);
              })),
            (r && !y) || (!d && !S && E[l]) || i(E, l, T),
            (s[t] = T),
            (s[x] = f),
            g)
          )
            if (((v = { values: j ? T : w(p), keys: b ? T : w(h), entries: I }), y)) for (k in v) k in E || o(E, k, v[k]);
            else a(a.P + a.F * (d || S), t, v);
          return v;
        };
      },
      {
        "./_export": 88,
        "./_hide": 93,
        "./_iter-create": 98,
        "./_iterators": 101,
        "./_library": 102,
        "./_object-gpo": 106,
        "./_redefine": 110,
        "./_set-to-string-tag": 111,
        "./_wks": 122
      }
    ],
    100: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      {}
    ],
    101: [
      function (e, t, n) {
        t.exports = {};
      },
      {}
    ],
    102: [
      function (e, t, n) {
        t.exports = !1;
      },
      {}
    ],
    103: [
      function (e, t, n) {
        var r = e("./_an-object"),
          a = e("./_object-dps"),
          o = e("./_enum-bug-keys"),
          i = e("./_shared-key")("IE_PROTO"),
          s = function () {},
          $ = function () {
            var t,
              n = e("./_dom-create")("iframe"),
              r = o.length;
            for (
              n.style.display = "none",
                e("./_html").appendChild(n),
                n.src = "javascript:",
                (t = n.contentWindow.document).open(),
                t.write("<script>document.F=Object</script>"),
                t.close(),
                $ = t.F;
              r--;

            )
              delete $.prototype[o[r]];
            return $();
          };
        t.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e ? ((s.prototype = r(e)), (n = new s()), (s.prototype = null), (n[i] = e)) : (n = $()), void 0 === t ? n : a(n, t)
            );
          };
      },
      { "./_an-object": 79, "./_dom-create": 86, "./_enum-bug-keys": 87, "./_html": 94, "./_object-dps": 105, "./_shared-key": 112 }
    ],
    104: [
      function (e, t, n) {
        var r = e("./_an-object"),
          a = e("./_ie8-dom-define"),
          o = e("./_to-primitive"),
          i = Object.defineProperty;
        n.f = e("./_descriptors")
          ? Object.defineProperty
          : function (e, t, n) {
              if ((r(e), (t = o(t, !0)), r(n), a))
                try {
                  return i(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      { "./_an-object": 79, "./_descriptors": 85, "./_ie8-dom-define": 95, "./_to-primitive": 120 }
    ],
    105: [
      function (e, t, n) {
        var r = e("./_object-dp"),
          a = e("./_an-object"),
          o = e("./_object-keys");
        t.exports = e("./_descriptors")
          ? Object.defineProperties
          : function (e, t) {
              a(e);
              for (var n, i = o(t), s = i.length, $ = 0; s > $; ) r.f(e, (n = i[$++]), t[n]);
              return e;
            };
      },
      { "./_an-object": 79, "./_descriptors": 85, "./_object-dp": 104, "./_object-keys": 108 }
    ],
    106: [
      function (e, t, n) {
        var r = e("./_has"),
          a = e("./_to-object"),
          o = e("./_shared-key")("IE_PROTO"),
          i = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = a(e)),
              r(e, o)
                ? e[o]
                : "function" == typeof e.constructor && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? i
                : null
            );
          };
      },
      { "./_has": 92, "./_shared-key": 112, "./_to-object": 119 }
    ],
    107: [
      function (e, t, n) {
        var r = e("./_has"),
          a = e("./_to-iobject"),
          o = e("./_array-includes")(!1),
          i = e("./_shared-key")("IE_PROTO");
        t.exports = function (e, t) {
          var n,
            s = a(e),
            $ = 0,
            u = [];
          for (n in s) n != i && r(s, n) && u.push(n);
          for (; t.length > $; ) r(s, (n = t[$++])) && (~o(u, n) || u.push(n));
          return u;
        };
      },
      { "./_array-includes": 80, "./_has": 92, "./_shared-key": 112, "./_to-iobject": 117 }
    ],
    108: [
      function (e, t, n) {
        var r = e("./_object-keys-internal"),
          a = e("./_enum-bug-keys");
        t.exports =
          Object.keys ||
          function (e) {
            return r(e, a);
          };
      },
      { "./_enum-bug-keys": 87, "./_object-keys-internal": 107 }
    ],
    109: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
      },
      {}
    ],
    110: [
      function (e, t, n) {
        var r = e("./_global"),
          a = e("./_hide"),
          o = e("./_has"),
          i = e("./_uid")("src"),
          s = e("./_function-to-string"),
          $ = "toString",
          u = ("" + s).split($);
        (e("./_core").inspectSource = function (e) {
          return s.call(e);
        }),
          (t.exports = function (e, t, n, s) {
            var $ = "function" == typeof n;
            $ && (o(n, "name") || a(n, "name", t)),
              e[t] !== n &&
                ($ && (o(n, i) || a(n, i, e[t] ? "" + e[t] : u.join(String(t)))),
                e === r ? (e[t] = n) : s ? (e[t] ? (e[t] = n) : a(e, t, n)) : (delete e[t], a(e, t, n)));
          })(Function.prototype, $, function () {
            return ("function" == typeof this && this[i]) || s.call(this);
          });
      },
      { "./_core": 82, "./_function-to-string": 90, "./_global": 91, "./_has": 92, "./_hide": 93, "./_uid": 121 }
    ],
    111: [
      function (e, t, n) {
        var r = e("./_object-dp").f,
          a = e("./_has"),
          o = e("./_wks")("toStringTag");
        t.exports = function (e, t, n) {
          e && !a((e = n ? e : e.prototype), o) && r(e, o, { configurable: !0, value: t });
        };
      },
      { "./_has": 92, "./_object-dp": 104, "./_wks": 122 }
    ],
    112: [
      function (e, t, n) {
        var r = e("./_shared")("keys"),
          a = e("./_uid");
        t.exports = function (e) {
          return r[e] || (r[e] = a(e));
        };
      },
      { "./_shared": 113, "./_uid": 121 }
    ],
    113: [
      function (e, t, n) {
        var r = e("./_core"),
          a = e("./_global"),
          o = "__core-js_shared__",
          i = a[o] || (a[o] = {});
        (t.exports = function (e, t) {
          return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: r.version,
          mode: e("./_library") ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      { "./_core": 82, "./_global": 91, "./_library": 102 }
    ],
    114: [
      function (e, t, n) {
        "use strict";
        var r = e("./_fails");
        t.exports = function (e, t) {
          return (
            !!e &&
            r(function () {
              t ? e.call(null, function () {}, 1) : e.call(null);
            })
          );
        };
      },
      { "./_fails": 89 }
    ],
    115: [
      function (e, t, n) {
        var r = e("./_to-integer"),
          a = Math.max,
          o = Math.min;
        t.exports = function (e, t) {
          return (e = r(e)) < 0 ? a(e + t, 0) : o(e, t);
        };
      },
      { "./_to-integer": 116 }
    ],
    116: [
      function (e, t, n) {
        var r = Math.ceil,
          a = Math.floor;
        t.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? a : r)(e);
        };
      },
      {}
    ],
    117: [
      function (e, t, n) {
        var r = e("./_iobject"),
          a = e("./_defined");
        t.exports = function (e) {
          return r(a(e));
        };
      },
      { "./_defined": 84, "./_iobject": 96 }
    ],
    118: [
      function (e, t, n) {
        var r = e("./_to-integer"),
          a = Math.min;
        t.exports = function (e) {
          return e > 0 ? a(r(e), 9007199254740991) : 0;
        };
      },
      { "./_to-integer": 116 }
    ],
    119: [
      function (e, t, n) {
        var r = e("./_defined");
        t.exports = function (e) {
          return Object(r(e));
        };
      },
      { "./_defined": 84 }
    ],
    120: [
      function (e, t, n) {
        var r = e("./_is-object");
        t.exports = function (e, t) {
          if (!r(e)) return e;
          var n, a;
          if (t && "function" == typeof (n = e.toString) && !r((a = n.call(e)))) return a;
          if ("function" == typeof (n = e.valueOf) && !r((a = n.call(e)))) return a;
          if (!t && "function" == typeof (n = e.toString) && !r((a = n.call(e)))) return a;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { "./_is-object": 97 }
    ],
    121: [
      function (e, t, n) {
        var r = 0,
          a = Math.random();
        t.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + a).toString(36));
        };
      },
      {}
    ],
    122: [
      function (e, t, n) {
        var r = e("./_shared")("wks"),
          a = e("./_uid"),
          o = e("./_global").Symbol,
          i = "function" == typeof o;
        (t.exports = function (e) {
          return r[e] || (r[e] = (i && o[e]) || (i ? o : a)("Symbol." + e));
        }).store = r;
      },
      { "./_global": 91, "./_shared": 113, "./_uid": 121 }
    ],
    123: [
      function (e, t, n) {
        "use strict";
        var r = e("./_add-to-unscopables"),
          a = e("./_iter-step"),
          o = e("./_iterators"),
          i = e("./_to-iobject");
        (t.exports = e("./_iter-define")(
          Array,
          "Array",
          function (e, t) {
            (this._t = i(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              n = this._i++;
            return !e || n >= e.length ? ((this._t = void 0), a(1)) : a(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
          },
          "values"
        )),
          (o.Arguments = o.Array),
          r("keys"),
          r("values"),
          r("entries");
      },
      { "./_add-to-unscopables": 78, "./_iter-define": 99, "./_iter-step": 100, "./_iterators": 101, "./_to-iobject": 117 }
    ],
    124: [
      function (e, t, n) {
        "use strict";
        var r = e("./_export"),
          a = e("./_a-function"),
          o = e("./_to-object"),
          i = e("./_fails"),
          s = [].sort,
          $ = [1, 2, 3];
        r(
          r.P +
            r.F *
              (i(function () {
                $.sort(void 0);
              }) ||
                !i(function () {
                  $.sort(null);
                }) ||
                !e("./_strict-method")(s)),
          "Array",
          {
            sort: function (e) {
              return void 0 === e ? s.call(o(this)) : s.call(o(this), a(e));
            }
          }
        );
      },
      { "./_a-function": 77, "./_export": 88, "./_fails": 89, "./_strict-method": 114, "./_to-object": 119 }
    ],
    125: [
      function (e, t, n) {
        for (
          var r = e("./es6.array.iterator"),
            a = e("./_object-keys"),
            o = e("./_redefine"),
            i = e("./_global"),
            s = e("./_hide"),
            $ = e("./_iterators"),
            u = e("./_wks"),
            c = u("iterator"),
            l = u("toStringTag"),
            d = $.Array,
            h = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1
            },
            p = a(h),
            f = 0;
          f < p.length;
          f++
        ) {
          var m,
            g = p[f],
            b = h[g],
            y = i[g],
            v = y && y.prototype;
          if (v && (v[c] || s(v, c, d), v[l] || s(v, l, g), ($[g] = d), b)) for (m in r) v[m] || o(v, m, r[m], !0);
        }
      },
      {
        "./_global": 91,
        "./_hide": 93,
        "./_iterators": 101,
        "./_object-keys": 108,
        "./_redefine": 110,
        "./_wks": 122,
        "./es6.array.iterator": 123
      }
    ],
    126: [
      function (e, t, n) {
        "use strict";
        t.exports = e("./src/BackgroundMessenger");
      },
      { "./src/BackgroundMessenger": 127 }
    ],
    127: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          a = r(e("@babel/runtime/helpers/classCallCheck")),
          o = r(e("@babel/runtime/helpers/createClass")),
          i = r(e("@babel/runtime/helpers/assertThisInitialized")),
          s = r(e("@babel/runtime/helpers/inherits")),
          $ = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
          u = r(e("@babel/runtime/helpers/getPrototypeOf"));
        function c(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = (0, u.default)(e);
            if (t) {
              var a = (0, u.default)(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return (0, $.default)(this, n);
          };
        }
        var l = e("./Messenger"),
          d = e("./BackgroundTopic"),
          h = e("./chrome"),
          p = (function (e) {
            (0, s.default)(n, e);
            var t = c(n);
            function n() {
              var e;
              return (
                (0, a.default)(this, n),
                ((e = t.call(this, d))._popupTabId = null),
                h.runtime.onMessage.addListener(e._onMessage.bind((0, i.default)(e))),
                h.runtime.onConnect.addListener(e._onConnect.bind((0, i.default)(e))),
                e
              );
            }
            return (
              (0, o.default)(n, [
                {
                  key: "_onMessage",
                  value: function (e, t, n) {
                    if (e.subscribe) {
                      var r = this._getTopic(e.subscribe, !0);
                      t.tab
                        ? -1 !== t.tab.id && r.subscribeTab(t.tab.id)
                        : this._getCurrentTabId(function (e) {
                            r.subscribePopup(e);
                          });
                    } else if (e.publish) {
                      var a = this._getTopic(e.publish);
                      a && a.publish(e.message, n, t);
                    }
                    return !0;
                  }
                },
                {
                  key: "_onConnect",
                  value: function (e) {
                    var t = this;
                    "ContentMessenger" !== e.name ||
                      e.sender.tab ||
                      (e.onDisconnect.addListener(function () {
                        t._unsubscribePopup(), t.publish("Popup:closed", { tabId: t._popupTabId }), (t._popupTabId = null);
                      }),
                      this._getCurrentTabId(function (e) {
                        t._popupTabId = e;
                      }));
                  }
                },
                {
                  key: "_unsubscribePopup",
                  value: function () {
                    for (var e in this._topics) this._topics.hasOwnProperty(e) && this._topics[e].unsubscribePopup();
                  }
                },
                {
                  key: "_getCurrentTabId",
                  value: function (e) {
                    h.tabs.query({ currentWindow: !0, active: !0 }, function (t) {
                      e(t[0] && t[0].id);
                    });
                  }
                }
              ]),
              n
            );
          })(l);
        t.exports = p;
      },
      {
        "./BackgroundTopic": 128,
        "./Messenger": 129,
        "./chrome": 131,
        "@babel/runtime/helpers/assertThisInitialized": 11,
        "@babel/runtime/helpers/classCallCheck": 12,
        "@babel/runtime/helpers/createClass": 13,
        "@babel/runtime/helpers/getPrototypeOf": 15,
        "@babel/runtime/helpers/inherits": 16,
        "@babel/runtime/helpers/interopRequireDefault": 17,
        "@babel/runtime/helpers/possibleConstructorReturn": 18
      }
    ],
    128: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          a = r(e("@babel/runtime/helpers/classCallCheck")),
          o = r(e("@babel/runtime/helpers/createClass")),
          i = r(e("@babel/runtime/helpers/inherits")),
          s = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
          $ = r(e("@babel/runtime/helpers/getPrototypeOf"));
        function u(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = (0, $.default)(e);
            if (t) {
              var a = (0, $.default)(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return (0, s.default)(this, n);
          };
        }
        var c = e("./chrome"),
          l = (function (e) {
            (0, i.default)(n, e);
            var t = u(n);
            function n(e) {
              var r;
              return (
                (0, a.default)(this, n),
                ((r = t.call(this, e))._tabIds = []),
                (r._popupTabId = null),
                c.tabs.onRemoved.addListener(function (e) {
                  return r._unsubscribeTab(e);
                }),
                r
              );
            }
            return (
              (0, o.default)(n, [
                {
                  key: "publish",
                  value: function (e, t, n) {
                    var r = this._wrapCallback(t);
                    this._callbacks.forEach(function (t) {
                      return t(e, r, n);
                    }),
                      this._publishToTabs(e, t, n),
                      this._publishToPopup(e, t, n);
                  }
                },
                {
                  key: "_publishToTabs",
                  value: function (e, t, n) {
                    var r = this,
                      a = n && n.tab && n.tab.id,
                      o = function (n) {
                        c.tabs.sendMessage(n, { publish: r._name, message: e }, function (e) {
                          c.runtime.lastError || "function" != typeof t || t(e);
                        });
                      };
                    a ? -1 !== this._tabIds.indexOf(a) && o(a) : this._tabIds.forEach(o);
                  }
                },
                {
                  key: "_publishToPopup",
                  value: function (e, t, n) {
                    this._popupTabId &&
                      ((n && n.tab && n.tab.id !== this._popupTabId) ||
                        c.runtime.sendMessage({ publish: this._name, message: e }, function (e) {
                          c.runtime.lastError || "function" != typeof t || t(e);
                        }));
                  }
                },
                {
                  key: "subscribeTab",
                  value: function (e) {
                    -1 === this._tabIds.indexOf(e) && this._tabIds.push(e);
                  }
                },
                {
                  key: "_unsubscribeTab",
                  value: function (e) {
                    var t = this._tabIds.indexOf(e);
                    -1 !== t && this._tabIds.splice(t, 1);
                  }
                },
                {
                  key: "subscribePopup",
                  value: function (e) {
                    this._popupTabId = e;
                  }
                },
                {
                  key: "unsubscribePopup",
                  value: function () {
                    this._popupTabId = null;
                  }
                }
              ]),
              n
            );
          })(e("./Topic"));
        t.exports = l;
      },
      {
        "./Topic": 130,
        "./chrome": 131,
        "@babel/runtime/helpers/classCallCheck": 12,
        "@babel/runtime/helpers/createClass": 13,
        "@babel/runtime/helpers/getPrototypeOf": 15,
        "@babel/runtime/helpers/inherits": 16,
        "@babel/runtime/helpers/interopRequireDefault": 17,
        "@babel/runtime/helpers/possibleConstructorReturn": 18
      }
    ],
    129: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          a = r(e("@babel/runtime/helpers/classCallCheck")),
          o = r(e("@babel/runtime/helpers/createClass")),
          i = (function () {
            function e(t) {
              (0, a.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, o.default)(
                e,
                [
                  {
                    key: "_getTopic",
                    value: function (e, t) {
                      var n = this._topics[e];
                      return !n && t && (this._topics[e] = n = new this._topicClass(e)), n;
                    }
                  },
                  {
                    key: "subscribe",
                    value: function (e, t) {
                      this._getTopic(e, !0).subscribe(t);
                    }
                  },
                  {
                    key: "publish",
                    value: function (e, t, n, r) {
                      var a = this._getTopic(e);
                      a && a.publish(t, n, r);
                    }
                  }
                ],
                [
                  {
                    key: "getInstance",
                    value: function () {
                      return this._instance || (this._instance = new this()), this._instance;
                    }
                  }
                ]
              ),
              e
            );
          })();
        t.exports = i;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 12,
        "@babel/runtime/helpers/createClass": 13,
        "@babel/runtime/helpers/interopRequireDefault": 17
      }
    ],
    130: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault"),
          a = r(e("@babel/runtime/helpers/classCallCheck")),
          o = r(e("@babel/runtime/helpers/createClass")),
          i = (function () {
            function e(t) {
              (0, a.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, o.default)(e, [
                {
                  key: "publish",
                  value: function (e, t) {
                    var n = this._wrapCallback(t);
                    this._callbacks.forEach(function (t) {
                      return t(e, n);
                    });
                  }
                },
                {
                  key: "_wrapCallback",
                  value: function (e) {
                    return null == e
                      ? e
                      : function () {
                          try {
                            e.apply(void 0, arguments);
                          } catch (e) {
                            if ("Attempting to use a disconnected port object" !== e.message) throw e;
                          }
                        };
                  }
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this._callbacks.push(e);
                  }
                }
              ]),
              e
            );
          })();
        t.exports = i;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 12,
        "@babel/runtime/helpers/createClass": 13,
        "@babel/runtime/helpers/interopRequireDefault": 17
      }
    ],
    131: [
      function (e, t, n) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    132: [
      function (e, t, n) {
        !(function (e, r) {
          "use strict";
          var a = "function",
            o = "undefined",
            i = "object",
            s = "string",
            $ = "model",
            u = "name",
            c = "type",
            l = "vendor",
            d = "version",
            h = "architecture",
            p = "console",
            f = "mobile",
            m = "tablet",
            g = "smarttv",
            b = "wearable",
            y = "embedded",
            v = "Amazon",
            k = "Apple",
            _ = "ASUS",
            w = "BlackBerry",
            x = "Firefox",
            j = "Google",
            S = "Huawei",
            E = "LG",
            O = "Microsoft",
            T = "Motorola",
            I = "Opera",
            z = "Samsung",
            R = "Sony",
            P = "Xiaomi",
            A = "Zebra",
            C = "Facebook",
            q = function (e) {
              var t = {};
              for (var n in e) t[e[n].toUpperCase()] = e[n];
              return t;
            },
            D = function (e, t) {
              return typeof e === s && -1 !== M(t).indexOf(M(e));
            },
            M = function (e) {
              return e.toLowerCase();
            },
            N = function (e, t) {
              if (typeof e === s) return (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")), typeof t === o ? e : e.substring(0, 255);
            },
            L = function (e, t) {
              for (var n, o, s, $, u, c, l = 0; l < t.length && !u; ) {
                var d = t[l],
                  h = t[l + 1];
                for (n = o = 0; n < d.length && !u; )
                  if ((u = d[n++].exec(e)))
                    for (s = 0; s < h.length; s++)
                      (c = u[++o]),
                        typeof ($ = h[s]) === i && $.length > 0
                          ? 2 == $.length
                            ? typeof $[1] == a
                              ? (this[$[0]] = $[1].call(this, c))
                              : (this[$[0]] = $[1])
                            : 3 == $.length
                            ? typeof $[1] !== a || ($[1].exec && $[1].test)
                              ? (this[$[0]] = c ? c.replace($[1], $[2]) : r)
                              : (this[$[0]] = c ? $[1].call(this, c, $[2]) : r)
                            : 4 == $.length && (this[$[0]] = c ? $[3].call(this, c.replace($[1], $[2])) : r)
                          : (this[$] = c || r);
                l += 2;
              }
            },
            U = function (e, t) {
              for (var n in t)
                if (typeof t[n] === i && t[n].length > 0) {
                  for (var a = 0; a < t[n].length; a++) if (D(t[n][a], e)) return "?" === n ? r : n;
                } else if (D(t[n], e)) return "?" === n ? r : n;
              return e;
            },
            B = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM"
            },
            F = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [d, [u, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [d, [u, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                ],
                [u, d],
                [/opios[\/ ]+([\w\.]+)/i],
                [d, [u, "Opera Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [d, [u, I]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                  /(weibo)__([\d\.]+)/i
                ],
                [u, d],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [d, [u, "UCBrowser"]],
                [/\bqbcore\/([\w\.]+)/i],
                [d, [u, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [d, [u, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [d, [u, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [d, [u, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [d, [u, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[u, /(.+)/, "$1 Secure Browser"], d],
                [/\bfocus\/([\w\.]+)/i],
                [d, [u, "Firefox Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [d, [u, "Opera Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [d, [u, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [d, [u, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [d, [u, "Opera Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [d, [u, "MIUI Browser"]],
                [/fxios\/([-\w\.]+)/i],
                [d, [u, x]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[u, "360 Browser"]],
                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                [[u, /(.+)/, "$1 Browser"], d],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[u, /_/g, " "], d],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                ],
                [u, d],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                [u],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[u, C], d],
                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                [u, d],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [d, [u, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [d, [u, "Chrome Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[u, "Chrome WebView"], d],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [d, [u, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [u, d],
                [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                [d, [u, "Mobile Safari"]],
                [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                [d, u],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  u,
                  [d, U, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [u, d],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[u, "Netscape"], d],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [d, [u, "Firefox Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i
                ],
                [u, d]
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[h, "amd64"]],
                [/(ia32(?=;))/i],
                [[h, M]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[h, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[h, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[h, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[h, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[h, /ower/, "", M]],
                [/(sun4\w)[;\)]/i],
                [[h, "sparc"]],
                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                [[h, M]]
              ],
              device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [$, [l, z], [c, m]],
                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [$, [l, z], [c, f]],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [$, [l, k], [c, f]],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [$, [l, k], [c, m]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [$, [l, S], [c, m]],
                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                [$, [l, S], [c, f]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                ],
                [
                  [$, /_/g, " "],
                  [l, P],
                  [c, f]
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [$, /_/g, " "],
                  [l, P],
                  [c, m]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                [$, [l, "OPPO"], [c, f]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [$, [l, "Vivo"], [c, f]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [$, [l, "Realme"], [c, f]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                ],
                [$, [l, T], [c, f]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [$, [l, T], [c, m]],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [$, [l, E], [c, m]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i
                ],
                [$, [l, E], [c, f]],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [$, [l, "Lenovo"], [c, m]],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                  [$, /_/g, " "],
                  [l, "Nokia"],
                  [c, f]
                ],
                [/(pixel c)\b/i],
                [$, [l, j], [c, m]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [$, [l, j], [c, f]],
                [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [$, [l, R], [c, f]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [$, "Xperia Tablet"],
                  [l, R],
                  [c, m]
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [$, [l, "OnePlus"], [c, f]],
                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [$, [l, v], [c, m]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [$, /(.+)/g, "Fire Phone $1"],
                  [l, v],
                  [c, f]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [$, l, [c, m]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [$, [l, w], [c, f]],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [$, [l, _], [c, m]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [$, [l, _], [c, f]],
                [/(nexus 9)/i],
                [$, [l, "HTC"], [c, m]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i
                ],
                [l, [$, /_/g, " "], [c, f]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [$, [l, "Acer"], [c, m]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [$, [l, "Meizu"], [c, f]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [$, [l, "Sharp"], [c, f]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i
                ],
                [l, $, [c, f]],
                [
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i
                ],
                [l, $, [c, m]],
                [/(surface duo)/i],
                [$, [l, O], [c, m]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [$, [l, "Fairphone"], [c, f]],
                [/(u304aa)/i],
                [$, [l, "AT&T"], [c, f]],
                [/\bsie-(\w*)/i],
                [$, [l, "Siemens"], [c, f]],
                [/\b(rct\w+) b/i],
                [$, [l, "RCA"], [c, m]],
                [/\b(venue[\d ]{2,7}) b/i],
                [$, [l, "Dell"], [c, m]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [$, [l, "Verizon"], [c, m]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [$, [l, "Barnes & Noble"], [c, m]],
                [/\b(tm\d{3}\w+) b/i],
                [$, [l, "NuVision"], [c, m]],
                [/\b(k88) b/i],
                [$, [l, "ZTE"], [c, m]],
                [/\b(nx\d{3}j) b/i],
                [$, [l, "ZTE"], [c, f]],
                [/\b(gen\d{3}) b.+49h/i],
                [$, [l, "Swiss"], [c, f]],
                [/\b(zur\d{3}) b/i],
                [$, [l, "Swiss"], [c, m]],
                [/\b((zeki)?tb.*\b) b/i],
                [$, [l, "Zeki"], [c, m]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[l, "Dragon Touch"], $, [c, m]],
                [/\b(ns-?\w{0,9}) b/i],
                [$, [l, "Insignia"], [c, m]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [$, [l, "NextBook"], [c, m]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[l, "Voice"], $, [c, f]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[l, "LvTel"], $, [c, f]],
                [/\b(ph-1) /i],
                [$, [l, "Essential"], [c, f]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [$, [l, "Envizen"], [c, m]],
                [/\b(trio[-\w\. ]+) b/i],
                [$, [l, "MachSpeed"], [c, m]],
                [/\btu_(1491) b/i],
                [$, [l, "Rotor"], [c, m]],
                [/(shield[\w ]+) b/i],
                [$, [l, "Nvidia"], [c, m]],
                [/(sprint) (\w+)/i],
                [l, $, [c, f]],
                [/(kin\.[onetw]{3})/i],
                [
                  [$, /\./g, " "],
                  [l, O],
                  [c, f]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [$, [l, A], [c, m]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [$, [l, A], [c, f]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [l, $, [c, p]],
                [/droid.+; (shield) bui/i],
                [$, [l, "Nvidia"], [c, p]],
                [/(playstation [345portablevi]+)/i],
                [$, [l, R], [c, p]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [$, [l, O], [c, p]],
                [/smart-tv.+(samsung)/i],
                [l, [c, g]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [$, /^/, "SmartTV"],
                  [l, z],
                  [c, g]
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [l, E],
                  [c, g]
                ],
                [/(apple) ?tv/i],
                [l, [$, "Apple TV"], [c, g]],
                [/crkey/i],
                [
                  [$, "Chromecast"],
                  [l, j],
                  [c, g]
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [$, [l, v], [c, g]],
                [/\(dtv[\);].+(aquos)/i],
                [$, [l, "Sharp"], [c, g]],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                [
                  [l, N],
                  [$, N],
                  [c, g]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[c, g]],
                [/((pebble))app/i],
                [l, $, [c, b]],
                [/droid.+; (glass) \d/i],
                [$, [l, j], [c, b]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [$, [l, A], [c, b]],
                [/(quest( 2)?)/i],
                [$, [l, C], [c, b]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [l, [c, y]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [$, [c, f]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [$, [c, m]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[c, m]],
                [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                [[c, f]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [$, [l, "Generic"]]
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [d, [u, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [d, [u, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i
                ],
                [u, d],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [d, u]
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [u, d],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                ],
                [u, [d, U, B]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [u, "Windows"],
                  [d, U, B]
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                [
                  [d, /_/g, "."],
                  [u, "iOS"]
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                  [u, "Mac OS"],
                  [d, /_/g, "."]
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                [d, u],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i
                ],
                [u, d],
                [/\(bb(10);/i],
                [d, [u, w]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [d, [u, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [d, [u, "Firefox OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [d, [u, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [d, [u, "Chromecast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [[u, "Chromium OS"], d],
                [
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i
                ],
                [u, d],
                [/(sunos) ?([\w\.\d]*)/i],
                [[u, "Solaris"], d],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                  /(unix) ?([\w\.]*)/i
                ],
                [u, d]
              ]
            },
            H = function (t, n) {
              if ((typeof t === i && ((n = t), (t = r)), !(this instanceof H))) return new H(t, n).getResult();
              var a = t || (typeof e !== o && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""),
                $ = n
                  ? (function (e, t) {
                      var n = {};
                      for (var r in e) t[r] && t[r].length % 2 == 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
                      return n;
                    })(F, n)
                  : F;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t.name = r),
                    (t.version = r),
                    L.call(t, a, $.browser),
                    (t.major = typeof (e = t.version) === s ? e.replace(/[^\d\.]/g, "").split(".")[0] : r),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e.architecture = r), L.call(e, a, $.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (e.vendor = r), (e.model = r), (e.type = r), L.call(e, a, $.device), e;
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e.name = r), (e.version = r), L.call(e, a, $.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (e.name = r), (e.version = r), L.call(e, a, $.os), e;
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                  };
                }),
                (this.getUA = function () {
                  return a;
                }),
                (this.setUA = function (e) {
                  return (a = typeof e === s && e.length > 255 ? N(e, 255) : e), this;
                }),
                this.setUA(a),
                this
              );
            };
          (H.VERSION = "0.8.1"),
            (H.BROWSER = q([u, d, "major"])),
            (H.CPU = q([h])),
            (H.DEVICE = q([$, l, c, p, f, g, m, b, y])),
            (H.ENGINE = H.OS = q([u, d])),
            typeof n !== o
              ? (typeof t !== o && t.exports && (n = t.exports = H), (n.UAParser = H))
              : typeof define === a && define.amd
              ? define(function () {
                  return H;
                })
              : typeof e !== o && (e.UAParser = H);
          var G = typeof e !== o && (e.jQuery || e.Zepto);
          if (G && !G.ua) {
            var W = new H();
            (G.ua = W.getResult()),
              (G.ua.get = function () {
                return W.getUA();
              }),
              (G.ua.set = function (e) {
                W.setUA(e);
                var t = W.getResult();
                for (var n in t) G.ua[n] = t[n];
              });
          }
        })("object" == typeof window ? window : this);
      },
      {}
    ],
    133: [
      function (e, t, n) {
        const r = e("base-64"),
          a = e("utf8");
        function o(e, t) {
          (this._xhrService = e), (this._environmentService = t), (this._apiUrl = "https://api.mixpanel.com"), (this._superProperties = {});
        }
        (o.prototype.init = function (e) {
          this._token = e;
        }),
          (o.prototype.identify = function (e) {
            this._distinctId = e;
          }),
          (o.prototype.getDistinctId = function () {
            return this._distinctId;
          }),
          (o.prototype.track = function (e, t, n) {
            if (n && "function" != typeof n) throw "Mixpanel.track: callback must be a function";
            var r = this._apiUrl + "/track/",
              a = this.createEvent(e, t),
              o = { data: this._encodeData(a), ip: 1 };
            this._xhrService.get(r, o, n);
          }),
          (o.prototype.createEvent = function (e, t) {
            if (!e) throw "Mixpanel.track: event must be specified";
            return { event: e, properties: this.getData(t) };
          }),
          (o.prototype.getData = function (e) {
            if (e) {
              if ("object" != typeof e) throw "Mixpanel.track: properties must be a dictionary";
            } else e = {};
            if (!this._token) throw "Mixpanel.track: Mixpanel.init must be called before Mixpanel.track";
            if (!this._distinctId) throw "Mixpanel.track: Mixpanel.identify must be called before Mixpanel.track";
            (e.distinct_id = this._distinctId), (e.token = this._token);
            var t = this._environmentService.getBrowser(),
              n = this._environmentService.getOS(),
              r = this._environmentService.getMajorVersion(),
              a = this._environmentService.getMinorVersion(),
              o = this._environmentService.getPatchVersion(),
              i = this._environmentService.getBuildVersion();
            for (var s in (t && (e.$browser = t),
            n && (e.$os = n),
            r && (e["Browser Version"] = r),
            a && (e["Browser Version (Minor)"] = a),
            o && (e["Browser Version (Patch)"] = o),
            i && (e["Browser Version (Build)"] = i),
            this._superProperties))
              e[s] = this._superProperties[s];
            return e;
          }),
          (o.prototype.register = function (e) {
            for (var t in e) this._superProperties[t] = e[t];
          }),
          (o.prototype._encodeData = function (e) {
            return r.encode(a.encode(JSON.stringify(e)));
          }),
          (t.exports = o);
      },
      { "base-64": 75, utf8: 158 }
    ],
    134: [
      function (e, t, n) {
        var r = e("ua-parser-js");
        function a(e) {
          (this._userAgent = e),
            (this._parsedUa = r(this._userAgent)),
            (this._versionParsed = (this._parsedUa.browser.version || this._parsedUa.engine.version).split("."));
        }
        (a.prototype.getBrowser = function () {
          return "IE" === this._parsedUa.browser.name ? "Internet Explorer" : this._parsedUa.browser.name;
        }),
          (a.prototype.getOS = function () {
            return this._parsedUa.os.name;
          }),
          (a.prototype.getMinorVersion = function () {
            return this._versionParsed.slice(0, 2).join(".");
          }),
          (a.prototype.getPatchVersion = function () {
            return this._versionParsed.slice(0, 3).join(".");
          }),
          (a.prototype.getMajorVersion = function () {
            return this._versionParsed.slice(0, 1).join(".");
          }),
          (a.prototype.getBuildVersion = function () {
            return this._versionParsed.slice(0, 4).join(".");
          }),
          (t.exports = a);
      },
      { "ua-parser-js": 132 }
    ],
    135: [
      function (e, t, n) {
        function r(e) {
          this._XMLHttpRequest = e;
        }
        (r.prototype.get = function (e, t, n) {
          var r = new this._XMLHttpRequest();
          "function" == typeof n &&
            (r.onreadystatechange = function () {
              4 == r.readyState && (200 == r.status ? n(null, r.responseText) : n("Request failed"));
            }),
            (e += this.getQueryString(t)),
            r.open("GET", e, !0),
            r.send();
        }),
          (r.prototype.getQueryString = function (e) {
            var t = [];
            for (var n in e) {
              var r = encodeURIComponent(n) + "=" + encodeURIComponent(e[n]);
              t.push(r);
            }
            var a = t.join("&");
            return a && (a = "?" + a), a;
          }),
          (t.exports = r);
      },
      {}
    ],
    136: [
      function (e, t, n) {
        (function (n) {
          (function () {
            var r = e("./Mixpanel"),
              a = e("./XHRTransport"),
              o = e("./UserAgentParser");
            t.exports = function (e) {
              var t = e.XMLHttpRequest || n.XMLHttpRequest,
                i = e.userAgent || n.navigator.userAgent;
              return new r(new a(t), new o(i));
            };
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      { "./Mixpanel": 133, "./UserAgentParser": 134, "./XHRTransport": 135 }
    ],
    137: [
      function (e, t, n) {
        var r = 1e3,
          a = 60 * r,
          o = 60 * a,
          i = 24 * o,
          s = 7 * i,
          $ = 365.25 * i;
        function u(e, t, n, r) {
          var a = t >= 1.5 * n;
          return Math.round(e / n) + " " + r + (a ? "s" : "");
        }
        t.exports = function (e, t) {
          t = t || {};
          var n = typeof e;
          if ("string" === n && e.length > 0)
            return (function (e) {
              if ((e = String(e)).length > 100) return;
              var t =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  e
                );
              if (!t) return;
              var n = parseFloat(t[1]);
              switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return n * $;
                case "weeks":
                case "week":
                case "w":
                  return n * s;
                case "days":
                case "day":
                case "d":
                  return n * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return n * o;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return n * a;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return n * r;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return n;
                default:
                  return;
              }
            })(e);
          if ("number" === n && isFinite(e))
            return t.long
              ? (function (e) {
                  var t = Math.abs(e);
                  if (t >= i) return u(e, t, i, "day");
                  if (t >= o) return u(e, t, o, "hour");
                  if (t >= a) return u(e, t, a, "minute");
                  if (t >= r) return u(e, t, r, "second");
                  return e + " ms";
                })(e)
              : (function (e) {
                  var t = Math.abs(e);
                  if (t >= i) return Math.round(e / i) + "d";
                  if (t >= o) return Math.round(e / o) + "h";
                  if (t >= a) return Math.round(e / a) + "m";
                  if (t >= r) return Math.round(e / r) + "s";
                  return e + "ms";
                })(e);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
        };
      },
      {}
    ],
    138: [
      function (e, t, n) {
        var r,
          a,
          o = (t.exports = {});
        function i() {
          throw new Error("setTimeout has not been defined");
        }
        function s() {
          throw new Error("clearTimeout has not been defined");
        }
        function $(e) {
          if (r === setTimeout) return setTimeout(e, 0);
          if ((r === i || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
          try {
            return r(e, 0);
          } catch (t) {
            try {
              return r.call(null, e, 0);
            } catch (t) {
              return r.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            r = "function" == typeof setTimeout ? setTimeout : i;
          } catch (e) {
            r = i;
          }
          try {
            a = "function" == typeof clearTimeout ? clearTimeout : s;
          } catch (e) {
            a = s;
          }
        })();
        var u,
          c = [],
          l = !1,
          d = -1;
        function h() {
          l && u && ((l = !1), u.length ? (c = u.concat(c)) : (d = -1), c.length && p());
        }
        function p() {
          if (!l) {
            var e = $(h);
            l = !0;
            for (var t = c.length; t; ) {
              for (u = c, c = []; ++d < t; ) u && u[d].run();
              (d = -1), (t = c.length);
            }
            (u = null),
              (l = !1),
              (function (e) {
                if (a === clearTimeout) return clearTimeout(e);
                if ((a === s || !a) && clearTimeout) return (a = clearTimeout), clearTimeout(e);
                try {
                  a(e);
                } catch (t) {
                  try {
                    return a.call(null, e);
                  } catch (t) {
                    return a.call(this, e);
                  }
                }
              })(e);
          }
        }
        function f(e, t) {
          (this.fun = e), (this.array = t);
        }
        function m() {}
        (o.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          c.push(new f(e, t)), 1 !== c.length || l || $(p);
        }),
          (f.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (o.title = "browser"),
          (o.browser = !0),
          (o.env = {}),
          (o.argv = []),
          (o.version = ""),
          (o.versions = {}),
          (o.on = m),
          (o.addListener = m),
          (o.once = m),
          (o.off = m),
          (o.removeListener = m),
          (o.removeAllListeners = m),
          (o.emit = m),
          (o.prependListener = m),
          (o.prependOnceListener = m),
          (o.listeners = function (e) {
            return [];
          }),
          (o.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (o.cwd = function () {
            return "/";
          }),
          (o.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (o.umask = function () {
            return 0;
          });
      },
      {}
    ],
    139: [
      function (e, t, n) {
        (function (e) {
          (function () {
            !(function (r) {
              var a = "object" == typeof n && n && !n.nodeType && n,
                o = "object" == typeof t && t && !t.nodeType && t,
                i = "object" == typeof e && e;
              (i.global !== i && i.window !== i && i.self !== i) || (r = i);
              var s,
                $,
                u = 2147483647,
                c = 36,
                l = /^xn--/,
                d = /[^\x20-\x7E]/,
                h = /[\x2E\u3002\uFF0E\uFF61]/g,
                p = {
                  overflow: "Overflow: input needs wider integers to process",
                  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                  "invalid-input": "Invalid input"
                },
                f = Math.floor,
                m = String.fromCharCode;
              function g(e) {
                throw new RangeError(p[e]);
              }
              function b(e, t) {
                for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
                return r;
              }
              function y(e, t) {
                var n = e.split("@"),
                  r = "";
                return n.length > 1 && ((r = n[0] + "@"), (e = n[1])), r + b((e = e.replace(h, ".")).split("."), t).join(".");
              }
              function v(e) {
                for (var t, n, r = [], a = 0, o = e.length; a < o; )
                  (t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < o
                    ? 56320 == (64512 & (n = e.charCodeAt(a++)))
                      ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                      : (r.push(t), a--)
                    : r.push(t);
                return r;
              }
              function k(e) {
                return b(e, function (e) {
                  var t = "";
                  return e > 65535 && ((t += m((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (t += m(e));
                }).join("");
              }
              function _(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
              }
              function w(e, t, n) {
                var r = 0;
                for (e = n ? f(e / 700) : e >> 1, e += f(e / t); e > 455; r += c) e = f(e / 35);
                return f(r + (36 * e) / (e + 38));
              }
              function x(e) {
                var t,
                  n,
                  r,
                  a,
                  o,
                  i,
                  s,
                  $,
                  l,
                  d,
                  h,
                  p = [],
                  m = e.length,
                  b = 0,
                  y = 128,
                  v = 72;
                for ((n = e.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r)
                  e.charCodeAt(r) >= 128 && g("not-basic"), p.push(e.charCodeAt(r));
                for (a = n > 0 ? n + 1 : 0; a < m; ) {
                  for (
                    o = b, i = 1, s = c;
                    a >= m && g("invalid-input"),
                      (($ = (h = e.charCodeAt(a++)) - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : c) >= c ||
                        $ > f((u - b) / i)) &&
                        g("overflow"),
                      (b += $ * i),
                      !($ < (l = s <= v ? 1 : s >= v + 26 ? 26 : s - v));
                    s += c
                  )
                    i > f(u / (d = c - l)) && g("overflow"), (i *= d);
                  (v = w(b - o, (t = p.length + 1), 0 == o)),
                    f(b / t) > u - y && g("overflow"),
                    (y += f(b / t)),
                    (b %= t),
                    p.splice(b++, 0, y);
                }
                return k(p);
              }
              function j(e) {
                var t,
                  n,
                  r,
                  a,
                  o,
                  i,
                  s,
                  $,
                  l,
                  d,
                  h,
                  p,
                  b,
                  y,
                  k,
                  x = [];
                for (p = (e = v(e)).length, t = 128, n = 0, o = 72, i = 0; i < p; ++i) (h = e[i]) < 128 && x.push(m(h));
                for (r = a = x.length, a && x.push("-"); r < p; ) {
                  for (s = u, i = 0; i < p; ++i) (h = e[i]) >= t && h < s && (s = h);
                  for (s - t > f((u - n) / (b = r + 1)) && g("overflow"), n += (s - t) * b, t = s, i = 0; i < p; ++i)
                    if (((h = e[i]) < t && ++n > u && g("overflow"), h == t)) {
                      for ($ = n, l = c; !($ < (d = l <= o ? 1 : l >= o + 26 ? 26 : l - o)); l += c)
                        (k = $ - d), (y = c - d), x.push(m(_(d + (k % y), 0))), ($ = f(k / y));
                      x.push(m(_($, 0))), (o = w(n, b, r == a)), (n = 0), ++r;
                    }
                  ++n, ++t;
                }
                return x.join("");
              }
              if (
                ((s = {
                  version: "1.4.1",
                  ucs2: { decode: v, encode: k },
                  decode: x,
                  encode: j,
                  toASCII: function (e) {
                    return y(e, function (e) {
                      return d.test(e) ? "xn--" + j(e) : e;
                    });
                  },
                  toUnicode: function (e) {
                    return y(e, function (e) {
                      return l.test(e) ? x(e.slice(4).toLowerCase()) : e;
                    });
                  }
                }),
                "function" == typeof define && "object" == typeof define.amd && define.amd)
              )
                define("punycode", function () {
                  return s;
                });
              else if (a && o)
                if (t.exports == a) o.exports = s;
                else for ($ in s) s.hasOwnProperty($) && (a[$] = s[$]);
              else r.punycode = s;
            })(this);
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    140: [
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        t.exports = function (e, t, n, o) {
          (t = t || "&"), (n = n || "=");
          var i = {};
          if ("string" != typeof e || 0 === e.length) return i;
          var s = /\+/g;
          e = e.split(t);
          var $ = 1e3;
          o && "number" == typeof o.maxKeys && ($ = o.maxKeys);
          var u = e.length;
          $ > 0 && u > $ && (u = $);
          for (var c = 0; c < u; ++c) {
            var l,
              d,
              h,
              p,
              f = e[c].replace(s, "%20"),
              m = f.indexOf(n);
            m >= 0 ? ((l = f.substr(0, m)), (d = f.substr(m + 1))) : ((l = f), (d = "")),
              (h = decodeURIComponent(l)),
              (p = decodeURIComponent(d)),
              r(i, h) ? (a(i[h]) ? i[h].push(p) : (i[h] = [i[h], p])) : (i[h] = p);
          }
          return i;
        };
        var a =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };
      },
      {}
    ],
    141: [
      function (e, t, n) {
        "use strict";
        var r = function (e) {
          switch (typeof e) {
            case "string":
              return e;
            case "boolean":
              return e ? "true" : "false";
            case "number":
              return isFinite(e) ? e : "";
            default:
              return "";
          }
        };
        t.exports = function (e, t, n, s) {
          return (
            (t = t || "&"),
            (n = n || "="),
            null === e && (e = void 0),
            "object" == typeof e
              ? o(i(e), function (i) {
                  var s = encodeURIComponent(r(i)) + n;
                  return a(e[i])
                    ? o(e[i], function (e) {
                        return s + encodeURIComponent(r(e));
                      }).join(t)
                    : s + encodeURIComponent(r(e[i]));
                }).join(t)
              : s
              ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e))
              : ""
          );
        };
        var a =
          Array.isArray ||
          function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          };
        function o(e, t) {
          if (e.map) return e.map(t);
          for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
          return n;
        }
        var i =
          Object.keys ||
          function (e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          };
      },
      {}
    ],
    142: [
      function (e, t, n) {
        "use strict";
        (n.decode = n.parse = e("./decode")), (n.encode = n.stringify = e("./encode"));
      },
      { "./decode": 140, "./encode": 141 }
    ],
    143: [
      function (e, t, n) {
        "use strict";
        var r = e("./lib/suffix-trie.js").fromJson(e("./rules.json")),
          a = e("./lib/clean-host.js"),
          o = e("./lib/domain.js"),
          i = e("./lib/public-suffix.js"),
          s = e("./lib/subdomain.js"),
          $ = e("./lib/is-valid.js"),
          u = e("./lib/is-ip.js"),
          c = e("./lib/tld-exists.js");
        t.exports = (function e(t) {
          var n = t.rules || r || {},
            l = t.validHosts || [],
            d = t.extractHostname || a;
          function h(e, t) {
            var r = t || 5,
              a = { hostname: d(e), isValid: null, isIp: null, tldExists: !1, publicSuffix: null, domain: null, subdomain: null };
            return null === a.hostname
              ? ((a.isIp = !1), (a.isValid = !1), a)
              : ((a.isIp = u(a.hostname)),
                a.isIp
                  ? ((a.isValid = !0), a)
                  : ((a.isValid = $(a.hostname)),
                    !1 === a.isValid
                      ? a
                      : ((5 !== r && 1 !== r) || (a.tldExists = c(n, a.hostname)),
                        1 === r
                          ? a
                          : ((a.publicSuffix = i(n, a.hostname)),
                            2 === r
                              ? a
                              : ((a.domain = o(l, a.publicSuffix, a.hostname)), 3 === r || (a.subdomain = s(a.hostname, a.domain)), a)))));
          }
          return {
            extractHostname: d,
            isValid: $,
            parse: h,
            tldExists: function (e) {
              return h(e, 1).tldExists;
            },
            getPublicSuffix: function (e) {
              return h(e, 2).publicSuffix;
            },
            getDomain: function (e) {
              return h(e, 3).domain;
            },
            getSubdomain: function (e) {
              return h(e, 4).subdomain;
            },
            fromUserSettings: e
          };
        })({});
      },
      {
        "./lib/clean-host.js": 144,
        "./lib/domain.js": 145,
        "./lib/is-ip.js": 147,
        "./lib/is-valid.js": 148,
        "./lib/public-suffix.js": 149,
        "./lib/subdomain.js": 150,
        "./lib/suffix-trie.js": 151,
        "./lib/tld-exists.js": 152,
        "./rules.json": 153
      }
    ],
    144: [
      function (e, t, n) {
        var r = e("url"),
          a = e("./is-valid.js"),
          o = /^(([a-z][a-z0-9+.-]*)?:)?\/\//;
        function i(e) {
          return "." === e[e.length - 1] ? e.substr(0, e.length - 1) : e;
        }
        t.exports = function (e) {
          if (a(e)) return i(e);
          var t = e;
          "string" != typeof t && (t = "" + t);
          var n = (function (e) {
            return e.length > 0 && (e.charCodeAt(0) <= 32 || e.charCodeAt(e.length - 1) <= 32);
          })(t);
          n && (t = t.trim());
          var s = (function (e) {
            for (var t = 0; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (n >= 65 && n <= 90) return !0;
            }
            return !1;
          })(t);
          if ((s && (t = t.toLowerCase()), (s || n) && a(t))) return i(t);
          o.test(t) || (t = "//" + t);
          var $ = r.parse(t, null, !0);
          return $.hostname ? i($.hostname) : null;
        };
      },
      { "./is-valid.js": 148, url: 156 }
    ],
    145: [
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          return (r = t), (n = e).lastIndexOf(r) === n.length - r.length && (e.length === t.length || "." === e[e.length - t.length - 1]);
          var n, r;
        }
        t.exports = function (e, t, n) {
          for (var a = 0; a < e.length; a += 1) {
            var o = e[a];
            if (r(n, o)) return o;
          }
          return null === t || t.length === n.length
            ? null
            : (function (e, t) {
                var n = e.length - t.length - 2,
                  r = e.lastIndexOf(".", n);
                return -1 === r ? e : e.substr(r + 1);
              })(n, t);
        };
      },
      {}
    ],
    146: [
      function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          var t = e.lastIndexOf(".");
          return -1 === t ? null : e.substr(t + 1);
        };
      },
      {}
    ],
    147: [
      function (e, t, n) {
        "use strict";
        t.exports = function (e) {
          return (
            "string" == typeof e &&
            0 !== e.length &&
            ((function (e) {
              for (var t = !1, n = 0; n < e.length; n += 1) {
                var r = e.charCodeAt(n);
                if (58 === r) t = !0;
                else if (!((r >= 48 && r <= 57) || (r >= 97 && r <= 102))) return !1;
              }
              return t;
            })(e) ||
              (function (e) {
                for (var t = 0, n = 0; n < e.length; n += 1) {
                  var r = e.charCodeAt(n);
                  if (46 === r) t += 1;
                  else if (r < 48 || r > 57) return !1;
                }
                return 3 === t && "." !== e[0] && "." !== e[e.length - 1];
              })(e))
          );
        };
      },
      {}
    ],
    148: [
      function (e, t, n) {
        "use strict";
        function r(e) {
          return e >= 48 && e <= 57;
        }
        function a(e) {
          return e >= 97 && e <= 122;
        }
        t.exports = function (e) {
          if ("string" != typeof e) return !1;
          if (e.length > 255) return !1;
          if (0 === e.length) return !1;
          var t = e.charCodeAt(0);
          if (!a(t) && !r(t)) return !1;
          for (var n, o, i = -1, s = e.length, $ = 0; $ < s; $ += 1) {
            if (46 === (o = e.charCodeAt($))) {
              if ($ - i > 64 || 46 === n || 45 === n) return !1;
              i = $;
            } else if (!a(o) && !r(o) && 45 !== o) return !1;
            n = o;
          }
          return s - i - 1 <= 63 && 45 !== n;
        };
      },
      {}
    ],
    149: [
      function (e, t, n) {
        "use strict";
        var r = e("./from-host.js");
        t.exports = function (e, t) {
          if (e.hasTld(t)) return t;
          var n = e.suffixLookup(t);
          return null === n ? r(t) : n;
        };
      },
      { "./from-host.js": 146 }
    ],
    150: [
      function (e, t, n) {
        "use strict";
        t.exports = function (e, t) {
          return null === t ? null : e.substr(0, e.length - t.length - 1);
        };
      },
      {}
    ],
    151: [
      function (e, t, n) {
        "use strict";
        function r(e, t) {
          return null === e ? t : null === t || e < t ? e : t;
        }
        function a(e, t) {
          for (var n = e.parts, r = t, a = 0; a < n.length; a += 1) {
            var o = n[a],
              i = r[o];
            void 0 === i && ((i = Object.create(null)), (r[o] = i)), (r = i);
          }
          return (r.$ = 0), t;
        }
        function o(e, t, n) {
          var a,
            i = null;
          return (
            void 0 !== t.$ && (i = n + 1),
            -1 === n || (void 0 !== (a = t[e[n]]) && (i = r(i, o(e, a, n - 1))), void 0 !== (a = t["*"]) && (i = r(i, o(e, a, n - 1)))),
            i
          );
        }
        function i(e) {
          if (((this.exceptions = Object.create(null)), (this.rules = Object.create(null)), e))
            for (var t = 0; t < e.length; t += 1) {
              var n = e[t];
              n.exception ? a(n, this.exceptions) : a(n, this.rules);
            }
        }
        (i.fromJson = function (e) {
          var t = new i();
          return (t.exceptions = e.exceptions), (t.rules = e.rules), t;
        }),
          (i.prototype.hasTld = function (e) {
            return void 0 !== this.rules[e];
          }),
          (i.prototype.suffixLookup = function (e) {
            var t = e.split("."),
              n = o(t, this.rules, t.length - 1);
            if (null === n) return null;
            var r = o(t, this.exceptions, t.length - 1);
            return null !== r ? t.slice(r + 1).join(".") : t.slice(n).join(".");
          }),
          (t.exports = i);
      },
      {}
    ],
    152: [
      function (e, t, n) {
        "use strict";
        var r = e("./from-host.js");
        t.exports = function (e, t) {
          if (e.hasTld(t)) return !0;
          var n = r(t);
          return null !== n && e.hasTld(n);
        };
      },
      { "./from-host.js": 146 }
    ],
    153: [
      function (e, t, n) {
        t.exports = {
          exceptions: {
            ck: { www: { $: 0 } },
            jp: {
              kawasaki: { city: { $: 0 } },
              kitakyushu: { city: { $: 0 } },
              kobe: { city: { $: 0 } },
              nagoya: { city: { $: 0 } },
              sapporo: { city: { $: 0 } },
              sendai: { city: { $: 0 } },
              yokohama: { city: { $: 0 } }
            }
          },
          rules: {
            ac: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, mil: { $: 0 }, org: { $: 0 }, drr: { $: 0 } },
            ad: { $: 0, nom: { $: 0 } },
            ae: {
              $: 0,
              co: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sch: { $: 0 },
              ac: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              blogspot: { $: 0 }
            },
            aero: {
              $: 0,
              "accident-investigation": { $: 0 },
              "accident-prevention": { $: 0 },
              aerobatic: { $: 0 },
              aeroclub: { $: 0 },
              aerodrome: { $: 0 },
              agents: { $: 0 },
              aircraft: { $: 0 },
              airline: { $: 0 },
              airport: { $: 0 },
              "air-surveillance": { $: 0 },
              airtraffic: { $: 0 },
              "air-traffic-control": { $: 0 },
              ambulance: { $: 0 },
              amusement: { $: 0 },
              association: { $: 0 },
              author: { $: 0 },
              ballooning: { $: 0 },
              broker: { $: 0 },
              caa: { $: 0 },
              cargo: { $: 0 },
              catering: { $: 0 },
              certification: { $: 0 },
              championship: { $: 0 },
              charter: { $: 0 },
              civilaviation: { $: 0 },
              club: { $: 0 },
              conference: { $: 0 },
              consultant: { $: 0 },
              consulting: { $: 0 },
              control: { $: 0 },
              council: { $: 0 },
              crew: { $: 0 },
              design: { $: 0 },
              dgca: { $: 0 },
              educator: { $: 0 },
              emergency: { $: 0 },
              engine: { $: 0 },
              engineer: { $: 0 },
              entertainment: { $: 0 },
              equipment: { $: 0 },
              exchange: { $: 0 },
              express: { $: 0 },
              federation: { $: 0 },
              flight: { $: 0 },
              fuel: { $: 0 },
              gliding: { $: 0 },
              government: { $: 0 },
              groundhandling: { $: 0 },
              group: { $: 0 },
              hanggliding: { $: 0 },
              homebuilt: { $: 0 },
              insurance: { $: 0 },
              journal: { $: 0 },
              journalist: { $: 0 },
              leasing: { $: 0 },
              logistics: { $: 0 },
              magazine: { $: 0 },
              maintenance: { $: 0 },
              media: { $: 0 },
              microlight: { $: 0 },
              modelling: { $: 0 },
              navigation: { $: 0 },
              parachuting: { $: 0 },
              paragliding: { $: 0 },
              "passenger-association": { $: 0 },
              pilot: { $: 0 },
              press: { $: 0 },
              production: { $: 0 },
              recreation: { $: 0 },
              repbody: { $: 0 },
              res: { $: 0 },
              research: { $: 0 },
              rotorcraft: { $: 0 },
              safety: { $: 0 },
              scientist: { $: 0 },
              services: { $: 0 },
              show: { $: 0 },
              skydiving: { $: 0 },
              software: { $: 0 },
              student: { $: 0 },
              trader: { $: 0 },
              trading: { $: 0 },
              trainer: { $: 0 },
              union: { $: 0 },
              workinggroup: { $: 0 },
              works: { $: 0 }
            },
            af: { $: 0, gov: { $: 0 }, com: { $: 0 }, org: { $: 0 }, net: { $: 0 }, edu: { $: 0 } },
            ag: { $: 0, com: { $: 0 }, org: { $: 0 }, net: { $: 0 }, co: { $: 0 }, nom: { $: 0 } },
            ai: { $: 0, off: { $: 0 }, com: { $: 0 }, net: { $: 0 }, org: { $: 0 }, uwu: { $: 0 } },
            al: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 }, blogspot: { $: 0 } },
            am: {
              $: 0,
              co: { $: 0 },
              com: { $: 0 },
              commune: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              radio: { $: 0 },
              blogspot: { $: 0 },
              neko: { $: 0 },
              nyaa: { $: 0 }
            },
            ao: { $: 0, ed: { $: 0 }, gv: { $: 0 }, og: { $: 0 }, co: { $: 0 }, pb: { $: 0 }, it: { $: 0 } },
            aq: { $: 0 },
            ar: {
              $: 0,
              bet: { $: 0 },
              com: { $: 0, blogspot: { $: 0 } },
              coop: { $: 0 },
              edu: { $: 0 },
              gob: { $: 0 },
              gov: { $: 0 },
              int: { $: 0 },
              mil: { $: 0 },
              musica: { $: 0 },
              mutual: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              senasa: { $: 0 },
              tur: { $: 0 }
            },
            arpa: { $: 0, e164: { $: 0 }, "in-addr": { $: 0 }, ip6: { $: 0 }, iris: { $: 0 }, uri: { $: 0 }, urn: { $: 0 } },
            as: { $: 0, gov: { $: 0 } },
            asia: { $: 0, cloudns: { $: 0 } },
            at: {
              $: 0,
              ac: { $: 0, sth: { $: 0 } },
              co: { $: 0, blogspot: { $: 0 } },
              gv: { $: 0 },
              or: { $: 0 },
              funkfeuer: { wien: { $: 0 } },
              futurecms: { "*": { $: 0 }, ex: { "*": { $: 0 } }, in: { "*": { $: 0 } } },
              futurehosting: { $: 0 },
              futuremailing: { $: 0 },
              ortsinfo: { ex: { "*": { $: 0 } }, kunden: { "*": { $: 0 } } },
              biz: { $: 0 },
              info: { $: 0 },
              priv: { $: 0 },
              myspreadshop: { $: 0 },
              "12hp": { $: 0 },
              "2ix": { $: 0 },
              "4lima": { $: 0 },
              "lima-city": { $: 0 }
            },
            au: {
              $: 0,
              com: { $: 0, blogspot: { $: 0 }, cloudlets: { mel: { $: 0 } }, myspreadshop: { $: 0 } },
              net: { $: 0 },
              org: { $: 0 },
              edu: {
                $: 0,
                act: { $: 0 },
                catholic: { $: 0 },
                nsw: { $: 0, schools: { $: 0 } },
                nt: { $: 0 },
                qld: { $: 0 },
                sa: { $: 0 },
                tas: { $: 0 },
                vic: { $: 0 },
                wa: { $: 0 }
              },
              gov: { $: 0, qld: { $: 0 }, sa: { $: 0 }, tas: { $: 0 }, vic: { $: 0 }, wa: { $: 0 } },
              asn: { $: 0 },
              id: { $: 0 },
              info: { $: 0 },
              conf: { $: 0 },
              oz: { $: 0 },
              act: { $: 0 },
              nsw: { $: 0 },
              nt: { $: 0 },
              qld: { $: 0 },
              sa: { $: 0 },
              tas: { $: 0 },
              vic: { $: 0 },
              wa: { $: 0 }
            },
            aw: { $: 0, com: { $: 0 } },
            ax: { $: 0, be: { $: 0 }, cat: { $: 0 }, es: { $: 0 }, eu: { $: 0 }, gg: { $: 0 }, mc: { $: 0 }, us: { $: 0 }, xy: { $: 0 } },
            az: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              int: { $: 0 },
              gov: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              info: { $: 0 },
              pp: { $: 0 },
              mil: { $: 0 },
              name: { $: 0 },
              pro: { $: 0 },
              biz: { $: 0 }
            },
            ba: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              rs: { $: 0 },
              blogspot: { $: 0 }
            },
            bb: {
              $: 0,
              biz: { $: 0 },
              co: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              store: { $: 0 },
              tv: { $: 0 }
            },
            bd: { "*": { $: 0 } },
            be: {
              $: 0,
              ac: { $: 0 },
              webhosting: { $: 0 },
              blogspot: { $: 0 },
              interhostsolutions: { cloud: { $: 0 } },
              kuleuven: { ezproxy: { $: 0 } },
              myspreadshop: { $: 0 },
              transurl: { "*": { $: 0 } }
            },
            bf: { $: 0, gov: { $: 0 } },
            bg: {
              0: { $: 0 },
              1: { $: 0 },
              2: { $: 0 },
              3: { $: 0 },
              4: { $: 0 },
              5: { $: 0 },
              6: { $: 0 },
              7: { $: 0 },
              8: { $: 0 },
              9: { $: 0 },
              $: 0,
              a: { $: 0 },
              b: { $: 0 },
              c: { $: 0 },
              d: { $: 0 },
              e: { $: 0 },
              f: { $: 0 },
              g: { $: 0 },
              h: { $: 0 },
              i: { $: 0 },
              j: { $: 0 },
              k: { $: 0 },
              l: { $: 0 },
              m: { $: 0 },
              n: { $: 0 },
              o: { $: 0 },
              p: { $: 0 },
              q: { $: 0 },
              r: { $: 0 },
              s: { $: 0 },
              t: { $: 0 },
              u: { $: 0 },
              v: { $: 0 },
              w: { $: 0 },
              x: { $: 0 },
              y: { $: 0 },
              z: { $: 0 },
              blogspot: { $: 0 },
              barsy: { $: 0 }
            },
            bh: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 }, gov: { $: 0 } },
            bi: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, or: { $: 0 }, org: { $: 0 } },
            biz: {
              $: 0,
              cloudns: { $: 0 },
              jozi: { $: 0 },
              dyndns: { $: 0 },
              "for-better": { $: 0 },
              "for-more": { $: 0 },
              "for-some": { $: 0 },
              "for-the": { $: 0 },
              selfip: { $: 0 },
              webhop: { $: 0 },
              orx: { $: 0 },
              mmafan: { $: 0 },
              myftp: { $: 0 },
              "no-ip": { $: 0 },
              dscloud: { $: 0 }
            },
            bj: { $: 0, asso: { $: 0 }, barreau: { $: 0 }, gouv: { $: 0 }, blogspot: { $: 0 } },
            bm: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            bn: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, co: { $: 0 } },
            bo: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              gob: { $: 0 },
              int: { $: 0 },
              org: { $: 0 },
              net: { $: 0 },
              mil: { $: 0 },
              tv: { $: 0 },
              web: { $: 0 },
              academia: { $: 0 },
              agro: { $: 0 },
              arte: { $: 0 },
              blog: { $: 0 },
              bolivia: { $: 0 },
              ciencia: { $: 0 },
              cooperativa: { $: 0 },
              democracia: { $: 0 },
              deporte: { $: 0 },
              ecologia: { $: 0 },
              economia: { $: 0 },
              empresa: { $: 0 },
              indigena: { $: 0 },
              industria: { $: 0 },
              info: { $: 0 },
              medicina: { $: 0 },
              movimiento: { $: 0 },
              musica: { $: 0 },
              natural: { $: 0 },
              nombre: { $: 0 },
              noticias: { $: 0 },
              patria: { $: 0 },
              politica: { $: 0 },
              profesional: { $: 0 },
              plurinacional: { $: 0 },
              pueblo: { $: 0 },
              revista: { $: 0 },
              salud: { $: 0 },
              tecnologia: { $: 0 },
              tksat: { $: 0 },
              transporte: { $: 0 },
              wiki: { $: 0 }
            },
            br: {
              $: 0,
              "9guacu": { $: 0 },
              abc: { $: 0 },
              adm: { $: 0 },
              adv: { $: 0 },
              agr: { $: 0 },
              aju: { $: 0 },
              am: { $: 0 },
              anani: { $: 0 },
              aparecida: { $: 0 },
              app: { $: 0 },
              arq: { $: 0 },
              art: { $: 0 },
              ato: { $: 0 },
              b: { $: 0 },
              barueri: { $: 0 },
              belem: { $: 0 },
              bhz: { $: 0 },
              bib: { $: 0 },
              bio: { $: 0 },
              blog: { $: 0 },
              bmd: { $: 0 },
              boavista: { $: 0 },
              bsb: { $: 0 },
              campinagrande: { $: 0 },
              campinas: { $: 0 },
              caxias: { $: 0 },
              cim: { $: 0 },
              cng: { $: 0 },
              cnt: { $: 0 },
              com: { $: 0, blogspot: { $: 0 }, virtualcloud: { scale: { users: { $: 0 } } } },
              contagem: { $: 0 },
              coop: { $: 0 },
              coz: { $: 0 },
              cri: { $: 0 },
              cuiaba: { $: 0 },
              curitiba: { $: 0 },
              def: { $: 0 },
              des: { $: 0 },
              det: { $: 0 },
              dev: { $: 0 },
              ecn: { $: 0 },
              eco: { $: 0 },
              edu: { $: 0 },
              emp: { $: 0 },
              enf: { $: 0 },
              eng: { $: 0 },
              esp: { $: 0 },
              etc: { $: 0 },
              eti: { $: 0 },
              far: { $: 0 },
              feira: { $: 0 },
              flog: { $: 0 },
              floripa: { $: 0 },
              fm: { $: 0 },
              fnd: { $: 0 },
              fortal: { $: 0 },
              fot: { $: 0 },
              foz: { $: 0 },
              fst: { $: 0 },
              g12: { $: 0 },
              geo: { $: 0 },
              ggf: { $: 0 },
              goiania: { $: 0 },
              gov: {
                $: 0,
                ac: { $: 0 },
                al: { $: 0 },
                am: { $: 0 },
                ap: { $: 0 },
                ba: { $: 0 },
                ce: { $: 0 },
                df: { $: 0 },
                es: { $: 0 },
                go: { $: 0 },
                ma: { $: 0 },
                mg: { $: 0 },
                ms: { $: 0 },
                mt: { $: 0 },
                pa: { $: 0 },
                pb: { $: 0 },
                pe: { $: 0 },
                pi: { $: 0 },
                pr: { $: 0 },
                rj: { $: 0 },
                rn: { $: 0 },
                ro: { $: 0 },
                rr: { $: 0 },
                rs: { $: 0 },
                sc: { $: 0 },
                se: { $: 0 },
                sp: { $: 0 },
                to: { $: 0 }
              },
              gru: { $: 0 },
              imb: { $: 0 },
              ind: { $: 0 },
              inf: { $: 0 },
              jab: { $: 0 },
              jampa: { $: 0 },
              jdf: { $: 0 },
              joinville: { $: 0 },
              jor: { $: 0 },
              jus: { $: 0 },
              leg: {
                $: 0,
                ac: { $: 0 },
                al: { $: 0 },
                am: { $: 0 },
                ap: { $: 0 },
                ba: { $: 0 },
                ce: { $: 0 },
                df: { $: 0 },
                es: { $: 0 },
                go: { $: 0 },
                ma: { $: 0 },
                mg: { $: 0 },
                ms: { $: 0 },
                mt: { $: 0 },
                pa: { $: 0 },
                pb: { $: 0 },
                pe: { $: 0 },
                pi: { $: 0 },
                pr: { $: 0 },
                rj: { $: 0 },
                rn: { $: 0 },
                ro: { $: 0 },
                rr: { $: 0 },
                rs: { $: 0 },
                sc: { $: 0 },
                se: { $: 0 },
                sp: { $: 0 },
                to: { $: 0 }
              },
              lel: { $: 0 },
              log: { $: 0 },
              londrina: { $: 0 },
              macapa: { $: 0 },
              maceio: { $: 0 },
              manaus: { $: 0 },
              maringa: { $: 0 },
              mat: { $: 0 },
              med: { $: 0 },
              mil: { $: 0 },
              morena: { $: 0 },
              mp: { $: 0 },
              mus: { $: 0 },
              natal: { $: 0 },
              net: { $: 0 },
              niteroi: { $: 0 },
              nom: { "*": { $: 0 } },
              not: { $: 0 },
              ntr: { $: 0 },
              odo: { $: 0 },
              ong: { $: 0 },
              org: { $: 0 },
              osasco: { $: 0 },
              palmas: { $: 0 },
              poa: { $: 0 },
              ppg: { $: 0 },
              pro: { $: 0 },
              psc: { $: 0 },
              psi: { $: 0 },
              pvh: { $: 0 },
              qsl: { $: 0 },
              radio: { $: 0 },
              rec: { $: 0 },
              recife: { $: 0 },
              rep: { $: 0 },
              ribeirao: { $: 0 },
              rio: { $: 0 },
              riobranco: { $: 0 },
              riopreto: { $: 0 },
              salvador: { $: 0 },
              sampa: { $: 0 },
              santamaria: { $: 0 },
              santoandre: { $: 0 },
              saobernardo: { $: 0 },
              saogonca: { $: 0 },
              seg: { $: 0 },
              sjc: { $: 0 },
              slg: { $: 0 },
              slz: { $: 0 },
              sorocaba: { $: 0 },
              srv: { $: 0 },
              taxi: { $: 0 },
              tc: { $: 0 },
              tec: { $: 0 },
              teo: { $: 0 },
              the: { $: 0 },
              tmp: { $: 0 },
              trd: { $: 0 },
              tur: { $: 0 },
              tv: { $: 0 },
              udi: { $: 0 },
              vet: { $: 0 },
              vix: { $: 0 },
              vlog: { $: 0 },
              wiki: { $: 0 },
              zlg: { $: 0 }
            },
            bs: { $: 0, com: { $: 0 }, net: { $: 0 }, org: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, we: { $: 0 } },
            bt: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            bv: { $: 0 },
            bw: { $: 0, co: { $: 0 }, org: { $: 0 } },
            by: {
              $: 0,
              gov: { $: 0 },
              mil: { $: 0 },
              com: { $: 0, blogspot: { $: 0 } },
              of: { $: 0 },
              mycloud: { $: 0 },
              mediatech: { $: 0 }
            },
            bz: { $: 0, com: { $: 0 }, net: { $: 0 }, org: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, za: { $: 0 }, gsj: { $: 0 } },
            ca: {
              $: 0,
              ab: { $: 0 },
              bc: { $: 0 },
              mb: { $: 0 },
              nb: { $: 0 },
              nf: { $: 0 },
              nl: { $: 0 },
              ns: { $: 0 },
              nt: { $: 0 },
              nu: { $: 0 },
              on: { $: 0 },
              pe: { $: 0 },
              qc: { $: 0 },
              sk: { $: 0 },
              yk: { $: 0 },
              gc: { $: 0 },
              barsy: { $: 0 },
              awdev: { "*": { $: 0 } },
              co: { $: 0 },
              blogspot: { $: 0 },
              "no-ip": { $: 0 },
              myspreadshop: { $: 0 }
            },
            cat: { $: 0 },
            cc: {
              $: 0,
              cloudns: { $: 0 },
              ftpaccess: { $: 0 },
              "game-server": { $: 0 },
              myphotos: { $: 0 },
              scrapping: { $: 0 },
              twmail: { $: 0 },
              csx: { $: 0 },
              fantasyleague: { $: 0 },
              spawn: { instances: { $: 0 } }
            },
            cd: { $: 0, gov: { $: 0 } },
            cf: { $: 0, blogspot: { $: 0 } },
            cg: { $: 0 },
            ch: {
              $: 0,
              square7: { $: 0 },
              blogspot: { $: 0 },
              flow: { ae: { alp1: { $: 0 } }, appengine: { $: 0 } },
              "linkyard-cloud": { $: 0 },
              dnsking: { $: 0 },
              gotdns: { $: 0 },
              myspreadshop: { $: 0 },
              firenet: { "*": { $: 0 }, svc: { "*": { $: 0 } } },
              "12hp": { $: 0 },
              "2ix": { $: 0 },
              "4lima": { $: 0 },
              "lima-city": { $: 0 }
            },
            ci: {
              $: 0,
              org: { $: 0 },
              or: { $: 0 },
              com: { $: 0 },
              co: { $: 0 },
              edu: { $: 0 },
              ed: { $: 0 },
              ac: { $: 0 },
              net: { $: 0 },
              go: { $: 0 },
              asso: { $: 0 },
              "xn--aroport-bya": { $: 0 },
              int: { $: 0 },
              presse: { $: 0 },
              md: { $: 0 },
              gouv: { $: 0 },
              fin: { $: 0 },
              nl: { $: 0 }
            },
            ck: { "*": { $: 0 } },
            cl: { $: 0, co: { $: 0 }, gob: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, blogspot: { $: 0 } },
            cm: { $: 0, co: { $: 0 }, com: { $: 0 }, gov: { $: 0 }, net: { $: 0 } },
            cn: {
              $: 0,
              ac: { $: 0 },
              com: {
                $: 0,
                amazonaws: {
                  compute: { "*": { $: 0 } },
                  eb: { "cn-north-1": { $: 0 }, "cn-northwest-1": { $: 0 } },
                  elb: { "*": { $: 0 } },
                  "cn-north-1": { s3: { $: 0 } }
                }
              },
              edu: { $: 0 },
              gov: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              mil: { $: 0 },
              "xn--55qx5d": { $: 0 },
              "xn--io0a7i": { $: 0 },
              "xn--od0alg": { $: 0 },
              ah: { $: 0 },
              bj: { $: 0 },
              cq: { $: 0 },
              fj: { $: 0 },
              gd: { $: 0 },
              gs: { $: 0 },
              gz: { $: 0 },
              gx: { $: 0 },
              ha: { $: 0 },
              hb: { $: 0 },
              he: { $: 0 },
              hi: { $: 0 },
              hl: { $: 0 },
              hn: { $: 0 },
              jl: { $: 0 },
              js: { $: 0 },
              jx: { $: 0 },
              ln: { $: 0 },
              nm: { $: 0 },
              nx: { $: 0 },
              qh: { $: 0 },
              sc: { $: 0 },
              sd: { $: 0 },
              sh: { $: 0 },
              sn: { $: 0 },
              sx: { $: 0 },
              tj: { $: 0 },
              xj: { $: 0 },
              xz: { $: 0 },
              yn: { $: 0 },
              zj: { $: 0 },
              hk: { $: 0 },
              mo: { $: 0 },
              tw: { $: 0 },
              instantcloud: { $: 0 },
              quickconnect: { direct: { $: 0 } }
            },
            co: {
              $: 0,
              arts: { $: 0 },
              com: { $: 0, blogspot: { $: 0 } },
              edu: { $: 0 },
              firm: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 },
              int: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              nom: { $: 0 },
              org: { $: 0 },
              rec: { $: 0 },
              web: { $: 0 },
              carrd: { $: 0 },
              crd: { $: 0 },
              otap: { "*": { $: 0 } },
              leadpages: { $: 0 },
              lpages: { $: 0 },
              mypi: { $: 0 },
              n4t: { $: 0 },
              repl: { $: 0, id: { $: 0 } },
              supabase: { $: 0 }
            },
            com: {
              $: 0,
              devcdnaccesso: { "*": { $: 0 } },
              adobeaemcloud: { $: 0, dev: { "*": { $: 0 } } },
              airkitapps: { $: 0 },
              "airkitapps-au": { $: 0 },
              aivencloud: { $: 0 },
              kasserver: { $: 0 },
              amazonaws: {
                compute: { "*": { $: 0 } },
                "compute-1": { "*": { $: 0 } },
                "us-east-1": { $: 0, dualstack: { s3: { $: 0 } } },
                elb: { "*": { $: 0 } },
                s3: { $: 0 },
                "s3-ap-northeast-1": { $: 0 },
                "s3-ap-northeast-2": { $: 0 },
                "s3-ap-south-1": { $: 0 },
                "s3-ap-southeast-1": { $: 0 },
                "s3-ap-southeast-2": { $: 0 },
                "s3-ca-central-1": { $: 0 },
                "s3-eu-central-1": { $: 0 },
                "s3-eu-west-1": { $: 0 },
                "s3-eu-west-2": { $: 0 },
                "s3-eu-west-3": { $: 0 },
                "s3-external-1": { $: 0 },
                "s3-fips-us-gov-west-1": { $: 0 },
                "s3-sa-east-1": { $: 0 },
                "s3-us-gov-west-1": { $: 0 },
                "s3-us-east-2": { $: 0 },
                "s3-us-west-1": { $: 0 },
                "s3-us-west-2": { $: 0 },
                "ap-northeast-2": { s3: { $: 0 }, dualstack: { s3: { $: 0 } }, "s3-website": { $: 0 } },
                "ap-south-1": { s3: { $: 0 }, dualstack: { s3: { $: 0 } }, "s3-website": { $: 0 } },
                "ca-central-1": { s3: { $: 0 }, dualstack: { s3: { $: 0 } }, "s3-website": { $: 0 } },
                "eu-central-1": { s3: { $: 0 }, dualstack: { s3: { $: 0 } }, "s3-website": { $: 0 } },
                "eu-west-2": { s3: { $: 0 }, dualstack: { s3: { $: 0 } }, "s3-website": { $: 0 } },
                "eu-west-3": { s3: { $: 0 }, dualstack: { s3: { $: 0 } }, "s3-website": { $: 0 } },
                "us-east-2": { s3: { $: 0 }, dualstack: { s3: { $: 0 } }, "s3-website": { $: 0 } },
                "ap-northeast-1": { dualstack: { s3: { $: 0 } } },
                "ap-southeast-1": { dualstack: { s3: { $: 0 } } },
                "ap-southeast-2": { dualstack: { s3: { $: 0 } } },
                "eu-west-1": { dualstack: { s3: { $: 0 } } },
                "sa-east-1": { dualstack: { s3: { $: 0 } } },
                "s3-website-us-east-1": { $: 0 },
                "s3-website-us-west-1": { $: 0 },
                "s3-website-us-west-2": { $: 0 },
                "s3-website-ap-northeast-1": { $: 0 },
                "s3-website-ap-southeast-1": { $: 0 },
                "s3-website-ap-southeast-2": { $: 0 },
                "s3-website-eu-west-1": { $: 0 },
                "s3-website-sa-east-1": { $: 0 }
              },
              elasticbeanstalk: {
                $: 0,
                "ap-northeast-1": { $: 0 },
                "ap-northeast-2": { $: 0 },
                "ap-northeast-3": { $: 0 },
                "ap-south-1": { $: 0 },
                "ap-southeast-1": { $: 0 },
                "ap-southeast-2": { $: 0 },
                "ca-central-1": { $: 0 },
                "eu-central-1": { $: 0 },
                "eu-west-1": { $: 0 },
                "eu-west-2": { $: 0 },
                "eu-west-3": { $: 0 },
                "sa-east-1": { $: 0 },
                "us-east-1": { $: 0 },
                "us-east-2": { $: 0 },
                "us-gov-west-1": { $: 0 },
                "us-west-1": { $: 0 },
                "us-west-2": { $: 0 }
              },
              awsglobalaccelerator: { $: 0 },
              siiites: { $: 0 },
              appspacehosted: { $: 0 },
              appspaceusercontent: { $: 0 },
              "on-aptible": { $: 0 },
              myasustor: { $: 0 },
              "balena-devices": { $: 0 },
              betainabox: { $: 0 },
              boutir: { $: 0 },
              bplaced: { $: 0 },
              cafjs: { $: 0 },
              br: { $: 0 },
              cn: { $: 0 },
              de: { $: 0 },
              eu: { $: 0 },
              jpn: { $: 0 },
              mex: { $: 0 },
              ru: { $: 0 },
              sa: { $: 0 },
              uk: { $: 0 },
              us: { $: 0 },
              za: { $: 0 },
              ar: { $: 0 },
              hu: { $: 0 },
              kr: { $: 0 },
              no: { $: 0 },
              qc: { $: 0 },
              uy: { $: 0 },
              africa: { $: 0 },
              gr: { $: 0 },
              co: { $: 0 },
              jdevcloud: { $: 0 },
              wpdevcloud: { $: 0 },
              cloudcontrolled: { $: 0 },
              cloudcontrolapp: { $: 0 },
              trycloudflare: { $: 0 },
              "customer-oci": { "*": { $: 0 }, oci: { "*": { $: 0 } }, ocp: { "*": { $: 0 } }, ocs: { "*": { $: 0 } } },
              dattolocal: { $: 0 },
              dattorelay: { $: 0 },
              dattoweb: { $: 0 },
              mydatto: { $: 0 },
              builtwithdark: { $: 0 },
              datadetect: { demo: { $: 0 }, instance: { $: 0 } },
              ddns5: { $: 0 },
              discordsays: { $: 0 },
              discordsez: { $: 0 },
              drayddns: { $: 0 },
              dreamhosters: { $: 0 },
              mydrobo: { $: 0 },
              "dyndns-at-home": { $: 0 },
              "dyndns-at-work": { $: 0 },
              "dyndns-blog": { $: 0 },
              "dyndns-free": { $: 0 },
              "dyndns-home": { $: 0 },
              "dyndns-ip": { $: 0 },
              "dyndns-mail": { $: 0 },
              "dyndns-office": { $: 0 },
              "dyndns-pics": { $: 0 },
              "dyndns-remote": { $: 0 },
              "dyndns-server": { $: 0 },
              "dyndns-web": { $: 0 },
              "dyndns-wiki": { $: 0 },
              "dyndns-work": { $: 0 },
              blogdns: { $: 0 },
              cechire: { $: 0 },
              dnsalias: { $: 0 },
              dnsdojo: { $: 0 },
              doesntexist: { $: 0 },
              dontexist: { $: 0 },
              doomdns: { $: 0 },
              "dyn-o-saur": { $: 0 },
              dynalias: { $: 0 },
              "est-a-la-maison": { $: 0 },
              "est-a-la-masion": { $: 0 },
              "est-le-patron": { $: 0 },
              "est-mon-blogueur": { $: 0 },
              "from-ak": { $: 0 },
              "from-al": { $: 0 },
              "from-ar": { $: 0 },
              "from-ca": { $: 0 },
              "from-ct": { $: 0 },
              "from-dc": { $: 0 },
              "from-de": { $: 0 },
              "from-fl": { $: 0 },
              "from-ga": { $: 0 },
              "from-hi": { $: 0 },
              "from-ia": { $: 0 },
              "from-id": { $: 0 },
              "from-il": { $: 0 },
              "from-in": { $: 0 },
              "from-ks": { $: 0 },
              "from-ky": { $: 0 },
              "from-ma": { $: 0 },
              "from-md": { $: 0 },
              "from-mi": { $: 0 },
              "from-mn": { $: 0 },
              "from-mo": { $: 0 },
              "from-ms": { $: 0 },
              "from-mt": { $: 0 },
              "from-nc": { $: 0 },
              "from-nd": { $: 0 },
              "from-ne": { $: 0 },
              "from-nh": { $: 0 },
              "from-nj": { $: 0 },
              "from-nm": { $: 0 },
              "from-nv": { $: 0 },
              "from-oh": { $: 0 },
              "from-ok": { $: 0 },
              "from-or": { $: 0 },
              "from-pa": { $: 0 },
              "from-pr": { $: 0 },
              "from-ri": { $: 0 },
              "from-sc": { $: 0 },
              "from-sd": { $: 0 },
              "from-tn": { $: 0 },
              "from-tx": { $: 0 },
              "from-ut": { $: 0 },
              "from-va": { $: 0 },
              "from-vt": { $: 0 },
              "from-wa": { $: 0 },
              "from-wi": { $: 0 },
              "from-wv": { $: 0 },
              "from-wy": { $: 0 },
              getmyip: { $: 0 },
              gotdns: { $: 0 },
              "hobby-site": { $: 0 },
              homelinux: { $: 0 },
              homeunix: { $: 0 },
              iamallama: { $: 0 },
              "is-a-anarchist": { $: 0 },
              "is-a-blogger": { $: 0 },
              "is-a-bookkeeper": { $: 0 },
              "is-a-bulls-fan": { $: 0 },
              "is-a-caterer": { $: 0 },
              "is-a-chef": { $: 0 },
              "is-a-conservative": { $: 0 },
              "is-a-cpa": { $: 0 },
              "is-a-cubicle-slave": { $: 0 },
              "is-a-democrat": { $: 0 },
              "is-a-designer": { $: 0 },
              "is-a-doctor": { $: 0 },
              "is-a-financialadvisor": { $: 0 },
              "is-a-geek": { $: 0 },
              "is-a-green": { $: 0 },
              "is-a-guru": { $: 0 },
              "is-a-hard-worker": { $: 0 },
              "is-a-hunter": { $: 0 },
              "is-a-landscaper": { $: 0 },
              "is-a-lawyer": { $: 0 },
              "is-a-liberal": { $: 0 },
              "is-a-libertarian": { $: 0 },
              "is-a-llama": { $: 0 },
              "is-a-musician": { $: 0 },
              "is-a-nascarfan": { $: 0 },
              "is-a-nurse": { $: 0 },
              "is-a-painter": { $: 0 },
              "is-a-personaltrainer": { $: 0 },
              "is-a-photographer": { $: 0 },
              "is-a-player": { $: 0 },
              "is-a-republican": { $: 0 },
              "is-a-rockstar": { $: 0 },
              "is-a-socialist": { $: 0 },
              "is-a-student": { $: 0 },
              "is-a-teacher": { $: 0 },
              "is-a-techie": { $: 0 },
              "is-a-therapist": { $: 0 },
              "is-an-accountant": { $: 0 },
              "is-an-actor": { $: 0 },
              "is-an-actress": { $: 0 },
              "is-an-anarchist": { $: 0 },
              "is-an-artist": { $: 0 },
              "is-an-engineer": { $: 0 },
              "is-an-entertainer": { $: 0 },
              "is-certified": { $: 0 },
              "is-gone": { $: 0 },
              "is-into-anime": { $: 0 },
              "is-into-cars": { $: 0 },
              "is-into-cartoons": { $: 0 },
              "is-into-games": { $: 0 },
              "is-leet": { $: 0 },
              "is-not-certified": { $: 0 },
              "is-slick": { $: 0 },
              "is-uberleet": { $: 0 },
              "is-with-theband": { $: 0 },
              "isa-geek": { $: 0 },
              "isa-hockeynut": { $: 0 },
              issmarterthanyou: { $: 0 },
              "likes-pie": { $: 0 },
              likescandy: { $: 0 },
              "neat-url": { $: 0 },
              "saves-the-whales": { $: 0 },
              selfip: { $: 0 },
              "sells-for-less": { $: 0 },
              "sells-for-u": { $: 0 },
              servebbs: { $: 0 },
              "simple-url": { $: 0 },
              "space-to-rent": { $: 0 },
              "teaches-yoga": { $: 0 },
              writesthisblog: { $: 0 },
              digitaloceanspaces: { "*": { $: 0 } },
              ddnsfree: { $: 0 },
              ddnsgeek: { $: 0 },
              giize: { $: 0 },
              gleeze: { $: 0 },
              kozow: { $: 0 },
              loseyourip: { $: 0 },
              ooguy: { $: 0 },
              theworkpc: { $: 0 },
              mytuleap: { $: 0 },
              "tuleap-partners": { $: 0 },
              encoreapi: { $: 0 },
              evennode: {
                "eu-1": { $: 0 },
                "eu-2": { $: 0 },
                "eu-3": { $: 0 },
                "eu-4": { $: 0 },
                "us-1": { $: 0 },
                "us-2": { $: 0 },
                "us-3": { $: 0 },
                "us-4": { $: 0 }
              },
              onfabrica: { $: 0 },
              fbsbx: { apps: { $: 0 } },
              "fastly-terrarium": { $: 0 },
              "fastvps-server": { $: 0 },
              mydobiss: { $: 0 },
              firebaseapp: { $: 0 },
              fldrv: { $: 0 },
              forgeblocks: { $: 0 },
              framercanvas: { $: 0 },
              "freebox-os": { $: 0 },
              freeboxos: { $: 0 },
              freemyip: { $: 0 },
              gentapps: { $: 0 },
              gentlentapis: { $: 0 },
              githubusercontent: { $: 0 },
              "0emm": { "*": { $: 0 } },
              appspot: { $: 0, r: { "*": { $: 0 } } },
              codespot: { $: 0 },
              googleapis: { $: 0 },
              googlecode: { $: 0 },
              pagespeedmobilizer: { $: 0 },
              publishproxy: { $: 0 },
              withgoogle: { $: 0 },
              withyoutube: { $: 0 },
              blogspot: { $: 0 },
              awsmppl: { $: 0 },
              herokuapp: { $: 0 },
              herokussl: { $: 0 },
              myravendb: { $: 0 },
              impertrixcdn: { $: 0 },
              impertrix: { $: 0 },
              smushcdn: { $: 0 },
              wphostedmail: { $: 0 },
              wpmucdn: { $: 0 },
              pixolino: { $: 0 },
              amscompute: { $: 0 },
              clicketcloud: { $: 0 },
              dopaas: { $: 0 },
              hidora: { $: 0 },
              "hosted-by-previder": { paas: { $: 0 } },
              hosteur: { "rag-cloud": { $: 0 }, "rag-cloud-ch": { $: 0 } },
              "ik-server": { jcloud: { $: 0 }, "jcloud-ver-jpc": { $: 0 } },
              jelastic: { demo: { $: 0 } },
              kilatiron: { $: 0 },
              massivegrid: { paas: { $: 0 } },
              wafaicloud: { jed: { $: 0 }, lon: { $: 0 }, ryd: { $: 0 } },
              joyent: { cns: { "*": { $: 0 } } },
              ktistory: { $: 0 },
              lpusercontent: { $: 0 },
              lmpm: { app: { $: 0 } },
              linode: { members: { $: 0 }, nodebalancer: { "*": { $: 0 } } },
              linodeobjects: { "*": { $: 0 } },
              linodeusercontent: { ip: { $: 0 } },
              barsycenter: { $: 0 },
              barsyonline: { $: 0 },
              mazeplay: { $: 0 },
              miniserver: { $: 0 },
              meteorapp: { $: 0, eu: { $: 0 } },
              hostedpi: { $: 0 },
              "mythic-beasts": {
                customer: { $: 0 },
                caracal: { $: 0 },
                fentiger: { $: 0 },
                lynx: { $: 0 },
                ocelot: { $: 0 },
                oncilla: { $: 0 },
                onza: { $: 0 },
                sphinx: { $: 0 },
                vs: { $: 0 },
                x: { $: 0 },
                yali: { $: 0 }
              },
              nospamproxy: { cloud: { $: 0 } },
              "4u": { $: 0 },
              nfshost: { $: 0 },
              "001www": { $: 0 },
              ddnslive: { $: 0 },
              myiphost: { $: 0 },
              blogsyte: { $: 0 },
              ciscofreak: { $: 0 },
              damnserver: { $: 0 },
              ditchyourip: { $: 0 },
              dnsiskinky: { $: 0 },
              dynns: { $: 0 },
              geekgalaxy: { $: 0 },
              "health-carereform": { $: 0 },
              homesecuritymac: { $: 0 },
              homesecuritypc: { $: 0 },
              myactivedirectory: { $: 0 },
              mysecuritycamera: { $: 0 },
              "net-freaks": { $: 0 },
              onthewifi: { $: 0 },
              point2this: { $: 0 },
              quicksytes: { $: 0 },
              securitytactics: { $: 0 },
              serveexchange: { $: 0 },
              servehumour: { $: 0 },
              servep2p: { $: 0 },
              servesarcasm: { $: 0 },
              stufftoread: { $: 0 },
              unusualperson: { $: 0 },
              workisboring: { $: 0 },
              "3utilities": { $: 0 },
              ddnsking: { $: 0 },
              myvnc: { $: 0 },
              servebeer: { $: 0 },
              servecounterstrike: { $: 0 },
              serveftp: { $: 0 },
              servegame: { $: 0 },
              servehalflife: { $: 0 },
              servehttp: { $: 0 },
              serveirc: { $: 0 },
              servemp3: { $: 0 },
              servepics: { $: 0 },
              servequake: { $: 0 },
              observableusercontent: { static: { $: 0 } },
              orsites: { $: 0 },
              operaunite: { $: 0 },
              "authgear-staging": { $: 0 },
              authgearapps: { $: 0 },
              skygearapp: { $: 0 },
              outsystemscloud: { $: 0 },
              ownprovider: { $: 0 },
              pgfog: { $: 0 },
              pagefrontapp: { $: 0 },
              pagexl: { $: 0 },
              paywhirl: { "*": { $: 0 } },
              gotpantheon: { $: 0 },
              "platter-app": { $: 0 },
              pleskns: { $: 0 },
              "postman-echo": { $: 0 },
              prgmr: { xen: { $: 0 } },
              pythonanywhere: { $: 0, eu: { $: 0 } },
              qualifioapp: { $: 0 },
              qbuser: { $: 0 },
              qa2: { $: 0 },
              "dev-myqnapcloud": { $: 0 },
              "alpha-myqnapcloud": { $: 0 },
              myqnapcloud: { $: 0 },
              quipelements: { "*": { $: 0 } },
              rackmaze: { $: 0 },
              rhcloud: { $: 0 },
              render: { app: { $: 0 } },
              onrender: { $: 0 },
              logoip: { $: 0 },
              scrysec: { $: 0 },
              "firewall-gateway": { $: 0 },
              myshopblocks: { $: 0 },
              myshopify: { $: 0 },
              shopitsite: { $: 0 },
              "1kapp": { $: 0 },
              appchizi: { $: 0 },
              applinzi: { $: 0 },
              sinaapp: { $: 0 },
              vipsinaapp: { $: 0 },
              "bounty-full": { $: 0, alpha: { $: 0 }, beta: { $: 0 } },
              "try-snowplow": { $: 0 },
              "stackhero-network": { $: 0 },
              "playstation-cloud": { $: 0 },
              myspreadshop: { $: 0 },
              stdlib: { api: { $: 0 } },
              "temp-dns": { $: 0 },
              dsmynas: { $: 0 },
              familyds: { $: 0 },
              "tb-hosting": { site: { $: 0 } },
              reservd: { $: 0 },
              thingdustdata: { $: 0 },
              bloxcms: { $: 0 },
              "townnews-staging": { $: 0 },
              typeform: { pro: { $: 0 } },
              hk: { $: 0 },
              vultrobjects: { "*": { $: 0 } },
              wafflecell: { $: 0 },
              "reserve-online": { $: 0 },
              hotelwithflight: { $: 0 },
              remotewd: { $: 0 },
              wiardweb: { pages: { $: 0 } },
              messwithdns: { $: 0 },
              "woltlab-demo": { $: 0 },
              wpenginepowered: { $: 0, js: { $: 0 } },
              wixsite: { $: 0 },
              xnbay: { $: 0, u2: { $: 0 }, "u2-local": { $: 0 } },
              yolasite: { $: 0 }
            },
            coop: { $: 0 },
            cr: { $: 0, ac: { $: 0 }, co: { $: 0 }, ed: { $: 0 }, fi: { $: 0 }, go: { $: 0 }, or: { $: 0 }, sa: { $: 0 } },
            cu: { $: 0, com: { $: 0 }, edu: { $: 0 }, org: { $: 0 }, net: { $: 0 }, gov: { $: 0 }, inf: { $: 0 } },
            cv: { $: 0, com: { $: 0 }, edu: { $: 0 }, int: { $: 0 }, nome: { $: 0 }, org: { $: 0 }, blogspot: { $: 0 } },
            cw: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            cx: { $: 0, gov: { $: 0 }, ath: { $: 0 }, info: { $: 0 } },
            cy: {
              $: 0,
              ac: { $: 0 },
              biz: { $: 0 },
              com: { $: 0, blogspot: { $: 0 }, scaleforce: { j: { $: 0 } } },
              ekloges: { $: 0 },
              gov: { $: 0 },
              ltd: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              press: { $: 0 },
              pro: { $: 0 },
              tm: { $: 0 }
            },
            cz: {
              $: 0,
              co: { $: 0 },
              realm: { $: 0 },
              e4: { $: 0 },
              blogspot: { $: 0 },
              metacentrum: { cloud: { "*": { $: 0 } }, custom: { $: 0 } },
              muni: { cloud: { flt: { $: 0 }, usr: { $: 0 } } }
            },
            de: {
              $: 0,
              bplaced: { $: 0 },
              square7: { $: 0 },
              com: { $: 0 },
              cosidns: { dyn: { $: 0 } },
              "dynamisches-dns": { $: 0 },
              dnsupdater: { $: 0 },
              "internet-dns": { $: 0 },
              "l-o-g-i-n": { $: 0 },
              dnshome: { $: 0 },
              fuettertdasnetz: { $: 0 },
              isteingeek: { $: 0 },
              istmein: { $: 0 },
              lebtimnetz: { $: 0 },
              leitungsen: { $: 0 },
              traeumtgerade: { $: 0 },
              ddnss: { $: 0, dyn: { $: 0 }, dyndns: { $: 0 } },
              dyndns1: { $: 0 },
              "dyn-ip24": { $: 0 },
              "home-webserver": { $: 0, dyn: { $: 0 } },
              "myhome-server": { $: 0 },
              frusky: { "*": { $: 0 } },
              goip: { $: 0 },
              blogspot: { $: 0 },
              "xn--gnstigbestellen-zvb": { $: 0 },
              "xn--gnstigliefern-wob": { $: 0 },
              "hs-heilbronn": { it: { pages: { $: 0 } } },
              "dyn-berlin": { $: 0 },
              "in-berlin": { $: 0 },
              "in-brb": { $: 0 },
              "in-butter": { $: 0 },
              "in-dsl": { $: 0 },
              "in-vpn": { $: 0 },
              "mein-iserv": { $: 0 },
              schulserver: { $: 0 },
              "test-iserv": { $: 0 },
              keymachine: { $: 0 },
              "git-repos": { $: 0 },
              "lcube-server": { $: 0 },
              "svn-repos": { $: 0 },
              barsy: { $: 0 },
              logoip: { $: 0 },
              "firewall-gateway": { $: 0 },
              "my-gateway": { $: 0 },
              "my-router": { $: 0 },
              spdns: { $: 0 },
              speedpartner: { customer: { $: 0 } },
              myspreadshop: { $: 0 },
              "taifun-dns": { $: 0 },
              "12hp": { $: 0 },
              "2ix": { $: 0 },
              "4lima": { $: 0 },
              "lima-city": { $: 0 },
              "dd-dns": { $: 0 },
              "dray-dns": { $: 0 },
              draydns: { $: 0 },
              "dyn-vpn": { $: 0 },
              dynvpn: { $: 0 },
              "mein-vigor": { $: 0 },
              "my-vigor": { $: 0 },
              "my-wan": { $: 0 },
              "syno-ds": { $: 0 },
              "synology-diskstation": { $: 0 },
              "synology-ds": { $: 0 },
              uberspace: { "*": { $: 0 } },
              virtualuser: { $: 0 },
              "virtual-user": { $: 0 },
              "community-pro": { $: 0 },
              diskussionsbereich: { $: 0 }
            },
            dj: { $: 0 },
            dk: {
              $: 0,
              biz: { $: 0 },
              co: { $: 0 },
              firm: { $: 0 },
              reg: { $: 0 },
              store: { $: 0 },
              blogspot: { $: 0 },
              myspreadshop: { $: 0 }
            },
            dm: { $: 0, com: { $: 0 }, net: { $: 0 }, org: { $: 0 }, edu: { $: 0 }, gov: { $: 0 } },
            do: {
              $: 0,
              art: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gob: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sld: { $: 0 },
              web: { $: 0 }
            },
            dz: {
              $: 0,
              art: { $: 0 },
              asso: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              org: { $: 0 },
              net: { $: 0 },
              pol: { $: 0 },
              soc: { $: 0 },
              tm: { $: 0 }
            },
            ec: {
              $: 0,
              com: { $: 0 },
              info: { $: 0 },
              net: { $: 0 },
              fin: { $: 0 },
              k12: { $: 0 },
              med: { $: 0 },
              pro: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              gob: { $: 0 },
              mil: { $: 0 },
              base: { $: 0 },
              official: { $: 0 }
            },
            edu: { $: 0, rit: { "git-pages": { $: 0 } } },
            ee: {
              $: 0,
              edu: { $: 0 },
              gov: { $: 0 },
              riik: { $: 0 },
              lib: { $: 0 },
              med: { $: 0 },
              com: { $: 0, blogspot: { $: 0 } },
              pri: { $: 0 },
              aip: { $: 0 },
              org: { $: 0 },
              fie: { $: 0 }
            },
            eg: {
              $: 0,
              com: { $: 0, blogspot: { $: 0 } },
              edu: { $: 0 },
              eun: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              name: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sci: { $: 0 }
            },
            er: { "*": { $: 0 } },
            es: {
              $: 0,
              com: { $: 0, blogspot: { $: 0 } },
              nom: { $: 0 },
              org: { $: 0 },
              gob: { $: 0 },
              edu: { $: 0 },
              myspreadshop: { $: 0 }
            },
            et: {
              $: 0,
              com: { $: 0 },
              gov: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              biz: { $: 0 },
              name: { $: 0 },
              info: { $: 0 },
              net: { $: 0 }
            },
            eu: {
              $: 0,
              airkitapps: { $: 0 },
              mycd: { $: 0 },
              cloudns: { $: 0 },
              dogado: { jelastic: { $: 0 } },
              barsy: { $: 0 },
              wellbeingzone: { $: 0 },
              spdns: { $: 0 },
              transurl: { "*": { $: 0 } },
              diskstation: { $: 0 }
            },
            fi: {
              $: 0,
              aland: { $: 0 },
              dy: { $: 0 },
              blogspot: { $: 0 },
              "xn--hkkinen-5wa": { $: 0 },
              iki: { $: 0 },
              cloudplatform: { fi: { $: 0 } },
              datacenter: { demo: { $: 0 }, paas: { $: 0 } },
              kapsi: { $: 0 },
              myspreadshop: { $: 0 }
            },
            fj: {
              $: 0,
              ac: { $: 0 },
              biz: { $: 0 },
              com: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 },
              mil: { $: 0 },
              name: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              pro: { $: 0 }
            },
            fk: { "*": { $: 0 } },
            fm: { com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 }, $: 0, radio: { $: 0 } },
            fo: { $: 0 },
            fr: {
              $: 0,
              asso: { $: 0 },
              com: { $: 0 },
              gouv: { $: 0 },
              nom: { $: 0 },
              prd: { $: 0 },
              tm: { $: 0 },
              aeroport: { $: 0 },
              avocat: { $: 0 },
              avoues: { $: 0 },
              cci: { $: 0 },
              chambagri: { $: 0 },
              "chirurgiens-dentistes": { $: 0 },
              "experts-comptables": { $: 0 },
              "geometre-expert": { $: 0 },
              greta: { $: 0 },
              "huissier-justice": { $: 0 },
              medecin: { $: 0 },
              notaires: { $: 0 },
              pharmacien: { $: 0 },
              port: { $: 0 },
              veterinaire: { $: 0 },
              "en-root": { $: 0 },
              "fbx-os": { $: 0 },
              fbxos: { $: 0 },
              "freebox-os": { $: 0 },
              freeboxos: { $: 0 },
              blogspot: { $: 0 },
              goupile: { $: 0 },
              "on-web": { $: 0 },
              "chirurgiens-dentistes-en-france": { $: 0 },
              myspreadshop: { $: 0 },
              ynh: { $: 0 }
            },
            ga: { $: 0 },
            gb: { $: 0 },
            gd: { edu: { $: 0 }, gov: { $: 0 }, $: 0 },
            ge: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, org: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, pvt: { $: 0 } },
            gf: { $: 0 },
            gg: { $: 0, co: { $: 0 }, net: { $: 0 }, org: { $: 0 }, kaas: { $: 0 }, cya: { $: 0 }, panel: { $: 0, daemon: { $: 0 } } },
            gh: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, org: { $: 0 }, mil: { $: 0 } },
            gi: { $: 0, com: { $: 0 }, ltd: { $: 0 }, gov: { $: 0 }, mod: { $: 0 }, edu: { $: 0 }, org: { $: 0 } },
            gl: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 }, biz: { $: 0 }, xx: { $: 0 } },
            gm: { $: 0 },
            gn: { $: 0, ac: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, org: { $: 0 }, net: { $: 0 } },
            gov: { $: 0 },
            gp: { $: 0, com: { $: 0 }, net: { $: 0 }, mobi: { $: 0 }, edu: { $: 0 }, org: { $: 0 }, asso: { $: 0 }, app: { $: 0 } },
            gq: { $: 0 },
            gr: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 }, gov: { $: 0 }, blogspot: { $: 0 } },
            gs: { $: 0 },
            gt: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              gob: { $: 0 },
              ind: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              blog: { $: 0 },
              de: { $: 0 },
              to: { $: 0 }
            },
            gu: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              guam: { $: 0 },
              info: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              web: { $: 0 }
            },
            gw: { $: 0 },
            gy: { $: 0, co: { $: 0 }, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, be: { $: 0 } },
            hk: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              idv: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              "xn--55qx5d": { $: 0 },
              "xn--wcvs22d": { $: 0 },
              "xn--lcvr32d": { $: 0 },
              "xn--mxtq1m": { $: 0 },
              "xn--gmqw5a": { $: 0 },
              "xn--ciqpn": { $: 0 },
              "xn--gmq050i": { $: 0 },
              "xn--zf0avx": { $: 0 },
              "xn--io0a7i": { $: 0 },
              "xn--mk0axi": { $: 0 },
              "xn--od0alg": { $: 0 },
              "xn--od0aq3b": { $: 0 },
              "xn--tn0ag": { $: 0 },
              "xn--uc0atv": { $: 0 },
              "xn--uc0ay4a": { $: 0 },
              blogspot: { $: 0 },
              secaas: { $: 0 },
              ltd: { $: 0 },
              inc: { $: 0 }
            },
            hm: { $: 0 },
            hn: { $: 0, com: { $: 0 }, edu: { $: 0 }, org: { $: 0 }, net: { $: 0 }, mil: { $: 0 }, gob: { $: 0 }, cc: { $: 0 } },
            hr: { $: 0, iz: { $: 0 }, from: { $: 0 }, name: { $: 0 }, com: { $: 0 }, blogspot: { $: 0 }, free: { $: 0 } },
            ht: {
              $: 0,
              com: { $: 0 },
              shop: { $: 0 },
              firm: { $: 0 },
              info: { $: 0 },
              adult: { $: 0 },
              net: { $: 0 },
              pro: { $: 0 },
              org: { $: 0 },
              med: { $: 0 },
              art: { $: 0 },
              coop: { $: 0 },
              pol: { $: 0 },
              asso: { $: 0 },
              edu: { $: 0 },
              rel: { $: 0 },
              gouv: { $: 0 },
              perso: { $: 0 }
            },
            hu: {
              2e3: { $: 0 },
              $: 0,
              co: { $: 0 },
              info: { $: 0 },
              org: { $: 0 },
              priv: { $: 0 },
              sport: { $: 0 },
              tm: { $: 0 },
              agrar: { $: 0 },
              bolt: { $: 0 },
              casino: { $: 0 },
              city: { $: 0 },
              erotica: { $: 0 },
              erotika: { $: 0 },
              film: { $: 0 },
              forum: { $: 0 },
              games: { $: 0 },
              hotel: { $: 0 },
              ingatlan: { $: 0 },
              jogasz: { $: 0 },
              konyvelo: { $: 0 },
              lakas: { $: 0 },
              media: { $: 0 },
              news: { $: 0 },
              reklam: { $: 0 },
              sex: { $: 0 },
              shop: { $: 0 },
              suli: { $: 0 },
              szex: { $: 0 },
              tozsde: { $: 0 },
              utazas: { $: 0 },
              video: { $: 0 },
              blogspot: { $: 0 }
            },
            id: {
              $: 0,
              ac: { $: 0 },
              biz: { $: 0 },
              co: { $: 0, blogspot: { $: 0 } },
              desa: { $: 0 },
              go: { $: 0 },
              mil: { $: 0 },
              my: { $: 0, rss: { "*": { $: 0 } } },
              net: { $: 0 },
              or: { $: 0 },
              ponpes: { $: 0 },
              sch: { $: 0 },
              web: { $: 0 },
              flap: { $: 0 },
              forte: { $: 0 }
            },
            ie: { $: 0, gov: { $: 0 }, blogspot: { $: 0 }, myspreadshop: { $: 0 } },
            il: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0, ravpage: { $: 0 }, blogspot: { $: 0 }, tabitorder: { $: 0 } },
              gov: { $: 0 },
              idf: { $: 0 },
              k12: { $: 0 },
              muni: { $: 0 },
              net: { $: 0 },
              org: { $: 0 }
            },
            im: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0, ltd: { $: 0 }, plc: { $: 0 } },
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              tt: { $: 0 },
              tv: { $: 0 },
              ro: { $: 0 }
            },
            in: {
              $: 0,
              co: { $: 0 },
              firm: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              gen: { $: 0 },
              ind: { $: 0 },
              nic: { $: 0 },
              ac: { $: 0 },
              edu: { $: 0 },
              res: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              web: { $: 0 },
              cloudns: { $: 0 },
              blogspot: { $: 0 },
              barsy: { $: 0 },
              supabase: { $: 0 }
            },
            info: {
              $: 0,
              cloudns: { $: 0 },
              "dynamic-dns": { $: 0 },
              dyndns: { $: 0 },
              "barrel-of-knowledge": { $: 0 },
              "barrell-of-knowledge": { $: 0 },
              "for-our": { $: 0 },
              "groks-the": { $: 0 },
              "groks-this": { $: 0 },
              "here-for-more": { $: 0 },
              knowsitall: { $: 0 },
              selfip: { $: 0 },
              webhop: { $: 0 },
              barsy: { $: 0 },
              mayfirst: { $: 0 },
              forumz: { $: 0 },
              nsupdate: { $: 0 },
              dvrcam: { $: 0 },
              ilovecollege: { $: 0 },
              "no-ip": { $: 0 },
              dnsupdate: { $: 0 },
              "v-info": { $: 0 }
            },
            int: { $: 0, eu: { $: 0 } },
            io: {
              2038: { $: 0 },
              $: 0,
              com: { $: 0 },
              apigee: { $: 0 },
              "b-data": { $: 0 },
              backplaneapp: { $: 0 },
              banzaicloud: { app: { $: 0 }, backyards: { "*": { $: 0 } } },
              bitbucket: { $: 0 },
              bluebite: { $: 0 },
              boxfuse: { $: 0 },
              browsersafetymark: { $: 0 },
              bigv: { uk0: { $: 0 } },
              cleverapps: { $: 0 },
              dappnode: { dyndns: { $: 0 } },
              dedyn: { $: 0 },
              drud: { $: 0 },
              definima: { $: 0 },
              "fh-muenster": { $: 0 },
              shw: { $: 0 },
              forgerock: { id: { $: 0 } },
              ghost: { $: 0 },
              github: { $: 0 },
              gitlab: { $: 0 },
              lolipop: { $: 0 },
              "hasura-app": { $: 0 },
              hostyhosting: { $: 0 },
              moonscale: { "*": { $: 0 } },
              beebyte: { paas: { $: 0 } },
              beebyteapp: { sekd1: { $: 0 } },
              jele: { $: 0 },
              unispace: { "cloud-fr1": { $: 0 } },
              webthings: { $: 0 },
              loginline: { $: 0 },
              barsy: { $: 0 },
              azurecontainer: { "*": { $: 0 } },
              ngrok: { $: 0 },
              nodeart: { stage: { $: 0 } },
              nid: { $: 0 },
              pantheonsite: { $: 0 },
              dyn53: { $: 0 },
              pstmn: { $: 0, mock: { $: 0 } },
              protonet: { $: 0 },
              qoto: { $: 0 },
              qcx: { $: 0, sys: { "*": { $: 0 } } },
              vaporcloud: { $: 0 },
              vbrplsbx: { g: { $: 0 } },
              "on-k3s": { "*": { $: 0 } },
              "on-rio": { "*": { $: 0 } },
              readthedocs: { $: 0 },
              resindevice: { $: 0 },
              resinstaging: { devices: { $: 0 } },
              hzc: { $: 0 },
              sandcats: { $: 0 },
              shiftcrypto: { $: 0 },
              shiftedit: { $: 0 },
              "mo-siemens": { $: 0 },
              musician: { $: 0 },
              lair: { apps: { $: 0 } },
              stolos: { "*": { $: 0 } },
              spacekit: { $: 0 },
              utwente: { $: 0 },
              s5y: { "*": { $: 0 } },
              edugit: { $: 0 },
              telebit: { $: 0 },
              thingdust: {
                dev: { cust: { $: 0 }, reservd: { $: 0 } },
                disrec: { cust: { $: 0 }, reservd: { $: 0 } },
                prod: { cust: { $: 0 } },
                testing: { cust: { $: 0 }, reservd: { $: 0 } }
              },
              tickets: { $: 0 },
              upli: { $: 0 },
              wedeploy: { $: 0 },
              editorx: { $: 0 },
              basicserver: { $: 0 },
              virtualserver: { $: 0 }
            },
            iq: { $: 0, gov: { $: 0 }, edu: { $: 0 }, mil: { $: 0 }, com: { $: 0 }, org: { $: 0 }, net: { $: 0 } },
            ir: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0 },
              gov: { $: 0 },
              id: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sch: { $: 0 },
              "xn--mgba3a4f16a": { $: 0 },
              "xn--mgba3a4fra": { $: 0 }
            },
            is: {
              $: 0,
              net: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              org: { $: 0 },
              int: { $: 0 },
              cupcake: { $: 0 },
              blogspot: { $: 0 }
            },
            it: {
              $: 0,
              gov: { $: 0 },
              edu: { $: 0 },
              abr: { $: 0 },
              abruzzo: { $: 0 },
              "aosta-valley": { $: 0 },
              aostavalley: { $: 0 },
              bas: { $: 0 },
              basilicata: { $: 0 },
              cal: { $: 0 },
              calabria: { $: 0 },
              cam: { $: 0 },
              campania: { $: 0 },
              "emilia-romagna": { $: 0 },
              emiliaromagna: { $: 0 },
              emr: { $: 0 },
              "friuli-v-giulia": { $: 0 },
              "friuli-ve-giulia": { $: 0 },
              "friuli-vegiulia": { $: 0 },
              "friuli-venezia-giulia": { $: 0 },
              "friuli-veneziagiulia": { $: 0 },
              "friuli-vgiulia": { $: 0 },
              "friuliv-giulia": { $: 0 },
              "friulive-giulia": { $: 0 },
              friulivegiulia: { $: 0 },
              "friulivenezia-giulia": { $: 0 },
              friuliveneziagiulia: { $: 0 },
              friulivgiulia: { $: 0 },
              fvg: { $: 0 },
              laz: { $: 0 },
              lazio: { $: 0 },
              lig: { $: 0 },
              liguria: { $: 0 },
              lom: { $: 0 },
              lombardia: { $: 0 },
              lombardy: { $: 0 },
              lucania: { $: 0 },
              mar: { $: 0 },
              marche: { $: 0 },
              mol: { $: 0 },
              molise: { $: 0 },
              piedmont: { $: 0 },
              piemonte: { $: 0 },
              pmn: { $: 0 },
              pug: { $: 0 },
              puglia: { $: 0 },
              sar: { $: 0 },
              sardegna: { $: 0 },
              sardinia: { $: 0 },
              sic: { $: 0 },
              sicilia: { $: 0 },
              sicily: { $: 0 },
              taa: { $: 0 },
              tos: { $: 0 },
              toscana: { $: 0 },
              "trentin-sud-tirol": { $: 0 },
              "xn--trentin-sd-tirol-rzb": { $: 0 },
              "trentin-sudtirol": { $: 0 },
              "xn--trentin-sdtirol-7vb": { $: 0 },
              "trentin-sued-tirol": { $: 0 },
              "trentin-suedtirol": { $: 0 },
              "trentino-a-adige": { $: 0 },
              "trentino-aadige": { $: 0 },
              "trentino-alto-adige": { $: 0 },
              "trentino-altoadige": { $: 0 },
              "trentino-s-tirol": { $: 0 },
              "trentino-stirol": { $: 0 },
              "trentino-sud-tirol": { $: 0 },
              "xn--trentino-sd-tirol-c3b": { $: 0 },
              "trentino-sudtirol": { $: 0 },
              "xn--trentino-sdtirol-szb": { $: 0 },
              "trentino-sued-tirol": { $: 0 },
              "trentino-suedtirol": { $: 0 },
              trentino: { $: 0 },
              "trentinoa-adige": { $: 0 },
              trentinoaadige: { $: 0 },
              "trentinoalto-adige": { $: 0 },
              trentinoaltoadige: { $: 0 },
              "trentinos-tirol": { $: 0 },
              trentinostirol: { $: 0 },
              "trentinosud-tirol": { $: 0 },
              "xn--trentinosd-tirol-rzb": { $: 0 },
              trentinosudtirol: { $: 0 },
              "xn--trentinosdtirol-7vb": { $: 0 },
              "trentinosued-tirol": { $: 0 },
              trentinosuedtirol: { $: 0 },
              "trentinsud-tirol": { $: 0 },
              "xn--trentinsd-tirol-6vb": { $: 0 },
              trentinsudtirol: { $: 0 },
              "xn--trentinsdtirol-nsb": { $: 0 },
              "trentinsued-tirol": { $: 0 },
              trentinsuedtirol: { $: 0 },
              tuscany: { $: 0 },
              umb: { $: 0 },
              umbria: { $: 0 },
              "val-d-aosta": { $: 0 },
              "val-daosta": { $: 0 },
              "vald-aosta": { $: 0 },
              valdaosta: { $: 0 },
              "valle-aosta": { $: 0 },
              "valle-d-aosta": { $: 0 },
              "valle-daosta": { $: 0 },
              valleaosta: { $: 0 },
              "valled-aosta": { $: 0 },
              valledaosta: { $: 0 },
              "vallee-aoste": { $: 0 },
              "xn--valle-aoste-ebb": { $: 0 },
              "vallee-d-aoste": { $: 0 },
              "xn--valle-d-aoste-ehb": { $: 0 },
              valleeaoste: { $: 0 },
              "xn--valleaoste-e7a": { $: 0 },
              valleedaoste: { $: 0 },
              "xn--valledaoste-ebb": { $: 0 },
              vao: { $: 0 },
              vda: { $: 0 },
              ven: { $: 0 },
              veneto: { $: 0 },
              ag: { $: 0 },
              agrigento: { $: 0 },
              al: { $: 0 },
              alessandria: { $: 0 },
              "alto-adige": { $: 0 },
              altoadige: { $: 0 },
              an: { $: 0 },
              ancona: { $: 0 },
              "andria-barletta-trani": { $: 0 },
              "andria-trani-barletta": { $: 0 },
              andriabarlettatrani: { $: 0 },
              andriatranibarletta: { $: 0 },
              ao: { $: 0 },
              aosta: { $: 0 },
              aoste: { $: 0 },
              ap: { $: 0 },
              aq: { $: 0 },
              aquila: { $: 0 },
              ar: { $: 0 },
              arezzo: { $: 0 },
              "ascoli-piceno": { $: 0 },
              ascolipiceno: { $: 0 },
              asti: { $: 0 },
              at: { $: 0 },
              av: { $: 0 },
              avellino: { $: 0 },
              ba: { $: 0 },
              "balsan-sudtirol": { $: 0 },
              "xn--balsan-sdtirol-nsb": { $: 0 },
              "balsan-suedtirol": { $: 0 },
              balsan: { $: 0 },
              bari: { $: 0 },
              "barletta-trani-andria": { $: 0 },
              barlettatraniandria: { $: 0 },
              belluno: { $: 0 },
              benevento: { $: 0 },
              bergamo: { $: 0 },
              bg: { $: 0 },
              bi: { $: 0 },
              biella: { $: 0 },
              bl: { $: 0 },
              bn: { $: 0 },
              bo: { $: 0 },
              bologna: { $: 0 },
              "bolzano-altoadige": { $: 0 },
              bolzano: { $: 0 },
              "bozen-sudtirol": { $: 0 },
              "xn--bozen-sdtirol-2ob": { $: 0 },
              "bozen-suedtirol": { $: 0 },
              bozen: { $: 0 },
              br: { $: 0 },
              brescia: { $: 0 },
              brindisi: { $: 0 },
              bs: { $: 0 },
              bt: { $: 0 },
              "bulsan-sudtirol": { $: 0 },
              "xn--bulsan-sdtirol-nsb": { $: 0 },
              "bulsan-suedtirol": { $: 0 },
              bulsan: { $: 0 },
              bz: { $: 0 },
              ca: { $: 0 },
              cagliari: { $: 0 },
              caltanissetta: { $: 0 },
              "campidano-medio": { $: 0 },
              campidanomedio: { $: 0 },
              campobasso: { $: 0 },
              "carbonia-iglesias": { $: 0 },
              carboniaiglesias: { $: 0 },
              "carrara-massa": { $: 0 },
              carraramassa: { $: 0 },
              caserta: { $: 0 },
              catania: { $: 0 },
              catanzaro: { $: 0 },
              cb: { $: 0 },
              ce: { $: 0 },
              "cesena-forli": { $: 0 },
              "xn--cesena-forl-mcb": { $: 0 },
              cesenaforli: { $: 0 },
              "xn--cesenaforl-i8a": { $: 0 },
              ch: { $: 0 },
              chieti: { $: 0 },
              ci: { $: 0 },
              cl: { $: 0 },
              cn: { $: 0 },
              co: { $: 0 },
              como: { $: 0 },
              cosenza: { $: 0 },
              cr: { $: 0 },
              cremona: { $: 0 },
              crotone: { $: 0 },
              cs: { $: 0 },
              ct: { $: 0 },
              cuneo: { $: 0 },
              cz: { $: 0 },
              "dell-ogliastra": { $: 0 },
              dellogliastra: { $: 0 },
              en: { $: 0 },
              enna: { $: 0 },
              fc: { $: 0 },
              fe: { $: 0 },
              fermo: { $: 0 },
              ferrara: { $: 0 },
              fg: { $: 0 },
              fi: { $: 0 },
              firenze: { $: 0 },
              florence: { $: 0 },
              fm: { $: 0 },
              foggia: { $: 0 },
              "forli-cesena": { $: 0 },
              "xn--forl-cesena-fcb": { $: 0 },
              forlicesena: { $: 0 },
              "xn--forlcesena-c8a": { $: 0 },
              fr: { $: 0 },
              frosinone: { $: 0 },
              ge: { $: 0 },
              genoa: { $: 0 },
              genova: { $: 0 },
              go: { $: 0 },
              gorizia: { $: 0 },
              gr: { $: 0 },
              grosseto: { $: 0 },
              "iglesias-carbonia": { $: 0 },
              iglesiascarbonia: { $: 0 },
              im: { $: 0 },
              imperia: { $: 0 },
              is: { $: 0 },
              isernia: { $: 0 },
              kr: { $: 0 },
              "la-spezia": { $: 0 },
              laquila: { $: 0 },
              laspezia: { $: 0 },
              latina: { $: 0 },
              lc: { $: 0 },
              le: { $: 0 },
              lecce: { $: 0 },
              lecco: { $: 0 },
              li: { $: 0 },
              livorno: { $: 0 },
              lo: { $: 0 },
              lodi: { $: 0 },
              lt: { $: 0 },
              lu: { $: 0 },
              lucca: { $: 0 },
              macerata: { $: 0 },
              mantova: { $: 0 },
              "massa-carrara": { $: 0 },
              massacarrara: { $: 0 },
              matera: { $: 0 },
              mb: { $: 0 },
              mc: { $: 0 },
              me: { $: 0 },
              "medio-campidano": { $: 0 },
              mediocampidano: { $: 0 },
              messina: { $: 0 },
              mi: { $: 0 },
              milan: { $: 0 },
              milano: { $: 0 },
              mn: { $: 0 },
              mo: { $: 0 },
              modena: { $: 0 },
              "monza-brianza": { $: 0 },
              "monza-e-della-brianza": { $: 0 },
              monza: { $: 0 },
              monzabrianza: { $: 0 },
              monzaebrianza: { $: 0 },
              monzaedellabrianza: { $: 0 },
              ms: { $: 0 },
              mt: { $: 0 },
              na: { $: 0 },
              naples: { $: 0 },
              napoli: { $: 0 },
              no: { $: 0 },
              novara: { $: 0 },
              nu: { $: 0 },
              nuoro: { $: 0 },
              og: { $: 0 },
              ogliastra: { $: 0 },
              "olbia-tempio": { $: 0 },
              olbiatempio: { $: 0 },
              or: { $: 0 },
              oristano: { $: 0 },
              ot: { $: 0 },
              pa: { $: 0 },
              padova: { $: 0 },
              padua: { $: 0 },
              palermo: { $: 0 },
              parma: { $: 0 },
              pavia: { $: 0 },
              pc: { $: 0 },
              pd: { $: 0 },
              pe: { $: 0 },
              perugia: { $: 0 },
              "pesaro-urbino": { $: 0 },
              pesarourbino: { $: 0 },
              pescara: { $: 0 },
              pg: { $: 0 },
              pi: { $: 0 },
              piacenza: { $: 0 },
              pisa: { $: 0 },
              pistoia: { $: 0 },
              pn: { $: 0 },
              po: { $: 0 },
              pordenone: { $: 0 },
              potenza: { $: 0 },
              pr: { $: 0 },
              prato: { $: 0 },
              pt: { $: 0 },
              pu: { $: 0 },
              pv: { $: 0 },
              pz: { $: 0 },
              ra: { $: 0 },
              ragusa: { $: 0 },
              ravenna: { $: 0 },
              rc: { $: 0 },
              re: { $: 0 },
              "reggio-calabria": { $: 0 },
              "reggio-emilia": { $: 0 },
              reggiocalabria: { $: 0 },
              reggioemilia: { $: 0 },
              rg: { $: 0 },
              ri: { $: 0 },
              rieti: { $: 0 },
              rimini: { $: 0 },
              rm: { $: 0 },
              rn: { $: 0 },
              ro: { $: 0 },
              roma: { $: 0 },
              rome: { $: 0 },
              rovigo: { $: 0 },
              sa: { $: 0 },
              salerno: { $: 0 },
              sassari: { $: 0 },
              savona: { $: 0 },
              si: { $: 0 },
              siena: { $: 0 },
              siracusa: { $: 0 },
              so: { $: 0 },
              sondrio: { $: 0 },
              sp: { $: 0 },
              sr: { $: 0 },
              ss: { $: 0 },
              suedtirol: { $: 0 },
              "xn--sdtirol-n2a": { $: 0 },
              sv: { $: 0 },
              ta: { $: 0 },
              taranto: { $: 0 },
              te: { $: 0 },
              "tempio-olbia": { $: 0 },
              tempioolbia: { $: 0 },
              teramo: { $: 0 },
              terni: { $: 0 },
              tn: { $: 0 },
              to: { $: 0 },
              torino: { $: 0 },
              tp: { $: 0 },
              tr: { $: 0 },
              "trani-andria-barletta": { $: 0 },
              "trani-barletta-andria": { $: 0 },
              traniandriabarletta: { $: 0 },
              tranibarlettaandria: { $: 0 },
              trapani: { $: 0 },
              trento: { $: 0 },
              treviso: { $: 0 },
              trieste: { $: 0 },
              ts: { $: 0 },
              turin: { $: 0 },
              tv: { $: 0 },
              ud: { $: 0 },
              udine: { $: 0 },
              "urbino-pesaro": { $: 0 },
              urbinopesaro: { $: 0 },
              va: { $: 0 },
              varese: { $: 0 },
              vb: { $: 0 },
              vc: { $: 0 },
              ve: { $: 0 },
              venezia: { $: 0 },
              venice: { $: 0 },
              verbania: { $: 0 },
              vercelli: { $: 0 },
              verona: { $: 0 },
              vi: { $: 0 },
              "vibo-valentia": { $: 0 },
              vibovalentia: { $: 0 },
              vicenza: { $: 0 },
              viterbo: { $: 0 },
              vr: { $: 0 },
              vs: { $: 0 },
              vt: { $: 0 },
              vv: { $: 0 },
              blogspot: { $: 0 },
              neen: { jc: { $: 0 } },
              tim: { open: { jelastic: { cloud: { $: 0 } } } },
              "16-b": { $: 0 },
              "32-b": { $: 0 },
              "64-b": { $: 0 },
              myspreadshop: { $: 0 },
              syncloud: { $: 0 }
            },
            je: { $: 0, co: { $: 0 }, net: { $: 0 }, org: { $: 0 }, of: { $: 0 } },
            jm: { "*": { $: 0 } },
            jo: {
              $: 0,
              com: { $: 0 },
              org: { $: 0 },
              net: { $: 0 },
              edu: { $: 0 },
              sch: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              name: { $: 0 }
            },
            jobs: { $: 0 },
            jp: {
              $: 0,
              ac: { $: 0 },
              ad: { $: 0 },
              co: { $: 0 },
              ed: { $: 0 },
              go: { $: 0 },
              gr: { $: 0 },
              lg: { $: 0 },
              ne: { $: 0, aseinet: { user: { $: 0 } }, gehirn: { $: 0 } },
              or: { $: 0 },
              aichi: {
                $: 0,
                aisai: { $: 0 },
                ama: { $: 0 },
                anjo: { $: 0 },
                asuke: { $: 0 },
                chiryu: { $: 0 },
                chita: { $: 0 },
                fuso: { $: 0 },
                gamagori: { $: 0 },
                handa: { $: 0 },
                hazu: { $: 0 },
                hekinan: { $: 0 },
                higashiura: { $: 0 },
                ichinomiya: { $: 0 },
                inazawa: { $: 0 },
                inuyama: { $: 0 },
                isshiki: { $: 0 },
                iwakura: { $: 0 },
                kanie: { $: 0 },
                kariya: { $: 0 },
                kasugai: { $: 0 },
                kira: { $: 0 },
                kiyosu: { $: 0 },
                komaki: { $: 0 },
                konan: { $: 0 },
                kota: { $: 0 },
                mihama: { $: 0 },
                miyoshi: { $: 0 },
                nishio: { $: 0 },
                nisshin: { $: 0 },
                obu: { $: 0 },
                oguchi: { $: 0 },
                oharu: { $: 0 },
                okazaki: { $: 0 },
                owariasahi: { $: 0 },
                seto: { $: 0 },
                shikatsu: { $: 0 },
                shinshiro: { $: 0 },
                shitara: { $: 0 },
                tahara: { $: 0 },
                takahama: { $: 0 },
                tobishima: { $: 0 },
                toei: { $: 0 },
                togo: { $: 0 },
                tokai: { $: 0 },
                tokoname: { $: 0 },
                toyoake: { $: 0 },
                toyohashi: { $: 0 },
                toyokawa: { $: 0 },
                toyone: { $: 0 },
                toyota: { $: 0 },
                tsushima: { $: 0 },
                yatomi: { $: 0 }
              },
              akita: {
                $: 0,
                akita: { $: 0 },
                daisen: { $: 0 },
                fujisato: { $: 0 },
                gojome: { $: 0 },
                hachirogata: { $: 0 },
                happou: { $: 0 },
                higashinaruse: { $: 0 },
                honjo: { $: 0 },
                honjyo: { $: 0 },
                ikawa: { $: 0 },
                kamikoani: { $: 0 },
                kamioka: { $: 0 },
                katagami: { $: 0 },
                kazuno: { $: 0 },
                kitaakita: { $: 0 },
                kosaka: { $: 0 },
                kyowa: { $: 0 },
                misato: { $: 0 },
                mitane: { $: 0 },
                moriyoshi: { $: 0 },
                nikaho: { $: 0 },
                noshiro: { $: 0 },
                odate: { $: 0 },
                oga: { $: 0 },
                ogata: { $: 0 },
                semboku: { $: 0 },
                yokote: { $: 0 },
                yurihonjo: { $: 0 }
              },
              aomori: {
                $: 0,
                aomori: { $: 0 },
                gonohe: { $: 0 },
                hachinohe: { $: 0 },
                hashikami: { $: 0 },
                hiranai: { $: 0 },
                hirosaki: { $: 0 },
                itayanagi: { $: 0 },
                kuroishi: { $: 0 },
                misawa: { $: 0 },
                mutsu: { $: 0 },
                nakadomari: { $: 0 },
                noheji: { $: 0 },
                oirase: { $: 0 },
                owani: { $: 0 },
                rokunohe: { $: 0 },
                sannohe: { $: 0 },
                shichinohe: { $: 0 },
                shingo: { $: 0 },
                takko: { $: 0 },
                towada: { $: 0 },
                tsugaru: { $: 0 },
                tsuruta: { $: 0 }
              },
              chiba: {
                $: 0,
                abiko: { $: 0 },
                asahi: { $: 0 },
                chonan: { $: 0 },
                chosei: { $: 0 },
                choshi: { $: 0 },
                chuo: { $: 0 },
                funabashi: { $: 0 },
                futtsu: { $: 0 },
                hanamigawa: { $: 0 },
                ichihara: { $: 0 },
                ichikawa: { $: 0 },
                ichinomiya: { $: 0 },
                inzai: { $: 0 },
                isumi: { $: 0 },
                kamagaya: { $: 0 },
                kamogawa: { $: 0 },
                kashiwa: { $: 0 },
                katori: { $: 0 },
                katsuura: { $: 0 },
                kimitsu: { $: 0 },
                kisarazu: { $: 0 },
                kozaki: { $: 0 },
                kujukuri: { $: 0 },
                kyonan: { $: 0 },
                matsudo: { $: 0 },
                midori: { $: 0 },
                mihama: { $: 0 },
                minamiboso: { $: 0 },
                mobara: { $: 0 },
                mutsuzawa: { $: 0 },
                nagara: { $: 0 },
                nagareyama: { $: 0 },
                narashino: { $: 0 },
                narita: { $: 0 },
                noda: { $: 0 },
                oamishirasato: { $: 0 },
                omigawa: { $: 0 },
                onjuku: { $: 0 },
                otaki: { $: 0 },
                sakae: { $: 0 },
                sakura: { $: 0 },
                shimofusa: { $: 0 },
                shirako: { $: 0 },
                shiroi: { $: 0 },
                shisui: { $: 0 },
                sodegaura: { $: 0 },
                sosa: { $: 0 },
                tako: { $: 0 },
                tateyama: { $: 0 },
                togane: { $: 0 },
                tohnosho: { $: 0 },
                tomisato: { $: 0 },
                urayasu: { $: 0 },
                yachimata: { $: 0 },
                yachiyo: { $: 0 },
                yokaichiba: { $: 0 },
                yokoshibahikari: { $: 0 },
                yotsukaido: { $: 0 }
              },
              ehime: {
                $: 0,
                ainan: { $: 0 },
                honai: { $: 0 },
                ikata: { $: 0 },
                imabari: { $: 0 },
                iyo: { $: 0 },
                kamijima: { $: 0 },
                kihoku: { $: 0 },
                kumakogen: { $: 0 },
                masaki: { $: 0 },
                matsuno: { $: 0 },
                matsuyama: { $: 0 },
                namikata: { $: 0 },
                niihama: { $: 0 },
                ozu: { $: 0 },
                saijo: { $: 0 },
                seiyo: { $: 0 },
                shikokuchuo: { $: 0 },
                tobe: { $: 0 },
                toon: { $: 0 },
                uchiko: { $: 0 },
                uwajima: { $: 0 },
                yawatahama: { $: 0 }
              },
              fukui: {
                $: 0,
                echizen: { $: 0 },
                eiheiji: { $: 0 },
                fukui: { $: 0 },
                ikeda: { $: 0 },
                katsuyama: { $: 0 },
                mihama: { $: 0 },
                minamiechizen: { $: 0 },
                obama: { $: 0 },
                ohi: { $: 0 },
                ono: { $: 0 },
                sabae: { $: 0 },
                sakai: { $: 0 },
                takahama: { $: 0 },
                tsuruga: { $: 0 },
                wakasa: { $: 0 }
              },
              fukuoka: {
                $: 0,
                ashiya: { $: 0 },
                buzen: { $: 0 },
                chikugo: { $: 0 },
                chikuho: { $: 0 },
                chikujo: { $: 0 },
                chikushino: { $: 0 },
                chikuzen: { $: 0 },
                chuo: { $: 0 },
                dazaifu: { $: 0 },
                fukuchi: { $: 0 },
                hakata: { $: 0 },
                higashi: { $: 0 },
                hirokawa: { $: 0 },
                hisayama: { $: 0 },
                iizuka: { $: 0 },
                inatsuki: { $: 0 },
                kaho: { $: 0 },
                kasuga: { $: 0 },
                kasuya: { $: 0 },
                kawara: { $: 0 },
                keisen: { $: 0 },
                koga: { $: 0 },
                kurate: { $: 0 },
                kurogi: { $: 0 },
                kurume: { $: 0 },
                minami: { $: 0 },
                miyako: { $: 0 },
                miyama: { $: 0 },
                miyawaka: { $: 0 },
                mizumaki: { $: 0 },
                munakata: { $: 0 },
                nakagawa: { $: 0 },
                nakama: { $: 0 },
                nishi: { $: 0 },
                nogata: { $: 0 },
                ogori: { $: 0 },
                okagaki: { $: 0 },
                okawa: { $: 0 },
                oki: { $: 0 },
                omuta: { $: 0 },
                onga: { $: 0 },
                onojo: { $: 0 },
                oto: { $: 0 },
                saigawa: { $: 0 },
                sasaguri: { $: 0 },
                shingu: { $: 0 },
                shinyoshitomi: { $: 0 },
                shonai: { $: 0 },
                soeda: { $: 0 },
                sue: { $: 0 },
                tachiarai: { $: 0 },
                tagawa: { $: 0 },
                takata: { $: 0 },
                toho: { $: 0 },
                toyotsu: { $: 0 },
                tsuiki: { $: 0 },
                ukiha: { $: 0 },
                umi: { $: 0 },
                usui: { $: 0 },
                yamada: { $: 0 },
                yame: { $: 0 },
                yanagawa: { $: 0 },
                yukuhashi: { $: 0 }
              },
              fukushima: {
                $: 0,
                aizubange: { $: 0 },
                aizumisato: { $: 0 },
                aizuwakamatsu: { $: 0 },
                asakawa: { $: 0 },
                bandai: { $: 0 },
                date: { $: 0 },
                fukushima: { $: 0 },
                furudono: { $: 0 },
                futaba: { $: 0 },
                hanawa: { $: 0 },
                higashi: { $: 0 },
                hirata: { $: 0 },
                hirono: { $: 0 },
                iitate: { $: 0 },
                inawashiro: { $: 0 },
                ishikawa: { $: 0 },
                iwaki: { $: 0 },
                izumizaki: { $: 0 },
                kagamiishi: { $: 0 },
                kaneyama: { $: 0 },
                kawamata: { $: 0 },
                kitakata: { $: 0 },
                kitashiobara: { $: 0 },
                koori: { $: 0 },
                koriyama: { $: 0 },
                kunimi: { $: 0 },
                miharu: { $: 0 },
                mishima: { $: 0 },
                namie: { $: 0 },
                nango: { $: 0 },
                nishiaizu: { $: 0 },
                nishigo: { $: 0 },
                okuma: { $: 0 },
                omotego: { $: 0 },
                ono: { $: 0 },
                otama: { $: 0 },
                samegawa: { $: 0 },
                shimogo: { $: 0 },
                shirakawa: { $: 0 },
                showa: { $: 0 },
                soma: { $: 0 },
                sukagawa: { $: 0 },
                taishin: { $: 0 },
                tamakawa: { $: 0 },
                tanagura: { $: 0 },
                tenei: { $: 0 },
                yabuki: { $: 0 },
                yamato: { $: 0 },
                yamatsuri: { $: 0 },
                yanaizu: { $: 0 },
                yugawa: { $: 0 }
              },
              gifu: {
                $: 0,
                anpachi: { $: 0 },
                ena: { $: 0 },
                gifu: { $: 0 },
                ginan: { $: 0 },
                godo: { $: 0 },
                gujo: { $: 0 },
                hashima: { $: 0 },
                hichiso: { $: 0 },
                hida: { $: 0 },
                higashishirakawa: { $: 0 },
                ibigawa: { $: 0 },
                ikeda: { $: 0 },
                kakamigahara: { $: 0 },
                kani: { $: 0 },
                kasahara: { $: 0 },
                kasamatsu: { $: 0 },
                kawaue: { $: 0 },
                kitagata: { $: 0 },
                mino: { $: 0 },
                minokamo: { $: 0 },
                mitake: { $: 0 },
                mizunami: { $: 0 },
                motosu: { $: 0 },
                nakatsugawa: { $: 0 },
                ogaki: { $: 0 },
                sakahogi: { $: 0 },
                seki: { $: 0 },
                sekigahara: { $: 0 },
                shirakawa: { $: 0 },
                tajimi: { $: 0 },
                takayama: { $: 0 },
                tarui: { $: 0 },
                toki: { $: 0 },
                tomika: { $: 0 },
                wanouchi: { $: 0 },
                yamagata: { $: 0 },
                yaotsu: { $: 0 },
                yoro: { $: 0 }
              },
              gunma: {
                $: 0,
                annaka: { $: 0 },
                chiyoda: { $: 0 },
                fujioka: { $: 0 },
                higashiagatsuma: { $: 0 },
                isesaki: { $: 0 },
                itakura: { $: 0 },
                kanna: { $: 0 },
                kanra: { $: 0 },
                katashina: { $: 0 },
                kawaba: { $: 0 },
                kiryu: { $: 0 },
                kusatsu: { $: 0 },
                maebashi: { $: 0 },
                meiwa: { $: 0 },
                midori: { $: 0 },
                minakami: { $: 0 },
                naganohara: { $: 0 },
                nakanojo: { $: 0 },
                nanmoku: { $: 0 },
                numata: { $: 0 },
                oizumi: { $: 0 },
                ora: { $: 0 },
                ota: { $: 0 },
                shibukawa: { $: 0 },
                shimonita: { $: 0 },
                shinto: { $: 0 },
                showa: { $: 0 },
                takasaki: { $: 0 },
                takayama: { $: 0 },
                tamamura: { $: 0 },
                tatebayashi: { $: 0 },
                tomioka: { $: 0 },
                tsukiyono: { $: 0 },
                tsumagoi: { $: 0 },
                ueno: { $: 0 },
                yoshioka: { $: 0 }
              },
              hiroshima: {
                $: 0,
                asaminami: { $: 0 },
                daiwa: { $: 0 },
                etajima: { $: 0 },
                fuchu: { $: 0 },
                fukuyama: { $: 0 },
                hatsukaichi: { $: 0 },
                higashihiroshima: { $: 0 },
                hongo: { $: 0 },
                jinsekikogen: { $: 0 },
                kaita: { $: 0 },
                kui: { $: 0 },
                kumano: { $: 0 },
                kure: { $: 0 },
                mihara: { $: 0 },
                miyoshi: { $: 0 },
                naka: { $: 0 },
                onomichi: { $: 0 },
                osakikamijima: { $: 0 },
                otake: { $: 0 },
                saka: { $: 0 },
                sera: { $: 0 },
                seranishi: { $: 0 },
                shinichi: { $: 0 },
                shobara: { $: 0 },
                takehara: { $: 0 }
              },
              hokkaido: {
                $: 0,
                abashiri: { $: 0 },
                abira: { $: 0 },
                aibetsu: { $: 0 },
                akabira: { $: 0 },
                akkeshi: { $: 0 },
                asahikawa: { $: 0 },
                ashibetsu: { $: 0 },
                ashoro: { $: 0 },
                assabu: { $: 0 },
                atsuma: { $: 0 },
                bibai: { $: 0 },
                biei: { $: 0 },
                bifuka: { $: 0 },
                bihoro: { $: 0 },
                biratori: { $: 0 },
                chippubetsu: { $: 0 },
                chitose: { $: 0 },
                date: { $: 0 },
                ebetsu: { $: 0 },
                embetsu: { $: 0 },
                eniwa: { $: 0 },
                erimo: { $: 0 },
                esan: { $: 0 },
                esashi: { $: 0 },
                fukagawa: { $: 0 },
                fukushima: { $: 0 },
                furano: { $: 0 },
                furubira: { $: 0 },
                haboro: { $: 0 },
                hakodate: { $: 0 },
                hamatonbetsu: { $: 0 },
                hidaka: { $: 0 },
                higashikagura: { $: 0 },
                higashikawa: { $: 0 },
                hiroo: { $: 0 },
                hokuryu: { $: 0 },
                hokuto: { $: 0 },
                honbetsu: { $: 0 },
                horokanai: { $: 0 },
                horonobe: { $: 0 },
                ikeda: { $: 0 },
                imakane: { $: 0 },
                ishikari: { $: 0 },
                iwamizawa: { $: 0 },
                iwanai: { $: 0 },
                kamifurano: { $: 0 },
                kamikawa: { $: 0 },
                kamishihoro: { $: 0 },
                kamisunagawa: { $: 0 },
                kamoenai: { $: 0 },
                kayabe: { $: 0 },
                kembuchi: { $: 0 },
                kikonai: { $: 0 },
                kimobetsu: { $: 0 },
                kitahiroshima: { $: 0 },
                kitami: { $: 0 },
                kiyosato: { $: 0 },
                koshimizu: { $: 0 },
                kunneppu: { $: 0 },
                kuriyama: { $: 0 },
                kuromatsunai: { $: 0 },
                kushiro: { $: 0 },
                kutchan: { $: 0 },
                kyowa: { $: 0 },
                mashike: { $: 0 },
                matsumae: { $: 0 },
                mikasa: { $: 0 },
                minamifurano: { $: 0 },
                mombetsu: { $: 0 },
                moseushi: { $: 0 },
                mukawa: { $: 0 },
                muroran: { $: 0 },
                naie: { $: 0 },
                nakagawa: { $: 0 },
                nakasatsunai: { $: 0 },
                nakatombetsu: { $: 0 },
                nanae: { $: 0 },
                nanporo: { $: 0 },
                nayoro: { $: 0 },
                nemuro: { $: 0 },
                niikappu: { $: 0 },
                niki: { $: 0 },
                nishiokoppe: { $: 0 },
                noboribetsu: { $: 0 },
                numata: { $: 0 },
                obihiro: { $: 0 },
                obira: { $: 0 },
                oketo: { $: 0 },
                okoppe: { $: 0 },
                otaru: { $: 0 },
                otobe: { $: 0 },
                otofuke: { $: 0 },
                otoineppu: { $: 0 },
                oumu: { $: 0 },
                ozora: { $: 0 },
                pippu: { $: 0 },
                rankoshi: { $: 0 },
                rebun: { $: 0 },
                rikubetsu: { $: 0 },
                rishiri: { $: 0 },
                rishirifuji: { $: 0 },
                saroma: { $: 0 },
                sarufutsu: { $: 0 },
                shakotan: { $: 0 },
                shari: { $: 0 },
                shibecha: { $: 0 },
                shibetsu: { $: 0 },
                shikabe: { $: 0 },
                shikaoi: { $: 0 },
                shimamaki: { $: 0 },
                shimizu: { $: 0 },
                shimokawa: { $: 0 },
                shinshinotsu: { $: 0 },
                shintoku: { $: 0 },
                shiranuka: { $: 0 },
                shiraoi: { $: 0 },
                shiriuchi: { $: 0 },
                sobetsu: { $: 0 },
                sunagawa: { $: 0 },
                taiki: { $: 0 },
                takasu: { $: 0 },
                takikawa: { $: 0 },
                takinoue: { $: 0 },
                teshikaga: { $: 0 },
                tobetsu: { $: 0 },
                tohma: { $: 0 },
                tomakomai: { $: 0 },
                tomari: { $: 0 },
                toya: { $: 0 },
                toyako: { $: 0 },
                toyotomi: { $: 0 },
                toyoura: { $: 0 },
                tsubetsu: { $: 0 },
                tsukigata: { $: 0 },
                urakawa: { $: 0 },
                urausu: { $: 0 },
                uryu: { $: 0 },
                utashinai: { $: 0 },
                wakkanai: { $: 0 },
                wassamu: { $: 0 },
                yakumo: { $: 0 },
                yoichi: { $: 0 }
              },
              hyogo: {
                $: 0,
                aioi: { $: 0 },
                akashi: { $: 0 },
                ako: { $: 0 },
                amagasaki: { $: 0 },
                aogaki: { $: 0 },
                asago: { $: 0 },
                ashiya: { $: 0 },
                awaji: { $: 0 },
                fukusaki: { $: 0 },
                goshiki: { $: 0 },
                harima: { $: 0 },
                himeji: { $: 0 },
                ichikawa: { $: 0 },
                inagawa: { $: 0 },
                itami: { $: 0 },
                kakogawa: { $: 0 },
                kamigori: { $: 0 },
                kamikawa: { $: 0 },
                kasai: { $: 0 },
                kasuga: { $: 0 },
                kawanishi: { $: 0 },
                miki: { $: 0 },
                minamiawaji: { $: 0 },
                nishinomiya: { $: 0 },
                nishiwaki: { $: 0 },
                ono: { $: 0 },
                sanda: { $: 0 },
                sannan: { $: 0 },
                sasayama: { $: 0 },
                sayo: { $: 0 },
                shingu: { $: 0 },
                shinonsen: { $: 0 },
                shiso: { $: 0 },
                sumoto: { $: 0 },
                taishi: { $: 0 },
                taka: { $: 0 },
                takarazuka: { $: 0 },
                takasago: { $: 0 },
                takino: { $: 0 },
                tamba: { $: 0 },
                tatsuno: { $: 0 },
                toyooka: { $: 0 },
                yabu: { $: 0 },
                yashiro: { $: 0 },
                yoka: { $: 0 },
                yokawa: { $: 0 }
              },
              ibaraki: {
                $: 0,
                ami: { $: 0 },
                asahi: { $: 0 },
                bando: { $: 0 },
                chikusei: { $: 0 },
                daigo: { $: 0 },
                fujishiro: { $: 0 },
                hitachi: { $: 0 },
                hitachinaka: { $: 0 },
                hitachiomiya: { $: 0 },
                hitachiota: { $: 0 },
                ibaraki: { $: 0 },
                ina: { $: 0 },
                inashiki: { $: 0 },
                itako: { $: 0 },
                iwama: { $: 0 },
                joso: { $: 0 },
                kamisu: { $: 0 },
                kasama: { $: 0 },
                kashima: { $: 0 },
                kasumigaura: { $: 0 },
                koga: { $: 0 },
                miho: { $: 0 },
                mito: { $: 0 },
                moriya: { $: 0 },
                naka: { $: 0 },
                namegata: { $: 0 },
                oarai: { $: 0 },
                ogawa: { $: 0 },
                omitama: { $: 0 },
                ryugasaki: { $: 0 },
                sakai: { $: 0 },
                sakuragawa: { $: 0 },
                shimodate: { $: 0 },
                shimotsuma: { $: 0 },
                shirosato: { $: 0 },
                sowa: { $: 0 },
                suifu: { $: 0 },
                takahagi: { $: 0 },
                tamatsukuri: { $: 0 },
                tokai: { $: 0 },
                tomobe: { $: 0 },
                tone: { $: 0 },
                toride: { $: 0 },
                tsuchiura: { $: 0 },
                tsukuba: { $: 0 },
                uchihara: { $: 0 },
                ushiku: { $: 0 },
                yachiyo: { $: 0 },
                yamagata: { $: 0 },
                yawara: { $: 0 },
                yuki: { $: 0 }
              },
              ishikawa: {
                $: 0,
                anamizu: { $: 0 },
                hakui: { $: 0 },
                hakusan: { $: 0 },
                kaga: { $: 0 },
                kahoku: { $: 0 },
                kanazawa: { $: 0 },
                kawakita: { $: 0 },
                komatsu: { $: 0 },
                nakanoto: { $: 0 },
                nanao: { $: 0 },
                nomi: { $: 0 },
                nonoichi: { $: 0 },
                noto: { $: 0 },
                shika: { $: 0 },
                suzu: { $: 0 },
                tsubata: { $: 0 },
                tsurugi: { $: 0 },
                uchinada: { $: 0 },
                wajima: { $: 0 }
              },
              iwate: {
                $: 0,
                fudai: { $: 0 },
                fujisawa: { $: 0 },
                hanamaki: { $: 0 },
                hiraizumi: { $: 0 },
                hirono: { $: 0 },
                ichinohe: { $: 0 },
                ichinoseki: { $: 0 },
                iwaizumi: { $: 0 },
                iwate: { $: 0 },
                joboji: { $: 0 },
                kamaishi: { $: 0 },
                kanegasaki: { $: 0 },
                karumai: { $: 0 },
                kawai: { $: 0 },
                kitakami: { $: 0 },
                kuji: { $: 0 },
                kunohe: { $: 0 },
                kuzumaki: { $: 0 },
                miyako: { $: 0 },
                mizusawa: { $: 0 },
                morioka: { $: 0 },
                ninohe: { $: 0 },
                noda: { $: 0 },
                ofunato: { $: 0 },
                oshu: { $: 0 },
                otsuchi: { $: 0 },
                rikuzentakata: { $: 0 },
                shiwa: { $: 0 },
                shizukuishi: { $: 0 },
                sumita: { $: 0 },
                tanohata: { $: 0 },
                tono: { $: 0 },
                yahaba: { $: 0 },
                yamada: { $: 0 }
              },
              kagawa: {
                $: 0,
                ayagawa: { $: 0 },
                higashikagawa: { $: 0 },
                kanonji: { $: 0 },
                kotohira: { $: 0 },
                manno: { $: 0 },
                marugame: { $: 0 },
                mitoyo: { $: 0 },
                naoshima: { $: 0 },
                sanuki: { $: 0 },
                tadotsu: { $: 0 },
                takamatsu: { $: 0 },
                tonosho: { $: 0 },
                uchinomi: { $: 0 },
                utazu: { $: 0 },
                zentsuji: { $: 0 }
              },
              kagoshima: {
                $: 0,
                akune: { $: 0 },
                amami: { $: 0 },
                hioki: { $: 0 },
                isa: { $: 0 },
                isen: { $: 0 },
                izumi: { $: 0 },
                kagoshima: { $: 0 },
                kanoya: { $: 0 },
                kawanabe: { $: 0 },
                kinko: { $: 0 },
                kouyama: { $: 0 },
                makurazaki: { $: 0 },
                matsumoto: { $: 0 },
                minamitane: { $: 0 },
                nakatane: { $: 0 },
                nishinoomote: { $: 0 },
                satsumasendai: { $: 0 },
                soo: { $: 0 },
                tarumizu: { $: 0 },
                yusui: { $: 0 }
              },
              kanagawa: {
                $: 0,
                aikawa: { $: 0 },
                atsugi: { $: 0 },
                ayase: { $: 0 },
                chigasaki: { $: 0 },
                ebina: { $: 0 },
                fujisawa: { $: 0 },
                hadano: { $: 0 },
                hakone: { $: 0 },
                hiratsuka: { $: 0 },
                isehara: { $: 0 },
                kaisei: { $: 0 },
                kamakura: { $: 0 },
                kiyokawa: { $: 0 },
                matsuda: { $: 0 },
                minamiashigara: { $: 0 },
                miura: { $: 0 },
                nakai: { $: 0 },
                ninomiya: { $: 0 },
                odawara: { $: 0 },
                oi: { $: 0 },
                oiso: { $: 0 },
                sagamihara: { $: 0 },
                samukawa: { $: 0 },
                tsukui: { $: 0 },
                yamakita: { $: 0 },
                yamato: { $: 0 },
                yokosuka: { $: 0 },
                yugawara: { $: 0 },
                zama: { $: 0 },
                zushi: { $: 0 }
              },
              kochi: {
                $: 0,
                aki: { $: 0 },
                geisei: { $: 0 },
                hidaka: { $: 0 },
                higashitsuno: { $: 0 },
                ino: { $: 0 },
                kagami: { $: 0 },
                kami: { $: 0 },
                kitagawa: { $: 0 },
                kochi: { $: 0 },
                mihara: { $: 0 },
                motoyama: { $: 0 },
                muroto: { $: 0 },
                nahari: { $: 0 },
                nakamura: { $: 0 },
                nankoku: { $: 0 },
                nishitosa: { $: 0 },
                niyodogawa: { $: 0 },
                ochi: { $: 0 },
                okawa: { $: 0 },
                otoyo: { $: 0 },
                otsuki: { $: 0 },
                sakawa: { $: 0 },
                sukumo: { $: 0 },
                susaki: { $: 0 },
                tosa: { $: 0 },
                tosashimizu: { $: 0 },
                toyo: { $: 0 },
                tsuno: { $: 0 },
                umaji: { $: 0 },
                yasuda: { $: 0 },
                yusuhara: { $: 0 }
              },
              kumamoto: {
                $: 0,
                amakusa: { $: 0 },
                arao: { $: 0 },
                aso: { $: 0 },
                choyo: { $: 0 },
                gyokuto: { $: 0 },
                kamiamakusa: { $: 0 },
                kikuchi: { $: 0 },
                kumamoto: { $: 0 },
                mashiki: { $: 0 },
                mifune: { $: 0 },
                minamata: { $: 0 },
                minamioguni: { $: 0 },
                nagasu: { $: 0 },
                nishihara: { $: 0 },
                oguni: { $: 0 },
                ozu: { $: 0 },
                sumoto: { $: 0 },
                takamori: { $: 0 },
                uki: { $: 0 },
                uto: { $: 0 },
                yamaga: { $: 0 },
                yamato: { $: 0 },
                yatsushiro: { $: 0 }
              },
              kyoto: {
                $: 0,
                ayabe: { $: 0 },
                fukuchiyama: { $: 0 },
                higashiyama: { $: 0 },
                ide: { $: 0 },
                ine: { $: 0 },
                joyo: { $: 0 },
                kameoka: { $: 0 },
                kamo: { $: 0 },
                kita: { $: 0 },
                kizu: { $: 0 },
                kumiyama: { $: 0 },
                kyotamba: { $: 0 },
                kyotanabe: { $: 0 },
                kyotango: { $: 0 },
                maizuru: { $: 0 },
                minami: { $: 0 },
                minamiyamashiro: { $: 0 },
                miyazu: { $: 0 },
                muko: { $: 0 },
                nagaokakyo: { $: 0 },
                nakagyo: { $: 0 },
                nantan: { $: 0 },
                oyamazaki: { $: 0 },
                sakyo: { $: 0 },
                seika: { $: 0 },
                tanabe: { $: 0 },
                uji: { $: 0 },
                ujitawara: { $: 0 },
                wazuka: { $: 0 },
                yamashina: { $: 0 },
                yawata: { $: 0 }
              },
              mie: {
                $: 0,
                asahi: { $: 0 },
                inabe: { $: 0 },
                ise: { $: 0 },
                kameyama: { $: 0 },
                kawagoe: { $: 0 },
                kiho: { $: 0 },
                kisosaki: { $: 0 },
                kiwa: { $: 0 },
                komono: { $: 0 },
                kumano: { $: 0 },
                kuwana: { $: 0 },
                matsusaka: { $: 0 },
                meiwa: { $: 0 },
                mihama: { $: 0 },
                minamiise: { $: 0 },
                misugi: { $: 0 },
                miyama: { $: 0 },
                nabari: { $: 0 },
                shima: { $: 0 },
                suzuka: { $: 0 },
                tado: { $: 0 },
                taiki: { $: 0 },
                taki: { $: 0 },
                tamaki: { $: 0 },
                toba: { $: 0 },
                tsu: { $: 0 },
                udono: { $: 0 },
                ureshino: { $: 0 },
                watarai: { $: 0 },
                yokkaichi: { $: 0 }
              },
              miyagi: {
                $: 0,
                furukawa: { $: 0 },
                higashimatsushima: { $: 0 },
                ishinomaki: { $: 0 },
                iwanuma: { $: 0 },
                kakuda: { $: 0 },
                kami: { $: 0 },
                kawasaki: { $: 0 },
                marumori: { $: 0 },
                matsushima: { $: 0 },
                minamisanriku: { $: 0 },
                misato: { $: 0 },
                murata: { $: 0 },
                natori: { $: 0 },
                ogawara: { $: 0 },
                ohira: { $: 0 },
                onagawa: { $: 0 },
                osaki: { $: 0 },
                rifu: { $: 0 },
                semine: { $: 0 },
                shibata: { $: 0 },
                shichikashuku: { $: 0 },
                shikama: { $: 0 },
                shiogama: { $: 0 },
                shiroishi: { $: 0 },
                tagajo: { $: 0 },
                taiwa: { $: 0 },
                tome: { $: 0 },
                tomiya: { $: 0 },
                wakuya: { $: 0 },
                watari: { $: 0 },
                yamamoto: { $: 0 },
                zao: { $: 0 }
              },
              miyazaki: {
                $: 0,
                aya: { $: 0 },
                ebino: { $: 0 },
                gokase: { $: 0 },
                hyuga: { $: 0 },
                kadogawa: { $: 0 },
                kawaminami: { $: 0 },
                kijo: { $: 0 },
                kitagawa: { $: 0 },
                kitakata: { $: 0 },
                kitaura: { $: 0 },
                kobayashi: { $: 0 },
                kunitomi: { $: 0 },
                kushima: { $: 0 },
                mimata: { $: 0 },
                miyakonojo: { $: 0 },
                miyazaki: { $: 0 },
                morotsuka: { $: 0 },
                nichinan: { $: 0 },
                nishimera: { $: 0 },
                nobeoka: { $: 0 },
                saito: { $: 0 },
                shiiba: { $: 0 },
                shintomi: { $: 0 },
                takaharu: { $: 0 },
                takanabe: { $: 0 },
                takazaki: { $: 0 },
                tsuno: { $: 0 }
              },
              nagano: {
                $: 0,
                achi: { $: 0 },
                agematsu: { $: 0 },
                anan: { $: 0 },
                aoki: { $: 0 },
                asahi: { $: 0 },
                azumino: { $: 0 },
                chikuhoku: { $: 0 },
                chikuma: { $: 0 },
                chino: { $: 0 },
                fujimi: { $: 0 },
                hakuba: { $: 0 },
                hara: { $: 0 },
                hiraya: { $: 0 },
                iida: { $: 0 },
                iijima: { $: 0 },
                iiyama: { $: 0 },
                iizuna: { $: 0 },
                ikeda: { $: 0 },
                ikusaka: { $: 0 },
                ina: { $: 0 },
                karuizawa: { $: 0 },
                kawakami: { $: 0 },
                kiso: { $: 0 },
                kisofukushima: { $: 0 },
                kitaaiki: { $: 0 },
                komagane: { $: 0 },
                komoro: { $: 0 },
                matsukawa: { $: 0 },
                matsumoto: { $: 0 },
                miasa: { $: 0 },
                minamiaiki: { $: 0 },
                minamimaki: { $: 0 },
                minamiminowa: { $: 0 },
                minowa: { $: 0 },
                miyada: { $: 0 },
                miyota: { $: 0 },
                mochizuki: { $: 0 },
                nagano: { $: 0 },
                nagawa: { $: 0 },
                nagiso: { $: 0 },
                nakagawa: { $: 0 },
                nakano: { $: 0 },
                nozawaonsen: { $: 0 },
                obuse: { $: 0 },
                ogawa: { $: 0 },
                okaya: { $: 0 },
                omachi: { $: 0 },
                omi: { $: 0 },
                ookuwa: { $: 0 },
                ooshika: { $: 0 },
                otaki: { $: 0 },
                otari: { $: 0 },
                sakae: { $: 0 },
                sakaki: { $: 0 },
                saku: { $: 0 },
                sakuho: { $: 0 },
                shimosuwa: { $: 0 },
                shinanomachi: { $: 0 },
                shiojiri: { $: 0 },
                suwa: { $: 0 },
                suzaka: { $: 0 },
                takagi: { $: 0 },
                takamori: { $: 0 },
                takayama: { $: 0 },
                tateshina: { $: 0 },
                tatsuno: { $: 0 },
                togakushi: { $: 0 },
                togura: { $: 0 },
                tomi: { $: 0 },
                ueda: { $: 0 },
                wada: { $: 0 },
                yamagata: { $: 0 },
                yamanouchi: { $: 0 },
                yasaka: { $: 0 },
                yasuoka: { $: 0 }
              },
              nagasaki: {
                $: 0,
                chijiwa: { $: 0 },
                futsu: { $: 0 },
                goto: { $: 0 },
                hasami: { $: 0 },
                hirado: { $: 0 },
                iki: { $: 0 },
                isahaya: { $: 0 },
                kawatana: { $: 0 },
                kuchinotsu: { $: 0 },
                matsuura: { $: 0 },
                nagasaki: { $: 0 },
                obama: { $: 0 },
                omura: { $: 0 },
                oseto: { $: 0 },
                saikai: { $: 0 },
                sasebo: { $: 0 },
                seihi: { $: 0 },
                shimabara: { $: 0 },
                shinkamigoto: { $: 0 },
                togitsu: { $: 0 },
                tsushima: { $: 0 },
                unzen: { $: 0 }
              },
              nara: {
                $: 0,
                ando: { $: 0 },
                gose: { $: 0 },
                heguri: { $: 0 },
                higashiyoshino: { $: 0 },
                ikaruga: { $: 0 },
                ikoma: { $: 0 },
                kamikitayama: { $: 0 },
                kanmaki: { $: 0 },
                kashiba: { $: 0 },
                kashihara: { $: 0 },
                katsuragi: { $: 0 },
                kawai: { $: 0 },
                kawakami: { $: 0 },
                kawanishi: { $: 0 },
                koryo: { $: 0 },
                kurotaki: { $: 0 },
                mitsue: { $: 0 },
                miyake: { $: 0 },
                nara: { $: 0 },
                nosegawa: { $: 0 },
                oji: { $: 0 },
                ouda: { $: 0 },
                oyodo: { $: 0 },
                sakurai: { $: 0 },
                sango: { $: 0 },
                shimoichi: { $: 0 },
                shimokitayama: { $: 0 },
                shinjo: { $: 0 },
                soni: { $: 0 },
                takatori: { $: 0 },
                tawaramoto: { $: 0 },
                tenkawa: { $: 0 },
                tenri: { $: 0 },
                uda: { $: 0 },
                yamatokoriyama: { $: 0 },
                yamatotakada: { $: 0 },
                yamazoe: { $: 0 },
                yoshino: { $: 0 }
              },
              niigata: {
                $: 0,
                aga: { $: 0 },
                agano: { $: 0 },
                gosen: { $: 0 },
                itoigawa: { $: 0 },
                izumozaki: { $: 0 },
                joetsu: { $: 0 },
                kamo: { $: 0 },
                kariwa: { $: 0 },
                kashiwazaki: { $: 0 },
                minamiuonuma: { $: 0 },
                mitsuke: { $: 0 },
                muika: { $: 0 },
                murakami: { $: 0 },
                myoko: { $: 0 },
                nagaoka: { $: 0 },
                niigata: { $: 0 },
                ojiya: { $: 0 },
                omi: { $: 0 },
                sado: { $: 0 },
                sanjo: { $: 0 },
                seiro: { $: 0 },
                seirou: { $: 0 },
                sekikawa: { $: 0 },
                shibata: { $: 0 },
                tagami: { $: 0 },
                tainai: { $: 0 },
                tochio: { $: 0 },
                tokamachi: { $: 0 },
                tsubame: { $: 0 },
                tsunan: { $: 0 },
                uonuma: { $: 0 },
                yahiko: { $: 0 },
                yoita: { $: 0 },
                yuzawa: { $: 0 }
              },
              oita: {
                $: 0,
                beppu: { $: 0 },
                bungoono: { $: 0 },
                bungotakada: { $: 0 },
                hasama: { $: 0 },
                hiji: { $: 0 },
                himeshima: { $: 0 },
                hita: { $: 0 },
                kamitsue: { $: 0 },
                kokonoe: { $: 0 },
                kuju: { $: 0 },
                kunisaki: { $: 0 },
                kusu: { $: 0 },
                oita: { $: 0 },
                saiki: { $: 0 },
                taketa: { $: 0 },
                tsukumi: { $: 0 },
                usa: { $: 0 },
                usuki: { $: 0 },
                yufu: { $: 0 }
              },
              okayama: {
                $: 0,
                akaiwa: { $: 0 },
                asakuchi: { $: 0 },
                bizen: { $: 0 },
                hayashima: { $: 0 },
                ibara: { $: 0 },
                kagamino: { $: 0 },
                kasaoka: { $: 0 },
                kibichuo: { $: 0 },
                kumenan: { $: 0 },
                kurashiki: { $: 0 },
                maniwa: { $: 0 },
                misaki: { $: 0 },
                nagi: { $: 0 },
                niimi: { $: 0 },
                nishiawakura: { $: 0 },
                okayama: { $: 0 },
                satosho: { $: 0 },
                setouchi: { $: 0 },
                shinjo: { $: 0 },
                shoo: { $: 0 },
                soja: { $: 0 },
                takahashi: { $: 0 },
                tamano: { $: 0 },
                tsuyama: { $: 0 },
                wake: { $: 0 },
                yakage: { $: 0 }
              },
              okinawa: {
                $: 0,
                aguni: { $: 0 },
                ginowan: { $: 0 },
                ginoza: { $: 0 },
                gushikami: { $: 0 },
                haebaru: { $: 0 },
                higashi: { $: 0 },
                hirara: { $: 0 },
                iheya: { $: 0 },
                ishigaki: { $: 0 },
                ishikawa: { $: 0 },
                itoman: { $: 0 },
                izena: { $: 0 },
                kadena: { $: 0 },
                kin: { $: 0 },
                kitadaito: { $: 0 },
                kitanakagusuku: { $: 0 },
                kumejima: { $: 0 },
                kunigami: { $: 0 },
                minamidaito: { $: 0 },
                motobu: { $: 0 },
                nago: { $: 0 },
                naha: { $: 0 },
                nakagusuku: { $: 0 },
                nakijin: { $: 0 },
                nanjo: { $: 0 },
                nishihara: { $: 0 },
                ogimi: { $: 0 },
                okinawa: { $: 0 },
                onna: { $: 0 },
                shimoji: { $: 0 },
                taketomi: { $: 0 },
                tarama: { $: 0 },
                tokashiki: { $: 0 },
                tomigusuku: { $: 0 },
                tonaki: { $: 0 },
                urasoe: { $: 0 },
                uruma: { $: 0 },
                yaese: { $: 0 },
                yomitan: { $: 0 },
                yonabaru: { $: 0 },
                yonaguni: { $: 0 },
                zamami: { $: 0 }
              },
              osaka: {
                $: 0,
                abeno: { $: 0 },
                chihayaakasaka: { $: 0 },
                chuo: { $: 0 },
                daito: { $: 0 },
                fujiidera: { $: 0 },
                habikino: { $: 0 },
                hannan: { $: 0 },
                higashiosaka: { $: 0 },
                higashisumiyoshi: { $: 0 },
                higashiyodogawa: { $: 0 },
                hirakata: { $: 0 },
                ibaraki: { $: 0 },
                ikeda: { $: 0 },
                izumi: { $: 0 },
                izumiotsu: { $: 0 },
                izumisano: { $: 0 },
                kadoma: { $: 0 },
                kaizuka: { $: 0 },
                kanan: { $: 0 },
                kashiwara: { $: 0 },
                katano: { $: 0 },
                kawachinagano: { $: 0 },
                kishiwada: { $: 0 },
                kita: { $: 0 },
                kumatori: { $: 0 },
                matsubara: { $: 0 },
                minato: { $: 0 },
                minoh: { $: 0 },
                misaki: { $: 0 },
                moriguchi: { $: 0 },
                neyagawa: { $: 0 },
                nishi: { $: 0 },
                nose: { $: 0 },
                osakasayama: { $: 0 },
                sakai: { $: 0 },
                sayama: { $: 0 },
                sennan: { $: 0 },
                settsu: { $: 0 },
                shijonawate: { $: 0 },
                shimamoto: { $: 0 },
                suita: { $: 0 },
                tadaoka: { $: 0 },
                taishi: { $: 0 },
                tajiri: { $: 0 },
                takaishi: { $: 0 },
                takatsuki: { $: 0 },
                tondabayashi: { $: 0 },
                toyonaka: { $: 0 },
                toyono: { $: 0 },
                yao: { $: 0 }
              },
              saga: {
                $: 0,
                ariake: { $: 0 },
                arita: { $: 0 },
                fukudomi: { $: 0 },
                genkai: { $: 0 },
                hamatama: { $: 0 },
                hizen: { $: 0 },
                imari: { $: 0 },
                kamimine: { $: 0 },
                kanzaki: { $: 0 },
                karatsu: { $: 0 },
                kashima: { $: 0 },
                kitagata: { $: 0 },
                kitahata: { $: 0 },
                kiyama: { $: 0 },
                kouhoku: { $: 0 },
                kyuragi: { $: 0 },
                nishiarita: { $: 0 },
                ogi: { $: 0 },
                omachi: { $: 0 },
                ouchi: { $: 0 },
                saga: { $: 0 },
                shiroishi: { $: 0 },
                taku: { $: 0 },
                tara: { $: 0 },
                tosu: { $: 0 },
                yoshinogari: { $: 0 }
              },
              saitama: {
                $: 0,
                arakawa: { $: 0 },
                asaka: { $: 0 },
                chichibu: { $: 0 },
                fujimi: { $: 0 },
                fujimino: { $: 0 },
                fukaya: { $: 0 },
                hanno: { $: 0 },
                hanyu: { $: 0 },
                hasuda: { $: 0 },
                hatogaya: { $: 0 },
                hatoyama: { $: 0 },
                hidaka: { $: 0 },
                higashichichibu: { $: 0 },
                higashimatsuyama: { $: 0 },
                honjo: { $: 0 },
                ina: { $: 0 },
                iruma: { $: 0 },
                iwatsuki: { $: 0 },
                kamiizumi: { $: 0 },
                kamikawa: { $: 0 },
                kamisato: { $: 0 },
                kasukabe: { $: 0 },
                kawagoe: { $: 0 },
                kawaguchi: { $: 0 },
                kawajima: { $: 0 },
                kazo: { $: 0 },
                kitamoto: { $: 0 },
                koshigaya: { $: 0 },
                kounosu: { $: 0 },
                kuki: { $: 0 },
                kumagaya: { $: 0 },
                matsubushi: { $: 0 },
                minano: { $: 0 },
                misato: { $: 0 },
                miyashiro: { $: 0 },
                miyoshi: { $: 0 },
                moroyama: { $: 0 },
                nagatoro: { $: 0 },
                namegawa: { $: 0 },
                niiza: { $: 0 },
                ogano: { $: 0 },
                ogawa: { $: 0 },
                ogose: { $: 0 },
                okegawa: { $: 0 },
                omiya: { $: 0 },
                otaki: { $: 0 },
                ranzan: { $: 0 },
                ryokami: { $: 0 },
                saitama: { $: 0 },
                sakado: { $: 0 },
                satte: { $: 0 },
                sayama: { $: 0 },
                shiki: { $: 0 },
                shiraoka: { $: 0 },
                soka: { $: 0 },
                sugito: { $: 0 },
                toda: { $: 0 },
                tokigawa: { $: 0 },
                tokorozawa: { $: 0 },
                tsurugashima: { $: 0 },
                urawa: { $: 0 },
                warabi: { $: 0 },
                yashio: { $: 0 },
                yokoze: { $: 0 },
                yono: { $: 0 },
                yorii: { $: 0 },
                yoshida: { $: 0 },
                yoshikawa: { $: 0 },
                yoshimi: { $: 0 }
              },
              shiga: {
                $: 0,
                aisho: { $: 0 },
                gamo: { $: 0 },
                higashiomi: { $: 0 },
                hikone: { $: 0 },
                koka: { $: 0 },
                konan: { $: 0 },
                kosei: { $: 0 },
                koto: { $: 0 },
                kusatsu: { $: 0 },
                maibara: { $: 0 },
                moriyama: { $: 0 },
                nagahama: { $: 0 },
                nishiazai: { $: 0 },
                notogawa: { $: 0 },
                omihachiman: { $: 0 },
                otsu: { $: 0 },
                ritto: { $: 0 },
                ryuoh: { $: 0 },
                takashima: { $: 0 },
                takatsuki: { $: 0 },
                torahime: { $: 0 },
                toyosato: { $: 0 },
                yasu: { $: 0 }
              },
              shimane: {
                $: 0,
                akagi: { $: 0 },
                ama: { $: 0 },
                gotsu: { $: 0 },
                hamada: { $: 0 },
                higashiizumo: { $: 0 },
                hikawa: { $: 0 },
                hikimi: { $: 0 },
                izumo: { $: 0 },
                kakinoki: { $: 0 },
                masuda: { $: 0 },
                matsue: { $: 0 },
                misato: { $: 0 },
                nishinoshima: { $: 0 },
                ohda: { $: 0 },
                okinoshima: { $: 0 },
                okuizumo: { $: 0 },
                shimane: { $: 0 },
                tamayu: { $: 0 },
                tsuwano: { $: 0 },
                unnan: { $: 0 },
                yakumo: { $: 0 },
                yasugi: { $: 0 },
                yatsuka: { $: 0 }
              },
              shizuoka: {
                $: 0,
                arai: { $: 0 },
                atami: { $: 0 },
                fuji: { $: 0 },
                fujieda: { $: 0 },
                fujikawa: { $: 0 },
                fujinomiya: { $: 0 },
                fukuroi: { $: 0 },
                gotemba: { $: 0 },
                haibara: { $: 0 },
                hamamatsu: { $: 0 },
                higashiizu: { $: 0 },
                ito: { $: 0 },
                iwata: { $: 0 },
                izu: { $: 0 },
                izunokuni: { $: 0 },
                kakegawa: { $: 0 },
                kannami: { $: 0 },
                kawanehon: { $: 0 },
                kawazu: { $: 0 },
                kikugawa: { $: 0 },
                kosai: { $: 0 },
                makinohara: { $: 0 },
                matsuzaki: { $: 0 },
                minamiizu: { $: 0 },
                mishima: { $: 0 },
                morimachi: { $: 0 },
                nishiizu: { $: 0 },
                numazu: { $: 0 },
                omaezaki: { $: 0 },
                shimada: { $: 0 },
                shimizu: { $: 0 },
                shimoda: { $: 0 },
                shizuoka: { $: 0 },
                susono: { $: 0 },
                yaizu: { $: 0 },
                yoshida: { $: 0 }
              },
              tochigi: {
                $: 0,
                ashikaga: { $: 0 },
                bato: { $: 0 },
                haga: { $: 0 },
                ichikai: { $: 0 },
                iwafune: { $: 0 },
                kaminokawa: { $: 0 },
                kanuma: { $: 0 },
                karasuyama: { $: 0 },
                kuroiso: { $: 0 },
                mashiko: { $: 0 },
                mibu: { $: 0 },
                moka: { $: 0 },
                motegi: { $: 0 },
                nasu: { $: 0 },
                nasushiobara: { $: 0 },
                nikko: { $: 0 },
                nishikata: { $: 0 },
                nogi: { $: 0 },
                ohira: { $: 0 },
                ohtawara: { $: 0 },
                oyama: { $: 0 },
                sakura: { $: 0 },
                sano: { $: 0 },
                shimotsuke: { $: 0 },
                shioya: { $: 0 },
                takanezawa: { $: 0 },
                tochigi: { $: 0 },
                tsuga: { $: 0 },
                ujiie: { $: 0 },
                utsunomiya: { $: 0 },
                yaita: { $: 0 }
              },
              tokushima: {
                $: 0,
                aizumi: { $: 0 },
                anan: { $: 0 },
                ichiba: { $: 0 },
                itano: { $: 0 },
                kainan: { $: 0 },
                komatsushima: { $: 0 },
                matsushige: { $: 0 },
                mima: { $: 0 },
                minami: { $: 0 },
                miyoshi: { $: 0 },
                mugi: { $: 0 },
                nakagawa: { $: 0 },
                naruto: { $: 0 },
                sanagochi: { $: 0 },
                shishikui: { $: 0 },
                tokushima: { $: 0 },
                wajiki: { $: 0 }
              },
              tokyo: {
                $: 0,
                adachi: { $: 0 },
                akiruno: { $: 0 },
                akishima: { $: 0 },
                aogashima: { $: 0 },
                arakawa: { $: 0 },
                bunkyo: { $: 0 },
                chiyoda: { $: 0 },
                chofu: { $: 0 },
                chuo: { $: 0 },
                edogawa: { $: 0 },
                fuchu: { $: 0 },
                fussa: { $: 0 },
                hachijo: { $: 0 },
                hachioji: { $: 0 },
                hamura: { $: 0 },
                higashikurume: { $: 0 },
                higashimurayama: { $: 0 },
                higashiyamato: { $: 0 },
                hino: { $: 0 },
                hinode: { $: 0 },
                hinohara: { $: 0 },
                inagi: { $: 0 },
                itabashi: { $: 0 },
                katsushika: { $: 0 },
                kita: { $: 0 },
                kiyose: { $: 0 },
                kodaira: { $: 0 },
                koganei: { $: 0 },
                kokubunji: { $: 0 },
                komae: { $: 0 },
                koto: { $: 0 },
                kouzushima: { $: 0 },
                kunitachi: { $: 0 },
                machida: { $: 0 },
                meguro: { $: 0 },
                minato: { $: 0 },
                mitaka: { $: 0 },
                mizuho: { $: 0 },
                musashimurayama: { $: 0 },
                musashino: { $: 0 },
                nakano: { $: 0 },
                nerima: { $: 0 },
                ogasawara: { $: 0 },
                okutama: { $: 0 },
                ome: { $: 0 },
                oshima: { $: 0 },
                ota: { $: 0 },
                setagaya: { $: 0 },
                shibuya: { $: 0 },
                shinagawa: { $: 0 },
                shinjuku: { $: 0 },
                suginami: { $: 0 },
                sumida: { $: 0 },
                tachikawa: { $: 0 },
                taito: { $: 0 },
                tama: { $: 0 },
                toshima: { $: 0 }
              },
              tottori: {
                $: 0,
                chizu: { $: 0 },
                hino: { $: 0 },
                kawahara: { $: 0 },
                koge: { $: 0 },
                kotoura: { $: 0 },
                misasa: { $: 0 },
                nanbu: { $: 0 },
                nichinan: { $: 0 },
                sakaiminato: { $: 0 },
                tottori: { $: 0 },
                wakasa: { $: 0 },
                yazu: { $: 0 },
                yonago: { $: 0 }
              },
              toyama: {
                $: 0,
                asahi: { $: 0 },
                fuchu: { $: 0 },
                fukumitsu: { $: 0 },
                funahashi: { $: 0 },
                himi: { $: 0 },
                imizu: { $: 0 },
                inami: { $: 0 },
                johana: { $: 0 },
                kamiichi: { $: 0 },
                kurobe: { $: 0 },
                nakaniikawa: { $: 0 },
                namerikawa: { $: 0 },
                nanto: { $: 0 },
                nyuzen: { $: 0 },
                oyabe: { $: 0 },
                taira: { $: 0 },
                takaoka: { $: 0 },
                tateyama: { $: 0 },
                toga: { $: 0 },
                tonami: { $: 0 },
                toyama: { $: 0 },
                unazuki: { $: 0 },
                uozu: { $: 0 },
                yamada: { $: 0 }
              },
              wakayama: {
                $: 0,
                arida: { $: 0 },
                aridagawa: { $: 0 },
                gobo: { $: 0 },
                hashimoto: { $: 0 },
                hidaka: { $: 0 },
                hirogawa: { $: 0 },
                inami: { $: 0 },
                iwade: { $: 0 },
                kainan: { $: 0 },
                kamitonda: { $: 0 },
                katsuragi: { $: 0 },
                kimino: { $: 0 },
                kinokawa: { $: 0 },
                kitayama: { $: 0 },
                koya: { $: 0 },
                koza: { $: 0 },
                kozagawa: { $: 0 },
                kudoyama: { $: 0 },
                kushimoto: { $: 0 },
                mihama: { $: 0 },
                misato: { $: 0 },
                nachikatsuura: { $: 0 },
                shingu: { $: 0 },
                shirahama: { $: 0 },
                taiji: { $: 0 },
                tanabe: { $: 0 },
                wakayama: { $: 0 },
                yuasa: { $: 0 },
                yura: { $: 0 }
              },
              yamagata: {
                $: 0,
                asahi: { $: 0 },
                funagata: { $: 0 },
                higashine: { $: 0 },
                iide: { $: 0 },
                kahoku: { $: 0 },
                kaminoyama: { $: 0 },
                kaneyama: { $: 0 },
                kawanishi: { $: 0 },
                mamurogawa: { $: 0 },
                mikawa: { $: 0 },
                murayama: { $: 0 },
                nagai: { $: 0 },
                nakayama: { $: 0 },
                nanyo: { $: 0 },
                nishikawa: { $: 0 },
                obanazawa: { $: 0 },
                oe: { $: 0 },
                oguni: { $: 0 },
                ohkura: { $: 0 },
                oishida: { $: 0 },
                sagae: { $: 0 },
                sakata: { $: 0 },
                sakegawa: { $: 0 },
                shinjo: { $: 0 },
                shirataka: { $: 0 },
                shonai: { $: 0 },
                takahata: { $: 0 },
                tendo: { $: 0 },
                tozawa: { $: 0 },
                tsuruoka: { $: 0 },
                yamagata: { $: 0 },
                yamanobe: { $: 0 },
                yonezawa: { $: 0 },
                yuza: { $: 0 }
              },
              yamaguchi: {
                $: 0,
                abu: { $: 0 },
                hagi: { $: 0 },
                hikari: { $: 0 },
                hofu: { $: 0 },
                iwakuni: { $: 0 },
                kudamatsu: { $: 0 },
                mitou: { $: 0 },
                nagato: { $: 0 },
                oshima: { $: 0 },
                shimonoseki: { $: 0 },
                shunan: { $: 0 },
                tabuse: { $: 0 },
                tokuyama: { $: 0 },
                toyota: { $: 0 },
                ube: { $: 0 },
                yuu: { $: 0 }
              },
              yamanashi: {
                $: 0,
                chuo: { $: 0 },
                doshi: { $: 0 },
                fuefuki: { $: 0 },
                fujikawa: { $: 0 },
                fujikawaguchiko: { $: 0 },
                fujiyoshida: { $: 0 },
                hayakawa: { $: 0 },
                hokuto: { $: 0 },
                ichikawamisato: { $: 0 },
                kai: { $: 0 },
                kofu: { $: 0 },
                koshu: { $: 0 },
                kosuge: { $: 0 },
                "minami-alps": { $: 0 },
                minobu: { $: 0 },
                nakamichi: { $: 0 },
                nanbu: { $: 0 },
                narusawa: { $: 0 },
                nirasaki: { $: 0 },
                nishikatsura: { $: 0 },
                oshino: { $: 0 },
                otsuki: { $: 0 },
                showa: { $: 0 },
                tabayama: { $: 0 },
                tsuru: { $: 0 },
                uenohara: { $: 0 },
                yamanakako: { $: 0 },
                yamanashi: { $: 0 }
              },
              "xn--4pvxs": { $: 0 },
              "xn--vgu402c": { $: 0 },
              "xn--c3s14m": { $: 0 },
              "xn--f6qx53a": { $: 0 },
              "xn--8pvr4u": { $: 0 },
              "xn--uist22h": { $: 0 },
              "xn--djrs72d6uy": { $: 0 },
              "xn--mkru45i": { $: 0 },
              "xn--0trq7p7nn": { $: 0 },
              "xn--8ltr62k": { $: 0 },
              "xn--2m4a15e": { $: 0 },
              "xn--efvn9s": { $: 0 },
              "xn--32vp30h": { $: 0 },
              "xn--4it797k": { $: 0 },
              "xn--1lqs71d": { $: 0 },
              "xn--5rtp49c": { $: 0 },
              "xn--5js045d": { $: 0 },
              "xn--ehqz56n": { $: 0 },
              "xn--1lqs03n": { $: 0 },
              "xn--qqqt11m": { $: 0 },
              "xn--kbrq7o": { $: 0 },
              "xn--pssu33l": { $: 0 },
              "xn--ntsq17g": { $: 0 },
              "xn--uisz3g": { $: 0 },
              "xn--6btw5a": { $: 0 },
              "xn--1ctwo": { $: 0 },
              "xn--6orx2r": { $: 0 },
              "xn--rht61e": { $: 0 },
              "xn--rht27z": { $: 0 },
              "xn--djty4k": { $: 0 },
              "xn--nit225k": { $: 0 },
              "xn--rht3d": { $: 0 },
              "xn--klty5x": { $: 0 },
              "xn--kltx9a": { $: 0 },
              "xn--kltp7d": { $: 0 },
              "xn--uuwu58a": { $: 0 },
              "xn--zbx025d": { $: 0 },
              "xn--ntso0iqx3a": { $: 0 },
              "xn--elqq16h": { $: 0 },
              "xn--4it168d": { $: 0 },
              "xn--klt787d": { $: 0 },
              "xn--rny31h": { $: 0 },
              "xn--7t0a264c": { $: 0 },
              "xn--5rtq34k": { $: 0 },
              "xn--k7yn95e": { $: 0 },
              "xn--tor131o": { $: 0 },
              "xn--d5qv7z876c": { $: 0 },
              kawasaki: { "*": { $: 0 } },
              kitakyushu: { "*": { $: 0 } },
              kobe: { "*": { $: 0 } },
              nagoya: { "*": { $: 0 } },
              sapporo: { "*": { $: 0 } },
              sendai: { "*": { $: 0 } },
              yokohama: { "*": { $: 0 } },
              buyshop: { $: 0 },
              fashionstore: { $: 0 },
              handcrafted: { $: 0 },
              kawaiishop: { $: 0 },
              supersale: { $: 0 },
              theshop: { $: 0 },
              usercontent: { $: 0 },
              angry: { $: 0 },
              babyblue: { $: 0 },
              babymilk: { $: 0 },
              backdrop: { $: 0 },
              bambina: { $: 0 },
              bitter: { $: 0 },
              blush: { $: 0 },
              boo: { $: 0 },
              boy: { $: 0 },
              boyfriend: { $: 0 },
              but: { $: 0 },
              candypop: { $: 0 },
              capoo: { $: 0 },
              catfood: { $: 0 },
              cheap: { $: 0 },
              chicappa: { $: 0 },
              chillout: { $: 0 },
              chips: { $: 0 },
              chowder: { $: 0 },
              chu: { $: 0 },
              ciao: { $: 0 },
              cocotte: { $: 0 },
              coolblog: { $: 0 },
              cranky: { $: 0 },
              cutegirl: { $: 0 },
              daa: { $: 0 },
              deca: { $: 0 },
              deci: { $: 0 },
              digick: { $: 0 },
              egoism: { $: 0 },
              fakefur: { $: 0 },
              fem: { $: 0 },
              flier: { $: 0 },
              floppy: { $: 0 },
              fool: { $: 0 },
              frenchkiss: { $: 0 },
              girlfriend: { $: 0 },
              girly: { $: 0 },
              gloomy: { $: 0 },
              gonna: { $: 0 },
              greater: { $: 0 },
              hacca: { $: 0 },
              heavy: { $: 0 },
              her: { $: 0 },
              hiho: { $: 0 },
              hippy: { $: 0 },
              holy: { $: 0 },
              hungry: { $: 0 },
              icurus: { $: 0 },
              itigo: { $: 0 },
              jellybean: { $: 0 },
              kikirara: { $: 0 },
              kill: { $: 0 },
              kilo: { $: 0 },
              kuron: { $: 0 },
              littlestar: { $: 0 },
              lolitapunk: { $: 0 },
              lomo: { $: 0 },
              lovepop: { $: 0 },
              lovesick: { $: 0 },
              main: { $: 0 },
              mods: { $: 0 },
              mond: { $: 0 },
              mongolian: { $: 0 },
              moo: { $: 0 },
              namaste: { $: 0 },
              nikita: { $: 0 },
              nobushi: { $: 0 },
              noor: { $: 0 },
              oops: { $: 0 },
              parallel: { $: 0 },
              parasite: { $: 0 },
              pecori: { $: 0 },
              peewee: { $: 0 },
              penne: { $: 0 },
              pepper: { $: 0 },
              perma: { $: 0 },
              pigboat: { $: 0 },
              pinoko: { $: 0 },
              punyu: { $: 0 },
              pupu: { $: 0 },
              pussycat: { $: 0 },
              pya: { $: 0 },
              raindrop: { $: 0 },
              readymade: { $: 0 },
              sadist: { $: 0 },
              schoolbus: { $: 0 },
              secret: { $: 0 },
              staba: { $: 0 },
              stripper: { $: 0 },
              sub: { $: 0 },
              sunnyday: { $: 0 },
              thick: { $: 0 },
              tonkotsu: { $: 0 },
              under: { $: 0 },
              upper: { $: 0 },
              velvet: { $: 0 },
              verse: { $: 0 },
              versus: { $: 0 },
              vivian: { $: 0 },
              watson: { $: 0 },
              weblike: { $: 0 },
              whitesnow: { $: 0 },
              zombie: { $: 0 },
              blogspot: { $: 0 }
            },
            ke: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0, blogspot: { $: 0 } },
              go: { $: 0 },
              info: { $: 0 },
              me: { $: 0 },
              mobi: { $: 0 },
              ne: { $: 0 },
              or: { $: 0 },
              sc: { $: 0 }
            },
            kg: {
              $: 0,
              org: { $: 0 },
              net: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              blog: { $: 0 },
              io: { $: 0 },
              jp: { $: 0 },
              tv: { $: 0 },
              uk: { $: 0 },
              us: { $: 0 }
            },
            kh: { "*": { $: 0 } },
            ki: { $: 0, edu: { $: 0 }, biz: { $: 0 }, net: { $: 0 }, org: { $: 0 }, gov: { $: 0 }, info: { $: 0 }, com: { $: 0 } },
            km: {
              $: 0,
              org: { $: 0 },
              nom: { $: 0 },
              gov: { $: 0 },
              prd: { $: 0 },
              tm: { $: 0 },
              edu: { $: 0 },
              mil: { $: 0 },
              ass: { $: 0 },
              com: { $: 0 },
              coop: { $: 0 },
              asso: { $: 0 },
              presse: { $: 0 },
              medecin: { $: 0 },
              notaires: { $: 0 },
              pharmaciens: { $: 0 },
              veterinaire: { $: 0 },
              gouv: { $: 0 }
            },
            kn: { $: 0, net: { $: 0 }, org: { $: 0 }, edu: { $: 0 }, gov: { $: 0 } },
            kp: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, org: { $: 0 }, rep: { $: 0 }, tra: { $: 0 } },
            kr: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0 },
              es: { $: 0 },
              go: { $: 0 },
              hs: { $: 0 },
              kg: { $: 0 },
              mil: { $: 0 },
              ms: { $: 0 },
              ne: { $: 0 },
              or: { $: 0 },
              pe: { $: 0 },
              re: { $: 0 },
              sc: { $: 0 },
              busan: { $: 0 },
              chungbuk: { $: 0 },
              chungnam: { $: 0 },
              daegu: { $: 0 },
              daejeon: { $: 0 },
              gangwon: { $: 0 },
              gwangju: { $: 0 },
              gyeongbuk: { $: 0 },
              gyeonggi: { $: 0 },
              gyeongnam: { $: 0 },
              incheon: { $: 0 },
              jeju: { $: 0 },
              jeonbuk: { $: 0 },
              jeonnam: { $: 0 },
              seoul: { $: 0 },
              ulsan: { $: 0 },
              blogspot: { $: 0 }
            },
            kw: { $: 0, com: { $: 0 }, edu: { $: 0 }, emb: { $: 0 }, gov: { $: 0 }, ind: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            ky: { $: 0, com: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            kz: {
              $: 0,
              org: { $: 0 },
              edu: { $: 0 },
              net: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              com: { $: 0 },
              jcloud: { $: 0 },
              kazteleport: { upaas: { $: 0 } }
            },
            la: {
              $: 0,
              int: { $: 0 },
              net: { $: 0 },
              info: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              per: { $: 0 },
              com: { $: 0 },
              org: { $: 0 },
              bnr: { $: 0 },
              c: { $: 0 }
            },
            lb: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            lc: { $: 0, com: { $: 0 }, net: { $: 0 }, co: { $: 0 }, org: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, oy: { $: 0 } },
            li: { $: 0, blogspot: { $: 0 }, caa: { $: 0 } },
            lk: {
              $: 0,
              gov: { $: 0 },
              sch: { $: 0 },
              net: { $: 0 },
              int: { $: 0 },
              com: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              ngo: { $: 0 },
              soc: { $: 0 },
              web: { $: 0 },
              ltd: { $: 0 },
              assn: { $: 0 },
              grp: { $: 0 },
              hotel: { $: 0 },
              ac: { $: 0 }
            },
            lr: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, org: { $: 0 }, net: { $: 0 } },
            ls: {
              $: 0,
              ac: { $: 0 },
              biz: { $: 0 },
              co: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sc: { $: 0 },
              de: { $: 0 }
            },
            lt: { $: 0, gov: { $: 0 }, blogspot: { $: 0 } },
            lu: { $: 0, blogspot: { $: 0 } },
            lv: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              org: { $: 0 },
              mil: { $: 0 },
              id: { $: 0 },
              net: { $: 0 },
              asn: { $: 0 },
              conf: { $: 0 }
            },
            ly: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              gov: { $: 0 },
              plc: { $: 0 },
              edu: { $: 0 },
              sch: { $: 0 },
              med: { $: 0 },
              org: { $: 0 },
              id: { $: 0 }
            },
            ma: { $: 0, co: { $: 0 }, net: { $: 0 }, gov: { $: 0 }, org: { $: 0 }, ac: { $: 0 }, press: { $: 0 } },
            mc: { $: 0, tm: { $: 0 }, asso: { $: 0 } },
            md: { $: 0, blogspot: { $: 0 }, at: { $: 0 }, de: { $: 0 }, jp: { $: 0 }, to: { $: 0 } },
            me: {
              $: 0,
              co: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              ac: { $: 0 },
              gov: { $: 0 },
              its: { $: 0 },
              priv: { $: 0 },
              c66: { $: 0 },
              daplie: { $: 0, localhost: { $: 0 } },
              edgestack: { $: 0 },
              filegear: { $: 0 },
              "filegear-au": { $: 0 },
              "filegear-de": { $: 0 },
              "filegear-gb": { $: 0 },
              "filegear-ie": { $: 0 },
              "filegear-jp": { $: 0 },
              "filegear-sg": { $: 0 },
              glitch: { $: 0 },
              ravendb: { $: 0 },
              lohmus: { $: 0 },
              barsy: { $: 0 },
              mcpe: { $: 0 },
              mcdir: { $: 0 },
              soundcast: { $: 0 },
              tcp4: { $: 0 },
              brasilia: { $: 0 },
              ddns: { $: 0 },
              dnsfor: { $: 0 },
              hopto: { $: 0 },
              loginto: { $: 0 },
              noip: { $: 0 },
              webhop: { $: 0 },
              vp4: { $: 0 },
              diskstation: { $: 0 },
              dscloud: { $: 0 },
              i234: { $: 0 },
              myds: { $: 0 },
              synology: { $: 0 },
              tbits: { $: 0 },
              transip: { site: { $: 0 } },
              wedeploy: { $: 0 },
              yombo: { $: 0 },
              nohost: { $: 0 }
            },
            mg: {
              $: 0,
              org: { $: 0 },
              nom: { $: 0 },
              gov: { $: 0 },
              prd: { $: 0 },
              tm: { $: 0 },
              edu: { $: 0 },
              mil: { $: 0 },
              com: { $: 0 },
              co: { $: 0 }
            },
            mh: { $: 0 },
            mil: { $: 0 },
            mk: {
              $: 0,
              com: { $: 0 },
              org: { $: 0 },
              net: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              inf: { $: 0 },
              name: { $: 0 },
              blogspot: { $: 0 }
            },
            ml: { $: 0, com: { $: 0 }, edu: { $: 0 }, gouv: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, presse: { $: 0 } },
            mm: { "*": { $: 0 } },
            mn: { $: 0, gov: { $: 0 }, edu: { $: 0 }, org: { $: 0 }, nyc: { $: 0 } },
            mo: { $: 0, com: { $: 0 }, net: { $: 0 }, org: { $: 0 }, edu: { $: 0 }, gov: { $: 0 } },
            mobi: { $: 0, barsy: { $: 0 }, dscloud: { $: 0 } },
            mp: { $: 0, ju: { $: 0 } },
            mq: { $: 0 },
            mr: { $: 0, gov: { $: 0 }, blogspot: { $: 0 } },
            ms: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, lab: { $: 0 }, minisite: { $: 0 } },
            mt: { $: 0, com: { $: 0, blogspot: { $: 0 } }, edu: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            mu: { $: 0, com: { $: 0 }, net: { $: 0 }, org: { $: 0 }, gov: { $: 0 }, ac: { $: 0 }, co: { $: 0 }, or: { $: 0 } },
            museum: {
              $: 0,
              academy: { $: 0 },
              agriculture: { $: 0 },
              air: { $: 0 },
              airguard: { $: 0 },
              alabama: { $: 0 },
              alaska: { $: 0 },
              amber: { $: 0 },
              ambulance: { $: 0 },
              american: { $: 0 },
              americana: { $: 0 },
              americanantiques: { $: 0 },
              americanart: { $: 0 },
              amsterdam: { $: 0 },
              and: { $: 0 },
              annefrank: { $: 0 },
              anthro: { $: 0 },
              anthropology: { $: 0 },
              antiques: { $: 0 },
              aquarium: { $: 0 },
              arboretum: { $: 0 },
              archaeological: { $: 0 },
              archaeology: { $: 0 },
              architecture: { $: 0 },
              art: { $: 0 },
              artanddesign: { $: 0 },
              artcenter: { $: 0 },
              artdeco: { $: 0 },
              arteducation: { $: 0 },
              artgallery: { $: 0 },
              arts: { $: 0 },
              artsandcrafts: { $: 0 },
              asmatart: { $: 0 },
              assassination: { $: 0 },
              assisi: { $: 0 },
              association: { $: 0 },
              astronomy: { $: 0 },
              atlanta: { $: 0 },
              austin: { $: 0 },
              australia: { $: 0 },
              automotive: { $: 0 },
              aviation: { $: 0 },
              axis: { $: 0 },
              badajoz: { $: 0 },
              baghdad: { $: 0 },
              bahn: { $: 0 },
              bale: { $: 0 },
              baltimore: { $: 0 },
              barcelona: { $: 0 },
              baseball: { $: 0 },
              basel: { $: 0 },
              baths: { $: 0 },
              bauern: { $: 0 },
              beauxarts: { $: 0 },
              beeldengeluid: { $: 0 },
              bellevue: { $: 0 },
              bergbau: { $: 0 },
              berkeley: { $: 0 },
              berlin: { $: 0 },
              bern: { $: 0 },
              bible: { $: 0 },
              bilbao: { $: 0 },
              bill: { $: 0 },
              birdart: { $: 0 },
              birthplace: { $: 0 },
              bonn: { $: 0 },
              boston: { $: 0 },
              botanical: { $: 0 },
              botanicalgarden: { $: 0 },
              botanicgarden: { $: 0 },
              botany: { $: 0 },
              brandywinevalley: { $: 0 },
              brasil: { $: 0 },
              bristol: { $: 0 },
              british: { $: 0 },
              britishcolumbia: { $: 0 },
              broadcast: { $: 0 },
              brunel: { $: 0 },
              brussel: { $: 0 },
              brussels: { $: 0 },
              bruxelles: { $: 0 },
              building: { $: 0 },
              burghof: { $: 0 },
              bus: { $: 0 },
              bushey: { $: 0 },
              cadaques: { $: 0 },
              california: { $: 0 },
              cambridge: { $: 0 },
              can: { $: 0 },
              canada: { $: 0 },
              capebreton: { $: 0 },
              carrier: { $: 0 },
              cartoonart: { $: 0 },
              casadelamoneda: { $: 0 },
              castle: { $: 0 },
              castres: { $: 0 },
              celtic: { $: 0 },
              center: { $: 0 },
              chattanooga: { $: 0 },
              cheltenham: { $: 0 },
              chesapeakebay: { $: 0 },
              chicago: { $: 0 },
              children: { $: 0 },
              childrens: { $: 0 },
              childrensgarden: { $: 0 },
              chiropractic: { $: 0 },
              chocolate: { $: 0 },
              christiansburg: { $: 0 },
              cincinnati: { $: 0 },
              cinema: { $: 0 },
              circus: { $: 0 },
              civilisation: { $: 0 },
              civilization: { $: 0 },
              civilwar: { $: 0 },
              clinton: { $: 0 },
              clock: { $: 0 },
              coal: { $: 0 },
              coastaldefence: { $: 0 },
              cody: { $: 0 },
              coldwar: { $: 0 },
              collection: { $: 0 },
              colonialwilliamsburg: { $: 0 },
              coloradoplateau: { $: 0 },
              columbia: { $: 0 },
              columbus: { $: 0 },
              communication: { $: 0 },
              communications: { $: 0 },
              community: { $: 0 },
              computer: { $: 0 },
              computerhistory: { $: 0 },
              "xn--comunicaes-v6a2o": { $: 0 },
              contemporary: { $: 0 },
              contemporaryart: { $: 0 },
              convent: { $: 0 },
              copenhagen: { $: 0 },
              corporation: { $: 0 },
              "xn--correios-e-telecomunicaes-ghc29a": { $: 0 },
              corvette: { $: 0 },
              costume: { $: 0 },
              countryestate: { $: 0 },
              county: { $: 0 },
              crafts: { $: 0 },
              cranbrook: { $: 0 },
              creation: { $: 0 },
              cultural: { $: 0 },
              culturalcenter: { $: 0 },
              culture: { $: 0 },
              cyber: { $: 0 },
              cymru: { $: 0 },
              dali: { $: 0 },
              dallas: { $: 0 },
              database: { $: 0 },
              ddr: { $: 0 },
              decorativearts: { $: 0 },
              delaware: { $: 0 },
              delmenhorst: { $: 0 },
              denmark: { $: 0 },
              depot: { $: 0 },
              design: { $: 0 },
              detroit: { $: 0 },
              dinosaur: { $: 0 },
              discovery: { $: 0 },
              dolls: { $: 0 },
              donostia: { $: 0 },
              durham: { $: 0 },
              eastafrica: { $: 0 },
              eastcoast: { $: 0 },
              education: { $: 0 },
              educational: { $: 0 },
              egyptian: { $: 0 },
              eisenbahn: { $: 0 },
              elburg: { $: 0 },
              elvendrell: { $: 0 },
              embroidery: { $: 0 },
              encyclopedic: { $: 0 },
              england: { $: 0 },
              entomology: { $: 0 },
              environment: { $: 0 },
              environmentalconservation: { $: 0 },
              epilepsy: { $: 0 },
              essex: { $: 0 },
              estate: { $: 0 },
              ethnology: { $: 0 },
              exeter: { $: 0 },
              exhibition: { $: 0 },
              family: { $: 0 },
              farm: { $: 0 },
              farmequipment: { $: 0 },
              farmers: { $: 0 },
              farmstead: { $: 0 },
              field: { $: 0 },
              figueres: { $: 0 },
              filatelia: { $: 0 },
              film: { $: 0 },
              fineart: { $: 0 },
              finearts: { $: 0 },
              finland: { $: 0 },
              flanders: { $: 0 },
              florida: { $: 0 },
              force: { $: 0 },
              fortmissoula: { $: 0 },
              fortworth: { $: 0 },
              foundation: { $: 0 },
              francaise: { $: 0 },
              frankfurt: { $: 0 },
              franziskaner: { $: 0 },
              freemasonry: { $: 0 },
              freiburg: { $: 0 },
              fribourg: { $: 0 },
              frog: { $: 0 },
              fundacio: { $: 0 },
              furniture: { $: 0 },
              gallery: { $: 0 },
              garden: { $: 0 },
              gateway: { $: 0 },
              geelvinck: { $: 0 },
              gemological: { $: 0 },
              geology: { $: 0 },
              georgia: { $: 0 },
              giessen: { $: 0 },
              glas: { $: 0 },
              glass: { $: 0 },
              gorge: { $: 0 },
              grandrapids: { $: 0 },
              graz: { $: 0 },
              guernsey: { $: 0 },
              halloffame: { $: 0 },
              hamburg: { $: 0 },
              handson: { $: 0 },
              harvestcelebration: { $: 0 },
              hawaii: { $: 0 },
              health: { $: 0 },
              heimatunduhren: { $: 0 },
              hellas: { $: 0 },
              helsinki: { $: 0 },
              hembygdsforbund: { $: 0 },
              heritage: { $: 0 },
              histoire: { $: 0 },
              historical: { $: 0 },
              historicalsociety: { $: 0 },
              historichouses: { $: 0 },
              historisch: { $: 0 },
              historisches: { $: 0 },
              history: { $: 0 },
              historyofscience: { $: 0 },
              horology: { $: 0 },
              house: { $: 0 },
              humanities: { $: 0 },
              illustration: { $: 0 },
              imageandsound: { $: 0 },
              indian: { $: 0 },
              indiana: { $: 0 },
              indianapolis: { $: 0 },
              indianmarket: { $: 0 },
              intelligence: { $: 0 },
              interactive: { $: 0 },
              iraq: { $: 0 },
              iron: { $: 0 },
              isleofman: { $: 0 },
              jamison: { $: 0 },
              jefferson: { $: 0 },
              jerusalem: { $: 0 },
              jewelry: { $: 0 },
              jewish: { $: 0 },
              jewishart: { $: 0 },
              jfk: { $: 0 },
              journalism: { $: 0 },
              judaica: { $: 0 },
              judygarland: { $: 0 },
              juedisches: { $: 0 },
              juif: { $: 0 },
              karate: { $: 0 },
              karikatur: { $: 0 },
              kids: { $: 0 },
              koebenhavn: { $: 0 },
              koeln: { $: 0 },
              kunst: { $: 0 },
              kunstsammlung: { $: 0 },
              kunstunddesign: { $: 0 },
              labor: { $: 0 },
              labour: { $: 0 },
              lajolla: { $: 0 },
              lancashire: { $: 0 },
              landes: { $: 0 },
              lans: { $: 0 },
              "xn--lns-qla": { $: 0 },
              larsson: { $: 0 },
              lewismiller: { $: 0 },
              lincoln: { $: 0 },
              linz: { $: 0 },
              living: { $: 0 },
              livinghistory: { $: 0 },
              localhistory: { $: 0 },
              london: { $: 0 },
              losangeles: { $: 0 },
              louvre: { $: 0 },
              loyalist: { $: 0 },
              lucerne: { $: 0 },
              luxembourg: { $: 0 },
              luzern: { $: 0 },
              mad: { $: 0 },
              madrid: { $: 0 },
              mallorca: { $: 0 },
              manchester: { $: 0 },
              mansion: { $: 0 },
              mansions: { $: 0 },
              manx: { $: 0 },
              marburg: { $: 0 },
              maritime: { $: 0 },
              maritimo: { $: 0 },
              maryland: { $: 0 },
              marylhurst: { $: 0 },
              media: { $: 0 },
              medical: { $: 0 },
              medizinhistorisches: { $: 0 },
              meeres: { $: 0 },
              memorial: { $: 0 },
              mesaverde: { $: 0 },
              michigan: { $: 0 },
              midatlantic: { $: 0 },
              military: { $: 0 },
              mill: { $: 0 },
              miners: { $: 0 },
              mining: { $: 0 },
              minnesota: { $: 0 },
              missile: { $: 0 },
              missoula: { $: 0 },
              modern: { $: 0 },
              moma: { $: 0 },
              money: { $: 0 },
              monmouth: { $: 0 },
              monticello: { $: 0 },
              montreal: { $: 0 },
              moscow: { $: 0 },
              motorcycle: { $: 0 },
              muenchen: { $: 0 },
              muenster: { $: 0 },
              mulhouse: { $: 0 },
              muncie: { $: 0 },
              museet: { $: 0 },
              museumcenter: { $: 0 },
              museumvereniging: { $: 0 },
              music: { $: 0 },
              national: { $: 0 },
              nationalfirearms: { $: 0 },
              nationalheritage: { $: 0 },
              nativeamerican: { $: 0 },
              naturalhistory: { $: 0 },
              naturalhistorymuseum: { $: 0 },
              naturalsciences: { $: 0 },
              nature: { $: 0 },
              naturhistorisches: { $: 0 },
              natuurwetenschappen: { $: 0 },
              naumburg: { $: 0 },
              naval: { $: 0 },
              nebraska: { $: 0 },
              neues: { $: 0 },
              newhampshire: { $: 0 },
              newjersey: { $: 0 },
              newmexico: { $: 0 },
              newport: { $: 0 },
              newspaper: { $: 0 },
              newyork: { $: 0 },
              niepce: { $: 0 },
              norfolk: { $: 0 },
              north: { $: 0 },
              nrw: { $: 0 },
              nyc: { $: 0 },
              nyny: { $: 0 },
              oceanographic: { $: 0 },
              oceanographique: { $: 0 },
              omaha: { $: 0 },
              online: { $: 0 },
              ontario: { $: 0 },
              openair: { $: 0 },
              oregon: { $: 0 },
              oregontrail: { $: 0 },
              otago: { $: 0 },
              oxford: { $: 0 },
              pacific: { $: 0 },
              paderborn: { $: 0 },
              palace: { $: 0 },
              paleo: { $: 0 },
              palmsprings: { $: 0 },
              panama: { $: 0 },
              paris: { $: 0 },
              pasadena: { $: 0 },
              pharmacy: { $: 0 },
              philadelphia: { $: 0 },
              philadelphiaarea: { $: 0 },
              philately: { $: 0 },
              phoenix: { $: 0 },
              photography: { $: 0 },
              pilots: { $: 0 },
              pittsburgh: { $: 0 },
              planetarium: { $: 0 },
              plantation: { $: 0 },
              plants: { $: 0 },
              plaza: { $: 0 },
              portal: { $: 0 },
              portland: { $: 0 },
              portlligat: { $: 0 },
              "posts-and-telecommunications": { $: 0 },
              preservation: { $: 0 },
              presidio: { $: 0 },
              press: { $: 0 },
              project: { $: 0 },
              public: { $: 0 },
              pubol: { $: 0 },
              quebec: { $: 0 },
              railroad: { $: 0 },
              railway: { $: 0 },
              research: { $: 0 },
              resistance: { $: 0 },
              riodejaneiro: { $: 0 },
              rochester: { $: 0 },
              rockart: { $: 0 },
              roma: { $: 0 },
              russia: { $: 0 },
              saintlouis: { $: 0 },
              salem: { $: 0 },
              salvadordali: { $: 0 },
              salzburg: { $: 0 },
              sandiego: { $: 0 },
              sanfrancisco: { $: 0 },
              santabarbara: { $: 0 },
              santacruz: { $: 0 },
              santafe: { $: 0 },
              saskatchewan: { $: 0 },
              satx: { $: 0 },
              savannahga: { $: 0 },
              schlesisches: { $: 0 },
              schoenbrunn: { $: 0 },
              schokoladen: { $: 0 },
              school: { $: 0 },
              schweiz: { $: 0 },
              science: { $: 0 },
              scienceandhistory: { $: 0 },
              scienceandindustry: { $: 0 },
              sciencecenter: { $: 0 },
              sciencecenters: { $: 0 },
              "science-fiction": { $: 0 },
              sciencehistory: { $: 0 },
              sciences: { $: 0 },
              sciencesnaturelles: { $: 0 },
              scotland: { $: 0 },
              seaport: { $: 0 },
              settlement: { $: 0 },
              settlers: { $: 0 },
              shell: { $: 0 },
              sherbrooke: { $: 0 },
              sibenik: { $: 0 },
              silk: { $: 0 },
              ski: { $: 0 },
              skole: { $: 0 },
              society: { $: 0 },
              sologne: { $: 0 },
              soundandvision: { $: 0 },
              southcarolina: { $: 0 },
              southwest: { $: 0 },
              space: { $: 0 },
              spy: { $: 0 },
              square: { $: 0 },
              stadt: { $: 0 },
              stalbans: { $: 0 },
              starnberg: { $: 0 },
              state: { $: 0 },
              stateofdelaware: { $: 0 },
              station: { $: 0 },
              steam: { $: 0 },
              steiermark: { $: 0 },
              stjohn: { $: 0 },
              stockholm: { $: 0 },
              stpetersburg: { $: 0 },
              stuttgart: { $: 0 },
              suisse: { $: 0 },
              surgeonshall: { $: 0 },
              surrey: { $: 0 },
              svizzera: { $: 0 },
              sweden: { $: 0 },
              sydney: { $: 0 },
              tank: { $: 0 },
              tcm: { $: 0 },
              technology: { $: 0 },
              telekommunikation: { $: 0 },
              television: { $: 0 },
              texas: { $: 0 },
              textile: { $: 0 },
              theater: { $: 0 },
              time: { $: 0 },
              timekeeping: { $: 0 },
              topology: { $: 0 },
              torino: { $: 0 },
              touch: { $: 0 },
              town: { $: 0 },
              transport: { $: 0 },
              tree: { $: 0 },
              trolley: { $: 0 },
              trust: { $: 0 },
              trustee: { $: 0 },
              uhren: { $: 0 },
              ulm: { $: 0 },
              undersea: { $: 0 },
              university: { $: 0 },
              usa: { $: 0 },
              usantiques: { $: 0 },
              usarts: { $: 0 },
              uscountryestate: { $: 0 },
              usculture: { $: 0 },
              usdecorativearts: { $: 0 },
              usgarden: { $: 0 },
              ushistory: { $: 0 },
              ushuaia: { $: 0 },
              uslivinghistory: { $: 0 },
              utah: { $: 0 },
              uvic: { $: 0 },
              valley: { $: 0 },
              vantaa: { $: 0 },
              versailles: { $: 0 },
              viking: { $: 0 },
              village: { $: 0 },
              virginia: { $: 0 },
              virtual: { $: 0 },
              virtuel: { $: 0 },
              vlaanderen: { $: 0 },
              volkenkunde: { $: 0 },
              wales: { $: 0 },
              wallonie: { $: 0 },
              war: { $: 0 },
              washingtondc: { $: 0 },
              watchandclock: { $: 0 },
              "watch-and-clock": { $: 0 },
              western: { $: 0 },
              westfalen: { $: 0 },
              whaling: { $: 0 },
              wildlife: { $: 0 },
              williamsburg: { $: 0 },
              windmill: { $: 0 },
              workshop: { $: 0 },
              york: { $: 0 },
              yorkshire: { $: 0 },
              yosemite: { $: 0 },
              youth: { $: 0 },
              zoological: { $: 0 },
              zoology: { $: 0 },
              "xn--9dbhblg6di": { $: 0 },
              "xn--h1aegh": { $: 0 }
            },
            mv: {
              $: 0,
              aero: { $: 0 },
              biz: { $: 0 },
              com: { $: 0 },
              coop: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 },
              int: { $: 0 },
              mil: { $: 0 },
              museum: { $: 0 },
              name: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              pro: { $: 0 }
            },
            mw: {
              $: 0,
              ac: { $: 0 },
              biz: { $: 0 },
              co: { $: 0 },
              com: { $: 0 },
              coop: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              int: { $: 0 },
              museum: { $: 0 },
              net: { $: 0 },
              org: { $: 0 }
            },
            mx: { $: 0, com: { $: 0 }, org: { $: 0 }, gob: { $: 0 }, edu: { $: 0 }, net: { $: 0 }, blogspot: { $: 0 } },
            my: {
              $: 0,
              biz: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              name: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              blogspot: { $: 0 }
            },
            mz: {
              $: 0,
              ac: { $: 0 },
              adv: { $: 0 },
              co: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              org: { $: 0 }
            },
            na: {
              $: 0,
              info: { $: 0 },
              pro: { $: 0 },
              name: { $: 0 },
              school: { $: 0 },
              or: { $: 0 },
              dr: { $: 0 },
              us: { $: 0 },
              mx: { $: 0 },
              ca: { $: 0 },
              in: { $: 0 },
              cc: { $: 0 },
              tv: { $: 0 },
              ws: { $: 0 },
              mobi: { $: 0 },
              co: { $: 0 },
              com: { $: 0 },
              org: { $: 0 }
            },
            name: { $: 0, her: { forgot: { $: 0 } }, his: { forgot: { $: 0 } } },
            nc: { $: 0, asso: { $: 0 }, nom: { $: 0 } },
            ne: { $: 0 },
            net: {
              $: 0,
              adobeaemcloud: { $: 0 },
              alwaysdata: { $: 0 },
              cloudfront: { $: 0 },
              t3l3p0rt: { $: 0 },
              appudo: { $: 0 },
              "atlassian-dev": { prod: { cdn: { $: 0 } } },
              myfritz: { $: 0 },
              onavstack: { $: 0 },
              shopselect: { $: 0 },
              blackbaudcdn: { $: 0 },
              boomla: { $: 0 },
              bplaced: { $: 0 },
              square7: { $: 0 },
              gb: { $: 0 },
              hu: { $: 0 },
              jp: { $: 0 },
              se: { $: 0 },
              uk: { $: 0 },
              in: { $: 0 },
              clickrising: { $: 0 },
              cloudaccess: { $: 0 },
              "cdn77-ssl": { $: 0 },
              cdn77: { r: { $: 0 } },
              "feste-ip": { $: 0 },
              "knx-server": { $: 0 },
              "static-access": { $: 0 },
              cryptonomic: { "*": { $: 0 } },
              dattolocal: { $: 0 },
              mydatto: { $: 0 },
              debian: { $: 0 },
              bitbridge: { $: 0 },
              "at-band-camp": { $: 0 },
              blogdns: { $: 0 },
              "broke-it": { $: 0 },
              buyshouses: { $: 0 },
              dnsalias: { $: 0 },
              dnsdojo: { $: 0 },
              "does-it": { $: 0 },
              dontexist: { $: 0 },
              dynalias: { $: 0 },
              dynathome: { $: 0 },
              endofinternet: { $: 0 },
              "from-az": { $: 0 },
              "from-co": { $: 0 },
              "from-la": { $: 0 },
              "from-ny": { $: 0 },
              "gets-it": { $: 0 },
              "ham-radio-op": { $: 0 },
              homeftp: { $: 0 },
              homeip: { $: 0 },
              homelinux: { $: 0 },
              homeunix: { $: 0 },
              "in-the-band": { $: 0 },
              "is-a-chef": { $: 0 },
              "is-a-geek": { $: 0 },
              "isa-geek": { $: 0 },
              "kicks-ass": { $: 0 },
              "office-on-the": { $: 0 },
              podzone: { $: 0 },
              "scrapper-site": { $: 0 },
              selfip: { $: 0 },
              "sells-it": { $: 0 },
              servebbs: { $: 0 },
              serveftp: { $: 0 },
              thruhere: { $: 0 },
              webhop: { $: 0 },
              definima: { $: 0 },
              casacam: { $: 0 },
              dynu: { $: 0 },
              dynv6: { $: 0 },
              twmail: { $: 0 },
              ru: { $: 0 },
              channelsdvr: { $: 0, u: { $: 0 } },
              fastlylb: { $: 0, map: { $: 0 } },
              fastly: {
                freetls: { $: 0 },
                map: { $: 0 },
                prod: { a: { $: 0 }, global: { $: 0 } },
                ssl: { a: { $: 0 }, b: { $: 0 }, global: { $: 0 } }
              },
              edgeapp: { $: 0 },
              flynnhosting: { $: 0 },
              "cdn-edges": { $: 0 },
              heteml: { $: 0 },
              cloudfunctions: { $: 0 },
              moonscale: { $: 0 },
              "in-dsl": { $: 0 },
              "in-vpn": { $: 0 },
              ipifony: { $: 0 },
              iobb: { $: 0 },
              cloudjiffy: { $: 0, "fra1-de": { $: 0 }, "west1-us": { $: 0 } },
              elastx: { "jls-sto1": { $: 0 }, "jls-sto2": { $: 0 }, "jls-sto3": { $: 0 } },
              faststacks: { $: 0 },
              massivegrid: {
                paas: { "fr-1": { $: 0 }, "lon-1": { $: 0 }, "lon-2": { $: 0 }, "ny-1": { $: 0 }, "ny-2": { $: 0 }, "sg-1": { $: 0 } }
              },
              saveincloud: { jelastic: { $: 0 }, "nordeste-idc": { $: 0 } },
              scaleforce: { j: { $: 0 } },
              tsukaeru: { jelastic: { $: 0 } },
              kinghost: { $: 0 },
              uni5: { $: 0 },
              krellian: { $: 0 },
              barsy: { $: 0 },
              memset: { $: 0 },
              azurewebsites: { $: 0 },
              "azure-mobile": { $: 0 },
              cloudapp: { $: 0 },
              azurestaticapps: {
                $: 0,
                centralus: { $: 0 },
                eastasia: { $: 0 },
                eastus2: { $: 0 },
                westeurope: { $: 0 },
                westus2: { $: 0 }
              },
              dnsup: { $: 0 },
              hicam: { $: 0 },
              "now-dns": { $: 0 },
              ownip: { $: 0 },
              vpndns: { $: 0 },
              "eating-organic": { $: 0 },
              mydissent: { $: 0 },
              myeffect: { $: 0 },
              mymediapc: { $: 0 },
              mypsx: { $: 0 },
              mysecuritycamera: { $: 0 },
              nhlfan: { $: 0 },
              "no-ip": { $: 0 },
              pgafan: { $: 0 },
              privatizehealthinsurance: { $: 0 },
              bounceme: { $: 0 },
              ddns: { $: 0 },
              redirectme: { $: 0 },
              serveblog: { $: 0 },
              serveminecraft: { $: 0 },
              sytes: { $: 0 },
              cloudycluster: { $: 0 },
              ovh: { webpaas: { "*": { $: 0 } }, hosting: { "*": { $: 0 } } },
              bar0: { $: 0 },
              bar1: { $: 0 },
              bar2: { $: 0 },
              rackmaze: { $: 0 },
              schokokeks: { $: 0 },
              "firewall-gateway": { $: 0 },
              seidat: { $: 0 },
              senseering: { $: 0 },
              siteleaf: { $: 0 },
              "vps-host": { $: 0, jelastic: { atl: { $: 0 }, njs: { $: 0 }, ric: { $: 0 } } },
              myspreadshop: { $: 0 },
              srcf: { soc: { $: 0 }, user: { $: 0 } },
              supabase: { $: 0 },
              dsmynas: { $: 0 },
              familyds: { $: 0 },
              tailscale: { beta: { $: 0 } },
              ts: { $: 0 },
              torproject: { $: 0, pages: { $: 0 } },
              "reserve-online": { $: 0 },
              "community-pro": { $: 0 },
              meinforum: { $: 0 },
              yandexcloud: { $: 0, storage: { $: 0 }, website: { $: 0 } },
              za: { $: 0 }
            },
            nf: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              per: { $: 0 },
              rec: { $: 0 },
              web: { $: 0 },
              arts: { $: 0 },
              firm: { $: 0 },
              info: { $: 0 },
              other: { $: 0 },
              store: { $: 0 }
            },
            ng: {
              $: 0,
              com: { $: 0, blogspot: { $: 0 } },
              edu: { $: 0 },
              gov: { $: 0 },
              i: { $: 0 },
              mil: { $: 0 },
              mobi: { $: 0 },
              name: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sch: { $: 0 },
              col: { $: 0 },
              firm: { $: 0 },
              gen: { $: 0 },
              ltd: { $: 0 },
              ngo: { $: 0 }
            },
            ni: {
              $: 0,
              ac: { $: 0 },
              biz: { $: 0 },
              co: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gob: { $: 0 },
              in: { $: 0 },
              info: { $: 0 },
              int: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              nom: { $: 0 },
              org: { $: 0 },
              web: { $: 0 }
            },
            nl: {
              $: 0,
              co: { $: 0 },
              "hosting-cluster": { $: 0 },
              blogspot: { $: 0 },
              khplay: { $: 0 },
              myspreadshop: { $: 0 },
              transurl: { "*": { $: 0 } },
              cistron: { $: 0 },
              demon: { $: 0 }
            },
            no: {
              $: 0,
              fhs: { $: 0 },
              vgs: { $: 0 },
              fylkesbibl: { $: 0 },
              folkebibl: { $: 0 },
              museum: { $: 0 },
              idrett: { $: 0 },
              priv: { $: 0 },
              mil: { $: 0 },
              stat: { $: 0 },
              dep: { $: 0 },
              kommune: { $: 0 },
              herad: { $: 0 },
              aa: { $: 0, gs: { $: 0 } },
              ah: { $: 0, gs: { $: 0 } },
              bu: { $: 0, gs: { $: 0 } },
              fm: { $: 0, gs: { $: 0 } },
              hl: { $: 0, gs: { $: 0 } },
              hm: { $: 0, gs: { $: 0 } },
              "jan-mayen": { $: 0, gs: { $: 0 } },
              mr: { $: 0, gs: { $: 0 } },
              nl: { $: 0, gs: { $: 0 } },
              nt: { $: 0, gs: { $: 0 } },
              of: { $: 0, gs: { $: 0 } },
              ol: { $: 0, gs: { $: 0 } },
              oslo: { $: 0, gs: { $: 0 } },
              rl: { $: 0, gs: { $: 0 } },
              sf: { $: 0, gs: { $: 0 } },
              st: { $: 0, gs: { $: 0 } },
              svalbard: { $: 0, gs: { $: 0 } },
              tm: { $: 0, gs: { $: 0 } },
              tr: { $: 0, gs: { $: 0 } },
              va: { $: 0, gs: { $: 0 } },
              vf: { $: 0, gs: { $: 0 } },
              akrehamn: { $: 0 },
              "xn--krehamn-dxa": { $: 0 },
              algard: { $: 0 },
              "xn--lgrd-poac": { $: 0 },
              arna: { $: 0 },
              brumunddal: { $: 0 },
              bryne: { $: 0 },
              bronnoysund: { $: 0 },
              "xn--brnnysund-m8ac": { $: 0 },
              drobak: { $: 0 },
              "xn--drbak-wua": { $: 0 },
              egersund: { $: 0 },
              fetsund: { $: 0 },
              floro: { $: 0 },
              "xn--flor-jra": { $: 0 },
              fredrikstad: { $: 0 },
              hokksund: { $: 0 },
              honefoss: { $: 0 },
              "xn--hnefoss-q1a": { $: 0 },
              jessheim: { $: 0 },
              jorpeland: { $: 0 },
              "xn--jrpeland-54a": { $: 0 },
              kirkenes: { $: 0 },
              kopervik: { $: 0 },
              krokstadelva: { $: 0 },
              langevag: { $: 0 },
              "xn--langevg-jxa": { $: 0 },
              leirvik: { $: 0 },
              mjondalen: { $: 0 },
              "xn--mjndalen-64a": { $: 0 },
              "mo-i-rana": { $: 0 },
              mosjoen: { $: 0 },
              "xn--mosjen-eya": { $: 0 },
              nesoddtangen: { $: 0 },
              orkanger: { $: 0 },
              osoyro: { $: 0 },
              "xn--osyro-wua": { $: 0 },
              raholt: { $: 0 },
              "xn--rholt-mra": { $: 0 },
              sandnessjoen: { $: 0 },
              "xn--sandnessjen-ogb": { $: 0 },
              skedsmokorset: { $: 0 },
              slattum: { $: 0 },
              spjelkavik: { $: 0 },
              stathelle: { $: 0 },
              stavern: { $: 0 },
              stjordalshalsen: { $: 0 },
              "xn--stjrdalshalsen-sqb": { $: 0 },
              tananger: { $: 0 },
              tranby: { $: 0 },
              vossevangen: { $: 0 },
              afjord: { $: 0 },
              "xn--fjord-lra": { $: 0 },
              agdenes: { $: 0 },
              al: { $: 0 },
              "xn--l-1fa": { $: 0 },
              alesund: { $: 0 },
              "xn--lesund-hua": { $: 0 },
              alstahaug: { $: 0 },
              alta: { $: 0 },
              "xn--lt-liac": { $: 0 },
              alaheadju: { $: 0 },
              "xn--laheadju-7ya": { $: 0 },
              alvdal: { $: 0 },
              amli: { $: 0 },
              "xn--mli-tla": { $: 0 },
              amot: { $: 0 },
              "xn--mot-tla": { $: 0 },
              andebu: { $: 0 },
              andoy: { $: 0 },
              "xn--andy-ira": { $: 0 },
              andasuolo: { $: 0 },
              ardal: { $: 0 },
              "xn--rdal-poa": { $: 0 },
              aremark: { $: 0 },
              arendal: { $: 0 },
              "xn--s-1fa": { $: 0 },
              aseral: { $: 0 },
              "xn--seral-lra": { $: 0 },
              asker: { $: 0 },
              askim: { $: 0 },
              askvoll: { $: 0 },
              askoy: { $: 0 },
              "xn--asky-ira": { $: 0 },
              asnes: { $: 0 },
              "xn--snes-poa": { $: 0 },
              audnedaln: { $: 0 },
              aukra: { $: 0 },
              aure: { $: 0 },
              aurland: { $: 0 },
              "aurskog-holand": { $: 0 },
              "xn--aurskog-hland-jnb": { $: 0 },
              austevoll: { $: 0 },
              austrheim: { $: 0 },
              averoy: { $: 0 },
              "xn--avery-yua": { $: 0 },
              balestrand: { $: 0 },
              ballangen: { $: 0 },
              balat: { $: 0 },
              "xn--blt-elab": { $: 0 },
              balsfjord: { $: 0 },
              bahccavuotna: { $: 0 },
              "xn--bhccavuotna-k7a": { $: 0 },
              bamble: { $: 0 },
              bardu: { $: 0 },
              beardu: { $: 0 },
              beiarn: { $: 0 },
              bajddar: { $: 0 },
              "xn--bjddar-pta": { $: 0 },
              baidar: { $: 0 },
              "xn--bidr-5nac": { $: 0 },
              berg: { $: 0 },
              bergen: { $: 0 },
              berlevag: { $: 0 },
              "xn--berlevg-jxa": { $: 0 },
              bearalvahki: { $: 0 },
              "xn--bearalvhki-y4a": { $: 0 },
              bindal: { $: 0 },
              birkenes: { $: 0 },
              bjarkoy: { $: 0 },
              "xn--bjarky-fya": { $: 0 },
              bjerkreim: { $: 0 },
              bjugn: { $: 0 },
              bodo: { $: 0 },
              "xn--bod-2na": { $: 0 },
              badaddja: { $: 0 },
              "xn--bdddj-mrabd": { $: 0 },
              budejju: { $: 0 },
              bokn: { $: 0 },
              bremanger: { $: 0 },
              bronnoy: { $: 0 },
              "xn--brnny-wuac": { $: 0 },
              bygland: { $: 0 },
              bykle: { $: 0 },
              barum: { $: 0 },
              "xn--brum-voa": { $: 0 },
              telemark: { bo: { $: 0 }, "xn--b-5ga": { $: 0 } },
              nordland: { bo: { $: 0 }, "xn--b-5ga": { $: 0 }, heroy: { $: 0 }, "xn--hery-ira": { $: 0 } },
              bievat: { $: 0 },
              "xn--bievt-0qa": { $: 0 },
              bomlo: { $: 0 },
              "xn--bmlo-gra": { $: 0 },
              batsfjord: { $: 0 },
              "xn--btsfjord-9za": { $: 0 },
              bahcavuotna: { $: 0 },
              "xn--bhcavuotna-s4a": { $: 0 },
              dovre: { $: 0 },
              drammen: { $: 0 },
              drangedal: { $: 0 },
              dyroy: { $: 0 },
              "xn--dyry-ira": { $: 0 },
              donna: { $: 0 },
              "xn--dnna-gra": { $: 0 },
              eid: { $: 0 },
              eidfjord: { $: 0 },
              eidsberg: { $: 0 },
              eidskog: { $: 0 },
              eidsvoll: { $: 0 },
              eigersund: { $: 0 },
              elverum: { $: 0 },
              enebakk: { $: 0 },
              engerdal: { $: 0 },
              etne: { $: 0 },
              etnedal: { $: 0 },
              evenes: { $: 0 },
              evenassi: { $: 0 },
              "xn--eveni-0qa01ga": { $: 0 },
              "evje-og-hornnes": { $: 0 },
              farsund: { $: 0 },
              fauske: { $: 0 },
              fuossko: { $: 0 },
              fuoisku: { $: 0 },
              fedje: { $: 0 },
              fet: { $: 0 },
              finnoy: { $: 0 },
              "xn--finny-yua": { $: 0 },
              fitjar: { $: 0 },
              fjaler: { $: 0 },
              fjell: { $: 0 },
              flakstad: { $: 0 },
              flatanger: { $: 0 },
              flekkefjord: { $: 0 },
              flesberg: { $: 0 },
              flora: { $: 0 },
              fla: { $: 0 },
              "xn--fl-zia": { $: 0 },
              folldal: { $: 0 },
              forsand: { $: 0 },
              fosnes: { $: 0 },
              frei: { $: 0 },
              frogn: { $: 0 },
              froland: { $: 0 },
              frosta: { $: 0 },
              frana: { $: 0 },
              "xn--frna-woa": { $: 0 },
              froya: { $: 0 },
              "xn--frya-hra": { $: 0 },
              fusa: { $: 0 },
              fyresdal: { $: 0 },
              forde: { $: 0 },
              "xn--frde-gra": { $: 0 },
              gamvik: { $: 0 },
              gangaviika: { $: 0 },
              "xn--ggaviika-8ya47h": { $: 0 },
              gaular: { $: 0 },
              gausdal: { $: 0 },
              gildeskal: { $: 0 },
              "xn--gildeskl-g0a": { $: 0 },
              giske: { $: 0 },
              gjemnes: { $: 0 },
              gjerdrum: { $: 0 },
              gjerstad: { $: 0 },
              gjesdal: { $: 0 },
              gjovik: { $: 0 },
              "xn--gjvik-wua": { $: 0 },
              gloppen: { $: 0 },
              gol: { $: 0 },
              gran: { $: 0 },
              grane: { $: 0 },
              granvin: { $: 0 },
              gratangen: { $: 0 },
              grimstad: { $: 0 },
              grong: { $: 0 },
              kraanghke: { $: 0 },
              "xn--kranghke-b0a": { $: 0 },
              grue: { $: 0 },
              gulen: { $: 0 },
              hadsel: { $: 0 },
              halden: { $: 0 },
              halsa: { $: 0 },
              hamar: { $: 0 },
              hamaroy: { $: 0 },
              habmer: { $: 0 },
              "xn--hbmer-xqa": { $: 0 },
              hapmir: { $: 0 },
              "xn--hpmir-xqa": { $: 0 },
              hammerfest: { $: 0 },
              hammarfeasta: { $: 0 },
              "xn--hmmrfeasta-s4ac": { $: 0 },
              haram: { $: 0 },
              hareid: { $: 0 },
              harstad: { $: 0 },
              hasvik: { $: 0 },
              aknoluokta: { $: 0 },
              "xn--koluokta-7ya57h": { $: 0 },
              hattfjelldal: { $: 0 },
              aarborte: { $: 0 },
              haugesund: { $: 0 },
              hemne: { $: 0 },
              hemnes: { $: 0 },
              hemsedal: { $: 0 },
              "more-og-romsdal": { heroy: { $: 0 }, sande: { $: 0 } },
              "xn--mre-og-romsdal-qqb": { "xn--hery-ira": { $: 0 }, sande: { $: 0 } },
              hitra: { $: 0 },
              hjartdal: { $: 0 },
              hjelmeland: { $: 0 },
              hobol: { $: 0 },
              "xn--hobl-ira": { $: 0 },
              hof: { $: 0 },
              hol: { $: 0 },
              hole: { $: 0 },
              holmestrand: { $: 0 },
              holtalen: { $: 0 },
              "xn--holtlen-hxa": { $: 0 },
              hornindal: { $: 0 },
              horten: { $: 0 },
              hurdal: { $: 0 },
              hurum: { $: 0 },
              hvaler: { $: 0 },
              hyllestad: { $: 0 },
              hagebostad: { $: 0 },
              "xn--hgebostad-g3a": { $: 0 },
              hoyanger: { $: 0 },
              "xn--hyanger-q1a": { $: 0 },
              hoylandet: { $: 0 },
              "xn--hylandet-54a": { $: 0 },
              ha: { $: 0 },
              "xn--h-2fa": { $: 0 },
              ibestad: { $: 0 },
              inderoy: { $: 0 },
              "xn--indery-fya": { $: 0 },
              iveland: { $: 0 },
              jevnaker: { $: 0 },
              jondal: { $: 0 },
              jolster: { $: 0 },
              "xn--jlster-bya": { $: 0 },
              karasjok: { $: 0 },
              karasjohka: { $: 0 },
              "xn--krjohka-hwab49j": { $: 0 },
              karlsoy: { $: 0 },
              galsa: { $: 0 },
              "xn--gls-elac": { $: 0 },
              karmoy: { $: 0 },
              "xn--karmy-yua": { $: 0 },
              kautokeino: { $: 0 },
              guovdageaidnu: { $: 0 },
              klepp: { $: 0 },
              klabu: { $: 0 },
              "xn--klbu-woa": { $: 0 },
              kongsberg: { $: 0 },
              kongsvinger: { $: 0 },
              kragero: { $: 0 },
              "xn--krager-gya": { $: 0 },
              kristiansand: { $: 0 },
              kristiansund: { $: 0 },
              krodsherad: { $: 0 },
              "xn--krdsherad-m8a": { $: 0 },
              kvalsund: { $: 0 },
              rahkkeravju: { $: 0 },
              "xn--rhkkervju-01af": { $: 0 },
              kvam: { $: 0 },
              kvinesdal: { $: 0 },
              kvinnherad: { $: 0 },
              kviteseid: { $: 0 },
              kvitsoy: { $: 0 },
              "xn--kvitsy-fya": { $: 0 },
              kvafjord: { $: 0 },
              "xn--kvfjord-nxa": { $: 0 },
              giehtavuoatna: { $: 0 },
              kvanangen: { $: 0 },
              "xn--kvnangen-k0a": { $: 0 },
              navuotna: { $: 0 },
              "xn--nvuotna-hwa": { $: 0 },
              kafjord: { $: 0 },
              "xn--kfjord-iua": { $: 0 },
              gaivuotna: { $: 0 },
              "xn--givuotna-8ya": { $: 0 },
              larvik: { $: 0 },
              lavangen: { $: 0 },
              lavagis: { $: 0 },
              loabat: { $: 0 },
              "xn--loabt-0qa": { $: 0 },
              lebesby: { $: 0 },
              davvesiida: { $: 0 },
              leikanger: { $: 0 },
              leirfjord: { $: 0 },
              leka: { $: 0 },
              leksvik: { $: 0 },
              lenvik: { $: 0 },
              leangaviika: { $: 0 },
              "xn--leagaviika-52b": { $: 0 },
              lesja: { $: 0 },
              levanger: { $: 0 },
              lier: { $: 0 },
              lierne: { $: 0 },
              lillehammer: { $: 0 },
              lillesand: { $: 0 },
              lindesnes: { $: 0 },
              lindas: { $: 0 },
              "xn--linds-pra": { $: 0 },
              lom: { $: 0 },
              loppa: { $: 0 },
              lahppi: { $: 0 },
              "xn--lhppi-xqa": { $: 0 },
              lund: { $: 0 },
              lunner: { $: 0 },
              luroy: { $: 0 },
              "xn--lury-ira": { $: 0 },
              luster: { $: 0 },
              lyngdal: { $: 0 },
              lyngen: { $: 0 },
              ivgu: { $: 0 },
              lardal: { $: 0 },
              lerdal: { $: 0 },
              "xn--lrdal-sra": { $: 0 },
              lodingen: { $: 0 },
              "xn--ldingen-q1a": { $: 0 },
              lorenskog: { $: 0 },
              "xn--lrenskog-54a": { $: 0 },
              loten: { $: 0 },
              "xn--lten-gra": { $: 0 },
              malvik: { $: 0 },
              masoy: { $: 0 },
              "xn--msy-ula0h": { $: 0 },
              muosat: { $: 0 },
              "xn--muost-0qa": { $: 0 },
              mandal: { $: 0 },
              marker: { $: 0 },
              marnardal: { $: 0 },
              masfjorden: { $: 0 },
              meland: { $: 0 },
              meldal: { $: 0 },
              melhus: { $: 0 },
              meloy: { $: 0 },
              "xn--mely-ira": { $: 0 },
              meraker: { $: 0 },
              "xn--merker-kua": { $: 0 },
              moareke: { $: 0 },
              "xn--moreke-jua": { $: 0 },
              midsund: { $: 0 },
              "midtre-gauldal": { $: 0 },
              modalen: { $: 0 },
              modum: { $: 0 },
              molde: { $: 0 },
              moskenes: { $: 0 },
              moss: { $: 0 },
              mosvik: { $: 0 },
              malselv: { $: 0 },
              "xn--mlselv-iua": { $: 0 },
              malatvuopmi: { $: 0 },
              "xn--mlatvuopmi-s4a": { $: 0 },
              namdalseid: { $: 0 },
              aejrie: { $: 0 },
              namsos: { $: 0 },
              namsskogan: { $: 0 },
              naamesjevuemie: { $: 0 },
              "xn--nmesjevuemie-tcba": { $: 0 },
              laakesvuemie: { $: 0 },
              nannestad: { $: 0 },
              narvik: { $: 0 },
              narviika: { $: 0 },
              naustdal: { $: 0 },
              "nedre-eiker": { $: 0 },
              akershus: { nes: { $: 0 } },
              buskerud: { nes: { $: 0 } },
              nesna: { $: 0 },
              nesodden: { $: 0 },
              nesseby: { $: 0 },
              unjarga: { $: 0 },
              "xn--unjrga-rta": { $: 0 },
              nesset: { $: 0 },
              nissedal: { $: 0 },
              nittedal: { $: 0 },
              "nord-aurdal": { $: 0 },
              "nord-fron": { $: 0 },
              "nord-odal": { $: 0 },
              norddal: { $: 0 },
              nordkapp: { $: 0 },
              davvenjarga: { $: 0 },
              "xn--davvenjrga-y4a": { $: 0 },
              "nordre-land": { $: 0 },
              nordreisa: { $: 0 },
              raisa: { $: 0 },
              "xn--risa-5na": { $: 0 },
              "nore-og-uvdal": { $: 0 },
              notodden: { $: 0 },
              naroy: { $: 0 },
              "xn--nry-yla5g": { $: 0 },
              notteroy: { $: 0 },
              "xn--nttery-byae": { $: 0 },
              odda: { $: 0 },
              oksnes: { $: 0 },
              "xn--ksnes-uua": { $: 0 },
              oppdal: { $: 0 },
              oppegard: { $: 0 },
              "xn--oppegrd-ixa": { $: 0 },
              orkdal: { $: 0 },
              orland: { $: 0 },
              "xn--rland-uua": { $: 0 },
              orskog: { $: 0 },
              "xn--rskog-uua": { $: 0 },
              orsta: { $: 0 },
              "xn--rsta-fra": { $: 0 },
              hedmark: { os: { $: 0 }, valer: { $: 0 }, "xn--vler-qoa": { $: 0 } },
              hordaland: { os: { $: 0 } },
              osen: { $: 0 },
              osteroy: { $: 0 },
              "xn--ostery-fya": { $: 0 },
              "ostre-toten": { $: 0 },
              "xn--stre-toten-zcb": { $: 0 },
              overhalla: { $: 0 },
              "ovre-eiker": { $: 0 },
              "xn--vre-eiker-k8a": { $: 0 },
              oyer: { $: 0 },
              "xn--yer-zna": { $: 0 },
              oygarden: { $: 0 },
              "xn--ygarden-p1a": { $: 0 },
              "oystre-slidre": { $: 0 },
              "xn--ystre-slidre-ujb": { $: 0 },
              porsanger: { $: 0 },
              porsangu: { $: 0 },
              "xn--porsgu-sta26f": { $: 0 },
              porsgrunn: { $: 0 },
              radoy: { $: 0 },
              "xn--rady-ira": { $: 0 },
              rakkestad: { $: 0 },
              rana: { $: 0 },
              ruovat: { $: 0 },
              randaberg: { $: 0 },
              rauma: { $: 0 },
              rendalen: { $: 0 },
              rennebu: { $: 0 },
              rennesoy: { $: 0 },
              "xn--rennesy-v1a": { $: 0 },
              rindal: { $: 0 },
              ringebu: { $: 0 },
              ringerike: { $: 0 },
              ringsaker: { $: 0 },
              rissa: { $: 0 },
              risor: { $: 0 },
              "xn--risr-ira": { $: 0 },
              roan: { $: 0 },
              rollag: { $: 0 },
              rygge: { $: 0 },
              ralingen: { $: 0 },
              "xn--rlingen-mxa": { $: 0 },
              rodoy: { $: 0 },
              "xn--rdy-0nab": { $: 0 },
              romskog: { $: 0 },
              "xn--rmskog-bya": { $: 0 },
              roros: { $: 0 },
              "xn--rros-gra": { $: 0 },
              rost: { $: 0 },
              "xn--rst-0na": { $: 0 },
              royken: { $: 0 },
              "xn--ryken-vua": { $: 0 },
              royrvik: { $: 0 },
              "xn--ryrvik-bya": { $: 0 },
              rade: { $: 0 },
              "xn--rde-ula": { $: 0 },
              salangen: { $: 0 },
              siellak: { $: 0 },
              saltdal: { $: 0 },
              salat: { $: 0 },
              "xn--slt-elab": { $: 0 },
              "xn--slat-5na": { $: 0 },
              samnanger: { $: 0 },
              vestfold: { sande: { $: 0 } },
              sandefjord: { $: 0 },
              sandnes: { $: 0 },
              sandoy: { $: 0 },
              "xn--sandy-yua": { $: 0 },
              sarpsborg: { $: 0 },
              sauda: { $: 0 },
              sauherad: { $: 0 },
              sel: { $: 0 },
              selbu: { $: 0 },
              selje: { $: 0 },
              seljord: { $: 0 },
              sigdal: { $: 0 },
              siljan: { $: 0 },
              sirdal: { $: 0 },
              skaun: { $: 0 },
              skedsmo: { $: 0 },
              ski: { $: 0 },
              skien: { $: 0 },
              skiptvet: { $: 0 },
              skjervoy: { $: 0 },
              "xn--skjervy-v1a": { $: 0 },
              skierva: { $: 0 },
              "xn--skierv-uta": { $: 0 },
              skjak: { $: 0 },
              "xn--skjk-soa": { $: 0 },
              skodje: { $: 0 },
              skanland: { $: 0 },
              "xn--sknland-fxa": { $: 0 },
              skanit: { $: 0 },
              "xn--sknit-yqa": { $: 0 },
              smola: { $: 0 },
              "xn--smla-hra": { $: 0 },
              snillfjord: { $: 0 },
              snasa: { $: 0 },
              "xn--snsa-roa": { $: 0 },
              snoasa: { $: 0 },
              snaase: { $: 0 },
              "xn--snase-nra": { $: 0 },
              sogndal: { $: 0 },
              sokndal: { $: 0 },
              sola: { $: 0 },
              solund: { $: 0 },
              songdalen: { $: 0 },
              sortland: { $: 0 },
              spydeberg: { $: 0 },
              stange: { $: 0 },
              stavanger: { $: 0 },
              steigen: { $: 0 },
              steinkjer: { $: 0 },
              stjordal: { $: 0 },
              "xn--stjrdal-s1a": { $: 0 },
              stokke: { $: 0 },
              "stor-elvdal": { $: 0 },
              stord: { $: 0 },
              stordal: { $: 0 },
              storfjord: { $: 0 },
              omasvuotna: { $: 0 },
              strand: { $: 0 },
              stranda: { $: 0 },
              stryn: { $: 0 },
              sula: { $: 0 },
              suldal: { $: 0 },
              sund: { $: 0 },
              sunndal: { $: 0 },
              surnadal: { $: 0 },
              sveio: { $: 0 },
              svelvik: { $: 0 },
              sykkylven: { $: 0 },
              sogne: { $: 0 },
              "xn--sgne-gra": { $: 0 },
              somna: { $: 0 },
              "xn--smna-gra": { $: 0 },
              "sondre-land": { $: 0 },
              "xn--sndre-land-0cb": { $: 0 },
              "sor-aurdal": { $: 0 },
              "xn--sr-aurdal-l8a": { $: 0 },
              "sor-fron": { $: 0 },
              "xn--sr-fron-q1a": { $: 0 },
              "sor-odal": { $: 0 },
              "xn--sr-odal-q1a": { $: 0 },
              "sor-varanger": { $: 0 },
              "xn--sr-varanger-ggb": { $: 0 },
              "matta-varjjat": { $: 0 },
              "xn--mtta-vrjjat-k7af": { $: 0 },
              sorfold: { $: 0 },
              "xn--srfold-bya": { $: 0 },
              sorreisa: { $: 0 },
              "xn--srreisa-q1a": { $: 0 },
              sorum: { $: 0 },
              "xn--srum-gra": { $: 0 },
              tana: { $: 0 },
              deatnu: { $: 0 },
              time: { $: 0 },
              tingvoll: { $: 0 },
              tinn: { $: 0 },
              tjeldsund: { $: 0 },
              dielddanuorri: { $: 0 },
              tjome: { $: 0 },
              "xn--tjme-hra": { $: 0 },
              tokke: { $: 0 },
              tolga: { $: 0 },
              torsken: { $: 0 },
              tranoy: { $: 0 },
              "xn--trany-yua": { $: 0 },
              tromso: { $: 0 },
              "xn--troms-zua": { $: 0 },
              tromsa: { $: 0 },
              romsa: { $: 0 },
              trondheim: { $: 0 },
              troandin: { $: 0 },
              trysil: { $: 0 },
              trana: { $: 0 },
              "xn--trna-woa": { $: 0 },
              trogstad: { $: 0 },
              "xn--trgstad-r1a": { $: 0 },
              tvedestrand: { $: 0 },
              tydal: { $: 0 },
              tynset: { $: 0 },
              tysfjord: { $: 0 },
              divtasvuodna: { $: 0 },
              divttasvuotna: { $: 0 },
              tysnes: { $: 0 },
              tysvar: { $: 0 },
              "xn--tysvr-vra": { $: 0 },
              tonsberg: { $: 0 },
              "xn--tnsberg-q1a": { $: 0 },
              ullensaker: { $: 0 },
              ullensvang: { $: 0 },
              ulvik: { $: 0 },
              utsira: { $: 0 },
              vadso: { $: 0 },
              "xn--vads-jra": { $: 0 },
              cahcesuolo: { $: 0 },
              "xn--hcesuolo-7ya35b": { $: 0 },
              vaksdal: { $: 0 },
              valle: { $: 0 },
              vang: { $: 0 },
              vanylven: { $: 0 },
              vardo: { $: 0 },
              "xn--vard-jra": { $: 0 },
              varggat: { $: 0 },
              "xn--vrggt-xqad": { $: 0 },
              vefsn: { $: 0 },
              vaapste: { $: 0 },
              vega: { $: 0 },
              vegarshei: { $: 0 },
              "xn--vegrshei-c0a": { $: 0 },
              vennesla: { $: 0 },
              verdal: { $: 0 },
              verran: { $: 0 },
              vestby: { $: 0 },
              vestnes: { $: 0 },
              "vestre-slidre": { $: 0 },
              "vestre-toten": { $: 0 },
              vestvagoy: { $: 0 },
              "xn--vestvgy-ixa6o": { $: 0 },
              vevelstad: { $: 0 },
              vik: { $: 0 },
              vikna: { $: 0 },
              vindafjord: { $: 0 },
              volda: { $: 0 },
              voss: { $: 0 },
              varoy: { $: 0 },
              "xn--vry-yla5g": { $: 0 },
              vagan: { $: 0 },
              "xn--vgan-qoa": { $: 0 },
              voagat: { $: 0 },
              vagsoy: { $: 0 },
              "xn--vgsy-qoa0j": { $: 0 },
              vaga: { $: 0 },
              "xn--vg-yiab": { $: 0 },
              ostfold: { valer: { $: 0 } },
              "xn--stfold-9xa": { "xn--vler-qoa": { $: 0 } },
              co: { $: 0 },
              blogspot: { $: 0 },
              myspreadshop: { $: 0 }
            },
            np: { "*": { $: 0 } },
            nr: { $: 0, biz: { $: 0 }, info: { $: 0 }, gov: { $: 0 }, edu: { $: 0 }, org: { $: 0 }, net: { $: 0 }, com: { $: 0 } },
            nu: { $: 0, merseine: { $: 0 }, mine: { $: 0 }, shacknet: { $: 0 }, enterprisecloud: { $: 0 } },
            nz: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0, blogspot: { $: 0 } },
              cri: { $: 0 },
              geek: { $: 0 },
              gen: { $: 0 },
              govt: { $: 0 },
              health: { $: 0 },
              iwi: { $: 0 },
              kiwi: { $: 0 },
              maori: { $: 0 },
              mil: { $: 0 },
              "xn--mori-qsa": { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              parliament: { $: 0 },
              school: { $: 0 }
            },
            om: {
              $: 0,
              co: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              med: { $: 0 },
              museum: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              pro: { $: 0 }
            },
            onion: { $: 0 },
            org: {
              $: 0,
              altervista: { $: 0 },
              amune: { tele: { $: 0 } },
              pimienta: { $: 0 },
              poivron: { $: 0 },
              potager: { $: 0 },
              sweetpepper: { $: 0 },
              ae: { $: 0 },
              us: { $: 0 },
              certmgr: { $: 0 },
              cdn77: { c: { $: 0 }, rsc: { $: 0 } },
              "cdn77-secure": { origin: { ssl: { $: 0 } } },
              cloudns: { $: 0 },
              duckdns: { $: 0 },
              tunk: { $: 0 },
              dyndns: { $: 0, go: { $: 0 }, home: { $: 0 } },
              blogdns: { $: 0 },
              blogsite: { $: 0 },
              boldlygoingnowhere: { $: 0 },
              dnsalias: { $: 0 },
              dnsdojo: { $: 0 },
              doesntexist: { $: 0 },
              dontexist: { $: 0 },
              doomdns: { $: 0 },
              dvrdns: { $: 0 },
              dynalias: { $: 0 },
              endofinternet: { $: 0 },
              endoftheinternet: { $: 0 },
              "from-me": { $: 0 },
              "game-host": { $: 0 },
              gotdns: { $: 0 },
              "hobby-site": { $: 0 },
              homedns: { $: 0 },
              homeftp: { $: 0 },
              homelinux: { $: 0 },
              homeunix: { $: 0 },
              "is-a-bruinsfan": { $: 0 },
              "is-a-candidate": { $: 0 },
              "is-a-celticsfan": { $: 0 },
              "is-a-chef": { $: 0 },
              "is-a-geek": { $: 0 },
              "is-a-knight": { $: 0 },
              "is-a-linux-user": { $: 0 },
              "is-a-patsfan": { $: 0 },
              "is-a-soxfan": { $: 0 },
              "is-found": { $: 0 },
              "is-lost": { $: 0 },
              "is-saved": { $: 0 },
              "is-very-bad": { $: 0 },
              "is-very-evil": { $: 0 },
              "is-very-good": { $: 0 },
              "is-very-nice": { $: 0 },
              "is-very-sweet": { $: 0 },
              "isa-geek": { $: 0 },
              "kicks-ass": { $: 0 },
              misconfused: { $: 0 },
              podzone: { $: 0 },
              readmyblog: { $: 0 },
              selfip: { $: 0 },
              sellsyourhome: { $: 0 },
              servebbs: { $: 0 },
              serveftp: { $: 0 },
              servegame: { $: 0 },
              "stuff-4-sale": { $: 0 },
              webhop: { $: 0 },
              ddnss: { $: 0 },
              accesscam: { $: 0 },
              camdvr: { $: 0 },
              freeddns: { $: 0 },
              mywire: { $: 0 },
              webredirect: { $: 0 },
              eu: {
                $: 0,
                al: { $: 0 },
                asso: { $: 0 },
                at: { $: 0 },
                au: { $: 0 },
                be: { $: 0 },
                bg: { $: 0 },
                ca: { $: 0 },
                cd: { $: 0 },
                ch: { $: 0 },
                cn: { $: 0 },
                cy: { $: 0 },
                cz: { $: 0 },
                de: { $: 0 },
                dk: { $: 0 },
                edu: { $: 0 },
                ee: { $: 0 },
                es: { $: 0 },
                fi: { $: 0 },
                fr: { $: 0 },
                gr: { $: 0 },
                hr: { $: 0 },
                hu: { $: 0 },
                ie: { $: 0 },
                il: { $: 0 },
                in: { $: 0 },
                int: { $: 0 },
                is: { $: 0 },
                it: { $: 0 },
                jp: { $: 0 },
                kr: { $: 0 },
                lt: { $: 0 },
                lu: { $: 0 },
                lv: { $: 0 },
                mc: { $: 0 },
                me: { $: 0 },
                mk: { $: 0 },
                mt: { $: 0 },
                my: { $: 0 },
                net: { $: 0 },
                ng: { $: 0 },
                nl: { $: 0 },
                no: { $: 0 },
                nz: { $: 0 },
                paris: { $: 0 },
                pl: { $: 0 },
                pt: { $: 0 },
                "q-a": { $: 0 },
                ro: { $: 0 },
                ru: { $: 0 },
                se: { $: 0 },
                si: { $: 0 },
                sk: { $: 0 },
                tr: { $: 0 },
                uk: { $: 0 },
                us: { $: 0 }
              },
              twmail: { $: 0 },
              fedorainfracloud: { $: 0 },
              fedorapeople: { $: 0 },
              fedoraproject: { cloud: { $: 0 }, os: { app: { $: 0 } }, stg: { os: { app: { $: 0 } } } },
              freedesktop: { $: 0 },
              hepforge: { $: 0 },
              "in-dsl": { $: 0 },
              "in-vpn": { $: 0 },
              js: { $: 0 },
              barsy: { $: 0 },
              mayfirst: { $: 0 },
              "mozilla-iot": { $: 0 },
              bmoattachments: { $: 0 },
              dynserv: { $: 0 },
              "now-dns": { $: 0 },
              "cable-modem": { $: 0 },
              collegefan: { $: 0 },
              couchpotatofries: { $: 0 },
              mlbfan: { $: 0 },
              mysecuritycamera: { $: 0 },
              nflfan: { $: 0 },
              "read-books": { $: 0 },
              ufcfan: { $: 0 },
              hopto: { $: 0 },
              myftp: { $: 0 },
              "no-ip": { $: 0 },
              zapto: { $: 0 },
              httpbin: { $: 0 },
              pubtls: { $: 0 },
              "my-firewall": { $: 0 },
              myfirewall: { $: 0 },
              spdns: { $: 0 },
              "small-web": { $: 0 },
              dsmynas: { $: 0 },
              familyds: { $: 0 },
              teckids: { s3: { $: 0 } },
              tuxfamily: { $: 0 },
              diskstation: { $: 0 },
              hk: { $: 0 },
              wmflabs: { $: 0 },
              toolforge: { $: 0 },
              wmcloud: { $: 0 },
              za: { $: 0 }
            },
            pa: {
              $: 0,
              ac: { $: 0 },
              gob: { $: 0 },
              com: { $: 0 },
              org: { $: 0 },
              sld: { $: 0 },
              edu: { $: 0 },
              net: { $: 0 },
              ing: { $: 0 },
              abo: { $: 0 },
              med: { $: 0 },
              nom: { $: 0 }
            },
            pe: {
              $: 0,
              edu: { $: 0 },
              gob: { $: 0 },
              nom: { $: 0 },
              mil: { $: 0 },
              org: { $: 0 },
              com: { $: 0 },
              net: { $: 0 },
              blogspot: { $: 0 }
            },
            pf: { $: 0, com: { $: 0 }, org: { $: 0 }, edu: { $: 0 } },
            pg: { "*": { $: 0 } },
            ph: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              gov: { $: 0 },
              edu: { $: 0 },
              ngo: { $: 0 },
              mil: { $: 0 },
              i: { $: 0 }
            },
            pk: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              edu: { $: 0 },
              org: { $: 0 },
              fam: { $: 0 },
              biz: { $: 0 },
              web: { $: 0 },
              gov: { $: 0 },
              gob: { $: 0 },
              gok: { $: 0 },
              gon: { $: 0 },
              gop: { $: 0 },
              gos: { $: 0 },
              info: { $: 0 }
            },
            pl: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              aid: { $: 0 },
              agro: { $: 0 },
              atm: { $: 0 },
              auto: { $: 0 },
              biz: { $: 0 },
              edu: { $: 0 },
              gmina: { $: 0 },
              gsm: { $: 0 },
              info: { $: 0 },
              mail: { $: 0 },
              miasta: { $: 0 },
              media: { $: 0 },
              mil: { $: 0 },
              nieruchomosci: { $: 0 },
              nom: { $: 0 },
              pc: { $: 0 },
              powiat: { $: 0 },
              priv: { $: 0 },
              realestate: { $: 0 },
              rel: { $: 0 },
              sex: { $: 0 },
              shop: { $: 0 },
              sklep: { $: 0 },
              sos: { $: 0 },
              szkola: { $: 0 },
              targi: { $: 0 },
              tm: { $: 0 },
              tourism: { $: 0 },
              travel: { $: 0 },
              turystyka: { $: 0 },
              gov: {
                $: 0,
                ap: { $: 0 },
                ic: { $: 0 },
                is: { $: 0 },
                us: { $: 0 },
                kmpsp: { $: 0 },
                kppsp: { $: 0 },
                kwpsp: { $: 0 },
                psp: { $: 0 },
                wskr: { $: 0 },
                kwp: { $: 0 },
                mw: { $: 0 },
                ug: { $: 0 },
                um: { $: 0 },
                umig: { $: 0 },
                ugim: { $: 0 },
                upow: { $: 0 },
                uw: { $: 0 },
                starostwo: { $: 0 },
                pa: { $: 0 },
                po: { $: 0 },
                psse: { $: 0 },
                pup: { $: 0 },
                rzgw: { $: 0 },
                sa: { $: 0 },
                so: { $: 0 },
                sr: { $: 0 },
                wsa: { $: 0 },
                sko: { $: 0 },
                uzs: { $: 0 },
                wiih: { $: 0 },
                winb: { $: 0 },
                pinb: { $: 0 },
                wios: { $: 0 },
                witd: { $: 0 },
                wzmiuw: { $: 0 },
                piw: { $: 0 },
                wiw: { $: 0 },
                griw: { $: 0 },
                wif: { $: 0 },
                oum: { $: 0 },
                sdn: { $: 0 },
                zp: { $: 0 },
                uppo: { $: 0 },
                mup: { $: 0 },
                wuoz: { $: 0 },
                konsulat: { $: 0 },
                oirm: { $: 0 }
              },
              augustow: { $: 0 },
              "babia-gora": { $: 0 },
              bedzin: { $: 0 },
              beskidy: { $: 0 },
              bialowieza: { $: 0 },
              bialystok: { $: 0 },
              bielawa: { $: 0 },
              bieszczady: { $: 0 },
              boleslawiec: { $: 0 },
              bydgoszcz: { $: 0 },
              bytom: { $: 0 },
              cieszyn: { $: 0 },
              czeladz: { $: 0 },
              czest: { $: 0 },
              dlugoleka: { $: 0 },
              elblag: { $: 0 },
              elk: { $: 0 },
              glogow: { $: 0 },
              gniezno: { $: 0 },
              gorlice: { $: 0 },
              grajewo: { $: 0 },
              ilawa: { $: 0 },
              jaworzno: { $: 0 },
              "jelenia-gora": { $: 0 },
              jgora: { $: 0 },
              kalisz: { $: 0 },
              "kazimierz-dolny": { $: 0 },
              karpacz: { $: 0 },
              kartuzy: { $: 0 },
              kaszuby: { $: 0 },
              katowice: { $: 0 },
              kepno: { $: 0 },
              ketrzyn: { $: 0 },
              klodzko: { $: 0 },
              kobierzyce: { $: 0 },
              kolobrzeg: { $: 0 },
              konin: { $: 0 },
              konskowola: { $: 0 },
              kutno: { $: 0 },
              lapy: { $: 0 },
              lebork: { $: 0 },
              legnica: { $: 0 },
              lezajsk: { $: 0 },
              limanowa: { $: 0 },
              lomza: { $: 0 },
              lowicz: { $: 0 },
              lubin: { $: 0 },
              lukow: { $: 0 },
              malbork: { $: 0 },
              malopolska: { $: 0 },
              mazowsze: { $: 0 },
              mazury: { $: 0 },
              mielec: { $: 0 },
              mielno: { $: 0 },
              mragowo: { $: 0 },
              naklo: { $: 0 },
              nowaruda: { $: 0 },
              nysa: { $: 0 },
              olawa: { $: 0 },
              olecko: { $: 0 },
              olkusz: { $: 0 },
              olsztyn: { $: 0 },
              opoczno: { $: 0 },
              opole: { $: 0 },
              ostroda: { $: 0 },
              ostroleka: { $: 0 },
              ostrowiec: { $: 0 },
              ostrowwlkp: { $: 0 },
              pila: { $: 0 },
              pisz: { $: 0 },
              podhale: { $: 0 },
              podlasie: { $: 0 },
              polkowice: { $: 0 },
              pomorze: { $: 0 },
              pomorskie: { $: 0 },
              prochowice: { $: 0 },
              pruszkow: { $: 0 },
              przeworsk: { $: 0 },
              pulawy: { $: 0 },
              radom: { $: 0 },
              "rawa-maz": { $: 0 },
              rybnik: { $: 0 },
              rzeszow: { $: 0 },
              sanok: { $: 0 },
              sejny: { $: 0 },
              slask: { $: 0 },
              slupsk: { $: 0 },
              sosnowiec: { $: 0 },
              "stalowa-wola": { $: 0 },
              skoczow: { $: 0 },
              starachowice: { $: 0 },
              stargard: { $: 0 },
              suwalki: { $: 0 },
              swidnica: { $: 0 },
              swiebodzin: { $: 0 },
              swinoujscie: { $: 0 },
              szczecin: { $: 0 },
              szczytno: { $: 0 },
              tarnobrzeg: { $: 0 },
              tgory: { $: 0 },
              turek: { $: 0 },
              tychy: { $: 0 },
              ustka: { $: 0 },
              walbrzych: { $: 0 },
              warmia: { $: 0 },
              warszawa: { $: 0 },
              waw: { $: 0 },
              wegrow: { $: 0 },
              wielun: { $: 0 },
              wlocl: { $: 0 },
              wloclawek: { $: 0 },
              wodzislaw: { $: 0 },
              wolomin: { $: 0 },
              wroclaw: { $: 0 },
              zachpomor: { $: 0 },
              zagan: { $: 0 },
              zarow: { $: 0 },
              zgora: { $: 0 },
              zgorzelec: { $: 0 },
              beep: { $: 0 },
              "ecommerce-shop": { $: 0 },
              shoparena: { $: 0 },
              homesklep: { $: 0 },
              sdscloud: { $: 0 },
              unicloud: { $: 0 },
              krasnik: { $: 0 },
              leczna: { $: 0 },
              lubartow: { $: 0 },
              lublin: { $: 0 },
              poniatowa: { $: 0 },
              swidnik: { $: 0 },
              co: { $: 0 },
              art: { $: 0 },
              gliwice: { $: 0 },
              krakow: { $: 0 },
              poznan: { $: 0 },
              wroc: { $: 0 },
              zakopane: { $: 0 },
              myspreadshop: { $: 0 },
              gda: { $: 0 },
              gdansk: { $: 0 },
              gdynia: { $: 0 },
              med: { $: 0 },
              sopot: { $: 0 }
            },
            pm: { $: 0, own: { $: 0 } },
            pn: { $: 0, gov: { $: 0 }, co: { $: 0 }, org: { $: 0 }, edu: { $: 0 }, net: { $: 0 } },
            post: { $: 0 },
            pr: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              gov: { $: 0 },
              edu: { $: 0 },
              isla: { $: 0 },
              pro: { $: 0 },
              biz: { $: 0 },
              info: { $: 0 },
              name: { $: 0 },
              est: { $: 0 },
              prof: { $: 0 },
              ac: { $: 0 }
            },
            pro: {
              $: 0,
              aaa: { $: 0 },
              aca: { $: 0 },
              acct: { $: 0 },
              avocat: { $: 0 },
              bar: { $: 0 },
              cpa: { $: 0 },
              eng: { $: 0 },
              jur: { $: 0 },
              law: { $: 0 },
              med: { $: 0 },
              recht: { $: 0 },
              cloudns: { $: 0 },
              dnstrace: { bci: { $: 0 } },
              barsy: { $: 0 }
            },
            ps: { $: 0, edu: { $: 0 }, gov: { $: 0 }, sec: { $: 0 }, plo: { $: 0 }, com: { $: 0 }, org: { $: 0 }, net: { $: 0 } },
            pt: {
              $: 0,
              net: { $: 0 },
              gov: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              int: { $: 0 },
              publ: { $: 0 },
              com: { $: 0 },
              nome: { $: 0 },
              blogspot: { $: 0 }
            },
            pw: {
              $: 0,
              co: { $: 0 },
              ne: { $: 0 },
              or: { $: 0 },
              ed: { $: 0 },
              go: { $: 0 },
              belau: { $: 0 },
              cloudns: { $: 0 },
              x443: { $: 0 }
            },
            py: { $: 0, com: { $: 0 }, coop: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            qa: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              name: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sch: { $: 0 },
              blogspot: { $: 0 }
            },
            re: { $: 0, asso: { $: 0 }, com: { $: 0 }, nom: { $: 0 }, blogspot: { $: 0 } },
            ro: {
              $: 0,
              arts: { $: 0 },
              com: { $: 0 },
              firm: { $: 0 },
              info: { $: 0 },
              nom: { $: 0 },
              nt: { $: 0 },
              org: { $: 0 },
              rec: { $: 0 },
              store: { $: 0 },
              tm: { $: 0 },
              www: { $: 0 },
              co: { $: 0 },
              shop: { $: 0 },
              blogspot: { $: 0 },
              barsy: { $: 0 }
            },
            rs: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              in: { $: 0 },
              org: { $: 0 },
              brendly: { shop: { $: 0 } },
              blogspot: { $: 0 },
              ua: { $: 0 },
              ox: { $: 0 }
            },
            ru: {
              $: 0,
              ac: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              int: { $: 0 },
              mil: { $: 0 },
              test: { $: 0 },
              eurodir: { $: 0 },
              adygeya: { $: 0 },
              bashkiria: { $: 0 },
              bir: { $: 0 },
              cbg: { $: 0 },
              com: { $: 0 },
              dagestan: { $: 0 },
              grozny: { $: 0 },
              kalmykia: { $: 0 },
              kustanai: { $: 0 },
              marine: { $: 0 },
              mordovia: { $: 0 },
              msk: { $: 0 },
              mytis: { $: 0 },
              nalchik: { $: 0 },
              nov: { $: 0 },
              pyatigorsk: { $: 0 },
              spb: { $: 0 },
              vladikavkaz: { $: 0 },
              vladimir: { $: 0 },
              blogspot: { $: 0 },
              na4u: { $: 0 },
              mircloud: { $: 0 },
              regruhosting: { jelastic: { $: 0 } },
              myjino: { $: 0, hosting: { "*": { $: 0 } }, landing: { "*": { $: 0 } }, spectrum: { "*": { $: 0 } }, vps: { "*": { $: 0 } } },
              cldmail: { hb: { $: 0 } },
              mcdir: { $: 0, vps: { $: 0 } },
              mcpre: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              pp: { $: 0 },
              lk3: { $: 0 },
              ras: { $: 0 }
            },
            rw: { $: 0, ac: { $: 0 }, co: { $: 0 }, coop: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            sa: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              gov: { $: 0 },
              med: { $: 0 },
              pub: { $: 0 },
              edu: { $: 0 },
              sch: { $: 0 }
            },
            sb: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            sc: { $: 0, com: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, org: { $: 0 }, edu: { $: 0 } },
            sd: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              med: { $: 0 },
              tv: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 }
            },
            se: {
              $: 0,
              a: { $: 0 },
              ac: { $: 0 },
              b: { $: 0 },
              bd: { $: 0 },
              brand: { $: 0 },
              c: { $: 0 },
              d: { $: 0 },
              e: { $: 0 },
              f: { $: 0 },
              fh: { $: 0 },
              fhsk: { $: 0 },
              fhv: { $: 0 },
              g: { $: 0 },
              h: { $: 0 },
              i: { $: 0 },
              k: { $: 0 },
              komforb: { $: 0 },
              kommunalforbund: { $: 0 },
              komvux: { $: 0 },
              l: { $: 0 },
              lanbib: { $: 0 },
              m: { $: 0 },
              n: { $: 0 },
              naturbruksgymn: { $: 0 },
              o: { $: 0 },
              org: { $: 0 },
              p: { $: 0 },
              parti: { $: 0 },
              pp: { $: 0 },
              press: { $: 0 },
              r: { $: 0 },
              s: { $: 0 },
              t: { $: 0 },
              tm: { $: 0 },
              u: { $: 0 },
              w: { $: 0 },
              x: { $: 0 },
              y: { $: 0 },
              z: { $: 0 },
              com: { $: 0 },
              blogspot: { $: 0 },
              conf: { $: 0 },
              iopsys: { $: 0 },
              itcouldbewor: { $: 0 },
              myspreadshop: { $: 0 },
              paba: { su: { $: 0 } }
            },
            sg: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              gov: { $: 0 },
              edu: { $: 0 },
              per: { $: 0 },
              blogspot: { $: 0 },
              enscaled: { $: 0 }
            },
            sh: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              gov: { $: 0 },
              org: { $: 0 },
              mil: { $: 0 },
              bip: { $: 0 },
              hashbang: { $: 0 },
              platform: { bc: { $: 0 }, ent: { $: 0 }, eu: { $: 0 }, us: { $: 0 } },
              now: { $: 0 },
              vxl: { $: 0 },
              wedeploy: { $: 0 }
            },
            si: { $: 0, gitapp: { $: 0 }, gitpage: { $: 0 }, blogspot: { $: 0 } },
            sj: { $: 0 },
            sk: { $: 0, blogspot: { $: 0 } },
            sl: { $: 0, com: { $: 0 }, net: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, org: { $: 0 } },
            sm: { $: 0 },
            sn: {
              $: 0,
              art: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gouv: { $: 0 },
              org: { $: 0 },
              perso: { $: 0 },
              univ: { $: 0 },
              blogspot: { $: 0 }
            },
            so: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, me: { $: 0 }, net: { $: 0 }, org: { $: 0 }, sch: { $: 0 } },
            sr: { $: 0 },
            ss: {
              $: 0,
              biz: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              me: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sch: { $: 0 }
            },
            st: {
              $: 0,
              co: { $: 0 },
              com: { $: 0 },
              consulado: { $: 0 },
              edu: { $: 0 },
              embaixada: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              principe: { $: 0 },
              saotome: { $: 0 },
              store: { $: 0 },
              noho: { $: 0 }
            },
            su: {
              $: 0,
              abkhazia: { $: 0 },
              adygeya: { $: 0 },
              aktyubinsk: { $: 0 },
              arkhangelsk: { $: 0 },
              armenia: { $: 0 },
              ashgabad: { $: 0 },
              azerbaijan: { $: 0 },
              balashov: { $: 0 },
              bashkiria: { $: 0 },
              bryansk: { $: 0 },
              bukhara: { $: 0 },
              chimkent: { $: 0 },
              dagestan: { $: 0 },
              "east-kazakhstan": { $: 0 },
              exnet: { $: 0 },
              georgia: { $: 0 },
              grozny: { $: 0 },
              ivanovo: { $: 0 },
              jambyl: { $: 0 },
              kalmykia: { $: 0 },
              kaluga: { $: 0 },
              karacol: { $: 0 },
              karaganda: { $: 0 },
              karelia: { $: 0 },
              khakassia: { $: 0 },
              krasnodar: { $: 0 },
              kurgan: { $: 0 },
              kustanai: { $: 0 },
              lenug: { $: 0 },
              mangyshlak: { $: 0 },
              mordovia: { $: 0 },
              msk: { $: 0 },
              murmansk: { $: 0 },
              nalchik: { $: 0 },
              navoi: { $: 0 },
              "north-kazakhstan": { $: 0 },
              nov: { $: 0 },
              obninsk: { $: 0 },
              penza: { $: 0 },
              pokrovsk: { $: 0 },
              sochi: { $: 0 },
              spb: { $: 0 },
              tashkent: { $: 0 },
              termez: { $: 0 },
              togliatti: { $: 0 },
              troitsk: { $: 0 },
              tselinograd: { $: 0 },
              tula: { $: 0 },
              tuva: { $: 0 },
              vladikavkaz: { $: 0 },
              vladimir: { $: 0 },
              vologda: { $: 0 }
            },
            sv: { $: 0, com: { $: 0 }, edu: { $: 0 }, gob: { $: 0 }, org: { $: 0 }, red: { $: 0 } },
            sx: { $: 0, gov: { $: 0 } },
            sy: { $: 0, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, mil: { $: 0 }, com: { $: 0 }, org: { $: 0 } },
            sz: { $: 0, co: { $: 0 }, ac: { $: 0 }, org: { $: 0 } },
            tc: { $: 0, ch: { $: 0 }, me: { $: 0 }, we: { $: 0 } },
            td: { $: 0, blogspot: { $: 0 } },
            tel: { $: 0 },
            tf: { $: 0 },
            tg: { $: 0 },
            th: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0 },
              go: { $: 0 },
              in: { $: 0 },
              mi: { $: 0 },
              net: { $: 0 },
              or: { $: 0 },
              online: { $: 0 },
              shop: { $: 0 }
            },
            tj: {
              $: 0,
              ac: { $: 0 },
              biz: { $: 0 },
              co: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              go: { $: 0 },
              gov: { $: 0 },
              int: { $: 0 },
              mil: { $: 0 },
              name: { $: 0 },
              net: { $: 0 },
              nic: { $: 0 },
              org: { $: 0 },
              test: { $: 0 },
              web: { $: 0 }
            },
            tk: { $: 0 },
            tl: { $: 0, gov: { $: 0 } },
            tm: {
              $: 0,
              com: { $: 0 },
              co: { $: 0 },
              org: { $: 0 },
              net: { $: 0 },
              nom: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              edu: { $: 0 }
            },
            tn: {
              $: 0,
              com: { $: 0 },
              ens: { $: 0 },
              fin: { $: 0 },
              gov: { $: 0 },
              ind: { $: 0 },
              info: { $: 0 },
              intl: { $: 0 },
              mincom: { $: 0 },
              nat: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              perso: { $: 0 },
              tourism: { $: 0 },
              orangecloud: { $: 0 }
            },
            to: {
              611: { $: 0 },
              $: 0,
              com: { $: 0 },
              gov: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              mil: { $: 0 },
              oya: { $: 0 },
              rdv: { $: 0 },
              vpnplus: { $: 0 },
              quickconnect: { direct: { $: 0 } },
              nyan: { $: 0 }
            },
            tr: {
              $: 0,
              av: { $: 0 },
              bbs: { $: 0 },
              bel: { $: 0 },
              biz: { $: 0 },
              com: { $: 0, blogspot: { $: 0 } },
              dr: { $: 0 },
              edu: { $: 0 },
              gen: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 },
              mil: { $: 0 },
              k12: { $: 0 },
              kep: { $: 0 },
              name: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              pol: { $: 0 },
              tel: { $: 0 },
              tsk: { $: 0 },
              tv: { $: 0 },
              web: { $: 0 },
              nc: { $: 0, gov: { $: 0 } }
            },
            tt: {
              $: 0,
              co: { $: 0 },
              com: { $: 0 },
              org: { $: 0 },
              net: { $: 0 },
              biz: { $: 0 },
              info: { $: 0 },
              pro: { $: 0 },
              int: { $: 0 },
              coop: { $: 0 },
              jobs: { $: 0 },
              mobi: { $: 0 },
              travel: { $: 0 },
              museum: { $: 0 },
              aero: { $: 0 },
              name: { $: 0 },
              gov: { $: 0 },
              edu: { $: 0 }
            },
            tv: { $: 0, dyndns: { $: 0 }, "better-than": { $: 0 }, "on-the-web": { $: 0 }, "worse-than": { $: 0 } },
            tw: {
              $: 0,
              edu: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              com: { $: 0, mymailer: { $: 0 } },
              net: { $: 0 },
              org: { $: 0 },
              idv: { $: 0 },
              game: { $: 0 },
              ebiz: { $: 0 },
              club: { $: 0 },
              "xn--zf0ao64a": { $: 0 },
              "xn--uc0atv": { $: 0 },
              "xn--czrw28b": { $: 0 },
              url: { $: 0 },
              blogspot: { $: 0 }
            },
            tz: {
              $: 0,
              ac: { $: 0 },
              co: { $: 0 },
              go: { $: 0 },
              hotel: { $: 0 },
              info: { $: 0 },
              me: { $: 0 },
              mil: { $: 0 },
              mobi: { $: 0 },
              ne: { $: 0 },
              or: { $: 0 },
              sc: { $: 0 },
              tv: { $: 0 }
            },
            ua: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              in: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              cherkassy: { $: 0 },
              cherkasy: { $: 0 },
              chernigov: { $: 0 },
              chernihiv: { $: 0 },
              chernivtsi: { $: 0 },
              chernovtsy: { $: 0 },
              ck: { $: 0 },
              cn: { $: 0 },
              cr: { $: 0 },
              crimea: { $: 0 },
              cv: { $: 0 },
              dn: { $: 0 },
              dnepropetrovsk: { $: 0 },
              dnipropetrovsk: { $: 0 },
              donetsk: { $: 0 },
              dp: { $: 0 },
              if: { $: 0 },
              "ivano-frankivsk": { $: 0 },
              kh: { $: 0 },
              kharkiv: { $: 0 },
              kharkov: { $: 0 },
              kherson: { $: 0 },
              khmelnitskiy: { $: 0 },
              khmelnytskyi: { $: 0 },
              kiev: { $: 0 },
              kirovograd: { $: 0 },
              km: { $: 0 },
              kr: { $: 0 },
              krym: { $: 0 },
              ks: { $: 0 },
              kv: { $: 0 },
              kyiv: { $: 0 },
              lg: { $: 0 },
              lt: { $: 0 },
              lugansk: { $: 0 },
              lutsk: { $: 0 },
              lv: { $: 0 },
              lviv: { $: 0 },
              mk: { $: 0 },
              mykolaiv: { $: 0 },
              nikolaev: { $: 0 },
              od: { $: 0 },
              odesa: { $: 0 },
              odessa: { $: 0 },
              pl: { $: 0 },
              poltava: { $: 0 },
              rivne: { $: 0 },
              rovno: { $: 0 },
              rv: { $: 0 },
              sb: { $: 0 },
              sebastopol: { $: 0 },
              sevastopol: { $: 0 },
              sm: { $: 0 },
              sumy: { $: 0 },
              te: { $: 0 },
              ternopil: { $: 0 },
              uz: { $: 0 },
              uzhgorod: { $: 0 },
              vinnica: { $: 0 },
              vinnytsia: { $: 0 },
              vn: { $: 0 },
              volyn: { $: 0 },
              yalta: { $: 0 },
              zaporizhzhe: { $: 0 },
              zaporizhzhia: { $: 0 },
              zhitomir: { $: 0 },
              zhytomyr: { $: 0 },
              zp: { $: 0 },
              zt: { $: 0 },
              cc: { $: 0 },
              inf: { $: 0 },
              ltd: { $: 0 },
              cx: { $: 0 },
              biz: { $: 0 },
              co: { $: 0 },
              pp: { $: 0 },
              v: { $: 0 }
            },
            ug: {
              $: 0,
              co: { $: 0 },
              or: { $: 0 },
              ac: { $: 0 },
              sc: { $: 0 },
              go: { $: 0 },
              ne: { $: 0 },
              com: { $: 0 },
              org: { $: 0 },
              blogspot: { $: 0 }
            },
            uk: {
              $: 0,
              ac: { $: 0 },
              co: {
                $: 0,
                bytemark: { dh: { $: 0 }, vm: { $: 0 } },
                blogspot: { $: 0 },
                layershift: { j: { $: 0 } },
                barsy: { $: 0 },
                barsyonline: { $: 0 },
                retrosnub: { cust: { $: 0 } },
                "nh-serv": { $: 0 },
                "no-ip": { $: 0 },
                wellbeingzone: { $: 0 },
                adimo: { $: 0 },
                myspreadshop: { $: 0 },
                gwiddle: { $: 0 }
              },
              gov: { $: 0, campaign: { $: 0 }, service: { $: 0 }, api: { $: 0 }, homeoffice: { $: 0 } },
              ltd: { $: 0 },
              me: { $: 0 },
              net: { $: 0 },
              nhs: { $: 0 },
              org: {
                $: 0,
                glug: { $: 0 },
                lug: { $: 0 },
                lugs: { $: 0 },
                affinitylottery: { $: 0 },
                raffleentry: { $: 0 },
                weeklylottery: { $: 0 }
              },
              plc: { $: 0 },
              police: { $: 0 },
              sch: { "*": { $: 0 } },
              conn: { $: 0 },
              copro: { $: 0 },
              hosp: { $: 0 },
              "independent-commission": { $: 0 },
              "independent-inquest": { $: 0 },
              "independent-inquiry": { $: 0 },
              "independent-panel": { $: 0 },
              "independent-review": { $: 0 },
              "public-inquiry": { $: 0 },
              "royal-commission": { $: 0 },
              pymnt: { $: 0 },
              barsy: { $: 0 }
            },
            us: {
              $: 0,
              dni: { $: 0 },
              fed: { $: 0 },
              isa: { $: 0 },
              kids: { $: 0 },
              nsn: { $: 0 },
              ak: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              al: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ar: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              as: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              az: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ca: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              co: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ct: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              dc: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              de: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              fl: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ga: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              gu: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              hi: { $: 0, cc: { $: 0 }, lib: { $: 0 } },
              ia: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              id: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              il: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              in: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ks: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ky: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              la: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ma: { $: 0, k12: { $: 0, pvt: { $: 0 }, chtr: { $: 0 }, paroch: { $: 0 } }, cc: { $: 0 }, lib: { $: 0 } },
              md: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              me: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              mi: {
                $: 0,
                k12: { $: 0 },
                cc: { $: 0 },
                lib: { $: 0 },
                "ann-arbor": { $: 0 },
                cog: { $: 0 },
                dst: { $: 0 },
                eaton: { $: 0 },
                gen: { $: 0 },
                mus: { $: 0 },
                tec: { $: 0 },
                washtenaw: { $: 0 }
              },
              mn: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              mo: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ms: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              mt: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              nc: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              nd: { $: 0, cc: { $: 0 }, lib: { $: 0 } },
              ne: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              nh: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              nj: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              nm: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              nv: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ny: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              oh: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ok: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              or: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              pa: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              pr: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ri: { $: 0, cc: { $: 0 }, lib: { $: 0 } },
              sc: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              sd: { $: 0, cc: { $: 0 }, lib: { $: 0 } },
              tn: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              tx: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              ut: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              vi: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              vt: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              va: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              wa: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              wi: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              wv: { $: 0, cc: { $: 0 } },
              wy: { $: 0, k12: { $: 0 }, cc: { $: 0 }, lib: { $: 0 } },
              graphox: { $: 0 },
              cloudns: { $: 0 },
              drud: { $: 0 },
              "is-by": { $: 0 },
              "land-4-sale": { $: 0 },
              "stuff-4-sale": { $: 0 },
              enscaled: { phx: { $: 0 } },
              mircloud: { $: 0 },
              freeddns: { $: 0 },
              golffan: { $: 0 },
              noip: { $: 0 },
              pointto: { $: 0 },
              platterp: { $: 0 }
            },
            uy: { $: 0, com: { $: 0, blogspot: { $: 0 } }, edu: { $: 0 }, gub: { $: 0 }, mil: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            uz: { $: 0, co: { $: 0 }, com: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            va: { $: 0 },
            vc: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              gov: { $: 0 },
              mil: { $: 0 },
              edu: { $: 0 },
              gv: { $: 0, d: { $: 0 } },
              "0e": { $: 0 }
            },
            ve: {
              $: 0,
              arts: { $: 0 },
              bib: { $: 0 },
              co: { $: 0 },
              com: { $: 0 },
              e12: { $: 0 },
              edu: { $: 0 },
              firm: { $: 0 },
              gob: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 },
              int: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              nom: { $: 0 },
              org: { $: 0 },
              rar: { $: 0 },
              rec: { $: 0 },
              store: { $: 0 },
              tec: { $: 0 },
              web: { $: 0 }
            },
            vg: { $: 0, at: { $: 0 } },
            vi: { $: 0, co: { $: 0 }, com: { $: 0 }, k12: { $: 0 }, net: { $: 0 }, org: { $: 0 } },
            vn: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              int: { $: 0 },
              ac: { $: 0 },
              biz: { $: 0 },
              info: { $: 0 },
              name: { $: 0 },
              pro: { $: 0 },
              health: { $: 0 },
              blogspot: { $: 0 }
            },
            vu: {
              $: 0,
              com: { $: 0 },
              edu: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              cn: { $: 0 },
              blog: { $: 0 },
              dev: { $: 0 },
              me: { $: 0 }
            },
            wf: { $: 0 },
            ws: {
              $: 0,
              com: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              gov: { $: 0 },
              edu: { $: 0 },
              advisor: { "*": { $: 0 } },
              cloud66: { $: 0 },
              dyndns: { $: 0 },
              mypets: { $: 0 }
            },
            yt: { $: 0, org: { $: 0 } },
            "xn--mgbaam7a8h": { $: 0 },
            "xn--y9a3aq": { $: 0 },
            "xn--54b7fta0cc": { $: 0 },
            "xn--90ae": { $: 0 },
            "xn--mgbcpq6gpa1a": { $: 0 },
            "xn--90ais": { $: 0 },
            "xn--fiqs8s": { $: 0 },
            "xn--fiqz9s": { $: 0 },
            "xn--lgbbat1ad8j": { $: 0 },
            "xn--wgbh1c": { $: 0 },
            "xn--e1a4c": { $: 0 },
            "xn--qxa6a": { $: 0 },
            "xn--mgbah1a3hjkrd": { $: 0 },
            "xn--node": { $: 0 },
            "xn--qxam": { $: 0 },
            "xn--j6w193g": {
              $: 0,
              "xn--55qx5d": { $: 0 },
              "xn--wcvs22d": { $: 0 },
              "xn--mxtq1m": { $: 0 },
              "xn--gmqw5a": { $: 0 },
              "xn--od0alg": { $: 0 },
              "xn--uc0atv": { $: 0 }
            },
            "xn--2scrj9c": { $: 0 },
            "xn--3hcrj9c": { $: 0 },
            "xn--45br5cyl": { $: 0 },
            "xn--h2breg3eve": { $: 0 },
            "xn--h2brj9c8c": { $: 0 },
            "xn--mgbgu82a": { $: 0 },
            "xn--rvc1e0am3e": { $: 0 },
            "xn--h2brj9c": { $: 0 },
            "xn--mgbbh1a": { $: 0 },
            "xn--mgbbh1a71e": { $: 0 },
            "xn--fpcrj9c3d": { $: 0 },
            "xn--gecrj9c": { $: 0 },
            "xn--s9brj9c": { $: 0 },
            "xn--45brj9c": { $: 0 },
            "xn--xkc2dl3a5ee0h": { $: 0 },
            "xn--mgba3a4f16a": { $: 0 },
            "xn--mgba3a4fra": { $: 0 },
            "xn--mgbtx2b": { $: 0 },
            "xn--mgbayh7gpa": { $: 0 },
            "xn--3e0b707e": { $: 0 },
            "xn--80ao21a": { $: 0 },
            "xn--q7ce6a": { $: 0 },
            "xn--fzc2c9e2c": { $: 0 },
            "xn--xkc2al3hye2a": { $: 0 },
            "xn--mgbc0a9azcg": { $: 0 },
            "xn--d1alf": { $: 0 },
            "xn--l1acc": { $: 0 },
            "xn--mix891f": { $: 0 },
            "xn--mix082f": { $: 0 },
            "xn--mgbx4cd0ab": { $: 0 },
            "xn--mgb9awbf": { $: 0 },
            "xn--mgbai9azgqp6j": { $: 0 },
            "xn--mgbai9a5eva00b": { $: 0 },
            "xn--ygbi2ammx": { $: 0 },
            "xn--90a3ac": {
              $: 0,
              "xn--o1ac": { $: 0 },
              "xn--c1avg": { $: 0 },
              "xn--90azh": { $: 0 },
              "xn--d1at": { $: 0 },
              "xn--o1ach": { $: 0 },
              "xn--80au": { $: 0 }
            },
            "xn--p1ai": { $: 0 },
            "xn--wgbl6a": { $: 0 },
            "xn--mgberp4a5d4ar": { $: 0 },
            "xn--mgberp4a5d4a87g": { $: 0 },
            "xn--mgbqly7c0a67fbc": { $: 0 },
            "xn--mgbqly7cvafr": { $: 0 },
            "xn--mgbpl2fh": { $: 0 },
            "xn--yfro4i67o": { $: 0 },
            "xn--clchc0ea0b2g2a9gcd": { $: 0 },
            "xn--ogbpf8fl": { $: 0 },
            "xn--mgbtf8fl": { $: 0 },
            "xn--o3cw4h": {
              $: 0,
              "xn--12c1fe0br": { $: 0 },
              "xn--12co0c3b4eva": { $: 0 },
              "xn--h3cuzk1di": { $: 0 },
              "xn--o3cyx2a": { $: 0 },
              "xn--m3ch0j3a": { $: 0 },
              "xn--12cfi8ixb8l": { $: 0 }
            },
            "xn--pgbs0dh": { $: 0 },
            "xn--kpry57d": { $: 0 },
            "xn--kprw13d": { $: 0 },
            "xn--nnx388a": { $: 0 },
            "xn--j1amh": { $: 0 },
            "xn--mgb2ddes": { $: 0 },
            xxx: { $: 0 },
            ye: { $: 0, com: { $: 0 }, edu: { $: 0 }, gov: { $: 0 }, net: { $: 0 }, mil: { $: 0 }, org: { $: 0 } },
            za: {
              ac: { $: 0 },
              agric: { $: 0 },
              alt: { $: 0 },
              co: { $: 0, blogspot: { $: 0 } },
              edu: { $: 0 },
              gov: { $: 0 },
              grondar: { $: 0 },
              law: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              ngo: { $: 0 },
              nic: { $: 0 },
              nis: { $: 0 },
              nom: { $: 0 },
              org: { $: 0 },
              school: { $: 0 },
              tm: { $: 0 },
              web: { $: 0 }
            },
            zm: {
              $: 0,
              ac: { $: 0 },
              biz: { $: 0 },
              co: { $: 0 },
              com: { $: 0 },
              edu: { $: 0 },
              gov: { $: 0 },
              info: { $: 0 },
              mil: { $: 0 },
              net: { $: 0 },
              org: { $: 0 },
              sch: { $: 0 }
            },
            zw: { $: 0, ac: { $: 0 }, co: { $: 0 }, gov: { $: 0 }, mil: { $: 0 }, org: { $: 0 } },
            aaa: { $: 0 },
            aarp: { $: 0 },
            abarth: { $: 0 },
            abb: { $: 0 },
            abbott: { $: 0 },
            abbvie: { $: 0 },
            abc: { $: 0 },
            able: { $: 0 },
            abogado: { $: 0 },
            abudhabi: { $: 0 },
            academy: { $: 0, official: { $: 0 } },
            accenture: { $: 0 },
            accountant: { $: 0 },
            accountants: { $: 0 },
            aco: { $: 0 },
            actor: { $: 0 },
            adac: { $: 0 },
            ads: { $: 0 },
            adult: { $: 0 },
            aeg: { $: 0 },
            aetna: { $: 0 },
            afl: { $: 0 },
            africa: { $: 0 },
            agakhan: { $: 0 },
            agency: { $: 0 },
            aig: { $: 0 },
            airbus: { $: 0 },
            airforce: { $: 0 },
            airtel: { $: 0 },
            akdn: { $: 0 },
            alfaromeo: { $: 0 },
            alibaba: { $: 0 },
            alipay: { $: 0 },
            allfinanz: { $: 0 },
            allstate: { $: 0 },
            ally: { $: 0 },
            alsace: { $: 0 },
            alstom: { $: 0 },
            amazon: { $: 0 },
            americanexpress: { $: 0 },
            americanfamily: { $: 0 },
            amex: { $: 0 },
            amfam: { $: 0 },
            amica: { $: 0 },
            amsterdam: { $: 0 },
            analytics: { $: 0 },
            android: { $: 0 },
            anquan: { $: 0 },
            anz: { $: 0 },
            aol: { $: 0 },
            apartments: { $: 0 },
            app: {
              $: 0,
              beget: { "*": { $: 0 } },
              clerk: { $: 0 },
              clerkstage: { $: 0 },
              wnext: { $: 0 },
              platform0: { $: 0 },
              deta: { $: 0 },
              ondigitalocean: { $: 0 },
              encr: { $: 0 },
              edgecompute: { $: 0 },
              fireweb: { $: 0 },
              onflashdrive: { $: 0 },
              framer: { $: 0 },
              run: { $: 0, a: { $: 0 } },
              web: { $: 0 },
              hasura: { $: 0 },
              loginline: { $: 0 },
              netlify: { $: 0 },
              developer: { "*": { $: 0 } },
              noop: { $: 0 },
              northflank: { "*": { $: 0 } },
              telebit: { $: 0 },
              typedream: { $: 0 },
              vercel: { $: 0 },
              bookonline: { $: 0 }
            },
            apple: { $: 0 },
            aquarelle: { $: 0 },
            arab: { $: 0 },
            aramco: { $: 0 },
            archi: { $: 0 },
            army: { $: 0 },
            art: { $: 0 },
            arte: { $: 0 },
            asda: { $: 0 },
            associates: { $: 0 },
            athleta: { $: 0 },
            attorney: { $: 0 },
            auction: { $: 0 },
            audi: { $: 0 },
            audible: { $: 0 },
            audio: { $: 0 },
            auspost: { $: 0 },
            author: { $: 0 },
            auto: { $: 0 },
            autos: { $: 0 },
            avianca: { $: 0 },
            aws: { $: 0 },
            axa: { $: 0 },
            azure: { $: 0 },
            baby: { $: 0 },
            baidu: { $: 0 },
            banamex: { $: 0 },
            bananarepublic: { $: 0 },
            band: { $: 0 },
            bank: { $: 0 },
            bar: { $: 0 },
            barcelona: { $: 0 },
            barclaycard: { $: 0 },
            barclays: { $: 0 },
            barefoot: { $: 0 },
            bargains: { $: 0 },
            baseball: { $: 0 },
            basketball: { $: 0, aus: { $: 0 }, nz: { $: 0 } },
            bauhaus: { $: 0 },
            bayern: { $: 0 },
            bbc: { $: 0 },
            bbt: { $: 0 },
            bbva: { $: 0 },
            bcg: { $: 0 },
            bcn: { $: 0 },
            beats: { $: 0 },
            beauty: { $: 0 },
            beer: { $: 0 },
            bentley: { $: 0 },
            berlin: { $: 0 },
            best: { $: 0 },
            bestbuy: { $: 0 },
            bet: { $: 0 },
            bharti: { $: 0 },
            bible: { $: 0 },
            bid: { $: 0 },
            bike: { $: 0 },
            bing: { $: 0 },
            bingo: { $: 0 },
            bio: { $: 0 },
            black: { $: 0 },
            blackfriday: { $: 0 },
            blockbuster: { $: 0 },
            blog: { $: 0 },
            bloomberg: { $: 0 },
            blue: { $: 0 },
            bms: { $: 0 },
            bmw: { $: 0 },
            bnpparibas: { $: 0 },
            boats: { $: 0 },
            boehringer: { $: 0 },
            bofa: { $: 0 },
            bom: { $: 0 },
            bond: { $: 0 },
            boo: { $: 0 },
            book: { $: 0 },
            booking: { $: 0 },
            bosch: { $: 0 },
            bostik: { $: 0 },
            boston: { $: 0 },
            bot: { $: 0 },
            boutique: { $: 0 },
            box: { $: 0 },
            bradesco: { $: 0 },
            bridgestone: { $: 0 },
            broadway: { $: 0 },
            broker: { $: 0 },
            brother: { $: 0 },
            brussels: { $: 0 },
            bugatti: { $: 0 },
            build: { $: 0 },
            builders: { $: 0, cloudsite: { $: 0 } },
            business: { $: 0, co: { $: 0 } },
            buy: { $: 0 },
            buzz: { $: 0 },
            bzh: { $: 0 },
            cab: { $: 0 },
            cafe: { $: 0 },
            cal: { $: 0 },
            call: { $: 0 },
            calvinklein: { $: 0 },
            cam: { $: 0 },
            camera: { $: 0 },
            camp: { $: 0 },
            cancerresearch: { $: 0 },
            canon: { $: 0 },
            capetown: { $: 0 },
            capital: { $: 0 },
            capitalone: { $: 0 },
            car: { $: 0 },
            caravan: { $: 0 },
            cards: { $: 0 },
            care: { $: 0 },
            career: { $: 0 },
            careers: { $: 0 },
            cars: { $: 0 },
            casa: { $: 0, nabu: { ui: { $: 0 } } },
            case: { $: 0 },
            cash: { $: 0 },
            casino: { $: 0 },
            catering: { $: 0 },
            catholic: { $: 0 },
            cba: { $: 0 },
            cbn: { $: 0 },
            cbre: { $: 0 },
            cbs: { $: 0 },
            center: { $: 0 },
            ceo: { $: 0 },
            cern: { $: 0 },
            cfa: { $: 0 },
            cfd: { $: 0 },
            chanel: { $: 0 },
            channel: { $: 0 },
            charity: { $: 0 },
            chase: { $: 0 },
            chat: { $: 0 },
            cheap: { $: 0 },
            chintai: { $: 0 },
            christmas: { $: 0 },
            chrome: { $: 0 },
            church: { $: 0 },
            cipriani: { $: 0 },
            circle: { $: 0 },
            cisco: { $: 0 },
            citadel: { $: 0 },
            citi: { $: 0 },
            citic: { $: 0 },
            city: { $: 0 },
            cityeats: { $: 0 },
            claims: { $: 0 },
            cleaning: { $: 0 },
            click: { $: 0 },
            clinic: { $: 0 },
            clinique: { $: 0 },
            clothing: { $: 0 },
            cloud: {
              $: 0,
              banzai: { "*": { $: 0 } },
              elementor: { $: 0 },
              encoway: { eu: { $: 0 } },
              statics: { "*": { $: 0 } },
              ravendb: { $: 0 },
              axarnet: { "es-1": { $: 0 } },
              diadem: { $: 0 },
              jelastic: { vip: { $: 0 } },
              jele: { $: 0 },
              "jenv-aruba": { aruba: { eur: { it1: { $: 0 } } }, it1: { $: 0 } },
              keliweb: { $: 0, cs: { $: 0 } },
              oxa: { $: 0, tn: { $: 0 }, uk: { $: 0 } },
              primetel: { $: 0, uk: { $: 0 } },
              reclaim: { ca: { $: 0 }, uk: { $: 0 }, us: { $: 0 } },
              trendhosting: { ch: { $: 0 }, de: { $: 0 } },
              jotelulu: { $: 0 },
              kuleuven: { $: 0 },
              linkyard: { $: 0 },
              magentosite: { "*": { $: 0 } },
              perspecta: { $: 0 },
              vapor: { $: 0 },
              "on-rancher": { "*": { $: 0 } },
              sensiosite: { "*": { $: 0 } },
              trafficplex: { $: 0 },
              urown: { $: 0 },
              voorloper: { $: 0 }
            },
            club: { $: 0, cloudns: { $: 0 }, jele: { $: 0 }, barsy: { $: 0 }, pony: { $: 0 } },
            clubmed: { $: 0 },
            coach: { $: 0 },
            codes: { $: 0, owo: { "*": { $: 0 } } },
            coffee: { $: 0 },
            college: { $: 0 },
            cologne: { $: 0 },
            comcast: { $: 0 },
            commbank: { $: 0 },
            community: { $: 0, nog: { $: 0 }, ravendb: { $: 0 }, myforum: { $: 0 } },
            company: { $: 0 },
            compare: { $: 0 },
            computer: { $: 0 },
            comsec: { $: 0 },
            condos: { $: 0 },
            construction: { $: 0 },
            consulting: { $: 0 },
            contact: { $: 0 },
            contractors: { $: 0 },
            cooking: { $: 0 },
            cookingchannel: { $: 0 },
            cool: { $: 0, elementor: { $: 0 }, de: { $: 0 } },
            corsica: { $: 0 },
            country: { $: 0 },
            coupon: { $: 0 },
            coupons: { $: 0 },
            courses: { $: 0 },
            cpa: { $: 0 },
            credit: { $: 0 },
            creditcard: { $: 0 },
            creditunion: { $: 0 },
            cricket: { $: 0 },
            crown: { $: 0 },
            crs: { $: 0 },
            cruise: { $: 0 },
            cruises: { $: 0 },
            cuisinella: { $: 0 },
            cymru: { $: 0 },
            cyou: { $: 0 },
            dabur: { $: 0 },
            dad: { $: 0 },
            dance: { $: 0 },
            data: { $: 0 },
            date: { $: 0 },
            dating: { $: 0 },
            datsun: { $: 0 },
            day: { $: 0 },
            dclk: { $: 0 },
            dds: { $: 0 },
            deal: { $: 0 },
            dealer: { $: 0 },
            deals: { $: 0 },
            degree: { $: 0 },
            delivery: { $: 0 },
            dell: { $: 0 },
            deloitte: { $: 0 },
            delta: { $: 0 },
            democrat: { $: 0 },
            dental: { $: 0 },
            dentist: { $: 0 },
            desi: { $: 0 },
            design: { $: 0, bss: { $: 0 } },
            dev: {
              $: 0,
              lcl: { "*": { $: 0 } },
              lclstage: { "*": { $: 0 } },
              stg: { "*": { $: 0 } },
              stgstage: { "*": { $: 0 } },
              pages: { $: 0 },
              workers: { $: 0 },
              curv: { $: 0 },
              deno: { $: 0 },
              "deno-staging": { $: 0 },
              deta: { $: 0 },
              fly: { $: 0 },
              githubpreview: { $: 0 },
              gateway: { "*": { $: 0 } },
              iserv: { $: 0 },
              localcert: { user: { "*": { $: 0 } } },
              loginline: { $: 0 },
              mediatech: { $: 0 },
              "platter-app": { $: 0 },
              shiftcrypto: { $: 0 },
              vercel: { $: 0 },
              webhare: { "*": { $: 0 } }
            },
            dhl: { $: 0 },
            diamonds: { $: 0 },
            diet: { $: 0 },
            digital: { $: 0, cloudapps: { $: 0, london: { $: 0 } } },
            direct: { $: 0 },
            directory: { $: 0 },
            discount: { $: 0 },
            discover: { $: 0 },
            dish: { $: 0 },
            diy: { $: 0 },
            dnp: { $: 0 },
            docs: { $: 0 },
            doctor: { $: 0 },
            dog: { $: 0 },
            domains: { $: 0 },
            dot: { $: 0 },
            download: { $: 0 },
            drive: { $: 0 },
            dtv: { $: 0 },
            dubai: { $: 0 },
            dunlop: { $: 0 },
            dupont: { $: 0 },
            durban: { $: 0 },
            dvag: { $: 0 },
            dvr: { $: 0 },
            earth: { $: 0, dapps: { "*": { $: 0 }, bzz: { "*": { $: 0 } } } },
            eat: { $: 0 },
            eco: { $: 0 },
            edeka: { $: 0 },
            education: { $: 0, co: { $: 0 } },
            email: { $: 0 },
            emerck: { $: 0 },
            energy: { $: 0 },
            engineer: { $: 0 },
            engineering: { $: 0 },
            enterprises: { $: 0 },
            epson: { $: 0 },
            equipment: { $: 0 },
            ericsson: { $: 0 },
            erni: { $: 0 },
            esq: { $: 0 },
            estate: { $: 0, compute: { "*": { $: 0 } } },
            etisalat: { $: 0 },
            eurovision: { $: 0 },
            eus: { $: 0, party: { user: { $: 0 } } },
            events: { $: 0, koobin: { $: 0 }, co: { $: 0 } },
            exchange: { $: 0 },
            expert: { $: 0 },
            exposed: { $: 0 },
            express: { $: 0 },
            extraspace: { $: 0 },
            fage: { $: 0 },
            fail: { $: 0 },
            fairwinds: { $: 0 },
            faith: { $: 0, ybo: { $: 0 } },
            family: { $: 0 },
            fan: { $: 0 },
            fans: { $: 0 },
            farm: { $: 0, storj: { $: 0 } },
            farmers: { $: 0 },
            fashion: { $: 0, of: { $: 0 } },
            fast: { $: 0 },
            fedex: { $: 0 },
            feedback: { $: 0 },
            ferrari: { $: 0 },
            ferrero: { $: 0 },
            fiat: { $: 0 },
            fidelity: { $: 0 },
            fido: { $: 0 },
            film: { $: 0 },
            final: { $: 0 },
            finance: { $: 0 },
            financial: { $: 0, co: { $: 0 } },
            fire: { $: 0 },
            firestone: { $: 0 },
            firmdale: { $: 0 },
            fish: { $: 0 },
            fishing: { $: 0 },
            fit: { $: 0 },
            fitness: { $: 0 },
            flickr: { $: 0 },
            flights: { $: 0 },
            flir: { $: 0 },
            florist: { $: 0 },
            flowers: { $: 0 },
            fly: { $: 0 },
            foo: { $: 0 },
            food: { $: 0 },
            foodnetwork: { $: 0 },
            football: { $: 0 },
            ford: { $: 0 },
            forex: { $: 0 },
            forsale: { $: 0 },
            forum: { $: 0 },
            foundation: { $: 0 },
            fox: { $: 0 },
            free: { $: 0 },
            fresenius: { $: 0 },
            frl: { $: 0 },
            frogans: { $: 0 },
            frontdoor: { $: 0 },
            frontier: { $: 0 },
            ftr: { $: 0 },
            fujitsu: { $: 0 },
            fun: { $: 0 },
            fund: { $: 0 },
            furniture: { $: 0 },
            futbol: { $: 0 },
            fyi: { $: 0 },
            gal: { $: 0 },
            gallery: { $: 0 },
            gallo: { $: 0 },
            gallup: { $: 0 },
            game: { $: 0 },
            games: { $: 0 },
            gap: { $: 0 },
            garden: { $: 0 },
            gay: { $: 0 },
            gbiz: { $: 0 },
            gdn: { $: 0, cnpy: { $: 0 } },
            gea: { $: 0 },
            gent: { $: 0 },
            genting: { $: 0 },
            george: { $: 0 },
            ggee: { $: 0 },
            gift: { $: 0 },
            gifts: { $: 0 },
            gives: { $: 0 },
            giving: { $: 0 },
            glass: { $: 0 },
            gle: { $: 0 },
            global: { $: 0 },
            globo: { $: 0 },
            gmail: { $: 0 },
            gmbh: { $: 0 },
            gmo: { $: 0 },
            gmx: { $: 0 },
            godaddy: { $: 0 },
            gold: { $: 0 },
            goldpoint: { $: 0 },
            golf: { $: 0 },
            goo: { $: 0 },
            goodyear: { $: 0 },
            goog: { $: 0, cloud: { $: 0 }, translate: { $: 0 }, usercontent: { "*": { $: 0 } } },
            google: { $: 0 },
            gop: { $: 0 },
            got: { $: 0 },
            grainger: { $: 0 },
            graphics: { $: 0 },
            gratis: { $: 0 },
            green: { $: 0 },
            gripe: { $: 0 },
            grocery: { $: 0 },
            group: { $: 0, discourse: { $: 0 } },
            guardian: { $: 0 },
            gucci: { $: 0 },
            guge: { $: 0 },
            guide: { $: 0 },
            guitars: { $: 0 },
            guru: { $: 0 },
            hair: { $: 0 },
            hamburg: { $: 0 },
            hangout: { $: 0 },
            haus: { $: 0 },
            hbo: { $: 0 },
            hdfc: { $: 0 },
            hdfcbank: { $: 0 },
            health: { $: 0, hra: { $: 0 } },
            healthcare: { $: 0 },
            help: { $: 0 },
            helsinki: { $: 0 },
            here: { $: 0 },
            hermes: { $: 0 },
            hgtv: { $: 0 },
            hiphop: { $: 0 },
            hisamitsu: { $: 0 },
            hitachi: { $: 0 },
            hiv: { $: 0 },
            hkt: { $: 0 },
            hockey: { $: 0 },
            holdings: { $: 0 },
            holiday: { $: 0 },
            homedepot: { $: 0 },
            homegoods: { $: 0 },
            homes: { $: 0 },
            homesense: { $: 0 },
            honda: { $: 0 },
            horse: { $: 0 },
            hospital: { $: 0 },
            host: {
              $: 0,
              cloudaccess: { $: 0 },
              freesite: { $: 0 },
              fastvps: { $: 0 },
              myfast: { $: 0 },
              tempurl: { $: 0 },
              wpmudev: { $: 0 },
              jele: { $: 0 },
              mircloud: { $: 0 },
              pcloud: { $: 0 },
              half: { $: 0 }
            },
            hosting: { $: 0, opencraft: { $: 0 } },
            hot: { $: 0 },
            hoteles: { $: 0 },
            hotels: { $: 0 },
            hotmail: { $: 0 },
            house: { $: 0 },
            how: { $: 0 },
            hsbc: { $: 0 },
            hughes: { $: 0 },
            hyatt: { $: 0 },
            hyundai: { $: 0 },
            ibm: { $: 0 },
            icbc: { $: 0 },
            ice: { $: 0 },
            icu: { $: 0 },
            ieee: { $: 0 },
            ifm: { $: 0 },
            ikano: { $: 0 },
            imamat: { $: 0 },
            imdb: { $: 0 },
            immo: { $: 0 },
            immobilien: { $: 0 },
            inc: { $: 0 },
            industries: { $: 0 },
            infiniti: { $: 0 },
            ing: { $: 0 },
            ink: { $: 0 },
            institute: { $: 0 },
            insurance: { $: 0 },
            insure: { $: 0 },
            international: { $: 0 },
            intuit: { $: 0 },
            investments: { $: 0 },
            ipiranga: { $: 0 },
            irish: { $: 0 },
            ismaili: { $: 0 },
            ist: { $: 0 },
            istanbul: { $: 0 },
            itau: { $: 0 },
            itv: { $: 0 },
            jaguar: { $: 0 },
            java: { $: 0 },
            jcb: { $: 0 },
            jeep: { $: 0 },
            jetzt: { $: 0 },
            jewelry: { $: 0 },
            jio: { $: 0 },
            jll: { $: 0 },
            jmp: { $: 0 },
            jnj: { $: 0 },
            joburg: { $: 0 },
            jot: { $: 0 },
            joy: { $: 0 },
            jpmorgan: { $: 0 },
            jprs: { $: 0 },
            juegos: { $: 0 },
            juniper: { $: 0 },
            kaufen: { $: 0 },
            kddi: { $: 0 },
            kerryhotels: { $: 0 },
            kerrylogistics: { $: 0 },
            kerryproperties: { $: 0 },
            kfh: { $: 0 },
            kia: { $: 0 },
            kids: { $: 0 },
            kim: { $: 0 },
            kinder: { $: 0 },
            kindle: { $: 0 },
            kitchen: { $: 0 },
            kiwi: { $: 0 },
            koeln: { $: 0 },
            komatsu: { $: 0 },
            kosher: { $: 0 },
            kpmg: { $: 0 },
            kpn: { $: 0 },
            krd: { $: 0, co: { $: 0 }, edu: { $: 0 } },
            kred: { $: 0 },
            kuokgroup: { $: 0 },
            kyoto: { $: 0 },
            lacaixa: { $: 0 },
            lamborghini: { $: 0 },
            lamer: { $: 0 },
            lancaster: { $: 0 },
            lancia: { $: 0 },
            land: { $: 0, static: { $: 0, dev: { $: 0 }, sites: { $: 0 } } },
            landrover: { $: 0 },
            lanxess: { $: 0 },
            lasalle: { $: 0 },
            lat: { $: 0 },
            latino: { $: 0 },
            latrobe: { $: 0 },
            law: { $: 0 },
            lawyer: { $: 0 },
            lds: { $: 0 },
            lease: { $: 0 },
            leclerc: { $: 0 },
            lefrak: { $: 0 },
            legal: { $: 0 },
            lego: { $: 0 },
            lexus: { $: 0 },
            lgbt: { $: 0 },
            lidl: { $: 0 },
            life: { $: 0 },
            lifeinsurance: { $: 0 },
            lifestyle: { $: 0 },
            lighting: { $: 0 },
            like: { $: 0 },
            lilly: { $: 0 },
            limited: { $: 0 },
            limo: { $: 0 },
            lincoln: { $: 0 },
            linde: { $: 0 },
            link: { $: 0, cyon: { $: 0 }, mypep: { $: 0 }, dweb: { "*": { $: 0 } } },
            lipsy: { $: 0 },
            live: { $: 0, hlx: { $: 0 } },
            living: { $: 0 },
            llc: { $: 0 },
            llp: { $: 0 },
            loan: { $: 0 },
            loans: { $: 0 },
            locker: { $: 0 },
            locus: { $: 0 },
            loft: { $: 0 },
            lol: { $: 0, omg: { $: 0 } },
            london: { $: 0, in: { $: 0 }, of: { $: 0 } },
            lotte: { $: 0 },
            lotto: { $: 0 },
            love: { $: 0 },
            lpl: { $: 0 },
            lplfinancial: { $: 0 },
            ltd: { $: 0 },
            ltda: { $: 0 },
            lundbeck: { $: 0 },
            luxe: { $: 0 },
            luxury: { $: 0 },
            macys: { $: 0 },
            madrid: { $: 0 },
            maif: { $: 0 },
            maison: { $: 0 },
            makeup: { $: 0 },
            man: { $: 0 },
            management: { $: 0, router: { $: 0 } },
            mango: { $: 0 },
            map: { $: 0 },
            market: { $: 0 },
            marketing: { $: 0, from: { $: 0 }, with: { $: 0 } },
            markets: { $: 0 },
            marriott: { $: 0 },
            marshalls: { $: 0 },
            maserati: { $: 0 },
            mattel: { $: 0 },
            mba: { $: 0 },
            mckinsey: { $: 0 },
            med: { $: 0 },
            media: { $: 0 },
            meet: { $: 0 },
            melbourne: { $: 0 },
            meme: { $: 0 },
            memorial: { $: 0 },
            men: { $: 0, for: { $: 0 }, repair: { $: 0 } },
            menu: { $: 0, barsy: { $: 0 } },
            merckmsd: { $: 0 },
            miami: { $: 0 },
            microsoft: { $: 0 },
            mini: { $: 0 },
            mint: { $: 0 },
            mit: { $: 0 },
            mitsubishi: { $: 0 },
            mlb: { $: 0 },
            mls: { $: 0 },
            mma: { $: 0 },
            mobile: { $: 0 },
            moda: { $: 0 },
            moe: { $: 0 },
            moi: { $: 0 },
            mom: { $: 0, and: { $: 0 }, for: { $: 0 } },
            monash: { $: 0 },
            money: { $: 0 },
            monster: { $: 0 },
            mormon: { $: 0 },
            mortgage: { $: 0 },
            moscow: { $: 0 },
            moto: { $: 0 },
            motorcycles: { $: 0 },
            mov: { $: 0 },
            movie: { $: 0 },
            msd: { $: 0 },
            mtn: { $: 0 },
            mtr: { $: 0 },
            music: { $: 0 },
            mutual: { $: 0 },
            nab: { $: 0 },
            nagoya: { $: 0 },
            natura: { $: 0 },
            navy: { $: 0 },
            nba: { $: 0 },
            nec: { $: 0 },
            netbank: { $: 0 },
            netflix: { $: 0 },
            network: { $: 0, alces: { "*": { $: 0 } }, co: { $: 0 }, arvo: { $: 0 }, azimuth: { $: 0 }, tlon: { $: 0 } },
            neustar: { $: 0 },
            new: { $: 0 },
            news: { $: 0, noticeable: { $: 0 } },
            next: { $: 0 },
            nextdirect: { $: 0 },
            nexus: { $: 0 },
            nfl: { $: 0 },
            ngo: { $: 0 },
            nhk: { $: 0 },
            nico: { $: 0 },
            nike: { $: 0 },
            nikon: { $: 0 },
            ninja: { $: 0 },
            nissan: { $: 0 },
            nissay: { $: 0 },
            nokia: { $: 0 },
            northwesternmutual: { $: 0 },
            norton: { $: 0 },
            now: { $: 0 },
            nowruz: { $: 0 },
            nowtv: { $: 0 },
            nra: { $: 0 },
            nrw: { $: 0 },
            ntt: { $: 0 },
            nyc: { $: 0 },
            obi: { $: 0 },
            observer: { $: 0 },
            office: { $: 0 },
            okinawa: { $: 0 },
            olayan: { $: 0 },
            olayangroup: { $: 0 },
            oldnavy: { $: 0 },
            ollo: { $: 0 },
            omega: { $: 0 },
            one: { $: 0, onred: { $: 0, staging: { $: 0 } }, for: { $: 0 }, under: { $: 0 }, service: { $: 0 }, homelink: { $: 0 } },
            ong: { $: 0 },
            onl: { $: 0 },
            online: { $: 0, eero: { $: 0 }, "eero-stage": { $: 0 }, barsy: { $: 0 } },
            ooo: { $: 0 },
            open: { $: 0 },
            oracle: { $: 0 },
            orange: { $: 0, tech: { $: 0 } },
            organic: { $: 0 },
            origins: { $: 0 },
            osaka: { $: 0 },
            otsuka: { $: 0 },
            ott: { $: 0 },
            ovh: { $: 0, nerdpol: { $: 0 } },
            page: {
              $: 0,
              hlx: { $: 0 },
              hlx3: { $: 0 },
              translated: { $: 0 },
              codeberg: { $: 0 },
              pdns: { $: 0 },
              plesk: { $: 0 },
              prvcy: { $: 0 },
              rocky: { $: 0 },
              magnet: { $: 0 }
            },
            panasonic: { $: 0 },
            paris: { $: 0 },
            pars: { $: 0 },
            partners: { $: 0 },
            parts: { $: 0 },
            party: { $: 0, ybo: { $: 0 } },
            passagens: { $: 0 },
            pay: { $: 0 },
            pccw: { $: 0 },
            pet: { $: 0 },
            pfizer: { $: 0 },
            pharmacy: { $: 0 },
            phd: { $: 0 },
            philips: { $: 0 },
            phone: { $: 0 },
            photo: { $: 0 },
            photography: { $: 0 },
            photos: { $: 0 },
            physio: { $: 0 },
            pics: { $: 0 },
            pictet: { $: 0 },
            pictures: { 1337: { $: 0 }, $: 0 },
            pid: { $: 0 },
            pin: { $: 0 },
            ping: { $: 0 },
            pink: { $: 0 },
            pioneer: { $: 0 },
            pizza: { $: 0 },
            place: { $: 0, co: { $: 0 } },
            play: { $: 0 },
            playstation: { $: 0 },
            plumbing: { $: 0 },
            plus: { $: 0 },
            pnc: { $: 0 },
            pohl: { $: 0 },
            poker: { $: 0 },
            politie: { $: 0 },
            porn: { $: 0, indie: { $: 0 } },
            pramerica: { $: 0 },
            praxi: { $: 0 },
            press: { $: 0 },
            prime: { $: 0 },
            prod: { $: 0 },
            productions: { $: 0 },
            prof: { $: 0 },
            progressive: { $: 0 },
            promo: { $: 0 },
            properties: { $: 0 },
            property: { $: 0 },
            protection: { $: 0 },
            pru: { $: 0 },
            prudential: { $: 0 },
            pub: { $: 0, barsy: { $: 0 } },
            pwc: { $: 0 },
            qpon: { $: 0 },
            quebec: { $: 0 },
            quest: { $: 0 },
            racing: { $: 0 },
            radio: { $: 0 },
            read: { $: 0 },
            realestate: { $: 0 },
            realtor: { $: 0 },
            realty: { $: 0 },
            recipes: { $: 0 },
            red: { $: 0 },
            redstone: { $: 0 },
            redumbrella: { $: 0 },
            rehab: { $: 0 },
            reise: { $: 0 },
            reisen: { $: 0 },
            reit: { $: 0 },
            reliance: { $: 0 },
            ren: { $: 0 },
            rent: { $: 0 },
            rentals: { $: 0 },
            repair: { $: 0 },
            report: { $: 0 },
            republican: { $: 0 },
            rest: { $: 0 },
            restaurant: { $: 0 },
            review: { $: 0, ybo: { $: 0 } },
            reviews: { $: 0 },
            rexroth: { $: 0 },
            rich: { $: 0 },
            richardli: { $: 0 },
            ricoh: { $: 0 },
            ril: { $: 0 },
            rio: { $: 0 },
            rip: { $: 0, clan: { $: 0 } },
            rocher: { $: 0 },
            rocks: { $: 0, myddns: { $: 0 }, "lima-city": { $: 0 }, webspace: { $: 0 } },
            rodeo: { $: 0 },
            rogers: { $: 0 },
            room: { $: 0 },
            rsvp: { $: 0 },
            rugby: { $: 0 },
            ruhr: { $: 0 },
            run: {
              $: 0,
              hs: { $: 0 },
              development: { $: 0 },
              ravendb: { $: 0 },
              servers: { $: 0 },
              build: { "*": { $: 0 } },
              code: { "*": { $: 0 } },
              database: { "*": { $: 0 } },
              migration: { "*": { $: 0 } },
              onporter: { $: 0 },
              repl: { $: 0 }
            },
            rwe: { $: 0 },
            ryukyu: { $: 0 },
            saarland: { $: 0 },
            safe: { $: 0 },
            safety: { $: 0 },
            sakura: { $: 0 },
            sale: { $: 0, for: { $: 0 } },
            salon: { $: 0 },
            samsclub: { $: 0 },
            samsung: { $: 0 },
            sandvik: { $: 0 },
            sandvikcoromant: { $: 0 },
            sanofi: { $: 0 },
            sap: { $: 0 },
            sarl: { $: 0 },
            sas: { $: 0 },
            save: { $: 0 },
            saxo: { $: 0 },
            sbi: { $: 0 },
            sbs: { $: 0 },
            sca: { $: 0 },
            scb: { $: 0 },
            schaeffler: { $: 0 },
            schmidt: { $: 0 },
            scholarships: { $: 0 },
            school: { $: 0 },
            schule: { $: 0 },
            schwarz: { $: 0 },
            science: { $: 0, ybo: { $: 0 } },
            scot: { $: 0, edu: { $: 0 }, gov: { $: 0, service: { $: 0 } } },
            search: { $: 0 },
            seat: { $: 0 },
            secure: { $: 0 },
            security: { $: 0 },
            seek: { $: 0 },
            select: { $: 0 },
            sener: { $: 0 },
            services: { $: 0, loginline: { $: 0 } },
            ses: { $: 0 },
            seven: { $: 0 },
            sew: { $: 0 },
            sex: { $: 0 },
            sexy: { $: 0 },
            sfr: { $: 0 },
            shangrila: { $: 0 },
            sharp: { $: 0 },
            shaw: { $: 0 },
            shell: { $: 0 },
            shia: { $: 0 },
            shiksha: { $: 0 },
            shoes: { $: 0 },
            shop: { $: 0, base: { $: 0 }, hoplix: { $: 0 }, barsy: { $: 0 } },
            shopping: { $: 0 },
            shouji: { $: 0 },
            show: { $: 0 },
            showtime: { $: 0 },
            silk: { $: 0 },
            sina: { $: 0 },
            singles: { $: 0 },
            site: {
              $: 0,
              cloudera: { "*": { $: 0 } },
              cyon: { $: 0 },
              fnwk: { $: 0 },
              folionetwork: { $: 0 },
              fastvps: { $: 0 },
              jele: { $: 0 },
              lelux: { $: 0 },
              loginline: { $: 0 },
              barsy: { $: 0 },
              mintere: { $: 0 },
              omniwe: { $: 0 },
              opensocial: { $: 0 },
              platformsh: { "*": { $: 0 } },
              tst: { "*": { $: 0 } },
              byen: { $: 0 },
              srht: { $: 0 },
              novecore: { $: 0 }
            },
            ski: { $: 0 },
            skin: { $: 0 },
            sky: { $: 0 },
            skype: { $: 0 },
            sling: { $: 0 },
            smart: { $: 0 },
            smile: { $: 0 },
            sncf: { $: 0 },
            soccer: { $: 0 },
            social: { $: 0 },
            softbank: { $: 0 },
            software: { $: 0 },
            sohu: { $: 0 },
            solar: { $: 0 },
            solutions: { $: 0, diher: { "*": { $: 0 } } },
            song: { $: 0 },
            sony: { $: 0 },
            soy: { $: 0 },
            spa: { $: 0 },
            space: { $: 0, myfast: { $: 0 }, uber: { $: 0 }, xs4all: { $: 0 } },
            sport: { $: 0 },
            spot: { $: 0 },
            srl: { $: 0 },
            stada: { $: 0 },
            staples: { $: 0 },
            star: { $: 0 },
            statebank: { $: 0 },
            statefarm: { $: 0 },
            stc: { $: 0 },
            stcgroup: { $: 0 },
            stockholm: { $: 0 },
            storage: { $: 0 },
            store: { $: 0, sellfy: { $: 0 }, shopware: { $: 0 }, storebase: { $: 0 } },
            stream: { $: 0 },
            studio: { $: 0 },
            study: { $: 0 },
            style: { $: 0 },
            sucks: { $: 0 },
            supplies: { $: 0 },
            supply: { $: 0 },
            support: { $: 0, barsy: { $: 0 } },
            surf: { $: 0 },
            surgery: { $: 0 },
            suzuki: { $: 0 },
            swatch: { $: 0 },
            swiss: { $: 0 },
            sydney: { $: 0 },
            systems: { $: 0, knightpoint: { $: 0 } },
            tab: { $: 0 },
            taipei: { $: 0 },
            talk: { $: 0 },
            taobao: { $: 0 },
            target: { $: 0 },
            tatamotors: { $: 0 },
            tatar: { $: 0 },
            tattoo: { $: 0 },
            tax: { $: 0 },
            taxi: { $: 0 },
            tci: { $: 0 },
            tdk: { $: 0 },
            team: { $: 0, discourse: { $: 0 }, jelastic: { $: 0 } },
            tech: { $: 0 },
            technology: { $: 0, co: { $: 0 } },
            temasek: { $: 0 },
            tennis: { $: 0 },
            teva: { $: 0 },
            thd: { $: 0 },
            theater: { $: 0 },
            theatre: { $: 0 },
            tiaa: { $: 0 },
            tickets: { $: 0 },
            tienda: { $: 0 },
            tiffany: { $: 0 },
            tips: { $: 0 },
            tires: { $: 0 },
            tirol: { $: 0 },
            tjmaxx: { $: 0 },
            tjx: { $: 0 },
            tkmaxx: { $: 0 },
            tmall: { $: 0 },
            today: { $: 0, prequalifyme: { $: 0 } },
            tokyo: { $: 0 },
            tools: { $: 0 },
            top: { $: 0, "now-dns": { $: 0 }, ntdll: { $: 0 } },
            toray: { $: 0 },
            toshiba: { $: 0 },
            total: { $: 0 },
            tours: { $: 0 },
            town: { $: 0 },
            toyota: { $: 0 },
            toys: { $: 0 },
            trade: { $: 0, ybo: { $: 0 } },
            trading: { $: 0 },
            training: { $: 0 },
            travel: { $: 0 },
            travelchannel: { $: 0 },
            travelers: { $: 0 },
            travelersinsurance: { $: 0 },
            trust: { $: 0 },
            trv: { $: 0 },
            tube: { $: 0 },
            tui: { $: 0 },
            tunes: { $: 0 },
            tushu: { $: 0 },
            tvs: { $: 0 },
            ubank: { $: 0 },
            ubs: { $: 0 },
            unicom: { $: 0 },
            university: { $: 0 },
            uno: { $: 0 },
            uol: { $: 0 },
            ups: { $: 0 },
            vacations: { $: 0 },
            vana: { $: 0 },
            vanguard: { $: 0 },
            vegas: { $: 0 },
            ventures: { $: 0 },
            verisign: { $: 0 },
            versicherung: { $: 0 },
            vet: { $: 0 },
            viajes: { $: 0 },
            video: { $: 0 },
            vig: { $: 0 },
            viking: { $: 0 },
            villas: { $: 0 },
            vin: { $: 0 },
            vip: { $: 0 },
            virgin: { $: 0 },
            visa: { $: 0 },
            vision: { $: 0 },
            viva: { $: 0 },
            vivo: { $: 0 },
            vlaanderen: { $: 0 },
            vodka: { $: 0 },
            volkswagen: { $: 0 },
            volvo: { $: 0 },
            vote: { $: 0 },
            voting: { $: 0 },
            voto: { $: 0 },
            voyage: { $: 0 },
            vuelos: { $: 0 },
            wales: { $: 0 },
            walmart: { $: 0 },
            walter: { $: 0 },
            wang: { $: 0 },
            wanggou: { $: 0 },
            watch: { $: 0 },
            watches: { $: 0 },
            weather: { $: 0 },
            weatherchannel: { $: 0 },
            webcam: { $: 0 },
            weber: { $: 0 },
            website: { $: 0 },
            wedding: { $: 0 },
            weibo: { $: 0 },
            weir: { $: 0 },
            whoswho: { $: 0 },
            wien: { $: 0 },
            wiki: { $: 0 },
            williamhill: { $: 0 },
            win: { $: 0, that: { $: 0 } },
            windows: { $: 0 },
            wine: { $: 0 },
            winners: { $: 0 },
            wme: { $: 0 },
            wolterskluwer: { $: 0 },
            woodside: { $: 0 },
            work: { $: 0, from: { $: 0 }, to: { $: 0 } },
            works: { $: 0 },
            world: { $: 0 },
            wow: { $: 0 },
            wtc: { $: 0 },
            wtf: { $: 0 },
            xbox: { $: 0 },
            xerox: { $: 0 },
            xfinity: { $: 0 },
            xihuan: { $: 0 },
            xin: { $: 0 },
            "xn--11b4c3d": { $: 0 },
            "xn--1ck2e1b": { $: 0 },
            "xn--1qqw23a": { $: 0 },
            "xn--30rr7y": { $: 0 },
            "xn--3bst00m": { $: 0 },
            "xn--3ds443g": { $: 0 },
            "xn--3pxu8k": { $: 0 },
            "xn--42c2d9a": { $: 0 },
            "xn--45q11c": { $: 0 },
            "xn--4gbrim": { $: 0 },
            "xn--55qw42g": { $: 0 },
            "xn--55qx5d": { $: 0 },
            "xn--5su34j936bgsg": { $: 0 },
            "xn--5tzm5g": { $: 0 },
            "xn--6frz82g": { $: 0 },
            "xn--6qq986b3xl": { $: 0 },
            "xn--80adxhks": { $: 0 },
            "xn--80aqecdr1a": { $: 0 },
            "xn--80asehdb": { $: 0 },
            "xn--80aswg": { $: 0 },
            "xn--8y0a063a": { $: 0 },
            "xn--9dbq2a": { $: 0 },
            "xn--9et52u": { $: 0 },
            "xn--9krt00a": { $: 0 },
            "xn--b4w605ferd": { $: 0 },
            "xn--bck1b9a5dre4c": { $: 0 },
            "xn--c1avg": { $: 0 },
            "xn--c2br7g": { $: 0 },
            "xn--cck2b3b": { $: 0 },
            "xn--cckwcxetd": { $: 0 },
            "xn--cg4bki": { $: 0 },
            "xn--czr694b": { $: 0 },
            "xn--czrs0t": { $: 0 },
            "xn--czru2d": { $: 0 },
            "xn--d1acj3b": { $: 0 },
            "xn--eckvdtc9d": { $: 0 },
            "xn--efvy88h": { $: 0 },
            "xn--fct429k": { $: 0 },
            "xn--fhbei": { $: 0 },
            "xn--fiq228c5hs": { $: 0 },
            "xn--fiq64b": { $: 0 },
            "xn--fjq720a": { $: 0 },
            "xn--flw351e": { $: 0 },
            "xn--fzys8d69uvgm": { $: 0 },
            "xn--g2xx48c": { $: 0 },
            "xn--gckr3f0f": { $: 0 },
            "xn--gk3at1e": { $: 0 },
            "xn--hxt814e": { $: 0 },
            "xn--i1b6b1a6a2e": { $: 0 },
            "xn--imr513n": { $: 0 },
            "xn--io0a7i": { $: 0 },
            "xn--j1aef": { $: 0 },
            "xn--jlq480n2rg": { $: 0 },
            "xn--jlq61u9w7b": { $: 0 },
            "xn--jvr189m": { $: 0 },
            "xn--kcrx77d1x4a": { $: 0 },
            "xn--kput3i": { $: 0 },
            "xn--mgba3a3ejt": { $: 0 },
            "xn--mgba7c0bbn0a": { $: 0 },
            "xn--mgbaakc7dvf": { $: 0 },
            "xn--mgbab2bd": { $: 0 },
            "xn--mgbca7dzdo": { $: 0 },
            "xn--mgbi4ecexp": { $: 0 },
            "xn--mgbt3dhd": { $: 0 },
            "xn--mk1bu44c": { $: 0 },
            "xn--mxtq1m": { $: 0 },
            "xn--ngbc5azd": { $: 0 },
            "xn--ngbe9e0a": { $: 0 },
            "xn--ngbrx": { $: 0 },
            "xn--nqv7f": { $: 0 },
            "xn--nqv7fs00ema": { $: 0 },
            "xn--nyqy26a": { $: 0 },
            "xn--otu796d": { $: 0 },
            "xn--p1acf": {
              $: 0,
              "xn--90amc": { $: 0 },
              "xn--j1aef": { $: 0 },
              "xn--j1ael8b": { $: 0 },
              "xn--h1ahn": { $: 0 },
              "xn--j1adp": { $: 0 },
              "xn--c1avg": { $: 0 },
              "xn--80aaa0cvac": { $: 0 },
              "xn--h1aliz": { $: 0 },
              "xn--90a1af": { $: 0 },
              "xn--41a": { $: 0 }
            },
            "xn--pssy2u": { $: 0 },
            "xn--q9jyb4c": { $: 0 },
            "xn--qcka1pmc": { $: 0 },
            "xn--rhqv96g": { $: 0 },
            "xn--rovu88b": { $: 0 },
            "xn--ses554g": { $: 0 },
            "xn--t60b56a": { $: 0 },
            "xn--tckwe": { $: 0 },
            "xn--tiq49xqyj": { $: 0 },
            "xn--unup4y": { $: 0 },
            "xn--vermgensberater-ctb": { $: 0 },
            "xn--vermgensberatung-pwb": { $: 0 },
            "xn--vhquv": { $: 0 },
            "xn--vuq861b": { $: 0 },
            "xn--w4r85el8fhu5dnra": { $: 0 },
            "xn--w4rs40l": { $: 0 },
            "xn--xhq521b": { $: 0 },
            "xn--zfr164b": { $: 0 },
            xyz: { $: 0, blogsite: { $: 0 }, localzone: { $: 0 }, crafting: { $: 0 }, zapto: { $: 0 }, telebit: { "*": { $: 0 } } },
            yachts: { $: 0 },
            yahoo: { $: 0 },
            yamaxun: { $: 0 },
            yandex: { $: 0 },
            yodobashi: { $: 0 },
            yoga: { $: 0 },
            yokohama: { $: 0 },
            you: { $: 0 },
            youtube: { $: 0 },
            yun: { $: 0 },
            zappos: { $: 0 },
            zara: { $: 0 },
            zero: { $: 0 },
            zip: { $: 0 },
            zone: { $: 0, cloud66: { $: 0 }, hs: { $: 0 }, triton: { "*": { $: 0 } }, lima: { $: 0 } },
            zuerich: { $: 0 }
          }
        };
      },
      {}
    ],
    154: [
      function (e, t, n) {
        (function (e) {
          (function () {
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
            var n, r, a, o, i, s, $, u, c, l, d, h, p, f, m, g, b, y, v, k;
            !(function (n) {
              var r = "object" == typeof e ? e : "object" == typeof self ? self : "object" == typeof this ? this : {};
              function a(e, t) {
                return (
                  e !== r &&
                    ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", { value: !0 }) : (e.__esModule = !0)),
                  function (n, r) {
                    return (e[n] = t ? t(n, r) : r);
                  }
                );
              }
              "function" == typeof define && define.amd
                ? define("tslib", ["exports"], function (e) {
                    n(a(r, a(e)));
                  })
                : "object" == typeof t && "object" == typeof t.exports
                ? n(a(r, a(t.exports)))
                : n(a(r));
            })(function (e) {
              var t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                };
              (n = function (e, n) {
                function r() {
                  this.constructor = e;
                }
                t(e, n), (e.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
              }),
                (r =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e;
                  }),
                (a = function (e, t) {
                  var n = {};
                  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
                  }
                  return n;
                }),
                (o = function (e, t, n, r) {
                  var a,
                    o = arguments.length,
                    i = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
                  else for (var s = e.length - 1; s >= 0; s--) (a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
                  return o > 3 && i && Object.defineProperty(t, n, i), i;
                }),
                (i = function (e, t) {
                  return function (n, r) {
                    t(n, r, e);
                  };
                }),
                (s = function (e, t) {
                  if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
                }),
                ($ = function (e, t, n, r) {
                  return new (n || (n = Promise))(function (a, o) {
                    function i(e) {
                      try {
                        $(r.next(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function s(e) {
                      try {
                        $(r.throw(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function $(e) {
                      e.done
                        ? a(e.value)
                        : new n(function (t) {
                            t(e.value);
                          }).then(i, s);
                    }
                    $((r = r.apply(e, t || [])).next());
                  });
                }),
                (u = function (e, t) {
                  var n,
                    r,
                    a,
                    o,
                    i = {
                      label: 0,
                      sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                      },
                      trys: [],
                      ops: []
                    };
                  return (
                    (o = { next: s(0), throw: s(1), return: s(2) }),
                    "function" == typeof Symbol &&
                      (o[Symbol.iterator] = function () {
                        return this;
                      }),
                    o
                  );
                  function s(o) {
                    return function (s) {
                      return (function (o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; i; )
                          try {
                            if (
                              ((n = 1),
                              r &&
                                (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) &&
                                !(a = a.call(r, o[1])).done)
                            )
                              return a;
                            switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                              case 0:
                              case 1:
                                a = o;
                                break;
                              case 4:
                                return i.label++, { value: o[1], done: !1 };
                              case 5:
                                i.label++, (r = o[1]), (o = [0]);
                                continue;
                              case 7:
                                (o = i.ops.pop()), i.trys.pop();
                                continue;
                              default:
                                if (!((a = i.trys), (a = a.length > 0 && a[a.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                                  i = 0;
                                  continue;
                                }
                                if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                                  i.label = o[1];
                                  break;
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                  (i.label = a[1]), (a = o);
                                  break;
                                }
                                if (a && i.label < a[2]) {
                                  (i.label = a[2]), i.ops.push(o);
                                  break;
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue;
                            }
                            o = t.call(e, i);
                          } catch (e) {
                            (o = [6, e]), (r = 0);
                          } finally {
                            n = a = 0;
                          }
                        if (5 & o[0]) throw o[1];
                        return { value: o[0] ? o[1] : void 0, done: !0 };
                      })([o, s]);
                    };
                  }
                }),
                (c = function (e, t) {
                  for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
                }),
                (l = function (e) {
                  var t = "function" == typeof Symbol && e[Symbol.iterator],
                    n = 0;
                  return t
                    ? t.call(e)
                    : {
                        next: function () {
                          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                        }
                      };
                }),
                (d = function (e, t) {
                  var n = "function" == typeof Symbol && e[Symbol.iterator];
                  if (!n) return e;
                  var r,
                    a,
                    o = n.call(e),
                    i = [];
                  try {
                    for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) i.push(r.value);
                  } catch (e) {
                    a = { error: e };
                  } finally {
                    try {
                      r && !r.done && (n = o.return) && n.call(o);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                  return i;
                }),
                (h = function () {
                  for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(d(arguments[t]));
                  return e;
                }),
                (p = function () {
                  for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                  var r = Array(e),
                    a = 0;
                  for (t = 0; t < n; t++) for (var o = arguments[t], i = 0, s = o.length; i < s; i++, a++) r[a] = o[i];
                  return r;
                }),
                (f = function (e) {
                  return this instanceof f ? ((this.v = e), this) : new f(e);
                }),
                (m = function (e, t, n) {
                  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                  var r,
                    a = n.apply(e, t || []),
                    o = [];
                  return (
                    (r = {}),
                    i("next"),
                    i("throw"),
                    i("return"),
                    (r[Symbol.asyncIterator] = function () {
                      return this;
                    }),
                    r
                  );
                  function i(e) {
                    a[e] &&
                      (r[e] = function (t) {
                        return new Promise(function (n, r) {
                          o.push([e, t, n, r]) > 1 || s(e, t);
                        });
                      });
                  }
                  function s(e, t) {
                    try {
                      (n = a[e](t)).value instanceof f ? Promise.resolve(n.value.v).then($, u) : c(o[0][2], n);
                    } catch (e) {
                      c(o[0][3], e);
                    }
                    var n;
                  }
                  function $(e) {
                    s("next", e);
                  }
                  function u(e) {
                    s("throw", e);
                  }
                  function c(e, t) {
                    e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
                  }
                }),
                (g = function (e) {
                  var t, n;
                  return (
                    (t = {}),
                    r("next"),
                    r("throw", function (e) {
                      throw e;
                    }),
                    r("return"),
                    (t[Symbol.iterator] = function () {
                      return this;
                    }),
                    t
                  );
                  function r(r, a) {
                    t[r] = e[r]
                      ? function (t) {
                          return (n = !n) ? { value: f(e[r](t)), done: "return" === r } : a ? a(t) : t;
                        }
                      : a;
                  }
                }),
                (b = function (e) {
                  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                  var t,
                    n = e[Symbol.asyncIterator];
                  return n
                    ? n.call(e)
                    : ((e = l(e)),
                      (t = {}),
                      r("next"),
                      r("throw"),
                      r("return"),
                      (t[Symbol.asyncIterator] = function () {
                        return this;
                      }),
                      t);
                  function r(n) {
                    t[n] =
                      e[n] &&
                      function (t) {
                        return new Promise(function (r, a) {
                          (function (e, t, n, r) {
                            Promise.resolve(r).then(function (t) {
                              e({ value: t, done: n });
                            }, t);
                          })(r, a, (t = e[n](t)).done, t.value);
                        });
                      };
                  }
                }),
                (y = function (e, t) {
                  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
                }),
                (v = function (e) {
                  if (e && e.__esModule) return e;
                  var t = {};
                  if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                  return (t.default = e), t;
                }),
                (k = function (e) {
                  return e && e.__esModule ? e : { default: e };
                }),
                e("__extends", n),
                e("__assign", r),
                e("__rest", a),
                e("__decorate", o),
                e("__param", i),
                e("__metadata", s),
                e("__awaiter", $),
                e("__generator", u),
                e("__exportStar", c),
                e("__values", l),
                e("__read", d),
                e("__spread", h),
                e("__spreadArrays", p),
                e("__await", f),
                e("__asyncGenerator", m),
                e("__asyncDelegator", g),
                e("__asyncValues", b),
                e("__makeTemplateObject", y),
                e("__importStar", v),
                e("__importDefault", k);
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    155: [
      function (e, t, n) {
        (function (e) {
          (function () {
            !(function (e, r) {
              "object" == typeof n && void 0 !== t
                ? (t.exports = r())
                : "function" == typeof define && define.amd
                ? define("underscore", r)
                : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
                  (function () {
                    var t = e._,
                      n = (e._ = r());
                    n.noConflict = function () {
                      return (e._ = t), n;
                    };
                  })());
            })(this, function () {
              var t = "1.13.1",
                n =
                  ("object" == typeof self && self.self === self && self) ||
                  ("object" == typeof e && e.global === e && e) ||
                  Function("return this")() ||
                  {},
                r = Array.prototype,
                a = Object.prototype,
                o = "undefined" != typeof Symbol ? Symbol.prototype : null,
                i = r.push,
                s = r.slice,
                $ = a.toString,
                u = a.hasOwnProperty,
                c = "undefined" != typeof ArrayBuffer,
                l = "undefined" != typeof DataView,
                d = Array.isArray,
                h = Object.keys,
                p = Object.create,
                f = c && ArrayBuffer.isView,
                m = isNaN,
                g = isFinite,
                b = !{ toString: null }.propertyIsEnumerable("toString"),
                y = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                v = Math.pow(2, 53) - 1;
              function k(e, t) {
                return (
                  (t = null == t ? e.length - 1 : +t),
                  function () {
                    for (var n = Math.max(arguments.length - t, 0), r = Array(n), a = 0; a < n; a++) r[a] = arguments[a + t];
                    switch (t) {
                      case 0:
                        return e.call(this, r);
                      case 1:
                        return e.call(this, arguments[0], r);
                      case 2:
                        return e.call(this, arguments[0], arguments[1], r);
                    }
                    var o = Array(t + 1);
                    for (a = 0; a < t; a++) o[a] = arguments[a];
                    return (o[t] = r), e.apply(this, o);
                  }
                );
              }
              function _(e) {
                var t = typeof e;
                return "function" === t || ("object" === t && !!e);
              }
              function w(e) {
                return void 0 === e;
              }
              function x(e) {
                return !0 === e || !1 === e || "[object Boolean]" === $.call(e);
              }
              function j(e) {
                var t = "[object " + e + "]";
                return function (e) {
                  return $.call(e) === t;
                };
              }
              var S = j("String"),
                E = j("Number"),
                O = j("Date"),
                T = j("RegExp"),
                I = j("Error"),
                z = j("Symbol"),
                R = j("ArrayBuffer"),
                P = j("Function"),
                A = n.document && n.document.childNodes;
              "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                "function" != typeof A &&
                (P = function (e) {
                  return "function" == typeof e || !1;
                });
              var C = P,
                q = j("Object"),
                D = l && q(new DataView(new ArrayBuffer(8))),
                M = "undefined" != typeof Map && q(new Map()),
                N = j("DataView");
              var L = D
                  ? function (e) {
                      return null != e && C(e.getInt8) && R(e.buffer);
                    }
                  : N,
                U = d || j("Array");
              function B(e, t) {
                return null != e && u.call(e, t);
              }
              var F = j("Arguments");
              !(function () {
                F(arguments) ||
                  (F = function (e) {
                    return B(e, "callee");
                  });
              })();
              var H = F;
              function G(e) {
                return E(e) && m(e);
              }
              function W(e) {
                return function () {
                  return e;
                };
              }
              function V(e) {
                return function (t) {
                  var n = e(t);
                  return "number" == typeof n && n >= 0 && n <= v;
                };
              }
              function J(e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              }
              var Y = J("byteLength"),
                X = V(Y),
                K = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
              var Z = c
                  ? function (e) {
                      return f ? f(e) && !L(e) : X(e) && K.test($.call(e));
                    }
                  : W(!1),
                Q = J("length");
              function ee(e, t) {
                t = (function (e) {
                  for (var t = {}, n = e.length, r = 0; r < n; ++r) t[e[r]] = !0;
                  return {
                    contains: function (e) {
                      return t[e];
                    },
                    push: function (n) {
                      return (t[n] = !0), e.push(n);
                    }
                  };
                })(t);
                var n = y.length,
                  r = e.constructor,
                  o = (C(r) && r.prototype) || a,
                  i = "constructor";
                for (B(e, i) && !t.contains(i) && t.push(i); n--; ) (i = y[n]) in e && e[i] !== o[i] && !t.contains(i) && t.push(i);
              }
              function te(e) {
                if (!_(e)) return [];
                if (h) return h(e);
                var t = [];
                for (var n in e) B(e, n) && t.push(n);
                return b && ee(e, t), t;
              }
              function ne(e, t) {
                var n = te(t),
                  r = n.length;
                if (null == e) return !r;
                for (var a = Object(e), o = 0; o < r; o++) {
                  var i = n[o];
                  if (t[i] !== a[i] || !(i in a)) return !1;
                }
                return !0;
              }
              function re(e) {
                return e instanceof re ? e : this instanceof re ? void (this._wrapped = e) : new re(e);
              }
              function ae(e) {
                return new Uint8Array(e.buffer || e, e.byteOffset || 0, Y(e));
              }
              (re.VERSION = t),
                (re.prototype.value = function () {
                  return this._wrapped;
                }),
                (re.prototype.valueOf = re.prototype.toJSON = re.prototype.value),
                (re.prototype.toString = function () {
                  return String(this._wrapped);
                });
              var oe = "[object DataView]";
              function ie(e, t, n, r) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var a = typeof e;
                return ("function" === a || "object" === a || "object" == typeof t) && se(e, t, n, r);
              }
              function se(e, t, n, r) {
                e instanceof re && (e = e._wrapped), t instanceof re && (t = t._wrapped);
                var a = $.call(e);
                if (a !== $.call(t)) return !1;
                if (D && "[object Object]" == a && L(e)) {
                  if (!L(t)) return !1;
                  a = oe;
                }
                switch (a) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + e == "" + t;
                  case "[object Number]":
                    return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                  case "[object Date]":
                  case "[object Boolean]":
                    return +e == +t;
                  case "[object Symbol]":
                    return o.valueOf.call(e) === o.valueOf.call(t);
                  case "[object ArrayBuffer]":
                  case oe:
                    return se(ae(e), ae(t), n, r);
                }
                var i = "[object Array]" === a;
                if (!i && Z(e)) {
                  if (Y(e) !== Y(t)) return !1;
                  if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
                  i = !0;
                }
                if (!i) {
                  if ("object" != typeof e || "object" != typeof t) return !1;
                  var s = e.constructor,
                    u = t.constructor;
                  if (s !== u && !(C(s) && s instanceof s && C(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
                }
                r = r || [];
                for (var c = (n = n || []).length; c--; ) if (n[c] === e) return r[c] === t;
                if ((n.push(e), r.push(t), i)) {
                  if ((c = e.length) !== t.length) return !1;
                  for (; c--; ) if (!ie(e[c], t[c], n, r)) return !1;
                } else {
                  var l,
                    d = te(e);
                  if (((c = d.length), te(t).length !== c)) return !1;
                  for (; c--; ) if (!B(t, (l = d[c])) || !ie(e[l], t[l], n, r)) return !1;
                }
                return n.pop(), r.pop(), !0;
              }
              function $e(e) {
                if (!_(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return b && ee(e, t), t;
              }
              function ue(e) {
                var t = Q(e);
                return function (n) {
                  if (null == n) return !1;
                  var r = $e(n);
                  if (Q(r)) return !1;
                  for (var a = 0; a < t; a++) if (!C(n[e[a]])) return !1;
                  return e !== pe || !C(n[ce]);
                };
              }
              var ce = "forEach",
                le = ["clear", "delete"],
                de = ["get", "has", "set"],
                he = le.concat(ce, de),
                pe = le.concat(de),
                fe = ["add"].concat(le, ce, "has"),
                me = M ? ue(he) : j("Map"),
                ge = M ? ue(pe) : j("WeakMap"),
                be = M ? ue(fe) : j("Set"),
                ye = j("WeakSet");
              function ve(e) {
                for (var t = te(e), n = t.length, r = Array(n), a = 0; a < n; a++) r[a] = e[t[a]];
                return r;
              }
              function ke(e) {
                for (var t = {}, n = te(e), r = 0, a = n.length; r < a; r++) t[e[n[r]]] = n[r];
                return t;
              }
              function _e(e) {
                var t = [];
                for (var n in e) C(e[n]) && t.push(n);
                return t.sort();
              }
              function we(e, t) {
                return function (n) {
                  var r = arguments.length;
                  if ((t && (n = Object(n)), r < 2 || null == n)) return n;
                  for (var a = 1; a < r; a++)
                    for (var o = arguments[a], i = e(o), s = i.length, $ = 0; $ < s; $++) {
                      var u = i[$];
                      (t && void 0 !== n[u]) || (n[u] = o[u]);
                    }
                  return n;
                };
              }
              var xe = we($e),
                je = we(te),
                Se = we($e, !0);
              function Ee(e) {
                if (!_(e)) return {};
                if (p) return p(e);
                var t = function () {};
                t.prototype = e;
                var n = new t();
                return (t.prototype = null), n;
              }
              function Oe(e) {
                return _(e) ? (U(e) ? e.slice() : xe({}, e)) : e;
              }
              function Te(e) {
                return U(e) ? e : [e];
              }
              function Ie(e) {
                return re.toPath(e);
              }
              function ze(e, t) {
                for (var n = t.length, r = 0; r < n; r++) {
                  if (null == e) return;
                  e = e[t[r]];
                }
                return n ? e : void 0;
              }
              function Re(e, t, n) {
                var r = ze(e, Ie(t));
                return w(r) ? n : r;
              }
              function Pe(e) {
                return e;
              }
              function Ae(e) {
                return (
                  (e = je({}, e)),
                  function (t) {
                    return ne(t, e);
                  }
                );
              }
              function Ce(e) {
                return (
                  (e = Ie(e)),
                  function (t) {
                    return ze(t, e);
                  }
                );
              }
              function qe(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function (n) {
                      return e.call(t, n);
                    };
                  case 3:
                    return function (n, r, a) {
                      return e.call(t, n, r, a);
                    };
                  case 4:
                    return function (n, r, a, o) {
                      return e.call(t, n, r, a, o);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              }
              function De(e, t, n) {
                return null == e ? Pe : C(e) ? qe(e, t, n) : _(e) && !U(e) ? Ae(e) : Ce(e);
              }
              function Me(e, t) {
                return De(e, t, 1 / 0);
              }
              function Ne(e, t, n) {
                return re.iteratee !== Me ? re.iteratee(e, t) : De(e, t, n);
              }
              function Le() {}
              function Ue(e, t) {
                return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
              }
              (re.toPath = Te), (re.iteratee = Me);
              var Be =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              function Fe(e) {
                var t = function (t) {
                    return e[t];
                  },
                  n = "(?:" + te(e).join("|") + ")",
                  r = RegExp(n),
                  a = RegExp(n, "g");
                return function (e) {
                  return (e = null == e ? "" : "" + e), r.test(e) ? e.replace(a, t) : e;
                };
              }
              var He = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                Ge = Fe(He),
                We = Fe(ke(He)),
                Ve = (re.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
                Je = /(.)^/,
                Ye = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Xe = /\\|'|\r|\n|\u2028|\u2029/g;
              function Ke(e) {
                return "\\" + Ye[e];
              }
              var Ze = /^\s*(\w|\$)+\s*$/;
              var Qe = 0;
              function et(e, t, n, r, a) {
                if (!(r instanceof t)) return e.apply(n, a);
                var o = Ee(e.prototype),
                  i = e.apply(o, a);
                return _(i) ? i : o;
              }
              var tt = k(function (e, t) {
                var n = tt.placeholder,
                  r = function () {
                    for (var a = 0, o = t.length, i = Array(o), s = 0; s < o; s++) i[s] = t[s] === n ? arguments[a++] : t[s];
                    for (; a < arguments.length; ) i.push(arguments[a++]);
                    return et(e, r, this, this, i);
                  };
                return r;
              });
              tt.placeholder = re;
              var nt = k(function (e, t, n) {
                  if (!C(e)) throw new TypeError("Bind must be called on a function");
                  var r = k(function (a) {
                    return et(e, r, t, this, n.concat(a));
                  });
                  return r;
                }),
                rt = V(Q);
              function at(e, t, n, r) {
                if (((r = r || []), t || 0 === t)) {
                  if (t <= 0) return r.concat(e);
                } else t = 1 / 0;
                for (var a = r.length, o = 0, i = Q(e); o < i; o++) {
                  var s = e[o];
                  if (rt(s) && (U(s) || H(s)))
                    if (t > 1) at(s, t - 1, n, r), (a = r.length);
                    else for (var $ = 0, u = s.length; $ < u; ) r[a++] = s[$++];
                  else n || (r[a++] = s);
                }
                return r;
              }
              var ot = k(function (e, t) {
                var n = (t = at(t, !1, !1)).length;
                if (n < 1) throw new Error("bindAll must be passed function names");
                for (; n--; ) {
                  var r = t[n];
                  e[r] = nt(e[r], e);
                }
                return e;
              });
              var it = k(function (e, t, n) {
                  return setTimeout(function () {
                    return e.apply(null, n);
                  }, t);
                }),
                st = tt(it, re, 1);
              function $t(e) {
                return function () {
                  return !e.apply(this, arguments);
                };
              }
              function ut(e, t) {
                var n;
                return function () {
                  return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                };
              }
              var ct = tt(ut, 2);
              function lt(e, t, n) {
                t = Ne(t, n);
                for (var r, a = te(e), o = 0, i = a.length; o < i; o++) if (t(e[(r = a[o])], r, e)) return r;
              }
              function dt(e) {
                return function (t, n, r) {
                  n = Ne(n, r);
                  for (var a = Q(t), o = e > 0 ? 0 : a - 1; o >= 0 && o < a; o += e) if (n(t[o], o, t)) return o;
                  return -1;
                };
              }
              var ht = dt(1),
                pt = dt(-1);
              function ft(e, t, n, r) {
                for (var a = (n = Ne(n, r, 1))(t), o = 0, i = Q(e); o < i; ) {
                  var s = Math.floor((o + i) / 2);
                  n(e[s]) < a ? (o = s + 1) : (i = s);
                }
                return o;
              }
              function mt(e, t, n) {
                return function (r, a, o) {
                  var i = 0,
                    $ = Q(r);
                  if ("number" == typeof o) e > 0 ? (i = o >= 0 ? o : Math.max(o + $, i)) : ($ = o >= 0 ? Math.min(o + 1, $) : o + $ + 1);
                  else if (n && o && $) return r[(o = n(r, a))] === a ? o : -1;
                  if (a != a) return (o = t(s.call(r, i, $), G)) >= 0 ? o + i : -1;
                  for (o = e > 0 ? i : $ - 1; o >= 0 && o < $; o += e) if (r[o] === a) return o;
                  return -1;
                };
              }
              var gt = mt(1, ht, ft),
                bt = mt(-1, pt);
              function yt(e, t, n) {
                var r = (rt(e) ? ht : lt)(e, t, n);
                if (void 0 !== r && -1 !== r) return e[r];
              }
              function vt(e, t, n) {
                var r, a;
                if (((t = qe(t, n)), rt(e))) for (r = 0, a = e.length; r < a; r++) t(e[r], r, e);
                else {
                  var o = te(e);
                  for (r = 0, a = o.length; r < a; r++) t(e[o[r]], o[r], e);
                }
                return e;
              }
              function kt(e, t, n) {
                t = Ne(t, n);
                for (var r = !rt(e) && te(e), a = (r || e).length, o = Array(a), i = 0; i < a; i++) {
                  var s = r ? r[i] : i;
                  o[i] = t(e[s], s, e);
                }
                return o;
              }
              function _t(e) {
                var t = function (t, n, r, a) {
                  var o = !rt(t) && te(t),
                    i = (o || t).length,
                    s = e > 0 ? 0 : i - 1;
                  for (a || ((r = t[o ? o[s] : s]), (s += e)); s >= 0 && s < i; s += e) {
                    var $ = o ? o[s] : s;
                    r = n(r, t[$], $, t);
                  }
                  return r;
                };
                return function (e, n, r, a) {
                  var o = arguments.length >= 3;
                  return t(e, qe(n, a, 4), r, o);
                };
              }
              var wt = _t(1),
                xt = _t(-1);
              function jt(e, t, n) {
                var r = [];
                return (
                  (t = Ne(t, n)),
                  vt(e, function (e, n, a) {
                    t(e, n, a) && r.push(e);
                  }),
                  r
                );
              }
              function St(e, t, n) {
                t = Ne(t, n);
                for (var r = !rt(e) && te(e), a = (r || e).length, o = 0; o < a; o++) {
                  var i = r ? r[o] : o;
                  if (!t(e[i], i, e)) return !1;
                }
                return !0;
              }
              function Et(e, t, n) {
                t = Ne(t, n);
                for (var r = !rt(e) && te(e), a = (r || e).length, o = 0; o < a; o++) {
                  var i = r ? r[o] : o;
                  if (t(e[i], i, e)) return !0;
                }
                return !1;
              }
              function Ot(e, t, n, r) {
                return rt(e) || (e = ve(e)), ("number" != typeof n || r) && (n = 0), gt(e, t, n) >= 0;
              }
              var Tt = k(function (e, t, n) {
                var r, a;
                return (
                  C(t) ? (a = t) : ((t = Ie(t)), (r = t.slice(0, -1)), (t = t[t.length - 1])),
                  kt(e, function (e) {
                    var o = a;
                    if (!o) {
                      if ((r && r.length && (e = ze(e, r)), null == e)) return;
                      o = e[t];
                    }
                    return null == o ? o : o.apply(e, n);
                  })
                );
              });
              function It(e, t) {
                return kt(e, Ce(t));
              }
              function zt(e, t, n) {
                var r,
                  a,
                  o = -1 / 0,
                  i = -1 / 0;
                if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                  for (var s = 0, $ = (e = rt(e) ? e : ve(e)).length; s < $; s++) null != (r = e[s]) && r > o && (o = r);
                else
                  (t = Ne(t, n)),
                    vt(e, function (e, n, r) {
                      ((a = t(e, n, r)) > i || (a === -1 / 0 && o === -1 / 0)) && ((o = e), (i = a));
                    });
                return o;
              }
              function Rt(e, t, n) {
                if (null == t || n) return rt(e) || (e = ve(e)), e[Ue(e.length - 1)];
                var r = rt(e) ? Oe(e) : ve(e),
                  a = Q(r);
                t = Math.max(Math.min(t, a), 0);
                for (var o = a - 1, i = 0; i < t; i++) {
                  var s = Ue(i, o),
                    $ = r[i];
                  (r[i] = r[s]), (r[s] = $);
                }
                return r.slice(0, t);
              }
              function Pt(e, t) {
                return function (n, r, a) {
                  var o = t ? [[], []] : {};
                  return (
                    (r = Ne(r, a)),
                    vt(n, function (t, a) {
                      var i = r(t, a, n);
                      e(o, t, i);
                    }),
                    o
                  );
                };
              }
              var At = Pt(function (e, t, n) {
                  B(e, n) ? e[n].push(t) : (e[n] = [t]);
                }),
                Ct = Pt(function (e, t, n) {
                  e[n] = t;
                }),
                qt = Pt(function (e, t, n) {
                  B(e, n) ? e[n]++ : (e[n] = 1);
                }),
                Dt = Pt(function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                }, !0),
                Mt = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
              function Nt(e, t, n) {
                return t in n;
              }
              var Lt = k(function (e, t) {
                  var n = {},
                    r = t[0];
                  if (null == e) return n;
                  C(r) ? (t.length > 1 && (r = qe(r, t[1])), (t = $e(e))) : ((r = Nt), (t = at(t, !1, !1)), (e = Object(e)));
                  for (var a = 0, o = t.length; a < o; a++) {
                    var i = t[a],
                      s = e[i];
                    r(s, i, e) && (n[i] = s);
                  }
                  return n;
                }),
                Ut = k(function (e, t) {
                  var n,
                    r = t[0];
                  return (
                    C(r)
                      ? ((r = $t(r)), t.length > 1 && (n = t[1]))
                      : ((t = kt(at(t, !1, !1), String)),
                        (r = function (e, n) {
                          return !Ot(t, n);
                        })),
                    Lt(e, r, n)
                  );
                });
              function Bt(e, t, n) {
                return s.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
              }
              function Ft(e, t, n) {
                return null == e || e.length < 1 ? (null == t || n ? void 0 : []) : null == t || n ? e[0] : Bt(e, e.length - t);
              }
              function Ht(e, t, n) {
                return s.call(e, null == t || n ? 1 : t);
              }
              var Gt = k(function (e, t) {
                  return (
                    (t = at(t, !0, !0)),
                    jt(e, function (e) {
                      return !Ot(t, e);
                    })
                  );
                }),
                Wt = k(function (e, t) {
                  return Gt(e, t);
                });
              function Vt(e, t, n, r) {
                x(t) || ((r = n), (n = t), (t = !1)), null != n && (n = Ne(n, r));
                for (var a = [], o = [], i = 0, s = Q(e); i < s; i++) {
                  var $ = e[i],
                    u = n ? n($, i, e) : $;
                  t && !n ? ((i && o === u) || a.push($), (o = u)) : n ? Ot(o, u) || (o.push(u), a.push($)) : Ot(a, $) || a.push($);
                }
                return a;
              }
              var Jt = k(function (e) {
                return Vt(at(e, !0, !0));
              });
              function Yt(e) {
                for (var t = (e && zt(e, Q).length) || 0, n = Array(t), r = 0; r < t; r++) n[r] = It(e, r);
                return n;
              }
              var Xt = k(Yt);
              function Kt(e, t) {
                return e._chain ? re(t).chain() : t;
              }
              function Zt(e) {
                return (
                  vt(_e(e), function (t) {
                    var n = (re[t] = e[t]);
                    re.prototype[t] = function () {
                      var e = [this._wrapped];
                      return i.apply(e, arguments), Kt(this, n.apply(re, e));
                    };
                  }),
                  re
                );
              }
              vt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = r[e];
                re.prototype[e] = function () {
                  var n = this._wrapped;
                  return (
                    null != n && (t.apply(n, arguments), ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0]), Kt(this, n)
                  );
                };
              }),
                vt(["concat", "join", "slice"], function (e) {
                  var t = r[e];
                  re.prototype[e] = function () {
                    var e = this._wrapped;
                    return null != e && (e = t.apply(e, arguments)), Kt(this, e);
                  };
                });
              var Qt = {
                  __proto__: null,
                  VERSION: t,
                  restArguments: k,
                  isObject: _,
                  isNull: function (e) {
                    return null === e;
                  },
                  isUndefined: w,
                  isBoolean: x,
                  isElement: function (e) {
                    return !(!e || 1 !== e.nodeType);
                  },
                  isString: S,
                  isNumber: E,
                  isDate: O,
                  isRegExp: T,
                  isError: I,
                  isSymbol: z,
                  isArrayBuffer: R,
                  isDataView: L,
                  isArray: U,
                  isFunction: C,
                  isArguments: H,
                  isFinite: function (e) {
                    return !z(e) && g(e) && !isNaN(parseFloat(e));
                  },
                  isNaN: G,
                  isTypedArray: Z,
                  isEmpty: function (e) {
                    if (null == e) return !0;
                    var t = Q(e);
                    return "number" == typeof t && (U(e) || S(e) || H(e)) ? 0 === t : 0 === Q(te(e));
                  },
                  isMatch: ne,
                  isEqual: function (e, t) {
                    return ie(e, t);
                  },
                  isMap: me,
                  isWeakMap: ge,
                  isSet: be,
                  isWeakSet: ye,
                  keys: te,
                  allKeys: $e,
                  values: ve,
                  pairs: function (e) {
                    for (var t = te(e), n = t.length, r = Array(n), a = 0; a < n; a++) r[a] = [t[a], e[t[a]]];
                    return r;
                  },
                  invert: ke,
                  functions: _e,
                  methods: _e,
                  extend: xe,
                  extendOwn: je,
                  assign: je,
                  defaults: Se,
                  create: function (e, t) {
                    var n = Ee(e);
                    return t && je(n, t), n;
                  },
                  clone: Oe,
                  tap: function (e, t) {
                    return t(e), e;
                  },
                  get: Re,
                  has: function (e, t) {
                    for (var n = (t = Ie(t)).length, r = 0; r < n; r++) {
                      var a = t[r];
                      if (!B(e, a)) return !1;
                      e = e[a];
                    }
                    return !!n;
                  },
                  mapObject: function (e, t, n) {
                    t = Ne(t, n);
                    for (var r = te(e), a = r.length, o = {}, i = 0; i < a; i++) {
                      var s = r[i];
                      o[s] = t(e[s], s, e);
                    }
                    return o;
                  },
                  identity: Pe,
                  constant: W,
                  noop: Le,
                  toPath: Te,
                  property: Ce,
                  propertyOf: function (e) {
                    return null == e
                      ? Le
                      : function (t) {
                          return Re(e, t);
                        };
                  },
                  matcher: Ae,
                  matches: Ae,
                  times: function (e, t, n) {
                    var r = Array(Math.max(0, e));
                    t = qe(t, n, 1);
                    for (var a = 0; a < e; a++) r[a] = t(a);
                    return r;
                  },
                  random: Ue,
                  now: Be,
                  escape: Ge,
                  unescape: We,
                  templateSettings: Ve,
                  template: function (e, t, n) {
                    !t && n && (t = n), (t = Se({}, t, re.templateSettings));
                    var r = RegExp(
                        [(t.escape || Je).source, (t.interpolate || Je).source, (t.evaluate || Je).source].join("|") + "|$",
                        "g"
                      ),
                      a = 0,
                      o = "__p+='";
                    e.replace(r, function (t, n, r, i, s) {
                      return (
                        (o += e.slice(a, s).replace(Xe, Ke)),
                        (a = s + t.length),
                        n
                          ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                          : r
                          ? (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                          : i && (o += "';\n" + i + "\n__p+='"),
                        t
                      );
                    }),
                      (o += "';\n");
                    var i,
                      s = t.variable;
                    if (s) {
                      if (!Ze.test(s)) throw new Error("variable is not a bare identifier: " + s);
                    } else (o = "with(obj||{}){\n" + o + "}\n"), (s = "obj");
                    o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                    try {
                      i = new Function(s, "_", o);
                    } catch (e) {
                      throw ((e.source = o), e);
                    }
                    var $ = function (e) {
                      return i.call(this, e, re);
                    };
                    return ($.source = "function(" + s + "){\n" + o + "}"), $;
                  },
                  result: function (e, t, n) {
                    var r = (t = Ie(t)).length;
                    if (!r) return C(n) ? n.call(e) : n;
                    for (var a = 0; a < r; a++) {
                      var o = null == e ? void 0 : e[t[a]];
                      void 0 === o && ((o = n), (a = r)), (e = C(o) ? o.call(e) : o);
                    }
                    return e;
                  },
                  uniqueId: function (e) {
                    var t = ++Qe + "";
                    return e ? e + t : t;
                  },
                  chain: function (e) {
                    var t = re(e);
                    return (t._chain = !0), t;
                  },
                  iteratee: Me,
                  partial: tt,
                  bind: nt,
                  bindAll: ot,
                  memoize: function (e, t) {
                    var n = function (r) {
                      var a = n.cache,
                        o = "" + (t ? t.apply(this, arguments) : r);
                      return B(a, o) || (a[o] = e.apply(this, arguments)), a[o];
                    };
                    return (n.cache = {}), n;
                  },
                  delay: it,
                  defer: st,
                  throttle: function (e, t, n) {
                    var r,
                      a,
                      o,
                      i,
                      s = 0;
                    n || (n = {});
                    var $ = function () {
                        (s = !1 === n.leading ? 0 : Be()), (r = null), (i = e.apply(a, o)), r || (a = o = null);
                      },
                      u = function () {
                        var u = Be();
                        s || !1 !== n.leading || (s = u);
                        var c = t - (u - s);
                        return (
                          (a = this),
                          (o = arguments),
                          c <= 0 || c > t
                            ? (r && (clearTimeout(r), (r = null)), (s = u), (i = e.apply(a, o)), r || (a = o = null))
                            : r || !1 === n.trailing || (r = setTimeout($, c)),
                          i
                        );
                      };
                    return (
                      (u.cancel = function () {
                        clearTimeout(r), (s = 0), (r = a = o = null);
                      }),
                      u
                    );
                  },
                  debounce: function (e, t, n) {
                    var r,
                      a,
                      o,
                      i,
                      s,
                      $ = function () {
                        var u = Be() - a;
                        t > u ? (r = setTimeout($, t - u)) : ((r = null), n || (i = e.apply(s, o)), r || (o = s = null));
                      },
                      u = k(function (u) {
                        return (s = this), (o = u), (a = Be()), r || ((r = setTimeout($, t)), n && (i = e.apply(s, o))), i;
                      });
                    return (
                      (u.cancel = function () {
                        clearTimeout(r), (r = o = s = null);
                      }),
                      u
                    );
                  },
                  wrap: function (e, t) {
                    return tt(t, e);
                  },
                  negate: $t,
                  compose: function () {
                    var e = arguments,
                      t = e.length - 1;
                    return function () {
                      for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
                      return r;
                    };
                  },
                  after: function (e, t) {
                    return function () {
                      if (--e < 1) return t.apply(this, arguments);
                    };
                  },
                  before: ut,
                  once: ct,
                  findKey: lt,
                  findIndex: ht,
                  findLastIndex: pt,
                  sortedIndex: ft,
                  indexOf: gt,
                  lastIndexOf: bt,
                  find: yt,
                  detect: yt,
                  findWhere: function (e, t) {
                    return yt(e, Ae(t));
                  },
                  each: vt,
                  forEach: vt,
                  map: kt,
                  collect: kt,
                  reduce: wt,
                  foldl: wt,
                  inject: wt,
                  reduceRight: xt,
                  foldr: xt,
                  filter: jt,
                  select: jt,
                  reject: function (e, t, n) {
                    return jt(e, $t(Ne(t)), n);
                  },
                  every: St,
                  all: St,
                  some: Et,
                  any: Et,
                  contains: Ot,
                  includes: Ot,
                  include: Ot,
                  invoke: Tt,
                  pluck: It,
                  where: function (e, t) {
                    return jt(e, Ae(t));
                  },
                  max: zt,
                  min: function (e, t, n) {
                    var r,
                      a,
                      o = 1 / 0,
                      i = 1 / 0;
                    if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                      for (var s = 0, $ = (e = rt(e) ? e : ve(e)).length; s < $; s++) null != (r = e[s]) && r < o && (o = r);
                    else
                      (t = Ne(t, n)),
                        vt(e, function (e, n, r) {
                          ((a = t(e, n, r)) < i || (a === 1 / 0 && o === 1 / 0)) && ((o = e), (i = a));
                        });
                    return o;
                  },
                  shuffle: function (e) {
                    return Rt(e, 1 / 0);
                  },
                  sample: Rt,
                  sortBy: function (e, t, n) {
                    var r = 0;
                    return (
                      (t = Ne(t, n)),
                      It(
                        kt(e, function (e, n, a) {
                          return { value: e, index: r++, criteria: t(e, n, a) };
                        }).sort(function (e, t) {
                          var n = e.criteria,
                            r = t.criteria;
                          if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (n < r || void 0 === r) return -1;
                          }
                          return e.index - t.index;
                        }),
                        "value"
                      )
                    );
                  },
                  groupBy: At,
                  indexBy: Ct,
                  countBy: qt,
                  partition: Dt,
                  toArray: function (e) {
                    return e ? (U(e) ? s.call(e) : S(e) ? e.match(Mt) : rt(e) ? kt(e, Pe) : ve(e)) : [];
                  },
                  size: function (e) {
                    return null == e ? 0 : rt(e) ? e.length : te(e).length;
                  },
                  pick: Lt,
                  omit: Ut,
                  first: Ft,
                  head: Ft,
                  take: Ft,
                  initial: Bt,
                  last: function (e, t, n) {
                    return null == e || e.length < 1
                      ? null == t || n
                        ? void 0
                        : []
                      : null == t || n
                      ? e[e.length - 1]
                      : Ht(e, Math.max(0, e.length - t));
                  },
                  rest: Ht,
                  tail: Ht,
                  drop: Ht,
                  compact: function (e) {
                    return jt(e, Boolean);
                  },
                  flatten: function (e, t) {
                    return at(e, t, !1);
                  },
                  without: Wt,
                  uniq: Vt,
                  unique: Vt,
                  union: Jt,
                  intersection: function (e) {
                    for (var t = [], n = arguments.length, r = 0, a = Q(e); r < a; r++) {
                      var o = e[r];
                      if (!Ot(t, o)) {
                        var i;
                        for (i = 1; i < n && Ot(arguments[i], o); i++);
                        i === n && t.push(o);
                      }
                    }
                    return t;
                  },
                  difference: Gt,
                  unzip: Yt,
                  transpose: Yt,
                  zip: Xt,
                  object: function (e, t) {
                    for (var n = {}, r = 0, a = Q(e); r < a; r++) t ? (n[e[r]] = t[r]) : (n[e[r][0]] = e[r][1]);
                    return n;
                  },
                  range: function (e, t, n) {
                    null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
                    for (var r = Math.max(Math.ceil((t - e) / n), 0), a = Array(r), o = 0; o < r; o++, e += n) a[o] = e;
                    return a;
                  },
                  chunk: function (e, t) {
                    if (null == t || t < 1) return [];
                    for (var n = [], r = 0, a = e.length; r < a; ) n.push(s.call(e, r, (r += t)));
                    return n;
                  },
                  mixin: Zt,
                  default: re
                },
                en = Zt(Qt);
              return (en._ = en), en;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    156: [
      function (e, t, n) {
        "use strict";
        var r = e("punycode"),
          a = e("./util");
        function o() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        (n.parse = y),
          (n.resolve = function (e, t) {
            return y(e, !1, !0).resolve(t);
          }),
          (n.resolveObject = function (e, t) {
            return e ? y(e, !1, !0).resolveObject(t) : t;
          }),
          (n.format = function (e) {
            a.isString(e) && (e = y(e));
            return e instanceof o ? e.format() : o.prototype.format.call(e);
          }),
          (n.Url = o);
        var i = /^([a-z0-9.+-]+:)/i,
          s = /:[0-9]*$/,
          $ = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
          c = ["'"].concat(u),
          l = ["%", "/", "?", ";", "#"].concat(c),
          d = ["/", "?", "#"],
          h = /^[+a-z0-9A-Z_-]{0,63}$/,
          p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          f = { javascript: !0, "javascript:": !0 },
          m = { javascript: !0, "javascript:": !0 },
          g = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
          b = e("querystring");
        function y(e, t, n) {
          if (e && a.isObject(e) && e instanceof o) return e;
          var r = new o();
          return r.parse(e, t, n), r;
        }
        (o.prototype.parse = function (e, t, n) {
          if (!a.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
          var o = e.indexOf("?"),
            s = -1 !== o && o < e.indexOf("#") ? "?" : "#",
            u = e.split(s);
          u[0] = u[0].replace(/\\/g, "/");
          var y = (e = u.join(s));
          if (((y = y.trim()), !n && 1 === e.split("#").length)) {
            var v = $.exec(y);
            if (v)
              return (
                (this.path = y),
                (this.href = y),
                (this.pathname = v[1]),
                v[2]
                  ? ((this.search = v[2]), (this.query = t ? b.parse(this.search.substr(1)) : this.search.substr(1)))
                  : t && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var k = i.exec(y);
          if (k) {
            var _ = (k = k[0]).toLowerCase();
            (this.protocol = _), (y = y.substr(k.length));
          }
          if (n || k || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var w = "//" === y.substr(0, 2);
            !w || (k && m[k]) || ((y = y.substr(2)), (this.slashes = !0));
          }
          if (!m[k] && (w || (k && !g[k]))) {
            for (var x, j, S = -1, E = 0; E < d.length; E++) {
              -1 !== (O = y.indexOf(d[E])) && (-1 === S || O < S) && (S = O);
            }
            -1 !== (j = -1 === S ? y.lastIndexOf("@") : y.lastIndexOf("@", S)) &&
              ((x = y.slice(0, j)), (y = y.slice(j + 1)), (this.auth = decodeURIComponent(x))),
              (S = -1);
            for (E = 0; E < l.length; E++) {
              var O;
              -1 !== (O = y.indexOf(l[E])) && (-1 === S || O < S) && (S = O);
            }
            -1 === S && (S = y.length),
              (this.host = y.slice(0, S)),
              (y = y.slice(S)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var T = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!T)
              for (var I = this.hostname.split(/\./), z = ((E = 0), I.length); E < z; E++) {
                var R = I[E];
                if (R && !R.match(h)) {
                  for (var P = "", A = 0, C = R.length; A < C; A++) R.charCodeAt(A) > 127 ? (P += "x") : (P += R[A]);
                  if (!P.match(h)) {
                    var q = I.slice(0, E),
                      D = I.slice(E + 1),
                      M = R.match(p);
                    M && (q.push(M[1]), D.unshift(M[2])), D.length && (y = "/" + D.join(".") + y), (this.hostname = q.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255 ? (this.hostname = "") : (this.hostname = this.hostname.toLowerCase()),
              T || (this.hostname = r.toASCII(this.hostname));
            var N = this.port ? ":" + this.port : "",
              L = this.hostname || "";
            (this.host = L + N),
              (this.href += this.host),
              T && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), "/" !== y[0] && (y = "/" + y));
          }
          if (!f[_])
            for (E = 0, z = c.length; E < z; E++) {
              var U = c[E];
              if (-1 !== y.indexOf(U)) {
                var B = encodeURIComponent(U);
                B === U && (B = escape(U)), (y = y.split(U).join(B));
              }
            }
          var F = y.indexOf("#");
          -1 !== F && ((this.hash = y.substr(F)), (y = y.slice(0, F)));
          var H = y.indexOf("?");
          if (
            (-1 !== H
              ? ((this.search = y.substr(H)), (this.query = y.substr(H + 1)), t && (this.query = b.parse(this.query)), (y = y.slice(0, H)))
              : t && ((this.search = ""), (this.query = {})),
            y && (this.pathname = y),
            g[_] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            N = this.pathname || "";
            var G = this.search || "";
            this.path = N + G;
          }
          return (this.href = this.format()), this;
        }),
          (o.prototype.format = function () {
            var e = this.auth || "";
            e && ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")), (e += "@"));
            var t = this.protocol || "",
              n = this.pathname || "",
              r = this.hash || "",
              o = !1,
              i = "";
            this.host
              ? (o = e + this.host)
              : this.hostname &&
                ((o = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]")),
                this.port && (o += ":" + this.port)),
              this.query && a.isObject(this.query) && Object.keys(this.query).length && (i = b.stringify(this.query));
            var s = this.search || (i && "?" + i) || "";
            return (
              t && ":" !== t.substr(-1) && (t += ":"),
              this.slashes || ((!t || g[t]) && !1 !== o)
                ? ((o = "//" + (o || "")), n && "/" !== n.charAt(0) && (n = "/" + n))
                : o || (o = ""),
              r && "#" !== r.charAt(0) && (r = "#" + r),
              s && "?" !== s.charAt(0) && (s = "?" + s),
              t +
                o +
                (n = n.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })) +
                (s = s.replace("#", "%23")) +
                r
            );
          }),
          (o.prototype.resolve = function (e) {
            return this.resolveObject(y(e, !1, !0)).format();
          }),
          (o.prototype.resolveObject = function (e) {
            if (a.isString(e)) {
              var t = new o();
              t.parse(e, !1, !0), (e = t);
            }
            for (var n = new o(), r = Object.keys(this), i = 0; i < r.length; i++) {
              var s = r[i];
              n[s] = this[s];
            }
            if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
            if (e.slashes && !e.protocol) {
              for (var $ = Object.keys(e), u = 0; u < $.length; u++) {
                var c = $[u];
                "protocol" !== c && (n[c] = e[c]);
              }
              return g[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), (n.href = n.format()), n;
            }
            if (e.protocol && e.protocol !== n.protocol) {
              if (!g[e.protocol]) {
                for (var l = Object.keys(e), d = 0; d < l.length; d++) {
                  var h = l[d];
                  n[h] = e[h];
                }
                return (n.href = n.format()), n;
              }
              if (((n.protocol = e.protocol), e.host || m[e.protocol])) n.pathname = e.pathname;
              else {
                for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()); );
                e.host || (e.host = ""),
                  e.hostname || (e.hostname = ""),
                  "" !== p[0] && p.unshift(""),
                  p.length < 2 && p.unshift(""),
                  (n.pathname = p.join("/"));
              }
              if (
                ((n.search = e.search),
                (n.query = e.query),
                (n.host = e.host || ""),
                (n.auth = e.auth),
                (n.hostname = e.hostname || e.host),
                (n.port = e.port),
                n.pathname || n.search)
              ) {
                var f = n.pathname || "",
                  b = n.search || "";
                n.path = f + b;
              }
              return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
            }
            var y = n.pathname && "/" === n.pathname.charAt(0),
              v = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
              k = v || y || (n.host && e.pathname),
              _ = k,
              w = (n.pathname && n.pathname.split("/")) || [],
              x = ((p = (e.pathname && e.pathname.split("/")) || []), n.protocol && !g[n.protocol]);
            if (
              (x &&
                ((n.hostname = ""),
                (n.port = null),
                n.host && ("" === w[0] ? (w[0] = n.host) : w.unshift(n.host)),
                (n.host = ""),
                e.protocol &&
                  ((e.hostname = null), (e.port = null), e.host && ("" === p[0] ? (p[0] = e.host) : p.unshift(e.host)), (e.host = null)),
                (k = k && ("" === p[0] || "" === w[0]))),
              v)
            )
              (n.host = e.host || "" === e.host ? e.host : n.host),
                (n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname),
                (n.search = e.search),
                (n.query = e.query),
                (w = p);
            else if (p.length) w || (w = []), w.pop(), (w = w.concat(p)), (n.search = e.search), (n.query = e.query);
            else if (!a.isNullOrUndefined(e.search)) {
              if (x)
                (n.hostname = n.host = w.shift()),
                  (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
                    ((n.auth = T.shift()), (n.host = n.hostname = T.shift()));
              return (
                (n.search = e.search),
                (n.query = e.query),
                (a.isNull(n.pathname) && a.isNull(n.search)) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
                (n.href = n.format()),
                n
              );
            }
            if (!w.length) return (n.pathname = null), n.search ? (n.path = "/" + n.search) : (n.path = null), (n.href = n.format()), n;
            for (
              var j = w.slice(-1)[0],
                S = ((n.host || e.host || w.length > 1) && ("." === j || ".." === j)) || "" === j,
                E = 0,
                O = w.length;
              O >= 0;
              O--
            )
              "." === (j = w[O]) ? w.splice(O, 1) : ".." === j ? (w.splice(O, 1), E++) : E && (w.splice(O, 1), E--);
            if (!k && !_) for (; E--; E) w.unshift("..");
            !k || "" === w[0] || (w[0] && "/" === w[0].charAt(0)) || w.unshift(""), S && "/" !== w.join("/").substr(-1) && w.push("");
            var T,
              I = "" === w[0] || (w[0] && "/" === w[0].charAt(0));
            x &&
              ((n.hostname = n.host = I ? "" : w.length ? w.shift() : ""),
              (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
                ((n.auth = T.shift()), (n.host = n.hostname = T.shift())));
            return (
              (k = k || (n.host && w.length)) && !I && w.unshift(""),
              w.length ? (n.pathname = w.join("/")) : ((n.pathname = null), (n.path = null)),
              (a.isNull(n.pathname) && a.isNull(n.search)) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
              (n.auth = e.auth || n.auth),
              (n.slashes = n.slashes || e.slashes),
              (n.href = n.format()),
              n
            );
          }),
          (o.prototype.parseHost = function () {
            var e = this.host,
              t = s.exec(e);
            t && (":" !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
          });
      },
      { "./util": 157, punycode: 139, querystring: 142 }
    ],
    157: [
      function (e, t, n) {
        "use strict";
        t.exports = {
          isString: function (e) {
            return "string" == typeof e;
          },
          isObject: function (e) {
            return "object" == typeof e && null !== e;
          },
          isNull: function (e) {
            return null === e;
          },
          isNullOrUndefined: function (e) {
            return null == e;
          }
        };
      },
      {}
    ],
    158: [
      function (e, t, n) {
        !(function (e) {
          var t,
            n,
            r,
            a = String.fromCharCode;
          function o(e) {
            for (var t, n, r = [], a = 0, o = e.length; a < o; )
              (t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < o
                ? 56320 == (64512 & (n = e.charCodeAt(a++)))
                  ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                  : (r.push(t), a--)
                : r.push(t);
            return r;
          }
          function i(e) {
            if (e >= 55296 && e <= 57343) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
          }
          function s(e, t) {
            return a(((e >> t) & 63) | 128);
          }
          function $(e) {
            if (0 == (4294967168 & e)) return a(e);
            var t = "";
            return (
              0 == (4294965248 & e)
                ? (t = a(((e >> 6) & 31) | 192))
                : 0 == (4294901760 & e)
                ? (i(e), (t = a(((e >> 12) & 15) | 224)), (t += s(e, 6)))
                : 0 == (4292870144 & e) && ((t = a(((e >> 18) & 7) | 240)), (t += s(e, 12)), (t += s(e, 6))),
              (t += a((63 & e) | 128))
            );
          }
          function u() {
            if (r >= n) throw Error("Invalid byte index");
            var e = 255 & t[r];
            if ((r++, 128 == (192 & e))) return 63 & e;
            throw Error("Invalid continuation byte");
          }
          function c() {
            var e, a;
            if (r > n) throw Error("Invalid byte index");
            if (r == n) return !1;
            if (((e = 255 & t[r]), r++, 0 == (128 & e))) return e;
            if (192 == (224 & e)) {
              if ((a = ((31 & e) << 6) | u()) >= 128) return a;
              throw Error("Invalid continuation byte");
            }
            if (224 == (240 & e)) {
              if ((a = ((15 & e) << 12) | (u() << 6) | u()) >= 2048) return i(a), a;
              throw Error("Invalid continuation byte");
            }
            if (240 == (248 & e) && (a = ((7 & e) << 18) | (u() << 12) | (u() << 6) | u()) >= 65536 && a <= 1114111) return a;
            throw Error("Invalid UTF-8 detected");
          }
          (e.version = "3.0.0"),
            (e.encode = function (e) {
              for (var t = o(e), n = t.length, r = -1, a = ""; ++r < n; ) a += $(t[r]);
              return a;
            }),
            (e.decode = function (e) {
              (t = o(e)), (n = t.length), (r = 0);
              for (var i, s = []; !1 !== (i = c()); ) s.push(i);
              return (function (e) {
                for (var t, n = e.length, r = -1, o = ""; ++r < n; )
                  (t = e[r]) > 65535 && ((o += a((((t -= 65536) >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), (o += a(t));
                return o;
              })(s);
            });
        })(void 0 === n ? (this.utf8 = {}) : n);
      },
      {}
    ],
    159: [
      function (e, t, n) {
        for (var r = [], a = 0; a < 256; ++a) r[a] = (a + 256).toString(16).substr(1);
        t.exports = function (e, t) {
          var n = t || 0,
            a = r;
          return [
            a[e[n++]],
            a[e[n++]],
            a[e[n++]],
            a[e[n++]],
            "-",
            a[e[n++]],
            a[e[n++]],
            "-",
            a[e[n++]],
            a[e[n++]],
            "-",
            a[e[n++]],
            a[e[n++]],
            "-",
            a[e[n++]],
            a[e[n++]],
            a[e[n++]],
            a[e[n++]],
            a[e[n++]],
            a[e[n++]]
          ].join("");
        };
      },
      {}
    ],
    160: [
      function (e, t, n) {
        var r =
          ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto &&
            "function" == typeof window.msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto));
        if (r) {
          var a = new Uint8Array(16);
          t.exports = function () {
            return r(a), a;
          };
        } else {
          var o = new Array(16);
          t.exports = function () {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), (o[t] = (e >>> ((3 & t) << 3)) & 255);
            return o;
          };
        }
      },
      {}
    ],
    161: [
      function (e, t, n) {
        var r = e("./lib/rng"),
          a = e("./lib/bytesToUuid");
        t.exports = function (e, t, n) {
          var o = (t && n) || 0;
          "string" == typeof e && ((t = "binary" === e ? new Array(16) : null), (e = null));
          var i = (e = e || {}).random || (e.rng || r)();
          if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) for (var s = 0; s < 16; ++s) t[o + s] = i[s];
          return t || a(i);
        };
      },
      { "./lib/bytesToUuid": 159, "./lib/rng": 160 }
    ],
    162: [
      function (e, t, n) {
        !(function (e) {
          "use strict";
          if (!e.fetch) {
            var t = "URLSearchParams" in e,
              n = "Symbol" in e && "iterator" in Symbol,
              r =
                "FileReader" in e &&
                "Blob" in e &&
                (function () {
                  try {
                    return new Blob(), !0;
                  } catch (e) {
                    return !1;
                  }
                })(),
              a = "FormData" in e,
              o = "ArrayBuffer" in e;
            if (o)
              var i = [
                  "[object Int8Array]",
                  "[object Uint8Array]",
                  "[object Uint8ClampedArray]",
                  "[object Int16Array]",
                  "[object Uint16Array]",
                  "[object Int32Array]",
                  "[object Uint32Array]",
                  "[object Float32Array]",
                  "[object Float64Array]"
                ],
                s = function (e) {
                  return e && DataView.prototype.isPrototypeOf(e);
                },
                $ =
                  ArrayBuffer.isView ||
                  function (e) {
                    return e && i.indexOf(Object.prototype.toString.call(e)) > -1;
                  };
            (p.prototype.append = function (e, t) {
              (e = l(e)), (t = d(t));
              var n = this.map[e];
              this.map[e] = n ? n + "," + t : t;
            }),
              (p.prototype.delete = function (e) {
                delete this.map[l(e)];
              }),
              (p.prototype.get = function (e) {
                return (e = l(e)), this.has(e) ? this.map[e] : null;
              }),
              (p.prototype.has = function (e) {
                return this.map.hasOwnProperty(l(e));
              }),
              (p.prototype.set = function (e, t) {
                this.map[l(e)] = d(t);
              }),
              (p.prototype.forEach = function (e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
              }),
              (p.prototype.keys = function () {
                var e = [];
                return (
                  this.forEach(function (t, n) {
                    e.push(n);
                  }),
                  h(e)
                );
              }),
              (p.prototype.values = function () {
                var e = [];
                return (
                  this.forEach(function (t) {
                    e.push(t);
                  }),
                  h(e)
                );
              }),
              (p.prototype.entries = function () {
                var e = [];
                return (
                  this.forEach(function (t, n) {
                    e.push([n, t]);
                  }),
                  h(e)
                );
              }),
              n && (p.prototype[Symbol.iterator] = p.prototype.entries);
            var u = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            (v.prototype.clone = function () {
              return new v(this, { body: this._bodyInit });
            }),
              y.call(v.prototype),
              y.call(_.prototype),
              (_.prototype.clone = function () {
                return new _(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new p(this.headers),
                  url: this.url
                });
              }),
              (_.error = function () {
                var e = new _(null, { status: 0, statusText: "" });
                return (e.type = "error"), e;
              });
            var c = [301, 302, 303, 307, 308];
            (_.redirect = function (e, t) {
              if (-1 === c.indexOf(t)) throw new RangeError("Invalid status code");
              return new _(null, { status: t, headers: { location: e } });
            }),
              (e.Headers = p),
              (e.Request = v),
              (e.Response = _),
              (e.fetch = function (e, t) {
                return new Promise(function (n, a) {
                  var o = new v(e, t),
                    i = new XMLHttpRequest();
                  (i.onload = function () {
                    var e,
                      t,
                      r = {
                        status: i.status,
                        statusText: i.statusText,
                        headers:
                          ((e = i.getAllResponseHeaders() || ""),
                          (t = new p()),
                          e
                            .replace(/\r?\n[\t ]+/g, " ")
                            .split(/\r?\n/)
                            .forEach(function (e) {
                              var n = e.split(":"),
                                r = n.shift().trim();
                              if (r) {
                                var a = n.join(":").trim();
                                t.append(r, a);
                              }
                            }),
                          t)
                      };
                    r.url = "responseURL" in i ? i.responseURL : r.headers.get("X-Request-URL");
                    var a = "response" in i ? i.response : i.responseText;
                    n(new _(a, r));
                  }),
                    (i.onerror = function () {
                      a(new TypeError("Network request failed"));
                    }),
                    (i.ontimeout = function () {
                      a(new TypeError("Network request failed"));
                    }),
                    i.open(o.method, o.url, !0),
                    "include" === o.credentials ? (i.withCredentials = !0) : "omit" === o.credentials && (i.withCredentials = !1),
                    "responseType" in i && r && (i.responseType = "blob"),
                    o.headers.forEach(function (e, t) {
                      i.setRequestHeader(t, e);
                    }),
                    i.send(void 0 === o._bodyInit ? null : o._bodyInit);
                });
              }),
              (e.fetch.polyfill = !0);
          }
          function l(e) {
            if (("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)))
              throw new TypeError("Invalid character in header field name");
            return e.toLowerCase();
          }
          function d(e) {
            return "string" != typeof e && (e = String(e)), e;
          }
          function h(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              }
            };
            return (
              n &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function p(e) {
            (this.map = {}),
              e instanceof p
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function f(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0;
          }
          function m(e) {
            return new Promise(function (t, n) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  n(e.error);
                });
            });
          }
          function g(e) {
            var t = new FileReader(),
              n = m(t);
            return t.readAsArrayBuffer(e), n;
          }
          function b(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function y() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                if (((this._bodyInit = e), e))
                  if ("string" == typeof e) this._bodyText = e;
                  else if (r && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                  else if (a && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                  else if (t && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                  else if (o && r && s(e)) (this._bodyArrayBuffer = b(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                  else {
                    if (!o || (!ArrayBuffer.prototype.isPrototypeOf(e) && !$(e))) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = b(e);
                  }
                else this._bodyText = "";
                this.headers.get("content-type") ||
                  ("string" == typeof e
                    ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : t &&
                      URLSearchParams.prototype.isPrototypeOf(e) &&
                      this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
              }),
              r &&
                ((this.blob = function () {
                  var e = f(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g);
                })),
              (this.text = function () {
                var e,
                  t,
                  n,
                  r = f(this);
                if (r) return r;
                if (this._bodyBlob) return (e = this._bodyBlob), (t = new FileReader()), (n = m(t)), t.readAsText(e), n;
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                      return n.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              a &&
                (this.formData = function () {
                  return this.text().then(k);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          function v(e, t) {
            var n,
              r,
              a = (t = t || {}).body;
            if (e instanceof v) {
              if (e.bodyUsed) throw new TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new p(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                a || null == e._bodyInit || ((a = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials = t.credentials || this.credentials || "omit"),
              (!t.headers && this.headers) || (this.headers = new p(t.headers)),
              (this.method = ((n = t.method || this.method || "GET"), (r = n.toUpperCase()), u.indexOf(r) > -1 ? r : n)),
              (this.mode = t.mode || this.mode || null),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && a)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(a);
          }
          function k(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var n = e.split("="),
                      r = n.shift().replace(/\+/g, " "),
                      a = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(a));
                  }
                }),
              t
            );
          }
          function _(e, t) {
            t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in t ? t.statusText : "OK"),
              (this.headers = new p(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
        })("undefined" != typeof self ? self : this);
      },
      {}
    ],
    163: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        class r {
          static initClass() {
            this.prototype.KEY = "LOCALE";
          }
          constructor(e, t) {
            (this.config = e), (this.messenger = t);
          }
          retrieve(e) {
            return this.messenger.publish("bgStorage", { get: this.KEY }, (t) => e(this._getFallback(t || this.getBrowserLocale())));
          }
          store(e) {
            return this.messenger.publish("bgStorage", e ? { set: this.KEY, value: this._getFallback(e) } : { remove: this.KEY });
          }
          getCurrentFallback() {
            return this._getFallback(this.getBrowserLocale());
          }
          _getFallback(e) {
            const t = this._normalizeCase(e);
            return Array.from(this.config.languages).includes(t)
              ? t
              : this.config.language_fallbacks[t.slice(0, 2)] || this.config.default_language;
          }
          getBrowserLocale() {
            return navigator.language || navigator.userLanguage;
          }
          _normalizeCase(e) {
            const t = e.slice(0, 2).toLowerCase();
            return 2 === e.length ? t : `${t}-${e.slice(3, 5).toUpperCase()}`;
          }
        }
        r.initClass(), (t.exports = r);
      },
      { "core-js/modules/es6.array.iterator.js": 123, "core-js/modules/web.dom.iterable.js": 125 }
    ],
    164: [
      function (e, t, n) {
        t.exports = {
          dark_mode: !1,
          offers: !0,
          dnt_header: !0,
          inAppTracking: !0,
          adguard: !1,
          adguard_social_media: !1,
          adguard_useful_ads: !0,
          extension_scan: !1
        };
      },
      {}
    ],
    165: [
      function (e, t, n) {
        "use strict";
        t.exports = { adguard_social_media: "adguard", adguard_useful_ads: "adguard" };
      },
      {}
    ],
    166: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const r = e("background/jsonStorage"),
          a = e("config"),
          o = e("manifest.json"),
          i = e("underscore");
        let s = null;
        class $ {
          static initClass() {
            (this.INSTALL = "mixpanel_install"),
              (this.prototype._PARAMETERS = "abTestParameters"),
              (this.prototype._PARAMETERS_TIMESTAMP = "abTestParametersTimestamp"),
              (this.prototype._DEFAULT_PARAMETERS = {});
          }
          static getInstance() {
            return null == s && (s = new this()), s;
          }
          constructor() {
            (this._loadPromise = null),
              (this._transformations = []),
              (this._requiredParams = []),
              (this._ttls = {}),
              (this._lastRequested = r.getItem(this._PARAMETERS_TIMESTAMP) || {}),
              this._getUserAgentParams(),
              !this._get() && r.getItem($.INSTALL) && this._set(this._DEFAULT_PARAMETERS);
          }
          _get() {
            return JSON.parse(r.getItem(this._PARAMETERS) || "null");
          }
          _set(e) {
            return r.setItem(this._PARAMETERS, JSON.stringify(e));
          }
          _load(e, t, n) {
            return (
              this._loadPromise ||
                (this._loadPromise = new Promise((s) => {
                  let $;
                  const u = new XMLHttpRequest();
                  return (
                    u.open("POST", a.update_bridge.api_url, !0),
                    u.setRequestHeader("Content-Type", "application/json"),
                    (u.onreadystatechange = () => {
                      let a;
                      if (4 === u.readyState)
                        if (200 === u.status) {
                          try {
                            a = JSON.parse(u.responseText);
                          } catch (e) {
                            a = { error: "Parsing parsing JSON" };
                          }
                          if ((($ = a.error ? this._DEFAULT_PARAMETERS : a.result), this._transformations.forEach((e) => e($)), e))
                            i.forEach($, (e, t) => {
                              this._lastRequested[t] = Date.now();
                            });
                          else {
                            const e = this._get(),
                              r = t.concat(n);
                            ($ = i.extend(e, i.pick($, r))),
                              r.forEach((e) => {
                                this._lastRequested[e] = Date.now();
                              });
                          }
                          r.setItem(this._PARAMETERS_TIMESTAMP, this._lastRequested), this._set($), (this._loadPromise = null), s($);
                        } else s(this._DEFAULT_PARAMETERS);
                    }),
                    u.send(
                      JSON.stringify({
                        method: "getUpdateUrl",
                        ApiVersion: 1,
                        params: { productId: a.update_bridge.product_id, productVersion: o.version, productLanguage: "int" }
                      })
                    )
                  );
                })),
              this._loadPromise
            );
          }
          _getMissingParams(e) {
            const t = i.keys(e);
            return i.difference(this._requiredParams, t);
          }
          _getOutdatedParams() {
            const e = Date.now();
            return i(this._ttls)
              .keys()
              .filter((t) => this._lastRequested[t] + this._ttls[t] < e);
          }
          _getUserAgentParams() {
            const { userAgent: e } = navigator,
              t = /\(abTestOverride=(.*)?\)/.exec(e);
            t && t[1] && this._set(JSON.parse(t[1]));
          }
          getParameters() {
            const e = this._get(),
              t = !e,
              n = this._getMissingParams(e),
              r = this._getOutdatedParams();
            return t || n.length || r.length ? this._load(t, n, r) : Promise.resolve(e);
          }
          getUserNumber() {
            let e = r.getItem("abTestUserNumber");
            return e || ((e = Math.random()), r.setItem("abTestUserNumber", e)), e;
          }
          register(e) {
            if ("function" != typeof e) throw new Error("Transformation is not a function");
            return this._transformations.push(e);
          }
          setRequired(e) {
            return (this._requiredParams = this._requiredParams.concat(e)), this._requiredParams;
          }
          setTTL(e) {
            return i.extend(this._ttls, e);
          }
        }
        $.initClass(), (t.exports = $);
      },
      {
        "background/jsonStorage": 183,
        config: 188,
        "core-js/modules/es6.array.iterator.js": 123,
        "core-js/modules/web.dom.iterable.js": 125,
        "manifest.json": 193,
        underscore: 155
      }
    ],
    167: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore");
        t.exports = class {
          constructor(e, t) {
            (this.INSTALLED = "aims_installed"),
              (this.USER_ID = "aims_user_id"),
              (this.USER_ID_PREFIX = "aims_user_id_"),
              (this._storage = e),
              (this._productid = t.productid);
          }
          initialize() {
            this.getInstalled() || this._setInstalled();
          }
          getUserId() {
            let e = this._storage.getItem(this.USER_ID);
            e || ((e = this._gernerateUserId()), this._storage.setItem(this.USER_ID, e));
            const t = `${this.USER_ID_PREFIX}${e}`;
            return this._storage.getItem(t) || this._storage.setItem(t, e), e;
          }
          getInstalled() {
            return Number(this._storage.getItem(this.INSTALLED));
          }
          _getInstalledFormated() {
            return new Date(this.getInstalled()).toISOString().slice(0, 10).replace(/-/g, "");
          }
          _gernerateUserId() {
            return r.times(40, () => r.random(15).toString(16)).join("");
          }
          _setInstalled() {
            const e = Date.now();
            this._storage.setItem(this.INSTALLED, e);
          }
        };
      },
      { underscore: 155 }
    ],
    168: [
      function (e, t, n) {
        "use strict";
        const r = new (e("ciuvo/ASDetector"))();
        t.exports = class {
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
          constructor() {
            (this.isEnabled = !1), (this._onBeforeRequest = this._onBeforeRequest.bind(this));
          }
          enable() {
            this.isEnabled || (this._enable(), (this.isEnabled = !0));
          }
          disable() {
            this.isEnabled && (this._disable(), (this.isEnabled = !1));
          }
          _enable() {
            chrome.webRequest.onBeforeRequest.addListener(this._onBeforeRequest, {
              urls: ["http://*/*", "https://*/*"],
              types: ["main_frame"]
            });
          }
          _disable() {
            chrome.webRequest.onBeforeRequest.removeListener(this._onBeforeRequest);
          }
          _onBeforeRequest(e) {
            r.onNavigationEvent(e.tabId, e.url, e.requestId, e.timeStamp);
          }
          isAffiliateSource(e) {
            return r.isAffiliateSource(e);
          }
        };
      },
      { "ciuvo/ASDetector": 76 }
    ],
    169: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore"),
          a = e("background/jsonStorage"),
          o = "ADGUARD_COMPARISON_REPORT";
        t.exports = class {
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
          constructor() {
            (this._onDNTFound = this._onDNTFound.bind(this)),
              (this._onAdguardFound = this._onAdguardFound.bind(this)),
              (this._storeReport = r.debounce(this._storeReport.bind(this), 1e3)),
              (this._dntHistory = {}),
              (this._ruleStorage = {}),
              (this._adguardHistory = {}),
              (this._overallHistory = {});
          }
          initialize(e, t) {
            e.addEventListener("trackerFound", this._onDNTFound), t.onRequestBlocked.addListener(this._onAdguardFound);
          }
          getReport() {
            let e;
            try {
              e = a.getItem(o);
            } catch (t) {
              e = null;
            }
            const t = {
              countTotal: Object.keys(this._overallHistory).length,
              countAdguard: Object.keys(this._adguardHistory).length,
              countDNT: Object.keys(this._dntHistory).length,
              rulesDNT: this._getRulesCount()
            };
            return this._mergeReports(t, e);
          }
          getAndReset() {
            const e = this.getReport();
            return this._resetData(), this._resetReport(), e;
          }
          getActiveReport() {
            const e = this.getAndReset();
            return Object.keys(e).reduce((t, n) => r.extend(t, { [`AdguardDNTAnalyser:${n}`]: e[n] }), {});
          }
          _mergeReports(e, t) {
            return t
              ? {
                  countTotal: e.countTotal + t.countTotal,
                  countAdguard: e.countAdguard + t.countAdguard,
                  countDNT: e.countDNT + t.countDNT,
                  rulesDNT: this._mergeRulesArrays(e.rulesDNT, t.rulesDNT)
                }
              : e;
          }
          _mergeRulesArrays(e, t) {
            const n = {};
            return e.concat(t).filter((e) => {
              const t = `${e.props.provider}:${e.props.pattern}`,
                r = !!n[t];
              return r ? (n[t].count += e.count) : (n[t] = e), !r;
            });
          }
          _getRulesCount() {
            const e = r.omit(this._dntHistory, this._adguardHistory);
            return r.reduce(
              e,
              (e, t, n) => {
                const r = `${t.provider}:${t.pattern}`;
                return (
                  this._ruleStorage[r] ? (this._ruleStorage[r].count += 1) : (this._ruleStorage[r] = { props: t, exampleUrl: n, count: 1 }),
                  e.includes(this._ruleStorage[r]) || e.push(this._ruleStorage[r]),
                  e
                );
              },
              []
            );
          }
          _resetData() {
            (this._dntHistory = {}), (this._adguardHistory = {}), (this._overallHistory = {}), (this._ruleStorage = {});
          }
          _resetReport() {
            a.setItem(o, null);
          }
          _storeReport() {
            const e = this.getReport();
            a.setItem(o, e), this._resetData();
          }
          _onAdguardFound(e) {
            this._adguardHistory[e.requestUrl] || (this._adguardHistory[e.requestUrl] = !0),
              this._overallHistory[e.requestUrl] || (this._overallHistory[e.requestUrl] = !0),
              this._storeReport();
          }
          _onDNTFound(e, t, n, r) {
            this._overallHistory[r.url] || (this._overallHistory[r.url] = !0),
              this._dntHistory[r.url] || (this._dntHistory[r.url] = n),
              this._storeReport();
          }
        };
      },
      { "background/jsonStorage": 183, underscore: 155 }
    ],
    170: [
      function (e, t, n) {
        "use strict";
        const r = e("messenger/Background").getInstance(),
          a = e("background/jsonStorage");
        t.exports = class {
          constructor() {
            (this._onMessage = this._onMessage.bind(this)), r.subscribe("bgStorage", this._onMessage);
          }
          _onMessage(e, t = () => {}) {
            e.get && t(a.getItem(e.get)),
              e.set && (a.setItem(e.set, void 0 === e.value ? null : e.value), t(!0)),
              e.remove && (a.removeItem(e.remove), t(!0));
          }
        };
      },
      { "background/jsonStorage": 183, "messenger/Background": 126 }
    ],
    171: [
      function (e, t, n) {
        "use strict";
        class r {
          static initClass() {
            (this.prototype.PARTNER_ID = "SAUTH_partner_id"),
              (this.prototype.NO_PARTNER = "no_partner"),
              (this.prototype.COOKIE_URL_PARTNER_ID = "https://www.avira.com"),
              (this.prototype.COOKIE_NAME_PARTNER_ID = "av_abs_partner_id");
          }
          constructor(e, t, n) {
            (this._storage = e), (this._navigator = t), (this._cookieAccessor = n);
          }
          getPartnerId(e) {
            if (/^OPR.*Avira/.test(this._navigator.userAgent)) return e("Opera cobranded");
            if (/AviraScout/.test(this._navigator.userAgent)) return e("Scout");
            const t = this._storage.getItem(this.PARTNER_ID);
            return t === this.NO_PARTNER
              ? e(null)
              : t
              ? e(t)
              : this._getPartnerIdFromCookie((t) => {
                  this._storage.setItem(this.PARTNER_ID, t || this.NO_PARTNER), e(t);
                });
          }
          _getPartnerIdFromCookie(e) {
            return this._cookieAccessor.get(this.COOKIE_URL_PARTNER_ID, this.COOKIE_NAME_PARTNER_ID, (t) =>
              e((null != t && t.value) || null)
            );
          }
        }
        r.initClass(), (t.exports = r);
      },
      {}
    ],
    172: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore");
        t.exports = class {
          constructor(e) {
            this.mixpanel = e;
          }
          addError(e, t, n) {
            if ((null == t && (t = ""), null == n && (n = {}), !this._filterError(e, t, n))) return;
            let a = { message: e.message || e };
            t && (a.category = t),
              (a.timestamp = new Date().toISOString()),
              (a.online = navigator.onLine),
              (a = r.extend(a, n)),
              this.mixpanel.track("Error", a);
          }
          _filterError(e, t) {
            return !["Offers - whitelist"].includes(t) || Math.random() < 0.01;
          }
        };
      },
      { underscore: 155 }
    ],
    173: [
      function (e, t, n) {
        "use strict";
        t.exports = class {
          constructor({ landingPage: e, chrome: t, locale: n }) {
            if (!e || !t) throw new Error("Argument mismatch");
            (this.landingPage = e), (this.chrome = t), (this.locale = n);
          }
          openLandingPageTab(e) {
            const { url: t, path: n } = this.landingPage;
            return new Promise((r) => {
              const a = e.substring(0, 2);
              this.chrome.tabs.create({ url: `${t}/${a}/${n}` }, (e) => {
                r(e[0] || null);
              });
            });
          }
          initialize(e) {
            const t = this.locale.getCurrentFallback();
            e && this.openLandingPageTab(t);
          }
        };
      },
      {}
    ],
    174: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/defineProperty"));
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  (0, r.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js"), e("core-js/modules/es6.array.sort.js");
        const i = e("ms"),
          s = { installed: !1, lastShown: 0, timesShown: 0, dontShowAgain: !1 },
          $ = "EXTENSION_ONBOARDING_randomNumber",
          u = "EXTENSION_ONBOARDING_firstRunCompleted",
          c = "EXTENSION_ONBOARDING_dontShowAgain",
          l = "EXTENSION_ONBOARDING_timesShown",
          d = "EXTENSION_ONBOARDING_lastShown";
        t.exports = class {
          constructor({ extensions: e, onboardingWebsite: t, chrome: n, respondOnly: r, noSwitch: a, rollout: o }) {
            if (!e || !t || !n) throw new Error("Argument mismatch");
            (this.onboardingWebsite = t),
              (this.chrome = n),
              (this.extensions = e),
              (this.respondOnly = r || !1),
              (this.noSwitch = a || !1),
              (this.rollout = o);
          }
          async discoverExtensionById(e) {
            return new Promise((t, n) => {
              try {
                this.chrome.runtime.sendMessage(e, { extensionOnboarding: "discover" }, (e) => {
                  this.chrome.runtime.lastError || null == e ? t(s) : t(e);
                });
              } catch (e) {
                -1 === e.message.indexOf("Invalid extension id:") ? n(e) : t(s);
              }
            });
          }
          async discoverExtensions() {
            const e = this.getOtherExtensions();
            return (
              await this.wait(3e3),
              Promise.all(
                e.map(async ([e, t]) =>
                  (await Promise.all(t.map((e) => this.discoverExtensionById(e)))).reduce(
                    (t, n) => ({
                      name: e,
                      installed: t.installed || n.installed,
                      lastShown: Math.max(t.lastShown, n.lastShown),
                      timesShown: n.timesShown || t.timesShown,
                      dontShowAgain: n.dontShowAgain || t.dontShowAgain
                    }),
                    s
                  )
                )
              )
            );
          }
          isCurrentExtension(e) {
            return -1 !== e.indexOf(this.chrome.runtime.id);
          }
          getCurrentExtension() {
            const e = Object.entries(this.extensions).find(([, e]) => this.isCurrentExtension(e));
            if (!e) throw new Error("Current Extension Not Provided");
            return e;
          }
          getOtherExtensions() {
            return Object.entries(this.extensions).filter(([, e]) => !this.isCurrentExtension(e));
          }
          isCurrentExtensionFirstInLine(e) {
            try {
              const [t] = this.getCurrentExtension(),
                n = e
                  .filter(({ installed: e }) => e)
                  .map(({ name: e }) => e)
                  .sort()[0];
              return !n || t <= n;
            } catch (e) {
              return !1;
            }
          }
          async launchWebsite(e) {
            const [t] = this.getCurrentExtension();
            this.chrome.tabs.create({ url: `${this.onboardingWebsite}/${t}/extension-check/${e}` });
          }
          onMessageExternalHandler(e, t, n) {
            return (
              !(!e || "discover" !== e.extensionOnboarding) &&
              (Promise.all([this.getLastShown(), this.getDontShowAgain(), this.getTimesShown()]).then(([e, t, r]) =>
                n(o(o({}, s), {}, { installed: !0, lastShown: e, dontShowAgain: t, timesShown: r }))
              ),
              !0)
            );
          }
          getLastShown() {
            return new Promise((e) => {
              this.chrome.storage.local.get([d], ({ [d]: t }) => {
                e(t || 0);
              });
            });
          }
          setLastShown(e) {
            return new Promise((t) => {
              this.chrome.storage.local.set({ [d]: e }, t);
            });
          }
          getTimesShown() {
            return new Promise((e) => {
              this.chrome.storage.local.get([l], ({ [l]: t }) => {
                e(t || 0);
              });
            });
          }
          setTimesShown(e) {
            return new Promise((t) => {
              this.chrome.storage.local.set({ [l]: e }, t);
            });
          }
          isFirstRun() {
            return new Promise((e) => {
              this.chrome.storage.local.get([u], ({ [u]: t }) => {
                t ? e(!1) : this.chrome.storage.local.set({ [u]: !0 }, () => e(!0));
              });
            });
          }
          wait(e) {
            return new Promise((t) => setTimeout(t, e));
          }
          async injectClassname(e) {
            const [t] = await this.getCurrentExtension();
            return new Promise((n) => {
              this.chrome.tabs.executeScript(e, { code: `document.body.classList.add('${t}-installed')` }, () => {
                n();
              });
            });
          }
          activateTab(e) {
            return new Promise((t) => {
              this.chrome.tabs.update(e, { active: !0 }, t);
            });
          }
          getOnboardingTab() {
            return new Promise((e) => {
              this.chrome.tabs.query({ url: `${this.onboardingWebsite}/*` }, (t) => {
                e(t[0] || null);
              });
            });
          }
          onUpdateHandler(e, t, n) {
            0 === n.url.indexOf(`${this.onboardingWebsite}/`) && "loading" === t.status && this.injectContentScripts(e);
          }
          getRandomNumber() {
            return new Promise((e) => {
              this.chrome.storage.local.get([$], ({ [$]: t }) => {
                e(t || 0);
              });
            });
          }
          setRandomNumber(e) {
            return new Promise((t) => {
              this.chrome.storage.local.set({ [$]: e }, t);
            });
          }
          async getAssignedRandomNumber() {
            const e = await this.getRandomNumber();
            if (e) return e;
            const t = Math.random();
            return await this.setRandomNumber(t), t;
          }
          async isPartOfRollout() {
            return (await this.getAssignedRandomNumber()) < this.rollout;
          }
          getDontShowAgain() {
            return new Promise((e) => {
              this.chrome.storage.local.get([c], ({ [c]: t }) => {
                e(t || !1);
              });
            });
          }
          setDontShowAgain(e = !0) {
            return new Promise((t) => {
              this.chrome.storage.local.set({ [c]: e }, t);
            });
          }
          async injectDontShowAgain(e) {
            const t = `\n      document.addEventListener('click', (e) => {\n        if (e.target.id === 'dontShowAgain') {\n          chrome.storage.local.set({${`'${c}'`} : true});\n        }\n      });\n    `;
            return new Promise((n) => {
              this.chrome.tabs.executeScript(e, { code: t }, n);
            });
          }
          injectContentScripts(e) {
            this.injectClassname(e), this.respondOnly || this.injectDontShowAgain(e);
          }
          async initialize() {
            this.chrome.runtime.onMessageExternal.addListener(this.onMessageExternalHandler.bind(this)),
              this.chrome.tabs.onUpdated.addListener(this.onUpdateHandler.bind(this));
            const e = await this.getOnboardingTab(),
              t = i("1w");
            e && (this.injectContentScripts(e.id), this.noSwitch || this.activateTab(e.id));
            const n = await this.discoverExtensions();
            let [r, a, o] = await Promise.all([this.getLastShown(), this.getTimesShown(), this.getDontShowAgain()]);
            (r = Math.max(r, ...n.map(({ lastShown: e }) => e))),
              (a = Math.max(a, ...n.map(({ timesShown: e }) => e))),
              (o = o || n.some(({ dontShowAgain: e }) => e));
            const s = n.some(({ name: e, installed: t }) => !t && "sse" !== e);
            !e &&
              !this.respondOnly &&
              s &&
              !o &&
              r <= Date.now() - t &&
              !(await this.isFirstRun()) &&
              (await this.isPartOfRollout()) &&
              this.isCurrentExtensionFirstInLine(n) &&
              ((a += 1), this.launchWebsite(a), (r = Date.now())),
              this.setTimesShown(a),
              this.setLastShown(r),
              this.setDontShowAgain(o);
          }
        };
      },
      {
        "@babel/runtime/helpers/defineProperty": 14,
        "@babel/runtime/helpers/interopRequireDefault": 17,
        "core-js/modules/es6.array.iterator.js": 123,
        "core-js/modules/es6.array.sort.js": 124,
        "core-js/modules/web.dom.iterable.js": 125,
        ms: 137
      }
    ],
    175: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        t.exports = class {
          constructor() {
            (this._requests = []), (this._error = null);
          }
          _abortPendingRequests() {
            return Array.from(this._requests).forEach((e) => {
              (e.onreadystatechange = function () {}), e.abort();
            });
          }
          _flushRequests() {
            this._requests = [];
          }
          _allRequestsFinished() {
            for (const e of Array.from(this._requests)) if (4 !== e.readyState) return !1;
            return !0;
          }
          verify(e, t) {
            let n;
            null == e && (e = []),
              null == t && (t = () => {}),
              Array.from(e).forEach((e, r) => {
                this._skipResourceUrl(e) ||
                  ((this._requests[r] = new XMLHttpRequest()),
                  (n = this._requests[r]),
                  (n.resource_url = e),
                  (n.resource_verifier = this),
                  (n.onreadystatechange = function () {
                    if (4 === this.readyState && 200 !== this.status)
                      return (
                        (this.resource_verifier._error = {
                          message: `At least one resource is unavailable: Failed to load ${this.resource_url} [${this.status}]`,
                          code: this.status
                        }),
                        console.warn(this.resource_verifier._error.message),
                        this.resource_verifier._abortPendingRequests(),
                        this.resource_verifier._flushRequests(),
                        void t(this.resource_verifier._error)
                      );
                    this.resource_verifier._allRequestsFinished() && (this.resource_verifier._flushRequests(), t());
                  }),
                  n.open("GET", e, !0),
                  n.send());
              });
          }
          _skipResourceUrl(e) {
            const t =
                "undefined" != typeof chrome &&
                "undefined" != typeof browser &&
                void 0 !== browser.runtime &&
                void 0 !== browser.runtime.getBrowserInfo,
              n = e.split("/"),
              r = n[n.length - 1];
            return (
              t && -1 !== ["cms_ao2.js", "cms_aon.js", "cms_ass.js", "cms_ss2.js", "external-splashoffer.js", "safeshopping.js"].indexOf(r)
            );
          }
        };
      },
      { "core-js/modules/es6.array.iterator.js": 123, "core-js/modules/web.dom.iterable.js": 125 }
    ],
    176: [
      function (e, t, n) {
        "use strict";
        const r = e("background/base/Mixpanel");
        t.exports = r;
      },
      { "background/base/Mixpanel": 180 }
    ],
    177: [
      function (e, t, n) {
        "use strict";
        t.exports = {
          run: () =>
            chrome.runtime.onInstalled
              ? new Promise((e) => {
                  const t = setTimeout(() => {
                    e(null);
                  }, 200);
                  chrome.runtime.onInstalled.addListener(({ reason: n }) => {
                    clearTimeout(t), e(n);
                  });
                })
              : Promise.resolve(null),
          isNewInstall: (e) => "install" === e,
          isUpdated: (e) => "update" === e
        };
      },
      {}
    ],
    178: [
      function (e, t, n) {
        "use strict";
        t.exports = e("background/base/Settings");
      },
      { "background/base/Settings": 181 }
    ],
    179: [
      function (e, t, n) {
        (function (t) {
          (function () {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/defineProperty"));
            function r(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function a(e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? r(Object(a), !0).forEach(function (t) {
                      (0, n.default)(e, t, a[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                  : r(Object(a)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    });
              }
              return e;
            }
            e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
            const o = e("sentry");
            o.initialize(), e("whatwg-fetch");
            const i = e("messenger/Background").getInstance(),
              s = e("browser_accessors/TabAccessor").getInstance(),
              $ = e("config"),
              u = e("background/guid"),
              c = e("Locale"),
              l = e("background/AIMS"),
              d = e("background/DistributionPartner"),
              h = e("background/appInfo"),
              p = e("background/Mixpanel"),
              f = e("browser_accessors/cookieAccessor"),
              m = e("background/localStorage").getInstance(),
              g = e("background/BGStorage"),
              b = e("background/migrations"),
              y = e("background/Settings").getInstance(),
              v = e("background/ExtensionOnboarding"),
              k = e("background/NewInstallCheck"),
              _ = e("background/ExtensionLandingPage"),
              w = e("background/offersInit"),
              x = e("background/safetyInit"),
              j = k.run();
            m.initialize()
              .then(b.run)
              .then(u.load)
              .then(async () => {
                try {
                  Object.entries($.extensionOnboarding.extensions.sse).find(([, e]) => -1 !== e.indexOf(chrome.runtime.id))
                    ? chrome.runtime.setUninstallURL($.storeURLs.uninstall.sse, () => {
                        chrome.runtime.lastError;
                      })
                    : chrome.runtime.setUninstallURL($.storeURLs.uninstall.abs, () => {
                        chrome.runtime.lastError;
                      });
                } catch (e) {}
                const e = await j,
                  n = k.isNewInstall(e);
                $.mergeOverrides(),
                  new g(),
                  y.initialize(),
                  (t.ABS = {
                    setConfigOverrides: $.setConfigOverrides,
                    getConfigOverrides: $.getConfigOverrides,
                    clearConfigOverrides: $.clearConfigOverrides
                  });
                const r = new l(m, $.aims);
                $.aims && r.initialize(),
                  i.subscribe("closeTab", (e, t, n) => s.close(n.tab.id)),
                  i.subscribe("reloadTab", (e, t, n) => s.reload(n.tab.id)),
                  i.subscribe("navigate", (e, t, n) => s.navigate(e.url, e.as_separate, e.tabId || n.tab.id)),
                  i.subscribe("getCurrentTab", (e, t) => {
                    s.getCurrentTabId((e) => s.getCurrentTabUrl((n) => t({ id: e, url: n })));
                  }),
                  i.subscribe("TabAccessor:getCurrentUrl", (e, t, n) => {
                    s.getCurrentTabUrl((e) => t(e), n);
                  });
                const u = new d(m, navigator, f),
                  b = new c($, i),
                  S = new v(a(a({}, $.extensionOnboarding), {}, { chrome: chrome })),
                  E = p.getInstance({
                    _config: $.mixpanel,
                    _aims: r,
                    _partnerDistribution: u,
                    _newInstall: n,
                    _locale: b,
                    _appInfo: h,
                    _performanceStats: null,
                    _extensionOnboarding: S
                  });
                if (
                  (E.initialize().catch(o.getUnhandledRejectionHandler("mixpanel")),
                  w({ installReason: e, distributionPartner: u, aims: r, mixpanel: E, extensionOnboarding: S }),
                  x({ installReason: e, locale: b, mixpanel: E, aims: r }),
                  $.extensionLandingPage)
                ) {
                  new _(a(a({}, $.extensionLandingPage), {}, { chrome: chrome, locale: b })).initialize(n);
                }
                S.initialize();
              })
              .catch(o.getUnhandledRejectionHandler("global"));
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {
        "@babel/runtime/helpers/defineProperty": 14,
        "@babel/runtime/helpers/interopRequireDefault": 17,
        Locale: 163,
        "background/AIMS": 167,
        "background/BGStorage": 170,
        "background/DistributionPartner": 171,
        "background/ExtensionLandingPage": 173,
        "background/ExtensionOnboarding": 174,
        "background/Mixpanel": 176,
        "background/NewInstallCheck": 177,
        "background/Settings": 178,
        "background/appInfo": 9,
        "background/guid": 182,
        "background/localStorage": 2,
        "background/migrations": 3,
        "background/offersInit": 10,
        "background/safetyInit": 185,
        "browser_accessors/TabAccessor": 186,
        "browser_accessors/cookieAccessor": 5,
        config: 188,
        "core-js/modules/es6.array.iterator.js": 123,
        "core-js/modules/web.dom.iterable.js": 125,
        "messenger/Background": 126,
        sentry: 191,
        "whatwg-fetch": 162
      }
    ],
    180: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/defineProperty"));
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  (0, r.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const i = e("mixpanel-lib"),
          s = e("messenger/Background").getInstance(),
          $ = e("manifest.json"),
          u = e("underscore"),
          c = e("background/ABTestDecider"),
          l = e("background/AdguardDNTAnalyser"),
          d = e("background/Settings").getInstance(),
          h = e("config"),
          p = e("background/jsonStorage"),
          { captureException: f } = e("sentry"),
          m = localStorage;
        class g {
          static getInstance({
            _config: e,
            _aims: t,
            _partnerDistribution: n,
            _newInstall: r,
            _locale: a,
            _appInfo: o,
            _extensionOnboarding: i,
            _performanceStats: s
          } = {}) {
            return this.instance || (this.instance = new this(e, t, n, r, a, o, i, s)), this.instance;
          }
          constructor(e, t, n, r, a, o, s, $ = null) {
            (this._scheduleActive = this._scheduleActive.bind(this)),
              (this._trackActive = this._trackActive.bind(this)),
              (this._getPerformanceProperties = this._getPerformanceProperties.bind(this)),
              (this._config = e),
              (this._aims = t),
              (this._newInstall = r),
              (this._partnerDistribution = n),
              (this._locale = a),
              (this._appInfo = o),
              (this._extensionOnboarding = s),
              (this._performanceStats = $),
              (this.disabled = !1 === d.get("inAppTracking")),
              (this._gatedTracks = []),
              (this._mixpanel = i({
                btoa: (e) => {
                  try {
                    return btoa(e);
                  } catch (t) {
                    throw (f(t, { extra: { context: "Mixpanel", btoaInput: e } }), t);
                  }
                }
              })),
              this._mixpanel.init(this._config.token),
              this._mixpanel.identify(this._aims.getUserId());
          }
          initialize() {
            return (
              this.gateOn(),
              s.subscribe("Mixpanel:track", (e, t) => this.track(e.event, e.properties, t)),
              Promise.all(this.getPromises())
                .then(() => (this.gateOff(), this._trackInstall()))
                .then(async (e) => (await this._scheduleActive(), e))
            );
          }
          getPromises() {
            const e = new Promise((e) => this._locale.retrieve(e)),
              t = new Promise((e) => this._partnerDistribution.getPartnerId(e)),
              n = c
                .getInstance()
                .getParameters()
                .then((e) => this._mixpanel.register(e));
            return (
              this._mixpanel.register({
                Version: $.version,
                Beta: this._appInfo.isBeta(),
                Nightly: this._appInfo.isNightly(),
                Product: this._appInfo.getProduct(),
                "Web Extension": this._appInfo.isWebExt(),
                "Language Navigator": this._locale.getBrowserLocale()
              }),
              this._appInfo.getInstallationSource().then((e) => {
                this._mixpanel.register(e);
              }),
              e.then((e) => this._mixpanel.register({ "Language ABS": e })),
              t.then((e) => this._mixpanel.register({ "Partner Id": e })),
              [e, t, n]
            );
          }
          disable() {
            this.disabled = !0;
          }
          enable() {
            this.disabled = !1;
          }
          gateOn() {
            this.gated = !0;
          }
          gateOff() {
            return (this.gated = !1), this._flushGated();
          }
          _flushGated() {
            return (() => {
              let e;
              const t = [];
              for (; (e = this._gatedTracks.pop()); ) t.push(this.track(...e));
              return t;
            })();
          }
          register(...e) {
            return this._mixpanel.register(...e);
          }
          track(e, t, n = () => {}) {
            return this.disabled ? n() : this.gated ? this._gatedTracks.push([e, t, n]) : this._mixpanel.track(e, t, n);
          }
          getData(e, t) {
            return this._mixpanel.getData(t);
          }
          _writeInstall() {
            s.publish("bgStorage", { set: g.INSTALL, value: !0 });
          }
          async _trackInstall() {
            const e = p.getItem(g.INSTALL),
              t = this._aims.getInstalled();
            if (e) return { newInstall: !1, installTime: t };
            m.setItem(g.INSTALL, "true");
            const n = await this._appInfo.getInstallationSource(),
              r = u.extend({}, this._getTrackingProperties(), n, { "API Install Event": this._newInstall });
            return this.track("Install", r, () => p.setItem(g.INSTALL, !0)), { newInstall: !0, installTime: t };
          }
          _scheduleActive() {
            const e = p.getItem(g.ACTIVE),
              t = parseInt(e, 10) || 0,
              n = 1e3 * this._config.active_cycle,
              r = t - Date.now() + n;
            r > 0 ? setTimeout(this._trackActive, r) : this._trackActive();
          }
          _getTrackingProperties() {
            return u.extend({ "Has Offers": h.supportedSettings.offers }, d.toJSON(), this._getPerformanceProperties());
          }
          async _getInstalledExtensionProperties() {
            return (await this._extensionOnboarding.discoverExtensions()).reduce(
              (e, { name: t, installed: n }) => o(o({}, e), {}, { [`${t.toUpperCase()} installed`]: n }),
              {}
            );
          }
          async _trackActive() {
            const e = m.getItem(g.INSTALL);
            e || m.setItem(g.INSTALL, "true");
            const t = l.getInstance(),
              n = u.extend(
                { "Lost localStorage": !e },
                this._getTrackingProperties(),
                await this._getInstalledExtensionProperties(),
                t.getActiveReport()
              );
            this.track("Active", n, () => {
              var e;
              null === (e = this._performanceStats) || void 0 === e || e.clear(), p.setItem(g.ACTIVE, Date.now()), this._scheduleActive();
            });
          }
          _getPerformanceProperties() {
            let e;
            const t = {};
            if (!this._performanceStats) return t;
            const n = this._performanceStats.getTotals();
            for (e = 0; e < n.length; e++) {
              const r = n[e];
              t[`AUC Perf T${e}`] = r;
            }
            const r = this._performanceStats.getPercentages();
            for (e = 0; e < r.length; e++) {
              const n = r[e];
              t[`AUC Perf P${e}`] = n;
            }
            return t;
          }
        }
        (g.INSTALL = "mixpanel_install"), (g.ACTIVE = "mixpanel_active"), (t.exports = g);
      },
      {
        "@babel/runtime/helpers/defineProperty": 14,
        "@babel/runtime/helpers/interopRequireDefault": 17,
        "background/ABTestDecider": 166,
        "background/AdguardDNTAnalyser": 169,
        "background/Settings": 178,
        "background/jsonStorage": 183,
        config: 188,
        "core-js/modules/es6.array.iterator.js": 123,
        "core-js/modules/web.dom.iterable.js": 125,
        "manifest.json": 193,
        "messenger/Background": 126,
        "mixpanel-lib": 136,
        sentry: 191,
        underscore: 155
      }
    ],
    181: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const r = e("underscore"),
          a = e("messenger/Background").getInstance(),
          o = e("background/jsonStorage"),
          i = e("SettingDefaults.json"),
          s = e("Subsettings");
        t.exports = class {
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
          constructor() {
            (this.settingsKey = "settings"), (this.attributes = {}), this._initializeListeners();
          }
          _getStorage(e) {
            try {
              return o.getItem(e) || {};
            } catch (e) {
              return {};
            }
          }
          _getSettingsStorage() {
            return this._getStorage(this.settingsKey);
          }
          _setStorage(e, t) {
            o.setItem(e, t);
          }
          _setSettingsStorage(e) {
            this._setStorage(this.settingsKey, e);
          }
          _initializeListeners() {
            a.subscribe("Settings:get", (e, t = () => {}) => {
              t(this._getSettings());
            }),
              a.subscribe("Settings:set", (e, t = () => {}) => {
                this.set(e), t(this._getSettings());
              });
          }
          _getUpdatedSettings(e, t) {
            return r.extend({}, e, t);
          }
          _getChangedSettings(e, t) {
            const n = r.reduce(e, (e, n, r) => (n === t[r] && e.push(r), e), []);
            return r.omit(t, n);
          }
          _getSettings() {
            return r.mapObject(this.attributes, (e, t) => this.get(t));
          }
          _set(e) {
            const t = this._getSettings();
            this.attributes = this._getUpdatedSettings(this.attributes, e);
            const n = this._getSettings(),
              o = this._getChangedSettings(t, n);
            return (
              this._setSettingsStorage(this.attributes), this._initialized && r.keys(o).length && a.publish("Settings:change", o), this
            );
          }
          initialize() {
            const e = this._getSettingsStorage(),
              t = r.pick(i, r.difference(Object.keys(i), Object.keys(e)));
            r.isEmpty(t) || a.publish("Settings:setDefaults", t),
              (this.attributes = r.extend({}, i, e)),
              this._setSettingsStorage(this.attributes),
              (this._initialized = !0);
          }
          get(e) {
            if (!this._initialized) throw new Error("Trying to access settings without initializing");
            const t = s[e];
            return (!t || this.get(t)) && this.attributes[e];
          }
          set(...e) {
            if (!this._initialized) throw new Error("Trying to access settings without initializing");
            let t;
            if (1 === e.length && r.isObject(e[0])) t = e[0];
            else {
              if ("string" != typeof e[0] || void 0 === e[1]) throw new Error("Incorrect arguments, expected object or key, value");
              t = { [e[0]]: e[1] };
            }
            return this._set(t);
          }
          toJSON() {
            return r.clone(this.attributes);
          }
        };
      },
      {
        "SettingDefaults.json": 164,
        Subsettings: 165,
        "background/jsonStorage": 183,
        "core-js/modules/es6.array.iterator.js": 123,
        "core-js/modules/web.dom.iterable.js": 125,
        "messenger/Background": 126,
        underscore: 155
      }
    ],
    182: [
      function (e, t, n) {
        "use strict";
        const r = "GUID_KEY",
          a = e("chrome_emulation/storage").local,
          o = e("uuid/v4");
        let i = null;
        const s = function (e, t) {
          return (
            (i[e] = t),
            (function () {
              const e = {};
              return (e.GUID_KEY = i), a.set(e);
            })()
          );
        };
        t.exports = {
          load: function () {
            return new Promise((e) =>
              i
                ? e(i)
                : a.get(r, (t) => {
                    const n = t.GUID_KEY;
                    if ("string" == typeof n)
                      try {
                        i = JSON.parse(n);
                      } catch (e) {
                        i = {};
                      }
                    else i = n || {};
                    e(i);
                  })
            );
          },
          get: function (e) {
            !(function () {
              if (!i) throw new Error("GUID: not loaded");
            })();
            let t = i[e];
            return t || ((t = o()), s(e, t)), t;
          }
        };
      },
      { "chrome_emulation/storage": 187, "uuid/v4": 161 }
    ],
    183: [
      function (e, t, n) {
        "use strict";
        const r = e("background/localStorage").getInstance(),
          a = {
            getItem(e) {
              const t = r.getItem(e);
              return null != t ? JSON.parse(t) : t;
            },
            setItem: (e, t) => r.setItem(e, JSON.stringify(t)),
            removeItem: (e) => r.removeItem(e),
            clear: () => r.clear()
          };
        t.exports = a;
      },
      { "background/localStorage": 2 }
    ],
    184: [
      function (e, t, n) {
        "use strict";
        const r = e("config");
        t.exports = {
          isSupported: function () {
            return r.supportedSettings.offers;
          },
          isPromoEligible: function () {
            return !1;
          }
        };
      },
      { config: 188 }
    ],
    185: [
      function (e, t, n) {
        "use strict";
        t.exports = function () {
          return Promise.resolve();
        };
      },
      {}
    ],
    186: [
      function (e, t, n) {
        "use strict";
        t.exports = e("browser_accessors/base/TabAccessor");
      },
      { "browser_accessors/base/TabAccessor": 4 }
    ],
    187: [
      function (e, t, n) {
        "use strict";
        t.exports = chrome && chrome.storage;
      },
      {}
    ],
    188: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore"),
          a = e("background/localStorage").getInstance(),
          o = "config_overrides",
          i = e("configuration"),
          s = (e, t) => {
            e = e || {};
            for (const n in t)
              if (t.hasOwnProperty(n)) {
                const r = t[n];
                void 0 === e[n] || "object" != typeof r || r instanceof Array ? (e[n] = r) : (e[n] = s(e[n], r));
              }
            return e;
          };
        r.extend(i, {
          getConfigOverrides() {
            try {
              return JSON.parse(a.getItem(o));
            } catch (e) {
              return {};
            }
          },
          setConfigOverrides(e) {
            const t = s(this.getConfigOverrides(), e);
            a.setItem(o, JSON.stringify(t));
          },
          clearConfigOverrides() {
            a.removeItem(o);
          },
          mergeOverrides() {
            s(this, this.getConfigOverrides());
          }
        }),
          (t.exports = i);
      },
      { "background/localStorage": 2, configuration: 8, underscore: 155 }
    ],
    189: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault");
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js"), e("core-js/modules/es6.array.sort.js");
        var a = r(e("@babel/runtime/helpers/defineProperty"));
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  (0, a.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        const s = e("utils"),
          $ = e("tldjs"),
          u = e("Locale"),
          c = e("background/Helpers/ResourceVerifier"),
          l = e("messenger/Background").getInstance(),
          d = e("config"),
          h = e("background/localStorage").getInstance(),
          p = e("browser_accessors/TabAccessor").getInstance(),
          f = e("browser_accessors/extensionAccessor"),
          m = e("underscore"),
          g = e("background/ASDetector").getInstance(),
          b = e("ms");
        class y {
          static initClass() {
            (this.prototype.WHITELIST_KEY = "com.ciuvo.whitelist"),
              (this.prototype.WHITELIST_RETRY_INTERVAL = b("5m") * (1 + Math.random())),
              (this.prototype.WHITELIST_RETRY_INTERVAL_MAX = b("1h")),
              (this.prototype.WHITELIST_RELOAD_INTERVAL = b("1d")),
              (this.prototype.CURRENCY_FORMATS = { EUR: ["€", ",", !0], USD: ["$", ".", !1] }),
              (this.prototype.COUPON_TYPE = "coupon"),
              (this.prototype.COUPON_SINGLE_TYPE = "singleCoupon"),
              (this.prototype._tab_data = {}),
              (this.prototype._tab_request_data = {}),
              (this.prototype._tab_ready = {}),
              (this.prototype._tab_external_ready = {}),
              (this.prototype._tab_coupons = {}),
              (this.prototype._scraping_cache = {}),
              (this.prototype._browserStartOfferShown = !1),
              (this.prototype._darkMode = !1);
          }
          constructor(e, t, n, r, a, o) {
            (this._onWhitelistLoaded = this._onWhitelistLoaded.bind(this)),
              (this._onContentReady = this._onContentReady.bind(this)),
              (this._onPageScraped = this._onPageScraped.bind(this)),
              (this._openCoupon = this._openCoupon.bind(this)),
              (this._sendCouponFeedback = this._sendCouponFeedback.bind(this)),
              (this._onReady = this._onReady.bind(this)),
              (this._onExternalReady = this._onExternalReady.bind(this)),
              (this._onGetData = this._onGetData.bind(this)),
              (this._getWhitelist = this._getWhitelist.bind(this)),
              (this._makeGetRequest = this._makeGetRequest.bind(this)),
              (this._makePostRequest = this._makePostRequest.bind(this)),
              (this._api_url = e),
              (this._api_client = t),
              (this._api_key = n),
              (this._rndsnr = r),
              (this._inst_src = a),
              (this._error_collector = o);
          }
          init() {
            s.retry(this._getWhitelist, this._onWhitelistLoaded, this.WHITELIST_RETRY_INTERVAL, this.WHITELIST_RETRY_INTERVAL_MAX),
              g.enable(),
              l.subscribe("PUA:getData", this._onGetData),
              l.publish("Settings:get", "dark_mode", (e) => {
                this._darkMode = e.dark_mode;
              }),
              l.subscribe("Settings:change", (e) => {
                null != e.dark_mode && (this._darkMode = e.dark_mode);
              });
          }
          disable() {
            g.disable();
          }
          _onWhitelistLoaded(e, t) {
            e ||
              (this._updateWhitelist(t),
              l.subscribe("AO:contentReady", this._onContentReady),
              l.subscribe("AO:pageScraped", this._onPageScraped),
              l.subscribe("AO:ready", this._onReady),
              l.subscribe("AO:externalReady", this._onExternalReady),
              l.subscribe("AO:openCoupon", this._openCoupon),
              l.subscribe("AO:couponFeedback", this._sendCouponFeedback),
              setInterval(
                () =>
                  this._getWhitelist((e, t) => {
                    e || this._updateWhitelist(t);
                  }),
                this.WHITELIST_RELOAD_INTERVAL
              ));
          }
          _onContentReady(e, t, n) {
            this._tabReady(n.tab.id, !1), this._tabExternalReady(n.tab.id, !1);
            const { url: r } = e;
            if (g.isAffiliateSource(n.tab.id)) t(null);
            else {
              if (this._tabContainsCoupon(n.tab.id)) {
                const e = this._tab_data[n.tab.id];
                return (
                  (e.currentDomain = $.getDomain(r)),
                  l.publish("AO:hasOffers", { vertical: this._isVertical(e), external: this._isExternal(e), data: e }, null, n),
                  void t(null)
                );
              }
              this._tabData(n.tab.id, null),
                this._tabRequestData(n.tab.id, null),
                this._isWhitelisted(r) && this._getScraping(r, (e, n) => t(e ? null : n)),
                this._browserStartOfferShown || this._onPageScraped(e, null, n);
            }
          }
          _onPageScraped(e, t, n) {
            let { data: r } = e;
            const { js_data: a } = e,
              { xpath_data: o } = e;
            this._tabRequestData(n.tab.id, r),
              this._browserStartOfferShown || ((this._browserStartOfferShown = !0), (r = m.extend({ browserStartOffer: !0 }, r))),
              m.isEmpty(r) && m.isEmpty(a) && m.isEmpty(o)
                ? this._clearCurrentOffers(n)
                : this._getOffers(e.url, r, a, o, (t, s) => {
                    t ||
                      this._processOffers(
                        n,
                        i(
                          i({}, s),
                          {},
                          {
                            scrapedData: { data: r, js_data: a, xpath_data: o },
                            meta: i(i({}, s.meta), {}, { domain: $.getDomain(e.url) })
                          }
                        )
                      );
                  });
          }
          _tabContainsCoupon(e) {
            const t = this._tabData(e);
            return (t && t.items[0].offers[0].type) === this.COUPON_SINGLE_TYPE;
          }
          _couponMatchesDomain(e) {
            return !e.couponDomain || e.couponDomain === e.currentDomain;
          }
          _openCoupon(e, t, n) {
            const r = n.tab.id,
              a = e.url ? e.url : e.deep_link;
            p.navigate(a, !0, r, (t) => {
              e.type = this.COUPON_SINGLE_TYPE;
              const a = m.extend({}, this._tab_coupons[r], {
                items: [{ offers: [e] }],
                couponDomain: e.affiliate_domain ? $.getDomain(e.affiliate_domain) : $.getDomain(n.tab.url)
              });
              this._tabData(t, a);
            });
          }
          _sendCouponFeedback({ vote: e, slug: t }, n, r) {
            this._makePostRequest("feedback", {}, { category: "coupons", vote: e, slug: t, url: r.tab.url }, (e, t) => {
              e || n(t);
            });
          }
          _onReady(e, t, n) {
            this._tabReady(n.tab.id, !0), this._tryPublishData(n.tab.id);
          }
          _onExternalReady(e, t, n) {
            this._tabExternalReady(n.tab.id, e), this._tryPublishData(n.tab.id);
          }
          _onGetData(e, t) {
            this._makeGetRequest("pua", { url: e.url }, (e, n) => {
              e || t(n);
            });
          }
          _hasOffers(e) {
            return e.items[0] && e.items[0].offers.length > 0;
          }
          _processOffers(e, t) {
            this._hasOffers(t)
              ? this._getTemplates(t.render.templates, (n, r) => {
                  if (n) return void console.warn("Templates loading error");
                  const {
                      render: {
                        html: { js: a, css: o },
                        templates: s
                      }
                    } = t,
                    $ = i(i({}, t), {}, { templates: r, template_ids: s, javascript: a, stylesheet: o }),
                    u = [$.stylesheet];
                  (this._isExternal($) && !$.javascript) || u.push($.javascript),
                    new c().verify(u, (t) => {
                      t
                        ? this._error_collector.addError(t.message, "Offers - Resources")
                        : (this._tabData(e.tab.id, $), this._tryPublishData(e.tab.id));
                    });
                })
              : this._clearCurrentOffers(e);
          }
          _clearCurrentOffers(e) {
            this._tabData(e.tab.id, null), this._tabRequestData(e.tab.id, null), l.publish("AO:data", { products: [] }, null, e);
          }
          _getWhitelist(e) {
            this._makeGetRequest("whitelist", null, e);
          }
          _updateWhitelist(e) {
            this._whitelist = m.map(e[this.WHITELIST_KEY], this._prepareWhitelistEntry);
          }
          _prepareWhitelistEntry(e) {
            const t = -1 === e.replace("://", "").indexOf("/") ? "/" : "";
            return new RegExp(`^${e}${t}`);
          }
          _getScraping(e, t) {
            const n = new URL(e).origin;
            if ("object" == typeof this._scraping_cache[n]) {
              if (this._scraping_cache[n].expiration && this._scraping_cache[n].expiration > Date.now())
                return t(null, this._scraping_cache[n]);
            }
            return this._makeGetRequest("analyze", { url: e, abs_version: f.getManifest().version }, (e, r) =>
              e ? t(e) : ((r.expiration = Date.now() + b(`${r.expiration}s`)), (this._scraping_cache[n] = r), t(null, r))
            );
          }
          _getOffers(e, t, n, r, a) {
            const o = { url: e, abs_version: f.getManifest().version, dark_mode: this._darkMode };
            t && (o.data = JSON.stringify(t)),
              n && (o.js_data = JSON.stringify(n)),
              r && (o.xpath_data = JSON.stringify(r)),
              this._makeGetRequest("offers", o, a);
          }
          _getCachedTemplates() {
            let e;
            try {
              e = JSON.parse(h.getItem("templates_cached"));
            } catch (t) {
              e = {};
            }
            return (e && "object" == typeof e) || (e = {}), e;
          }
          _getTemplates(e, t) {
            let n,
              r = {};
            const a = JSON.parse(h.getItem("ignore_templates_cache"));
            if (a) (n = {}), (r = e), console.log("templates caching is disabled");
            else {
              (n = this._getCachedTemplates()), (r = Object.entries(e).reduce((e, [t, r]) => (n[r] ? e : i(i({}, e), {}, { [t]: r })), {}));
              if (0 === Object.keys(r).length) return void this._passCachedTemplatesToCallback(n, e, null, t);
            }
            new u(d, l).retrieve((o) =>
              this._makeGetRequest(
                "template",
                { lng: o, renderer: JSON.stringify({ templates: r }), abs_version: f.getManifest().version },
                (o, i) => {
                  Object.entries(i).forEach(([e, t]) => {
                    n[r[e]] = t;
                  }),
                    a || h.setItem("templates_cached", JSON.stringify(n)),
                    this._passCachedTemplatesToCallback(n, e, o, t);
                }
              )
            );
          }
          _passCachedTemplatesToCallback(e, t, n, r) {
            r(
              n,
              Object.entries(t).reduce((t, [n, r]) => i(i({}, t), {}, { [n]: e[r] }), {})
            );
          }
          _isWhitelisted(e) {
            return !!this._whitelist && this._whitelist.some((t) => t.test(e));
          }
          _isExternal(e) {
            return e.render.external;
          }
          _isVertical(e) {
            return e.render.vertical;
          }
          _tabRequestData(e, t) {
            return void 0 !== t && (this._tab_request_data[e] = t), this._tab_request_data[e] || null;
          }
          _tabData(e, t) {
            return (
              void 0 !== t &&
                ((this._tab_data[e] = t), t && t.items[0].offers.some((e) => e.type === this.COUPON_TYPE) && (this._tab_coupons[e] = t)),
              this._tab_data[e]
            );
          }
          _tabReady(e, t) {
            return void 0 !== t && (this._tab_ready[e] = t), this._tab_ready[e];
          }
          _tabExternalReady(e, t) {
            return void 0 !== t && (this._tab_external_ready[e] = t), this._tab_external_ready[e];
          }
          _tryPublishData(e) {
            const t = this._tabData(e),
              n = this._tabRequestData(e),
              r = this._tabExternalReady(e),
              a = this._tabReady(e);
            if (t) {
              const n = this._isExternal(t);
              if (
                (l.publish("AO:hasOffers", { vertical: this._isVertical(t), external: n, data: t }, null, { tab: { id: e } }),
                l.publish("Iframe:showShadow", { property: "box-shadow", value: "0px 10px 20px -10px rgba(0,0,0,0.3)" }),
                n && !r)
              )
                return;
              if (!n && !a) return;
            }
            t && ((this._tabContainsCoupon(e) && !this._couponMatchesDomain(t)) || this._publishData(e, t, n));
          }
          _getProductsSorted(e) {
            return e.items[0].offers.sort((e, t) => e.sortorder - t.sortorder);
          }
          _publishData(e, t, n) {
            const r = this._getProductsSorted(t);
            t.original_price && r.length && (r[0].total_saving = this._formatPrice(t.original_price - r[0].price, r[0].currency));
            const a = this._isExternal(t) ? "AO:data#external" : "AO:data";
            l.publish(a, m.extend({ products: r, requestData: n }, t), null, { tab: { id: e } }),
              this._tabData(e, null),
              this._tabRequestData(e, null);
          }
          _normalizePrice(e) {
            if ((e && "function" == typeof e.join && (e = e.join("")), "string" != typeof e)) return null;
            e = e.replace(/\s/g, "");
            const t = /(\d+([.,]\d\d\d)*)([.,](\d\d))?/.exec(e);
            if (!t) return null;
            return 100 * parseInt(t[1].replace(/[.,]/g, ""), 10) + (t[4] ? parseInt(t[4], 10) : 0);
          }
          _formatPrice(e, t) {
            const n = this.CURRENCY_FORMATS[t] || [t, ".", !1];
            let r = e % 100;
            return r < 10 && (r = `0${r}`), (e = Math.floor(e / 100) + n[1] + r), n[2] ? `${e} ${n[0]}` : `${n[0]} ${e}`;
          }
          _makeGetRequest(e, t, n) {
            return this._makeRequest("GET", e, t, null, n);
          }
          _makePostRequest(e, t, n, r) {
            return this._makeRequest("POST", e, t, n, r);
          }
          _makeRequest(e, t, n, r, a) {
            (n = m.extend({ apiclient: this._api_client, apikey: this._api_key, rndsnr: this._rndsnr }, n)),
              this._inst_src && (n.inst_src = this._inst_src);
            const o = Object.keys(n)
                .reduce((e, t) => (e.push(`${t}=${encodeURIComponent(n[t])}`), e), [])
                .join("&"),
              i = `${this._api_url}/${t}?${o}`;
            let s = null;
            const u = new XMLHttpRequest();
            u.open(e, i, !0),
              "POST" === e && (u.setRequestHeader("Content-type", "application/json;charset=UTF-8"), (s = JSON.stringify(r))),
              (u.onreadystatechange = () => {
                let e;
                if (4 === u.readyState) {
                  if (200 !== u.status) {
                    let e;
                    return (
                      a(`Loading error ${t}:${u.status} - ${u.statusText}`, null),
                      (e = n.url ? { domain: $.getDomain(i) } : null),
                      void (this._error_collector && this._error_collector.addError(`${u.status} - ${u.statusText}`, `Offers - ${t}`, e))
                    );
                  }
                  try {
                    e = JSON.parse(u.responseText);
                  } catch (e) {
                    return (
                      a("Response evaluation error", null),
                      void (this._error_collector && this._error_collector.addError(u.responseText, `Offers - ${t}`))
                    );
                  }
                  a(null, e);
                }
              }),
              u.send(s);
          }
        }
        y.initClass(), (t.exports = y);
      },
      {
        "@babel/runtime/helpers/defineProperty": 14,
        "@babel/runtime/helpers/interopRequireDefault": 17,
        Locale: 163,
        "background/ASDetector": 168,
        "background/Helpers/ResourceVerifier": 175,
        "background/localStorage": 2,
        "browser_accessors/TabAccessor": 186,
        "browser_accessors/extensionAccessor": 6,
        config: 188,
        "core-js/modules/es6.array.iterator.js": 123,
        "core-js/modules/es6.array.sort.js": 124,
        "core-js/modules/web.dom.iterable.js": 125,
        "messenger/Background": 126,
        ms: 137,
        tldjs: 143,
        underscore: 155,
        utils: 192
      }
    ],
    190: [
      function (e, t, n) {
        "use strict";
        var r = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0),
          e("core-js/modules/es6.array.iterator.js"),
          e("core-js/modules/web.dom.iterable.js");
        var a = r(e("background/jsonStorage")),
          o = r(e("config")),
          i = r(e("modules/offers/background/Offers"));
        const s = e("messenger/Background").getInstance(),
          $ = "promo_close_counter";
        class u extends i.default {
          constructor(e, t, n, r, a, o) {
            super(e, t, n, r, a, o),
              (this._markPromoClosed = this._markPromoClosed.bind(this)),
              (this._onMessageExternal = this._onMessageExternal.bind(this));
          }
          init() {
            super.init(), chrome.runtime.onMessageExternal.addListener(this._onMessageExternal);
          }
          _disable() {
            a.default.setItem("promoEligible", !1);
          }
          _onWhitelistLoaded(e, t) {
            e || (super._onWhitelistLoaded(e, t), s.subscribe("AO:markPromoClosed", this._markPromoClosed));
          }
          _markPromoClosed() {
            const e = a.default.getItem($) || 0;
            a.default.setItem($, e + 1), e + 1 >= 4 && this._disable();
          }
          _isProductQualified({ query_price: e, price: t, saving: n }) {
            return e - t / 100 >= 10 && parseInt(n, 10) >= 10;
          }
          _processOffers(e, t) {
            if (this._hasOffers(t)) {
              const [n] = this._getProductsSorted(t);
              this._isProductQualified(n)
                ? (a.default.setItem("promo_last_display", Date.now()), (t.meta.ss_promo = !0), super._processOffers(e, t))
                : this._clearCurrentOffers(e);
            } else this._clearCurrentOffers(e);
          }
          _onMessageExternal(e, t) {
            const n = o.default.extensionOnboarding.extensions.sse;
            return (
              "discover" === e.extensionOnboarding && -1 !== n.indexOf(t.id) && (this._disable(), s.publish("AO:data", { products: [] })),
              !1
            );
          }
        }
        var c = u;
        n.default = c;
      },
      {
        "@babel/runtime/helpers/interopRequireDefault": 17,
        "background/jsonStorage": 183,
        config: 188,
        "core-js/modules/es6.array.iterator.js": 123,
        "core-js/modules/web.dom.iterable.js": 125,
        "messenger/Background": 126,
        "modules/offers/background/Offers": 189
      }
    ],
    191: [
      function (e, t, n) {
        "use strict";
        const r = e("@sentry/browser"),
          a = e("config");
        let o = !1;
        t.exports = {
          initialize: function () {
            if (a.sentry_dsn) {
              try {
                if (parseInt(navigator.userAgent.match(/Chrome\/(\d*)/)[1], 10) <= 40) return;
              } catch (e) {}
              (o = !0),
                r.init({ dsn: a.sentry_dsn, release: chrome.runtime.getManifest().version }),
                window.addEventListener("unhandledrejection", (e) => {
                  r.captureException(e.reason);
                });
            }
          },
          getUnhandledRejectionHandler: function (e) {
            return (t) => (console.error(t), o && r.captureException(t, { extra: { context: e } }), t);
          },
          captureException: function (...e) {
            o && r.captureException(...e);
          }
        };
      },
      { "@sentry/browser": 25, config: 188 }
    ],
    192: [
      function (e, t, n) {
        "use strict";
        const r = e("underscore");
        t.exports = {
          retry: function e(t, n, a, o, i) {
            return null == i && (i = 2), t((s, $) => (s ? r.delay(e, a, t, n, Math.min(i * a, o), o, i) : n(null, $)));
          }
        };
      },
      { underscore: 155 }
    ],
    193: [
      function (e, t, n) {
        t.exports = {
          manifest_version: 2,
          author: "Avira Operations GmbH & Co. KG",
          default_locale: "en",
          name: "__MSG_extName__",
          description: "__MSG_extDescription__",
          version: "4.2.7",
          content_scripts: [
            {
              matches: ["*://*/*"],
              js: ["js/content/common.js", "js/content/content.js"],
              css: ["css/content/content.css", "css/content/search.css"]
            },
            { js: ["js/content/jquery.js", "js/content/landingPage.js"], matches: ["http://*.avira.com/*", "https://*.avira.com/*"] }
          ],
          icons: { 16: "img/avira_icon16.png", 48: "img/avira_icon48.png", 128: "img/avira_icon128.png" },
          background: { scripts: ["js/background/background.js"] },
          browser_action: {
            default_title: "__MSG_extName__",
            default_icon: {
              16: "img/avira_icon16.png",
              19: "img/avira_icon19.png",
              24: "img/avira_icon24.png",
              32: "img/avira_icon32.png",
              38: "img/avira_icon38.png"
            }
          },
          permissions: ["tabs", "storage", "webRequest", "cookies", "unlimitedStorage", "http://*/*", "https://*/*"],
          web_accessible_resources: [
            "html/top.html",
            "html/card.html",
            "html/external.html",
            "html/loading.html",
            "html/blocked.html",
            "html/blockedIFrame.html",
            "html/trackerNotification.html",
            "html/ExtPermNotification.html",
            "img/serp_info_safe.svg",
            "img/serp_info_unsafe.svg",
            "img/serp_info_warning.svg",
            "img/logo-avira-antivirus.png"
          ],
          content_security_policy:
            "script-src 'self' http://localhost:4000 https://www.avira.com https://*.offers.avira.com; object-src 'self'"
        };
      },
      {}
    ]
  },
  {},
  [179]
);
