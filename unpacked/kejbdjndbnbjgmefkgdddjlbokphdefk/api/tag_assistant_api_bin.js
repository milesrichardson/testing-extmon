(function () {
  "use strict";
  function h(a) {
    return a.replace(/([\?&])gtm_debug=x&/, "$1").replace(/[\?&]gtm_debug=x($|#)/, "$1");
  }
  var k = function (a, c) {
      a.g.document.dispatchEvent(
        new CustomEvent("__TAG_ASSISTANT_API_MESSAGE", { detail: { type: "PIPE_MESSAGE", source: "PAGE", data: c, origin: a.g.origin } })
      );
    },
    m = function (a) {
      a.g === a.g.top &&
        ((a.h = a.g.setInterval(() => {
          k(a, { type: "PING" });
        }, 1e3)),
        "complete" === a.g.document.readyState
          ? l(a)
          : a.g.addEventListener("load", () => {
              l(a);
            }));
    },
    l = function (a) {
      var c = Object,
        b = c.assign;
      var e = a.g;
      var d = h(e.location.href),
        f;
      if (!(f = e.document.title) && ((f = e.location.href), "/" !== f)) {
        try {
          var g = new URL(f);
          g.search = "";
          g.hash = "";
          f = g.toString();
        } catch (q) {}
        g = f.split("/");
        f = g[g.length - 1] || g[g.length - 2];
      }
      e = { href: d, title: f, referrer: h(e.document.referrer), readyState: e.document.readyState };
      d = a.g;
      d = d.google_tag_manager = d.google_tag_manager || {};
      d = d.debugGroupId || (d.debugGroupId = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random())));
      k(a, { type: "PAGE_SUMMARY", data: b.call(c, {}, e, { groupId: d, pageId: "" }) });
    },
    p = class {
      constructor(a) {
        this.g = n;
        this.i = a;
        this.enableUntaggedPageReporting = !1;
        this.g.document.addEventListener("__TAG_ASSISTANT_API_MESSAGE", (c) => {
          c = c.detail;
          a: {
            var b = null == c ? void 0 : c.type;
            if ("string" !== typeof b) b = !1;
            else
              switch (b) {
                case "PIPE_MESSAGE":
                case "DISCONNECT":
                case "API_INSTALLED":
                case "WINDOWS_CLOSED":
                case "CHECK_DEBUG":
                case "RECONNECT":
                  b = !0;
                  break a;
                default:
                  b = !1;
              }
          }
          if (b)
            a: if (((b = null == c ? void 0 : c.source), "string" !== typeof b)) b = !1;
            else
              switch (b) {
                case "PAGE":
                case "EXTENSION":
                  b = !0;
                  break a;
                default:
                  b = !1;
              }
          if (b && "PIPE_MESSAGE" === c.type && "EXTENSION" === c.source) {
            b = c.data;
            const f = c.origin;
            if ((c = !this.enableUntaggedPageReporting))
              if ("PING" !== b.type) c = !1;
              else {
                var e, d;
                c = null != (d = null == (e = b.flags) ? void 0 : e.enableUntaggedPageReporting) ? d : !1;
              }
            c
              ? ((this.enableUntaggedPageReporting = !0), m(this))
              : "RESEND_MEMOS" === b.type && !this.receiver && this.enableUntaggedPageReporting && l(this);
            this.receiver && this.receiver(b, f);
          }
        });
        this.g.document.dispatchEvent(
          new CustomEvent("__TAG_ASSISTANT_API_MESSAGE", { detail: { type: "API_INSTALLED", source: "PAGE" } })
        );
      }
      setReceiver(a) {
        this.receiver = a;
      }
      sendMessage(a) {
        this.h && (this.g.clearInterval(this.h), (this.h = void 0));
        k(this, a);
      }
      disconnect() {
        this.g.document.dispatchEvent(new CustomEvent("__TAG_ASSISTANT_API_MESSAGE", { detail: { type: "DISCONNECT", source: "PAGE" } }));
        this.i();
      }
    };
  const n = window;
  n.__TAG_ASSISTANT_API =
    n.__TAG_ASSISTANT_API ||
    new p(() => {
      n.__TAG_ASSISTANT_API = void 0;
    });
}).call(this);
