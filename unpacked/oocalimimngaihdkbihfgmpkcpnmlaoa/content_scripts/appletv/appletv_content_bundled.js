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
                  D = { fireOnAttributesModification: !1 };
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
                    e = u.mergeArrays(D, e);
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
              D = new (function () {
                var t = { fireOnAttributesModification: !1, onceOnly: !1, existing: !1 };
                function e(t, e, n) {
                  return (
                    !(!u.matchesSelector(t, e.selector) || (t.D === i && (t.D = s++), -1 != e.firedElems.indexOf(t.D))) &&
                    (e.firedElems.push(t.D), !0)
                  );
                }
                var n = (D = new r(
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
                  (D.bindEvent = function (e, i, s) {
                    void 0 === s ? ((s = i), (i = t)) : (i = u.mergeArrays(t, i));
                    var o = u.toElementsArray(this);
                    if (i.existing) {
                      for (var r = [], D = 0; D < o.length; D++)
                        for (var a = o[D].querySelectorAll(e), c = 0; c < a.length; c++) r.push({ callback: s, elem: a[c] });
                      if (i.onceOnly && r.length) return s.call(r[0].elem, r[0].elem);
                      setTimeout(u.callCallbacks, 1, r);
                    }
                    n.call(this, e, i, s);
                  }),
                  D
                );
              })(),
              a = new (function () {
                var t = {};
                function e(t, e) {
                  return u.matchesSelector(t, e.selector);
                }
                var i = (a = new r(
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
                  (a.bindEvent = function (e, n, s) {
                    void 0 === s ? ((s = n), (n = t)) : (n = u.mergeArrays(t, n)), i.call(this, e, n, s);
                  }),
                  a
                );
              })();
            e && d(e.fn),
              d(HTMLElement.prototype),
              d(NodeList.prototype),
              d(HTMLCollection.prototype),
              d(HTMLDocument.prototype),
              d(Window.prototype);
            var c = {};
            return h(D, c, "unbindAllArrive"), h(a, c, "unbindAllLeave"), c;
          }
          function h(t, e, i) {
            u.addMethod(e, i, t.unbindEvent),
              u.addMethod(e, i, t.unbindEventWithSelectorOrCallback),
              u.addMethod(e, i, t.unbindEventWithSelectorAndCallback);
          }
          function d(t) {
            (t.arrive = D.bindEvent), h(D, t, "unbindArrive"), (t.leave = a.bindEvent), h(a, t, "unbindLeave");
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
      var t, e, n, s;
      !(function (t) {
        (t.PAUSED = "paused"), (t.PLAYING = "playing");
      })(t || (t = {})),
        (function (t) {
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
        })(e || (e = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(n || (n = {})),
        (function (t) {
          (t.EPISODE = "episode"),
            (t.FEATURE = "feature"),
            (t.LIVE = "live"),
            (t.EXTRA = "extra"),
            (t.EVENT = "event"),
            (t.OTHER = "other");
        })(s || (s = {}));
      var u, o;
      function r(t) {
        return t.includes("urn:hbo:feature")
          ? s.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? s.EPISODE
          : t.includes("urn:hbo:extra")
          ? s.EXTRA
          : s.OTHER;
      }
      function D(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function a(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : D(i)().then(s);
            };
          return s();
        };
      }
      function c(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function h(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"), (t.PARTY_START = "party_start"), (t.PARTY_JOIN = "party_join"), (t.PARTY_END = "party_end");
      })(u || (u = {}));
      class d {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class l extends d {
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
      })(o || (o = {}));
      class g extends l {
        constructor(t, e, i) {
          super(t, e, o.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const p = "Service_Background",
        F = "Popup",
        v = "Content_Script",
        y = "Page_Controls";
      const m = chrome.runtime.id,
        f = "reactionContainerOpen",
        C = "https://sessions.teleparty.com",
        E = "https://redirect.teleparty.com",
        w = E,
        _ = `${E}/sidebar`,
        b = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        j = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        B = "recentlyUsedEmojiMap",
        A = "redirectDataMap",
        k = [
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
        Q =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var I = console.log.bind(window.console);
      const x = new (class {
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
                chrome.runtime.lastError && I(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
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
              chrome.runtime.sendMessage(m, t, (e) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
              });
            } catch (t) {
              s && clearTimeout(s), n(t);
            }
          });
        }
      })();
      var T = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      const S = "Failed to read chrome storage. Please refresh the page and try again",
        M = "Failed to connect to Script. Please refresh the page and try again",
        P = "An unexpected error occured. Please refresh the page and try again.";
      var $ = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      class R extends class {
        constructor() {
          (this.g = 0), (this.p = !1);
        }
        set hostOnly(t) {
          this.p = t;
        }
        get hostOnly() {
          return this.p;
        }
        get uiEventsHappening() {
          return this.g;
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
          const i = new g(v, p, { name: "video_error", action: { description: t, reason: e } });
          x.l(i);
        }
        doAdCheck() {
          return T(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(), (this.g = 0), (this.F = !0);
        }
        v() {
          const t = document.getElementById("video-player-title");
          if (t) return t.innerText;
        }
        m() {
          return document.querySelector(".playback-play__play");
        }
        C() {
          const t = document.querySelectorAll(".video-data-services-button");
          for (const e of t) {
            const t = JSON.parse(e.getAttribute("data-metrics-location") || "");
            if ("Play" == (null == t ? void 0 : t.actionType)) return e;
          }
        }
        setVideoEventListener(t) {
          this._ = t;
        }
        getVideoId() {
          var t, e;
          if (null === (t = this._) || void 0 === t ? void 0 : t.getCachedVideoId()) return this._.getCachedVideoId();
          {
            const t = document.getElementById("teleparty-appletv-id-container");
            if (t) {
              const i = t.getAttribute("data-canonical-id"),
                n = t.getAttribute("data-feature-reference-id");
              if (!i || !n) return;
              return `${null === (e = this._) || void 0 === e ? void 0 : e.featureReferenceIdToShowType(n)}/${i}`;
            }
          }
        }
        j() {
          const t = this.getVideoElement();
          if (t) return Math.floor(1e3 * t.currentTime);
        }
        B() {
          return document.querySelector(".skip-control.button--forward.duration-10");
        }
        A() {
          return document.querySelector(".skip-control.button--back.duration-10");
        }
        k() {
          const t = document.querySelector(".time.remaining"),
            e = this.j();
          if (!t || !e) return;
          const i = t.innerText.match(/-(\d+):(\d+)/);
          if (!i) return;
          return 1e3 * (60 * parseInt(i[1]) + parseInt(i[2])) + e;
        }
        I() {
          const t = document.querySelector(".scrim-footer__info-subtitle-text");
          if (!t) return {};
          const e = t.innerText.match(/S(\d+),\s*E(\d+)\s*·\s*(.+)/);
          return e ? { seasonNum: parseInt(e[1]), episodeNum: parseInt(e[2]), title: e[3] } : {};
        }
        T() {
          const t = this.getVideoElement();
          return null == t || "" == t.src ? n.NOT_READY : t.readyState < t.HAVE_FUTURE_DATA ? n.LOADING : t.paused ? n.PAUSED : n.PLAYING;
        }
        waitVideoApiReadyAsync() {
          return $(this, void 0, void 0, function* () {
            try {
              yield a(() => {
                const t = this.getVideoElement();
                if (!t) {
                  const t = document.querySelector(".version-picker-modal__list-item");
                  t && t.click();
                  const e = this.C();
                  e && !t && e.click();
                }
                return t instanceof Element && t.readyState > 0;
              }, 8e3)();
            } catch (t) {
              throw new Error("Failed to load video in time. Please refresh the page and try again.");
            }
          });
        }
        waitVideoDoneLoadingAsync() {
          return a(() => this.T() !== n.LOADING, 1e4)();
        }
        getStreamingServiceName() {
          return e.APPLE_TV;
        }
        setCurrentTime(t) {
          return $(this, void 0, void 0, function* () {
            const e = this.getVideoElement();
            e && (e.currentTime = t / 1e3), yield D(500)();
          });
        }
        getStateAsync() {
          return $(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              const i = this.T(),
                n = this.j();
              void 0 !== n ? t({ playbackState: i, playbackPositionMilliseconds: n }) : e();
            });
          });
        }
        getUpdateSessionDataAsync() {
          var e;
          return $(this, void 0, void 0, function* () {
            const i = this.j();
            if (void 0 === i) throw new Error();
            const s = this.getVideoElement(),
              u = s && !s.paused ? t.PLAYING : t.PAUSED,
              o = Date.now();
            null === (e = this._) || void 0 === e || e.getLastSeekRequestedTime();
            return { state: u, lastKnownTime: i, lastKnownTimeUpdatedAt: o, bufferingState: this.T() === n.LOADING };
          });
        }
        getVideoDataAsync() {
          var t, e;
          return $(this, void 0, void 0, function* () {
            const i = null !== (t = this.getVideoId()) && void 0 !== t ? t : "",
              n = null !== (e = this.v()) && void 0 !== e ? e : "",
              u = this.getVideoContent(i, n, window.location.href, s.EPISODE, this.I());
            return { videoId: i, videoTitle: n, videoDuration: this.k(), content: u, screen: this.getScreenSize(), videoState: this.T() };
          });
        }
        getVideoElement() {
          return document.getElementById("apple-music-video-player");
        }
        jumpToNextEpisode(t) {
          return $(this, void 0, void 0, function* () {
            this.g += 1;
            this.getVideoId() !== t.videoId && (window.location.href = `https://tv.apple.com/${t.videoId}`), (this.g -= 1);
          });
        }
        freeze(t) {
          return $(this, void 0, void 0, function* () {
            this.g += 1;
            try {
              yield this.pause(), yield D(t)(), yield this.play();
            } finally {
              this.g -= 1;
            }
          });
        }
        S() {
          var t, e;
          return $(this, void 0, void 0, function* () {
            this.F &&
              (yield D(100)(),
              null === (t = this.B()) || void 0 === t || t.click(),
              yield D(10)(),
              null === (e = this.A()) || void 0 === e || e.click(),
              yield D(50)(),
              (this.F = !1));
          });
        }
        pause() {
          var t;
          return $(this, void 0, void 0, function* () {
            const e = this.m();
            this.T() != n.PAUSED &&
              (e ? e.click() : null === (t = this.getVideoElement()) || void 0 === t || t.pause(),
              yield a(() => this.T() == n.PAUSED, 1e3)());
          });
        }
        play() {
          var t;
          return $(this, void 0, void 0, function* () {
            const e = this.m();
            this.T() != n.PLAYING &&
              (e
                ? (e.click(), yield D(50)(), this.T() != n.PLAYING && (yield this.S(), yield this.play()))
                : null === (t = this.getVideoElement()) || void 0 === t || t.play(),
              yield a(() => this.T() == n.PLAYING, 1e3)());
          });
        }
      }
      var G = i(7206),
        V = i.n(G);
      const O = [
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
        L = [
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
        U = [
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
        N = {
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
      function H(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                Q,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(Q, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(Q) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const W = {
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
      var z = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      const K = new (class {
        setItemsAsync(t) {
          return z(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(K);
      const Y = K;
      var J,
        q = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                D(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                D(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function D(t) {
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
            D((n = n.apply(t, e || [])).next());
          });
        };
      class X {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.M = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : j
          }),
            (this.P = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = H(t)),
            (this.M.userIcon = t),
            Y.setItemsAsync({ userIcon: t }),
            I("new user settings after set user icon: " + JSON.stringify(this.M));
        }
        saveUserNickname(t) {
          (this.M.userNickname = t),
            Y.setItemsAsync({ userNickname: t }),
            I("new user settings after set user nickname: " + JSON.stringify(this.M));
        }
        saveUserSettings(t) {
          return q(this, void 0, void 0, function* () {
            const e = H(t.userIcon);
            (this.M = t),
              (this.M.userIcon = e),
              yield Y.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              I("new user settings after save: " + JSON.stringify(this.M));
          });
        }
        get userSettings() {
          return this.M;
        }
        get permId() {
          return this.P;
        }
        get userIcon() {
          return this.M.userIcon;
        }
        get userNickname() {
          return this.M.userNickname;
        }
      }
      class Z extends d {
        constructor(t, e, i) {
          super(t, e, i), (this.$ = i);
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
      })(J || (J = {}));
      class tt extends Z {
        constructor(t, e, i) {
          super(t, e, J.SET_TYPING), (this.data = i);
        }
      }
      class et extends Z {
        constructor(t, e, i) {
          super(t, e, J.SEND_MESSAGE), (this.data = i);
        }
      }
      class it extends Z {
        constructor(t, e, i) {
          super(t, e, J.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class nt extends l {
        constructor(t, e, i) {
          super(t, e, o.TEARDOWN), (this.data = i);
        }
      }
      class st extends Z {
        constructor(t, e, i) {
          super(t, e, J.SEND_REACTION), (this.data = i);
        }
      }
      class ut extends Z {
        constructor(t, e, i) {
          super(t, e, J.SEND_GIF), (this.data = i);
        }
      }
      class ot {
        constructor() {
          this.resetTasks(), (this.R = []), (this.G = 0), (this.V = Promise.resolve()), (this.O = !0);
        }
        createInstance() {
          return new ot();
        }
        pushTask(t, e) {
          if (!this.O) return;
          const i = { action: t, name: e };
          0 === this.G && this.resetTasks(),
            (this.G = this.R.push(i)),
            (this.V = this.V.then(() => {
              if (this.R.includes(i) && this.O)
                return this.L(i)().then(() => {
                  this.R.shift(), (this.G -= 1);
                });
            }));
        }
        disable() {
          (this.O = !1), this.resetTasks();
        }
        resetTasks() {
          (this.V = Promise.resolve()), (this.R = []), (this.G = 0);
        }
        L(t) {
          return function () {
            return t.action().catch(() => {});
          };
        }
        get tasksInFlight() {
          return this.G;
        }
        hasTaskInQueue(t) {
          return this.R.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.R),
            (this.R = this.R.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.G = this.R.length),
            console.log(this.R);
        }
      }
      const rt = new ot();
      var Dt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      const at = new (class {
        getItemsAsync(t) {
          return Dt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? i(new Error(S)) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return Dt(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? e(new Error(S)) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(at);
      const ct = at;
      var ht,
        dt = new Uint8Array(16);
      function lt() {
        if (
          !ht &&
          !(ht =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return ht(dt);
      }
      const gt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const pt = function (t) {
        return "string" == typeof t && gt.test(t);
      };
      for (var Ft = [], vt = 0; vt < 256; ++vt) Ft.push((vt + 256).toString(16).substr(1));
      const yt = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            Ft[t[e + 0]] +
            Ft[t[e + 1]] +
            Ft[t[e + 2]] +
            Ft[t[e + 3]] +
            "-" +
            Ft[t[e + 4]] +
            Ft[t[e + 5]] +
            "-" +
            Ft[t[e + 6]] +
            Ft[t[e + 7]] +
            "-" +
            Ft[t[e + 8]] +
            Ft[t[e + 9]] +
            "-" +
            Ft[t[e + 10]] +
            Ft[t[e + 11]] +
            Ft[t[e + 12]] +
            Ft[t[e + 13]] +
            Ft[t[e + 14]] +
            Ft[t[e + 15]]
          ).toLowerCase();
        if (!pt(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const mt = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || lt)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return yt(n);
      };
      var ft;
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
      })(ft || (ft = {}));
      const Ct = chrome.extension.getURL("img/x-circle.svg"),
        Et = "with-chat";
      var wt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      const _t = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? U.includes(t.split("?newIconUrl=")[1]) && O.includes(t.split("?newIconUrl=")[0]) : U.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return L[Math.floor(Math.random() * L.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        U(t) {
          return wt(this, void 0, void 0, function* () {
            try {
              yield Y.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return wt(this, void 0, void 0, function* () {
            const t = yield ct.getAllItemsAsync(),
              e = _t.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.U(e), e;
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
      Object.freeze(_t);
      const bt = _t,
        jt = 1e3,
        Bt = 72e5,
        At = 12e4,
        kt = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Qt = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        It = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        xt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function Tt(t, e) {
        St();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${Ct}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${Ct}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            St();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              St(), (window.location.href = e);
            });
      }
      function St() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const Mt = { showAlert: !1 },
        Pt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var $t;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })($t || ($t = {}));
      var Rt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      class Gt {
        constructor(t) {
          (this.N = this.H.bind(this)),
            (this.W = this.resetIdleTimer.bind(this)),
            (this.K = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.Y(t.data);
            }),
            (this.J = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.q = (t) => {
              this.X.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new g(v, p, n);
              x.l(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.X.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.X.toggleGIFs();
            }),
            (this.Y = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new g(v, p, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              x.l(n);
              const s = new g(v, p, { eventType: `emoji-click-${i}`, sessionId: this.X.getSessionId() });
              x.l(s), rt.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.X.focusChat(), this.Z(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.tt(), this.X.onInputChange();
            }),
            (this.X = t);
        }
        et() {
          I("Idle Warning called"), Tt(Qt);
          const t = new g(v, p, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          x.l(t);
          const e = new g(v, p, { eventType: "idle-warn-2hr", sessionId: this.X.getSessionId() });
          x.l(e), (this.it = setTimeout(this.nt.bind(this), At));
        }
        nt() {
          I("Idle kick called");
          const t = new g(v, p, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new nt(v, p, Pt);
          x.l(t), x.l(e);
        }
        resetIdleTimer() {
          this.st && clearTimeout(this.st), this.it && (St(), clearTimeout(this.it)), (this.st = setTimeout(this.et.bind(this), Bt));
        }
        ut() {
          (this.st = setTimeout(this.et.bind(this), Bt)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.W();
            }),
            (window.onfocus = () => this.W()),
            (window.onmousedown = () => this.W()),
            (window.ontouchstart = () => this.W()),
            (window.onkeydown = () => this.W());
        }
        ot() {
          this.st && clearTimeout(this.st),
            this.it && clearTimeout(this.it),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          I("Listening for chat events"), this.ut(), this.rt(), this.initWindowListeners();
        }
        stopListening() {
          this.Dt(), this.ot(), this.ct();
        }
        H() {
          this.X.clearUnreadCount();
        }
        ht(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.X.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.N),
            window.addEventListener("message", this.K),
            document.addEventListener("dragstart", this.dt.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.X.onFullScreen),
            document.addEventListener("fullscreenchange", this.X.onFullScreen),
            document.addEventListener("keydown", this.J, !0),
            document.addEventListener("emoji-click", this.Y),
            document.addEventListener("click", this.q);
        }
        rt() {
          jQuery(window).on("focus", this.N),
            jQuery("#party-tab").on("click", this.X.togglePartyTab.bind(this.X)),
            jQuery("#friends-tab").on("click", this.X.toggleFriendsTab.bind(this.X)),
            jQuery(".user-icon").on("click", this.X.toggleLargeUserIconButton.bind(this.X)),
            jQuery("#user-icon").on("click", this.X.toggleIconContainer.bind(this.X)),
            jQuery("#link-icon").on("click", this.X.linkIconListener.bind(this.X)),
            jQuery("#reset-icon").on("click", this.X.resetIconListener.bind(this.X)),
            jQuery(".image-button").on("click", this.X.userIconSelectorListener.bind(this.X)),
            jQuery("#chat-input-container").on("keydown", this.X.onChatKeyDown.bind(this.X)),
            jQuery("#nickname-edit").on("keydown", this.X.onChatKeyDown.bind(this.X)),
            jQuery("#chat-input").on("keypress", this.X.onChatKeyPress.bind(this.X)),
            jQuery("#chat-input").on("input", this.X.onInputChange.bind(this.X)),
            jQuery("#gif-search").on("keyup", this.X.onGifSearch.bind(this.X)),
            jQuery("#saveChanges").on("click", this.X.saveChangesListener.bind(this.X)),
            jQuery("#cancelNickname").on("click", this.X.cancelNicknameListener.bind(this.X)),
            jQuery("#chat-wrapper").on("mouseup", this.X.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.X.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.X.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.X.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.X.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.X.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.X.onChatKeyUp.bind(this.X)),
            jQuery("#emoji-picker-btn").on("click", this.X.addEmojiPicker.bind(this.X)),
            jQuery("#gif-btn").on("click", this.X.addGifPicker.bind(this.X)),
            jQuery(".gif-img").on("click", this.X.clickGif.bind(this.X)),
            jQuery(".gif-results").on("click", "video, img", this.X.clickGif.bind(this.X)),
            jQuery("#category-container").on("click", "video", this.X.clickGif.bind(this.X)),
            jQuery("#gif-input-back").on("click", this.X.resetGif.bind(this.X)),
            jQuery("#reaction-btn").on("click", this.X.addReactionTab.bind(this.X)),
            jQuery("#chat-input-container").on("click", this.lt.bind(this)),
            jQuery("#chat-input").on("input", this.tt.bind(this)),
            jQuery("#chat-input").on("drop", this.gt.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.X.onScrollToBottom.bind(this.X)),
            this.Ft(),
            document.addEventListener("keydown", this.J.bind(this), !0),
            this.X.initCustomListeners();
        }
        Ft() {
          jQuery("#tp-heart-button").on("click", () => {
            this.X.onReactionClicked($t.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.X.onReactionClicked($t.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.X.onReactionClicked($t.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.X.onReactionClicked($t.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.X.onReactionClicked($t.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.X.onReactionClicked($t.FIRE);
            });
        }
        tt() {
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
        gt(t) {
          t.preventDefault();
        }
        dt(t) {
          t.preventDefault();
        }
        lt(t) {
          t.target === jQuery("#chat-input")[0] && this.X.focusChat();
        }
        Z(t) {
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
        vt(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        yt(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.vt(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Rt(this, void 0, void 0, function* () {
            const i = yield ct.getItemsAsync([B]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : k;
            this.yt(n) || (n = k),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield Y.setItemsAsync({ [B]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        ct() {
          jQuery(window).off("focus", this.N),
            document.removeEventListener("emoji-click", this.Y),
            document.removeEventListener("keydown", this.J, !0),
            document.removeEventListener("click", this.q),
            window.removeEventListener("message", this.K),
            document.removeEventListener("webkitfullscreenchange", this.X.onFullScreen),
            document.removeEventListener("fullscreenchange", this.X.onFullScreen);
        }
        Dt() {
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
      class Vt {
        constructor(t) {
          (this.X = t),
            (this.ft = []),
            (this.Ct = 0),
            (this.Et = document.title),
            (this.wt = 0),
            (this._t = new Map()),
            (this.bt = new Map()),
            (this.jt = []),
            (this.Bt = []),
            (this.At = ""),
            I("Message Controller");
        }
        kt(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${H(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${H(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        Qt(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.X.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${H(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${H(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${H(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        It(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${H(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${H(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        xt(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.X.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${H(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${H(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${H(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        Tt(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.P = e.permId), (u.St = i), (u.Mt = n), (u.Pt = e), (u.$t = s);
        }
        reloadMessages() {
          this.X.queueMessageForFrame(ft.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.ft));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.ft = t;
        }
        Rt(t, e) {
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
            (void 0 === i && (i = this.ft.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this._t.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.ft.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Rt(n, t);
          this.ft.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.X.queueMessageForFrame(ft.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const D = "" === r ? this.It(o, u, s) : this.kt(o, r, u, s);
          this.Tt(D, u, o, r, s), this.scrollToBottom(), this.Gt();
        }
        addGif(t, e) {
          void 0 === e && (e = this.ft.length);
          const i = this.ft.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Rt(i, t);
          this.ft.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.X.queueMessageForFrame(ft.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.xt(s, t, n) : this.Qt(s, u, t, n);
          (o[0].Vt = !0), this.Tt(o, t, s, u, n), D(100)().then(this.scrollToBottom.bind(this)), this.Gt();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.Ct > 0 && ((this.Ct = 0), (document.title = this.Et));
        }
        Gt() {
          (this.Ct += 1), (this.wt += 1), document.hasFocus() || (document.title = "(" + String(this.Ct) + ") " + this.Et);
        }
        getUserIconURL(t, e = "") {
          if (!this._t.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.Ot();
            this._t.set(t, n), this.Bt.push(n);
          }
          return this._t.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return U.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : O.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.bt.has(t) || (this.bt.set(t, e), this.jt.push(e)), H(this.bt.get(t));
        }
        Ot() {
          let t = chrome.runtime.getURL("img/icons/General/" + O[Math.floor(Math.random() * O.length)]);
          if (this.Bt.length < N.General.length)
            for (; this.Bt.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + O[Math.floor(Math.random() * O.length)]);
          return t;
        }
        Lt(t) {
          const e = t[0],
            i = e.P;
          let n = e.St;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.St = n));
          const s = e.Mt;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.Pt,
                o = e.$t;
              let r;
              if (
                (e.Vt && s && "gifObject" in s && o && (r = "" == u ? this.xt(n, s, o) : this.Qt(n, u, s, o)),
                !e.Vt && s && "isSystemMessage" in s && o && (r = "" == u ? this.It(n, s, o) : this.kt(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.P = i), (e.St = n), (e.Mt = u), (e.Pt = s), (e.$t = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.At = t), this.X.queueMessageForFrame(ft.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.At), jQuery(".user-icon img").attr("src", this.At);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.Lt(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.Lt(jQuery(e[t]));
          this.X.isChatFrameActive() && this.reloadMessages();
        }
        Ut(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              U.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : O.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              U.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : O.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = N.General.filter((t) => !this.Bt.includes(t));
            0 === t.length && (t = N.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Ut(e);
          this._t.set(t, i), this.Bt.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = H(e);
          this.bt.set(t, i), this.jt.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Ut(e);
          this._t.set(t, n), this.Bt.push(n), this.bt.set(t, i), this.jt.push(i), this.renderSidebar();
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
          const t = new g(v, p, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          x.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.X.getSessionId() },
            i = new g(v, p, e);
          x.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new g(v, p, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              x.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.X.getSessionId() },
                i = new g(v, p, e);
              x.l(i);
            });
        }
      }
      class Ot {
        constructor(t) {
          (this.Nt = !1), (this.Ht = !1), (this.Wt = !1), (this.X = t);
        }
        setupPresenceIndicator() {
          (this.Nt = !1), (this.Ht = !1), (this.Wt = !1), this.zt();
        }
        Kt() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Nt = t), this.zt();
        }
        setBufferingPresenceVisible(t) {
          (this.Ht = t), this.zt();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Wt = t), this.zt();
        }
        getWatchingAdsVisible() {
          return this.Wt;
        }
        Yt() {
          return this.Wt
            ? "People are watching ads..."
            : this.Nt && this.Ht
            ? "People are typing and buffering..."
            : this.Nt
            ? "People are typing..."
            : this.Ht
            ? "People are buffering..."
            : "";
        }
        zt() {
          const t = this.Yt();
          this.Kt().text(t), this.X.queueMessageForFrame(ft.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var Lt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      var Ut,
        Nt,
        Ht = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                D(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                D(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function D(t) {
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
            D((n = n.apply(t, e || [])).next());
          });
        };
      class Wt extends class {
        constructor() {
          (this.Jt = !1),
            (this.qt = 1),
            (this.Xt = ""),
            (this.Zt = ""),
            (this.te = "0"),
            (this.ee = ""),
            (this.ie = !0),
            (this.ne = !1),
            (this.se = 0),
            (this.ue = []),
            (this.oe = new ot()),
            (this.re = !1),
            (this.De = void 0),
            (this.ae = !0),
            (this.ce = this.he()),
            (this.de = this.he()),
            (this.le = !1),
            (this.ge = !1),
            (this.pe = []),
            (this.logEvent = (t) => {
              const e = new g(v, p, t);
              x.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              ct.getItemsAsync([f]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.Fe) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.oe.pushTask(() => Y.setItemsAsync({ [f]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                null != document.fullscreenElement
                  ? (this.logEvent({ name: "fullscreen_enter" }),
                    this.he() && ((this.ce = !1), this.setChatVisible(this.shouldChatBeVisible())))
                  : (this.logEvent({ name: "fullscreen_exit" }),
                    this.he() && ((this.ce = this.he()), jQuery("#chat-wrapper").hide(), this.setChatVisible(!1, !1), this.removeChat())),
                null === (t = this.Fe) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.ve = !1),
            (this.ye = new Gt(this)),
            (this.fe = new Ot(this)),
            (this.Ce = new Vt(this)),
            (this.Ee = void 0),
            (this.we = void 0),
            (this._e = !1);
        }
        setPageControls(t) {
          this.Fe = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.Fe) || void 0 === t || t.enablePartyIcons(), null === (e = this.Fe) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return Lt(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.ie = t), t && !this.be() && this.reloadChat();
          });
        }
        je(t, e) {
          const i = new g(v, p, { name: "error", action: { reason: e, description: t } });
          x.l(i);
        }
        getChatWindowVisible() {
          return this.de;
        }
        setChatWindowActive(t) {
          this.ce = t;
        }
        isChatFrameActive() {
          return this.ae;
        }
        isPartyWindowsActive() {
          return this.ce;
        }
        shouldChatBeVisible() {
          return this.ie;
        }
        incrementEmojiCount() {
          this.se++;
        }
        resetEmojiCount() {
          this.se = 0;
        }
        getEmojiCount() {
          return this.se;
        }
        setChatFrameReady(t) {
          this.re && this.Be(), (this.re = !0), (this.Ae = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.oe.pushTask(() =>
            Lt(this, void 0, void 0, function* () {
              this.ke(t, e);
            })
          );
        }
        ke(t, e) {
          return Lt(this, void 0, void 0, function* () {
            const i = this.Ae,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: v };
            x.l(n);
          });
        }
        Qe() {
          var t;
          return Lt(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield a(() => this.re && null != this.Ae, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.De && this.Ie(this.De),
                null === (t = this.Fe) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.je("Sidewindow didn't load in time", t);
            }
          });
        }
        he() {
          return !1;
        }
        xe() {
          return Lt(this, void 0, void 0, function* () {
            yield x.l(new l(v, p, o.LOAD_CHAT_WINDOW)), console.log(this.Ae);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return Lt(this, void 0, void 0, function* () {
            yield x.l(new l(v, p, o.RESET_CHAT_WINDOW)),
              console.log(this.Ae),
              (this.de = !0),
              (this.ie = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.le && t && (this.resetIconListener(), null === (e = this.Fe) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return Lt(this, void 0, void 0, function* () {
            yield x.l(new l(v, p, o.HIDE_CHAT_WINDOW)), (this.de = !1), (this.ie = !1);
          });
        }
        Te() {
          return Lt(this, void 0, void 0, function* () {
            this.xe(), this.oe.pushTask(this.Qe.bind(this));
          });
        }
        loadInitData(t) {
          this.De = t;
        }
        Ie(t) {
          var e;
          return Lt(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = N), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield bt.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(ft.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(ft.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(ft.SET_USER_LIST, this.pe),
              this.queueMessageForFrame(ft.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Se) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        Be() {
          return Lt(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.De && (yield this.Ie(this.De)), this.Se)) {
              const t = this.Ce.getUserIconURL(this.Se.permId, this.Se.userIcon);
              this.queueMessageForFrame(ft.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(ft.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Me() {
          return Lt(this, void 0, void 0, function* () {
            this.Pe(),
              yield D(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.$e(),
              this.fe.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        Re(t) {
          this.ye.initWindowListeners(), this.he() && this.Te(), this.oe.pushTask(this.Qe.bind(this)), St(), (this.Se = new X(t));
          const e = this.Ce.getUserIconURL(this.Se.permId, this.Se.userIcon);
          this.Ce.setUserIconUrl(e),
            this.Ce.renderSidebar(),
            this.be() && this.removeChat(),
            (this.ve = !0),
            this.Ge(),
            this.he()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Me(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return Lt(this, void 0, void 0, function* () {
            "true" !== (yield ct.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.Ce.addYoutubePromo(), Y.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.De = t;
          const e = Object.assign({}, t);
          (e.iconMap = N),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(ft.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return Lt(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.be() ||
                this.isPartyWindowsActive() ||
                (this.Pe(),
                yield D(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.ie),
                this.addIconSelector(),
                this.Ve(),
                this.$e(),
                this.fe.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new nt(v, p, t);
          x.l(e);
        }
        be() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.Ce.clearUnreadCount();
        }
        Oe() {
          return Lt(this, void 0, void 0, function* () {
            try {
              yield a(() => null !== document.querySelector("#chat-history") || this.ce || (this.re && this.ae), 1e4)();
            } catch (t) {
              this.je("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.oe.pushTask(() =>
            Lt(this, void 0, void 0, function* () {
              yield this.Oe(), this.Ce.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.oe.pushTask(() =>
            Lt(this, void 0, void 0, function* () {
              yield this.Oe(), this.Ce.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.Ce.reloadMessages();
        }
        scrollToBottom() {
          this.Ce.scrollToBottom();
        }
        addReviewMessage() {
          this.Ce.addReviewMessage(), (this._e = !0);
        }
        get showingReveiwMessage() {
          return this._e;
        }
        set shouldReturnToVideo(t) {
          this.le = t;
        }
        onBufferingMessage(t) {
          this.oe.pushTask(() =>
            Lt(this, void 0, void 0, function* () {
              yield this.Oe(), this.fe.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.oe.pushTask(() =>
            Lt(this, void 0, void 0, function* () {
              yield this.Oe(), this.fe.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.oe.pushTask(() =>
            Lt(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Oe(), this.fe.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.fe.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Se) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Le(this.Ue(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.Ce.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Se)) {
            const t = this.Ce.getUserIconURL(this.Se.permId, this.Se.userIcon);
            this.Ce.setUserIconUrl(t), this.Ce.renderSidebar();
          }
        }
        $e() {
          a(() => this.be(), 1e4)().then(() => {
            this.ye.startListening();
          });
        }
        Ve() {
          this.ye.stopListening(), this.Ne && (clearTimeout(this.Ne), (this.ne = !1));
        }
        teardown() {
          (this.ve = !1),
            (this.Zt = void 0),
            (this.He = void 0),
            this.Ve(),
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
            this.oe.pushTask(() => Y.setItemsAsync({ [f]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return Lt(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.Ce.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(ft.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new g(v, p, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          x.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new g(v, p, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          x.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new g(v, p, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          x.l(e), this.toggleReactions();
        }
        Ge() {
          if (
            (I("Set Chat Html called"),
            (this.We = V()),
            (this.We = this.We.replace(/{EXTENSION_LOGO}/g, H(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Se)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          this.We = this.We.replace(/{CHAT_URL}/g, `${_}?t=${Date.now()}`);
          for (const t of b) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.We = this.We.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.We = this.We.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.We = this.We.replace(/{USER_NICKNAME}/g, this.Se.userNickname ? H(this.Se.userNickname) : "Add a nickname")),
            (this.We = this.We.replace(/{USER_ICON}/g, this.Ce.getUserIconURL(this.Se.permId, this.Se.userIcon))),
            (this.We = this.We.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.We = this.We.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.We = this.We.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.We = this.We.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.We = this.We.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.We = this.We.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.We = this.We.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.We = this.We.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.We = this.We.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.ge ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.ne && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.Se) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.Se) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.ge = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.ge = !1);
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
          if (null === (t = this.ze) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.ze.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.Xt = t;
        }
        setMessageForwarder(t) {
          this.ze = t;
        }
        setSessionId(t) {
          this.Zt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(ft.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(ft.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.Ce.getUserIconURL(t.permId, e.userIcon),
                n = this.Ce.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.pe = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(ft.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.He = t;
        }
        getSessionCreated() {
          return this.He;
        }
        getSessionId() {
          return this.Zt;
        }
        getPartyUrl() {
          return this.Xt;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (I("userIconSelector button clicked: " + e),
            this.Se &&
              (this.Se.saveUserIcon(e),
              this.queueMessageForFrame(ft.UPDATE_SETTINGS, { userSettings: this.Se.userSettings }),
              this.Le(this.Ue(this.Se.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Le(t, e) {
          x.l(t).then(e);
        }
        Ke(t) {
          return new st(v, p, { reactionType: t });
        }
        Ye(t) {
          return new ut(v, p, { gifObject: t });
        }
        Je(t) {
          return new et(v, p, { body: t });
        }
        qe(t) {
          return new tt(v, p, { typing: t });
        }
        Ue(t) {
          return new it(v, p, { userSettings: t });
        }
        Xe(t) {
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
              u = this.Xe(e),
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
          console.log(t), this.Le(this.Ke(t));
          const e = new g(v, p, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          x.l(e);
          const i = new g(v, p, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          x.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.ye.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.je("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.ue.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Le(this.Ye(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new g(v, p, e);
              x.l(i);
              const n = new g(v, p, { eventType: "gif-share", sessionId: this.getSessionId() });
              x.l(n);
            }),
              this.toggleGIFs();
          }
        }
        Ze(t) {
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
        ti(t) {
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
            this.ue.push(...t.results),
            (this.te = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.Ze(t) : this.ti(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.qt < 6 && this.ei(),
            setTimeout(() => {
              this.Jt = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return Lt(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Jt) t.preventDefault();
            else if ("0" !== this.te && e && this.qt < 6) {
              (this.qt += 1), (this.Jt = !0), t.preventDefault();
              const e = yield fetch(this.ee + `&pos=${this.te}`),
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
        ii() {
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
        ei() {
          return Lt(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.ii()), jQuery("#gif-results-right")[0].append(...this.ii());
          });
        }
        logShare(t, e) {
          return Lt(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${C}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return Lt(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.qt = 1),
              (this.Jt = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.ue = []),
              this.ei();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.ee = `${C}/${u}${s}`);
            const o = yield fetch(`${C}/${u}${s}`),
              r = yield o.json();
            if (r.results && r.results.length > 0) this.loadGIFs(r);
            else if (!t) {
              const t = yield fetch(`${C}/trending_gifs?${s}`);
              this.ee = `${C}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.we && clearTimeout(this.we), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.we = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        ni(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.Ee ? this.Le(this.qe(!0)) : clearTimeout(this.Ee),
              (this.Ee = setTimeout(() => {
                (this.Ee = void 0), this.Le(this.qe(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.ni(i)) {
              void 0 !== this.Ee && (clearTimeout(this.Ee), (this.Ee = void 0), this.Le(this.qe(!1))),
                e.prop("contenteditable", !1),
                this.Le(this.Je(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return mt();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new g(v, p, t);
              x.l(n);
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
          const e = t.replace(Q, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(Q) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          I("saveChanges button clicked: " + e),
            e !== (null === (t = this.Se) || void 0 === t ? void 0 : t.userNickname) &&
              this.Se &&
              (this.Se.saveUserNickname(e),
              this.queueMessageForFrame(ft.UPDATE_SETTINGS, { userSettings: this.Se.userSettings }),
              this.Le(this.Ue(this.Se.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.ve;
        }
        addIconSelector() {
          Object.keys(N).forEach((t) => {
            if (W[t]()) {
              const e = N[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.si(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(Q) || []).length,
            i = t.replace(Q, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        si(t, e, i) {
          jQuery(
            `\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL(
              "img/icons/" + t
            )}' data-tp-id="chat_container-new_icon_selection-${i}">\n            </a>\n        `
          )
            .appendTo(e)
            .data("icon", t);
        }
      } {
        constructor() {
          super();
        }
        getReactionContainer() {
          return jQuery(Wt.MAIN_WRAPPER_SELECTOR);
        }
        getChatVisible() {
          return jQuery(Wt.MAIN_WRAPPER_SELECTOR).hasClass(Et);
        }
        removeChat() {
          super.removeChat(), jQuery(Wt.MAIN_WRAPPER_SELECTOR).removeClass(Et);
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Ht(this, void 0, void 0, function* () {
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return;
            }
            t
              ? (jQuery("#chat-wrapper").show(),
                jQuery(Wt.MAIN_WRAPPER_SELECTOR).addClass(Et),
                document.hasFocus() || this.clearUnreadCount())
              : (jQuery("#chat-wrapper").hide(), jQuery(Wt.MAIN_WRAPPER_SELECTOR).removeClass(Et));
          });
        }
        getVideoTitle() {
          return Ht(this, void 0, void 0, function* () {
            const t = document.querySelector(".scrim-footer__info-subtitle-text");
            if (t) return t.innerText;
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
        Pe() {
          this.We &&
            jQuery(Wt.MAIN_WRAPPER_SELECTOR).after(
              (function (t, e = "") {
                return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                  "css/chat.css"
                )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
              })(this.We)
            );
        }
      }
      (Wt.MAIN_WRAPPER_SELECTOR = ".video-player "),
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
        })(Ut || (Ut = {}));
      class zt extends Z {
        constructor(t, e, i) {
          super(t, e, J.GET_SESSION_DATA), (this.data = i);
        }
      }
      class Kt {
        constructor() {
          (this.ui = this.oi.bind(this)), (this.ri = []), this.Di();
        }
        addMessageListener(t) {
          this.ri.push(t);
        }
        removeMessageListener(t) {
          this.ri = this.ri.filter((t) => {});
        }
        Di() {
          x.addListener(this.ui);
        }
        teardown() {
          (this.ri = []), x.removeListener(this.ui);
        }
        oi(t, e, i) {
          if (!this.ai(t)) return !1;
          return !!this.ci(t, e, i) || (i({}), !1);
        }
        ai(t) {
          return t.target === v;
        }
        ci(t, e, i) {
          let n = !1;
          return (
            this.ri.forEach((s) => {
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
      })(Nt || (Nt = {}));
      var Yt,
        Jt = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                D(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                D(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function D(t) {
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
            D((n = n.apply(t, e || [])).next());
          });
        };
      class qt {
        constructor(t, e) {
          (this.X = t), (this.Fe = e), I("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case o.LOAD_SESSION: {
              const e = t;
              return this.hi(e.data), !1;
            }
            case Nt.ON_MESSAGE: {
              const e = t;
              return this.K(e), this.Fe.onChatMessage(), !1;
            }
            case Nt.ON_BUFFER: {
              const e = t;
              return this.di(e), !1;
            }
            case Nt.ON_TYPING: {
              const e = t;
              return this.li(e), !1;
            }
            case Nt.ON_WATCHING_ADS: {
              const e = t;
              return this.gi(e), !1;
            }
            case Nt.UPDATE_SETTINGS: {
              const e = t;
              return this.pi(e), !1;
            }
            case Nt.ON_REACTION: {
              const e = t;
              return this.Fi(e), !1;
            }
            case Nt.ON_GIF: {
              const e = t;
              return this.vi(e), !1;
            }
            case Nt.USER_LIST: {
              const e = t;
              return this.yi(e), !1;
            }
            case Nt.ON_WEB_RTC:
              return this.X.onWebRTC(t.data), !0;
            case Ut.SET_CHAT_VISIBLE: {
              const e = t;
              return this.mi(e.data), i(), !1;
            }
            case ft.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.X.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case ft.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case ft.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.X.doUpdateSettings(e), i(), !0;
            }
            case ft.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case ft.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.X.setReactionsActive(e), i(), !0;
            }
            case ft.RESET_VIEW:
              return this.X.resetChatWindow(!0), i(), !0;
            case ft.ON_FOCUS:
              return this.X.onSidebarFocus(), i(), !0;
            case ft.PREVIEW_REACTION: {
              const e = t.data;
              return this.X.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.X.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.X.teardown();
        }
        mi(t) {
          return Jt(this, void 0, void 0, function* () {
            this.X.isPartyWindowsActive()
              ? t.visible
                ? yield this.X.resetChatWindow()
                : yield this.X.hideChatWindow()
              : (yield this.X.setChatVisible(t.visible), this.X.fixPageControls());
          });
        }
        hi(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${w}/join/${e}`;
          if (
            (this.X.loadInitData(t),
            this.X.setPartyUrl(i),
            this.X.setSessionId(e),
            this.X.Re(t.storageData),
            this.Fe.onInitChat(),
            this.X.setSessionCreated(t.isCreate),
            this.X.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.X.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.X.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.X.addGif(e) : this.X.addMessage(e, !0);
        }
        K(t) {
          this.X.addMessage(t.data);
        }
        Fi(t) {
          this.X.showReaction(t.data);
        }
        vi(t) {
          this.X.addGif(t.data);
        }
        di(t) {
          this.X.onBufferingMessage(t.data);
        }
        li(t) {
          this.X.onTypingMessage(t.data);
        }
        gi(t) {
          this.X.onWatchingAdsMessage(t.data);
        }
        pi(t) {
          this.X.onUpdateSettingsMessage(t.data);
        }
        yi(t) {
          this.X.loadUserList(t.data.userList), this.X.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(Yt || (Yt = {}));
      class Xt extends Z {
        constructor(t, e, i) {
          super(t, e, J.BROADCAST), (this.data = i);
        }
      }
      class Zt extends d {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class te extends Zt {
        constructor(t, e) {
          super(t, e, Yt.GET_SERVER_TIME);
        }
      }
      class ee extends Z {
        constructor(t, e, i) {
          super(t, e, J.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class ie extends Z {
        constructor(t, e, i) {
          super(t, e, J.SET_BUFFERING), (this.data = i);
        }
      }
      class ne extends Z {
        constructor(t, e, i) {
          super(t, e, J.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const se = "PING",
        ue = "SYNC",
        oe = "BROADCAST";
      class re extends l {
        constructor(t, e, i) {
          super(t, e, o.STAY_ALIVE), (this.data = i);
        }
      }
      var De = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      const ae = new (class {
        getRedirectDataForTabAsync(t) {
          return De(this, void 0, void 0, function* () {
            const e = (yield ct.getItemsAsync([A])).redirectDataMap,
              i = this.fi(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.Ci(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return De(this, void 0, void 0, function* () {
            const e = (yield ct.getItemsAsync([A])).redirectDataMap,
              i = this.fi(t);
            e && e[i] && delete e[i], yield Y.setItemsAsync({ [A]: e });
          });
        }
        fi(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return De(this, void 0, void 0, function* () {
            const i = this.fi(e);
            let n = yield ct.getItemsAsync([A]);
            (n[i] = t), (n = this.Ei(n)), yield Y.setItemsAsync({ [A]: n });
          });
        }
        Ei(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.Ci);
        }
        Ci(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(ae);
      const ce = ae;
      var he = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      class de {
        constructor(e, i, n) {
          (this.wi = []),
            (this._i = 0),
            (this.bi = 0),
            (this.ji = []),
            (this.Bi = !1),
            (this.Wt = !1),
            (this.p = !1),
            (this.Ai = !1),
            (this.ki = void 0),
            (this.Qi = () =>
              he(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.ki = !1);
                } catch (t) {
                  this.ki = !0;
                }
              })),
            (this.Ii = (t = !1, e = !1) =>
              he(this, void 0, void 0, function* () {
                if (this.xi) return;
                if (this.p) return void this.forceSync();
                if (!this.Ai && !e) return;
                const i = yield this.Ti();
                if (yield this.Si(i.data, e)) yield this.Mi(i);
                else if (t) {
                  if (yield this.Pi(e)) {
                    const t = yield this.Ti();
                    yield this.Mi(t);
                  }
                }
              })),
            (this.$i = () =>
              he(this, void 0, void 0, function* () {
                if (
                  (this.Ri == t.PAUSED &&
                    this.Gi &&
                    (clearInterval(this.Gi),
                    (this.Gi = setInterval(() => {
                      this.Vi();
                    }, 6e4))),
                  this.Oi())
                )
                  return;
                if ((yield this.Li.waitVideoDoneLoadingAsync(), this.Oi())) return;
                const e = yield this.Li.getStateAsync();
                this.Ri == t.PAUSED ? yield this.Ui(e) : this.Ri == t.PLAYING && (yield this.Ni(e)), !1 === this.Ai && (this.Ai = !0);
              })),
            (this.Li = e),
            (this.X = i),
            (this._ = n),
            this._.setMessageForwarder(this),
            (this.Hi = 0),
            (this.xi = !1),
            (this.Ri = t.PAUSED),
            (this.Wi = 0),
            (this.zi = 0),
            (this.Ki = 0),
            (this.Yi = this.Li.getStreamingServiceName()),
            I("Video forwarder"),
            this.Qi();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case o.GET_VIDEO_DATA:
              return this.Ji(i), !0;
            case o.LOAD_SESSION: {
              const e = t;
              return this.qi(e.data), !1;
            }
            case Yt.UPDATE_SESSION: {
              const e = t;
              return this.Xi(e.data), !1;
            }
            case Yt.NEXT_EPISODE: {
              const e = t;
              return this.Zi(e.data), !1;
            }
            case Yt.REBOOT_SESSION: {
              const e = t;
              return this.tn(e.data, i), !0;
            }
            case Yt.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case Nt.ON_WATCHING_ADS: {
              const e = t;
              return this.gi(e), !1;
            }
            default:
              return !1;
          }
        }
        gi(t) {
          t.data.anyoneWatchingAds && !this.Wt && (rt.pushTask(this.Li.doAdCheck.bind(this.Li)), this.forceSync()),
            (this.Wt = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.en;
        }
        set videoId(t) {
          this.en = t;
        }
        sendTeardown(t) {
          const e = new nt(v, p, t);
          x.l(e);
        }
        teardown() {
          (this.Zt = void 0),
            this.nn && clearInterval(this.nn),
            this.Gi && clearInterval(this.Gi),
            this.Li.pause(),
            rt.disable(),
            this._.stopListening();
        }
        tn(t, e) {
          rt.resetTasks(), this.en == t.videoId && this.Xi(t), e(this.en == t.videoId);
          const i = new g(v, p, { eventType: "reboot", sessionId: this.Zt });
          x.l(i);
        }
        tryBroadcast(t = !1) {
          this.Bi ||
            (this.p
              ? this.forceSync()
              : 0 != this.Li.uiEventsHappening || this.xi || !this.Zt || rt.hasTaskInQueue(oe) || rt.pushTask(() => this.Ii(t), oe));
        }
        setBuffering(t) {
          if (this.Zt) {
            const e = new ie(v, p, { buffering: t });
            x.l(e);
          }
        }
        isWatchingAds() {
          return this.Bi;
        }
        setWatchingAds(t, e) {
          if (this.Zt) {
            this.Bi = t;
            const i = new ne(v, p, { watchingAds: t, adDurationLeft: e });
            x.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return he(this, void 0, void 0, function* () {
            if (this.Zt && t !== this.en && t !== this.sn) {
              (this.sn = t), (this.xi = !0);
              const e = new ee(v, p, { nextEpisode: t }),
                i = yield x.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.un(t));
            }
          });
        }
        un(t) {
          return he(this, void 0, void 0, function* () {
            try {
              yield a(() => t == this.en, 1e4)(), (this.xi = !1);
            } catch (t) {
              this.je("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: kt };
              this.sendTeardown(e);
            }
          });
        }
        Si(i, n) {
          return he(this, void 0, void 0, function* () {
            if (null == i.lastKnownTime || null == i.lastKnownTimeUpdatedAt || null == i.state) return !1;
            if (n && i.state === t.PAUSED && i.lastKnownTime < jt) return !1;
            const s = Math.abs(i.lastKnownTime - this.on());
            if (i.state == this.Ri && s < jt) return !1;
            if (s >= jt) {
              const t = new g(v, p, { name: "video_seek", action: { source: "self" } });
              x.l(t), this.Yi == e.AMAZON || this.Yi == e.PARAMOUNT ? yield D(200)() : this.Yi == e.HBO_MAX && (yield D(500)());
            }
            return !0;
          });
        }
        Ti() {
          return he(this, void 0, void 0, function* () {
            const t = yield this.Li.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.bi), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new Xt(v, p, t);
          });
        }
        forceSync() {
          rt.pushTask(this.$i, ue);
        }
        Zi(t) {
          return he(this, void 0, void 0, function* () {
            (this.Hi = Date.now()), rt.pushTask(() => this.rn(t));
          });
        }
        rn(e) {
          return he(this, void 0, void 0, function* () {
            try {
              I("Continue next episode called"),
                (this.xi = !0),
                yield this.Li.jumpToNextEpisode(e),
                yield this._.loadNewVideoAsync(e.videoId),
                I("After load new video"),
                this._.reloadListeners(),
                this.Ki < this.Hi &&
                  ((this.Ri = t.PAUSED),
                  (this.Wi = 0),
                  (this.zi = Date.now()),
                  I("Sending broadcast after next episode"),
                  rt.pushTask(() => this.Ii(!0, !0), oe),
                  rt.removeTask(ue)),
                (this.en = e.videoId),
                (this.xi = !1);
              const i = new g(v, p, { name: "video_start", action: { description: "video session has begun" } });
              x.l(i);
            } catch (t) {
              this.je("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return he(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new re(v, p, { tabId: n, persist: t });
            x.l(s);
            const u = yield this.Dn();
            (u.date = Date.now()), ce.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return he(this, void 0, void 0, function* () {
            try {
              const i = yield this.Dn();
              i.date = Date.now();
              const n = yield this.an(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new re(v, p, { tabId: s, persist: !1 });
              yield x.l(u), yield ce.storeRedirectDataForTabAsync(i, s), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.je("Failed to fix next episode.");
              const e = new nt(v, p, { showAlert: !0, alertModal: It });
              x.l(e);
            }
          });
        }
        Dn() {
          return he(this, void 0, void 0, function* () {
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
                      e(t), this.je("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.Zt, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        an(t) {
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
        Xi(t) {
          (this.Ki = Date.now()), rt.pushTask(this.cn(t).bind(this));
        }
        cn(e) {
          if (e.state === t.PAUSED && this.Ri === t.PLAYING) {
            this.Vi();
            const t = new g(v, p, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            x.l(t);
          } else if (e.state === t.PLAYING && this.Ri === t.PAUSED) {
            const t = new g(v, p, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            x.l(t), this.Vi();
          }
          return (this.Ri = e.state), (this.Wi = e.lastKnownTime), (this.zi = e.lastKnownTimeUpdatedAt), this.$i;
        }
        Ji(t) {
          var e;
          return he(this, void 0, void 0, function* () {
            try {
              const e = yield this.Li.getVideoDataAsync(),
                i = yield this.Li.getStateAsync();
              (e.is_player_fullscreen = null !== document.fullscreenElement),
                (e.is_chat_visible = this.X.getChatVisible()),
                (e.is_adblock_enabled = this.ki),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.Wi),
                t(e);
            } catch (i) {
              this.je(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        je(t) {
          const e = new g(v, p, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          x.l(e);
        }
        Pi(t) {
          return he(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  he(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.Ti();
                      (yield this.Si(i.data, t))
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
        Mi(e) {
          return he(this, void 0, void 0, function* () {
            if (this.xi || this.Bi) return;
            const i = this.Ri;
            if (e.data.bufferingState) {
              (e.data.state = t.PAUSED), yield x.l(e, 1e3), yield this.Li.waitVideoDoneLoadingAsync();
              const n = yield this.Ti();
              (n.data.bufferingState = !0), i == t.PLAYING && (n.data.state = t.PLAYING), yield x.l(n, 1e3);
            } else yield x.l(e, 1e3);
          });
        }
        qi(t) {
          return he(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.Zt = e.sessionId),
              (this.Ri = e.state),
              (this.Wi = Number(e.lastKnownTime)),
              (this.zi = Number(e.lastKnownTimeUpdatedAt)),
              (this.en = e.videoId),
              (this.Wt = !1),
              "true" == e.controlLock && (this.p = !0),
              t.isCreate ? ((this.Ai = !0), rt.pushTask(this.Ii.bind(this), oe)) : this.forceSync();
            const i = new g(v, p, { name: "video_start", action: { description: "video session has begun" } });
            x.l(i), this._.startListening(), this.hn();
          });
        }
        dn() {
          return new Promise((t) => {
            const e = new te(v, p),
              i = Date.now();
            x
              .l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (c(this.wi, e - i, 5), (this._i = h(this.wi)), c(this.ji, e - Math.round(this._i / 2) - n, 5), (this.bi = h(this.ji)));
                }
              })
              .catch((t) => {
                I(t), this.je(t);
              }),
              t();
          });
        }
        Vi() {
          const t = new g(v, p, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          x.l(t);
        }
        hn() {
          this.nn && clearInterval(this.nn),
            this.Gi && clearInterval(this.Gi),
            (this.nn = setInterval(() => {
              rt.hasTaskInQueue(ue) || rt.pushTask(this.$i, ue);
            }, 5e3)),
            (this.Gi = setInterval(() => {
              this.Vi();
            }, 6e4)),
            (this.ln = setInterval(() => {
              rt.hasTaskInQueue(se) || rt.pushTask(this.dn.bind(this), se);
            }, 12500)),
            this.dn();
        }
        Oi() {
          return !this.Zt || this.Li.uiEventsHappening > 0 || this.Bi || this.xi || !this._.shouldSync();
        }
        Ui(t) {
          return he(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== n.PAUSED && (yield this.Li.pause()), Math.abs(this.Wi - i) > 2500)) {
              yield this.Li.setCurrentTime(this.Wi);
              const t = new g(v, p, { name: "video_seek", action: { source: "another user" } });
              x.l(t);
            }
          });
        }
        Ni(t) {
          return he(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              s = this.on();
            if ((e == n.PAUSED && (yield this.Li.play()), Math.abs(s - i) > 2500)) {
              yield this.Li.setCurrentTime(s), yield this.Li.play();
              const t = new g(v, p, { name: "video_seek", action: { source: "another user" } });
              x.l(t);
            }
          });
        }
        gn() {
          return this.Ri === t.PLAYING ? Date.now() - (this.zi + this.bi) : 0;
        }
        on() {
          return this.Wi + this.gn();
        }
        get changingVideo() {
          return this.xi;
        }
        set changingVideo(t) {
          this.xi = t;
        }
      }
      i(5640);
      var le = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      var ge = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      var pe = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      class Fe extends class {
        constructor(t) {
          (this.Li = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return ge(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return ge(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return ge(this, void 0, void 0, function* () {
            yield null === (t = this.ze) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.pn();
        }
        stopListening() {
          this.Fn();
        }
        pn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            ge(this, void 0, void 0, function* () {
              this.vn(), this.Li.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              ge(this, void 0, void 0, function* () {
                this.vn(), this.Li.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        Fn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        yn() {
          var t;
          null === (t = this.ze) || void 0 === t || t.tryBroadcast(!1);
        }
        vn() {
          var t;
          console.log("Going to wait for change"), null === (t = this.ze) || void 0 === t || t.tryBroadcast(!0);
        }
        mn() {
          var t;
          null === (t = this.ze) || void 0 === t || t.setBuffering(!0);
        }
        Cn(t) {
          var e;
          null === (e = this.ze) || void 0 === e || e.setWatchingAds(!0, t);
        }
        En() {
          var t, e;
          null === (t = this.ze) || void 0 === t || t.setWatchingAds(!1), null === (e = this.ze) || void 0 === e || e.forceSync();
        }
        wn() {
          var t;
          null === (t = this.ze) || void 0 === t || t.setBuffering(!1);
        }
        _n(t) {
          var e;
          null === (e = this.ze) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        bn(t) {
          var e;
          null === (e = this.ze) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.ze = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e) {
          var i;
          super(t),
            (this.jn = this.yn.bind(this)),
            (this.Bn = this.An.bind(this)),
            (this.kn = this.Qn.bind(this)),
            (this.In = this.xn.bind(this)),
            (this.Tn = this.Sn.bind(this)),
            (this.Li = t),
            (this.X = e),
            (this.Mn = 0),
            this.Li.setVideoEventListener(this),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/appletv/appletv_injected_bundled.js"));
        }
        featureReferenceIdToShowType(t) {
          switch (t.split(".")[3]) {
            case "mv":
              return "movie";
            case "ep":
              return "episode";
            case "sp":
              return "sporting-event";
            default:
              return;
          }
        }
        Pn(t, e) {
          const i = this.featureReferenceIdToShowType(e),
            n = `${i}/${t}`,
            s = this.$n;
          return console.log("Updating video ID to " + n), void 0 !== i && s !== n && ((this.$n = n), void 0 !== s);
        }
        Rn() {
          return document.querySelector(".close-button.video-player__close");
        }
        An() {
          this.bn(Mt);
        }
        Gn() {
          const t = document.getElementById("teleparty-appletv-id-container");
          if (t) {
            const e = t.getAttribute("data-canonical-id"),
              i = t.getAttribute("data-feature-reference-id");
            console.log("Updating video ID from injected element, canonicalId: " + e + ", featureReferenceId: " + i),
              e && i && this.Pn(e, i);
          }
        }
        Qn(t) {
          if ((console.log("Received message"), t.source === window && "idDetected" === t.data.type)) {
            console.log("Detected video ID");
            const e = t.data.canonicalId,
              i = t.data.featureReferenceId;
            this.Pn(e, i) && (this._n(this.$n), (window.location.href = `https://tv.apple.com/${this.$n}`));
          }
        }
        Sn() {
          (this.Mn = Date.now()), this.jn();
        }
        xn() {
          this.jn();
        }
        getCachedVideoId() {
          return this.$n;
        }
        getLastSeekRequestedTime() {
          return this.Mn;
        }
        reloadListeners() {
          this.stopListening(), this.startListening();
        }
        stopListening() {
          super.stopListening();
          const t = this.Li.getVideoElement(),
            e = this.Rn();
          t && (t.removeEventListener("play", this.In), t.removeEventListener("pause", this.In), t.removeEventListener("seeking", this.Tn)),
            e && e.removeEventListener("click", this.Bn),
            window.removeEventListener("message", this.kn, !1);
        }
        startListening() {
          var t;
          super.startListening(), this.Gn();
          const e = this.Li.getVideoElement();
          null === (t = this.ze) || void 0 === t || t.persistExtension(!0);
          const i = this.Rn();
          e && (e.addEventListener("play", this.In), e.addEventListener("pause", this.In), e.addEventListener("seeking", this.Tn)),
            i && i.addEventListener("click", this.Bn),
            window.addEventListener("message", this.kn, !1);
        }
        loadNewVideoAsync(t) {
          return pe(this, void 0, void 0, function* () {
            const e = performance.now();
            yield new Promise((i, n) => {
              const s = setInterval(() => {
                if (this.Li.getVideoId() === t) {
                  if (this.Li.getVideoElement() instanceof Element) return this.X.reloadChat(), clearInterval(s), void i();
                }
                performance.now() - e >= 2e4 && (clearInterval(s), n(new Error("Could not load new video in time.")));
              }, 100);
            }),
              yield this.Li.waitVideoDoneLoadingAsync();
          });
        }
      }
      var ve = i(4296),
        ye = i.n(ve);
      class me extends d {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class fe extends me {
        constructor(t, e, i) {
          super(t, e, Ut.CREATE_SESSION), (this.data = i);
        }
      }
      class Ce {
        constructor(t, e, i, n, s) {
          (this.requiredPermissions = t), (this.serverName = i), (this.name = n), (this.contentScripts = e), (this.syncFromEnd = s);
        }
        urlWithSessionId(t) {
          return `${w}/join/${t}`;
        }
      }
      const Ee = new (class extends Ce {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", e.NETFLIX, !1);
      Object.freeze(Ee);
      const we = Ee;
      const _e = new (class extends Ce {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", e.HULU, !1);
      Object.freeze(_e);
      const be = _e;
      const je = new (class extends Ce {
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
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", e.DISNEY_PLUS, !1);
      Object.freeze(je);
      const Be = je;
      const Ae = new (class extends Ce {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== r(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + r(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return r(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", e.HBO_MAX, !1);
      Object.freeze(Ae);
      const ke = Ae;
      const Qe = new (class extends Ce {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", e.AMAZON, !1);
      Object.freeze(Qe);
      const Ie = Qe;
      const xe = new (class extends Ce {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", e.CRUNCHYROLL, !1);
      Object.freeze(xe);
      const Te = xe;
      const Se = new (class extends Ce {
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", e.YOUTUBE, !1);
      Object.freeze(Se);
      const Me = Se;
      const Pe = new (class extends Ce {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", e.ESPN, !1);
      Object.freeze(Pe);
      const $e = Pe;
      const Re = new (class extends Ce {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", e.PARAMOUNT, !1);
      Object.freeze(Re);
      const Ge = Re;
      const Ve = new (class extends Ce {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", e.HOTSTAR, !1);
      Object.freeze(Ve);
      const Oe = Ve;
      const Le = new (class extends Ce {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", e.PEACOCK, !1);
      Object.freeze(Le);
      const Ue = Le;
      const Ne = new (class extends Ce {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", e.FUNIMATION, !1);
      Object.freeze(Ne);
      const He = Ne;
      const We = new (class extends Ce {
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
      })([], ["content_scripts/max/max_content_bundled.js"], "max", e.MAX, !1);
      Object.freeze(We);
      const ze = We;
      const Ke = new (class extends Ce {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", e.STAR_PLUS, !1);
      Object.freeze(Ke);
      const Ye = Ke;
      const Je = new (class extends Ce {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", e.PLUTO_TV, !1);
      Object.freeze(Je);
      const qe = Je;
      const Xe = new (class extends Ce {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", e.APPLE_TV, !1);
      Object.freeze(Xe);
      const Ze = Xe;
      const ti = new (class extends Ce {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", e.JIO_CINEMA, !1);
      Object.freeze(ti);
      const ei = ti;
      const ii = new (class extends Ce {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", e.TUBI_TV, !1);
      Object.freeze(ii);
      const ni = ii;
      const si = new (class extends Ce {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", e.CRAVE, !1);
      Object.freeze(si);
      const ui = si;
      const oi = new (class extends Ce {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", e.MUBI, !1);
      Object.freeze(oi);
      const ri = oi;
      const Di = new (class extends Ce {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", e.STAN, !1);
      Object.freeze(Di);
      const ai = Di;
      class ci {
        constructor(t, e) {
          var i;
          (this.isBrowsing = !1), (this.id = e), this.videoId, (this.url = t);
          const n = [we, be, Be, ke, Ie, Me, Te, $e, Ge, Oe, Ue, Ye, ze, He, Ze, qe, ei, ni, ri, ai, ui];
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
      class hi extends me {
        constructor(t, e, i) {
          super(t, e, Ut.RE_INJECT), (this.data = i);
        }
      }
      var di = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              D(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              D(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function D(t) {
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
          D((n = n.apply(t, e || [])).next());
        });
      };
      var li,
        gi = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                D(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                D(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function D(t) {
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
            D((n = n.apply(t, e || [])).next());
          });
        };
      class pi extends class {
        constructor(t) {
          var e, i, n;
          (this.Vn = !1),
            (this.On = !1),
            (this.Ln = !1),
            (this.Un = 0),
            (this.Nn = !1),
            (this.Hn = !1),
            (this.Wn = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.zn() : this.Kn();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.Yn = new ci(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.Jn = t),
            this.Jn.setPageControls(this);
        }
        setChatApi(t) {
          (this.Jn = t), this.Jn.setPageControls(this);
        }
        qn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.Ln ? "Only I have control" : "Everyone has control"),
            this.Ln
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        Xn() {
          this.On || ((this.Ln = !this.Ln), this.qn());
        }
        setResetChatButton() {
          this.Jn.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Jn.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        Zn() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.Jn.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.Un} unread ${1 == this.Un ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.Jn.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.Jn.shouldChatBeVisible() ||
            this.Jn.isPartyWindowsActive() ||
            (this.Un++,
            this.Zn(),
            (this.Nn = !0),
            this.zn(),
            D(1e3)().then(() => {
              this.Nn = !1;
            }));
        }
        teardown() {
          this.ts(), this.Kn(), this.es && clearInterval(this.es);
        }
        ns() {
          var t;
          return di(this, void 0, void 0, function* () {
            if (this.On || this.Jn.inSession) return;
            if ((this.ss(), (this.On = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new hi(y, p, { extensionTabData: this.Yn });
              try {
                yield x.l(t);
              } catch (t) {
                return console.log(t), this.us(), this.je(t), this.os(P), void (this.On = !1);
              }
            }
            console.log("Sending create");
            const e = this.rs();
            try {
              const t = yield x.l(e);
              t.error ? (this.os(t.error.message), this.je(t.error.message)) : ((this.On = !1), this.Ds(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.os(P), this.je(t);
            }
            this.us(), (this.On = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        ts() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        je(t) {
          const e = new g(F, p, { name: "error", action: { description: "an error has occured", reason: t } });
          x.l(e);
        }
        os(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        cs(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, H(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, H(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, H(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, H(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, H(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, H(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, H(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, H(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, H(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, H(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, H(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, H(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, H(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        Kn() {
          this.Nn || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        zn() {
          return di(this, void 0, void 0, function* () {
            if (!this.Hn && (this.Wn || this.Jn.inSession)) {
              this.Hn = !0;
              try {
                yield this.addTpIcon(),
                  this.Jn.inSession ? this.enablePartyIcons() : this.ts(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.Hn = !1;
              }
            }
          });
        }
        startEventListener() {
          this.es = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.es && clearInterval(this.es);
        }
        hs() {
          return "100px";
        }
        addTpIcon() {
          return di(this, void 0, void 0, function* () {
            if ((this.Wn || this.Jn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.cs(ye()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.ds());
            }
          });
        }
        ds() {
          jQuery("#tp-control-lock-button").click(this.Xn.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.hs()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.hs()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.hs()}`),
            jQuery("#tp-link-button").click(this.ls.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.gs(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.ps();
            });
        }
        ps() {
          const t = new nt(y, p, Mt);
          x.l(t), this.Kn();
        }
        ls() {
          this.Jn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        gs() {
          return di(this, void 0, void 0, function* () {
            (this.Un = 0),
              this.hideMessageIndicator(),
              this.Jn.isPartyWindowsActive()
                ? this.Jn.resetChatWindow(!0)
                : (this.Jn.shouldChatBeVisible(), yield this.Jn.setChatVisible(!this.Jn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.Vn && this.zn();
        }
        setChatButtons() {
          this.Jn.inSession && this.Jn.getChatVisible() ? this.Ds() : this.Fs(),
            this.Jn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        Ds() {
          return di(this, void 0, void 0, function* () {
            this.Jn.inSession &&
              this.Jn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        Fs() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        rs() {
          return new fe(y, p, this.vs());
        }
        vs() {
          return { createSettings: { controlLock: this.Ln }, extensionTabData: this.Yn, source: "pc" };
        }
        ss() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        us() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        ys() {
          return document.querySelector(".scrim ");
        }
        shouldMenuBeVisible() {
          var t;
          return "false" === (null === (t = this.ys()) || void 0 === t ? void 0 : t.getAttribute("aria-hidden"));
        }
        getControlsRoot() {
          return gi(this, void 0, void 0, function* () {
            return jQuery(".playback-modal.playback-modal--show");
          });
        }
        reloadListener() {
          this.stopEventListener(), this.startEventListener();
        }
      }
      class Fi extends class {
        constructor(t, e, i, n) {
          (this.X = t),
            (this.Li = e),
            (this._ = i),
            (this.Fe = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.X), console.log("Resetting Chat Api for old controls")),
            (this.fs = new qt(this.X, this.Fe)),
            (this.ze = new de(this.Li, this.X, this._)),
            (this.Cs = !1),
            (this.Es = !1),
            (this._e = !1),
            (this.ui = new Kt()),
            this.ui.addMessageListener(this.ze),
            this.ui.addMessageListener(this.fs),
            this.ui.addMessageListener(this),
            (this.ws = !1),
            this._s();
        }
        bs() {
          return le(this, void 0, void 0, function* () {
            yield this.Fe.addTpIcon(), this.Fe.startEventListener();
          });
        }
        loadBrowseButton() {
          return le(this, void 0, void 0, function* () {
            yield this.Fe.addTpIcon(), this.Fe.startEventListener();
          });
        }
        _s() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.X.inSession, alertModal: xt };
            this.js(t);
          }),
            t.onMessage.addListener(() => {
              I("Got background script"), (this.ws = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == v) {
            if (t.type === Ut.IS_CONTENT_SCRIPT_READY) {
              if (this.Cs) {
                i({ ready: !0 });
              } else this.Es || ((this.Es = !0), this.Bs().then(i));
              return !0;
            }
            if (t.type === Ut.GET_INIT_DATA) {
              return i(this.As()), !0;
            }
            if (t.type === Ut.DISCONNECT && t.sender == F) {
              const t = new nt(v, p, Mt);
              x.l(t), i();
            } else {
              if (t.type == o.TEARDOWN) {
                const e = t;
                return this.js(e.data), i(), !0;
              }
              t.type === o.ON_NOTIF && this.ks();
            }
          }
          return !1;
        }
        ks() {
          console.log("Show Notification");
        }
        js(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.X.getPartyUrl();
            Tt(t.alertModal, i);
          }
          this.Fe.teardown(), this.ze.teardown(), this.fs.teardown(), this.ui.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new g(v, p, s);
          x.l(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        je(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new g(v, p, { name: "error", action: { reason: t } });
          x.l(e);
        }
        Qs() {
          return le(this, void 0, void 0, function* () {
            return a(() => this.ws, 5e3)();
          });
        }
        Bs() {
          return le(this, void 0, void 0, function* () {
            try {
              yield this.Qs();
              const t = yield this.Is();
              return this.bs(), t;
            } catch (t) {
              const e = { message: M, showButton: !1 };
              return this.je(M), { ready: !1, error: e };
            } finally {
              this.Es = !1;
            }
          });
        }
        Is() {
          return le(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.Li.waitVideoApiReadyAsync();
              const e = yield this.xs();
              e && e.error
                ? (I("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.Cs = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this._e = !0),
                  (this.Cs = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.je(e.message);
            }
            return { ready: this.Cs, error: t };
          });
        }
        As() {
          return {
            inSession: this.X.inSession,
            isChatVisible: this.X.isPartyWindowsActive() ? this.X.getChatWindowVisible() : this.X.getChatVisible(),
            partyUrl: this.X.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.X.isPartyWindowsActive()
          };
        }
        xs() {
          return le(this, void 0, void 0, function* () {
            const t = yield this.Ts();
            return x.l(t);
          });
        }
        Ts() {
          return le(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.Li.getVideoDataAsync()).videoId };
            return new zt(v, p, t);
          });
        }
      } {
        constructor() {
          const t = new R(),
            e = new Wt(),
            i = new Fe(t, e);
          let n;
          (n = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new pi(e)), super(e, t, i, n);
        }
      }
      (window.teleparty && (null === (li = window.teleparty) || void 0 === li ? void 0 : li.contentScriptInjected)) ||
        (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
        (window.teleparty.contentScriptInjected = !0),
        new Fi(),
        I("Initialized content script"));
    })();
})();
