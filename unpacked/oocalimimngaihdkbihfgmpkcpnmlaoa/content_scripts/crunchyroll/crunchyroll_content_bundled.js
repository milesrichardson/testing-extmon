/*******************************************************
 * Copyright (C) 2018-2023 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  var t = {
      5640: () => {
        !(function (t, e, i) {
          "use strict";
          if (t.MutationObserver && "undefined" != typeof HTMLElement) {
            var n,
              s = 0,
              u =
                ((n =
                  HTMLElement.prototype.matches ||
                  HTMLElement.prototype.webkitMatchesSelector ||
                  HTMLElement.prototype.mozMatchesSelector ||
                  HTMLElement.prototype.msMatchesSelector),
                {
                  matchesSelector: function (t, e) {
                    return t instanceof HTMLElement && n.call(t, e);
                  },
                  addMethod: function (t, e, i) {
                    var n = t[e];
                    t[e] = function () {
                      return i.length == arguments.length
                        ? i.apply(this, arguments)
                        : "function" == typeof n
                        ? n.apply(this, arguments)
                        : void 0;
                    };
                  },
                  callCallbacks: function (t, e) {
                    e && e.options.onceOnly && 1 == e.firedElems.length && (t = [t[0]]);
                    for (var i, n = 0; (i = t[n]); n++) i && i.callback && i.callback.call(i.elem, i.elem);
                    e &&
                      e.options.onceOnly &&
                      1 == e.firedElems.length &&
                      e.me.unbindEventWithSelectorAndCallback.call(e.target, e.selector, e.callback);
                  },
                  checkChildNodesRecursively: function (t, e, i, n) {
                    for (var s, o = 0; (s = t[o]); o++)
                      i(s, e, n) && n.push({ callback: e.callback, elem: s }),
                        s.childNodes.length > 0 && u.checkChildNodesRecursively(s.childNodes, e, i, n);
                  },
                  mergeArrays: function (t, e) {
                    var i,
                      n = {};
                    for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                    for (i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
                    return n;
                  },
                  toElementsArray: function (e) {
                    return void 0 === e || ("number" == typeof e.length && e !== t) || (e = [e]), e;
                  }
                }),
              o = (function () {
                var t = function () {
                  (this.t = []), (this.i = null), (this.u = null);
                };
                return (
                  (t.prototype.addEvent = function (t, e, i, n) {
                    var s = { target: t, selector: e, options: i, callback: n, firedElems: [] };
                    return this.i && this.i(s), this.t.push(s), s;
                  }),
                  (t.prototype.removeEvent = function (t) {
                    for (var e, i = this.t.length - 1; (e = this.t[i]); i--)
                      if (t(e)) {
                        this.u && this.u(e);
                        var n = this.t.splice(i, 1);
                        n && n.length && (n[0].callback = null);
                      }
                  }),
                  (t.prototype.beforeAdding = function (t) {
                    this.i = t;
                  }),
                  (t.prototype.beforeRemoving = function (t) {
                    this.u = t;
                  }),
                  t
                );
              })(),
              r = function (e, n) {
                var s = new o(),
                  r = this,
                  a = { fireOnAttributesModification: !1 };
                return (
                  s.beforeAdding(function (i) {
                    var s,
                      u = i.target;
                    (u !== t.document && u !== t) || (u = document.getElementsByTagName("html")[0]),
                      (s = new MutationObserver(function (t) {
                        n.call(this, t, i);
                      }));
                    var o = e(i.options);
                    s.observe(u, o), (i.observer = s), (i.me = r);
                  }),
                  s.beforeRemoving(function (t) {
                    t.observer.disconnect();
                  }),
                  (this.bindEvent = function (t, e, i) {
                    e = u.mergeArrays(a, e);
                    for (var n = u.toElementsArray(this), o = 0; o < n.length; o++) s.addEvent(n[o], t, e, i);
                  }),
                  (this.unbindEvent = function () {
                    var t = u.toElementsArray(this);
                    s.removeEvent(function (e) {
                      for (var n = 0; n < t.length; n++) if (this === i || e.target === t[n]) return !0;
                      return !1;
                    });
                  }),
                  (this.unbindEventWithSelectorOrCallback = function (t) {
                    var e,
                      n = u.toElementsArray(this),
                      o = t;
                    (e =
                      "function" == typeof t
                        ? function (t) {
                            for (var e = 0; e < n.length; e++) if ((this === i || t.target === n[e]) && t.callback === o) return !0;
                            return !1;
                          }
                        : function (e) {
                            for (var s = 0; s < n.length; s++) if ((this === i || e.target === n[s]) && e.selector === t) return !0;
                            return !1;
                          }),
                      s.removeEvent(e);
                  }),
                  (this.unbindEventWithSelectorAndCallback = function (t, e) {
                    var n = u.toElementsArray(this);
                    s.removeEvent(function (s) {
                      for (var u = 0; u < n.length; u++)
                        if ((this === i || s.target === n[u]) && s.selector === t && s.callback === e) return !0;
                      return !1;
                    });
                  }),
                  this
                );
              },
              a = new (function () {
                var t = { fireOnAttributesModification: !1, onceOnly: !1, existing: !1 };
                function e(t, e, n) {
                  return (
                    !(!u.matchesSelector(t, e.selector) || (t.D === i && (t.D = s++), -1 != e.firedElems.indexOf(t.D))) &&
                    (e.firedElems.push(t.D), !0)
                  );
                }
                var n = (a = new r(
                  function (t) {
                    var e = { attributes: !1, childList: !0, subtree: !0 };
                    return t.fireOnAttributesModification && (e.attributes = !0), e;
                  },
                  function (t, i) {
                    t.forEach(function (t) {
                      var n = t.addedNodes,
                        s = t.target,
                        o = [];
                      null !== n && n.length > 0
                        ? u.checkChildNodesRecursively(n, i, e, o)
                        : "attributes" === t.type && e(s, i, o) && o.push({ callback: i.callback, elem: s }),
                        u.callCallbacks(o, i);
                    });
                  }
                )).bindEvent;
                return (
                  (a.bindEvent = function (e, i, s) {
                    void 0 === s ? ((s = i), (i = t)) : (i = u.mergeArrays(t, i));
                    var o = u.toElementsArray(this);
                    if (i.existing) {
                      for (var r = [], a = 0; a < o.length; a++)
                        for (var c = o[a].querySelectorAll(e), D = 0; D < c.length; D++) r.push({ callback: s, elem: c[D] });
                      if (i.onceOnly && r.length) return s.call(r[0].elem, r[0].elem);
                      setTimeout(u.callCallbacks, 1, r);
                    }
                    n.call(this, e, i, s);
                  }),
                  a
                );
              })(),
              c = new (function () {
                var t = {};
                function e(t, e) {
                  return u.matchesSelector(t, e.selector);
                }
                var i = (c = new r(
                  function () {
                    return { childList: !0, subtree: !0 };
                  },
                  function (t, i) {
                    t.forEach(function (t) {
                      var n = t.removedNodes,
                        s = [];
                      null !== n && n.length > 0 && u.checkChildNodesRecursively(n, i, e, s), u.callCallbacks(s, i);
                    });
                  }
                )).bindEvent;
                return (
                  (c.bindEvent = function (e, n, s) {
                    void 0 === s ? ((s = n), (n = t)) : (n = u.mergeArrays(t, n)), i.call(this, e, n, s);
                  }),
                  c
                );
              })();
            e && d(e.fn),
              d(HTMLElement.prototype),
              d(NodeList.prototype),
              d(HTMLCollection.prototype),
              d(HTMLDocument.prototype),
              d(Window.prototype);
            var D = {};
            return h(a, D, "unbindAllArrive"), h(c, D, "unbindAllLeave"), D;
          }
          function h(t, e, i) {
            u.addMethod(e, i, t.unbindEvent),
              u.addMethod(e, i, t.unbindEventWithSelectorOrCallback),
              u.addMethod(e, i, t.unbindEventWithSelectorAndCallback);
          }
          function d(t) {
            (t.arrive = a.bindEvent), h(a, t, "unbindArrive"), (t.leave = c.bindEvent), h(c, t, "unbindLeave");
          }
        })(window, "undefined" == typeof jQuery ? null : jQuery, void 0);
      },
      7206: (t) => {
        t.exports =
          '<div id="chat-wrapper" tpInjected>\r\n    <iframe style="display: none;" id="tpChatFrame" allow="autoplay; clipboard-read; clipboard-write; payment; camera; microphone;" src="{CHAT_URL}">\r\n\r\n    </iframe>\r\n</div>';
      },
      4296: (t) => {
        t.exports =
          '<style tpInjected>\r\n    .hidden {\r\n    display: none !important;\r\n}   \r\n</style>\r\n<div class="hidden" id="tpIconContainer" tpInjected>\r\n    <div class="hidden" id="tp-buttons-container">\r\n        <button id="tp-icon-container">\r\n            <img id="tp-icon-white" src=\'{EXTENSION_LOGO_GRADIENT}\' />\r\n            <img id="play-chat-icon" class="hidden" src=\'{PLAY_CHAT}\' />\r\n            <span class="tooltiptext extension-txt" style="width: 120px;">Open Teleparty</span>\r\n            <div class="hidden" id="tp-message-indicator"></div>\r\n        </button>\r\n        <div class="tp-seperator"></div>\r\n        \x3c!-- <button class="tp-control-button" id="tp-friends-button">\r\n            <img id="tp-friends-image" src=\'{FRIENDS_IMAGE}\' />\r\n            <span class="tooltiptext extension-txt" style="width: 120px;"> Friends List</span>\r\n        </button> --\x3e\r\n        <div class="hidden" id="tp-party-active">\r\n            <button class="tp-control-button" id="tp-link-button">\r\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_ACTIVE_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Copy link</span>\r\n            </button>\r\n            <button class="tp-control-button" id="tp-chat-button">\r\n                <img id="tp-chat-reset" class="tp-center-image hidden" data-tp-id="overlay-reset_chat" src=\'{RESET_CHAT_IMAGE}\' />\r\n                <img id="tp-chat-hidden" class="tp-button-image tp-center-image" src=\'{CHAT_HIDDEN_IMAGE}\' />\r\n                <img id="tp-chat-gray" class="hidden tp-button-image tp-center-image" src=\'{CHAT_GRAY_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-show_chat" src=\'{CHAT_ACTIVE_IMAGE}\' />\r\n                <div class="hidden" id="tp-message-indicator"></div>\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Show chat</span>\r\n            </button>\r\n            <button class="tp-control-button" id="tp-disconnect-button">\r\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-leave_party"\r\n                    src=\'{DISCONNECT_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-leave_party" src=\'{DISCONNECT_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Leave Party</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    \x3c!-- <button class="hidden tp-control-button" id="tp-chat-close-button">\r\n        <img id="tp-start-image" data-tp-id="overlay-hide_chat" src=\'{ARROW_RIGHT}\' />\r\n        <span class="tooltiptext extension-txt" style="width: 100px;">Hide chat</span>\r\n    </button> --\x3e\r\n    <div id="tp-error-box" class="hidden">\r\n        <p class="extension-txt-indicator" id="tp-controls-error-text">\r\n            Failed to connect to background script. Please Try again later\r\n        </p>\r\n    </div>\r\n</div>';
      }
    },
    e = {};
  function i(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var u = (e[n] = { exports: {} });
    return t[n](u, u.exports, i), u.exports;
  }
  (i.n = (t) => {
    var e = t && t.h ? () => t.default : () => t;
    return i.d(e, { a: e }), e;
  }),
    (i.d = (t, e) => {
      for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      var t;
      !(function (t) {
        (t.PAUSED = "paused"), (t.PLAYING = "playing");
      })(t || (t = {}));
      const e = "Failed to read chrome storage. Please refresh the page and try again",
        n = "Failed to connect to Script. Please refresh the page and try again",
        s = "An unexpected error occured. Please refresh the page and try again.";
      var u, o, r;
      !(function (t) {
        (t.NETFLIX = "Netflix"),
          (t.HULU = "Hulu"),
          (t.DISNEY_PLUS = "Disney"),
          (t.HBO_MAX = "HBOMax"),
          (t.MAX = "Max"),
          (t.YOUTUBE = "Youtube"),
          (t.YOUTUBE_TV = "YoutubeTV"),
          (t.AMAZON = "Amazon"),
          (t.CRUNCHYROLL = "Crunchyroll"),
          (t.ESPN = "ESPN+"),
          (t.PARAMOUNT = "Paramount+"),
          (t.FUNIMATION = "Funimation"),
          (t.HOTSTAR = "Hotstar"),
          (t.PEACOCK = "peacock"),
          (t.STAR_PLUS = "Starplus"),
          (t.PLUTO_TV = "PlutoTV"),
          (t.APPLE_TV = "AppleTV"),
          (t.JIO_CINEMA = "JioCinema"),
          (t.TUBI_TV = "TubiTV"),
          (t.MUBI = "Mubi"),
          (t.STAN = "Stan"),
          (t.CRAVE = "Crave");
      })(u || (u = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(o || (o = {})),
        (function (t) {
          (t.EPISODE = "episode"),
            (t.FEATURE = "feature"),
            (t.LIVE = "live"),
            (t.EXTRA = "extra"),
            (t.EVENT = "event"),
            (t.OTHER = "other");
        })(r || (r = {}));
      var a, c;
      function D(t) {
        return t.includes("urn:hbo:feature")
          ? r.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? r.EPISODE
          : t.includes("urn:hbo:extra")
          ? r.EXTRA
          : r.OTHER;
      }
      function h(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function d(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : h(i)().then(s);
            };
          return s();
        };
      }
      function l(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function p(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      function g(t) {
        const e = document.createElement("script");
        e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
      }
      !(function (t) {
        (t.REGISTER = "register"), (t.PARTY_START = "party_start"), (t.PARTY_JOIN = "party_join"), (t.PARTY_END = "party_end");
      })(a || (a = {}));
      class F {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class v extends F {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      !(function (t) {
        (t.JOIN_SESSION = "joinSession"),
          (t.ACCEPT_DROPIN = "acceptDropin"),
          (t.SET_STATUS_TYPE = "setStatusType"),
          (t.GET_STATUS_TYPE = "getStatusType"),
          (t.GET_VIDEO_DATA = "getVideoData"),
          (t.LOAD_SESSION = "loadSession"),
          (t.NO_SESSION_DATA = "noSessionData"),
          (t.ON_NOTIF = "onNotif"),
          (t.FORWARD_TO_SIDEBAR = "forwardToSidebar"),
          (t.TEARDOWN = "teardown"),
          (t.ON_VIDEO_UPDATE = "onVideoUpdate"),
          (t.SOCKET_LOST_CONNECTION = "socketLostConnection"),
          (t.REBOOT = "socketReconnect"),
          (t.LOG_EVENT = "logEvent"),
          (t.LOG_EXPERIMENT = "logExperiment"),
          (t.STAY_ALIVE = "stayAlive"),
          (t.LOAD_CHAT_WINDOW = "loadChatWindow"),
          (t.RESET_CHAT_WINDOW = "resetChatWindow"),
          (t.HIDE_CHAT_WINDOW = "hideChatWindow"),
          (t.SET_USER_PRESENCE = "setUserPresence"),
          (t.TOGGLE_OPEN_PARTY = "toggleOpenParty"),
          (t.GET_ACTIVE_PARTY = "getActiveParty"),
          (t.GET_TAB_ID = "getTabId"),
          (t.SET_ACTIVE_PARTY = "setActiveParty"),
          (t.FULLSCREEN_WINDOW = "fullscreenWindow"),
          (t.MAX_WINDOW = "maxWindow"),
          (t.GET_EXPERIMENT_FLAG = "getExpFlag");
      })(c || (c = {}));
      class y extends v {
        constructor(t, e, i) {
          super(t, e, c.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const m = "Service_Background",
        f = "Popup",
        C = "Content_Script",
        E = "Page_Controls";
      const w = chrome.runtime.id,
        _ = "reactionContainerOpen",
        b = "https://sessions.teleparty.com",
        j = "https://redirect.teleparty.com",
        B = j,
        A = `${j}/sidebar`,
        Q = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        k = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        x = "recentlyUsedEmojiMap",
        I = "redirectDataMap",
        T = [
          {
            annotation: "face with tears of joy",
            group: 0,
            order: 8,
            tags: ["face", "joy", "laugh", "tear"],
            unicode: "😂",
            version: 0.6,
            emoticon: ":')",
            shortcodes: ["joy", "lmao", "tears_of_joy"]
          },
          {
            annotation: "smiling face with heart-eyes",
            group: 0,
            order: 16,
            tags: ["eye", "face", "love", "smile"],
            unicode: "😍",
            version: 0.6,
            shortcodes: ["heart_eyes", "smiling_face_with_heart_eyes"]
          },
          {
            shortcodes: ["loudly_crying_face", "sob"],
            annotation: "loudly crying face",
            tags: ["cry", "face", "sad", "sob", "tear"],
            unicode: "😭",
            order: 93,
            group: 0,
            version: 0.6,
            emoticon: ":'o"
          },
          {
            shortcodes: ["pleading", "pleading_face"],
            annotation: "pleading face",
            tags: ["begging", "mercy", "puppy eyes"],
            unicode: "🥺",
            order: 85,
            group: 0,
            version: 11
          },
          {
            shortcodes: ["rofl"],
            annotation: "rolling on the floor laughing",
            tags: ["face", "floor", "laugh", "rofl", "rolling", "rotfl"],
            unicode: "🤣",
            order: 7,
            group: 0,
            version: 3,
            emoticon: ":'D"
          },
          {
            annotation: "red heart",
            group: 0,
            order: 149,
            tags: ["heart"],
            unicode: "❤️",
            version: 0.6,
            emoticon: "<3",
            shortcodes: ["heart", "red_heart"]
          }
        ],
        S =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var M = console.log.bind(window.console);
      const P = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, e, i = 2e4) {
          return new Promise((n, s) => {
            const u = setTimeout(() => {
              s();
            }, i);
            try {
              chrome.tabs.sendMessage(e, t, (e) => {
                chrome.runtime.lastError && M(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
              });
            } catch (t) {
              clearTimeout(u), s(t);
            }
          });
        }
        l(t, e) {
          return new Promise((i, n) => {
            let s = null;
            e &&
              (s = setTimeout(() => {
                n({ error: "Send Message Timeout" });
              }, e));
            try {
              chrome.runtime.sendMessage(w, t, (e) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
              });
            } catch (t) {
              s && clearTimeout(s), n(t);
            }
          });
        }
      })();
      var $ = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      var V = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class G extends class {
        constructor() {
          (this.p = 0), (this.g = !1);
        }
        set hostOnly(t) {
          this.g = t;
        }
        get hostOnly() {
          return this.g;
        }
        get uiEventsHappening() {
          return this.p;
        }
        getScreenSize() {
          return { width: window.outerWidth, height: window.outerHeight };
        }
        getVideoContent(t, e, i, n, s) {
          let u, o, r;
          return (
            s &&
              (s.episodeNum && !isNaN(s.episodeNum) && (u = s.episodeNum),
              s.seasonNum && !isNaN(s.seasonNum) && (o = s.seasonNum),
              (r = s.title)),
            { id: t, type: n, name: e, url: i, episode: u, season: o, episode_name: r, service: this.getStreamingServiceName() }
          );
        }
        logError(t, e) {
          console.error("ERROR", t, e);
          const i = new y(C, m, { name: "video_error", action: { description: t, reason: e } });
          P.l(i);
        }
        doAdCheck() {
          return $(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(), (this.F = { time: 0, playbackState: o.NOT_READY, loading: !1 }), (this.v = 0), (this.m = 0);
        }
        onNode(t) {
          const e = t.data;
          "VideoData" == e.type && ((this.C = e.videoData), (this.v = Date.now())),
            "updatedState" == e.type && ((this.F = e.playerState), (this.m = Date.now()));
        }
        isPlayerPage() {
          return !!window.location.pathname.includes("/watch") || null != document.querySelector("#vilos-player");
        }
        isOldCrunchyroll() {
          return null != document.querySelector("#vilos-player");
        }
        _(t, e) {
          var i, n;
          const s = null !== (i = document.querySelector(".video-player")) && void 0 !== i ? i : document.querySelector("#vilos-player");
          let u = { type: t };
          if ((e && (u = { type: t, eventData: e }), s)) {
            const t = { infoSending: u };
            null === (n = s.contentWindow) || void 0 === n || n.postMessage(t, "*");
          }
        }
        sendUpdateVideoData() {
          try {
            this._("getVideoData");
          } catch (t) {
            console.log(t);
          }
        }
        updateVideoData() {
          return V(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              this._("getVideoData"), yield d(() => 0 != this.v && this.v > t, 500, 10)();
            } catch (t) {
              console.log(t);
            }
          });
        }
        updateState() {
          return V(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              this._("updateState"), yield d(() => 0 != this.m && this.m > t, 500, 10)();
            } catch (t) {
              console.log(t);
            }
          });
        }
        getVideoData() {
          return V(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              return this.sendUpdateVideoData(), yield d(() => 0 != this.v && this.v > t, 500, 10)(), this.C;
            } catch (t) {
              return console.log(t), this.C;
            }
          });
        }
        waitVideoApiReadyAsync() {
          return V(this, void 0, void 0, function* () {
            if (!this.isPlayerPage()) throw new Error("Please open a video on Crunchyroll then click on the Tp icon");
            yield d(
              () => {
                var t;
                return this.sendUpdateVideoData(), null != (null === (t = this.C) || void 0 === t ? void 0 : t.videoId);
              },
              1 / 0,
              250
            )();
          });
        }
        waitVideoDoneLoadingAsync() {
          return V(this, void 0, void 0, function* () {
            return d(() => (this._("updateState"), this.F.playbackState !== o.LOADING), 1e4, 10)();
          });
        }
        getStreamingServiceName() {
          return u.CRUNCHYROLL;
        }
        setCurrentTime(t) {
          return V(this, void 0, void 0, function* () {
            this._("seekTo", { time: t });
          });
        }
        j() {
          return this.F.time;
        }
        getStateAsync() {
          return V(this, void 0, void 0, function* () {
            if (!this.isPlayerPage()) throw new Error("Not on player page.");
            yield this.updateState();
            const t = this.F.playbackState;
            return new Promise((e) => {
              e({ playbackState: t, playbackPositionMilliseconds: this.F.time });
            });
          });
        }
        getUpdateSessionDataAsync() {
          return V(this, void 0, void 0, function* () {
            yield this.updateState();
            const e = this.j();
            return {
              state: this.F.playbackState == o.PAUSED ? t.PAUSED : t.PLAYING,
              lastKnownTime: e,
              lastKnownTimeUpdatedAt: Date.now(),
              bufferingState: this.F.playbackState == o.LOADING
            };
          });
        }
        B() {
          var t, e;
          const i =
            null !== (t = document.querySelector(".show-title-link")) && void 0 !== t
              ? t
              : document.querySelector("#showmedia_about_episode_num");
          return { episodeNum: null === (e = this.C) || void 0 === e ? void 0 : e.episodeNumber, title: null == i ? void 0 : i.innerText };
        }
        getVideoDataAsync() {
          var t, e, i;
          return V(this, void 0, void 0, function* () {
            yield this.updateState();
            const n = yield this.getVideoData(),
              s = null !== (t = null == n ? void 0 : n.videoId) && void 0 !== t ? t : "",
              u = null !== (e = null == n ? void 0 : n.videoTitle) && void 0 !== e ? e : "",
              o = null == n ? void 0 : n.videoType,
              r = this.B(),
              a = this.getScreenSize(),
              c = this.getVideoContent(s, u, window.location.href, o, r);
            return {
              videoId: s,
              videoTitle: u,
              videoDuration: null !== (i = null == n ? void 0 : n.duration) && void 0 !== i ? i : 0,
              serviceDomain: window.location.hostname,
              screen: a,
              content: c,
              videoState: this.F.playbackState
            };
          });
        }
        getVideoElement() {
          var t;
          return this.isPlayerPage()
            ? null !== (t = document.querySelector(".video-player")) && void 0 !== t
              ? t
              : document.querySelector("#vilos-player")
            : null;
        }
        jumpToNextEpisode(t) {
          var e;
          return V(this, void 0, void 0, function* () {
            yield this.updateVideoData();
            (null === (e = this.C) || void 0 === e ? void 0 : e.videoId) !== t.videoId && this._("jumpToNext");
          });
        }
        freeze(t) {
          return V(this, void 0, void 0, function* () {
            this.p += 1;
            try {
              yield this.pause(), yield h(t)(), yield this.play();
            } finally {
              this.p -= 1;
            }
          });
        }
        pause() {
          return V(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              console.log("Attempting to pause"),
                (this.p += 1),
                (() => {
                  V(this, void 0, void 0, function* () {
                    try {
                      this._("pauseVideo"), yield this.updateState(), yield d(() => this.F.playbackState === o.PAUSED, 2500, 10)(), t();
                    } catch (t) {
                      this.logError("video was unable to pause correctly", t), e(t);
                    } finally {
                      this.p -= 1;
                    }
                  });
                })();
            });
          });
        }
        play() {
          return V(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              console.log("Attempting to play"),
                (this.p += 1),
                (() => {
                  V(this, void 0, void 0, function* () {
                    try {
                      this._("playVideo"), yield this.updateState(), yield d(() => this.F.playbackState === o.PLAYING, 2500, 10)(), t();
                    } catch (t) {
                      this.logError("video was unable to play correctly", t), e(t);
                    } finally {
                      this.p -= 1;
                    }
                  });
                })();
            });
          });
        }
      }
      const R = chrome.extension.getURL("img/x-circle.svg"),
        L = "with-chat",
        O = "no-scroll";
      function U(t, e = "") {
        return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
          "css/chat.css"
        )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
      }
      var N = i(7206),
        H = i.n(N);
      const W = [
          "Batman.svg",
          "DeadPool.svg",
          "CptAmerica.svg",
          "Wolverine.svg",
          "IronMan.svg",
          "Goofy.svg",
          "Alien.svg",
          "Mulan.svg",
          "Snow-White.svg",
          "Poohbear.svg",
          "Sailormoon.svg",
          "Sailor Cat.svg",
          "Pizza.svg",
          "Cookie.svg",
          "Chocobar.svg",
          "hotdog.svg",
          "Hamburger.svg",
          "Popcorn.svg",
          "IceCream.svg",
          "ChickenLeg.svg"
        ],
        z = [
          "General/Alien.svg",
          "General/Batman.svg",
          "General/ChickenLeg.svg",
          "General/Chocobar.svg",
          "General/Cookie.svg",
          "General/CptAmerica.svg",
          "General/DeadPool.svg",
          "General/Goofy.svg",
          "General/Hamburger.svg",
          "General/hotdog.svg",
          "General/IceCream.svg",
          "General/IronMan.svg",
          "General/Mulan.svg",
          "General/Pizza.svg",
          "General/Poohbear.svg",
          "General/Popcorn.svg",
          "General/Sailor Cat.svg",
          "General/Sailormoon.svg",
          "General/Snow-White.svg",
          "General/Wolverine.svg"
        ],
        K = [
          "General/Alien.svg",
          "General/Batman.svg",
          "General/ChickenLeg.svg",
          "General/Chocobar.svg",
          "General/Cookie.svg",
          "General/CptAmerica.svg",
          "General/DeadPool.svg",
          "General/Goofy.svg",
          "General/Hamburger.svg",
          "General/hotdog.svg",
          "General/IceCream.svg",
          "General/IronMan.svg",
          "General/Mulan.svg",
          "General/Pizza.svg",
          "General/Poohbear.svg",
          "General/Popcorn.svg",
          "General/Sailor Cat.svg",
          "General/Sailormoon.svg",
          "General/Snow-White.svg",
          "General/Wolverine.svg",
          "Christmas/angel.svg",
          "Christmas/bell.svg",
          "Christmas/box.svg",
          "Christmas/cane.svg",
          "Christmas/flake.svg",
          "Christmas/gingerbread.svg",
          "Christmas/gingerbread_F.svg",
          "Christmas/gingerbread_M.svg",
          "Christmas/gloves_blue.svg",
          "Christmas/gloves_red.svg",
          "Christmas/hat.svg",
          "Christmas/ornament.svg",
          "Christmas/raindeer.svg",
          "Christmas/reef.svg",
          "Christmas/santa_F.svg",
          "Christmas/santa_M.svg",
          "Christmas/snowglobe.svg",
          "Christmas/snowman.svg",
          "Christmas/sock.svg",
          "Christmas/tree.svg",
          "Halloween/bats.svg",
          "Halloween/candy_corn.svg",
          "Halloween/cat_black.svg",
          "Halloween/cat_white.svg",
          "Halloween/coffin.svg",
          "Halloween/eye_ball.svg",
          "Halloween/face_angry.svg",
          "Halloween/face_evil.svg",
          "Halloween/face_silly.svg",
          "Halloween/face_smile.svg",
          "Halloween/frankenstein.svg",
          "Halloween/ghost_F.svg",
          "Halloween/ghost_M.svg",
          "Halloween/gravestone.svg",
          "Halloween/lollipop.svg",
          "Halloween/moon.svg",
          "Halloween/mummy.svg",
          "Halloween/potion.svg",
          "Halloween/pumpkin.svg",
          "Halloween/pumpkin_witch.svg",
          "Halloween/skull_brain.svg",
          "Halloween/skull_candy.svg",
          "Halloween/skull_girl.svg",
          "Halloween/witch_hat.svg",
          "Thanksgiving/acorn.svg",
          "Thanksgiving/bread.svg",
          "Thanksgiving/candles.svg",
          "Thanksgiving/corn.svg",
          "Thanksgiving/drinks.svg",
          "Thanksgiving/maple_leaf.svg",
          "Thanksgiving/plate_chicken.svg",
          "Thanksgiving/pumpkin.svg",
          "Thanksgiving/pumpkin_pie.svg",
          "Thanksgiving/slice_pie.svg",
          "Thanksgiving/sun_flower.svg",
          "Thanksgiving/turkey_face.svg"
        ],
        Y = {
          General: [
            "Alien.svg",
            "Batman.svg",
            "ChickenLeg.svg",
            "Chocobar.svg",
            "Cookie.svg",
            "CptAmerica.svg",
            "DeadPool.svg",
            "Goofy.svg",
            "Hamburger.svg",
            "hotdog.svg",
            "IceCream.svg",
            "IronMan.svg",
            "Mulan.svg",
            "Pizza.svg",
            "Poohbear.svg",
            "Popcorn.svg",
            "Sailor Cat.svg",
            "Sailormoon.svg",
            "Snow-White.svg",
            "Wolverine.svg"
          ],
          Christmas: [
            "angel.svg",
            "bell.svg",
            "box.svg",
            "cane.svg",
            "flake.svg",
            "gingerbread.svg",
            "gingerbread_F.svg",
            "gingerbread_M.svg",
            "gloves_blue.svg",
            "gloves_red.svg",
            "hat.svg",
            "ornament.svg",
            "raindeer.svg",
            "reef.svg",
            "santa_F.svg",
            "santa_M.svg",
            "snowglobe.svg",
            "snowman.svg",
            "sock.svg",
            "tree.svg"
          ],
          Halloween: [
            "bats.svg",
            "candy_corn.svg",
            "cat_black.svg",
            "cat_white.svg",
            "coffin.svg",
            "eye_ball.svg",
            "face_angry.svg",
            "face_evil.svg",
            "face_silly.svg",
            "face_smile.svg",
            "frankenstein.svg",
            "ghost_F.svg",
            "ghost_M.svg",
            "gravestone.svg",
            "lollipop.svg",
            "moon.svg",
            "mummy.svg",
            "potion.svg",
            "pumpkin.svg",
            "pumpkin_witch.svg",
            "skull_brain.svg",
            "skull_candy.svg",
            "skull_girl.svg",
            "witch_hat.svg"
          ],
          Thanksgiving: [
            "acorn.svg",
            "bread.svg",
            "candles.svg",
            "corn.svg",
            "drinks.svg",
            "maple_leaf.svg",
            "plate_chicken.svg",
            "pumpkin.svg",
            "pumpkin_pie.svg",
            "slice_pie.svg",
            "sun_flower.svg",
            "turkey_face.svg"
          ]
        };
      function J(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                S,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(S, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(S) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const q = {
        General: function () {
          return !0;
        },
        Christmas: function () {
          return 11 === new Date().getMonth();
        },
        Halloween: function () {
          const t = new Date();
          return 9 === t.getMonth() && t.getDate() >= 24;
        },
        Thanksgiving: function () {
          const t = new Date();
          return (
            (10 === t.getMonth() && t.getDate() >= 18 && t.getDate() <= 28) || (9 === t.getMonth() && t.getDate() >= 8 && t.getDate() <= 14)
          );
        }
      };
      var X = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      const Z = new (class {
        setItemsAsync(t) {
          return X(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(Z);
      const tt = Z;
      var et,
        it = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                a(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                a(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            a((n = n.apply(t, e || [])).next());
          });
        };
      class nt {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.A = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : k
          }),
            (this.k = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = J(t)),
            (this.A.userIcon = t),
            tt.setItemsAsync({ userIcon: t }),
            M("new user settings after set user icon: " + JSON.stringify(this.A));
        }
        saveUserNickname(t) {
          (this.A.userNickname = t),
            tt.setItemsAsync({ userNickname: t }),
            M("new user settings after set user nickname: " + JSON.stringify(this.A));
        }
        saveUserSettings(t) {
          return it(this, void 0, void 0, function* () {
            const e = J(t.userIcon);
            (this.A = t),
              (this.A.userIcon = e),
              yield tt.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              M("new user settings after save: " + JSON.stringify(this.A));
          });
        }
        get userSettings() {
          return this.A;
        }
        get permId() {
          return this.k;
        }
        get userIcon() {
          return this.A.userIcon;
        }
        get userNickname() {
          return this.A.userNickname;
        }
      }
      class st extends F {
        constructor(t, e, i) {
          super(t, e, i), (this.I = i);
        }
      }
      !(function (t) {
        (t.BROADCAST = "brodadcast"),
          (t.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode"),
          (t.SEND_MESSAGE = "sendMessage"),
          (t.CONTENT_SCRIPT_READY = "contentScriptReady"),
          (t.CONTENT_SCRIPT_ERROR = "contentScriptError"),
          (t.TEARDOWN = "teardown"),
          (t.GET_SESSION_DATA = "getSessionData"),
          (t.SET_TYPING = "setTyping"),
          (t.SET_BUFFERING = "setBuffering"),
          (t.SET_WATCHING_ADS = "setWatchingAds"),
          (t.BROADCAST_USER_SETTINGS = "brodadcastUserSettings"),
          (t.SEND_REACTION = "sendReaction"),
          (t.SEND_GIF = "sendGIF"),
          (t.WEB_RTC = "webRTC");
      })(et || (et = {}));
      class ut extends st {
        constructor(t, e, i) {
          super(t, e, et.SET_TYPING), (this.data = i);
        }
      }
      class ot extends st {
        constructor(t, e, i) {
          super(t, e, et.SEND_MESSAGE), (this.data = i);
        }
      }
      class rt extends st {
        constructor(t, e, i) {
          super(t, e, et.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class at extends v {
        constructor(t, e, i) {
          super(t, e, c.TEARDOWN), (this.data = i);
        }
      }
      class ct extends st {
        constructor(t, e, i) {
          super(t, e, et.SEND_REACTION), (this.data = i);
        }
      }
      class Dt extends st {
        constructor(t, e, i) {
          super(t, e, et.SEND_GIF), (this.data = i);
        }
      }
      class ht {
        constructor() {
          this.resetTasks(), (this.T = []), (this.S = 0), (this.M = Promise.resolve()), (this.P = !0);
        }
        createInstance() {
          return new ht();
        }
        pushTask(t, e) {
          if (!this.P) return;
          const i = { action: t, name: e };
          0 === this.S && this.resetTasks(),
            (this.S = this.T.push(i)),
            (this.M = this.M.then(() => {
              if (this.T.includes(i) && this.P)
                return this.$(i)().then(() => {
                  this.T.shift(), (this.S -= 1);
                });
            }));
        }
        disable() {
          (this.P = !1), this.resetTasks();
        }
        resetTasks() {
          (this.M = Promise.resolve()), (this.T = []), (this.S = 0);
        }
        $(t) {
          return function () {
            return t.action().catch(() => {});
          };
        }
        get tasksInFlight() {
          return this.S;
        }
        hasTaskInQueue(t) {
          return this.T.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.T),
            (this.T = this.T.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.S = this.T.length),
            console.log(this.T);
        }
      }
      const dt = new ht();
      var lt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      const pt = new (class {
        getItemsAsync(t) {
          return lt(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? n(new Error(e)) : i(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return lt(this, void 0, void 0, function* () {
            return new Promise((t, i) => {
              chrome.storage.local.get(null, (n) => {
                chrome.runtime.lastError ? i(new Error(e)) : t(n);
              });
            });
          });
        }
      })();
      Object.freeze(pt);
      const gt = pt;
      var Ft,
        vt = new Uint8Array(16);
      function yt() {
        if (
          !Ft &&
          !(Ft =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Ft(vt);
      }
      const mt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const ft = function (t) {
        return "string" == typeof t && mt.test(t);
      };
      for (var Ct = [], Et = 0; Et < 256; ++Et) Ct.push((Et + 256).toString(16).substr(1));
      const wt = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            Ct[t[e + 0]] +
            Ct[t[e + 1]] +
            Ct[t[e + 2]] +
            Ct[t[e + 3]] +
            "-" +
            Ct[t[e + 4]] +
            Ct[t[e + 5]] +
            "-" +
            Ct[t[e + 6]] +
            Ct[t[e + 7]] +
            "-" +
            Ct[t[e + 8]] +
            Ct[t[e + 9]] +
            "-" +
            Ct[t[e + 10]] +
            Ct[t[e + 11]] +
            Ct[t[e + 12]] +
            Ct[t[e + 13]] +
            Ct[t[e + 14]] +
            Ct[t[e + 15]]
          ).toLowerCase();
        if (!ft(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const _t = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || yt)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return wt(n);
      };
      var bt;
      !(function (t) {
        (t.SET_USER_LIST = "setUserList"),
          (t.SET_CONNECTION_ID = "setConnectionId"),
          (t.LOAD_INIT_DATA = "loadInitData"),
          (t.SET_PAGE_TITLE = "setPageTitle"),
          (t.ADD_GIF_MESSAGE = "addGifMessage"),
          (t.SIDEBAR_MESSAGING_READY = "sidebarMessagingReady"),
          (t.RESET_VIEW = "resetView"),
          (t.HIDE_CHAT = "hideChat"),
          (t.ON_UPDATE_SETTINGS = "onUpdateSettings"),
          (t.PREVIEW_REACTION = "previewReaction"),
          (t.UPDATE_SETTINGS = "updateSettings"),
          (t.SET_REACTIONS_ACTIVE = "setReactionsActive"),
          (t.ON_FOCUS = "onSidebarFocus"),
          (t.SET_USER_ICON_URL = "setUserIconUrl"),
          (t.ADD_MESSAGE = "addMessage"),
          (t.CLEAR_MESSAGES = "clearMessages"),
          (t.SET_PRESENCE_MESSAGE = "setPresenceMessage"),
          (t.ON_PAGE_CLICK = "onPageClick"),
          (t.ON_PURCHASE = "onPurchase"),
          (t.DISPLAY_MODAL = "displayModal"),
          (t.OPEN_TAB = "openTab"),
          (t.ON_CHROME_STORAGE_UPDATE = "onChromeStorageUpdate"),
          (t.ON_WEB_RTC = "onWebRTC");
      })(bt || (bt = {}));
      var jt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      const Bt = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? K.includes(t.split("?newIconUrl=")[1]) && W.includes(t.split("?newIconUrl=")[0]) : K.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return z[Math.floor(Math.random() * z.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        V(t) {
          return jt(this, void 0, void 0, function* () {
            try {
              yield tt.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return jt(this, void 0, void 0, function* () {
            const t = yield gt.getAllItemsAsync(),
              e = Bt.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.V(e), e;
          });
        }
        validateStorageData(t) {
          const e = "object" == typeof t ? Object.assign({}, t) : {};
          return (
            e.userIcon && e.userIcon.includes("?newIconUrl=") && (e.userIcon = e.userIcon.split("?newIconUrl=")[1]),
            this.isUserIconValid(e.userIcon) || (e.userIcon = this.getDefaultUserIcon()),
            this.isUserNickNameValid(e.userNickname) || (e.userNickname = this.getDefaultUserNickName()),
            e
          );
        }
      })();
      Object.freeze(Bt);
      const At = Bt,
        Qt = 1e3,
        kt = 72e5,
        xt = 12e4,
        It = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Tt = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        St = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Mt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function Pt(t, e) {
        $t();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${R}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${R}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            $t();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              $t(), (window.location.href = e);
            });
      }
      function $t() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const Vt = { showAlert: !1 },
        Gt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var Rt;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(Rt || (Rt = {}));
      var Lt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class Ot {
        constructor(t) {
          (this.G = this.R.bind(this)),
            (this.L = this.resetIdleTimer.bind(this)),
            (this.O = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.U(t.data);
            }),
            (this.N = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.H = (t) => {
              this.W.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new y(C, m, n);
              P.l(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.W.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.W.toggleGIFs();
            }),
            (this.U = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new y(C, m, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              P.l(n);
              const s = new y(C, m, { eventType: `emoji-click-${i}`, sessionId: this.W.getSessionId() });
              P.l(s), dt.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.W.focusChat(), this.K(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.Y(), this.W.onInputChange();
            }),
            (this.W = t);
        }
        J() {
          M("Idle Warning called"), Pt(Tt);
          const t = new y(C, m, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          P.l(t);
          const e = new y(C, m, { eventType: "idle-warn-2hr", sessionId: this.W.getSessionId() });
          P.l(e), (this.q = setTimeout(this.X.bind(this), xt));
        }
        X() {
          M("Idle kick called");
          const t = new y(C, m, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new at(C, m, Gt);
          P.l(t), P.l(e);
        }
        resetIdleTimer() {
          this.Z && clearTimeout(this.Z), this.q && ($t(), clearTimeout(this.q)), (this.Z = setTimeout(this.J.bind(this), kt));
        }
        tt() {
          (this.Z = setTimeout(this.J.bind(this), kt)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.L();
            }),
            (window.onfocus = () => this.L()),
            (window.onmousedown = () => this.L()),
            (window.ontouchstart = () => this.L()),
            (window.onkeydown = () => this.L());
        }
        et() {
          this.Z && clearTimeout(this.Z),
            this.q && clearTimeout(this.q),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          M("Listening for chat events"), this.tt(), this.it(), this.initWindowListeners();
        }
        stopListening() {
          this.nt(), this.et(), this.st();
        }
        R() {
          this.W.clearUnreadCount();
        }
        ut(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.W.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.G),
            window.addEventListener("message", this.O),
            document.addEventListener("dragstart", this.ot.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.W.onFullScreen),
            document.addEventListener("fullscreenchange", this.W.onFullScreen),
            document.addEventListener("keydown", this.N, !0),
            document.addEventListener("emoji-click", this.U),
            document.addEventListener("click", this.H);
        }
        it() {
          jQuery(window).on("focus", this.G),
            jQuery("#party-tab").on("click", this.W.togglePartyTab.bind(this.W)),
            jQuery("#friends-tab").on("click", this.W.toggleFriendsTab.bind(this.W)),
            jQuery(".user-icon").on("click", this.W.toggleLargeUserIconButton.bind(this.W)),
            jQuery("#user-icon").on("click", this.W.toggleIconContainer.bind(this.W)),
            jQuery("#link-icon").on("click", this.W.linkIconListener.bind(this.W)),
            jQuery("#reset-icon").on("click", this.W.resetIconListener.bind(this.W)),
            jQuery(".image-button").on("click", this.W.userIconSelectorListener.bind(this.W)),
            jQuery("#chat-input-container").on("keydown", this.W.onChatKeyDown.bind(this.W)),
            jQuery("#nickname-edit").on("keydown", this.W.onChatKeyDown.bind(this.W)),
            jQuery("#chat-input").on("keypress", this.W.onChatKeyPress.bind(this.W)),
            jQuery("#chat-input").on("input", this.W.onInputChange.bind(this.W)),
            jQuery("#gif-search").on("keyup", this.W.onGifSearch.bind(this.W)),
            jQuery("#saveChanges").on("click", this.W.saveChangesListener.bind(this.W)),
            jQuery("#cancelNickname").on("click", this.W.cancelNicknameListener.bind(this.W)),
            jQuery("#chat-wrapper").on("mouseup", this.W.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.W.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.W.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.W.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.W.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.W.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.W.onChatKeyUp.bind(this.W)),
            jQuery("#emoji-picker-btn").on("click", this.W.addEmojiPicker.bind(this.W)),
            jQuery("#gif-btn").on("click", this.W.addGifPicker.bind(this.W)),
            jQuery(".gif-img").on("click", this.W.clickGif.bind(this.W)),
            jQuery(".gif-results").on("click", "video, img", this.W.clickGif.bind(this.W)),
            jQuery("#category-container").on("click", "video", this.W.clickGif.bind(this.W)),
            jQuery("#gif-input-back").on("click", this.W.resetGif.bind(this.W)),
            jQuery("#reaction-btn").on("click", this.W.addReactionTab.bind(this.W)),
            jQuery("#chat-input-container").on("click", this.rt.bind(this)),
            jQuery("#chat-input").on("input", this.Y.bind(this)),
            jQuery("#chat-input").on("drop", this.ct.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.W.onScrollToBottom.bind(this.W)),
            this.Dt(),
            document.addEventListener("keydown", this.N.bind(this), !0),
            this.W.initCustomListeners();
        }
        Dt() {
          jQuery("#tp-heart-button").on("click", () => {
            this.W.onReactionClicked(Rt.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.W.onReactionClicked(Rt.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.W.onReactionClicked(Rt.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.W.onReactionClicked(Rt.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.W.onReactionClicked(Rt.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.W.onReactionClicked(Rt.FIRE);
            });
        }
        Y() {
          var t, e;
          const i =
              null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                ? t
                : parseInt(jQuery("#bottom-chat-controls").css("height")),
            n = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
            s =
              (null !== (e = jQuery("#chat-input").outerHeight(!0)) && void 0 !== e ? e : parseInt(jQuery("#chat-input").css("height"))) +
              i +
              n;
          jQuery("#emoji-picker-container").css({ bottom: s }), jQuery("#gif-picker-container").css({ bottom: s });
        }
        ct(t) {
          t.preventDefault();
        }
        ot(t) {
          t.preventDefault();
        }
        rt(t) {
          t.target === jQuery("#chat-input")[0] && this.W.focusChat();
        }
        K(t) {
          let e, i;
          if (window.getSelection && ((e = window.getSelection()), e && e.getRangeAt && e.rangeCount)) {
            (i = e.getRangeAt(0)), i.deleteContents();
            const n = document.createElement("span");
            (n.className = "inTextEmoji"), (n.innerHTML = t);
            const s = document.createDocumentFragment();
            let u, o;
            for (; (u = n.firstChild); ) o = s.appendChild(u);
            i.insertNode(s), o && ((i = i.cloneRange()), i.setStartAfter(o), i.collapse(!1), e.removeAllRanges(), e.addRange(i));
          }
        }
        ht(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        dt(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.ht(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Lt(this, void 0, void 0, function* () {
            const i = yield gt.getItemsAsync([x]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : T;
            this.dt(n) || (n = T),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield tt.setItemsAsync({ [x]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        st() {
          jQuery(window).off("focus", this.G),
            document.removeEventListener("emoji-click", this.U),
            document.removeEventListener("keydown", this.N, !0),
            document.removeEventListener("click", this.H),
            window.removeEventListener("message", this.O),
            document.removeEventListener("webkitfullscreenchange", this.W.onFullScreen),
            document.removeEventListener("fullscreenchange", this.W.onFullScreen);
        }
        nt() {
          jQuery(".user-icon").off(),
            jQuery("#user-icon").off(),
            jQuery("#link-icon").off(),
            jQuery(".image-button").off(),
            jQuery("#chat-input").off(),
            jQuery("#saveChanges").off(),
            jQuery("#cancelNickname").off(),
            jQuery("#chat-input-container").off(),
            jQuery("#chat-wrapper").off();
        }
      }
      class Ut {
        constructor(t) {
          (this.W = t),
            (this.lt = []),
            (this.gt = 0),
            (this.Ft = document.title),
            (this.vt = 0),
            (this.yt = new Map()),
            (this.ft = new Map()),
            (this.Ct = []),
            (this.Et = []),
            (this.wt = ""),
            M("Message Controller");
        }
        _t(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${J(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${J(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        bt(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.W.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${J(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${J(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${J(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        jt(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${J(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${J(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Bt(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.W.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${J(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${J(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${J(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        At(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.k = e.permId), (u.Qt = i), (u.kt = n), (u.xt = e), (u.It = s);
        }
        reloadMessages() {
          this.W.queueMessageForFrame(bt.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.lt));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.lt = t;
        }
        Tt(t, e) {
          if (Math.abs(t.timestamp - e.timestamp) > 6e4) return !1;
          if (t.permId !== e.permId) return !1;
          if ("isSystemMessage" in e && e.isSystemMessage && (e.body.includes("joined") || e.body.includes("left"))) return !1;
          if ("gifObject" in t) {
            if ("isSystemMessage" in e && e.isSystemMessage) return !1;
          } else {
            if (t.isSystemMessage && (t.body.includes("joined") || t.body.includes("left"))) return !1;
            if ("gifObject" in e) {
              if (t.isSystemMessage) return !1;
            } else if (t.isSystemMessage !== e.isSystemMessage) return !1;
          }
          return !0;
        }
        addMessage(t, e, i) {
          if (
            (void 0 === i && (i = this.lt.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.yt.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.lt.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Tt(n, t);
          this.lt.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.W.queueMessageForFrame(bt.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.jt(o, u, s) : this._t(o, r, u, s);
          this.At(a, u, o, r, s), this.scrollToBottom(), this.St();
        }
        addGif(t, e) {
          void 0 === e && (e = this.lt.length);
          const i = this.lt.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Tt(i, t);
          this.lt.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.W.queueMessageForFrame(bt.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.Bt(s, t, n) : this.bt(s, u, t, n);
          (o[0].Mt = !0), this.At(o, t, s, u, n), h(100)().then(this.scrollToBottom.bind(this)), this.St();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.gt > 0 && ((this.gt = 0), (document.title = this.Ft));
        }
        St() {
          (this.gt += 1), (this.vt += 1), document.hasFocus() || (document.title = "(" + String(this.gt) + ") " + this.Ft);
        }
        getUserIconURL(t, e = "") {
          if (!this.yt.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.Pt();
            this.yt.set(t, n), this.Et.push(n);
          }
          return this.yt.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return K.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : W.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.ft.has(t) || (this.ft.set(t, e), this.Ct.push(e)), J(this.ft.get(t));
        }
        Pt() {
          let t = chrome.runtime.getURL("img/icons/General/" + W[Math.floor(Math.random() * W.length)]);
          if (this.Et.length < Y.General.length)
            for (; this.Et.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + W[Math.floor(Math.random() * W.length)]);
          return t;
        }
        $t(t) {
          const e = t[0],
            i = e.k;
          let n = e.Qt;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.Qt = n));
          const s = e.kt;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.xt,
                o = e.It;
              let r;
              if (
                (e.Mt && s && "gifObject" in s && o && (r = "" == u ? this.Bt(n, s, o) : this.bt(n, u, s, o)),
                !e.Mt && s && "isSystemMessage" in s && o && (r = "" == u ? this.jt(n, s, o) : this._t(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.k = i), (e.Qt = n), (e.kt = u), (e.xt = s), (e.It = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.wt = t), this.W.queueMessageForFrame(bt.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.wt), jQuery(".user-icon img").attr("src", this.wt);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.$t(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.$t(jQuery(e[t]));
          this.W.isChatFrameActive() && this.reloadMessages();
        }
        Vt(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              K.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : W.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              K.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : W.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = Y.General.filter((t) => !this.Et.includes(t));
            0 === t.length && (t = Y.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Vt(e);
          this.yt.set(t, i), this.Et.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = J(e);
          this.ft.set(t, i), this.Ct.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Vt(e);
          this.yt.set(t, n), this.Et.push(n), this.ft.set(t, i), this.Ct.push(i), this.renderSidebar();
        }
        addYoutubePromo() {
          jQuery(
            `\n        <div class="msg-container">\n            <div class="msg-txt message-system">\n                <div style="width:100%; height: 100px">\n                    <img data-tp-id="tp_youtube_promo" style="width: 100%;height: 100%;object-fit: contain;cursor:pointer !important;" src="${chrome.runtime.getURL(
              "img/youtube_promo.jpg"
            )}" \n                    onclick="window.open('https://teleparty.com/youtube')"\n                    />\n                </div>\n            </div>\n        </div>\n        `
          ).prependTo(jQuery("#chat-history"));
        }
        addReviewMessage() {
          jQuery(
            '\n          <div class="msg-container">\n          <div class="msg-txt message-system" style="width:100%">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id="reviewLink" href="https://chrome.google.com/webstore/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews" style="display:inline;color:red;text-decoration:underline;" target="none">here!</a>\n          </p>\n          </div>\n          </div>\n          '
          ).appendTo(jQuery("#chat-history"));
          const t = new y(C, m, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          P.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.W.getSessionId() },
            i = new y(C, m, e);
          P.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new y(C, m, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              P.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.W.getSessionId() },
                i = new y(C, m, e);
              P.l(i);
            });
        }
      }
      class Nt {
        constructor(t) {
          (this.Gt = !1), (this.Rt = !1), (this.Lt = !1), (this.W = t);
        }
        setupPresenceIndicator() {
          (this.Gt = !1), (this.Rt = !1), (this.Lt = !1), this.Ot();
        }
        Ut() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Gt = t), this.Ot();
        }
        setBufferingPresenceVisible(t) {
          (this.Rt = t), this.Ot();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Lt = t), this.Ot();
        }
        getWatchingAdsVisible() {
          return this.Lt;
        }
        Nt() {
          return this.Lt
            ? "People are watching ads..."
            : this.Gt && this.Rt
            ? "People are typing and buffering..."
            : this.Gt
            ? "People are typing..."
            : this.Rt
            ? "People are buffering..."
            : "";
        }
        Ot() {
          const t = this.Nt();
          this.Ut().text(t), this.W.queueMessageForFrame(bt.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var Ht = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      var Wt,
        zt,
        Kt = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                a(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                a(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            a((n = n.apply(t, e || [])).next());
          });
        };
      class Yt extends class {
        constructor() {
          (this.Ht = !1),
            (this.Wt = 1),
            (this.zt = ""),
            (this.Kt = ""),
            (this.Yt = "0"),
            (this.Jt = ""),
            (this.qt = !0),
            (this.Xt = !1),
            (this.Zt = 0),
            (this.te = []),
            (this.ee = new ht()),
            (this.ie = !1),
            (this.ne = void 0),
            (this.se = !0),
            (this.ue = this.oe()),
            (this.re = this.oe()),
            (this.ae = !1),
            (this.ce = !1),
            (this.De = []),
            (this.logEvent = (t) => {
              const e = new y(C, m, t);
              P.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              gt.getItemsAsync([_]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.he) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.ee.pushTask(() => tt.setItemsAsync({ [_]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                null != document.fullscreenElement
                  ? (this.logEvent({ name: "fullscreen_enter" }),
                    this.oe() && ((this.ue = !1), this.setChatVisible(this.shouldChatBeVisible())))
                  : (this.logEvent({ name: "fullscreen_exit" }),
                    this.oe() && ((this.ue = this.oe()), jQuery("#chat-wrapper").hide(), this.setChatVisible(!1, !1), this.removeChat())),
                null === (t = this.he) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.de = !1),
            (this.le = new Ot(this)),
            (this.pe = new Nt(this)),
            (this.ge = new Ut(this)),
            (this.Fe = void 0),
            (this.ve = void 0),
            (this.ye = !1);
        }
        setPageControls(t) {
          this.he = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.he) || void 0 === t || t.enablePartyIcons(), null === (e = this.he) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return Ht(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.qt = t), t && !this.fe() && this.reloadChat();
          });
        }
        Ce(t, e) {
          const i = new y(C, m, { name: "error", action: { reason: e, description: t } });
          P.l(i);
        }
        getChatWindowVisible() {
          return this.re;
        }
        setChatWindowActive(t) {
          this.ue = t;
        }
        isChatFrameActive() {
          return this.se;
        }
        isPartyWindowsActive() {
          return this.ue;
        }
        shouldChatBeVisible() {
          return this.qt;
        }
        incrementEmojiCount() {
          this.Zt++;
        }
        resetEmojiCount() {
          this.Zt = 0;
        }
        getEmojiCount() {
          return this.Zt;
        }
        setChatFrameReady(t) {
          this.ie && this.Ee(), (this.ie = !0), (this.we = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.ee.pushTask(() =>
            Ht(this, void 0, void 0, function* () {
              this._e(t, e);
            })
          );
        }
        _e(t, e) {
          return Ht(this, void 0, void 0, function* () {
            const i = this.we,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: C };
            P.l(n);
          });
        }
        be() {
          var t;
          return Ht(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield d(() => this.ie && null != this.we, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.ne && this.je(this.ne),
                null === (t = this.he) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.Ce("Sidewindow didn't load in time", t);
            }
          });
        }
        oe() {
          return !1;
        }
        Be() {
          return Ht(this, void 0, void 0, function* () {
            yield P.l(new v(C, m, c.LOAD_CHAT_WINDOW)), console.log(this.we);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return Ht(this, void 0, void 0, function* () {
            yield P.l(new v(C, m, c.RESET_CHAT_WINDOW)),
              console.log(this.we),
              (this.re = !0),
              (this.qt = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.ae && t && (this.resetIconListener(), null === (e = this.he) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return Ht(this, void 0, void 0, function* () {
            yield P.l(new v(C, m, c.HIDE_CHAT_WINDOW)), (this.re = !1), (this.qt = !1);
          });
        }
        Ae() {
          return Ht(this, void 0, void 0, function* () {
            this.Be(), this.ee.pushTask(this.be.bind(this));
          });
        }
        loadInitData(t) {
          this.ne = t;
        }
        je(t) {
          var e;
          return Ht(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = Y), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield At.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(bt.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(bt.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(bt.SET_USER_LIST, this.De),
              this.queueMessageForFrame(bt.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Qe) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        Ee() {
          return Ht(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.ne && (yield this.je(this.ne)), this.Qe)) {
              const t = this.ge.getUserIconURL(this.Qe.permId, this.Qe.userIcon);
              this.queueMessageForFrame(bt.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(bt.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        ke() {
          return Ht(this, void 0, void 0, function* () {
            this.xe(),
              yield h(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.Ie(),
              this.pe.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        Te(t) {
          this.le.initWindowListeners(), this.oe() && this.Ae(), this.ee.pushTask(this.be.bind(this)), $t(), (this.Qe = new nt(t));
          const e = this.ge.getUserIconURL(this.Qe.permId, this.Qe.userIcon);
          this.ge.setUserIconUrl(e),
            this.ge.renderSidebar(),
            this.fe() && this.removeChat(),
            (this.de = !0),
            this.Se(),
            this.oe()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.ke(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return Ht(this, void 0, void 0, function* () {
            "true" !== (yield gt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.ge.addYoutubePromo(), tt.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.ne = t;
          const e = Object.assign({}, t);
          (e.iconMap = Y),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(bt.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return Ht(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.fe() ||
                this.isPartyWindowsActive() ||
                (this.xe(),
                yield h(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.qt),
                this.addIconSelector(),
                this.Me(),
                this.Ie(),
                this.pe.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new at(C, m, t);
          P.l(e);
        }
        fe() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.ge.clearUnreadCount();
        }
        Pe() {
          return Ht(this, void 0, void 0, function* () {
            try {
              yield d(() => null !== document.querySelector("#chat-history") || this.ue || (this.ie && this.se), 1e4)();
            } catch (t) {
              this.Ce("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.ee.pushTask(() =>
            Ht(this, void 0, void 0, function* () {
              yield this.Pe(), this.ge.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.ee.pushTask(() =>
            Ht(this, void 0, void 0, function* () {
              yield this.Pe(), this.ge.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.ge.reloadMessages();
        }
        scrollToBottom() {
          this.ge.scrollToBottom();
        }
        addReviewMessage() {
          this.ge.addReviewMessage(), (this.ye = !0);
        }
        get showingReveiwMessage() {
          return this.ye;
        }
        set shouldReturnToVideo(t) {
          this.ae = t;
        }
        onBufferingMessage(t) {
          this.ee.pushTask(() =>
            Ht(this, void 0, void 0, function* () {
              yield this.Pe(), this.pe.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.ee.pushTask(() =>
            Ht(this, void 0, void 0, function* () {
              yield this.Pe(), this.pe.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.ee.pushTask(() =>
            Ht(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Pe(), this.pe.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.pe.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Qe) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.$e(this.Ve(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.ge.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Qe)) {
            const t = this.ge.getUserIconURL(this.Qe.permId, this.Qe.userIcon);
            this.ge.setUserIconUrl(t), this.ge.renderSidebar();
          }
        }
        Ie() {
          d(() => this.fe(), 1e4)().then(() => {
            this.le.startListening();
          });
        }
        Me() {
          this.le.stopListening(), this.Ge && (clearTimeout(this.Ge), (this.Xt = !1));
        }
        teardown() {
          (this.de = !1),
            (this.Kt = void 0),
            (this.Re = void 0),
            this.Me(),
            jQuery("[tpInjected]").remove(),
            this.removeChat(),
            this.setChatVisible(!1),
            console.log("teardown");
        }
        focusChat() {
          jQuery("#chat-input")[0].focus();
        }
        showEmojiPicker() {
          var t, e;
          jQuery("#gif-picker-container").is(":hidden") || this.toggleGIFs(), jQuery("#emoji-picker-btn-icon").css({ opacity: "1" });
          const i =
              null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                ? t
                : parseInt(jQuery("#bottom-chat-controls").css("height")),
            n = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
            s =
              (null !== (e = jQuery("#chat-input").outerHeight(!0)) && void 0 !== e ? e : parseInt(jQuery("#chat-input").css("height"))) +
              i +
              n;
          jQuery("#emoji-picker-container").css({ bottom: s });
        }
        hideEmojiPicker() {
          jQuery("#emoji-picker-btn-icon").css({ opacity: "" }), jQuery("#emoji-picker-container").css("bottom", "");
        }
        showReactionHolder() {
          jQuery("#reaction-btn-icon").css({ opacity: "1" }),
            jQuery("#reaction-holder").css({ display: "flex" }),
            jQuery("#reaction-holder").css({ "padding-top": "8px" }),
            jQuery("#chat-input-container").css({ "padding-top": "0" });
        }
        hideReactionHolder() {
          jQuery("#reaction-btn-icon").css({ opacity: "" }),
            jQuery("#reaction-btn").css({ background: "", padding: "" }),
            jQuery("#reaction-holder").css({ "padding-top": "" }),
            jQuery("#chat-input-container").css({ "padding-top": "" }),
            this.ee.pushTask(() => tt.setItemsAsync({ [_]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return Ht(this, void 0, void 0, function* () {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker(),
              jQuery("#gif-results-left")[0].innerHTML || this.fetchGIFs(),
              jQuery("#gif-btn-icon").css({ opacity: "1" });
            const i =
                null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                  ? t
                  : parseInt(jQuery("#bottom-chat-controls").css("height")),
              n = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
              s =
                (null !== (e = jQuery("#chat-input").outerHeight(!0)) && void 0 !== e ? e : parseInt(jQuery("#chat-input").css("height"))) +
                i +
                n;
            jQuery("#gif-picker-container").css({ bottom: s });
          });
        }
        onCloseGifPicker() {
          jQuery("#gif-btn-icon").css({ opacity: "" }), jQuery("#gif-btn").css({ background: "", padding: "" });
        }
        toggleEmojiClicker() {
          jQuery("#emoji-picker-container").slideToggle(0, () => {
            jQuery("#emoji-picker-container").is(":hidden") ? this.hideEmojiPicker() : this.showEmojiPicker();
          });
        }
        toggleReactions() {
          const t = document.querySelector("#chat-history");
          let e = !1;
          t && Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 10 && (e = !0),
            jQuery("#reaction-holder").slideToggle(0, () => {
              const t = jQuery("#reaction-holder").is(":hidden");
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.ge.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(bt.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new y(C, m, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          P.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new y(C, m, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          P.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new y(C, m, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          P.l(e), this.toggleReactions();
        }
        Se() {
          if (
            (M("Set Chat Html called"),
            (this.Le = H()),
            (this.Le = this.Le.replace(/{EXTENSION_LOGO}/g, J(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Qe)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          this.Le = this.Le.replace(/{CHAT_URL}/g, `${A}?t=${Date.now()}`);
          for (const t of Q) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.Le = this.Le.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.Le = this.Le.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.Le = this.Le.replace(/{USER_NICKNAME}/g, this.Qe.userNickname ? J(this.Qe.userNickname) : "Add a nickname")),
            (this.Le = this.Le.replace(/{USER_ICON}/g, this.ge.getUserIconURL(this.Qe.permId, this.Qe.userIcon))),
            (this.Le = this.Le.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.Le = this.Le.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.Le = this.Le.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.Le = this.Le.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.Le = this.Le.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.Le = this.Le.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.Le = this.Le.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.Le = this.Le.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.Le = this.Le.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.ce ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.Xt && jQuery("#chat-ad-holder").show(),
              jQuery("#chat-input-container").show(),
              jQuery("#reaction-holder").hide(),
              this.hideReactionHolder(),
              jQuery("#teleparty-blog-container").show(),
              jQuery("#presence-indicator").show(),
              jQuery("#chat-header-container").removeClass("chat-header-container-active"))
            : (jQuery("#chat-icon-container").data("active", !0),
              jQuery(".chat-settings-container").show(),
              jQuery("#chat-icon-container").hide(),
              jQuery("#chat-link-container").hide(),
              jQuery("#chat-history-container").hide(),
              jQuery("#sidebar-tabs-container").hide(),
              jQuery("#chat-friends-frame").slideUp(),
              jQuery("#chat-ad-holder").hide(),
              jQuery("#chat-input-container").hide(),
              jQuery("#teleparty-blog-container").hide(),
              jQuery("#presence-indicator").hide(),
              jQuery("#reaction-holder").hide(),
              jQuery("#nickname-edit").attr(
                "placeholder",
                null !== (e = null === (t = this.Qe) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.Qe) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.ce = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.ce = !1);
        }
        toggleLargeUserIconButton() {
          jQuery("#chat-icon-container").data("active") &&
            (jQuery("#chat-icon-container").show(),
            jQuery(".chat-settings-container").hide(),
            jQuery("#chat-header-container").addClass("chat-header-container-active"));
        }
        linkIconListener() {
          navigator.clipboard.writeText(this.getPartyUrl()),
            jQuery("#link-icon .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#link-icon .tooltiptext").text("Copy Link");
            }, 1e3);
        }
        resetIconListener() {
          var t;
          if (null === (t = this.Oe) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.Oe.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.zt = t;
        }
        setMessageForwarder(t) {
          this.Oe = t;
        }
        setSessionId(t) {
          this.Kt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(bt.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(bt.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.ge.getUserIconURL(t.permId, e.userIcon),
                n = this.ge.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.De = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(bt.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.Re = t;
        }
        getSessionCreated() {
          return this.Re;
        }
        getSessionId() {
          return this.Kt;
        }
        getPartyUrl() {
          return this.zt;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (M("userIconSelector button clicked: " + e),
            this.Qe &&
              (this.Qe.saveUserIcon(e),
              this.queueMessageForFrame(bt.UPDATE_SETTINGS, { userSettings: this.Qe.userSettings }),
              this.$e(this.Ve(this.Qe.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        $e(t, e) {
          P.l(t).then(e);
        }
        Ue(t) {
          return new ct(C, m, { reactionType: t });
        }
        Ne(t) {
          return new Dt(C, m, { gifObject: t });
        }
        He(t) {
          return new ot(C, m, { body: t });
        }
        We(t) {
          return new ut(C, m, { typing: t });
        }
        Ve(t) {
          return new rt(C, m, { userSettings: t });
        }
        ze(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction()) return;
          const e = t.reactionType,
            i = this.getReactionContainer();
          if (i) {
            const t = Math.floor(40 * Math.random()) + 40,
              n = i[0].offsetWidth - (this.shouldAddReactionSpace() ? 340 : 0) - t,
              s = Math.floor(Math.random() * n) + (this.shouldAddReactionSpace() ? 340 : 0),
              u = this.ze(e),
              o = Math.ceil(3 * Math.random()),
              r = jQuery(`<img class="on-screen-reaction on-screen-reaction-${o}" src='${u}' />`);
            r.css("right", `${s}px`),
              r.css("width", `${t}px`),
              r.css("height", `${t}px`),
              i.append(r),
              setTimeout(() => {
                r.remove();
              }, 5e3);
          }
        }
        onReactionClicked(t) {
          console.log(t), this.$e(this.Ue(t));
          const e = new y(C, m, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          P.l(e);
          const i = new y(C, m, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          P.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.le.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.Ce("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.te.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.$e(this.Ne(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new y(C, m, e);
              P.l(i);
              const n = new y(C, m, { eventType: "gif-share", sessionId: this.getSessionId() });
              P.l(n);
            }),
              this.toggleGIFs();
          }
        }
        Ke(t) {
          const e = document.createElement("video"),
            i = 124 / (t.media.preview.dims[0] / t.media.preview.dims[1]);
          return (
            (e.autoplay = !0),
            (e.loop = !0),
            (e.playsInline = !0),
            e.setAttribute("disablePictureInPicture", ""),
            e.setAttribute("disableRemotePlayback", ""),
            (e.src = t.media.preview.url),
            (e.muted = !0),
            (e.id = t.id),
            (e.height = i),
            (e.className = "gif-img"),
            e
          );
        }
        Ye(t) {
          const e = document.createElement("img"),
            i = 124 / (t.media.previewMobile.dims[0] / t.media.previewMobile.dims[1]);
          return (
            e.setAttribute("disablePictureInPicture", ""),
            e.setAttribute("disableRemotePlayback", ""),
            (e.src = t.media.previewMobile.url),
            (e.id = t.id),
            (e.height = i),
            (e.className = "gif-img"),
            e
          );
        }
        loadGIFs(t) {
          jQuery(".gif-placeholder").remove(),
            this.te.push(...t.results),
            (this.Yt = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.Ke(t) : this.Ye(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.Wt < 6 && this.Je(),
            setTimeout(() => {
              this.Ht = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return Ht(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Ht) t.preventDefault();
            else if ("0" !== this.Yt && e && this.Wt < 6) {
              (this.Wt += 1), (this.Ht = !0), t.preventDefault();
              const e = yield fetch(this.Jt + `&pos=${this.Yt}`),
                i = yield e.json();
              this.loadGIFs(i);
            }
          });
        }
        resetGif() {
          (jQuery("#gif-search")[0].value = ""), jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), this.fetchGIFs();
        }
        displayCategories() {
          (jQuery("#gif-search")[0].value = ""),
            jQuery("#category-container").show(),
            jQuery("#gif-results").hide(),
            jQuery("#gif-input-back").hide(),
            jQuery("#gif-search").css("width", "");
        }
        showCategories() {
          (jQuery("#gif-search")[0].value = ""), jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", "");
          const t = document.createElement("div");
          ["trending", "dance", "annoyed", "omg", "crazy", "shrug", "smile", "awkward", "ew", "surprised", "why", "ouch "].forEach((e) => {
            const i = document.createElement("div"),
              n = document.createElement("span");
            (n.id = "category-txt"), (n.innerHTML = e), (i.className = "tp-category-div");
            const s = document.createElement("video");
            (s.autoplay = !0),
              (s.src = "https://media.tenor.com/videos/166d7d5a1be3b0755e7f9e29ebefe2c3/mp4"),
              (s.className = "category-img"),
              (s.id = e),
              (s.loop = !0),
              i.appendChild(n),
              i.appendChild(s),
              t.appendChild(i);
          }),
            (jQuery("#category-container")[0].innerHTML = t.innerHTML);
        }
        qe() {
          const t = [],
            e = [];
          for (let i = 0; i < 4; i++) {
            let i = Math.floor(4 * Math.random()) + 1;
            for (; e.includes(i); ) i = Math.floor(4 * Math.random()) + 1;
            e.push(i);
            const n = document.createElement("div");
            (n.className = `gif-placeholder gif-placeholder-${i} gif-img`), t.push(n);
          }
          return t;
        }
        Je() {
          return Ht(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.qe()), jQuery("#gif-results-right")[0].append(...this.qe());
          });
        }
        logShare(t, e) {
          return Ht(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${b}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return Ht(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.Wt = 1),
              (this.Ht = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.te = []),
              this.Je();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.Jt = `${b}/${u}${s}`);
            const o = yield fetch(`${b}/${u}${s}`),
              r = yield o.json();
            if (r.results && r.results.length > 0) this.loadGIFs(r);
            else if (!t) {
              const t = yield fetch(`${b}/trending_gifs?${s}`);
              this.Jt = `${b}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.ve && clearTimeout(this.ve), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.ve = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        Xe(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.Fe ? this.$e(this.We(!0)) : clearTimeout(this.Fe),
              (this.Fe = setTimeout(() => {
                (this.Fe = void 0), this.$e(this.We(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.Xe(i)) {
              void 0 !== this.Fe && (clearTimeout(this.Fe), (this.Fe = void 0), this.$e(this.We(!1))),
                e.prop("contenteditable", !1),
                this.$e(this.He(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return _t();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new y(C, m, t);
              P.l(n);
            } else t.stopImmediatePropagation(), t.preventDefault(), (e[0].textContent = ""), this.onInputChange();
          }
        }
        onInputChange() {
          const t = jQuery("#chat-input");
          if (t.length > 0) {
            const e = t[0].textContent;
            e && this.shouldShowIncreasedSize(e) ? t.addClass("tp-emoji-large") : t.removeClass("tp-emoji-large");
          }
          jQuery("#emoji-picker-container").css("bottom").length > 0 &&
            (jQuery("#emoji-picker-container").is(":hidden") || this.showEmojiPicker());
        }
        shouldShowIncreasedSize(t) {
          const e = t.replace(S, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(S) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          M("saveChanges button clicked: " + e),
            e !== (null === (t = this.Qe) || void 0 === t ? void 0 : t.userNickname) &&
              this.Qe &&
              (this.Qe.saveUserNickname(e),
              this.queueMessageForFrame(bt.UPDATE_SETTINGS, { userSettings: this.Qe.userSettings }),
              this.$e(this.Ve(this.Qe.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.de;
        }
        addIconSelector() {
          Object.keys(Y).forEach((t) => {
            if (q[t]()) {
              const e = Y[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.Ze(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(S) || []).length,
            i = t.replace(S, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        Ze(t, e, i) {
          jQuery(
            `\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL(
              "img/icons/" + t
            )}' data-tp-id="chat_container-new_icon_selection-${i}">\n            </a>\n        `
          )
            .appendTo(e)
            .data("icon", t);
        }
      } {
        constructor(t) {
          super(),
            (this.ti = t),
            (this.ei =
              "\n        #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n            position: absolute !important;\n            z-index: 99 !important;\n        }\n\n        .on-screen-reaction {\n            z-index: 99 !important;\n        }\n\n        #tpIconContainer {\n            width: min-content;\n        }\n        ");
          (this.ii = this.ti.isOldCrunchyroll() ? Yt.OLD_WRAPPER_SELECTOR : Yt.BETA_WRAPPER_SELECTOR),
            jQuery(this.ii).prepend(
              "\n            <style>\n                .fullscreen-class {\n                    object-fit: contain;\n                    user-select: text;\n                    position: fixed !important;\n                    top: 0px !important;\n                    right: 0px !important;\n                    bottom: 0px !important;\n                    left: 0px !important;\n                    box-sizing: border-box !important;\n                    min-width: 0px !important;\n                    max-width: none !important;\n                    min-height: 0px !important;\n                    max-height: none !important;\n                    width: 100% !important;\n                    height: 100% !important;\n                    transform: none !important;\n                    margin: 0px !important;\n                    z-index: 999;\n                }\n\n                #tpIconContainer {\n                    width: min-content;\n                }\n                #tp-buttons-container {\n                    pointer-events: all;\n                }\n        \n                .no-scroll {\n                    height: 100%;\n                    overflow: hidden;\n                }\n        \n                .fix-background {\n                    background: black !important;\n                }\n            </style>\n        "
            );
        }
        getReactionContainer() {
          return this.ti.isOldCrunchyroll() ? jQuery("#showmedia_video_player") : jQuery(".video-player-wrapper");
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        isInFullscreen() {
          const t = this.ti.isOldCrunchyroll();
          return jQuery(t ? "#showmedia_video_player" : ".video-player-wrapper").hasClass("fullscreen-class");
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Kt(this, void 0, void 0, function* () {
            i.setChatVisible.call(this, t, e),
              t
                ? (jQuery("#chat-wrapper").show(),
                  this.ti.isOldCrunchyroll() || jQuery(this.ii).addClass(L),
                  this.ti.isOldCrunchyroll() && this.isInFullscreen() && jQuery("#vilos-player").addClass(L))
                : (jQuery("#chat-wrapper").hide(),
                  this.ti.isOldCrunchyroll() || jQuery(this.ii).removeClass(L),
                  this.ti.isOldCrunchyroll() && this.isInFullscreen() && jQuery("#vilos-player").removeClass(L));
          });
        }
        removeChat() {
          super.removeChat(), jQuery(this.ii).removeClass(L);
        }
        getVideoTitle() {
          var t;
          return Kt(this, void 0, void 0, function* () {
            const e =
              null !== (t = document.querySelector(".show-title-link")) && void 0 !== t
                ? t
                : document.querySelector("#showmedia_about_episode_num");
            if (e) return e.innerText;
          });
        }
        shouldAddReactionSpace() {
          return !0;
        }
        shouldShowReaction() {
          return !0;
        }
        shouldUseVideoGIF() {
          return !1;
        }
        xe() {
          if (this.Le) {
            if (this.ti.isOldCrunchyroll()) {
              const t =
                "\n                body { \n                    overflow-x: hidden;\n                }\n                #showmedia {\n                    width: 960px;\n                }\n                #marketing_banner {\n                    width: 100%;\n                }\n                body img {\n                    border: none;\n                }\n                .ellipsis {\n                    display: inline-flex;\n                }\n                #header_beta {\n                    position: initial !important;\n                }\n                ";
              jQuery(this.ii).prepend(U(this.Le, this.ei + t));
            } else jQuery(this.ii).after(U(this.Le, this.ei));
            jQuery(".app-body-wrapper").addClass("fix-background");
          }
        }
      }
      (Yt.BETA_WRAPPER_SELECTOR = ".video-player"),
        (Yt.OLD_WRAPPER_SELECTOR = ".anon-state"),
        (function (t) {
          (t.CREATE_SESSION = "createSession"),
            (t.RE_INJECT = "reInject"),
            (t.GET_INIT_DATA = "getInitData"),
            (t.GET_INIT_USER_SESTTINGS = "getInitUserSettings"),
            (t.IS_CONTENT_SCRIPT_READY = "isContentScriptReady"),
            (t.SET_CHAT_VISIBLE = "setChatVisible"),
            (t.DISCONNECT = "teardown"),
            (t.CLOSE_POPUP = "closePopup"),
            (t.GET_SCHEDULED_EVENTS = "getScheduledEvents"),
            (t.GET_RECENT_SCHEDULED_EVENTS = "getRecentScheduledEvents"),
            (t.GOOGLE_SIGN_IN = "googleSignIn"),
            (t.EMAIL_SIGN_IN = "emailSignIn"),
            (t.FORGOT_PASSWORD = "forgotPassword"),
            (t.EMAIL_SIGN_UP = "emailSignUp"),
            (t.CREATE_SCHEDULED_EVENT = "createScheduledEvent"),
            (t.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent"),
            (t.SET_USER_STATUS = "SET_USER_STATUS"),
            (t.SIGN_IN_CREATE = "SIGN_IN_CREATE");
        })(Wt || (Wt = {}));
      class Jt extends st {
        constructor(t, e, i) {
          super(t, e, et.GET_SESSION_DATA), (this.data = i);
        }
      }
      class qt {
        constructor() {
          (this.ni = this.si.bind(this)), (this.ui = []), this.oi();
        }
        addMessageListener(t) {
          this.ui.push(t);
        }
        removeMessageListener(t) {
          this.ui = this.ui.filter((t) => {});
        }
        oi() {
          P.addListener(this.ni);
        }
        teardown() {
          (this.ui = []), P.removeListener(this.ni);
        }
        si(t, e, i) {
          if (!this.ri(t)) return !1;
          return !!this.ai(t, e, i) || (i({}), !1);
        }
        ri(t) {
          return t.target === C;
        }
        ai(t, e, i) {
          let n = !1;
          return (
            this.ui.forEach((s) => {
              s.onMessage(t, e, i) && (n = !0);
            }),
            n
          );
        }
      }
      !(function (t) {
        (t.INIT_CHAT = "initChat"),
          (t.ON_MESSAGE = "onMessage"),
          (t.ON_BUFFER = "onBuffer"),
          (t.ON_TYPING = "onTyping"),
          (t.ON_WATCHING_ADS = "onWatchingAds"),
          (t.UPDATE_SETTINGS = "updateSettings"),
          (t.ON_REACTION = "onReaction"),
          (t.ON_GIF = "onGif"),
          (t.ON_LOG_EVENT = "onLogEvent"),
          (t.USER_LIST = "userList"),
          (t.ON_WEB_RTC = "onWebRTC");
      })(zt || (zt = {}));
      var Xt,
        Zt = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                a(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                a(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            a((n = n.apply(t, e || [])).next());
          });
        };
      class te {
        constructor(t, e) {
          (this.W = t), (this.he = e), M("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case c.LOAD_SESSION: {
              const e = t;
              return this.ci(e.data), !1;
            }
            case zt.ON_MESSAGE: {
              const e = t;
              return this.O(e), this.he.onChatMessage(), !1;
            }
            case zt.ON_BUFFER: {
              const e = t;
              return this.Di(e), !1;
            }
            case zt.ON_TYPING: {
              const e = t;
              return this.hi(e), !1;
            }
            case zt.ON_WATCHING_ADS: {
              const e = t;
              return this.di(e), !1;
            }
            case zt.UPDATE_SETTINGS: {
              const e = t;
              return this.li(e), !1;
            }
            case zt.ON_REACTION: {
              const e = t;
              return this.pi(e), !1;
            }
            case zt.ON_GIF: {
              const e = t;
              return this.gi(e), !1;
            }
            case zt.USER_LIST: {
              const e = t;
              return this.Fi(e), !1;
            }
            case zt.ON_WEB_RTC:
              return this.W.onWebRTC(t.data), !0;
            case Wt.SET_CHAT_VISIBLE: {
              const e = t;
              return this.vi(e.data), i(), !1;
            }
            case bt.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.W.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case bt.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case bt.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.W.doUpdateSettings(e), i(), !0;
            }
            case bt.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case bt.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.W.setReactionsActive(e), i(), !0;
            }
            case bt.RESET_VIEW:
              return this.W.resetChatWindow(!0), i(), !0;
            case bt.ON_FOCUS:
              return this.W.onSidebarFocus(), i(), !0;
            case bt.PREVIEW_REACTION: {
              const e = t.data;
              return this.W.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.W.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.W.teardown();
        }
        vi(t) {
          return Zt(this, void 0, void 0, function* () {
            this.W.isPartyWindowsActive()
              ? t.visible
                ? yield this.W.resetChatWindow()
                : yield this.W.hideChatWindow()
              : (yield this.W.setChatVisible(t.visible), this.W.fixPageControls());
          });
        }
        ci(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${B}/join/${e}`;
          if (
            (this.W.loadInitData(t),
            this.W.setPartyUrl(i),
            this.W.setSessionId(e),
            this.W.Te(t.storageData),
            this.he.onInitChat(),
            this.W.setSessionCreated(t.isCreate),
            this.W.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.W.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.W.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.W.addGif(e) : this.W.addMessage(e, !0);
        }
        O(t) {
          this.W.addMessage(t.data);
        }
        pi(t) {
          this.W.showReaction(t.data);
        }
        gi(t) {
          this.W.addGif(t.data);
        }
        Di(t) {
          this.W.onBufferingMessage(t.data);
        }
        hi(t) {
          this.W.onTypingMessage(t.data);
        }
        di(t) {
          this.W.onWatchingAdsMessage(t.data);
        }
        li(t) {
          this.W.onUpdateSettingsMessage(t.data);
        }
        Fi(t) {
          this.W.loadUserList(t.data.userList), this.W.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(Xt || (Xt = {}));
      class ee extends st {
        constructor(t, e, i) {
          super(t, e, et.BROADCAST), (this.data = i);
        }
      }
      class ie extends F {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class ne extends ie {
        constructor(t, e) {
          super(t, e, Xt.GET_SERVER_TIME);
        }
      }
      class se extends st {
        constructor(t, e, i) {
          super(t, e, et.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class ue extends st {
        constructor(t, e, i) {
          super(t, e, et.SET_BUFFERING), (this.data = i);
        }
      }
      class oe extends st {
        constructor(t, e, i) {
          super(t, e, et.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const re = "PING",
        ae = "SYNC",
        ce = "BROADCAST";
      class De extends v {
        constructor(t, e, i) {
          super(t, e, c.STAY_ALIVE), (this.data = i);
        }
      }
      var he = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      const de = new (class {
        getRedirectDataForTabAsync(t) {
          return he(this, void 0, void 0, function* () {
            const e = (yield gt.getItemsAsync([I])).redirectDataMap,
              i = this.yi(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.mi(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return he(this, void 0, void 0, function* () {
            const e = (yield gt.getItemsAsync([I])).redirectDataMap,
              i = this.yi(t);
            e && e[i] && delete e[i], yield tt.setItemsAsync({ [I]: e });
          });
        }
        yi(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return he(this, void 0, void 0, function* () {
            const i = this.yi(e);
            let n = yield gt.getItemsAsync([I]);
            (n[i] = t), (n = this.fi(n)), yield tt.setItemsAsync({ [I]: n });
          });
        }
        fi(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.mi);
        }
        mi(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(de);
      const le = de;
      var pe = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class ge {
        constructor(e, i, n) {
          (this.Ci = []),
            (this.Ei = 0),
            (this.wi = 0),
            (this._i = []),
            (this.bi = !1),
            (this.Lt = !1),
            (this.g = !1),
            (this.ji = !1),
            (this.Bi = void 0),
            (this.Ai = () =>
              pe(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.Bi = !1);
                } catch (t) {
                  this.Bi = !0;
                }
              })),
            (this.Qi = (t = !1, e = !1) =>
              pe(this, void 0, void 0, function* () {
                if (this.ki) return;
                if (this.g) return void this.forceSync();
                if (!this.ji && !e) return;
                const i = yield this.xi();
                if (yield this.Ii(i.data, e)) yield this.Ti(i);
                else if (t) {
                  if (yield this.Si(e)) {
                    const t = yield this.xi();
                    yield this.Ti(t);
                  }
                }
              })),
            (this.Mi = () =>
              pe(this, void 0, void 0, function* () {
                if (
                  (this.Pi == t.PAUSED &&
                    this.$i &&
                    (clearInterval(this.$i),
                    (this.$i = setInterval(() => {
                      this.Vi();
                    }, 6e4))),
                  this.Gi())
                )
                  return;
                if ((yield this.ti.waitVideoDoneLoadingAsync(), this.Gi())) return;
                const e = yield this.ti.getStateAsync();
                this.Pi == t.PAUSED ? yield this.Ri(e) : this.Pi == t.PLAYING && (yield this.Li(e)), !1 === this.ji && (this.ji = !0);
              })),
            (this.ti = e),
            (this.W = i),
            (this.Oi = n),
            this.Oi.setMessageForwarder(this),
            (this.Ui = 0),
            (this.ki = !1),
            (this.Pi = t.PAUSED),
            (this.Ni = 0),
            (this.Hi = 0),
            (this.Wi = 0),
            (this.zi = this.ti.getStreamingServiceName()),
            M("Video forwarder"),
            this.Ai();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case c.GET_VIDEO_DATA:
              return this.Ki(i), !0;
            case c.LOAD_SESSION: {
              const e = t;
              return this.Yi(e.data), !1;
            }
            case Xt.UPDATE_SESSION: {
              const e = t;
              return this.Ji(e.data), !1;
            }
            case Xt.NEXT_EPISODE: {
              const e = t;
              return this.qi(e.data), !1;
            }
            case Xt.REBOOT_SESSION: {
              const e = t;
              return this.Xi(e.data, i), !0;
            }
            case Xt.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case zt.ON_WATCHING_ADS: {
              const e = t;
              return this.di(e), !1;
            }
            default:
              return !1;
          }
        }
        di(t) {
          t.data.anyoneWatchingAds && !this.Lt && (dt.pushTask(this.ti.doAdCheck.bind(this.ti)), this.forceSync()),
            (this.Lt = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.Zi;
        }
        set videoId(t) {
          this.Zi = t;
        }
        sendTeardown(t) {
          const e = new at(C, m, t);
          P.l(e);
        }
        teardown() {
          (this.Kt = void 0),
            this.tn && clearInterval(this.tn),
            this.$i && clearInterval(this.$i),
            this.ti.pause(),
            dt.disable(),
            this.Oi.stopListening();
        }
        Xi(t, e) {
          dt.resetTasks(), this.Zi == t.videoId && this.Ji(t), e(this.Zi == t.videoId);
          const i = new y(C, m, { eventType: "reboot", sessionId: this.Kt });
          P.l(i);
        }
        tryBroadcast(t = !1) {
          this.bi ||
            (this.g
              ? this.forceSync()
              : 0 != this.ti.uiEventsHappening || this.ki || !this.Kt || dt.hasTaskInQueue(ce) || dt.pushTask(() => this.Qi(t), ce));
        }
        setBuffering(t) {
          if (this.Kt) {
            const e = new ue(C, m, { buffering: t });
            P.l(e);
          }
        }
        isWatchingAds() {
          return this.bi;
        }
        setWatchingAds(t, e) {
          if (this.Kt) {
            this.bi = t;
            const i = new oe(C, m, { watchingAds: t, adDurationLeft: e });
            P.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return pe(this, void 0, void 0, function* () {
            if (this.Kt && t !== this.Zi && t !== this.en) {
              (this.en = t), (this.ki = !0);
              const e = new se(C, m, { nextEpisode: t }),
                i = yield P.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.nn(t));
            }
          });
        }
        nn(t) {
          return pe(this, void 0, void 0, function* () {
            try {
              yield d(() => t == this.Zi, 1e4)(), (this.ki = !1);
            } catch (t) {
              this.Ce("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: It };
              this.sendTeardown(e);
            }
          });
        }
        Ii(e, i) {
          return pe(this, void 0, void 0, function* () {
            if (null == e.lastKnownTime || null == e.lastKnownTimeUpdatedAt || null == e.state) return !1;
            if (i && e.state === t.PAUSED && e.lastKnownTime < Qt) return !1;
            const n = Math.abs(e.lastKnownTime - this.sn());
            if (e.state == this.Pi && n < Qt) return !1;
            if (n >= Qt) {
              const t = new y(C, m, { name: "video_seek", action: { source: "self" } });
              P.l(t), this.zi == u.AMAZON || this.zi == u.PARAMOUNT ? yield h(200)() : this.zi == u.HBO_MAX && (yield h(500)());
            }
            return !0;
          });
        }
        xi() {
          return pe(this, void 0, void 0, function* () {
            const t = yield this.ti.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.wi), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new ee(C, m, t);
          });
        }
        forceSync() {
          dt.pushTask(this.Mi, ae);
        }
        qi(t) {
          return pe(this, void 0, void 0, function* () {
            (this.Ui = Date.now()), dt.pushTask(() => this.un(t));
          });
        }
        un(e) {
          return pe(this, void 0, void 0, function* () {
            try {
              M("Continue next episode called"),
                (this.ki = !0),
                yield this.ti.jumpToNextEpisode(e),
                yield this.Oi.loadNewVideoAsync(e.videoId),
                M("After load new video"),
                this.Oi.reloadListeners(),
                this.Wi < this.Ui &&
                  ((this.Pi = t.PAUSED),
                  (this.Ni = 0),
                  (this.Hi = Date.now()),
                  M("Sending broadcast after next episode"),
                  dt.pushTask(() => this.Qi(!0, !0), ce),
                  dt.removeTask(ae)),
                (this.Zi = e.videoId),
                (this.ki = !1);
              const i = new y(C, m, { name: "video_start", action: { description: "video session has begun" } });
              P.l(i);
            } catch (t) {
              this.Ce("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return pe(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new De(C, m, { tabId: n, persist: t });
            P.l(s);
            const u = yield this.on();
            (u.date = Date.now()), le.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return pe(this, void 0, void 0, function* () {
            try {
              const i = yield this.on();
              i.date = Date.now();
              const n = yield this.rn(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new De(C, m, { tabId: s, persist: !1 });
              yield P.l(u), yield le.storeRedirectDataForTabAsync(i, s), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.Ce("Failed to fix next episode.");
              const e = new at(C, m, { showAlert: !0, alertModal: St });
              P.l(e);
            }
          });
        }
        on() {
          return pe(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              const i = new XMLHttpRequest();
              (i.timeout = 1e4),
                (i.ontimeout = () => {
                  e(new Error());
                }),
                (i.onreadystatechange = () => {
                  if (i.readyState === XMLHttpRequest.DONE)
                    try {
                      const e = JSON.parse(i.responseText);
                      t(e);
                    } catch (t) {
                      e(t), this.Ce("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.Kt, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        rn(t) {
          if ("object" == typeof (e = t) && null !== e && "videoService" in e && "videoId" in e) {
            switch (t.videoService.toLowerCase()) {
              case "crunchyroll":
                return `https://www.crunchyroll.com/watch/${t.videoId}`;
              case "netflix":
                return `https://www.netflix.com/watch/${t.videoId}`;
              case "hulu":
                return `https://www.hulu.com/watch/${t.videoId}`;
              case "disney":
                return `https://www.disneyplus.com/video/${t.videoId}`;
              case "starplus":
                return `https://www.starplus.com/video/${t.videoId}`;
              case "amazon": {
                const e = t.serviceDomain;
                if (e) return `https://${e}/gp/video/detail/${t.videoId}?autoplay=1`;
                throw new Error("No service Domain");
              }
              case "hbomax": {
                const e = t.videoType;
                if (e) {
                  return `https://play.hbomax.com/${e}/urn:hbo:${e}:${t.videoId}`;
                }
                throw new Error("No Video Type");
              }
              case "youtube": {
                const e = t.videoId,
                  i = t.serviceDomain;
                if (i) return e && "browsing" !== e ? `https://${i}/watch/${e}` : `https://${i}/`;
                throw new Error("No service Domain");
              }
              case "espn":
                return `https://www.espn.com/watch/player/_/id/${t.videoId}`;
              case "paramount":
                return `https://www.paramountplus.com/${this.mapToParamountType(t.videoType)}/video/${t.videoId}/`;
              case "hotstar":
                return `https://www.hotstar.com/${t.videoId}/watch`;
              case "max":
                return `https://play.max.com/video/watch/${t.videoId}`;
              case "plutotv":
                return `https://www.pluto.tv/${t.videoId}`;
              case "jiocinema":
                return `https://www.jiocinema.com/${t.videoId}`;
              case "tubitv":
                return `https://tubitv.com${t.videoId}`;
              case "crave":
                return `https://www.crave.ca/${t.videoId}`;
              case "mubi":
                return `https://mubi.com/${t.videoId}`;
              case "stan":
                return `https://play.stan.com.au/programs/${t.videoId}/play`;
              default:
                throw new Error();
            }
          }
          var e;
          throw new Error("Invalid Session Response");
        }
        Ji(t) {
          (this.Wi = Date.now()), dt.pushTask(this.an(t).bind(this));
        }
        an(e) {
          if (e.state === t.PAUSED && this.Pi === t.PLAYING) {
            this.Vi();
            const t = new y(C, m, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            P.l(t);
          } else if (e.state === t.PLAYING && this.Pi === t.PAUSED) {
            const t = new y(C, m, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            P.l(t), this.Vi();
          }
          return (this.Pi = e.state), (this.Ni = e.lastKnownTime), (this.Hi = e.lastKnownTimeUpdatedAt), this.Mi;
        }
        Ki(t) {
          var e;
          return pe(this, void 0, void 0, function* () {
            try {
              const e = yield this.ti.getVideoDataAsync(),
                i = yield this.ti.getStateAsync();
              (e.is_player_fullscreen = null !== document.fullscreenElement),
                (e.is_chat_visible = this.W.getChatVisible()),
                (e.is_adblock_enabled = this.Bi),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.Ni),
                t(e);
            } catch (i) {
              this.Ce(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        Ce(t) {
          const e = new y(C, m, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          P.l(e);
        }
        Si(t) {
          return pe(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  pe(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.xi();
                      (yield this.Ii(i.data, t))
                        ? e(!0)
                        : setTimeout(() => {
                            n();
                          }, 50);
                    }
                  });
              n();
            });
          });
        }
        Ti(e) {
          return pe(this, void 0, void 0, function* () {
            if (this.ki || this.bi) return;
            const i = this.Pi;
            if (e.data.bufferingState) {
              (e.data.state = t.PAUSED), yield P.l(e, 1e3), yield this.ti.waitVideoDoneLoadingAsync();
              const n = yield this.xi();
              (n.data.bufferingState = !0), i == t.PLAYING && (n.data.state = t.PLAYING), yield P.l(n, 1e3);
            } else yield P.l(e, 1e3);
          });
        }
        Yi(t) {
          return pe(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.Kt = e.sessionId),
              (this.Pi = e.state),
              (this.Ni = Number(e.lastKnownTime)),
              (this.Hi = Number(e.lastKnownTimeUpdatedAt)),
              (this.Zi = e.videoId),
              (this.Lt = !1),
              "true" == e.controlLock && (this.g = !0),
              t.isCreate ? ((this.ji = !0), dt.pushTask(this.Qi.bind(this), ce)) : this.forceSync();
            const i = new y(C, m, { name: "video_start", action: { description: "video session has begun" } });
            P.l(i), this.Oi.startListening(), this.cn();
          });
        }
        Dn() {
          return new Promise((t) => {
            const e = new ne(C, m),
              i = Date.now();
            P.l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (l(this.Ci, e - i, 5), (this.Ei = p(this.Ci)), l(this._i, e - Math.round(this.Ei / 2) - n, 5), (this.wi = p(this._i)));
                }
              })
              .catch((t) => {
                M(t), this.Ce(t);
              }),
              t();
          });
        }
        Vi() {
          const t = new y(C, m, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          P.l(t);
        }
        cn() {
          this.tn && clearInterval(this.tn),
            this.$i && clearInterval(this.$i),
            (this.tn = setInterval(() => {
              dt.hasTaskInQueue(ae) || dt.pushTask(this.Mi, ae);
            }, 5e3)),
            (this.$i = setInterval(() => {
              this.Vi();
            }, 6e4)),
            (this.hn = setInterval(() => {
              dt.hasTaskInQueue(re) || dt.pushTask(this.Dn.bind(this), re);
            }, 12500)),
            this.Dn();
        }
        Gi() {
          return !this.Kt || this.ti.uiEventsHappening > 0 || this.bi || this.ki || !this.Oi.shouldSync();
        }
        Ri(t) {
          return pe(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== o.PAUSED && (yield this.ti.pause()), Math.abs(this.Ni - i) > 2500)) {
              yield this.ti.setCurrentTime(this.Ni);
              const t = new y(C, m, { name: "video_seek", action: { source: "another user" } });
              P.l(t);
            }
          });
        }
        Li(t) {
          return pe(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.sn();
            if ((e == o.PAUSED && (yield this.ti.play()), Math.abs(n - i) > 2500)) {
              yield this.ti.setCurrentTime(n), yield this.ti.play();
              const t = new y(C, m, { name: "video_seek", action: { source: "another user" } });
              P.l(t);
            }
          });
        }
        dn() {
          return this.Pi === t.PLAYING ? Date.now() - (this.Hi + this.wi) : 0;
        }
        sn() {
          return this.Ni + this.dn();
        }
        get changingVideo() {
          return this.ki;
        }
        set changingVideo(t) {
          this.ki = t;
        }
      }
      i(5640);
      var Fe = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      var ve = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      var ye = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class me extends class {
        constructor(t) {
          (this.ti = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return ve(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return ve(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return ve(this, void 0, void 0, function* () {
            yield null === (t = this.Oe) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.ln();
        }
        stopListening() {
          this.pn();
        }
        ln() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            ve(this, void 0, void 0, function* () {
              this.gn(), this.ti.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              ve(this, void 0, void 0, function* () {
                this.gn(), this.ti.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        pn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        Fn() {
          var t;
          null === (t = this.Oe) || void 0 === t || t.tryBroadcast(!1);
        }
        gn() {
          var t;
          console.log("Going to wait for change"), null === (t = this.Oe) || void 0 === t || t.tryBroadcast(!0);
        }
        vn() {
          var t;
          null === (t = this.Oe) || void 0 === t || t.setBuffering(!0);
        }
        yn(t) {
          var e;
          null === (e = this.Oe) || void 0 === e || e.setWatchingAds(!0, t);
        }
        mn() {
          var t, e;
          null === (t = this.Oe) || void 0 === t || t.setWatchingAds(!1), null === (e = this.Oe) || void 0 === e || e.forceSync();
        }
        Cn() {
          var t;
          null === (t = this.Oe) || void 0 === t || t.setBuffering(!1);
        }
        En(t) {
          var e;
          null === (e = this.Oe) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        wn(t) {
          var e;
          null === (e = this.Oe) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.Oe = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e, i) {
          super(t),
            (this._n = this.onUserInteraction.bind(this)),
            (this.bn = this.onVideoLoadStart.bind(this)),
            (this.ti = t),
            (this.W = e),
            (this.he = i),
            (this.jn = this.ti.onNode.bind(this.ti)),
            (this.Bn = this.onEventNode.bind(this)),
            window.addEventListener("message", this.jn, !1),
            window.addEventListener("message", this.Bn, !1);
        }
        onUserInteraction() {
          return ye(this, void 0, void 0, function* () {
            dt.tasksInFlight < 5 && !dt.hasTaskInQueue("NETFLIX_WAIT_FOR_CHANGE") && (this.gn(), yield this.ti.updateState());
          });
        }
        onVideUpdateAsync() {
          return ye(this, void 0, void 0, function* () {
            this.Fn();
          });
        }
        onFullScreen() {
          const t = this.ti.isOldCrunchyroll(),
            e = t ? "#showmedia_video_player" : ".video-player-wrapper",
            i = "fullscreen-class";
          if (jQuery(e).hasClass(i)) {
            t && (jQuery(".anon-state").prepend(jQuery("#chat-wrapper")), jQuery("#vilos-player").removeClass(L)),
              jQuery(e).removeClass(i),
              jQuery("body").removeClass(O);
            const n = new v(C, m, c.MAX_WINDOW);
            P.l(n), this.W.logEvent({ name: "fullscreen_exit" });
          } else {
            t && jQuery("#chat-wrapper").insertAfter(jQuery("#vilos-player")),
              jQuery(e).addClass(i),
              jQuery("body").addClass(O),
              this.W.setChatVisible(this.W.getChatVisible());
            const n = new v(C, m, c.FULLSCREEN_WINDOW);
            P.l(n),
              this.W.logEvent({ name: "fullscreen_enter" }),
              this.W.setChatWindowActive(!1),
              this.W.setChatVisible(this.W.shouldChatBeVisible());
          }
        }
        exitFullscreen() {
          const t = this.ti.isOldCrunchyroll(),
            e = t ? "#showmedia_video_player" : ".video-player-wrapper",
            i = "fullscreen-class";
          if (jQuery(e).hasClass(i)) {
            t && (jQuery(".anon-state").prepend(jQuery("#chat-wrapper")), jQuery("#vilos-player").removeClass(L)),
              jQuery(e).removeClass(i),
              jQuery("body").removeClass(O);
            const n = new v(C, m, c.MAX_WINDOW);
            P.l(n);
          }
        }
        startListening() {
          super.startListening(), this.ti._("startListeningVideo");
        }
        stopListening() {
          super.stopListening(), this.ti._("stopListeningVideo");
        }
        reloadListeners() {
          this.stopListening(), this.startListening();
        }
        onEventNode(t) {
          if (!this.ti.isPlayerPage()) return void this.wn(Vt);
          const e = t.data;
          "videoLoadStart" == e.type && (console.log("Received Video Data"), this.onVideoLoadStart()),
            "onUserInteraction" == e.type && this.onVideUpdateAsync(),
            "onFullscreen" == e.type && (this.onFullScreen(), console.log("Fullscreen clicked")),
            "exitFullscreen" == e.type && this.exitFullscreen(),
            "onAdEnd" == e.type && this.mn(),
            "onAdStart" == e.type && this.yn(),
            "alterPageControls" == e.type && (this.he.isMenuVisibile = e.menuVisible);
        }
        onVideoLoadStart() {
          var t, e, i;
          return ye(this, void 0, void 0, function* () {
            if (this.ti.isPlayerPage())
              try {
                if (null === (t = this.Oe) || void 0 === t ? void 0 : t.changingVideo) return;
                this.Oe && (this.Oe.changingVideo = !0), yield this.ti.updateVideoData();
                const n = null === (e = this.ti.C) || void 0 === e ? void 0 : e.videoId;
                n && n != (null === (i = this.Oe) || void 0 === i ? void 0 : i.videoId) && this.En(n);
              } catch (t) {
                console.log(t);
              }
            else this.wn(Vt);
          });
        }
        loadNewVideoAsync(t) {
          return ye(this, void 0, void 0, function* () {
            const e = performance.now();
            yield this.ti.updateVideoData(),
              yield new Promise((i, n) => {
                const s = setInterval(() => {
                  var u;
                  if ((null === (u = this.ti.C) || void 0 === u ? void 0 : u.videoId) === t) {
                    const t = this.ti.getVideoElement();
                    if (t instanceof Element && t.src) return clearInterval(s), void i();
                  }
                  performance.now() - e >= 2e4 && (clearInterval(s), n(new Error("Could not load new video in time.")));
                }, 100);
              }),
              yield this.ti.waitVideoDoneLoadingAsync();
          });
        }
      }
      var fe = i(4296),
        Ce = i.n(fe);
      class Ee extends F {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class we extends Ee {
        constructor(t, e, i) {
          super(t, e, Wt.CREATE_SESSION), (this.data = i);
        }
      }
      class _e {
        constructor(t, e, i, n, s) {
          (this.requiredPermissions = t), (this.serverName = i), (this.name = n), (this.contentScripts = e), (this.syncFromEnd = s);
        }
        urlWithSessionId(t) {
          return `${B}/join/${t}`;
        }
      }
      const be = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".netflix.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".netflix.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
        getFullscreenScript() {
          return '\n            (function() {\n                var sizingWrapper = document.getElementsByClassName("sizing-wrapper")[0];\n                    if (sizingWrapper) {\n                        sizingWrapper.requestFullscreen = function() {}\n                        document.getElementsByClassName(\'button-nfplayerFullscreen\')[0].onclick = function() {\n                            var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];\n                            fullScreenWrapper.webkitRequestFullScreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);\n                        }\n                    }\n            })();\n        ';
        }
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", u.NETFLIX, !1);
      Object.freeze(be);
      const je = be;
      const Be = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".hulu.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hulu.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", u.HULU, !1);
      Object.freeze(Be);
      const Ae = Be;
      const Qe = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".disneyplus.") && t.pathname.includes("/video");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".disneyplus.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", u.DISNEY_PLUS, !1);
      Object.freeze(Qe);
      const ke = Qe;
      const xe = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== D(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + D(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return D(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", u.HBO_MAX, !1);
      Object.freeze(xe);
      const Ie = xe;
      const Te = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.");
          })(t);
        }
        isBrowsing(t) {
          return !1;
        }
        getVideoId(t) {
          const e = t.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
          return null != e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", u.AMAZON, !1);
      Object.freeze(Te);
      const Se = Te;
      const Me = new (class extends _e {
        isBrowsing(t) {
          return t.hostname.includes(".crunchyroll.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".crunchyroll.");
          })(t);
        }
        getVideoId(t) {
          const e = t.pathname.match(/watch\/(.*)\//);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", u.CRUNCHYROLL, !1);
      Object.freeze(Me);
      const Pe = Me;
      const $e = new (class extends _e {
        isBrowsing(t) {
          return !(t.href.includes(".hotstar.") || !t.href.includes("watch?"));
        }
        isValidUrl(t) {
          return (function (t) {
            return !(t.hostname.includes("tv.youtube.com") && !t.pathname.includes("/watch")) && t.hostname.includes(".youtube.");
          })(t);
        }
        getVideoId(t) {
          if (t.href.includes("/watch") || t.href.includes("/shorts/")) {
            const e = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(t.href);
            return null != e && e.length > 3 && e[3] ? e[3] : void 0;
          }
          return "browsing";
        }
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", u.YOUTUBE, !1);
      Object.freeze($e);
      const Ve = $e;
      const Ge = new (class extends _e {
        isBrowsing(t) {
          return t.hostname.includes(".espn.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".espn.") && t.pathname.includes("/player");
          })(t);
        }
        getVideoId(t) {
          const e = t.pathname;
          return e.substring(e.lastIndexOf("/") + 1);
        }
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", u.ESPN, !1);
      Object.freeze(Ge);
      const Re = Ge;
      const Le = new (class extends _e {
        isBrowsing(t) {
          return t.hostname.includes(".paramountplus.");
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".paramountplus.") &&
              (t.pathname.includes("/video") || t.pathname.includes("/stream") || t.pathname.includes("/movie"))
            );
          })(t);
        }
        getVideoId(t) {
          var e;
          const i = null !== (e = t.pathname.match(/video\/([^/]+)/)) && void 0 !== e ? e : t.pathname.match(/stream\/([^/]+)/);
          return i && i.length > 1 ? i[1] : void 0;
        }
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", u.PARAMOUNT, !1);
      Object.freeze(Le);
      const Oe = Le;
      const Ue = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".hotstar.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hotstar.");
        }
        getVideoId(t) {
          const e = t.pathname.split("/");
          return e && e.length > 1 ? e[e.length - 2] : void 0;
        }
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", u.HOTSTAR, !1);
      Object.freeze(Ue);
      const Ne = Ue;
      const He = new (class extends _e {
        isBrowsing(t) {
          return t.hostname.includes(".peacocktv.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".peacocktv.") && t.pathname.includes("/watch") && t.pathname.includes("/playback");
          })(t);
        }
        getVideoId(t) {
          const e = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", u.PEACOCK, !1);
      Object.freeze(He);
      const We = He;
      const ze = new (class extends _e {
        isBrowsing(t) {
          return t.hostname.includes(".funimation.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".funimation.") && t.pathname.includes("/v/");
          })(t);
        }
        getVideoId(t) {
          return t.pathname.split("/v/")[1];
        }
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", u.FUNIMATION, !1);
      Object.freeze(ze);
      const Ke = ze;
      const Ye = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".play.max.");
        }
        getVideoId(t) {
          var e;
          const i = null === (e = t.pathname) || void 0 === e ? void 0 : e.match(/(watch\/)([a-zA-Z\-_0-9]+)\??/);
          return i ? i[2] : void 0;
        }
      })([], ["content_scripts/max/max_content_bundled.js"], "max", u.MAX, !1);
      Object.freeze(Ye);
      const Je = Ye;
      const qe = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".starplus.") && t.pathname.includes("/video");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".starplus.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", u.STAR_PLUS, !1);
      Object.freeze(qe);
      const Xe = qe;
      const Ze = new (class extends _e {
        isBrowsing(t) {
          return (
            t.href.includes("/details") ||
            t.href.includes("/search") ||
            (t.href.includes("live-tv") && ("" == t.href.split("live-tv")[1] || "/" == t.href.split("live-tv")[1])) ||
            (t.href.includes("on-demand") && ("" == t.href.split("on-demand")[1] || "/" == t.href.split("on-demand")[1]))
          );
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              console.log("Checking if PlutoTV Party"),
              t.hostname.includes("pluto.tv") && !t.pathname.includes("/details") && !t.pathname.includes("/search")
            );
          })(t);
        }
        getVideoId(t) {
          return t.href.split("pluto.tv/").pop();
        }
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", u.PLUTO_TV, !1);
      Object.freeze(Ze);
      const ti = Ze;
      const ei = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("tv.apple.com");
          })(t);
        }
        isBrowsing(t) {
          return !1;
        }
        getVideoId(t) {
          return t.toString().split("https://tv.apple.com/")[1];
        }
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", u.APPLE_TV, !1);
      Object.freeze(ei);
      const ii = ei;
      const ni = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes(".jiocinema."),
              i = t.pathname.includes("/watch") && t.pathname.includes("/movies/"),
              n = t.pathname.includes("/sports/"),
              s = t.pathname.includes("/tv-shows/"),
              u = t.pathname.includes("/news/");
            return e && (i || n || s || u);
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".jiocinema.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", u.JIO_CINEMA, !1);
      Object.freeze(ni);
      const si = ni;
      const ui = new (class extends _e {
        isBrowsing(t) {
          return t.hostname.includes("tubitv.com");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("tubitv.com") && ["tv-shows", "live", "movies"].some((e) => t.pathname.includes(e));
          })(t);
        }
        getVideoId(t) {
          return t.pathname;
        }
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", u.TUBI_TV, !1);
      Object.freeze(ui);
      const oi = ui;
      const ri = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes(".crave."),
              i = 5 === t.pathname.split("/").length;
            return e && i;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".crave.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", u.CRAVE, !1);
      Object.freeze(ri);
      const ai = ri;
      const ci = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes("mubi."),
              i = t.pathname.includes("player");
            return e && i;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("mubi.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", u.MUBI, !1);
      Object.freeze(ci);
      const Di = ci;
      const hi = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes("play.stan.com.au"),
              i = t.pathname.split("/");
            return e && 4 === i.length && "play" === i[3];
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".stan.com.au");
        }
        getVideoId(t) {
          return t.pathname.split("/")[2];
        }
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", u.STAN, !1);
      Object.freeze(hi);
      const di = hi;
      class li {
        constructor(t, e) {
          var i;
          (this.isBrowsing = !1), (this.id = e), this.videoId, (this.url = t);
          const n = [je, Ae, ke, Ie, Se, Ve, Pe, Re, Oe, Ne, We, Xe, Je, Ke, ii, ti, si, oi, Di, di, ai];
          for (const e of n) {
            if (e.isValidUrl(this.url)) {
              (this.streamingService = e), (this.serviceName = e.name), (this.videoId = e.getVideoId(t));
              break;
            }
            if (e.isBrowsing(this.url)) {
              (this.isBrowsing = !0), (this.streamingService = e), (this.serviceName = e.name);
              break;
            }
          }
          this.sessionIdFromUrl =
            null !==
              (i = (function (t, e, i) {
                const n = "?" + t.split("?")[i];
                if (void 0 === n) return;
                const s = e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                  u = new RegExp("[?|&]" + s + "=([^&]*)(&|$)").exec(n);
                return null === u || u.length < 2 ? void 0 : decodeURIComponent(u[1]);
              })(this.url.href, "npSessionId", 1)) && void 0 !== i
              ? i
              : void 0;
        }
        urlWithSessionId(t) {
          return this.streamingService ? this.streamingService.urlWithSessionId(t) : void 0;
        }
      }
      class pi extends Ee {
        constructor(t, e, i) {
          super(t, e, Wt.RE_INJECT), (this.data = i);
        }
      }
      var gi = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      var Fi,
        vi,
        yi = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                a(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                a(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            a((n = n.apply(t, e || [])).next());
          });
        };
      class mi extends class {
        constructor(t) {
          var e, i, n;
          (this.An = !1),
            (this.Qn = !1),
            (this.kn = !1),
            (this.xn = 0),
            (this.In = !1),
            (this.Tn = !1),
            (this.Sn = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.Mn() : this.Pn();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.$n = new li(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.Vn = t),
            this.Vn.setPageControls(this);
        }
        setChatApi(t) {
          (this.Vn = t), this.Vn.setPageControls(this);
        }
        Gn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.kn ? "Only I have control" : "Everyone has control"),
            this.kn
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        Rn() {
          this.Qn || ((this.kn = !this.kn), this.Gn());
        }
        setResetChatButton() {
          this.Vn.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Vn.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
              jQuery("#tp-chat-reset").removeClass("hidden"),
              jQuery("#tp-chat-gray").addClass("hidden"),
              jQuery("#tp-chat-button .tp-hover-image").addClass("hidden"),
              jQuery("#tp-chat-hidden").addClass("hidden"))
            : (jQuery("#tp-chat-button .tooltiptext").text("Open Chat"),
              jQuery("#tp-chat-reset").addClass("hidden"),
              jQuery("#tp-chat-gray").removeClass("hidden"),
              jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
              jQuery("#tp-chat-hidden").removeClass("hidden"));
        }
        Ln() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.Vn.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.xn} unread ${1 == this.xn ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.Vn.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.Vn.shouldChatBeVisible() ||
            this.Vn.isPartyWindowsActive() ||
            (this.xn++,
            this.Ln(),
            (this.In = !0),
            this.Mn(),
            h(1e3)().then(() => {
              this.In = !1;
            }));
        }
        teardown() {
          this.On(), this.Pn(), this.Un && clearInterval(this.Un);
        }
        Nn() {
          var t;
          return gi(this, void 0, void 0, function* () {
            if (this.Qn || this.Vn.inSession) return;
            if ((this.Hn(), (this.Qn = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new pi(E, m, { extensionTabData: this.$n });
              try {
                yield P.l(t);
              } catch (t) {
                return console.log(t), this.Wn(), this.Ce(t), this.zn(s), void (this.Qn = !1);
              }
            }
            console.log("Sending create");
            const e = this.Kn();
            try {
              const t = yield P.l(e);
              t.error ? (this.zn(t.error.message), this.Ce(t.error.message)) : ((this.Qn = !1), this.Yn(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.zn(s), this.Ce(t);
            }
            this.Wn(), (this.Qn = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        On() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        Ce(t) {
          const e = new y(f, m, { name: "error", action: { description: "an error has occured", reason: t } });
          P.l(e);
        }
        zn(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        Jn(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, J(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, J(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, J(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, J(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, J(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, J(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, J(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, J(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, J(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, J(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, J(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, J(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, J(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        Pn() {
          this.In || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Mn() {
          return gi(this, void 0, void 0, function* () {
            if (!this.Tn && (this.Sn || this.Vn.inSession)) {
              this.Tn = !0;
              try {
                yield this.addTpIcon(),
                  this.Vn.inSession ? this.enablePartyIcons() : this.On(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.Tn = !1;
              }
            }
          });
        }
        startEventListener() {
          this.Un = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.Un && clearInterval(this.Un);
        }
        qn() {
          return "100px";
        }
        addTpIcon() {
          return gi(this, void 0, void 0, function* () {
            if ((this.Sn || this.Vn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.Jn(Ce()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.Xn());
            }
          });
        }
        Xn() {
          jQuery("#tp-control-lock-button").click(this.Rn.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.qn()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.qn()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.qn()}`),
            jQuery("#tp-link-button").click(this.Zn.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.ts(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.es();
            });
        }
        es() {
          const t = new at(E, m, Vt);
          P.l(t), this.Pn();
        }
        Zn() {
          this.Vn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        ts() {
          return gi(this, void 0, void 0, function* () {
            (this.xn = 0),
              this.hideMessageIndicator(),
              this.Vn.isPartyWindowsActive()
                ? this.Vn.resetChatWindow(!0)
                : (this.Vn.shouldChatBeVisible(), yield this.Vn.setChatVisible(!this.Vn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.An && this.Mn();
        }
        setChatButtons() {
          this.Vn.inSession && this.Vn.getChatVisible() ? this.Yn() : this.ns(),
            this.Vn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        Yn() {
          return gi(this, void 0, void 0, function* () {
            this.Vn.inSession &&
              this.Vn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        ns() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        Kn() {
          return new we(E, m, this.ss());
        }
        ss() {
          return { createSettings: { controlLock: this.kn }, extensionTabData: this.$n, source: "pc" };
        }
        Hn() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        Wn() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        constructor() {
          super(...arguments), (this.isMenuVisibile = !0);
        }
        shouldMenuBeVisible() {
          return this.isMenuVisibile;
        }
        isOldCrunchyroll() {
          return null != document.querySelector("#vilos-player");
        }
        getControlsRoot() {
          return yi(this, void 0, void 0, function* () {
            yield d(this.isPlayerPage, 1 / 0)();
            const t = this.isOldCrunchyroll();
            return jQuery(t ? "#showmedia_video_player" : ".video-player-wrapper");
          });
        }
        isPlayerPage() {
          return !!window.location.pathname.includes("/watch") || null != document.querySelector("#vilos-player");
        }
        reloadListener() {
          this.stopEventListener(), this.startEventListener();
        }
      }
      class fi extends class {
        constructor(t, e, i, n) {
          (this.W = t),
            (this.ti = e),
            (this.Oi = i),
            (this.he = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.W), console.log("Resetting Chat Api for old controls")),
            (this.us = new te(this.W, this.he)),
            (this.Oe = new ge(this.ti, this.W, this.Oi)),
            (this.os = !1),
            (this.rs = !1),
            (this.ye = !1),
            (this.ni = new qt()),
            this.ni.addMessageListener(this.Oe),
            this.ni.addMessageListener(this.us),
            this.ni.addMessageListener(this),
            (this.cs = !1),
            this.Ds();
        }
        hs() {
          return Fe(this, void 0, void 0, function* () {
            yield this.he.addTpIcon(), this.he.startEventListener();
          });
        }
        loadBrowseButton() {
          return Fe(this, void 0, void 0, function* () {
            yield this.he.addTpIcon(), this.he.startEventListener();
          });
        }
        Ds() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.W.inSession, alertModal: Mt };
            this.ds(t);
          }),
            t.onMessage.addListener(() => {
              M("Got background script"), (this.cs = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == C) {
            if (t.type === Wt.IS_CONTENT_SCRIPT_READY) {
              if (this.os) {
                i({ ready: !0 });
              } else this.rs || ((this.rs = !0), this.ls().then(i));
              return !0;
            }
            if (t.type === Wt.GET_INIT_DATA) {
              return i(this.ps()), !0;
            }
            if (t.type === Wt.DISCONNECT && t.sender == f) {
              const t = new at(C, m, Vt);
              P.l(t), i();
            } else {
              if (t.type == c.TEARDOWN) {
                const e = t;
                return this.ds(e.data), i(), !0;
              }
              t.type === c.ON_NOTIF && this.gs();
            }
          }
          return !1;
        }
        gs() {
          console.log("Show Notification");
        }
        ds(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.W.getPartyUrl();
            Pt(t.alertModal, i);
          }
          this.he.teardown(), this.Oe.teardown(), this.us.teardown(), this.ni.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new y(C, m, s);
          P.l(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        Ce(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new y(C, m, { name: "error", action: { reason: t } });
          P.l(e);
        }
        Fs() {
          return Fe(this, void 0, void 0, function* () {
            return d(() => this.cs, 5e3)();
          });
        }
        ls() {
          return Fe(this, void 0, void 0, function* () {
            try {
              yield this.Fs();
              const t = yield this.vs();
              return this.hs(), t;
            } catch (t) {
              const e = { message: n, showButton: !1 };
              return this.Ce(n), { ready: !1, error: e };
            } finally {
              this.rs = !1;
            }
          });
        }
        vs() {
          return Fe(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.ti.waitVideoApiReadyAsync();
              const e = yield this.ys();
              e && e.error
                ? (M("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.os = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.ye = !0),
                  (this.os = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.Ce(e.message);
            }
            return { ready: this.os, error: t };
          });
        }
        ps() {
          return {
            inSession: this.W.inSession,
            isChatVisible: this.W.isPartyWindowsActive() ? this.W.getChatWindowVisible() : this.W.getChatVisible(),
            partyUrl: this.W.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.W.isPartyWindowsActive()
          };
        }
        ys() {
          return Fe(this, void 0, void 0, function* () {
            const t = yield this.fs();
            return P.l(t);
          });
        }
        fs() {
          return Fe(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.ti.getVideoDataAsync()).videoId };
            return new Jt(C, m, t);
          });
        }
      } {
        constructor() {
          const t = new G(),
            e = new Yt(t);
          let i;
          i = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new mi(e);
          super(e, t, new me(t, e, i), i), M("Crunchyroll Content Script");
        }
      }
      !(function () {
        var t;
        return !window.teleparty || !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected);
      })()
        ? (console.log(window, top),
          (null === (vi = window.teleparty) || void 0 === vi ? void 0 : vi.injectScriptLoaded) ||
            g(chrome.extension.getURL("content_scripts/crunchyroll/crunchyroll_injected_bundled.js")))
        : window == top
        ? (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
          (window.teleparty.contentScriptInjected = !0),
          new fi(),
          M("Initialized content script"))
        : (null === (Fi = window.teleparty) || void 0 === Fi ? void 0 : Fi.injectScriptLoaded) ||
          g(chrome.extension.getURL("content_scripts/crunchyroll/crunchyroll_injected_bundled.js"));
    })();
})();
