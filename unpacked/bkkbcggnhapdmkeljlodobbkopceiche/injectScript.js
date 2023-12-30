!(function (e) {
  var n = {};
  function __webpack_require__(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, __webpack_require__), (o.l = !0), o.exports;
  }
  (__webpack_require__.m = e),
    (__webpack_require__.c = n),
    (__webpack_require__.d = function (e, n, t) {
      __webpack_require__.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (__webpack_require__.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (__webpack_require__.t = function (e, n) {
      if ((1 & n && (e = __webpack_require__(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if ((__webpack_require__.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
        for (var o in e)
          __webpack_require__.d(
            t,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return t;
    }),
    (__webpack_require__.n = function (e) {
      var n =
        e && e.__esModule
          ? function getDefault() {
              return e.default;
            }
          : function getModuleExports() {
              return e;
            };
      return __webpack_require__.d(n, "a", n), n;
    }),
    (__webpack_require__.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (__webpack_require__.p = ""),
    __webpack_require__((__webpack_require__.s = 267));
})({
  267: function (e, n, t) {
    "use strict";
    t.r(n),
      t.d(n, "injectScript", function () {
        return injectScript;
      }),
      t.d(n, "restoreWindowOpen", function () {
        return restoreWindowOpen;
      });
    function injectScript(e, n, t) {
      const o = window.open,
        r = document.createElement,
        i = HTMLElement.prototype.appendChild,
        c = document.createEvent,
        l = {};
      let u,
        a,
        s = 0,
        d = null,
        w = window.innerWidth,
        p = window.innerHeight;
      const m = window.parent,
        f = `(function () {\n    const pb_whitelist = ${JSON.stringify(n)};\n    const tabUrl = ${JSON.stringify(
          e
        )};\n    const pb_message = "${t}";\n    ${injectScript.toString()};\n    injectScript(tabUrl, pb_whitelist, pb_message);\n  })();`,
        appendBlockingCode = (e) => {
          try {
            const n = document.createElement("script");
            n.textContent = f;
            const t = e.contentWindow.document;
            (t.head || t.body).appendChild(n);
          } catch (e) {}
        };
      function getAbsoluteURL(e) {
        return /^about:blank/i.test(e) || /^(https?:)?\/\//.test(e) ? e : (e = location.origin + (/^\//.test(e) ? "" : "/") + e);
      }
      function onFullScreen(e) {
        u = e ? new Date().getTime() : NaN;
      }
      function isDocumentInFullScreenMode() {
        return (
          (document.fullScreenElement && null !== document.fullScreenElement) ||
          null != document.mozFullscreenElement ||
          null != document.webkitFullscreenElement
        );
      }
      Object.defineProperty(window, "BetterJsPop", { value: void 0, writable: !1 }),
        (window.open = function newWindowOpenFn() {
          const e = arguments;
          let n = !0,
            t = null;
          function getWindowName(e) {
            const n = e[1];
            return null == n || ["_blank", "_parent", "_self", "_top"].includes(n) ? null : n;
          }
          function copyMissingProperties(e, n) {
            let t;
            for (t in e)
              try {
                void 0 === n[t] && e[t] && (n[t] = e[t]);
              } catch (e) {}
            return n;
          }
          function isParentWindow() {
            try {
              return !!(parent.Window && r instanceof parent.Window);
            } catch (e) {
              return !1;
            }
          }
          function isOverlayish(e) {
            let n = e && e.style;
            return !!(n && /fixed|absolute/.test(n.position) && e.offsetWidth >= 0.6 * w && e.offsetHeight >= 0.75 * p);
          }
          let r = null,
            i = null,
            c = null;
          null != window.event && ((r = window.event.currentTarget), (i = window.event.srcElement)),
            null != i && i instanceof HTMLElement && ((c = i.closest("a")), c && c.href && (e[3] = c.href));
          try {
            const n = [];
            if (null == r) {
              let t = e.callee;
              for (; null != t.arguments && null != t.arguments.callee.caller && -1 == n.indexOf(t.arguments.callee.caller); )
                (t = t.arguments.callee.caller), n.push(t);
              null != t.arguments && t.arguments.length > 0 && null != t.arguments[0].currentTarget && (r = t.arguments[0].currentTarget);
            }
          } catch (e) {}
          null == r
            ? ((window.pbreason = "Blocked a new window opened without any user interaction"), (n = !1))
            : null != r &&
              (r instanceof Window ||
                isParentWindow() ||
                r === document ||
                (null != r.URL && null != r.body) ||
                (null != r.nodeName && ("body" == r.nodeName.toLowerCase() || "document" == r.nodeName.toLowerCase())))
            ? ((window.pbreason = `Blocked a new window opened with URL: ${e[0]} because it was triggered by the ${r.nodeName} element`),
              (n = !1))
            : isOverlayish(r)
            ? ((window.pbreason = "Blocked a new window opened when clicking on an element that seems to be an overlay"), (n = !1))
            : (n = !0),
            document.webkitFullscreenElement || document.mozFullscreenElement || document.fullscreenElement,
            (new Date().getTime() - u < 1e3 || (isNaN(u) && isDocumentInFullScreenMode())) &&
              ((window.pbreason = `Blocked a new window opened with URL: ${e[0]} because a full screen was just initiated while opening this url.`),
              document.exitFullscreen
                ? document.exitFullscreen()
                : document.mozCancelFullScreen
                ? document.mozCancelFullScreen()
                : document.webkitCancelFullScreen && document.webkitCancelFullScreen(),
              (n = !1));
          const a = getAbsoluteURL(e[0]);
          (isInWhitelist(a) || isSameDomain(a)) && (n = !0);
          try {
            const e = new URL(a).hostname;
            new RegExp(`(www.|.*.)?${e}.*/(login|signup|auth|openid|oauth)`, "gm").test(a) && (n = !0);
          } catch (e) {}
          if (n) {
            t = o.apply(this, e);
            let n = getWindowName(e);
            if ((null != n && (l[n] = t), t !== window)) {
              const n = new Date().getTime(),
                o = t.blur;
              t.blur = () => {
                new Date().getTime() - n < 1e3 && !isInWhitelist(a)
                  ? ((window.pbreason = `Blocked a new window opened with URL: ${e[0]} because a it was blured`),
                    t.close(),
                    blockedWndNotification(e))
                  : o();
              };
            }
          } else {
            const n = { href: e[0] };
            (n.replace = (e) => {
              n.href = e;
            }),
              (t = {
                close: () => !0,
                test: () => !0,
                blur: () => !0,
                focus: () => !0,
                showModelessDialog: () => !0,
                showModalDialog: () => !0,
                prompt: () => !0,
                confirm: () => !0,
                alert: () => !0,
                moveTo: () => !0,
                moveBy: () => !0,
                resizeTo: () => !0,
                resizeBy: () => !0,
                scrollBy: () => !0,
                scrollTo: () => !0,
                getSelection: () => !0,
                onunload: () => !0,
                print: () => !0,
                open() {
                  return this;
                },
                opener: window,
                closed: !1,
                innerHeight: 480,
                innerWidth: 640,
                name: e[1],
                location: n,
                document: { location: n }
              }),
              copyMissingProperties(window, t),
              (t.window = t);
            let o = getWindowName(e);
            if (null != o)
              try {
                l[o].close();
              } catch (e) {}
            const fnGetUrl = () => {
              let o;
              (o =
                t.location instanceof Object
                  ? t.document.location instanceof Object
                    ? null != n.href
                      ? n.href
                      : e[0]
                    : t.document.location
                  : t.location),
                (e[0] = o),
                blockedWndNotification(e);
            };
            top == self ? setTimeout(fnGetUrl, 100) : fnGetUrl();
          }
          return t;
        }),
        (HTMLElement.prototype.appendChild = function () {
          const e = i.apply(this, arguments);
          return "IFRAME" == e.nodeName && e.contentWindow && appendBlockingCode(e), e;
        }),
        (document.createElement = function (e) {
          const n = r.apply(document, arguments);
          if (e && "a" == e.toLowerCase()) {
            s = new Date().getTime();
            const e = n.click,
              t = n.dispatchEvent;
            (n.click = function (...t) {
              if ((n.href || n.parentElement || (n.children && 0 != n.children.length)) && !isInWhitelist(n.href) && !isSameDomain(n.href))
                return (
                  (window.pbreason = "blocked due to an explicit dispatchEvent event with type 'click' on an 'a' tag"),
                  blockedWndNotification({ 0: n.href }),
                  !0
                );
              e.apply(this, t);
            }),
              (n.dispatchEvent = function (e) {
                return null == e.type || "click" != ("" + e.type).toLocaleLowerCase() || isInWhitelist(n.href) || isSameDomain(n.href)
                  ? t.call(this, e)
                  : ((window.pbreason = "blocked due to an explicit dispatchEvent event with type 'click' on an 'a' tag"),
                    blockedWndNotification({ 0: n.href }),
                    !0);
              }),
              (d = n);
          }
          return e && "iframe" == e.toLowerCase() && appendBlockingCode(n), n;
        }),
        (document.createEvent = function () {
          try {
            return arguments[0].toLowerCase().includes("mouse") &&
              new Date().getTime() - s <= 50 &&
              d.href.trim() &&
              !isInWhitelist(d.href) &&
              !isSameDomain(d.href) &&
              !isLoginLink(d.href)
              ? ((window.pbreason = `Blocked because 'a' element was recently created and ${arguments[0]} event was created shortly after`),
                (arguments[0] = d.href),
                blockedWndNotification({ 0: d.href }),
                { type: "click", initMouseEvent: function () {} })
              : c.apply(document, arguments);
          } catch (e) {
            return c.apply(document, arguments);
          }
        });
      const isSameDomain = (n) => {
          const t = e.domain;
          try {
            const e = new URL(n).hostname;
            return t.includes(e) || e.includes(t);
          } catch (e) {
            return !1;
          }
        },
        isInWhitelist = (e) => isInList(e, n),
        isLoginLink = (e) => new RegExp(".*/(login|signup|auth|openid|oauth)", "gm").test(e),
        isInList = (e, n) => !!n && n.some((n) => new RegExp("https?://(www.|.*.)?" + n + "+").test(e));
      function blockedWndNotification(e) {
        (!a || a < Date.now() - 1e3) &&
          ((e[0] = getAbsoluteURL(e[0])), m.postMessage({ type: "blockedWindow", args: JSON.stringify(e), reason: window.pbreason }, "*")),
          (a = Date.now());
      }
      document.addEventListener("fullscreenchange", () => onFullScreen(document.fullscreen), !1),
        document.addEventListener("mozfullscreenchange", () => onFullScreen(document.mozFullScreen), !1),
        document.addEventListener("webkitfullscreenchange", () => onFullScreen(document.webkitIsFullScreen), !1),
        (window.pbExternalCommand = (e, n) =>
          (function executeCommand(e, n) {
            if (n == t)
              switch (e) {
                case 0:
                  (window.open = o), (document.createElement = r), (document.createEvent = c), (HTMLElement.prototype.appendChild = i);
              }
          })(e, n));
    }
    function restoreWindowOpen() {
      window.open = window.originalOpenFunction;
    }
    injectScript(
      JSON.parse(document.currentScript.getAttribute("tabUrl")),
      JSON.parse(document.currentScript.getAttribute("pb_whitelist")),
      document.currentScript.getAttribute("pb_message")
    );
  }
});
