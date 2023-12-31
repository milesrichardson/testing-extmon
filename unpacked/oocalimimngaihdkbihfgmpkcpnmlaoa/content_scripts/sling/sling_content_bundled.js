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
                  c = { fireOnAttributesModification: !1 };
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
                    e = u.mergeArrays(c, e);
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
              c = new (function () {
                var t = { fireOnAttributesModification: !1, onceOnly: !1, existing: !1 };
                function e(t, e, n) {
                  return (
                    !(!u.matchesSelector(t, e.selector) || (t.D === i && (t.D = s++), -1 != e.firedElems.indexOf(t.D))) &&
                    (e.firedElems.push(t.D), !0)
                  );
                }
                var n = (c = new r(
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
                  (c.bindEvent = function (e, i, s) {
                    void 0 === s ? ((s = i), (i = t)) : (i = u.mergeArrays(t, i));
                    var o = u.toElementsArray(this);
                    if (i.existing) {
                      for (var r = [], c = 0; c < o.length; c++)
                        for (var a = o[c].querySelectorAll(e), D = 0; D < a.length; D++) r.push({ callback: s, elem: a[D] });
                      if (i.onceOnly && r.length) return s.call(r[0].elem, r[0].elem);
                      setTimeout(u.callCallbacks, 1, r);
                    }
                    n.call(this, e, i, s);
                  }),
                  c
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
            var D = {};
            return h(c, D, "unbindAllArrive"), h(a, D, "unbindAllLeave"), D;
          }
          function h(t, e, i) {
            u.addMethod(e, i, t.unbindEvent),
              u.addMethod(e, i, t.unbindEventWithSelectorOrCallback),
              u.addMethod(e, i, t.unbindEventWithSelectorAndCallback);
          }
          function d(t) {
            (t.arrive = c.bindEvent), h(c, t, "unbindArrive"), (t.leave = a.bindEvent), h(a, t, "unbindLeave");
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
      })(t || (t = {}));
      const e = 340,
        n = chrome.runtime.id,
        s = "reactionContainerOpen",
        u = "https://sessions.teleparty.com",
        o = "https://redirect.teleparty.com",
        r = o,
        c = `${o}/sidebar`,
        a = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        D = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        h = "recentlyUsedEmojiMap",
        d = "redirectDataMap",
        l = [
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
        p =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var g;
      !(function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(g || (g = {}));
      var F, v;
      function y(t) {
        const e = t.hostname.includes("watch.sling.com"),
          i = t.pathname.split("/");
        return e && i.length > 0 && "watch" === i[i.length - 1];
      }
      function m(t) {
        return t.includes("urn:hbo:feature")
          ? g.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? g.EPISODE
          : t.includes("urn:hbo:extra")
          ? g.EXTRA
          : g.OTHER;
      }
      function f(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function C(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : f(i)().then(s);
            };
          return s();
        };
      }
      function E(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function w(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share");
      })(F || (F = {}));
      class _ {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class b extends _ {
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
          (t.GET_EXPERIMENT_FLAG = "getExpFlag"),
          (t.USER_LIST = "userList"),
          (t.USER_AUTHENTICATED = "userAuthenticated"),
          (t.BLOCK_CSP = "blockCSP");
      })(v || (v = {}));
      class j extends b {
        constructor(t, e, i) {
          super(t, e, v.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const B = "Service_Background",
        A = "Popup",
        k = "Content_Script",
        Q = "Page_Controls";
      var I = console.log.bind(window.console),
        x = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      const T = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t), chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, e, i = 2e4) {
          return x(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              const u = setTimeout(() => {
                console.log("send timeout"), s("Message Timeout");
              }, i);
              try {
                chrome.tabs.sendMessage(e, t, (e) => {
                  chrome.runtime.lastError && I(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
                });
              } catch (t) {
                clearTimeout(u), s(t);
              }
            });
          });
        }
        l(t, e) {
          return x(this, void 0, void 0, function* () {
            return new Promise((i, s) => {
              let u = null;
              e &&
                (u = setTimeout(() => {
                  s({ error: "Send Message Timeout" });
                }, e));
              try {
                chrome.runtime.sendMessage(n, t, (e) => {
                  chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), u && clearTimeout(u), i(e);
                });
              } catch (t) {
                u && clearTimeout(u), s(t);
              }
            });
          });
        }
      })();
      var S,
        M = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      !(function (t) {
        (t.LOADING = "loading"),
          (t.PLAYING = "playing"),
          (t.IDLE = "idle"),
          (t.AD_PLAYING = "ad_playing"),
          (t.PAUSED = "paused"),
          (t.NOT_READY = "not_ready");
      })(S || (S = {}));
      class P {
        constructor(t, e, i, n, s, u = []) {
          (this.requiredPermissions = t),
            (this.serverName = i),
            (this.name = n),
            (this.contentScripts = e),
            (this.syncFromEnd = s),
            (this.browseScripts = u);
        }
        urlWithSessionId(t) {
          return `${r}/join/${t}`;
        }
      }
      const $ = new (class extends P {
        isValidUrl(t) {
          return y(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".sling.com");
        }
        getVideoId(t) {
          const e = t.pathname.split("/");
          if (e.length > 3) return e[3];
        }
      })([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", t.SLING, !1);
      Object.freeze($);
      const R = $;
      var O;
      !(function (t) {
        (t.PAUSED = "paused"), (t.PLAYING = "playing");
      })(O || (O = {}));
      var G = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class L extends class {
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
          const i = new j(k, B, { name: "video_error", action: { description: t, reason: e } });
          T.l(i);
        }
        doAdCheck() {
          return M(this, void 0, void 0, function* () {});
        }
      } {
        F() {
          const t = this.getVideoElement();
          return null == t ? S.NOT_READY : t.readyState < t.HAVE_FUTURE_DATA ? S.LOADING : t.paused ? S.PAUSED : S.PLAYING;
        }
        waitVideoApiReadyAsync() {
          return G(this, void 0, void 0, function* () {
            yield C(() => {
              const t = this.F();
              return "paused" === t || "playing" === t;
            }, 1 / 0)();
          });
        }
        waitVideoDoneLoadingAsync() {
          return C(() => this.F() !== S.LOADING, 1e4)();
        }
        getStreamingServiceName() {
          return t.SLING;
        }
        v() {
          return G(this, void 0, void 0, function* () {
            yield this.openOverlay();
            const t = document.querySelector('[data-testid="player-position-duration"]');
            if (t) {
              const e = t.textContent,
                i = null == e ? void 0 : e.split("/")[1].trim(),
                n = null == i ? void 0 : i.split(":");
              if (n && n.length) {
                if (3 === n.length) {
                  return 60 * parseInt(n[0], 10) * 60 + 60 * parseInt(n[1], 10) + parseInt(n[2], 10);
                }
                if (2 === n.length) {
                  return 60 * parseInt(n[0], 10) + parseInt(n[1], 10);
                }
                return parseInt(n[0], 10);
              }
            }
            return 0;
          });
        }
        m(t, e = !1) {
          return G(this, void 0, void 0, function* () {
            if (t > 2 || e) {
              yield this.openOverlay();
              const e = document.querySelector(".seekable");
              if (e) {
                const i = (t / 100) * e.offsetWidth,
                  n = new MouseEvent("click", { bubbles: !0, cancelable: !0, view: window, clientX: e.getBoundingClientRect().left + i });
                e.dispatchEvent(n), console.log("_simulateSeekClick 4");
              }
            }
            if (e) {
              const t = this.getVideoElement();
              t && (t.currentTime = 0);
            }
          });
        }
        setCurrentTime(t, e = !1) {
          return G(this, void 0, void 0, function* () {
            const i = yield this.v();
            I("Seeking: " + t);
            const n = this.getVideoElement();
            if (n) {
              this.p += 1;
              try {
                const s = t / 1e3;
                Math.abs(n.currentTime - s) > 4 && this.m((s / i) * 100, e);
              } finally {
                this.p -= 1;
              }
            }
          });
        }
        C() {
          const t = this.getVideoElement();
          return t ? Math.floor(1e3 * t.currentTime) : 0;
        }
        getStateAsync() {
          return new Promise((t, e) => {
            const i = this.F(),
              n = this.C();
            void 0 !== n ? t({ playbackState: i, playbackPositionMilliseconds: n }) : e();
          });
        }
        getUpdateSessionDataAsync() {
          return G(this, void 0, void 0, function* () {
            const t = this.C();
            if (void 0 === t) throw new Error();
            const e = this.getVideoElement();
            return { state: e && !e.paused ? O.PLAYING : O.PAUSED, lastKnownTime: t, lastKnownTimeUpdatedAt: Date.now() };
          });
        }
        _() {
          let t = 0;
          const e = this.getVideoElement();
          return e && (t = Math.floor(1e3 * e.duration)), t;
        }
        j() {
          var t;
          return null !== (t = R.getVideoId(new URL(window.location.href))) && void 0 !== t ? t : "";
        }
        B() {
          return document.title;
        }
        A() {
          return g.FEATURE;
        }
        k() {
          return {};
        }
        getVideoDataAsync() {
          return new Promise((t, e) => {
            var i, n;
            const s = this._(),
              u = null !== (i = this.j()) && void 0 !== i ? i : "",
              o = null !== (n = this.B()) && void 0 !== n ? n : "",
              r = this.getScreenSize(),
              c = this.A(),
              a = this.k(),
              D = this.getVideoContent(u, o, window.location.href, c, a);
            void 0 !== s && void 0 !== u && void 0 !== o
              ? t({
                  videoId: u,
                  videoTitle: o,
                  videoDuration: s,
                  screen: r,
                  serviceDomain: window.location.hostname,
                  content: D,
                  videoState: this.F()
                })
              : e();
          });
        }
        getVideoElement() {
          return document.querySelector("video");
        }
        setVideoEventListener(t) {
          this.I = t;
        }
        jumpToNextEpisode(t) {
          var e;
          return G(this, void 0, void 0, function* () {
            this.p += 1;
            R.getVideoId(new URL(window.location.href)) != t.videoId &&
              (yield null === (e = this.I) || void 0 === e ? void 0 : e.reloadNextEpisode()),
              (this.p -= 1);
          });
        }
        freeze(t) {
          return G(this, void 0, void 0, function* () {
            this.p += 1;
            try {
              yield this.pause(), yield f(t)(), yield this.play();
            } finally {
              this.p -= 1;
            }
          });
        }
        openOverlay() {
          return G(this, void 0, void 0, function* () {
            yield C(() => {
              document.querySelector('[data-testid="player-controls-container"]').click();
              return !!document.querySelector(".player_controls");
            }, 1 / 0)();
          });
        }
        pause() {
          return G(this, void 0, void 0, function* () {
            if (this.F() !== S.PAUSED) {
              this.p += 1;
              try {
                yield this.openOverlay();
                const t = document.querySelector('[data-testid="player-button-pause"]');
                t && t.click();
              } catch (t) {
                if (this.F() !== S.PAUSED) throw (this.logError("video was unable to pause correctly", t), t);
              } finally {
                this.p -= 1;
              }
            }
          });
        }
        play() {
          return G(this, void 0, void 0, function* () {
            if (this.F() !== S.PLAYING) {
              this.p += 1;
              try {
                yield this.openOverlay();
                const t = document.querySelector('[data-testid="player-button-play"]');
                t && t.click();
              } catch (t) {
                if (this.F() !== S.PLAYING) throw (this.logError("video was unable to play correctly", t), t);
              } finally {
                this.p -= 1;
              }
            }
          });
        }
      }
      var V = i(7206),
        U = i.n(V);
      const N = [
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
        H = [
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
        W = [
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
        z = {
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
      function K(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                p,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(p, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(p) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const Y = {
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
        J = "Failed to read chrome storage. Please refresh the page and try again",
        q = "Failed to connect to Script. Please refresh the page and try again",
        X = "An unexpected error occured. Please refresh the page and try again.";
      var Z = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const tt = new (class {
        setItemsAsync(t) {
          return Z(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(tt);
      const et = tt;
      var it,
        nt = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      class st {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.T = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : D
          }),
            (this.S = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = K(t)),
            (this.T.userIcon = t),
            et.setItemsAsync({ userIcon: t }),
            I("new user settings after set user icon: " + JSON.stringify(this.T));
        }
        saveUserNickname(t) {
          (this.T.userNickname = t),
            et.setItemsAsync({ userNickname: t }),
            I("new user settings after set user nickname: " + JSON.stringify(this.T));
        }
        saveUserSettings(t) {
          return nt(this, void 0, void 0, function* () {
            const e = K(t.userIcon);
            (this.T = t),
              (this.T.userIcon = e),
              yield et.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              I("new user settings after save: " + JSON.stringify(this.T));
          });
        }
        get userSettings() {
          return this.T;
        }
        get permId() {
          return this.S;
        }
        get userIcon() {
          return this.T.userIcon;
        }
        get userNickname() {
          return this.T.userNickname;
        }
      }
      class ut extends _ {
        constructor(t, e, i) {
          super(t, e, i), (this.M = i);
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
      })(it || (it = {}));
      class ot extends ut {
        constructor(t, e, i) {
          super(t, e, it.SET_TYPING), (this.data = i);
        }
      }
      class rt extends ut {
        constructor(t, e, i) {
          super(t, e, it.SEND_MESSAGE), (this.data = i);
        }
      }
      class ct extends ut {
        constructor(t, e, i) {
          super(t, e, it.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class at extends b {
        constructor(t, e, i) {
          super(t, e, v.TEARDOWN), (this.data = i);
        }
      }
      class Dt extends ut {
        constructor(t, e, i) {
          super(t, e, it.SEND_REACTION), (this.data = i);
        }
      }
      class ht extends ut {
        constructor(t, e, i) {
          super(t, e, it.SEND_GIF), (this.data = i);
        }
      }
      var dt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class lt {
        constructor() {
          this.resetTasks(), (this.P = []), (this.$ = 0), (this.R = Promise.resolve()), (this.O = !0);
        }
        createInstance() {
          return new lt();
        }
        pushTask(t, e) {
          if (!this.O) return;
          const i = { action: t, name: e };
          0 === this.$ && this.resetTasks(),
            (this.$ = this.P.push(i)),
            (this.R = this.R.then(() => {
              if (this.P.includes(i) && this.O)
                return this.G(i)().then(() => {
                  this.P.shift(), (this.$ -= 1);
                });
            }));
        }
        disable() {
          (this.O = !1), this.resetTasks();
        }
        resetTasks() {
          (this.R = Promise.resolve()), (this.P = []), (this.$ = 0);
        }
        G(t) {
          return function () {
            return dt(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
          };
        }
        get tasksInFlight() {
          return this.$;
        }
        hasTaskInQueue(t) {
          return this.P.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.P),
            (this.P = this.P.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.$ = this.P.length),
            console.log(this.P);
        }
      }
      const pt = new lt();
      var gt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const Ft = new (class {
        getItemsAsync(t) {
          return gt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), i(new Error(J))) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return gt(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), e(new Error(J))) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(Ft);
      const vt = Ft;
      var yt,
        mt = new Uint8Array(16);
      function ft() {
        if (
          !yt &&
          !(yt =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return yt(mt);
      }
      const Ct = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const Et = function (t) {
        return "string" == typeof t && Ct.test(t);
      };
      for (var wt = [], _t = 0; _t < 256; ++_t) wt.push((_t + 256).toString(16).substr(1));
      const bt = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            wt[t[e + 0]] +
            wt[t[e + 1]] +
            wt[t[e + 2]] +
            wt[t[e + 3]] +
            "-" +
            wt[t[e + 4]] +
            wt[t[e + 5]] +
            "-" +
            wt[t[e + 6]] +
            wt[t[e + 7]] +
            "-" +
            wt[t[e + 8]] +
            wt[t[e + 9]] +
            "-" +
            wt[t[e + 10]] +
            wt[t[e + 11]] +
            wt[t[e + 12]] +
            wt[t[e + 13]] +
            wt[t[e + 14]] +
            wt[t[e + 15]]
          ).toLowerCase();
        if (!Et(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const jt = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || ft)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return bt(n);
      };
      var Bt;
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
      })(Bt || (Bt = {}));
      const At = chrome.extension.getURL("img/x-circle.svg"),
        kt = "with-chat";
      var Qt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const It = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? W.includes(t.split("?newIconUrl=")[1]) && N.includes(t.split("?newIconUrl=")[0]) : W.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return H[Math.floor(Math.random() * H.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        L(t) {
          return Qt(this, void 0, void 0, function* () {
            try {
              yield et.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return Qt(this, void 0, void 0, function* () {
            const t = yield vt.getAllItemsAsync(),
              e = It.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.L(e), e;
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
      Object.freeze(It);
      const xt = It,
        Tt = 1e3,
        St = 72e5,
        Mt = 12e4,
        Pt = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        $t = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        Rt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Ot = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function Gt(t, e) {
        Lt();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${At}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${At}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            Lt();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              Lt(), (window.location.href = e);
            });
      }
      function Lt() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const Vt = { showAlert: !1 },
        Ut = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var Nt;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(Nt || (Nt = {}));
      var Ht = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class Wt {
        constructor(t) {
          (this.V = this.U.bind(this)),
            (this.N = this.resetIdleTimer.bind(this)),
            (this.H = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.W(t.data);
            }),
            (this.K = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.Y = (t) => {
              this.J.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new j(k, B, n);
              T.l(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.J.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.J.toggleGIFs();
            }),
            (this.W = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new j(k, B, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              T.l(n);
              const s = new j(k, B, { eventType: `emoji-click-${i}`, sessionId: this.J.getSessionId() });
              T.l(s), pt.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.J.focusChat(), this.q(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.X(), this.J.onInputChange();
            }),
            (this.J = t);
        }
        Z() {
          I("Idle Warning called"), Gt($t);
          const t = new j(k, B, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          T.l(t);
          const e = new j(k, B, { eventType: "idle-warn-2hr", sessionId: this.J.getSessionId() });
          T.l(e), (this.tt = setTimeout(this.et.bind(this), Mt));
        }
        et() {
          I("Idle kick called");
          const t = new j(k, B, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new at(k, B, Ut);
          T.l(t), T.l(e);
        }
        resetIdleTimer() {
          this.it && clearTimeout(this.it), this.tt && (Lt(), clearTimeout(this.tt)), (this.it = setTimeout(this.Z.bind(this), St));
        }
        nt() {
          (this.it = setTimeout(this.Z.bind(this), St)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.N();
            }),
            (window.onfocus = () => this.N()),
            (window.onmousedown = () => this.N()),
            (window.ontouchstart = () => this.N()),
            (window.onkeydown = () => this.N());
        }
        st() {
          this.it && clearTimeout(this.it),
            this.tt && clearTimeout(this.tt),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          I("Listening for chat events"), this.nt(), this.ut(), this.initWindowListeners();
        }
        stopListening() {
          this.ot(), this.st(), this.rt();
        }
        U() {
          this.J.clearUnreadCount();
        }
        ct(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.J.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.V),
            window.addEventListener("message", this.H),
            document.addEventListener("dragstart", this.Dt.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.J.onFullScreen),
            document.addEventListener("fullscreenchange", this.J.onFullScreen),
            document.addEventListener("keydown", this.K, !0),
            document.addEventListener("emoji-click", this.W),
            document.addEventListener("click", this.Y);
        }
        ut() {
          jQuery(window).on("focus", this.V),
            jQuery("#party-tab").on("click", this.J.togglePartyTab.bind(this.J)),
            jQuery("#friends-tab").on("click", this.J.toggleFriendsTab.bind(this.J)),
            jQuery(".user-icon").on("click", this.J.toggleLargeUserIconButton.bind(this.J)),
            jQuery("#user-icon").on("click", this.J.toggleIconContainer.bind(this.J)),
            jQuery("#link-icon").on("click", this.J.linkIconListener.bind(this.J)),
            jQuery("#reset-icon").on("click", this.J.resetIconListener.bind(this.J)),
            jQuery(".image-button").on("click", this.J.userIconSelectorListener.bind(this.J)),
            jQuery("#chat-input-container").on("keydown", this.J.onChatKeyDown.bind(this.J)),
            jQuery("#nickname-edit").on("keydown", this.J.onChatKeyDown.bind(this.J)),
            jQuery("#chat-input").on("keypress", this.J.onChatKeyPress.bind(this.J)),
            jQuery("#chat-input").on("input", this.J.onInputChange.bind(this.J)),
            jQuery("#gif-search").on("keyup", this.J.onGifSearch.bind(this.J)),
            jQuery("#saveChanges").on("click", this.J.saveChangesListener.bind(this.J)),
            jQuery("#cancelNickname").on("click", this.J.cancelNicknameListener.bind(this.J)),
            jQuery("#chat-wrapper").on("mouseup", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.J.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.J.onChatKeyUp.bind(this.J)),
            jQuery("#emoji-picker-btn").on("click", this.J.addEmojiPicker.bind(this.J)),
            jQuery("#gif-btn").on("click", this.J.addGifPicker.bind(this.J)),
            jQuery(".gif-img").on("click", this.J.clickGif.bind(this.J)),
            jQuery(".gif-results").on("click", "video, img", this.J.clickGif.bind(this.J)),
            jQuery("#category-container").on("click", "video", this.J.clickGif.bind(this.J)),
            jQuery("#gif-input-back").on("click", this.J.resetGif.bind(this.J)),
            jQuery("#reaction-btn").on("click", this.J.addReactionTab.bind(this.J)),
            jQuery("#chat-input-container").on("click", this.ht.bind(this)),
            jQuery("#chat-input").on("input", this.X.bind(this)),
            jQuery("#chat-input").on("drop", this.dt.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.J.onScrollToBottom.bind(this.J)),
            this.lt(),
            document.addEventListener("keydown", this.K.bind(this), !0),
            this.J.initCustomListeners();
        }
        lt() {
          jQuery("#tp-heart-button").on("click", () => {
            this.J.onReactionClicked(Nt.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.J.onReactionClicked(Nt.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.J.onReactionClicked(Nt.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.J.onReactionClicked(Nt.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.J.onReactionClicked(Nt.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.J.onReactionClicked(Nt.FIRE);
            });
        }
        X() {
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
        dt(t) {
          t.preventDefault();
        }
        Dt(t) {
          t.preventDefault();
        }
        ht(t) {
          t.target === jQuery("#chat-input")[0] && this.J.focusChat();
        }
        q(t) {
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
        gt(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        Ft(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.gt(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Ht(this, void 0, void 0, function* () {
            const i = yield vt.getItemsAsync([h]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : l;
            this.Ft(n) || (n = l),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield et.setItemsAsync({ [h]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        rt() {
          jQuery(window).off("focus", this.V),
            document.removeEventListener("emoji-click", this.W),
            document.removeEventListener("keydown", this.K, !0),
            document.removeEventListener("click", this.Y),
            window.removeEventListener("message", this.H),
            document.removeEventListener("webkitfullscreenchange", this.J.onFullScreen),
            document.removeEventListener("fullscreenchange", this.J.onFullScreen);
        }
        ot() {
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
      class zt {
        constructor(t) {
          (this.J = t),
            (this.vt = []),
            (this.yt = 0),
            (this.ft = document.title),
            (this.Ct = 0),
            (this.Et = new Map()),
            (this.wt = new Map()),
            (this._t = []),
            (this.bt = []),
            (this.jt = ""),
            I("Message Controller");
        }
        Bt(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${K(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${K(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        At(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.J.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${K(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${K(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${K(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        kt(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${K(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${K(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Qt(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.J.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${K(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${K(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${K(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        It(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.S = e.permId), (u.xt = i), (u.Tt = n), (u.St = e), (u.Mt = s);
        }
        reloadMessages() {
          this.J.queueMessageForFrame(Bt.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.vt));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.vt = t;
        }
        Pt(t, e) {
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
            (void 0 === i && (i = this.vt.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.Et.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.vt.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Pt(n, t);
          this.vt.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.J.queueMessageForFrame(Bt.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const c = "" === r ? this.kt(o, u, s) : this.Bt(o, r, u, s);
          this.It(c, u, o, r, s), this.scrollToBottom(), this.$t();
        }
        addGif(t, e) {
          void 0 === e && (e = this.vt.length);
          const i = this.vt.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Pt(i, t);
          this.vt.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.J.queueMessageForFrame(Bt.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.Qt(s, t, n) : this.At(s, u, t, n);
          (o[0].Rt = !0), this.It(o, t, s, u, n), f(100)().then(this.scrollToBottom.bind(this)), this.$t();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.yt > 0 && ((this.yt = 0), (document.title = this.ft));
        }
        $t() {
          (this.yt += 1), (this.Ct += 1), document.hasFocus() || (document.title = "(" + String(this.yt) + ") " + this.ft);
        }
        getUserIconURL(t, e = "") {
          if (!this.Et.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.Ot();
            this.Et.set(t, n), this.bt.push(n);
          }
          return this.Et.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return W.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : N.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.wt.has(t) || (this.wt.set(t, e), this._t.push(e)), K(this.wt.get(t));
        }
        Ot() {
          let t = chrome.runtime.getURL("img/icons/General/" + N[Math.floor(Math.random() * N.length)]);
          if (this.bt.length < z.General.length)
            for (; this.bt.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + N[Math.floor(Math.random() * N.length)]);
          return t;
        }
        Gt(t) {
          const e = t[0],
            i = e.S;
          let n = e.xt;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.xt = n));
          const s = e.Tt;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.St,
                o = e.Mt;
              let r;
              if (
                (e.Rt && s && "gifObject" in s && o && (r = "" == u ? this.Qt(n, s, o) : this.At(n, u, s, o)),
                !e.Rt && s && "isSystemMessage" in s && o && (r = "" == u ? this.kt(n, s, o) : this.Bt(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.S = i), (e.xt = n), (e.Tt = u), (e.St = s), (e.Mt = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.jt = t), this.J.queueMessageForFrame(Bt.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.jt), jQuery(".user-icon img").attr("src", this.jt);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.Gt(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.Gt(jQuery(e[t]));
          this.J.isChatFrameActive() && this.reloadMessages();
        }
        Lt(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              W.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : N.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              W.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : N.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = z.General.filter((t) => !this.bt.includes(t));
            0 === t.length && (t = z.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Lt(e);
          this.Et.set(t, i), this.bt.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = K(e);
          this.wt.set(t, i), this._t.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Lt(e);
          this.Et.set(t, n), this.bt.push(n), this.wt.set(t, i), this._t.push(i), this.renderSidebar();
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
          const t = new j(k, B, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          T.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.J.getSessionId() },
            i = new j(k, B, e);
          T.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new j(k, B, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              T.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.J.getSessionId() },
                i = new j(k, B, e);
              T.l(i);
            });
        }
      }
      class Kt {
        constructor(t) {
          (this.Vt = !1), (this.Ut = !1), (this.Nt = !1), (this.J = t);
        }
        setupPresenceIndicator() {
          (this.Vt = !1), (this.Ut = !1), (this.Nt = !1), this.Ht();
        }
        Wt() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Vt = t), this.Ht();
        }
        setBufferingPresenceVisible(t) {
          (this.Ut = t), this.Ht();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Nt = t), this.Ht();
        }
        getWatchingAdsVisible() {
          return this.Nt;
        }
        zt() {
          return this.Nt
            ? "People are watching ads..."
            : this.Vt && this.Ut
            ? "People are typing and buffering..."
            : this.Vt
            ? "People are typing..."
            : this.Ut
            ? "People are buffering..."
            : "";
        }
        Ht() {
          const t = this.zt();
          this.Wt().text(t), this.J.queueMessageForFrame(Bt.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var Yt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      var Jt,
        qt,
        Xt = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      class Zt extends class {
        constructor() {
          (this.Kt = !1),
            (this.Yt = 1),
            (this.Jt = ""),
            (this.qt = ""),
            (this.Xt = "0"),
            (this.Zt = ""),
            (this.te = !0),
            (this.ee = !1),
            (this.ie = 0),
            (this.ne = []),
            (this.se = new lt()),
            (this.ue = !1),
            (this.oe = void 0),
            (this.re = !0),
            (this.ce = this.ae()),
            (this.De = this.ae()),
            (this.he = !1),
            (this.de = !1),
            (this.le = []),
            (this.logEvent = (t) => {
              const e = new j(k, B, t);
              T.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              vt.getItemsAsync([s]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.pe) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.se.pushTask(() => et.setItemsAsync({ [s]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this.pe) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.ge = !1),
            (this.Fe = new Wt(this)),
            (this.ve = new Kt(this)),
            (this.ye = new zt(this)),
            (this.fe = void 0),
            (this.Ce = void 0),
            (this.Ee = !1);
        }
        setPageControls(t) {
          this.pe = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.pe) || void 0 === t || t.enablePartyIcons(), null === (e = this.pe) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return Yt(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.te = t), t && !this.we() && this.reloadChat();
          });
        }
        _e(t, e) {
          const i = new j(k, B, { name: "error", action: { reason: e, description: t } });
          T.l(i);
        }
        getChatWindowVisible() {
          return this.De;
        }
        setChatWindowActive(t) {
          this.ce = t;
        }
        isChatFrameActive() {
          return this.re;
        }
        isPartyWindowsActive() {
          return this.ce;
        }
        shouldChatBeVisible() {
          return this.te;
        }
        incrementEmojiCount() {
          this.ie++;
        }
        resetEmojiCount() {
          this.ie = 0;
        }
        getEmojiCount() {
          return this.ie;
        }
        setChatFrameReady(t) {
          this.ue && this.be(), (this.ue = !0), (this.je = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.se.pushTask(() =>
            Yt(this, void 0, void 0, function* () {
              this.Be(t, e);
            })
          );
        }
        Be(t, e) {
          return Yt(this, void 0, void 0, function* () {
            const i = this.je,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: k };
            T.l(n);
          });
        }
        Ae() {
          var t;
          return Yt(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield C(() => this.ue && null != this.je, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.oe && this.ke(this.oe),
                null === (t = this.pe) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this._e("Sidewindow didn't load in time", t);
            }
          });
        }
        ae() {
          return window.origin.includes(".crunchyroll.com"), window.origin.includes("tv.apple.com"), !1;
        }
        Qe() {
          return Yt(this, void 0, void 0, function* () {
            yield T.l(new b(k, B, v.LOAD_CHAT_WINDOW)), console.log(this.je);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return Yt(this, void 0, void 0, function* () {
            yield T.l(new b(k, B, v.RESET_CHAT_WINDOW)),
              console.log(this.je),
              (this.De = !0),
              (this.te = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.he && t && (this.resetIconListener(), null === (e = this.pe) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return Yt(this, void 0, void 0, function* () {
            yield T.l(new b(k, B, v.HIDE_CHAT_WINDOW)), (this.De = !1), (this.te = !1);
          });
        }
        Ie() {
          return Yt(this, void 0, void 0, function* () {
            this.Qe(), this.se.pushTask(this.Ae.bind(this));
          });
        }
        loadInitData(t) {
          this.oe = t;
        }
        ke(t) {
          var e;
          return Yt(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = z), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield xt.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(Bt.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(Bt.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(Bt.SET_USER_LIST, this.le),
              this.queueMessageForFrame(Bt.UPDATE_SETTINGS, {
                userSettings: null === (e = this.xe) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        be() {
          return Yt(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.oe && (yield this.ke(this.oe)), this.xe)) {
              const t = this.ye.getUserIconURL(this.xe.permId, this.xe.userIcon);
              this.queueMessageForFrame(Bt.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(Bt.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Te() {
          return Yt(this, void 0, void 0, function* () {
            this.Se(),
              yield f(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.Me(),
              this.ve.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        Pe(t) {
          this.Fe.initWindowListeners(), this.ae() && this.Ie(), this.se.pushTask(this.Ae.bind(this)), Lt(), (this.xe = new st(t));
          const e = this.ye.getUserIconURL(this.xe.permId, this.xe.userIcon);
          this.ye.setUserIconUrl(e),
            this.ye.renderSidebar(),
            this.we() && this.removeChat(),
            (this.ge = !0),
            this.$e(),
            this.ae()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Te(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return Yt(this, void 0, void 0, function* () {
            "true" !== (yield vt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.ye.addYoutubePromo(), et.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.oe = t;
          const e = Object.assign({}, t);
          (e.iconMap = z),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(Bt.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return Yt(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.we() ||
                this.isPartyWindowsActive() ||
                (this.Se(),
                yield f(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.te),
                this.addIconSelector(),
                this.Re(),
                this.Me(),
                this.ve.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new at(k, B, t);
          T.l(e);
        }
        we() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.ye.clearUnreadCount();
        }
        Oe() {
          return Yt(this, void 0, void 0, function* () {
            try {
              yield C(() => null !== document.querySelector("#chat-history") || this.ce || (this.ue && this.re), 1e4)();
            } catch (t) {
              this._e("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.se.pushTask(() =>
            Yt(this, void 0, void 0, function* () {
              yield this.Oe(), this.ye.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.se.pushTask(() =>
            Yt(this, void 0, void 0, function* () {
              yield this.Oe(), this.ye.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.ye.reloadMessages();
        }
        scrollToBottom() {
          this.ye.scrollToBottom();
        }
        addReviewMessage() {
          this.ye.addReviewMessage(), (this.Ee = !0);
        }
        get showingReveiwMessage() {
          return this.Ee;
        }
        set shouldReturnToVideo(t) {
          this.he = t;
        }
        onBufferingMessage(t) {
          this.se.pushTask(() =>
            Yt(this, void 0, void 0, function* () {
              yield this.Oe(), this.ve.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.se.pushTask(() =>
            Yt(this, void 0, void 0, function* () {
              yield this.Oe(), this.ve.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.se.pushTask(() =>
            Yt(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Oe(), this.ve.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.ve.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.xe) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Ge(this.Le(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.ye.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.xe)) {
            const t = this.ye.getUserIconURL(this.xe.permId, this.xe.userIcon);
            this.ye.setUserIconUrl(t), this.ye.renderSidebar();
          }
        }
        Me() {
          C(() => this.we(), 1e4)().then(() => {
            this.Fe.startListening();
          });
        }
        Re() {
          this.Fe.stopListening(), this.Ve && (clearTimeout(this.Ve), (this.ee = !1));
        }
        teardown() {
          (this.ge = !1),
            (this.qt = void 0),
            (this.Ue = void 0),
            this.Re(),
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
            this.se.pushTask(() => et.setItemsAsync({ [s]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return Yt(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.ye.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(Bt.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new j(k, B, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          T.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new j(k, B, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          T.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new j(k, B, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          T.l(e), this.toggleReactions();
        }
        $e() {
          if (
            (I("Set Chat Html called"),
            (this.Ne = U()),
            (this.Ne = this.Ne.replace(/{EXTENSION_LOGO}/g, K(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.xe)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          const t = chrome.runtime.getURL("");
          this.Ne = this.Ne.replace(/{CHAT_URL}/g, `${c}?t=${Date.now()}&id=${encodeURIComponent(t.substring(0, t.length - 1))}`);
          for (const t of a) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.Ne = this.Ne.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.Ne = this.Ne.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.Ne = this.Ne.replace(/{USER_NICKNAME}/g, this.xe.userNickname ? K(this.xe.userNickname) : "Add a nickname")),
            (this.Ne = this.Ne.replace(/{USER_ICON}/g, this.ye.getUserIconURL(this.xe.permId, this.xe.userIcon))),
            (this.Ne = this.Ne.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.Ne = this.Ne.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.Ne = this.Ne.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.Ne = this.Ne.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.Ne = this.Ne.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.Ne = this.Ne.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.Ne = this.Ne.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.Ne = this.Ne.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.Ne = this.Ne.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.de ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.ee && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.xe) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.xe) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.de = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.de = !1);
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
          if (null === (t = this.He) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.He.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.Jt = t;
        }
        setMessageForwarder(t) {
          this.He = t;
        }
        setSessionId(t) {
          this.qt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(Bt.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(Bt.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.ye.getUserIconURL(t.permId, e.userIcon),
                n = this.ye.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.le = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(Bt.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.Ue = t;
        }
        getSessionCreated() {
          return this.Ue;
        }
        getSessionId() {
          return this.qt;
        }
        getPartyUrl() {
          return this.Jt;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (I("userIconSelector button clicked: " + e),
            this.xe &&
              (this.xe.saveUserIcon(e),
              this.queueMessageForFrame(Bt.UPDATE_SETTINGS, { userSettings: this.xe.userSettings }),
              this.Ge(this.Le(this.xe.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Ge(t, e) {
          T.l(t).then(e);
        }
        We(t) {
          return new Dt(k, B, { reactionType: t });
        }
        ze(t) {
          return new ht(k, B, { gifObject: t });
        }
        Ke(t) {
          return new rt(k, B, { body: t });
        }
        Ye(t) {
          return new ot(k, B, { typing: t });
        }
        Le(t) {
          return new ct(k, B, { userSettings: t });
        }
        Je(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction()) return;
          const i = t.reactionType,
            n = this.getReactionContainer();
          if (n) {
            const t = Math.floor(40 * Math.random()) + 40,
              s = n[0].offsetWidth - (this.shouldAddReactionSpace() ? e : 0) - t,
              u = Math.floor(Math.random() * s) + (this.shouldAddReactionSpace() ? e : 0),
              o = this.Je(i),
              r = Math.ceil(3 * Math.random()),
              c = jQuery(`<img class="on-screen-reaction on-screen-reaction-${r}" src='${o}' />`);
            c.css("right", `${u}px`),
              c.css("width", `${t}px`),
              c.css("height", `${t}px`),
              n.append(c),
              setTimeout(() => {
                c.remove();
              }, 5e3);
          }
        }
        onReactionClicked(t) {
          console.log(t), this.Ge(this.We(t));
          const e = new j(k, B, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          T.l(e);
          const i = new j(k, B, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          T.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.Fe.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this._e("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.ne.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Ge(this.ze(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new j(k, B, e);
              T.l(i);
              const n = new j(k, B, { eventType: "gif-share", sessionId: this.getSessionId() });
              T.l(n);
            }),
              this.toggleGIFs();
          }
        }
        qe(t) {
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
        Xe(t) {
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
            this.ne.push(...t.results),
            (this.Xt = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.qe(t) : this.Xe(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.Yt < 6 && this.Ze(),
            setTimeout(() => {
              this.Kt = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return Yt(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Kt) t.preventDefault();
            else if ("0" !== this.Xt && e && this.Yt < 6) {
              (this.Yt += 1), (this.Kt = !0), t.preventDefault();
              const e = yield fetch(this.Zt + `&pos=${this.Xt}`),
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
        ti() {
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
        Ze() {
          return Yt(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.ti()), jQuery("#gif-results-right")[0].append(...this.ti());
          });
        }
        logShare(t, e) {
          return Yt(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              o = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${u}/register-share?${o}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return Yt(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.Yt = 1),
              (this.Kt = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.ne = []),
              this.Ze();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let o = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (o = t ? `search-gifs?q=${t}` : o), (this.Zt = `${u}/${o}${s}`);
            const r = yield fetch(`${u}/${o}${s}`),
              c = yield r.json();
            if (c.results && c.results.length > 0) this.loadGIFs(c);
            else if (!t) {
              const t = yield fetch(`${u}/trending_gifs?${s}`);
              this.Zt = `${u}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.Ce && clearTimeout(this.Ce), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.Ce = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        ei(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.fe ? this.Ge(this.Ye(!0)) : clearTimeout(this.fe),
              (this.fe = setTimeout(() => {
                (this.fe = void 0), this.Ge(this.Ye(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.ei(i)) {
              void 0 !== this.fe && (clearTimeout(this.fe), (this.fe = void 0), this.Ge(this.Ye(!1))),
                e.prop("contenteditable", !1),
                this.Ge(this.Ke(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return jt();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new j(k, B, t);
              T.l(n);
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
          const e = t.replace(p, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(p) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          I("saveChanges button clicked: " + e),
            e !== (null === (t = this.xe) || void 0 === t ? void 0 : t.userNickname) &&
              this.xe &&
              (this.xe.saveUserNickname(e),
              this.queueMessageForFrame(Bt.UPDATE_SETTINGS, { userSettings: this.xe.userSettings }),
              this.Ge(this.Le(this.xe.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.ge;
        }
        addIconSelector() {
          Object.keys(z).forEach((t) => {
            if (Y[t]()) {
              const e = z[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.ii(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(p) || []).length,
            i = t.replace(p, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        ii(t, e, i) {
          jQuery(
            `\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL(
              "img/icons/" + t
            )}' data-tp-id="chat_container-new_icon_selection-${i}">\n            </a>\n        `
          )
            .appendTo(e)
            .data("icon", t);
        }
      } {
        getReactionContainer() {
          return this.ni();
        }
        getChatVisible() {
          var t;
          return null === (t = this.ni()) || void 0 === t ? void 0 : t.hasClass(kt);
        }
        getVideoTitle() {
          return Xt(this, void 0, void 0, function* () {
            return document.title;
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
        Se() {
          var t;
          this.Ne &&
            (null === (t = this.ni()) ||
              void 0 === t ||
              t.after(
                (function (t, e = "") {
                  return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/chat.css"
                  )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
                })(this.Ne)
              ));
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          var n, s;
          return Xt(this, void 0, void 0, function* () {
            console.log("CHAT SET");
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return;
            }
            if (t) {
              jQuery("#chat-wrapper").show();
              const t = document.querySelector("#chat-wrapper");
              (null == t ? void 0 : t.style) && (t.style.position = "absolute"), null === (n = this.ni()) || void 0 === n || n.addClass(kt);
            } else jQuery("#chat-wrapper").hide(), null === (s = this.ni()) || void 0 === s || s.removeClass(kt);
            const u = document.getElementsByTagName("video");
            u.length && this.si(u[0], t);
          });
        }
        ni() {
          return jQuery(Zt.VIDEO_ELEMENT_SELECTOR);
        }
        si(t, e) {
          t && t.style && (t.style.width = e ? "calc(100% - 340px)" : "98%");
        }
        removeChat() {
          var t;
          super.removeChat(), null === (t = this.ni()) || void 0 === t || t.removeClass(kt);
        }
      }
      (Zt.VIDEO_ELEMENT_SELECTOR = "#root"),
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
        })(Jt || (Jt = {}));
      class te extends ut {
        constructor(t, e, i) {
          super(t, e, it.GET_SESSION_DATA), (this.data = i);
        }
      }
      class ee {
        constructor() {
          (this.ui = this.oi.bind(this)), (this.ri = []), this.ci();
        }
        addMessageListener(t) {
          this.ri.push(t);
        }
        removeMessageListener(t) {
          this.ri = this.ri.filter((t) => {});
        }
        ci() {
          T.addListener(this.ui);
        }
        teardown() {
          (this.ri = []), T.removeListener(this.ui);
        }
        oi(t, e, i) {
          if (!this.ai(t)) return !1;
          return !!this.Di(t, e, i) || (i({}), !1);
        }
        ai(t) {
          return t.target === k;
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
      })(qt || (qt = {}));
      var ie,
        ne = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      class se {
        constructor(t, e) {
          (this.J = t), (this.pe = e), I("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case v.LOAD_SESSION: {
              const e = t;
              return this.hi(e.data), !1;
            }
            case qt.ON_MESSAGE: {
              const e = t;
              return this.H(e), this.pe.onChatMessage(), !1;
            }
            case qt.ON_BUFFER: {
              const e = t;
              return this.di(e), !1;
            }
            case qt.ON_TYPING: {
              const e = t;
              return this.li(e), !1;
            }
            case qt.ON_WATCHING_ADS: {
              const e = t;
              return this.pi(e), !1;
            }
            case qt.UPDATE_SETTINGS: {
              const e = t;
              return this.gi(e), !1;
            }
            case qt.ON_REACTION: {
              const e = t;
              return this.Fi(e), !1;
            }
            case qt.ON_GIF: {
              const e = t;
              return this.vi(e), !1;
            }
            case qt.USER_LIST: {
              const e = t;
              return this.yi(e), !1;
            }
            case qt.ON_WEB_RTC:
              return this.J.onWebRTC(t.data), !0;
            case Jt.SET_CHAT_VISIBLE: {
              const e = t;
              return this.mi(e.data), i(), !1;
            }
            case Bt.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.J.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case Bt.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case Bt.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.J.doUpdateSettings(e), i(), !0;
            }
            case Bt.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case Bt.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.J.setReactionsActive(e), i(), !0;
            }
            case Bt.RESET_VIEW:
              return this.J.resetChatWindow(!0), i(), !0;
            case Bt.ON_FOCUS:
              return this.J.onSidebarFocus(), i(), !0;
            case Bt.PREVIEW_REACTION: {
              const e = t.data;
              return this.J.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.J.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.J.teardown();
        }
        mi(t) {
          return ne(this, void 0, void 0, function* () {
            this.J.isPartyWindowsActive()
              ? t.visible
                ? yield this.J.resetChatWindow()
                : yield this.J.hideChatWindow()
              : (yield this.J.setChatVisible(t.visible), this.J.fixPageControls());
          });
        }
        hi(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${r}/join/${e}`;
          if (
            (this.J.loadInitData(t),
            this.J.setPartyUrl(i),
            this.J.setSessionId(e),
            this.J.Pe(t.storageData),
            this.pe.onInitChat(),
            this.J.setSessionCreated(t.isCreate),
            this.J.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.J.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.J.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.J.addGif(e) : this.J.addMessage(e, !0);
        }
        H(t) {
          this.J.addMessage(t.data);
        }
        Fi(t) {
          this.J.showReaction(t.data);
        }
        vi(t) {
          this.J.addGif(t.data);
        }
        di(t) {
          this.J.onBufferingMessage(t.data);
        }
        li(t) {
          this.J.onTypingMessage(t.data);
        }
        pi(t) {
          this.J.onWatchingAdsMessage(t.data);
        }
        gi(t) {
          this.J.onUpdateSettingsMessage(t.data);
        }
        yi(t) {
          this.J.loadUserList(t.data.userList), this.J.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(ie || (ie = {}));
      class ue extends ut {
        constructor(t, e, i) {
          super(t, e, it.BROADCAST), (this.data = i);
        }
      }
      class oe extends _ {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class re extends oe {
        constructor(t, e) {
          super(t, e, ie.GET_SERVER_TIME);
        }
      }
      class ce extends ut {
        constructor(t, e, i) {
          super(t, e, it.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class ae extends ut {
        constructor(t, e, i) {
          super(t, e, it.SET_BUFFERING), (this.data = i);
        }
      }
      class De extends ut {
        constructor(t, e, i) {
          super(t, e, it.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const he = "PING",
        de = "SYNC",
        le = "BROADCAST";
      class pe extends b {
        constructor(t, e, i) {
          super(t, e, v.STAY_ALIVE), (this.data = i);
        }
      }
      var ge = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const Fe = new (class {
        getRedirectDataForTabAsync(t) {
          return ge(this, void 0, void 0, function* () {
            const e = (yield vt.getItemsAsync([d])).redirectDataMap,
              i = this.fi(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.Ci(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return ge(this, void 0, void 0, function* () {
            const e = (yield vt.getItemsAsync([d])).redirectDataMap,
              i = this.fi(t);
            e && e[i] && delete e[i], yield et.setItemsAsync({ [d]: e });
          });
        }
        fi(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return ge(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const i = this.fi(e);
            let n = yield vt.getItemsAsync([d]);
            (n[i] = t), (n = this.Ei(n)), yield et.setItemsAsync({ [d]: n });
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
      Object.freeze(Fe);
      const ve = Fe;
      var ye = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class me {
        constructor(t, e, i) {
          (this.wi = []),
            (this._i = 0),
            (this.bi = 0),
            (this.ji = []),
            (this.Bi = !1),
            (this.Nt = !1),
            (this.g = !1),
            (this.Ai = !1),
            (this.ki = void 0),
            (this.Qi = () =>
              ye(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.ki = !1);
                } catch (t) {
                  this.ki = !0;
                }
              })),
            (this.Ii = (t = !1, e = !1) =>
              ye(this, void 0, void 0, function* () {
                if (this.xi) return;
                if (this.g) return void this.forceSync();
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
              ye(this, void 0, void 0, function* () {
                if (
                  (this.Ri == O.PAUSED &&
                    this.Oi &&
                    (clearInterval(this.Oi),
                    (this.Oi = setInterval(() => {
                      this.Gi();
                    }, 6e4))),
                  this.Li())
                )
                  return;
                if ((yield this.Vi.waitVideoDoneLoadingAsync(), this.Li())) return;
                const t = yield this.Vi.getStateAsync();
                this.Ri == O.PAUSED ? yield this.Ui(t) : this.Ri == O.PLAYING && (yield this.Ni(t)), !1 === this.Ai && (this.Ai = !0);
              })),
            (this.Vi = t),
            (this.J = e),
            (this.I = i),
            this.I.setMessageForwarder(this),
            (this.Hi = 0),
            (this.xi = !1),
            (this.Ri = O.PAUSED),
            (this.Wi = 0),
            (this.zi = 0),
            (this.Ki = 0),
            (this.Yi = this.Vi.getStreamingServiceName()),
            I("Video forwarder"),
            this.Qi();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case v.GET_VIDEO_DATA:
              return this.Ji(i), !0;
            case v.LOAD_SESSION: {
              const e = t;
              return this.qi(e.data), !1;
            }
            case ie.UPDATE_SESSION: {
              const e = t;
              return this.Xi(e.data), !1;
            }
            case ie.NEXT_EPISODE: {
              const e = t;
              return this.Zi(e.data), !1;
            }
            case ie.REBOOT_SESSION: {
              const e = t;
              return this.tn(e.data, i), !0;
            }
            case ie.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case qt.ON_WATCHING_ADS: {
              const e = t;
              return this.pi(e), !1;
            }
            default:
              return !1;
          }
        }
        pi(t) {
          t.data.anyoneWatchingAds && !this.Nt && (pt.pushTask(this.Vi.doAdCheck.bind(this.Vi)), this.forceSync()),
            (this.Nt = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.en;
        }
        set videoId(t) {
          this.en = t;
        }
        sendTeardown(t) {
          const e = new at(k, B, t);
          T.l(e);
        }
        teardown() {
          (this.qt = void 0),
            this.nn && clearInterval(this.nn),
            this.Oi && clearInterval(this.Oi),
            this.Vi.pause(),
            pt.disable(),
            this.I.stopListening();
        }
        tn(t, e) {
          pt.resetTasks(), this.en == t.videoId && this.Xi(t), e(this.en == t.videoId);
          const i = new j(k, B, { eventType: "reboot", sessionId: this.qt });
          T.l(i);
        }
        tryBroadcast(t = !1) {
          this.Bi ||
            (this.g
              ? this.forceSync()
              : 0 != this.Vi.uiEventsHappening || this.xi || !this.qt || pt.hasTaskInQueue(le) || pt.pushTask(() => this.Ii(t), le));
        }
        setBuffering(t) {
          if (this.qt) {
            const e = new ae(k, B, { buffering: t });
            T.l(e);
          }
        }
        isWatchingAds() {
          return this.Bi;
        }
        setWatchingAds(t, e) {
          if (this.qt) {
            this.Bi = t;
            const i = new De(k, B, { watchingAds: t, adDurationLeft: e });
            T.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return ye(this, void 0, void 0, function* () {
            if (this.qt && t !== this.en && t !== this.sn) {
              (this.sn = t), (this.xi = !0);
              const e = new ce(k, B, { nextEpisode: t }),
                i = yield T.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.un(t));
            }
          });
        }
        un(t) {
          return ye(this, void 0, void 0, function* () {
            try {
              yield C(() => t == this.en, 1e4)(), (this.xi = !1);
            } catch (t) {
              this._e("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: Pt };
              this.sendTeardown(e);
            }
          });
        }
        Si(e, i) {
          return ye(this, void 0, void 0, function* () {
            if (null == e.lastKnownTime || null == e.lastKnownTimeUpdatedAt || null == e.state) return !1;
            if (i && e.state === O.PAUSED && e.lastKnownTime < Tt) return !1;
            const n = Math.abs(e.lastKnownTime - this.on());
            if (e.state == this.Ri && n < Tt) return !1;
            if (n >= Tt) {
              const e = new j(k, B, { name: "video_seek", action: { source: "self" } });
              T.l(e), this.Yi == t.AMAZON || this.Yi == t.PARAMOUNT ? yield f(200)() : this.Yi == t.HBO_MAX && (yield f(500)());
            }
            return !0;
          });
        }
        Ti() {
          return ye(this, void 0, void 0, function* () {
            const t = yield this.Vi.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.bi), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new ue(k, B, t);
          });
        }
        forceSync() {
          pt.pushTask(this.$i, de);
        }
        Zi(t) {
          return ye(this, void 0, void 0, function* () {
            (this.Hi = Date.now()), pt.pushTask(() => this.rn(t));
          });
        }
        rn(t) {
          return ye(this, void 0, void 0, function* () {
            try {
              I("Continue next episode called"),
                (this.xi = !0),
                yield this.Vi.jumpToNextEpisode(t),
                yield this.I.loadNewVideoAsync(t.videoId),
                I("After load new video"),
                this.I.reloadListeners(),
                this.Ki < this.Hi &&
                  ((this.Ri = O.PAUSED),
                  (this.Wi = 0),
                  (this.zi = Date.now()),
                  I("Sending broadcast after next episode"),
                  pt.pushTask(() => this.Ii(!0, !0), le),
                  pt.removeTask(de)),
                (this.en = t.videoId),
                (this.xi = !1);
              const e = new j(k, B, { name: "video_start", action: { description: "video session has begun" } });
              T.l(e);
            } catch (t) {
              this._e("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return ye(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new pe(k, B, { tabId: n, persist: t });
            T.l(s);
            const u = yield this.cn();
            (u.date = Date.now()), ve.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return ye(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party");
              const i = yield this.cn();
              i.date = Date.now();
              const n = yield this.an(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new pe(k, B, { tabId: s, persist: !1 });
              yield T.l(u), yield ve.storeRedirectDataForTabAsync(i, s), console.log("Redirect URL is", n), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this._e("Failed to fix next episode.");
              const e = new at(k, B, { showAlert: !0, alertModal: Rt });
              T.l(e);
            }
          });
        }
        cn() {
          return ye(this, void 0, void 0, function* () {
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
                      e(t), this._e("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.qt, !0),
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
          (this.Ki = Date.now()), pt.pushTask(this.Dn(t).bind(this));
        }
        Dn(t) {
          if (t.state === O.PAUSED && this.Ri === O.PLAYING) {
            this.Gi();
            const t = new j(k, B, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            T.l(t);
          } else if (t.state === O.PLAYING && this.Ri === O.PAUSED) {
            const t = new j(k, B, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            T.l(t), this.Gi();
          }
          return (this.Ri = t.state), (this.Wi = t.lastKnownTime), (this.zi = t.lastKnownTimeUpdatedAt), this.$i;
        }
        Ji(t) {
          var e;
          return ye(this, void 0, void 0, function* () {
            try {
              const e = yield this.Vi.getVideoDataAsync(),
                i = yield this.Vi.getStateAsync();
              (e.is_player_fullscreen = null != document.fullscreenElement || document.webkitIsFullScreen),
                (e.is_chat_visible = this.J.getChatVisible()),
                (e.is_adblock_enabled = this.ki),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.Wi),
                t(e);
            } catch (i) {
              this._e(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        _e(t) {
          const e = new j(k, B, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          T.l(e);
        }
        Pi(t) {
          return ye(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  ye(this, void 0, void 0, function* () {
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
        Mi(t) {
          return ye(this, void 0, void 0, function* () {
            if (this.xi || this.Bi) return;
            const e = this.Ri;
            if (t.data.bufferingState) {
              (t.data.state = O.PAUSED), yield T.l(t, 1e3), yield this.Vi.waitVideoDoneLoadingAsync();
              const i = yield this.Ti();
              (i.data.bufferingState = !0), e == O.PLAYING && (i.data.state = O.PLAYING), yield T.l(i, 1e3);
            } else yield T.l(t, 1e3);
          });
        }
        qi(t) {
          return ye(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.qt = e.sessionId),
              (this.Ri = e.state),
              (this.Wi = Number(e.lastKnownTime)),
              (this.zi = Number(e.lastKnownTimeUpdatedAt)),
              (this.en = e.videoId),
              (this.Nt = !1),
              "true" == e.controlLock && (this.g = !0),
              t.isCreate ? ((this.Ai = !0), pt.pushTask(this.Ii.bind(this), le)) : this.forceSync();
            const i = new j(k, B, { name: "video_start", action: { description: "video session has begun" } });
            T.l(i), this.I.startListening(), this.hn();
          });
        }
        dn() {
          return new Promise((t) => {
            const e = new re(k, B),
              i = Date.now();
            T.l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (E(this.wi, e - i, 5), (this._i = w(this.wi)), E(this.ji, e - Math.round(this._i / 2) - n, 5), (this.bi = w(this.ji)));
                }
              })
              .catch((t) => {
                I(t), this._e(t);
              }),
              t();
          });
        }
        Gi() {
          const t = new j(k, B, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          T.l(t);
        }
        hn() {
          this.nn && clearInterval(this.nn),
            this.Oi && clearInterval(this.Oi),
            (this.nn = setInterval(() => {
              pt.hasTaskInQueue(de) || pt.pushTask(this.$i, de);
            }, 5e3)),
            (this.Oi = setInterval(() => {
              this.Gi();
            }, 6e4)),
            (this.ln = setInterval(() => {
              pt.hasTaskInQueue(he) || pt.pushTask(this.dn.bind(this), he);
            }, 12500)),
            this.dn();
        }
        Li() {
          return !this.qt || this.Vi.uiEventsHappening > 0 || this.Bi || this.xi || !this.I.shouldSync();
        }
        Ui(t) {
          return ye(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== S.PAUSED && (yield this.Vi.pause()), Math.abs(this.Wi - i) > 2500)) {
              yield this.Vi.setCurrentTime(this.Wi);
              const t = new j(k, B, { name: "video_seek", action: { source: "another user" } });
              T.l(t);
            }
          });
        }
        Ni(t) {
          return ye(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.on();
            if ((e == S.PAUSED && (yield this.Vi.play()), Math.abs(n - i) > 2500)) {
              yield this.Vi.setCurrentTime(n), yield this.Vi.play();
              const t = new j(k, B, { name: "video_seek", action: { source: "another user" } });
              T.l(t);
            }
          });
        }
        pn() {
          return this.Ri === O.PLAYING ? Date.now() - (this.zi + this.bi) : 0;
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
      var fe = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      var Ce = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      var Ee = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class we extends class {
        constructor(t) {
          (this.Vi = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return Ce(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return Ce(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return Ce(this, void 0, void 0, function* () {
            yield null === (t = this.He) || void 0 === t ? void 0 : t.reloadPartyAsync();
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
            Ce(this, void 0, void 0, function* () {
              this.vn(), this.Vi.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              Ce(this, void 0, void 0, function* () {
                this.vn(), this.Vi.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        Fn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        yn() {
          var t;
          null === (t = this.He) || void 0 === t || t.tryBroadcast(!1);
        }
        vn() {
          var t;
          console.log("Going to wait for change"), null === (t = this.He) || void 0 === t || t.tryBroadcast(!0);
        }
        mn() {
          var t;
          null === (t = this.He) || void 0 === t || t.setBuffering(!0);
        }
        Cn(t) {
          var e;
          null === (e = this.He) || void 0 === e || e.setWatchingAds(!0, t);
        }
        En() {
          var t, e;
          null === (t = this.He) || void 0 === t || t.setWatchingAds(!1), null === (e = this.He) || void 0 === e || e.forceSync();
        }
        wn() {
          var t;
          null === (t = this.He) || void 0 === t || t.setBuffering(!1);
        }
        _n(t) {
          var e;
          null === (e = this.He) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        bn(t) {
          var e;
          null === (e = this.He) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.He = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e) {
          var i, n;
          super(t),
            (this.jn = this.yn.bind(this)),
            (this.Bn = this.An.bind(this)),
            (this.kn = !1),
            (this.Qn = !1),
            (this.In = () => {
              clearTimeout(this.xn),
                (this.xn = setTimeout(function () {
                  console.log("Mouse has stopped moving");
                }, 500));
            }),
            (this.Tn = () =>
              Ee(this, void 0, void 0, function* () {
                if (!this.Qn) {
                  if (!(yield this.Sn())) return;
                  this.Cn(), (this.Qn = !0), this.J.setChatVisible(this.J.shouldChatBeVisible()), yield this.Mn();
                }
              })),
            (this.Mn = () =>
              Ee(this, void 0, void 0, function* () {
                if (this.Qn) {
                  const t = setInterval(
                    () =>
                      Ee(this, void 0, void 0, function* () {
                        (yield this.Sn()) || (this.En(), (this.Qn = !1), clearInterval(t));
                      }),
                    2e3
                  );
                }
              })),
            (this.Vi = t),
            (this.J = e),
            this.Vi.setVideoEventListener(this),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.replaceScriptLoaded) ||
              (I("injecting replace script"),
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""),
                  (e.textContent = t),
                  (document.head || document.documentElement).appendChild(e),
                  e.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              )),
            (null === (n = window.teleparty) || void 0 === n ? void 0 : n.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/sling/sling_injected_bundled.js"));
        }
        reloadListeners() {
          const t = this.Vi.getVideoElement();
          t &&
            (t.addEventListener("play", this.jn), t.addEventListener("seeking", this.jn), t.addEventListener("pause", this.jn), this.Pn()),
            document.addEventListener("mousemove", this.In);
        }
        startListening() {
          super.startListening();
          const t = this.Vi.getVideoElement();
          t &&
            (t.addEventListener("play", this.jn),
            t.addEventListener("seeking", this.jn),
            t.addEventListener("pause", this.jn),
            (this.$n = setInterval(() => {
              this.Tn();
            }, 8e3)),
            this.Pn()),
            window.addEventListener("message", this.Bn, !1),
            document.addEventListener("mousemove", this.In);
        }
        stopListening() {
          super.stopListening(), this.$n && clearInterval(this.$n);
          const t = this.Vi.getVideoElement();
          t && (t.removeEventListener("play", this.jn), t.removeEventListener("seeking", this.jn), t.removeEventListener("pause", this.jn)),
            window.removeEventListener("message", this.Bn, !1),
            (this.kn = !1),
            document.removeEventListener("mousemove", this.In);
        }
        Pn() {
          return Ee(this, void 0, void 0, function* () {
            const t = this.Vi.getVideoElement();
            if (!this.kn && t) {
              (yield this.Sn()) && !this.Qn && (console.log("AD FOUND 1"), this.Cn(), (this.Qn = !0));
              const e = new MutationObserver((e) =>
                  Ee(this, void 0, void 0, function* () {
                    for (const i of e)
                      if ("src" === i.attributeName && this.Rn !== t.src) {
                        console.log("VIDEO URL CHANGED");
                        const e = yield this.Sn();
                        setTimeout(
                          () =>
                            Ee(this, void 0, void 0, function* () {
                              e && !this.Qn
                                ? (console.log("AD FOUND 2"), this.Cn(), (this.Qn = !0))
                                : this.Qn && (console.log("AD ENDED 1"), this.En(), (this.Qn = !1)),
                                !this.Qn && this.J.getWatchingAds() && this.Vi.pause();
                            }),
                          1e3
                        ),
                          (this.Rn = t.src);
                      }
                  })
                ),
                i = { attributes: !0 };
              e.observe(t, i), (this.kn = !0);
            }
          });
        }
        openOverlay() {
          return Ee(this, void 0, void 0, function* () {
            yield C(() => {
              document.querySelector('[data-testid="player-controls-container"]').click();
              return !!document.querySelector(".player_controls");
            }, 1 / 0)();
          });
        }
        Sn() {
          return Ee(this, void 0, void 0, function* () {
            yield this.openOverlay();
            return !!document.querySelector('[data-testid="player-controls-disable-reason"]');
          });
        }
        loadNewVideoAsync(t) {
          return Ee(this, void 0, void 0, function* () {
            const e = performance.now();
            yield new Promise((i, n) => {
              const s = setInterval(() => {
                const u = R.getVideoId(new URL(window.location.href)),
                  o = this.Vi.getVideoElement();
                if (u === t && (!this.On || this.On !== (null == o ? void 0 : o.src)) && o instanceof Element && o.src)
                  return I("Loaded new Sling video"), (this.On = o.src), clearInterval(s), void i();
                performance.now() - e >= 2e4 && (clearInterval(s), n(new Error("Could not load new video in time.")));
              }, 100);
            }),
              yield this.Vi.waitVideoDoneLoadingAsync(),
              this.J.setChatVisible(this.J.shouldChatBeVisible());
          });
        }
        An(t) {
          var e;
          if (t.source == window)
            if ("FROM_PAGE_POP" !== t.data.type) {
              if (t.data.type && "FROM_PAGE" == t.data.type) {
                if (
                  (I("***********************************"),
                  I("Content script received: " + t.data.text),
                  I(window.location.href),
                  !y(new URL(window.location.href)))
                )
                  return void this.bn(Vt);
                {
                  const t = R.getVideoId(new URL(window.location.href));
                  if (!t) return I("No video found. Tearing down"), void this.bn(Vt);
                  if (t !== (null === (e = this.He) || void 0 === e ? void 0 : e.videoId)) {
                    const e = this.Vi.getVideoElement();
                    e && (e.currentTime = 0),
                      this.Vi.setCurrentTime(0, !0),
                      (this.kn = !1),
                      this._n(t),
                      this.J.setChatVisible(this.J.shouldChatBeVisible());
                  }
                }
              }
            } else this.bn(Vt);
        }
      }
      var _e = i(4296),
        be = i.n(_e);
      class je extends _ {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class Be extends je {
        constructor(t, e, i) {
          super(t, e, Jt.CREATE_SESSION), (this.data = i);
        }
      }
      const Ae = new (class extends P {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", t.NETFLIX, !1);
      Object.freeze(Ae);
      const ke = Ae;
      const Qe = new (class extends P {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", t.HULU, !1);
      Object.freeze(Qe);
      const Ie = Qe;
      const xe = new (class extends P {
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
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", t.DISNEY_PLUS, !1, [
        "browse_scripts/disney/disney_browse_bundled.js"
      ]);
      Object.freeze(xe);
      const Te = xe;
      const Se = new (class extends P {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== m(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + m(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return m(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", t.HBO_MAX, !1);
      Object.freeze(Se);
      const Me = Se;
      const Pe = new (class extends P {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", t.AMAZON, !1);
      Object.freeze(Pe);
      const $e = Pe;
      const Re = new (class extends P {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", t.CRUNCHYROLL, !1);
      Object.freeze(Re);
      const Oe = Re;
      const Ge = new (class extends P {
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", t.YOUTUBE, !1);
      Object.freeze(Ge);
      const Le = Ge;
      const Ve = new (class extends P {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", t.ESPN, !1);
      Object.freeze(Ve);
      const Ue = Ve;
      const Ne = new (class extends P {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", t.PARAMOUNT, !1);
      Object.freeze(Ne);
      const He = Ne;
      const We = new (class extends P {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", t.HOTSTAR, !1);
      Object.freeze(We);
      const ze = We;
      const Ke = new (class extends P {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", t.PEACOCK, !1);
      Object.freeze(Ke);
      const Ye = Ke;
      const Je = new (class extends P {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", t.FUNIMATION, !1);
      Object.freeze(Je);
      const qe = Je;
      const Xe = new (class extends P {
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
      })([], ["content_scripts/max/max_content_bundled.js"], "max", t.MAX, !1);
      Object.freeze(Xe);
      const Ze = Xe;
      const ti = new (class extends P {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", t.STAR_PLUS, !1);
      Object.freeze(ti);
      const ei = ti;
      const ii = new (class extends P {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", t.PLUTO_TV, !1);
      Object.freeze(ii);
      const ni = ii;
      const si = new (class extends P {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", t.APPLE_TV, !1);
      Object.freeze(si);
      const ui = si;
      const oi = new (class extends P {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", t.JIO_CINEMA, !1);
      Object.freeze(oi);
      const ri = oi;
      const ci = new (class extends P {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", t.TUBI_TV, !1);
      Object.freeze(ci);
      const ai = ci;
      const Di = new (class extends P {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", t.CRAVE, !1);
      Object.freeze(Di);
      const hi = Di;
      const di = new (class extends P {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", t.MUBI, !1);
      Object.freeze(di);
      const li = di;
      const pi = new (class extends P {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", t.STAN, !1);
      Object.freeze(pi);
      const gi = pi;
      const Fi = new (class extends P {
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
      })([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", t.DISNEY_PLUS_MENA, !1);
      Object.freeze(Fi);
      const vi = Fi;
      class yi {
        constructor(t, e) {
          (this.isBrowsing = !1), (this.needsCSPBlock = !1), (this.id = e), this.videoId, (this.url = t);
          const i = [ui],
            n = [ke, Ie, Te, Me, $e, Le, Oe, Ue, He, ze, Ye, ei, Ze, qe, ui, ni, ri, ai, li, gi, hi, R, vi];
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
      class mi extends je {
        constructor(t, e, i) {
          super(t, e, Jt.RE_INJECT), (this.data = i);
        }
      }
      var fi = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      var Ci,
        Ei = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      class wi extends class {
        constructor(t) {
          var e, i, n;
          (this.Gn = !1),
            (this.Ln = !1),
            (this.Vn = !1),
            (this.Un = 0),
            (this.Nn = !1),
            (this.Hn = !1),
            (this.Wn = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.zn() : this.Kn();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.Yn = new yi(
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
          jQuery("#tp-control-lock-button .tooltiptext").text(this.Vn ? "Only I have control" : "Everyone has control"),
            this.Vn
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        Xn() {
          this.Ln || ((this.Vn = !this.Vn), this.qn());
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
            f(1e3)().then(() => {
              this.Nn = !1;
            }));
        }
        teardown() {
          this.ts(), this.Kn(), this.es && clearInterval(this.es);
        }
        ns() {
          var t;
          return fi(this, void 0, void 0, function* () {
            if (this.Ln || this.Jn.inSession) return;
            if ((this.ss(), (this.Ln = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new mi(Q, B, { extensionTabData: this.Yn });
              try {
                yield T.l(t);
              } catch (t) {
                return console.log(t), this.us(), this._e(t), this.os(X), void (this.Ln = !1);
              }
            }
            console.log("Sending create");
            const e = this.rs();
            try {
              const t = yield T.l(e);
              t.error ? (this.os(t.error.message), this._e(t.error.message)) : ((this.Ln = !1), this.cs(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.os(X), this._e(t);
            }
            this.us(), (this.Ln = !1);
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
        _e(t) {
          const e = new j(A, B, { name: "error", action: { description: "an error has occured", reason: t } });
          T.l(e);
        }
        os(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        Ds(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, K(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, K(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, K(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, K(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, K(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, K(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, K(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, K(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, K(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, K(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, K(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, K(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, K(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        Kn() {
          this.Nn || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        zn() {
          return fi(this, void 0, void 0, function* () {
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
          return fi(this, void 0, void 0, function* () {
            if ((this.Wn || this.Jn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.Ds(be()),
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
            jQuery("#tp-chat-button").on("click", (t) => (this.ps(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.gs();
            });
        }
        gs() {
          const t = new at(Q, B, Vt);
          T.l(t), this.Kn();
        }
        ls() {
          this.Jn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        ps() {
          return fi(this, void 0, void 0, function* () {
            (this.Un = 0),
              this.hideMessageIndicator(),
              this.Jn.isPartyWindowsActive()
                ? this.Jn.resetChatWindow(!0)
                : (this.Jn.shouldChatBeVisible(), yield this.Jn.setChatVisible(!this.Jn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.Gn && this.zn();
        }
        setChatButtons() {
          this.Jn.inSession && this.Jn.getChatVisible() ? this.cs() : this.Fs(),
            this.Jn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        cs() {
          return fi(this, void 0, void 0, function* () {
            this.Jn.inSession &&
              this.Jn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        Fs() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        rs() {
          return new Be(Q, B, this.vs());
        }
        vs() {
          return { createSettings: { controlLock: this.Vn }, streamingService: this.Yn.streamingService, tabId: this.Yn.id, source: "pc" };
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
        shouldMenuBeVisible() {
          const t = this.ni();
          return 0 === t.length || "none" !== t.css("cursor");
        }
        getControlsRoot() {
          return Ei(this, void 0, void 0, function* () {
            return this.ni();
          });
        }
        ni() {
          return jQuery(wi.VIDEO_ELEMENT_SELECTOR);
        }
        getControlsHeight() {
          return "100px";
        }
        reloadListeners() {
          this.stopEventListener(), this.startEventListener();
        }
      }
      wi.VIDEO_ELEMENT_SELECTOR = "#root";
      class _i extends class {
        constructor(t, e, i, n) {
          (this.J = t),
            (this.Vi = e),
            (this.I = i),
            (this.pe = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.J), console.log("Resetting Chat Api for old controls")),
            (this.ys = new se(this.J, this.pe)),
            (this.He = new me(this.Vi, this.J, this.I)),
            (this.fs = !1),
            (this.Cs = !1),
            (this.Ee = !1),
            (this.ui = new ee()),
            this.ui.addMessageListener(this.He),
            this.ui.addMessageListener(this.ys),
            this.ui.addMessageListener(this),
            (this.Es = !1),
            this.ws();
        }
        _s() {
          return fe(this, void 0, void 0, function* () {
            yield this.pe.addTpIcon(), this.pe.startEventListener();
          });
        }
        loadBrowseButton() {
          return fe(this, void 0, void 0, function* () {
            yield this.pe.addTpIcon(), this.pe.startEventListener();
          });
        }
        ws() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.J.inSession, alertModal: Ot };
            this.bs(t);
          }),
            t.onMessage.addListener(() => {
              I("Got background script"), (this.Es = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == k) {
            if (t.type === Jt.IS_CONTENT_SCRIPT_READY) {
              if (this.fs) {
                i({ ready: !0 });
              } else (this.Cs = !0), this.js().then(i);
              return !0;
            }
            if (t.type === Jt.GET_INIT_DATA) {
              return i(this.Bs()), !0;
            }
            if (t.type === Jt.DISCONNECT && t.sender == A) {
              const t = new at(k, B, Vt);
              T.l(t), i();
            } else {
              if (t.type == v.TEARDOWN) {
                const e = t;
                return this.bs(e.data), i(), !0;
              }
              t.type === v.ON_NOTIF && this.As();
            }
          }
          return !1;
        }
        As() {
          console.log("Show Notification");
        }
        bs(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.J.getPartyUrl();
            Gt(t.alertModal, i);
          }
          this.pe.teardown(), this.He.teardown(), this.ys.teardown(), this.ui.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new j(k, B, s);
          T.l(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        _e(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new j(k, B, { name: "error", action: { reason: t } });
          T.l(e);
        }
        ks() {
          return fe(this, void 0, void 0, function* () {
            return C(() => this.Es, 5e3)();
          });
        }
        js() {
          return fe(this, void 0, void 0, function* () {
            try {
              console.log("Waiting for content script ready"), yield this.ks();
              const t = yield this.Qs();
              return this._s(), t;
            } catch (t) {
              const e = { message: q, showButton: !1 };
              return this._e(q), { ready: !1, error: e };
            } finally {
              this.Cs = !1;
            }
          });
        }
        Qs() {
          return fe(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.Vi.waitVideoApiReadyAsync();
              const e = yield this.Is();
              e && e.error
                ? (I("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.fs = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.Ee = !0),
                  (this.fs = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this._e(e.message);
            }
            return { ready: this.fs, error: t };
          });
        }
        Bs() {
          return {
            inSession: this.J.inSession,
            isChatVisible: this.J.isPartyWindowsActive() ? this.J.getChatWindowVisible() : this.J.getChatVisible(),
            partyUrl: this.J.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.J.isPartyWindowsActive()
          };
        }
        Is() {
          return fe(this, void 0, void 0, function* () {
            const t = yield this.xs();
            return T.l(t);
          });
        }
        xs() {
          return fe(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.Vi.getVideoDataAsync()).videoId };
            return new te(k, B, t);
          });
        }
      } {
        constructor() {
          const t = new L(),
            e = new Zt(),
            i = new we(t, e);
          let n;
          (n = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new wi(e)),
            super(e, t, i, n),
            I("Sling Content Script");
        }
      }
      (window.teleparty && (null === (Ci = window.teleparty) || void 0 === Ci ? void 0 : Ci.contentScriptInjected)) ||
        (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
        (window.teleparty.contentScriptInjected = !0),
        new _i(),
        I("Initialized content script"));
    })();
})();
