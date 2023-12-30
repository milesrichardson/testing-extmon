/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, n, i) {
  function r(o, a) {
    if (!n[o]) {
      if (!t[o]) {
        var l = "function" == typeof require && require;
        if (!a && l) return l(o, !0);
        if (s) return s(o, !0);
        var c = new Error("Cannot find module '" + o + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var u = (n[o] = { exports: {} });
      t[o][0].call(
        u.exports,
        function (e) {
          return r(t[o][1][e] || e);
        },
        u,
        u.exports,
        e,
        t,
        n,
        i
      );
    }
    return n[o].exports;
  }
  for (var s = "function" == typeof require && require, o = 0; o < i.length; o++) r(i[o]);
  return r;
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
      { "core-js/modules/es6.array.iterator.js": 65, "core-js/modules/web.dom.iterable.js": 67 }
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
        const i = e("content/messagingInterface"),
          r = e("modules/offers/content/AppOffers"),
          s = e("modules/offers/content/iframe/routers/Offers");
        t.exports = function ({ isSafe: e = !0 } = {}) {
          new r(new s()).enable(!e),
            i.subscribe("AO:navigate", (e) => {
              const t = e[0];
              return i.publish("router:navigateTo", { route: t });
            });
        };
      },
      { "content/messagingInterface": 145, "modules/offers/content/AppOffers": 147, "modules/offers/content/iframe/routers/Offers": 154 }
    ],
    4: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const i = e("content/Models/SERP"),
          r = e("content/Models/URLClassification"),
          s = e("content/Models/PUA"),
          o = e("content/messagingInterface");
        t.exports = function () {
          return new Promise((e) => {
            const t = i.getInstance(),
              n = r.getInstance(),
              a = s.getInstance(),
              l = new Promise((e) => o.publish("fetchTabStatuses", null, e)),
              c = new Promise((e) => o.publish("Tabs:getData", { classifier: "AUCClassifier" }, e));
            Promise.all([l, c]).then(([t, n]) => {
              e(!n.hasUnsafeContent);
            });
            const u = (e) => {
              n.set("UCWarningIgnoreAllowed", e),
                o.publish("unsafeContentWarningShown"),
                o.publish("router:navigateTo", { route: "unsafeContent/notification" });
            };
            c.then((e) => {
              n.set(e),
                o.subscribe("Tabs:change", ({ AUCClassifier: e }) => {
                  e && n.set(e);
                }),
                n.get("isIFrame") &&
                  l.then((e) => {
                    n.get("isMSE") && !e.isTrustedSearchEngine
                      ? o.publish("router:navigateTo", { route: "maliciousSearchEngine" })
                      : n.get("hasUnsafeContent")
                      ? (null != e && e.isUCWarningIgnored) || n.get("hasUnsafeContentException") || u(e.isUCWarningIgnoreAllowed)
                      : e.isUCWarningIgnored ||
                        n.once("change:hasUnsafeContent", () => {
                          n.get("hasUnsafeContentException") || u(e.isUCWarningIgnoreAllowed);
                        });
                  });
            }),
              o.subscribe("leavingDash", () => {
                n.hasUnsafeContentExceptionChanged() && o.publish("reloadTab"), t.clear(), n.get("isPUA") || a.clear();
              }),
              o.subscribe("router:beforeRouteChange", ({ route: e }) => {
                !n.get("isIFrame") && ["", "minimized"].includes(e) && o.publish("closeTab");
              }),
              o.publish("DNT:tabReady");
          });
        };
      },
      {
        "content/Models/PUA": 118,
        "content/Models/SERP": 119,
        "content/Models/URLClassification": 121,
        "content/messagingInterface": 145,
        "core-js/modules/es6.array.iterator.js": 65,
        "core-js/modules/web.dom.iterable.js": 67
      }
    ],
    5: [
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
    6: [
      function (e, t, n) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    7: [
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
    8: [
      function (e, t, n) {
        (t.exports = function (e, t, n) {
          return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    9: [
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
    10: [
      function (e, t, n) {
        var i = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 13 }
    ],
    11: [
      function (e, t, n) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    12: [
      function (e, t, n) {
        var i = e("@babel/runtime/helpers/typeof").default,
          r = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== i(t) && "function" != typeof t) ? r(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 5, "@babel/runtime/helpers/typeof": 14 }
    ],
    13: [
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
    14: [
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
    15: [
      function (e, t, n) {
        var i, r;
        (i = this),
          (r = function (e, t, n) {
            function i() {
              this.subviews || (this.subviews = {}),
                e.each(this.subviews, function (e) {
                  e.$el.detach();
                });
            }
            function r(t) {
              var i = this;
              (this.subviewCreators = this.subviewCreators || {}),
                e.isFunction(this.subviewCreators) && (this.subviewCreators = this.subviewCreators()),
                this.$("[data-subview]").each(function () {
                  var t,
                    r = n(this),
                    s = r.attr("data-subview");
                  if (e.isUndefined(i.subviews[s])) {
                    if (null === (t = i._createSubview(s, r))) return void r.remove();
                    i.subviews[s] = t;
                  } else t = i.subviews[s];
                  r.replaceWith(t.$el);
                }),
                e.isFunction(this.onSubviewsCreated) && this.onSubviewsCreated.call(this),
                e.isFunction(this._onSubviewsCreated) && this._onSubviewsCreated.call(this),
                e.each(this.subviews, function (e) {
                  e.render.apply(e, t);
                }),
                e.isFunction(this.onSubviewsRendered) && this.onSubviewsRendered.call(this),
                e.isFunction(this._onSubviewsRendered) && this._onSubviewsRendered.call(this);
            }
            return (
              (t.Subviews = {}),
              (t.Subviews.add = function (t) {
                var n = { render: t.render, remove: t.remove };
                (t.render = function (e) {
                  var t = Array.prototype.slice.call(arguments);
                  i.call(this);
                  var s = n.render.apply(this, t);
                  return r.call(this, t), s;
                }),
                  (t.remove = function () {
                    return this.removeSubviews(), n.remove.call(this);
                  }),
                  (t.removeSubviews = function () {
                    var t = this;
                    this.subviews &&
                      e.each(this.subviews, function (e, n) {
                        e.remove(), delete t.subviews[n];
                      });
                  }),
                  (t._createSubview = function (t, n) {
                    var i = this.subviewCreators[t];
                    if (e.isUndefined(i)) throw new Error("Can not find subview creator for subview named: " + t);
                    return i.apply(this);
                  });
              }),
              t.Subviews
            );
          }),
          "function" == typeof define && define.amd
            ? define(["underscore", "backbone", "jquery"], r)
            : void 0 !== n
            ? (t.exports = r(e("underscore"), e("backbone"), e("backbone").$))
            : r(i._, i.Backbone, i.jQuery || i.Zepto || i.$);
      },
      { backbone: 17, underscore: 96 }
    ],
    16: [
      function (e, t, n) {
        var i;
        (i = function (e, t) {
          var n = e.Router.prototype.route,
            i = function () {};
          t.extend(e.Router.prototype, {
            before: i,
            after: i,
            route: function (e, r, s) {
              s || (s = this[r]);
              var o = t.bind(function () {
                var n = [e, t.toArray(arguments)];
                !1 !== (t.isFunction(this.before) ? this.before : void 0 !== this.before[e] ? this.before[e] : i).apply(this, n) &&
                  (s && s.apply(this, arguments),
                  (t.isFunction(this.after) ? this.after : void 0 !== this.after[e] ? this.after[e] : i).apply(this, n));
              }, this);
              return n.call(this, e, r, o);
            }
          });
        }),
          "function" == typeof define && define.amd
            ? define(["backbone", "underscore"], i)
            : "object" == typeof n
            ? (t.exports = i(e("backbone"), e("underscore")))
            : i(window.Backbone, window._);
      },
      { backbone: 17, underscore: 96 }
    ],
    17: [
      function (e, t, n) {
        (function (t) {
          (function () {
            !(function (i) {
              var r = ("object" == typeof self && self.self === self && self) || ("object" == typeof t && t.global === t && t);
              if ("function" == typeof define && define.amd)
                define(["underscore", "jquery", "exports"], function (e, t, n) {
                  r.Backbone = i(r, n, e, t);
                });
              else if (void 0 !== n) {
                var s,
                  o = e("underscore");
                try {
                  s = e("jquery");
                } catch (e) {}
                i(r, n, o, s);
              } else r.Backbone = i(r, {}, r._, r.jQuery || r.Zepto || r.ender || r.$);
            })(function (e, t, n, i) {
              var r = e.Backbone,
                s = Array.prototype.slice;
              (t.VERSION = "1.4.0"),
                (t.$ = i),
                (t.noConflict = function () {
                  return (e.Backbone = r), this;
                }),
                (t.emulateHTTP = !1),
                (t.emulateJSON = !1);
              var o,
                a = (t.Events = {}),
                l = /\s+/,
                c = function (e, t, i, r, s) {
                  var o,
                    a = 0;
                  if (i && "object" == typeof i) {
                    void 0 !== r && "context" in s && void 0 === s.context && (s.context = r);
                    for (o = n.keys(i); a < o.length; a++) t = c(e, t, o[a], i[o[a]], s);
                  } else if (i && l.test(i)) for (o = i.split(l); a < o.length; a++) t = e(t, o[a], r, s);
                  else t = e(t, i, r, s);
                  return t;
                };
              (a.on = function (e, t, n) {
                ((this._events = c(u, this._events || {}, e, t, { context: n, ctx: this, listening: o })), o) &&
                  (((this._listeners || (this._listeners = {}))[o.id] = o), (o.interop = !1));
                return this;
              }),
                (a.listenTo = function (e, t, i) {
                  if (!e) return this;
                  var r = e._listenId || (e._listenId = n.uniqueId("l")),
                    s = this._listeningTo || (this._listeningTo = {}),
                    a = (o = s[r]);
                  a || (this._listenId || (this._listenId = n.uniqueId("l")), (a = o = s[r] = new b(this, e)));
                  var l = d(e, t, i, this);
                  if (((o = void 0), l)) throw l;
                  return a.interop && a.on(t, i), this;
                });
              var u = function (e, t, n, i) {
                  if (n) {
                    var r = e[t] || (e[t] = []),
                      s = i.context,
                      o = i.ctx,
                      a = i.listening;
                    a && a.count++, r.push({ callback: n, context: s, ctx: s || o, listening: a });
                  }
                  return e;
                },
                d = function (e, t, n, i) {
                  try {
                    e.on(t, n, i);
                  } catch (e) {
                    return e;
                  }
                };
              (a.off = function (e, t, n) {
                return this._events ? ((this._events = c(_, this._events, e, t, { context: n, listeners: this._listeners })), this) : this;
              }),
                (a.stopListening = function (e, t, i) {
                  var r = this._listeningTo;
                  if (!r) return this;
                  for (var s = e ? [e._listenId] : n.keys(r), o = 0; o < s.length; o++) {
                    var a = r[s[o]];
                    if (!a) break;
                    a.obj.off(t, i, this), a.interop && a.off(t, i);
                  }
                  return n.isEmpty(r) && (this._listeningTo = void 0), this;
                });
              var _ = function (e, t, i, r) {
                if (e) {
                  var s,
                    o = r.context,
                    a = r.listeners,
                    l = 0;
                  if (t || o || i) {
                    for (s = t ? [t] : n.keys(e); l < s.length; l++) {
                      var c = e[(t = s[l])];
                      if (!c) break;
                      for (var u = [], d = 0; d < c.length; d++) {
                        var _ = c[d];
                        if ((i && i !== _.callback && i !== _.callback._callback) || (o && o !== _.context)) u.push(_);
                        else {
                          var p = _.listening;
                          p && p.off(t, i);
                        }
                      }
                      u.length ? (e[t] = u) : delete e[t];
                    }
                    return e;
                  }
                  for (s = n.keys(a); l < s.length; l++) a[s[l]].cleanup();
                }
              };
              (a.once = function (e, t, n) {
                var i = c(p, {}, e, t, this.off.bind(this));
                return "string" == typeof e && null == n && (t = void 0), this.on(i, t, n);
              }),
                (a.listenToOnce = function (e, t, n) {
                  var i = c(p, {}, t, n, this.stopListening.bind(this, e));
                  return this.listenTo(e, i);
                });
              var p = function (e, t, i, r) {
                if (i) {
                  var s = (e[t] = n.once(function () {
                    r(t, s), i.apply(this, arguments);
                  }));
                  s._callback = i;
                }
                return e;
              };
              a.trigger = function (e) {
                if (!this._events) return this;
                for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; i < t; i++) n[i] = arguments[i + 1];
                return c(f, this._events, e, void 0, n), this;
              };
              var f = function (e, t, n, i) {
                  if (e) {
                    var r = e[t],
                      s = e.all;
                    r && s && (s = s.slice()), r && h(r, i), s && h(s, [t].concat(i));
                  }
                  return e;
                },
                h = function (e, t) {
                  var n,
                    i = -1,
                    r = e.length,
                    s = t[0],
                    o = t[1],
                    a = t[2];
                  switch (t.length) {
                    case 0:
                      for (; ++i < r; ) (n = e[i]).callback.call(n.ctx);
                      return;
                    case 1:
                      for (; ++i < r; ) (n = e[i]).callback.call(n.ctx, s);
                      return;
                    case 2:
                      for (; ++i < r; ) (n = e[i]).callback.call(n.ctx, s, o);
                      return;
                    case 3:
                      for (; ++i < r; ) (n = e[i]).callback.call(n.ctx, s, o, a);
                      return;
                    default:
                      for (; ++i < r; ) (n = e[i]).callback.apply(n.ctx, t);
                      return;
                  }
                },
                b = function (e, t) {
                  (this.id = e._listenId),
                    (this.listener = e),
                    (this.obj = t),
                    (this.interop = !0),
                    (this.count = 0),
                    (this._events = void 0);
                };
              (b.prototype.on = a.on),
                (b.prototype.off = function (e, t) {
                  var n;
                  this.interop
                    ? ((this._events = c(_, this._events, e, t, { context: void 0, listeners: void 0 })), (n = !this._events))
                    : (this.count--, (n = 0 === this.count)),
                    n && this.cleanup();
                }),
                (b.prototype.cleanup = function () {
                  delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
                }),
                (a.bind = a.on),
                (a.unbind = a.off),
                n.extend(t, a);
              var g = (t.Model = function (e, t) {
                var i = e || {};
                t || (t = {}),
                  this.preinitialize.apply(this, arguments),
                  (this.cid = n.uniqueId(this.cidPrefix)),
                  (this.attributes = {}),
                  t.collection && (this.collection = t.collection),
                  t.parse && (i = this.parse(i, t) || {});
                var r = n.result(this, "defaults");
                (i = n.defaults(n.extend({}, r, i), r)), this.set(i, t), (this.changed = {}), this.initialize.apply(this, arguments);
              });
              n.extend(g.prototype, a, {
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
                  var r;
                  if (("object" == typeof e ? ((r = e), (i = t)) : ((r = {})[e] = t), i || (i = {}), !this._validate(r, i))) return !1;
                  var s = i.unset,
                    o = i.silent,
                    a = [],
                    l = this._changing;
                  (this._changing = !0), l || ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {}));
                  var c = this.attributes,
                    u = this.changed,
                    d = this._previousAttributes;
                  for (var _ in r)
                    (t = r[_]),
                      n.isEqual(c[_], t) || a.push(_),
                      n.isEqual(d[_], t) ? delete u[_] : (u[_] = t),
                      s ? delete c[_] : (c[_] = t);
                  if ((this.idAttribute in r && (this.id = this.get(this.idAttribute)), !o)) {
                    a.length && (this._pending = i);
                    for (var p = 0; p < a.length; p++) this.trigger("change:" + a[p], this, c[a[p]], i);
                  }
                  if (l) return this;
                  if (!o) for (; this._pending; ) (i = this._pending), (this._pending = !1), this.trigger("change", this, i);
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
                    r = {};
                  for (var s in e) {
                    var o = e[s];
                    n.isEqual(i[s], o) || ((r[s] = o), (t = !0));
                  }
                  return !!t && r;
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
                      var r = e.parse ? t.parse(n, e) : n;
                      if (!t.set(r, e)) return !1;
                      i && i.call(e.context, t, n, e), t.trigger("sync", t, n, e);
                    }),
                    F(this, e),
                    this.sync("read", this, e)
                  );
                },
                save: function (e, t, i) {
                  var r;
                  null == e || "object" == typeof e ? ((r = e), (i = t)) : ((r = {})[e] = t);
                  var s = (i = n.extend({ validate: !0, parse: !0 }, i)).wait;
                  if (r && !s) {
                    if (!this.set(r, i)) return !1;
                  } else if (!this._validate(r, i)) return !1;
                  var o = this,
                    a = i.success,
                    l = this.attributes;
                  (i.success = function (e) {
                    o.attributes = l;
                    var t = i.parse ? o.parse(e, i) : e;
                    if ((s && (t = n.extend({}, r, t)), t && !o.set(t, i))) return !1;
                    a && a.call(i.context, o, e, i), o.trigger("sync", o, e, i);
                  }),
                    F(this, i),
                    r && s && (this.attributes = n.extend({}, l, r));
                  var c = this.isNew() ? "create" : i.patch ? "patch" : "update";
                  "patch" !== c || i.attrs || (i.attrs = r);
                  var u = this.sync(c, this, i);
                  return (this.attributes = l), u;
                },
                destroy: function (e) {
                  e = e ? n.clone(e) : {};
                  var t = this,
                    i = e.success,
                    r = e.wait,
                    s = function () {
                      t.stopListening(), t.trigger("destroy", t, t.collection, e);
                    };
                  e.success = function (n) {
                    r && s(), i && i.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e);
                  };
                  var o = !1;
                  return this.isNew() ? n.defer(e.success) : (F(this, e), (o = this.sync("delete", this, e))), r || s(), o;
                },
                url: function () {
                  var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || U();
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
                w = { add: !0, remove: !1 },
                y = function (e, t, n) {
                  n = Math.min(Math.max(n, 0), e.length);
                  var i,
                    r = Array(e.length - n),
                    s = t.length;
                  for (i = 0; i < r.length; i++) r[i] = e[i + n];
                  for (i = 0; i < s; i++) e[i + n] = t[i];
                  for (i = 0; i < r.length; i++) e[i + s + n] = r[i];
                };
              n.extend(m.prototype, a, {
                model: g,
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
                  return this.set(e, n.extend({ merge: !1 }, t, w));
                },
                remove: function (e, t) {
                  t = n.extend({}, t);
                  var i = !n.isArray(e);
                  e = i ? [e] : e.slice();
                  var r = this._removeModels(e, t);
                  return (
                    !t.silent && r.length && ((t.changes = { added: [], merged: [], removed: r }), this.trigger("update", this, t)),
                    i ? r[0] : r
                  );
                },
                set: function (e, t) {
                  if (null != e) {
                    (t = n.extend({}, v, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                    var i = !n.isArray(e);
                    e = i ? [e] : e.slice();
                    var r = t.at;
                    null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                    var s,
                      o,
                      a = [],
                      l = [],
                      c = [],
                      u = [],
                      d = {},
                      _ = t.add,
                      p = t.merge,
                      f = t.remove,
                      h = !1,
                      b = this.comparator && null == r && !1 !== t.sort,
                      g = n.isString(this.comparator) ? this.comparator : null;
                    for (o = 0; o < e.length; o++) {
                      s = e[o];
                      var m = this.get(s);
                      if (m) {
                        if (p && s !== m) {
                          var w = this._isModel(s) ? s.attributes : s;
                          t.parse && (w = m.parse(w, t)), m.set(w, t), c.push(m), b && !h && (h = m.hasChanged(g));
                        }
                        d[m.cid] || ((d[m.cid] = !0), a.push(m)), (e[o] = m);
                      } else
                        _ && (s = e[o] = this._prepareModel(s, t)) && (l.push(s), this._addReference(s, t), (d[s.cid] = !0), a.push(s));
                    }
                    if (f) {
                      for (o = 0; o < this.length; o++) d[(s = this.models[o]).cid] || u.push(s);
                      u.length && this._removeModels(u, t);
                    }
                    var k = !1,
                      x = !b && _ && f;
                    if (
                      (a.length && x
                        ? ((k =
                            this.length !== a.length ||
                            n.some(this.models, function (e, t) {
                              return e !== a[t];
                            })),
                          (this.models.length = 0),
                          y(this.models, a, 0),
                          (this.length = this.models.length))
                        : l.length && (b && (h = !0), y(this.models, l, null == r ? this.length : r), (this.length = this.models.length)),
                      h && this.sort({ silent: !0 }),
                      !t.silent)
                    ) {
                      for (o = 0; o < l.length; o++) null != r && (t.index = r + o), (s = l[o]).trigger("add", s, this, t);
                      (h || k) && this.trigger("sort", this, t),
                        (l.length || u.length || c.length) &&
                          ((t.changes = { added: l, removed: u, merged: c }), this.trigger("update", this, t));
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
                  return s.apply(this.models, arguments);
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
                      var r = e.reset ? "reset" : "set";
                      i[r](n, e), t && t.call(e.context, i, n, e), i.trigger("sync", i, n, e);
                    }),
                    F(this, e),
                    this.sync("read", this, e)
                  );
                },
                create: function (e, t) {
                  var i = (t = t ? n.clone(t) : {}).wait;
                  if (!(e = this._prepareModel(e, t))) return !1;
                  i || this.add(e, t);
                  var r = this,
                    s = t.success;
                  return (
                    (t.success = function (e, t, n) {
                      i && r.add(e, n), s && s.call(n.context, e, t, n);
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
                  return new x(this, T);
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
                    var r = this.get(e[i]);
                    if (r) {
                      var s = this.indexOf(r);
                      this.models.splice(s, 1), this.length--, delete this._byId[r.cid];
                      var o = this.modelId(r.attributes);
                      null != o && delete this._byId[o],
                        t.silent || ((t.index = s), r.trigger("remove", r, this, t)),
                        n.push(r),
                        this._removeReference(r, t);
                    }
                  }
                  return n;
                },
                _isModel: function (e) {
                  return e instanceof g;
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
                      var r = this.modelId(t.previousAttributes()),
                        s = this.modelId(t.attributes);
                      r !== s && (null != r && delete this._byId[r], null != s && (this._byId[s] = t));
                    }
                  }
                  this.trigger.apply(this, arguments);
                }
              });
              var k = "function" == typeof Symbol && Symbol.iterator;
              k && (m.prototype[k] = m.prototype.values);
              var x = function (e, t) {
                  (this._collection = e), (this._kind = t), (this._index = 0);
                },
                A = 1,
                S = 2,
                T = 3;
              k &&
                (x.prototype[k] = function () {
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
              var C = (t.View = function (e) {
                  (this.cid = n.uniqueId("view")),
                    this.preinitialize.apply(this, arguments),
                    n.extend(this, n.pick(e, E)),
                    this._ensureElement(),
                    this.initialize.apply(this, arguments);
                }),
                z = /^(\S+)\s*(.*)$/,
                E = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
              n.extend(C.prototype, a, {
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
                      var r = t.match(z);
                      this.delegate(r[1], r[2], i.bind(this));
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
              var I = function (e, t, i, r) {
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
                            return function (t, r) {
                              return e[n](this[i], j(t, this), r);
                            };
                          case 4:
                            return function (t, r, s) {
                              return e[n](this[i], j(t, this), r, s);
                            };
                          default:
                            return function () {
                              var t = s.call(arguments);
                              return t.unshift(this[i]), e[n].apply(e, t);
                            };
                        }
                      })(t, n, i, r));
                  });
                },
                j = function (e, t) {
                  return n.isFunction(e)
                    ? e
                    : n.isObject(e) && !t._isModel(e)
                    ? q(e)
                    : n.isString(e)
                    ? function (t) {
                        return t.get(e);
                      }
                    : e;
                },
                q = function (e) {
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
                  [g, { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1 }, "attributes"]
                ],
                function (e) {
                  var t = e[0],
                    i = e[1],
                    r = e[2];
                  (t.mixin = function (e) {
                    var i = n.reduce(
                      n.functions(e),
                      function (e, t) {
                        return (e[t] = 0), e;
                      },
                      {}
                    );
                    I(t, e, i, r);
                  }),
                    I(t, n, i, r);
                }
              ),
                (t.sync = function (e, i, r) {
                  var s = P[e];
                  n.defaults(r || (r = {}), { emulateHTTP: t.emulateHTTP, emulateJSON: t.emulateJSON });
                  var o = { type: s, dataType: "json" };
                  if (
                    (r.url || (o.url = n.result(i, "url") || U()),
                    null != r.data ||
                      !i ||
                      ("create" !== e && "update" !== e && "patch" !== e) ||
                      ((o.contentType = "application/json"), (o.data = JSON.stringify(r.attrs || i.toJSON(r)))),
                    r.emulateJSON && ((o.contentType = "application/x-www-form-urlencoded"), (o.data = o.data ? { model: o.data } : {})),
                    r.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s))
                  ) {
                    (o.type = "POST"), r.emulateJSON && (o.data._method = s);
                    var a = r.beforeSend;
                    r.beforeSend = function (e) {
                      if ((e.setRequestHeader("X-HTTP-Method-Override", s), a)) return a.apply(this, arguments);
                    };
                  }
                  "GET" === o.type || r.emulateJSON || (o.processData = !1);
                  var l = r.error;
                  r.error = function (e, t, n) {
                    (r.textStatus = t), (r.errorThrown = n), l && l.call(r.context, e, t, n);
                  };
                  var c = (r.xhr = t.ajax(n.extend(o, r)));
                  return i.trigger("request", i, c, r), c;
                });
              var P = { create: "POST", update: "PUT", patch: "PATCH", delete: "DELETE", read: "GET" };
              t.ajax = function () {
                return t.$.ajax.apply(t.$, arguments);
              };
              var R = (t.Router = function (e) {
                  e || (e = {}),
                    this.preinitialize.apply(this, arguments),
                    e.routes && (this.routes = e.routes),
                    this._bindRoutes(),
                    this.initialize.apply(this, arguments);
                }),
                O = /\((.*?)\)/g,
                B = /(\(\?)?:\w+/g,
                L = /\*\w+/g,
                M = /[\-{}\[\]+?.,\\\^$|#\s]/g;
              n.extend(R.prototype, a, {
                preinitialize: function () {},
                initialize: function () {},
                route: function (e, i, r) {
                  n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && ((r = i), (i = "")), r || (r = this[i]);
                  var s = this;
                  return (
                    t.history.route(e, function (n) {
                      var o = s._extractParameters(e, n);
                      !1 !== s.execute(r, o, i) &&
                        (s.trigger.apply(s, ["route:" + i].concat(o)), s.trigger("route", i, o), t.history.trigger("route", s, i, o));
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
                      .replace(M, "\\$&")
                      .replace(O, "(?:$1)?")
                      .replace(B, function (e, t) {
                        return t ? e : "([^/?]+)";
                      })
                      .replace(L, "([^?]*?)")),
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
              var N = (t.History = function () {
                  (this.handlers = []),
                    (this.checkUrl = this.checkUrl.bind(this)),
                    "undefined" != typeof window && ((this.location = window.location), (this.history = window.history));
                }),
                D = /^[#\/]|\s+$/g,
                W = /^\/+|\/+$/g,
                H = /#.*$/;
              (N.started = !1),
                n.extend(N.prototype, a, {
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
                      null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(D, "")
                    );
                  },
                  start: function (e) {
                    if (N.started) throw new Error("Backbone.history has already been started");
                    if (
                      ((N.started = !0),
                      (this.options = n.extend({ root: "/" }, this.options, e)),
                      (this.root = this.options.root),
                      (this._wantsHashChange = !1 !== this.options.hashChange),
                      (this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7)),
                      (this._useHashChange = this._wantsHashChange && this._hasHashChange),
                      (this._wantsPushState = !!this.options.pushState),
                      (this._hasPushState = !(!this.history || !this.history.pushState)),
                      (this._usePushState = this._wantsPushState && this._hasPushState),
                      (this.fragment = this.getFragment()),
                      (this.root = ("/" + this.root + "/").replace(W, "/")),
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
                        r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                      r.document.open(), r.document.close(), (r.location.hash = "#" + this.fragment);
                    }
                    var s =
                      window.addEventListener ||
                      function (e, t) {
                        return attachEvent("on" + e, t);
                      };
                    if (
                      (this._usePushState
                        ? s("popstate", this.checkUrl, !1)
                        : this._useHashChange && !this.iframe
                        ? s("hashchange", this.checkUrl, !1)
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
                      (N.started = !1);
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
                    if (!N.started) return !1;
                    (t && !0 !== t) || (t = { trigger: !!t }), (e = this.getFragment(e || ""));
                    var n = this.root;
                    ("" !== e && "?" !== e.charAt(0)) || (n = n.slice(0, -1) || "/");
                    var i = n + e;
                    e = e.replace(H, "");
                    var r = this.decodeFragment(e);
                    if (this.fragment !== r) {
                      if (((this.fragment = r), this._usePushState))
                        this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                      else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        if ((this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow))) {
                          var s = this.iframe.contentWindow;
                          t.replace || (s.document.open(), s.document.close()), this._updateHash(s.location, e, t.replace);
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
                (t.history = new N());
              g.extend =
                m.extend =
                R.extend =
                C.extend =
                N.extend =
                  function (e, t) {
                    var i,
                      r = this;
                    return (
                      (i =
                        e && n.has(e, "constructor")
                          ? e.constructor
                          : function () {
                              return r.apply(this, arguments);
                            }),
                      n.extend(i, r, t),
                      (i.prototype = n.create(r.prototype, e)),
                      (i.prototype.constructor = i),
                      (i.__super__ = r.prototype),
                      i
                    );
                  };
              var U = function () {
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
      { jquery: "jquery", underscore: 96 }
    ],
    18: [
      function (e, t, n) {
        this.ciuvoSDK = (function () {
          var e, n, i;
          return (
            (function (t) {
              var r,
                s,
                o,
                a,
                l = {},
                c = {},
                u = {},
                d = {},
                _ = Object.prototype.hasOwnProperty,
                p = [].slice,
                f = /\.js$/;
              function h(e, t) {
                return _.call(e, t);
              }
              function b(e, t) {
                var n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  d,
                  _,
                  p,
                  h = t && t.split("/"),
                  b = u.map,
                  g = (b && b["*"]) || {};
                if (e) {
                  for (
                    o = (e = e.split("/")).length - 1,
                      u.nodeIdCompat && f.test(e[o]) && (e[o] = e[o].replace(f, "")),
                      "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)),
                      d = 0;
                    d < e.length;
                    d++
                  )
                    if ("." === (p = e[d])) e.splice(d, 1), (d -= 1);
                    else if (".." === p) {
                      if (0 === d || (1 === d && ".." === e[2]) || ".." === e[d - 1]) continue;
                      0 < d && (e.splice(d - 1, 2), (d -= 2));
                    }
                  e = e.join("/");
                }
                if ((h || g) && b) {
                  for (d = (n = e.split("/")).length; 0 < d; d -= 1) {
                    if (((i = n.slice(0, d).join("/")), h))
                      for (_ = h.length; 0 < _; _ -= 1)
                        if ((r = b[h.slice(0, _).join("/")]) && (r = r[i])) {
                          (s = r), (a = d);
                          break;
                        }
                    if (s) break;
                    !l && g && g[i] && ((l = g[i]), (c = d));
                  }
                  !s && l && ((s = l), (a = c)), s && (n.splice(0, a, s), (e = n.join("/")));
                }
                return e;
              }
              function g(e, n) {
                return function () {
                  var i = p.call(arguments, 0);
                  return "string" != typeof i[0] && 1 === i.length && i.push(null), s.apply(t, i.concat([e, n]));
                };
              }
              function m(e) {
                return function (t) {
                  l[e] = t;
                };
              }
              function v(e) {
                if (h(c, e)) {
                  var n = c[e];
                  delete c[e], (d[e] = !0), r.apply(t, n);
                }
                if (!h(l, e) && !h(d, e)) throw new Error("No " + e);
                return l[e];
              }
              function w(e) {
                var t,
                  n = e ? e.indexOf("!") : -1;
                return -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))), [t, e];
              }
              function y(e) {
                return e ? w(e) : [];
              }
              (o = function (e, t) {
                var n,
                  i = w(e),
                  r = i[0],
                  s = t[1];
                return (
                  (e = i[1]),
                  r && (n = v((r = b(r, s)))),
                  r
                    ? (e =
                        n && n.normalize
                          ? n.normalize(
                              e,
                              (function (e) {
                                return function (t) {
                                  return b(t, e);
                                };
                              })(s)
                            )
                          : b(e, s))
                    : ((r = (i = w((e = b(e, s))))[0]), (e = i[1]), r && (n = v(r))),
                  { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
                );
              }),
                (a = {
                  require: function (e) {
                    return g(e);
                  },
                  exports: function (e) {
                    var t = l[e];
                    return void 0 !== t ? t : (l[e] = {});
                  },
                  module: function (e) {
                    return {
                      id: e,
                      uri: "",
                      exports: l[e],
                      config: (function (e) {
                        return function () {
                          return (u && u.config && u.config[e]) || {};
                        };
                      })(e)
                    };
                  }
                }),
                (r = function (e, n, i, r) {
                  var s,
                    u,
                    _,
                    p,
                    f,
                    b,
                    w,
                    k = [],
                    x = typeof i;
                  if (((b = y((r = r || e))), "undefined" == x || "function" == x)) {
                    for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                      if ("require" === (u = (p = o(n[f], b)).f)) k[f] = a.require(e);
                      else if ("exports" === u) (k[f] = a.exports(e)), (w = !0);
                      else if ("module" === u) s = k[f] = a.module(e);
                      else if (h(l, u) || h(c, u) || h(d, u)) k[f] = v(u);
                      else {
                        if (!p.p) throw new Error(e + " missing " + u);
                        p.p.load(p.n, g(r, !0), m(u), {}), (k[f] = l[u]);
                      }
                    (_ = i ? i.apply(l[e], k) : void 0),
                      e && (s && s.exports !== t && s.exports !== l[e] ? (l[e] = s.exports) : (_ === t && w) || (l[e] = _));
                  } else e && (l[e] = i);
                }),
                (e =
                  n =
                  s =
                    function (e, n, i, l, c) {
                      if ("string" == typeof e) return a[e] ? a[e](n) : v(o(e, y(n)).f);
                      if (!e.splice) {
                        if (((u = e).deps && s(u.deps, u.callback), !n)) return;
                        n.splice ? ((e = n), (n = i), (i = null)) : (e = t);
                      }
                      return (
                        (n = n || function () {}),
                        "function" == typeof i && ((i = l), (l = c)),
                        l
                          ? r(t, e, n, i)
                          : setTimeout(function () {
                              r(t, e, n, i);
                            }, 4),
                        s
                      );
                    }),
                (s.config = function (e) {
                  return s(e);
                }),
                (e._defined = l),
                ((i = function (e, t, n) {
                  if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                  t.splice || ((n = t), (t = [])), h(l, e) || h(c, e) || (c[e] = [e, t, n]);
                }).amd = { jQuery: !0 });
            })(),
            i("almond", function () {}),
            i("constants", {
              version: "2.2.6",
              base_url: "https://api.ciuvo.com/api/",
              media_host_url: "https://ciuvo.com/",
              get_url: function (e, t) {
                switch (e) {
                  case "api":
                    return t.base_url || this.base_url;
                  case "storage":
                    return (t.media_host_url || this.media_host_url) + "ciuvo/globalstorage";
                  case "bundle":
                    return (t.media_host_url || this.media_host_url) + "ciuvo/templates/";
                  case "media":
                    return t.media_host_url || this.media_host_url;
                  case "analyze":
                    return (t.base_url || this.base_url) + "analyze";
                  case "voucher":
                    return (t.base_url || this.base_url) + "voucher";
                  case "whitelist":
                    return (t.base_url || this.base_url) + "whitelist";
                  default:
                    throw "invalid url specifier";
                }
              }
            }),
            i("cslparser", [], function () {
              "use strict";
              function e(t, n, i, r) {
                (this.message = t),
                  (this.expected = n),
                  (this.found = i),
                  (this.location = r),
                  (this.name = "SyntaxError"),
                  "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
              }
              function t() {
                this.constructor = n;
              }
              var n, i;
              return (
                (n = e),
                (i = Error),
                (t.prototype = i.prototype),
                (n.prototype = new t()),
                {
                  SyntaxError: e,
                  parse: function (t) {
                    var n,
                      i = 1 < arguments.length ? arguments[1] : {},
                      r = {},
                      s = { start: ii },
                      o = ii,
                      a = function (e) {
                        return e;
                      },
                      l = { type: "any", description: "any character" },
                      c = { type: "other", description: "whitespace" },
                      u = /^[\t\x0B\f \xA0\uFEFF]/,
                      d = { type: "class", value: "[\\t\\v\\f \\u00A0\\uFEFF]", description: "[\\t\\v\\f \\u00A0\\uFEFF]" },
                      _ = /^[\n\r\u2028\u2029]/,
                      p = { type: "class", value: "[\\n\\r\\u2028\\u2029]", description: "[\\n\\r\\u2028\\u2029]" },
                      f = { type: "other", description: "end of line" },
                      h = "\n",
                      b = { type: "literal", value: "\n", description: '"\\n"' },
                      g = "\r\n",
                      m = { type: "literal", value: "\r\n", description: '"\\r\\n"' },
                      v = "\r",
                      w = { type: "literal", value: "\r", description: '"\\r"' },
                      y = "\u2028",
                      k = { type: "literal", value: "\u2028", description: '"\\u2028"' },
                      x = "\u2029",
                      A = { type: "literal", value: "\u2029", description: '"\\u2029"' },
                      S = { type: "other", description: "comment" },
                      T = "/*",
                      C = { type: "literal", value: "/*", description: '"/*"' },
                      z = "*/",
                      E = { type: "literal", value: "*/", description: '"*/"' },
                      I = "//",
                      j = { type: "literal", value: "//", description: '"//"' },
                      q = "$",
                      P = { type: "literal", value: "$", description: '"$"' },
                      R = /^[ \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000]/,
                      O = {
                        type: "class",
                        value:
                          "[\\u0020\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]",
                        description:
                          "[\\u0020\\u00A0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000]"
                      },
                      B = "}",
                      L = { type: "literal", value: "}", description: '"}"' },
                      M = { type: "other", description: "Statement" },
                      N = { type: "other", description: "Assignment Statement" },
                      D = function (e, t, n, i) {
                        return {
                          type: "AssignmentStatement",
                          variable: e,
                          accessor: t,
                          operator: n,
                          value: i,
                          interpret: function (e) {
                            var n = this.value.interpret(e);
                            if (
                              ("=" != this.operator && (n = $i(this.variable.interpret(e), this.operator.substring(0, 1), n)),
                              null !== this.accessor)
                            ) {
                              var i = t.interpret(e);
                              (i = Gi(i, this.variable.interpret(e))), (e.variables[this.variable.identifier][i] = n);
                            } else e.variables[this.variable.identifier] = n;
                          },
                          accept: function (e) {
                            e.visitAssignmentStatement(this);
                          }
                        };
                      },
                      W = { type: "other", description: "Assignment Operator" },
                      H = "=",
                      U = { type: "literal", value: "=", description: '"="' },
                      F = function () {
                        return "=";
                      },
                      V = "*=",
                      Y = { type: "literal", value: "*=", description: '"*="' },
                      $ = "/=",
                      X = { type: "literal", value: "/=", description: '"/="' },
                      G = "%=",
                      K = { type: "literal", value: "%=", description: '"%="' },
                      Z = "+=",
                      Q = { type: "literal", value: "+=", description: '"+="' },
                      J = "-=",
                      ee = { type: "literal", value: "-=", description: '"-="' },
                      te = /^[a-zA-Z0-9_]/,
                      ne = { type: "class", value: "[a-zA-Z0-9_]", description: "[a-zA-Z0-9_]" },
                      ie = function (e, t) {
                        return {
                          type: "VariableExpression",
                          identifier: e + t.join(""),
                          interpret: function (e) {
                            if (!(this.identifier in e.variables))
                              throw new e.InterpreterError("Variable " + this.identifier + " not defined.");
                            return e.variables[this.identifier];
                          },
                          accept: function (e) {
                            return e.visitVariableExpression(this);
                          }
                        };
                      },
                      re = ",",
                      se = { type: "literal", value: ",", description: '","' },
                      oe = function (e, t) {
                        for (var n = [e], i = 0; i < t.length; i++) n.push(t[i][3]);
                        return n;
                      },
                      ae = function (e) {
                        return {
                          type: "StatementExpression",
                          expr: e,
                          interpret: function (e) {
                            this.expr.interpret(e);
                          },
                          accept: function (e) {
                            return e.visitStatementExpression(this);
                          }
                        };
                      },
                      le = { type: "other", description: "Block" },
                      ce = "{",
                      ue = { type: "literal", value: "{", description: '"{"' },
                      de = function (e) {
                        return {
                          type: "Block",
                          statements: null !== e ? e[0] : [],
                          interpret: function (e) {
                            for (var t = this.statements.length - 1; 0 <= t; t--) e.stmt_stack.push(this.statements[t]);
                          },
                          accept: function (e) {
                            e.visitBlock(this);
                          }
                        };
                      },
                      _e = function (e, t) {
                        for (var n = [e], i = 0; i < t.length; i++) n.push(t[i][1]);
                        return n;
                      },
                      pe = { type: "other", description: "No-op Statement" },
                      fe = ";",
                      he = { type: "literal", value: ";", description: '";"' },
                      be = function () {
                        return {
                          type: "EmptyStatement",
                          interpret: function (e) {},
                          accept: function (e) {
                            e.visitEmptyStatement(this);
                          }
                        };
                      },
                      ge = { type: "other", description: "For-In Loop" },
                      me = "(",
                      ve = { type: "literal", value: "(", description: '"("' },
                      we = ")",
                      ye = { type: "literal", value: ")", description: '")"' },
                      ke = function (e, t, n) {
                        return {
                          type: "ForInStatement",
                          iterator: e,
                          collection: t,
                          statement: n,
                          interpret: function (e) {
                            var t = this.collection.interpret(e),
                              n = this.statement;
                            if (!t.hasOwnProperty("length")) throw new e.InterpreterError("ForIn Loop only on Arrays or Strings.");
                            var i = 0,
                              r = this.iterator.identifier;
                            function s() {
                              this.type = "LoopClosure";
                            }
                            (s.prototype.interpret = function (e) {
                              i < t.length && ((e.variables[r] = t[i]), (i += 1), e.stmt_stack.push(this), e.stmt_stack.push(n));
                            }),
                              e.stmt_stack.push(new s());
                          },
                          accept: function (e) {
                            e.visitForInStatement(this);
                          }
                        };
                      },
                      xe = { type: "other", description: "If Statement" },
                      Ae = function (e, t, n) {
                        return {
                          type: "IfStatement",
                          condition: e,
                          if_statement: t,
                          else_statement: n,
                          interpret: function (e) {
                            this.condition.interpret(e)
                              ? e.stmt_stack.push(this.if_statement)
                              : null !== this.else_statement && e.stmt_stack.push(this.else_statement[2]);
                          },
                          accept: function (e) {
                            e.visitIfStatement(this);
                          }
                        };
                      },
                      Se = { type: "other", description: "Require Statement" },
                      Te = function (e) {
                        return {
                          type: "RequireStatement",
                          vars: e,
                          interpret: function (e) {
                            for (var t = 0; t < this.vars.length; t++) {
                              var n = this.vars[t].identifier;
                              if (!this.vars[t].interpret(e)) {
                                for (
                                  e.error_callback.call(this, new e.RequireError("Variable " + n + " required."));
                                  0 < e.stmt_stack.length;

                                )
                                  e.stmt_stack.pop();
                                e.ret = void 0;
                                break;
                              }
                            }
                          },
                          accept: function (e) {
                            e.visitRequireStatement(this);
                          }
                        };
                      },
                      Ce = { type: "other", description: "Return Statement" },
                      ze = function (e) {
                        return {
                          type: "ReturnStatement",
                          vars: e,
                          interpret: function (e) {
                            for (var t = !1, n = {}, i = this.vars.length - 1; 0 <= i; ) (n[this.vars[i].identifier] = !0), (i -= 1);
                            for (void 0 === e.ret && (e.ret = {}), i = this.vars.length - 1; 0 <= i; ) {
                              var r = this.vars[i],
                                s = r.interpret(e),
                                o = r.identifier.substring(1);
                              (o in e.ret && Xi(e.ret[o], s)) || ((t = !0), (e.ret[o] = s)), (i -= 1);
                            }
                            var a = 0;
                            for (var l in e.ret) a += 1;
                            var c = 0;
                            for (var l in n) c += 1;
                            c != a && (t = !0), t && e.return_callback.call(e.return_callback, e.ret);
                          },
                          accept: function (e) {
                            e.visitReturnStatement(this);
                          }
                        };
                      },
                      Ee = function (e) {
                        return e;
                      },
                      Ie = /^[a-zA-Z_]/,
                      je = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
                      qe = function (e) {
                        return e.join("");
                      },
                      Pe = function (e, t) {
                        return {
                          type: "CallExpression",
                          func_name: e,
                          arg_exprs: null !== t ? t : [],
                          interpret: function (e) {
                            for (var t = [], n = 0; n < this.arg_exprs.length; n++) {
                              var i = this.arg_exprs[n].interpret(e);
                              t.push(i);
                            }
                            var r = e.function_table[this.func_name];
                            if (r) return r.apply(e, t);
                          },
                          accept: function (e) {
                            return e.visitCallExpression(this);
                          }
                        };
                      },
                      Re = function (e, t) {
                        for (var n = [e], i = 0; i < t.length; i++) n.push(t[i][3]);
                        return n;
                      },
                      Oe = "[",
                      Be = { type: "literal", value: "[", description: '"["' },
                      Le = "]",
                      Me = { type: "literal", value: "]", description: '"]"' },
                      Ne = function (e) {
                        return e;
                      },
                      De = function (e, t) {
                        return {
                          type: "AccessorExpression",
                          value: e,
                          index: t,
                          interpret: function (e) {
                            var t = this.value.interpret(e),
                              n = this.index.interpret(e);
                            return t[(n = Gi(n, t))];
                          },
                          accept: function (e) {
                            return e.visitAccessorExpression(this);
                          }
                        };
                      },
                      We = function (e, t) {
                        return {
                          type: "UnaryExpression",
                          operator: e,
                          expression: t,
                          interpret: function (e) {
                            var t = this.expression.interpret(e);
                            return (function (e, t) {
                              switch (e) {
                                case "+":
                                  return +t;
                                case "-":
                                  return -t;
                                case "~":
                                  return ~t;
                                case "not":
                                  return !t;
                                default:
                                  return;
                              }
                            })(this.operator, t);
                          },
                          accept: function (e) {
                            return e.visitUnaryExpression(this);
                          }
                        };
                      },
                      He = "+",
                      Ue = { type: "literal", value: "+", description: '"+"' },
                      Fe = "-",
                      Ve = { type: "literal", value: "-", description: '"-"' },
                      Ye = "~",
                      $e = { type: "literal", value: "~", description: '"~"' },
                      Xe = "not",
                      Ge = { type: "literal", value: "not", description: '"not"' },
                      Ke = function (e, t) {
                        for (var n = e, i = 0; i < t.length; i++)
                          n = {
                            type: "MultiplicativeExpression",
                            operator: t[i][1],
                            left: n,
                            right: t[i][3],
                            interpret: function (e) {
                              var t = this.left.interpret(e),
                                n = this.right.interpret(e);
                              return $i(t, this.operator, n);
                            },
                            accept: function (e) {
                              return e.visitMultiplicativeExpression(this);
                            }
                          };
                        return n;
                      },
                      Ze = "*",
                      Qe = { type: "literal", value: "*", description: '"*"' },
                      Je = "/",
                      et = { type: "literal", value: "/", description: '"/"' },
                      tt = "%",
                      nt = { type: "literal", value: "%", description: '"%"' },
                      it = function (e) {
                        return e;
                      },
                      rt = function (e, t) {
                        for (var n = e, i = 0; i < t.length; i++)
                          n = {
                            type: "AdditiveExpression",
                            operator: t[i][1],
                            left: n,
                            right: t[i][3],
                            interpret: function (e) {
                              var t = this.left.interpret(e),
                                n = this.right.interpret(e);
                              return $i(t, this.operator, n);
                            },
                            accept: function (e) {
                              return e.visitAdditiveExpression(this);
                            }
                          };
                        return n;
                      },
                      st = function () {
                        return "+";
                      },
                      ot = function () {
                        return "-";
                      },
                      at = function (e, t) {
                        for (var n = e, i = 0; i < t.length; i++)
                          n = {
                            type: "RelationalExpression",
                            operator: t[i][1],
                            left: n,
                            right: t[i][3],
                            interpret: function (e) {
                              var t = this.left.interpret(e),
                                n = this.right.interpret(e);
                              return $i(t, this.operator, n);
                            },
                            accept: function (e) {
                              return e.visitRelationalExpression(this);
                            }
                          };
                        return n;
                      },
                      lt = "<=",
                      ct = { type: "literal", value: "<=", description: '"<="' },
                      ut = ">=",
                      dt = { type: "literal", value: ">=", description: '">="' },
                      _t = "<",
                      pt = { type: "literal", value: "<", description: '"<"' },
                      ft = ">",
                      ht = { type: "literal", value: ">", description: '">"' },
                      bt = function (e, t) {
                        for (var n = e, i = 0; i < t.length; i++)
                          n = {
                            type: "EqualsExpression",
                            operator: t[i][1],
                            left: n,
                            right: t[i][3],
                            interpret: function (e) {
                              return this.left.interpret(e) == this.right.interpret(e);
                            },
                            accept: function (e) {
                              return e.visitEqualsExpression(this);
                            }
                          };
                        return n;
                      },
                      gt = "==",
                      mt = { type: "literal", value: "==", description: '"=="' },
                      vt = function (e, t) {
                        for (var n = e, i = 0; i < t.length; i++)
                          n = {
                            type: "LogicalANDExpression",
                            operator: t[i][1],
                            left: n,
                            right: t[i][3],
                            interpret: function (e) {
                              return !!this.left.interpret(e) && this.right.interpret(e);
                            },
                            accept: function (e) {
                              return e.visitLogicalANDExpression(this);
                            }
                          };
                        return n;
                      },
                      wt = function (e, t) {
                        for (var n = e, i = 0; i < t.length; i++)
                          n = {
                            type: "LogicalORExpression",
                            operator: t[i][1],
                            left: n,
                            right: t[i][3],
                            interpret: function (e) {
                              return this.left.interpret(e) || this.right.interpret(e);
                            },
                            accept: function (e) {
                              return e.visitLogicalORExpression(this);
                            }
                          };
                        return n;
                      },
                      yt = function (e) {
                        return {
                          type: "ArrayLiteral",
                          elements: null !== e ? e : [],
                          interpret: function (e) {
                            for (var t = new Array(), n = 0; n < this.elements.length; n++) t.push(this.elements[n].interpret(e));
                            return t;
                          },
                          accept: function (e) {
                            return e.visitArrayLiteral(this);
                          }
                        };
                      },
                      kt = { type: "other", description: "regex" },
                      xt = function (e) {
                        return {
                          type: "RegexLiteral",
                          value: e,
                          interpret: function (e) {
                            return this.value;
                          },
                          accept: function (e) {
                            return e.visitRegularExpressionLiteral(this);
                          }
                        };
                      },
                      At = function () {
                        return {
                          type: "NullLiteral",
                          value: null,
                          interpret: function (e) {
                            return this.value;
                          },
                          accept: function (e) {
                            return e.visitNullLiteral(this);
                          }
                        };
                      },
                      St = function () {
                        return {
                          type: "BooleanLiteral",
                          value: !0,
                          interpret: function (e) {
                            return this.value;
                          },
                          accept: function (e) {
                            return e.visitBooleanLiteral(this);
                          }
                        };
                      },
                      Tt = function () {
                        return {
                          type: "BooleanLiteral",
                          value: !1,
                          interpret: function (e) {
                            return this.value;
                          },
                          accept: function (e) {
                            return e.visitBooleanLiteral(this);
                          }
                        };
                      },
                      Ct = { type: "other", description: "number" },
                      zt = function (e) {
                        return {
                          type: "NumericLiteral",
                          value: e,
                          interpret: function (e) {
                            return this.value;
                          },
                          accept: function (e) {
                            return e.visitNumericLiteral(this);
                          }
                        };
                      },
                      Et = ".",
                      It = { type: "literal", value: ".", description: '"."' },
                      jt = function (e, t, n) {
                        return parseFloat(e + "." + t + n);
                      },
                      qt = function (e, t) {
                        return parseFloat("." + e + t);
                      },
                      Pt = function (e, t) {
                        return parseFloat(e + t);
                      },
                      Rt = "0",
                      Ot = { type: "literal", value: "0", description: '"0"' },
                      Bt = function (e, t) {
                        return e + t;
                      },
                      Lt = function (e) {
                        return e.join("");
                      },
                      Mt = /^[0-9]/,
                      Nt = { type: "class", value: "[0-9]", description: "[0-9]" },
                      Dt = /^[1-9]/,
                      Wt = { type: "class", value: "[1-9]", description: "[1-9]" },
                      Ht = function (e, t) {
                        return e + t;
                      },
                      Ut = /^[eE]/,
                      Ft = { type: "class", value: "[eE]", description: "[eE]" },
                      Vt = /^[\-+]/,
                      Yt = { type: "class", value: "[-+]", description: "[-+]" },
                      $t = function (e, t) {
                        return e + t;
                      },
                      Xt = /^[xX]/,
                      Gt = { type: "class", value: "[xX]", description: "[xX]" },
                      Kt = function (e) {
                        return parseInt("0x" + dgits.join(""));
                      },
                      Zt = /^[0-9a-fA-F]/,
                      Qt = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
                      Jt = { type: "other", description: "string" },
                      en = '"',
                      tn = { type: "literal", value: '"', description: '"\\""' },
                      nn = "'",
                      rn = { type: "literal", value: "'", description: '"\'"' },
                      sn = function (e) {
                        return {
                          type: "StringLiteral",
                          value: e[1] || "",
                          quote: e[0],
                          interpret: function (e) {
                            return this.value;
                          },
                          accept: function (e) {
                            return e.visitStringLiteral(this);
                          }
                        };
                      },
                      on = function (e) {
                        return e.join("");
                      },
                      an = "\\",
                      ln = { type: "literal", value: "\\", description: '"\\\\"' },
                      cn = function (e) {
                        return e;
                      },
                      un = function (e) {
                        return e;
                      },
                      dn = function (e) {
                        return e;
                      },
                      _n = function (e) {
                        return e;
                      },
                      pn = function () {
                        return "\0";
                      },
                      fn = /^['"\\bfnrtv]/,
                      hn = { type: "class", value: "['\"\\\\bfnrtv]", description: "['\"\\\\bfnrtv]" },
                      bn = function (e) {
                        return e
                          .replace("b", "\b")
                          .replace("f", "\f")
                          .replace("n", "\n")
                          .replace("r", "\r")
                          .replace("t", "\t")
                          .replace("v", "\v");
                      },
                      gn = function (e) {
                        return e;
                      },
                      mn = "x",
                      vn = { type: "literal", value: "x", description: '"x"' },
                      wn = "u",
                      yn = { type: "literal", value: "u", description: '"u"' },
                      kn = function (e, t) {
                        return String.fromCharCode(parseInt("0x" + e + t));
                      },
                      xn = function (e, t, n, i) {
                        return String.fromCharCode(parseInt("0x" + e + t + n + i));
                      },
                      An = "and",
                      Sn = { type: "literal", value: "and", description: '"and"' },
                      Tn = "or",
                      Cn = { type: "literal", value: "or", description: '"or"' },
                      zn = "else",
                      En = { type: "literal", value: "else", description: '"else"' },
                      In = "false",
                      jn = { type: "literal", value: "false", description: '"false"' },
                      qn = "for",
                      Pn = { type: "literal", value: "for", description: '"for"' },
                      Rn = "in",
                      On = { type: "literal", value: "in", description: '"in"' },
                      Bn = "if",
                      Ln = { type: "literal", value: "if", description: '"if"' },
                      Mn = "null",
                      Nn = { type: "literal", value: "null", description: '"null"' },
                      Dn = "return",
                      Wn = { type: "literal", value: "return", description: '"return"' },
                      Hn = "true",
                      Un = { type: "literal", value: "true", description: '"true"' },
                      Fn = "require",
                      Vn = { type: "literal", value: "require", description: '"require"' },
                      Yn = function (e) {
                        return {
                          type: "Program",
                          statements: null !== e ? e : [],
                          interpret: function (e) {
                            this.statements;
                            for (var t = this.statements.length - 1; 0 <= t; t--) e.stmt_stack.push(this.statements[t]);
                            e.interpretNext();
                          },
                          accept: function (e) {
                            e.visitProgram(this);
                          }
                        };
                      },
                      $n = function (e, t, n) {
                        for (var i = [e], r = 0; r < t.length; r++) i.push(t[r][1]);
                        return i.push(n), i;
                      },
                      Xn = 0,
                      Gn = [{ line: 1, column: 1, seenCR: !1 }],
                      Kn = 0,
                      Zn = [],
                      Qn = 0;
                    if ("startRule" in i) {
                      if (!(i.startRule in s)) throw new Error("Can't start parsing from rule \"" + i.startRule + '".');
                      o = s[i.startRule];
                    }
                    function Jn(e) {
                      var n,
                        i,
                        r = Gn[e];
                      if (r) return r;
                      for (n = e - 1; !Gn[n]; ) n--;
                      for (r = { line: (r = Gn[n]).line, column: r.column, seenCR: r.seenCR }; n < e; )
                        "\n" === (i = t.charAt(n))
                          ? (r.seenCR || r.line++, (r.column = 1), (r.seenCR = !1))
                          : "\r" === i || "\u2028" === i || "\u2029" === i
                          ? (r.line++, (r.column = 1), (r.seenCR = !0))
                          : (r.column++, (r.seenCR = !1)),
                          n++;
                      return (Gn[e] = r);
                    }
                    function ei(e, t) {
                      var n = Jn(e),
                        i = Jn(t);
                      return { start: { offset: e, line: n.line, column: n.column }, end: { offset: t, line: i.line, column: i.column } };
                    }
                    function ti(e) {
                      Xn < Kn || (Kn < Xn && ((Kn = Xn), (Zn = [])), Zn.push(e));
                    }
                    function ni(t, n, i, r) {
                      return (
                        null !== n &&
                          (function (e) {
                            var t = 1;
                            for (
                              e.sort(function (e, t) {
                                return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
                              });
                              t < e.length;

                            )
                              e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                          })(n),
                        new e(
                          null !== t
                            ? t
                            : (function (e, t) {
                                var n,
                                  i = new Array(e.length);
                                for (n = 0; n < e.length; n++) i[n] = e[n].description;
                                function r(e) {
                                  return e.charCodeAt(0).toString(16).toUpperCase();
                                }
                                return (
                                  "Expected " +
                                  (1 < e.length ? i.slice(0, -1).join(", ") + " or " + i[e.length - 1] : i[0]) +
                                  " but " +
                                  (t
                                    ? '"' +
                                      t
                                        .replace(/\\/g, "\\\\")
                                        .replace(/"/g, '\\"')
                                        .replace(/\x08/g, "\\b")
                                        .replace(/\t/g, "\\t")
                                        .replace(/\n/g, "\\n")
                                        .replace(/\f/g, "\\f")
                                        .replace(/\r/g, "\\r")
                                        .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                                          return "\\x0" + r(e);
                                        })
                                        .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                                          return "\\x" + r(e);
                                        })
                                        .replace(/[\u0100-\u0FFF]/g, function (e) {
                                          return "\\u0" + r(e);
                                        })
                                        .replace(/[\u1000-\uFFFF]/g, function (e) {
                                          return "\\u" + r(e);
                                        }) +
                                      '"'
                                    : "end of input") +
                                  " found."
                                );
                              })(n, i),
                          n,
                          i,
                          r
                        )
                      );
                    }
                    function ii() {
                      var e, n;
                      return (
                        (e = Xn),
                        fi() !== r &&
                        (n = (function () {
                          var e;
                          return (
                            (e = (function () {
                              var e, n, i, s, o, a;
                              if (((e = Xn), (n = hi()) !== r)) {
                                for (i = [], s = Xn, s = (o = fi()) !== r && (a = hi()) !== r ? (o = [o, a]) : ((Xn = s), r); s !== r; )
                                  i.push(s), (s = Xn), (s = (o = fi()) !== r && (a = hi()) !== r ? (o = [o, a]) : ((Xn = s), r));
                                e =
                                  i !== r &&
                                  (s = fi()) !== r &&
                                  (o = (function () {
                                    var e, n;
                                    return (
                                      Qn++,
                                      (e = Xn),
                                      (e =
                                        (function () {
                                          var e;
                                          return t.substr(Xn, 6) === Dn ? ((e = Dn), (Xn += 6)) : ((e = r), 0 === Qn && ti(Wn)), e;
                                        })() !== r &&
                                        fi() !== r &&
                                        (n = gi()) !== r &&
                                        _i() !== r
                                          ? ze(n)
                                          : ((Xn = e), r)),
                                      Qn--,
                                      e === r && 0 === Qn && ti(Ce),
                                      e
                                    );
                                  })()) !== r
                                    ? (n = $n(n, i, o))
                                    : ((Xn = e), r);
                              } else (Xn = e), (e = r);
                              return e;
                            })()) === r && (e = null),
                            e !== r && (e = Yn(e)),
                            e
                          );
                        })()) !== r &&
                        fi() !== r
                          ? a(n)
                          : ((Xn = e), r)
                      );
                    }
                    function ri() {
                      var e;
                      return t.length > Xn ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(l)), e;
                    }
                    function si() {
                      var e;
                      return (
                        Qn++,
                        u.test(t.charAt(Xn)) ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(d)),
                        e === r &&
                          (e = (function () {
                            var e;
                            return R.test(t.charAt(Xn)) ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(O)), e;
                          })()),
                        Qn--,
                        e === r && 0 === Qn && ti(c),
                        e
                      );
                    }
                    function oi() {
                      var e;
                      return _.test(t.charAt(Xn)) ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(p)), e;
                    }
                    function ai() {
                      var e;
                      return (
                        Qn++,
                        10 === t.charCodeAt(Xn) ? ((e = h), Xn++) : ((e = r), 0 === Qn && ti(b)),
                        e === r &&
                          (t.substr(Xn, 2) === g ? ((e = g), (Xn += 2)) : ((e = r), 0 === Qn && ti(m)),
                          e === r &&
                            (13 === t.charCodeAt(Xn) ? ((e = v), Xn++) : ((e = r), 0 === Qn && ti(w)),
                            e === r &&
                              (8232 === t.charCodeAt(Xn) ? ((e = y), Xn++) : ((e = r), 0 === Qn && ti(k)),
                              e === r && (8233 === t.charCodeAt(Xn) ? ((e = x), Xn++) : ((e = r), 0 === Qn && ti(A)))))),
                        Qn--,
                        e === r && 0 === Qn && ti(f),
                        e
                      );
                    }
                    function li() {
                      var e;
                      return (
                        Qn++,
                        (e = (function () {
                          var e, n, i, s, o, a;
                          if (((e = Xn), t.substr(Xn, 2) === T ? ((n = T), (Xn += 2)) : ((n = r), 0 === Qn && ti(C)), n !== r)) {
                            for (
                              i = [],
                                o = s = Xn,
                                Qn++,
                                t.substr(Xn, 2) === z ? ((a = z), (Xn += 2)) : ((a = r), 0 === Qn && ti(E)),
                                Qn--,
                                s = (o = a === r ? void 0 : ((Xn = o), r)) !== r && (a = ri()) !== r ? (o = [o, a]) : ((Xn = s), r);
                              s !== r;

                            )
                              i.push(s),
                                (o = s = Xn),
                                Qn++,
                                t.substr(Xn, 2) === z ? ((a = z), (Xn += 2)) : ((a = r), 0 === Qn && ti(E)),
                                Qn--,
                                (s = (o = a === r ? void 0 : ((Xn = o), r)) !== r && (a = ri()) !== r ? (o = [o, a]) : ((Xn = s), r));
                            e =
                              i !== r
                                ? (t.substr(Xn, 2) === z ? ((s = z), (Xn += 2)) : ((s = r), 0 === Qn && ti(E)),
                                  s !== r ? (n = [n, i, s]) : ((Xn = e), r))
                                : ((Xn = e), r);
                          } else (Xn = e), (e = r);
                          return e;
                        })()) === r && (e = ui()),
                        Qn--,
                        e === r && 0 === Qn && ti(S),
                        e
                      );
                    }
                    function ci() {
                      var e, n, i, s, o, a;
                      if (((e = Xn), t.substr(Xn, 2) === T ? ((n = T), (Xn += 2)) : ((n = r), 0 === Qn && ti(C)), n !== r)) {
                        for (
                          i = [],
                            o = s = Xn,
                            Qn++,
                            t.substr(Xn, 2) === z ? ((a = z), (Xn += 2)) : ((a = r), 0 === Qn && ti(E)),
                            a === r && (a = oi()),
                            Qn--,
                            s = (o = a === r ? void 0 : ((Xn = o), r)) !== r && (a = ri()) !== r ? (o = [o, a]) : ((Xn = s), r);
                          s !== r;

                        )
                          i.push(s),
                            (o = s = Xn),
                            Qn++,
                            t.substr(Xn, 2) === z ? ((a = z), (Xn += 2)) : ((a = r), 0 === Qn && ti(E)),
                            a === r && (a = oi()),
                            Qn--,
                            (s = (o = a === r ? void 0 : ((Xn = o), r)) !== r && (a = ri()) !== r ? (o = [o, a]) : ((Xn = s), r));
                        e =
                          i !== r
                            ? (t.substr(Xn, 2) === z ? ((s = z), (Xn += 2)) : ((s = r), 0 === Qn && ti(E)),
                              s !== r ? (n = [n, i, s]) : ((Xn = e), r))
                            : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function ui() {
                      var e, n, i, s, o, a;
                      if (((e = Xn), t.substr(Xn, 2) === I ? ((n = I), (Xn += 2)) : ((n = r), 0 === Qn && ti(j)), n !== r)) {
                        for (
                          i = [],
                            o = s = Xn,
                            Qn++,
                            a = oi(),
                            Qn--,
                            s = (o = a === r ? void 0 : ((Xn = o), r)) !== r && (a = ri()) !== r ? (o = [o, a]) : ((Xn = s), r);
                          s !== r;

                        )
                          i.push(s),
                            (o = s = Xn),
                            Qn++,
                            (a = oi()),
                            Qn--,
                            (s = (o = a === r ? void 0 : ((Xn = o), r)) !== r && (a = ri()) !== r ? (o = [o, a]) : ((Xn = s), r));
                        e = i !== r ? (n = [n, i]) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function di() {
                      var e;
                      return 36 === t.charCodeAt(Xn) ? ((e = q), Xn++) : ((e = r), 0 === Qn && ti(P)), e;
                    }
                    function _i() {
                      var e, n, i, s;
                      return (
                        (e = Xn),
                        (e = (n = pi()) !== r && (i = ai()) !== r ? (n = [n, i]) : ((Xn = e), r)) === r &&
                          ((e = Xn),
                          (e =
                            (n = pi()) !== r
                              ? ((i = Xn),
                                Qn++,
                                125 === t.charCodeAt(Xn) ? ((s = B), Xn++) : ((s = r), 0 === Qn && ti(L)),
                                Qn--,
                                (i = s !== r ? void (Xn = i) : r) !== r ? (n = [n, i]) : ((Xn = e), r))
                              : ((Xn = e), r)) === r &&
                            ((e = Xn),
                            (e =
                              (n = fi()) !== r &&
                              (i = (function () {
                                var e, n;
                                return (
                                  (e = Xn),
                                  Qn++,
                                  t.length > Xn ? ((n = t.charAt(Xn)), Xn++) : ((n = r), 0 === Qn && ti(l)),
                                  Qn--,
                                  (e = n === r ? void 0 : ((Xn = e), r))
                                );
                              })()) !== r
                                ? (n = [n, i])
                                : ((Xn = e), r)))),
                        e
                      );
                    }
                    function pi() {
                      var e, t;
                      for (e = [], (t = si()) === r && (t = ci()) === r && (t = ui()); t !== r; )
                        e.push(t), (t = si()) === r && (t = ci()) === r && (t = ui());
                      return e;
                    }
                    function fi() {
                      var e, t;
                      for (e = [], (t = si()) === r && (t = ai()) === r && (t = li()); t !== r; )
                        e.push(t), (t = si()) === r && (t = ai()) === r && (t = li());
                      return e;
                    }
                    function hi() {
                      var e;
                      return (
                        Qn++,
                        (e = (function () {
                          var e, n, i, s, o;
                          return (
                            Qn++,
                            (e = Xn),
                            (e =
                              (n = bi()) !== r && fi() !== r
                                ? ((i = ki()) === r && (i = null),
                                  i !== r &&
                                  fi() !== r &&
                                  (s = (function () {
                                    var e, n, i, s;
                                    return (
                                      Qn++,
                                      (e = Xn),
                                      61 === t.charCodeAt(Xn) ? ((n = H), Xn++) : ((n = r), 0 === Qn && ti(U)),
                                      (e =
                                        n !== r
                                          ? ((i = Xn),
                                            Qn++,
                                            61 === t.charCodeAt(Xn) ? ((s = H), Xn++) : ((s = r), 0 === Qn && ti(U)),
                                            Qn--,
                                            (i = s === r ? void 0 : ((Xn = i), r)) !== r ? (n = F()) : ((Xn = e), r))
                                          : ((Xn = e), r)) === r &&
                                        (t.substr(Xn, 2) === V ? ((e = V), (Xn += 2)) : ((e = r), 0 === Qn && ti(Y)),
                                        e === r &&
                                          (t.substr(Xn, 2) === $ ? ((e = $), (Xn += 2)) : ((e = r), 0 === Qn && ti(X)),
                                          e === r &&
                                            (t.substr(Xn, 2) === G ? ((e = G), (Xn += 2)) : ((e = r), 0 === Qn && ti(K)),
                                            e === r &&
                                              (t.substr(Xn, 2) === Z ? ((e = Z), (Xn += 2)) : ((e = r), 0 === Qn && ti(Q)),
                                              e === r && (t.substr(Xn, 2) === J ? ((e = J), (Xn += 2)) : ((e = r), 0 === Qn && ti(ee))))))),
                                      Qn--,
                                      e === r && ((n = r), 0 === Qn && ti(W)),
                                      e
                                    );
                                  })()) !== r &&
                                  fi() !== r &&
                                  (o = Pi()) !== r &&
                                  _i() !== r
                                    ? (n = D(n, i, s, o))
                                    : ((Xn = e), r))
                                : ((Xn = e), r)),
                            Qn--,
                            e === r && ((n = r), 0 === Qn && ti(N)),
                            e
                          );
                        })()) === r &&
                          (e = (function () {
                            var e, n, i, s, o, a;
                            return (
                              Qn++,
                              (e = Xn),
                              (e =
                                (function () {
                                  var e;
                                  return t.substr(Xn, 3) === qn ? ((e = qn), (Xn += 3)) : ((e = r), 0 === Qn && ti(Pn)), e;
                                })() !== r && fi() !== r
                                  ? (40 === t.charCodeAt(Xn) ? ((n = me), Xn++) : ((n = r), 0 === Qn && ti(ve)),
                                    n !== r &&
                                    fi() !== r &&
                                    (i = bi()) !== r &&
                                    fi() !== r &&
                                    (function () {
                                      var e;
                                      return t.substr(Xn, 2) === Rn ? ((e = Rn), (Xn += 2)) : ((e = r), 0 === Qn && ti(On)), e;
                                    })() !== r &&
                                    fi() !== r
                                      ? ((s = vi()) === r && (s = bi()),
                                        s !== r && fi() !== r
                                          ? (41 === t.charCodeAt(Xn) ? ((o = we), Xn++) : ((o = r), 0 === Qn && ti(ye)),
                                            o !== r && fi() !== r
                                              ? ((a = hi()) === r && (a = mi()), a !== r ? ke(i, s, a) : ((Xn = e), r))
                                              : ((Xn = e), r))
                                          : ((Xn = e), r))
                                      : ((Xn = e), r))
                                  : ((Xn = e), r)),
                              Qn--,
                              e === r && 0 === Qn && ti(ge),
                              e
                            );
                          })()) === r &&
                          (e = (function () {
                            var e, n, i, s, o, a, l, c, u;
                            return (
                              Qn++,
                              (e = Xn),
                              (e =
                                (function () {
                                  var e;
                                  return t.substr(Xn, 2) === Bn ? ((e = Bn), (Xn += 2)) : ((e = r), 0 === Qn && ti(Ln)), e;
                                })() !== r && fi() !== r
                                  ? (40 === t.charCodeAt(Xn) ? ((n = me), Xn++) : ((n = r), 0 === Qn && ti(ve)),
                                    n !== r && fi() !== r && (i = Pi()) !== r && fi() !== r
                                      ? (41 === t.charCodeAt(Xn) ? ((s = we), Xn++) : ((s = r), 0 === Qn && ti(ye)),
                                        s !== r && fi() !== r
                                          ? ((o = hi()) === r && (o = mi()),
                                            o !== r && fi() !== r
                                              ? ((a = Xn),
                                                (l = (function () {
                                                  var e;
                                                  return t.substr(Xn, 4) === zn ? ((e = zn), (Xn += 4)) : ((e = r), 0 === Qn && ti(En)), e;
                                                })()),
                                                (a =
                                                  l !== r && (c = fi()) !== r
                                                    ? ((u = hi()) === r && (u = mi()), u !== r ? (l = [l, c, u]) : ((Xn = a), r))
                                                    : ((Xn = a), r)) === r && (a = null),
                                                a !== r ? Ae(i, o, a) : ((Xn = e), r))
                                              : ((Xn = e), r))
                                          : ((Xn = e), r))
                                      : ((Xn = e), r))
                                  : ((Xn = e), r)),
                              Qn--,
                              e === r && 0 === Qn && ti(xe),
                              e
                            );
                          })()) === r &&
                          (e = (function () {
                            var e, n;
                            return (
                              Qn++,
                              (e = Xn),
                              (e =
                                (function () {
                                  var e;
                                  return t.substr(Xn, 7) === Fn ? ((e = Fn), (Xn += 7)) : ((e = r), 0 === Qn && ti(Vn)), e;
                                })() !== r &&
                                fi() !== r &&
                                (n = gi()) !== r &&
                                _i() !== r
                                  ? Te(n)
                                  : ((Xn = e), r)),
                              Qn--,
                              e === r && 0 === Qn && ti(Se),
                              e
                            );
                          })()) === r &&
                          (e = (function () {
                            var e;
                            return (e = wi()) !== r && (e = ae(e)), e;
                          })()) === r &&
                          (e = (function () {
                            var e, n;
                            return (
                              Qn++,
                              (e = Xn),
                              59 === t.charCodeAt(Xn) ? ((n = fe), Xn++) : ((n = r), 0 === Qn && ti(he)),
                              n !== r && (n = be()),
                              Qn--,
                              (e = n) === r && ((n = r), 0 === Qn && ti(pe)),
                              e
                            );
                          })()),
                        Qn--,
                        e === r && 0 === Qn && ti(M),
                        e
                      );
                    }
                    function bi() {
                      var e, n, i, s;
                      if (((e = Xn), (n = di()) !== r)) {
                        if (((i = []), te.test(t.charAt(Xn)) ? ((s = t.charAt(Xn)), Xn++) : ((s = r), 0 === Qn && ti(ne)), s !== r))
                          for (; s !== r; ) i.push(s), te.test(t.charAt(Xn)) ? ((s = t.charAt(Xn)), Xn++) : ((s = r), 0 === Qn && ti(ne));
                        else i = r;
                        e = i !== r ? (n = ie(n, i)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function gi() {
                      var e, n, i, s, o, a, l, c;
                      if (((e = Xn), (n = bi()) !== r)) {
                        for (
                          i = [],
                            s = Xn,
                            s =
                              (o = fi()) !== r
                                ? (44 === t.charCodeAt(Xn) ? ((a = re), Xn++) : ((a = r), 0 === Qn && ti(se)),
                                  a !== r && (l = fi()) !== r && (c = bi()) !== r ? (o = [o, a, l, c]) : ((Xn = s), r))
                                : ((Xn = s), r);
                          s !== r;

                        )
                          i.push(s),
                            (s = Xn),
                            (s =
                              (o = fi()) !== r
                                ? (44 === t.charCodeAt(Xn) ? ((a = re), Xn++) : ((a = r), 0 === Qn && ti(se)),
                                  a !== r && (l = fi()) !== r && (c = bi()) !== r ? (o = [o, a, l, c]) : ((Xn = s), r))
                                : ((Xn = s), r));
                        e = i !== r ? (n = oe(n, i)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function mi() {
                      var e, n, i, s, o;
                      return (
                        Qn++,
                        (e = Xn),
                        123 === t.charCodeAt(Xn) ? ((n = ce), Xn++) : ((n = r), 0 === Qn && ti(ue)),
                        (e =
                          n !== r && fi() !== r
                            ? ((i = Xn),
                              (i =
                                (s = (function () {
                                  var e, t, n, i, s, o;
                                  if (((e = Xn), (t = hi()) !== r)) {
                                    for (n = [], i = Xn, i = (s = fi()) !== r && (o = hi()) !== r ? (s = [s, o]) : ((Xn = i), r); i !== r; )
                                      n.push(i), (i = Xn), (i = (s = fi()) !== r && (o = hi()) !== r ? (s = [s, o]) : ((Xn = i), r));
                                    e = n !== r ? (t = _e(t, n)) : ((Xn = e), r);
                                  } else (Xn = e), (e = r);
                                  return e;
                                })()) !== r && (o = fi()) !== r
                                  ? (s = [s, o])
                                  : ((Xn = i), r)) === r && (i = null),
                              i !== r
                                ? (125 === t.charCodeAt(Xn) ? ((s = B), Xn++) : ((s = r), 0 === Qn && ti(L)),
                                  s !== r ? (n = de(i)) : ((Xn = e), r))
                                : ((Xn = e), r))
                            : ((Xn = e), r)),
                        Qn--,
                        e === r && ((n = r), 0 === Qn && ti(le)),
                        e
                      );
                    }
                    function vi() {
                      var e, n, i, s;
                      return (
                        (e = wi()) === r &&
                          (e = bi()) === r &&
                          (e = (function () {
                            var e;
                            return (
                              (e = (function () {
                                var e;
                                return (
                                  (e = (function () {
                                    var e;
                                    return t.substr(Xn, 4) === Mn ? ((e = Mn), (Xn += 4)) : ((e = r), 0 === Qn && ti(Nn)), e;
                                  })()) !== r && (e = At()),
                                  e
                                );
                              })()) === r &&
                                (e = (function () {
                                  var e, n;
                                  return (
                                    (e = Xn),
                                    (n = (function () {
                                      var e;
                                      return t.substr(Xn, 4) === Hn ? ((e = Hn), (Xn += 4)) : ((e = r), 0 === Qn && ti(Un)), e;
                                    })()) !== r && (n = St()),
                                    (e = n) === r &&
                                      ((e = Xn),
                                      (n = (function () {
                                        var e;
                                        return t.substr(Xn, 5) === In ? ((e = In), (Xn += 5)) : ((e = r), 0 === Qn && ti(jn)), e;
                                      })()) !== r && (n = Tt()),
                                      (e = n)),
                                    e
                                  );
                                })()) === r &&
                                (e = (function () {
                                  var e, n, i, s;
                                  return (
                                    Qn++,
                                    (e = Xn),
                                    (n = (function () {
                                      var e, n, i, s, o;
                                      if (((e = Xn), 48 === t.charCodeAt(Xn) ? ((n = Rt), Xn++) : ((n = r), 0 === Qn && ti(Ot)), n !== r))
                                        if ((Xt.test(t.charAt(Xn)) ? ((i = t.charAt(Xn)), Xn++) : ((i = r), 0 === Qn && ti(Gt)), i !== r)) {
                                          if (((s = []), (o = Mi()) !== r)) for (; o !== r; ) s.push(o), (o = Mi());
                                          else s = r;
                                          e = s !== r ? (n = Kt(s)) : ((Xn = e), r);
                                        } else (Xn = e), (e = r);
                                      else (Xn = e), (e = r);
                                      return e;
                                    })()) === r &&
                                      (n = (function () {
                                        var e, n, i, s, o;
                                        return (
                                          (e = Xn),
                                          (e =
                                            (n = Ri()) !== r
                                              ? (46 === t.charCodeAt(Xn) ? ((i = Et), Xn++) : ((i = r), 0 === Qn && ti(It)),
                                                i !== r
                                                  ? ((s = Oi()) === r && (s = null),
                                                    s !== r
                                                      ? ((o = Li()) === r && (o = null), o !== r ? (n = jt(n, s, o)) : ((Xn = e), r))
                                                      : ((Xn = e), r))
                                                  : ((Xn = e), r))
                                              : ((Xn = e), r)) === r &&
                                            ((e = Xn),
                                            46 === t.charCodeAt(Xn) ? ((n = Et), Xn++) : ((n = r), 0 === Qn && ti(It)),
                                            (e =
                                              n !== r && (i = Oi()) !== r
                                                ? ((s = Li()) === r && (s = null), s !== r ? (n = qt(i, s)) : ((Xn = e), r))
                                                : ((Xn = e), r)) === r &&
                                              ((e = Xn),
                                              (e =
                                                (n = Ri()) !== r
                                                  ? ((i = Li()) === r && (i = null), i !== r ? (n = Pt(n, i)) : ((Xn = e), r))
                                                  : ((Xn = e), r)))),
                                          e
                                        );
                                      })()),
                                    (e =
                                      n !== r
                                        ? ((i = Xn),
                                          Qn++,
                                          (s = di()),
                                          Qn--,
                                          (i = s === r ? void 0 : ((Xn = i), r)) !== r ? (n = zt(n)) : ((Xn = e), r))
                                        : ((Xn = e), r)),
                                    Qn--,
                                    e === r && ((n = r), 0 === Qn && ti(Ct)),
                                    e
                                  );
                                })()) === r &&
                                (e = (function () {
                                  var e, n, i, s, o;
                                  return (
                                    Qn++,
                                    (n = e = Xn),
                                    34 === t.charCodeAt(Xn) ? ((i = en), Xn++) : ((i = r), 0 === Qn && ti(tn)),
                                    (n =
                                      i !== r
                                        ? ((s = (function () {
                                            var e, t;
                                            if (((e = []), (t = Ni()) !== r)) for (; t !== r; ) e.push(t), (t = Ni());
                                            else e = r;
                                            return e !== r && (e = on(e)), e;
                                          })()) === r && (s = null),
                                          s !== r
                                            ? (34 === t.charCodeAt(Xn) ? ((o = en), Xn++) : ((o = r), 0 === Qn && ti(tn)),
                                              o !== r ? (i = [i, s, o]) : ((Xn = n), r))
                                            : ((Xn = n), r))
                                        : ((Xn = n), r)),
                                    n === r &&
                                      ((n = Xn),
                                      39 === t.charCodeAt(Xn) ? ((i = nn), Xn++) : ((i = r), 0 === Qn && ti(rn)),
                                      (n =
                                        i !== r
                                          ? ((s = (function () {
                                              var e, t;
                                              if (((e = []), (t = Di()) !== r)) for (; t !== r; ) e.push(t), (t = Di());
                                              else e = r;
                                              return e !== r && (e = on(e)), e;
                                            })()) === r && (s = null),
                                            s !== r
                                              ? (39 === t.charCodeAt(Xn) ? ((o = nn), Xn++) : ((o = r), 0 === Qn && ti(rn)),
                                                o !== r ? (i = [i, s, o]) : ((Xn = n), r))
                                              : ((Xn = n), r))
                                          : ((Xn = n), r))),
                                    n !== r && (n = sn(n)),
                                    Qn--,
                                    (e = n) === r && ((n = r), 0 === Qn && ti(Jt)),
                                    e
                                  );
                                })()) === r &&
                                (e = (function () {
                                  var e, n, i, s;
                                  return (
                                    Qn++,
                                    (e = Xn),
                                    47 === t.charCodeAt(Xn) ? ((n = Je), Xn++) : ((n = r), 0 === Qn && ti(et)),
                                    (e =
                                      n !== r
                                        ? ((i = (function () {
                                            var e, t;
                                            if (((e = []), (t = Wi()) !== r)) for (; t !== r; ) e.push(t), (t = Wi());
                                            else e = r;
                                            return e !== r && (e = on(e)), e;
                                          })()),
                                          i !== r
                                            ? (47 === t.charCodeAt(Xn) ? ((s = Je), Xn++) : ((s = r), 0 === Qn && ti(et)),
                                              s !== r ? (n = xt(i)) : ((Xn = e), r))
                                            : ((Xn = e), r))
                                        : ((Xn = e), r)),
                                    Qn--,
                                    e === r && ((n = r), 0 === Qn && ti(kt)),
                                    e
                                  );
                                })()) === r &&
                                (e = (function () {
                                  var e, n, i, s;
                                  return (
                                    (e = Xn),
                                    91 === t.charCodeAt(Xn) ? ((n = Oe), Xn++) : ((n = r), 0 === Qn && ti(Be)),
                                    (e =
                                      n !== r && fi() !== r
                                        ? ((i = yi()) === r && (i = null),
                                          i !== r && fi() !== r
                                            ? (93 === t.charCodeAt(Xn) ? ((s = Le), Xn++) : ((s = r), 0 === Qn && ti(Me)),
                                              s !== r ? (n = yt(i)) : ((Xn = e), r))
                                            : ((Xn = e), r))
                                        : ((Xn = e), r))
                                  );
                                })()),
                              e
                            );
                          })()) === r &&
                          ((e = Xn),
                          40 === t.charCodeAt(Xn) ? ((n = me), Xn++) : ((n = r), 0 === Qn && ti(ve)),
                          (e =
                            n !== r && fi() !== r && (i = Pi()) !== r && fi() !== r
                              ? (41 === t.charCodeAt(Xn) ? ((s = we), Xn++) : ((s = r), 0 === Qn && ti(ye)),
                                s !== r ? (n = Ee(i)) : ((Xn = e), r))
                              : ((Xn = e), r))),
                        e
                      );
                    }
                    function wi() {
                      var e, n, i, s, o;
                      return (
                        (e = Xn),
                        (n = (function () {
                          var e, n;
                          if (((e = []), Ie.test(t.charAt(Xn)) ? ((n = t.charAt(Xn)), Xn++) : ((n = r), 0 === Qn && ti(je)), n !== r))
                            for (; n !== r; ) e.push(n), Ie.test(t.charAt(Xn)) ? ((n = t.charAt(Xn)), Xn++) : ((n = r), 0 === Qn && ti(je));
                          else e = r;
                          return e !== r && (e = qe(e)), e;
                        })()) !== r && fi() !== r
                          ? (40 === t.charCodeAt(Xn) ? ((i = me), Xn++) : ((i = r), 0 === Qn && ti(ve)),
                            i !== r && fi() !== r
                              ? ((s = yi()) === r && (s = null),
                                s !== r && fi() !== r
                                  ? (41 === t.charCodeAt(Xn) ? ((o = we), Xn++) : ((o = r), 0 === Qn && ti(ye)),
                                    o !== r ? (n = Pe(n, s)) : ((Xn = e), r))
                                  : ((Xn = e), r))
                              : ((Xn = e), r))
                          : ((Xn = e), r)
                      );
                    }
                    function yi() {
                      var e, n, i, s, o, a, l, c;
                      if (((e = Xn), (n = vi()) !== r)) {
                        for (
                          i = [],
                            s = Xn,
                            s =
                              (o = fi()) !== r
                                ? (44 === t.charCodeAt(Xn) ? ((a = re), Xn++) : ((a = r), 0 === Qn && ti(se)),
                                  a !== r && (l = fi()) !== r && (c = vi()) !== r ? (o = [o, a, l, c]) : ((Xn = s), r))
                                : ((Xn = s), r);
                          s !== r;

                        )
                          i.push(s),
                            (s = Xn),
                            (s =
                              (o = fi()) !== r
                                ? (44 === t.charCodeAt(Xn) ? ((a = re), Xn++) : ((a = r), 0 === Qn && ti(se)),
                                  a !== r && (l = fi()) !== r && (c = vi()) !== r ? (o = [o, a, l, c]) : ((Xn = s), r))
                                : ((Xn = s), r));
                        e = i !== r ? (n = Re(n, i)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function ki() {
                      var e, n, i, s;
                      return (
                        (e = Xn),
                        91 === t.charCodeAt(Xn) ? ((n = Oe), Xn++) : ((n = r), 0 === Qn && ti(Be)),
                        n !== r && fi() !== r && (i = Pi()) !== r && fi() !== r
                          ? (93 === t.charCodeAt(Xn) ? ((s = Le), Xn++) : ((s = r), 0 === Qn && ti(Me)),
                            s !== r ? (n = Ne(i)) : ((Xn = e), r))
                          : ((Xn = e), r)
                      );
                    }
                    function xi() {
                      var e, n, i;
                      return (
                        (e = (function () {
                          var e, t, n;
                          return (e = Xn), (t = vi()) !== r && fi() !== r && (n = ki()) !== r ? (t = De(t, n)) : ((Xn = e), r);
                        })()) === r &&
                          (e = vi()) === r &&
                          ((e = Xn),
                          (e =
                            (n = (function () {
                              var e;
                              return (
                                43 === t.charCodeAt(Xn) ? ((e = He), Xn++) : ((e = r), 0 === Qn && ti(Ue)),
                                e === r &&
                                  (45 === t.charCodeAt(Xn) ? ((e = Fe), Xn++) : ((e = r), 0 === Qn && ti(Ve)),
                                  e === r &&
                                    (126 === t.charCodeAt(Xn) ? ((e = Ye), Xn++) : ((e = r), 0 === Qn && ti($e)),
                                    e === r && (t.substr(Xn, 3) === Xe ? ((e = Xe), (Xn += 3)) : ((e = r), 0 === Qn && ti(Ge))))),
                                e
                              );
                            })()) !== r &&
                            fi() !== r &&
                            (i = vi()) !== r
                              ? (n = We(n, i))
                              : ((Xn = e), r))),
                        e
                      );
                    }
                    function Ai() {
                      var e, t, n, i, s, o, a, l;
                      if (((e = Xn), (t = xi()) !== r)) {
                        for (
                          n = [],
                            i = Xn,
                            i =
                              (s = fi()) !== r && (o = Si()) !== r && (a = fi()) !== r && (l = xi()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r);
                          i !== r;

                        )
                          n.push(i),
                            (i = Xn),
                            (i =
                              (s = fi()) !== r && (o = Si()) !== r && (a = fi()) !== r && (l = xi()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r));
                        e = n !== r ? (t = Ke(t, n)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function Si() {
                      var e, n, i, s;
                      return (
                        (e = Xn),
                        42 === t.charCodeAt(Xn) ? ((n = Ze), Xn++) : ((n = r), 0 === Qn && ti(Qe)),
                        n === r &&
                          (47 === t.charCodeAt(Xn) ? ((n = Je), Xn++) : ((n = r), 0 === Qn && ti(et)),
                          n === r && (37 === t.charCodeAt(Xn) ? ((n = tt), Xn++) : ((n = r), 0 === Qn && ti(nt)))),
                        n !== r
                          ? ((i = Xn),
                            Qn++,
                            61 === t.charCodeAt(Xn) ? ((s = H), Xn++) : ((s = r), 0 === Qn && ti(U)),
                            Qn--,
                            (i = s === r ? void 0 : ((Xn = i), r)) !== r ? (n = it(n)) : ((Xn = e), r))
                          : ((Xn = e), r)
                      );
                    }
                    function Ti() {
                      var e, t, n, i, s, o, a, l;
                      if (((e = Xn), (t = Ai()) !== r)) {
                        for (
                          n = [],
                            i = Xn,
                            i =
                              (s = fi()) !== r && (o = Ci()) !== r && (a = fi()) !== r && (l = Ai()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r);
                          i !== r;

                        )
                          n.push(i),
                            (i = Xn),
                            (i =
                              (s = fi()) !== r && (o = Ci()) !== r && (a = fi()) !== r && (l = Ai()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r));
                        e = n !== r ? (t = rt(t, n)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function Ci() {
                      var e, n, i, s;
                      return (
                        (e = Xn),
                        43 === t.charCodeAt(Xn) ? ((n = He), Xn++) : ((n = r), 0 === Qn && ti(Ue)),
                        (e =
                          n !== r
                            ? ((i = Xn),
                              Qn++,
                              43 === t.charCodeAt(Xn) ? ((s = He), Xn++) : ((s = r), 0 === Qn && ti(Ue)),
                              s === r && (61 === t.charCodeAt(Xn) ? ((s = H), Xn++) : ((s = r), 0 === Qn && ti(U))),
                              Qn--,
                              (i = s === r ? void 0 : ((Xn = i), r)) !== r ? (n = st()) : ((Xn = e), r))
                            : ((Xn = e), r)) === r &&
                          ((e = Xn),
                          45 === t.charCodeAt(Xn) ? ((n = Fe), Xn++) : ((n = r), 0 === Qn && ti(Ve)),
                          (e =
                            n !== r
                              ? ((i = Xn),
                                Qn++,
                                45 === t.charCodeAt(Xn) ? ((s = Fe), Xn++) : ((s = r), 0 === Qn && ti(Ve)),
                                s === r && (61 === t.charCodeAt(Xn) ? ((s = H), Xn++) : ((s = r), 0 === Qn && ti(U))),
                                Qn--,
                                (i = s === r ? void 0 : ((Xn = i), r)) !== r ? (n = ot()) : ((Xn = e), r))
                              : ((Xn = e), r))),
                        e
                      );
                    }
                    function zi() {
                      var e, t, n, i, s, o, a, l;
                      if (((e = Xn), (t = Ti()) !== r)) {
                        for (
                          n = [],
                            i = Xn,
                            i =
                              (s = fi()) !== r && (o = Ei()) !== r && (a = fi()) !== r && (l = Ti()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r);
                          i !== r;

                        )
                          n.push(i),
                            (i = Xn),
                            (i =
                              (s = fi()) !== r && (o = Ei()) !== r && (a = fi()) !== r && (l = Ti()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r));
                        e = n !== r ? (t = at(t, n)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function Ei() {
                      var e;
                      return (
                        t.substr(Xn, 2) === lt ? ((e = lt), (Xn += 2)) : ((e = r), 0 === Qn && ti(ct)),
                        e === r &&
                          (t.substr(Xn, 2) === ut ? ((e = ut), (Xn += 2)) : ((e = r), 0 === Qn && ti(dt)),
                          e === r &&
                            (60 === t.charCodeAt(Xn) ? ((e = _t), Xn++) : ((e = r), 0 === Qn && ti(pt)),
                            e === r && (62 === t.charCodeAt(Xn) ? ((e = ft), Xn++) : ((e = r), 0 === Qn && ti(ht))))),
                        e
                      );
                    }
                    function Ii() {
                      var e, t, n, i, s, o, a, l;
                      if (((e = Xn), (t = zi()) !== r)) {
                        for (
                          n = [],
                            i = Xn,
                            i =
                              (s = fi()) !== r && (o = ji()) !== r && (a = fi()) !== r && (l = zi()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r);
                          i !== r;

                        )
                          n.push(i),
                            (i = Xn),
                            (i =
                              (s = fi()) !== r && (o = ji()) !== r && (a = fi()) !== r && (l = zi()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r));
                        e = n !== r ? (t = bt(t, n)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function ji() {
                      var e;
                      return t.substr(Xn, 2) === gt ? ((e = gt), (Xn += 2)) : ((e = r), 0 === Qn && ti(mt)), e !== r && (e = "=="), e;
                    }
                    function qi() {
                      var e, t, n, i, s, o, a, l;
                      if (((e = Xn), (t = Ii()) !== r)) {
                        for (
                          n = [],
                            i = Xn,
                            i =
                              (s = fi()) !== r && (o = Vi()) !== r && (a = fi()) !== r && (l = Ii()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r);
                          i !== r;

                        )
                          n.push(i),
                            (i = Xn),
                            (i =
                              (s = fi()) !== r && (o = Vi()) !== r && (a = fi()) !== r && (l = Ii()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r));
                        e = n !== r ? (t = vt(t, n)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function Pi() {
                      var e, t, n, i, s, o, a, l;
                      if (((e = Xn), (t = qi()) !== r)) {
                        for (
                          n = [],
                            i = Xn,
                            i =
                              (s = fi()) !== r && (o = Yi()) !== r && (a = fi()) !== r && (l = qi()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r);
                          i !== r;

                        )
                          n.push(i),
                            (i = Xn),
                            (i =
                              (s = fi()) !== r && (o = Yi()) !== r && (a = fi()) !== r && (l = qi()) !== r
                                ? (s = [s, o, a, l])
                                : ((Xn = i), r));
                        e = n !== r ? (t = wt(t, n)) : ((Xn = e), r);
                      } else (Xn = e), (e = r);
                      return e;
                    }
                    function Ri() {
                      var e, n, i;
                      return (
                        48 === t.charCodeAt(Xn) ? ((e = Rt), Xn++) : ((e = r), 0 === Qn && ti(Ot)),
                        e === r &&
                          ((e = Xn),
                          (e =
                            (n = (function () {
                              var e;
                              return Dt.test(t.charAt(Xn)) ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(Wt)), e;
                            })()) !== r
                              ? ((i = Oi()) === r && (i = null), i !== r ? (n = Bt(n, i)) : ((Xn = e), r))
                              : ((Xn = e), r))),
                        e
                      );
                    }
                    function Oi() {
                      var e, t;
                      if (((e = []), (t = Bi()) !== r)) for (; t !== r; ) e.push(t), (t = Bi());
                      else e = r;
                      return e !== r && (e = Lt(e)), e;
                    }
                    function Bi() {
                      var e;
                      return Mt.test(t.charAt(Xn)) ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(Nt)), e;
                    }
                    function Li() {
                      var e, n, i;
                      return (
                        (e = Xn),
                        (n = (function () {
                          var e;
                          return Ut.test(t.charAt(Xn)) ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(Ft)), e;
                        })()) !== r &&
                        (i = (function () {
                          var e, n, i;
                          return (
                            (e = Xn),
                            Vt.test(t.charAt(Xn)) ? ((n = t.charAt(Xn)), Xn++) : ((n = r), 0 === Qn && ti(Yt)),
                            n === r && (n = null),
                            (e = n !== r && (i = Oi()) !== r ? (n = $t(n, i)) : ((Xn = e), r))
                          );
                        })()) !== r
                          ? (n = Ht(n, i))
                          : ((Xn = e), r)
                      );
                    }
                    function Mi() {
                      var e;
                      return Zt.test(t.charAt(Xn)) ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(Qt)), e;
                    }
                    function Ni() {
                      var e, n, i;
                      return (
                        (n = e = Xn),
                        Qn++,
                        34 === t.charCodeAt(Xn) ? ((i = en), Xn++) : ((i = r), 0 === Qn && ti(tn)),
                        i === r && (92 === t.charCodeAt(Xn) ? ((i = an), Xn++) : ((i = r), 0 === Qn && ti(ln)), i === r && (i = oi())),
                        Qn--,
                        (e = (n = i === r ? void 0 : ((Xn = n), r)) !== r && (i = ri()) !== r ? (n = cn(i)) : ((Xn = e), r)) === r &&
                          ((e = Xn),
                          92 === t.charCodeAt(Xn) ? ((n = an), Xn++) : ((n = r), 0 === Qn && ti(ln)),
                          (e = n !== r && (i = Ui()) !== r ? (n = un(i)) : ((Xn = e), r)) === r && (e = Hi())),
                        e
                      );
                    }
                    function Di() {
                      var e, n, i;
                      return (
                        (n = e = Xn),
                        Qn++,
                        39 === t.charCodeAt(Xn) ? ((i = nn), Xn++) : ((i = r), 0 === Qn && ti(rn)),
                        i === r && (92 === t.charCodeAt(Xn) ? ((i = an), Xn++) : ((i = r), 0 === Qn && ti(ln)), i === r && (i = oi())),
                        Qn--,
                        (e = (n = i === r ? void 0 : ((Xn = n), r)) !== r && (i = ri()) !== r ? (n = cn(i)) : ((Xn = e), r)) === r &&
                          ((e = Xn),
                          92 === t.charCodeAt(Xn) ? ((n = an), Xn++) : ((n = r), 0 === Qn && ti(ln)),
                          (e = n !== r && (i = Ui()) !== r ? (n = un(i)) : ((Xn = e), r)) === r && (e = Hi())),
                        e
                      );
                    }
                    function Wi() {
                      var e, n, i;
                      return (
                        (e = Xn),
                        92 === t.charCodeAt(Xn) ? ((n = an), Xn++) : ((n = r), 0 === Qn && ti(ln)),
                        (e =
                          n !== r
                            ? (47 === t.charCodeAt(Xn) ? ((i = Je), Xn++) : ((i = r), 0 === Qn && ti(et)),
                              i !== r ? (n = dn(i)) : ((Xn = e), r))
                            : ((Xn = e), r)) === r &&
                          ((n = e = Xn),
                          Qn++,
                          47 === t.charCodeAt(Xn) ? ((i = Je), Xn++) : ((i = r), 0 === Qn && ti(et)),
                          i === r && (i = oi()),
                          Qn--,
                          (e = (n = i === r ? void 0 : ((Xn = n), r)) !== r && (i = ri()) !== r ? (n = cn(i)) : ((Xn = e), r)) === r &&
                            (e = Hi())),
                        e
                      );
                    }
                    function Hi() {
                      var e, n, i;
                      return (
                        (e = Xn),
                        92 === t.charCodeAt(Xn) ? ((n = an), Xn++) : ((n = r), 0 === Qn && ti(ln)),
                        n !== r && (i = ai()) !== r ? (n = _n(i)) : ((Xn = e), r)
                      );
                    }
                    function Ui() {
                      var e, n, i, s;
                      return (
                        (e = (function () {
                          var e;
                          return (
                            (e = Fi()) === r &&
                              (e = (function () {
                                var e, n, i;
                                return (
                                  (n = e = Xn),
                                  Qn++,
                                  (i = (function () {
                                    var e;
                                    return (
                                      (e = Fi()) === r &&
                                        (e = Bi()) === r &&
                                        (120 === t.charCodeAt(Xn) ? ((e = mn), Xn++) : ((e = r), 0 === Qn && ti(vn)),
                                        e === r && (117 === t.charCodeAt(Xn) ? ((e = wn), Xn++) : ((e = r), 0 === Qn && ti(yn)))),
                                      e
                                    );
                                  })()),
                                  Qn--,
                                  (n = i === r ? void 0 : ((Xn = n), r)) === r && (n = oi()),
                                  (e = n !== r && (i = ri()) !== r ? (n = gn(i)) : ((Xn = e), r))
                                );
                              })()),
                            e
                          );
                        })()) === r &&
                          ((e = Xn),
                          48 === t.charCodeAt(Xn) ? ((n = Rt), Xn++) : ((n = r), 0 === Qn && ti(Ot)),
                          (e =
                            n !== r
                              ? ((i = Xn),
                                Qn++,
                                (s = Bi()),
                                Qn--,
                                (i = s === r ? void 0 : ((Xn = i), r)) !== r ? (n = pn()) : ((Xn = e), r))
                              : ((Xn = e), r)) === r &&
                            (e = (function () {
                              var e, n, i, s;
                              return (
                                (e = Xn),
                                120 === t.charCodeAt(Xn) ? ((n = mn), Xn++) : ((n = r), 0 === Qn && ti(vn)),
                                (e = n !== r && (i = Mi()) !== r && (s = Mi()) !== r ? (n = kn(i, s)) : ((Xn = e), r))
                              );
                            })()) === r &&
                            (e = (function () {
                              var e, n, i, s, o, a;
                              return (
                                (e = Xn),
                                117 === t.charCodeAt(Xn) ? ((n = wn), Xn++) : ((n = r), 0 === Qn && ti(yn)),
                                (e =
                                  n !== r && (i = Mi()) !== r && (s = Mi()) !== r && (o = Mi()) !== r && (a = Mi()) !== r
                                    ? (n = xn(i, s, o, a))
                                    : ((Xn = e), r))
                              );
                            })())),
                        e
                      );
                    }
                    function Fi() {
                      var e;
                      return fn.test(t.charAt(Xn)) ? ((e = t.charAt(Xn)), Xn++) : ((e = r), 0 === Qn && ti(hn)), e !== r && (e = bn(e)), e;
                    }
                    function Vi() {
                      var e;
                      return t.substr(Xn, 3) === An ? ((e = An), (Xn += 3)) : ((e = r), 0 === Qn && ti(Sn)), e;
                    }
                    function Yi() {
                      var e;
                      return t.substr(Xn, 2) === Tn ? ((e = Tn), (Xn += 2)) : ((e = r), 0 === Qn && ti(Cn)), e;
                    }
                    function ji() {
                      var e;
                      return t.substr(Xn, 2) === gt ? ((e = gt), (Xn += 2)) : ((e = r), 0 === Qn && ti(mt)), e;
                    }
                    function $i(e, t, n) {
                      switch (t) {
                        case "+":
                          return e + n;
                        case "-":
                          return e - n;
                        case "*":
                          return e * n;
                        case "/":
                          return e / n;
                        case "%":
                          return e % n;
                        case "<":
                          return e < n;
                        case ">":
                          return n < e;
                        case "<=":
                          return e <= n;
                        case ">=":
                          return n <= e;
                        case "==":
                          return e == n;
                        case "!=":
                          return e != n;
                        default:
                          return;
                      }
                    }
                    function Xi(e, t) {
                      if (e instanceof Array && t instanceof Array) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
                        return !0;
                      }
                      return e == t;
                    }
                    function Gi(e, t) {
                      if (void 0 !== t && void 0 !== e)
                        return (
                          (e = parseInt(e)),
                          isNaN(e) ? void 0 : (e < 0 && t.hasOwnProperty("length") && (e = t.length + e) < 0 && (e = 0), e)
                        );
                    }
                    if (((this.VERSION = "0.2.2"), (n = o()) !== r && Xn === t.length)) return n;
                    throw (
                      (n !== r && Xn < t.length && ti({ type: "end", description: "end of input" }),
                      ni(null, Zn, Kn < t.length ? t.charAt(Kn) : null, Kn < t.length ? ei(Kn, Kn + 1) : ei(Kn, Kn)))
                    );
                  }
                }
              );
            }),
            i("request", [], function () {
              function e(e, n, i) {
                if (
                  ((this.method = e),
                  (this.url = n),
                  (this.requestTimer = void 0),
                  (this.type = "XHR"),
                  (this.rq = new window.XMLHttpRequest()),
                  "withCredentials" in this.rq ||
                    (void 0 !== window.XDomainRequest &&
                      ((this.type = t), (this.rq = new window.XDomainRequest()), (this.rq.readyState = 1))),
                  "object" == typeof i)
                ) {
                  var r = -1 === this.url.indexOf("?") ? "?" : "&";
                  for (var s in i) void 0 !== i[s] && ((this.url += r + s + "=" + encodeURIComponent(i[s])), (r = "&"));
                }
                this.rq.open(e, this.url, !0),
                  this.type === t &&
                    ((this.rq.onprogress = function () {}),
                    (this.rq.ontimeout = function () {}),
                    (this.rq.onerror = function () {}),
                    (this.rq.onload = function () {}),
                    (this.rq.timeout = 0));
              }
              var t = "XDR";
              return (
                (e.prototype = {
                  wrapCallback: function (e) {
                    var t = this;
                    return function (n) {
                      t.clearTimeout(), e(t.rq, n);
                    };
                  },
                  onReadyStateChange: function (e) {
                    this.type === t
                      ? ((this.rq.readyState = 3), (this.rq.status = 200), (this.rq.onload = this.wrapCallback(e)))
                      : (this.rq.onreadystatechange = this.wrapCallback(e));
                  },
                  onLoad: function (e) {
                    this.type === t && ((this.rq.readyState = 3), (this.rq.status = 200)), (this.rq.onload = this.wrapCallback(e));
                  },
                  onError: function (e) {
                    this.type === t && ((this.rq.readyState = 3), (this.rq.status = 500)), (this.rq.onerror = this.wrapCallback(e));
                  },
                  setHeader: function (e, t) {
                    "setRequestHeader" in this.rq && this.rq.setRequestHeader(e, t);
                  },
                  setTimeout: function (e, t) {
                    (this.timeout = e), (this.timeoutCallback = t);
                  },
                  abort: function () {
                    this.rq && this.rq.abort();
                  },
                  setupTimeoutTimer: function (e) {
                    if ("number" == typeof e) {
                      var t = this;
                      window.setTimeout(function () {
                        t.rq.abort(), "function" == typeof t.timeoutCallback && t.timeoutCallback();
                      }, e);
                    }
                  },
                  clearTimeout: function () {
                    window.clearTimeout(this.requestTimer), (this.requestTimer = void 0);
                  },
                  send: function (e) {
                    var n = this;
                    this.setupTimeoutTimer(this.timeout),
                      this.type === t
                        ? window.setTimeout(function () {
                            n.rq.send(e);
                          }, 200)
                        : this.rq.send(e);
                  }
                }),
                { AjaxRequest: e }
              );
            }),
            (function (e) {
              function n(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n
                  ? t
                  : i < 0
                  ? String.fromCharCode(65536 + i)
                  : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
              }
              function r() {
                b();
              }
              var s,
                o,
                a,
                l,
                c,
                u,
                d,
                _,
                p,
                f,
                h,
                b,
                g,
                m,
                v,
                w,
                y,
                k,
                x,
                A = "sizzle" + 1 * new Date(),
                S = e.document,
                T = 0,
                C = 0,
                z = ue(),
                E = ue(),
                I = ue(),
                j = ue(),
                q = function (e, t) {
                  return e === t && (h = !0), 0;
                },
                P = {}.hasOwnProperty,
                R = [],
                O = R.pop,
                B = R.push,
                L = R.push,
                M = R.slice,
                N = function (e, t) {
                  for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                  return -1;
                },
                D =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                W = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                U =
                  "\\[" +
                  W +
                  "*(" +
                  H +
                  ")(?:" +
                  W +
                  "*([*^$|!~]?=)" +
                  W +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  H +
                  "))|)" +
                  W +
                  "*\\]",
                F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)",
                V = new RegExp(W + "+", "g"),
                Y = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
                $ = new RegExp("^" + W + "*," + W + "*"),
                X = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
                G = new RegExp(W + "|>"),
                K = new RegExp(F),
                Z = new RegExp("^" + H + "$"),
                Q = {
                  ID: new RegExp("^#(" + H + ")"),
                  CLASS: new RegExp("^\\.(" + H + ")"),
                  TAG: new RegExp("^(" + H + "|[*])"),
                  ATTR: new RegExp("^" + U),
                  PSEUDO: new RegExp("^" + F),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      W +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      W +
                      "*(?:([+-]|)" +
                      W +
                      "*(\\d+)|))" +
                      W +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + D + ")$", "i"),
                  needsContext: new RegExp(
                    "^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)",
                    "i"
                  )
                },
                J = /HTML$/i,
                ee = /^(?:input|select|textarea|button)$/i,
                te = /^h\d$/i,
                ne = /^[^{]+\{\s*\[native \w/,
                ie = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                re = /[+~]/,
                se = new RegExp("\\\\([\\da-f]{1,6}" + W + "?|(" + W + ")|.)", "ig"),
                oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ae = function (e, t) {
                  return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                },
                le = we(
                  function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                L.apply((R = M.call(S.childNodes)), S.childNodes), R[S.childNodes.length].nodeType;
              } catch (e) {
                L = {
                  apply: R.length
                    ? function (e, t) {
                        B.apply(e, M.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                        e.length = n - 1;
                      }
                };
              }
              function ce(e, t, n, i) {
                var r,
                  s,
                  a,
                  l,
                  c,
                  d,
                  p,
                  f = t && t.ownerDocument,
                  h = t ? t.nodeType : 9;
                if (((n = n || []), "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))) return n;
                if (!i && ((t ? t.ownerDocument || t : S) !== g && b(t), (t = t || g), v)) {
                  if (11 !== h && (c = ie.exec(e)))
                    if ((r = c[1])) {
                      if (9 === h) {
                        if (!(a = t.getElementById(r))) return n;
                        if (a.id === r) return n.push(a), n;
                      } else if (f && (a = f.getElementById(r)) && x(t, a) && a.id === r) return n.push(a), n;
                    } else {
                      if (c[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                      if ((r = c[3]) && o.getElementsByClassName && t.getElementsByClassName)
                        return L.apply(n, t.getElementsByClassName(r)), n;
                    }
                  if (o.qsa && !j[e + " "] && (!w || !w.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (((p = e), (f = t), 1 === h && G.test(e))) {
                      for (
                        (l = t.getAttribute("id")) ? (l = l.replace(oe, ae)) : t.setAttribute("id", (l = A)), s = (d = u(e)).length;
                        s--;

                      )
                        d[s] = "#" + l + " " + ve(d[s]);
                      (p = d.join(",")), (f = (re.test(e) && ge(t.parentNode)) || t);
                    }
                    try {
                      return L.apply(n, f.querySelectorAll(p)), n;
                    } catch (t) {
                      j(e, !0);
                    } finally {
                      l === A && t.removeAttribute("id");
                    }
                  }
                }
                return _(e.replace(Y, "$1"), t, n, i);
              }
              function ue() {
                var e = [];
                return function t(n, i) {
                  return e.push(n + " ") > a.cacheLength && delete t[e.shift()], (t[n + " "] = i);
                };
              }
              function de(e) {
                return (e[A] = !0), e;
              }
              function _e(e) {
                var t = g.createElement("fieldset");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function pe(e, t) {
                for (var n = e.split("|"), i = n.length; i--; ) a.attrHandle[n[i]] = t;
              }
              function fe(e, t) {
                var n = t && e,
                  i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function he(e) {
                return function (t) {
                  return "form" in t
                    ? t.parentNode && !1 === t.disabled
                      ? "label" in t
                        ? "label" in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e || (t.isDisabled !== !e && le(t) === e)
                      : t.disabled === e
                    : "label" in t && t.disabled === e;
                };
              }
              function be(e) {
                return de(function (t) {
                  return (
                    (t = +t),
                    de(function (n, i) {
                      for (var r, s = e([], n.length, t), o = s.length; o--; ) n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                    })
                  );
                });
              }
              function ge(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (s in ((o = ce.support = {}),
              (c = ce.isXML =
                function (e) {
                  var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                  return !J.test(t || (n && n.nodeName) || "HTML");
                }),
              (b = ce.setDocument =
                function (e) {
                  var t,
                    i,
                    s = e ? e.ownerDocument || e : S;
                  return (
                    s !== g &&
                      9 === s.nodeType &&
                      s.documentElement &&
                      ((m = (g = s).documentElement),
                      (v = !c(g)),
                      S !== g &&
                        (i = g.defaultView) &&
                        i.top !== i &&
                        (i.addEventListener ? i.addEventListener("unload", r, !1) : i.attachEvent && i.attachEvent("onunload", r)),
                      (o.attributes = _e(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (o.getElementsByTagName = _e(function (e) {
                        return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (o.getElementsByClassName = ne.test(g.getElementsByClassName)),
                      (o.getById = _e(function (e) {
                        return (m.appendChild(e).id = A), !g.getElementsByName || !g.getElementsByName(A).length;
                      })),
                      o.getById
                        ? ((a.filter.ID = function (e) {
                            var t = e.replace(se, n);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }),
                          (a.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && v) {
                              var n = t.getElementById(e);
                              return n ? [n] : [];
                            }
                          }))
                        : ((a.filter.ID = function (e) {
                            var t = e.replace(se, n);
                            return function (e) {
                              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                              return n && n.value === t;
                            };
                          }),
                          (a.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && v) {
                              var n,
                                i,
                                r,
                                s = t.getElementById(e);
                              if (s) {
                                if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                                for (r = t.getElementsByName(e), i = 0; (s = r[i++]); )
                                  if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                              }
                              return [];
                            }
                          })),
                      (a.find.TAG = o.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : o.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                            var n,
                              i = [],
                              r = 0,
                              s = t.getElementsByTagName(e);
                            if ("*" !== e) return s;
                            for (; (n = s[r++]); ) 1 === n.nodeType && i.push(n);
                            return i;
                          }),
                      (a.find.CLASS =
                        o.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e);
                        }),
                      (y = []),
                      (w = []),
                      (o.qsa = ne.test(g.querySelectorAll)) &&
                        (_e(function (e) {
                          (m.appendChild(e).innerHTML =
                            "<a id='" + A + "'></a><select id='" + A + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length && w.push("[*^$]=" + W + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || w.push("\\[" + W + "*(?:value|" + D + ")"),
                            e.querySelectorAll("[id~=" + A + "-]").length || w.push("~="),
                            e.querySelectorAll(":checked").length || w.push(":checked"),
                            e.querySelectorAll("a#" + A + "+*").length || w.push(".#.+[+~]");
                        }),
                        _e(function (e) {
                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = g.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && w.push("name" + W + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && w.push(":enabled", ":disabled"),
                            (m.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length && w.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            w.push(",.*:");
                        })),
                      (o.matchesSelector = ne.test(
                        (k = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)
                      )) &&
                        _e(function (e) {
                          (o.disconnectedMatch = k.call(e, "*")), k.call(e, "[s!='']:x"), y.push("!=", F);
                        }),
                      (w = w.length && new RegExp(w.join("|"))),
                      (y = y.length && new RegExp(y.join("|"))),
                      (t = ne.test(m.compareDocumentPosition)),
                      (x =
                        t || ne.test(m.contains)
                          ? function (e, t) {
                              var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                              return (
                                e === i ||
                                !(
                                  !i ||
                                  1 !== i.nodeType ||
                                  !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                              return !1;
                            }),
                      (q = t
                        ? function (e, t) {
                            if (e === t) return (h = !0), 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return (
                              n ||
                              (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                              (!o.sortDetached && t.compareDocumentPosition(e) === n)
                                ? e === g || (e.ownerDocument === S && x(S, e))
                                  ? -1
                                  : t === g || (t.ownerDocument === S && x(S, t))
                                  ? 1
                                  : f
                                  ? N(f, e) - N(f, t)
                                  : 0
                                : 4 & n
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (h = !0), 0;
                            var n,
                              i = 0,
                              r = e.parentNode,
                              s = t.parentNode,
                              o = [e],
                              a = [t];
                            if (!r || !s) return e === g ? -1 : t === g ? 1 : r ? -1 : s ? 1 : f ? N(f, e) - N(f, t) : 0;
                            if (r === s) return fe(e, t);
                            for (n = e; (n = n.parentNode); ) o.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; o[i] === a[i]; ) i++;
                            return i ? fe(o[i], a[i]) : o[i] === S ? -1 : a[i] === S ? 1 : 0;
                          })),
                    g
                  );
                }),
              (ce.matches = function (e, t) {
                return ce(e, null, null, t);
              }),
              (ce.matchesSelector = function (e, t) {
                if (
                  ((e.ownerDocument || e) !== g && b(e), o.matchesSelector && v && !j[t + " "] && (!y || !y.test(t)) && (!w || !w.test(t)))
                )
                  try {
                    var n = k.call(e, t);
                    if (n || o.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                  } catch (e) {
                    j(t, !0);
                  }
                return 0 < ce(t, g, null, [e]).length;
              }),
              (ce.contains = function (e, t) {
                return (e.ownerDocument || e) !== g && b(e), x(e, t);
              }),
              (ce.attr = function (e, t) {
                (e.ownerDocument || e) !== g && b(e);
                var n = a.attrHandle[t.toLowerCase()],
                  i = n && P.call(a.attrHandle, t.toLowerCase()) ? n(e, t, !v) : void 0;
                return void 0 !== i
                  ? i
                  : o.attributes || !v
                  ? e.getAttribute(t)
                  : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null;
              }),
              (ce.escape = function (e) {
                return (e + "").replace(oe, ae);
              }),
              (ce.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (ce.uniqueSort = function (e) {
                var t,
                  n = [],
                  i = 0,
                  r = 0;
                if (((h = !o.detectDuplicates), (f = !o.sortStable && e.slice(0)), e.sort(q), h)) {
                  for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                  for (; i--; ) e.splice(n[i], 1);
                }
                return (f = null), e;
              }),
              (l = ce.getText =
                function (e) {
                  var t,
                    n = "",
                    i = 0,
                    r = e.nodeType;
                  if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                      if ("string" == typeof e.textContent) return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += l(e);
                    } else if (3 === r || 4 === r) return e.nodeValue;
                  } else for (; (t = e[i++]); ) n += l(t);
                  return n;
                }),
              ((a = ce.selectors =
                {
                  cacheLength: 50,
                  createPseudo: de,
                  match: Q,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" }
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(se, n)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(se, n)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || ce.error(e[0]),
                            (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && ce.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return Q.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || "")
                            : n &&
                              K.test(n) &&
                              (t = u(n, !0)) &&
                              (t = n.indexOf(")", n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    }
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(se, n).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = z[e + " "];
                      return (
                        t ||
                        ((t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) &&
                          z(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (i) {
                        var r = ce.attr(i, e);
                        return null == r
                          ? "!=" === t
                          : !t ||
                              ((r += ""),
                              "=" === t
                                ? r === n
                                : "!=" === t
                                ? r !== n
                                : "^=" === t
                                ? n && 0 === r.indexOf(n)
                                : "*=" === t
                                ? n && -1 < r.indexOf(n)
                                : "$=" === t
                                ? n && r.slice(-n.length) === n
                                : "~=" === t
                                ? -1 < (" " + r.replace(V, " ") + " ").indexOf(n)
                                : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                      };
                    },
                    CHILD: function (e, t, n, i, r) {
                      var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        a = "of-type" === t;
                      return 1 === i && 0 === r
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, l) {
                            var c,
                              u,
                              d,
                              _,
                              p,
                              f,
                              h = s != o ? "nextSibling" : "previousSibling",
                              b = t.parentNode,
                              g = a && t.nodeName.toLowerCase(),
                              m = !l && !a,
                              v = !1;
                            if (b) {
                              if (s) {
                                for (; h; ) {
                                  for (_ = t; (_ = _[h]); ) if (a ? _.nodeName.toLowerCase() === g : 1 === _.nodeType) return !1;
                                  f = h = "only" === e && !f && "nextSibling";
                                }
                                return !0;
                              }
                              if (((f = [o ? b.firstChild : b.lastChild]), o && m)) {
                                for (
                                  v =
                                    (p =
                                      (c = (u = (d = (_ = b)[A] || (_[A] = {}))[_.uniqueID] || (d[_.uniqueID] = {}))[e] || [])[0] === T &&
                                      c[1]) && c[2],
                                    _ = p && b.childNodes[p];
                                  (_ = (++p && _ && _[h]) || (v = p = 0) || f.pop());

                                )
                                  if (1 === _.nodeType && ++v && _ === t) {
                                    u[e] = [T, p, v];
                                    break;
                                  }
                              } else if (
                                (m &&
                                  (v = p =
                                    (c = (u = (d = (_ = t)[A] || (_[A] = {}))[_.uniqueID] || (d[_.uniqueID] = {}))[e] || [])[0] === T &&
                                    c[1]),
                                !1 === v)
                              )
                                for (
                                  ;
                                  (_ = (++p && _ && _[h]) || (v = p = 0) || f.pop()) &&
                                  ((a ? _.nodeName.toLowerCase() !== g : 1 !== _.nodeType) ||
                                    !++v ||
                                    (m && ((u = (d = _[A] || (_[A] = {}))[_.uniqueID] || (d[_.uniqueID] = {}))[e] = [T, v]), _ !== t));

                                );
                              return (v -= r) === i || (v % i == 0 && 0 <= v / i);
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        i = a.pseudos[e] || a.setFilters[e.toLowerCase()] || ce.error("unsupported pseudo: " + e);
                      return i[A]
                        ? i(t)
                        : 1 < i.length
                        ? ((n = [e, e, "", t]),
                          a.setFilters.hasOwnProperty(e.toLowerCase())
                            ? de(function (e, n) {
                                for (var r, s = i(e, t), o = s.length; o--; ) e[(r = N(e, s[o]))] = !(n[r] = s[o]);
                              })
                            : function (e) {
                                return i(e, 0, n);
                              })
                        : i;
                    }
                  },
                  pseudos: {
                    not: de(function (e) {
                      var t = [],
                        n = [],
                        i = d(e.replace(Y, "$1"));
                      return i[A]
                        ? de(function (e, t, n, r) {
                            for (var s, o = i(e, null, r, []), a = e.length; a--; ) (s = o[a]) && (e[a] = !(t[a] = s));
                          })
                        : function (e, r, s) {
                            return (t[0] = e), i(t, null, s, n), (t[0] = null), !n.pop();
                          };
                    }),
                    has: de(function (e) {
                      return function (t) {
                        return 0 < ce(e, t).length;
                      };
                    }),
                    contains: de(function (e) {
                      return (
                        (e = e.replace(se, n)),
                        function (t) {
                          return -1 < (t.textContent || l(t)).indexOf(e);
                        }
                      );
                    }),
                    lang: de(function (e) {
                      return (
                        Z.test(e || "") || ce.error("unsupported lang: " + e),
                        (e = e.replace(se, n).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if ((n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                              return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === m;
                    },
                    focus: function (e) {
                      return e === g.activeElement && (!g.hasFocus || g.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                      return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !a.pseudos.empty(e);
                    },
                    header: function (e) {
                      return te.test(e.nodeName);
                    },
                    input: function (e) {
                      return ee.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                      var t;
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                      );
                    },
                    first: be(function () {
                      return [0];
                    }),
                    last: be(function (e, t) {
                      return [t - 1];
                    }),
                    eq: be(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: be(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: be(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: be(function (e, t, n) {
                      for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                      return e;
                    }),
                    gt: be(function (e, t, n) {
                      for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                      return e;
                    })
                  }
                }).pseudos.nth = a.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                a.pseudos[s] = (function (e) {
                  return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                  };
                })(s);
              for (s in { submit: !0, reset: !0 })
                a.pseudos[s] = (function (e) {
                  return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                  };
                })(s);
              function me() {}
              function ve(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i;
              }
              function we(e, t, n) {
                var i = t.dir,
                  r = t.next,
                  s = r || i,
                  o = n && "parentNode" === s,
                  a = C++;
                return t.first
                  ? function (t, n, r) {
                      for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
                      return !1;
                    }
                  : function (t, n, l) {
                      var c,
                        u,
                        d,
                        _ = [T, a];
                      if (l) {
                        for (; (t = t[i]); ) if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                      } else
                        for (; (t = t[i]); )
                          if (1 === t.nodeType || o)
                            if (((u = (d = t[A] || (t[A] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase()))
                              t = t[i] || t;
                            else {
                              if ((c = u[s]) && c[0] === T && c[1] === a) return (_[2] = c[2]);
                              if (((u[s] = _)[2] = e(t, n, l))) return !0;
                            }
                      return !1;
                    };
              }
              function ye(e) {
                return 1 < e.length
                  ? function (t, n, i) {
                      for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function ke(e, t, n, i, r) {
                for (var s, o = [], a = 0, l = e.length, c = null != t; a < l; a++)
                  (s = e[a]) && ((n && !n(s, i, r)) || (o.push(s), c && t.push(a)));
                return o;
              }
              function xe(e, t, n, i, r, s) {
                return (
                  i && !i[A] && (i = xe(i)),
                  r && !r[A] && (r = xe(r, s)),
                  de(function (s, o, a, l) {
                    var c,
                      u,
                      d,
                      _ = [],
                      p = [],
                      f = o.length,
                      h =
                        s ||
                        (function (e, t, n) {
                          for (var i = 0, r = t.length; i < r; i++) ce(e, t[i], n);
                          return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                      b = !e || (!s && t) ? h : ke(h, _, e, a, l),
                      g = n ? (r || (s ? e : f || i) ? [] : o) : b;
                    if ((n && n(b, g, a, l), i))
                      for (c = ke(g, p), i(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (g[p[u]] = !(b[p[u]] = d));
                    if (s) {
                      if (r || e) {
                        if (r) {
                          for (c = [], u = g.length; u--; ) (d = g[u]) && c.push((b[u] = d));
                          r(null, (g = []), c, l);
                        }
                        for (u = g.length; u--; ) (d = g[u]) && -1 < (c = r ? N(s, d) : _[u]) && (s[c] = !(o[c] = d));
                      }
                    } else (g = ke(g === o ? g.splice(f, g.length) : g)), r ? r(null, o, g, l) : L.apply(o, g);
                  })
                );
              }
              function Ae(e) {
                for (
                  var t,
                    n,
                    i,
                    r = e.length,
                    s = a.relative[e[0].type],
                    o = s || a.relative[" "],
                    l = s ? 1 : 0,
                    c = we(
                      function (e) {
                        return e === t;
                      },
                      o,
                      !0
                    ),
                    u = we(
                      function (e) {
                        return -1 < N(t, e);
                      },
                      o,
                      !0
                    ),
                    d = [
                      function (e, n, i) {
                        var r = (!s && (i || n !== p)) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                        return (t = null), r;
                      }
                    ];
                  l < r;
                  l++
                )
                  if ((n = a.relative[e[l].type])) d = [we(ye(d), n)];
                  else {
                    if ((n = a.filter[e[l].type].apply(null, e[l].matches))[A]) {
                      for (i = ++l; i < r && !a.relative[e[i].type]; i++);
                      return xe(
                        1 < l && ye(d),
                        1 < l && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(Y, "$1"),
                        n,
                        l < i && Ae(e.slice(l, i)),
                        i < r && Ae((e = e.slice(i))),
                        i < r && ve(e)
                      );
                    }
                    d.push(n);
                  }
                return ye(d);
              }
              (me.prototype = a.filters = a.pseudos),
                (a.setFilters = new me()),
                (u = ce.tokenize =
                  function (e, t) {
                    var n,
                      i,
                      r,
                      s,
                      o,
                      l,
                      c,
                      u = E[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (o = e, l = [], c = a.preFilter; o; ) {
                      for (s in ((n && !(i = $.exec(o))) || (i && (o = o.slice(i[0].length) || o), l.push((r = []))),
                      (n = !1),
                      (i = X.exec(o)) && ((n = i.shift()), r.push({ value: n, type: i[0].replace(Y, " ") }), (o = o.slice(n.length))),
                      a.filter))
                        !(i = Q[s].exec(o)) ||
                          (c[s] && !(i = c[s](i))) ||
                          ((n = i.shift()), r.push({ value: n, type: s, matches: i }), (o = o.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? o.length : o ? ce.error(e) : E(e, l).slice(0);
                  }),
                (d = ce.compile =
                  function (e, t) {
                    var n,
                      i = [],
                      r = [],
                      s = I[e + " "];
                    if (!s) {
                      for (t || (t = u(e)), n = t.length; n--; ) (s = Ae(t[n]))[A] ? i.push(s) : r.push(s);
                      (s = I(
                        e,
                        (function (e, t) {
                          function n(n, s, o, l, c) {
                            var u,
                              d,
                              _,
                              f = 0,
                              h = "0",
                              m = n && [],
                              w = [],
                              y = p,
                              k = n || (r && a.find.TAG("*", c)),
                              x = (T += null == y ? 1 : Math.random() || 0.1),
                              A = k.length;
                            for (c && (p = s === g || s || c); h !== A && null != (u = k[h]); h++) {
                              if (r && u) {
                                for (d = 0, s || u.ownerDocument === g || (b(u), (o = !v)); (_ = e[d++]); )
                                  if (_(u, s || g, o)) {
                                    l.push(u);
                                    break;
                                  }
                                c && (T = x);
                              }
                              i && ((u = !_ && u) && f--, n && m.push(u));
                            }
                            if (((f += h), i && h !== f)) {
                              for (d = 0; (_ = t[d++]); ) _(m, w, s, o);
                              if (n) {
                                if (0 < f) for (; h--; ) m[h] || w[h] || (w[h] = O.call(l));
                                w = ke(w);
                              }
                              L.apply(l, w), c && !n && 0 < w.length && 1 < f + t.length && ce.uniqueSort(l);
                            }
                            return c && ((T = x), (p = y)), m;
                          }
                          var i = 0 < t.length,
                            r = 0 < e.length;
                          return i ? de(n) : n;
                        })(r, i)
                      )).selector = e;
                    }
                    return s;
                  }),
                (_ = ce.select =
                  function (e, t, i, r) {
                    var s,
                      o,
                      l,
                      c,
                      _,
                      p = "function" == typeof e && e,
                      f = !r && u((e = p.selector || e));
                    if (((i = i || []), 1 === f.length)) {
                      if (
                        2 < (o = f[0] = f[0].slice(0)).length &&
                        "ID" === (l = o[0]).type &&
                        9 === t.nodeType &&
                        v &&
                        a.relative[o[1].type]
                      ) {
                        if (!(t = (a.find.ID(l.matches[0].replace(se, n), t) || [])[0])) return i;
                        p && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                      }
                      for (s = Q.needsContext.test(e) ? 0 : o.length; s-- && ((l = o[s]), !a.relative[(c = l.type)]); )
                        if ((_ = a.find[c]) && (r = _(l.matches[0].replace(se, n), (re.test(o[0].type) && ge(t.parentNode)) || t))) {
                          if ((o.splice(s, 1), !(e = r.length && ve(o)))) return L.apply(i, r), i;
                          break;
                        }
                    }
                    return (p || d(e, f))(r, t, !v, i, !t || (re.test(e) && ge(t.parentNode)) || t), i;
                  }),
                (o.sortStable = A.split("").sort(q).join("") === A),
                (o.detectDuplicates = !!h),
                b(),
                (o.sortDetached = _e(function (e) {
                  return 1 & e.compareDocumentPosition(g.createElement("fieldset"));
                })),
                _e(function (e) {
                  return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                }) ||
                  pe("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                  }),
                (o.attributes &&
                  _e(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                  })) ||
                  pe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                  }),
                _e(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  pe(D, function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                  });
              var Se = e.Sizzle;
              (ce.noConflict = function () {
                return e.Sizzle === ce && (e.Sizzle = Se), ce;
              }),
                "function" == typeof i && i.amd
                  ? i("jquery", [], function () {
                      return ce;
                    })
                  : void 0 !== t && t.exports
                  ? (t.exports = ce)
                  : (e.Sizzle = ce);
            })(window),
            i("interpreter", ["cslparser", "request", "jquery"], function (e, t, n) {
              function i(e, t) {
                var n,
                  i,
                  r = t;
                (this.pause = function () {
                  window.clearTimeout(n), (r -= new Date() - i);
                }),
                  (this.resume = function () {
                    (i = new Date()),
                      (n = window.setTimeout(function () {
                        e();
                      }, r));
                  }),
                  (this.cancel = function () {
                    window.clearTimeout(n);
                  }),
                  this.resume();
              }
              function r(e) {
                (this.message = e), (this.name = "TypeError");
              }
              function s(e) {
                (this.message = e), (this.name = "ValueError");
              }
              function o(e) {
                (this.message = e), (this.name = "RequireError");
              }
              function a(e) {
                (this.message = e), (this.name = "InterpreterError");
              }
              function l() {
                this.name = "InterruptException";
              }
              o.prototype.getMessage = function () {
                return this.name + ": " + this.message;
              };
              var c = function (e, t, n, i) {
                (this.doc = e.document), (this.window = e), (this.ret = {}), (this.id = c.id++), (this.first_run = !0);
                var r = this;
                (this.return_callback = function (e) {
                  t(e, r.getCurrentContext());
                }),
                  (this.error_callback = function (e) {
                    var t = r.getCurrentContext();
                    t._modified && n(e, t);
                  }),
                  (this.event_callback = function (e) {
                    i(e);
                  });
              };
              return (
                (c.id = 0),
                (c.prototype.InterpreterError = a),
                (c.prototype.RequireError = o),
                (c.prototype.interpretNext = function () {
                  var e = this.stmt_stack;
                  if (0 < e.length) {
                    var t = e.pop();
                    try {
                      t.interpret(this), this.interpretNext();
                    } catch (n) {
                      n instanceof l ? e.push(t) : this.error_callback.call(this, n);
                    }
                  }
                }),
                (c.prototype.getCurrentContext = function () {
                  var e = { _refresh: void 0 !== this.refresh_timer };
                  for (var t in this.variables) this.variables.hasOwnProperty(t) && (e[t.substring(1)] = this.variables[t]);
                  return (
                    void 0 === this.previousContext
                      ? (e._modified = !0)
                      : (e._modified = !(function e(t, n) {
                          var i;
                          if (null === t || null === n) return t === n;
                          if (void 0 === t || void 0 === n) return t === n;
                          for (i in n) if ("_" !== i[0] && !t.hasOwnProperty(i)) return !1;
                          for (i in t)
                            if (t.hasOwnProperty(i) && "_" !== i[0]) {
                              if (!n.hasOwnProperty(i)) return !1;
                              if (t[i]) {
                                if ("object" == typeof t[i]) {
                                  if (!e(t[i], n[i])) return !1;
                                } else if (t[i] !== n[i]) return !1;
                              } else if (n[i]) return !1;
                            }
                          return !0;
                        })(this.previousContext, e)),
                    e
                  );
                }),
                (c.prototype.interpret = function (t) {
                  if (
                    (this.first_run
                      ? ((this.previousContext = void 0), (this.first_run = !1))
                      : (this.previousContext = this.getCurrentContext()),
                    "string" == typeof t)
                  )
                    try {
                      this.ast = e.parse(t);
                    } catch (t) {
                      return void this.error_callback(t);
                    }
                  else this.ast = t;
                  (this.variables = {}),
                    (this.temp = {}),
                    (this.stmt_stack = []),
                    (this.refresh_timer = void 0),
                    (this.wait_timer = void 0),
                    this.ast.interpret(this);
                }),
                (c.prototype.pause_timers = function () {
                  this.refresh_timer && this.refresh_timer.pause(), this.wait_timer && this.wait_timer.pause();
                }),
                (c.prototype.resume_timers = function () {
                  this.refresh_timer && this.refresh_timer.resume(), this.wait_timer && this.wait_timer.resume();
                }),
                (c.prototype.close = function () {
                  this.refresh_timer && this.refresh_timer.cancel(), this.wait_timer && this.wait_timer.cancel();
                }),
                (c.prototype._getNodeList = function (e) {
                  if ("string" != typeof e) throw new a("First argument needs to be a selector.");
                  try {
                    return n(e, this.doc);
                  } catch (e) {
                    throw new a("CSS Selector - " + e);
                  }
                }),
                (c.prototype.function_table = {
                  call: function () {
                    var e = Array.prototype.slice.call(arguments);
                    if (e.length < 2) throw new a("Wrong number of arguments.");
                    for (var t = e[0], i = e[1], r = e.slice(2), s = this._getNodeList(t), o = 0; o < s.length; o++) {
                      var l = n(s[o]);
                      l[i] && l[i].apply(l, r);
                    }
                  },
                  event: function () {
                    var e = Array.prototype.slice.call(arguments);
                    this.event_callback(e);
                  },
                  json: function () {
                    var e = Array.prototype.slice.call(arguments);
                    if (e.length % 2 != 0) throw new a("Need even number of arguments.");
                    for (var t = 0, n = {}; t < e.length; n[e[t]] = e[t + 1], t += 2);
                    return JSON.stringify(n);
                  },
                  setAttribute: function () {
                    var e = Array.prototype.slice.call(arguments);
                    if (e.length < 3) throw new a("Wrong number of arguments.");
                    for (var t = e[0], n = e[1], i = e[2], r = this._getNodeList(t), s = 0; s < r.length; s++) r[s][n] = i;
                  },
                  const: function (e) {
                    return e;
                  },
                  sizzle: function () {
                    var e,
                      t = Array.prototype.slice.call(arguments),
                      n = t[0];
                    1 < t.length && (e = t[1]);
                    var i = this._getNodeList(n);
                    if (0 === i.length) return "";
                    for (var r = [], s = 0; s < i.length; s++) {
                      var o = i[s],
                        a = "";
                      (a = e ? ("textContent" === e ? o.textContent || o.innerText : o.getAttribute(e)) : o.innerHTML), r.push(a);
                    }
                    return 1 === r.length ? r[0] : r;
                  },
                  debug: function () {},
                  httpGet: function (e) {
                    var n = this,
                      i = this.temp,
                      r = "__httpGet__" + e;
                    if (r in i) {
                      var s = i[r];
                      return delete i[r], s;
                    }
                    var o = new t.AjaxRequest("GET", e);
                    throw (
                      (o.onReadyStateChange(function (e) {
                        var t = null;
                        4 === e.readyState && (200 === e.status && (t = e.responseText), (i[r] = t), n.interpretNext());
                      }),
                      o.onError(function () {
                        (i[r] = null), n.interpretNext();
                      }),
                      o.send(null),
                      new l())
                    );
                  },
                  join: function (e, t) {
                    return e.join(t);
                  },
                  len: function (e) {
                    return e.hasOwnProperty("length") ? e.length : void 0;
                  },
                  re: function () {
                    var e = Array.prototype.slice.call(arguments),
                      t = "",
                      n = e[0],
                      i = "";
                    if ((2 <= e.length && (i = e[1]), (t = 3 === e.length ? e[2] : this.doc.documentElement.innerHTML), 3 < e.length))
                      throw new s("'re' expression expects 3 arguments at most.");
                    if (!t) return "";
                    if ("string" != typeof t)
                      try {
                        t = t.toString();
                      } catch (e) {
                        throw new s("'re' block argument has no 'toString'.");
                      }
                    (t = t.replace(/(\r|\n)/gi, "")),
                      n instanceof RegExp && (n = n.source),
                      (n = n.replace(/"([^?])/gi, '"?$1')),
                      -1 === i.search("i") && (i += "i"),
                      (n = new RegExp(n, i));
                    var r = t.match(n);
                    return r ? (-1 !== i.search("g") ? r : 1 === r.length || r[1]) : "";
                  },
                  refresh: function (e) {
                    var t = this;
                    if (void 0 === e) throw new s("refresh interval argument required.");
                    if ((e = parseInt(e, 10)) < 1e3) throw new s("interval must be at least 1000.");
                    this.refresh_timer && this.refresh_timer.cancel(),
                      (this.refresh_timer = new i(function () {
                        t.interpret(t.ast);
                      }, e));
                  },
                  replace: function () {
                    var e = Array.prototype.slice.call(arguments),
                      t = e.shift();
                    if ("string" != typeof t) throw new r("First argument must be of type string.");
                    if (0 === e.length || e.length % 2 != 0) throw new s("ReplaceExpression got wrong number of args.");
                    for (e.reverse(); 0 < e.length; ) {
                      var n = e.pop();
                      n instanceof RegExp && (n = n.source);
                      var i = e.pop();
                      try {
                        n = new RegExp(n, "gi");
                      } catch (e) {
                        throw new s("Cannot create RegExp for " + n);
                      }
                      t = t.replace(n, i);
                    }
                    return t;
                  },
                  trim: function (e) {
                    return "string" == typeof e && (e = (e = e.replace(/\s+/gi, " ")).replace(/^\s/i, "").replace(/\s$/i, "")), e;
                  },
                  url: function () {
                    var e = this.doc;
                    try {
                      return e.location.href;
                    } catch (e) {
                      throw new a("'doc' has no property 'location.href'.");
                    }
                  },
                  urlParam: function (e) {
                    var t,
                      n = this.doc;
                    try {
                      t = n.location.href;
                    } catch (e) {
                      throw new a("'doc' has no property 'location.href'.");
                    }
                    for (var i = t.slice(t.indexOf("?") + 1).split("&"), r = {}, s = 0, o = i.length; s < o; s++) {
                      var l = i[s].split("=");
                      r[l[0]] = l[1];
                    }
                    return r[e];
                  },
                  version: function () {
                    return e ? e.VERSION : void 0;
                  },
                  at_least_version: function (t) {
                    if (!e) throw new a("CSL Parser not in namespace. ");
                    function n(e) {
                      if ("string" != typeof e) return !1;
                      var t = e.split(".");
                      return { major: parseInt(t[0], 10) || 0, minor: parseInt(t[1], 10) || 0, patch: parseInt(t[2], 10) || 0 };
                    }
                    var i = n(t),
                      r = n(e.VERSION);
                    return r.major !== i.major
                      ? r.major > i.major
                      : r.minor !== i.minor
                      ? r.minor > i.minor
                      : r.patch === i.patch || r.patch > i.patch;
                  },
                  wait: function (e) {
                    var t = this;
                    if (!("wait_token" in this.temp)) {
                      if ((e = parseInt(e, 10)) < 0) throw new s("Delay must be larger than 0.");
                      throw (
                        (window.setTimeout(function () {
                          (t.temp.wait_token = null), t.interpretNext();
                        }, e),
                        new l())
                      );
                    }
                    delete this.temp.wait_token;
                  },
                  xpath: function (e) {
                    var t = this.doc;
                    if (!("evaluate" in t)) throw new a("DOM doc object has no 'evaluate' function.");
                    var n = null;
                    try {
                      n = t.evaluate(e, t, null, 2, null);
                    } catch (e) {
                      throw new a(e);
                    }
                    return n ? n.stringValue : "";
                  }
                }),
                { TypeError: r, ValueError: s, InterruptException: l, Interpreter: c }
              );
            }),
            i("ciuvoSDK", ["constants"], function (e) {
              var t = { version: e.version };
              return n(["interpreter", "cslparser"]), (t.Interpreter = n("interpreter").Interpreter), (t.Parser = n("cslparser")), t;
            }),
            n("ciuvoSDK")
          );
        })();
      },
      {}
    ],
    19: [
      function (e, t, n) {
        t.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
        };
      },
      {}
    ],
    20: [
      function (e, t, n) {
        var i = e("./_wks")("unscopables"),
          r = Array.prototype;
        null == r[i] && e("./_hide")(r, i, {}),
          (t.exports = function (e) {
            r[i][e] = !0;
          });
      },
      { "./_hide": 35, "./_wks": 64 }
    ],
    21: [
      function (e, t, n) {
        var i = e("./_is-object");
        t.exports = function (e) {
          if (!i(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      { "./_is-object": 39 }
    ],
    22: [
      function (e, t, n) {
        var i = e("./_to-iobject"),
          r = e("./_to-length"),
          s = e("./_to-absolute-index");
        t.exports = function (e) {
          return function (t, n, o) {
            var a,
              l = i(t),
              c = r(l.length),
              u = s(o, c);
            if (e && n != n) {
              for (; c > u; ) if ((a = l[u++]) != a) return !0;
            } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1;
          };
        };
      },
      { "./_to-absolute-index": 57, "./_to-iobject": 59, "./_to-length": 60 }
    ],
    23: [
      function (e, t, n) {
        var i = {}.toString;
        t.exports = function (e) {
          return i.call(e).slice(8, -1);
        };
      },
      {}
    ],
    24: [
      function (e, t, n) {
        var i = (t.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = i);
      },
      {}
    ],
    25: [
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
              return function (n, i, r) {
                return e.call(t, n, i, r);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      { "./_a-function": 19 }
    ],
    26: [
      function (e, t, n) {
        t.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      {}
    ],
    27: [
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
      { "./_fails": 31 }
    ],
    28: [
      function (e, t, n) {
        var i = e("./_is-object"),
          r = e("./_global").document,
          s = i(r) && i(r.createElement);
        t.exports = function (e) {
          return s ? r.createElement(e) : {};
        };
      },
      { "./_global": 33, "./_is-object": 39 }
    ],
    29: [
      function (e, t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      {}
    ],
    30: [
      function (e, t, n) {
        var i = e("./_global"),
          r = e("./_core"),
          s = e("./_hide"),
          o = e("./_redefine"),
          a = e("./_ctx"),
          l = function (e, t, n) {
            var c,
              u,
              d,
              _,
              p = e & l.F,
              f = e & l.G,
              h = e & l.S,
              b = e & l.P,
              g = e & l.B,
              m = f ? i : h ? i[t] || (i[t] = {}) : (i[t] || {}).prototype,
              v = f ? r : r[t] || (r[t] = {}),
              w = v.prototype || (v.prototype = {});
            for (c in (f && (n = t), n))
              (d = ((u = !p && m && void 0 !== m[c]) ? m : n)[c]),
                (_ = g && u ? a(d, i) : b && "function" == typeof d ? a(Function.call, d) : d),
                m && o(m, c, d, e & l.U),
                v[c] != d && s(v, c, _),
                b && w[c] != d && (w[c] = d);
          };
        (i.core = r), (l.F = 1), (l.G = 2), (l.S = 4), (l.P = 8), (l.B = 16), (l.W = 32), (l.U = 64), (l.R = 128), (t.exports = l);
      },
      { "./_core": 24, "./_ctx": 25, "./_global": 33, "./_hide": 35, "./_redefine": 52 }
    ],
    31: [
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
    32: [
      function (e, t, n) {
        t.exports = e("./_shared")("native-function-to-string", Function.toString);
      },
      { "./_shared": 55 }
    ],
    33: [
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
    34: [
      function (e, t, n) {
        var i = {}.hasOwnProperty;
        t.exports = function (e, t) {
          return i.call(e, t);
        };
      },
      {}
    ],
    35: [
      function (e, t, n) {
        var i = e("./_object-dp"),
          r = e("./_property-desc");
        t.exports = e("./_descriptors")
          ? function (e, t, n) {
              return i.f(e, t, r(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      { "./_descriptors": 27, "./_object-dp": 46, "./_property-desc": 51 }
    ],
    36: [
      function (e, t, n) {
        var i = e("./_global").document;
        t.exports = i && i.documentElement;
      },
      { "./_global": 33 }
    ],
    37: [
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
      { "./_descriptors": 27, "./_dom-create": 28, "./_fails": 31 }
    ],
    38: [
      function (e, t, n) {
        var i = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == i(e) ? e.split("") : Object(e);
            };
      },
      { "./_cof": 23 }
    ],
    39: [
      function (e, t, n) {
        t.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      {}
    ],
    40: [
      function (e, t, n) {
        "use strict";
        var i = e("./_object-create"),
          r = e("./_property-desc"),
          s = e("./_set-to-string-tag"),
          o = {};
        e("./_hide")(o, e("./_wks")("iterator"), function () {
          return this;
        }),
          (t.exports = function (e, t, n) {
            (e.prototype = i(o, { next: r(1, n) })), s(e, t + " Iterator");
          });
      },
      { "./_hide": 35, "./_object-create": 45, "./_property-desc": 51, "./_set-to-string-tag": 53, "./_wks": 64 }
    ],
    41: [
      function (e, t, n) {
        "use strict";
        var i = e("./_library"),
          r = e("./_export"),
          s = e("./_redefine"),
          o = e("./_hide"),
          a = e("./_iterators"),
          l = e("./_iter-create"),
          c = e("./_set-to-string-tag"),
          u = e("./_object-gpo"),
          d = e("./_wks")("iterator"),
          _ = !([].keys && "next" in [].keys()),
          p = "keys",
          f = "values",
          h = function () {
            return this;
          };
        t.exports = function (e, t, n, b, g, m, v) {
          l(n, t, b);
          var w,
            y,
            k,
            x = function (e) {
              if (!_ && e in C) return C[e];
              switch (e) {
                case p:
                case f:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this, e);
              };
            },
            A = t + " Iterator",
            S = g == f,
            T = !1,
            C = e.prototype,
            z = C[d] || C["@@iterator"] || (g && C[g]),
            E = z || x(g),
            I = g ? (S ? x("entries") : E) : void 0,
            j = ("Array" == t && C.entries) || z;
          if (
            (j && (k = u(j.call(new e()))) !== Object.prototype && k.next && (c(k, A, !0), i || "function" == typeof k[d] || o(k, d, h)),
            S &&
              z &&
              z.name !== f &&
              ((T = !0),
              (E = function () {
                return z.call(this);
              })),
            (i && !v) || (!_ && !T && C[d]) || o(C, d, E),
            (a[t] = E),
            (a[A] = h),
            g)
          )
            if (((w = { values: S ? E : x(f), keys: m ? E : x(p), entries: I }), v)) for (y in w) y in C || s(C, y, w[y]);
            else r(r.P + r.F * (_ || T), t, w);
          return w;
        };
      },
      {
        "./_export": 30,
        "./_hide": 35,
        "./_iter-create": 40,
        "./_iterators": 43,
        "./_library": 44,
        "./_object-gpo": 48,
        "./_redefine": 52,
        "./_set-to-string-tag": 53,
        "./_wks": 64
      }
    ],
    42: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      {}
    ],
    43: [
      function (e, t, n) {
        t.exports = {};
      },
      {}
    ],
    44: [
      function (e, t, n) {
        t.exports = !1;
      },
      {}
    ],
    45: [
      function (e, t, n) {
        var i = e("./_an-object"),
          r = e("./_object-dps"),
          s = e("./_enum-bug-keys"),
          o = e("./_shared-key")("IE_PROTO"),
          a = function () {},
          l = function () {
            var t,
              n = e("./_dom-create")("iframe"),
              i = s.length;
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
              delete l.prototype[s[i]];
            return l();
          };
        t.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e ? ((a.prototype = i(e)), (n = new a()), (a.prototype = null), (n[o] = e)) : (n = l()), void 0 === t ? n : r(n, t)
            );
          };
      },
      { "./_an-object": 21, "./_dom-create": 28, "./_enum-bug-keys": 29, "./_html": 36, "./_object-dps": 47, "./_shared-key": 54 }
    ],
    46: [
      function (e, t, n) {
        var i = e("./_an-object"),
          r = e("./_ie8-dom-define"),
          s = e("./_to-primitive"),
          o = Object.defineProperty;
        n.f = e("./_descriptors")
          ? Object.defineProperty
          : function (e, t, n) {
              if ((i(e), (t = s(t, !0)), i(n), r))
                try {
                  return o(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      { "./_an-object": 21, "./_descriptors": 27, "./_ie8-dom-define": 37, "./_to-primitive": 62 }
    ],
    47: [
      function (e, t, n) {
        var i = e("./_object-dp"),
          r = e("./_an-object"),
          s = e("./_object-keys");
        t.exports = e("./_descriptors")
          ? Object.defineProperties
          : function (e, t) {
              r(e);
              for (var n, o = s(t), a = o.length, l = 0; a > l; ) i.f(e, (n = o[l++]), t[n]);
              return e;
            };
      },
      { "./_an-object": 21, "./_descriptors": 27, "./_object-dp": 46, "./_object-keys": 50 }
    ],
    48: [
      function (e, t, n) {
        var i = e("./_has"),
          r = e("./_to-object"),
          s = e("./_shared-key")("IE_PROTO"),
          o = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = r(e)),
              i(e, s)
                ? e[s]
                : "function" == typeof e.constructor && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? o
                : null
            );
          };
      },
      { "./_has": 34, "./_shared-key": 54, "./_to-object": 61 }
    ],
    49: [
      function (e, t, n) {
        var i = e("./_has"),
          r = e("./_to-iobject"),
          s = e("./_array-includes")(!1),
          o = e("./_shared-key")("IE_PROTO");
        t.exports = function (e, t) {
          var n,
            a = r(e),
            l = 0,
            c = [];
          for (n in a) n != o && i(a, n) && c.push(n);
          for (; t.length > l; ) i(a, (n = t[l++])) && (~s(c, n) || c.push(n));
          return c;
        };
      },
      { "./_array-includes": 22, "./_has": 34, "./_shared-key": 54, "./_to-iobject": 59 }
    ],
    50: [
      function (e, t, n) {
        var i = e("./_object-keys-internal"),
          r = e("./_enum-bug-keys");
        t.exports =
          Object.keys ||
          function (e) {
            return i(e, r);
          };
      },
      { "./_enum-bug-keys": 29, "./_object-keys-internal": 49 }
    ],
    51: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
      },
      {}
    ],
    52: [
      function (e, t, n) {
        var i = e("./_global"),
          r = e("./_hide"),
          s = e("./_has"),
          o = e("./_uid")("src"),
          a = e("./_function-to-string"),
          l = "toString",
          c = ("" + a).split(l);
        (e("./_core").inspectSource = function (e) {
          return a.call(e);
        }),
          (t.exports = function (e, t, n, a) {
            var l = "function" == typeof n;
            l && (s(n, "name") || r(n, "name", t)),
              e[t] !== n &&
                (l && (s(n, o) || r(n, o, e[t] ? "" + e[t] : c.join(String(t)))),
                e === i ? (e[t] = n) : a ? (e[t] ? (e[t] = n) : r(e, t, n)) : (delete e[t], r(e, t, n)));
          })(Function.prototype, l, function () {
            return ("function" == typeof this && this[o]) || a.call(this);
          });
      },
      { "./_core": 24, "./_function-to-string": 32, "./_global": 33, "./_has": 34, "./_hide": 35, "./_uid": 63 }
    ],
    53: [
      function (e, t, n) {
        var i = e("./_object-dp").f,
          r = e("./_has"),
          s = e("./_wks")("toStringTag");
        t.exports = function (e, t, n) {
          e && !r((e = n ? e : e.prototype), s) && i(e, s, { configurable: !0, value: t });
        };
      },
      { "./_has": 34, "./_object-dp": 46, "./_wks": 64 }
    ],
    54: [
      function (e, t, n) {
        var i = e("./_shared")("keys"),
          r = e("./_uid");
        t.exports = function (e) {
          return i[e] || (i[e] = r(e));
        };
      },
      { "./_shared": 55, "./_uid": 63 }
    ],
    55: [
      function (e, t, n) {
        var i = e("./_core"),
          r = e("./_global"),
          s = "__core-js_shared__",
          o = r[s] || (r[s] = {});
        (t.exports = function (e, t) {
          return o[e] || (o[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: i.version,
          mode: e("./_library") ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      { "./_core": 24, "./_global": 33, "./_library": 44 }
    ],
    56: [
      function (e, t, n) {
        "use strict";
        var i = e("./_fails");
        t.exports = function (e, t) {
          return (
            !!e &&
            i(function () {
              t ? e.call(null, function () {}, 1) : e.call(null);
            })
          );
        };
      },
      { "./_fails": 31 }
    ],
    57: [
      function (e, t, n) {
        var i = e("./_to-integer"),
          r = Math.max,
          s = Math.min;
        t.exports = function (e, t) {
          return (e = i(e)) < 0 ? r(e + t, 0) : s(e, t);
        };
      },
      { "./_to-integer": 58 }
    ],
    58: [
      function (e, t, n) {
        var i = Math.ceil,
          r = Math.floor;
        t.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? r : i)(e);
        };
      },
      {}
    ],
    59: [
      function (e, t, n) {
        var i = e("./_iobject"),
          r = e("./_defined");
        t.exports = function (e) {
          return i(r(e));
        };
      },
      { "./_defined": 26, "./_iobject": 38 }
    ],
    60: [
      function (e, t, n) {
        var i = e("./_to-integer"),
          r = Math.min;
        t.exports = function (e) {
          return e > 0 ? r(i(e), 9007199254740991) : 0;
        };
      },
      { "./_to-integer": 58 }
    ],
    61: [
      function (e, t, n) {
        var i = e("./_defined");
        t.exports = function (e) {
          return Object(i(e));
        };
      },
      { "./_defined": 26 }
    ],
    62: [
      function (e, t, n) {
        var i = e("./_is-object");
        t.exports = function (e, t) {
          if (!i(e)) return e;
          var n, r;
          if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e)))) return r;
          if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e)))) return r;
          if (!t && "function" == typeof (n = e.toString) && !i((r = n.call(e)))) return r;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { "./_is-object": 39 }
    ],
    63: [
      function (e, t, n) {
        var i = 0,
          r = Math.random();
        t.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + r).toString(36));
        };
      },
      {}
    ],
    64: [
      function (e, t, n) {
        var i = e("./_shared")("wks"),
          r = e("./_uid"),
          s = e("./_global").Symbol,
          o = "function" == typeof s;
        (t.exports = function (e) {
          return i[e] || (i[e] = (o && s[e]) || (o ? s : r)("Symbol." + e));
        }).store = i;
      },
      { "./_global": 33, "./_shared": 55, "./_uid": 63 }
    ],
    65: [
      function (e, t, n) {
        "use strict";
        var i = e("./_add-to-unscopables"),
          r = e("./_iter-step"),
          s = e("./_iterators"),
          o = e("./_to-iobject");
        (t.exports = e("./_iter-define")(
          Array,
          "Array",
          function (e, t) {
            (this._t = o(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              n = this._i++;
            return !e || n >= e.length ? ((this._t = void 0), r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
          },
          "values"
        )),
          (s.Arguments = s.Array),
          i("keys"),
          i("values"),
          i("entries");
      },
      { "./_add-to-unscopables": 20, "./_iter-define": 41, "./_iter-step": 42, "./_iterators": 43, "./_to-iobject": 59 }
    ],
    66: [
      function (e, t, n) {
        "use strict";
        var i = e("./_export"),
          r = e("./_a-function"),
          s = e("./_to-object"),
          o = e("./_fails"),
          a = [].sort,
          l = [1, 2, 3];
        i(
          i.P +
            i.F *
              (o(function () {
                l.sort(void 0);
              }) ||
                !o(function () {
                  l.sort(null);
                }) ||
                !e("./_strict-method")(a)),
          "Array",
          {
            sort: function (e) {
              return void 0 === e ? a.call(s(this)) : a.call(s(this), r(e));
            }
          }
        );
      },
      { "./_a-function": 19, "./_export": 30, "./_fails": 31, "./_strict-method": 56, "./_to-object": 61 }
    ],
    67: [
      function (e, t, n) {
        for (
          var i = e("./es6.array.iterator"),
            r = e("./_object-keys"),
            s = e("./_redefine"),
            o = e("./_global"),
            a = e("./_hide"),
            l = e("./_iterators"),
            c = e("./_wks"),
            u = c("iterator"),
            d = c("toStringTag"),
            _ = l.Array,
            p = {
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
            f = r(p),
            h = 0;
          h < f.length;
          h++
        ) {
          var b,
            g = f[h],
            m = p[g],
            v = o[g],
            w = v && v.prototype;
          if (w && (w[u] || a(w, u, _), w[d] || a(w, d, g), (l[g] = _), m)) for (b in i) w[b] || s(w, b, i[b], !0);
        }
      },
      {
        "./_global": 33,
        "./_hide": 35,
        "./_iterators": 43,
        "./_object-keys": 50,
        "./_redefine": 52,
        "./_wks": 64,
        "./es6.array.iterator": 65
      }
    ],
    68: [
      function (e, t, n) {
        "use strict";
        t.exports = e("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 69 }
    ],
    69: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          r = i(e("@babel/runtime/helpers/classCallCheck")),
          s = i(e("@babel/runtime/helpers/createClass")),
          o = i(e("@babel/runtime/helpers/assertThisInitialized")),
          a = i(e("@babel/runtime/helpers/inherits")),
          l = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
          c = i(e("@babel/runtime/helpers/getPrototypeOf"));
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
              i = (0, c.default)(e);
            if (t) {
              var r = (0, c.default)(this).constructor;
              n = Reflect.construct(i, arguments, r);
            } else n = i.apply(this, arguments);
            return (0, l.default)(this, n);
          };
        }
        var d = e("./Messenger"),
          _ = e("./ContentTopic"),
          p = e("./chrome"),
          f = (function (e) {
            (0, a.default)(n, e);
            var t = u(n);
            function n() {
              var e;
              (0, r.default)(this, n);
              var i = (e = t.call(this, _))._onMessage.bind((0, o.default)(e));
              return (
                p.runtime.onMessage.addListener(i),
                window.addEventListener("unload", function () {
                  p.runtime.onMessage.removeListener(i);
                }),
                p.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(e._onDisconnect.bind((0, o.default)(e))),
                e
              );
            }
            return (
              (0, s.default)(n, [
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
                    !(function r() {
                      p.runtime.sendMessage({ publish: e, message: t }, function (e) {
                        var t = p.runtime.lastError;
                        t && "Could not establish connection. Receiving end does not exist." === t.message
                          ? (i -= 1) && setTimeout(r, 50)
                          : "function" == typeof n && n(e);
                      });
                    })();
                  }
                }
              ]),
              n
            );
          })(d);
        t.exports = f;
      },
      {
        "./ContentTopic": 70,
        "./Messenger": 71,
        "./chrome": 73,
        "@babel/runtime/helpers/assertThisInitialized": 5,
        "@babel/runtime/helpers/classCallCheck": 6,
        "@babel/runtime/helpers/createClass": 7,
        "@babel/runtime/helpers/getPrototypeOf": 9,
        "@babel/runtime/helpers/inherits": 10,
        "@babel/runtime/helpers/interopRequireDefault": 11,
        "@babel/runtime/helpers/possibleConstructorReturn": 12
      }
    ],
    70: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          r = i(e("@babel/runtime/helpers/classCallCheck")),
          s = i(e("@babel/runtime/helpers/inherits")),
          o = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
          a = i(e("@babel/runtime/helpers/getPrototypeOf"));
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
              i = (0, a.default)(e);
            if (t) {
              var r = (0, a.default)(this).constructor;
              n = Reflect.construct(i, arguments, r);
            } else n = i.apply(this, arguments);
            return (0, o.default)(this, n);
          };
        }
        var c = e("./Topic"),
          u = e("./chrome"),
          d = (function (e) {
            (0, s.default)(n, e);
            var t = l(n);
            function n(e) {
              var i;
              return (0, r.default)(this, n), (i = t.call(this, e)), u.runtime.sendMessage({ subscribe: e }), i;
            }
            return n;
          })(c);
        t.exports = d;
      },
      {
        "./Topic": 72,
        "./chrome": 73,
        "@babel/runtime/helpers/classCallCheck": 6,
        "@babel/runtime/helpers/getPrototypeOf": 9,
        "@babel/runtime/helpers/inherits": 10,
        "@babel/runtime/helpers/interopRequireDefault": 11,
        "@babel/runtime/helpers/possibleConstructorReturn": 12
      }
    ],
    71: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          r = i(e("@babel/runtime/helpers/classCallCheck")),
          s = i(e("@babel/runtime/helpers/createClass")),
          o = (function () {
            function e(t) {
              (0, r.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, s.default)(
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
                      var r = this._getTopic(e);
                      r && r.publish(t, n, i);
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
        t.exports = o;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 6,
        "@babel/runtime/helpers/createClass": 7,
        "@babel/runtime/helpers/interopRequireDefault": 11
      }
    ],
    72: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          r = i(e("@babel/runtime/helpers/classCallCheck")),
          s = i(e("@babel/runtime/helpers/createClass")),
          o = (function () {
            function e(t) {
              (0, r.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, s.default)(e, [
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
        t.exports = o;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 6,
        "@babel/runtime/helpers/createClass": 7,
        "@babel/runtime/helpers/interopRequireDefault": 11
      }
    ],
    73: [
      function (e, t, n) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    74: [
      function (e, t, n) {
        var i = 1e3,
          r = 60 * i,
          s = 60 * r,
          o = 24 * s,
          a = 7 * o,
          l = 365.25 * o;
        function c(e, t, n, i) {
          var r = t >= 1.5 * n;
          return Math.round(e / n) + " " + i + (r ? "s" : "");
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
                  return n * l;
                case "weeks":
                case "week":
                case "w":
                  return n * a;
                case "days":
                case "day":
                case "d":
                  return n * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return n * s;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return n * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return n * i;
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
                  if (t >= o) return c(e, t, o, "day");
                  if (t >= s) return c(e, t, s, "hour");
                  if (t >= r) return c(e, t, r, "minute");
                  if (t >= i) return c(e, t, i, "second");
                  return e + " ms";
                })(e)
              : (function (e) {
                  var t = Math.abs(e);
                  if (t >= o) return Math.round(e / o) + "d";
                  if (t >= s) return Math.round(e / s) + "h";
                  if (t >= r) return Math.round(e / r) + "m";
                  if (t >= i) return Math.round(e / i) + "s";
                  return e + "ms";
                })(e);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
        };
      },
      {}
    ],
    75: [
      function (e, t, n) {
        "use strict";
        t.exports = e("./src/js/adaptor/jquery");
      },
      { "./src/js/adaptor/jquery": 76 }
    ],
    76: [
      function (e, t, n) {
        "use strict";
        var i = e("../main"),
          r = e("../plugin/instances");
        function s(e) {
          e.fn.perfectScrollbar = function (e) {
            return this.each(function () {
              if ("object" == typeof e || void 0 === e) {
                var t = e;
                r.get(this) || i.initialize(this, t);
              } else {
                var n = e;
                "update" === n ? i.update(this) : "destroy" === n && i.destroy(this);
              }
            });
          };
        }
        if ("function" == typeof define && define.amd) define(["jquery"], s);
        else {
          var o = window.jQuery ? window.jQuery : window.$;
          void 0 !== o && s(o);
        }
        t.exports = s;
      },
      { "../main": 81, "../plugin/instances": 92 }
    ],
    77: [
      function (e, t, n) {
        "use strict";
        var i = {};
        (i.create = function (e, t) {
          var n = document.createElement(e);
          return (n.className = t), n;
        }),
          (i.appendTo = function (e, t) {
            return t.appendChild(e), e;
          }),
          (i.css = function (e, t, n) {
            return "object" == typeof t
              ? (function (e, t) {
                  for (var n in t) {
                    var i = t[n];
                    "number" == typeof i && (i = i.toString() + "px"), (e.style[n] = i);
                  }
                  return e;
                })(e, t)
              : void 0 === n
              ? (function (e, t) {
                  return window.getComputedStyle(e)[t];
                })(e, t)
              : (function (e, t, n) {
                  return "number" == typeof n && (n = n.toString() + "px"), (e.style[t] = n), e;
                })(e, t, n);
          }),
          (i.matches = function (e, t) {
            return void 0 !== e.matches ? e.matches(t) : e.msMatchesSelector(t);
          }),
          (i.remove = function (e) {
            void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
          }),
          (i.queryChildren = function (e, t) {
            return Array.prototype.filter.call(e.childNodes, function (e) {
              return i.matches(e, t);
            });
          }),
          (t.exports = i);
      },
      {}
    ],
    78: [
      function (e, t, n) {
        "use strict";
        var i = function (e) {
          (this.element = e), (this.events = {});
        };
        (i.prototype.bind = function (e, t) {
          void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1);
        }),
          (i.prototype.unbind = function (e, t) {
            var n = void 0 !== t;
            this.events[e] = this.events[e].filter(function (i) {
              return !(!n || i === t) || (this.element.removeEventListener(e, i, !1), !1);
            }, this);
          }),
          (i.prototype.unbindAll = function () {
            for (var e in this.events) this.unbind(e);
          });
        var r = function () {
          this.eventElements = [];
        };
        (r.prototype.eventElement = function (e) {
          var t = this.eventElements.filter(function (t) {
            return t.element === e;
          })[0];
          return void 0 === t && ((t = new i(e)), this.eventElements.push(t)), t;
        }),
          (r.prototype.bind = function (e, t, n) {
            this.eventElement(e).bind(t, n);
          }),
          (r.prototype.unbind = function (e, t, n) {
            this.eventElement(e).unbind(t, n);
          }),
          (r.prototype.unbindAll = function () {
            for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll();
          }),
          (r.prototype.once = function (e, t, n) {
            var i = this.eventElement(e),
              r = function (e) {
                i.unbind(t, r), n(e);
              };
            i.bind(t, r);
          }),
          (t.exports = r);
      },
      {}
    ],
    79: [
      function (e, t, n) {
        "use strict";
        t.exports = (function () {
          function e() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1);
          }
          return function () {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
          };
        })();
      },
      {}
    ],
    80: [
      function (e, t, n) {
        "use strict";
        var i = e("./dom"),
          r = (n.toInt = function (e) {
            return parseInt(e, 10) || 0;
          });
        function s(e) {
          return ["ps--in-scrolling"].concat(void 0 === e ? ["ps--x", "ps--y"] : ["ps--" + e]);
        }
        (n.isEditable = function (e) {
          return (
            i.matches(e, "input,[contenteditable]") ||
            i.matches(e, "select,[contenteditable]") ||
            i.matches(e, "textarea,[contenteditable]") ||
            i.matches(e, "button,[contenteditable]")
          );
        }),
          (n.removePsClasses = function (e) {
            for (var t = 0; t < e.classList.length; t++) {
              var n = e.classList[t];
              0 === n.indexOf("ps-") && e.classList.remove(n);
            }
          }),
          (n.outerWidth = function (e) {
            return (
              r(i.css(e, "width")) +
              r(i.css(e, "paddingLeft")) +
              r(i.css(e, "paddingRight")) +
              r(i.css(e, "borderLeftWidth")) +
              r(i.css(e, "borderRightWidth"))
            );
          }),
          (n.startScrolling = function (e, t) {
            for (var n = s(t), i = 0; i < n.length; i++) e.classList.add(n[i]);
          }),
          (n.stopScrolling = function (e, t) {
            for (var n = s(t), i = 0; i < n.length; i++) e.classList.remove(n[i]);
          }),
          (n.env = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch:
              "undefined" != typeof window &&
              ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
          });
      },
      { "./dom": 77 }
    ],
    81: [
      function (e, t, n) {
        "use strict";
        var i = e("./plugin/destroy"),
          r = e("./plugin/initialize"),
          s = e("./plugin/update");
        t.exports = { initialize: r, update: s, destroy: i };
      },
      { "./plugin/destroy": 83, "./plugin/initialize": 91, "./plugin/update": 95 }
    ],
    82: [
      function (e, t, n) {
        "use strict";
        t.exports = function () {
          return {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
          };
        };
      },
      {}
    ],
    83: [
      function (e, t, n) {
        "use strict";
        var i = e("../lib/helper"),
          r = e("../lib/dom"),
          s = e("./instances");
        t.exports = function (e) {
          var t = s.get(e);
          t &&
            (t.event.unbindAll(),
            r.remove(t.scrollbarX),
            r.remove(t.scrollbarY),
            r.remove(t.scrollbarXRail),
            r.remove(t.scrollbarYRail),
            i.removePsClasses(e),
            s.remove(e));
        };
      },
      { "../lib/dom": 77, "../lib/helper": 80, "./instances": 92 }
    ],
    84: [
      function (e, t, n) {
        "use strict";
        var i = e("../instances"),
          r = e("../update-geometry"),
          s = e("../update-scroll");
        t.exports = function (e) {
          !(function (e, t) {
            function n(e) {
              return e.getBoundingClientRect();
            }
            var i = function (e) {
              e.stopPropagation();
            };
            t.event.bind(t.scrollbarY, "click", i),
              t.event.bind(t.scrollbarYRail, "click", function (i) {
                var o = i.pageY - window.pageYOffset - n(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
                s(e, "top", e.scrollTop + o * t.containerHeight), r(e), i.stopPropagation();
              }),
              t.event.bind(t.scrollbarX, "click", i),
              t.event.bind(t.scrollbarXRail, "click", function (i) {
                var o = i.pageX - window.pageXOffset - n(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
                s(e, "left", e.scrollLeft + o * t.containerWidth), r(e), i.stopPropagation();
              });
          })(e, i.get(e));
        };
      },
      { "../instances": 92, "../update-geometry": 93, "../update-scroll": 94 }
    ],
    85: [
      function (e, t, n) {
        "use strict";
        var i = e("../../lib/helper"),
          r = e("../../lib/dom"),
          s = e("../instances"),
          o = e("../update-geometry"),
          a = e("../update-scroll");
        function l(e, t) {
          var n = null,
            s = null;
          var l = function (r) {
              !(function (r) {
                var s = n + r * t.railXRatio,
                  o = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                t.scrollbarXLeft = s < 0 ? 0 : s > o ? o : s;
                var l =
                  i.toInt(
                    (t.scrollbarXLeft * (t.contentWidth - t.containerWidth)) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)
                  ) - t.negativeScrollAdjustment;
                a(e, "left", l);
              })(r.pageX - s),
                o(e),
                r.stopPropagation(),
                r.preventDefault();
            },
            c = function () {
              i.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", l);
            };
          t.event.bind(t.scrollbarX, "mousedown", function (o) {
            (s = o.pageX),
              (n = i.toInt(r.css(t.scrollbarX, "left")) * t.railXRatio),
              i.startScrolling(e, "x"),
              t.event.bind(t.ownerDocument, "mousemove", l),
              t.event.once(t.ownerDocument, "mouseup", c),
              o.stopPropagation(),
              o.preventDefault();
          });
        }
        function c(e, t) {
          var n = null,
            s = null;
          var l = function (r) {
              !(function (r) {
                var s = n + r * t.railYRatio,
                  o = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                t.scrollbarYTop = s < 0 ? 0 : s > o ? o : s;
                var l = i.toInt(
                  (t.scrollbarYTop * (t.contentHeight - t.containerHeight)) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight)
                );
                a(e, "top", l);
              })(r.pageY - s),
                o(e),
                r.stopPropagation(),
                r.preventDefault();
            },
            c = function () {
              i.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", l);
            };
          t.event.bind(t.scrollbarY, "mousedown", function (o) {
            (s = o.pageY),
              (n = i.toInt(r.css(t.scrollbarY, "top")) * t.railYRatio),
              i.startScrolling(e, "y"),
              t.event.bind(t.ownerDocument, "mousemove", l),
              t.event.once(t.ownerDocument, "mouseup", c),
              o.stopPropagation(),
              o.preventDefault();
          });
        }
        t.exports = function (e) {
          var t = s.get(e);
          l(e, t), c(e, t);
        };
      },
      { "../../lib/dom": 77, "../../lib/helper": 80, "../instances": 92, "../update-geometry": 93, "../update-scroll": 94 }
    ],
    86: [
      function (e, t, n) {
        "use strict";
        var i = e("../../lib/helper"),
          r = e("../../lib/dom"),
          s = e("../instances"),
          o = e("../update-geometry"),
          a = e("../update-scroll");
        function l(e, t) {
          var n = !1;
          t.event.bind(e, "mouseenter", function () {
            n = !0;
          }),
            t.event.bind(e, "mouseleave", function () {
              n = !1;
            });
          var s = !1;
          t.event.bind(t.ownerDocument, "keydown", function (l) {
            if (!((l.isDefaultPrevented && l.isDefaultPrevented()) || l.defaultPrevented)) {
              var c = r.matches(t.scrollbarX, ":focus") || r.matches(t.scrollbarY, ":focus");
              if (n || c) {
                var u = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                if (u) {
                  if ("IFRAME" === u.tagName) u = u.contentDocument.activeElement;
                  else for (; u.shadowRoot; ) u = u.shadowRoot.activeElement;
                  if (i.isEditable(u)) return;
                }
                var d = 0,
                  _ = 0;
                switch (l.which) {
                  case 37:
                    d = l.metaKey ? -t.contentWidth : l.altKey ? -t.containerWidth : -30;
                    break;
                  case 38:
                    _ = l.metaKey ? t.contentHeight : l.altKey ? t.containerHeight : 30;
                    break;
                  case 39:
                    d = l.metaKey ? t.contentWidth : l.altKey ? t.containerWidth : 30;
                    break;
                  case 40:
                    _ = l.metaKey ? -t.contentHeight : l.altKey ? -t.containerHeight : -30;
                    break;
                  case 33:
                    _ = 90;
                    break;
                  case 32:
                    _ = l.shiftKey ? 90 : -90;
                    break;
                  case 34:
                    _ = -90;
                    break;
                  case 35:
                    _ = l.ctrlKey ? -t.contentHeight : -t.containerHeight;
                    break;
                  case 36:
                    _ = l.ctrlKey ? e.scrollTop : t.containerHeight;
                    break;
                  default:
                    return;
                }
                a(e, "top", e.scrollTop - _),
                  a(e, "left", e.scrollLeft + d),
                  o(e),
                  (s = (function (n, i) {
                    var r = e.scrollTop;
                    if (0 === n) {
                      if (!t.scrollbarYActive) return !1;
                      if ((0 === r && i > 0) || (r >= t.contentHeight - t.containerHeight && i < 0)) return !t.settings.wheelPropagation;
                    }
                    var s = e.scrollLeft;
                    if (0 === i) {
                      if (!t.scrollbarXActive) return !1;
                      if ((0 === s && n < 0) || (s >= t.contentWidth - t.containerWidth && n > 0)) return !t.settings.wheelPropagation;
                    }
                    return !0;
                  })(d, _)),
                  s && l.preventDefault();
              }
            }
          });
        }
        t.exports = function (e) {
          l(e, s.get(e));
        };
      },
      { "../../lib/dom": 77, "../../lib/helper": 80, "../instances": 92, "../update-geometry": 93, "../update-scroll": 94 }
    ],
    87: [
      function (e, t, n) {
        "use strict";
        var i = e("../instances"),
          r = e("../update-geometry"),
          s = e("../update-scroll");
        function o(e, t) {
          var n = !1;
          function i(i) {
            var o = (function (e) {
                var t = e.deltaX,
                  n = -1 * e.deltaY;
                return (
                  (void 0 !== t && void 0 !== n) || ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                  e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
                  t != t && n != n && ((t = 0), (n = e.wheelDelta)),
                  e.shiftKey ? [-n, -t] : [t, n]
                );
              })(i),
              a = o[0],
              l = o[1];
            (function (t, n) {
              var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
              if (i) {
                var r = window.getComputedStyle(i);
                if (![r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) return !1;
                var s = i.scrollHeight - i.clientHeight;
                if (s > 0 && !((0 === i.scrollTop && n > 0) || (i.scrollTop === s && n < 0))) return !0;
                var o = i.scrollLeft - i.clientWidth;
                if (o > 0 && !((0 === i.scrollLeft && t < 0) || (i.scrollLeft === o && t > 0))) return !0;
              }
              return !1;
            })(a, l) ||
              ((n = !1),
              t.settings.useBothWheelAxes
                ? t.scrollbarYActive && !t.scrollbarXActive
                  ? (s(e, "top", l ? e.scrollTop - l * t.settings.wheelSpeed : e.scrollTop + a * t.settings.wheelSpeed), (n = !0))
                  : t.scrollbarXActive &&
                    !t.scrollbarYActive &&
                    (s(e, "left", a ? e.scrollLeft + a * t.settings.wheelSpeed : e.scrollLeft - l * t.settings.wheelSpeed), (n = !0))
                : (s(e, "top", e.scrollTop - l * t.settings.wheelSpeed), s(e, "left", e.scrollLeft + a * t.settings.wheelSpeed)),
              r(e),
              (n =
                n ||
                (function (n, i) {
                  var r = e.scrollTop;
                  if (0 === n) {
                    if (!t.scrollbarYActive) return !1;
                    if ((0 === r && i > 0) || (r >= t.contentHeight - t.containerHeight && i < 0)) return !t.settings.wheelPropagation;
                  }
                  var s = e.scrollLeft;
                  if (0 === i) {
                    if (!t.scrollbarXActive) return !1;
                    if ((0 === s && n < 0) || (s >= t.contentWidth - t.containerWidth && n > 0)) return !t.settings.wheelPropagation;
                  }
                  return !0;
                })(a, l)),
              n && (i.stopPropagation(), i.preventDefault()));
          }
          void 0 !== window.onwheel ? t.event.bind(e, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", i);
        }
        t.exports = function (e) {
          o(e, i.get(e));
        };
      },
      { "../instances": 92, "../update-geometry": 93, "../update-scroll": 94 }
    ],
    88: [
      function (e, t, n) {
        "use strict";
        var i = e("../instances"),
          r = e("../update-geometry");
        t.exports = function (e) {
          !(function (e, t) {
            t.event.bind(e, "scroll", function () {
              r(e);
            });
          })(e, i.get(e));
        };
      },
      { "../instances": 92, "../update-geometry": 93 }
    ],
    89: [
      function (e, t, n) {
        "use strict";
        var i = e("../../lib/helper"),
          r = e("../instances"),
          s = e("../update-geometry"),
          o = e("../update-scroll");
        function a(e, t) {
          var n = null,
            a = { top: 0, left: 0 };
          function l() {
            n && (clearInterval(n), (n = null)), i.stopScrolling(e);
          }
          var c = !1;
          t.event.bind(t.ownerDocument, "selectionchange", function () {
            var t;
            e.contains(
              0 ===
                (t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "").toString().length
                ? null
                : t.getRangeAt(0).commonAncestorContainer
            )
              ? (c = !0)
              : ((c = !1), l());
          }),
            t.event.bind(window, "mouseup", function () {
              c && ((c = !1), l());
            }),
            t.event.bind(window, "keyup", function () {
              c && ((c = !1), l());
            }),
            t.event.bind(window, "mousemove", function (t) {
              if (c) {
                var u = { x: t.pageX, y: t.pageY },
                  d = { left: e.offsetLeft, right: e.offsetLeft + e.offsetWidth, top: e.offsetTop, bottom: e.offsetTop + e.offsetHeight };
                u.x < d.left + 3
                  ? ((a.left = -5), i.startScrolling(e, "x"))
                  : u.x > d.right - 3
                  ? ((a.left = 5), i.startScrolling(e, "x"))
                  : (a.left = 0),
                  u.y < d.top + 3
                    ? ((a.top = d.top + 3 - u.y < 5 ? -5 : -20), i.startScrolling(e, "y"))
                    : u.y > d.bottom - 3
                    ? ((a.top = u.y - d.bottom + 3 < 5 ? 5 : 20), i.startScrolling(e, "y"))
                    : (a.top = 0),
                  0 === a.top && 0 === a.left
                    ? l()
                    : n ||
                      (n = setInterval(function () {
                        r.get(e) ? (o(e, "top", e.scrollTop + a.top), o(e, "left", e.scrollLeft + a.left), s(e)) : clearInterval(n);
                      }, 50));
              }
            });
        }
        t.exports = function (e) {
          a(e, r.get(e));
        };
      },
      { "../../lib/helper": 80, "../instances": 92, "../update-geometry": 93, "../update-scroll": 94 }
    ],
    90: [
      function (e, t, n) {
        "use strict";
        var i = e("../../lib/helper"),
          r = e("../instances"),
          s = e("../update-geometry"),
          o = e("../update-scroll");
        function a(e, t, n, i) {
          function a(t, n) {
            o(e, "top", e.scrollTop - n), o(e, "left", e.scrollLeft - t), s(e);
          }
          var l = {},
            c = 0,
            u = {},
            d = null,
            _ = !1,
            p = !1;
          function f() {
            _ = !0;
          }
          function h() {
            _ = !1;
          }
          function b(e) {
            return e.targetTouches ? e.targetTouches[0] : e;
          }
          function g(e) {
            return (
              (!e.pointerType || "pen" !== e.pointerType || 0 !== e.buttons) &&
              (!(!e.targetTouches || 1 !== e.targetTouches.length) ||
                !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
            );
          }
          function m(e) {
            if (g(e)) {
              p = !0;
              var t = b(e);
              (l.pageX = t.pageX), (l.pageY = t.pageY), (c = new Date().getTime()), null !== d && clearInterval(d), e.stopPropagation();
            }
          }
          function v(n) {
            if ((!p && t.settings.swipePropagation && m(n), !_ && p && g(n))) {
              var i = b(n),
                r = { pageX: i.pageX, pageY: i.pageY },
                s = r.pageX - l.pageX,
                o = r.pageY - l.pageY;
              a(s, o), (l = r);
              var d = new Date().getTime(),
                f = d - c;
              f > 0 && ((u.x = s / f), (u.y = o / f), (c = d)),
                (function (n, i) {
                  var r = e.scrollTop,
                    s = e.scrollLeft,
                    o = Math.abs(n),
                    a = Math.abs(i);
                  if (a > o) {
                    if ((i < 0 && r === t.contentHeight - t.containerHeight) || (i > 0 && 0 === r)) return !t.settings.swipePropagation;
                  } else if (o > a && ((n < 0 && s === t.contentWidth - t.containerWidth) || (n > 0 && 0 === s)))
                    return !t.settings.swipePropagation;
                  return !0;
                })(s, o) && (n.stopPropagation(), n.preventDefault());
            }
          }
          function w() {
            !_ &&
              p &&
              ((p = !1),
              t.settings.swipeEasing &&
                (clearInterval(d),
                (d = setInterval(function () {
                  r.get(e) && (u.x || u.y)
                    ? Math.abs(u.x) < 0.01 && Math.abs(u.y) < 0.01
                      ? clearInterval(d)
                      : (a(30 * u.x, 30 * u.y), (u.x *= 0.8), (u.y *= 0.8))
                    : clearInterval(d);
                }, 10))));
          }
          n
            ? (t.event.bind(window, "touchstart", f),
              t.event.bind(window, "touchend", h),
              t.event.bind(e, "touchstart", m),
              t.event.bind(e, "touchmove", v),
              t.event.bind(e, "touchend", w))
            : i &&
              (window.PointerEvent
                ? (t.event.bind(window, "pointerdown", f),
                  t.event.bind(window, "pointerup", h),
                  t.event.bind(e, "pointerdown", m),
                  t.event.bind(e, "pointermove", v),
                  t.event.bind(e, "pointerup", w))
                : window.MSPointerEvent &&
                  (t.event.bind(window, "MSPointerDown", f),
                  t.event.bind(window, "MSPointerUp", h),
                  t.event.bind(e, "MSPointerDown", m),
                  t.event.bind(e, "MSPointerMove", v),
                  t.event.bind(e, "MSPointerUp", w)));
        }
        t.exports = function (e) {
          (i.env.supportsTouch || i.env.supportsIePointer) && a(e, r.get(e), i.env.supportsTouch, i.env.supportsIePointer);
        };
      },
      { "../../lib/helper": 80, "../instances": 92, "../update-geometry": 93, "../update-scroll": 94 }
    ],
    91: [
      function (e, t, n) {
        "use strict";
        var i = e("./instances"),
          r = e("./update-geometry"),
          s = {
            "click-rail": e("./handler/click-rail"),
            "drag-scrollbar": e("./handler/drag-scrollbar"),
            keyboard: e("./handler/keyboard"),
            wheel: e("./handler/mouse-wheel"),
            touch: e("./handler/touch"),
            selection: e("./handler/selection")
          },
          o = e("./handler/native-scroll");
        t.exports = function (e, t) {
          e.classList.add("ps");
          var n = i.add(e, "object" == typeof t ? t : {});
          e.classList.add("ps--theme_" + n.settings.theme),
            n.settings.handlers.forEach(function (t) {
              s[t](e);
            }),
            o(e),
            r(e);
        };
      },
      {
        "./handler/click-rail": 84,
        "./handler/drag-scrollbar": 85,
        "./handler/keyboard": 86,
        "./handler/mouse-wheel": 87,
        "./handler/native-scroll": 88,
        "./handler/selection": 89,
        "./handler/touch": 90,
        "./instances": 92,
        "./update-geometry": 93
      }
    ],
    92: [
      function (e, t, n) {
        "use strict";
        var i = e("../lib/helper"),
          r = e("./default-setting"),
          s = e("../lib/dom"),
          o = e("../lib/event-manager"),
          a = e("../lib/guid"),
          l = {};
        function c(e, t) {
          var n,
            a,
            l = this;
          for (var c in ((l.settings = r()), t)) l.settings[c] = t[c];
          function u() {
            e.classList.add("ps--focus");
          }
          function d() {
            e.classList.remove("ps--focus");
          }
          (l.containerWidth = null),
            (l.containerHeight = null),
            (l.contentWidth = null),
            (l.contentHeight = null),
            (l.isRtl = "rtl" === s.css(e, "direction")),
            (l.isNegativeScroll = ((a = e.scrollLeft), (e.scrollLeft = -1), (n = e.scrollLeft < 0), (e.scrollLeft = a), n)),
            (l.negativeScrollAdjustment = l.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
            (l.event = new o()),
            (l.ownerDocument = e.ownerDocument || document),
            (l.scrollbarXRail = s.appendTo(s.create("div", "ps__scrollbar-x-rail"), e)),
            (l.scrollbarX = s.appendTo(s.create("div", "ps__scrollbar-x"), l.scrollbarXRail)),
            l.scrollbarX.setAttribute("tabindex", 0),
            l.event.bind(l.scrollbarX, "focus", u),
            l.event.bind(l.scrollbarX, "blur", d),
            (l.scrollbarXActive = null),
            (l.scrollbarXWidth = null),
            (l.scrollbarXLeft = null),
            (l.scrollbarXBottom = i.toInt(s.css(l.scrollbarXRail, "bottom"))),
            (l.isScrollbarXUsingBottom = l.scrollbarXBottom == l.scrollbarXBottom),
            (l.scrollbarXTop = l.isScrollbarXUsingBottom ? null : i.toInt(s.css(l.scrollbarXRail, "top"))),
            (l.railBorderXWidth =
              i.toInt(s.css(l.scrollbarXRail, "borderLeftWidth")) + i.toInt(s.css(l.scrollbarXRail, "borderRightWidth"))),
            s.css(l.scrollbarXRail, "display", "block"),
            (l.railXMarginWidth = i.toInt(s.css(l.scrollbarXRail, "marginLeft")) + i.toInt(s.css(l.scrollbarXRail, "marginRight"))),
            s.css(l.scrollbarXRail, "display", ""),
            (l.railXWidth = null),
            (l.railXRatio = null),
            (l.scrollbarYRail = s.appendTo(s.create("div", "ps__scrollbar-y-rail"), e)),
            (l.scrollbarY = s.appendTo(s.create("div", "ps__scrollbar-y"), l.scrollbarYRail)),
            l.scrollbarY.setAttribute("tabindex", 0),
            l.event.bind(l.scrollbarY, "focus", u),
            l.event.bind(l.scrollbarY, "blur", d),
            (l.scrollbarYActive = null),
            (l.scrollbarYHeight = null),
            (l.scrollbarYTop = null),
            (l.scrollbarYRight = i.toInt(s.css(l.scrollbarYRail, "right"))),
            (l.isScrollbarYUsingRight = l.scrollbarYRight == l.scrollbarYRight),
            (l.scrollbarYLeft = l.isScrollbarYUsingRight ? null : i.toInt(s.css(l.scrollbarYRail, "left"))),
            (l.scrollbarYOuterWidth = l.isRtl ? i.outerWidth(l.scrollbarY) : null),
            (l.railBorderYWidth =
              i.toInt(s.css(l.scrollbarYRail, "borderTopWidth")) + i.toInt(s.css(l.scrollbarYRail, "borderBottomWidth"))),
            s.css(l.scrollbarYRail, "display", "block"),
            (l.railYMarginHeight = i.toInt(s.css(l.scrollbarYRail, "marginTop")) + i.toInt(s.css(l.scrollbarYRail, "marginBottom"))),
            s.css(l.scrollbarYRail, "display", ""),
            (l.railYHeight = null),
            (l.railYRatio = null);
        }
        function u(e) {
          return e.getAttribute("data-ps-id");
        }
        (n.add = function (e, t) {
          var n = a();
          return (
            (function (e, t) {
              e.setAttribute("data-ps-id", t);
            })(e, n),
            (l[n] = new c(e, t)),
            l[n]
          );
        }),
          (n.remove = function (e) {
            delete l[u(e)],
              (function (e) {
                e.removeAttribute("data-ps-id");
              })(e);
          }),
          (n.get = function (e) {
            return l[u(e)];
          });
      },
      { "../lib/dom": 77, "../lib/event-manager": 78, "../lib/guid": 79, "../lib/helper": 80, "./default-setting": 82 }
    ],
    93: [
      function (e, t, n) {
        "use strict";
        var i = e("../lib/helper"),
          r = e("../lib/dom"),
          s = e("./instances"),
          o = e("./update-scroll");
        function a(e, t) {
          return (
            e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
            e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
            t
          );
        }
        t.exports = function (e) {
          var t,
            n = s.get(e);
          (n.containerWidth = e.clientWidth),
            (n.containerHeight = e.clientHeight),
            (n.contentWidth = e.scrollWidth),
            (n.contentHeight = e.scrollHeight),
            e.contains(n.scrollbarXRail) ||
              ((t = r.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 &&
                t.forEach(function (e) {
                  r.remove(e);
                }),
              r.appendTo(n.scrollbarXRail, e)),
            e.contains(n.scrollbarYRail) ||
              ((t = r.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 &&
                t.forEach(function (e) {
                  r.remove(e);
                }),
              r.appendTo(n.scrollbarYRail, e)),
            !n.settings.suppressScrollX && n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth
              ? ((n.scrollbarXActive = !0),
                (n.railXWidth = n.containerWidth - n.railXMarginWidth),
                (n.railXRatio = n.containerWidth / n.railXWidth),
                (n.scrollbarXWidth = a(n, i.toInt((n.railXWidth * n.containerWidth) / n.contentWidth))),
                (n.scrollbarXLeft = i.toInt(
                  ((n.negativeScrollAdjustment + e.scrollLeft) * (n.railXWidth - n.scrollbarXWidth)) / (n.contentWidth - n.containerWidth)
                )))
              : (n.scrollbarXActive = !1),
            !n.settings.suppressScrollY && n.containerHeight + n.settings.scrollYMarginOffset < n.contentHeight
              ? ((n.scrollbarYActive = !0),
                (n.railYHeight = n.containerHeight - n.railYMarginHeight),
                (n.railYRatio = n.containerHeight / n.railYHeight),
                (n.scrollbarYHeight = a(n, i.toInt((n.railYHeight * n.containerHeight) / n.contentHeight))),
                (n.scrollbarYTop = i.toInt((e.scrollTop * (n.railYHeight - n.scrollbarYHeight)) / (n.contentHeight - n.containerHeight))))
              : (n.scrollbarYActive = !1),
            n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth && (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth),
            n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight && (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight),
            (function (e, t) {
              var n = { width: t.railXWidth };
              t.isRtl ? (n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth) : (n.left = e.scrollLeft),
                t.isScrollbarXUsingBottom ? (n.bottom = t.scrollbarXBottom - e.scrollTop) : (n.top = t.scrollbarXTop + e.scrollTop),
                r.css(t.scrollbarXRail, n);
              var i = { top: e.scrollTop, height: t.railYHeight };
              t.isScrollbarYUsingRight
                ? t.isRtl
                  ? (i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth)
                  : (i.right = t.scrollbarYRight - e.scrollLeft)
                : t.isRtl
                ? (i.left =
                    t.negativeScrollAdjustment +
                    e.scrollLeft +
                    2 * t.containerWidth -
                    t.contentWidth -
                    t.scrollbarYLeft -
                    t.scrollbarYOuterWidth)
                : (i.left = t.scrollbarYLeft + e.scrollLeft),
                r.css(t.scrollbarYRail, i),
                r.css(t.scrollbarX, { left: t.scrollbarXLeft, width: t.scrollbarXWidth - t.railBorderXWidth }),
                r.css(t.scrollbarY, { top: t.scrollbarYTop, height: t.scrollbarYHeight - t.railBorderYWidth });
            })(e, n),
            n.scrollbarXActive
              ? e.classList.add("ps--active-x")
              : (e.classList.remove("ps--active-x"), (n.scrollbarXWidth = 0), (n.scrollbarXLeft = 0), o(e, "left", 0)),
            n.scrollbarYActive
              ? e.classList.add("ps--active-y")
              : (e.classList.remove("ps--active-y"), (n.scrollbarYHeight = 0), (n.scrollbarYTop = 0), o(e, "top", 0));
        };
      },
      { "../lib/dom": 77, "../lib/helper": 80, "./instances": 92, "./update-scroll": 94 }
    ],
    94: [
      function (e, t, n) {
        "use strict";
        var i = e("./instances"),
          r = function (e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t;
          };
        t.exports = function (e, t, n) {
          if (void 0 === e) throw "You must provide an element to the update-scroll function";
          if (void 0 === t) throw "You must provide an axis to the update-scroll function";
          if (void 0 === n) throw "You must provide a value to the update-scroll function";
          "top" === t && n <= 0 && ((e.scrollTop = n = 0), e.dispatchEvent(r("ps-y-reach-start"))),
            "left" === t && n <= 0 && ((e.scrollLeft = n = 0), e.dispatchEvent(r("ps-x-reach-start")));
          var s = i.get(e);
          "top" === t &&
            n >= s.contentHeight - s.containerHeight &&
            ((n = s.contentHeight - s.containerHeight) - e.scrollTop <= 2 ? (n = e.scrollTop) : (e.scrollTop = n),
            e.dispatchEvent(r("ps-y-reach-end"))),
            "left" === t &&
              n >= s.contentWidth - s.containerWidth &&
              ((n = s.contentWidth - s.containerWidth) - e.scrollLeft <= 2 ? (n = e.scrollLeft) : (e.scrollLeft = n),
              e.dispatchEvent(r("ps-x-reach-end"))),
            void 0 === s.lastTop && (s.lastTop = e.scrollTop),
            void 0 === s.lastLeft && (s.lastLeft = e.scrollLeft),
            "top" === t && n < s.lastTop && e.dispatchEvent(r("ps-scroll-up")),
            "top" === t && n > s.lastTop && e.dispatchEvent(r("ps-scroll-down")),
            "left" === t && n < s.lastLeft && e.dispatchEvent(r("ps-scroll-left")),
            "left" === t && n > s.lastLeft && e.dispatchEvent(r("ps-scroll-right")),
            "top" === t && n !== s.lastTop && ((e.scrollTop = s.lastTop = n), e.dispatchEvent(r("ps-scroll-y"))),
            "left" === t && n !== s.lastLeft && ((e.scrollLeft = s.lastLeft = n), e.dispatchEvent(r("ps-scroll-x")));
        };
      },
      { "./instances": 92 }
    ],
    95: [
      function (e, t, n) {
        "use strict";
        var i = e("../lib/helper"),
          r = e("../lib/dom"),
          s = e("./instances"),
          o = e("./update-geometry"),
          a = e("./update-scroll");
        t.exports = function (e) {
          var t = s.get(e);
          t &&
            ((t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0),
            r.css(t.scrollbarXRail, "display", "block"),
            r.css(t.scrollbarYRail, "display", "block"),
            (t.railXMarginWidth = i.toInt(r.css(t.scrollbarXRail, "marginLeft")) + i.toInt(r.css(t.scrollbarXRail, "marginRight"))),
            (t.railYMarginHeight = i.toInt(r.css(t.scrollbarYRail, "marginTop")) + i.toInt(r.css(t.scrollbarYRail, "marginBottom"))),
            r.css(t.scrollbarXRail, "display", "none"),
            r.css(t.scrollbarYRail, "display", "none"),
            o(e),
            a(e, "top", e.scrollTop),
            a(e, "left", e.scrollLeft),
            r.css(t.scrollbarXRail, "display", ""),
            r.css(t.scrollbarYRail, "display", ""));
        };
      },
      { "../lib/dom": 77, "../lib/helper": 80, "./instances": 92, "./update-geometry": 93, "./update-scroll": 94 }
    ],
    96: [
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
                r = Object.prototype,
                s = "undefined" != typeof Symbol ? Symbol.prototype : null,
                o = i.push,
                a = i.slice,
                l = r.toString,
                c = r.hasOwnProperty,
                u = "undefined" != typeof ArrayBuffer,
                d = "undefined" != typeof DataView,
                _ = Array.isArray,
                p = Object.keys,
                f = Object.create,
                h = u && ArrayBuffer.isView,
                b = isNaN,
                g = isFinite,
                m = !{ toString: null }.propertyIsEnumerable("toString"),
                v = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                w = Math.pow(2, 53) - 1;
              function y(e, t) {
                return (
                  (t = null == t ? e.length - 1 : +t),
                  function () {
                    for (var n = Math.max(arguments.length - t, 0), i = Array(n), r = 0; r < n; r++) i[r] = arguments[r + t];
                    switch (t) {
                      case 0:
                        return e.call(this, i);
                      case 1:
                        return e.call(this, arguments[0], i);
                      case 2:
                        return e.call(this, arguments[0], arguments[1], i);
                    }
                    var s = Array(t + 1);
                    for (r = 0; r < t; r++) s[r] = arguments[r];
                    return (s[t] = i), e.apply(this, s);
                  }
                );
              }
              function k(e) {
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
              var T = S("String"),
                C = S("Number"),
                z = S("Date"),
                E = S("RegExp"),
                I = S("Error"),
                j = S("Symbol"),
                q = S("ArrayBuffer"),
                P = S("Function"),
                R = n.document && n.document.childNodes;
              "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                "function" != typeof R &&
                (P = function (e) {
                  return "function" == typeof e || !1;
                });
              var O = P,
                B = S("Object"),
                L = d && B(new DataView(new ArrayBuffer(8))),
                M = "undefined" != typeof Map && B(new Map()),
                N = S("DataView");
              var D = L
                  ? function (e) {
                      return null != e && O(e.getInt8) && q(e.buffer);
                    }
                  : N,
                W = _ || S("Array");
              function H(e, t) {
                return null != e && c.call(e, t);
              }
              var U = S("Arguments");
              !(function () {
                U(arguments) ||
                  (U = function (e) {
                    return H(e, "callee");
                  });
              })();
              var F = U;
              function V(e) {
                return C(e) && b(e);
              }
              function Y(e) {
                return function () {
                  return e;
                };
              }
              function $(e) {
                return function (t) {
                  var n = e(t);
                  return "number" == typeof n && n >= 0 && n <= w;
                };
              }
              function X(e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              }
              var G = X("byteLength"),
                K = $(G),
                Z = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
              var Q = u
                  ? function (e) {
                      return h ? h(e) && !D(e) : K(e) && Z.test(l.call(e));
                    }
                  : Y(!1),
                J = X("length");
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
                  s = (O(i) && i.prototype) || r,
                  o = "constructor";
                for (H(e, o) && !t.contains(o) && t.push(o); n--; ) (o = v[n]) in e && e[o] !== s[o] && !t.contains(o) && t.push(o);
              }
              function te(e) {
                if (!k(e)) return [];
                if (p) return p(e);
                var t = [];
                for (var n in e) H(e, n) && t.push(n);
                return m && ee(e, t), t;
              }
              function ne(e, t) {
                var n = te(t),
                  i = n.length;
                if (null == e) return !i;
                for (var r = Object(e), s = 0; s < i; s++) {
                  var o = n[s];
                  if (t[o] !== r[o] || !(o in r)) return !1;
                }
                return !0;
              }
              function ie(e) {
                return e instanceof ie ? e : this instanceof ie ? void (this._wrapped = e) : new ie(e);
              }
              function re(e) {
                return new Uint8Array(e.buffer || e, e.byteOffset || 0, G(e));
              }
              (ie.VERSION = t),
                (ie.prototype.value = function () {
                  return this._wrapped;
                }),
                (ie.prototype.valueOf = ie.prototype.toJSON = ie.prototype.value),
                (ie.prototype.toString = function () {
                  return String(this._wrapped);
                });
              var se = "[object DataView]";
              function oe(e, t, n, i) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var r = typeof e;
                return ("function" === r || "object" === r || "object" == typeof t) && ae(e, t, n, i);
              }
              function ae(e, t, n, i) {
                e instanceof ie && (e = e._wrapped), t instanceof ie && (t = t._wrapped);
                var r = l.call(e);
                if (r !== l.call(t)) return !1;
                if (L && "[object Object]" == r && D(e)) {
                  if (!D(t)) return !1;
                  r = se;
                }
                switch (r) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + e == "" + t;
                  case "[object Number]":
                    return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                  case "[object Date]":
                  case "[object Boolean]":
                    return +e == +t;
                  case "[object Symbol]":
                    return s.valueOf.call(e) === s.valueOf.call(t);
                  case "[object ArrayBuffer]":
                  case se:
                    return ae(re(e), re(t), n, i);
                }
                var o = "[object Array]" === r;
                if (!o && Q(e)) {
                  if (G(e) !== G(t)) return !1;
                  if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
                  o = !0;
                }
                if (!o) {
                  if ("object" != typeof e || "object" != typeof t) return !1;
                  var a = e.constructor,
                    c = t.constructor;
                  if (a !== c && !(O(a) && a instanceof a && O(c) && c instanceof c) && "constructor" in e && "constructor" in t) return !1;
                }
                i = i || [];
                for (var u = (n = n || []).length; u--; ) if (n[u] === e) return i[u] === t;
                if ((n.push(e), i.push(t), o)) {
                  if ((u = e.length) !== t.length) return !1;
                  for (; u--; ) if (!oe(e[u], t[u], n, i)) return !1;
                } else {
                  var d,
                    _ = te(e);
                  if (((u = _.length), te(t).length !== u)) return !1;
                  for (; u--; ) if (!H(t, (d = _[u])) || !oe(e[d], t[d], n, i)) return !1;
                }
                return n.pop(), i.pop(), !0;
              }
              function le(e) {
                if (!k(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return m && ee(e, t), t;
              }
              function ce(e) {
                var t = J(e);
                return function (n) {
                  if (null == n) return !1;
                  var i = le(n);
                  if (J(i)) return !1;
                  for (var r = 0; r < t; r++) if (!O(n[e[r]])) return !1;
                  return e !== fe || !O(n[ue]);
                };
              }
              var ue = "forEach",
                de = ["clear", "delete"],
                _e = ["get", "has", "set"],
                pe = de.concat(ue, _e),
                fe = de.concat(_e),
                he = ["add"].concat(de, ue, "has"),
                be = M ? ce(pe) : S("Map"),
                ge = M ? ce(fe) : S("WeakMap"),
                me = M ? ce(he) : S("Set"),
                ve = S("WeakSet");
              function we(e) {
                for (var t = te(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = e[t[r]];
                return i;
              }
              function ye(e) {
                for (var t = {}, n = te(e), i = 0, r = n.length; i < r; i++) t[e[n[i]]] = n[i];
                return t;
              }
              function ke(e) {
                var t = [];
                for (var n in e) O(e[n]) && t.push(n);
                return t.sort();
              }
              function xe(e, t) {
                return function (n) {
                  var i = arguments.length;
                  if ((t && (n = Object(n)), i < 2 || null == n)) return n;
                  for (var r = 1; r < i; r++)
                    for (var s = arguments[r], o = e(s), a = o.length, l = 0; l < a; l++) {
                      var c = o[l];
                      (t && void 0 !== n[c]) || (n[c] = s[c]);
                    }
                  return n;
                };
              }
              var Ae = xe(le),
                Se = xe(te),
                Te = xe(le, !0);
              function Ce(e) {
                if (!k(e)) return {};
                if (f) return f(e);
                var t = function () {};
                t.prototype = e;
                var n = new t();
                return (t.prototype = null), n;
              }
              function ze(e) {
                return k(e) ? (W(e) ? e.slice() : Ae({}, e)) : e;
              }
              function Ee(e) {
                return W(e) ? e : [e];
              }
              function Ie(e) {
                return ie.toPath(e);
              }
              function je(e, t) {
                for (var n = t.length, i = 0; i < n; i++) {
                  if (null == e) return;
                  e = e[t[i]];
                }
                return n ? e : void 0;
              }
              function qe(e, t, n) {
                var i = je(e, Ie(t));
                return x(i) ? n : i;
              }
              function Pe(e) {
                return e;
              }
              function Re(e) {
                return (
                  (e = Se({}, e)),
                  function (t) {
                    return ne(t, e);
                  }
                );
              }
              function Oe(e) {
                return (
                  (e = Ie(e)),
                  function (t) {
                    return je(t, e);
                  }
                );
              }
              function Be(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function (n) {
                      return e.call(t, n);
                    };
                  case 3:
                    return function (n, i, r) {
                      return e.call(t, n, i, r);
                    };
                  case 4:
                    return function (n, i, r, s) {
                      return e.call(t, n, i, r, s);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              }
              function Le(e, t, n) {
                return null == e ? Pe : O(e) ? Be(e, t, n) : k(e) && !W(e) ? Re(e) : Oe(e);
              }
              function Me(e, t) {
                return Le(e, t, 1 / 0);
              }
              function Ne(e, t, n) {
                return ie.iteratee !== Me ? ie.iteratee(e, t) : Le(e, t, n);
              }
              function De() {}
              function We(e, t) {
                return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
              }
              (ie.toPath = Ee), (ie.iteratee = Me);
              var He =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              function Ue(e) {
                var t = function (t) {
                    return e[t];
                  },
                  n = "(?:" + te(e).join("|") + ")",
                  i = RegExp(n),
                  r = RegExp(n, "g");
                return function (e) {
                  return (e = null == e ? "" : "" + e), i.test(e) ? e.replace(r, t) : e;
                };
              }
              var Fe = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                Ve = Ue(Fe),
                Ye = Ue(ye(Fe)),
                $e = (ie.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
                Xe = /(.)^/,
                Ge = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Ke = /\\|'|\r|\n|\u2028|\u2029/g;
              function Ze(e) {
                return "\\" + Ge[e];
              }
              var Qe = /^\s*(\w|\$)+\s*$/;
              var Je = 0;
              function et(e, t, n, i, r) {
                if (!(i instanceof t)) return e.apply(n, r);
                var s = Ce(e.prototype),
                  o = e.apply(s, r);
                return k(o) ? o : s;
              }
              var tt = y(function (e, t) {
                var n = tt.placeholder,
                  i = function () {
                    for (var r = 0, s = t.length, o = Array(s), a = 0; a < s; a++) o[a] = t[a] === n ? arguments[r++] : t[a];
                    for (; r < arguments.length; ) o.push(arguments[r++]);
                    return et(e, i, this, this, o);
                  };
                return i;
              });
              tt.placeholder = ie;
              var nt = y(function (e, t, n) {
                  if (!O(e)) throw new TypeError("Bind must be called on a function");
                  var i = y(function (r) {
                    return et(e, i, t, this, n.concat(r));
                  });
                  return i;
                }),
                it = $(J);
              function rt(e, t, n, i) {
                if (((i = i || []), t || 0 === t)) {
                  if (t <= 0) return i.concat(e);
                } else t = 1 / 0;
                for (var r = i.length, s = 0, o = J(e); s < o; s++) {
                  var a = e[s];
                  if (it(a) && (W(a) || F(a)))
                    if (t > 1) rt(a, t - 1, n, i), (r = i.length);
                    else for (var l = 0, c = a.length; l < c; ) i[r++] = a[l++];
                  else n || (i[r++] = a);
                }
                return i;
              }
              var st = y(function (e, t) {
                var n = (t = rt(t, !1, !1)).length;
                if (n < 1) throw new Error("bindAll must be passed function names");
                for (; n--; ) {
                  var i = t[n];
                  e[i] = nt(e[i], e);
                }
                return e;
              });
              var ot = y(function (e, t, n) {
                  return setTimeout(function () {
                    return e.apply(null, n);
                  }, t);
                }),
                at = tt(ot, ie, 1);
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
              var ut = tt(ct, 2);
              function dt(e, t, n) {
                t = Ne(t, n);
                for (var i, r = te(e), s = 0, o = r.length; s < o; s++) if (t(e[(i = r[s])], i, e)) return i;
              }
              function _t(e) {
                return function (t, n, i) {
                  n = Ne(n, i);
                  for (var r = J(t), s = e > 0 ? 0 : r - 1; s >= 0 && s < r; s += e) if (n(t[s], s, t)) return s;
                  return -1;
                };
              }
              var pt = _t(1),
                ft = _t(-1);
              function ht(e, t, n, i) {
                for (var r = (n = Ne(n, i, 1))(t), s = 0, o = J(e); s < o; ) {
                  var a = Math.floor((s + o) / 2);
                  n(e[a]) < r ? (s = a + 1) : (o = a);
                }
                return s;
              }
              function bt(e, t, n) {
                return function (i, r, s) {
                  var o = 0,
                    l = J(i);
                  if ("number" == typeof s) e > 0 ? (o = s >= 0 ? s : Math.max(s + l, o)) : (l = s >= 0 ? Math.min(s + 1, l) : s + l + 1);
                  else if (n && s && l) return i[(s = n(i, r))] === r ? s : -1;
                  if (r != r) return (s = t(a.call(i, o, l), V)) >= 0 ? s + o : -1;
                  for (s = e > 0 ? o : l - 1; s >= 0 && s < l; s += e) if (i[s] === r) return s;
                  return -1;
                };
              }
              var gt = bt(1, pt, ht),
                mt = bt(-1, ft);
              function vt(e, t, n) {
                var i = (it(e) ? pt : dt)(e, t, n);
                if (void 0 !== i && -1 !== i) return e[i];
              }
              function wt(e, t, n) {
                var i, r;
                if (((t = Be(t, n)), it(e))) for (i = 0, r = e.length; i < r; i++) t(e[i], i, e);
                else {
                  var s = te(e);
                  for (i = 0, r = s.length; i < r; i++) t(e[s[i]], s[i], e);
                }
                return e;
              }
              function yt(e, t, n) {
                t = Ne(t, n);
                for (var i = !it(e) && te(e), r = (i || e).length, s = Array(r), o = 0; o < r; o++) {
                  var a = i ? i[o] : o;
                  s[o] = t(e[a], a, e);
                }
                return s;
              }
              function kt(e) {
                var t = function (t, n, i, r) {
                  var s = !it(t) && te(t),
                    o = (s || t).length,
                    a = e > 0 ? 0 : o - 1;
                  for (r || ((i = t[s ? s[a] : a]), (a += e)); a >= 0 && a < o; a += e) {
                    var l = s ? s[a] : a;
                    i = n(i, t[l], l, t);
                  }
                  return i;
                };
                return function (e, n, i, r) {
                  var s = arguments.length >= 3;
                  return t(e, Be(n, r, 4), i, s);
                };
              }
              var xt = kt(1),
                At = kt(-1);
              function St(e, t, n) {
                var i = [];
                return (
                  (t = Ne(t, n)),
                  wt(e, function (e, n, r) {
                    t(e, n, r) && i.push(e);
                  }),
                  i
                );
              }
              function Tt(e, t, n) {
                t = Ne(t, n);
                for (var i = !it(e) && te(e), r = (i || e).length, s = 0; s < r; s++) {
                  var o = i ? i[s] : s;
                  if (!t(e[o], o, e)) return !1;
                }
                return !0;
              }
              function Ct(e, t, n) {
                t = Ne(t, n);
                for (var i = !it(e) && te(e), r = (i || e).length, s = 0; s < r; s++) {
                  var o = i ? i[s] : s;
                  if (t(e[o], o, e)) return !0;
                }
                return !1;
              }
              function zt(e, t, n, i) {
                return it(e) || (e = we(e)), ("number" != typeof n || i) && (n = 0), gt(e, t, n) >= 0;
              }
              var Et = y(function (e, t, n) {
                var i, r;
                return (
                  O(t) ? (r = t) : ((t = Ie(t)), (i = t.slice(0, -1)), (t = t[t.length - 1])),
                  yt(e, function (e) {
                    var s = r;
                    if (!s) {
                      if ((i && i.length && (e = je(e, i)), null == e)) return;
                      s = e[t];
                    }
                    return null == s ? s : s.apply(e, n);
                  })
                );
              });
              function It(e, t) {
                return yt(e, Oe(t));
              }
              function jt(e, t, n) {
                var i,
                  r,
                  s = -1 / 0,
                  o = -1 / 0;
                if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                  for (var a = 0, l = (e = it(e) ? e : we(e)).length; a < l; a++) null != (i = e[a]) && i > s && (s = i);
                else
                  (t = Ne(t, n)),
                    wt(e, function (e, n, i) {
                      ((r = t(e, n, i)) > o || (r === -1 / 0 && s === -1 / 0)) && ((s = e), (o = r));
                    });
                return s;
              }
              function qt(e, t, n) {
                if (null == t || n) return it(e) || (e = we(e)), e[We(e.length - 1)];
                var i = it(e) ? ze(e) : we(e),
                  r = J(i);
                t = Math.max(Math.min(t, r), 0);
                for (var s = r - 1, o = 0; o < t; o++) {
                  var a = We(o, s),
                    l = i[o];
                  (i[o] = i[a]), (i[a] = l);
                }
                return i.slice(0, t);
              }
              function Pt(e, t) {
                return function (n, i, r) {
                  var s = t ? [[], []] : {};
                  return (
                    (i = Ne(i, r)),
                    wt(n, function (t, r) {
                      var o = i(t, r, n);
                      e(s, t, o);
                    }),
                    s
                  );
                };
              }
              var Rt = Pt(function (e, t, n) {
                  H(e, n) ? e[n].push(t) : (e[n] = [t]);
                }),
                Ot = Pt(function (e, t, n) {
                  e[n] = t;
                }),
                Bt = Pt(function (e, t, n) {
                  H(e, n) ? e[n]++ : (e[n] = 1);
                }),
                Lt = Pt(function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                }, !0),
                Mt = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
              function Nt(e, t, n) {
                return t in n;
              }
              var Dt = y(function (e, t) {
                  var n = {},
                    i = t[0];
                  if (null == e) return n;
                  O(i) ? (t.length > 1 && (i = Be(i, t[1])), (t = le(e))) : ((i = Nt), (t = rt(t, !1, !1)), (e = Object(e)));
                  for (var r = 0, s = t.length; r < s; r++) {
                    var o = t[r],
                      a = e[o];
                    i(a, o, e) && (n[o] = a);
                  }
                  return n;
                }),
                Wt = y(function (e, t) {
                  var n,
                    i = t[0];
                  return (
                    O(i)
                      ? ((i = lt(i)), t.length > 1 && (n = t[1]))
                      : ((t = yt(rt(t, !1, !1), String)),
                        (i = function (e, n) {
                          return !zt(t, n);
                        })),
                    Dt(e, i, n)
                  );
                });
              function Ht(e, t, n) {
                return a.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
              }
              function Ut(e, t, n) {
                return null == e || e.length < 1 ? (null == t || n ? void 0 : []) : null == t || n ? e[0] : Ht(e, e.length - t);
              }
              function Ft(e, t, n) {
                return a.call(e, null == t || n ? 1 : t);
              }
              var Vt = y(function (e, t) {
                  return (
                    (t = rt(t, !0, !0)),
                    St(e, function (e) {
                      return !zt(t, e);
                    })
                  );
                }),
                Yt = y(function (e, t) {
                  return Vt(e, t);
                });
              function $t(e, t, n, i) {
                A(t) || ((i = n), (n = t), (t = !1)), null != n && (n = Ne(n, i));
                for (var r = [], s = [], o = 0, a = J(e); o < a; o++) {
                  var l = e[o],
                    c = n ? n(l, o, e) : l;
                  t && !n ? ((o && s === c) || r.push(l), (s = c)) : n ? zt(s, c) || (s.push(c), r.push(l)) : zt(r, l) || r.push(l);
                }
                return r;
              }
              var Xt = y(function (e) {
                return $t(rt(e, !0, !0));
              });
              function Gt(e) {
                for (var t = (e && jt(e, J).length) || 0, n = Array(t), i = 0; i < t; i++) n[i] = It(e, i);
                return n;
              }
              var Kt = y(Gt);
              function Zt(e, t) {
                return e._chain ? ie(t).chain() : t;
              }
              function Qt(e) {
                return (
                  wt(ke(e), function (t) {
                    var n = (ie[t] = e[t]);
                    ie.prototype[t] = function () {
                      var e = [this._wrapped];
                      return o.apply(e, arguments), Zt(this, n.apply(ie, e));
                    };
                  }),
                  ie
                );
              }
              wt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = i[e];
                ie.prototype[e] = function () {
                  var n = this._wrapped;
                  return (
                    null != n && (t.apply(n, arguments), ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0]), Zt(this, n)
                  );
                };
              }),
                wt(["concat", "join", "slice"], function (e) {
                  var t = i[e];
                  ie.prototype[e] = function () {
                    var e = this._wrapped;
                    return null != e && (e = t.apply(e, arguments)), Zt(this, e);
                  };
                });
              var Jt = {
                  __proto__: null,
                  VERSION: t,
                  restArguments: y,
                  isObject: k,
                  isNull: function (e) {
                    return null === e;
                  },
                  isUndefined: x,
                  isBoolean: A,
                  isElement: function (e) {
                    return !(!e || 1 !== e.nodeType);
                  },
                  isString: T,
                  isNumber: C,
                  isDate: z,
                  isRegExp: E,
                  isError: I,
                  isSymbol: j,
                  isArrayBuffer: q,
                  isDataView: D,
                  isArray: W,
                  isFunction: O,
                  isArguments: F,
                  isFinite: function (e) {
                    return !j(e) && g(e) && !isNaN(parseFloat(e));
                  },
                  isNaN: V,
                  isTypedArray: Q,
                  isEmpty: function (e) {
                    if (null == e) return !0;
                    var t = J(e);
                    return "number" == typeof t && (W(e) || T(e) || F(e)) ? 0 === t : 0 === J(te(e));
                  },
                  isMatch: ne,
                  isEqual: function (e, t) {
                    return oe(e, t);
                  },
                  isMap: be,
                  isWeakMap: ge,
                  isSet: me,
                  isWeakSet: ve,
                  keys: te,
                  allKeys: le,
                  values: we,
                  pairs: function (e) {
                    for (var t = te(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = [t[r], e[t[r]]];
                    return i;
                  },
                  invert: ye,
                  functions: ke,
                  methods: ke,
                  extend: Ae,
                  extendOwn: Se,
                  assign: Se,
                  defaults: Te,
                  create: function (e, t) {
                    var n = Ce(e);
                    return t && Se(n, t), n;
                  },
                  clone: ze,
                  tap: function (e, t) {
                    return t(e), e;
                  },
                  get: qe,
                  has: function (e, t) {
                    for (var n = (t = Ie(t)).length, i = 0; i < n; i++) {
                      var r = t[i];
                      if (!H(e, r)) return !1;
                      e = e[r];
                    }
                    return !!n;
                  },
                  mapObject: function (e, t, n) {
                    t = Ne(t, n);
                    for (var i = te(e), r = i.length, s = {}, o = 0; o < r; o++) {
                      var a = i[o];
                      s[a] = t(e[a], a, e);
                    }
                    return s;
                  },
                  identity: Pe,
                  constant: Y,
                  noop: De,
                  toPath: Ee,
                  property: Oe,
                  propertyOf: function (e) {
                    return null == e
                      ? De
                      : function (t) {
                          return qe(e, t);
                        };
                  },
                  matcher: Re,
                  matches: Re,
                  times: function (e, t, n) {
                    var i = Array(Math.max(0, e));
                    t = Be(t, n, 1);
                    for (var r = 0; r < e; r++) i[r] = t(r);
                    return i;
                  },
                  random: We,
                  now: He,
                  escape: Ve,
                  unescape: Ye,
                  templateSettings: $e,
                  template: function (e, t, n) {
                    !t && n && (t = n), (t = Te({}, t, ie.templateSettings));
                    var i = RegExp(
                        [(t.escape || Xe).source, (t.interpolate || Xe).source, (t.evaluate || Xe).source].join("|") + "|$",
                        "g"
                      ),
                      r = 0,
                      s = "__p+='";
                    e.replace(i, function (t, n, i, o, a) {
                      return (
                        (s += e.slice(r, a).replace(Ke, Ze)),
                        (r = a + t.length),
                        n
                          ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                          : i
                          ? (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                          : o && (s += "';\n" + o + "\n__p+='"),
                        t
                      );
                    }),
                      (s += "';\n");
                    var o,
                      a = t.variable;
                    if (a) {
                      if (!Qe.test(a)) throw new Error("variable is not a bare identifier: " + a);
                    } else (s = "with(obj||{}){\n" + s + "}\n"), (a = "obj");
                    s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    try {
                      o = new Function(a, "_", s);
                    } catch (e) {
                      throw ((e.source = s), e);
                    }
                    var l = function (e) {
                      return o.call(this, e, ie);
                    };
                    return (l.source = "function(" + a + "){\n" + s + "}"), l;
                  },
                  result: function (e, t, n) {
                    var i = (t = Ie(t)).length;
                    if (!i) return O(n) ? n.call(e) : n;
                    for (var r = 0; r < i; r++) {
                      var s = null == e ? void 0 : e[t[r]];
                      void 0 === s && ((s = n), (r = i)), (e = O(s) ? s.call(e) : s);
                    }
                    return e;
                  },
                  uniqueId: function (e) {
                    var t = ++Je + "";
                    return e ? e + t : t;
                  },
                  chain: function (e) {
                    var t = ie(e);
                    return (t._chain = !0), t;
                  },
                  iteratee: Me,
                  partial: tt,
                  bind: nt,
                  bindAll: st,
                  memoize: function (e, t) {
                    var n = function (i) {
                      var r = n.cache,
                        s = "" + (t ? t.apply(this, arguments) : i);
                      return H(r, s) || (r[s] = e.apply(this, arguments)), r[s];
                    };
                    return (n.cache = {}), n;
                  },
                  delay: ot,
                  defer: at,
                  throttle: function (e, t, n) {
                    var i,
                      r,
                      s,
                      o,
                      a = 0;
                    n || (n = {});
                    var l = function () {
                        (a = !1 === n.leading ? 0 : He()), (i = null), (o = e.apply(r, s)), i || (r = s = null);
                      },
                      c = function () {
                        var c = He();
                        a || !1 !== n.leading || (a = c);
                        var u = t - (c - a);
                        return (
                          (r = this),
                          (s = arguments),
                          u <= 0 || u > t
                            ? (i && (clearTimeout(i), (i = null)), (a = c), (o = e.apply(r, s)), i || (r = s = null))
                            : i || !1 === n.trailing || (i = setTimeout(l, u)),
                          o
                        );
                      };
                    return (
                      (c.cancel = function () {
                        clearTimeout(i), (a = 0), (i = r = s = null);
                      }),
                      c
                    );
                  },
                  debounce: function (e, t, n) {
                    var i,
                      r,
                      s,
                      o,
                      a,
                      l = function () {
                        var c = He() - r;
                        t > c ? (i = setTimeout(l, t - c)) : ((i = null), n || (o = e.apply(a, s)), i || (s = a = null));
                      },
                      c = y(function (c) {
                        return (a = this), (s = c), (r = He()), i || ((i = setTimeout(l, t)), n && (o = e.apply(a, s))), o;
                      });
                    return (
                      (c.cancel = function () {
                        clearTimeout(i), (i = s = a = null);
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
                  once: ut,
                  findKey: dt,
                  findIndex: pt,
                  findLastIndex: ft,
                  sortedIndex: ht,
                  indexOf: gt,
                  lastIndexOf: mt,
                  find: vt,
                  detect: vt,
                  findWhere: function (e, t) {
                    return vt(e, Re(t));
                  },
                  each: wt,
                  forEach: wt,
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
                    return St(e, lt(Ne(t)), n);
                  },
                  every: Tt,
                  all: Tt,
                  some: Ct,
                  any: Ct,
                  contains: zt,
                  includes: zt,
                  include: zt,
                  invoke: Et,
                  pluck: It,
                  where: function (e, t) {
                    return St(e, Re(t));
                  },
                  max: jt,
                  min: function (e, t, n) {
                    var i,
                      r,
                      s = 1 / 0,
                      o = 1 / 0;
                    if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                      for (var a = 0, l = (e = it(e) ? e : we(e)).length; a < l; a++) null != (i = e[a]) && i < s && (s = i);
                    else
                      (t = Ne(t, n)),
                        wt(e, function (e, n, i) {
                          ((r = t(e, n, i)) < o || (r === 1 / 0 && s === 1 / 0)) && ((s = e), (o = r));
                        });
                    return s;
                  },
                  shuffle: function (e) {
                    return qt(e, 1 / 0);
                  },
                  sample: qt,
                  sortBy: function (e, t, n) {
                    var i = 0;
                    return (
                      (t = Ne(t, n)),
                      It(
                        yt(e, function (e, n, r) {
                          return { value: e, index: i++, criteria: t(e, n, r) };
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
                  groupBy: Rt,
                  indexBy: Ot,
                  countBy: Bt,
                  partition: Lt,
                  toArray: function (e) {
                    return e ? (W(e) ? a.call(e) : T(e) ? e.match(Mt) : it(e) ? yt(e, Pe) : we(e)) : [];
                  },
                  size: function (e) {
                    return null == e ? 0 : it(e) ? e.length : te(e).length;
                  },
                  pick: Dt,
                  omit: Wt,
                  first: Ut,
                  head: Ut,
                  take: Ut,
                  initial: Ht,
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
                    return rt(e, t, !1);
                  },
                  without: Yt,
                  uniq: $t,
                  unique: $t,
                  union: Xt,
                  intersection: function (e) {
                    for (var t = [], n = arguments.length, i = 0, r = J(e); i < r; i++) {
                      var s = e[i];
                      if (!zt(t, s)) {
                        var o;
                        for (o = 1; o < n && zt(arguments[o], s); o++);
                        o === n && t.push(s);
                      }
                    }
                    return t;
                  },
                  difference: Vt,
                  unzip: Gt,
                  transpose: Gt,
                  zip: Kt,
                  object: function (e, t) {
                    for (var n = {}, i = 0, r = J(e); i < r; i++) t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
                    return n;
                  },
                  range: function (e, t, n) {
                    null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
                    for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), s = 0; s < i; s++, e += n) r[s] = e;
                    return r;
                  },
                  chunk: function (e, t) {
                    if (null == t || t < 1) return [];
                    for (var n = [], i = 0, r = e.length; i < r; ) n.push(a.call(e, i, (i += t)));
                    return n;
                  },
                  mixin: Qt,
                  default: ie
                },
                en = Qt(Jt);
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
    97: [
      function (e, t, n) {
        t.exports =
          '<nav class="indicator-groups">\n  <nav class="indicator-group indicator-group-center offers">\n    <nav class="indicator-subgroup offers">\n      <div data-subview="Offers"></div>\n    </nav>\n  </nav>\n\n  <nav class="indicator-group indicator-group-right offers">\n    <div data-subview="Close"></div>\n  </nav>\n</nav>\n';
      },
      {}
    ],
    98: [
      function (e, t, n) {
        t.exports =
          '<a id="close-indicator"\n  class="indicator close-button {{# for_offers_bar }}close-offers-button{{/ for_offers_bar }}"\n\n  {{# for_offers_dash }}\n    href="#offers/minimized"\n  {{/ for_offers_dash }}\n\n  {{^ for_offers_dash }}\n    href="#minimized"\n  {{/ for_offers_dash }}\n\n  data-event="Indicator"\n  data-type="Close"\n  data-context="{{ context }}">\n  {{# for_offers_bar }}\n    <img src="/img/close-offers-bar.svg" width="16" height="16" />\n  {{/ for_offers_bar }}\n\n  {{^ for_offers_bar }}\n    <img src="/img/close.svg" width="16" height="16" />\n  {{/ for_offers_bar }}\n</a>\n';
      },
      {}
    ],
    99: [
      function (e, t, n) {
        t.exports =
          '<nav class="indicator-groups mse-bar">\n  <nav class="indicator-group indicator-group-left indicator-group-message">\n    <div class="logo"></div>\n    <span class="indicator-group-text">{{> msg_mse_bar_warning }}</span>\n  </nav>\n\n  <nav class="indicator-group indicator-group-right">\n    <button class="indicator-group-button primary-action" data-take-me-away data-href="{{> lnk_avira }}">{{> lb_mse_take_me_away }}</button>\n    <button class="indicator-group-button secondary-action" data-no-offer>{{> lb_mse_hide_warning }}</button>\n    <div data-subview="Close"></div>\n  </nav>\n</nav>\n';
      },
      {}
    ],
    100: [
      function (e, t, n) {
        t.exports =
          '<div id="indicatorsArea" class="appArea"></div>\n<div class="dash-background"></div>\n<div class="dash-container">\n  <div id="dashItemArea" class="appArea dash"></div>\n</div>\n<div id="tourArea" class="tour-container"></div>\n<div id="viewArea" class="view-container"></div>\n';
      },
      {}
    ],
    101: [
      function (e, t, n) {
        t.exports =
          '<nav class="indicator-groups unsafe-content-bar">\n  <nav class="indicator-group indicator-group-left indicator-group-message">\n    <div class="logo"></div>\n    <span class="indicator-group-text">{{> lb_unsafe_content_bar_warning }}</span>\n  </nav>\n\n  <nav class="indicator-group indicator-group-right">\n    {{#UCWarningIgnoreAllowed}}\n      <button class="indicator-group-button ignore-button primary-action">{{> lb_unsafe_content_bar_ignore }}</button>\n    {{/UCWarningIgnoreAllowed}}\n    <div data-subview="Close"></div>\n  </nav>\n</nav>\n';
      },
      {}
    ],
    102: [
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
    103: [
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
    104: [
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
    105: [
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
    106: [
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
    107: [
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
    108: [
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
    109: [
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
    110: [
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
    111: [
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
    112: [
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
    113: [
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
    114: [
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
      { "core-js/modules/es6.array.iterator.js": 65, "core-js/modules/web.dom.iterable.js": 67 }
    ],
    115: [
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
        "i18n/de-DE": 102,
        "i18n/en-US": 103,
        "i18n/es-ES": 104,
        "i18n/fr-FR": 105,
        "i18n/it-IT": 106,
        "i18n/ja-JP": 107,
        "i18n/nl-NL": 108,
        "i18n/pt-BR": 109,
        "i18n/ru-RU": 110,
        "i18n/tr-TR": 111,
        "i18n/zh-CN": 112,
        "i18n/zh-TW": 113
      }
    ],
    116: [
      function (e, t, n) {
        "use strict";
        const i = e("underscore"),
          r = e("background/localStorage").getInstance(),
          s = "config_overrides",
          o = e("configuration"),
          a = (e, t) => {
            e = e || {};
            for (const n in t)
              if (t.hasOwnProperty(n)) {
                const i = t[n];
                void 0 === e[n] || "object" != typeof i || i instanceof Array ? (e[n] = i) : (e[n] = a(e[n], i));
              }
            return e;
          };
        i.extend(o, {
          getConfigOverrides() {
            try {
              return JSON.parse(r.getItem(s));
            } catch (e) {
              return {};
            }
          },
          setConfigOverrides(e) {
            const t = a(this.getConfigOverrides(), e);
            r.setItem(s, JSON.stringify(t));
          },
          clearConfigOverrides() {
            r.removeItem(s);
          },
          mergeOverrides() {
            a(this, this.getConfigOverrides());
          }
        }),
          (t.exports = o);
      },
      { "background/localStorage": 1, configuration: 2, underscore: 96 }
    ],
    117: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Models/ModelBackground");
        t.exports = class extends i {
          get defaults() {
            return { strings: {} };
          }
        };
      },
      { "content/core/Models/ModelBackground": 136 }
    ],
    118: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Models/ModelBackground"),
          r = e("content/messagingInterface");
        t.exports = class extends i {
          loadAlternatives(e) {
            r.publish("PUA:getData", { url: this.get("url") }, (t) => {
              this.set(t), "function" == typeof e && e();
            });
          }
        };
      },
      { "content/core/Models/ModelBackground": 136, "content/messagingInterface": 145 }
    ],
    119: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Models/ModelBackground");
        t.exports = class extends i {
          get defaults() {
            return { url: null, categories: [], title: null, description: null, linksAmount: null };
          }
        };
      },
      { "content/core/Models/ModelBackground": 136 }
    ],
    120: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Models/ModelBackground"),
          r = e("content/Models/URLClassification"),
          s = e("content/Models/PUA"),
          o = e("content/Models/SERP"),
          a = e("modules/offers/content/iframe/models/Ciuvo"),
          l = e("content/messagingInterface");
        t.exports = class extends i {
          get defaults() {
            return { route: null, url: "avira.com", is_exempt: null, puaUrl: null, offersActive: !1, currentRoute: null, serp: null };
          }
          get origin() {
            return "STATE_MODEL";
          }
          initialize() {
            l.subscribe("router:beforeRouteChange", this._onBeforeRouteChange.bind(this)),
              this.on("change:puaUrl", () => this.get("pua").set({ url: this.get("puaUrl"), domain: this.get("puaDomain") })),
              this.setSubModel("ciuvo", a.getInstance()),
              this.setSubModel("serp", o.getInstance()),
              this.setSubModel("urlClassification", r.getInstance()),
              this.setSubModel("pua", s.getInstance());
          }
          setSubModel(e, t) {
            t && (this.set(e, t), t.set("parent", this));
          }
          isSafe() {
            const e = this.get("categories");
            return !e || e[0] <= 1;
          }
          _onBeforeRouteChange(e) {
            return this.set("currentRoute", e.route);
          }
        };
      },
      {
        "content/Models/PUA": 118,
        "content/Models/SERP": 119,
        "content/Models/URLClassification": 121,
        "content/core/Models/ModelBackground": 136,
        "content/messagingInterface": 145,
        "modules/offers/content/iframe/models/Ciuvo": 151
      }
    ],
    121: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Models/ModelBackground"),
          r = { 0: "unknown", 1: "safe", 2: "malware", 3: "phishing", 4: "spam", 5: "pua", 6: "pua2", 7: "mse" };
        t.exports = class extends i {
          constructor(...e) {
            super(...e), (this.markDomainAsFalseNegative = this.markDomainAsFalseNegative.bind(this));
          }
          get defaults() {
            return {
              url: null,
              categories: [],
              title: null,
              description: null,
              unsafe: null,
              isWarning: null,
              isPUA: null,
              isMSE: null,
              blocked: null,
              isAviraPage: null,
              isSERP: !1,
              isReportedAsFalseNegative: !1,
              isIFrame: window !== top,
              unsafeContentURLs: []
            };
          }
          initialize() {
            super.initialize(),
              this.once("change:hasUnsafeContentException", (e, t) => {
                this.set("hasUnsafeContentExceptionInitial", t);
              });
          }
          getCategoryName() {
            const e = this.get("category");
            return 0 === e || (1 === e && this.get("hasUnsafeContent")) ? "unsafe_content" : r[e];
          }
          isUnsafe() {
            return this.get("unsafe") || this.get("isWarning");
          }
          markDomainAsFalseNegative() {
            return this.set("isReportedAsFalseNegative", !0);
          }
          hasUnsafeContentExceptionChanged() {
            return this.get("hasUnsafeContentException") !== this.get("hasUnsafeContentExceptionInitial");
          }
        };
      },
      { "content/core/Models/ModelBackground": 136 }
    ],
    122: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Routing/Router"),
          r = e("content/Views/BlankIndicators"),
          s = e("content/Views/MaliciousSearchEngineBar"),
          o = e("content/Views/UnsafeContentBar");
        t.exports = class extends i {
          get routes() {
            return {
              minimized: "default",
              "": "default",
              serp: "serp",
              maliciousSearchEngine: "maliciousSearchEngine",
              "unsafeContent/notification": "unsafeContentNotification"
            };
          }
          default() {
            this.setAreas({ indicators: new r() });
          }
          maliciousSearchEngine() {
            this.setAreas({ indicators: new s() });
          }
          unsafeContentNotification() {
            this.setAreas({ indicators: new o() });
          }
        };
      },
      {
        "content/Views/BlankIndicators": 126,
        "content/Views/MaliciousSearchEngineBar": 130,
        "content/Views/UnsafeContentBar": 134,
        "content/core/Routing/Router": 140
      }
    ],
    123: [
      function (e, t, n) {
        "use strict";
        const i = e("jquery"),
          r = e("content/Transitions/Default"),
          s = e("content/Views/Dash/TabView");
        class o extends r {
          static initClass() {
            (this.from = s), (this.to = s), (this.weight = 10), (this.prototype.TRANSITION_DURATION = 500);
          }
          constructor() {
            super(), (this._animate = this._animate.bind(this)), this._initTransition();
          }
          execute(e) {
            let t, n;
            return (
              this._handoverViewElement(),
              this.from.constructor.dashXIndex > this.to.constructor.dashXIndex ? ((t = "Right"), (n = -25)) : ((t = "Left"), (n = 125)),
              this[`_hideTransitionTo${t}`](this.from.$el, () => (this.from.hide(), this.from.remove(), this.from.$el.remove())),
              this.to.render(),
              this.to.$el.css("left", `${n}%`),
              this.to.show(),
              this._showTransition(this.to.$el, e)
            );
          }
          _initTransition() {
            i.easing.easeOutCustomElastic = (e, t, n, i, r) => {
              const s = (t /= r) * t,
                o = s * t;
              return n + i * (-1.49999999999999 * o * s + 2.85249999999999 * s * s + 1.895 * o + -7.195 * s + 4.9475 * t);
            };
          }
          _animate(e, t, n) {
            e.finish().animate({ left: `${t}%` }, this.TRANSITION_DURATION, "easeOutCustomElastic", n);
          }
          _showTransition(e, t) {
            this._animate(e, 50, t);
          }
          _hideTransitionToRight(e, t) {
            this._animate(e, 125, () => {
              e.css("left", "-25%"), "function" == typeof t && t();
            });
          }
          _hideTransitionToLeft(e, t) {
            return this._animate(e, -25, () => {
              e.css("left", "125%"), "function" == typeof t && t();
            });
          }
        }
        o.initClass(), (t.exports = o);
      },
      { "content/Transitions/Default": 124, "content/Views/Dash/TabView": 127, jquery: "jquery" }
    ],
    124: [
      function (e, t, n) {
        "use strict";
        const i = e("jquery"),
          r = e("content/core/Transitions/Base"),
          s = e("content/core/Views/View");
        class o extends r {
          static initClass() {
            (this.from = s), (this.to = s), (this.weight = 1);
          }
          _handoverViewElement() {
            if (!this.from) return;
            const e = this.from.$el,
              t = i("<div>"),
              n = e.attr("id");
            e.attr("id", null), t.attr("id", n), t.insertBefore(e), this.to && this.to.setElement(t);
          }
          execute(e) {
            this._handoverViewElement(),
              e(),
              "function" == typeof e && e(),
              this.to && this.to.render(),
              this.from
                ? (this.from.stopListening(),
                  this.from.hide(() => {
                    this.from.remove(), this.from.$el.remove(), this.to && this.to.show();
                  }))
                : this.to && this.to.show();
          }
        }
        o.initClass(), (t.exports = o);
      },
      { "content/core/Transitions/Base": 141, "content/core/Views/View": 143, jquery: "jquery" }
    ],
    125: [
      function (e, t, n) {
        "use strict";
        const i = e("content/Transitions/Default"),
          r = e("content/Views/Tour/TourStepBase");
        class s extends i {
          static initClass() {
            (this.from = r), (this.to = r), (this.weight = 10), (this.prototype.TRANSITION_DURATION = 500);
          }
          execute(e) {
            this._handoverViewElement(),
              this.from.hide(() => {
                this.from.remove(), this.from.$el.remove();
              }),
              this.to.render(),
              this.to.show(e);
          }
        }
        s.initClass(), (t.exports = s);
      },
      { "content/Transitions/Default": 124, "content/Views/Tour/TourStepBase": 133 }
    ],
    126: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Views/View");
        class r extends i.extend({ id: "indicatorsArea", template: "" }) {
          show(e = () => {}) {
            this.$el.finish().animate({ "margin-top": "0px" }, this.TRANSITION_DURATION, () => e());
          }
          hide(e = () => {}) {
            this.$el.finish().animate({ "margin-top": "0px" }, this.TRANSITION_DURATION, () => e());
          }
        }
        t.exports = r;
      },
      { "content/core/Views/View": 143 }
    ],
    127: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Views/View");
        class r extends i {
          static initClass() {
            (this.dashXIndex = 0), (this.prototype.id = "dashItemArea"), (this.prototype.className = "dash dash-tab");
          }
          show(e) {
            return this.$el.finish().hide().css("opacity", 0).show().animate({ opacity: 1 }, this.TRANSITION_DURATION, e);
          }
        }
        r.initClass(), (t.exports = r);
      },
      { "content/core/Views/View": 143 }
    ],
    128: [
      function (e, t, n) {
        "use strict";
        const i = e("content/Views/Indicators/Indicator"),
          r = e("Indicators/Close.mustache");
        class s extends i {
          static initClass() {
            (this.prototype.template = r),
              (this.prototype.for_offers_bar = !1),
              (this.prototype.for_offers_dash = !1),
              (this.prototype.context = null);
          }
          beforeRender() {
            return { for_offers_bar: this.for_offers_bar, for_offers_dash: this.for_offers_dash, context: this.context };
          }
        }
        s.initClass(), (t.exports = s);
      },
      { "Indicators/Close.mustache": 98, "content/Views/Indicators/Indicator": 129 }
    ],
    129: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Views/View"),
          r = e("content/Models/State");
        class s extends i {
          static initClass() {
            this.prototype.className = "indicator-outer";
          }
          initialize(...e) {
            return (this.model = r.getInstance()), super.initialize(...e);
          }
        }
        s.initClass(), (t.exports = s);
      },
      { "content/Models/State": 120, "content/core/Views/View": 143 }
    ],
    130: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Views/View"),
          r = e("content/Models/URLClassification"),
          s = e("content/messagingInterface"),
          o = e("content/mixpanel"),
          a = e("MaliciousSearchEngineBar.mustache"),
          l = e("content/Views/Indicators/Close");
        class c extends i {
          static initClass() {
            (this.prototype.id = "indicatorsArea"),
              (this.prototype.template = a),
              (this.prototype.className = "indicators-container state-dash shown"),
              (this.prototype.BAR_HEIGHT = 46),
              (this.prototype.subviewConstructors = { Close: l }),
              (this.prototype.events = {
                "click button[data-no-offer]": "_doNotOfferMore",
                "click button[data-take-me-away]": "_takeMeAway"
              });
          }
          initialize(...e) {
            let t = e[0];
            return null == t && (t = {}), (this.model = r.getInstance()), super.initialize(...e);
          }
          show(e) {
            let t = e;
            return (
              null == t && (t = () => {}),
              this.$el.addClass("shown"),
              this.$el.finish().animate({ "margin-top": "0px" }, this.TRANSITION_DURATION, "linear", () => t()),
              o.track("MSE - Bar - Show", { Domain: this.model.get("domain"), URL: this.model.get("url") }),
              (this.subviews.Close.context = "MaliciousSearchEngineBar"),
              this.subviews.Close.render()
            );
          }
          _doNotOfferMore() {
            return (
              o.track("MSE - Bar - Add Exception", { Domain: this.model.get("domain"), URL: this.model.get("url") }),
              s.publish("trustSearchEngine"),
              s.publish("router:navigateTo", { route: "minimized" })
            );
          }
          _takeMeAway(e) {
            return s.publish("navigate", { url: e.target.dataset.href });
          }
        }
        c.initClass(), (t.exports = c);
      },
      {
        "MaliciousSearchEngineBar.mustache": 99,
        "content/Models/URLClassification": 121,
        "content/Views/Indicators/Close": 128,
        "content/core/Views/View": 143,
        "content/messagingInterface": 145,
        "content/mixpanel": 146
      }
    ],
    131: [
      function (e, t, n) {
        "use strict";
        const i = e("jquery"),
          r = {
            reposition(e, t, n) {
              let r,
                s,
                o,
                a = t,
                l = n;
              if (
                (null == l && (l = {}),
                null == a && (a = i("body")),
                null == l.offsetY && (l.offsetY = () => 0),
                null == l.offsetX && (l.offsetX = () => 0),
                !(a && a.length && e && e.length))
              )
                return;
              const c = "static" === a.css("position") ? a.position() : a.offset(),
                u = e.children().outerHeight(),
                d = "point-up point-up-center",
                _ = "point-down point-down-center";
              return (
                a.offset().top + l.offsetY() + u > window.innerHeight
                  ? ((o = c.top - u), (s = d), (r = _))
                  : ((o = c.top + l.offsetY()), (r = d), (s = _)),
                e.css({ top: o, left: c.left + l.offsetX() }),
                e.children(".point-down, .point-up").addClass(r).removeClass(s),
                this
              );
            }
          };
        t.exports = r;
      },
      { jquery: "jquery" }
    ],
    132: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Views/View"),
          r = e("content/mixpanel"),
          s = e("content/messagingInterface"),
          o = e("content/core/Views/EscChainOfResponsibility"),
          a = e("jquery"),
          l = e("underscore"),
          c = e("Top.mustache");
        class u extends i {
          constructor(...e) {
            super(...e),
              (this._onMixpanelEvent = this._onMixpanelEvent.bind(this)),
              (this._onKeyPressed = this._onKeyPressed.bind(this)),
              (this._goToMinimized = this._goToMinimized.bind(this));
          }
          static initClass() {
            (this.prototype.template = c),
              (this.prototype.events = { "click a": "_onAnchorClicked", mousewheel: "_onMousewheel", DOMMouseScroll: "_onMousewheel" });
          }
          initialize(...e) {
            return (
              super.initialize(...e),
              (this._escChain = new o()),
              this.vent.on("esc:on", this._escChain.attach),
              this.vent.on("esc:off", this._escChain.detach),
              this._escChain.attach(this._goToMinimized)
            );
          }
          render(...e) {
            return super.render(...e), this._initEvents();
          }
          _initEvents() {
            this.$el.on("click", "[data-event]", this._onMixpanelEvent), a(document).keyup(this._onKeyPressed);
          }
          _onMixpanelEvent(e) {
            const t = a(e.currentTarget).data();
            return r.track(t.event, l.omit(t, "event"));
          }
          _onMousewheel(e) {
            const t = a(e.target),
              n = t.is(".scrollable") ? t : t.closest(".scrollable"),
              i = n[0];
            return (
              (0 === n.length ||
                (("DOMMouseScroll" === e.originalEvent.type ? e.originalEvent.detail < 0 : e.originalEvent.wheelDelta > 0)
                  ? 0 === i.scrollTop
                  : i.scrollHeight - i.scrollTop - i.clientHeight <= 1)) &&
                e.preventDefault(),
              e.stopPropagation()
            );
          }
          _onAnchorClicked(e) {
            if (["_top", "_blank", "_parent"].includes(e.currentTarget.target)) return !0;
            if (["http:", "https:"].includes(e.currentTarget.protocol)) return !0;
            const t = e.currentTarget.hash.replace(/^#/, "");
            return s.publish("router:navigateTo", { route: t }), e.preventDefault();
          }
          _onKeyPressed(e) {
            27 === e.which && this._onEscKeyPressed();
          }
          _onEscKeyPressed() {
            return this._escChain.trigger();
          }
          _goToMinimized() {
            return s.publish("router:navigateTo", { route: "minimized" });
          }
        }
        u.initClass(), (t.exports = u);
      },
      {
        "Top.mustache": 100,
        "content/core/Views/EscChainOfResponsibility": 142,
        "content/core/Views/View": 143,
        "content/messagingInterface": 145,
        "content/mixpanel": 146,
        jquery: "jquery",
        underscore: 96
      }
    ],
    133: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Views/View"),
          r = e("content/Views/Mixins/Tooltip"),
          s = e("underscore"),
          o = e("jquery");
        class a extends i {
          constructor(...e) {
            super(...e), (this._repositionTooltip = this._repositionTooltip.bind(this));
          }
          static initClass() {
            (this.prototype.id = "tourArea"),
              (this.prototype.className = "tourtip-container"),
              (this.prototype._$tooltip = null),
              (this.prototype._$tooltipOwner = null),
              (this.prototype._tooltipParams = {}),
              (this.prototype._tooltipHelper = {});
          }
          initialize(...e) {
            return super.initialize(...e), s.extend(this._tooltipHelper, r);
          }
          show(e) {
            let t = e;
            return null == t && (t = () => {}), this.setWindowResizeHandler(), this._repositionTooltip(), this.$el.fadeIn(400, () => t());
          }
          hide(e) {
            let t = e;
            return null == t && (t = () => {}), this.$el.fadeOut(400, () => (this.unsetWindowResizeHandler(), t()));
          }
          setWindowResizeHandler() {
            return o(window).on("resize", this._repositionTooltip);
          }
          unsetWindowResizeHandler() {
            return o(window).off("resize", this._repositionTooltip);
          }
          _repositionTooltip() {
            return this._tooltipHelper.reposition(this._$tooltip, this._$tooltipOwner, this._tooltipParams);
          }
          setTooltipRepositioner(e) {
            return (
              (this._$tooltip = e.$tooltip),
              (this._$tooltipOwner = e.$tooltipOwner),
              (this._tooltipParams = { offsetX: e.offsetX, offsetY: e.offsetY }),
              this._repositionTooltip()
            );
          }
        }
        a.initClass(), (t.exports = a);
      },
      { "content/Views/Mixins/Tooltip": 131, "content/core/Views/View": 143, jquery: "jquery", underscore: 96 }
    ],
    134: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Views/View"),
          r = e("content/Models/URLClassification"),
          s = e("content/messagingInterface"),
          o = e("UnsafeContentBar.mustache"),
          a = e("content/Views/Indicators/Close");
        class l extends i {
          static initClass() {
            (this.prototype.id = "indicatorsArea"),
              (this.prototype.template = o),
              (this.prototype.className = "indicators-container state-dash shown"),
              (this.prototype.BAR_HEIGHT = 46),
              (this.prototype.subviewConstructors = { Close: a }),
              (this.prototype.events = { "click .ignore-button": "_ignore", "click .details-button": "_showDetails" });
          }
          initialize(...e) {
            return (this.model = r.getInstance()), super.initialize(...e);
          }
          show(e) {
            let t = e;
            null == t && (t = () => {}),
              this.$el.addClass("shown"),
              this.$el.finish().animate({ "margin-top": "0px" }, this.TRANSITION_DURATION, "linear", () => t()),
              this.subviews.Close.render();
          }
          _close() {
            s.publish("router:navigateTo", { route: "minimized" });
          }
          _ignore() {
            s.publish("ignoreUCWarning"), this._close();
          }
          _showDetails() {
            s.publish("router:navigateTo", { route: "unsafeContent" });
          }
        }
        l.initClass(), (t.exports = l);
      },
      {
        "UnsafeContentBar.mustache": 101,
        "content/Models/URLClassification": 121,
        "content/Views/Indicators/Close": 128,
        "content/core/Views/View": 143,
        "content/messagingInterface": 145
      }
    ],
    135: [
      function (e, t, n) {
        "use strict";
        const i = e("backbone"),
          r = e("jquery"),
          s = e("content/Views/Top"),
          o = e("content/i18n_loader"),
          a = e("content/Models/I18n").getInstance(),
          l = e("content/Routers/App"),
          c = e("content/messagingInterface"),
          u = e("content/appSafetyInit"),
          d = e("content/appOffersInit"),
          _ = () =>
            o.getLocaleStrings(async (e, t) => {
              a.set({ strings: e, language: t });
              new s({ el: r("#top") }).render(), r("body").attr("lang", t), new l();
              const n = await u();
              i.history.start(), d({ isSafe: n });
            });
        (() => {
          try {
            return window.top !== window.self;
          } catch (e) {
            return !1;
          }
        })()
          ? c.publish("checkIframe", null, _)
          : _();
      },
      {
        backbone: 17,
        "content/Models/I18n": 117,
        "content/Routers/App": 122,
        "content/Views/Top": 132,
        "content/appOffersInit": 3,
        "content/appSafetyInit": 4,
        "content/i18n_loader": 144,
        "content/messagingInterface": 145,
        jquery: "jquery"
      }
    ],
    136: [
      function (e, t, n) {
        "use strict";
        const i = e("jquery"),
          r = e("backbone"),
          s = e("content/messagingInterface");
        class o extends r.Model {
          static getInstance() {
            return null == this.instance && (this.instance = new this()), this.instance;
          }
          constructor() {
            super(), (this._listensTo = {});
          }
          sync(e, t) {
            if (!t.id) throw new Error("ID must be specified");
            const n = {
              get: !!["read"].includes(e) && t.id,
              set: !!["create", "update", "patch"].includes(e) && t.id,
              value: t.toJSON(),
              _fromModel: !0
            };
            return (
              this._listen(t.id),
              new i.Deferred((e) => {
                s.publish("bgStorage", n, (t) => (n.get && this.set(t), this.trigger("sync", this), e.resolve(t)));
              })
            );
          }
          _listen(e) {
            this._listensTo[e] ||
              (s.subscribe("bgStorage", (t) => {
                t._fromModel || t.set !== e || this.set(t.value);
              }),
              (this._listensTo[e] = !0));
          }
          toJSON() {
            const e = super.toJSON();
            return delete e.parent, e;
          }
        }
        t.exports = o;
      },
      { backbone: 17, "content/messagingInterface": 145, jquery: "jquery" }
    ],
    137: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Routing/AreasManagement/ViewTransitionStrategy");
        t.exports = class {
          constructor(e, t) {
            (this._transitionStrategy = t || i),
              (this._areas = {}),
              e.forEach((e) => {
                this._areas[e] = null;
              });
          }
          replace(e) {
            Object.keys(this._areas).forEach((t) => {
              this._replaceByAreaName(t, e[t]);
            });
          }
          _replaceByAreaName(e, t) {
            let n;
            null != t && (n = t);
            new this._transitionStrategy(this._areas[e], n).execute(() => {
              this._areas[e] = n;
            });
          }
        };
      },
      { "content/core/Routing/AreasManagement/ViewTransitionStrategy": 138 }
    ],
    138: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Routing/AreasManagement/base/ViewTransitionStrategy"),
          r = e("content/Transitions/DashTransition"),
          s = e("modules/offers/content/iframe/transitions/OffesDashTransition"),
          o = e("content/Transitions/Default"),
          a = e("modules/offers/content/iframe/transitions/OffersIndicatorBarTransition"),
          l = e("content/Transitions/TourStepTransition");
        class c extends i {}
        (c.prototype._transitionList = {
          DashTransition: r,
          OffersDashTransition: s,
          Default: o,
          OffersIndicatorBarTransition: a,
          TourStepTransition: l
        }),
          (t.exports = c);
      },
      {
        "content/Transitions/DashTransition": 123,
        "content/Transitions/Default": 124,
        "content/Transitions/TourStepTransition": 125,
        "content/core/Routing/AreasManagement/base/ViewTransitionStrategy": 139,
        "modules/offers/content/iframe/transitions/OffersIndicatorBarTransition": 155,
        "modules/offers/content/iframe/transitions/OffesDashTransition": 156
      }
    ],
    139: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        class i {
          static initClass() {
            this.prototype.transition = null;
          }
          constructor(e, t) {
            const n = this._findTransition(e, t);
            this.transition = new n(e, t);
          }
          _findTransition(e, t) {
            let n;
            const i = [];
            for (const r in this._transitionList)
              (n = this._transitionList[r]), null != e && e instanceof n.from && null != t && t instanceof n.to && i.push(n);
            let r = this._transitionList.Default,
              s = this._transitionList.Default.weight;
            for (n of Array.from(i)) s < n.weight && ((r = n), (s = n.weight));
            return r;
          }
          execute(e) {
            return this.transition.execute(e);
          }
        }
        i.initClass(), (t.exports = i);
      },
      { "core-js/modules/es6.array.iterator.js": 65, "core-js/modules/web.dom.iterable.js": 67 }
    ],
    140: [
      function (e, t, n) {
        "use strict";
        const i = e("backbone"),
          r = e("content/core/Routing/AreasManagement/AreasManager"),
          s = e("content/messagingInterface");
        e("backbone.routefilter");
        let o = !1;
        class a extends i.Router {
          static initClass() {
            (this.baseName = "router"),
              (this.prototype._areasManager = new r(["indicators", "dashItem", "tour", "view", "headerAndFooter", "mainContent"]));
          }
          initialize() {
            o ||
              ((o = !0),
              s.subscribe(`${this.constructor.baseName}:navigateTo`, (e) => {
                let { trigger: t, replace: n } = e;
                null == t && (t = !0), null == n && (n = !0), this.navigate(e.route, { trigger: t, replace: n });
              })),
              super.initialize();
          }
          before() {
            s.publish(`${this.constructor.baseName}:beforeRouteChange`, { route: i.history.fragment });
          }
          after() {
            s.publish(`${this.constructor.baseName}:afterRouteChange`, { route: i.history.fragment });
          }
          setAreas(e) {
            this._areasManager.replace(e);
          }
        }
        a.initClass(), (t.exports = a);
      },
      {
        backbone: 17,
        "backbone.routefilter": 16,
        "content/core/Routing/AreasManagement/AreasManager": 137,
        "content/messagingInterface": 145
      }
    ],
    141: [
      function (e, t, n) {
        "use strict";
        class i {
          static initClass() {
            this.weight = 0;
          }
          constructor(e, t) {
            (this.from = e), (this.to = t);
          }
          execute() {
            throw new Error("not implemented");
          }
        }
        i.initClass(), (t.exports = i);
      },
      {}
    ],
    142: [
      function (e, t, n) {
        "use strict";
        t.exports = class {
          constructor() {
            (this.attach = this.attach.bind(this)),
              (this.detach = this.detach.bind(this)),
              (this.trigger = this.trigger.bind(this)),
              (this._funcs = []);
          }
          attach(e) {
            this._funcs.push(e);
          }
          detach(e) {
            const t = this._funcs.indexOf(e);
            -1 !== t && this._funcs.splice(t, 1);
          }
          trigger() {
            let e = this._funcs.length;
            const t = () => {
              (e -= 1), e < 0 || this._funcs[e].call(null, t);
            };
            t();
          }
        };
      },
      {}
    ],
    143: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const i = e("mustache"),
          r = e("backbone"),
          s = e("content/Models/I18n").getInstance(),
          o = e("underscore");
        e("backbone-subviews"), e("perfect-scrollbar/jquery")(r.$);
        class a extends r.View {
          constructor(...e) {
            super(...e), (this.render = this.render.bind(this));
          }
          static extend(e, t) {
            const n = this,
              i = class extends n {};
            return o.extend(i.prototype, e), o.extend(i, n, t), (i.__super__ = n.prototype), i;
          }
          initialize(e) {
            let t = e;
            return (
              null == t && (t = {}),
              (this.subviewCreators = o.extend({}, this.subviewCreators, t.subviewCreators)),
              (this.subviewConstructors = o.extend({}, this.subviewConstructors, t.subviewConstructors)),
              (this.i18n = s.get("strings")),
              null == this.template && (this.template = t.template),
              (this.vent = t.vent || r.Events),
              this.initSubviewCreators(),
              r.Subviews.add(this)
            );
          }
          _updateElement() {
            this.id && (this.setElement(document.getElementById(this.id)), this.$el.addClass(this.className));
          }
          toggle(e) {
            let t = e;
            return null == t && (t = this.$el.is(":hidden")), t ? this.show() : this.hide();
          }
          hide(e) {
            let t = e;
            return null == t && (t = () => {}), this.$el.finish().hide(0), t();
          }
          show(e) {
            let t = e;
            return null == t && (t = () => {}), this.$el.finish().show(0), t();
          }
          beforeRender(e) {
            return e;
          }
          afterRender() {}
          isActive() {
            return this.$el.parent().length > 0;
          }
          render() {
            this._updateElement();
            let e = this.model ? this.model.toJSON() : {};
            e = this.beforeRender(e);
            const t = o.extend({}, this.templates, this.i18n),
              n = i.render(this.template, e, t);
            this.hidden && this.$el.hide(), this.$el.html(n);
            const r = this.$el.find(".scrollbar");
            return r.perfectScrollbar({ theme: "avira" }), setTimeout(() => (r.scrollTop(1).scrollTop(0), this.afterRender()), 0), this.$el;
          }
          cleanup() {
            for (const e of Array.from(this.className.split(" "))) {
              if (!e.length) return;
              this.el.classList.remove(e);
            }
          }
          remove() {
            return this.$el.empty(), this.undelegateEvents(), this.stopListening();
          }
          initSubviewCreators() {
            Object.keys(this.subviewConstructors).forEach((e) => {
              const t = this.subviewConstructors[e];
              if (!t) throw new Error(`No constructor for subview ${e} in ${this.constructor.name}`);
              null == this.subviewCreators[e] &&
                (this.subviewCreators[e] = (
                  (e) => () =>
                    new e({ i18n: this.i18n, model: this.model, vent: r.Events })
                )(t));
            });
          }
        }
        (a.prototype.TRANSITION_DURATION = 200),
          (a.prototype.templates = {}),
          (a.prototype.subviewCreators = {}),
          (a.prototype.subviewConstructors = {}),
          (a.prototype.className = ""),
          (t.exports = a);
      },
      {
        backbone: 17,
        "backbone-subviews": 15,
        "content/Models/I18n": 117,
        "core-js/modules/es6.array.iterator.js": 65,
        "core-js/modules/web.dom.iterable.js": 67,
        mustache: "mustache",
        "perfect-scrollbar/jquery": 75,
        underscore: 96
      }
    ],
    144: [
      function (e, t, n) {
        "use strict";
        const i = e("underscore"),
          r = e("config"),
          s = e("Locale"),
          o = e("content/messagingInterface"),
          a = e("Locales");
        t.exports = {
          getLocaleStrings: (e) =>
            new s(r, o).retrieve((t) => {
              const n = i.extend({}, a[r.default_language], a[t]);
              return e(n, t);
            }),
          LOCALES: a
        };
      },
      { Locale: 114, Locales: 115, config: 116, "content/messagingInterface": 145, underscore: 96 }
    ],
    145: [
      function (e, t, n) {
        "use strict";
        const i = e("messenger/Content").getInstance();
        t.exports = i;
      },
      { "messenger/Content": 68 }
    ],
    146: [
      function (e, t, n) {
        "use strict";
        const i = e("content/messagingInterface"),
          r = { track: (e, t, n) => i.publish("Mixpanel:track", { event: e, properties: t }, n) };
        t.exports = r;
      },
      { "content/messagingInterface": 145 }
    ],
    147: [
      function (e, t, n) {
        "use strict";
        const i = e("modules/offers/content/iframe/models/Ciuvo"),
          r = e("content/Models/State"),
          s = e("content/messagingInterface");
        t.exports = class {
          constructor(e) {
            (this.state = r.getInstance()), (this.ciuvo = i.getInstance()), (this.router = e);
          }
          ciuvoNotifications() {
            return this.ciuvo.get("notification");
          }
          _enable(e) {
            if ((this.state.set("offersActive", !0), this.ciuvo.isBrowserStartUpOffers() && e)) return;
            const t = "singleCoupon" === this.ciuvoNotifications().get("type") ? "offers/coupon" : "offers/minimized";
            s.publish("router:navigateTo", { route: t });
          }
          enable(e) {
            return this.ciuvoNotifications()
              ? this._enable(e)
              : this.ciuvo.on("change:notification", () => {
                  this.ciuvoNotifications() && this._enable(e);
                });
          }
        };
      },
      { "content/Models/State": 120, "content/messagingInterface": 145, "modules/offers/content/iframe/models/Ciuvo": 151 }
    ],
    148: [
      function (e, t, n) {
        "use strict";
        const i = e("ms"),
          r = e("content/messagingInterface"),
          s = e("modules/offers/content/Scraper");
        class o {
          constructor() {
            this._onScrapingLoaded = this._onScrapingLoaded.bind(this);
          }
          static initClass() {
            (this.prototype._LOCATION_CHECK_INTERVAL = i("0.5s")),
              (this.prototype._DELAY_BEFORE_RECHECK = i("2s")),
              (this.prototype._JS_SCRIPT_ID = "avira-offers-js-expressions");
          }
          start() {
            return r.publish("AO:contentReady", { url: location.href }, this._onScrapingLoaded);
          }
          _onScrapingLoaded(e) {
            e && (this._scrapePage(e), e.rescrape && this._addLocationListener(() => this._scrapePage(e)));
          }
          _addLocationListener(e) {
            let t = location.toString();
            setInterval(() => {
              location.toString() !== t && ((t = location.toString()), setTimeout(e, this._DELAY_BEFORE_RECHECK));
            }, this._LOCATION_CHECK_INTERVAL);
          }
          _scrapePage(e) {
            const t = new s(document, e),
              n = { url: location.href, data: null, js_data: t.scrapeJS(), xpath_data: t.scrapeXPath() };
            let i = null;
            t.scrapeCSL(
              (e) => {
                const t = JSON.stringify(e);
                (null !== i && t === i) || ((i = t), (n.data = e), r.publish("AO:pageScraped", n));
              },
              () => {
                (n.data = null), r.publish("AO:pageScraped", n);
              }
            );
          }
          _isEmptyObject(e) {
            return !e || 0 === Object.keys(e).length;
          }
        }
        o.initClass(), (t.exports = o);
      },
      { "content/messagingInterface": 145, "modules/offers/content/Scraper": 149, ms: 74 }
    ],
    149: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const { ciuvoSDK: i } = e("ciuvo/ciuvo-csl-interpreter.min");
        t.exports = class {
          constructor(e, t) {
            (this.document = e),
              null == t && (t = {}),
              (this.xpath = t.xpath_expressions),
              (this.js_expressions = t.js_expressions),
              (this.csl = t.csl),
              (this.xpath_required = null != t.xpath_required ? t.xpath_required : []),
              (this.js_required = null != t.js_required ? t.js_required : []);
          }
          _parseXPathResult(e) {
            let t = null;
            if (1 === e.resultType) t = e.numberValue.toString();
            else if (2 === e.resultType) t = e.stringValue;
            else if (3 === e.resultType) t = e.booleanValue.toString();
            else {
              const n = e.iterateNext();
              if (!n) return !1;
              if (n.textContent) t = n.textContent;
              else if (n.innerText) t = n.innerText;
              else if (n.value) ({ value: t } = n);
              else {
                if (!n.text) return null;
                t = n.text;
              }
            }
            return t;
          }
          scrapeXPath() {
            if (!this.xpath) return null;
            const e = {};
            try {
              Object.entries(this.xpath).forEach(([t, n]) => {
                const i = this.document.evaluate(n, this.document, null, XPathResult.ANY_TYPE, null);
                e[t] = this._parseXPathResult(i);
              });
            } catch (e) {
              return null;
            }
            return this._containsKeys(e, this.xpath_required) ? e : null;
          }
          scrapeCSL(e, t) {
            try {
              return new i.Interpreter(window, e, t).interpret(this.csl);
            } catch (e) {
              return t(e);
            }
          }
          scrapeJS() {
            if (!this.js_expressions) return null;
            const e = this.document.createElement("script"),
              t = this.document.head || this.document.body,
              n = `offers-${(0 | (9e6 * Math.random())).toString(36)}`;
            e.setAttribute("id", n);
            const i = this._generateScriptContent(this.js_expressions, n),
              r = this.document.createTextNode(i);
            e.appendChild(r), t.appendChild(e);
            const s = e.getAttribute("result");
            t.removeChild(e);
            const o = JSON.parse(s);
            return this._containsKeys(o, this.js_required) ? o : null;
          }
          _containsKeys(e, t) {
            for (const n of Array.from(t)) if (!e[n]) return !1;
            return !0;
          }
          _generateScriptContent(e, t) {
            let n = "(function() {\n   var result = {};";
            return (
              Object.entries(e).forEach(([e, t]) => {
                n += `try {\nresult["${e}"] = ${t};\n} catch (e) {\n}`;
              }),
              (n += `  try {\n    document.querySelector("#${t}").setAttribute('result', JSON.stringify(result));\n  } catch (e) {\n  }\n})();`),
              n
            );
          }
        };
      },
      { "ciuvo/ciuvo-csl-interpreter.min": 18, "core-js/modules/es6.array.iterator.js": 65, "core-js/modules/web.dom.iterable.js": 67 }
    ],
    150: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const i = e("backbone"),
          r = e("content/messagingInterface"),
          s = e("modules/offers/content/iframe/models/CiuvoProduct");
        class o extends i.Collection {
          get model() {
            return s;
          }
          initialize() {
            r.subscribe("AO:couponSelected", this._onCouponSelected.bind(this)),
              r.subscribe("AO:voteCoupon", this._onVoteCoupon.bind(this)),
              r.subscribe("AO:promoClosed", this._onPromoClosed.bind(this));
          }
          _onCouponSelected(e) {
            const t = e[0],
              n = this.find((e) => `${e.get("id")}` === t);
            r.publish("AO:openCoupon", n.toJSON());
          }
          _onVoteCoupon([e, t]) {
            r.publish("AO:couponFeedback", { slug: e, vote: t });
          }
          _onPromoClosed() {
            r.publish("AO:markPromoClosed");
          }
        }
        t.exports = o;
      },
      {
        backbone: 17,
        "content/messagingInterface": 145,
        "core-js/modules/es6.array.iterator.js": 65,
        "core-js/modules/web.dom.iterable.js": 67,
        "modules/offers/content/iframe/models/CiuvoProduct": 153
      }
    ],
    151: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/defineProperty"));
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  (0, i.default)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        e("core-js/modules/es6.array.sort.js");
        const o = e("jquery"),
          a = e("underscore"),
          l = e("backbone"),
          c = e("content/messagingInterface"),
          u = e("content/mixpanel"),
          d = e("modules/offers/content/Offers"),
          _ = e("modules/offers/content/iframe/collections/CiuvoProduct"),
          p = e("modules/offers/content/iframe/models/CiuvoNotification");
        (window.ABS = {}), (window.$ = o), (window._ = e("underscore"));
        class f extends l.Model {
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
          initialize(...e) {
            super.initialize(...e),
              (this._onData = this._onData.bind(this)),
              this.set("products", new _()),
              c.subscribe("AO:data", this._onData),
              setTimeout(() => c.publish("AO:ready"), 10);
          }
          toJSON() {
            return {
              notification: (this.get("notification") && this.get("notification").toJSON()) || null,
              products: this.get("products").toJSON(),
              meta: this.get("meta"),
              searchTerm: this.get("searchTerm"),
              scrapedData: this.get("scrapedData")
            };
          }
          _onData(e, t, n) {
            if (e.products.length) {
              if (e.javascript) {
                const i = (i) => {
                  i(d), this.set("notification", null), this._setData(e, t, n), delete window.ABS.run;
                };
                (window.ABS.run = i), this._getScript(e.javascript);
              } else this._setData(e, t, n);
              e.stylesheet && o("<link>", { rel: "stylesheet", type: "text/css", href: e.stylesheet }).appendTo(document.head);
            } else this.set("notification", null);
          }
          _getScript(e) {
            const t = "undefined" != typeof chrome && "undefined" != typeof browser,
              n = new URL(e).pathname.split("/"),
              i = n[n.length - 1];
            if (
              t &&
              -1 !== ["cms_ao2.js", "cms_aon.js", "cms_ass.js", "cms_ss2.js", "external-splashoffer.js", "safeshopping.js"].indexOf(i)
            ) {
              const e = o("<script></script>");
              o("body").append(e), e.attr("src", `/offers_js/${i}`);
            } else o.getScript(e);
          }
          _setData(e) {
            if (
              (this.set("templates", e.templates),
              this.set("javascript", e.javascript),
              this.set("template_ids", e.template_ids),
              this.set("ftu_savings_threshold", (e.config && e.config.ftu_savings_threshold) || "0"),
              this.get("products").set(a.sortBy(e.products, "sortorder")),
              this.set("meta", e.meta),
              this.set("searchTerm", e.query_search_keywords || null),
              this.set("scrapedData", e.scrapedData || null),
              0 === e.products.length)
            )
              return;
            const t = this.get("products"),
              n = t.find((e) => "Product" === e.get("category")) || t.first();
            let i = t.map((e) => e.get("category"));
            (i = a.uniq(i)), i.sort();
            const r = s(s({}, e.meta), {}, { category: n.get("category") || "Unknown", categories: i }),
              o = e.meta.ss_promo ? "Offers Promo - Impression" : "Offers - Impression";
            u.track(o, r), this.set("notification", new p(n.toJSON()));
          }
          isBrowserStartUpOffers() {
            return "Browser Start-Up" === this.get("meta").campaign_name;
          }
        }
        t.exports = f;
      },
      {
        "@babel/runtime/helpers/defineProperty": 8,
        "@babel/runtime/helpers/interopRequireDefault": 11,
        backbone: 17,
        "content/messagingInterface": 145,
        "content/mixpanel": 146,
        "core-js/modules/es6.array.sort.js": 66,
        jquery: "jquery",
        "modules/offers/content/Offers": 148,
        "modules/offers/content/iframe/collections/CiuvoProduct": 150,
        "modules/offers/content/iframe/models/CiuvoNotification": 152,
        underscore: 96
      }
    ],
    152: [
      function (e, t, n) {
        "use strict";
        const i = e("backbone");
        class r extends i.Model {
          initialize() {
            const e = this.get("saving") || "0%";
            this.set("best_percentage", e);
          }
        }
        t.exports = r;
      },
      { backbone: 17 }
    ],
    153: [
      function (e, t, n) {
        "use strict";
        const i = e("backbone");
        class r extends i.Model {}
        t.exports = r;
      },
      { backbone: 17 }
    ],
    154: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Routing/Router"),
          r = e("modules/offers/content/iframe/views/OffersIndicatorBar"),
          s = e("modules/offers/content/iframe/views/OffersTour"),
          o = e("modules/offers/content/iframe/views/OffersView"),
          a = e("modules/offers/content/iframe/views/OffersDash"),
          l = e("modules/offers/content/iframe/views/CouponIndicatorBar"),
          c = e("modules/offers/content/iframe/views/CouponDash");
        class u extends i {
          get routes() {
            return {
              "offers/tour": "offersTour",
              "offers/minimized": "offersMinimized",
              "offers/coupon": "coupon",
              "offers/coupon/help": "couponHelp",
              "offers/view(/:template)": "offersView",
              "offers(/:type)": "offers"
            };
          }
          offersTour() {
            return this.setAreas({ indicators: new r(), tour: new s() });
          }
          offersMinimized() {
            return this.setAreas({ indicators: new r() });
          }
          offersView(e) {
            return this.setAreas({ indicators: new r(), view: new o({ AO_TEMPLATE: e }) });
          }
          offers() {
            return this.setAreas({ indicators: new r(), dashItem: new a() });
          }
          coupon() {
            return this.setAreas({ indicators: new l() });
          }
          couponHelp() {
            return this.setAreas({ indicators: new l(), dashItem: new c() });
          }
        }
        u.initClass(), (t.exports = u);
      },
      {
        "content/core/Routing/Router": 140,
        "modules/offers/content/iframe/views/CouponDash": 157,
        "modules/offers/content/iframe/views/CouponIndicatorBar": 159,
        "modules/offers/content/iframe/views/OffersDash": 160,
        "modules/offers/content/iframe/views/OffersIndicatorBar": 162,
        "modules/offers/content/iframe/views/OffersTour": 163,
        "modules/offers/content/iframe/views/OffersView": 164
      }
    ],
    155: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Transitions/Base"),
          r = e("modules/offers/content/iframe/views/OffersIndicatorBar");
        class s extends i {
          static initClass() {
            (this.from = r), (this.to = r), (this.weight = 10);
          }
          execute(e) {
            this.from.$el.attr("class", ""), this.from.remove(), this.to.render(), this.to.show(), e();
          }
        }
        s.initClass(), (t.exports = s);
      },
      { "content/core/Transitions/Base": 141, "modules/offers/content/iframe/views/OffersIndicatorBar": 162 }
    ],
    156: [
      function (e, t, n) {
        "use strict";
        const i = e("content/Transitions/Default"),
          r = e("modules/offers/content/iframe/views/OffersDash");
        class s extends i {
          static initClass() {
            (this.from = r), (this.to = r), (this.weight = 20);
          }
          _handoverViewElement() {
            return this.to.setElement(this.from.$el);
          }
          execute(e) {
            return this._handoverViewElement(), "function" == typeof e && e(), this.to.render();
          }
        }
        s.initClass(), (t.exports = s);
      },
      { "content/Transitions/Default": 124, "modules/offers/content/iframe/views/OffersDash": 160 }
    ],
    157: [
      function (e, t, n) {
        "use strict";
        const i = e("modules/offers/content/iframe/views/OffersDash");
        class r extends i {
          static initClass() {
            this.prototype.AO_TEMPLATE = "help";
          }
        }
        r.initClass(), (t.exports = r);
      },
      { "modules/offers/content/iframe/views/OffersDash": 160 }
    ],
    158: [
      function (e, t, n) {
        "use strict";
        const i = e("modules/offers/content/iframe/views/OffersIndicator");
        class r extends i {
          static initClass() {
            this.prototype.AO_TEMPLATE = "coupon";
          }
        }
        r.initClass(), (t.exports = r);
      },
      { "modules/offers/content/iframe/views/OffersIndicator": 161 }
    ],
    159: [
      function (e, t, n) {
        "use strict";
        const i = e("modules/offers/content/iframe/views/OffersIndicatorBar"),
          r = e("modules/offers/content/iframe/views/CouponIndicator"),
          s = e("content/Views/Indicators/Close");
        class o extends i {
          static initClass() {
            this.prototype.subviewConstructors = { Offers: r, Close: s };
          }
        }
        o.initClass(), (t.exports = o);
      },
      {
        "content/Views/Indicators/Close": 128,
        "modules/offers/content/iframe/views/CouponIndicator": 158,
        "modules/offers/content/iframe/views/OffersIndicatorBar": 162
      }
    ],
    160: [
      function (e, t, n) {
        "use strict";
        const i = e("content/Views/Dash/TabView"),
          r = e("modules/offers/content/iframe/views/mixins/Offers"),
          s = e("modules/offers/content/iframe/models/Ciuvo");
        class o extends i {
          static initClass() {
            (this.prototype.id = "dashItemArea"),
              (this.prototype.className = "dash-tab dash-tab-popup dash-tab-positioned"),
              (this.prototype.AO_TEMPLATE = "listing");
          }
          initialize(...e) {
            return (
              super.initialize(...e),
              (this.model = s.getInstance()),
              r.add(this),
              this.model.once("change:templates", () => {
                this.view.setTemplate(), this.render();
              }),
              this.listenTo(this.model, "change", this.render)
            );
          }
        }
        o.initClass(), (t.exports = o);
      },
      {
        "content/Views/Dash/TabView": 127,
        "modules/offers/content/iframe/models/Ciuvo": 151,
        "modules/offers/content/iframe/views/mixins/Offers": 165
      }
    ],
    161: [
      function (e, t, n) {
        "use strict";
        const i = e("content/Views/Indicators/Indicator"),
          r = e("modules/offers/content/iframe/views/mixins/Offers"),
          s = e("modules/offers/content/iframe/models/Ciuvo"),
          o = e("content/messagingInterface"),
          a = e("jquery");
        class l extends i {
          constructor(...e) {
            super(...e), (this._toggleDropdownButton = this._toggleDropdownButton.bind(this));
          }
          static initClass() {
            this.prototype.AO_TEMPLATE = "notification";
          }
          initialize(...e) {
            super.initialize(...e),
              r.add(this),
              (this.model = s.getInstance()),
              this.listenTo(this.model, "change", this.render),
              o.subscribe("router:afterRouteChange", (e) => this._toggleDropdownButton(e));
          }
          render(...e) {
            super.render(...e);
            this.$(".offers-more").addClass("close-button");
          }
          _toggleDropdownButton(e) {
            a(".offers-trigger.toggle-button").toggleClass("active", this._isDashRoute(e.route));
          }
          _isDashRoute(e) {
            return !/offers\/(minimized|tour)/.test(e);
          }
        }
        l.initClass(), (t.exports = l);
      },
      {
        "content/Views/Indicators/Indicator": 129,
        "content/messagingInterface": 145,
        jquery: "jquery",
        "modules/offers/content/iframe/models/Ciuvo": 151,
        "modules/offers/content/iframe/views/mixins/Offers": 165
      }
    ],
    162: [
      function (e, t, n) {
        "use strict";
        const i = e("content/core/Views/View"),
          r = e("content/messagingInterface"),
          s = e("modules/offers/content/iframe/models/Ciuvo"),
          o = e("backbone"),
          a = e("jquery"),
          l = e("IndicatorBarOffers.mustache"),
          c = e("modules/offers/content/iframe/views/OffersIndicator"),
          u = e("content/Views/Indicators/Close");
        class d extends i {
          constructor(...e) {
            super(...e),
              (this.highlightActiveLinks = this.highlightActiveLinks.bind(this)),
              (this.showBarShadow = this.showBarShadow.bind(this));
          }
          static initClass() {
            (this.prototype.id = "indicatorsArea"),
              (this.prototype.template = l),
              (this.prototype.className = "indicators-container offers-wide state-bar"),
              (this.prototype.subviewConstructors = { Offers: c, Close: u }),
              (this.prototype.BAR_HEIGHT = 46),
              (this.prototype.events = { "click a.active, a.active-subgroup": "_passOrNavigateToBackRoute" }),
              (this.prototype._stateClasses = "state-bar state-hidden_bar");
          }
          initialize(...e) {
            return (
              super.initialize(...e),
              this.vent.trigger("esc:on", this._close),
              (this.model = s.getInstance()),
              this.listenTo(this.model, "change", (e) => {
                e.get("notification") || this._close();
              })
            );
          }
          highlightActiveLinks() {
            const e = o.history.getFragment();
            return this.$("a").removeClass("active"), this.$(`a[href='#${e}']`).addClass("active");
          }
          showBarShadow() {
            return this.$el.addClass("indicatorShadow");
          }
          toggleSubviews() {
            return this._toggleSubviewsByName(["Offers"], !0);
          }
          calculateWidth() {
            return this.$el.find(".indicator-group:visible").outerWidth();
          }
          show(...e) {
            let t = e[0];
            return (
              null == t && (t = () => {}),
              this._toggleProperties(),
              this.highlightActiveLinks(),
              this.showBarShadow(),
              this.$el.addClass("shown"),
              this.$el
                .finish()
                .animate(
                  { "margin-top": "0px" },
                  this.TRANSITION_DURATION,
                  "linear",
                  () => (r.publish("indicatorBar:widthChanged", this.calculateWidth()), t())
                ),
              super.show(...e)
            );
          }
          hide(e) {
            let t = e;
            null == t && (t = () => {}),
              this.$el.removeClass("shown"),
              this.$el.finish().animate({ "margin-top": -this.BAR_HEIGHT + "px" }, this.TRANSITION_DURATION, "linear", t);
          }
          _passOrNavigateToBackRoute(e) {
            const t = a(e.currentTarget).data("backRoute") || "";
            return r.publish("router:navigateTo", { route: t }), !1;
          }
          _toggleProperties() {
            const e = this.subviews.Close;
            e.show(), (e.for_offers_bar = !0), (e.for_offers_dash = !1), (e.context = "OffersIndicatorBar"), e.render();
          }
          _isModeOn(e) {
            return this.model.get(e);
          }
          _close() {
            return r.publish("router:navigateTo", { route: "minimized" });
          }
        }
        d.initClass(), (t.exports = d);
      },
      {
        "IndicatorBarOffers.mustache": 97,
        backbone: 17,
        "content/Views/Indicators/Close": 128,
        "content/core/Views/View": 143,
        "content/messagingInterface": 145,
        jquery: "jquery",
        "modules/offers/content/iframe/models/Ciuvo": 151,
        "modules/offers/content/iframe/views/OffersIndicator": 161
      }
    ],
    163: [
      function (e, t, n) {
        "use strict";
        const i = e("content/Views/Tour/TourStepBase"),
          r = e("modules/offers/content/iframe/views/mixins/Offers"),
          s = e("modules/offers/content/iframe/models/Ciuvo");
        class o extends i {
          static initClass() {
            this.prototype.AO_TEMPLATE = "ftu";
          }
          initialize(...e) {
            super.initialize(...e),
              (this.model = s.getInstance()),
              r.add(this),
              this.model.once("change:templates", () => this.render()),
              this.model.on("change", () => this.render());
          }
        }
        o.initClass(), (t.exports = o);
      },
      {
        "content/Views/Tour/TourStepBase": 133,
        "modules/offers/content/iframe/models/Ciuvo": 151,
        "modules/offers/content/iframe/views/mixins/Offers": 165
      }
    ],
    164: [
      function (e, t, n) {
        "use strict";
        const i = e("content/Views/Tour/TourStepBase"),
          r = e("modules/offers/content/iframe/views/mixins/Offers"),
          s = e("modules/offers/content/iframe/models/Ciuvo");
        class o extends i {
          constructor(e) {
            super(e), (this.AO_TEMPLATE = e.AO_TEMPLATE);
          }
          initialize(...e) {
            super.initialize(...e),
              (this.model = s.getInstance()),
              r.add(this),
              this.model.once("change:templates", () => this.render()),
              this.model.on("change", () => this.render());
          }
        }
        (o.prototype.id = "viewArea"), (o.prototype.AO_TEMPLATE = "ftu"), (t.exports = o);
      },
      {
        "content/Views/Tour/TourStepBase": 133,
        "modules/offers/content/iframe/models/Ciuvo": 151,
        "modules/offers/content/iframe/views/mixins/Offers": 165
      }
    ],
    165: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        const i = e("modules/offers/content/Offers"),
          r = e("content/messagingInterface"),
          s = e("underscore"),
          o = {
            setTemplate() {
              const e = this.model.get("templates");
              (null != e ? e[this.AO_TEMPLATE] : void 0) && (this.template = e[this.AO_TEMPLATE]);
            },
            _getTemplateId() {
              const e = (this.model.get("template_ids") || {})[this.AO_TEMPLATE];
              return e ? e.replace(/#.*$/, "") : null;
            },
            _getTemplateFunction(e) {
              let t;
              const n = this._getTemplateId();
              return n
                ? (i.templates && i.templates[n] && i.templates[n][e] && (t = i.templates[n][e]),
                  "function" != typeof t
                    ? null
                    : (e) => {
                        try {
                          return t(e);
                        } catch (t) {
                          return console.warn("Error running AO custom javascript ", t), e;
                        }
                      })
                : null;
            },
            aoBeforeRender(e) {
              const t = this.model.get("templates");
              t && s.extend(this.templates, t);
              const n = this._getTemplateFunction("beforeRender");
              return n ? n(e) : e;
            },
            aoAfterRender() {
              const e = this._getTemplateFunction("afterRender");
              e && e(this.el);
            },
            aoOnShow() {
              const e = this._getTemplateFunction("onShow");
              e && e(this.el);
            },
            processDataBindings() {
              for (const e of ["click", "mouseout", "mouseover"])
                this.$el.find(`[data-${e}]`).each((t, n) =>
                  n.addEventListener(
                    e,
                    function (e) {
                      const t = this.getAttribute(`data-${e.type}`).split(":"),
                        n = t[0],
                        i = t.slice(1);
                      return r.publish(`AO:${n}`, i);
                    },
                    !1
                  )
                );
              return this.$el
                .find('[data-event="Offers - Click"]')
                .each((e, t) => t.addEventListener("click", () => r.publish("offersTourShown"), !1));
            }
          };
        t.exports = {
          add(e) {
            const t = e.beforeRender,
              n = e.render,
              i = e.show;
            return (
              s.extend(e, o, {
                beforeRender: (n) => (e.setTemplate(), t.call(e, e.aoBeforeRender(n))),
                render: () => (n.call(e), e.processDataBindings(), e.aoAfterRender()),
                show: (...t) => (i.apply(e, t), e.aoOnShow())
              }),
              e
            );
          }
        };
      },
      {
        "content/messagingInterface": 145,
        "core-js/modules/es6.array.iterator.js": 65,
        "core-js/modules/web.dom.iterable.js": 67,
        "modules/offers/content/Offers": 148,
        underscore: 96
      }
    ]
  },
  {},
  [135]
);
