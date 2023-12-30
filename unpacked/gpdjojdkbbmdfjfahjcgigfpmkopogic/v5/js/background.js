"use strict";
(() => {
  var fe = Object.defineProperty,
    ge = Object.defineProperties;
  var he = Object.getOwnPropertyDescriptors;
  var U = Object.getOwnPropertySymbols;
  var me = Object.prototype.hasOwnProperty,
    be = Object.prototype.propertyIsEnumerable;
  var $ = (b, h, l) => (h in b ? fe(b, h, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (b[h] = l)),
    y = (b, h) => {
      for (var l in h || (h = {})) me.call(h, l) && $(b, l, h[l]);
      if (U) for (var l of U(h)) be.call(h, l) && $(b, l, h[l]);
      return b;
    },
    S = (b, h) => ge(b, he(h));
  var _ = (b, h, l) =>
    new Promise((t, c) => {
      var E = (v) => {
          try {
            m(l.next(v));
          } catch (p) {
            c(p);
          }
        },
        a = (v) => {
          try {
            m(l.throw(v));
          } catch (p) {
            c(p);
          }
        },
        m = (v) => (v.done ? t(v.value) : Promise.resolve(v.value).then(E, a));
      m((l = l.apply(b, h)).next());
    });
  function xe() {
    const b = {
        clientId: 1447278,
        canHaz: { saveAsDataURI: !0, localImagePicker: !0 },
        endpoint: {
          grid: { pinCreate: "https://www.pinterest.com/pin/create/extension/", rePinCreate: "https://www.pinterest.com/pin/%s/repin/x/" }
        },
        path: { welcome: "/_/_/about/browser-button/install/" },
        updatePage: { version: "5.0.0", show: !1, focus: !1, path: "/_/_/about/browser-button/update/" },
        ctx: {
          flushTypes: { 1: !0, 20: !0, 8219: !0 },
          flushConstants: { timeoutNanoseconds: 3e11, numEvents: 20 },
          EventTypes: {
            PIN_CREATE: 1,
            VIEW: 13,
            BOARD_CREATE: 20,
            USER_FOLLOW: 45,
            CLICK: 101,
            SAVE_BROWSER_PIN_IMAGES_FOUND: 2900,
            SAVE_BROWSER_PIN_IMAGES_NOT_FOUND: 2901,
            PIN_CREATE_FAILURE: 7564,
            USER_ACTIVE: 7137,
            INSTALL: 8219,
            BROWSER_SESSION: 8221,
            BROWSER_EXTENSION_BOOKMARKS_FOUND: 9001,
            BROWSER_EXTENSION_BOOKMARKS_CREATE_SUCCESS: 9002
          },
          ViewTypes: {
            BOARD_PICKER: 21,
            VISUAL_SEARCH: 43,
            BROWSER_EXTENSION_DAU: 192,
            IMAGE_PICKER: 268,
            CREATE_BOARD: 269,
            PIN_CREATE_SUCCESS: 270,
            FOLLOW_FROM_SAVE: 271,
            FOLLOW_FROM_SAVE_SUCCESS: 272,
            BOARD_SECTION_CREATE: 274,
            BOARD_SECTION_PICKER: 275,
            BROWSER_EXTENSION_OPTIONS: 276,
            HOVER_BOARD_OPENER: 277,
            HOVER_BOARD_PICKER: 278,
            VISUAL_SEARCH_RESULTS: 279
          },
          ElementTypes: { BOARD_COVER: 36, CREATE_BUTTON: 44, PIN_SAVE_BUTTON: 48, SECTION_COVER: 11854, VISIT_BUTTON: 12796 },
          AppTypes: { BROWSER_EXTENSION: 8 },
          BrowserTypes: { OTHER: 0, CHROME: 1, SAFARI: 2, IE: 3, FIREFOX: 4, OPERA: 5, EDGE: 7 }
        },
        server: { domain: ".pinterest.com", api: "api", www: "www", trk: "trk" },
        pattern: {
          api: /^https?:\/\/api\.pinterest\.com\//,
          trk: /^https?:\/\/trk\.pinterest\.com\//,
          pinmarklet: /^https?:\/\/assets\.pinterest\.com\/js\/pinmarklet\.js/,
          pinterestDomain:
            /^https?:\/\/(([a-z]{1,3}|latest)\.|)pinterest\.(at|(c(a|h|l|o(\.(kr|uk)|m(|\.(au|mx)))))|d(e|k)|es|fr|i(e|t)|jp|nz|p(h|t)|se|ru)\//,
          alwaysConvertToData: [/\.cdninstagram\.com/]
        }
      },
      h = {
        choosePinMultiSelectHeader: "Save an idea to Pinterest",
        choosePinSelectAllSubHeader: "Select up to twenty images",
        nextAction: "Next",
        selectAll: "Select all",
        noPinDomain: "Sorry, pinning is not allowed from this domain. Please contact the site operator if you have any questions.",
        boardPickerOpenerLabel: "Save to board",
        boardPickerSuccessLabel: "Saved to",
        visitButton: "Visit",
        help: "Help",
        msgOops: "Oops!",
        msgPinFail: "Could not save this page",
        chooseBoard: "Choose board",
        saveAction: "Save",
        topChoices: "Top choices",
        allBoards: "All boards",
        createBoard: "Create board",
        addFormSecretLabel: "Secret",
        chooseSection: "Choose section",
        addSection: "Add Section",
        optYes: "Yes",
        optNo: "No",
        closeAddForm: "Cancel",
        submitAddForm: "Create",
        msgBoardFail: "Could not create new board",
        msgLoginFail: "Sorry, something's not quite right here. Please check that you are logged into Pinterest and try again.",
        msgHelp: "Get Help",
        authHelpHead: "Psst!",
        authHelpBody: "Looks like you're not signed in to Pinterest. Let's fix that!",
        signIn: "Sign in"
      },
      l = {
        debug: !1,
        remoteAssetPath: "https://assets.pinterest.com/ext/",
        me: "background",
        forbiddenQueryKey: [/password/gi],
        browserTest: [
          { k: "ff", r: / Firefox\// },
          { k: "op", r: / OPR\// },
          { k: "ms", r: / Edg\// },
          { k: "cr", r: / Chrome\// }
        ],
        ttl: { userInfo: 10 * 60 * 1e3 },
        ua: "Pinterest for BrowserExtension",
        theOtherList: [
          "05ae1d0135c1",
          "0c4e6e46540b",
          "129e2089d8b8",
          "15c442d8f57b",
          "1b551d2f2233",
          "3bb3293aa4f9",
          "592bd1529ad2",
          "5cd69c1c51a8",
          "67fa18caa358",
          "6c62158de5d4",
          "7da2f8f258db",
          "9af245e8c2d5",
          "9d5cb16066e3",
          "a20c46b653b0",
          "b7c70898d90f",
          "d095fd7b7ac1",
          "d2944127ec33",
          "e42128ea2bf8",
          "e43ff7b11415",
          "efa3a2deb839",
          "faf820a6e7ba",
          "ff33e73a21b1"
        ],
        limit: { dataUrlWidth: 1e3 },
        inject: { logic: "/v5/js/logic.js", pinmarklet: "/v5/js/pinmarklet.js" },
        digits: "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ_abcdefghijkmnopqrstuvwxyz",
        ctrl: b,
        translateThese: h
      },
      t = {
        boards: {},
        endpoint: {},
        experimentGroup: {},
        enabledExperimentGroups: {},
        hashList: [],
        puid: "",
        context: { eventBatch: [], user: {}, userId: "", unauthId: "" },
        sessionStart: Date.now(),
        userInfo: {},
        timestamp: { boardsAndSections: 0, experiments: 0 }
      },
      c = chrome || c;
    function E() {
      (l.installObj = {}),
        (chrome || {}).runtime
          ? chrome.runtime.onInstalled.addListener((e) => {
              l.installObj = e;
            })
          : (c || {}).runtime &&
            c.runtime.onInstalled.addListener((e) => {
              l.installObj = e;
            });
    }
    function a(e, o = 0) {
      e && t.debug && (typeof t.debug == "number" ? o >= t.debug && console.log(e) : console.log(e));
    }
    function m(e) {
      return _(this, null, function* () {
        function o() {
          return _(this, null, function* () {
            let n = new Headers();
            n.append("Accept-Language", navigator.language),
              n.append("X-Pinterest-App-Type-Detailed", "8"),
              n.append("charset", "UTF-8"),
              (t.ctrl || {}).clientId && n.append("X-Client-ID", t.ctrl.clientId),
              e.auth &&
                e.xRequestForgeryToken &&
                (a("Setting X-Request-Forgery-Token to " + e.xRequestForgeryToken),
                n.append("X-Request-Forgery-Token", e.xRequestForgeryToken));
            let r = { method: e.method || "GET", headers: n, responseType: e.responseType || "json" };
            e.formData && (r.body = e.formData);
            let s = new Request(e.url, r);
            a(`Fecthing: ${e.url}`), a(`headers ${String(n)}`);
            const i = yield fetch(s);
            if (i.status === 200) {
              const d = { response: yield i.json() };
              return e.key && (d.key = e.key), d;
            } else return { response: { status: "fail", error: "API Error" } };
          });
        }
        try {
          const n = yield o();
          return e.url.match("api.") && (a("An API request has loaded", 1), a(e.url, 1), a(n, 1)), n;
        } catch (n) {
          return n;
        }
      });
    }
    function v(e) {
      return (e.response || {}).status !== "success";
    }
    function p(e, o) {
      o || (o = () => {}), c.storage.local.set(e, o), a("Local storage was updated"), a(e);
    }
    function q(e) {
      const n = [];
      function r(i) {
        m({ auth: !0, xRequestForgeryToken: i.xRequestForgeryToken, url: `${t.endpoint.api}board/${i.board}/sections/all/` }).then((d) => {
          v(d) ||
            (d.response.data.sort((f, g) => (f.title > g.title ? 1 : -1)),
            n.filter((f) => {
              f.id === i.board && (f.sections = d.response.data);
            }),
            p({ boards: n }));
        });
      }
      function s(i) {
        let d = "";
        i.bookmark && (d = `&bookmark=${i.bookmark}`),
          m({
            auth: !0,
            xRequestForgeryToken: i.xRequestForgeryToken,
            url: `${t.endpoint.api}users/me/boards/feed/?page_size=250${d}&filter=all&sort=last_pinned_to&add_fields=board.image_cover_url,board.privacy,board.collaborated_by_me,board.section_count`
          }).then((f) => {
            v(f) ||
              (f.response.data &&
                (f.response.data.filter((g) => {
                  n.push({
                    id: g.id,
                    image_cover_url: g.image_cover_url || g.image_thumbnail_url,
                    name: g.name,
                    privacy: g.privacy,
                    is_collaborative: g.is_collaborative,
                    section_count: g.section_count
                  }),
                    g.section_count && r(S(y({}, i), { board: g.id }));
                }),
                p({ boards: n })),
              f.response.bookmark
                ? (a("Getting next page of boards"), s(S(y({}, i), { bookmark: f.response.bookmark })))
                : ((t.timestamp.boardsAndSections = Date.now()), a("Done loading boards; sections may still be coming."), a(n)));
          });
      }
      e.xRequestForgeryToken && s({ xRequestForgeryToken: e.xRequestForgeryToken });
    }
    function O(e) {
      return new Promise((o) => {
        const n = [
          "user.ads_customize_from_conversion",
          "user.country",
          "user.last_pin_save_time",
          "user.personalize_from_offsite_browsing"
        ];
        m({ url: `${t.endpoint.api}users/me/?add_fields=${n.join(",")}` }).then((r) => {
          var i, d;
          const s = (i = r == null ? void 0 : r.response) == null ? void 0 : i.data;
          if (s) {
            (t.userInfo = { id: s.id, canHazMeasurement: !1, lastPinSaveTime: Date.parse(s.last_pin_save_time || 0) }),
              (t.timestamp.userInfo = Date.now()),
              (t.experimentGroup = {}),
              Object.keys(s.gatekeeper_experiments)
                .filter((I) => I.startsWith("browser_extension"))
                .forEach((I) => {
                  t.experimentGroup[I] = { group: s.gatekeeper_experiments[I].group, activated: !1 };
                });
            const f = "browser_extension_measurement_decider",
              g = (d = t.experimentGroup[f]) == null ? void 0 : d.group;
            (g === "enabled" || g === "employees") &&
              !"AT BE BG CY CZ DE DK EE ES FI FR GB GR HR HU IE IS IT LI LT LU lV MT NL NO PL PT RO SE SI SK UK".match(s.country) &&
              s.ads_customize_from_conversion &&
              s.personalize_from_offsite_browsing &&
              (t.userInfo.canHazMeasurement = !0),
              a(`Okay to assist with conversion tracking? ${t.userInfo.canHazMeasurement}`),
              p({ userInfo: t.userInfo }),
              p({ experimentGroup: t.experimentGroup }),
              q({ xRequestForgeryToken: e.xRequestForgeryToken }),
              o(!0);
          }
        });
      });
    }
    function F(e) {
      const o = (r) => {
        let s,
          i = new DataView(r),
          d = [];
        for (s = 0; s < i.byteLength; s = s + 4) d.push(("00000000" + i.getUint32(s).toString(16)).slice(-8));
        return d.join("");
      };
      let n = new TextEncoder("utf-8").encode(e.str);
      return crypto.subtle.digest(e.method, n).then((r) => ({ digest: o(r), input: e.str }));
    }
    function R(e) {
      c.storage.local.remove(e), a("Local storage was updated"), a(e);
    }
    function x() {
      const e = (n, r) => {
          n.auth && n.sess
            ? (a("Hashing _pinterest_sess for xRequestForgeryToken"),
              F({ str: n.sess.replace(/(^")|("$)/g, ""), method: "SHA-512" }).then((s) => {
                a(
                  `xRequestForgeryToken is:
` + s.digest
                ),
                  (n.change = !1),
                  s.digest !== t.lastToken
                    ? ((n.change = !0),
                      a("User change detected, zeroing out some globals"),
                      (t.timestamp.userInfo = 0),
                      (t.lastToken = s.digest),
                      O({ xRequestForgeryToken: s.digest }).then((i) => {
                        a("New user info"), a(t.userInfo);
                      }))
                    : Date.now() - (t.timestamp.userInfo || 0) > l.ttl.userInfo &&
                      (a("User info is stale"),
                      O({ xRequestForgeryToken: s.digest }).then((i) => {
                        a("Refreshed user info"), a(t.userInfo);
                      })),
                  delete n.sess,
                  (n.xRequestForgeryToken = s.digest),
                  r(n);
              }))
            : (a("User is not authenticated"),
              (t.lastToken = ""),
              (t.userInfo = {}),
              R("userInfo"),
              (t.experimentGroup = {}),
              R("experimentGroup"),
              R("boards"),
              r(n));
        },
        o = (n) => {
          const r = { auth: !1, timeCheck: 0 };
          return (
            n._auth &&
              ((r.timeCheck = n._auth.expirationDate || 0),
              n._auth.value === "1" && (n._pinterest_sess || {}).value && ((r.auth = !0), (r.sess = n._pinterest_sess.value))),
            r
          );
        };
      return new Promise((n) => {
        c.cookies.getAll({ domain: `${t.ctrl.server.domain}` }, (r) => {
          const s = {
              _auth: { domain: `${t.ctrl.server.domain}`, value: null },
              _pinterest_sess: { domain: `${t.ctrl.server.domain}`, value: null }
            },
            i = Object.assign({}, s);
          for (let d of r)
            i[d.name] && d.domain === i[d.name].domain && ((i[d.name].value = d.value), (i[d.name].expirationDate = d.expirationDate));
          e(o(i), (d) => {
            n(d);
          });
        });
      });
    }
    function k(e) {
      e.callback &&
        c.tabs.query({ active: !0, currentWindow: !0 }, (o) => {
          ((c.runtime.lastError || {}).message || "").match("Tabs cannot be queried right now")
            ? (a("Tab query error encountered; trying again in just a moment."), window.setTimeout(() => k(e), 100))
            : (a("Tab query success."),
              ((o || {})[0] || {}).url
                ? e.callback(o[0])
                : a(
                    "Tab or window switch detected but no tabs came back from query; this tab may contain an URL that won't run our logic."
                  ));
        });
    }
    function u(e) {
      a("Request to send message to logic script received."),
        a(e),
        (e.experimentGroup = t.experimentGroup),
        k({
          callback: (o) => {
            o.url.match(/^https?:\/\//)
              ? (a("Active tab has a valid URL: " + o.url), (e.tabId = o.id), c.tabs.sendMessage(o.id, e))
              : (a("Could not send message to active tab; we need http protocol."), a(o.url));
          }
        });
    }
    function D() {
      x().then((e) => {
        t.debug && (e.auth ? c.action.setBadgeBackgroundColor({ color: "red" }) : c.action.setBadgeBackgroundColor({ color: "black" })),
          u({ to: "logic", act: "pongLogin", data: { auth: e.auth } });
      });
    }
    function C() {
      if (!t.context.eventBatch.length) return;
      const e = { url: `${t.endpoint.trk}callback/event/`, formData: new FormData(), method: "POST" };
      e.formData.append("isJSONData", !0),
        e.formData.append("event_batch_json", JSON.stringify({ reportTime: Date.now() * 1e6, events: t.context.eventBatch })),
        a("Preparing to sending context log global.context.eventBatch."),
        a(e),
        (t.context.eventBatch = []),
        m(e);
    }
    function P() {
      let e = t.context.eventBatch,
        o = e.length,
        n = t.ctrl.ctx.flushTypes,
        r = t.ctrl.ctx.flushConstants.numEvents,
        s = !1;
      return (
        o &&
          (o > r && (s = !0),
          Date.now() * 1e6 - e[o - 1].time > t.ctrl.ctx.flushConstants.timeoutNanoseconds && (s = !0),
          (n["" + e[0].eventType] || n["" + (e[0].context || {}).viewType]) && (s = !0)),
        s
      );
    }
    function A() {
      return [1e7, 1e3, 4e3, 8e3, 1e11]
        .join("")
        .replace(/[018]/g, (e) => (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16));
    }
    function M(e) {
      let o = !1,
        n = !1;
      e.eventType === t.ctrl.ctx.EventTypes.VIEW &&
        (e.context || {}).viewType === t.ctrl.ctx.ViewTypes.HOVER_BOARD_OPENER &&
        typeof (e.auxData || {}).url == "string" &&
        t.context.eventBatch.filter((r) => {
          (r.auxData || {}).url === e.auxData.url && (o = !0);
        }),
        o
          ? a("Discarding a duplicate event")
          : (t.context.eventBatch.unshift(e),
            t.context.lastKnownUserId
              ? e.userId
                ? e.userId !== t.context.lastKnownUserId && ((t.context.lastKnownUserId = e.userId), (n = !0))
                : ((t.context.lastKnownUserId = ""), (n = !0))
              : e.userId && ((t.context.lastKnownUserId = e.userId), (t.context.unauthId = A()), (n = !0)),
            n || P()
              ? (a(`Flushing event queue.  Batch size: ${t.context.eventBatch.length}`), C())
              : a(`Adding event to batch. New length:  ${t.context.eventBatch.length}`),
            a(t.context.eventBatch));
    }
    function T(e) {
      if ((a("A context log event has been requested."), a(e), e.eventType === void 0))
        return a("Context logging requires an eventType"), !1;
      const o = t.ctrl.ctx.EventTypes[e.eventType],
        n = t.ctrl.ctx.ViewTypes[e.viewType],
        r = t.ctrl.ctx.ElementTypes[e.element];
      if (!o) return a("Context logging requires an eventType listed in ctrl.ctx.EventTypes"), a(e), !1;
      if (e.eventType === "VIEW" && !n) return a("A view requires a viewType listed in ctrl.ctx.ViewTypes"), a(e), !1;
      if (e.eventType === "CLICK" && !r) return a("A click requires an element listed in ctrl.ctx.ElementTypes"), a(e), !1;
      const s = {
        eventType: o,
        time: Date.now() * 1e6,
        app: t.ctrl.ctx.AppTypes.BROWSER_EXTENSION,
        appVersion: t.xv,
        browser: t.browserType
      };
      if (n || r) {
        const i = {};
        Object.assign(i, !!n && { viewType: n }, !!r && { element: r }), (s.context = i);
      }
      e.objectIdStr && (s.objectIdStr = e.objectIdStr),
        e.auxData && e.auxData.constructor === Object && (s.auxData = e.auxData),
        t.context.unauthId || (a(`No unauthId found; creating one. ${t.context.unauthId}`), (t.context.unauthId = A())),
        x().then((i) => {
          i.auth ? (s.userId = t.userInfo.id) : (s.unauthId = t.context.unauthId), M(s);
        });
    }
    function j() {
      a("Creating welcome note"),
        c.tabs.create({ url: `https://${t.ctrl.server.www}${t.ctrl.server.domain}${t.ctrl.path.welcome}?xv=${t.xv}` }),
        p({ beenWelcomed: t.sessionStart });
    }
    function G() {
      if ((l.installObj || {}).reason)
        switch (l.installObj.reason) {
          case "install":
            T({ eventType: "INSTALL" }), j();
            break;
          case "update":
            t.xv &&
              c.runtime.getManifest().version === t.ctrl.updatePage.version &&
              t.ctrl.updatePage.show &&
              c.tabs.create({
                url: `https://${t.ctrl.server.www}${t.ctrl.server.domain}${t.ctrl.updatePage.path}?xv=${t.xv}`,
                active: t.ctrl.updatePage.focus
              });
            break;
        }
    }
    function w(e) {
      e.menus && c.contextMenus.removeAll(),
        e.button &&
          c.action
            .setIcon({ path: "/icons/disabled/icon_toolbar.png" })
            .then(() => a("Icon set"))
            .catch(() => a("Error while setting icon"));
    }
    function B() {
      a("Tab switch detected."),
        k({
          callback: (e) => {
            e.url.match(/^https?:\/\//)
              ? e.url.match(t.ctrl.pattern.pinterestDomain)
                ? (a("On a known Pinterest app domain; no need to refresh context; disabling pinning features."),
                  w({ menus: !0, button: !0 }))
                : c.tabs.sendMessage(e.id, { to: "logic", act: "refreshContext" })
              : (a("Focus changed to a non-http tab or non-browser window; disabling pinning features."), w({ menus: !0, button: !0 }));
          }
        }),
        t.userInfo.id && t.userInfo.canHazMeasurement
          ? c.declarativeNetRequest.updateSessionRules({
              removeRuleIds: [1002],
              addRules: [
                {
                  id: 1002,
                  priority: 1,
                  action: {
                    type: "redirect",
                    redirect: { transform: { queryTransform: { addOrReplaceParams: [{ key: "beuid", value: t.userInfo.id }] } } }
                  },
                  condition: { urlFilter: "*://ct.pinterest.com/*" }
                }
              ]
            })
          : c.declarativeNetRequest.updateSessionRules({ removeRuleIds: [1002] });
    }
    function V(e) {
      return _(this, null, function* () {
        a(`Attempting to activate ${e}`);
        const o = yield x();
        if (!o.auth && !o.xRequestForgeryToken) return !1;
        const n = new FormData();
        n.append("experiment_data", JSON.stringify({ key: e }));
        const r = yield m({
          auth: !0,
          formData: n,
          method: "PUT",
          url: `${t.endpoint.api}gatekeeper/activate/`,
          xRequestForgeryToken: o.xRequestForgeryToken
        });
        return v(r) ? (a(`Activation check for ${e} failed!`), !1) : (a(`Experiment Activation response for ${e}`), a(r), r);
      });
    }
    function H(e) {
      return _(this, null, function* () {
        if (!(e in t.experimentGroup) || !t.experimentGroup[e].activated) {
          const r = ((((yield V(e)) || {}).response || {}).data || {}).group;
          a(`Activated experimental group ${r} for experiment ${e}`), (t.experimentGroup[e] = { group: r, activated: !0 });
        }
        return (((t.override || {}).exp || {})[e] || {}).group || t.experimentGroup[e].group;
      });
    }
    function W(e) {
      a("Injecting logic into tab " + e.tabId), c.scripting.executeScript({ target: { tabId: e.tabId }, files: [l.inject.logic] });
    }
    function z() {
      u({ to: "logic", act: "closeGrid" });
    }
    function K(e) {
      a("Populate Grid"),
        x().then((o) => {
          (e.data.auth = o.auth),
            (e.data.hideSearch = t.hideSearch),
            (e.data.funnel_uuid = A()),
            (e.data.funnel_url = e.data.url),
            T({ eventType: "SAVE_BROWSER_PIN_IMAGES_FOUND", auxData: { url: e.data.funnel_url, funnel_uuid: e.data.funnel_uuid } }),
            u({ to: "save", act: "renderPinmarkletData", data: e.data });
        });
    }
    function X(e) {
      const o = { nohover: !1, nopin: !1 },
        n = e.domain.split(".").reverse();
      let r = n[0];
      for (let s = 1; s < n.length; s = s + 1)
        (r = n[s] + "." + r),
          F({ str: r, method: "SHA-1" }).then((i) => {
            l.theOtherList.filter((d) => {
              i.digest.match(d) && (a("No-pin list match on " + r + "; pin and hover disabled"), (o.nopin = o.nohover = !0));
            }),
              t.hashList.filter((d) => {
                i.digest.match(d) && (a("No-hover list match on " + r + "; hover disabled"), (o.nohover = !0));
              });
          });
      u({ to: "logic", act: "renderFeatureBlock", data: o });
    }
    function J(e) {
      if ((P() && C(), w({ menus: !0 }), e.data.nopin)) w({ button: !0 }), a("data.nopin encountered; no context menus for you!");
      else {
        a("no data.nopin encountered; making context menus"),
          c.action
            .setIcon({ path: "/icons/icon_toolbar.png" })
            .then(() => a("Toolbar icon set"))
            .catch(() => a("Error while setting the Toolbar Icon")),
          c.contextMenus.removeAll();
        try {
          c.contextMenus.create({ id: "rightClickToPin", title: c.i18n.getMessage("saveAction"), contexts: ["image"] }, () => {
            c.contextMenus.onClicked.addListener((o) => {
              u({ to: "logic", act: "contextSave" });
            });
          }),
            t.hideSearch
              ? a("Login NOT found; no Search menu for you.")
              : (a("You get the Search context menu."),
                c.contextMenus.create(
                  {
                    id: "search",
                    title: c.i18n.getMessage("searchAction"),
                    contexts: ["page", "frame", "selection", "editable", "video", "audio"]
                  },
                  () => {
                    a("Adding search click event listener"),
                      c.contextMenus.onClicked.addListener(() => {
                        u({ to: "logic", act: "openSearch", data: { method: "r" } });
                      });
                  }
                )),
            a("context menu create success.");
        } catch (o) {
          a("context menu create FAIL."), a(o);
        }
      }
    }
    function Y(e) {
      a("Injecting pinmarklet into tab " + e.tabId),
        c.scripting.executeScript({ target: { tabId: e.tabId }, files: [l.inject.pinmarklet] });
    }
    function Q() {
      u({ to: "logic", act: "closeSave" });
    }
    function Z() {
      u({ to: "logic", act: "closeSave" }), c.tabs.create({ url: `https://${t.ctrl.server.www}${t.ctrl.server.domain}/login/` });
    }
    function ee(e) {
      x().then((o) => {
        if (o.auth && o.xRequestForgeryToken) {
          const n = { auth: !0, xRequestForgeryToken: o.xRequestForgeryToken, method: "PUT", url: t.endpoint.api + "boards/?" };
          e.data.name &&
            ((n.url = n.url + "name=" + encodeURIComponent(e.data.name)),
            e.data.secret && (n.url = n.url + "&privacy=secret"),
            m(n).then((r) => {
              if ((a("Board create results"), a(r), (r.response || {}).status === "success")) {
                const s = r.response.data;
                u({ to: e.replyTo, act: "newBoardWin", data: s }),
                  T({ objectIdStr: s.id, eventType: "BOARD_CREATE" }),
                  c.storage.local.get("boards", (i) => {
                    i.boards.unshift({
                      id: s.id,
                      image_cover_url: s.image_cover_url || s.image_thumbnail_url,
                      name: s.name,
                      privacy: s.privacy,
                      is_collaborative: !1,
                      section_count: 0,
                      orderModified: Date.now()
                    }),
                      p({ boards: i.boards });
                  });
              } else u({ to: e.replyTo, act: "newBoardFail", data: r.response });
            }));
        } else u({ to: e.replyTo, act: "newBoardFail", data: { message: t.msg.msgOops, message_detail: t.msg.msgLoginFail } });
      });
    }
    function te(e) {
      x().then((o) => {
        if (o.auth && o.xRequestForgeryToken) {
          const n = {
            auth: !0,
            xRequestForgeryToken: o.xRequestForgeryToken,
            method: "PUT",
            url: `${t.endpoint.api}board/${e.data.board}/sections/?`
          };
          e.data.title &&
            e.data.board &&
            ((n.url = n.url + "title=" + encodeURIComponent(e.data.title)),
            m(n).then((r) => {
              a("Section create results"),
                a(r),
                (r.response || {}).status === "success"
                  ? (u({ to: e.replyTo, act: "newSectionWin", data: r.response.data }),
                    c.storage.local.get("boards", (s) => {
                      let i = !1;
                      s.boards.filter((d) => {
                        d.id === e.data.board &&
                          ((i = !0),
                          d.sections || (d.sections = []),
                          d.sections.push({ id: r.response.data.id, title: e.data.title }),
                          d.sections.sort((f, g) => (f.title > g.title ? 1 : -1)),
                          (d.orderModified = 0));
                      }),
                        i && p({ boards: s.boards });
                    }))
                  : u({ to: e.replyTo, act: "newSectionFail", data: r.response });
            }));
        } else u({ to: e.replyTo, act: "newSectionFail", data: { message: t.msg.msgOops, message_detail: t.msg.msgLoginFail } });
      });
    }
    function ae(e) {
      e.boards && e.boards.length > 0 && u({ to: "logic", act: "openSave", data: e });
    }
    function ne(e) {
      setTimeout(function () {
        u({ to: "save", act: "renderStructure", data: e.data });
      }, 10);
    }
    function oe(e) {
      c.tabs.captureVisibleTab((o) => {
        a("screen captured"), u({ to: "save", act: "renderSearch", data: S(y({}, e.data), { method: "r", searchMe: o }) });
      });
    }
    function re(e) {
      let o;
      e.split(",")[0].indexOf("base64") >= 0 ? (o = atob(e.split(",")[1])) : (o = unescape(e.split(",")[1]));
      const n = e.split(",")[0].split(":")[1].split(";")[0],
        r = new Uint8Array(o.length);
      for (let s = 0; s < o.length; s++) r[s] = o.charCodeAt(s);
      return new Blob([r], { type: n });
    }
    function se(e) {
      const o = "save";
      ((r) => {
        const s = { method: "PUT", url: `${t.endpoint.api}visual_search/extension/image/`, formData: new FormData() };
        s.formData.append("x", r.data.x || 0),
          s.formData.append("y", r.data.y || 0),
          s.formData.append("h", r.data.h || 1),
          s.formData.append("w", r.data.w || 1),
          s.formData.append("client_id=", t.ctrl.clientId),
          s.formData.append("base_scheme", "https"),
          s.formData.append("add_fields", "pin.pinner(),pin.rich_summary,pin.dominant_color,pin.board()"),
          s.formData.append("image", re(r.data.img)),
          t.puid && s.formData.append("viewing_user_id", t.puid),
          m(s).then((i) => {
            (i.response || {}).status
              ? (a("Search API call succeeded."),
                ((i.response || {}).data || {}).length
                  ? ((t.userInfo || {}).id && (i.response.auth = !0), u({ to: o, act: "showResults", data: i.response }))
                  : (u({ to: o, act: "searchFail", data: "Search API call had no results." }), a("Search API call had no results.")))
              : (u({ to: o, act: "searchFail", data: "Search API call failed." }), a("Search API call failed."));
          });
      })(e);
    }
    function ie(e) {
      x().then((o) => {
        if ((a("Auth State to save "), a(o), o.auth && o.xRequestForgeryToken)) {
          a("Parsing Pins to be saved"), a(e.data.pins);
          for (let n of e.data.pins) {
            a("Pin being parsed"), a(n);
            const r = {
              auth: !0,
              xRequestForgeryToken: o.xRequestForgeryToken,
              url: `${t.endpoint.api}pins/`,
              formData: new FormData(),
              method: "PUT"
            };
            r.formData.append("method", "extension"),
              r.formData.append("add_fields", "user.is_partner"),
              r.formData.append("description", (n.description || "").substr(0, 500)),
              r.formData.append("board_id", e.data.board),
              e.data.section && r.formData.append("section", e.data.section),
              n.meta && typeof n.meta == "object" && r.formData.append("found_metadata", JSON.stringify(n.meta)),
              n.id
                ? ((r.url = r.url + `${n.id}/repin/`), (r.method = "POST"))
                : (r.formData.append("source_url", n.url),
                  n.media
                    ? (a("Image resized?"),
                      a(n.imageConverted.dataURI),
                      n.imageConverted.dataURI && ((n.convertedFromUrl = n.media), (n.media = n.imageConverted.dataURI)),
                      n.media.match(/^data/)
                        ? (r.formData.append("image_base64", n.media),
                          n.convertedFromUrl && r.formData.append("image_url", n.convertedFromUrl))
                        : r.formData.append("image_url", n.media))
                    : (r.formData.append("isGeneratedTextImage", "true"), n.color && r.formData.append("color", n.color)));
            const s = { funnel_uuid: n.funnel_uuid, domain_url: n.funnel_url || n.url };
            s.domain_url && (s.domain_url.match(/^https?:\/\//) ? (s.domain_url = s.domain_url.split("/")[2]) : delete s.domain_url),
              a("Save Object"),
              a(r.formData),
              m(r).then((i) => {
                a("Save results"),
                  a(i.response),
                  (i.response || {}).status === "success"
                    ? (a("Pin saved."),
                      c.storage.local.get("boards", (d) => {
                        let f = 0;
                        a(`Looking for board id ${e.data.board}`),
                          d.boards.filter((g, N) => {
                            g.id === e.data.board && (f = N), a("Found saved board index");
                          }),
                          f &&
                            (a("Saved board index is greater than zero, shifting and saving boards back to local storage"),
                            d.boards.unshift(d.boards.splice(f, 1)[0]),
                            p({ boards: d.boards }));
                      }),
                      (t.userInfo.lastPinSaveTime = Date.now()),
                      p({ userInfo: t.userInfo }),
                      a("Response json"),
                      a(i.response.data),
                      (i.response.data.title = e.data.sectionName),
                      T({ eventType: "USER_ACTIVE", viewType: "BROWSER_EXTENSION_DAU" }),
                      T({ objectIdStr: i.response.data.id, eventType: "PIN_CREATE", auxData: s }),
                      u({ to: e.replyTo, act: "newPinWin", data: i.response.data, pin: n, total: e.data.pins.length }))
                    : (a("Pin failed."),
                      T({ eventType: "PIN_CREATE_FAILURE", auxData: s }),
                      u({ to: e.replyTo, act: "newPinFail", data: i.response }));
              });
          }
        } else u({ to: e.replyTo, act: "newPinFail", data: { msg: t.msg.msgOops, message_detail: t.msg.msgLoginFail } });
      });
    }
    function ce(e) {
      a("Attempting to activate an experiment"),
        a(e),
        e.experimentName
          ? H(e.experimentName).then((o) => {
              if ((a(`Found group ${o} for experiment ${e.experimentName}.`), e.callback)) {
                a(`returning to ${e.callback} in ${e.via}.`);
                const n = { to: e.via, act: e.callback, group: o };
                e.data && (n.data = e.data), u(n);
              } else a("Activation attempted without callback");
            })
          : (a("Could not activate; need experiment name"), a(e));
    }
    function de(e) {
      T(e.data);
    }
    const L = {
      injectLogic: W,
      closeGrid: z,
      populateGrid: K,
      checkFeatureBlock: X,
      injectPinmarklet: Y,
      refreshContextMenus: J,
      closeSave: Q,
      getAuthHelp: Z,
      newBoard: ee,
      newSection: te,
      openSave: ae,
      populateSave: ne,
      populateSearch: oe,
      runSearch: se,
      save: ie,
      activate: ce,
      contextLog: de,
      login: D
    };
    function le() {
      c.runtime.onMessage.addListener((e, o) => {
        e.to === l.me &&
          (a("Message received"),
          a(e),
          e.act && typeof L[e.act] == "function"
            ? (((o || {}).tab || {}).id && (e.tabId = o.tab.id), L[e.act](e))
            : a("No handler found for " + e.act, 1));
      });
    }
    function ue() {
      let e = !1;
      (t.xv = "xx" + c.runtime.getManifest().version),
        (t.browserType = t.ctrl.ctx.BrowserTypes.OTHER),
        l.browserTest.filter((n) => {
          if (!e && navigator.userAgent.match(n.r))
            switch (((t.xv = n.k + c.runtime.getManifest().version), (e = !0), n.k)) {
              case "ff":
                t.browserType = t.ctrl.ctx.BrowserTypes.FIREFOX;
                break;
              case "ms":
                t.browserType = t.ctrl.ctx.BrowserTypes.EDGE;
                break;
              case "op":
                t.browserType = t.ctrl.ctx.BrowserTypes.OPERA;
                break;
              case "cr":
                t.browserType = t.ctrl.ctx.BrowserTypes.CHROME;
                break;
            }
        }),
        p({ xv: t.xv }),
        (t.endpoint.api = `https://${t.ctrl.server.api}${t.ctrl.server.domain}/v3/`),
        (t.endpoint.trk = `https://${t.ctrl.server.trk}${t.ctrl.server.domain}/v3/`),
        p({ debug: l.debug }),
        G();
      const o = `https://${t.ctrl.server.www}${t.ctrl.server.domain}/_/_/about/browser-button/uninstall/?xv=${t.xv}`;
      c.runtime.setUninstallURL(o),
        a("setting uninstall URL to " + o),
        a("Listening Messages"),
        le(),
        c.action.onClicked.addListener(() => {
          u({ to: "logic", act: "openImagePicker" });
        }),
        t.debug && c.action.setBadgeText({ text: c.runtime.getManifest().version.replace(/\./g, "") }),
        c.tabs.onActivated.addListener(() => {
          B();
        }),
        c.windows.onFocusChanged.addListener(() => {
          B();
        }),
        D(),
        m({ url: c.runtime.getURL("./v5/data/hashList.json") }).then((n) => {
          (t.hashList = n.response), a(`hashList loaded; ${t.hashList.length} items found`);
        });
    }
    function pe() {
      t.msg = {};
      for (const e in l.translateThese) t.msg[e] = c.i18n.getMessage(e);
      a("Messages retrieved from i18n:"),
        a(t.msg),
        p({ msg: t.msg }),
        (t.debug = l.debug),
        p({ debug: l.debug }),
        (t.ctrl = l.ctrl),
        p({ ctrl: l.ctrl }),
        ue();
    }
    E(),
      c.storage.local.get(null, (e) => {
        for (let o in e) t[o] = e[o];
        t.msg && (t.msg = t.msg[l.me]),
          t.override &&
            console.log(`You have global overrides set thusly:

${JSON.stringify(t.override, null, 2)}

Run this:

chrome.storage.local.remove("override");

... to remove.`),
          pe();
      });
  }
})();
