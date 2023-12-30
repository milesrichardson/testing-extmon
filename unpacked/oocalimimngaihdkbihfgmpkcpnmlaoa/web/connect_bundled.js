/*******************************************************
 * Copyright (C) 2018-2023 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  "use strict";
  const e = "Failed to read chrome storage. Please refresh the page and try again";
  var t = function (e, t, n, o) {
    return new (n || (n = Promise))(function (i, s) {
      function r(e) {
        try {
          a(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(r, c);
      }
      a((o = o.apply(e, t || [])).next());
    });
  };
  const n = new (class {
    getItemsAsync(n) {
      return t(this, void 0, void 0, function* () {
        return new Promise((t, o) => {
          chrome.storage.local.get(n, (n) => {
            chrome.runtime.lastError ? o(new Error(e)) : t(n);
          });
        });
      });
    }
    getAllItemsAsync() {
      return t(this, void 0, void 0, function* () {
        return new Promise((t, n) => {
          chrome.storage.local.get(null, (o) => {
            chrome.runtime.lastError ? n(new Error(e)) : t(o);
          });
        });
      });
    }
  })();
  Object.freeze(n);
  const o = n;
  var i = function (e, t, n, o) {
    return new (n || (n = Promise))(function (i, s) {
      function r(e) {
        try {
          a(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(r, c);
      }
      a((o = o.apply(e, t || [])).next());
    });
  };
  const s = new (class {
    setItemsAsync(e) {
      return i(this, void 0, void 0, function* () {
        return new Promise((t, n) => {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError ? n(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : t();
          });
        });
      });
    }
  })();
  Object.freeze(s);
  const r = s;
  const c = chrome.runtime.id,
    a = ["bpgopfmgmnojmhnhmgpfmpnookgbmkko", "oocalimimngaihdkbihfgmpkcpnmlaoa", "igbncjcgfkfnfgbaieiimpfkobabmkce"],
    d = "redirectDataMap";
  var u;
  !(function (e) {
    (e.REGISTER = "register"), (e.PARTY_START = "party_start"), (e.PARTY_JOIN = "party_join"), (e.PARTY_END = "party_end");
  })(u || (u = {}));
  var l = function (e, t, n, o) {
    return new (n || (n = Promise))(function (i, s) {
      function r(e) {
        try {
          a(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(r, c);
      }
      a((o = o.apply(e, t || [])).next());
    });
  };
  const f = new (class {
    getRedirectDataForTabAsync(e) {
      return l(this, void 0, void 0, function* () {
        const t = (yield o.getItemsAsync([d])).redirectDataMap,
          n = this.t(e);
        if (t && t[n]) {
          const e = t[n];
          if (this.o(e)) return e;
        }
      });
    }
    deleteRedirectDataForTabAsync(e) {
      return l(this, void 0, void 0, function* () {
        const t = (yield o.getItemsAsync([d])).redirectDataMap,
          n = this.t(e);
        t && t[n] && delete t[n], yield r.setItemsAsync({ [d]: t });
      });
    }
    t(e) {
      return e;
    }
    storeRedirectDataForTabAsync(e, t) {
      return l(this, void 0, void 0, function* () {
        const n = this.t(t);
        let i = yield o.getItemsAsync([d]);
        (i[n] = e), (i = this.i(i)), yield r.setItemsAsync({ [d]: i });
      });
    }
    i(e) {
      return (function (e, t) {
        const n = {};
        let o;
        for (o in e) e.hasOwnProperty(o) && t(e[o]) && (n[o] = e[o]);
        return n;
      })(e, this.o);
    }
    o(e) {
      const t = e.date;
      return void 0 !== t && "number" == typeof t && t <= Date.now() && Date.now() - t < 108e5;
    }
  })();
  Object.freeze(f);
  const h = f,
    v = { $6: ["*://*/*"] },
    m = "Service_Background",
    p = "Iframe";
  class y {
    constructor(e, t, n) {
      (this.sender = e), (this.target = t), (this.type = n);
    }
  }
  class w extends y {
    constructor(e, t, n) {
      super(e, t, n), (this.type = n);
    }
  }
  var g;
  !(function (e) {
    (e.JOIN_SESSION = "joinSession"),
      (e.ACCEPT_DROPIN = "acceptDropin"),
      (e.SET_STATUS_TYPE = "setStatusType"),
      (e.GET_STATUS_TYPE = "getStatusType"),
      (e.GET_VIDEO_DATA = "getVideoData"),
      (e.LOAD_SESSION = "loadSession"),
      (e.NO_SESSION_DATA = "noSessionData"),
      (e.ON_NOTIF = "onNotif"),
      (e.FORWARD_TO_SIDEBAR = "forwardToSidebar"),
      (e.TEARDOWN = "teardown"),
      (e.ON_VIDEO_UPDATE = "onVideoUpdate"),
      (e.SOCKET_LOST_CONNECTION = "socketLostConnection"),
      (e.REBOOT = "socketReconnect"),
      (e.LOG_EVENT = "logEvent"),
      (e.LOG_EXPERIMENT = "logExperiment"),
      (e.STAY_ALIVE = "stayAlive"),
      (e.LOAD_CHAT_WINDOW = "loadChatWindow"),
      (e.RESET_CHAT_WINDOW = "resetChatWindow"),
      (e.HIDE_CHAT_WINDOW = "hideChatWindow"),
      (e.SET_USER_PRESENCE = "setUserPresence"),
      (e.TOGGLE_OPEN_PARTY = "toggleOpenParty"),
      (e.GET_ACTIVE_PARTY = "getActiveParty"),
      (e.GET_TAB_ID = "getTabId"),
      (e.SET_ACTIVE_PARTY = "setActiveParty"),
      (e.FULLSCREEN_WINDOW = "fullscreenWindow"),
      (e.MAX_WINDOW = "maxWindow"),
      (e.GET_EXPERIMENT_FLAG = "getExpFlag");
  })(g || (g = {}));
  class x extends w {
    constructor(e, t, n) {
      super(e, t, g.LOG_EVENT), (this.data = n), (this.sender = e), (this.target = t);
    }
  }
  var T = console.log.bind(window.console);
  const b = new (class {
      addListener(e) {
        chrome.runtime.onMessage.addListener(e);
      }
      removeListener(e) {
        chrome.runtime.onMessage.removeListener(e);
      }
      sendMessageToTabAsync(e, t, n = 2e4) {
        return new Promise((o, i) => {
          const s = setTimeout(() => {
            i();
          }, n);
          try {
            chrome.tabs.sendMessage(t, e, (t) => {
              chrome.runtime.lastError && T(chrome.runtime.lastError.message + JSON.stringify(e)), clearTimeout(s), o(t);
            });
          } catch (e) {
            clearTimeout(s), i(e);
          }
        });
      }
      u(e, t) {
        return new Promise((n, o) => {
          let i = null;
          t &&
            (i = setTimeout(() => {
              o({ error: "Send Message Timeout" });
            }, t));
          try {
            chrome.runtime.sendMessage(c, e, (t) => {
              chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(e)), i && clearTimeout(i), n(t);
            });
          } catch (e) {
            i && clearTimeout(i), o(e);
          }
        });
      }
    })(),
    P = b;
  class S extends w {
    constructor(e, t, n) {
      super(e, t, g.LOG_EXPERIMENT), (this.data = n);
    }
  }
  var A, k, D;
  !(function (e) {
    (e.DO_AUTH_SIGN_IN = "doAuthSignIn"), (e.GET_AUTH_TOKEN = "getAuthToken"), (e.SIGN_OUT = "signOut");
  })(A || (A = {}));
  class I extends y {
    constructor(e, t, n) {
      super(e, t, n), (this.type = n);
    }
  }
  class _ extends I {
    constructor(e, t) {
      super(e, t, A.DO_AUTH_SIGN_IN);
    }
  }
  class C extends I {
    constructor(e, t) {
      super(e, t, A.GET_AUTH_TOKEN);
    }
  }
  class E extends I {
    constructor(e, t) {
      super(e, t, A.SIGN_OUT);
    }
  }
  class M extends w {
    constructor(e, t) {
      super(e, t, g.GET_ACTIVE_PARTY);
    }
  }
  class N extends w {
    constructor(e, t, n) {
      super(e, t, g.ACCEPT_DROPIN), (this.data = n);
    }
  }
  !(function (e) {
    (e.WITH_ACTIVITY = "with_activity"), (e.NO_ACTIVITY = "no_activity"), (e.OFFLINE = "offline");
  })(k || (k = {}));
  class R extends w {
    constructor(e, t, n) {
      super(e, t, g.SET_STATUS_TYPE), (this.data = n);
    }
  }
  !(function (e) {
    (e.SET_USER_LIST = "setUserList"),
      (e.SET_CONNECTION_ID = "setConnectionId"),
      (e.LOAD_INIT_DATA = "loadInitData"),
      (e.SET_PAGE_TITLE = "setPageTitle"),
      (e.ADD_GIF_MESSAGE = "addGifMessage"),
      (e.SIDEBAR_MESSAGING_READY = "sidebarMessagingReady"),
      (e.RESET_VIEW = "resetView"),
      (e.HIDE_CHAT = "hideChat"),
      (e.ON_UPDATE_SETTINGS = "onUpdateSettings"),
      (e.PREVIEW_REACTION = "previewReaction"),
      (e.UPDATE_SETTINGS = "updateSettings"),
      (e.SET_REACTIONS_ACTIVE = "setReactionsActive"),
      (e.ON_FOCUS = "onSidebarFocus"),
      (e.SET_USER_ICON_URL = "setUserIconUrl"),
      (e.ADD_MESSAGE = "addMessage"),
      (e.CLEAR_MESSAGES = "clearMessages"),
      (e.SET_PRESENCE_MESSAGE = "setPresenceMessage"),
      (e.ON_PAGE_CLICK = "onPageClick"),
      (e.ON_PURCHASE = "onPurchase"),
      (e.DISPLAY_MODAL = "displayModal"),
      (e.OPEN_TAB = "openTab"),
      (e.ON_CHROME_STORAGE_UPDATE = "onChromeStorageUpdate"),
      (e.ON_WEB_RTC = "onWebRTC");
  })(D || (D = {}));
  var V = function (e, t, n, o) {
    return new (n || (n = Promise))(function (i, s) {
      function r(e) {
        try {
          a(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function c(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(r, c);
      }
      a((o = o.apply(e, t || [])).next());
    });
  };
  const O = "https://www.netflix.com/watch/*";
  console.log("Loaded");
  let $,
    F,
    G = "new";
  function U(e) {
    return (
      "https://www.tele.pe" === e.origin && (G = "old"),
      (function (e) {
        if (null != a.find((t) => e.origin === `chrome-extension://${t}`)) return !0;
        return null != e.origin.match(/^https:\/\/[^.]*\.(?:(?:tele\.pe)|(?:teleparty\.com)|(?:netflixparty\.com))$/);
      })(e)
    );
  }
  function j() {
    return V(this, void 0, void 0, function* () {
      return new Promise((e) => {
        chrome.permissions.contains({ origins: v.$6 }, (t) => {
          e(t);
        });
      });
    });
  }
  function L(e, t) {
    return V(this, void 0, void 0, function* () {
      const n = yield W();
      n && (yield h.storeRedirectDataForTabAsync(e, n));
      const { sessionId: o, service: i } = e,
        s = new x(p, m, { sessionId: o, eventType: `redirect-${G}-${i}-chrome` }),
        r = new x(p, m, { name: "user_click", action: { description: `redirect-${G}-${i}-chrome` } });
      try {
        yield P.u(r, 2500), yield P.u(s, 2500);
      } finally {
        t("resolveRedirect");
      }
    });
  }
  function W() {
    return V(this, void 0, void 0, function* () {
      return yield P.u(new w(p, m, g.GET_TAB_ID));
    });
  }
  navigator.serviceWorker.addEventListener("message", (e) => {
    console.log(e), parent.postMessage(e.data, "*");
  }),
    window.addEventListener(
      "message",
      function (e) {
        var t;
        try {
          if (U(e)) {
            const t = e.data;
            if (t) {
              const n = (function (e) {
                return (t) => {
                  var n;
                  if (e.data.callbackId) {
                    const n = { callbackId: e.data.callbackId, data: t };
                    try {
                      window.parent.postMessage(n, e.origin);
                    } catch (e) {}
                  } else null === (n = window.parent) || void 0 === n || n.postMessage(t, e.origin);
                };
              })(e);
              "Content_Script" === t.target || t.target === m
                ? (function (e, t) {
                    V(this, void 0, void 0, function* () {
                      const n = yield P.u(e);
                      t(n);
                    });
                  })(t, n)
                : "SetRedirectData" == t.type
                ? L(t.data, n)
                : t.sessionId
                ? L(t, n)
                : "GetPermissions" === t.type
                ? (function (e, t) {
                    V(this, void 0, void 0, function* () {
                      const n = yield j(),
                        o =
                          n ||
                          (yield (function (e) {
                            return V(this, void 0, void 0, function* () {
                              return new Promise((t) => {
                                var n;
                                const o = () =>
                                  V(this, void 0, void 0, function* () {
                                    const n = `${"all_sites"}-${e}-chrome`,
                                      i = new S(p, m, {
                                        experimentName: "permissions_request",
                                        experimentVersion: n,
                                        eventType: "permissions-prompted"
                                      });
                                    P.u(i),
                                      chrome.permissions.request({ origins: v.$6 }, (e) => {
                                        var i;
                                        null == e &&
                                          console.log(null === (i = chrome.runtime.lastError) || void 0 === i ? void 0 : i.message);
                                        const s = new S(p, m, {
                                          experimentName: "permissions_request",
                                          experimentVersion: n,
                                          eventType: e ? "permissions-granted" : "permissions-denied"
                                        });
                                        P.u(s, 2500)
                                          .catch(() => {})
                                          .then(() => {
                                            var n;
                                            t(e),
                                              null === (n = document.querySelector("html")) ||
                                                void 0 === n ||
                                                n.removeEventListener("click", o);
                                          });
                                      });
                                  });
                                null === (n = document.querySelector("html")) || void 0 === n || n.addEventListener("click", o);
                              });
                            });
                          })(t.site));
                      e(o);
                    });
                  })(n, t.data)
                : "CheckHasPermissions" === t.type
                ? j().then(n)
                : "logExperiment" === t.type
                ? (function (e, t) {
                    V(this, void 0, void 0, function* () {
                      const { experimentName: n, experimentVersion: o, event: i } = e,
                        s = new S(p, m, { experimentName: n, experimentVersion: o, eventType: i });
                      try {
                        yield P.u(s, 2500);
                      } finally {
                        t();
                      }
                    });
                  })(t.data, n)
                : "logEvent" === t.type
                ? (function (e, t) {
                    V(this, void 0, void 0, function* () {
                      const n = new x(p, m, e.event);
                      try {
                        P.u(n, 2500);
                      } finally {
                        t();
                      }
                    });
                  })(t.data, n)
                : "SetPermId" === t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = yield o.getAllItemsAsync();
                      t.userId || (t.userId = e);
                    });
                  })(t.data)
                : "storeExperimentVersion" === t.type
                ? (function (e, t) {
                    var n;
                    V(this, void 0, void 0, function* () {
                      const { experimentName: i, experimentVersion: s } = e,
                        c = yield o.getItemsAsync(["experiments"]),
                        a = null !== (n = c.experiments) && void 0 !== n ? n : {};
                      a[i] = s;
                      try {
                        yield r.setItemsAsync({ experiments: a });
                      } finally {
                        t();
                      }
                    });
                  })(t.data, n)
                : "GetPermId" === t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = (yield o.getAllItemsAsync()).userId;
                      e(t);
                    });
                  })(n)
                : "GetActiveNetflixTabs" === t.type
                ? (function (e) {
                    chrome.tabs.query({ url: O }, (t) => {
                      e(t);
                    });
                  })(n)
                : "CloseNetflixTabs" === t.type
                ? (function (e) {
                    chrome.tabs.query({ url: O }, (t) => {
                      const n = t.map((e) => e.id).filter((e) => !!e);
                      chrome.tabs.remove(n), e();
                    });
                  })(n)
                : "AddSidebarHandler" === t.type
                ? (function (e, t) {
                    V(this, void 0, void 0, function* () {
                      ($ = e), (F = yield W()), t(F);
                    });
                  })(e.origin, n)
                : "DoGoogleAuth" === t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = new _(p, m);
                      yield P.u(t), e();
                    });
                  })(n)
                : "DoSignOut" === t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = new E(p, m);
                      yield P.u(t), e();
                    });
                  })(n)
                : "GetAuthToken" === t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = new C(p, m),
                        n = yield P.u(t);
                      e(n);
                    });
                  })(n)
                : "LoadSessionTab" === t.type
                ? (function (e, t) {
                    V(this, void 0, void 0, function* () {
                      chrome.tabs.create(e.tabData, (t) =>
                        V(this, void 0, void 0, function* () {
                          const n = t.id;
                          n && (yield h.storeRedirectDataForTabAsync(e.sessionData, n));
                        })
                      );
                    });
                  })(t.data)
                : "GetActiveParty" === t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = new M(p, m),
                        n = yield P.u(t);
                      e(n);
                    });
                  })(n)
                : "AcceptDropin" === t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = e.sessionId;
                      P.u(new N(p, m, { sessionId: t }));
                    });
                  })(t.data)
                : "SetStatusType" === t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = e.type;
                      P.u(new R(p, m, t));
                    });
                  })(t.data)
                : "GetStatusType" == t.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const t = yield P.u(new w(p, m, g.GET_STATUS_TYPE));
                      e(t);
                    });
                  })(n)
                : n({ error: "Unsupported Operation" });
            }
          }
        } catch (n) {
          n &&
            n.message.includes("Extension context invalidated") &&
            (null === (t = window.top) || void 0 === t || t.postMessage("tp_reload", e.origin));
        }
      },
      !1
    ),
    P.addListener(function (e, t, n) {
      var o;
      if ("TP_Sidebar" === e.target && (null === (o = t.tab) || void 0 === o ? void 0 : o.id) === F) {
        if (null != $) return window.parent.postMessage(e, $), n(), !0;
        console.warn("Not ready yet");
      }
      return e.type === D.ON_PURCHASE && null != $ && window.parent.postMessage(e, $), !1;
    });
})();
