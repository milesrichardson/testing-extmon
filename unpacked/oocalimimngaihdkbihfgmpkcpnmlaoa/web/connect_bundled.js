/*******************************************************
 * Copyright (C) 2018-2023 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  "use strict";
  const e = chrome.runtime.id,
    n = ["bpgopfmgmnojmhnhmgpfmpnookgbmkko", "oocalimimngaihdkbihfgmpkcpnmlaoa", "igbncjcgfkfnfgbaieiimpfkobabmkce"],
    t = "redirectDataMap",
    o = "Failed to read chrome storage. Please refresh the page and try again";
  var i = function (e, n, t, o) {
    return new (t || (t = Promise))(function (i, s) {
      function c(e) {
        try {
          a(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function r(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var n;
        e.done
          ? i(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(c, r);
      }
      a((o = o.apply(e, n || [])).next());
    });
  };
  const s = new (class {
    getItemsAsync(e) {
      return i(this, void 0, void 0, function* () {
        return new Promise((n, t) => {
          chrome.storage.local.get(e, (e) => {
            chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), t(new Error(o))) : n(e);
          });
        });
      });
    }
    getAllItemsAsync() {
      return i(this, void 0, void 0, function* () {
        return new Promise((e, n) => {
          chrome.storage.local.get(null, (t) => {
            chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), n(new Error(o))) : e(t);
          });
        });
      });
    }
  })();
  Object.freeze(s);
  const c = s;
  var r = function (e, n, t, o) {
    return new (t || (t = Promise))(function (i, s) {
      function c(e) {
        try {
          a(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function r(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var n;
        e.done
          ? i(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(c, r);
      }
      a((o = o.apply(e, n || [])).next());
    });
  };
  const a = new (class {
    setItemsAsync(e) {
      return r(this, void 0, void 0, function* () {
        return new Promise((n, t) => {
          chrome.storage.local.set(e, () => {
            chrome.runtime.lastError ? t(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : n();
          });
        });
      });
    }
  })();
  Object.freeze(a);
  const d = a;
  var u;
  !(function (e) {
    (e.REGISTER = "register"),
      (e.PARTY_START = "party_start"),
      (e.PARTY_JOIN = "party_join"),
      (e.PARTY_END = "party_end"),
      (e.PARTY_SHARE = "party_share");
  })(u || (u = {}));
  var l = function (e, n, t, o) {
    return new (t || (t = Promise))(function (i, s) {
      function c(e) {
        try {
          a(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function r(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var n;
        e.done
          ? i(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(c, r);
      }
      a((o = o.apply(e, n || [])).next());
    });
  };
  const f = new (class {
    getRedirectDataForTabAsync(e) {
      return l(this, void 0, void 0, function* () {
        const n = (yield c.getItemsAsync([t])).redirectDataMap,
          o = this.t(e);
        if (n && n[o]) {
          const e = n[o];
          if (this.o(e)) return e;
        }
      });
    }
    deleteRedirectDataForTabAsync(e) {
      return l(this, void 0, void 0, function* () {
        const n = (yield c.getItemsAsync([t])).redirectDataMap,
          o = this.t(e);
        n && n[o] && delete n[o], yield d.setItemsAsync({ [t]: n });
      });
    }
    t(e) {
      return e;
    }
    storeRedirectDataForTabAsync(e, n) {
      return l(this, void 0, void 0, function* () {
        console.log("store data for tab " + e);
        const o = this.t(n);
        let i = yield c.getItemsAsync([t]);
        (i[o] = e), (i = this.i(i)), yield d.setItemsAsync({ [t]: i });
      });
    }
    i(e) {
      return (function (e, n) {
        const t = {};
        let o;
        for (o in e) e.hasOwnProperty(o) && n(e[o]) && (t[o] = e[o]);
        return t;
      })(e, this.o);
    }
    o(e) {
      const n = e.date;
      return void 0 !== n && "number" == typeof n && n <= Date.now() && Date.now() - n < 108e5;
    }
  })();
  Object.freeze(f);
  const h = f,
    m = { $6: ["*://*/*"] },
    v = "Service_Background",
    p = "Iframe";
  class y {
    constructor(e, n, t) {
      (this.sender = e), (this.target = n), (this.type = t);
    }
  }
  class w extends y {
    constructor(e, n, t) {
      super(e, n, t), (this.type = t);
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
      (e.GET_EXPERIMENT_FLAG = "getExpFlag"),
      (e.USER_LIST = "userList"),
      (e.USER_AUTHENTICATED = "userAuthenticated"),
      (e.BLOCK_CSP = "blockCSP");
  })(g || (g = {}));
  class x extends w {
    constructor(e, n, t) {
      super(e, n, g.LOG_EVENT), (this.data = t), (this.sender = e), (this.target = n);
    }
  }
  var T = console.log.bind(window.console),
    b = function (e, n, t, o) {
      return new (t || (t = Promise))(function (i, s) {
        function c(e) {
          try {
            a(o.next(e));
          } catch (e) {
            s(e);
          }
        }
        function r(e) {
          try {
            a(o.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          var n;
          e.done
            ? i(e.value)
            : ((n = e.value),
              n instanceof t
                ? n
                : new t(function (e) {
                    e(n);
                  })).then(c, r);
        }
        a((o = o.apply(e, n || [])).next());
      });
    };
  const P = new (class {
      addListener(e) {
        chrome.runtime.onMessage.addListener(e), chrome.runtime.onMessage.addListener(e);
      }
      removeListener(e) {
        chrome.runtime.onMessage.removeListener(e);
      }
      sendMessageToTabAsync(e, n, t = 2e4) {
        return b(this, void 0, void 0, function* () {
          return new Promise((o, i) => {
            const s = setTimeout(() => {
              console.log("send timeout"), i("Message Timeout");
            }, t);
            try {
              chrome.tabs.sendMessage(n, e, (n) => {
                chrome.runtime.lastError && T(chrome.runtime.lastError.message + JSON.stringify(e)), clearTimeout(s), o(n);
              });
            } catch (e) {
              clearTimeout(s), i(e);
            }
          });
        });
      }
      u(n, t) {
        return b(this, void 0, void 0, function* () {
          return new Promise((o, i) => {
            let s = null;
            t &&
              (s = setTimeout(() => {
                i({ error: "Send Message Timeout" });
              }, t));
            try {
              chrome.runtime.sendMessage(e, n, (e) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(n)), s && clearTimeout(s), o(e);
              });
            } catch (e) {
              s && clearTimeout(s), i(e);
            }
          });
        });
      }
    })(),
    S = P;
  class k extends w {
    constructor(e, n, t) {
      super(e, n, g.LOG_EXPERIMENT), (this.data = t);
    }
  }
  var A, _, D;
  !(function (e) {
    (e.DO_AUTH_SIGN_IN = "doAuthSignIn"), (e.GET_AUTH_TOKEN = "getAuthToken"), (e.SIGN_OUT = "signOut");
  })(A || (A = {}));
  class I extends y {
    constructor(e, n, t) {
      super(e, n, t), (this.type = t);
    }
  }
  class C extends I {
    constructor(e, n) {
      super(e, n, A.DO_AUTH_SIGN_IN);
    }
  }
  class M extends I {
    constructor(e, n) {
      super(e, n, A.GET_AUTH_TOKEN);
    }
  }
  class E extends I {
    constructor(e, n) {
      super(e, n, A.SIGN_OUT);
    }
  }
  class N extends w {
    constructor(e, n) {
      super(e, n, g.GET_ACTIVE_PARTY);
    }
  }
  class O extends w {
    constructor(e, n, t) {
      super(e, n, g.ACCEPT_DROPIN), (this.data = t);
    }
  }
  !(function (e) {
    (e.WITH_ACTIVITY = "with_activity"), (e.NO_ACTIVITY = "no_activity"), (e.OFFLINE = "offline");
  })(_ || (_ = {}));
  class R extends w {
    constructor(e, n, t) {
      super(e, n, g.SET_STATUS_TYPE), (this.data = t);
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
  var V = function (e, n, t, o) {
    return new (t || (t = Promise))(function (i, s) {
      function c(e) {
        try {
          a(o.next(e));
        } catch (e) {
          s(e);
        }
      }
      function r(e) {
        try {
          a(o.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var n;
        e.done
          ? i(e.value)
          : ((n = e.value),
            n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                })).then(c, r);
      }
      a((o = o.apply(e, n || [])).next());
    });
  };
  const j = "https://www.netflix.com/watch/*";
  let $,
    F,
    G = "new";
  function U(e) {
    return (
      "https://www.tele.pe" === e.origin && (G = "old"),
      (function (e) {
        if (null != n.find((n) => e.origin === `chrome-extension://${n}`)) return !0;
        return null != e.origin.match(/^https:\/\/[^.]*\.(?:(?:tele\.pe)|(?:teleparty\.com)|(?:netflixparty\.com))$/);
      })(e)
    );
  }
  function L() {
    return V(this, void 0, void 0, function* () {
      return new Promise((e) => {
        console.log("check has default permissions", m.$6),
          chrome.permissions.contains({ origins: m.$6 }, (n) => {
            console.log(n), e(n);
          });
      });
    });
  }
  function W(e, n) {
    return V(this, void 0, void 0, function* () {
      const t = yield q();
      t && (yield h.storeRedirectDataForTabAsync(e, t));
      const { sessionId: o, service: i } = e,
        s = new x(p, v, { sessionId: o, eventType: `redirect-${G}-${i}-chrome` }),
        c = new x(p, v, { name: "user_click", action: { description: `redirect-${G}-${i}-chrome` } });
      try {
        yield S.u(c, 2500), yield S.u(s, 2500);
      } finally {
        n("resolveRedirect");
      }
    });
  }
  function q() {
    return V(this, void 0, void 0, function* () {
      return yield S.u(new w(p, v, g.GET_TAB_ID));
    });
  }
  console.log("Connect Loaded", window.origin, window.location),
    navigator.serviceWorker &&
      navigator.serviceWorker.addEventListener("message", (e) => {
        console.log(e), parent.postMessage(e.data, "*");
      }),
    window.addEventListener(
      "message",
      function (e) {
        var n;
        try {
          if (U(e)) {
            const n = e.data;
            if (n && n.type && !n.from_connect) {
              const t = (function (e) {
                return (n) => {
                  var t;
                  if (e.data.callbackId) {
                    const t = { callbackId: e.data.callbackId, data: n, from_connect: !0 };
                    try {
                      window.parent.postMessage(t, e.origin);
                    } catch (e) {}
                  } else
                    null === (t = window.parent) ||
                      void 0 === t ||
                      t.postMessage(Object.assign(Object.assign({}, n), { from_connect: !0 }), e.origin);
                };
              })(e);
              "Content_Script" === n.target || n.target === v
                ? (function (e, n) {
                    V(this, void 0, void 0, function* () {
                      const t = yield S.u(e);
                      n(t);
                    });
                  })(n, t)
                : "SetRedirectData" == n.type
                ? W(n.data, t)
                : n.sessionId
                ? W(n, t)
                : "GetPermissions" === n.type
                ? (function (e, n) {
                    V(this, void 0, void 0, function* () {
                      const t = yield L(),
                        o =
                          t ||
                          (yield (function (e) {
                            return V(this, void 0, void 0, function* () {
                              return new Promise((n) => {
                                var t;
                                const o = () =>
                                  V(this, void 0, void 0, function* () {
                                    const t = `${"all_sites"}-${e}-chrome`,
                                      i = new k(p, v, {
                                        experimentName: "permissions_request",
                                        experimentVersion: t,
                                        eventType: "permissions-prompted"
                                      });
                                    S.u(i),
                                      chrome.permissions.request({ origins: m.$6 }, (e) => {
                                        var i;
                                        null == e &&
                                          console.log(null === (i = chrome.runtime.lastError) || void 0 === i ? void 0 : i.message);
                                        const s = new k(p, v, {
                                          experimentName: "permissions_request",
                                          experimentVersion: t,
                                          eventType: e ? "permissions-granted" : "permissions-denied"
                                        });
                                        S.u(s, 2500)
                                          .catch(() => {})
                                          .then(() => {
                                            var t;
                                            n(e),
                                              null === (t = document.querySelector("html")) ||
                                                void 0 === t ||
                                                t.removeEventListener("click", o);
                                          });
                                      });
                                  });
                                null === (t = document.querySelector("html")) || void 0 === t || t.addEventListener("click", o);
                              });
                            });
                          })(n.site));
                      e(o);
                    });
                  })(t, n.data)
                : "CheckHasPermissions" === n.type
                ? L().then(t)
                : "logExperiment" === n.type
                ? (function (e, n) {
                    V(this, void 0, void 0, function* () {
                      const { experimentName: t, experimentVersion: o, event: i } = e,
                        s = new k(p, v, { experimentName: t, experimentVersion: o, eventType: i });
                      try {
                        yield S.u(s, 2500);
                      } finally {
                        n();
                      }
                    });
                  })(n.data, t)
                : "logEvent" === n.type
                ? (function (e, n) {
                    V(this, void 0, void 0, function* () {
                      const t = new x(p, v, e.event);
                      try {
                        S.u(t, 2500);
                      } finally {
                        n();
                      }
                    });
                  })(n.data, t)
                : "SetPermId" === n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = yield c.getAllItemsAsync();
                      n.userId || (n.userId = e);
                    });
                  })(n.data)
                : "storeExperimentVersion" === n.type
                ? (function (e, n) {
                    var t;
                    V(this, void 0, void 0, function* () {
                      const { experimentName: o, experimentVersion: i } = e,
                        s = yield c.getItemsAsync(["experiments"]),
                        r = null !== (t = s.experiments) && void 0 !== t ? t : {};
                      r[o] = i;
                      try {
                        yield d.setItemsAsync({ experiments: r });
                      } finally {
                        n();
                      }
                    });
                  })(n.data, t)
                : "GetPermId" === n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = (yield c.getAllItemsAsync()).userId;
                      e(n);
                    });
                  })(t)
                : "GetActiveNetflixTabs" === n.type
                ? (function (e) {
                    chrome.tabs.query({ url: j }, (n) => {
                      e(n);
                    });
                  })(t)
                : "CloseNetflixTabs" === n.type
                ? (function (e) {
                    chrome.tabs.query({ url: j }, (n) => {
                      const t = n.map((e) => e.id).filter((e) => !!e);
                      chrome.tabs.remove(t), e();
                    });
                  })(t)
                : "AddSidebarHandler" === n.type
                ? (function (e, n) {
                    V(this, void 0, void 0, function* () {
                      console.log("add sidebar handler"), ($ = e), (F = yield q()), n(F);
                    });
                  })(e.origin, t)
                : "DoGoogleAuth" === n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = new C(p, v);
                      yield S.u(n), e();
                    });
                  })(t)
                : "DoSignOut" === n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = new E(p, v);
                      yield S.u(n), e();
                    });
                  })(t)
                : "GetAuthToken" === n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = new M(p, v),
                        t = yield S.u(n);
                      e(t);
                    });
                  })(t)
                : "LoadSessionTab" === n.type
                ? (function (e, n) {
                    V(this, void 0, void 0, function* () {
                      chrome.tabs.create(e.tabData, (n) =>
                        V(this, void 0, void 0, function* () {
                          const t = n.id;
                          t && (yield h.storeRedirectDataForTabAsync(e.sessionData, t));
                        })
                      );
                    });
                  })(n.data)
                : "GetActiveParty" === n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = new N(p, v),
                        t = yield S.u(n);
                      e(t);
                    });
                  })(t)
                : "AcceptDropin" === n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = e.sessionId;
                      S.u(new O(p, v, { sessionId: n }));
                    });
                  })(n.data)
                : "SetStatusType" === n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = e.type;
                      S.u(new R(p, v, n));
                    });
                  })(n.data)
                : "GetStatusType" == n.type
                ? (function (e) {
                    V(this, void 0, void 0, function* () {
                      const n = yield S.u(new w(p, v, g.GET_STATUS_TYPE));
                      e(n);
                    });
                  })(t)
                : console.log("Unsupported Operation " + n.type);
            }
          }
        } catch (t) {
          t &&
            t.message.includes("Extension context invalidated") &&
            (null === (n = window.top) || void 0 === n || n.postMessage("tp_reload", e.origin));
        }
      },
      !1
    ),
    S.addListener(function (e, n, t) {
      var o;
      return "TP_Sidebar" === e.target && (null === (o = n.tab) || void 0 === o ? void 0 : o.id) === F
        ? null != $
          ? (window.parent.postMessage(e, $), t(), !0)
          : (console.warn("Not ready yet"), t(), !0)
        : (e.type === D.ON_PURCHASE && null != $ && window.parent.postMessage(e, $), !1);
    });
})();
