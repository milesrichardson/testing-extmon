/*******************************************************
 * Copyright (C) 2018-2023 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  var t = {
      5640: () => {
        !(function (t, n, e) {
          "use strict";
          if (t.MutationObserver && "undefined" != typeof HTMLElement) {
            var i,
              r = 0,
              u =
                ((i =
                  HTMLElement.prototype.matches ||
                  HTMLElement.prototype.webkitMatchesSelector ||
                  HTMLElement.prototype.mozMatchesSelector ||
                  HTMLElement.prototype.msMatchesSelector),
                {
                  matchesSelector: function (t, n) {
                    return t instanceof HTMLElement && i.call(t, n);
                  },
                  addMethod: function (t, n, e) {
                    var i = t[n];
                    t[n] = function () {
                      return e.length == arguments.length
                        ? e.apply(this, arguments)
                        : "function" == typeof i
                        ? i.apply(this, arguments)
                        : void 0;
                    };
                  },
                  callCallbacks: function (t, n) {
                    n && n.options.onceOnly && 1 == n.firedElems.length && (t = [t[0]]);
                    for (var e, i = 0; (e = t[i]); i++) e && e.callback && e.callback.call(e.elem, e.elem);
                    n &&
                      n.options.onceOnly &&
                      1 == n.firedElems.length &&
                      n.me.unbindEventWithSelectorAndCallback.call(n.target, n.selector, n.callback);
                  },
                  checkChildNodesRecursively: function (t, n, e, i) {
                    for (var r, o = 0; (r = t[o]); o++)
                      e(r, n, i) && i.push({ callback: n.callback, elem: r }),
                        r.childNodes.length > 0 && u.checkChildNodesRecursively(r.childNodes, n, e, i);
                  },
                  mergeArrays: function (t, n) {
                    var e,
                      i = {};
                    for (e in t) t.hasOwnProperty(e) && (i[e] = t[e]);
                    for (e in n) n.hasOwnProperty(e) && (i[e] = n[e]);
                    return i;
                  },
                  toElementsArray: function (n) {
                    return void 0 === n || ("number" == typeof n.length && n !== t) || (n = [n]), n;
                  }
                }),
              o = (function () {
                var t = function () {
                  (this.t = []), (this.i = null), (this.u = null);
                };
                return (
                  (t.prototype.addEvent = function (t, n, e, i) {
                    var r = { target: t, selector: n, options: e, callback: i, firedElems: [] };
                    return this.i && this.i(r), this.t.push(r), r;
                  }),
                  (t.prototype.removeEvent = function (t) {
                    for (var n, e = this.t.length - 1; (n = this.t[e]); e--)
                      if (t(n)) {
                        this.u && this.u(n);
                        var i = this.t.splice(e, 1);
                        i && i.length && (i[0].callback = null);
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
              s = function (n, i) {
                var r = new o(),
                  s = this,
                  a = { fireOnAttributesModification: !1 };
                return (
                  r.beforeAdding(function (e) {
                    var r,
                      u = e.target;
                    (u !== t.document && u !== t) || (u = document.getElementsByTagName("html")[0]),
                      (r = new MutationObserver(function (t) {
                        i.call(this, t, e);
                      }));
                    var o = n(e.options);
                    r.observe(u, o), (e.observer = r), (e.me = s);
                  }),
                  r.beforeRemoving(function (t) {
                    t.observer.disconnect();
                  }),
                  (this.bindEvent = function (t, n, e) {
                    n = u.mergeArrays(a, n);
                    for (var i = u.toElementsArray(this), o = 0; o < i.length; o++) r.addEvent(i[o], t, n, e);
                  }),
                  (this.unbindEvent = function () {
                    var t = u.toElementsArray(this);
                    r.removeEvent(function (n) {
                      for (var i = 0; i < t.length; i++) if (this === e || n.target === t[i]) return !0;
                      return !1;
                    });
                  }),
                  (this.unbindEventWithSelectorOrCallback = function (t) {
                    var n,
                      i = u.toElementsArray(this),
                      o = t;
                    (n =
                      "function" == typeof t
                        ? function (t) {
                            for (var n = 0; n < i.length; n++) if ((this === e || t.target === i[n]) && t.callback === o) return !0;
                            return !1;
                          }
                        : function (n) {
                            for (var r = 0; r < i.length; r++) if ((this === e || n.target === i[r]) && n.selector === t) return !0;
                            return !1;
                          }),
                      r.removeEvent(n);
                  }),
                  (this.unbindEventWithSelectorAndCallback = function (t, n) {
                    var i = u.toElementsArray(this);
                    r.removeEvent(function (r) {
                      for (var u = 0; u < i.length; u++)
                        if ((this === e || r.target === i[u]) && r.selector === t && r.callback === n) return !0;
                      return !1;
                    });
                  }),
                  this
                );
              },
              a = new (function () {
                var t = { fireOnAttributesModification: !1, onceOnly: !1, existing: !1 };
                function n(t, n, i) {
                  return (
                    !(!u.matchesSelector(t, n.selector) || (t.h === e && (t.h = r++), -1 != n.firedElems.indexOf(t.h))) &&
                    (n.firedElems.push(t.h), !0)
                  );
                }
                var i = (a = new s(
                  function (t) {
                    var n = { attributes: !1, childList: !0, subtree: !0 };
                    return t.fireOnAttributesModification && (n.attributes = !0), n;
                  },
                  function (t, e) {
                    t.forEach(function (t) {
                      var i = t.addedNodes,
                        r = t.target,
                        o = [];
                      null !== i && i.length > 0
                        ? u.checkChildNodesRecursively(i, e, n, o)
                        : "attributes" === t.type && n(r, e, o) && o.push({ callback: e.callback, elem: r }),
                        u.callCallbacks(o, e);
                    });
                  }
                )).bindEvent;
                return (
                  (a.bindEvent = function (n, e, r) {
                    void 0 === r ? ((r = e), (e = t)) : (e = u.mergeArrays(t, e));
                    var o = u.toElementsArray(this);
                    if (e.existing) {
                      for (var s = [], a = 0; a < o.length; a++)
                        for (var c = o[a].querySelectorAll(n), h = 0; h < c.length; h++) s.push({ callback: r, elem: c[h] });
                      if (e.onceOnly && s.length) return r.call(s[0].elem, s[0].elem);
                      setTimeout(u.callCallbacks, 1, s);
                    }
                    i.call(this, n, e, r);
                  }),
                  a
                );
              })(),
              c = new (function () {
                var t = {};
                function n(t, n) {
                  return u.matchesSelector(t, n.selector);
                }
                var e = (c = new s(
                  function () {
                    return { childList: !0, subtree: !0 };
                  },
                  function (t, e) {
                    t.forEach(function (t) {
                      var i = t.removedNodes,
                        r = [];
                      null !== i && i.length > 0 && u.checkChildNodesRecursively(i, e, n, r), u.callCallbacks(r, e);
                    });
                  }
                )).bindEvent;
                return (
                  (c.bindEvent = function (n, i, r) {
                    void 0 === r ? ((r = i), (i = t)) : (i = u.mergeArrays(t, i)), e.call(this, n, i, r);
                  }),
                  c
                );
              })();
            n && l(n.fn),
              l(HTMLElement.prototype),
              l(NodeList.prototype),
              l(HTMLCollection.prototype),
              l(HTMLDocument.prototype),
              l(Window.prototype);
            var h = {};
            return D(a, h, "unbindAllArrive"), D(c, h, "unbindAllLeave"), h;
          }
          function D(t, n, e) {
            u.addMethod(n, e, t.unbindEvent),
              u.addMethod(n, e, t.unbindEventWithSelectorOrCallback),
              u.addMethod(n, e, t.unbindEventWithSelectorAndCallback);
          }
          function l(t) {
            (t.arrive = a.bindEvent), D(a, t, "unbindArrive"), (t.leave = c.bindEvent), D(c, t, "unbindLeave");
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
      },
      457: function (t, n) {
        "use strict";
        var e, i, r;
        (i = "undefined" != typeof window ? window : this),
          (r = function (i, r) {
            var u = [],
              o = Object.getPrototypeOf,
              s = u.slice,
              a = u.flat
                ? function (t) {
                    return u.flat.call(t);
                  }
                : function (t) {
                    return u.concat.apply([], t);
                  },
              c = u.push,
              h = u.indexOf,
              D = {},
              l = D.toString,
              d = D.hasOwnProperty,
              f = d.toString,
              p = f.call(Object),
              v = {},
              g = function (t) {
                return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item;
              },
              y = function (t) {
                return null != t && t === t.window;
              },
              F = i.document,
              m = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function C(t, n, e) {
              var i,
                r,
                u = (e = e || F).createElement("script");
              if (((u.text = t), n)) for (i in m) (r = n[i] || (n.getAttribute && n.getAttribute(i))) && u.setAttribute(i, r);
              e.head.appendChild(u).parentNode.removeChild(u);
            }
            function w(t) {
              return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? D[l.call(t)] || "object" : typeof t;
            }
            var E = "3.6.0",
              b = function (t, n) {
                return new b.fn.init(t, n);
              };
            function j(t) {
              var n = !!t && "length" in t && t.length,
                e = w(t);
              return !g(t) && !y(t) && ("array" === e || 0 === n || ("number" == typeof n && 0 < n && n - 1 in t));
            }
            (b.fn = b.prototype =
              {
                jquery: E,
                constructor: b,
                length: 0,
                toArray: function () {
                  return s.call(this);
                },
                get: function (t) {
                  return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t];
                },
                pushStack: function (t) {
                  var n = b.merge(this.constructor(), t);
                  return (n.prevObject = this), n;
                },
                each: function (t) {
                  return b.each(this, t);
                },
                map: function (t) {
                  return this.pushStack(
                    b.map(this, function (n, e) {
                      return t.call(n, e, n);
                    })
                  );
                },
                slice: function () {
                  return this.pushStack(s.apply(this, arguments));
                },
                first: function () {
                  return this.eq(0);
                },
                last: function () {
                  return this.eq(-1);
                },
                even: function () {
                  return this.pushStack(
                    b.grep(this, function (t, n) {
                      return (n + 1) % 2;
                    })
                  );
                },
                odd: function () {
                  return this.pushStack(
                    b.grep(this, function (t, n) {
                      return n % 2;
                    })
                  );
                },
                eq: function (t) {
                  var n = this.length,
                    e = +t + (t < 0 ? n : 0);
                  return this.pushStack(0 <= e && e < n ? [this[e]] : []);
                },
                end: function () {
                  return this.prevObject || this.constructor();
                },
                push: c,
                sort: u.sort,
                splice: u.splice
              }),
              (b.extend = b.fn.extend =
                function () {
                  var t,
                    n,
                    e,
                    i,
                    r,
                    u,
                    o = arguments[0] || {},
                    s = 1,
                    a = arguments.length,
                    c = !1;
                  for (
                    "boolean" == typeof o && ((c = o), (o = arguments[s] || {}), s++),
                      "object" == typeof o || g(o) || (o = {}),
                      s === a && ((o = this), s--);
                    s < a;
                    s++
                  )
                    if (null != (t = arguments[s]))
                      for (n in t)
                        (i = t[n]),
                          "__proto__" !== n &&
                            o !== i &&
                            (c && i && (b.isPlainObject(i) || (r = Array.isArray(i)))
                              ? ((e = o[n]),
                                (u = r && !Array.isArray(e) ? [] : r || b.isPlainObject(e) ? e : {}),
                                (r = !1),
                                (o[n] = b.extend(c, u, i)))
                              : void 0 !== i && (o[n] = i));
                  return o;
                }),
              b.extend({
                expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                  throw new Error(t);
                },
                noop: function () {},
                isPlainObject: function (t) {
                  var n, e;
                  return !(
                    !t ||
                    "[object Object]" !== l.call(t) ||
                    ((n = o(t)) && ("function" != typeof (e = d.call(n, "constructor") && n.constructor) || f.call(e) !== p))
                  );
                },
                isEmptyObject: function (t) {
                  var n;
                  for (n in t) return !1;
                  return !0;
                },
                globalEval: function (t, n, e) {
                  C(t, { nonce: n && n.nonce }, e);
                },
                each: function (t, n) {
                  var e,
                    i = 0;
                  if (j(t)) for (e = t.length; i < e && !1 !== n.call(t[i], i, t[i]); i++);
                  else for (i in t) if (!1 === n.call(t[i], i, t[i])) break;
                  return t;
                },
                makeArray: function (t, n) {
                  var e = n || [];
                  return null != t && (j(Object(t)) ? b.merge(e, "string" == typeof t ? [t] : t) : c.call(e, t)), e;
                },
                inArray: function (t, n, e) {
                  return null == n ? -1 : h.call(n, t, e);
                },
                merge: function (t, n) {
                  for (var e = +n.length, i = 0, r = t.length; i < e; i++) t[r++] = n[i];
                  return (t.length = r), t;
                },
                grep: function (t, n, e) {
                  for (var i = [], r = 0, u = t.length, o = !e; r < u; r++) !n(t[r], r) !== o && i.push(t[r]);
                  return i;
                },
                map: function (t, n, e) {
                  var i,
                    r,
                    u = 0,
                    o = [];
                  if (j(t)) for (i = t.length; u < i; u++) null != (r = n(t[u], u, e)) && o.push(r);
                  else for (u in t) null != (r = n(t[u], u, e)) && o.push(r);
                  return a(o);
                },
                guid: 1,
                support: v
              }),
              "function" == typeof Symbol && (b.fn[Symbol.iterator] = u[Symbol.iterator]),
              b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, n) {
                D["[object " + n + "]"] = n.toLowerCase();
              });
            var _ = (function (t) {
              var n,
                e,
                i,
                r,
                u,
                o,
                s,
                a,
                c,
                h,
                D,
                l,
                d,
                f,
                p,
                v,
                g,
                y,
                F,
                m = "sizzle" + 1 * new Date(),
                C = t.document,
                w = 0,
                E = 0,
                b = at(),
                j = at(),
                _ = at(),
                x = at(),
                B = function (t, n) {
                  return t === n && (D = !0), 0;
                },
                A = {}.hasOwnProperty,
                k = [],
                Q = k.pop,
                I = k.push,
                S = k.push,
                T = k.slice,
                M = function (t, n) {
                  for (var e = 0, i = t.length; e < i; e++) if (t[e] === n) return e;
                  return -1;
                },
                $ =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                O =
                  "\\[" +
                  P +
                  "*(" +
                  R +
                  ")(?:" +
                  P +
                  "*([*^$|!~]?=)" +
                  P +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  R +
                  "))|)" +
                  P +
                  "*\\]",
                L = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
                U = new RegExp(P + "+", "g"),
                G = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                N = new RegExp("^" + P + "*," + P + "*"),
                V = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                H = new RegExp(P + "|>"),
                W = new RegExp(L),
                z = new RegExp("^" + R + "$"),
                q = {
                  ID: new RegExp("^#(" + R + ")"),
                  CLASS: new RegExp("^\\.(" + R + ")"),
                  TAG: new RegExp("^(" + R + "|[*])"),
                  ATTR: new RegExp("^" + O),
                  PSEUDO: new RegExp("^" + L),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      P +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      P +
                      "*(?:([+-]|)" +
                      P +
                      "*(\\d+)|))" +
                      P +
                      "*\\)|)",
                    "i"
                  ),
                  bool: new RegExp("^(?:" + $ + ")$", "i"),
                  needsContext: new RegExp(
                    "^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)",
                    "i"
                  )
                },
                K = /HTML$/i,
                Y = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                X = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                nt = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
                et = function (t, n) {
                  var e = "0x" + t.slice(1) - 65536;
                  return n || (e < 0 ? String.fromCharCode(e + 65536) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
                },
                it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                rt = function (t, n) {
                  return n ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                },
                ut = function () {
                  l();
                },
                ot = mt(
                  function (t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                  },
                  { dir: "parentNode", next: "legend" }
                );
              try {
                S.apply((k = T.call(C.childNodes)), C.childNodes), k[C.childNodes.length].nodeType;
              } catch (n) {
                S = {
                  apply: k.length
                    ? function (t, n) {
                        I.apply(t, T.call(n));
                      }
                    : function (t, n) {
                        for (var e = t.length, i = 0; (t[e++] = n[i++]); );
                        t.length = e - 1;
                      }
                };
              }
              function st(t, n, i, r) {
                var u,
                  s,
                  c,
                  h,
                  D,
                  f,
                  g,
                  y = n && n.ownerDocument,
                  C = n ? n.nodeType : 9;
                if (((i = i || []), "string" != typeof t || !t || (1 !== C && 9 !== C && 11 !== C))) return i;
                if (!r && (l(n), (n = n || d), p)) {
                  if (11 !== C && (D = Z.exec(t)))
                    if ((u = D[1])) {
                      if (9 === C) {
                        if (!(c = n.getElementById(u))) return i;
                        if (c.id === u) return i.push(c), i;
                      } else if (y && (c = y.getElementById(u)) && F(n, c) && c.id === u) return i.push(c), i;
                    } else {
                      if (D[2]) return S.apply(i, n.getElementsByTagName(t)), i;
                      if ((u = D[3]) && e.getElementsByClassName && n.getElementsByClassName)
                        return S.apply(i, n.getElementsByClassName(u)), i;
                    }
                  if (e.qsa && !x[t + " "] && (!v || !v.test(t)) && (1 !== C || "object" !== n.nodeName.toLowerCase())) {
                    if (((g = t), (y = n), 1 === C && (H.test(t) || V.test(t)))) {
                      for (
                        ((y = (tt.test(t) && gt(n.parentNode)) || n) === n && e.scope) ||
                          ((h = n.getAttribute("id")) ? (h = h.replace(it, rt)) : n.setAttribute("id", (h = m))),
                          s = (f = o(t)).length;
                        s--;

                      )
                        f[s] = (h ? "#" + h : ":scope") + " " + Ft(f[s]);
                      g = f.join(",");
                    }
                    try {
                      return S.apply(i, y.querySelectorAll(g)), i;
                    } catch (n) {
                      x(t, !0);
                    } finally {
                      h === m && n.removeAttribute("id");
                    }
                  }
                }
                return a(t.replace(G, "$1"), n, i, r);
              }
              function at() {
                var t = [];
                return function n(e, r) {
                  return t.push(e + " ") > i.cacheLength && delete n[t.shift()], (n[e + " "] = r);
                };
              }
              function ct(t) {
                return (t[m] = !0), t;
              }
              function ht(t) {
                var n = d.createElement("fieldset");
                try {
                  return !!t(n);
                } catch (t) {
                  return !1;
                } finally {
                  n.parentNode && n.parentNode.removeChild(n), (n = null);
                }
              }
              function Dt(t, n) {
                for (var e = t.split("|"), r = e.length; r--; ) i.attrHandle[e[r]] = n;
              }
              function lt(t, n) {
                var e = n && t,
                  i = e && 1 === t.nodeType && 1 === n.nodeType && t.sourceIndex - n.sourceIndex;
                if (i) return i;
                if (e) for (; (e = e.nextSibling); ) if (e === n) return -1;
                return t ? 1 : -1;
              }
              function dt(t) {
                return function (n) {
                  return "input" === n.nodeName.toLowerCase() && n.type === t;
                };
              }
              function ft(t) {
                return function (n) {
                  var e = n.nodeName.toLowerCase();
                  return ("input" === e || "button" === e) && n.type === t;
                };
              }
              function pt(t) {
                return function (n) {
                  return "form" in n
                    ? n.parentNode && !1 === n.disabled
                      ? "label" in n
                        ? "label" in n.parentNode
                          ? n.parentNode.disabled === t
                          : n.disabled === t
                        : n.isDisabled === t || (n.isDisabled !== !t && ot(n) === t)
                      : n.disabled === t
                    : "label" in n && n.disabled === t;
                };
              }
              function vt(t) {
                return ct(function (n) {
                  return (
                    (n = +n),
                    ct(function (e, i) {
                      for (var r, u = t([], e.length, n), o = u.length; o--; ) e[(r = u[o])] && (e[r] = !(i[r] = e[r]));
                    })
                  );
                });
              }
              function gt(t) {
                return t && void 0 !== t.getElementsByTagName && t;
              }
              for (n in ((e = st.support = {}),
              (u = st.isXML =
                function (t) {
                  var n = t && t.namespaceURI,
                    e = t && (t.ownerDocument || t).documentElement;
                  return !K.test(n || (e && e.nodeName) || "HTML");
                }),
              (l = st.setDocument =
                function (t) {
                  var n,
                    r,
                    o = t ? t.ownerDocument || t : C;
                  return (
                    o != d &&
                      9 === o.nodeType &&
                      o.documentElement &&
                      ((f = (d = o).documentElement),
                      (p = !u(d)),
                      C != d &&
                        (r = d.defaultView) &&
                        r.top !== r &&
                        (r.addEventListener ? r.addEventListener("unload", ut, !1) : r.attachEvent && r.attachEvent("onunload", ut)),
                      (e.scope = ht(function (t) {
                        return (
                          f.appendChild(t).appendChild(d.createElement("div")),
                          void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                        );
                      })),
                      (e.attributes = ht(function (t) {
                        return (t.className = "i"), !t.getAttribute("className");
                      })),
                      (e.getElementsByTagName = ht(function (t) {
                        return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length;
                      })),
                      (e.getElementsByClassName = X.test(d.getElementsByClassName)),
                      (e.getById = ht(function (t) {
                        return (f.appendChild(t).id = m), !d.getElementsByName || !d.getElementsByName(m).length;
                      })),
                      e.getById
                        ? ((i.filter.ID = function (t) {
                            var n = t.replace(nt, et);
                            return function (t) {
                              return t.getAttribute("id") === n;
                            };
                          }),
                          (i.find.ID = function (t, n) {
                            if (void 0 !== n.getElementById && p) {
                              var e = n.getElementById(t);
                              return e ? [e] : [];
                            }
                          }))
                        : ((i.filter.ID = function (t) {
                            var n = t.replace(nt, et);
                            return function (t) {
                              var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                              return e && e.value === n;
                            };
                          }),
                          (i.find.ID = function (t, n) {
                            if (void 0 !== n.getElementById && p) {
                              var e,
                                i,
                                r,
                                u = n.getElementById(t);
                              if (u) {
                                if ((e = u.getAttributeNode("id")) && e.value === t) return [u];
                                for (r = n.getElementsByName(t), i = 0; (u = r[i++]); )
                                  if ((e = u.getAttributeNode("id")) && e.value === t) return [u];
                              }
                              return [];
                            }
                          })),
                      (i.find.TAG = e.getElementsByTagName
                        ? function (t, n) {
                            return void 0 !== n.getElementsByTagName ? n.getElementsByTagName(t) : e.qsa ? n.querySelectorAll(t) : void 0;
                          }
                        : function (t, n) {
                            var e,
                              i = [],
                              r = 0,
                              u = n.getElementsByTagName(t);
                            if ("*" === t) {
                              for (; (e = u[r++]); ) 1 === e.nodeType && i.push(e);
                              return i;
                            }
                            return u;
                          }),
                      (i.find.CLASS =
                        e.getElementsByClassName &&
                        function (t, n) {
                          if (void 0 !== n.getElementsByClassName && p) return n.getElementsByClassName(t);
                        }),
                      (g = []),
                      (v = []),
                      (e.qsa = X.test(d.querySelectorAll)) &&
                        (ht(function (t) {
                          var n;
                          (f.appendChild(t).innerHTML =
                            "<a id='" + m + "'></a><select id='" + m + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"),
                            t.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + $ + ")"),
                            t.querySelectorAll("[id~=" + m + "-]").length || v.push("~="),
                            (n = d.createElement("input")).setAttribute("name", ""),
                            t.appendChild(n),
                            t.querySelectorAll("[name='']").length || v.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"),
                            t.querySelectorAll(":checked").length || v.push(":checked"),
                            t.querySelectorAll("a#" + m + "+*").length || v.push(".#.+[+~]"),
                            t.querySelectorAll("\\\f"),
                            v.push("[\\r\\n\\f]");
                        }),
                        ht(function (t) {
                          t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var n = d.createElement("input");
                          n.setAttribute("type", "hidden"),
                            t.appendChild(n).setAttribute("name", "D"),
                            t.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="),
                            2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                            (f.appendChild(t).disabled = !0),
                            2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                            t.querySelectorAll("*,:x"),
                            v.push(",.*:");
                        })),
                      (e.matchesSelector = X.test(
                        (y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)
                      )) &&
                        ht(function (t) {
                          (e.disconnectedMatch = y.call(t, "*")), y.call(t, "[s!='']:x"), g.push("!=", L);
                        }),
                      (v = v.length && new RegExp(v.join("|"))),
                      (g = g.length && new RegExp(g.join("|"))),
                      (n = X.test(f.compareDocumentPosition)),
                      (F =
                        n || X.test(f.contains)
                          ? function (t, n) {
                              var e = 9 === t.nodeType ? t.documentElement : t,
                                i = n && n.parentNode;
                              return (
                                t === i ||
                                !(
                                  !i ||
                                  1 !== i.nodeType ||
                                  !(e.contains ? e.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i))
                                )
                              );
                            }
                          : function (t, n) {
                              if (n) for (; (n = n.parentNode); ) if (n === t) return !0;
                              return !1;
                            }),
                      (B = n
                        ? function (t, n) {
                            if (t === n) return (D = !0), 0;
                            var i = !t.compareDocumentPosition - !n.compareDocumentPosition;
                            return (
                              i ||
                              (1 & (i = (t.ownerDocument || t) == (n.ownerDocument || n) ? t.compareDocumentPosition(n) : 1) ||
                              (!e.sortDetached && n.compareDocumentPosition(t) === i)
                                ? t == d || (t.ownerDocument == C && F(C, t))
                                  ? -1
                                  : n == d || (n.ownerDocument == C && F(C, n))
                                  ? 1
                                  : h
                                  ? M(h, t) - M(h, n)
                                  : 0
                                : 4 & i
                                ? -1
                                : 1)
                            );
                          }
                        : function (t, n) {
                            if (t === n) return (D = !0), 0;
                            var e,
                              i = 0,
                              r = t.parentNode,
                              u = n.parentNode,
                              o = [t],
                              s = [n];
                            if (!r || !u) return t == d ? -1 : n == d ? 1 : r ? -1 : u ? 1 : h ? M(h, t) - M(h, n) : 0;
                            if (r === u) return lt(t, n);
                            for (e = t; (e = e.parentNode); ) o.unshift(e);
                            for (e = n; (e = e.parentNode); ) s.unshift(e);
                            for (; o[i] === s[i]; ) i++;
                            return i ? lt(o[i], s[i]) : o[i] == C ? -1 : s[i] == C ? 1 : 0;
                          })),
                    d
                  );
                }),
              (st.matches = function (t, n) {
                return st(t, null, null, n);
              }),
              (st.matchesSelector = function (t, n) {
                if ((l(t), e.matchesSelector && p && !x[n + " "] && (!g || !g.test(n)) && (!v || !v.test(n))))
                  try {
                    var i = y.call(t, n);
                    if (i || e.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                  } catch (t) {
                    x(n, !0);
                  }
                return 0 < st(n, d, null, [t]).length;
              }),
              (st.contains = function (t, n) {
                return (t.ownerDocument || t) != d && l(t), F(t, n);
              }),
              (st.attr = function (t, n) {
                (t.ownerDocument || t) != d && l(t);
                var r = i.attrHandle[n.toLowerCase()],
                  u = r && A.call(i.attrHandle, n.toLowerCase()) ? r(t, n, !p) : void 0;
                return void 0 !== u
                  ? u
                  : e.attributes || !p
                  ? t.getAttribute(n)
                  : (u = t.getAttributeNode(n)) && u.specified
                  ? u.value
                  : null;
              }),
              (st.escape = function (t) {
                return (t + "").replace(it, rt);
              }),
              (st.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
              }),
              (st.uniqueSort = function (t) {
                var n,
                  i = [],
                  r = 0,
                  u = 0;
                if (((D = !e.detectDuplicates), (h = !e.sortStable && t.slice(0)), t.sort(B), D)) {
                  for (; (n = t[u++]); ) n === t[u] && (r = i.push(u));
                  for (; r--; ) t.splice(i[r], 1);
                }
                return (h = null), t;
              }),
              (r = st.getText =
                function (t) {
                  var n,
                    e = "",
                    i = 0,
                    u = t.nodeType;
                  if (u) {
                    if (1 === u || 9 === u || 11 === u) {
                      if ("string" == typeof t.textContent) return t.textContent;
                      for (t = t.firstChild; t; t = t.nextSibling) e += r(t);
                    } else if (3 === u || 4 === u) return t.nodeValue;
                  } else for (; (n = t[i++]); ) e += r(n);
                  return e;
                }),
              ((i = st.selectors =
                {
                  cacheLength: 50,
                  createPseudo: ct,
                  match: q,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" }
                  },
                  preFilter: {
                    ATTR: function (t) {
                      return (
                        (t[1] = t[1].replace(nt, et)),
                        (t[3] = (t[3] || t[4] || t[5] || "").replace(nt, et)),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                      );
                    },
                    CHILD: function (t) {
                      return (
                        (t[1] = t[1].toLowerCase()),
                        "nth" === t[1].slice(0, 3)
                          ? (t[3] || st.error(t[0]),
                            (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))),
                            (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                          : t[3] && st.error(t[0]),
                        t
                      );
                    },
                    PSEUDO: function (t) {
                      var n,
                        e = !t[6] && t[2];
                      return q.CHILD.test(t[0])
                        ? null
                        : (t[3]
                            ? (t[2] = t[4] || t[5] || "")
                            : e &&
                              W.test(e) &&
                              (n = o(e, !0)) &&
                              (n = e.indexOf(")", e.length - n) - e.length) &&
                              ((t[0] = t[0].slice(0, n)), (t[2] = e.slice(0, n))),
                          t.slice(0, 3));
                    }
                  },
                  filter: {
                    TAG: function (t) {
                      var n = t.replace(nt, et).toLowerCase();
                      return "*" === t
                        ? function () {
                            return !0;
                          }
                        : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === n;
                          };
                    },
                    CLASS: function (t) {
                      var n = b[t + " "];
                      return (
                        n ||
                        ((n = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) &&
                          b(t, function (t) {
                            return n.test(
                              ("string" == typeof t.className && t.className) ||
                                (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                                ""
                            );
                          }))
                      );
                    },
                    ATTR: function (t, n, e) {
                      return function (i) {
                        var r = st.attr(i, t);
                        return null == r
                          ? "!=" === n
                          : !n ||
                              ((r += ""),
                              "=" === n
                                ? r === e
                                : "!=" === n
                                ? r !== e
                                : "^=" === n
                                ? e && 0 === r.indexOf(e)
                                : "*=" === n
                                ? e && -1 < r.indexOf(e)
                                : "$=" === n
                                ? e && r.slice(-e.length) === e
                                : "~=" === n
                                ? -1 < (" " + r.replace(U, " ") + " ").indexOf(e)
                                : "|=" === n && (r === e || r.slice(0, e.length + 1) === e + "-"));
                      };
                    },
                    CHILD: function (t, n, e, i, r) {
                      var u = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        s = "of-type" === n;
                      return 1 === i && 0 === r
                        ? function (t) {
                            return !!t.parentNode;
                          }
                        : function (n, e, a) {
                            var c,
                              h,
                              D,
                              l,
                              d,
                              f,
                              p = u !== o ? "nextSibling" : "previousSibling",
                              v = n.parentNode,
                              g = s && n.nodeName.toLowerCase(),
                              y = !a && !s,
                              F = !1;
                            if (v) {
                              if (u) {
                                for (; p; ) {
                                  for (l = n; (l = l[p]); ) if (s ? l.nodeName.toLowerCase() === g : 1 === l.nodeType) return !1;
                                  f = p = "only" === t && !f && "nextSibling";
                                }
                                return !0;
                              }
                              if (((f = [o ? v.firstChild : v.lastChild]), o && y)) {
                                for (
                                  F =
                                    (d =
                                      (c = (h = (D = (l = v)[m] || (l[m] = {}))[l.uniqueID] || (D[l.uniqueID] = {}))[t] || [])[0] === w &&
                                      c[1]) && c[2],
                                    l = d && v.childNodes[d];
                                  (l = (++d && l && l[p]) || (F = d = 0) || f.pop());

                                )
                                  if (1 === l.nodeType && ++F && l === n) {
                                    h[t] = [w, d, F];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (F = d =
                                    (c = (h = (D = (l = n)[m] || (l[m] = {}))[l.uniqueID] || (D[l.uniqueID] = {}))[t] || [])[0] === w &&
                                    c[1]),
                                !1 === F)
                              )
                                for (
                                  ;
                                  (l = (++d && l && l[p]) || (F = d = 0) || f.pop()) &&
                                  ((s ? l.nodeName.toLowerCase() !== g : 1 !== l.nodeType) ||
                                    !++F ||
                                    (y && ((h = (D = l[m] || (l[m] = {}))[l.uniqueID] || (D[l.uniqueID] = {}))[t] = [w, F]), l !== n));

                                );
                              return (F -= r) === i || (F % i == 0 && 0 <= F / i);
                            }
                          };
                    },
                    PSEUDO: function (t, n) {
                      var e,
                        r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                      return r[m]
                        ? r(n)
                        : 1 < r.length
                        ? ((e = [t, t, "", n]),
                          i.setFilters.hasOwnProperty(t.toLowerCase())
                            ? ct(function (t, e) {
                                for (var i, u = r(t, n), o = u.length; o--; ) t[(i = M(t, u[o]))] = !(e[i] = u[o]);
                              })
                            : function (t) {
                                return r(t, 0, e);
                              })
                        : r;
                    }
                  },
                  pseudos: {
                    not: ct(function (t) {
                      var n = [],
                        e = [],
                        i = s(t.replace(G, "$1"));
                      return i[m]
                        ? ct(function (t, n, e, r) {
                            for (var u, o = i(t, null, r, []), s = t.length; s--; ) (u = o[s]) && (t[s] = !(n[s] = u));
                          })
                        : function (t, r, u) {
                            return (n[0] = t), i(n, null, u, e), (n[0] = null), !e.pop();
                          };
                    }),
                    has: ct(function (t) {
                      return function (n) {
                        return 0 < st(t, n).length;
                      };
                    }),
                    contains: ct(function (t) {
                      return (
                        (t = t.replace(nt, et)),
                        function (n) {
                          return -1 < (n.textContent || r(n)).indexOf(t);
                        }
                      );
                    }),
                    lang: ct(function (t) {
                      return (
                        z.test(t || "") || st.error("unsupported lang: " + t),
                        (t = t.replace(nt, et).toLowerCase()),
                        function (n) {
                          var e;
                          do {
                            if ((e = p ? n.lang : n.getAttribute("xml:lang") || n.getAttribute("lang")))
                              return (e = e.toLowerCase()) === t || 0 === e.indexOf(t + "-");
                          } while ((n = n.parentNode) && 1 === n.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (n) {
                      var e = t.location && t.location.hash;
                      return e && e.slice(1) === n.id;
                    },
                    root: function (t) {
                      return t === f;
                    },
                    focus: function (t) {
                      return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: pt(!1),
                    disabled: pt(!0),
                    checked: function (t) {
                      var n = t.nodeName.toLowerCase();
                      return ("input" === n && !!t.checked) || ("option" === n && !!t.selected);
                    },
                    selected: function (t) {
                      return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function (t) {
                      for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (t) {
                      return !i.pseudos.empty(t);
                    },
                    header: function (t) {
                      return J.test(t.nodeName);
                    },
                    input: function (t) {
                      return Y.test(t.nodeName);
                    },
                    button: function (t) {
                      var n = t.nodeName.toLowerCase();
                      return ("input" === n && "button" === t.type) || "button" === n;
                    },
                    text: function (t) {
                      var n;
                      return (
                        "input" === t.nodeName.toLowerCase() &&
                        "text" === t.type &&
                        (null == (n = t.getAttribute("type")) || "text" === n.toLowerCase())
                      );
                    },
                    first: vt(function () {
                      return [0];
                    }),
                    last: vt(function (t, n) {
                      return [n - 1];
                    }),
                    eq: vt(function (t, n, e) {
                      return [e < 0 ? e + n : e];
                    }),
                    even: vt(function (t, n) {
                      for (var e = 0; e < n; e += 2) t.push(e);
                      return t;
                    }),
                    odd: vt(function (t, n) {
                      for (var e = 1; e < n; e += 2) t.push(e);
                      return t;
                    }),
                    lt: vt(function (t, n, e) {
                      for (var i = e < 0 ? e + n : n < e ? n : e; 0 <= --i; ) t.push(i);
                      return t;
                    }),
                    gt: vt(function (t, n, e) {
                      for (var i = e < 0 ? e + n : e; ++i < n; ) t.push(i);
                      return t;
                    })
                  }
                }).pseudos.nth = i.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                i.pseudos[n] = dt(n);
              for (n in { submit: !0, reset: !0 }) i.pseudos[n] = ft(n);
              function yt() {}
              function Ft(t) {
                for (var n = 0, e = t.length, i = ""; n < e; n++) i += t[n].value;
                return i;
              }
              function mt(t, n, e) {
                var i = n.dir,
                  r = n.next,
                  u = r || i,
                  o = e && "parentNode" === u,
                  s = E++;
                return n.first
                  ? function (n, e, r) {
                      for (; (n = n[i]); ) if (1 === n.nodeType || o) return t(n, e, r);
                      return !1;
                    }
                  : function (n, e, a) {
                      var c,
                        h,
                        D,
                        l = [w, s];
                      if (a) {
                        for (; (n = n[i]); ) if ((1 === n.nodeType || o) && t(n, e, a)) return !0;
                      } else
                        for (; (n = n[i]); )
                          if (1 === n.nodeType || o)
                            if (((h = (D = n[m] || (n[m] = {}))[n.uniqueID] || (D[n.uniqueID] = {})), r && r === n.nodeName.toLowerCase()))
                              n = n[i] || n;
                            else {
                              if ((c = h[u]) && c[0] === w && c[1] === s) return (l[2] = c[2]);
                              if (((h[u] = l)[2] = t(n, e, a))) return !0;
                            }
                      return !1;
                    };
              }
              function Ct(t) {
                return 1 < t.length
                  ? function (n, e, i) {
                      for (var r = t.length; r--; ) if (!t[r](n, e, i)) return !1;
                      return !0;
                    }
                  : t[0];
              }
              function wt(t, n, e, i, r) {
                for (var u, o = [], s = 0, a = t.length, c = null != n; s < a; s++)
                  (u = t[s]) && ((e && !e(u, i, r)) || (o.push(u), c && n.push(s)));
                return o;
              }
              function Et(t, n, e, i, r, u) {
                return (
                  i && !i[m] && (i = Et(i)),
                  r && !r[m] && (r = Et(r, u)),
                  ct(function (u, o, s, a) {
                    var c,
                      h,
                      D,
                      l = [],
                      d = [],
                      f = o.length,
                      p =
                        u ||
                        (function (t, n, e) {
                          for (var i = 0, r = n.length; i < r; i++) st(t, n[i], e);
                          return e;
                        })(n || "*", s.nodeType ? [s] : s, []),
                      v = !t || (!u && n) ? p : wt(p, l, t, s, a),
                      g = e ? (r || (u ? t : f || i) ? [] : o) : v;
                    if ((e && e(v, g, s, a), i))
                      for (c = wt(g, d), i(c, [], s, a), h = c.length; h--; ) (D = c[h]) && (g[d[h]] = !(v[d[h]] = D));
                    if (u) {
                      if (r || t) {
                        if (r) {
                          for (c = [], h = g.length; h--; ) (D = g[h]) && c.push((v[h] = D));
                          r(null, (g = []), c, a);
                        }
                        for (h = g.length; h--; ) (D = g[h]) && -1 < (c = r ? M(u, D) : l[h]) && (u[c] = !(o[c] = D));
                      }
                    } else (g = wt(g === o ? g.splice(f, g.length) : g)), r ? r(null, o, g, a) : S.apply(o, g);
                  })
                );
              }
              function bt(t) {
                for (
                  var n,
                    e,
                    r,
                    u = t.length,
                    o = i.relative[t[0].type],
                    s = o || i.relative[" "],
                    a = o ? 1 : 0,
                    h = mt(
                      function (t) {
                        return t === n;
                      },
                      s,
                      !0
                    ),
                    D = mt(
                      function (t) {
                        return -1 < M(n, t);
                      },
                      s,
                      !0
                    ),
                    l = [
                      function (t, e, i) {
                        var r = (!o && (i || e !== c)) || ((n = e).nodeType ? h(t, e, i) : D(t, e, i));
                        return (n = null), r;
                      }
                    ];
                  a < u;
                  a++
                )
                  if ((e = i.relative[t[a].type])) l = [mt(Ct(l), e)];
                  else {
                    if ((e = i.filter[t[a].type].apply(null, t[a].matches))[m]) {
                      for (r = ++a; r < u && !i.relative[t[r].type]; r++);
                      return Et(
                        1 < a && Ct(l),
                        1 < a && Ft(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(G, "$1"),
                        e,
                        a < r && bt(t.slice(a, r)),
                        r < u && bt((t = t.slice(r))),
                        r < u && Ft(t)
                      );
                    }
                    l.push(e);
                  }
                return Ct(l);
              }
              return (
                (yt.prototype = i.filters = i.pseudos),
                (i.setFilters = new yt()),
                (o = st.tokenize =
                  function (t, n) {
                    var e,
                      r,
                      u,
                      o,
                      s,
                      a,
                      c,
                      h = j[t + " "];
                    if (h) return n ? 0 : h.slice(0);
                    for (s = t, a = [], c = i.preFilter; s; ) {
                      for (o in ((e && !(r = N.exec(s))) || (r && (s = s.slice(r[0].length) || s), a.push((u = []))),
                      (e = !1),
                      (r = V.exec(s)) && ((e = r.shift()), u.push({ value: e, type: r[0].replace(G, " ") }), (s = s.slice(e.length))),
                      i.filter))
                        !(r = q[o].exec(s)) ||
                          (c[o] && !(r = c[o](r))) ||
                          ((e = r.shift()), u.push({ value: e, type: o, matches: r }), (s = s.slice(e.length)));
                      if (!e) break;
                    }
                    return n ? s.length : s ? st.error(t) : j(t, a).slice(0);
                  }),
                (s = st.compile =
                  function (t, n) {
                    var e,
                      r,
                      u,
                      s,
                      a,
                      h,
                      D = [],
                      f = [],
                      v = _[t + " "];
                    if (!v) {
                      for (n || (n = o(t)), e = n.length; e--; ) (v = bt(n[e]))[m] ? D.push(v) : f.push(v);
                      (v = _(
                        t,
                        ((r = f),
                        (s = 0 < (u = D).length),
                        (a = 0 < r.length),
                        (h = function (t, n, e, o, h) {
                          var D,
                            f,
                            v,
                            g = 0,
                            y = "0",
                            F = t && [],
                            m = [],
                            C = c,
                            E = t || (a && i.find.TAG("*", h)),
                            b = (w += null == C ? 1 : Math.random() || 0.1),
                            j = E.length;
                          for (h && (c = n == d || n || h); y !== j && null != (D = E[y]); y++) {
                            if (a && D) {
                              for (f = 0, n || D.ownerDocument == d || (l(D), (e = !p)); (v = r[f++]); )
                                if (v(D, n || d, e)) {
                                  o.push(D);
                                  break;
                                }
                              h && (w = b);
                            }
                            s && ((D = !v && D) && g--, t && F.push(D));
                          }
                          if (((g += y), s && y !== g)) {
                            for (f = 0; (v = u[f++]); ) v(F, m, n, e);
                            if (t) {
                              if (0 < g) for (; y--; ) F[y] || m[y] || (m[y] = Q.call(o));
                              m = wt(m);
                            }
                            S.apply(o, m), h && !t && 0 < m.length && 1 < g + u.length && st.uniqueSort(o);
                          }
                          return h && ((w = b), (c = C)), F;
                        }),
                        s ? ct(h) : h)
                      )).selector = t;
                    }
                    return v;
                  }),
                (a = st.select =
                  function (t, n, e, r) {
                    var u,
                      a,
                      c,
                      h,
                      D,
                      l = "function" == typeof t && t,
                      d = !r && o((t = l.selector || t));
                    if (((e = e || []), 1 === d.length)) {
                      if (
                        2 < (a = d[0] = d[0].slice(0)).length &&
                        "ID" === (c = a[0]).type &&
                        9 === n.nodeType &&
                        p &&
                        i.relative[a[1].type]
                      ) {
                        if (!(n = (i.find.ID(c.matches[0].replace(nt, et), n) || [])[0])) return e;
                        l && (n = n.parentNode), (t = t.slice(a.shift().value.length));
                      }
                      for (u = q.needsContext.test(t) ? 0 : a.length; u-- && ((c = a[u]), !i.relative[(h = c.type)]); )
                        if ((D = i.find[h]) && (r = D(c.matches[0].replace(nt, et), (tt.test(a[0].type) && gt(n.parentNode)) || n))) {
                          if ((a.splice(u, 1), !(t = r.length && Ft(a)))) return S.apply(e, r), e;
                          break;
                        }
                    }
                    return (l || s(t, d))(r, n, !p, e, !n || (tt.test(t) && gt(n.parentNode)) || n), e;
                  }),
                (e.sortStable = m.split("").sort(B).join("") === m),
                (e.detectDuplicates = !!D),
                l(),
                (e.sortDetached = ht(function (t) {
                  return 1 & t.compareDocumentPosition(d.createElement("fieldset"));
                })),
                ht(function (t) {
                  return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                }) ||
                  Dt("type|href|height|width", function (t, n, e) {
                    if (!e) return t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
                  }),
                (e.attributes &&
                  ht(function (t) {
                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                  })) ||
                  Dt("value", function (t, n, e) {
                    if (!e && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                  }),
                ht(function (t) {
                  return null == t.getAttribute("disabled");
                }) ||
                  Dt($, function (t, n, e) {
                    var i;
                    if (!e) return !0 === t[n] ? n.toLowerCase() : (i = t.getAttributeNode(n)) && i.specified ? i.value : null;
                  }),
                st
              );
            })(i);
            (b.find = _),
              (b.expr = _.selectors),
              (b.expr[":"] = b.expr.pseudos),
              (b.uniqueSort = b.unique = _.uniqueSort),
              (b.text = _.getText),
              (b.isXMLDoc = _.isXML),
              (b.contains = _.contains),
              (b.escapeSelector = _.escape);
            var x = function (t, n, e) {
                for (var i = [], r = void 0 !== e; (t = t[n]) && 9 !== t.nodeType; )
                  if (1 === t.nodeType) {
                    if (r && b(t).is(e)) break;
                    i.push(t);
                  }
                return i;
              },
              B = function (t, n) {
                for (var e = []; t; t = t.nextSibling) 1 === t.nodeType && t !== n && e.push(t);
                return e;
              },
              A = b.expr.match.needsContext;
            function k(t, n) {
              return t.nodeName && t.nodeName.toLowerCase() === n.toLowerCase();
            }
            var Q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function I(t, n, e) {
              return g(n)
                ? b.grep(t, function (t, i) {
                    return !!n.call(t, i, t) !== e;
                  })
                : n.nodeType
                ? b.grep(t, function (t) {
                    return (t === n) !== e;
                  })
                : "string" != typeof n
                ? b.grep(t, function (t) {
                    return -1 < h.call(n, t) !== e;
                  })
                : b.filter(n, t, e);
            }
            (b.filter = function (t, n, e) {
              var i = n[0];
              return (
                e && (t = ":not(" + t + ")"),
                1 === n.length && 1 === i.nodeType
                  ? b.find.matchesSelector(i, t)
                    ? [i]
                    : []
                  : b.find.matches(
                      t,
                      b.grep(n, function (t) {
                        return 1 === t.nodeType;
                      })
                    )
              );
            }),
              b.fn.extend({
                find: function (t) {
                  var n,
                    e,
                    i = this.length,
                    r = this;
                  if ("string" != typeof t)
                    return this.pushStack(
                      b(t).filter(function () {
                        for (n = 0; n < i; n++) if (b.contains(r[n], this)) return !0;
                      })
                    );
                  for (e = this.pushStack([]), n = 0; n < i; n++) b.find(t, r[n], e);
                  return 1 < i ? b.uniqueSort(e) : e;
                },
                filter: function (t) {
                  return this.pushStack(I(this, t || [], !1));
                },
                not: function (t) {
                  return this.pushStack(I(this, t || [], !0));
                },
                is: function (t) {
                  return !!I(this, "string" == typeof t && A.test(t) ? b(t) : t || [], !1).length;
                }
              });
            var S,
              T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((b.fn.init = function (t, n, e) {
              var i, r;
              if (!t) return this;
              if (((e = e || S), "string" == typeof t)) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : T.exec(t)) || (!i[1] && n))
                  return !n || n.jquery ? (n || e).find(t) : this.constructor(n).find(t);
                if (i[1]) {
                  if (
                    ((n = n instanceof b ? n[0] : n),
                    b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : F, !0)),
                    Q.test(i[1]) && b.isPlainObject(n))
                  )
                    for (i in n) g(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                  return this;
                }
                return (r = F.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
              }
              return t.nodeType
                ? ((this[0] = t), (this.length = 1), this)
                : g(t)
                ? void 0 !== e.ready
                  ? e.ready(t)
                  : t(b)
                : b.makeArray(t, this);
            }).prototype = b.fn),
              (S = b(F));
            var M = /^(?:parents|prev(?:Until|All))/,
              $ = { children: !0, contents: !0, next: !0, prev: !0 };
            function P(t, n) {
              for (; (t = t[n]) && 1 !== t.nodeType; );
              return t;
            }
            b.fn.extend({
              has: function (t) {
                var n = b(t, this),
                  e = n.length;
                return this.filter(function () {
                  for (var t = 0; t < e; t++) if (b.contains(this, n[t])) return !0;
                });
              },
              closest: function (t, n) {
                var e,
                  i = 0,
                  r = this.length,
                  u = [],
                  o = "string" != typeof t && b(t);
                if (!A.test(t))
                  for (; i < r; i++)
                    for (e = this[i]; e && e !== n; e = e.parentNode)
                      if (e.nodeType < 11 && (o ? -1 < o.index(e) : 1 === e.nodeType && b.find.matchesSelector(e, t))) {
                        u.push(e);
                        break;
                      }
                return this.pushStack(1 < u.length ? b.uniqueSort(u) : u);
              },
              index: function (t) {
                return t
                  ? "string" == typeof t
                    ? h.call(b(t), this[0])
                    : h.call(this, t.jquery ? t[0] : t)
                  : this[0] && this[0].parentNode
                  ? this.first().prevAll().length
                  : -1;
              },
              add: function (t, n) {
                return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, n))));
              },
              addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
              }
            }),
              b.each(
                {
                  parent: function (t) {
                    var n = t.parentNode;
                    return n && 11 !== n.nodeType ? n : null;
                  },
                  parents: function (t) {
                    return x(t, "parentNode");
                  },
                  parentsUntil: function (t, n, e) {
                    return x(t, "parentNode", e);
                  },
                  next: function (t) {
                    return P(t, "nextSibling");
                  },
                  prev: function (t) {
                    return P(t, "previousSibling");
                  },
                  nextAll: function (t) {
                    return x(t, "nextSibling");
                  },
                  prevAll: function (t) {
                    return x(t, "previousSibling");
                  },
                  nextUntil: function (t, n, e) {
                    return x(t, "nextSibling", e);
                  },
                  prevUntil: function (t, n, e) {
                    return x(t, "previousSibling", e);
                  },
                  siblings: function (t) {
                    return B((t.parentNode || {}).firstChild, t);
                  },
                  children: function (t) {
                    return B(t.firstChild);
                  },
                  contents: function (t) {
                    return null != t.contentDocument && o(t.contentDocument)
                      ? t.contentDocument
                      : (k(t, "template") && (t = t.content || t), b.merge([], t.childNodes));
                  }
                },
                function (t, n) {
                  b.fn[t] = function (e, i) {
                    var r = b.map(this, n, e);
                    return (
                      "Until" !== t.slice(-5) && (i = e),
                      i && "string" == typeof i && (r = b.filter(i, r)),
                      1 < this.length && ($[t] || b.uniqueSort(r), M.test(t) && r.reverse()),
                      this.pushStack(r)
                    );
                  };
                }
              );
            var R = /[^\x20\t\r\n\f]+/g;
            function O(t) {
              return t;
            }
            function L(t) {
              throw t;
            }
            function U(t, n, e, i) {
              var r;
              try {
                t && g((r = t.promise))
                  ? r.call(t).done(n).fail(e)
                  : t && g((r = t.then))
                  ? r.call(t, n, e)
                  : n.apply(void 0, [t].slice(i));
              } catch (t) {
                e.apply(void 0, [t]);
              }
            }
            (b.Callbacks = function (t) {
              var n, e;
              t =
                "string" == typeof t
                  ? ((n = t),
                    (e = {}),
                    b.each(n.match(R) || [], function (t, n) {
                      e[n] = !0;
                    }),
                    e)
                  : b.extend({}, t);
              var i,
                r,
                u,
                o,
                s = [],
                a = [],
                c = -1,
                h = function () {
                  for (o = o || t.once, u = i = !0; a.length; c = -1)
                    for (r = a.shift(); ++c < s.length; ) !1 === s[c].apply(r[0], r[1]) && t.stopOnFalse && ((c = s.length), (r = !1));
                  t.memory || (r = !1), (i = !1), o && (s = r ? [] : "");
                },
                D = {
                  add: function () {
                    return (
                      s &&
                        (r && !i && ((c = s.length - 1), a.push(r)),
                        (function n(e) {
                          b.each(e, function (e, i) {
                            g(i) ? (t.unique && D.has(i)) || s.push(i) : i && i.length && "string" !== w(i) && n(i);
                          });
                        })(arguments),
                        r && !i && h()),
                      this
                    );
                  },
                  remove: function () {
                    return (
                      b.each(arguments, function (t, n) {
                        for (var e; -1 < (e = b.inArray(n, s, e)); ) s.splice(e, 1), e <= c && c--;
                      }),
                      this
                    );
                  },
                  has: function (t) {
                    return t ? -1 < b.inArray(t, s) : 0 < s.length;
                  },
                  empty: function () {
                    return s && (s = []), this;
                  },
                  disable: function () {
                    return (o = a = []), (s = r = ""), this;
                  },
                  disabled: function () {
                    return !s;
                  },
                  lock: function () {
                    return (o = a = []), r || i || (s = r = ""), this;
                  },
                  locked: function () {
                    return !!o;
                  },
                  fireWith: function (t, n) {
                    return o || ((n = [t, (n = n || []).slice ? n.slice() : n]), a.push(n), i || h()), this;
                  },
                  fire: function () {
                    return D.fireWith(this, arguments), this;
                  },
                  fired: function () {
                    return !!u;
                  }
                };
              return D;
            }),
              b.extend({
                Deferred: function (t) {
                  var n = [
                      ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                      ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                      ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                    ],
                    e = "pending",
                    r = {
                      state: function () {
                        return e;
                      },
                      always: function () {
                        return u.done(arguments).fail(arguments), this;
                      },
                      catch: function (t) {
                        return r.then(null, t);
                      },
                      pipe: function () {
                        var t = arguments;
                        return b
                          .Deferred(function (e) {
                            b.each(n, function (n, i) {
                              var r = g(t[i[4]]) && t[i[4]];
                              u[i[1]](function () {
                                var t = r && r.apply(this, arguments);
                                t && g(t.promise)
                                  ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject)
                                  : e[i[0] + "With"](this, r ? [t] : arguments);
                              });
                            }),
                              (t = null);
                          })
                          .promise();
                      },
                      then: function (t, e, r) {
                        var u = 0;
                        function o(t, n, e, r) {
                          return function () {
                            var s = this,
                              a = arguments,
                              c = function () {
                                var i, c;
                                if (!(t < u)) {
                                  if ((i = e.apply(s, a)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                  (c = i && ("object" == typeof i || "function" == typeof i) && i.then),
                                    g(c)
                                      ? r
                                        ? c.call(i, o(u, n, O, r), o(u, n, L, r))
                                        : (u++, c.call(i, o(u, n, O, r), o(u, n, L, r), o(u, n, O, n.notifyWith)))
                                      : (e !== O && ((s = void 0), (a = [i])), (r || n.resolveWith)(s, a));
                                }
                              },
                              h = r
                                ? c
                                : function () {
                                    try {
                                      c();
                                    } catch (i) {
                                      b.Deferred.exceptionHook && b.Deferred.exceptionHook(i, h.stackTrace),
                                        u <= t + 1 && (e !== L && ((s = void 0), (a = [i])), n.rejectWith(s, a));
                                    }
                                  };
                            t ? h() : (b.Deferred.getStackHook && (h.stackTrace = b.Deferred.getStackHook()), i.setTimeout(h));
                          };
                        }
                        return b
                          .Deferred(function (i) {
                            n[0][3].add(o(0, i, g(r) ? r : O, i.notifyWith)),
                              n[1][3].add(o(0, i, g(t) ? t : O)),
                              n[2][3].add(o(0, i, g(e) ? e : L));
                          })
                          .promise();
                      },
                      promise: function (t) {
                        return null != t ? b.extend(t, r) : r;
                      }
                    },
                    u = {};
                  return (
                    b.each(n, function (t, i) {
                      var o = i[2],
                        s = i[5];
                      (r[i[1]] = o.add),
                        s &&
                          o.add(
                            function () {
                              e = s;
                            },
                            n[3 - t][2].disable,
                            n[3 - t][3].disable,
                            n[0][2].lock,
                            n[0][3].lock
                          ),
                        o.add(i[3].fire),
                        (u[i[0]] = function () {
                          return u[i[0] + "With"](this === u ? void 0 : this, arguments), this;
                        }),
                        (u[i[0] + "With"] = o.fireWith);
                    }),
                    r.promise(u),
                    t && t.call(u, u),
                    u
                  );
                },
                when: function (t) {
                  var n = arguments.length,
                    e = n,
                    i = Array(e),
                    r = s.call(arguments),
                    u = b.Deferred(),
                    o = function (t) {
                      return function (e) {
                        (i[t] = this), (r[t] = 1 < arguments.length ? s.call(arguments) : e), --n || u.resolveWith(i, r);
                      };
                    };
                  if (n <= 1 && (U(t, u.done(o(e)).resolve, u.reject, !n), "pending" === u.state() || g(r[e] && r[e].then)))
                    return u.then();
                  for (; e--; ) U(r[e], o(e), u.reject);
                  return u.promise();
                }
              });
            var G = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (b.Deferred.exceptionHook = function (t, n) {
              i.console && i.console.warn && t && G.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
            }),
              (b.readyException = function (t) {
                i.setTimeout(function () {
                  throw t;
                });
              });
            var N = b.Deferred();
            function V() {
              F.removeEventListener("DOMContentLoaded", V), i.removeEventListener("load", V), b.ready();
            }
            (b.fn.ready = function (t) {
              return (
                N.then(t).catch(function (t) {
                  b.readyException(t);
                }),
                this
              );
            }),
              b.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (t) {
                  (!0 === t ? --b.readyWait : b.isReady) || ((b.isReady = !0) !== t && 0 < --b.readyWait) || N.resolveWith(F, [b]);
                }
              }),
              (b.ready.then = N.then),
              "complete" === F.readyState || ("loading" !== F.readyState && !F.documentElement.doScroll)
                ? i.setTimeout(b.ready)
                : (F.addEventListener("DOMContentLoaded", V), i.addEventListener("load", V));
            var H = function (t, n, e, i, r, u, o) {
                var s = 0,
                  a = t.length,
                  c = null == e;
                if ("object" === w(e)) for (s in ((r = !0), e)) H(t, n, s, e[s], !0, u, o);
                else if (
                  void 0 !== i &&
                  ((r = !0),
                  g(i) || (o = !0),
                  c &&
                    (o
                      ? (n.call(t, i), (n = null))
                      : ((c = n),
                        (n = function (t, n, e) {
                          return c.call(b(t), e);
                        }))),
                  n)
                )
                  for (; s < a; s++) n(t[s], e, o ? i : i.call(t[s], s, n(t[s], e)));
                return r ? t : c ? n.call(t) : a ? n(t[0], e) : u;
              },
              W = /^-ms-/,
              z = /-([a-z])/g;
            function q(t, n) {
              return n.toUpperCase();
            }
            function K(t) {
              return t.replace(W, "ms-").replace(z, q);
            }
            var Y = function (t) {
              return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            };
            function J() {
              this.expando = b.expando + J.uid++;
            }
            (J.uid = 1),
              (J.prototype = {
                cache: function (t) {
                  var n = t[this.expando];
                  return (
                    n ||
                      ((n = {}),
                      Y(t) &&
                        (t.nodeType ? (t[this.expando] = n) : Object.defineProperty(t, this.expando, { value: n, configurable: !0 }))),
                    n
                  );
                },
                set: function (t, n, e) {
                  var i,
                    r = this.cache(t);
                  if ("string" == typeof n) r[K(n)] = e;
                  else for (i in n) r[K(i)] = n[i];
                  return r;
                },
                get: function (t, n) {
                  return void 0 === n ? this.cache(t) : t[this.expando] && t[this.expando][K(n)];
                },
                access: function (t, n, e) {
                  return void 0 === n || (n && "string" == typeof n && void 0 === e)
                    ? this.get(t, n)
                    : (this.set(t, n, e), void 0 !== e ? e : n);
                },
                remove: function (t, n) {
                  var e,
                    i = t[this.expando];
                  if (void 0 !== i) {
                    if (void 0 !== n) {
                      e = (n = Array.isArray(n) ? n.map(K) : (n = K(n)) in i ? [n] : n.match(R) || []).length;
                      for (; e--; ) delete i[n[e]];
                    }
                    (void 0 === n || b.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                  }
                },
                hasData: function (t) {
                  var n = t[this.expando];
                  return void 0 !== n && !b.isEmptyObject(n);
                }
              });
            var X = new J(),
              Z = new J(),
              tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              nt = /[A-Z]/g;
            function et(t, n, e) {
              var i, r;
              if (void 0 === e && 1 === t.nodeType)
                if (((i = "data-" + n.replace(nt, "-$&").toLowerCase()), "string" == typeof (e = t.getAttribute(i)))) {
                  try {
                    e =
                      "true" === (r = e) || ("false" !== r && ("null" === r ? null : r === +r + "" ? +r : tt.test(r) ? JSON.parse(r) : r));
                  } catch (t) {}
                  Z.set(t, n, e);
                } else e = void 0;
              return e;
            }
            b.extend({
              hasData: function (t) {
                return Z.hasData(t) || X.hasData(t);
              },
              data: function (t, n, e) {
                return Z.access(t, n, e);
              },
              removeData: function (t, n) {
                Z.remove(t, n);
              },
              D: function (t, n, e) {
                return X.access(t, n, e);
              },
              l: function (t, n) {
                X.remove(t, n);
              }
            }),
              b.fn.extend({
                data: function (t, n) {
                  var e,
                    i,
                    r,
                    u = this[0],
                    o = u && u.attributes;
                  if (void 0 === t) {
                    if (this.length && ((r = Z.get(u)), 1 === u.nodeType && !X.get(u, "hasDataAttrs"))) {
                      for (e = o.length; e--; ) o[e] && 0 === (i = o[e].name).indexOf("data-") && ((i = K(i.slice(5))), et(u, i, r[i]));
                      X.set(u, "hasDataAttrs", !0);
                    }
                    return r;
                  }
                  return "object" == typeof t
                    ? this.each(function () {
                        Z.set(this, t);
                      })
                    : H(
                        this,
                        function (n) {
                          var e;
                          if (u && void 0 === n) return void 0 !== (e = Z.get(u, t)) || void 0 !== (e = et(u, t)) ? e : void 0;
                          this.each(function () {
                            Z.set(this, t, n);
                          });
                        },
                        null,
                        n,
                        1 < arguments.length,
                        null,
                        !0
                      );
                },
                removeData: function (t) {
                  return this.each(function () {
                    Z.remove(this, t);
                  });
                }
              }),
              b.extend({
                queue: function (t, n, e) {
                  var i;
                  if (t)
                    return (
                      (n = (n || "fx") + "queue"),
                      (i = X.get(t, n)),
                      e && (!i || Array.isArray(e) ? (i = X.access(t, n, b.makeArray(e))) : i.push(e)),
                      i || []
                    );
                },
                dequeue: function (t, n) {
                  n = n || "fx";
                  var e = b.queue(t, n),
                    i = e.length,
                    r = e.shift(),
                    u = b.p(t, n);
                  "inprogress" === r && ((r = e.shift()), i--),
                    r &&
                      ("fx" === n && e.unshift("inprogress"),
                      delete u.stop,
                      r.call(
                        t,
                        function () {
                          b.dequeue(t, n);
                        },
                        u
                      )),
                    !i && u && u.empty.fire();
                },
                p: function (t, n) {
                  var e = n + "queueHooks";
                  return (
                    X.get(t, e) ||
                    X.access(t, e, {
                      empty: b.Callbacks("once memory").add(function () {
                        X.remove(t, [n + "queue", e]);
                      })
                    })
                  );
                }
              }),
              b.fn.extend({
                queue: function (t, n) {
                  var e = 2;
                  return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                      ? b.queue(this[0], t)
                      : void 0 === n
                      ? this
                      : this.each(function () {
                          var e = b.queue(this, t, n);
                          b.p(this, t), "fx" === t && "inprogress" !== e[0] && b.dequeue(this, t);
                        })
                  );
                },
                dequeue: function (t) {
                  return this.each(function () {
                    b.dequeue(this, t);
                  });
                },
                clearQueue: function (t) {
                  return this.queue(t || "fx", []);
                },
                promise: function (t, n) {
                  var e,
                    i = 1,
                    r = b.Deferred(),
                    u = this,
                    o = this.length,
                    s = function () {
                      --i || r.resolveWith(u, [u]);
                    };
                  for ("string" != typeof t && ((n = t), (t = void 0)), t = t || "fx"; o--; )
                    (e = X.get(u[o], t + "queueHooks")) && e.empty && (i++, e.empty.add(s));
                  return s(), r.promise(n);
                }
              });
            var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
              ut = ["Top", "Right", "Bottom", "Left"],
              ot = F.documentElement,
              st = function (t) {
                return b.contains(t.ownerDocument, t);
              },
              at = { composed: !0 };
            ot.getRootNode &&
              (st = function (t) {
                return b.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument;
              });
            var ct = function (t, n) {
              return "none" === (t = n || t).style.display || ("" === t.style.display && st(t) && "none" === b.css(t, "display"));
            };
            function ht(t, n, e, i) {
              var r,
                u,
                o = 20,
                s = i
                  ? function () {
                      return i.cur();
                    }
                  : function () {
                      return b.css(t, n, "");
                    },
                a = s(),
                c = (e && e[3]) || (b.cssNumber[n] ? "" : "px"),
                h = t.nodeType && (b.cssNumber[n] || ("px" !== c && +a)) && rt.exec(b.css(t, n));
              if (h && h[3] !== c) {
                for (a /= 2, c = c || h[3], h = +a || 1; o--; )
                  b.style(t, n, h + c), (1 - u) * (1 - (u = s() / a || 0.5)) <= 0 && (o = 0), (h /= u);
                (h *= 2), b.style(t, n, h + c), (e = e || []);
              }
              return (
                e && ((h = +h || +a || 0), (r = e[1] ? h + (e[1] + 1) * e[2] : +e[2]), i && ((i.unit = c), (i.start = h), (i.end = r))), r
              );
            }
            var Dt = {};
            function lt(t, n) {
              for (var e, i, r, u, o, s, a, c = [], h = 0, D = t.length; h < D; h++)
                (i = t[h]).style &&
                  ((e = i.style.display),
                  n
                    ? ("none" === e && ((c[h] = X.get(i, "display") || null), c[h] || (i.style.display = "")),
                      "" === i.style.display &&
                        ct(i) &&
                        (c[h] =
                          ((a = o = u = void 0),
                          (o = (r = i).ownerDocument),
                          (s = r.nodeName),
                          (a = Dt[s]) ||
                            ((u = o.body.appendChild(o.createElement(s))),
                            (a = b.css(u, "display")),
                            u.parentNode.removeChild(u),
                            "none" === a && (a = "block"),
                            (Dt[s] = a)))))
                    : "none" !== e && ((c[h] = "none"), X.set(i, "display", e)));
              for (h = 0; h < D; h++) null != c[h] && (t[h].style.display = c[h]);
              return t;
            }
            b.fn.extend({
              show: function () {
                return lt(this, !0);
              },
              hide: function () {
                return lt(this);
              },
              toggle: function (t) {
                return "boolean" == typeof t
                  ? t
                    ? this.show()
                    : this.hide()
                  : this.each(function () {
                      ct(this) ? b(this).show() : b(this).hide();
                    });
              }
            });
            var dt,
              ft,
              pt = /^(?:checkbox|radio)$/i,
              vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              gt = /^$|^module$|\/(?:java|ecma)script/i;
            (dt = F.createDocumentFragment().appendChild(F.createElement("div"))),
              (ft = F.createElement("input")).setAttribute("type", "radio"),
              ft.setAttribute("checked", "checked"),
              ft.setAttribute("name", "t"),
              dt.appendChild(ft),
              (v.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (dt.innerHTML = "<textarea>x</textarea>"),
              (v.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue),
              (dt.innerHTML = "<option></option>"),
              (v.option = !!dt.lastChild);
            var yt = {
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              v: [0, "", ""]
            };
            function Ft(t, n) {
              var e;
              return (
                (e =
                  void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(n || "*")
                    : void 0 !== t.querySelectorAll
                    ? t.querySelectorAll(n || "*")
                    : []),
                void 0 === n || (n && k(t, n)) ? b.merge([t], e) : e
              );
            }
            function mt(t, n) {
              for (var e = 0, i = t.length; e < i; e++) X.set(t[e], "globalEval", !n || X.get(n[e], "globalEval"));
            }
            (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
              (yt.th = yt.td),
              v.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
            var Ct = /<|&#?\w+;/;
            function wt(t, n, e, i, r) {
              for (var u, o, s, a, c, h, D = n.createDocumentFragment(), l = [], d = 0, f = t.length; d < f; d++)
                if ((u = t[d]) || 0 === u)
                  if ("object" === w(u)) b.merge(l, u.nodeType ? [u] : u);
                  else if (Ct.test(u)) {
                    for (
                      o = o || D.appendChild(n.createElement("div")),
                        s = (vt.exec(u) || ["", ""])[1].toLowerCase(),
                        a = yt[s] || yt.v,
                        o.innerHTML = a[1] + b.htmlPrefilter(u) + a[2],
                        h = a[0];
                      h--;

                    )
                      o = o.lastChild;
                    b.merge(l, o.childNodes), ((o = D.firstChild).textContent = "");
                  } else l.push(n.createTextNode(u));
              for (D.textContent = "", d = 0; (u = l[d++]); )
                if (i && -1 < b.inArray(u, i)) r && r.push(u);
                else if (((c = st(u)), (o = Ft(D.appendChild(u), "script")), c && mt(o), e))
                  for (h = 0; (u = o[h++]); ) gt.test(u.type || "") && e.push(u);
              return D;
            }
            var Et = /^([^.]*)(?:\.(.+)|)/;
            function bt() {
              return !0;
            }
            function jt() {
              return !1;
            }
            function _t(t, n) {
              return (
                (t ===
                  (function () {
                    try {
                      return F.activeElement;
                    } catch (t) {}
                  })()) ==
                ("focus" === n)
              );
            }
            function xt(t, n, e, i, r, u) {
              var o, s;
              if ("object" == typeof n) {
                for (s in ("string" != typeof e && ((i = i || e), (e = void 0)), n)) xt(t, s, e, i, n[s], u);
                return t;
              }
              if (
                (null == i && null == r
                  ? ((r = e), (i = e = void 0))
                  : null == r && ("string" == typeof e ? ((r = i), (i = void 0)) : ((r = i), (i = e), (e = void 0))),
                !1 === r)
              )
                r = jt;
              else if (!r) return t;
              return (
                1 === u &&
                  ((o = r),
                  ((r = function (t) {
                    return b().off(t), o.apply(this, arguments);
                  }).guid = o.guid || (o.guid = b.guid++))),
                t.each(function () {
                  b.event.add(this, n, r, i, e);
                })
              );
            }
            function Bt(t, n, e) {
              e
                ? (X.set(t, n, !1),
                  b.event.add(t, n, {
                    namespace: !1,
                    handler: function (t) {
                      var i,
                        r,
                        u = X.get(this, n);
                      if (1 & t.isTrigger && this[n]) {
                        if (u.length) (b.event.special[n] || {}).delegateType && t.stopPropagation();
                        else if (
                          ((u = s.call(arguments)),
                          X.set(this, n, u),
                          (i = e(this, n)),
                          this[n](),
                          u !== (r = X.get(this, n)) || i ? X.set(this, n, !1) : (r = {}),
                          u !== r)
                        )
                          return t.stopImmediatePropagation(), t.preventDefault(), r && r.value;
                      } else
                        u.length &&
                          (X.set(this, n, { value: b.event.trigger(b.extend(u[0], b.Event.prototype), u.slice(1), this) }),
                          t.stopImmediatePropagation());
                    }
                  }))
                : void 0 === X.get(t, n) && b.event.add(t, n, bt);
            }
            (b.event = {
              global: {},
              add: function (t, n, e, i, r) {
                var u,
                  o,
                  s,
                  a,
                  c,
                  h,
                  D,
                  l,
                  d,
                  f,
                  p,
                  v = X.get(t);
                if (Y(t))
                  for (
                    e.handler && ((e = (u = e).handler), (r = u.selector)),
                      r && b.find.matchesSelector(ot, r),
                      e.guid || (e.guid = b.guid++),
                      (a = v.events) || (a = v.events = Object.create(null)),
                      (o = v.handle) ||
                        (o = v.handle =
                          function (n) {
                            return void 0 !== b && b.event.triggered !== n.type ? b.event.dispatch.apply(t, arguments) : void 0;
                          }),
                      c = (n = (n || "").match(R) || [""]).length;
                    c--;

                  )
                    (d = p = (s = Et.exec(n[c]) || [])[1]),
                      (f = (s[2] || "").split(".").sort()),
                      d &&
                        ((D = b.event.special[d] || {}),
                        (d = (r ? D.delegateType : D.bindType) || d),
                        (D = b.event.special[d] || {}),
                        (h = b.extend(
                          {
                            type: d,
                            origType: p,
                            data: i,
                            handler: e,
                            guid: e.guid,
                            selector: r,
                            needsContext: r && b.expr.match.needsContext.test(r),
                            namespace: f.join(".")
                          },
                          u
                        )),
                        (l = a[d]) ||
                          (((l = a[d] = []).delegateCount = 0),
                          (D.setup && !1 !== D.setup.call(t, i, f, o)) || (t.addEventListener && t.addEventListener(d, o))),
                        D.add && (D.add.call(t, h), h.handler.guid || (h.handler.guid = e.guid)),
                        r ? l.splice(l.delegateCount++, 0, h) : l.push(h),
                        (b.event.global[d] = !0));
              },
              remove: function (t, n, e, i, r) {
                var u,
                  o,
                  s,
                  a,
                  c,
                  h,
                  D,
                  l,
                  d,
                  f,
                  p,
                  v = X.hasData(t) && X.get(t);
                if (v && (a = v.events)) {
                  for (c = (n = (n || "").match(R) || [""]).length; c--; )
                    if (((d = p = (s = Et.exec(n[c]) || [])[1]), (f = (s[2] || "").split(".").sort()), d)) {
                      for (
                        D = b.event.special[d] || {},
                          l = a[(d = (i ? D.delegateType : D.bindType) || d)] || [],
                          s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                          o = u = l.length;
                        u--;

                      )
                        (h = l[u]),
                          (!r && p !== h.origType) ||
                            (e && e.guid !== h.guid) ||
                            (s && !s.test(h.namespace)) ||
                            (i && i !== h.selector && ("**" !== i || !h.selector)) ||
                            (l.splice(u, 1), h.selector && l.delegateCount--, D.remove && D.remove.call(t, h));
                      o &&
                        !l.length &&
                        ((D.teardown && !1 !== D.teardown.call(t, f, v.handle)) || b.removeEvent(t, d, v.handle), delete a[d]);
                    } else for (d in a) b.event.remove(t, d + n[c], e, i, !0);
                  b.isEmptyObject(a) && X.remove(t, "handle events");
                }
              },
              dispatch: function (t) {
                var n,
                  e,
                  i,
                  r,
                  u,
                  o,
                  s = new Array(arguments.length),
                  a = b.event.fix(t),
                  c = (X.get(this, "events") || Object.create(null))[a.type] || [],
                  h = b.event.special[a.type] || {};
                for (s[0] = a, n = 1; n < arguments.length; n++) s[n] = arguments[n];
                if (((a.delegateTarget = this), !h.preDispatch || !1 !== h.preDispatch.call(this, a))) {
                  for (o = b.event.handlers.call(this, a, c), n = 0; (r = o[n++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem, e = 0; (u = r.handlers[e++]) && !a.isImmediatePropagationStopped(); )
                      (a.rnamespace && !1 !== u.namespace && !a.rnamespace.test(u.namespace)) ||
                        ((a.handleObj = u),
                        (a.data = u.data),
                        void 0 !== (i = ((b.event.special[u.origType] || {}).handle || u.handler).apply(r.elem, s)) &&
                          !1 === (a.result = i) &&
                          (a.preventDefault(), a.stopPropagation()));
                  return h.postDispatch && h.postDispatch.call(this, a), a.result;
                }
              },
              handlers: function (t, n) {
                var e,
                  i,
                  r,
                  u,
                  o,
                  s = [],
                  a = n.delegateCount,
                  c = t.target;
                if (a && c.nodeType && !("click" === t.type && 1 <= t.button))
                  for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                      for (u = [], o = {}, e = 0; e < a; e++)
                        void 0 === o[(r = (i = n[e]).selector + " ")] &&
                          (o[r] = i.needsContext ? -1 < b(r, this).index(c) : b.find(r, this, null, [c]).length),
                          o[r] && u.push(i);
                      u.length && s.push({ elem: c, handlers: u });
                    }
                return (c = this), a < n.length && s.push({ elem: c, handlers: n.slice(a) }), s;
              },
              addProp: function (t, n) {
                Object.defineProperty(b.Event.prototype, t, {
                  enumerable: !0,
                  configurable: !0,
                  get: g(n)
                    ? function () {
                        if (this.originalEvent) return n(this.originalEvent);
                      }
                    : function () {
                        if (this.originalEvent) return this.originalEvent[t];
                      },
                  set: function (n) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: n });
                  }
                });
              },
              fix: function (t) {
                return t[b.expando] ? t : new b.Event(t);
              },
              special: {
                load: { noBubble: !0 },
                click: {
                  setup: function (t) {
                    var n = this || t;
                    return pt.test(n.type) && n.click && k(n, "input") && Bt(n, "click", bt), !1;
                  },
                  trigger: function (t) {
                    var n = this || t;
                    return pt.test(n.type) && n.click && k(n, "input") && Bt(n, "click"), !0;
                  },
                  v: function (t) {
                    var n = t.target;
                    return (pt.test(n.type) && n.click && k(n, "input") && X.get(n, "click")) || k(n, "a");
                  }
                },
                beforeunload: {
                  postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                  }
                }
              }
            }),
              (b.removeEvent = function (t, n, e) {
                t.removeEventListener && t.removeEventListener(n, e);
              }),
              (b.Event = function (t, n) {
                if (!(this instanceof b.Event)) return new b.Event(t, n);
                t && t.type
                  ? ((this.originalEvent = t),
                    (this.type = t.type),
                    (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? bt : jt),
                    (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                    (this.currentTarget = t.currentTarget),
                    (this.relatedTarget = t.relatedTarget))
                  : (this.type = t),
                  n && b.extend(this, n),
                  (this.timeStamp = (t && t.timeStamp) || Date.now()),
                  (this[b.expando] = !0);
              }),
              (b.Event.prototype = {
                constructor: b.Event,
                isDefaultPrevented: jt,
                isPropagationStopped: jt,
                isImmediatePropagationStopped: jt,
                isSimulated: !1,
                preventDefault: function () {
                  var t = this.originalEvent;
                  (this.isDefaultPrevented = bt), t && !this.isSimulated && t.preventDefault();
                },
                stopPropagation: function () {
                  var t = this.originalEvent;
                  (this.isPropagationStopped = bt), t && !this.isSimulated && t.stopPropagation();
                },
                stopImmediatePropagation: function () {
                  var t = this.originalEvent;
                  (this.isImmediatePropagationStopped = bt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
                }
              }),
              b.each(
                {
                  altKey: !0,
                  bubbles: !0,
                  cancelable: !0,
                  changedTouches: !0,
                  ctrlKey: !0,
                  detail: !0,
                  eventPhase: !0,
                  metaKey: !0,
                  pageX: !0,
                  pageY: !0,
                  shiftKey: !0,
                  view: !0,
                  char: !0,
                  code: !0,
                  charCode: !0,
                  key: !0,
                  keyCode: !0,
                  button: !0,
                  buttons: !0,
                  clientX: !0,
                  clientY: !0,
                  offsetX: !0,
                  offsetY: !0,
                  pointerId: !0,
                  pointerType: !0,
                  screenX: !0,
                  screenY: !0,
                  targetTouches: !0,
                  toElement: !0,
                  touches: !0,
                  which: !0
                },
                b.event.addProp
              ),
              b.each({ focus: "focusin", blur: "focusout" }, function (t, n) {
                b.event.special[t] = {
                  setup: function () {
                    return Bt(this, t, _t), !1;
                  },
                  trigger: function () {
                    return Bt(this, t), !0;
                  },
                  v: function () {
                    return !0;
                  },
                  delegateType: n
                };
              }),
              b.each(
                { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
                function (t, n) {
                  b.event.special[t] = {
                    delegateType: n,
                    bindType: n,
                    handle: function (t) {
                      var e,
                        i = t.relatedTarget,
                        r = t.handleObj;
                      return (
                        (i && (i === this || b.contains(this, i))) ||
                          ((t.type = r.origType), (e = r.handler.apply(this, arguments)), (t.type = n)),
                        e
                      );
                    }
                  };
                }
              ),
              b.fn.extend({
                on: function (t, n, e, i) {
                  return xt(this, t, n, e, i);
                },
                one: function (t, n, e, i) {
                  return xt(this, t, n, e, i, 1);
                },
                off: function (t, n, e) {
                  var i, r;
                  if (t && t.preventDefault && t.handleObj)
                    return (
                      (i = t.handleObj),
                      b(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                      this
                    );
                  if ("object" == typeof t) {
                    for (r in t) this.off(r, n, t[r]);
                    return this;
                  }
                  return (
                    (!1 !== n && "function" != typeof n) || ((e = n), (n = void 0)),
                    !1 === e && (e = jt),
                    this.each(function () {
                      b.event.remove(this, t, e, n);
                    })
                  );
                }
              });
            var At = /<script|<style|<link/i,
              kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
              Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function It(t, n) {
              return (k(t, "table") && k(11 !== n.nodeType ? n : n.firstChild, "tr") && b(t).children("tbody")[0]) || t;
            }
            function St(t) {
              return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
            }
            function Tt(t) {
              return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
            }
            function Mt(t, n) {
              var e, i, r, u, o, s;
              if (1 === n.nodeType) {
                if (X.hasData(t) && (s = X.get(t).events))
                  for (r in (X.remove(n, "handle events"), s)) for (e = 0, i = s[r].length; e < i; e++) b.event.add(n, r, s[r][e]);
                Z.hasData(t) && ((u = Z.access(t)), (o = b.extend({}, u)), Z.set(n, o));
              }
            }
            function $t(t, n, e, i) {
              n = a(n);
              var r,
                u,
                o,
                s,
                c,
                h,
                D = 0,
                l = t.length,
                d = l - 1,
                f = n[0],
                p = g(f);
              if (p || (1 < l && "string" == typeof f && !v.checkClone && kt.test(f)))
                return t.each(function (r) {
                  var u = t.eq(r);
                  p && (n[0] = f.call(this, r, u.html())), $t(u, n, e, i);
                });
              if (l && ((u = (r = wt(n, t[0].ownerDocument, !1, t, i)).firstChild), 1 === r.childNodes.length && (r = u), u || i)) {
                for (s = (o = b.map(Ft(r, "script"), St)).length; D < l; D++)
                  (c = r), D !== d && ((c = b.clone(c, !0, !0)), s && b.merge(o, Ft(c, "script"))), e.call(t[D], c, D);
                if (s)
                  for (h = o[o.length - 1].ownerDocument, b.map(o, Tt), D = 0; D < s; D++)
                    (c = o[D]),
                      gt.test(c.type || "") &&
                        !X.access(c, "globalEval") &&
                        b.contains(h, c) &&
                        (c.src && "module" !== (c.type || "").toLowerCase()
                          ? b.g && !c.noModule && b.g(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, h)
                          : C(c.textContent.replace(Qt, ""), c, h));
              }
              return t;
            }
            function Pt(t, n, e) {
              for (var i, r = n ? b.filter(n, t) : t, u = 0; null != (i = r[u]); u++)
                e || 1 !== i.nodeType || b.cleanData(Ft(i)),
                  i.parentNode && (e && st(i) && mt(Ft(i, "script")), i.parentNode.removeChild(i));
              return t;
            }
            b.extend({
              htmlPrefilter: function (t) {
                return t;
              },
              clone: function (t, n, e) {
                var i,
                  r,
                  u,
                  o,
                  s,
                  a,
                  c,
                  h = t.cloneNode(!0),
                  D = st(t);
                if (!(v.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || b.isXMLDoc(t)))
                  for (o = Ft(h), i = 0, r = (u = Ft(t)).length; i < r; i++)
                    (s = u[i]),
                      "input" === (c = (a = o[i]).nodeName.toLowerCase()) && pt.test(s.type)
                        ? (a.checked = s.checked)
                        : ("input" !== c && "textarea" !== c) || (a.defaultValue = s.defaultValue);
                if (n)
                  if (e) for (u = u || Ft(t), o = o || Ft(h), i = 0, r = u.length; i < r; i++) Mt(u[i], o[i]);
                  else Mt(t, h);
                return 0 < (o = Ft(h, "script")).length && mt(o, !D && Ft(t, "script")), h;
              },
              cleanData: function (t) {
                for (var n, e, i, r = b.event.special, u = 0; void 0 !== (e = t[u]); u++)
                  if (Y(e)) {
                    if ((n = e[X.expando])) {
                      if (n.events) for (i in n.events) r[i] ? b.event.remove(e, i) : b.removeEvent(e, i, n.handle);
                      e[X.expando] = void 0;
                    }
                    e[Z.expando] && (e[Z.expando] = void 0);
                  }
              }
            }),
              b.fn.extend({
                detach: function (t) {
                  return Pt(this, t, !0);
                },
                remove: function (t) {
                  return Pt(this, t);
                },
                text: function (t) {
                  return H(
                    this,
                    function (t) {
                      return void 0 === t
                        ? b.text(this)
                        : this.empty().each(function () {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                          });
                    },
                    null,
                    t,
                    arguments.length
                  );
                },
                append: function () {
                  return $t(this, arguments, function (t) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || It(this, t).appendChild(t);
                  });
                },
                prepend: function () {
                  return $t(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                      var n = It(this, t);
                      n.insertBefore(t, n.firstChild);
                    }
                  });
                },
                before: function () {
                  return $t(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                  });
                },
                after: function () {
                  return $t(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                  });
                },
                empty: function () {
                  for (var t, n = 0; null != (t = this[n]); n++) 1 === t.nodeType && (b.cleanData(Ft(t, !1)), (t.textContent = ""));
                  return this;
                },
                clone: function (t, n) {
                  return (
                    (t = null != t && t),
                    (n = null == n ? t : n),
                    this.map(function () {
                      return b.clone(this, t, n);
                    })
                  );
                },
                html: function (t) {
                  return H(
                    this,
                    function (t) {
                      var n = this[0] || {},
                        e = 0,
                        i = this.length;
                      if (void 0 === t && 1 === n.nodeType) return n.innerHTML;
                      if ("string" == typeof t && !At.test(t) && !yt[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = b.htmlPrefilter(t);
                        try {
                          for (; e < i; e++) 1 === (n = this[e] || {}).nodeType && (b.cleanData(Ft(n, !1)), (n.innerHTML = t));
                          n = 0;
                        } catch (t) {}
                      }
                      n && this.empty().append(t);
                    },
                    null,
                    t,
                    arguments.length
                  );
                },
                replaceWith: function () {
                  var t = [];
                  return $t(
                    this,
                    arguments,
                    function (n) {
                      var e = this.parentNode;
                      b.inArray(this, t) < 0 && (b.cleanData(Ft(this)), e && e.replaceChild(n, this));
                    },
                    t
                  );
                }
              }),
              b.each(
                { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
                function (t, n) {
                  b.fn[t] = function (t) {
                    for (var e, i = [], r = b(t), u = r.length - 1, o = 0; o <= u; o++)
                      (e = o === u ? this : this.clone(!0)), b(r[o])[n](e), c.apply(i, e.get());
                    return this.pushStack(i);
                  };
                }
              );
            var Rt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
              Ot = function (t) {
                var n = t.ownerDocument.defaultView;
                return (n && n.opener) || (n = i), n.getComputedStyle(t);
              },
              Lt = function (t, n, e) {
                var i,
                  r,
                  u = {};
                for (r in n) (u[r] = t.style[r]), (t.style[r] = n[r]);
                for (r in ((i = e.call(t)), n)) t.style[r] = u[r];
                return i;
              },
              Ut = new RegExp(ut.join("|"), "i");
            function Gt(t, n, e) {
              var i,
                r,
                u,
                o,
                s = t.style;
              return (
                (e = e || Ot(t)) &&
                  ("" !== (o = e.getPropertyValue(n) || e[n]) || st(t) || (o = b.style(t, n)),
                  !v.pixelBoxStyles() &&
                    Rt.test(o) &&
                    Ut.test(n) &&
                    ((i = s.width),
                    (r = s.minWidth),
                    (u = s.maxWidth),
                    (s.minWidth = s.maxWidth = s.width = o),
                    (o = e.width),
                    (s.width = i),
                    (s.minWidth = r),
                    (s.maxWidth = u))),
                void 0 !== o ? o + "" : o
              );
            }
            function Nt(t, n) {
              return {
                get: function () {
                  if (!t()) return (this.get = n).apply(this, arguments);
                  delete this.get;
                }
              };
            }
            !(function () {
              function t() {
                if (h) {
                  (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (h.style.cssText =
                      "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ot.appendChild(c).appendChild(h);
                  var t = i.getComputedStyle(h);
                  (e = "1%" !== t.top),
                    (a = 12 === n(t.marginLeft)),
                    (h.style.right = "60%"),
                    (o = 36 === n(t.right)),
                    (r = 36 === n(t.width)),
                    (h.style.position = "absolute"),
                    (u = 12 === n(h.offsetWidth / 3)),
                    ot.removeChild(c),
                    (h = null);
                }
              }
              function n(t) {
                return Math.round(parseFloat(t));
              }
              var e,
                r,
                u,
                o,
                s,
                a,
                c = F.createElement("div"),
                h = F.createElement("div");
              h.style &&
                ((h.style.backgroundClip = "content-box"),
                (h.cloneNode(!0).style.backgroundClip = ""),
                (v.clearCloneStyle = "content-box" === h.style.backgroundClip),
                b.extend(v, {
                  boxSizingReliable: function () {
                    return t(), r;
                  },
                  pixelBoxStyles: function () {
                    return t(), o;
                  },
                  pixelPosition: function () {
                    return t(), e;
                  },
                  reliableMarginLeft: function () {
                    return t(), a;
                  },
                  scrollboxSize: function () {
                    return t(), u;
                  },
                  reliableTrDimensions: function () {
                    var t, n, e, r;
                    return (
                      null == s &&
                        ((t = F.createElement("table")),
                        (n = F.createElement("tr")),
                        (e = F.createElement("div")),
                        (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                        (n.style.cssText = "border:1px solid"),
                        (n.style.height = "1px"),
                        (e.style.height = "9px"),
                        (e.style.display = "block"),
                        ot.appendChild(t).appendChild(n).appendChild(e),
                        (r = i.getComputedStyle(n)),
                        (s =
                          parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight),
                        ot.removeChild(t)),
                      s
                    );
                  }
                }));
            })();
            var Vt = ["Webkit", "Moz", "ms"],
              Ht = F.createElement("div").style,
              Wt = {};
            function zt(t) {
              return (
                b.cssProps[t] ||
                Wt[t] ||
                (t in Ht
                  ? t
                  : (Wt[t] =
                      (function (t) {
                        for (var n = t[0].toUpperCase() + t.slice(1), e = Vt.length; e--; ) if ((t = Vt[e] + n) in Ht) return t;
                      })(t) || t))
              );
            }
            var qt = /^(none|table(?!-c[ea]).+)/,
              Kt = /^--/,
              Yt = { position: "absolute", visibility: "hidden", display: "block" },
              Jt = { letterSpacing: "0", fontWeight: "400" };
            function Xt(t, n, e) {
              var i = rt.exec(n);
              return i ? Math.max(0, i[2] - (e || 0)) + (i[3] || "px") : n;
            }
            function Zt(t, n, e, i, r, u) {
              var o = "width" === n ? 1 : 0,
                s = 0,
                a = 0;
              if (e === (i ? "border" : "content")) return 0;
              for (; o < 4; o += 2)
                "margin" === e && (a += b.css(t, e + ut[o], !0, r)),
                  i
                    ? ("content" === e && (a -= b.css(t, "padding" + ut[o], !0, r)),
                      "margin" !== e && (a -= b.css(t, "border" + ut[o] + "Width", !0, r)))
                    : ((a += b.css(t, "padding" + ut[o], !0, r)),
                      "padding" !== e
                        ? (a += b.css(t, "border" + ut[o] + "Width", !0, r))
                        : (s += b.css(t, "border" + ut[o] + "Width", !0, r)));
              return !i && 0 <= u && (a += Math.max(0, Math.ceil(t["offset" + n[0].toUpperCase() + n.slice(1)] - u - a - s - 0.5)) || 0), a;
            }
            function tn(t, n, e) {
              var i = Ot(t),
                r = (!v.boxSizingReliable() || e) && "border-box" === b.css(t, "boxSizing", !1, i),
                u = r,
                o = Gt(t, n, i),
                s = "offset" + n[0].toUpperCase() + n.slice(1);
              if (Rt.test(o)) {
                if (!e) return o;
                o = "auto";
              }
              return (
                ((!v.boxSizingReliable() && r) ||
                  (!v.reliableTrDimensions() && k(t, "tr")) ||
                  "auto" === o ||
                  (!parseFloat(o) && "inline" === b.css(t, "display", !1, i))) &&
                  t.getClientRects().length &&
                  ((r = "border-box" === b.css(t, "boxSizing", !1, i)), (u = s in t) && (o = t[s])),
                (o = parseFloat(o) || 0) + Zt(t, n, e || (r ? "border" : "content"), u, i, o) + "px"
              );
            }
            function nn(t, n, e, i, r) {
              return new nn.prototype.init(t, n, e, i, r);
            }
            b.extend({
              cssHooks: {
                opacity: {
                  get: function (t, n) {
                    if (n) {
                      var e = Gt(t, "opacity");
                      return "" === e ? "1" : e;
                    }
                  }
                }
              },
              cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
              },
              cssProps: {},
              style: function (t, n, e, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                  var r,
                    u,
                    o,
                    s = K(n),
                    a = Kt.test(n),
                    c = t.style;
                  if ((a || (n = zt(s)), (o = b.cssHooks[n] || b.cssHooks[s]), void 0 === e))
                    return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : c[n];
                  "string" == (u = typeof e) && (r = rt.exec(e)) && r[1] && ((e = ht(t, n, r)), (u = "number")),
                    null != e &&
                      e == e &&
                      ("number" !== u || a || (e += (r && r[3]) || (b.cssNumber[s] ? "" : "px")),
                      v.clearCloneStyle || "" !== e || 0 !== n.indexOf("background") || (c[n] = "inherit"),
                      (o && "set" in o && void 0 === (e = o.set(t, e, i))) || (a ? c.setProperty(n, e) : (c[n] = e)));
                }
              },
              css: function (t, n, e, i) {
                var r,
                  u,
                  o,
                  s = K(n);
                return (
                  Kt.test(n) || (n = zt(s)),
                  (o = b.cssHooks[n] || b.cssHooks[s]) && "get" in o && (r = o.get(t, !0, e)),
                  void 0 === r && (r = Gt(t, n, i)),
                  "normal" === r && n in Jt && (r = Jt[n]),
                  "" === e || e ? ((u = parseFloat(r)), !0 === e || isFinite(u) ? u || 0 : r) : r
                );
              }
            }),
              b.each(["height", "width"], function (t, n) {
                b.cssHooks[n] = {
                  get: function (t, e, i) {
                    if (e)
                      return !qt.test(b.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                        ? tn(t, n, i)
                        : Lt(t, Yt, function () {
                            return tn(t, n, i);
                          });
                  },
                  set: function (t, e, i) {
                    var r,
                      u = Ot(t),
                      o = !v.scrollboxSize() && "absolute" === u.position,
                      s = (o || i) && "border-box" === b.css(t, "boxSizing", !1, u),
                      a = i ? Zt(t, n, i, s, u) : 0;
                    return (
                      s &&
                        o &&
                        (a -= Math.ceil(
                          t["offset" + n[0].toUpperCase() + n.slice(1)] - parseFloat(u[n]) - Zt(t, n, "border", !1, u) - 0.5
                        )),
                      a && (r = rt.exec(e)) && "px" !== (r[3] || "px") && ((t.style[n] = e), (e = b.css(t, n))),
                      Xt(0, e, a)
                    );
                  }
                };
              }),
              (b.cssHooks.marginLeft = Nt(v.reliableMarginLeft, function (t, n) {
                if (n)
                  return (
                    (parseFloat(Gt(t, "marginLeft")) ||
                      t.getBoundingClientRect().left -
                        Lt(t, { marginLeft: 0 }, function () {
                          return t.getBoundingClientRect().left;
                        })) + "px"
                  );
              })),
              b.each({ margin: "", padding: "", border: "Width" }, function (t, n) {
                (b.cssHooks[t + n] = {
                  expand: function (e) {
                    for (var i = 0, r = {}, u = "string" == typeof e ? e.split(" ") : [e]; i < 4; i++)
                      r[t + ut[i] + n] = u[i] || u[i - 2] || u[0];
                    return r;
                  }
                }),
                  "margin" !== t && (b.cssHooks[t + n].set = Xt);
              }),
              b.fn.extend({
                css: function (t, n) {
                  return H(
                    this,
                    function (t, n, e) {
                      var i,
                        r,
                        u = {},
                        o = 0;
                      if (Array.isArray(n)) {
                        for (i = Ot(t), r = n.length; o < r; o++) u[n[o]] = b.css(t, n[o], !1, i);
                        return u;
                      }
                      return void 0 !== e ? b.style(t, n, e) : b.css(t, n);
                    },
                    t,
                    n,
                    1 < arguments.length
                  );
                }
              }),
              (((b.Tween = nn).prototype = {
                constructor: nn,
                init: function (t, n, e, i, r, u) {
                  (this.elem = t),
                    (this.prop = e),
                    (this.easing = r || b.easing.v),
                    (this.options = n),
                    (this.start = this.now = this.cur()),
                    (this.end = i),
                    (this.unit = u || (b.cssNumber[e] ? "" : "px"));
                },
                cur: function () {
                  var t = nn.propHooks[this.prop];
                  return t && t.get ? t.get(this) : nn.propHooks.v.get(this);
                },
                run: function (t) {
                  var n,
                    e = nn.propHooks[this.prop];
                  return (
                    this.options.duration
                      ? (this.pos = n = b.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration))
                      : (this.pos = n = t),
                    (this.now = (this.end - this.start) * n + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    e && e.set ? e.set(this) : nn.propHooks.v.set(this),
                    this
                  );
                }
              }).init.prototype = nn.prototype),
              ((nn.propHooks = {
                v: {
                  get: function (t) {
                    var n;
                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                      ? t.elem[t.prop]
                      : (n = b.css(t.elem, t.prop, "")) && "auto" !== n
                      ? n
                      : 0;
                  },
                  set: function (t) {
                    b.fx.step[t.prop]
                      ? b.fx.step[t.prop](t)
                      : 1 !== t.elem.nodeType || (!b.cssHooks[t.prop] && null == t.elem.style[zt(t.prop)])
                      ? (t.elem[t.prop] = t.now)
                      : b.style(t.elem, t.prop, t.now + t.unit);
                  }
                }
              }).scrollTop = nn.propHooks.scrollLeft =
                {
                  set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                  }
                }),
              (b.easing = {
                linear: function (t) {
                  return t;
                },
                swing: function (t) {
                  return 0.5 - Math.cos(t * Math.PI) / 2;
                },
                v: "swing"
              }),
              (b.fx = nn.prototype.init),
              (b.fx.step = {});
            var en,
              rn,
              un,
              on,
              sn = /^(?:toggle|show|hide)$/,
              an = /queueHooks$/;
            function cn() {
              rn &&
                (!1 === F.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(cn) : i.setTimeout(cn, b.fx.interval), b.fx.tick());
            }
            function hn() {
              return (
                i.setTimeout(function () {
                  en = void 0;
                }),
                (en = Date.now())
              );
            }
            function Dn(t, n) {
              var e,
                i = 0,
                r = { height: t };
              for (n = n ? 1 : 0; i < 4; i += 2 - n) r["margin" + (e = ut[i])] = r["padding" + e] = t;
              return n && (r.opacity = r.width = t), r;
            }
            function ln(t, n, e) {
              for (var i, r = (dn.tweeners[n] || []).concat(dn.tweeners["*"]), u = 0, o = r.length; u < o; u++)
                if ((i = r[u].call(e, n, t))) return i;
            }
            function dn(t, n, e) {
              var i,
                r,
                u = 0,
                o = dn.prefilters.length,
                s = b.Deferred().always(function () {
                  delete a.elem;
                }),
                a = function () {
                  if (r) return !1;
                  for (
                    var n = en || hn(),
                      e = Math.max(0, c.startTime + c.duration - n),
                      i = 1 - (e / c.duration || 0),
                      u = 0,
                      o = c.tweens.length;
                    u < o;
                    u++
                  )
                    c.tweens[u].run(i);
                  return s.notifyWith(t, [c, i, e]), i < 1 && o ? e : (o || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1);
                },
                c = s.promise({
                  elem: t,
                  props: b.extend({}, n),
                  opts: b.extend(!0, { specialEasing: {}, easing: b.easing.v }, e),
                  originalProperties: n,
                  originalOptions: e,
                  startTime: en || hn(),
                  duration: e.duration,
                  tweens: [],
                  createTween: function (n, e) {
                    var i = b.Tween(t, c.opts, n, e, c.opts.specialEasing[n] || c.opts.easing);
                    return c.tweens.push(i), i;
                  },
                  stop: function (n) {
                    var e = 0,
                      i = n ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; e < i; e++) c.tweens[e].run(1);
                    return n ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, n])) : s.rejectWith(t, [c, n]), this;
                  }
                }),
                h = c.props;
              for (
                (function (t, n) {
                  var e, i, r, u, o;
                  for (e in t)
                    if (
                      ((r = n[(i = K(e))]),
                      (u = t[e]),
                      Array.isArray(u) && ((r = u[1]), (u = t[e] = u[0])),
                      e !== i && ((t[i] = u), delete t[e]),
                      (o = b.cssHooks[i]) && ("expand" in o))
                    )
                      for (e in ((u = o.expand(u)), delete t[i], u)) (e in t) || ((t[e] = u[e]), (n[e] = r));
                    else n[i] = r;
                })(h, c.opts.specialEasing);
                u < o;
                u++
              )
                if ((i = dn.prefilters[u].call(c, t, h, c.opts))) return g(i.stop) && (b.p(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
              return (
                b.map(h, ln, c),
                g(c.opts.start) && c.opts.start.call(t, c),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                b.fx.timer(b.extend(a, { elem: t, anim: c, queue: c.opts.queue })),
                c
              );
            }
            (b.Animation = b.extend(dn, {
              tweeners: {
                "*": [
                  function (t, n) {
                    var e = this.createTween(t, n);
                    return ht(e.elem, t, rt.exec(n), e), e;
                  }
                ]
              },
              tweener: function (t, n) {
                g(t) ? ((n = t), (t = ["*"])) : (t = t.match(R));
                for (var e, i = 0, r = t.length; i < r; i++) (e = t[i]), (dn.tweeners[e] = dn.tweeners[e] || []), dn.tweeners[e].unshift(n);
              },
              prefilters: [
                function (t, n, e) {
                  var i,
                    r,
                    u,
                    o,
                    s,
                    a,
                    c,
                    h,
                    D = "width" in n || "height" in n,
                    l = this,
                    d = {},
                    f = t.style,
                    p = t.nodeType && ct(t),
                    v = X.get(t, "fxshow");
                  for (i in (e.queue ||
                    (null == (o = b.p(t, "fx")).unqueued &&
                      ((o.unqueued = 0),
                      (s = o.empty.fire),
                      (o.empty.fire = function () {
                        o.unqueued || s();
                      })),
                    o.unqueued++,
                    l.always(function () {
                      l.always(function () {
                        o.unqueued--, b.queue(t, "fx").length || o.empty.fire();
                      });
                    })),
                  n))
                    if (((r = n[i]), sn.test(r))) {
                      if ((delete n[i], (u = u || "toggle" === r), r === (p ? "hide" : "show"))) {
                        if ("show" !== r || !v || void 0 === v[i]) continue;
                        p = !0;
                      }
                      d[i] = (v && v[i]) || b.style(t, i);
                    }
                  if ((a = !b.isEmptyObject(n)) || !b.isEmptyObject(d))
                    for (i in (D &&
                      1 === t.nodeType &&
                      ((e.overflow = [f.overflow, f.overflowX, f.overflowY]),
                      null == (c = v && v.display) && (c = X.get(t, "display")),
                      "none" === (h = b.css(t, "display")) &&
                        (c ? (h = c) : (lt([t], !0), (c = t.style.display || c), (h = b.css(t, "display")), lt([t]))),
                      ("inline" === h || ("inline-block" === h && null != c)) &&
                        "none" === b.css(t, "float") &&
                        (a ||
                          (l.done(function () {
                            f.display = c;
                          }),
                          null == c && ((h = f.display), (c = "none" === h ? "" : h))),
                        (f.display = "inline-block"))),
                    e.overflow &&
                      ((f.overflow = "hidden"),
                      l.always(function () {
                        (f.overflow = e.overflow[0]), (f.overflowX = e.overflow[1]), (f.overflowY = e.overflow[2]);
                      })),
                    (a = !1),
                    d))
                      a ||
                        (v ? "hidden" in v && (p = v.hidden) : (v = X.access(t, "fxshow", { display: c })),
                        u && (v.hidden = !p),
                        p && lt([t], !0),
                        l.done(function () {
                          for (i in (p || lt([t]), X.remove(t, "fxshow"), d)) b.style(t, i, d[i]);
                        })),
                        (a = ln(p ? v[i] : 0, i, l)),
                        i in v || ((v[i] = a.start), p && ((a.end = a.start), (a.start = 0)));
                }
              ],
              prefilter: function (t, n) {
                n ? dn.prefilters.unshift(t) : dn.prefilters.push(t);
              }
            })),
              (b.speed = function (t, n, e) {
                var i =
                  t && "object" == typeof t
                    ? b.extend({}, t)
                    : { complete: e || (!e && n) || (g(t) && t), duration: t, easing: (e && n) || (n && !g(n) && n) };
                return (
                  b.fx.off
                    ? (i.duration = 0)
                    : "number" != typeof i.duration &&
                      (i.duration in b.fx.speeds ? (i.duration = b.fx.speeds[i.duration]) : (i.duration = b.fx.speeds.v)),
                  (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                  (i.old = i.complete),
                  (i.complete = function () {
                    g(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue);
                  }),
                  i
                );
              }),
              b.fn.extend({
                fadeTo: function (t, n, e, i) {
                  return this.filter(ct).css("opacity", 0).show().end().animate({ opacity: n }, t, e, i);
                },
                animate: function (t, n, e, i) {
                  var r = b.isEmptyObject(t),
                    u = b.speed(n, e, i),
                    o = function () {
                      var n = dn(this, b.extend({}, t), u);
                      (r || X.get(this, "finish")) && n.stop(!0);
                    };
                  return (o.finish = o), r || !1 === u.queue ? this.each(o) : this.queue(u.queue, o);
                },
                stop: function (t, n, e) {
                  var i = function (t) {
                    var n = t.stop;
                    delete t.stop, n(e);
                  };
                  return (
                    "string" != typeof t && ((e = n), (n = t), (t = void 0)),
                    n && this.queue(t || "fx", []),
                    this.each(function () {
                      var n = !0,
                        r = null != t && t + "queueHooks",
                        u = b.timers,
                        o = X.get(this);
                      if (r) o[r] && o[r].stop && i(o[r]);
                      else for (r in o) o[r] && o[r].stop && an.test(r) && i(o[r]);
                      for (r = u.length; r--; )
                        u[r].elem !== this || (null != t && u[r].queue !== t) || (u[r].anim.stop(e), (n = !1), u.splice(r, 1));
                      (!n && e) || b.dequeue(this, t);
                    })
                  );
                },
                finish: function (t) {
                  return (
                    !1 !== t && (t = t || "fx"),
                    this.each(function () {
                      var n,
                        e = X.get(this),
                        i = e[t + "queue"],
                        r = e[t + "queueHooks"],
                        u = b.timers,
                        o = i ? i.length : 0;
                      for (e.finish = !0, b.queue(this, t, []), r && r.stop && r.stop.call(this, !0), n = u.length; n--; )
                        u[n].elem === this && u[n].queue === t && (u[n].anim.stop(!0), u.splice(n, 1));
                      for (n = 0; n < o; n++) i[n] && i[n].finish && i[n].finish.call(this);
                      delete e.finish;
                    })
                  );
                }
              }),
              b.each(["toggle", "show", "hide"], function (t, n) {
                var e = b.fn[n];
                b.fn[n] = function (t, i, r) {
                  return null == t || "boolean" == typeof t ? e.apply(this, arguments) : this.animate(Dn(n, !0), t, i, r);
                };
              }),
              b.each(
                {
                  slideDown: Dn("show"),
                  slideUp: Dn("hide"),
                  slideToggle: Dn("toggle"),
                  fadeIn: { opacity: "show" },
                  fadeOut: { opacity: "hide" },
                  fadeToggle: { opacity: "toggle" }
                },
                function (t, n) {
                  b.fn[t] = function (t, e, i) {
                    return this.animate(n, t, e, i);
                  };
                }
              ),
              (b.timers = []),
              (b.fx.tick = function () {
                var t,
                  n = 0,
                  e = b.timers;
                for (en = Date.now(); n < e.length; n++) (t = e[n])() || e[n] !== t || e.splice(n--, 1);
                e.length || b.fx.stop(), (en = void 0);
              }),
              (b.fx.timer = function (t) {
                b.timers.push(t), b.fx.start();
              }),
              (b.fx.interval = 13),
              (b.fx.start = function () {
                rn || ((rn = !0), cn());
              }),
              (b.fx.stop = function () {
                rn = null;
              }),
              (b.fx.speeds = { slow: 600, fast: 200, v: 400 }),
              (b.fn.delay = function (t, n) {
                return (
                  (t = (b.fx && b.fx.speeds[t]) || t),
                  (n = n || "fx"),
                  this.queue(n, function (n, e) {
                    var r = i.setTimeout(n, t);
                    e.stop = function () {
                      i.clearTimeout(r);
                    };
                  })
                );
              }),
              (un = F.createElement("input")),
              (on = F.createElement("select").appendChild(F.createElement("option"))),
              (un.type = "checkbox"),
              (v.checkOn = "" !== un.value),
              (v.optSelected = on.selected),
              ((un = F.createElement("input")).value = "t"),
              (un.type = "radio"),
              (v.radioValue = "t" === un.value);
            var fn,
              pn = b.expr.attrHandle;
            b.fn.extend({
              attr: function (t, n) {
                return H(this, b.attr, t, n, 1 < arguments.length);
              },
              removeAttr: function (t) {
                return this.each(function () {
                  b.removeAttr(this, t);
                });
              }
            }),
              b.extend({
                attr: function (t, n, e) {
                  var i,
                    r,
                    u = t.nodeType;
                  if (3 !== u && 8 !== u && 2 !== u)
                    return void 0 === t.getAttribute
                      ? b.prop(t, n, e)
                      : ((1 === u && b.isXMLDoc(t)) || (r = b.attrHooks[n.toLowerCase()] || (b.expr.match.bool.test(n) ? fn : void 0)),
                        void 0 !== e
                          ? null === e
                            ? void b.removeAttr(t, n)
                            : r && "set" in r && void 0 !== (i = r.set(t, e, n))
                            ? i
                            : (t.setAttribute(n, e + ""), e)
                          : r && "get" in r && null !== (i = r.get(t, n))
                          ? i
                          : null == (i = b.find.attr(t, n))
                          ? void 0
                          : i);
                },
                attrHooks: {
                  type: {
                    set: function (t, n) {
                      if (!v.radioValue && "radio" === n && k(t, "input")) {
                        var e = t.value;
                        return t.setAttribute("type", n), e && (t.value = e), n;
                      }
                    }
                  }
                },
                removeAttr: function (t, n) {
                  var e,
                    i = 0,
                    r = n && n.match(R);
                  if (r && 1 === t.nodeType) for (; (e = r[i++]); ) t.removeAttribute(e);
                }
              }),
              (fn = {
                set: function (t, n, e) {
                  return !1 === n ? b.removeAttr(t, e) : t.setAttribute(e, e), e;
                }
              }),
              b.each(b.expr.match.bool.source.match(/\w+/g), function (t, n) {
                var e = pn[n] || b.find.attr;
                pn[n] = function (t, n, i) {
                  var r,
                    u,
                    o = n.toLowerCase();
                  return i || ((u = pn[o]), (pn[o] = r), (r = null != e(t, n, i) ? o : null), (pn[o] = u)), r;
                };
              });
            var vn = /^(?:input|select|textarea|button)$/i,
              gn = /^(?:a|area)$/i;
            function yn(t) {
              return (t.match(R) || []).join(" ");
            }
            function Fn(t) {
              return (t.getAttribute && t.getAttribute("class")) || "";
            }
            function mn(t) {
              return Array.isArray(t) ? t : ("string" == typeof t && t.match(R)) || [];
            }
            b.fn.extend({
              prop: function (t, n) {
                return H(this, b.prop, t, n, 1 < arguments.length);
              },
              removeProp: function (t) {
                return this.each(function () {
                  delete this[b.propFix[t] || t];
                });
              }
            }),
              b.extend({
                prop: function (t, n, e) {
                  var i,
                    r,
                    u = t.nodeType;
                  if (3 !== u && 8 !== u && 2 !== u)
                    return (
                      (1 === u && b.isXMLDoc(t)) || ((n = b.propFix[n] || n), (r = b.propHooks[n])),
                      void 0 !== e
                        ? r && "set" in r && void 0 !== (i = r.set(t, e, n))
                          ? i
                          : (t[n] = e)
                        : r && "get" in r && null !== (i = r.get(t, n))
                        ? i
                        : t[n]
                    );
                },
                propHooks: {
                  tabIndex: {
                    get: function (t) {
                      var n = b.find.attr(t, "tabindex");
                      return n ? parseInt(n, 10) : vn.test(t.nodeName) || (gn.test(t.nodeName) && t.href) ? 0 : -1;
                    }
                  }
                },
                propFix: { for: "htmlFor", class: "className" }
              }),
              v.optSelected ||
                (b.propHooks.selected = {
                  get: function (t) {
                    var n = t.parentNode;
                    return n && n.parentNode && n.parentNode.selectedIndex, null;
                  },
                  set: function (t) {
                    var n = t.parentNode;
                    n && (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex);
                  }
                }),
              b.each(
                [
                  "tabIndex",
                  "readOnly",
                  "maxLength",
                  "cellSpacing",
                  "cellPadding",
                  "rowSpan",
                  "colSpan",
                  "useMap",
                  "frameBorder",
                  "contentEditable"
                ],
                function () {
                  b.propFix[this.toLowerCase()] = this;
                }
              ),
              b.fn.extend({
                addClass: function (t) {
                  var n,
                    e,
                    i,
                    r,
                    u,
                    o,
                    s,
                    a = 0;
                  if (g(t))
                    return this.each(function (n) {
                      b(this).addClass(t.call(this, n, Fn(this)));
                    });
                  if ((n = mn(t)).length)
                    for (; (e = this[a++]); )
                      if (((r = Fn(e)), (i = 1 === e.nodeType && " " + yn(r) + " "))) {
                        for (o = 0; (u = n[o++]); ) i.indexOf(" " + u + " ") < 0 && (i += u + " ");
                        r !== (s = yn(i)) && e.setAttribute("class", s);
                      }
                  return this;
                },
                removeClass: function (t) {
                  var n,
                    e,
                    i,
                    r,
                    u,
                    o,
                    s,
                    a = 0;
                  if (g(t))
                    return this.each(function (n) {
                      b(this).removeClass(t.call(this, n, Fn(this)));
                    });
                  if (!arguments.length) return this.attr("class", "");
                  if ((n = mn(t)).length)
                    for (; (e = this[a++]); )
                      if (((r = Fn(e)), (i = 1 === e.nodeType && " " + yn(r) + " "))) {
                        for (o = 0; (u = n[o++]); ) for (; -1 < i.indexOf(" " + u + " "); ) i = i.replace(" " + u + " ", " ");
                        r !== (s = yn(i)) && e.setAttribute("class", s);
                      }
                  return this;
                },
                toggleClass: function (t, n) {
                  var e = typeof t,
                    i = "string" === e || Array.isArray(t);
                  return "boolean" == typeof n && i
                    ? n
                      ? this.addClass(t)
                      : this.removeClass(t)
                    : g(t)
                    ? this.each(function (e) {
                        b(this).toggleClass(t.call(this, e, Fn(this), n), n);
                      })
                    : this.each(function () {
                        var n, r, u, o;
                        if (i) for (r = 0, u = b(this), o = mn(t); (n = o[r++]); ) u.hasClass(n) ? u.removeClass(n) : u.addClass(n);
                        else
                          (void 0 !== t && "boolean" !== e) ||
                            ((n = Fn(this)) && X.set(this, "__className__", n),
                            this.setAttribute && this.setAttribute("class", n || !1 === t ? "" : X.get(this, "__className__") || ""));
                      });
                },
                hasClass: function (t) {
                  var n,
                    e,
                    i = 0;
                  for (n = " " + t + " "; (e = this[i++]); ) if (1 === e.nodeType && -1 < (" " + yn(Fn(e)) + " ").indexOf(n)) return !0;
                  return !1;
                }
              });
            var Cn = /\r/g;
            b.fn.extend({
              val: function (t) {
                var n,
                  e,
                  i,
                  r = this[0];
                return arguments.length
                  ? ((i = g(t)),
                    this.each(function (e) {
                      var r;
                      1 === this.nodeType &&
                        (null == (r = i ? t.call(this, e, b(this).val()) : t)
                          ? (r = "")
                          : "number" == typeof r
                          ? (r += "")
                          : Array.isArray(r) &&
                            (r = b.map(r, function (t) {
                              return null == t ? "" : t + "";
                            })),
                        ((n = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) &&
                          "set" in n &&
                          void 0 !== n.set(this, r, "value")) ||
                          (this.value = r));
                    }))
                  : r
                  ? (n = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(r, "value"))
                    ? e
                    : "string" == typeof (e = r.value)
                    ? e.replace(Cn, "")
                    : null == e
                    ? ""
                    : e
                  : void 0;
              }
            }),
              b.extend({
                valHooks: {
                  option: {
                    get: function (t) {
                      var n = b.find.attr(t, "value");
                      return null != n ? n : yn(b.text(t));
                    }
                  },
                  select: {
                    get: function (t) {
                      var n,
                        e,
                        i,
                        r = t.options,
                        u = t.selectedIndex,
                        o = "select-one" === t.type,
                        s = o ? null : [],
                        a = o ? u + 1 : r.length;
                      for (i = u < 0 ? a : o ? u : 0; i < a; i++)
                        if (((e = r[i]).selected || i === u) && !e.disabled && (!e.parentNode.disabled || !k(e.parentNode, "optgroup"))) {
                          if (((n = b(e).val()), o)) return n;
                          s.push(n);
                        }
                      return s;
                    },
                    set: function (t, n) {
                      for (var e, i, r = t.options, u = b.makeArray(n), o = r.length; o--; )
                        ((i = r[o]).selected = -1 < b.inArray(b.valHooks.option.get(i), u)) && (e = !0);
                      return e || (t.selectedIndex = -1), u;
                    }
                  }
                }
              }),
              b.each(["radio", "checkbox"], function () {
                (b.valHooks[this] = {
                  set: function (t, n) {
                    if (Array.isArray(n)) return (t.checked = -1 < b.inArray(b(t).val(), n));
                  }
                }),
                  v.checkOn ||
                    (b.valHooks[this].get = function (t) {
                      return null === t.getAttribute("value") ? "on" : t.value;
                    });
              }),
              (v.focusin = "onfocusin" in i);
            var wn = /^(?:focusinfocus|focusoutblur)$/,
              En = function (t) {
                t.stopPropagation();
              };
            b.extend(b.event, {
              trigger: function (t, n, e, r) {
                var u,
                  o,
                  s,
                  a,
                  c,
                  h,
                  D,
                  l,
                  f = [e || F],
                  p = d.call(t, "type") ? t.type : t,
                  v = d.call(t, "namespace") ? t.namespace.split(".") : [];
                if (
                  ((o = l = s = e = e || F),
                  3 !== e.nodeType &&
                    8 !== e.nodeType &&
                    !wn.test(p + b.event.triggered) &&
                    (-1 < p.indexOf(".") && ((p = (v = p.split(".")).shift()), v.sort()),
                    (c = p.indexOf(":") < 0 && "on" + p),
                    ((t = t[b.expando] ? t : new b.Event(p, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
                    (t.namespace = v.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = e),
                    (n = null == n ? [t] : b.makeArray(n, [t])),
                    (D = b.event.special[p] || {}),
                    r || !D.trigger || !1 !== D.trigger.apply(e, n)))
                ) {
                  if (!r && !D.noBubble && !y(e)) {
                    for (a = D.delegateType || p, wn.test(a + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), (s = o);
                    s === (e.ownerDocument || F) && f.push(s.defaultView || s.parentWindow || i);
                  }
                  for (u = 0; (o = f[u++]) && !t.isPropagationStopped(); )
                    (l = o),
                      (t.type = 1 < u ? a : D.bindType || p),
                      (h = (X.get(o, "events") || Object.create(null))[t.type] && X.get(o, "handle")) && h.apply(o, n),
                      (h = c && o[c]) && h.apply && Y(o) && ((t.result = h.apply(o, n)), !1 === t.result && t.preventDefault());
                  return (
                    (t.type = p),
                    r ||
                      t.isDefaultPrevented() ||
                      (D.v && !1 !== D.v.apply(f.pop(), n)) ||
                      !Y(e) ||
                      (c &&
                        g(e[p]) &&
                        !y(e) &&
                        ((s = e[c]) && (e[c] = null),
                        (b.event.triggered = p),
                        t.isPropagationStopped() && l.addEventListener(p, En),
                        e[p](),
                        t.isPropagationStopped() && l.removeEventListener(p, En),
                        (b.event.triggered = void 0),
                        s && (e[c] = s))),
                    t.result
                  );
                }
              },
              simulate: function (t, n, e) {
                var i = b.extend(new b.Event(), e, { type: t, isSimulated: !0 });
                b.event.trigger(i, null, n);
              }
            }),
              b.fn.extend({
                trigger: function (t, n) {
                  return this.each(function () {
                    b.event.trigger(t, n, this);
                  });
                },
                triggerHandler: function (t, n) {
                  var e = this[0];
                  if (e) return b.event.trigger(t, n, e, !0);
                }
              }),
              v.focusin ||
                b.each({ focus: "focusin", blur: "focusout" }, function (t, n) {
                  var e = function (t) {
                    b.event.simulate(n, t.target, b.event.fix(t));
                  };
                  b.event.special[n] = {
                    setup: function () {
                      var i = this.ownerDocument || this.document || this,
                        r = X.access(i, n);
                      r || i.addEventListener(t, e, !0), X.access(i, n, (r || 0) + 1);
                    },
                    teardown: function () {
                      var i = this.ownerDocument || this.document || this,
                        r = X.access(i, n) - 1;
                      r ? X.access(i, n, r) : (i.removeEventListener(t, e, !0), X.remove(i, n));
                    }
                  };
                });
            var bn = i.location,
              jn = { guid: Date.now() },
              _n = /\?/;
            b.parseXML = function (t) {
              var n, e;
              if (!t || "string" != typeof t) return null;
              try {
                n = new i.DOMParser().parseFromString(t, "text/xml");
              } catch (t) {}
              return (
                (e = n && n.getElementsByTagName("parsererror")[0]),
                (n && !e) ||
                  b.error(
                    "Invalid XML: " +
                      (e
                        ? b
                            .map(e.childNodes, function (t) {
                              return t.textContent;
                            })
                            .join("\n")
                        : t)
                  ),
                n
              );
            };
            var xn = /\[\]$/,
              Bn = /\r?\n/g,
              An = /^(?:submit|button|image|reset|file)$/i,
              kn = /^(?:input|select|textarea|keygen)/i;
            function Qn(t, n, e, i) {
              var r;
              if (Array.isArray(n))
                b.each(n, function (n, r) {
                  e || xn.test(t) ? i(t, r) : Qn(t + "[" + ("object" == typeof r && null != r ? n : "") + "]", r, e, i);
                });
              else if (e || "object" !== w(n)) i(t, n);
              else for (r in n) Qn(t + "[" + r + "]", n[r], e, i);
            }
            (b.param = function (t, n) {
              var e,
                i = [],
                r = function (t, n) {
                  var e = g(n) ? n() : n;
                  i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == e ? "" : e);
                };
              if (null == t) return "";
              if (Array.isArray(t) || (t.jquery && !b.isPlainObject(t)))
                b.each(t, function () {
                  r(this.name, this.value);
                });
              else for (e in t) Qn(e, t[e], n, r);
              return i.join("&");
            }),
              b.fn.extend({
                serialize: function () {
                  return b.param(this.serializeArray());
                },
                serializeArray: function () {
                  return this.map(function () {
                    var t = b.prop(this, "elements");
                    return t ? b.makeArray(t) : this;
                  })
                    .filter(function () {
                      var t = this.type;
                      return (
                        this.name && !b(this).is(":disabled") && kn.test(this.nodeName) && !An.test(t) && (this.checked || !pt.test(t))
                      );
                    })
                    .map(function (t, n) {
                      var e = b(this).val();
                      return null == e
                        ? null
                        : Array.isArray(e)
                        ? b.map(e, function (t) {
                            return { name: n.name, value: t.replace(Bn, "\r\n") };
                          })
                        : { name: n.name, value: e.replace(Bn, "\r\n") };
                    })
                    .get();
                }
              });
            var In = /%20/g,
              Sn = /#.*$/,
              Tn = /([?&])_=[^&]*/,
              Mn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              $n = /^(?:GET|HEAD)$/,
              Pn = /^\/\//,
              Rn = {},
              On = {},
              Ln = "*/".concat("*"),
              Un = F.createElement("a");
            function Gn(t) {
              return function (n, e) {
                "string" != typeof n && ((e = n), (n = "*"));
                var i,
                  r = 0,
                  u = n.toLowerCase().match(R) || [];
                if (g(e))
                  for (; (i = u[r++]); )
                    "+" === i[0] ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(e)) : (t[i] = t[i] || []).push(e);
              };
            }
            function Nn(t, n, e, i) {
              var r = {},
                u = t === On;
              function o(s) {
                var a;
                return (
                  (r[s] = !0),
                  b.each(t[s] || [], function (t, s) {
                    var c = s(n, e, i);
                    return "string" != typeof c || u || r[c] ? (u ? !(a = c) : void 0) : (n.dataTypes.unshift(c), o(c), !1);
                  }),
                  a
                );
              }
              return o(n.dataTypes[0]) || (!r["*"] && o("*"));
            }
            function Vn(t, n) {
              var e,
                i,
                r = b.ajaxSettings.flatOptions || {};
              for (e in n) void 0 !== n[e] && ((r[e] ? t : i || (i = {}))[e] = n[e]);
              return i && b.extend(!0, t, i), t;
            }
            (Un.href = bn.href),
              b.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                  url: bn.href,
                  type: "GET",
                  isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bn.protocol),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                  accepts: {
                    "*": Ln,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                  },
                  contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                  responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                  converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": b.parseXML },
                  flatOptions: { url: !0, context: !0 }
                },
                ajaxSetup: function (t, n) {
                  return n ? Vn(Vn(t, b.ajaxSettings), n) : Vn(b.ajaxSettings, t);
                },
                ajaxPrefilter: Gn(Rn),
                ajaxTransport: Gn(On),
                ajax: function (t, n) {
                  "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                  var e,
                    r,
                    u,
                    o,
                    s,
                    a,
                    c,
                    h,
                    D,
                    l,
                    d = b.ajaxSetup({}, n),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? b(f) : b.event,
                    v = b.Deferred(),
                    g = b.Callbacks("once memory"),
                    y = d.statusCode || {},
                    m = {},
                    C = {},
                    w = "canceled",
                    E = {
                      readyState: 0,
                      getResponseHeader: function (t) {
                        var n;
                        if (c) {
                          if (!o)
                            for (o = {}; (n = Mn.exec(u)); ) o[n[1].toLowerCase() + " "] = (o[n[1].toLowerCase() + " "] || []).concat(n[2]);
                          n = o[t.toLowerCase() + " "];
                        }
                        return null == n ? null : n.join(", ");
                      },
                      getAllResponseHeaders: function () {
                        return c ? u : null;
                      },
                      setRequestHeader: function (t, n) {
                        return null == c && ((t = C[t.toLowerCase()] = C[t.toLowerCase()] || t), (m[t] = n)), this;
                      },
                      overrideMimeType: function (t) {
                        return null == c && (d.mimeType = t), this;
                      },
                      statusCode: function (t) {
                        var n;
                        if (t)
                          if (c) E.always(t[E.status]);
                          else for (n in t) y[n] = [y[n], t[n]];
                        return this;
                      },
                      abort: function (t) {
                        var n = t || w;
                        return e && e.abort(n), j(0, n), this;
                      }
                    };
                  if (
                    (v.promise(E),
                    (d.url = ((t || d.url || bn.href) + "").replace(Pn, bn.protocol + "//")),
                    (d.type = n.method || n.type || d.method || d.type),
                    (d.dataTypes = (d.dataType || "*").toLowerCase().match(R) || [""]),
                    null == d.crossDomain)
                  ) {
                    a = F.createElement("a");
                    try {
                      (a.href = d.url), (a.href = a.href), (d.crossDomain = Un.protocol + "//" + Un.host != a.protocol + "//" + a.host);
                    } catch (t) {
                      d.crossDomain = !0;
                    }
                  }
                  if (
                    (d.data && d.processData && "string" != typeof d.data && (d.data = b.param(d.data, d.traditional)), Nn(Rn, d, n, E), c)
                  )
                    return E;
                  for (D in ((h = b.event && d.global) && 0 == b.active++ && b.event.trigger("ajaxStart"),
                  (d.type = d.type.toUpperCase()),
                  (d.hasContent = !$n.test(d.type)),
                  (r = d.url.replace(Sn, "")),
                  d.hasContent
                    ? d.data &&
                      d.processData &&
                      0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                      (d.data = d.data.replace(In, "+"))
                    : ((l = d.url.slice(r.length)),
                      d.data && (d.processData || "string" == typeof d.data) && ((r += (_n.test(r) ? "&" : "?") + d.data), delete d.data),
                      !1 === d.cache && ((r = r.replace(Tn, "$1")), (l = (_n.test(r) ? "&" : "?") + "_=" + jn.guid++ + l)),
                      (d.url = r + l)),
                  d.ifModified &&
                    (b.lastModified[r] && E.setRequestHeader("If-Modified-Since", b.lastModified[r]),
                    b.etag[r] && E.setRequestHeader("If-None-Match", b.etag[r])),
                  ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) && E.setRequestHeader("Content-Type", d.contentType),
                  E.setRequestHeader(
                    "Accept",
                    d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                      ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ln + "; q=0.01" : "")
                      : d.accepts["*"]
                  ),
                  d.headers))
                    E.setRequestHeader(D, d.headers[D]);
                  if (d.beforeSend && (!1 === d.beforeSend.call(f, E, d) || c)) return E.abort();
                  if (((w = "abort"), g.add(d.complete), E.done(d.success), E.fail(d.error), (e = Nn(On, d, n, E)))) {
                    if (((E.readyState = 1), h && p.trigger("ajaxSend", [E, d]), c)) return E;
                    d.async &&
                      0 < d.timeout &&
                      (s = i.setTimeout(function () {
                        E.abort("timeout");
                      }, d.timeout));
                    try {
                      (c = !1), e.send(m, j);
                    } catch (t) {
                      if (c) throw t;
                      j(-1, t);
                    }
                  } else j(-1, "No Transport");
                  function j(t, n, o, a) {
                    var D,
                      l,
                      F,
                      m,
                      C,
                      w = n;
                    c ||
                      ((c = !0),
                      s && i.clearTimeout(s),
                      (e = void 0),
                      (u = a || ""),
                      (E.readyState = 0 < t ? 4 : 0),
                      (D = (200 <= t && t < 300) || 304 === t),
                      o &&
                        (m = (function (t, n, e) {
                          for (var i, r, u, o, s = t.contents, a = t.dataTypes; "*" === a[0]; )
                            a.shift(), void 0 === i && (i = t.mimeType || n.getResponseHeader("Content-Type"));
                          if (i)
                            for (r in s)
                              if (s[r] && s[r].test(i)) {
                                a.unshift(r);
                                break;
                              }
                          if (a[0] in e) u = a[0];
                          else {
                            for (r in e) {
                              if (!a[0] || t.converters[r + " " + a[0]]) {
                                u = r;
                                break;
                              }
                              o || (o = r);
                            }
                            u = u || o;
                          }
                          if (u) return u !== a[0] && a.unshift(u), e[u];
                        })(d, E, o)),
                      !D &&
                        -1 < b.inArray("script", d.dataTypes) &&
                        b.inArray("json", d.dataTypes) < 0 &&
                        (d.converters["text script"] = function () {}),
                      (m = (function (t, n, e, i) {
                        var r,
                          u,
                          o,
                          s,
                          a,
                          c = {},
                          h = t.dataTypes.slice();
                        if (h[1]) for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
                        for (u = h.shift(); u; )
                          if (
                            (t.responseFields[u] && (e[t.responseFields[u]] = n),
                            !a && i && t.dataFilter && (n = t.dataFilter(n, t.dataType)),
                            (a = u),
                            (u = h.shift()))
                          )
                            if ("*" === u) u = a;
                            else if ("*" !== a && a !== u) {
                              if (!(o = c[a + " " + u] || c["* " + u]))
                                for (r in c)
                                  if ((s = r.split(" "))[1] === u && (o = c[a + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === o ? (o = c[r]) : !0 !== c[r] && ((u = s[0]), h.unshift(s[1]));
                                    break;
                                  }
                              if (!0 !== o)
                                if (o && t.throws) n = o(n);
                                else
                                  try {
                                    n = o(n);
                                  } catch (t) {
                                    return { state: "parsererror", error: o ? t : "No conversion from " + a + " to " + u };
                                  }
                            }
                        return { state: "success", data: n };
                      })(d, m, E, D)),
                      D
                        ? (d.ifModified &&
                            ((C = E.getResponseHeader("Last-Modified")) && (b.lastModified[r] = C),
                            (C = E.getResponseHeader("etag")) && (b.etag[r] = C)),
                          204 === t || "HEAD" === d.type
                            ? (w = "nocontent")
                            : 304 === t
                            ? (w = "notmodified")
                            : ((w = m.state), (l = m.data), (D = !(F = m.error))))
                        : ((F = w), (!t && w) || ((w = "error"), t < 0 && (t = 0))),
                      (E.status = t),
                      (E.statusText = (n || w) + ""),
                      D ? v.resolveWith(f, [l, w, E]) : v.rejectWith(f, [E, w, F]),
                      E.statusCode(y),
                      (y = void 0),
                      h && p.trigger(D ? "ajaxSuccess" : "ajaxError", [E, d, D ? l : F]),
                      g.fireWith(f, [E, w]),
                      h && (p.trigger("ajaxComplete", [E, d]), --b.active || b.event.trigger("ajaxStop")));
                  }
                  return E;
                },
                getJSON: function (t, n, e) {
                  return b.get(t, n, e, "json");
                },
                getScript: function (t, n) {
                  return b.get(t, void 0, n, "script");
                }
              }),
              b.each(["get", "post"], function (t, n) {
                b[n] = function (t, e, i, r) {
                  return (
                    g(e) && ((r = r || i), (i = e), (e = void 0)),
                    b.ajax(b.extend({ url: t, type: n, dataType: r, data: e, success: i }, b.isPlainObject(t) && t))
                  );
                };
              }),
              b.ajaxPrefilter(function (t) {
                var n;
                for (n in t.headers) "content-type" === n.toLowerCase() && (t.contentType = t.headers[n] || "");
              }),
              (b.g = function (t, n, e) {
                return b.ajax({
                  url: t,
                  type: "GET",
                  dataType: "script",
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: { "text script": function () {} },
                  dataFilter: function (t) {
                    b.globalEval(t, n, e);
                  }
                });
              }),
              b.fn.extend({
                wrapAll: function (t) {
                  var n;
                  return (
                    this[0] &&
                      (g(t) && (t = t.call(this[0])),
                      (n = b(t, this[0].ownerDocument).eq(0).clone(!0)),
                      this[0].parentNode && n.insertBefore(this[0]),
                      n
                        .map(function () {
                          for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                          return t;
                        })
                        .append(this)),
                    this
                  );
                },
                wrapInner: function (t) {
                  return g(t)
                    ? this.each(function (n) {
                        b(this).wrapInner(t.call(this, n));
                      })
                    : this.each(function () {
                        var n = b(this),
                          e = n.contents();
                        e.length ? e.wrapAll(t) : n.append(t);
                      });
                },
                wrap: function (t) {
                  var n = g(t);
                  return this.each(function (e) {
                    b(this).wrapAll(n ? t.call(this, e) : t);
                  });
                },
                unwrap: function (t) {
                  return (
                    this.parent(t)
                      .not("body")
                      .each(function () {
                        b(this).replaceWith(this.childNodes);
                      }),
                    this
                  );
                }
              }),
              (b.expr.pseudos.hidden = function (t) {
                return !b.expr.pseudos.visible(t);
              }),
              (b.expr.pseudos.visible = function (t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
              }),
              (b.ajaxSettings.xhr = function () {
                try {
                  return new i.XMLHttpRequest();
                } catch (t) {}
              });
            var Hn = { 0: 200, 1223: 204 },
              Wn = b.ajaxSettings.xhr();
            (v.cors = !!Wn && "withCredentials" in Wn),
              (v.ajax = Wn = !!Wn),
              b.ajaxTransport(function (t) {
                var n, e;
                if (v.cors || (Wn && !t.crossDomain))
                  return {
                    send: function (r, u) {
                      var o,
                        s = t.xhr();
                      if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
                        for (o in t.xhrFields) s[o] = t.xhrFields[o];
                      for (o in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                      t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                      r))
                        s.setRequestHeader(o, r[o]);
                      (n = function (t) {
                        return function () {
                          n &&
                            ((n = e = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                            "abort" === t
                              ? s.abort()
                              : "error" === t
                              ? "number" != typeof s.status
                                ? u(0, "error")
                                : u(s.status, s.statusText)
                              : u(
                                  Hn[s.status] || s.status,
                                  s.statusText,
                                  "text" !== (s.responseType || "text") || "string" != typeof s.responseText
                                    ? { binary: s.response }
                                    : { text: s.responseText },
                                  s.getAllResponseHeaders()
                                ));
                        };
                      }),
                        (s.onload = n()),
                        (e = s.onerror = s.ontimeout = n("error")),
                        void 0 !== s.onabort
                          ? (s.onabort = e)
                          : (s.onreadystatechange = function () {
                              4 === s.readyState &&
                                i.setTimeout(function () {
                                  n && e();
                                });
                            }),
                        (n = n("abort"));
                      try {
                        s.send((t.hasContent && t.data) || null);
                      } catch (r) {
                        if (n) throw r;
                      }
                    },
                    abort: function () {
                      n && n();
                    }
                  };
              }),
              b.ajaxPrefilter(function (t) {
                t.crossDomain && (t.contents.script = !1);
              }),
              b.ajaxSetup({
                accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                contents: { script: /\b(?:java|ecma)script\b/ },
                converters: {
                  "text script": function (t) {
                    return b.globalEval(t), t;
                  }
                }
              }),
              b.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
              }),
              b.ajaxTransport("script", function (t) {
                var n, e;
                if (t.crossDomain || t.scriptAttrs)
                  return {
                    send: function (i, r) {
                      (n = b("<script>")
                        .attr(t.scriptAttrs || {})
                        .prop({ charset: t.scriptCharset, src: t.url })
                        .on(
                          "load error",
                          (e = function (t) {
                            n.remove(), (e = null), t && r("error" === t.type ? 404 : 200, t.type);
                          })
                        )),
                        F.head.appendChild(n[0]);
                    },
                    abort: function () {
                      e && e();
                    }
                  };
              });
            var zn,
              qn = [],
              Kn = /(=)\?(?=&|$)|\?\?/;
            b.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var t = qn.pop() || b.expando + "_" + jn.guid++;
                return (this[t] = !0), t;
              }
            }),
              b.ajaxPrefilter("json jsonp", function (t, n, e) {
                var r,
                  u,
                  o,
                  s =
                    !1 !== t.jsonp &&
                    (Kn.test(t.url)
                      ? "url"
                      : "string" == typeof t.data &&
                        0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                        Kn.test(t.data) &&
                        "data");
                if (s || "jsonp" === t.dataTypes[0])
                  return (
                    (r = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Kn, "$1" + r)) : !1 !== t.jsonp && (t.url += (_n.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                    (t.converters["script json"] = function () {
                      return o || b.error(r + " was not called"), o[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (u = i[r]),
                    (i[r] = function () {
                      o = arguments;
                    }),
                    e.always(function () {
                      void 0 === u ? b(i).removeProp(r) : (i[r] = u),
                        t[r] && ((t.jsonpCallback = n.jsonpCallback), qn.push(r)),
                        o && g(u) && u(o[0]),
                        (o = u = void 0);
                    }),
                    "script"
                  );
              }),
              (v.createHTMLDocument =
                (((zn = F.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"),
                2 === zn.childNodes.length)),
              (b.parseHTML = function (t, n, e) {
                return "string" != typeof t
                  ? []
                  : ("boolean" == typeof n && ((e = n), (n = !1)),
                    n ||
                      (v.createHTMLDocument
                        ? (((i = (n = F.implementation.createHTMLDocument("")).createElement("base")).href = F.location.href),
                          n.head.appendChild(i))
                        : (n = F)),
                    (u = !e && []),
                    (r = Q.exec(t))
                      ? [n.createElement(r[1])]
                      : ((r = wt([t], n, u)), u && u.length && b(u).remove(), b.merge([], r.childNodes)));
                var i, r, u;
              }),
              (b.fn.load = function (t, n, e) {
                var i,
                  r,
                  u,
                  o = this,
                  s = t.indexOf(" ");
                return (
                  -1 < s && ((i = yn(t.slice(s))), (t = t.slice(0, s))),
                  g(n) ? ((e = n), (n = void 0)) : n && "object" == typeof n && (r = "POST"),
                  0 < o.length &&
                    b
                      .ajax({ url: t, type: r || "GET", dataType: "html", data: n })
                      .done(function (t) {
                        (u = arguments), o.html(i ? b("<div>").append(b.parseHTML(t)).find(i) : t);
                      })
                      .always(
                        e &&
                          function (t, n) {
                            o.each(function () {
                              e.apply(this, u || [t.responseText, n, t]);
                            });
                          }
                      ),
                  this
                );
              }),
              (b.expr.pseudos.animated = function (t) {
                return b.grep(b.timers, function (n) {
                  return t === n.elem;
                }).length;
              }),
              (b.offset = {
                setOffset: function (t, n, e) {
                  var i,
                    r,
                    u,
                    o,
                    s,
                    a,
                    c = b.css(t, "position"),
                    h = b(t),
                    D = {};
                  "static" === c && (t.style.position = "relative"),
                    (s = h.offset()),
                    (u = b.css(t, "top")),
                    (a = b.css(t, "left")),
                    ("absolute" === c || "fixed" === c) && -1 < (u + a).indexOf("auto")
                      ? ((o = (i = h.position()).top), (r = i.left))
                      : ((o = parseFloat(u) || 0), (r = parseFloat(a) || 0)),
                    g(n) && (n = n.call(t, e, b.extend({}, s))),
                    null != n.top && (D.top = n.top - s.top + o),
                    null != n.left && (D.left = n.left - s.left + r),
                    "using" in n ? n.using.call(t, D) : h.css(D);
                }
              }),
              b.fn.extend({
                offset: function (t) {
                  if (arguments.length)
                    return void 0 === t
                      ? this
                      : this.each(function (n) {
                          b.offset.setOffset(this, t, n);
                        });
                  var n,
                    e,
                    i = this[0];
                  return i
                    ? i.getClientRects().length
                      ? ((n = i.getBoundingClientRect()),
                        (e = i.ownerDocument.defaultView),
                        { top: n.top + e.pageYOffset, left: n.left + e.pageXOffset })
                      : { top: 0, left: 0 }
                    : void 0;
                },
                position: function () {
                  if (this[0]) {
                    var t,
                      n,
                      e,
                      i = this[0],
                      r = { top: 0, left: 0 };
                    if ("fixed" === b.css(i, "position")) n = i.getBoundingClientRect();
                    else {
                      for (
                        n = this.offset(), e = i.ownerDocument, t = i.offsetParent || e.documentElement;
                        t && (t === e.body || t === e.documentElement) && "static" === b.css(t, "position");

                      )
                        t = t.parentNode;
                      t &&
                        t !== i &&
                        1 === t.nodeType &&
                        (((r = b(t).offset()).top += b.css(t, "borderTopWidth", !0)), (r.left += b.css(t, "borderLeftWidth", !0)));
                    }
                    return { top: n.top - r.top - b.css(i, "marginTop", !0), left: n.left - r.left - b.css(i, "marginLeft", !0) };
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === b.css(t, "position"); ) t = t.offsetParent;
                    return t || ot;
                  });
                }
              }),
              b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, n) {
                var e = "pageYOffset" === n;
                b.fn[t] = function (i) {
                  return H(
                    this,
                    function (t, i, r) {
                      var u;
                      if ((y(t) ? (u = t) : 9 === t.nodeType && (u = t.defaultView), void 0 === r)) return u ? u[n] : t[i];
                      u ? u.scrollTo(e ? u.pageXOffset : r, e ? r : u.pageYOffset) : (t[i] = r);
                    },
                    t,
                    i,
                    arguments.length
                  );
                };
              }),
              b.each(["top", "left"], function (t, n) {
                b.cssHooks[n] = Nt(v.pixelPosition, function (t, e) {
                  if (e) return (e = Gt(t, n)), Rt.test(e) ? b(t).position()[n] + "px" : e;
                });
              }),
              b.each({ Height: "height", Width: "width" }, function (t, n) {
                b.each({ padding: "inner" + t, content: n, "": "outer" + t }, function (e, i) {
                  b.fn[i] = function (r, u) {
                    var o = arguments.length && (e || "boolean" != typeof r),
                      s = e || (!0 === r || !0 === u ? "margin" : "border");
                    return H(
                      this,
                      function (n, e, r) {
                        var u;
                        return y(n)
                          ? 0 === i.indexOf("outer")
                            ? n["inner" + t]
                            : n.document.documentElement["client" + t]
                          : 9 === n.nodeType
                          ? ((u = n.documentElement),
                            Math.max(n.body["scroll" + t], u["scroll" + t], n.body["offset" + t], u["offset" + t], u["client" + t]))
                          : void 0 === r
                          ? b.css(n, e, s)
                          : b.style(n, e, r, s);
                      },
                      n,
                      o ? r : void 0,
                      o
                    );
                  };
                });
              }),
              b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, n) {
                b.fn[n] = function (t) {
                  return this.on(n, t);
                };
              }),
              b.fn.extend({
                bind: function (t, n, e) {
                  return this.on(t, null, n, e);
                },
                unbind: function (t, n) {
                  return this.off(t, null, n);
                },
                delegate: function (t, n, e, i) {
                  return this.on(n, t, e, i);
                },
                undelegate: function (t, n, e) {
                  return 1 === arguments.length ? this.off(t, "**") : this.off(n, t || "**", e);
                },
                hover: function (t, n) {
                  return this.mouseenter(t).mouseleave(n || t);
                }
              }),
              b.each(
                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                  " "
                ),
                function (t, n) {
                  b.fn[n] = function (t, e) {
                    return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n);
                  };
                }
              );
            var Yn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (b.proxy = function (t, n) {
              var e, i, r;
              if (("string" == typeof n && ((e = t[n]), (n = t), (t = e)), g(t)))
                return (
                  (i = s.call(arguments, 2)),
                  ((r = function () {
                    return t.apply(n || this, i.concat(s.call(arguments)));
                  }).guid = t.guid =
                    t.guid || b.guid++),
                  r
                );
            }),
              (b.holdReady = function (t) {
                t ? b.readyWait++ : b.ready(!0);
              }),
              (b.isArray = Array.isArray),
              (b.parseJSON = JSON.parse),
              (b.nodeName = k),
              (b.isFunction = g),
              (b.isWindow = y),
              (b.camelCase = K),
              (b.type = w),
              (b.now = Date.now),
              (b.isNumeric = function (t) {
                var n = b.type(t);
                return ("number" === n || "string" === n) && !isNaN(t - parseFloat(t));
              }),
              (b.trim = function (t) {
                return null == t ? "" : (t + "").replace(Yn, "");
              }),
              void 0 ===
                (e = function () {
                  return b;
                }.apply(n, [])) || (t.exports = e);
            var Jn = i.jQuery,
              Xn = i.$;
            return (
              (b.noConflict = function (t) {
                return i.$ === b && (i.$ = Xn), t && i.jQuery === b && (i.jQuery = Jn), b;
              }),
              void 0 === r && (i.jQuery = i.$ = b),
              b
            );
          }),
          "object" == typeof t.exports
            ? (t.exports = i.document
                ? r(i, !0)
                : function (t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return r(t);
                  })
            : r(i);
      }
    },
    n = {};
  function e(i) {
    var r = n[i];
    if (void 0 !== r) return r.exports;
    var u = (n[i] = { exports: {} });
    return t[i].call(u.exports, u, u.exports, e), u.exports;
  }
  (e.n = (t) => {
    var n = t && t.F ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var i in n) e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (() => {
      "use strict";
      var t, n, i;
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
        })(n || (n = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(i || (i = {}));
      const r = chrome.runtime.id,
        u = "reactionContainerOpen",
        o = "https://sessions.teleparty.com",
        s = "https://redirect.teleparty.com",
        a = s,
        c = `${s}/sidebar`,
        h = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        D = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        l = "recentlyUsedEmojiMap",
        d = "redirectDataMap",
        f = [
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
      class v {
        constructor(t, n, e, i, r) {
          (this.requiredPermissions = t), (this.serverName = e), (this.name = i), (this.contentScripts = n), (this.syncFromEnd = r);
        }
        urlWithSessionId(t) {
          return `${a}/join/${t}`;
        }
      }
      var g;
      !(function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(g || (g = {}));
      var y;
      function F(t) {
        return t.hostname.includes(".funimation.") && t.pathname.includes("/v/");
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
      function C(t) {
        return function () {
          return new Promise((n) => {
            setTimeout(() => {
              n();
            }, t);
          });
        };
      }
      function w(t, n, e = 250) {
        return function () {
          const i = new Date().getTime(),
            r = function () {
              return t()
                ? Promise.resolve()
                : null !== n && new Date().getTime() - i > n
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : C(e)().then(r);
            };
          return r();
        };
      }
      function E(t, n, e) {
        t.push(n), t.length > e && t.splice(0, t.length - e);
      }
      function b(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"), (t.PARTY_START = "party_start"), (t.PARTY_JOIN = "party_join"), (t.PARTY_END = "party_end");
      })(y || (y = {}));
      const j = new (class extends v {
        isBrowsing(t) {
          return t.hostname.includes(".funimation.");
        }
        isValidUrl(t) {
          return F(t);
        }
        getVideoId(t) {
          return t.pathname.split("/v/")[1];
        }
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", n.FUNIMATION, !1);
      Object.freeze(j);
      const _ = j;
      class x {
        constructor(t, n, e) {
          (this.sender = t), (this.target = n), (this.type = e);
        }
      }
      class B extends x {
        constructor(t, n, e) {
          super(t, n, e), (this.type = e);
        }
      }
      var A;
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
      })(A || (A = {}));
      class k extends B {
        constructor(t, n, e) {
          super(t, n, A.LOG_EVENT), (this.data = e), (this.sender = t), (this.target = n);
        }
      }
      const Q = "Service_Background",
        I = "Popup",
        S = "Content_Script",
        T = "Page_Controls";
      var M = console.log.bind(window.console);
      const $ = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, n, e = 2e4) {
          return new Promise((i, r) => {
            const u = setTimeout(() => {
              r();
            }, e);
            try {
              chrome.tabs.sendMessage(n, t, (n) => {
                chrome.runtime.lastError && M(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), i(n);
              });
            } catch (t) {
              clearTimeout(u), r(t);
            }
          });
        }
        m(t, n) {
          return new Promise((e, i) => {
            let u = null;
            n &&
              (u = setTimeout(() => {
                i({ error: "Send Message Timeout" });
              }, n));
            try {
              chrome.runtime.sendMessage(r, t, (n) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), u && clearTimeout(u), e(n);
              });
            } catch (t) {
              u && clearTimeout(u), i(t);
            }
          });
        }
      })();
      var P = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      var R = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      class O extends class {
        constructor() {
          (this.C = 0), (this.j = !1);
        }
        set hostOnly(t) {
          this.j = t;
        }
        get hostOnly() {
          return this.j;
        }
        get uiEventsHappening() {
          return this.C;
        }
        getScreenSize() {
          return { width: window.outerWidth, height: window.outerHeight };
        }
        getVideoContent(t, n, e, i, r) {
          let u, o, s;
          return (
            r &&
              (r.episodeNum && !isNaN(r.episodeNum) && (u = r.episodeNum),
              r.seasonNum && !isNaN(r.seasonNum) && (o = r.seasonNum),
              (s = r.title)),
            { id: t, type: i, name: n, url: e, episode: u, season: o, episode_name: s, service: this.getStreamingServiceName() }
          );
        }
        logError(t, n) {
          console.error("ERROR", t, n);
          const e = new k(S, Q, { name: "video_error", action: { description: t, reason: n } });
          $.m(e);
        }
        doAdCheck() {
          return P(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(), (this.C = 0), (this._ = !0), this.B();
        }
        waitVideoApiReadyAsync() {
          return R(this, void 0, void 0, function* () {
            yield w(() => {
              const t = this.A();
              return "paused" === t || "playing" === t;
            }, 1 / 0)();
          });
        }
        B() {
          return R(this, void 0, void 0, function* () {
            try {
              const t = this.k().split("/")[1],
                n = yield fetch(`https://d33et77evd9bgg.cloudfront.net/data/v1/episodes/${t}.json`);
              this.I = yield n.json();
            } catch (t) {
              console.error(t), (this.I = void 0);
            }
          });
        }
        A() {
          const t = this.getVideoElement();
          let n;
          return document.querySelector(".videoAdUiClickElement")
            ? i.AD_PLAYING
            : ((n = t && "" !== t.src ? (t.readyState < 4 ? i.LOADING : t.paused ? i.PAUSED : i.PLAYING) : i.NOT_READY), n);
        }
        waitVideoDoneLoadingAsync() {
          return R(this, void 0, void 0, function* () {
            yield w(() => this.A() === i.PLAYING || this.A() === i.PAUSED, 1e4)();
          });
        }
        getStreamingServiceName() {
          return n.FUNIMATION;
        }
        setVideoEventListener(t) {
          this.S = t;
        }
        getUpdateSessionDataAsync() {
          return R(this, void 0, void 0, function* () {
            const n = yield this.getStateAsync(),
              e = this.T();
            if (0 === e) throw new Error("Couldn't get update data");
            const r = Date.now();
            return {
              state: n.playbackState === i.PLAYING ? t.PLAYING : t.PAUSED,
              lastKnownTime: e,
              lastKnownTimeUpdatedAt: r,
              bufferingState: this.A() == i.LOADING
            };
          });
        }
        setCurrentTime(t) {
          return R(this, void 0, void 0, function* () {
            const n = this.getVideoElement();
            n && (n.currentTime = t / 1e3);
          });
        }
        T() {
          const t = this.getVideoElement();
          return t ? Math.floor(1e3 * t.currentTime) : 0;
        }
        getStateAsync() {
          return R(this, void 0, void 0, function* () {
            return new Promise((t, n) => {
              const e = this.T();
              t({ playbackState: this.A(), playbackPositionMilliseconds: e });
            });
          });
        }
        M() {
          const t = this.getVideoElement();
          return t ? Math.floor(1e3 * t.duration) : 0;
        }
        getVideoDataAsync() {
          var t, n, e;
          return R(this, void 0, void 0, function* () {
            this.k().split("/")[1] !== (null === (t = this.I) || void 0 === t ? void 0 : t.slug) && (yield this.B());
            const i = this.P(),
              r = null !== (n = this.R()) && void 0 !== n ? n : "",
              u = this.k(),
              o = null !== (e = this.M()) && void 0 !== e ? e : 0,
              s = this.getScreenSize(),
              a = this.O(),
              c = this.getVideoContent(u, r, window.location.href, i, a);
            return new Promise((t) => {
              t({
                videoId: u,
                videoTitle: r,
                videoDuration: o,
                serviceDomain: window.location.hostname,
                screen: s,
                content: c,
                videoState: this.A(),
                videoType: i
              });
            });
          });
        }
        getVideoElement() {
          return document.querySelector("video");
        }
        jumpToNextEpisode(t) {
          return R(this, void 0, void 0, function* () {
            if (this.k() != t.videoId) {
              const t = document.querySelector(".hydra-video-next");
              t && t.click();
            }
          });
        }
        R() {
          var t;
          return null === (t = this.I) || void 0 === t ? void 0 : t.show.name.en;
        }
        k() {
          var t;
          return null !== (t = _.getVideoId(new URL(window.location.href))) && void 0 !== t ? t : "";
        }
        O() {
          var t, n, e, i, r, u;
          const o = {};
          if (this.P() == g.EPISODE) {
            const s = null !== (n = null === (t = this.I) || void 0 === t ? void 0 : t.season.number) && void 0 !== n ? n : "0",
              a = null !== (i = null === (e = this.I) || void 0 === e ? void 0 : e.episodeNumber) && void 0 !== i ? i : "0";
            (o.seasonNum = parseInt(s)),
              (o.episodeNum = parseInt(a)),
              (o.title = null !== (u = null === (r = this.I) || void 0 === r ? void 0 : r.name.en) && void 0 !== u ? u : "");
          }
          return o;
        }
        P() {
          var t;
          const n = null === (t = this.I) || void 0 === t ? void 0 : t.type;
          return (null == n ? void 0 : n.includes("movie")) ? g.FEATURE : g.EPISODE;
        }
        freeze(t) {
          return R(this, void 0, void 0, function* () {
            this.C += 1;
            try {
              yield this.pause(), yield C(t)(), yield this.play();
            } finally {
              this.C -= 1;
            }
          });
        }
        pause() {
          var t;
          return R(this, void 0, void 0, function* () {
            null === (t = this.getVideoElement()) || void 0 === t || t.pause();
          });
        }
        play() {
          var t;
          return R(this, void 0, void 0, function* () {
            null === (t = this.getVideoElement()) || void 0 === t || t.play();
          });
        }
      }
      var L = e(457),
        U = e.n(L);
      const G = chrome.extension.getURL("img/x-circle.svg"),
        N = "with-chat";
      var V = e(7206),
        H = e.n(V);
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
        K = {
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
      function Y(t) {
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
                  let n = 16;
                  const e = t.replace(p, "").replace(/[\uFE0F]/g, ""),
                    i = ((t || "").match(p) || []).length;
                  return 0 === e.length && i <= 3 && (n = 32), n;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const J = {
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
      var nt = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      const et = new (class {
        setItemsAsync(t) {
          return nt(this, void 0, void 0, function* () {
            return new Promise((n, e) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? e(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : n();
              });
            });
          });
        }
      })();
      Object.freeze(et);
      const it = et;
      var rt,
        ut = function (t, n, e, i) {
          return new (e || (e = Promise))(function (r, u) {
            function o(t) {
              try {
                a(i.next(t));
              } catch (t) {
                u(t);
              }
            }
            function s(t) {
              try {
                a(i.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var n;
              t.done
                ? r(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(o, s);
            }
            a((i = i.apply(t, n || [])).next());
          });
        };
      class ot {
        constructor(t) {
          var n, e, i, r, u, o;
          (this.L = {
            userIcon: null !== (n = t.userIcon) && void 0 !== n ? n : "",
            userNickname: null !== (e = t.userNickname) && void 0 !== e ? e : "",
            nameColor: null !== (i = t.nameColor) && void 0 !== i ? i : "",
            badge: null !== (r = t.badge) && void 0 !== r ? r : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : D
          }),
            (this.U = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = Y(t)),
            (this.L.userIcon = t),
            it.setItemsAsync({ userIcon: t }),
            M("new user settings after set user icon: " + JSON.stringify(this.L));
        }
        saveUserNickname(t) {
          (this.L.userNickname = t),
            it.setItemsAsync({ userNickname: t }),
            M("new user settings after set user nickname: " + JSON.stringify(this.L));
        }
        saveUserSettings(t) {
          return ut(this, void 0, void 0, function* () {
            const n = Y(t.userIcon);
            (this.L = t),
              (this.L.userIcon = n),
              yield it.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: n,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              M("new user settings after save: " + JSON.stringify(this.L));
          });
        }
        get userSettings() {
          return this.L;
        }
        get permId() {
          return this.U;
        }
        get userIcon() {
          return this.L.userIcon;
        }
        get userNickname() {
          return this.L.userNickname;
        }
      }
      class st extends x {
        constructor(t, n, e) {
          super(t, n, e), (this.G = e);
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
      })(rt || (rt = {}));
      class at extends st {
        constructor(t, n, e) {
          super(t, n, rt.SET_TYPING), (this.data = e);
        }
      }
      class ct extends st {
        constructor(t, n, e) {
          super(t, n, rt.SEND_MESSAGE), (this.data = e);
        }
      }
      class ht extends st {
        constructor(t, n, e) {
          super(t, n, rt.BROADCAST_USER_SETTINGS), (this.data = e);
        }
      }
      class Dt extends B {
        constructor(t, n, e) {
          super(t, n, A.TEARDOWN), (this.data = e);
        }
      }
      class lt extends st {
        constructor(t, n, e) {
          super(t, n, rt.SEND_REACTION), (this.data = e);
        }
      }
      class dt extends st {
        constructor(t, n, e) {
          super(t, n, rt.SEND_GIF), (this.data = e);
        }
      }
      class ft {
        constructor() {
          this.resetTasks(), (this.N = []), (this.V = 0), (this.H = Promise.resolve()), (this.W = !0);
        }
        createInstance() {
          return new ft();
        }
        pushTask(t, n) {
          if (!this.W) return;
          const e = { action: t, name: n };
          0 === this.V && this.resetTasks(),
            (this.V = this.N.push(e)),
            (this.H = this.H.then(() => {
              if (this.N.includes(e) && this.W)
                return this.q(e)().then(() => {
                  this.N.shift(), (this.V -= 1);
                });
            }));
        }
        disable() {
          (this.W = !1), this.resetTasks();
        }
        resetTasks() {
          (this.H = Promise.resolve()), (this.N = []), (this.V = 0);
        }
        q(t) {
          return function () {
            return t.action().catch(() => {});
          };
        }
        get tasksInFlight() {
          return this.V;
        }
        hasTaskInQueue(t) {
          return this.N.some((n) => n.name === t);
        }
        removeTask(t) {
          console.log(this.N),
            (this.N = this.N.filter((n, e) => (n.name === t && 0 == e ? (console.error("Cannot filter active task"), !0) : n.name !== t))),
            (this.V = this.N.length),
            console.log(this.N);
        }
      }
      const pt = new ft();
      var vt = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      const gt = new (class {
        getItemsAsync(t) {
          return vt(this, void 0, void 0, function* () {
            return new Promise((n, e) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? e(new Error(X)) : n(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return vt(this, void 0, void 0, function* () {
            return new Promise((t, n) => {
              chrome.storage.local.get(null, (e) => {
                chrome.runtime.lastError ? n(new Error(X)) : t(e);
              });
            });
          });
        }
      })();
      Object.freeze(gt);
      const yt = gt;
      var Ft,
        mt = new Uint8Array(16);
      function Ct() {
        if (
          !Ft &&
          !(Ft =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Ft(mt);
      }
      const wt = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const Et = function (t) {
        return "string" == typeof t && wt.test(t);
      };
      for (var bt = [], jt = 0; jt < 256; ++jt) bt.push((jt + 256).toString(16).substr(1));
      const _t = function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          e = (
            bt[t[n + 0]] +
            bt[t[n + 1]] +
            bt[t[n + 2]] +
            bt[t[n + 3]] +
            "-" +
            bt[t[n + 4]] +
            bt[t[n + 5]] +
            "-" +
            bt[t[n + 6]] +
            bt[t[n + 7]] +
            "-" +
            bt[t[n + 8]] +
            bt[t[n + 9]] +
            "-" +
            bt[t[n + 10]] +
            bt[t[n + 11]] +
            bt[t[n + 12]] +
            bt[t[n + 13]] +
            bt[t[n + 14]] +
            bt[t[n + 15]]
          ).toLowerCase();
        if (!Et(e)) throw TypeError("Stringified UUID is invalid");
        return e;
      };
      const xt = function (t, n, e) {
        var i = (t = t || {}).random || (t.rng || Ct)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), n)) {
          e = e || 0;
          for (var r = 0; r < 16; ++r) n[e + r] = i[r];
          return n;
        }
        return _t(i);
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
      var At = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      const kt = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? q.includes(t.split("?newIconUrl=")[1]) && W.includes(t.split("?newIconUrl=")[0]) : q.includes(t))
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
        K(t) {
          return At(this, void 0, void 0, function* () {
            try {
              yield it.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return At(this, void 0, void 0, function* () {
            const t = yield yt.getAllItemsAsync(),
              n = kt.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(n) && this.K(n), n;
          });
        }
        validateStorageData(t) {
          const n = "object" == typeof t ? Object.assign({}, t) : {};
          return (
            n.userIcon && n.userIcon.includes("?newIconUrl=") && (n.userIcon = n.userIcon.split("?newIconUrl=")[1]),
            this.isUserIconValid(n.userIcon) || (n.userIcon = this.getDefaultUserIcon()),
            this.isUserNickNameValid(n.userNickname) || (n.userNickname = this.getDefaultUserNickName()),
            n
          );
        }
      })();
      Object.freeze(kt);
      const Qt = kt,
        It = 1e3,
        St = 72e5,
        Tt = 12e4,
        Mt = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        $t = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        Pt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Rt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function Ot(t, n) {
        Lt();
        const e = n
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${G}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${G}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", e),
          jQuery("#alert-x-btn").click(() => {
            Lt();
          }),
          n &&
            jQuery("#alert-return-btn").click(() => {
              Lt(), (window.location.href = n);
            });
      }
      function Lt() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const Ut = { showAlert: !1 },
        Gt = {
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
      var Vt = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      class Ht {
        constructor(t) {
          (this.Y = this.J.bind(this)),
            (this.X = this.resetIdleTimer.bind(this)),
            (this.Z = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.tt(t.data);
            }),
            (this.nt = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.et = (t) => {
              this.it.onVideoClick();
              const n = t.target;
              let e = "" !== n.id ? n.id : n.className;
              e = n.getAttribute("data-tp-id") ? n.getAttribute("data-tp-id") : e;
              const i = { name: "user_click", component: { name: e, type: n.nodeName, origin: "other" } },
                r = new k(S, Q, i);
              $.m(r),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.it.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.it.toggleGIFs();
            }),
            (this.tt = (t) => {
              console.log("on Emoji Click");
              const n = jQuery("#chat-input")[0],
                e = t.detail.unicode,
                i = new k(S, Q, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: e } });
              $.m(i);
              const r = new k(S, Q, { eventType: `emoji-click-${e}`, sessionId: this.it.getSessionId() });
              $.m(r), pt.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && n.lastChild) {
                const t = document.createRange();
                t.setStartAfter(n.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.it.focusChat(), this.rt(e);
              n.scrollHeight - n.scrollTop <= n.clientHeight + 40 && (n.scrollTop = n.scrollHeight), this.ut(), this.it.onInputChange();
            }),
            (this.it = t);
        }
        ot() {
          M("Idle Warning called"), Ot($t);
          const t = new k(S, Q, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          $.m(t);
          const n = new k(S, Q, { eventType: "idle-warn-2hr", sessionId: this.it.getSessionId() });
          $.m(n), (this.st = setTimeout(this.ct.bind(this), Tt));
        }
        ct() {
          M("Idle kick called");
          const t = new k(S, Q, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            n = new Dt(S, Q, Gt);
          $.m(t), $.m(n);
        }
        resetIdleTimer() {
          this.ht && clearTimeout(this.ht), this.st && (Lt(), clearTimeout(this.st)), (this.ht = setTimeout(this.ot.bind(this), St));
        }
        Dt() {
          (this.ht = setTimeout(this.ot.bind(this), St)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.X();
            }),
            (window.onfocus = () => this.X()),
            (window.onmousedown = () => this.X()),
            (window.ontouchstart = () => this.X()),
            (window.onkeydown = () => this.X());
        }
        dt() {
          this.ht && clearTimeout(this.ht),
            this.st && clearTimeout(this.st),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          M("Listening for chat events"), this.Dt(), this.ft(), this.initWindowListeners();
        }
        stopListening() {
          this.vt(), this.dt(), this.yt();
        }
        J() {
          this.it.clearUnreadCount();
        }
        Ft(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const n = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, n);
          }
          this.it.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.Y),
            window.addEventListener("message", this.Z),
            document.addEventListener("dragstart", this.Ct.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.it.onFullScreen),
            document.addEventListener("fullscreenchange", this.it.onFullScreen),
            document.addEventListener("keydown", this.nt, !0),
            document.addEventListener("emoji-click", this.tt),
            document.addEventListener("click", this.et);
        }
        ft() {
          jQuery(window).on("focus", this.Y),
            jQuery("#party-tab").on("click", this.it.togglePartyTab.bind(this.it)),
            jQuery("#friends-tab").on("click", this.it.toggleFriendsTab.bind(this.it)),
            jQuery(".user-icon").on("click", this.it.toggleLargeUserIconButton.bind(this.it)),
            jQuery("#user-icon").on("click", this.it.toggleIconContainer.bind(this.it)),
            jQuery("#link-icon").on("click", this.it.linkIconListener.bind(this.it)),
            jQuery("#reset-icon").on("click", this.it.resetIconListener.bind(this.it)),
            jQuery(".image-button").on("click", this.it.userIconSelectorListener.bind(this.it)),
            jQuery("#chat-input-container").on("keydown", this.it.onChatKeyDown.bind(this.it)),
            jQuery("#nickname-edit").on("keydown", this.it.onChatKeyDown.bind(this.it)),
            jQuery("#chat-input").on("keypress", this.it.onChatKeyPress.bind(this.it)),
            jQuery("#chat-input").on("input", this.it.onInputChange.bind(this.it)),
            jQuery("#gif-search").on("keyup", this.it.onGifSearch.bind(this.it)),
            jQuery("#saveChanges").on("click", this.it.saveChangesListener.bind(this.it)),
            jQuery("#cancelNickname").on("click", this.it.cancelNicknameListener.bind(this.it)),
            jQuery("#chat-wrapper").on("mouseup", this.it.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.it.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.it.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.it.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.it.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.it.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.it.onChatKeyUp.bind(this.it)),
            jQuery("#emoji-picker-btn").on("click", this.it.addEmojiPicker.bind(this.it)),
            jQuery("#gif-btn").on("click", this.it.addGifPicker.bind(this.it)),
            jQuery(".gif-img").on("click", this.it.clickGif.bind(this.it)),
            jQuery(".gif-results").on("click", "video, img", this.it.clickGif.bind(this.it)),
            jQuery("#category-container").on("click", "video", this.it.clickGif.bind(this.it)),
            jQuery("#gif-input-back").on("click", this.it.resetGif.bind(this.it)),
            jQuery("#reaction-btn").on("click", this.it.addReactionTab.bind(this.it)),
            jQuery("#chat-input-container").on("click", this.wt.bind(this)),
            jQuery("#chat-input").on("input", this.ut.bind(this)),
            jQuery("#chat-input").on("drop", this.Et.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.it.onScrollToBottom.bind(this.it)),
            this.bt(),
            document.addEventListener("keydown", this.nt.bind(this), !0),
            this.it.initCustomListeners();
        }
        bt() {
          jQuery("#tp-heart-button").on("click", () => {
            this.it.onReactionClicked(Nt.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.it.onReactionClicked(Nt.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.it.onReactionClicked(Nt.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.it.onReactionClicked(Nt.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.it.onReactionClicked(Nt.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.it.onReactionClicked(Nt.FIRE);
            });
        }
        ut() {
          var t, n;
          const e =
              null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                ? t
                : parseInt(jQuery("#bottom-chat-controls").css("height")),
            i = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
            r =
              (null !== (n = jQuery("#chat-input").outerHeight(!0)) && void 0 !== n ? n : parseInt(jQuery("#chat-input").css("height"))) +
              e +
              i;
          jQuery("#emoji-picker-container").css({ bottom: r }), jQuery("#gif-picker-container").css({ bottom: r });
        }
        Et(t) {
          t.preventDefault();
        }
        Ct(t) {
          t.preventDefault();
        }
        wt(t) {
          t.target === jQuery("#chat-input")[0] && this.it.focusChat();
        }
        rt(t) {
          let n, e;
          if (window.getSelection && ((n = window.getSelection()), n && n.getRangeAt && n.rangeCount)) {
            (e = n.getRangeAt(0)), e.deleteContents();
            const i = document.createElement("span");
            (i.className = "inTextEmoji"), (i.innerHTML = t);
            const r = document.createDocumentFragment();
            let u, o;
            for (; (u = i.firstChild); ) o = r.appendChild(u);
            e.insertNode(r), o && ((e = e.cloneRange()), e.setStartAfter(o), e.collapse(!1), n.removeAllRanges(), n.addRange(e));
          }
        }
        jt(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        _t(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let n = 0; n < t.length; n++) {
            const e = t[n];
            if (!this.jt(e)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var n;
          return Vt(this, void 0, void 0, function* () {
            const e = yield yt.getItemsAsync([l]);
            let i = null !== (n = e.recentlyUsedEmojiMap) && void 0 !== n ? n : f;
            this._t(i) || (i = f),
              Array.isArray(i) &&
                (t && ((i = i.filter((n) => n.unicode != t.unicode)), i.unshift(t), (i = i.slice(0, 24))),
                yield it.setItemsAsync({ [l]: i }),
                window.postMessage({ type: "TP_FREQ_USED", data: i }, "*"));
          });
        }
        yt() {
          jQuery(window).off("focus", this.Y),
            document.removeEventListener("emoji-click", this.tt),
            document.removeEventListener("keydown", this.nt, !0),
            document.removeEventListener("click", this.et),
            window.removeEventListener("message", this.Z),
            document.removeEventListener("webkitfullscreenchange", this.it.onFullScreen),
            document.removeEventListener("fullscreenchange", this.it.onFullScreen);
        }
        vt() {
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
          (this.it = t),
            (this.xt = []),
            (this.Bt = 0),
            (this.At = document.title),
            (this.kt = 0),
            (this.Qt = new Map()),
            (this.It = new Map()),
            (this.St = []),
            (this.Tt = []),
            (this.Mt = ""),
            M("Message Controller");
        }
        $t(t, n, e, i) {
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              i ? `<img src="${Y(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              i ? `<h3 data-tp-id="chat_history_container-nickname">${n}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${Y(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        Pt(t, n, e, i) {
          const r = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            u = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            o = this.it.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              i ? `<img src="${Y(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              i ? `<h3 data-tp-id="chat_history_container-nickname">${n}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${Y(
                    e.gifObject.media.full.url
                  )}"  height="${r}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${Y(
                    e.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        Rt(t, n, e) {
          return jQuery(
            `\n            <div class="msg ${
              !e && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              e ? `<img src="${Y(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              n.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${Y(
              n.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Ot(t, n, e) {
          const i = 200 / (n.gifObject.media.full.dims[0] / n.gifObject.media.full.dims[1]),
            r = 200 / (n.gifObject.media.fullMobile.dims[0] / n.gifObject.media.fullMobile.dims[1]),
            u = this.it.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !e && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              e ? `<img src="${Y(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${Y(
                    n.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${i}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${Y(
                    n.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${r}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        Lt(t, n, e, i, r) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.U = n.permId), (u.Ut = e), (u.Gt = i), (u.Nt = n), (u.Vt = r);
        }
        reloadMessages() {
          this.it.queueMessageForFrame(Bt.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.xt));
          for (let n = 0; n < t.length; n++) {
            const e = t[n];
            "gifObject" in e ? this.addGif(e, n) : this.addMessage(e, !1, n);
          }
          this.xt = t;
        }
        Ht(t, n) {
          if (Math.abs(t.timestamp - n.timestamp) > 6e4) return !1;
          if (t.permId !== n.permId) return !1;
          if ("isSystemMessage" in n && n.isSystemMessage && (n.body.includes("joined") || n.body.includes("left"))) return !1;
          if ("gifObject" in t) {
            if ("isSystemMessage" in n && n.isSystemMessage) return !1;
          } else {
            if (t.isSystemMessage && (t.body.includes("joined") || t.body.includes("left"))) return !1;
            if ("gifObject" in n) {
              if (t.isSystemMessage) return !1;
            } else if (t.isSystemMessage !== n.isSystemMessage) return !1;
          }
          return !0;
        }
        addMessage(t, n, e) {
          if (
            (void 0 === e && (e = this.xt.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.Qt.has(t.permId)))
          )
            return;
          if (0 === e && t.isSystemMessage && t.body.includes("joined")) return;
          n &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const i = this.xt.slice(-1).pop(),
            r = !(void 0 !== i && e > 0) || !this.Ht(i, t);
          this.xt.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            s = this.getUserNickname(u.permId, u.userNickname);
          this.it.queueMessageForFrame(Bt.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: s });
          const a = "" === s ? this.Rt(o, u, r) : this.$t(o, s, u, r);
          this.Lt(a, u, o, s, r), this.scrollToBottom(), this.Wt();
        }
        addGif(t, n) {
          void 0 === n && (n = this.xt.length);
          const e = this.xt.slice(-1).pop(),
            i = !(void 0 !== e && n > 0) || !this.Ht(e, t);
          this.xt.push(t);
          const r = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.it.queueMessageForFrame(Bt.ADD_MESSAGE, { originalMessage: t, userIcon: r, userNickname: u });
          const o = "" === u ? this.Ot(r, t, i) : this.Pt(r, u, t, i);
          (o[0].zt = !0), this.Lt(o, t, r, u, i), C(100)().then(this.scrollToBottom.bind(this)), this.Wt();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.Bt > 0 && ((this.Bt = 0), (document.title = this.At));
        }
        Wt() {
          (this.Bt += 1), (this.kt += 1), document.hasFocus() || (document.title = "(" + String(this.Bt) + ") " + this.At);
        }
        getUserIconURL(t, n = "") {
          if (!this.Qt.has(t)) {
            const e = this.parseIconSrc(n),
              i = void 0 !== e ? e : this.qt();
            this.Qt.set(t, i), this.Tt.push(i);
          }
          return this.Qt.get(t);
        }
        parseIconSrc(t) {
          const n = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return q.includes(n)
            ? chrome.runtime.getURL("img/icons/" + t)
            : W.includes(e)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, n = "") {
          return this.It.has(t) || (this.It.set(t, n), this.St.push(n)), Y(this.It.get(t));
        }
        qt() {
          let t = chrome.runtime.getURL("img/icons/General/" + W[Math.floor(Math.random() * W.length)]);
          if (this.Tt.length < K.General.length)
            for (; this.Tt.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + W[Math.floor(Math.random() * W.length)]);
          return t;
        }
        Kt(t) {
          const n = t[0],
            e = n.U;
          let i = n.Ut;
          e && this.getUserIconURL(e) !== i && ((i = this.getUserIconURL(e)), t.find("img").attr("src", i), (n.Ut = i));
          const r = n.Gt;
          if (e && i) {
            const u = this.getUserNickname(e);
            if (u !== r) {
              const r = n.Nt,
                o = n.Vt;
              let s;
              if (
                (n.zt && r && "gifObject" in r && o && (s = "" == u ? this.Ot(i, r, o) : this.Pt(i, u, r, o)),
                !n.zt && r && "isSystemMessage" in r && o && (s = "" == u ? this.Rt(i, r, o) : this.$t(i, u, r, o)),
                s)
              ) {
                t.replaceWith(s);
                const n = s[0];
                (n.U = e), (n.Ut = i), (n.Gt = u), (n.Nt = r), (n.Vt = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.Mt = t), this.it.queueMessageForFrame(Bt.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.Mt), jQuery(".user-icon img").attr("src", this.Mt);
          const t = jQuery(".msg");
          for (let n = 0; n < t.length; n++) this.Kt(jQuery(t[n]));
          const n = jQuery(".msg-container");
          for (let t = 0; t < n.length; t++) this.Kt(jQuery(n[t]));
          this.it.isChatFrameActive() && this.reloadMessages();
        }
        Yt(t) {
          let n = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const e = t.split("?newIconUrl="),
                i = e[1],
                r = e[0];
              q.includes(i)
                ? (n = chrome.runtime.getURL(`img/icons/${i}`))
                : W.includes(r) && (n = chrome.runtime.getURL(`img/icons/General/${r}`));
            } else
              q.includes(t)
                ? (n = chrome.runtime.getURL(`img/icons/${t}`))
                : W.includes(t) && (n = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === n) {
            let t = K.General.filter((t) => !this.Tt.includes(t));
            0 === t.length && (t = K.General);
            const e = t[Math.floor(Math.random() * t.length)];
            n = chrome.runtime.getURL(`/img/icons/General/${e}`);
          }
          return n;
        }
        setUserIcon(t, n) {
          const e = this.Yt(n);
          this.Qt.set(t, e), this.Tt.push(e), this.renderSidebar();
        }
        setUserNickname(t, n) {
          const e = Y(n);
          this.It.set(t, e), this.St.push(e), this.renderSidebar();
        }
        updateUserData(t, n, e) {
          const i = this.Yt(n);
          this.Qt.set(t, i), this.Tt.push(i), this.It.set(t, e), this.St.push(e), this.renderSidebar();
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
          const t = new k(S, Q, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          $.m(t);
          const n = { eventType: "review-shown-chrome", sessionId: this.it.getSessionId() },
            e = new k(S, Q, n);
          $.m(e),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new k(S, Q, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              $.m(t);
              const n = { eventType: "review-clicked-chrome", sessionId: this.it.getSessionId() },
                e = new k(S, Q, n);
              $.m(e);
            });
        }
      }
      class zt {
        constructor(t) {
          (this.Jt = !1), (this.Xt = !1), (this.Zt = !1), (this.it = t);
        }
        setupPresenceIndicator() {
          (this.Jt = !1), (this.Xt = !1), (this.Zt = !1), this.tn();
        }
        nn() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Jt = t), this.tn();
        }
        setBufferingPresenceVisible(t) {
          (this.Xt = t), this.tn();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Zt = t), this.tn();
        }
        getWatchingAdsVisible() {
          return this.Zt;
        }
        rn() {
          return this.Zt
            ? "People are watching ads..."
            : this.Jt && this.Xt
            ? "People are typing and buffering..."
            : this.Jt
            ? "People are typing..."
            : this.Xt
            ? "People are buffering..."
            : "";
        }
        tn() {
          const t = this.rn();
          this.nn().text(t), this.it.queueMessageForFrame(Bt.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var qt = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      var Kt,
        Yt,
        Jt = function (t, n, e, i) {
          return new (e || (e = Promise))(function (r, u) {
            function o(t) {
              try {
                a(i.next(t));
              } catch (t) {
                u(t);
              }
            }
            function s(t) {
              try {
                a(i.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var n;
              t.done
                ? r(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(o, s);
            }
            a((i = i.apply(t, n || [])).next());
          });
        };
      class Xt extends class {
        constructor() {
          (this.un = !1),
            (this.sn = 1),
            (this.an = ""),
            (this.cn = ""),
            (this.hn = "0"),
            (this.Dn = ""),
            (this.ln = !0),
            (this.dn = !1),
            (this.pn = 0),
            (this.vn = []),
            (this.gn = new ft()),
            (this.yn = !1),
            (this.Fn = void 0),
            (this.mn = !0),
            (this.Cn = this.wn()),
            (this.En = this.wn()),
            (this.bn = !1),
            (this.jn = !1),
            (this._n = []),
            (this.logEvent = (t) => {
              const n = new k(S, Q, t);
              $.m(n);
            }),
            (this.checkInitReactionContainer = () => {
              yt.getItemsAsync([u]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.xn) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.gn.pushTask(() => it.setItemsAsync({ [u]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                null != document.fullscreenElement
                  ? (this.logEvent({ name: "fullscreen_enter" }),
                    this.wn() && ((this.Cn = !1), this.setChatVisible(this.shouldChatBeVisible())))
                  : (this.logEvent({ name: "fullscreen_exit" }),
                    this.wn() && ((this.Cn = this.wn()), jQuery("#chat-wrapper").hide(), this.setChatVisible(!1, !1), this.removeChat())),
                null === (t = this.xn) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.Bn = !1),
            (this.An = new Ht(this)),
            (this.kn = new zt(this)),
            (this.Qn = new Wt(this)),
            (this.In = void 0),
            (this.Sn = void 0),
            (this.Tn = !1);
        }
        setPageControls(t) {
          this.xn = t;
        }
        fixPageControls() {
          var t, n;
          null === (t = this.xn) || void 0 === t || t.enablePartyIcons(), null === (n = this.xn) || void 0 === n || n.setChatButtons();
        }
        setChatVisible(t, n = !0) {
          return qt(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            n && (this.ln = t), t && !this.Mn() && this.reloadChat();
          });
        }
        $n(t, n) {
          const e = new k(S, Q, { name: "error", action: { reason: n, description: t } });
          $.m(e);
        }
        getChatWindowVisible() {
          return this.En;
        }
        setChatWindowActive(t) {
          this.Cn = t;
        }
        isChatFrameActive() {
          return this.mn;
        }
        isPartyWindowsActive() {
          return this.Cn;
        }
        shouldChatBeVisible() {
          return this.ln;
        }
        incrementEmojiCount() {
          this.pn++;
        }
        resetEmojiCount() {
          this.pn = 0;
        }
        getEmojiCount() {
          return this.pn;
        }
        setChatFrameReady(t) {
          this.yn && this.Pn(), (this.yn = !0), (this.Rn = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, n) {
          this.gn.pushTask(() =>
            qt(this, void 0, void 0, function* () {
              this.On(t, n);
            })
          );
        }
        On(t, n) {
          return qt(this, void 0, void 0, function* () {
            const e = this.Rn,
              i = { type: t, data: n, target: "TP_Sidebar", tabId: e, sender: S };
            $.m(i);
          });
        }
        Ln() {
          var t;
          return qt(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield w(() => this.yn && null != this.Rn, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.Fn && this.Un(this.Fn),
                null === (t = this.xn) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.$n("Sidewindow didn't load in time", t);
            }
          });
        }
        wn() {
          return !1;
        }
        Gn() {
          return qt(this, void 0, void 0, function* () {
            yield $.m(new B(S, Q, A.LOAD_CHAT_WINDOW)), console.log(this.Rn);
          });
        }
        resetChatWindow(t = !1) {
          var n;
          return qt(this, void 0, void 0, function* () {
            yield $.m(new B(S, Q, A.RESET_CHAT_WINDOW)),
              console.log(this.Rn),
              (this.En = !0),
              (this.ln = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.bn && t && (this.resetIconListener(), null === (n = this.xn) || void 0 === n || n.setResetChatButton());
          });
        }
        hideChatWindow() {
          return qt(this, void 0, void 0, function* () {
            yield $.m(new B(S, Q, A.HIDE_CHAT_WINDOW)), (this.En = !1), (this.ln = !1);
          });
        }
        Nn() {
          return qt(this, void 0, void 0, function* () {
            this.Gn(), this.gn.pushTask(this.Ln.bind(this));
          });
        }
        loadInitData(t) {
          this.Fn = t;
        }
        Un(t) {
          var n;
          return qt(this, void 0, void 0, function* () {
            const e = Object.assign({}, t);
            if (((e.iconMap = K), (e.extensionBaseUrl = chrome.runtime.getURL("")), e.storageData)) {
              const t = yield Qt.getValidatedChromeStorageDataAsync();
              e.storageData = t;
            }
            this.queueMessageForFrame(Bt.LOAD_INIT_DATA, e);
            const i = yield this.getVideoTitle();
            this.queueMessageForFrame(Bt.SET_PAGE_TITLE, { pageTitle: i }),
              this.queueMessageForFrame(Bt.SET_USER_LIST, this._n),
              this.queueMessageForFrame(Bt.UPDATE_SETTINGS, {
                userSettings: null === (n = this.Vn) || void 0 === n ? void 0 : n.userSettings
              });
          });
        }
        Pn() {
          return qt(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.Fn && (yield this.Un(this.Fn)), this.Vn)) {
              const t = this.Qn.getUserIconURL(this.Vn.permId, this.Vn.userIcon);
              this.queueMessageForFrame(Bt.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(Bt.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Hn() {
          return qt(this, void 0, void 0, function* () {
            this.Wn(),
              yield C(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.zn(),
              this.kn.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        qn(t) {
          this.An.initWindowListeners(), this.wn() && this.Nn(), this.gn.pushTask(this.Ln.bind(this)), Lt(), (this.Vn = new ot(t));
          const n = this.Qn.getUserIconURL(this.Vn.permId, this.Vn.userIcon);
          this.Qn.setUserIconUrl(n),
            this.Qn.renderSidebar(),
            this.Mn() && this.removeChat(),
            (this.Bn = !0),
            this.Kn(),
            this.wn()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Hn(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return qt(this, void 0, void 0, function* () {
            "true" !== (yield yt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.Qn.addYoutubePromo(), it.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.Fn = t;
          const n = Object.assign({}, t);
          (n.iconMap = K),
            (n.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(n),
            this.queueMessageForFrame(Bt.LOAD_INIT_DATA, n);
        }
        reloadChat() {
          return qt(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.Mn() ||
                this.isPartyWindowsActive() ||
                (this.Wn(),
                yield C(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.ln),
                this.addIconSelector(),
                this.Yn(),
                this.zn(),
                this.kn.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const n = new Dt(S, Q, t);
          $.m(n);
        }
        Mn() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.Qn.clearUnreadCount();
        }
        Jn() {
          return qt(this, void 0, void 0, function* () {
            try {
              yield w(() => null !== document.querySelector("#chat-history") || this.Cn || (this.yn && this.mn), 1e4)();
            } catch (t) {
              this.$n("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, n = !1) {
          this.gn.pushTask(() =>
            qt(this, void 0, void 0, function* () {
              yield this.Jn(), this.Qn.addMessage(t, n);
            })
          );
        }
        addGif(t) {
          this.gn.pushTask(() =>
            qt(this, void 0, void 0, function* () {
              yield this.Jn(), this.Qn.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.Qn.reloadMessages();
        }
        scrollToBottom() {
          this.Qn.scrollToBottom();
        }
        addReviewMessage() {
          this.Qn.addReviewMessage(), (this.Tn = !0);
        }
        get showingReveiwMessage() {
          return this.Tn;
        }
        set shouldReturnToVideo(t) {
          this.bn = t;
        }
        onBufferingMessage(t) {
          this.gn.pushTask(() =>
            qt(this, void 0, void 0, function* () {
              yield this.Jn(), this.kn.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.gn.pushTask(() =>
            qt(this, void 0, void 0, function* () {
              yield this.Jn(), this.kn.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.gn.pushTask(() =>
            qt(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Jn(), this.kn.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.kn.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var n;
          null === (n = this.Vn) || void 0 === n || n.saveUserSettings(t), t.shouldBroadcast && this.Xn(this.Zn(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.Qn.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Vn)) {
            const t = this.Qn.getUserIconURL(this.Vn.permId, this.Vn.userIcon);
            this.Qn.setUserIconUrl(t), this.Qn.renderSidebar();
          }
        }
        zn() {
          w(() => this.Mn(), 1e4)().then(() => {
            this.An.startListening();
          });
        }
        Yn() {
          this.An.stopListening(), this.te && (clearTimeout(this.te), (this.dn = !1));
        }
        teardown() {
          (this.Bn = !1),
            (this.cn = void 0),
            (this.ne = void 0),
            this.Yn(),
            jQuery("[tpInjected]").remove(),
            this.removeChat(),
            this.setChatVisible(!1),
            console.log("teardown");
        }
        focusChat() {
          jQuery("#chat-input")[0].focus();
        }
        showEmojiPicker() {
          var t, n;
          jQuery("#gif-picker-container").is(":hidden") || this.toggleGIFs(), jQuery("#emoji-picker-btn-icon").css({ opacity: "1" });
          const e =
              null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                ? t
                : parseInt(jQuery("#bottom-chat-controls").css("height")),
            i = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
            r =
              (null !== (n = jQuery("#chat-input").outerHeight(!0)) && void 0 !== n ? n : parseInt(jQuery("#chat-input").css("height"))) +
              e +
              i;
          jQuery("#emoji-picker-container").css({ bottom: r });
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
            this.gn.pushTask(() => it.setItemsAsync({ [u]: !1 }));
        }
        onOpenGifPicker() {
          var t, n;
          return qt(this, void 0, void 0, function* () {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker(),
              jQuery("#gif-results-left")[0].innerHTML || this.fetchGIFs(),
              jQuery("#gif-btn-icon").css({ opacity: "1" });
            const e =
                null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                  ? t
                  : parseInt(jQuery("#bottom-chat-controls").css("height")),
              i = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
              r =
                (null !== (n = jQuery("#chat-input").outerHeight(!0)) && void 0 !== n ? n : parseInt(jQuery("#chat-input").css("height"))) +
                e +
                i;
            jQuery("#gif-picker-container").css({ bottom: r });
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
          let n = !1;
          t && Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 10 && (n = !0),
            jQuery("#reaction-holder").slideToggle(0, () => {
              const t = jQuery("#reaction-holder").is(":hidden");
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && n && this.Qn.scrollToBottom();
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
          const n = new k(S, Q, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          $.m(n), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const n = new k(S, Q, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          $.m(n), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const n = new k(S, Q, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          $.m(n), this.toggleReactions();
        }
        Kn() {
          if (
            (M("Set Chat Html called"),
            (this.ee = H()),
            (this.ee = this.ee.replace(/{EXTENSION_LOGO}/g, Y(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Vn)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          this.ee = this.ee.replace(/{CHAT_URL}/g, `${c}?t=${Date.now()}`);
          for (const t of h) {
            const n = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              e = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.ee = this.ee.replace(n, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.ee = this.ee.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.ee = this.ee.replace(/{USER_NICKNAME}/g, this.Vn.userNickname ? Y(this.Vn.userNickname) : "Add a nickname")),
            (this.ee = this.ee.replace(/{USER_ICON}/g, this.Qn.getUserIconURL(this.Vn.permId, this.Vn.userIcon))),
            (this.ee = this.ee.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.ee = this.ee.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.ee = this.ee.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.ee = this.ee.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.ee = this.ee.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.ee = this.ee.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.ee = this.ee.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.ee = this.ee.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.ee = this.ee.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, n, e, i;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.jn ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.dn && jQuery("#chat-ad-holder").show(),
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
                null !== (n = null === (t = this.Vn) || void 0 === t ? void 0 : t.userNickname) && void 0 !== n ? n : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (i = null === (e = this.Vn) || void 0 === e ? void 0 : e.userNickname) && void 0 !== i ? i : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.jn = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.jn = !1);
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
          if (null === (t = this.ie) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.ie.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.an = t;
        }
        setMessageForwarder(t) {
          this.ie = t;
        }
        setSessionId(t) {
          this.cn = t;
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
              const n = t.userSettings,
                e = this.Qn.getUserIconURL(t.permId, n.userIcon),
                i = this.Qn.getUserNickname(t.permId, n.userNickname);
              t.parsedData = { userIconUrl: e, userNickname: i };
            }
          }),
            (this._n = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(Bt.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.ne = t;
        }
        getSessionCreated() {
          return this.ne;
        }
        getSessionId() {
          return this.cn;
        }
        getPartyUrl() {
          return this.an;
        }
        userIconSelectorListener(t) {
          const n = jQuery(t.currentTarget).data("icon");
          n &&
            (M("userIconSelector button clicked: " + n),
            this.Vn &&
              (this.Vn.saveUserIcon(n),
              this.queueMessageForFrame(Bt.UPDATE_SETTINGS, { userSettings: this.Vn.userSettings }),
              this.Xn(this.Zn(this.Vn.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Xn(t, n) {
          $.m(t).then(n);
        }
        re(t) {
          return new lt(S, Q, { reactionType: t });
        }
        ue(t) {
          return new dt(S, Q, { gifObject: t });
        }
        oe(t) {
          return new ct(S, Q, { body: t });
        }
        se(t) {
          return new at(S, Q, { typing: t });
        }
        Zn(t) {
          return new ht(S, Q, { userSettings: t });
        }
        ae(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction()) return;
          const n = t.reactionType,
            e = this.getReactionContainer();
          if (e) {
            const t = Math.floor(40 * Math.random()) + 40,
              i = e[0].offsetWidth - (this.shouldAddReactionSpace() ? 340 : 0) - t,
              r = Math.floor(Math.random() * i) + (this.shouldAddReactionSpace() ? 340 : 0),
              u = this.ae(n),
              o = Math.ceil(3 * Math.random()),
              s = jQuery(`<img class="on-screen-reaction on-screen-reaction-${o}" src='${u}' />`);
            s.css("right", `${r}px`),
              s.css("width", `${t}px`),
              s.css("height", `${t}px`),
              e.append(s),
              setTimeout(() => {
                s.remove();
              }, 5e3);
          }
        }
        onReactionClicked(t) {
          console.log(t), this.Xn(this.re(t));
          const n = new k(S, Q, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          $.m(n);
          const e = new k(S, Q, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          $.m(e);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.An.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.$n("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let n = t.target.id;
          if (isNaN(n)) (n = "trending" === n ? "" : n), this.fetchGIFs(n), (jQuery("#gif-search")[0].value = n);
          else {
            const t = this.vn.find((t) => t.id === n);
            if (!t) return;
            const e = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Xn(this.ue(e), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const n = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                e = new k(S, Q, n);
              $.m(e);
              const i = new k(S, Q, { eventType: "gif-share", sessionId: this.getSessionId() });
              $.m(i);
            }),
              this.toggleGIFs();
          }
        }
        ce(t) {
          const n = document.createElement("video"),
            e = 124 / (t.media.preview.dims[0] / t.media.preview.dims[1]);
          return (
            (n.autoplay = !0),
            (n.loop = !0),
            (n.playsInline = !0),
            n.setAttribute("disablePictureInPicture", ""),
            n.setAttribute("disableRemotePlayback", ""),
            (n.src = t.media.preview.url),
            (n.muted = !0),
            (n.id = t.id),
            (n.height = e),
            (n.className = "gif-img"),
            n
          );
        }
        he(t) {
          const n = document.createElement("img"),
            e = 124 / (t.media.previewMobile.dims[0] / t.media.previewMobile.dims[1]);
          return (
            n.setAttribute("disablePictureInPicture", ""),
            n.setAttribute("disableRemotePlayback", ""),
            (n.src = t.media.previewMobile.url),
            (n.id = t.id),
            (n.height = e),
            (n.className = "gif-img"),
            n
          );
        }
        loadGIFs(t) {
          jQuery(".gif-placeholder").remove(),
            this.vn.push(...t.results),
            (this.hn = t.next),
            t.results.forEach((t) => {
              const n = this.shouldUseVideoGIF() ? this.ce(t) : this.he(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(n);
            }),
            this.sn < 6 && this.De(),
            setTimeout(() => {
              this.un = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return qt(this, void 0, void 0, function* () {
            const n = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.un) t.preventDefault();
            else if ("0" !== this.hn && n && this.sn < 6) {
              (this.sn += 1), (this.un = !0), t.preventDefault();
              const n = yield fetch(this.Dn + `&pos=${this.hn}`),
                e = yield n.json();
              this.loadGIFs(e);
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
          ["trending", "dance", "annoyed", "omg", "crazy", "shrug", "smile", "awkward", "ew", "surprised", "why", "ouch "].forEach((n) => {
            const e = document.createElement("div"),
              i = document.createElement("span");
            (i.id = "category-txt"), (i.innerHTML = n), (e.className = "tp-category-div");
            const r = document.createElement("video");
            (r.autoplay = !0),
              (r.src = "https://media.tenor.com/videos/166d7d5a1be3b0755e7f9e29ebefe2c3/mp4"),
              (r.className = "category-img"),
              (r.id = n),
              (r.loop = !0),
              e.appendChild(i),
              e.appendChild(r),
              t.appendChild(e);
          }),
            (jQuery("#category-container")[0].innerHTML = t.innerHTML);
        }
        le() {
          const t = [],
            n = [];
          for (let e = 0; e < 4; e++) {
            let e = Math.floor(4 * Math.random()) + 1;
            for (; n.includes(e); ) e = Math.floor(4 * Math.random()) + 1;
            n.push(e);
            const i = document.createElement("div");
            (i.className = `gif-placeholder gif-placeholder-${e} gif-img`), t.push(i);
          }
          return t;
        }
        De() {
          return qt(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.le()), jQuery("#gif-results-right")[0].append(...this.le());
          });
        }
        logShare(t, n) {
          return qt(this, void 0, void 0, function* () {
            const e = this.getClientLocale(),
              i = e ? `&locale=${e}` : "",
              r = `&id=${t}`,
              u = n && n.length > 0 ? `q=${n}` : "";
            yield fetch(`${o}/register-share?${u}${i}${r}`);
          });
        }
        fetchGIFs(t) {
          return qt(this, void 0, void 0, function* () {
            const n = yield this.getVideoTitle(),
              e = null == n ? void 0 : n.replace(/[^\w\s]/g, "");
            (this.sn = 1),
              (this.un = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.vn = []),
              this.De();
            const i = this.getClientLocale(),
              r = i ? `&locale=${i}` : "";
            let u = e ? `search-gifs?q=${e}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.Dn = `${o}/${u}${r}`);
            const s = yield fetch(`${o}/${u}${r}`),
              a = yield s.json();
            if (a.results && a.results.length > 0) this.loadGIFs(a);
            else if (!t) {
              const t = yield fetch(`${o}/trending_gifs?${r}`);
              this.Dn = `${o}/trending_gifs?${r}`;
              const n = yield t.json();
              this.loadGIFs(n);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const n = t.target.value;
          if ((void 0 !== this.Sn && clearTimeout(this.Sn), !n))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.Sn = setTimeout(() => {
              this.fetchGIFs(n);
            }, 500));
        }
        de(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.In ? this.Xn(this.se(!0)) : clearTimeout(this.In),
              (this.In = setTimeout(() => {
                (this.In = void 0), this.Xn(this.se(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const n = jQuery("#chat-input"),
              e = n[0].textContent;
            if (e && this.de(e)) {
              void 0 !== this.In && (clearTimeout(this.In), (this.In = void 0), this.Xn(this.se(!1))),
                n.prop("contenteditable", !1),
                this.Xn(this.oe(e.substring(0, 1500)), () => {
                  (n[0].textContent = ""), n.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return xt();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: e.trim()
                  }
                },
                i = new k(S, Q, t);
              $.m(i);
            } else t.stopImmediatePropagation(), t.preventDefault(), (n[0].textContent = ""), this.onInputChange();
          }
        }
        onInputChange() {
          const t = jQuery("#chat-input");
          if (t.length > 0) {
            const n = t[0].textContent;
            n && this.shouldShowIncreasedSize(n) ? t.addClass("tp-emoji-large") : t.removeClass("tp-emoji-large");
          }
          jQuery("#emoji-picker-container").css("bottom").length > 0 &&
            (jQuery("#emoji-picker-container").is(":hidden") || this.showEmojiPicker());
        }
        shouldShowIncreasedSize(t) {
          const n = t.replace(p, "").replace(/[\uFE0F]/g, ""),
            e = ((t || "").match(p) || []).length;
          return 0 === n.length && e <= 3 && e > 0;
        }
        saveChangesListener() {
          var t;
          const n = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          M("saveChanges button clicked: " + n),
            n !== (null === (t = this.Vn) || void 0 === t ? void 0 : t.userNickname) &&
              this.Vn &&
              (this.Vn.saveUserNickname(n),
              this.queueMessageForFrame(Bt.UPDATE_SETTINGS, { userSettings: this.Vn.userSettings }),
              this.Xn(this.Zn(this.Vn.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", n),
              jQuery("#nickname-edit").text(n)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.Bn;
        }
        addIconSelector() {
          Object.keys(K).forEach((t) => {
            if (J[t]()) {
              const n = K[t],
                e = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const i of n) this.fe(`${t}/${i}`, e, i);
              const i = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              e.appendTo(i), i.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            n = ((t || "").match(p) || []).length,
            e = t.replace(p, "");
          n <= 3 || e
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : n > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        fe(t, n, e) {
          jQuery(
            `\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL(
              "img/icons/" + t
            )}' data-tp-id="chat_container-new_icon_selection-${e}">\n            </a>\n        `
          )
            .appendTo(n)
            .data("icon", t);
        }
      } {
        constructor() {
          super(),
            (this.pe =
              "\n            #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n                position: absolute !important;\n                z-index: auto !important;\n            }\n\n            #tp-buttons-container {\n              top: 150px !important;\n              z-index: 1000 !important;\n            }\n        ");
        }
        getReactionContainer() {
          return jQuery(Xt.MAIN_ROOT_CONTROL);
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        getVideoTitle() {
          return Jt(this, void 0, void 0, function* () {});
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
        Wn() {
          this.ee &&
            (U()(".vjs-tech").after(
              (function (t, n = "") {
                return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${n}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                  "css/chat.css"
                )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
              })(this.ee, this.pe)
            ),
            jQuery(".evidon-consent-button").remove());
        }
        addVideoElementStyles() {
          this.getChatVisible() && console.log("here");
        }
        setChatVisible(t, n = !0) {
          const e = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Jt(this, void 0, void 0, function* () {
            e.setChatVisible.call(this, t, n),
              t
                ? (jQuery(".meta-overlay").css("width", "calc(100% - 340px)"),
                  jQuery(".vjs-tech").css("width", "calc(100% - 340px)"),
                  jQuery(".vjs-control-bar").css("width", "calc(100% - 340px)"),
                  U()("#tp-buttons-container").css("right", "370px"),
                  jQuery("#chat-wrapper").show(),
                  jQuery(Xt.MAIN_ROOT_CONTROL).addClass(N))
                : (jQuery(".meta-overlay").css("width", "100%"),
                  jQuery(".vjs-control-bar").css("width", "100%"),
                  jQuery(".vjs-tech").css("width", "100%"),
                  U()("#tp-buttons-container").css("right", "30px"),
                  jQuery("#chat-wrapper").hide(),
                  jQuery(Xt.MAIN_ROOT_CONTROL).removeClass(N));
          });
        }
      }
      (Xt.MAIN_ROOT_CONTROL = ".vjs_video_3"),
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
        })(Kt || (Kt = {}));
      class Zt extends st {
        constructor(t, n, e) {
          super(t, n, rt.GET_SESSION_DATA), (this.data = e);
        }
      }
      class tn {
        constructor() {
          (this.ve = this.ge.bind(this)), (this.ye = []), this.Fe();
        }
        addMessageListener(t) {
          this.ye.push(t);
        }
        removeMessageListener(t) {
          this.ye = this.ye.filter((t) => {});
        }
        Fe() {
          $.addListener(this.ve);
        }
        teardown() {
          (this.ye = []), $.removeListener(this.ve);
        }
        ge(t, n, e) {
          if (!this.Ce(t)) return !1;
          return !!this.we(t, n, e) || (e({}), !1);
        }
        Ce(t) {
          return t.target === S;
        }
        we(t, n, e) {
          let i = !1;
          return (
            this.ye.forEach((r) => {
              r.onMessage(t, n, e) && (i = !0);
            }),
            i
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
      })(Yt || (Yt = {}));
      var nn,
        en = function (t, n, e, i) {
          return new (e || (e = Promise))(function (r, u) {
            function o(t) {
              try {
                a(i.next(t));
              } catch (t) {
                u(t);
              }
            }
            function s(t) {
              try {
                a(i.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var n;
              t.done
                ? r(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(o, s);
            }
            a((i = i.apply(t, n || [])).next());
          });
        };
      class rn {
        constructor(t, n) {
          (this.it = t), (this.xn = n), M("Chat forwarder");
        }
        onMessage(t, n, e) {
          var i;
          switch (t.type) {
            case A.LOAD_SESSION: {
              const n = t;
              return this.Ee(n.data), !1;
            }
            case Yt.ON_MESSAGE: {
              const n = t;
              return this.Z(n), this.xn.onChatMessage(), !1;
            }
            case Yt.ON_BUFFER: {
              const n = t;
              return this.be(n), !1;
            }
            case Yt.ON_TYPING: {
              const n = t;
              return this.je(n), !1;
            }
            case Yt.ON_WATCHING_ADS: {
              const n = t;
              return this._e(n), !1;
            }
            case Yt.UPDATE_SETTINGS: {
              const n = t;
              return this.xe(n), !1;
            }
            case Yt.ON_REACTION: {
              const n = t;
              return this.Be(n), !1;
            }
            case Yt.ON_GIF: {
              const n = t;
              return this.Ae(n), !1;
            }
            case Yt.USER_LIST: {
              const n = t;
              return this.ke(n), !1;
            }
            case Yt.ON_WEB_RTC:
              return this.it.onWebRTC(t.data), !0;
            case Kt.SET_CHAT_VISIBLE: {
              const n = t;
              return this.Qe(n.data), e(), !1;
            }
            case Bt.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId;
              return console.log(t), this.it.setChatFrameReady(null != t ? t : 0), e(), !0;
            }
            case Bt.DISPLAY_MODAL: {
              const n = t.data;
              return console.log(n), !0;
            }
            case Bt.ON_UPDATE_SETTINGS: {
              const n = t.data;
              return this.it.doUpdateSettings(n), e(), !0;
            }
            case Bt.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return e(), !0;
            case Bt.SET_REACTIONS_ACTIVE: {
              const n = t.data;
              return this.it.setReactionsActive(n), e(), !0;
            }
            case Bt.RESET_VIEW:
              return this.it.resetChatWindow(!0), e(), !0;
            case Bt.ON_FOCUS:
              return this.it.onSidebarFocus(), e(), !0;
            case Bt.PREVIEW_REACTION: {
              const n = t.data;
              return this.it.showReaction(n), e(), !0;
            }
            case "onUpdateSettings": {
              const n = t.data;
              return this.it.doUpdateSettings(n), e(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.it.teardown();
        }
        Qe(t) {
          return en(this, void 0, void 0, function* () {
            this.it.isPartyWindowsActive()
              ? t.visible
                ? yield this.it.resetChatWindow()
                : yield this.it.hideChatWindow()
              : (yield this.it.setChatVisible(t.visible), this.it.fixPageControls());
          });
        }
        Ee(t) {
          const n = t.sessionCallbackData.sessionId,
            e = `${a}/join/${n}`;
          if (
            (this.it.loadInitData(t),
            this.it.setPartyUrl(e),
            this.it.setSessionId(n),
            this.it.qn(t.storageData),
            this.xn.onInitChat(),
            this.it.setSessionCreated(t.isCreate),
            this.it.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.it.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.it.addReviewMessage(),
            !t.isCreate)
          )
            for (const n of t.sessionCallbackData.messages) "gifObject" in n ? this.it.addGif(n) : this.it.addMessage(n, !0);
        }
        Z(t) {
          this.it.addMessage(t.data);
        }
        Be(t) {
          this.it.showReaction(t.data);
        }
        Ae(t) {
          this.it.addGif(t.data);
        }
        be(t) {
          this.it.onBufferingMessage(t.data);
        }
        je(t) {
          this.it.onTypingMessage(t.data);
        }
        _e(t) {
          this.it.onWatchingAdsMessage(t.data);
        }
        xe(t) {
          this.it.onUpdateSettingsMessage(t.data);
        }
        ke(t) {
          this.it.loadUserList(t.data.userList), this.it.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(nn || (nn = {}));
      class un extends st {
        constructor(t, n, e) {
          super(t, n, rt.BROADCAST), (this.data = e);
        }
      }
      class on extends x {
        constructor(t, n, e) {
          super(t, n, e), (this.type = e);
        }
      }
      class sn extends on {
        constructor(t, n) {
          super(t, n, nn.GET_SERVER_TIME);
        }
      }
      class an extends st {
        constructor(t, n, e) {
          super(t, n, rt.BROADCAST_NEXT_EPISODE), (this.data = e);
        }
      }
      class cn extends st {
        constructor(t, n, e) {
          super(t, n, rt.SET_BUFFERING), (this.data = e);
        }
      }
      class hn extends st {
        constructor(t, n, e) {
          super(t, n, rt.SET_WATCHING_ADS), (this.data = e);
        }
      }
      const Dn = "PING",
        ln = "SYNC",
        dn = "BROADCAST";
      class fn extends B {
        constructor(t, n, e) {
          super(t, n, A.STAY_ALIVE), (this.data = e);
        }
      }
      var pn = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      const vn = new (class {
        getRedirectDataForTabAsync(t) {
          return pn(this, void 0, void 0, function* () {
            const n = (yield yt.getItemsAsync([d])).redirectDataMap,
              e = this.Ie(t);
            if (n && n[e]) {
              const t = n[e];
              if (this.Se(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return pn(this, void 0, void 0, function* () {
            const n = (yield yt.getItemsAsync([d])).redirectDataMap,
              e = this.Ie(t);
            n && n[e] && delete n[e], yield it.setItemsAsync({ [d]: n });
          });
        }
        Ie(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, n) {
          return pn(this, void 0, void 0, function* () {
            const e = this.Ie(n);
            let i = yield yt.getItemsAsync([d]);
            (i[e] = t), (i = this.Te(i)), yield it.setItemsAsync({ [d]: i });
          });
        }
        Te(t) {
          return (function (t, n) {
            const e = {};
            let i;
            for (i in t) t.hasOwnProperty(i) && n(t[i]) && (e[i] = t[i]);
            return e;
          })(t, this.Se);
        }
        Se(t) {
          const n = t.date;
          return void 0 !== n && "number" == typeof n && n <= Date.now() && Date.now() - n < 108e5;
        }
      })();
      Object.freeze(vn);
      const gn = vn;
      var yn = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      class Fn {
        constructor(n, e, i) {
          (this.Me = []),
            (this.$e = 0),
            (this.Pe = 0),
            (this.Re = []),
            (this.Oe = !1),
            (this.Zt = !1),
            (this.j = !1),
            (this.Le = !1),
            (this.Ue = void 0),
            (this.Ge = () =>
              yn(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.Ue = !1);
                } catch (t) {
                  this.Ue = !0;
                }
              })),
            (this.Ne = (t = !1, n = !1) =>
              yn(this, void 0, void 0, function* () {
                if (this.Ve) return;
                if (this.j) return void this.forceSync();
                if (!this.Le && !n) return;
                const e = yield this.He();
                if (yield this.We(e.data, n)) yield this.ze(e);
                else if (t) {
                  if (yield this.qe(n)) {
                    const t = yield this.He();
                    yield this.ze(t);
                  }
                }
              })),
            (this.Ke = () =>
              yn(this, void 0, void 0, function* () {
                if (
                  (this.Ye == t.PAUSED &&
                    this.Je &&
                    (clearInterval(this.Je),
                    (this.Je = setInterval(() => {
                      this.Xe();
                    }, 6e4))),
                  this.Ze())
                )
                  return;
                if ((yield this.ti.waitVideoDoneLoadingAsync(), this.Ze())) return;
                const n = yield this.ti.getStateAsync();
                this.Ye == t.PAUSED ? yield this.ni(n) : this.Ye == t.PLAYING && (yield this.ei(n)), !1 === this.Le && (this.Le = !0);
              })),
            (this.ti = n),
            (this.it = e),
            (this.S = i),
            this.S.setMessageForwarder(this),
            (this.ii = 0),
            (this.Ve = !1),
            (this.Ye = t.PAUSED),
            (this.ri = 0),
            (this.ui = 0),
            (this.oi = 0),
            (this.si = this.ti.getStreamingServiceName()),
            M("Video forwarder"),
            this.Ge();
        }
        onMessage(t, n, e) {
          switch (t.type) {
            case A.GET_VIDEO_DATA:
              return this.ai(e), !0;
            case A.LOAD_SESSION: {
              const n = t;
              return this.ci(n.data), !1;
            }
            case nn.UPDATE_SESSION: {
              const n = t;
              return this.hi(n.data), !1;
            }
            case nn.NEXT_EPISODE: {
              const n = t;
              return this.Di(n.data), !1;
            }
            case nn.REBOOT_SESSION: {
              const n = t;
              return this.li(n.data, e), !0;
            }
            case nn.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case Yt.ON_WATCHING_ADS: {
              const n = t;
              return this._e(n), !1;
            }
            default:
              return !1;
          }
        }
        _e(t) {
          t.data.anyoneWatchingAds && !this.Zt && (pt.pushTask(this.ti.doAdCheck.bind(this.ti)), this.forceSync()),
            (this.Zt = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.di;
        }
        set videoId(t) {
          this.di = t;
        }
        sendTeardown(t) {
          const n = new Dt(S, Q, t);
          $.m(n);
        }
        teardown() {
          (this.cn = void 0),
            this.fi && clearInterval(this.fi),
            this.Je && clearInterval(this.Je),
            this.ti.pause(),
            pt.disable(),
            this.S.stopListening();
        }
        li(t, n) {
          pt.resetTasks(), this.di == t.videoId && this.hi(t), n(this.di == t.videoId);
          const e = new k(S, Q, { eventType: "reboot", sessionId: this.cn });
          $.m(e);
        }
        tryBroadcast(t = !1) {
          this.Oe ||
            (this.j
              ? this.forceSync()
              : 0 != this.ti.uiEventsHappening || this.Ve || !this.cn || pt.hasTaskInQueue(dn) || pt.pushTask(() => this.Ne(t), dn));
        }
        setBuffering(t) {
          if (this.cn) {
            const n = new cn(S, Q, { buffering: t });
            $.m(n);
          }
        }
        isWatchingAds() {
          return this.Oe;
        }
        setWatchingAds(t, n) {
          if (this.cn) {
            this.Oe = t;
            const e = new hn(S, Q, { watchingAds: t, adDurationLeft: n });
            $.m(e);
          }
        }
        sendNextEpisodeAsync(t) {
          return yn(this, void 0, void 0, function* () {
            if (this.cn && t !== this.di && t !== this.pi) {
              (this.pi = t), (this.Ve = !0);
              const n = new an(S, Q, { nextEpisode: t }),
                e = yield $.m(n);
              e && "Locked Session" === e.errorMessage && (yield this.vi(t));
            }
          });
        }
        vi(t) {
          return yn(this, void 0, void 0, function* () {
            try {
              yield w(() => t == this.di, 1e4)(), (this.Ve = !1);
            } catch (t) {
              this.$n("An error has occured when trying to wait till the episode changed videos");
              const n = { showAlert: !0, alertModal: Mt };
              this.sendTeardown(n);
            }
          });
        }
        We(e, i) {
          return yn(this, void 0, void 0, function* () {
            if (null == e.lastKnownTime || null == e.lastKnownTimeUpdatedAt || null == e.state) return !1;
            if (i && e.state === t.PAUSED && e.lastKnownTime < It) return !1;
            const r = Math.abs(e.lastKnownTime - this.gi());
            if (e.state == this.Ye && r < It) return !1;
            if (r >= It) {
              const t = new k(S, Q, { name: "video_seek", action: { source: "self" } });
              $.m(t), this.si == n.AMAZON || this.si == n.PARAMOUNT ? yield C(200)() : this.si == n.HBO_MAX && (yield C(500)());
            }
            return !0;
          });
        }
        He() {
          return yn(this, void 0, void 0, function* () {
            const t = yield this.ti.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.Pe), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new un(S, Q, t);
          });
        }
        forceSync() {
          pt.pushTask(this.Ke, ln);
        }
        Di(t) {
          return yn(this, void 0, void 0, function* () {
            (this.ii = Date.now()), pt.pushTask(() => this.yi(t));
          });
        }
        yi(n) {
          return yn(this, void 0, void 0, function* () {
            try {
              M("Continue next episode called"),
                (this.Ve = !0),
                yield this.ti.jumpToNextEpisode(n),
                yield this.S.loadNewVideoAsync(n.videoId),
                M("After load new video"),
                this.S.reloadListeners(),
                this.oi < this.ii &&
                  ((this.Ye = t.PAUSED),
                  (this.ri = 0),
                  (this.ui = Date.now()),
                  M("Sending broadcast after next episode"),
                  pt.pushTask(() => this.Ne(!0, !0), dn),
                  pt.removeTask(ln)),
                (this.di = n.videoId),
                (this.Ve = !1);
              const e = new k(S, Q, { name: "video_start", action: { description: "video session has begun" } });
              $.m(e);
            } catch (t) {
              this.$n("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var n, e;
          return yn(this, void 0, void 0, function* () {
            console.log("persist here");
            const i = null !== (e = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId) && void 0 !== e ? e : 0,
              r = new fn(S, Q, { tabId: i, persist: t });
            $.m(r);
            const u = yield this.Fi();
            (u.date = Date.now()), gn.storeRedirectDataForTabAsync(u, i);
          });
        }
        reloadPartyAsync() {
          var t, n;
          return yn(this, void 0, void 0, function* () {
            try {
              const e = yield this.Fi();
              e.date = Date.now();
              const i = yield this.mi(e),
                r = null !== (n = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== n ? n : 0,
                u = new fn(S, Q, { tabId: r, persist: !1 });
              yield $.m(u), yield gn.storeRedirectDataForTabAsync(e, r), (window.location.href = i);
            } catch (t) {
              console.log("Error reloading party", t), this.$n("Failed to fix next episode.");
              const n = new Dt(S, Q, { showAlert: !0, alertModal: Pt });
              $.m(n);
            }
          });
        }
        Fi() {
          return yn(this, void 0, void 0, function* () {
            return new Promise((t, n) => {
              const e = new XMLHttpRequest();
              (e.timeout = 1e4),
                (e.ontimeout = () => {
                  n(new Error());
                }),
                (e.onreadystatechange = () => {
                  if (e.readyState === XMLHttpRequest.DONE)
                    try {
                      const n = JSON.parse(e.responseText);
                      t(n);
                    } catch (t) {
                      n(t), this.$n("Unable to get video endpoint data to reload session");
                    }
                }),
                e.open("GET", "https://api.teleparty.com/video?session=" + this.cn, !0),
                e.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        mi(t) {
          if ("object" == typeof (n = t) && null !== n && "videoService" in n && "videoId" in n) {
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
                const n = t.serviceDomain;
                if (n) return `https://${n}/gp/video/detail/${t.videoId}?autoplay=1`;
                throw new Error("No service Domain");
              }
              case "hbomax": {
                const n = t.videoType;
                if (n) {
                  return `https://play.hbomax.com/${n}/urn:hbo:${n}:${t.videoId}`;
                }
                throw new Error("No Video Type");
              }
              case "youtube": {
                const n = t.videoId,
                  e = t.serviceDomain;
                if (e) return n && "browsing" !== n ? `https://${e}/watch/${n}` : `https://${e}/`;
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
          var n;
          throw new Error("Invalid Session Response");
        }
        hi(t) {
          (this.oi = Date.now()), pt.pushTask(this.Ci(t).bind(this));
        }
        Ci(n) {
          if (n.state === t.PAUSED && this.Ye === t.PLAYING) {
            this.Xe();
            const t = new k(S, Q, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            $.m(t);
          } else if (n.state === t.PLAYING && this.Ye === t.PAUSED) {
            const t = new k(S, Q, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            $.m(t), this.Xe();
          }
          return (this.Ye = n.state), (this.ri = n.lastKnownTime), (this.ui = n.lastKnownTimeUpdatedAt), this.Ke;
        }
        ai(t) {
          var n;
          return yn(this, void 0, void 0, function* () {
            try {
              const n = yield this.ti.getVideoDataAsync(),
                e = yield this.ti.getStateAsync();
              (n.is_player_fullscreen = null !== document.fullscreenElement),
                (n.is_chat_visible = this.it.getChatVisible()),
                (n.is_adblock_enabled = this.Ue),
                (n.video_ts_ms = Math.round(e.playbackPositionMilliseconds)),
                (n.party_ts_ms = this.ri),
                t(n);
            } catch (e) {
              this.$n(null !== (n = e.message) && void 0 !== n ? n : "Unable to send video data"), t({ error: e });
            }
          });
        }
        $n(t) {
          const n = new k(S, Q, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          $.m(n);
        }
        qe(t) {
          return yn(this, void 0, void 0, function* () {
            return new Promise((n) => {
              const e = performance.now(),
                i = () =>
                  yn(this, void 0, void 0, function* () {
                    if (performance.now() - e >= 2500) n(!1);
                    else {
                      const e = yield this.He();
                      (yield this.We(e.data, t))
                        ? n(!0)
                        : setTimeout(() => {
                            i();
                          }, 50);
                    }
                  });
              i();
            });
          });
        }
        ze(n) {
          return yn(this, void 0, void 0, function* () {
            if (this.Ve || this.Oe) return;
            const e = this.Ye;
            if (n.data.bufferingState) {
              (n.data.state = t.PAUSED), yield $.m(n, 1e3), yield this.ti.waitVideoDoneLoadingAsync();
              const i = yield this.He();
              (i.data.bufferingState = !0), e == t.PLAYING && (i.data.state = t.PLAYING), yield $.m(i, 1e3);
            } else yield $.m(n, 1e3);
          });
        }
        ci(t) {
          return yn(this, void 0, void 0, function* () {
            const n = t.sessionCallbackData;
            (this.cn = n.sessionId),
              (this.Ye = n.state),
              (this.ri = Number(n.lastKnownTime)),
              (this.ui = Number(n.lastKnownTimeUpdatedAt)),
              (this.di = n.videoId),
              (this.Zt = !1),
              "true" == n.controlLock && (this.j = !0),
              t.isCreate ? ((this.Le = !0), pt.pushTask(this.Ne.bind(this), dn)) : this.forceSync();
            const e = new k(S, Q, { name: "video_start", action: { description: "video session has begun" } });
            $.m(e), this.S.startListening(), this.wi();
          });
        }
        Ei() {
          return new Promise((t) => {
            const n = new sn(S, Q),
              e = Date.now();
            $.m(n)
              .then((t) => {
                const n = Date.now();
                if (t) {
                  const i = t.serverTime;
                  i &&
                    (E(this.Me, n - e, 5), (this.$e = b(this.Me)), E(this.Re, n - Math.round(this.$e / 2) - i, 5), (this.Pe = b(this.Re)));
                }
              })
              .catch((t) => {
                M(t), this.$n(t);
              }),
              t();
          });
        }
        Xe() {
          const t = new k(S, Q, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          $.m(t);
        }
        wi() {
          this.fi && clearInterval(this.fi),
            this.Je && clearInterval(this.Je),
            (this.fi = setInterval(() => {
              pt.hasTaskInQueue(ln) || pt.pushTask(this.Ke, ln);
            }, 5e3)),
            (this.Je = setInterval(() => {
              this.Xe();
            }, 6e4)),
            (this.bi = setInterval(() => {
              pt.hasTaskInQueue(Dn) || pt.pushTask(this.Ei.bind(this), Dn);
            }, 12500)),
            this.Ei();
        }
        Ze() {
          return !this.cn || this.ti.uiEventsHappening > 0 || this.Oe || this.Ve || !this.S.shouldSync();
        }
        ni(t) {
          return yn(this, void 0, void 0, function* () {
            const { playbackState: n, playbackPositionMilliseconds: e } = t;
            if ((n !== i.PAUSED && (yield this.ti.pause()), Math.abs(this.ri - e) > 2500)) {
              yield this.ti.setCurrentTime(this.ri);
              const t = new k(S, Q, { name: "video_seek", action: { source: "another user" } });
              $.m(t);
            }
          });
        }
        ei(t) {
          return yn(this, void 0, void 0, function* () {
            const { playbackState: n, playbackPositionMilliseconds: e } = t,
              r = this.gi();
            if ((n == i.PAUSED && (yield this.ti.play()), Math.abs(r - e) > 2500)) {
              yield this.ti.setCurrentTime(r), yield this.ti.play();
              const t = new k(S, Q, { name: "video_seek", action: { source: "another user" } });
              $.m(t);
            }
          });
        }
        ji() {
          return this.Ye === t.PLAYING ? Date.now() - (this.ui + this.Pe) : 0;
        }
        gi() {
          return this.ri + this.ji();
        }
        get changingVideo() {
          return this.Ve;
        }
        set changingVideo(t) {
          this.Ve = t;
        }
      }
      e(5640);
      var mn = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      var Cn = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      var wn = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      class En extends class {
        constructor(t) {
          (this.ti = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return Cn(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return Cn(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return Cn(this, void 0, void 0, function* () {
            yield null === (t = this.ie) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this._i();
        }
        stopListening() {
          this.xi();
        }
        _i() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            Cn(this, void 0, void 0, function* () {
              this.Bi(), this.ti.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              Cn(this, void 0, void 0, function* () {
                this.Bi(), this.ti.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        xi() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        Ai() {
          var t;
          null === (t = this.ie) || void 0 === t || t.tryBroadcast(!1);
        }
        Bi() {
          var t;
          console.log("Going to wait for change"), null === (t = this.ie) || void 0 === t || t.tryBroadcast(!0);
        }
        ki() {
          var t;
          null === (t = this.ie) || void 0 === t || t.setBuffering(!0);
        }
        Qi(t) {
          var n;
          null === (n = this.ie) || void 0 === n || n.setWatchingAds(!0, t);
        }
        Ii() {
          var t, n;
          null === (t = this.ie) || void 0 === t || t.setWatchingAds(!1), null === (n = this.ie) || void 0 === n || n.forceSync();
        }
        Si() {
          var t;
          null === (t = this.ie) || void 0 === t || t.setBuffering(!1);
        }
        Ti(t) {
          var n;
          null === (n = this.ie) || void 0 === n || n.sendNextEpisodeAsync(t);
        }
        Mi(t) {
          var n;
          null === (n = this.ie) || void 0 === n || n.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.ie = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t) {
          var n, e;
          super(t),
            (this.$i = this.Ai.bind(this)),
            (this.Pi = this.Ri.bind(this)),
            (this.ti = t),
            this.ti.setVideoEventListener(this),
            (null === (n = window.teleparty) || void 0 === n ? void 0 : n.replaceScriptLoaded) ||
              (M("injecting replace script"),
              (function (t) {
                const n = document.createElement("script");
                n.setAttribute("tpInjected", ""),
                  (n.textContent = t),
                  (document.head || document.documentElement).appendChild(n),
                  n.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              )),
            (null === (e = window.teleparty) || void 0 === e ? void 0 : e.injectScriptLoaded) ||
              (function (t) {
                const n = document.createElement("script");
                n.setAttribute("tpInjected", ""), (n.src = t), (document.head || document.documentElement).appendChild(n), n.remove();
              })(chrome.extension.getURL("content_scripts/funimation/funimation_injected_bundled.js")),
            (this.Oi = new MutationObserver((t) => {
              var n;
              for (const e of t) {
                if (e.addedNodes.length >= 1)
                  for (let t = 0; t < e.addedNodes.length; t++) {
                    (null === (n = e.addedNodes[t].textContent) || void 0 === n
                      ? void 0
                      : n.toLocaleLowerCase().includes("advertisement")) && this.Li();
                  }
                e.addedNodes.length < 1 && e.removedNodes.length >= 1 && this.Ui();
              }
            }));
        }
        reloadListeners() {
          this.stopListening(), this.startListening();
        }
        loadNewVideoAsync(t) {
          return wn(this, void 0, void 0, function* () {
            const n = performance.now();
            yield new Promise((e, i) => {
              const r = setInterval(() => {
                if (_.getVideoId(new URL(window.location.href)) === t) {
                  const t = this.ti.getVideoElement();
                  if (t instanceof Element && t.src) return M("Loaded new Funimation video"), clearInterval(r), void e();
                }
                performance.now() - n >= 2e4 && (clearInterval(r), i(new Error("Could not load new video in time.")));
              }, 100);
            }),
              yield this.ti.waitVideoDoneLoadingAsync();
          });
        }
        startListening() {
          var t;
          super.startListening(), console.log("Start listening called"), this.Oi.disconnect();
          const n = document.getElementById("vjs_video_3_ima-ad-container");
          n && this.Oi.observe(n, { childList: !0, subtree: !0, characterData: !0 }),
            null === (t = this.ie) || void 0 === t || t.persistExtension(!0),
            this.Gi();
          const e = this.ti.getVideoElement();
          e && (e.addEventListener("play", this.$i), e.addEventListener("pause", this.$i), e.addEventListener("seeking", this.$i));
        }
        Li() {
          var t;
          (null === (t = this.ie) || void 0 === t ? void 0 : t.isWatchingAds()) || (console.log("Ad started"), this.Qi());
        }
        Ui() {
          var t;
          (null === (t = this.ie) || void 0 === t ? void 0 : t.isWatchingAds()) && (console.log("Ad ended"), this.Ii());
        }
        Ni() {
          var t;
          const n = document.querySelector(".hydra-video-next");
          if (n) {
            const e = null === (t = n.parentElement) || void 0 === t ? void 0 : t.parentElement;
            if (e) {
              const t = e.href;
              if (t) return _.getVideoId(new URL(t));
            }
          } else;
        }
        Gi() {
          var t, n, e, i, r;
          return wn(this, void 0, void 0, function* () {
            if (F(new URL(window.location.href)))
              try {
                if (null === (t = this.ie) || void 0 === t ? void 0 : t.changingVideo) return;
                this.ie && (this.ie.changingVideo = !0);
                const u = _.getVideoId(new URL(window.location.href));
                if (
                  (console.log(u, null === (n = this.ie) || void 0 === n ? void 0 : n.videoId),
                  (null === (e = this.ie) || void 0 === e ? void 0 : e.videoId) &&
                    (null == u ? void 0 : u.includes(null === (i = this.ie) || void 0 === i ? void 0 : i.videoId)))
                )
                  return void (this.ie && (this.ie.changingVideo = !1));
                u && u != (null === (r = this.ie) || void 0 === r ? void 0 : r.videoId) && this.Ti(u);
              } catch (t) {
                console.log(t);
              }
            else this.Mi(Ut);
          });
        }
        stopListening() {
          super.stopListening(), this.Oi.disconnect();
          const t = this.ti.getVideoElement();
          if (t) {
            t.removeEventListener("play", this.$i),
              t.removeEventListener("pause", this.$i),
              t.removeEventListener("seeking", this.$i),
              window.removeEventListener("message", this.Pi, !1);
            const n = document.querySelector(".hydra-video-next");
            n && n.removeEventListener("click", this.Gi.bind(this));
          }
        }
        Ri(t) {
          F(new URL(window.location.href)) || this.Mi(Ut);
        }
      }
      var bn = e(4296),
        jn = e.n(bn);
      class _n extends x {
        constructor(t, n, e) {
          super(t, n, e), (this.type = e);
        }
      }
      class xn extends _n {
        constructor(t, n, e) {
          super(t, n, Kt.CREATE_SESSION), (this.data = e);
        }
      }
      const Bn = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".netflix.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".netflix.");
        }
        getVideoId(t) {
          const n = t.pathname.match(/^.*\/([0-9]+)\??.*/);
          return n && n.length > 0 ? n[1] : void 0;
        }
        getFullscreenScript() {
          return '\n            (function() {\n                var sizingWrapper = document.getElementsByClassName("sizing-wrapper")[0];\n                    if (sizingWrapper) {\n                        sizingWrapper.requestFullscreen = function() {}\n                        document.getElementsByClassName(\'button-nfplayerFullscreen\')[0].onclick = function() {\n                            var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];\n                            fullScreenWrapper.webkitRequestFullScreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);\n                        }\n                    }\n            })();\n        ';
        }
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", n.NETFLIX, !1);
      Object.freeze(Bn);
      const An = Bn;
      const kn = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".hulu.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hulu.");
        }
        getVideoId(t) {
          const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", n.HULU, !1);
      Object.freeze(kn);
      const Qn = kn;
      const In = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".disneyplus.") && t.pathname.includes("/video");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".disneyplus.");
        }
        getVideoId(t) {
          const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", n.DISNEY_PLUS, !1);
      Object.freeze(In);
      const Sn = In;
      const Tn = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== m(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const n = "urn:hbo:" + m(t.pathname) + ":",
            e = t.pathname.split(n);
          let i = null != e && e.length > 1 && null != e[1] ? e[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const r = null != i && 0 !== i.length ? e[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = r && r.length > 0 ? r[1] : void 0;
          return u || ((i = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != i && 3 == i.length ? i[2] : void 0)), u;
        }
        getVideoType(t) {
          return m(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", n.HBO_MAX, !1);
      Object.freeze(Tn);
      const Mn = Tn;
      const $n = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.");
          })(t);
        }
        isBrowsing(t) {
          return !1;
        }
        getVideoId(t) {
          const n = t.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
          return null != n && n.length > 0 ? n[1] : void 0;
        }
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", n.AMAZON, !1);
      Object.freeze($n);
      const Pn = $n;
      const Rn = new (class extends v {
        isBrowsing(t) {
          return t.hostname.includes(".crunchyroll.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".crunchyroll.");
          })(t);
        }
        getVideoId(t) {
          const n = t.pathname.match(/watch\/(.*)\//);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", n.CRUNCHYROLL, !1);
      Object.freeze(Rn);
      const On = Rn;
      const Ln = new (class extends v {
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
            const n = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(t.href);
            return null != n && n.length > 3 && n[3] ? n[3] : void 0;
          }
          return "browsing";
        }
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", n.YOUTUBE, !1);
      Object.freeze(Ln);
      const Un = Ln;
      const Gn = new (class extends v {
        isBrowsing(t) {
          return t.hostname.includes(".espn.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".espn.") && t.pathname.includes("/player");
          })(t);
        }
        getVideoId(t) {
          const n = t.pathname;
          return n.substring(n.lastIndexOf("/") + 1);
        }
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", n.ESPN, !1);
      Object.freeze(Gn);
      const Nn = Gn;
      const Vn = new (class extends v {
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
          var n;
          const e = null !== (n = t.pathname.match(/video\/([^/]+)/)) && void 0 !== n ? n : t.pathname.match(/stream\/([^/]+)/);
          return e && e.length > 1 ? e[1] : void 0;
        }
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", n.PARAMOUNT, !1);
      Object.freeze(Vn);
      const Hn = Vn;
      const Wn = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".hotstar.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hotstar.");
        }
        getVideoId(t) {
          const n = t.pathname.split("/");
          return n && n.length > 1 ? n[n.length - 2] : void 0;
        }
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", n.HOTSTAR, !1);
      Object.freeze(Wn);
      const zn = Wn;
      const qn = new (class extends v {
        isBrowsing(t) {
          return t.hostname.includes(".peacocktv.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".peacocktv.") && t.pathname.includes("/watch") && t.pathname.includes("/playback");
          })(t);
        }
        getVideoId(t) {
          const n = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", n.PEACOCK, !1);
      Object.freeze(qn);
      const Kn = qn;
      const Yn = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".play.max.");
        }
        getVideoId(t) {
          var n;
          const e = null === (n = t.pathname) || void 0 === n ? void 0 : n.match(/(watch\/)([a-zA-Z\-_0-9]+)\??/);
          return e ? e[2] : void 0;
        }
      })([], ["content_scripts/max/max_content_bundled.js"], "max", n.MAX, !1);
      Object.freeze(Yn);
      const Jn = Yn;
      const Xn = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".starplus.") && t.pathname.includes("/video");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".starplus.");
        }
        getVideoId(t) {
          const n = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return n && n.length > 0 ? n[1] : void 0;
        }
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", n.STAR_PLUS, !1);
      Object.freeze(Xn);
      const Zn = Xn;
      const te = new (class extends v {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", n.PLUTO_TV, !1);
      Object.freeze(te);
      const ne = te;
      const ee = new (class extends v {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", n.APPLE_TV, !1);
      Object.freeze(ee);
      const ie = ee;
      const re = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes(".jiocinema."),
              e = t.pathname.includes("/watch") && t.pathname.includes("/movies/"),
              i = t.pathname.includes("/sports/"),
              r = t.pathname.includes("/tv-shows/"),
              u = t.pathname.includes("/news/");
            return n && (e || i || r || u);
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".jiocinema.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", n.JIO_CINEMA, !1);
      Object.freeze(re);
      const ue = re;
      const oe = new (class extends v {
        isBrowsing(t) {
          return t.hostname.includes("tubitv.com");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("tubitv.com") && ["tv-shows", "live", "movies"].some((n) => t.pathname.includes(n));
          })(t);
        }
        getVideoId(t) {
          return t.pathname;
        }
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", n.TUBI_TV, !1);
      Object.freeze(oe);
      const se = oe;
      const ae = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes(".crave."),
              e = 5 === t.pathname.split("/").length;
            return n && e;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".crave.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", n.CRAVE, !1);
      Object.freeze(ae);
      const ce = ae;
      const he = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("mubi."),
              e = t.pathname.includes("player");
            return n && e;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("mubi.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", n.MUBI, !1);
      Object.freeze(he);
      const De = he;
      const le = new (class extends v {
        isValidUrl(t) {
          return (function (t) {
            const n = t.hostname.includes("play.stan.com.au"),
              e = t.pathname.split("/");
            return n && 4 === e.length && "play" === e[3];
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".stan.com.au");
        }
        getVideoId(t) {
          return t.pathname.split("/")[2];
        }
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", n.STAN, !1);
      Object.freeze(le);
      const de = le;
      class fe {
        constructor(t, n) {
          var e;
          (this.isBrowsing = !1), (this.id = n), this.videoId, (this.url = t);
          const i = [An, Qn, Sn, Mn, Pn, Un, On, Nn, Hn, zn, Kn, Zn, Jn, _, ie, ne, ue, se, De, de, ce];
          for (const n of i) {
            if (n.isValidUrl(this.url)) {
              (this.streamingService = n), (this.serviceName = n.name), (this.videoId = n.getVideoId(t));
              break;
            }
            if (n.isBrowsing(this.url)) {
              (this.isBrowsing = !0), (this.streamingService = n), (this.serviceName = n.name);
              break;
            }
          }
          this.sessionIdFromUrl =
            null !==
              (e = (function (t, n, e) {
                const i = "?" + t.split("?")[e];
                if (void 0 === i) return;
                const r = n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                  u = new RegExp("[?|&]" + r + "=([^&]*)(&|$)").exec(i);
                return null === u || u.length < 2 ? void 0 : decodeURIComponent(u[1]);
              })(this.url.href, "npSessionId", 1)) && void 0 !== e
              ? e
              : void 0;
        }
        urlWithSessionId(t) {
          return this.streamingService ? this.streamingService.urlWithSessionId(t) : void 0;
        }
      }
      class pe extends _n {
        constructor(t, n, e) {
          super(t, n, Kt.RE_INJECT), (this.data = e);
        }
      }
      var ve = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, u) {
          function o(t) {
            try {
              a(i.next(t));
            } catch (t) {
              u(t);
            }
          }
          function s(t) {
            try {
              a(i.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(o, s);
          }
          a((i = i.apply(t, n || [])).next());
        });
      };
      var ge,
        ye = function (t, n, e, i) {
          return new (e || (e = Promise))(function (r, u) {
            function o(t) {
              try {
                a(i.next(t));
              } catch (t) {
                u(t);
              }
            }
            function s(t) {
              try {
                a(i.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var n;
              t.done
                ? r(t.value)
                : ((n = t.value),
                  n instanceof e
                    ? n
                    : new e(function (t) {
                        t(n);
                      })).then(o, s);
            }
            a((i = i.apply(t, n || [])).next());
          });
        };
      class Fe extends class {
        constructor(t) {
          var n, e, i;
          (this.Vi = !1),
            (this.Hi = !1),
            (this.Wi = !1),
            (this.zi = 0),
            (this.qi = !1),
            (this.Ki = !1),
            (this.Yi = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.Ji() : this.Xi();
            }),
            console.log("Teleparty Browse Loaded " + (null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId)),
            (this.Zi = new fe(
              new URL(window.location.href),
              null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0
            )),
            (this.nr = t),
            this.nr.setPageControls(this);
        }
        setChatApi(t) {
          (this.nr = t), this.nr.setPageControls(this);
        }
        er() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.Wi ? "Only I have control" : "Everyone has control"),
            this.Wi
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        ir() {
          this.Hi || ((this.Wi = !this.Wi), this.er());
        }
        setResetChatButton() {
          this.nr.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.nr.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        rr() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.nr.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.zi} unread ${1 == this.zi ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.nr.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.nr.shouldChatBeVisible() ||
            this.nr.isPartyWindowsActive() ||
            (this.zi++,
            this.rr(),
            (this.qi = !0),
            this.Ji(),
            C(1e3)().then(() => {
              this.qi = !1;
            }));
        }
        teardown() {
          this.ur(), this.Xi(), this.sr && clearInterval(this.sr);
        }
        ar() {
          var t;
          return ve(this, void 0, void 0, function* () {
            if (this.Hi || this.nr.inSession) return;
            if ((this.cr(), (this.Hi = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new pe(T, Q, { extensionTabData: this.Zi });
              try {
                yield $.m(t);
              } catch (t) {
                return console.log(t), this.hr(), this.$n(t), this.Dr(tt), void (this.Hi = !1);
              }
            }
            console.log("Sending create");
            const n = this.lr();
            try {
              const t = yield $.m(n);
              t.error ? (this.Dr(t.error.message), this.$n(t.error.message)) : ((this.Hi = !1), this.dr(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.Dr(tt), this.$n(t);
            }
            this.hr(), (this.Hi = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        ur() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        $n(t) {
          const n = new k(I, Q, { name: "error", action: { description: "an error has occured", reason: t } });
          $.m(n);
        }
        Dr(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        pr(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, Y(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, Y(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, Y(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, Y(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, Y(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, Y(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, Y(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, Y(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, Y(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, Y(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, Y(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, Y(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, Y(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        Xi() {
          this.qi || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Ji() {
          return ve(this, void 0, void 0, function* () {
            if (!this.Ki && (this.Yi || this.nr.inSession)) {
              this.Ki = !0;
              try {
                yield this.addTpIcon(),
                  this.nr.inSession ? this.enablePartyIcons() : this.ur(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.Ki = !1;
              }
            }
          });
        }
        startEventListener() {
          this.sr = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.sr && clearInterval(this.sr);
        }
        vr() {
          return "100px";
        }
        addTpIcon() {
          return ve(this, void 0, void 0, function* () {
            if ((this.Yi || this.nr.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.pr(jn()),
                n = yield this.getControlsRoot();
              n.length > 0 &&
                (n.append(
                  (function (t, n = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${n}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.gr());
            }
          });
        }
        gr() {
          jQuery("#tp-control-lock-button").click(this.ir.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.vr()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.vr()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.vr()}`),
            jQuery("#tp-link-button").click(this.yr.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.Fr(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.mr();
            });
        }
        mr() {
          const t = new Dt(T, Q, Ut);
          $.m(t), this.Xi();
        }
        yr() {
          this.nr.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        Fr() {
          return ve(this, void 0, void 0, function* () {
            (this.zi = 0),
              this.hideMessageIndicator(),
              this.nr.isPartyWindowsActive()
                ? this.nr.resetChatWindow(!0)
                : (this.nr.shouldChatBeVisible(), yield this.nr.setChatVisible(!this.nr.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.Vi && this.Ji();
        }
        setChatButtons() {
          this.nr.inSession && this.nr.getChatVisible() ? this.dr() : this.Cr(),
            this.nr.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        dr() {
          return ve(this, void 0, void 0, function* () {
            this.nr.inSession &&
              this.nr.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        Cr() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        lr() {
          return new xn(T, Q, this.wr());
        }
        wr() {
          return { createSettings: { controlLock: this.Wi }, extensionTabData: this.Zi, source: "pc" };
        }
        cr() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        hr() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        shouldMenuBeVisible() {
          return !document.querySelector(".video-js").classList.contains("vjs-user-inactive");
        }
        getControlsRoot() {
          return ye(this, void 0, void 0, function* () {
            return jQuery(".video-js");
          });
        }
        startEventListener() {
          super.startEventListener();
        }
        stopEventListener() {
          super.stopEventListener();
        }
      }
      class me extends class {
        constructor(t, n, e, i) {
          (this.it = t),
            (this.ti = n),
            (this.S = e),
            (this.xn = i),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = i), console.log("Setting Page COntrols"))
              : (i.setChatApi(this.it), console.log("Resetting Chat Api for old controls")),
            (this.Er = new rn(this.it, this.xn)),
            (this.ie = new Fn(this.ti, this.it, this.S)),
            (this.br = !1),
            (this.jr = !1),
            (this.Tn = !1),
            (this.ve = new tn()),
            this.ve.addMessageListener(this.ie),
            this.ve.addMessageListener(this.Er),
            this.ve.addMessageListener(this),
            (this._r = !1),
            this.Br();
        }
        Ar() {
          return mn(this, void 0, void 0, function* () {
            yield this.xn.addTpIcon(), this.xn.startEventListener();
          });
        }
        loadBrowseButton() {
          return mn(this, void 0, void 0, function* () {
            yield this.xn.addTpIcon(), this.xn.startEventListener();
          });
        }
        Br() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.it.inSession, alertModal: Rt };
            this.kr(t);
          }),
            t.onMessage.addListener(() => {
              M("Got background script"), (this._r = !0);
            });
        }
        onMessage(t, n, e) {
          if (t.target == S) {
            if (t.type === Kt.IS_CONTENT_SCRIPT_READY) {
              if (this.br) {
                e({ ready: !0 });
              } else this.jr || ((this.jr = !0), this.Qr().then(e));
              return !0;
            }
            if (t.type === Kt.GET_INIT_DATA) {
              return e(this.Ir()), !0;
            }
            if (t.type === Kt.DISCONNECT && t.sender == I) {
              const t = new Dt(S, Q, Ut);
              $.m(t), e();
            } else {
              if (t.type == A.TEARDOWN) {
                const n = t;
                return this.kr(n.data), e(), !0;
              }
              t.type === A.ON_NOTIF && this.Sr();
            }
          }
          return !1;
        }
        Sr() {
          console.log("Show Notification");
        }
        kr(t) {
          var n, e, i;
          if (t.showAlert && t.alertModal) {
            const e = null !== (n = t.buttonUrl) && void 0 !== n ? n : this.it.getPartyUrl();
            Ot(t.alertModal, e);
          }
          this.xn.teardown(), this.ie.teardown(), this.Er.teardown(), this.ve.teardown();
          const r = {
              name: "error",
              action: {
                description: null === (e = t.alertModal) || void 0 === e ? void 0 : e.title,
                reason: null === (i = t.alertModal) || void 0 === i ? void 0 : i.content
              }
            },
            u = new k(S, Q, r);
          $.m(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        $n(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const n = new k(S, Q, { name: "error", action: { reason: t } });
          $.m(n);
        }
        Tr() {
          return mn(this, void 0, void 0, function* () {
            return w(() => this._r, 5e3)();
          });
        }
        Qr() {
          return mn(this, void 0, void 0, function* () {
            try {
              yield this.Tr();
              const t = yield this.Mr();
              return this.Ar(), t;
            } catch (t) {
              const n = { message: Z, showButton: !1 };
              return this.$n(Z), { ready: !1, error: n };
            } finally {
              this.jr = !1;
            }
          });
        }
        Mr() {
          return mn(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.ti.waitVideoApiReadyAsync();
              const n = yield this.$r();
              n && n.error
                ? (M("Error is:", n.error),
                  (t = { message: n.error, showButton: !0 }),
                  (this.br = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (n && n.showReviewMessage && (this.Tn = !0),
                  (this.br = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (n) {
              (t = { message: n.message, showButton: !1 }), this.$n(n.message);
            }
            return { ready: this.br, error: t };
          });
        }
        Ir() {
          return {
            inSession: this.it.inSession,
            isChatVisible: this.it.isPartyWindowsActive() ? this.it.getChatWindowVisible() : this.it.getChatVisible(),
            partyUrl: this.it.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.it.isPartyWindowsActive()
          };
        }
        $r() {
          return mn(this, void 0, void 0, function* () {
            const t = yield this.Pr();
            return $.m(t);
          });
        }
        Pr() {
          return mn(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.ti.getVideoDataAsync()).videoId };
            return new Zt(S, Q, t);
          });
        }
      } {
        constructor() {
          const t = new O(),
            n = new Xt(),
            e = new En(t);
          let i;
          (i = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new Fe(n)),
            super(n, t, e, i),
            M("Funimation Content Script");
        }
      }
      (window.teleparty && (null === (ge = window.teleparty) || void 0 === ge ? void 0 : ge.contentScriptInjected)) ||
        (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
        (window.teleparty.contentScriptInjected = !0),
        new me(),
        M("Initialized content script"));
    })();
})();
