(function () {
  "use strict";
  function m(a) {
    return 3 === a.runtime.getManifest().manifest_version;
  }
  const n = Array.from(
    "\ud83d\udd37\ud83d\udfe1\ud83d\udfea\ud83d\udfe9\ud83d\udd35\ud83d\udd36\ud83d\udfe2\ud83d\udfe3\ud83d\udfe6\ud83d\udfe8"
  );
  var p = function (a, b, c, d, e) {
      var f = b.frames.get(c);
      null == f &&
        (null != e ? (a = e) : ((f = n[a.m]), a.m++, a.m >= n.length && (a.m = 0), (a = f)),
        (f = { port: d, emoji: a }),
        b.frames.set(c, f));
      null != d && (f.port = d);
      null != e && (f.emoji = e);
      return f;
    },
    q = function (a, b) {
      let c = a.i.get(b);
      null == c &&
        ((c = { l: new Set() }),
        0 === a.i.size &&
          m(a.g) &&
          a.g.scripting.registerContentScripts([
            { id: "content_script", allFrames: !0, js: ["api/content_script_bin.js"], matches: ["<all_urls>"], runAt: "document_start" }
          ]),
        a.i.set(b, c));
      return c;
    },
    t = function (a, b, c, d, e) {
      d.l.add(b);
      (d = a.h.get(b)) ? (d.tagAssistantTabId = c) : ((d = r(c)), a.h.set(b, d));
      d.s = !!e;
      return d;
    },
    z = function (a, b) {
      let c, d;
      const e = null == (c = b.sender) ? void 0 : null == (d = c.tab) ? void 0 : d.id;
      if (null != e) {
        u("got connection from Tag Assistant on tab %s", e);
        a.g.tabs.update(e, { autoDiscardable: !1 });
        var f = q(a, e);
        f.port = b;
        b.onMessage.addListener((k) => {
          if ("CONTAINER_DETAILS" === k.data.type) {
            const g = k.data.data.nonce,
              h = a.o.get(g);
            a.o.delete(g);
            v(k, h);
          } else
            f.l.forEach((g) => {
              const h = a.h.get(g);
              h &&
                ("CLEAR_COOKIE" === k.data.type ? (h.j = !1) : h.j || ((h.j = !0), w(a, g)),
                h.frames.forEach((l) => {
                  v(k, l);
                }));
            });
        });
        b.onDisconnect.addListener(() => {
          u("port to Tag Assistant tab %s closed", e);
          f.port = void 0;
        });
      }
    },
    A = function (a, b) {
      let c, d;
      const e = null == (c = b.sender) ? void 0 : null == (d = c.tab) ? void 0 : d.id;
      let f;
      const k = null == (f = b.sender) ? void 0 : f.frameId;
      u("got connection from tab %s, frame %s", e, k);
      if (null != e && null != k) {
        a.g.tabs.update(e, { autoDiscardable: !1 });
        var g = a.h.get(e);
        null == g && ((g = r()), a.h.set(e, g));
        var h = p(a, g, k, b);
        b.onMessage.addListener((l) => {
          if (null != g.tagAssistantTabId) {
            "CONTAINER_STARTING" === l.data.type && a.o.set(l.data.data.nonce, h);
            l.data.emoji = h.emoji;
            l.source = "EXTENSION";
            var x, y;
            null == (x = a.i.get(g.tagAssistantTabId)) || null == (y = x.port) || y.postMessage(l);
          }
        });
        b.onDisconnect.addListener(() => {
          u("port to tab %s, frame %s closed", e, k);
          h.port = void 0;
        });
      }
    },
    B = function (a, b, c, d) {
      const e = a.i.get(c);
      if (null == e || !e.port) return !1;
      t(a, b, c, e, d);
      return !0;
    },
    w = function (a, b, c = 0) {
      m(a.g) ||
        a.g.tabs.executeScript(
          b,
          { file: "api/content_script_bin.js", runAt: "document_start", allFrames: !0, frameId: c, matchAboutBlank: !0 },
          () => {
            const d = a.g.runtime.lastError;
            d && u("error while injecting Tag Assistant API on tab %s, frame %s, error: %o", b, c, d.message);
          }
        );
    },
    v = function (a, b) {
      null != b && b.port && ((a.data.emoji = b.emoji), (a.source = "EXTENSION"), b.port.postMessage(a));
    },
    r = function (a) {
      return { tagAssistantTabId: a, frames: new Map(), j: !0 };
    };
  function u(...a) {
    console.log(...a);
  }
  new (class {
    constructor() {
      this.g = chrome;
      this.i = new Map();
      this.h = new Map();
      this.m = 0;
      this.o = new Map();
      m(this.g) && this.g.scripting.unregisterContentScripts();
      m(this.g) &&
        this.g.runtime.onMessage.addListener((a, b, c) => {
          var d;
          if (null == b ? 0 : null == (d = b.tab) ? 0 : d.id)
            if ("CHECK_DEBUG" === a.type) {
              let e;
              d = this.h.get(null == b ? void 0 : null == (e = b.tab) ? void 0 : e.id);
              a.startDebug = !1;
              d && ((a.startDebug = !!d.j), d.s || a.referrer || ((a.startDebug = !1), (d.j = !1)));
              a.tagAssistantTabId = null == d ? void 0 : d.tagAssistantTabId;
              null != d &&
                null != d.tagAssistantTabId &&
                null != (null == b ? void 0 : b.frameId) &&
                ((b = p(this, d, null == b ? void 0 : b.frameId)), (a.emoji = b.emoji));
              c(a);
            } else
              "RECONNECT" === a.type &&
                ((c = q(this, a.tagAssistantTabId)),
                (c = t(this, b.tab.id, a.tagAssistantTabId, c)),
                null != (null == b ? void 0 : b.frameId) && a.emoji && p(this, c, null == b ? void 0 : b.frameId, void 0, a.emoji));
        });
      this.g.runtime.onConnectExternal.addListener((a) => {
        "TAG_ASSISTANT_EXTENSION_PORT" === a.name && z(this, a);
      });
      this.g.runtime.onConnect.addListener((a) => {
        A(this, a);
      });
      this.g.webNavigation.onCreatedNavigationTarget.addListener(({ tabId: a, sourceTabId: b, url: c }) => {
        c = new URL(c);
        c.hostname.endsWith(".google.com") && null != c.searchParams.get("restart_tag_assistant")
          ? (this.i.has(b) ||
              ((c = this.h.get(b)) ? ((c.tagAssistantTabId = a), (c.j = !0)) : this.h.set(b, r(a)), w(this, b), q(this, a).l.add(b)),
            (c = !0))
          : (c = !1);
        c || B(this, a, b) || ((b = this.h.get(b)), null != b && b.tagAssistantTabId && b.j && B(this, a, b.tagAssistantTabId, !0));
      });
      this.g.tabs.onRemoved.addListener((a) => {
        u("tab %s removed", a);
        var b = this.i.get(a);
        if (b) {
          this.i.delete(a);
          for (var c of b.l) if ((b = this.h.get(c))) b.j = !1;
          0 === this.i.size && m(this.g) && this.g.scripting.unregisterContentScripts();
        }
        this.h.delete(a);
        for (const d of this.i.values())
          if (d.l.delete(a) && 0 === d.l.size) {
            c = { type: "WINDOWS_CLOSED", source: "PAGE" };
            let e;
            null == (e = d.port) || e.postMessage(c);
          }
      });
      this.g.webNavigation.onCommitted.addListener(({ tabId: a, frameId: b, url: c }) => {
        if ("https://tagassistant.google.com" !== new URL(c).origin) {
          var d;
          (null == (d = this.h.get(a)) ? 0 : d.j) && w(this, a, b);
        }
      });
      this.g.runtime.onMessageExternal.addListener((a, b, c) => {
        c({});
      });
    }
  })();
}).call(this);
