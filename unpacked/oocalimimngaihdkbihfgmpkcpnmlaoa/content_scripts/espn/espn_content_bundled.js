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
      var t, e, n;
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
        })(n || (n = {}));
      const s = chrome.runtime.id,
        u = "reactionContainerOpen",
        o = "https://sessions.teleparty.com",
        r = "https://redirect.teleparty.com",
        a = r,
        c = `${r}/sidebar`,
        D = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        h = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        d = "recentlyUsedEmojiMap",
        l = "redirectDataMap",
        p = [
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
        g =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      class F {
        constructor(t, e, i, n, s) {
          (this.requiredPermissions = t), (this.serverName = i), (this.name = n), (this.contentScripts = e), (this.syncFromEnd = s);
        }
        urlWithSessionId(t) {
          return `${a}/join/${t}`;
        }
      }
      var v;
      !(function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(v || (v = {}));
      var y;
      function m(t) {
        return t.hostname.includes(".espn.") && t.pathname.includes("/player");
      }
      function f(t) {
        return t.includes("urn:hbo:feature")
          ? v.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? v.EPISODE
          : t.includes("urn:hbo:extra")
          ? v.EXTRA
          : v.OTHER;
      }
      function C(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function E(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : C(i)().then(s);
            };
          return s();
        };
      }
      function w(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function _(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      function b(t) {
        const e = document.createElement("script");
        e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
      }
      !(function (t) {
        (t.REGISTER = "register"), (t.PARTY_START = "party_start"), (t.PARTY_JOIN = "party_join"), (t.PARTY_END = "party_end");
      })(y || (y = {}));
      const j = new (class extends F {
        isBrowsing(t) {
          return t.hostname.includes(".espn.");
        }
        isValidUrl(t) {
          return m(t);
        }
        getVideoId(t) {
          const e = t.pathname;
          return e.substring(e.lastIndexOf("/") + 1);
        }
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", e.ESPN, !1);
      Object.freeze(j);
      const B = j;
      class A {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class k extends A {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      var Q;
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
      })(Q || (Q = {}));
      class I extends k {
        constructor(t, e, i) {
          super(t, e, Q.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const x = "Service_Background",
        S = "Popup",
        T = "Content_Script",
        M = "Page_Controls";
      var P = console.log.bind(window.console);
      const $ = new (class {
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
                chrome.runtime.lastError && P(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
              });
            } catch (t) {
              clearTimeout(u), s(t);
            }
          });
        }
        l(t, e) {
          return new Promise((i, n) => {
            let u = null;
            e &&
              (u = setTimeout(() => {
                n({ error: "Send Message Timeout" });
              }, e));
            try {
              chrome.runtime.sendMessage(s, t, (e) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), u && clearTimeout(u), i(e);
              });
            } catch (t) {
              u && clearTimeout(u), n(t);
            }
          });
        }
      })();
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
      var R = function (t, e, i, n) {
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
          const i = new I(T, x, { name: "video_error", action: { description: t, reason: e } });
          $.l(i);
        }
        doAdCheck() {
          return V(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(), (this.F = { time: 0, playbackState: n.NOT_READY, loading: !1, duration: 0 }), (this.v = 0), (this.m = 0);
        }
        onNode(t) {
          const e = t.data;
          "VideoData" == e.type && ((this.C = e.videoData), (this.v = Date.now()), console.log(this.C)),
            "updatedState" == e.type && ((this.F = e.playerState), (this.m = Date.now()), console.log("Player State:", this.F));
        }
        isPlusVideo() {
          return !document.querySelector("video.vjs-tech");
        }
        _(t, e, i = !1) {
          var n;
          const s = document.querySelector(".embed-player__iframe");
          let u = { type: t };
          if ((e && (u = { type: t, eventData: e }), i)) {
            const t = { infoSending: u };
            window.postMessage(t, "*");
          } else if (s) {
            const t = { infoSending: u };
            null === (n = s.contentWindow) || void 0 === n || n.postMessage(t, "*");
          }
        }
        waitVideoApiReadyAsync() {
          var t;
          return R(this, void 0, void 0, function* () {
            const e = () =>
              R(this, void 0, void 0, function* () {
                try {
                  yield this.getEspnVideoInformation();
                } catch (t) {
                  console.log("Failed to load video data: Try again"), yield e();
                }
              });
            yield e(), console.log("Video ID IS:", null === (t = this.C) || void 0 === t ? void 0 : t.videoId);
          });
        }
        waitVideoDoneLoadingAsync() {
          const t = (e = 0) =>
            R(this, void 0, void 0, function* () {
              if (e > 100) throw new Error("Failed wait done loading");
              try {
                return (
                  yield this.getEspnState(),
                  this.F.playbackState === n.PLAYING || this.F.playbackState === n.PAUSED ? void 0 : (yield C(100)(), t(e + 1))
                );
              } catch (i) {
                return yield C(100)(), t(e + 1);
              }
            });
          return t();
        }
        getStreamingServiceName() {
          return e.ESPN;
        }
        setCurrentTime(t) {
          return R(this, void 0, void 0, function* () {
            if (this.isPlusVideo()) this._("seekTo", { time: t });
            else {
              const e = this.getVideoElement();
              e && (e.currentTime = t / 1e3);
            }
          });
        }
        updateState() {
          return R(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              console.log("Send update state"), this._("updateState"), yield E(() => 0 != this.m && this.m > t, 1e3, 50)();
            } catch (t) {
              console.error("Update state failed: " + this.m);
            }
          });
        }
        getStateAsync() {
          return R(this, void 0, void 0, function* () {
            const t = yield this.getEspnState(),
              e = t.playbackState;
            return new Promise((i) => {
              i({ playbackState: e, playbackPositionMilliseconds: t.time });
            });
          });
        }
        getUpdateSessionDataAsync() {
          return R(this, void 0, void 0, function* () {
            const e = yield this.getEspnState(),
              i = e.time;
            return {
              state: e.playbackState == n.PAUSED ? t.PAUSED : t.PLAYING,
              lastKnownTime: i,
              lastKnownTimeUpdatedAt: Date.now(),
              bufferingState: e.playbackState == n.LOADING
            };
          });
        }
        j() {
          var t, e;
          return {
            episodeNum: null === (t = this.C) || void 0 === t ? void 0 : t.episodeNumber,
            title: null === (e = this.C) || void 0 === e ? void 0 : e.videoTitle
          };
        }
        getEspnVideoInformation() {
          var t;
          return R(this, void 0, void 0, function* () {
            try {
              const e = B.getVideoId(new URL(window.location.href));
              if (this.isPlusVideo()) yield this.updateVideoData();
              else {
                const i =
                  null === (t = document.querySelector(".WatchVideoPlayer__Metadata--title")) || void 0 === t ? void 0 : t.innerHTML;
                (this.C = { videoTitle: i, videoId: e }), (this.v = Date.now());
              }
              return 8 == (null == e ? void 0 : e.length) && this.C && (this.C.videoType = v.EXTRA), this.C;
            } catch (t) {
              return console.log(t), this.C;
            }
          });
        }
        B() {
          if (this.isPlusVideo()) return this.F.playbackState;
          {
            const t = this.getVideoElement();
            return null == t ? n.NOT_READY : t.readyState < 4 ? n.LOADING : t.paused ? n.PAUSED : n.PLAYING;
          }
        }
        getEspnState() {
          return R(this, void 0, void 0, function* () {
            try {
              if (this.isPlusVideo()) yield this.updateState();
              else {
                const t = this.getVideoElement();
                t && ((this.F = { time: 1e3 * t.currentTime, playbackState: this.B(), duration: 1e3 * t.duration }), (this.m = Date.now()));
              }
              return this.F;
            } catch (t) {
              return console.log(t), this.F;
            }
          });
        }
        getVideoDataAsync() {
          var t, e, i;
          return R(this, void 0, void 0, function* () {
            const n = yield this.getEspnVideoInformation(),
              s = yield this.getEspnState(),
              u = null !== (t = null == n ? void 0 : n.videoId) && void 0 !== t ? t : "",
              o = null !== (e = null == n ? void 0 : n.videoTitle) && void 0 !== e ? e : "",
              r = null == n ? void 0 : n.videoType,
              a = this.j(),
              c = this.getScreenSize(),
              D = this.getVideoContent(u, o, window.location.href, r, a);
            return {
              videoId: u,
              videoTitle: o,
              videoDuration: null !== (i = s.duration) && void 0 !== i ? i : 0,
              serviceDomain: window.location.hostname,
              screen: c,
              content: D,
              videoState: s.playbackState
            };
          });
        }
        getVideoElement() {
          var t;
          return null !== (t = document.querySelector("video.vjs-tech")) && void 0 !== t
            ? t
            : document.querySelector(".embed-player__iframe");
        }
        updateVideoData() {
          return R(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              this._("getVideoData", null, !0), yield E(() => 0 != this.v && this.v > t, 500, 10)();
            } catch (t) {
              console.log(t);
            }
          });
        }
        setVideoEventListener(t) {
          this.A = t;
        }
        jumpToNextEpisode(t) {
          var e;
          return R(this, void 0, void 0, function* () {
            const i = yield this.getEspnVideoInformation();
            (null == i ? void 0 : i.videoId) !== t.videoId && (null === (e = this.A) || void 0 === e || e.reloadNextEpisode());
          });
        }
        freeze(t) {
          return R(this, void 0, void 0, function* () {
            this.p += 1;
            try {
              yield this.pause(), yield C(t)(), yield this.play();
            } finally {
              this.p -= 1;
            }
          });
        }
        pause() {
          var t;
          return R(this, void 0, void 0, function* () {
            if (this.isPlusVideo())
              return new Promise((t, e) => {
                (this.p += 1),
                  (() => {
                    R(this, void 0, void 0, function* () {
                      try {
                        this._("pauseVideo"), yield this.updateState(), yield E(() => this.F.playbackState === n.PAUSED, 2500, 10)(), t();
                      } catch (t) {
                        this.logError("video was unable to pause correctly", t), e(t);
                      } finally {
                        this.p -= 1;
                      }
                    });
                  })();
              });
            yield null === (t = this.getVideoElement()) || void 0 === t ? void 0 : t.pause();
          });
        }
        play() {
          var t;
          return R(this, void 0, void 0, function* () {
            if (this.isPlusVideo())
              return new Promise((t, e) => {
                (this.p += 1),
                  (() => {
                    R(this, void 0, void 0, function* () {
                      try {
                        this._("playVideo"), yield this.updateState(), yield E(() => this.F.playbackState === n.PLAYING, 2500, 10)(), t();
                      } catch (t) {
                        this.logError("video was unable to play correctly", t), e(t);
                      } finally {
                        this.p -= 1;
                      }
                    });
                  })();
              });
            yield null === (t = this.getVideoElement()) || void 0 === t ? void 0 : t.play();
          });
        }
      }
      const L = chrome.extension.getURL("img/x-circle.svg"),
        O = "with-chat",
        U = "no-scroll";
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
                g,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(g, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(g) || []).length;
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
              (10 === t.getMonth() && t.getDate() >= 18 && t.getDate() <= 28) ||
              (9 === t.getMonth() && t.getDate() >= 8 && t.getDate() <= 14)
            );
          }
        },
        X = "Failed to read chrome storage. Please refresh the page and try again",
        Z = "Failed to connect to Script. Please refresh the page and try again",
        tt = "An unexpected error occured. Please refresh the page and try again.";
      var et = function (t, e, i, n) {
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
      const it = new (class {
        setItemsAsync(t) {
          return et(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(it);
      const nt = it;
      var st,
        ut = function (t, e, i, n) {
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
      class ot {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.k = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : h
          }),
            (this.I = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = J(t)),
            (this.k.userIcon = t),
            nt.setItemsAsync({ userIcon: t }),
            P("new user settings after set user icon: " + JSON.stringify(this.k));
        }
        saveUserNickname(t) {
          (this.k.userNickname = t),
            nt.setItemsAsync({ userNickname: t }),
            P("new user settings after set user nickname: " + JSON.stringify(this.k));
        }
        saveUserSettings(t) {
          return ut(this, void 0, void 0, function* () {
            const e = J(t.userIcon);
            (this.k = t),
              (this.k.userIcon = e),
              yield nt.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              P("new user settings after save: " + JSON.stringify(this.k));
          });
        }
        get userSettings() {
          return this.k;
        }
        get permId() {
          return this.I;
        }
        get userIcon() {
          return this.k.userIcon;
        }
        get userNickname() {
          return this.k.userNickname;
        }
      }
      class rt extends A {
        constructor(t, e, i) {
          super(t, e, i), (this.S = i);
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
      })(st || (st = {}));
      class at extends rt {
        constructor(t, e, i) {
          super(t, e, st.SET_TYPING), (this.data = i);
        }
      }
      class ct extends rt {
        constructor(t, e, i) {
          super(t, e, st.SEND_MESSAGE), (this.data = i);
        }
      }
      class Dt extends rt {
        constructor(t, e, i) {
          super(t, e, st.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class ht extends k {
        constructor(t, e, i) {
          super(t, e, Q.TEARDOWN), (this.data = i);
        }
      }
      class dt extends rt {
        constructor(t, e, i) {
          super(t, e, st.SEND_REACTION), (this.data = i);
        }
      }
      class lt extends rt {
        constructor(t, e, i) {
          super(t, e, st.SEND_GIF), (this.data = i);
        }
      }
      class pt {
        constructor() {
          this.resetTasks(), (this.T = []), (this.M = 0), (this.P = Promise.resolve()), (this.$ = !0);
        }
        createInstance() {
          return new pt();
        }
        pushTask(t, e) {
          if (!this.$) return;
          const i = { action: t, name: e };
          0 === this.M && this.resetTasks(),
            (this.M = this.T.push(i)),
            (this.P = this.P.then(() => {
              if (this.T.includes(i) && this.$)
                return this.V(i)().then(() => {
                  this.T.shift(), (this.M -= 1);
                });
            }));
        }
        disable() {
          (this.$ = !1), this.resetTasks();
        }
        resetTasks() {
          (this.P = Promise.resolve()), (this.T = []), (this.M = 0);
        }
        V(t) {
          return function () {
            return t.action().catch(() => {});
          };
        }
        get tasksInFlight() {
          return this.M;
        }
        hasTaskInQueue(t) {
          return this.T.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.T),
            (this.T = this.T.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.M = this.T.length),
            console.log(this.T);
        }
      }
      const gt = new pt();
      var Ft = function (t, e, i, n) {
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
      const vt = new (class {
        getItemsAsync(t) {
          return Ft(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? i(new Error(X)) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return Ft(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? e(new Error(X)) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(vt);
      const yt = vt;
      var mt,
        ft = new Uint8Array(16);
      function Ct() {
        if (
          !mt &&
          !(mt =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return mt(ft);
      }
      const Et = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const wt = function (t) {
        return "string" == typeof t && Et.test(t);
      };
      for (var _t = [], bt = 0; bt < 256; ++bt) _t.push((bt + 256).toString(16).substr(1));
      const jt = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            _t[t[e + 0]] +
            _t[t[e + 1]] +
            _t[t[e + 2]] +
            _t[t[e + 3]] +
            "-" +
            _t[t[e + 4]] +
            _t[t[e + 5]] +
            "-" +
            _t[t[e + 6]] +
            _t[t[e + 7]] +
            "-" +
            _t[t[e + 8]] +
            _t[t[e + 9]] +
            "-" +
            _t[t[e + 10]] +
            _t[t[e + 11]] +
            _t[t[e + 12]] +
            _t[t[e + 13]] +
            _t[t[e + 14]] +
            _t[t[e + 15]]
          ).toLowerCase();
        if (!wt(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const Bt = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || Ct)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return jt(n);
      };
      var At;
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
      })(At || (At = {}));
      var kt = function (t, e, i, n) {
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
      const Qt = new (class {
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
        R(t) {
          return kt(this, void 0, void 0, function* () {
            try {
              yield nt.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return kt(this, void 0, void 0, function* () {
            const t = yield yt.getAllItemsAsync(),
              e = Qt.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.R(e), e;
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
      Object.freeze(Qt);
      const It = Qt,
        xt = 1e3,
        St = 72e5,
        Tt = 12e4,
        Mt = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Pt = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        $t = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Vt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function Rt(t, e) {
        Gt();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${L}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${L}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            Gt();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              Gt(), (window.location.href = e);
            });
      }
      function Gt() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const Lt = { showAlert: !1 },
        Ot = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var Ut;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(Ut || (Ut = {}));
      var Nt = function (t, e, i, n) {
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
      class Ht {
        constructor(t) {
          (this.G = this.L.bind(this)),
            (this.O = this.resetIdleTimer.bind(this)),
            (this.U = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.N(t.data);
            }),
            (this.H = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.W = (t) => {
              this.K.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new I(T, x, n);
              $.l(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.K.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.K.toggleGIFs();
            }),
            (this.N = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new I(T, x, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              $.l(n);
              const s = new I(T, x, { eventType: `emoji-click-${i}`, sessionId: this.K.getSessionId() });
              $.l(s), gt.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.K.focusChat(), this.Y(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.J(), this.K.onInputChange();
            }),
            (this.K = t);
        }
        q() {
          P("Idle Warning called"), Rt(Pt);
          const t = new I(T, x, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          $.l(t);
          const e = new I(T, x, { eventType: "idle-warn-2hr", sessionId: this.K.getSessionId() });
          $.l(e), (this.X = setTimeout(this.Z.bind(this), Tt));
        }
        Z() {
          P("Idle kick called");
          const t = new I(T, x, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new ht(T, x, Ot);
          $.l(t), $.l(e);
        }
        resetIdleTimer() {
          this.tt && clearTimeout(this.tt), this.X && (Gt(), clearTimeout(this.X)), (this.tt = setTimeout(this.q.bind(this), St));
        }
        et() {
          (this.tt = setTimeout(this.q.bind(this), St)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.O();
            }),
            (window.onfocus = () => this.O()),
            (window.onmousedown = () => this.O()),
            (window.ontouchstart = () => this.O()),
            (window.onkeydown = () => this.O());
        }
        it() {
          this.tt && clearTimeout(this.tt),
            this.X && clearTimeout(this.X),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          P("Listening for chat events"), this.et(), this.nt(), this.initWindowListeners();
        }
        stopListening() {
          this.st(), this.it(), this.ut();
        }
        L() {
          this.K.clearUnreadCount();
        }
        ot(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.K.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.G),
            window.addEventListener("message", this.U),
            document.addEventListener("dragstart", this.rt.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.K.onFullScreen),
            document.addEventListener("fullscreenchange", this.K.onFullScreen),
            document.addEventListener("keydown", this.H, !0),
            document.addEventListener("emoji-click", this.N),
            document.addEventListener("click", this.W);
        }
        nt() {
          jQuery(window).on("focus", this.G),
            jQuery("#party-tab").on("click", this.K.togglePartyTab.bind(this.K)),
            jQuery("#friends-tab").on("click", this.K.toggleFriendsTab.bind(this.K)),
            jQuery(".user-icon").on("click", this.K.toggleLargeUserIconButton.bind(this.K)),
            jQuery("#user-icon").on("click", this.K.toggleIconContainer.bind(this.K)),
            jQuery("#link-icon").on("click", this.K.linkIconListener.bind(this.K)),
            jQuery("#reset-icon").on("click", this.K.resetIconListener.bind(this.K)),
            jQuery(".image-button").on("click", this.K.userIconSelectorListener.bind(this.K)),
            jQuery("#chat-input-container").on("keydown", this.K.onChatKeyDown.bind(this.K)),
            jQuery("#nickname-edit").on("keydown", this.K.onChatKeyDown.bind(this.K)),
            jQuery("#chat-input").on("keypress", this.K.onChatKeyPress.bind(this.K)),
            jQuery("#chat-input").on("input", this.K.onInputChange.bind(this.K)),
            jQuery("#gif-search").on("keyup", this.K.onGifSearch.bind(this.K)),
            jQuery("#saveChanges").on("click", this.K.saveChangesListener.bind(this.K)),
            jQuery("#cancelNickname").on("click", this.K.cancelNicknameListener.bind(this.K)),
            jQuery("#chat-wrapper").on("mouseup", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.K.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.K.onChatKeyUp.bind(this.K)),
            jQuery("#emoji-picker-btn").on("click", this.K.addEmojiPicker.bind(this.K)),
            jQuery("#gif-btn").on("click", this.K.addGifPicker.bind(this.K)),
            jQuery(".gif-img").on("click", this.K.clickGif.bind(this.K)),
            jQuery(".gif-results").on("click", "video, img", this.K.clickGif.bind(this.K)),
            jQuery("#category-container").on("click", "video", this.K.clickGif.bind(this.K)),
            jQuery("#gif-input-back").on("click", this.K.resetGif.bind(this.K)),
            jQuery("#reaction-btn").on("click", this.K.addReactionTab.bind(this.K)),
            jQuery("#chat-input-container").on("click", this.ct.bind(this)),
            jQuery("#chat-input").on("input", this.J.bind(this)),
            jQuery("#chat-input").on("drop", this.Dt.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.K.onScrollToBottom.bind(this.K)),
            this.ht(),
            document.addEventListener("keydown", this.H.bind(this), !0),
            this.K.initCustomListeners();
        }
        ht() {
          jQuery("#tp-heart-button").on("click", () => {
            this.K.onReactionClicked(Ut.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.K.onReactionClicked(Ut.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.K.onReactionClicked(Ut.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.K.onReactionClicked(Ut.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.K.onReactionClicked(Ut.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.K.onReactionClicked(Ut.FIRE);
            });
        }
        J() {
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
        Dt(t) {
          t.preventDefault();
        }
        rt(t) {
          t.preventDefault();
        }
        ct(t) {
          t.target === jQuery("#chat-input")[0] && this.K.focusChat();
        }
        Y(t) {
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
        dt(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        lt(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.dt(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Nt(this, void 0, void 0, function* () {
            const i = yield yt.getItemsAsync([d]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : p;
            this.lt(n) || (n = p),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield nt.setItemsAsync({ [d]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        ut() {
          jQuery(window).off("focus", this.G),
            document.removeEventListener("emoji-click", this.N),
            document.removeEventListener("keydown", this.H, !0),
            document.removeEventListener("click", this.W),
            window.removeEventListener("message", this.U),
            document.removeEventListener("webkitfullscreenchange", this.K.onFullScreen),
            document.removeEventListener("fullscreenchange", this.K.onFullScreen);
        }
        st() {
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
      class Wt {
        constructor(t) {
          (this.K = t),
            (this.gt = []),
            (this.Ft = 0),
            (this.vt = document.title),
            (this.yt = 0),
            (this.ft = new Map()),
            (this.Ct = new Map()),
            (this.Et = []),
            (this.wt = []),
            (this._t = ""),
            P("Message Controller");
        }
        bt(t, e, i, n) {
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
        jt(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.K.shouldUseVideoGIF();
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
        Bt(t, e, i) {
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
        At(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.K.shouldUseVideoGIF();
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
        kt(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.I = e.permId), (u.Qt = i), (u.It = n), (u.xt = e), (u.St = s);
        }
        reloadMessages() {
          this.K.queueMessageForFrame(At.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.gt));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.gt = t;
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
            (void 0 === i && (i = this.gt.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.ft.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.gt.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Tt(n, t);
          this.gt.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.K.queueMessageForFrame(At.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.Bt(o, u, s) : this.bt(o, r, u, s);
          this.kt(a, u, o, r, s), this.scrollToBottom(), this.Mt();
        }
        addGif(t, e) {
          void 0 === e && (e = this.gt.length);
          const i = this.gt.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Tt(i, t);
          this.gt.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.K.queueMessageForFrame(At.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.At(s, t, n) : this.jt(s, u, t, n);
          (o[0].Pt = !0), this.kt(o, t, s, u, n), C(100)().then(this.scrollToBottom.bind(this)), this.Mt();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.Ft > 0 && ((this.Ft = 0), (document.title = this.vt));
        }
        Mt() {
          (this.Ft += 1), (this.yt += 1), document.hasFocus() || (document.title = "(" + String(this.Ft) + ") " + this.vt);
        }
        getUserIconURL(t, e = "") {
          if (!this.ft.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.$t();
            this.ft.set(t, n), this.wt.push(n);
          }
          return this.ft.get(t);
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
          return this.Ct.has(t) || (this.Ct.set(t, e), this.Et.push(e)), J(this.Ct.get(t));
        }
        $t() {
          let t = chrome.runtime.getURL("img/icons/General/" + W[Math.floor(Math.random() * W.length)]);
          if (this.wt.length < Y.General.length)
            for (; this.wt.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + W[Math.floor(Math.random() * W.length)]);
          return t;
        }
        Vt(t) {
          const e = t[0],
            i = e.I;
          let n = e.Qt;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.Qt = n));
          const s = e.It;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.xt,
                o = e.St;
              let r;
              if (
                (e.Pt && s && "gifObject" in s && o && (r = "" == u ? this.At(n, s, o) : this.jt(n, u, s, o)),
                !e.Pt && s && "isSystemMessage" in s && o && (r = "" == u ? this.Bt(n, s, o) : this.bt(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.I = i), (e.Qt = n), (e.It = u), (e.xt = s), (e.St = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this._t = t), this.K.queueMessageForFrame(At.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this._t), jQuery(".user-icon img").attr("src", this._t);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.Vt(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.Vt(jQuery(e[t]));
          this.K.isChatFrameActive() && this.reloadMessages();
        }
        Rt(t) {
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
            let t = Y.General.filter((t) => !this.wt.includes(t));
            0 === t.length && (t = Y.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Rt(e);
          this.ft.set(t, i), this.wt.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = J(e);
          this.Ct.set(t, i), this.Et.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Rt(e);
          this.ft.set(t, n), this.wt.push(n), this.Ct.set(t, i), this.Et.push(i), this.renderSidebar();
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
          const t = new I(T, x, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          $.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.K.getSessionId() },
            i = new I(T, x, e);
          $.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new I(T, x, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              $.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.K.getSessionId() },
                i = new I(T, x, e);
              $.l(i);
            });
        }
      }
      class zt {
        constructor(t) {
          (this.Gt = !1), (this.Lt = !1), (this.Ot = !1), (this.K = t);
        }
        setupPresenceIndicator() {
          (this.Gt = !1), (this.Lt = !1), (this.Ot = !1), this.Ut();
        }
        Nt() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Gt = t), this.Ut();
        }
        setBufferingPresenceVisible(t) {
          (this.Lt = t), this.Ut();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Ot = t), this.Ut();
        }
        getWatchingAdsVisible() {
          return this.Ot;
        }
        Ht() {
          return this.Ot
            ? "People are watching ads..."
            : this.Gt && this.Lt
            ? "People are typing and buffering..."
            : this.Gt
            ? "People are typing..."
            : this.Lt
            ? "People are buffering..."
            : "";
        }
        Ut() {
          const t = this.Ht();
          this.Nt().text(t), this.K.queueMessageForFrame(At.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var Kt = function (t, e, i, n) {
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
      var Yt,
        Jt,
        qt = function (t, e, i, n) {
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
      class Xt extends class {
        constructor() {
          (this.Wt = !1),
            (this.zt = 1),
            (this.Kt = ""),
            (this.Yt = ""),
            (this.Jt = "0"),
            (this.qt = ""),
            (this.Xt = !0),
            (this.Zt = !1),
            (this.te = 0),
            (this.ee = []),
            (this.ie = new pt()),
            (this.ne = !1),
            (this.se = void 0),
            (this.ue = !0),
            (this.oe = this.re()),
            (this.ae = this.re()),
            (this.ce = !1),
            (this.De = !1),
            (this.he = []),
            (this.logEvent = (t) => {
              const e = new I(T, x, t);
              $.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              yt.getItemsAsync([u]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.de) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.ie.pushTask(() => nt.setItemsAsync({ [u]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                null != document.fullscreenElement
                  ? (this.logEvent({ name: "fullscreen_enter" }),
                    this.re() && ((this.oe = !1), this.setChatVisible(this.shouldChatBeVisible())))
                  : (this.logEvent({ name: "fullscreen_exit" }),
                    this.re() && ((this.oe = this.re()), jQuery("#chat-wrapper").hide(), this.setChatVisible(!1, !1), this.removeChat())),
                null === (t = this.de) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.le = !1),
            (this.pe = new Ht(this)),
            (this.ge = new zt(this)),
            (this.Fe = new Wt(this)),
            (this.ve = void 0),
            (this.ye = void 0),
            (this.fe = !1);
        }
        setPageControls(t) {
          this.de = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.de) || void 0 === t || t.enablePartyIcons(), null === (e = this.de) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return Kt(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.Xt = t), t && !this.Ce() && this.reloadChat();
          });
        }
        Ee(t, e) {
          const i = new I(T, x, { name: "error", action: { reason: e, description: t } });
          $.l(i);
        }
        getChatWindowVisible() {
          return this.ae;
        }
        setChatWindowActive(t) {
          this.oe = t;
        }
        isChatFrameActive() {
          return this.ue;
        }
        isPartyWindowsActive() {
          return this.oe;
        }
        shouldChatBeVisible() {
          return this.Xt;
        }
        incrementEmojiCount() {
          this.te++;
        }
        resetEmojiCount() {
          this.te = 0;
        }
        getEmojiCount() {
          return this.te;
        }
        setChatFrameReady(t) {
          this.ne && this.we(), (this.ne = !0), (this._e = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.ie.pushTask(() =>
            Kt(this, void 0, void 0, function* () {
              this.be(t, e);
            })
          );
        }
        be(t, e) {
          return Kt(this, void 0, void 0, function* () {
            const i = this._e,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: T };
            $.l(n);
          });
        }
        je() {
          var t;
          return Kt(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield E(() => this.ne && null != this._e, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.se && this.Be(this.se),
                null === (t = this.de) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.Ee("Sidewindow didn't load in time", t);
            }
          });
        }
        re() {
          return !1;
        }
        Ae() {
          return Kt(this, void 0, void 0, function* () {
            yield $.l(new k(T, x, Q.LOAD_CHAT_WINDOW)), console.log(this._e);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return Kt(this, void 0, void 0, function* () {
            yield $.l(new k(T, x, Q.RESET_CHAT_WINDOW)),
              console.log(this._e),
              (this.ae = !0),
              (this.Xt = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.ce && t && (this.resetIconListener(), null === (e = this.de) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return Kt(this, void 0, void 0, function* () {
            yield $.l(new k(T, x, Q.HIDE_CHAT_WINDOW)), (this.ae = !1), (this.Xt = !1);
          });
        }
        ke() {
          return Kt(this, void 0, void 0, function* () {
            this.Ae(), this.ie.pushTask(this.je.bind(this));
          });
        }
        loadInitData(t) {
          this.se = t;
        }
        Be(t) {
          var e;
          return Kt(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = Y), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield It.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(At.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(At.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(At.SET_USER_LIST, this.he),
              this.queueMessageForFrame(At.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Qe) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        we() {
          return Kt(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.se && (yield this.Be(this.se)), this.Qe)) {
              const t = this.Fe.getUserIconURL(this.Qe.permId, this.Qe.userIcon);
              this.queueMessageForFrame(At.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(At.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Ie() {
          return Kt(this, void 0, void 0, function* () {
            this.xe(),
              yield C(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.Se(),
              this.ge.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        Te(t) {
          this.pe.initWindowListeners(), this.re() && this.ke(), this.ie.pushTask(this.je.bind(this)), Gt(), (this.Qe = new ot(t));
          const e = this.Fe.getUserIconURL(this.Qe.permId, this.Qe.userIcon);
          this.Fe.setUserIconUrl(e),
            this.Fe.renderSidebar(),
            this.Ce() && this.removeChat(),
            (this.le = !0),
            this.Me(),
            this.re()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Ie(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return Kt(this, void 0, void 0, function* () {
            "true" !== (yield yt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.Fe.addYoutubePromo(), nt.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.se = t;
          const e = Object.assign({}, t);
          (e.iconMap = Y),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(At.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return Kt(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.Ce() ||
                this.isPartyWindowsActive() ||
                (this.xe(),
                yield C(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.Xt),
                this.addIconSelector(),
                this.Pe(),
                this.Se(),
                this.ge.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new ht(T, x, t);
          $.l(e);
        }
        Ce() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.Fe.clearUnreadCount();
        }
        $e() {
          return Kt(this, void 0, void 0, function* () {
            try {
              yield E(() => null !== document.querySelector("#chat-history") || this.oe || (this.ne && this.ue), 1e4)();
            } catch (t) {
              this.Ee("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.ie.pushTask(() =>
            Kt(this, void 0, void 0, function* () {
              yield this.$e(), this.Fe.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.ie.pushTask(() =>
            Kt(this, void 0, void 0, function* () {
              yield this.$e(), this.Fe.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.Fe.reloadMessages();
        }
        scrollToBottom() {
          this.Fe.scrollToBottom();
        }
        addReviewMessage() {
          this.Fe.addReviewMessage(), (this.fe = !0);
        }
        get showingReveiwMessage() {
          return this.fe;
        }
        set shouldReturnToVideo(t) {
          this.ce = t;
        }
        onBufferingMessage(t) {
          this.ie.pushTask(() =>
            Kt(this, void 0, void 0, function* () {
              yield this.$e(), this.ge.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.ie.pushTask(() =>
            Kt(this, void 0, void 0, function* () {
              yield this.$e(), this.ge.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.ie.pushTask(() =>
            Kt(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.$e(), this.ge.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.ge.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Qe) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Ve(this.Re(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.Fe.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Qe)) {
            const t = this.Fe.getUserIconURL(this.Qe.permId, this.Qe.userIcon);
            this.Fe.setUserIconUrl(t), this.Fe.renderSidebar();
          }
        }
        Se() {
          E(() => this.Ce(), 1e4)().then(() => {
            this.pe.startListening();
          });
        }
        Pe() {
          this.pe.stopListening(), this.Ge && (clearTimeout(this.Ge), (this.Zt = !1));
        }
        teardown() {
          (this.le = !1),
            (this.Yt = void 0),
            (this.Le = void 0),
            this.Pe(),
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
            this.ie.pushTask(() => nt.setItemsAsync({ [u]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return Kt(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.Fe.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(At.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new I(T, x, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          $.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new I(T, x, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          $.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new I(T, x, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          $.l(e), this.toggleReactions();
        }
        Me() {
          if (
            (P("Set Chat Html called"),
            (this.Oe = H()),
            (this.Oe = this.Oe.replace(/{EXTENSION_LOGO}/g, J(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Qe)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          this.Oe = this.Oe.replace(/{CHAT_URL}/g, `${c}?t=${Date.now()}`);
          for (const t of D) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.Oe = this.Oe.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.Oe = this.Oe.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.Oe = this.Oe.replace(/{USER_NICKNAME}/g, this.Qe.userNickname ? J(this.Qe.userNickname) : "Add a nickname")),
            (this.Oe = this.Oe.replace(/{USER_ICON}/g, this.Fe.getUserIconURL(this.Qe.permId, this.Qe.userIcon))),
            (this.Oe = this.Oe.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.Oe = this.Oe.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.Oe = this.Oe.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.Oe = this.Oe.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.Oe = this.Oe.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.Oe = this.Oe.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.Oe = this.Oe.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.Oe = this.Oe.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.Oe = this.Oe.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.De ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.Zt && jQuery("#chat-ad-holder").show(),
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
            (this.De = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.De = !1);
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
          if (null === (t = this.Ue) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.Ue.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.Kt = t;
        }
        setMessageForwarder(t) {
          this.Ue = t;
        }
        setSessionId(t) {
          this.Yt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(At.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(At.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.Fe.getUserIconURL(t.permId, e.userIcon),
                n = this.Fe.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.he = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(At.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.Le = t;
        }
        getSessionCreated() {
          return this.Le;
        }
        getSessionId() {
          return this.Yt;
        }
        getPartyUrl() {
          return this.Kt;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (P("userIconSelector button clicked: " + e),
            this.Qe &&
              (this.Qe.saveUserIcon(e),
              this.queueMessageForFrame(At.UPDATE_SETTINGS, { userSettings: this.Qe.userSettings }),
              this.Ve(this.Re(this.Qe.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Ve(t, e) {
          $.l(t).then(e);
        }
        Ne(t) {
          return new dt(T, x, { reactionType: t });
        }
        He(t) {
          return new lt(T, x, { gifObject: t });
        }
        We(t) {
          return new ct(T, x, { body: t });
        }
        ze(t) {
          return new at(T, x, { typing: t });
        }
        Re(t) {
          return new Dt(T, x, { userSettings: t });
        }
        Ke(t) {
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
              u = this.Ke(e),
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
          console.log(t), this.Ve(this.Ne(t));
          const e = new I(T, x, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          $.l(e);
          const i = new I(T, x, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          $.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.pe.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.Ee("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.ee.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Ve(this.He(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new I(T, x, e);
              $.l(i);
              const n = new I(T, x, { eventType: "gif-share", sessionId: this.getSessionId() });
              $.l(n);
            }),
              this.toggleGIFs();
          }
        }
        Ye(t) {
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
        Je(t) {
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
            this.ee.push(...t.results),
            (this.Jt = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.Ye(t) : this.Je(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.zt < 6 && this.qe(),
            setTimeout(() => {
              this.Wt = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return Kt(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Wt) t.preventDefault();
            else if ("0" !== this.Jt && e && this.zt < 6) {
              (this.zt += 1), (this.Wt = !0), t.preventDefault();
              const e = yield fetch(this.qt + `&pos=${this.Jt}`),
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
        Xe() {
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
        qe() {
          return Kt(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.Xe()), jQuery("#gif-results-right")[0].append(...this.Xe());
          });
        }
        logShare(t, e) {
          return Kt(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${o}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return Kt(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.zt = 1),
              (this.Wt = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.ee = []),
              this.qe();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.qt = `${o}/${u}${s}`);
            const r = yield fetch(`${o}/${u}${s}`),
              a = yield r.json();
            if (a.results && a.results.length > 0) this.loadGIFs(a);
            else if (!t) {
              const t = yield fetch(`${o}/trending_gifs?${s}`);
              this.qt = `${o}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.ye && clearTimeout(this.ye), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.ye = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        Ze(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.ve ? this.Ve(this.ze(!0)) : clearTimeout(this.ve),
              (this.ve = setTimeout(() => {
                (this.ve = void 0), this.Ve(this.ze(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.Ze(i)) {
              void 0 !== this.ve && (clearTimeout(this.ve), (this.ve = void 0), this.Ve(this.ze(!1))),
                e.prop("contenteditable", !1),
                this.Ve(this.We(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return Bt();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new I(T, x, t);
              $.l(n);
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
          const e = t.replace(g, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(g) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          P("saveChanges button clicked: " + e),
            e !== (null === (t = this.Qe) || void 0 === t ? void 0 : t.userNickname) &&
              this.Qe &&
              (this.Qe.saveUserNickname(e),
              this.queueMessageForFrame(At.UPDATE_SETTINGS, { userSettings: this.Qe.userSettings }),
              this.Ve(this.Re(this.Qe.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.le;
        }
        addIconSelector() {
          Object.keys(Y).forEach((t) => {
            if (q[t]()) {
              const e = Y[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.ti(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(g) || []).length,
            i = t.replace(g, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        ti(t, e, i) {
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
            (this.ei = t),
            (this.ii =
              "\n            #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n                position: absolute !important;\n            }\n\n            .fullscreen-class {\n                object-fit: contain;\n                user-select: text;\n                position: fixed !important;\n                top: 0px !important;\n                right: 0px !important;\n                bottom: 0px !important;\n                left: 0px !important;\n                box-sizing: border-box !important;\n                min-width: 0px !important;\n                max-width: none !important;\n                min-height: 0px !important;\n                max-height: none !important;\n                width: 100% !important;\n                height: 100% !important;\n                transform: none !important;\n                margin: 0px !important;\n                z-index: 999;\n            }\n    \n            .no-scroll {\n                height: 100%;\n                overflow: hidden;\n            }\n        ");
        }
        getReactionContainer() {
          return jQuery(Xt.MAIN_ROOT_CONTROL);
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        getVideoTitle() {
          var t;
          return qt(this, void 0, void 0, function* () {
            const e = document.querySelector(".WatchVideoPlayer__Metadata--title");
            if (e) return null !== (t = e.textContent) && void 0 !== t ? t : void 0;
          });
        }
        shouldAddReactionSpace() {
          return !1;
        }
        shouldShowReaction() {
          return !0;
        }
        shouldUseVideoGIF() {
          return !0;
        }
        xe() {
          this.Oe &&
            jQuery(Xt.MAIN_ROOT_CONTROL).after(
              (function (t, e = "") {
                return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                  "css/chat.css"
                )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
              })(this.Oe, this.ii)
            );
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return qt(this, void 0, void 0, function* () {
            i.setChatVisible.call(this, t, e),
              t
                ? (jQuery("#chat-wrapper").show(), jQuery(Xt.MAIN_ROOT_CONTROL).addClass(O))
                : (jQuery("#chat-wrapper").hide(), jQuery(Xt.MAIN_ROOT_CONTROL).removeClass(O));
          });
        }
      }
      (Xt.MAIN_ROOT_CONTROL = ".WatchVideoPlayer__Player"),
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
        })(Yt || (Yt = {}));
      class Zt extends rt {
        constructor(t, e, i) {
          super(t, e, st.GET_SESSION_DATA), (this.data = i);
        }
      }
      class te {
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
          $.addListener(this.ni);
        }
        teardown() {
          (this.ui = []), $.removeListener(this.ni);
        }
        si(t, e, i) {
          if (!this.ri(t)) return !1;
          return !!this.ai(t, e, i) || (i({}), !1);
        }
        ri(t) {
          return t.target === T;
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
      })(Jt || (Jt = {}));
      var ee,
        ie = function (t, e, i, n) {
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
      class ne {
        constructor(t, e) {
          (this.K = t), (this.de = e), P("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case Q.LOAD_SESSION: {
              const e = t;
              return this.ci(e.data), !1;
            }
            case Jt.ON_MESSAGE: {
              const e = t;
              return this.U(e), this.de.onChatMessage(), !1;
            }
            case Jt.ON_BUFFER: {
              const e = t;
              return this.Di(e), !1;
            }
            case Jt.ON_TYPING: {
              const e = t;
              return this.hi(e), !1;
            }
            case Jt.ON_WATCHING_ADS: {
              const e = t;
              return this.di(e), !1;
            }
            case Jt.UPDATE_SETTINGS: {
              const e = t;
              return this.li(e), !1;
            }
            case Jt.ON_REACTION: {
              const e = t;
              return this.pi(e), !1;
            }
            case Jt.ON_GIF: {
              const e = t;
              return this.gi(e), !1;
            }
            case Jt.USER_LIST: {
              const e = t;
              return this.Fi(e), !1;
            }
            case Jt.ON_WEB_RTC:
              return this.K.onWebRTC(t.data), !0;
            case Yt.SET_CHAT_VISIBLE: {
              const e = t;
              return this.vi(e.data), i(), !1;
            }
            case At.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.K.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case At.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case At.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.K.doUpdateSettings(e), i(), !0;
            }
            case At.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case At.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.K.setReactionsActive(e), i(), !0;
            }
            case At.RESET_VIEW:
              return this.K.resetChatWindow(!0), i(), !0;
            case At.ON_FOCUS:
              return this.K.onSidebarFocus(), i(), !0;
            case At.PREVIEW_REACTION: {
              const e = t.data;
              return this.K.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.K.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.K.teardown();
        }
        vi(t) {
          return ie(this, void 0, void 0, function* () {
            this.K.isPartyWindowsActive()
              ? t.visible
                ? yield this.K.resetChatWindow()
                : yield this.K.hideChatWindow()
              : (yield this.K.setChatVisible(t.visible), this.K.fixPageControls());
          });
        }
        ci(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${a}/join/${e}`;
          if (
            (this.K.loadInitData(t),
            this.K.setPartyUrl(i),
            this.K.setSessionId(e),
            this.K.Te(t.storageData),
            this.de.onInitChat(),
            this.K.setSessionCreated(t.isCreate),
            this.K.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.K.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.K.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.K.addGif(e) : this.K.addMessage(e, !0);
        }
        U(t) {
          this.K.addMessage(t.data);
        }
        pi(t) {
          this.K.showReaction(t.data);
        }
        gi(t) {
          this.K.addGif(t.data);
        }
        Di(t) {
          this.K.onBufferingMessage(t.data);
        }
        hi(t) {
          this.K.onTypingMessage(t.data);
        }
        di(t) {
          this.K.onWatchingAdsMessage(t.data);
        }
        li(t) {
          this.K.onUpdateSettingsMessage(t.data);
        }
        Fi(t) {
          this.K.loadUserList(t.data.userList), this.K.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(ee || (ee = {}));
      class se extends rt {
        constructor(t, e, i) {
          super(t, e, st.BROADCAST), (this.data = i);
        }
      }
      class ue extends A {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class oe extends ue {
        constructor(t, e) {
          super(t, e, ee.GET_SERVER_TIME);
        }
      }
      class re extends rt {
        constructor(t, e, i) {
          super(t, e, st.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class ae extends rt {
        constructor(t, e, i) {
          super(t, e, st.SET_BUFFERING), (this.data = i);
        }
      }
      class ce extends rt {
        constructor(t, e, i) {
          super(t, e, st.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const De = "PING",
        he = "SYNC",
        de = "BROADCAST";
      class le extends k {
        constructor(t, e, i) {
          super(t, e, Q.STAY_ALIVE), (this.data = i);
        }
      }
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
      const ge = new (class {
        getRedirectDataForTabAsync(t) {
          return pe(this, void 0, void 0, function* () {
            const e = (yield yt.getItemsAsync([l])).redirectDataMap,
              i = this.yi(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.mi(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return pe(this, void 0, void 0, function* () {
            const e = (yield yt.getItemsAsync([l])).redirectDataMap,
              i = this.yi(t);
            e && e[i] && delete e[i], yield nt.setItemsAsync({ [l]: e });
          });
        }
        yi(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return pe(this, void 0, void 0, function* () {
            const i = this.yi(e);
            let n = yield yt.getItemsAsync([l]);
            (n[i] = t), (n = this.fi(n)), yield nt.setItemsAsync({ [l]: n });
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
      Object.freeze(ge);
      const Fe = ge;
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
      class ye {
        constructor(e, i, n) {
          (this.Ci = []),
            (this.Ei = 0),
            (this.wi = 0),
            (this._i = []),
            (this.bi = !1),
            (this.Ot = !1),
            (this.g = !1),
            (this.ji = !1),
            (this.Bi = void 0),
            (this.Ai = () =>
              ve(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.Bi = !1);
                } catch (t) {
                  this.Bi = !0;
                }
              })),
            (this.ki = (t = !1, e = !1) =>
              ve(this, void 0, void 0, function* () {
                if (this.Qi) return;
                if (this.g) return void this.forceSync();
                if (!this.ji && !e) return;
                const i = yield this.Ii();
                if (yield this.xi(i.data, e)) yield this.Si(i);
                else if (t) {
                  if (yield this.Ti(e)) {
                    const t = yield this.Ii();
                    yield this.Si(t);
                  }
                }
              })),
            (this.Mi = () =>
              ve(this, void 0, void 0, function* () {
                if (
                  (this.Pi == t.PAUSED &&
                    this.$i &&
                    (clearInterval(this.$i),
                    (this.$i = setInterval(() => {
                      this.Vi();
                    }, 6e4))),
                  this.Ri())
                )
                  return;
                if ((yield this.ei.waitVideoDoneLoadingAsync(), this.Ri())) return;
                const e = yield this.ei.getStateAsync();
                this.Pi == t.PAUSED ? yield this.Gi(e) : this.Pi == t.PLAYING && (yield this.Li(e)), !1 === this.ji && (this.ji = !0);
              })),
            (this.ei = e),
            (this.K = i),
            (this.A = n),
            this.A.setMessageForwarder(this),
            (this.Oi = 0),
            (this.Qi = !1),
            (this.Pi = t.PAUSED),
            (this.Ui = 0),
            (this.Ni = 0),
            (this.Hi = 0),
            (this.Wi = this.ei.getStreamingServiceName()),
            P("Video forwarder"),
            this.Ai();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case Q.GET_VIDEO_DATA:
              return this.zi(i), !0;
            case Q.LOAD_SESSION: {
              const e = t;
              return this.Ki(e.data), !1;
            }
            case ee.UPDATE_SESSION: {
              const e = t;
              return this.Yi(e.data), !1;
            }
            case ee.NEXT_EPISODE: {
              const e = t;
              return this.Ji(e.data), !1;
            }
            case ee.REBOOT_SESSION: {
              const e = t;
              return this.qi(e.data, i), !0;
            }
            case ee.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case Jt.ON_WATCHING_ADS: {
              const e = t;
              return this.di(e), !1;
            }
            default:
              return !1;
          }
        }
        di(t) {
          t.data.anyoneWatchingAds && !this.Ot && (gt.pushTask(this.ei.doAdCheck.bind(this.ei)), this.forceSync()),
            (this.Ot = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.Xi;
        }
        set videoId(t) {
          this.Xi = t;
        }
        sendTeardown(t) {
          const e = new ht(T, x, t);
          $.l(e);
        }
        teardown() {
          (this.Yt = void 0),
            this.Zi && clearInterval(this.Zi),
            this.$i && clearInterval(this.$i),
            this.ei.pause(),
            gt.disable(),
            this.A.stopListening();
        }
        qi(t, e) {
          gt.resetTasks(), this.Xi == t.videoId && this.Yi(t), e(this.Xi == t.videoId);
          const i = new I(T, x, { eventType: "reboot", sessionId: this.Yt });
          $.l(i);
        }
        tryBroadcast(t = !1) {
          this.bi ||
            (this.g
              ? this.forceSync()
              : 0 != this.ei.uiEventsHappening || this.Qi || !this.Yt || gt.hasTaskInQueue(de) || gt.pushTask(() => this.ki(t), de));
        }
        setBuffering(t) {
          if (this.Yt) {
            const e = new ae(T, x, { buffering: t });
            $.l(e);
          }
        }
        isWatchingAds() {
          return this.bi;
        }
        setWatchingAds(t, e) {
          if (this.Yt) {
            this.bi = t;
            const i = new ce(T, x, { watchingAds: t, adDurationLeft: e });
            $.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return ve(this, void 0, void 0, function* () {
            if (this.Yt && t !== this.Xi && t !== this.tn) {
              (this.tn = t), (this.Qi = !0);
              const e = new re(T, x, { nextEpisode: t }),
                i = yield $.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.en(t));
            }
          });
        }
        en(t) {
          return ve(this, void 0, void 0, function* () {
            try {
              yield E(() => t == this.Xi, 1e4)(), (this.Qi = !1);
            } catch (t) {
              this.Ee("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: Mt };
              this.sendTeardown(e);
            }
          });
        }
        xi(i, n) {
          return ve(this, void 0, void 0, function* () {
            if (null == i.lastKnownTime || null == i.lastKnownTimeUpdatedAt || null == i.state) return !1;
            if (n && i.state === t.PAUSED && i.lastKnownTime < xt) return !1;
            const s = Math.abs(i.lastKnownTime - this.nn());
            if (i.state == this.Pi && s < xt) return !1;
            if (s >= xt) {
              const t = new I(T, x, { name: "video_seek", action: { source: "self" } });
              $.l(t), this.Wi == e.AMAZON || this.Wi == e.PARAMOUNT ? yield C(200)() : this.Wi == e.HBO_MAX && (yield C(500)());
            }
            return !0;
          });
        }
        Ii() {
          return ve(this, void 0, void 0, function* () {
            const t = yield this.ei.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.wi), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new se(T, x, t);
          });
        }
        forceSync() {
          gt.pushTask(this.Mi, he);
        }
        Ji(t) {
          return ve(this, void 0, void 0, function* () {
            (this.Oi = Date.now()), gt.pushTask(() => this.sn(t));
          });
        }
        sn(e) {
          return ve(this, void 0, void 0, function* () {
            try {
              P("Continue next episode called"),
                (this.Qi = !0),
                yield this.ei.jumpToNextEpisode(e),
                yield this.A.loadNewVideoAsync(e.videoId),
                P("After load new video"),
                this.A.reloadListeners(),
                this.Hi < this.Oi &&
                  ((this.Pi = t.PAUSED),
                  (this.Ui = 0),
                  (this.Ni = Date.now()),
                  P("Sending broadcast after next episode"),
                  gt.pushTask(() => this.ki(!0, !0), de),
                  gt.removeTask(he)),
                (this.Xi = e.videoId),
                (this.Qi = !1);
              const i = new I(T, x, { name: "video_start", action: { description: "video session has begun" } });
              $.l(i);
            } catch (t) {
              this.Ee("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return ve(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new le(T, x, { tabId: n, persist: t });
            $.l(s);
            const u = yield this.un();
            (u.date = Date.now()), Fe.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return ve(this, void 0, void 0, function* () {
            try {
              const i = yield this.un();
              i.date = Date.now();
              const n = yield this.on(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new le(T, x, { tabId: s, persist: !1 });
              yield $.l(u), yield Fe.storeRedirectDataForTabAsync(i, s), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.Ee("Failed to fix next episode.");
              const e = new ht(T, x, { showAlert: !0, alertModal: $t });
              $.l(e);
            }
          });
        }
        un() {
          return ve(this, void 0, void 0, function* () {
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
                      e(t), this.Ee("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.Yt, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        on(t) {
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
        Yi(t) {
          (this.Hi = Date.now()), gt.pushTask(this.rn(t).bind(this));
        }
        rn(e) {
          if (e.state === t.PAUSED && this.Pi === t.PLAYING) {
            this.Vi();
            const t = new I(T, x, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            $.l(t);
          } else if (e.state === t.PLAYING && this.Pi === t.PAUSED) {
            const t = new I(T, x, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            $.l(t), this.Vi();
          }
          return (this.Pi = e.state), (this.Ui = e.lastKnownTime), (this.Ni = e.lastKnownTimeUpdatedAt), this.Mi;
        }
        zi(t) {
          var e;
          return ve(this, void 0, void 0, function* () {
            try {
              const e = yield this.ei.getVideoDataAsync(),
                i = yield this.ei.getStateAsync();
              (e.is_player_fullscreen = null !== document.fullscreenElement),
                (e.is_chat_visible = this.K.getChatVisible()),
                (e.is_adblock_enabled = this.Bi),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.Ui),
                t(e);
            } catch (i) {
              this.Ee(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        Ee(t) {
          const e = new I(T, x, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          $.l(e);
        }
        Ti(t) {
          return ve(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  ve(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.Ii();
                      (yield this.xi(i.data, t))
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
        Si(e) {
          return ve(this, void 0, void 0, function* () {
            if (this.Qi || this.bi) return;
            const i = this.Pi;
            if (e.data.bufferingState) {
              (e.data.state = t.PAUSED), yield $.l(e, 1e3), yield this.ei.waitVideoDoneLoadingAsync();
              const n = yield this.Ii();
              (n.data.bufferingState = !0), i == t.PLAYING && (n.data.state = t.PLAYING), yield $.l(n, 1e3);
            } else yield $.l(e, 1e3);
          });
        }
        Ki(t) {
          return ve(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.Yt = e.sessionId),
              (this.Pi = e.state),
              (this.Ui = Number(e.lastKnownTime)),
              (this.Ni = Number(e.lastKnownTimeUpdatedAt)),
              (this.Xi = e.videoId),
              (this.Ot = !1),
              "true" == e.controlLock && (this.g = !0),
              t.isCreate ? ((this.ji = !0), gt.pushTask(this.ki.bind(this), de)) : this.forceSync();
            const i = new I(T, x, { name: "video_start", action: { description: "video session has begun" } });
            $.l(i), this.A.startListening(), this.an();
          });
        }
        cn() {
          return new Promise((t) => {
            const e = new oe(T, x),
              i = Date.now();
            $.l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (w(this.Ci, e - i, 5), (this.Ei = _(this.Ci)), w(this._i, e - Math.round(this.Ei / 2) - n, 5), (this.wi = _(this._i)));
                }
              })
              .catch((t) => {
                P(t), this.Ee(t);
              }),
              t();
          });
        }
        Vi() {
          const t = new I(T, x, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          $.l(t);
        }
        an() {
          this.Zi && clearInterval(this.Zi),
            this.$i && clearInterval(this.$i),
            (this.Zi = setInterval(() => {
              gt.hasTaskInQueue(he) || gt.pushTask(this.Mi, he);
            }, 5e3)),
            (this.$i = setInterval(() => {
              this.Vi();
            }, 6e4)),
            (this.Dn = setInterval(() => {
              gt.hasTaskInQueue(De) || gt.pushTask(this.cn.bind(this), De);
            }, 12500)),
            this.cn();
        }
        Ri() {
          return !this.Yt || this.ei.uiEventsHappening > 0 || this.bi || this.Qi || !this.A.shouldSync();
        }
        Gi(t) {
          return ve(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== n.PAUSED && (yield this.ei.pause()), Math.abs(this.Ui - i) > 2500)) {
              yield this.ei.setCurrentTime(this.Ui);
              const t = new I(T, x, { name: "video_seek", action: { source: "another user" } });
              $.l(t);
            }
          });
        }
        Li(t) {
          return ve(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              s = this.nn();
            if ((e == n.PAUSED && (yield this.ei.play()), Math.abs(s - i) > 2500)) {
              yield this.ei.setCurrentTime(s), yield this.ei.play();
              const t = new I(T, x, { name: "video_seek", action: { source: "another user" } });
              $.l(t);
            }
          });
        }
        hn() {
          return this.Pi === t.PLAYING ? Date.now() - (this.Ni + this.wi) : 0;
        }
        nn() {
          return this.Ui + this.hn();
        }
        get changingVideo() {
          return this.Qi;
        }
        set changingVideo(t) {
          this.Qi = t;
        }
      }
      i(5640);
      var me = function (t, e, i, n) {
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
      var fe = function (t, e, i, n) {
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
      var Ce = function (t, e, i, n) {
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
      class Ee extends class {
        constructor(t) {
          (this.ei = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return fe(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return fe(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return fe(this, void 0, void 0, function* () {
            yield null === (t = this.Ue) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.dn();
        }
        stopListening() {
          this.ln();
        }
        dn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            fe(this, void 0, void 0, function* () {
              this.pn(), this.ei.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              fe(this, void 0, void 0, function* () {
                this.pn(), this.ei.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        ln() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        gn() {
          var t;
          null === (t = this.Ue) || void 0 === t || t.tryBroadcast(!1);
        }
        pn() {
          var t;
          console.log("Going to wait for change"), null === (t = this.Ue) || void 0 === t || t.tryBroadcast(!0);
        }
        Fn() {
          var t;
          null === (t = this.Ue) || void 0 === t || t.setBuffering(!0);
        }
        vn(t) {
          var e;
          null === (e = this.Ue) || void 0 === e || e.setWatchingAds(!0, t);
        }
        yn() {
          var t, e;
          null === (t = this.Ue) || void 0 === t || t.setWatchingAds(!1), null === (e = this.Ue) || void 0 === e || e.forceSync();
        }
        mn() {
          var t;
          null === (t = this.Ue) || void 0 === t || t.setBuffering(!1);
        }
        Cn(t) {
          var e;
          null === (e = this.Ue) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        En(t) {
          var e;
          null === (e = this.Ue) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.Ue = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e, i) {
          var n;
          super(t),
            (this.wn = this.gn.bind(this)),
            (this._n = this.bn.bind(this)),
            (this.ei = t),
            this.ei.setVideoEventListener(this),
            (this.K = e),
            (this.de = i),
            (this.jn = this.ei.onNode.bind(this.ei)),
            (this.Bn = this.onEventNode.bind(this)),
            window.addEventListener("message", this.jn, !1),
            window.addEventListener("message", this.Bn, !1),
            (null === (n = window.teleparty) || void 0 === n ? void 0 : n.replaceScriptLoaded) ||
              (console.log("injecting replace script"),
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""),
                  (e.textContent = t),
                  (document.head || document.documentElement).appendChild(e),
                  e.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              ));
        }
        onVideUpdateAsync() {
          return Ce(this, void 0, void 0, function* () {
            this.gn();
          });
        }
        onEventNode(t) {
          const e = t.data;
          "videoLoadStart" == e.type && console.log("Received Video Data"),
            "onUserInteraction" == e.type && this.onVideUpdateAsync(),
            "alterPageControls" == e.type && (this.de.isMenuVisibile = e.menuVisible),
            "onFullscreen" == e.type && this.onFullScreen(),
            "exitFullscreen" == e.type && this.exitFullScreen();
        }
        onFullScreen() {
          const t = ".WatchVideoPlayer__Wrapper",
            e = "fullscreen-class";
          if (jQuery(t).hasClass(e)) {
            jQuery(t).removeClass(e), jQuery("body").removeClass(U);
            const i = new k(T, x, Q.MAX_WINDOW);
            $.l(i), this.K.logEvent({ name: "fullscreen_exit" });
          } else {
            jQuery(t).addClass(e), jQuery("body").addClass(U), this.K.setChatVisible(this.K.getChatVisible());
            const i = new k(T, x, Q.FULLSCREEN_WINDOW);
            $.l(i),
              this.K.logEvent({ name: "fullscreen_enter" }),
              this.K.setChatWindowActive(!1),
              this.K.setChatVisible(this.K.shouldChatBeVisible());
          }
        }
        exitFullScreen() {
          const t = ".WatchVideoPlayer__Wrapper",
            e = "fullscreen-class";
          if (jQuery(t).hasClass(e)) {
            jQuery(t).removeClass(e), jQuery("body").removeClass(U);
            const i = new k(T, x, Q.MAX_WINDOW);
            $.l(i), this.K.logEvent({ name: "fullscreen_exit" });
          }
        }
        bn(t) {
          t.source == window &&
            ("FROM_PAGE_POP" !== t.data.type
              ? t.data.type && "FROM_PAGE" == t.data.type && (console.log("On replace"), this.onVideoLoadStart())
              : this.En(Lt));
        }
        onVideoLoadStart() {
          var t, e, i, n;
          return Ce(this, void 0, void 0, function* () {
            if (m(new URL(window.location.href)))
              try {
                if (null === (t = this.Ue) || void 0 === t ? void 0 : t.changingVideo) return;
                this.Ue && (this.Ue.changingVideo = !0);
                const s = B.getVideoId(new URL(window.location.href));
                if (s == (null === (e = this.Ue) || void 0 === e ? void 0 : e.videoId))
                  return void (this.Ue && (this.Ue.changingVideo = !1));
                s &&
                  s != (null === (i = this.Ue) || void 0 === i ? void 0 : i.videoId) &&
                  (null === (n = this.Ue) || void 0 === n || n.persistExtension(!1), this.Cn(s));
              } catch (t) {
                console.log(t);
              }
            else this.En(Lt);
          });
        }
        startListening() {
          if ((super.startListening(), this.ei._("startListeningVideo"), !this.ei.isPlusVideo())) {
            this.onVideoLoadStart();
            const t = this.ei.getVideoElement();
            t &&
              (this.ei._("startListeningVideo", null, !0),
              t.addEventListener("play", this.wn),
              t.addEventListener("pause", this.wn),
              t.addEventListener("seeking", this.wn),
              t.addEventListener("loadstart", this.onVideoLoadStart));
          }
          window.addEventListener("message", this._n, !1);
        }
        stopListening() {
          if ((super.stopListening(), this.ei._("stopListeningVideo"), !this.ei.isPlusVideo())) {
            const t = this.ei.getVideoElement();
            t &&
              (t.removeEventListener("play", this.wn),
              t.removeEventListener("pause", this.wn),
              t.removeEventListener("seeking", this.wn),
              t.removeEventListener("loadstart", this.onVideoLoadStart));
          }
          window.removeEventListener("message", this._n, !1);
        }
        reloadListeners() {
          this.stopListening(), this.startListening();
        }
        loadNewVideoAsync(t) {
          return Ce(this, void 0, void 0, function* () {
            const e = performance.now(),
              i = yield this.ei.getEspnVideoInformation();
            yield new Promise((n, s) => {
              const u = setInterval(() => {
                if ((null == i ? void 0 : i.videoId) === t) {
                  const t = this.ei.getVideoElement();
                  if (t instanceof Element && t.src) return clearInterval(u), void n();
                }
                performance.now() - e >= 2e4 && (clearInterval(u), s(new Error("Could not load new video in time.")));
              }, 100);
            }),
              yield C(1200)(),
              yield this.ei.waitVideoDoneLoadingAsync(),
              this.K.setChatVisible(this.K.shouldChatBeVisible());
          });
        }
      }
      var we = i(4296),
        _e = i.n(we);
      class be extends A {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class je extends be {
        constructor(t, e, i) {
          super(t, e, Yt.CREATE_SESSION), (this.data = i);
        }
      }
      const Be = new (class extends F {
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
      Object.freeze(Be);
      const Ae = Be;
      const ke = new (class extends F {
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
      Object.freeze(ke);
      const Qe = ke;
      const Ie = new (class extends F {
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
      Object.freeze(Ie);
      const xe = Ie;
      const Se = new (class extends F {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== f(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + f(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return f(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", e.HBO_MAX, !1);
      Object.freeze(Se);
      const Te = Se;
      const Me = new (class extends F {
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
      Object.freeze(Me);
      const Pe = Me;
      const $e = new (class extends F {
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
      Object.freeze($e);
      const Ve = $e;
      const Re = new (class extends F {
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
      Object.freeze(Re);
      const Ge = Re;
      const Le = new (class extends F {
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
      Object.freeze(Le);
      const Oe = Le;
      const Ue = new (class extends F {
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
      Object.freeze(Ue);
      const Ne = Ue;
      const He = new (class extends F {
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
      Object.freeze(He);
      const We = He;
      const ze = new (class extends F {
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
      Object.freeze(ze);
      const Ke = ze;
      const Ye = new (class extends F {
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
      Object.freeze(Ye);
      const Je = Ye;
      const qe = new (class extends F {
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
      Object.freeze(qe);
      const Xe = qe;
      const Ze = new (class extends F {
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
      Object.freeze(Ze);
      const ti = Ze;
      const ei = new (class extends F {
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
      Object.freeze(ei);
      const ii = ei;
      const ni = new (class extends F {
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
      Object.freeze(ni);
      const si = ni;
      const ui = new (class extends F {
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
      Object.freeze(ui);
      const oi = ui;
      const ri = new (class extends F {
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
      Object.freeze(ri);
      const ai = ri;
      const ci = new (class extends F {
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
      Object.freeze(ci);
      const Di = ci;
      const hi = new (class extends F {
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
      Object.freeze(hi);
      const di = hi;
      class li {
        constructor(t, e) {
          var i;
          (this.isBrowsing = !1), (this.id = e), this.videoId, (this.url = t);
          const n = [Ae, Qe, xe, Te, Pe, Ge, Ve, B, Oe, Ne, We, Xe, Je, Ke, ii, ti, si, oi, Di, di, ai];
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
      class pi extends be {
        constructor(t, e, i) {
          super(t, e, Yt.RE_INJECT), (this.data = i);
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
        vi = function (t, e, i, n) {
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
      class yi extends class {
        constructor(t) {
          var e, i, n;
          (this.An = !1),
            (this.kn = !1),
            (this.Qn = !1),
            (this.In = 0),
            (this.xn = !1),
            (this.Sn = !1),
            (this.Tn = !1),
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
        Rn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.Qn ? "Only I have control" : "Everyone has control"),
            this.Qn
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        Gn() {
          this.kn || ((this.Qn = !this.Qn), this.Rn());
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
                jQuery("#tp-chat-button .tooltiptext").text(`${this.In} unread ${1 == this.In ? "message" : "messages"}`),
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
            (this.In++,
            this.Ln(),
            (this.xn = !0),
            this.Mn(),
            C(1e3)().then(() => {
              this.xn = !1;
            }));
        }
        teardown() {
          this.On(), this.Pn(), this.Un && clearInterval(this.Un);
        }
        Nn() {
          var t;
          return gi(this, void 0, void 0, function* () {
            if (this.kn || this.Vn.inSession) return;
            if ((this.Hn(), (this.kn = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new pi(M, x, { extensionTabData: this.$n });
              try {
                yield $.l(t);
              } catch (t) {
                return console.log(t), this.Wn(), this.Ee(t), this.zn(tt), void (this.kn = !1);
              }
            }
            console.log("Sending create");
            const e = this.Kn();
            try {
              const t = yield $.l(e);
              t.error ? (this.zn(t.error.message), this.Ee(t.error.message)) : ((this.kn = !1), this.Yn(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.zn(tt), this.Ee(t);
            }
            this.Wn(), (this.kn = !1);
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
        Ee(t) {
          const e = new I(S, x, { name: "error", action: { description: "an error has occured", reason: t } });
          $.l(e);
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
          this.xn || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Mn() {
          return gi(this, void 0, void 0, function* () {
            if (!this.Sn && (this.Tn || this.Vn.inSession)) {
              this.Sn = !0;
              try {
                yield this.addTpIcon(),
                  this.Vn.inSession ? this.enablePartyIcons() : this.On(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.Sn = !1;
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
            if ((this.Tn || this.Vn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.Jn(_e()),
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
          jQuery("#tp-control-lock-button").click(this.Gn.bind(this)),
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
          const t = new ht(M, x, Lt);
          $.l(t), this.Pn();
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
            (this.In = 0),
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
          return new je(M, x, this.ss());
        }
        ss() {
          return { createSettings: { controlLock: this.Qn }, extensionTabData: this.$n, source: "pc" };
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
        getControlsRoot() {
          return vi(this, void 0, void 0, function* () {
            return jQuery(".WatchVideoPlayer__Wrapper");
          });
        }
      }
      class mi extends class {
        constructor(t, e, i, n) {
          (this.K = t),
            (this.ei = e),
            (this.A = i),
            (this.de = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.K), console.log("Resetting Chat Api for old controls")),
            (this.us = new ne(this.K, this.de)),
            (this.Ue = new ye(this.ei, this.K, this.A)),
            (this.os = !1),
            (this.rs = !1),
            (this.fe = !1),
            (this.ni = new te()),
            this.ni.addMessageListener(this.Ue),
            this.ni.addMessageListener(this.us),
            this.ni.addMessageListener(this),
            (this.cs = !1),
            this.Ds();
        }
        hs() {
          return me(this, void 0, void 0, function* () {
            yield this.de.addTpIcon(), this.de.startEventListener();
          });
        }
        loadBrowseButton() {
          return me(this, void 0, void 0, function* () {
            yield this.de.addTpIcon(), this.de.startEventListener();
          });
        }
        Ds() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.K.inSession, alertModal: Vt };
            this.ds(t);
          }),
            t.onMessage.addListener(() => {
              P("Got background script"), (this.cs = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == T) {
            if (t.type === Yt.IS_CONTENT_SCRIPT_READY) {
              if (this.os) {
                i({ ready: !0 });
              } else this.rs || ((this.rs = !0), this.ls().then(i));
              return !0;
            }
            if (t.type === Yt.GET_INIT_DATA) {
              return i(this.ps()), !0;
            }
            if (t.type === Yt.DISCONNECT && t.sender == S) {
              const t = new ht(T, x, Lt);
              $.l(t), i();
            } else {
              if (t.type == Q.TEARDOWN) {
                const e = t;
                return this.ds(e.data), i(), !0;
              }
              t.type === Q.ON_NOTIF && this.gs();
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
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.K.getPartyUrl();
            Rt(t.alertModal, i);
          }
          this.de.teardown(), this.Ue.teardown(), this.us.teardown(), this.ni.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new I(T, x, s);
          $.l(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        Ee(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new I(T, x, { name: "error", action: { reason: t } });
          $.l(e);
        }
        Fs() {
          return me(this, void 0, void 0, function* () {
            return E(() => this.cs, 5e3)();
          });
        }
        ls() {
          return me(this, void 0, void 0, function* () {
            try {
              yield this.Fs();
              const t = yield this.vs();
              return this.hs(), t;
            } catch (t) {
              const e = { message: Z, showButton: !1 };
              return this.Ee(Z), { ready: !1, error: e };
            } finally {
              this.rs = !1;
            }
          });
        }
        vs() {
          return me(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.ei.waitVideoApiReadyAsync();
              const e = yield this.ys();
              e && e.error
                ? (P("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.os = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.fe = !0),
                  (this.os = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.Ee(e.message);
            }
            return { ready: this.os, error: t };
          });
        }
        ps() {
          return {
            inSession: this.K.inSession,
            isChatVisible: this.K.isPartyWindowsActive() ? this.K.getChatWindowVisible() : this.K.getChatVisible(),
            partyUrl: this.K.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.K.isPartyWindowsActive()
          };
        }
        ys() {
          return me(this, void 0, void 0, function* () {
            const t = yield this.fs();
            return $.l(t);
          });
        }
        fs() {
          return me(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.ei.getVideoDataAsync()).videoId };
            return new Zt(T, x, t);
          });
        }
      } {
        constructor() {
          const t = new G(),
            e = new Xt(t);
          let i;
          i = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new yi(e);
          super(e, t, new Ee(t, e, i), i), P("Espn Content Script");
        }
      }
      (function () {
        var t;
        return !window.teleparty || !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected);
      })() &&
        (window == top
          ? (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
            (window.teleparty.contentScriptInjected = !0),
            new mi(),
            P("Initialized content script"),
            b(chrome.extension.getURL("content_scripts/espn/espn_injected_bundled.js")))
          : (null === (Fi = window.teleparty) || void 0 === Fi ? void 0 : Fi.injectScriptLoaded) ||
            b(chrome.extension.getURL("content_scripts/espn/espn_injected_bundled.js")));
    })();
})();
