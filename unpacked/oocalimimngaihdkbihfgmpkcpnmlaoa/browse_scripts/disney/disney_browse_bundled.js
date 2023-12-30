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
              o =
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
                    for (var r, s = 0; (r = t[s]); s++)
                      e(r, n, i) && i.push({ callback: n.callback, elem: r }),
                        r.childNodes.length > 0 && o.checkChildNodesRecursively(r.childNodes, n, e, i);
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
              s = (function () {
                var t = function () {
                  (this.t = []), (this.i = null), (this.o = null);
                };
                return (
                  (t.prototype.addEvent = function (t, n, e, i) {
                    var r = { target: t, selector: n, options: e, callback: i, firedElems: [] };
                    return this.i && this.i(r), this.t.push(r), r;
                  }),
                  (t.prototype.removeEvent = function (t) {
                    for (var n, e = this.t.length - 1; (n = this.t[e]); e--)
                      if (t(n)) {
                        this.o && this.o(n);
                        var i = this.t.splice(e, 1);
                        i && i.length && (i[0].callback = null);
                      }
                  }),
                  (t.prototype.beforeAdding = function (t) {
                    this.i = t;
                  }),
                  (t.prototype.beforeRemoving = function (t) {
                    this.o = t;
                  }),
                  t
                );
              })(),
              c = function (n, i) {
                var r = new s(),
                  c = this,
                  u = { fireOnAttributesModification: !1 };
                return (
                  r.beforeAdding(function (e) {
                    var r,
                      o = e.target;
                    (o !== t.document && o !== t) || (o = document.getElementsByTagName("html")[0]),
                      (r = new MutationObserver(function (t) {
                        i.call(this, t, e);
                      }));
                    var s = n(e.options);
                    r.observe(o, s), (e.observer = r), (e.me = c);
                  }),
                  r.beforeRemoving(function (t) {
                    t.observer.disconnect();
                  }),
                  (this.bindEvent = function (t, n, e) {
                    n = o.mergeArrays(u, n);
                    for (var i = o.toElementsArray(this), s = 0; s < i.length; s++) r.addEvent(i[s], t, n, e);
                  }),
                  (this.unbindEvent = function () {
                    var t = o.toElementsArray(this);
                    r.removeEvent(function (n) {
                      for (var i = 0; i < t.length; i++) if (this === e || n.target === t[i]) return !0;
                      return !1;
                    });
                  }),
                  (this.unbindEventWithSelectorOrCallback = function (t) {
                    var n,
                      i = o.toElementsArray(this),
                      s = t;
                    (n =
                      "function" == typeof t
                        ? function (t) {
                            for (var n = 0; n < i.length; n++) if ((this === e || t.target === i[n]) && t.callback === s) return !0;
                            return !1;
                          }
                        : function (n) {
                            for (var r = 0; r < i.length; r++) if ((this === e || n.target === i[r]) && n.selector === t) return !0;
                            return !1;
                          }),
                      r.removeEvent(n);
                  }),
                  (this.unbindEventWithSelectorAndCallback = function (t, n) {
                    var i = o.toElementsArray(this);
                    r.removeEvent(function (r) {
                      for (var o = 0; o < i.length; o++)
                        if ((this === e || r.target === i[o]) && r.selector === t && r.callback === n) return !0;
                      return !1;
                    });
                  }),
                  this
                );
              },
              u = new (function () {
                var t = { fireOnAttributesModification: !1, onceOnly: !1, existing: !1 };
                function n(t, n, i) {
                  return (
                    !(!o.matchesSelector(t, n.selector) || (t.u === e && (t.u = r++), -1 != n.firedElems.indexOf(t.u))) &&
                    (n.firedElems.push(t.u), !0)
                  );
                }
                var i = (u = new c(
                  function (t) {
                    var n = { attributes: !1, childList: !0, subtree: !0 };
                    return t.fireOnAttributesModification && (n.attributes = !0), n;
                  },
                  function (t, e) {
                    t.forEach(function (t) {
                      var i = t.addedNodes,
                        r = t.target,
                        s = [];
                      null !== i && i.length > 0
                        ? o.checkChildNodesRecursively(i, e, n, s)
                        : "attributes" === t.type && n(r, e, s) && s.push({ callback: e.callback, elem: r }),
                        o.callCallbacks(s, e);
                    });
                  }
                )).bindEvent;
                return (
                  (u.bindEvent = function (n, e, r) {
                    void 0 === r ? ((r = e), (e = t)) : (e = o.mergeArrays(t, e));
                    var s = o.toElementsArray(this);
                    if (e.existing) {
                      for (var c = [], u = 0; u < s.length; u++)
                        for (var a = s[u].querySelectorAll(n), f = 0; f < a.length; f++) c.push({ callback: r, elem: a[f] });
                      if (e.onceOnly && c.length) return r.call(c[0].elem, c[0].elem);
                      setTimeout(o.callCallbacks, 1, c);
                    }
                    i.call(this, n, e, r);
                  }),
                  u
                );
              })(),
              a = new (function () {
                var t = {};
                function n(t, n) {
                  return o.matchesSelector(t, n.selector);
                }
                var e = (a = new c(
                  function () {
                    return { childList: !0, subtree: !0 };
                  },
                  function (t, e) {
                    t.forEach(function (t) {
                      var i = t.removedNodes,
                        r = [];
                      null !== i && i.length > 0 && o.checkChildNodesRecursively(i, e, n, r), o.callCallbacks(r, e);
                    });
                  }
                )).bindEvent;
                return (
                  (a.bindEvent = function (n, i, r) {
                    void 0 === r ? ((r = i), (i = t)) : (i = o.mergeArrays(t, i)), e.call(this, n, i, r);
                  }),
                  a
                );
              })();
            n && d(n.fn),
              d(HTMLElement.prototype),
              d(NodeList.prototype),
              d(HTMLCollection.prototype),
              d(HTMLDocument.prototype),
              d(Window.prototype);
            var f = {};
            return h(u, f, "unbindAllArrive"), h(a, f, "unbindAllLeave"), f;
          }
          function h(t, n, e) {
            o.addMethod(n, e, t.unbindEvent),
              o.addMethod(n, e, t.unbindEventWithSelectorOrCallback),
              o.addMethod(n, e, t.unbindEventWithSelectorAndCallback);
          }
          function d(t) {
            (t.arrive = u.bindEvent), h(u, t, "unbindArrive"), (t.leave = a.bindEvent), h(a, t, "unbindLeave");
          }
        })(window, "undefined" == typeof jQuery ? null : jQuery, void 0);
      }
    },
    n = {};
  function e(i) {
    var r = n[i];
    if (void 0 !== r) return r.exports;
    var o = (n[i] = { exports: {} });
    return t[i](o, o.exports, e), o.exports;
  }
  (() => {
    "use strict";
    var t;
    !(function (t) {
      (t.REGISTER = "register"),
        (t.PARTY_START = "party_start"),
        (t.PARTY_JOIN = "party_join"),
        (t.PARTY_END = "party_end"),
        (t.PARTY_SHARE = "party_share");
    })(t || (t = {}));
    const n = chrome.runtime.id;
    var i = console.log.bind(window.console),
      r = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, o) {
          function s(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(s, c);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
    const o = new (class {
      addListener(t) {
        chrome.runtime.onMessage.addListener(t), chrome.runtime.onMessage.addListener(t);
      }
      removeListener(t) {
        chrome.runtime.onMessage.removeListener(t);
      }
      sendMessageToTabAsync(t, n, e = 2e4) {
        return r(this, void 0, void 0, function* () {
          return new Promise((r, o) => {
            const s = setTimeout(() => {
              console.log("send timeout"), o("Message Timeout");
            }, e);
            try {
              chrome.tabs.sendMessage(n, t, (n) => {
                chrome.runtime.lastError && i(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(s), r(n);
              });
            } catch (t) {
              clearTimeout(s), o(t);
            }
          });
        });
      }
      h(t, e) {
        return r(this, void 0, void 0, function* () {
          return new Promise((i, r) => {
            let o = null;
            e &&
              (o = setTimeout(() => {
                r({ error: "Send Message Timeout" });
              }, e));
            try {
              chrome.runtime.sendMessage(n, t, (n) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), o && clearTimeout(o), i(n);
              });
            } catch (t) {
              o && clearTimeout(o), r(t);
            }
          });
        });
      }
    })();
    var s;
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
    })(s || (s = {}));
    class c extends class extends class {
      constructor(t, n, e) {
        (this.sender = t), (this.target = n), (this.type = e);
      }
    } {
      constructor(t, n, e) {
        super(t, n, e), (this.type = e);
      }
    } {
      constructor(t, n, e) {
        super(t, n, s.GET_EXPERIMENT_FLAG), (this.data = e);
      }
    }
    class u {
      constructor() {
        (this.l = this.v.bind(this)), (this.m = []), this.g();
      }
      addMessageListener(t) {
        this.m.push(t);
      }
      removeMessageListener(t) {
        this.m = this.m.filter((t) => {});
      }
      g() {
        o.addListener(this.l);
      }
      teardown() {
        (this.m = []), o.removeListener(this.l);
      }
      v(t, n, e) {
        if (!this.p(t)) return !1;
        return !!this.T(t, n, e) || (e({}), !1);
      }
      p(t) {
        return "Content_Script" === t.target;
      }
      T(t, n, e) {
        let i = !1;
        return (
          this.m.forEach((r) => {
            r.onMessage(t, n, e) && (i = !0);
          }),
          i
        );
      }
    }
    e(5640);
    var a,
      f = function (t, n, e, i) {
        return new (e || (e = Promise))(function (r, o) {
          function s(t) {
            try {
              u(i.next(t));
            } catch (t) {
              o(t);
            }
          }
          function c(t) {
            try {
              u(i.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var n;
            t.done
              ? r(t.value)
              : ((n = t.value),
                n instanceof e
                  ? n
                  : new e(function (t) {
                      t(n);
                    })).then(s, c);
          }
          u((i = i.apply(t, n || [])).next());
        });
      };
    class h extends class {
      constructor() {
        (this.l = new u()), this.l.addMessageListener(this), this.M();
      }
      M() {
        chrome.runtime.connect().onMessage.addListener(() => {
          console.log("Ping received");
        });
      }
      onMessage(t, n, e) {
        return !0;
      }
    } {
      constructor() {
        super(), this.L();
      }
      L() {
        var t;
        return f(this, void 0, void 0, function* () {
          const n = yield o.h(new c("Popup", "Service_Background", { flag_name: "enchanced_ui_disney" }));
          (this._ = null !== (t = null == n ? void 0 : n.bucket) && void 0 !== t ? t : void 0), this.A();
        });
      }
      A() {
        "treatment_a" === this._ &&
          (function (t) {
            const n = document.createElement("script");
            n.setAttribute("tpInjected", ""), (n.src = t), (document.head || document.documentElement).appendChild(n), n.remove();
          })(chrome.extension.getURL("browse_scripts/disney/disney_browse_injected_bundled.js"));
      }
    }
    (window.teleparty && (null === (a = window.teleparty) || void 0 === a ? void 0 : a.browseScriptInjected)) ||
      (window.teleparty || (window.teleparty = {}), (window.teleparty.browseScriptInjected = !0), new h());
  })();
})();
