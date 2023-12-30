/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, n, i) {
  function a(s, o) {
    if (!n[s]) {
      if (!t[s]) {
        var l = "function" == typeof require && require;
        if (!o && l) return l(s, !0);
        if (r) return r(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var _ = (n[s] = { exports: {} });
      t[s][0].call(
        _.exports,
        function (e) {
          return a(t[s][1][e] || e);
        },
        _,
        _.exports,
        e,
        t,
        n,
        i
      );
    }
    return n[s].exports;
  }
  for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) a(i[s]);
  return a;
})(
  {
    1: [
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
      { "core-js/modules/es6.array.iterator.js": 59, "core-js/modules/web.dom.iterable.js": 60 }
    ],
    2: [
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
            api_client: "abs",
            api_key: "DhwrO06Igpulf142CT6NcUDrKlh4OG4L",
            coupons_domain: "offers.avira.com",
            dnt_disable_timeout: 72e5,
            api_client_promo: "abs_promo",
            api_key_promo: "FaE1BFxmrh9zK5KOF27UiRLAdWoPCZY7",
            promo_display_interval: "3d"
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
    3: [
      function (e, t, n) {
        "use strict";
        const i = e("jquery"),
          a = e("underscore"),
          r = e("mustache"),
          s = e("content/i18n_loader"),
          o = e("content/messagingInterface"),
          l = e("content/mixpanel"),
          c = e("blocked/message.mustache"),
          _ = e("url-search-params"),
          u = e("content/Models/Settings"),
          d = { 0: "unknown", 1: "safe", 2: "malware", 3: "phishing", 4: "spam", 5: "pua", 6: "pua2", 7: "mse" };
        class b {
          static initClass() {
            this.prototype._$dialog = null;
          }
          constructor(e, t, n, i, a, r, s, o, l) {
            (this._toggleException = this._toggleException.bind(this)),
              (this._continue = this._continue.bind(this)),
              (this._gotoLastSafeUrl = this._gotoLastSafeUrl.bind(this)),
              (this._mseTakeMeAway = this._mseTakeMeAway.bind(this)),
              (this.channel = e),
              (this.domain = t),
              (this.url = n),
              (this.category = i),
              (this.i18n = a),
              (this.source = r),
              (this.whiteListVersion = s),
              (this.exceptionListVersion = o),
              (this.prevPUADownloadUrl = l);
          }
          render(e) {
            this._updateMode();
            const t = this._getCategory(e.category),
              n = this.i18n[`msg_category_${t}`],
              s = this.i18n[`msg_category_${t}_sub`],
              o = this._isPUADownload(e.category);
            return (
              i("body").html(r.render(c, a.extend(e, { title: n, subtitle: s, isPUADownload: o }), this.i18n)),
              (this._$dialog = i(".drop")),
              this._$dialog
            );
          }
          track(e, t) {
            return (
              null == t && (t = () => {}),
              l.track(
                this._trackingName(e),
                {
                  Domain: this.domain,
                  Category: this._categoryName(),
                  Source: this.source,
                  WhiteListVersion: this.whiteListVersion,
                  ExceptionListVersion: this.exceptionListVersion
                },
                t
              )
            );
          }
          init() {
            return this._initListeners();
          }
          _getCategory(e) {
            return d[e];
          }
          _isPUADownload(e) {
            return 5 === e;
          }
          _initListeners() {
            i("#btn-back").on("click", this._gotoLastSafeUrl),
              i("#btn-mse-take-me-away").on("click", this._mseTakeMeAway),
              i("#btn-continue").on("click", this._continue),
              i("#cb-add-exception").on("change", this._toggleException),
              this._$dialog.on("click", (e) => this._toggleDialog(!0, e)),
              i(".drop__close").on("click", (e) => this._toggleDialog(!1, e)),
              i("body").on("click", (e) => this._toggleDialog(!1, e)),
              i(document).on("keyup", (e) => this._toggleDialog(!1, 27 === e.keyCode ? e : void 0));
          }
          _toggleDialog(e, t) {
            return t && t.stopPropagation(), this._$dialog.toggleClass("drop--active", e);
          }
          _toggleException(e) {
            const t = e.target.checked ? "addException" : "removeException";
            return o.publish(this.channel, { action: t, domain: this.domain, permanent: !0 }), this.track(t);
          }
          _continue(e) {
            e.preventDefault();
            const t = this._isPUADownload(this.category);
            return i("#cb-add-exception").checked
              ? top.location.replace(this.url)
              : o.publish(this.channel, { action: "addException", permanent: !1 }, () => {
                  if ((this.track("ignore"), t)) {
                    let e = 100;
                    if (top === window) {
                      const e = document.createElement("a");
                      (e.href = this.url), (e.download = ""), document.body.appendChild(e), e.click();
                    } else top.location.replace(this.url), (e = 500);
                    return setTimeout(() => top.location.replace(this.prevPUADownloadUrl), e);
                  }
                  return top.location.replace(this.url);
                });
          }
          _updateMode() {
            u.getInstance()
              .fetch()
              .then((e) => {
                e.dark_mode ? i("body").addClass("theme-dark") : i("body").removeClass("theme-dark");
              });
          }
          _gotoLastSafeUrl() {
            return o.publish(this.channel, { action: "getLastSafeURL" }, (e) => (this.track("back"), top.location.replace(e)));
          }
          _mseTakeMeAway(e) {
            return o.publish("navigate", { url: e.target.dataset.href });
          }
          _trackingName(e) {
            return `BlockedPage - ${(() => {
              switch (e) {
                case "ignore":
                  return "Ignore";
                case "back":
                  return "Take me back";
                case "addException":
                  return "Add Exception";
                case "removeException":
                  return "Remove Exception";
                case "blocked":
                  return "Show";
              }
            })()}`;
          }
          _categoryName() {
            const e = { 0: "Unknown", 1: "Safe", 2: "Malware", 3: "Phishing", 4: "Spam", 5: "PUA Download", 6: "PUA Portal" };
            return e[this.category] ? e[this.category] : `Category ${this.category}`;
          }
        }
        b.initClass();
        const p = (e) =>
          s.getLocaleStrings((t) => {
            const n = new b(
              "AUCClassifier",
              e.domain,
              e.url,
              e.category,
              t,
              e.source,
              e.whiteListVersion,
              e.exceptionListVersion,
              e.prevPUADownloadUrl
            );
            return n.render(e), n.track("blocked"), n.init();
          });
        o.publish("Tabs:getData", { classifier: "AUCClassifier" }, (e) => {
          if (e && e.url && (e.unsafe || e.isWarning)) return p(e);
          try {
            const e = new _(location.search.replace(/^\?/, "")),
              t = JSON.parse(decodeURIComponent(atob(e.get("tabData"))));
            return o.publish("Tabs:restoreData", { data: t, classifier: "AUCClassifier" }, (e) => p(e));
          } catch (e) {
            return o.publish("closeTab");
          }
        });
      },
      {
        "blocked/message.mustache": 69,
        "content/Models/Settings": 85,
        "content/i18n_loader": 87,
        "content/messagingInterface": 88,
        "content/mixpanel": 89,
        jquery: "jquery",
        mustache: "mustache",
        underscore: 67,
        "url-search-params": 68
      }
    ],
    4: [
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
    5: [
      function (e, t, n) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    6: [
      function (e, t, n) {
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        (t.exports = function (e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    7: [
      function (e, t, n) {
        function i(e) {
          return (
            (t.exports = i =
              Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            i(e)
          );
        }
        (t.exports = i), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    8: [
      function (e, t, n) {
        var i = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 11 }
    ],
    9: [
      function (e, t, n) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    10: [
      function (e, t, n) {
        var i = e("@babel/runtime/helpers/typeof").default,
          a = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== i(t) && "function" != typeof t) ? a(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 4, "@babel/runtime/helpers/typeof": 12 }
    ],
    11: [
      function (e, t, n) {
        function i(e, n) {
          return (
            (t.exports = i =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            i(e, n)
          );
        }
        (t.exports = i), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    12: [
      function (e, t, n) {
        function i(e) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? ((t.exports = i =
                  function (e) {
                    return typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0))
              : ((t.exports = i =
                  function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0)),
            i(e)
          );
        }
        (t.exports = i), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    13: [
      function (e, t, n) {
        (function (t) {
          (function () {
            !(function (i) {
              var a = ("object" == typeof self && self.self === self && self) || ("object" == typeof t && t.global === t && t);
              if ("function" == typeof define && define.amd)
                define(["underscore", "jquery", "exports"], function (e, t, n) {
                  a.Backbone = i(a, n, e, t);
                });
              else if (void 0 !== n) {
                var r,
                  s = e("underscore");
                try {
                  r = e("jquery");
                } catch (e) {}
                i(a, n, s, r);
              } else a.Backbone = i(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$);
            })(function (e, t, n, i) {
              var a = e.Backbone,
                r = Array.prototype.slice;
              (t.VERSION = "1.4.0"),
                (t.$ = i),
                (t.noConflict = function () {
                  return (e.Backbone = a), this;
                }),
                (t.emulateHTTP = !1),
                (t.emulateJSON = !1);
              var s,
                o = (t.Events = {}),
                l = /\s+/,
                c = function (e, t, i, a, r) {
                  var s,
                    o = 0;
                  if (i && "object" == typeof i) {
                    void 0 !== a && "context" in r && void 0 === r.context && (r.context = a);
                    for (s = n.keys(i); o < s.length; o++) t = c(e, t, s[o], i[s[o]], r);
                  } else if (i && l.test(i)) for (s = i.split(l); o < s.length; o++) t = e(t, s[o], a, r);
                  else t = e(t, i, a, r);
                  return t;
                };
              (o.on = function (e, t, n) {
                ((this._events = c(_, this._events || {}, e, t, { context: n, ctx: this, listening: s })), s) &&
                  (((this._listeners || (this._listeners = {}))[s.id] = s), (s.interop = !1));
                return this;
              }),
                (o.listenTo = function (e, t, i) {
                  if (!e) return this;
                  var a = e._listenId || (e._listenId = n.uniqueId("l")),
                    r = this._listeningTo || (this._listeningTo = {}),
                    o = (s = r[a]);
                  o || (this._listenId || (this._listenId = n.uniqueId("l")), (o = s = r[a] = new h(this, e)));
                  var l = u(e, t, i, this);
                  if (((s = void 0), l)) throw l;
                  return o.interop && o.on(t, i), this;
                });
              var _ = function (e, t, n, i) {
                  if (n) {
                    var a = e[t] || (e[t] = []),
                      r = i.context,
                      s = i.ctx,
                      o = i.listening;
                    o && o.count++, a.push({ callback: n, context: r, ctx: r || s, listening: o });
                  }
                  return e;
                },
                u = function (e, t, n, i) {
                  try {
                    e.on(t, n, i);
                  } catch (e) {
                    return e;
                  }
                };
              (o.off = function (e, t, n) {
                return this._events ? ((this._events = c(d, this._events, e, t, { context: n, listeners: this._listeners })), this) : this;
              }),
                (o.stopListening = function (e, t, i) {
                  var a = this._listeningTo;
                  if (!a) return this;
                  for (var r = e ? [e._listenId] : n.keys(a), s = 0; s < r.length; s++) {
                    var o = a[r[s]];
                    if (!o) break;
                    o.obj.off(t, i, this), o.interop && o.off(t, i);
                  }
                  return n.isEmpty(a) && (this._listeningTo = void 0), this;
                });
              var d = function (e, t, i, a) {
                if (e) {
                  var r,
                    s = a.context,
                    o = a.listeners,
                    l = 0;
                  if (t || s || i) {
                    for (r = t ? [t] : n.keys(e); l < r.length; l++) {
                      var c = e[(t = r[l])];
                      if (!c) break;
                      for (var _ = [], u = 0; u < c.length; u++) {
                        var d = c[u];
                        if ((i && i !== d.callback && i !== d.callback._callback) || (s && s !== d.context)) _.push(d);
                        else {
                          var b = d.listening;
                          b && b.off(t, i);
                        }
                      }
                      _.length ? (e[t] = _) : delete e[t];
                    }
                    return e;
                  }
                  for (r = n.keys(o); l < r.length; l++) o[r[l]].cleanup();
                }
              };
              (o.once = function (e, t, n) {
                var i = c(b, {}, e, t, this.off.bind(this));
                return "string" == typeof e && null == n && (t = void 0), this.on(i, t, n);
              }),
                (o.listenToOnce = function (e, t, n) {
                  var i = c(b, {}, t, n, this.stopListening.bind(this, e));
                  return this.listenTo(e, i);
                });
              var b = function (e, t, i, a) {
                if (i) {
                  var r = (e[t] = n.once(function () {
                    a(t, r), i.apply(this, arguments);
                  }));
                  r._callback = i;
                }
                return e;
              };
              o.trigger = function (e) {
                if (!this._events) return this;
                for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; i < t; i++) n[i] = arguments[i + 1];
                return c(p, this._events, e, void 0, n), this;
              };
              var p = function (e, t, n, i) {
                  if (e) {
                    var a = e[t],
                      r = e.all;
                    a && r && (r = r.slice()), a && g(a, i), r && g(r, [t].concat(i));
                  }
                  return e;
                },
                g = function (e, t) {
                  var n,
                    i = -1,
                    a = e.length,
                    r = t[0],
                    s = t[1],
                    o = t[2];
                  switch (t.length) {
                    case 0:
                      for (; ++i < a; ) (n = e[i]).callback.call(n.ctx);
                      return;
                    case 1:
                      for (; ++i < a; ) (n = e[i]).callback.call(n.ctx, r);
                      return;
                    case 2:
                      for (; ++i < a; ) (n = e[i]).callback.call(n.ctx, r, s);
                      return;
                    case 3:
                      for (; ++i < a; ) (n = e[i]).callback.call(n.ctx, r, s, o);
                      return;
                    default:
                      for (; ++i < a; ) (n = e[i]).callback.apply(n.ctx, t);
                      return;
                  }
                },
                h = function (e, t) {
                  (this.id = e._listenId),
                    (this.listener = e),
                    (this.obj = t),
                    (this.interop = !0),
                    (this.count = 0),
                    (this._events = void 0);
                };
              (h.prototype.on = o.on),
                (h.prototype.off = function (e, t) {
                  var n;
                  this.interop
                    ? ((this._events = c(d, this._events, e, t, { context: void 0, listeners: void 0 })), (n = !this._events))
                    : (this.count--, (n = 0 === this.count)),
                    n && this.cleanup();
                }),
                (h.prototype.cleanup = function () {
                  delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
                }),
                (o.bind = o.on),
                (o.unbind = o.off),
                n.extend(t, o);
              var f = (t.Model = function (e, t) {
                var i = e || {};
                t || (t = {}),
                  this.preinitialize.apply(this, arguments),
                  (this.cid = n.uniqueId(this.cidPrefix)),
                  (this.attributes = {}),
                  t.collection && (this.collection = t.collection),
                  t.parse && (i = this.parse(i, t) || {});
                var a = n.result(this, "defaults");
                (i = n.defaults(n.extend({}, a, i), a)), this.set(i, t), (this.changed = {}), this.initialize.apply(this, arguments);
              });
              n.extend(f.prototype, o, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                cidPrefix: "c",
                preinitialize: function () {},
                initialize: function () {},
                toJSON: function (e) {
                  return n.clone(this.attributes);
                },
                sync: function () {
                  return t.sync.apply(this, arguments);
                },
                get: function (e) {
                  return this.attributes[e];
                },
                escape: function (e) {
                  return n.escape(this.get(e));
                },
                has: function (e) {
                  return null != this.get(e);
                },
                matches: function (e) {
                  return !!n.iteratee(e, this)(this.attributes);
                },
                set: function (e, t, i) {
                  if (null == e) return this;
                  var a;
                  if (("object" == typeof e ? ((a = e), (i = t)) : ((a = {})[e] = t), i || (i = {}), !this._validate(a, i))) return !1;
                  var r = i.unset,
                    s = i.silent,
                    o = [],
                    l = this._changing;
                  (this._changing = !0), l || ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {}));
                  var c = this.attributes,
                    _ = this.changed,
                    u = this._previousAttributes;
                  for (var d in a)
                    (t = a[d]),
                      n.isEqual(c[d], t) || o.push(d),
                      n.isEqual(u[d], t) ? delete _[d] : (_[d] = t),
                      r ? delete c[d] : (c[d] = t);
                  if ((this.idAttribute in a && (this.id = this.get(this.idAttribute)), !s)) {
                    o.length && (this._pending = i);
                    for (var b = 0; b < o.length; b++) this.trigger("change:" + o[b], this, c[o[b]], i);
                  }
                  if (l) return this;
                  if (!s) for (; this._pending; ) (i = this._pending), (this._pending = !1), this.trigger("change", this, i);
                  return (this._pending = !1), (this._changing = !1), this;
                },
                unset: function (e, t) {
                  return this.set(e, void 0, n.extend({}, t, { unset: !0 }));
                },
                clear: function (e) {
                  var t = {};
                  for (var i in this.attributes) t[i] = void 0;
                  return this.set(t, n.extend({}, e, { unset: !0 }));
                },
                hasChanged: function (e) {
                  return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e);
                },
                changedAttributes: function (e) {
                  if (!e) return !!this.hasChanged() && n.clone(this.changed);
                  var t,
                    i = this._changing ? this._previousAttributes : this.attributes,
                    a = {};
                  for (var r in e) {
                    var s = e[r];
                    n.isEqual(i[r], s) || ((a[r] = s), (t = !0));
                  }
                  return !!t && a;
                },
                previous: function (e) {
                  return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
                },
                previousAttributes: function () {
                  return n.clone(this._previousAttributes);
                },
                fetch: function (e) {
                  e = n.extend({ parse: !0 }, e);
                  var t = this,
                    i = e.success;
                  return (
                    (e.success = function (n) {
                      var a = e.parse ? t.parse(n, e) : n;
                      if (!t.set(a, e)) return !1;
                      i && i.call(e.context, t, n, e), t.trigger("sync", t, n, e);
                    }),
                    F(this, e),
                    this.sync("read", this, e)
                  );
                },
                save: function (e, t, i) {
                  var a;
                  null == e || "object" == typeof e ? ((a = e), (i = t)) : ((a = {})[e] = t);
                  var r = (i = n.extend({ validate: !0, parse: !0 }, i)).wait;
                  if (a && !r) {
                    if (!this.set(a, i)) return !1;
                  } else if (!this._validate(a, i)) return !1;
                  var s = this,
                    o = i.success,
                    l = this.attributes;
                  (i.success = function (e) {
                    s.attributes = l;
                    var t = i.parse ? s.parse(e, i) : e;
                    if ((r && (t = n.extend({}, a, t)), t && !s.set(t, i))) return !1;
                    o && o.call(i.context, s, e, i), s.trigger("sync", s, e, i);
                  }),
                    F(this, i),
                    a && r && (this.attributes = n.extend({}, l, a));
                  var c = this.isNew() ? "create" : i.patch ? "patch" : "update";
                  "patch" !== c || i.attrs || (i.attrs = a);
                  var _ = this.sync(c, this, i);
                  return (this.attributes = l), _;
                },
                destroy: function (e) {
                  e = e ? n.clone(e) : {};
                  var t = this,
                    i = e.success,
                    a = e.wait,
                    r = function () {
                      t.stopListening(), t.trigger("destroy", t, t.collection, e);
                    };
                  e.success = function (n) {
                    a && r(), i && i.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e);
                  };
                  var s = !1;
                  return this.isNew() ? n.defer(e.success) : (F(this, e), (s = this.sync("delete", this, e))), a || r(), s;
                },
                url: function () {
                  var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || H();
                  if (this.isNew()) return e;
                  var t = this.get(this.idAttribute);
                  return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t);
                },
                parse: function (e, t) {
                  return e;
                },
                clone: function () {
                  return new this.constructor(this.attributes);
                },
                isNew: function () {
                  return !this.has(this.idAttribute);
                },
                isValid: function (e) {
                  return this._validate({}, n.extend({}, e, { validate: !0 }));
                },
                _validate: function (e, t) {
                  if (!t.validate || !this.validate) return !0;
                  e = n.extend({}, this.attributes, e);
                  var i = (this.validationError = this.validate(e, t) || null);
                  return !i || (this.trigger("invalid", this, i, n.extend(t, { validationError: i })), !1);
                }
              });
              var m = (t.Collection = function (e, t) {
                  t || (t = {}),
                    this.preinitialize.apply(this, arguments),
                    t.model && (this.model = t.model),
                    void 0 !== t.comparator && (this.comparator = t.comparator),
                    this._reset(),
                    this.initialize.apply(this, arguments),
                    e && this.reset(e, n.extend({ silent: !0 }, t));
                }),
                v = { add: !0, remove: !0, merge: !0 },
                k = { add: !0, remove: !1 },
                y = function (e, t, n) {
                  n = Math.min(Math.max(n, 0), e.length);
                  var i,
                    a = Array(e.length - n),
                    r = t.length;
                  for (i = 0; i < a.length; i++) a[i] = e[i + n];
                  for (i = 0; i < r; i++) e[i + n] = t[i];
                  for (i = 0; i < a.length; i++) e[i + r + n] = a[i];
                };
              n.extend(m.prototype, o, {
                model: f,
                preinitialize: function () {},
                initialize: function () {},
                toJSON: function (e) {
                  return this.map(function (t) {
                    return t.toJSON(e);
                  });
                },
                sync: function () {
                  return t.sync.apply(this, arguments);
                },
                add: function (e, t) {
                  return this.set(e, n.extend({ merge: !1 }, t, k));
                },
                remove: function (e, t) {
                  t = n.extend({}, t);
                  var i = !n.isArray(e);
                  e = i ? [e] : e.slice();
                  var a = this._removeModels(e, t);
                  return (
                    !t.silent && a.length && ((t.changes = { added: [], merged: [], removed: a }), this.trigger("update", this, t)),
                    i ? a[0] : a
                  );
                },
                set: function (e, t) {
                  if (null != e) {
                    (t = n.extend({}, v, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                    var i = !n.isArray(e);
                    e = i ? [e] : e.slice();
                    var a = t.at;
                    null != a && (a = +a), a > this.length && (a = this.length), a < 0 && (a += this.length + 1);
                    var r,
                      s,
                      o = [],
                      l = [],
                      c = [],
                      _ = [],
                      u = {},
                      d = t.add,
                      b = t.merge,
                      p = t.remove,
                      g = !1,
                      h = this.comparator && null == a && !1 !== t.sort,
                      f = n.isString(this.comparator) ? this.comparator : null;
                    for (s = 0; s < e.length; s++) {
                      r = e[s];
                      var m = this.get(r);
                      if (m) {
                        if (b && r !== m) {
                          var k = this._isModel(r) ? r.attributes : r;
                          t.parse && (k = m.parse(k, t)), m.set(k, t), c.push(m), h && !g && (g = m.hasChanged(f));
                        }
                        u[m.cid] || ((u[m.cid] = !0), o.push(m)), (e[s] = m);
                      } else
                        d && (r = e[s] = this._prepareModel(r, t)) && (l.push(r), this._addReference(r, t), (u[r.cid] = !0), o.push(r));
                    }
                    if (p) {
                      for (s = 0; s < this.length; s++) u[(r = this.models[s]).cid] || _.push(r);
                      _.length && this._removeModels(_, t);
                    }
                    var w = !1,
                      x = !h && d && p;
                    if (
                      (o.length && x
                        ? ((w =
                            this.length !== o.length ||
                            n.some(this.models, function (e, t) {
                              return e !== o[t];
                            })),
                          (this.models.length = 0),
                          y(this.models, o, 0),
                          (this.length = this.models.length))
                        : l.length && (h && (g = !0), y(this.models, l, null == a ? this.length : a), (this.length = this.models.length)),
                      g && this.sort({ silent: !0 }),
                      !t.silent)
                    ) {
                      for (s = 0; s < l.length; s++) null != a && (t.index = a + s), (r = l[s]).trigger("add", r, this, t);
                      (g || w) && this.trigger("sort", this, t),
                        (l.length || _.length || c.length) &&
                          ((t.changes = { added: l, removed: _, merged: c }), this.trigger("update", this, t));
                    }
                    return i ? e[0] : e;
                  }
                },
                reset: function (e, t) {
                  t = t ? n.clone(t) : {};
                  for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], t);
                  return (
                    (t.previousModels = this.models),
                    this._reset(),
                    (e = this.add(e, n.extend({ silent: !0 }, t))),
                    t.silent || this.trigger("reset", this, t),
                    e
                  );
                },
                push: function (e, t) {
                  return this.add(e, n.extend({ at: this.length }, t));
                },
                pop: function (e) {
                  var t = this.at(this.length - 1);
                  return this.remove(t, e);
                },
                unshift: function (e, t) {
                  return this.add(e, n.extend({ at: 0 }, t));
                },
                shift: function (e) {
                  var t = this.at(0);
                  return this.remove(t, e);
                },
                slice: function () {
                  return r.apply(this.models, arguments);
                },
                get: function (e) {
                  if (null != e)
                    return this._byId[e] || this._byId[this.modelId(this._isModel(e) ? e.attributes : e)] || (e.cid && this._byId[e.cid]);
                },
                has: function (e) {
                  return null != this.get(e);
                },
                at: function (e) {
                  return e < 0 && (e += this.length), this.models[e];
                },
                where: function (e, t) {
                  return this[t ? "find" : "filter"](e);
                },
                findWhere: function (e) {
                  return this.where(e, !0);
                },
                sort: function (e) {
                  var t = this.comparator;
                  if (!t) throw new Error("Cannot sort a set without a comparator");
                  e || (e = {});
                  var i = t.length;
                  return (
                    n.isFunction(t) && (t = t.bind(this)),
                    1 === i || n.isString(t) ? (this.models = this.sortBy(t)) : this.models.sort(t),
                    e.silent || this.trigger("sort", this, e),
                    this
                  );
                },
                pluck: function (e) {
                  return this.map(e + "");
                },
                fetch: function (e) {
                  var t = (e = n.extend({ parse: !0 }, e)).success,
                    i = this;
                  return (
                    (e.success = function (n) {
                      var a = e.reset ? "reset" : "set";
                      i[a](n, e), t && t.call(e.context, i, n, e), i.trigger("sync", i, n, e);
                    }),
                    F(this, e),
                    this.sync("read", this, e)
                  );
                },
                create: function (e, t) {
                  var i = (t = t ? n.clone(t) : {}).wait;
                  if (!(e = this._prepareModel(e, t))) return !1;
                  i || this.add(e, t);
                  var a = this,
                    r = t.success;
                  return (
                    (t.success = function (e, t, n) {
                      i && a.add(e, n), r && r.call(n.context, e, t, n);
                    }),
                    e.save(null, t),
                    e
                  );
                },
                parse: function (e, t) {
                  return e;
                },
                clone: function () {
                  return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
                },
                modelId: function (e) {
                  return e[this.model.prototype.idAttribute || "id"];
                },
                values: function () {
                  return new x(this, A);
                },
                keys: function () {
                  return new x(this, S);
                },
                entries: function () {
                  return new x(this, z);
                },
                _reset: function () {
                  (this.length = 0), (this.models = []), (this._byId = {});
                },
                _prepareModel: function (e, t) {
                  if (this._isModel(e)) return e.collection || (e.collection = this), e;
                  (t = t ? n.clone(t) : {}).collection = this;
                  var i = new this.model(e, t);
                  return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i;
                },
                _removeModels: function (e, t) {
                  for (var n = [], i = 0; i < e.length; i++) {
                    var a = this.get(e[i]);
                    if (a) {
                      var r = this.indexOf(a);
                      this.models.splice(r, 1), this.length--, delete this._byId[a.cid];
                      var s = this.modelId(a.attributes);
                      null != s && delete this._byId[s],
                        t.silent || ((t.index = r), a.trigger("remove", a, this, t)),
                        n.push(a),
                        this._removeReference(a, t);
                    }
                  }
                  return n;
                },
                _isModel: function (e) {
                  return e instanceof f;
                },
                _addReference: function (e, t) {
                  this._byId[e.cid] = e;
                  var n = this.modelId(e.attributes);
                  null != n && (this._byId[n] = e), e.on("all", this._onModelEvent, this);
                },
                _removeReference: function (e, t) {
                  delete this._byId[e.cid];
                  var n = this.modelId(e.attributes);
                  null != n && delete this._byId[n], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
                },
                _onModelEvent: function (e, t, n, i) {
                  if (t) {
                    if (("add" === e || "remove" === e) && n !== this) return;
                    if (("destroy" === e && this.remove(t, i), "change" === e)) {
                      var a = this.modelId(t.previousAttributes()),
                        r = this.modelId(t.attributes);
                      a !== r && (null != a && delete this._byId[a], null != r && (this._byId[r] = t));
                    }
                  }
                  this.trigger.apply(this, arguments);
                }
              });
              var w = "function" == typeof Symbol && Symbol.iterator;
              w && (m.prototype[w] = m.prototype.values);
              var x = function (e, t) {
                  (this._collection = e), (this._kind = t), (this._index = 0);
                },
                A = 1,
                S = 2,
                z = 3;
              w &&
                (x.prototype[w] = function () {
                  return this;
                }),
                (x.prototype.next = function () {
                  if (this._collection) {
                    if (this._index < this._collection.length) {
                      var e,
                        t = this._collection.at(this._index);
                      if ((this._index++, this._kind === A)) e = t;
                      else {
                        var n = this._collection.modelId(t.attributes);
                        e = this._kind === S ? n : [n, t];
                      }
                      return { value: e, done: !1 };
                    }
                    this._collection = void 0;
                  }
                  return { value: void 0, done: !0 };
                });
              var T = (t.View = function (e) {
                  (this.cid = n.uniqueId("view")),
                    this.preinitialize.apply(this, arguments),
                    n.extend(this, n.pick(e, q)),
                    this._ensureElement(),
                    this.initialize.apply(this, arguments);
                }),
                P = /^(\S+)\s*(.*)$/,
                q = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
              n.extend(T.prototype, o, {
                tagName: "div",
                $: function (e) {
                  return this.$el.find(e);
                },
                preinitialize: function () {},
                initialize: function () {},
                render: function () {
                  return this;
                },
                remove: function () {
                  return this._removeElement(), this.stopListening(), this;
                },
                _removeElement: function () {
                  this.$el.remove();
                },
                setElement: function (e) {
                  return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this;
                },
                _setElement: function (e) {
                  (this.$el = e instanceof t.$ ? e : t.$(e)), (this.el = this.$el[0]);
                },
                delegateEvents: function (e) {
                  if ((e || (e = n.result(this, "events")), !e)) return this;
                  for (var t in (this.undelegateEvents(), e)) {
                    var i = e[t];
                    if ((n.isFunction(i) || (i = this[i]), i)) {
                      var a = t.match(P);
                      this.delegate(a[1], a[2], i.bind(this));
                    }
                  }
                  return this;
                },
                delegate: function (e, t, n) {
                  return this.$el.on(e + ".delegateEvents" + this.cid, t, n), this;
                },
                undelegateEvents: function () {
                  return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
                },
                undelegate: function (e, t, n) {
                  return this.$el.off(e + ".delegateEvents" + this.cid, t, n), this;
                },
                _createElement: function (e) {
                  return document.createElement(e);
                },
                _ensureElement: function () {
                  if (this.el) this.setElement(n.result(this, "el"));
                  else {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")),
                      this.className && (e.class = n.result(this, "className")),
                      this.setElement(this._createElement(n.result(this, "tagName"))),
                      this._setAttributes(e);
                  }
                },
                _setAttributes: function (e) {
                  this.$el.attr(e);
                }
              });
              var j = function (e, t, i, a) {
                  n.each(i, function (n, i) {
                    t[i] &&
                      (e.prototype[i] = (function (e, t, n, i) {
                        switch (t) {
                          case 1:
                            return function () {
                              return e[n](this[i]);
                            };
                          case 2:
                            return function (t) {
                              return e[n](this[i], t);
                            };
                          case 3:
                            return function (t, a) {
                              return e[n](this[i], E(t, this), a);
                            };
                          case 4:
                            return function (t, a, r) {
                              return e[n](this[i], E(t, this), a, r);
                            };
                          default:
                            return function () {
                              var t = r.call(arguments);
                              return t.unshift(this[i]), e[n].apply(e, t);
                            };
                        }
                      })(t, n, i, a));
                  });
                },
                E = function (e, t) {
                  return n.isFunction(e)
                    ? e
                    : n.isObject(e) && !t._isModel(e)
                    ? C(e)
                    : n.isString(e)
                    ? function (t) {
                        return t.get(e);
                      }
                    : e;
                },
                C = function (e) {
                  var t = n.matches(e);
                  return function (e) {
                    return t(e.attributes);
                  };
                };
              n.each(
                [
                  [
                    m,
                    {
                      forEach: 3,
                      each: 3,
                      map: 3,
                      collect: 3,
                      reduce: 0,
                      foldl: 0,
                      inject: 0,
                      reduceRight: 0,
                      foldr: 0,
                      find: 3,
                      detect: 3,
                      filter: 3,
                      select: 3,
                      reject: 3,
                      every: 3,
                      all: 3,
                      some: 3,
                      any: 3,
                      include: 3,
                      includes: 3,
                      contains: 3,
                      invoke: 0,
                      max: 3,
                      min: 3,
                      toArray: 1,
                      size: 1,
                      first: 3,
                      head: 3,
                      take: 3,
                      initial: 3,
                      rest: 3,
                      tail: 3,
                      drop: 3,
                      last: 3,
                      without: 0,
                      difference: 0,
                      indexOf: 3,
                      shuffle: 1,
                      lastIndexOf: 3,
                      isEmpty: 1,
                      chain: 1,
                      sample: 3,
                      partition: 3,
                      groupBy: 3,
                      countBy: 3,
                      sortBy: 3,
                      indexBy: 3,
                      findIndex: 3,
                      findLastIndex: 3
                    },
                    "models"
                  ],
                  [f, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes"]
                ],
                function (e) {
                  var t = e[0],
                    i = e[1],
                    a = e[2];
                  (t.mixin = function (e) {
                    var i = n.reduce(
                      n.functions(e),
                      function (e, t) {
                        return (e[t] = 0), e;
                      },
                      {}
                    );
                    j(t, e, i, a);
                  }),
                    j(t, n, i, a);
                }
              ),
                (t.sync = function (e, i, a) {
                  var r = I[e];
                  n.defaults(a || (a = {}), { emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON });
                  var s = { type: r, dataType: "json" };
                  if (
                    (a.url || (s.url = n.result(i, "url") || H()),
                    null != a.data ||
                      !i ||
                      ("create" !== e && "update" !== e && "patch" !== e) ||
                      ((s.contentType = "application/json"), (s.data = JSON.stringify(a.attrs || i.toJSON(a)))),
                    a.emulateJSON && ((s.contentType = "application/x-www-form-urlencoded"), (s.data = s.data ? { model: s.data } : {})),
                    a.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r))
                  ) {
                    (s.type = "POST"), a.emulateJSON && (s.data._method = r);
                    var o = a.beforeSend;
                    a.beforeSend = function (e) {
                      if ((e.setRequestHeader("X-HTTP-Method-Override", r), o)) return o.apply(this, arguments);
                    };
                  }
                  "GET" === s.type || a.emulateJSON || (s.processData = !1);
                  var l = a.error;
                  a.error = function (e, t, n) {
                    (a.textStatus = t), (a.errorThrown = n), l && l.call(a.context, e, t, n);
                  };
                  var c = (a.xhr = t.ajax(n.extend(s, a)));
                  return i.trigger("request", i, c, a), c;
                });
              var I = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
              t.ajax = function () {
                return t.$.ajax.apply(t.$, arguments);
              };
              var B = (t.Router = function (e) {
                  e || (e = {}),
                    this.preinitialize.apply(this, arguments),
                    e.routes && (this.routes = e.routes),
                    this._bindRoutes(),
                    this.initialize.apply(this, arguments);
                }),
                M = /\((.*?)\)/g,
                O = /(\(\?)?:\w+/g,
                D = /\*\w+/g,
                U = /[\-{}\[\]+?.,\\\^$|#\s]/g;
              n.extend(B.prototype, o, {
                preinitialize: function () {},
                initialize: function () {},
                route: function (e, i, a) {
                  n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && ((a = i), (i = "")), a || (a = this[i]);
                  var r = this;
                  return (
                    t.history.route(e, function (n) {
                      var s = r._extractParameters(e, n);
                      !1 !== r.execute(a, s, i) &&
                        (r.trigger.apply(r, ["route:" + i].concat(s)), r.trigger("route", i, s), t.history.trigger("route", r, i, s));
                    }),
                    this
                  );
                },
                execute: function (e, t, n) {
                  e && e.apply(this, t);
                },
                navigate: function (e, n) {
                  return t.history.navigate(e, n), this;
                },
                _bindRoutes: function () {
                  if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var e, t = n.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e]);
                  }
                },
                _routeToRegExp: function (e) {
                  return (
                    (e = e
                      .replace(U, "\\$&")
                      .replace(M, "(?:$1)?")
                      .replace(O, function (e, t) {
                        return t ? e : "([^/?]+)";
                      })
                      .replace(D, "([^?]*?)")),
                    new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                  );
                },
                _extractParameters: function (e, t) {
                  var i = e.exec(t).slice(1);
                  return n.map(i, function (e, t) {
                    return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null;
                  });
                }
              });
              var L = (t.History = function () {
                  (this.handlers = []),
                    (this.checkUrl = this.checkUrl.bind(this)),
                    "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
                }),
                N = /^[#\/]|\s+$/g,
                R = /^\/+|\/+$/g,
                W = /#.*$/;
              (L.started = !1),
                n.extend(L.prototype, o, {
                  interval: 50,
                  atRoot: function () {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
                  },
                  matchRoot: function () {
                    return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
                  },
                  decodeFragment: function (e) {
                    return decodeURI(e.replace(/%25/g, "%2525"));
                  },
                  getSearch: function () {
                    var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
                    return e ? e[0] : "";
                  },
                  getHash: function (e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : "";
                  },
                  getPath: function () {
                    var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                    return "/" === e.charAt(0) ? e.slice(1) : e;
                  },
                  getFragment: function (e) {
                    return (
                      null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(N, "")
                    );
                  },
                  start: function (e) {
                    if (L.started) throw new Error("Backbone.history has already been started");
                    if (
                      ((L.started = !0),
                      (this.options = n.extend({ root: "/" }, this.options, e)),
                      (this.root = this.options.root),
                      (this._wantsHashChange = !1 !== this.options.hashChange),
                      (this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7)),
                      (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                      (this._wantsPushState = !!this.options.pushState),
                      (this._hasPushState = !(!this.history || !this.history.pushState)),
                      (this._usePushState = this._wantsPushState && this._hasPushState),
                      (this.fragment = this.getFragment()),
                      (this.root = ("/" + this.root + "/").replace(R, "/")),
                      this._wantsHashChange && this._wantsPushState)
                    ) {
                      if (!this._hasPushState && !this.atRoot()) {
                        var t = this.root.slice(0, -1) || "/";
                        return this.location.replace(t + "#" + this.getPath()), !0;
                      }
                      this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
                    }
                    if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                      (this.iframe = document.createElement("iframe")),
                        (this.iframe.src = "javascript:0"),
                        (this.iframe.style.display = "none"),
                        (this.iframe.tabIndex = -1);
                      var i = document.body,
                        a = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                      a.document.open(), a.document.close(), (a.location.hash = "#" + this.fragment);
                    }
                    var r =
                      window.addEventListener ||
                      function (e, t) {
                        return attachEvent("on" + e, t);
                      };
                    if (
                      (this._usePushState
                        ? r("popstate", this.checkUrl, !1)
                        : this._useHashChange && !this.iframe
                        ? r("hashchange", this.checkUrl, !1)
                        : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                      !this.options.silent)
                    )
                      return this.loadUrl();
                  },
                  stop: function () {
                    var e =
                      window.removeEventListener ||
                      function (e, t) {
                        return detachEvent("on" + e, t);
                      };
                    this._usePushState
                      ? e("popstate", this.checkUrl, !1)
                      : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1),
                      this.iframe && (document.body.removeChild(this.iframe), (this.iframe = null)),
                      this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                      (L.started = !1);
                  },
                  route: function (e, t) {
                    this.handlers.unshift({ route: e, callback: t });
                  },
                  checkUrl: function (e) {
                    var t = this.getFragment();
                    if ((t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment))
                      return !1;
                    this.iframe && this.navigate(t), this.loadUrl();
                  },
                  loadUrl: function (e) {
                    return (
                      !!this.matchRoot() &&
                      ((e = this.fragment = this.getFragment(e)),
                      n.some(this.handlers, function (t) {
                        if (t.route.test(e)) return t.callback(e), !0;
                      }))
                    );
                  },
                  navigate: function (e, t) {
                    if (!L.started) return !1;
                    (t && !0 !== t) || (t = { trigger: !!t }), (e = this.getFragment(e || ""));
                    var n = this.root;
                    ("" !== e && "?" !== e.charAt(0)) || (n = n.slice(0, -1) || "/");
                    var i = n + e;
                    e = e.replace(W, "");
                    var a = this.decodeFragment(e);
                    if (this.fragment !== a) {
                      if (((this.fragment = a), this._usePushState))
                        this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                      else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        if ((this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow))) {
                          var r = this.iframe.contentWindow;
                          t.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, e, t.replace);
                        }
                      }
                      return t.trigger ? this.loadUrl(e) : void 0;
                    }
                  },
                  _updateHash: function (e, t, n) {
                    if (n) {
                      var i = e.href.replace(/(javascript:|#).*$/, "");
                      e.replace(i + "#" + t);
                    } else e.hash = "#" + t;
                  }
                }),
                (t.history = new L());
              f.extend =
                m.extend =
                B.extend =
                T.extend =
                L.extend =
                  function (e, t) {
                    var i,
                      a = this;
                    return (
                      (i =
                        e && n.has(e, "constructor")
                          ? e.constructor
                          : function () {
                              return a.apply(this, arguments);
                            }),
                      n.extend(i, a, t),
                      (i.prototype = n.create(a.prototype, e)),
                      (i.prototype.constructor = i),
                      (i.__super__ = a.prototype),
                      i
                    );
                  };
              var H = function () {
                  throw new Error('A "url" property or function must be specified');
                },
                F = function (e, t) {
                  var n = t.error;
                  t.error = function (i) {
                    n && n.call(t.context, e, i, t), e.trigger("error", e, i, t);
                  };
                };
              return t;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      { jquery: "jquery", underscore: 67 }
    ],
    14: [
      function (e, t, n) {
        t.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
        };
      },
      {}
    ],
    15: [
      function (e, t, n) {
        var i = e("./_wks")("unscopables"),
          a = Array.prototype;
        null == a[i] && e("./_hide")(a, i, {}),
          (t.exports = function (e) {
            a[i][e] = !0;
          });
      },
      { "./_hide": 30, "./_wks": 58 }
    ],
    16: [
      function (e, t, n) {
        var i = e("./_is-object");
        t.exports = function (e) {
          if (!i(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      { "./_is-object": 34 }
    ],
    17: [
      function (e, t, n) {
        var i = e("./_to-iobject"),
          a = e("./_to-length"),
          r = e("./_to-absolute-index");
        t.exports = function (e) {
          return function (t, n, s) {
            var o,
              l = i(t),
              c = a(l.length),
              _ = r(s, c);
            if (e && n != n) {
              for (; c > _; ) if ((o = l[_++]) != o) return !0;
            } else for (; c > _; _++) if ((e || _ in l) && l[_] === n) return e || _ || 0;
            return !e && -1;
          };
        };
      },
      { "./_to-absolute-index": 51, "./_to-iobject": 53, "./_to-length": 54 }
    ],
    18: [
      function (e, t, n) {
        var i = {}.toString;
        t.exports = function (e) {
          return i.call(e).slice(8, -1);
        };
      },
      {}
    ],
    19: [
      function (e, t, n) {
        var i = (t.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = i);
      },
      {}
    ],
    20: [
      function (e, t, n) {
        var i = e("./_a-function");
        t.exports = function (e, t, n) {
          if ((i(e), void 0 === t)) return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, i) {
                return e.call(t, n, i);
              };
            case 3:
              return function (n, i, a) {
                return e.call(t, n, i, a);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      { "./_a-function": 14 }
    ],
    21: [
      function (e, t, n) {
        t.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      {}
    ],
    22: [
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
      { "./_fails": 26 }
    ],
    23: [
      function (e, t, n) {
        var i = e("./_is-object"),
          a = e("./_global").document,
          r = i(a) && i(a.createElement);
        t.exports = function (e) {
          return r ? a.createElement(e) : {};
        };
      },
      { "./_global": 28, "./_is-object": 34 }
    ],
    24: [
      function (e, t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      {}
    ],
    25: [
      function (e, t, n) {
        var i = e("./_global"),
          a = e("./_core"),
          r = e("./_hide"),
          s = e("./_redefine"),
          o = e("./_ctx"),
          l = function (e, t, n) {
            var c,
              _,
              u,
              d,
              b = e & l.F,
              p = e & l.G,
              g = e & l.S,
              h = e & l.P,
              f = e & l.B,
              m = p ? i : g ? i[t] || (i[t] = {}) : (i[t] || {}).prototype,
              v = p ? a : a[t] || (a[t] = {}),
              k = v.prototype || (v.prototype = {});
            for (c in (p && (n = t), n))
              (u = ((_ = !b && m && void 0 !== m[c]) ? m : n)[c]),
                (d = f && _ ? o(u, i) : h && "function" == typeof u ? o(Function.call, u) : u),
                m && s(m, c, u, e & l.U),
                v[c] != u && r(v, c, d),
                h && k[c] != u && (k[c] = u);
          };
        (i.core = a), (l.F = 1), (l.G = 2), (l.S = 4), (l.P = 8), (l.B = 16), (l.W = 32), (l.U = 64), (l.R = 128), (t.exports = l);
      },
      { "./_core": 19, "./_ctx": 20, "./_global": 28, "./_hide": 30, "./_redefine": 47 }
    ],
    26: [
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
    27: [
      function (e, t, n) {
        t.exports = e("./_shared")("native-function-to-string", Function.toString);
      },
      { "./_shared": 50 }
    ],
    28: [
      function (e, t, n) {
        var i = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = i);
      },
      {}
    ],
    29: [
      function (e, t, n) {
        var i = {}.hasOwnProperty;
        t.exports = function (e, t) {
          return i.call(e, t);
        };
      },
      {}
    ],
    30: [
      function (e, t, n) {
        var i = e("./_object-dp"),
          a = e("./_property-desc");
        t.exports = e("./_descriptors")
          ? function (e, t, n) {
              return i.f(e, t, a(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      { "./_descriptors": 22, "./_object-dp": 41, "./_property-desc": 46 }
    ],
    31: [
      function (e, t, n) {
        var i = e("./_global").document;
        t.exports = i && i.documentElement;
      },
      { "./_global": 28 }
    ],
    32: [
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
      { "./_descriptors": 22, "./_dom-create": 23, "./_fails": 26 }
    ],
    33: [
      function (e, t, n) {
        var i = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == i(e) ? e.split("") : Object(e);
            };
      },
      { "./_cof": 18 }
    ],
    34: [
      function (e, t, n) {
        t.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      {}
    ],
    35: [
      function (e, t, n) {
        "use strict";
        var i = e("./_object-create"),
          a = e("./_property-desc"),
          r = e("./_set-to-string-tag"),
          s = {};
        e("./_hide")(s, e("./_wks")("iterator"), function () {
          return this;
        }),
          (t.exports = function (e, t, n) {
            (e.prototype = i(s, { next: a(1, n) })), r(e, t + " Iterator");
          });
      },
      { "./_hide": 30, "./_object-create": 40, "./_property-desc": 46, "./_set-to-string-tag": 48, "./_wks": 58 }
    ],
    36: [
      function (e, t, n) {
        "use strict";
        var i = e("./_library"),
          a = e("./_export"),
          r = e("./_redefine"),
          s = e("./_hide"),
          o = e("./_iterators"),
          l = e("./_iter-create"),
          c = e("./_set-to-string-tag"),
          _ = e("./_object-gpo"),
          u = e("./_wks")("iterator"),
          d = !([].keys && "next" in [].keys()),
          b = "keys",
          p = "values",
          g = function () {
            return this;
          };
        t.exports = function (e, t, n, h, f, m, v) {
          l(n, t, h);
          var k,
            y,
            w,
            x = function (e) {
              if (!d && e in T) return T[e];
              switch (e) {
                case b:
                case p:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this, e);
              };
            },
            A = t + " Iterator",
            S = f == p,
            z = !1,
            T = e.prototype,
            P = T[u] || T["@@iterator"] || (f && T[f]),
            q = P || x(f),
            j = f ? (S ? x("entries") : q) : void 0,
            E = ("Array" == t && T.entries) || P;
          if (
            (E && (w = _(E.call(new e()))) !== Object.prototype && w.next && (c(w, A, !0), i || "function" == typeof w[u] || s(w, u, g)),
            S &&
              P &&
              P.name !== p &&
              ((z = !0),
              (q = function () {
                return P.call(this);
              })),
            (i && !v) || (!d && !z && T[u]) || s(T, u, q),
            (o[t] = q),
            (o[A] = g),
            f)
          )
            if (((k = { values: S ? q : x(p), keys: m ? q : x(b), entries: j }), v)) for (y in k) y in T || r(T, y, k[y]);
            else a(a.P + a.F * (d || z), t, k);
          return k;
        };
      },
      {
        "./_export": 25,
        "./_hide": 30,
        "./_iter-create": 35,
        "./_iterators": 38,
        "./_library": 39,
        "./_object-gpo": 43,
        "./_redefine": 47,
        "./_set-to-string-tag": 48,
        "./_wks": 58
      }
    ],
    37: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      {}
    ],
    38: [
      function (e, t, n) {
        t.exports = {};
      },
      {}
    ],
    39: [
      function (e, t, n) {
        t.exports = !1;
      },
      {}
    ],
    40: [
      function (e, t, n) {
        var i = e("./_an-object"),
          a = e("./_object-dps"),
          r = e("./_enum-bug-keys"),
          s = e("./_shared-key")("IE_PROTO"),
          o = function () {},
          l = function () {
            var t,
              n = e("./_dom-create")("iframe"),
              i = r.length;
            for (
              n.style.display = "none",
                e("./_html").appendChild(n),
                n.src = "javascript:",
                (t = n.contentWindow.document).open(),
                t.write("<script>document.F=Object</script>"),
                t.close(),
                l = t.F;
              i--;

            )
              delete l.prototype[r[i]];
            return l();
          };
        t.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e ? ((o.prototype = i(e)), (n = new o()), (o.prototype = null), (n[s] = e)) : (n = l()), void 0 === t ? n : a(n, t)
            );
          };
      },
      { "./_an-object": 16, "./_dom-create": 23, "./_enum-bug-keys": 24, "./_html": 31, "./_object-dps": 42, "./_shared-key": 49 }
    ],
    41: [
      function (e, t, n) {
        var i = e("./_an-object"),
          a = e("./_ie8-dom-define"),
          r = e("./_to-primitive"),
          s = Object.defineProperty;
        n.f = e("./_descriptors")
          ? Object.defineProperty
          : function (e, t, n) {
              if ((i(e), (t = r(t, !0)), i(n), a))
                try {
                  return s(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      { "./_an-object": 16, "./_descriptors": 22, "./_ie8-dom-define": 32, "./_to-primitive": 56 }
    ],
    42: [
      function (e, t, n) {
        var i = e("./_object-dp"),
          a = e("./_an-object"),
          r = e("./_object-keys");
        t.exports = e("./_descriptors")
          ? Object.defineProperties
          : function (e, t) {
              a(e);
              for (var n, s = r(t), o = s.length, l = 0; o > l; ) i.f(e, (n = s[l++]), t[n]);
              return e;
            };
      },
      { "./_an-object": 16, "./_descriptors": 22, "./_object-dp": 41, "./_object-keys": 45 }
    ],
    43: [
      function (e, t, n) {
        var i = e("./_has"),
          a = e("./_to-object"),
          r = e("./_shared-key")("IE_PROTO"),
          s = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = a(e)),
              i(e, r)
                ? e[r]
                : "function" == typeof e.constructor && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? s
                : null
            );
          };
      },
      { "./_has": 29, "./_shared-key": 49, "./_to-object": 55 }
    ],
    44: [
      function (e, t, n) {
        var i = e("./_has"),
          a = e("./_to-iobject"),
          r = e("./_array-includes")(!1),
          s = e("./_shared-key")("IE_PROTO");
        t.exports = function (e, t) {
          var n,
            o = a(e),
            l = 0,
            c = [];
          for (n in o) n != s && i(o, n) && c.push(n);
          for (; t.length > l; ) i(o, (n = t[l++])) && (~r(c, n) || c.push(n));
          return c;
        };
      },
      { "./_array-includes": 17, "./_has": 29, "./_shared-key": 49, "./_to-iobject": 53 }
    ],
    45: [
      function (e, t, n) {
        var i = e("./_object-keys-internal"),
          a = e("./_enum-bug-keys");
        t.exports =
          Object.keys ||
          function (e) {
            return i(e, a);
          };
      },
      { "./_enum-bug-keys": 24, "./_object-keys-internal": 44 }
    ],
    46: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
      },
      {}
    ],
    47: [
      function (e, t, n) {
        var i = e("./_global"),
          a = e("./_hide"),
          r = e("./_has"),
          s = e("./_uid")("src"),
          o = e("./_function-to-string"),
          l = "toString",
          c = ("" + o).split(l);
        (e("./_core").inspectSource = function (e) {
          return o.call(e);
        }),
          (t.exports = function (e, t, n, o) {
            var l = "function" == typeof n;
            l && (r(n, "name") || a(n, "name", t)),
              e[t] !== n &&
                (l && (r(n, s) || a(n, s, e[t] ? "" + e[t] : c.join(String(t)))),
                e === i ? (e[t] = n) : o ? (e[t] ? (e[t] = n) : a(e, t, n)) : (delete e[t], a(e, t, n)));
          })(Function.prototype, l, function () {
            return ("function" == typeof this && this[s]) || o.call(this);
          });
      },
      { "./_core": 19, "./_function-to-string": 27, "./_global": 28, "./_has": 29, "./_hide": 30, "./_uid": 57 }
    ],
    48: [
      function (e, t, n) {
        var i = e("./_object-dp").f,
          a = e("./_has"),
          r = e("./_wks")("toStringTag");
        t.exports = function (e, t, n) {
          e && !a((e = n ? e : e.prototype), r) && i(e, r, { configurable: !0, value: t });
        };
      },
      { "./_has": 29, "./_object-dp": 41, "./_wks": 58 }
    ],
    49: [
      function (e, t, n) {
        var i = e("./_shared")("keys"),
          a = e("./_uid");
        t.exports = function (e) {
          return i[e] || (i[e] = a(e));
        };
      },
      { "./_shared": 50, "./_uid": 57 }
    ],
    50: [
      function (e, t, n) {
        var i = e("./_core"),
          a = e("./_global"),
          r = "__core-js_shared__",
          s = a[r] || (a[r] = {});
        (t.exports = function (e, t) {
          return s[e] || (s[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: i.version,
          mode: e("./_library") ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      { "./_core": 19, "./_global": 28, "./_library": 39 }
    ],
    51: [
      function (e, t, n) {
        var i = e("./_to-integer"),
          a = Math.max,
          r = Math.min;
        t.exports = function (e, t) {
          return (e = i(e)) < 0 ? a(e + t, 0) : r(e, t);
        };
      },
      { "./_to-integer": 52 }
    ],
    52: [
      function (e, t, n) {
        var i = Math.ceil,
          a = Math.floor;
        t.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? a : i)(e);
        };
      },
      {}
    ],
    53: [
      function (e, t, n) {
        var i = e("./_iobject"),
          a = e("./_defined");
        t.exports = function (e) {
          return i(a(e));
        };
      },
      { "./_defined": 21, "./_iobject": 33 }
    ],
    54: [
      function (e, t, n) {
        var i = e("./_to-integer"),
          a = Math.min;
        t.exports = function (e) {
          return e > 0 ? a(i(e), 9007199254740991) : 0;
        };
      },
      { "./_to-integer": 52 }
    ],
    55: [
      function (e, t, n) {
        var i = e("./_defined");
        t.exports = function (e) {
          return Object(i(e));
        };
      },
      { "./_defined": 21 }
    ],
    56: [
      function (e, t, n) {
        var i = e("./_is-object");
        t.exports = function (e, t) {
          if (!i(e)) return e;
          var n, a;
          if (t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
          if ("function" == typeof (n = e.valueOf) && !i((a = n.call(e)))) return a;
          if (!t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { "./_is-object": 34 }
    ],
    57: [
      function (e, t, n) {
        var i = 0,
          a = Math.random();
        t.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + a).toString(36));
        };
      },
      {}
    ],
    58: [
      function (e, t, n) {
        var i = e("./_shared")("wks"),
          a = e("./_uid"),
          r = e("./_global").Symbol,
          s = "function" == typeof r;
        (t.exports = function (e) {
          return i[e] || (i[e] = (s && r[e]) || (s ? r : a)("Symbol." + e));
        }).store = i;
      },
      { "./_global": 28, "./_shared": 50, "./_uid": 57 }
    ],
    59: [
      function (e, t, n) {
        "use strict";
        var i = e("./_add-to-unscopables"),
          a = e("./_iter-step"),
          r = e("./_iterators"),
          s = e("./_to-iobject");
        (t.exports = e("./_iter-define")(
          Array,
          "Array",
          function (e, t) {
            (this._t = s(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              n = this._i++;
            return !e || n >= e.length ? ((this._t = void 0), a(1)) : a(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
          },
          "values"
        )),
          (r.Arguments = r.Array),
          i("keys"),
          i("values"),
          i("entries");
      },
      { "./_add-to-unscopables": 15, "./_iter-define": 36, "./_iter-step": 37, "./_iterators": 38, "./_to-iobject": 53 }
    ],
    60: [
      function (e, t, n) {
        for (
          var i = e("./es6.array.iterator"),
            a = e("./_object-keys"),
            r = e("./_redefine"),
            s = e("./_global"),
            o = e("./_hide"),
            l = e("./_iterators"),
            c = e("./_wks"),
            _ = c("iterator"),
            u = c("toStringTag"),
            d = l.Array,
            b = {
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
            p = a(b),
            g = 0;
          g < p.length;
          g++
        ) {
          var h,
            f = p[g],
            m = b[f],
            v = s[f],
            k = v && v.prototype;
          if (k && (k[_] || o(k, _, d), k[u] || o(k, u, f), (l[f] = d), m)) for (h in i) k[h] || r(k, h, i[h], !0);
        }
      },
      {
        "./_global": 28,
        "./_hide": 30,
        "./_iterators": 38,
        "./_object-keys": 45,
        "./_redefine": 47,
        "./_wks": 58,
        "./es6.array.iterator": 59
      }
    ],
    61: [
      function (e, t, n) {
        "use strict";
        t.exports = e("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 62 }
    ],
    62: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          a = i(e("@babel/runtime/helpers/classCallCheck")),
          r = i(e("@babel/runtime/helpers/createClass")),
          s = i(e("@babel/runtime/helpers/assertThisInitialized")),
          o = i(e("@babel/runtime/helpers/inherits")),
          l = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
          c = i(e("@babel/runtime/helpers/getPrototypeOf"));
        function _(e) {
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
              i = (0, c.default)(e);
            if (t) {
              var a = (0, c.default)(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);
            return (0, l.default)(this, n);
          };
        }
        var u = e("./Messenger"),
          d = e("./ContentTopic"),
          b = e("./chrome"),
          p = (function (e) {
            (0, o.default)(n, e);
            var t = _(n);
            function n() {
              var e;
              (0, a.default)(this, n);
              var i = (e = t.call(this, d))._onMessage.bind((0, s.default)(e));
              return (
                b.runtime.onMessage.addListener(i),
                window.addEventListener("unload", function () {
                  b.runtime.onMessage.removeListener(i);
                }),
                b.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(e._onDisconnect.bind((0, s.default)(e))),
                e
              );
            }
            return (
              (0, r.default)(n, [
                {
                  key: "_onMessage",
                  value: function (e, t, n) {
                    if (!t.tab && e.publish) {
                      var i = this._getTopic(e.publish);
                      i && i.publish(e.message, n);
                    }
                    return !0;
                  }
                },
                {
                  key: "_onDisconnect",
                  value: function () {
                    var e = this._getTopic("Background:closed");
                    e && e.publish();
                  }
                },
                {
                  key: "publish",
                  value: function (e, t, n) {
                    var i = 10;
                    !(function a() {
                      b.runtime.sendMessage({ publish: e, message: t }, function (e) {
                        var t = b.runtime.lastError;
                        t && "Could not establish connection. Receiving end does not exist." === t.message
                          ? (i -= 1) && setTimeout(a, 50)
                          : "function" == typeof n && n(e);
                      });
                    })();
                  }
                }
              ]),
              n
            );
          })(u);
        t.exports = p;
      },
      {
        "./ContentTopic": 63,
        "./Messenger": 64,
        "./chrome": 66,
        "@babel/runtime/helpers/assertThisInitialized": 4,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/getPrototypeOf": 7,
        "@babel/runtime/helpers/inherits": 8,
        "@babel/runtime/helpers/interopRequireDefault": 9,
        "@babel/runtime/helpers/possibleConstructorReturn": 10
      }
    ],
    63: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          a = i(e("@babel/runtime/helpers/classCallCheck")),
          r = i(e("@babel/runtime/helpers/inherits")),
          s = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
          o = i(e("@babel/runtime/helpers/getPrototypeOf"));
        function l(e) {
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
              i = (0, o.default)(e);
            if (t) {
              var a = (0, o.default)(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);
            return (0, s.default)(this, n);
          };
        }
        var c = e("./Topic"),
          _ = e("./chrome"),
          u = (function (e) {
            (0, r.default)(n, e);
            var t = l(n);
            function n(e) {
              var i;
              return (0, a.default)(this, n), (i = t.call(this, e)), _.runtime.sendMessage({ subscribe: e }), i;
            }
            return n;
          })(c);
        t.exports = u;
      },
      {
        "./Topic": 65,
        "./chrome": 66,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/getPrototypeOf": 7,
        "@babel/runtime/helpers/inherits": 8,
        "@babel/runtime/helpers/interopRequireDefault": 9,
        "@babel/runtime/helpers/possibleConstructorReturn": 10
      }
    ],
    64: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          a = i(e("@babel/runtime/helpers/classCallCheck")),
          r = i(e("@babel/runtime/helpers/createClass")),
          s = (function () {
            function e(t) {
              (0, a.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, r.default)(
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
                    value: function (e, t, n, i) {
                      var a = this._getTopic(e);
                      a && a.publish(t, n, i);
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
        t.exports = s;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/interopRequireDefault": 9
      }
    ],
    65: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          a = i(e("@babel/runtime/helpers/classCallCheck")),
          r = i(e("@babel/runtime/helpers/createClass")),
          s = (function () {
            function e(t) {
              (0, a.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, r.default)(e, [
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
        t.exports = s;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/interopRequireDefault": 9
      }
    ],
    66: [
      function (e, t, n) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    67: [
      function (e, t, n) {
        (function (e) {
          (function () {
            !(function (e, i) {
              "object" == typeof n && void 0 !== t
                ? (t.exports = i())
                : "function" == typeof define && define.amd
                ? define("underscore", i)
                : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
                  (function () {
                    var t = e._,
                      n = (e._ = i());
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
                i = Array.prototype,
                a = Object.prototype,
                r = "undefined" != typeof Symbol ? Symbol.prototype : null,
                s = i.push,
                o = i.slice,
                l = a.toString,
                c = a.hasOwnProperty,
                _ = "undefined" != typeof ArrayBuffer,
                u = "undefined" != typeof DataView,
                d = Array.isArray,
                b = Object.keys,
                p = Object.create,
                g = _ && ArrayBuffer.isView,
                h = isNaN,
                f = isFinite,
                m = !{ toString: null }.propertyIsEnumerable("toString"),
                v = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                k = Math.pow(2, 53) - 1;
              function y(e, t) {
                return (
                  (t = null == t ? e.length - 1 : +t),
                  function () {
                    for (var n = Math.max(arguments.length - t, 0), i = Array(n), a = 0; a < n; a++) i[a] = arguments[a + t];
                    switch (t) {
                      case 0:
                        return e.call(this, i);
                      case 1:
                        return e.call(this, arguments[0], i);
                      case 2:
                        return e.call(this, arguments[0], arguments[1], i);
                    }
                    var r = Array(t + 1);
                    for (a = 0; a < t; a++) r[a] = arguments[a];
                    return (r[t] = i), e.apply(this, r);
                  }
                );
              }
              function w(e) {
                var t = typeof e;
                return "function" === t || ("object" === t && !!e);
              }
              function x(e) {
                return void 0 === e;
              }
              function A(e) {
                return !0 === e || !1 === e || "[object Boolean]" === l.call(e);
              }
              function S(e) {
                var t = "[object " + e + "]";
                return function (e) {
                  return l.call(e) === t;
                };
              }
              var z = S("String"),
                T = S("Number"),
                P = S("Date"),
                q = S("RegExp"),
                j = S("Error"),
                E = S("Symbol"),
                C = S("ArrayBuffer"),
                I = S("Function"),
                B = n.document && n.document.childNodes;
              "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                "function" != typeof B &&
                (I = function (e) {
                  return "function" == typeof e || !1;
                });
              var M = I,
                O = S("Object"),
                D = u && O(new DataView(new ArrayBuffer(8))),
                U = "undefined" != typeof Map && O(new Map()),
                L = S("DataView");
              var N = D
                  ? function (e) {
                      return null != e && M(e.getInt8) && C(e.buffer);
                    }
                  : L,
                R = d || S("Array");
              function W(e, t) {
                return null != e && c.call(e, t);
              }
              var H = S("Arguments");
              !(function () {
                H(arguments) ||
                  (H = function (e) {
                    return W(e, "callee");
                  });
              })();
              var F = H;
              function G(e) {
                return T(e) && h(e);
              }
              function V(e) {
                return function () {
                  return e;
                };
              }
              function $(e) {
                return function (t) {
                  var n = e(t);
                  return "number" == typeof n && n >= 0 && n <= k;
                };
              }
              function Q(e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              }
              var Z = Q("byteLength"),
                K = $(Z),
                J = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
              var Y = _
                  ? function (e) {
                      return g ? g(e) && !N(e) : K(e) && J.test(l.call(e));
                    }
                  : V(!1),
                X = Q("length");
              function ee(e, t) {
                t = (function (e) {
                  for (var t = {}, n = e.length, i = 0; i < n; ++i) t[e[i]] = !0;
                  return {
                    contains: function (e) {
                      return t[e];
                    },
                    push: function (n) {
                      return (t[n] = !0), e.push(n);
                    }
                  };
                })(t);
                var n = v.length,
                  i = e.constructor,
                  r = (M(i) && i.prototype) || a,
                  s = "constructor";
                for (W(e, s) && !t.contains(s) && t.push(s); n--; ) (s = v[n]) in e && e[s] !== r[s] && !t.contains(s) && t.push(s);
              }
              function te(e) {
                if (!w(e)) return [];
                if (b) return b(e);
                var t = [];
                for (var n in e) W(e, n) && t.push(n);
                return m && ee(e, t), t;
              }
              function ne(e, t) {
                var n = te(t),
                  i = n.length;
                if (null == e) return !i;
                for (var a = Object(e), r = 0; r < i; r++) {
                  var s = n[r];
                  if (t[s] !== a[s] || !(s in a)) return !1;
                }
                return !0;
              }
              function ie(e) {
                return e instanceof ie ? e : this instanceof ie ? void (this._wrapped = e) : new ie(e);
              }
              function ae(e) {
                return new Uint8Array(e.buffer || e, e.byteOffset || 0, Z(e));
              }
              (ie.VERSION = t),
                (ie.prototype.value = function () {
                  return this._wrapped;
                }),
                (ie.prototype.valueOf = ie.prototype.toJSON = ie.prototype.value),
                (ie.prototype.toString = function () {
                  return String(this._wrapped);
                });
              var re = "[object DataView]";
              function se(e, t, n, i) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var a = typeof e;
                return ("function" === a || "object" === a || "object" == typeof t) && oe(e, t, n, i);
              }
              function oe(e, t, n, i) {
                e instanceof ie && (e = e._wrapped), t instanceof ie && (t = t._wrapped);
                var a = l.call(e);
                if (a !== l.call(t)) return !1;
                if (D && "[object Object]" == a && N(e)) {
                  if (!N(t)) return !1;
                  a = re;
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
                    return r.valueOf.call(e) === r.valueOf.call(t);
                  case "[object ArrayBuffer]":
                  case re:
                    return oe(ae(e), ae(t), n, i);
                }
                var s = "[object Array]" === a;
                if (!s && Y(e)) {
                  if (Z(e) !== Z(t)) return !1;
                  if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
                  s = !0;
                }
                if (!s) {
                  if ("object" != typeof e || "object" != typeof t) return !1;
                  var o = e.constructor,
                    c = t.constructor;
                  if (o !== c && !(M(o) && o instanceof o && M(c) && c instanceof c) && "constructor" in e && "constructor" in t) return !1;
                }
                i = i || [];
                for (var _ = (n = n || []).length; _--; ) if (n[_] === e) return i[_] === t;
                if ((n.push(e), i.push(t), s)) {
                  if ((_ = e.length) !== t.length) return !1;
                  for (; _--; ) if (!se(e[_], t[_], n, i)) return !1;
                } else {
                  var u,
                    d = te(e);
                  if (((_ = d.length), te(t).length !== _)) return !1;
                  for (; _--; ) if (!W(t, (u = d[_])) || !se(e[u], t[u], n, i)) return !1;
                }
                return n.pop(), i.pop(), !0;
              }
              function le(e) {
                if (!w(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return m && ee(e, t), t;
              }
              function ce(e) {
                var t = X(e);
                return function (n) {
                  if (null == n) return !1;
                  var i = le(n);
                  if (X(i)) return !1;
                  for (var a = 0; a < t; a++) if (!M(n[e[a]])) return !1;
                  return e !== pe || !M(n[_e]);
                };
              }
              var _e = "forEach",
                ue = ["clear", "delete"],
                de = ["get", "has", "set"],
                be = ue.concat(_e, de),
                pe = ue.concat(de),
                ge = ["add"].concat(ue, _e, "has"),
                he = U ? ce(be) : S("Map"),
                fe = U ? ce(pe) : S("WeakMap"),
                me = U ? ce(ge) : S("Set"),
                ve = S("WeakSet");
              function ke(e) {
                for (var t = te(e), n = t.length, i = Array(n), a = 0; a < n; a++) i[a] = e[t[a]];
                return i;
              }
              function ye(e) {
                for (var t = {}, n = te(e), i = 0, a = n.length; i < a; i++) t[e[n[i]]] = n[i];
                return t;
              }
              function we(e) {
                var t = [];
                for (var n in e) M(e[n]) && t.push(n);
                return t.sort();
              }
              function xe(e, t) {
                return function (n) {
                  var i = arguments.length;
                  if ((t && (n = Object(n)), i < 2 || null == n)) return n;
                  for (var a = 1; a < i; a++)
                    for (var r = arguments[a], s = e(r), o = s.length, l = 0; l < o; l++) {
                      var c = s[l];
                      (t && void 0 !== n[c]) || (n[c] = r[c]);
                    }
                  return n;
                };
              }
              var Ae = xe(le),
                Se = xe(te),
                ze = xe(le, !0);
              function Te(e) {
                if (!w(e)) return {};
                if (p) return p(e);
                var t = function () {};
                t.prototype = e;
                var n = new t();
                return (t.prototype = null), n;
              }
              function Pe(e) {
                return w(e) ? (R(e) ? e.slice() : Ae({}, e)) : e;
              }
              function qe(e) {
                return R(e) ? e : [e];
              }
              function je(e) {
                return ie.toPath(e);
              }
              function Ee(e, t) {
                for (var n = t.length, i = 0; i < n; i++) {
                  if (null == e) return;
                  e = e[t[i]];
                }
                return n ? e : void 0;
              }
              function Ce(e, t, n) {
                var i = Ee(e, je(t));
                return x(i) ? n : i;
              }
              function Ie(e) {
                return e;
              }
              function Be(e) {
                return (
                  (e = Se({}, e)),
                  function (t) {
                    return ne(t, e);
                  }
                );
              }
              function Me(e) {
                return (
                  (e = je(e)),
                  function (t) {
                    return Ee(t, e);
                  }
                );
              }
              function Oe(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function (n) {
                      return e.call(t, n);
                    };
                  case 3:
                    return function (n, i, a) {
                      return e.call(t, n, i, a);
                    };
                  case 4:
                    return function (n, i, a, r) {
                      return e.call(t, n, i, a, r);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              }
              function De(e, t, n) {
                return null == e ? Ie : M(e) ? Oe(e, t, n) : w(e) && !R(e) ? Be(e) : Me(e);
              }
              function Ue(e, t) {
                return De(e, t, 1 / 0);
              }
              function Le(e, t, n) {
                return ie.iteratee !== Ue ? ie.iteratee(e, t) : De(e, t, n);
              }
              function Ne() {}
              function Re(e, t) {
                return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
              }
              (ie.toPath = qe), (ie.iteratee = Ue);
              var We =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              function He(e) {
                var t = function (t) {
                    return e[t];
                  },
                  n = "(?:" + te(e).join("|") + ")",
                  i = RegExp(n),
                  a = RegExp(n, "g");
                return function (e) {
                  return (e = null == e ? "" : "" + e), i.test(e) ? e.replace(a, t) : e;
                };
              }
              var Fe = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                Ge = He(Fe),
                Ve = He(ye(Fe)),
                $e = (ie.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
                Qe = /(.)^/,
                Ze = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Ke = /\\|'|\r|\n|\u2028|\u2029/g;
              function Je(e) {
                return "\\" + Ze[e];
              }
              var Ye = /^\s*(\w|\$)+\s*$/;
              var Xe = 0;
              function et(e, t, n, i, a) {
                if (!(i instanceof t)) return e.apply(n, a);
                var r = Te(e.prototype),
                  s = e.apply(r, a);
                return w(s) ? s : r;
              }
              var tt = y(function (e, t) {
                var n = tt.placeholder,
                  i = function () {
                    for (var a = 0, r = t.length, s = Array(r), o = 0; o < r; o++) s[o] = t[o] === n ? arguments[a++] : t[o];
                    for (; a < arguments.length; ) s.push(arguments[a++]);
                    return et(e, i, this, this, s);
                  };
                return i;
              });
              tt.placeholder = ie;
              var nt = y(function (e, t, n) {
                  if (!M(e)) throw new TypeError("Bind must be called on a function");
                  var i = y(function (a) {
                    return et(e, i, t, this, n.concat(a));
                  });
                  return i;
                }),
                it = $(X);
              function at(e, t, n, i) {
                if (((i = i || []), t || 0 === t)) {
                  if (t <= 0) return i.concat(e);
                } else t = 1 / 0;
                for (var a = i.length, r = 0, s = X(e); r < s; r++) {
                  var o = e[r];
                  if (it(o) && (R(o) || F(o)))
                    if (t > 1) at(o, t - 1, n, i), (a = i.length);
                    else for (var l = 0, c = o.length; l < c; ) i[a++] = o[l++];
                  else n || (i[a++] = o);
                }
                return i;
              }
              var rt = y(function (e, t) {
                var n = (t = at(t, !1, !1)).length;
                if (n < 1) throw new Error("bindAll must be passed function names");
                for (; n--; ) {
                  var i = t[n];
                  e[i] = nt(e[i], e);
                }
                return e;
              });
              var st = y(function (e, t, n) {
                  return setTimeout(function () {
                    return e.apply(null, n);
                  }, t);
                }),
                ot = tt(st, ie, 1);
              function lt(e) {
                return function () {
                  return !e.apply(this, arguments);
                };
              }
              function ct(e, t) {
                var n;
                return function () {
                  return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                };
              }
              var _t = tt(ct, 2);
              function ut(e, t, n) {
                t = Le(t, n);
                for (var i, a = te(e), r = 0, s = a.length; r < s; r++) if (t(e[(i = a[r])], i, e)) return i;
              }
              function dt(e) {
                return function (t, n, i) {
                  n = Le(n, i);
                  for (var a = X(t), r = e > 0 ? 0 : a - 1; r >= 0 && r < a; r += e) if (n(t[r], r, t)) return r;
                  return -1;
                };
              }
              var bt = dt(1),
                pt = dt(-1);
              function gt(e, t, n, i) {
                for (var a = (n = Le(n, i, 1))(t), r = 0, s = X(e); r < s; ) {
                  var o = Math.floor((r + s) / 2);
                  n(e[o]) < a ? (r = o + 1) : (s = o);
                }
                return r;
              }
              function ht(e, t, n) {
                return function (i, a, r) {
                  var s = 0,
                    l = X(i);
                  if ("number" == typeof r) e > 0 ? (s = r >= 0 ? r : Math.max(r + l, s)) : (l = r >= 0 ? Math.min(r + 1, l) : r + l + 1);
                  else if (n && r && l) return i[(r = n(i, a))] === a ? r : -1;
                  if (a != a) return (r = t(o.call(i, s, l), G)) >= 0 ? r + s : -1;
                  for (r = e > 0 ? s : l - 1; r >= 0 && r < l; r += e) if (i[r] === a) return r;
                  return -1;
                };
              }
              var ft = ht(1, bt, gt),
                mt = ht(-1, pt);
              function vt(e, t, n) {
                var i = (it(e) ? bt : ut)(e, t, n);
                if (void 0 !== i && -1 !== i) return e[i];
              }
              function kt(e, t, n) {
                var i, a;
                if (((t = Oe(t, n)), it(e))) for (i = 0, a = e.length; i < a; i++) t(e[i], i, e);
                else {
                  var r = te(e);
                  for (i = 0, a = r.length; i < a; i++) t(e[r[i]], r[i], e);
                }
                return e;
              }
              function yt(e, t, n) {
                t = Le(t, n);
                for (var i = !it(e) && te(e), a = (i || e).length, r = Array(a), s = 0; s < a; s++) {
                  var o = i ? i[s] : s;
                  r[s] = t(e[o], o, e);
                }
                return r;
              }
              function wt(e) {
                var t = function (t, n, i, a) {
                  var r = !it(t) && te(t),
                    s = (r || t).length,
                    o = e > 0 ? 0 : s - 1;
                  for (a || ((i = t[r ? r[o] : o]), (o += e)); o >= 0 && o < s; o += e) {
                    var l = r ? r[o] : o;
                    i = n(i, t[l], l, t);
                  }
                  return i;
                };
                return function (e, n, i, a) {
                  var r = arguments.length >= 3;
                  return t(e, Oe(n, a, 4), i, r);
                };
              }
              var xt = wt(1),
                At = wt(-1);
              function St(e, t, n) {
                var i = [];
                return (
                  (t = Le(t, n)),
                  kt(e, function (e, n, a) {
                    t(e, n, a) && i.push(e);
                  }),
                  i
                );
              }
              function zt(e, t, n) {
                t = Le(t, n);
                for (var i = !it(e) && te(e), a = (i || e).length, r = 0; r < a; r++) {
                  var s = i ? i[r] : r;
                  if (!t(e[s], s, e)) return !1;
                }
                return !0;
              }
              function Tt(e, t, n) {
                t = Le(t, n);
                for (var i = !it(e) && te(e), a = (i || e).length, r = 0; r < a; r++) {
                  var s = i ? i[r] : r;
                  if (t(e[s], s, e)) return !0;
                }
                return !1;
              }
              function Pt(e, t, n, i) {
                return it(e) || (e = ke(e)), ("number" != typeof n || i) && (n = 0), ft(e, t, n) >= 0;
              }
              var qt = y(function (e, t, n) {
                var i, a;
                return (
                  M(t) ? (a = t) : ((t = je(t)), (i = t.slice(0, -1)), (t = t[t.length - 1])),
                  yt(e, function (e) {
                    var r = a;
                    if (!r) {
                      if ((i && i.length && (e = Ee(e, i)), null == e)) return;
                      r = e[t];
                    }
                    return null == r ? r : r.apply(e, n);
                  })
                );
              });
              function jt(e, t) {
                return yt(e, Me(t));
              }
              function Et(e, t, n) {
                var i,
                  a,
                  r = -1 / 0,
                  s = -1 / 0;
                if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                  for (var o = 0, l = (e = it(e) ? e : ke(e)).length; o < l; o++) null != (i = e[o]) && i > r && (r = i);
                else
                  (t = Le(t, n)),
                    kt(e, function (e, n, i) {
                      ((a = t(e, n, i)) > s || (a === -1 / 0 && r === -1 / 0)) && ((r = e), (s = a));
                    });
                return r;
              }
              function Ct(e, t, n) {
                if (null == t || n) return it(e) || (e = ke(e)), e[Re(e.length - 1)];
                var i = it(e) ? Pe(e) : ke(e),
                  a = X(i);
                t = Math.max(Math.min(t, a), 0);
                for (var r = a - 1, s = 0; s < t; s++) {
                  var o = Re(s, r),
                    l = i[s];
                  (i[s] = i[o]), (i[o] = l);
                }
                return i.slice(0, t);
              }
              function It(e, t) {
                return function (n, i, a) {
                  var r = t ? [[], []] : {};
                  return (
                    (i = Le(i, a)),
                    kt(n, function (t, a) {
                      var s = i(t, a, n);
                      e(r, t, s);
                    }),
                    r
                  );
                };
              }
              var Bt = It(function (e, t, n) {
                  W(e, n) ? e[n].push(t) : (e[n] = [t]);
                }),
                Mt = It(function (e, t, n) {
                  e[n] = t;
                }),
                Ot = It(function (e, t, n) {
                  W(e, n) ? e[n]++ : (e[n] = 1);
                }),
                Dt = It(function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                }, !0),
                Ut = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
              function Lt(e, t, n) {
                return t in n;
              }
              var Nt = y(function (e, t) {
                  var n = {},
                    i = t[0];
                  if (null == e) return n;
                  M(i) ? (t.length > 1 && (i = Oe(i, t[1])), (t = le(e))) : ((i = Lt), (t = at(t, !1, !1)), (e = Object(e)));
                  for (var a = 0, r = t.length; a < r; a++) {
                    var s = t[a],
                      o = e[s];
                    i(o, s, e) && (n[s] = o);
                  }
                  return n;
                }),
                Rt = y(function (e, t) {
                  var n,
                    i = t[0];
                  return (
                    M(i)
                      ? ((i = lt(i)), t.length > 1 && (n = t[1]))
                      : ((t = yt(at(t, !1, !1), String)),
                        (i = function (e, n) {
                          return !Pt(t, n);
                        })),
                    Nt(e, i, n)
                  );
                });
              function Wt(e, t, n) {
                return o.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
              }
              function Ht(e, t, n) {
                return null == e || e.length < 1 ? (null == t || n ? void 0 : []) : null == t || n ? e[0] : Wt(e, e.length - t);
              }
              function Ft(e, t, n) {
                return o.call(e, null == t || n ? 1 : t);
              }
              var Gt = y(function (e, t) {
                  return (
                    (t = at(t, !0, !0)),
                    St(e, function (e) {
                      return !Pt(t, e);
                    })
                  );
                }),
                Vt = y(function (e, t) {
                  return Gt(e, t);
                });
              function $t(e, t, n, i) {
                A(t) || ((i = n), (n = t), (t = !1)), null != n && (n = Le(n, i));
                for (var a = [], r = [], s = 0, o = X(e); s < o; s++) {
                  var l = e[s],
                    c = n ? n(l, s, e) : l;
                  t && !n ? ((s && r === c) || a.push(l), (r = c)) : n ? Pt(r, c) || (r.push(c), a.push(l)) : Pt(a, l) || a.push(l);
                }
                return a;
              }
              var Qt = y(function (e) {
                return $t(at(e, !0, !0));
              });
              function Zt(e) {
                for (var t = (e && Et(e, X).length) || 0, n = Array(t), i = 0; i < t; i++) n[i] = jt(e, i);
                return n;
              }
              var Kt = y(Zt);
              function Jt(e, t) {
                return e._chain ? ie(t).chain() : t;
              }
              function Yt(e) {
                return (
                  kt(we(e), function (t) {
                    var n = (ie[t] = e[t]);
                    ie.prototype[t] = function () {
                      var e = [this._wrapped];
                      return s.apply(e, arguments), Jt(this, n.apply(ie, e));
                    };
                  }),
                  ie
                );
              }
              kt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = i[e];
                ie.prototype[e] = function () {
                  var n = this._wrapped;
                  return (
                    null != n && (t.apply(n, arguments), ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0]), Jt(this, n)
                  );
                };
              }),
                kt(["concat", "join", "slice"], function (e) {
                  var t = i[e];
                  ie.prototype[e] = function () {
                    var e = this._wrapped;
                    return null != e && (e = t.apply(e, arguments)), Jt(this, e);
                  };
                });
              var Xt = {
                  __proto__: null,
                  VERSION: t,
                  restArguments: y,
                  isObject: w,
                  isNull: function (e) {
                    return null === e;
                  },
                  isUndefined: x,
                  isBoolean: A,
                  isElement: function (e) {
                    return !(!e || 1 !== e.nodeType);
                  },
                  isString: z,
                  isNumber: T,
                  isDate: P,
                  isRegExp: q,
                  isError: j,
                  isSymbol: E,
                  isArrayBuffer: C,
                  isDataView: N,
                  isArray: R,
                  isFunction: M,
                  isArguments: F,
                  isFinite: function (e) {
                    return !E(e) && f(e) && !isNaN(parseFloat(e));
                  },
                  isNaN: G,
                  isTypedArray: Y,
                  isEmpty: function (e) {
                    if (null == e) return !0;
                    var t = X(e);
                    return "number" == typeof t && (R(e) || z(e) || F(e)) ? 0 === t : 0 === X(te(e));
                  },
                  isMatch: ne,
                  isEqual: function (e, t) {
                    return se(e, t);
                  },
                  isMap: he,
                  isWeakMap: fe,
                  isSet: me,
                  isWeakSet: ve,
                  keys: te,
                  allKeys: le,
                  values: ke,
                  pairs: function (e) {
                    for (var t = te(e), n = t.length, i = Array(n), a = 0; a < n; a++) i[a] = [t[a], e[t[a]]];
                    return i;
                  },
                  invert: ye,
                  functions: we,
                  methods: we,
                  extend: Ae,
                  extendOwn: Se,
                  assign: Se,
                  defaults: ze,
                  create: function (e, t) {
                    var n = Te(e);
                    return t && Se(n, t), n;
                  },
                  clone: Pe,
                  tap: function (e, t) {
                    return t(e), e;
                  },
                  get: Ce,
                  has: function (e, t) {
                    for (var n = (t = je(t)).length, i = 0; i < n; i++) {
                      var a = t[i];
                      if (!W(e, a)) return !1;
                      e = e[a];
                    }
                    return !!n;
                  },
                  mapObject: function (e, t, n) {
                    t = Le(t, n);
                    for (var i = te(e), a = i.length, r = {}, s = 0; s < a; s++) {
                      var o = i[s];
                      r[o] = t(e[o], o, e);
                    }
                    return r;
                  },
                  identity: Ie,
                  constant: V,
                  noop: Ne,
                  toPath: qe,
                  property: Me,
                  propertyOf: function (e) {
                    return null == e
                      ? Ne
                      : function (t) {
                          return Ce(e, t);
                        };
                  },
                  matcher: Be,
                  matches: Be,
                  times: function (e, t, n) {
                    var i = Array(Math.max(0, e));
                    t = Oe(t, n, 1);
                    for (var a = 0; a < e; a++) i[a] = t(a);
                    return i;
                  },
                  random: Re,
                  now: We,
                  escape: Ge,
                  unescape: Ve,
                  templateSettings: $e,
                  template: function (e, t, n) {
                    !t && n && (t = n), (t = ze({}, t, ie.templateSettings));
                    var i = RegExp(
                        [(t.escape || Qe).source, (t.interpolate || Qe).source, (t.evaluate || Qe).source].join("|") + "|$",
                        "g"
                      ),
                      a = 0,
                      r = "__p+='";
                    e.replace(i, function (t, n, i, s, o) {
                      return (
                        (r += e.slice(a, o).replace(Ke, Je)),
                        (a = o + t.length),
                        n
                          ? (r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                          : i
                          ? (r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                          : s && (r += "';\n" + s + "\n__p+='"),
                        t
                      );
                    }),
                      (r += "';\n");
                    var s,
                      o = t.variable;
                    if (o) {
                      if (!Ye.test(o)) throw new Error("variable is not a bare identifier: " + o);
                    } else (r = "with(obj||{}){\n" + r + "}\n"), (o = "obj");
                    r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
                    try {
                      s = new Function(o, "_", r);
                    } catch (e) {
                      throw ((e.source = r), e);
                    }
                    var l = function (e) {
                      return s.call(this, e, ie);
                    };
                    return (l.source = "function(" + o + "){\n" + r + "}"), l;
                  },
                  result: function (e, t, n) {
                    var i = (t = je(t)).length;
                    if (!i) return M(n) ? n.call(e) : n;
                    for (var a = 0; a < i; a++) {
                      var r = null == e ? void 0 : e[t[a]];
                      void 0 === r && ((r = n), (a = i)), (e = M(r) ? r.call(e) : r);
                    }
                    return e;
                  },
                  uniqueId: function (e) {
                    var t = ++Xe + "";
                    return e ? e + t : t;
                  },
                  chain: function (e) {
                    var t = ie(e);
                    return (t._chain = !0), t;
                  },
                  iteratee: Ue,
                  partial: tt,
                  bind: nt,
                  bindAll: rt,
                  memoize: function (e, t) {
                    var n = function (i) {
                      var a = n.cache,
                        r = "" + (t ? t.apply(this, arguments) : i);
                      return W(a, r) || (a[r] = e.apply(this, arguments)), a[r];
                    };
                    return (n.cache = {}), n;
                  },
                  delay: st,
                  defer: ot,
                  throttle: function (e, t, n) {
                    var i,
                      a,
                      r,
                      s,
                      o = 0;
                    n || (n = {});
                    var l = function () {
                        (o = !1 === n.leading ? 0 : We()), (i = null), (s = e.apply(a, r)), i || (a = r = null);
                      },
                      c = function () {
                        var c = We();
                        o || !1 !== n.leading || (o = c);
                        var _ = t - (c - o);
                        return (
                          (a = this),
                          (r = arguments),
                          _ <= 0 || _ > t
                            ? (i && (clearTimeout(i), (i = null)), (o = c), (s = e.apply(a, r)), i || (a = r = null))
                            : i || !1 === n.trailing || (i = setTimeout(l, _)),
                          s
                        );
                      };
                    return (
                      (c.cancel = function () {
                        clearTimeout(i), (o = 0), (i = a = r = null);
                      }),
                      c
                    );
                  },
                  debounce: function (e, t, n) {
                    var i,
                      a,
                      r,
                      s,
                      o,
                      l = function () {
                        var c = We() - a;
                        t > c ? (i = setTimeout(l, t - c)) : ((i = null), n || (s = e.apply(o, r)), i || (r = o = null));
                      },
                      c = y(function (c) {
                        return (o = this), (r = c), (a = We()), i || ((i = setTimeout(l, t)), n && (s = e.apply(o, r))), s;
                      });
                    return (
                      (c.cancel = function () {
                        clearTimeout(i), (i = r = o = null);
                      }),
                      c
                    );
                  },
                  wrap: function (e, t) {
                    return tt(t, e);
                  },
                  negate: lt,
                  compose: function () {
                    var e = arguments,
                      t = e.length - 1;
                    return function () {
                      for (var n = t, i = e[t].apply(this, arguments); n--; ) i = e[n].call(this, i);
                      return i;
                    };
                  },
                  after: function (e, t) {
                    return function () {
                      if (--e < 1) return t.apply(this, arguments);
                    };
                  },
                  before: ct,
                  once: _t,
                  findKey: ut,
                  findIndex: bt,
                  findLastIndex: pt,
                  sortedIndex: gt,
                  indexOf: ft,
                  lastIndexOf: mt,
                  find: vt,
                  detect: vt,
                  findWhere: function (e, t) {
                    return vt(e, Be(t));
                  },
                  each: kt,
                  forEach: kt,
                  map: yt,
                  collect: yt,
                  reduce: xt,
                  foldl: xt,
                  inject: xt,
                  reduceRight: At,
                  foldr: At,
                  filter: St,
                  select: St,
                  reject: function (e, t, n) {
                    return St(e, lt(Le(t)), n);
                  },
                  every: zt,
                  all: zt,
                  some: Tt,
                  any: Tt,
                  contains: Pt,
                  includes: Pt,
                  include: Pt,
                  invoke: qt,
                  pluck: jt,
                  where: function (e, t) {
                    return St(e, Be(t));
                  },
                  max: Et,
                  min: function (e, t, n) {
                    var i,
                      a,
                      r = 1 / 0,
                      s = 1 / 0;
                    if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                      for (var o = 0, l = (e = it(e) ? e : ke(e)).length; o < l; o++) null != (i = e[o]) && i < r && (r = i);
                    else
                      (t = Le(t, n)),
                        kt(e, function (e, n, i) {
                          ((a = t(e, n, i)) < s || (a === 1 / 0 && r === 1 / 0)) && ((r = e), (s = a));
                        });
                    return r;
                  },
                  shuffle: function (e) {
                    return Ct(e, 1 / 0);
                  },
                  sample: Ct,
                  sortBy: function (e, t, n) {
                    var i = 0;
                    return (
                      (t = Le(t, n)),
                      jt(
                        yt(e, function (e, n, a) {
                          return { value: e, index: i++, criteria: t(e, n, a) };
                        }).sort(function (e, t) {
                          var n = e.criteria,
                            i = t.criteria;
                          if (n !== i) {
                            if (n > i || void 0 === n) return 1;
                            if (n < i || void 0 === i) return -1;
                          }
                          return e.index - t.index;
                        }),
                        "value"
                      )
                    );
                  },
                  groupBy: Bt,
                  indexBy: Mt,
                  countBy: Ot,
                  partition: Dt,
                  toArray: function (e) {
                    return e ? (R(e) ? o.call(e) : z(e) ? e.match(Ut) : it(e) ? yt(e, Ie) : ke(e)) : [];
                  },
                  size: function (e) {
                    return null == e ? 0 : it(e) ? e.length : te(e).length;
                  },
                  pick: Nt,
                  omit: Rt,
                  first: Ht,
                  head: Ht,
                  take: Ht,
                  initial: Wt,
                  last: function (e, t, n) {
                    return null == e || e.length < 1
                      ? null == t || n
                        ? void 0
                        : []
                      : null == t || n
                      ? e[e.length - 1]
                      : Ft(e, Math.max(0, e.length - t));
                  },
                  rest: Ft,
                  tail: Ft,
                  drop: Ft,
                  compact: function (e) {
                    return St(e, Boolean);
                  },
                  flatten: function (e, t) {
                    return at(e, t, !1);
                  },
                  without: Vt,
                  uniq: $t,
                  unique: $t,
                  union: Qt,
                  intersection: function (e) {
                    for (var t = [], n = arguments.length, i = 0, a = X(e); i < a; i++) {
                      var r = e[i];
                      if (!Pt(t, r)) {
                        var s;
                        for (s = 1; s < n && Pt(arguments[s], r); s++);
                        s === n && t.push(r);
                      }
                    }
                    return t;
                  },
                  difference: Gt,
                  unzip: Zt,
                  transpose: Zt,
                  zip: Kt,
                  object: function (e, t) {
                    for (var n = {}, i = 0, a = X(e); i < a; i++) t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
                    return n;
                  },
                  range: function (e, t, n) {
                    null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
                    for (var i = Math.max(Math.ceil((t - e) / n), 0), a = Array(i), r = 0; r < i; r++, e += n) a[r] = e;
                    return a;
                  },
                  chunk: function (e, t) {
                    if (null == t || t < 1) return [];
                    for (var n = [], i = 0, a = e.length; i < a; ) n.push(o.call(e, i, (i += t)));
                    return n;
                  },
                  mixin: Yt,
                  default: ie
                },
                en = Yt(Xt);
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
    68: [
      function (e, t, n) {
        (function (e) {
          (function () {
            /*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
            "use strict";
            function n(e) {
              var t,
                n,
                a,
                r,
                s,
                o,
                l = Object.create(null);
              if (((this[c] = l), e))
                if ("string" == typeof e)
                  for ("?" === e.charAt(0) && (e = e.slice(1)), s = 0, o = (r = e.split("&")).length; s < o; s++)
                    -1 < (t = (a = r[s]).indexOf("=")) ? _(l, u(a.slice(0, t)), u(a.slice(t + 1))) : a.length && _(l, u(a), "");
                else if (i(e)) for (s = 0, o = e.length; s < o; s++) _(l, (a = e[s])[0], a[1]);
                else for (n in e) _(l, n, e[n]);
            }
            var i = Array.isArray,
              a = n.prototype,
              r = /[!'\(\)~]|%20|%00/g,
              s = /\+/g,
              o = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" },
              l = function (e) {
                return o[e];
              },
              c = "__URLSearchParams__:" + Math.random();
            function _(e, t, n) {
              t in e ? e[t].push("" + n) : (e[t] = i(n) ? n : ["" + n]);
            }
            function u(e) {
              return decodeURIComponent(e.replace(s, " "));
            }
            function d(e) {
              return encodeURIComponent(e).replace(r, l);
            }
            (a.append = function (e, t) {
              _(this[c], e, t);
            }),
              (a.delete = function (e) {
                delete this[c][e];
              }),
              (a.get = function (e) {
                var t = this[c];
                return e in t ? t[e][0] : null;
              }),
              (a.getAll = function (e) {
                var t = this[c];
                return e in t ? t[e].slice(0) : [];
              }),
              (a.has = function (e) {
                return e in this[c];
              }),
              (a.set = function (e, t) {
                this[c][e] = ["" + t];
              }),
              (a.forEach = function (e, t) {
                var n = this[c];
                Object.getOwnPropertyNames(n).forEach(function (i) {
                  n[i].forEach(function (n) {
                    e.call(t, n, i, this);
                  }, this);
                }, this);
              }),
              (a.toJSON = function () {
                return {};
              }),
              (a.toString = function () {
                var e,
                  t,
                  n,
                  i,
                  a = this[c],
                  r = [];
                for (t in a) for (n = d(t), e = 0, i = a[t]; e < i.length; e++) r.push(n + "=" + d(i[e]));
                return r.join("&");
              }),
              (function (e) {
                var t = (function () {
                  try {
                    return !!Symbol.iterator;
                  } catch (e) {
                    return !1;
                  }
                })();
                "forEach" in e ||
                  (e.forEach = function (e, t) {
                    var n = Object.create(null);
                    this.toString()
                      .replace(/=[\s\S]*?(?:&|$)/g, "=")
                      .split("=")
                      .forEach(function (i) {
                        i.length &&
                          !(i in n) &&
                          (n[i] = this.getAll(i)).forEach(function (n) {
                            e.call(t, n, i, this);
                          }, this);
                      }, this);
                  }),
                  "keys" in e ||
                    (e.keys = function () {
                      var e = [];
                      this.forEach(function (t, n) {
                        e.push(n);
                      });
                      var n = {
                        next: function () {
                          var t = e.shift();
                          return { done: void 0 === t, value: t };
                        }
                      };
                      return (
                        t &&
                          (n[Symbol.iterator] = function () {
                            return n;
                          }),
                        n
                      );
                    }),
                  "values" in e ||
                    (e.values = function () {
                      var e = [];
                      this.forEach(function (t) {
                        e.push(t);
                      });
                      var n = {
                        next: function () {
                          var t = e.shift();
                          return { done: void 0 === t, value: t };
                        }
                      };
                      return (
                        t &&
                          (n[Symbol.iterator] = function () {
                            return n;
                          }),
                        n
                      );
                    }),
                  "entries" in e ||
                    (e.entries = function () {
                      var e = [];
                      this.forEach(function (t, n) {
                        e.push([n, t]);
                      });
                      var n = {
                        next: function () {
                          var t = e.shift();
                          return { done: void 0 === t, value: t };
                        }
                      };
                      return (
                        t &&
                          (n[Symbol.iterator] = function () {
                            return n;
                          }),
                        n
                      );
                    }),
                  t && !(Symbol.iterator in e) && (e[Symbol.iterator] = e.entries),
                  "sort" in e ||
                    (e.sort = function () {
                      for (var e, t, n, i = this.entries(), a = i.next(), r = a.done, s = [], o = Object.create(null); !r; )
                        (t = (n = a.value)[0]), s.push(t), t in o || (o[t] = []), o[t].push(n[1]), (r = (a = i.next()).done);
                      for (s.sort(), e = 0; e < s.length; e++) this.delete(s[e]);
                      for (e = 0; e < s.length; e++) (t = s[e]), this.append(t, o[t].shift());
                    });
              })((n = t.exports = e.URLSearchParams || n).prototype);
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    69: [
      function (e, t, n) {
        t.exports =
          '<header class="header">\n  <img class="header__img" src="/img/avira_icon48.png" alt="Avira" width="48" />\n</header>\n\n<div id="message" class="abs-page">\n  <article class="content">\n     <img class="message__img" src="/img/abs-danger.svg" />\n    {{^ isPUADownload }}\n      <h1 id="domain" class="txt--xl mb0" title="{{ url }}">{{ domain }}</h1>\n    {{/ isPUADownload }}\n\n    <h2 id="title" class="txt--xl {{# isPUADownload }} mbs {{/ isPUADownload }}">{{ title }}</h2>\n\n    {{^ isPUADownload }}\n      {{# subtitle}}\n        <div id="subtitle" class="txt--s txt--center txt--lead txt--osans"> {{ subtitle }}\n        {{# isMSE }}\n          <button id="btn-mse-take-me-away" class="button mbs" data-href="{{> lnk_avira }}">{{> lb_mse_take_me_away }}</button>\n        {{/ isMSE }}\n        {{^ isMSE }}\n          <button id="btn-back" class="button mbs mtm" data-href="{{> lnk_avira }}">\n            {{# isPUADownload }}\n              {{> lb_dash_pua_action_cancel }}\n            {{/ isPUADownload }}\n            {{^ isPUADownload }}\n              {{> btn_blocking_back }}\n            {{/ isPUADownload }}\n          </button>\n        {{/ isMSE }}\n        </div>\n      {{/ subtitle}}\n    {{/ isPUADownload }}\n\n    {{# isPUADownload }}\n      <div id="subtitle" class="txt--lead txt--center txt--osans">\n        <a href="{{> lnk_what_is_pua }}" target="_blank">\n          {{> msg_what_is_pua }}\n        </a>\n        {{# isMSE }}\n          <button id="btn-mse-take-me-away" class="button mbs" data-href="{{> lnk_avira }}">{{> lb_mse_take_me_away }}</button>\n        {{/ isMSE }}\n        {{^ isMSE }}\n          <button id="btn-back" class="button mbs mtm">\n            {{# isPUADownload }}\n              {{> lb_dash_pua_action_cancel }}\n            {{/ isPUADownload }}\n            {{^ isPUADownload }}\n              {{> btn_blocking_back }}\n            {{/ isPUADownload }}\n          </button>\n        {{/ isMSE }}\n      </div>\n    {{/ isPUADownload }}\n\n    <div>\n      {{# isPUADownload }}\n        <a id="btn-continue" href="#">{{> btn_blocking_continue }}</a>\n      {{/ isPUADownload }}\n      {{^ isPUADownload }}\n          <section class="ptm">\n\n            <div class="check txt--lead">\n              <input\n                id="cb-add-exception"\n                type="checkbox"\n                name="check"\n              />\n\n              <label class="check__label check__action mbs" for="cb-add-exception">\n                <i class="check__box"></i>\n                <span>{{> lb_blocking_add_exception }}</span>\n              </label>\n\n              <div class="check__action">\n                <a id="btn-continue" class="txt--osans txt--semibold" href="#">{{> btn_blocking_continue }}</a>\n              </div>\n            </div>\n\n      {{/ isPUADownload }}\n    </div>\n\n  </article>\n</div>\n';
      },
      {}
    ],
    70: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Sichere Webseite",
          lb_unsafe_website: "Unsichere Webseite",
          lb_unsafe_content_website: "Unsicherer Inhalt",
          lb_mse_website: "Nicht vertrauenswürdige Suchmaschine",
          lb_trackers_blocked: '{{ count }} Werbeanzeigen und Tracker auf {{ domain }} <span class="txt--green">blockiert</span>',
          lb_trackers_blocked_short: "{{ count }} Werbeanzeigen und Tracker blockiert",
          lb_trackers_block_all: "Auf dieser Webseite blockieren",
          lb_trackers_allow_all: "Werbeanzeigen und Tracker freigeben",
          msg_no_trackers:
            "Es gibt auf dieser Webseite keine Tracker, die Sie verfolgen. Wenn Sie eine Webseite mit aktiven Trackern öffnen, wird hier eine vollständige Liste der Tracker angezeigt.",
          msg_trackers_tooltip:
            "Das sind alle Tracker der aktuell geöffneten Webseite. Sie können einen Tracker blockieren, indem Sie den nebenstehenden Regler klicken. Ist die Farbe des Reglers grün, wird der dazugehörige Tracker blockiert und kann Ihr Surfverhalten nicht verfolgen. Beachten Sie, dass manche Tracker standardmäßig erlaubt sind. Ein Blockieren dieser Tracker kann dazu führen, dass die Webseite nicht ordnungsgemäß funktioniert.",
          lb_settings: "Einstellungen",
          lb_setting_offers: "Preisvergleich anzeigen",
          lb_setting_tooltip_offers:
            "Für die Artikel, an denen Sie interessiert sind, werden bessere Angebote ausschließlich von sicheren Webseiten angezeigt.",
          lb_setting_dnt_header: "Do-Not-Track-Header senden",
          lb_setting_tooltip_dnt_header:
            "Fordern Sie Webseiten auf, Sie nicht zu verfolgen. Falls Ihre Aufforderung ignoriert wird, blockiert ABS weiterhin alle Tracker.",
          lb_setting_top_bar: "Sicherheitsleiste anzeigen",
          lb_setting_block_trackers: "Tracker standardmäßig blockieren",
          lb_setting_tooltip_block_trackers: "Schützen Sie Ihre Privatsphäre, indem Sie Tracker standardmäßig blockieren.",
          lb_setting_cliqz: "Sichere Suche mit CLIQZ",
          lb_setting_tooltip_cliqz:
            "Schon während Sie in der Adressleiste Ihres Browsers tippen, schlägt CLIQZ Ihnen Webseiten und relevante Informationen vor. Dadurch suchen Sie effizienter, schneller und sicherer.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger blockiert Werbeanzeigen und Tracker, die Sie ohne Ihre Erlaubnis heimlich ausspionieren wollen.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere verschlüsselt Ihre gesamte Kommunikation und schützt Sie beim Surfen.",
          lb_setting_inAppTracking: "Anonymisierte Statistik",
          lb_setting_tooltip_inAppTracking: "Helfen Sie, unsere Produkte zu verbessern, indem Sie Daten anonym mit uns teilen.",
          lb_setting_show_advanced_controls: "Mehr Steuerelemente anzeigen",
          lb_setting_tooltip_show_advanced_controls: "Zeigt Privacy Badger und HTTPS Everywhere in der Symbolleiste.",
          lb_setting_google_services: "Google-Dienste",
          lb_setting_adguard: "Werbeanzeigen und Web-Tracking blockieren",
          lb_setting_tooltip_adguard:
            "Schützt Ihre Privatsphäre, indem andere daran gehindert werden, Ihre Online-Aktivität zu überwachen. Blockiert auch aufdringliche Pop-ups, Webbanner, Videoanzeigen und mehr.",
          lb_setting_adguard_social_media: "Tracking durch soziale Medien blockieren",
          lb_setting_tooltip_adguard_social_media:
            "Deaktiviert Social-Media-Schaltflächen und Widgets auf Webseiten, sodass soziale Netzwerke nicht verfolgen können, welche Webseiten Sie besuchen.",
          lb_setting_adguard_useful_ads: "Nützliche Werbe-Anzeigen nicht blockieren",
          lb_setting_tooltip_adguard_useful_ads:
            "Relevante, nicht aufdringliche Anzeigen können in Ihren Suchergebnissen angezeigt werden.",
          lb_setting_extension_scan: "Analyse der Erweiterungen",
          lb_setting_tooltip_extension_scan:
            "Aktivieren um einen anonymisierten Bericht an Avira zu senden, wenn eine verdächtige Aktivitäten während dem Surfen festgestellt wurde.",
          lb_setting_dark_mode: "Dunkelmodus",
          lb_setting_tooltip_dark_mode: "Dunkelmodus ein/aus",
          btn_blocking_back: "Seite verlassen",
          lb_blocking_options: "Weitere Optionen",
          lb_blocking_add_exception: "Diese Webseite nie blockieren",
          btn_blocking_continue: "Trotzdem fortfahren",
          btn_dash_classification_cb_exception: "Diese Webseite nie blockieren",
          lb_dash_classification_exception_info_add: "Ausnahme wird hinzugefügt",
          msg_dash_classification_exception_info_add:
            "Diese Seite ist zur Zeit NICHT auf Ihrer Ausnahmeliste. Wenn Sie eine Ausnahme hinzufügen, wird diese Web-Adresse bei Zugriff nicht mehr blockiert. Die Warnung am oberen Bildschirmrand bleibt jedoch bestehen.",
          lb_dash_classification_exception_info_remove: "Ausnahme wird entfernt",
          msg_dash_classification_exception_info_remove:
            "Diese Seite befindet zur Zeit auf Ihrer Ausnahmeliste. Wenn Sie die Ausnahme entfernen, wird diese Web-Adresse bei Zugriff immer blockiert.",
          lb_privacy: "Datenschutz",
          lnk_privacy: "https://www.avira.com/de/general-privacy",
          lb_eula: "Endbenutzer-Lizenzvereinbarung",
          lnk_eula: "https://www.avira.com/de/license-agreement-terms-of-use",
          lb_discover_mode: "Entdecken Sie mehr",
          lb_feedback: "Feedback",
          lb_feedback_question: "Wie bewerten Sie Ihre Erfahrung?",
          lb_feedback_send: "Senden",
          lb_feedback_send_title: "Anonymes Feedback an Avira senden",
          lb_feedback_thank_you: "Vielen Dank!",
          lb_feedback_thank_you_feedback: "Vielen Dank für Ihr Feedback",
          lb_feedback_help_improve: "Ihr Feedback hilft uns, die App zu verbessern",
          lb_feedback_rate_store: "Hätten Sie einen Moment Zeit, {0} im {1}-Store zu bewerten?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Jetzt bewerten",
          lb_feedback_later: "Später",
          lb_rate: "App bewerten",
          lb_dash_pua_action_cancel: "Download abbrechen",
          msg_mse_bar_warning: "Die Einstellungen Ihrer Suchmaschine wurden wahrscheinlich manipuliert.",
          lb_mse_take_me_away: "Seite verlassen!",
          lnk_avira: "https://www.avira.com/de/",
          lb_mse_hide_warning: "Ich vertraue dieser Suchmaschine",
          msg_blocked_iframe_replacement: "Unsicherer Inhalt",
          lb_unsafe_content_bar_warning: "Avira Browser Safety verhindert, dass unsicherer Inhalt auf dieser Webseite geladen wird.",
          lb_unsafe_content_bar_ignore: "Diese Meldung nicht mehr anzeigen",
          lb_extension_permission_notification_extension_description:
            "Die Avira Browserschutz Erweiterung benötigt ihre Zustimmung um einen Bericht über verdächtige Aktivitäten an Avira zusenden.",
          lb_extension_permission_notification_extension_permission_title:
            "Aktivieren um einen anonymisierten Bericht an Avira zu senden, wenn eine verdächtige Aktivitäten während dem Surfen festgestellt wurde.",
          lb_extension_permission_notification_extension_permission_button: "Erlauben",
          lb_extension_permission_notification_extension_permission_no_title:
            "Diese Funktion kann später in den Einstellungen aktiviert werden.",
          lb_extension_permission_notification_extension_permission_no_button: "Nicht erneut fragen",
          lb_unsafe_content: "Unsicherer Inhalt",
          msg_dash_unsafe_content_details_no_exception: "Blockierter unsicherer Inhalt:",
          msg_dash_unsafe_content_details_exception: "Unsicherer Inhalt blockiert",
          msg_dash_unsafe_content_risk_no_exception: "Aus Sicherheitsgründen wird empfohlen, die Blockierung des Inhalts beizubehalten.",
          msg_dash_unsafe_content_risk_exception:
            "Aus Sicherheitsgründen wird empfohlen, die Ausnahme zu entfernen und damit den unsicheren Inhalt zu blockieren.",
          lb_dash_unsafe_content_show_details: "Technische Details",
          lb_dash_unsafe_content_hide_details: "Ausblenden",
          msg_category_unknown: "Es wurden keine Informationen für diese Webseite gefunden.",
          msg_category_safe: "Keine bekannten Bedrohungen.",
          msg_category_malware: "Dies ist eine Malware-Webseite",
          msg_category_malware_sub: "Malware-Webseiten infizieren Ihr Gerät und können Viren, Würmer, Spyware und Trojaner enthalten.",
          msg_category_phishing: "Dies ist eine Phishing-Webseite",
          msg_category_phishing_sub:
            "Phishing-Webseiten versuchen, Sie durch Täuschung dazu zu verleiten, persönliche Informationen wie Kennwörter und Kontoinformationen preiszugeben.",
          msg_category_spam: "Dies ist eine Spam-Webseite",
          msg_category_spam_sub: "Spam-Webseiten verwenden Ihre E-Mail-Adresse, um Ihnen Werbung per E-Mail zu senden.",
          msg_category_pua: "Der Download enthält Potenziell Unerwünschte Anwendungen.",
          msg_category_pua2: "Diese Webseite verbreitet PUA",
          msg_category_pua2_sub:
            "Potenziell Unerwünschte Anwendungen (PUA) zeigen unerwünschtes Verhalten oder beinhalten unerwünschte Funktionen.",
          msg_category_mse: "Nicht vertrauenswürdige Suchmaschine",
          msg_category_mse_sub:
            "Dieser Suchmaschine wird nicht vertraut, da bekannt ist, dass Malware und Potenziell Unerwünschte Anwendungen Datenverkehr dorthin umleiten.",
          msg_category_unsafe_content: "Unsicherer Inhalt blockiert",
          msg_category_unsafe_content_sub:
            "Webseiten laden unsicheren Inhalt, wenn beeinträchtigter oder externer Inhalt gehackt wurde oder vorsätzlich schädlich ist.",
          msg_what_is_pua: "Was bedeutet PUA?",
          lnk_what_is_pua: "https://www.avira.com/de-de/potentially-unwanted-applications",
          lb_tab_privacy: "Privatsphäre",
          lb_tab_security: "Sicherheit",
          lb_my_modes: "Modi",
          msg_mode_select: "Wählen Sie den Modus, der <br/>Ihren Anforderungen entspricht",
          "lb_mode_safe-surfing": "Sicheres Surfen",
          "lb_mode_safe-private": "Sicher und privat",
          lb_mode_custom: "Benutzerdefiniert",
          lb_powered_by_avira: "Bereitgestellt von Avira",
          lb_help: "Hilfe",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} Werbeanzeigen und #Tracker wurden von #Avira Browserschutz blockiert. Holen Sie sich Ihre eigene Version – #kostenlos!",
          lb_trackers_facebook_share:
            "{{ threshold }} – so viele Werbeanzeigen und Tracker hat Avira Browserschutz bislang blockiert und so davon abgehalten, meine Onlineaktivitäten auszuspionieren. Avira Browserschutz ist kostenlos und wärmstens zu empfehlen.",
          lb_congratulations: "Herzlichen Glückwunsch!",
          lb_trackers_blocked_count: "{{ threshold }} Werbeanzeigen und Tracker blockiert!",
          lb_trackers_milestone_subtitle: "Hilf auch du, deine Familie und Freunde zu schützen.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/de/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/de/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Teilen",
          lb_trackers: "Tracker",
          lb_ads: "Werbeanzeigen",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Tracker</span> auf dieser Webseite blockiert',
          lb_ads_blocked_this_page: '<span class="txt--orange">Werbeanzeigen</span> auf dieser Webseite blockiert',
          lb_blocked_total: "Insgesamt <strong>{{ countTotal }}</strong><br>Werbeanzeigen und Tracker blockiert",
          lb_adblocking_credits: '"Werbeanzeige von <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a> blockiert"'
        };
      },
      {}
    ],
    71: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Safe website",
          lb_unsafe_website: "Unsafe website",
          lb_unsafe_content_website: "Unsafe content",
          lb_mse_website: "Distrusted Search Engine",
          lb_trackers_blocked: '{{ count }} ads and trackers <span class="txt--green">blocked</span> on {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} ads and trackers blocked",
          lb_trackers_block_all: "Block on this website",
          lb_trackers_allow_all: "Unblock ads and trackers",
          msg_no_trackers:
            "There are no trackers following you on the current page. If you open a website with active trackers, the complete list will be shown here.",
          msg_trackers_tooltip:
            "These are all the trackers on the website you are viewing. You can block a tracker by clicking on the slider next to it. When a slider is green, that tracker is blocked and cannot track your browsing activity. Note that some trackers are allowed by default. Blocking them might result in the web page not working properly.",
          lb_settings: "Settings",
          lb_setting_offers: "Show price comparisons",
          lb_setting_tooltip_offers: "Show better deals for the items you’re shopping for – from only safe websites.",
          lb_setting_dnt_header: "Send Do Not Track header",
          lb_setting_tooltip_dnt_header:
            "Inform websites they should not track you. If they ignore the request, ABS still blocks any trackers.",
          lb_setting_top_bar: "Show safety indicator",
          lb_setting_block_trackers: "Block trackers by default",
          lb_setting_tooltip_block_trackers: "Protect your privacy by blocking trackers by default.",
          lb_setting_cliqz: "CLIQZ Search",
          lb_setting_tooltip_cliqz:
            "CLIQZ Search suggests you websites and relevant information in real-time while you enter your search in the browser bar, which enables you to search safer and faster.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger blocks spying ads and prevents invisible trackers from tracking you secretly without your permission.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere encrypts your communications and makes your browsing more secure.",
          lb_setting_inAppTracking: "Anonymous Statistics",
          lb_setting_tooltip_inAppTracking: "Help us improve the product by sharing anonymous data.",
          lb_setting_show_advanced_controls: "Show extra browsing controls",
          lb_setting_tooltip_show_advanced_controls: "Displays Privacy Badger and HTTPS Everywhere icons in the toolbar.",
          lb_setting_google_services: "Google Services",
          lb_setting_adguard: "Block ads & web tracking",
          lb_setting_tooltip_adguard:
            "Protects your privacy by stopping anyone from monitoring you online. Also blocks intrusive popups, web banners, video ads, and more.",
          lb_setting_adguard_social_media: "Block social media tracking",
          lb_setting_tooltip_adguard_social_media:
            "Disables social media buttons and widgets from websites, so that social networks cannot keep track of what sites you visit.",
          lb_setting_adguard_useful_ads: "Do not block useful ads",
          lb_setting_tooltip_adguard_useful_ads: "Allows relevant, non-intrusive ads to be shown in your search results.",
          lb_setting_extension_scan: "Extensions Analysis",
          lb_setting_tooltip_extension_scan:
            "Enable to send an anonymous report to Avira if suspicious activity is detected while browsing.",
          lb_setting_dark_mode: "Dark mode",
          lb_setting_tooltip_dark_mode: "Switch dark mode on/off",
          btn_blocking_back: "Take me away!",
          lb_blocking_options: "More options",
          lb_blocking_add_exception: "Never block this website",
          btn_blocking_continue: "Continue anyway",
          btn_dash_classification_cb_exception: "Never block this website",
          lb_dash_classification_exception_info_add: "Adding an exception",
          msg_dash_classification_exception_info_add:
            "This site is currently NOT on your exception list. When you add an exception, the address will not be blocked when you attempt to view it. You will still see the warning on the top of the screen.",
          lb_dash_classification_exception_info_remove: "Removing an exception",
          msg_dash_classification_exception_info_remove:
            "This site is currently on your exception list. If you remove the exception, the address will be blocked every time you attempt to view it.",
          lb_privacy: "Privacy policy",
          lnk_privacy: "https://www.avira.com/en/general-privacy",
          lb_eula: "End User License Agreement",
          lnk_eula: "https://www.avira.com/en/license-agreement-terms-of-use",
          lb_discover_mode: "Discover more",
          lb_feedback: "Feedback",
          lb_feedback_question: "How would you rate your experience?",
          lb_feedback_send: "Send",
          lb_feedback_send_title: "Send an anonymous feedback to Avira",
          lb_feedback_thank_you: "Thank you",
          lb_feedback_thank_you_feedback: "Thank you for your feedback",
          lb_feedback_help_improve: "Your feedback helps us improve the app",
          lb_feedback_rate_store: "Would you mind taking a moment and rate {0} in the {1} store?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Rate now",
          lb_feedback_later: "Later",
          lb_rate: "Rate app",
          lb_dash_pua_action_cancel: "Cancel download",
          msg_mse_bar_warning: "Your search engine settings were possibly tampered with.",
          lb_mse_take_me_away: "Take me away!",
          lnk_avira: "https://www.avira.com/en/",
          lb_mse_hide_warning: "I trust this search engine",
          msg_blocked_iframe_replacement: "Unsafe content",
          lb_unsafe_content_bar_warning: "Avira Browser Safety prevented unsafe content from loading on this webpage.",
          lb_unsafe_content_bar_ignore: "Don't show message again",
          lb_extension_permission_notification_extension_description:
            "The Avira Browser Safety Extension needs your approval to send a report about suspicious activities to Avira.",
          lb_extension_permission_notification_extension_permission_title:
            "Enable to send an anonymous report to Avira if suspicious activity is detected while browsing.",
          lb_extension_permission_notification_extension_permission_button: "Allow",
          lb_extension_permission_notification_extension_permission_no_title: "You can enable this feature at anytime in the settings.",
          lb_extension_permission_notification_extension_permission_no_button: "Do not ask again",
          lb_unsafe_content: "Unsafe Content",
          msg_dash_unsafe_content_details_no_exception: "Unsafe content blocked:",
          msg_dash_unsafe_content_details_exception: "Unsafe content blocked",
          msg_dash_unsafe_content_risk_no_exception: "For safety, you are recommended to keep the content blocked.",
          msg_dash_unsafe_content_risk_exception: "For safety, you are recommended to block the unsafe content by removing the exception.",
          lb_dash_unsafe_content_show_details: "Technical details",
          lb_dash_unsafe_content_hide_details: "Hide",
          msg_category_unknown: "No information was found for this website.",
          msg_category_safe: "No known threats.",
          msg_category_malware: "This is a malware website",
          msg_category_malware_sub: "Malware websites infect your device and can include viruses, worms, spyware, and Trojans.",
          msg_category_phishing: "This is a phishing website",
          msg_category_phishing_sub:
            "Phishing websites trick you into revealing your personal information, such as passwords and bank account information.",
          msg_category_spam: "This is a spam website",
          msg_category_spam_sub: "Spam websites get your email address so they can send you adverts by email.",
          msg_category_pua: "The download contains Potentially Unwanted Applications",
          msg_category_pua2: "This website distributes PUAs",
          msg_category_pua2_sub:
            "Potentially Unwanted Applications (PUAs) exhibit behavior or contain features that are considered undesirable by users.",
          msg_category_mse: "Distrusted search engine",
          msg_category_mse_sub:
            "This search engine is distrusted because malware and Potentially Unwanted Applications are known to redirect traffic to it.",
          msg_category_unsafe_content: "Unsafe content blocked",
          msg_category_unsafe_content_sub:
            "Webpages load unsafe content if compromised or third-party content is hacked or intentionally harmful.",
          msg_what_is_pua: "What is a PUA?",
          lnk_what_is_pua: "https://www.avira.com/en/potentially-unwanted-applications",
          lb_tab_privacy: "Privacy",
          lb_tab_security: "Security",
          lb_my_modes: "Modes",
          msg_mode_select: "Select the mode that best meets<br/>your needs",
          "lb_mode_safe-surfing": "Safe Surfing",
          "lb_mode_safe-private": "Safe and Private",
          lb_mode_custom: "Custom",
          lb_powered_by_avira: "Powered by Avira",
          lb_help: "Help",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share: "{{ threshold }} ads and #trackers were blocked by #Avira Browser Safety. Get yours now #forfree!",
          lb_trackers_facebook_share:
            "{{ threshold }} - that's how many ads and trackers Avira Browser Safety has blocked from spying on my online activities so far. It's free and I highly recommend it.",
          lb_congratulations: "Congratulations!",
          lb_trackers_blocked_count: "{{ threshold }} ads and trackers blocked!",
          lb_trackers_milestone_subtitle: "Help protect your family and friends, too.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/en/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/en/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Share",
          lb_trackers: "Trackers",
          lb_ads: "Ads",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Trackers</span> blocked on this website',
          lb_ads_blocked_this_page: '<span class="txt--orange">Ads</span> blocked on this website',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Overall ads and trackers blocked",
          lb_adblocking_credits: 'Ad blocking by <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    72: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Sitio web seguro",
          lb_unsafe_website: "Sitio web no seguro",
          lb_unsafe_content_website: "Contenido no seguro",
          lb_mse_website: "Motor de búsqueda poco fiable",
          lb_trackers_blocked: '{{ count }} anuncios y rastreadores <span class="txt--green">bloqueados</span> en {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} anuncios y rastreadores bloqueados",
          lb_trackers_block_all: "Bloquear en este sitio web",
          lb_trackers_allow_all: "Desbloquear anuncios y rastreadores",
          msg_no_trackers:
            "No hay rastreadores que le estén siguiendo en la página actual. Si abre una página web con rastreadores activos, se mostrará la lista completa aquí.",
          msg_trackers_tooltip:
            "Estos son todos los rastreadores en el sitio web que está visitando. Puede bloquear un rastreador haciendo clic en el control deslizante junto al mismo. Cuando un control deslizante está en verde, el rastreador estará bloqueado y no podrá rastrear su actividad de exploración. Tenga en cuenta que algunos rastreadores están permitidos por defecto. Su bloqueo puede hacer que el sitio web no funcione correctamente.",
          lb_settings: "Configuración",
          lb_setting_offers: "Mostrar comparativas de precios",
          lb_setting_tooltip_offers: "Mostrar las mejores ofertas para los productos que está comprando (solo de sitios web seguros).",
          lb_setting_dnt_header: "Enviar solicitud Protección de rastreo",
          lb_setting_tooltip_dnt_header:
            "Informa a los sitios web que no deberían rastrearle. En caso de que ignoren la solicitud, SNA bloqueará todos los rastreadores.",
          lb_setting_top_bar: "Mostrar indicador de seguridad",
          lb_setting_block_trackers: "Bloquee rastreadores de forma predeterminada",
          lb_setting_tooltip_block_trackers: "Proteja su privacidad bloqueando los rastreadores de forma predeterminada.",
          lb_setting_cliqz: "Motor de búsqueda CLIQZ",
          lb_setting_tooltip_cliqz:
            "El motor de búsqueda CLIQZ le sugiere sitios web e información relevante en tiempo real mientras introduce su búsqueda en la barra del navegador lo que le permite buscar de forma más segura y más rápida.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger bloquea anuncios espía y evita que los rastreadores invisibles le rastreen de forma secreta sin su permiso.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere cifra sus comunicaciones y hace que su navegación sea más segura.",
          lb_setting_inAppTracking: "Estadísticas anónimas",
          lb_setting_tooltip_inAppTracking: "Ayúdenos a mejorar el producto compartiendo datos anónimos.",
          lb_setting_show_advanced_controls: "Más controles de navegación",
          lb_setting_tooltip_show_advanced_controls:
            "Se muestran en la barra de herramientas los iconos de Privacy Badger y HTTPS Everywhere.",
          lb_setting_google_services: "Servicios de Google",
          lb_setting_adguard: "Bloquear anuncios y el rastreo web",
          lb_setting_tooltip_adguard:
            "Protege su privacidad evitando que cualquiera supervise lo que hace en línea. Bloquea también ventanas emergentes intrusivas, anuncios web, anuncios en vídeo y más.",
          lb_setting_adguard_social_media: "Bloquear el rastreo de redes sociales",
          lb_setting_tooltip_adguard_social_media:
            "Deshabilita los botones y widgets de redes sociales de los sitios web para que las redes sociales no puedan rastrear los sitios que visita.",
          lb_setting_adguard_useful_ads: "No bloquear anuncios útiles",
          lb_setting_tooltip_adguard_useful_ads: "Permite que en sus resultados de búsqueda aparezcan anuncios relevantes y no intrusivos.",
          lb_setting_extension_scan: "Análisis de extensiones",
          lb_setting_tooltip_extension_scan:
            "Activar el envío a Avira de un informe anónimo si se detecta actividad sospechosa mientras se navega.",
          lb_setting_dark_mode: "Modo oscuro",
          lb_setting_tooltip_dark_mode: "Activar/Desactivar Modo oscuro",
          btn_blocking_back: "Salir de aquí",
          lb_blocking_options: "Otras opciones",
          lb_blocking_add_exception: "Nunca bloquear este sitio web",
          btn_blocking_continue: "Continuar de todas formas",
          btn_dash_classification_cb_exception: "Nunca bloquear este sitio web",
          lb_dash_classification_exception_info_add: "Adición de una excepción",
          msg_dash_classification_exception_info_add:
            "Este sitio NO se encuentra actualmente en su lista de excepciones. Si añade una excepción, la dirección no se bloqueará cuando trate de verla. Aun así, verá la advertencia en la parte superior de la pantalla.",
          lb_dash_classification_exception_info_remove: "Eliminación de una excepción",
          msg_dash_classification_exception_info_remove:
            "Este sitio se encuentra actualmente en su lista de excepciones. Si elimina la excepción, siempre que trate de ver la excepción, esta se bloqueará.",
          lb_privacy: "Política de privacidad",
          lnk_privacy: "https://www.avira.com/es/general-privacy",
          lb_eula: "Acuerdo de licencia de usuario final",
          lnk_eula: "https://www.avira.com/es/license-agreement-terms-of-use",
          lb_discover_mode: "Obtener más información",
          lb_feedback: "Comentarios",
          lb_feedback_question: "¿Cómo valoraría su experiencia?",
          lb_feedback_send: "Enviar",
          lb_feedback_send_title: "Enviar un comentario anónimo a Avira",
          lb_feedback_thank_you: "¡Muchas gracias!",
          lb_feedback_thank_you_feedback: "Gracias por su opinión",
          lb_feedback_help_improve: "Su opinión nos ayuda a mejorar la aplicación",
          lb_feedback_rate_store: "¿Le importaría dedicar un momento a valorar {0} en la tienda de {1}?",
          lb_feedback_ok: "Aceptar",
          lb_feedback_rate_now: "Valorar ahora",
          lb_feedback_later: "Más tarde",
          lb_rate: "Valorar aplicación",
          lb_dash_pua_action_cancel: "Cancelar descarga",
          msg_mse_bar_warning: "Es posible que la configuración de su motor de búsqueda haya sido manipulada.",
          lb_mse_take_me_away: "Salir de aquí!",
          lnk_avira: "https://www.avira.com/es/",
          lb_mse_hide_warning: "Confío en este motor de búsqueda",
          msg_blocked_iframe_replacement: "Contenido no seguro",
          lb_unsafe_content_bar_warning: "Avira Navegación segura ha evitado que se cargue contenido no seguro en esta página web.",
          lb_unsafe_content_bar_ignore: "No volver a mostrar el mensaje",
          lb_extension_permission_notification_extension_description:
            "La extensión Avira Navegación segura requiere su aprobación para enviar a Avira un informe sobre actividades sospechosas.",
          lb_extension_permission_notification_extension_permission_title:
            "Activar el envío a Avira de un informe anónimo si se detecta actividad sospechosa mientras se navega.",
          lb_extension_permission_notification_extension_permission_button: "Permitir",
          lb_extension_permission_notification_extension_permission_no_title:
            "Puede activar esta función en la configuración en cualquier momento.",
          lb_extension_permission_notification_extension_permission_no_button: "No volver a preguntar",
          lb_unsafe_content: "Contenido no seguro",
          msg_dash_unsafe_content_details_no_exception: "Contenido no seguro bloqueado:",
          msg_dash_unsafe_content_details_exception: "Contenido no seguro bloqueado",
          msg_dash_unsafe_content_risk_no_exception: "Por seguridad, le recomendamos que mantenga el contenido bloqueado.",
          msg_dash_unsafe_content_risk_exception:
            "Por seguridad, le recomendamos que bloquee el contenido no seguro eliminando la excepción.",
          lb_dash_unsafe_content_show_details: "Detalles técnicos",
          lb_dash_unsafe_content_hide_details: "Ocultar",
          msg_category_unknown: "No se ha encontrado información sobre este sitio web.",
          msg_category_safe: "Sin amenazas conocidas.",
          msg_category_malware: "Este sitio web contiene malware",
          msg_category_malware_sub:
            "Los sitios web con malware infectan su dispositivo y pueden incluir virus, gusanos, spyware y troyanos.",
          msg_category_phishing: "Este es un sitio web de suplantación de identidad",
          msg_category_phishing_sub:
            "Los sitios web de suplantación de identidad intentan engañar al usuario para revelar información personal, como contraseñas y datos bancarios.",
          msg_category_spam: "Este es un sitio web de correo no deseado",
          msg_category_spam_sub:
            "Los sitios web de correo no deseado capturan su dirección de correo electrónico para enviarle publicidad no deseada por correo electrónico.",
          msg_category_pua: "La descarga contiene aplicaciones potencialmente no deseadas",
          msg_category_pua2: "Este sitio web distribuye PUA",
          msg_category_pua2_sub:
            "Las aplicaciones potencialmente no deseadas (PUA) muestran un comportamiento o contienen características que suelen ser consideradas como no deseables por los usuarios.",
          msg_category_mse: "Motor de búsqueda poco fiable",
          msg_category_mse_sub:
            "Se desconfía de este motor de búsqueda porque se sabe que programas maliciosos y aplicaciones potencialmente no deseadas redirigen aquí el tráfico.",
          msg_category_unsafe_content: "Contenido no seguro bloqueado",
          msg_category_unsafe_content_sub:
            "Las páginas web pueden cargar contenido no seguro si han sido comprometidas o si el contenido de terceros se ha pirateado o es malicioso de forma intencionada.",
          msg_what_is_pua: "¿Qué es PUA?",
          lnk_what_is_pua: "https://www.avira.com/es-es/potentially-unwanted-applications",
          lb_tab_privacy: "Privacidad",
          lb_tab_security: "Seguridad",
          lb_my_modes: "Modos",
          msg_mode_select: "Seleccione el modo que se adapta más a <br/>sus necesidades",
          "lb_mode_safe-surfing": "Navegación segura",
          "lb_mode_safe-private": "Segura y privada",
          lb_mode_custom: "Personalizado",
          lb_powered_by_avira: "Contenido provisto por Avira",
          lb_help: "Ayuda",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} anuncios y #rastreadores bloqueados por #Avira Navegación segura. ¡Consiga el suyo ahora #gratis!",
          lb_trackers_facebook_share:
            "{{ threshold }}: estos son todos los anuncios y rastreadores que Avira Navegación segura ha bloqueado hasta ahora para evitar el espionaje de mis actividades en línea. Es gratuito y lo recomiendo mucho.",
          lb_congratulations: "¡Enhorabuena!",
          lb_trackers_blocked_count: "{{ threshold }} anuncios y rastreadores bloqueados.",
          lb_trackers_milestone_subtitle: "Contribuye también a la protección de tu familia y amigos.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/es/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/es/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tuit",
          lb_share: "Compartir",
          lb_trackers: "Rastreadores",
          lb_ads: "Anuncios",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Rastreadores</span> bloqueados en este sitio web.',
          lb_ads_blocked_this_page: '<span class="txt--orange">Anuncios</span> bloqueados en este sitio web.',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Total de anuncios y rastreadores bloqueados",
          lb_adblocking_credits: 'Anuncios bloqueados por <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    73: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Site Internet sécurisé",
          lb_unsafe_website: "Site Internet non sécurisé",
          lb_unsafe_content_website: "Contenu dangereux",
          lb_mse_website: "Moteur de recherche désapprouvé",
          lb_trackers_blocked: '{{ count }} annonces et dispositifs de suivi <span class="txt--green">bloqués</span> sur {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} annonces et dispositifs de suivi bloqués",
          lb_trackers_block_all: "Bloquer sur ce site Internet",
          lb_trackers_allow_all: "Débloquer toutes les annonces et les dispositifs de suivi",
          msg_no_trackers:
            "Aucun dispositif de suivi ne vous suit sur la page actuelle. Si vous ouvrez un site Internet avec des dispositifs de suivi actifs, la liste complète s'affichera ici.",
          msg_trackers_tooltip:
            "Voici tous les dispositifs de suivi recensés sur le site Internet que vous consultez. Pour bloquer un dispositif de suivi, cliquez sur le curseur adjacent. Lorsque le curseur est vert, le dispositif de suivi est bloqué et ne peut pas suivre vos activités de navigation. Notez que certains dispositifs de suivi sont autorisés par défaut. Leur blocage peut alors entraver le bon fonctionnement de la page Web.",
          lb_settings: "Paramètres",
          lb_setting_offers: "Afficher les comparaisons de prix",
          lb_setting_tooltip_offers:
            "Afficher les meilleures affaires pour les articles que vous recherchez – sur des sites Internet sécurisés.",
          lb_setting_dnt_header: "Envoyer l'en-tête Ne pas suivre",
          lb_setting_tooltip_dnt_header:
            "Intimez aux sites Internet de ne pas vous suivre. S'ils ignorent cette requête, PNA bloquera tout dispositif de suivi.",
          lb_setting_top_bar: "Afficher l’indicateur de sécurité",
          lb_setting_block_trackers: "Bloquer les dispositifs de suivi par défaut",
          lb_setting_tooltip_block_trackers: "Protégez votre sphère privée en bloquant les dispositifs de suivi par défaut.",
          lb_setting_cliqz: "Recherche CLIQZ",
          lb_setting_tooltip_cliqz:
            "La Recherche CLIQZ vous suggère des sites Internet et des informations pertinentes en temps réel lors de la saisie dans la barre de navigation, tout en accélérant et sécurisant votre recherche.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger bloque les pubs espionnes et empêche les mouchards invisibles de vous suivre secrètement sans votre autorisation.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere chiffre vos communications et sécurise votre navigation plus avant.",
          lb_setting_inAppTracking: "Statistiques anonymes",
          lb_setting_tooltip_inAppTracking: "Aidez-nous à améliorer le produit en partageant des données anonymes.",
          lb_setting_show_advanced_controls: "Contrôles supp. de navigation",
          lb_setting_tooltip_show_advanced_controls: "Affiche les icônes Privacy Badger et HTTPS Everywhere dans la barre d'outils.",
          lb_setting_google_services: "Services Google",
          lb_setting_adguard: "Bloquez les annonces et le suivi sur Internet",
          lb_setting_tooltip_adguard:
            "Protège votre vie privée en bloquant toute possibilité de surveillance de vos activités en ligne. Bloque également les fenêtres intempestives intrusives, les bannières web, les annonces vidéo, etc.",
          lb_setting_adguard_social_media: "Bloquez le suivi sur les médias sociaux",
          lb_setting_tooltip_adguard_social_media:
            "Désactive les boutons et widgets liés aux médias sociaux sur les sites Internet afin d'empêcher le suivi de vos activités par les réseaux sociaux.",
          lb_setting_adguard_useful_ads: "Ne bloquez pas les publicités utiles",
          lb_setting_tooltip_adguard_useful_ads:
            "Autorise l'affichage d'annonces ciblées et non intrusives dans vos résultats de recherche.",
          lb_setting_extension_scan: "Analyse des extensions",
          lb_setting_tooltip_extension_scan:
            "Activez cette option pour envoyer un rapport anonyme à Avira en cas d'activité suspecte détectée au cours de la navigation.",
          lb_setting_dark_mode: "Mode sombre",
          lb_setting_tooltip_dark_mode: "Activer/désactiver le mode sombre",
          btn_blocking_back: "Renforcer ma sécurité",
          lb_blocking_options: "Autres options",
          lb_blocking_add_exception: "Ne jamais bloquer ce site Internet",
          btn_blocking_continue: "Continuer quand même",
          btn_dash_classification_cb_exception: "Ne jamais bloquer ce site Internet",
          lb_dash_classification_exception_info_add: "Ajout d'une exception",
          msg_dash_classification_exception_info_add:
            "Ce site n'est actuellement PAS repris dans votre liste d'exceptions. Lorsque vous ajoutez une exception, l'adresse concernée n'est pas bloquée lorsque vous tentez d'y accéder. L'avertissement continue toutefois de s'afficher dans la partie supérieure de l'écran.",
          lb_dash_classification_exception_info_remove: "Suppression d'une exception",
          msg_dash_classification_exception_info_remove:
            "Ce site est actuellement repris dans votre liste d'exceptions. Si vous supprimez l'exception, l'adresse sera bloquée à chaque fois que vous tenterez d'y accéder.",
          lb_privacy: "Politique de confidentialité",
          lnk_privacy: "https://www.avira.com/fr/general-privacy",
          lb_eula: "Contrat de licence de l''utilisateur final",
          lnk_eula: "https://www.avira.com/fr/license-agreement-terms-of-use",
          lb_discover_mode: "En savoir plus",
          lb_feedback: "Commentaire",
          lb_feedback_question: "Comment évalueriez-vous votre expérience?",
          lb_feedback_send: "Envoyer",
          lb_feedback_send_title: "Envoyer un commentaire anonyme à Avira",
          lb_feedback_thank_you: "Merci !",
          lb_feedback_thank_you_feedback: "Merci pour vos commentaires",
          lb_feedback_help_improve: "Vos commentaires nous aident à améliorer notre application",
          lb_feedback_rate_store: "Auriez-vous un moment pour évaluer {0} dans la boutique {1} ?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Évaluer",
          lb_feedback_later: "Plus tard",
          lb_rate: "Évaluer l'application",
          lb_dash_pua_action_cancel: "Annuler le téléchargement",
          msg_mse_bar_warning: "Les paramètres de votre moteur de recherche ont peut-être été altérés.",
          lb_mse_take_me_away: "Renforcer ma sécurité!",
          lnk_avira: "https://www.avira.com/fr/",
          lb_mse_hide_warning: "Je fais confiance à ce moteur de recherche",
          msg_blocked_iframe_replacement: "Contenu dangereux",
          lb_unsafe_content_bar_warning: "Protection de navigateur Avira a empêché le chargement de contenu dangereux sur cette page Web.",
          lb_unsafe_content_bar_ignore: "Ne plus afficher ce message",
          lb_extension_permission_notification_extension_description:
            "L'extension Protection de navigateur Avira requiert votre autorisation pour envoyer un rapport concernant les activités suspectes à Avira.",
          lb_extension_permission_notification_extension_permission_title:
            "Activez cette option pour envoyer un rapport anonyme à Avira en cas d'activité suspecte détectée au cours de la navigation.",
          lb_extension_permission_notification_extension_permission_button: "Autoriser",
          lb_extension_permission_notification_extension_permission_no_title:
            "Vous pouvez activer cette fonctionnalité à tout moment dans les paramètres.",
          lb_extension_permission_notification_extension_permission_no_button: "Ne plus demander",
          lb_unsafe_content: "Contenu dangereux",
          msg_dash_unsafe_content_details_no_exception: "Contenu dangereux bloqué :",
          msg_dash_unsafe_content_details_exception: "Contenu dangereux bloqué",
          msg_dash_unsafe_content_risk_no_exception: "Pour votre sécurité, il est recommandé de bloquer ce contenu.",
          msg_dash_unsafe_content_risk_exception:
            "Pour votre sécurité, il est recommandé de bloquer le contenu non sécurisé en supprimant l'exception existante.",
          lb_dash_unsafe_content_show_details: "Détails techniques",
          lb_dash_unsafe_content_hide_details: "Masquer",
          msg_category_unknown: "Aucune information trouvée pour le site Internet.",
          msg_category_safe: "Aucune menace connue.",
          msg_category_malware: "Ce site est un site Internet malveillant",
          msg_category_malware_sub:
            "Les sites Internet malveillants infectent votre appareil et peuvent inclure des virus, des vers, des logiciels espions et des chevaux de Troie.",
          msg_category_phishing: "Ce site est un site Internet de hameçonnage",
          msg_category_phishing_sub:
            "Les sites Internet de hameçonnage vous incitent à révéler vos informations personnelles, telles que vos mots de passe et coordonnées bancaires.",
          msg_category_spam: "Ce site est un site Internet de spam",
          msg_category_spam_sub:
            "Les sites Internet de spam capturent votre adresse électronique afin de vous envoyer des publicités indésirables par e-mail.",
          msg_category_pua: "Le téléchargement contient des applications potentiellement indésirables",
          msg_category_pua2: "Ce site Internet distribue des PUA",
          msg_category_pua2_sub:
            "Les PUA, ou applications potentiellement indésirables, présentent un comportement ou intègrent des fonctionnalités indésirables pour les utilisateurs.",
          msg_category_mse: "Moteur de recherche désapprouvé",
          msg_category_mse_sub:
            "Ce moteur de recherche n'est pas fiable : son trafic est alimenté par des logiciels malveillants et des applications potentiellement indésirables.",
          msg_category_unsafe_content: "Contenu dangereux bloqué",
          msg_category_unsafe_content_sub:
            "Les pages Web chargent des contenus dangereux lorsqu'elles sont compromises, c'est-à-dire lorsque leur contenu a été piraté ou conçu dans un but malveillant.",
          msg_what_is_pua: "Qu'est-ce que les applications potentiellement indésirables (PUA) ?",
          lnk_what_is_pua: "https://www.avira.com/fr-fr/potentially-unwanted-applications",
          lb_tab_privacy: "Confidentialité",
          lb_tab_security: "Sécurité",
          lb_my_modes: "Modes",
          msg_mode_select: "Sélectionnez le mode qui répond<br/>le mieux à vos besoins",
          "lb_mode_safe-surfing": "Navigation sécurisée",
          "lb_mode_safe-private": "Sécurisé et privé",
          lb_mode_custom: "Personnalisé",
          lb_powered_by_avira: "Une solution Avira",
          lb_help: "Aide",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} annonces et #trackers bloqués par Protection de navigateur #Avira. Profitez-en, c'est #gratuit !",
          lb_trackers_facebook_share:
            "{{ threshold }} - voilà le nombre d'annonces et dispositifs de suivi indiscrets déjà bloqués par la Protection de navigateur Avira lors de mes activités en ligne. Un outil gratuit et vivement recommandable !",
          lb_congratulations: "Félicitations !",
          lb_trackers_blocked_count: "{{ threshold }} annonces et dispositifs de suivi bloqués !",
          lb_trackers_milestone_subtitle: "Aidez votre famille et vos amis à se protéger eux aussi.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/fr/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/fr/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Twitter",
          lb_share: "Partager",
          lb_trackers: "Dispositifs de suivi",
          lb_ads: "Annonces",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Dispositifs de suivi</span> bloqués sur ce site Internet',
          lb_ads_blocked_this_page: '<span class="txt--orange">Annonces</span> bloquées sur ce site Internet',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Blocage total des pubs et dispositifs de suivi",
          lb_adblocking_credits:
            'Blocage des annonces publicitaires par <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    74: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Sito web sicuro",
          lb_unsafe_website: "Sito web non sicuro",
          lb_unsafe_content_website: "Contenuto non sicuro",
          lb_mse_website: "Motore di ricerca non affidabile",
          lb_trackers_blocked: '{{ count }} pubblicità e tracker <span class="txt--green">bloccati</span> su {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} pubblicità e tracker bloccati",
          lb_trackers_block_all: "Blocca su questo sito web",
          lb_trackers_allow_all: "Sblocca le pubblicità e i tracker",
          msg_no_trackers:
            "Sulla pagina non sono presenti tracker che potrebbero seguirla. Se apre un sito Web con i tracker attivi, l'elenco completo viene visualizzato qui.",
          msg_trackers_tooltip:
            "Questi sono tutti i tracker presenti sul sito Web che sta visualizzando. Può bloccare un tracker facendo clic sul dispositivo di scorrimento accanto al tracker stesso. Quando un dispositivo di scorrimento è verde, il tracker è bloccato e non può eseguire il tracking della sua attività di navigazione. Alcuni tracker sono autorizzati per default e bloccarli potrebbe causare un funzionamento non corretto della pagina Web.",
          lb_settings: "Impostazioni",
          lb_setting_offers: "Mostra il confronto prezzi",
          lb_setting_tooltip_offers: "Mostra le offerte migliori per gli articoli che stai acquistando: solo da siti web sicuri.",
          lb_setting_dnt_header: "Invia l'intestazione Do not track",
          lb_setting_tooltip_dnt_header:
            "Informa i siti web che non desideri che tengano traccia delle tue attività. Se ignorano la richiesta, SBA bloccherà ugualmente eventuali tracker.",
          lb_setting_top_bar: "Mostra indicatore di sicurezza",
          lb_setting_block_trackers: "Blocca i tracker in modo predefinito",
          lb_setting_tooltip_block_trackers: "Proteggi la tua privacy bloccando i tracker in modo predefinito.",
          lb_setting_cliqz: "CLIQZ Search",
          lb_setting_tooltip_cliqz:
            "CLIQZ Search ti suggerisce siti web e informazioni pertinenti in tempo reale mentre digiti i termini di ricerca nella barra del browser, rendendo la ricerca più rapida e sicura.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger blocca gli annunci spia e impedisce a tracker invisibili di tracciare segretamente le tue attività senza il tuo permesso.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere:
            "HTTPS Everywhere crittografa le comunicazioni e ti permette di navigare in modo più sicuro.",
          lb_setting_inAppTracking: "Statistiche anonime",
          lb_setting_tooltip_inAppTracking: "Aiutaci a migliorare il prodotto condividendo dati anonimi.",
          lb_setting_show_advanced_controls: "Controlli di navigazione addiz.",
          lb_setting_tooltip_show_advanced_controls: "Mostra le icone di Privacy Badger e HTTPS Everywhere nella barra degli strumenti.",
          lb_setting_google_services: "Servizi di Google",
          lb_setting_adguard: "Blocca le pubblicità e il web tracking",
          lb_setting_tooltip_adguard:
            "Protegge la tua privacy impedendo a chiunque di monitorare le tue attività online. Blocca anche popup, banner, video pubblicitari invadenti e molto altro ancora.",
          lb_setting_adguard_social_media: "Blocca il tracking dei social media",
          lb_setting_tooltip_adguard_social_media:
            "Disattiva i pulsanti e i widget dei social media presenti nei siti web per evitare che il social network possa tenere traccia dei siti visitati.",
          lb_setting_adguard_useful_ads: "Non bloccare le pubblicità utili",
          lb_setting_tooltip_adguard_useful_ads:
            "Consente la visualizzazione di pubblicità rilevanti e non invadenti nei risultati della ricerca.",
          lb_setting_extension_scan: "Analisi delle estensioni",
          lb_setting_tooltip_extension_scan:
            "Consenti l'invio di report anonimi ad Avira se vengono rilevate attività sospette durante la navigazione.",
          lb_setting_dark_mode: "Modalità scura",
          lb_setting_tooltip_dark_mode: "Attiva/disattiva la modalità scura",
          btn_blocking_back: "Non voglio più accedere.",
          lb_blocking_options: "Altre opzioni",
          lb_blocking_add_exception: "Non bloccare mai questo sito web",
          btn_blocking_continue: "Continua comunque",
          btn_dash_classification_cb_exception: "Non bloccare mai questo sito web",
          lb_dash_classification_exception_info_add: "Aggiunta di un'eccezione",
          msg_dash_classification_exception_info_add:
            "Questo sito NON è al momento incluso nell'elenco delle eccezioni. Se aggiungi un'eccezione, l'indirizzo non verrà bloccato quanto tenti di accedere al sito. Verrà comunque visualizzata un'avvertenza nella parte superiore della schermata.",
          lb_dash_classification_exception_info_remove: "Rimuovi un'eccezione",
          msg_dash_classification_exception_info_remove:
            "Questo sito è attualmente incluso nell'elenco delle eccezioni. Se rimuovi l'eccezione, l'indirizzo verrà bloccato ogni volta che tenti di accedere al sito.",
          lb_privacy: "Policy sulla privacy",
          lnk_privacy: "https://www.avira.com/it/general-privacy",
          lb_eula: "Contratto di licenza con l''utente finale",
          lnk_eula: "https://www.avira.com/it/license-agreement-terms-of-use",
          lb_discover_mode: "Scopri di più",
          lb_feedback: "Feedback",
          lb_feedback_question: "Come valuteresti la tua esperienza?",
          lb_feedback_send: "Invia",
          lb_feedback_send_title: "Invia un feedback anonimo ad Avira",
          lb_feedback_thank_you: "Grazie.",
          lb_feedback_thank_you_feedback: "Grazie per il feedback",
          lb_feedback_help_improve: "Il tuo feedback ci aiuta a migliorare l'app",
          lb_feedback_rate_store: "Potresti prenderti un momento per valutare {0} nel negozio di {1}?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Valuta ora",
          lb_feedback_later: "Più tardi",
          lb_rate: "Valuta l’app",
          lb_dash_pua_action_cancel: "Annulla download",
          msg_mse_bar_warning: "Le impostazioni di ricerca potrebbero essere state manomesse.",
          lb_mse_take_me_away: "Non voglio più accedere!",
          lnk_avira: "https://www.avira.com/it/",
          lb_mse_hide_warning: "Questo motore di ricerca è affidabile",
          msg_blocked_iframe_replacement: "Contenuto non sicuro",
          lb_unsafe_content_bar_warning: "Sicurezza browser Avira ha impedito il caricamento di contenuto non sicuro su questa pagina web.",
          lb_unsafe_content_bar_ignore: "Non mostrare il messaggio in futuro",
          lb_extension_permission_notification_extension_description:
            "L'estensione Sicurezza browser Avira richiede il tuo consenso per inviare ad Avira un report sulle attività sospette.",
          lb_extension_permission_notification_extension_permission_title:
            "Consenti l'invio di report anonimi ad Avira se vengono rilevate attività sospette durante la navigazione.",
          lb_extension_permission_notification_extension_permission_button: "Consenti",
          lb_extension_permission_notification_extension_permission_no_title:
            "Puoi attivare in ogni momento questa funzione nelle impostazioni.",
          lb_extension_permission_notification_extension_permission_no_button: "Non chiedere più in futuro",
          lb_unsafe_content: "Contenuto non sicuro",
          msg_dash_unsafe_content_details_no_exception: "Contenuto bloccato perchè non sicuro:",
          msg_dash_unsafe_content_details_exception: "Contenuto bloccato perchè non sicuro",
          msg_dash_unsafe_content_risk_no_exception: "Per motivi di sicurezza ti consigliamo di mantenere il contenuto bloccato.",
          msg_dash_unsafe_content_risk_exception:
            "Per motivi di sicurezza ti consigliamo di bloccare il contenuto non sicuro, rimuovendo l'eccezione.",
          lb_dash_unsafe_content_show_details: "Dettagli tecnici",
          lb_dash_unsafe_content_hide_details: "Nascondi",
          msg_category_unknown: "Impossibile trovare informazioni per questo sito web.",
          msg_category_safe: "Nessuna minaccia conosciuta.",
          msg_category_malware: "Questo è un sito di malware",
          msg_category_malware_sub: "I siti di malware infettano il tuo dispositivo e possono contenere virus, worm, spyware e trojan.",
          msg_category_phishing: "Questo è un sito di phishing",
          msg_category_phishing_sub:
            "I siti di phishing ingannano l'utente portandolo a rivelare le informazioni personali come le password e informazioni relative al conto bancario.",
          msg_category_spam: "Questo è un sito di spam",
          msg_category_spam_sub:
            "I siti di spam ottengono l'indirizzo email dell'utente in modo da poter inviare materiale pubblicitario non richiesto.",
          msg_category_pua: "Il download contiene applicazioni potenzialmente indesiderate",
          msg_category_pua2: "Questo sito web distribuisce PUA",
          msg_category_pua2_sub:
            "Le applicazioni potenzialmente indesiderate (PUA) contengono funzionalità o hanno effetti indesiderati dagli utenti.",
          msg_category_mse: "Motore di ricerca non affidabile",
          msg_category_mse_sub:
            "Questo motore di ricerca è sospetto poiché è risaputo che malware e applicazioni potenzialmente indesiderate vi reindirizzano il traffico.",
          msg_category_unsafe_content: "Contenuto bloccato perchè non sicuro",
          msg_category_unsafe_content_sub:
            "Le pagine web caricano un contenuto non sicuro se sono state compromesse o se il contenuto di terze parti ha subito attacchi o è intenzionalmente dannoso.",
          msg_what_is_pua: "Cosa sono le PUA?",
          lnk_what_is_pua: "https://www.avira.com/it-it/potentially-unwanted-applications",
          lb_tab_privacy: "Privacy",
          lb_tab_security: "Sicurezza",
          lb_my_modes: "Modalità",
          msg_mode_select: "Seleziona la modalità più adatta alle<br/>tue esigenze",
          "lb_mode_safe-surfing": "Navigazione sicura",
          "lb_mode_safe-private": "Sicura e privata",
          lb_mode_custom: "Personalizzata",
          lb_powered_by_avira: "Powered by Avira",
          lb_help: "Guida",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} pubblicità e #tracker sono stati bloccati da #Sicurezza browser Avira. Scaricalo ora #gratis!",
          lb_trackers_facebook_share:
            "{{ threshold }} - ecco il numero di pubblicità e tracker a cui finora Sicurezza browser Avira ha impedito di spiare le mie attività online. È gratuito e lo raccomando caldamente.",
          lb_congratulations: "Congratulazioni!",
          lb_trackers_blocked_count: "{{ threshold }} pubblicità e tracker bloccati!",
          lb_trackers_milestone_subtitle: "Aiuta anche parenti e amici a proteggersi.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/it/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/it/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Condividi",
          lb_trackers: "Tracker",
          lb_ads: "Pubblicità",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Tracker</span> bloccati su questo sito web',
          lb_ads_blocked_this_page: '<span class="txt--orange">Pubblicità</span> bloccate su questo sito web',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>pubblicità e tracker bloccati in totale",
          lb_adblocking_credits: 'Blocco della pubblicità tramite <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    75: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "安全なウェブサイト",
          lb_unsafe_website: "安全でないウェブサイト",
          lb_unsafe_content_website: "安全でないコンテンツ",
          lb_mse_website: "信頼できない検索エンジン",
          lb_trackers_blocked: '{{ domain }} の {{ count }} 件の広告およびトラッカーが<span class="txt--green">ブロック</span>されました',
          lb_trackers_blocked_short: "{{ count }} 件の広告およびトラッカーがブロックされました",
          lb_trackers_block_all: "このウェブサイトでブロック",
          lb_trackers_allow_all: "広告およびトラッカーのブロックを解除",
          msg_no_trackers:
            "現在のページでは、ユーザーを追跡するトラッカーはありません。アクティブ トラッカーのあるウェブサイトを開くと、完全なリストがここに表示されます。",
          msg_trackers_tooltip:
            "これらが、閲覧しているウェブサイトのトラッカーすべてです。隣のスライダーをクリックすることでトラッカーをブロックできます。スライダーが緑になると、トラッカーはブロックされ、ブラウジング アクティビティを追跡できなくなります。一部のトラッカーはデフォルトで許可されていることに注意してください。これらをブロックすると、ウェブページが正しく動作しなくなることがあります。",
          lb_settings: "設定",
          lb_setting_offers: "価格比較を表示",
          lb_setting_tooltip_offers: "安全なウェブサイトのみから、ショッピングしているアイテムの、より優れたセールを表示します。",
          lb_setting_dnt_header: "「ヘッダーを追跡しない」を送信",
          lb_setting_tooltip_dnt_header:
            "ユーザーを追跡しないようにウェブサイトに通知します。要求を無視すると、ABS は依然としてトラッカーをブロックします。",
          lb_setting_top_bar: "安全サインを表示",
          lb_setting_block_trackers: "デフォルトでトラッカーをブロック",
          lb_setting_tooltip_block_trackers: "デフォルトでトラッカーをブロックしてプライバシーを保護します。",
          lb_setting_cliqz: "CLIQZ 検索",
          lb_setting_tooltip_cliqz:
            "CLIQZ 検索は、ブラウザ バーの検索に移動する際にリアルタイムでウェブサイトおよび関連情報を提案します。これにより、検索が安全かつ高速になります。",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger は、スパイ広告をブロックし、隠れたトラッカーがユーザーの許可なしに秘密で追跡を行えないようにします。",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere は、通信を暗号化し、ブラウジングをより安全にします。",
          lb_setting_inAppTracking: "匿名統計",
          lb_setting_tooltip_inAppTracking: "匿名データを共有することで、製品向上に貢献します。",
          lb_setting_show_advanced_controls: "その他のブラウジング コントロールを表示",
          lb_setting_tooltip_show_advanced_controls: "Privacy Badger および HTTPS Everywhere アイコンをツールバーに表示します。",
          lb_setting_google_services: "Google サービス",
          lb_setting_adguard: "広告およびウェブ追跡をブロック",
          lb_setting_tooltip_adguard:
            "ユーザーがオンラインで監視されないようにすることでプライバシーを保護します。また、迷惑なポップアップ、ウェブ バナー、ビデオ広告などもブロックします。",
          lb_setting_adguard_social_media: "ソーシャル メディア追跡のブロック",
          lb_setting_tooltip_adguard_social_media:
            "ソーシャル メディア ボタンおよびウィジェットをウェブサイトから無効にします。そうすることで、ソーシャル ネットワークは、ユーザーがアクセスしたサイトを追跡できなくなります。",
          lb_setting_adguard_useful_ads: "有用な広告をブロックしないでください",
          lb_setting_tooltip_adguard_useful_ads: "関連性があり、迷惑でない広告が検索結果に表示されるようにします。",
          lb_setting_extension_scan: "拡張子の分析",
          lb_setting_tooltip_extension_scan:
            "ブラウジングの際に疑わしいアクティビティが検出された場合は、匿名レポートを Avira に送信できるようにします。",
          lb_setting_dark_mode: "ダークモード",
          lb_setting_tooltip_dark_mode: "ダークモードの有効/無効を切り替える",
          btn_blocking_back: "解除する",
          lb_blocking_options: "その他のオプション",
          lb_blocking_add_exception: "今後、このウェブサイトをブロックしない",
          btn_blocking_continue: "継続する",
          btn_dash_classification_cb_exception: "今後、このウェブサイトをブロックしない",
          lb_dash_classification_exception_info_add: "例外の追加",
          msg_dash_classification_exception_info_add:
            "このサイトは現在、例外リストにありません。例外を追加すると、そのアドレスを表示しようとしたときに、アドレスがブロックされなくなります。画面の上部には依然として警告が表示されます。",
          lb_dash_classification_exception_info_remove: "例外の削除",
          msg_dash_classification_exception_info_remove:
            "このサイトは現在、例外リストに記載されています。例外を削除すると、表示しようとするたびに、このアドレスがブロックされるようになります。",
          lb_privacy: "プライバシー ポリシー",
          lnk_privacy: "www.avira.com/ja/general-privacy",
          lb_eula: "エンド ユーザー使用許諾契約書",
          lnk_eula: "https://www.avira.com/ja/license-agreement-terms-of-use",
          lb_discover_mode: "詳細を発見",
          lb_feedback: "フィードバック",
          lb_feedback_question: "このアプリの使用感を評価してください?",
          lb_feedback_send: "送信",
          lb_feedback_send_title: "匿名のフィードバックを Avira に送信",
          lb_feedback_thank_you: "ありがとうございます！",
          lb_feedback_thank_you_feedback: "フィードバックをいただきありがとうございます",
          lb_feedback_help_improve: "いただいたフィードバックは、アプリの改善に役立てさせていただきます",
          lb_feedback_rate_store: "よろしければ {1} オンライン ショップで {0} の評価にご協力ください。",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "今すぐ評価する",
          lb_feedback_later: "後で",
          lb_rate: "アプリの評価",
          lb_dash_pua_action_cancel: "ダウンロードのキャンセル",
          msg_mse_bar_warning: "お使いの検索エンジン設定は、改ざんされている可能性がありました。",
          lb_mse_take_me_away: "解除する!",
          lnk_avira: "https://www.avira.com/ja/",
          lb_mse_hide_warning: "この検索エンジンを信用します",
          msg_blocked_iframe_replacement: "安全でないコンテンツ",
          lb_unsafe_content_bar_warning: "Avira Browser Safety は、このウェブページでの安全でないコンテンツの読み込みを回避しました。",
          lb_unsafe_content_bar_ignore: "今後、メッセージを表示しない",
          lb_extension_permission_notification_extension_description:
            "Avira Browser Safety 拡張子は、疑わしいアクティビティについてのレポートを Avira に送信するためにユーザーの承諾を必要としています。",
          lb_extension_permission_notification_extension_permission_title:
            "ブラウジングの際に疑わしいアクティビティが検出された場合は、匿名レポートを Avira に送信できるようにします。",
          lb_extension_permission_notification_extension_permission_button: "許可",
          lb_extension_permission_notification_extension_permission_no_title: "この機能は、設定でいつでも有効化することができます。",
          lb_extension_permission_notification_extension_permission_no_button: "再度質問しない",
          lb_unsafe_content: "安全でないコンテンツ",
          msg_dash_unsafe_content_details_no_exception: "安全でないコンテンツがブロックされました：",
          msg_dash_unsafe_content_details_exception: "安全でないコンテンツがブロックされました",
          msg_dash_unsafe_content_risk_no_exception: "安全のためにも、コンテンツのブロックを維持することが推奨されます。",
          msg_dash_unsafe_content_risk_exception: "安全のためにも、例外を削除して安全でないコンテンツをブロックすることが推奨されます。",
          lb_dash_unsafe_content_show_details: "技術詳細",
          lb_dash_unsafe_content_hide_details: "非表示にする",
          msg_category_unknown: "このウェブサイトに関して見つかった情報はありません。",
          msg_category_safe: "既知の脅威はありません。",
          msg_category_malware: "これは、マルウェア ウェブサイトです",
          msg_category_malware_sub:
            "マルウェア ウェブサイトはデバイスに感染します。そして、ウイルス、ワーム、スパイウェア、およびトロイの木馬に感染させることができます。",
          msg_category_phishing: "これはフィッシング ウェブサイトです",
          msg_category_phishing_sub:
            "フィッシング ウェブサイトはユーザーを騙して、パスワードおよび銀行口座の情報などのアカウント情報を開示します。",
          msg_category_spam: "これは、スパム ウェブサイトです",
          msg_category_spam_sub: "スパム ウェブサイトはユーザーのメール アドレスを取得し、電子メールで広告を送信します。",
          msg_category_pua: "ダウンロード コンテンツには、潜在的に迷惑なアプリケーションが含まれます",
          msg_category_pua2: "このウェブサイトは、PUA を配布します",
          msg_category_pua2_sub:
            "潜在的に迷惑なアプリケーション（PUA）は、ユーザーが迷惑であると感じる動作を起こしたり、このような機能を含みます。",
          msg_category_mse: "信頼できない検索エンジン",
          msg_category_mse_sub:
            "この検索エンジンは信頼できません。これは、マルウェアおよび潜在的に迷惑なアプリケーションがトラフィックをリダイレクトすることが知られているためです。",
          msg_category_unsafe_content: "安全でないコンテンツがブロックされました",
          msg_category_unsafe_content_sub:
            "危険にされされているコンテンツまたは第三者コンテンツがハッキングされたり、意図的に有害なものである場合、ウェブページは安全でないコンテンツをロードします。",
          msg_what_is_pua: "PUA とは何か？",
          lnk_what_is_pua: "https://www.avira.com/ja/potentially-unwanted-applications",
          lb_tab_privacy: "プライバシー",
          lb_tab_security: "セキュリティ",
          lb_my_modes: "モード",
          msg_mode_select: "ニーズ<br/>に最も適したモードを選択します",
          "lb_mode_safe-surfing": "安全なサーフィン",
          "lb_mode_safe-private": "安全かつプライベート",
          lb_mode_custom: "カスタム",
          lb_powered_by_avira: "Powered by Avira",
          lb_help: "ヘルプ",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} 件の広告および #trackers は #Avira Browser Safety によってブロックされました。#forfree で入手しましょう！",
          lb_trackers_facebook_share:
            "{{ threshold }} - Avira Browser Safety はこれまで、これほど多くの広告およびトラッカーによる、オンライン アクティビティのスパイ行為をブロックしました。無料ですし、非常にお勧めです。",
          lb_congratulations: "おめでとうございます!",
          lb_trackers_blocked_count: "{{ threshold }} 件の広告およびトラッカーがブロックされました！",
          lb_trackers_milestone_subtitle: "家族や友達も保護します。",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/ja/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/ja/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "ツィート",
          lb_share: "共有",
          lb_trackers: "トラッカー",
          lb_ads: "広告",
          lb_trackers_blocked_this_page: 'このウェブサイトでブロックされた<span class="txt--orange-dark">トラッカー</span>',
          lb_ads_blocked_this_page: 'このウェブサイトでブロックされた<span class="txt--orange">広告</span>',
          lb_blocked_total: "全体で <strong>{{ countTotal }}</strong><br> 件の広告およびトラッカーがブロックされました",
          lb_adblocking_credits: '<a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>による広告ブロック'
        };
      },
      {}
    ],
    76: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Veilige website",
          lb_unsafe_website: "Onveilige website",
          lb_unsafe_content_website: "Onveilige inhoud",
          lb_mse_website: "Niet-vertrouwde zoekmachine",
          lb_trackers_blocked: '{{ count }} advertenties en trackers <span class="txt--green">geblokkeerd</span> op {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} advertenties en trackers geblokkeerd",
          lb_trackers_block_all: "Op deze website blokkeren",
          lb_trackers_allow_all: "Advertenties en trackers niet meer blokkeren",
          msg_no_trackers:
            "Er zijn geen trackers die u volgen op de huidige pagina. Wanneer u een website met actieve trackers opent, wordt de volledige lijst hier weergegeven.",
          msg_trackers_tooltip:
            "Dit zijn alle trackers op de website die u bekijkt. U kunt een tracker blokkeren door op de schuifknop ernaast te klikken. Wanneer de schuifknop groen is, is de tracker geblokkeerd en kan deze uw surfgedrag niet traceren. Let op: sommige trackers worden standaard toegelaten. De website werkt misschien niet goed als u deze blokkeert.",
          lb_settings: "Instellingen",
          lb_setting_offers: "Prijsvergelijkingen tonen",
          lb_setting_tooltip_offers: "Toon betere aanbiedingen voor artikelen die u wilt kopen van alleen veilige websites.",
          lb_setting_dnt_header: "Niet traceren-header versturen",
          lb_setting_tooltip_dnt_header:
            "Laat websites weten dat u niet getraceerd wilt worden. Indien zij dit verzoek negeren, zal ABS toch alle trackers blokkeren.",
          lb_setting_top_bar: "Beveiligingsindicator tonen",
          lb_setting_block_trackers: "Trackers standaard blokkeren",
          lb_setting_tooltip_block_trackers: "Bescherm uw privacy door trackers standaard te blokkeren.",
          lb_setting_cliqz: "CLIQZ Search",
          lb_setting_tooltip_cliqz:
            "CLIQZ Search geeft u suggesties voor websites met relevante informatie in realtime terwijl u uw zoekopdracht in de browserzoekbalk intypt, waardoor u veiliger en sneller kunt zoeken.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger blokkeert spionerende advertenties en voorkomt dat onzichtbare trackers u onopgemerkt volgen zonder uw toestemming.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everyhwere versleutelt uw berichten zodat u veiliger kunt surfen.",
          lb_setting_inAppTracking: "Anonieme statistieken",
          lb_setting_tooltip_inAppTracking: "Help ons het product te verbeteren door anonieme data te delen.",
          lb_setting_show_advanced_controls: "Extra instellingen voor het surfen tonen",
          lb_setting_tooltip_show_advanced_controls: "Geeft de pictogrammen van Privacy Badger en HTTPS Everywhere weer in de werkbalk.",
          lb_setting_google_services: "Google-diensten",
          lb_setting_adguard: "Advertenties & online traceren blokkeren",
          lb_setting_tooltip_adguard:
            "Beschermt uw privacy door te voorkomen dat iemand u online kan volgen. Blokkeert ook opdringerige pop-ups, banners, video-advertenties en meer.",
          lb_setting_adguard_social_media: "Traceren via social media blokkeren",
          lb_setting_tooltip_adguard_social_media:
            "Schakelt social media-knoppen en -widgets op websites uit, zodat sociale netwerken niet kunnen bijhouden welke websites u bezoekt.",
          lb_setting_adguard_useful_ads: "Bruikbare advertenties niet blokkeren",
          lb_setting_tooltip_adguard_useful_ads: "Hierdoor worden relevante, niet-opdringerige advertenties in uw zoekresultaten getoond.",
          lb_setting_extension_scan: "Extensie-analyse",
          lb_setting_tooltip_extension_scan:
            "Geef toestemming een anoniem rapport naar Avira te versturen wanneer er verdachte activiteiten worden gedetecteerd tijdens het surfen.",
          lb_setting_dark_mode: "Donkere modus",
          lb_setting_tooltip_dark_mode: "Donkere modus in-/uitschakelen",
          btn_blocking_back: "Haal me hier weg!",
          lb_blocking_options: "Meer opties",
          lb_blocking_add_exception: "Deze website nooit blokkeren",
          btn_blocking_continue: "Toch doorgaan",
          btn_dash_classification_cb_exception: "Deze website nooit blokkeren",
          lb_dash_classification_exception_info_add: "Een uitzondering toevoegen",
          msg_dash_classification_exception_info_add:
            "Deze site staat nu NIET op uw uitzonderingenlijst. Wanneer u een uitzondering toevoegt, wordt het adres niet geblokkeerd wanneer u deze probeert te bekijken. U blijft wel de waarschuwing boven aan het scherm zien.",
          lb_dash_classification_exception_info_remove: "Een uitzondering verwijderen",
          msg_dash_classification_exception_info_remove:
            "Deze site staat nu op uw uitzonderingenlijst. Wanneer u een uitzondering verwijdert, wordt het adres geblokkeerd wanneer u deze probeert te bekijken.",
          lb_privacy: "Privacybeleid",
          lnk_privacy: "https://www.avira.com/nl/general-privacy",
          lb_eula: "Licentieovereenkomst voor eindgebruiker",
          lnk_eula: "http://www.avira.com/nl/license-agreement-terms-of-use",
          lb_discover_mode: "Meer ontdekken",
          lb_feedback: "Feedback",
          lb_feedback_question: "Hoe zou u uw ervaring beoordelen?",
          lb_feedback_send: "Verzenden",
          lb_feedback_send_title: "Anonieme feedback verzenden naar Avira",
          lb_feedback_thank_you: "Dank u!",
          lb_feedback_thank_you_feedback: "Bedankt voor uw feedback",
          lb_feedback_help_improve: "Met uw feedback kunnen we de app verbeteren",
          lb_feedback_rate_store: "Zou u even de tijd willen nemen om {0} te beoordelen in de {1} Store?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Nu beoordelen",
          lb_feedback_later: "Later",
          lb_rate: "App beoordelen",
          lb_dash_pua_action_cancel: "Download annuleren",
          msg_mse_bar_warning: "De instellingen van uw zoekmachine zijn mogelijk ongewenst veranderd.",
          lb_mse_take_me_away: "Haal me hier weg!",
          lnk_avira: "https://www.avira.com/nl/",
          lb_mse_hide_warning: "Ik vertrouw deze zoekmachine",
          msg_blocked_iframe_replacement: "Onveilige inhoud",
          lb_unsafe_content_bar_warning: "Avira Browser Safety voorkwam dat er onveilige inhoud op deze webpagina werd geladen.",
          lb_unsafe_content_bar_ignore: "Dit bericht niet meer tonen",
          lb_extension_permission_notification_extension_description:
            "De Avira Browser Safety-extensie heeft uw toestemming nodig om een rapport over verdachte activiteiten naar Avira te versturen.",
          lb_extension_permission_notification_extension_permission_title:
            "Geef toestemming een anoniem rapport naar Avira te versturen wanneer er verdachte activiteiten worden gedetecteerd tijdens het surfen.",
          lb_extension_permission_notification_extension_permission_button: "Toestaan",
          lb_extension_permission_notification_extension_permission_no_title:
            "U kunt deze functie op ieder moment inschakelen bij Instellingen.",
          lb_extension_permission_notification_extension_permission_no_button: "Niet meer vragen",
          lb_unsafe_content: "Onveilige inhoud",
          msg_dash_unsafe_content_details_no_exception: "Onveilige inhoud geblokkeerd:",
          msg_dash_unsafe_content_details_exception: "Onveilige inhoud geblokkeerd",
          msg_dash_unsafe_content_risk_no_exception: "Voor veiligheidsredenen wordt u aangeraden de inhoud te blijven blokkeren.",
          msg_dash_unsafe_content_risk_exception:
            "Voor veiligheidsredenen wordt u aangeraden de onveilige inhoud te blokkeren door de uitzondering te verwijderen.",
          lb_dash_unsafe_content_show_details: "Technische details",
          lb_dash_unsafe_content_hide_details: "Verbergen",
          msg_category_unknown: "Er is geen informatie voor deze website gevonden.",
          msg_category_safe: "Geen bekende dreigingen.",
          msg_category_malware: "Dit is een malwarewebsite",
          msg_category_malware_sub:
            "Malwarewebsites besmetten uw apparaat en kunnen virussen, wormen, spyware en Trojaanse paarden bevatten.",
          msg_category_phishing: "Dit is een phishingwebsite",
          msg_category_phishing_sub:
            "Phishingwebsites misleiden u om persoonlijke informatie bekend te maken zoals wachtwoorden en bankrekeninginformatie.",
          msg_category_spam: "Dit is een spamwebsite",
          msg_category_spam_sub: "Spamwebsites bemachtigen uw e-mailadres om u via e-mail advertenties te sturen.",
          msg_category_pua: "De download bevat Potentieel Ongewilde Toepassingen",
          msg_category_pua2: "Deze website verspreidt PUA's",
          msg_category_pua2_sub:
            "Potentieel Ongewilde Toepassingen (PUA's) tonen gedrag of bevatten functies die door gebruikers als ongewenst worden beschouwd.",
          msg_category_mse: "Niet-vertrouwde zoekmachine",
          msg_category_mse_sub:
            "Deze zoekmachine is niet vertrouwd omdat het bekend is dat malware en Potentieel Ongewilde Toepassingen er verkeer naar omleiden.",
          msg_category_unsafe_content: "Onveilige inhoud geblokkeerd",
          msg_category_unsafe_content_sub:
            "Webpagina's laden onveilige inhoud als deze gecompromitteerd zijn of inhoud van derden gehackt of doelbewust schadelijk is.",
          msg_what_is_pua: "Wat is een PUA?",
          lnk_what_is_pua: "https://www.avira.com/en/potentially-unwanted-applications",
          lb_tab_privacy: "Privacy",
          lb_tab_security: "Beveiliging",
          lb_my_modes: "Modi",
          msg_mode_select: "Selecteer de modus die het beste past<br/>bij uw behoeften",
          "lb_mode_safe-surfing": "Veilig surfen",
          "lb_mode_safe-private": "Veilig en privé",
          lb_mode_custom: "Aangepast",
          lb_powered_by_avira: "Aangeboden door Avira",
          lb_help: "Help",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} advertenties en #trackers werden geblokkeerd door #Avira Browser Safety. Krijg de uwe nu #gratis!",
          lb_trackers_facebook_share:
            "{{ threshold }} - Zoveel advertenties en trackers heeft Avira Browser Safety tot nu toe gestopt met het bespioneren van mijn activiteiten online. Het is gratis en ik kan het zeer aanbevelen.",
          lb_congratulations: "Gefeliciteerd!",
          lb_trackers_blocked_count: "{{ threshold }} advertenties en trackers geblokkeerd!",
          lb_trackers_milestone_subtitle: "Help uw familie en vrienden ook te beschermen.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/nl/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/nl/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweeten",
          lb_share: "Delen",
          lb_trackers: "Trackers",
          lb_ads: "Advertenties",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Trackers</span> op deze website geblokkeerd',
          lb_ads_blocked_this_page: '<span class="txt--orange">Advertenties</span> op deze website geblokkeerd',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Totaal aantal geblokkeerde advertenties en trackers",
          lb_adblocking_credits: 'Advertenties blokkeren met <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    77: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Site seguro",
          lb_unsafe_website: "Site inseguro",
          lb_unsafe_content_website: "Conteúdos inseguros",
          lb_mse_website: "Mecanismo de pesquisa não confiável",
          lb_trackers_blocked: '{{ count }} anúncios e rastreadores <span class="txt--green">bloqueados</span> em {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} anúncios e rastreadores bloqueados",
          lb_trackers_block_all: "Bloqueios neste site",
          lb_trackers_allow_all: "Desbloquear anúncios e rastreadores",
          msg_no_trackers:
            "Não existem quaisquer rastreadores seguindo você na página atual. Se você abrir um site com rastreadores ativos, a lista completa será exibida aqui.",
          msg_trackers_tooltip:
            "Estes são todos os rastreadores no site que você está visualizando. Você pode bloquear um rastreador clicando no controle deslizante que se encontra ao lado. Se um controle deslizante estiver verde, esse rastreador encontra-se bloqueado e não consegue rastrear sua atividade de navegação. Observe que alguns rastreadores são permitidos por padrão. Bloqueá-los poderá prejudicar o funcionamento da página web.",
          lb_settings: "Configurações",
          lb_setting_offers: "Exibir comparações de preços",
          lb_setting_tooltip_offers: "Exibir negócios melhores para os itens que você está comprando somente de sites seguros.",
          lb_setting_dnt_header: "Enviar cabeçalho Do Not Track",
          lb_setting_tooltip_dnt_header:
            "Informe os sites de que não devem rastrear você. Se ignorarem o pedido, a Segurança do navegador Avira ainda bloqueia todos os rastreadores.",
          lb_setting_top_bar: "Mostrar indicador de segurança",
          lb_setting_block_trackers: "Bloquear rastreadores por padrão",
          lb_setting_tooltip_block_trackers: "Proteja sua privacidade bloqueando rastreadores por padrão.",
          lb_setting_cliqz: "Mecanismo de pesquisa CLIQZ",
          lb_setting_tooltip_cliqz:
            "O mecanismo de pesquisa CLIQZ sugere a você sites e informações importantes em tempo real, enquanto você digita sua pesquisa na barra de navegação, permitindo que você pesquise de forma mais segura e rápida.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "O Privacy Badger bloqueia anúncios de espionagem e previne que rastreadores invisíveis o rastreiem secretamente, sem sua permissão.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "O HTTPS Everywhere criptografa suas comunicações e torna sua navegação mais segura.",
          lb_setting_inAppTracking: "Estatísticas anônimas",
          lb_setting_tooltip_inAppTracking: "Ajude-nos a melhorar o produto, compartilhando dados anônimos.",
          lb_setting_show_advanced_controls: "Controles de navegação extra",
          lb_setting_tooltip_show_advanced_controls: "Exibe ícones de Privacy Badger e HTTPS Everywhere na barra de ferramentas.",
          lb_setting_google_services: "Google Services",
          lb_setting_adguard: "Bloquear anúncios e rastreamento da web",
          lb_setting_tooltip_adguard:
            "Protege sua privacidade impedindo que qualquer pessoa possa monitorá-lo online. Também bloqueia pop-ups intrusivos, banners da web, anúncios em vídeo e outros.",
          lb_setting_adguard_social_media: "Bloquear rastreamento de mídia social",
          lb_setting_tooltip_adguard_social_media:
            "Desativa botões de mídias sociais e widgets de sites, para que as redes sociais não possam fazer o rastreamento dos sites que você visitar.",
          lb_setting_adguard_useful_ads: "Não bloquear anúncios úteis",
          lb_setting_tooltip_adguard_useful_ads:
            "Permite que anúncios relevantes e não intrusivos sejam mostrados nos resultados da pesquisa.",
          lb_setting_extension_scan: "Análise de extensões",
          lb_setting_tooltip_extension_scan:
            "Permite enviar um relatório anônimo à Avira se atividades suspeitas forem detectadas durante a navegação.",
          lb_setting_dark_mode: "Modo escuro",
          lb_setting_tooltip_dark_mode: "Desativar/ativar modo escuro",
          btn_blocking_back: "Tire-me daqui!",
          lb_blocking_options: "Mais opções",
          lb_blocking_add_exception: "Nunca bloquear este site",
          btn_blocking_continue: "Continuar mesmo assim",
          btn_dash_classification_cb_exception: "Nunca bloquear este site",
          lb_dash_classification_exception_info_add: "Adicionando uma exceção",
          msg_dash_classification_exception_info_add:
            "Este site NÃO está atualmente em sua lista de exceções. Quando você adiciona uma exceção, o endereço não será bloqueado ao tentar visualizá-lo. Você ainda verá a advertência na parte superior da tela.",
          lb_dash_classification_exception_info_remove: "Removendo uma exceção",
          msg_dash_classification_exception_info_remove:
            "Este site está atualmente em sua lista de exceções. Se remover a exceção, o endereço será bloqueado sempre que você tentar exibi-lo.",
          lb_privacy: "Política de privacidade",
          lnk_privacy: "https://www.avira.com/pt-br/general-privacy",
          lb_eula: "Contrato de Licença de Usuário Final",
          lnk_eula: "https://www.avira.com/pt-br/license-agreement-terms-of-use",
          lb_discover_mode: "Descubra mais",
          lb_feedback: "Comentários",
          lb_feedback_question: "Como você avaliaria sua experiência?",
          lb_feedback_send: "Enviar",
          lb_feedback_send_title: "Envie um comentário anônimo para a Avira",
          lb_feedback_thank_you: "Obrigado!",
          lb_feedback_thank_you_feedback: "Obrigado pelo seu comentário",
          lb_feedback_help_improve: "Seus comentários nos ajudam a melhorar o app",
          lb_feedback_rate_store: "Você poderia reservar um momento e avaliar o {0} na loja do {1}?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Avaliar agora",
          lb_feedback_later: "Mais tarde",
          lb_rate: "Classificar aplicativo",
          lb_dash_pua_action_cancel: "Cancelar download",
          msg_mse_bar_warning: "Suas configurações de motor de busca podem ter sido alteradas.",
          lb_mse_take_me_away: "Tire-me daqui!",
          lnk_avira: "https://www.avira.com/pt-br/",
          lb_mse_hide_warning: "Eu confio nesse mecanismo de pesquisa",
          msg_blocked_iframe_replacement: "Conteúdos inseguros",
          lb_unsafe_content_bar_warning:
            "A Segurança do navegador Avira impediu o carregamento de conteúdos inseguros nessa página da Web.",
          lb_unsafe_content_bar_ignore: "Não exibir essa mensagem novamente.",
          lb_extension_permission_notification_extension_description:
            "A extensão de Segurança do navegador Avira precisa de sua aprovação para enviar-nos um relatório sobre atividades suspeitas.",
          lb_extension_permission_notification_extension_permission_title:
            "Permite enviar um relatório anônimo à Avira se atividades suspeitas forem detectadas durante a navegação.",
          lb_extension_permission_notification_extension_permission_button: "Permitir",
          lb_extension_permission_notification_extension_permission_no_title:
            "Você pode ativar este recurso a qualquer momento nas configurações.",
          lb_extension_permission_notification_extension_permission_no_button: "Não perguntar novamente",
          lb_unsafe_content: "Conteúdos inseguros",
          msg_dash_unsafe_content_details_no_exception: "Conteúdos inseguros bloqueados:",
          msg_dash_unsafe_content_details_exception: "Conteúdos inseguros bloqueados",
          msg_dash_unsafe_content_risk_no_exception: "Para sua segurança, é recomendável manter os conteúdos bloqueados.",
          msg_dash_unsafe_content_risk_exception: "Para sua segurança, é recomendável remover a exceção e bloquear os conteúdos inseguros.",
          lb_dash_unsafe_content_show_details: "Detalhes técnicos",
          lb_dash_unsafe_content_hide_details: "Ocultar",
          msg_category_unknown: "Não existem informações sobre este site.",
          msg_category_safe: "Nenhuma ameaça conhecida.",
          msg_category_malware: "Esse é um site de malware",
          msg_category_malware_sub: "Os sites de malware infetam seu dispositivo e podem incluir vírus, worms, spyware e Cavalos de Troia.",
          msg_category_phishing: "Esse é um site de phishing",
          msg_category_phishing_sub:
            "Os sites de phishing induzem o usuário a revelar suas informações pessoais, tais como senhas e informações de contas bancárias.",
          msg_category_spam: "Esse é um site de spam",
          msg_category_spam_sub: "Os sites de spam capturam o seu endereço de email para enviar publicidade por email.",
          msg_category_pua: "O download contém aplicativos potencialmente indesejados",
          msg_category_pua2: "Esse site distribui PUA",
          msg_category_pua2_sub:
            "Os aplicativos potencialmente indesejados (PUA) exibem um comportamento ou contêm recursos considerados indesejados pelos usuários.",
          msg_category_mse: "Mecanismo de pesquisa não confiável",
          msg_category_mse_sub:
            "Esse mecanismo de pesquisa é visto com desconfiança por o malware e os aplicativos potencialmente indesejados serem conhecidos por redirecionar tráfego.",
          msg_category_unsafe_content: "Conteúdos inseguros bloqueados",
          msg_category_unsafe_content_sub:
            "As páginas da Web carregam conteúdos inseguros se os conteúdos comprometidos ou de terceiros forem atacados por hackers ou forem intencionalmente nocivos.",
          msg_what_is_pua: "O que são PUA?",
          lnk_what_is_pua: "https://www.avira.com/pt/potentially-unwanted-applications",
          lb_tab_privacy: "Privacidade",
          lb_tab_security: "Segurança",
          lb_my_modes: "Modos",
          msg_mode_select: "Selecione o modo que melhor atende<br/>suas necessidades",
          "lb_mode_safe-surfing": "Navegação segura",
          "lb_mode_safe-private": "Seguro e privado",
          lb_mode_custom: "Personalizado",
          lb_powered_by_avira: "Desenvolvido pela Avira",
          lb_help: "Ajuda",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} anúncios e #rastreadores foram bloqueados pelo Segurança do navegador #Avira. Obtenha o seu agora #gratuitamente!",
          lb_trackers_facebook_share:
            "{{ threshold }} - número de anúncios e rastreadores que o Segurança do navegador Avira impediu de espionar minhas atividades online até agora. É gratuito e altamente recomendável.",
          lb_congratulations: "Parabéns!",
          lb_trackers_blocked_count: "{{ threshold }} anúncios e rastreadores bloqueados!",
          lb_trackers_milestone_subtitle: "Ajude a proteger sua família e amigos também.",
          lb_tracker_notification_share_url_twitter:
            "http://www.avira.com/pt-br/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/pt-br/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Compartilhar",
          lb_trackers: "Rastreadores",
          lb_ads: "Anúncios",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Rastreadores</span> bloqueados neste site',
          lb_ads_blocked_this_page: '<span class="txt--orange">Anúncios</span> bloqueados neste site',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Anúncios e rastreadores gerais bloqueados",
          lb_adblocking_credits: 'Anúncio bloqueado por <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    78: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Надежный веб-сайт",
          lb_unsafe_website: "Ненадежный веб-сайт",
          lb_unsafe_content_website: "Небезопасное содержимое",
          lb_mse_website: "Ненадежная поисковая система",
          lb_trackers_blocked:
            '<span class="txt--green">Заблокировано</span> рекламных объявлений и программ отслеживания на {{ domain }}: {{ count }}',
          lb_trackers_blocked_short: "Заблокировано рекламных объявлений и программ отслеживания: {{ count }}",
          lb_trackers_block_all: "Заблокировать на этом веб-сайте",
          lb_trackers_allow_all: "Разблокировать все рекламные объявления и программы отслеживания",
          msg_no_trackers:
            "На данной странице нет программ отслеживания. При открытии веб-сайта с активными программами отслеживания их полный список будет показан здесь.",
          msg_trackers_tooltip:
            "Это все программы отслеживания на текущем веб-сайте. Для блокировки программы отслеживания нажмите на ползунок рядом с ним. Если ползунок отображается зеленым, то программа заблокирована и не может отслеживать ваши действия. Обратите внимание, что по умолчанию некоторые программы отслеживания разблокированы. Их блокировка может привести к некорректной работе веб-страницы.",
          lb_settings: "Настройки",
          lb_setting_offers: "Показать сравнение цен",
          lb_setting_tooltip_offers: "Показывать более выгодные цены на товары, которые вы ищете, только с надежных веб-сайтов.",
          lb_setting_dnt_header: "Отправить заголовок «Не отслеживать»",
          lb_setting_tooltip_dnt_header:
            "Запрашивать отключение отслеживания на веб-сайтах. Если сайты игнорируют запрос, веб-фильтр Avira все равно блокирует все программы отслеживания.",
          lb_setting_top_bar: "Показать индикатор безопасности",
          lb_setting_block_trackers: "Блокировать программы отслеживания по умолчанию",
          lb_setting_tooltip_block_trackers: "Защитите свои персональные данные, блокируя программы отслеживания по умолчанию.",
          lb_setting_cliqz: "Поиск CLIQZ",
          lb_setting_tooltip_cliqz:
            "Поиск CLIQZ предлагает вам веб-сайты и релевантную информацию в реальном времени при введении данных в строку браузера, что делает поиск быстрее и безопаснее.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger блокирует шпионскую рекламу и предотвращает отслеживание ваших действий невидимыми программами отслеживания.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere:
            "HTTPS Everywhere обеспечивает шифрование вашей переписки и повышает вашу безопасность онлайн.",
          lb_setting_inAppTracking: "Анонимная статистика",
          lb_setting_tooltip_inAppTracking: "Помогите нам улучшить продукт, предоставив анонимные данные.",
          lb_setting_show_advanced_controls: "Больше возможностей просмотра",
          lb_setting_tooltip_show_advanced_controls: "Показать на панели значки Privacy Badger и HTTPS Everywhere.",
          lb_setting_google_services: "Службы Google",
          lb_setting_adguard: "Заблокировать рекламные объявления и программы отслеживания в Интернете",
          lb_setting_tooltip_adguard:
            "Защищает вашу конфиденциальность, предотвращая несанкционированное наблюдение за вашими действиями в Интернете. Кроме того, блокирует назойливые всплывающие окна, веб-баннеры, рекламные видеоролики и другие нежелательные объявления.",
          lb_setting_adguard_social_media: "Заблокировать программы отслеживания в социальных сетях",
          lb_setting_tooltip_adguard_social_media:
            "Отключает кнопки и виджеты социальных сетей на веб-сайтах, благодаря чему социальные сети не могут следить за тем, какие веб-сайты вы посещаете.",
          lb_setting_adguard_useful_ads: "Не блокировать уместную рекламу",
          lb_setting_tooltip_adguard_useful_ads: "Отображает релевантные рекламные объявления в результатах поиска.",
          lb_setting_extension_scan: "Анализ расширений",
          lb_setting_tooltip_extension_scan:
            "Включите для отправки специалистам Avira анонимных отчетов при обнаружении подозрительной деятельности в ходе просмотра веб-страниц.",
          lb_setting_dark_mode: "Темный режим",
          lb_setting_tooltip_dark_mode: "Включить/отключить темный режим",
          btn_blocking_back: "Уходим отсюда!",
          lb_blocking_options: "Дополнительные опции",
          lb_blocking_add_exception: "Никогда не блокировать этот веб-сайт",
          btn_blocking_continue: "Все равно продолжить",
          btn_dash_classification_cb_exception: "Никогда не блокировать этот веб-сайт",
          lb_dash_classification_exception_info_add: "Добавление исключения",
          msg_dash_classification_exception_info_add:
            "Этот сайт НЕ включен в ваш список исключений. После добавления исключения этот веб-сайт не будет блокироваться при попытке перехода на него. В верхней части экрана будет отображаться предупреждение.",
          lb_dash_classification_exception_info_remove: "Удаление исключения",
          msg_dash_classification_exception_info_remove:
            "Этот сайт включен в ваш список исключений. После удаления исключения этот веб-сайт будет блокироваться при попытке перехода на него.",
          lb_privacy: "Политика конфиденциальности",
          lnk_privacy: "https://www.avira.com/ru/general-privacy",
          lb_eula: "Лицензионное соглашение с конечным пользователем",
          lnk_eula: "https://www.avira.com/ru/license-agreement-terms-of-use",
          lb_discover_mode: "Узнать больше",
          lb_feedback: "Обратная связь",
          lb_feedback_question: "Как бы вы оценили свои впечатления?",
          lb_feedback_send: "Отправить",
          lb_feedback_send_title: "Отправьте анонимный отзыв в Avira",
          lb_feedback_thank_you: "Спасибо!",
          lb_feedback_thank_you_feedback: "Благодарим вас за отзыв",
          lb_feedback_help_improve: "Ваши отзывы помогают нам делать это приложение лучше",
          lb_feedback_rate_store: "Просим вас уделить минуту и оценить {0} в магазине {1}.",
          lb_feedback_ok: "ОК",
          lb_feedback_rate_now: "Оценить",
          lb_feedback_later: "Позже",
          lb_rate: "Оценить приложение",
          lb_dash_pua_action_cancel: "Отменить загрузку",
          msg_mse_bar_warning: "Возможно, ваши настройки поиска были изменены.",
          lb_mse_take_me_away: "Уходим отсюда!",
          lnk_avira: "https://www.avira.com/ru/",
          lb_mse_hide_warning: "Я доверяю этой поисковой системе",
          msg_blocked_iframe_replacement: "Небезопасное содержимое",
          lb_unsafe_content_bar_warning: "Веб-фильтр Avira предотвратил загрузку небезопасного содержимого на этой веб-странице.",
          lb_unsafe_content_bar_ignore: "Больше не показывать это сообщение",
          lb_extension_permission_notification_extension_description:
            "Веб-фильтру Avira требуется разрешение на отправку специалистам Avira отчетов о подозрительной деятельности.",
          lb_extension_permission_notification_extension_permission_title:
            "Включите для отправки специалистам Avira анонимных отчетов при обнаружении подозрительной деятельности в ходе просмотра веб-страниц.",
          lb_extension_permission_notification_extension_permission_button: "Разрешить",
          lb_extension_permission_notification_extension_permission_no_title:
            "Эту возможность можно в любой момент включить в разделе настроек.",
          lb_extension_permission_notification_extension_permission_no_button: "Больше не спрашивать",
          lb_unsafe_content: "Небезопасное содержимое",
          msg_dash_unsafe_content_details_no_exception: "Небезопасное содержимое заблокировано:",
          msg_dash_unsafe_content_details_exception: "Небезопасное содержимое заблокировано",
          msg_dash_unsafe_content_risk_no_exception: "Рекомендуем для вашей безопасности оставить это содержимое заблокированным.",
          msg_dash_unsafe_content_risk_exception:
            "Рекомендуем для вашей безопасности заблокировать небезопасное содержимое, удалив исключение.",
          lb_dash_unsafe_content_show_details: "Технические подробности",
          lb_dash_unsafe_content_hide_details: "Скрыть",
          msg_category_unknown: "Информация об этом веб-сайте не найдена.",
          msg_category_safe: "Известных угроз нет.",
          msg_category_malware: "Это вредоносный веб-сайт",
          msg_category_malware_sub:
            "Вредоносные веб-сайты могут заразить ваше устройство с помощью вирусов, червей, шпионского ПО и троянов.",
          msg_category_phishing: "Это фишинговый веб-сайт",
          msg_category_phishing_sub:
            "Фишинговые веб-сайты обманом получают от вас конфиденциальную информацию (например, пароли и номера банковских счетов).",
          msg_category_spam: "Это спам-сайт",
          msg_category_spam_sub: "Спам-сайты крадут ваш адрес электронной почты и используют его для нежелательных рассылок.",
          msg_category_pua: "Загрузка содержит потенциально нежелательные приложения",
          msg_category_pua2: "Этот веб-сайт распространяет потенциально нежелательные приложения",
          msg_category_pua2_sub:
            "Потенциально нежелательные приложения выполняют действия или содержат функции, воспринимаемые пользователями как нежелательные.",
          msg_category_mse: "Ненадежная поисковая система",
          msg_category_mse_sub:
            "Эта поисковая система не является надежной, поскольку потенциально нежелательные приложения перенаправляют на нее трафик.",
          msg_category_unsafe_content: "Небезопасное содержимое заблокировано",
          msg_category_unsafe_content_sub:
            "Веб-страницы могут стать небезопасными после взлома или могут содержать вредоносные сторонние материалы.",
          msg_what_is_pua: "Что такое потенциально нежелательные приложения?",
          lnk_what_is_pua: "https://www.avira.com/ru/potentially-unwanted-applications",
          lb_tab_privacy: "Конфиденциальность",
          lb_tab_security: "Безопасность",
          lb_my_modes: "Режимы",
          msg_mode_select: "Выберите наиболее подходящий<br/> режим",
          "lb_mode_safe-surfing": "Безопасный просмотр",
          "lb_mode_safe-private": "Безопасность и конфиденциальность",
          lb_mode_custom: "Пользователь",
          lb_powered_by_avira: "Технологии Avira",
          lb_help: "Справка",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} — столько рекламных объявлений и программ #отслеживания заблокировано Веб-фильтром #Avira. Установите #бесплатно прямо сейчас!",
          lb_trackers_facebook_share:
            "{{ threshold }} — столько рекламных объявлений и программ отслеживания уже заблокировал Веб-фильтр Avira, предотвратив слежку за моими действиями в Интернете. Это очень эффективное средство — и абсолютно бесплатное.",
          lb_congratulations: "Поздравляем!",
          lb_trackers_blocked_count: "Заблокировано рекламных объявлений и программ отслеживания: {{ threshold }}.",
          lb_trackers_milestone_subtitle: "Помогите друзьям и близким тоже защитить свою конфиденциальность.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/ru/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/ru/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Твитнуть",
          lb_share: "Поделиться",
          lb_trackers: "Программы отслеживания",
          lb_ads: "Реклама",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Программы отслеживания</span>, заблокированные на этом веб-сайте',
          lb_ads_blocked_this_page: '<span class="txt--orange">Рекламные объявления</span>, заблокированные на этом веб-сайте',
          lb_blocked_total: "Всего заблокировано рекламных объявлений и программ отслеживания: <strong>{{ countTotal }}</strong><br>",
          lb_adblocking_credits: 'Блокировщик рекламы <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    79: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Güvenli web sitesi",
          lb_unsafe_website: "Güvensiz web sitesi",
          lb_unsafe_content_website: "Güvensiz içerik",
          lb_mse_website: "Güvenilmez Arama Motoru",
          lb_trackers_blocked: '{{ count }} reklam ve takipçi {{ domain }} üzerinde <span class="txt--green">engellendi</span>',
          lb_trackers_blocked_short: "{{ count }} reklam ve takipçi engellendi",
          lb_trackers_block_all: "Bu web sitesinde engelle",
          lb_trackers_allow_all: "Reklam ve takipçi engelini kaldır",
          msg_no_trackers:
            "Geçerli sayfada sizi izleyen takipçi yok. Etkin takipçilerin olduğu bir web sitesini açarsanız listenin tamamı burada gösterilir.",
          msg_trackers_tooltip:
            "Bunlar izlemekte olduğunuz web sitesindeki takipçilerin tümü. Bir takipçiyi yanındaki kaydırıcıya tıklayarak engelleyebilirsiniz. Kaydırıcı yeşilse takipçi engellenmiştir ve tarama etkinliğinizi izleyemez. Not edin, bazı takipçilere varsayılan olarak izin verilir. Bunları engellemek web sitesinin doğru çalışmamasıyla sonuçlanabilir.",
          lb_settings: "Ayarlar",
          lb_setting_offers: "Fiyat karşılaştırmaları göster",
          lb_setting_tooltip_offers: "Alışveriş yaptığınız ürünler için sadece güvenli web sitelerindeki indirimleri göster.",
          lb_setting_dnt_header: "İzlememe başlığı gönder",
          lb_setting_tooltip_dnt_header:
            "Web sitelerine sizi izlememelerini bildirir. Bu isteği yok sayarlarsa, ABS yine de takipçileri engeller.",
          lb_setting_top_bar: "Güvenlik göstergesini belirt",
          lb_setting_block_trackers: "Takipçileri varsayılan olarak engelle",
          lb_setting_tooltip_block_trackers: "Takipçileri varsayılan olarak engelleyin ve gizliliğinizi koruyun.",
          lb_setting_cliqz: "CLIQZ Arama",
          lb_setting_tooltip_cliqz:
            "CLIQZ Arama, siz tarayıcı çubuğuna arama bilgisi girerken gerçek zamanlı olarak web siteleri ve anlamlı bilgi önerir, bu da size daha güvenli ve hızlı arama olanağı verir.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger casus reklamların ve görünmez takipçilerin, izniniz olmadan sizi gizlice takip etmesini engeller.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere iletişiminizi şifreler ve tarama etkinliğinizi daha güvenli kılar.",
          lb_setting_inAppTracking: "Anonim İstatistikler",
          lb_setting_tooltip_inAppTracking: "Bizimle anonim veri paylaşarak ürün geliştirmeye yardımcı olun.",
          lb_setting_show_advanced_controls: "Ekstra tarama denetimlerini göster",
          lb_setting_tooltip_show_advanced_controls: "Araç çubuğunda Privacy Badger ve HTTPS Everywhere simgelerini görüntüler.",
          lb_setting_google_services: "Google Hizmetleri",
          lb_setting_adguard: "Reklamları ve web izlemeyi engelle",
          lb_setting_tooltip_adguard:
            "Sizi çevrimiçi izleyen herkesi durdurarak gizliliğinizi korur. Açılır pencere, web başlıkları, video reklamlar ve diğerlerini de engeller.",
          lb_setting_adguard_social_media: "Sosyal medya izlemeyi engelle",
          lb_setting_tooltip_adguard_social_media:
            "Web sitelerindeki sosyal medya düğmeleri ve pencere öğelerini devre dışı bırakır ve sosyal ağların gittiğiniz siteleri izlemesini engeller.",
          lb_setting_adguard_useful_ads: "Yararlı reklamları engelleme",
          lb_setting_tooltip_adguard_useful_ads: "Arama sonuçlarında ilgili ve saldırgan olmayan reklamlara izin verir.",
          lb_setting_extension_scan: "Uzantı Analizi",
          lb_setting_tooltip_extension_scan:
            "Tarama sırasında şüpheli etkinlik algılanırsa Avira'ya anonim rapor göndermek için etkinleştir.",
          lb_setting_dark_mode: "Koyu Mod",
          lb_setting_tooltip_dark_mode: "Koyu Mod aç/kapat",
          btn_blocking_back: "Beni uzaklaştır!",
          lb_blocking_options: "Daha fazla seçenek",
          lb_blocking_add_exception: "Bu siteyi asla engelleme",
          btn_blocking_continue: "Yine de devam et",
          btn_dash_classification_cb_exception: "Bu siteyi asla engelleme",
          lb_dash_classification_exception_info_add: "Özel durum ekleniyor",
          msg_dash_classification_exception_info_add:
            "Bu web sitesi geçerli özel durum listenizde YOK. Bir özel durum eklediğinizde, adresi görüntülemek istediğinizde adres engellenmez. Uyarıyı ekranın üstünde yine de görürsünüz.",
          lb_dash_classification_exception_info_remove: "Özel durumu kaldırma",
          msg_dash_classification_exception_info_remove:
            "Bu web sitesi geçerli özel durum listenizde var. Özel durumu kaldırdığınızda, adres her görüntülemek istediğinizde engellenir.",
          lb_privacy: "Gizlilik ilkesi",
          lnk_privacy: "https://www.avira.com/en/general-privacy",
          lb_eula: "Son Kullanıcı Lisans Sözleşmesi",
          lnk_eula: "https://www.avira.com/en/license-agreement-terms-of-use",
          lb_discover_mode: "Daha fazlasını keşfedin",
          lb_feedback: "Geribildirim",
          lb_feedback_question: "Deneyiminizi nasıl derecelendirirsiniz?",
          lb_feedback_send: "Gönder",
          lb_feedback_send_title: "Avira'ya anonim geri bildirim gönderin",
          lb_feedback_thank_you: "Teşekkür ederiz!",
          lb_feedback_thank_you_feedback: "Geri bildirim için teşekkür ederiz",
          lb_feedback_help_improve: "Geri bildiriminiz uygulamayı geliştirmemize yardım ediyor",
          lb_feedback_rate_store: "Az bir zaman ayırıp {0}'ı {1} mağazasında derecelendirmek ister misiniz?",
          lb_feedback_ok: "Tamam",
          lb_feedback_rate_now: "Şimdi derecelendir",
          lb_feedback_later: "Daha sonra",
          lb_rate: "Uygulamayı derecelendir",
          lb_dash_pua_action_cancel: "Karşıdan yüklemeyi iptal et",
          msg_mse_bar_warning: "Arama motoru ayarlarınız kurcalanmış olabilir.",
          lb_mse_take_me_away: "Beni uzaklaştır!",
          lnk_avira: "https://www.avira.com/tr/",
          lb_mse_hide_warning: "Bu arama motoruna güveniyorum",
          msg_blocked_iframe_replacement: "Güvensiz içerik",
          lb_unsafe_content_bar_warning: "Avira Browser Safety bu web sayfasındaki güvenli olmayan içeriğin yüklenmesini önledi.",
          lb_unsafe_content_bar_ignore: "İletiyi yeniden gösterme",
          lb_extension_permission_notification_extension_description:
            "Avira Browser Safety Uzantısı Avira'ya şüpheli etkinlik raporu göndermek için onayınıza gerek duyuyor.",
          lb_extension_permission_notification_extension_permission_title:
            "Tarama sırasında şüpheli etkinlik algılanırsa Avira'ya anonim rapor göndermek için etkinleştir.",
          lb_extension_permission_notification_extension_permission_button: "İzin ver",
          lb_extension_permission_notification_extension_permission_no_title: "Bu özelliği ayarlardan istediğiniz zaman etkinleştirin.",
          lb_extension_permission_notification_extension_permission_no_button: "Tekrar sorma",
          lb_unsafe_content: "Güvensiz İçerik",
          msg_dash_unsafe_content_details_no_exception: "Güvensiz içerik engellendi:",
          msg_dash_unsafe_content_details_exception: "Güvensiz içerik engellendi",
          msg_dash_unsafe_content_risk_no_exception: "Güvenliğiniz için bu içeriği engellemeniz önerilir.",
          msg_dash_unsafe_content_risk_exception: "Güvenliğiniz için güvenli olmayan içeriği özel durumu kaldırarak engellemeniz önerilir.",
          lb_dash_unsafe_content_show_details: "Teknik ayrıntılar",
          lb_dash_unsafe_content_hide_details: "Gizle",
          msg_category_unknown: "Bu web sitesi için hiçbir bilgi bulunamadı.",
          msg_category_safe: "Bilinen bir tehdit yok.",
          msg_category_malware: "Bu bir zararlı yazılım web sitesi",
          msg_category_malware_sub: "Zararlı yazılım siteleri aygıtınıza bulaşır ve virüs, solucan, casus yazılım ve Truva atı içerebilir.",
          msg_category_phishing: "Bu bir kimlik avı web sitesi",
          msg_category_phishing_sub:
            "Kimlik avı web siteleri parola ve banka bilgileri gibi kişisel bilgilerinizi açıklamanız için sizi kandırır.",
          msg_category_spam: "Bu bir istenmeyen posta web sitesi",
          msg_category_spam_sub: "İstenmeyen posta siteleri e-posta adresinizi ele geçirip istemediğiniz reklamlar gönderir.",
          msg_category_pua: "Karşıdan yükleme İstenmeyebilecek Uygulamalar içeriyor",
          msg_category_pua2: "Bu web sitesi PUA dağıtıyor",
          msg_category_pua2_sub:
            "İstenmeyebilecek Uygulamalar (PUA'lar) kullanıcının istemediği şekilde davranır veya bu türde özellikler içerir.",
          msg_category_mse: "Güvenilmez arama motoru",
          msg_category_mse_sub:
            "Bu arama motoruna güvenilmez çünkü zararlı yazılımların ve İstenmeyebilecek Uygulamaların buraya trafik yönlendirdiği biliniyor.",
          msg_category_unsafe_content: "Güvensiz içerik engellendi",
          msg_category_unsafe_content_sub:
            "Web sayfaları bozuksa veya üçüncü taraf içerik kırıldıysa veya bilerek zararlıysa güvenilmez içerik yükler.",
          msg_what_is_pua: "PUA nedir?",
          lnk_what_is_pua: "https://www.avira.com/en/potentially-unwanted-applications",
          lb_tab_privacy: "Gizlilik",
          lb_tab_security: "Güvenlik",
          lb_my_modes: "Modlar",
          msg_mode_select: "Gereksinimi en iyi karşılayan<br/>modu seçin",
          "lb_mode_safe-surfing": "Güvenli Gezinmeler",
          "lb_mode_safe-private": "Güvenli ve Özel",
          lb_mode_custom: "Özel",
          lb_powered_by_avira: "Powered by Avira",
          lb_help: "Yardım",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} reklam ve #takipçi #Avira Browser Safety tarafından engellendi. Siz de #ücretsiz edinin!",
          lb_trackers_facebook_share:
            "{{ threshold }} - şimdiye kadar çevrimiçi etkinliğimi izleyen ve Avira Browser Safety'nin engellediği reklam ve takipçi sayısı. Ücretsiz ve heyecanla öneririm.",
          lb_congratulations: "Tebrikler!",
          lb_trackers_blocked_count: "{{ threshold }} reklam ve takipçi engellendi!",
          lb_trackers_milestone_subtitle: "Aile ve arkadaşlarınızı da korumaya yardımcı olun.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/tr/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/tr/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Paylaş",
          lb_trackers: "Takipçiler",
          lb_ads: "Reklamlar",
          lb_trackers_blocked_this_page: 'Bu sitede engellenen <span class="txt--orange-dark">takipçiler</span>',
          lb_ads_blocked_this_page: 'Bu sitede engellenen <span class="txt--orange">reklamlar</span>',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Tüm reklamlar ve takipçiler engellendi",
          lb_adblocking_credits: '<a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a> ile reklam engelleme'
        };
      },
      {}
    ],
    80: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "安全网站",
          lb_unsafe_website: "不安全网站",
          lb_unsafe_content_website: "不安全内容",
          lb_mse_website: "不受信任的搜索引擎",
          lb_trackers_blocked: '在 {{ domain }} 上<span class="txt--green">阻止了</span> {{ count }} 个广告和追踪器',
          lb_trackers_blocked_short: "阻止了 {{ count }} 个广告和追踪器",
          lb_trackers_block_all: "在此网站上阻止",
          lb_trackers_allow_all: "解除对广告和追踪器的阻止",
          msg_no_trackers: "当前页面上没有追踪器对您进行跟踪。如果您打开一个有动态追踪器的网站，则会在此处显示完整列表。",
          msg_trackers_tooltip:
            "这些是您正在查看的网站上的所有追踪器。您可以通过点击旁边的滑块来阻止追踪器。当滑块显示为绿色时，该追踪器被阻止，无法跟踪您的浏览活动。请注意，有些追踪器默认为允许使用。阻止它们可能会导致网页无法正常工作。",
          lb_settings: "设置",
          lb_setting_offers: "显示价格比较",
          lb_setting_tooltip_offers: "为您购买的商品仅显示安全网站中的更佳优惠。",
          lb_setting_dnt_header: "发送“不要跟踪头文件”",
          lb_setting_tooltip_dnt_header: "通知网站不对您进行跟踪。如果它们忽略这个请求，Avira 浏览器安全仍然会阻止任何追踪器。",
          lb_setting_top_bar: "显示安全指标",
          lb_setting_block_trackers: "默认情况下阻止追踪器",
          lb_setting_tooltip_block_trackers: "通过默认阻止追踪器来保护您的隐私。",
          lb_setting_cliqz: "CLIQZ 搜索",
          lb_setting_tooltip_cliqz:
            "当您在浏览器栏中输入您的搜索时，CLIQZ 搜索会实时显示您的网站和相关信息，这使您可以更安全、更快地搜索。",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger: "Privacy Badger 阻止间谍广告，并防止隐形追踪器未经您的许可秘密跟踪您。",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere 对您的通信进行加密，使您更安全地浏览。",
          lb_setting_inAppTracking: "匿名统计数据",
          lb_setting_tooltip_inAppTracking: "通过分享匿名数据帮助我们改进产品。",
          lb_setting_show_advanced_controls: "显示其他浏览控件",
          lb_setting_tooltip_show_advanced_controls: "在工具栏显示 Privacy Badger 和 HTTPS Everywhere 图标。",
          lb_setting_google_services: "Google 服务",
          lb_setting_adguard: "阻止广告和网站跟踪",
          lb_setting_tooltip_adguard: "通过阻止任何人对您进行在线监视，从而保护您的隐私。也可以阻止入侵式弹出窗口、网页横幅、视频广告等。",
          lb_setting_adguard_social_media: "阻止社交媒体跟踪",
          lb_setting_tooltip_adguard_social_media: "禁用网站上的社交媒体按钮和插件，这样社交网络就无法跟踪您访问的网站。",
          lb_setting_adguard_useful_ads: "不要屏蔽有用的广告",
          lb_setting_tooltip_adguard_useful_ads: "允许在您的搜索结果中显示相关的非入侵式广告。",
          lb_setting_extension_scan: "扩展名分析",
          lb_setting_tooltip_extension_scan: "如果在浏览过程中检测到可疑活动，则可以向 Avira 发送匿名报告。",
          lb_setting_dark_mode: "深色模式",
          lb_setting_tooltip_dark_mode: "开启/关闭深色模式",
          btn_blocking_back: "退出此网页！",
          lb_blocking_options: "更多选项",
          lb_blocking_add_exception: "永远不阻止此网站",
          btn_blocking_continue: "仍然继续",
          btn_dash_classification_cb_exception: "永远不阻止此网站",
          lb_dash_classification_exception_info_add: "添加例外",
          msg_dash_classification_exception_info_add:
            "该网站目前不在您的例外列表中。添加一个例外后，该地址在您尝试查看时不会被阻止。您仍然会在屏幕上方看到警告。",
          lb_dash_classification_exception_info_remove: "删除例外",
          msg_dash_classification_exception_info_remove:
            "该网站目前在您的例外列表中。如果您删除了这个例外，那么该地址将在每次您试图查看时被阻止。",
          lb_privacy: "隐私政策",
          lnk_privacy: "https://www.avira.com/zh-cn/general-privacy",
          lb_eula: "最终用户许可协议",
          lnk_eula: "https://www.avira.com/zh-cn/license-agreement-terms-of-use",
          lb_discover_mode: "发现更多",
          lb_feedback: "反馈",
          lb_feedback_question: "您将如何评价您的体验？",
          lb_feedback_send: "发送",
          lb_feedback_send_title: "向 Avira 发送匿名反馈",
          lb_feedback_thank_you: "谢谢！",
          lb_feedback_thank_you_feedback: "感谢您的反馈",
          lb_feedback_help_improve: "您的反馈将帮助我们完善应用程序",
          lb_feedback_rate_store: "您能否花点时间在 {1} 网上商店对 {0} 进行评价？",
          lb_feedback_ok: "确定",
          lb_feedback_rate_now: "立即评价",
          lb_feedback_later: "稍后",
          lb_rate: "评价应用程序",
          lb_dash_pua_action_cancel: "取消下载",
          msg_mse_bar_warning: "您的搜索引擎设置可能被篡改。",
          lb_mse_take_me_away: "退出此网页！!",
          lnk_avira: "https://www.avira.com/zh-cn/",
          lb_mse_hide_warning: "信任此搜索引擎",
          msg_blocked_iframe_replacement: "不安全内容",
          lb_unsafe_content_bar_warning: "Avira 浏览器安全防止在此网页上加载不安全的内容。",
          lb_unsafe_content_bar_ignore: "不再显示消息",
          lb_extension_permission_notification_extension_description:
            "Avira 浏览器安全扩展需要您的批准才能向 Avira 发送有关可疑活动的报告。",
          lb_extension_permission_notification_extension_permission_title: "如果在浏览过程中检测到可疑活动，则可以向 Avira 发送匿名报告。",
          lb_extension_permission_notification_extension_permission_button: "允许",
          lb_extension_permission_notification_extension_permission_no_title: "您可以随时在设置中启用这个功能。",
          lb_extension_permission_notification_extension_permission_no_button: "不再询问",
          lb_unsafe_content: "不安全内容",
          msg_dash_unsafe_content_details_no_exception: "已阻止的不安全内容：",
          msg_dash_unsafe_content_details_exception: "已阻止的不安全内容",
          msg_dash_unsafe_content_risk_no_exception: "为了安全起见，建议您阻止此内容。",
          msg_dash_unsafe_content_risk_exception: "为了安全起见，建议您通过删除例外来阻止不安全内容。",
          lb_dash_unsafe_content_show_details: "技术详细信息",
          lb_dash_unsafe_content_hide_details: "隐藏",
          msg_category_unknown: "未找到有关该网站的信息。",
          msg_category_safe: "没有已知威胁。",
          msg_category_malware: "这是一个恶意软件网站",
          msg_category_malware_sub: "恶意软件网站会感染您的设备并可能包含病毒、蠕虫、间谍软件和特洛伊木马。",
          msg_category_phishing: "这是一个网络钓鱼网站",
          msg_category_phishing_sub: "网络钓鱼网站会欺骗您透露个人信息（例如密码和银行帐户信息）。",
          msg_category_spam: "这是一个垃圾邮件网站",
          msg_category_spam_sub: "垃圾邮件网站会获取您的电子邮件地址，从而通过电子邮件向您发送广告。",
          msg_category_pua: "下载包含可能有害的应用程序",
          msg_category_pua2: "此网站散布着可能有害的应用程序",
          msg_category_pua2_sub: "可能有害的应用程序 (PUA) 表现出对用户有害的行为或包含对用户有害的功能。",
          msg_category_mse: "不受信任的搜索引擎",
          msg_category_mse_sub: "此搜索引擎不可信，因为恶意软件和可能有害的应用程序会将流量重定向到该搜索引擎。",
          msg_category_unsafe_content: "已阻止的不安全内容",
          msg_category_unsafe_content_sub: "如果泄漏的内容或第三方内容被非法侵入或有意造成危害，则网页会加载不安全的内容。",
          msg_what_is_pua: "什么是可能有害的应用程序？",
          lnk_what_is_pua: "https://www.avira.com/zh-cn/potentially-unwanted-applications",
          lb_tab_privacy: "隐私",
          lb_tab_security: "安全性",
          lb_my_modes: "模式",
          msg_mode_select: "选择最符合<br/>您需求的模式",
          "lb_mode_safe-surfing": "安全畅游网络世界",
          "lb_mode_safe-private": "安全和个人",
          lb_mode_custom: "自定义",
          lb_powered_by_avira: "Avira 提供技术支持",
          lb_help: "帮助",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share: "#Avira 浏览器安全阻止了 {{ threshold }} 广告和 #追踪器。现在 #免费获取您的 Avira 浏览器安全！",
          lb_trackers_facebook_share:
            "{{ threshold }} - 这就是迄今为止 Avira 浏览器安全已阻止监视我的在线活动的广告和追踪器数量。它是免费的，我强烈推荐它。",
          lb_congratulations: "祝贺您！",
          lb_trackers_blocked_count: "阻止了 {{ threshold }} 个广告和追踪器！",
          lb_trackers_milestone_subtitle: "同样有助于保护你的家人和朋友。",
          lb_tracker_notification_share_url_twitter:
            "http://www.avira.com/zh-cn/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/zh-cn/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "信息",
          lb_share: "分享",
          lb_trackers: "追踪器",
          lb_ads: "广告",
          lb_trackers_blocked_this_page: '此网站上阻止的<span class="txt--orange-dark">追踪器</span>',
          lb_ads_blocked_this_page: '此网站上阻止的<span class="txt--orange">广告</span>',
          lb_blocked_total: "阻止了全部 <strong>{{ countTotal }}</strong><br> 个广告和追踪器",
          lb_adblocking_credits: '通过 <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a> 阻止广告'
        };
      },
      {}
    ],
    81: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "安全的網站",
          lb_unsafe_website: "不安全的網站",
          lb_unsafe_content_website: "不安全的內容",
          lb_mse_website: "不可信任的搜尋引擎",
          lb_trackers_blocked: '已在 {{ domain }} <span class="txt--green">封鎖</span> {{ count }} 個廣告和追蹤器',
          lb_trackers_blocked_short: "已封鎖 {{ count }} 個廣告和追蹤器",
          lb_trackers_block_all: "在此網站封鎖",
          lb_trackers_allow_all: "取消封鎖廣告和追蹤器",
          msg_no_trackers: "目前網頁沒有任何追蹤器追蹤您。如果您開啟有作用中追蹤器的網站，這裡將顯示完整的清單。",
          msg_trackers_tooltip:
            "這些是您正在檢視的網頁上全部的追蹤器。您可以按一下追蹤器旁邊的滑桿來封鎖追蹤器。滑桿呈現綠色時，表示已封鎖該追蹤器，無法追蹤您的瀏覽活動。請注意，預設允許部分追蹤器。封鎖這些可能導致網頁無法正常運作。",
          lb_settings: "設定",
          lb_setting_offers: "顯示價格比較",
          lb_setting_tooltip_offers: "對於您要購買的 â€“ 顯示完全來自安全網站的產品優惠價格。",
          lb_setting_dnt_header: "傳送「不要追蹤」標頭",
          lb_setting_tooltip_dnt_header: "通知網站不應該追蹤您。如果網站忽視該項要求，Avira 瀏覽器安全性仍會封鎖任何追蹤器。",
          lb_setting_top_bar: "顯示安全指示器",
          lb_setting_block_trackers: "預設封鎖追蹤器",
          lb_setting_tooltip_block_trackers: "預設封鎖追蹤器保護您的隱私權。",
          lb_setting_cliqz: "CLIQZ Search",
          lb_setting_tooltip_cliqz: "您在瀏覽器列中輸入搜尋時，CLIQZ Search 會即時建議網站和相關資訊，達到搜尋更快速安全的效果。",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger: "Privacy Badger 會封鎖間諜廣告，並避免隱藏的追蹤器在未經您許可的情況下秘密追蹤您。",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere 會將您的通訊加密，讓您的瀏覽更安全。",
          lb_setting_inAppTracking: "Anonymous Statistics",
          lb_setting_tooltip_inAppTracking: "透過分享匿名資料的方式協助我們改善產品。",
          lb_setting_show_advanced_controls: "顯示其他瀏覽控制",
          lb_setting_tooltip_show_advanced_controls: "在工具列中顯示 Privacy Badger 和 HTTPS Everywhere 圖示。",
          lb_setting_google_services: "Google 服務",
          lb_setting_adguard: "封鎖廣告和網站追蹤",
          lb_setting_tooltip_adguard: "阻止任何人在線上監控您，保護您的隱私權。也封鎖干擾的快顯視窗、網頁橫幅、視訊廣告等等。",
          lb_setting_adguard_social_media: "封鎖社交媒體追蹤",
          lb_setting_tooltip_adguard_social_media: "停用網站的社交媒體按鈕和 Widget，以免社交網路追蹤您造訪的網站。",
          lb_setting_adguard_useful_ads: "不封鎖有用廣告",
          lb_setting_tooltip_adguard_useful_ads: "允許有關聯、不造成干擾的廣告出現在您的搜尋結果中。",
          lb_setting_extension_scan: "Extensions Analysis",
          lb_setting_tooltip_extension_scan: "啟用後若在瀏覽時偵測到可疑的活動，會將匿名報告傳送到 Avira。",
          lb_setting_dark_mode: "深色模式",
          lb_setting_tooltip_dark_mode: "開啟/關閉深色模式",
          btn_blocking_back: "帶我離開",
          lb_blocking_options: "更多選項",
          lb_blocking_add_exception: "不封鎖此網站",
          btn_blocking_continue: "仍然繼續",
          btn_dash_classification_cb_exception: "不封鎖此網站",
          lb_dash_classification_exception_info_add: "新增例外",
          msg_dash_classification_exception_info_add:
            "此網站目前不在您的例外清單中。您新增例外時，則不會在您檢視網站時封鎖該網址。您仍然會看見畫面頂端出現警告。",
          lb_dash_classification_exception_info_remove: "移除例外",
          msg_dash_classification_exception_info_remove:
            "此網站目前在您的例外清單中。如果您移除例外，則每次您嘗試檢視網站時，將封鎖該網址。",
          lb_privacy: "隱私權政策",
          lnk_privacy: "https://www.avira.com/zh-tw/general-privacy",
          lb_eula: "使用者授權合約",
          lnk_eula: "https://www.avira.com/zh-tw/license-agreement-terms-of-use",
          lb_discover_mode: "發現更多",
          lb_feedback: "意見回應",
          lb_feedback_question: "您會如何評價您的體驗？",
          lb_feedback_send: "傳送",
          lb_feedback_send_title: "向 Avira 傳送匿名意見回應",
          lb_feedback_thank_you: "感謝您！",
          lb_feedback_thank_you_feedback: "感謝您的寶貴意見",
          lb_feedback_help_improve: "您的意見有助於我們完善應用程式",
          lb_feedback_rate_store: "您能否花點時間在 {1} 線上商店為 {0} 評價？",
          lb_feedback_ok: "確定",
          lb_feedback_rate_now: "立即評價",
          lb_feedback_later: "稍後",
          lb_rate: "評比應用程式",
          lb_dash_pua_action_cancel: "取消下載",
          msg_mse_bar_warning: "您的搜尋引擎設定可能遭竄改。",
          lb_mse_take_me_away: "帶我離開!",
          lnk_avira: "https://www.avira.com/zh-tw/",
          lb_mse_hide_warning: "信任此搜尋引擎",
          msg_blocked_iframe_replacement: "不安全的內容",
          lb_unsafe_content_bar_warning: "Avira 瀏覽器安全性可防止此網頁載入不安全的內容。",
          lb_unsafe_content_bar_ignore: "不要再顯示訊息",
          lb_extension_permission_notification_extension_description:
            "Avira 瀏覽器安全性擴充需要您核准，才會將關於可疑活動的報告傳送到 Avira。",
          lb_extension_permission_notification_extension_permission_title: "啟用後若在瀏覽時偵測到可疑的活動，會將匿名報告傳送到 Avira。",
          lb_extension_permission_notification_extension_permission_button: "允許",
          lb_extension_permission_notification_extension_permission_no_title: "您可以隨時在設定中啟用此功能。",
          lb_extension_permission_notification_extension_permission_no_button: "不要再詢問",
          lb_unsafe_content: "不安全的內容",
          msg_dash_unsafe_content_details_no_exception: "已封鎖不安全的內容：",
          msg_dash_unsafe_content_details_exception: "已封鎖不安全的內容",
          msg_dash_unsafe_content_risk_no_exception: "基於安全考量，建議您持續封鎖內容。",
          msg_dash_unsafe_content_risk_exception: "基於安全考量，建議您移除例外來封鎖不安全的內容。",
          lb_dash_unsafe_content_show_details: "技術詳細資料",
          lb_dash_unsafe_content_hide_details: "隱藏",
          msg_category_unknown: "找不到此網站的資訊。",
          msg_category_safe: "無已知的威脅。",
          msg_category_malware: "這是惡意網站",
          msg_category_malware_sub: "惡意網站將感染您的裝置，而且可能包含病毒、蠕蟲、間諜軟體和特洛伊木馬程式。",
          msg_category_phishing: "這是網路釣魚網站",
          msg_category_phishing_sub: "網路釣魚網站會誘騙您透露您的個人資訊，例如密碼和銀行帳戶的資訊。",
          msg_category_spam: "這是垃圾郵件網站",
          msg_category_spam_sub: "垃圾郵件網站會擷取您的電子郵件地址，藉以透過電子郵件寄送廣告給您。",
          msg_category_pua: "下載包含可能不想要的應用程式",
          msg_category_pua2: "此網站散發可能不想要的應用程式",
          msg_category_pua2_sub: "這些可能不想要的應用程式 (PUA) 呈現的運作方式或包含的功能是使用者不想要的。",
          msg_category_mse: "不可信任的搜尋引擎",
          msg_category_mse_sub: "此搜尋引擎不可信任，因為已知惡意程式碼和可能不想要的應用程式將流量重新導向到此搜尋引擎。",
          msg_category_unsafe_content: "已封鎖不安全的內容",
          msg_category_unsafe_content_sub: "如果遭破壞的內容或第三方內容受入侵或可能有害，網頁將載入不安全的內容。",
          msg_what_is_pua: "什麼是 PUA？",
          lnk_what_is_pua: "https://www.avira.com/zh-tw/potentially-unwanted-applications",
          lb_tab_privacy: "隱私權",
          lb_tab_security: "資訊安全",
          lb_my_modes: "模式",
          msg_mode_select: "選取最符合<br/>您需求的模式",
          "lb_mode_safe-surfing": "安全的隨意瀏覽",
          "lb_mode_safe-private": "安全隱密",
          lb_mode_custom: "自訂",
          lb_powered_by_avira: "採用 Avira 技術",
          lb_help: "說明",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share: "#Avira Browser Safety 已封鎖 {{ threshold }} 個廣告和#追蹤器。立即#免費取得！",
          lb_trackers_facebook_share:
            "{{ threshold }} - Avira 瀏覽器安全性到目前為止已經封鎖這麼多廣告和追蹤器以免它們窺視我的線上活動。這完全免費，我強烈推薦使用。",
          lb_congratulations: "恭喜!",
          lb_trackers_blocked_count: "已封鎖 {{ threshold }} 個廣告和追蹤器！",
          lb_trackers_milestone_subtitle: "也保護您的家人和朋友。",
          lb_tracker_notification_share_url_twitter:
            "http://www.avira.com/zh-tw/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/zh-tw/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "推文",
          lb_share: "分享",
          lb_trackers: "追蹤器",
          lb_ads: "廣告",
          lb_trackers_blocked_this_page: '已在此網站封鎖<span class="txt--orange-dark">追蹤器</span>',
          lb_ads_blocked_this_page: '已在此網站封鎖<span class="txt--orange">廣告</span>',
          lb_blocked_total: "已封鎖全部 <strong>{{ countTotal }}</strong><br> 個廣告和追蹤器",
          lb_adblocking_credits: '<a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a> 的廣告封鎖'
        };
      },
      {}
    ],
    82: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        class i {
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
        i.initClass(), (t.exports = i);
      },
      { "core-js/modules/es6.array.iterator.js": 59, "core-js/modules/web.dom.iterable.js": 60 }
    ],
    83: [
      function (e, t, n) {
        "use strict";
        t.exports = {
          "de-DE": e("i18n/de-DE"),
          "en-US": e("i18n/en-US"),
          "es-ES": e("i18n/es-ES"),
          "fr-FR": e("i18n/fr-FR"),
          "it-IT": e("i18n/it-IT"),
          "ja-JP": e("i18n/ja-JP"),
          "nl-NL": e("i18n/nl-NL"),
          "pt-BR": e("i18n/pt-BR"),
          "ru-RU": e("i18n/ru-RU"),
          "tr-TR": e("i18n/tr-TR"),
          "zh-CN": e("i18n/zh-CN"),
          "zh-TW": e("i18n/zh-TW")
        };
      },
      {
        "i18n/de-DE": 70,
        "i18n/en-US": 71,
        "i18n/es-ES": 72,
        "i18n/fr-FR": 73,
        "i18n/it-IT": 74,
        "i18n/ja-JP": 75,
        "i18n/nl-NL": 76,
        "i18n/pt-BR": 77,
        "i18n/ru-RU": 78,
        "i18n/tr-TR": 79,
        "i18n/zh-CN": 80,
        "i18n/zh-TW": 81
      }
    ],
    84: [
      function (e, t, n) {
        "use strict";
        const i = e("underscore"),
          a = e("background/localStorage").getInstance(),
          r = "config_overrides",
          s = e("configuration"),
          o = (e, t) => {
            e = e || {};
            for (const n in t)
              if (t.hasOwnProperty(n)) {
                const i = t[n];
                void 0 === e[n] || "object" != typeof i || i instanceof Array ? (e[n] = i) : (e[n] = o(e[n], i));
              }
            return e;
          };
        i.extend(s, {
          getConfigOverrides() {
            try {
              return JSON.parse(a.getItem(r));
            } catch (e) {
              return {};
            }
          },
          setConfigOverrides(e) {
            const t = o(this.getConfigOverrides(), e);
            a.setItem(r, JSON.stringify(t));
          },
          clearConfigOverrides() {
            a.removeItem(r);
          },
          mergeOverrides() {
            o(this, this.getConfigOverrides());
          }
        }),
          (t.exports = s);
      },
      { "background/localStorage": 1, configuration: 2, underscore: 67 }
    ],
    85: [
      function (e, t, n) {
        "use strict";
        const i = e("content/Models/base/Settings");
        t.exports = i;
      },
      { "content/Models/base/Settings": 86 }
    ],
    86: [
      function (e, t, n) {
        "use strict";
        const i = e("jquery"),
          a = e("underscore"),
          r = e("backbone"),
          s = e("content/messagingInterface");
        class o extends r.Model {
          initialize() {
            this.changedByAction = {};
          }
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
          set(...e) {
            const t = super.set(...e);
            return a.extend(this.changedByAction, this.changed), t;
          }
          sync(e) {
            let t = "get";
            return (
              ["create", "update", "patch"].indexOf(e) >= 0 && (t = "set"),
              this._listeningToBg ||
                (s.subscribe("Settings:change", (e) => {
                  super.set(e);
                }),
                (this._listeningToBg = !0)),
              new i.Deferred((e) => {
                s.publish(`Settings:${t}`, this.changedByAction, (t) => {
                  super.set(t), this.trigger("sync", this), e.resolve(t);
                }),
                  (this.changedByAction = {});
              })
            );
          }
        }
        t.exports = o;
      },
      { backbone: 13, "content/messagingInterface": 88, jquery: "jquery", underscore: 67 }
    ],
    87: [
      function (e, t, n) {
        "use strict";
        const i = e("underscore"),
          a = e("config"),
          r = e("Locale"),
          s = e("content/messagingInterface"),
          o = e("Locales");
        t.exports = {
          getLocaleStrings: (e) =>
            new r(a, s).retrieve((t) => {
              const n = i.extend({}, o[a.default_language], o[t]);
              return e(n, t);
            }),
          LOCALES: o
        };
      },
      { Locale: 82, Locales: 83, config: 84, "content/messagingInterface": 88, underscore: 67 }
    ],
    88: [
      function (e, t, n) {
        "use strict";
        const i = e("messenger/Content").getInstance();
        t.exports = i;
      },
      { "messenger/Content": 61 }
    ],
    89: [
      function (e, t, n) {
        "use strict";
        const i = e("content/messagingInterface"),
          a = { track: (e, t, n) => i.publish("Mixpanel:track", { event: e, properties: t }, n) };
        t.exports = a;
      },
      { "content/messagingInterface": 88 }
    ]
  },
  {},
  [3]
);
