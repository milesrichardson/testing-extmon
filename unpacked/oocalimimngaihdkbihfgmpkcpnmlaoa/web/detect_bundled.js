/*******************************************************
 * Copyright (C) 2018-2023 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  "use strict";
  const e = chrome.runtime.id,
    t = !1;
  var o = console.log.bind(window.console),
    n = function (e, t, o, n) {
      return new (o || (o = Promise))(function (i, s) {
        function c(e) {
          try {
            a(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function r(e) {
          try {
            a(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof o
                ? t
                : new o(function (e) {
                    e(t);
                  })).then(c, r);
        }
        a((n = n.apply(e, t || [])).next());
      });
    };
  new (class {
    addListener(e) {
      chrome.runtime.onMessage.addListener(e), chrome.runtime.onMessage.addListener(e);
    }
    removeListener(e) {
      chrome.runtime.onMessage.removeListener(e);
    }
    sendMessageToTabAsync(e, t, i = 2e4) {
      return n(this, void 0, void 0, function* () {
        return new Promise((n, s) => {
          const c = setTimeout(() => {
            console.log("send timeout"), s("Message Timeout");
          }, i);
          try {
            chrome.tabs.sendMessage(t, e, (t) => {
              chrome.runtime.lastError && o(chrome.runtime.lastError.message + JSON.stringify(e)), clearTimeout(c), n(t);
            });
          } catch (e) {
            clearTimeout(c), s(e);
          }
        });
      });
    }
    t(t, o) {
      return n(this, void 0, void 0, function* () {
        return new Promise((n, i) => {
          let s = null;
          o &&
            (s = setTimeout(() => {
              i({ error: "Send Message Timeout" });
            }, o));
          try {
            chrome.runtime.sendMessage(e, t, (e) => {
              chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), n(e);
            });
          } catch (e) {
            s && clearTimeout(s), i(e);
          }
        });
      });
    }
  })();
  var i, s;
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
  })(i || (i = {})),
    (function (e) {
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
    })(s || (s = {}));
  var c = function (e, t, o, n) {
    return new (o || (o = Promise))(function (i, s) {
      function c(e) {
        try {
          a(n.next(e));
        } catch (e) {
          s(e);
        }
      }
      function r(e) {
        try {
          a(n.throw(e));
        } catch (e) {
          s(e);
        }
      }
      function a(e) {
        var t;
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof o
              ? t
              : new o(function (e) {
                  e(t);
                })).then(c, r);
      }
      a((n = n.apply(e, t || [])).next());
    });
  };
  console.log("Detect loaded"),
    window.addEventListener("message", (e) =>
      c(void 0, void 0, void 0, function* () {
        var t;
        if (
          e.source === window &&
          "from-tp-website" === (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.direction) &&
          "GetExtensionId" === e.data.message
        ) {
          console.log("respond");
          const t = chrome.runtime.getURL("");
          window.postMessage(
            { direction: "from-tp-content", message: "SetExtensionId", extensionId: t.substring(0, t.length - 1) },
            e.origin
          );
        }
      })
    );
})();
