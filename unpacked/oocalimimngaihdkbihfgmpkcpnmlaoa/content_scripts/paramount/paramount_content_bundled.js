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
          '<div id="chat-wrapper" tpInjected>\n    <iframe style="display: none;" id="tpChatFrame" allow="autoplay; clipboard-read; clipboard-write; payment; camera; microphone;" src="{CHAT_URL}">\n\n    </iframe>\n</div>';
      },
      4296: (t) => {
        t.exports =
          '<style tpInjected>\n    .hidden {\n    display: none !important;\n}   \n</style>\n<div class="hidden" id="tpIconContainer" tpInjected>\n    <div class="hidden" id="tp-buttons-container">\n        <button id="tp-icon-container">\n            <img id="tp-icon-white" src=\'{EXTENSION_LOGO_GRADIENT}\' />\n            <img id="play-chat-icon" class="hidden" src=\'{PLAY_CHAT}\' />\n            <span class="tooltiptext extension-txt" style="width: 120px;">Open Teleparty</span>\n            <div class="hidden" id="tp-message-indicator"></div>\n        </button>\n        <div class="tp-seperator"></div>\n        \x3c!-- <button class="tp-control-button" id="tp-friends-button">\n            <img id="tp-friends-image" src=\'{FRIENDS_IMAGE}\' />\n            <span class="tooltiptext extension-txt" style="width: 120px;"> Friends List</span>\n        </button> --\x3e\n        <div class="hidden" id="tp-party-active">\n            <button class="tp-control-button" id="tp-link-button">\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_ACTIVE_IMAGE}\' />\n                <span class="tooltiptext extension-txt" style="width: 120px;">Copy link</span>\n            </button>\n            <button class="tp-control-button" id="tp-chat-button">\n                <img id="tp-chat-reset" class="tp-center-image hidden" data-tp-id="overlay-reset_chat" src=\'{RESET_CHAT_IMAGE}\' />\n                <img id="tp-chat-hidden" class="tp-button-image tp-center-image" src=\'{CHAT_HIDDEN_IMAGE}\' />\n                <img id="tp-chat-gray" class="hidden tp-button-image tp-center-image" src=\'{CHAT_GRAY_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-show_chat" src=\'{CHAT_ACTIVE_IMAGE}\' />\n                <div class="hidden" id="tp-message-indicator"></div>\n                <span class="tooltiptext extension-txt" style="width: 120px;">Show chat</span>\n            </button>\n            <button class="tp-control-button" id="tp-disconnect-button">\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-leave_party"\n                    src=\'{DISCONNECT_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-leave_party" src=\'{DISCONNECT_IMAGE}\' />\n                <span class="tooltiptext extension-txt" style="width: 120px;">Leave Party</span>\n            </button>\n        </div>\n    </div>\n    \x3c!-- <button class="hidden tp-control-button" id="tp-chat-close-button">\n        <img id="tp-start-image" data-tp-id="overlay-hide_chat" src=\'{ARROW_RIGHT}\' />\n        <span class="tooltiptext extension-txt" style="width: 100px;">Hide chat</span>\n    </button> --\x3e\n    <div id="tp-error-box" class="hidden">\n        <p class="extension-txt-indicator" id="tp-controls-error-text">\n            Failed to connect to background script. Please Try again later\n        </p>\n    </div>\n</div>';
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
        s = "An unexpected error occured. Please refresh the page and try again.",
        u = "Video element not found.";
      var o, r;
      !(function (t) {
        (t.NETFLIX = "Netflix"),
          (t.HULU = "Hulu"),
          (t.DISNEY_PLUS = "Disney"),
          (t.DISNEY_PLUS_MENA = "DisneyMena"),
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
          (t.CRAVE = "Crave"),
          (t.SLING = "slingtv");
      })(o || (o = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(r || (r = {}));
      const a = chrome.runtime.id,
        c = "reactionContainerOpen",
        D = "https://sessions.teleparty.com",
        h = "https://redirect.teleparty.com",
        d = h,
        l = `${h}/sidebar`,
        p = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        g = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        F = "recentlyUsedEmojiMap",
        v = "redirectDataMap",
        y = [
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
        m =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      class f {
        constructor(t, e, i, n, s, u = []) {
          (this.requiredPermissions = t),
            (this.serverName = i),
            (this.name = n),
            (this.contentScripts = e),
            (this.syncFromEnd = s),
            (this.browseScripts = u);
        }
        urlWithSessionId(t) {
          return `${d}/join/${t}`;
        }
      }
      var C;
      !(function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(C || (C = {}));
      var E;
      function w(t) {
        return (
          t.hostname.includes(".paramountplus.") &&
          (t.pathname.includes("/video") || t.pathname.includes("/stream") || t.pathname.includes("/movie"))
        );
      }
      function _(t) {
        return t.includes("urn:hbo:feature")
          ? C.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? C.EPISODE
          : t.includes("urn:hbo:extra")
          ? C.EXTRA
          : C.OTHER;
      }
      function b(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function j(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : b(i)().then(s);
            };
          return s();
        };
      }
      function B(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function A(t) {
        var e;
        const i = t.split(":");
        let n = 0,
          s = 1;
        for (; i.length > 0; ) (n += s * parseInt(null !== (e = i.pop()) && void 0 !== e ? e : "0", 10)), (s *= 60);
        return n;
      }
      function k(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share");
      })(E || (E = {}));
      const Q = new (class extends f {
        isBrowsing(t) {
          return t.hostname.includes(".paramountplus.");
        }
        isValidUrl(t) {
          return w(t);
        }
        getVideoId(t) {
          var e;
          const i = null !== (e = t.pathname.match(/video\/([^/]+)/)) && void 0 !== e ? e : t.pathname.match(/stream\/([^/]+)/);
          return i && i.length > 1 ? i[1] : void 0;
        }
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", o.PARAMOUNT, !1);
      Object.freeze(Q);
      const I = Q;
      class x {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class S extends x {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      var T;
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
          (t.GET_EXPERIMENT_FLAG = "getExpFlag"),
          (t.USER_LIST = "userList"),
          (t.USER_AUTHENTICATED = "userAuthenticated"),
          (t.BLOCK_CSP = "blockCSP");
      })(T || (T = {}));
      class M extends S {
        constructor(t, e, i) {
          super(t, e, T.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const P = "Service_Background",
        $ = "Popup",
        R = "Content_Script",
        L = "Page_Controls";
      var V = console.log.bind(window.console),
        G = function (t, e, i, n) {
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
      const U = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t), chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, e, i = 2e4) {
          return G(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              const u = setTimeout(() => {
                console.log("send timeout"), s("Message Timeout");
              }, i);
              try {
                chrome.tabs.sendMessage(e, t, (e) => {
                  chrome.runtime.lastError && V(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
                });
              } catch (t) {
                clearTimeout(u), s(t);
              }
            });
          });
        }
        l(t, e) {
          return G(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              let s = null;
              e &&
                (s = setTimeout(() => {
                  n({ error: "Send Message Timeout" });
                }, e));
              try {
                chrome.runtime.sendMessage(a, t, (e) => {
                  chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
                });
              } catch (t) {
                s && clearTimeout(s), n(t);
              }
            });
          });
        }
      })();
      var O = function (t, e, i, n) {
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
      var N = function (t, e, i, n) {
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
      class H extends class {
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
          const i = new M(R, P, { name: "video_error", action: { description: t, reason: e } });
          U.l(i);
        }
        doAdCheck() {
          return O(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(), (this.F = 6e4), (this.v = 0), (this.p = 0);
        }
        waitVideoApiReadyAsync() {
          return N(this, void 0, void 0, function* () {
            yield j(() => {
              const t = this.getVideoElement();
              return !!t && t.readyState >= 4;
            }, 1 / 0)();
          });
        }
        waitVideoDoneLoadingAsync() {
          return N(this, void 0, void 0, function* () {
            yield j(() => this.m() !== r.LOADING && this.m() !== r.AD_PLAYING, 1 / 0)();
          });
        }
        getStreamingServiceName() {
          return o.PARAMOUNT;
        }
        setVideoEventListener(t) {
          this.C = t;
        }
        setCurrentTime(t) {
          return N(this, void 0, void 0, function* () {
            const e = this.getVideoElement();
            e && (e.currentTime = t / 1e3 + this._());
          });
        }
        j() {
          const t = this.getVideoElement();
          if (t) {
            const e = this._(),
              i = Math.max(0, t.currentTime - e);
            return Math.floor(1e3 * i);
          }
          return 0;
        }
        getStateAsync() {
          return new Promise((t, e) => {
            const i = this.j();
            t({ playbackState: this.m(), playbackPositionMilliseconds: i });
          });
        }
        isWatchingAd() {
          return !!(document.querySelector(".videoAdUiClickElement") || this.B() < 6e4);
        }
        m() {
          const t = this.getVideoElement();
          let e;
          return document.querySelector(".videoAdUiClickElement") || this.B() < 6e4
            ? r.AD_PLAYING
            : ((e = t && "" !== t.src ? (t.readyState < 4 ? r.LOADING : t.paused ? r.PAUSED : r.PLAYING) : r.NOT_READY), e);
        }
        _() {
          const t = this.getVideoElement();
          if (t) {
            const e = document.querySelector(".controls-progress-time");
            if (e instanceof Node) {
              const i = A(e.textContent);
              let n = Math.floor(t.currentTime - i);
              const s = Math.floor(t.duration - this.B() / 1e3);
              return (n = n >= 0 && n <= s && n <= 100 ? n : this.v), (this.v = n), n;
            }
          }
          return 0;
        }
        B() {
          try {
            const t = document.querySelector(".controls-duration");
            if (t instanceof Node) {
              const e = A(t.textContent);
              this.F = 1e3 * e;
            }
          } catch (t) {
            this.logError("Unable to get duration of episode", t);
          }
          return this.F;
        }
        getUpdateSessionDataAsync() {
          return N(this, void 0, void 0, function* () {
            const e = yield this.getStateAsync();
            let i = this.j();
            i < 0 && (i = 0);
            const n = Date.now();
            return {
              state: e.playbackState === r.PLAYING ? t.PLAYING : t.PAUSED,
              lastKnownTime: i,
              lastKnownTimeUpdatedAt: n,
              bufferingState: this.m() == r.LOADING
            };
          });
        }
        A() {
          let t;
          return (
            (t =
              this.k() === C.EPISODE
                ? document.querySelector(".skin-metadata-manager-header")
                : document.querySelector(".skin-metadata-manager-body")),
            t ? t.innerText : null
          );
        }
        I() {
          var t;
          return null !== (t = I.getVideoId(new URL(window.location.href))) && void 0 !== t ? t : "";
        }
        S() {
          var t, e, i;
          const n = null !== (t = this.A()) && void 0 !== t ? t : void 0,
            s = document.querySelector(".skin-metadata-manager-body"),
            u = {};
          if (((u.title = n), s && s.textContent && this.k() == C.EPISODE)) {
            const t = s.innerText,
              n = null !== (e = t.match(/S(\d*)/)) && void 0 !== e ? e : [""],
              o = null !== (i = t.match(/E(\d*)/)) && void 0 !== i ? i : [""];
            (u.episodeNum = Number(o[1])), (u.seasonNum = Number(n[1]));
          }
          return u;
        }
        k() {
          const t = new URL(window.location.href).pathname.match(/\/(\w*)/);
          if (t) {
            if ("shows" === t[1]) return C.EPISODE;
            if ("movies" === t[1]) return C.FEATURE;
            if ("live-video" === t[1]) return C.LIVE;
          }
          return C.OTHER;
        }
        getVideoDataAsync() {
          var t, e;
          const i = this.k(),
            n = null !== (t = this.A()) && void 0 !== t ? t : "",
            s = this.I(),
            u = null !== (e = this.B()) && void 0 !== e ? e : 0,
            o = this.getScreenSize(),
            r = this.S(),
            a = this.getVideoContent(s, n, window.location.href, i, r);
          return new Promise((t) => {
            t({
              videoId: s,
              videoTitle: n,
              videoDuration: u,
              serviceDomain: window.location.hostname,
              screen: o,
              content: a,
              videoState: this.m(),
              videoType: i
            });
          });
        }
        getVideoElement() {
          const t = document.querySelector("[data-role=videoContainer]");
          return t ? t.querySelector("video") : null;
        }
        jumpToNextEpisode(t) {
          var e;
          return N(this, void 0, void 0, function* () {
            if (this.I() != t.videoId)
              try {
                yield null === (e = this.C) || void 0 === e ? void 0 : e.reloadNextEpisode();
              } catch (t) {
                console.log("Failed to jump to next episode:", t);
              }
          });
        }
        freeze(t) {
          return N(this, void 0, void 0, function* () {
            this.p += 1;
            try {
              yield this.pause(), yield b(t)(), yield this.play();
            } finally {
              this.p -= 1;
            }
          });
        }
        pause() {
          return N(this, void 0, void 0, function* () {
            this.p += 1;
            try {
              const t = this.getVideoElement();
              if (null === t) throw new Error(u);
              t.pause(), yield b(250)(), yield j(() => this.m() === r.PAUSED || this.m() === r.AD_PLAYING, 1250, 10)();
            } finally {
              this.p -= 1;
            }
          });
        }
        play() {
          return N(this, void 0, void 0, function* () {
            this.p += 1;
            try {
              const t = this.getVideoElement();
              if (null === t) throw new Error(u);
              yield t.play(), yield j(() => this.m() === r.PLAYING || this.m() === r.AD_PLAYING, 1250, 10)();
            } finally {
              this.p -= 1;
            }
          });
        }
      }
      const W = chrome.extension.getURL("img/x-circle.svg"),
        z = "with-chat";
      var K = i(7206),
        Y = i.n(K);
      const J = [
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
        q = [
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
        X = [
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
        Z = {
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
      function tt(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                m,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(m, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(m) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const et = {
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
      var it = function (t, e, i, n) {
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
      const nt = new (class {
        setItemsAsync(t) {
          return it(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(nt);
      const st = nt;
      var ut,
        ot = function (t, e, i, n) {
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
      class rt {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.T = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : g
          }),
            (this.M = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = tt(t)),
            (this.T.userIcon = t),
            st.setItemsAsync({ userIcon: t }),
            V("new user settings after set user icon: " + JSON.stringify(this.T));
        }
        saveUserNickname(t) {
          (this.T.userNickname = t),
            st.setItemsAsync({ userNickname: t }),
            V("new user settings after set user nickname: " + JSON.stringify(this.T));
        }
        saveUserSettings(t) {
          return ot(this, void 0, void 0, function* () {
            const e = tt(t.userIcon);
            (this.T = t),
              (this.T.userIcon = e),
              yield st.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              V("new user settings after save: " + JSON.stringify(this.T));
          });
        }
        get userSettings() {
          return this.T;
        }
        get permId() {
          return this.M;
        }
        get userIcon() {
          return this.T.userIcon;
        }
        get userNickname() {
          return this.T.userNickname;
        }
      }
      class at extends x {
        constructor(t, e, i) {
          super(t, e, i), (this.P = i);
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
      })(ut || (ut = {}));
      class ct extends at {
        constructor(t, e, i) {
          super(t, e, ut.SET_TYPING), (this.data = i);
        }
      }
      class Dt extends at {
        constructor(t, e, i) {
          super(t, e, ut.SEND_MESSAGE), (this.data = i);
        }
      }
      class ht extends at {
        constructor(t, e, i) {
          super(t, e, ut.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class dt extends S {
        constructor(t, e, i) {
          super(t, e, T.TEARDOWN), (this.data = i);
        }
      }
      class lt extends at {
        constructor(t, e, i) {
          super(t, e, ut.SEND_REACTION), (this.data = i);
        }
      }
      class pt extends at {
        constructor(t, e, i) {
          super(t, e, ut.SEND_GIF), (this.data = i);
        }
      }
      var gt = function (t, e, i, n) {
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
      class Ft {
        constructor() {
          this.resetTasks(), (this.$ = []), (this.R = 0), (this.L = Promise.resolve()), (this.V = !0);
        }
        createInstance() {
          return new Ft();
        }
        pushTask(t, e) {
          if (!this.V) return;
          const i = { action: t, name: e };
          0 === this.R && this.resetTasks(),
            (this.R = this.$.push(i)),
            (this.L = this.L.then(() => {
              if (this.$.includes(i) && this.V)
                return this.G(i)().then(() => {
                  this.$.shift(), (this.R -= 1);
                });
            }));
        }
        disable() {
          (this.V = !1), this.resetTasks();
        }
        resetTasks() {
          (this.L = Promise.resolve()), (this.$ = []), (this.R = 0);
        }
        G(t) {
          return function () {
            return gt(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
          };
        }
        get tasksInFlight() {
          return this.R;
        }
        hasTaskInQueue(t) {
          return this.$.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.$),
            (this.$ = this.$.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.R = this.$.length),
            console.log(this.$);
        }
      }
      const vt = new Ft();
      var yt = function (t, e, i, n) {
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
      const mt = new (class {
        getItemsAsync(t) {
          return yt(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), n(new Error(e))) : i(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return yt(this, void 0, void 0, function* () {
            return new Promise((t, i) => {
              chrome.storage.local.get(null, (n) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), i(new Error(e))) : t(n);
              });
            });
          });
        }
      })();
      Object.freeze(mt);
      const ft = mt;
      var Ct,
        Et = new Uint8Array(16);
      function wt() {
        if (
          !Ct &&
          !(Ct =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Ct(Et);
      }
      const _t = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const bt = function (t) {
        return "string" == typeof t && _t.test(t);
      };
      for (var jt = [], Bt = 0; Bt < 256; ++Bt) jt.push((Bt + 256).toString(16).substr(1));
      const At = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            jt[t[e + 0]] +
            jt[t[e + 1]] +
            jt[t[e + 2]] +
            jt[t[e + 3]] +
            "-" +
            jt[t[e + 4]] +
            jt[t[e + 5]] +
            "-" +
            jt[t[e + 6]] +
            jt[t[e + 7]] +
            "-" +
            jt[t[e + 8]] +
            jt[t[e + 9]] +
            "-" +
            jt[t[e + 10]] +
            jt[t[e + 11]] +
            jt[t[e + 12]] +
            jt[t[e + 13]] +
            jt[t[e + 14]] +
            jt[t[e + 15]]
          ).toLowerCase();
        if (!bt(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const kt = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || wt)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return At(n);
      };
      var Qt;
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
      })(Qt || (Qt = {}));
      var It = function (t, e, i, n) {
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
      const xt = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? X.includes(t.split("?newIconUrl=")[1]) && J.includes(t.split("?newIconUrl=")[0]) : X.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return q[Math.floor(Math.random() * q.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        U(t) {
          return It(this, void 0, void 0, function* () {
            try {
              yield st.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return It(this, void 0, void 0, function* () {
            const t = yield ft.getAllItemsAsync(),
              e = xt.validateStorageData(t);
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
      Object.freeze(xt);
      const St = xt,
        Tt = 1e3,
        Mt = 72e5,
        Pt = 12e4,
        $t = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Rt = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        Lt = {
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
      function Gt(t, e) {
        Ut();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${W}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${W}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            Ut();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              Ut(), (window.location.href = e);
            });
      }
      function Ut() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const Ot = { showAlert: !1 },
        Nt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var Ht;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(Ht || (Ht = {}));
      var Wt = function (t, e, i, n) {
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
      class zt {
        constructor(t) {
          (this.O = this.N.bind(this)),
            (this.H = this.resetIdleTimer.bind(this)),
            (this.W = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.K(t.data);
            }),
            (this.Y = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.J = (t) => {
              this.q.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new M(R, P, n);
              U.l(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.q.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.q.toggleGIFs();
            }),
            (this.K = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new M(R, P, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              U.l(n);
              const s = new M(R, P, { eventType: `emoji-click-${i}`, sessionId: this.q.getSessionId() });
              U.l(s), vt.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.q.focusChat(), this.X(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.Z(), this.q.onInputChange();
            }),
            (this.q = t);
        }
        tt() {
          V("Idle Warning called"), Gt(Rt);
          const t = new M(R, P, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          U.l(t);
          const e = new M(R, P, { eventType: "idle-warn-2hr", sessionId: this.q.getSessionId() });
          U.l(e), (this.et = setTimeout(this.it.bind(this), Pt));
        }
        it() {
          V("Idle kick called");
          const t = new M(R, P, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new dt(R, P, Nt);
          U.l(t), U.l(e);
        }
        resetIdleTimer() {
          this.nt && clearTimeout(this.nt), this.et && (Ut(), clearTimeout(this.et)), (this.nt = setTimeout(this.tt.bind(this), Mt));
        }
        st() {
          (this.nt = setTimeout(this.tt.bind(this), Mt)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.H();
            }),
            (window.onfocus = () => this.H()),
            (window.onmousedown = () => this.H()),
            (window.ontouchstart = () => this.H()),
            (window.onkeydown = () => this.H());
        }
        ut() {
          this.nt && clearTimeout(this.nt),
            this.et && clearTimeout(this.et),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          V("Listening for chat events"), this.st(), this.ot(), this.initWindowListeners();
        }
        stopListening() {
          this.rt(), this.ut(), this.ct();
        }
        N() {
          this.q.clearUnreadCount();
        }
        Dt(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.q.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.O),
            window.addEventListener("message", this.W),
            document.addEventListener("dragstart", this.ht.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.q.onFullScreen),
            document.addEventListener("fullscreenchange", this.q.onFullScreen),
            document.addEventListener("keydown", this.Y, !0),
            document.addEventListener("emoji-click", this.K),
            document.addEventListener("click", this.J);
        }
        ot() {
          jQuery(window).on("focus", this.O),
            jQuery("#party-tab").on("click", this.q.togglePartyTab.bind(this.q)),
            jQuery("#friends-tab").on("click", this.q.toggleFriendsTab.bind(this.q)),
            jQuery(".user-icon").on("click", this.q.toggleLargeUserIconButton.bind(this.q)),
            jQuery("#user-icon").on("click", this.q.toggleIconContainer.bind(this.q)),
            jQuery("#link-icon").on("click", this.q.linkIconListener.bind(this.q)),
            jQuery("#reset-icon").on("click", this.q.resetIconListener.bind(this.q)),
            jQuery(".image-button").on("click", this.q.userIconSelectorListener.bind(this.q)),
            jQuery("#chat-input-container").on("keydown", this.q.onChatKeyDown.bind(this.q)),
            jQuery("#nickname-edit").on("keydown", this.q.onChatKeyDown.bind(this.q)),
            jQuery("#chat-input").on("keypress", this.q.onChatKeyPress.bind(this.q)),
            jQuery("#chat-input").on("input", this.q.onInputChange.bind(this.q)),
            jQuery("#gif-search").on("keyup", this.q.onGifSearch.bind(this.q)),
            jQuery("#saveChanges").on("click", this.q.saveChangesListener.bind(this.q)),
            jQuery("#cancelNickname").on("click", this.q.cancelNicknameListener.bind(this.q)),
            jQuery("#chat-wrapper").on("mouseup", this.q.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.q.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.q.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.q.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.q.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.q.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.q.onChatKeyUp.bind(this.q)),
            jQuery("#emoji-picker-btn").on("click", this.q.addEmojiPicker.bind(this.q)),
            jQuery("#gif-btn").on("click", this.q.addGifPicker.bind(this.q)),
            jQuery(".gif-img").on("click", this.q.clickGif.bind(this.q)),
            jQuery(".gif-results").on("click", "video, img", this.q.clickGif.bind(this.q)),
            jQuery("#category-container").on("click", "video", this.q.clickGif.bind(this.q)),
            jQuery("#gif-input-back").on("click", this.q.resetGif.bind(this.q)),
            jQuery("#reaction-btn").on("click", this.q.addReactionTab.bind(this.q)),
            jQuery("#chat-input-container").on("click", this.dt.bind(this)),
            jQuery("#chat-input").on("input", this.Z.bind(this)),
            jQuery("#chat-input").on("drop", this.lt.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.q.onScrollToBottom.bind(this.q)),
            this.gt(),
            document.addEventListener("keydown", this.Y.bind(this), !0),
            this.q.initCustomListeners();
        }
        gt() {
          jQuery("#tp-heart-button").on("click", () => {
            this.q.onReactionClicked(Ht.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.q.onReactionClicked(Ht.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.q.onReactionClicked(Ht.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.q.onReactionClicked(Ht.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.q.onReactionClicked(Ht.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.q.onReactionClicked(Ht.FIRE);
            });
        }
        Z() {
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
        lt(t) {
          t.preventDefault();
        }
        ht(t) {
          t.preventDefault();
        }
        dt(t) {
          t.target === jQuery("#chat-input")[0] && this.q.focusChat();
        }
        X(t) {
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
        Ft(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        vt(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.Ft(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Wt(this, void 0, void 0, function* () {
            const i = yield ft.getItemsAsync([F]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : y;
            this.vt(n) || (n = y),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield st.setItemsAsync({ [F]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        ct() {
          jQuery(window).off("focus", this.O),
            document.removeEventListener("emoji-click", this.K),
            document.removeEventListener("keydown", this.Y, !0),
            document.removeEventListener("click", this.J),
            window.removeEventListener("message", this.W),
            document.removeEventListener("webkitfullscreenchange", this.q.onFullScreen),
            document.removeEventListener("fullscreenchange", this.q.onFullScreen);
        }
        rt() {
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
      class Kt {
        constructor(t) {
          (this.q = t),
            (this.yt = []),
            (this.ft = 0),
            (this.Ct = document.title),
            (this.Et = 0),
            (this.wt = new Map()),
            (this._t = new Map()),
            (this.bt = []),
            (this.jt = []),
            (this.Bt = ""),
            V("Message Controller");
        }
        At(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${tt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${tt(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        kt(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.q.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${tt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${tt(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${tt(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        Qt(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${tt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${tt(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        It(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.q.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${tt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${tt(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${tt(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        xt(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.M = e.permId), (u.St = i), (u.Tt = n), (u.Mt = e), (u.Pt = s);
        }
        reloadMessages() {
          this.q.queueMessageForFrame(Qt.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.yt));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.yt = t;
        }
        $t(t, e) {
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
            (void 0 === i && (i = this.yt.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.wt.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.yt.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.$t(n, t);
          this.yt.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.q.queueMessageForFrame(Qt.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.Qt(o, u, s) : this.At(o, r, u, s);
          this.xt(a, u, o, r, s), this.scrollToBottom(), this.Rt();
        }
        addGif(t, e) {
          void 0 === e && (e = this.yt.length);
          const i = this.yt.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.$t(i, t);
          this.yt.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.q.queueMessageForFrame(Qt.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.It(s, t, n) : this.kt(s, u, t, n);
          (o[0].Lt = !0), this.xt(o, t, s, u, n), b(100)().then(this.scrollToBottom.bind(this)), this.Rt();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.ft > 0 && ((this.ft = 0), (document.title = this.Ct));
        }
        Rt() {
          (this.ft += 1), (this.Et += 1), document.hasFocus() || (document.title = "(" + String(this.ft) + ") " + this.Ct);
        }
        getUserIconURL(t, e = "") {
          if (!this.wt.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.Vt();
            this.wt.set(t, n), this.jt.push(n);
          }
          return this.wt.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return X.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : J.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this._t.has(t) || (this._t.set(t, e), this.bt.push(e)), tt(this._t.get(t));
        }
        Vt() {
          let t = chrome.runtime.getURL("img/icons/General/" + J[Math.floor(Math.random() * J.length)]);
          if (this.jt.length < Z.General.length)
            for (; this.jt.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + J[Math.floor(Math.random() * J.length)]);
          return t;
        }
        Gt(t) {
          const e = t[0],
            i = e.M;
          let n = e.St;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.St = n));
          const s = e.Tt;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.Mt,
                o = e.Pt;
              let r;
              if (
                (e.Lt && s && "gifObject" in s && o && (r = "" == u ? this.It(n, s, o) : this.kt(n, u, s, o)),
                !e.Lt && s && "isSystemMessage" in s && o && (r = "" == u ? this.Qt(n, s, o) : this.At(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.M = i), (e.St = n), (e.Tt = u), (e.Mt = s), (e.Pt = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.Bt = t), this.q.queueMessageForFrame(Qt.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.Bt), jQuery(".user-icon img").attr("src", this.Bt);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.Gt(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.Gt(jQuery(e[t]));
          this.q.isChatFrameActive() && this.reloadMessages();
        }
        Ut(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              X.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : J.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              X.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : J.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = Z.General.filter((t) => !this.jt.includes(t));
            0 === t.length && (t = Z.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Ut(e);
          this.wt.set(t, i), this.jt.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = tt(e);
          this._t.set(t, i), this.bt.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Ut(e);
          this.wt.set(t, n), this.jt.push(n), this._t.set(t, i), this.bt.push(i), this.renderSidebar();
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
          const t = new M(R, P, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          U.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.q.getSessionId() },
            i = new M(R, P, e);
          U.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new M(R, P, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              U.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.q.getSessionId() },
                i = new M(R, P, e);
              U.l(i);
            });
        }
      }
      class Yt {
        constructor(t) {
          (this.Ot = !1), (this.Nt = !1), (this.Ht = !1), (this.q = t);
        }
        setupPresenceIndicator() {
          (this.Ot = !1), (this.Nt = !1), (this.Ht = !1), this.Wt();
        }
        zt() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Ot = t), this.Wt();
        }
        setBufferingPresenceVisible(t) {
          (this.Nt = t), this.Wt();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Ht = t), this.Wt();
        }
        getWatchingAdsVisible() {
          return this.Ht;
        }
        Kt() {
          return this.Ht
            ? "People are watching ads..."
            : this.Ot && this.Nt
            ? "People are typing and buffering..."
            : this.Ot
            ? "People are typing..."
            : this.Nt
            ? "People are buffering..."
            : "";
        }
        Wt() {
          const t = this.Kt();
          this.zt().text(t), this.q.queueMessageForFrame(Qt.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var Jt = function (t, e, i, n) {
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
      var qt,
        Xt,
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
      class te extends class {
        constructor() {
          (this.Yt = !1),
            (this.Jt = 1),
            (this.qt = ""),
            (this.Xt = ""),
            (this.Zt = "0"),
            (this.te = ""),
            (this.ee = !0),
            (this.ie = !1),
            (this.ne = 0),
            (this.se = []),
            (this.ue = new Ft()),
            (this.oe = !1),
            (this.re = void 0),
            (this.ae = !0),
            (this.ce = this.De()),
            (this.he = this.De()),
            (this.de = !1),
            (this.le = !1),
            (this.pe = []),
            (this.logEvent = (t) => {
              const e = new M(R, P, t);
              U.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              ft.getItemsAsync([c]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.ge) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.ue.pushTask(() => st.setItemsAsync({ [c]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this.ge) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.Fe = !1),
            (this.ve = new zt(this)),
            (this.ye = new Yt(this)),
            (this.fe = new Kt(this)),
            (this.Ce = void 0),
            (this.Ee = void 0),
            (this.we = !1);
        }
        setPageControls(t) {
          this.ge = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.ge) || void 0 === t || t.enablePartyIcons(), null === (e = this.ge) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return Jt(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.ee = t), t && !this._e() && this.reloadChat();
          });
        }
        be(t, e) {
          const i = new M(R, P, { name: "error", action: { reason: e, description: t } });
          U.l(i);
        }
        getChatWindowVisible() {
          return this.he;
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
          return this.ee;
        }
        incrementEmojiCount() {
          this.ne++;
        }
        resetEmojiCount() {
          this.ne = 0;
        }
        getEmojiCount() {
          return this.ne;
        }
        setChatFrameReady(t) {
          this.oe && this.je(), (this.oe = !0), (this.Be = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.ue.pushTask(() =>
            Jt(this, void 0, void 0, function* () {
              this.Ae(t, e);
            })
          );
        }
        Ae(t, e) {
          return Jt(this, void 0, void 0, function* () {
            const i = this.Be,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: R };
            U.l(n);
          });
        }
        ke() {
          var t;
          return Jt(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield j(() => this.oe && null != this.Be, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.re && this.Qe(this.re),
                null === (t = this.ge) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.be("Sidewindow didn't load in time", t);
            }
          });
        }
        De() {
          return window.origin.includes(".crunchyroll.com"), window.origin.includes("tv.apple.com"), !1;
        }
        Ie() {
          return Jt(this, void 0, void 0, function* () {
            yield U.l(new S(R, P, T.LOAD_CHAT_WINDOW)), console.log(this.Be);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return Jt(this, void 0, void 0, function* () {
            yield U.l(new S(R, P, T.RESET_CHAT_WINDOW)),
              console.log(this.Be),
              (this.he = !0),
              (this.ee = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.de && t && (this.resetIconListener(), null === (e = this.ge) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return Jt(this, void 0, void 0, function* () {
            yield U.l(new S(R, P, T.HIDE_CHAT_WINDOW)), (this.he = !1), (this.ee = !1);
          });
        }
        xe() {
          return Jt(this, void 0, void 0, function* () {
            this.Ie(), this.ue.pushTask(this.ke.bind(this));
          });
        }
        loadInitData(t) {
          this.re = t;
        }
        Qe(t) {
          var e;
          return Jt(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = Z), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield St.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(Qt.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(Qt.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(Qt.SET_USER_LIST, this.pe),
              this.queueMessageForFrame(Qt.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Se) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        je() {
          return Jt(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.re && (yield this.Qe(this.re)), this.Se)) {
              const t = this.fe.getUserIconURL(this.Se.permId, this.Se.userIcon);
              this.queueMessageForFrame(Qt.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(Qt.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Te() {
          return Jt(this, void 0, void 0, function* () {
            this.Me(),
              yield b(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.Pe(),
              this.ye.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        $e(t) {
          this.ve.initWindowListeners(), this.De() && this.xe(), this.ue.pushTask(this.ke.bind(this)), Ut(), (this.Se = new rt(t));
          const e = this.fe.getUserIconURL(this.Se.permId, this.Se.userIcon);
          this.fe.setUserIconUrl(e),
            this.fe.renderSidebar(),
            this._e() && this.removeChat(),
            (this.Fe = !0),
            this.Re(),
            this.De()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Te(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return Jt(this, void 0, void 0, function* () {
            "true" !== (yield ft.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.fe.addYoutubePromo(), st.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.re = t;
          const e = Object.assign({}, t);
          (e.iconMap = Z),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(Qt.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return Jt(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this._e() ||
                this.isPartyWindowsActive() ||
                (this.Me(),
                yield b(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.ee),
                this.addIconSelector(),
                this.Le(),
                this.Pe(),
                this.ye.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new dt(R, P, t);
          U.l(e);
        }
        _e() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.fe.clearUnreadCount();
        }
        Ve() {
          return Jt(this, void 0, void 0, function* () {
            try {
              yield j(() => null !== document.querySelector("#chat-history") || this.ce || (this.oe && this.ae), 1e4)();
            } catch (t) {
              this.be("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.ue.pushTask(() =>
            Jt(this, void 0, void 0, function* () {
              yield this.Ve(), this.fe.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.ue.pushTask(() =>
            Jt(this, void 0, void 0, function* () {
              yield this.Ve(), this.fe.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.fe.reloadMessages();
        }
        scrollToBottom() {
          this.fe.scrollToBottom();
        }
        addReviewMessage() {
          this.fe.addReviewMessage(), (this.we = !0);
        }
        get showingReveiwMessage() {
          return this.we;
        }
        set shouldReturnToVideo(t) {
          this.de = t;
        }
        onBufferingMessage(t) {
          this.ue.pushTask(() =>
            Jt(this, void 0, void 0, function* () {
              yield this.Ve(), this.ye.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.ue.pushTask(() =>
            Jt(this, void 0, void 0, function* () {
              yield this.Ve(), this.ye.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.ue.pushTask(() =>
            Jt(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Ve(), this.ye.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.ye.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Se) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Ge(this.Ue(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.fe.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Se)) {
            const t = this.fe.getUserIconURL(this.Se.permId, this.Se.userIcon);
            this.fe.setUserIconUrl(t), this.fe.renderSidebar();
          }
        }
        Pe() {
          j(() => this._e(), 1e4)().then(() => {
            this.ve.startListening();
          });
        }
        Le() {
          this.ve.stopListening(), this.Oe && (clearTimeout(this.Oe), (this.ie = !1));
        }
        teardown() {
          (this.Fe = !1),
            (this.Xt = void 0),
            (this.Ne = void 0),
            this.Le(),
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
            this.ue.pushTask(() => st.setItemsAsync({ [c]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return Jt(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.fe.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(Qt.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new M(R, P, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          U.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new M(R, P, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          U.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new M(R, P, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          U.l(e), this.toggleReactions();
        }
        Re() {
          if (
            (V("Set Chat Html called"),
            (this.He = Y()),
            (this.He = this.He.replace(/{EXTENSION_LOGO}/g, tt(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Se)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          const t = chrome.runtime.getURL("");
          this.He = this.He.replace(/{CHAT_URL}/g, `${l}?t=${Date.now()}&id=${encodeURIComponent(t.substring(0, t.length - 1))}`);
          for (const t of p) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.He = this.He.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.He = this.He.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.He = this.He.replace(/{USER_NICKNAME}/g, this.Se.userNickname ? tt(this.Se.userNickname) : "Add a nickname")),
            (this.He = this.He.replace(/{USER_ICON}/g, this.fe.getUserIconURL(this.Se.permId, this.Se.userIcon))),
            (this.He = this.He.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.He = this.He.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.He = this.He.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.He = this.He.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.He = this.He.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.He = this.He.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.He = this.He.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.He = this.He.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.He = this.He.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.le ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.ie && jQuery("#chat-ad-holder").show(),
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
            (this.le = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.le = !1);
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
          if (null === (t = this.We) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.We.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.qt = t;
        }
        setMessageForwarder(t) {
          this.We = t;
        }
        setSessionId(t) {
          this.Xt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(Qt.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(Qt.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.fe.getUserIconURL(t.permId, e.userIcon),
                n = this.fe.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.pe = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(Qt.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.Ne = t;
        }
        getSessionCreated() {
          return this.Ne;
        }
        getSessionId() {
          return this.Xt;
        }
        getPartyUrl() {
          return this.qt;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (V("userIconSelector button clicked: " + e),
            this.Se &&
              (this.Se.saveUserIcon(e),
              this.queueMessageForFrame(Qt.UPDATE_SETTINGS, { userSettings: this.Se.userSettings }),
              this.Ge(this.Ue(this.Se.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Ge(t, e) {
          U.l(t).then(e);
        }
        ze(t) {
          return new lt(R, P, { reactionType: t });
        }
        Ke(t) {
          return new pt(R, P, { gifObject: t });
        }
        Ye(t) {
          return new Dt(R, P, { body: t });
        }
        Je(t) {
          return new ct(R, P, { typing: t });
        }
        Ue(t) {
          return new ht(R, P, { userSettings: t });
        }
        qe(t) {
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
              u = this.qe(e),
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
          console.log(t), this.Ge(this.ze(t));
          const e = new M(R, P, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          U.l(e);
          const i = new M(R, P, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          U.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.ve.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.be("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.se.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Ge(this.Ke(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new M(R, P, e);
              U.l(i);
              const n = new M(R, P, { eventType: "gif-share", sessionId: this.getSessionId() });
              U.l(n);
            }),
              this.toggleGIFs();
          }
        }
        Xe(t) {
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
        Ze(t) {
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
            this.se.push(...t.results),
            (this.Zt = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.Xe(t) : this.Ze(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.Jt < 6 && this.ti(),
            setTimeout(() => {
              this.Yt = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return Jt(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Yt) t.preventDefault();
            else if ("0" !== this.Zt && e && this.Jt < 6) {
              (this.Jt += 1), (this.Yt = !0), t.preventDefault();
              const e = yield fetch(this.te + `&pos=${this.Zt}`),
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
        ei() {
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
        ti() {
          return Jt(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.ei()), jQuery("#gif-results-right")[0].append(...this.ei());
          });
        }
        logShare(t, e) {
          return Jt(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${D}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return Jt(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.Jt = 1),
              (this.Yt = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.se = []),
              this.ti();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.te = `${D}/${u}${s}`);
            const o = yield fetch(`${D}/${u}${s}`),
              r = yield o.json();
            if (r.results && r.results.length > 0) this.loadGIFs(r);
            else if (!t) {
              const t = yield fetch(`${D}/trending_gifs?${s}`);
              this.te = `${D}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.Ee && clearTimeout(this.Ee), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.Ee = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        ii(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.Ce ? this.Ge(this.Je(!0)) : clearTimeout(this.Ce),
              (this.Ce = setTimeout(() => {
                (this.Ce = void 0), this.Ge(this.Je(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.ii(i)) {
              void 0 !== this.Ce && (clearTimeout(this.Ce), (this.Ce = void 0), this.Ge(this.Je(!1))),
                e.prop("contenteditable", !1),
                this.Ge(this.Ye(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return kt();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new M(R, P, t);
              U.l(n);
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
          const e = t.replace(m, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(m) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          V("saveChanges button clicked: " + e),
            e !== (null === (t = this.Se) || void 0 === t ? void 0 : t.userNickname) &&
              this.Se &&
              (this.Se.saveUserNickname(e),
              this.queueMessageForFrame(Qt.UPDATE_SETTINGS, { userSettings: this.Se.userSettings }),
              this.Ge(this.Ue(this.Se.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.Fe;
        }
        addIconSelector() {
          Object.keys(Z).forEach((t) => {
            if (et[t]()) {
              const e = Z[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.ni(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(m) || []).length,
            i = t.replace(m, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        ni(t, e, i) {
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
          super(),
            (this.si =
              "\n            #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n                position: absolute !important;\n                z-index: auto !important;\n            }\n            .grid-view-item, a.link {\n                width: 100% !important\n            }\n        ");
        }
        getReactionContainer() {
          return jQuery(te.MAIN_ROOT_CONTROL);
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        k() {
          const t = new URL(window.location.href).pathname.match(/\/(\w*)/);
          if (t) {
            if ("shows" === t[1]) return C.EPISODE;
            if ("movies" === t[1]) return C.FEATURE;
          }
          return C.OTHER;
        }
        getVideoTitle() {
          return Zt(this, void 0, void 0, function* () {
            let t;
            if (
              ((t =
                this.k() === C.EPISODE
                  ? document.querySelector(".skin-metadata-manager-header")
                  : document.querySelector(".skin-metadata-manager-body")),
              t)
            )
              return t.innerText;
          });
        }
        shouldAddReactionSpace() {
          return !1;
        }
        shouldShowReaction() {
          return !0;
        }
        shouldUseVideoGIF() {
          return !1;
        }
        Me() {
          this.He &&
            jQuery(te.MAIN_ROOT_CONTROL).after(
              (function (t, e = "") {
                return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                  "css/chat.css"
                )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
              })(this.He, this.si)
            );
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Zt(this, void 0, void 0, function* () {
            i.setChatVisible.call(this, t, e),
              t
                ? (jQuery("#chat-wrapper").show(), jQuery(te.MAIN_ROOT_CONTROL).addClass(z))
                : (jQuery("#chat-wrapper").hide(), jQuery(te.MAIN_ROOT_CONTROL).removeClass(z));
          });
        }
      }
      (te.MAIN_ROOT_CONTROL = ".aa-player-skin"),
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
            (t.ON_GOOGLE_SIGN_IN = "OnGoogleSignIn"),
            (t.CREATE_SCHEDULED_EVENT = "createScheduledEvent"),
            (t.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent"),
            (t.SET_USER_STATUS = "SET_USER_STATUS"),
            (t.SIGN_IN_CREATE = "SIGN_IN_CREATE");
        })(qt || (qt = {}));
      class ee extends at {
        constructor(t, e, i) {
          super(t, e, ut.GET_SESSION_DATA), (this.data = i);
        }
      }
      class ie {
        constructor() {
          (this.ui = this.oi.bind(this)), (this.ri = []), this.ai();
        }
        addMessageListener(t) {
          this.ri.push(t);
        }
        removeMessageListener(t) {
          this.ri = this.ri.filter((t) => {});
        }
        ai() {
          U.addListener(this.ui);
        }
        teardown() {
          (this.ri = []), U.removeListener(this.ui);
        }
        oi(t, e, i) {
          if (!this.ci(t)) return !1;
          return !!this.Di(t, e, i) || (i({}), !1);
        }
        ci(t) {
          return t.target === R;
        }
        Di(t, e, i) {
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
      })(Xt || (Xt = {}));
      var ne,
        se = function (t, e, i, n) {
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
      class ue {
        constructor(t, e) {
          (this.q = t), (this.ge = e), V("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case T.LOAD_SESSION: {
              const e = t;
              return this.hi(e.data), !1;
            }
            case Xt.ON_MESSAGE: {
              const e = t;
              return this.W(e), this.ge.onChatMessage(), !1;
            }
            case Xt.ON_BUFFER: {
              const e = t;
              return this.di(e), !1;
            }
            case Xt.ON_TYPING: {
              const e = t;
              return this.li(e), !1;
            }
            case Xt.ON_WATCHING_ADS: {
              const e = t;
              return this.pi(e), !1;
            }
            case Xt.UPDATE_SETTINGS: {
              const e = t;
              return this.gi(e), !1;
            }
            case Xt.ON_REACTION: {
              const e = t;
              return this.Fi(e), !1;
            }
            case Xt.ON_GIF: {
              const e = t;
              return this.vi(e), !1;
            }
            case Xt.USER_LIST: {
              const e = t;
              return this.yi(e), !1;
            }
            case Xt.ON_WEB_RTC:
              return this.q.onWebRTC(t.data), !0;
            case qt.SET_CHAT_VISIBLE: {
              const e = t;
              return this.mi(e.data), i(), !1;
            }
            case Qt.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.q.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case Qt.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case Qt.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.q.doUpdateSettings(e), i(), !0;
            }
            case Qt.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case Qt.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.q.setReactionsActive(e), i(), !0;
            }
            case Qt.RESET_VIEW:
              return this.q.resetChatWindow(!0), i(), !0;
            case Qt.ON_FOCUS:
              return this.q.onSidebarFocus(), i(), !0;
            case Qt.PREVIEW_REACTION: {
              const e = t.data;
              return this.q.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.q.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.q.teardown();
        }
        mi(t) {
          return se(this, void 0, void 0, function* () {
            this.q.isPartyWindowsActive()
              ? t.visible
                ? yield this.q.resetChatWindow()
                : yield this.q.hideChatWindow()
              : (yield this.q.setChatVisible(t.visible), this.q.fixPageControls());
          });
        }
        hi(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${d}/join/${e}`;
          if (
            (this.q.loadInitData(t),
            this.q.setPartyUrl(i),
            this.q.setSessionId(e),
            this.q.$e(t.storageData),
            this.ge.onInitChat(),
            this.q.setSessionCreated(t.isCreate),
            this.q.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.q.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.q.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.q.addGif(e) : this.q.addMessage(e, !0);
        }
        W(t) {
          this.q.addMessage(t.data);
        }
        Fi(t) {
          this.q.showReaction(t.data);
        }
        vi(t) {
          this.q.addGif(t.data);
        }
        di(t) {
          this.q.onBufferingMessage(t.data);
        }
        li(t) {
          this.q.onTypingMessage(t.data);
        }
        pi(t) {
          this.q.onWatchingAdsMessage(t.data);
        }
        gi(t) {
          this.q.onUpdateSettingsMessage(t.data);
        }
        yi(t) {
          this.q.loadUserList(t.data.userList), this.q.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(ne || (ne = {}));
      class oe extends at {
        constructor(t, e, i) {
          super(t, e, ut.BROADCAST), (this.data = i);
        }
      }
      class re extends x {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class ae extends re {
        constructor(t, e) {
          super(t, e, ne.GET_SERVER_TIME);
        }
      }
      class ce extends at {
        constructor(t, e, i) {
          super(t, e, ut.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class De extends at {
        constructor(t, e, i) {
          super(t, e, ut.SET_BUFFERING), (this.data = i);
        }
      }
      class he extends at {
        constructor(t, e, i) {
          super(t, e, ut.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const de = "PING",
        le = "SYNC",
        pe = "BROADCAST";
      class ge extends S {
        constructor(t, e, i) {
          super(t, e, T.STAY_ALIVE), (this.data = i);
        }
      }
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
      const ve = new (class {
        getRedirectDataForTabAsync(t) {
          return Fe(this, void 0, void 0, function* () {
            const e = (yield ft.getItemsAsync([v])).redirectDataMap,
              i = this.fi(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.Ci(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return Fe(this, void 0, void 0, function* () {
            const e = (yield ft.getItemsAsync([v])).redirectDataMap,
              i = this.fi(t);
            e && e[i] && delete e[i], yield st.setItemsAsync({ [v]: e });
          });
        }
        fi(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return Fe(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const i = this.fi(e);
            let n = yield ft.getItemsAsync([v]);
            (n[i] = t), (n = this.Ei(n)), yield st.setItemsAsync({ [v]: n });
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
      Object.freeze(ve);
      const ye = ve;
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
      class fe {
        constructor(e, i, n) {
          (this.wi = []),
            (this._i = 0),
            (this.bi = 0),
            (this.ji = []),
            (this.Bi = !1),
            (this.Ht = !1),
            (this.g = !1),
            (this.Ai = !1),
            (this.ki = void 0),
            (this.Qi = () =>
              me(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.ki = !1);
                } catch (t) {
                  this.ki = !0;
                }
              })),
            (this.Ii = (t = !1, e = !1) =>
              me(this, void 0, void 0, function* () {
                if (this.xi) return;
                if (this.g) return void this.forceSync();
                if (!this.Ai && !e) return;
                const i = yield this.Si();
                if (yield this.Ti(i.data, e)) yield this.Mi(i);
                else if (t) {
                  if (yield this.Pi(e)) {
                    const t = yield this.Si();
                    yield this.Mi(t);
                  }
                }
              })),
            (this.$i = () =>
              me(this, void 0, void 0, function* () {
                if (
                  (this.Ri == t.PAUSED &&
                    this.Li &&
                    (clearInterval(this.Li),
                    (this.Li = setInterval(() => {
                      this.Vi();
                    }, 6e4))),
                  this.Gi())
                )
                  return;
                if ((yield this.Ui.waitVideoDoneLoadingAsync(), this.Gi())) return;
                const e = yield this.Ui.getStateAsync();
                this.Ri == t.PAUSED ? yield this.Oi(e) : this.Ri == t.PLAYING && (yield this.Ni(e)), !1 === this.Ai && (this.Ai = !0);
              })),
            (this.Ui = e),
            (this.q = i),
            (this.C = n),
            this.C.setMessageForwarder(this),
            (this.Hi = 0),
            (this.xi = !1),
            (this.Ri = t.PAUSED),
            (this.Wi = 0),
            (this.zi = 0),
            (this.Ki = 0),
            (this.Yi = this.Ui.getStreamingServiceName()),
            V("Video forwarder"),
            this.Qi();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case T.GET_VIDEO_DATA:
              return this.Ji(i), !0;
            case T.LOAD_SESSION: {
              const e = t;
              return this.qi(e.data), !1;
            }
            case ne.UPDATE_SESSION: {
              const e = t;
              return this.Xi(e.data), !1;
            }
            case ne.NEXT_EPISODE: {
              const e = t;
              return this.Zi(e.data), !1;
            }
            case ne.REBOOT_SESSION: {
              const e = t;
              return this.tn(e.data, i), !0;
            }
            case ne.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case Xt.ON_WATCHING_ADS: {
              const e = t;
              return this.pi(e), !1;
            }
            default:
              return !1;
          }
        }
        pi(t) {
          t.data.anyoneWatchingAds && !this.Ht && (vt.pushTask(this.Ui.doAdCheck.bind(this.Ui)), this.forceSync()),
            (this.Ht = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.en;
        }
        set videoId(t) {
          this.en = t;
        }
        sendTeardown(t) {
          const e = new dt(R, P, t);
          U.l(e);
        }
        teardown() {
          (this.Xt = void 0),
            this.nn && clearInterval(this.nn),
            this.Li && clearInterval(this.Li),
            this.Ui.pause(),
            vt.disable(),
            this.C.stopListening();
        }
        tn(t, e) {
          vt.resetTasks(), this.en == t.videoId && this.Xi(t), e(this.en == t.videoId);
          const i = new M(R, P, { eventType: "reboot", sessionId: this.Xt });
          U.l(i);
        }
        tryBroadcast(t = !1) {
          this.Bi ||
            (this.g
              ? this.forceSync()
              : 0 != this.Ui.uiEventsHappening || this.xi || !this.Xt || vt.hasTaskInQueue(pe) || vt.pushTask(() => this.Ii(t), pe));
        }
        setBuffering(t) {
          if (this.Xt) {
            const e = new De(R, P, { buffering: t });
            U.l(e);
          }
        }
        isWatchingAds() {
          return this.Bi;
        }
        setWatchingAds(t, e) {
          if (this.Xt) {
            this.Bi = t;
            const i = new he(R, P, { watchingAds: t, adDurationLeft: e });
            U.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return me(this, void 0, void 0, function* () {
            if (this.Xt && t !== this.en && t !== this.sn) {
              (this.sn = t), (this.xi = !0);
              const e = new ce(R, P, { nextEpisode: t }),
                i = yield U.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.un(t));
            }
          });
        }
        un(t) {
          return me(this, void 0, void 0, function* () {
            try {
              yield j(() => t == this.en, 1e4)(), (this.xi = !1);
            } catch (t) {
              this.be("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: $t };
              this.sendTeardown(e);
            }
          });
        }
        Ti(e, i) {
          return me(this, void 0, void 0, function* () {
            if (null == e.lastKnownTime || null == e.lastKnownTimeUpdatedAt || null == e.state) return !1;
            if (i && e.state === t.PAUSED && e.lastKnownTime < Tt) return !1;
            const n = Math.abs(e.lastKnownTime - this.on());
            if (e.state == this.Ri && n < Tt) return !1;
            if (n >= Tt) {
              const t = new M(R, P, { name: "video_seek", action: { source: "self" } });
              U.l(t), this.Yi == o.AMAZON || this.Yi == o.PARAMOUNT ? yield b(200)() : this.Yi == o.HBO_MAX && (yield b(500)());
            }
            return !0;
          });
        }
        Si() {
          return me(this, void 0, void 0, function* () {
            const t = yield this.Ui.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.bi), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new oe(R, P, t);
          });
        }
        forceSync() {
          vt.pushTask(this.$i, le);
        }
        Zi(t) {
          return me(this, void 0, void 0, function* () {
            (this.Hi = Date.now()), vt.pushTask(() => this.rn(t));
          });
        }
        rn(e) {
          return me(this, void 0, void 0, function* () {
            try {
              V("Continue next episode called"),
                (this.xi = !0),
                yield this.Ui.jumpToNextEpisode(e),
                yield this.C.loadNewVideoAsync(e.videoId),
                V("After load new video"),
                this.C.reloadListeners(),
                this.Ki < this.Hi &&
                  ((this.Ri = t.PAUSED),
                  (this.Wi = 0),
                  (this.zi = Date.now()),
                  V("Sending broadcast after next episode"),
                  vt.pushTask(() => this.Ii(!0, !0), pe),
                  vt.removeTask(le)),
                (this.en = e.videoId),
                (this.xi = !1);
              const i = new M(R, P, { name: "video_start", action: { description: "video session has begun" } });
              U.l(i);
            } catch (t) {
              this.be("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return me(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new ge(R, P, { tabId: n, persist: t });
            U.l(s);
            const u = yield this.an();
            (u.date = Date.now()), ye.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return me(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party");
              const i = yield this.an();
              i.date = Date.now();
              const n = yield this.cn(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new ge(R, P, { tabId: s, persist: !1 });
              yield U.l(u), yield ye.storeRedirectDataForTabAsync(i, s), console.log("Redirect URL is", n), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.be("Failed to fix next episode.");
              const e = new dt(R, P, { showAlert: !0, alertModal: Lt });
              U.l(e);
            }
          });
        }
        an() {
          return me(this, void 0, void 0, function* () {
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
                      e(t), this.be("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.Xt, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        cn(t) {
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
              case "disneymena":
                return `https://apps.disneyplus.com/${t.videoId}/watch`;
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
              case "slingtv":
                return `https://watch.sling.com/1/asset/${t.videoId}/watch`;
              default:
                throw new Error();
            }
          }
          var e;
          throw new Error("Invalid Session Response");
        }
        Xi(t) {
          (this.Ki = Date.now()), vt.pushTask(this.Dn(t).bind(this));
        }
        Dn(e) {
          if (e.state === t.PAUSED && this.Ri === t.PLAYING) {
            this.Vi();
            const t = new M(R, P, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            U.l(t);
          } else if (e.state === t.PLAYING && this.Ri === t.PAUSED) {
            const t = new M(R, P, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            U.l(t), this.Vi();
          }
          return (this.Ri = e.state), (this.Wi = e.lastKnownTime), (this.zi = e.lastKnownTimeUpdatedAt), this.$i;
        }
        Ji(t) {
          var e;
          return me(this, void 0, void 0, function* () {
            try {
              const e = yield this.Ui.getVideoDataAsync(),
                i = yield this.Ui.getStateAsync();
              (e.is_player_fullscreen = null != document.fullscreenElement || document.webkitIsFullScreen),
                (e.is_chat_visible = this.q.getChatVisible()),
                (e.is_adblock_enabled = this.ki),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.Wi),
                t(e);
            } catch (i) {
              this.be(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        be(t) {
          const e = new M(R, P, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          U.l(e);
        }
        Pi(t) {
          return me(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  me(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.Si();
                      (yield this.Ti(i.data, t))
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
          return me(this, void 0, void 0, function* () {
            if (this.xi || this.Bi) return;
            const i = this.Ri;
            if (e.data.bufferingState) {
              (e.data.state = t.PAUSED), yield U.l(e, 1e3), yield this.Ui.waitVideoDoneLoadingAsync();
              const n = yield this.Si();
              (n.data.bufferingState = !0), i == t.PLAYING && (n.data.state = t.PLAYING), yield U.l(n, 1e3);
            } else yield U.l(e, 1e3);
          });
        }
        qi(t) {
          return me(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.Xt = e.sessionId),
              (this.Ri = e.state),
              (this.Wi = Number(e.lastKnownTime)),
              (this.zi = Number(e.lastKnownTimeUpdatedAt)),
              (this.en = e.videoId),
              (this.Ht = !1),
              "true" == e.controlLock && (this.g = !0),
              t.isCreate ? ((this.Ai = !0), vt.pushTask(this.Ii.bind(this), pe)) : this.forceSync();
            const i = new M(R, P, { name: "video_start", action: { description: "video session has begun" } });
            U.l(i), this.C.startListening(), this.hn();
          });
        }
        dn() {
          return new Promise((t) => {
            const e = new ae(R, P),
              i = Date.now();
            U.l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (B(this.wi, e - i, 5), (this._i = k(this.wi)), B(this.ji, e - Math.round(this._i / 2) - n, 5), (this.bi = k(this.ji)));
                }
              })
              .catch((t) => {
                V(t), this.be(t);
              }),
              t();
          });
        }
        Vi() {
          const t = new M(R, P, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          U.l(t);
        }
        hn() {
          this.nn && clearInterval(this.nn),
            this.Li && clearInterval(this.Li),
            (this.nn = setInterval(() => {
              vt.hasTaskInQueue(le) || vt.pushTask(this.$i, le);
            }, 5e3)),
            (this.Li = setInterval(() => {
              this.Vi();
            }, 6e4)),
            (this.ln = setInterval(() => {
              vt.hasTaskInQueue(de) || vt.pushTask(this.dn.bind(this), de);
            }, 12500)),
            this.dn();
        }
        Gi() {
          return !this.Xt || this.Ui.uiEventsHappening > 0 || this.Bi || this.xi || !this.C.shouldSync();
        }
        Oi(t) {
          return me(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== r.PAUSED && (yield this.Ui.pause()), Math.abs(this.Wi - i) > 2500)) {
              yield this.Ui.setCurrentTime(this.Wi);
              const t = new M(R, P, { name: "video_seek", action: { source: "another user" } });
              U.l(t);
            }
          });
        }
        Ni(t) {
          return me(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.on();
            if ((e == r.PAUSED && (yield this.Ui.play()), Math.abs(n - i) > 2500)) {
              yield this.Ui.setCurrentTime(n), yield this.Ui.play();
              const t = new M(R, P, { name: "video_seek", action: { source: "another user" } });
              U.l(t);
            }
          });
        }
        pn() {
          return this.Ri === t.PLAYING ? Date.now() - (this.zi + this.bi) : 0;
        }
        on() {
          return this.Wi + this.pn();
        }
        get changingVideo() {
          return this.xi;
        }
        set changingVideo(t) {
          this.xi = t;
        }
      }
      i(5640);
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
      var Ee = function (t, e, i, n) {
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
      var we = function (t, e, i, n) {
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
      class _e extends class {
        constructor(t) {
          (this.Ui = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return Ee(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return Ee(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return Ee(this, void 0, void 0, function* () {
            yield null === (t = this.We) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.gn();
        }
        stopListening() {
          this.Fn();
        }
        gn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            Ee(this, void 0, void 0, function* () {
              this.vn(), this.Ui.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              Ee(this, void 0, void 0, function* () {
                this.vn(), this.Ui.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        Fn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        yn() {
          var t;
          null === (t = this.We) || void 0 === t || t.tryBroadcast(!1);
        }
        vn() {
          var t;
          console.log("Going to wait for change"), null === (t = this.We) || void 0 === t || t.tryBroadcast(!0);
        }
        mn() {
          var t;
          null === (t = this.We) || void 0 === t || t.setBuffering(!0);
        }
        Cn(t) {
          var e;
          null === (e = this.We) || void 0 === e || e.setWatchingAds(!0, t);
        }
        En() {
          var t, e;
          null === (t = this.We) || void 0 === t || t.setWatchingAds(!1), null === (e = this.We) || void 0 === e || e.forceSync();
        }
        wn() {
          var t;
          null === (t = this.We) || void 0 === t || t.setBuffering(!1);
        }
        _n(t) {
          var e;
          null === (e = this.We) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        bn(t) {
          var e;
          null === (e = this.We) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.We = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t) {
          var e, i;
          super(t),
            (this.jn = this.vn.bind(this)),
            (this.Bn = this.onSeeking.bind(this)),
            (this.An = this.mn.bind(this)),
            (this.kn = this.wn.bind(this)),
            (this.Qn = () =>
              we(this, void 0, void 0, function* () {
                (yield this.Ui.getStateAsync()).playbackState === r.AD_PLAYING && (this.Cn(), yield this.In());
              })),
            (this.Ui = t),
            this.Ui.setVideoEventListener(this),
            (null === (e = window.teleparty) || void 0 === e ? void 0 : e.replaceScriptLoaded) ||
              (V("injecting replace script"),
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""),
                  (e.textContent = t),
                  (document.head || document.documentElement).appendChild(e),
                  e.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              )),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/paramount/paramount_injected_bundled.js"));
        }
        reloadListeners() {
          this.stopListening(), this.startListening();
        }
        loadNewVideoAsync(t) {
          return we(this, void 0, void 0, function* () {
            const e = performance.now();
            yield new Promise((i, n) => {
              const s = setInterval(() => {
                if (I.getVideoId(new URL(window.location.href)) === t) {
                  const t = this.Ui.getVideoElement();
                  if (t instanceof Element && t.src) return V("Loaded new Paramount+ video"), clearInterval(s), void i();
                }
                performance.now() - e >= 2e4 && (clearInterval(s), n(new Error("Could not load new video in time.")));
              }, 100);
            }),
              yield this.Ui.waitVideoDoneLoadingAsync(),
              yield this.Qn();
          });
        }
        In() {
          return we(this, void 0, void 0, function* () {
            yield this.Ui.play(), yield j(() => (this.Ui.isWatchingAd() || this.En(), !this.Ui.isWatchingAd()), 1 / 0)();
          });
        }
        startListening() {
          var t;
          super.startListening(),
            console.log("Start listening called"),
            null === (t = this.We) || void 0 === t || t.persistExtension(!0),
            this.xn(),
            (this.Sn = setInterval(() => {
              this.Qn();
            }, 2e3));
          const e = this.Ui.getVideoElement();
          e &&
            (e.addEventListener("play", this.jn),
            e.addEventListener("pause", this.jn),
            e.addEventListener("seeking", this.Bn),
            e.addEventListener("waiting", this.An),
            e.addEventListener("canplay", this.kn)),
            window.addEventListener("mouseup", this.jn),
            window.addEventListener("keyup", this.jn);
        }
        onSeeking() {
          const t = this.Ui.getVideoElement();
          t && t.readyState < 4 && this.mn(), this.vn();
        }
        xn() {
          var t, e, i;
          return we(this, void 0, void 0, function* () {
            if (w(new URL(window.location.href)))
              try {
                if (null === (t = this.We) || void 0 === t ? void 0 : t.changingVideo) return;
                this.We && (this.We.changingVideo = !0);
                const n = I.getVideoId(new URL(window.location.href));
                if (n == (null === (e = this.We) || void 0 === e ? void 0 : e.videoId))
                  return void (this.We && (this.We.changingVideo = !1));
                n && n != (null === (i = this.We) || void 0 === i ? void 0 : i.videoId) && this._n(n);
              } catch (t) {
                console.log(t);
              }
            else this.bn(Ot);
          });
        }
        stopListening() {
          super.stopListening();
          const t = this.Ui.getVideoElement();
          t &&
            (t.removeEventListener("seeking", this.Bn),
            t.removeEventListener("waiting", this.An),
            t.removeEventListener("canplay", this.kn),
            t.removeEventListener("play", this.jn),
            t.removeEventListener("pause", this.jn)),
            this.Sn && clearInterval(this.Sn),
            window.removeEventListener("mouseup", this.jn),
            window.removeEventListener("keyup", this.jn);
        }
      }
      var be = i(4296),
        je = i.n(be);
      class Be extends x {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class Ae extends Be {
        constructor(t, e, i) {
          super(t, e, qt.CREATE_SESSION), (this.data = i);
        }
      }
      const ke = new (class extends f {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", o.NETFLIX, !1);
      Object.freeze(ke);
      const Qe = ke;
      const Ie = new (class extends f {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", o.HULU, !1);
      Object.freeze(Ie);
      const xe = Ie;
      const Se = new (class extends f {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".disneyplus.") && t.pathname.includes("/video");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".disneyplus.") && !t.hostname.includes("apps.disneyplus.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", o.DISNEY_PLUS, !1, [
        "browse_scripts/disney/disney_browse_bundled.js"
      ]);
      Object.freeze(Se);
      const Te = Se;
      const Me = new (class extends f {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== _(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + _(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return _(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", o.HBO_MAX, !1);
      Object.freeze(Me);
      const Pe = Me;
      const $e = new (class extends f {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", o.AMAZON, !1);
      Object.freeze($e);
      const Re = $e;
      const Le = new (class extends f {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", o.CRUNCHYROLL, !1);
      Object.freeze(Le);
      const Ve = Le;
      const Ge = new (class extends f {
        isBrowsing(t) {
          return !(t.href.includes(".hotstar.") || t.href.includes("apps.disneyplus.") || !t.href.includes("watch?"));
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", o.YOUTUBE, !1);
      Object.freeze(Ge);
      const Ue = Ge;
      const Oe = new (class extends f {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", o.ESPN, !1);
      Object.freeze(Oe);
      const Ne = Oe;
      const He = new (class extends f {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", o.HOTSTAR, !1);
      Object.freeze(He);
      const We = He;
      const ze = new (class extends f {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", o.PEACOCK, !1);
      Object.freeze(ze);
      const Ke = ze;
      const Ye = new (class extends f {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", o.FUNIMATION, !1);
      Object.freeze(Ye);
      const Je = Ye;
      const qe = new (class extends f {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("play.max.");
        }
        getVideoId(t) {
          var e;
          const i = null === (e = t.pathname) || void 0 === e ? void 0 : e.match(/(watch\/)([a-zA-Z\-_0-9]+)\??/);
          return i ? i[2] : void 0;
        }
      })([], ["content_scripts/max/max_content_bundled.js"], "max", o.MAX, !1);
      Object.freeze(qe);
      const Xe = qe;
      const Ze = new (class extends f {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", o.STAR_PLUS, !1);
      Object.freeze(Ze);
      const ti = Ze;
      const ei = new (class extends f {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", o.PLUTO_TV, !1);
      Object.freeze(ei);
      const ii = ei;
      const ni = new (class extends f {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", o.APPLE_TV, !1);
      Object.freeze(ni);
      const si = ni;
      const ui = new (class extends f {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", o.JIO_CINEMA, !1);
      Object.freeze(ui);
      const oi = ui;
      const ri = new (class extends f {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", o.TUBI_TV, !1);
      Object.freeze(ri);
      const ai = ri;
      const ci = new (class extends f {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", o.CRAVE, !1);
      Object.freeze(ci);
      const Di = ci;
      const hi = new (class extends f {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", o.MUBI, !1);
      Object.freeze(hi);
      const di = hi;
      const li = new (class extends f {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", o.STAN, !1);
      Object.freeze(li);
      const pi = li;
      const gi = new (class extends f {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes("watch.sling.com"),
              i = t.pathname.split("/");
            return e && i.length > 0 && "watch" === i[i.length - 1];
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".sling.com");
        }
        getVideoId(t) {
          const e = t.pathname.split("/");
          if (e.length > 3) return e[3];
        }
      })([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", o.SLING, !1);
      Object.freeze(gi);
      const Fi = gi;
      const vi = new (class extends f {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("apps.disneyplus.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("apps.disneyplus.");
        }
        getVideoId(t) {
          const e = t.pathname.split("/");
          return e && e.length > 1 ? e[e.length - 2] : void 0;
        }
      })([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", o.DISNEY_PLUS_MENA, !1);
      Object.freeze(vi);
      const yi = vi;
      class mi {
        constructor(t, e) {
          (this.isBrowsing = !1), (this.needsCSPBlock = !1), (this.id = e), this.videoId, (this.url = t);
          const i = [si],
            n = [Qe, xe, Te, Pe, Re, Ue, Ve, Ne, I, We, Ke, ti, Xe, Je, si, ii, oi, ai, di, pi, Di, Fi, yi];
          for (const e of n) {
            if (e.isValidUrl(this.url)) {
              (this.streamingService = e),
                (this.serviceName = e.name),
                (this.videoId = e.getVideoId(t)),
                i.includes(e) && (this.needsCSPBlock = !0);
              break;
            }
            if (e.isBrowsing(this.url)) {
              (this.isBrowsing = !0), (this.streamingService = e), (this.serviceName = e.name), i.includes(e) && (this.needsCSPBlock = !0);
              break;
            }
          }
        }
        urlWithSessionId(t) {
          return this.streamingService ? this.streamingService.urlWithSessionId(t) : void 0;
        }
      }
      class fi extends Be {
        constructor(t, e, i) {
          super(t, e, qt.RE_INJECT), (this.data = i);
        }
      }
      var Ci = function (t, e, i, n) {
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
      var Ei,
        wi = function (t, e, i, n) {
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
      class _i extends class {
        constructor(t) {
          var e, i, n;
          (this.Tn = !1),
            (this.Mn = !1),
            (this.Pn = !1),
            (this.$n = 0),
            (this.Rn = !1),
            (this.Ln = !1),
            (this.Vn = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.Gn() : this.Un();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.On = new mi(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.Nn = t),
            this.Nn.setPageControls(this);
        }
        setChatApi(t) {
          (this.Nn = t), this.Nn.setPageControls(this);
        }
        Hn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.Pn ? "Only I have control" : "Everyone has control"),
            this.Pn
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        Wn() {
          this.Mn || ((this.Pn = !this.Pn), this.Hn());
        }
        setResetChatButton() {
          this.Nn.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Nn.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        zn() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.Nn.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.$n} unread ${1 == this.$n ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.Nn.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.Nn.shouldChatBeVisible() ||
            this.Nn.isPartyWindowsActive() ||
            (this.$n++,
            this.zn(),
            (this.Rn = !0),
            this.Gn(),
            b(1e3)().then(() => {
              this.Rn = !1;
            }));
        }
        teardown() {
          this.Kn(), this.Un(), this.Yn && clearInterval(this.Yn);
        }
        Jn() {
          var t;
          return Ci(this, void 0, void 0, function* () {
            if (this.Mn || this.Nn.inSession) return;
            if ((this.qn(), (this.Mn = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new fi(L, P, { extensionTabData: this.On });
              try {
                yield U.l(t);
              } catch (t) {
                return console.log(t), this.Xn(), this.be(t), this.Zn(s), void (this.Mn = !1);
              }
            }
            console.log("Sending create");
            const e = this.ts();
            try {
              const t = yield U.l(e);
              t.error ? (this.Zn(t.error.message), this.be(t.error.message)) : ((this.Mn = !1), this.es(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.Zn(s), this.be(t);
            }
            this.Xn(), (this.Mn = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        Kn() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        be(t) {
          const e = new M($, P, { name: "error", action: { description: "an error has occured", reason: t } });
          U.l(e);
        }
        Zn(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        ns(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, tt(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, tt(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, tt(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, tt(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, tt(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, tt(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, tt(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, tt(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, tt(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, tt(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, tt(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, tt(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, tt(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        Un() {
          this.Rn || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Gn() {
          return Ci(this, void 0, void 0, function* () {
            if (!this.Ln && (this.Vn || this.Nn.inSession)) {
              this.Ln = !0;
              try {
                yield this.addTpIcon(),
                  this.Nn.inSession ? this.enablePartyIcons() : this.Kn(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.Ln = !1;
              }
            }
          });
        }
        startEventListener() {
          this.Yn = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.Yn && clearInterval(this.Yn);
        }
        ss() {
          return "100px";
        }
        addTpIcon() {
          return Ci(this, void 0, void 0, function* () {
            if ((this.Vn || this.Nn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.ns(je()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.us());
            }
          });
        }
        us() {
          jQuery("#tp-control-lock-button").click(this.Wn.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.ss()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.ss()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.ss()}`),
            jQuery("#tp-link-button").click(this.os.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.rs(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.cs();
            });
        }
        cs() {
          const t = new dt(L, P, Ot);
          U.l(t), this.Un();
        }
        os() {
          this.Nn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        rs() {
          return Ci(this, void 0, void 0, function* () {
            (this.$n = 0),
              this.hideMessageIndicator(),
              this.Nn.isPartyWindowsActive()
                ? this.Nn.resetChatWindow(!0)
                : (this.Nn.shouldChatBeVisible(), yield this.Nn.setChatVisible(!this.Nn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.Tn && this.Gn();
        }
        setChatButtons() {
          this.Nn.inSession && this.Nn.getChatVisible() ? this.es() : this.Ds(),
            this.Nn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        es() {
          return Ci(this, void 0, void 0, function* () {
            this.Nn.inSession &&
              this.Nn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        Ds() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        ts() {
          return new Ae(L, P, this.hs());
        }
        hs() {
          return { createSettings: { controlLock: this.Pn }, streamingService: this.On.streamingService, tabId: this.On.id, source: "pc" };
        }
        qn() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        Xn() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        shouldMenuBeVisible() {
          const t = document.querySelector(".controls-manager");
          return !t || !("true" === t.getAttribute("aria-hidden"));
        }
        getControlsRoot() {
          return wi(this, void 0, void 0, function* () {
            return jQuery(".aa-player-skin");
          });
        }
      }
      class bi extends class {
        constructor(t, e, i, n) {
          (this.q = t),
            (this.Ui = e),
            (this.C = i),
            (this.ge = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.q), console.log("Resetting Chat Api for old controls")),
            (this.ds = new ue(this.q, this.ge)),
            (this.We = new fe(this.Ui, this.q, this.C)),
            (this.ls = !1),
            (this.ps = !1),
            (this.we = !1),
            (this.ui = new ie()),
            this.ui.addMessageListener(this.We),
            this.ui.addMessageListener(this.ds),
            this.ui.addMessageListener(this),
            (this.gs = !1),
            this.Fs();
        }
        vs() {
          return Ce(this, void 0, void 0, function* () {
            yield this.ge.addTpIcon(), this.ge.startEventListener();
          });
        }
        loadBrowseButton() {
          return Ce(this, void 0, void 0, function* () {
            yield this.ge.addTpIcon(), this.ge.startEventListener();
          });
        }
        Fs() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.q.inSession, alertModal: Vt };
            this.ys(t);
          }),
            t.onMessage.addListener(() => {
              V("Got background script"), (this.gs = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == R) {
            if (t.type === qt.IS_CONTENT_SCRIPT_READY) {
              if (this.ls) {
                i({ ready: !0 });
              } else (this.ps = !0), this.fs().then(i);
              return !0;
            }
            if (t.type === qt.GET_INIT_DATA) {
              return i(this.Cs()), !0;
            }
            if (t.type === qt.DISCONNECT && t.sender == $) {
              const t = new dt(R, P, Ot);
              U.l(t), i();
            } else {
              if (t.type == T.TEARDOWN) {
                const e = t;
                return this.ys(e.data), i(), !0;
              }
              t.type === T.ON_NOTIF && this.Es();
            }
          }
          return !1;
        }
        Es() {
          console.log("Show Notification");
        }
        ys(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.q.getPartyUrl();
            Gt(t.alertModal, i);
          }
          this.ge.teardown(), this.We.teardown(), this.ds.teardown(), this.ui.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new M(R, P, s);
          U.l(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        be(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new M(R, P, { name: "error", action: { reason: t } });
          U.l(e);
        }
        ws() {
          return Ce(this, void 0, void 0, function* () {
            return j(() => this.gs, 5e3)();
          });
        }
        fs() {
          return Ce(this, void 0, void 0, function* () {
            try {
              console.log("Waiting for content script ready"), yield this.ws();
              const t = yield this._s();
              return this.vs(), t;
            } catch (t) {
              const e = { message: n, showButton: !1 };
              return this.be(n), { ready: !1, error: e };
            } finally {
              this.ps = !1;
            }
          });
        }
        _s() {
          return Ce(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.Ui.waitVideoApiReadyAsync();
              const e = yield this.bs();
              e && e.error
                ? (V("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.ls = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.we = !0),
                  (this.ls = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.be(e.message);
            }
            return { ready: this.ls, error: t };
          });
        }
        Cs() {
          return {
            inSession: this.q.inSession,
            isChatVisible: this.q.isPartyWindowsActive() ? this.q.getChatWindowVisible() : this.q.getChatVisible(),
            partyUrl: this.q.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.q.isPartyWindowsActive()
          };
        }
        bs() {
          return Ce(this, void 0, void 0, function* () {
            const t = yield this.js();
            return U.l(t);
          });
        }
        js() {
          return Ce(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.Ui.getVideoDataAsync()).videoId };
            return new ee(R, P, t);
          });
        }
      } {
        constructor() {
          const t = new H(),
            e = new te(),
            i = new _e(t);
          let n;
          (n = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new _i(e)),
            super(e, t, i, n),
            V("Paramount Content Script");
        }
      }
      (window.teleparty && (null === (Ei = window.teleparty) || void 0 === Ei ? void 0 : Ei.contentScriptInjected)) ||
        (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
        (window.teleparty.contentScriptInjected = !0),
        new bi(),
        V("Initialized content script"));
    })();
})();
